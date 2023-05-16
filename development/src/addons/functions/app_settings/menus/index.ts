import { CONSTANTS } from "@@addons/constants";
import { ACTIVE_PAGE__ } from "@@addons/functions/active_page";
import { ExtraAppSettings_I } from "@@addons/interfaces/extra_app_settings";
import { getAppSettingsExtraSettings } from "../extra_settings";
import { GET_ClientAccountCode } from "@@addons/network/clients/code";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

export const AddUserMenuItems = () => {
  ACTIVE_PAGE__();
  const APP_SETTINGS = getAppSettingsExtraSettings();
  Registration(APP_SETTINGS);
}

const Registration = (APP_SETTINGS: ExtraAppSettings_I) => {
  console.log({ "APP_SETTINGS-1": APP_SETTINGS });
  const production = CONSTANTS.APP_SETTINGS.production;

  APP_SETTINGS?.user_access?.forEach(user_access => {
    if (user_access.pageId.id === 23) {
      const registration_menu_selector = "[registration_menu_selector]";
      document.querySelectorAll(registration_menu_selector).forEach(async button => {
        const url_path_ind = 'individuals?code=' + await get_code();
        const url_path_org = 'organizations?code=' + await get_code();
        const url_path_con = 'connection?code=' + await get_code();
        // https://connect.akwaabasoftware.com/connection?code=UNAGH
        // https://register.akwaabasoftware.com/individuals?code=unagh
        // https://register.akwaabasoftware.com/organizations?code=unagh
        button.innerHTML = `
          <a href=\"${CONSTANTS.URLS.REGISTRATION_BASE_URL}${url_path_ind}\" target=\"_blank\" mm-active="register-member">
            <i class="metismenu-icon"></i> Individual Registration Form
          </a>
          <a href=\"${CONSTANTS.URLS.REG_CONNECTION_BASE_URL}${url_path_con}\" target=\"_blank\" mm-active="register-member">
            <i class="metismenu-icon"></i> Connection Registration Form
          </a>
          <a href=\"${CONSTANTS.URLS.REGISTRATION_BASE_URL}${url_path_org}\" target=\"_blank\" mm-active="register-member">
            <i class="metismenu-icon"></i> Organization Registration Form
          </a>
        `
      });
    }
  });

}

const get_code = async () => {
  const accountID = getUserLoginInfoCookie().user.accountId;
  const codeData = await GET_ClientAccountCode(null, "?clientId=" + accountID);

  const response = codeData.paginResponse.results;

  // console.log({ response });

  // @ts-ignore
  return response.map(code => code.code).join();
}