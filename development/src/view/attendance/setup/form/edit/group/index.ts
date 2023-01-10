import '@@assets/styles/views/attendance/setup/form.scss';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { tokenLogin } from "@@addons/functions/login/main";
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '../../forms/group';
import '../links';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';

@customElement("attendance-setup-form-edit-group")
export class AttendanceSetupFormEditGroup extends LitElement {
  constructor() {
    super();
  }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

  @property({ type: String })
  public email?: string;

  @property({ type: Number })
  public mId?: number;

  @property({ type: Number })
  public clientId?: number;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _pageButtonAccess: boolean = false;

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
      this._pageButtonAccess = PageButtonUserAccess(PAGE__IDS.schedule_meeting_event);
      
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.schedule_meeting_event, viewType: "Edit"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-group CLIENT_ID="${this.clientId}"></attendance-setup-form-group>
      </div>
    `;
  }

  firstUpgroupd() { }

  createRenderRoot() {
    return this;
  }
}


