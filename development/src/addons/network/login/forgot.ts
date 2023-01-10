import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { https_swal_error_format } from "@@addons/functions/https/https_swal_error_format";
import { GetNetworkStatus } from "@@addons/functions/https/network_status";
import Swal from "sweetalert2";

export async function POST_LoginForgot(): Promise<any> {

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'password-reset/change-client',
    formContainer: HTMLFormElement = document.querySelector('[make-general-posts="client-login-forgot"]'),
    formData = new FormData(formContainer);

  GetNetworkStatus(online => {
    // console.log({ "networkStatus": online });
    // console.log({ "networkStatus": "we are online" });
    return Swal.fire({
      title: 'Reset Password?',
      // text: "You won't be able to revert this!",
      icon: 'info',
      iconColor: '#f97817',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#f97817',
      cancelButtonColor: '#ddd',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      backdrop: true,
      preConfirm: async (login) => {
        return await http(url, {
          method: "POST",
          body: formData,
        }, true).then((response: any) => {
          // console.log({ response: response });
          if (response.success) {
            return response;
          } else {
            try {
              const res = https_swal_error_format(response.msg);
              Swal.showValidationMessage(
                `${res}`
              );
            } catch (error) {
              Swal.showValidationMessage(
                `${String(error)}`
              );
            }
          }

        }).catch(error => {
          Swal.showValidationMessage(
            `${String(error)}`
          );
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: String(result.value.msg),
          icon: 'success',
          iconColor: '#f97817',
          confirmButtonColor: '#f97817',
        });
      }
    });
  }, offline => {

    // console.log({ "networkStatus": "we are offline" });
    return Swal.fire({
      title: "Looks like you're offline",
      text: "Try again when you're online?",
      icon: 'info',
      iconColor: '#f97817',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#f97817',
      cancelButtonColor: '#ddd',
      reverseButtons: true,
      showLoaderOnConfirm: true,
      backdrop: true,
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.close();
      }
    });
  });
}