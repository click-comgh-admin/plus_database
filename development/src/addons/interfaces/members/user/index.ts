import { Boolean_I } from "@@addons/interfaces/boolean"
import { Constituency_I, Constituency_S, _Constituency_D } from "@@addons/interfaces/location/constituency"
import { Country_I, Country_S, _Country_D } from "@@addons/interfaces/location/country"
import { District_I, District_S, _District_D } from "@@addons/interfaces/location/district"
import { ElectoralArea_I, ElectoralArea_S, _ElectoralArea_D } from "@@addons/interfaces/location/electoral_area"
import { Region_I, Region_S, _Region_D } from "@@addons/interfaces/location/region"

function null_string(params: any, replace: string = "") {
  return String(params === null ? replace : params);
}
export interface MembershipUser_I {
  id?: number,
  clientId?: number,
  firstname?: string,
  middlename?: string,
  surname?: string,
  gender?: number,
  profilePicture?: string,
  dateOfBirth?: Date,
  phone?: string,
  email?: string,
  religion?: number,
  nationality?: string,
  countryOfResidence?: string,
  stateProvince?: string,
  region?: number,
  district?: number,
  constituency?: number,
  electoralArea?: number,
  community?: string,
  hometown?: string,
  houseNoDigitalAddress?: string,
  digitalAddress?: string,
  referenceId?: string,
  branchId?: number,
  editable?: boolean,
  profileResume?: string,
  profileIdentification?: string,
  archived?: boolean,
  identification?: string,
  accountType?: number,
  memberType?: number,
  level?: number,
  status?: number,
  lastUpdatedBy?: number,
  date?: Date,
  last_login?: Date,
  countryInfo?: Country_I,
  regionInfo?: Region_I,
  districtInfo?: District_I,
  constituencyInfo?: Constituency_I,
  electoralareaInfo?: ElectoralArea_I,
}

export function MembershipUser_S(data: any): MembershipUser_I {
  // console.log({data});

  const membershipUser_S: MembershipUser_I = {
    id: Number(data['id']),
    clientId: Number(data['clientId']),
    firstname: String(data['firstname']),
    middlename: null_string(data['middlename']),
    surname: String(data['surname']),
    gender: Number(data['gender']),
    profilePicture: String(data['profilePicture']),
    dateOfBirth: new Date(data['dateOfBirth']),
    phone: String(data['phone']),
    email: String(data['email']),
    religion: Number(data['religion']),
    nationality: String(data['nationality']),
    countryOfResidence: String(data['countryOfResidence']),
    stateProvince: String(data['stateProvince']),
    region: Number(data['region']),
    district: Number(data['district']),
    constituency: Number(data['constituency']),
    electoralArea: Number(data['electoralArea']),
    community: String(data['community']),
    hometown: String(data['hometown']),
    houseNoDigitalAddress: String(data['houseNoDigitalAddress']),
    digitalAddress: String(data['digitalAddress']),
    referenceId: null_string(data['referenceId'], "-"),
    accountType: Number(data['accountType']),
    memberType: Number(data['memberType']),
    branchId: Number(data['branchId']),
    editable: Boolean_I(data['editable']),
    profileResume: String(data['profileResume']),
    profileIdentification: String(data['profileIdentification']),
    archived: Boolean_I(data['archived']),
    identification: String(data['identification']),
    level: Number(data['level']),
    status: Number(data['status']),
    lastUpdatedBy: Number(data['lastUpdatedBy']),
    date: new Date(data['date']),
    last_login: new Date(data['last_login']),
    countryInfo: ('countryInfo' in data) ? Country_S(data['countryInfo']) : _Country_D(),
    regionInfo: ('regionInfo' in data) ? Region_S(data['regionInfo']) : _Region_D(),
    districtInfo: ('districtInfo' in data) ? District_S(data['districtInfo']) : _District_D(),
    constituencyInfo: ('constituencyInfo' in data) ? Constituency_S(data['constituencyInfo']) : _Constituency_D(),
    electoralareaInfo: ('electoralareaInfo' in data) ? ElectoralArea_S(data['electoralareaInfo']) : _ElectoralArea_D(),
  };

  return membershipUser_S;
}