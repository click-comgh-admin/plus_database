import { getDate } from '@@addons/functions/date_time/date';
import '@@assets/styles/views/attendance/clocking/main.scss';
import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@@addons/widgets/profile_photo';
import '@material/mwc-dialog';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { urlQueryParams, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { DELETE_GroupingsGroup } from '@@addons/network/members/groupings/group/group/delete';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { AttendanceAbsentLeaveAssignmentModel, Convert as aalamConvert } from "@@addons/interfaces/attendance/absent_leave/assignment";
import { getDateTime } from '@@addons/functions/date_time';
import { GroupingsGroup_I } from '@@addons/interfaces/members/groupings/group';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GroupingsSubGroup_I } from '@@addons/interfaces/members/groupings/subgroup';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess, PageButtonUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';


let _branchGroups: { [branch: string]: GroupingsGroup_I[] } = {};
let _branchSubGroups: { [branch: string]: GroupingsSubGroup_I[]} = {};
@customElement("attendance-absent-leave-assignment-view")
export class AttendanceAbsentLeaveAssignmentView extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Number })
  private selectedBranch: number = 1;

  @property({ type: Number })
  private _memberType?: number = 1;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _groups: GroupingsGroup_I[] = [];

  @property({ type: Array })
  private _subgroups: GroupingsSubGroup_I[] = [];

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Number })
  private selectedGroup: number = 0;

  @property({ type: String })
  private datatablePathUrl: string = "attendance/absent-leave/assignment";

  private filterBox: FilterFieldBox;

  @property({ type: Boolean })
  private filterBoxStarted?: boolean = false;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _pageButtonAccess: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];
    
    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });

    await this.getGroups();
    await this.getSubGroups();
    await this.getBranches();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      this._pageButtonAccess = PageButtonUserAccess(PAGE__IDS.absent_leave_assignment);
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.absent_leave_assignment, viewType: "View"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <div class="shadow bg-white p-2">
        <span class="flex flex-row md:flex-col w-100"></span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}<br />
        </div>
        <div class="block my-1">
          ${this.table}
        </div>
      </div>
    `;
  }

  private renderColOne(data: any, type: any, assignmentInfo: AttendanceAbsentLeaveAssignmentModel) {
    const AssignmentInfo = aalamConvert.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(assignmentInfo)),
      MEMBER_ID = base64Encode(String(AssignmentInfo.memberID), true);
    
    if (AssignmentInfo.memberInfo.accountType === 1) {
        return `<div class="flex flex-col whitespace-normal justify-between content-between">
          <div class="flex m-1 justify-evenly">
            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""
              click-to-open="${this.memberProfileBaseUrl}${MEMBER_ID}" type="member"
              url="${AssignmentInfo.memberInfo.profilePicture}" size="32"></user-profile-photo>
          </div>
          <div class="block m-1">
            <span class="shadow p-1 block bg-white rounded text-dark">
              <b>Name</b>: ${AssignmentInfo.memberInfo.firstname} ${AssignmentInfo.memberInfo.middlename} ${AssignmentInfo.memberInfo.surname}
            </span>
          </div>
        </div>`;
    } else {
        return `<div class="flex flex-col whitespace-normal justify-between content-between">
          <div class="flex m-1 justify-evenly">
            <user-profile-photo class="w-32 h-32 mr-1" rounded type="member"
              url="${AssignmentInfo.memberInfo.logo}" size="32"></user-profile-photo>
          </div>
          <div class="block m-1">
            <span class="shadow p-1 block bg-white rounded text-dark">
              <b>Name</b>: ${AssignmentInfo.memberInfo.organizationName}
            </span>
          </div>
        </div>`;
    }
  }

  private renderColThree(data: any, type: any, assignmentInfo: AttendanceAbsentLeaveAssignmentModel) {
    const AssignmentInfo = aalamConvert.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(assignmentInfo)),
      ASSIGNMENT_ID = AssignmentInfo.id;
    
    return `<div class="flex flex-col whitespace-normal justify-between content-between">
      <div class="block m-1 shadow p-1 bg-white rounded text-dark">
        <h6 class="whitespace-nowrap text-base font-bold mr-1">Leave Type</h6>
        <p class="text-sm ml-1">On ${AssignmentInfo.statusID.status} for ${this.get_days(AssignmentInfo.totalDays)}</p>
      </div>
      <div class="block m-1 shadow p-1 bg-white rounded text-dark">
        <h6 class="whitespace-nowrap text-base font-bold mr-1">Period:</h6>
        <p class="text-sm ml-1">From: ${getDate(AssignmentInfo.fromDate)} To: ${getDate(AssignmentInfo.toDate)}</p>
      </div>
      <div class="whitespace-nowrap my-1">
        ${this.view_assignment_details(AssignmentInfo)}
        <mwc-button class="w-full button info" outlined open-dialog-btn="assignment-details-${ASSIGNMENT_ID}">
          <mwc-icon class="mr-1">info</mwc-icon> Details
        </mwc-button>
      </div>
      ${AssignmentInfo.reason === null? "": `<div class="whitespace-nowrap my-1">
        ${this.view_assignment_reason(AssignmentInfo)}
        <mwc-button class="w-full button warning" outlined open-dialog-btn="assignment-reason-${ASSIGNMENT_ID}">
          <mwc-icon class="mr-1">note</mwc-icon> Reason
        </mwc-button>
      </div>` }
    </div>`;
  }

  private renderColTwo(data: any, type: any, assignmentInfo: AttendanceAbsentLeaveAssignmentModel) {
    const AssignmentInfo = aalamConvert.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(assignmentInfo))
    // console.log({statusInfo});
    const ASSIGNMENT_ID = AssignmentInfo.id,
      ASSIGNMENT_CODE = base64Encode(String(ASSIGNMENT_ID), true);
    
    // console.log({ASSIGNMENT_ID, ASSIGNMENT_CODE});   
    
    const delete_button = this._pageButtonAccess ? `<mwc-button class="w-full button danger" outlined delete-this-item="${ASSIGNMENT_ID}" onclick="${(e: any)=>console.log({e})}">
      <mwc-icon class="mr-1">delete_forever</mwc-icon> Delete
    </mwc-button>`: '';
        
    return `
      <div class="flex flex-col whitespace-normal justify-between content-between">
        ${delete_button}
        <link-button isblockcontent="false" aClass="" raised bClass="w-full button warning mr-2" href="${CONSTANTS.URLS.PDB_CLIENT}absent-leave/edit-al-assignment?view-assignment=${ASSIGNMENT_CODE}"
          label="Update">
        </link-button>
      </div>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
    filterNameId_branchId = "branchId",
    filterNameId_group = "groupId",
    filterNameId_subGroup = "subgroupId",
    filterNameId_search = "search",
    filterNameId_fromDate = "from_date",
    filterNameId_toDate = "to_date";

    let newObject:any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_branchId) || (key === filterNameId_group)
        || (key === filterNameId_subGroup) || (key === filterNameId_search)
        || (key === filterNameId_fromDate) || (key === filterNameId_toDate)) {
        // console.log({value, });
        
        newObject[key] = value;
      }
    } 

    if (!(filterNameId_branchId in newObject)) {
      let userBranch = 0;
      if (this._userLoginInfo !== null) {
        if (this._userLoginInfo.length > 0) {
          userBranch = this._userLoginInfo[0].user.branchId;
        }
      }
      newObject[filterNameId_branchId] = userBranch;
    }

    if (!(filterNameId_group in newObject)) {
      if (this._groups.length > 0) {
        newObject[filterNameId_group] = this._groups[0].id;
      }
    } else {
      if (newObject[filterNameId_group].length < 1 || newObject[filterNameId_group] === 0) {
        delete newObject[filterNameId_group];
      }
    }

    if (!(filterNameId_subGroup in newObject)) {
      if (this._subgroups.length > 0) {
        newObject[filterNameId_subGroup] = this._subgroups[0].id;
      }
    } else {
      if (newObject[filterNameId_subGroup].length < 1 || newObject[filterNameId_subGroup] === 0) {
        delete newObject[filterNameId_subGroup];
      }
    }

    if (filterNameId_search in newObject) {
      if (newObject[filterNameId_search].length < 1 || newObject[filterNameId_search] === "") {
        delete newObject[filterNameId_search];
      }
    }

    if (filterNameId_fromDate in newObject && filterNameId_toDate in newObject) {
      if (newObject[filterNameId_fromDate].length < 1 || newObject[filterNameId_fromDate] === "") {
        delete newObject[filterNameId_fromDate];
        delete newObject[filterNameId_toDate];
      }
      if (newObject[filterNameId_toDate].length < 1 || newObject[filterNameId_toDate] === "") {
        delete newObject[filterNameId_fromDate];
        delete newObject[filterNameId_toDate];
      }
    }

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);

    return (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin;
  }

  private get filterForm() {
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }

    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_branchId = "branchId",
      filterNameId_group = "groupId",
      filterNameId_subGroup = "subgroupId",
      filterNameId_search = "search",
      filterNameId_fromDate = "from_date",
      filterNameId_toDate = "to_date";

    let filterNameId_branchIdVal: number = userBranch,
      filterNameId_groupVal: number = null,
      filterNameId_subGroupVal: number = null,
      filterNameId_searchVal: string = null,
      filterNameId_fromDateVal: Date = null,
      filterNameId_toDateVal: Date = null;

    for (const key in _urlQueryParams) {
        let value = String(_urlQueryParams[key]);
        value = value === "" ? null : value;
        if (key === filterNameId_branchId) {
          filterNameId_branchIdVal = Number(value);
        }
        if (key === filterNameId_group) {
          filterNameId_groupVal = Number(value);
        }
        if (key === filterNameId_subGroup) {
          filterNameId_subGroupVal = Number(value);
        }
        if (key === filterNameId_search) {
          filterNameId_searchVal = String(value);
          if (filterNameId_searchVal === "null") {
            filterNameId_searchVal = "";
          }
        }
        if (key === filterNameId_fromDate) {
          console.log({"filterNameId_fromDate-value": value});
          
          filterNameId_fromDateVal = new Date(value);
        }
        if (key === filterNameId_toDate) {
          console.log({"filterNameId_toDate-value": value});
          
          filterNameId_toDateVal = new Date(value);
        }
    }
    
    const branchField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
            name="${filterNameId_branchId}" id="${filterNameId_branchId}"
            outlined required @change="${this.branchChange}">
            ${userBranch === 1 ? html`
              <mwc-list-item value="0">Select Branch</mwc-list-item>
              ${this._branches.map((value) => {
                if (filterNameId_branchIdVal === value.id) {
                  return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                }
              })}
            `: html`
              ${this._branches.map((value) => {
                if (value.id === userBranch) {
                  return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                }
              })}
            `}
          </mwc-select>
        </div>
      </div>`;

    const groupField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <mwc-select class="w-full" setSelectedGroupId label="Select Group"
            name="${filterNameId_group}" id="${filterNameId_group}"
            outlined required @change="${this.groupChange}" value="${filterNameId_groupVal}">
            <mwc-list-item value="">Select Group</mwc-list-item>
            ${this._groups.map((value) => {
              if (filterNameId_groupVal === value.id) {
                return html`<mwc-list-item value="${value.id}" selected>${value.group}</mwc-list-item>`;
              } else {
                return html`<mwc-list-item value="${value.id}">${value.group}</mwc-list-item>`;
              }
            })}
          </mwc-select>
        </div>
      </div>`;

    const subGroupField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <mwc-select class="w-full" label="Select Sub-Group"
            name="${filterNameId_subGroup}" id="${filterNameId_subGroup}"
            outlined required value="${filterNameId_subGroupVal}">
            <mwc-list-item value="">Select Sub-Group</mwc-list-item>
            ${this._subgroups.map((value) => {
              if (filterNameId_subGroupVal === value.id) {
                return html`<mwc-list-item value="${value.id}" selected>${value.subgroup}</mwc-list-item>`;
              } else {
                return html`<mwc-list-item value="${value.id}">${value.subgroup}</mwc-list-item>`;
              }
            })}
          </mwc-select>
        </div>
      </div>`;

    const searchField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search <span class="text-yellow-400 uppercase">[name/ ref-id/ id/ phone/ email]</span></h4>
          <mwc-textfield name="${filterNameId_search}" id="${filterNameId_search}" label="Enter Search Term"
            outlined required value="${filterNameId_searchVal === null? "": filterNameId_searchVal}">
          </mwc-textfield>
        </div>
      </div>`;

    const filterByDateFields = html`
      <div class="col-xl-4 col-md-6">
        <div class="row">
          <div class="col-md-6">
            <div class="form-input-container !block">
              <h4 class="font-semibold my-2">From <span class="text-yellow-500 uppercase">Pick Date</span></h4>
              <mwc-textfield type="date" name="${filterNameId_fromDate}" id="${filterNameId_fromDate}"
                value="${this.getDate(filterNameId_fromDateVal)}" outlined required></mwc-textfield>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-input-container !block">
              <h4 class="font-semibold my-2">To <span class="text-yellow-500 uppercase">Pick Date</span></h4>
              <mwc-textfield type="date" name="${filterNameId_toDate}" id="${filterNameId_toDate}"
                value="${this.getDate(filterNameId_toDateVal)}" outlined required></mwc-textfield>
            </div>
          </div>
        </div>
      </div>`;
      returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${branchField} ${groupField} ${subGroupField} ${searchField} ${filterByDateFields}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`
    return returnHtml;
  }

  async branchChange(e: Event) {
    // @ts-ignore
    const branchId = Number.isNaN(e.currentTarget.value) ? 0 : Number(e.currentTarget.value);
    this.selectedBranch = branchId;
    // console.log({ "this.selectedBranch": this.selectedBranch });
    await this.getGroups("?branchId=" + branchId, branchId);
  }

  async groupChange(e: Event) {
    // @ts-ignore
    const groupId = Number.isNaN(e.currentTarget.value)? 0: Number(e.currentTarget.value);
    // console.log({ "this.selectedGroup": this.selectedGroup });
    await this.getSubGroups(
      "?groupId=" + groupId + "&branchId=" + this.selectedBranch,
      groupId
    );

  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member', },
      { title: 'Info', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member', },
      { title: 'Info', },
      { title: 'Action', },
    ];
  }

  private get table(): TemplateResult {
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "" + this.datatablePathUrl + "?datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    // console.log({URL});
    
    const __dataTable = this.__dataTable(URL);
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  firstUpdated() {
    setInterval(() => {
      if (this.filterSectionContextContainer !== null) {
        if (!this.filterBoxStarted) {
          // let branchId = 0;
          // if (this._activeBranchId !== null) {
          //   branchId = this._activeBranchId[0].id;
          // }
          this.filterBox = new FilterFieldBox({
            selectors: {
              container: this.filterSectionContextContainer,
              form: this.filterSectionContextForm,
              filterSectionContextBtn: this.filterSectionContextBtn,
            }, unmutableInputNames: [
              // { name: 'branchId', value: String(branchId) },
            ],
          }); 
          this.filterBoxStarted = true;
          this.dialog();
          this.deleteMemberFx();
        }
      }
    });   
  }

  private __dataTable(url: string): DataTables_Settings_I {
    const __this = this;

    // console.log({ "projects": this._questionnaireResponses });
    
    let dataTable: DataTables_Settings_I = {
      'order': [[0, 'desc']],
      'processing': true,
      'serverSide': true,
      'ajax': {
        url: url,
        dataSrc: 'data',
        apiType: "akwaabaApp",
      },
      "columns": [
        {
          data: 'id',
          render: (data: any, type: any, assignmentInfo: any) => __this.renderColOne(data, type, assignmentInfo),
          orderable: true
        },
        {
          data: 'memberId',
          render: (data: any, type: any, assignmentInfo: any) => __this.renderColThree(data, type, assignmentInfo),
          orderable: true
        },
        {
          data: 'statusId',
          render: (data: any, type: any, assignmentInfo: any) => __this.renderColTwo(data, type, assignmentInfo),
          orderable: true
        },

      ],
      'columnDefs': [
        {
          targets: ['_all'],
          className: 'mdc-data-table__cell',
          // @ts-ignore
          checkboxes: {
            selectRow: true
          },
        }
      ],
      'lengthMenu': [10, 25, 50, 100, 500, 1000],
      "drawCallback": async function (e) {
        const aoData = e.aoData;
        // console.log({ aoData })
        __this.deleteMemberFx();
        __this.dialog();
      },
      "responsive": false,
      "dom": 'Blfrtip',
      buttons: [
        'selected',
        'selectedSingle',
        'selectAll',
        'selectNone',
        'selectRows',
        'selectColumns',
        'selectCells',
        // 'pdf',
        // 'excel',
        // 'copy',
        // 'csv',
      ],
      select: true,
      // "select": {
      //   "style": "multi"
      // },
    };
    return dataTable;
  }

  private deleteMemberFx() {
    document.querySelectorAll('[delete-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.deleteItemFromList(e);
      })
    });
  }

  private view_assignment_details(assignmentInfo: AttendanceAbsentLeaveAssignmentModel) {    
    let __call__ = assignmentInfo.memberAdditionalInfo?.phone,
      __whatsapp__ = assignmentInfo.memberAdditionalInfo?.whatsapp;

    return `
      <mwc-dialog open-this-dialog="assignment-details-${assignmentInfo.id}" heading="Assignment Details">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex flex-col m-1 justify-evenly">
            <div class="flex flex-col justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Leave Type</h6>
              <p class="text-sm ml-1">On ${assignmentInfo.statusID.status} for ${this.get_days(assignmentInfo.totalDays)}</p>
              <hr/ >
            </div>
            <div class="flex flex-col justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Period:</h6>
              <p class="text-sm ml-1">From: ${getDate(assignmentInfo.fromDate)} To: ${getDate(assignmentInfo.toDate)}</p>
              <hr/ >
            </div>
            <div class="flex flex-col justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Days Left:</h6>
              <p class="text-sm ml-1">${this.get_days(assignmentInfo.totalDaysLeft)}</p>
              <hr/ >
            </div>
            <div class="flex flex-col justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Branch:</h6>
              <p class="text-sm ml-1">${this.get_branch(assignmentInfo.statusID.branchID)}</p>
              <hr/ >
            </div>
            <div class="flex flex-col justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Group:</h6>
              <p class="text-sm ml-1">${this.get_group}</p>
              <hr/ >
            </div>
            <div class="flex flex-col justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Contact:</h6>
              <p class="text-sm ml-1">
                <a class="text-yellow-600" href="tel://${__call__}">Call</a>/
                <a class="text-green-600" href="https://api.whatsapp.com/send?phone=+${__whatsapp__}&amp;text=">Whatsapp</a>
              </p>
              <hr/ >
            </div>
            <div class="flex flex-col justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Last Update:</h6>
              <p class="text-sm ml-1">
                ${assignmentInfo.updatedByInfo === null ? "-" : `${assignmentInfo.updatedByInfo.firstname} ${assignmentInfo.updatedByInfo.surname}`}</p>
              <p class="text-sm ml-1">By: ${getDateTime(assignmentInfo.updateDate)}</p>
            </div>
          </div>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `;

  }

  private view_assignment_reason(assignmentInfo: AttendanceAbsentLeaveAssignmentModel) {
    return `
      <mwc-dialog open-this-dialog="assignment-reason-${assignmentInfo.id}" heading="Assignment Reason">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex flex-col m-1 justify-evenly">
            <div class="flex flex-col justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Reason</h6>
              <p class="text-sm ml-1 whitespace-pre-line">${assignmentInfo.reason}</p>
            </div>
          </div>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `;

  }

  get_branch(id: number) {
    let branch_name = "";
    this._branches.forEach(branch => {
      if (branch.id === id) {
        branch_name = branch.name;
      }
    })
    return branch_name;
  }

  get get_group() {
    let group_name = "";
    for (const key in _branchGroups) {
      const currentGroupList = _branchGroups[key];

      currentGroupList.forEach(group => {
        if (group.id === this.selectedGroup) {
          group_name = group.group;
        }
      });
    }

    return group_name;
  }

  getDate(date: Date) {
    console.log({ "date_date_date": date });
    if (date === null) {
      return "";
    }
    
    let year = date.toLocaleString('default', { year: "numeric" }),
      month = date.toLocaleString('default', { month: "2-digit" }),
      day = date.toLocaleString('default', { day: "2-digit" });
    return year + "-" + month + "-" + day;
  }

  get_days(num?: number) {
    if (num === null) {
      return "0 days";
    } 
    if (num === 1) {
      return "1 day";
    }
    return `${num} days`
  }

  async deleteItemFromList(e: Event) {
    e.preventDefault();
    // console.log({ e });
    // @ts-ignore
    const _itemId = e.currentTarget.getAttribute('delete-this-item'),
      itemId = Number.isNaN(_itemId) ? 0 : Number(_itemId);
    await DELETE_GroupingsGroup(itemId);
  }

  private dialog() {
    document.querySelectorAll('[open-dialog-btn]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.showDialog(e);
      })
    });

  }

  private showDialog(event: any) {
    // event.preventDefault();
    // console.log({event})

    const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  private async getBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranches_I>();
    let __branches: ClientBranches_I[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: ClientBranches_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __branches = DATA;
      }
    }
    const new_data: Array<ClientBranches_I> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  private async getGroups(url_params: string = "", branchID: number = null) {
    const KEY = (branchID === null) || branchID < 1 ? "__" : String(branchID);
    // console.log({"_branchGroups": _branchGroups});
    
    this._groups = [];
    if (KEY in _branchGroups) {
      setTimeout(() => {
        this._groups = _branchGroups[KEY];
      }, 500);
      return;
    }
    
    const _networkResponse = await GET_MemberGroupingsGroups<GroupingsGroup_I>(null, url_params);
    let __groups: GroupingsGroup_I[] = [];

    if (_networkResponse === null) {
      __groups.push({ id: 0, group: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsGroup_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __groups = DATA;
      }
    }
    const new_data: Array<GroupingsGroup_I> = [];
    new_data.push(...this._groups, ...__groups);
    this._groups = new_data;
    _branchGroups[KEY] = this._groups;
  }

  private async getSubGroups(url_params: string = "", groupID: number | null = null) {
    const KEY = (groupID === null) || groupID < 1 ? "__" : String(groupID);
    console.log({"_branchSubGroups": _branchSubGroups});
    
    this._subgroups = [];
    if (KEY in _branchSubGroups) {
      setTimeout(() => {
        this._subgroups = _branchSubGroups[KEY];
      }, 500);
      return;
    }
    
    const _networkResponse = await GET_MemberGroupingsSubGroups<GroupingsSubGroup_I>(null, url_params);
    let __subgroups: GroupingsSubGroup_I[] = [];

    if (_networkResponse === null) {
      __subgroups.push({ id: 0, subgroup: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsSubGroup_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __subgroups = DATA;
      }
    }
    const new_data: Array<GroupingsSubGroup_I> = [];
    new_data.push(...this._subgroups, ...__subgroups);
    this._subgroups = new_data;
    _branchSubGroups[KEY] = this._subgroups;
  }

  createRenderRoot() {
    return this;
  }
}
