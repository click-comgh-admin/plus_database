"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_classes_filter_field_box_index_ts-src_addons_functions_https_download_ts-src_addon-a52831"],{6660:(e,t,n)=>{n.r(t)},2368:(e,t,n)=>{n.r(t),n.d(t,{FilterFieldBox:()=>a});var i=n(4672);class a{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{var t,n;e.preventDefault();const i=window.FilterFieldBox.form,a=new FormData(i),r=null===(t=this.unmutableInputNames)||void 0===t?void 0:t.map((e=>e.name));null==a||a.forEach(((e,t)=>{var n;(null==r?void 0:r.includes(t))||null===(n=document.querySelectorAll('[name="'+t+'"]'))||void 0===n||n.forEach((e=>{e.value=""}))})),null===(n=this.unmutableInputNames)||void 0===n||n.map((e=>{var t;const n=e.name,i=e.value;void 0!==i&&(null===(t=document.querySelectorAll('[name="'+n+'"]'))||void 0===t||t.forEach((e=>{e.value=i})))})),i.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,i.urlQueryParamsGet)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,n=t.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},8276:(e,t,n)=>{n.r(t),n.d(t,{http_download:()=>r});var i=n(7153),a=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function l(e){try{o(i.next(e))}catch(e){r(e)}}function s(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}o((i=i.apply(e,t||[])).next())}))};function r(e,t,n=!0){return a(this,void 0,void 0,(function*(){let r=null;t=null==t?{method:"GET"}:t;var l=new Headers;if(l.append("Access-Control-Allow-Origin","*/*"),l.append("Accept","application/json, text/plain, */*"),n&&l.append("Content-Type","application/json"),void 0===t.headers)t.headers=l;else for(const e of l.keys())t.headers[e]=l.get(e);return t.mode="cors",t.redirect="follow",yield(0,i.default)(e,t,3e5).then((e=>(r=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>a(this,void 0,void 0,(function*(){return{blobData:204===e.status?null:yield e.blob(),response:e,error:""}})))).then((e=>a(this,void 0,void 0,(function*(){if(null!==e.blobData){const t=document.createElement("a");t.href=window.URL.createObjectURL(e.blobData),t.download=e.response.headers.get("Content-Disposition").split(";")[1].split("=")[1],t.click()}return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},3464:(e,t,n)=>{function i(e){return{id:Number(e.id),page:e.page}}n.r(t),n.d(t,{ClientPageAccess_S:()=>i})},2583:(e,t,n)=>{n.r(t),n.d(t,{ClientUserAccess_S:()=>a});var i=n(3464);function a(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,i.ClientPageAccess_S)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},2869:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericGenderInfo_S:()=>i})},5069:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericMeetingEventClockingTypeInfo_S:()=>i})},3437:(e,t,n)=>{n.r(t),n.d(t,{GroupingsGroup_S:()=>a});var i=n(267);function a(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},660:(e,t,n)=>{n.r(t),n.d(t,{GroupingsSubGroup_S:()=>a}),n(2892);var i=n(267);function a(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,i.GroupingsMemberCategories_S)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},1148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},8698:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDate:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},7824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},4843:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleGroup:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},2734:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleFromDate:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},1694:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleNow:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=""){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},7435:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleToday:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=""){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},6972:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleUpcoming:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=""){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},2218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},8786:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleSubGroup:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},7553:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericGender:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},4115:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericMeetingEventClockingType:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},72:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsMemberCategories:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null){return t=this,n=void 0,o=function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),s=yield(0,a.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,r)}l((o=o.apply(t,n||[])).next())}));var t,n,s,o}},9605:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>s});var i=n(8485),a=n(7270),r=n(4492),l=n(3600);function s(e=null,t=""){return n=this,s=void 0,c=function*(){const n=(0,l.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,o=yield(0,a.http)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}r((c=c.apply(n,s||[])).next())}));var n,s,o,c}},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>s});var i=n(5862),a=n(9662),r=(n(9975),n(6788),function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?i.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:i.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};s.styles=[i.css`
      :host {
        display: block;
      }
    `],r([(0,a.property)({type:String}),l("design:type",String)],s.prototype,"name",void 0),r([(0,a.property)({type:String}),l("design:type",String)],s.prototype,"label",void 0),r([(0,a.property)({type:Boolean}),l("design:type",Boolean)],s.prototype,"selected",void 0),r([(0,a.property)({type:String}),l("design:type",String)],s.prototype,"value",void 0),r([(0,a.property)({type:Boolean}),l("design:type",Boolean)],s.prototype,"isSelected",void 0),s=r([(0,a.customElement)("switch-input")],s)},997:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClockerMeetingPicker:()=>C}),n(3794);var i,a,r,l,s,o=n(5862),c=n(9662),d=n(7725),u=n(7052),h=n(4672),m=(n(1511),n(2715),n(8763),n(5474),n(6163),n(2583)),p=n(2506),g=n(3600),v=n(3283),f=n(1694),y=n(7435),b=n(2734),_=n(6972),w=(n(3690),n(1148)),S=n(8698),A=n(7824),k=n(8881),E=n(2218),I=function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},N=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function l(e){try{o(i.next(e))}catch(e){r(e)}}function s(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}o((i=i.apply(e,t||[])).next())}))};let C=class extends o.LitElement{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/attendance/v2/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/attendance/v2/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return N(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,g.getUserLoginInfoCookie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return o.html`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this.allowFetch=!0,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?o.html`
        ${this.nowSectionData}
      `:2===this.formId?o.html`
        ${this.todaySectionData}
      `:3===this.formId?o.html`
        ${this.upcomingSectionData}
      `:4===this.formId?o.html`
        ${this.dateSectionData}
      `:o.html`
        ${this.allMeetingsSectionData}
      `}get notFound(){const e=o.html`<h4 class="text-white">Empty</h4>`,t=o.html`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return o.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:o.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:o.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:o.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=o.html`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return o.html`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?o.html`${e}${this.notFound}`:o.html`
      ${e}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceAllSchedules(),null===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return o.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):o.nothing}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const n=e.split(":");return void 0!==n[0]&&t.setHours(Number(n[0])),void 0!==n[1]&&t.setMinutes(Number(n[1])),void 0!==n[2]&&t.setSeconds(Number(n[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,n=(0,u.base64Encode)(String(t),!0),i=this.getTime(String(e.startTime)),a=this.getTime(String(e.closeTime));return o.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${n}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${i} - To: ${a} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,k.until)(this.getAttendanceScheduleDay(t),o.html`<span>Loading...</span>`):(0,k.until)(this.getAttendanceScheduleDate(t),o.html`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,h.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,u.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,p.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=(0,m.ClientUserAccess_S)(e)).page.id}))}}))}getAttendanceAllSchedules(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,E.GET_AttendanceSchedule)(null,"?branchId="+e+"&length=1000000&order__by=-id&isRecuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleNow(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,f.GET_AttendanceScheduleNow)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,_.GET_AttendanceScheduleUpcoming)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,y.GET_AttendanceScheduleToday)("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.GET_AttendanceScheduleFromDate)(this.todayDate,"?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return N(this,void 0,void 0,(function*(){const t=yield(0,A.GET_AttendanceScheduleDay)(null,"?meetingEventId="+e);if(null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),n=new Date(e.endDate).toLocaleDateString();return o.html`<li class="border p-1">Every ${(0,k.until)(this.getDayOfWeek(t),o.html`<i><small>Getting day of week</small>...</i>`)}, until ${n}</li>`}));return o.html`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return N(this,void 0,void 0,(function*(){const t=yield(0,w.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return N(this,void 0,void 0,(function*(){const t=yield(0,S.GET_AttendanceScheduleDate)(null,"?meetingEventId="+e+"&length=1000");if(null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return o.html`<li class="border p-1">On ${t}</li>`}));return o.html`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};C.styles=[o.css`
   :host { display: block; }
  `],I([(0,c.query)("#getNowMeetingsBtn"),B("design:type","function"==typeof(i=void 0!==v.Button&&v.Button)?i:Object)],C.prototype,"getNowMeetingsBtn",void 0),I([(0,c.query)("#getAllMeetingsBtn"),B("design:type","function"==typeof(a=void 0!==v.Button&&v.Button)?a:Object)],C.prototype,"getAllMeetingsBtn",void 0),I([(0,c.query)("#getTodayMeetingsBtn"),B("design:type","function"==typeof(r=void 0!==v.Button&&v.Button)?r:Object)],C.prototype,"getTodayMeetingsBtn",void 0),I([(0,c.query)("#getUpcomingMeetingsBtn"),B("design:type","function"==typeof(l=void 0!==v.Button&&v.Button)?l:Object)],C.prototype,"getUpcomingMeetingsBtn",void 0),I([(0,c.query)("#getDateMeetingsBtn"),B("design:type","function"==typeof(s=void 0!==v.Button&&v.Button)?s:Object)],C.prototype,"getDateMeetingsBtn",void 0),I([(0,c.property)({type:String}),B("design:type",String)],C.prototype,"todayDate",void 0),I([(0,c.property)({type:Number}),B("design:type",Number)],C.prototype,"meetingEventId",void 0),I([(0,c.property)({type:Number}),B("design:type",Number)],C.prototype,"loggedUserId",void 0),I([(0,c.property)({type:Number}),B("design:type",Number)],C.prototype,"formId",void 0),I([(0,c.property)({type:Boolean}),B("design:type",Boolean)],C.prototype,"allowFetch",void 0),I([(0,c.property)({type:Boolean}),B("design:type",Boolean)],C.prototype,"recurring",void 0),I([(0,c.property)({type:String}),B("design:type",String)],C.prototype,"openContentBaseUrl",void 0),I([(0,c.property)({type:String}),B("design:type",String)],C.prototype,"openMeetingEventBaseUrl",void 0),I([(0,c.property)({type:Array}),B("design:type",Array)],C.prototype,"_pageAccesses",void 0),I([(0,c.property)({type:Array}),B("design:type",Array)],C.prototype,"_activeBranchId",void 0),I([(0,c.property)({type:Array}),B("design:type",Array)],C.prototype,"_userLoginInfo",void 0),C=I([(0,c.customElement)("pdb-attendance-clocking-meeting-picker"),B("design:paramtypes",[])],C)},3629:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipSelectMemberType:()=>u}),n(6660);var i,a,r=n(5862),l=n(9662),s=n(72),o=(n(5866),function(e,t,n,i){var a,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(l=(r<3?a(l):r>3?a(t,n,l):a(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function l(e){try{o(i.next(e))}catch(e){r(e)}}function s(e){try{o(i.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}o((i=i.apply(e,t||[])).next())}))};let u=class extends r.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.defaultValues=[],this.setDefaultValues=null,this.selectedCategory=null,this.multiple=!1,this.required=!1,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),setTimeout((()=>{Array.isArray(this.setDefaultValues)||(this.setDefaultValues=[]),null!==this.defaultValue&&(this.setDefaultValues.includes(this.defaultValue)||this.setDefaultValues.push(this.defaultValue)),this.defaultValues.forEach((e=>{this.setDefaultValues.includes(e)||this.setDefaultValues.push(e)}))}),100),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?r.html`
        ${this.materialSelectField}
      `:r.html`
        ${this.selectInputField}
      `}get materialSelectField(){var e;return(null===(e=this.setDefaultValues)||void 0===e?void 0:e.length)<1?r.html`
        <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
          <mwc-list-item value="0">${this.label}</mwc-list-item>
          ${this._memberCategories.map((e=>r.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
        </mwc-select>
      `:r.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((n=>{n===e.id&&(t=!0)})),t?r.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:r.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`}))}
      </mwc-select>
    `}get selectInputField(){let e=[{id:0,name:this.label,isSelected:"false",selected:!1}];this._memberCategories.forEach((t=>{let n=!1;this.setDefaultValues.forEach((e=>{e===t.id&&(n=!0)}));let i=!1,a="false";n&&(i=!0,a="true");const r={id:t.id,name:t.category,isSelected:a,selected:i};e.includes(r)||e.push(r)}));let t=r.html`
      <select-input name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}"
        .options="${e}" outlined ?required="${this.required}" ?multiple="${this.multiple}">
      </select-input>
    `;return r.html`${t}`}get selectField(){let e=r.html``;return e=this.setDefaultValues.length<1?r.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>r.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `:r.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((n=>{n===e.id&&(t=!0)})),t?r.html`<option value="${e.id}" selected>${e.category}</option>`:r.html`<option value="${e.id}">${e.category}</option>`}))}
        </select>
      `,r.html`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return d(this,void 0,void 0,(function*(){const e=yield(0,s.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};u.styles=[r.css`
   :host { display: block; }
  `],o([(0,l.property)({type:String}),c("design:type",String)],u.prototype,"material",void 0),o([(0,l.property)({type:Number}),c("design:type",Number)],u.prototype,"defaultValue",void 0),o([(0,l.property)({type:Array}),c("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],u.prototype,"defaultValues",void 0),o([(0,l.property)({type:Array}),c("design:type","function"==typeof(a="undefined"!=typeof Array&&Array)?a:Object)],u.prototype,"setDefaultValues",void 0),o([(0,l.property)({type:Number}),c("design:type",Number)],u.prototype,"selectedCategory",void 0),o([(0,l.property)({type:Boolean}),c("design:type",Boolean)],u.prototype,"multiple",void 0),o([(0,l.property)({type:Boolean}),c("design:type",Boolean)],u.prototype,"required",void 0),o([(0,l.property)({type:String}),c("design:type",String)],u.prototype,"label",void 0),o([(0,l.property)({type:String}),c("design:type",String)],u.prototype,"name",void 0),o([(0,l.property)({type:String}),c("design:type",String)],u.prototype,"id",void 0),o([(0,l.property)({type:String}),c("design:type",String)],u.prototype,"tag_class",void 0),o([(0,l.property)({type:String}),c("design:type",String)],u.prototype,"css_style",void 0),o([(0,l.property)({type:Array}),c("design:type",Array)],u.prototype,"_memberCategories",void 0),u=o([(0,l.customElement)("pdb-membership-select-member-type"),c("design:paramtypes",[])],u)}}]);
//# sourceMappingURL=src_addons_classes_filter_field_box_index_ts-src_addons_functions_https_download_ts-src_addon-a52831.js.map