import { SERVICE_WORKER_TYPES } from "./service_worker/messenger_types";
import { APP_SETTINGS } from "./settings";
import { URLS } from "./urls";

export const CONSTANTS = {
  URLS,
  APP_SETTINGS,
  SERVICE_WORKER_TYPES,
}
// console.log({ CONSTANTS });
// @ts-ignore
window['CONSTANTS'] = CONSTANTS;
