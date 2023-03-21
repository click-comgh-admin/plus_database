"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/registration/excel"],{65360:(e,t,n)=>{n.r(t),n.d(t,{POST_MembershipRegisterExcel:()=>p});var o=n(86455),r=n.n(o),s=n(48485),c=n(87270),i=n(14492),a=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function c(e){try{a(o.next(e))}catch(e){s(e)}}function i(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((o=o.apply(e,t||[])).next())}))};function p(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/excel",n=document.querySelector('[make-general-posts="register-excel"]'),o=new FormData(n);return r().fire({title:"Proceed with excel registration?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,c.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{const n=t.errors;if(Array.isArray(n))n.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}));else if("string"==typeof n)e.push(n);else{const t=n;for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){let o={error:n+": "+t[n]};e.push(o)}}}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},68701:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcelCreate:()=>p}),n(45501);var o,r=n(85862),s=n(59662),c=(n(23283),n(51511),n(44672)),i=n(65360),a=(n(86933),function(e,t,n,o){var r,s=arguments.length,c=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(s<3?r(c):s>3?r(t,n,c):r(t,n))||c);return s>3&&c&&Object.defineProperty(t,n,c),c}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function c(e){try{a(o.next(e))}catch(e){s(e)}}function i(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}a((o=o.apply(e,t||[])).next())}))};let p=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,c.urlQueryParams)()}))}disconnectedCallback(){}render(){return r.html`
      <membership-registration-excel-instruction></membership-registration-excel-instruction>
      ${this.form}
    `}get form(){return r.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Member Registration</h1>
                  <h3 class="h3">Excel Member Registration</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="register-excel" enctype="multipart/form-data">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="Register" raised class="button" @click="${this.submitForm}">
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
    `}get attachmentField(){return r.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="excel" name="excel" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,i.POST_MembershipRegisterExcel)()}))}createRenderRoot(){return this}};p.styles=[r.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],p.prototype,"CLIENT_ID",void 0),a([(0,s.property)({type:Array}),l("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],p.prototype,"_data",void 0),a([(0,s.property)({type:Object}),l("design:type",Object)],p.prototype,"urlQueryParams",void 0),p=a([(0,s.customElement)("membership-registration-excel-create"),l("design:paramtypes",[])],p)},86933:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcelInstruction:()=>c}),n(95358);var o=n(85862),r=n(59662),s=(n(41260),n(86330),function(e,t,n,o){var r,s=arguments.length,c=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(s<3?r(c):s>3?r(t,n,c):r(t,n))||c);return s>3&&c&&Object.defineProperty(t,n,c),c});let c=class extends o.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this)},new((o=void 0)||(o=Promise))((function(e,s){function c(e){try{a(r.next(e))}catch(e){s(e)}}function i(e){try{a(r.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,i)}a((r=r.apply(t,n||[])).next())}));var t,n,o,r}disconnectedCallback(){}render(){const e=[o.html`<app-accordion-item accordion_class_name="excel-instructions" class="mb-1"
        .buttonHtml="${o.html`<b>Location Data</b>`}"
        .contentHtml=${o.html`<membership-registration-excel-location></membership-registration-excel-location>`}>
        </app-accordion-item>
      `];return o.html`
      <div class="shadow-sm border bg-white p-2 m-2">
        <h1 class="text-[#ca8a04] text-[1.5rem] font-bold">Instructions</h1>
        <app-accordion accordionName="excel-instructions" .contents=${e}></app-accordion>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],c=s([(0,r.customElement)("membership-registration-excel-instruction"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],c)},60194:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcel:()=>m}),n(69579);var o=n(14108),r=n(85862),s=n(59662),c=(n(68701),n(48485)),i=(n(43683),n(74657),n(27712)),a=n(91354),l=n(41302),d=n(36869),p=function(e,t,n,o){var r,s=arguments.length,c=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(s<3?r(c):s>3?r(t,n,c):r(t,n))||c);return s>3&&c&&Object.defineProperty(t,n,c),c},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends r.LitElement{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function c(e){try{a(s.next(e))}catch(e){o(e)}}function i(e){try{a(s.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,i)}a((s=s.apply(t,n||[])).next())}));var t,n,r,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(!(0,l.AppSettingsExtraUserAccess)({pageId:d.PAGE__IDS.create,viewType:"Edit"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}return r.html`
      <a href="${c.CONSTANTS.URLS.PDB_CLIENT}assets/v2/samples/new_excel_registration.xlsx">
        <mwc-button icon="download" label="Download Template" class="success" raised></mwc-button>
      </a>
      <membership-registration-excel-create CLIENT_ID="${this.clientId}"></membership-registration-excel-create>
    `}firstUpdated(){}createRenderRoot(){return this}};p([(0,s.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),p([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),p([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),p([(0,s.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),m=p([(0,s.customElement)("membership-registration-excel"),u("design:paramtypes",[])],m)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_admin_register_main_scss","src_assets_styles_views_tailwind-output_unaccessible_pages_scss-src_assets_styles_views_widge-c8af88","src_addons_interfaces_location_constituency_model_index_ts-src_addons_interfaces_location_cou-9ea63f","src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-41c06a","shared"],(()=>(60194,e(e.s=60194)))),e.O())])));
//# sourceMappingURL=excel.js.map