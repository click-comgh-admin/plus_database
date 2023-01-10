import { District_I, District_S, _District_D } from "./district";
import { Region_I, Region_S, _Region_D } from "./region";

export interface ElectoralArea_I {
  id?: number,
  regionId?: Region_I,
  districtId?: District_I,
  location?: string,
}
export function ElectoralArea_S(data: any): ElectoralArea_I {
  // console.log({data});
  const electoralArea_S: ElectoralArea_I = {
    id: Number(data['id']),
    regionId: ('regionId' in data) ? Region_S(data['regionId']) : _Region_D(),
    districtId: ('districtId' in data) ? District_S(data['districtId']) : _District_D(),
    location: String(data['location']),
  };

  return electoralArea_S;
}
export function _ElectoralArea_D(): ElectoralArea_I {
  // console.log({data});
  const electoralArea_S: ElectoralArea_I = {
    id: 0,
    regionId: _Region_D(),
    districtId: _District_D(),
    location: "-",
  };

  return electoralArea_S;
}