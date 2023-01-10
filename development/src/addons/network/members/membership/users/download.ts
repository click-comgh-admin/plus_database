import { CONSTANTS } from "@@addons/constants";
import { http_download } from "@@addons/functions/https/download";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

export async function GET_MembershipUserDownload<Type>(url_params: string = "",) {

  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/user/download-excel' + (url_params),
    HTTP = await http_download(url, {
      method: "GET",
      headers: {
        Authorization: "Token " + _get_cookie.token
      }
    }, true);
  try {
    return HTTP;
    // return new NetWorkCallResponses<Type>("get", HTTP);
  } catch (error) {
    // console.error({ error });
    let errorHttp = HTTP;
    errorHttp['error'] = error;
    return new NetWorkCallResponses<Type>("get", errorHttp, true);
  }
}