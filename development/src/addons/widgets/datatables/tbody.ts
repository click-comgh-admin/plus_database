import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('datatable-tbody')
export class _DATATABLES_Tbody extends LitElement {
  static styles = [
    css`
      div {
        display: table-row-group !important;
      }
    `
  ];

  render() {
    return html`
      <div>
        <slot name="datatable-tbody"></slot>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
