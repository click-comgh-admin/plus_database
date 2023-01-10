import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { base64Decode } from '@@addons/functions/base64';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { GET_ClientUsers } from '@@addons/network/clients/users';
import '@material/mwc-circular-progress';
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@addons/widgets/alert';
import './form/group_subgroup';
import { ClientUserAccess_I, ClientUserAccess_S } from '@@addons/interfaces/clients/users/access';
import { GET_ClientUserAccess } from '@@addons/network/clients/users/access';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { GET_ClientUserGroupSubgroup } from '@@addons/network/clients/users/group_subgroup';
import { ClientUserGroupSubgroupModel, Convert as cugsmConvert } from '@@addons/interfaces/clients/users/model/group_subgroup';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from './page__id';


@customElement("pdb-admin-user-edit-group-subgroup-form")
export class PdbAdminUserEditGroupSubgroupForm extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private userId?: number = 0;

  @property({ type: Number })
  private loggedUserId?: number = 0;

  @property({ type: Boolean })
  private editAccess?: boolean = false;

  @property({ type: String })
  public page_type: "mine" | "not-mine" = "mine";

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  private __clientUser: NetworkCallResponse_I<ClientUsers_I> = null;

  public set _clientUser(value: NetworkCallResponse_I<ClientUsers_I>) {
    this.__clientUser = value;
    this.requestUpdate();
  }

  public get _clientUser(): NetworkCallResponse_I<ClientUsers_I> {
    return this.__clientUser;
  }

  private get _clientUserGroupSubgroupDefault(): NetworkCallResponse_I<ClientUserGroupSubgroupModel> {
    const groupSubgroup: ClientUserGroupSubgroupModel = {};
    return { data: groupSubgroup, message: "", success: false }
  }

  private __clientUserGroupSubgroup: NetworkCallResponse_I<ClientUserGroupSubgroupModel> = this._clientUserGroupSubgroupDefault;

  public set _clientUserGroupSubgroup(value: NetworkCallResponse_I<ClientUserGroupSubgroupModel>) {
    this.__clientUserGroupSubgroup = value;
    this.requestUpdate();
  }

  public get _clientUserGroupSubgroup(): NetworkCallResponse_I<ClientUserGroupSubgroupModel> {
    return this.__clientUserGroupSubgroup;
  }

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    this.getUserId();

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    if ((this.userId === 0) || (this.userId === null) || (Number.isNaN(this.userId))) { } else {
      await this.getClientUser();
      if (this._clientUser.success) {
        await this.getLoggedUserAccess();
        await this.getClientUserGroupSubgroup();

        if (this.userId === this.loggedUserId) {
          this.page_type = "mine";
        } else {
          this.page_type = "not-mine";
          // this.editAccess
        }
      }
    }

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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.update, viewType: "Both"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }

    if ((this.userId === 0) || (this.userId === null) || (Number.isNaN(this.userId))) {
      const header = html`<h4 class="text-white">Error</h4>`;
      const content = html`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;
      return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
    } else {

      if (this._clientUser === null) {
        return html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;
      }
      if (this._clientUser === undefined) {
        return html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Schedule </span>: undefined error</h4>
            </div>
          </div>
        `;
      }
      return html`
        <div class="shadow bg-white p-2 my-2">
          <pdb-admin-user-group-subgroup-form edit="true" page_type="${this.page_type}" ?editaccess="${this.editAccess}" .clientUser="${this._clientUser}"
            .clientUserGroupSubgroup="${this._clientUserGroupSubgroup}" .userId="${this.userId}">
          </pdb-admin-user-group-subgroup-form>
        </div>
      `;
    }
  }

  firstUpdated() { }

  private getUserId() {
    let userId = urlQueryParamsGet('user-id');
    // console.log({ userId });
    let _userId = userId !== null ? base64Decode(userId) : null;
    this.userId = Number.isNaN(_userId) ? null : Number(_userId);
    // console.log({ "this.userId": this.userId });
  }

  private async getClientUser() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_ClientUsers<ClientUsers_I>(this.userId, "?branchId=" + branchId);
    if (_networkResponse === null) {
      this._clientUser = undefined;
    } else {
      this._clientUser = _networkResponse.response;
    }
  }

  private async getClientUserGroupSubgroup() {
    const _networkResponse = await GET_ClientUserGroupSubgroup<any>(null, "?userId=" + this.userId);
    if (_networkResponse === null) {
      this._clientUserGroupSubgroup = undefined;
    } else {
      const DATA = _networkResponse.response.data;

      if (Array.isArray(DATA)) {
        // @ts-ignore
        _networkResponse.response.data = DATA.map((data: any) => cugsmConvert.toClientUserGroupSubgroupModel(JSON.stringify(data)))
      } else {
        _networkResponse.response.data = [cugsmConvert.toClientUserGroupSubgroupModel(JSON.stringify(DATA))];
      }
      this._clientUserGroupSubgroup = _networkResponse.response;
    }
  }

  private async getLoggedUserAccess() {
    let userId = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userId = this._userLoginInfo[0].user.id;
      }
    }
    this.loggedUserId = userId;
    const _networkResponse = await GET_ClientUserAccess<ClientUserAccess_I>(null, "?logged_user_this&userId=" + this.loggedUserId);
    if (_networkResponse !== null) {
      if (_networkResponse.response.success) {
        const datas = _networkResponse.response.data;
        if (Array.isArray(datas)) {
          datas.forEach((data: ClientUserAccess_I) => {
            data = ClientUserAccess_S(data);
            if (data.page.id === 14) {
              // "id": 14,
              // "page": "Account Users"
              this.editAccess = true;
            }
          });
        }
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
