import { MembershipUser_I, MembershipUser_S } from "@@addons/interfaces/members/user";

export interface MemberClockingHistoryStatisticsInfo_I {
  member?: MembershipUser_I,
  memberIdentity?: string,
  totalAttendance?: string,
  totalLateness?: string,
  totalBreakOverStay?: string,
  totalOvertime?: string,
  totalUndertime?: string,
  workDoneRating?: string,
  ratedBy?: string,
  period?: string,
  accountType?: string,
}

export function MemberClockingHistoryStatisticsInfo_S(data: any): MemberClockingHistoryStatisticsInfo_I {
  // console.log({data});
  
  const memberClockingHistoryStatisticsInfo_S: MemberClockingHistoryStatisticsInfo_I = {
    member: MembershipUser_S(data['member']),
    memberIdentity: String(data['memberIdentity']),
    totalAttendance: String(data['totalAttendance']),
    totalLateness: String(data['totalLateness']),
    totalBreakOverStay: String(data['totalBreakOverStay']),
    totalOvertime: String(data['totalOvertime']),
    totalUndertime: String(data['totalUndertime']),
    workDoneRating: String(data['workDoneRating']),
    ratedBy: String(data['ratedBy']),
    period: String(data['period']),
    accountType: String(data['accountType']),
  };

  return memberClockingHistoryStatisticsInfo_S;
}
