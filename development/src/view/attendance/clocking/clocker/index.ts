import '@@assets/styles/views/attendance/clocking/main.scss';
import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property, query, } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { MembershipUser_I } from '@@addons/interfaces/members/user';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import '@@addons/widgets/form/new/switch';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsGet, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { GET_GenericGender } from '@@addons/network/generic/gender';
import { GenericGenderInfo_I, GenericGenderInfo_S } from '@@addons/interfaces/generic/gender';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import '..';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { MemberClockingInfo_I, MemberClockingInfo_S } from '@@addons/interfaces/attendance/member_clocking_info';
import { POST_AttendanceClockingUpdateClockingList } from '@@addons/network/attendance/clocking/reset-clocking-list';
import { TextField } from '@material/mwc-textfield';
import { PATCH_AttendanceMultipleClockingBreak } from '@@addons/network/attendance/clocking/multiple_clocking';
import { GET_GenericMeetingEventClockingType } from '@@addons/network/generic/meeting_event/clocking_type';
import { GenericMeetingEventClockingTypeInfo_I, GenericMeetingEventClockingTypeInfo_S } from '@@addons/interfaces/generic/meeting_event/clocking_type';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import '../../../membership/members/select-member-type';
import { MeetingEventScheduleGroup_I } from '@@addons/interfaces/attendance/meeting_event/group';
import { GET_AttendanceScheduleGroup } from '@@addons/network/attendance/setup/group';
import { until } from 'lit/directives/until.js';
import { GroupingsGroup_I, GroupingsGroup_S } from '@@addons/interfaces/members/groupings/group';
import { MeetingEventScheduleSubGroup_I } from '@@addons/interfaces/attendance/meeting_event/subgroup';
import { GroupingsSubGroup_I, GroupingsSubGroup_S } from '@@addons/interfaces/members/groupings/subgroup';
import { GET_AttendanceScheduleSubGroup } from '@@addons/network/attendance/setup/subgroup';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import './table_parts/first';
import './table_parts/second';
import './table_parts/third';
import { setClockingTimeInfo } from './table_parts/second';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { PageButtonUserAccess, AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from '@@views/attendance/page__id';

@customElement("pdb-attendance-clocking-clocker")
export class PdbAttendanceClockingClocker extends LitElement {
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
  private datatablePathUrl: string = "attendance/meeting-event/attendance";

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

  @property({ type: String })
  private clockingTimeValue?: string = "";

  @property({ type: Boolean })
  private clockingTime: boolean = false;

  @property({ type: Boolean })
  private meetingEventForToday: boolean = false;

  private __members: NetworkCallPaginResponse_I<MembershipUser_I> = null;

  public set _members(value: NetworkCallPaginResponse_I<MembershipUser_I>) {
    this.__members = value;
    this.requestUpdate();
  }

  public get _members(): NetworkCallPaginResponse_I<MembershipUser_I> {
    return this.__members;
  }

  private filterBox: FilterFieldBox;

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

    await this.getGenders();
    await this.getClockingType();
    await this.getClientMemberCategories();
    await this.getAttendanceScheduleGroup();
    await this.getAttendanceScheduleSubGroup();
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
      this._pageButtonAccess = PageButtonUserAccess(PAGE__IDS.clocking);
      
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.clocking, viewType: "Both"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    // console.log({ "this.clockingTime": this.clockingTime, "this.clockingTimeValue": this.clockingTimeValue });
    if ((this.meetingEventId === 0) || (this.meetingEventId === null) || (Number.isNaN(this.meetingEventId))) {
      return html`
        <div class="shadow bg-white p-2">
          <pdb-attendance-clocking-meeting-picker
            openContentBaseUrl="/clocking/clocker?meeting-event-id=">
          </pdb-attendance-clocking-meeting-picker>
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
          <div class="block my-1 overflow-x-scroll">
            <hr class="my-2"/>
            <div class="my-2 flex flex-col items-end">
              <div class="col-md-6 col-lg-4 flex flex-col items-end">
                <h4 class="font-semibold my-2 capitalize">Override Clocking Time</h4>
                <switch-input class="capitalize" ?isSelected="${this.clockingTime}" name="clockingTimeSwitchAction"
                  label="Override Clocking Time"></switch-input>
              </div>
              <hr />
            </div>
            ${this.clockingTimeField}
            ${this.table}
          </div>
        </div>
      `;
    }
  }

  private get clockingTimeField() {
    if (this.clockingTime) {
      return html`
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2">Select Date</h4>
            <mwc-textfield name="setClockingTimeBtn" type="datetime-local" step="1" class="w-full" label="Select Clocking Time"
              value="${this.clockingTimeValue}" outlined required>
            </mwc-textfield><br>
            <mwc-button raised label="Set Clocking Time" @click="${this.setClockingTimeBtn}"></mwc-button>
          </div>
        </div>
      `;
    } else {
      return nothing;
    }
  }

  private get resetClockingList() {
    // if (this.meetingEventForToday) {
      return html`
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <mwc-button raised label="Refresh Clocking List" class="success" @click="${this.UpdateClockingList}"></mwc-button>
          </div>
        </div>
      `;
    // } else {
    //   return nothing;
    // }
  }

  private setClockingTimeBtn(e: any) {
    // console.log({ e });
    document.querySelectorAll('mwc-textfield[name="setClockingTimeBtn"]').forEach((input: TextField) => {
      this.clockingTimeValue = input.value;
    });
    // console.log({ "this.clockingTimeValue": this.clockingTimeValue });
  }

  private clockingTimeSwitchAction() {
    const _this = this; 
    document.querySelectorAll('[name="clockingTimeSwitchAction"]').forEach((_switch) => {
      _switch.addEventListener("click", (evt) => {
        // @ts-ignore 
        _this.clockingTime = _switch.isSelected;
        // console.log({ "_this.clockingTime": _this.clockingTime });
        // @ts-ignore
        // console.log({ "_switch.isSelected": _switch.isSelected });
      });
    });
  }

  firstUpdated() {
    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }, unmutableInputNames: [
        { name: 'meeting-event-id', value: this.meetingEventIdEnc },
      ],
    });
    this.clockingTimeSwitchAction();
    setInterval(() => setClockingTimeInfo(this.clockingTime, this.clockingTimeValue)); // this is to change automatically update clocking times since datatabel is not allowing it
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
      filterNameId_filter_date = "filter_date",
      filterNameId_filter_gender = "filter_gender",
      filterNameId_filter_name = "filter_name",
      filterNameId_filter_identity = "filter_identity",
      filterNameId_filter_member_category = "filter_member_category",
      filterNameId_filter_group = "filter_group",
      filterNameId_filter_subgroup = "filter_subgroup",
      filterNameId_filter_from_age = "filter_from_age",
      filterNameId_filter_to_age = "filter_to_age";

    let filterNameId_filter_dateVal: string = null,
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
        if (key === filterNameId_filter_date) {
          if (value === null) {
            filterNameId_filter_dateVal = "";
          } else {
            const date = new Date(value),
              _DATE = date.toLocaleDateString('en-US', {
                day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
                // @ts-ignore
              }).split('/'),
              DATE = [_DATE[2], _DATE[0], _DATE[1]].join('-'); 
            filterNameId_filter_dateVal = DATE;
          }
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
              value="${filterNameId_filter_from_ageVal === null ? "" : filterNameId_filter_from_ageVal}" class="mx-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${filterNameId_filter_to_age}" id="${filterNameId_filter_to_age}" label="Pick To Age" 
              value="${filterNameId_filter_to_ageVal === null ? "" : filterNameId_filter_to_ageVal}" class="mx-1" outlined required>
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
        <div class="form-input-container !block">Pick Date
          <mwc-textfield type="date" name="${filterNameId_filter_date}" id="${filterNameId_filter_date}"
            value="${filterNameId_filter_dateVal}" outlined required></mwc-textfield>
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
      { title: 'Member', },
      { title: 'Clock In', },
      { title: 'Clock Out', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Member', },
      { title: 'Clock In', },
      { title: 'Clock Out', },
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
      ${this._pageButtonAccess? this.resetClockingList: nothing}
      <form>
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-row-reverse my-1 items-end">
            <button type="submit" class="btn btn-sm btn-outline-danger !mx-1" multi-break-clocking="outTime">Clock Out Selected</button>
            <button type="submit" class="btn btn-sm btn-outline-success !mx-1" multi-break-clocking="inTime">Clock In Selected</button>
          </div>
          <div class="col-md-6 col-lg-4 flex flex-row-reverse my-1 items-end">
            <button type="submit" class="btn btn-sm btn-outline-danger !mx-1" multi-break-clocking="endBreak">End Break For Selected</button>
            <button type="submit" class="btn btn-sm btn-outline-success !mx-1" multi-break-clocking="startBreak">Start Break For Selected</button>
          </div>
        </div>
        <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}" .dt_body="${this.__tableBody}"
          .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
      </form>
    `;
  }

  private renderMemberInfo(data: any, type: any, clockingInfo: MemberClockingInfo_I) {
    // console.log({clockingInfo});
    const _clockingInfo = MemberClockingInfo_S(clockingInfo);
    const TODAY = new Date();
    this.meetingEventForToday = _clockingInfo.date.toDateString() === TODAY.toDateString();
    // @ts-ignore
    return `<clocker-table-parts-first data="${data}" type="${type}" clocking_info='${JSON.stringify(_clockingInfo).replaceAll("'", "&rsquo;")}' ></clocker-table-parts-first>`;
  }

  private renderClockInInfo(data: any, type: any, clockingInfo: MemberClockingInfo_I) {
    // console.log({clockingInfo});
      console.log({"--this._pageButtonAccess--": this._pageButtonAccess});
      if (this._pageButtonAccess) {
        // @ts-ignore
        return `<clocker-table-parts-second clocking data="${data}" type="${type}" clocking_info='${JSON.stringify(clockingInfo).replaceAll("'", "&rsquo;")}'
          ?clockingtime="${this.clockingTime}" pageButtonAccess clockingTimeValue="${this.clockingTimeValue}" >
        </clocker-table-parts-second>`;
      } else {
        // @ts-ignore
        return `<clocker-table-parts-second clocking data="${data}" type="${type}" clocking_info='${JSON.stringify(clockingInfo).replaceAll("'", "&rsquo;")}'
          ?clockingtime="${this.clockingTime}" clockingTimeValue="${this.clockingTimeValue}" >
        </clocker-table-parts-second>`;
      }
  }

  private renderClockOutInfo(data: any, type: any, clockingInfo: MemberClockingInfo_I) {
    // console.log({clockingInfo});
    if (this._pageButtonAccess) {
      // @ts-ignore
      return `<clocker-table-parts-third clocking data="${data}" type="${type}" clocking_info='${JSON.stringify(clockingInfo).replaceAll("'", "&rsquo;")}'
        ?clockingtime="${this.clockingTime}" pageButtonAccess clockingTimeValue="${this.clockingTimeValue}" >
      </clocker-table-parts-third>`;
    } else {
      // @ts-ignore
      return `<clocker-table-parts-third clocking data="${data}" type="${type}" clocking_info='${JSON.stringify(clockingInfo).replaceAll("'", "&rsquo;")}'
        ?clockingtime="${this.clockingTime}" clockingTimeValue="${this.clockingTimeValue}" >
      </clocker-table-parts-third>`;
    }
  }

  private multiBreakClocking() {
    const selectorString = 'multi-break-clocking';
    document.querySelectorAll('[' + selectorString + ']').forEach(break_clocking => {
      break_clocking.addEventListener('click', (e) => {
        e.preventDefault();
        this.multiBreakClockingSubmit(break_clocking, selectorString, e);
      });
    });
  }

  async multiBreakClockingSubmit(element: Element, selectorString: string, e: any) {
    e.preventDefault();
    // @ts-ignore 
    const break_clockingTYPE: BreakClockingTYPE = element.getAttribute(selectorString);
    // console.log({ e, element, break_clockingTYPE });
    const IN = document.querySelectorAll('input[type="checkbox"][multi-break-check-in]');
    const OUT = document.querySelectorAll('input[type="checkbox"][multi-break-check-out]');

    let checkedIn: Array<number> = [],
      checkedOut: Array<number> = [];
    IN.forEach((checkbox: HTMLInputElement) => {
      // console.log({"IN - checkbox": checkbox});
      if (checkbox.checked) {
        const memberId = Number(checkbox.getAttribute("multi-break-check-in"));
        if (!checkedIn.includes(memberId)) {
          checkedIn.push(memberId)
        }
      }
    });
    OUT.forEach((checkbox: HTMLInputElement) => {
      // console.log({"OUT - checkbox": checkbox});
      if (checkbox.checked) {
        const memberId = Number(checkbox.getAttribute("multi-break-check-out"));
        if (!checkedOut.includes(memberId)) {
          checkedOut.push(memberId)
        }
      }
    });
    if (break_clockingTYPE === "inTime" || break_clockingTYPE === "startBreak") {
      // console.log({ break_clockingTYPE, "checkedIn": checkedIn });      
      let action: string = "Initiate";
      if (break_clockingTYPE === "inTime") {
        action = "Clock In";
      }
      if (break_clockingTYPE === "startBreak") {
        action = "Start Break";
      }
      await PATCH_AttendanceMultipleClockingBreak(
        this.meetingEventId, action, break_clockingTYPE, checkedIn, this._clockingTypes
      );
    } else if (break_clockingTYPE === "outTime" || break_clockingTYPE === "endBreak") {
      // console.log({break_clockingTYPE, "checkedOut": checkedOut});        
      let action: string = "Initiate";
      if (break_clockingTYPE === "outTime") {
        action = "Clock Out";
      }
      if (break_clockingTYPE === "endBreak") {
        action = "End Break";
      }
      await PATCH_AttendanceMultipleClockingBreak(
        this.meetingEventId, action, break_clockingTYPE, checkedOut, this._clockingTypes
      );
    }
  }

  async UpdateClockingList(e: any) {
    e.preventDefault();

    let today_date = new Date(),
      year = today_date.toLocaleString('default', { year: "numeric" }),
      month = today_date.toLocaleString('default', { month: "2-digit" }),
      day = today_date.toLocaleString('default', { day: "2-digit" }),
      filter_date = year + "-" + month + "-" + day;
    
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_date = "filter_date";
    
    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if (key === filterNameId_filter_date) {
        // console.log({value, });
        
        filter_date = value;
      }
    } 
    // console.log({ "filter_date": filter_date });
    
    await POST_AttendanceClockingUpdateClockingList(this.meetingEventId, filter_date);
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
    filterNameId_filter_date = "filter_date",
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
      if ((key === filterNameId_filter_date) || (key === filterNameId_filter_gender) || (key === filterNameId_filter_name)
        || (key === filterNameId_filter_identity) || (key === filterNameId_filter_member_category)
        || (key === filterNameId_filter_group) || (key === filterNameId_filter_subgroup)
        || (key === filterNameId_filter_from_age) || (key === filterNameId_filter_to_age)) {
        // console.log({value, });
        
        newObject[key] = value;
      }
    } 

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
    if (this.meetingEventId === 0) return;
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
    if (this.meetingEventId === 0) return;
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
          render: (data: any, type: any, clockingInfo: MemberClockingInfo_I) => __this.renderMemberInfo(data, type, clockingInfo),
          orderable: true
        },
        {
          data: 'inTime',
          render: (data: any, type: any, clockingInfo: MemberClockingInfo_I) => __this.renderClockInInfo(data, type, clockingInfo),
          orderable: true
        },
        {
          data: 'outTime',
          render: (data: any, type: any, clockingInfo: MemberClockingInfo_I) => __this.renderClockOutInfo(data, type, clockingInfo),
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
        __this.multiBreakClocking();
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

  createRenderRoot() {
    return this;
  }
}
