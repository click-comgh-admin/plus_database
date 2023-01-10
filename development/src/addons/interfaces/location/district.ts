import { Region_I, Region_S, _Region_D } from "./region";

export interface District_I {
  id?: number,
  regionId?: Region_I,
  location?: string,
}
export function District_S(data: any): District_I {
  // console.log({data});
  const district_S: District_I = {
    id: Number(data['id']),
    regionId: ('regionId' in data) ? Region_S(data['regionId']) : _Region_D(),
    location: String(data['location']),
  };

  return district_S;
}
export function _District_D(): District_I {
  // console.log({data});
  const district_S: District_I = {
    id: 0,
    regionId: _Region_D(),
    location: "-",
  };

  return district_S;
}