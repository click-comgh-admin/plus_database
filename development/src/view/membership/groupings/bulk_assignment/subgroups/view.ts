import '@@assets/styles/views/attendance/clocking/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { base64Encode } from '@@addons/functions/base64';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@@addons/widgets/profile_photo';
import '@@addons/widgets/form/new/select';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { urlQueryParams, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import '../../../members/select-member-type';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { MembershipUserModel, Convert as MuMconvert } from '@@addons/interfaces/members/user/model/index2';
import { MembershipOrganizationUserModel, Convert as MouMconvert } from '@@addons/interfaces/members/user/organization_model';
import { GroupingsGroup_I } from '@@addons/interfaces/members/groupings/group';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { DELETE_MemberGroupingsSubGroupMember } from '@@addons/network/members/groupings/subgroup/delete_member';
import { GroupingsSubGroup_I } from '@@addons/interfaces/members/groupings/subgroup';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../../page__id';


type groupSubgroupType = { id: number; name: string; isSelected: "true" | "false"; selected: boolean; };
let _branchGroups: { [branch: string]: GroupingsGroup_I[] } = {};
let _branchSubGroups: { [branch: string]: GroupingsSubGroup_I[]} = {};
@customElement("membership-groupings-bulk_assignment-subgroups-view")
export class MembershipGroupingsBulkAssignmentMemberSubgroupsView extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Number })
  private _memberType?: number = 1;

  @property({ type: Number })
  private selectedBranch: number = 1;

  @property({ type: Array })
  private _groups: GroupingsGroup_I[] = [];

  @property({ type: Array })
  private _subgroups: GroupingsSubGroup_I[] = [];

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  // private _branchGroups: { [branch: string]: GroupingsGroup_I[]} = {"__": []};

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  @property({ type: String })
  private datatablePathUrl: string = "members/groupings/bulk-assignment/get-subgroups";

  private filterBox: FilterFieldBox;

  @property({ type: Boolean })
  private filterBoxStarted?: boolean = false;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

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
    await this.getClientMemberCategories();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.assignment, viewType: "View"}, false)) {
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

  private renderMemberInfo(data: any, type: any, memberInfo: any) {
    // console.log({memberInfo});

    if (memberInfo.accountType === 1) {
      const member: MembershipUserModel = MuMconvert.toMembershipUserModel(JSON.stringify(memberInfo));
      const MEMBER_ID = base64Encode(String(member.id), true);
      return `
        <div class="flex flex-col whitespace-normal justify-between content-between">
          <div class="flex m-1 justify-evenly">
            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""
              click-to-open="${this.memberProfileBaseUrl}${MEMBER_ID}" type="member"
              url="${member.profilePicture}" size="32"></user-profile-photo>
          </div>
          <div class="block m-1">
            <span class="shadow p-1 block bg-white rounded text-dark">
              <b>Name</b>: ${member.firstname} ${member.middlename} ${member.surname}
            </span>
          </div>
        </div>
      `;
    } else {
      const member: MembershipOrganizationUserModel = MouMconvert.toMembershipOrganizationUserModel(JSON.stringify(memberInfo));
      return `
        <div class="flex flex-col whitespace-normal justify-between content-between">
          <div class="flex m-1 justify-evenly">
            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="false"
              click-to-open="false" type="member"
              url="${member.logo}" size="32"></user-profile-photo>
          </div>
          <div class="block m-1">
            <span class="shadow p-1 block bg-white rounded text-dark">
              <b>Org. Name</b>: ${member.organizationName}
            </span>
          </div>
        </div>
      `;
    }
  }

  private removeFromList(data: any, type: any, memberInfo: MembershipUserModel) {
    // console.log({memberInfo});
    const MEMBER_ID = memberInfo.id;
    
    const _urlQueryParams = urlQueryParams(),
    subGroupId = 'subGroupId' in _urlQueryParams ? Number(_urlQueryParams['subGroupId']) : 0;

    return `
      <div class="flex flex-col whitespace-normal justify-between content-between">
        <mwc-button class="button warning" outlined delete-this-item="${subGroupId}"
        delete-item-member-id="${MEMBER_ID}">
          <mwc-icon class="mr-1">delete_forever</mwc-icon> Remove
        </mwc-button>
      </div>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
    filterNameId_branchId = "branchId",
    filterNameId_memberType = "memberType",
    filterNameId_group = "groupId",
    filterNameId_subGroup = "subGroupId";

    let newObject:any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_branchId) || (key === filterNameId_memberType) || (key === filterNameId_group) || (key === filterNameId_subGroup)) {
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

    if (!(filterNameId_memberType in newObject)) {
      newObject[filterNameId_memberType] = "1";
    }

    if (!(filterNameId_group in newObject)) {
      if (this._groups.length > 0) {
        newObject[filterNameId_group] = this._groups[0].id;
      } else {
        newObject[filterNameId_group] = "0";
      }
    }

    if (!(filterNameId_subGroup in newObject)) {
      if (this._subgroups.length > 0) {
        newObject[filterNameId_subGroup] = this._subgroups[0].id;
      } else {
        newObject[filterNameId_subGroup] = "0";
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
      filterNameId_memberType = "memberType",
      filterNameId_group = "groupId",
      filterNameId_subGroup = "subGroupId";

    let filterNameId_memberTypeVal: number = 1,
      filterNameId_branchIdVal: number = userBranch,
      filterNameId_groupVal: number = null,
      filterNameId_subGroupVal: number = null;
    
      for (const key in _urlQueryParams) {
        let value = String(_urlQueryParams[key]);
        value = value === "" ? null : value;
        if (key === filterNameId_memberType) {
          filterNameId_memberTypeVal = Number(value);
        }
        if (key === filterNameId_branchId) {
          filterNameId_branchIdVal = Number(value);
        }
        if (key === filterNameId_group) {
          filterNameId_groupVal = Number(value);
        }
        if (key === filterNameId_subGroup) {
          filterNameId_subGroupVal = Number(value);
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

    const memberCategoryField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${filterNameId_memberTypeVal}" 
            name="${filterNameId_memberType}" id="${filterNameId_memberType}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;
    
    const groups = this._groups.map(_group => {
      const group: groupSubgroupType = {
        id: _group.id, name: _group.group,
        isSelected: _group.id === filterNameId_groupVal
          ? "true" : "false",
        selected: _group.id === filterNameId_groupVal ? true : false,
      };
      // console.log({"_group.id": _group.id, "filterNameId_groupVal": filterNameId_groupVal, group});
      
      return group
    });
    
    const subGroups = this._subgroups.map(_subgroup => {
      const group: groupSubgroupType = {
        id: _subgroup.id, name: _subgroup.subgroup,
        isSelected: _subgroup.id === filterNameId_subGroupVal
          ? "true" : "false",
        selected: _subgroup.id === filterNameId_subGroupVal ? true : false,
      };
      
      // console.log({"_subgroup.id": _subgroup.id, "filterNameId_subGroupVal": filterNameId_subGroupVal, subgroup});
      
      return group
    });

    const groupField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <mwc-select class="w-full" setSelectedGroupId label="Select Group"
            name="${filterNameId_group}" id="${filterNameId_group}"
            outlined required @change="${this.groupChange}">
            <mwc-list-item value="0">Select Group</mwc-list-item>
            ${groups.map((value) => {
              if (filterNameId_groupVal === value.id) {
                return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
              } else {
                return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
              }
            })}
          </mwc-select>
        </div>
      </div>`;

    const groupField_ = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="${filterNameId_group}" class="w-full" id="${filterNameId_group}" label="Select User Group" .options="${groups}"
            outlined required @change="${this.groupChange}" >
          </select-input>
        </div>
      </div>`;

    const subGroupField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="${filterNameId_subGroup}" class="w-full" id="${filterNameId_subGroup}" label="Select User Sub-Group" .options="${subGroups}"
            outlined required >
          </select-input>
        </div>
      </div>`;
      returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${branchField} ${memberCategoryField} ${groupField} ${subGroupField}
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
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member', },
      { title: 'Info', },
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
          render: (data: any, type: any, memberInfo: MembershipUserModel) => __this.renderMemberInfo(data, type, memberInfo),
          orderable: true
        },
        {
          data: 'inTime',
          render: (data: any, type: any, memberInfo: MembershipUserModel) => __this.removeFromList(data, type, memberInfo),
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
        this.deleteMemberFromList(e);
      })
    });
  }

  async deleteMemberFromList(e: Event) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const subGroupId = Number(e.currentTarget.getAttribute('delete-this-item'));
    // @ts-ignore
    const memberId = Number(e.currentTarget.getAttribute('delete-item-member-id'));

    await DELETE_MemberGroupingsSubGroupMember(subGroupId, memberId);
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
  
  private async getClientMemberCategories() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategories_I>();
    let __memberCategories: GroupingsMemberCategories_I[] = [];

    if (_networkResponse === null) {
      __memberCategories.push({ id: 0, category: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsMemberCategories_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __memberCategories = DATA;
      }
    }
    const new_data: Array<GroupingsMemberCategories_I> = [];
    new_data.push(...this._memberCategories, ...__memberCategories);
    this._memberCategories = new_data;
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
    // console.log({"_branchSubGroups": _branchSubGroups});
    
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
