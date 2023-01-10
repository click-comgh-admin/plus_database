import '@@assets/styles/views/admin/user/form.scss';
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@material/mwc-tab';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-tab-bar';
import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/file-select';
import { base64Decode } from '@@addons/functions/base64';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { MembershipMixedUserModel, Convert as mmumConvert } from '@@addons/interfaces/members/user/mixed';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { AppSetup } from '@@addons/functions/app_settings';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { CONSTANTS } from '@@addons/constants';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../../page__id';
import '@@addons/widgets/alert';
import '../../../../no_access/no_page_entry';
import '../../../../no_access/account_expired';
import { Button } from '@material/mwc-button';
import { LocationCountryModel, Convert as lcmConvert } from '@@addons/interfaces/location/country_model';
import { GET_LocationCountry } from '@@addons/network/location/country';
import '../pages/extras/branch_category';
import '../pages/extras/location';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { ClientBranchModel, Convert as cbmConvert } from '@@addons/interfaces/clients/branches/model';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { GroupingsMemberCategoryModel, Convert as gmcmConvert } from '@@addons/interfaces/members/groupings/member_categories/model';
import { GET_MembershipOrganizationUsers } from '@@addons/network/members/membership/users/organization';


@customElement("pdb-membership-update-organization-branch-category-location")
export class PdbMembershipUpdateOrganizationBranchCategoryLocation extends LitElement {
  constructor() { super(); }

  @query('#mainSectionFormBtn')
  private mainSectionFormBtn: Button;

  @query('#locationSectionFormBtn')
  private locationSectionFormBtn: Button;

  @property({ type: Number })
  private memberId?: number = 0;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;


  private _pdbBranchMember: NetworkCallResponse_I<MembershipMixedUserModel> = null;

  public set pdbBranchMember(value: NetworkCallResponse_I<MembershipMixedUserModel>) {
    this._pdbBranchMember = value;
    this.requestUpdate();
  }

  public get pdbBranchMember(): NetworkCallResponse_I<MembershipMixedUserModel> {
    return this._pdbBranchMember;
  }

