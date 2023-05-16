import "@@assets/styles/views/admin/register/main.scss";
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './location';
import "@@addons/widgets/accordion/component/item";
import "@@addons/widgets/accordion/component/main";

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
    return html`
      <div class="shadow-sm border bg-white p-2 m-2">
        <h1 class="text-[#ca8a04] text-[1.5rem] font-bold">Instructions 
        </h1>
        <accordion-component class="my-2">
          <accordion-item title="General">
            <ul class="list-disc list-inside mx-4 my-8">
              <li class="mb-1">Do not edit the first row of the template file</li>
              <li class="mb-1">Do not add new columns to the first row of the template file</li>
              <li class="mb-1">Do not remove any column from the first row of the template file</li>
              <li class="mb-1">If data does not exist for a column leave it blank</li>
            </ul>
          </accordion-item>
          <accordion-item title="Madatory Fields">
            <ul class="list-disc list-inside mx-4 my-8">
              <li class="mb-1">First Name</li>
              <li class="mb-1">Surname</li>
              <li class="mb-1">Gender</li>
              <li class="mb-1">Phone Number</li>
              <li class="mb-1">Branch</li>
              <li class="mb-1">Category</li>
              <li class="mb-1">Country</li>
            </ul>
          </accordion-item>
          <accordion-item title="Location Data">
            <membership-registration-excel-location></membership-registration-excel-location>
          </accordion-item>
        </accordion-component>
      </div>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
