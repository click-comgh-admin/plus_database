import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
// import '@material/mwc-select';
// import '@material/mwc-textarea';
// import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
// import '@material/mwc-dialog';
import { MDCDataTable } from '@material/data-table';
import { getTime } from '@@addons/functions/date_time/time';
import { GET_AttendanceScheduleBreak } from '@@addons/network/attendance/setup/break';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
// import { POST_AttendanceAddScheduleBreakMultiple } from '@@addons/network/attendance/setup/break/post_multiple';
// import { PUT_AttendanceUpdateScheduleBreakMultiple } from '@@addons/network/attendance/setup/break/put_multiple';
import { DELETE_AttendanceDeleteScheduleBreak } from '@@addons/network/attendance/setup/break/delete';
import { MeetingEventScheduleBreak_I } from '@@addons/interfaces/attendance/meeting_event/break';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { GET_ClientUsers } from '@@addons/network/clients/users';
import '@@addons/widgets/form/new/select';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { QueryOptions } from 'select2';
// import { Select } from '@material/mwc-select';
import { POST_AttendanceAddScheduleBreak } from '@@addons/network/attendance/setup/break/post';
import { getUserLoginInfoCookie } from '@@addons/functions/login';


@customElement("attendance-setup-form-break")
export class AttendanceSetupFormBreak extends LitElement {
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
  // private _breakUser: ClientUsers_I[] = [];

  private __breakUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _breakUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__breakUser = value;
    this.requestUpdate();
  }

  public get _breakUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__breakUser;
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

  private __scheduleBreaks: NetworkCallPaginResponse_I<MeetingEventScheduleBreak_I> = null;

  public set _scheduleBreaks(value: NetworkCallPaginResponse_I<MeetingEventScheduleBreak_I>) {
    this.__scheduleBreaks = value;
    this.requestUpdate();
  }

  public get _scheduleBreaks(): NetworkCallPaginResponse_I<MeetingEventScheduleBreak_I> {
    return this.__scheduleBreaks;
  }

  // @property({ type: Object })
  // private _scheduleBreaks: NetworkCallPaginResponse_I<MeetingEventScheduleBreak_I> = null;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-breakField="all"]')
  private showBreakFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    // await this.getBreakUsers();  

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleBreak();
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
      return html`${this.scheduleBreak}`;
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

  private get scheduleBreak() {
    // console.log({ "this._scheduleBreaks": this._scheduleBreaks });

    if (this._scheduleBreaks === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleBreaks === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Break</span>: undefined error</h4>
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
    if (this._scheduleBreaks.results.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Break">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Time
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
                ${this.getMeetingAttendanceBreaks}
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

  private get getMeetingAttendanceBreaks() {
    return html`
      ${this._scheduleBreaks.results.map((item) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${getTime(item.startBreak).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${getTime(item.endBreak).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteQuestionnaireMeetingAttendanceBreak}"></mwc-icon-button>
            </td>
          </tr>
        `;
      })}
    `;
  }

  private get form() {
    // <!-- <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addBreakField}">
    // </mwc-icon-button> -->
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Break</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Break!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-break">
                <div class="p-0 m-0" show-breakField="all">
                  ${this.breakFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Break" raised class="button" @click="${this.submitForm}">
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

  private get breakField() {
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    // console.log({ajaxHeader: ajaxHeader});
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Start Time</h4> 
            <mwc-textfield name="startBreak" type="time" class="w-full" id="startBreak" label="Select Start Time" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Time</h4> 
            <mwc-textfield name="endBreak" type="time" class="w-full" id="endBreak" label="Select End Time" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  private breakFieldDefault(number: number) {
    return html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.breakField}
        breakField-id="${number}" no_delete></multiple-widgets>
    `;
  }

  private addBreakField() {    
    const count = this.showBreakFieldAllSelector.children.length,
      // @ts-ignore
      lastIndex = count === 0 ? -1 : Number(this.showBreakFieldAllSelector.children[count - 1].getAttribute('breakField-id'));
      // console.log({lastIndex});
        
    const newIndex = lastIndex + 1,
      question = document.createElement('multiple-widgets');
      question.setAttribute('class', "col-md-12 col-lg-12 mb-3");
      question.setAttribute('breakField-id', String(newIndex));
    // question.setAttribute('widget', this.breakField);
    this.showBreakFieldAllSelector.append(question);
    const elements = this.showBreakFieldAllSelector.querySelectorAll('multiple-widgets[breakField-id="'+newIndex+'"]')
    // console.log({ elements })
    const newElem = this.breakField.strings.join('');
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

  private async getBreakUsers() {
    const _networkResponse = await GET_ClientUsers<ClientUsers_I>();
    let __breakUsers: ClientUsers_I[] = [];

    if (_networkResponse === null) {
      this._breakUser = undefined;
    } else {
      this._breakUser = _networkResponse.paginResponse;
    }
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    // if (this._scheduleBreaks.count > 0) {
    //   await PUT_AttendanceUpdateScheduleBreakMultiple(this.meetingEventId);
    // } else {
    //   await POST_AttendanceAddScheduleBreakMultiple();
    // }
    await POST_AttendanceAddScheduleBreak();
  }

  async deleteQuestionnaireMeetingAttendanceBreak(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_AttendanceDeleteScheduleBreak(meetingEventId);
  }

  private processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="breakId"]');
    // console.log({ data, params, RESULTS, SELECTOR });

    let processedData: { id: number; text: string; }[] = [];
    if (TOTAL > 0) {
      var _data = RESULTS;
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const id = item['id'];
        const fullName = item['firstname'] + " " + item['surname'];
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({processedData});
    


    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private get ajaxFetchUrlParams(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "", value: "" }
    ]
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

  private async getAttendanceScheduleBreak() {
    const _networkResponse = await GET_AttendanceScheduleBreak<MeetingEventScheduleBreak_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
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
