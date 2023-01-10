"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2019],{6951:(e,t,n)=>{n.d(t,{F:()=>o});const o=(e,t)=>(new Date,new Date(`${e}`).toLocaleString("en-US",t))},101:(e,t,n)=>{n.d(t,{ND:()=>a,X_:()=>c});var o=n(2578),i=n(1551),r=n(8530),s=n(7477);const a=e=>"organizationName"in e&&"organizationType"in e&&"businessRegistered"in e&&"organizationPhone"in e&&"dateOfIncorporation"in e;function l(e,t){let n=null;return n=1===t?(0,i.Z)(e.memberInfo):r.e.toMembershipOrganizationUserModel(JSON.stringify(e.memberInfo)),{id:Number(e.id),memberId:Number(e.memberId),memberInfo:n,phone:String(e.phone),email:String(e.email),facebook:String(e.facebook),instagram:String(e.instagram),placeOfWork:String(e.placeOfWork),profession:String(e.profession),twitter:String(e.twitter),whatsapp:String(e.whatsapp),businessHashtag:String(e.businessHashtag),businessDescription:String(e.businessDescription),dateJoined:(0,o.G)(e.dateJoined),date:(0,o.G)(e.date)}}function c(e){const t=(0,s.e)(e.attendance);return{attendance:t,additionalInfo:l(e.additionalInfo,t.accountType),lastSeen:(0,o.G)(e.lastSeen),status:String(e.status)}}},5118:(e,t,n)=>{n.d(t,{p:()=>a});var o=n(771),i=n(7270),r=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=o.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance"+(null===e?"":"/"+e)+t,l=yield(0,i.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{r(c.next(e))}catch(e){t(e)}}function i(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,i)}r((c=c.apply(n,a||[])).next())}));var n,a,l,c}},2715:(e,t,n)=>{var o=n(9392),i=n(1936),r=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?o.dy`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:o.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,i.Cb)({type:String}),s("design:type",String)],a.prototype,"aClass",void 0),r([(0,i.Cb)({type:String}),s("design:type",String)],a.prototype,"bClass",void 0),r([(0,i.Cb)({type:String}),s("design:type",String)],a.prototype,"icon",void 0),r([(0,i.Cb)({type:String}),s("design:type",String)],a.prototype,"href",void 0),r([(0,i.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),r([(0,i.Cb)({type:String}),s("design:type",String)],a.prototype,"isBlockContent",void 0),r([(0,i.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"raised",void 0),a=r([(0,i.Mo)("link-button")],a)},6912:(e,t,n)=>{n.r(t),n.d(t,{PdbAttendanceClockingFollowUp:()=>E});var o=n(7052),i=n(4672),r=n(9392),s=n(1936),a=(n(2715),n(8763),n(2935),n(1239),n(5248),n(934),n(9261),n(6811),n(6951)),l=n(2486),c=n(7477),d=n(771),u=n(7270),m=n(596),p=n(3600),f=n(6455),h=n.n(f),g=n(8967),y=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};class b{static toGenericMessagingTypeModel(e){return _(JSON.parse(e),C("GenericMessagingTypeModel"),w)}static genericMessagingTypeModelToJson(e){return JSON.stringify(_(e,C("GenericMessagingTypeModel"),v),null,2)}}function w(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function v(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function _(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=S[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let i=0;i<o;i++){const o=e[i];try{return _(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>_(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],s=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;i[r.key]=_(s,r.typ,n,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(i[r]=_(o[r],t,n,r))})),i}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function k(...e){return{unionMembers:e}}function C(e){return{ref:e}}const S={GenericMessagingTypeModel:(A=[{json:"id",js:"id",typ:k(null,0)},{json:"name",js:"name",typ:k(null,"")}],!1,{props:A,additional:false})};var A,x=n(5118),$=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))},I=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))},T=n(101),F=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},U=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},M=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};let E=class extends r.oi{constructor(){super(),this.__memberClockingInfo=null,this._messagingTypes=[],this.clockingId=0,this.showingForm=!1,this.toggleFollowUpFormCalled=!1,this.toggleMessageMetadatFormCalled=!1,this.clockingIdEnc=null,this._clockingFollowUp=null}set _memberClockingInfo(e){this.__memberClockingInfo=e,this.requestUpdate()}get _memberClockingInfo(){return this.__memberClockingInfo}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return M(this,void 0,void 0,(function*(){e.connectedCallback.call(this),document.onreadystatechange=e=>{setInterval((()=>{this.toggleFollowUpFormCalled||"complete"==document.readyState&&this.toggleFollowUpForm(e),this.toggleMessageMetadatFormCalled||"complete"==document.readyState&&this.toggleMessageMetadatForm(e)}))},this.getMeetingEventId(),yield this.getMessagingTypes(),yield this.getAttendanceClocking(),yield this.getAttendanceClockingFollowUp()}))}disconnectedCallback(){}render(){if(0===this.clockingId||null===this.clockingId||Number.isNaN(this.clockingId)){const e=r.dy`<h4 class="text-white">Error</h4>`,t=r.dy`
        <div>
          <p class="text-black mb-2">Clocking ID Not Found!</p>
        </div>
      `;return r.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{let e=null;if(e=null!==this._memberClockingInfo&&void 0!==this._memberClockingInfo.data?Array.isArray(this._memberClockingInfo.data)?this._memberClockingInfo.data.length>0?this._memberClockingInfo.data[0]:{}:this._memberClockingInfo.data:null,void 0===e){const e=r.dy`<h4 class="text-white">Empty</h4>`,t=r.dy`
          <div>
            <p class="text-black mb-2">Attendance Clocking Not Found!</p>
            <p class="text-black mb-2"><small>Try again later.</small></p>
          </div>
        `;return r.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}if(null!==e)return null===this._clockingFollowUp?r.dy`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `:r.dy`
            <div class="shadow bg-white p-2">
              <div class="block">
                <div class="my-1">${this.form(e)}</div>
                <div class="my-1">${this.messages}</div>
              </div>
            </div>
          `;if(null===this._clockingFollowUp)return r.dy`
            <div class="main-container">
              <div class="flex justify-center">
                <mwc-circular-progress indeterminate></mwc-circular-progress>
              </div>
            </div>
          `}}get messages(){if(this._clockingFollowUp.length>0)return this._clockingFollowUp.map((e=>r.dy`<div class="border rounded-none my-1">
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
            <div>${(0,a.F)(e.date,{dateStyle:"medium",timeStyle:"short"})}</div>
          </div>
        </div>`));{const e=r.dy`<h4 class="text-white">Empty</h4>`,t=r.dy`
        <div>
          <p class="text-black mb-2">No Follow-Ups sent yet!</p>
          <p class="text-black mb-2"><small>Click on "Send Follow-Up" button to send one.</small></p>
        </div>
      `;return r.dy`<alert-card info .header="${e}" .content="${t}"></alert-card>`}}messageMetaData(e){let t=" - ",n=" - ",o=" - ";if((0,T.ND)(e.clockingId.memberId)){const i=e.clockingId.memberId;t=`${i.organizationName}`,n=`${i.organizationPhone}`,o=`${i.organizationEmail}`}else{const i=e.clockingId.memberId;t=`${i.firstname} ${i.middlename} ${i.surname}`,n=`${i.phone}`,o=`${i.email}`}return r.dy`
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
                      <p>${r.dy`${t}`}</p>
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
                      <p>${r.dy`<a href="tel:${n}" type="tel">${n}</a>`}</p>
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
                      <p>${r.dy`<a href="mailto:${o}" type="email">${o}</a>`}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}form(e){const t=void 0===e.id?0:e.id,n=void 0===e.id?0:e.meetingEventId.id,o=0===n?r.dy`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}" disabled>
      </mwc-button>`:r.dy`
      <mwc-button label="Send Follow Up" raised class="w-full button" @click="${this.submitForm}">
      </mwc-button>
    `;return r.dy`
      <mwc-button class="button success" outlined show_follow_up_form disabled>
        <mwc-icon>send</mwc-icon> Send Follow-Up 
        <mwc-circular-progress indeterminate show_follow_up_form_loading class="w-6"></mwc-circular-progress>
      </mwc-button>
      ${this.showingForm?r.dy`
        <div class="flex flex-col m-1 justify-evenly whitespace-normal">
          <form method="post" action="#" class="form mt-0" make-general-posts="add-follow-up">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-12">
                <h4 class="font-semibold my-2">Select Messaging Type</h4>
                <mwc-select name="messagingType" id="messagingType" label="Select Messaging Type" outlined required>
                  ${this._messagingTypes.map((e=>r.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
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
      `:r.Ld}
    `}get followUp(){return r.dy`<mwc-textarea class="h-44" outlined name="followUp" id="followUp"></mwc-textarea>`}firstUpdated(){}toggleMessageMetadatForm(e){const t=document.querySelectorAll("mwc-button[show_message_metadata]");document.querySelectorAll("mwc-button>[show_message_metadata_loading]").forEach((e=>{e.setAttribute("hidden","true")})),t.forEach((e=>{e.removeAttribute("disabled"),e.onclick=e=>M(this,void 0,void 0,(function*(){const t=e.target.getAttribute("message-meta-data-btn-id"),n=this.querySelector('[message-meta-data-id="'+t+'"]');n.hasAttribute("hidden")?n.removeAttribute("hidden"):n.setAttribute("hidden","")}))})),t.length>0&&(this.toggleMessageMetadatFormCalled=!0)}toggleFollowUpForm(e){const t=document.querySelectorAll("mwc-button[show_follow_up_form]");document.querySelectorAll("mwc-button>[show_follow_up_form_loading]").forEach((e=>{e.setAttribute("hidden","true")})),t.forEach((e=>{e.removeAttribute("disabled"),e.onclick=e=>M(this,void 0,void 0,(function*(){this.showingForm=!this.showingForm}))})),t.length>0&&(this.toggleFollowUpFormCalled=!0)}getMeetingEventId(){let e=(0,i.Jx)("clocking-id"),t=null!==e?(0,o.t)(e):null;this.clockingId=Number.isNaN(t)?null:Number(t),this.clockingIdEnc=(0,o.h)(String(this.clockingId),!0)}getMessagingTypes(){return M(this,void 0,void 0,(function*(){const e=yield function(e=null){return t=this,n=void 0,i=function*(){const t=(0,p.Ie)(),n=d.t.URLS.AKWAABA_API_BASE_URL+"generic/messaging-type"+(null===e?"":"/"+e),o=yield(0,u.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new m.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new m.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}l((i=i.apply(t,n||[])).next())}));var t,n,o,i}();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[{id:0,name:"Select Meeting Type"},...e.response.data.map((e=>b.toGenericMessagingTypeModel(JSON.stringify(e))))]);const n=[];n.push(...this._messagingTypes,...t),this._messagingTypes=n}))}getAttendanceClockingFollowUp(){return M(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return n=this,o=void 0,r=function*(){const n=(0,p.Ie)(),o=d.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up"+(null===e?"":"/"+e)+t,i=yield(0,u.d)(o,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new m.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new m.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function s(e){try{l(r.next(e))}catch(e){t(e)}}function a(e){try{l(r.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(s,a)}l((r=r.apply(n,o||[])).next())}));var n,o,i,r}(null,"?clockingId="+this.clockingId);if(null!==e){const t=e.paginResponse;if(e.response,null!==t){const e=t.results.map((e=>{return t=e,{id:Number(t.id),clockingId:(0,c.e)(t.clockingId),followUp:String(t.followUp),messagingType:Number(t.messagingType),sent:(0,l.N)(t.sent),enteredBy:Number(t.enteredBy),date:new Date(t.date)};var t}));this._clockingFollowUp=e}else this._clockingFollowUp=[]}else this._clockingFollowUp=[]}))}getAttendanceClocking(){return M(this,void 0,void 0,(function*(){const e=yield(0,x.p)(this.clockingId);this._memberClockingInfo=null===e?void 0:e.response}))}deleteFollowUpMessage(e){return M(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return $(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=d.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up/"+e,o={};return h().fire({title:"Remove Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>$(this,void 0,void 0,(function*(){return yield(0,u.d)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new m.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,g.T)(e);h().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new m.H("delete",n,!0);return o.postForm,o}})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}h().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}resendFollowUpMessage(e){return M(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("resend-this-item"));yield function(e){return I(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=d.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up/resend/"+e,o={};return h().fire({title:"Resend Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>I(this,void 0,void 0,(function*(){return yield(0,u.d)(n,{method:"PATCH",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new m.H("patch",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,g.T)(e);h().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new m.H("delete",n,!0);return o.postForm,o}})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}h().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}submitForm(e){return M(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return y(this,void 0,void 0,(function*(){const e=(0,p.Ie)(),t=d.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attendance-follow-up",n=document.querySelector('[make-general-posts="add-follow-up"]'),o=new FormData(n);return h().fire({title:"Send Follow-Up?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>y(this,void 0,void 0,(function*(){return yield(0,u.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new m.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,g.T)(e);h().showValidationMessage(`${t}`)}return t})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&h().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{if(o instanceof Object){const e=o.response;console.log({"VALUE.data":e.data}),window.location.reload()}else window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};E.styles=[r.iv`
   :host { display: block; }
  `],F([(0,s.Cb)({type:Array}),U("design:type",Array)],E.prototype,"_messagingTypes",void 0),F([(0,s.Cb)({type:Number}),U("design:type",Number)],E.prototype,"clockingId",void 0),F([(0,s.Cb)({type:Boolean}),U("design:type",Boolean)],E.prototype,"showingForm",void 0),F([(0,s.Cb)({type:Boolean}),U("design:type",Boolean)],E.prototype,"toggleFollowUpFormCalled",void 0),F([(0,s.Cb)({type:Boolean}),U("design:type",Boolean)],E.prototype,"toggleMessageMetadatFormCalled",void 0),F([(0,s.Cb)({type:String}),U("design:type",String)],E.prototype,"clockingIdEnc",void 0),F([(0,s.Cb)({type:Array}),U("design:type",Array)],E.prototype,"_clockingFollowUp",void 0),E=F([(0,s.Mo)("pdb-attendance-clocking-follow_up"),U("design:paramtypes",[])],E)}},e=>(e.O(0,[5744,2185,9674,7708,1109,2585,3934,3712],(()=>(6912,e(e.s=6912)))),e.O())])));
//# sourceMappingURL=follow_up.js.map