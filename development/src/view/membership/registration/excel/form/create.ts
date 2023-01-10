import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@@addons/widgets/form/new/file-select';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { POST_MembershipRegisterExcel } from '@@addons/network/members/membership/registration/excel/post';

@customElement("membership-registration-excel-create")
export class MembershipRegistrationExcelCreate extends LitElement {
  constructor() { super(); }

  //  @query(identifier)
  //  private _identifier?: any;

  //  @queryAll(identifier)
  //  private _identifier?: any;

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`${this.form}`;
  }

  private get form() {
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Member Registration</h1>
                  <h3 class="h3">Excel Member Registration</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="register-excel" enctype="multipart/form-data">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="Register" raised class="button" @click="${this.submitForm}">
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
    `;
  }

  private get attachmentField() {
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="excel" name="excel" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    await POST_MembershipRegisterExcel();
  }

  createRenderRoot() {
    return this;
  }
}
