import '@@assets/styles/views/attendance/clocking/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@material/mwc-circular-progress';
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { MembershipUser_I } from '@@addons/interfaces/members/user';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallPaginResponse_I, NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import '@@addons/widgets/profile_photo';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { GET_GenericGender } from '@@addons/network/generic/gender';
import { GenericGenderInfo_I, GenericGenderInfo_S } from '@@addons/interfaces/generic/gender';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import { MeetingEventScheduleGroup_I } from '@@addons/interfaces/attendance/meeting_event/group';
import { MeetingEventScheduleSubGroup_I } from '@@addons/interfaces/attendance/meeting_event/subgroup';
import { GenericMeetingEventClockingTypeInfo_I, GenericMeetingEventClockingTypeInfo_S } from '@@addons/interfaces/generic/meeting_event/clocking_type';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GroupingsGroup_I, GroupingsGroup_S } from '@@addons/interfaces/members/groupings/group';
import { GroupingsSubGroup_I, GroupingsSubGroup_S } from '@@addons/interfaces/members/groupings/subgroup';
import { GET_AttendanceScheduleGroup } from '@@addons/network/attendance/setup/group';
import { GET_AttendanceScheduleSubGroup } from '@@addons/network/attendance/setup/subgroup';
import { GET_GenericMeetingEventClockingType } from '@@addons/network/generic/meeting_event/clocking_type';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { until } from 'lit/directives/until.js';
import { MemberClockingHistoryStatisticsInfo_I, MemberClockingHistoryStatisticsInfo_S } from '@@addons/interfaces/attendance/member_clocking_info/history/statistics';
import '..';
import '../../../membership/members/select-member-type';
import { MeetingEventSchedule_I } from '@@addons/interfaces/attendance/meeting_event/schedules';
import { GET_AttendanceSchedule } from '@@addons/network/attendance/setup/schedule';
import '@material/mwc-dialog';
import { GET_AttendanceDownloadHistoryPdf } from '@@addons/network/attendance/clocking/download/pdf/history';
import { GET_AttendanceDownloadHistoryExcel } from '@@addons/network/attendance/clocking/download/excel/history';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';

