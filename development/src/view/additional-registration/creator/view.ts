import '@@assets/styles/views/attendance/setup/form.scss';
import '@@views/no_access/account_expired';
import '@material/mwc-tab';
import '@material/mwc-button';
import '@material/mwc-tab-bar';
import '@@views/no_access/no_page_entry';
import { tokenLogin } from "@@addons/functions/login/main";
import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '@@addons/widgets/form/new/select';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { DELETE_AdditionalRegistrationQuestion } from '@@addons/network/additional_registration/delete';
import { GET_AdditionalRegistrationQuestionType } from '@@addons/network/additional_registration/types';
import './form/edit';
import { base64Encode } from '@@addons/functions/base64';
import { AdditionalRegistrationModel, Convert as armConvert, AdditionalRegistrationQuestionTypeModel } from '@@addons/interfaces/additional_registration';


@customElement("additional-registration-creator-view")
export class AdditionalRegistrationCreatorView extends LitElement {
    constructor() {
        super();
        
    }

    @property({ type: Number })
    public CLIENT_ID: number = 0;

    @property({ type: Array })
    public _data?: Array<string> = [];

    @property({ type: Array })
    public _arQuestionType: Array<AdditionalRegistrationQuestionTypeModel> = [];

    @property({ type: Object })
    private urlQueryParams?: { [k: string]: string; } = undefined;

    async connectedCallback() {
        super.connectedCallback();
        this.urlQueryParams = urlQueryParams();

        await this.getAdditionalRegistrationQuestionType();
    }

    disconnectedCallback() { }
    static styles = [
        css`
   :host { display: block; }
  `
    ];

    render() {
        return html`<div class="shadow bg-white p-2 my-2">${this.schedule}</div>`;
    }

    private get schedule() {
        return html`${this.table}`;
    }

    firstUpdated() {

    }

    private get __tableHeaders(): DataTables_ColumnSettings_I[] {
        return [
            { title: 'Question', },
            { title: 'Action', },
        ];
    }

    private get __tableBody(): DataTables_ColumnSettings_I[][] {
        return [];
    }

    private get __tableFoot(): DataTables_ColumnSettings_I[] {
        return [
            { title: 'Question', },
            { title: 'Action', },
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
            url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/additonal-registration/questions/?datatable_plugin';

        // console.log({ "projects": this._questionnaireResponses });
        let dataTable: DataTables_Settings_I = {
            'order': [[0, 'desc']],
            'processing': true,
            'serverSide': true,
            'ajax': {
                // @ts-ignore
                url: url,
                dataSrc: 'data',
                apiType: "akwaabaApp",
            },
            "columns": [
                {
                    data: 'id',
                    render: (data: any, type: any, row: any) => __this.renderRow1Info(data, type, row),
                    orderable: true,
                },
                {
                    data: 'clientId',
                    render: (data: any, type: any, row: any) => __this.renderRow2Info(data, type, row),
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
                __this.removeQuestionBtns();
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

    renderRow1Info(data: any, type: any, row: any): any {
        console.log({ "row-row": row });
        // console.log({ "JSON.stringify(row)-JSON.stringify(row)": JSON.stringify(row) });

        // const question: MeetingEventQuestionModel = metConvert.toMeetingEventQuestionModel(JSON.stringify(row));
        // console.log({ "question-question": question });

        return `
            <div class="flex align-middle items-center whitespace-nowrap px-1">
                <b class="text-1xl font-bold">Question:</b> 
                <small class="px-1">${row.question}</small>
            </div>
            <div class="flex align-middle items-center whitespace-nowrap px-1">
                <b class="text-1xl font-bold">Placeholder:</b> 
                <small class="px-1">${row.placeholderInstruction}</small>
            </div>
            <div class="flex align-middle items-center whitespace-nowrap px-1">
                <b class="text-1xl font-bold">Type:</b> 
                <small class="px-1">${row.typeInfo.name}</small>
            </div>
        `;
    }

    renderRow2Info(data: any, type: any, row: any): any {

        const question: AdditionalRegistrationModel = armConvert.toAdditionalRegistrationModel(JSON.stringify(row));
        console.log({ "question-question": question });

        return `
          <div class="flex align-middle items-center">
            <question-edit-btn-component questionData=${base64Encode(JSON.stringify(question))} arQuestionType="${base64Encode(JSON.stringify(this._arQuestionType))}"></question-edit-btn-component>
            <div><a href="${CONSTANTS.URLS.PDB_CLIENT}additional-registration/creator/creator-edit?question=${base64Encode(JSON.stringify(question.id))}" target="_blank"><mwc-button class="ml-1 warning" raised edit-this-item="${question.id}" >
            <mwc-icon class="mr-1">edit</mwc-icon>
            </mwc-button></a><mwc-button class="ml-1 danger" raised delete-this-item="${question.id}" >
            <mwc-icon class="mr-1">delete_forever</mwc-icon>
            </mwc-button></div>
          </div>
        `;
    }

    private removeQuestionBtns() {
        const selectorString = 'delete-this-item';
        document.querySelectorAll('[' + selectorString + ']').forEach(verify_member => {
            verify_member.addEventListener('click', (e) => {
                e.preventDefault();
                this.removeQuestionAction(verify_member, selectorString, e);
            });
        });

    }

    private async removeQuestionAction(element: Element, selectorString: string, e: any) {
        e.preventDefault();

        const memberID = element.getAttribute(selectorString);

        if (!Number.isNaN(memberID) && Number(memberID) !== 0) {
            await DELETE_AdditionalRegistrationQuestion(Number(memberID));
        }
    }

    private async getAdditionalRegistrationQuestionType() {
      const _networkResponse = await GET_AdditionalRegistrationQuestionType<AdditionalRegistrationQuestionTypeModel>();
      let __arQuestionType: AdditionalRegistrationQuestionTypeModel[] = [];
  
      if (_networkResponse === null) {
        __arQuestionType.push({ id: 0, name: "**NOT FOUND**" });
      } else {
        if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
          const DATA: AdditionalRegistrationQuestionTypeModel[] = _networkResponse.response.data;
          // console.log({DATA});
          __arQuestionType = DATA;
        }
      }
      const new_data: Array<AdditionalRegistrationQuestionTypeModel> = [];
      new_data.push(...this._arQuestionType, ...__arQuestionType);
      this._arQuestionType = new_data;
    }

    createRenderRoot() {
        return this;
    }
}
