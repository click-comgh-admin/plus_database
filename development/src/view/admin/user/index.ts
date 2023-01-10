import '@@assets/styles/views/admin/user/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import '@@addons/widgets/profile_photo';
import { base64Encode } from '@@addons/functions/base64';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { GET_GenericGender } from '@@addons/network/generic/gender';
import { GenericGenderInfo_I, GenericGenderInfo_S } from '@@addons/interfaces/generic/gender';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { Button } from '@material/mwc-button';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from './page__id';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';

@customElement("pdb-admin-user-all")
export class PdbAdminUserAll extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/admin/user/view-account?user-id=";

  @property({ type: String })
  private memberProfileAddBaseUrl: string = "/admin/user/add-account";

  @property({ type: String })
  private memberProfileEditBaseUrl: string = "/admin/user/update-account?user-id=";

  @property({ type: Array })
  private _genders: GenericGenderInfo_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  private __clientUsers: NetworkCallPaginResponse_I<ClientUsers_I> = null;

  public set _clientUsers(value: NetworkCallPaginResponse_I<ClientUsers_I>) {
    this.__clientUsers = value;
    this.requestUpdate();
  }

  public get _clientUsers(): NetworkCallPaginResponse_I<ClientUsers_I> {
    return this.__clientUsers;
  }

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  private filterBox: FilterFieldBox;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });

    await this.getGenders();
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
    return html`
      <div class="shadow bg-white p-2 my-1">
        <span class="flex flex-row md:flex-col w-100"></span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}
        </div>
      </div>
      <div class="shadow bg-white p-2 block mt-2 mb-3">
        <div class="row my-1">
          <div class="col-xl-4 col-md-6"></div>
          <div class="col-xl-4 col-md-6">
            <div class="flex flex-col items-end">
              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                href="${this.memberProfileAddBaseUrl}" label="Add Client User"></link-button>
            </div>
          </div>
        </div>
        <hr/>
        ${this.table}
      </div>
    `;
  }

  firstUpdated() {
    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_gender = "filter_gender",
      filterNameId_filter_name = "filter_name";

    let filterNameId_filter_genderVal: string = null,
      filterNameId_filter_nameVal:string = null;
    
    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      value = value === "" ? null : value;
      if (key === filterNameId_filter_gender) {
        filterNameId_filter_genderVal = value;
      }
      if (key === filterNameId_filter_name) {
        filterNameId_filter_nameVal = value;
      }
    }
    
    const nameField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${filterNameId_filter_name}" id="${filterNameId_filter_name}" label="Search By Name" 
            value="${filterNameId_filter_nameVal === null ? "" : filterNameId_filter_nameVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>
    `;
    
    const genderField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${filterNameId_filter_gender}" id="${filterNameId_filter_gender}" label="Select Gender" outlined required>
            ${this._genders.map((item) => {
              // console.log({item});
              if (filterNameId_filter_genderVal === null) {
                return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
              } else {
                if (Number(filterNameId_filter_genderVal) === item.id) {
                  return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                }
              }
            })}
          </mwc-select>
        </div>
      </div>
    `;
    
    // const submit = (e: any) => {
    //   e.preventDefault();
    //   const form: HTMLFormElement = document.querySelector('[make-general-posts="submit_filter_form"]');
    //   form.submit();
    // }
    
    // const clear_filter = (e: any) => {
    //   e.preventDefault();
    //   const form: HTMLFormElement = document.querySelector('[make-general-posts="submit_filter_form"]'),
    //     formData = new FormData(form),
    //     fields = [filterNameId_filter_gender, filterNameId_filter_name];
    //   formData.forEach((value, key) => {
    //     // console.log({value, key});
    //     document.querySelectorAll('[name="' + key + '"]').forEach(el => {
    //       // @ts-ignore
    //       el.value = "";
    //     });
    //   });
    //   form.submit();
    // }
    // this.filterBox.toggleFilterFieldsDefault();
    returnHtml = html`
      <form method="get" class="form " make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${nameField} ${genderField}
              <div class="col-xl-8 col-md-12">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;
    return returnHtml;
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member(s)', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member(s)', },
      { title: 'Action', },
    ];
  }

  private get table(): TemplateResult {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    let URL = "";
    URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "clients/user?branchId=" + branchId + "&order__by=firstname&datatable_plugin";

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

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_gender = "filter_gender",
      filterNameId_filter_name = "filter_name";

    let newObject:any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_filter_gender) || (key === filterNameId_filter_name)) {
        // console.log({value, });
        
        newObject[key] = value;
      }
    }

    // console.log({"newObject-newObject": newObject});
    

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);

    return (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin;
  }

  private async getGenders() {
    const _networkResponse = await GET_GenericGender<GenericGenderInfo_I>();
    // console.log({_networkResponse});
    
    let __genders: GenericGenderInfo_I[] = [];

    if (_networkResponse === null) {
      __genders.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GenericGenderInfo_I[] = data.map(value => {
          return GenericGenderInfo_S(value)
        });
        // console.log({DATA});
        __genders = DATA;
      }
    }
    
    const new_data: Array<GenericGenderInfo_I> = [];
    new_data.push(...this._genders, ...__genders);
    this._genders = new_data;
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
          render: function (data: any, type: any, member: ClientUsers_I) {
            // console.log({ data, type, member });
            const ID = base64Encode(String(member.id), true);
            return `<div class="flex items-center whitespace-normal">
                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${__this.memberProfileBaseUrl}${ID}" type="client"
                  url="${member.profilePicture}" size="16"></user-profile-photo>
                <p class="ml-1">${member.firstname} ${member.surname}</p>
              </div>`;
          },
          orderable: true
        },
        {
          data: 'firstname',
          render: function (data: any, type: any, member: ClientUsers_I) {
            const ID = base64Encode(String(member.id), true);
            return `<div class="flex flex-col md:flex-row items-center whitespace-normal">
              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                href="${__this.memberProfileBaseUrl}${ID}" label="Open"></link-button>
              <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                href="${__this.memberProfileEditBaseUrl}${ID}" label="Edit"></link-button>
            </div>`;
          },
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
      },
      "responsive": true,
      "dom": 'Blfrtip',
      buttons: [
        'selected',
        'selectedSingle',
        'selectAll',
        'selectNone',
        'selectRows',
        'selectColumns',
        'selectCells',
        'pdf',
        'excel',
        'copy',
        'csv',
      ],
      select: true,
      // "select": {
      //   "style": "multi"
      // },
    };
    return dataTable;
  }

  createRenderRoot() {
    return this;
  }
}
