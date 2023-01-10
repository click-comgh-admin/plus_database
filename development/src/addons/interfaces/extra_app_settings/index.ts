import { EASExpirationDateInterface, Convert as easEdI_Convert } from "@@addons/interfaces/extra_app_settings/expiration_date";
import { ClientUserPageAccessModel, Convert as cupamConvert } from "../clients/users/page_access/user_access";


export interface ExtraAppSettings_I {
  user_access?: ClientUserPageAccessModel[],
  expiration_date?: EASExpirationDateInterface,
}

export function ExtraAppSettings_S(data: any): ExtraAppSettings_I {
  console.log({"ExtraAppSettings_S-data":data});
  const user_access: any[] = 'user_access' in data? data['user_access']: [];
  const extraAppSettings_S: ExtraAppSettings_I = {
    user_access: user_access.map(ua => cupamConvert.toClientUserPageAccessModel(JSON.stringify(ua))),
    expiration_date: easEdI_Convert.toEASExpirationDateInterface(JSON.stringify(data['expiration_date'])),
  };

  return extraAppSettings_S;
}