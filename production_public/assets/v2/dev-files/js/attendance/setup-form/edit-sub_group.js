"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["attendance/setup-form/edit-sub_group"],{1243:(e,t,n)=>{n.r(t)},5501:(e,t,n)=>{n.r(t)},1257:(e,t,n)=>{n.r(t),n.d(t,{DELETE_AttendanceDeleteScheduleSubGroup:()=>u});var r=n(6455),o=n.n(r),s=n(8485),i=n(7270),l=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup/"+e,r={};return o().fire({title:"Remove SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new l.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8786:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceScheduleSubGroup:()=>l});var r=n(8485),o=n(7270),s=n(4492),i=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},4647:(e,t,n)=>{n.r(t),n.d(t,{POST_AttendanceAddScheduleSubGroup:()=>u});var r=n(6455),o=n.n(r),s=n(8485),i=n(7270),l=n(4492),c=n(8967),a=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,a.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup",n=document.querySelector('[make-general-posts="add-schedule-subgroup"]'),r=new FormData(n);return o().fire({title:"Add SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&o().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>l});var r=n(8485),o=n(7270),s=n(4492),i=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},9605:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsSubGroups:()=>l});var r=n(8485),o=n(7270),s=n(4492),i=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>c});var r=n(5862),o=n(9662),s=(n(3283),n(6413),n(789),n(3830),n(6948),n(3313),function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};let c=class extends r.LitElement{constructor(){super(),this.index=0,this._widget=r.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return r.html`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return l(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.property)({type:Number}),i("design:type",Number)],c.prototype,"index",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"no_delete",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"single",void 0),s([(0,o.property)({type:String}),i("design:type",String)],c.prototype,"_single",void 0),c=s([(0,o.customElement)("multiple-widgets"),i("design:paramtypes",[])],c)},2461:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>l});var r=n(5862),o=n(9662),s=(n(9975),n(3283),n(1243),function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[r.css`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"accept",void 0),s([(0,o.property)({type:Number}),i("design:type",Number)],l.prototype,"randomID",void 0),s([(0,o.property)({type:String}),i("design:type",String)],l.prototype,"id",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"required",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"hasLabel",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,o.property)({type:Number}),i("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,o.property)({type:Number}),i("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,o.property)({type:Number}),i("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,o.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,o.customElement)("file-input")],l)},7993:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditSubGroup:()=>p}),n(3076),n(3683),n(4657);var r=n(4108),o=n(5862),s=n(9662),i=(n(4315),n(8693),n(7712)),l=n(1354),c=n(1302),a=n(7108),d=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends o.LitElement{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,s=function*(){e.connectedCallback.call(this),(0,i.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,r.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,r){function i(e){try{c(s.next(e))}catch(e){r(e)}}function l(e){try{c(s.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,l)}c((s=s.apply(t,n||[])).next())}));var t,n,o,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,l.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return o.html`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.PageButtonUserAccess)(a.PAGE__IDS.schedule_meeting_event),!(0,c.AppSettingsExtraUserAccess)({pageId:a.PAGE__IDS.schedule_meeting_event,viewType:"Edit"},!1))return o.html`<no-page-entry-component></no-page-entry-component>`}return o.html`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-subgroup CLIENT_ID="${this.clientId}"></attendance-setup-form-subgroup>
      </div>
    `}firstUpsubgroupd(){}createRenderRoot(){return this}};d([(0,s.property)({type:String}),u("design:type",String)],p.prototype,"email",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"mId",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"clientId",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_hasSetup",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=d([(0,s.customElement)("attendance-setup-form-edit-subgroup"),u("design:paramtypes",[])],p)},4315:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormSubGroup:()=>v}),n(5501);var r,o,s=n(5862),i=n(9662),l=n(8881),c=(n(3283),n(1511),n(3690),n(1854),n(2461),n(9068)),a=n(8786),d=n(2218),u=n(4672),p=n(1257),h=(n(5866),n(4647)),m=n(9605),f=n(2892),g=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};let v=class extends s.LitElement{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__subgroupUser=null,this.__schedule=null,this.__scheduleSubGroups=null,this._groups=[],this._subgroups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _subgroupUser(e){this.__subgroupUser=e,this.requestUpdate()}get _subgroupUser(){return this.__subgroupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleSubGroups(e){this.__scheduleSubGroups=e,this.requestUpdate()}get _scheduleSubGroups(){return this.__scheduleSubGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.urlQueryParams)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleSubGroup(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return s.html`${this.schedule}`}get schedule(){return null===this._schedule?s.html`
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
      `:!0===this._schedule.success?s.html`${this.scheduleSubGroup}`:s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleSubGroup(){return null===this._scheduleSubGroups?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleSubGroups?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SubGroup</span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.html`${this.table}`}get table(){return this._scheduleSubGroups.results.length>0?s.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting SubGroup">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting SubGroup
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
                ${this.getMeetingAttendanceSubGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:s.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceSubGroups(){return s.html`
      ${this._scheduleSubGroups.results.map(((e,t)=>s.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,l.until)(this.getSubGroup(e.subGroupId),s.html`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSubGroup}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled SubGroup</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled SubGroup!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-subgroup">
                <div class="p-0 m-0" show-subgroupField="all">
                  ${this.subgroupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add SubGroup" raised class="button" @click="${this.submitForm}">
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
    `}get subgroupField(){const e=this._subgroups.map((e=>s.html`<mwc-list-item value="${e.id}">
        ${(0,l.until)(this.getGroup(e.groupId),s.html`<span>Loading...</span>`)} >> 
        ${e.subgroup}
      </mwc-list-item>`));return s.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select SubGroup</h4>
            <mwc-select name="subGroupId" class="w-full" id="subGroupId" label="Select SubGroup" outlined required>
              <mwc-list-item value="">Select SubGroup</mwc-list-item>
              <mwc-list-item value="all">All SubGroups</mwc-list-item>
              ${s.html`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}subgroupFieldDefault(e){return s.html`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.subgroupField}
        subgroupField-id="${e}" no_delete></multiple-widgets>
    `}addSubGroupField(){const e=this.showSubGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showSubGroupFieldAllSelector.children[e-1].getAttribute("subgroupField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("subgroupField-id",String(t)),this.showSubGroupFieldAllSelector.append(n);const r=this.showSubGroupFieldAllSelector.querySelectorAll('multiple-widgets[subgroupField-id="'+t+'"]'),o=this.subgroupField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new c.MDCDataTable(e)}))}submitForm(e){return y(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_AttendanceAddScheduleSubGroup)()}))}deleteQuestionnaireMeetingAttendanceSubGroup(e){return y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,p.DELETE_AttendanceDeleteScheduleSubGroup)(t)}))}getMeetingEventId(){let e=(0,u.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return y(this,void 0,void 0,(function*(){const e=yield(0,d.GET_AttendanceSchedule)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleSubGroup(){return y(this,void 0,void 0,(function*(){const e=yield(0,a.GET_AttendanceScheduleSubGroup)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleSubGroups=null===e?void 0:e.paginResponse}))}getGroups(){return y(this,void 0,void 0,(function*(){const e=yield(0,f.GET_MemberGroupingsGroups)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._groups,...t),this._groups=n}))}getGroup(e){return y(this,void 0,void 0,(function*(){const t=yield(0,f.GET_MemberGroupingsGroups)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}getSubGroups(){return y(this,void 0,void 0,(function*(){const e=yield(0,m.GET_MemberGroupingsSubGroups)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._subgroups,...t),this._subgroups=n}))}getSubGroup(e){return y(this,void 0,void 0,(function*(){const t=yield(0,m.GET_MemberGroupingsSubGroups)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};v.styles=[s.css`
   :host { display: block; }
  `],g([(0,i.property)({type:Number}),b("design:type",Number)],v.prototype,"CLIENT_ID",void 0),g([(0,i.property)({type:Number}),b("design:type",Number)],v.prototype,"startSearchPage",void 0),g([(0,i.property)({type:Array}),b("design:type",Array)],v.prototype,"_groups",void 0),g([(0,i.property)({type:Array}),b("design:type",Array)],v.prototype,"_subgroups",void 0),g([(0,i.property)({type:Array}),b("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],v.prototype,"_data",void 0),g([(0,i.property)({type:Object}),b("design:type",Object)],v.prototype,"urlQueryParams",void 0),g([(0,i.property)({type:Number}),b("design:type",Number)],v.prototype,"meetingEventId",void 0),g([(0,i.query)('[show-subgroupField="all"]'),b("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],v.prototype,"showSubGroupFieldAllSelector",void 0),v=g([(0,i.customElement)("attendance-setup-form-subgroup"),b("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.material","vendors.lit-html","vendors.lit","vendors.buffer","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-05f8f4","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts-src_view_attendance_page__id_ts-src_assets_styles_views-9189ea","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_widget_simple-table_main_scss","src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-5cb5c5","shared"],(()=>(7993,e(e.s=7993)))),e.O())])));
//# sourceMappingURL=edit-sub_group.js.map