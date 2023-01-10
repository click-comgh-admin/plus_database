import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { POST_ClientBranch } from '@@addons/network/clients/branches/post';


@customElement("membership-groupings-branches-add-branch")
export class MembershipGroupingsBranchesAddBranch extends LitElement {
  constructor() { super(); }

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
    return html`
      ${this.form}
    `;
  }

  private get form(): TemplateResult {
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Branch</h1>
                  <h3 class="h3">Add Branch</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="client-branch">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.branchField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add" raised class="button" @click="${this.submitForm}">
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

  private get branchField() {
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    await POST_ClientBranch();
  }

  createRenderRoot() {
    return this;
  }
}
