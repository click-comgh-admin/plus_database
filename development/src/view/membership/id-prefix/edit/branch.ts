import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@@addons/widgets/form/new/select';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { ClientBranchModel } from '@@addons/interfaces/clients/branches/model';
import { MembershipMemberBranchIDPrefixModel } from '@@addons/interfaces/members/id_prefix/branch';
import { PUT_MemberBranchIdPrefix } from '@@addons/network/members/id_prefix/branch/put';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../page__id';


@customElement("id-branch-prefix-edit")
export class IdBranchPrefixEdit extends LitElement {

  @property({ type: Number })
  public prefixId: number = 0;

  @property({ type: Number })
  public currentBranchId: number = 0;

  @property({ type: Array })
  public prefixEdit: MembershipMemberBranchIDPrefixModel[] = [];

  @property({ type: Array })
  public branches: ClientBranchModel[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    // console.log({ "prefixEdit": this.prefixEdit })
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  

  render() {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.identity_prefix, viewType: "Edit"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Prefix</h1>
                  <h3 class="h3">Update New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-branch-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${this.branches.map((value) => {
                        if (this.prefixEdit.length === 0) {
                          return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                        } else {
                          if (value.id === this.prefixEdit[0].branchID.id) {
                            // console.log({ "value": value })

                            if (this.currentBranchId !== value.id) {
                              this.currentBranchId = value.id;
                              this.requestUpdate();
                            } 
                            return html`<mwc-list-item value="${value.id}"  selected>${value.name}</mwc-list-item>`;
                          }
                        }
                      })}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="${this.prefixEdit.length === 0? "" : this.prefixEdit[0].prefix}" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();

    await PUT_MemberBranchIdPrefix(this.prefixId);
  }

  createRenderRoot() {
    return this;
  }
}