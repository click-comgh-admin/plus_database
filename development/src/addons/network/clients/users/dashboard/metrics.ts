import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { getActiveBranchIdCookie } from "@@addons/functions/views/home/branch";

export async function GET_ClientUserDashboardMetrics<Type>() {
  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});
  let currentBranchId = 0;
  try {
    currentBranchId = getActiveBranchIdCookie().id;
  } catch (error) {
    console.log({ "getActiveBranchIdCookie": error });
  }
  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/dashboard-statistics?currentBranchId=' + currentBranchId,
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