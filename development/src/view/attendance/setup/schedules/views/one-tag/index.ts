import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
// import '@material/mwc-dialog';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { GET_MeetingEventLinkTypes } from '@@addons/network/attendance/meeting_event_link-types';
import { MeetingEventLinkType_I } from '@@addons/interfaces/attendance/meeting_event_link-types';
import { MeetingEventLocation_I } from '@@addons/interfaces/attendance/meeting_event_locations';
import { MeetingEventType_I } from '@@addons/interfaces/attendance/meeting_event_types';
import { GET_MeetingEventLocations } from '@@addons/network/attendance/meeting_event_locations';
import { GET_MeetingEventTypes } from '@@addons/network/attendance/meeting_event_types';
import { until } from 'lit/directives/until.js';
import { getTime } from '@@addons/functions/date_time/time';
import { CONSTANTS } from '@@addons/constants';
import { DELETE_MeetingEvent } from '@@addons/network/attendance/setup/schedule/delete';
import { DELETE_MeetingEventAgendaFile } from '@@addons/network/attendance/setup/schedule/delete_agenda_file';
import './sms';
import './day';
import './date';
import './group';
import './admin';
import './break';
import './member';
import './subgroup';
import './location';
import './attachment';
import { GET_MeetingEventMemberTypes } from '@@addons/network/attendance/meeting_event_member_types';
import { MeetingEventMemberType_I } from '@@addons/interfaces/attendance/meeting_event_member_types';


@customElement("attendance-setup-view-one-schedule")
export class AttendanceSetupViewOneSchedule extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  public set _schedule(value: NetworkCallResponse_I<MeetingEventSchedule_I>) {
    this.__schedule = value;
    this.requestUpdate();
  }

  public get _schedule(): NetworkCallResponse_I<MeetingEventSchedule_I> {
    return this.__schedule;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceSchedule();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    
    if (this._schedule === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._schedule === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;
    }
    return html`${this.schedule}`;
  }

  private get schedule() {
    // @ts-ignore
    const DATA: MeetingEventSchedule_I = this._schedule.data;
    return html`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-4"
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <mwc-icon-button class="ml-4 danger -mt-2 mb-2" icon="delete_forever" delete-this-item="${this.meetingEventId}"
        @click="${this.deleteMeetingEvent}"></mwc-icon-button>
      ${this.table}
      <div class="row">
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-admin CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-admin>
        </div>
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-attachment CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-attachment>
        </div>
        ${DATA.hasBreakTime? html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-break CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-break>
          </div>`: html``}
        ${DATA.isRecuring? html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-day CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-day>
          </div>`: html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-date CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-date>
          </div>`}
        ${DATA.memberType === 1? html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-member CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-member>
          </div>`: html``}
        ${DATA.memberType === 2? html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-group CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-group>
          </div>`: html``}
        ${DATA.memberType === 3? html`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-subgroup CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-subgroup>
          </div>`: html``}
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-location CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-location>
        </div>
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-sms CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-sms>
        </div>
      </div>
    `;
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
                      <b>Schedule Field(s)</b>
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
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  private get tableBody() {
    const DATA = this._schedule.data;
    if (!Array.isArray(DATA)) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Name
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.name}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${until(this.getType(DATA.type), html`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Member Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${until(this.getMemberType(DATA.memberType), html`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Branch
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.branchId.name}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Member Category
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.memberCategoryId.category}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Span <span class="text-xs text-gray-700">How long the meeting/ event will last (default is 1 day)</span>
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.meetingSpan} day${DATA.meetingSpan>1? "s": ""} 
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Start Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${getTime(DATA.startTime).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Close Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${getTime(DATA.closeTime).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Lateness Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${getTime(DATA.latenessTime).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Is Recuring
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.isRecuring}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Has Break Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.hasBreakTime}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Virtual Meeting Link
          </th>
          <td class="mdc-data-table__cell" scope="row">
            <a href="${DATA.virtualMeetingLink}">${DATA.virtualMeetingLink}</a>
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Virtual Meeting Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${until(this.getMeetingEventLinkType(DATA.virtualMeetingType), html`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Location
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${until(this.getMeetingEventLocation(DATA.meetingLocation), html`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Expected Monthly Attendance
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.expectedMonthlyAttendance}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Active Monthly Attendance
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.activeMonthlyAttendance}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Agenda
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${DATA.agenda}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Agenda File
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(DATA.agendaFile.length === 0) ? '-' :
              html`<a href="${CONSTANTS.URLS.FILE_BUCKET_BASE_URL}files/${DATA.agendaFile}" target="_blank">Open File</a>
              <mwc-icon-button class="ml-4 danger" icon="delete_forever" delete-this-item="${this.meetingEventId}"
                @click="${this.deleteMeetingEventAgendaFile}"></mwc-icon-button>`}
          </td>
        </tr>
      `;
    };
  }

  firstUpdated() {}

  private async getAttendanceSchedule() {
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(this.meetingEventId);
    if (_networkResponse === null) {
      this._schedule = undefined;
    } else {
      this._schedule = _networkResponse.response;
    }
  }

  private async getType(id: number) {
    const _networkResponse = await GET_MeetingEventTypes<MeetingEventType_I>(id);

    if (_networkResponse === null) {
      return "**NOT FOUND**";
    } else {      
      if (_networkResponse.response.success && 'name' in _networkResponse.response.data) {
        // console.log({ "_networkResponse.response": _networkResponse.response })
        
        const type: MeetingEventType_I = _networkResponse.response.data;
        return `${type.name}`;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  private async getMemberType(id: number) {
    const _networkResponse = await GET_MeetingEventMemberTypes<MeetingEventMemberType_I>(id);

    if (_networkResponse === null) {
      return "**NOT FOUND**";
    } else {      
      if (_networkResponse.response.success && 'name' in _networkResponse.response.data) {
        // console.log({ "_networkResponse.response": _networkResponse.response })
        
        const type: MeetingEventMemberType_I = _networkResponse.response.data;
        return `${type.name}`;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  private async getMeetingEventLinkType(id: number) {
    const _networkResponse = await GET_MeetingEventLinkTypes<MeetingEventLinkType_I>(id);
    if (_networkResponse === null) {
      return "**NOT FOUND**";
    } else {      
      if (_networkResponse.response.success && 'name' in _networkResponse.response.data) {
        // console.log({ "_networkResponse.response": _networkResponse.response })
        
        const type: MeetingEventType_I = _networkResponse.response.data;
        return `${type.name}`;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  private async getMeetingEventLocation(id: number) {
    const _networkResponse = await GET_MeetingEventLocations<MeetingEventLocation_I>(id);
    if (_networkResponse === null) {
      return "**NOT FOUND**";
    } else {      
      if (_networkResponse.response.success && 'name' in _networkResponse.response.data) {
        // console.log({ "_networkResponse.response": _networkResponse.response })
        
        const type: MeetingEventType_I = _networkResponse.response.data;
        return `${type.name}`;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  async deleteMeetingEvent(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_MeetingEvent(meetingEventId);
  }

  async deleteMeetingEventAgendaFile(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_MeetingEventAgendaFile(meetingEventId);
  }

  createRenderRoot() {
    return this;
  }
}
