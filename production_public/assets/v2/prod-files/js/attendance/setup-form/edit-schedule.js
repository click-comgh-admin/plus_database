"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[466],{4672:(e,t,n)=>{n.d(t,{Jx:()=>s,O1:()=>i,W3:()=>o});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},o=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},8693:(e,t,n)=>{var i=n(9392),s=n(1936),o=(n(2715),n(771)),a=n(4672),l=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,a.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.iv`
   :host { display: block; }
  `],l([(0,s.Cb)({type:Number}),r("design:type",Number)],c.prototype,"meetingEventId",void 0),c=l([(0,s.Mo)("attendance-setup-form-edit-links"),r("design:paramtypes",[])],c)},223:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditSchedule:()=>p}),n(3683),n(4657);var i=n(4108),s=n(9392),o=n(1936),a=(n(4978),n(8693),n(4672)),l=n(6979),r=n(8092),c=n(1302),d=n(7108),u=function(e,t,n,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(o<3?s(a):o>3?s(t,n,a):s(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let p=class extends s.oi{constructor(){super(),this.urlQueryParams=void 0,this.meetingEventId=0,this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,l.f)().then((()=>this._hasSetup=!0)),this.urlQueryParams=(0,a.O1)(),this.getMeetingEventId(),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((s=void 0)||(s=Promise))((function(e,i){function a(e){try{r(o.next(e))}catch(e){i(e)}}function l(e){try{r(o.throw(e))}catch(e){i(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(a,l)}r((o=o.apply(t,n||[])).next())}));var t,n,s,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,r.H)())||void 0===e?void 0:e.expiration_date.expired)return s.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,c.OR)(d.W.schedule_meeting_event),!(0,c.H)({pageId:d.W.schedule_meeting_event,viewType:"Edit"},!1))return s.dy`<no-page-entry-component></no-page-entry-component>`}return s.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-schedule CLIENT_ID="${this.clientId}" meetingEventId="${this.meetingEventId}" isEdit></attendance-setup-form-schedule>
      </div>
    `}firstUpsubgroupd(){}getMeetingEventId(){let e=(0,a.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};u([(0,o.Cb)({type:Object}),b("design:type",Object)],p.prototype,"urlQueryParams",void 0),u([(0,o.Cb)({type:String}),b("design:type",String)],p.prototype,"email",void 0),u([(0,o.Cb)({type:Number}),b("design:type",Number)],p.prototype,"mId",void 0),u([(0,o.Cb)({type:Number}),b("design:type",Number)],p.prototype,"clientId",void 0),u([(0,o.Cb)({type:Number}),b("design:type",Number)],p.prototype,"meetingEventId",void 0),u([(0,o.Cb)({type:Boolean}),b("design:type",Boolean)],p.prototype,"_hasSetup",void 0),u([(0,o.Cb)({type:Boolean}),b("design:type",Boolean)],p.prototype,"_pageButtonAccess",void 0),p=u([(0,o.Mo)("attendance-setup-form-edit-schedule"),b("design:paramtypes",[])],p)}},e=>(e.O(0,[5744,2185,9674,7708,1109,6236,8867,214,1354,3712],(()=>(223,e(e.s=223)))),e.O())])));
//# sourceMappingURL=edit-schedule.js.map