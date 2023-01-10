/*! For license information please see edit-break.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1436],{6173:()=>{(()=>{var e,t,n;const r=Symbol(),o=Symbol(),i=Symbol(),s=Symbol(),a=Symbol(),l=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),p=Symbol(),m=Symbol(),f=Symbol();class y{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[i]);const e=this;e[r]=null,e[i]=null,e[o]=null}get top(){const e=this[r];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[l](e),this[r].push(e))}remove(e){const t=this[r].indexOf(e);return-1!==t&&(this[r].splice(t,1),t===this[r].length&&this[l](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[r].indexOf(e)}[(e=r,t=i,n=o,l)](e){const t=this[o],n=this[i];if(!e)return this[u](n),t.clear(),void(this[i]=[]);const r=this[h](e);if(r[r.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[i]=r;const s=this[p](e);if(!n.length)return void this[d](r,s,t);let a=n.length-1,l=r.length-1;for(;a>0&&l>0&&n[a]===r[l];)a--,l--;n[a]!==r[l]&&this[c](n[a],r[l]),a>0&&this[u](n.slice(0,a)),l>0&&this[d](r.slice(0,l),s,null)}[c](e,t){const n=e[s];this[m](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[a]=e[a],t[s]=n,e[a]=void 0,e[s]=void 0}[u](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[s];for(const t of e)t.inert=!1;t[s]=void 0}}[d](e,t,n){for(const r of e){const e=r.parentNode,o=e.children,i=new Set;for(let e=0;e<o.length;e++){const s=o[e];s===r||!this[m](s)||t&&t.has(s)||(n&&s.inert?n.add(s):(s.inert=!0,i.add(s)))}r[s]=i;const l=new MutationObserver(this[f].bind(this));r[a]=l;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),l.observe(c,{childList:!0})}}[f](e){const t=this[i],n=this[o];for(const r of e){const e=r.target.host||r.target,o=e===document.body?t.length:t.indexOf(e),i=t[o-1],a=i[s];for(let e=0;e<r.removedNodes.length;e++){const t=r.removedNodes[e];if(t===i)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(t)&&(t.inert=!1,a.delete(t))}for(let e=0;e<r.addedNodes.length;e++){const t=r.addedNodes[e];this[m](t)&&(n&&t.inert?n.add(t):(t.inert=!0,a.add(t)))}}}[m](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[p](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let r,o,i;const s=t.querySelectorAll("slot");if(s.length&&s[0].assignedNodes)for(r=0;r<s.length;r++)for(i=s[r].assignedNodes({flatten:!0}),o=0;o<i.length;o++)i[o].nodeType===Node.ELEMENT_NODE&&n.add(i[o]);return n}}document.$blockingElements=new y})()},2831:(e,t,n)=>{"use strict";n.d(t,{h:()=>r});const r=e=>{const t=new Date,n=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(n)}},706:(e,t,n)=>{"use strict";n.d(t,{h:()=>a});var r=n(771),o=n(7270),i=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=r.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function o(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,o)}i((c=c.apply(n,a||[])).next())}));var n,a,l,c}},6262:(e,t,n)=>{"use strict";n.d(t,{a:()=>a});var r=n(771),o=n(7270),i=n(596),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,s.Ie)(),a=r.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{i(c.next(e))}catch(e){t(e)}}function o(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,o)}i((c=c.apply(n,a||[])).next())}));var n,a,l,c}},5866:(e,t,n)=>{"use strict";var r=n(9755),o=n(9392),i=n(1936),s=(n(686),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=r(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const r=e.id;n=t===r})),e.selected=n,e}))}render(){return this.multiple?this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:r(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,r(".select2-search__field").on("keyup",(function(e){r(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{r(e).select2({closeOnSelect:!1,placeholder:this.label}),r(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let o={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)o[e]=this.ajaxHeader[e];this.selectSelector.forEach((i=>{r(i).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(o){const i=function(o,i){return n=isNaN(o.page)?0:o.page,n=0===n?n:n*t,r(".select2-search__field").on("keyup",(function(o){r(e.selectSelector).empty(),n=0,t=0})),n}(o),s=function(n,o){let i=isNaN(n.page)?1:n.page+1;return i=0===i?1:i,r(".select2-search__field").on("keyup",(function(n){r(e.selectSelector).empty(),i=0,t=0})),i}(o);let a={search:o.term,start:i,page:s};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:o,processResults:(e,n)=>{const r=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=r.results.length,{results:r.results,pagination:{more:t<r.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let r=[];if(!1===n.error){var o=n.data;for(let e=0;e<o.length;e++){const t=o[e],n={id:t.id,text:t.fullName};r.includes(n)||r.push(n)}}return this.totalShowing+=r.length,{results:r,total:n.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let n=[];for(const e of t){let t=e;const r=Number.isNaN(t.value)?0:Number(t.value);n.includes(r)||n.push(r)}this.currentValue=n,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",n)}createRenderRoot(){return this}};l.styles=[o.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,i.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),s([(0,i.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),s([(0,i.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),s([(0,i.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),s([(0,i.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),s([(0,i.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),s([(0,i.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),s([(0,i.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),s([(0,i.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),s([(0,i.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),s([(0,i.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),s([(0,i.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),s([(0,i.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),s([(0,i.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),s([(0,i.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),s([(0,i.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),s([(0,i.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),s([(0,i.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=s([(0,i.Mo)("select-input")],l)},8796:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AttendanceSetupFormEditBreak:()=>T}),n(3683),n(4657);var r,o,i=n(4108),s=n(9392),a=n(1936),l=(n(5248),n(6811),n(3690),n(1854),n(2262)),c=n(2831),d=n(706),u=n(2218),h=n(4672),p=n(6455),m=n.n(p),f=n(771),y=n(7270),v=n(596),b=n(8967),g=n(3600),_=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))},w=n(6262),S=(n(5866),function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}),k=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};let B=class extends s.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__breakUser=null,this.__schedule=null,this.__scheduleBreaks=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _breakUser(e){this.__breakUser=e,this.requestUpdate()}get _breakUser(){return this.__breakUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,h.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return s.dy`${this.schedule}`}get schedule(){return null===this._schedule?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: undefined error</h4>
          </div>
        </div>
      `:!0===this._schedule.success?s.dy`${this.scheduleBreak}`:s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleBreak(){return null===this._scheduleBreaks?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleBreaks?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Break</span>: undefined error</h4>
          </div>
        </div>
      `:s.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return s.dy`${this.table}`}get table(){return this._scheduleBreaks.results.length>0?s.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Break">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Start Time
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Time
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
                ${this.getMeetingAttendanceBreaks}
              </tbody>
            </table>
          </div>
        </div>
      `:s.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceBreaks(){return s.dy`
      ${this._scheduleBreaks.results.map((e=>s.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${(0,c.h)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,c.h)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceBreak}"></mwc-icon-button>
            </td>
          </tr>
        `))}
    `}get form(){return s.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Break</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Break!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-break">
                <div class="p-0 m-0" show-breakField="all">
                  ${this.breakFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set Break" raised class="button" @click="${this.submitForm}">
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
    `}get breakField(){return(0,g.Ie)().token,s.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Start Time</h4> 
            <mwc-textfield name="startBreak" type="time" class="w-full" id="startBreak" label="Select Start Time" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select End Time</h4> 
            <mwc-textfield name="endBreak" type="time" class="w-full" id="endBreak" label="Select End Time" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}breakFieldDefault(e){return s.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.breakField}
        breakField-id="${e}" no_delete></multiple-widgets>
    `}addBreakField(){const e=this.showBreakFieldAllSelector.children.length,t=(0===e?-1:Number(this.showBreakFieldAllSelector.children[e-1].getAttribute("breakField-id")))+1,n=document.createElement("multiple-widgets");n.setAttribute("class","col-md-12 col-lg-12 mb-3"),n.setAttribute("breakField-id",String(t)),this.showBreakFieldAllSelector.append(n);const r=this.showBreakFieldAllSelector.querySelectorAll('multiple-widgets[breakField-id="'+t+'"]'),o=this.breakField.strings.join("");setTimeout((()=>{r.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=o}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}getBreakUsers(){return A(this,void 0,void 0,(function*(){const e=yield(0,w.a)();this._breakUser=null===e?void 0:e.paginResponse}))}submitForm(e){return A(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return S(this,void 0,void 0,(function*(){const e=(0,g.Ie)(),t=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break",n=document.querySelector('[make-general-posts="add-schedule-break"]'),r=new FormData(n);return m().fire({title:"Setup Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>S(this,void 0,void 0,(function*(){return yield(0,y.d)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{try{const t=new v.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,b.T)(e);m().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const o=new v.H("post",r,!0,n);return o.postForm,o}})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&m().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceBreak(e){return A(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return _(this,void 0,void 0,(function*(){const t=(0,g.Ie)(),n=f.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break/"+e,r={};return m().fire({title:"Remove Break?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return yield(0,y.d)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new v.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,b.T)(e);m().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new v.H("delete",n,!0);return r.postForm,r}})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}m().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const n=e.count,r=e.results,o=document.querySelector('[id="breakId"]');let i=[];if(n>0){var s=r;for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.firstname+" "+t.surname};i.includes(n)||i.push(n)}}return{results:i,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,h.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return A(this,void 0,void 0,(function*(){const e=yield(0,u.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleBreak(){return A(this,void 0,void 0,(function*(){const e=yield(0,d.h)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};B.styles=[s.iv`
   :host { display: block; }
  `],k([(0,a.Cb)({type:Number}),x("design:type",Number)],B.prototype,"CLIENT_ID",void 0),k([(0,a.Cb)({type:Number}),x("design:type",Number)],B.prototype,"startSearchPage",void 0),k([(0,a.Cb)({type:Array}),x("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],B.prototype,"_data",void 0),k([(0,a.Cb)({type:Object}),x("design:type",Object)],B.prototype,"urlQueryParams",void 0),k([(0,a.Cb)({type:Number}),x("design:type",Number)],B.prototype,"meetingEventId",void 0),k([(0,a.IO)('[show-breakField="all"]'),x("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],B.prototype,"showBreakFieldAllSelector",void 0),B=k([(0,a.Mo)("attendance-setup-form-break"),x("design:paramtypes",[])],B),n(8693);var E=n(6979),C=n(8092),N=n(1302),$=n(7108),j=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let T=class extends s.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this),(0,E.f)().then((()=>this._hasSetup=!0)),yield(0,i.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,i){function s(e){try{l(o.next(e))}catch(e){i(e)}}function a(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,C.H)())||void 0===e?void 0:e.expiration_date.expired)return s.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,N.OR)($.W.schedule_meeting_event),!(0,N.H)({pageId:$.W.schedule_meeting_event,viewType:"Edit"},!1))return s.dy`<no-page-entry-component></no-page-entry-component>`}return s.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-break CLIENT_ID="${this.clientId}"></attendance-setup-form-break>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};j([(0,a.Cb)({type:String}),R("design:type",String)],T.prototype,"email",void 0),j([(0,a.Cb)({type:Number}),R("design:type",Number)],T.prototype,"mId",void 0),j([(0,a.Cb)({type:Number}),R("design:type",Number)],T.prototype,"clientId",void 0),j([(0,a.Cb)({type:Boolean}),R("design:type",Boolean)],T.prototype,"_hasSetup",void 0),j([(0,a.Cb)({type:Boolean}),R("design:type",Boolean)],T.prototype,"_pageButtonAccess",void 0),T=j([(0,a.Mo)("attendance-setup-form-edit-break"),R("design:paramtypes",[])],T)},4232:(e,t,n)=>{"use strict";n.d(t,{OR:()=>s,hl:()=>l,pt:()=>i});var r=n(3692);const{I:o}=r.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s=e=>void 0===e.strings,a={},l=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{XM:()=>r.XM,Xe:()=>r.Xe,pX:()=>r.pX});var r=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>s});var r=n(3692),o=n(875),i=n(4232);const s=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,s=e.name;if(e.type===o.pX.PROPERTY){if(t===n[s])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(s))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(s)===t+"")return r.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,7708,1109,6236,8867,214,3901,5836,3712],(()=>(8796,e(e.s=8796)))),e.O())])));
//# sourceMappingURL=edit-break.js.map