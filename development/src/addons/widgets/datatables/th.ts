import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('datatable-th')
export class _DATATABLES_Th extends LitElement {
  static styles = [
    css`
      div {
        display: table-cell !important;
      }
    `
  ];

  render() {
    return html`
      <span>
        <slot name="datatable-th"></slot>
      </span>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
