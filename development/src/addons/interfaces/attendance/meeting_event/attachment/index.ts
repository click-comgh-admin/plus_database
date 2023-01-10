import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleAttachment_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  attachment?: string,
  meetingEditor?: boolean,
  agendaEditor?: boolean,
  clockingAttachment?: boolean,
  updatedBy?: number,
  updateDate?: Date,
  date?: Date,
}