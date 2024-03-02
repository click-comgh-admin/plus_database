import '@@assets/styles/views/widget/simple-table/main.scss';
import '@@assets/styles/views/attendance/setup/form.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-textarea';
import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
// import '@material/mwc-dialog';
import { MDCDataTable } from '@material/data-table';
import { AdditionalRegistrationModel, } from '@@addons/interfaces/additional_registration';
import { AdditionalRegistrationResponseModel, AdditionalRegistrationResponseOnlyModel } from '@@addons/interfaces/additional_registration/response';
import { SAVE_AdditionalRegistrationMemberQuestionResponse } from '@@addons/network/additional_registration/save_member_response';


@customElement("additional-registration-member-view-form")
export class AdditionalRegistrationMemberViewForm extends LitElement {
  constructor() { super(); }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

  @property({ type: Number })
  public memberId: number = 0;

  @property({ type: Array })
  public memberQuestions?: AdditionalRegistrationModel[] = null;

  @property({ type: Array })
  private memberQuestionResponses?: AdditionalRegistrationResponseModel[] = null;

  async connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
        <div class="form-container px-3">
            <div class=" !px-0">
                <div class="-row !px-0">
                    <div class="-col-md-12">
                        <header class="header warning -col-md-12">
                            <label for="" class="label">
                                <mwc-icon class="icon">format_strikethrough</mwc-icon>
                                <h1 class="h1 !text-red-400">Additional Registration Question(s)</h1>
                                <h3 class="h3">Save Member Responses!</h3>
                            </label>
                        </header>
                        <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-day">
                            <div class="p-0 m-0" show-dayField="all">
                                ${this.getMemberAdditionalData}
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12">
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

  private get getMemberAdditionalData() {
    // this.dialog(item)
    return html`
      ${this.memberQuestions.map((question) => {
        let questionResponse: AdditionalRegistrationResponseModel | null = null;
        this.memberQuestionResponses.forEach(response => {
            if (question.id === response.question.id) {
                questionResponse = response;
            }
        });
        
        return html`
            <div class="col-md-12 mb-4">
                <h4 class="font-semibold my-2">${question.question}</h4> 
                <div class="flex flex-row justify-evenly items-center">
                    ${question.type === 1? 
                        html`<mwc-textfield name="response" class="w-full" id="response-${question.id}" value="${questionResponse === null? "": questionResponse.response}" label="${question.placeholderInstruction}" outlined required>
                        </mwc-textfield>`: 
                        html`<mwc-textarea name="response" class="w-full" id="response-${question.id}" value="${questionResponse === null? "": questionResponse.response}" label="${question.placeholderInstruction}" outlined required>
                        </mwc-textarea>`
                    }
                    <div class="p-1 m-1"></div>
                    <mwc-button label="Save" raised class="button" qid="${question.id}" qrid="${questionResponse === null? "": questionResponse.id}" @click="${this.submitForm}">
                    </mwc-button>
                </div>
            </div>
        `;
      })}
    `;
  }

  firstUpdated() {
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });

    //@ts-ignore
    const QID = e.currentTarget.getAttribute('qid'),
    //@ts-ignore
    QRID = e.currentTarget.getAttribute('qrid'),
    responseTag = document.querySelector(`[id=response-${QID}]`),
    //@ts-ignore
    response = responseTag.value,
    saveData: AdditionalRegistrationResponseOnlyModel = {
        responseId: QRID === ""? null: QRID,
        question: QID === ""? null: QID,
        memberId: this.memberId,
        response: response,
    };

    await SAVE_AdditionalRegistrationMemberQuestionResponse(saveData);
  }

  createRenderRoot() {
    return this;
  }
}
