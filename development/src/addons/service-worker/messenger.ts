import { CONSTANTS } from "@@addons/constants";
import { ServiceWorkerMessengerCallback_I, ServiceWorkerMessenger_I } from "../interfaces/service_worker/messenger";

export class ServiceWorkerMessenger {
  private _networkStatusResponse: boolean[] = [];
  private BROADCAST_CHANNEL = "SERVICE_WORKER_MESSENGER"
  private channel: BroadcastChannel;
  constructor() {
    this.channel = new BroadcastChannel(this.BROADCAST_CHANNEL)
  }
  private _messenger(callback: Function) {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.controller.postMessage(callback());
    }
  }
  /**
   * Check Network Status.
   * true for Online.
   * false fot Offline.
   */
  public networkStatus(callback: ServiceWorkerMessengerCallback_I<boolean>) {
    let request: ServiceWorkerMessenger_I<object> = {
      type: CONSTANTS.SERVICE_WORKER_TYPES.networkStatus,
      data: {},
    };
    this._messenger(() => {
      return request;
    });

    let _networkStatusResponse: boolean;
    this.channel.addEventListener("message", (event) => {
      const data = event.data;

      if (data.type === CONSTANTS.SERVICE_WORKER_TYPES.networkStatus) {
        // console.log({ "channel data": data });
        // if (!this._networkStatusResponse.includes(data.message)) {
        //   this._networkStatusResponse.splice(0, this._networkStatusResponse.length);
        //   this._networkStatusResponse.push(data.message);
        // }
        callback(data.message);
      }
    });
    // return this._networkStatusResponse;
  }
}