import '@@assets/styles/views/attendance/setup/form.scss';
import { LitElement, html, } from 'lit';
import { customElement, } from 'lit/decorators.js';
import './views/branch';


@customElement("id-branch-prefix")
export class IdBranchPrefix extends LitElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }

  render() {
    return html`
      <id-branch-prefix-view></id-branch-prefix-view>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}


