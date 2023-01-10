"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_admin_user_form_index_ts"],{3753:(e,t,r)=>{r.r(t)},6651:(e,t,r)=>{r.r(t),r.d(t,{togglePswdVisibility:()=>n}),r(6413);let s=[];const i="Show Password",n=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const r=e.parentElement;r.setAttribute("style",r.getAttribute("style")+"; flex-direction: column !important;");const n=document.createElement("label");n.setAttribute("style",n.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const c=document.createElement("span");c.setAttribute("style",c.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),c.innerText=i;const a=document.createElement("span");c.setAttribute("style",c.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const l=document.createElement("input");l.type="checkbox",l.id="pswd-visibility-btn--"+t,l.setAttribute("style",l.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),n.appendChild(a),n.appendChild(l),n.appendChild(c),e.after(n);const d={id:l.id,showing:!1,elem:e,span:c};s.includes(d)||s.push(d),l.addEventListener("change",o)}))},o=e=>{e.preventDefault();const t=e.currentTarget;t.checked,s.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=i,e.showing=!1))}))}},2869:(e,t,r)=>{function s(e){return{id:Number(e.id),name:e.name}}r.r(t),r.d(t,{GenericGenderInfo_S:()=>s})},6224:(e,t,r)=>{r.r(t),r.d(t,{GET_ClientBranches:()=>c});var s=r(8485),i=r(7270),n=r(4492),o=r(3600);function c(e=null){return t=this,r=void 0,a=function*(){const t=(0,o.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),c=yield(0,i.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new n.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new n.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,s){function i(e){try{o(a.next(e))}catch(e){s(e)}}function n(e){try{o(a.throw(e))}catch(e){s(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(i,n)}o((a=a.apply(t,r||[])).next())}));var t,r,c,a}},9456:(e,t,r)=>{r.r(t),r.d(t,{PUT_ClientUserAccess:()=>m});var s=r(6455),i=r.n(s),n=r(8485),o=r(7270),c=r(4492),a=r(8967),l=r(3600),d=function(e,t,r,s){return new(r||(r=Promise))((function(i,n){function o(e){try{a(s.next(e))}catch(e){n(e)}}function c(e){try{a(s.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access/setup/"+e,s=document.querySelector('[make-general-posts="client-user"]'),m=new FormData(s);return i().fire({title:"Setup user page access?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(r,{method:"PUT",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,s),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{const r=t.errors,s=t.id;if(Array.isArray(r))r.forEach((r=>{let s={error:t.id+": "+r};"non_field_errors"===t.id&&(s={error:r}),e.push(s)}));else for(const r in t.errors)if(Object.prototype.hasOwnProperty.call(t.errors,r)){const i=t.errors[r];Array.isArray(i)&&i.forEach((t=>{let r={error:s+": "+t};e.push(r)}))}}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}r&&i().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5524:(e,t,r)=>{r.r(t),r.d(t,{POST_ClientUser:()=>m});var s=r(6455),i=r.n(s),n=r(8485),o=r(7270),c=r(4492),a=r(8967),l=r(3600),d=function(e,t,r,s){return new(r||(r=Promise))((function(i,n){function o(e){try{a(s.next(e))}catch(e){n(e)}}function c(e){try{a(s.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}))};function m(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user",r=document.querySelector('[make-general-posts="client-user"]'),s=new FormData(r);return i().fire({title:"Add Admin User?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,r),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{const r=t.errors,s=t.id;if(Array.isArray(r))r.forEach((r=>{let s={error:t.id+": "+r};"non_field_errors"===t.id&&(s={error:r}),e.push(s)}));else for(const r in t.errors)if(Object.prototype.hasOwnProperty.call(t.errors,r)){const i=t.errors[r];Array.isArray(i)&&i.forEach((t=>{let r={error:s+": "+t};e.push(r)}))}}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}r&&i().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},1090:(e,t,r)=>{r.r(t),r.d(t,{PUT_ClientUser:()=>m});var s=r(6455),i=r.n(s),n=r(8485),o=r(7270),c=r(4492),a=r(8967),l=r(3600),d=function(e,t,r,s){return new(r||(r=Promise))((function(i,n){function o(e){try{a(s.next(e))}catch(e){n(e)}}function c(e){try{a(s.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,s=document.querySelector('[make-general-posts="client-user"]'),m=new FormData(s);return i().fire({title:"Update user profile?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(r,{method:"PUT",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,s),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let s={error:t.id+": "+r};"non_field_errors"===t.id&&(s={error:r}),e.push(s)}))}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}r&&i().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},7059:(e,t,r)=>{r.r(t),r.d(t,{PUT_ClientUserPassword:()=>m});var s=r(6455),i=r.n(s),n=r(8485),o=r(7270),c=r(4492),a=r(8967),l=r(3600),d=function(e,t,r,s){return new(r||(r=Promise))((function(i,n){function o(e){try{a(s.next(e))}catch(e){n(e)}}function c(e){try{a(s.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user/change-password/"+e,s=document.querySelector('[make-general-posts="client-user"]'),m=new FormData(s);return i().fire({title:"Update user password?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(r,{method:"PATCH",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,s),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let s={error:t.id+": "+r};"non_field_errors"===t.id&&(s={error:r}),e.push(s)}))}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}r&&i().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},7553:(e,t,r)=>{r.r(t),r.d(t,{GET_GenericGender:()=>c});var s=r(8485),i=r(7270),n=r(4492),o=r(3600);function c(e=null){return t=this,r=void 0,a=function*(){const t=(0,o.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),c=yield(0,i.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new n.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new n.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,s){function i(e){try{o(a.next(e))}catch(e){s(e)}}function n(e){try{o(a.throw(e))}catch(e){s(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(i,n)}o((a=a.apply(t,r||[])).next())}));var t,r,c,a}},8153:(e,t,r)=>{r.r(t),r.d(t,{PdbAdminUserForm:()=>C}),r(3753);var s,i,n,o=r(5862),c=r(9662),a=r(3283),l=(r(3313),r(789),r(5474),r(6163),r(5866),r(7725)),d=r(6224),m=r(2869),u=r(7553),h=r(3600),p=r(4728),f=r(5524),g=r(6651),y=r(8485),w=r(9456),v=r(1090),b=r(7059),A=(r(7857),r(3248)),_=r(2229),B=r(1354),k=function(e,t,r,s){var i,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(n<3?i(o):n>3?i(t,r,o):i(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,r,s){return new(r||(r=Promise))((function(i,n){function o(e){try{a(s.next(e))}catch(e){n(e)}}function c(e){try{a(s.throw(e))}catch(e){n(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}))};let C=class extends o.LitElement{constructor(){super(),this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this.registrationType="none",this.formId=1,this.startSearchPage=0,this.selectedBranchId=0,this._branches=[],this._genders=[],this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserAccess=this._clientUserAccessDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,l.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,h.getUserLoginInfoCookie)()],yield this.getPageAccesses(),yield this.getBranches(),yield this.getGenders(),"true"==this.edit&&(this.registrationType="new-entry")}))}disconnectedCallback(){}render(){return"true"===this.edit?("mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,o.html`
        <div class="">
          <div class="shadow bg-white p-2 my-2">
            <div class="md:hidden block">
              <mwc-tab-bar activeIndex="0">
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="person" id="mainAccountFormBtn"
                  label="User" @click="${this.displayMainAccountFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="business_center" id="accessPagesFormBtn"
                  label="Access" @click="${this.displayAccessPagesFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="lock" id="passwordFormBtn"
                  class="!w-28 !px-1" label="Password" @click="${this.displayPasswordForm}"></mwc-tab>
              </mwc-tab-bar>
            </div>
            <div class="md:block hidden">
              <mwc-tab-bar activeIndex="0">
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="person" id="mainAccountFormBtn"
                  label="User Information" @click="${this.displayMainAccountFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="business_center" id="accessPagesFormBtn"
                  label="Access Page(s)" @click="${this.displayAccessPagesFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="lock" id="passwordFormBtn"
                  class="!w-28 !px-1" label="Password" @click="${this.displayPasswordForm}"></mwc-tab>
              </mwc-tab-bar>
            </div>
          </div>
          <div class="shadow bg-white p-2 my-2">
            ${this.getEditForm}
          </div>
          
        </div>
      `):o.html`
        <div class="shadow bg-white p-2">
          <div class="p-1">
            <mwc-button class="primary" setFormMembersField label="From Member List" @click="${this.setFormMembersField}"></mwc-button>
            <mwc-button class="primary" setNewEntryField label="New Entry" @click="${this.setNewEntryField}"></mwc-button>
          </div>
          ${this.form}
        </div>
      `}get getEditForm(){return 1===this.formId?o.html`
        ${this.profileForm}
      `:2===this.formId?o.html`
        ${this.pageAccessForm}
      `:o.html`
        ${this.passwordForm}
      `}displayMainAccountFormBtn(e){e.preventDefault(),this.formId=1,this.mainAccountFormBtn.setAttribute("raised","true"),this.accessPagesFormBtn.removeAttribute("raised"),this.passwordFormBtn.removeAttribute("raised")}displayAccessPagesFormBtn(e){e.preventDefault(),this.formId=2,this.accessPagesFormBtn.setAttribute("raised","true"),this.mainAccountFormBtn.removeAttribute("raised"),this.passwordFormBtn.removeAttribute("raised")}displayPasswordForm(e){e.preventDefault(),this.formId=3,this.passwordFormBtn.setAttribute("raised","true"),this.accessPagesFormBtn.removeAttribute("raised"),this.mainAccountFormBtn.removeAttribute("raised"),setTimeout((()=>{this.firstUpdated()}),500)}setFormMembersField(e){e.preventDefault(),this.registrationType="from-members",this.querySelectorAll("[setFormMembersField]").forEach((e=>{e.setAttribute("raised",""),e.setAttribute("class","warning")})),this.querySelectorAll("[setNewEntryField]").forEach((e=>{e.removeAttribute("raised"),e.setAttribute("class","primary")}))}setNewEntryField(e){e.preventDefault(),this.registrationType="new-entry",this.querySelectorAll("[setNewEntryField]").forEach((e=>{e.setAttribute("raised",""),e.setAttribute("class","warning")})),this.querySelectorAll("[setFormMembersField]").forEach((e=>{e.removeAttribute("raised"),e.setAttribute("class","primary")}))}setSelectedBranchId(e){e.preventDefault();const t=this.registrationType;this.registrationType="none",this.querySelectorAll("[setSelectedBranchId]").forEach((e=>{this.selectedBranchId=e.value})),this.registrationType=t}get profileForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Update User Profile!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.branchField}

                  ${this.newEntryFields}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update User Profile" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get pageAccessForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Edit User Page Access!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.accessFieldTickBox}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Edit User Page Access" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get passwordForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Password</h1>
                  <h3 class="h3">Set New Password!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.passwordFields}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set New Password" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get form(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Add Admin User!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.branchField}

                  ${"new-entry"===this.registrationType?o.html`${this.newEntryFields}`:o.nothing}
                  ${"from-members"===this.registrationType?o.html`${this.fromMembersField}`:o.nothing}
                  
                  <!-- ${this.accessFieldSelectBox} -->
                  
                  <div class="col-md-12 col-lg-12 my-2"><hr/></div>

                  ${this.passwordFields}

                  <div class="col-md-12 col-lg-12 my-2"><hr/></div>
                  ${this.accessFieldTickBox}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Admin User" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get branchField(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);const t=this.clientUser,r=t.data,s=Array.isArray(r)?r[0]:r,i=t.success;return o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Branch</h4>
        <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" @change="${this.setSelectedBranchId}" outlined required>
          ${1===e?o.html`
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((e=>i&&s.branchId===e.id?o.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          `:o.html`
            ${this._branches.map((t=>{if(t.id===e)return o.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
          `}
        </mwc-select>
      </div>
    `}get passwordFields(){return o.html`
      ${"true"===this.edit?o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Old Password</h4> 
        <mwc-textfield name="old_password" id="old_password" label="Enter Old Password" outlined type="password" required>
        </mwc-textfield>
      </div>`:o.nothing}
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Password</h4> 
        <mwc-textfield name="password" id="password" label="Enter Password" outlined type="password" required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Password Confirmation</h4> 
        <mwc-textfield name="confirm_password" id="confirm_password" label="Enter Password Confirmation" outlined type="password"
          required>
        </mwc-textfield>
      </div>
    `}get fromMembersField(){let e="";null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].token);let t={};return t.Authorization="Token "+e,o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Member</h4> 
        <select-input class="w-100" id="member" name="member" label="Select Member"
          .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
          .ajaxHeader="${t}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${y.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search?"></select-input>
      </div>
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const r={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(r)||e.push(r)})),e}get accessFieldSelectBox(){const e=this.pageAccesses;return o.html`
      <div class="col-md-6 col-lg-8">
        <h4 class="font-semibold my-2">Select User Access</h4> 
        <select-input name="access" multiple class="w-full" id="access"
          label="Select User Access" .options="${e}" outlined required>
        </select-input>
      </div>
    `}get accessFieldTickBox(){this.pageAccesses;const e=this.clientUserAccess,t=e.data,r=Array.isArray(t)?t:[t],s=e.success;let i=[];return s&&r.forEach((e=>{e=_.Convert.toClientUserPageAccessModel(JSON.stringify(e)),i.includes(e)||i.push(e)})),o.html`
      <div class="col-md-12 col-lg-12">
        <client-user-access-card ?isActive="${!0}" .available_access="${this._pageAccesses}" .user_access="${i}"></client-user-access-card>
      </div>
    `}get newEntryFields(){const e=this.clientUser,t=e.data,r=Array.isArray(t)?t[0]:t,s=e.success;let i="";if(s){const e=new Date(r.dateOfBirth).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");i=[e[2],e[0],e[1]].join("-")}return o.html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Firstname</h4> 
        <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" 
          value="${s?r.firstname:""}" label="Enter Firstname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Surname</h4> 
        <mwc-textfield name="surname" type="text" class="w-full" id="surname" 
          value="${s?r.surname:""}" label="Enter Surname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Gender</h4>
        <mwc-select name="gender" class="w-full" id="gender" label="Select Gender" outlined required>
          <mwc-list-item value="0">Select Gender</mwc-list-item>
          ${this._genders.map((e=>s&&r.gender===e.id?o.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
        </mwc-select>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Date of Birth</h4> 
        <mwc-textfield name="dateOfBirth" type="date" class="w-full" id="dateOfBirth"
          label="Select Date of Birth" value="${i}" outlined required>
        </mwc-textfield>
      </div>
      <!-- <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Add Profile Picture</h4> 
        <file-input id="profilePicture" name="profilePicture" hasLabel label="Add Profile Picture"></file-input>
      </div> -->
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Phone Number</h4> 
        <mwc-textfield name="phone" multiple type="tel" class="w-full" id="phone"
          label="Enter Phone Number" value="${s?r.phone:""}" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Email Address</h4> 
        <mwc-textfield name="email" multiple type="email" class="w-full" id="email"
          label="Enter Email Address" value="${s?r.email:""}" outlined required>
        </mwc-textfield>
      </div>
    `}firstUpdated(){(0,g.togglePswdVisibility)(),(0,g.togglePswdVisibility)("mwc-textfield")}processClientUserSearch(e,t){t.page=t.page||0;const r=e.count,s=e.results,i=document.querySelector('[id="member"]');let n=[];if(r>0){var o=s;for(let e=0;e<o.length;e++){const t=o[e],r={id:t.id,text:t.firstname+" "+t.surname};n.includes(r)||n.push(r)}}return{results:n,total:r,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranchId)}]}getBranches(){return x(this,void 0,void 0,(function*(){const e=yield(0,d.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const r=[];r.push(...this._branches,...t),this._branches=r}))}getGenders(){return x(this,void 0,void 0,(function*(){const e=yield(0,u.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,m.GenericGenderInfo_S)(e))));const r=[];r.push(...this._genders,...t),this._genders=r}))}getPageAccesses(){return x(this,void 0,void 0,(function*(){const e=yield(0,p.GET_ClientPageAccess)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>A.Convert.toClientPageAccessModel(JSON.stringify(e)))));const r=[];r.push(...this._pageAccesses,...t),this._pageAccesses=r}))}submitForm(e){return x(this,void 0,void 0,(function*(){if(e.preventDefault(),"true"===this.edit){if(this.isEditable){const e=this.clientUser,t=e.data,r=Array.isArray(t)?t[0]:t;e.success&&(1===this.formId?yield(0,v.PUT_ClientUser)(r.id):2===this.formId?(yield(0,w.PUT_ClientUserAccess)(r.id),yield(0,B.setAppSettingsExtraSettings)(!0)):yield(0,b.PUT_ClientUserPassword)(r.id))}}else yield(0,f.POST_ClientUser)()}))}createRenderRoot(){return this}};C.styles=[o.css`
   :host { display: block; }
  `],k([(0,c.property)({type:String}),S("design:type",String)],C.prototype,"edit",void 0),k([(0,c.property)({type:Boolean}),S("design:type",Boolean)],C.prototype,"editAccess",void 0),k([(0,c.property)({type:Boolean}),S("design:type",Boolean)],C.prototype,"isEditable",void 0),k([(0,c.property)({type:String}),S("design:type",String)],C.prototype,"page_type",void 0),k([(0,c.property)({type:String}),S("design:type",String)],C.prototype,"registrationType",void 0),k([(0,c.property)({type:Number}),S("design:type",Number)],C.prototype,"formId",void 0),k([(0,c.property)({type:Number}),S("design:type",Number)],C.prototype,"startSearchPage",void 0),k([(0,c.property)({type:Number}),S("design:type",Number)],C.prototype,"selectedBranchId",void 0),k([(0,c.property)({type:Array}),S("design:type",Array)],C.prototype,"_branches",void 0),k([(0,c.property)({type:Array}),S("design:type",Array)],C.prototype,"_genders",void 0),k([(0,c.property)({type:Array}),S("design:type",Array)],C.prototype,"_pageAccesses",void 0),k([(0,c.property)({type:Array}),S("design:type",Array)],C.prototype,"_activeBranchId",void 0),k([(0,c.property)({type:Array}),S("design:type",Array)],C.prototype,"_userLoginInfo",void 0),k([(0,c.query)("#mainAccountFormBtn"),S("design:type","function"==typeof(s=void 0!==a.Button&&a.Button)?s:Object)],C.prototype,"mainAccountFormBtn",void 0),k([(0,c.query)("#accessPagesFormBtn"),S("design:type","function"==typeof(i=void 0!==a.Button&&a.Button)?i:Object)],C.prototype,"accessPagesFormBtn",void 0),k([(0,c.query)("#passwordFormBtn"),S("design:type","function"==typeof(n=void 0!==a.Button&&a.Button)?n:Object)],C.prototype,"passwordFormBtn",void 0),C=k([(0,c.customElement)("pdb-admin-user-form"),S("design:paramtypes",[])],C)}}]);
//# sourceMappingURL=src_view_admin_user_form_index_ts.js.map