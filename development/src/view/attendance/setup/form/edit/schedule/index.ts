import '@@assets/styles/views/attendance/setup/form.scss';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { tokenLogin } from "@@addons/functions/login/main";
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '../../forms/schedule';
import '../links';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';

@customElement("attendance-setup-form-edit-schedule")
export class AttendanceSetupFormEditSchedule extends LitElement {
  constructor() {
    super();
  }

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: String })
  public email?: string;

  @property({ type: Number })
  public mId?: number;

  @property({ type: Number })
  public clientId?: number;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _pageButtonAccess: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();
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
        <attendance-setup-form-schedule CLIENT_ID="${this.clientId}" meetingEventId="${this.meetingEventId}" isEdit></attendance-setup-form-schedule>
      </div>
    `;
  }

  firstUpsubgroupd() { }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    let _meetingEventId = meetingEventId !== null ? Number(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : _meetingEventId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingEventId": this.meetingEventId });
  }

  createRenderRoot() {
    return this;
  }
}


