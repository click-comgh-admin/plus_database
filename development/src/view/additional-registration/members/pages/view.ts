import '@@assets/styles/views/widget/simple-table/main.scss';
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
import { AdditionalRegistrationModel, Convert as armConvert, AdditionalRegistrationQuestionTypeModel } from '@@addons/interfaces/additional_registration';
import { AdditionalRegistrationResponseModel, Convert as arrmConvert } from '@@addons/interfaces/additional_registration/response';


@customElement("additional-registration-member-view-data")
export class AdditionalRegistrationMemberViewData extends LitElement {
  constructor() { super(); }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

  @property({ type: Number })
  public CLIENT_ID: number = 0;

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
    return html`${this.display}`;
  }

  private get display() {
    return html`${this.table}`;
  }

  private get table(): TemplateResult {
    if (this.memberQuestions.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="Question">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Question</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-left" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Response</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${this.getMemberAdditionalData}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `;
    }
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
        // return this.memberQuestionResponses.map((response) => {

        // });
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <div class="whitespace-pre-line">
                <p class="py-0 my-0"><b>${question.question}</b></p>
                <small class="py-0 my-0">${question.placeholderInstruction}</small>
              </div>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !text-left" style="text-align: left !important;" scope="row">
                ${questionResponse === null? "-": html`
                    ${questionResponse.response}
                `}
            </td>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() {
    this.querySelectorAll('[mdc-data-table="data-table"]').forEach((selector) => {
      const dataTable = new MDCDataTable(selector);

      // console.log({ dataTable: dataTable })
    });
  }

  createRenderRoot() {
    return this;
  }
}
