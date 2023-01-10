import '@@assets/styles/views/branch/main.scss';
import "@@assets/styles/views/home/dashboard.scss";
import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import '@material/mwc-circular-progress';
import '@@addons/widgets/form/new/select';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import '@@addons/widgets/profile_photo';
import { base64Encode } from '@@addons/functions/base64';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { GET_GenericGender } from '@@addons/network/generic/gender';
import { GenericGenderInfo_I, GenericGenderInfo_S } from '@@addons/interfaces/generic/gender';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { Button } from '@material/mwc-button';
import './select-member-type';
import '../../no_access/account_expired';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import '../../no_access/no_page_entry';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from './page__id';
import { AppSetup } from '@@addons/functions/app_settings';
import { MembershipMixedUserModel, Convert as mmumConvert } from '@@addons/interfaces/members/user/mixed';
import { GroupModel, Convert as gmConvert } from '@@addons/interfaces/members/groupings/group/models';
import { SubGroupModel, Convert as sgmConvert } from '@@addons/interfaces/members/groupings/subgroup/models';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { EducationStatusModel, Convert as esmConvert } from '@@addons/interfaces/members/user/status/education_status';
import { MaritalStatusModel, Convert as msmConvert } from '@@addons/interfaces/members/user/status/marital_status';
import { OccupationStatusModel, Convert as osmConvert } from '@@addons/interfaces/members/user/status/occupation_status';
import { ProfessionStatusModel, Convert as psmConvert } from '@@addons/interfaces/members/user/status/profession_status';
import { GET_EducationStatus } from '@@addons/network/members/status/education';
import { GET_MaritalStatus } from '@@addons/network/members/status/marital';
import { GET_OccupationStatus } from '@@addons/network/members/status/occupation';
import { GET_ProfessionStatus } from '@@addons/network/members/status/profession';
import { GET_MembershipUserDownload } from '@@addons/network/members/membership/users/download';


