import "@@assets/styles/views/admin/register/main.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/select';
import '@@addons/widgets/alert';
import { UserLoginInfo_I } from "@@addons/interfaces/network_calls/login";
import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { getActiveBranchIdCookie } from "@@addons/functions/views/home/branch";
import { ClientBranches_I, ClientBranchShort_I } from "@@addons/interfaces/clients/branches";
import { GroupingsMemberCategories_I } from "@@addons/interfaces/members/groupings/member_categories";
import { GET_ClientBranches } from "@@addons/network/clients/branches";
import { GET_MemberGroupingsMemberCategories } from "@@addons/network/members/groupings/member_categories";
import { CONSTANTS } from "@@addons/constants";
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { QueryOptions } from 'select2';
import { MembershipUserModel, Convert as MuMconvert } from '@@addons/interfaces/members/user/model/index2';
import { MembershipOrganizationUserModel, Convert as MouMconvert } from '@@addons/interfaces/members/user/organization_model';
import { base64Decode } from "@@addons/functions/base64";
import { urlQueryParamsGet } from "@@addons/functions/url_query_params";
import { GET_MembershipAccessRestrictions } from "@@addons/network/members/membership/access_restriction/restrictions";
import { MembershipAccessRestrictionModel } from "@@addons/interfaces/members/access_restriction";
import { POST_MembershipAccessRestrictions } from "@@addons/network/members/membership/access_restriction/post";
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from "@@addons/functions/app_settings";
import { getAppSettingsExtraSettings } from "@@addons/functions/app_settings/extra_settings";
import { AppSettingsExtraUserAccess } from "@@addons/functions/app_settings/extra_settings/user_access";
import { PAGE__IDS } from "./page__id";


@customElement("membership-access_restriction-update")
export class MembershipAccessRestrictionUpdate extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private restrictionId?: number = 0;

  @property({ type: Boolean })
  private restrictionCalled?: boolean = false;

  @property({ type: Number })
  private startSearchPage: number = 0;

  @property({ type: Number })
  private accountType: number = 0;

  @property({ type: Number })
  private selectedBranch: number = 1;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _restriction: MembershipAccessRestrictionModel[] = [];

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

    this.getRestrictionId();
    await this.getBranches();
    await this.getRestriction();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.view, viewType: "Edit"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }
    if (this.restrictionCalled === false) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._restriction.length < 1) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Access Restriction </span>: not found!</h4>
          </div>
        </div>
      `;
    }
    const header = html`<h4 class="text-dark">Access Restriction</h4>`;
    const content = html`<div>
      <h1 class="text-dark mb-2 text-xl">${this._restriction[0].restriction}</h1>
    </div>`;
    return html`
      <div class="mb-2">
        <alert-card info .header="${header}" .content="${content}"></alert-card>
      </div>
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New User Access Restriction Assignment(s)</h1>
                  <h3 class="h3">Assignment User Access Restriction!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="access-restriction-bulk-assignment" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Account Type</h4>
                    <mwc-select class="w-full" label="Select Account Type"
                      name="accountType" id="accountType" @change="${this.accountTypeChange}"
                      outlined required>
                      <mwc-list-item value="0" selected>Select Account Type</mwc-list-item>
                      <mwc-list-item value="1">User Account </mwc-list-item>
                      <mwc-list-item value="2">Organization Account</mwc-list-item>
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
                  <div class="col-md-12 col-lg-12">
                    ${this.memberListField}
                    <input type="hidden" name="restrictionId" value="${this.restrictionId}" />
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Assign" raised class="w-full" @click="${this.submitForm}">
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
    `;
  }

  branchChange(e: Event) {
    const accountType = this.accountType;
    this.accountType = 0;
    // @ts-ignore
    this.selectedBranch = Number.isNaN(e.currentTarget.value)? 0: Number(e.currentTarget.value);
    // console.log({ "this.selectedBranch": this.selectedBranch });
    
    setTimeout(() => {
      this.accountType = accountType
    }, 500);
  }

  accountTypeChange(e: Event) {
    // @ts-ignore
    this.accountType = Number.isNaN(e.currentTarget.value)? 0: Number(e.currentTarget.value);
  }

  get memberListField() {
    // console.log({ "this.selectedBranch": this.selectedBranch });
    if (Number(this.accountType) === 0) {
      return "...";
    } else {
      if (Number(this.accountType) === 1) {
        return this.individualMemberList;
      } else {
        return this.organizationMemberList;
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
    return html`
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
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
    return html`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${processClientUserSearch}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `;
  }

  private get ajaxFetchUrlParams(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "branchId", value: String(this.selectedBranch) }
    ]
  }

  firstUpdated() { }

  private getRestrictionId() {
    let restrictionId = urlQueryParamsGet('view-restriction');
    // console.log({ restrictionId });
    let _restrictionId = restrictionId !== null ? base64Decode(restrictionId) : null;
    this.restrictionId = Number.isNaN(_restrictionId) ? null : Number(_restrictionId);
    // console.log({ "this.restrictionId": this.restrictionId });
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

  private async getRestriction() {
    const _networkResponse = await GET_MembershipAccessRestrictions<MembershipAccessRestrictionModel>(this.restrictionId);
    this.restrictionCalled = true;
    if (_networkResponse === null) {
      this._restriction = [];
    } else {
      if (_networkResponse.response.success && 'restriction' in _networkResponse.response.data) {
        
        const restriction: MembershipAccessRestrictionModel = _networkResponse.response.data;
        this._restriction = [restriction];
      } else {
        this._restriction = [];
      }
    }
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    await POST_MembershipAccessRestrictions();
  }

  createRenderRoot() {
    return this;
  }
}
