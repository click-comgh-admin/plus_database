import { GroupingsGroup_I, GroupingsGroup_S } from "@@addons/interfaces/members/groupings/group";
import { GroupingsSubGroup_I, GroupingsSubGroup_S } from "@@addons/interfaces/members/groupings/subgroup";

export interface ClientUserGroupSubgroup_I {
  id?: number,
  clientId?: number,
  userId?: number,
  group?: Array<GroupingsGroup_I>,
  subgroup?: Array<GroupingsSubGroup_I>,
  date?: Date,
}

export function ClientUserGroupSubgroup_S(data: any): ClientUserGroupSubgroup_I {
  // console.log({data});

  let group: Array<GroupingsGroup_I> = [],
    subgroup: Array<GroupingsSubGroup_I> = [],
    clientUserGroupSubgroup_S: ClientUserGroupSubgroup_I = {};;

  if (data !== undefined) {
    if ('group' in data) {
      if (Array.isArray(data['group'])) {
        group = data['group'].map((value) => {
          return GroupingsGroup_S(value);
        });
      }
    }
    if ('subgroup' in data) {
      if (Array.isArray(data['subgroup'])) {
        subgroup = data['subgroup'].map((value) => {
          return GroupingsSubGroup_S(value);
        });
      }
    }
    clientUserGroupSubgroup_S = {
      id: Number(data['id']),
      clientId: Number(data['clientId']),
      userId: Number(data['userId']),
      group: group,
      subgroup: subgroup,
      date: new Date(data['date']),
    };
  }

  return clientUserGroupSubgroup_S;
}