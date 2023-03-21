import "@@assets/styles/views/admin/register/main.scss";
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../location';
import "@@addons/widgets/accordion/main"

@customElement('membership-registration-organization-excel-instruction')
export class MembershipRegistrationOrganizationExcelInstruction extends LitElement {
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
      html`<app-accordion-item accordion_class_name="excel-instructions" class="mb-1"
        .buttonHtml="${html`<b>Organization Type</b>`}"
        .contentHtml=${html`
          <div class="p-2">
            <p>For <span>Organization Type</span> enter below</p>
            <h3 class="text-[1.05rem] font-medium">Default Values</h3>
            <ul>
              <li>Enter <b>1</b>/ <b>Non-Profit</b></li>
              <li>Enter <b>2</b>/ <b>Religious</b></li>
              <li>Enter <b>3</b>/ <b>Business</b></li>
            </ul>
            <h3 class="text-[1.05rem] font-medium">Custom Value</h3>
            <p>Enter Custom Organization Type</p>
          </div>
        `}>
        </app-accordion-item>
      `,
      html`<app-accordion-item accordion_class_name="excel-instructions" class="mb-1"
        .buttonHtml="${html`<b>Business Registered</b>`}"
        .contentHtml=${html`
          <div class="p-2">
            <p>Requires "True"/ "False" as values</p>
          </div>
        `}>
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
