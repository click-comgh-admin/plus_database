import { UserLoginInfo_I, userLoginInfo_S } from "@@addons/interfaces/network_calls/login";
import { base64Decode, base64Encode } from "../base64";
import { get_cookie, set_cookies } from "../cookies";

const userLoginInfo = 'pdb-client-user';

export const setUserLoginInfoCookie = (data: UserLoginInfo_I) => {
  const stringData = JSON.stringify(data);
  // @ts-ignore
  window['supersecret'] = {
    unknowable: {
      ops: {
        email: data.user.email, id: data.user.id, cookieName: userLoginInfo
      }
    }
  };
  set_cookies(userLoginInfo, "", -1);
  set_cookies(userLoginInfo, base64Encode(stringData), 3500);
}

export const LogUserOut = () => {
  set_cookies(userLoginInfo, "", -1);
}

export const getUserLoginInfoCookie = (): UserLoginInfo_I => {
  // console.log({ "get_cookie(userLoginInfo)": get_cookie(userLoginInfo) });
  const rawCookie = get_cookie(userLoginInfo);
  if (rawCookie === "") {
    return null;
  } else {
    const _cookie = base64Decode(get_cookie(userLoginInfo)),
      cookie = JSON.parse(_cookie);
  
    return userLoginInfo_S(cookie);
  }
}
