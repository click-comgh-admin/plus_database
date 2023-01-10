import { LitElement, html, css, TemplateResult, } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import "@material/mwc-icon";
import "@material/mwc-icon-button";
import "../../../../assets/styles/views/home/dashboard.scss";
import { DELETE_UserConnectionAccount } from '@@addons/network/members/connections/accounts/delete';
import { UserConnectionAccount_I, UserConnectionAccount_S } from '@@addons/interfaces/members/connections/accounts';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import "@material/mwc-select";
import '@@addons/widgets/form/new/select';
import { MembershipUser_I, MembershipUser_S } from '@@addons/interfaces/members/user';
import { GET_MembershipUsers } from '@@addons/network/members/membership/users';
import { APPROVE_UserConnectionAccount } from '@@addons/network/members/connections/accounts/approve';
import { REJECT_UserConnectionAccount } from '@@addons/network/members/connections/accounts/reject';


@customElement("pdb-connections-unassigned-view")
export class PdbConnectionsUnassignedView extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  private _connection_accounts: UserConnectionAccount_I[] = [];

  @property({ type: String })
  private datatablePathUrl: string = "members/user-connection-account/unassigned";

  async connectedCallback() {
    super.connectedCallback();

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
      <div class="block my-1 overflow-x-scroll">
        <hr class="my-2" />
        ${this.table_header}
        ${this.table}
      </div>
    `;
  }

  firstUpdated() {

  }

  private get table_header() {
    return html`
      <div class="flex-col p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-center">
            <b>CHECK ALL: </b>
            <input id="unassigned_info_all" name="unassigned_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_unassigned}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="success" raised @click="${this.approveMultipleConnections}">
            Approve All Selected</mwc-button>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="warning" raised @click="${this.rejectMultipleConnections}">Reject All Selected</mwc-button>
        </div>
      </div>
    `;
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

  private renderMemberInfo(data: any, type: any, connectionInfo: UserConnectionAccount_I) {
    connectionInfo = UserConnectionAccount_S(connectionInfo)
    // console.log({connectionInfo});
    const unassigned_info_id = connectionInfo.id,
      memberId = connectionInfo.memberId,
      connectionId = connectionInfo.connectionId;
    return `
      <div class="flex mb-0">
        <input id="unassigned_info" name="unassigned_info" type="checkbox" value="${unassigned_info_id}"
          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
      </div>
    `;
  }

  private renderClockInInfo(data: any, type: any, connectionInfo: UserConnectionAccount_I) {
    // console.log({connectionInfo});
    const connectionType = connectionInfo.type;
    return `
      <div class="justify-center content-center">
        <div class="flex">
          <mwc-icon-button class="ml-1 success" icon="check" 
            approve-this-item="${connectionInfo.id}" >
          </mwc-icon-button>
          <mwc-icon-button class="ml-1 warning" icon="cancel" 
            reject-this-item="${connectionInfo.id}" >
          </mwc-icon-button>
          <mwc-icon-button class="ml-1 danger" icon="delete_forever" 
            delete-this-item="${connectionInfo.id}" >
          </mwc-icon-button>
        </div>
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
        __this.approveConnectionAction();
        __this.rejectConnectionAction();
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

  private async check_all_unassigned(e: any) {
    e.preventDefault();

    document.querySelectorAll('[id="unassigned_info_all"][name="unassigned_info_all"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        document.querySelectorAll('[id="unassigned_info"][name="unassigned_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = true;
        })
      } else {
        document.querySelectorAll('[id="unassigned_info"][name="unassigned_info"]').forEach((_input_: HTMLInputElement) => {
          _input_.checked = false;
        })
      }
    })
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

  private approveConnectionAction() {
    document.querySelectorAll('[approve-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.approveConnection(e);
      })
    });
  }

  async approveConnection(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userConnectionId = Number(e.currentTarget.getAttribute('approve-this-item'));

    await APPROVE_UserConnectionAccount([userConnectionId]);
  }

  private rejectConnectionAction() {
    document.querySelectorAll('[reject-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.rejectConnection(e);
      })
    });
  }

  async rejectConnection(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userConnectionId = Number(e.currentTarget.getAttribute('reject-this-item'));

    await REJECT_UserConnectionAccount([userConnectionId]);
  }

  private async approveMultipleConnections(e: any) {
    e.preventDefault();

    let ids: Array<number> = [];

    document.querySelectorAll('[id="unassigned_info"][name="unassigned_info"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        if (!Number.isNaN(input.value)) {
          const value = Number(input.value);
          if (!ids.includes(value)) {
            ids.push(value)
          }
        }
      }
    })
    await APPROVE_UserConnectionAccount(ids);
  }


  private async rejectMultipleConnections(e: any) {
    e.preventDefault();

    let ids: Array<number> = [];

    document.querySelectorAll('[id="unassigned_info"][name="unassigned_info"]').forEach((input: HTMLInputElement) => {
      if (input.checked) {
        if (!Number.isNaN(input.value)) {
          const value = Number(input.value);
          if (!ids.includes(value)) {
            ids.push(value)
          }
        }
      }
    })

    await REJECT_UserConnectionAccount(ids);
  }

  createRenderRoot() {
    return this;
  }
}
