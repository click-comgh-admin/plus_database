import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-textfield';
import '@material/mwc-select';
import '@material/mwc-textarea';
import '@material/mwc-button';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/form/new/file-select';
import { GET_MeetingEventTypes } from '@@addons/network/attendance/meeting_event_types';
import { MeetingEventType_I } from '@@addons/interfaces/attendance/meeting_event_types';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { GET_MeetingEventLocations } from '@@addons/network/attendance/meeting_event_locations';
import { GET_MeetingEventLinkTypes } from '@@addons/network/attendance/meeting_event_link-types';
import { MeetingEventLocation_I } from '@@addons/interfaces/attendance/meeting_event_locations';
import { MeetingEventLinkType_I } from '@@addons/interfaces/attendance/meeting_event_link-types';
import { POST_AttendanceAddSchedule } from '@@addons/network/attendance/setup/schedule/post';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { PUT_AttendanceEditSchedule } from '@@addons/network/attendance/setup/schedule/put';
import { GET_MeetingEventMemberTypes } from '@@addons/network/attendance/meeting_event_member_types';
import { MeetingEventMemberType_I } from '@@addons/interfaces/attendance/meeting_event_member_types';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';


@customElement("attendance-setup-form-schedule")
export class AttendanceSetupFormSchedule extends LitElement {
  constructor() { super(); }

  private __schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  public set _schedule(value: NetworkCallResponse_I<MeetingEventSchedule_I>) {
    this.__schedule = value;
    this.requestUpdate();
  }

  public get _schedule(): NetworkCallResponse_I<MeetingEventSchedule_I> {
    return this.__schedule;
  }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  @property({ type: Boolean })
  public isEdit: boolean = false;

  @property({ type: Array })
  private _type: MeetingEventType_I[] = [];

  @property({ type: Array })
  private _memberType: MeetingEventMemberType_I[] = [];

  @property({ type: Number })
  private selectedBranchId: number = 0;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  private _meetingEventLinkTypes: MeetingEventLinkType_I[] = [];

