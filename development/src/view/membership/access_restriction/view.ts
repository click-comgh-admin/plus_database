import '@@assets/styles/views/attendance/clocking/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@@addons/widgets/profile_photo';
import '@@addons/widgets/form/new/select';
import '@@addons/widgets/alert';
import '@material/mwc-circular-progress';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { MembershipOrganizationUserModel, Convert as moumConvert } from '@@addons/interfaces/members/user/organization_model';
import { MembershipAccessRestrictionModel } from '@@addons/interfaces/members/access_restriction';
import { GET_MembershipAccessRestrictions } from '@@addons/network/members/membership/access_restriction/restrictions';
import { MembershipUserAccessRestrictionModel, Convert as muarmConvert } from '@@addons/interfaces/members/access_restriction/user';
import { DELETE_MembershipAccessRestrictionAssignment } from '../../../addons/network/members/membership/access_restriction/remove_user';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from './page__id';


@customElement("membership-access_restriction-view")
export class MembershipAccessRestrictionView extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Number })
  private restrictionId?: number = 0;

  @property({ type: String })
  private restrictionIdEnc?: string = null;

  @property({ type: Boolean })
  private restrictionCalled?: boolean = false;


  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _restriction: MembershipAccessRestrictionModel[] = [];

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  @property({ type: String })
  private datatablePathUrl: string = "members/access/assignment";

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
      }, unmutableInputNames: [
        {name: "view-restriction", value: this.restrictionIdEnc}
      ]
    });

    this.getRestrictionId();
    await this.getBranches();
    await this.getRestriction();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.view, viewType: "View"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }
    if (this.restrictionCalled === false) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._restriction.length < 1) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Access Restriction </span>: not found!</h4>
          </div>
        </div>
      `;
    }
    const header = html`<h4 class="text-dark">Access Restriction</h4>`;
    const content = html`<div>
      <h1 class="text-dark mb-2 text-xl">${this._restriction[0].restriction}</h1>
    </div>`;
    return html`
      <div class="mb-2">
        <alert-card info .header="${header}" .content="${content}"></alert-card>
      </div>
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
    `;
  }

  private renderMemberInfo(data: any, type: any, memberAccessInfo: any) {
    // console.log({memberAccessInfo});
    
    if (memberAccessInfo.memberInfo.accountType === 1) {
      const memberAccess: MembershipUserAccessRestrictionModel = muarmConvert.toMembershipUserAccessRestrictionModel(JSON.stringify(memberAccessInfo)),
        member = memberAccess.memberInfo;
      // console.log({memberAccess})
      const MEMBER_ID = base64Encode(String(member.id), true);
      return `
        <div class="flex flex-col whitespace-normal justify-between content-between">
          <div class="flex m-1 justify-evenly">
            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""
              click-to-open="${this.memberProfileBaseUrl}${MEMBER_ID}" type="member"
              url="${member.profilePicture}" size="32"></user-profile-photo>
          </div>
          <div class="block m-1">
            <span class="shadow p-1 block bg-white rounded text-dark">
              <b>Name</b>: ${member.firstname} ${member.middlename} ${member.surname}
            </span>
          </div>
        </div>
      `;
    } else {
      const member: MembershipOrganizationUserModel = moumConvert.toMembershipOrganizationUserModel(JSON.stringify(memberAccessInfo.memberInfo));
      return `
        <div class="flex flex-col whitespace-normal justify-between content-between">
          <div class="flex m-1 justify-evenly">
            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="false"
              click-to-open="false" type="member"
              url="${member.logo}" size="32"></user-profile-photo>
          </div>
          <div class="block m-1">
            <span class="shadow p-1 block bg-white rounded text-dark">
              <b>Org. Name</b>: ${member.organizationName}
            </span>
          </div>
        </div>
      `;
    }
  }

  private removeFromList(data: any, type: any, memberAccessInfo: MembershipUserAccessRestrictionModel) {
    // console.log({memberAccessInfo});
    const ACCESS_ID = memberAccessInfo.id;

    return `
      <div class="flex flex-col whitespace-normal justify-between content-between">
        <mwc-button class="button warning" outlined delete-this-item="${ACCESS_ID}" >
          <mwc-icon class="mr-1">delete_forever</mwc-icon> Remove
        </mwc-button>
      </div>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
    filterNameId_branchId = "branchId";

    let newObject:any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if (key === filterNameId_branchId) {
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
      filterNameId_branchId = "branchId";

    let filterNameId_memberTypeVal: number = 1,
      filterNameId_branchIdVal: number = userBranch,
      filterNameId_groupVal: number = null;
    
      for (const key in _urlQueryParams) {
        let value = String(_urlQueryParams[key]);
        value = value === "" ? null : value;
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
            outlined required @change="${this.branchChange}">
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
      returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${branchField}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="view-restriction" value="${this.restrictionIdEnc}" />
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

  async branchChange(e: Event) {
    // @ts-ignore
    const branchId = Number.isNaN(e.currentTarget.value)? 0: Number(e.currentTarget.value);
    // console.log({ "this.selectedBranch": this.selectedBranch });
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member', },
      { title: 'Info', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member', },
      { title: 'Info', },
    ];
  }

  private get table(): TemplateResult {
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "" + this.datatablePathUrl + "?datatable_plugin&restrictionId=" + this.restrictionId;

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
          render: (data: any, type: any, memberAccessInfo: MembershipUserAccessRestrictionModel) => __this.renderMemberInfo(data, type, memberAccessInfo),
          orderable: true
        },
        {
          data: 'inTime',
          render: (data: any, type: any, memberAccessInfo: MembershipUserAccessRestrictionModel) => __this.removeFromList(data, type, memberAccessInfo),
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

  private getRestrictionId() {
    let restrictionId = urlQueryParamsGet('view-restriction');
    // console.log({ restrictionId });
    let _restrictionId = restrictionId !== null ? base64Decode(restrictionId) : null;
    this.restrictionId = Number.isNaN(_restrictionId) ? null : Number(_restrictionId);
    // console.log({ "this.restrictionId": this.restrictionId });
    this.restrictionIdEnc = base64Encode(String(this.restrictionId), true);
  }

  private async getRestriction() {
    const _networkResponse = await GET_MembershipAccessRestrictions<MembershipAccessRestrictionModel>(this.restrictionId);
    this.restrictionCalled = true;
    if (_networkResponse === null) {
      this._restriction = [];
    } else {
      if (_networkResponse.response.success && 'restriction' in _networkResponse.response.data) {
        
        const restriction: MembershipAccessRestrictionModel = _networkResponse.response.data;
        this._restriction = [restriction];
      } else {
        this._restriction = [];
      }
    }
  }

  private deleteMemberFx() {
    document.querySelectorAll('[delete-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.deleteMemberFromList(e);
      })
    });
  }

  async deleteMemberFromList(e: Event) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const accessId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_MembershipAccessRestrictionAssignment(accessId);
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

  createRenderRoot() {
    return this;
  }
}
