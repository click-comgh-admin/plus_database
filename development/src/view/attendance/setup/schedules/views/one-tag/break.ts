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
import { MeetingEventScheduleBreak_I } from '@@addons/interfaces/attendance/meeting_event/break';
import { GET_AttendanceScheduleBreak } from '@@addons/network/attendance/setup/break';
import { CONSTANTS } from '@@addons/constants';
import { getTime } from '@@addons/functions/date_time/time';


@customElement("attendance-setup-view-one-break")
export class AttendanceSetupViewOneBreak extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleBreaks: NetworkCallPaginResponse_I<MeetingEventScheduleBreak_I> = null;

  public set _scheduleBreaks(value: NetworkCallPaginResponse_I<MeetingEventScheduleBreak_I>) {
    this.__scheduleBreaks = value;
    this.requestUpdate();
  }

  public get _scheduleBreaks(): NetworkCallPaginResponse_I<MeetingEventScheduleBreak_I> {
    return this.__scheduleBreaks;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleBreak();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
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
                        <b>Schedule Break Start Time</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Time
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
    if (this._scheduleBreaks === null) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `;
    }
    if (this._scheduleBreaks === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Break </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    return html`
      ${this._scheduleBreaks.results.map((item, _index, __lists) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${getTime(item.startBreak).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${getTime(item.endBreak).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
              ${(_index + 1) == __lists.length ? "..." : ""}
            </th>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() { }

  private async getAttendanceScheduleBreak() {
    const _networkResponse = await GET_AttendanceScheduleBreak<MeetingEventScheduleBreak_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleBreaks = undefined;
    } else {
      this._scheduleBreaks = _networkResponse.paginResponse;
    }
  }

  createRenderRoot() {
    return this;
  }
}
