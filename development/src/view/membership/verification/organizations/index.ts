import '@@assets/styles/views/branch/main.scss';
import "@@assets/styles/views/home/dashboard.scss";
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
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
import '@@addons/widgets/profile_photo';
import { base64Encode } from '@@addons/functions/base64';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsGetAll, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import '../../members/select-member-type';
import '../../../no_access/account_expired';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import '../../../no_access/no_page_entry';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../page__id';
import { AppSetup } from '@@addons/functions/app_settings';
import { GroupModel, Convert as gmConvert } from '@@addons/interfaces/members/groupings/group/models';
import { SubGroupModel, Convert as sgmConvert } from '@@addons/interfaces/members/groupings/subgroup/models';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { ClientBranchModel, Convert as cbmConvert } from '@@addons/interfaces/clients/branches/model';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { QueryOptions } from 'select2';
import { MembershipOrganizationUserModel, Convert as MouMconvert } from '@@addons/interfaces/members/user/organization_model';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { MembershipVerificationModel, Convert as mvmConvert } from '@@addons/interfaces/members/verification';
import { getDate } from '@@addons/functions/date_time/date';
import { getLocalTime } from '@@addons/functions/date_time/time';
import { POST_MemberVerification } from '@@addons/network/members/membership/verification/post';
import { POST_MemberVerificationBulk } from '@@addons/network/members/membership/verification/post_bulk';
import { DELETE_MemberVerification } from '@@addons/network/members/membership/verification/delete';
import { DELETE_MemberVerificationBulk } from '@@addons/network/members/membership/verification/delete_bulk';
import { GET_MembershipUserIds } from '@@addons/network/members/membership/users/members';
import { MembershipMixedUserModel, Convert as mmumConvert } from '@@addons/interfaces/members/user/mixed';
import { until } from 'lit/directives/until.js';


