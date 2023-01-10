import { MembershipUser_I, MembershipUser_S } from "../user";
import { UserConnectionType_I, UserConnectionType_S } from "./types";

export interface UserConnectionAccount_I {
  id?: number,
  type?: UserConnectionType_I,
  memberId?: MembershipUser_I,
  memberAccountType?: number,
  connectionId?: MembershipUser_I,
  connectionAccountType?: number,
  createdBy?: number,
  creationDate?: Date,
}

export function UserConnectionAccount_S(data: any): UserConnectionAccount_I {
  // console.log({data});

  const userConnectionAccount_S: UserConnectionAccount_I = {
    id: Number(data['id']),
    type: UserConnectionType_S(data['type']),
    memberId: MembershipUser_S(data['memberId']),
    memberAccountType: Number(data['memberAccountType']),
    connectionId: MembershipUser_S(data['connectionId']),
    connectionAccountType: Number(data['connectionAccountType']),
    createdBy: Number(data['createdBy']),
    creationDate: new Date(data['creationDate']),
  };

  return userConnectionAccount_S;
}
