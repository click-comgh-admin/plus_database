import '@@assets/styles/views/branch/main.scss';
import "../../../assets/styles/views/home/dashboard.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@material/mwc-circular-progress';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { GET_MembershipUsers } from '@@addons/network/members/membership/users';
import { MembershipUser_I } from '@@addons/interfaces/members/user';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import '@@addons/widgets/profile_photo';
import { base64Encode } from '@@addons/functions/base64';

@customElement("pdb-membership-edit")
export class PdbMembershipEdit extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  private __members: NetworkCallPaginResponse_I<MembershipUser_I> = null;

  public set _members(value: NetworkCallPaginResponse_I<MembershipUser_I>) {
    this.__members = value;
    this.requestUpdate();
  }

  public get _members(): NetworkCallPaginResponse_I<MembershipUser_I> {
    return this.__members;
  }

  async connectedCallback() {
    super.connectedCallback();
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

    if (this._members === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._members === undefined) {
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

    const DATA = this._members.results;
    // console.log({ "this._members": this._members });

    if (Array.isArray(DATA)) {
      return DATA.map(member => {
        const ID = base64Encode(String(member.id), true);
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${ID}" type="member"
                  url="${member.profilePicture}" size="16"></user-profile-photo>
                <p class="ml-1">${member.firstname} ${member.middlename} ${member.surname}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.memberProfileBaseUrl}${ID}" label="Open"></link-button>
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
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_MembershipUsers<MembershipUser_I>(null, "?branchId=" + branchId + "&length=5&memberType=1&order__by=-id");
    if (_networkResponse === null) {
      this._members = undefined;
    } else {
      this._members = _networkResponse.paginResponse;
    }
  }

  createRenderRoot() {
    return this;
  }
}
