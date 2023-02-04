import '@@assets/styles/views/admin/user/form.scss';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-select';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@@addons/widgets/form/new/select';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { ClientUserPageAccessModel } from '@@addons/interfaces/clients/users/page_access/user_access';
import '@@views/membership/members/edit/pages/photo';
import { PATCH_ClientUser } from '@@addons/network/clients/users/patch';


@customElement("pdb-admin-user-photo-form")
export class PdbAdminUserPhotoForm extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public edit: "true" | "false" = "false";

  @property({ type: Boolean })
  public editAccess?: boolean = false;

  @property({ type: Boolean })
  public isEditable?: boolean = false;

  @property({ type: String })
  public page_type: "mine" | "not-mine" = "mine";

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  private get _clientUserDefault(): NetworkCallResponse_I<ClientUsers_I> {
    const user: ClientUsers_I = {};
    return { data: user, message: "", success: false }
  }

  private _clientUser: NetworkCallResponse_I<ClientUsers_I> = this._clientUserDefault;

  public set clientUser(value: NetworkCallResponse_I<ClientUsers_I>) {
    this._clientUser = value;
    this.requestUpdate();
  }

  public get clientUser(): NetworkCallResponse_I<ClientUsers_I> {
    return this._clientUser;
  }

  private get _clientUserAccessDefault(): NetworkCallResponse_I<ClientUserPageAccessModel> {
    const access: ClientUserPageAccessModel = {};
    return { data: access, message: "", success: false }
  }

  private _clientUserAccess: NetworkCallResponse_I<ClientUserPageAccessModel> = this._clientUserAccessDefault;

  public set clientUserAccess(value: NetworkCallResponse_I<ClientUserPageAccessModel>) {
    this._clientUserAccess = value;
    this.requestUpdate();
  }

  public get clientUserAccess(): NetworkCallResponse_I<ClientUserPageAccessModel> {
    return this._clientUserAccess;
  }

  async connectedCallback() {
    super.connectedCallback();
    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this.page_type === "mine") {
      this.isEditable = true;
    } else {
      if (this.editAccess) {
        this.isEditable = true;
      } else {
        this.isEditable = false;
      }
    }
    return html`
      <div class="">
        <div class="my-2">
          ${this.profileForm}
        </div>
      
      </div>
    `;
  }

  private get profileForm() {

    let clientId = 0;
    if (this._activeBranchId !== null) {
      clientId = this._activeBranchId[0].accountId;
    }

    const clientUser = this.clientUser,
      _data = clientUser.data,
      DATA = Array.isArray(_data) ? _data[0] : _data,
      SUCCESS = clientUser.success;
    if (SUCCESS) {
      return html`
        <div class="w-full">
          <div class="flex justify-center my-1">
            <div class="form-container flex justify-center">
              <div class="app-container- !px-0">
                <div class="app-container--row !px-0">
                  <div class="app-container--col-md-12">
                    <header
                      class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mb-2">
                      <label for="" class="label">
                        <mwc-icon class="icon">format_strikethrough</mwc-icon>
                        <h1 class="h1 !text-red-400">Member</h1>
                        <h3 class="h3">Update Profile Picture!</h3>
                      </label>
                    </header>
                    <form method="post" action="#" class="form !my-1" make-general-posts="client-user"
                      enctype="multipart/form-data">
                      <pdb-membership-update-view-photo headTitle="${DATA.firstname} ${DATA.surname}'s Photo"
                        inputId="profilePicture" inputName="profilePicture" inputLabel="Update Profile Picture"
                        ?inputRequired="${true}" currentImage="${DATA.profilePicture}">
                      </pdb-membership-update-view-photo>
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
    } else {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User </span>: undefined error</h4>
          </div>
        </div>
      `;
    }
  }

  firstUpdated() {
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    const clientUser = this.clientUser,
      _data = clientUser.data,
      DATA = Array.isArray(_data) ? _data[0] : _data,
      SUCCESS = clientUser.success;
    if (SUCCESS) {
      await PATCH_ClientUser(DATA.id)
    }
  }

  createRenderRoot() {
    return this;
  }
}
