import '@@assets/styles/views/widget/simple-table/main.scss';
import '@@assets/styles/views/attendance/setup/form.scss';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@material/mwc-dialog';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '@@addons/widgets/form/new/select';
import { PATCH_AdditionalRegistrationQuestion } from '@@addons/network/additional_registration/patch';
import './form/inputs';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { base64Decode } from '@@addons/functions/base64';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { GET_AdditionalRegistrationQuestionType } from '@@addons/network/additional_registration/types';
import { GET_AdditionalRegistrationQuestion } from '@@addons/network/additional_registration';
import { AdditionalRegistrationModel, Convert as armConvert, AdditionalRegistrationQuestionTypeModel, AdditionalRegistrationOnlyModel } from '@@addons/interfaces/additional_registration';


@customElement("additional-registration-creator-edit")
export class AdditionalRegistrationCreatorEdit extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  private questionData?: AdditionalRegistrationModel = undefined;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Number })
  private selectedBranchId: number = 0;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Number })
  private userBranch?: number;

  @property({ type: Array })
  public _arQuestionType: Array<AdditionalRegistrationQuestionTypeModel> = [];

  @property({ type: Number })
  private questionID?: number = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this._userLoginInfo = [getUserLoginInfoCookie()];

    this.getQuestionId();
    await this.getAdditionalRegistrationQuestion();
    await this.getBranches();
    await this.getMemberCategories();
    await this.getAdditionalRegistrationQuestionType();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    this.userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        this.userBranch = this._userLoginInfo[0].user.branchId;
      }
    }

    console.log({"this.questionData--this.questionData": this.questionData})

    if (this.questionData === undefined) {
      return html`
        <div class="shadow bg-white p-2 my-2">
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        </div>
      `;
    }

    if (this.questionData === null) {
      return html`
        <div class="shadow bg-white p-2 my-2">
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Error </span>: Question Not Found!</h4>
            </div>
          </div>
        </div>
      `;
    }
    return html`
      <div class="shadow bg-white p-2 my-2">
        <div class="main-container">
          ${this.form}
        </div>
      </div>
    `;
  }

  private get form() {
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Update Additional Registration Question</h1>
                  <h3 class="h3">Edit Additional Registration Question!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="edit-schedule-question">
                <question-inputs-component id="${this.questionID}" question-inputs-component--object="1" .questionData="${[this.questionData]}"
                  .branches="${this._branches}" .memberCategories="${this._memberCategories}" userBranch="${this.userBranch}" 
                  .arQuestionType="${this._arQuestionType}"></question-inputs-component>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <div class="form-input-container">
                      <mwc-button label="Submit Question" raised class="button" @click="${this.submitForm}">
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
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    `;
  }

  firstUpdated() {

  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
      
      const questionInputsComponent = document.querySelector(`question-inputs-component[id="${this.questionID}"]`);
      const question: AdditionalRegistrationOnlyModel = {
        // @ts-ignore
        branchId: questionInputsComponent.branchIdValue,
        // @ts-ignore
        memberCategoryId: questionInputsComponent.memberCategoryIdValue,
        // @ts-ignore
        question: questionInputsComponent.questionValue,
        // @ts-ignore
        type: questionInputsComponent.typeValue,
        // @ts-ignore
        placeholderInstruction: questionInputsComponent.placeholderInstructionValue,
      };
      console.log({questionInputsComponent, question})
      await PATCH_AdditionalRegistrationQuestion(this.questionID, question);
  }

  private getQuestionId() {
    let questionID = urlQueryParamsGet('question');
    let _questionID = base64Decode(questionID !== null ? String(questionID) : "");
    this.questionID = Number.isNaN(_questionID) ? null : Number(_questionID);
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.questionID": this.questionID });
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

  private async getMemberCategories() {
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

  private async getAdditionalRegistrationQuestion() {
    const _networkResponse = await GET_AdditionalRegistrationQuestion<AdditionalRegistrationModel>(this.questionID);
    let _question: AdditionalRegistrationModel = null;

    if (_networkResponse === null) {
      _question = null;
    } else {
      if ((_networkResponse.response.success === true) && ('question' in _networkResponse.response.data)) {
        const question: AdditionalRegistrationModel = armConvert.toAdditionalRegistrationModel(JSON.stringify(_networkResponse.response.data));
        console.log({question});
        _question = question;
      }
    }
    setTimeout(() => {
      this.questionData = _question;
    }, 100);
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
