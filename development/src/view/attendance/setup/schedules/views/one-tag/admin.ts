import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import { until } from 'lit/directives/until.js';
import { MeetingEventScheduleAdmin_I } from '@@addons/interfaces/attendance/meeting_event/admin';
import { GET_AttendanceScheduleAdmin } from '@@addons/network/attendance/setup/admin';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { GET_ClientUsers } from '@@addons/network/clients/users';
import { CONSTANTS } from '@@addons/constants';


@customElement("attendance-setup-view-one-admin")
export class AttendanceSetupViewOneAdmin extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleAdmins: NetworkCallPaginResponse_I<MeetingEventScheduleAdmin_I> = null;

  public set _scheduleAdmins(value: NetworkCallPaginResponse_I<MeetingEventScheduleAdmin_I>) {
    this.__scheduleAdmins = value;
    this.requestUpdate();
  }

  public get _scheduleAdmins(): NetworkCallPaginResponse_I<MeetingEventScheduleAdmin_I> {
    return this.__scheduleAdmins;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleAdmin();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      ${this.schedule}
    `;
  }

  private get schedule() {
    return html`${this.table}`;
  }

  private get table() {
    return html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Admin Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Meeting Editor
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Agenda Editor
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Clocking Admin
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  private get tableBody() {
    if (this._scheduleAdmins === null) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `;
    }
    if (this._scheduleAdmins === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Admin </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    return html`
      ${this._scheduleAdmins.results.map((item, _index, __lists) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${until(this.getAdminUser(item.adminId), html`<span>Loading...</span>`)}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${item.meetingEditor ? html`<mwc-icon class="text-green-600">check</mwc-icon>`: html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${item.agendaEditor ? html`<mwc-icon class="text-green-600">check</mwc-icon>`: html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${item.clockingAdmin ? html`<mwc-icon class="text-green-600">check</mwc-icon>` : html`<mwc-icon class="text-red-600">close</mwc-icon>`}
              ${(_index+1) == __lists.length? "...": ""}
            </th>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() { }

  private async getAttendanceScheduleAdmin() {
    const _networkResponse = await GET_AttendanceScheduleAdmin<MeetingEventScheduleAdmin_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleAdmins = undefined;
    } else {
      this._scheduleAdmins = _networkResponse.paginResponse;
    }
  }

  private async getAdminUser(ID: number) {
    const _networkResponse = await GET_ClientUsers<ClientUsers_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      if (_networkResponse.response.success && 'dateOfBirth' in _networkResponse.response.data) {
        // console.log({ "_networkResponse.response": _networkResponse.response })
        
        const user: ClientUsers_I = _networkResponse.response.data;
        // console.log({ "user.firstname user.surname": user.firstname + " " + user.surname })
        return user.firstname + " " + user.surname;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
