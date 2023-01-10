import { base64Encode } from '@@addons/functions/base64';
import { getDateTime } from '@@addons/functions/date_time';
import { getLocalTime } from '@@addons/functions/date_time/time';
import { MemberClockingInfo_I, MemberClockingInfo_S } from '@@addons/interfaces/attendance/member_clocking_info';
import { MemberClockingInfoFull_I, MemberClockingInfoFull_S } from '@@addons/interfaces/attendance/member_clocking_info/index_full';
import { PATCH_AttendanceCancelClocking } from '@@addons/network/attendance/clocking/cancel-clocking';
import { PATCH_AttendanceClockingClockOut } from '@@addons/network/attendance/clocking/clock-out';
import { PATCH_AttendanceClockingEndBreak } from '@@addons/network/attendance/clocking/end-break';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, } from 'lit/decorators.js'
import { getClockingTimeInfo } from './second';


@customElement("clocker-table-parts-third")
export class ClockerTablePartsThird extends LitElement {
  constructor() { super(); }

  private _data: any = null;

  public set data(value: any) {
    this._data = value;
    this.requestUpdate();
  }

  public get data(): any {
    return this._data;
  }

  private _type: any = null;

  public set type(value: any) {
    this._type = value;
    this.requestUpdate();
  }

  public get type(): any {
    return this._type;
  }

  private clockingInfo: MemberClockingInfoFull_I | MemberClockingInfo_I = null;

  @property({ type: Boolean })
  private fullInfo?: boolean = false;

  @property({ type: String })
  private clocking_info?: string = "";

  @property({ type: Boolean })
  public clocking: boolean = false;

  @property({ type: String })
  public clockingTimeValue?: string = "";

  @property({ type: Boolean })
  public clockingTime: boolean = false;

  @property({ type: String })
  private excuseBaseUrl: string = "/clocking/excuse?clocking-id=";

  @property({ type: String })
  private followUpBaseUrl: string = "/clocking/follow-up?clocking-id=";

  @property({ type: Boolean })
  public pageButtonAccess: boolean = false;

