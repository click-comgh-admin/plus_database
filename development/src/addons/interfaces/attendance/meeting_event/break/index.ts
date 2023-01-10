import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleBreak_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  startBreak?: Date,
  endBreak?: Date,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}