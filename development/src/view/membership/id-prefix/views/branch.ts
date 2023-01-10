import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '../add/branch';
import '../edit/branch';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { ClientBranchModel, Convert as cbmConvert } from '@@addons/interfaces/clients/branches/model';
import { MembershipMemberBranchIDPrefixModel, Convert as mmbidpConvert } from '@@addons/interfaces/members/id_prefix/branch';
import { DELETE_MemberBranchIdPrefix } from '@@addons/network/members/id_prefix/branch/delete';
import { GET_MemberBranchIdPrefix } from '@@addons/network/members/id_prefix/branch';
import { AppSetup } from '@@addons/functions/app_settings';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../page__id';


@customElement("id-branch-prefix-view")
export class IdBranchPrefixView extends LitElement {
  constructor() {
    super(); 
  }

  @property({ type: Number })
  public prefixId: number = 0;

  @property({ type: Number })
  public currentPrefixId: number = 0;

  @property({ type: Array })
  public prefixEdit: MembershipMemberBranchIDPrefixModel[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Array })
  private _memberPrefixIds: MembershipMemberBranchIDPrefixModel[] = [];

  @property({ type: Array })
  private _branches: ClientBranchModel[] = [];

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);
    this.urlQueryParams = urlQueryParams();
    AppSetup();
    
    await this.getMemberBranchIdPrefix();
    await this.getClientBranches();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this._memberPrefixIds === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._memberPrefixIds === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Prefix Id</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="shadow bg-white p-2 mb-4">
          ${this.form}
          <hr />
          <div class="flex justify-end my-2">
            <mwc-button raised label="Add Branch Prefix" class="ml-1 success" icon="add" @click="${this.addNew}"></mwc-button> 
          </div>
          ${this.table}
        </div>
      `;
    }
  }

  private get form(): TemplateResult {
    if (this._memberPrefixIds.length > 0) {
      if (this.prefixId === 0) {
        return html`
          <id-branch-prefix-add .branches="${this._branches}"></id-branch-prefix-add>
        `;
      } else {
        let htmlEdit = html``,
          _htmlEdit = html``;
        return html`<id-branch-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}" .branches="${this._branches}"></id-branch-prefix-edit>`;
      }
    } else {
      return html`
        <id-branch-prefix-add .branches="${this._branches}"></id-branch-prefix-add>
      `;
    }
  }

  private get table(): TemplateResult {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.identity_prefix, viewType: "View"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    if (this._memberPrefixIds.length > 0) {
      return html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member ID Prefix</b>
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
                ${this.getMemberPrefixIds}
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

  private get getMemberPrefixIds() {
    return html`
      ${this._memberPrefixIds.map((item, i) => {
        // console.log({"item-item-item": item})
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.branchID.name} -> <b>${item.prefix}</b>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${item.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${item.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `;
      })}
    `;
  }

  firstUpdated() {
    
  }

  async addNew(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    this.prefixId = 0;

    window.scrollTo({ top: 0, });
    // @ts-ignore
    document.querySelector('mwc-textfield[name="prefix"]').focus();
  }

  async editMemberPrefixId(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const prefixId = Number(e.currentTarget.getAttribute('edit-this-item'));
    this.prefixId = prefixId;

    window.scrollTo({ top: 0, });
    // @ts-ignore
    document.querySelector('mwc-textfield[name="prefix"]').focus();
    const _branches = this._branches;
    for (const iterator of this._memberPrefixIds) {
      if (iterator.id === this.prefixId) {
        this.prefixEdit[0] = iterator;
        this._branches = [];
        setTimeout(() => {
          this._branches = _branches;
        }, 100);
        
      }
    }
  }

  async deleteMemberPrefixId(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const prefixId = Number(e.currentTarget.getAttribute('delete-this-item'));
    await DELETE_MemberBranchIdPrefix(prefixId);
  }
  
  private async getMemberBranchIdPrefix() {
    const _networkResponse = await GET_MemberBranchIdPrefix<MembershipMemberBranchIDPrefixModel>();
    let __memberPrefixIds: MembershipMemberBranchIDPrefixModel[] = [];

    if (_networkResponse === null) {
      __memberPrefixIds.push({ id: 0, prefix: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: MembershipMemberBranchIDPrefixModel[] = data.map(value => {
          return mmbidpConvert.toMembershipMemberBranchIDPrefixModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __memberPrefixIds = [...[], ...DATA];
      }
    }

    const new_data: Array<MembershipMemberBranchIDPrefixModel> = [];
    new_data.push(...this._memberPrefixIds, ...__memberPrefixIds);
    this._memberPrefixIds = new_data;
  }
  
  private async getClientBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranchModel>();
    let __branches: ClientBranchModel[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: ClientBranchModel[] = data.map(value => {
          return cbmConvert.toClientBranchModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __branches = [...[], ...DATA];
      }
    }

    const new_data: Array<ClientBranchModel> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
