import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property, query, } from 'lit/decorators.js';
import "@material/mwc-icon";
import "@material/mwc-icon-button";
import "../../../../assets/styles/views/home/dashboard.scss";
import { DELETE_UserConnectionAccount } from '@@addons/network/members/connections/accounts/delete';
import { UserConnectionAccount_I } from '@@addons/interfaces/members/connections/accounts';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { Button } from '@material/mwc-button';
import { QueryOptions } from 'select2';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import "@material/mwc-select";
import '@@addons/widgets/form/new/select';
import { UserConnectionType_I, UserConnectionType_S } from '@@addons/interfaces/members/connections/types';
import { GET_UserConnectionType } from '@@addons/network/members/connections/types';
import { MembershipUser_I, MembershipUser_S } from '@@addons/interfaces/members/user';
import { GET_MembershipUsers } from '@@addons/network/members/membership/users';
import { until } from 'lit/directives/until.js';


export function show_selection_member_id_filter(memberId: number) {
  if (memberId === 0) {
    return nothing;
  } else {
    const ___ = new PdbConnectionsMembersView();
    return html`
      <h4 class="font-semibold my-2">
        Current Selection: ${until(___.getMember(memberId), html`<span>Loading...</span>`)}
      </h4>
    `;
  }
}
@customElement("pdb-connections-members-view")
export class PdbConnectionsMembersView extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: Array })
  private _connection_accounts: UserConnectionAccount_I[] = [];

  @property({ type: Number })
  private startSearchPage1: number = 0;

  private filterBox: FilterFieldBox;

  @property({ type: String })
  private datatablePathUrl: string = "members/user-connection-account/member/";

  async connectedCallback() {
    super.connectedCallback();

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }, isOpen: true,
    });
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    if (this._connection_accounts === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._connection_accounts === undefined) {
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
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1 overflow-x-scroll">
        <hr class="my-2" />
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
      }, unmutableInputNames: [], isOpen: true,
    });
    
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_memberId = "memberId";

    let filterNameId_filter_memberIdVal: number = 0;

    let ajaxHeader: { Authorization?: string } = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;

    for (const key in _urlQueryParams) {
      let value = Number(_urlQueryParams[key]);
      value = Number.isNaN(value) ? 0 : value;
      if (key === filterNameId_filter_memberId) {
        filterNameId_filter_memberIdVal = value;
      }
    }

    const memberField = html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
          ${show_selection_member_id_filter(filterNameId_filter_memberIdVal)}
          <select-input class="w-100" id="${filterNameId_filter_memberId}" name="${filterNameId_filter_memberId}" label="Select Member"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;

    returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${memberField}
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

  private processClientUserSearch1(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="memberId"]');
    // console.log({ data, params, RESULTS, SELECTOR });

    let processedData: { id: number; text: string; }[] = [];
    if (TOTAL > 0) {
      var _data = RESULTS;
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const member: MembershipUser_I = MembershipUser_S(item);
        
        const id = member.id;
        const fullName = `${member.firstname} ${member.middlename} ${member.surname}`;
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({processedData});



    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private get ajaxFetchUrlParams1(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "", value: "" }
    ]
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Connection', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Connection', },
      { title: 'Action', },
    ];
  }

  private get getMemberId() {
    const filterNameId_filter_memberId = "memberId";
    let _memberId = urlQueryParamsGet(filterNameId_filter_memberId);
    const memberId = Number.isNaN(_memberId) ? 0 : Number(_memberId);
    // console.log({ "this.meetingEventId": this.meetingEventId });
    return memberId;
  }

  private get table(): TemplateResult {
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "" + this.datatablePathUrl + this.getMemberId + "?datatable_plugin";

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

  private renderMemberInfo(data: any, type: any, connectionInfo: UserConnectionAccount_I) {
    // console.log({connectionInfo});
    const memberId = connectionInfo.memberId;
    const connectionId = connectionInfo.connectionId;
    return `
      <div class="flex flex-col">
        <div class="flex flex-col lg:flex-row m-1 justify-start">
          <div class="flex">
            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>
            <p class="whitespace-nowrap text-sm ml-1">${connectionId.firstname} ${connectionId.middlename}
              ${connectionId.surname}</p>
          </div>
          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>
          <div class="flex">
            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>
            <p class="whitespace-nowrap text-sm ml-1">${memberId.firstname} ${memberId.middlename} ${memberId.surname}</p>
          </div>
        </div>
      </div>
    `;
  }

  private renderClockInInfo(data: any, type: any, connectionInfo: UserConnectionAccount_I) {
    // console.log({connectionInfo});
    const connectionType = connectionInfo.type;    
    return `
      <div class="justify-center content-center">
        <mwc-icon-button class="ml-1 danger" icon="delete_forever" 
          delete-this-item="${connectionInfo.id}" >
        </mwc-icon-button>
        <div class="flex flex-col">
          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>
          <div class="flex flex-col">
            <p class="whitespace-nowrap text-sm ml-1">${connectionType.type}</p>
            <p class="text-xs ml-1 whitespace-pre-wrap">${connectionType.description}</p>
          </div>
        </div>
      </div>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_memberId = "memberId";

    let newObject: any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_filter_memberId)) {
        // console.log({value, });

        newObject[key] = value;
      }
    }

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);

    return (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin;
  }

  private __dataTable(url: string): DataTables_Settings_I {
    const __this = this;

    // console.log({ "__this": __this, url });

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
          render: (data: any, type: any, connectionInfo: UserConnectionAccount_I) => __this.renderMemberInfo(data, type, connectionInfo),
          orderable: true
        },
        {
          data: 'inTime',
          render: (data: any, type: any, connectionInfo: UserConnectionAccount_I) => __this.renderClockInInfo(data, type, connectionInfo),
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
        __this.deleteConnectionAction();
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

  private deleteConnectionAction() {
    document.querySelectorAll('[delete-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.deleteConnection(e);
      })
    });
  }

  async deleteConnection(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userConnectionId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_UserConnectionAccount(userConnectionId);
  }

  public async getMember(ID: number) {
    const _networkResponse = await GET_MembershipUsers<MembershipUser_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      // console.log({"_networkResponse.response": _networkResponse.response});
      
      if (_networkResponse.response.success && 'dateOfBirth' in _networkResponse.response.data) {
        // console.log({ "_networkResponse.response": _networkResponse.response })
        
        const member: MembershipUser_I = MembershipUser_S(_networkResponse.response.data);
        return `${member.firstname} ${member.middlename} ${member.surname}`;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
