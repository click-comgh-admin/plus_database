export interface ServiceWorkerMessenger_I<Type> {
  type: string,
  data: Type,
}

export interface ServiceWorkerMessengerCallback_I<Type> {
  (item: Type): void,
}