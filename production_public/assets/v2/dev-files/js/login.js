"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["login"],{6886:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},1981:(e,t,n)=>{n.r(t),n.d(t,{GetNetworkStatus:()=>o,GetNetworkStatusEvent:()=>r});const o=(e,t)=>!0===navigator.onLine?e("online"):t("offline"),r=e=>{let t=new CustomEvent("get-online-status",{cancelable:!0,detail:{onlineStatus:navigator.onLine}});e.dispatchEvent(t)}},6651:(e,t,n)=>{n.r(t),n.d(t,{togglePswdVisibility:()=>i}),n(6413);let o=[];const r="Show Password",i=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const n=e.parentElement;n.setAttribute("style",n.getAttribute("style")+"; flex-direction: column !important;");const i=document.createElement("label");i.setAttribute("style",i.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const a=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),a.innerText=r;const c=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const l=document.createElement("input");l.type="checkbox",l.id="pswd-visibility-btn--"+t,l.setAttribute("style",l.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),i.appendChild(c),i.appendChild(l),i.appendChild(a),e.after(i);const d={id:l.id,showing:!1,elem:e,span:a};o.includes(d)||o.push(d),l.addEventListener("change",s)}))},s=e=>{e.preventDefault();const t=e.currentTarget;t.checked,o.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=r,e.showing=!1))}))}},7725:(e,t,n)=>{n.r(t),n.d(t,{getActiveBranchIdCookie:()=>l,removeActiveBranchIdCookie:()=>c,setActiveBranchIdCookie:()=>a});var o=n(7052),r=n(1942),i=n(1489);const s="pdb-active-branch",a=e=>{const t=JSON.stringify(e);(0,r.set_cookies)(s,"",-1),(0,r.set_cookies)(s,(0,o.base64Encode)(t),3500)};function c(){(0,r.set_cookies)(s,"",-1)}const l=()=>{if(""===(0,r.get_cookie)(s))return null;{const e=(0,o.base64Decode)((0,r.get_cookie)(s)),t=JSON.parse(e);return(0,i.clientBranchInfo_S)(t)}}},1489:(e,t,n)=>{function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function r(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.r(t),n.d(t,{ClientBranch_S:()=>o,clientBranchInfo_S:()=>r})},6224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>a});var o=n(8485),r=n(7270),i=n(4492),s=n(3600);function a(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function r(e){try{s(c.next(e))}catch(e){o(e)}}function i(e){try{s(c.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,i)}s((c=c.apply(t,n||[])).next())}));var t,n,a,c}},3855:(e,t,n)=>{n.r(t),n.d(t,{POST_Login:()=>h});var o=n(4492),r=n(8485),i=n(7270),s=n(8967),a=n(1981),c=n(3600),l=n(7725),d=n(1566),u=n(6455),f=n.n(u),m=n(6224),p=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function h(){return p(this,void 0,void 0,(function*(){const e=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login",t=document.querySelector('[make-general-posts="client-login"]'),n=new FormData(t);(0,a.GetNetworkStatus)((r=>f().fire({title:"Login?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>p(this,void 0,void 0,(function*(){return yield(0,i.http)(e,{method:"POST",body:n},!1).then((e=>{const n=new o.NetWorkCallResponses("post",e,!1,t),r=n.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,s.https_swal_error_format)(e);f().showValidationMessage(`${t}`)}return n})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t,n="Success",o=!1;const r=e.value;if(r instanceof Object){const e=r.response;n="Login Successful",t=e.data,o=r.response.success}o&&f().fire({title:n,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>p(this,void 0,void 0,(function*(){const e=(0,d.userLoginInfo_S)(t);(0,c.setUserLoginInfoCookie)(e),(0,l.removeActiveBranchIdCookie)();try{const t=yield(0,m.GET_ClientBranches)(e.user.branchId);Array.isArray(t.response.data)||(0,l.setActiveBranchIdCookie)(t.response.data)}catch(e){console.error({error:e})}window.location.reload()}))),500)}}))),(e=>{f().fire({title:"Looks like you're offline",text:"Try again later!",icon:"info",iconColor:"#f97817",confirmButtonColor:"#f97817"})}))}))}},6611:(e,t,n)=>{n.r(t),n.d(t,{PdbLoginForm:()=>l}),n(6886);var o=n(8485),r=n(6651),i=n(3855),s=n(5862),a=n(9662),c=(n(3590),n(3283),n(3313),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s});let l=class extends s.LitElement{constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return s.html`
      <form method="post" action="#" class="form" make-general-posts="client-login">
        <div class="form-input-container">
          <mwc-textfield name="phone_email" id="phone_email" label="E-mail/ Phone Number" icon="person" outlined type="text" required>
          </mwc-textfield>
        </div>
        <div class="form-input-container">
          <mwc-textfield name="password" id="password" label="Password" icon="lock" outlined type="password" required>
          </mwc-textfield>
        </div>
      
        <div class="form-input-container flex">      
          <div class="w-full text-right">
            <a class="underline text-sm !text-gray-800 hover:!text-gray-900"
              href="${o.CONSTANTS.URLS.FORGOT_PASSWORD_URL}">
              forgot password?
            </a>
          </div>
        </div>
      
        <div class="form-input-container">
          <mwc-button label="Login" raised class="button" @click="${this.submitForm}">
          </mwc-button>
        </div>
      
        <div class="flex form-input-container items-center text-center">
          <hr class="border-gray-300 border-1 w-full rounded-md">
          <label class="block font-medium text-sm text-gray-600 w-full">
            Lets go digital...
          </label>
          <hr class="border-gray-300 border-1 w-full rounded-md">
        </div>
      </form>`}firstUpdated(){(0,r.togglePswdVisibility)(),(0,r.togglePswdVisibility)("mwc-textfield")}submitForm(e){return t=this,n=void 0,r=function*(){e.preventDefault(),yield(0,i.POST_Login)()},new((o=void 0)||(o=Promise))((function(e,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r}createRenderRoot(){return this}};l.styles=[s.css`
   :host { display: block; }
  `],l=c([(0,a.customElement)("pdb-login-form"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],l)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_login_main_scss","shared"],(()=>(6611,e(e.s=6611)))),e.O())])));
//# sourceMappingURL=login.js.map