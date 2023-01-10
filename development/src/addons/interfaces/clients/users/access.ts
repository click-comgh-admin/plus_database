import { ClientPageAccess_I, ClientPageAccess_S } from "../page_access";

export interface ClientUserAccess_I {
  id?: number,
  clientId?: number,
  userId?: number,
  page?: ClientPageAccess_I,
  isUnlimited?: number,
  date?: Date,
}
export function ClientUserAccess_S(data: any): ClientUserAccess_I {
  // console.log({data});
  
  const clientUserAccess_S: ClientUserAccess_I = {
    id: Number(data['id']),
    clientId: data['clientId'],
    userId: data['userId'],
    page: ClientPageAccess_S(data['pageId']),
    isUnlimited: data['isUnlimited'],
    date: new Date(data['date']),
  };

  return clientUserAccess_S;
}