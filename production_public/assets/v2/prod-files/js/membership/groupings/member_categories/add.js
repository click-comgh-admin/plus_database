/*! For license information please see add.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3075],{8967:(e,t,n)=>{n.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>d});var o=n(771),r=n(7270),i=n(7052),c=n(1942),a=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};const s=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=o.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",s=n,d=JSON.stringify({email:e,id:t});yield(0,r.d)(a,{method:"POST",body:d},!0).then((e=>{if(e.jsonData.token){const t=(0,i.h)(String(e.jsonData.token));(0,c.Ad)(s,t,10),(0,c.vh)(s+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const d=(0,i.h)(String(t)),l=n;window.supersecret={unknowable:{ops:{email:e,id:d,cookieName:l}}},""==(0,c.Hl)(l)?yield s(e,d,n):yield((e,t,n)=>a(void 0,void 0,void 0,(function*(){const d=o.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",l=n,u=(0,c.Hl)(l),f=JSON.stringify({token:(0,i.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,c.Hl)(l+"_date"))))return u;yield(0,r.d)(d,{method:"POST",body:f},!0).then((o=>a(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,i.h)(String(o.jsonData.token));(0,c.Ad)(l,e,10),(0,c.vh)(l+"_date",(new Date).toUTCString(),10)}else yield s(e,t,n)}))))})))(e,d,n)}))},4672:(e,t,n)=>{n.d(t,{Jx:()=>r,O1:()=>o,Vc:()=>i,W3:()=>c});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},i=e=>new URLSearchParams(window.location.search).getAll(e),c=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},3717:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsMemberCategoriesAdd:()=>O});var o,r=n(4108),i=n(5862),c=n(8393),a=(n(5248),n(3313),n(934),n(6811),n(4672)),s=n(6455),d=n.n(s),l=n(771),u=n(7270),f=n(596),p=n(8967),m=n(3600),y=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))},h=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((o=o.apply(e,t||[])).next())}))};let v=class extends i.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.O1)()}))}disconnectedCallback(){}render(){return i.dy`
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
                  <h3 class="h3">Add Member Category</h3>
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
                      <mwc-button label="Add" raised class="button" @click="${this.submitForm}">
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
    `}get memberCategoryField(){return i.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Member Category</h4>
            <mwc-textfield name="category" type="text" class="w-full" id="category" value="" label="Enter member-category Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return y(this,void 0,void 0,(function*(){const e=(0,m.Ie)(),t=l.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category",n=document.querySelector('[make-general-posts="groupings-member-category"]'),o=new FormData(n);return d().fire({title:"Add Member Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>y(this,void 0,void 0,(function*(){return yield(0,u.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new f.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,p.T)(e);d().showValidationMessage(`${t}`)}return t})).catch((e=>{d().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!d().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&d().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};v.styles=[i.iv`
   :host { display: block; }
  `],h([(0,c.Cb)({type:Number}),b("design:type",Number)],v.prototype,"CLIENT_ID",void 0),h([(0,c.Cb)({type:Array}),b("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],v.prototype,"_data",void 0),h([(0,c.Cb)({type:Object}),b("design:type",Object)],v.prototype,"urlQueryParams",void 0),v=h([(0,c.Mo)("membership-groupings-member-categories-add-member-category"),b("design:paramtypes",[])],v),n(3683),n(4657);var w=n(9665),C=n(2145),k=n(1302),A=n(7641),x=function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let O=class extends i.oi{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,w.f)().then((()=>this._hasSetup=!0)),yield(0,r.B)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,r){function c(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,a)}s((i=i.apply(t,n||[])).next())}));var t,n,o,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,C.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(!(0,k.H)({pageId:A.W.grouping,viewType:"Edit"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <div class="shadow bg-white p-2">
        <membership-groupings-member-categories-add-member-category CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-add-member-category>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};x([(0,c.Cb)({type:String}),R("design:type",String)],O.prototype,"email",void 0),x([(0,c.Cb)({type:Number}),R("design:type",Number)],O.prototype,"mId",void 0),x([(0,c.Cb)({type:Number}),R("design:type",Number)],O.prototype,"clientId",void 0),x([(0,c.Cb)({type:Boolean}),R("design:type",Boolean)],O.prototype,"_hasSetup",void 0),O=x([(0,c.Mo)("membership-groupings-member-categories-add"),R("design:paramtypes",[])],O)},7641:(e,t,n)=>{n.d(t,{W:()=>o});const o={grouping:33,assignment:34}},4232:(e,t,n)=>{n.d(t,{OR:()=>c,hl:()=>s,pt:()=>i});var o=n(3692);const{I:r}=o.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=e=>void 0===e.strings,a={},s=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{XM:()=>o.XM,Xe:()=>o.Xe,pX:()=>o.pX});var o=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>c});var o=n(3692),r=n(875),i=n(4232);const c=(0,r.XM)(class extends r.Xe{constructor(e){if(super(e),e.type!==r.pX.PROPERTY&&e.type!==r.pX.ATTRIBUTE&&e.type!==r.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===o.Jb||t===o.Ld)return t;const n=e.element,c=e.name;if(e.type===r.pX.PROPERTY){if(t===n[c])return o.Jb}else if(e.type===r.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(c))return o.Jb}else if(e.type===r.pX.ATTRIBUTE&&n.getAttribute(c)===t+"")return o.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,7154,1080,5291,6236,6069,214,3901,3712],(()=>(3717,e(e.s=3717)))),e.O())])));
//# sourceMappingURL=add.js.map