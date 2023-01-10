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
import { MeetingEventScheduleDay_I } from '@@addons/interfaces/attendance/meeting_event/day';
import { GET_AttendanceScheduleDay } from '@@addons/network/attendance/setup/day';
import { getDate } from '@@addons/functions/date_time/date';
import { DayOfWeek_I } from '@@addons/interfaces/attendance/day_of_week';
import { GET_DayOfWeek } from '@@addons/network/attendance/day_of_week';
import { until } from 'lit/directives/until.js';
import { CONSTANTS } from '@@addons/constants';


@customElement("attendance-setup-view-one-day")
export class AttendanceSetupViewOneDay extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleDays: Array<MeetingEventScheduleDay_I> = null;

  public set _scheduleDays(value: Array<MeetingEventScheduleDay_I>) {
    this.__scheduleDays = value;
    this.requestUpdate();
  }

  public get _scheduleDays(): Array<MeetingEventScheduleDay_I> {
    return this.__scheduleDays;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleDay();

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
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
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
                      <b>Schedule Day</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      End Date
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
    if (this._scheduleDays === null) {
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
    if (this._scheduleDays === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Day </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    // console.log({"this._scheduleDays": this._scheduleDays})
    return html`
      ${this._scheduleDays.map((item, _index, __lists) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${until(this.getDayOfWeek(item.dayId), html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${getDate(item.endDate, {dateStyle: "medium"})}
              ${(_index + 1) == __lists.length ? "..." : ""}
            </td>
          </tr>
        `;
      })}
    `;
  }

  firstUpdayd() { }

  private async getAttendanceScheduleDay() {
    const _networkResponse = await GET_AttendanceScheduleDay<MeetingEventScheduleDay_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleDays = undefined;
    } else {
      if (Array.isArray(_networkResponse.response.data)) {
        this._scheduleDays = _networkResponse.response.data;
      }
    }
  }

  private async getDayOfWeek(ID: number) {
    const _networkResponse = await GET_DayOfWeek<DayOfWeek_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      if (_networkResponse.response.success && 'day' in _networkResponse.response.data) {
        
        const day_of_week: DayOfWeek_I = _networkResponse.response.data;
        return day_of_week.day;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
