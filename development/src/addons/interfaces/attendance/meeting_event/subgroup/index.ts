import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleSubGroup_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  subGroupId?: number,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}