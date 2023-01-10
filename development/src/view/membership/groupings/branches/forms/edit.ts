import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { ClientBranches_I } from '@@addons/interfaces/clients/branches';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { PUT_ClientBranch } from '@@addons/network/clients/branches/put';


@customElement("membership-groupings-branches-edit-branch")
export class MembershipGroupingsBranchesEditBranch extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  private __branch: NetworkCallResponse_I<ClientBranches_I> = null;

  public set _branch(value: NetworkCallResponse_I<ClientBranches_I>) {
    this.__branch = value;
    this.requestUpdate();
  }

  public get _branch(): NetworkCallResponse_I<ClientBranches_I> {
    return this.__branch;
  }

  @property({ type: Number })
  private branchId?: number = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getBranchId();
    
    await this.getClientBranch();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this._branch === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._branch === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Branch</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      return html`
        ${this.form}
      `;
    }
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
                  <h3 class="h3">Edit Branch</h3>
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
                      ${this.branchId === 1 ? html`` : html`
                        <mwc-button label="Update" raised class="button" @click="${this.submitForm}">
                        </mwc-button>
                      `}
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
    let branch: ClientBranches_I = null;
    // console.log({"this._branch": this._branch})
    if (this._branch !== null) {
      if (this._branch.data !== undefined) {
        if (Array.isArray(this._branch.data)) {
          branch = this._branch.data.length > 0 ? this._branch.data[0] : {id: undefined, name: ""};
        } else {
          branch = this._branch.data;
        }
      } else {
        branch = {id: undefined, name: ""};
      }
    } else {
      branch = {id: undefined, name: ""};
    }
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="${branch.id === undefined ? "": branch.name}" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    
  }

  private getBranchId() {
    let branchId = urlQueryParamsGet('branch-id');
    let _branchId = branchId !== null ? Number(branchId) : null;
    this.branchId = Number.isNaN(_branchId) ? null : _branchId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.branchId": this.branchId });
  }

  private async getClientBranch() {
    const _networkResponse = await GET_ClientBranches<ClientBranches_I>(this.branchId);

    if (_networkResponse === null) {
      this._branch = undefined;
    } else {
      this._branch = _networkResponse.response;
    }
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    await PUT_ClientBranch(this.branchId);
  }

  createRenderRoot() {
    return this;
  }
}
