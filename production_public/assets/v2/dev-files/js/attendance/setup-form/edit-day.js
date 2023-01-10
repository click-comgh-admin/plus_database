"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-day"],{1243:(e,t,n)=>{n.r(t)},5501:(e,t,n)=>{n.r(t)},4947:(e,t,n)=>{n.r(t),n.d(t,{getDate:()=>s});const s=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},1148:(e,t,n)=>{n.r(t),n.d(t,{GET_DayOfWeek:()=>a});var s=n(8485),i=n(7270),r=n(4492),o=n(3600);function a(e=null){return t=this,n=void 0,l=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),a=yield(0,i.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,s){function i(e){try{o(l.next(e))}catch(e){s(e)}}function r(e){try{o(l.throw(e))}catch(e){s(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,r)}o((l=l.apply(t,n||[])).next())}));var t,n,a,l}},963:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleDay:()=>u});var s=n(6455),i=n.n(s),r=n(8485),o=n(7270),a=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{l(s.next(e))}catch(e){r(e)}}function a(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day/"+e,s={};return i().fire({title:"Remove Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(n,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const s=new a.NetWorkCallResponses("delete",n,!0);return s.postForm,s}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},7824:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleDay:()=>a});var s=n(8485),i=n(7270),r=n(4492),o=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,l=yield(0,i.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{r(c.next(e))}catch(e){t(e)}}function i(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(s,i)}r((c=c.apply(n,a||[])).next())}));var n,a,l,c}},5134:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleDay:()=>u});var s=n(6455),i=n.n(s),r=n(8485),o=n(7270),a=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{l(s.next(e))}catch(e){r(e)}}function a(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day",n=document.querySelector('[make-general-posts="add-schedule-day"]'),s=new FormData(n);return i().fire({title:"Setup Day?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let s=e;s.error=t;const i=new a.NetWorkCallResponses("post",s,!0,n);return i.postForm,i}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success";const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message)}i().fire({title:t,icon:"success",iconColor:"#f97817",confirmButtonColor:"#f97817"}),setTimeout((()=>{window.location.reload()}),500)}}))}))}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>l});var s=n(5862),i=n(9662),r=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{l(s.next(e))}catch(e){r(e)}}function a(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};let l=class extends s.LitElement{constructor(){super(),this.index=0,this._widget=s.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return s.html`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};r([(0,i.property)({type:Number}),o("design:type",Number)],l.prototype,"index",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"no_delete",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],l.prototype,"single",void 0),r([(0,i.property)({type:String}),o("design:type",String)],l.prototype,"_single",void 0),l=r([(0,i.customElement)("multiple-widgets"),o("design:paramtypes",[])],l)},2461:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>a});var s=n(5862),i=n(9662),r=(n(9975),n(3283),n(1243),function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends s.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[s.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?s.html`
          <div class="form-input border">
            ${this.hasLabel?s.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:s.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:s.html`
          <div class="form-input border">
            ${this.hasLabel?s.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:s.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?s.html`
          <div class="form-input border">
            ${this.hasLabel?s.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:s.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:s.html`
          <div class="form-input border">
            ${this.hasLabel?s.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:s.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};r([(0,i.property)({type:String}),o("design:type",String)],a.prototype,"name",void 0),r([(0,i.property)({type:String}),o("design:type",String)],a.prototype,"label",void 0),r([(0,i.property)({type:String}),o("design:type",String)],a.prototype,"value",void 0),r([(0,i.property)({type:String}),o("design:type",String)],a.prototype,"accept",void 0),r([(0,i.property)({type:Number}),o("design:type",Number)],a.prototype,"randomID",void 0),r([(0,i.property)({type:String}),o("design:type",String)],a.prototype,"id",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"required",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"hasLabel",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"multiple",void 0),r([(0,i.property)({type:Number}),o("design:type",Number)],a.prototype,"startNumber",void 0),r([(0,i.property)({type:Number}),o("design:type",Number)],a.prototype,"rowsPerPage",void 0),r([(0,i.property)({type:Number}),o("design:type",Number)],a.prototype,"totalShowing",void 0),r([(0,i.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=r([(0,i.customElement)("file-input")],a)},5588:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditDay:()=>p}),n(3076),n(3683),n(4657);var s=n(4108),i=n(5862),r=n(9662),o=(n(8656),n(8693),n(7712)),a=n(1354),l=n(1302),c=n(7108),d=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this),(0,o.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,s.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,a)}l((r=r.apply(t,n||[])).next())}));var t,n,i,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,l.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,l.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-day CLIENT_ID="${this.clientId}"></attendance-setup-form-day>
      </div>
    `}firstUpdayd(){}createRenderRoot(){return this}};d([(0,r.property)({type:String}),u("design:type",String)],p.prototype,"email",void 0),d([(0,r.property)({type:Number}),u("design:type",Number)],p.prototype,"mId",void 0),d([(0,r.property)({type:Number}),u("design:type",Number)],p.prototype,"clientId",void 0),d([(0,r.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_hasSetup",void 0),d([(0,r.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=d([(0,r.customElement)("attendance-setup-form-edit-day"),u("design:paramtypes",[])],p)},8656:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormDay:()=>_}),n(5501);var s,i,r=n(5862),o=n(9662),a=n(8881),l=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),c=n(7824),d=n(2218),u=n(4672),p=n(963),h=(n(5866),n(1148)),m=n(4947),y=n(5134),f=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function o(e){try{l(s.next(e))}catch(e){r(e)}}function a(e){try{l(s.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((s=s.apply(e,t||[])).next())}))};let _=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__dayUser=null,this.__schedule=null,this.__scheduleDays=[],this._daysOfWeek=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _dayUser(e){this.__dayUser=e,this.requestUpdate()}get _dayUser(){return this.__dayUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleDay(),yield this.getDaysOfWeek()}))}disconnectedCallback(){}render(){return r.html`${this.schedule}`}get schedule(){return null===this._schedule?r.html`
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
      `:!0===this._schedule.success?r.html`${this.scheduleDay}`:r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleDay(){return null===this._scheduleDays?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleDays?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Day</span>: undefined error</h4>
          </div>
        </div>
      `:r.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.html`${this.table}`}get table(){return this._scheduleDays.length>0?r.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Day">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Day
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Date
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
                ${this.getMeetingAttendanceDays}
              </tbody>
            </table>
          </div>
        </div>
      `:r.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceDays(){return r.html`
      ${this._scheduleDays.map(((e,t)=>r.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,a.until)(this.getDayOfWeek(e.dayId),r.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,m.getDate)(e.endDate,{dateStyle:"medium"})}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceDay}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Day</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Day!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-day">
                <div class="p-0 m-0" show-dayField="all">
                  ${this.dayFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Day" raised class="button" @click="${this.submitForm}">
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
    `}get dayField(){const e=this._daysOfWeek.map((e=>r.html`<mwc-list-item value="${e.id}">${e.day}</mwc-list-item>`));return r.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Day</h4>
            <mwc-select name="dayId" class="w-full" id="dayId" label="Select Day" outlined required>
              <mwc-list-item value="">Select Day</mwc-list-item>
              ${r.html`${e}`}
            </mwc-select>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Date</h4>
            <mwc-textfield name="endDate" multiple type="date" class="w-full" id="endDate"
              label="Select Date" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}dayFieldDefault(e){return r.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.dayField}
        dayField-id="${e}" no_delete></multiple-widgets>
    `}addDayField(){const e=this.showDayFieldAllSelector.children.length,t=(0===e?-1:Number(this.showDayFieldAllSelector.children[e-1].getAttribute("dayField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("dayField-id",String(t)),this.showDayFieldAllSelector.append(n);const s=this.showDayFieldAllSelector.querySelectorAll('multiple-widgets[dayField-id="'+t+'"]'),i=this.dayField.strings.join("");setTimeout((()=>{s.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.MDCDataTable(e)}))}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,y.POST_AttendanceAddScheduleDay)()}))}deleteQuestionnaireMeetingAttendanceDay(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_AttendanceDeleteScheduleDay)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return g(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleDay(){return g(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleDay)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");let t=[];null===e?t.push({id:0,dayId:0,endDate:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._scheduleDays,...t),this._scheduleDays=n}))}getDaysOfWeek(){return g(this,void 0,void 0,(function*(){const e=yield(0,h.GET_DayOfWeek)();let t=[];null===e?t.push({id:0,day:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._daysOfWeek,...t),this._daysOfWeek=n}))}getDayOfWeek(e){return g(this,void 0,void 0,(function*(){const t=yield(0,h.GET_DayOfWeek)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};_.styles=[r.css`
   :host { display: block; }
  `],f([(0,o.property)({type:Number}),v("design:type",Number)],_.prototype,"CLIENT_ID",void 0),f([(0,o.property)({type:Number}),v("design:type",Number)],_.prototype,"startSearchPage",void 0),f([(0,o.property)({type:Array}),v("design:type",Array)],_.prototype,"_daysOfWeek",void 0),f([(0,o.property)({type:Array}),v("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],_.prototype,"_data",void 0),f([(0,o.property)({type:Object}),v("design:type",Object)],_.prototype,"urlQueryParams",void 0),f([(0,o.property)({type:Number}),v("design:type",Number)],_.prototype,"meetingEventId",void 0),f([(0,o.query)('[show-dayField="all"]'),v("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],_.prototype,"showDayFieldAllSelector",void 0),_=f([(0,o.customElement)("attendance-setup-form-day"),v("design:paramtypes",[])],_)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-5cb5c5","shared"],(()=>(5588,e(e.s=5588)))),e.O())])));
//# sourceMappingURL=edit-day.js.map