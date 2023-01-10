"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-break"],{5501:(e,t,n)=>{n.r(t)},2831:(e,t,n)=>{n.r(t),n.d(t,{getLocalTime:()=>s,getTime:()=>r});const r=e=>{const t=new Date,n=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(n)},s=(e,t)=>(console.log({time:e}),void 0===e?"-":e.toLocaleTimeString("en-US",t))},8729:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleBreak:()=>u});var r=n(6455),s=n.n(r),o=n(8485),i=n(7270),a=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break/"+e,r={};return s().fire({title:"Remove Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new a.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},706:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleBreak:()=>a});var r=n(8485),s=n(7270),o=n(4492),i=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,i.getUserLoginInfoCookie)(),a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function s(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,s)}o((l=l.apply(n,a||[])).next())}));var n,a,c,l}},3444:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleBreak:()=>u});var r=n(6455),s=n.n(r),o=n(8485),i=n(7270),a=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break",n=document.querySelector('[make-general-posts="add-schedule-break"]'),r=new FormData(n);return s().fire({title:"Setup Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,c.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const s=new a.NetWorkCallResponses("post",r,!0,n);return s.postForm,s}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>a});var r=n(8485),s=n(7270),o=n(4492),i=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,i.getUserLoginInfoCookie)(),a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function s(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,s)}o((l=l.apply(n,a||[])).next())}));var n,a,c,l}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>c});var r=n(5862),s=n(9662),o=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};let c=class extends r.LitElement{constructor(){super(),this.index=0,this._widget=r.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return r.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?r.nothing:r.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};o([(0,s.property)({type:Number}),i("design:type",Number)],c.prototype,"index",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"no_delete",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"single",void 0),o([(0,s.property)({type:String}),i("design:type",String)],c.prototype,"_single",void 0),c=o([(0,s.customElement)("multiple-widgets"),i("design:paramtypes",[])],c)},8951:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditBreak:()=>h}),n(3076),n(3683),n(4657);var r=n(4108),s=n(5862),o=n(9662),i=(n(6723),n(8693),n(7712)),a=n(1354),c=n(1302),l=n(7108),d=function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,r){function i(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,a)}c((o=o.apply(t,n||[])).next())}));var t,n,s,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(l.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-break CLIENT_ID="${this.clientId}"></attendance-setup-form-break>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,o.property)({type:String}),u("design:type",String)],h.prototype,"email",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],h.prototype,"mId",void 0),d([(0,o.property)({type:Number}),u("design:type",Number)],h.prototype,"clientId",void 0),d([(0,o.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_hasSetup",void 0),d([(0,o.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_pageButtonAccess",void 0),h=d([(0,o.customElement)("attendance-setup-form-edit-break"),u("design:paramtypes",[])],h)},6723:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormBreak:()=>b}),n(5501);var r,s,o=n(5862),i=n(9662),a=(n(3283),n(1511),n(3690),n(1854),n(9068)),c=n(2831),l=n(706),d=n(2218),u=n(4672),h=n(8729),p=n(6262),m=(n(5866),n(3444)),f=n(3600),_=function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};let b=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__breakUser=null,this.__schedule=null,this.__scheduleBreaks=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _breakUser(e){this.__breakUser=e,this.requestUpdate()}get _breakUser(){return this.__breakUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return o.html`${this.schedule}`}get schedule(){return null===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?o.html`${this.scheduleBreak}`:o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleBreak(){return null===this._scheduleBreaks?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleBreaks?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Break</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return o.html`${this.table}`}get table(){return this._scheduleBreaks.results.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Break">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Time
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Time
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
                ${this.getMeetingAttendanceBreaks}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceBreaks(){return o.html`
      ${this._scheduleBreaks.results.map((e=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${(0,c.getTime)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,c.getTime)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceBreak}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return o.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Break</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Break!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-break">
                <div class="p-0 m-0" show-breakField="all">
                  ${this.breakFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Break" raised class="button" @click="${this.submitForm}">
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
    `}get breakField(){return(0,f.getUserLoginInfoCookie)().token,o.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Start Time</h4> 
            <mwc-textfield name="startBreak" type="time" class="w-full" id="startBreak" label="Select Start Time" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Time</h4> 
            <mwc-textfield name="endBreak" type="time" class="w-full" id="endBreak" label="Select End Time" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}breakFieldDefault(e){return o.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.breakField}
        breakField-id="${e}" no_delete></multiple-widgets>
    `}addBreakField(){const e=this.showBreakFieldAllSelector.children.length,t=(0===e?-1:Number(this.showBreakFieldAllSelector.children[e-1].getAttribute("breakField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("breakField-id",String(t)),this.showBreakFieldAllSelector.append(n);const r=this.showBreakFieldAllSelector.querySelectorAll('multiple-widgets[breakField-id="'+t+'"]'),s=this.breakField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}getBreakUsers(){return g(this,void 0,void 0,(function*(){const e=yield(0,p.GET_ClientUsers)();this._breakUser=null===e?void 0:e.paginResponse}))}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.POST_AttendanceAddScheduleBreak)()}))}deleteQuestionnaireMeetingAttendanceBreak(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.DELETE_AttendanceDeleteScheduleBreak)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,r=e.results,s=document.querySelector('[id="breakId"]');let o=[];if(n>0){var i=r;for(let e=0;e<i.length;e++){const t=i[e],n={id:t.id,text:t.firstname+" "+t.surname};o.includes(n)||o.push(n)}}return{results:o,total:n,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return g(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleBreak(){return g(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleBreak)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};b.styles=[o.css`
   :host { display: block; }
  `],_([(0,i.property)({type:Number}),v("design:type",Number)],b.prototype,"CLIENT_ID",void 0),_([(0,i.property)({type:Number}),v("design:type",Number)],b.prototype,"startSearchPage",void 0),_([(0,i.property)({type:Array}),v("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],b.prototype,"_data",void 0),_([(0,i.property)({type:Object}),v("design:type",Object)],b.prototype,"urlQueryParams",void 0),_([(0,i.property)({type:Number}),v("design:type",Number)],b.prototype,"meetingEventId",void 0),_([(0,i.query)('[show-breakField="all"]'),v("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],b.prototype,"showBreakFieldAllSelector",void 0),b=_([(0,i.customElement)("attendance-setup-form-break"),v("design:paramtypes",[])],b)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-5cb5c5","shared"],(()=>(8951,e(e.s=8951)))),e.O())])));
//# sourceMappingURL=edit-break.js.map