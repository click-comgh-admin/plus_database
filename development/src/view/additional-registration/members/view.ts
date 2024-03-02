import '@@assets/styles/views/admin/user/main.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
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
import { GroupMemberModel, Convert as gmmConvert } from '@@addons/interfaces/members/groupings/group/models/member';
import { SubGroupMemberModel, Convert as sgmmConvert } from '@@addons/interfaces/members/groupings/subgroup/models/member';
import { UserStatusModel, Convert as usmConvert } from '@@addons/interfaces/members/user/status';
import { UserContactModel, Convert as ucmConvert } from '@@addons/interfaces/members/user/contact';
import { UserContactPrivacyModel, Convert as ucpmConvert } from '@@addons/interfaces/members/user/contact/privacy';
import './pages/form';
import './pages/view';
import '../../no_access/account_expired';
import '../../no_access/no_page_entry';
import { CONSTANTS } from '@@addons/constants';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { GET_AdditionalRegistrationQuestionType } from '@@addons/network/additional_registration/types';
import { GET_AdditionalRegistrationMemberQuestions } from '@@addons/network/additional_registration/member_list';
import { GET_AdditionalRegistrationMemberQuestionResponses } from '@@addons/network/additional_registration/member_responses';
import { AdditionalRegistrationModel, Convert as armConvert, AdditionalRegistrationQuestionTypeModel } from '@@addons/interfaces/additional_registration';
import { AdditionalRegistrationResponseModel, Convert as arrmConvert } from '@@addons/interfaces/additional_registration/response';
import { PAGE__IDS } from '../page__id';


@customElement("additional-registration-member-view")
export class AdditionalRegistrationMemberView extends LitElement {
  constructor() { super(); }

  @query('#viewSectionFormBtn')
  private viewSectionFormBtn: Button;

  @query('#formSectionFormBtn')
  private formSectionFormBtn: Button;

  @query('#branchCategorySectionBtn')
  private branchCategorySectionBtn: Button;

  @query('#locationSectionBtn')
  private locationSectionBtn: Button;

  @query('#statusSectionBtn')
  private statusSectionBtn: Button;

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
  private memberPhotoUpdateBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/update/photo?member-id=`;

  @property({ type: String })
  private memberBioDataUpdateBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/update/bio-data?member-id=`;

  @property({ type: String })
  private memberViewFormUpdateBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/update/group-subgroup?member-id=`;

  @property({ type: String })
  private memberBranchCategoryStatusLocationUpdateBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/update/branch-category-status-location?member-id=`;

