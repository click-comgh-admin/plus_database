import { CONSTANTS } from "@@addons/constants";
import { removeActiveBranchIdCookie } from "@@addons/functions/views/home/branch";
import { getUserLoginInfoCookie, LogUserOut } from "../../../login";

export const AddLogoutButton = () => {
  const userLoginInfo = getUserLoginInfoCookie();
  if (userLoginInfo === null) {
    window.location.href = CONSTANTS.URLS.LOGIN_PAGE_BASE_URL;
  } 
  // console.log({userLoginInfo})

  const logout_button_selector = "[logout_button_selector]";
  document.querySelectorAll(logout_button_selector).forEach(button => {
    button.innerHTML = `<a href="#" type="button" tabindex="0" class="dropdown-item ">Logout</a>`
  });
  document.querySelectorAll(logout_button_selector).forEach(button => {
    button.addEventListener('click', (e) => {
      // console.log({e, "CONSTANTS.URLS.LOGIN_PAGE_BASE_URL": CONSTANTS.URLS.LOGIN_PAGE_BASE_URL});
      
      e.preventDefault();
      LogUserOut();
      removeActiveBranchIdCookie()
      
      setTimeout(() => {
        window.location.href = CONSTANTS.URLS.LOGIN_PAGE_BASE_URL;
      }, 50);
    })
  });
}