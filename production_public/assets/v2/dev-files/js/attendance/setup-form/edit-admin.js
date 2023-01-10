"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-admin"],{5501:(e,t,n)=>{n.r(t)},3471:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleAdmin:()=>u});var s=n(6455),i=n.n(s),r=n(8485),o=n(7270),a=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin/"+e,s={};return i().fire({title:"Remove Admin?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new a.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},4331:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleAdmin:()=>a});var s=n(8485),i=n(7270),r=n(4492),o=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin"+(null===e?"":"/"+e)+t,c=yield(0,i.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{r(l.next(e))}catch(e){t(e)}}function i(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,i)}r((l=l.apply(n,a||[])).next())}));var n,a,c,l}},6435:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleAdmin:()=>u});var s=n(6455),i=n.n(s),r=n(8485),o=n(7270),a=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin",n=document.querySelector('[make-general-posts="add-schedule-admin"]'),s=new FormData(n);return i().fire({title:"Setup Admin?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let s=e;s.error=t;const i=new a.NetWorkCallResponses("post",s,!0,n);return i.postForm,i}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object&&null!==n.response){const e=n.response;t=String(e.message)}n instanceof Object&&null!==n.response&&(i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n.response.success&&setTimeout((()=>{window.location.reload()}),500))}}))}))}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>a});var s=n(8485),i=n(7270),r=n(4492),o=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,c=yield(0,i.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function s(e){try{r(l.next(e))}catch(e){t(e)}}function i(e){try{r(l.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,i)}r((l=l.apply(n,a||[])).next())}));var n,a,c,l}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>c});var s=n(5862),i=n(9662),r=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};let c=class extends s.LitElement{constructor(){super(),this.index=0,this._widget=s.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return s.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?s.nothing:s.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};r([(0,i.property)({type:Number}),o("design:type",Number)],c.prototype,"index",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"no_delete",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"single",void 0),r([(0,i.property)({type:String}),o("design:type",String)],c.prototype,"_single",void 0),c=r([(0,i.customElement)("multiple-widgets"),o("design:paramtypes",[])],c)},5048:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAdmin:()=>m}),n(3076),n(3683),n(4657);var s=n(4108),i=n(5862),r=n(9662),o=(n(452),n(8693),n(7712)),a=n(1354),c=n(1302),l=n(7108),d=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),(0,o.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,a)}c((r=r.apply(t,n||[])).next())}));var t,n,i,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(l.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-admin CLIENT_ID="${this.clientId}"></attendance-setup-form-admin>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,r.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),d([(0,r.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),d([(0,r.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),d([(0,r.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),d([(0,r.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_pageButtonAccess",void 0),m=d([(0,r.customElement)("attendance-setup-form-edit-admin"),u("design:paramtypes",[])],m)},452:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAdmin:()=>b}),n(5501);var s,i,r=n(5862),o=n(9662),a=n(8881),c=(n(3283),n(1511),n(3690),n(1854),n(9068)),l=n(4331),d=n(2218),u=n(4672),m=n(3471),h=n(6262),p=(n(5866),n(8485)),f=n(6435),_=n(3600),v=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function a(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((s=s.apply(e,t||[])).next())}))};let b=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__adminUser=null,this.__schedule=null,this.__scheduleAdmins=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _adminUser(e){this.__adminUser=e,this.requestUpdate()}get _adminUser(){return this.__adminUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAdmins(e){this.__scheduleAdmins=e,this.requestUpdate()}get _scheduleAdmins(){return this.__scheduleAdmins}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAdmin()}))}disconnectedCallback(){}render(){return r.html`${this.schedule}`}get schedule(){return null===this._schedule?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?r.html`${this.scheduleAdmin}`:r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAdmin(){return null===this._scheduleAdmins?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAdmins?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Admin</span>: undefined error</h4>
          </div>
        </div>
      `:r.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.html`${this.table}`}get table(){return this._scheduleAdmins.results.length>0?r.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Admin">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Admin
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Editor
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Agenda Editor
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Clocking Admin
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
                ${this.getMeetingAttendanceAdmins}
              </tbody>
            </table>
          </div>
        </div>
      `:r.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAdmins(){return r.html`
      ${this._scheduleAdmins.results.map((e=>r.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,a.until)(this.getAdminUser(e.adminId),r.html`<span>Loading...</span>`)}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.meetingEditor?r.html`<mwc-icon class="text-green-600">check</mwc-icon>`:r.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.agendaEditor?r.html`<mwc-icon class="text-green-600">check</mwc-icon>`:r.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.clockingAdmin?r.html`<mwc-icon class="text-green-600">check</mwc-icon>`:r.html`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAdmin}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Admin</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Admin!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-admin">
                <div class="p-0 m-0" show-adminField="all">
                  ${this.adminFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Admin" raised class="button" @click="${this.submitForm}">
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
    `}get adminField(){let e={};const t=(0,_.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,r.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Admin User</h4>
            <select-input class="w-100" id="adminId" name="adminId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${p.CONSTANTS.URLS.AKWAABA_API_BASE_URL}clients/user/search"></select-input>
          </div><div class="col-md-12 col-lg-12"></div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Meeting Editor?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="meetingEditor" id="meetingEditor" label="Is Meeting Editor?"></switch-input>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Agenda Editor?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="agendaEditor" id="agendaEditor" label="Is Agenda Editor?"></switch-input>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 py-1">
            <h4 class="font-semibold mt-2">Is Clocking Admin?</h4>
            <div class="form-input-container mt-1">
              <switch-input class="w-full" name="clockingAdmin" id="clockingAdmin" label="Is Clocking Admin?"></switch-input>
            </div>
          </div>
        </div>
      </div>
    `}adminFieldDefault(e){return r.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.adminField}
        adminField-id="${e}" no_delete></multiple-widgets>
    `}addAdminField(){const e=this.showAdminFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAdminFieldAllSelector.children[e-1].getAttribute("adminField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("adminField-id",String(t)),this.showAdminFieldAllSelector.append(n);const s=this.showAdminFieldAllSelector.querySelectorAll('multiple-widgets[adminField-id="'+t+'"]'),i=this.adminField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new c.MDCDataTable(e)}))}getAdminUsers(){return y(this,void 0,void 0,(function*(){const e=yield(0,h.GET_ClientUsers)();this._adminUser=null===e?void 0:e.paginResponse}))}getAdminUser(e){return y(this,void 0,void 0,(function*(){const t=yield(0,h.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return y(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,f.POST_AttendanceAddScheduleAdmin)()}))}deleteQuestionnaireMeetingAttendanceAdmin(e){return y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,m.DELETE_AttendanceDeleteScheduleAdmin)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,s=e.results,i=document.querySelector('[id="adminId"]');let r=[];if(n>0){var o=s;for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.firstname+" "+t.surname};r.includes(n)||r.push(n)}}return{results:r,total:n,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return y(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAdmin(){return y(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleAdmin)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleAdmins=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};b.styles=[r.css`
   :host { display: block; }
  `],v([(0,o.property)({type:Number}),g("design:type",Number)],b.prototype,"CLIENT_ID",void 0),v([(0,o.property)({type:Number}),g("design:type",Number)],b.prototype,"startSearchPage",void 0),v([(0,o.property)({type:Array}),g("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],b.prototype,"_data",void 0),v([(0,o.property)({type:Object}),g("design:type",Object)],b.prototype,"urlQueryParams",void 0),v([(0,o.property)({type:Number}),g("design:type",Number)],b.prototype,"meetingEventId",void 0),v([(0,o.query)('[show-adminField="all"]'),g("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],b.prototype,"showAdminFieldAllSelector",void 0),b=v([(0,o.customElement)("attendance-setup-form-admin"),g("design:paramtypes",[])],b)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-5cb5c5","shared"],(()=>(5048,e(e.s=5048)))),e.O())])));
//# sourceMappingURL=edit-admin.js.map