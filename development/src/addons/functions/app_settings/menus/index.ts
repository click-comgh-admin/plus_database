import { CONSTANTS } from "@@addons/constants";
import { ACTIVE_PAGE__ } from "@@addons/functions/active_page";
import { ExtraAppSettings_I } from "@@addons/interfaces/extra_app_settings";
import { getAppSettingsExtraSettings } from "../extra_settings";

export const AddUserMenuItems = () => {
  ACTIVE_PAGE__();
  const APP_SETTINGS = getAppSettingsExtraSettings();
  Registration(APP_SETTINGS);
}

const Registration = (APP_SETTINGS: ExtraAppSettings_I) => {
  // console.log({"APP_SETTINGS-1": APP_SETTINGS});
  
  APP_SETTINGS?.user_access?.forEach(user_access => {
    if (user_access.pageId.id === 23) {
      const registration_menu_selector = "[registration_menu_selector]";
      document.querySelectorAll(registration_menu_selector).forEach(button => {
        button.innerHTML = `
          <a href=\"${CONSTANTS.URLS.REGISTRATION_BASE_URL}\" target=\"_blank\" mm-active="register-member">
            <i class="metismenu-icon"></i> Registration Form
          </a>
        `
      });
    }
  });

}