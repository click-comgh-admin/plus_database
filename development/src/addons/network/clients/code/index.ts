import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

export async function GET_ClientAccountCode<Type>(ID: Number = null,
  url_params: string = "", anonymousAuth: boolean = false,) {
  // anonymousAuth is for when user isn't logged in
  const _get_cookie = anonymousAuth ? null : getUserLoginInfoCookie();
  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/code'
    + (ID === null ? "" : "/" + ID) + (url_params),
    HTTP = await http(url, {
      method: "GET",
      headers: anonymousAuth ? {} : {
        Authorization: "Token " + _get_cookie.token
      }
    }, true);
  try {
    return new NetWorkCallResponses<Type>("get", HTTP);
  } catch (error) {
    console.error({ error });
    let errorHttp = HTTP;
    errorHttp['error'] = error;
    return new NetWorkCallResponses<Type>("get", errorHttp, true);
  }
}