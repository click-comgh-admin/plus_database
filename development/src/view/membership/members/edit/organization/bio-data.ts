import '@@assets/styles/views/admin/user/form.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@material/mwc-tab';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-tab-bar';
import '@material/mwc-textfield';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
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
import { GenericGenderInfo_I, GenericGenderInfo_S } from '@@addons/interfaces/generic/gender';
import { GET_GenericGender } from '@@addons/network/generic/gender';
import { Button } from '@material/mwc-button';
import '../pages/editablity';
import '../pages/photo';
import { GET_MemberGroupingsOrganizationTypes } from '@@addons/network/members/groupings/member_organization_type';
import { GroupingsOrganizationTypeModel, Convert as gotmConvert } from '@@addons/interfaces/members/groupings/organization_type';
import './contact-person-photo';
import { GET_MembershipOrganizationUsers } from '@@addons/network/members/membership/users/organization';
import { PATCH_MembershipOrganizationUser } from '@@addons/network/members/membership/users/organization/patch';
import { DELETE_MembershipOrganizationCertificateUsers } from '@@addons/network/members/membership/users/organization/certificate/delete';
import { POST_MembershipOrganizationCertificateUser } from '@@addons/network/members/membership/users/organization/certificate/post';

enum submit_type { "bio", "contact_person_photo", "contact_person_info", "certification" } 
@customElement("pdb-membership-update-organization-bio-data")
export class PdbMembershipUpdateOrganizationBioData extends LitElement {
  constructor() { super(); }

  @query('#mainSectionFormBtn')
  private mainSectionFormBtn: Button;

  @query('#editableSectionFormBtn')
  private editableSectionFormBtn: Button;

  @query('#contactPersonSectionFormBtn')
  private contactPersonSectionFormBtn: Button;

  @query('#certificationSectionFormBtn')
  private certificationSectionFormBtn: Button;

  @property({ type: Number })
  private memberId?: number = 0;

  @property({ type: Number })
  private selectedOrganizationType?: number | "other_value";

  @property({ type: Boolean })
  private selectedBusinessRegistration?: boolean;

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

  @property({ type: Array })
  private memberData: MembershipMixedUserModel[] = null;