  @property({ type: Array })
  private _meetingEventLocations: MeetingEventLocation_I[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  async connectedCallback() {
    super.connectedCallback();
    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    await this.getTypes();
    await this.getBranches();
    await this.getMemberTypes();
    await this.getMemberCategories();
    await this.getAttendanceSchedule();
    await this.getMeetingEventLinkTypes();
    await this.getMeetingEventLocations();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    let schedule: MeetingEventSchedule_I = null;
    // console.log({"this._schedule": this._schedule})
    if (this._schedule !== null) {
      if (this._schedule.data !== undefined) {
        if (Array.isArray(this._schedule.data)) {
          schedule = this._schedule.data.length > 0 ? this._schedule.data[0] : {};
        } else {
          schedule = this._schedule.data;
        }
      } else {
        schedule = {};
      }
    } else {
      schedule = {};
    }
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }

    const scheduleMeetingLocation = schedule.meetingLocation === undefined? 0: schedule.meetingLocation;
    // console.log({schedule});
    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Schedule</h1>
                  <h3 class="h3">Create New Meeting/ Event Schedule!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="add-schedule" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Schedule Type</h4>
                    ${(schedule.type === undefined) ? html`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((value) => {
                          // console.log({ "schedule.type": schedule.type, "value.id": value.id });
                          return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                        })}
                      </mwc-select>
                    `: html`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((value) => {
                          // console.log({ "schedule.type": schedule.type, "value.id": value.id });
                          if (schedule.type === value.id) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                          } else {
                            return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                          }
                        })}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Type</h4>
                    ${(schedule.type === undefined) ? html`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((value) => {
                          // console.log({ "schedule.type": schedule.type, "value.id": value.id });
                          return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                        })}
                      </mwc-select>
                    `: html`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((value) => {
                          // console.log({ "schedule.type": schedule.type, "value.id": value.id });
                          if (schedule.type === value.id) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                          } else {
                            return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                          }
                        })}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Meeting/ Event</h4> 
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="${schedule.id === undefined ? "": schedule.name}" label="Enter Meeting/ Event" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${userBranch === 1 ? html`
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((value) => {
                          if (schedule.branchId === undefined) {
                            return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                          } else {
                            if (schedule.branchId.id === value.id) {
                              return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                            } else {
                              return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                            }
                          }
                        })}
                      `: html`
                        ${this._branches.map((value) => {
                          if (value.id === userBranch) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                          }
                        })}
                      `}
                    </mwc-select>
                    <!-- ${(schedule.branchId === undefined) ? html`
                      <mwc-select name="branchId" class="w-full" id="branchId" label="Select Branch" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((value) => {
                          // console.log({ "schedule.type": schedule.type, "value.id": value.id });
                          return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                        })}
                      </mwc-select>
                    `: html`
                      <mwc-select name="branchId" class="w-full" id="branchId" label="Select Branch" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((value) => {
                          // console.log({ "schedule.branchId": schedule.branchId, "value.id": value.id });
                          if (schedule.branchId.id === value.id) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                          } else {
                            return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                          }
                        })}
                      </mwc-select>
                    `} -->
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Memeber Category</h4>
                    ${(schedule.memberCategoryId === undefined) ? html`
                      <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Memeber Category" outlined required>
                        <mwc-list-item value="0">Select Memeber Category</mwc-list-item>
                        ${this._memberCategories.map((value) => {
                          // console.log({ "schedule.type": schedule.type, "value.id": value.id });
                          return html`<mwc-list-item value="${value.id}">${value.category}</mwc-list-item>`;
                        })}
                      </mwc-select>
                    `: html`
                      <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Memeber Category" outlined required>
                        <mwc-list-item value="0">Select Memeber Category</mwc-list-item>
                        ${this._memberCategories.map((value) => {
                          if (schedule.memberCategoryId.id === value.id) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.category}</mwc-list-item>`;
                          } else {
                            return html`<mwc-list-item value="${value.id}">${value.category}</mwc-list-item>`;
                          }
                        })}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Span (in days) <span class="text-xs text-akwaaba-orange-light">How long the meeting/ event will last (default is 1 day)</span></h4> 
                    <mwc-textfield name="meetingSpan" type="number" min="1" class="w-full" id="meetingSpan" value="${schedule.id === undefined ? "1": String(schedule.meetingSpan)}" label="Select Meeting Span" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Start Time</h4> 
                    <mwc-textfield name="startTime" type="time" class="w-full" id="startTime" value="${schedule.id === undefined ? "": String(schedule.startTime)}" label="Select Start Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Close Time</h4> 
                    <mwc-textfield name="closeTime" type="time" class="w-full" id="closeTime" value="${schedule.id === undefined ? "": String(schedule.closeTime)}" label="Select Close Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Lateness Time</h4> 
                    <mwc-textfield name="latenessTime" type="time" class="w-full" id="latenessTime" value="${schedule.id === undefined ? "": String(schedule.latenessTime)}" label="Select Lateness Time" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Is It Recuring?</h4> 
                    <switch-input name="isRecuring" class="w-full" id="isRecuring" .selected="${schedule.id === undefined ? false: schedule.isRecuring}" label="Is It Recuring?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Break-Time?</h4> 
                    <switch-input name="hasBreakTime" class="w-full" id="hasBreakTime" .selected="${schedule.id === undefined ? false: schedule.hasBreakTime}" label="Any Break-Time?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Duty/ Work Reporting?</h4> 
                    <switch-input name="hasDuty" class="w-full" id="hasDuty" .selected="${schedule.id === undefined ? false: schedule.hasDuty}" label="Any Duty/ Work Reporting?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Overtime?</h4> 
                    <switch-input name="hasOvertime" class="w-full" id="hasOvertime" .selected="${schedule.id === undefined ? false: schedule.hasOvertime}" label="Any Overtime?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Location</h4>
                    ${(schedule.meetingLocation === undefined) ? html`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((value) => {
                          // console.log({ "schedule.type": schedule.type, "value.id": value.id });
                          return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                        })}
                      </mwc-select>
                    `: html`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((value) => {
                          // console.log({ "schedule.meetingLocation": schedule.meetingLocation, "value.id": value.id });
                          if (schedule.meetingLocation === value.id) {
                            return html`<mwc-list-item value="${value.id}" selected activated aria-selected="true">${value.name}</mwc-list-item>`;
                          } else {
                            return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                          }
                        })}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Virtual Meeting Link</h4> 
                    <mwc-textfield name="virtualMeetingLink" type="url" class="w-full" id="virtualMeetingLink" value="${schedule.virtualMeetingLink}" label="Enter Virtual Meeting Link" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Virtual Meeting Type</h4>
                    <mwc-select name="virtualMeetingType" class="w-full" id="virtualMeetingType" label="Select Virtual Meeting Type" outlined>
                      <mwc-list-item value="0">Select Virtual Meeting Type</mwc-list-item>
                      ${this._meetingEventLinkTypes.map((value) => {
                        // console.log({ "this._meetingEventLinkTypes-val": value });
                        if (schedule.virtualMeetingType === value.id) {
                          return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                        } else {
                          return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                        }
                      })}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Expected Monthly Attendance</h4> 
                    <mwc-textfield name="expectedMonthlyAttendance" type="number" class="w-full" id="expectedMonthlyAttendance"
                      value="${schedule.id === undefined ? 0: schedule.expectedMonthlyAttendance}" label="Enter Expected Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Active Monthly Attendance</h4>
                    <mwc-textfield name="activeMonthlyAttendance" type="number" class="w-full" id="activeMonthlyAttendance"
                      value="${schedule.id === undefined? 0: schedule.activeMonthlyAttendance }" label="Enter Active Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="${schedule.id === undefined ? "": schedule.agenda}" outlined required>
                    </mwc-textarea>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Attach Agenda File <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="agendaFile" name="agendaFile" hasLabel label="Add Agenda File"></file-input>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="${(schedule.id === undefined)? "Create": "Update"} Schedule" raised class="button" @click="${this.submitForm}">
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

  firstUpdated() { }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    if ((this._schedule !== undefined) && (this.isEdit === true)) {
      await PUT_AttendanceEditSchedule(this.meetingEventId);
    } else {
      await POST_AttendanceAddSchedule();
    }
  }

  private async getAttendanceSchedule() {
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(this.meetingEventId);
    // console.log({_networkResponse})
    if (_networkResponse === null) {
      this._schedule = undefined;
    } else {
      this._schedule = _networkResponse.response;
    }
  }

  private async getTypes() {
    const _networkResponse = await GET_MeetingEventTypes<MeetingEventType_I>();
    let __types: MeetingEventType_I[] = [];

    if (_networkResponse === null) {
      __types.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: MeetingEventType_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __types = DATA;
      }
    }

    const new_data: Array<MeetingEventType_I> = [];
    new_data.push(...this._type, ...__types);
    this._type = new_data;
  }

  private async getMemberTypes() {
    const _networkResponse = await GET_MeetingEventMemberTypes<MeetingEventMemberType_I>();
    let __memberTypes: MeetingEventType_I[] = [];

    if (_networkResponse === null) {
      __memberTypes.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: MeetingEventType_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __memberTypes = DATA;
      }
    }

    const new_data: Array<MeetingEventMemberType_I> = [];
    new_data.push(...this._memberType, ...__memberTypes);
    this._memberType = new_data;
  }

  private async getMeetingEventLinkTypes() {
    const _networkResponse = await GET_MeetingEventLinkTypes<MeetingEventLinkType_I>();
    let __meetingEventLinkTypes: MeetingEventLinkType_I[] = [];

    if (_networkResponse === null) {
      __meetingEventLinkTypes.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: MeetingEventLinkType_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __meetingEventLinkTypes = DATA;
      }
    }

    const new_data: Array<MeetingEventLinkType_I> = [];
    new_data.push(...this._meetingEventLinkTypes, ...__meetingEventLinkTypes);
    this._meetingEventLinkTypes = new_data;
  }

  private async getMeetingEventLocations() {
    const _networkResponse = await GET_MeetingEventLocations<MeetingEventLocation_I>();
    let __meetingEventLocations: MeetingEventLocation_I[] = [];

    if (_networkResponse === null) {
      __meetingEventLocations.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: MeetingEventLocation_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __meetingEventLocations = DATA;
      }
    }

    const new_data: Array<MeetingEventLocation_I> = [];
    new_data.push(...this._meetingEventLocations, ...__meetingEventLocations);
    this._meetingEventLocations = new_data;
  }

  private async getBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranches_I>();
    let __branches: ClientBranches_I[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: ClientBranches_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __branches = DATA;
      }
    }
    const new_data: Array<ClientBranches_I> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  private async getMemberCategories() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategories_I>();
    let __memberCategories: GroupingsMemberCategories_I[] = [];

    if (_networkResponse === null) {
      __memberCategories.push({ id: 0, category: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsMemberCategories_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __memberCategories = DATA;
      }
    }
    const new_data: Array<GroupingsMemberCategories_I> = [];
    new_data.push(...this._memberCategories, ...__memberCategories);
    this._memberCategories = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
