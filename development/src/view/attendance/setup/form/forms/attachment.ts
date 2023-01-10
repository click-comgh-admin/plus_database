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
import { GET_AttendanceScheduleAttachment } from '@@addons/network/attendance/setup/attachment';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
// import { POST_AttendanceAddScheduleAttachmentMultiple } from '@@addons/network/attendance/setup/attachment/post_multiple';
// import { PUT_AttendanceUpdateScheduleAttachmentMultiple } from '@@addons/network/attendance/setup/attachment/put_multiple';
import { DELETE_AttendanceDeleteScheduleAttachment } from '@@addons/network/attendance/setup/attachment/delete';
import { MeetingEventScheduleAttachment_I } from '@@addons/interfaces/attendance/meeting_event/attachment';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { GET_ClientUsers } from '@@addons/network/clients/users';
import '@@addons/widgets/form/new/select';
import { CONSTANTS } from '@@addons/constants';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { QueryOptions } from 'select2';
// import { Select } from '@material/mwc-select';
import { POST_AttendanceAddScheduleAttachment } from '@@addons/network/attendance/setup/attachment/post';
import { getUserLoginInfoCookie } from '@@addons/functions/login';


@customElement("attendance-setup-form-attachment")
export class AttendanceSetupFormAttachment extends LitElement {
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
  // private _attachmentUser: ClientUsers_I[] = [];

  private __attachmentUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _attachmentUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__attachmentUser = value;
    this.requestUpdate();
  }

  public get _attachmentUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__attachmentUser;
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

  private __scheduleAttachments: NetworkCallPaginResponse_I<MeetingEventScheduleAttachment_I> = null;

  public set _scheduleAttachments(value: NetworkCallPaginResponse_I<MeetingEventScheduleAttachment_I>) {
    this.__scheduleAttachments = value;
    this.requestUpdate();
  }

  public get _scheduleAttachments(): NetworkCallPaginResponse_I<MeetingEventScheduleAttachment_I> {
    return this.__scheduleAttachments;
  }

  // @property({ type: Object })
  // private _scheduleAttachments: NetworkCallPaginResponse_I<MeetingEventScheduleAttachment_I> = null;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-attachmentField="all"]')
  private showAttachmentFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    // await this.getAttachmentUsers();  

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleAttachment();
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
      return html`${this.scheduleAttachment}`;
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

  private get scheduleAttachment() {
    // console.log({ "this._scheduleAttachments": this._scheduleAttachments });

    if (this._scheduleAttachments === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleAttachments === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Attachment</span>: undefined error</h4>
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
    if (this._scheduleAttachments.results.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Attachment">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Attachment
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
                ${this.getMeetingAttendanceAttachments}
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

  private get getMeetingAttendanceAttachments() {
    return html`
      ${this._scheduleAttachments.results.map((item, i) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${CONSTANTS.URLS.FILE_BUCKET_BASE_URL}files${item.attachment}" target="_blank">Open File ${i + 1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAttachment}"></mwc-icon-button>
            </td>
          </tr>
        `;
      })}
    `;
  }

  private get form() {
    // <!-- <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addAttachmentField}">
    // </mwc-icon-button> -->
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Attachment</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Attachment!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-attachment">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Attachment" raised class="button" @click="${this.submitForm}">
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

  private get attachmentField() {
    let ajaxHeader: {Authorization?: string} = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    // console.log({ajaxHeader: ajaxHeader});
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="attachment" name="attachment" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `;
  }

  private attachmentFieldDefault(number: number) {
    return html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.attachmentField}
        attachmentField-id="${number}" no_delete></multiple-widgets>
    `;
  }

  private addAttachmentField() {    
    const count = this.showAttachmentFieldAllSelector.children.length,
      // @ts-ignore
      lastIndex = count === 0 ? -1 : Number(this.showAttachmentFieldAllSelector.children[count - 1].getAttribute('attachmentField-id'));
      // console.log({lastIndex});
        
    const newIndex = lastIndex + 1,
      question = document.createElement('multiple-widgets');
      question.setAttribute('class', "col-md-12 col-lg-12 mb-3");
      question.setAttribute('attachmentField-id', String(newIndex));
    // question.setAttribute('widget', this.attachmentField);
    this.showAttachmentFieldAllSelector.append(question);
    const elements = this.showAttachmentFieldAllSelector.querySelectorAll('multiple-widgets[attachmentField-id="'+newIndex+'"]')
    // console.log({ elements })
    const newElem = this.attachmentField.strings.join('');
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

  private async getAttachmentUsers() {
    const _networkResponse = await GET_ClientUsers<ClientUsers_I>();
    let __attachmentUsers: ClientUsers_I[] = [];

    if (_networkResponse === null) {
      this._attachmentUser = undefined;
    } else {
      this._attachmentUser = _networkResponse.paginResponse;
    }
  }

  private async getAttachmentUser(ID: number) {
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    // if (this._scheduleAttachments.count > 0) {
    //   await PUT_AttendanceUpdateScheduleAttachmentMultiple(this.meetingEventId);
    // } else {
    //   await POST_AttendanceAddScheduleAttachmentMultiple();
    // }
    await POST_AttendanceAddScheduleAttachment();
  }

  async deleteQuestionnaireMeetingAttendanceAttachment(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_AttendanceDeleteScheduleAttachment(meetingEventId);
  }

  private processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="attachment"]');
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

  private async getAttendanceScheduleAttachment() {
    const _networkResponse = await GET_AttendanceScheduleAttachment<MeetingEventScheduleAttachment_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleAttachments = undefined;
    } else {
      this._scheduleAttachments = _networkResponse.paginResponse;
    }
  }

  createRenderRoot() {
    return this;
  }
}
