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
import { GET_MembershipUsers } from '@@addons/network/members/membership/users';
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
import '../pages/extras/status';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { ClientBranchModel, Convert as cbmConvert } from '@@addons/interfaces/clients/branches/model';
import { EducationStatusModel, Convert as esmConvert } from '@@addons/interfaces/members/user/status/education_status';
import { MaritalStatusModel, Convert as msmConvert } from '@@addons/interfaces/members/user/status/marital_status';
import { OccupationStatusModel, Convert as osmConvert } from '@@addons/interfaces/members/user/status/occupation_status';
import { ProfessionStatusModel, Convert as psmConvert } from '@@addons/interfaces/members/user/status/profession_status';
import { GET_EducationStatus } from '@@addons/network/members/status/education';
import { GET_MaritalStatus } from '@@addons/network/members/status/marital';
import { GET_OccupationStatus } from '@@addons/network/members/status/occupation';
import { GET_ProfessionStatus } from '@@addons/network/members/status/profession';
import { GET_UserStatusInfo } from '@@addons/network/members/status';
import { UserStatusModel, Convert as usmConvert } from '@@addons/interfaces/members/user/status';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { GroupingsMemberCategoryModel, Convert as gmcmConvert } from '@@addons/interfaces/members/groupings/member_categories/model';


@customElement("pdb-membership-update-branch-category-status-location")
export class PdbMembershipUpdateBranchCategoryStatusLocation extends LitElement {
  constructor() { super(); }

  @query('#mainSectionFormBtn')
  private mainSectionFormBtn: Button;

  @query('#statusSectionFormBtn')
  private statusSectionFormBtn: Button;

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
  private formId: 1 | 2 | 3 = 1;

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

  @property({ type: Array })
  private _maritalStatuses: MaritalStatusModel[] = [];

  @property({ type: Array })
  private _occupationStatuses: OccupationStatusModel[] = [];

  @property({ type: Array })
  private _professionStatuses: ProfessionStatusModel[] = [];

  @property({ type: Array })
  private _educationStatuses: EducationStatusModel[] = [];

  @property({ type: Array })
  private memberStatusInfo: UserStatusModel[] = [];
  
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
      await this.getUserStatusInfo();
      await this.getMaritalStatus();
      await this.getOccupationStatus();
      await this.getProfessionStatus();
      await this.getEducationStatus();
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
      if (!AppSettingsExtraUserAccess({ pageId: PAGE__IDS.edit, viewType: "Edit" }, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    if ((this.memberId === 0) || (this.memberId === null) || (Number.isNaN(this.memberId))) {
      const header = html`<h4 class="text-white">Error</h4>`;
      const content = html`
        <div>
          <p class="text-black mb-2">Member Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to members page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
            href="${CONSTANTS.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
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
                <span class="font-bold">Member </span>: undefined error</h4>
            </div>
          </div>
        `;
      }

      if (this.pdbBranchMember.success === false) {
        const header = html`<h4 class="text-white">Error</h4>`;
        const content = html`
          <div>
            <p class="text-black mb-2">Member Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
              href="${CONSTANTS.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
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
              id="statusSectionFormBtn" label="Status" @click="${this.statusSectionSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="locationSectionFormBtn" label="Location" @click="${this.locationSectionSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainStatusLocationSection(DATA)}
        </div>
      `;
    }
  }

  private displayMainSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.mainSectionFormBtn.setAttribute('raised', "true");
    this.statusSectionFormBtn.removeAttribute('raised');
    this.locationSectionFormBtn.removeAttribute('raised');
  }

