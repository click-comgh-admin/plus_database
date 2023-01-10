import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import "@material/mwc-button";
import "@material/mwc-textarea";
import "@material/mwc-textfield";
import '@material/mwc-dialog';
import { PUT_UserConnectionType } from '@@addons/network/members/connections/types/put';
import { Dialog } from '@material/mwc-dialog';


@customElement("pdb-connections-types-edit")
export class PdbConnectionsTypesEdit extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public connection_type_id?: number = 0;

  @property({ type: String })
  public connection_type?: string = "";

  @property({ type: String })
  public connection_description?: string = "";

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
      <mwc-button class="button warning my-1" outlined open-dialog-btn="connection-type-update-${this.connection_type_id}" @click="${this.showDialog}">
        <mwc-icon>edit</mwc-icon> Edit
      </mwc-button>
      ${this.show_form}
    `;
  }

  private get show_form() {
    return html`
      <mwc-dialog class="z-0" open-this-dialog="connection-type-update-${this.connection_type_id}" heading="Update Connection Type">
        <div class="flex m-1 justify-evenly whitespace-normal z-10">
          <div class="form-container">
            <div class=" !px-0">
              <div class="-row !px-0">
                <div class="-col-md-12">
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-type-${this.connection_type_id}">
                    <div class="container my-4">
                      <div class="row justify-center">
                        <div class="col-md-12 col-lg-12">
                          <h4 class="font-semibold my-2">Enter Type</h4>
                          <mwc-textfield name="type" type="text" class="w-full" id="type" value="${this.connection_type}"
                            label="Enter Type" outlined required>
                          </mwc-textfield>
                        </div>
                        <div class="col-md-12 col-lg-12">
                          <h4 class="font-semibold my-2">Enter Description</h4>
                          <mwc-textarea name="description" type="text" class="w-full h-24" id="description"
                            value="${this.connection_description}" label="Enter Description" outlined required>
                          </mwc-textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Update Connection Type" raised class="button" @click="${this.submitForm}">
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
        <mwc-button slot="secondaryAction" dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `;
  }

  private showDialog(event: any) {
    // event.preventDefault();
    // console.log({event})

    const dialogId = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  async submitForm(e: any) {
    e.preventDefault();
    // console.log({ e });

    const dialogId = `connection-type-update-${this.connection_type_id}`;
    const dialog: Dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    
    dialog.removeAttribute('open');
    const response = await PUT_UserConnectionType(this.connection_type_id, dialog);
    // console.log({dialogId, dialog, response});
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
