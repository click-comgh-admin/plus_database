import '@@assets/styles/views/attendance/clocking/main.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '@material/mwc-circular-progress';
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@addons/widgets/alert';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import { ClientUserAccess_I, ClientUserAccess_S } from '@@addons/interfaces/clients/users/access';
import { GET_ClientUserAccess } from '@@addons/network/clients/users/access';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { ClientPageAccess_I } from '@@addons/interfaces/clients/page_access';
import { Button } from '@material/mwc-button';
import { GET_AttendanceScheduleNow } from '@@addons/network/attendance/setup/schedule/from_date/now';
import { GET_AttendanceScheduleToday } from '@@addons/network/attendance/setup/schedule/from_date/today';
import { GET_AttendanceScheduleFromDate } from '@@addons/network/attendance/setup/schedule/from_date/date';
import { GET_AttendanceScheduleUpcoming } from '@@addons/network/attendance/setup/schedule/from_date/upcoming';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import '@@addons/widgets/form/new/switch';
import { DayOfWeek_I } from '@@addons/interfaces/attendance/day_of_week';
import { MeetingEventScheduleDate_I } from '@@addons/interfaces/attendance/meeting_event/dates';
import { MeetingEventScheduleDay_I } from '@@addons/interfaces/attendance/meeting_event/day';
import { GET_DayOfWeek } from '@@addons/network/attendance/day_of_week';
import { GET_AttendanceScheduleDate } from '@@addons/network/attendance/setup/date';
import { GET_AttendanceScheduleDay } from '@@addons/network/attendance/setup/day';
import { until } from 'lit/directives/until.js';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';


@customElement("pdb-attendance-clocking-meeting-picker")
export class PdbAttendanceClockingClockerMeetingPicker extends LitElement {
  constructor() { super(); }

  @query('#getNowMeetingsBtn')
  private getNowMeetingsBtn: Button;

  @query('#getAllMeetingsBtn')
  private getAllMeetingsBtn: Button;

  @query('#getTodayMeetingsBtn')
  private getTodayMeetingsBtn: Button;

  @query('#getUpcomingMeetingsBtn')
  private getUpcomingMeetingsBtn: Button;

  @query('#getDateMeetingsBtn')
  private getDateMeetingsBtn: Button;

  private _todayDate(date: string = null): string {
    // console.log({date});
    const _birthDate = (date === null) ? new Date() : new Date(date);
    // console.log({_birthDate});
    const __TO_DATE = _birthDate.toLocaleDateString('en-US', {
      day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
      // @ts-ignore
    }).split('/');
    // console.log({__TO_DATE});
    return [__TO_DATE[2], __TO_DATE[0], __TO_DATE[1]].join('-');
  }

