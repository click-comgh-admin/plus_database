import fetch from './time_out';
import { NetworkCallHttpDownload_I, NetworkCallHttp_I } from '@@addons/interfaces/network_calls/http';

export async function http_download(input: RequestInfo, init?: RequestInit, jsonData: boolean = true) {
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

  const blob = async (response: Response): Promise<NetworkCallHttpDownload_I> => {
    // console.log({response})
    const _BLOB = response.status === 204 ? null : await response.blob();
    return { blobData: _BLOB, response, error: "" };
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
  const get_filename = (headers: Headers) => {
    // console.log({ headers });
    const header_items = headers.get("Content-Disposition");
    // console.log({ header_items });
    const parts = header_items!.split(';');
    // console.log({ parts });
    const filename = parts[1].split('=')[1];
    // console.log({ filename });
    return filename;
  }

  return await fetch(input, init, 300000)
    .then(status)
    .then(blob)
    .then(async (data) => {
      // console.log({ data });
      if (data.blobData !== null) {
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(data.blobData);
        a.download = get_filename(data.response.headers);
        a.click();
      }
      return data;
    }).catch(function (error) {
      console.error('Request failed', error);
      throw error;
    });
}