  private statusSectionSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.statusSectionFormBtn.setAttribute('raised', "true");
    this.mainSectionFormBtn.removeAttribute('raised');
    this.locationSectionFormBtn.removeAttribute('raised');
  }

  private locationSectionSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 3;
    this.locationSectionFormBtn.setAttribute('raised', "true");
    this.mainSectionFormBtn.removeAttribute('raised');
    this.statusSectionFormBtn.removeAttribute('raised');
  }

  private getMainStatusLocationSection(member: MembershipMixedUserModel) {
    // console.log({"this.memberGroups": this.memberGroups, "this.memberSubGroups": this.memberSubGroups});
    
    if (this.formId === 1) {
      return html`
        ${this.mainForm(member)}
      `;
    } else if (this.formId === 2) {
      return html`
        ${this.statusForm(member)}
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
                    <h1 class="h1 !text-red-400">Member</h1>
                    <h3 class="h3">Update Contact Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-branch-category memberId="${member.id}" 
        .memberInfo="${[member]}" updateType="member" .categories="${this._accountCategories}" .branches="${this._branches}">
      </pdb-membership-update-view-branch-category>
    `;
  }

  private statusForm(member: MembershipMixedUserModel) { 
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
                    <h1 class="h1 !text-red-400">Member</h1>
                    <h3 class="h3">Update Status Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-status memberId="${member.id}" 
        .memberStatusInfo="${this.memberStatusInfo}" .maritalStatusInfo="${this._maritalStatuses}"
        .occupationStatusInfo="${this._occupationStatuses}" .professionStatusInfo="${this._professionStatuses}"
        .educationStatusInfo="${this._educationStatuses}">
      </pdb-membership-update-view-status>
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
                    <h1 class="h1 !text-red-400">Member</h1>
                    <h3 class="h3">Update Location Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-location memberId="${member.id}" 
        .memberInfo="${[member]}" updateType="member" .countries="${this._countries}">
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
    const _networkResponse = await GET_MembershipUsers<any>(this.memberId, "?branchId=" + branchId, true);
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

  private async getMaritalStatus() {
    const _networkResponse = await GET_MaritalStatus<any>(null, "?memberId=" + this.memberId);
    // console.log({_networkResponse});
    
    let __maritalStatuses: MaritalStatusModel[] = [
      {name: "Select Marital Status"}
    ];

    if (_networkResponse === null) {
      __maritalStatuses.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: MaritalStatusModel[] = data.map(value => {
          return msmConvert.toMaritalStatusModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __maritalStatuses = [...__maritalStatuses, ...DATA];
      }
    }
    
    const new_data: Array<MaritalStatusModel> = [];
    new_data.push(...this._maritalStatuses, ...__maritalStatuses);
    this._maritalStatuses = new_data;
  }

  private async getOccupationStatus() {
    const _networkResponse = await GET_OccupationStatus<any>(null, "?memberId=" + this.memberId);
    // console.log({_networkResponse});
    
    let __occupationStatuses: OccupationStatusModel[] = [
      {name: "Select Occupation Status"}
    ];

    if (_networkResponse === null) {
      __occupationStatuses.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: OccupationStatusModel[] = data.map(value => {
          return osmConvert.toOccupationStatusModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __occupationStatuses = [...__occupationStatuses, ...DATA];
      }
    }

    const new_data: Array<OccupationStatusModel> = [];
    new_data.push(...this._occupationStatuses, ...__occupationStatuses);
    this._occupationStatuses = new_data;
  }

  private async getProfessionStatus() {
    const _networkResponse = await GET_ProfessionStatus<any>(null, "?memberId=" + this.memberId);
    // console.log({_networkResponse});
    
    let __professionStatuses: ProfessionStatusModel[] = [
      {name: "Select Profession Status"}
    ];

    if (_networkResponse === null) {
      __professionStatuses.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: ProfessionStatusModel[] = data.map(value => {
          return psmConvert.toProfessionStatusModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __professionStatuses = [...__professionStatuses, ...DATA];
      }
    }

    const new_data: Array<ProfessionStatusModel> = [];
    new_data.push(...this._professionStatuses, ...__professionStatuses);
    this._professionStatuses = new_data;
  }

  private async getEducationStatus() {
    const _networkResponse = await GET_EducationStatus<any>(null, "?memberId=" + this.memberId);
    // console.log({_networkResponse});
    
    let __educationStatuses: EducationStatusModel[] = [
      {name: "Select Education Status"}
    ];

    if (_networkResponse === null) {
      __educationStatuses.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: EducationStatusModel[] = data.map(value => {
          return esmConvert.toEducationStatusModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __educationStatuses = [...__educationStatuses, ...DATA];
      }
    }

    const new_data: Array<EducationStatusModel> = [];
    new_data.push(...this._educationStatuses, ...__educationStatuses);
    this._educationStatuses = new_data;
  }

  private async getUserStatusInfo() {
    const _networkResponse = await GET_UserStatusInfo<any>(null, "?memberId=" + this.memberId);
    if (_networkResponse === null) {
      this.memberStatusInfo = [];
    } else {
      const memberStatusInfo = Array.isArray(_networkResponse.paginResponse.results)? _networkResponse.paginResponse.results: [_networkResponse.paginResponse.results]
      this.memberStatusInfo = memberStatusInfo.map(memberStatus => usmConvert.toUserStatusModel(JSON.stringify(memberStatus)));
    }
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
