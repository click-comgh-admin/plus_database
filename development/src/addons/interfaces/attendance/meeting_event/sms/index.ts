import { MeetingEventSchedule_I } from "../schedules"

export interface MeetingEventScheduleSMS_I {
  id?: number,
  meetingEventId?: MeetingEventSchedule_I,
  eventMessage?: string,
  alertTime?: Date,
  alertDate?: Array<Date>,
  notifyParent?: boolean,
  notifyMember?: boolean,
  attendeeAlertTime?: Date,
  absenteeAlertTime?: Date,
  absenteeAlertMessage?: string,
  date?: Date,
  updatedBy?: number,
  updateDate?: Date,
  creationDate?: Date,
}