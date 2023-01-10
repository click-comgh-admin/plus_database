import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

export async function GET_MembershipUsers<Type>(ID: Number = null, url_params: string = "", withLocation: boolean = false) {

  const raw_url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/user'
    + (ID === null ? "" : "/" + ID) + (url_params);
  const location_url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/user/location'
    + (ID === null ? "" : "/" + ID) + (url_params);
  const _get_cookie = getUserLoginInfoCookie();
  const url = withLocation ? location_url : raw_url,
    HTTP = await http(url, {
      method: "GET",
      headers: {
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