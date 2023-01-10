export interface Region_I {
  id?: number,
  location?: string,
}
export function Region_S(data: any): Region_I {
  // console.log({data});
  const region_S: Region_I = {
    id: Number(data['id']),
    location: String(data['location']),
  };

  return region_S;
}
export function _Region_D(): Region_I {
  const region_S: Region_I = {
    id: 0,
    location: "-",
  };

  return region_S;
}