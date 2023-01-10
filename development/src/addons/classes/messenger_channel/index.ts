import { AppMessengerCallback_I, AppMessengerChannel_I, AppMessenger_I } from "@@addons/interfaces/app_messenger/messenger";

export class AppMessenger<Type> {
  private BROADCAST_CHANNEL: AppMessengerChannel_I;
  private channel: BroadcastChannel;
  constructor(channel: AppMessengerChannel_I) {
    this.BROADCAST_CHANNEL = channel;
    this.channel = new BroadcastChannel(this.BROADCAST_CHANNEL)
  }
  
  public post(message: Type) {
    this.channel.postMessage(message);
  }
  
  public listen(callback: AppMessengerCallback_I<Type>) {
    this.channel.addEventListener("message", (event) => {

      const data:Type = event.data;

      callback(data);
    });
    // return this._networkStatusResponse;
  }
}