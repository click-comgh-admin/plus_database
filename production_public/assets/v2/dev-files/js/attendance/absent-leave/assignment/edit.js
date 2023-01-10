"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/absent-leave/assignment/edit"],{5358:(e,t,n)=>{n.r(t)},1522:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceAbsentLeaveAssignment:()=>i});var s=n(8485),o=n(7270),r=n(3600),a=n(4492);function i(e=null,t=""){return n=this,i=void 0,l=function*(){const n=(0,r.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{r(l.next(e))}catch(e){t(e)}}function o(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,o)}r((l=l.apply(n,i||[])).next())}));var n,i,c,l}},2467:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceAbsentLeaveAssignment:()=>m});var s=n(6455),o=n.n(s),r=n(8485),a=n(7270),i=n(3600),c=n(4492),l=n(8967),d=function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function a(e){try{c(s.next(e))}catch(e){r(e)}}function i(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,i.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/"+e,s=document.querySelector('[make-general-posts="attendance-absent-leave-assignment"]'),m=new FormData(s);return o().fire({title:"Update Assignment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(n,{method:"PATCH",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,l.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&o().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},4173:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveAssignmentEdit:()=>b}),n(5358);var s=n(5862),o=n(9662),r=(n(3590),n(789),n(3283),n(3313),n(6034),n(5866),n(3600)),a=n(7725),i=n(6224),c=n(7052),l=n(4672),d=n(7445),m=n(1522),u=n(2467),p=(n(3683),n(4657),n(7712)),h=n(1354),f=n(1302),_=n(7108),g=function(e,t,n,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,s){return new(n||(n=Promise))((function(o,r){function a(e){try{c(s.next(e))}catch(e){r(e)}}function i(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};let b=class extends s.LitElement{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.assignmentId=0,this.assignmentIdEnc=null,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._statuses=[],this._assignments=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,p.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,r.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getAssignmentId(),this.getAssignment(this.assignmentId),yield this.getBranches()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,h.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(!(0,f.AppSettingsExtraUserAccess)({pageId:_.PAGE__IDS.absent_leave_assignment,viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}if(this._assignments.length<1)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(null===this._assignments)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Group </span>: Not Found</h4>
          </div>
        </div>
      `;const t=this._assignments[0];let n=" - ";return n=1===t.memberInfo.accountType?t.memberInfo.middlename.length<1?`${t.memberInfo.firstname} ${t.memberInfo.surname}`:`${t.memberInfo.firstname} ${t.memberInfo.middlename} ${t.memberInfo.surname}`:`${t.memberInfo.organizationName}`,s.html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Change Assignment</h1>
                    <h3 class="h3">Update Assignment!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-assignment"
                  enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch" name="_branchId_" id="_branchId_"
                        outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>{if(e.id===t.statusID.branchID)return s.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Status</h4>
                      <mwc-select class="w-full" setSelectedStatusId label="Select Status" name="statusId" id="statusId"
                        outlined required>
                        <mwc-list-item value="${t.statusID.id}" selected>
                          ${t.statusID.status}
                        </mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">From - Date</h4>
                      <mwc-textfield name="fromDate" type="date" class="w-full" id="fromDate" label="Select From - Date"
                        value="${this.getDate(t.fromDate)}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">To - Date</h4>
                      <mwc-textfield name="toDate" type="date" class="w-full" id="toDate" label="Select To - Date"
                        value="${this.getDate(t.toDate)}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="col-md-12 col-lg-12">
                      <h4 class="font-semibold my-2">Member</h4>
                      <mwc-select class="w-full" setSelectedStatusId label="Select Member" name="__memberId__" id="__memberId__"
                        outlined required>
                        <mwc-list-item value="${t.memberID}" selected>
                          ${n}
                        </mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-12 col-lg-12">
                      <h4 class="font-semibold my-2">
                        Reason <span class="text-yellow-400">[optional]</span>
                      </h4>
                      <mwc-textarea class="h-96" outlined name="reason" id="reason" label="Enter Reason [optional]"
                        placeholder="Enter Reason [optional]" value="${t.reason}">
                      </mwc-textarea>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Update" raised class="w-full" @click="${this.submitForm}">
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
    `}getDate(e){return e.toLocaleString("default",{year:"numeric"})+"-"+e.toLocaleString("default",{month:"2-digit"})+"-"+e.toLocaleString("default",{day:"2-digit"})}firstUpdated(){}getAssignmentId(){let e=(0,l.urlQueryParamsGet)("view-assignment"),t=null!==e?(0,c.base64Decode)(e):null;this.assignmentId=Number.isNaN(t)?null:Number(t),this.assignmentIdEnc=(0,c.base64Encode)(String(this.assignmentId),!0)}getAssignment(e){return y(this,void 0,void 0,(function*(){const t=yield(0,m.GET_AttendanceAbsentLeaveAssignment)(e);null!==t&&t.response.success&&"statusId"in t.response.data?this._assignments=[d.Convert.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(t.response.data))]:this._assignments=null}))}getBranches(){return y(this,void 0,void 0,(function*(){const e=yield(0,i.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}submitForm(e){return y(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,u.PATCH_AttendanceAbsentLeaveAssignment)(this.assignmentId)}))}createRenderRoot(){return this}};b.styles=[s.css`
   :host { display: block; }
  `],g([(0,o.property)({type:Number}),v("design:type",Number)],b.prototype,"startSearchPage",void 0),g([(0,o.property)({type:Number}),v("design:type",Number)],b.prototype,"accountType",void 0),g([(0,o.property)({type:Number}),v("design:type",Number)],b.prototype,"selectedBranch",void 0),g([(0,o.property)({type:Number}),v("design:type",Number)],b.prototype,"assignmentId",void 0),g([(0,o.property)({type:String}),v("design:type",String)],b.prototype,"assignmentIdEnc",void 0),g([(0,o.property)({type:Array}),v("design:type",Array)],b.prototype,"_userLoginInfo",void 0),g([(0,o.property)({type:Array}),v("design:type",Array)],b.prototype,"_activeBranchId",void 0),g([(0,o.property)({type:Array}),v("design:type",Array)],b.prototype,"_memberCategories",void 0),g([(0,o.property)({type:Array}),v("design:type",Array)],b.prototype,"_branches",void 0),g([(0,o.property)({type:Array}),v("design:type",Array)],b.prototype,"_statuses",void 0),g([(0,o.property)({type:Array}),v("design:type",Array)],b.prototype,"_assignments",void 0),g([(0,o.property)({type:Boolean}),v("design:type",Boolean)],b.prototype,"_hasSetup",void 0),b=g([(0,o.customElement)("attendance-absent-leave-assignment-edit"),v("design:paramtypes",[])],b)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_admin_register_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_functions_url_query_params_i-f0e733","src_addons_interfaces_attendance_absent_leave_assignment_index_ts-src_addons_network_clients_-f0049c","shared"],(()=>(4173,e(e.s=4173)))),e.O())])));
//# sourceMappingURL=edit.js.map