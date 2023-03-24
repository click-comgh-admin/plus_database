import "@@assets/styles/views/admin/register/main.scss";
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './location';
import "@@addons/widgets/accordion/main"

@customElement('membership-registration-excel-instruction')
export class MembershipRegistrationExcelInstruction extends LitElement {
  constructor() { super(); }

  async connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }
  static styles = [
    css`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `
  ];

  render() {
    const contents: Array<TemplateResult> = [
      html`<app-accordion-item accordion_class_name="excel-instructions" class="mb-1"
        .buttonHtml="${html`<b>Location Data</b>`}"
        .contentHtml=${html`<membership-registration-excel-location></membership-registration-excel-location>`}>
        </app-accordion-item>
      `,
    ];
    // console.log({contents});
    
    // accordion_class_name
    // buttonHtml
    // contentHtml
    return html`
      <div class="shadow-sm border bg-white p-2 m-2">
        <h1 class="text-[#ca8a04] text-[1.5rem] font-bold">Instructions</h1>
        <app-accordion accordionName="excel-instructions" .contents=${contents}></app-accordion>
      </div>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
