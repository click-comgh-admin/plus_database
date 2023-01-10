import { getDateTime } from '@@addons/functions/date_time';
import { getLocalTime } from '@@addons/functions/date_time/time';
import { MemberClockingInfo_I, MemberClockingInfo_S } from '@@addons/interfaces/attendance/member_clocking_info';
import { InstanceOfOrganizationMember, MemberClockingInfoFull_I, MemberClockingInfoFull_S } from '@@addons/interfaces/attendance/member_clocking_info/index_full';
import { PATCH_AttendanceClockingClockIn } from '@@addons/network/attendance/clocking/clock-in';
import { PATCH_AttendanceClockingStartBreak } from '@@addons/network/attendance/clocking/start-break';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, } from 'lit/decorators.js'
import '@material/mwc-icon-button';

/*this is to change automatically update clocking times since datatabel is not allowing it */
export const setClockingTimeInfo = (clockingTime: boolean, clockingTimeValue: string) => {
  // @ts-ignore
  window['clocker'] = {
    'clockingTimeInfo': {
      "clockingTime": clockingTime, "clockingTimeValue": clockingTimeValue,
    }
  };
}
export const getClockingTimeInfo = () => {
  if ("clocker" in window) {
    // @ts-ignore
    const CTI = window['clocker']['clockingTimeInfo'];
    if ('clockingTime' in CTI) return {
      "clockingTime": CTI.clockingTime, "clockingTimeValue": CTI.clockingTimeValue,
    }

  } return null;
}

@customElement("clocker-table-parts-second")
export class ClockerTablePartsSecond extends LitElement {
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

  @property({ type: String })
  public clockingTimeValue?: string = "";

  @property({ type: Boolean })
  public clocking: boolean = false;

  @property({ type: Boolean })
  public clockingTime: boolean = false;

  private clockingInfo: MemberClockingInfoFull_I | MemberClockingInfo_I = null;

  @property({ type: Boolean })
  private fullInfo?: boolean = false;

  @property({ type: String })
  private clocking_info?: string = "";

