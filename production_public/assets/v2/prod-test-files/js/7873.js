/*! For license information please see 7873.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7873],{8967:(e,t,i)=>{i.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let i=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{i+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,i)=>{i.d(t,{B:()=>l});var o=i(771),n=i(7270),s=i(7052),r=i(1942),a=function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};const c=(e,t,i)=>a(void 0,void 0,void 0,(function*(){const a=o.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=i,l=JSON.stringify({email:e,id:t});yield(0,n.d)(a,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,s.h)(String(e.jsonData.token));(0,r.Ad)(c,t,10),(0,r.vh)(c+"_date",(new Date).toUTCString(),10)}}))})),l=(e,t,i)=>a(void 0,void 0,void 0,(function*(){const l=(0,s.h)(String(t)),d=i;window.supersecret={unknowable:{ops:{email:e,id:l,cookieName:d}}},""==(0,r.Hl)(d)?yield c(e,l,i):yield((e,t,i)=>a(void 0,void 0,void 0,(function*(){const l=o.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=i,p=(0,r.Hl)(d),h=JSON.stringify({token:(0,s.t)(p)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,r.Hl)(d+"_date"))))return p;yield(0,n.d)(l,{method:"POST",body:h},!0).then((o=>a(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,s.h)(String(o.jsonData.token));(0,r.Ad)(d,e,10),(0,r.vh)(d+"_date",(new Date).toUTCString(),10)}else yield c(e,t,i)}))))})))(e,l,i)}))},4672:(e,t,i)=>{i.d(t,{Jx:()=>n,O1:()=>o,Vc:()=>s,W3:()=>r});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),i=Object.fromEntries(t.entries());let o=null;for(const t in i)t===e&&(o=i[t]);return o},s=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",i=0;for(const o in e)i+=1,t+=`${i>1?"&":""}${o}=${e[o]}`;return t}},5371:(e,t,i)=>{var o=i(936),n=i(8393),s=i(7151),r=i(1677),a=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(),this.title="",this.open=!1}connectedCallback(){super.connectedCallback(),setTimeout((()=>{"complete"==document.readyState&&new r.F(this.shadowRoot.querySelector(".accordion-item-header"))}),1e3)}render(){return o.dy`
      <div class="accordion-item"
        style=${(0,s.V)({borderBottom:this.open?"none":"1px solid #ddd"})}>
        <div class="accordion-item-header" @click=${this.toggleAccordion}>
          <span class="accordion-item-header-title">${this.title}</span>
          <span class="accordion-item-header-icon ${this.open?"open":""}">${this.open?"-":"+"}</span>
        </div>
        ${this.open?o.dy`<div class="accordion-item-content">
          <slot></slot>
        </div>`:""}
      </div>
    `}toggleAccordion(){setTimeout((()=>{this.open=!this.open}),100)}};l.styles=o.iv`
    .accordion-item {
      border: 2px solid #ddd;
      border-top: none;
      padding: 8px;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      overflow: hidden;
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    }
    .accordion-item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .accordion-item-header-title {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25rem;
    }
    .accordion-item-header-icon {
      margin-right: 8px;
      transition: transform 0.2s ease-in-out;
    }
    .accordion-item-header-icon.open {
      transform: rotate(180deg);
    }
    .accordion-item-content {
      padding: 12px;
      margin-top: 10px;
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      border-width: 1px;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
  `,a([(0,n.Cb)({type:String}),c("design:type",Object)],l.prototype,"title",void 0),a([(0,n.Cb)({type:Boolean}),c("design:type",Object)],l.prototype,"open",void 0),l=a([(0,n.Mo)("accordion-item"),c("design:paramtypes",[])],l)},7933:(e,t,i)=>{var o=i(936);let n=class extends o.oi{constructor(){super()}render(){return o.dy`
      <slot></slot>
    `}updated(e){super.updated(e),this.initAccordionItems()}initAccordionItems(){this.querySelectorAll("accordion-item").forEach((e=>{e.addEventListener("click",(()=>{}))}))}toggleItem(e){e.open,this.querySelectorAll("accordion-item").forEach((e=>{e.open=!1}))}};n.styles=o.iv`
    :host {
      display: block;
    }
  `,n=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}([(0,o.Mo)("accordion-component"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],n)},7725:(e,t,i)=>{var o=i(5862),n=i(8393),s=(i(5185),i(5248),function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[o.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?o.dy`
          <div class="form-input border">
            ${this.hasLabel?o.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:o.dy`
          <div class="form-input border">
            ${this.hasLabel?o.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?o.dy`
          <div class="form-input border">
            ${this.hasLabel?o.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:o.dy`
          <div class="form-input border">
            ${this.hasLabel?o.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"name",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"label",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"value",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"accept",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],a.prototype,"randomID",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"id",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"required",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"hasLabel",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"multiple",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],a.prototype,"startNumber",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],a.prototype,"rowsPerPage",void 0),s([(0,n.Cb)({type:Number}),r("design:type",Number)],a.prototype,"totalShowing",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=s([(0,n.Mo)("file-input")],a)},5866:(e,t,i)=>{var o=i(9755),n=i(5862),s=i(8393),r=(i(686),function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=o(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let i=!1;return this.value.forEach((e=>{const o=e.id;i=t===o})),e.selected=i,e}))}render(){return this.multiple?this.required?n.dy`
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
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:o(this.value.map((t=>{const i=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+i+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const i=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,o(".select2-search__field").on("keyup",(function(e){o(i.selectSelector).empty(),i.startSearchPage=0})),i.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,i=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{o(e).select2({closeOnSelect:!1,placeholder:this.label}),o(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let n={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)n[e]=this.ajaxHeader[e];this.selectSelector.forEach((s=>{o(s).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(n){const s=function(n,s){return i=isNaN(n.page)?0:n.page,i=0===i?i:i*t,o(".select2-search__field").on("keyup",(function(n){o(e.selectSelector).empty(),i=0,t=0})),i}(n),r=function(i,n){let s=isNaN(i.page)?1:i.page+1;return s=0===s?1:s,o(".select2-search__field").on("keyup",(function(i){o(e.selectSelector).empty(),s=0,t=0})),s}(n);let a={search:n.term,start:s,page:r};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:n,processResults:(e,i)=>{const o=null===this.ajaxFetchProcessResponse?this._processResults(e,i):this.ajaxFetchProcessResponse(e,i);return t+=o.results.length,{results:o.results,pagination:{more:t<o.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{i=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const i=e;t.page=t.page||0;let o=[];if(!1===i.error){var n=i.data;for(let e=0;e<n.length;e++){const t=n[e],i={id:t.id,text:t.fullName};o.includes(i)||o.push(i)}}return this.totalShowing+=o.length,{results:o,total:i.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let i=[];for(const e of t){let t=e;const o=Number.isNaN(t.value)?0:Number(t.value);i.includes(o)||i.push(o)}this.currentValue=i,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",i)}createRenderRoot(){return this}};c.styles=[n.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],r([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"name",void 0),r([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"label",void 0),r([(0,s.Cb)({type:Array}),a("design:type",Array)],c.prototype,"value",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"randomID",void 0),r([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"input_id",void 0),r([(0,s.Cb)({type:Array}),a("design:type",Array)],c.prototype,"options",void 0),r([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"required",void 0),r([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchToken",void 0),r([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),r([(0,s.Cb)({attribute:!1}),a("design:type",Object)],c.prototype,"currentValue",void 0),r([(0,s.Cb)({type:Object}),a("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),r([(0,s.Cb)({type:Array}),a("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"startSearchPage",void 0),r([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"multiple",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"startNumber",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"rowsPerPage",void 0),r([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"totalShowing",void 0),r([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=r([(0,s.Mo)("select-input")],c)},3690:(e,t,i)=>{var o=i(5862),n=i(8393),s=(i(5185),i(5142),function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};a.styles=[o.iv`
      :host {
        display: block;
      }
    `],s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"name",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"label",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"selected",void 0),s([(0,n.Cb)({type:String}),r("design:type",String)],a.prototype,"value",void 0),s([(0,n.Cb)({type:Boolean}),r("design:type",Boolean)],a.prototype,"isSelected",void 0),a=s([(0,n.Mo)("switch-input")],a)},1260:(e,t,i)=>{var o=i(5862),n=i(8393),s=(i(1239),i(9261),i(5248),i(3313),i(5866),i(3690),i(7725),i(2761)),r=i(8278),a=i(4564),c=i(4253),l=i(9446),d=i(1729),p=i(6525),h=i(1791),u=function(e,t,i,o){var n,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(s<3?n(r):s>3?n(t,i,r):n(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};let f=class extends o.oi{constructor(){super(),this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._countries=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={}}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getLocationCountry()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),i=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),n=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return o.dy`
      <div class="form-container flex">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label my-1">
                  <h1 class="h1 !text-red-400">Filter Location Details</h1>
                  <h3 class="h3">
                    <span class="!text-red-400">For reference only. </span>
                    <span class="!text-red-400"> Does not affect registration.</span>
                  </h3>
                </label>
              </header>
              <form method="post" action="#" class="form !my-1">
                <div class="row">
                  <div class="col-md-3 col-lg-3">
                    <h4 class="font-semibold my-2">Select Country</h4>
                    <select-input name="country" id="country" label="Select Country" .options="${e}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_state_province>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Region</h4>
                    <select-input name="region" id="region" label="Select Region" .options="${t}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select District</h4>
                    <select-input name="district" id="district" label="Select District" .options="${i}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Constituency</h4>
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${n}"
                      outlined required>
                    </select-input>
                  </div>
                </div>
              
                <div class="flex form-input-container items-center text-center !my-1">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e)}}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),i=this.querySelectorAll("[show_state_province]"),o="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(o)})),i.forEach((e=>{e.classList.add(o)}))):(t.forEach((e=>{e.classList.add(o)})),i.forEach((e=>{e.classList.remove(o)})))}))}))}regionChanged(e){return m(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getLocationCountry(){return m(this,void 0,void 0,(function*(){const e=yield(0,l.B)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>s.e.toCountryModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._countries,...t),this._countries=i}))}getLocationRegion(){return m(this,void 0,void 0,(function*(){const e=yield(0,d.d)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>r.e.toLocationRegionModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._regions,...t),this._regions=i}))}getLocationDistrict(e){return m(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),i=this._districtsMemo;if(t in i)setTimeout((()=>{const e=[];e.push(...this._districts,...i[t]),this._districts=e}),100);else{const i=yield(0,p.o)(e);let o=[{id:0,location:"Select District",regionId:null}];if(null===i)o.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===i.response.success&&"length"in i.response.data){const e=i.response.data.map((e=>c.e.toLocationDistrictModel(JSON.stringify(e))));o=[...o,...e],this._districtsMemo[t]=o}const n=[];n.push(...this._districts,...o),this._districts=n}}))}getLocationConstituency(e,t){return m(this,void 0,void 0,(function*(){this._constituencies=[];const i=`${e}_${t}`,o=this._constituenciesMemo;if(i in o)setTimeout((()=>{const e=[];e.push(...this._constituencies,...o[i]),this._constituencies=e}),100);else{const o=yield(0,h.S)(e,t);let n=[{id:0,location:"Select Constituency",regionId:null}];if(null===o)n.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===o.response.success&&"length"in o.response.data){const e=o.response.data.map((e=>a.e.toLocationConstituencyModel(JSON.stringify(e))));n=[...n,...e],this._constituenciesMemo[i]=n}const s=[];s.push(...this._constituencies,...n),this._constituencies=s}}))}createRenderRoot(){return this}};f.styles=[o.iv`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],u([(0,n.Cb)({type:Boolean}),y("design:type",Boolean)],f.prototype,"regionCalled",void 0),u([(0,n.Cb)({type:Number}),y("design:type",Number)],f.prototype,"selectedRegion",void 0),u([(0,n.Cb)({type:Number}),y("design:type",Number)],f.prototype,"selectedDistrict",void 0),u([(0,n.Cb)({type:Array}),y("design:type",Array)],f.prototype,"_countries",void 0),u([(0,n.Cb)({type:Array}),y("design:type",Array)],f.prototype,"_regions",void 0),u([(0,n.Cb)({type:Array}),y("design:type",Array)],f.prototype,"_districts",void 0),u([(0,n.Cb)({type:Array}),y("design:type",Array)],f.prototype,"_constituencies",void 0),u([(0,n.Cb)({type:Object}),y("design:type",Object)],f.prototype,"_constituenciesMemo",void 0),u([(0,n.Cb)({type:Object}),y("design:type",Object)],f.prototype,"_districtsMemo",void 0),f=u([(0,n.Mo)("membership-registration-excel-location"),y("design:paramtypes",[])],f)},6869:(e,t,i)=>{i.d(t,{W:()=>o});const o={create:23}},936:(e,t,i)=>{i.d(t,{Mo:()=>r.M,dy:()=>n.dy,iv:()=>o.iv,oi:()=>s.oi});var o=i(7898),n=i(3692),s=i(8922),r=i(5713);i(7935),i(43),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.")}}]);
//# sourceMappingURL=7873.js.map