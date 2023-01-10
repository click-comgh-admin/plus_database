import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleDate_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  date?: Date,
  updatedBy?: number,
  updateDate?: Date,
  creationDate?: Date,
}