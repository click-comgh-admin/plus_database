"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-attachment"],{1243:(e,t,n)=>{n.r(t)},5501:(e,t,n)=>{n.r(t)},7909:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleAttachment:()=>h});var r=n(6455),s=n.n(r),i=n(8485),o=n(7270),a=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};function h(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment/"+e,r={};return s().fire({title:"Remove Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new a.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2404:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleAttachment:()=>a});var r=n(8485),s=n(7270),i=n(4492),o=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function s(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,s)}i((l=l.apply(n,a||[])).next())}));var n,a,c,l}},5217:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleAttachment:()=>h});var r=n(6455),s=n.n(r),i=n(8485),o=n(7270),a=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};function h(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment",n=document.querySelector('[make-general-posts="add-schedule-attachment"]'),r=new FormData(n);return s().fire({title:"Add Attachment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,o.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,c.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>a});var r=n(8485),s=n(7270),i=n(4492),o=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,o.getUserLoginInfoCookie)(),a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,c=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function s(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,s)}i((l=l.apply(n,a||[])).next())}));var n,a,c,l}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>c});var r=n(5862),s=n(9662),i=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};let c=class extends r.LitElement{constructor(){super(),this.index=0,this._widget=r.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return r.html`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};i([(0,s.property)({type:Number}),o("design:type",Number)],c.prototype,"index",void 0),i([(0,s.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"no_delete",void 0),i([(0,s.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"single",void 0),i([(0,s.property)({type:String}),o("design:type",String)],c.prototype,"_single",void 0),c=i([(0,s.customElement)("multiple-widgets"),o("design:paramtypes",[])],c)},2461:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>a});var r=n(5862),s=n(9662),i=(n(9975),n(3283),n(1243),function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[r.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:r.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:r.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:r.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:r.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};i([(0,s.property)({type:String}),o("design:type",String)],a.prototype,"name",void 0),i([(0,s.property)({type:String}),o("design:type",String)],a.prototype,"label",void 0),i([(0,s.property)({type:String}),o("design:type",String)],a.prototype,"value",void 0),i([(0,s.property)({type:String}),o("design:type",String)],a.prototype,"accept",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],a.prototype,"randomID",void 0),i([(0,s.property)({type:String}),o("design:type",String)],a.prototype,"id",void 0),i([(0,s.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"required",void 0),i([(0,s.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"hasLabel",void 0),i([(0,s.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"multiple",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],a.prototype,"startNumber",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],a.prototype,"rowsPerPage",void 0),i([(0,s.property)({type:Number}),o("design:type",Number)],a.prototype,"totalShowing",void 0),i([(0,s.property)({type:Boolean}),o("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=i([(0,s.customElement)("file-input")],a)},3731:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditAttachment:()=>u}),n(3076),n(3683),n(4657);var r=n(4108),s=n(5862),i=n(9662),o=(n(3261),n(8693),n(7712)),a=n(1354),c=n(1302),l=n(7108),d=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends s.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,o.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,r){function o(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(o,a)}c((i=i.apply(t,n||[])).next())}));var t,n,s,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(l.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}return s.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-attachment CLIENT_ID="${this.clientId}"></attendance-setup-form-attachment>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,i.property)({type:String}),h("design:type",String)],u.prototype,"email",void 0),d([(0,i.property)({type:Number}),h("design:type",Number)],u.prototype,"mId",void 0),d([(0,i.property)({type:Number}),h("design:type",Number)],u.prototype,"clientId",void 0),d([(0,i.property)({type:Boolean}),h("design:type",Boolean)],u.prototype,"_hasSetup",void 0),d([(0,i.property)({type:Boolean}),h("design:type",Boolean)],u.prototype,"_pageButtonAccess",void 0),u=d([(0,i.customElement)("attendance-setup-form-edit-attachment"),h("design:paramtypes",[])],u)},3261:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormAttachment:()=>_}),n(5501);var r,s,i=n(5862),o=n(9662),a=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),c=n(2404),l=n(2218),d=n(4672),h=n(7909),u=n(6262),p=(n(5866),n(8485)),m=n(5217),f=n(3600),v=function(e,t,n,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,r){return new(n||(n=Promise))((function(s,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((r=r.apply(e,t||[])).next())}))};let _=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__attachmentUser=null,this.__schedule=null,this.__scheduleAttachments=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _attachmentUser(e){this.__attachmentUser=e,this.requestUpdate()}get _attachmentUser(){return this.__attachmentUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return i.html`${this.schedule}`}get schedule(){return null===this._schedule?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?i.html`${this.scheduleAttachment}`:i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleAttachment(){return null===this._scheduleAttachments?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleAttachments?i.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Attachment</span>: undefined error</h4>
          </div>
        </div>
      `:i.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return i.html`${this.table}`}get table(){return this._scheduleAttachments.results.length>0?i.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Attachment">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting/ Event Attachment
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
                ${this.getMeetingAttendanceAttachments}
              </tbody>
            </table>
          </div>
        </div>
      `:i.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceAttachments(){return i.html`
      ${this._scheduleAttachments.results.map(((e,t)=>i.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${p.CONSTANTS.URLS.FILE_BUCKET_BASE_URL}files${e.attachment}" target="_blank">Open File ${t+1}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceAttachment}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return i.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Attachment</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Attachment!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-attachment">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Attachment" raised class="button" @click="${this.submitForm}">
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
    `}get attachmentField(){return(0,f.getUserLoginInfoCookie)().token,i.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="attachment" name="attachment" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}attachmentFieldDefault(e){return i.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.attachmentField}
        attachmentField-id="${e}" no_delete></multiple-widgets>
    `}addAttachmentField(){const e=this.showAttachmentFieldAllSelector.children.length,t=(0===e?-1:Number(this.showAttachmentFieldAllSelector.children[e-1].getAttribute("attachmentField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("attachmentField-id",String(t)),this.showAttachmentFieldAllSelector.append(n);const r=this.showAttachmentFieldAllSelector.querySelectorAll('multiple-widgets[attachmentField-id="'+t+'"]'),s=this.attachmentField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=s}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.MDCDataTable(e)}))}getAttachmentUsers(){return y(this,void 0,void 0,(function*(){const e=yield(0,u.GET_ClientUsers)();this._attachmentUser=null===e?void 0:e.paginResponse}))}getAttachmentUser(e){return y(this,void 0,void 0,(function*(){const t=yield(0,u.GET_ClientUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return y(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.POST_AttendanceAddScheduleAttachment)()}))}deleteQuestionnaireMeetingAttendanceAttachment(e){return y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,h.DELETE_AttendanceDeleteScheduleAttachment)(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,r=e.results,s=document.querySelector('[id="attachment"]');let i=[];if(n>0){var o=r;for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.firstname+" "+t.surname};i.includes(n)||i.push(n)}}return{results:i,total:n,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,d.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return y(this,void 0,void 0,(function*(){const e=yield(0,l.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleAttachment(){return y(this,void 0,void 0,(function*(){const e=yield(0,c.GET_AttendanceScheduleAttachment)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};_.styles=[i.css`
   :host { display: block; }
  `],v([(0,o.property)({type:Number}),g("design:type",Number)],_.prototype,"CLIENT_ID",void 0),v([(0,o.property)({type:Number}),g("design:type",Number)],_.prototype,"startSearchPage",void 0),v([(0,o.property)({type:Array}),g("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],_.prototype,"_data",void 0),v([(0,o.property)({type:Object}),g("design:type",Object)],_.prototype,"urlQueryParams",void 0),v([(0,o.property)({type:Number}),g("design:type",Number)],_.prototype,"meetingEventId",void 0),v([(0,o.query)('[show-attachmentField="all"]'),g("design:type","function"==typeof(s="undefined"!=typeof Element&&Element)?s:Object)],_.prototype,"showAttachmentFieldAllSelector",void 0),_=v([(0,o.customElement)("attendance-setup-form-attachment"),g("design:paramtypes",[])],_)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-5cb5c5","shared"],(()=>(3731,e(e.s=3731)))),e.O())])));
//# sourceMappingURL=edit-attachment.js.map