import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('datatable-td')
export class _DATATABLES_Td extends LitElement {
  static styles = [
    css`
      div {
        display: table-cell !important;
      }
    `
  ];

  render() {
    return html`
      <div>
        <slot name="datatable-td"></slot>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
