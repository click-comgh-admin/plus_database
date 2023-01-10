import '@@assets/styles/views/admin/user/main.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@addons/widgets/alert';
import '@@addons/widgets/profile_photo';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { Button } from '@material/mwc-button';
import { MembershipMixedUserModel, Convert as mmumConvert } from '@@addons/interfaces/members/user/mixed';
import { GET_GroupingsGroupMembers } from '@@addons/network/members/groupings/group/group_member';
import { GET_GroupingsSubGroupMembers } from '@@addons/network/members/groupings/subgroup/subgroup_member';
import { GroupMemberModel, Convert as gmmConvert } from '@@addons/interfaces/members/groupings/group/models/member';
import { SubGroupMemberModel, Convert as sgmmConvert } from '@@addons/interfaces/members/groupings/subgroup/models/member';
import { UserContactModel, Convert as ucmConvert } from '@@addons/interfaces/members/user/contact';
import { UserContactPrivacyModel, Convert as ucpmConvert } from '@@addons/interfaces/members/user/contact/privacy';
import { GET_UserContactData } from '@@addons/network/members/contact/data';
import { GET_UserContactPrivacy } from '@@addons/network/members/contact/privacy';
import '../view/members/organizations';
import '../view/groupings/groups';
import '../view/groupings/subgroups';
import '../view/extras/branch_category';
import '../view/extras/location';
import '../view/contact/data';
import '../view/contact/privacy';
import '../view/members/organizations';
import '../../../no_access/no_page_entry';
import '../../../no_access/account_expired';
import { CONSTANTS } from '@@addons/constants';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../page__id';
import { GET_MembershipOrganizationUsers } from '@@addons/network/members/membership/users/organization';
import { DELETE_MembershipOrganizationUsers } from '@@addons/network/members/membership/users/organization/delete';


@customElement("pdb-membership-member-organization")
export class PdbMembershipMemberOrganization extends LitElement {
  constructor() {super(); }

  @query('#groupsSectionFormBtn')
  private groupsSectionFormBtn: Button;

  @query('#subGroupsSectionFormBtn')
  private subGroupsSectionFormBtn: Button;

  @query('#branchCategorySectionBtn')
  private branchCategorySectionBtn: Button;

  @query('#locationSectionBtn')
  private locationSectionBtn: Button;

  @property({ type: Number })
  private memberId?: number = 0;

  @property({ type: Number })
  private loggedUserId?: number = 0;

  @property({ type: Number })
  private formId: 1 | 2 = 1;

  @property({ type: Number })
  private tabSection2Id: 1 | 2 | 3 = 1;

  @property({ type: String })
  public page_type: "mine" | "not-mine" = "mine";

  @property({ type: Boolean })
  private editAccess?: boolean = false;

  @property({ type: String })
  private memberPhotoUpdateBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/organization/update/photo?member-id=`;

  @property({ type: String })
  private memberBioDataUpdateBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/organization/update/bio-data?member-id=`;

  @property({ type: String })
  private memberGroupSubgroupUpdateBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/organization/update/group-subgroup?member-id=`;

  @property({ type: String })
  private memberBranchCategoryLocationUpdateBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/organization/update/branch-category-location?member-id=`;

