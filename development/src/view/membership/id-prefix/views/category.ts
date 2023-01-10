import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '../add/category';
import '../edit/category';
import { GET_MemberCategoryIdPrefix } from '@@addons/network/members/id_prefix/category';
import { MembershipMemberCategoryIDPrefixModel, Convert as mmidpmConvert } from '@@addons/interfaces/members/id_prefix/category';
import { DELETE_MemberCategoryIdPrefix } from '@@addons/network/members/id_prefix/category/delete';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { GroupingsMemberCategoryModel, Convert as gmcmConvert } from '@@addons/interfaces/members/groupings/member_categories/model';
import { AppSetup } from '@@addons/functions/app_settings';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../page__id';

@customElement("id-category-prefix-view")
export class IdCategoryPrefixView extends LitElement {
  constructor() {
    super(); 
  }

  @property({ type: Number })
  public prefixId: number = 0;

  @property({ type: Array })
  public prefixEdit: MembershipMemberCategoryIDPrefixModel[] = [];

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Array })
  private _memberPrefixIds: MembershipMemberCategoryIDPrefixModel[] = [];

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategoryModel[] = [];

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);
    this.urlQueryParams = urlQueryParams();
    AppSetup();
    
    await this.getMemberCategoryIdPrefix();
    await this.getClientMemberCategories();
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
            <mwc-button raised label="Add Category Prefix" class="ml-1 success" icon="add" @click="${this.addNew}"></mwc-button> 
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
          <id-category-prefix-add .memberCategories="${this._memberCategories}"></id-category-prefix-add>
        `;
      } else {
        return html`
          <id-category-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}" .memberCategories="${this._memberCategories}"></id-category-prefix-edit>
        `;
      }
    } else {
      return html`
        <id-category-prefix-add .memberCategories="${this._memberCategories}"></id-category-prefix-add>
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
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${item.memberCategoryID.category} -> <b>${item.prefix}</b>
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

    const _memberCategories = this._memberCategories;
    for (const iterator of this._memberPrefixIds) {
      if (iterator.id === this.prefixId) {
        this.prefixEdit[0] = iterator;
        this._memberCategories = [];
        setTimeout(() => {
          this._memberCategories = _memberCategories;
        }, 100);
        
      }
    }
  }

  async deleteMemberPrefixId(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const prefixId = Number(e.currentTarget.getAttribute('delete-this-item'));
    await DELETE_MemberCategoryIdPrefix(prefixId);
  }
  
  private async getMemberCategoryIdPrefix() {
    const _networkResponse = await GET_MemberCategoryIdPrefix<MembershipMemberCategoryIDPrefixModel>();
    let __memberPrefixIds: MembershipMemberCategoryIDPrefixModel[] = [];

    if (_networkResponse === null) {
      __memberPrefixIds.push({ id: 0, prefix: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: MembershipMemberCategoryIDPrefixModel[] = data.map(value => {
          return mmidpmConvert.toMembershipMemberCategoryIDPrefixModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __memberPrefixIds = [...[], ...DATA];
      }
    }

    const new_data: Array<MembershipMemberCategoryIDPrefixModel> = [];
    new_data.push(...this._memberPrefixIds, ...__memberPrefixIds);
    this._memberPrefixIds = new_data;
  }
  
  private async getClientMemberCategories() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategoryModel>();
    let __memberCategories: GroupingsMemberCategoryModel[] = [];

    if (_networkResponse === null) {
      __memberCategories.push({ id: 0, category: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GroupingsMemberCategoryModel[] = data.map(value => {
          return gmcmConvert.toGroupingsMemberCategoryModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __memberCategories = [...[], ...DATA];
      }
    }
    
    const new_data: Array<GroupingsMemberCategoryModel> = [];
    new_data.push(...this._memberCategories, ...__memberCategories);
    this._memberCategories = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
