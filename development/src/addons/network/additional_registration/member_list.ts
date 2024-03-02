import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

export async function GET_AdditionalRegistrationMemberQuestions<Type>(memberID: Number) {

  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});  

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/additonal-registration/questions/member_list?memberId=' + memberID + "&length=1000",
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