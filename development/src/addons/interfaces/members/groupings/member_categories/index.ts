export interface GroupingsMemberCategories_I {
  id: number,
  category: string,
  clientId?: number,
  createdBy?: number,
  date?: Date,
  updatedBy?: number,
  updateDate?: Date,
}
export function GroupingsMemberCategories_S(data: any): GroupingsMemberCategories_I {
  // console.log({data});

  const groupingsMemberCategories_S: GroupingsMemberCategories_I = {
    id: typeof data == "number" ? data: Number(data['id']),
    clientId: Number(data['clientId']),
    category: String(data['category']),
    createdBy: Number(data['createdBy']),
    updatedBy: Number(data['updatedBy']),
    date: new Date(data['date']),
    updateDate: new Date(data['updateDate']),
  };

  return groupingsMemberCategories_S;
}