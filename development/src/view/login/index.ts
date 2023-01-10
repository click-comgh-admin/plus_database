import "@@assets/styles/views/login/main.scss";
import { CONSTANTS } from '@@addons/constants';
import { togglePswdVisibility } from '@@addons/functions/toggle_pswd_visibility';
import { POST_Login } from '@@addons/network/login';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-textfield';


@customElement('pdb-login-form')
export class PdbLoginForm extends LitElement {
  constructor() { super(); }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <form method="post" action="#" class="form" make-general-posts="client-login">
        <div class="form-input-container">
          <mwc-textfield name="phone_email" id="phone_email" label="E-mail/ Phone Number" icon="person" outlined type="text" required>
          </mwc-textfield>
        </div>
        <div class="form-input-container">
          <mwc-textfield name="password" id="password" label="Password" icon="lock" outlined type="password" required>
          </mwc-textfield>
        </div>
      
        <div class="form-input-container flex">      
          <div class="w-full text-right">
            <a class="underline text-sm !text-gray-800 hover:!text-gray-900"
              href="${CONSTANTS.URLS.FORGOT_PASSWORD_URL}">
              forgot password?
            </a>
          </div>
        </div>
      
        <div class="form-input-container">
          <mwc-button label="Login" raised class="button" @click="${this.submitForm}">
          </mwc-button>
        </div>
      
        <div class="flex form-input-container items-center text-center">
          <hr class="border-gray-300 border-1 w-full rounded-md">
          <label class="block font-medium text-sm text-gray-600 w-full">
            Lets go digital...
          </label>
          <hr class="border-gray-300 border-1 w-full rounded-md">
        </div>
      </form>`;
  }

  firstUpdated() {
    togglePswdVisibility();
    togglePswdVisibility("mwc-textfield");
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    await POST_Login();
  }

  createRenderRoot() {
    return this;
  }
}
