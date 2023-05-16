import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import './form/group_subgroup';
import { base64Decode } from '@@addons/functions/base64';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from './page__id';
import { ClientUserAccess_I, ClientUserAccess_S } from '@@addons/interfaces/clients/users/access';
import { GET_ClientUserAccess } from '@@addons/network/clients/users/access';
import { getUserLoginInfoCookie } from '@@addons/functions/login';


@customElement("pdb-admin-user-add-group-subgroup-form")
export class PdbAdminUserAddGroupSubgroupForm extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private userId?: number = 0;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Number })
  private loggedUserId?: number = 0;

  @property({ type: Boolean })
  private editAccess?: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    this.getUserId();
    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    
    this.loggedUserId = getUserLoginInfoCookie().user.id;

    await this.getLoggedUserAccess();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.create, viewType: "Both"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <div class="shadow bg-white p-2 my-2">
        <pdb-admin-user-group-subgroup-form .userId="${this.userId}" class="" ?editAccess="${this.editAccess}"></pdb-admin-user-group-subgroup-form>
      </div>
    `;
  }

  firstUpdated() { }

  private getUserId() {
    let userId = urlQueryParamsGet('user-id');
    // console.log({ userId });
    let _userId = userId !== null ? base64Decode(userId) : null;
    this.userId = Number.isNaN(_userId) ? null : Number(_userId);
    // console.log({ "this.userId": this.userId });
  }

  private async getLoggedUserAccess() {
    const _networkResponse = await GET_ClientUserAccess<ClientUserAccess_I>(null, "?logged_user_this&userId=" + this.loggedUserId);
    if (_networkResponse !== null) {
      if (_networkResponse.response.success) {
        const datas = _networkResponse.response.data;
        if (Array.isArray(datas)) {
          datas.forEach((data: ClientUserAccess_I) => {
            data = ClientUserAccess_S(data);
            console.log({data});
            
            if (data.page.id === PAGE__IDS.create) {
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
