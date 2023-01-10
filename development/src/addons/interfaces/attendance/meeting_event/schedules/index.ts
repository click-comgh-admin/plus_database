import { Boolean_I } from "@@addons/interfaces/boolean"
import { ClientInfo_I, ClientInfo_S } from "@@addons/interfaces/clients"
import { ClientBranches_I, ClientBranch_S } from "@@addons/interfaces/clients/branches"
import { Time_I } from "@@addons/interfaces/datetime/time"
import { GroupingsMemberCategories_I, GroupingsMemberCategories_S } from "@@addons/interfaces/members/groupings/member_categories"

export interface MeetingEventSchedule_I {
  id?: number,
  type?: number,
  memberType?: number,
  name?: string,
  clientId?: ClientInfo_I,
  branchId?: ClientBranches_I,
  memberCategoryId?: GroupingsMemberCategories_I,
  meetingSpan?: number,
  startTime?: Date,
  closeTime?: Date,
  latenessTime?: Date,
  isRecuring?: boolean,
  hasBreakTime?: boolean,
  hasDuty?: boolean,
  hasOvertime?: boolean,
  agenda?: string,
  agendaFile?: string,
  virtualMeetingLink?: string,
  virtualMeetingType?: number
  meetingLocation?: number
  expectedMonthlyAttendance?: number
  activeMonthlyAttendance?: number
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}


export function MeetingEventSchedule_S(data: any): MeetingEventSchedule_I {
  // console.log({data});
  
  const meetingEventSchedule_S: MeetingEventSchedule_I = {
    id: Number(data['id']),
    type: Number(data['type']),
    memberType: Number(data['memberType']),
    name: String(data['name']),
    clientId: ClientInfo_S(data['clientId']),
    branchId: ClientBranch_S(data['branchId']),
    memberCategoryId: GroupingsMemberCategories_S(data['memberCategoryId']),
    meetingSpan: Number(data['meetingSpan']),
    startTime: Time_I(data['startTime']),
    closeTime: Time_I(data['closeTime']),
    latenessTime: Time_I(data['latenessTime']),
    isRecuring: Boolean_I(data['isRecuring']),
    hasBreakTime: Boolean_I(data['hasBreakTime']),
    hasDuty: Boolean_I(data['hasDuty']),
    hasOvertime: Boolean_I(data['hasOvertime']),
    agenda: String(data['agenda']),
    agendaFile: String(data['agendaFile']),
    virtualMeetingLink: String(data['virtualMeetingLink']),
    virtualMeetingType: Number(data['virtualMeetingType']),
    meetingLocation: Number(data['meetingLocation']),
    expectedMonthlyAttendance: Number(data['expectedMonthlyAttendance']),
    activeMonthlyAttendance: Number(data['activeMonthlyAttendance']),
    updatedBy: Number(data['updatedBy']),
    updateDate: new Date(data['updateDate']),
    date: new Date(data['date']),
  };

  return meetingEventSchedule_S;
}
