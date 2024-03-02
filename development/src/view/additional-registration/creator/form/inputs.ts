import { AdditionalRegistrationModel } from '@@addons/interfaces/additional_registration';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'
import '@material/mwc-select';
import '@material/mwc-textarea';
import { ClientBranches_I } from '@@addons/interfaces/clients/branches';
import { AdditionalRegistrationQuestionTypeModel } from '@@addons/interfaces/additional_registration'; 
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';


@customElement("question-inputs-component")
export class QuestionInputsComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private inputId = Math.random().toString(36).substring(2, 22);

  @property({ type: String })
  public questionValue?: string;

  @property({ type: String })
  public placeholderInstructionValue?: string;

  @property({ type: String })
  public typeValue?: string;

  @property({ type: String })
  public branchIdValue?: string;

  @property({ type: Array })
  public branches: ClientBranches_I[] = [];

  @property({ type: Number })
  public userBranch?: number;

  @property({ type: Array })
  public memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  public questionData: AdditionalRegistrationModel[] = [];

  @property({ type: String })
  public memberCategoryIdValue?: string;

  @property({ type: Array })
  public meetingQuestion: Array<AdditionalRegistrationModel> = [];

  @property({ type: Array })
  public arQuestionType: Array<AdditionalRegistrationQuestionTypeModel> = []; 

  private defaultQuestions?: AdditionalRegistrationModel = null;

  connectedCallback() {
    super.connectedCallback();
    if (this.meetingQuestion == undefined) this.meetingQuestion = [];

    this.defaultQuestions = this.meetingQuestion.length < 0 ? null: this.meetingQuestion[0] == undefined? null: this.meetingQuestion[0];

    if(this.defaultQuestions !== null) {
      this.typeValue = String(this.defaultQuestions.type);
      this.questionValue = this.defaultQuestions.question;
      this.branchIdValue = String(this.defaultQuestions.branchID.id);
      this.memberCategoryIdValue = String(this.defaultQuestions.memberCategoryID.id);
      this.placeholderInstructionValue = this.defaultQuestions.placeholderInstruction;

    }
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    // console.log({"this.branches--this.branches": this.branches})

    const questionData: AdditionalRegistrationModel|null = this.questionData.length > 0? this.questionData[0]: null;

    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Branch</h4>
            <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined @change="${this.handleBranchIdValueChange}">
              ${this.userBranch === 1 ? html`
                <mwc-list-item value="0">Select Branch</mwc-list-item>
                <mwc-list-item value="">All</mwc-list-item>
                ${this.branches.map((value) => {
                  if (questionData !== null && ((questionData.branchID !== null) && (questionData.branchID.id === value.id))) {
                    return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                  } else {
                    return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                  }
                })}
              `: html`
                ${this.branches.map((value) => {
                  if (value.id === this.userBranch) {
                    return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                  }
                })}
              `}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Member Category</h4>
            <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Member Category" outlined @change="${this.handleMemberCategoryIdValueChange}">
              <mwc-list-item value="0">Select Member Category</mwc-list-item>
              <mwc-list-item value="">All</mwc-list-item>
              ${this.memberCategories.map((value) => {
                if (questionData !== null && ((questionData.memberCategoryID !== null) && (questionData.memberCategoryID.id === value.id))) {
                  return html`<mwc-list-item value="${value.id}" selected>${value.category}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${value.id}">${value.category}</mwc-list-item>`;
                }
              })}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-4">
            <h4 class="font-semibold my-2">Select Question Type</h4> 
            <mwc-select name="type" class="w-full" id="type" label="Select Question Type" outlined required @change="${this.handleTypeValueChange}">
              <mwc-list-item value="0">Select Question Type</mwc-list-item>
              ${this.arQuestionType.map((value) => {
                if (questionData !== null && questionData.type === value.id) {
                  return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                }
              })}
            </mwc-select>
          </div>
          <div class="col-md-12 col-lg-6">
            <h4 class="font-semibold my-2">Enter Question</h4> 
            <mwc-textarea name="question" class="w-full" id="question" value="${questionData === null? "": questionData.question}" @change="${this.handleQuestionValueChange}" label="Enter Question" outlined required>
            </mwc-textarea>
          </div>
          <div class="col-md-12 col-lg-6">
            <h4 class="font-semibold my-2">Enter Placeholder Instruction</h4> 
            <mwc-textarea name="placeholderInstruction" class="w-full" id="placeholderInstruction" value="${questionData === null? "": questionData.placeholderInstruction}" @change="${this.handlePlaceholderInstructionValueChange}" label="Enter Placeholder Instruction" outlined required>
            </mwc-textarea>
          </div>
        </div>
      </div>
    `;
  }
  
  
  
  
  
  handleTypeValueChange(event: Event) {
    // @ts-ignore
    this.typeValue = event.target.value;
  }

  handleQuestionValueChange(event: Event) {
    // @ts-ignore
    this.questionValue = event.target.value;
  }

  handleBranchIdValueChange(event: Event) {
    // @ts-ignore
    this.branchIdValue = event.target.value;
  }

  handleMemberCategoryIdValueChange(event: Event) {
    // @ts-ignore
    this.memberCategoryIdValue = event.target.value;
  }

  handlePlaceholderInstructionValueChange(event: Event) {
    // @ts-ignore
    this.placeholderInstructionValue = event.target.value;
  }

  firstUpdated() { 
  }

  createRenderRoot() {
    return this;
  }
}
