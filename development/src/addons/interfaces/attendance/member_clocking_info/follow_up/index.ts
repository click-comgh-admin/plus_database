import { Boolean_I } from "@@addons/interfaces/boolean";
import { MemberClockingInfo_I, MemberClockingInfo_S } from "..";

export interface MemberClockingFollowUp_I {
  id?: number,
  clockingId?: MemberClockingInfo_I,
  followUp?: string,
  messagingType?: number,
  sent?: boolean,
  enteredBy?: number,
  date?: Date
}

export function MemberClockingFollowUp_S(data: any): MemberClockingFollowUp_I {
  // console.log({data});

  const memberClockingFollowUp_S: MemberClockingFollowUp_I = {
    id: Number(data['id']),
    clockingId: MemberClockingInfo_S(data['clockingId']),
    followUp: String(data['followUp']),
    messagingType: Number(data['messagingType']),
    sent: Boolean_I(data['sent']),
    enteredBy: Number(data['enteredBy']),
    date: new Date(data['date']),
  };

  return memberClockingFollowUp_S;
}