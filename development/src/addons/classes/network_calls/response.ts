// import { set_cookies_minutes } from '@@addons/functions/cookies';
import { formDataToJson } from '@@addons/functions/form_data_to_object';
import { NetworkCallHttp_I } from '@@addons/interfaces/network_calls/http';
import {
  NetworkCallDatatableResponse_I, NetworkCallError_I,
  NetworkCallNonFieldErrors_I,
  NetworkCallPaginResponse_I, NetworkCallPostResponse_I,
  NetworkCallResponseMethod_I, NetworkCallResponse_I,
} from '@@addons/interfaces/network_calls/response';

export class NetWorkCallResponses<Type> {
  constructor(method: NetworkCallResponseMethod_I, httpResponse: NetworkCallHttp_I, error: boolean = false, postForm: HTMLFormElement = null) {
    const response = httpResponse.jsonData,
      rawResponse = httpResponse.response;
    this.postForm = postForm;
    // console.log({'method === "post"': method === "post", method, response, rawResponse, error});

    // if (httpResponse.response.ok) {
    //   try {
    //     // @ts-ignore
    //     const cookieName = String(window.supersecret.unknowable.ops.cookieName);
    //     set_cookies_minutes(`${cookieName}_date`, new Date().toUTCString(), 10);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    if (error) {
      // console.log({'method === "post1"': method === "post", method, response, rawResponse, error});
      this.error(httpResponse.error);
    } else {
      // console.log({'method === "post"': method === "post", method, response, rawResponse, error});
      if (method === "get") {
        this.get(response, rawResponse);
      } else if (method === "post") {
        // console.log({method, response, rawResponse});
        this.post(response, rawResponse);
      } else if (method === "post-file") {
        this.postFile(response, rawResponse);
      } else if (method === "put") {
        this.put(response, rawResponse);
      } else if (method === "patch") {
        this.patch(response, rawResponse);
      } else if (method === "delete") {
        this.delete(response, rawResponse);
      }
    }
  }

  public response: NetworkCallResponse_I<Type> | NetworkCallPostResponse_I = null;

  public nonFieldErrorResponse: NetworkCallNonFieldErrors_I<Type> = null;

  public multipleResponse: Array<NetworkCallPostResponse_I> = null;

  public paginResponse: NetworkCallPaginResponse_I<Type> = null;

  public databaseResponse: NetworkCallDatatableResponse_I<Type> = null;

  public postForm: HTMLFormElement = null;

  private error(response: any | object) {
    this.response = response;
    // this.nonFieldErrorResponse = response;
  }

  private outputResponse(success: boolean, message: string | Array<any>,
    data: Array<Type> | Type): NetworkCallResponse_I<Type> {
    return { success: success, message: message, data: data };
  }

  private outputResponsePagin(output: any): NetworkCallPaginResponse_I<Type> {
    return {
      count: output.count, next: output.next, previous: output.previous,
      results: output.results,
    };
  }

  private outputResponseDatatable(output: any): NetworkCallDatatableResponse_I<Type> {
    return {
      data: output.data, datatable_plugin: output.datatable_plugin,
      draw: output.draw, recordsFiltered: output.recordsFiltered,
      recordsTotal: output.recordsTotal,
    };
  }

  private outputErrorResponse(success: boolean, message: string | Array<NetworkCallError_I>,
    nameError: Array<NetworkCallError_I>, unknownError: Array<NetworkCallError_I>, data: Array<any>): NetworkCallPostResponse_I {
    return {
      success: success, message: message, nameError: nameError,
      unknownError: unknownError, data: data
    };
  }

  private get(response: any | object, rawResponse: Response) {
    let newResponse: NetworkCallResponse_I<Type>;
    if (response.hasOwnProperty('success') && response.hasOwnProperty('message')
      && response.hasOwnProperty('data')) {
      newResponse = response;
    } else if (response.hasOwnProperty('count') && response.hasOwnProperty('next')
      && response.hasOwnProperty('previous') && response.hasOwnProperty('results')) {
      this.paginResponse = this.outputResponsePagin(response);
      return this.paginResponse;
    } else if (response.hasOwnProperty('draw') && response.hasOwnProperty('recordsTotal')
      && response.hasOwnProperty('recordsFiltered') && response.hasOwnProperty('data')) {
      this.databaseResponse = this.outputResponseDatatable(response);
      return this.databaseResponse;
    } else if (response.hasOwnProperty('detail') && (rawResponse.status === 404)) {
      newResponse = { data: [], message: response['detail'], success: false };
    }

    // console.log({ newResponse });


    this.response = this.outputResponse(newResponse.success, newResponse.message, newResponse.data);
  }
  
  postFile(response: any, rawResponse: Response) {
    throw new Error('Method not implemented.');
  }

  private post(response: any | object, rawResponse: Response) {
    // console.log({response, rawResponse});

    let newResponse: NetworkCallPostResponse_I;
    if (response.hasOwnProperty('success') && response.hasOwnProperty('message')
      && response.hasOwnProperty('data')) {
      newResponse = response;
    } else if (Array.isArray(response)) {
      // console.log({"rawResponse.ok1": rawResponse.ok});
      if (rawResponse.ok) {
        const SUCCESS_RESPONSE_MESSAGE = response[0]['SUCCESS_RESPONSE_MESSAGE'];
        response.map((_response) => {
          delete _response['SUCCESS_RESPONSE_MESSAGE'];
          return _response;
        });

        this.response = this.outputResponse(true, SUCCESS_RESPONSE_MESSAGE, response);
      } else {
        let newResponses: NetworkCallPostResponse_I[] = [];
        response.forEach((_response) => {
          newResponse = this.postError(_response);
          const _newResponse = this.outputErrorResponse(
            newResponse.success, newResponse.message, newResponse.nameError,
            newResponse.unknownError, newResponse.data
          );
          if (!newResponses.includes(_newResponse)) {
            newResponses.push(_newResponse);
          }
        });
        this.multipleResponse = newResponses;
      }
    } else {
      // console.log({"rawResponse.ok2": rawResponse.ok});
      if (rawResponse.ok) {
        const SUCCESS_RESPONSE_MESSAGE = response['SUCCESS_RESPONSE_MESSAGE'];
        delete response['SUCCESS_RESPONSE_MESSAGE'];

        this.response = this.outputResponse(true, SUCCESS_RESPONSE_MESSAGE, response);
      } else {
        newResponse = this.postError(response);
        this.response = this.outputErrorResponse(
          newResponse.success, newResponse.message, newResponse.nameError,
          newResponse.unknownError, newResponse.data
        );
      }
    }
  }

  private postError(response: any | object): NetworkCallPostResponse_I {
    const errorFields = this.postErrorFields(response),
      nameErrorFields = this.postNamedErrorFields(errorFields),
      nonNameErrorFields = this.postNonNamedErrorFields(errorFields);

    const postErrorInputs = this.postErrorInputs(nameErrorFields, nonNameErrorFields);
    return {
      success: false, message: errorFields, nameError: postErrorInputs.nameErrorFields,
      unknownError: postErrorInputs.nonNameErrorFields, data: response
    }
  }

  private postErrorFields(response: any | object) {
    // console.log({response});

    let errors: Array<NetworkCallError_I> = [];
    for (const key in response) {
      if (Object.prototype.hasOwnProperty.call(response, key)) {
        const RES = response[key];
        const error: NetworkCallError_I = {
          id: key, errors: RES
        };

        if (!errors.includes(error)) {
          errors.push(error);
        }
      }
    }
    return errors;
  }

  private postNamedErrorFields(errorFields: NetworkCallError_I[]) {
    let errors: Array<NetworkCallError_I> = [];

    errorFields.forEach((error) => {
      if (error.id !== "non_field_errors") {
        if (!errors.includes(error)) {
          errors.push(error);
        }
      }
    });
    return errors;
  }

  private postNonNamedErrorFields(errorFields: NetworkCallError_I[]) {
    let errors: Array<NetworkCallError_I> = [];

    errorFields.forEach((error) => {
      if (error.id === "non_field_errors") {
        if (!errors.includes(error)) {
          errors.push(error);
        }
      }
    });
    return errors;
  }

  private validateInput(input: Element) {
    // console.log({ input, });
    // console.log({ "input.hasOwnProperty('mdcFoundation')": input.hasOwnProperty('mdcFoundation') });

    if (input.hasOwnProperty('mdcFoundation')) {
      if (input.hasOwnProperty('setCustomValidity')) {
        // @ts-ignore
        input.setCustomValidity("");
      }
      // @ts-ignore
      input.isUiValid = true;
      // @ts-ignore
      input.validityTransform = (newValue, nativeValidity) => {
        // console.log({ newValue, nativeValidity, });
        if (nativeValidity.valid) {
          return {};
        } else {
          return {
            valid: false,
            customError: true,
          };
        }
      }
    }
  }

  private postErrorInputs(nameErrorFields: NetworkCallError_I[], nonNameErrorFields: NetworkCallError_I[]) {
    // console.log({ "this.postForm": this.postForm });
    // console.log({ "this.postForm.elements": this.postForm.elements });
    if (this.postForm !== null) {
      const _formDataToJson = JSON.parse(formDataToJson(new FormData(this.postForm)));
      // console.log({ _formDataToJson });
      for (const key in _formDataToJson) {
        let input: Element;
        try {
          input = document.querySelector('[name="' + key + '"]');
        } catch (error) {
          const newKey = key.replace('[]', '');
          // console.log({key,newKey});
          
          input = document.querySelector('[id="' + newKey + '"]');
        }
        this.validateInput(input);
        input.addEventListener('change', (event) => {
          this.validateInput(input);
        });
      }
    }

    nameErrorFields.forEach((error) => {
      const inputs = document.querySelectorAll('[id="' + error.id + '"]');
      // console.log({ error, inputs });

      inputs.forEach((input) => {
        if (input.hasOwnProperty('mdcFoundation')) {
          try {
            // console.log({ input, "error.errors": error.errors, });
            // console.log({"_____typeof error.errors_____": Array.isArray(error.errors) });
            const errorErrors = error.errors;
            if (Array.isArray(errorErrors)) {
              // @ts-ignore
              input.setCustomValidity(errorErrors.join('\n'));
            } else {
              let _errorErrors: Array<string> = [];
              // @ts-ignore
              for (const key in errorErrors) {
                if (Object.prototype.hasOwnProperty.call(errorErrors, key)) {
                  const element: Array<string> = errorErrors[key];
                  // console.log({ element })
                  element.forEach(elem => {
                    _errorErrors.push(`Item ${key}: ${elem}`)
                  });
                }
              }
              // @ts-ignore
              input.setCustomValidity(_errorErrors.join('\n'));
            }
            // @ts-ignore
            input.reportValidity();
            // @ts-ignore
            input.isUiValid = false;
          } catch (error) {
            
          }
          // if (input.hasOwnProperty('setCustomValidity')) {
          //   console.log({ input, });
          //   // @ts-ignore
          //   input.setCustomValidity(error.errors.join('\n'));
          //   // @ts-ignore
          //   input.reportValidity();
          //   // @ts-ignore
          //   input.isUiValid = false;
          // }
        } else {
          if (!nonNameErrorFields.includes(error)) {
            nonNameErrorFields.push(error);
          }
        }
      });
    });
    return { nameErrorFields, nonNameErrorFields }
  }

  private put(response: any | object, rawResponse: Response) {
    // this.response = response;
    // this.nonFieldErrorResponse = response;
    this.post(response, rawResponse);
  }

  private patch(response: any | object, rawResponse: Response) {
    // this.response = response;
    // this.nonFieldErrorResponse = response;
    this.post(response, rawResponse);
  }

  private delete(response: any | object, rawResponse: Response) {

    let newResponse: NetworkCallResponse_I<string>;
    if (response.hasOwnProperty('success') && response.hasOwnProperty('message')
      && response.hasOwnProperty('data')) {
      newResponse = response;
    } else {
      // console.log({"rawResponse.ok": rawResponse.ok});
      if (rawResponse.ok) {
        const SUCCESS_RESPONSE_MESSAGE = "Deleted";

        this.response = this.outputResponse(true, SUCCESS_RESPONSE_MESSAGE, response);
      } else if (response.hasOwnProperty('detail') && (rawResponse.status === 404)) {
        newResponse = { data: [], message: response['detail'], success: false, };
        this.response = this.outputResponse(newResponse.success, newResponse.message, []);
      }
    }
  }
}