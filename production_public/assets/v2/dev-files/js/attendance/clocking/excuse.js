"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/clocking/excuse"],{6420:(e,t,n)=>{n.r(t),n.d(t,{MemberClockingExcuse_S:()=>c});var o=n(7325);function c(e){return{id:Number(e.id),clockingId:(0,o.MemberClockingInfo_S)(e.clockingId),excuse:String(e.excuse),enteredBy:Number(e.enteredBy),date:new Date(e.date)}}},4875:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceClockingExcuse:()=>i});var o=n(8485),c=n(7270),s=n(4492),r=n(3600);function i(e=null,t=""){return n=this,i=void 0,a=function*(){const n=(0,r.getUserLoginInfoCookie)(),i=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse"+(null===e?"":"/"+e)+t,l=yield(0,c.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{s(a.next(e))}catch(e){t(e)}}function c(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,c)}s((a=a.apply(n,i||[])).next())}));var n,i,l,a}},6518:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceClockingExcuse:()=>u});var o=n(6455),c=n.n(o),s=n(8485),r=n(7270),i=n(4492),l=n(8967),a=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(c,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,i)}l((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse",n=document.querySelector('[make-general-posts="add-excuse"]'),o=new FormData(n);return c().fire({title:"Enter Excuse?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,l.https_swal_error_format)(e);c().showValidationMessage(`${t}`)}return t})).catch((e=>{c().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!c().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&c().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{if(o instanceof Object){const e=o.response;console.log({"VALUE.data":e.data}),window.location.reload()}else window.location.reload()}),500)}}))}))}},9152:(e,t,n)=>{n.r(t),n.d(t,{PUT_AttendanceClockingExcuse:()=>u});var o=n(6455),c=n.n(o),s=n(8485),r=n(7270),i=n(4492),l=n(8967),a=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(c,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,i)}l((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-excuse/"+e,o=document.querySelector('[make-general-posts="add-excuse"]'),u=new FormData(o);return c().fire({title:"Update Excuse?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"PUT",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,o),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,l.https_swal_error_format)(e);c().showValidationMessage(`${t}`)}return t})).catch((e=>{c().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!c().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&c().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},3554:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingExcuse:()=>g}),n(3794);var o=n(7052),c=n(4672),s=n(5862),r=n(9662),i=(n(2715),n(8763),n(6034),n(3283),n(1511),n(6420)),l=n(4875),a=n(6518),d=n(9152),u=n(5118),f=function(e,t,n,o){var c,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(r=(s<3?c(r):s>3?c(t,n,r):c(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,n,o){return new(n||(n=Promise))((function(c,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function i(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,i)}l((o=o.apply(e,t||[])).next())}))};let g=class extends s.LitElement{constructor(){super(),this.__memberClockingInfo=null,this.clockingId=0,this.clockingIdEnc=null,this._clockingExcuse=null}set _memberClockingInfo(e){this.__memberClockingInfo=e,this.requestUpdate()}get _memberClockingInfo(){return this.__memberClockingInfo}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId(),yield this.getAttendanceClocking(),yield this.getAttendanceClockingExcuse()}))}disconnectedCallback(){}render(){if(0===this.clockingId||null===this.clockingId||Number.isNaN(this.clockingId)){const e=s.html`<h4 class="text-white">Error</h4>`,t=s.html`
        <div>
          <p class="text-black mb-2">Clocking ID Not Found!</p>
        </div>
      `;return s.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{let e=null;if(e=null!==this._memberClockingInfo&&void 0!==this._memberClockingInfo.data?Array.isArray(this._memberClockingInfo.data)?this._memberClockingInfo.data.length>0?this._memberClockingInfo.data[0]:{}:this._memberClockingInfo.data:null,void 0===e){const e=s.html`<h4 class="text-white">Empty</h4>`,t=s.html`
          <div>
            <p class="text-black mb-2">Attendance Clocking Not Found!</p>
            <p class="text-black mb-2"><small>Try again later.</small></p>
          </div>
        `;return s.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}if(null!==e){if(null===this._clockingExcuse)return s.html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `;{const t=void 0===e.id?0:e.id,n=void 0===e.id?0:e.meetingEventId.id,o=0===n?s.html`
            <mwc-button label="Save Excuse" raised class="button" @click="${this.submitForm}" disabled>
            </mwc-button>`:s.html`
            <mwc-button label="Save Excuse" raised class="button" @click="${this.submitForm}">
            </mwc-button>
          `;return s.html`
            <div class="shadow bg-white p-2">
              <form method="post" action="#" class="form mt-0" make-general-posts="add-excuse">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-10">
                    <h4 class="font-semibold my-2">Enter Excuse</h4>
                    ${this.excuse}
                  </div>
                  <div class="col-md-10 col-lg-10 my-2">
                    <div class="form-input-container">
                      ${o}
                    </div>
              
                    <div class="flex form-input-container items-center text-center my-2">
                      <input type="hidden" name="meetingEventId" value="${n}" />
                      <input type="hidden" name="clockingId" value="${t}" />
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
          `}}if(null===this._clockingExcuse)return s.html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `}}get excuse(){if(this._clockingExcuse.length>0){const e=this._clockingExcuse[0];return s.html`<mwc-textarea class="h-96" value="${e.excuse}" outlined name="excuse" id="excuse"></mwc-textarea>`}return s.html`<mwc-textarea class="h-96" outlined name="excuse" id="excuse"></mwc-textarea>`}firstUpdated(){}getMeetingEventId(){let e=(0,c.urlQueryParamsGet)("clocking-id"),t=null!==e?(0,o.base64Decode)(e):null;this.clockingId=Number.isNaN(t)?null:Number(t),this.clockingIdEnc=(0,o.base64Encode)(String(this.clockingId),!0)}getAttendanceClockingExcuse(){return h(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceClockingExcuse)(null,"?clockingId="+this.clockingId);if(null!==e){const t=e.paginResponse;if(e.response,null!==t){const e=t.results.map((e=>(0,i.MemberClockingExcuse_S)(e)));this._clockingExcuse=e}else this._clockingExcuse=[]}else this._clockingExcuse=[]}))}getAttendanceClocking(){return h(this,void 0,void 0,(function*(){const e=yield(0,u.GET_AttendanceClocking)(this.clockingId);this._memberClockingInfo=null===e?void 0:e.response}))}submitForm(e){return h(this,void 0,void 0,(function*(){if(e.preventDefault(),this._clockingExcuse.length>0){const e=this._clockingExcuse[0].id;yield(0,d.PUT_AttendanceClockingExcuse)(e)}else yield(0,a.POST_AttendanceClockingExcuse)()}))}createRenderRoot(){return this}};g.styles=[s.css`
   :host { display: block; }
  `],f([(0,r.property)({type:Number}),m("design:type",Number)],g.prototype,"clockingId",void 0),f([(0,r.property)({type:String}),m("design:type",String)],g.prototype,"clockingIdEnc",void 0),f([(0,r.property)({type:Array}),m("design:type",Array)],g.prototype,"_clockingExcuse",void 0),g=f([(0,r.customElement)("pdb-attendance-clocking-excuse"),m("design:paramtypes",[])],g)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_clocking_main_scss","src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_url_query_params_i-94fb2f","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_orga-82d0e9","src_addons_interfaces_attendance_member_clocking_info_index_ts-src_addons_network_attendance_-12d59f","shared"],(()=>(3554,e(e.s=3554)))),e.O())])));
//# sourceMappingURL=excuse.js.map