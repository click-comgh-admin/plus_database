import "@@assets/styles/views/admin/register/main.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-textarea';
import '@@addons/widgets/form/new/select';
import '../../../members/select-member-type';
import { UserLoginInfo_I } from "@@addons/interfaces/network_calls/login";
import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { getActiveBranchIdCookie } from "@@addons/functions/views/home/branch";
import { ClientBranches_I, ClientBranchShort_I } from "@@addons/interfaces/clients/branches";
import { GroupingsMemberCategories_I } from "@@addons/interfaces/members/groupings/member_categories";
import { GET_ClientBranches } from "@@addons/network/clients/branches";
import { GET_MemberGroupingsMemberCategories } from "@@addons/network/members/groupings/member_categories";
import { GroupingsGroup_I } from "@@addons/interfaces/members/groupings/group";
import { GET_MemberGroupingsGroups } from "@@addons/network/members/groupings/group";
import { POST_GroupingsSubgroupBulk } from "@@addons/network/members/groupings/subgroup/subgroup/post_bulk";
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from "@@addons/functions/app_settings";
import { getAppSettingsExtraSettings } from "@@addons/functions/app_settings/extra_settings";
import { AppSettingsExtraUserAccess } from "@@addons/functions/app_settings/extra_settings/user_access";
import { PAGE__IDS } from "../../page__id";


type groupSubgroupType = { id: number; name: string; isSelected: "true" | "false"; selected: boolean; };
let _branchGroups: { [branch: string]: GroupingsGroup_I[]} = {};
@customElement("membership-groupings-group_subgroup-subgroup-add-bulk")
export class MembershipGroupingsGroupSubgroupSubgroupGroupAddBulk extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private startSearchPage: number = 0;

  @property({ type: Number })
  private accountType: number = 0;

  @property({ type: Number })
  private selectedBranch: number = 1;

  @property({ type: Number })
  private selectedCategory: number = 1;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _groups: GroupingsGroup_I[] = [];

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        this.accountType = 1;
        this.selectedBranch = this._userLoginInfo[0].user.branchId;
        // console.log({ "this.selectedBranch": this.selectedBranch });
        setTimeout(() => {
          this.accountType = 0
          // console.log({ "this.accountType-2": this.accountType });
        }, 1000);
        // console.log({ "this.accountType-1": this.accountType });
        
      }
    }

    await this.getGroups();
    await this.getBranches();
    await this.getClientMemberCategories();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.grouping, viewType: "Edit"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }
    
    const groups = this._groups.map(_group => {
      const group: groupSubgroupType = {
        id: _group.id, name: _group.group,
        isSelected: "false", selected: false,
      };
      // console.log({"_group.id": _group.id, "filterNameId_groupVal": filterNameId_groupVal, group});
      
      return group
    });

    return html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Sub-Group</h1>
                    <h3 class="h3">Create Sub-Group!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="members-groupings-subgroup" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                        ${userBranch === 1 ? html`
                          <mwc-list-item value="0">Select Branch</mwc-list-item>
                          ${this._branches.map((value) => {
                              if (userBranch === value.id) {
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
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Member Category</h4>
                      <pdb-membership-select-member-type defaultValue="1" 
                        name="memberCategoryId" id="memberCategoryId"
                        label="Select Member Category" outlined required>
                      </pdb-membership-select-member-type>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Group</h4>
                      <select-input name="groupId" class="w-full" id="groupId" label="Select Group" .options="${groups}"
                        outlined required >
                      </select-input>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Sub-Group(s) - <span class="text-red-600">Separated by commas</span></h4>
                      <mwc-textarea name="_subgroups_" id="_subgroups_" label="Enter Sub-Group(s) - Separated by commas"
                        outlined required @keyup="${this.subgroups_to_select_options}" @change="${this.subgroups_to_select_options}">
                      </mwc-textarea>
                      <select name="subgroups[]" id="subgroups" hidden multiple></select>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Create" raised class="w-full" @click="${this.submitForm}">
                    </mwc-button>
                  </div>
                
                  <div class="flex form-input-container items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                    <label class="block font-medium text-sm text-gray-600 w-full">
                      ...
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private categoryValueChanged() {
    const _this = this; 
    document.querySelectorAll('[name="memberCategoryId"]').forEach((_select) => {
      _select.addEventListener("change", async (evt) => {
        // @ts-ignore 
        _this.selectedCategory = _select.selectedCategory;
        // console.log({ "this.selectedCategory": this.selectedCategory });
        
        if (!Number.isNaN(this.selectedCategory) ) {
          await this.getGroups(
            `?branchId=${this.selectedBranch}&memberCategoryId=${this.selectedCategory}`,
            this.selectedBranch, this.selectedCategory
          );
        }
      });
    });
  }

  async branchChange(e: Event) {
    // @ts-ignore
    this.selectedBranch = Number.isNaN(e.currentTarget.value)? 0: Number(e.currentTarget.value);
    // console.log({ "this.selectedBranch": this.selectedBranch });
        
    if (!Number.isNaN(this.selectedCategory) ) {
      await this.getGroups(
        `?branchId=${this.selectedBranch}&memberCategoryId=${this.selectedCategory}`,
        this.selectedBranch, this.selectedCategory
      );
    }
  }

  subgroups_to_select_options(e: Event) {
    // @ts-ignore
    const subgroups_txt = String(e.currentTarget.value);
    const subgroupsFields = document.querySelectorAll('[name="subgroups[]"][id="subgroups"]');
    // console.log({"subgroups_txt-subgroups_txt": subgroups_txt, "subgroupsFields-subgroupsFields": subgroupsFields});

    subgroupsFields.forEach(subgroupsField => {
      let subgroups: Array<String> = []
      subgroups_txt.split(',').forEach(_subgroup => {
        const subgroup = _subgroup.trim().split(",").join("");
        if (subgroup.length > 0 && subgroup !== "" && subgroup !== " ") {
          console.log({"_subgroup-_subgroup": _subgroup, "group-group": subgroup});
          if (!subgroups.includes(subgroup)) {
            subgroups.push(subgroup);
          }
        }
      });

      // @ts-ignore
      subgroupsField.innerHTML = subgroups.map(subgroup => {
        return "<option selected>"+subgroup+"</option>";
      })
    });
    
  }

  firstUpdated() {
    this.categoryValueChanged();
  }

  private async getGroups(url_params: string = "", branchID: number = null, categoryID: number = null) {
    const KEY_1 = (branchID === null) || branchID < 1 ? "__" : String(branchID),
      KEY_2 = (categoryID === null) || categoryID < 1 ? "__" : String(categoryID),
      KEY = `${KEY_1}-${KEY_2}`;
    // console.log({"_branchGroups": _branchGroups});
    
    this._groups = [];
    if (KEY in _branchGroups) {
      setTimeout(() => {
        this._groups = _branchGroups[KEY];
      }, 500);
      return;
    }
    
    const _networkResponse = await GET_MemberGroupingsGroups<GroupingsGroup_I>(null, url_params);
    let __groups: GroupingsGroup_I[] = [];

    if (_networkResponse === null) {
      __groups.push({ id: 0, group: "**NOT FOUND**", date: new Date() });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsGroup_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __groups = DATA;
      }
    }
    const new_data: Array<GroupingsGroup_I> = [];
    new_data.push(...this._groups, ...__groups);
    this._groups = new_data;
    _branchGroups[KEY] = this._groups;
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    await POST_GroupingsSubgroupBulk();
  }

  createRenderRoot() {
    return this;
  }
}
