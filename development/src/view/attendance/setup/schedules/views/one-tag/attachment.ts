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
import { MeetingEventScheduleAttachment_I } from '@@addons/interfaces/attendance/meeting_event/attachment';
import { GET_AttendanceScheduleAttachment } from '@@addons/network/attendance/setup/attachment';
import { CONSTANTS } from '@@addons/constants';


@customElement("attendance-setup-view-one-attachment")
export class AttendanceSetupViewOneAttachment extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  public DATA: MeetingEventSchedule_I[] = [];

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Number })
  public meetingEventId: number = 0;

  private __scheduleAttachments: NetworkCallPaginResponse_I<MeetingEventScheduleAttachment_I> = null;

  public set _scheduleAttachments(value: NetworkCallPaginResponse_I<MeetingEventScheduleAttachment_I>) {
    this.__scheduleAttachments = value;
    this.requestUpdate();
  }

  public get _scheduleAttachments(): NetworkCallPaginResponse_I<MeetingEventScheduleAttachment_I> {
    return this.__scheduleAttachments;
  }

  async connectedCallback() {
    super.connectedCallback();

    await this.getAttendanceScheduleAttachment();

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
        href="${CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
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
                      <b>Schedule Attachment Field(s)</b>
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
    if (this._scheduleAttachments === null) {
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
    if (this._scheduleAttachments === undefined) {
      return html`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Attachment </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `;
    }
    return html`
      ${this._scheduleAttachments.results.map((item, _index, __lists) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${CONSTANTS.URLS.FILE_BUCKET_BASE_URL}files${item.attachment}" target="_blank">Open File ${_index + 1}</a>
              ${(_index + 1) == __lists.length ? "..." : ""}
            </th>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() { }

  private async getAttendanceScheduleAttachment() {
    const _networkResponse = await GET_AttendanceScheduleAttachment<MeetingEventScheduleAttachment_I>(
      null, "?meetingEventId=" + this.meetingEventId + "&length=5"
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