  @property({ type: String })
  private memberContactBaseUrl: string = `${CONSTANTS.URLS.PDB_CLIENT}member/update/contact?member-id=`;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Array })
  private memberQuestions?: AdditionalRegistrationModel[] = null;

  @property({ type: Array })
  private memberQuestionResponses?: AdditionalRegistrationResponseModel[] = null;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Array })
  public _arQuestionType: Array<AdditionalRegistrationQuestionTypeModel> = [];

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    this.getUserId();

    if ((this.memberId === 0) || (this.memberId === null) || (Number.isNaN(this.memberId))) { } else {

        console.log({"this.memberId--this.memberId": this.memberId})
        await this.getMemberQuestions();
        await this.getMemberQuestionResponses();
        await this.getAdditionalRegistrationQuestionType();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.view, viewType: "View"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    if ((this.memberId === 0) || (this.memberId === null) || (Number.isNaN(this.memberId))) {
      const header = html`<h4 class="text-white">Error</h4>`;
      const content = html`
        <div>
          <p class="text-black mb-2">Member Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to members page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${CONSTANTS.URLS.PDB_CLIENT}member/member-profile?view=${urlQueryParamsGet('view')}"
            label="Members Page"></link-button>
        </div>
      `;
      return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
    } else {
      if (this.memberQuestions === null || this.memberQuestionResponses === null) {
        return html`
            <div class="row justify-content-center">
                <div class="col-md-12 my-1">
                    <div class="shadow bg-white mb-3">
                        <div class="main-container">
                            <div class="flex justify-center">
                                <mwc-circular-progress indeterminate></mwc-circular-progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
      }
      if (this.memberQuestions === undefined || this.memberQuestionResponses === undefined) {
        return html`
            <div class="row justify-content-center">
                <div class="col-md-12 my-1">
                    <div class="shadow bg-white mb-3">
                        <div class="main-container">
                            <div class="flex justify-center">
                                <h4 class="text-red-600 text-lg">
                                <span class="font-bold">Member Question </span>: undefined error</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
      }

      if (this.memberQuestions.length < 0) {
        const header = html`<h4 class="text-white">Error</h4>`;
        const content = html`
          <div>
            <p class="text-black mb-2">Member Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${CONSTANTS.URLS.PDB_CLIENT}member/member-profile?view=${urlQueryParamsGet('view')}"
              label="Members Page"></link-button>
          </div>
        `;
        return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
      }

      return html`
        <div class="row justify-content-center">
          <div class="col-md-12 my-1">
            <div class="shadow bg-white mb-3">
                <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                    Additional Data/ Form
                </h4>
                <mwc-tab-bar activeIndex="0">
                    <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="viewSectionFormBtn"
                    label="Additional Data" @click="${this.displayViewSectionBtn}"></mwc-tab>
                    <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="formSectionFormBtn" label="Form" @click="${this.displayFormSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
                </div>
                <div class="py-2">
                    ${this.getViewFormSection}
                </div>
                <div class="p-3 border-t-2 flex justify-end">...</div>
            </div>
          </div>
        </div>
      `;
    }
  }

  private displayViewSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.viewSectionFormBtn.setAttribute('raised', "true");
    this.formSectionFormBtn.removeAttribute('raised');
  }

  private displayFormSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.formSectionFormBtn.setAttribute('raised', "true");
    this.viewSectionFormBtn.removeAttribute('raised');
  }

  private get getViewFormSection() {
    // console.log({"this.memberGroups": this.memberGroups, "this.memberSubGroups": this.memberSubGroups});
    
    if (this.formId === 1) {
      this.formId
      return html`
        ${this.viewData}
      `;
    } else {
      this.formId
      return html`
        ${this.formData}
      `;
    }
  }

  private get viewData() {
    return html`
      <additional-registration-member-view-data .memberQuestions="${this.memberQuestions}" .memberQuestionResponses="${this.memberQuestionResponses}"></additional-registration-member-view-data>
    `;
  }

  private get formData() {    
    return html`
      <additional-registration-member-view-form .memberQuestions="${this.memberQuestions}" memberId="${this.memberId}" .memberQuestionResponses="${this.memberQuestionResponses}" .arQuestionType="${this._arQuestionType}"></additional-registration-member-view-form>
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

  private async getMemberQuestions() {
    const _networkResponse = await GET_AdditionalRegistrationMemberQuestions<any>(this.memberId);
    if (_networkResponse === null) {
        this.memberQuestions = undefined;
    } else {
        this.memberQuestions = _networkResponse.paginResponse.results.map(question => {
            return armConvert.toAdditionalRegistrationModel(JSON.stringify(question));
        });
    }
  }

  private async getMemberQuestionResponses() {
    const _networkResponse = await GET_AdditionalRegistrationMemberQuestionResponses<any>(this.memberId, "&length=10000");
    if (_networkResponse === null) {
        this.memberQuestionResponses = undefined;
    } else {
        this.memberQuestionResponses = _networkResponse.paginResponse.results.map(response => {
            return arrmConvert.toAdditionalRegistrationResponseModel(JSON.stringify(response));
        });
    }
  }

  private async getAdditionalRegistrationQuestionType() {
    const _networkResponse = await GET_AdditionalRegistrationQuestionType<AdditionalRegistrationQuestionTypeModel>();
    let __arQuestionType: AdditionalRegistrationQuestionTypeModel[] = [];

    if (_networkResponse === null) {
      __arQuestionType.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: AdditionalRegistrationQuestionTypeModel[] = _networkResponse.response.data;
        // console.log({DATA});
        __arQuestionType = DATA;
      }
    }
    const new_data: Array<AdditionalRegistrationQuestionTypeModel> = [];
    new_data.push(...this._arQuestionType, ...__arQuestionType);
    this._arQuestionType = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
