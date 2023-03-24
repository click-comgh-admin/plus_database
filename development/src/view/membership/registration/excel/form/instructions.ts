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
        <h1 class="text-[#ca8a04] text-[1.5rem] font-bold">Instructions</h1>
        <accordion-component class="my-2">
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
