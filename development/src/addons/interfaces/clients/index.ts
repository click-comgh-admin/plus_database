import { Constituency_I, Constituency_S, _Constituency_D } from "../location/constituency";
import { Country_I, Country_S, _Country_D } from "../location/country";
import { District_I, District_S, _District_D } from "../location/district";
import { Region_I, Region_S, _Region_D } from "../location/region";

export interface ClientInfo_I {
  id?: number,
  name?: string,
  accountType?: number,
  country?: string,
  stateProvince?: string,
  applicantFirstname?: string,
  applicantSurname?: string,
  applicantGender?: number,
  applicantPhone?: string,
  applicantEmail?: string,
  applicantDesignationRole?: number,
  region?: number,
  district?: number,
  constituency?: number,
  community?: string,
  subscriptionDuration?: number,
  subscriptionDate?: Date,
  subscriptionFee?: string,
  logo?: string,
  status?: number,
  archive?: number,
  accountCategory?: number,
  creationDate?: Date,
  updatedBy?: number,
  updateDate?: Date,
  countryInfo?: Country_I,
  regionInfo?: Region_I,
  districtInfo?: District_I,
  constituencyInfo?: Constituency_I,
};


export function ClientInfo_S(data: any): ClientInfo_I {
  // console.log({data});
  
  const clientInfo_S: ClientInfo_I = {
    id: Number(data['id']),
    name: String(data['name']),
    accountType: Number(data['accountType']),
    country: String(data['country']),
    stateProvince: String(data['stateProvince']),
    applicantFirstname: String(data['applicantFirstname']),
    applicantSurname: String(data['applicantSurname']),
    applicantGender: Number(data['applicantGender']),
    applicantPhone: String(data['applicantPhone']),
    applicantEmail: String(data['applicantEmail']),
    applicantDesignationRole: Number(data['applicantDesignationRole']),
    region: Number(data['region']),
    district: Number(data['district']),
    constituency: Number(data['constituency']),
    community: String(data['community']),
    subscriptionDuration: Number(data['subscriptionDuration']),
    subscriptionDate: new Date(data['updateDate']),
    subscriptionFee: String(data['subscriptionFee']),
    logo: String(data['logo']),
    status: Number(data['status']),
    archive: Number(data['archive']),
    accountCategory: Number(data['accountCategory']),
    creationDate: new Date(data['creationDate']),
    updatedBy: Number(data['updatedBy']),
    updateDate: new Date(data['updateDate']),
    countryInfo: ('countryInfo' in data) ? Country_S(data['countryInfo']) : _Country_D(),
    regionInfo: ('regionInfo' in data) ? Region_S(data['regionInfo']) : _Region_D(),
    districtInfo: ('districtInfo' in data) ? District_S(data['districtInfo']) : _District_D(),
    constituencyInfo: ('constituencyInfo' in data) ? Constituency_S(data['constituencyInfo']) : _Constituency_D(),
  };

  return clientInfo_S;
}
