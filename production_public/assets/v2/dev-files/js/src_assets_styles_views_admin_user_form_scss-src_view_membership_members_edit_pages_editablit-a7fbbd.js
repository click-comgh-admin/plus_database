"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_admin_user_form_scss-src_view_membership_members_edit_pages_editablit-a7fbbd"],{43753:(e,t,o)=>{o.r(t)},86175:(e,t,o)=>{o.r(t),o.d(t,{POST_UserEditabilityDisdable:()=>u});var n=o(86455),r=o.n(n),i=o(48485),s=o(87270),a=o(14492),c=o(8967),l=o(33600),d=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/disable-editable",o=document.querySelector('[make-general-posts="members-user-editability"]'),n=new FormData(o);return r().fire({title:"Diable Account Editability?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,o),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((o=>{let n={error:t.id+": "+o};"non_field_errors"===t.id&&(n={error:o}),e.push(n)}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),o=n.response.success}o&&r().fire({title:t,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},44865:(e,t,o)=>{o.r(t),o.d(t,{POST_UserEditabilityEndable:()=>u});var n=o(86455),r=o.n(n),i=o(48485),s=o(87270),a=o(14492),c=o(8967),l=o(33600),d=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/enable-editable",o=document.querySelector('[make-general-posts="members-user-editability"]'),n=new FormData(o);return r().fire({title:"Enable Account Editability?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,o),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((o=>{let n={error:t.id+": "+o};"non_field_errors"===t.id&&(n={error:o}),e.push(n)}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),o=n.response.success}o&&r().fire({title:t,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},99876:(e,t,o)=>{o.r(t),o.d(t,{PdbMembershipUpdateViewEditabilty:()=>d});var n=o(86175),r=o(44865),i=(o(43690),o(85862)),s=o(59662),a=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};let d=class extends i.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return i.html`
      <div class="w-full">
        <div class="flex justify-center my-1">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <header
                    class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">Member</h1>
                      <h3 class="h3">Update Profile Editability!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form !my-1" make-general-posts="members-user-editability"
                    enctype="multipart/form-data">
                    <div
                      class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 mb-2">
                      <h4 class="font-semibold my-2">Account Editable</h4>
                      <switch-input name="editable" class="w-full" id="editable" ?selected="${this.currentEditabilty}"
                        label="Account Editable?" outlined>
                      </switch-input>
                      <input type="hidden" name="memberId" id="memberId" value="${this.memberId}" />
                    </div>
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
    `}editablitySwitchAction(){const e=this;document.querySelectorAll('[name="editable"]').forEach((t=>{t.addEventListener("click",(o=>{e.selectedEditabilty=t.isSelected,console.log({"_this.selectedEditabilty":e.selectedEditabilty}),console.log({"_switch.isSelected":t.isSelected})}))}))}firstUpdated(){this.editablitySwitchAction()}submitForm(e){return l(this,void 0,void 0,(function*(){this.selectedEditabilty?yield(0,r.POST_UserEditabilityEndable)():yield(0,n.POST_UserEditabilityDisdable)()}))}createRenderRoot(){return this}};d.styles=[i.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),c("design:type",Number)],d.prototype,"memberId",void 0),a([(0,s.property)({type:Boolean}),c("design:type",Boolean)],d.prototype,"currentEditabilty",void 0),a([(0,s.property)({type:Boolean}),c("design:type",Boolean)],d.prototype,"selectedEditabilty",void 0),d=a([(0,s.customElement)("pdb-membership-update-view-editabilty"),c("design:paramtypes",[])],d)},19981:(e,t,o)=>{o.r(t),o.d(t,{PAGE__IDS:()=>n});const n={view:21,edit:22,create:23,"view-organization":53,"edit-organization":54}}}]);
//# sourceMappingURL=src_assets_styles_views_admin_user_form_scss-src_view_membership_members_edit_pages_editablit-a7fbbd.js.map