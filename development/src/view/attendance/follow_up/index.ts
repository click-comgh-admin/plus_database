import '@@assets/styles/views/attendance/clocking/main.scss';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@addons/widgets/alert';
import '@material/mwc-textarea';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-select';
import '@material/mwc-circular-progress';
import { getDateTime } from '@@addons/functions/date_time';
import { MemberClockingFollowUp_I, MemberClockingFollowUp_S } from '@@addons/interfaces/attendance/member_clocking_info/follow_up';
import { GET_AttendanceClockingFollowUp } from '@@addons/network/attendance/clocking/follow_up';
import { POST_AttendanceClockingFollowUp } from '@@addons/network/attendance/clocking/follow_up/post';
import { MemberClockingInfo_I } from '@@addons/interfaces/attendance/member_clocking_info';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { GenericMessagingTypeModel, Convert as gmtmConvert } from '@@addons/interfaces/generic/messaging_type';
import { GET_GenericMessagingType } from '@@addons/network/generic/messaging_type';
import { GET_AttendanceClocking } from '@@addons/network/attendance/clocking';
import { DELETE_AttendanceClockingFollowUp } from '@@addons/network/attendance/clocking/follow_up/delete';
import { PATCH_AttendanceClockingFollowUp_Resend } from '@@addons/network/attendance/clocking/follow_up/resend';
import { InstanceOfOrganizationMember } from '@@addons/interfaces/attendance/member_clocking_info/index_full';
import { MembershipOrganizationUserModel } from '@@addons/interfaces/members/user/organization_model';
import { MembershipUser_I } from '@@addons/interfaces/members/user';


@customElement("pdb-attendance-clocking-follow_up")
export class PdbAttendanceClockingFollowUp extends LitElement {
  constructor() { super(); }

  private __memberClockingInfo: NetworkCallResponse_I<MemberClockingInfo_I> = null;

  public set _memberClockingInfo(value: NetworkCallResponse_I<MemberClockingInfo_I>) {
    this.__memberClockingInfo = value;
    this.requestUpdate();
  }

  public get _memberClockingInfo(): NetworkCallResponse_I<MemberClockingInfo_I> {
    return this.__memberClockingInfo;
  }

  @property({ type: Array })
  private _messagingTypes: GenericMessagingTypeModel[] = [];

  @property({ type: Number })
  private clockingId?: number = 0;

  @property({ type: Boolean })
  private showingForm?: boolean = false;

  @property({ type: Boolean })
  private toggleFollowUpFormCalled?: boolean = false;

  @property({ type: Boolean })
  private toggleMessageMetadatFormCalled?: boolean = false;

  @property({ type: String })
  private clockingIdEnc?: string = null;

  @property({ type: Array })
  private _clockingFollowUp: MemberClockingFollowUp_I[] = null;

