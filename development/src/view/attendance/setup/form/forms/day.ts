import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import '@material/mwc-button';
// import '@material/mwc-select';
// import '@material/mwc-textarea';
// import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@@addons/widgets/form/new/file-select';
import { MDCDataTable } from '@material/data-table';
import { GET_AttendanceScheduleDay } from '@@addons/network/attendance/setup/day';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
// import { POST_AttendanceAddScheduleDayMultiple } from '@@addons/network/attendance/setup/day/post_multiple';
// import { PUT_AttendanceUpdateScheduleDayMultiple } from '@@addons/network/attendance/setup/day/put_multiple';
import { DELETE_AttendanceDeleteScheduleDay } from '@@addons/network/attendance/setup/day/delete';
import { MeetingEventScheduleDay_I } from '@@addons/interfaces/attendance/meeting_event/day';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import '@@addons/widgets/form/new/select';
import { DayOfWeek_I } from '@@addons/interfaces/attendance/day_of_week';
import { GET_DayOfWeek } from '@@addons/network/attendance/day_of_week';
import { POST_AttendanceAddScheduleDayMultiple } from '@@addons/network/attendance/setup/day/post_multiple';
import { DateTime } from 'luxon';
import { getDate } from '@@addons/functions/date_time/date';
import { POST_AttendanceAddScheduleDay } from '@@addons/network/attendance/setup/day/post';


@customElement("attendance-setup-form-day")
export class AttendanceSetupFormDay extends LitElement {
  constructor() { super(); }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  private startSearchPage: number = 0;

  // @property({ type: Array })
  // private _dayUser: ClientUsers_I[] = [];

