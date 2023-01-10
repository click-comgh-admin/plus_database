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
import { GET_AttendanceScheduleSubGroup } from '@@addons/network/attendance/setup/subgroup';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { DELETE_AttendanceDeleteScheduleSubGroup } from '@@addons/network/attendance/setup/subgroup/delete';
import { MeetingEventScheduleSubGroup_I } from '@@addons/interfaces/attendance/meeting_event/subgroup';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import '@@addons/widgets/form/new/select';
import { POST_AttendanceAddScheduleSubGroup } from '@@addons/network/attendance/setup/subgroup/post';
import { GroupingsSubGroup_I } from '@@addons/interfaces/members/groupings/subgroup';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GroupingsGroup_I } from '@@addons/interfaces/members/groupings/group';


@customElement("attendance-setup-form-subgroup")
export class AttendanceSetupFormSubGroup extends LitElement {
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
  // private _subgroupUser: ClientUsers_I[] = [];

  private __subgroupUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _subgroupUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__subgroupUser = value;
    this.requestUpdate();
  }

  public get _subgroupUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__subgroupUser;
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

  private __scheduleSubGroups: NetworkCallPaginResponse_I<MeetingEventScheduleSubGroup_I> = null;

  public set _scheduleSubGroups(value: NetworkCallPaginResponse_I<MeetingEventScheduleSubGroup_I>) {
    this.__scheduleSubGroups = value;
    this.requestUpdate();
  }

  public get _scheduleSubGroups(): NetworkCallPaginResponse_I<MeetingEventScheduleSubGroup_I> {
    return this.__scheduleSubGroups;
  }

  @property({ type: Array })
  private _groups: GroupingsGroup_I[] = [];

  @property({ type: Array })
  private _subgroups: GroupingsSubGroup_I[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-subgroupField="all"]')
  private showSubGroupFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    // await this.getSubGroupUsers();  

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleSubGroup();
    await this.getSubGroups();
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
      return html`${this.scheduleSubGroup}`;
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

  private get scheduleSubGroup() {
    // console.log({ "this._scheduleSubGroups": this._scheduleSubGroups });

    if (this._scheduleSubGroups === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleSubGroups === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SubGroup</span>: undefined error</h4>
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
    if (this._scheduleSubGroups.results.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting SubGroup">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting SubGroup
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
                ${this.getMeetingAttendanceSubGroups}
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

  private get getMeetingAttendanceSubGroups() {
    return html`
      ${this._scheduleSubGroups.results.map((item, i) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${until(this.getSubGroup(item.subGroupId), html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSubGroup}"></mwc-icon-button>
            </td>
          </tr>
        `;
      })}
    `;
  }

  private get form() {
    // <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addSubGroupField}">
    // </mwc-icon-button>
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled SubGroup</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled SubGroup!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-subgroup">
                <div class="p-0 m-0" show-subgroupField="all">
                  ${this.subgroupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add SubGroup" raised class="button" @click="${this.submitForm}">
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

  private get subgroupField() {
    // console.log({ "this._subgroups": this._subgroups });
    const subgroups__ = this._subgroups.map((value) => {
      return html`<mwc-list-item value="${value.id}">
        ${until(this.getGroup(value.groupId), html`<span>Loading...</span>`)} >> 
        ${value.subgroup}
      </mwc-list-item>`;
    });
    // console.log({ "subgroups__": subgroups__ });
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select SubGroup</h4>
            <mwc-select name="subGroupId" class="w-full" id="subGroupId" label="Select SubGroup" outlined required>
              <mwc-list-item value="">Select SubGroup</mwc-list-item>
              <mwc-list-item value="all">All SubGroups</mwc-list-item>
              ${html`${subgroups__}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `;
  }

  private subgroupFieldDefault(number: number) {
    return html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.subgroupField}
        subgroupField-id="${number}" no_delete></multiple-widgets>
    `;
  }

  private addSubGroupField() {    
    const count = this.showSubGroupFieldAllSelector.children.length,
      // @ts-ignore
      lastIndex = count === 0 ? -1 : Number(this.showSubGroupFieldAllSelector.children[count - 1].getAttribute('subgroupField-id'));
      // console.log({lastIndex});
        
    const newIndex = lastIndex + 1,
      question = document.createElement('multiple-widgets');
      question.setAttribute('class', "col-md-12 col-lg-12 mb-3");
      question.setAttribute('subgroupField-id', String(newIndex));
    // question.setAttribute('widget', this.subgroupField);
    this.showSubGroupFieldAllSelector.append(question);
    const elements = this.showSubGroupFieldAllSelector.querySelectorAll('multiple-widgets[subgroupField-id="'+newIndex+'"]')
    // console.log({ elements })
    const newElem = this.subgroupField.strings.join('');
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
    // if (this._scheduleSubGroups.count > 0) {
    //   await PUT_AttendanceUpdateScheduleSubGroupMultiple(this.meetingEventId);
    // } else {
    //   await POST_AttendanceAddScheduleSubGroupMultiple();
    // }
    // await POST_AttendanceAddScheduleSubGroupMultiple();
    await POST_AttendanceAddScheduleSubGroup();
  }

  async deleteQuestionnaireMeetingAttendanceSubGroup(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_AttendanceDeleteScheduleSubGroup(meetingEventId);
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

  private async getAttendanceScheduleSubGroup() {
    const _networkResponse = await GET_AttendanceScheduleSubGroup<MeetingEventScheduleSubGroup_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleSubGroups = undefined;
    } else {
      this._scheduleSubGroups = _networkResponse.paginResponse;
    }
  }

  private async getGroups() {
    const _networkResponse = await GET_MemberGroupingsGroups<GroupingsGroup_I>();
    let __groups: GroupingsGroup_I[] = [];

    if (_networkResponse === null) {
      __groups.push({ id: 0, group: "**NOT FOUND**", date: new Date()  });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsGroup_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __groups = DATA;
      }
    }
    const new_data: Array<GroupingsGroup_I> = [];
    new_data.push(...this._groups, ...__groups);
    this._groups = new_data;
  }

  private async getGroup(ID: number) {
    const _networkResponse = await GET_MemberGroupingsGroups<GroupingsGroup_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      if (_networkResponse.response.success && 'group' in _networkResponse.response.data) {
        
        const group: GroupingsGroup_I = _networkResponse.response.data;
        return group.group;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  private async getSubGroups() {
    const _networkResponse = await GET_MemberGroupingsSubGroups<GroupingsSubGroup_I>();
    let __subgroups: GroupingsSubGroup_I[] = [];

    if (_networkResponse === null) {
      __subgroups.push({ id: 0, subgroup: "**NOT FOUND**", date: new Date()  });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsSubGroup_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __subgroups = DATA;
      }
    }
    const new_data: Array<GroupingsSubGroup_I> = [];
    new_data.push(...this._subgroups, ...__subgroups);
    this._subgroups = new_data;
  }

  private async getSubGroup(ID: number) {
    // console.log({subgroup_ID: ID})
    const _networkResponse = await GET_MemberGroupingsSubGroups<GroupingsSubGroup_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      if (_networkResponse.response.success && 'subgroup' in _networkResponse.response.data) {
        
        const subgroup: GroupingsSubGroup_I = _networkResponse.response.data;
        // console.log({subgroup})
        return subgroup.subgroup;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
