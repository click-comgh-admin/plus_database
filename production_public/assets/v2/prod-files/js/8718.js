/*! For license information please see 8718.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8718,1454],{2368:(t,e,i)=>{i.d(e,{L:()=>n});var r=i(4672);class n{constructor(t){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=t=>{var e,i;t.preventDefault();const r=window.FilterFieldBox.form,n=new FormData(r),o=null===(e=this.unmutableInputNames)||void 0===e?void 0:e.map((t=>t.name));null==n||n.forEach(((t,e)=>{var i;(null==o?void 0:o.includes(e))||null===(i=document.querySelectorAll('[name="'+e+'"]'))||void 0===i||i.forEach((t=>{t.value=""}))})),null===(i=this.unmutableInputNames)||void 0===i||i.map((t=>{var e;const i=t.name,r=t.value;void 0!==r&&(null===(e=document.querySelectorAll('[name="'+i+'"]'))||void 0===e||e.forEach((t=>{t.value=r})))})),r.submit()},this.constructorInit=t;const e=t.selectors;this.form=e.form,this.container=e.container,this.filterSectionContextBtn=e.filterSectionContextBtn,this.unmutableInputNames=t.unmutableInputNames,this.__filtering__open_default=t.isOpen,this.__filtering__=(0,r.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(t){t.preventDefault();const e=window.FilterFieldBox;if(e.__allowed){const t=e.filterSectionContextBtn,i=e.container;i.hasAttribute("hidden")?(i.removeAttribute("hidden"),t.setAttribute("class","warning mt-1"),t.setAttribute("icon","close_fullscreen")):(i.setAttribute("hidden",""),t.setAttribute("class","primary mt-1"),t.setAttribute("icon","open_with"))}}addfilterCheckInput(){const t=window.FilterFieldBox.form,e=document.createElement("input");e.type="hidden",e.value="true",e.name=this.filtering,t.appendChild(e)}toggleFilterFieldsDefault(){const t=this;function e(){t.container.hasAttribute("hidden")&&t.filterSectionContextBtn.click()}"true"===this.__filtering__&&e(),this.__filtering__open_default&&e()}submit(t){t.preventDefault(),window.FilterFieldBox.form.submit()}}},8967:(t,e,i)=>{i.d(e,{T:()=>r});const r=(t,e=!0)=>{if(Array.isArray(t)){let i=(e?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return t.forEach((t=>{i+="string"==typeof t?`<li>${t}</li>\n`:`<li>${t.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},4672:(t,e,i)=>{i.d(e,{Jx:()=>n,O1:()=>r,Vc:()=>o,W3:()=>l});const r=()=>{const t=new URLSearchParams(window.location.search);return Object.fromEntries(t.entries())},n=t=>{const e=new URLSearchParams(window.location.search),i=Object.fromEntries(e.entries());let r=null;for(const e in i)e===t&&(r=i[e]);return r},o=t=>new URLSearchParams(window.location.search).getAll(t),l=t=>{let e="",i=0;for(const r in t)i+=1,e+=`${i>1?"&":""}${r}=${t[r]}`;return e}},6224:(t,e,i)=>{i.d(e,{p:()=>a});var r=i(771),n=i(7270),o=i(596),l=i(3600);function a(t=null){return e=this,i=void 0,s=function*(){const e=(0,l.Ie)(),i=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===t?"":"/"+t),a=yield(0,n.d)(i,{method:"GET",headers:{Authorization:"Token "+e.token}},!0);try{return new o.H("get",a)}catch(t){console.error({error:t});let e=a;return e.error=t,new o.H("get",e,!0)}},new((a=void 0)||(a=Promise))((function(t,r){function n(t){try{l(s.next(t))}catch(t){r(t)}}function o(t){try{l(s.throw(t))}catch(t){r(t)}}function l(e){var i;e.done?t(e.value):(i=e.value,i instanceof a?i:new a((function(t){t(i)}))).then(n,o)}l((s=s.apply(e,i||[])).next())}));var e,i,a,s}},6883:(t,e,i)=>{var r,n=i(9392),o=i(1936),l=function(t,e,i,r){var n,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(l=(o<3?n(l):o>3?n(e,i,l):n(e,i))||l);return o>3&&l&&Object.defineProperty(e,i,l),l},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let s=class extends n.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return n.dy`
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
  `}thead(){return n.dy`
      ${this.dt_head.map((t=>n.dy`<th>${t.title}</th>`))}
    `}tbody(){return n.dy`
      ${this.dt_body.map((t=>n.dy`<tr>${t.map((t=>n.dy`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return n.dy`
    ${this.dt_foot.map((t=>n.dy`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const i=this.ajaxHeader[t];e[t]=i}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};s.styles=[n.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],l([(0,o.Cb)({type:Number}),a("design:type",Number)],s.prototype,"randomID1",void 0),l([(0,o.Cb)({type:Number}),a("design:type",Number)],s.prototype,"randomID2",void 0),l([(0,o.Cb)({type:String}),a("design:type",String)],s.prototype,"ID",void 0),l([(0,o.Cb)({type:Object}),a("design:type","function"==typeof(r="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?r:Object)],s.prototype,"datatable",void 0),l([(0,o.Cb)({type:Array}),a("design:type",Array)],s.prototype,"dt_head",void 0),l([(0,o.Cb)({type:Array}),a("design:type",Array)],s.prototype,"dt_foot",void 0),l([(0,o.Cb)({type:Array}),a("design:type",Array)],s.prototype,"dt_body",void 0),l([(0,o.Cb)(),a("design:type",Object)],s.prototype,"ajaxHeader",void 0),s=l([(0,o.Mo)("datatables-new"),a("design:paramtypes",[])],s)},8281:(t,e,i)=>{var r=i(771),n=i(9392),o=i(1936),l=function(t,e,i,r){var n,o=arguments.length,l=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(l=(o<3?n(l):o>3?n(e,i,l):n(e,i))||l);return o>3&&l&&Object.defineProperty(e,i,l),l},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let s=class extends n.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return n.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(t){t.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=r.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+e}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=r.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+e}}createRenderRoot(){return this}};s.styles=[n.iv`
   :host { display: block; }
  `],l([(0,o.Cb)({type:String}),a("design:type",String)],s.prototype,"url",void 0),l([(0,o.Cb)({type:String}),a("design:type",String)],s.prototype,"type",void 0),l([(0,o.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"rounded",void 0),l([(0,o.Cb)({type:String}),a("design:type",String)],s.prototype,"click-to-open",void 0),l([(0,o.Cb)({type:Number}),a("design:type",Number)],s.prototype,"size",void 0),s=l([(0,o.Mo)("user-profile-photo"),a("design:paramtypes",[])],s)},4232:(t,e,i)=>{i.d(e,{OR:()=>l,hl:()=>s,pt:()=>o});var r=i(3692);const{I:n}=r.Al,o=t=>null===t||"object"!=typeof t&&"function"!=typeof t,l=t=>void 0===t.strings,a={},s=(t,e=a)=>t._$AH=e},8082:(t,e,i)=>{i.d(e,{XM:()=>r.XM,Xe:()=>r.Xe,pX:()=>r.pX});var r=i(875)},3669:(t,e,i)=>{i.d(e,{a:()=>l});var r=i(3692),n=i(875),o=i(4232);const l=(0,n.XM)(class extends n.Xe{constructor(t){if(super(t),t.type!==n.pX.PROPERTY&&t.type!==n.pX.ATTRIBUTE&&t.type!==n.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.OR)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===r.Jb||e===r.Ld)return e;const i=t.element,l=t.name;if(t.type===n.pX.PROPERTY){if(e===i[l])return r.Jb}else if(t.type===n.pX.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(l))return r.Jb}else if(t.type===n.pX.ATTRIBUTE&&i.getAttribute(l)===e+"")return r.Jb;return(0,o.hl)(t),e}})}}]);
//# sourceMappingURL=8718.js.map