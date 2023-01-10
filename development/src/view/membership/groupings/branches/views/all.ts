import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { ClientBranches_I } from '@@addons/interfaces/clients/branches';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { DELETE_ClientBranch } from '@@addons/network/clients/branches/delete';
import { CONSTANTS } from '@@addons/constants';


@customElement("membership-groupings-branches-all")
export class MembershipGroupingsBranchesAll extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    
    await this.getClientBranches();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this._branches === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._branches === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Branches</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      return html`
        ${this.table}
      `;
    }
  }

  private get table(): TemplateResult {
    if (this._branches.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Branch</b>
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
                ${this.getBranches}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `;
    }
  }

  private get getBranches() {
    return html`
      ${this._branches.map((item, i) => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a class="text-blue-700" href="${CONSTANTS.URLS.PDB_CLIENT}groupings/branch/edit-branch?branch-id=${item.id}">${item.name}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              ${item.id === 1 ? html`` : html`
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}" 
                  @click="${this.deleteBranch}"></mwc-icon-button>
              `}
              
            </td>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() {
    
  }

  async deleteBranch(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const meetingEventId = Number(e.currentTarget.getAttribute('delete-this-item'));
    if (meetingEventId !== 1) {
      await DELETE_ClientBranch(meetingEventId);
    }
  }

  private async getClientBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranches_I>();
    let __branches: ClientBranches_I[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: ClientBranches_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __branches = DATA;
      }
    }
    const new_data: Array<ClientBranches_I> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
