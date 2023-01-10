import "@@assets/styles/views/admin/register/main.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@@addons/widgets/form/new/select';
import '../../../members/select-member-type';
import { UserLoginInfo_I } from "@@addons/interfaces/network_calls/login";
import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { getActiveBranchIdCookie } from "@@addons/functions/views/home/branch";
import { ClientBranches_I, ClientBranchShort_I } from "@@addons/interfaces/clients/branches";
import { GroupingsMemberCategories_I } from "@@addons/interfaces/members/groupings/member_categories";
import { GET_ClientBranches } from "@@addons/network/clients/branches";
import { GET_MemberGroupingsMemberCategories } from "@@addons/network/members/groupings/member_categories";
import { GroupingsGroup_I, GroupingsGroup_S } from "@@addons/interfaces/members/groupings/group";
import { GET_MemberGroupingsGroups } from "@@addons/network/members/groupings/group";
import { POST_GroupingsSubgroup } from "@@addons/network/members/groupings/subgroup/subgroup/post";
import { base64Decode, base64Encode } from "@@addons/functions/base64";
import { urlQueryParamsGet } from "@@addons/functions/url_query_params";
import { PATCH_GroupingsSubgroup } from "@@addons/network/members/groupings/subgroup/subgroup/patch";
import { GET_MemberGroupingsSubGroups } from "@@addons/network/members/groupings/subgroup";
import { GroupingsSubGroup_I, GroupingsSubGroup_S } from "@@addons/interfaces/members/groupings/subgroup";


type groupSubgroupType = { id: number; name: string; isSelected: "true" | "false"; selected: boolean; };
let _branchGroups: { [branch: string]: GroupingsGroup_I[]} = {};
@customElement("membership-groupings-group_subgroup-subgroup-edit")
export class MembershipGroupingsGroupSubgroupSubgroupGroupEdit extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private startSearchPage: number = 0;

  @property({ type: Number })
  private accountType: number = 0;

  @property({ type: Number })
  private subGroupId?: number = 0;

  @property({ type: String })
  private subGroupIdEnc?: string = null;

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
  private _subGroups: GroupingsSubGroup_I[] = [];

  async connectedCallback() {
    super.connectedCallback();

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

    this.getSubGroupId();

    await this.getSubGroupId();
    await this.getSubGroup(this.subGroupId);
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
    if (this._subGroups.length < 1) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._subGroups === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Sub-Group </span>: Not Found</h4>
          </div>
        </div>
      `;
    }

    const SUB_GROUP = this._subGroups[0];

    return html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Change Sub-Group</h1>
                    <h3 class="h3">Update Sub-Group!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="members-groupings-subgroup" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="_branchId_" id="_branchId_" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((value) => {
                          if (value.id === SUB_GROUP.branchId) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                          }
                        })}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Member Category</h4>
                      <pdb-membership-select-member-type defaultValue="${String(SUB_GROUP.memberCategoryId.id)}" 
                        name="_memberCategoryId_" id="_memberCategoryId_"
                        label="Select Member Category" outlined required>
                      </pdb-membership-select-member-type>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Group</h4>
                      <mwc-select class="w-full" setSelectedGroupId label="Select Group"
                        name="_group_" id="_group_" outlined required >
                        <mwc-list-item value="${SUB_GROUP.id}" selected>${SUB_GROUP.groupName}</mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Sub-Group</h4>
                      <mwc-textfield name="subgroup" id="subgroup" label="Enter Sub-Group"
                        outlined required value="${SUB_GROUP.subgroup}">
                      </mwc-textfield>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Update" raised class="w-full" @click="${this.submitForm}">
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

  firstUpdated() {}

  private getSubGroupId() {
    let subGroupId = urlQueryParamsGet('view-subgroup');
    // console.log({ subGroupId });
    let _subGroupId = subGroupId !== null ? base64Decode(subGroupId) : null;
    this.subGroupId = Number.isNaN(_subGroupId) ? null : Number(_subGroupId);
    // console.log({ "this.subGroupId": this.subGroupId });
    this.subGroupIdEnc = base64Encode(String(this.subGroupId), true);
  }

  private async getSubGroup(ID: number) {
    const _networkResponse = await GET_MemberGroupingsSubGroups<GroupingsGroup_I>(ID);
    if (_networkResponse !== null) {
      if (_networkResponse.response.success && 'subgroup' in _networkResponse.response.data) {
        this._subGroups = [GroupingsSubGroup_S(_networkResponse.response.data)];
      }
    }
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
    await PATCH_GroupingsSubgroup(this.subGroupId);
  }

  createRenderRoot() {
    return this;
  }
}
