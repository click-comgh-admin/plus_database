import "../../../../assets/styles/views/home/dashboard.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@@addons/widgets/profile_photo';

@customElement("pdb-user-profile-photo")
export class PdbUserProfilePhoto extends LitElement {
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
  public size?: 16 | 32;

  async connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this.rounded) {
      return html`
        <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this['click-to-open']}"
          type="${this.type}" url="${this.url}" size="${this.size}">
        </user-profile-photo>
      `;
    } else {
      return html`
        <user-profile-photo class="w-16 h-16 mr-1" 'click-to-open'="" click-to-open="${this['click-to-open']}"
          type="${this.type}" url="${this.url}" size="${this.size}">
        </user-profile-photo>
      `;
    }
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
