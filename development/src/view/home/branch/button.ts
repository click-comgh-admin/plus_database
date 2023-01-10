import '@@assets/styles/views/branch/main.scss';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { POST_VerifyToken } from '@@addons/network/login/verify_token';

@customElement("pdb-branch-button")
export class PdbBranchButton extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private URL = '/account/settings/branch';

  async connectedCallback() {
    super.connectedCallback();
    const getActiveBranchId = getActiveBranchIdCookie();
    // console.log({ getActiveBranchId });

    if (getActiveBranchId === null) {
      this.redirect();
    } else {
      if (getActiveBranchId.id === 0) {
        this.redirect();
      }
      await POST_VerifyToken();
    }
  }

  private redirect() {
    if (!window.location.href.includes(this.URL)) {
      window.location.href = this.URL;
    }
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <link-button isblockcontent="true" aClass="" raised bClass="button info w-full" href="${this.URL}" icon="call_split"
        label="Change Branch"></link-button>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
