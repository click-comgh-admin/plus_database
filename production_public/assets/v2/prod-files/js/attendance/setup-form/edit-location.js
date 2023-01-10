/*! For license information please see edit-location.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2607],{6173:()=>{(()=>{var e,t,o;const i=Symbol(),n=Symbol(),s=Symbol(),r=Symbol(),a=Symbol(),l=Symbol(),c=Symbol(),d=Symbol(),u=Symbol(),h=Symbol(),p=Symbol(),m=Symbol(),f=Symbol();class y{constructor(){this[e]=[],this[t]=[],this[o]=new Set}destructor(){this[u](this[s]);const e=this;e[i]=null,e[s]=null,e[n]=null}get top(){const e=this[i];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[l](e),this[i].push(e))}remove(e){const t=this[i].indexOf(e);return-1!==t&&(this[i].splice(t,1),t===this[i].length&&this[l](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[i].indexOf(e)}[(e=i,t=s,o=n,l)](e){const t=this[n],o=this[s];if(!e)return this[u](o),t.clear(),void(this[s]=[]);const i=this[h](e);if(i[i.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[s]=i;const r=this[p](e);if(!o.length)return void this[d](i,r,t);let a=o.length-1,l=i.length-1;for(;a>0&&l>0&&o[a]===i[l];)a--,l--;o[a]!==i[l]&&this[c](o[a],i[l]),a>0&&this[u](o.slice(0,a)),l>0&&this[d](i.slice(0,l),r,null)}[c](e,t){const o=e[r];this[m](e)&&!e.inert&&(e.inert=!0,o.add(e)),o.has(t)&&(t.inert=!1,o.delete(t)),t[a]=e[a],t[r]=o,e[a]=void 0,e[r]=void 0}[u](e){for(const t of e){t[a].disconnect(),t[a]=void 0;const e=t[r];for(const t of e)t.inert=!1;t[r]=void 0}}[d](e,t,o){for(const i of e){const e=i.parentNode,n=e.children,s=new Set;for(let e=0;e<n.length;e++){const r=n[e];r===i||!this[m](r)||t&&t.has(r)||(o&&r.inert?o.add(r):(r.inert=!0,s.add(r)))}i[r]=s;const l=new MutationObserver(this[f].bind(this));i[a]=l;let c=e;const d=c;d.__shady&&d.host&&(c=d.host),l.observe(c,{childList:!0})}}[f](e){const t=this[s],o=this[n];for(const i of e){const e=i.target.host||i.target,n=e===document.body?t.length:t.indexOf(e),s=t[n-1],a=s[r];for(let e=0;e<i.removedNodes.length;e++){const t=i.removedNodes[e];if(t===s)return console.info("Detected removal of the top Blocking Element."),void this.pop();a.has(t)&&(t.inert=!1,a.delete(t))}for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];this[m](t)&&(o&&t.inert?o.add(t):(t.inert=!0,a.add(t)))}}}[m](e){return!1===/^(style|template|script)$/.test(e.localName)}[h](e){const t=[];let o=e;for(;o&&o!==document.body;)if(o.nodeType===Node.ELEMENT_NODE&&t.push(o),o.assignedSlot){for(;o=o.assignedSlot;)t.push(o);o=t.pop()}else o=o.parentNode||o.host;return t}[p](e){const t=e.shadowRoot;if(!t)return null;const o=new Set;let i,n,s;const r=t.querySelectorAll("slot");if(r.length&&r[0].assignedNodes)for(i=0;i<r.length;i++)for(s=r[i].assignedNodes({flatten:!0}),n=0;n<s.length;n++)s[n].nodeType===Node.ELEMENT_NODE&&o.add(s[n]);return o}}document.$blockingElements=new y})()},606:(e,t,o)=>{"use strict";o.d(t,{I:()=>a});var i=o(771),n=o(7270),s=o(596),r=o(3600);function a(e=null,t=""){return o=this,a=void 0,c=function*(){const o=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,l=yield(0,n.d)(a,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function n(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(i,n)}s((c=c.apply(o,a||[])).next())}));var o,a,l,c}},6262:(e,t,o)=>{"use strict";o.d(t,{a:()=>a});var i=o(771),n=o(7270),s=o(596),r=o(3600);function a(e=null,t=""){return o=this,a=void 0,c=function*(){const o=(0,r.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,n.d)(a,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function n(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(i,n)}s((c=c.apply(o,a||[])).next())}));var o,a,l,c}},2461:(e,t,o)=>{"use strict";var i=o(9392),n=o(1936),s=(o(5185),o(5248),function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[i.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"name",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"label",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"value",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"accept",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],a.prototype,"randomID",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"id",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"required",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"hasLabel",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"multiple",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],a.prototype,"startNumber",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],a.prototype,"rowsPerPage",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],a.prototype,"totalShowing",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=s([(0,n.Mo)("file-input")],a)},5866:(e,t,o)=>{"use strict";var i=o(9755),n=o(9392),s=o(1936),r=(o(686),function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let o=!1;return this.value.forEach((e=>{const i=e.id;o=t===i})),e.selected=o,e}))}render(){return this.multiple?this.required?n.dy`
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
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const o=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+o+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const o=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(o.selectSelector).empty(),o.startSearchPage=0})),o.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,o=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let n={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)n[e]=this.ajaxHeader[e];this.selectSelector.forEach((s=>{i(s).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(n){const s=function(n,s){return o=isNaN(n.page)?0:n.page,o=0===o?o:o*t,i(".select2-search__field").on("keyup",(function(n){i(e.selectSelector).empty(),o=0,t=0})),o}(n),r=function(o,n){let s=isNaN(o.page)?1:o.page+1;return s=0===s?1:s,i(".select2-search__field").on("keyup",(function(o){i(e.selectSelector).empty(),s=0,t=0})),s}(n);let a={search:n.term,start:s,page:r};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:n,processResults:(e,o)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,o):this.ajaxFetchProcessResponse(e,o);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{o=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const o=e;t.page=t.page||0;let i=[];if(!1===o.error){var n=o.data;for(let e=0;e<n.length;e++){const t=n[e],o={id:t.id,text:t.fullName};i.includes(o)||i.push(o)}}return this.totalShowing+=i.length,{results:i,total:o.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let o=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);o.includes(i)||o.push(i)}this.currentValue=o,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",o)}createRenderRoot(){return this}};l.styles=[n.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],r([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),r([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),r([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),r([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),r([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),r([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),r([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),r([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),r([(0,s.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),r([(0,s.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),r([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),r([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),r([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=r([(0,s.Mo)("select-input")],l)},6230:(e,t,o)=>{"use strict";o.r(t),o.d(t,{AttendanceSetupFormEditLocation:()=>k}),o(3683),o(4657);var i,n,s=o(4108),r=o(9392),a=o(1936),l=(o(5248),o(6811),o(3690),o(1854),o(2461),o(2262)),c=o(606),d=o(2218),u=o(4672),h=o(6455),p=o.n(h),m=o(771),f=o(7270),y=o(596),v=o(8967),b=o(3600),g=function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))},w=o(6262),_=(o(5866),function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))}),S=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},$=function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function r(e){try{l(i.next(e))}catch(e){s(e)}}function a(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};let A=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this.startSearchPage=0,this.__locationUser=null,this.__schedule=null,this.__scheduleLocations=null,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}set _locationUser(e){this.__locationUser=e,this.requestUpdate()}get _locationUser(){return this.__locationUser}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return $(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,u.O1)(),this.getMeetingEventId(),yield this.getAttendanceSchedule(),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return r.dy`${this.schedule}`}get schedule(){return null===this._schedule?r.dy`
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
      `:!0===this._schedule.success?r.dy`${this.scheduleLocation}`:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h2 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event</span>: ${this._schedule.message}</h2>
          </div>
        </div>
      `}get scheduleLocation(){return null===this._scheduleLocations?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._scheduleLocations?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Meeting/Event Location</span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
        ${this.form}<hr/>${this.display}
      `}get display(){return r.dy`${this.table}`}get table(){return this._scheduleLocations.results.length>0?r.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting/ Event Location">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Latitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
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
                ${this.getMeetingAttendanceLocations}
              </tbody>
            </table>
          </div>
        </div>
      `:r.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMeetingAttendanceLocations(){return r.dy`
      ${this._scheduleLocations.results.map(((e,t)=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.latitude}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.longitude}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.radius}
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteQuestionnaireMeetingAttendanceLocation}"></mwc-icon-button>
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
                  <h1 class="h1 !text-red-400">New Meeting/ Event Scheduled Location</h1>
                  <h3 class="h3">Create New Meeting/ Event Scheduled Location!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-location">
                <div class="p-0 m-0" show-locationField="all">
                  ${this.locationFieldDefault(0)}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <input type="hidden" name="meetingEventId" id="meetingEventId" value="${this.meetingEventId}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Location" raised class="button" @click="${this.submitForm}">
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
    `}get locationField(){return(0,b.Ie)().token,r.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Latitude</h4>
            <mwc-textfield name="latitude" type="number" step="0.01" class="w-full" id="latitude" label="Enter Latitude" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Longitude</h4>
            <mwc-textfield name="longitude" type="number" step="0.01" class="w-full" id="longitude" label="Enter Longitude" outlined required>
            </mwc-textfield>
          </div>
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Radius</h4>
            <mwc-textfield name="radius" type="number" step="0.01" class="w-full" id="radius" label="Enter Radius" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}locationFieldDefault(e){return r.dy`
      <multiple-widgets class="col-md-12 col-lg-12 mb-3" .widget=${this.locationField}
        locationField-id="${e}" no_delete></multiple-widgets>
    `}addLocationField(){const e=this.showLocationFieldAllSelector.children.length,t=(0===e?-1:Number(this.showLocationFieldAllSelector.children[e-1].getAttribute("locationField-id")))+1,o=document.createElement("multiple-widgets");o.setAttribute("class","col-md-12 col-lg-12 mb-3"),o.setAttribute("locationField-id",String(t)),this.showLocationFieldAllSelector.append(o);const i=this.showLocationFieldAllSelector.querySelectorAll('multiple-widgets[locationField-id="'+t+'"]'),n=this.locationField.strings.join("");setTimeout((()=>{i.forEach((e=>{e.querySelectorAll("main").forEach((e=>{e.innerHTML=n}))}))}))}firstUpdated(){this.querySelectorAll('[mdc-data-table="data-table"]').forEach((e=>{new l.T(e)}))}getLocationUsers(){return $(this,void 0,void 0,(function*(){const e=yield(0,w.a)();this._locationUser=null===e?void 0:e.paginResponse}))}getLocationUser(e){return $(this,void 0,void 0,(function*(){const t=yield(0,w.a)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}submitForm(e){return $(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return _(this,void 0,void 0,(function*(){const e=(0,b.Ie)(),t=m.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location",o=document.querySelector('[make-general-posts="add-schedule-location"]'),i=new FormData(o);return p().fire({title:"Add Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>_(this,void 0,void 0,(function*(){return yield(0,f.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new y.H("post",e,!1,o),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((o=>{let i={error:t.id+": "+o};"non_field_errors"===t.id&&(i={error:o}),e.push(i)}))}));const t=(0,v.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),o=i.response.success}o&&p().fire({title:t,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}deleteQuestionnaireMeetingAttendanceLocation(e){return $(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return g(this,void 0,void 0,(function*(){const t=(0,b.Ie)(),o=m.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location/"+e,i={};return p().fire({title:"Remove Location?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,f.d)(o,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new y.H("delete",e,!1),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,v.T)(e);p().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let o=e;o.error=t;const i=new y.H("delete",o,!0);return i.postForm,i}})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),o=i.response.success}p().fire({title:t,icon:o?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}processClientUserSearch(e,t){t.page=t.page||0;const o=e.count,i=e.results,n=document.querySelector('[id="location"]');let s=[];if(o>0){var r=i;for(let e=0;e<r.length;e++){const t=r[e],o={id:t.id,text:t.firstname+" "+t.surname};s.includes(o)||s.push(o)}}return{results:s,total:o,totalShowing:n.totalShowing}}get ajaxFetchUrlParams(){return[{param:"",value:""}]}getMeetingEventId(){let e=(0,u.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}getAttendanceSchedule(){return $(this,void 0,void 0,(function*(){const e=yield(0,d.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getAttendanceScheduleLocation(){return $(this,void 0,void 0,(function*(){const e=yield(0,c.I)(null,"?meetingEventId="+this.meetingEventId+"&length=1000");this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};A.styles=[r.iv`
   :host { display: block; }
  `],S([(0,a.Cb)({type:Number}),x("design:type",Number)],A.prototype,"CLIENT_ID",void 0),S([(0,a.Cb)({type:Number}),x("design:type",Number)],A.prototype,"startSearchPage",void 0),S([(0,a.Cb)({type:Array}),x("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],A.prototype,"_data",void 0),S([(0,a.Cb)({type:Object}),x("design:type",Object)],A.prototype,"urlQueryParams",void 0),S([(0,a.Cb)({type:Number}),x("design:type",Number)],A.prototype,"meetingEventId",void 0),S([(0,a.IO)('[show-locationField="all"]'),x("design:type","function"==typeof(n="undefined"!=typeof Element&&Element)?n:Object)],A.prototype,"showLocationFieldAllSelector",void 0),A=S([(0,a.Mo)("attendance-setup-form-location"),x("design:paramtypes",[])],A),o(8693);var C=o(6979),L=o(8092),N=o(1302),E=o(7108),R=function(e,t,o,i){var n,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,o,r):n(t,o))||r);return s>3&&r&&Object.defineProperty(t,o,r),r},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let k=class extends r.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,o=void 0,n=function*(){e.connectedCallback.call(this),(0,C.f)().then((()=>this._hasSetup=!0)),yield(0,s.B)(this.email,this.mId,"client_tokenLogin")},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(r,a)}l((n=n.apply(t,o||[])).next())}));var t,o,i,n}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,L.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,N.OR)(E.W.schedule_meeting_event),!(0,N.H)({pageId:E.W.schedule_meeting_event,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-form-edit-links></attendance-setup-form-edit-links>
        <attendance-setup-form-location CLIENT_ID="${this.clientId}"></attendance-setup-form-location>
      </div>
    `}firstUplocationd(){}createRenderRoot(){return this}};R([(0,a.Cb)({type:String}),j("design:type",String)],k.prototype,"email",void 0),R([(0,a.Cb)({type:Number}),j("design:type",Number)],k.prototype,"mId",void 0),R([(0,a.Cb)({type:Number}),j("design:type",Number)],k.prototype,"clientId",void 0),R([(0,a.Cb)({type:Boolean}),j("design:type",Boolean)],k.prototype,"_hasSetup",void 0),R([(0,a.Cb)({type:Boolean}),j("design:type",Boolean)],k.prototype,"_pageButtonAccess",void 0),k=R([(0,a.Mo)("attendance-setup-form-edit-location"),j("design:paramtypes",[])],k)},4232:(e,t,o)=>{"use strict";o.d(t,{OR:()=>r,hl:()=>l,pt:()=>s});var i=o(3692);const{I:n}=i.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,r=e=>void 0===e.strings,a={},l=(e,t=a)=>e._$AH=t},8082:(e,t,o)=>{"use strict";o.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=o(875)},3669:(e,t,o)=>{"use strict";o.d(t,{a:()=>r});var i=o(3692),n=o(875),s=o(4232);const r=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.PROPERTY&&e.type!==n.pX.ATTRIBUTE&&e.type!==n.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const o=e.element,r=e.name;if(e.type===n.pX.PROPERTY){if(t===o[r])return i.Jb}else if(e.type===n.pX.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return i.Jb}else if(e.type===n.pX.ATTRIBUTE&&o.getAttribute(r)===t+"")return i.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,8820,1828,9564,7708,1109,6236,8867,214,3901,5836,3712],(()=>(6230,e(e.s=6230)))),e.O())])));
//# sourceMappingURL=edit-location.js.map