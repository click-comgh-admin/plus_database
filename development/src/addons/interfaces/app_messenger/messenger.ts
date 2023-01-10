export interface AppMessenger_I<Type> {
  type: string,
  data: Type,
}

export type AppMessengerChannel_I = "online-status" | "request-reload?" | "http-request";

export interface AppMessengerCallback_I<Type> {
  (response: Type): void,
}

export interface AppMessengerHttpRequest_I {
  requests: number,
  done: boolean,
}