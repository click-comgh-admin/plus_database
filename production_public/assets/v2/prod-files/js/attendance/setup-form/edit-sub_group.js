"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6342],{8786:(e,t,o)=>{o.d(t,{s:()=>a});var i=o(771),n=o(7270),r=o(596),s=o(3600);function a(e=null,t=""){return o=this,a=void 0,c=function*(){const o=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,l=yield(0,n.d)(a,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function n(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(i,n)}r((c=c.apply(o,a||[])).next())}));var o,a,l,c}},2892:(e,t,o)=>{o.d(t,{c:()=>a});var i=o(771),n=o(7270),r=o(596),s=o(3600);function a(e=null,t=""){return o=this,a=void 0,c=function*(){const o=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,l=yield(0,n.d)(a,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function n(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(i,n)}r((c=c.apply(o,a||[])).next())}));var o,a,l,c}},9605:(e,t,o)=>{o.d(t,{U:()=>a});var i=o(771),n=o(7270),r=o(596),s=o(3600);function a(e=null,t=""){return o=this,a=void 0,c=function*(){const o=(0,s.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,l=yield(0,n.d)(a,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{r(c.next(e))}catch(e){t(e)}}function n(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(i,n)}r((c=c.apply(o,a||[])).next())}));var o,a,l,c}},2461:(e,t,o)=>{var i=o(9392),n=o(1936),r=(o(5185),o(5248),function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};r([(0,n.Cb)({type:String}),s("design:type",String)],a.prototype,"name",void 0),r([(0,n.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),r([(0,n.Cb)({type:String}),s("design:type",String)],a.prototype,"value",void 0),r([(0,n.Cb)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),r([(0,n.Cb)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),r([(0,n.Cb)({type:String}),s("design:type",String)],a.prototype,"id",void 0),r([(0,n.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),r([(0,n.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),r([(0,n.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),r([(0,n.Cb)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),r([(0,n.Cb)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),r([(0,n.Cb)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),r([(0,n.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=r([(0,n.Mo)("file-input")],a)},5866:(e,t,o)=>{var i=o(9755),n=o(9392),r=o(1936),s=(o(686),function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let o=!1;return this.value.forEach((e=>{const i=e.id;o=t===i})),e.selected=o,e}))}render(){return this.multiple?this.required?n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const o=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+o+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const o=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(o.selectSelector).empty(),o.startSearchPage=0})),o.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,o=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let n={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)n[e]=this.ajaxHeader[e];this.selectSelector.forEach((r=>{i(r).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(n){const r=function(n,r){return o=isNaN(n.page)?0:n.page,o=0===o?o:o*t,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),o=0,t=0})),o}(n),s=function(o,n){let r=isNaN(o.page)?1:o.page+1;return r=0===r?1:r,i(".select2-search__field").on("keyup",(function(o){i(e.selectSelector).empty(),r=0,t=0})),r}(n);let a={search:n.term,start:r,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:n,processResults:(e,o)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,o):this.ajaxFetchProcessResponse(e,o);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{o=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const o=e;t.page=t.page||0;let i=[];if(!1===o.error){var n=o.data;for(let e=0;e<n.length;e++){const t=n[e],o={id:t.id,text:t.fullName};i.includes(o)||i.push(o)}}return this.totalShowing+=i.length,{results:i,total:o.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let o=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);o.includes(i)||o.push(i)}this.currentValue=o,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",o)}createRenderRoot(){return this}};l.styles=[n.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),s([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),s([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),s([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),s([(0,r.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),s([(0,r.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),s([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),s([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,r.Mo)("select-input")],l)},1119:(e,t,o)=>{o.r(t),o.d(t,{AttendanceSetupFormEditSubGroup:()=>I}),o(3683),o(4657);var i=o(4108),n=o(9392),r=o(1936),s=o(5458),a=(o(5248),o(6811),o(3690),o(1854),o(2461),o(2262)),l=o(8786),c=o(2218),d=o(4672),u=o(6455),p=o.n(u),h=o(771),b=o(7270),m=o(596),y=o(8967),g=o(3600),f=function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};o(5866);var v,S,w=function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))},_=o(9605),$=o(2892),C=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};let N=class extends n.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__subgroupUser=null,this.__schedule=null,this.__scheduleSubGroups=null,this._groups=[],this._subgroups=[],this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _subgroupUser(e){this.__subgroupUser=e,this.requestUpdate()}get _subgroupUser(){return this.__subgroupUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleSubGroups(e){this.__scheduleSubGroups=e,this.requestUpdate()}get _scheduleSubGroups(){return this.__scheduleSubGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,d.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleSubGroup(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return n.dy`${this.schedule}`}get schedule(){return null===this._schedule?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?n.dy`${this.scheduleSubGroup}`:n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleSubGroup(){return null===this._scheduleSubGroups?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleSubGroups?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event SubGroup</span>: undefined error</h4>
          </div>
        </div>
      `:n.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return n.dy`${this.table}`}get table(){return this._scheduleSubGroups.results.length>0?n.dy`
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
      `:n.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceSubGroups(){return n.dy`
      ${this._scheduleSubGroups.results.map(((e,t)=>n.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,s.C)(this.getSubGroup(e.subGroupId),n.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceSubGroup}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return n.dy`
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
    `}get subgroupField(){const e=this._subgroups.map((e=>n.dy`<mwc-list-item value="${e.id}">
        ${(0,s.C)(this.getGroup(e.groupId),n.dy`<span>Loading...</span>`)} >> 
        ${e.subgroup}
      </mwc-list-item>`));return n.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select SubGroup</h4>
            <mwc-select name="subGroupId" class="w-full" id="subGroupId" label="Select SubGroup" outlined required>
              <mwc-list-item value="">Select SubGroup</mwc-list-item>
              <mwc-list-item value="all">All SubGroups</mwc-list-item>
              ${n.dy`${e}`}
            </mwc-select>
          </div>
        </div>
      </div>
    `}subgroupFieldDefault(e){return n.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.subgroupField}
        subgroupField-id="${e}" no_delete></multiple-widgets>
    `}addSubGroupField(){const e=this.showSubGroupFieldAllSelector.children.length,t=(0===e?-1:Number(this.showSubGroupFieldAllSelector.children[e-1].getAttribute("subgroupField-id")))+1,o=document.createElement("multiple-widgets");o.setAttribute("class","col-md-12 col-lg-12 mb-3"),o.setAttribute("subgroupField-id",String(t)),this.showSubGroupFieldAllSelector.append(o);const i=this.showSubGroupFieldAllSelector.querySelectorAll('multiple-widgets[subgroupField-id="'+t+'"]'),n=this.subgroupField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=n}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new a.T(e)}))}submitForm(e){return x(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return w(this,void 0,void 0,(function*(){const e=(0,g.Ie)(),t=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup",o=document.querySelector('[make-general-posts="add-schedule-subgroup"]'),i=new FormData(o);return p().fire({title:"Add SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>w(this,void 0,void 0,(function*(){return yield(0,b.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new m.H("post",e,!1,o),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((o=>{let i={error:t.id+": "+o};"non_field_errors"===t.id&&(i={error:o}),e.push(i)}))}));const t=(0,y.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),o=i.response.success}o&&p().fire({title:t,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceSubGroup(e){return x(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return f(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),o=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup/"+e,i={};return p().fire({title:"Remove SubGroup?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>f(this,void 0,void 0,(function*(){return yield(0,b.d)(o,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new m.H("delete",e,!1),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,y.T)(e);p().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let o=e;o.error=t;const i=new m.H("delete",o,!0);return i.postForm,i}})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),o=i.response.success}p().fire({title:t,icon:o?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMeetingEventId(){let e=(0,d.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return x(this,void 0,void 0,(function*(){const e=yield(0,c.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleSubGroup(){return x(this,void 0,void 0,(function*(){const e=yield(0,l.s)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleSubGroups=null===e?void 0:e.paginResponse}))}getGroups(){return x(this,void 0,void 0,(function*(){const e=yield(0,$.c)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const o=[];o.push(...this._groups,...t),this._groups=o}))}getGroup(e){return x(this,void 0,void 0,(function*(){const t=yield(0,$.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}getSubGroups(){return x(this,void 0,void 0,(function*(){const e=yield(0,_.U)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const o=[];o.push(...this._subgroups,...t),this._subgroups=o}))}getSubGroup(e){return x(this,void 0,void 0,(function*(){const t=yield(0,_.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};N.styles=[n.iv`
   :host { display: block; }
  `],C([(0,r.Cb)({type:Number}),A("design:type",Number)],N.prototype,"CLIENT_ID",void 0),C([(0,r.Cb)({type:Number}),A("design:type",Number)],N.prototype,"startSearchPage",void 0),C([(0,r.Cb)({type:Array}),A("design:type",Array)],N.prototype,"_groups",void 0),C([(0,r.Cb)({type:Array}),A("design:type",Array)],N.prototype,"_subgroups",void 0),C([(0,r.Cb)({type:Array}),A("design:type","function"==typeof(v="undefined"!=typeof Array&&Array)?v:Object)],N.prototype,"_data",void 0),C([(0,r.Cb)({type:Object}),A("design:type",Object)],N.prototype,"urlQueryParams",void 0),C([(0,r.Cb)({type:Number}),A("design:type",Number)],N.prototype,"meetingEventId",void 0),C([(0,r.IO)('[show-subgroupField="all"]'),A("design:type","function"==typeof(S="undefined"!=typeof Element&&Element)?S:Object)],N.prototype,"showSubGroupFieldAllSelector",void 0),N=C([(0,r.Mo)("attendance-setup-form-subgroup"),A("design:paramtypes",[])],N),o(8693);var j=o(6979),k=o(8092),E=o(1302),R=o(7108),P=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},G=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let I=class extends n.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,o=void 0,r=function*(){e.connectedCallback.call(this),(0,j.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(s,a)}l((r=r.apply(t,o||[])).next())}));var t,o,n,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,k.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,E.OR)(R.W.schedule_meeting_event),!(0,E.H)({pageId:R.W.schedule_meeting_event,viewType:"Edit"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}return n.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-subgroup CLIENT_ID="${this.clientId}"></attendance-setup-form-subgroup>
      </div>
    `}firstUpsubgroupd(){}createRenderRoot(){return this}};P([(0,r.Cb)({type:String}),G("design:type",String)],I.prototype,"email",void 0),P([(0,r.Cb)({type:Number}),G("design:type",Number)],I.prototype,"mId",void 0),P([(0,r.Cb)({type:Number}),G("design:type",Number)],I.prototype,"clientId",void 0),P([(0,r.Cb)({type:Boolean}),G("design:type",Boolean)],I.prototype,"_hasSetup",void 0),P([(0,r.Cb)({type:Boolean}),G("design:type",Boolean)],I.prototype,"_pageButtonAccess",void 0),I=P([(0,r.Mo)("attendance-setup-form-edit-subgroup"),G("design:paramtypes",[])],I)}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,7708,5513,1109,6236,8867,214,3901,5836,3712],(()=>(1119,e(e.s=1119)))),e.O())])));
//# sourceMappingURL=edit-sub_group.js.map