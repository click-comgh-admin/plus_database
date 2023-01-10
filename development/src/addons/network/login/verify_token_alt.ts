import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";

export async function POST_VerifyTokenAlt(verify_token: string): Promise<any> {

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/verify-token',
    formData = { "token": verify_token };
  return await http(url, {
    method: "POST",
    body: JSON.stringify(formData),
  }, true).then((HTTP) => {

    const networkCallRes = new NetWorkCallResponses("post", HTTP, false,);
    return networkCallRes;
  }).catch(error => {
    console.log({ error });
  });
}