"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6084],{4843:(e,t,o)=>{o.d(t,{S:()=>a});var i=o(771),r=o(7270),n=o(596),s=o(3600);function a(e=null,t=""){return o=this,a=void 0,c=function*(){const o=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new n.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new n.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{n(c.next(e))}catch(e){t(e)}}function r(e){try{n(c.throw(e))}catch(e){t(e)}}function n(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(i,r)}n((c=c.apply(o,a||[])).next())}));var o,a,l,c}},2892:(e,t,o)=>{o.d(t,{c:()=>a});var i=o(771),r=o(7270),n=o(596),s=o(3600);function a(e=null,t=""){return o=this,a=void 0,c=function*(){const o=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,l=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new n.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new n.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{n(c.next(e))}catch(e){t(e)}}function r(e){try{n(c.throw(e))}catch(e){t(e)}}function n(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(i,r)}n((c=c.apply(o,a||[])).next())}));var o,a,l,c}},2461:(e,t,o)=>{var i=o(9392),r=o(1936),n=(o(5185),o(5248),function(e,t,o,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,o,s):r(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:i.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:i.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:i.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:i.dy`
          <div class="form-input border">
            ${this.hasLabel?i.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:i.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};n([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"name",void 0),n([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),n([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"value",void 0),n([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),n([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),n([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"id",void 0),n([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),n([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),n([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),n([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),n([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),n([(0,r.Cb)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),n([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=n([(0,r.Mo)("file-input")],a)},5866:(e,t,o)=>{var i=o(9755),r=o(9392),n=o(1936),s=(o(686),function(e,t,o,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,o,s):r(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let o=!1;return this.value.forEach((e=>{const i=e.id;o=t===i})),e.selected=o,e}))}render(){return this.multiple?this.required?r.dy`
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
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const o=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+o+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const o=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(o.selectSelector).empty(),o.startSearchPage=0})),o.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,o=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let r={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)r[e]=this.ajaxHeader[e];this.selectSelector.forEach((n=>{i(n).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(r){const n=function(r,n){return o=isNaN(r.page)?0:r.page,o=0===o?o:o*t,i(".select2-search__field").on("keyup",(function(r){i(e.selectSelector).empty(),o=0,t=0})),o}(r),s=function(o,r){let n=isNaN(o.page)?1:o.page+1;return n=0===n?1:n,i(".select2-search__field").on("keyup",(function(o){i(e.selectSelector).empty(),n=0,t=0})),n}(r);let a={search:r.term,start:n,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:r,processResults:(e,o)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,o):this.ajaxFetchProcessResponse(e,o);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{o=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const o=e;t.page=t.page||0;let i=[];if(!1===o.error){var r=o.data;for(let e=0;e<r.length;e++){const t=r[e],o={id:t.id,text:t.fullName};i.includes(o)||i.push(o)}}return this.totalShowing+=i.length,{results:i,total:o.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let o=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);o.includes(i)||o.push(i)}this.currentValue=o,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",o)}createRenderRoot(){return this}};l.styles=[r.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,n.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,n.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,n.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),s([(0,n.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,n.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),s([(0,n.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),s([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,n.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),s([(0,n.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),s([(0,n.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),s([(0,n.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),s([(0,n.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),s([(0,n.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),s([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,n.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,n.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,n.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,n.Mo)("select-input")],l)},9358:(e,t,o)=>{o.r(t),o.d(t,{AttendanceSetupFormEditGroup:()=>I}),o(3683),o(4657);var i=o(4108),r=o(9392),n=o(1936),s=o(5458),a=(o(5248),o(6811),o(3690),o(1854),o(2461),o(2262)),l=o(4843),c=o(2218),d=o(4672),u=o(6455),p=o.n(u),h=o(771),m=o(7270),y=o(596),f=o(8967),g=o(3600),v=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function s(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};o(5866);var b,w,_=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function s(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))},S=o(2892),$=function(e,t,o,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,o,s):r(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function s(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};let A=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__groupUser=null,this.__schedule=null,this.__scheduleGroups=null,this._groups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _groupUser(e){this.__groupUser=e,this.requestUpdate()}get _groupUser(){return this.__groupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleGroup(),yield this.getGroups()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._schedule?r.dy`
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
      `:!0===this._schedule.success?r.dy`${this.scheduleGroup}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleGroup(){return null===this._scheduleGroups?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleGroups?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Group</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._scheduleGroups.results.length>0?r.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Meeting Group
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
                ${this.getMeetingAttendanceGroups}
              </tbody>
            </table>
          </div>
        </div>
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceGroups(){return r.dy`
      ${this._scheduleGroups.results.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,s.C)(this.getGroup(e.groupId),r.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceGroup}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Group</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Group!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-group">
                <div class="p-0 m-0" show-groupField="all">
                  ${this.groupFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Group" raised class="button" @click="${this.submitForm}">
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
    `}get groupField(){const e=this._groups.map((e=>r.dy`<mwc-list-item value="${e.id}">${e.group}</mwc-list-item>`));return r.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Group</h4>
            <mwc-select name="groupId" class="w-full" id="groupId" label="Select Group" outlined required>
              <mwc-list-item value="">Select Group</mwc-list-item>
              <mwc-list-item value="all">All Groups</mwc-list-item>
              ${r.dy`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}groupFieldDefault(e){return r.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.groupField}
        groupField-id="${e}" no_delete></multiple-widgets>
    `}addGroupField(){const e=this.showGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showGroupFieldAllSelector.children[e-1].getAttribute("groupField-id")))+1,o=document.createElement("multiple-widgets");o.setAttribute("class","col-md-12 col-lg-12 mb-3"),o.setAttribute("groupField-id",String(t)),this.showGroupFieldAllSelector.append(o);const i=this.showGroupFieldAllSelector.querySelectorAll('multiple-widgets[groupField-id="'+t+'"]'),r=this.groupField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=r}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.T(e)}))}submitForm(e){return x(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return _(this,void 0,void 0,(function*(){const e=(0,g.Ie)(),t=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group",o=document.querySelector('[make-general-posts="add-schedule-group"]'),i=new FormData(o);return p().fire({title:"Add Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>_(this,void 0,void 0,(function*(){return yield(0,m.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new y.H("post",e,!1,o),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((o=>{let i={error:t.id+": "+o};"non_field_errors"===t.id&&(i={error:o}),e.push(i)}))}));const t=(0,f.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),o=i.response.success}o&&p().fire({title:t,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceGroup(e){return x(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),o=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group/"+e,i={};return p().fire({title:"Remove Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,m.d)(o,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new y.H("delete",e,!1),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,f.T)(e);p().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let o=e;o.error=t;const i=new y.H("delete",o,!0);return i.postForm,i}})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),o=i.response.success}p().fire({title:t,icon:o?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,d.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return x(this,void 0,void 0,(function*(){const e=yield(0,c.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleGroup(){return x(this,void 0,void 0,(function*(){const e=yield(0,l.S)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroups(){return x(this,void 0,void 0,(function*(){const e=yield(0,S.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const o=[];o.push(...this._groups,...t),this._groups=o}))}getGroup(e){return x(this,void 0,void 0,(function*(){const t=yield(0,S.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};A.styles=[r.iv`
   :host { display: block; }
  `],$([(0,n.Cb)({type:Number}),C("design:type",Number)],A.prototype,"CLIENT_ID",void 0),$([(0,n.Cb)({type:Number}),C("design:type",Number)],A.prototype,"startSearchPage",void 0),$([(0,n.Cb)({type:Array}),C("design:type",Array)],A.prototype,"_groups",void 0),$([(0,n.Cb)({type:Array}),C("design:type","function"==typeof(b="undefined"!=typeof Array&&Array)?b:Object)],A.prototype,"_data",void 0),$([(0,n.Cb)({type:Object}),C("design:type",Object)],A.prototype,"urlQueryParams",void 0),$([(0,n.Cb)({type:Number}),C("design:type",Number)],A.prototype,"meetingEventId",void 0),$([(0,n.IO)('[show-groupField="all"]'),C("design:type","function"==typeof(w="undefined"!=typeof Element&&Element)?w:Object)],A.prototype,"showGroupFieldAllSelector",void 0),A=$([(0,n.Mo)("attendance-setup-form-group"),C("design:paramtypes",[])],A),o(8693);var N=o(6979),j=o(8092),k=o(1302),E=o(7108),R=function(e,t,o,i){var r,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,o,s):r(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let I=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,o=void 0,n=function*(){e.connectedCallback.call(this),(0,N.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function a(e){try{l(n.throw(e))}catch(e){i(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof r?o:new r((function(e){e(o)}))).then(s,a)}l((n=n.apply(t,o||[])).next())}));var t,o,r,n}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,j.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,k.OR)(E.W.schedule_meeting_event),!(0,k.H)({pageId:E.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-group CLIENT_ID="${this.clientId}"></attendance-setup-form-group>
      </div>
    `}firstUpgroupd(){}createRenderRoot(){return this}};R([(0,n.Cb)({type:String}),P("design:type",String)],I.prototype,"email",void 0),R([(0,n.Cb)({type:Number}),P("design:type",Number)],I.prototype,"mId",void 0),R([(0,n.Cb)({type:Number}),P("design:type",Number)],I.prototype,"clientId",void 0),R([(0,n.Cb)({type:Boolean}),P("design:type",Boolean)],I.prototype,"_hasSetup",void 0),R([(0,n.Cb)({type:Boolean}),P("design:type",Boolean)],I.prototype,"_pageButtonAccess",void 0),I=R([(0,n.Mo)("attendance-setup-form-edit-group"),P("design:paramtypes",[])],I)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,7708,912,1109,6236,8867,214,3901,5836,3712],(()=>(9358,e(e.s=9358)))),e.O())])));
//# sourceMappingURL=edit-group.js.map