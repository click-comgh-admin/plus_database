import Swal from "sweetalert2";
import { CONSTANTS } from "@@addons/constants";
import { http } from "@@addons/functions/https/http";
import { NetWorkCallResponses } from "@@addons/classes/network_calls/response";
import { NetworkCallResponse_I } from "@@addons/interfaces/network_calls/response";
import { https_swal_error_format } from "@@addons/functions/https/https_swal_error_format";
import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { AdditionalRegistrationResponseOnlyModel } from "@@addons/interfaces/additional_registration/response";

// export interface AdditionalRegistrationResponseOnlyModel {
//   responseId?: number;
//   questionId?: number;
//   memberId: number;
//   question: string;
//   response: string;
// }
export async function SAVE_AdditionalRegistrationMemberQuestionResponse(response: AdditionalRegistrationResponseOnlyModel): Promise<any> {

  const _get_cookie = getUserLoginInfoCookie();
  // console.log({_get_cookie});

  const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'members/additonal-registration/responses' 
    + (response.responseId === null? "/": "/" + response.responseId),
    formData = response.responseId === null? {
      "memberId": response.memberId,
      "question": response.question,
      "response": response.response,
    } : {
      "response": response.response
    };
    console.log({url, formData});

  return Swal.fire({
    title: 'Save Response?',
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
        method: response.responseId === null? "POST": "PATCH",
        body: JSON.stringify(formData),
        headers: {
          Authorization: "Token " + _get_cookie.token
        }
      }, true, false).then((HTTP) => {
        // console.log({ HTTP });

        const networkCallRes = new NetWorkCallResponses("post", HTTP, false);
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
                // if (e.id === "non_field_errors") {
                  errormsg = { error: err };
                // }

                errors.push(errormsg);
              });
            });

            const res = https_swal_error_format(errors);
            Swal.showValidationMessage(
              `${res}`
            );
          }
          if (_RESPONSE.nameError.length > 0) {
            // console.log({ "_RESPONSE.nameError": _RESPONSE.nameError });

            let errors: Array<{ error: string }> = [];
            _RESPONSE.nameError.forEach(e => {
              const _errors = e.errors;
              _errors.forEach(err => {
                let errormsg = { error: e.id + ": " + err };
                // if (e.id === "non_field_errors") {
                  errormsg = { error: err };
                // }

                errors.push(errormsg);
              });
            });

            const res = https_swal_error_format(errors);
            Swal.showValidationMessage(
              `${res}`
            );
          }
          if (_RESPONSE.nameError.length > 0) {
            // console.log({ "_RESPONSE.nameError": _RESPONSE.nameError });

            let errors: Array<{ error: string }> = [];
            _RESPONSE.nameError.forEach(e => {
              const _errors = e.errors;
              _errors.forEach(err => {
                let errormsg = { error: e.id + ": " + err };
                // if (e.id === "non_field_errors") {
                  errormsg = { error: err };
                // }

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