import { ClientUserShort_I } from "@@addons/interfaces/clients/users";

export interface UserLoginInfo_I {
  expiry: Date,
  token: string,
  user: ClientUserShort_I,
}

export function userLoginInfo_S(data: any): UserLoginInfo_I {
  const user = data['user'];
  const userLoginInfo_S = {
    expiry: new Date(data['expiry']),
    token: String(data['token']),
    user: {
      id: Number(user['id']),
      accountId: Number(user['accountId']),
      branchId: Number(user['branchId']),
      firstname: String(user['firstname']),
      surname: String(user['surname']),
      phone: String(user['phone']),
      email: String(user['email']),
      profilePicture: String(user['profilePicture']),
    },
  };

  return userLoginInfo_S;
}
