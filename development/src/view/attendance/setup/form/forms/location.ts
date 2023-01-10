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
import '@@addons/widgets/form/new/file-select';
import { MDCDataTable } from '@material/data-table';
import { GET_AttendanceScheduleLocation } from '@@addons/network/attendance/setup/location';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
// import { POST_AttendanceAddScheduleLocationMultiple } from '@@addons/network/attendance/setup/location/post_multiple';
// import { PUT_AttendanceUpdateScheduleLocationMultiple } from '@@addons/network/attendance/setup/location/put_multiple';
import { DELETE_AttendanceDeleteScheduleLocation } from '@@addons/network/attendance/setup/location/delete';
import { MeetingEventScheduleLocation_I } from '@@addons/interfaces/attendance/meeting_event/location';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { GET_ClientUsers } from '@@addons/network/clients/users';
import '@@addons/widgets/form/new/select';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { QueryOptions } from 'select2';
// import { Select } from '@material/mwc-select';
import { POST_AttendanceAddScheduleLocation } from '@@addons/network/attendance/setup/location/post';
import { getUserLoginInfoCookie } from '@@addons/functions/login';


@customElement("attendance-setup-form-location")
export class AttendanceSetupFormLocation extends LitElement {
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
  // private _locationUser: ClientUsers_I[] = [];

  private __locationUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _locationUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__locationUser = value;
    this.requestUpdate();
  }

  public get _locationUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__locationUser;
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

  private __scheduleLocations: NetworkCallPaginResponse_I<MeetingEventScheduleLocation_I> = null;

  public set _scheduleLocations(value: NetworkCallPaginResponse_I<MeetingEventScheduleLocation_I>) {
    this.__scheduleLocations = value;
    this.requestUpdate();
  }

  public get _scheduleLocations(): NetworkCallPaginResponse_I<MeetingEventScheduleLocation_I> {
    return this.__scheduleLocations;
  }

  // @property({ type: Object })
  // private _scheduleLocations: NetworkCallPaginResponse_I<MeetingEventScheduleLocation_I> = null;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-locationField="all"]')
  private showLocationFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    // await this.getLocationUsers();  

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleLocation();
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
      return html`${this.scheduleLocation}`;
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

  private get scheduleLocation() {
    // console.log({ "this._scheduleLocations": this._scheduleLocations });

    if (this._scheduleLocations === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleLocations === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Location</span>: undefined error</h4>
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
    if (this._scheduleLocations.results.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Location">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Latitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
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
                ${this.getMeetingAttendanceLocations}
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

  private get getMeetingAttendanceLocations() {
    return html`
      ${this._scheduleLocations.results.map((item, i) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.latitude}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.longitude}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.radius}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteQuestionnaireMeetingAttendanceLocation}"></mwc-icon-button>
            </td>
          </tr>
        `;
      })}
    `;
  }

  private get form() {
    // <!-- <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addLocationField}">
    // </mwc-icon-button> -->
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  ${this.locationFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Location" raised class="button" @click="${this.submitForm}">
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

  private get locationField() {
    let ajaxHeader: {Authorization?: string} = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    // console.log({ajaxHeader: ajaxHeader});
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Latitude</h4>
            <mwc-textfield name="latitude" type="number" step="0.01" class="w-full" id="latitude" label="Enter Latitude" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Longitude</h4>
            <mwc-textfield name="longitude" type="number" step="0.01" class="w-full" id="longitude" label="Enter Longitude" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Radius</h4>
            <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius" label="Enter Radius" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  private locationFieldDefault(number: number) {
    return html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.locationField}
        locationField-id="${number}" no_delete></multiple-widgets>
    `;
  }

  private addLocationField() {    
    const count = this.showLocationFieldAllSelector.children.length,
      // @ts-ignore
      lastIndex = count === 0 ? -1 : Number(this.showLocationFieldAllSelector.children[count - 1].getAttribute('locationField-id'));
      // console.log({lastIndex});
        
    const newIndex = lastIndex + 1,
      question = document.createElement('multiple-widgets');
      question.setAttribute('class', "col-md-12 col-lg-12 mb-3");
      question.setAttribute('locationField-id', String(newIndex));
    // question.setAttribute('widget', this.locationField);
    this.showLocationFieldAllSelector.append(question);
    const elements = this.showLocationFieldAllSelector.querySelectorAll('multiple-widgets[locationField-id="'+newIndex+'"]')
    // console.log({ elements })
    const newElem = this.locationField.strings.join('');
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

  private async getLocationUsers() {
    const _networkResponse = await GET_ClientUsers<ClientUsers_I>();
    let __locationUsers: ClientUsers_I[] = [];

    if (_networkResponse === null) {
      this._locationUser = undefined;
    } else {
      this._locationUser = _networkResponse.paginResponse;
    }
  }

  private async getLocationUser(ID: number) {
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
    // if (this._scheduleLocations.count > 0) {
    //   await PUT_AttendanceUpdateScheduleLocationMultiple(this.meetingEventId);
    // } else {
    //   await POST_AttendanceAddScheduleLocationMultiple();
    // }
    await POST_AttendanceAddScheduleLocation();
  }

  async deleteQuestionnaireMeetingAttendanceLocation(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_AttendanceDeleteScheduleLocation(meetingEventId);
  }

  private processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="location"]');
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

  private async getAttendanceScheduleLocation() {
    const _networkResponse = await GET_AttendanceScheduleLocation<MeetingEventScheduleLocation_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleLocations = undefined;
    } else {
      this._scheduleLocations = _networkResponse.paginResponse;
    }
  }

  createRenderRoot() {
    return this;
  }
}
