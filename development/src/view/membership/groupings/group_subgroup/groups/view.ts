import '@@assets/styles/views/attendance/clocking/main.scss';
import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@@addons/widgets/profile_photo';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import '../../../members/select-member-type';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { GroupingsGroup_I } from '@@addons/interfaces/members/groupings/group';
import { DELETE_GroupingsGroup } from '@@addons/network/members/groupings/group/group/delete';
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '../../page__id';


@customElement("membership-groupings-group_subgroup-group-view")
export class MembershipGroupingsGroupSubgroupGroupView extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Number })
  private _memberType?: number = 1;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: String })
  private datatablePathUrl: string = "members/groupings/group/table";

  private filterBox: FilterFieldBox;

  @property({ type: Boolean })
  private filterBoxStarted?: boolean = false;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];
    
    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });

    await this.getBranches();
    await this.getClientMemberCategories();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.grouping, viewType: "View"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    return html`
      <div class="shadow bg-white p-2">
        <span class="flex flex-row md:flex-col w-100"></span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}<br />
        </div>
        <div class="block my-1">
          ${this.table}
        </div>
      </div>
    `;
  }

  private renderColOne(data: any, type: any, groupInfo: GroupingsGroup_I) {
    // console.log({groupInfo});
    return `
      <div class="flex flex-col whitespace-normal justify-between content-between">
        <p class="p-2 shadow-sm my-2 w-full">${groupInfo.group}</p>
      </div>
    `;
  }

  private renderColTwo(data: any, type: any, groupInfo: GroupingsGroup_I) {
    // console.log({groupInfo});
    const GROUP_ID = groupInfo.id,
      GROUP_CODE = base64Encode(String(GROUP_ID), true);
    return `
      <div class="flex flex-col whitespace-normal justify-between content-between">
        <mwc-button class="button danger" outlined delete-this-item="${GROUP_ID}">
          <mwc-icon class="mr-1">delete_forever</mwc-icon> Delete
        </mwc-button>
        <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${CONSTANTS.URLS.PDB_CLIENT}groupings/group/edit-group?view-group=${GROUP_CODE}"
          label="Update">
        </link-button>
      </div>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
    filterNameId_branchId = "branchId",
    filterNameId_memberType = "memberCategoryId";

    let newObject:any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_branchId) || (key === filterNameId_memberType)) {
        // console.log({value, });
        
        newObject[key] = value;
      }
    } 

    if (!(filterNameId_branchId in newObject)) {
      let userBranch = 0;
      if (this._userLoginInfo !== null) {
        if (this._userLoginInfo.length > 0) {
          userBranch = this._userLoginInfo[0].user.branchId;
        }
      }
      newObject[filterNameId_branchId] = userBranch;
    }

    if (!(filterNameId_memberType in newObject)) {
      newObject[filterNameId_memberType] = "1";
    }

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);

    return (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin;
  }

  private get filterForm() {
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }

    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_branchId = "branchId",
      filterNameId_memberType = "memberCategoryId";

    let filterNameId_memberTypeVal: number = 1,
      filterNameId_branchIdVal: number = userBranch;
    
      for (const key in _urlQueryParams) {
        let value = String(_urlQueryParams[key]);
        value = value === "" ? null : value;
        if (key === filterNameId_memberType) {
          filterNameId_memberTypeVal = Number(value);
        }
        if (key === filterNameId_branchId) {
          filterNameId_branchIdVal = Number(value);
        }
    }
    
    const branchField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
            name="${filterNameId_branchId}" id="${filterNameId_branchId}"
            outlined required>
            ${userBranch === 1 ? html`
              <mwc-list-item value="0">Select Branch</mwc-list-item>
              ${this._branches.map((value) => {
                if (filterNameId_branchIdVal === value.id) {
                  return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                }
              })}
            `: html`
              ${this._branches.map((value) => {
                if (value.id === userBranch) {
                  return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                }
              })}
            `}
          </mwc-select>
        </div>
      </div>`;

    const memberCategoryField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${filterNameId_memberTypeVal}" 
            name="${filterNameId_memberType}" id="${filterNameId_memberType}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;
      returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${branchField} ${memberCategoryField}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`
    return returnHtml;
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Group', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Group', },
      { title: 'Action', },
    ];
  }

  private get table(): TemplateResult {
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "" + this.datatablePathUrl + "?datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    // console.log({URL});
    
    const __dataTable = this.__dataTable(URL);
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  firstUpdated() {
    setInterval(() => {
      if (this.filterSectionContextContainer !== null) {
        if (!this.filterBoxStarted) {
          // let branchId = 0;
          // if (this._activeBranchId !== null) {
          //   branchId = this._activeBranchId[0].id;
          // }
          this.filterBox = new FilterFieldBox({
            selectors: {
              container: this.filterSectionContextContainer,
              form: this.filterSectionContextForm,
              filterSectionContextBtn: this.filterSectionContextBtn,
            }, unmutableInputNames: [
              // { name: 'branchId', value: String(branchId) },
            ],
          }); 
          this.filterBoxStarted = true;
          this.dialog();
        }
      }
    });   
  }

  private __dataTable(url: string): DataTables_Settings_I {
    const __this = this;

    // console.log({ "projects": this._questionnaireResponses });
    
    let dataTable: DataTables_Settings_I = {
      'order': [[0, 'desc']],
      'processing': true,
      'serverSide': true,
      'ajax': {
        url: url,
        dataSrc: 'data',
        apiType: "akwaabaApp",
      },
      "columns": [
        {
          data: 'id',
          render: (data: any, type: any, groupInfo: GroupingsGroup_I) => __this.renderColOne(data, type, groupInfo),
          orderable: true
        },
        {
          data: 'group',
          render: (data: any, type: any, groupInfo: GroupingsGroup_I) => __this.renderColTwo(data, type, groupInfo),
          orderable: true
        },

      ],
      'columnDefs': [
        {
          targets: ['_all'],
          className: 'mdc-data-table__cell',
          // @ts-ignore
          checkboxes: {
            selectRow: true
          },
        }
      ],
      'lengthMenu': [10, 25, 50, 100, 500, 1000],
      "drawCallback": async function (e) {
        const aoData = e.aoData;
        // console.log({ aoData })
        __this.deleteMemberFx();
      },
      "responsive": false,
      "dom": 'Blfrtip',
      buttons: [
        'selected',
        'selectedSingle',
        'selectAll',
        'selectNone',
        'selectRows',
        'selectColumns',
        'selectCells',
        // 'pdf',
        // 'excel',
        // 'copy',
        // 'csv',
      ],
      select: true,
      // "select": {
      //   "style": "multi"
      // },
    };
    return dataTable;
  }

  private deleteMemberFx() {
    document.querySelectorAll('[delete-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.deleteItemFromList(e);
      })
    });
  }

  async deleteItemFromList(e: Event) {
    e.preventDefault();
    // console.log({ e });
    // @ts-ignore
    const _itemId = e.currentTarget.getAttribute('delete-this-item'),
      itemId = Number.isNaN(_itemId) ? 0 : Number(_itemId);
    await DELETE_GroupingsGroup(itemId);
  }

  private dialog() {
    document.querySelectorAll('[open-dialog-btn]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.showDialog(e);
      })
    });

  }

  private showDialog(event: any) {
    // event.preventDefault();
    // console.log({event})

    const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  private async getBranches() {
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
  
  private async getClientMemberCategories() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategories_I>();
    let __memberCategories: GroupingsMemberCategories_I[] = [];

    if (_networkResponse === null) {
      __memberCategories.push({ id: 0, category: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsMemberCategories_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __memberCategories = DATA;
      }
    }
    const new_data: Array<GroupingsMemberCategories_I> = [];
    new_data.push(...this._memberCategories, ...__memberCategories);
    this._memberCategories = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
