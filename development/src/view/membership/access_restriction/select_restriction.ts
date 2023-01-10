import '@@assets/styles/views/branch/main.scss';
import "../../../assets/styles/views/home/dashboard.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-button';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@material/mwc-circular-progress';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { base64Encode } from '@@addons/functions/base64';
import { GET_MembershipAccessRestrictions } from '@@addons/network/members/membership/access_restriction/restrictions';
import { MembershipAccessRestrictionModel, Convert as msrmConvert } from '@@addons/interfaces/members/access_restriction';
/** START PERMISSION IMPORTS */
import '../../no_access/account_expired';
import '../../no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from './page__id';
/** END PERMISSION IMPORTS */


@customElement("membership-access_restriction-select_restriction")
export class MembershipAccessRestrictionSelectRestriction extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private restrictionUsersBaseUrl: string = "/member/access-restriction/user-restriction?view-restriction=";

  @property({ type: String })
  private restrictionUpdateBaseUrl: string = "/member/access-restriction/update-user-restriction?view-restriction=";

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  private __restrictions: NetworkCallResponse_I<MembershipAccessRestrictionModel> = null;

  public set _restrictions(value: NetworkCallResponse_I<MembershipAccessRestrictionModel>) {
    this.__restrictions = value;
    this.requestUpdate();
  }

  public get _restrictions(): NetworkCallResponse_I<MembershipAccessRestrictionModel> {
    return this.__restrictions;
  }

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];

    await this.getMembers();

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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.view, viewType: "Both"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }

    if (this._restrictions === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._restrictions === undefined) {
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
      ${this.table}
    `;
  }

  private get table() {
    return html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>#</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Member(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <mwc-icon>tune</mwc-icon>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  private get tableBody() {

    const DATA = this._restrictions.data;
    // console.log({ "this._restrictions": this._restrictions });

    if (Array.isArray(DATA)) {
      return DATA.map(restriction => {
        const ID = base64Encode(String(restriction.id), true);
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <p class="ml-1">${restriction.restriction!}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.restrictionUpdateBaseUrl}${ID}" label="Update"></link-button>
              </div>
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="success" raised bClass="button success mr-2"
                  href="${this.restrictionUsersBaseUrl}${ID}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `;
      });
    }
    return html``;
  }

  firstUpdated() { }

  private async getMembers() {
    const _networkResponse = await GET_MembershipAccessRestrictions<MembershipAccessRestrictionModel>(null);
    if (_networkResponse === null) {
      this._restrictions = undefined;
    } else {
      this._restrictions = _networkResponse.response;
    }
  }

  createRenderRoot() {
    return this;
  }
}
