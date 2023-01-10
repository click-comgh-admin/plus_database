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
import { MeetingEventScheduleSubGroup_I } from '@@addons/interfaces/attendance/meeting_event/subgroup';
import { GET_AttendanceScheduleSubGroup } from '@@addons/network/attendance/setup/subgroup';
import { until } from 'lit/directives/until.js';
import { GroupingsSubGroup_I } from '@@addons/interfaces/members/groupings/subgroup';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import { CONSTANTS } from '@@addons/constants';


@customElement("attendance-setup-view-one-subgroup")
export class AttendanceSetupViewOneSubgroup extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleSubgroups: NetworkCallPaginResponse_I<MeetingEventScheduleSubGroup_I> = null;

  public set _scheduleSubgroups(value: NetworkCallPaginResponse_I<MeetingEventScheduleSubGroup_I>) {
    this.__scheduleSubgroups = value;
    this.requestUpdate();
  }

  public get _scheduleSubgroups(): NetworkCallPaginResponse_I<MeetingEventScheduleSubGroup_I> {
    return this.__scheduleSubgroups;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleSubGroup();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
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
                      <b>Schedule SubGroup</b>
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
    if (this._scheduleSubgroups === null) {
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
    if (this._scheduleSubgroups === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule SubGroup </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    // console.log({"this._scheduleSubgroups": this._scheduleSubgroups})
    return html`
      ${this._scheduleSubgroups.results.map((item, _index, __lists) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${until(this.getSubGroup(item.subGroupId), html`<span>Loading...</span>`)}
              ${(_index + 1) == __lists.length ? "..." : ""}
            </th>
          </tr>
        `;
      })}
    `;
  }

  firstUpsubgroupd() { }

  private async getAttendanceScheduleSubGroup() {
    const _networkResponse = await GET_AttendanceScheduleSubGroup<MeetingEventScheduleSubGroup_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
    );
    // console.log({ _networkResponse });
    if (_networkResponse === null) {
      this._scheduleSubgroups = undefined;
    } else {
      this._scheduleSubgroups = _networkResponse.paginResponse;
    }
  }

  private async getSubGroup(ID: number) {
    const _networkResponse = await GET_MemberGroupingsSubGroups<GroupingsSubGroup_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      if (_networkResponse.response.success && 'subgroup' in _networkResponse.response.data) {
        
        const subgroup: GroupingsSubGroup_I = _networkResponse.response.data;
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
