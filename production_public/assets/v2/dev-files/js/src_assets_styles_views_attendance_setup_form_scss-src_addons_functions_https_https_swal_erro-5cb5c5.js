"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-5cb5c5"],{3076:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>i,https_swal_error_format:()=>s});const i="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",s=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?i:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.r(t),n.d(t,{tokenLogin:()=>d,verifyToken:()=>l});var i=n(8485),s=n(7270),o=n(7052),r=n(1942),a=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};const l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const l=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,r.get_cookie)(d),m=JSON.stringify({token:(0,o.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,r.get_cookie)(d+"_date"))))return u;yield(0,s.http)(l,{method:"POST",body:m},!0).then((i=>a(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,o.base64Encode)(String(i.jsonData.token));(0,r.set_cookies)(d,e,10),(0,r.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield c(e,t,n)}))))})),c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",l=n,c=JSON.stringify({email:e,id:t});yield(0,s.http)(a,{method:"POST",body:c},!0).then((e=>{if(e.jsonData.token){const t=(0,o.base64Encode)(String(e.jsonData.token));(0,r.set_cookies)(l,t,10),(0,r.set_cookies_minutes)(l+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const i=(0,o.base64Encode)(String(t)),s=n;window.supersecret={unknowable:{ops:{email:e,id:i,cookieName:s}}},""==(0,r.get_cookie)(s)?yield c(e,i,n):yield l(e,i,n)}))},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>i,urlQueryParamsGet:()=>s,urlQueryParamsGetAll:()=>o,urlQueryParamsJoin:()=>r});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let i=null;for(const t in n)t===e&&(i=n[t]);return i},o=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const i in e)n+=1,t+=`${n>1?"&":""}${i}=${e[i]}`;return t}},2218:(e,t,n)=>{n.r(t),n.d(t,{GET_AttendanceSchedule:()=>a});var i=n(8485),s=n(7270),o=n(4492),r=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,r.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,l=yield(0,s.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{o(c.next(e))}catch(e){t(e)}}function s(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}o((c=c.apply(n,a||[])).next())}));var n,a,l,c}},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>a});var i=n(5862),s=n(9662),o=(n(9975),n(6788),function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return i.html`
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
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};a.styles=[i.css`
      :host {
        display: block;
      }
    `],o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"name",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"label",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"selected",void 0),o([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"value",void 0),o([(0,s.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"isSelected",void 0),a=o([(0,s.customElement)("switch-input")],a)},8693:(e,t,n)=>{n.r(t),n.d(t,{AttendanceSetupFormEditLinks:()=>c});var i=n(5862),s=n(9662),o=(n(2715),n(8485)),r=n(4672),a=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.LitElement{constructor(){super(),this.meetingEventId=0}connectedCallback(){super.connectedCallback(),this.getMeetingEventId()}disconnectedCallback(){}render(){return i.html`
      <link-button isblockcontent="false" aClass="" raised bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${o.CONSTANTS.URLS.PDB_CLIENT}settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
    `}firstUpdated(){}getMeetingEventId(){let e=(0,r.urlQueryParamsGet)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"meetingEventId",void 0),c=a([(0,s.customElement)("attendance-setup-form-edit-links"),l("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_https_https_swal_erro-5cb5c5.js.map