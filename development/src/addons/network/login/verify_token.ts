import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { GetNetworkStatus } from "@@addons/functions/https/network_status";
import { getUserLoginInfoCookie, LogUserOut} from "@@addons/functions/login";

export async function POST_VerifyToken(verify_token: string = null): Promise<any> {

  const _get_cookie = getUserLoginInfoCookie();

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/verify-token',
    formData = { "token": verify_token === null? _get_cookie.token: verify_token };

  GetNetworkStatus(async online => {
    // console.log({ "networkStatus": online });
    // console.log({ "networkStatus": "we are online" });
    return await http(url, {
      method: "POST",
      body: JSON.stringify(formData),
    }, true).then((HTTP) => {

      // console.log({ HTTP });
      const response = HTTP.jsonData;
      if (("expiry" in response) && ("token" in response) && ("user" in response)) {
      } else {
        // console.log({ 'HTTP-HTTP-HTTP': HTTP });
        LogUserOut();
        window.location.href = "/login";
      }

    })
  }, offline => { null; });
}