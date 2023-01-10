import Swal from "sweetalert2";
import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { NetworkCallResponse_I } from "@@addons/interfaces/network_calls/response";
import { https_swal_error_format } from "@@addons/functions/https/https_swal_error_format";
import { getUserLoginInfoCookie } from "@@addons/functions/login";


export async function POST_ClientUser(): Promise<any> {
  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/user',
    formContainer: HTMLFormElement = document.querySelector('[make-general-posts="client-user"]'),
    formData = new FormData(formContainer);

  return Swal.fire({
    title: 'Add Admin User?',
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
        headers: {
        Authorization: "Token " + _get_cookie.token
        }
      }, false).then((HTTP) => {
        // console.log({ HTTP });

        const networkCallRes = new NetWorkCallResponses("post", HTTP, false, formContainer);
        const _RESPONSE = networkCallRes.response;
        // console.log({"_RESPONSE": _RESPONSE});
        if ('nameError' in _RESPONSE && 'unknownError' in _RESPONSE) {
          if (_RESPONSE.unknownError.length > 0) {
            // console.log({ "_RESPONSE.unknownError": _RESPONSE.unknownError });

            let errors: Array<{ error: string }> = [];
            _RESPONSE.unknownError.forEach(e => {
              const _errors = e.errors;
              const _errors_name = e.id;

              if (Array.isArray(_errors)) {
                _errors.forEach(err => {
                  let errormsg = { error: e.id + ": " + err };
                  if (e.id === "non_field_errors") {
                    errormsg = { error: err };
                  }
  
                  errors.push(errormsg);
                });
              } else {
                // console.log({ "_RESPONSE.unknownError--e.errors": e.errors, "typeof e.errors": typeof e.errors });
                for (const key in e.errors) {
                  if (Object.prototype.hasOwnProperty.call(e.errors, key)) {
                    const _error = e.errors[key];

                    if (Array.isArray(_error)) {
                      _error.forEach(_err => {
                        // console.log({ _err, "_err_err": typeof _err, });
                        let errormsg2 = { error: _errors_name + ": " + _err };
  
                        errors.push(errormsg2);
                      })
                      // console.log({key,  "_RESPONSE.unknownError--e.errors--error": typeof _error, _error });
                    }
                  }
                }
              }
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
    // console.log({ result });
    if (result.isConfirmed) {
      let successMsg = "Success",
        isSuccess = false;
      const _VALUE = result.value;
      if (_VALUE instanceof Object) {
        const VALUE: NetworkCallResponse_I<unknown> = _VALUE.response;
        successMsg = String(VALUE.message);

        isSuccess = _VALUE.response.success;
      }
      isSuccess ? Swal.fire({
        title: successMsg,
        icon: isSuccess ? 'success' : 'error',
        iconColor: isSuccess ? '#f97817' : '#dc2626',
        confirmButtonColor: '#f97817',
      }) : null;
      isSuccess ? setTimeout(() => {
        window.location.reload();
      }, 500) : null;
    }
  });
}