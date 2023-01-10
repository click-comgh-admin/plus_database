export interface GenericMeetingEventClockingTypeInfo_I { 
  id: number,
  name: string,
}

export function GenericMeetingEventClockingTypeInfo_S(data: any): GenericMeetingEventClockingTypeInfo_I {
  // console.log({data});
  
  const genericMeetingEventClockingTypeInfo_S: GenericMeetingEventClockingTypeInfo_I = {
    id: Number(data['id']),
    name: data['name'],
  };

  return genericMeetingEventClockingTypeInfo_S;
}

export type BreakClockingTYPE = "inTime" | "outTime" | "startBreak" | "endBreak";