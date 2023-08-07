/*! For license information please see 9917.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9917,1454],{2368:(t,e,o)=>{o.d(e,{L:()=>r});var n=o(4672);class r{constructor(t){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=t=>{var e,o;t.preventDefault();const n=window.FilterFieldBox.form,r=new FormData(n),i=null===(e=this.unmutableInputNames)||void 0===e?void 0:e.map((t=>t.name));null==r||r.forEach(((t,e)=>{var o;(null==i?void 0:i.includes(e))||null===(o=document.querySelectorAll('[name="'+e+'"]'))||void 0===o||o.forEach((t=>{t.value=""}))})),null===(o=this.unmutableInputNames)||void 0===o||o.map((t=>{var e;const o=t.name,n=t.value;void 0!==n&&(null===(e=document.querySelectorAll('[name="'+o+'"]'))||void 0===e||e.forEach((t=>{t.value=n})))})),n.submit()},this.constructorInit=t;const e=t.selectors;this.form=e.form,this.container=e.container,this.filterSectionContextBtn=e.filterSectionContextBtn,this.unmutableInputNames=t.unmutableInputNames,this.__filtering__open_default=t.isOpen,this.__filtering__=(0,n.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(t){t.preventDefault();const e=window.FilterFieldBox;if(e.__allowed){const t=e.filterSectionContextBtn,o=e.container;o.hasAttribute("hidden")?(o.removeAttribute("hidden"),t.setAttribute("class","warning mt-1"),t.setAttribute("icon","close_fullscreen")):(o.setAttribute("hidden",""),t.setAttribute("class","primary mt-1"),t.setAttribute("icon","open_with"))}}addfilterCheckInput(){const t=window.FilterFieldBox.form,e=document.createElement("input");e.type="hidden",e.value="true",e.name=this.filtering,t.appendChild(e)}toggleFilterFieldsDefault(){const t=this;function e(){t.container.hasAttribute("hidden")&&t.filterSectionContextBtn.click()}"true"===this.__filtering__&&e(),this.__filtering__open_default&&e()}submit(t){t.preventDefault(),window.FilterFieldBox.form.submit()}}},8276:(t,e,o)=>{o.d(e,{w:()=>i});var n=o(7153),r=function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function a(t){try{l(n.next(t))}catch(t){i(t)}}function s(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))};function i(t,e,o=!0){return r(this,void 0,void 0,(function*(){let i=null;e=null==e?{method:"GET"}:e;var a=new Headers;if(a.append("Access-Control-Allow-Origin","*/*"),a.append("Accept","application/json, text/plain, */*"),o&&a.append("Content-Type","application/json"),void 0===e.headers)e.headers=a;else for(const t of a.keys())e.headers[t]=a.get(t);return e.mode="cors",e.redirect="follow",yield(0,n.Z)(t,e,3e5).then((t=>(i=t,t.status>=200&&t.status,Promise.resolve(t)))).then((t=>r(this,void 0,void 0,(function*(){return{blobData:204===t.status?null:yield t.blob(),response:t,error:""}})))).then((t=>r(this,void 0,void 0,(function*(){if(null!==t.blobData){const e=document.createElement("a");e.href=window.URL.createObjectURL(t.blobData),e.download=t.response.headers.get("Content-Disposition").split(";")[1].split("=")[1],e.click()}return t})))).catch((function(t){throw console.error("Request failed",t),t}))}))}},428:(t,e,o)=>{o.d(e,{Y:()=>c,e:()=>n});class n{static toGroupModel(t){return a(JSON.parse(t),l("GroupModel"),r)}static groupModelToJson(t){return JSON.stringify(a(t,l("GroupModel"),i),null,2)}}function r(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function i(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function a(t,e,o,n=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=c[e.ref];return Array.isArray(e)?function(t,e){if(-1!==t.indexOf(e))return e}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const n=t.length;for(let r=0;r<n;r++){const n=t[r];try{return a(e,n,o)}catch(t){}}}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){if(Array.isArray(e))return e.map((e=>a(e,t,o)))}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,n){if(null===n||"object"!=typeof n||Array.isArray(n))return;const r={};return Object.getOwnPropertyNames(t).forEach((e=>{const i=t[e],s=Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0;r[i.key]=a(s,i.typ,o,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(t,i)||(r[i]=a(n[i],e,o,i))})),r}(o(e),e.additional,t):void 0:e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?void 0:e}(t):function(t,e){if(typeof t==typeof e)return e}(e,t)}}function s(...t){return{unionMembers:t}}function l(t){return{ref:t}}const c={GroupModel:(d=[{json:"id",js:"id",typ:s(null,0)},{json:"clientId",js:"clientID",typ:s(null,0)},{json:"group",js:"group",typ:s(null,"")},{json:"branchId",js:"branchID",typ:s(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:s(null,0)},{json:"createdBy",js:"createdBy",typ:s(null,0)},{json:"updatedBy",js:"updatedBy",typ:s(null,0)},{json:"updateDate",js:"updateDate",typ:s(null,Date)},{json:"date",js:"date",typ:s(null,Date)}],!1,{props:d,additional:false})};var d},1594:(t,e,o)=>{o.d(e,{Y:()=>d,e:()=>r});var n=o(428);class r{static toSubGroupModel(t){return s(JSON.parse(t),c("SubGroupModel"),i)}static subGroupModelToJson(t){return JSON.stringify(s(t,c("SubGroupModel"),a),null,2)}}function i(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function a(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function s(t,e,o,n=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=d[e.ref];return Array.isArray(e)?function(t,e){if(-1!==t.indexOf(e))return e}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const n=t.length;for(let r=0;r<n;r++){const n=t[r];try{return s(e,n,o)}catch(t){}}}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){if(Array.isArray(e))return e.map((e=>s(e,t,o)))}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,n){if(null===n||"object"!=typeof n||Array.isArray(n))return;const r={};return Object.getOwnPropertyNames(t).forEach((e=>{const i=t[e],a=Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0;r[i.key]=s(a,i.typ,o,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(t,i)||(r[i]=s(n[i],e,o,i))})),r}(o(e),e.additional,t):void 0:e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?void 0:e}(t):function(t,e){if(typeof t==typeof e)return e}(e,t)}}function l(...t){return{unionMembers:t}}function c(t){return{ref:t}}const d={SubGroupModel:(p=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"groupId",js:"groupID",typ:l(null,c("GroupModel"))},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:l(null,0)},{json:"subgroup",js:"subgroup",typ:l(null,"")},{json:"createdBy",js:"createdBy",typ:l(null,0)},{json:"updatedBy",js:"updatedBy",typ:l(null,0)},{json:"updateDate",js:"updateDate",typ:l(null,Date)},{json:"date",js:"date",typ:l(null,Date)},{json:"group",js:"group",typ:l(null,"")}],!1,{props:p,additional:false}),GroupModel:n.Y.GroupModel};var p},2892:(t,e,o)=>{o.d(e,{c:()=>s});var n=o(771),r=o(7270),i=o(596),a=o(3600);function s(t=null,e=""){return o=this,s=void 0,c=function*(){const o=(0,a.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===t?"":"/"+t)+e,l=yield(0,r.d)(s,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new i.H("get",l)}catch(t){console.error({error:t});let e=l;return e.error=t,new i.H("get",e,!0)}},new((l=void 0)||(l=Promise))((function(t,e){function n(t){try{i(c.next(t))}catch(t){e(t)}}function r(t){try{i(c.throw(t))}catch(t){e(t)}}function i(e){var o;e.done?t(e.value):(o=e.value,o instanceof l?o:new l((function(t){t(o)}))).then(n,r)}i((c=c.apply(o,s||[])).next())}));var o,s,l,c}},9605:(t,e,o)=>{o.d(e,{U:()=>s});var n=o(771),r=o(7270),i=o(596),a=o(3600);function s(t=null,e=""){return o=this,s=void 0,c=function*(){const o=(0,a.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===t?"":"/"+t)+e,l=yield(0,r.d)(s,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new i.H("get",l)}catch(t){console.error({error:t});let e=l;return e.error=t,new i.H("get",e,!0)}},new((l=void 0)||(l=Promise))((function(t,e){function n(t){try{i(c.next(t))}catch(t){e(t)}}function r(t){try{i(c.throw(t))}catch(t){e(t)}}function i(e){var o;e.done?t(e.value):(o=e.value,o instanceof l?o:new l((function(t){t(o)}))).then(n,r)}i((c=c.apply(o,s||[])).next())}));var o,s,l,c}},5371:(t,e,o)=>{var n=o(936),r=o(8393),i=o(7151),a=o(1677),s=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends n.oi{constructor(){super(),this.title="",this.open=!1}connectedCallback(){super.connectedCallback(),setTimeout((()=>{"complete"==document.readyState&&new a.F(this.shadowRoot.querySelector(".accordion-item-header"))}),1e3)}render(){return n.dy`
      <div class="accordion-item"
        style=${(0,i.V)({borderBottom:this.open?"none":"1px solid #ddd"})}>
        <div class="accordion-item-header" @click=${this.toggleAccordion}>
          <span class="accordion-item-header-title">${this.title}</span>
          <span class="accordion-item-header-icon ${this.open?"open":""}">${this.open?"-":"+"}</span>
        </div>
        ${this.open?n.dy`<div class="accordion-item-content">
          <slot></slot>
        </div>`:""}
      </div>
    `}toggleAccordion(){setTimeout((()=>{this.open=!this.open}),100)}};c.styles=n.iv`
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
  `,s([(0,r.Cb)({type:String}),l("design:type",Object)],c.prototype,"title",void 0),s([(0,r.Cb)({type:Boolean}),l("design:type",Object)],c.prototype,"open",void 0),c=s([(0,r.Mo)("accordion-item"),l("design:paramtypes",[])],c)},7933:(t,e,o)=>{var n=o(936);let r=class extends n.oi{constructor(){super()}render(){return n.dy`
      <slot></slot>
    `}updated(t){super.updated(t),this.initAccordionItems()}initAccordionItems(){this.querySelectorAll("accordion-item").forEach((t=>{t.addEventListener("click",(()=>{}))}))}toggleItem(t){t.open,this.querySelectorAll("accordion-item").forEach((t=>{t.open=!1}))}};r.styles=n.iv`
    :host {
      display: block;
    }
  `,r=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([(0,n.Mo)("accordion-component"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],r)},6883:(t,e,o)=>{var n,r=o(5862),i=o(8393),a=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends r.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return r.dy`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return r.dy`
      ${this.dt_head.map((t=>r.dy`<th>${t.title}</th>`))}
    `}tbody(){return r.dy`
      ${this.dt_body.map((t=>r.dy`<tr>${t.map((t=>r.dy`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return r.dy`
    ${this.dt_foot.map((t=>r.dy`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const o=this.ajaxHeader[t];e[t]=o}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};l.styles=[r.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],a([(0,i.Cb)({type:Number}),s("design:type",Number)],l.prototype,"randomID1",void 0),a([(0,i.Cb)({type:Number}),s("design:type",Number)],l.prototype,"randomID2",void 0),a([(0,i.Cb)({type:String}),s("design:type",String)],l.prototype,"ID",void 0),a([(0,i.Cb)({type:Object}),s("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],l.prototype,"datatable",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],l.prototype,"dt_head",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],l.prototype,"dt_foot",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],l.prototype,"dt_body",void 0),a([(0,i.Cb)(),s("design:type",Object)],l.prototype,"ajaxHeader",void 0),l=a([(0,i.Mo)("datatables-new"),s("design:paramtypes",[])],l)},8281:(t,e,o)=>{var n=o(771),r=o(5862),i=o(8393),a=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends r.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return r.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(t){t.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=n.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+e}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=n.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+e}}createRenderRoot(){return this}};l.styles=[r.iv`
   :host { display: block; }
  `],a([(0,i.Cb)({type:String}),s("design:type",String)],l.prototype,"url",void 0),a([(0,i.Cb)({type:String}),s("design:type",String)],l.prototype,"type",void 0),a([(0,i.Cb)({type:Boolean}),s("design:type",Boolean)],l.prototype,"rounded",void 0),a([(0,i.Cb)({type:String}),s("design:type",String)],l.prototype,"click-to-open",void 0),a([(0,i.Cb)({type:Number}),s("design:type",Number)],l.prototype,"size",void 0),l=a([(0,i.Mo)("user-profile-photo"),s("design:paramtypes",[])],l)},9981:(t,e,o)=>{o.d(e,{W:()=>n});const n={view:21,edit:22,create:23,"view-organization":53,"edit-organization":54}},936:(t,e,o)=>{o.d(e,{Mo:()=>a.M,dy:()=>r.dy,iv:()=>n.iv,oi:()=>i.oi});var n=o(7898),r=o(3692),i=o(8922),a=o(5713);o(7935),o(43),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.")}}]);
//# sourceMappingURL=9917.js.map