import { base64Encode } from '@@addons/functions/base64';
import { MemberClockingInfo_I, MemberClockingInfo_S } from '@@addons/interfaces/attendance/member_clocking_info';
import { InstanceOfOrganizationMember, MemberClockingInfoFull_I, MemberClockingInfoFull_S } from '@@addons/interfaces/attendance/member_clocking_info/index_full';
import '@@addons/widgets/profile_photo';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'
import './first__individual';
import './first__organization';


@customElement("clocker-table-parts-first")
export class ClockerTablePartsFirst extends LitElement {
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

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  connectedCallback() {
    super.connectedCallback();

    // console.log({ "this.clocking_info": this.clocking_info });
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
    if (clockingInfo !== null && clockingInfoFull !== null) {
      // console.log({ "clockingInfo": clockingInfo });
      // console.log({ "clockingInfoFull": clockingInfoFull });
      const clockingMethodName = fullInfo ? clockingInfoFull.attendance.clockingMethodName : clockingInfo.clockingMethodName;
      if (fullInfo ? InstanceOfOrganizationMember(clockingInfoFull.additionalInfo.memberInfo): InstanceOfOrganizationMember(clockingInfo.memberId)) {
        return html`<clocker-table-parts-first-organization clockingMethodName="${clockingMethodName}" .memberData=${fullInfo? clockingInfoFull.additionalInfo.memberInfo: clockingInfo.memberId}></clocker-table-parts-first-organization>`;
      } else {
        return html`<clocker-table-parts-first-individual clockingMethodName="${clockingMethodName}" .memberData=${fullInfo? clockingInfoFull.additionalInfo.memberInfo: clockingInfo.memberId}></clocker-table-parts-first-individual>`;
      }
      
    }
    return null;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
