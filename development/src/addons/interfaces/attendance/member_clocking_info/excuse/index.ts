import { MemberClockingInfo_I, MemberClockingInfo_S } from "..";

export interface MemberClockingExcuse_I {
  id?: number,
  clockingId?: MemberClockingInfo_I,
  excuse?: string,
  enteredBy?: number,
  date?: Date
}

export function MemberClockingExcuse_S(data: any): MemberClockingExcuse_I {
  // console.log({data});

  const memberClockingExcuse_S: MemberClockingExcuse_I = {
    id: Number(data['id']),
    clockingId: MemberClockingInfo_S(data['clockingId']),
    excuse: String(data['excuse']),
    enteredBy: Number(data['enteredBy']),
    date: new Date(data['date']),
  };

  return memberClockingExcuse_S;
}