import { Boolean_I } from "@@addons/interfaces/boolean";
import { Date_I } from "@@addons/interfaces/datetime/date";
import { Time_I } from "@@addons/interfaces/datetime/time";
import { MembershipUser_I, MembershipUser_S } from "@@addons/interfaces/members/user";
import { MembershipOrganizationUserModel, Convert as moumConvert } from "@@addons/interfaces/members/user/organization_model";
import { MeetingEventSchedule_I, MeetingEventSchedule_S } from "../meeting_event/schedules";

export interface MemberClockingInfo_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  memberId?: MembershipUser_I | MembershipOrganizationUserModel,
  accountType?: number,
  inOrOut?: boolean,
  inTime?: Date,
  outTime?: Date,
  startBreak?: Date,
  endBreak?: Date,
  clockedBy?: number,
  clockingMethod?: number,
  clockingMethodName?: string,
  date?: Date
}

export function MemberClockingInfo_S(data: any): MemberClockingInfo_I {
  // console.log({"MemberClockingInfo_S-data":data});
  let memberInfo: MembershipUser_I | MembershipOrganizationUserModel = null
  
  if (data['memberId']['accountType'] === 1) {
    memberInfo = MembershipUser_S(data['memberId']);
  } else {
    memberInfo = moumConvert.toMembershipOrganizationUserModel(JSON.stringify(data['memberId']))
  }
  
  const memberClockingInfo_S: MemberClockingInfo_I = {
    id: Number(data['id']),
    meetingEventId: MeetingEventSchedule_S(data['meetingEventId']),
    memberId: memberInfo,
    accountType: Number(data['accountType']),
    inOrOut: Boolean_I(data['inOrOut']),
    // inTime: Time_I(data['inTime']),
    // outTime: Time_I(data['outTime']),
    // startBreak: Time_I(data['startBreak']),
    // endBreak: Time_I(data['endBreak']),
    inTime: Date_I(data['inTime']),
    outTime: Date_I(data['outTime']),
    startBreak: Date_I(data['startBreak']),
    endBreak: Date_I(data['endBreak']),
    clockedBy: Number(data['clockedBy']),
    clockingMethod: Number(data['clockingMethod']),
    clockingMethodName: String(data['clockingMethodName']),
    date: new Date(data['date']),
  };

  return memberClockingInfo_S;
}