import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-textarea';
import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
// import '@material/mwc-dialog';
import { MDCDataTable } from '@material/data-table';
import { GET_AttendanceScheduleDate } from '@@addons/network/attendance/setup/date';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { MeetingEventScheduleDate_I } from '@@addons/interfaces/attendance/meeting_event/dates';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { POST_AttendanceAddScheduleDateMultiple } from '@@addons/network/attendance/setup/date/post_multiple';
import { PUT_AttendanceUpdateScheduleDateMultiple } from '@@addons/network/attendance/setup/date/put_multiple';
import { DELETE_AttendanceDeleteScheduleDate } from '@@addons/network/attendance/setup/date/delete';


@customElement("attendance-setup-form-date")
export class AttendanceSetupFormDate extends LitElement {
  constructor() { super(); }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

  @property({ type: Number })
  public CLIENT_ID: number = 0;

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

  private __scheduleDates: NetworkCallPaginResponse_I<MeetingEventScheduleDate_I> = null;

  public set _scheduleDates(value: NetworkCallPaginResponse_I<MeetingEventScheduleDate_I>) {
    this.__scheduleDates = value;
    this.requestUpdate();
  }

  public get _scheduleDates(): NetworkCallPaginResponse_I<MeetingEventScheduleDate_I> {
    return this.__scheduleDates;
  }

  // @property({ type: Object })
  // private _scheduleDates: NetworkCallPaginResponse_I<MeetingEventScheduleDate_I> = null;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-dateField="all"]')
  private showDateFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleDate();
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
      return html`${this.scheduleDate}`;
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

  private get scheduleDate() {
    // console.log({ "this._scheduleDates": this._scheduleDates });

    if (this._scheduleDates === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleDates === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Date</span>: undefined error</h4>
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
    if (this._scheduleDates.results.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Date">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Date
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
                ${this.getMeetingAttendanceDates}
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

  private get getMeetingAttendanceDates() {
    // this.dialog(item)
    return html`
      ${this._scheduleDates.results.map((item) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.date}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteQuestionnaireMeetingAttendanceDate}"></mwc-icon-button>
            </td>
          </tr>
        `;
      })}
    `;
  }

  // private dialog(item: any) {
  //   return html`
  //     <mwc-icon-button open-dialog-btn="${item.id}" class="warning" icon="edit" @click="${this.showDialog}"></mwc-icon-button>
  //     <mwc-dialog open-this-dialog="${item.id}" >
  //       <!-- <p>This dialog can validate user input before closing.</p> -->
  //       <div class="form-container">
  //         <header class="header warning">
  //           <label for="" class="label">
  //             <mwc-icon class="icon">format_strikethrough</mwc-icon>
  //             <h1 class="h1">Edit Meeting/ Event Date</h1>
  //             <h3 class="h3">Make Changes to Meeting/ Event Date!</h3>
  //           </label>
  //         </header>
  //         <form method="post" action="#" class="form" make-general-posts="edit-questionnaire-age-bracket-${item.id}">
  //           <div class="form-input-container">
  //             <mwc-textfield text-area-dialog="${item.id}" name="name" label="New Meeting/ Event Date" value="${item.name}" outlined type="text" required>
  //             </mwc-textfield>
  //           </div>
  //           <div class="form-input-container">
  //             <mwc-button
  //               confirm-this-dialog="${item.id}"
  //               slot="primaryAction">
  //               Update Meeting/ Event Date
  //             </mwc-button>
  //           </div>
  //         </form>
  //       </div>
  //       <mwc-button
  //         slot="secondaryAction"
  //         dialogAction="close">
  //         Cancel
  //       </mwc-button>
  //     </mwc-dialog>
  //   `;
  // }

  // private showDialog(event: { preventDefault: () => void; currentTarget: { getAttribute: (arg0: string) => number; }; }) {
  //   event.preventDefault();

  //   const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
  //   const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
  //   dialog.setAttribute('open', "true");

  //   const textField = this.querySelector('[text-area-dialog="' + dialogId + '"]');
  //   const primaryButton = this.querySelector('[confirm-this-dialog="' + dialogId + '"]');

  //   primaryButton.addEventListener('click', async (e:PointerEvent) => {
  //     // validate, possible asynchronous such as a server response
  //     // console.log({e});
      
  //     // @ts-ignore
  //     const isValid = textField.checkValidity();
  //     if (isValid) {
  //       // await this.submitEditForm(e)
  //       // dialog.removeAttribute('open');
  //       return;
  //     }
  //     // @ts-ignore
  //     textField.reportValidity();
  //   });
  // }

  private get form() {
    return html`
      <div class="form-container">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Date</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Date!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-date">
                <div class="container">
                  <div class="row justify-content-center" show-dateField="all">
                    ${this.dateFieldDefault(1)}
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addDateField}">
                      </mwc-icon-button>
                      <mwc-button label="Set Date" raised class="button" @click="${this.submitForm}">
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

  private get dateField() {
    return html`
      <h4 class="font-semibold my-2">Select Date</h4> 
      <mwc-textfield name="date[]" multiple type="date" class="w-full" id="date"
        label="Select Date" outlined required>
      </mwc-textfield>
    `;
  }

  private dateFieldDefault(number: number) {
    return html`
      <multiple-widgets class="col-md-6 col-lg-4 mb-3" .widget=${this.dateField}
        dateField-id="${number}"></multiple-widgets>
    `;
  }

  private addDateField() {
    const count = this.showDateFieldAllSelector.children.length,
      // @ts-ignore
      lastIndex = count === 0 ? -1 : Number(this.showDateFieldAllSelector.children[count - 1].index),
      newIndex = lastIndex + 1,
      question = document.createElement('multiple-widgets');
      question.setAttribute('class', "col-md-6 col-lg-4 mb-3");
      question.setAttribute('dateField-id', String(newIndex));
      this.showDateFieldAllSelector.append(question);
      const elements = this.showDateFieldAllSelector.querySelectorAll('multiple-widgets[dateField-id="'+newIndex+'"]')
      // console.log({ elements })
      const newElem = this.dateField.strings.join('');
      // console.log({ newElem })
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
    if (this._scheduleDates.count > 0) {
      await PUT_AttendanceUpdateScheduleDateMultiple(this.meetingEventId);
    } else {
      await POST_AttendanceAddScheduleDateMultiple();
    }
  }

  async deleteQuestionnaireMeetingAttendanceDate(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_AttendanceDeleteScheduleDate(meetingEventId);
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

  private async getAttendanceScheduleDate() {
    const _networkResponse = await GET_AttendanceScheduleDate<MeetingEventScheduleDate_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleDates = undefined;
    } else {
      this._scheduleDates = _networkResponse.paginResponse;
    }
  }

  createRenderRoot() {
    return this;
  }
}
