import { POST_UserEditabilityDisdable } from '@@addons/network/members/membership/users/editable/disable';
import { POST_UserEditabilityEndable } from '@@addons/network/members/membership/users/editable/enable';
import '@@addons/widgets/form/new/switch';
import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';


@customElement("pdb-membership-update-view-editabilty")
export class PdbMembershipUpdateViewEditabilty extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public memberId?: number;

  @property({ type: Boolean })
  public currentEditabilty?: boolean;

  @property({ type: Boolean })
  private selectedEditabilty?: boolean;

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
    return html`
      <div class="w-full">
        <div class="flex justify-center my-1">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <header
                    class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">Member</h1>
                      <h3 class="h3">Update Profile Editability!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form !my-1" make-general-posts="members-user-editability"
                    enctype="multipart/form-data">
                    <div
                      class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 mb-2">
                      <h4 class="font-semibold my-2">Account Editable</h4>
                      <switch-input name="editable" class="w-full" id="editable" ?selected="${this.currentEditabilty}"
                        label="Account Editable?" outlined>
                      </switch-input>
                      <input type="hidden" name="memberId" id="memberId" value="${this.memberId}" />
                    </div>
                    <div
                      class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                      <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
                      </mwc-button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private editablitySwitchAction() {
    const _this = this; 
    document.querySelectorAll('[name="editable"]').forEach((_switch) => {
      _switch.addEventListener("click", (evt) => {
        // @ts-ignore 
        _this.selectedEditabilty = _switch.isSelected;
        console.log({ "_this.selectedEditabilty": _this.selectedEditabilty });
        // @ts-ignore
        console.log({ "_switch.isSelected": _switch.isSelected });
      });
    });
  }

  firstUpdated() {

    this.editablitySwitchAction();
  }

  async submitForm(e: PointerEvent) {
    if (this.selectedEditabilty) {
      await POST_UserEditabilityEndable()
    } else {
      await POST_UserEditabilityDisdable()
    }    
  }

  createRenderRoot() {
    return this;
  }
}
