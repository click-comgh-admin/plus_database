"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/edit/organization/bio-data"],{72869:(e,t,r)=>{function i(e){return{id:Number(e.id),name:e.name}}r.r(t),r.d(t,{GenericGenderInfo_S:()=>i})},87553:(e,t,r)=>{r.r(t),r.d(t,{GET_GenericGender:()=>s});var i=r(48485),n=r(87270),o=r(14492),a=r(33600);function s(e=null){return t=this,r=void 0,c=function*(){const t=(0,a.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),s=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function n(e){try{a(c.next(e))}catch(e){i(e)}}function o(e){try{a(c.throw(e))}catch(e){i(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(n,o)}a((c=c.apply(t,r||[])).next())}));var t,r,s,c}},1123:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsOrganizationTypes:()=>s});var i=r(48485),n=r(87270),o=r(14492),a=r(33600);function s(e=null){return t=this,r=void 0,c=function*(){const t=(0,a.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-organization-type"+(null===e?"":"/"+e),s=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function n(e){try{a(c.next(e))}catch(e){i(e)}}function o(e){try{a(c.throw(e))}catch(e){i(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(n,o)}a((c=c.apply(t,r||[])).next())}));var t,r,s,c}},91575:(e,t,r)=>{r.r(t),r.d(t,{DELETE_MembershipOrganizationCertificateUsers:()=>m});var i=r(86455),n=r.n(i),o=r(48485),a=r(87270),s=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization-certificate/"+e,i={};return n().fire({title:"Remove Organization Certificate?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(r,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new s.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const i=new s.NetWorkCallResponses("delete",r,!0);return i.postForm,i}})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),r=i.response.success}n().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},26667:(e,t,r)=>{r.r(t),r.d(t,{POST_MembershipOrganizationCertificateUser:()=>m});var i=r(86455),n=r.n(i),o=r(48485),a=r(87270),s=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function m(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization-certificate",r=document.querySelector('[make-general-posts="members-user-organization-certificate"]'),i=new FormData(r);return n().fire({title:"Add Certificate?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new s.NetWorkCallResponses("post",e,!1,r),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((r=>{let i={error:t.id+": "+r};"non_field_errors"===t.id&&(i={error:r}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),r=i.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},98561:(e,t,r)=>{r.r(t),r.d(t,{GET_MembershipOrganizationUsers:()=>s});var i=r(48485),n=r(87270),o=r(14492),a=r(33600);function s(e=null,t="",r=!1){return s=this,c=void 0,d=function*(){const s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,c=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,l=(0,a.getUserLoginInfoCookie)(),d=r?c:s,m=yield(0,n.http)(d,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new o.NetWorkCallResponses("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{n(d.next(e))}catch(e){t(e)}}function i(e){try{n(d.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,i)}n((d=d.apply(s,c||[])).next())}));var s,c,l,d}},39068:(e,t,r)=>{r.r(t),r.d(t,{PATCH_MembershipOrganizationUser:()=>m});var i=r(86455),n=r.n(i),o=r(48485),a=r(87270),s=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};function m(e,t=null){return d(this,void 0,void 0,(function*(){const r=(0,l.getUserLoginInfoCookie)(),i=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/"+e,m=document.querySelector('[make-general-posts="members-user-organization"]'),u=new FormData(m);return n().fire({title:null!=t?t:"Update Member Data?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(i,{method:"PATCH",body:u,headers:{Authorization:"Token "+r.token}},!1).then((e=>{const t=new s.NetWorkCallResponses("post",e,!1,m),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let i={error:t.id+": "+r};"non_field_errors"===t.id&&(i={error:r}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),r=i.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5649:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipUpdateOrganizationBioData:()=>T}),r(43753);var i,n,o,a,s,c=r(85862),l=r(59662),d=(r(15474),r(23283)),m=(r(40789),r(66163),r(63313),r(16413),r(51511),r(43690),r(37725),r(67052)),u=r(44672),p=r(77684),h=r(27712),f=r(33600),b=r(17725),g=r(48485),y=r(91354),v=r(41302),w=r(19981),_=(r(48763),r(74657),r(43683),r(72869)),x=r(87553),k=(r(99876),r(51525),r(1123)),S=r(19579),A=(r(70023),r(98561)),C=r(39068),B=r(91575),z=r(26667),O=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},E=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};!function(e){e[e.bio=0]="bio",e[e.contact_person_photo=1]="contact_person_photo",e[e.contact_person_info=2]="contact_person_info",e[e.certification=3]="certification"}(s||(s={}));let T=class extends c.LitElement{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this.memberData=null,this.formId=1,this._userLoginInfo=null,this._genders=[],this._organizationTypes=[],this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,h.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,b.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,f.getUserLoginInfoCookie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getGenders(),yield this.getMember(),yield this.getOrganizationType())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,y.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return c.html`<account-expired-component></account-expired-component>`;if(!(0,v.AppSettingsExtraUserAccess)({pageId:w.PAGE__IDS["edit-organization"],viewType:"Edit"},!1))return c.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=c.html`<h4 class="text-white">Error</h4>`,t=c.html`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${g.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
            label="Organizations Page"></link-button>
        </div>
      `;return c.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return c.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return c.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Organization </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=c.html`<h4 class="text-white">Error</h4>`,t=c.html`
          <div>
            <p class="text-black mb-2">Organization Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${g.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;return c.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=p.Convert.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return this.memberData=[t],c.html`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="mainSectionFormBtn"
              label="Main" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="editableSectionFormBtn" label="Editable" @click="${this.displayEditableSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="contactPersonSectionFormBtn" label="Certification" @click="${this.displayCertificationSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="certificationSectionFormBtn" label="Contact Person" @click="${this.displayContactPersonSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainEditableCertificationContactPersonSection(t)}
        </div>
      `}}displayMainSectionBtn(e){e.preventDefault(),this.formId=1,this.mainSectionFormBtn.setAttribute("raised","true"),this.editableSectionFormBtn.removeAttribute("raised"),this.certificationSectionFormBtn.removeAttribute("raised"),this.contactPersonSectionFormBtn.removeAttribute("raised"),setTimeout((()=>{this.organizationTypeSelectAction()}),100)}displayEditableSectionBtn(e){e.preventDefault(),this.formId=2,this.editableSectionFormBtn.setAttribute("raised","true"),this.mainSectionFormBtn.removeAttribute("raised"),this.certificationSectionFormBtn.removeAttribute("raised"),this.contactPersonSectionFormBtn.removeAttribute("raised")}displayCertificationSectionBtn(e){e.preventDefault(),this.formId=3,this.certificationSectionFormBtn.setAttribute("raised","true"),this.editableSectionFormBtn.removeAttribute("raised"),this.mainSectionFormBtn.removeAttribute("raised"),this.contactPersonSectionFormBtn.removeAttribute("raised"),setTimeout((()=>{this.businessRegisteredSwitchAction()}),100)}displayContactPersonSectionBtn(e){e.preventDefault(),this.formId=4,this.contactPersonSectionFormBtn.setAttribute("raised","true"),this.editableSectionFormBtn.removeAttribute("raised"),this.mainSectionFormBtn.removeAttribute("raised"),this.certificationSectionFormBtn.removeAttribute("raised")}getMainEditableCertificationContactPersonSection(e){return 1===this.formId?c.html`
        ${this.mainForm(e)}
      `:2===this.formId?c.html`
        ${this.editableForm(e)}
      `:3===this.formId?c.html`
        ${this.certificationForm(e)}
      `:c.html`
        ${this.contactPersonForm(e)}
      `}mainForm(e){return c.html`
      <div
        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Organization</h1>
                    <h3 class="h3">Update Profile Bio-Data!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization" submit_type="${s.bio}"
                  enctype="multipart/form-data">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Organization Name</h4>
                      <mwc-textfield name="organizationName" id="organizationName" label="Enter Organization Name" outlined type="text" value="${e.organizationName}"
                        required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Select Organization Type</h4>
                      <mwc-select name="organizationType" class="w-full" id="organizationType" label="Select Organization Type" outlined required>
                        <mwc-list-item value="0">Select Organization Type</mwc-list-item>
                        ${this._organizationTypes.map((t=>e.organizationType.id===t.id?c.html`<mwc-list-item value="${t.id}" selected>${t.type}</mwc-list-item>`:c.html`<mwc-list-item value="${t.id}">${t.type}</mwc-list-item>`))}
                        <mwc-list-item value="other_value">Other Organization Type</mwc-list-item>
                      </mwc-select>
                    </div>
                    ${"other_value"===this.selectedOrganizationType?c.html`
                      <div class="p-2">
                        <h4 class="font-semibold my-2">Enter Other Organization Type</h4>
                        <mwc-textfield name="other_organizationType" id="other_organizationType" label="Enter Other Organization Type" outlined type="text">
                        </mwc-textfield>
                      </div>
                    `:c.nothing}
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Phone Number</h4> 
                      <mwc-textfield name="organizationPhone" multiple type="tel" class="w-full" id="organizationPhone"
                        label="Enter Phone Number" value="${e.organizationPhone}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Email Address</h4> 
                      <mwc-textfield name="organizationEmail" multiple type="email" class="w-full" id="organizationEmail"
                        label="Enter Email Address" value="${e.organizationEmail}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Reference ID</h4> 
                      <mwc-textfield name="referenceId" multiple type="text" class="w-full" id="referenceId"
                        label="Enter Reference ID" value="${e.referenceId}" outlined>
                      </mwc-textfield>
                    </div>
                  </div>
                  <div class="p-2">
                      <div class="form-input-container">
                        <mwc-button class="primary" raised type="submit" label="Submit" message="Update Organization Data" submit_type="${s.bio}" @click="${this.submitForm}">
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}editableForm(e){return c.html`
      <pdb-membership-update-view-editabilty memberId="${e.id}" ?currentEditabilty="${e.editable}"></pdb-membership-update-view-editabilty>
    `}certificationForm(e){let t="";const r=new Date(e.dateOfIncorporation).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return t=[r[2],r[0],r[1]].join("-"),c.html`
      <div
        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Organization</h1>
                    <h3 class="h3">Update Organization Certification!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization" submit_type="${s.certification}"
                  enctype="multipart/form-data">
                  <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Is Organization Registered?</h4>
                      <switch-input name="businessRegistered" class="w-full" id="businessRegistered" ?selected="${e.businessRegistered}"
                        label="Organization Registered?" outlined>
                      </switch-input>
                    </div>
                    ${this.selectedBusinessRegistration?c.html`
                      <div class="p-2">
                        <h4 class="font-semibold my-2">Select Date of Incorporation</h4> 
                        <mwc-textfield name="dateOfIncorporation" type="date" class="w-full" id="dateOfIncorporation"
                          label="Select Date of Incorporation" value="${t}" outlined required>
                        </mwc-textfield>
                      </div>
                    `:c.nothing}
                    <div class="p-2 hidden md:block"></div>
                    <div class="p-2">
                      <div class="form-input-container">
                        <mwc-button class="primary" raised type="submit" label="Submit" message="Update Organization Certification" submit_type="${s.certification}" @click="${this.submitForm}">
                        </mwc-button>
                      </div>
                    </div>
                  </div>
                  <div class="p-2">
                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${this.selectedBusinessRegistration?c.html`
        <div class="block md:hidden">
          <div class="flex form-input-container items-center text-center">
            <hr class="border-gray-300 border-1 w-full rounded-md">
            <label class="block font-medium text-sm text-gray-600 w-full">
              ...
            </label>
            <hr class="border-gray-300 border-1 w-full rounded-md">
          </div>
        </div>
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <header class="header warning app-container--col-md-12">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">Organization</h1>
                      <h3 class="h3">Business Registration Certificate(s)!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization-certificate" submit_type="${s.certification}"
                    enctype="multipart/form-data">
                    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                      <div class="p-2">
                        <h4 class="font-semibold my-2">Is Organization Registered?</h4>
                        <file-input id="attachment" name="attachment" label="Select Attachment" accept="*"
                          ?required="${!0}" ?hasLabel="${!0}" fileSelectorInput></file-input>
                        <input type="hidden" name="memberId" id="memberId" value="${e.id}" />
                      </div>
                      <div class="p-2 hidden md:block"></div>
                      <div class="p-2 hidden md:block"></div>
                      <div class="p-2">
                        <div class="form-input-container">
                          <mwc-button class="primary" raised type="submit" label="Submit" submit_type="${s.bio}" @click="${this.submitCertificateForm}">
                          </mwc-button>
                        </div>
                      </div>
                    </div>
                    <div class="p-2">
                      <div class="flex form-input-container items-center text-center">
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                        <label class="block font-medium text-sm text-gray-600 w-full">
                          Lets go digital...
                        </label>
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                      </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                      ${e.certificates.map(((e,t)=>c.html`
                          <div class="flex justify-between p-2 shadow border border-gray-200">
                            <a href="${e.attachment.attachment}">FILE ${t+1}</a>
                            <div class="flex flex-col items-center pl-2">
                              <mwc-icon-button class="bg-love-kiss text-white" icon="delete"
                                delete-this-item="${e.id}" @click="${this.deleteCertificate}">
                              </mwc-icon-button>
                              <small class="block">Delete</small>
                            </div>
                          </div>
                        `))}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      `:c.nothing}
    `}contactPersonForm(e){return c.html`
      <div class="w-full">
        <div class="flex justify-center my-1">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <div class="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4">
                    <div class="px-1 border border-gray-200" style="height: fit-content">
                      <pdb-membership-member-organization-update-photo
                        memberId="${e.id}" .memberInfo="${[e]}">
                      </pdb-membership-member-organization-update-photo>
                    </div>
                    <div class="block sm:hidden">
                      <div class="flex form-input-container items-center text-center">
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                        <label class="block font-medium text-sm text-gray-600 w-full">
                          ...
                        </label>
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                      </div>
                    </div>
                    <div class="px-1 border border-gray-200" style="height: fit-content">
                      <header
                        class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                        <label for="" class="label">
                          <mwc-icon class="icon">format_strikethrough</mwc-icon>
                          <h1 class="h1 !text-red-400">Organization</h1>
                        <h3 class="h3">Update Contact Person!</h3>
                        </label>
                      </header> 
                      <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization" submit_type="${s.contact_person_info}"
                        enctype="multipart/form-data">
                        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4">
                            <div class="p-2">
                              <h4 class="font-semibold my-2">Enter Contact Person Name</h4>
                              <mwc-textfield name="contactPersonName" id="contactPersonName" label="Enter Contact Person Name" outlined type="text" value="${e.contactPersonName}"
                                required>
                              </mwc-textfield>
                            </div>
                            <div class="p-2">
                              <h4 class="font-semibold my-2">Select Gender</h4>
                              <mwc-select name="contactPersonGender" class="w-full" id="contactPersonGender" label="Select Gender" outlined required>
                                <mwc-list-item value="0">Select Gender</mwc-list-item>
                                ${this._genders.map((t=>e.contactPersonGender===t.id?c.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:c.html`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                              </mwc-select>
                            </div>
                            <div class="p-2">
                              <h4 class="font-semibold my-2">Enter Phone Number</h4> 
                              <mwc-textfield name="contactPersonPhone" multiple type="tel" class="w-full" id="contactPersonPhone"
                                label="Enter Phone Number" value="${e.contactPersonPhone}" outlined required>
                              </mwc-textfield>
                            </div>
                            <div class="p-2">
                              <h4 class="font-semibold my-2">Enter Email Address</h4> 
                              <mwc-textfield name="contactPersonEmail" multiple type="email" class="w-full" id="contactPersonEmail"
                                label="Enter Email Address" value="${e.contactPersonEmail}" outlined required>
                              </mwc-textfield>
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                          <mwc-button class="primary" raised type="submit" label="Submit" message="Update Contact Person Info" submit_type="${s.contact_person_info}" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}organizationTypeSelectAction(){const e=this;document.querySelectorAll('[name="organizationType"]').forEach((t=>{e.selectedOrganizationType=e.memberData[0].organizationType.id,t.addEventListener("change",(t=>{e.selectedOrganizationType=t.currentTarget.value}))}))}businessRegisteredSwitchAction(){const e=this;document.querySelectorAll('[name="businessRegistered"]').forEach((t=>{e.selectedBusinessRegistration=e.memberData[0].businessRegistered,t.addEventListener("click",(r=>{e.selectedBusinessRegistration=t.isSelected}))}))}firstUpdated(){setInterval((()=>{void 0===this.selectedOrganizationType&&this.organizationTypeSelectAction()}),100)}getUserId(){let e=(0,u.urlQueryParamsGet)("member-id"),t=null!==e?(0,m.base64Decode)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}deleteCertificate(e){return I(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,B.DELETE_MembershipOrganizationCertificateUsers)(t)}))}getMember(){return I(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,A.GET_MembershipOrganizationUsers)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getGenders(){return I(this,void 0,void 0,(function*(){const e=yield(0,x.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,_.GenericGenderInfo_S)(e))));const r=[];r.push(...this._genders,...t),this._genders=r}))}getOrganizationType(){return I(this,void 0,void 0,(function*(){const e=yield(0,k.GET_MemberGroupingsOrganizationTypes)();let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>S.Convert.toGroupingsOrganizationTypeModel(JSON.stringify(e)))));const r=[];r.push(...this._organizationTypes,...t),this._organizationTypes=r}))}submitForm(e){return I(this,void 0,void 0,(function*(){e.preventDefault();const t=e.currentTarget.getAttribute("message"),r=e.currentTarget.getAttribute("submit_type"),i=this.handleMultitpleSubmitFormSelectors();i.handle(r),yield(0,C.PATCH_MembershipOrganizationUser)(this.memberId,t),i.reset()}))}submitCertificateForm(e){return I(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,z.POST_MembershipOrganizationCertificateUser)()}))}handleMultitpleSubmitFormSelectors(){return{handle:e=>{document.querySelectorAll('[make-general-posts="members-user-organization"]').forEach((t=>{if(t.hasAttribute("make-general-posts")){const r=t.getAttribute("submit_type");e.toString()!==r&&t.setAttribute("make-general-posts","members-user-organization--disabled")}}))},reset:()=>{document.querySelectorAll('[make-general-posts="members-user-organization--disabled"]').forEach((e=>{e.setAttribute("make-general-posts","members-user-organization")}))}}}createRenderRoot(){return this}};T.styles=[c.css`
   :host { display: block; }
  `],O([(0,l.query)("#mainSectionFormBtn"),E("design:type","function"==typeof(i=void 0!==d.Button&&d.Button)?i:Object)],T.prototype,"mainSectionFormBtn",void 0),O([(0,l.query)("#editableSectionFormBtn"),E("design:type","function"==typeof(n=void 0!==d.Button&&d.Button)?n:Object)],T.prototype,"editableSectionFormBtn",void 0),O([(0,l.query)("#contactPersonSectionFormBtn"),E("design:type","function"==typeof(o=void 0!==d.Button&&d.Button)?o:Object)],T.prototype,"contactPersonSectionFormBtn",void 0),O([(0,l.query)("#certificationSectionFormBtn"),E("design:type","function"==typeof(a=void 0!==d.Button&&d.Button)?a:Object)],T.prototype,"certificationSectionFormBtn",void 0),O([(0,l.property)({type:Number}),E("design:type",Number)],T.prototype,"memberId",void 0),O([(0,l.property)({type:Number}),E("design:type",Object)],T.prototype,"selectedOrganizationType",void 0),O([(0,l.property)({type:Boolean}),E("design:type",Boolean)],T.prototype,"selectedBusinessRegistration",void 0),O([(0,l.property)({type:Array}),E("design:type",Array)],T.prototype,"_activeBranchId",void 0),O([(0,l.property)({type:Array}),E("design:type",Array)],T.prototype,"memberData",void 0),O([(0,l.property)({type:Number}),E("design:type",Number)],T.prototype,"formId",void 0),O([(0,l.property)({type:Array}),E("design:type",Array)],T.prototype,"_userLoginInfo",void 0),O([(0,l.property)({type:Array}),E("design:type",Array)],T.prototype,"_genders",void 0),O([(0,l.property)({type:Array}),E("design:type",Array)],T.prototype,"_organizationTypes",void 0),O([(0,l.property)({type:Boolean}),E("design:type",Boolean)],T.prototype,"_hasSetup",void 0),T=O([(0,l.customElement)("pdb-membership-update-organization-bio-data"),E("design:paramtypes",[])],T)},70023:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipMemberOrganizationUpdatePhoto:()=>l}),r(43753);var i=r(85862),n=r(59662),o=(r(51525),r(23283),r(51511),r(48763),r(74657),r(43683),r(39068)),a=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,r,i){return new(r||(r=Promise))((function(n,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};let l=class extends i.LitElement{constructor(){super(),this.memberId=0,this.memberInfo=null}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return c(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return this.memberInfo.map((e=>i.html`
        <div class="w-full">
          <div class="flex justify-center my-1">
            <div class="form-container flex justify-center">
              <div class="app-container- !px-0">
                <div class="app-container--row !px-0">
                  <div class="app-container--col-md-12">
                    <header
                      class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mb-2">
                      <label for="" class="label">
                        <mwc-icon class="icon">format_strikethrough</mwc-icon>
                        <h1 class="h1 !text-red-400">Organization</h1>
                        <h3 class="h3">Update Contact Person Photo!</h3>
                      </label>
                    </header>
                    <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization"
                      enctype="multipart/form-data">
                      <pdb-membership-update-view-photo headTitle="${e.contactPersonName}'s Photo"
                        inputId="contactPersonPhoto" inputName="contactPersonPhoto" inputLabel="Update Contact Person Photo"
                        ?inputRequired="${!0}" currentImage="${e.contactPersonPhoto}">
                      </pdb-membership-update-view-photo>
                      <div
                        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                        <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
                        </mwc-button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `))}firstUpdated(){}submitForm(e){return c(this,void 0,void 0,(function*(){e.preventDefault(),console.log({e}),yield(0,o.PATCH_MembershipOrganizationUser)(this.memberId,"Update Contact Person Photo")}))}createRenderRoot(){return this}};l.styles=[i.css`
   :host { display: block; }
  `],a([(0,n.property)({type:Number}),s("design:type",Number)],l.prototype,"memberId",void 0),a([(0,n.property)({type:Array}),s("design:type",Array)],l.prototype,"memberInfo",void 0),l=a([(0,n.customElement)("pdb-membership-member-organization-update-photo"),s("design:paramtypes",[])],l)},51525:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipUpdateViewPhoto:()=>s}),r(37725);var i=r(85862),n=r(59662),o=function(e,t,r,i){var n,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends i.LitElement{constructor(){super(),this.inputLabel=""}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,n=function*(){e.connectedCallback.call(this)},new((i=void 0)||(i=Promise))((function(e,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(a,s)}c((n=n.apply(t,r||[])).next())}));var t,r,i,n}disconnectedCallback(){}render(){return i.html`
      <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
        <div class="flex h-full flex-col justify-center gap-4 p-3">
          <h5 class="text-xl font-medium text-gray-500 dark:text-gray-400">${this.headTitle}</h5>
          <div fileSelectorPreviewer class="h-[400px] flex justify-center">
            <img class="object-contain bg-contain" src="${this.currentImage}">
          </div>
        </div>
        <div class="flex h-full flex-col justify-center gap-4 p-3 border border-gray-200">
          <file-input id="${this.inputId}" name="${this.inputName}" label="${this.inputLabel}" accept="image/jpg,image/jpeg,image/png"
            ?required="${this.inputRequired}" ?hasLabel="${!0}" fileSelectorInput></file-input>
        </div>
      </div>
    `}updateImageAction(){document.querySelectorAll("[fileSelectorInput]").forEach((e=>{e.addEventListener("change",(t=>{console.log({input:e});var r=window.URL.createObjectURL(e.fileSelector.files[0]);document.querySelectorAll("[fileSelectorPreviewer]").forEach((e=>{e.innerHTML=`<img class="object-contain bg-contain h-[400px] flex justify-center" src="${r}">`}))}))}))}firstUpdated(){this.updateImageAction()}createRenderRoot(){return this}};s.styles=[i.css`
   :host { display: block; }
  `],o([(0,n.property)({type:String}),a("design:type",String)],s.prototype,"headTitle",void 0),o([(0,n.property)({type:String}),a("design:type",String)],s.prototype,"currentImage",void 0),o([(0,n.property)({type:Number}),a("design:type",Number)],s.prototype,"inputId",void 0),o([(0,n.property)({type:String}),a("design:type",String)],s.prototype,"inputName",void 0),o([(0,n.property)({type:String}),a("design:type",String)],s.prototype,"inputLabel",void 0),o([(0,n.property)({type:Boolean}),a("design:type",Boolean)],s.prototype,"inputRequired",void 0),s=o([(0,n.customElement)("pdb-membership-update-view-photo"),a("design:paramtypes",[])],s)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.lit-element","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-981a93","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_mixe-07bf9a","src_assets_styles_views_admin_user_form_scss-src_assets_styles_views_tailwind-output_unaccess-c60780","src_assets_styles_views_admin_user_form_scss-src_addons_functions_url_query_params_index_ts-s-1b0b55","shared"],(()=>(5649,e(e.s=5649)))),e.O())])));
//# sourceMappingURL=bio-data.js.map