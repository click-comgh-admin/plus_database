import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";

export async function GET_LocationCountry<Type>(ID: Number = null, url_params: string = "") {
  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'locations/country'
    + (ID === null ? "" : "/" + ID) + (url_params),
    HTTP = await http(url, {
      method: "GET",
      headers: {}
    }, true, true);
  // console.log({"HTTP": HTTP})
  try {
    return new NetWorkCallResponses<Type>("get", HTTP);
  } catch (error) {
    console.error({ error });
    let errorHttp = HTTP;
    errorHttp['error'] = error;
    return new NetWorkCallResponses<Type>("get", errorHttp, true);
  }
}