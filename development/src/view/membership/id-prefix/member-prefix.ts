import '@@assets/styles/views/attendance/setup/form.scss';
import { LitElement, html, } from 'lit';
import { customElement, } from 'lit/decorators.js';
import './views/member';


@customElement("id-member-prefix")
export class IdMemberPrefix extends LitElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }

  render() {
    return html`
      <id-member-prefix-view></id-member-prefix-view>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}


