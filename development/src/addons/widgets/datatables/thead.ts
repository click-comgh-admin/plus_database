import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('datatable-thead')
export class _DATATABLES_Thead extends LitElement {
  static styles = [
    css`
      thead {
        display: table-header-group !important;
      }
    `
  ];

  render() {
    return html`
      <div>
        <slot name="datatable-thead"></slot>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
