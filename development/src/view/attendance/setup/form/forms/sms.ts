import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
// import '@material/mwc-select';
import '@material/mwc-textarea';
import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@@addons/widgets/form/new/file-select';
import { MDCDataTable } from '@material/data-table';
import { GET_AttendanceScheduleSMS } from '@@addons/network/attendance/setup/sms';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { DELETE_AttendanceDeleteScheduleSMS } from '@@addons/network/attendance/setup/sms/delete';
import { MeetingEventScheduleSMS_I } from '@@addons/interfaces/attendance/meeting_event/sms';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { GET_ClientUsers } from '@@addons/network/clients/users';
import '@@addons/widgets/form/new/select';
import { CONSTANTS } from '@@addons/constants';
// import { Select } from '@material/mwc-select';
import { POST_AttendanceAddScheduleSMS } from '@@addons/network/attendance/setup/sms/post';
import { PUT_AttendanceEditScheduleSMS } from '@@addons/network/attendance/setup/sms/put';


@customElement("attendance-setup-form-sms")
export class AttendanceSetupFormSMS extends LitElement {
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
  // private _smsUser: ClientUsers_I[] = [];

  private __smsUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _smsUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__smsUser = value;
    this.requestUpdate();
  }

  public get _smsUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__smsUser;
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

  private __scheduleSMSs: NetworkCallPaginResponse_I<MeetingEventScheduleSMS_I> = null;

  public set _scheduleSMSs(value: NetworkCallPaginResponse_I<MeetingEventScheduleSMS_I>) {
    this.__scheduleSMSs = value;
    this.requestUpdate();
  }

  public get _scheduleSMSs(): NetworkCallPaginResponse_I<MeetingEventScheduleSMS_I> {
    return this.__scheduleSMSs;
  }

  // @property({ type: Object })
  // private _scheduleSMSs: NetworkCallPaginResponse_I<MeetingEventScheduleSMS_I> = null;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-smsField="all"]')
  private showSMSFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    // await this.getSMSUsers();  

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleSMS();
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
      return html`${this.scheduleSMS}`;
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

  private get scheduleSMS() {
    // console.log({ "this._scheduleSMSs": this._scheduleSMSs });

    if (this._scheduleSMSs === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleSMSs === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SMS</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      return html`
        ${this.form}
      `;
    }
  }

  private get getMeetingAttendanceSMSs() {
    return html`
      ${this._scheduleSMSs.results.map((item, i) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${CONSTANTS.URLS.FILE_BUCKET_BASE_URL}files${item.id}" target="_blank">Open File ${i + 1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSMS}"></mwc-icon-button>
            </td>
          </tr>
        `;
      })}
    `;
  }

  private get form() {
    let scheduleSMS: MeetingEventScheduleSMS_I = null;
    if (this._scheduleSMSs.count > 0) {
      scheduleSMS = this._scheduleSMSs.results[0]
    } else {
      scheduleSMS = {};
    }
    
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled SMS</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled SMS!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-sms">
                <div class="p-0 m-0" show-smsField="all">
                  ${this.smsFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      ${scheduleSMS.id === undefined ? "": html`<mwc-button class="mr-2 danger" label="Delete " icon="delete_forever" 
                        delete-this-item="${scheduleSMS.id}" raised class="button" @click="${this.deleteQuestionnaireMeetingAttendanceSMS}"></mwc-button>`}
                      <mwc-button label="${scheduleSMS.id === undefined? "Add": "Edit"} SMS" raised class="button" @click="${this.submitForm}">
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

  private get smsField() {
    // console.log({ "this._scheduleSMSs": this._scheduleSMSs })
    let scheduleSMS: MeetingEventScheduleSMS_I = null;
    if (this._scheduleSMSs.count > 0) {
      scheduleSMS = this._scheduleSMSs.results[0]
    } else {
      scheduleSMS = {};
    }
    // console.log({ "scheduleSMS": scheduleSMS })
    const alertDate = scheduleSMS.alertDate === undefined? "": scheduleSMS.alertDate.join(", ");

    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Event Message</h4>
            <mwc-textarea id="eventMessage" name="eventMessage" label="Enter Event Message" value="${scheduleSMS.eventMessage}" outlined required>
            </mwc-textarea>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Alert Time</h4>
            <mwc-textfield type="time" id="alertTime" name="alertTime" label="Enter Alert Time" value="${String(scheduleSMS.alertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Alert Date <span class="text-xs italic font-serif text-yellow-600">i.e (YYYY-MM-DD) - [eg. 2022-09-12, 2022-10-12]</span></h4>
            <mwc-textarea id="alertDate" name="alertDate" label="Enter Alert Date(s) Separated by commas(,)" value="${alertDate}" outlined required>
            </mwc-textarea>
            <!-- <mwc-textfield type="date" id="alertDate" name="alertDate" label="Enter Alert Date" outlined required>
            </mwc-textfield> -->
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Notify Parent</h4>
            <switch-input name="notifyParent" class="w-full" id="notifyParent" label="Notify Parent" .selected="${scheduleSMS.notifyParent}" outlined required>
            </switch-input>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Notify Member</h4>
            <switch-input name="notifyMember" class="w-full" id="notifyMember" label="Notify Member" .selected="${scheduleSMS.notifyMember}" outlined required>
            </switch-input>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Attendee Alert Time</h4>
            <mwc-textfield type="time" id="attendeeAlertTime" name="attendeeAlertTime" label="Enter Attendee Alert Time" value="${String(scheduleSMS.attendeeAlertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Absentee Alert Time</h4>
            <mwc-textfield type="time" id="absenteeAlertTime" name="absenteeAlertTime" label="Enter Absentee Alert Time" value="${String(scheduleSMS.absenteeAlertTime)}" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Absentee Alert Message</h4>
            <mwc-textarea id="absenteeAlertMessage" name="absenteeAlertMessage" label="Enter Absentee Alert Message" value="${scheduleSMS.absenteeAlertMessage}" outlined required>
            </mwc-textarea>
          </div>
          <div class="col-md-6 col-lg-6 my-4">
            <h4 class="font-semibold my-2">Enter Date</h4>
            <mwc-textfield type="date" id="date" name="date" label="Enter Date" value="${String(scheduleSMS.date)}" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  private smsFieldDefault(number: number) {
    return html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.smsField}
        smsField-id="${number}" no_delete></multiple-widgets>
    `;
  }

  private addSMSField() {    
    const count = this.showSMSFieldAllSelector.children.length,
      // @ts-ignore
      lastIndex = count === 0 ? -1 : Number(this.showSMSFieldAllSelector.children[count - 1].getAttribute('smsField-id'));
      // console.log({lastIndex});
        
    const newIndex = lastIndex + 1,
      question = document.createElement('multiple-widgets');
      question.setAttribute('class', "col-md-12 col-lg-12 mb-3");
      question.setAttribute('smsField-id', String(newIndex));
    // question.setAttribute('widget', this.smsField);
    this.showSMSFieldAllSelector.append(question);
    const elements = this.showSMSFieldAllSelector.querySelectorAll('multiple-widgets[smsField-id="'+newIndex+'"]')
    // console.log({ elements })
    const newElem = this.smsField.strings.join('');
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
    if (this._scheduleSMSs.count > 0) {
      await PUT_AttendanceEditScheduleSMS(this._scheduleSMSs.results[0].id);
    } else {
      await POST_AttendanceAddScheduleSMS();
    }
  }

  async deleteQuestionnaireMeetingAttendanceSMS(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_AttendanceDeleteScheduleSMS(meetingEventId);
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

  private async getAttendanceScheduleSMS() {
    const _networkResponse = await GET_AttendanceScheduleSMS<MeetingEventScheduleSMS_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
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
