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
import { MeetingEventScheduleSMS_I } from '@@addons/interfaces/attendance/meeting_event/sms';
import { GET_AttendanceScheduleSMS } from '@@addons/network/attendance/setup/sms';
import { getTime } from '@@addons/functions/date_time/time';
import { CONSTANTS } from '@@addons/constants';


@customElement("attendance-setup-view-one-sms")
export class AttendanceSetupViewOneSMS extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleSMSs: NetworkCallPaginResponse_I<MeetingEventScheduleSMS_I> = null;

  public set _scheduleSMSs(value: NetworkCallPaginResponse_I<MeetingEventScheduleSMS_I>) {
    this.__scheduleSMSs = value;
    this.requestUpdate();
  }

  public get _scheduleSMSs(): NetworkCallPaginResponse_I<MeetingEventScheduleSMS_I> {
    return this.__scheduleSMSs;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleSMS();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
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
          <table class="mdc-data-table__table" aria-label="New Meeting SMS">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Event Message</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Alert Date
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Notify Parent
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Notify Member
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Attendee Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Absentee Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Absentee Alert Message
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Date
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
    if (this._scheduleSMSs === null) {
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
    if (this._scheduleSMSs === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule SMS </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    return html`
      ${this._scheduleSMSs.results.map((item) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.eventMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${getTime(item.alertTime).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.alertDate}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.notifyParent}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.notifyMember}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${getTime(item.attendeeAlertTime).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${getTime(item.absenteeAlertTime).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.absenteeAlertMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.date}
            </th>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() { }

  private async getAttendanceScheduleSMS() {
    const _networkResponse = await GET_AttendanceScheduleSMS<MeetingEventScheduleSMS_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleSMSs = undefined;
    } else {
      this._scheduleSMSs = _networkResponse.paginResponse;
    }
  }

  createRenderRoot() {
    return this;
  }
}
