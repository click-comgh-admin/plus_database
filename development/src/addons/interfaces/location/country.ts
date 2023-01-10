export interface Country_I {
  id?: number,
  name?: string,
  short?: string,
  code?: string,
}
export function Country_S(data: any): Country_I {
  // console.log({data});
  const _data = Array.isArray(data) ? data[0] : data;
  const country_S: Country_I = {
    id: _data['id'],
    name: String(_data['name']),
    short: String(_data['short']),
    code: String(_data['code']),
  };

  return country_S;
}
export function _Country_D(): Country_I {
  const country_S: Country_I = {
    id: 0,
    name: "-",
    short: "-",
    code: "-",
  };

  return country_S;
}