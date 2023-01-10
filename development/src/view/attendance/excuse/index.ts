import '@@assets/styles/views/attendance/clocking/main.scss';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@addons/widgets/alert';
import '@material/mwc-textarea';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import { MemberClockingExcuse_I, MemberClockingExcuse_S } from '@@addons/interfaces/attendance/member_clocking_info/excuse';
import { GET_AttendanceClockingExcuse } from '@@addons/network/attendance/clocking/excuse';
import { POST_AttendanceClockingExcuse } from '@@addons/network/attendance/clocking/excuse/post';
import { PUT_AttendanceClockingExcuse } from '@@addons/network/attendance/clocking/excuse/put';
import { MemberClockingInfo_I } from '@@addons/interfaces/attendance/member_clocking_info';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { GET_AttendanceClocking } from '@@addons/network/attendance/clocking';


@customElement("pdb-attendance-clocking-excuse")
export class PdbAttendanceClockingExcuse extends LitElement {
  constructor() { super(); }

  private __memberClockingInfo: NetworkCallResponse_I<MemberClockingInfo_I> = null;

  public set _memberClockingInfo(value: NetworkCallResponse_I<MemberClockingInfo_I>) {
    this.__memberClockingInfo = value;
    this.requestUpdate();
  }

  public get _memberClockingInfo(): NetworkCallResponse_I<MemberClockingInfo_I> {
    return this.__memberClockingInfo;
  }

  @property({ type: Number })
  private clockingId?: number = 0;

  @property({ type: String })
  private clockingIdEnc?: string = null;

  @property({ type: Array })
  private _clockingExcuse: MemberClockingExcuse_I[] = null;

  async connectedCallback() {
    super.connectedCallback();

    this.getMeetingEventId();
    await this.getAttendanceClocking();
    await this.getAttendanceClockingExcuse();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if ((this.clockingId === 0) || (this.clockingId === null) || (Number.isNaN(this.clockingId))) {
      const header = html`<h4 class="text-white">Error</h4>`;
      const content = html`
        <div>
          <p class="text-black mb-2">Clocking ID Not Found!</p>
        </div>
      `;
      return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
    } else {
      let memberClockingInfo: MemberClockingInfo_I = null;
      // console.log({"this._memberClockingInfo": this._memberClockingInfo})
      if (this._memberClockingInfo !== null) {
        if (this._memberClockingInfo.data !== undefined) {
          if (Array.isArray(this._memberClockingInfo.data)) {
            memberClockingInfo = this._memberClockingInfo.data.length > 0 ? this._memberClockingInfo.data[0] : {};
          } else {
            memberClockingInfo = this._memberClockingInfo.data;
          }
        } else {
          memberClockingInfo = null;
        }
      } else {
        memberClockingInfo = null;
      }
      // console.log({memberClockingInfo});
      
      if (memberClockingInfo === undefined) {
        const header = html`<h4 class="text-white">Empty</h4>`;
        const content = html`
          <div>
            <p class="text-black mb-2">Attendance Clocking Not Found!</p>
            <p class="text-black mb-2"><small>Try again later.</small></p>
          </div>
        `;
        return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
      } else if (memberClockingInfo === null) {
        if (this._clockingExcuse === null) {
          return html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `;
        }
      } else {
        if (this._clockingExcuse === null) {
          return html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `;
        } else {          
          const clockingId = memberClockingInfo.id === undefined ? 0 : memberClockingInfo.id;
          const meetingEventId = memberClockingInfo.id === undefined ? 0 : memberClockingInfo.meetingEventId.id;

          const submitBTN = meetingEventId === 0 ? html`
            <mwc-button label="Save Excuse" raised class="button" @click="${this.submitForm}" disabled>
            </mwc-button>`: html`
            <mwc-button label="Save Excuse" raised class="button" @click="${this.submitForm}">
            </mwc-button>
          `;
          return html`
            <div class="shadow bg-white p-2">
              <form method="post" action="#" class="form mt-0" make-general-posts="add-excuse">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-10">
                    <h4 class="font-semibold my-2">Enter Excuse</h4>
                    ${this.excuse}
                  </div>
                  <div class="col-md-10 col-lg-10 my-2">
                    <div class="form-input-container">
                      ${submitBTN}
                    </div>
              
                    <div class="flex form-input-container items-center text-center my-2">
                      <input type="hidden" name="meetingEventId" value="${meetingEventId}" />
                      <input type="hidden" name="clockingId" value="${clockingId}" />
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
          `;
        }
      }
    }
  }

  private get excuse() {
    // console.log({ "this._clockingExcuse": this._clockingExcuse });
    if (this._clockingExcuse.length > 0) {
      const clockingExcuse = this._clockingExcuse[0];
      return html`<mwc-textarea class="h-96" value="${clockingExcuse.excuse}" outlined name="excuse" id="excuse"></mwc-textarea>`;
    } else {
      return html`<mwc-textarea class="h-96" outlined name="excuse" id="excuse"></mwc-textarea>`;
    }
  }

  firstUpdated() { }

  private getMeetingEventId() {
    let clockingId = urlQueryParamsGet('clocking-id');
    // console.log({ userId });
    let _clockingId = clockingId !== null ? base64Decode(clockingId) : null;
    this.clockingId = Number.isNaN(_clockingId) ? null : Number(_clockingId);
    // console.log({ "this.clockingId": this.clockingId });
    this.clockingIdEnc = base64Encode(String(this.clockingId), true);
  }

  private async getAttendanceClockingExcuse() {
    const _networkResponse = await GET_AttendanceClockingExcuse<MemberClockingExcuse_I>(
      null, "?clockingId=" + this.clockingId
    );
    // console.log({ _networkResponse });

    if (_networkResponse !== null) {
      const _clockingExcuse = _networkResponse.paginResponse,
        _clockingExcuseError = _networkResponse.response;
      // console.log({ _clockingExcuseError });
      if (_clockingExcuse !== null) {
        const results = _clockingExcuse.results.map(excuse => {
          return MemberClockingExcuse_S(excuse);
        });
        this._clockingExcuse = results;
      } else {
        this._clockingExcuse = [];
      }
    } else {
      this._clockingExcuse = [];
      // console.error({ _networkResponse })
    }
  }

  private async getAttendanceClocking() {
    const _networkResponse = await GET_AttendanceClocking<MemberClockingInfo_I>(this.clockingId);
    // console.log({ _networkResponse })
    if (_networkResponse === null) {
      this._memberClockingInfo = undefined;
    } else {
      this._memberClockingInfo = _networkResponse.response;
    }
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    
    if (this._clockingExcuse.length > 0) {
      // console.log({"this._clockingExcuse_excuseId": this._clockingExcuse});
      const excuseId: number = this._clockingExcuse[0].id;
      await PUT_AttendanceClockingExcuse(excuseId);
    } else {
      // console.log({"this._clockingExcuse_no_excuse": this._clockingExcuse});
      await POST_AttendanceClockingExcuse();
    }
  }

  createRenderRoot() {
    return this;
  }
}
