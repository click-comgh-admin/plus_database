import '@@assets/styles/views/admin/user/form.scss';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-select';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@@addons/widgets/form/new/select';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { POST_ClientUserGroupSubgroup } from '@@addons/network/clients/users/group_subgroup_add';
import { PUT_ClientUserGroupSubgroup } from '@@addons/network/clients/users/group_subgroup_update';
import { GroupModel, Convert as gmConvert } from '@@addons/interfaces/members/groupings/group/models';
import { SubGroupModel, Convert as sgmConvert } from '@@addons/interfaces/members/groupings/subgroup/models';
import { ClientUserGroupSubgroupModel } from '@@addons/interfaces/clients/users/model/group_subgroup';


type groupSubgroupType = { id: number; name: string; isSelected: "true" | "false"; selected: boolean; };
@customElement("pdb-admin-user-group-subgroup-form")
export class PdbAdminUserGroupSubgroupForm extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public userId?: number = 0;

  @property({ type: String })
  public edit: "true" | "false" = "false";

  @property({ type: Boolean })
  public editAccess?: boolean = false;

  @property({ type: Boolean })
  public isEditable?: boolean = false;

  @property({ type: String })
  public page_type: "mine" | "not-mine" = "mine";

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _groups: GroupModel[] = [];

  @property({ type: Array })
  private _subgroups: SubGroupModel[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  private get _clientUserDefault(): NetworkCallResponse_I<ClientUsers_I> {
    const user: ClientUsers_I = {};
    return { data: user, message: "", success: false }
  }

  private _clientUser: NetworkCallResponse_I<ClientUsers_I> = this._clientUserDefault;

  public set clientUser(value: NetworkCallResponse_I<ClientUsers_I>) {
    this._clientUser = value;
    this.requestUpdate();
  }

  public get clientUser(): NetworkCallResponse_I<ClientUsers_I> {
    return this._clientUser;
  }

  private get _clientUserGroupSubgroupDefault(): NetworkCallResponse_I<ClientUserGroupSubgroupModel> {
    const groupSubgroup: ClientUserGroupSubgroupModel = {};
    return { data: groupSubgroup, message: "", success: false }
  }

  private _clientUserGroupSubgroup: NetworkCallResponse_I<ClientUserGroupSubgroupModel> = this._clientUserGroupSubgroupDefault;

  public set clientUserGroupSubgroup(value: NetworkCallResponse_I<ClientUserGroupSubgroupModel>) {
    this._clientUserGroupSubgroup = value;
    this.requestUpdate();
  }

  public get clientUserGroupSubgroup(): NetworkCallResponse_I<ClientUserGroupSubgroupModel> {
    return this._clientUserGroupSubgroup;
  }

  async connectedCallback() {
    super.connectedCallback();
    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    await this.getBranches();
    await this.getGroups();
    await this.getSubGroups();

    // console.log({"clientUser": this.clientUser});
    // console.log({"clientUserGroupSubgroup": this.clientUserGroupSubgroup});
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this.edit === "true") {
      if (this.page_type === "mine") {
        this.isEditable = true;
      } else {
        if (this.editAccess) {
          this.isEditable = true;
        } else {
          this.isEditable = false;
        }
      }
      return html`
        ${this.groupSubgroup}
      `;
    } else {
      return html`
        ${this.form}
      `;
    }
  }

  private get groupSubgroup() {
    let clientId = 0;
    if (this._activeBranchId !== null) {
      clientId = this._activeBranchId[0].accountId;
    }

    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Group(s)/ Sub-Group(s)</h1>
                  <h3 class="h3">Update Admin User Group(s)/ Sub-Group(s)!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user-group-subgroup" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.accessFieldSelectBox}
                  <div class="col-md-12 col-lg-8">
                    <input type="hidden" name="clientId" id="clientId" value="${clientId}" />
                    <input type="hidden" name="userId" id="userId" value="${this.userId}" />
                    <div class="form-input-container">
                      <mwc-button label="Update Group(s)/ Subgroup(s)" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>
      
                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private get form() {

    let clientId = 0;
    if (this._activeBranchId !== null) {
      clientId = this._activeBranchId[0].accountId;
    }

    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Group(s)/ Sub-Group(s)</h1>
                  <h3 class="h3">Add Admin User Group(s)/ Sub-Group(s)!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user-group-subgroup"
                enctype="multipart/form-data">
                <div class="row justify-content-center">
      
                  ${this.accessFieldSelectBox}
                  <div class="col-md-12 col-lg-8">
                    <input type="hidden" name="clientId" id="clientId" value="${clientId}" />
                    <input type="hidden" name="userId" id="userId" value="${this.userId}" />
                    <div class="form-input-container">
                      <mwc-button label="Add Group(s)/ Sub-Group(s)" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>
      
                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private get groupsSubgroups() {
    type returnType = { groups: groupSubgroupType[], subgroups: groupSubgroupType[] };
    let groups: groupSubgroupType[] = [];
    let subgroups: groupSubgroupType[] = [];

    const clientUserGroupSubgroup = this.clientUserGroupSubgroup,
      _data = clientUserGroupSubgroup.data,
      DATA = Array.isArray(_data) ? _data[0] : _data,
      SUCCESS = clientUserGroupSubgroup.success;

    this._groups.forEach(_group => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      if (SUCCESS) {
        DATA?.group.forEach(group => {
          if (group.id === _group.id) {
            isSelected = true;
            isSelectedAlt = "true";
          }
        });
      }
      const group: groupSubgroupType = {
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
      if (SUCCESS) {
        DATA?.subgroup.forEach(subgroup => {
          if (subgroup.id === _subgroup.id) {
            isSelected = true;
            isSelectedAlt = "true";
          }
        });
      }
      const subgroup: groupSubgroupType = {
        id: _subgroup.id, name: `${_subgroup.groupID.group} => ${_subgroup.subgroup}`,
        isSelected: isSelectedAlt, selected: isSelected,
      };

      if (!subgroups.includes(subgroup)) {
        subgroups.push(subgroup);
      }
    });

    const _returnType: returnType = {
      groups: groups, subgroups: subgroups,
    }
    return _returnType;
  }

  private get accessFieldSelectBox() {
    const groupsSubgroups = this.groupsSubgroups,
      groups = groupsSubgroups.groups,
      subgroups = groupsSubgroups.subgroups;

    return html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select User Group(s)</h4>
        <select-input name="group" multiple class="w-full" id="group" label="Select User Group(s)" .options="${groups}"
          outlined required>
        </select-input>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select User Sub-Group(s)</h4>
        <select-input name="subgroup" multiple class="w-full" id="subgroup" label="Select User Sub-Group(s)"
          .options="${subgroups}" outlined required>
        </select-input>
      </div>
    `;
  }

  firstUpdated() { }

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

  async submitForm(e: PointerEvent) {
    e.preventDefault();

    if (this.edit === "true") {
      if (this.isEditable) {
        const clientUserGroupSubgroup = this.clientUserGroupSubgroup,
          _data = clientUserGroupSubgroup.data,
          DATA = Array.isArray(_data) ? _data[0] : _data,
          SUCCESS = clientUserGroupSubgroup.success;
        if (SUCCESS) {
          try {
          await PUT_ClientUserGroupSubgroup(DATA.id);
            
          } catch (error) {
            await POST_ClientUserGroupSubgroup();
          }
        }
      }
    } else {
    }
  }

  createRenderRoot() {
    return this;
  }
}
