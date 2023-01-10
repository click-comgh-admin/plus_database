// import { GET_MemberGroupingsGroups } from "@@addons/network/members/groupings/group";
// import { GroupingsGroup_I } from "../group";
// import { GroupingsMemberCategories_I, GroupingsMemberCategories_S } from "../member_categories";

// export interface GroupingsSubGroup_I {
//   id: number,
//   clientId?: number,
//   groupId?: number,
//   groupName?: string,
//   branchId?: number,
//   memberCategoryId?: GroupingsMemberCategories_I,
//   subgroup?: string,
//   createdBy?: number,
//   updatedBy?: number,
//   updateDate?: Date,
//   date?: Date,
// }

// export async function GroupingsSubGroup_S(data: any): Promise<GroupingsSubGroup_I> {
//   // console.log({data});
  
//   const groupingsSubGroup_S: GroupingsSubGroup_I = {
//     id: Number(data['id']),
//     clientId: Number(data['clientId']),
//     groupId: Number(data['groupId']),
//     groupName: await getGroup(data['groupId']),
//     subgroup: String(data['subgroup']),
//     branchId: Number(data['branchId']),
//     memberCategoryId: GroupingsMemberCategories_S(data['memberCategoryId']),
//     createdBy: Number(data['createdBy']),
//     updatedBy: Number(data['updatedBy']),
//     date: new Date(data['date']),
//     updateDate: new Date(data['updateDate']),
//   };

//   return groupingsSubGroup_S;
// }


// async function getGroup(ID: number) {
//   const _networkResponse = await GET_MemberGroupingsGroups<GroupingsGroup_I>(ID);
//   if (_networkResponse === null) {
//     return "???";
//   } else {
//     if (_networkResponse.response.success && 'group' in _networkResponse.response.data) {
      
//       const group: GroupingsGroup_I = _networkResponse.response.data;
//       return group.group;
//     } else {
//       let message = "";
//       let _message = _networkResponse.response.message;
//       if (Array.isArray(_message)) {
//         message = "Unknown Error!";
//       } else {
//         message = _message;
//       }
//       return message;
//     }
//   }
// }