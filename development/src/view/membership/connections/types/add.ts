import '@@assets/styles/views/attendance/setup/form.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import "@material/mwc-button";
import "@material/mwc-textarea";
import "@material/mwc-textfield";
import { POST_UserConnectionType } from '@@addons/network/members/connections/types/post';


@customElement("pdb-connections-types-add")
export class PdbConnectionsTypesAdd extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  private showing?: boolean = false;

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
    return html`
      ${this.show_form}
      ${/** this.toggle_showing_button */ "" }
    `;
  }

  private get show_form() {
    // if (this.showing) {
      return html`
        <div class="z-50">
          <div class="form-container">
            <div class=" !px-0">
              <div class="-row !px-0">
                <div class="-col-md-12">
                  <header class="header warning -col-md-12">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">New Connection Type</h1>
                      <h3 class="h3">Create New Connection Type!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-type">
                    <div class="container my-4">
                      <div class="row justify-center">
                        <div class="col-md-8 col-lg-8">
                          <h4 class="font-semibold my-2">Enter Type</h4>
                          <mwc-textfield name="type" type="text" class="w-full" id="type" value="" label="Enter Type" outlined
                            required>
                          </mwc-textfield>
                        </div>
                        <div class="col-md-8 col-lg-8">
                          <h4 class="font-semibold my-2">Enter Description</h4>
                          <mwc-textarea name="description" type="text" class="w-full h-24" id="description" value=""
                            label="Enter Description" outlined required>
                          </mwc-textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Add Connection Type" raised class="button" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
        
                        <div class="flex form-input-container items-center text-center">
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
              </div>
            </div>
          </div>
        </div>
      `;
    // } else {
    //   return nothing;
    // }
  }

  // private get toggle_showing_button() {
  //   if (this.showing) {
  //     return html`
  //       <mwc-button @click="${this.toggle_showing_button_action_hide}" class="button warning" raised label="Hide Add Form">
  //       </mwc-button>
  //     `;
  //   } else {
  //     return html`
  //       <mwc-button @click="${this.toggle_showing_button_action_show}" class="button success" raised label="Show Add Form">
  //       </mwc-button>
  //     `;
  //   }
  // }

  // private toggle_showing_button_action_show(e: any) {
  //   e.preventDefault();
  //   this.showing = true;
  // }

  // private toggle_showing_button_action_hide(e: any) {
  //   e.preventDefault();
  //   this.showing = false;
  // }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    await POST_UserConnectionType();
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