type filterSelectType = { id: number|""; name: string; isSelected: "true" | "false"; selected: boolean; };
@customElement("pdb-membership-members")
export class PdbMembershipMembers extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: String })
  private memberProfileBaseUrl: string = "/member/member-profile?view=";

  // @property({ type: String })
  // private memberProfileEditBaseUrl: string = "/member/update-profile?edit=";

  @property({ type: Array })
  private _genders: GenericGenderInfo_I[] = [];

  @property({ type: Array })
  private _groups: GroupModel[] = [];

  @property({ type: Array })
  private _subgroups: SubGroupModel[] = [];

  @property({ type: Array })
  public maritalStatusInfo: MaritalStatusModel[] = [];

  @property({ type: Array })
  public occupationStatusInfo: OccupationStatusModel[] = [];

  @property({ type: Array })
  public professionStatusInfo: ProfessionStatusModel[] = [];

  @property({ type: Array })
  public educationStatusInfo: EducationStatusModel[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Boolean })
  private downloadingFile: boolean = false;

  @property({ type: Number })
  private _memberType?: number = 1;

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  private __members: NetworkCallPaginResponse_I<MembershipMixedUserModel> = null;

  public set _members(value: NetworkCallPaginResponse_I<MembershipMixedUserModel>) {
    this.__members = value;
    this.requestUpdate();
  }

  public get _members(): NetworkCallPaginResponse_I<MembershipMixedUserModel> {
    return this.__members;
  }

  private filterBox: FilterFieldBox;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => {
      if (this._hasSetup !== null) {
        return this._hasSetup = true;
      }
    });

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
    await this.getGroups();
    await this.getSubGroups();
    await this.getMaritalStatus();
    await this.getEducationStatus();
    await this.getOccupationStatus();
    await this.getProfessionStatus();
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

  private get downloadBtns() {
    return html`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadMemberExcel}">
        </mwc-button> 
        ${this.downloadingFile? html`<mwc-circular-progress indeterminate></mwc-circular-progress>`: nothing}
      </div>
    `
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_gender = "filter_gender",
      filterNameId_filter_name = "filter_name",
      filterNameId_filter_identity = "filter_identity",
      filterNameId_memberType = "memberType",
      filterNameId_groupId = "groupId",
      filterNameId_subgroupId = "subgroupId",
      filterNameId_maritalStatus = "maritalStatus",
      filterNameId_occupationalStatus = "occupationalStatus",
      filterNameId_educationalStatus = "educationalStatus",
      filterNameId_professionStatus = "professionStatus";

    let filterNameId_filter_genderVal: string = null,
      filterNameId_filter_nameVal:string = null,
      filterNameId_filter_identityVal: string = null,
      filterNameId_memberTypeVal: string = null,
      filterNameId_groupIdVal: string = null,
      filterNameId_subgroupIdVal: string = null,
      filterNameId_maritalStatusVal: string = null,
      filterNameId_occupationalStatusVal: string = null,
      filterNameId_educationalStatusVal: string = null,
      filterNameId_professionStatusVal: string = null;
    
      for (const key in _urlQueryParams) {
        let value = String(_urlQueryParams[key]);
        value = value === "" ? null : value;
        if (key === filterNameId_filter_gender) {
          filterNameId_filter_genderVal = value;
        }
        if (key === filterNameId_filter_name) {
          filterNameId_filter_nameVal = value;
        }
        if (key === filterNameId_filter_identity) {
          filterNameId_filter_identityVal = value;
        }
        if (key === filterNameId_memberType) {
          filterNameId_memberTypeVal = value;
        }
        if (key === filterNameId_groupId) {
          filterNameId_groupIdVal = value;
        }
        if (key === filterNameId_subgroupId) {
          filterNameId_subgroupIdVal = value;
        }
        if (key === filterNameId_maritalStatus) {
          filterNameId_maritalStatusVal = value;
        }
        if (key === filterNameId_occupationalStatus) {
          filterNameId_occupationalStatusVal = value;
        }
        if (key === filterNameId_educationalStatus) {
          filterNameId_educationalStatusVal = value;
        }
        if (key === filterNameId_professionStatus) {
          filterNameId_professionStatusVal = value;
        }
      }
    
    const nameField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name</h4>
          <mwc-textfield type="text" name="${filterNameId_filter_name}" id="${filterNameId_filter_name}" label="Search By Name" 
            value="${filterNameId_filter_nameVal === null ? "" : filterNameId_filter_nameVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;
    
    const genderField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Gender</h4>
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
    
    const identifyField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Member ID</h4>
          <mwc-textfield name="${filterNameId_filter_identity}" id="${filterNameId_filter_identity}" label="Search By Member ID"
            value="${filterNameId_filter_identityVal === null ? "" : filterNameId_filter_identityVal}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;

    const memberCategoryField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${filterNameId_memberTypeVal}" 
            name="${filterNameId_memberType}" id="${filterNameId_memberType}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;

    const selectedGroupID = Number.isNaN(filterNameId_groupIdVal) ? 0 : Number(filterNameId_groupIdVal),
      selectedSubGroupID = Number.isNaN(filterNameId_subgroupIdVal) ? 0 : Number(filterNameId_subgroupIdVal);
    const groupsSubgroups = this.groupsSubgroups(selectedGroupID, selectedSubGroupID);
    // console.log({groupsSubgroups});
    
    
    const groupField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="groupId" class="w-full" id="groupId" label="Select Group"
            .options="${groupsSubgroups.groups}" outlined required>
          </select-input>
        </div>
      </div>`;
    
    const subGroupField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="subgroupId" class="w-full" id="subgroupId" label="Select Sub-Group"
            .options="${groupsSubgroups.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`;
    
    const selectedMaritalStatusID = Number.isNaN(filterNameId_maritalStatusVal) ? 0 : Number(filterNameId_maritalStatusVal),
      selectedOccupationalStatusID = Number.isNaN(filterNameId_occupationalStatusVal) ? 0 : Number(filterNameId_occupationalStatusVal),
      selectedEducationalStatusID = Number.isNaN(filterNameId_educationalStatusVal) ? 0 : Number(filterNameId_educationalStatusVal),
      selectedProfessionStatusID = Number.isNaN(filterNameId_professionStatusVal) ? 0 : Number(filterNameId_professionStatusVal);
    
    const MOPES = this.maritalOccupationalProfessionEducationalStatus(
      selectedMaritalStatusID, selectedOccupationalStatusID, selectedEducationalStatusID, selectedProfessionStatusID
    );
    // console.log({MOPES});
    
    
    const maritalStatusField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Marital Status</h4>
          <select-input name="maritalStatus" class="w-full" id="maritalStatus" label="Select Marital Status"
            .options="${MOPES.maritalStatuses}" outlined required>
          </select-input>
        </div>
      </div>`;
    
    const occupationalStatusField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Occupational Status</h4>
          <select-input name="occupationalStatus" class="w-full" id="occupationalStatus" label="Select Occupational Status"
            .options="${MOPES.occupationalStatuses}" outlined required>
          </select-input>
        </div>
      </div>`;
    
    const educationalStatusField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Educational Status</h4>
          <select-input name="educationalStatus" class="w-full" id="educationalStatus" label="Select Educational Status"
            .options="${MOPES.educationalStatuses}" outlined required>
          </select-input>
        </div>
      </div>`;
    
    const professionField = html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Profession Status</h4>
          <select-input name="professionStatus" class="w-full" id="professionStatus" label="Select Profession Status"
            .options="${MOPES.professionStatuses}" outlined required>
          </select-input>
        </div>
      </div>`;

      returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${nameField} ${genderField} ${identifyField} ${memberCategoryField}
              <div class="col-md-12 my-2"><hr/></div>
              ${groupField} ${subGroupField}
              <div class="col-md-12 my-2"><hr/></div>
              ${maritalStatusField} ${occupationalStatusField} ${educationalStatusField} ${professionField}
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

  private groupsSubgroups(selectedGroupID: number, selectedSubGroupID: number) {
    type returnType = { groups: filterSelectType[], subgroups: filterSelectType[] };
    let groups: filterSelectType[] = [{id: 0, name: "Select Group Status", isSelected: "false", selected: false}];
    let subgroups: filterSelectType[] = [{id: 0, name: "Select Sub-Group Status", isSelected: "false", selected: false}];

    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});
    

    this._groups.forEach(_group => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
        if (selectedGroupID === _group.id) {
          isSelected = true;
          isSelectedAlt = "true";
        }
      const group: filterSelectType = {
        id: _group.id, name: _group.group, isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!groups.includes(group)) {
        groups.push(group);
      }
    });

    // console.log({"this._subgroups": this._subgroups})
    this._subgroups.forEach(_subgroup => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
        if (selectedSubGroupID === _subgroup.id) {
          isSelected = true;
          isSelectedAlt = "true";
        }
      const subgroup: filterSelectType = {
        id: _subgroup.id, name: `${_subgroup.groupID.group} => ${_subgroup.subgroup}`,
        isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!subgroups.includes(subgroup)) {
        subgroups.push(subgroup);
      }
    });

    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});
    // console.log({"groups-groups": groups, "subgroups-subgroups": subgroups});

    const _returnType: returnType = {
      groups: groups, subgroups: subgroups,
    }
    return _returnType;
  }

  private maritalOccupationalProfessionEducationalStatus(selectedMaritalStatusID: number, selectedOccupationalStatusID: number, selectedEducationalStatusID: number, selectedProfessionStatusID: number, ) {
    type returnType = { maritalStatuses: filterSelectType[], occupationalStatuses: filterSelectType[], educationalStatuses: filterSelectType[], professionStatuses: filterSelectType[] };
    let maritalStatuses: filterSelectType[] = [{id: 0, name: "Select Marital Status", isSelected: "false", selected: false}];
    let professionStatuses: filterSelectType[] = [{id: 0, name: "Select Profession Status", isSelected: "false", selected: false}];
    let educationalStatuses: filterSelectType[] = [{id: 0, name: "Select Education Status", isSelected: "false", selected: false}];
    let occupationalStatuses: filterSelectType[] = [{id: 0, name: "Select Occupation Status", isSelected: "false", selected: false}];    

    this.maritalStatusInfo.forEach(_maritalStatus => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
        if (selectedMaritalStatusID === _maritalStatus.id) {
          isSelected = true;
          isSelectedAlt = "true";
        }
      const maritalStatus: filterSelectType = {
        id: _maritalStatus.id, name: _maritalStatus.name, isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!maritalStatuses.includes(maritalStatus)) {
        maritalStatuses.push(maritalStatus);
      }
    });

    this.professionStatusInfo.forEach(_professionStatus => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
        if (selectedProfessionStatusID === _professionStatus.id) {
          isSelected = true;
          isSelectedAlt = "true";
        }
      const professionStatus: filterSelectType = {
        id: _professionStatus.id, name: _professionStatus.name, isSelected: isSelectedAlt, selected: isSelected,
      };
  
      if (!professionStatuses.includes(professionStatus)) {
        professionStatuses.push(professionStatus);
      }
    });

    this.educationStatusInfo.forEach(_educationalStatus => {
      let isSelected: boolean = false,
      isSelectedAlt: "true" | "false" = "false";
      if (selectedEducationalStatusID === _educationalStatus.id) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const educationalStatus: filterSelectType = {
        id: _educationalStatus.id, name: _educationalStatus.name, isSelected: isSelectedAlt, selected: isSelected,
      };
    
      if (!educationalStatuses.includes(educationalStatus)) {
        educationalStatuses.push(educationalStatus);
      }
    });

    this.occupationStatusInfo.forEach(_occupationalStatus => {
      let isSelected: boolean = false,
      isSelectedAlt: "true" | "false" = "false";
      if (selectedOccupationalStatusID === _occupationalStatus.id) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const occupationalStatus: filterSelectType = {
        id: _occupationalStatus.id, name: _occupationalStatus.name, isSelected: isSelectedAlt, selected: isSelected,
      };
      
      if (!occupationalStatuses.includes(occupationalStatus)) {
        occupationalStatuses.push(occupationalStatus);
      }
    });

    const _returnType: returnType = {
      maritalStatuses: maritalStatuses, occupationalStatuses: occupationalStatuses,
      educationalStatuses: educationalStatuses, professionStatuses: professionStatuses
    }
    return _returnType;
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
    // const memberType = this._memberType;
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    // let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "members/user?branchId=" + branchId + "&memberType=" + memberType + "&order__by=firstname&datatable_plugin";
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "members/user?branchId=" + branchId + "&order__by=firstname&datatable_plugin";

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
      filterNameId_filter_name = "filter_name",
      filterNameId_filter_identity = "filter_identity",
      filterNameId_memberType = "memberType",
      filterNameId_groupId = "groupId",
      filterNameId_subgroupId = "subgroupId",
      filterNameId_maritalStatus = "maritalStatus",
      filterNameId_occupationalStatus = "occupationalStatus",
      filterNameId_educationalStatus = "educationalStatus",
      filterNameId_professionStatus = "professionStatus";

    let newObject:any = {};
    // for (const key in _urlQueryParams) {
    //   let value = Number(_urlQueryParams[key]);
    //   if (!Number.isNaN(value) && (value !== 0)) {
    //     // console.log({value, });
        
    //     newObject[key] = value;
    //   }
    // }

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_filter_gender) || (key === filterNameId_filter_name)
        || (key === filterNameId_filter_identity) || (key === filterNameId_memberType)
        || (key === filterNameId_groupId) || (key === filterNameId_subgroupId)
        || (key === filterNameId_maritalStatus) || (key === filterNameId_occupationalStatus)
        || (key === filterNameId_educationalStatus) || (key === filterNameId_professionStatus)) {
        // console.log({value, });
        
        newObject[key] = value;

        if ((key === filterNameId_groupId) || (key === filterNameId_subgroupId)
          || (key === filterNameId_maritalStatus) || (key === filterNameId_occupationalStatus)
          || (key === filterNameId_educationalStatus) || (key === filterNameId_professionStatus)) {
          // console.log({value, });
          if (value === "0") {
            newObject[key] = "";
          }
        }
      }
    }

    if (!(filterNameId_memberType in newObject)) {
      newObject[filterNameId_memberType] = "1";
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

  private async getGroups() {
    const _networkResponse = await GET_MemberGroupingsGroups<any>();
    let __groups: GroupModel[] = [];

    if (_networkResponse === null) {
      __groups.push({ id: 0, group: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        // console.log({"_networkResponse.response.data": _networkResponse.response.data});

        const DATA: GroupModel[] = _networkResponse.response.data.map((group: any) => gmConvert.toGroupModel(JSON.stringify(group)));
        // console.log({DATA});
        __groups = DATA;
      }
    }
    const new_data: Array<GroupModel> = [];
    new_data.push(...this._groups, ...__groups);
    this._groups = new_data;
  }

  private async getSubGroups() {
    const _networkResponse = await GET_MemberGroupingsSubGroups<any>();
    let __subgroups: SubGroupModel[] = [];

    if (_networkResponse === null) {
      __subgroups.push({ id: 0, subgroup: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: SubGroupModel[] = _networkResponse.response.data.map((subgroup: any) => sgmConvert.toSubGroupModel(JSON.stringify(subgroup)));
        // console.log({DATA});
        __subgroups = DATA;
      }
    }
    const new_data: Array<SubGroupModel> = [];
    new_data.push(...this._subgroups, ...__subgroups);
    this._subgroups = new_data;
  }
  
  private async getMaritalStatus() {
    const _networkResponse = await GET_MaritalStatus<any>();
    // console.log({_networkResponse});
    
    let _maritalStatusInfo: MaritalStatusModel[] = [
      {name: "Select Marital Status"}
    ];

    if (_networkResponse === null) {
      _maritalStatusInfo.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: MaritalStatusModel[] = data.map(value => {
          return msmConvert.toMaritalStatusModel(JSON.stringify(value))
        });
        // console.log({DATA});
        _maritalStatusInfo = [..._maritalStatusInfo, ...DATA];
      }
    }
    
    const new_data: Array<MaritalStatusModel> = [];
    new_data.push(...this.maritalStatusInfo, ..._maritalStatusInfo);
    this.maritalStatusInfo = new_data;
  }

  private async getOccupationStatus() {
    const _networkResponse = await GET_OccupationStatus<any>();
    // console.log({_networkResponse});
    
    let _occupationStatusInfo: OccupationStatusModel[] = [
      {name: "Select Occupation Status"}
    ];

    if (_networkResponse === null) {
      _occupationStatusInfo.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: OccupationStatusModel[] = data.map(value => {
          return osmConvert.toOccupationStatusModel(JSON.stringify(value))
        });
        // console.log({DATA});
        _occupationStatusInfo = [..._occupationStatusInfo, ...DATA];
      }
    }

    const new_data: Array<OccupationStatusModel> = [];
    new_data.push(...this.occupationStatusInfo, ..._occupationStatusInfo);
    this.occupationStatusInfo = new_data;
  }

  private async getProfessionStatus() {
    const _networkResponse = await GET_ProfessionStatus<any>();
    // console.log({_networkResponse});
    
    let _professionStatusInfo: ProfessionStatusModel[] = [
      {name: "Select Profession Status"}
    ];

    if (_networkResponse === null) {
      _professionStatusInfo.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: ProfessionStatusModel[] = data.map(value => {
          return psmConvert.toProfessionStatusModel(JSON.stringify(value))
        });
        // console.log({DATA});
        _professionStatusInfo = [..._professionStatusInfo, ...DATA];
      }
    }

    const new_data: Array<ProfessionStatusModel> = [];
    new_data.push(...this.professionStatusInfo, ..._professionStatusInfo);
    this.professionStatusInfo = new_data;
  }

  private async getEducationStatus() {
    const _networkResponse = await GET_EducationStatus<any>();
    // console.log({_networkResponse});
    
    let _educationStatusInfo: EducationStatusModel[] = [
      {name: "Select Education Status"}
    ];

    if (_networkResponse === null) {
      _educationStatusInfo.push({ id: 0, name: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: EducationStatusModel[] = data.map(value => {
          return esmConvert.toEducationStatusModel(JSON.stringify(value))
        });
        // console.log({DATA});
        _educationStatusInfo = [..._educationStatusInfo, ...DATA];
      }
    }

    const new_data: Array<EducationStatusModel> = [];
    new_data.push(...this.educationStatusInfo, ..._educationStatusInfo);
    this.educationStatusInfo = new_data;
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
          render: function (data: any, type: any, member: MembershipMixedUserModel) {
            member = mmumConvert.toMembershipMixedUserModel(JSON.stringify(member))
            // console.log({ data, type, member });
            const ID = base64Encode(String(member.id), true);
            return `<div class="flex items-center whitespace-normal mb-0">
                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${__this.memberProfileBaseUrl}${ID}" type="member"
                  url="${member.profilePicture}" size="16"></user-profile-photo>
                <p class="ml-1 mb-0">${member.firstname} ${member.middlename} ${member.surname}</p>
              </div>
              <span class="whitespace-normal shadow p-1">
                <i class="ml-1"><b>ID: </b> ${member.identification}</i>
              </span>`;
          },
          orderable: true
        },
        {
          data: 'firstname',
          render: function (data: any, type: any, member: MembershipMixedUserModel) {
            member = mmumConvert.toMembershipMixedUserModel(JSON.stringify(member))
            const ID = base64Encode(String(member.id), true);
            // return `<div class="flex flex-col md:flex-row items-center whitespace-normal">
            //   <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
            //     href="${__this.memberProfileBaseUrl}${ID}" label="Open"></link-button>
            //   <!-- <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
            //     href="${__this.memberProfileEditBaseUrl}${ID}" label="Edit"></link-button> -->
            // </div>`;
            return `<div class="flex flex-col md:flex-row items-center whitespace-normal">
              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                href="${__this.memberProfileBaseUrl}${ID}" label="Open"></link-button>
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

  private async downloadMemberExcel() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }

    let URL = "?branchId=" + branchId + "&order__by=firstname";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    // console.log({URL});
    
    this.downloadingFile = true;
    await GET_MembershipUserDownload<any>(URL);
    this.downloadingFile = false;
  }

  createRenderRoot() {
    return this;
  }
}
