"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/absent-leave/assignment/add"],{5358:(e,t,n)=>{n.r(t)},7141:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>c});class s{static toAttendanceAbsentLeaveStatusModel(e){return a(JSON.parse(e),l("AttendanceAbsentLeaveStatusModel"),r)}static attendanceAbsentLeaveStatusModelToJson(e){return JSON.stringify(a(e,l("AttendanceAbsentLeaveStatusModel"),o),null,2)}}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function o(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let r=0;r<s;r++){const s=e[r];try{return a(t,s,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>a(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],i=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;r[o.key]=a(i,o.typ,n,o.key)})),Object.getOwnPropertyNames(s).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(r[o]=a(s[o],t,n,o))})),r}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function i(...e){return{unionMembers:e}}function l(e){return{ref:e}}const c={AttendanceAbsentLeaveStatusModel:(u=[{json:"id",js:"id",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"branchId",js:"branchID",typ:i(null,0)},{json:"status",js:"status",typ:i(null,"")},{json:"date",js:"date",typ:i(null,Date)}],!1,{props:u,additional:false})};var u},5216:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>c});class s{static toMembershipUserModel(e){return a(JSON.parse(e),l("MembershipUserModel"),r)}static membershipUserModelToJson(e){return JSON.stringify(a(e,l("MembershipUserModel"),o),null,2)}}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function o(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let r=0;r<s;r++){const s=e[r];try{return a(t,s,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>a(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],i=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;r[o.key]=a(i,o.typ,n,o.key)})),Object.getOwnPropertyNames(s).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(r[o]=a(s[o],t,n,o))})),r}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function i(...e){return{unionMembers:e}}function l(e){return{ref:e}}const c={MembershipUserModel:(u=[{json:"id",js:"id",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"firstname",js:"firstname",typ:i(null,"")},{json:"middlename",js:"middlename",typ:i(null,"")},{json:"surname",js:"surname",typ:i(null,"")},{json:"gender",js:"gender",typ:i(null,0)},{json:"profilePicture",js:"profilePicture",typ:i(null,"")},{json:"phone",js:"phone",typ:i(null,"")},{json:"email",js:"email",typ:i(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:i(null,Date)},{json:"religion",js:"religion",typ:i(null,0)},{json:"nationality",js:"nationality",typ:i(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:i(null,"")},{json:"stateProvince",js:"stateProvince",typ:i(null,"")},{json:"region",js:"region",typ:i(null,0)},{json:"district",js:"district",typ:i(null,0)},{json:"constituency",js:"constituency",typ:i(null,0)},{json:"electoralArea",js:"electoralArea",typ:i(null,0)},{json:"community",js:"community",typ:i(null,"")},{json:"hometown",js:"hometown",typ:i(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:i(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:i(null,"")},{json:"level",js:"level",typ:i(null,0)},{json:"status",js:"status",typ:i(null,0)},{json:"accountType",js:"accountType",typ:i(null,0)},{json:"memberType",js:"memberType",typ:i(null,0)},{json:"date",js:"date",typ:i(null,Date)},{json:"last_login",js:"lastLogin",typ:i(null,Date)},{json:"referenceId",js:"referenceID",typ:i(null,"")},{json:"branchId",js:"branchID",typ:i(null,0)},{json:"editable",js:"editable",typ:i(null,!0)},{json:"profileResume",js:"profileResume",typ:i(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:i(null,"")},{json:"archived",js:"archived",typ:i(null,!0)},{json:"identification",js:"identification",typ:i(null,"")}],!1,{props:u,additional:false})};var u},4129:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAbsentLeaveAssignment:()=>d});var s=n(6455),r=n.n(s),o=n(8485),a=n(7270),i=n(3600),l=n(4492),c=n(8967),u=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function i(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((s=s.apply(e,t||[])).next())}))};function d(){return u(this,void 0,void 0,(function*(){const e=(0,i.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/bulk",n=document.querySelector('[make-general-posts="attendance-absent-leave-assignment"]'),s=new FormData(n);return r().fire({title:"Create Assignment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>u(this,void 0,void 0,(function*(){return yield(0,a.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5524:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceAbsentLeaveStatus:()=>i});var s=n(8485),r=n(7270),o=n(3600),a=n(4492);function i(e=null,t=""){return n=this,i=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new a.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,r)}o((c=c.apply(n,i||[])).next())}));var n,i,l,c}},6224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>i});var s=n(8485),r=n(7270),o=n(4492),a=n(3600);function i(e=null){return t=this,n=void 0,l=function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),i=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{a(l.next(e))}catch(e){s(e)}}function o(e){try{a(l.throw(e))}catch(e){s(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,o)}a((l=l.apply(t,n||[])).next())}));var t,n,i,l}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>i});var s=n(8485),r=n(7270),o=n(4492),a=n(3600);function i(e=null,t=""){return n=this,i=void 0,c=function*(){const n=(0,a.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(i,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,r)}o((c=c.apply(n,i||[])).next())}));var n,i,l,c}},504:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveAssignmentAdd:()=>A}),n(5358);var s=n(5862),r=n(9662),o=(n(3590),n(789),n(3283),n(3313),n(6034),n(5866),n(3600)),a=n(7725),i=n(6224),l=n(7141),c=n(5524),u=n(8485),d=n(5216),p=n(8530),m=n(4129),h=n(2892),f=(n(3683),n(4657),n(7712)),y=n(1354),g=n(1302),v=n(7108),b=function(e,t,n,s){var r,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function i(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((s=s.apply(e,t||[])).next())}))};let w={},S={},A=class extends s.LitElement{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.selectedGroup=0,this._userLoginInfo=null,this._activeBranchId=null,this._branches=[],this._groups=[],this._statuses=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return j(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,f.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getGroups(),yield this.getBranches(),yield this.getStatuses()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,y.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(!(0,g.AppSettingsExtraUserAccess)({pageId:v.PAGE__IDS.absent_leave_assignment,viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}let t=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),s.html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Assignment</h1>
                    <h3 class="h3">Create Assignment!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-assignment" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Account Type</h4>
                      <mwc-select class="w-full" label="Select Account Type"
                        name="accountType" id="accountType" @change="${this.accountTypeChange}"
                        outlined required>
                        <mwc-list-item value="0" selected>Select Account Type</mwc-list-item>
                        <mwc-list-item value="1">User Account </mwc-list-item>
                        <mwc-list-item value="2">User Account (From Group) </mwc-list-item>
                        <mwc-list-item value="3">Organization Account</mwc-list-item>
                        <mwc-list-item value="4">Organization Account (From Group)</mwc-list-item>
                      </mwc-select>
                    </div>
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
                      <h4 class="font-semibold my-2">Select Status</h4>
                      <mwc-select class="w-full" setSelectedStatusId label="Select Status"
                        name="statusId" id="statusId" outlined required>
                        <mwc-list-item value="0">Select Status</mwc-list-item>
                        ${this._statuses.map((e=>s.html`<mwc-list-item value="${e.id}">${e.status}</mwc-list-item>`))}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">From - Date</h4>
                      <mwc-textfield name="fromDate" type="date" class="w-full" id="fromDate" label="Select From - Date"
                        value="" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">To - Date</h4>
                      <mwc-textfield name="toDate" type="date" class="w-full" id="toDate" label="Select To - Date"
                        value="" outlined required>
                      </mwc-textfield>
                    </div>
                    ${this.memberListField}
                    <div class="col-md-12 col-lg-12">
                      <h4 class="font-semibold my-2">
                        Reason <span class="text-yellow-400">[optional]</span>
                      </h4>
                      <mwc-textarea class="h-96" outlined name="reason" id="reason"
                        label="Enter Reason [optional]" placeholder="Enter Reason [optional]">
                      </mwc-textarea>
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
    `}branchChange(e){return j(this,void 0,void 0,(function*(){const t=this.accountType;this.accountType=0,this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value),setTimeout((()=>{this.accountType=t}),500),Number.isNaN(this.selectedBranch)||(yield this.getStatuses(`?branchId=${this.selectedBranch}`,this.selectedBranch),yield this.getGroups("?branchId="+this.selectedBranch,this.selectedBranch))}))}accountTypeChange(e){this.accountType=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}groupChanged(e){this.selectedGroup=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}get memberListField(){return 0===Number(this.accountType)?"...":1===Number(this.accountType)?this.individualMemberList:2===Number(this.accountType)?this.individualGroupMemberList:3===Number(this.accountType)?this.organizationMemberList:this.organizationGroupMemberList}get individualMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`<div class="col-md-12 col-lg-12">
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${function(e,t){var n;t.page=t.page||0;const s=e.count,r=e.results,o=document.querySelector('[id="memberIds"]');let a=[];if(s>0){var i=r;for(let e=0;e<i.length;e++){const t=i[e],s=d.Convert.toMembershipUserModel(JSON.stringify(t)),r={id:s.id,text:`${s.firstname} ${null!==(n=s.middlename)&&void 0!==n?n:""} ${s.surname}`};a.includes(r)||a.push(r)}}return{results:a,total:s,totalShowing:o.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>
    `}get individualGroupMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select Group</h4>
        ${this.groupField}
      </div>
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select User</h4>
        <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
          .ajaxFetchProcessResponse="${function(e,t){var n;t.page=t.page||0;const s=e.count,r=e.results,o=document.querySelector('[id="memberIds"]');let a=[];if(s>0){var i=r;for(let e=0;e<i.length;e++){const t=i[e],s=d.Convert.toMembershipUserModel(JSON.stringify(t)),r={id:s.id,text:`${s.firstname} ${null!==(n=s.middlename)&&void 0!==n?n:""} ${s.surname}`};a.includes(r)||a.push(r)}}return{results:a,total:s,totalShowing:o.totalShowing}}}" startSearchPage="${this.startSearchPage}"
          .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>
    `}get organizationMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`<div class="col-md-12 col-lg-12">
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const n=e.count,s=e.results,r=document.querySelector('[id="memberIds"]');let o=[];if(n>0){var a=s;for(let e=0;e<a.length;e++){const t=a[e],n=p.Convert.toMembershipOrganizationUserModel(JSON.stringify(t)),s={id:n.id,text:`${n.organizationName}`};o.includes(s)||o.push(s)}}return{results:o,total:n,totalShowing:r.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
      </div>
    `}get organizationGroupMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`
      <div class="col-md-6 col-lg-6">
        <h4 class="font-semibold my-2">Select Group</h4>
        ${this.groupField}
      </div>
      <div class="col-md-6 col-lg-6">
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const n=e.count,s=e.results,r=document.querySelector('[id="memberIds"]');let o=[];if(n>0){var a=s;for(let e=0;e<a.length;e++){const t=a[e],n=p.Convert.toMembershipOrganizationUserModel(JSON.stringify(t)),s={id:n.id,text:`${n.organizationName}`};o.includes(s)||o.push(s)}}return{results:o,total:n,totalShowing:r.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${u.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
      </div>
    `}get groupField(){const e=this._groups.map((e=>({id:e.id,name:e.group,isSelected:"false",selected:!1})));return s.html`
      <mwc-select class="w-full" setSelectedGroupId label="Select Group" name="groupId"
        id="groupId" @change="${this.groupChanged}" outlined required>
        <mwc-list-item value="0">Select Group</mwc-list-item>
        ${e.map((e=>s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
        
      </mwc-select>
    `}get ajaxFetchUrlParams(){return 1===Number(this.accountType)||3===Number(this.accountType)?[{param:"branchId",value:String(this.selectedBranch)}]:[{param:"branchId",value:String(this.selectedBranch)},{param:"groupId",value:String(this.selectedGroup)}]}firstUpdated(){}getBranches(){return j(this,void 0,void 0,(function*(){const e=yield(0,i.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getStatuses(e="",t=null){return j(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(this._statuses=[],n in S)return void setTimeout((()=>{this._statuses=S[n]}),500);const s=yield(0,c.GET_AttendanceAbsentLeaveStatus)(null,e);let r=[];null===s?r.push({id:0,status:"**NOT FOUND**",date:new Date}):!0===s.response.success&&"length"in s.response.data&&(r=s.response.data.map((e=>l.Convert.toAttendanceAbsentLeaveStatusModel(JSON.stringify(e)))));const o=[];o.push(...this._statuses,...r),this._statuses=o,S[n]=this._statuses}))}getGroups(e="",t=null){return j(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(this._groups=[],n in w)return void setTimeout((()=>{this._groups=w[n]}),500);const s=yield(0,h.GET_MemberGroupingsGroups)(null,e);let r=[];null===s?r.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===s.response.success&&"length"in s.response.data&&(r=s.response.data);const o=[];o.push(...this._groups,...r),this._groups=o,w[n]=this._groups}))}submitForm(e){return j(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.POST_AttendanceAbsentLeaveAssignment)()}))}createRenderRoot(){return this}};A.styles=[s.css`
   :host { display: block; }
  `],b([(0,r.property)({type:Number}),_("design:type",Number)],A.prototype,"startSearchPage",void 0),b([(0,r.property)({type:Number}),_("design:type",Number)],A.prototype,"accountType",void 0),b([(0,r.property)({type:Number}),_("design:type",Number)],A.prototype,"selectedBranch",void 0),b([(0,r.property)({type:Number}),_("design:type",Number)],A.prototype,"selectedGroup",void 0),b([(0,r.property)({type:Array}),_("design:type",Array)],A.prototype,"_userLoginInfo",void 0),b([(0,r.property)({type:Array}),_("design:type",Array)],A.prototype,"_activeBranchId",void 0),b([(0,r.property)({type:Array}),_("design:type",Array)],A.prototype,"_branches",void 0),b([(0,r.property)({type:Array}),_("design:type",Array)],A.prototype,"_groups",void 0),b([(0,r.property)({type:Array}),_("design:type",Array)],A.prototype,"_statuses",void 0),b([(0,r.property)({type:Boolean}),_("design:type",Boolean)],A.prototype,"_hasSetup",void 0),A=b([(0,r.customElement)("attendance-absent-leave-assignment-add"),_("design:paramtypes",[])],A)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_orga-82d0e9","src_assets_styles_views_admin_register_main_scss","shared"],(()=>(504,e(e.s=504)))),e.O())])));
//# sourceMappingURL=add.js.map