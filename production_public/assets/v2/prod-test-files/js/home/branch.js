"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8214],{2004:(e,t,n)=>{n.d(t,{hk:()=>a,U8:()=>s,eF:()=>o});var i=n(7052),c=n(1942);const r="pdb-active-branch",o=e=>{const t=JSON.stringify(e);(0,c.Ad)(r,"",-1),(0,c.Ad)(r,(0,i.h)(t),3500)};function s(){(0,c.Ad)(r,"",-1)}const a=()=>{if(""===(0,c.Hl)(r))return null;{const t=(0,i.t)((0,c.Hl)(r));return e=JSON.parse(t),{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}var e}},6224:(e,t,n)=>{n.d(t,{p:()=>s});var i=n(771),c=n(7270),r=n(596),o=n(3600);function s(e=null){return t=this,n=void 0,a=function*(){const t=(0,o.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),s=yield(0,c.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,i){function c(e){try{o(a.next(e))}catch(e){i(e)}}function r(e){try{o(a.throw(e))}catch(e){i(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(c,r)}o((a=a.apply(t,n||[])).next())}));var t,n,s,a}},8763:(e,t,n)=>{var i=n(5862),c=n(8393),r=function(e,t,n,i){var c,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(o=(r<3?c(o):r>3?c(t,n,o):c(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends i.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?i.dy`
        <div class="bg-white alert-box p-0 pr-2 mb-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4 placeholder--load-wrapper">
              <div class="p-3 placeholder--activity">
                <i class="p-2"></i>
              </div>
            </div>
            <div class="ml-2 flex-1 placeholder--load-wrapper">
              <div class="placeholder--activity p-2"></div>
            </div>
          </div>
        </div>
      `:i.dy`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?i.dy`<header class="header">${this.header}</header>`:i.Ld}
              ${null!==this.content?i.dy`<main class="main">${this.content}</main>`:i.Ld}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?i.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?i.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?i.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?i.dy`<mwc-icon>warning</mwc-icon>`:this.danger?i.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?i.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?i.dy`<mwc-icon>star_outline</mwc-icon>`:i.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};s.styles=[i.iv`
   :host { display: block; }
  `],r([(0,c.Cb)({type:Boolean}),o("design:type",Boolean)],s.prototype,"loading",void 0),r([(0,c.Cb)({type:Boolean}),o("design:type",Boolean)],s.prototype,"success",void 0),r([(0,c.Cb)({type:Boolean}),o("design:type",Boolean)],s.prototype,"info",void 0),r([(0,c.Cb)({type:Boolean}),o("design:type",Boolean)],s.prototype,"warning",void 0),r([(0,c.Cb)({type:Boolean}),o("design:type",Boolean)],s.prototype,"danger",void 0),r([(0,c.Cb)({type:Boolean}),o("design:type",Boolean)],s.prototype,"default",void 0),r([(0,c.Cb)({type:Boolean}),o("design:type",Boolean)],s.prototype,"primary",void 0),r([(0,c.Cb)({type:String}),o("design:type",String)],s.prototype,"extra_class",void 0),s=r([(0,c.Mo)("alert-card"),o("design:paramtypes",[])],s)},2715:(e,t,n)=>{var i=n(5862),c=n(8393),r=function(e,t,n,i){var c,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(o=(r<3?c(o):r>3?c(t,n,o):c(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends i.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const e=this.thisIsBlockContent("mdc-deprecated-list-item"),t=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.dy`
        <a class="${e} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:i.dy`
        <a class="${e} ${this.aClass}" href="${this.href}">
          <mwc-button class="${t} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(e){return"true"===this.isBlockContent?e:""}createRenderRoot(){return this}};r([(0,c.Cb)({type:String}),o("design:type",String)],s.prototype,"aClass",void 0),r([(0,c.Cb)({type:String}),o("design:type",String)],s.prototype,"bClass",void 0),r([(0,c.Cb)({type:String}),o("design:type",String)],s.prototype,"icon",void 0),r([(0,c.Cb)({type:String}),o("design:type",String)],s.prototype,"href",void 0),r([(0,c.Cb)({type:String}),o("design:type",String)],s.prototype,"label",void 0),r([(0,c.Cb)({type:String}),o("design:type",String)],s.prototype,"isBlockContent",void 0),r([(0,c.Cb)({type:Boolean}),o("design:type",Boolean)],s.prototype,"raised",void 0),s=r([(0,c.Mo)("link-button")],s)},928:(e,t,n)=>{n.r(t),n.d(t,{PdbBranchElement:()=>h});var i=n(5862),c=n(8393),r=(n(5248),n(2715),n(9261),n(6224)),o=n(3600),s=n(2004),a=(n(8763),function(e,t,n,i){var c,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(o=(r<3?c(o):r>3?c(t,n,o):c(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,i){return new(n||(n=Promise))((function(c,r){function o(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}a((i=i.apply(e,t||[])).next())}))};let h=class extends i.oi{constructor(){super(),this._myBranchId=0,this._branches=[],this._activeBranchId=null,this._userLoginInfo=null}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getBranches();const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.Ie)()]}))}disconnectedCallback(){}render(){return i.dy`
      <div class="mb-4">
        <div class="col-md-12 col-lg-12 my-2">
          ${this.activeBranch}
        </div>
        <div class="col-md-12 col-lg-12 my-2">
          ${this.myBranch}
        </div>
        ${this.branchSelector}
      </div>
    `}get activeBranch(){let e=0;null!==this._activeBranchId&&this._activeBranchId.length>0&&(e=this._activeBranchId[0].id);let t=null;if(this._branches.forEach((n=>{n.id===e&&(t=n)})),null!==t){const e=i.dy`<h4 class="text-white">Active Branch</h4>`,n=i.dy`<div>
        <h1 class="text-white mb-2 text-xl">${t.name}</h1>
      </div>`;return i.dy`<alert-card success .header="${e}" .content="${n}"></alert-card>`}return i.dy``}get myBranch(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);let t=null;if(this._branches.forEach((n=>{n.id===e&&(t=n,this._myBranchId=n.id)})),null===t){const e=i.dy`<h4 class="text-white">No Branch Found</h4>`,t=i.dy`<div>
        <p class="text-white">User Branch Not Found!</p>
      </div>`;return i.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{const e=i.dy`<h4 class="text-primary">${t.name}</h4>`,n=i.dy`<div>
        <p class="text-black mb-2">Click on the button below to set as active branch</p>
        <mwc-button label="Set Active" id="${t.id}" name="${t.name}"
          accountId="${t.accountId}" raised class="primary"
          setMyBranchAsActive @click="${this.setMyBranchAsActive}"></mwc-button>
      </div>`;return i.dy`<alert-card info .header="${e}" .content="${n}"></alert-card>`}}get branchSelector(){return 1===this._myBranchId?i.dy`
        <div class="col-md-8 col-lg-6 my-2">
          <h3 class="font-semibold my-2">Select Branch</h3>
          <mwc-select name="branchId" setSelectedBranchAsActiveList class="w-full" id="branchId" label="Select Branch" outlined required>
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((e=>i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
          <mwc-button label="Set Active" raised class="flex mt-2"
            setSelectedBranchAsActive @click="${this.setSelectedBranchAsActive}"></mwc-button>
        </div>
      `:i.Ld}firstUpdated(){}setMyBranchAsActive(e){e.preventDefault(),this.querySelectorAll("mwc-button[setMyBranchAsActive]").forEach((e=>{const t=e.getAttribute("id"),n=Number(t),i=e.getAttribute("name"),c=String(i),r=e.getAttribute("accountId"),o=Number(r);(0,s.eF)({id:n,name:c,accountId:o}),window.location.reload()}))}setSelectedBranchAsActive(e){e.preventDefault(),this.querySelectorAll("mwc-select[setSelectedBranchAsActiveList]").forEach((e=>{const t=Number(e.value);let n=null;this._branches.forEach((e=>{e.id===t&&(n=e)})),null!==n&&((0,s.eF)(n),window.location.reload())}))}getBranches(){return d(this,void 0,void 0,(function*(){const e=yield(0,r.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}createRenderRoot(){return this}};h.styles=[i.iv`
   :host { display: block; }
  `],a([(0,c.Cb)({type:Number}),l("design:type",Number)],h.prototype,"_myBranchId",void 0),a([(0,c.Cb)({type:Array}),l("design:type",Array)],h.prototype,"_branches",void 0),a([(0,c.Cb)({type:Array}),l("design:type",Array)],h.prototype,"_activeBranchId",void 0),a([(0,c.Cb)({type:Array}),l("design:type",Array)],h.prototype,"_userLoginInfo",void 0),h=a([(0,c.Mo)("pdb-branch-element"),l("design:paramtypes",[])],h)},8082:(e,t,n)=>{n.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=n(875)}},e=>(e.O(0,[2185,5744,7154,1080,5291,214,3712],(()=>(928,e(e.s=928)))),e.O())])));
//# sourceMappingURL=branch.js.map