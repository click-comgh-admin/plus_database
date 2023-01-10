import "@@assets/styles/views/admin/register/main.scss";
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import '@@addons/widgets/form/new/select';
import { UserLoginInfo_I } from "@@addons/interfaces/network_calls/login";
import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { getActiveBranchIdCookie } from "@@addons/functions/views/home/branch";
import { ClientBranches_I, ClientBranchShort_I } from "@@addons/interfaces/clients/branches";
import { GET_ClientBranches } from "@@addons/network/clients/branches";
import { AttendanceAbsentLeaveStatusModel, Convert as aalsmConvert } from "@@addons/interfaces/attendance/absent_leave/status";
import { GET_AttendanceAbsentLeaveStatus } from "@@addons/network/attendance/absent_leave/status/get";
import { CONSTANTS } from "@@addons/constants";
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from "@@addons/interfaces/form/select-input";
import { MembershipUserModel, Convert as MuMconvert } from "@@addons/interfaces/members/user/model";
import { MembershipOrganizationUserModel, Convert as MouMconvert } from "@@addons/interfaces/members/user/organization_model";
import { QueryOptions } from "select2";
import { POST_AttendanceAbsentLeaveAssignment } from "@@addons/network/attendance/absent_leave/assignment/post";
import { GroupingsGroup_I } from "@@addons/interfaces/members/groupings/group";
import { GET_MemberGroupingsGroups } from "@@addons/network/members/groupings/group";
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from "@@addons/functions/app_settings";
import { getAppSettingsExtraSettings } from "@@addons/functions/app_settings/extra_settings";
import { AppSettingsExtraUserAccess } from "@@addons/functions/app_settings/extra_settings/user_access";
import { PAGE__IDS } from "@@views/attendance/page__id";


type groupSubgroupType = { id: number; name: string; isSelected: "true" | "false"; selected: boolean; };
let _branchGroups: { [branch: string]: GroupingsGroup_I[] } = {},
  _branchStatuses: { [branch: string]: AttendanceAbsentLeaveStatusModel[] } = {};
