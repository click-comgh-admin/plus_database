import { GroupingsMemberCategories_I, GroupingsMemberCategories_S } from "../member_categories";

export interface GroupingsGroup_I {
  id: number,
  clientId?: number,
  group?: string,
  branchId?: number,
  memberCategoryId?: GroupingsMemberCategories_I,
  createdBy?: number,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}

export function GroupingsGroup_S(data: any): GroupingsGroup_I {
  // console.log({data});
  
  const groupingsGroup_S: GroupingsGroup_I = {
    id: Number(data['id']),
    clientId: Number(data['clientId']),
    group: String(data['group']),
    branchId: Number(data['branchId']),
    memberCategoryId: GroupingsMemberCategories_S(data['memberCategoryId']),
    createdBy: Number(data['createdBy']),
    updatedBy: Number(data['updatedBy']),
    date: new Date(data['date']),
    updateDate: new Date(data['updateDate']),
  };

  return groupingsGroup_S;
}