  @property({ type: Number })
  private formId: 1 | 2 = 1;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Array })
  private _countries: LocationCountryModel[] = [];

  @property({ type: Array })
  private _accountCategories: GroupingsMemberCategoryModel[] = [];

  @property({ type: Array })
  private _branches: ClientBranchModel[] = [];
  
  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    this.getUserId();

    if ((this.memberId === 0) || (this.memberId === null) || (Number.isNaN(this.memberId))) { } else {
      await this.getMember();
      await this.getClientBranch()
      await this.getGroupingsMemberCategory();
      await this.getLocationCountry();
    }
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
      if (!AppSettingsExtraUserAccess({ pageId: PAGE__IDS['edit-organization'], viewType: "Edit" }, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    if ((this.memberId === 0) || (this.memberId === null) || (Number.isNaN(this.memberId))) {
      const header = html`<h4 class="text-white">Error</h4>`;
      const content = html`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
            label="Organizations Page"></link-button>
        </div>
      `;
      return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
    } else {

      if (this.pdbBranchMember === null) {
        return html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;
      }
      if (this.pdbBranchMember === undefined) {
        return html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Organization </span>: undefined error</h4>
            </div>
          </div>
        `;
      }

      if (this.pdbBranchMember.success === false) {
        const header = html`<h4 class="text-white">Error</h4>`;
        const content = html`
          <div>
            <p class="text-black mb-2">Organization Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;
        return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
      }
      const pdbBranchMember = this.pdbBranchMember,
        _data = pdbBranchMember.data,
        DATA = mmumConvert.toMembershipMixedUserModel(
          JSON.stringify(Array.isArray(_data) ? _data[0] : _data)
        );
      return html`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="mainSectionFormBtn"
              label="Branch/ Category" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="locationSectionFormBtn" label="Location" @click="${this.locationSectionSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainLocationSection(DATA)}
        </div>
      `;
    }
  }

  private displayMainSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.mainSectionFormBtn.setAttribute('raised', "true");
    this.locationSectionFormBtn.removeAttribute('raised');
  }

  private locationSectionSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.locationSectionFormBtn.setAttribute('raised', "true");
    this.mainSectionFormBtn.removeAttribute('raised');
  }

  private getMainLocationSection(member: MembershipMixedUserModel) {
    // console.log({"this.memberGroups": this.memberGroups, "this.memberSubGroups": this.memberSubGroups});
    
    if (this.formId === 1) {
      return html`
        ${this.mainForm(member)}
      `;
    } else {
      return html`
        ${this.locationForm(member)}
      `;
    }
  }

  private mainForm(member: MembershipMixedUserModel) {       
    return html`
      <div
        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Organization</h1>
                    <h3 class="h3">Update Contact Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-branch-category memberId="${member.id}" 
        .memberInfo="${[member]}" updateType="organization" .categories="${this._accountCategories}" .branches="${this._branches}">
      </pdb-membership-update-view-branch-category>
    `;
  }

  private locationForm(member: MembershipMixedUserModel) { 
    return html`
      <div
        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Organization</h1>
                    <h3 class="h3">Update Location Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-location memberId="${member.id}" 
        .memberInfo="${[member]}" updateType="organization" .countries="${this._countries}">
      </pdb-membership-update-view-location>
    `;
  }

  firstUpdated() { }

  private getUserId() {
    let memberId = urlQueryParamsGet('member-id');
    // console.log({ memberId });
    let _memberId = memberId !== null ? base64Decode(memberId) : null;
    this.memberId = Number.isNaN(_memberId) ? null : Number(_memberId);
    // console.log({ "this.memberId": this.memberId });
  }

  private async getMember() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_MembershipOrganizationUsers<any>(this.memberId, "?branchId=" + branchId, true);
    if (_networkResponse === null) {
      this.pdbBranchMember = undefined;
    } else {
      this.pdbBranchMember = _networkResponse.response;
      // console.log({"this.pdbBranchMember": this.pdbBranchMember})
    }
  }

  private async getGroupingsMemberCategory() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategoryModel>();
    // console.log({_networkResponse});
    
    let __accountCategories: GroupingsMemberCategoryModel[] = [
      {category: "Select Member Category"}
    ];

    if (_networkResponse === null) {
      __accountCategories.push({ id: 0, category: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GroupingsMemberCategoryModel[] = data.map(value => {
          return gmcmConvert.toGroupingsMemberCategoryModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __accountCategories = [...__accountCategories, ...DATA];
      }
    }

    const new_data: Array<GroupingsMemberCategoryModel> = [];
    new_data.push(...this._accountCategories, ...__accountCategories);
    this._accountCategories = new_data;
  }

  private async getClientBranch() {
    const _networkResponse = await GET_ClientBranches<any>();
    // console.log({_networkResponse});
    
    let __branches: ClientBranchModel[] = [
      {name: "Select Branch"}
    ];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: ClientBranchModel[] = data.map(value => {
          return cbmConvert.toClientBranchModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __branches = [...__branches, ...DATA];
      }
    }
    const new_data: Array<ClientBranchModel> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  private async getLocationCountry() {
    const _networkResponse = await GET_LocationCountry<LocationCountryModel>(null, "?client=0");
    // console.log({_networkResponse});
    
    let __countries: LocationCountryModel[] = [
      {code: "-000", id: 0, name: "Select Country", short: "S-C"}
    ];

    if (_networkResponse === null) {
      __countries.push({ id: 0, name: "**NOT FOUND**", code: "??", short: "N/A" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: LocationCountryModel[] = data.map(value => {
          return lcmConvert.toCountryModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __countries = [...__countries, ...DATA];
      }
    }

    const new_data: Array<LocationCountryModel> = [];
    new_data.push(...this._countries, ...__countries);
    this._countries = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
