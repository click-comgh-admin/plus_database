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
import { PATCH_MembershipUser } from '@@addons/network/members/membership/users/patch';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
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
import { GenericGenderInfo_I, GenericGenderInfo_S } from '@@addons/interfaces/generic/gender';
import { GET_GenericGender } from '@@addons/network/generic/gender';
import { Button } from '@material/mwc-button';
import '../pages/editablity';


enum submit_type {"bio", "cv", "id"} 
@customElement("pdb-membership-update-bio-data")
export class PdbMembershipUpdateBioData extends LitElement {
  constructor() { super(); }

  @query('#mainSectionFormBtn')
  private mainSectionFormBtn: Button;

  @query('#editableSectionFormBtn')
  private editableSectionFormBtn: Button;

  @query('#cVIdsSectionFormBtn')
  private cVIdsSectionFormBtn: Button;

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

  @property({ type: Array })
  private _genders: GenericGenderInfo_I[] = [];

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
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="displayMainSectionBtn"
              label="Main" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="displayEditableSectionBtn" label="Editable" @click="${this.displayEditableSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="displayCvIdsSectionBtn" label="Cv/ I.D" @click="${this.displayCvIdsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainEditableCvIdsSection(DATA)}
        </div>
      `;
    }
  }

  private displayMainSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.mainSectionFormBtn.setAttribute('raised', "true");
    this.editableSectionFormBtn.removeAttribute('raised');
    this.cVIdsSectionFormBtn.removeAttribute('raised');
  }

  private displayEditableSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.editableSectionFormBtn.setAttribute('raised', "true");
    this.mainSectionFormBtn.removeAttribute('raised');
    this.cVIdsSectionFormBtn.removeAttribute('raised');
  }

  private displayCvIdsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 3;
    this.cVIdsSectionFormBtn.setAttribute('raised', "true");
    this.editableSectionFormBtn.removeAttribute('raised');
    this.mainSectionFormBtn.removeAttribute('raised');
  }

  private getMainEditableCvIdsSection(member: MembershipMixedUserModel) {
    // console.log({"this.memberGroups": this.memberGroups, "this.memberSubGroups": this.memberSubGroups});
    
    if (this.formId === 1) {
      return html`
        ${this.mainForm(member)}
      `;
    } else if (this.formId === 2) {
      return html`
        ${this.editableForm(member)}
      `;
    } else {
      return html`
        ${this.cvIdsForm(member)}
      `;
    }
  }

  private mainForm(member: MembershipMixedUserModel) {
    let birthDate = "";
    const _birthDate = new Date(member.dateOfBirth),
      __TO_DATE = _birthDate.toLocaleDateString('en-US', {
        day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
        // @ts-ignore
      }).split("/");
    birthDate = [__TO_DATE[2], __TO_DATE[0], __TO_DATE[1]].join('-');

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
                    <h3 class="h3">Update Profile Bio-Data!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form !my-1" make-general-posts="members-user" submit_type="${submit_type.bio}"
                  enctype="multipart/form-data">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter First Name</h4>
                      <mwc-textfield name="firstname" id="firstname" label="Enter First Name" outlined type="text" value="${member.firstname}"
                        required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Middle Name</h4>
                      <mwc-textfield name="middlename" id="middlename" label="Enter Middle Name" outlined type="text" value="${member.middlename}">
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Surname</h4>
                      <mwc-textfield name="surname" id="surname" label="Enter Surname" outlined type="text" value="${member.surname}"
                        required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Select Gender</h4>
                      <mwc-select name="gender" class="w-full" id="gender" label="Select Gender" outlined required>
                        <mwc-list-item value="0">Select Gender</mwc-list-item>
                        ${this._genders.map((value) => {
                          if (member.gender === value.id) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                          } else {
                            return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                          }
                        })}
                      </mwc-select>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Select Date of Birth</h4> 
                      <mwc-textfield name="dateOfBirth" type="date" class="w-full" id="dateOfBirth"
                        label="Select Date of Birth" value="${birthDate}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Phone Number</h4> 
                      <mwc-textfield name="phone" multiple type="tel" class="w-full" id="phone"
                        label="Enter Phone Number" value="${member.phone}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Email Address</h4> 
                      <mwc-textfield name="email" multiple type="email" class="w-full" id="email"
                        label="Enter Email Address" value="${member.email}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Community</h4> 
                      <mwc-textfield name="community" multiple type="text" class="w-full" id="community"
                        label="Enter Community" value="${member.community}" outlined>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Reference ID</h4> 
                      <mwc-textfield name="referenceId" multiple type="text" class="w-full" id="referenceId"
                        label="Enter Reference ID" value="${member.referenceId}" outlined>
                      </mwc-textfield>
                    </div>
                    <div class="p-2"></div>
                    <div class="p-2"></div>
                    <div class="p-2">
                      <div class="form-input-container">
                        <mwc-button class="primary" raised type="submit" label="Submit" message="Update Profile Bio-Data" submit_type="${submit_type.bio}" @click="${this.submitForm}">
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
    `;
  }

  private editableForm(member: MembershipMixedUserModel) {      
    return html`
      <pdb-membership-update-view-editabilty memberId="${member.id}" ?currentEditabilty="${member.editable}"></pdb-membership-update-view-editabilty>
    `;
  }

  private cvIdsForm(member: MembershipMixedUserModel) {    
    return html`
      <div class="w-full">
        <div class="flex justify-center my-1">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                    <div class="px-1 border border-gray-200">
                      <header
                        class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                        <label for="" class="label">
                          <mwc-icon class="icon">format_strikethrough</mwc-icon>
                          <h1 class="h1 !text-red-400">Member</h1>
                          <h3 class="h3">Update Profile C.V!</h3>
                        </label>
                      </header>
                      <form method="post" action="#" class="form !my-1" make-general-posts="members-user" submit_type="${submit_type.cv}"
                        enctype="multipart/form-data">
                        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 mb-2">
                          <h4 class="font-semibold my-2">C.V File</h4>
                          <file-input id="profileResume" name="profileResume" label="C.V File" accept="*"
                            ?required="${true}" ?hasLabel="${true}" fileSelectorInput></file-input>
                        </div>
                        <div
                          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                          <mwc-button class="primary" raised type="submit" label="Submit" message="Update Member C.V" submit_type="${submit_type.cv}" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
                      </form>
                    </div>
                    <div class="block md:hidden">
                      <div class="flex form-input-container items-center text-center">
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                        <label class="block font-medium text-sm text-gray-600 w-full">
                          ...
                        </label>
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                      </div>
                    </div>
                    <div class="px-1 border border-gray-200">
                      <header
                        class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                        <label for="" class="label">
                          <mwc-icon class="icon">format_strikethrough</mwc-icon>
                          <h1 class="h1 !text-red-400">Member</h1>
                          <h3 class="h3">Update Profile I.D!</h3>
                        </label>
                      </header> 
                      <form method="post" action="#" class="form !my-1" make-general-posts="members-user" submit_type="${submit_type.id}"
                        enctype="multipart/form-data">
                        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 mb-2">
                          <h4 class="font-semibold my-2">Identification File</h4>
                          <file-input id="profileIdentification" name="profileIdentification" label="Identification File" accept="*"
                            ?required="${true}" ?hasLabel="${true}" fileSelectorInput></file-input>
                        </div>
                        <div
                          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                          <mwc-button class="primary" raised type="submit" label="Submit" message="Update Member I.D" submit_type="${submit_type.id}" @click="${this.submitForm}">
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const message: string =  e.currentTarget.getAttribute('message');
    // @ts-ignore
    const submitType = e.currentTarget.getAttribute('submit_type');

    const _handleMultitpleSubmitFormSelectors = this.handleMultitpleSubmitFormSelectors();
    _handleMultitpleSubmitFormSelectors.handle(submitType);

    await PATCH_MembershipUser(this.memberId, message);
    _handleMultitpleSubmitFormSelectors.reset();

    
    // console.log({ "PATCH_MembershipUser": "done" });
  }

  handleMultitpleSubmitFormSelectors() {
    return {
      handle: (submitType: submit_type) => {
        // console.log({submitType});
        
        document.querySelectorAll('[make-general-posts="members-user"]').forEach(form => {
          if (form.hasAttribute("make-general-posts")) {
            const formSubmitType = form.getAttribute("submit_type");
            // console.log({formSubmitType});
            if (submitType.toString() !== formSubmitType) {
              form.setAttribute("make-general-posts", "members-user--disabled")
            }
          }
        });
      },
      reset: () => {
        document.querySelectorAll('[make-general-posts="members-user--disabled"]').forEach(form => {
          form.setAttribute("make-general-posts", "members-user")
        });
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
