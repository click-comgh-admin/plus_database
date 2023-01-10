import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('datatable-tr')
export class _DATATABLES_Tr extends LitElement {
  static styles = [
    css`
      div {
        display: table-row !important;
      }
    `
  ];

  render() {
    return html`
      <div>
        <slot name="datatable-tr"></slot>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