  connectedCallback() {
    super.connectedCallback();

    const _clockingInfo = JSON.parse(this.clocking_info);
    // console.log({ "_clockingInfo": _clockingInfo });

    if (_clockingInfo !== null) {
      if ("attendance" in _clockingInfo &&
        "additionalInfo" in _clockingInfo &&
        "lastSeen" in _clockingInfo &&
        "status" in _clockingInfo) {
        this.fullInfo = true;
        this.clockingInfo = MemberClockingInfoFull_S(_clockingInfo);
      } else {
        this.fullInfo = false;
        this.clockingInfo = MemberClockingInfo_S(_clockingInfo);
      }
      // console.log({ "this.clockingInfo": this.clockingInfo });
    }
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  private get getClockingInfo(): MemberClockingInfo_I {
    // @ts-ignore
    return this.clockingInfo;
  }

  private get getClockingInfoFull(): MemberClockingInfoFull_I {
    // @ts-ignore
    return this.clockingInfo;
  }

  render() {
    const fullInfo = this.fullInfo,
      clockingInfo = this.getClockingInfo,
      clockingInfoFull = this.getClockingInfoFull;
    // console.log({ "clockingInfo": clockingInfo });
    if (clockingInfo !== null && clockingInfoFull !== null) {
      const atDate = getDateTime(fullInfo ? clockingInfoFull.attendance.date : clockingInfo.date, { dateStyle: "medium", timeStyle: "short" }); // Sun, 07:39 AM
      const outTime = fullInfo ? clockingInfoFull.attendance.outTime : clockingInfo.outTime;
      // const atOutTime = outTime !== null ? getLocalTime(outTime, {timeStyle: "short"}): "--:--"; // 07:39 AM
      const atOutTime = outTime !== null ? getDateTime(outTime, { dateStyle: "medium", timeStyle: "short" }) : "--:--"; // 07:39 AM
      // console.log({atOutTime, "clockingInfo.outTime": clockingInfo.outTime})
      const CLOCK_ID = fullInfo ? clockingInfoFull.attendance.id : clockingInfo.id;
      const CLOCKED = fullInfo ? clockingInfoFull.attendance.inOrOut : clockingInfo.inOrOut;
      const endBreak = fullInfo ? clockingInfoFull.attendance.endBreak : clockingInfo.endBreak;
      // const atBreakTime = endBreak !== null ? getLocalTime(endBreak, {timeStyle: "short"}): "--:--"; // 07:39 AM
      const atBreakTime = endBreak !== null ? getDateTime(endBreak, { dateStyle: "medium", timeStyle: "short" }) : "--:--"; // 07:39 AM
      const HAS_BREAKTIME = fullInfo ? clockingInfoFull.attendance.meetingEventId.hasBreakTime : clockingInfo.meetingEventId.hasBreakTime;
      const CLOCK_ID_ENC = base64Encode(String(CLOCK_ID), true);
      // console.log({ HAS_BREAKTIME, clockingInfo });
      return html`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking ? html`
            <input type="checkbox" multi-break-check-out="${CLOCK_ID}" name="member_check_out_${CLOCK_ID}"
              id="member_check_out_${CLOCK_ID}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `: nothing}
            <label for="member_check_out_${CLOCK_ID}">@ ${atDate}</label>
          </div>
        </div>
        ${this.clocking ? html`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${CLOCK_ID}" clock-user="out">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
          <button type="button" class="btn btn-transparent btn-sm shadow p-0 mx-1" clock-id="${CLOCK_ID}"
            cancel-user-clock="true">
            <span class="pe-7s-close-circle bg-love-kiss fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-warning">'X' to Cancel Attendance</span>
        </div>
        `: nothing}
        <div class="text-center whitespace-nowrap">
          <a href="${this.excuseBaseUrl}${CLOCK_ID_ENC}" class="btn btn-info btn-sm" target="_blank" type="button">Enter/ View
            Excuse</a>
          <a href="${this.followUpBaseUrl}${CLOCK_ID_ENC}" class="btn btn-primary btn-sm" target="_blank" type="button">Follow-Up</a>
        </div>
        ${CLOCKED && (outTime !== null) ? html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock out Time</b>: ${atOutTime}
          </span>
        </div>`: ''
        }
        ${this.clocking ? html`
        ${HAS_BREAKTIME ? html`
        <hr class="whitespace-nowrap">
        <div class="text-center whitespace-nowrap">
          <mwc-button raised class="shadow-sm info button" label="End Break" clock-id="${CLOCK_ID}" user-break="end"
            icon="close">
          </mwc-button>
        </div>
        `: ''
        }
        `: nothing}
        ${(endBreak !== null) ? html`
        <div class="text-center">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break End Time</b>: ${atBreakTime}
          </span>
        </div>`: ''
        }
      `;
    }
    return null;
  }

  firstUpdated() {
    this.clockUser();
    this.userBreak();
    this.cancelClocking();

    setInterval(() => {
      const CTI = getClockingTimeInfo();
      if (CTI !== null) {
        this.clockingTime = CTI.clockingTime;
        this.clockingTimeValue = CTI.clockingTimeValue;
      }
    });
  }

  private cancelClocking() {
    const selectorString = 'cancel-user-clock="true"';
    document.querySelectorAll('[' + selectorString + ']').forEach(cancelClock => {
      cancelClock.addEventListener('click', async (e) => {
        e.preventDefault();
        if (this.pageButtonAccess) {
          const CLOCK_ID = Number(cancelClock.getAttribute('clock-id'));
          await PATCH_AttendanceCancelClocking(CLOCK_ID);
        }
      });
    });
  }

  private clockUser() {
    const selectorString = 'clock-user';
    document.querySelectorAll('[' + selectorString + ']').forEach(clockUser => {
      // @ts-ignore
      const clockTYPE: "in" | "out" = clockUser.getAttribute(selectorString);
      if (clockTYPE === "out") {
        // console.log({ "clock out": clockTYPE });
        clockUser.addEventListener('click', (e) => {
          this.clockOutUser(clockUser, e);
        });
      }
    });
  }


  async clockOutUser(element: Element, e: any) {
    e.preventDefault();
    if (this.pageButtonAccess) {
      const CLOCK_ID = Number(element.getAttribute('clock-id'));
      // console.log({ e, element, CLOCK_ID });
      if (this.clockingTime) {
        await PATCH_AttendanceClockingClockOut(CLOCK_ID, this.clockingTimeValue);
      } else {
        await PATCH_AttendanceClockingClockOut(CLOCK_ID);
      }
    }
  }

  private userBreak() {
    const selectorString = 'user-break';
    document.querySelectorAll('[' + selectorString + ']').forEach(userBreak => {
      // @ts-ignore
      const breakTYPE: "start" | "end" = userBreak.getAttribute(selectorString);
      if (breakTYPE === "end") {
        // console.log({ "end break": breakTYPE });
        userBreak.addEventListener('click', (e) => {
          this.endUserBreak(userBreak, e);
        });
      }
    });
  }


  async endUserBreak(element: Element, e: any) {
    e.preventDefault();
    if (this.pageButtonAccess) {
      const CLOCK_ID = Number(element.getAttribute('clock-id'));
      console.log({ e, element, CLOCK_ID });
      if (this.clockingTime) {
        await PATCH_AttendanceClockingEndBreak(CLOCK_ID, this.clockingTimeValue);
      } else {
        await PATCH_AttendanceClockingEndBreak(CLOCK_ID);
      }

    }
  }

  createRenderRoot() {
    return this;
  }
}