@customElement("attendance-absent-leave-assignment-add")
export class AttendanceAbsentLeaveAssignmentAdd extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private startSearchPage: number = 0;

  @property({ type: Number })
  private accountType: number = 0;

  @property({ type: Number })
  private selectedBranch: number = 1;

  @property({ type: Number })
  private selectedGroup: number = 0;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _groups: GroupingsGroup_I[] = [];

  @property({ type: Array })
  private _statuses: AttendanceAbsentLeaveStatusModel[] = [];

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        this.accountType = 1;
        this.selectedBranch = this._userLoginInfo[0].user.branchId;
        // console.log({ "this.selectedBranch": this.selectedBranch });
        setTimeout(() => {
          this.accountType = 0
          // console.log({ "this.accountType-2": this.accountType });
        }, 1000);
        // console.log({ "this.accountType-1": this.accountType });
        
      }
    }

    await this.getGroups();
    await this.getBranches();
    await this.getStatuses();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.absent_leave_assignment, viewType: "Edit"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }
    return html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Assignment</h1>
                    <h3 class="h3">Create Assignment!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-assignment" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Account Type</h4>
                      <mwc-select class="w-full" label="Select Account Type"
                        name="accountType" id="accountType" @change="${this.accountTypeChange}"
                        outlined required>
                        <mwc-list-item value="0" selected>Select Account Type</mwc-list-item>
                        <mwc-list-item value="1">User Account </mwc-list-item>
                        <mwc-list-item value="2">User Account (From Group) </mwc-list-item>
                        <mwc-list-item value="3">Organization Account</mwc-list-item>
                        <mwc-list-item value="4">Organization Account (From Group)</mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                        ${userBranch === 1 ? html`
                          <mwc-list-item value="0">Select Branch</mwc-list-item>
                          ${this._branches.map((value) => {
                              if (userBranch === value.id) {
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
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Status</h4>
                      <mwc-select class="w-full" setSelectedStatusId label="Select Status"
                        name="statusId" id="statusId" outlined required>
                        <mwc-list-item value="0">Select Status</mwc-list-item>
                        ${this._statuses.map((value) => {
                          return html`<mwc-list-item value="${value.id}">${value.status}</mwc-list-item>`;
                        })}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">From - Date</h4>
                      <mwc-textfield name="fromDate" type="date" class="w-full" id="fromDate" label="Select From - Date"
                        value="" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">To - Date</h4>
                      <mwc-textfield name="toDate" type="date" class="w-full" id="toDate" label="Select To - Date"
                        value="" outlined required>
                      </mwc-textfield>
                    </div>
                    ${this.memberListField}
                    <div class="col-md-12 col-lg-12">
                      <h4 class="font-semibold my-2">
                        Reason <span class="text-yellow-400">[optional]</span>
                      </h4>
                      <mwc-textarea class="h-96" outlined name="reason" id="reason"
                        label="Enter Reason [optional]" placeholder="Enter Reason [optional]">
                      </mwc-textarea>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Create" raised class="w-full" @click="${this.submitForm}">
                    </mwc-button>
                  </div>
                
                  <div class="flex form-input-container items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                    <label class="block font-medium text-sm text-gray-600 w-full">
                      ...
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async branchChange(e: Event) {
    const accountType = this.accountType;
    this.accountType = 0;
    // @ts-ignore
    this.selectedBranch = Number.isNaN(e.currentTarget.value)? 0: Number(e.currentTarget.value);
    // console.log({ "this.selectedBranch": this.selectedBranch });
    
    setTimeout(() => {
      this.accountType = accountType
    }, 500);
        
    if (!Number.isNaN(this.selectedBranch) ) {
      await this.getStatuses(
        `?branchId=${this.selectedBranch}`, this.selectedBranch
      );
      await this.getGroups("?branchId=" + this.selectedBranch, this.selectedBranch);
    }
  }

  accountTypeChange(e: Event) {
    // @ts-ignore
    this.accountType = Number.isNaN(e.currentTarget.value)? 0: Number(e.currentTarget.value);
  }

  groupChanged(e: Event) {
    // @ts-ignore
    this.selectedGroup = Number.isNaN(e.currentTarget.value)? 0: Number(e.currentTarget.value);
  }

  get memberListField() {
    // console.log({ "this.selectedBranch": this.selectedBranch });
    if (Number(this.accountType) === 0) {
      return "...";
    } else {
      if (Number(this.accountType) === 1) {
        return this.individualMemberList;
      } else if (Number(this.accountType) === 2) {
        return this.individualGroupMemberList;
      } else if (Number(this.accountType) === 3) {
        return this.organizationMemberList;
      } else {
        return this.organizationGroupMemberList;
      }
    }
  }

  get individualMemberList() {
    this.startSearchPage = 0;

    function processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
      params.page = params.page || 0;
      const TOTAL = data.count,
        RESULTS = data.results,
        SELECTOR = document.querySelector('[id="memberIds"]');
      // console.log({ data, params, RESULTS, SELECTOR });
  
      let processedData: { id: number; text: string; }[] = [];
      if (TOTAL > 0) {
        var _data = RESULTS;
        // console.log({ "smbfl-_data": _data });
        for (let i = 0; i < _data.length; i++) {
          const item = _data[i];
          // console.log({"typeof": typeof item, "item-item": item });
          const member: MembershipUserModel = MuMconvert.toMembershipUserModel(JSON.stringify(item));
          // console.log({ "member-member": member });
  
          const id = member.id;
          const fullName = `${member.firstname} ${member.middlename ?? ""} ${member.surname}`;
          const _new = {
            id: id,
            text: fullName,
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
    
    let ajaxHeader: {Authorization?: string} = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`<div class="col-md-12 col-lg-12">
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>
    `;
  }

  get individualGroupMemberList() {
    this.startSearchPage = 0;

    function processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
      params.page = params.page || 0;
      const TOTAL = data.count,
        RESULTS = data.results,
        SELECTOR = document.querySelector('[id="memberIds"]');
      // console.log({ data, params, RESULTS, SELECTOR });
  
      let processedData: { id: number; text: string; }[] = [];
      if (TOTAL > 0) {
        var _data = RESULTS;
        // console.log({ "smbfl-_data": _data });
        for (let i = 0; i < _data.length; i++) {
          const item = _data[i];
          // console.log({"typeof": typeof item, "item-item": item });
          const member: MembershipUserModel = MuMconvert.toMembershipUserModel(JSON.stringify(item));
          // console.log({ "member-member": member });
  
          const id = member.id;
          const fullName = `${member.firstname} ${member.middlename ?? ""} ${member.surname}`;
          const _new = {
            id: id,
            text: fullName,
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
    
    let ajaxHeader: {Authorization?: string} = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;

    return html`
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select Group</h4>
        ${this.groupField}
      </div>
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select User</h4>
        <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
          .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
          .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>
    `;
  }

  get organizationMemberList() {
    this.startSearchPage = 0;

    function processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
      params.page = params.page || 0;
      const TOTAL = data.count,
        RESULTS = data.results,
        SELECTOR = document.querySelector('[id="memberIds"]');
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
    
    let ajaxHeader: {Authorization?: string} = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    // console.log({"this.selectedBranch": this.selectedBranch});
    
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`<div class="col-md-12 col-lg-12">
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
      </div>
    `;
  }

  get organizationGroupMemberList() {
    this.startSearchPage = 0;

    function processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
      params.page = params.page || 0;
      const TOTAL = data.count,
        RESULTS = data.results,
        SELECTOR = document.querySelector('[id="memberIds"]');
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
    
    let ajaxHeader: {Authorization?: string} = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    // console.log({"this.selectedBranch": this.selectedBranch});
    
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select Group</h4>
        ${this.groupField}
      </div>
      <div class="col-md-6 col-lg-6">
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
      </div>
    `;
  }

  public get groupField() : TemplateResult {
    const groups = this._groups.map(_group => {
      const group: groupSubgroupType = {
        id: _group.id, name: _group.group,
        isSelected: "false", selected: false,
      };
      // console.log({"_group.id": _group.id, "filterNameId_groupVal": filterNameId_groupVal, group});
      
      return group
    });
    return html`
      <mwc-select class="w-full" setSelectedGroupId label="Select Group" name="groupId"
        id="groupId" @change="${this.groupChanged}" outlined required>
        <mwc-list-item value="0">Select Group</mwc-list-item>
        ${groups.map((group) => {
          return html`<mwc-list-item value="${group.id}">${group.name}</mwc-list-item>`;
        })}
        
      </mwc-select>
    `;
  }
  

  private get ajaxFetchUrlParams(): SelectInputProcessedAjaxUrlParam_I[] {
    if ((Number(this.accountType) === 1) || (Number(this.accountType) === 3)) {
      return [
        { param: "branchId", value: String(this.selectedBranch) },
      ];
    } else {
      return [
        { param: "branchId", value: String(this.selectedBranch) },
        { param: "groupId", value: String(this.selectedGroup) }
      ];
    }
  }

  firstUpdated() { }

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

  private async getStatuses(url_params: string = "", branchID: number = null) {
    const KEY = (branchID === null) || branchID < 1 ? "__" : String(branchID);
    // console.log({"_branchStatuses": _branchStatuses});
    
    this._statuses = [];
    if (KEY in _branchStatuses) {
      setTimeout(() => {
        this._statuses = _branchStatuses[KEY];
      }, 500);
      return;
    }
    
    const _networkResponse = await GET_AttendanceAbsentLeaveStatus<AttendanceAbsentLeaveStatusModel>(null, url_params);
    let __statuses: AttendanceAbsentLeaveStatusModel[] = [];

    if (_networkResponse === null) {
      __statuses.push({ id: 0, status: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        // @ts-ignore
        const DATA: AttendanceAbsentLeaveStatusModel[] = _networkResponse.response.data.map((status) => {
          return aalsmConvert.toAttendanceAbsentLeaveStatusModel(JSON.stringify(status));
        });
        // console.log({DATA});
        __statuses = DATA;
      }
    }

    const new_data: Array<AttendanceAbsentLeaveStatusModel> = [];
    new_data.push(...this._statuses, ...__statuses);
    this._statuses = new_data;

    _branchStatuses[KEY] = this._statuses;
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    await POST_AttendanceAbsentLeaveAssignment();
  }

  createRenderRoot() {
    return this;
  }
}
