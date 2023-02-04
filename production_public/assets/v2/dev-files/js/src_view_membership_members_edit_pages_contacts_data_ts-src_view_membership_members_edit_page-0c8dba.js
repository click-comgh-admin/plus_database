"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_membership_members_edit_pages_contacts_data_ts-src_view_membership_members_edit_page-0c8dba"],{20515:(e,t,n)=>{n.r(t),n.d(t,{PATCH_UserContactData:()=>u});var o=n(86455),i=n.n(o),s=n(48485),r=n(87270),a=n(14492),c=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-contact-info/"+e,o=document.querySelector('[make-general-posts="members-user-contact-info"]'),u=new FormData(o);return i().fire({title:"Update User Contact Data?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"PATCH",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,o),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},41449:(e,t,n)=>{n.r(t),n.d(t,{POST_UserContactData:()=>u});var o=n(86455),i=n.n(o),s=n(48485),r=n(87270),a=n(14492),c=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-contact-info",n=document.querySelector('[make-general-posts="members-user-contact-info"]'),o=new FormData(n);return i().fire({title:"Add User Contact Data?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},3360:(e,t,n)=>{n.r(t),n.d(t,{PATCH_UserContactPrivacy:()=>u});var o=n(86455),i=n.n(o),s=n(48485),r=n(87270),a=n(14492),c=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-contact-info-privacy/"+e,o=document.querySelector('[make-general-posts="members-user-contact-info-privacy"]'),u=new FormData(o);return i().fire({title:"Update User Contact Privacy?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"PATCH",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,o),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},55128:(e,t,n)=>{n.r(t),n.d(t,{POST_UserContactPrivacy:()=>u});var o=n(86455),i=n.n(o),s=n(48485),r=n(87270),a=n(14492),c=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-contact-info-privacy",n=document.querySelector('[make-general-posts="members-user-contact-info-privacy"]'),o=new FormData(n);return i().fire({title:"Add User Contact Privacy?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},72395:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipUpdateViewContactData:()=>l}),n(51511),n(23283),n(63313),n(36034);var o=n(85862),i=n(59662),s=(n(48763),n(20515)),r=n(41449),a=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.LitElement{constructor(){super(),this.memberContactInfo=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberContactInfo?this.pageLoading:(this.memberContactInfo.length<1&&this.memberContactInfo.push(null),this.memberContactInfo.map((e=>{let t="";const n=new Date(null==e?void 0:e.dateJoined).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return t=[n[2],n[0],n[1]].join("-"),o.html`
      <form method="post" action="#" class="form !my-1" make-general-posts="members-user-contact-info" enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Phone Number</h4>
              <mwc-textfield name="phone" id="phone" label="Enter Phone Number" outlined type="tel" maxLength="13" value="${null==e?void 0:e.phone}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Email Address</h4>
              <mwc-textfield name="email" id="email" label="Enter Email Address" outlined type="email" value="${null==e?void 0:e.email}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Place of Work</h4>
              <mwc-textfield name="placeOfWork" id="placeOfWork" label="Enter Place of Work" outlined type="text" value="${null==e?void 0:e.placeOfWork}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Whatsapp Number</h4>
              <mwc-textfield name="whatsapp" id="whatsapp" label="Enter Whatsapp Number" outlined type="tel" maxLength="13" value="${null==e?void 0:e.whatsapp}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Facebook Handle</h4>
              <mwc-textfield name="facebook" id="facebook" label="Enter Facebook Handle" outlined type="text" value="${null==e?void 0:e.facebook}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Twitter Handle</h4>
              <mwc-textfield name="twitter" id="twitter" label="Enter Twitter Handle" outlined type="text" value="${null==e?void 0:e.twitter}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Instagram Handle</h4>
              <mwc-textfield name="instagram" id="instagram" label="Enter Instagram Handle" outlined type="text" value="${null==e?void 0:e.instagram}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Website Address</h4>
              <mwc-textfield name="website" id="website" label="Enter Website Address" outlined type="url" value="${null==e?void 0:e.website}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Postal Address</h4>
              <mwc-textfield name="postalAddress" id="postalAddress" label="Enter Postal Address" outlined type="text" value="${null==e?void 0:e.postalAddress}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Digital Address</h4>
              <mwc-textfield name="digitalAddress" id="digitalAddress" label="Enter Digital Address" outlined type="text" value="${null==e?void 0:e.digitalAddress}">
              </mwc-textfield>
            </div>
            <div></div>
            <div></div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Bio</h4>
              <mwc-textarea class="h-48" outlined name="accountBio" id="accountBio" label="Enter Account Bio"
                placeholder="Enter Account Bio" value="${null==e?void 0:e.accountBio}">
              </mwc-textarea>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Business Description</h4>
              <mwc-textarea class="h-48" outlined name="businessDescription" id="businessDescription" label="Enter Business Description"
                placeholder="Enter Business Description" value="${null==e?void 0:e.businessDescription}">
              </mwc-textarea>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Business Hashtags <span class="text-yellow-400">Seperate with comma[xyx,abc] or with new lines.</span></h4>
              <mwc-textarea class="h-48" outlined name="businessHashtag" id="businessHashtag" label="Enter Business Hashtags"
                placeholder="Enter Business Hashtags" value="${null==e?void 0:e.businessHashtag}">
              </mwc-textarea>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Date Joined</h4>
              <mwc-textfield name="dateJoined" type="date" class="w-full" id="dateJoined"
                label="Select Date Date Joined" value="${t}" outlined required>
              </mwc-textfield>
            </div>
            <input type="hidden" name="memberId" id="memberId" value="${this.memberId}" />
          </div>
        </div>
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
          <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
          </mwc-button>
        </div>
      </form>
     `})))}get pageLoading(){return o.html`
    <div class="main-container">
      <div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>
    </div>
   `}firstUpdated(){}submitForm(e){return t=this,n=void 0,i=function*(){let e,t;this.memberContactInfo.length<1||null===this.memberContactInfo[0]?e=!0:(e=!1,t=this.memberContactInfo[0].id),e?yield(0,r.POST_UserContactData)():yield(0,s.PATCH_UserContactData)(t)},new((o=void 0)||(o=Promise))((function(e,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,a)}c((i=i.apply(t,n||[])).next())}));var t,n,o,i}createRenderRoot(){return this}};l.styles=[o.css`
   :host { display: block; }
  `],a([(0,i.property)({type:Number}),c("design:type",Number)],l.prototype,"memberId",void 0),a([(0,i.property)({type:Array}),c("design:type",Array)],l.prototype,"memberContactInfo",void 0),l=a([(0,i.customElement)("pdb-membership-update-view-contact-data"),c("design:paramtypes",[])],l)},6734:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipUpdateViewContactPrivacy:()=>l}),n(51511),n(23283),n(43690);var o=n(85862),i=n(59662),s=(n(48763),n(3360)),r=n(55128),a=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.LitElement{constructor(){super(),this.memberContactPrivacy=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberContactPrivacy?this.pageLoading:(this.memberContactPrivacy.length<1&&this.memberContactPrivacy.push(null),this.memberContactPrivacy.map((e=>o.html`
      <form method="post" action="#" class="form !my-1" make-general-posts="members-user-contact-info-privacy" enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Phone Number</h4>
              <switch-input name="phone" class="w-full" id="phone" ?selected="${null==e?void 0:e.phone}"
                label="Hide Account Phone Number?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Email Address</h4>
              <switch-input name="email" class="w-full" id="email" ?selected="${null==e?void 0:e.email}"
                label="Hide Account Email Address?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Place of Work</h4>
              <switch-input name="placeOfWork" class="w-full" id="placeOfWork" ?selected="${null==e?void 0:e.placeOfWork}"
                label="Hide Place of Work?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Whatsapp Number</h4>
              <switch-input name="whatsapp" class="w-full" id="whatsapp" ?selected="${null==e?void 0:e.whatsapp}"
                label="Hide Account Whatsapp Number?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Facebook Handle</h4>
              <switch-input name="facebook" class="w-full" id="facebook" ?selected="${null==e?void 0:e.facebook}"
                label="Hide Account Facebook Handle?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Twitter Handle</h4>
              <switch-input name="twitter" class="w-full" id="twitter" ?selected="${null==e?void 0:e.twitter}"
                label="Hide Account Twitter Handle?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Instagram Handle</h4>
              <switch-input name="instagram" class="w-full" id="instagram" ?selected="${null==e?void 0:e.instagram}"
                label="Hide Account Instagram Handle?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Website Address</h4>
              <switch-input name="website" class="w-full" id="website" ?selected="${null==e?void 0:e.website}"
                label="Hide Account Website Address?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Postal Address</h4>
              <switch-input name="postalAddress" class="w-full" id="postalAddress" ?selected="${null==e?void 0:e.postalAddress}"
                label="Hide Account Postal Address?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Digital Address</h4>
              <switch-input name="digitalAddress" class="w-full" id="digitalAddress" ?selected="${null==e?void 0:e.digitalAddress}"
                label="Hide Account Digital Address?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Bio</h4>
              <switch-input name="accountBio" class="w-full" id="accountBio" ?selected="${null==e?void 0:e.accountBio}"
                label="Hide Account Bio?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Business Description</h4>
              <switch-input name="businessDescription" class="w-full" id="businessDescription" ?selected="${null==e?void 0:e.businessDescription}"
                label="Hide Business Description?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Business Hashtags</h4>
              <switch-input name="businessHashtag" class="w-full" id="businessHashtag" ?selected="${null==e?void 0:e.businessHashtag}"
                label="Hide Business Hashtags?" outlined>
              </switch-input>
            </div>
            <input type="hidden" name="memberId" id="memberId" value="${this.memberId}" />
          </div>
        </div>
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
          <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
          </mwc-button>
        </div>
      </form>
     `)))}get pageLoading(){return o.html`
    <div class="main-container">
      <div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>
    </div>
   `}firstUpdated(){}submitForm(e){return t=this,n=void 0,i=function*(){let e,t;this.memberContactPrivacy.length<1||null===this.memberContactPrivacy[0]?e=!0:(e=!1,t=this.memberContactPrivacy[0].id),e?yield(0,r.POST_UserContactPrivacy)():yield(0,s.PATCH_UserContactPrivacy)(t)},new((o=void 0)||(o=Promise))((function(e,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,a)}c((i=i.apply(t,n||[])).next())}));var t,n,o,i}createRenderRoot(){return this}};l.styles=[o.css`
   :host { display: block; }
  `],a([(0,i.property)({type:Number}),c("design:type",Number)],l.prototype,"memberId",void 0),a([(0,i.property)({type:Array}),c("design:type",Array)],l.prototype,"memberContactPrivacy",void 0),l=a([(0,i.customElement)("pdb-membership-update-view-contact-privacy"),c("design:paramtypes",[])],l)}}]);
//# sourceMappingURL=src_view_membership_members_edit_pages_contacts_data_ts-src_view_membership_members_edit_page-0c8dba.js.map