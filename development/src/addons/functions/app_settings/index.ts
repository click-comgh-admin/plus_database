import { AddBranchButton } from "./action_buttons/branch"
import { AddLogoutButton } from "./action_buttons/logout";
import { setAppSettingsExtraSettings } from "./extra_settings";
import { AddUserMenuItems } from "./menus";

export const AppSetup = async () => {
  AddLogoutButton();
  AddBranchButton();
  await setAppSettingsExtraSettings().then(() => AddUserMenuItems());
}