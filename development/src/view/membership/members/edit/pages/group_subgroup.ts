import '@material/mwc-button';
import '@@addons/widgets/form/new/select';
import { GroupModel, Convert as gmConvert } from '@@addons/interfaces/members/groupings/group/models';
import { GroupMemberModel, Convert as gmmConvert } from '@@addons/interfaces/members/groupings/group/models/member';
import { SubGroupModel, Convert as sgmConvert } from '@@addons/interfaces/members/groupings/subgroup/models';
import { SubGroupMemberModel, Convert as sgmmConvert } from '@@addons/interfaces/members/groupings/subgroup/models/member';
import { GET_MemberGroupingsGroups } from '@@addons/network/members/groupings/group';
import { GET_GroupingsGroupMembers } from '@@addons/network/members/groupings/group/group_member';
import { POST_GroupingsBulkGroupMember } from '@@addons/network/members/groupings/group/group_member/bulk';
import { GET_MemberGroupingsSubGroups } from '@@addons/network/members/groupings/subgroup';
import { GET_GroupingsSubGroupMembers } from '@@addons/network/members/groupings/subgroup/subgroup_member';
import { POST_GroupingsBulkSubgroupMember } from '@@addons/network/members/groupings/subgroup/subgroup_member/bulk';
import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';


type groupSubgroupType = { id: number; name: string; isSelected: "true" | "false"; selected: boolean; };
@customElement("pdb-membership-update-view-group-subgroup")
export class PdbMembershipUpdateViewGroupSubgroup extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public memberId?: number;

  @property({ type: Array })
  private _groups: GroupModel[] = [];

  @property({ type: Array })
  private _subgroups: SubGroupModel[] = [];

  @property({ type: Array })
  private memberGroups?: GroupMemberModel[] = null;

  @property({ type: Array })
  private memberSubGroups?: SubGroupMemberModel[] = null;

  async connectedCallback() {
    super.connectedCallback();

    await this.getGroups();
    await this.getSubGroups();
    await this.getMemberGroups();
    await this.getMemberSubgroups();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    const groupsSubgroups = this.groupsSubgroups,
      groups = groupsSubgroups.groups,
      subgroups = groupsSubgroups.subgroups;
    return html`
      <form method="post" action="#" class="form !my-1" make-general-posts="--awaiting-type--"
        enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Account Group(s)</h4>
              <select-input name="groups" multiple class="w-full" id="groups" label="Select Account Group(s)"
                .options="${groups}" outlined required>
              </select-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Account Sub-Group(s)</h4>
              <select-input name="subgroups" multiple class="w-full" id="subgroups" label="Select Account Sub-Group(s)"
                .options="${subgroups}" outlined required>
              </select-input>
            </div>
            <input type="hidden" name="memberId" id="memberId" value="${this.memberId}" />
          </div>
        </div>
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-row my-2 p-1 justify-evenly content-evenly">
          <div class="flex justify-end ">
            <mwc-button class="primary" raised type="submit" label="Update Group(s)" message="Update Group(s)"
              @click="${this.submitGroupsForm}">
            </mwc-button>
          </div>
          <div class="flex justify-end ">
            <mwc-button class="info" raised type="submit" label="Update Sub-Group(s)" message="Update Sub-Group(s)"
              @click="${this.submitSubGroupsForm}">
            </mwc-button>
          </div>
        </div>
      </form>
    `;
  }

  private get groupsSubgroups() {
    type returnType = { groups: groupSubgroupType[], subgroups: groupSubgroupType[] };
    let groups: groupSubgroupType[] = [];
    let subgroups: groupSubgroupType[] = [];

    // console.log({"this._groups": this._groups, "this.memberGroups": this.memberGroups});
    // console.log({"this._subgroups": this._subgroups, "this.memberSubGroups": this.memberSubGroups});
    

    this._groups.forEach(_group => {
      let isSelected: boolean = false,
        isSelectedAlt: "true" | "false" = "false";
      this.memberGroups?.forEach(group => {
        if (group.groupId.id === _group.id) {
          isSelected = true;
          isSelectedAlt = "true";
        }
      });
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
      this.memberSubGroups?.forEach(subgroup => {
        if (subgroup.subgroupId.id === _subgroup.id) {
          isSelected = true;
          isSelectedAlt = "true";
        }
      });
      const subgroup: groupSubgroupType = {
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

  firstUpdated() { }

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

  private async getMemberGroups() {
    const _networkResponse = await GET_GroupingsGroupMembers<any>(null, "?memberId=" + this.memberId);
    if (_networkResponse === null) {
      this.memberGroups = [];
    } else {
      const memberGroups = Array.isArray(_networkResponse.paginResponse.results) ? _networkResponse.paginResponse.results : [_networkResponse.paginResponse.results]
      this.memberGroups = memberGroups.map(memberGroup => gmmConvert.toGroupMemberModel(JSON.stringify(memberGroup)));
    }
  }

  private async getMemberSubgroups() {
    const _networkResponse = await GET_GroupingsSubGroupMembers<any>(null, "?memberId=" + this.memberId);
    if (_networkResponse === null) {
      this.memberSubGroups = [];
    } else {
      const memberSubGroups = Array.isArray(_networkResponse.paginResponse.results) ? _networkResponse.paginResponse.results : [_networkResponse.paginResponse.results]
      this.memberSubGroups = memberSubGroups.map(memberSubGroup => sgmmConvert.toSubGroupMemberModel(JSON.stringify(memberSubGroup)));
    }
  }

  async submitGroupsForm(e: PointerEvent) {
    const _handleMultitpleSubmitFormSelectors = this.handleMultitpleSubmitFormSelectors();
    _handleMultitpleSubmitFormSelectors.handle("group");

    await POST_GroupingsBulkGroupMember();
    _handleMultitpleSubmitFormSelectors.reset("group");
  }

  async submitSubGroupsForm(e: PointerEvent) {
    const _handleMultitpleSubmitFormSelectors = this.handleMultitpleSubmitFormSelectors();
    _handleMultitpleSubmitFormSelectors.handle("subgroup");

    await POST_GroupingsBulkSubgroupMember();
    _handleMultitpleSubmitFormSelectors.reset("subgroup");
  }

  handleMultitpleSubmitFormSelectors() {
    type submit_type = "group" | "subgroup";
    return {
      handle: (submitType: submit_type) => {
        // console.log({submitType});

        document.querySelectorAll('[make-general-posts="--awaiting-type--"]').forEach(form => {
          if (form.hasAttribute("make-general-posts")) {
            // console.log({formSubmitType});
            form.setAttribute("make-general-posts", `members-groupings-${submitType}-member-bulk`)
          }
        });
      },
      reset: (submitType: submit_type) => {
        document.querySelectorAll(`[make-general-posts="members-groupings-${submitType}-member-bulk"]`).forEach(form => {
          form.setAttribute("make-general-posts", "--awaiting-type--")
        });
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