  @property({ type: String })
  private memberContactBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/organization/update/contact?member-id=`;


  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  private _pdbBranchMember: NetworkCallResponse_I<MembershipMixedUserModel> = null;

  public set pdbBranchMember(value: NetworkCallResponse_I<MembershipMixedUserModel>) {
    this._pdbBranchMember = value;
    this.requestUpdate();
  }

  public get pdbBranchMember(): NetworkCallResponse_I<MembershipMixedUserModel> {
    return this._pdbBranchMember;
  }

  @property({ type: Array })
  private memberGroups?: GroupMemberModel[] = null;

  @property({ type: Array })
  private memberSubGroups?: SubGroupMemberModel[] = null;

  @property({ type: Array })
  private memberContactInfo?: UserContactModel[] = null;

  @property({ type: Array })
  private memberContactPrivacy?: UserContactPrivacyModel[] = null;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    this.getUserId();

    if ((this.memberId === 0) || (this.memberId === null) || (Number.isNaN(this.memberId))) { } else {
      await this.getMember();
      if (this.pdbBranchMember.success) {
        await this.getMemberGroups();
        await this.getMemberSubgroups();
        await this.getMemberContactInfo();
        await this.getMemberContactPrivacy();
      }
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS['view-organization'], viewType: "View"}, false)) {
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
        DATA = mmumConvert.toMembershipMixedUserModel(JSON.stringify(Array.isArray(_data) ? _data[0] : _data)),
        SUCCESS = pdbBranchMember.success;
      const ID = SUCCESS ? base64Encode(String(DATA.id), true) : "";

      return html`
        <div class="row justify-content-center">
          <div class="col-md-4 col-lg-4 my-1">
            <div class="shadow bg-white mb-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${SUCCESS ? html`${DATA.organizationName}'s` : nothing} Logo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="member"
                  url="${SUCCESS ? DATA.logo : " profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberPhotoUpdateBaseUrl}${ID}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  Group(s)/ Subgroup(s)
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="groupsSectionFormBtn"
                    label="Group" @click="${this.displayGroupsSectionBtn}"></mwc-tab>
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="subGroupsSectionFormBtn" label="Sub-Group" @click="${this.displaySubGroupsSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getGroupSubgroupSection}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberGroupSubgroupUpdateBaseUrl}${ID}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white mt-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  Branch & Category/ Location
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="branchCategorySectionBtn"
                    label="Branch/ Category" @click="${this.displayBranchCategorySectionBtn}"></mwc-tab>
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="locationSectionBtn" label="Location" @click="${this.displayLocationSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getbranchCategoryLocationSection(DATA)}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberBranchCategoryLocationUpdateBaseUrl}${ID}" label="Update">
                </link-button>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-8 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${SUCCESS ? html`${DATA.organizationName}'s` : nothing} Bio Data 
                  <span>
                    <label class="mx-4">
                      <b> - Editable</b>
                      <input disabled type="checkbox" ?checked="${DATA.editable}"
                        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    ${this.hasEditPermission(DATA)}
                  </span>
                </h4>
              </div>
              <div class="p-3 ">
                <pdb-membership-member-view-organization .memberInfo="${[DATA]}"></pdb-membership-member-view-organization>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberBioDataUpdateBaseUrl}${ID}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white mt-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  Contact Info & Privacy 
                </h4>
              </div>
              <div class="p-3 ">
                <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                  <pdb-membership-member-contact-data .memberContactInfo="${this.memberContactInfo}"></pdb-membership-member-contact-data>
                  <pdb-membership-member-contact-privacy .memberContactPrivacy="${this.memberContactPrivacy}"></pdb-membership-member-contact-privacy>
                </div>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberContactBaseUrl}${ID}" label="Update">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  private hasEditPermission(DATA: MembershipMixedUserModel) {
    if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS['edit-organization'], viewType: "Edit"}, false)) {
      return nothing;
    }
    return html`
      <div class="flex flex-col items-center pl-2">
        <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${DATA.id}" @click="${this.deleteMember}"></mwc-icon-button>
        <small class="block">Delete</small>
      </div>
    `;
  }

  private displayGroupsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.groupsSectionFormBtn.setAttribute('raised', "true");
    this.subGroupsSectionFormBtn.removeAttribute('raised');
  }

  private displaySubGroupsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.subGroupsSectionFormBtn.setAttribute('raised', "true");
    this.groupsSectionFormBtn.removeAttribute('raised');
  }

  private get getGroupSubgroupSection() {
    // console.log({"this.memberGroups": this.memberGroups, "this.memberSubGroups": this.memberSubGroups});
    
    if (this.formId === 1) {
      this.formId
      return html`
        ${this.groupData}
      `;
    } else {
      this.formId
      return html`
        ${this.subGroupData}
      `;
    }
  }

  private get groupData() {
    return html`
      <pdb-membership-member-groups .memberGroups="${this.memberGroups}"></pdb-membership-member-groups>
    `;
  }

  private get subGroupData() {    
    return html`
      <pdb-membership-member-subgroups .memberSubGroups="${this.memberSubGroups}"></pdb-membership-member-subgroups>
    `;
  }

  private displayBranchCategorySectionBtn(e: any) {
    e.preventDefault();
    this.tabSection2Id = 1;
    this.branchCategorySectionBtn.setAttribute('raised', "true");
    this.locationSectionBtn.removeAttribute('raised');
  }

  private displayLocationSectionBtn(e: any) {
    e.preventDefault();
    this.tabSection2Id = 3;
    this.locationSectionBtn.setAttribute('raised', "true");
    this.branchCategorySectionBtn.removeAttribute('raised');
  }

  private getbranchCategoryLocationSection(member: MembershipMixedUserModel) {
    // console.log({"this.memberGroups": this.memberGroups, "this.memberSubGroups": this.memberSubGroups});
    
    if (this.tabSection2Id === 1) {
      this.tabSection2Id
      return html`
        ${this.branchCategoryData(member)}
      `;
    } else {
      this.tabSection2Id
      return html`
        ${this.locationData(member)}
      `;
    }
  }

  private branchCategoryData(member: MembershipMixedUserModel) {
    // console.log({"member-member": member});
    
    return html`
      <pdb-membership-member-branch-category .memberInfo="${[member]}"></pdb-membership-member-branch-category>
    `;
  }

  private locationData(member: MembershipMixedUserModel) { 
    return html`
      <pdb-membership-member-location .memberInfo="${[member]}"></pdb-membership-member-location>
    `;
  }

  firstUpdated() { }

  private getUserId() {
    let memberId = urlQueryParamsGet('view');
    // console.log({ memberId });
    let _memberId = memberId !== null ? base64Decode(memberId) : null;
    this.memberId = Number.isNaN(_memberId) ? null : Number(_memberId);
    // console.log({ "this.memberId": this.memberId });
  }

  async deleteMember(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userUserId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_MembershipOrganizationUsers(userUserId);
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

  private async getMemberGroups() {
    const _networkResponse = await GET_GroupingsGroupMembers<any>(null, "?memberId=" + this.memberId);
    if (_networkResponse === null) {
      this.memberGroups = [];
    } else {
      const memberGroups = Array.isArray(_networkResponse.paginResponse.results)? _networkResponse.paginResponse.results: [_networkResponse.paginResponse.results]
      this.memberGroups = memberGroups.map(memberGroup => gmmConvert.toGroupMemberModel(JSON.stringify(memberGroup)));
    }
  }

  private async getMemberSubgroups() {
    const _networkResponse = await GET_GroupingsSubGroupMembers<any>(null, "?memberId=" + this.memberId);
    if (_networkResponse === null) {
      this.memberSubGroups = [];
    } else {
      const memberSubGroups = Array.isArray(_networkResponse.paginResponse.results)? _networkResponse.paginResponse.results: [_networkResponse.paginResponse.results]
      this.memberSubGroups = memberSubGroups.map(memberSubGroup => sgmmConvert.toSubGroupMemberModel(JSON.stringify(memberSubGroup)));
    }
  }

  private async getMemberContactInfo() {
    const _networkResponse = await GET_UserContactData<any>(null, "?memberId=" + this.memberId);
    if (_networkResponse === null) {
      this.memberContactInfo = [];
    } else {
      const memberContactInfo = Array.isArray(_networkResponse.paginResponse.results)? _networkResponse.paginResponse.results: [_networkResponse.paginResponse.results];
      this.memberContactInfo = memberContactInfo.map(memberContact => ucmConvert.toUserContactModel(JSON.stringify(memberContact)));
    }
  }

  private async getMemberContactPrivacy() {
    const _networkResponse = await GET_UserContactPrivacy<any>(null, "?memberId=" + this.memberId);
    if (_networkResponse === null) {
      this.memberContactPrivacy = [];
    } else {
      const memberContactPrivacy = Array.isArray(_networkResponse.paginResponse.results)? _networkResponse.paginResponse.results: [_networkResponse.paginResponse.results];
      this.memberContactPrivacy = memberContactPrivacy.map(memberContact => ucpmConvert.toUserContactPrivacyModel(JSON.stringify(memberContact)));
    }
    
  }

  createRenderRoot() {
    return this;
  }
}
