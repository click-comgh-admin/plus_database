import { base64Encode } from '@@addons/functions/base64';
import { MembershipUser_I } from '@@addons/interfaces/members/user';
import '@@addons/widgets/profile_photo';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement("clocker-table-parts-first-individual")
export class ClockerTablePartsFirstIndividual extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private clockingMethodName: string = "???";

  private _memberData: MembershipUser_I = null;

  public set memberData(value: MembershipUser_I) {
    this._memberData = value;
    this.requestUpdate();
  }

  public get memberData(): MembershipUser_I {
    return this._memberData;
  }

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    const MEMBER_ID = base64Encode(String(this._memberData.id), true);
      return html`<div class="flex flex-col whitespace-normal justify-between content-between">
        <div class="d-block m-1">
          <span class="badge badge-info shadow-lg p-2 m-1">
            ${this.clockingMethodName}
          </span>
        </div>
        <div class="flex m-1 justify-evenly">
          <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""
            click-to-open="${this.memberProfileBaseUrl}${MEMBER_ID}" type="member"
            url="${this._memberData.profilePicture}" size="32"></user-profile-photo>
        </div>
        <div class="block m-1">
          <span class="shadow p-1 block bg-white rounded text-dark">
            <b>Name</b>: ${this._memberData.firstname} ${this._memberData.middlename} ${this._memberData.surname}
          </span>
        </div>
      </div>`;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
