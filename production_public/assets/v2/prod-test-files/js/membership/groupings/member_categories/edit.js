/*! For license information please see edit.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1246],{8967:(e,t,r)=>{r.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,r)=>{r.d(t,{B:()=>d});var n=r(771),o=r(7270),i=r(7052),a=r(1942),s=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};const c=(e,t,r)=>s(void 0,void 0,void 0,(function*(){const s=n.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=r,d=JSON.stringify({email:e,id:t});yield(0,o.d)(s,{method:"POST",body:d},!0).then((e=>{if(e.jsonData.token){const t=(0,i.h)(String(e.jsonData.token));(0,a.Ad)(c,t,10),(0,a.vh)(c+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,r)=>s(void 0,void 0,void 0,(function*(){const d=(0,i.h)(String(t)),l=r;window.supersecret={unknowable:{ops:{email:e,id:d,cookieName:l}}},""==(0,a.Hl)(l)?yield c(e,d,r):yield((e,t,r)=>s(void 0,void 0,void 0,(function*(){const d=n.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",l=r,u=(0,a.Hl)(l),m=JSON.stringify({token:(0,i.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,a.Hl)(l+"_date"))))return u;yield(0,o.d)(d,{method:"POST",body:m},!0).then((n=>s(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,i.h)(String(n.jsonData.token));(0,a.Ad)(l,e,10),(0,a.vh)(l+"_date",(new Date).toUTCString(),10)}else yield c(e,t,r)}))))})))(e,d,r)}))},4672:(e,t,r)=>{r.d(t,{Jx:()=>o,O1:()=>n,Vc:()=>i,W3:()=>a});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},i=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},72:(e,t,r)=>{r.d(t,{L:()=>s});var n=r(771),o=r(7270),i=r(596),a=r(3600);function s(e=null){return t=this,r=void 0,c=function*(){const t=(0,a.Ie)(),r=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),s=yield(0,o.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new i.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function o(e){try{a(c.next(e))}catch(e){n(e)}}function i(e){try{a(c.throw(e))}catch(e){n(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(o,i)}a((c=c.apply(t,r||[])).next())}));var t,r,s,c}},1056:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesEdit:()=>T});var n,o=r(4108),i=r(5862),a=r(8393),s=(r(5248),r(3313),r(934),r(6811),r(4672)),c=r(6455),d=r.n(c),l=r(771),u=r(7270),m=r(596),f=r(8967),p=r(3600),y=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))},h=r(72),g=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};let w=class extends i.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.__memberCategory=null,this.memberCategoryId=0}set _memberCategory(e){this.__memberCategory=e,this.requestUpdate()}get _memberCategory(){return this.__memberCategory}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.O1)(),this.getMemberCategoryId(),yield this.getClientMemberCategory()}))}disconnectedCallback(){}render(){return null===this._memberCategory?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberCategory?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Category</span>: undefined error</h4>
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
                  <h1 class="h1 !text-red-400">Groupings: Member Category</h1>
                  <h3 class="h3">Edit Member Category</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="groupings-member-category">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.memberCategoryField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">

                      ${1===this.memberCategoryId?i.dy``:i.dy`
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
    `}get memberCategoryField(){let e=null;return e=null!==this._memberCategory&&void 0!==this._memberCategory.data?Array.isArray(this._memberCategory.data)?this._memberCategory.data.length>0?this._memberCategory.data[0]:{id:void 0,category:""}:this._memberCategory.data:{id:void 0,category:""},i.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Member Category</h4>
            <mwc-textfield name="category" type="text" class="w-full" id="category" value="${void 0===e.id?"":e.category}" label="Enter memberCategory Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getMemberCategoryId(){let e=(0,s.Jx)("member-category-id"),t=null!==e?Number(e):null;this.memberCategoryId=Number.isNaN(t)?null:t}getClientMemberCategory(){return v(this,void 0,void 0,(function*(){const e=yield(0,h.L)(this.memberCategoryId);this._memberCategory=null===e?void 0:e.response}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return y(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),r=l.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,n=document.querySelector('[make-general-posts="groupings-member-category"]'),o=new FormData(n);return d().fire({title:"Update Member Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>y(this,void 0,void 0,(function*(){return yield(0,u.d)(r,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new m.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,f.T)(e);d().showValidationMessage(`${t}`)}return t})).catch((e=>{d().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!d().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&d().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.memberCategoryId)}))}createRenderRoot(){return this}};w.styles=[i.iv`
   :host { display: block; }
  `],g([(0,a.Cb)({type:Number}),b("design:type",Number)],w.prototype,"CLIENT_ID",void 0),g([(0,a.Cb)({type:Array}),b("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],w.prototype,"_data",void 0),g([(0,a.Cb)({type:Object}),b("design:type",Object)],w.prototype,"urlQueryParams",void 0),g([(0,a.Cb)({type:Number}),b("design:type",Number)],w.prototype,"memberCategoryId",void 0),w=g([(0,a.Mo)("membership-groupings-member-categories-edit-member-category"),b("design:paramtypes",[])],w),r(3683),r(4657);var C=r(5474),_=r(2145),A=r(1302),k=r(7641),x=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let T=class extends i.oi{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,i=function*(){e.connectedCallback.call(this),(0,C.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,s)}c((i=i.apply(t,r||[])).next())}));var t,r,n,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,_.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(!(0,A.H)({pageId:k.W.grouping,viewType:"Edit"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <div class="shadow bg-white p-2">
        <membership-groupings-member-categories-edit-member-category CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-edit-member-category>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};x([(0,a.Cb)({type:String}),R("design:type",String)],T.prototype,"email",void 0),x([(0,a.Cb)({type:Number}),R("design:type",Number)],T.prototype,"mId",void 0),x([(0,a.Cb)({type:Number}),R("design:type",Number)],T.prototype,"clientId",void 0),x([(0,a.Cb)({type:Boolean}),R("design:type",Boolean)],T.prototype,"_hasSetup",void 0),T=x([(0,a.Mo)("membership-groupings-member-categories-edit"),R("design:paramtypes",[])],T)},7641:(e,t,r)=>{r.d(t,{W:()=>n});const n={grouping:33,assignment:34}},4232:(e,t,r)=>{r.d(t,{OR:()=>a,hl:()=>c,pt:()=>i});var n=r(3692);const{I:o}=n.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,a=e=>void 0===e.strings,s={},c=(e,t=s)=>e._$AH=t},8082:(e,t,r)=>{r.d(t,{XM:()=>n.XM,Xe:()=>n.Xe,pX:()=>n.pX});var n=r(875)},3669:(e,t,r)=>{r.d(t,{a:()=>a});var n=r(3692),o=r(875),i=r(4232);const a=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n.Jb||t===n.Ld)return t;const r=e.element,a=e.name;if(e.type===o.pX.PROPERTY){if(t===r[a])return n.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(a))return n.Jb}else if(e.type===o.pX.ATTRIBUTE&&r.getAttribute(a)===t+"")return n.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,7154,1080,5291,6236,7583,214,3901,3712],(()=>(1056,e(e.s=1056)))),e.O())])));
//# sourceMappingURL=edit.js.map