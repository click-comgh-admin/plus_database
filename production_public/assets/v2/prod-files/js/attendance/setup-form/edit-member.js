"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3670],{2486:(e,t,i)=>{i.d(t,{N:()=>n});const n=e=>{const t=String(e).toLowerCase();return"1"===t||"true"===t||!0===e}},1801:(e,t,i)=>{i.d(t,{a:()=>o,w:()=>s});var n=i(6909),r=i(7202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.J)(e.regionId):(0,r.A)(),districtId:"districtId"in e?(0,n.A)(e.districtId):(0,n.W)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,r.A)(),districtId:(0,n.W)(),location:"-"}}},9492:(e,t,i)=>{function n(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function r(){return{id:0,name:"-",short:"-",code:"-"}}i.d(t,{Q:()=>r,V:()=>n})},6909:(e,t,i)=>{i.d(t,{A:()=>r,W:()=>o});var n=i(7202);function r(e){return{id:Number(e.id),regionId:"regionId"in e?(0,n.J)(e.regionId):(0,n.A)(),location:String(e.location)}}function o(){return{id:0,regionId:(0,n.A)(),location:"-"}}},7202:(e,t,i)=>{function n(e){return{id:Number(e.id),location:String(e.location)}}function r(){return{id:0,location:"-"}}i.d(t,{A:()=>r,J:()=>n})},1551:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(2486),r=i(1801),o=i(9492),s=i(6909),a=i(7202);function l(e){return{id:Number(e.id),regionId:"regionId"in e?(0,a.J)(e.regionId):(0,a.A)(),districtId:"districtId"in e?(0,s.A)(e.districtId):(0,s.W)(),location:String(e.location)}}function c(e,t=""){return String(null===e?t:e)}function d(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:c(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:c(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),editable:(0,n.N)(e.editable),profileResume:String(e.profileResume),profileIdentification:String(e.profileIdentification),archived:(0,n.N)(e.archived),identification:String(e.identification),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,o.V)(e.countryInfo):(0,o.Q)(),regionInfo:"regionInfo"in e?(0,a.J)(e.regionInfo):(0,a.A)(),districtInfo:"districtInfo"in e?(0,s.A)(e.districtInfo):(0,s.W)(),constituencyInfo:"constituencyInfo"in e?(0,r.a)(e.constituencyInfo):(0,r.w)(),electoralareaInfo:"electoralareaInfo"in e?l(e.electoralareaInfo):{id:0,regionId:(0,a.A)(),districtId:(0,s.W)(),location:"-"}}}},6637:(e,t,i)=>{i.d(t,{n:()=>a});var n=i(771),r=i(7270),o=i(596),s=i(3600);function a(e=null,t=""){return i=this,a=void 0,c=function*(){const i=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new o.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(n,r)}o((c=c.apply(i,a||[])).next())}));var i,a,l,c}},6656:(e,t,i)=>{i.d(t,{E:()=>a});var n=i(771),r=i(7270),o=i(596),s=i(3600);function a(e=null,t="",i=!1){return a=this,l=void 0,d=function*(){const a=n.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,l=n.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,c=(0,s.Ie)(),d=i?l:a,u=yield(0,r.d)(d,{method:"GET",headers:{Authorization:"Token "+c.token}},!0);try{return new o.H("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new o.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{r(d.next(e))}catch(e){t(e)}}function n(e){try{r(d.throw(e))}catch(e){t(e)}}function r(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(i,n)}r((d=d.apply(a,l||[])).next())}));var a,l,c,d}},2461:(e,t,i)=>{var n=i(9392),r=i(1936),o=(i(5185),i(5248),function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"name",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"value",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),o([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),o([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"id",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),o([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),o([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),o([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),o([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=o([(0,r.Mo)("file-input")],a)},5866:(e,t,i)=>{var n=i(9755),r=i(9392),o=i(1936),s=(i(686),function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=n(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let i=!1;return this.value.forEach((e=>{const n=e.id;i=t===n})),e.selected=i,e}))}render(){return this.multiple?this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:n(this.value.map((t=>{const i=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+i+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const i=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,n(".select2-search__field").on("keyup",(function(e){n(i.selectSelector).empty(),i.startSearchPage=0})),i.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,i=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{n(e).select2({closeOnSelect:!1,placeholder:this.label}),n(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let r={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)r[e]=this.ajaxHeader[e];this.selectSelector.forEach((o=>{n(o).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(r){const o=function(r,o){return i=isNaN(r.page)?0:r.page,i=0===i?i:i*t,n(".select2-search__field").on("keyup",(function(r){n(e.selectSelector).empty(),i=0,t=0})),i}(r),s=function(i,r){let o=isNaN(i.page)?1:i.page+1;return o=0===o?1:o,n(".select2-search__field").on("keyup",(function(i){n(e.selectSelector).empty(),o=0,t=0})),o}(r);let a={search:r.term,start:o,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:r,processResults:(e,i)=>{const n=null===this.ajaxFetchProcessResponse?this._processResults(e,i):this.ajaxFetchProcessResponse(e,i);return t+=n.results.length,{results:n.results,pagination:{more:t<n.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{i=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const i=e;t.page=t.page||0;let n=[];if(!1===i.error){var r=i.data;for(let e=0;e<r.length;e++){const t=r[e],i={id:t.id,text:t.fullName};n.includes(i)||n.push(i)}}return this.totalShowing+=n.length,{results:n,total:i.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let i=[];for(const e of t){let t=e;const n=Number.isNaN(t.value)?0:Number(t.value);i.includes(n)||i.push(n)}this.currentValue=i,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",i)}createRenderRoot(){return this}};l.styles=[r.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,o.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),s([(0,o.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),s([(0,o.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),s([(0,o.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),s([(0,o.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),s([(0,o.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),s([(0,o.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),s([(0,o.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,o.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,o.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,o.Mo)("select-input")],l)},3591:(e,t,i)=>{i.r(t),i.d(t,{AttendanceSetupFormEditMember:()=>k}),i(3683),i(4657);var n=i(4108),r=i(9392),o=i(1936),s=i(5458),a=(i(5248),i(6811),i(3690),i(1854),i(2461),i(2262)),l=i(6637),c=i(2218),d=i(4672),u=i(6455),p=i.n(u),h=i(771),m=i(7270),f=i(596),b=i(8967),y=i(3600),g=function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function a(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};i(5866);var v,S,w=function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function a(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))},_=i(1551),A=i(6656),$=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function s(e){try{l(n.next(e))}catch(e){o(e)}}function a(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((n=n.apply(e,t||[])).next())}))};let C=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__memberUser=null,this.__schedule=null,this.__scheduleMembers=null,this._members=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _memberUser(e){this.__memberUser=e,this.requestUpdate()}get _memberUser(){return this.__memberUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?r.dy`${this.scheduleMember}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleMember(){return null===this._scheduleMembers?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleMembers?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Member</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._scheduleMembers.results.length>0?r.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Member
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
                ${this.getMeetingAttendanceMembers}
              </tbody>
            </table>
          </div>
        </div>
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceMembers(){return r.dy`
      ${this._scheduleMembers.results.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,s.C)(this.getMember(e.memberId),r.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceMember}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return r.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Member</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Member!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member">
                <div class="p-0 m-0" show-memberField="all">
                  ${this.memberFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Member" raised class="button" @click="${this.submitForm}">
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
    `}get memberField(){let e={};const t=(0,y.Ie)();return e.Authorization="Token "+t.token,r.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Member</h4>
            <select-input class="w-100" id="memberId" name="memberId" label="Select User"
              .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
              .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
              ajaxFetchUrl="${h.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
          </div>
        </div>
      </div>
    `}memberFieldDefault(e){return r.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.memberField}
        memberField-id="${e}" no_delete></multiple-widgets>
    `}addMemberField(){const e=this.showMemberFieldAllSelector.children.length,t=(0===e?-1:Number(this.showMemberFieldAllSelector.children[e-1].getAttribute("memberField-id")))+1,i=document.createElement("multiple-widgets");i.setAttribute("class","col-md-12 col-lg-12 mb-3"),i.setAttribute("memberField-id",String(t)),this.showMemberFieldAllSelector.append(i);const n=this.showMemberFieldAllSelector.querySelectorAll('multiple-widgets[memberField-id="'+t+'"]'),r=this.memberField.strings.join("");setTimeout((()=>{n.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}processClientUserSearch(e,t){t.page=t.page||0;const i=e.count,n=e.results,r=document.querySelector('[id="memberId"]');let o=[];if(o[0]={id:"all",text:"All Members"},i>0){var s=n;for(let e=0;e<s.length;e++){const t=s[e],i={id:t.id,text:t.firstname+" "+t.surname};o.includes(i)||o.push(i)}}return{results:o,total:i,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.T(e)}))}submitForm(e){return I(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return w(this,void 0,void 0,(function*(){const e=(0,y.Ie)(),t=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member",i=document.querySelector('[make-general-posts="add-schedule-member"]'),n=new FormData(i);return p().fire({title:"Add Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>w(this,void 0,void 0,(function*(){return yield(0,m.d)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new f.H("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,b.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),i=n.response.success}i&&p().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceMember(e){return I(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return g(this,void 0,void 0,(function*(){const t=(0,y.Ie)(),i=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member/"+e,n={};return p().fire({title:"Remove Member?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,m.d)(i,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new f.H("delete",e,!1),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,b.T)(e);p().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let i=e;i.error=t;const n=new f.H("delete",i,!0);return n.postForm,n}})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),i=n.response.success}p().fire({title:t,icon:i?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,d.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return I(this,void 0,void 0,(function*(){const e=yield(0,c.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleMember(){return I(this,void 0,void 0,(function*(){const e=yield(0,l.n)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMembers(){return I(this,void 0,void 0,(function*(){const e=yield(0,A.E)();let t=[];null===e?t.push({id:0,firstname:"** ",middlename:"NOT FOUND",surname:" **",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._members,...t),this._members=i}))}getMember(e){return I(this,void 0,void 0,(function*(){const t=yield(0,A.E)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,_.Z)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};C.styles=[r.iv`
   :host { display: block; }
  `],$([(0,o.Cb)({type:Number}),x("design:type",Number)],C.prototype,"CLIENT_ID",void 0),$([(0,o.Cb)({type:Number}),x("design:type",Number)],C.prototype,"startSearchPage",void 0),$([(0,o.Cb)({type:Array}),x("design:type",Array)],C.prototype,"_members",void 0),$([(0,o.Cb)({type:Array}),x("design:type","function"==typeof(v="undefined"!=typeof Array&&Array)?v:Object)],C.prototype,"_data",void 0),$([(0,o.Cb)({type:Object}),x("design:type",Object)],C.prototype,"urlQueryParams",void 0),$([(0,o.Cb)({type:Number}),x("design:type",Number)],C.prototype,"meetingEventId",void 0),$([(0,o.IO)('[show-memberField="all"]'),x("design:type","function"==typeof(S="undefined"!=typeof Element&&Element)?S:Object)],C.prototype,"showMemberFieldAllSelector",void 0),C=$([(0,o.Mo)("attendance-setup-form-member"),x("design:paramtypes",[])],C),i(8693);var N=i(6979),j=i(8092),M=i(1302),P=i(7108),R=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},E=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let k=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,i=void 0,o=function*(){e.connectedCallback.call(this),(0,N.f)().then((()=>this._hasSetup=!0)),yield(0,n.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(s,a)}l((o=o.apply(t,i||[])).next())}));var t,i,r,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,j.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,M.OR)(P.W.schedule_meeting_event),!(0,M.H)({pageId:P.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-member CLIENT_ID="${this.clientId}"></attendance-setup-form-member>
      </div>
    `}firstUpmemberd(){}createRenderRoot(){return this}};R([(0,o.Cb)({type:String}),E("design:type",String)],k.prototype,"email",void 0),R([(0,o.Cb)({type:Number}),E("design:type",Number)],k.prototype,"mId",void 0),R([(0,o.Cb)({type:Number}),E("design:type",Number)],k.prototype,"clientId",void 0),R([(0,o.Cb)({type:Boolean}),E("design:type",Boolean)],k.prototype,"_hasSetup",void 0),R([(0,o.Cb)({type:Boolean}),E("design:type",Boolean)],k.prototype,"_pageButtonAccess",void 0),k=R([(0,o.Mo)("attendance-setup-form-edit-member"),E("design:paramtypes",[])],k)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,7708,712,1109,6236,8867,214,3901,5836,3712],(()=>(3591,e(e.s=3591)))),e.O())])));
//# sourceMappingURL=edit-member.js.map