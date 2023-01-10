import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/add_remove_widget';
import '@material/mwc-dialog';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@@addons/widgets/form/new/select';
import '@@addons/widgets/profile_photo';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { Button } from '@material/mwc-button';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { clockingSystemDeviceName } from '@@addons/interfaces/attendance/devices/settings/full';
import { show_selection_member_id_filter } from '../../../membership/connections/members_and_connections/view_members';
import { QueryOptions } from 'select2';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { MembershipUserModel, Convert as MuMconvert } from '@@addons/interfaces/members/user/model/index2';
import { DELETE_AttendanceClockingDeviceRequest } from '@@addons/network/attendance/devices/request/delete';
import { PATCH_AttendanceClockingDeviceRequest } from '@@addons/network/attendance/devices/request/put';
import { ClockingDeviceRequestFullModel, Convert as cdrfmConvert } from '@@addons/interfaces/attendance/devices/requests/full';
import { getDateTime } from '@@addons/functions/date_time';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';


@customElement("attendance-device-requests")
export class AttendanceDeviceRequests extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: Array })
  private _userDeviceSettings: ClockingDeviceRequestFullModel[] = [];

  @property({ type: Number })
  private startSearchPage: number = 0;

  private filterBox: FilterFieldBox;

  @property({ type: Boolean })
  private filterBoxStarted?: boolean = false;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  @property({ type: String })
  private datatablePathUrl: string = "attendance/clocking-device/request";

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _pageButtonAccess: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });
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
      this._pageButtonAccess = PageButtonUserAccess(PAGE__IDS.device_request_approval);
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.device_request_approval, viewType: "Both"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }

    if (this._userDeviceSettings === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._userDeviceSettings === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Device Settings </span>: undefined error</h4>
          </div>
        </div>
      `;
    }

    return html`
      <div class="shadow bg-white p-2">
        <span class="flex flex-row md:flex-col w-100"></span>
          <div class="block my-1">
            <mwc-button icon="open_with" label="Filters" raised class="primary mt-1" filter-section-context="btn"
              @click="${this.filterBox.toggleFilterFields}">
            </mwc-button>
          </div>
          <div class="block my-1">
            ${this.filterForm}
          </div>
          <div class="block my-1 overflow-x-scroll">
            <hr class="my-2" />
            ${this.table}
          </div>
      </div>
    `;
  }

  firstUpdated() {
    setInterval(() => {
      if (this.filterSectionContextContainer !== null) {
        if (!this.filterBoxStarted) {
          this.filterBox = new FilterFieldBox({
            selectors: {
              container: this.filterSectionContextContainer,
              form: this.filterSectionContextForm,
              filterSectionContextBtn: this.filterSectionContextBtn,
            }, unmutableInputNames: [],
          });
          this.filterBoxStarted = true;

        }
      }
    });
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_memberId = "memberId";

    let filterNameId_filter_memberIdVal: string = null;

    let ajaxHeader: { Authorization?: string } = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      value = value === "" ? null : value;
      if (key === filterNameId_filter_memberId) {
        filterNameId_filter_memberIdVal = value;
      }
    }

    const memberField = html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
        ${show_selection_member_id_filter(Number(filterNameId_filter_memberIdVal))}
        <select-input class="w-100" id="${filterNameId_filter_memberId}" name="${filterNameId_filter_memberId}"
          label="Select Member" .ajaxFetchProcessResponse="${this.processClientUserSearch}"
          startSearchPage="${this.startSearchPage}" .ajaxHeader="${ajaxHeader}"
          .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
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

  private processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
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
        // console.log({"typeof": typeof item, "item-item": item });
        const member: MembershipUserModel = MuMconvert.toMembershipUserModel(JSON.stringify(item));
        // console.log({ "member-member": member });

        const id = member.id;
        const fullName = `${member.firstname} ${member.middlename ?? ""} ${member.surname}`;
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({ processedData });

    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private get ajaxFetchUrlParams(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "", value: "" }
    ]
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'User', },
      { title: 'Device Info', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'User', },
      { title: 'Device Info', },
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

  private renderMemberInfo(data: any, type: any, userDeviceInfo: ClockingDeviceRequestFullModel) {
    // console.log({userDeviceInfo});
    const memberId = userDeviceInfo.memberID;
    const memberInfo = userDeviceInfo.memberInfo;
    this.dialog();

    return `
      <div class="flex flex-col">
        <div class="flex flex-col lg:flex-row m-1 justify-start">
          <div class="flex items-center whitespace-normal">
            <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${memberId}" type="member"
              url="${memberInfo.profilePicture}" size="16"></user-profile-photo>
            <p class="ml-1">${memberInfo.firstname} ${memberInfo.middlename} ${memberInfo.surname}</p>
          </div>
        </div>
      </div>
    `;
  }

  private renderDeviceInfo(data: any, type: any, _userDeviceInfo: ClockingDeviceRequestFullModel) {
    const userDeviceInfo = cdrfmConvert.toClockingDeviceRequestFullModel(JSON.stringify(_userDeviceInfo));
    // console.log({ userDeviceInfo, });
    const atDate = getDateTime(userDeviceInfo.creationDate, { dateStyle: "medium", timeStyle: "short" });
    
    
    let approveBtn: String = "",
      deleteBtn: String = this._pageButtonAccess? `<mwc-icon-button class="ml-1 danger" icon="delete_forever" 
        delete-this-item="${userDeviceInfo.id}" >
      </mwc-icon-button>`: '';
    if (!userDeviceInfo.approved) {
      // console.log({
      //   "userDeviceInfo.approved": userDeviceInfo.approved,
      //   "userDeviceInfo.approved==true": userDeviceInfo.approved == true,
      //   "userDeviceInfo.approved===true": userDeviceInfo.approved === true
      // });
      approveBtn = this._pageButtonAccess? `<mwc-icon-button class="mr-1 success" icon="check" 
        approve-this-item="${userDeviceInfo.id}" >
      </mwc-icon-button>`: '';
    }
    return `
      <div class="justify-center content-center">
        <div class="whitespace-nowrap my-1 flex">
          ${approveBtn}
          ${deleteBtn}
        </div>
        <div class="whitespace-nowrap my-1">
          ${this.view_device_info(userDeviceInfo)}
          <mwc-button class="button info" outlined open-dialog-btn="summary-records-${userDeviceInfo.id}">
            <mwc-icon>devices_other</mwc-icon> Info
          </mwc-button>
        </div>
        <div class="whitespace-nowrap my-1">
          ${atDate}
        </div>
      </div>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_memberId = "memberId",
      filterNameId_filter_connectionId = "connectionId";

    let newObject: any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_filter_memberId) || (key === filterNameId_filter_connectionId)) {
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
          render: (data: any, type: any, userDeviceInfo: ClockingDeviceRequestFullModel) => __this.renderMemberInfo(data, type, userDeviceInfo),
          orderable: true
        },
        {
          data: 'inTime',
          render: (data: any, type: any, userDeviceInfo: ClockingDeviceRequestFullModel) => __this.renderDeviceInfo(data, type, userDeviceInfo),
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
        __this.deleteUserDeviceInfo();
        __this.approveUserDeviceInfo();
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

  private deleteUserDeviceInfo() {
    document.querySelectorAll('[delete-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.deleteDeviceInfo(e);
      })
    });
  }

  private approveUserDeviceInfo() {
    document.querySelectorAll('[approve-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.approveDeviceInfo(e);
      })
    });
  }

  private view_device_info(userDeviceInfo: ClockingDeviceRequestFullModel) {
    const memberId = userDeviceInfo.memberID,memberInfo = userDeviceInfo.memberInfo;

    return `
      <mwc-dialog open-this-dialog="summary-records-${userDeviceInfo.id}" heading="Summary Records">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex m-1 justify-evenly">
            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${memberId}" type="member"
              url="${memberInfo.profilePicture}" size="32"></user-profile-photo>
          </div>
          <div class="flex flex-col m-1 justify-evenly">
            <h3 class="whitespace-nowrap font-bold text-lg">${memberInfo.firstname} ${memberInfo.middlename} ${memberInfo.surname}</h3>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">System</h6>
              <p class="whitespace-nowrap text-sm ml-1">${clockingSystemDeviceName(userDeviceInfo.systemDevice)}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Device ID:</h6>
              <p class="whitespace-nowrap text-sm ml-1" style="text-overflow: ellipsis;overflow: hidden;width: 115px;">${userDeviceInfo.deviceID}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Device Type:</h6>
              <p class="whitespace-nowrap text-sm ml-1">${userDeviceInfo.deviceType}</p>
            </div>
          </div>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `;

  }

  async deleteDeviceInfo(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userUserId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_AttendanceClockingDeviceRequest(userUserId);
  }

  async approveDeviceInfo(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userUserId = Number(e.currentTarget.getAttribute('approve-this-item'));

    await PATCH_AttendanceClockingDeviceRequest(userUserId);
  }

  private dialog() {
    // console.log({ "document.querySelectorAll('[open-dialog-btn]')": document.querySelectorAll('[open-dialog-btn]') });
    document.querySelectorAll('[open-dialog-btn]').forEach((btn) => {
      // console.log({ btn })
      btn.addEventListener('click', (e) => {
        // console.log({ e })
        // e.preventDefault();
        this.showDialog(e);
      })
    });

  }

  private showDialog(event: any) {
    // event.preventDefault();
    // console.log({ event })

    const dialogId: number = (event.currentTarget.getAttribute('open-dialog-btn'));
    const dialog = this.querySelector('[open-this-dialog="' + dialogId + '"]');
    dialog.setAttribute('open', "true");
  }

  createRenderRoot() {
    return this;
  }
}
