import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleGroup_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  groupId?: number,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}