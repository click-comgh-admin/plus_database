import Swal from "sweetalert2";
import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { NetworkCallResponse_I } from "@@addons/interfaces/network_calls/response";
import { https_swal_error_format } from "@@addons/functions/https/https_swal_error_format";
import { getUserLoginInfoCookie } from "@@addons/functions/login";


export async function POST_AttendanceAddScheduleTime(): Promise<any> {

  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/additonal-registration/questions/',
    formContainer: HTMLFormElement = document.querySelector('[make-general-posts="add-questions"]'),
    formData = new FormData(formContainer);

  return Swal.fire({
    title: 'Add Question?',
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

        try {
          const networkCallRes = new NetWorkCallResponses("post", HTTP, false, formContainer);
          const _RESPONSE = networkCallRes.response;
          // console.log({"_RESPONSE": _RESPONSE});
          if ('nameError' in _RESPONSE && 'unknownError' in _RESPONSE) {
            if (_RESPONSE.unknownError.length > 0) {
              // console.log({"_RESPONSE.unknownError": _RESPONSE.unknownError});

              let errors: Array<{ error: string }> = [];
              _RESPONSE.unknownError.forEach(e => {
                const _errors = e.errors;
                _errors.forEach(err => {
                  let errormsg = {error: e.id + ": " + err};
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
        } catch (error) {
          console.error({ error });
          let errorHttp = HTTP;
          errorHttp['error'] = error;
          const networkCallRes = new NetWorkCallResponses("post", errorHttp, true, formContainer);
          networkCallRes.postForm
          return networkCallRes;
        }
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
      let successMsg = "Success";
      const _VALUE = result.value;

      if (_VALUE instanceof Object && (_VALUE.response !== null)) {
        const VALUE: NetworkCallResponse_I<unknown> = _VALUE.response;
        successMsg = String(VALUE.message);
      }

      if (_VALUE instanceof Object && (_VALUE.response !== null)) {
        Swal.fire({
          title: successMsg,
          icon: 'success',
          iconColor: '#f97817',
          confirmButtonColor: '#f97817',
        });
        if (_VALUE.response.success) {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }
    }
  });
}