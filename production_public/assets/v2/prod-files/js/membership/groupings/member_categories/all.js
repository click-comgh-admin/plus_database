"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8238],{8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.d(t,{B:()=>l});var r=n(771),o=n(7270),i=n(7052),a=n(1942),c=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};const s=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const c=r.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",s=n,l=JSON.stringify({email:e,id:t});yield(0,o.d)(c,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,i.h)(String(e.jsonData.token));(0,a.Ad)(s,t,10),(0,a.vh)(s+"_date",(new Date).toUTCString(),10)}}))})),l=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const l=(0,i.h)(String(t)),d=n;window.supersecret={unknowable:{ops:{email:e,id:l,cookieName:d}}},""==(0,a.Hl)(d)?yield s(e,l,n):yield((e,t,n)=>c(void 0,void 0,void 0,(function*(){const l=r.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,a.Hl)(d),m=JSON.stringify({token:(0,i.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,a.Hl)(d+"_date"))))return u;yield(0,o.d)(l,{method:"POST",body:m},!0).then((r=>c(void 0,void 0,void 0,(function*(){if(r.jsonData.token&r.jsonData.user&r.jsonData.expiry){const e=(0,i.h)(String(r.jsonData.token));(0,a.Ad)(d,e,10),(0,a.vh)(d+"_date",(new Date).toUTCString(),10)}else yield s(e,t,n)}))))})))(e,l,n)}))},4672:(e,t,n)=>{n.d(t,{Jx:()=>o,O1:()=>r,Vc:()=>i,W3:()=>a});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},i=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},72:(e,t,n)=>{n.d(t,{L:()=>c});var r=n(771),o=n(7270),i=n(596),a=n(3600);function c(e=null){return t=this,n=void 0,s=function*(){const t=(0,a.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),c=yield(0,o.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,r){function o(e){try{a(s.next(e))}catch(e){r(e)}}function i(e){try{a(s.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(o,i)}a((s=s.apply(t,n||[])).next())}));var t,n,c,s}},134:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsMemberCategories:()=>j});var r,o=n(4108),i=n(5862),a=n(8393),c=(n(5248),n(934),n(6811),n(4672)),s=n(771),l=n(72),d=n(6455),u=n.n(d),m=n(7270),p=n(596),f=n(8967),h=n(3600),b=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},y=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};let w=class extends i.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,c.O1)(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){return null===this._memberCategories?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberCategories?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">MemberCategories</span>: undefined error</h4>
          </div>
        </div>
      `:i.dy`
        ${this.table}
      `}get table(){return this._memberCategories.length>0?i.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member Category</b>
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
                ${this.getMemberCategories}
              </tbody>
            </table>
          </div>
        </div>
      `:i.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberCategories(){return i.dy`
      ${this._memberCategories.map(((e,t)=>i.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a class="text-blue-700" href="${s.t.URLS.PDB_CLIENT}groupings/member-category/edit-member-category?member-category-id=${e.id}">${e.category}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              ${1===e.id||2===e.id||3===e.id?i.dy``:i.dy`
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                  @click="${this.deleteMemberCategory}"></mwc-icon-button>
              `}
              
            </td>
          </tr>
        `))}
    `}firstUpdated(){}deleteMemberCategory(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));1!==t&&(yield function(e){return b(this,void 0,void 0,(function*(){const t=(0,h.Ie)(),n=s.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,r={};return u().fire({title:"Remove Member Category?",text:"You may have members assigned to this category. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>b(this,void 0,void 0,(function*(){return yield(0,m.d)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new p.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,f.T)(e);u().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new p.H("delete",n,!0);return r.postForm,r}})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}u().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t))}))}getClientMemberCategories(){return v(this,void 0,void 0,(function*(){const e=yield(0,l.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}createRenderRoot(){return this}};w.styles=[i.iv`
   :host { display: block; }
  `],y([(0,a.Cb)({type:Number}),g("design:type",Number)],w.prototype,"CLIENT_ID",void 0),y([(0,a.Cb)({type:Array}),g("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],w.prototype,"_data",void 0),y([(0,a.Cb)({type:Object}),g("design:type",Object)],w.prototype,"urlQueryParams",void 0),y([(0,a.Cb)({type:Array}),g("design:type",Array)],w.prototype,"_memberCategories",void 0),w=y([(0,a.Mo)("membership-groupings-member-categories-all"),g("design:paramtypes",[])],w),n(3683),n(4657);var _=n(5474),C=n(2145),k=n(1302),A=n(7641),x=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let j=class extends i.oi{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,_.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function a(e){try{s(i.next(e))}catch(e){o(e)}}function c(e){try{s(i.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}s((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,C.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(!(0,k.H)({pageId:A.W.grouping,viewType:"View"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <div class="shadow bg-white p-2">
        <membership-groupings-member-categories-all CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-all>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};x([(0,a.Cb)({type:String}),S("design:type",String)],j.prototype,"email",void 0),x([(0,a.Cb)({type:Number}),S("design:type",Number)],j.prototype,"mId",void 0),x([(0,a.Cb)({type:Number}),S("design:type",Number)],j.prototype,"clientId",void 0),x([(0,a.Cb)({type:Boolean}),S("design:type",Boolean)],j.prototype,"_hasSetup",void 0),j=x([(0,a.Mo)("membership-groupings-member-categories"),S("design:paramtypes",[])],j)},7641:(e,t,n)=>{n.d(t,{W:()=>r});const r={grouping:33,assignment:34}}},e=>(e.O(0,[2185,5744,9674,7154,1080,5291,6236,7583,214,3901,3712],(()=>(134,e(e.s=134)))),e.O())])));
//# sourceMappingURL=all.js.map