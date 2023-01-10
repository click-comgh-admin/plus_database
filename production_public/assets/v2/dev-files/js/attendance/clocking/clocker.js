"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/clocking/clocker"],{2388:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AttendanceMultipleClockingBreak:()=>u});var i=n(6455),o=n.n(i),l=n(8485),s=n(7270),r=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function s(e){try{c(i.next(e))}catch(e){l(e)}}function r(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};function u(e,t,n,i,u){return d(this,void 0,void 0,(function*(){const m=(0,a.getUserLoginInfoCookie)();let p=0;u.forEach((e=>{e.name===n&&(p=e.id)}));const g=l.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/bulk-clocking/"+e,f={clockingType:p,clockingIds:i};return o().fire({title:`${t} multiple action?`,icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(g,{method:"PATCH",body:JSON.stringify(f),headers:{Authorization:"Token "+m.token}},!0).then((e=>{const t=new r.NetWorkCallResponses("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))}))}},596:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceClockingUpdateClockingList:()=>u});var i=n(6455),o=n.n(i),l=n(8485),s=n(7270),r=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function s(e){try{c(i.next(e))}catch(e){l(e)}}function r(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};function u(e,t){return d(this,void 0,void 0,(function*(){const n=(0,a.getUserLoginInfoCookie)(),i=l.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance/reset-clocking-list/"+e,u={time:t};return o().fire({title:"Update Clocking List?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return o().fire({title:"Update Clocking List?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(i,{method:"POST",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0,!1).then((e=>{const t=new r.NetWorkCallResponses("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let i={error:t.id+": "+n};"non_field_errors"===t.id&&(i={error:n}),e.push(i)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(o().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500))}}))})),allowOutsideClick:()=>!o().isLoading()})}))}},5234:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingClocker:()=>F}),n(3794);var i,o,l,s=n(5862),r=n(9662),c=n(3283),a=(n(789),n(3313),n(6883),n(367),n(3683),n(4657),n(7725)),d=(n(3690),n(7052)),u=n(8485),m=n(3600),p=n(4672),g=n(7553),f=n(2869),h=n(2368),_=(n(997),n(72)),b=n(7325),v=n(596),k=n(2388),y=n(4115),w=n(5069),C=n(2892),S=(n(3629),n(4843)),x=n(8881),T=n(3437),$=n(660),B=n(8786),A=n(9605),E=(n(7546),n(7601)),I=(n(3961),n(7712)),G=n(1354),N=n(1302),O=n(7108),L=function(e,t,n,i){var o,l=arguments.length,s=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(l<3?o(s):l>3?o(t,n,s):o(t,n))||s);return l>3&&s&&Object.defineProperty(t,n,s),s},M=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e,t,n,i){return new(n||(n=Promise))((function(o,l){function s(e){try{c(i.next(e))}catch(e){l(e)}}function r(e){try{c(i.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};let F=class extends s.LitElement{constructor(){super(),this.meetingEventId=0,this.meetingEventIdEnc=null,this.datatablePathUrl="attendance/meeting-event/attendance",this._genders=[],this._clockingTypes=[],this._memberCategories=[],this._scheduleGroups=[],this._scheduleSubGroups=[],this._activeBranchId=null,this._memberType=1,this.clockingTimeValue="",this.clockingTime=!1,this.meetingEventForToday=!1,this.__members=null,this._hasSetup=!1,this._pageButtonAccess=!1}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return P(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,I.AppSetup)().then((()=>this._hasSetup=!0)),this.getMeetingEventId();const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders(),yield this.getClockingType(),yield this.getClientMemberCategories(),yield this.getAttendanceScheduleGroup(),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,G.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,N.PageButtonUserAccess)(O.PAGE__IDS.clocking),!(0,N.AppSettingsExtraUserAccess)({pageId:O.PAGE__IDS.clocking,viewType:"Both"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return 0===this.meetingEventId||null===this.meetingEventId||Number.isNaN(this.meetingEventId)?s.html`
        <div class="shadow bg-white p-2">
          <pdb-attendance-clocking-meeting-picker
            openContentBaseUrl="/clocking/clocker?meeting-event-id=">
          </pdb-attendance-clocking-meeting-picker>
        </div>
      `:s.html`
        <div class="shadow bg-white p-2">
          <span class="flex flex-row md:flex-col w-100"></span>
          <div class="block my-1">
            <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
              filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
            </mwc-button>
          </div>
          <div class="block my-1">
            ${this.filterForm}
          </div>
          <div class="block my-1 overflow-x-scroll">
            <hr class="my-2"/>
            <div class="my-2 flex flex-col items-end">
              <div class="col-md-6 col-lg-4 flex flex-col items-end">
                <h4 class="font-semibold my-2 capitalize">Override Clocking Time</h4>
                <switch-input class="capitalize" ?isSelected="${this.clockingTime}" name="clockingTimeSwitchAction"
                  label="Override Clocking Time"></switch-input>
              </div>
              <hr />
            </div>
            ${this.clockingTimeField}
            ${this.table}
          </div>
        </div>
      `}get clockingTimeField(){return this.clockingTime?s.html`
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2">Select Date</h4>
            <mwc-textfield name="setClockingTimeBtn" type="datetime-local" step="1" class="w-full" label="Select Clocking Time"
              value="${this.clockingTimeValue}" outlined required>
            </mwc-textfield><br>
            <mwc-button raised label="Set Clocking Time" @click="${this.setClockingTimeBtn}"></mwc-button>
          </div>
        </div>
      `:s.nothing}get resetClockingList(){return s.html`
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <mwc-button raised label="Refresh Clocking List" class="success" @click="${this.UpdateClockingList}"></mwc-button>
          </div>
        </div>
      `}setClockingTimeBtn(e){document.querySelectorAll('mwc-textfield[name="setClockingTimeBtn"]').forEach((e=>{this.clockingTimeValue=e.value}))}clockingTimeSwitchAction(){const e=this;document.querySelectorAll('[name="clockingTimeSwitchAction"]').forEach((t=>{t.addEventListener("click",(n=>{e.clockingTime=t.isSelected}))}))}firstUpdated(){this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"meeting-event-id",value:this.meetingEventIdEnc}]}),this.clockingTimeSwitchAction(),setInterval((()=>(0,E.setClockingTimeInfo)(this.clockingTime,this.clockingTimeValue)))}getMeetingEventId(){let e=(0,p.urlQueryParamsGet)("meeting-event-id"),t=null!==e?(0,d.base64Decode)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t),this.meetingEventIdEnc=(0,d.base64Encode)(String(this.meetingEventId),!0)}get filterForm(){let e=s.html``;const t=(0,p.urlQueryParams)(),n="filter_date",i="filter_gender",o="filter_name",l="filter_identity",r="filter_member_category",c="filter_group",a="filter_subgroup",d="filter_from_age",u="filter_to_age";let m=null,g=null,f=null,h=null,_=null,b=null,v=null,k=null,y=null;for(const e in t){let s=String(t[e]);if(s=""===s?null:s,e===n)if(null===s)m="";else{const e=new Date(s).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");m=[e[2],e[0],e[1]].join("-")}e===i&&(g=s),e===o&&(f=s),e===l&&(h=s),e===r&&(_=Number(s)),e===c&&(b=Number(s)),e===a&&(v=Number(s)),e===d&&(k=Number(s)),e===u&&(y=Number(s))}const w=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${o}" id="${o}" label="Search By Name" 
            value="${null===f?"":f}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,C=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Filter Age In Years
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${d}" id="${d}" label="Pick From Age" 
              value="${null===k?"":k}" class="mx-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${u}" id="${u}" label="Pick To Age" 
              value="${null===y?"":y}" class="mx-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,S=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Member Category
          <pdb-membership-select-member-type defaultValue="${_}" 
            name="${r}" id="${r}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,T=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Pick Date
          <mwc-textfield type="date" name="${n}" id="${n}"
            value="${m}" outlined required></mwc-textfield>
        </div>
      </div>`,$=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${i}" id="${i}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===g?s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(g)===e.id?s.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,B=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Group
          <mwc-select name="${c}" id="${c}" label="Select Meeting/ Event Group" outlined required>
            ${this._scheduleGroups.map((e=>{const t=e.groupId,n=(0,x.until)(this.getGroup(t),s.html`<span>Loading...</span>`);return null===b?s.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(b)===t?s.html`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:s.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,A=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Meeting/ Event Sub-Group
          <mwc-select name="${a}" id="${a}" label="Select Meeting/ Event Sub-Group" outlined required>
            ${this._scheduleSubGroups.map((e=>{const t=e.subGroupId,n=(0,x.until)(this.getSubGroup(t),s.html`<span>Loading...</span>`);return null===v?s.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`:Number(v)===t?s.html`<mwc-list-item value="${t}" selected>${n}</mwc-list-item>`:s.html`<mwc-list-item value="${t}">${n}</mwc-list-item>`}))}
          </mwc-select>
        </div>
      </div>`,E=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Member ID
          <mwc-textfield name="${l}" id="${l}" label="Search By Member ID"
            value="${null===h?"":h}" outlined required>
          </mwc-textfield>
        </div>
      </div>`;return e=s.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${S} ${w} ${$} ${C} ${E} ${B} ${A} ${T}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="meeting-event-id" value="${this.meetingEventIdEnc}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}get __tableHeaders(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Clock In"},{title:"Clock Out"}]}get table(){const e=this._memberType;let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);let n=u.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?branchId="+t+"&meetingEventId="+this.meetingEventId+"&memberType="+e+"&order__by=firstname&datatable_plugin";n+=this.urlQueryString;const i=this.__dataTable(n);let o={};const l=(0,m.getUserLoginInfoCookie)();return o.Authorization="Token "+l.token,s.html`
      ${this._pageButtonAccess?this.resetClockingList:s.nothing}
      <form>
        <div class="my-1 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-row-reverse my-1 items-end">
            <button type="submit" class="btn btn-sm btn-outline-danger !mx-1" multi-break-clocking="outTime">Clock Out Selected</button>
            <button type="submit" class="btn btn-sm btn-outline-success !mx-1" multi-break-clocking="inTime">Clock In Selected</button>
          </div>
          <div class="col-md-6 col-lg-4 flex flex-row-reverse my-1 items-end">
            <button type="submit" class="btn btn-sm btn-outline-danger !mx-1" multi-break-clocking="endBreak">End Break For Selected</button>
            <button type="submit" class="btn btn-sm btn-outline-success !mx-1" multi-break-clocking="startBreak">Start Break For Selected</button>
          </div>
        </div>
        <datatables-new .datatable="${i}" .ajaxHeader="${o}" .dt_body="${this.__tableBody}"
          .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
      </form>
    `}renderMemberInfo(e,t,n){const i=(0,b.MemberClockingInfo_S)(n),o=new Date;return this.meetingEventForToday=i.date.toDateString()===o.toDateString(),`<clocker-table-parts-first data="${e}" type="${t}" clocking_info='${JSON.stringify(i).replaceAll("'","&rsquo;")}' ></clocker-table-parts-first>`}renderClockInInfo(e,t,n){return console.log({"--this._pageButtonAccess--":this._pageButtonAccess}),this._pageButtonAccess?`<clocker-table-parts-second clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}'\n          ?clockingtime="${this.clockingTime}" pageButtonAccess clockingTimeValue="${this.clockingTimeValue}" >\n        </clocker-table-parts-second>`:`<clocker-table-parts-second clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}'\n          ?clockingtime="${this.clockingTime}" clockingTimeValue="${this.clockingTimeValue}" >\n        </clocker-table-parts-second>`}renderClockOutInfo(e,t,n){return this._pageButtonAccess?`<clocker-table-parts-third clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}'\n        ?clockingtime="${this.clockingTime}" pageButtonAccess clockingTimeValue="${this.clockingTimeValue}" >\n      </clocker-table-parts-third>`:`<clocker-table-parts-third clocking data="${e}" type="${t}" clocking_info='${JSON.stringify(n).replaceAll("'","&rsquo;")}'\n        ?clockingtime="${this.clockingTime}" clockingTimeValue="${this.clockingTimeValue}" >\n      </clocker-table-parts-third>`}multiBreakClocking(){const e="multi-break-clocking";document.querySelectorAll("["+e+"]").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),this.multiBreakClockingSubmit(t,e,n)}))}))}multiBreakClockingSubmit(e,t,n){return P(this,void 0,void 0,(function*(){n.preventDefault();const i=e.getAttribute(t),o=document.querySelectorAll('input[type="checkbox"][multi-break-check-in]'),l=document.querySelectorAll('input[type="checkbox"][multi-break-check-out]');let s=[],r=[];if(o.forEach((e=>{if(e.checked){const t=Number(e.getAttribute("multi-break-check-in"));s.includes(t)||s.push(t)}})),l.forEach((e=>{if(e.checked){const t=Number(e.getAttribute("multi-break-check-out"));r.includes(t)||r.push(t)}})),"inTime"===i||"startBreak"===i){let e="Initiate";"inTime"===i&&(e="Clock In"),"startBreak"===i&&(e="Start Break"),yield(0,k.PATCH_AttendanceMultipleClockingBreak)(this.meetingEventId,e,i,s,this._clockingTypes)}else if("outTime"===i||"endBreak"===i){let e="Initiate";"outTime"===i&&(e="Clock Out"),"endBreak"===i&&(e="End Break"),yield(0,k.PATCH_AttendanceMultipleClockingBreak)(this.meetingEventId,e,i,r,this._clockingTypes)}}))}UpdateClockingList(e){return P(this,void 0,void 0,(function*(){e.preventDefault();let t=new Date,n=t.toLocaleString("default",{year:"numeric"})+"-"+t.toLocaleString("default",{month:"2-digit"})+"-"+t.toLocaleString("default",{day:"2-digit"});const i=(0,p.urlQueryParams)();for(const e in i){let t=String(i[e]);"filter_date"===e&&(n=t)}yield(0,v.POST_AttendanceClockingUpdateClockingList)(this.meetingEventId,n)}))}get urlQueryString(){const e=(0,p.urlQueryParams)();let t={};for(const n in e){let i=String(e[n]);"filter_date"!==n&&"filter_gender"!==n&&"filter_name"!==n&&"filter_identity"!==n&&"filter_member_category"!==n&&"filter_group"!==n&&"filter_subgroup"!==n&&"filter_from_age"!==n&&"filter_to_age"!==n||(t[n]=i)}let n=(0,p.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}getGenders(){return P(this,void 0,void 0,(function*(){const e=yield(0,g.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,f.GenericGenderInfo_S)(e))));const n=[];n.push(...this._genders,...t),this._genders=n}))}getClockingType(){return P(this,void 0,void 0,(function*(){const e=yield(0,y.GET_GenericMeetingEventClockingType)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,w.GenericMeetingEventClockingTypeInfo_S)(e))));const n=[];n.push(...this._clockingTypes,...t),this._clockingTypes=n}))}getAttendanceScheduleGroup(){return P(this,void 0,void 0,(function*(){if(0===this.meetingEventId)return;const e=yield(0,S.GET_AttendanceScheduleGroup)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleGroups=t.results)}}))}getGroup(e){return P(this,void 0,void 0,(function*(){const t=yield(0,C.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?(0,T.GroupingsGroup_S)(t.response.data).group:t.response.message}))}getAttendanceScheduleSubGroup(){return P(this,void 0,void 0,(function*(){if(0===this.meetingEventId)return;const e=yield(0,B.GET_AttendanceScheduleSubGroup)(null,"?meetingEventId="+this.meetingEventId);if(null!==e){const t=e.paginResponse;t.results.length>0&&(this._scheduleSubGroups=t.results)}}))}getSubGroup(e){return P(this,void 0,void 0,(function*(){const t=yield(0,A.GET_MemberGroupingsSubGroups)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?(0,$.GroupingsSubGroup_S)(t.response.data).subgroup:t.response.message}))}getClientMemberCategories(){return P(this,void 0,void 0,(function*(){const e=yield(0,_.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,i)=>t.renderMemberInfo(e,n,i),orderable:!0},{data:"inTime",render:(e,n,i)=>t.renderClockInInfo(e,n,i),orderable:!0},{data:"outTime",render:(e,n,i)=>t.renderClockOutInfo(e,n,i),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return P(this,void 0,void 0,(function*(){e.aoData,t.multiBreakClocking()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};F.styles=[s.css`
   :host { display: block; }
  `],L([(0,r.query)('[filter-section-context="btn"]'),M("design:type","function"==typeof(i=void 0!==c.Button&&c.Button)?i:Object)],F.prototype,"filterSectionContextBtn",void 0),L([(0,r.query)('[filter-section-context="container"]'),M("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],F.prototype,"filterSectionContextContainer",void 0),L([(0,r.query)('[make-general-posts="submit_filter_form"]'),M("design:type","function"==typeof(l="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?l:Object)],F.prototype,"filterSectionContextForm",void 0),L([(0,r.property)({type:Number}),M("design:type",Number)],F.prototype,"meetingEventId",void 0),L([(0,r.property)({type:String}),M("design:type",String)],F.prototype,"meetingEventIdEnc",void 0),L([(0,r.property)({type:String}),M("design:type",String)],F.prototype,"datatablePathUrl",void 0),L([(0,r.property)({type:Array}),M("design:type",Array)],F.prototype,"_genders",void 0),L([(0,r.property)({type:Array}),M("design:type",Array)],F.prototype,"_clockingTypes",void 0),L([(0,r.property)({type:Array}),M("design:type",Array)],F.prototype,"_memberCategories",void 0),L([(0,r.property)({type:Array}),M("design:type",Array)],F.prototype,"_scheduleGroups",void 0),L([(0,r.property)({type:Array}),M("design:type",Array)],F.prototype,"_scheduleSubGroups",void 0),L([(0,r.property)({type:Array}),M("design:type",Array)],F.prototype,"_activeBranchId",void 0),L([(0,r.property)({type:Number}),M("design:type",Number)],F.prototype,"_memberType",void 0),L([(0,r.property)({type:String}),M("design:type",String)],F.prototype,"clockingTimeValue",void 0),L([(0,r.property)({type:Boolean}),M("design:type",Boolean)],F.prototype,"clockingTime",void 0),L([(0,r.property)({type:Boolean}),M("design:type",Boolean)],F.prototype,"meetingEventForToday",void 0),L([(0,r.property)({type:Boolean}),M("design:type",Boolean)],F.prototype,"_hasSetup",void 0),L([(0,r.property)({type:Boolean}),M("design:type",Boolean)],F.prototype,"_pageButtonAccess",void 0),F=L([(0,r.customElement)("pdb-attendance-clocking-clocker"),M("design:paramtypes",[])],F)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts","src_assets_styles_views_attendance_clocking_main_scss","src_assets_styles_views_datatable_main_scss-src_assets_styles_views_home_dashboard_scss","src_assets_styles_views_attendance_clocking_main_scss-src_addons_functions_url_query_params_i-94fb2f","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_orga-82d0e9","src_addons_classes_filter_field_box_index_ts-src_addons_interfaces_generic_gender_index_ts-sr-134f77","src_view_attendance_clocking_clocker_table_parts_first_ts-src_view_attendance_clocking_clocke-d561af","shared"],(()=>(5234,e(e.s=5234)))),e.O())])));
//# sourceMappingURL=clocker.js.map