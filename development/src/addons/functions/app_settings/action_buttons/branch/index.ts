import "../../../../../view/home/branch/button";
import { getUserLoginInfoCookie } from "../../../login";

export const AddBranchButton = () => {
  const client_user_branch_id = getUserLoginInfoCookie().user.branchId;
  if (client_user_branch_id === 1) {
    const branch_button_selector = "[branch_button_selector]";
    document.querySelectorAll(branch_button_selector).forEach(button => {
      button.innerHTML = "<pdb-branch-button></pdb-branch-button>"
    });
  }
}