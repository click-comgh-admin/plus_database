import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-dialog';
import '@material/mwc-button'
import '@material/mwc-icon';
import "../edit";
import {base64Decode} from '@@addons/functions/base64';
import { AdditionalRegistrationModel, Convert as armConvert, AdditionalRegistrationQuestionTypeModel } from '@@addons/interfaces/additional_registration';


@customElement("question-edit-btn-component")
export class QuestionEditBtnComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public questionData: string = "{}";

  @property({ type: Number })
  public clientId: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  @property({ type: String })
  public arQuestionTypeData: string = "[]";

  connectedCallback() {
    super.connectedCallback();
    // console.log({"this.questionData--_1--this.questionData": base64Decode(this.questionData)})
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    const question: AdditionalRegistrationModel = armConvert.toAdditionalRegistrationModel(String(base64Decode(this.questionData)));
    const questionType = JSON.parse(base64Decode(this.arQuestionTypeData));

    // console.log({"this.questionData--_2--this.questionData": question})
    return html`
      <div class="whitespace-nowrap px-1">
        <mwc-button class="warning w-full mx-1" icon="edit" @click="${this.showDialog}"
            raised open-dialog-btn="multiple-additional-registration--questions---${question.id}">
        </mwc-button>
        <additional-registration-creator-edit multiple-additional-registration="questions---${question.id}" clientId="${this.clientId}"
          .questionData="${[question]}" .arQuestionTypeData="${questionType}" meetingEventId="${this.meetingEventId}">
        </additional-registration-creator-edit>
      </div>
    `;
  }

  firstUpdated() { }

  private showDialog(event: any) {
    event.preventDefault();
    // console.log({event})

    const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  createRenderRoot() {
    return this;
  }
}
