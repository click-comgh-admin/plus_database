import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleMember_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  memberId?: number,
  updatedBy?: number,
  updateDate?: Date,
  creationDate?: Date,
}