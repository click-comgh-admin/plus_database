import fetch from './time_out';
import { NetworkCallHttp_I } from '@@addons/interfaces/network_calls/http';

export async function http(input: RequestInfo, init?: RequestInit, jsonData: boolean = true, addSuccessMsgFormat: boolean = false) {
  let rawResponse = null;
  const status = (response: any) => {
    rawResponse = response;
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.resolve(response);
      // return Promise.reject(new Error(response))
    }
  }

  const json = async (response: Response): Promise<NetworkCallHttp_I> => {
    const _JSON = response.status === 204 ? {} : await response.json();
    // console.log({"addSuccessMsgFormat": addSuccessMsgFormat})
    if (addSuccessMsgFormat) {
      const new_JSON = {
        "success": true,
        "message": "",
        "data": _JSON
      };
      // console.log({"new_JSON": new_JSON})
      return { jsonData: new_JSON, response, error: "" };
    } else {
      return { jsonData: _JSON, response, error: "" };
    }
  }
  // console.log({init});

  var _init: RequestInit = { method: "GET" };

  init = (init === null) || (init === undefined) ? _init : init;

  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*/*");
  myHeaders.append("Accept", "application/json, text/plain, */*");
  // myHeaders.append("Authorization", CONSTANTS.AUTHORIZATION.pdbApi);
  // console.log({"jsonData": jsonData})
  if (jsonData) {
    myHeaders.append("Content-Type", "application/json");
  }

  if (init.headers === undefined) {
    init.headers = myHeaders;
  } else {
    for (const iterator of myHeaders.keys()) {
      // @ts-ignore
      init.headers[iterator] = myHeaders.get(iterator);
    }
    // for (const header in myHeaders) {
    //   // @ts-ignore
    //   init.headers[header] = myHeaders[header];
    // }
  }
  init.mode = "cors";
  init.redirect = 'follow';
  // console.log({ init });

  return await fetch(input, init, 300000)
    .then(status)
    .then(json)
    .then(async (data) => {
      // console.log({ data });
      return data;
    }).catch(function (error) {
      console.error('Request failed', error);
      throw error;
    });
}