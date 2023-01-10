import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';
import '@material/mwc-button';
// import '@material/mwc-select';
// import '@material/mwc-textarea';
// import '@material/mwc-textfield';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
// import '@material/mwc-dialog';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '@@addons/widgets/form/new/select';
import { CONSTANTS } from '@@addons/constants';
import { base64Decode } from '@@addons/functions/base64';
import { get_cookie } from '@@addons/functions/cookies';
import { getUserLoginInfoCookie } from '@@addons/functions/login';


@customElement("attendance-setup-view-all")
export class AttendanceSetupViewAll extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @query('[show-adminField="all"]')
  private showAdminFieldAllSelector: Element;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`${this.schedule}`;
  }

  private get schedule() {
    return html`${this.table}`;
  }

  firstUpdated() {
    
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Schedule', },
      { title: 'Type', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Schedule', },
      { title: 'Type', },
    ];
  }

  private get table(): TemplateResult {
    const __dataTable = this.__dataTable();
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}"  .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  private __dataTable(): DataTables_Settings_I {
    const __this = this,
      url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'attendance/meeting-event/schedule?datatable_plugin';

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
          render: function (data: any, type: any, row) {
            // console.log({ data, type, row });
            return `${row.name} <a href="${CONSTANTS.URLS.PDB_CLIENT}settings/schedule?meeting-event-id=${row.id}"> Open </a>`;
          },
          orderable: true
        },
        {
          data: 'type',
          render: function (data: any, type: any, row) {
            return `${row.type === 1? "Meeting": "Event"}`;
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
        // console.log({aoData})
        // let newDatas[] = [];
        // console.log("--------", { e, aoData });
        // aoData.forEach((data) => {
        //   const DATA = data._aData;
        //   console.log("--------", { DATA });
        //   let formatRawData = appQuestionnaireResponseStore.formatRawData(DATA);
        //   // console.log({ formatRawData });
        //   if (!newDatas.includes(formatRawData)) {
        //     newDatas.push(formatRawData);
        //   }
        // });

        // await appQuestionnaireResponseStore.removeAll();
        // await appQuestionnaireResponseStore.makePost(newDatas, (postResponse) => {
        //   // console.log({ postResponse });
        // });
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
