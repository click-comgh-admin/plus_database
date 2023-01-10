import { base64Encode, base64Decode } from "@@addons/functions/base64";
import { set_cookies, get_cookie } from "@@addons/functions/cookies";
import { clientBranchInfo_S, ClientBranchShort_I } from "@@addons/interfaces/clients/branches";

const userLoginInfo = 'pdb-active-branch';

export const setActiveBranchIdCookie = (data: ClientBranchShort_I) => {
  const stringData = JSON.stringify(data);
  // console.log({data, stringData});
  
  set_cookies(userLoginInfo, "", -1);
  set_cookies(userLoginInfo, base64Encode(stringData), 3500);
}

export function removeActiveBranchIdCookie() {
  set_cookies(userLoginInfo, "", -1);
}

export const getActiveBranchIdCookie = (): ClientBranchShort_I => {
  const rawCookie = get_cookie(userLoginInfo);
  // console.log({"rawCookie-getActiveBranchId": rawCookie, userLoginInfo});
  
  if (rawCookie === "") {
    return null;
  } else {
    const _cookie = base64Decode(get_cookie(userLoginInfo)),
      cookie = JSON.parse(_cookie);

    return clientBranchInfo_S(cookie);
  }
}