import { Date_I } from "@@addons/interfaces/datetime/date";
import { MembershipUser_I, MembershipUser_S } from "@@addons/interfaces/members/user";
import { MembershipOrganizationUserModel, Convert as moumConvert } from "@@addons/interfaces/members/user/organization_model";
import { MemberClockingInfo_I, MemberClockingInfo_S } from ".";

export interface MemberClockingInfoFull_I {
  attendance?: MemberClockingInfo_I,
  additionalInfo?: MemberClockingAdditionalInfo_I,
  lastSeen?: Date,
  status?: String,
}
export interface MemberClockingAdditionalInfo_I {
  id?: number,
  memberId?: number,
  memberInfo?: MembershipUser_I | MembershipOrganizationUserModel,
  phone?: string,
  email?: string,
  placeOfWork?: string,
  whatsapp?: string,
  facebook?: string,
  twitter?: string,
  instagram?: string,
  businessHashtag?: string,
  businessDescription?: string,
  profession?: string,
  dateJoined?: Date,
  date?: Date
}

export const InstanceOfOrganizationMember = (data: any) => {
  return "organizationName" in data && "organizationType" in data && "businessRegistered" in data && "organizationPhone" in data && "dateOfIncorporation" in data;
}

export function MemberClockingAdditionalInfo_S(data: any, accountType?: number): MemberClockingAdditionalInfo_I {
  // console.log({data});
  let memberInfo: MembershipUser_I | MembershipOrganizationUserModel = null
  
  if (accountType === 1) {
    memberInfo = MembershipUser_S(data['memberInfo']);
  } else {
    memberInfo = moumConvert.toMembershipOrganizationUserModel(JSON.stringify(data['memberInfo']))
  }
  
  const MemberClockingAdditionalInfo_S: MemberClockingAdditionalInfo_I = {
    id: Number(data['id']),
    memberId: Number(data['memberId']),
    memberInfo: memberInfo,
    phone: String(data['phone']),
    email: String(data['email']),
    facebook: String(data['facebook']),
    instagram: String(data['instagram']),
    placeOfWork: String(data['placeOfWork']),
    profession: String(data['profession']),
    twitter: String(data['twitter']),
    whatsapp: String(data['whatsapp']),
    businessHashtag: String(data['businessHashtag']),
    businessDescription: String(data['businessDescription']),
    dateJoined: Date_I(data['dateJoined']),
    date: Date_I(data['date']),
  };

  return MemberClockingAdditionalInfo_S;
}

export function MemberClockingInfoFull_S(data: any): MemberClockingInfoFull_I {
  // console.log({data});
  const ATTENDANCE = MemberClockingInfo_S(data['attendance']);
  
  const MemberClockingInfoFull_S: MemberClockingInfoFull_I = {
    attendance: ATTENDANCE,
    additionalInfo: MemberClockingAdditionalInfo_S(data['additionalInfo'], ATTENDANCE.accountType),
    lastSeen: Date_I(data['lastSeen']),
    status: String(data['status']),
  };

  return MemberClockingInfoFull_S;
}