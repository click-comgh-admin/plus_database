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
import { MeetingEventScheduleGroup_I } from '@@addons/interfaces/attendance/meeting_event/group';
import { GET_AttendanceScheduleGroup } from '@@addons/network/attendance/setup/group';
import { until } from 'lit/directives/until.js';
import { GroupingsGroup_I } from '@@addons/interfaces/members/groupings/group';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import { CONSTANTS } from '@@addons/constants';


@customElement("attendance-setup-view-one-group")
export class AttendanceSetupViewOneGroup extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleGroups: NetworkCallPaginResponse_I<MeetingEventScheduleGroup_I> = null;

  public set _scheduleGroups(value: NetworkCallPaginResponse_I<MeetingEventScheduleGroup_I>) {
    this.__scheduleGroups = value;
    this.requestUpdate();
  }

  public get _scheduleGroups(): NetworkCallPaginResponse_I<MeetingEventScheduleGroup_I> {
    return this.__scheduleGroups;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleGroup();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
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
                      <b>Schedule Group</b>
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
    if (this._scheduleGroups === null) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `;
    }
    if (this._scheduleGroups === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Group </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    // console.log({"this._scheduleGroups": this._scheduleGroups})
    return html`
      ${this._scheduleGroups.results.map((item, _index, __lists) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${until(this.getGroup(item.groupId), html`<span>Loading...</span>`)}
              ${(_index + 1) == __lists.length ? "..." : ""}
            </th>
          </tr>
        `;
      })}
    `;
  }

  firstUpgroupd() { }

  private async getAttendanceScheduleGroup() {
    const _networkResponse = await GET_AttendanceScheduleGroup<MeetingEventScheduleGroup_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleGroups = undefined;
    } else {
      this._scheduleGroups = _networkResponse.paginResponse;
    }
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

  createRenderRoot() {
    return this;
  }
}
