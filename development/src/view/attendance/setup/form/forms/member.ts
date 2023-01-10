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
import { GET_AttendanceScheduleMember } from '@@addons/network/attendance/setup/member';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { DELETE_AttendanceDeleteScheduleMember } from '@@addons/network/attendance/setup/member/delete';
import { MeetingEventScheduleMember_I } from '@@addons/interfaces/attendance/meeting_event/member';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import '@@addons/widgets/form/new/select';
import { POST_AttendanceAddScheduleMember } from '@@addons/network/attendance/setup/member/post';
import { MembershipUser_I, MembershipUser_S } from '@@addons/interfaces/members/user';
import { GET_MembershipUsers } from '@@addons/network/members/membership/users';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { QueryOptions } from 'select2';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';


@customElement("attendance-setup-form-member")
export class AttendanceSetupFormMember extends LitElement {
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
  // private _memberUser: ClientUsers_I[] = [];

  private __memberUser: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _memberUser(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__memberUser = value;
    this.requestUpdate();
  }

  public get _memberUser(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__memberUser;
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

  private __scheduleMembers: NetworkCallPaginResponse_I<MeetingEventScheduleMember_I> = null;

  public set _scheduleMembers(value: NetworkCallPaginResponse_I<MeetingEventScheduleMember_I>) {
    this.__scheduleMembers = value;
    this.requestUpdate();
  }

  public get _scheduleMembers(): NetworkCallPaginResponse_I<MeetingEventScheduleMember_I> {
    return this.__scheduleMembers;
  }

  @property({ type: Array })
  private _members: MembershipUser_I[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-memberField="all"]')
  private showMemberFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMeetingEventId();

    // await this.getMemberUsers();  

    await this.getAttendanceSchedule();
    await this.getAttendanceScheduleMember();
    // await this.getMembers();
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
      return html`${this.scheduleMember}`;
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

  private get scheduleMember() {
    // console.log({ "this._scheduleMembers": this._scheduleMembers });

    if (this._scheduleMembers === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._scheduleMembers === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Member</span>: undefined error</h4>
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
    if (this._scheduleMembers.results.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Member
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
                ${this.getMeetingAttendanceMembers}
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

  private get getMeetingAttendanceMembers() {
    return html`
      ${this._scheduleMembers.results.map((item, i) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${until(this.getMember(item.memberId), html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" @click="${this.deleteQuestionnaireMeetingAttendanceMember}"></mwc-icon-button>
            </td>
          </tr>
        `;
      })}
    `;
  }

  private get form() {
    // <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addMemberField}">
    // </mwc-icon-button>
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member">
                <div class="p-0 m-0" show-memberField="all">
                  ${this.memberFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member" raised class="button" @click="${this.submitForm}">
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

  private get memberField() {
    let ajaxHeader: {Authorization?: string} = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    // ajaxHeader.Authorization = "Token " + _get_cookie;
    // console.log({ajaxHeader: ajaxHeader});
    // console.log({ "this._members": this._members });
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Member</h4>
            <select-input class="w-100" id="memberId" name="memberId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `;
  }

  private memberFieldDefault(number: number) {
    return html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${number}" no_delete></multiple-widgets>
    `;
  }

  private addMemberField() {    
    const count = this.showMemberFieldAllSelector.children.length,
      // @ts-ignore
      lastIndex = count === 0 ? -1 : Number(this.showMemberFieldAllSelector.children[count - 1].getAttribute('memberField-id'));
      // console.log({lastIndex});
        
    const newIndex = lastIndex + 1,
      question = document.createElement('multiple-widgets');
      question.setAttribute('class', "col-md-12 col-lg-12 mb-3");
      question.setAttribute('memberField-id', String(newIndex));
    // question.setAttribute('widget', this.memberField);
    this.showMemberFieldAllSelector.append(question);
    const elements = this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+newIndex+'"]')
    // console.log({ elements })
    const newElem = this.memberField.strings.join('');
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

  private processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="memberId"]');
    // console.log({ data, params, RESULTS, SELECTOR });

    let processedData: { id: number; text: string; }[] = [];
    // @ts-ignore
    processedData[0] = {id: "all", text: "All Members"};
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

  firstUpdated() {
    this.querySelectorAll('[mdc-data-table="data-table"]').forEach((selector) => {
      const dataTable = new MDCDataTable(selector);

      // console.log({ dataTable: dataTable })
    });
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    // if (this._scheduleMembers.count > 0) {
    //   await PUT_AttendanceUpdateScheduleMemberMultiple(this.meetingEventId);
    // } else {
    //   await POST_AttendanceAddScheduleMemberMultiple();
    // }
    // await POST_AttendanceAddScheduleMemberMultiple();
    await POST_AttendanceAddScheduleMember();
  }

  async deleteQuestionnaireMeetingAttendanceMember(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_AttendanceDeleteScheduleMember(meetingEventId);
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

  private async getAttendanceScheduleMember() {
    const _networkResponse = await GET_AttendanceScheduleMember<MeetingEventScheduleMember_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=1000"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleMembers = undefined;
    } else {
      this._scheduleMembers = _networkResponse.paginResponse;
    }
  }

  private async getMembers() {
    const _networkResponse = await GET_MembershipUsers<MembershipUser_I>();
    let __members: MembershipUser_I[] = [];

    if (_networkResponse === null) {
      __members.push({ id: 0, firstname: "** ", middlename: "NOT FOUND", surname: " **", date: new Date()  });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: MembershipUser_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __members = DATA;
      }
    }

    const new_data: Array<MembershipUser_I> = [];
    new_data.push(...this._members, ...__members);
    this._members = new_data;
  }

  private async getMember(ID: number) {
    const _networkResponse = await GET_MembershipUsers<MembershipUser_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      // console.log({"_networkResponse.response": _networkResponse.response});
      
      if (_networkResponse.response.success && 'dateOfBirth' in _networkResponse.response.data) {
        // console.log({ "_networkResponse.response": _networkResponse.response })
        
        const member: MembershipUser_I = MembershipUser_S(_networkResponse.response.data);
        return `${member.firstname} ${member.middlename} ${member.surname}`;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
