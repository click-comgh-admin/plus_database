export interface ClientBranches_I {
  id: number,
  name: string,
  accountId?: number,
  createdBy?: number,
  creationDate?: Date,
  updatedBy?: number,
  updateDate?: Date,
}

export function ClientBranch_S(data: any): ClientBranches_I {
  const clientBranchInfo_S: ClientBranches_I = {
    id: Number(data['id']),
    name: String(data['name']),
    accountId: Number(data['accountId']),
    createdBy: Number(data['createdBy']),
    creationDate: new Date(data['creationDate']),
    updatedBy: Number(data['updatedBy']),
    updateDate: new Date(data['updateDate']),
  };

  return clientBranchInfo_S;
}

export interface ClientBranchShort_I {
  id: number,
  name: string,
  accountId?: number,
}

export function clientBranchInfo_S(data: any): ClientBranchShort_I {
  const clientBranchInfo_S = {
    id: Number(data['id']),
    name: String(data['name']),
    accountId: Number(data['accountId']),
  };

  return clientBranchInfo_S;
}
