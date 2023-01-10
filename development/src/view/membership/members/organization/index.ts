import '@@assets/styles/views/branch/main.scss';
import "@@assets/styles/views/home/dashboard.scss";
import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property, query, } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/select';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import '@@addons/widgets/profile_photo';
import { base64Encode } from '@@addons/functions/base64';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import '../select-member-type';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import '../../../no_access/no_page_entry';
import '../../../no_access/account_expired';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../page__id';
import { AppSetup } from '@@addons/functions/app_settings';
import { MembershipMixedUserModel, Convert as mmumConvert } from '@@addons/interfaces/members/user/mixed';
import { GroupModel, Convert as gmConvert } from '@@addons/interfaces/members/groupings/group/models';
import { SubGroupModel, Convert as sgmConvert } from '@@addons/interfaces/members/groupings/subgroup/models';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { GET_MembershipOrganizationUserDownload } from '@@addons/network/members/membership/users/organization/download';


type filterSelectType = { id: number|""; name: string; isSelected: "true" | "false"; selected: boolean; };
@customElement("pdb-membership-member-organizations")
export class PdbMembershipMemberOrganizations extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/organization/member-profile?view=";

  // @property({ type: String })
  // private memberProfileEditBaseUrl: string = "/member/update-profile?edit=";

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _groups: GroupModel[] = [];

  @property({ type: Array })
  private _subgroups: SubGroupModel[] = [];

  @property({ type: Boolean })
  private downloadingFile: boolean = false;

  @property({ type: Number })
  private _memberType?: number = 1;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  private __members: NetworkCallPaginResponse_I<MembershipMixedUserModel> = null;

  public set _members(value: NetworkCallPaginResponse_I<MembershipMixedUserModel>) {
    this.__members = value;
    this.requestUpdate();
  }

  public get _members(): NetworkCallPaginResponse_I<MembershipMixedUserModel> {
    return this.__members;
  }

  private filterBox: FilterFieldBox;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });
    
    await this.getGroups();
    await this.getSubGroups();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.view, viewType: "View"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1">
        ${this.downloadBtns}
        ${this.table}
      </div>
    `;
  }

  firstUpdated() {
    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });
  }

  private get downloadBtns() {
    return html`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadMemberExcel}">
        </mwc-button> 
        ${this.downloadingFile? html`<mwc-circular-progress indeterminate></mwc-circular-progress>`: nothing}
      </div>
    `
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_name = "filter_name",
      filterNameId_filter_identity = "filter_identity",
      filterNameId_memberType = "memberType",
      filterNameId_groupId = "groupId",
      filterNameId_subgroupId = "subgroupId";

    let filterNameId_filter_nameVal:string = null,
      filterNameId_filter_identityVal: string = null,
      filterNameId_memberTypeVal: string = null,
      filterNameId_groupIdVal: string = null,
      filterNameId_subgroupIdVal: string = null;
    
      for (const key in _urlQueryParams) {
        let value = String(_urlQueryParams[key]);
        value = value === "" ? null : value;
        if (key === filterNameId_filter_name) {
          filterNameId_filter_nameVal = value;
        }
        if (key === filterNameId_filter_identity) {
          filterNameId_filter_identityVal = value;
        }
        if (key === filterNameId_memberType) {
          filterNameId_memberTypeVal = value;
        }
        if (key === filterNameId_groupId) {
          filterNameId_groupIdVal = value;
        }
        if (key === filterNameId_subgroupId) {
          filterNameId_subgroupIdVal = value;
        }
      }
    
    const nameField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name</h4>
          <mwc-textfield type="text" name="${filterNameId_filter_name}" id="${filterNameId_filter_name}" label="Search By Name" 
            value="${filterNameId_filter_nameVal === null ? "" : filterNameId_filter_nameVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;
    
    const identifyField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Organization ID</h4>
          <mwc-textfield name="${filterNameId_filter_identity}" id="${filterNameId_filter_identity}" label="Search By Organization ID"
            value="${filterNameId_filter_identityVal === null ? "" : filterNameId_filter_identityVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;

    const memberCategoryField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${filterNameId_memberTypeVal}" 
            name="${filterNameId_memberType}" id="${filterNameId_memberType}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;

    const selectedGroupID = Number.isNaN(filterNameId_groupIdVal) ? 0 : Number(filterNameId_groupIdVal),
      selectedSubGroupID = Number.isNaN(filterNameId_subgroupIdVal) ? 0 : Number(filterNameId_subgroupIdVal);
    const groupsSubgroups = this.groupsSubgroups(selectedGroupID, selectedSubGroupID);
    // console.log({groupsSubgroups});
    
    
    const groupField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="groupId" class="w-full" id="groupId" label="Select Group"
            .options="${groupsSubgroups.groups}" outlined required>
          </select-input>
        </div>
      </div>`;
    
    const subGroupField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="subgroupId" class="w-full" id="subgroupId" label="Select Sub-Group"
            .options="${groupsSubgroups.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`;

      returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${nameField} ${identifyField} ${memberCategoryField}
              <div class="col-md-12 my-2"><hr/></div>
              ${groupField} ${subGroupField}
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

  private groupsSubgroups(selectedGroupID: number, selectedSubGroupID: number) {
    type returnType = { groups: filterSelectType[], subgroups: filterSelectType[] };
    let groups: filterSelectType[] = [{id: 0, name: "Select Group Status", isSelected: "false", selected: false}];
    let subgroups: filterSelectType[] = [{id: 0, name: "Select Sub-Group Status", isSelected: "false", selected: false}];

    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});
    

    this._groups.forEach(_group => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
        if (selectedGroupID === _group.id) {
          isSelected = true;
          isSelectedAlt = "true";
        }
      const group: filterSelectType = {
        id: _group.id, name: _group.group, isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!groups.includes(group)) {
        groups.push(group);
      }
    });

    // console.log({"this._subgroups": this._subgroups})
    this._subgroups.forEach(_subgroup => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
        if (selectedSubGroupID === _subgroup.id) {
          isSelected = true;
          isSelectedAlt = "true";
        }
      const subgroup: filterSelectType = {
        id: _subgroup.id, name: `${_subgroup.groupID.group} => ${_subgroup.subgroup}`,
        isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!subgroups.includes(subgroup)) {
        subgroups.push(subgroup);
      }
    });

    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});
    // console.log({"groups-groups": groups, "subgroups-subgroups": subgroups});

    const _returnType: returnType = {
      groups: groups, subgroups: subgroups,
    }
    return _returnType;
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member(s)', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member(s)', },
      { title: 'Action', },
    ];
  }

  private get table(): TemplateResult {
    // const memberType = this._memberType;
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    // let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "members/user-organization?branchId=" + branchId + "&memberType=" + memberType + "&order__by=firstname&datatable_plugin";
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "members/user-organization?branchId=" + branchId + "&order__by=firstname&datatable_plugin";

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

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_name = "filter_name",
      filterNameId_filter_identity = "filter_identity",
      filterNameId_memberType = "memberType",
      filterNameId_groupId = "groupId",
      filterNameId_subgroupId = "subgroupId";

    let newObject:any = {};
    // for (const key in _urlQueryParams) {
    //   let value = Number(_urlQueryParams[key]);
    //   if (!Number.isNaN(value) && (value !== 0)) {
    //     // console.log({value, });
        
    //     newObject[key] = value;
    //   }
    // }

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_filter_name) || (key === filterNameId_filter_identity)
        || (key === filterNameId_memberType) || (key === filterNameId_groupId)
        || (key === filterNameId_subgroupId)) {
        // console.log({value, });
        
        newObject[key] = value;

        if ((key === filterNameId_groupId) || (key === filterNameId_subgroupId)) {
          // console.log({value, });
          if (value === "0") {
            newObject[key] = "";
          }
        }
      }
    }

    if (!(filterNameId_memberType in newObject)) {
      newObject[filterNameId_memberType] = "1";
    }

    // console.log({"newObject-newObject": newObject});
    

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);

    return (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin;
  }

  private async getGroups() {
    const _networkResponse = await GET_MemberGroupingsGroups<any>();
    let __groups: GroupModel[] = [];

    if (_networkResponse === null) {
      __groups.push({ id: 0, group: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        // console.log({"_networkResponse.response.data": _networkResponse.response.data});

        const DATA: GroupModel[] = _networkResponse.response.data.map((group: any) => gmConvert.toGroupModel(JSON.stringify(group)));
        // console.log({DATA});
        __groups = DATA;
      }
    }
    const new_data: Array<GroupModel> = [];
    new_data.push(...this._groups, ...__groups);
    this._groups = new_data;
  }

  private async getSubGroups() {
    const _networkResponse = await GET_MemberGroupingsSubGroups<any>();
    let __subgroups: SubGroupModel[] = [];

    if (_networkResponse === null) {
      __subgroups.push({ id: 0, subgroup: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: SubGroupModel[] = _networkResponse.response.data.map((subgroup: any) => sgmConvert.toSubGroupModel(JSON.stringify(subgroup)));
        // console.log({DATA});
        __subgroups = DATA;
      }
    }
    const new_data: Array<SubGroupModel> = [];
    new_data.push(...this._subgroups, ...__subgroups);
    this._subgroups = new_data;
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
          render: function (data: any, type: any, member: MembershipMixedUserModel) {
            member = mmumConvert.toMembershipMixedUserModel(JSON.stringify(member))
            // console.log({ data, type, member });
            const ID = base64Encode(String(member.id), true);
            return `<div class="flex items-center whitespace-normal mb-0">
                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${__this.memberProfileBaseUrl}${ID}" type="member"
                  url="${member.logo}" size="16"></user-profile-photo>
                <p class="ml-1 mb-0">${member.organizationName}</p>
              </div>
              <span class="whitespace-normal shadow p-1">
                <i class="ml-1"><b>ID: </b> ${member.identification}</i>
              </span>`;
          },
          orderable: true
        },
        {
          data: 'organizationName',
          render: function (data: any, type: any, member: MembershipMixedUserModel) {
            member = mmumConvert.toMembershipMixedUserModel(JSON.stringify(member))
            const ID = base64Encode(String(member.id), true);
            // return `<div class="flex flex-col md:flex-row items-center whitespace-normal">
            //   <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
            //     href="${__this.memberProfileBaseUrl}${ID}" label="Open"></link-button>
            //   <!-- <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
            //     href="${__this.memberProfileEditBaseUrl}${ID}" label="Edit"></link-button> -->
            // </div>`;
            return `<div class="flex flex-col md:flex-row items-center whitespace-normal">
              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                href="${__this.memberProfileBaseUrl}${ID}" label="Open"></link-button>
            </div>`;
          },
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
      },
      "responsive": true,
      "dom": 'Blfrtip',
      buttons: [
        'selected',
        'selectedSingle',
        'selectAll',
        'selectNone',
        'selectRows',
        'selectColumns',
        'selectCells',
        'pdf',
        'excel',
        'copy',
        'csv',
      ],
      select: true,
      // "select": {
      //   "style": "multi"
      // },
    };
    return dataTable;
  }

  private async downloadMemberExcel() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }

    let URL = "?branchId=" + branchId + "&order__by=firstname";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    // console.log({URL});
    
    this.downloadingFile = true;
    await GET_MembershipOrganizationUserDownload<any>(URL);
    this.downloadingFile = false;
  }

  createRenderRoot() {
    return this;
  }
}
