import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js'
import './accounts/add';
import './accounts/view';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from './page__id';


@customElement("pdb-connections-account-add")
export class PdbConnectionsAccountAdd extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.user_connections, viewType: "Edit"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }

    return html`
      <div class="flex flex-col shadow bg-white my-2 p-2">
        <pdb-connections-accounts-add class="my-1"></pdb-connections-accounts-add>
      </div>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