  private __dayUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _dayUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__dayUser = value;
    this.requestUpdate();
  }

  public get _dayUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__dayUser;
  }

  private __schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  public set _schedule(value: NetworkCallResponse_I<MeetingEventSchedule_I>) {
    this.__schedule = value;
    this.requestUpdate();
  }

  public get _schedule(): NetworkCallResponse_I<MeetingEventSchedule_I> {
    return this.__schedule;
  }

  // @property({ type: Object })
  // private _schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  private __scheduleDays: Array<MeetingEventScheduleDay_I> = [];

  public set _scheduleDays(value: Array<MeetingEventScheduleDay_I>) {
    this.__scheduleDays = value;
    this.requestUpdate();
  }

  public get _scheduleDays(): Array<MeetingEventScheduleDay_I> {
    return this.__scheduleDays;
  }

  @property({ type: Array })
  private _daysOfWeek: DayOfWeek_I[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-dayField="all"]')
  private showDayFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    // await this.getDayUsers();  

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleDay();
    await this.getDaysOfWeek();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`${this.schedule}`;
  }

  private get schedule() {
    // console.log({ "this._schedule": this._schedule });
    if (this._schedule === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._schedule === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else if (this._schedule.success === true) {
      return html`${this.scheduleDay}`;
    } else {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `;
    }
  }

  private get scheduleDay() {
    // console.log({ "this._scheduleDays": this._scheduleDays });

    if (this._scheduleDays === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleDays === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      return html`
        ${this.form}<hr/>${this.display}
      `;
    }
  }

  private get display() {
    return html`${this.table}`;
  }

  private get table(): TemplateResult {
    if (this._scheduleDays.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Day">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Day
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
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${this.getMeetingAttendanceDays}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `;
    }
  }

  private get getMeetingAttendanceDays() {
    return html`
      ${this._scheduleDays.map((item, i) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${until(this.getDayOfWeek(item.dayId), html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${getDate(item.endDate, {dateStyle: "medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteQuestionnaireMeetingAttendanceDay}"></mwc-icon-button>
            </td>
          </tr>
        `;
      })}
    `;
  }

  private get form() {
    // <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addDayField}">
    // </mwc-icon-button>
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Day</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Day!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-day">
                <div class="p-0 m-0" show-dayField="all">
                  ${this.dayFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Day" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private get dayField() {
    // console.log({ "this._daysOfWeek": this._daysOfWeek });
    const daysOfWeek__ = this._daysOfWeek.map((value) => {
      return html`<mwc-list-item value="${value.id}">${value.day}</mwc-list-item>`;
    });
    // console.log({ "daysOfWeek__": daysOfWeek__ });
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId" label="Select Day" outlined required>
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${html`${daysOfWeek__}`}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Date</h4>
            <mwc-textfield name="endDate" multiple type="date" class="w-full" id="endDate"
              label="Select Date" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  private dayFieldDefault(number: number) {
    return html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.dayField}
        dayField-id="${number}" no_delete></multiple-widgets>
    `;
  }

  private addDayField() {    
    const count = this.showDayFieldAllSelector.children.length,
      // @ts-ignore
      lastIndex = count === 0 ? -1 : Number(this.showDayFieldAllSelector.children[count - 1].getAttribute('dayField-id'));
      // console.log({lastIndex});
        
    const newIndex = lastIndex + 1,
      question = document.createElement('multiple-widgets');
      question.setAttribute('class', "col-md-12 col-lg-12 mb-3");
      question.setAttribute('dayField-id', String(newIndex));
    // question.setAttribute('widget', this.dayField);
    this.showDayFieldAllSelector.append(question);
    const elements = this.showDayFieldAllSelector.querySelectorAll('multiple-widgets[dayField-id="'+newIndex+'"]')
    // console.log({ elements })
    const newElem = this.dayField.strings.join('');
    setTimeout(() => {
      elements.forEach(element => {
        // console.log({ element })
        const mainElements = element.querySelectorAll('main');
        // console.log({ mainElements })
        mainElements.forEach(main => {
          // console.log({ main, newIndex })
          main.innerHTML = newElem;
        });
      });
    });
  }

  firstUpdated() {
    this.querySelectorAll('[mdc-data-table="data-table"]').forEach((selector) => {
      const dataTable = new MDCDataTable(selector);

      // console.log({ dataTable: dataTable })
    });
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    // if (this._scheduleDays.count > 0) {
    //   await PUT_AttendanceUpdateScheduleDayMultiple(this.meetingEventId);
    // } else {
    //   await POST_AttendanceAddScheduleDayMultiple();
    // }
    // await POST_AttendanceAddScheduleDayMultiple();
    await POST_AttendanceAddScheduleDay();
  }

  async deleteQuestionnaireMeetingAttendanceDay(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_AttendanceDeleteScheduleDay(meetingEventId);
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    let _meetingEventId = meetingEventId !== null ? Number(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : _meetingEventId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.meetingEventId": this.meetingEventId });
  }

  private async getAttendanceSchedule() {
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(this.meetingEventId);
    if (_networkResponse === null) {
      this._schedule = undefined;
    } else {
      this._schedule = _networkResponse.response;
    }
  }

  private async getAttendanceScheduleDay() {
    const _networkResponse = await GET_AttendanceScheduleDay<MeetingEventScheduleDay_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    let __scheduleDays: MeetingEventScheduleDay_I[] = [];

    if (_networkResponse === null) {
      __scheduleDays.push({ id: 0, dayId: 0, endDate: new Date()  });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: MeetingEventScheduleDay_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __scheduleDays = DATA;
      }
    }

    const new_data: Array<MeetingEventScheduleDay_I> = [];
    new_data.push(...this._scheduleDays, ...__scheduleDays);
    this._scheduleDays = new_data;
  }

  private async getDaysOfWeek() {
    const _networkResponse = await GET_DayOfWeek<DayOfWeek_I>();
    let __daysOfWeek: DayOfWeek_I[] = [];

    if (_networkResponse === null) {
      __daysOfWeek.push({ id: 0, day: "**NOT FOUND**", date: new Date()  });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: DayOfWeek_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __daysOfWeek = DATA;
      }
    }

    const new_data: Array<DayOfWeek_I> = [];
    new_data.push(...this._daysOfWeek, ...__daysOfWeek);
    this._daysOfWeek = new_data;
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