@customElement("pdb-attendance-clocking-history")
export class PdbAttendanceClockingHistory extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: Number })
  private meetingEventId?: number = 0;

  @property({ type: String })
  private meetingEventIdEnc?: string = null;

  @property({ type: String })
  private filter_start_date_val: string = "";

  @property({ type: String })
  private filter_end_date_val: string = "";

  @property({ type: String })
  private datatablePathUrl: string = "attendance/meeting-event/attendance-history/statistics";

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  @property({ type: Array })
  private _genders: GenericGenderInfo_I[] = [];

  @property({ type: Array })
  private _clockingTypes: GenericMeetingEventClockingTypeInfo_I[] = [];

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  private _scheduleGroups: MeetingEventScheduleGroup_I[]  = [];

  @property({ type: Array })
  private _scheduleSubGroups: MeetingEventScheduleSubGroup_I[]  = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Number })
  private _memberType?: number = 1;

  private __members: NetworkCallPaginResponse_I<MembershipUser_I> = null;

  public set _members(value: NetworkCallPaginResponse_I<MembershipUser_I>) {
    this.__members = value;
    this.requestUpdate();
  }

  public get _members(): NetworkCallPaginResponse_I<MembershipUser_I> {
    return this.__members;
  }

  private __schedule: NetworkCallResponse_I<MeetingEventSchedule_I> = null;

  public set _schedule(value: NetworkCallResponse_I<MeetingEventSchedule_I>) {
    this.__schedule = value;
    this.requestUpdate();
  }

  public get _schedule(): NetworkCallResponse_I<MeetingEventSchedule_I> {
    return this.__schedule;
  }

  private filterBox: FilterFieldBox;

  @property({ type: Boolean })
  private filterBoxStarted?: boolean = false;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  @property({ type: Boolean })
  private _pageButtonAccess: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    this.getMeetingEventId();

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });

    if ((this.meetingEventId === 0) || (this.meetingEventId === null) || (Number.isNaN(this.meetingEventId))) { } else {
      await this.getAttendanceSchedule();
      // console.log({"this._schedule-1": this._schedule})
      if ((this._schedule !== null) && (this._schedule !== undefined)) {
        // console.log({"this._schedule-2": this._schedule})
        await this.getGenders();
        await this.getClockingType();
        await this.getClientMemberCategories();
        await this.getAttendanceScheduleGroup();
        await this.getAttendanceScheduleSubGroup();
      }
    }
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
      this._pageButtonAccess = PageButtonUserAccess(PAGE__IDS.attendance_history);
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.attendance_history, viewType: "Both"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    if ((this.meetingEventId === 0) || (this.meetingEventId === null) || (Number.isNaN(this.meetingEventId))) {
      return html`
        <div class="shadow bg-white p-2">
          <pdb-attendance-clocking-meeting-picker 
            openContentBaseUrl="/clocking/history?filter_start_date&filter_end_date&meeting-event-id=">
          </pdb-attendance-clocking-meeting-picker>
        </div>
      `;
    } else {
    
      if (this._schedule === null) {
        return html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;
      } else if (this._schedule === undefined) {
        return html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Schedule </span>: Not Found</h4>
            </div>
          </div>
        `;
      } else {
        return html`
          <div class="shadow bg-white p-2">
            <span class="flex flex-row md:flex-col w-100"></span>
            <div class="block my-1">
              <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
                filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
              </mwc-button>
            </div>
            <div class="block my-1">
              ${this.filterForm}
            </div>
            <div class="block my-1">
              ${this.downloadBtns}
              ${this.table}
            </div>
          </div>
        `;
      }
    }
  }

  private get downloadBtns() {
    return html`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadHistoryExcel}">
        </mwc-button>
        <mwc-button icon="download" class="danger mr-2" 
          label="Download Pdf File" raised @click="${this.downloadHistoryPdf}">
        </mwc-button>
      </div>
    `
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
            }, unmutableInputNames: [
              { name: 'meeting-event-id', value: this.meetingEventIdEnc },
            ],
          }); 
          this.filterBoxStarted = true;
          this.dialog();
        }
      }
    });   
  }

  private getMeetingEventId() {
    let meetingEventId = urlQueryParamsGet('meeting-event-id');
    // console.log({ userId });
    let _meetingEventId = meetingEventId !== null ? base64Decode(meetingEventId) : null;
    this.meetingEventId = Number.isNaN(_meetingEventId) ? null : Number(_meetingEventId);
    // console.log({ "this.meetingEventId": this.meetingEventId });
    this.meetingEventIdEnc = base64Encode(String(this.meetingEventId), true);
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_start_date = "filter_start_date",
      filterNameId_filter_end_date = "filter_end_date",
      filterNameId_filter_gender = "filter_gender",
      filterNameId_filter_name = "filter_name",
      filterNameId_filter_identity = "filter_identity",
      filterNameId_filter_member_category = "filter_member_category",
      filterNameId_filter_group = "filter_group",
      filterNameId_filter_subgroup = "filter_subgroup",
      filterNameId_filter_from_age = "filter_from_age",
      filterNameId_filter_to_age = "filter_to_age";

    let filterNameId_filter_start_dateVal: string = null,
      filterNameId_filter_end_dateVal: string = null,
      filterNameId_filter_genderVal: string = null,
      filterNameId_filter_nameVal:string = null,
      filterNameId_filter_identityVal: string = null,
      filterNameId_filter_member_categoryVal: number = null,
      filterNameId_filter_groupVal: number = null,
      filterNameId_filter_subgroupVal: number = null,
      filterNameId_filter_from_ageVal: number = null,
      filterNameId_filter_to_ageVal: number = null;
    
      for (const key in _urlQueryParams) {
        let value = String(_urlQueryParams[key]);
        value = value === "" ? null : value;
        if (key === filterNameId_filter_start_date) {
          // console.log({value});
          
          if (value === null) {
            const today = new Date();
            let fivedaysago = today.getDate() - 30;
            fivedaysago = today.setDate(fivedaysago);
            const date = new Date(fivedaysago),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
            filterNameId_filter_start_dateVal = DATE;
          } else {
            const date = new Date(value),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
            filterNameId_filter_start_dateVal = DATE;
          }
          this.filter_start_date_val = filterNameId_filter_start_dateVal;
        }
        if (key === filterNameId_filter_end_date) {
          if (value === null) {
            const date = new Date(),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
              filterNameId_filter_end_dateVal = DATE;
          } else {
            const date = new Date(value),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
            filterNameId_filter_end_dateVal = DATE;
          }
          this.filter_end_date_val = filterNameId_filter_end_dateVal;
        }
        if (key === filterNameId_filter_gender) {
          filterNameId_filter_genderVal = value;
        }
        if (key === filterNameId_filter_name) {
          filterNameId_filter_nameVal = value;
        }
        if (key === filterNameId_filter_identity) {
          filterNameId_filter_identityVal = value;
        }
        if (key === filterNameId_filter_member_category) {
          filterNameId_filter_member_categoryVal = Number(value);
        }
        if (key === filterNameId_filter_group) {
          filterNameId_filter_groupVal = Number(value);
        }
        if (key === filterNameId_filter_subgroup) {
          filterNameId_filter_subgroupVal = Number(value);
        }
        if (key === filterNameId_filter_from_age) {
          filterNameId_filter_from_ageVal = Number(value);
        }
        if (key === filterNameId_filter_to_age) {
          filterNameId_filter_to_ageVal = Number(value);
        }
      }
    
    const nameField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${filterNameId_filter_name}" id="${filterNameId_filter_name}" label="Search By Name" 
            value="${filterNameId_filter_nameVal === null ? "" : filterNameId_filter_nameVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;
    
    const ageField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Filter Age In Years
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${filterNameId_filter_from_age}" id="${filterNameId_filter_from_age}" label="Pick From Age" 
              value="${filterNameId_filter_from_ageVal === null ? "" : filterNameId_filter_from_ageVal}" class="mr-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${filterNameId_filter_to_age}" id="${filterNameId_filter_to_age}" label="Pick To Age" 
              value="${filterNameId_filter_to_ageVal === null ? "" : filterNameId_filter_to_ageVal}" class="ml-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`;
    
    const memberCategoryField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Member Category
          <pdb-membership-select-member-type defaultValue="${filterNameId_filter_member_categoryVal}" 
            name="${filterNameId_filter_member_category}" id="${filterNameId_filter_member_category}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;
    
    const dateField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Pick Dates
          <div class="flex">
            <mwc-textfield type="date" name="${filterNameId_filter_start_date}" id="${filterNameId_filter_start_date}"
            value="${filterNameId_filter_start_dateVal}" class="mr-1" outlined required></mwc-textfield>
            <mwc-textfield type="date" name="${filterNameId_filter_end_date}" id="${filterNameId_filter_end_date}"
            value="${filterNameId_filter_end_dateVal}" class="ml-1" outlined required></mwc-textfield>
          </div>
        </div>
      </div>`;
    
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
      </div>`;
    
    const groupField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Group
          <mwc-select name="${filterNameId_filter_group}" id="${filterNameId_filter_group}" label="Select Meeting/ Event Group" outlined required>
            ${this._scheduleGroups.map((item) => {
              // console.log({item});
              const groupId = item.groupId;
              const groupName = until(this.getGroup(groupId), html`<span>Loading...</span>`);
              if (filterNameId_filter_groupVal === null) {
                return html`<mwc-list-item value="${groupId}">${groupName}</mwc-list-item>`;
              } else {
                if (Number(filterNameId_filter_groupVal) === groupId) {
                  return html`<mwc-list-item value="${groupId}" selected>${groupName}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${groupId}">${groupName}</mwc-list-item>`;
                }
              }
            })}
          </mwc-select>
        </div>
      </div>`;
    
    const subGroupField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Sub-Group
          <mwc-select name="${filterNameId_filter_subgroup}" id="${filterNameId_filter_subgroup}" label="Select Meeting/ Event Sub-Group" outlined required>
            ${this._scheduleSubGroups.map((item) => {
              // console.log({item});
              const subGroupId = item.subGroupId;
              const subGroupName = until(this.getSubGroup(subGroupId), html`<span>Loading...</span>`);
              if (filterNameId_filter_subgroupVal === null) {
                return html`<mwc-list-item value="${subGroupId}">${subGroupName}</mwc-list-item>`;
              } else {
                if (Number(filterNameId_filter_subgroupVal) === subGroupId) {
                  return html`<mwc-list-item value="${subGroupId}" selected>${subGroupName}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${subGroupId}">${subGroupName}</mwc-list-item>`;
                }
              }
            })}
          </mwc-select>
        </div>
      </div>`;
    
    const identifyField = html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${filterNameId_filter_identity}" id="${filterNameId_filter_identity}" label="Search By Member ID"
            value="${filterNameId_filter_identityVal === null ? "" : filterNameId_filter_identityVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;
      returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${memberCategoryField} ${nameField} ${genderField} ${ageField} ${identifyField} ${groupField} ${subGroupField} ${dateField}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" value="${this.meetingEventIdEnc}" />
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
      { title: 'NAME', },
      { title: 'MEETING RECORDS', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'NAME', },
      { title: 'MEETING RECORDS', },
    ];
  }

  private get table(): TemplateResult {
    const memberType = this._memberType;
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "" + this.datatablePathUrl + "?branchId=" + branchId
      + "&meetingEventId=" + this.meetingEventId + "&memberType=" + memberType + "&order__by=firstname&datatable_plugin";

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
    filterNameId_filter_start_date = "filter_start_date",
    filterNameId_filter_end_date = "filter_end_date",
    filterNameId_filter_gender = "filter_gender",
    filterNameId_filter_name = "filter_name",
    filterNameId_filter_identity = "filter_identity",
    filterNameId_filter_member_category = "filter_member_category",
    filterNameId_filter_group = "filter_group",
    filterNameId_filter_subgroup = "filter_subgroup",
    filterNameId_filter_from_age = "filter_from_age",
    filterNameId_filter_to_age = "filter_to_age";

    let newObject:any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_filter_start_date) || (key === filterNameId_filter_end_date)
        || (key === filterNameId_filter_gender) || (key === filterNameId_filter_name)
        || (key === filterNameId_filter_identity) || (key === filterNameId_filter_member_category)
        || (key === filterNameId_filter_group) || (key === filterNameId_filter_subgroup)
        || (key === filterNameId_filter_from_age) || (key === filterNameId_filter_to_age)) {
        // console.log({value, });

        if ((key === filterNameId_filter_from_age) || (key === filterNameId_filter_to_age)) {
          if (value === "0") {
            delete newObject[key];
          }
        }

        if ((key === filterNameId_filter_start_date) || (key === filterNameId_filter_end_date)) {
          if (key === filterNameId_filter_start_date) {
            newObject[key] = this.filter_start_date_val;
          } else {
            newObject[key] = this.filter_end_date_val;
          }
        } else {
          newObject[key] = value;
        }
      }
    } 

    let filter_start_date = urlQueryParamsGet(filterNameId_filter_start_date);
    if (filter_start_date === null) {
      newObject[filterNameId_filter_start_date] = `${this.filter_start_date_val}`;
    }
    let filter_end_date = urlQueryParamsGet(filterNameId_filter_end_date);
    if (filter_end_date === null) {
      newObject[filterNameId_filter_end_date] = `${this.filter_end_date_val}`;
    }

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);
    let urlQueryString = (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin;

    // let filter_start_date = urlQueryParamsGet(filterNameId_filter_start_date);
    // if (filter_start_date === null) {
    //   filter_start_date = `&${filterNameId_filter_start_date}=${this.filter_start_date_val}`;
    // }
    // let filter_end_date = urlQueryParamsGet(filterNameId_filter_end_date);
    // if (filter_end_date === null) {
    //   filter_end_date = `&${filterNameId_filter_end_date}=${this.filter_end_date_val}`;
    // }

    // console.log({newObject, urlQueryString});
    // console.log({filter_start_date, filter_end_date});
    

    // urlQueryString = `${urlQueryString}${filter_start_date}${filter_end_date}`
    urlQueryString = `${urlQueryString}`

    return urlQueryString;
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

  private async downloadHistoryPdf() {
    const memberType = this._memberType;
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }

    let URL = "?branchId=" + branchId
      + "&meetingEventId=" + this.meetingEventId + "&memberType=" + memberType + "&order__by=firstname&datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    
    const _networkResponse = await GET_AttendanceDownloadHistoryPdf<any>(URL);
    // console.log({_networkResponse});
  }

  private async downloadHistoryExcel() {
    const memberType = this._memberType;
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }

    let URL = "?branchId=" + branchId
      + "&meetingEventId=" + this.meetingEventId + "&memberType=" + memberType + "&order__by=firstname&datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    
    const _networkResponse = await GET_AttendanceDownloadHistoryExcel<any>(URL);
    // console.log({_networkResponse});
  }

  private async getClockingType() {
    const _networkResponse = await GET_GenericMeetingEventClockingType<GenericMeetingEventClockingTypeInfo_I>();
    // console.log({_networkResponse});
    
    let ___clockingTypes: GenericGenderInfo_I[] = [];

    if (_networkResponse === null) {
      ___clockingTypes.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GenericMeetingEventClockingTypeInfo_I[] = data.map(value => {
          return GenericMeetingEventClockingTypeInfo_S(value)
        });
        // console.log({DATA});
        ___clockingTypes = DATA;
      }
    }
    const new_data: Array<GenericMeetingEventClockingTypeInfo_I> = [];
    new_data.push(...this._clockingTypes, ...___clockingTypes);
    this._clockingTypes = new_data;
  }

  private async getAttendanceScheduleGroup() {
    const _networkResponse = await GET_AttendanceScheduleGroup<MeetingEventScheduleGroup_I>(
      null, "?meetingEventId=" + this.meetingEventId
    );
    // console.log({ _networkResponse });
    if (_networkResponse !== null) {
      const _scheduleGroups = _networkResponse.paginResponse;
      if (_scheduleGroups.results.length > 0) {
        this._scheduleGroups = _scheduleGroups.results;
      }
    }
  }

  private async getGroup(ID: number) {
    const _networkResponse = await GET_MemberGroupingsGroups<GroupingsGroup_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      if (_networkResponse.response.success && 'group' in _networkResponse.response.data) {
        
        const group: GroupingsGroup_I = GroupingsGroup_S(_networkResponse.response.data);
        return group.group;
      } else {
        return _networkResponse.response.message;
      }
    }
  }

  private async getAttendanceScheduleSubGroup() {
    const _networkResponse = await GET_AttendanceScheduleSubGroup<MeetingEventScheduleSubGroup_I>(
      null, "?meetingEventId=" + this.meetingEventId
    );
    // console.log({ _networkResponse });
    if (_networkResponse !== null) {
      const _scheduleSubGroups = _networkResponse.paginResponse;
      if (_scheduleSubGroups.results.length > 0) {
        this._scheduleSubGroups = _scheduleSubGroups.results;
      }
    }
  }

  private async getSubGroup(ID: number) {
    // console.log({subgroup_ID: ID})
    const _networkResponse = await GET_MemberGroupingsSubGroups<GroupingsSubGroup_I>(ID);
    if (_networkResponse === null) {
      return "???";
    } else {
      if (_networkResponse.response.success && 'subgroup' in _networkResponse.response.data) {
        
        const subgroup: GroupingsSubGroup_I = GroupingsSubGroup_S(_networkResponse.response.data);
        // console.log({subgroup})
        return subgroup.subgroup;
      } else {
        return _networkResponse.response.message;
      }
    }
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

  private renderCol1Info(data: any, type: any, statistics: MemberClockingHistoryStatisticsInfo_I) {
    // console.log({statistics});
    const _statistics = MemberClockingHistoryStatisticsInfo_S(statistics);
    const MEMBER = _statistics.member;
    const MEMBER_ID = base64Encode(String(MEMBER.id), true);
    
    return `
      <div class="flex flex-col lg:flex-row m-1 justify-evenly whitespace-normal">
        <div class="flex m-1 justify-evenly">
          <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${MEMBER_ID}" type="member"
            url="${MEMBER.profilePicture}" size="32"></user-profile-photo>
        </div>
        <div class="flex flex-col m-1 justify-evenly">
          <h3 class="whitespace-nowrap font-bold text-lg">${MEMBER.firstname} ${MEMBER.middlename} ${MEMBER.surname}</h3>
          <p class="whitespace-nowrap text-base">${_statistics.period}</p>
          <p class="whitespace-nowrap text-sm">Total Work Done Rating: ${_statistics.workDoneRating}</p>
          <p class="whitespace-nowrap text-xs">Total Overtime: ${_statistics.totalOvertime}</p>
          <div class="whitespace-nowrap block sm:hidden">
            ${this.renderCol2Info(data, type, statistics, 1)}
          </div>
        </div>
      </div>
    `;
  }

  private renderCol2Info(data: any, type: any, statistics: MemberClockingHistoryStatisticsInfo_I, summaryType: number) {
    // console.log({statistics});  
    const _statistics = MemberClockingHistoryStatisticsInfo_S(statistics);
    const MEMBER = _statistics.member;
    // const clockingId = _statistics
    // @ts-ignore
    const expectedMonthlyAttendance = this._schedule.data.expectedMonthlyAttendance;
    
    return `
      <div class="flex flex-col m-1 justify-evenly whitespace-normal">
        <div class="flex flex-col m-1 justify-evenly">
          <h3 class="whitespace-nowrap font-bold text-lg">Total Attendance: ${_statistics.totalAttendance} </h3>
          <p class="whitespace-nowrap text-base">Expected Monthly Attendance: ${expectedMonthlyAttendance}</p>
        </div>
        <div class="flex flex-col m-1 justify-evenly">
          <!-- <p class="whitespace-nowrap my-1 hidden">
            ${this.view_attendance_details(_statistics)}
            <mwc-button class="button info" label="Attendance Details" outlined open-dialog-btn="attendance-details-${MEMBER.id}"></mwc-button>
          </p> -->
          <div class="whitespace-nowrap my-1">
            ${this.view_summary_records(_statistics, MEMBER, summaryType)}
            <mwc-button class="button danger" outlined open-dialog-btn="summary-records_${summaryType}-${MEMBER.id}">
              <mwc-icon>bar_chart</mwc-icon> Summary Records
            </mwc-button>
          </div>
        </div>
      </div>
    `;
  }

  private view_attendance_details(statistics: MemberClockingHistoryStatisticsInfo_I) {
    
  }

  private view_summary_records(statistics: MemberClockingHistoryStatisticsInfo_I, member: MembershipUser_I, type: number) {
    const MEMBER_ID = base64Encode(String(member.id), true);
    return `
      <mwc-dialog open-this-dialog="summary-records_${type}-${member.id}" heading="Summary Records">
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <div class="flex m-1 justify-evenly">
            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${MEMBER_ID}" type="member"
              url="${member.profilePicture}" size="32"></user-profile-photo>
          </div>
          <div class="flex flex-col m-1 justify-evenly">
            <h3 class="whitespace-nowrap font-bold text-lg">${member.firstname} ${member.middlename} ${member.surname}</h3>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Attendance</h6>
              <p class="whitespace-nowrap text-sm ml-1">${statistics.totalAttendance}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Lateness:</h6>
              <p class="whitespace-nowrap text-sm ml-1">${statistics.totalLateness}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Break Overstay:</h6>
              <p class="whitespace-nowrap text-sm ml-1">${statistics.totalBreakOverStay}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Over-time:</h6>
              <p class="whitespace-nowrap text-sm ml-1">${statistics.totalOvertime}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Total Under-time:</h6>
              <p class="whitespace-nowrap text-sm ml-1">${statistics.totalUndertime}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Period:</h6>
              <p class="whitespace-nowrap text-sm ml-1">${statistics.period}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Work Done Rating:</h6>
              <p class="whitespace-nowrap text-sm ml-1">${statistics.workDoneRating}</p>
            </div>
            <div class="flex justify-between content-between">
              <h6 class="whitespace-nowrap text-base font-bold mr-1">Rated By:</h6>
              <p class="whitespace-nowrap text-sm ml-1">${statistics.ratedBy}</p>
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

  private async getAttendanceSchedule() {
    const _networkResponse = await GET_AttendanceSchedule<MeetingEventSchedule_I>(this.meetingEventId);
    if (_networkResponse === null) {
      this._schedule = undefined;
    } else {
      const response = _networkResponse.response;
      if (response.success) {
        this._schedule = response;
      } else {
        this._schedule = undefined;
      }
    }
    // console.log({"this._schedule": this._schedule});
    
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
          data: 'member',
          render: (data: any, type: any, statistics: MemberClockingHistoryStatisticsInfo_I) => __this.renderCol1Info(data, type, statistics),
          orderable: true
        },
        {
          data: 'accountType',
          render: (data: any, type: any, statistics: MemberClockingHistoryStatisticsInfo_I) => __this.renderCol2Info(data, type, statistics, 2),
          orderable: true
        },

      ],
      'columnDefs': [
        {
          targets: ['_all'],
          className: 'mdc-data-table__cell',
          orderable: false,
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
        __this.dialog();
      },
      "responsive": {
        details: false // this removes the green plus button to view hidden columns
      },
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
