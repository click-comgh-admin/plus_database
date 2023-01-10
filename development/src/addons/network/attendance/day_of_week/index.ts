import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

export async function GET_DayOfWeek<Type>(type: Number = null) {
  
  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});
  
  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'attendance/meeting-event/day-of-week'
    + (type === null ? "" : "/" + type),
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