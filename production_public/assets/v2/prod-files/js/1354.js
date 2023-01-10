/*! For license information please see 1354.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1354],{8967:(e,t,i)=>{i.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let i=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{i+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,i)=>{i.d(t,{B:()=>a});var n=i(771),o=i(7270),l=i(7052),s=i(1942),r=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};const c=(e,t,i)=>r(void 0,void 0,void 0,(function*(){const r=n.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=i,a=JSON.stringify({email:e,id:t});yield(0,o.d)(r,{method:"POST",body:a},!0).then((e=>{if(e.jsonData.token){const t=(0,l.h)(String(e.jsonData.token));(0,s.Ad)(c,t,10),(0,s.vh)(c+"_date",(new Date).toUTCString(),10)}}))})),a=(e,t,i)=>r(void 0,void 0,void 0,(function*(){const a=(0,l.h)(String(t)),d=i;window.supersecret={unknowable:{ops:{email:e,id:a,cookieName:d}}},""==(0,s.Hl)(d)?yield c(e,a,i):yield((e,t,i)=>r(void 0,void 0,void 0,(function*(){const a=n.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=i,m=(0,s.Hl)(d),u=JSON.stringify({token:(0,l.t)(m)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.Hl)(d+"_date"))))return m;yield(0,o.d)(a,{method:"POST",body:u},!0).then((n=>r(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,l.h)(String(n.jsonData.token));(0,s.Ad)(d,e,10),(0,s.vh)(d+"_date",(new Date).toUTCString(),10)}else yield c(e,t,i)}))))})))(e,a,i)}))},5663:(e,t,i)=>{i.d(t,{p:()=>r});var n=i(771),o=i(7270),l=i(596),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),r=yield(0,o.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},6404:(e,t,i)=>{i.d(t,{E:()=>r});var n=i(771),o=i(7270),l=i(596),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),r=yield(0,o.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},7790:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(771),o=i(7270),l=i(596),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),r=yield(0,o.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},28:(e,t,i)=>{i.d(t,{B:()=>r});var n=i(771),o=i(7270),l=i(596),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),r=yield(0,o.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},2218:(e,t,i)=>{i.d(t,{u:()=>r});var n=i(771),o=i(7270),l=i(596),s=i(3600);function r(e=null,t=""){return i=this,r=void 0,a=function*(){const i=(0,s.Ie)(),r=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(r,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new l.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new l.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{l(a.next(e))}catch(e){t(e)}}function o(e){try{l(a.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(n,o)}l((a=a.apply(i,r||[])).next())}));var i,r,c,a}},6224:(e,t,i)=>{i.d(t,{p:()=>r});var n=i(771),o=i(7270),l=i(596),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),r=yield(0,o.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},72:(e,t,i)=>{i.d(t,{L:()=>r});var n=i(771),o=i(7270),l=i(596),s=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),r=yield(0,o.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function l(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(o,l)}s((c=c.apply(t,i||[])).next())}));var t,i,r,c}},2461:(e,t,i)=>{var n=i(9392),o=i(1936),l=(i(5185),i(5248),function(e,t,i,n){var o,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(l<3?o(s):l>3?o(t,i,s):o(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?n.dy`
          <div class="form-input border">
            ${this.hasLabel?n.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:n.dy`
          <div class="form-input border">
            ${this.hasLabel?n.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?n.dy`
          <div class="form-input border">
            ${this.hasLabel?n.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:n.dy`
          <div class="form-input border">
            ${this.hasLabel?n.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};l([(0,o.Cb)({type:String}),s("design:type",String)],r.prototype,"name",void 0),l([(0,o.Cb)({type:String}),s("design:type",String)],r.prototype,"label",void 0),l([(0,o.Cb)({type:String}),s("design:type",String)],r.prototype,"value",void 0),l([(0,o.Cb)({type:String}),s("design:type",String)],r.prototype,"accept",void 0),l([(0,o.Cb)({type:Number}),s("design:type",Number)],r.prototype,"randomID",void 0),l([(0,o.Cb)({type:String}),s("design:type",String)],r.prototype,"id",void 0),l([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],r.prototype,"required",void 0),l([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],r.prototype,"hasLabel",void 0),l([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],r.prototype,"multiple",void 0),l([(0,o.Cb)({type:Number}),s("design:type",Number)],r.prototype,"startNumber",void 0),l([(0,o.Cb)({type:Number}),s("design:type",Number)],r.prototype,"rowsPerPage",void 0),l([(0,o.Cb)({type:Number}),s("design:type",Number)],r.prototype,"totalShowing",void 0),l([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],r.prototype,"showSelectorLoaded",void 0),r=l([(0,o.Mo)("file-input")],r)},3690:(e,t,i)=>{var n=i(9392),o=i(1936),l=(i(5185),i(5142),function(e,t,i,n){var o,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(l<3?o(s):l>3?o(t,i,s):o(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};r.styles=[n.iv`
      :host {
        display: block;
      }
    `],l([(0,o.Cb)({type:String}),s("design:type",String)],r.prototype,"name",void 0),l([(0,o.Cb)({type:String}),s("design:type",String)],r.prototype,"label",void 0),l([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],r.prototype,"selected",void 0),l([(0,o.Cb)({type:String}),s("design:type",String)],r.prototype,"value",void 0),l([(0,o.Cb)({type:Boolean}),s("design:type",Boolean)],r.prototype,"isSelected",void 0),r=l([(0,o.Mo)("switch-input")],r)},7108:(e,t,i)=>{i.d(t,{W:()=>n});const n={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},4978:(e,t,i)=>{var n,o=i(9392),l=i(1936),s=(i(3313),i(9261),i(2935),i(5248),i(3690),i(2461),i(28)),r=i(6224),c=i(72),a=i(6404),d=i(5663),m=i(6455),u=i.n(m),h=i(771),p=i(7270),y=i(596),v=i(8967),f=i(3600),g=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))},w=i(2218),b=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))},A=i(7790),S=i(7725),$=function(e,t,i,n){var o,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(l<3?o(s):l>3?o(t,i,s):o(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e,t,i,n){return new(i||(i=Promise))((function(o,l){function s(e){try{c(n.next(e))}catch(e){l(e)}}function r(e){try{c(n.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}c((n=n.apply(e,t||[])).next())}))};let L=class extends o.oi{constructor(){super(),this.__schedule=null,this.CLIENT_ID=0,this.meetingEventId=0,this.isEdit=!1,this._type=[],this._memberType=[],this.selectedBranchId=0,this._branches=[],this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._meetingEventLinkTypes=[],this._meetingEventLocations=[],this._data=[]}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return T(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,S.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,f.Ie)()],yield this.getTypes(),yield this.getBranches(),yield this.getMemberTypes(),yield this.getMemberCategories(),yield this.getAttendanceSchedule(),yield this.getMeetingEventLinkTypes(),yield this.getMeetingEventLocations()}))}disconnectedCallback(){}render(){let e=null;e=null!==this._schedule&&void 0!==this._schedule.data?Array.isArray(this._schedule.data)?this._schedule.data.length>0?this._schedule.data[0]:{}:this._schedule.data:{};let t=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),void 0===e.meetingLocation||e.meetingLocation,o.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Schedule</h1>
                  <h3 class="h3">Create New Meeting/ Event Schedule!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="add-schedule" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Schedule Type</h4>
                    ${void 0===e.type?o.dy`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((e=>o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.dy`
                      <mwc-select name="type" class="w-full" id="type" label="Select Schedule Type" outlined required>
                        <mwc-list-item value="0">Select Schedule Type</mwc-list-item>
                        ${this._type.map((t=>e.type===t.id?o.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Type</h4>
                    ${void 0===e.type?o.dy`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((e=>o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.dy`
                      <mwc-select name="memberType" class="w-full" id="memberType" label="Select Member Type" outlined required>
                        <mwc-list-item value="0">Select Member Type</mwc-list-item>
                        ${this._memberType.map((t=>e.type===t.id?o.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Meeting/ Event</h4> 
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="${void 0===e.id?"":e.name}" label="Enter Meeting/ Event" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${1===t?o.dy`
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((t=>void 0===e.branchId?o.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`:e.branchId.id===t.id?o.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      `:o.dy`
                        ${this._branches.map((e=>{if(e.id===t)return o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      `}
                    </mwc-select>
                    <!-- ${void 0===e.branchId?o.dy`
                      <mwc-select name="branchId" class="w-full" id="branchId" label="Select Branch" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.dy`
                      <mwc-select name="branchId" class="w-full" id="branchId" label="Select Branch" outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((t=>e.branchId.id===t.id?o.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `} -->
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Memeber Category</h4>
                    ${void 0===e.memberCategoryId?o.dy`
                      <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Memeber Category" outlined required>
                        <mwc-list-item value="0">Select Memeber Category</mwc-list-item>
                        ${this._memberCategories.map((e=>o.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.dy`
                      <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" label="Select Memeber Category" outlined required>
                        <mwc-list-item value="0">Select Memeber Category</mwc-list-item>
                        ${this._memberCategories.map((t=>e.memberCategoryId.id===t.id?o.dy`<mwc-list-item value="${t.id}" selected>${t.category}</mwc-list-item>`:o.dy`<mwc-list-item value="${t.id}">${t.category}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Span (in days) <span class="text-xs text-akwaaba-orange-light">How long the meeting/ event will last (default is 1 day)</span></h4> 
                    <mwc-textfield name="meetingSpan" type="number" min="1" class="w-full" id="meetingSpan" value="${void 0===e.id?"1":String(e.meetingSpan)}" label="Select Meeting Span" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Start Time</h4> 
                    <mwc-textfield name="startTime" type="time" class="w-full" id="startTime" value="${void 0===e.id?"":String(e.startTime)}" label="Select Start Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Close Time</h4> 
                    <mwc-textfield name="closeTime" type="time" class="w-full" id="closeTime" value="${void 0===e.id?"":String(e.closeTime)}" label="Select Close Time" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Lateness Time</h4> 
                    <mwc-textfield name="latenessTime" type="time" class="w-full" id="latenessTime" value="${void 0===e.id?"":String(e.latenessTime)}" label="Select Lateness Time" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Is It Recuring?</h4> 
                    <switch-input name="isRecuring" class="w-full" id="isRecuring" .selected="${void 0!==e.id&&e.isRecuring}" label="Is It Recuring?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Break-Time?</h4> 
                    <switch-input name="hasBreakTime" class="w-full" id="hasBreakTime" .selected="${void 0!==e.id&&e.hasBreakTime}" label="Any Break-Time?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Duty/ Work Reporting?</h4> 
                    <switch-input name="hasDuty" class="w-full" id="hasDuty" .selected="${void 0!==e.id&&e.hasDuty}" label="Any Duty/ Work Reporting?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Any Overtime?</h4> 
                    <switch-input name="hasOvertime" class="w-full" id="hasOvertime" .selected="${void 0!==e.id&&e.hasOvertime}" label="Any Overtime?" outlined required>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Meeting Location</h4>
                    ${void 0===e.meetingLocation?o.dy`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((e=>o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      </mwc-select>
                    `:o.dy`
                      <mwc-select name="meetingLocation" class="w-full" id="meetingLocation" label="Select Meeting Location" outlined required>
                        <mwc-list-item value="0">Select Meeting Location</mwc-list-item>
                        ${this._meetingEventLocations.map((t=>e.meetingLocation===t.id?o.dy`<mwc-list-item value="${t.id}" selected activated aria-selected="true">${t.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    `}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Virtual Meeting Link</h4> 
                    <mwc-textfield name="virtualMeetingLink" type="url" class="w-full" id="virtualMeetingLink" value="${e.virtualMeetingLink}" label="Enter Virtual Meeting Link" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Virtual Meeting Type</h4>
                    <mwc-select name="virtualMeetingType" class="w-full" id="virtualMeetingType" label="Select Virtual Meeting Type" outlined>
                      <mwc-list-item value="0">Select Virtual Meeting Type</mwc-list-item>
                      ${this._meetingEventLinkTypes.map((t=>e.virtualMeetingType===t.id?o.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Expected Monthly Attendance</h4> 
                    <mwc-textfield name="expectedMonthlyAttendance" type="number" class="w-full" id="expectedMonthlyAttendance"
                      value="${void 0===e.id?0:e.expectedMonthlyAttendance}" label="Enter Expected Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Active Monthly Attendance</h4>
                    <mwc-textfield name="activeMonthlyAttendance" type="number" class="w-full" id="activeMonthlyAttendance"
                      value="${void 0===e.id?0:e.activeMonthlyAttendance}" label="Enter Active Monthly Attendance" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Enter Agenda</h4>
                    <mwc-textarea name="agenda" rows="8" maxLength="5000" placeholder="Enter Agenda" charCounter="internal"
                      class="w-full" id="agenda" label="Enter Agenda" value="${void 0===e.id?"":e.agenda}" outlined required>
                    </mwc-textarea>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <h4 class="font-semibold my-2">Attach Agenda File <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="agendaFile" name="agendaFile" hasLabel label="Add Agenda File"></file-input>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="${void 0===e.id?"Create":"Update"} Schedule" raised class="button" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return T(this,void 0,void 0,(function*(){e.preventDefault(),void 0!==this._schedule&&!0===this.isEdit?yield function(e){return b(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),i=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/"+e,n=document.querySelector('[make-general-posts="add-schedule"]'),o=new FormData(n);return u().fire({title:"Update Schedule?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>b(this,void 0,void 0,(function*(){return yield(0,p.d)(i,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,n),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,v.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),i=n.response.success}i&&u().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.meetingEventId):yield function(){return g(this,void 0,void 0,(function*(){const e=(0,f.Ie)(),t=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule",i=document.querySelector('[make-general-posts="add-schedule"]'),n=new FormData(i);return u().fire({title:"Set Meeting/Event?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>g(this,void 0,void 0,(function*(){return yield(0,p.d)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new y.H("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,v.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),i=n.response.success}i&&u().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{if(n instanceof Object){const e=n.response;window.location.href=h.t.URLS.PDB_CLIENT+"attendance/v2/settings/schedule?meeting-event-id="+e.data.id}else window.location.reload()}),500)}}))}))}()}))}getAttendanceSchedule(){return T(this,void 0,void 0,(function*(){const e=yield(0,w.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getTypes(){return T(this,void 0,void 0,(function*(){const e=yield(0,s.B)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._type,...t),this._type=i}))}getMemberTypes(){return T(this,void 0,void 0,(function*(){const e=yield(0,A.Z)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberType,...t),this._memberType=i}))}getMeetingEventLinkTypes(){return T(this,void 0,void 0,(function*(){const e=yield(0,d.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._meetingEventLinkTypes,...t),this._meetingEventLinkTypes=i}))}getMeetingEventLocations(){return T(this,void 0,void 0,(function*(){const e=yield(0,a.E)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._meetingEventLocations,...t),this._meetingEventLocations=i}))}getBranches(){return T(this,void 0,void 0,(function*(){const e=yield(0,r.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._branches,...t),this._branches=i}))}getMemberCategories(){return T(this,void 0,void 0,(function*(){const e=yield(0,c.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberCategories,...t),this._memberCategories=i}))}createRenderRoot(){return this}};L.styles=[o.iv`
   :host { display: block; }
  `],$([(0,l.Cb)({type:Number}),_("design:type",Number)],L.prototype,"CLIENT_ID",void 0),$([(0,l.Cb)({type:Number}),_("design:type",Number)],L.prototype,"meetingEventId",void 0),$([(0,l.Cb)({type:Boolean}),_("design:type",Boolean)],L.prototype,"isEdit",void 0),$([(0,l.Cb)({type:Array}),_("design:type",Array)],L.prototype,"_type",void 0),$([(0,l.Cb)({type:Array}),_("design:type",Array)],L.prototype,"_memberType",void 0),$([(0,l.Cb)({type:Number}),_("design:type",Number)],L.prototype,"selectedBranchId",void 0),$([(0,l.Cb)({type:Array}),_("design:type",Array)],L.prototype,"_branches",void 0),$([(0,l.Cb)({type:Array}),_("design:type",Array)],L.prototype,"_userLoginInfo",void 0),$([(0,l.Cb)({type:Array}),_("design:type",Array)],L.prototype,"_activeBranchId",void 0),$([(0,l.Cb)({type:Array}),_("design:type",Array)],L.prototype,"_memberCategories",void 0),$([(0,l.Cb)({type:Array}),_("design:type",Array)],L.prototype,"_meetingEventLinkTypes",void 0),$([(0,l.Cb)({type:Array}),_("design:type",Array)],L.prototype,"_meetingEventLocations",void 0),$([(0,l.Cb)({type:Array}),_("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],L.prototype,"_data",void 0),L=$([(0,l.Mo)("attendance-setup-form-schedule"),_("design:paramtypes",[])],L)},4232:(e,t,i)=>{i.d(t,{OR:()=>s,hl:()=>c,pt:()=>l});var n=i(3692);const{I:o}=n.Al,l=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s=e=>void 0===e.strings,r={},c=(e,t=r)=>e._$AH=t},8082:(e,t,i)=>{i.d(t,{XM:()=>n.XM,Xe:()=>n.Xe,pX:()=>n.pX});var n=i(875)},3669:(e,t,i)=>{i.d(t,{a:()=>s});var n=i(3692),o=i(875),l=i(4232);const s=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,l.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n.Jb||t===n.Ld)return t;const i=e.element,s=e.name;if(e.type===o.pX.PROPERTY){if(t===i[s])return n.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(s))return n.Jb}else if(e.type===o.pX.ATTRIBUTE&&i.getAttribute(s)===t+"")return n.Jb;return(0,l.hl)(e),t}})}}]);
//# sourceMappingURL=1354.js.map