import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { base64Decode, base64Encode } from "@@addons/functions/base64";
import { get_cookie, set_cookies, set_cookies_minutes } from "@@addons/functions/cookies";
import { LoginTokenType_I, } from '@@addons/interfaces/network_calls/login/login_token';

const get_differences = (date: Date) => {
  const now = new Date();
  const msBetweenDates = Math.abs(date.getTime() - now.getTime());
  const hoursBetweenDated = msBetweenDates / (60 * 60 * 1000);
  // console.log({ msBetweenDates, hoursBetweenDated, });
  if (hoursBetweenDated < 24) {
    return true;
  } else {
    return false;
  }
}
export const verifyToken = async (email: string, _id_: string, type: LoginTokenType_I) => {
  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/verify-token',
    cookieName = type,
    token = get_cookie(cookieName),
    userInfo = JSON.stringify({ "token": base64Decode(token) }),
    formData = userInfo;
  const cookieDate = new Date(get_cookie(cookieName + "_date"));
  // console.log({ "force_check, now": get_differences(cookieDate) });
  const force_check = get_differences(cookieDate);

  if (!force_check) {
    await http(url, {
      method: "POST",
      body: formData,
    }, true).then(async (response) => {
      // console.log({ response: response });
      if (response.jsonData.token & response.jsonData.user & response.jsonData.expiry) {
        // console.log({"valid token": true, "response.jsonData.token": response.jsonData.token})
        const token = base64Encode(String(response.jsonData.token));
        set_cookies(cookieName, token, 10);
        set_cookies_minutes(cookieName + "_date", new Date().toUTCString(), 10);
        // console.log({ "response.token": response.token });
      } else {
        // console.log({"valid token": false, "response.jsonData.token": response.jsonData.token})
        await generateNewToken(email, _id_, type);
      }
    });
  } else {
    return token;
  }
}

const generateNewToken = async (email: string, _id_: string, type: LoginTokenType_I) => {
  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/login-id',
    cookieName = type,
    userInfo = JSON.stringify({ "email": email, "id": _id_ }),
    formData = userInfo;

  await http(url, {
    method: "POST",
    body: formData,
  }, true).then((response) => {
    // console.log({ response: response });
    if (response.jsonData.token) {
      const token = base64Encode(String(response.jsonData.token));
      set_cookies(cookieName, token, 10);
      set_cookies_minutes(cookieName + "_date", new Date().toUTCString(), 10);
      // console.log({ "response.token": response.token });
    }

  });
}
export const tokenLogin = async (email: string, id: Number, type: LoginTokenType_I) => {
  const _id_ = base64Encode(String(id)),
    cookieName = type;
  // console.log({"_id__id__id_": _id_});
  // console.log({ email, id });
  // @ts-ignore
  window['supersecret'] = { unknowable: { ops: { email: email, id: _id_, cookieName: cookieName } } };
  const _get_cookie = get_cookie(cookieName);
  // console.log({ _get_cookie });

  if (_get_cookie == '') {
    await generateNewToken(email, _id_, type);
  } else {
    await verifyToken(email, _id_, type);
  }
};