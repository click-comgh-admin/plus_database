import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import { until } from 'lit/directives/until.js';
import { MeetingEventScheduleMember_I } from '@@addons/interfaces/attendance/meeting_event/member';
import { GET_AttendanceScheduleMember } from '@@addons/network/attendance/setup/member';
import { MembershipUser_I } from '@@addons/interfaces/members/user';
import { GET_MembershipUsers } from '@@addons/network/members/membership/users';
import { CONSTANTS } from '@@addons/constants';


@customElement("attendance-setup-view-one-member")
export class AttendanceSetupViewOneMember extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleMembers: NetworkCallPaginResponse_I<MeetingEventScheduleMember_I> = null;

  public set _scheduleMembers(value: NetworkCallPaginResponse_I<MeetingEventScheduleMember_I>) {
    this.__scheduleMembers = value;
    this.requestUpdate();
  }

  public get _scheduleMembers(): NetworkCallPaginResponse_I<MeetingEventScheduleMember_I> {
    return this.__scheduleMembers;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleMember();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      ${this.schedule}
    `;
  }

  private get schedule() {
    return html`${this.table}`;
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
                      <b>Schedule Member</b>
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
    if (this._scheduleMembers === null) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `;
    }
    if (this._scheduleMembers === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Member </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    return html`
      ${this._scheduleMembers.results.map((item, _index, __lists) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${until(this.getMember(item.memberId), html`<span>Loading...</span>`)}
              ${(_index + 1) == __lists.length ? "..." : ""}
            </th>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() { }

  private async getAttendanceScheduleMember() {
    const _networkResponse = await GET_AttendanceScheduleMember<MeetingEventScheduleMember_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleMembers = undefined;
    } else {
      this._scheduleMembers = _networkResponse.paginResponse;
    }
  }

  private async getMember(ID: number) {
    const _networkResponse = await GET_MembershipUsers<MembershipUser_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      // console.log({"_networkResponse.response": _networkResponse.response});
      
      if (_networkResponse.response.success && 'dateOfBirth' in _networkResponse.response.data) {
        // console.log({ "_networkResponse.response": _networkResponse.response })
        
        const member: MembershipUser_I = _networkResponse.response.data;
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
