// import { CONSTANTS } from "@@addons/constants";
// import { http } from "@@addons/functions/https/http";
// import { base64Encode } from "@@addons/functions/base64";
// import { get_cookie, set_cookies } from "@@addons/functions/cookies";
// import { LoginTokenType_I, } from '@@addons/interfaces/login_token';


// const checkTokenLoginInfo = (email: String, _id_: String, type: LoginTokenType_I) => {
//   const cookieName = type + "_" + "info",
//     userInfo = base64Encode(JSON.stringify({ "email": email, "id": _id_ })),
//     _get_cookie = get_cookie(cookieName);
//   if (_get_cookie == '') {
//     set_cookies(cookieName, userInfo, 1000);
//     return true;
//   } else {
//     if (userInfo === _get_cookie) {
//       return true;
//     } else {
//       set_cookies(cookieName, userInfo, 1000);
//       return false;
//     }
//   }
// }

// const generateNewToken = async (email: String, _id_: String, type: LoginTokenType_I) => {
//   const url = CONSTANTS.URLS.AKWAABA_API_BASE_URL + 'clients/login-id',
//     cookieName = type,
//     userInfo = JSON.stringify({ "email": email, "id": _id_ }),
//     formData = userInfo;

//   await http(url, {
//     method: "POST",
//     body: formData,
//   }, true).then((response) => {
//     console.log({ response: response });
//     if (response.jsonData.token) {
//       const token = base64Encode(String(response.jsonData.token));
//       set_cookies(cookieName, token, 10)
//       // console.log({ "response.token": response.token });
//     }

//   });
// }
// export const tokenLogin = async (email: String, id: Number, type: LoginTokenType_I) => {
//   const _id_ = base64Encode(String(id)),
//     cookieName = type;
//   // console.log({"_id__id__id_": _id_});
//   console.log({ email, id });

//   const _get_cookie = get_cookie(cookieName);
//   // console.log({ _get_cookie });

//   if (!checkTokenLoginInfo(email, _id_, type)) {
//     await generateNewToken(email, _id_, type);
//   }
//   if (_get_cookie == '') {
//     await generateNewToken(email, _id_, type);
//   }
// };