type filterSelectType = { id: number | ""; name: string; isSelected: "true" | "false"; selected: boolean; };
@customElement("pdb-membership-organization-verification")
export class PdbMembershipOrganizationVerification extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  // @property({ type: String })
  // private memberProfileEditBaseUrl: string = "/member/update-profile?edit=";

  @property({ type: Array })
  private _groups: GroupModel[] = [];

  @property({ type: Array })
  private _subgroups: SubGroupModel[] = [];

  @property({ type: Array })
  public _branches: ClientBranchModel[] = [];

  @property({ type: Number })
  private startSearchPage: number = 0;

  @property({ type: Number })
  private accountType: number = 0;

  @property({ type: Number })
  private selectedBranch: number = 1;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Number })
  private _memberType?: number = 1;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _selectedMembersCalled: boolean = false;

  @property({ type: Array })
  private _selectedMembersNames: TemplateResult<1>[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  private filterBox: FilterFieldBox;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        this.accountType = 2;
        this.selectedBranch = this._userLoginInfo[0].user.branchId;
        // console.log({ "this.selectedBranch": this.selectedBranch });        
      }
    }

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });

    await this.getBranches();
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
      if (!AppSettingsExtraUserAccess({ pageId: PAGE__IDS.access, viewType: "View" }, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1" filter-section-context="btn"
          @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1">
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
      },
    });
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_branchId = "filter_branchId",
      filterNameId_filter_search = "filter_search",
      filterNameId_filter_memberCategoryId = "filter_memberCategoryId",
      filterNameId_filter_groupIds = "filter_groupIds",
      filterNameId_filter_subGroupIds = "filter_subGroupIds",
      filterNameId_filter_memberIds = "filter_memberIds",
      // filterNameId_filter_verificationIds = "filter_verificationIds",
      filterNameId_filter_verification = "filter_verification";
    // filter_accountType:2
    // filter_verification:true

    let filterNameId_filter_branchIdVal: string[] = null,
      filterNameId_filter_searchVal: string = null,
      filterNameId_filter_memberCategoryIdVal: string[] = null,
      filterNameId_filter_groupIdsVal: string[] = null,
      filterNameId_filter_subGroupIdsVal: string[] = null,
      filterNameId_filter_memberIdsVal: string[] = null,
      // filterNameId_filter_verificationIdsVal: string = null,
      filterNameId_filter_verificationVal: string = null;
    // console.log({_urlQueryParams, "urlQueryParamsGetAll('groupId[]')": urlQueryParamsGetAll('groupId[]')});

    for (const key in _urlQueryParams) {
      // console.log({"`--------${key}--------`": `--------${key}--------`});

      let value = String(_urlQueryParams[key]);
      value = value === "" ? null : value;
      if (key === `${filterNameId_filter_branchId}[]`) {
        // filterNameId_filter_branchIdVal = value;
        filterNameId_filter_branchIdVal = urlQueryParamsGetAll(`${filterNameId_filter_branchId}[]`);
      }
      if (key === filterNameId_filter_search) {
        filterNameId_filter_searchVal = value;
      }
      if (key === `${filterNameId_filter_memberCategoryId}[]`) {
        // filterNameId_filter_memberCategoryIdVal = value;
        // console.log({filterNameId_filter_memberCategoryId});

        filterNameId_filter_memberCategoryIdVal = urlQueryParamsGetAll(`${filterNameId_filter_memberCategoryId}[]`);
      }
      if (key === `${filterNameId_filter_groupIds}[]`) {
        // filterNameId_filter_groupIdsVal = value;
        filterNameId_filter_groupIdsVal = urlQueryParamsGetAll(`${filterNameId_filter_groupIds}[]`);
      }
      if (key === `${filterNameId_filter_subGroupIds}[]`) {
        // filterNameId_filter_subGroupIdsVal = value;
        filterNameId_filter_subGroupIdsVal = urlQueryParamsGetAll(`${filterNameId_filter_subGroupIds}[]`);
      }
      if (key === `${filterNameId_filter_memberIds}[]`) {
        // filterNameId_filter_memberIdsVal = value;
        filterNameId_filter_memberIdsVal = urlQueryParamsGetAll(`${filterNameId_filter_memberIds}[]`);
        // console.log({filterNameId_filter_memberIdsVal});

      }
      // if (key === filterNameId_filter_verificationIds) {
      //   filterNameId_filter_verificationIdsVal = value;
      // }
      if (key === filterNameId_filter_verification) {
        filterNameId_filter_verificationVal = value;
      }
    }

    const searchField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name/ E-mail/ Phone Number</h4>
          <mwc-textfield type="text" name="${filterNameId_filter_search}" id="${filterNameId_filter_search}"
            label="Search By Name/ E-mail/ Phone Number"
            value="${filterNameId_filter_searchVal === null ? "" : filterNameId_filter_searchVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;

    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }

    const selectedGroupIDs = Array.isArray(filterNameId_filter_groupIdsVal) ? filterNameId_filter_groupIdsVal.map(item => Number.isNaN(item) ? 0 : Number(item)) : [],
      selectedSubGroupIDs = Array.isArray(filterNameId_filter_subGroupIdsVal) ? filterNameId_filter_subGroupIdsVal.map(item => Number.isNaN(item) ? 0 : Number(item)) : [],
      selectedBranchIDs = Array.isArray(filterNameId_filter_branchIdVal) ? filterNameId_filter_branchIdVal.map(item => Number.isNaN(item) ? 0 : Number(item)) : [];
    const groupsSubgroupsBranches = this.groupsSubgroupsBranches(selectedGroupIDs, selectedSubGroupIDs, selectedBranchIDs);

    const branchField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branches</h4>
          <select-input name="${filterNameId_filter_branchId}" class="w-full" id="${filterNameId_filter_branchId}"
            label="Select Branches" .options="${groupsSubgroupsBranches.branches}" outlined required multiple>
          </select-input>
        </div>
      </div>`;

    const verificationField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Verification Status</h4>
          <mwc-select name="${filterNameId_filter_verification}" id="${filterNameId_filter_verification}"
            label="Select Verification Status" outlined required>
            <mwc-list-item value="">Select Verification Status</mwc-list-item>
            <mwc-list-item value="1"
              ?selected="${Number.isNaN(filterNameId_filter_verificationVal) ? false : Number(filterNameId_filter_verificationVal) === 1}">
              Verified</mwc-list-item>
            <mwc-list-item value="2"
              ?selected="${Number.isNaN(filterNameId_filter_verificationVal) ? false : Number(filterNameId_filter_verificationVal) === 2}">
              Un-Verified</mwc-list-item>
          </mwc-select>
        </div>
      </div>`;

    const memberCategoryIDs = Array.isArray(filterNameId_filter_memberCategoryIdVal) ? filterNameId_filter_memberCategoryIdVal.map(item => Number.isNaN(item) ? 0 : Number(item)) : [];
    // console.log({memberCategoryIDs, filterNameId_filter_memberCategoryIdVal});

    const memberCategoryField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Categories</h4>
          <pdb-membership-select-member-type .defaultValues="${memberCategoryIDs}"
            name="${filterNameId_filter_memberCategoryId}" id="${filterNameId_filter_memberCategoryId}"
            label="Select Member Category" outlined required multiple material="false">
          </pdb-membership-select-member-type>
        </div>
      </div>`;
    // console.log({groupsSubgroupsBranches});

    const groupField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Groups</h4>
          <select-input name="${filterNameId_filter_groupIds}" class="w-full" id="${filterNameId_filter_groupIds}"
            label="Select Groups" .options="${groupsSubgroupsBranches.groups}" outlined required multiple>
          </select-input>
        </div>
      </div>`;

    const subGroupField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Groups</h4>
          <select-input name="${filterNameId_filter_subGroupIds}" class="w-full" id="${filterNameId_filter_subGroupIds}"
            label="Select Sub-Groups" .options="${groupsSubgroupsBranches.subgroups}" outlined required multiple>
          </select-input>
        </div>
      </div>`;

    const memberListField = html`
      <div class="col-xl-12 col-md-12">
        <div class="form-input-container !block">
          ${this.memberListField}
          <div class="flex flex-wrap gap-2 p-1 my-2 shadow">
            ${until(this.getMembersByIds(filterNameId_filter_memberIdsVal?.map(memberId => Number.isNaN(memberId) ? 0 :
      Number(memberId))), html`<span>Loading...</span>`)}
          </div>
        </div>
      </div>`;

    returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
  <div class="container">
    <div class="row">
      ${searchField} ${verificationField} ${memberCategoryField} ${branchField}
      <div class="col-md-12 my-2">
        <hr />
      </div>
      ${groupField} ${subGroupField} ${memberListField}
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

  async getMembersByIds(memberIds: Array<Number>) {
    memberIds = memberIds === null ? [] : memberIds;
    // console.log({memberIds, "this._selectedMembersCalled": this._selectedMembersCalled});

    let _members: MembershipMixedUserModel[] = [];

    if (this._selectedMembersCalled === false) {
      this._selectedMembersCalled = true;
      const _networkResponse = await GET_MembershipUserIds<any>(memberIds);

      if (_networkResponse !== null) {
        // @ts-ignore
        // console.log({"_networkResponse.data.paginResponse": _networkResponse.data});

        if ((_networkResponse.response.success === true)) {
          const _DATAS = _networkResponse.response.data;
          // console.log({_DATAS});

          const DATA: MembershipMixedUserModel[] = _DATAS.results?.map((member: any) => mmumConvert.toMembershipMixedUserModel(JSON.stringify(member)));
          // console.log({DATA});
          _members = DATA;
        }
      }
      const _selectedMembersNames = _members?.map(member => {
        return html`
          <span
            class="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 rounded-full p-1.5 text-xs">
            <span>${member.organizationName}</span>
          </span>
        `;
      });
      this._selectedMembersNames = _selectedMembersNames;
    }
    return this._selectedMembersNames;
  }

  branchChange(e: Event) {
    const accountType = this.accountType;
    this.accountType = 2;
    // @ts-ignore
    this.selectedBranch = Number.isNaN(e.currentTarget.value) ? 0 : Number(e.currentTarget.value);
    // console.log({ "this.selectedBranch": this.selectedBranch });
  }

  private groupsSubgroupsBranches(selectedGroupIDs: Array<number>, selectedSubGroupIDs: Array<number>, selectedBranchIDs: Array<number>) {
    type returnType = { groups: filterSelectType[], subgroups: filterSelectType[], branches: filterSelectType[] };
    let groups: filterSelectType[] = [{ id: 0, name: "Select Groups", isSelected: "false", selected: false }];
    let subgroups: filterSelectType[] = [{ id: 0, name: "Select Sub-Groups", isSelected: "false", selected: false }];
    let branches: filterSelectType[] = [{ id: 0, name: "Select Branches", isSelected: "false", selected: false }];

    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});


    this._groups.forEach(_group => {
      let thisIsSelected = false;
      selectedGroupIDs.forEach(selectedGroupID => {
        if (selectedGroupID === _group.id) {
          thisIsSelected = true;
        }
      });
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (thisIsSelected) {
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
      let thisIsSelected = false;
      selectedSubGroupIDs.forEach(selectedSubGroupID => {
        if (selectedSubGroupID === _subgroup.id) {
          thisIsSelected = true;
        }
      });
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (thisIsSelected) {
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

    // console.log({"this._branches": this._branches, selectedBranchIDs})
    this._branches.forEach(_branch => {
      let thisIsSelected = false;
      selectedBranchIDs.forEach(selectedBranchID => {
        if (selectedBranchID === _branch.id) {
          thisIsSelected = true;
        }
      });

      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (thisIsSelected) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const branch: filterSelectType = {
        id: _branch.id, name: `${_branch.name}`,
        isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!branches.includes(branch)) {
        branches.push(branch);
      }
    });

    const _returnType: returnType = {
      groups: groups, subgroups: subgroups, branches
    }
    return _returnType;
  }

  get memberListField() {
    // console.log({ "this.selectedBranch": this.selectedBranch });
    if (Number(this.accountType) === 2) {
      return this.organizationMemberList;
    } else {
      return this.organizationMemberList;
    }
  }

  get organizationMemberList() {
    this.startSearchPage = 0;

    function processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
      params.page = params.page || 0;
      const TOTAL = data.count,
        RESULTS = data.results,
        SELECTOR = document.querySelector('[id="filter_memberIds"]');
      // console.log({ data, params, RESULTS, SELECTOR });

      let processedData: { id: number; text: string; }[] = [];
      if (TOTAL > 0) {
        var _data = RESULTS;
        // console.log({ "smbfl-_data": _data });
        for (let i = 0; i < _data.length; i++) {
          const item = _data[i];
          // console.log({"typeof": typeof item, "item-item": item });
          const member: MembershipOrganizationUserModel = MouMconvert.toMembershipOrganizationUserModel(JSON.stringify(item));
          // console.log({ "member-member": member });

          const id = member.id;
          const organizationName = `${member.organizationName}`;
          const _new = {
            id: id,
            text: organizationName,
          }
          if (!processedData.includes(_new)) {
            processedData.push(_new)
          }
        }
      }
      // console.log({ processedData });

      return {
        results: processedData,
        total: TOTAL,
        // @ts-ignore
        totalShowing: SELECTOR.totalShowing,
      };
    }

    let ajaxHeader: { Authorization?: string } = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    // console.log({"this.selectedBranch": this.selectedBranch});

    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="filter_memberIds" name="filter_memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `;
  }

  private get table_header() {
    return html`
      <div class="flex flex-col p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-center">
            <b>CHECK ALL: </b>
            <input id="verification_info_all" name="verification_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_verification}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="success" raised verification_info_all="activate" @click="${this.activateMultipleMemberAction}">
            Activate All Selected</mwc-button>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="danger" raised verification_info_all="deactivate"
            @click="${this.deactivateMultipleMemberAction}">Deactivate All Selected</mwc-button>
        </div>
      </div>
    `;
  }

  private get ajaxFetchUrlParams(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "branchId", value: String(this.selectedBranch) }
    ]
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
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "members/member-verification/members?branchId=" + branchId + "&order__by=firstname&datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    // console.log({URL});

    const __dataTable = this.__dataTable(URL);
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      ${this.table_header}
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_branchId = "filter_branchId",
      filterNameId_filter_search = "filter_search",
      filterNameId_filter_memberCategoryId = "filter_memberCategoryId",
      filterNameId_filter_groupIds = "filter_groupIds",
      filterNameId_filter_subGroupIds = "filter_subGroupIds",
      filterNameId_filter_memberIds = "filter_memberIds",
      // filterNameId_filter_verificationIds = "filter_verificationIds",
      filterNameId_filter_verification = "filter_verification";

    let newObject: any = {};
    // for (const key in _urlQueryParams) {
    //   let value = Number(_urlQueryParams[key]);
    //   if (!Number.isNaN(value) && (value !== 0)) {
    //     // console.log({value, });

    //     newObject[key] = value;
    //   }
    // }
    let _branchIds: Array<string> = [],
      _memberCategoryIds: Array<string> = [],
      _groupIds: Array<string> = [],
      _subGroupIds: Array<string> = [],
      _memberIds: Array<string> = [];

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]),
        branchId = `${filterNameId_filter_branchId}[]`,
        memberCategoryId = `${filterNameId_filter_memberCategoryId}[]`,
        groupIds = `${filterNameId_filter_groupIds}[]`,
        subGroupIds = `${filterNameId_filter_subGroupIds}[]`,
        memberIds = `${filterNameId_filter_memberIds}[]`;

      if ((key === branchId) || (key === filterNameId_filter_search)
        || (key === memberCategoryId) || (key === groupIds)
        || (key === subGroupIds) || (key === memberIds)
        || (key === filterNameId_filter_verification)) {
        // console.log({value, });

        newObject[key] = value;

        if ((key === branchId) || (key === memberCategoryId)
          || (key === groupIds) || (key === subGroupIds)
          || (key === memberIds)) {
          // console.log({value, });
          _branchIds = urlQueryParamsGetAll(branchId),
            _memberCategoryIds = urlQueryParamsGetAll(memberCategoryId),
            _groupIds = urlQueryParamsGetAll(groupIds),
            _subGroupIds = urlQueryParamsGetAll(subGroupIds),
            _memberIds = urlQueryParamsGetAll(memberIds);
        }

        if (key === filterNameId_filter_verification) {
          if (value !== "1" && value !== "2" && value !== "true" && value !== "false") {
            delete newObject[key]
          }
        }
      }
    }
    
    newObject["filter_accountType"] = 2;


    // console.log({"newObject-newObject": newObject});
    let new_params = ``;
    _branchIds.forEach(_branchId => new_params += `&${filterNameId_filter_branchId}=${_branchId}`);
    _memberCategoryIds.forEach(_memberCategoryId => new_params += `&${filterNameId_filter_memberCategoryId}=${_memberCategoryId}`);
    _groupIds.forEach(_groupId => new_params += `&${filterNameId_filter_groupIds}=${_groupId}`);
    _subGroupIds.forEach(_subGroupId => new_params += `&${filterNameId_filter_subGroupIds}=${_subGroupId}`);
    _memberIds.forEach(_memberId => new_params += `&${filterNameId_filter_memberIds}=${_memberId}`);
    

    // console.log({new_params});
    

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);

    return (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin + new_params;
  }

  private rowOneRender(verification: MembershipVerificationModel) {
    verification = mvmConvert.toMembershipVerificationModel(JSON.stringify(verification));
    const member = verification.member;
    const vInfo = verification.verificationInfo;
    // console.log({ data, type, member });

    let country = '-', region_state_name = "-", region_state = "-";
    member.countryInfo.forEach(_country => {
      country = _country.name;

      if (_country.id === 76) {
        region_state_name = "Region";

        region_state = member.regionInfo.location;
      } else {
        region_state_name = "State/ Province";

        region_state = member.stateProvince;
      }
    });

    // console.log({vInfo});

    const verification_info_id = verification.verification ? vInfo.memberId : member.id;

    const ID = base64Encode(String(member.id), true);
    return `<div class="flex items-center whitespace-normal mb-0">
      <input id="verification_info" name="verification_info" type="checkbox" value="${verification_info_id}"
        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      <div>
        <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${ID}" type="member"
          url="${member.logo}" size="16"></user-profile-photo>
        <p class="ml-1 mb-2">
          <b>${member.organizationName}</b>
        </p>
        <p class="ml-1 mb-2">
          Country: ${country}
        </p>
        <p class="ml-1 mb-2">
          ${region_state_name}: ${region_state}
        </p>
        <p class="ml-1 mb-2">
          Branch: ${member.branchInfo.name}
        </p>
        <p class="ml-1 mb-2">
          Contact: <a href="tel:${member.organizationPhone}" type="tel">${member.organizationPhone}</a>
        </p>
        <p class="ml-1 mt-3 mb-0">
          <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
            href="${this.memberProfileBaseUrl}${ID}" label="View Profile"></link-button>
        </p>
      </div>
    </div>`;

  }

  private rowTwoRender(verification: MembershipVerificationModel) {
    verification = mvmConvert.toMembershipVerificationModel(JSON.stringify(verification));
    const member = verification.member;
    const vInfo = verification.verificationInfo;

    const name = vInfo === null ? "-" : `${vInfo.verifiedBy?.firstname} ${vInfo.verifiedBy?.surname}`,
      date = vInfo === null ? "-" : getDate(vInfo.verifiedBy?.date, { dateStyle: "medium" }),
      time = vInfo === null ? "-" : getLocalTime(vInfo.verifiedBy?.date, { timeStyle: "short" });
    return `<div class="flex flex-col md:flex-row whitespace-normal">
      <p class="ml-1 mb-2">
        <b>Verified By: ${name}</b>
      </p>
    </div>
    <div class="flex flex-col md:flex-row whitespace-normal">
      <p class="ml-1 mb-2">
        On: ${date}/ 
      </p>
      <p class="ml-1 mb-2">
        At: ${time}
      </p>
    </div>
    <div class="flex flex-col md:flex-row whitespace-normal">
      ${verification.verification ? `<p class="ml-1 mb-2">
        <mwc-button class="danger" raised unverify-member="${vInfo.id}">Deactivate</mwc-button>
      </p>`: `<p class="ml-1 mb-2">
        <mwc-button class="success" raised verify-member="${member.id}">Activate</mwc-button>
      </p>`}
    </div>`;
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
          data: 'member',
          render: (data: any, type: any, member: MembershipVerificationModel) => __this.rowOneRender(member),
          orderable: true
        },
        {
          data: 'verification',
          render: (data: any, type: any, member: MembershipVerificationModel) => __this.rowTwoRender(member),
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
        __this.verifyMemberBtns();
        __this.unVerifyMemberBtns();
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

  private async getBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranchModel>();
    let __branches: ClientBranchModel[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        // @ts-ignore
        const DATA: ClientBranchModel[] = _networkResponse.response.data.map((data: any) => {
          return cbmConvert.toClientBranchModel(JSON.stringify(data));
        });
        // console.log({DATA});
        __branches = DATA;
      }
    }
    const new_data: Array<ClientBranchModel> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
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

  private verifyMemberBtns() {
    const selectorString = 'verify-member';
    document.querySelectorAll('[' + selectorString + ']').forEach(verify_member => {
      verify_member.addEventListener('click', (e) => {
        e.preventDefault();
        this.verifyMemberAction(verify_member, selectorString, e);
      });
    });

  }

  private async verifyMemberAction(element: Element, selectorString: string, e: any) {
    e.preventDefault();

    const memberID = element.getAttribute(selectorString);

    if (!Number.isNaN(memberID) && Number(memberID) !== 0) {
      await POST_MemberVerification(Number(memberID));
    }
  }

  private async check_all_verification(e: any) {
    e.preventDefault();

    document.querySelectorAll('[id="verification_info_all"][name="verification_info_all"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        document.querySelectorAll('[id="verification_info"][name="verification_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = true;
        })
      } else {
        document.querySelectorAll('[id="verification_info"][name="verification_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = false;
        })
      }
    })
  }

  private async activateMultipleMemberAction(e: any) {
    e.preventDefault();

    let ids: Array<number> = [];

    document.querySelectorAll('[id="verification_info"][name="verification_info"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        if (!Number.isNaN(input.value)) {
          const value = Number(input.value);
          if (!ids.includes(value)) {
            ids.push(value)
          }
        }
      }
    })
    await POST_MemberVerificationBulk(ids);
  }

  private unVerifyMemberBtns() {
    const selectorString = 'unverify-member';
    document.querySelectorAll('[' + selectorString + ']').forEach(unverify_member => {
      unverify_member.addEventListener('click', (e) => {
        e.preventDefault();
        this.unVerifyMemberAction(unverify_member, selectorString, e);
      });
    });

  }

  private async unVerifyMemberAction(element: Element, selectorString: string, e: any) {
    e.preventDefault();

    const memberID = element.getAttribute(selectorString);

    if (!Number.isNaN(memberID) && Number(memberID) !== 0) {
      await DELETE_MemberVerification(Number(memberID));
    }
  }

  private async deactivateMultipleMemberAction(e: any) {
    e.preventDefault();

    let ids: Array<number> = [];

    document.querySelectorAll('[id="verification_info"][name="verification_info"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        if (!Number.isNaN(input.value)) {
          const value = Number(input.value);
          if (!ids.includes(value)) {
            ids.push(value)
          }
        }
      }
    })

    await DELETE_MemberVerificationBulk(ids);
  }

  createRenderRoot() {
    return this;
  }
}
