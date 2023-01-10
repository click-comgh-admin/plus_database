export interface ClientPageAccess_I {
  id?: number,
  page?: string,
}
export function ClientPageAccess_S(data: any): ClientPageAccess_I {
  // console.log({data});
  
  const clientPageAccess_S: ClientPageAccess_I = {
    id: Number(data['id']),
    page: data['page'],
  };

  return clientPageAccess_S;
}