  @property({ type: Boolean })
  public pageButtonAccess: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    console.log({"this.pageButtonAccess": this.pageButtonAccess});
    

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
      const inTime = fullInfo ? clockingInfoFull.attendance.inTime : clockingInfo.inTime;
      // const atInTime = inTime !== null ? getLocalTime(inTime, { timeStyle: "short" }) : "--:--"; // 07:39 AM
      const atInTime = inTime !== null ? getDateTime(inTime, { dateStyle: "medium", timeStyle: "short" }) : "--:--"; // 07:39 AM
      // console.log({atInTime, "_clockingInfo.inTime": _clockingInfo.inTime})
      const CLOCK_ID = fullInfo ? clockingInfoFull.attendance.id : clockingInfo.id;
      const CLOCKED = fullInfo ? clockingInfoFull.attendance.inOrOut : clockingInfo.inOrOut;
      const startBreak = fullInfo ? clockingInfoFull.attendance.startBreak : clockingInfo.startBreak;
      // const atBreakTime = startBreak !== null ? getLocalTime(startBreak, { timeStyle: "short" }) : "--:--"; // 07:39 AM
      const atBreakTime = startBreak !== null ? getDateTime(startBreak, { dateStyle: "medium", timeStyle: "short" }) : "--:--"; // 07:39 AM
      const TODAY = new Date();
      const HAS_BREAKTIME = fullInfo ? clockingInfoFull.attendance.meetingEventId.hasBreakTime : clockingInfo.meetingEventId.hasBreakTime;
      // console.log({ HAS_BREAKTIME, _clockingInfo });
      const IS_TODAY = (fullInfo ? clockingInfoFull.attendance.date.toDateString() : clockingInfo.date.toDateString()) === TODAY.toDateString();
      return html`
        <div class="shadow bg-white p-2 text-center whitespace-nowrap">
          <div class="flex justify-between">
            ${this.clocking ? html`
            <input type="checkbox" multi-break-check-in="${CLOCK_ID}" name="member_check_in_${CLOCK_ID}"
              id="member_check_in_${CLOCK_ID}"
              class="m-1 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            `: nothing}
            <label for="member_check_in_${CLOCK_ID}">@ ${atDate}</label>
          </div>
        </div>
        ${this.clocking ? html`
        <div class="text-center whitespace-nowrap">
          <button type="button" class="btn btn-transparent btn-sm shadow p-0" clock-id="${CLOCK_ID}" clock-user="in">
            <span class="pe-7s-check bg-happy-itmeo fa-5x icon-gradient"></span>
          </button>
        </div>
        <div class="text-center flex justify-center whitespace-nowrap">
          <span class="badge badge-success mx-1">${IS_TODAY ? html`Today` : html`Post Clocking`}</span>
          ${CLOCKED ? html`
          <span class="badge badge-success bg-grow-early mx-1">Present</span>`: html`
          <span class="badge badge-danger mx-1">Not Clocked</span>
          `}
        </div>
        `: html`
          <div class="text-center flex justify-evenly whitespace-nowrap">
            <a href="tel://${clockingInfoFull.additionalInfo.phone}">
              <mwc-icon-button class="bg-sunny-morning text-white" icon="call"></mwc-icon-button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+${clockingInfoFull.additionalInfo.whatsapp}&amp;text=">
              <mwc-icon-button class="bg-grow-early text-white" icon="whatsapp"></mwc-icon-button>
            </a>
          </div>
        `}
        ${CLOCKED && (inTime !== null) ? html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Clock in Time</b>: ${atInTime}
          </span>
        </div>`: ''
        }
        ${this.clocking ? html`
          ${HAS_BREAKTIME ? html`
          <hr class="whitespace-nowrap">
          <div class="text-center whitespace-nowrap">
            <mwc-button raised class="shadow-sm success button" label="Start Break" clock-id="${CLOCK_ID}" user-break="start"
              icon="check">
            </mwc-button>
          </div>
          `: ''
          }
        `: nothing}
        ${(startBreak !== null) ? html`
        <div class="text-center whitespace-nowrap">
          <span class="badge badge-light shadow p-2 m-1">
            <b>Break Start Time</b>: ${atBreakTime}
          </span>
        </div>`: ''
        }
      `;
    }
    return null
  }

  firstUpdated() {
    this.clockUser();
    this.userBreak();

    setInterval(() => {
      const CTI = getClockingTimeInfo();
      if (CTI !== null) {
        this.clockingTime = CTI.clockingTime;
        this.clockingTimeValue = CTI.clockingTimeValue;
      }
    });
  }

  private clockUser() {
    const selectorString = 'clock-user';
    document.querySelectorAll('[' + selectorString + ']').forEach(clockUser => {
      // @ts-ignore
      const clockTYPE: "in" | "out" = clockUser.getAttribute(selectorString);
      if (clockTYPE === "in") {
        // console.log({ "clock in": clockTYPE });
        clockUser.addEventListener('click', (e) => {
          this.clockInUser(clockUser, e);
        });
      }
    });
  }

  async clockInUser(element: Element, e: any) {
    e.preventDefault();
    // console.log({ "this.clockingTime": this.clockingTime, "this.clockingTimeValue": this.clockingTimeValue });
    if (this.pageButtonAccess) {
      const CLOCK_ID = Number(element.getAttribute('clock-id'));
      // console.log({ e, element, CLOCK_ID });
      if (this.clockingTime) {
        await PATCH_AttendanceClockingClockIn(CLOCK_ID, this.clockingTimeValue);
      } else {
        await PATCH_AttendanceClockingClockIn(CLOCK_ID);
      }
    }
  }


  private userBreak() {
    const selectorString = 'user-break';
    document.querySelectorAll('[' + selectorString + ']').forEach(userBreak => {
      // @ts-ignore
      const breakTYPE: "start" | "end" = userBreak.getAttribute(selectorString);
      if (breakTYPE === "start") {
        // console.log({ "start break": breakTYPE });
        userBreak.addEventListener('click', (e) => {
          this.startUserBreak(userBreak, e);
        });
      }
    });
  }

  async startUserBreak(element: Element, e: any) {
    e.preventDefault();
    if (this.pageButtonAccess) {
      const CLOCK_ID = Number(element.getAttribute('clock-id'));
      // console.log({ e,element,CLOCK_ID });
      if (this.clockingTime) {
        await PATCH_AttendanceClockingStartBreak(CLOCK_ID, this.clockingTimeValue);
      } else {
        await PATCH_AttendanceClockingStartBreak(CLOCK_ID);
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
