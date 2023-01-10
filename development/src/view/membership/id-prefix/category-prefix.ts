import '@@assets/styles/views/attendance/setup/form.scss';
import { LitElement, html, } from 'lit';
import { customElement, } from 'lit/decorators.js';
import './views/category';


@customElement("id-category-prefix")
export class IdCategoryPrefix extends LitElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }

  render() {
    return html`
      <id-category-prefix-view></id-category-prefix-view>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}