  @property({ type: Number })
  private formId: 1 | 2 | 3 | 4 = 1;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Array })
  private _genders: GenericGenderInfo_I[] = [];

  @property({ type: Array })
  private _organizationTypes: GroupingsOrganizationTypeModel[] = [];

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
      await this.getGenders();
      await this.getMember();
      await this.getOrganizationType();
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
      this.memberData = [DATA];
      return html`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="mainSectionFormBtn"
              label="Main" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="editableSectionFormBtn" label="Editable" @click="${this.displayEditableSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="contactPersonSectionFormBtn" label="Certification" @click="${this.displayCertificationSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="certificationSectionFormBtn" label="Contact Person" @click="${this.displayContactPersonSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainEditableCertificationContactPersonSection(DATA)}
        </div>
      `;
    }
  }

  private displayMainSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.mainSectionFormBtn.setAttribute('raised', "true");
    this.editableSectionFormBtn.removeAttribute('raised');
    this.certificationSectionFormBtn.removeAttribute('raised');
    this.contactPersonSectionFormBtn.removeAttribute('raised');
    setTimeout(() => {
      this.organizationTypeSelectAction();
    }, 100);
  }

  private displayEditableSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.editableSectionFormBtn.setAttribute('raised', "true");
    this.mainSectionFormBtn.removeAttribute('raised');
    this.certificationSectionFormBtn.removeAttribute('raised');
    this.contactPersonSectionFormBtn.removeAttribute('raised');
  }

  private displayCertificationSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 3;
    this.certificationSectionFormBtn.setAttribute('raised', "true");
    this.editableSectionFormBtn.removeAttribute('raised');
    this.mainSectionFormBtn.removeAttribute('raised');
    this.contactPersonSectionFormBtn.removeAttribute('raised');

    setTimeout(() => {
      this.businessRegisteredSwitchAction();
    }, 100);
  }

  private displayContactPersonSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 4;
    this.contactPersonSectionFormBtn.setAttribute('raised', "true");
    this.editableSectionFormBtn.removeAttribute('raised');
    this.mainSectionFormBtn.removeAttribute('raised');
    this.certificationSectionFormBtn.removeAttribute('raised');
  }

  private getMainEditableCertificationContactPersonSection(member: MembershipMixedUserModel) {
    // console.log({"this.memberGroups": this.memberGroups, "this.memberSubGroups": this.memberSubGroups});
    
    if (this.formId === 1) {
      return html`
        ${this.mainForm(member)}
      `;
    } else if (this.formId === 2) {
      return html`
        ${this.editableForm(member)}
      `;
    } else if (this.formId === 3) {
      return html`
        ${this.certificationForm(member)}
      `;
    } else {
      return html`
        ${this.contactPersonForm(member)}
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
                    <h3 class="h3">Update Profile Bio-Data!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization" submit_type="${submit_type.bio}"
                  enctype="multipart/form-data">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Organization Name</h4>
                      <mwc-textfield name="organizationName" id="organizationName" label="Enter Organization Name" outlined type="text" value="${member.organizationName}"
                        required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Select Organization Type</h4>
                      <mwc-select name="organizationType" class="w-full" id="organizationType" label="Select Organization Type" outlined required>
                        <mwc-list-item value="0">Select Organization Type</mwc-list-item>
                        ${this._organizationTypes.map((value) => {
                          // console.log({"member.organizationType.id": member.organizationType.id, "value.id": value.id});
                          
                          if (member.organizationType.id === value.id) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.type}</mwc-list-item>`;
                          } else {
                            return html`<mwc-list-item value="${value.id}">${value.type}</mwc-list-item>`;
                          }
                        })}
                        <mwc-list-item value="other_value">Other Organization Type</mwc-list-item>
                      </mwc-select>
                    </div>
                    ${this.selectedOrganizationType === "other_value" ? html`
                      <div class="p-2">
                        <h4 class="font-semibold my-2">Enter Other Organization Type</h4>
                        <mwc-textfield name="other_organizationType" id="other_organizationType" label="Enter Other Organization Type" outlined type="text">
                        </mwc-textfield>
                      </div>
                    `: nothing}
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Phone Number</h4> 
                      <mwc-textfield name="organizationPhone" multiple type="tel" class="w-full" id="organizationPhone"
                        label="Enter Phone Number" value="${member.organizationPhone}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Email Address</h4> 
                      <mwc-textfield name="organizationEmail" multiple type="email" class="w-full" id="organizationEmail"
                        label="Enter Email Address" value="${member.organizationEmail}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Reference ID</h4> 
                      <mwc-textfield name="referenceId" multiple type="text" class="w-full" id="referenceId"
                        label="Enter Reference ID" value="${member.referenceId}" outlined>
                      </mwc-textfield>
                    </div>
                  </div>
                  <div class="p-2">
                      <div class="form-input-container">
                        <mwc-button class="primary" raised type="submit" label="Submit" message="Update Organization Data" submit_type="${submit_type.bio}" @click="${this.submitForm}">
                        </mwc-button>
                      </div>
                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private editableForm(member: MembershipMixedUserModel) {      
    return html`
      <pdb-membership-update-view-editabilty memberId="${member.id}" ?currentEditabilty="${member.editable}"></pdb-membership-update-view-editabilty>
    `;
  }

  private certificationForm(member: MembershipMixedUserModel) {    
    let registrationDate = "";
    const _registrationDate = new Date(member.dateOfIncorporation),
      __TO_DATE = _registrationDate.toLocaleDateString('en-US', {
        day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
        // @ts-ignore
      }).split("/");
    registrationDate = [__TO_DATE[2], __TO_DATE[0], __TO_DATE[1]].join('-');

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
                    <h3 class="h3">Update Organization Certification!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization" submit_type="${submit_type.certification}"
                  enctype="multipart/form-data">
                  <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Is Organization Registered?</h4>
                      <switch-input name="businessRegistered" class="w-full" id="businessRegistered" ?selected="${member.businessRegistered}"
                        label="Organization Registered?" outlined>
                      </switch-input>
                    </div>
                    ${this.selectedBusinessRegistration ? html`
                      <div class="p-2">
                        <h4 class="font-semibold my-2">Select Date of Incorporation</h4> 
                        <mwc-textfield name="dateOfIncorporation" type="date" class="w-full" id="dateOfIncorporation"
                          label="Select Date of Incorporation" value="${registrationDate}" outlined required>
                        </mwc-textfield>
                      </div>
                    `: nothing}
                    <div class="p-2 hidden md:block"></div>
                    <div class="p-2">
                      <div class="form-input-container">
                        <mwc-button class="primary" raised type="submit" label="Submit" message="Update Organization Certification" submit_type="${submit_type.certification}" @click="${this.submitForm}">
                        </mwc-button>
                      </div>
                    </div>
                  </div>
                  <div class="p-2">
                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${this.selectedBusinessRegistration ? html`
        <div class="block md:hidden">
          <div class="flex form-input-container items-center text-center">
            <hr class="border-gray-300 border-1 w-full rounded-md">
            <label class="block font-medium text-sm text-gray-600 w-full">
              ...
            </label>
            <hr class="border-gray-300 border-1 w-full rounded-md">
          </div>
        </div>
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
                      <h3 class="h3">Business Registration Certificate(s)!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization-certificate" submit_type="${submit_type.certification}"
                    enctype="multipart/form-data">
                    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                      <div class="p-2">
                        <h4 class="font-semibold my-2">Is Organization Registered?</h4>
                        <file-input id="attachment" name="attachment" label="Select Attachment" accept="*"
                          ?required="${true}" ?hasLabel="${true}" fileSelectorInput></file-input>
                        <input type="hidden" name="memberId" id="memberId" value="${member.id}" />
                      </div>
                      <div class="p-2 hidden md:block"></div>
                      <div class="p-2 hidden md:block"></div>
                      <div class="p-2">
                        <div class="form-input-container">
                          <mwc-button class="primary" raised type="submit" label="Submit" submit_type="${submit_type.bio}" @click="${this.submitCertificateForm}">
                          </mwc-button>
                        </div>
                      </div>
                    </div>
                    <div class="p-2">
                      <div class="flex form-input-container items-center text-center">
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                        <label class="block font-medium text-sm text-gray-600 w-full">
                          Lets go digital...
                        </label>
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                      </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                      ${member.certificates.map((certificate, i) => {
                        return html`
                          <div class="flex justify-between p-2 shadow border border-gray-200">
                            <a href="${certificate.attachment.attachment}">FILE ${i + 1}</a>
                            <div class="flex flex-col items-center pl-2">
                              <mwc-icon-button class="bg-love-kiss text-white" icon="delete"
                                delete-this-item="${certificate.id}" @click="${this.deleteCertificate}">
                              </mwc-icon-button>
                              <small class="block">Delete</small>
                            </div>
                          </div>
                        `;
                      })}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ` : nothing}
    `;
  }

  private contactPersonForm(member: MembershipMixedUserModel) {
    return html`
      <div class="w-full">
        <div class="flex justify-center my-1">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <div class="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                    <div class="px-1 border border-gray-200" style="height: fit-content">
                      <pdb-membership-member-organization-update-photo
                        memberId="${member.id}" .memberInfo="${[member]}">
                      </pdb-membership-member-organization-update-photo>
                    </div>
                    <div class="block sm:hidden">
                      <div class="flex form-input-container items-center text-center">
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                        <label class="block font-medium text-sm text-gray-600 w-full">
                          ...
                        </label>
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                      </div>
                    </div>
                    <div class="px-1 border border-gray-200" style="height: fit-content">
                      <header
                        class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                        <label for="" class="label">
                          <mwc-icon class="icon">format_strikethrough</mwc-icon>
                          <h1 class="h1 !text-red-400">Organization</h1>
                        <h3 class="h3">Update Contact Person!</h3>
                        </label>
                      </header> 
                      <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization" submit_type="${submit_type.contact_person_info}"
                        enctype="multipart/form-data">
                        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4">
                            <div class="p-2">
                              <h4 class="font-semibold my-2">Enter Contact Person Name</h4>
                              <mwc-textfield name="contactPersonName" id="contactPersonName" label="Enter Contact Person Name" outlined type="text" value="${member.contactPersonName}"
                                required>
                              </mwc-textfield>
                            </div>
                            <div class="p-2">
                              <h4 class="font-semibold my-2">Select Gender</h4>
                              <mwc-select name="contactPersonGender" class="w-full" id="contactPersonGender" label="Select Gender" outlined required>
                                <mwc-list-item value="0">Select Gender</mwc-list-item>
                                ${this._genders.map((value) => {
                                  if (member.contactPersonGender === value.id) {
                                    return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                                  } else {
                                    return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                                  }
                                })}
                              </mwc-select>
                            </div>
                            <div class="p-2">
                              <h4 class="font-semibold my-2">Enter Phone Number</h4> 
                              <mwc-textfield name="contactPersonPhone" multiple type="tel" class="w-full" id="contactPersonPhone"
                                label="Enter Phone Number" value="${member.contactPersonPhone}" outlined required>
                              </mwc-textfield>
                            </div>
                            <div class="p-2">
                              <h4 class="font-semibold my-2">Enter Email Address</h4> 
                              <mwc-textfield name="contactPersonEmail" multiple type="email" class="w-full" id="contactPersonEmail"
                                label="Enter Email Address" value="${member.contactPersonEmail}" outlined required>
                              </mwc-textfield>
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                          <mwc-button class="primary" raised type="submit" label="Submit" message="Update Contact Person Info" submit_type="${submit_type.contact_person_info}" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private organizationTypeSelectAction() {
    const _this = this;

    document.querySelectorAll('[name="organizationType"]').forEach((_selection) => {
      // console.log({ _selection });
      _this.selectedOrganizationType = _this.memberData[0].organizationType.id;
      // console.log({ "_this.selectedOrganizationType--1": _this.selectedOrganizationType });

      _selection.addEventListener("change", (evt) => {
        // @ts-ignore 
        _this.selectedOrganizationType = evt.currentTarget.value;
        // console.log({ "_this.selectedOrganizationType--2": _this.selectedOrganizationType });
        // @ts-ignore
        // console.log({ "_switch.isSelected": _selection.value });
      });
    });
  }

  private businessRegisteredSwitchAction() {
    const _this = this;

    document.querySelectorAll('[name="businessRegistered"]').forEach((_switch) => {
      // console.log({ _switch });
      
      _this.selectedBusinessRegistration = _this.memberData[0].businessRegistered;
      // console.log({ "_this.selectedBusinessRegistration--1": _this.selectedBusinessRegistration });

      _switch.addEventListener("click", (evt) => {
        // @ts-ignore 
        _this.selectedBusinessRegistration = _switch.isSelected;
        // console.log({ "_this.selectedBusinessRegistration--2": _this.selectedBusinessRegistration });
        // @ts-ignore
        // console.log({ "_switch.isSelected": _switch.isSelected });
      });
    });
  }

  firstUpdated() {
    setInterval(() => {
      if (this.selectedOrganizationType === undefined) {
        this.organizationTypeSelectAction();
      }
    }, 100);
  }

  private getUserId() {
    let memberId = urlQueryParamsGet('member-id');
    // console.log({ memberId });
    let _memberId = memberId !== null ? base64Decode(memberId) : null;
    this.memberId = Number.isNaN(_memberId) ? null : Number(_memberId);
    // console.log({ "this.memberId": this.memberId });
  }

  async deleteCertificate(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const certificateId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_MembershipOrganizationCertificateUsers(certificateId);
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

  private async getGenders() {
    const _networkResponse = await GET_GenericGender<GenericGenderInfo_I>();
    // console.log({_networkResponse});
    
    let __genders: GenericGenderInfo_I[] = [];

    if (_networkResponse === null) {
      __genders.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GenericGenderInfo_I[] = data.map(value => {
          return GenericGenderInfo_S(value)
        });
        // console.log({DATA});
        __genders = DATA;
      }
    }
    const new_data: Array<GenericGenderInfo_I> = [];
    new_data.push(...this._genders, ...__genders);
    this._genders = new_data;
  }

  private async getOrganizationType() {
    const _networkResponse = await GET_MemberGroupingsOrganizationTypes<any>();
    // console.log({_networkResponse});
    
    let __organizationTypes: GroupingsOrganizationTypeModel[] = [];

    if (_networkResponse === null) {
      __organizationTypes.push({ id: 0, type: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GroupingsOrganizationTypeModel[] = data.map(value => {
          return gotmConvert.toGroupingsOrganizationTypeModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __organizationTypes = DATA;
      }
    }

    const new_data: Array<GroupingsOrganizationTypeModel> = [];
    new_data.push(...this._organizationTypes, ...__organizationTypes);
    this._organizationTypes = new_data;
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const message: string =  e.currentTarget.getAttribute('message');
    // @ts-ignore
    const submitType = e.currentTarget.getAttribute('submit_type');

    const _handleMultitpleSubmitFormSelectors = this.handleMultitpleSubmitFormSelectors();
    _handleMultitpleSubmitFormSelectors.handle(submitType);

    await PATCH_MembershipOrganizationUser(this.memberId, message);
    _handleMultitpleSubmitFormSelectors.reset();

    
    // console.log({ "PATCH_MembershipUser": "done" });
  }

  async submitCertificateForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });

    await POST_MembershipOrganizationCertificateUser();
  }

  handleMultitpleSubmitFormSelectors() {
    return {
      handle: (submitType: submit_type) => {
        // console.log({submitType});
        
        document.querySelectorAll('[make-general-posts="members-user-organization"]').forEach(form => {
          if (form.hasAttribute("make-general-posts")) {
            const formSubmitType = form.getAttribute("submit_type");
            // console.log({formSubmitType});
            if (submitType.toString() !== formSubmitType) {
              form.setAttribute("make-general-posts", "members-user-organization--disabled")
            }
          }
        });
      },
      reset: () => {
        document.querySelectorAll('[make-general-posts="members-user-organization--disabled"]').forEach(form => {
          form.setAttribute("make-general-posts", "members-user-organization")
        });
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
