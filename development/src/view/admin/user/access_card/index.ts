import { ClientPageAccessModel } from '@@addons/interfaces/clients/users/page_access';
import { ClientUserPageAccessModel } from '@@addons/interfaces/clients/users/page_access/user_access';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import './section';

export type ModuleAccess = {
  [moduleID: string]: Array<ClientPageAccessModel>
}
@customElement("client-user-access-card")
export class ClientUserAccessCard extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  public isActive: boolean = false;

  @property({ type: Array })
  public available_access: Array<ClientPageAccessModel> = [];

  @property({ type: Array })
  public user_access?: Array<ClientUserPageAccessModel> = null;

  private module_access: ModuleAccess = {};

  @property({ type: Boolean })
  private grouped: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    // console.log({"--this.available_access--": this.available_access});

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    // console.log({ "-this.available_access-": this.available_access });
    
    if (this.available_access.length > 0) {
      this.group_by_modules();
    }

    let access_card_sections = html``;
    for (const key in this.module_access) {
      if (Object.prototype.hasOwnProperty.call(this.module_access, key)) {
        const element = this.module_access[key];
        // console.log({ "-element.element-": element });
        access_card_sections = html`${access_card_sections}
          <client-user-access-card-section ?isActive="${this.isActive}" .module_access="${element}" .user_access="${this.user_access}"></client-user-access-card-section>
        `;
      }
    }
    return html`
      <div class="divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg">
        ${access_card_sections}
      </div>
    `;
  }

  private group_by_modules() {
    // console.log({ "this.available_access": this.available_access });
    
    if (!this.grouped) {
      this.available_access.forEach(access => {
        const KEY = String(access.moduleId);
  
        if (!(KEY in this.module_access)) {
          this.module_access[KEY] = [];
        }
  
        this.module_access[KEY].push(access);
      });
      // console.log({"this.module_access": this.module_access});
      
      this.grouped = true;
    }
    
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
