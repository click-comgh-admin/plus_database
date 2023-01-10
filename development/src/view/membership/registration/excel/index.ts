import '@@assets/styles/views/attendance/setup/form.scss';
import { tokenLogin } from "@@addons/functions/login/main";
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import './form/create';
import { CONSTANTS } from '@@addons/constants';
import '../../../no_access/account_expired';
import '../../../no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../page__id';


@customElement("membership-registration-excel")
export class MembershipRegistrationExcel extends LitElement {
  constructor() {
    super();
  }

  @property({ type: String })
  public email?: string;

  @property({ type: Number })
  public mId?: number;

  @property({ type: Number })
  public clientId?: number;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    await tokenLogin(this.email, this.mId, "client_tokenLogin");
  }

  disconnectedCallback() { }

  render() {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.create, viewType: "Edit"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <a href="${CONSTANTS.URLS.PDB_CLIENT}assets/v2/samples/new%20Excel%20Registration.xlsx">
        <mwc-button icon="download" label="Download Template" class="success" raised></mwc-button>
      </a>
      <membership-registration-excel-create CLIENT_ID="${this.clientId}"></membership-registration-excel-create>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}


