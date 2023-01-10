import { CONSTANTS } from "@@addons/constants";
import { get_cookie } from "@@addons/functions/cookies";
import { http } from "@@addons/functions/https/http";
import { base64Decode } from "@@addons/functions/base64";
import { LoginTokenType_I } from "@@addons/interfaces/network_calls/login/login_token";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { verifyToken } from "@@addons/functions/login/main";

export async function GET_ClientBranches<Type>(type: Number = null, loginTokenType: LoginTokenType_I = "client_tokenLogin") {
  
  // @ts-ignore
  const WsUoI = String(window.supersecret.unknowable.ops.id);
  // @ts-ignore
  const WsUoE = String(window.supersecret.unknowable.ops.email);

  await verifyToken(WsUoE, WsUoI, loginTokenType);
  const _get_cookie = base64Decode(get_cookie(loginTokenType));
  // console.log({_get_cookie});
  
  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/branch'
    + (type === null ? "" : "/" + type),
    HTTP = await http(url, {
      method: "GET",
      headers: {
        Authorization: "Token " + _get_cookie
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