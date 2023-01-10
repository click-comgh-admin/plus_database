"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/absent-leave/status/add"],{5358:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>s,https_swal_error_format:()=>r});const s="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?s:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},7333:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAbsentLeaveStatus:()=>u});var s=n(6455),r=n.n(s),o=n(8485),a=n(7270),i=n(3600),c=n(4492),l=n(8967),d=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,i.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status",n=document.querySelector('[make-general-posts="attendance-absent-leave-status"]'),s=new FormData(n);return r().fire({title:"Create Status?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>i});var s=n(8485),r=n(7270),o=n(4492),a=n(3600);function i(e=null){return t=this,n=void 0,c=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),i=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{a(c.next(e))}catch(e){s(e)}}function o(e){try{a(c.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}a((c=c.apply(t,n||[])).next())}));var t,n,i,c}},2400:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveStatusAdd:()=>_}),n(5358);var s=n(5862),r=n(9662),o=(n(3590),n(789),n(3283),n(3313),n(3600)),a=n(6224),i=n(7725),c=n(7333),l=(n(3683),n(4657),n(7712)),d=n(1354),u=n(1302),h=n(7108),p=function(e,t,n,s){var r,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};let _=class extends s.LitElement{constructor(){super(),this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._branches=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,l.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getBranches()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,d.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(!(0,u.AppSettingsExtraUserAccess)({pageId:h.PAGE__IDS.absent_leave_status,viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}let t=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),s.html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Status</h1>
                    <h3 class="h3">Create Status!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-status" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                        ${1===t?s.html`
                          <mwc-list-item value="0">Select Branch</mwc-list-item>
                          ${this._branches.map((e=>t===e.id?s.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                        `:s.html`
                          ${this._branches.map((e=>{if(e.id===t)return s.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                        `}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Status</h4>
                      <mwc-textfield name="status" id="status" label="Enter Status"
                        outlined required>
                      </mwc-textfield>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Create" raised class="w-full" @click="${this.submitForm}">
                    </mwc-button>
                  </div>
                
                  <div class="flex form-input-container items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                    <label class="block font-medium text-sm text-gray-600 w-full">
                      ...
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}branchChange(e){this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}firstUpdated(){}getBranches(){return m(this,void 0,void 0,(function*(){const e=yield(0,a.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}submitForm(e){return m(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,c.POST_AttendanceAbsentLeaveStatus)()}))}createRenderRoot(){return this}};_.styles=[s.css`
   :host { display: block; }
  `],p([(0,r.property)({type:Number}),f("design:type",Number)],_.prototype,"accountType",void 0),p([(0,r.property)({type:Number}),f("design:type",Number)],_.prototype,"selectedBranch",void 0),p([(0,r.property)({type:Array}),f("design:type",Array)],_.prototype,"_userLoginInfo",void 0),p([(0,r.property)({type:Array}),f("design:type",Array)],_.prototype,"_activeBranchId",void 0),p([(0,r.property)({type:Array}),f("design:type",Array)],_.prototype,"_branches",void 0),p([(0,r.property)({type:Boolean}),f("design:type",Boolean)],_.prototype,"_hasSetup",void 0),_=p([(0,r.customElement)("attendance-absent-leave-status-add"),f("design:paramtypes",[])],_)},7108:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>s});const s={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_admin_register_main_scss","shared"],(()=>(2400,e(e.s=2400)))),e.O())])));
//# sourceMappingURL=add.js.map