/*! For license information please see edit.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[821],{8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>d});var r=n(771),o=n(7270),i=n(7052),c=n(1942),a=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))};const s=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=r.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",s=n,d=JSON.stringify({email:e,id:t});yield(0,o.d)(a,{method:"POST",body:d},!0).then((e=>{if(e.jsonData.token){const t=(0,i.h)(String(e.jsonData.token));(0,c.Ad)(s,t,10),(0,c.vh)(s+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const d=(0,i.h)(String(t)),l=n;window.supersecret={unknowable:{ops:{email:e,id:d,cookieName:l}}},""==(0,c.Hl)(l)?yield s(e,d,n):yield((e,t,n)=>a(void 0,void 0,void 0,(function*(){const d=r.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",l=n,u=(0,c.Hl)(l),h=JSON.stringify({token:(0,i.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,c.Hl)(l+"_date"))))return u;yield(0,o.d)(d,{method:"POST",body:h},!0).then((r=>a(void 0,void 0,void 0,(function*(){if(r.jsonData.token&r.jsonData.user&r.jsonData.expiry){const e=(0,i.h)(String(r.jsonData.token));(0,c.Ad)(l,e,10),(0,c.vh)(l+"_date",(new Date).toUTCString(),10)}else yield s(e,t,n)}))))})))(e,d,n)}))},4672:(e,t,n)=>{n.d(t,{Jx:()=>o,O1:()=>r,Vc:()=>i,W3:()=>c});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},i=e=>new URLSearchParams(window.location.search).getAll(e),c=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},6224:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(771),o=n(7270),i=n(596),c=n(3600);function a(e=null){return t=this,n=void 0,s=function*(){const t=(0,c.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,o.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,r){function o(e){try{c(s.next(e))}catch(e){r(e)}}function i(e){try{c(s.throw(e))}catch(e){r(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}c((s=s.apply(t,n||[])).next())}));var t,n,a,s}},8852:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBranchesEdit:()=>B});var r,o=n(4108),i=n(9392),c=n(1936),a=(n(5248),n(3313),n(934),n(6811),n(4672)),s=n(6224),d=n(6455),l=n.n(d),u=n(771),h=n(7270),f=n(596),p=n(8967),m=n(3600),b=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))},y=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))};let w=class extends i.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.__branch=null,this.branchId=0}set _branch(e){this.__branch=e,this.requestUpdate()}get _branch(){return this.__branch}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.O1)(),this.getBranchId(),yield this.getClientBranch()}))}disconnectedCallback(){}render(){return null===this._branch?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._branch?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Branch</span>: undefined error</h4>
          </div>
        </div>
      `:i.dy`
        ${this.form}
      `}get form(){return i.dy`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Branch</h1>
                  <h3 class="h3">Edit Branch</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="client-branch">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.branchField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      ${1===this.branchId?i.dy``:i.dy`
                        <mwc-button label="Update" raised class="button" @click="${this.submitForm}">
                        </mwc-button>
                      `}
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
    `}get branchField(){let e=null;return e=null!==this._branch&&void 0!==this._branch.data?Array.isArray(this._branch.data)?this._branch.data.length>0?this._branch.data[0]:{id:void 0,name:""}:this._branch.data:{id:void 0,name:""},i.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Branch</h4>
            <mwc-textfield name="name" type="text" class="w-full" id="name" value="${void 0===e.id?"":e.name}" label="Enter branch Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getBranchId(){let e=(0,a.Jx)("branch-id"),t=null!==e?Number(e):null;this.branchId=Number.isNaN(t)?null:t}getClientBranch(){return g(this,void 0,void 0,(function*(){const e=yield(0,s.p)(this.branchId);this._branch=null===e?void 0:e.response}))}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return b(this,void 0,void 0,(function*(){const t=(0,m.Ie)(),n=u.t.URLS.AKWAABA_API_BASE_URL+"clients/branch/"+e,r=document.querySelector('[make-general-posts="client-branch"]'),o=new FormData(r);return l().fire({title:"Update Branch?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>b(this,void 0,void 0,(function*(){return yield(0,h.d)(n,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new f.H("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,p.T)(e);l().showValidationMessage(`${t}`)}return t})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&l().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.branchId)}))}createRenderRoot(){return this}};w.styles=[i.iv`
   :host { display: block; }
  `],y([(0,c.Cb)({type:Number}),v("design:type",Number)],w.prototype,"CLIENT_ID",void 0),y([(0,c.Cb)({type:Array}),v("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],w.prototype,"_data",void 0),y([(0,c.Cb)({type:Object}),v("design:type",Object)],w.prototype,"urlQueryParams",void 0),y([(0,c.Cb)({type:Number}),v("design:type",Number)],w.prototype,"branchId",void 0),w=y([(0,c.Mo)("membership-groupings-branches-edit-branch"),v("design:paramtypes",[])],w),n(3683),n(4657);var _=n(9665),A=n(2145),k=n(1302),x=n(7641),C=function(e,t,n,r){var o,i=arguments.length,c=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,n,c):o(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let B=class extends i.oi{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,_.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function c(e){try{s(i.next(e))}catch(e){o(e)}}function a(e){try{s(i.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,a)}s((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,A.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(!(0,k.H)({pageId:x.W.grouping,viewType:"Edit"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <div class="shadow bg-white p-2" >
        <membership-groupings-branches-edit-branch CLIENT_ID="${this.clientId}"></membership-groupings-branches-edit-branch>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};C([(0,c.Cb)({type:String}),R("design:type",String)],B.prototype,"email",void 0),C([(0,c.Cb)({type:Number}),R("design:type",Number)],B.prototype,"mId",void 0),C([(0,c.Cb)({type:Number}),R("design:type",Number)],B.prototype,"clientId",void 0),C([(0,c.Cb)({type:Boolean}),R("design:type",Boolean)],B.prototype,"_hasSetup",void 0),B=C([(0,c.Mo)("membership-groupings-branches-edit"),R("design:paramtypes",[])],B)},7641:(e,t,n)=>{n.d(t,{W:()=>r});const r={grouping:33,assignment:34}},4232:(e,t,n)=>{n.d(t,{OR:()=>c,hl:()=>s,pt:()=>i});var r=n(3692);const{I:o}=r.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=e=>void 0===e.strings,a={},s=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{XM:()=>r.XM,Xe:()=>r.Xe,pX:()=>r.pX});var r=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>c});var r=n(3692),o=n(875),i=n(4232);const c=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,c=e.name;if(e.type===o.pX.PROPERTY){if(t===n[c])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(c))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(c)===t+"")return r.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,316,836,5291,6236,6069,214,3901,3712],(()=>(8852,e(e.s=8852)))),e.O())])));
//# sourceMappingURL=edit.js.map