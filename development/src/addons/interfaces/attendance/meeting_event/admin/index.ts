import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleAdmin_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  adminId?: number,
  meetingEditor?: boolean,
  agendaEditor?: boolean,
  clockingAdmin?: boolean,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}