  @property({ type: String })
  private todayDate?: string = this._todayDate();

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: Number })
  private loggedUserId?: number = 0;

  @property({ type: Number })
  private formId: 1 | 2 | 3 | 4 | 5 = 1;

  @property({ type: Boolean })
  private allowFetch: boolean = true;

  @property({ type: Boolean })
  private recurring: boolean = false;

  @property({ type: String })
  public openContentBaseUrl: string = "/clocking/clocker?meeting-event-id=";

  @property({ type: String })
  private openMeetingEventBaseUrl: string = "/settings/schedule?meeting-event-id=";

  @property({ type: Array })
  private _pageAccesses: ClientPageAccess_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  private get _meetingEventSchedulesDefault(): NetworkCallPaginResponse_I<MeetingEventSchedule_I> {
    const data: Array<MeetingEventSchedule_I> = [];
    return { count: 0, next: "", previous: "", results: data }
  }

  private __meetingEventSchedules: NetworkCallPaginResponse_I<MeetingEventSchedule_I> = null;

  public set _meetingEventSchedules(value: NetworkCallPaginResponse_I<MeetingEventSchedule_I>) {
    this.__meetingEventSchedules = value;
    this.requestUpdate();
  }

  public get _meetingEventSchedules(): NetworkCallPaginResponse_I<MeetingEventSchedule_I> {
    return this.__meetingEventSchedules;
  }

  private __scheduleDays: Array<MeetingEventScheduleDay_I> = null;

  public set _scheduleDays(value: Array<MeetingEventScheduleDay_I>) {
    this.__scheduleDays = value;
    this.requestUpdate();
  }

  public get _scheduleDays(): Array<MeetingEventScheduleDay_I> {
    return this.__scheduleDays;
  }

  private __scheduleDates: NetworkCallPaginResponse_I<MeetingEventScheduleDate_I> = null;

  public set _scheduleDates(value: NetworkCallPaginResponse_I<MeetingEventScheduleDate_I>) {
    this.__scheduleDates = value;
    this.requestUpdate();
  }

  public get _scheduleDates(): NetworkCallPaginResponse_I<MeetingEventScheduleDate_I> {
    return this.__scheduleDates;
  }

  async connectedCallback() {
    super.connectedCallback();

    this.getMeetingEventId();

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    await this.getLoggedUserAccess();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `;
  }

  private displayNowMeetingsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.allowFetch = true;
    this._meetingEventSchedules = null;
  }

  private displayTodayMeetingsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.allowFetch = true;
    this._meetingEventSchedules = null;
  }

  private displayUpcomingMeetingsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 3;
    this.allowFetch = true;
    this._meetingEventSchedules = null;
  }

  private displayDateMeetingsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 4;
    this.allowFetch = true;
    this._meetingEventSchedules = null;
  }

  private displayAllMeetingsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 5;
    this.allowFetch = true;
    this._meetingEventSchedules = null;
  }

  private displayDateMeetingsFilterBtn(e: any) {
    e.preventDefault();
    document.querySelectorAll('[id="filter_date"]').forEach((input) => {
      // @ts-ignore
      this.todayDate = this._todayDate(input.value);
    });
    this.allowFetch = true;
    this._meetingEventSchedules = null;
  }

  private recurringSwitchAction() {
    const _this = this; 
    document.querySelectorAll('[name="recurringSwitchAction"]').forEach((_switch) => {
      _switch.addEventListener("click", (evt) => {
        // @ts-ignore 
        _this.recurring = _switch.isSelected;
        // @ts-ignore
        // console.log({ "_switch.isSelected": _switch.isSelected });
        if (_this.formId === 1) {
          _this.getNowMeetingsBtn.click();
        } else if (_this.formId === 2) {
          _this.getTodayMeetingsBtn.click();
        } else if (_this.formId === 3) {
          _this.getUpcomingMeetingsBtn.click();
        } else if (_this.formId === 4) {
          _this.getDateMeetingsBtn.click();
        } else {
          _this.getAllMeetingsBtn.click();
        }
      });
    });
  }

  private get getMeetingSection() {
    if (this.formId === 1) {
      return html`
        ${this.nowSectionData}
      `;
    } else if (this.formId === 2) {
      return html`
        ${this.todaySectionData}
      `;
    } else if (this.formId === 3) {
      return html`
        ${this.upcomingSectionData}
      `;
    } else if (this.formId === 4) {
      return html`
        ${this.dateSectionData}
      `;
    } else {
      // console.log({ "this.allMeetingsSectionData": this.allMeetingsSectionData });
      return html`
        ${this.allMeetingsSectionData}
      `;
    }
  }

  private get notFound() {
    const header = html`<h4 class="text-white">Empty</h4>`;
    const content = html`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;
    return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
  }

  private get nowSectionData() {
    if (this.allowFetch) {
      this.getAttendanceScheduleNow();
    }

    if (this._meetingEventSchedules === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._meetingEventSchedules === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;
    }

    const DATA = this._meetingEventSchedules.results;

    if (!Array.isArray(DATA) || DATA.length < 1) {
      return this.notFound;
    }

    return html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(DATA) ? DATA.map(meeting => this.processSectionRow(meeting)) : nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private get upcomingSectionData() {
    if (this.allowFetch) {
      this.getAttendanceScheduleUpcoming();
    }

    if (this._meetingEventSchedules === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._meetingEventSchedules === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;
    }

    const DATA = this._meetingEventSchedules.results;

    if (!Array.isArray(DATA) || DATA.length < 1) {
      return this.notFound;
    }

    return html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(DATA) ? DATA.map(meeting => this.processSectionRow(meeting)) : nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private get todaySectionData() {
    if (this.allowFetch) {
      this.getAttendanceScheduleToday();
    }

    if (this._meetingEventSchedules === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._meetingEventSchedules === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;
    }

    const DATA = this._meetingEventSchedules.results;

    if (!Array.isArray(DATA) || DATA.length < 1) {
      return this.notFound;
    }

    return html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(DATA) ? DATA.map(meeting => this.processSectionRow(meeting)) : nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private get dateSectionData() {
    if (this.allowFetch) {
      this.getAttendanceScheduleFromDate();
    }

    const dateSelector = html`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;

    if (this._meetingEventSchedules === null) {
      return html`
        ${dateSelector}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._meetingEventSchedules === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;
    }

    const DATA = this._meetingEventSchedules.results;

    if (!Array.isArray(DATA) || DATA.length < 1) {
      return html`${dateSelector}${this.notFound}`;
    }

    return html`
      ${dateSelector}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(DATA) ? DATA.map(meeting => this.processSectionRow(meeting)) : nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private get allMeetingsSectionData() {
    if (this.allowFetch) {
      this.getAttendanceAllSchedules();
    }

    if (this._meetingEventSchedules === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._meetingEventSchedules === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;
    }

    const DATA = this._meetingEventSchedules.results;

    return html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(DATA) ? DATA.map(meeting => this.processSectionRow(meeting)) : nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private getTime(time: string) {
    let today = new Date();
    const newTime = time.split(':');
    if (newTime[0] !== undefined ) {
      today.setHours(Number(newTime[0]));
    }
    if (newTime[1] !== undefined ) {
      today.setMinutes(Number(newTime[1]));
    }
    if (newTime[2] !== undefined ) {
      today.setSeconds(Number(newTime[2]));
    }
    return today.toLocaleTimeString();
  }

  private processSectionRow(meeting: MeetingEventSchedule_I) {
    const _ID_ = meeting.id;
    const ID = base64Encode(String(_ID_), true);
    // until(this.getDayOfWeek(item.dayId), html`<span>Loading...</span>`)
    
    const startTime = this.getTime(String(meeting.startTime));
    const closeTime = this.getTime(String(meeting.closeTime));
    return html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${ID}" class="capitalize text-blue-700">Open "${meeting.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${startTime} - To: ${closeTime} </p>
            <hr class="my-1"/>
            <small>${meeting.isRecuring ? until(this.getAttendanceScheduleDay(_ID_), html`<span>Loading...</span>`)
              : until(this.getAttendanceScheduleDate(_ID_), html`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${_ID_}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `;

  }

  firstUpdated() {
    this.recurringSwitchAction();
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    // console.log({ userId });
    let _meetingEventId = meetingEventId !== null ? base64Decode(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : Number(_meetingEventId);
    // console.log({ "this.meetingEventId": this.meetingEventId });
  }

  private async getLoggedUserAccess() {
    let userId = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userId = this._userLoginInfo[0].user.id;
      }
    }
    this.loggedUserId = userId;
    const _networkResponse = await GET_ClientUserAccess<ClientUserAccess_I>(null, "?logged_user_this&userId=" + this.loggedUserId);
    if (_networkResponse !== null) {
      if (_networkResponse.response.success) {
        const datas = _networkResponse.response.data;
        if (Array.isArray(datas)) {
          datas.forEach((data: ClientUserAccess_I) => {
            data = ClientUserAccess_S(data);
            if (data.page.id === 14) {
              // "id": 14,
              // "page": "Account Users"
              // this.editAccess = true;
            }
          });
        }
      }
    }
  }

  private async getAttendanceAllSchedules() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(null, "?branchId=" + branchId + "&length=1000000&order__by=-id&isRecuring=" + String(this.recurring));
    // console.log({_networkResponse});
    
    if (_networkResponse === null) {
      this._meetingEventSchedules = undefined;
    } else {
      this._meetingEventSchedules = _networkResponse.paginResponse;
      this.allowFetch = false;
    }
  }

  private async getAttendanceScheduleNow() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_AttendanceScheduleNow<MeetingEventSchedule_I>("?branchId=" + branchId + "&length=1000000&order__by=-id&filter_recuring=" + String(this.recurring));
    if (_networkResponse === null) {
      this._meetingEventSchedules = undefined;
    } else {
      this._meetingEventSchedules = _networkResponse.paginResponse;
      this.allowFetch = false;
    }
  }

  private async getAttendanceScheduleUpcoming() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_AttendanceScheduleUpcoming<MeetingEventSchedule_I>("?branchId=" + branchId + "&length=1000000&order__by=-id&filter_recuring=" + String(this.recurring));
    if (_networkResponse === null) {
      this._meetingEventSchedules = undefined;
    } else {
      this._meetingEventSchedules = _networkResponse.paginResponse;
      this.allowFetch = false;
    }
  }

  private async getAttendanceScheduleToday() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_AttendanceScheduleToday<MeetingEventSchedule_I>("?branchId=" + branchId + "&length=1000000&order__by=-id&filter_recuring=" + String(this.recurring));
    if (_networkResponse === null) {
      this._meetingEventSchedules = undefined;
    } else {
      this._meetingEventSchedules = _networkResponse.paginResponse;
      this.allowFetch = false;
    }
  }

  private async getAttendanceScheduleFromDate() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_AttendanceScheduleFromDate<MeetingEventSchedule_I>(this.todayDate, "?branchId=" + branchId + "&length=1000000&order__by=-id&filter_recuring=" + String(this.recurring));
    if (_networkResponse === null) {
      this._meetingEventSchedules = undefined;
    } else {
      this._meetingEventSchedules = _networkResponse.paginResponse;
      this.allowFetch = false;
    }
  }

  private async getAttendanceScheduleDay(meetingEventId: number) {
    const _networkResponse = await GET_AttendanceScheduleDay<MeetingEventScheduleDay_I>(
      null, "?meetingEventId=" + meetingEventId
    );
    // console.log({ _networkResponse });
    if (_networkResponse !== null) {
      const _scheduleDays = _networkResponse.response.data
      if (Array.isArray(_scheduleDays)) {
        const scheduleDays: Array<MeetingEventScheduleDay_I> = _scheduleDays;
        let __RETURN = scheduleDays.map(scheduleDay => {
          const dayId = Number(scheduleDay.dayId),
            endDate = new Date(scheduleDay.endDate).toLocaleDateString();
          return html`<li class="border p-1">Every ${until(this.getDayOfWeek(dayId), html`<i><small>Getting day of week</small>...</i>`)}, until ${endDate}</li>`;
        });
        return html`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${__RETURN}</ul>
        `;
      }
    }
    return "???";
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

  private async getAttendanceScheduleDate(meetingEventId: number) {
    const _networkResponse = await GET_AttendanceScheduleDate<MeetingEventScheduleDate_I>(
      null, "?meetingEventId=" + meetingEventId + "&length=1000"
    );
    // console.log({ _networkResponse });
    if (_networkResponse !== null) {
      const _scheduleDates = _networkResponse.paginResponse.results
      if (Array.isArray(_scheduleDates)) {
        const scheduleDates: Array<MeetingEventScheduleDate_I> = _scheduleDates;
        let __RETURN = scheduleDates.map(scheduleDate => {
          const date = new Date(scheduleDate.date).toLocaleDateString();
          return html`<li class="border p-1">On ${date}</li>`;
        });
        return html`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${__RETURN}</ul>
        `;
      }
    }
    return "???";
  }

  createRenderRoot() {
    return this;
  }
}
