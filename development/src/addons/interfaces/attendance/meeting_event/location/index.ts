import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleLocation_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  latitude?: string,
  longitude?: string,
  radius?: number,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}