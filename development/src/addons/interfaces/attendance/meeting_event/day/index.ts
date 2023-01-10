import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleDay_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  dayId?: number,
  endDate?: Date,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}