import { LitElement, html, css, nothing, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'
import './inputs';
import { QuestionInputsComponent } from './inputs';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import { ClientBranches_I } from '@@addons/interfaces/clients/branches';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { AdditionalRegistrationFormModel, AdditionalRegistrationOnlyModel } from '@@addons/interfaces/additional_registration';
import { AdditionalRegistrationQuestionTypeModel } from '@@addons/interfaces/additional_registration'; 

@customElement("question-multiple-inputs-component")
export class QuestionMultipleInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public meetingEventId: number;

  @property({ type: Number })
  public currentObjectCount: number = 0;

  @property({ type: Array })
  public multipleQuestionObjects: AdditionalRegistrationFormModel[] = [];

  @property({ type: Array })
  private removedInputIndex: number[] = [];

  @property({ type: Array })
  private addedInputIndex: number[] = [];

  @property({ type: Boolean })
  private loading: boolean = true;

  @property({ type: Array })
  public branches: ClientBranches_I[] = [];

  @property({ type: Number })
  public userBranch?: number;

  @property({ type: Array })
  public memberCategories: GroupingsMemberCategories_I[] = [];

  private _inputs: Array<TemplateResult> = [];

  @property({ type: Array })
  public arQuestionType: Array<AdditionalRegistrationQuestionTypeModel> = []; 

  private set inputs(value: Array<TemplateResult>) {
    this._inputs = value;
    this.requestUpdate();
  }

  private get inputs(): Array<TemplateResult> {
    return this._inputs;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log({"this.branches": this.branches, "this.memberCategories": this.memberCategories});
    

    // document.onreadystatechange = (event) => {
    //   console.log({"event-event": event});

    //   this.addInput(new Event('click'));
    // //   if (document.readyState == "complete") this.addInput(new Event('click'));
    // }


    setInterval(() => {
      this.loading = false;
    }, 1);
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  addInput(event: Event) {
    this.currentObjectCount = this.currentObjectCount + 1;
    let newInput = html`<question-inputs-component question-inputs-component--object="${this.currentObjectCount}" 
      .branches="${this.branches}" .memberCategories="${this.memberCategories}" userBranch="${this.userBranch}" .arQuestionType="${this.arQuestionType}">
    </question-inputs-component>`;
    // console.log({ "newInput-newInput": newInput });

    let inputs = this.inputs;
    inputs.push(newInput);

    let addedInputIndex = this.addedInputIndex;
    addedInputIndex.push(this.currentObjectCount - 1);

    setTimeout(() => {
      this.inputs = inputs;
      this.addedInputIndex = addedInputIndex;
      this.multipleInputsHaveChanged(new Event("change"))
    }, 10);
    // console.log({ "newInput-this.inputs": this.inputs });
  }

  removeInput(index: number) {
    // console.log({ "this.inputs": this.inputs });


    if (this.currentInputList.length - 1 > 0) {
      let inputs = this.inputs;

      this.removedInputIndex.push(index);

      delete inputs[index];
      // inputs.splice(index, 1);

      setTimeout(() => {
        this.inputs = inputs;

        this.multipleInputsHaveChanged(new Event("change"))
      }, 10);
    }
  }

  get currentInputList() {
    let currentList: Array<any> = [];

    const inputs = this.inputs;

    inputs.join("-").split("-").forEach(_ => _.length == 0 ? null : currentList.push(_));

    return currentList;
  }

  render() {
    // console.log({ "inputs-inputs.inputs": this.inputs });
    return this.loading ? html`<div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>` : html`
      <div @change="${this.multipleInputsHaveChanged}">
          ${this.inputs.map((input, index) => html`
              <div class="border rounded-md mb-1">
                <h3 class="shadow p-3 font-bold">Question ${index + 1} Info</h3>
                <!-- ${"" /** input.render()  */} -->
                ${input}
                ${(this.currentInputList.length - 1 > 0) ? html`<div class="flex justify-end">
                  <mwc-button @click=${() => this.removeInput(index)} type="button" class="button danger text-right m-1" raised>Remove</mwc-button>
                  </div>` : nothing}
              </div>
            `,)}
        <div class="flex justify-end">
          <mwc-button @click=${this.addInput} type="button" class="button warning text-right m-1" raised>Add Question</mwc-button>
        </div>
      </div>
    `;
  }

  multipleInputsHaveChanged(event: Event) {

    this.addedInputIndex

    const inputComponents = Array.from(document.querySelectorAll('[question-inputs-component--object]'));
    // console.log({ inputComponents, "this.removedInputIndex": this.removedInputIndex });

    const notRemovedComponents: Array<any> = [];

    this.addedInputIndex.forEach((inputIndex) => {

      if (!this.removedInputIndex.includes(inputIndex)) {

        if (!notRemovedComponents.includes(inputIndex)) {
          notRemovedComponents.push(inputIndex);
        }
      }
    });

    // console.log({notRemovedComponents});

    const __this = this;

    this.multipleQuestionObjects[0] = {
      items: notRemovedComponents.map((input) => {
        const inputComponent = Array.from(document.querySelectorAll('[question-inputs-component--object="' + (input + 1) + '"]'));
        // console.log({ "inputComponent---inputComponent": inputComponent, input });

        return inputComponent.map(inputElement => {
          // console.log({ "inputElement---inputElement": inputElement });
          let newObject: AdditionalRegistrationOnlyModel = {
            // @ts-ignore
            type: inputElement.typeValue,
            // @ts-ignore
            question: inputElement.questionValue,
            // @ts-ignore
            branchId: inputElement.branchIdValue,
            // @ts-ignore
            memberCategoryId: inputElement.memberCategoryIdValue,
            // @ts-ignore
            placeholderInstruction: inputElement.placeholderInstructionValue,
          }
          return newObject;
        })[0];
      }),
    };

    // console.log({ "multiple_question_objects": this.multipleQuestionObjects, "__this.meetingEventId": __this.meetingEventId });

  }

  firstUpdated() {

  }

  createRenderRoot() {
    return this;
  }
}
