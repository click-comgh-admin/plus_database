"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-location"],{1243:(e,t,n)=>{n.r(t)},5501:(e,t,n)=>{n.r(t)},7427:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleLocation:()=>u});var o=n(6455),i=n.n(o),s=n(8485),r=n(7270),a=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,c.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,o={};return i().fire({title:"Remove Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new a.NetWorkCallResponses("delete",n,!0);return o.postForm,o}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}i().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},606:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleLocation:()=>a});var o=n(8485),i=n(7270),s=n(4492),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,l=yield(0,i.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{s(c.next(e))}catch(e){t(e)}}function i(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,i)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},5372:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleLocation:()=>u});var o=n(6455),i=n.n(o),s=n(8485),r=n(7270),a=n(4492),l=n(8967),c=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location",n=document.querySelector('[make-general-posts="add-schedule-location"]'),o=new FormData(n);return i().fire({title:"Add Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,l.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>a});var o=n(8485),i=n(7270),s=n(4492),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,i.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{s(c.next(e))}catch(e){t(e)}}function i(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,i)}s((c=c.apply(n,a||[])).next())}));var n,a,l,c}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>l});var o=n(5862),i=n(9662),s=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};let l=class extends o.LitElement{constructor(){super(),this.index=0,this._widget=o.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return o.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?o.nothing:o.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,i.property)({type:Number}),r("design:type",Number)],l.prototype,"index",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"no_delete",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"single",void 0),s([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"_single",void 0),l=s([(0,i.customElement)("multiple-widgets"),r("design:paramtypes",[])],l)},2461:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>a});var o=n(5862),i=n(9662),s=(n(9975),n(3283),n(1243),function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[o.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,i.property)({type:String}),r("design:type",String)],a.prototype,"name",void 0),s([(0,i.property)({type:String}),r("design:type",String)],a.prototype,"label",void 0),s([(0,i.property)({type:String}),r("design:type",String)],a.prototype,"value",void 0),s([(0,i.property)({type:String}),r("design:type",String)],a.prototype,"accept",void 0),s([(0,i.property)({type:Number}),r("design:type",Number)],a.prototype,"randomID",void 0),s([(0,i.property)({type:String}),r("design:type",String)],a.prototype,"id",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"required",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"hasLabel",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"multiple",void 0),s([(0,i.property)({type:Number}),r("design:type",Number)],a.prototype,"startNumber",void 0),s([(0,i.property)({type:Number}),r("design:type",Number)],a.prototype,"rowsPerPage",void 0),s([(0,i.property)({type:Number}),r("design:type",Number)],a.prototype,"totalShowing",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=s([(0,i.customElement)("file-input")],a)},2166:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLocation:()=>p}),n(3076),n(3683),n(4657);var o=n(4108),i=n(5862),s=n(9662),r=(n(5744),n(8693),n(7712)),a=n(1354),l=n(1302),c=n(7108),d=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends i.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,r.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,a)}l((s=s.apply(t,n||[])).next())}));var t,n,i,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,l.PageButtonUserAccess)(c.PAGE__IDS.schedule_meeting_event),!(0,l.AppSettingsExtraUserAccess)({pageId:c.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-location CLIENT_ID="${this.clientId}"></attendance-setup-form-location>
      </div>
    `}firstUplocationd(){}createRenderRoot(){return this}};d([(0,s.property)({type:String}),u("design:type",String)],p.prototype,"email",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"mId",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"clientId",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_hasSetup",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=d([(0,s.customElement)("attendance-setup-form-edit-location"),u("design:paramtypes",[])],p)},5744:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormLocation:()=>y}),n(5501);var o,i,s=n(5862),r=n(9662),a=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),l=n(606),c=n(2218),d=n(4672),u=n(7427),p=n(6262),h=(n(5866),n(5372)),m=n(3600),f=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((o=o.apply(e,t||[])).next())}))};let y=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__locationUser=null,this.__schedule=null,this.__scheduleLocations=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _locationUser(e){this.__locationUser=e,this.requestUpdate()}get _locationUser(){return this.__locationUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return null===this._schedule?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?s.html`${this.scheduleLocation}`:s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleLocation(){return null===this._scheduleLocations?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleLocations?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Location</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.html`${this.table}`}get table(){return this._scheduleLocations.results.length>0?s.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Location">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Latitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
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
                ${this.getMeetingAttendanceLocations}
              </tbody>
            </table>
          </div>
        </div>
      `:s.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceLocations(){return s.html`
      ${this._scheduleLocations.results.map(((e,t)=>s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.latitude}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.longitude}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.radius}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceLocation}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return s.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  ${this.locationFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Location" raised class="button" @click="${this.submitForm}">
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
    `}get locationField(){return(0,m.getUserLoginInfoCookie)().token,s.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Latitude</h4>
            <mwc-textfield name="latitude" type="number" step="0.01" class="w-full" id="latitude" label="Enter Latitude" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Longitude</h4>
            <mwc-textfield name="longitude" type="number" step="0.01" class="w-full" id="longitude" label="Enter Longitude" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Radius</h4>
            <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius" label="Enter Radius" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}locationFieldDefault(e){return s.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.locationField}
        locationField-id="${e}" no_delete></multiple-widgets>
    `}addLocationField(){const e=this.showLocationFieldAllSelector.children.length,t=(0===e?-1:Number(this.showLocationFieldAllSelector.children[e-1].getAttribute("locationField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("locationField-id",String(t)),this.showLocationFieldAllSelector.append(n);const o=this.showLocationFieldAllSelector.querySelectorAll('multiple-widgets[locationField-id="'+t+'"]'),i=this.locationField.strings.join("");setTimeout((()=>{o.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=i}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}getLocationUsers(){return g(this,void 0,void 0,(function*(){const e=yield(0,p.GET_ClientUsers)();this._locationUser=null===e?void 0:e.paginResponse}))}getLocationUser(e){return g(this,void 0,void 0,(function*(){const t=yield(0,p.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_AttendanceAddScheduleLocation)()}))}deleteQuestionnaireMeetingAttendanceLocation(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,u.DELETE_AttendanceDeleteScheduleLocation)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,o=e.results,i=document.querySelector('[id="location"]');let s=[];if(n>0){var r=o;for(let e=0;e<r.length;e++){const t=r[e],n={id:t.id,text:t.firstname+" "+t.surname};s.includes(n)||s.push(n)}}return{results:s,total:n,totalShowing:i.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,d.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return g(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleLocation(){return g(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceScheduleLocation)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};y.styles=[s.css`
   :host { display: block; }
  `],f([(0,r.property)({type:Number}),v("design:type",Number)],y.prototype,"CLIENT_ID",void 0),f([(0,r.property)({type:Number}),v("design:type",Number)],y.prototype,"startSearchPage",void 0),f([(0,r.property)({type:Array}),v("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],y.prototype,"_data",void 0),f([(0,r.property)({type:Object}),v("design:type",Object)],y.prototype,"urlQueryParams",void 0),f([(0,r.property)({type:Number}),v("design:type",Number)],y.prototype,"meetingEventId",void 0),f([(0,r.query)('[show-locationField="all"]'),v("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],y.prototype,"showLocationFieldAllSelector",void 0),y=f([(0,r.customElement)("attendance-setup-form-location"),v("design:paramtypes",[])],y)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-5cb5c5","shared"],(()=>(2166,e(e.s=2166)))),e.O())])));
//# sourceMappingURL=edit-location.js.map