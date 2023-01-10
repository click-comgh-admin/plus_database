import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { https_swal_error_format } from "@@addons/functions/https/https_swal_error_format";
import { GetNetworkStatus } from "@@addons/functions/https/network_status";
import { setUserLoginInfoCookie } from "@@addons/functions/login";
import { removeActiveBranchIdCookie, setActiveBranchIdCookie } from "@@addons/functions/views/home/branch";
import { ClientBranches_I } from "@@addons/interfaces/clients/branches";
import { userLoginInfo_S } from "@@addons/interfaces/network_calls/login";
import { NetworkCallResponse_I } from "@@addons/interfaces/network_calls/response";
import Swal from "sweetalert2";
import { GET_ClientBranches } from "../clients/branches";

export async function POST_Login(): Promise<any> {

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/login',
    formContainer: HTMLFormElement = document.querySelector('[make-general-posts="client-login"]'),
    formData = new FormData(formContainer);

  GetNetworkStatus(online => {
    // console.log({ "networkStatus": online });
    // console.log({ "networkStatus": "we are online" });
    return Swal.fire({
      title: 'Login?',
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
        }, false).then((HTTP) => {

          const networkCallRes = new NetWorkCallResponses("post", HTTP, false, formContainer);
          const _RESPONSE = networkCallRes.response;
          // console.log({"_RESPONSE": _RESPONSE});
          if ('nameError' in _RESPONSE && 'unknownError' in _RESPONSE) {
            if (_RESPONSE.unknownError.length > 0) {
              // console.log({ "_RESPONSE.unknownError": _RESPONSE.unknownError });

              let errors: Array<{ error: string }> = [];
              _RESPONSE.unknownError.forEach(e => {
                const _errors = e.errors;
                _errors.forEach(err => {
                  let errormsg = { error: e.id + ": " + err };
                  if (e.id === "non_field_errors") {
                    errormsg = { error: err };
                  }

                  errors.push(errormsg);
                });
              });

              const res = https_swal_error_format(errors);
              Swal.showValidationMessage(
                `${res}`
              );
            }
          }
          return networkCallRes;
        }).catch(error => {
          Swal.showValidationMessage(
            `${String(error)}`
          );
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      // console.log({result})
      if (result.isConfirmed) {
        let successMsg = "Success",
          isSuccess = false,
          data: any;
        const _VALUE = result.value;
        if (_VALUE instanceof Object) {
          const VALUE: NetworkCallResponse_I<unknown> = _VALUE.response;
          successMsg = "Login Successful";

          data = VALUE.data;
          isSuccess = _VALUE.response.success;
        }
        isSuccess ? Swal.fire({
          title: successMsg,
          icon: isSuccess ? 'success' : 'error',
          iconColor: isSuccess ? '#f97817' : '#dc2626',
          confirmButtonColor: '#f97817',
        }) : null;
        isSuccess ? setTimeout(async () => {
          const userLoginInfo = userLoginInfo_S(data);
          setUserLoginInfoCookie(userLoginInfo);
          removeActiveBranchIdCookie();

          try {
            const _branches = await GET_ClientBranches<ClientBranches_I>(userLoginInfo.user.branchId);
            if (!Array.isArray(_branches.response.data)) {
              setActiveBranchIdCookie(_branches.response.data);
            }
          } catch (error) {
            console.error({ error });
          }

          window.location.reload();
        }, 500) : null;
      }
    });
  }, offline => {
    // console.log({ "networkStatus": "we are offline" });
    Swal.fire({
      title: "Looks like you're offline",
      text: "Try again later!",
      icon: 'info',
      iconColor: '#f97817',
      confirmButtonColor: '#f97817',
    });
  });
}