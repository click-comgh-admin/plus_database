import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import '@material/mwc-icon'
import { ClientPageAccessModel } from '@@addons/interfaces/clients/users/page_access';
import { ASES_isUnlimited } from '@@addons/functions/app_settings/extra_settings/user_access';
import { ClientUserPageAccessModel, IsUnlimited } from '@@addons/interfaces/clients/users/page_access/user_access';


type isUnlimited = { id: string, name: string }
@customElement("client-user-access-card-section-inputs")
export class ClientUserAccessCardSectionInputs extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  public isActive: boolean = false;

  @property({ type: Number })
  public input_index: number = 0;

  @property({ type: Array })
  public pageAccess: Array<ClientPageAccessModel> = [];

  @property({ type: Array })
  public user_access?: Array<ClientUserPageAccessModel> = null;

  @property({ type: Boolean })
  private checked: boolean = false;

  @property({ type: Boolean })
  private initialCheckValueCalled: boolean = false;

  private isUnlimited: isUnlimited[] = []

  private checkedLimitation: IsUnlimited = { id: null, name: "" };

  connectedCallback() {
    super.connectedCallback();

    this.aSES_isUnlimited();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    // console.log({"this.user_access": this.user_access});
    return this.pageAccess.map(access => {
      let access_id: string = "access_" + access.moduleId + "_" + this.input_index,
        access_name = "pageId[]",
        limitation_name = "limitations[]";
      if (this.isActive === true) {
        access_id = "pageId_" + access.moduleId + "_" + this.input_index,
          access_name = "pageId[]";
      }

      this.initialCheckValue(access.id);

      return html`
        <div class="mx-2 relative w-full p-1">
          ${this.checked ? html`
          <div class="block">
            <input id="${access_id}" name="${access_name}" type="checkbox" value="${access.id}" checked ?disabled="${!this.isActive}"
              @change="${this.inputChecking}"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div class="block">
            <select class="px-2 border border-gray-200 shadow py-1" id="limitations" name="${limitation_name}" ?disabled="${!this.isActive}">
              <option value="null">Select Limitation</option>
              ${this.isUnlimited.map(iu => html`<option value="${iu.id}"
                .selected="${String(this.checkedLimitation.id) === iu.id}">${iu.name}</option>`)}
            </select>
          </div>
          `: html`
          <input id="${access_id}" name="${access_name}" type="checkbox" value="${access.id}" @change="${this.inputChecking}" ?disabled="${!this.isActive}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `
        }
        </div>
      `;
    });
  }

  private aSES_isUnlimited() {
    let items: Array<isUnlimited> = [];

    for (const key in ASES_isUnlimited) {
      if (Object.prototype.hasOwnProperty.call(ASES_isUnlimited, key)) {

        if (!isNaN(Number(key))) {
          const element = ASES_isUnlimited[key];

          const item: isUnlimited = { id: key, name: element };
          if (!items.includes(item)) {
            items.push(item);
          }
        }

      }
    }
    // console.log({items});

    this.isUnlimited = items;
  }

  private initialCheckValue(pageAccessId: number) {
    if (this.initialCheckValueCalled === false) {
      // console.log({ "this.user_access": this.user_access });

      if (this.user_access !== null) {
        this.user_access.forEach(accessID => {
          if (accessID.pageId.id === pageAccessId) {
            this.checked = true
            this.checkedLimitation = accessID.isUnlimited;
          }
        });
        this.initialCheckValueCalled = true;
      }
    }
  }

  private inputChecking(e: Event) {
    // console.log({ "inputChecking-e": e });

    //@ts-ignore
    const checked: boolean = e.currentTarget.checked;
    // console.log({ checked });

    this.checked = checked;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
