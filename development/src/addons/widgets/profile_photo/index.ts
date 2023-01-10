import { CONSTANTS } from '@@addons/constants';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js'


@customElement('user-profile-photo')
export class UserProfilePhoto extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public url?: string;

  @property({ type: String })
  public type?: "member" | "client";

  @property({ type: Boolean })
  public rounded?: boolean;

  /** URL TO OPEN ON CLICK*/
  @property({ type: String })
  public 'click-to-open'?: 'false' | string = 'false';

  @property({ type: Number })
  public size?: 8 | 16 | 32;


  connectedCallback() {
    super.connectedCallback();

    // console.log({ "this['click-to-open']": this['click-to-open'] });


    if (this.type === "client") {
      this.setUpClientImage();
    } else {
      this.setUpMemberImage();
    }
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded ? 'rounded-full' : ''}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded ? 'rounded-full' : ''}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `;
  }

  private openProfile(event: any) {
    event.preventDefault();

    if (this['click-to-open'] !== "false") {
      window.location.href = this['click-to-open'];
    }
  }

  firstUpdated() { }

  private setUpMemberImage() {
    if (this.url.includes("member/logo/") || this.url.includes("member/profile/")) {
      this.url = this.url;
    } else {
      const parts = this.url.split('/');
      const fileName = parts[parts.length - 1];
      this.url = CONSTANTS.URLS.FILE_BUCKET_BASE_URL + "/files/members/profile-picture/" + fileName;
    }
  }

  private setUpClientImage() {
    if (this.url.includes("clients/profile-picture/")) {
      this.url = this.url;
    } else {
      const parts = this.url.split('/');
      const fileName = parts[parts.length - 1];
      this.url = CONSTANTS.URLS.FILE_BUCKET_BASE_URL + "/files/clients/profile-picture/" + fileName;
    }
  }

  createRenderRoot() {
    return this;
  }
}
