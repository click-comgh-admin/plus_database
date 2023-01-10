export interface UserConnectionType_I {
  id?: number,
  clientId?: number,
  type?: string,
  description?: string,
  lastUpdatedBy?: number,
  lastUpdateDate?: Date,
  createdBy?: number,
  creationDate?: Date,
}

export function UserConnectionType_S(data: any): UserConnectionType_I {
  // console.log({data});

  const userConnectionType_S: UserConnectionType_I = {
    id: Number(data['id']),
    type: String(data['type']),
    clientId: Number(data['clientId']),
    description: String(data['description']),
    createdBy: Number(data['createdBy']),
    creationDate: new Date(data['creationDate']),
    lastUpdatedBy: Number(data['lastUpdatedBy']),
    lastUpdateDate: new Date(data['lastUpdateDate']),
  };

  return userConnectionType_S;
}