  async connectedCallback() {
    super.connectedCallback();

    document.onreadystatechange = (event) => {
      setInterval(() => {
        if (!this.toggleFollowUpFormCalled) {
          if (document.readyState == "complete") this.toggleFollowUpForm(event);
        }
        if (!this.toggleMessageMetadatFormCalled) {
          if (document.readyState == "complete") this.toggleMessageMetadatForm(event);
        }
      },);
    }  

    this.getMeetingEventId();
    await this.getMessagingTypes();
    await this.getAttendanceClocking();
    await this.getAttendanceClockingFollowUp();
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
        if (this._clockingFollowUp === null) {
          return html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `;
        }
      } else {
        if (this._clockingFollowUp === null) {
          return html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `;
        } else {  
          return html`
            <div class="shadow bg-white p-2">
              <div class="block">
                <div class="my-1">${this.form(memberClockingInfo)}</div>
                <div class="my-1">${this.messages}</div>
              </div>
            </div>
          `;
        }
      }
    }
  }

  private get messages() {  
    // console.log({ "this._clockingFollowUp": this._clockingFollowUp })
    
    if (this._clockingFollowUp.length > 0) {
      return this._clockingFollowUp.map(message => {
        return html`<div class="border rounded-none my-1">
          <div class="border-b flex justify-end p-1">
            <div class="flex flex-col items-center pl-4">
              <mwc-icon-button class="bg-grow-early text-white" icon="forward" resend-this-item="${message.id}" @click="${this.resendFollowUpMessage}"></mwc-icon-button>
              <small class="block">Resend</small>
            </div>
            <div class="flex flex-col items-center pl-2">
              <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${message.id}" @click="${this.deleteFollowUpMessage}"></mwc-icon-button>
              <small class="block">Delete</small>
            </div>
          </div>
          <div class="border-0 p-1">
            <div class="flex flex-col justify-end items-end relative">
              ${this.messageMetaData(message)}
            </div>
            <div class="whitespace-pre-line">
              ${message.followUp}
            </div>
          </div>
          <div class="border-t flex justify-end p-1">
            <div>${getDateTime(message.date, { dateStyle: "medium", timeStyle: "short" })}</div>
          </div>
        </div>`;
      });

    } else {
      const header = html`<h4 class="text-white">Empty</h4>`;
      const content = html`
        <div>
          <p class="text-black mb-2">No Follow-Ups sent yet!</p>
          <p class="text-black mb-2"><small>Click on "Send Follow-Up" button to send one.</small></p>
        </div>
      `;
      return html`<alert-card info .header="${header}" .content="${content}"></alert-card>`;
    }
  }

  private messageMetaData(message: MemberClockingFollowUp_I) {
    let name__ = " - ",
      phone__ = " - " ,
      email__ = " - " ;
    if (InstanceOfOrganizationMember(message.clockingId.memberId)) {
      const member:MembershipOrganizationUserModel = message.clockingId.memberId;
      name__ = `${member.organizationName}`;
      phone__ = `${member.organizationPhone}`;
      email__ = `${member.organizationEmail}`;
    } else {
      const member: MembershipUser_I = message.clockingId.memberId;
      name__ = `${member.firstname} ${member.middlename} ${member.surname}`;
      phone__ = `${member.phone}`;
      email__ = `${member.email}`;
    }

    return html`
      <mwc-button class="button info w-max block" message-meta-data-btn-id="${message.id}" outlined show_message_metadata disabled>
        <mwc-icon>visibility</mwc-icon> Show MetaData 
        <mwc-circular-progress indeterminate show_message_metadata_loading class="w-6"></mwc-circular-progress>
      </mwc-button>
      <div class="sm:w-2/5 w-full absolute top-10 z-10">
        <div class="mdc-data-table w-full shadow border" hidden mdc-data-table="data-table" message-meta-data-id="${message.id}">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Meta-Data</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>...</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Sent To</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${ html`${name__}`}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Message Type</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="uppercase">
                      <p>${this._messagingTypes.map(mt => message.messagingType === mt.id? mt.name: "")}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Status</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="flex flex-row-reverse items-center">
                      <mwc-icon class="${message.sent?'text-green-700': 'text-red-700'}">${message.sent? "check": "close"}</mwc-icon>
                      <small class="${message.sent?'text-green-700': 'text-red-700'}">${message.sent? "Sent": "Pending..."}</small>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Phone</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${ html`<a href="tel:${phone__}" type="tel">${phone__}</a>`}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Email</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${html`<a href="mailto:${email__}" type="email">${email__}</a>`}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private form(memberClockingInfo: MemberClockingInfo_I) {   
    const clockingId = memberClockingInfo.id === undefined ? 0 : memberClockingInfo.id;
    const meetingEventId = memberClockingInfo.id === undefined ? 0 : memberClockingInfo.meetingEventId.id;

    const submitBTN = meetingEventId === 0 ? html`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}" disabled>
      </mwc-button>`: html`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}">
      </mwc-button>
    `;

    return html`
      <mwc-button class="button success" outlined show_follow_up_form disabled>
        <mwc-icon>send</mwc-icon> Send Follow-Up 
        <mwc-circular-progress indeterminate show_follow_up_form_loading class="w-6"></mwc-circular-progress>
      </mwc-button>
      ${(this.showingForm)? html`
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <form method="post" action="#" class="form mt-0" make-general-posts="add-follow-up">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-12">
                <h4 class="font-semibold my-2">Select Messaging Type</h4>
                <mwc-select name="messagingType" id="messagingType" label="Select Messaging Type" outlined required>
                  ${this._messagingTypes.map((item) => {
                    // console.log({item});
                    return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                  })}
                </mwc-select>
              </div>
              <div class="col-md-12 col-lg-12">
                <h4 class="font-semibold my-2">Enter Follow Up</h4>
                ${this.followUp}
              </div>
              <div class="col-md-12 col-lg-12 my-2 z-10">
                <div class="form-input-container z-10">
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
          <hr class="my-2">
        </div>
      `:
      nothing}
    `;
  }

  private get followUp() {
    return html`<mwc-textarea class="h-44" outlined name="followUp" id="followUp"></mwc-textarea>`;
  }

  firstUpdated() {
    
    // document.onreadystatechange = (event) => {
    //   setInterval(() => {
    //     if (document.querySelectorAll('mwc-button[show_message_metadata]') !== null) {
    //       console.log({ "document.readyState": document.readyState })
    //       if (document.readyState == "complete") this.toggleFollowUpForm(event);
    //       if (document.readyState == "complete") this.toggleMessageMetadatForm(event);
    //     }
    //   }, 5000);
    // }  
  }

  private toggleMessageMetadatForm(e: any) {
    // console.log(e)
    
    const messageBtnNodes: NodeListOf<HTMLSelectElement> = document.querySelectorAll('mwc-button[show_message_metadata]');
    const messageBtnLoadingNodes: NodeListOf<HTMLSelectElement> = document.querySelectorAll('mwc-button>[show_message_metadata_loading]');
    // console.log({ messageBtnNodes,messageBtnLoadingNodes })
    messageBtnLoadingNodes.forEach(messageBtnLoadingNode => {
      messageBtnLoadingNode.setAttribute('hidden', "true");
    });
    messageBtnNodes.forEach((messageBtnNode) => {
      messageBtnNode.removeAttribute('disabled');
      // console.log({ "messageBtnNode": messageBtnNode })
      // console.log({ "messageBtnNode.currentValue": messageBtnNode.getAttribute("currentValue") })
      messageBtnNode.onclick = async (event) => {
        // console.log({ event, })

        // @ts-ignore
        const metaDataId = event.target.getAttribute("message-meta-data-btn-id"),
          table = this.querySelector('[message-meta-data-id="' + metaDataId + '"]');
        
        // console.log({ "[message-meta-data-id=' + metaDataId + ']": '[message-meta-data-id="' + metaDataId + '"]', table });
        (table.hasAttribute('hidden')) ? table.removeAttribute('hidden') :
          table.setAttribute('hidden', '');
      };
    });
    // console.log({'messageBtnNodes': messageBtnNodes.length});
    if (messageBtnNodes.length > 0) {
      this.toggleMessageMetadatFormCalled = true; 
    }
  }

  private toggleFollowUpForm(e: any) {
    // console.log("toggleFollowUpForm", e)
    const followUpFormBtnNodes: NodeListOf<HTMLSelectElement> = document.querySelectorAll('mwc-button[show_follow_up_form]');
    const followUpFormBtnLoadingNodes: NodeListOf<HTMLSelectElement> = document.querySelectorAll('mwc-button>[show_follow_up_form_loading]');
    // console.log({ followUpFormBtnNodes, followUpFormBtnLoadingNodes })
    followUpFormBtnLoadingNodes.forEach(followUpFormBtnLoadingNode => {
      followUpFormBtnLoadingNode.setAttribute('hidden', "true");
    });
    followUpFormBtnNodes.forEach(followUpFormBtnNode => {
      followUpFormBtnNode.removeAttribute('disabled');
      // console.log({ "followUpFormBtnNode": followUpFormBtnNode })
      // console.log({ "followUpFormBtnNodes.currentValue": followUpFormBtnNodes.getAttribute("currentValue") })
      followUpFormBtnNode.onclick = async (event) => {
        // console.log({ event, })
        this.showingForm = !this.showingForm;
      };
    });
    // console.log({'followUpFormBtnNodes': followUpFormBtnNodes.length});
    if (followUpFormBtnNodes.length > 0) {
      this.toggleFollowUpFormCalled = true; 
    }
  }

  private getMeetingEventId() {
    let clockingId = urlQueryParamsGet('clocking-id');
    // console.log({ userId });
    let _clockingId = clockingId !== null ? base64Decode(clockingId) : null;
    this.clockingId = Number.isNaN(_clockingId) ? null : Number(_clockingId);
    // console.log({ "this.clockingId": this.clockingId });
    this.clockingIdEnc = base64Encode(String(this.clockingId), true);
  }

  private async getMessagingTypes() {
    const _networkResponse = await GET_GenericMessagingType<GenericMessagingTypeModel>();
    // console.log({_networkResponse});
    
    let __messagingTypes: GenericMessagingTypeModel[] = [];

    if (_networkResponse === null) {
      __messagingTypes.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GenericMessagingTypeModel[] = data.map(value => {
          return gmtmConvert.toGenericMessagingTypeModel(JSON.stringify(value))
        });
        // console.log({DATA});
        const mt: GenericMessagingTypeModel = {id: 0, name: "Select Meeting Type"}
        __messagingTypes = [...[mt], ...DATA];
      }
    }

    const new_data: Array<GenericMessagingTypeModel> = [];
    new_data.push(...this._messagingTypes, ...__messagingTypes);
    this._messagingTypes = new_data;
  }

  private async getAttendanceClockingFollowUp() {
    const _networkResponse = await GET_AttendanceClockingFollowUp<MemberClockingFollowUp_I>(
      null, "?clockingId=" + this.clockingId
    );
    // console.log({ _networkResponse });

    if (_networkResponse !== null) {
      const _clockingFollowUp = _networkResponse.paginResponse,
        _clockingFollowUpError = _networkResponse.response;
      // console.log({ _clockingFollowUpError });
      if (_clockingFollowUp !== null) {
        const results = _clockingFollowUp.results.map(followUp => {
          return MemberClockingFollowUp_S(followUp);
        });
        this._clockingFollowUp = results;
      } else {
        this._clockingFollowUp = [];
      }
    } else {
      this._clockingFollowUp = [];
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

  async deleteFollowUpMessage(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userUserId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_AttendanceClockingFollowUp(userUserId);
  }

  async resendFollowUpMessage(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userUserId = Number(e.currentTarget.getAttribute('resend-this-item'));

    await PATCH_AttendanceClockingFollowUp_Resend(userUserId);
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    
    // console.log({"this._clockingFollowUp_no_followUp": this._clockingFollowUp});
    await POST_AttendanceClockingFollowUp();
  }

  createRenderRoot() {
    return this;
  }
}
