"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/clocking/follow_up"],{6951:(e,t,n)=>{n.r(t),n.d(t,{dateTime:()=>o,getDateTime:()=>s});const o=(e="")=>{let t=new Date,n=t.getFullYear(),o=t.getMonth()+1,s=t.getDate(),r=t.getHours(),i=t.getMinutes(),l=t.getSeconds(),a=n+"-"+o+"-"+s,c=r+":"+i+":"+l;return{dateTime:new Date(n,o,s,r,i,l),__string__:a+" "+c,__code__:n+o+s+r+i+l}},s=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},4783:(e,t,n)=>{n.r(t),n.d(t,{MemberClockingFollowUp_S:()=>r});var o=n(2486),s=n(7325);function r(e){return{id:Number(e.id),clockingId:(0,s.MemberClockingInfo_S)(e.clockingId),followUp:String(e.followUp),messagingType:Number(e.messagingType),sent:(0,o.Boolean_I)(e.sent),enteredBy:Number(e.enteredBy),date:new Date(e.date)}}},101:(e,t,n)=>{n.r(t),n.d(t,{InstanceOfOrganizationMember:()=>l,MemberClockingAdditionalInfo_S:()=>a,MemberClockingInfoFull_S:()=>c});var o=n(2578),s=n(6246),r=n(8530),i=n(7325);const l=e=>"organizationName"in e&&"organizationType"in e&&"businessRegistered"in e&&"organizationPhone"in e&&"dateOfIncorporation"in e;function a(e,t){let n=null;return n=1===t?(0,s.MembershipUser_S)(e.memberInfo):r.Convert.toMembershipOrganizationUserModel(JSON.stringify(e.memberInfo)),{id:Number(e.id),memberId:Number(e.memberId),memberInfo:n,phone:String(e.phone),email:String(e.email),facebook:String(e.facebook),instagram:String(e.instagram),placeOfWork:String(e.placeOfWork),profession:String(e.profession),twitter:String(e.twitter),whatsapp:String(e.whatsapp),businessHashtag:String(e.businessHashtag),businessDescription:String(e.businessDescription),dateJoined:(0,o.Date_I)(e.dateJoined),date:(0,o.Date_I)(e.date)}}function c(e){const t=(0,i.MemberClockingInfo_S)(e.attendance);return{attendance:t,additionalInfo:a(e.additionalInfo,t.accountType),lastSeen:(0,o.Date_I)(e.lastSeen),status:String(e.status)}}},7364:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o,typeMap:()=>c});class o{static toGenericMessagingTypeModel(e){return i(JSON.parse(e),a("GenericMessagingTypeModel"),s)}static genericMessagingTypeModelToJson(e){return JSON.stringify(i(e,a("GenericMessagingTypeModel"),r),null,2)}}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function r(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return i(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],l=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[r.key]=i(l,r.typ,n,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(s[r]=i(o[r],t,n,r))})),s}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function a(e){return{ref:e}}const c={GenericMessagingTypeModel:(d=[{json:"id",js:"id",typ:l(null,0)},{json:"name",js:"name",typ:l(null,"")}],!1,{props:d,additional:false})};var d},7425:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceClockingFollowUp:()=>m});var o=n(6455),s=n.n(o),r=n(8485),i=n(7270),l=n(4492),a=n(8967),c=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}a((o=o.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up/"+e,o={};return s().fire({title:"Remove Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new l.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6110:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceClockingFollowUp:()=>l});var o=n(8485),s=n(7270),r=n(4492),i=n(3600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up"+(null===e?"":"/"+e)+t,a=yield(0,s.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function o(e){try{r(c.next(e))}catch(e){t(e)}}function s(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,s)}r((c=c.apply(n,l||[])).next())}));var n,l,a,c}},3501:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceClockingFollowUp:()=>m});var o=n(6455),s=n.n(o),r=n(8485),i=n(7270),l=n(4492),a=n(8967),c=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}a((o=o.apply(e,t||[])).next())}))};function m(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up",n=document.querySelector('[make-general-posts="add-follow-up"]'),o=new FormData(n);return s().fire({title:"Send Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{if(o instanceof Object){const e=o.response;console.log({"VALUE.data":e.data}),window.location.reload()}else window.location.reload()}),500)}}))}))}},1986:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceClockingFollowUp_Resend:()=>m});var o=n(6455),s=n.n(o),r=n(8485),i=n(7270),l=n(4492),a=n(8967),c=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}a((o=o.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up/resend/"+e,o={};return s().fire({title:"Resend Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new l.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},5586:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericMessagingType:()=>l});var o=n(8485),s=n(7270),r=n(4492),i=n(3600);function l(e=null){return t=this,n=void 0,a=function*(){const t=(0,i.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/messaging-type"+(null===e?"":"/"+e),l=yield(0,s.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,o){function s(e){try{i(a.next(e))}catch(e){o(e)}}function r(e){try{i(a.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,r)}i((a=a.apply(t,n||[])).next())}));var t,n,l,a}},1772:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingFollowUp:()=>v}),n(3794);var o=n(7052),s=n(4672),r=n(5862),i=n(9662),l=(n(2715),n(8763),n(6034),n(3590),n(3283),n(6413),n(789),n(1511),n(6951)),a=n(4783),c=n(6110),d=n(3501),m=n(7364),u=n(5586),p=n(5118),f=n(7425),g=n(1986),h=n(101),_=function(e,t,n,o){var s,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}a((o=o.apply(e,t||[])).next())}))};let v=class extends r.LitElement{constructor(){super(),this.__memberClockingInfo=null,this._messagingTypes=[],this.clockingId=0,this.showingForm=!1,this.toggleFollowUpFormCalled=!1,this.toggleMessageMetadatFormCalled=!1,this.clockingIdEnc=null,this._clockingFollowUp=null}set _memberClockingInfo(e){this.__memberClockingInfo=e,this.requestUpdate()}get _memberClockingInfo(){return this.__memberClockingInfo}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this),document.onreadystatechange=e=>{setInterval((()=>{this.toggleFollowUpFormCalled||"complete"==document.readyState&&this.toggleFollowUpForm(e),this.toggleMessageMetadatFormCalled||"complete"==document.readyState&&this.toggleMessageMetadatForm(e)}))},this.getMeetingEventId(),yield this.getMessagingTypes(),yield this.getAttendanceClocking(),yield this.getAttendanceClockingFollowUp()}))}disconnectedCallback(){}render(){if(0===this.clockingId||null===this.clockingId||Number.isNaN(this.clockingId)){const e=r.html`<h4 class="text-white">Error</h4>`,t=r.html`
        <div>
          <p class="text-black mb-2">Clocking ID Not Found!</p>
        </div>
      `;return r.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{let e=null;if(e=null!==this._memberClockingInfo&&void 0!==this._memberClockingInfo.data?Array.isArray(this._memberClockingInfo.data)?this._memberClockingInfo.data.length>0?this._memberClockingInfo.data[0]:{}:this._memberClockingInfo.data:null,void 0===e){const e=r.html`<h4 class="text-white">Empty</h4>`,t=r.html`
          <div>
            <p class="text-black mb-2">Attendance Clocking Not Found!</p>
            <p class="text-black mb-2"><small>Try again later.</small></p>
          </div>
        `;return r.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}if(null!==e)return null===this._clockingFollowUp?r.html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `:r.html`
            <div class="shadow bg-white p-2">
              <div class="block">
                <div class="my-1">${this.form(e)}</div>
                <div class="my-1">${this.messages}</div>
              </div>
            </div>
          `;if(null===this._clockingFollowUp)return r.html`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `}}get messages(){if(this._clockingFollowUp.length>0)return this._clockingFollowUp.map((e=>r.html`<div class="border rounded-none my-1">
          <div class="border-b flex justify-end p-1">
            <div class="flex flex-col items-center pl-4">
              <mwc-icon-button class="bg-grow-early text-white" icon="forward" resend-this-item="${e.id}" @click="${this.resendFollowUpMessage}"></mwc-icon-button>
              <small class="block">Resend</small>
            </div>
            <div class="flex flex-col items-center pl-2">
              <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${e.id}" @click="${this.deleteFollowUpMessage}"></mwc-icon-button>
              <small class="block">Delete</small>
            </div>
          </div>
          <div class="border-0 p-1">
            <div class="flex flex-col justify-end items-end relative">
              ${this.messageMetaData(e)}
            </div>
            <div class="whitespace-pre-line">
              ${e.followUp}
            </div>
          </div>
          <div class="border-t flex justify-end p-1">
            <div>${(0,l.getDateTime)(e.date,{dateStyle:"medium",timeStyle:"short"})}</div>
          </div>
        </div>`));{const e=r.html`<h4 class="text-white">Empty</h4>`,t=r.html`
        <div>
          <p class="text-black mb-2">No Follow-Ups sent yet!</p>
          <p class="text-black mb-2"><small>Click on "Send Follow-Up" button to send one.</small></p>
        </div>
      `;return r.html`<alert-card info .header="${e}" .content="${t}"></alert-card>`}}messageMetaData(e){let t=" - ",n=" - ",o=" - ";if((0,h.InstanceOfOrganizationMember)(e.clockingId.memberId)){const s=e.clockingId.memberId;t=`${s.organizationName}`,n=`${s.organizationPhone}`,o=`${s.organizationEmail}`}else{const s=e.clockingId.memberId;t=`${s.firstname} ${s.middlename} ${s.surname}`,n=`${s.phone}`,o=`${s.email}`}return r.html`
      <mwc-button class="button info w-max block" message-meta-data-btn-id="${e.id}" outlined show_message_metadata disabled>
        <mwc-icon>visibility</mwc-icon> Show MetaData 
        <mwc-circular-progress indeterminate show_message_metadata_loading class="w-6"></mwc-circular-progress>
      </mwc-button>
      <div class="sm:w-2/5 w-full absolute top-10 z-10">
        <div class="mdc-data-table w-full shadow border" hidden mdc-data-table="data-table" message-meta-data-id="${e.id}">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Meta-Data</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>...</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Sent To</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${r.html`${t}`}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Message Type</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="uppercase">
                      <p>${this._messagingTypes.map((t=>e.messagingType===t.id?t.name:""))}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Status</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="flex flex-row-reverse items-center">
                      <mwc-icon class="${e.sent?"text-green-700":"text-red-700"}">${e.sent?"check":"close"}</mwc-icon>
                      <small class="${e.sent?"text-green-700":"text-red-700"}">${e.sent?"Sent":"Pending..."}</small>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Phone</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${r.html`<a href="tel:${n}" type="tel">${n}</a>`}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Email</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${r.html`<a href="mailto:${o}" type="email">${o}</a>`}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}form(e){const t=void 0===e.id?0:e.id,n=void 0===e.id?0:e.meetingEventId.id,o=0===n?r.html`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}" disabled>
      </mwc-button>`:r.html`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}">
      </mwc-button>
    `;return r.html`
      <mwc-button class="button success" outlined show_follow_up_form disabled>
        <mwc-icon>send</mwc-icon> Send Follow-Up 
        <mwc-circular-progress indeterminate show_follow_up_form_loading class="w-6"></mwc-circular-progress>
      </mwc-button>
      ${this.showingForm?r.html`
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <form method="post" action="#" class="form mt-0" make-general-posts="add-follow-up">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-12">
                <h4 class="font-semibold my-2">Select Messaging Type</h4>
                <mwc-select name="messagingType" id="messagingType" label="Select Messaging Type" outlined required>
                  ${this._messagingTypes.map((e=>r.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                </mwc-select>
              </div>
              <div class="col-md-12 col-lg-12">
                <h4 class="font-semibold my-2">Enter Follow Up</h4>
                ${this.followUp}
              </div>
              <div class="col-md-12 col-lg-12 my-2 z-10">
                <div class="form-input-container z-10">
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
          <hr class="my-2">
        </div>
      `:r.nothing}
    `}get followUp(){return r.html`<mwc-textarea class="h-44" outlined name="followUp" id="followUp"></mwc-textarea>`}firstUpdated(){}toggleMessageMetadatForm(e){const t=document.querySelectorAll("mwc-button[show_message_metadata]");document.querySelectorAll("mwc-button>[show_message_metadata_loading]").forEach((e=>{e.setAttribute("hidden","true")})),t.forEach((e=>{e.removeAttribute("disabled"),e.onclick=e=>b(this,void 0,void 0,(function*(){const t=e.target.getAttribute("message-meta-data-btn-id"),n=this.querySelector('[message-meta-data-id="'+t+'"]');n.hasAttribute("hidden")?n.removeAttribute("hidden"):n.setAttribute("hidden","")}))})),t.length>0&&(this.toggleMessageMetadatFormCalled=!0)}toggleFollowUpForm(e){const t=document.querySelectorAll("mwc-button[show_follow_up_form]");document.querySelectorAll("mwc-button>[show_follow_up_form_loading]").forEach((e=>{e.setAttribute("hidden","true")})),t.forEach((e=>{e.removeAttribute("disabled"),e.onclick=e=>b(this,void 0,void 0,(function*(){this.showingForm=!this.showingForm}))})),t.length>0&&(this.toggleFollowUpFormCalled=!0)}getMeetingEventId(){let e=(0,s.urlQueryParamsGet)("clocking-id"),t=null!==e?(0,o.base64Decode)(e):null;this.clockingId=Number.isNaN(t)?null:Number(t),this.clockingIdEnc=(0,o.base64Encode)(String(this.clockingId),!0)}getMessagingTypes(){return b(this,void 0,void 0,(function*(){const e=yield(0,u.GET_GenericMessagingType)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[{id:0,name:"Select Meeting Type"},...e.response.data.map((e=>m.Convert.toGenericMessagingTypeModel(JSON.stringify(e))))]);const n=[];n.push(...this._messagingTypes,...t),this._messagingTypes=n}))}getAttendanceClockingFollowUp(){return b(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceClockingFollowUp)(null,"?clockingId="+this.clockingId);if(null!==e){const t=e.paginResponse;if(e.response,null!==t){const e=t.results.map((e=>(0,a.MemberClockingFollowUp_S)(e)));this._clockingFollowUp=e}else this._clockingFollowUp=[]}else this._clockingFollowUp=[]}))}getAttendanceClocking(){return b(this,void 0,void 0,(function*(){const e=yield(0,p.GET_AttendanceClocking)(this.clockingId);this._memberClockingInfo=null===e?void 0:e.response}))}deleteFollowUpMessage(e){return b(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,f.DELETE_AttendanceClockingFollowUp)(t)}))}resendFollowUpMessage(e){return b(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("resend-this-item"));yield(0,g.PATCH_AttendanceClockingFollowUp_Resend)(t)}))}submitForm(e){return b(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,d.POST_AttendanceClockingFollowUp)()}))}createRenderRoot(){return this}};v.styles=[r.css`
   :host { display: block; }
  `],_([(0,i.property)({type:Array}),w("design:type",Array)],v.prototype,"_messagingTypes",void 0),_([(0,i.property)({type:Number}),w("design:type",Number)],v.prototype,"clockingId",void 0),_([(0,i.property)({type:Boolean}),w("design:type",Boolean)],v.prototype,"showingForm",void 0),_([(0,i.property)({type:Boolean}),w("design:type",Boolean)],v.prototype,"toggleFollowUpFormCalled",void 0),_([(0,i.property)({type:Boolean}),w("design:type",Boolean)],v.prototype,"toggleMessageMetadatFormCalled",void 0),_([(0,i.property)({type:String}),w("design:type",String)],v.prototype,"clockingIdEnc",void 0),_([(0,i.property)({type:Array}),w("design:type",Array)],v.prototype,"_clockingFollowUp",void 0),v=_([(0,i.customElement)("pdb-attendance-clocking-follow_up"),w("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_assets_styles_views_attendance_clocking_main_scss","src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_url_query_params_i-94fb2f","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_orga-82d0e9","src_addons_interfaces_attendance_member_clocking_info_index_ts-src_addons_network_attendance_-12d59f","shared"],(()=>(1772,e(e.s=1772)))),e.O())])));
//# sourceMappingURL=follow_up.js.map