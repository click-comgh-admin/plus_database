"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["redirect"],{6886:(e,t,n)=>{n.r(t)},6524:(e,t,n)=>{n.r(t)},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>i,urlQueryParamsGetAll:()=>r,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},r=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},7725:(e,t,n)=>{n.r(t),n.d(t,{getActiveBranchIdCookie:()=>l,removeActiveBranchIdCookie:()=>a,setActiveBranchIdCookie:()=>c});var o=n(7052),i=n(1942),r=n(1489);const s="pdb-active-branch",c=e=>{const t=JSON.stringify(e);(0,i.set_cookies)(s,"",-1),(0,i.set_cookies)(s,(0,o.base64Encode)(t),3500)};function a(){(0,i.set_cookies)(s,"",-1)}const l=()=>{if(""===(0,i.get_cookie)(s))return null;{const e=(0,o.base64Decode)((0,i.get_cookie)(s)),t=JSON.parse(e);return(0,r.clientBranchInfo_S)(t)}}},1489:(e,t,n)=>{function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function i(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.r(t),n.d(t,{ClientBranch_S:()=>o,clientBranchInfo_S:()=>i})},6224:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientBranches:()=>c});var o=n(8485),i=n(7270),r=n(4492),s=n(3600);function c(e=null){return t=this,n=void 0,a=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),c=yield(0,i.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,r)}s((a=a.apply(t,n||[])).next())}));var t,n,c,a}},5563:(e,t,n)=>{n.r(t),n.d(t,{POST_VerifyTokenAlt:()=>s});var o=n(4492),i=n(8485),r=n(7270);function s(e){return t=this,n=void 0,c=function*(){const t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",n={token:e};return yield(0,r.http)(t,{method:"POST",body:JSON.stringify(n)},!0).then((e=>new o.NetWorkCallResponses("post",e,!1))).catch((e=>{console.log({error:e})}))},new((s=void 0)||(s=Promise))((function(e,o){function i(e){try{a(c.next(e))}catch(e){o(e)}}function r(e){try{a(c.throw(e))}catch(e){o(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,r)}a((c=c.apply(t,n||[])).next())}));var t,n,s,c}},7389:(e,t,n)=>{n.r(t),n.d(t,{PdbRedirection:()=>m}),n(6886);var o=n(8485),i=n(5862),r=n(9662),s=(n(6524),n(1511),n(4672)),c=n(7052),a=n(3600),l=n(7725),d=n(1566),u=n(6224),h=n(5563),g=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function c(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((o=o.apply(e,t||[])).next())}))};let m=class extends i.LitElement{constructor(){super(),this.token=null,this.redirectPage="",this.message="Checking Permission",this.loading=!1,this.verifyingToken=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return p(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getToken(),this.getRedirectPage(),setInterval((()=>p(this,void 0,void 0,(function*(){console.log({"this.token":this.token,"this.verifyingToken":this.verifyingToken}),null!==this.token&&!1===this.verifyingToken&&(this.verifyingToken=!0,yield this.verifyToken())}))),100)}))}render(){return i.html`
      <div class="mx-12 my-24 md:mx-12 md:my-24 xl:m-24 shadow p-2">
        <section class="background-radial-gradient">
          <div class="px-6 py-12 md:px-12 text-center lg:text-left">
            <div class="container mx-auto xl:px-32">
              <div class="flex justify-center items-center">
                <div class="mt-12 lg:mt-0">
                  <h5 class="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">
                    ${this.message}
                  </h5>
                  <div class="flex justify-center items-center">
                    ${this.loading?i.html`
                      <div class="flex justify-center">
                        <mwc-circular-progress indeterminate></mwc-circular-progress>
                      </div>`:i.nothing}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `}firstUpdated(){}getToken(){this.loading=!0,setTimeout((()=>{this.message="Getting Token"}),100);let e=(0,s.urlQueryParamsGet)("permission-key");console.log({permissionKey:e});let t=null!==e?(0,c.base64Decode)(e):null;null===t?(setTimeout((()=>{this.loading=!1,this.message="No Token Found.",(0,a.LogUserOut)(),(0,l.removeActiveBranchIdCookie)()}),100),window.location.href=o.CONSTANTS.URLS.LOGIN_PAGE_BASE_URL):(setTimeout((()=>{this.loading=!1,this.message="Token Obtained"}),100),this.token=t)}getRedirectPage(){this.loading=!0,setTimeout((()=>{this.message="Getting Redirect Page"}),100);let e=(0,s.urlQueryParamsGet)("access-page-key");console.log({accessPageKey:e});let t=null!==e?(0,c.base64Decode)(e):null;null===t?(setTimeout((()=>{this.loading=!1,this.message="No Redirect Page Found.",(0,a.LogUserOut)(),(0,l.removeActiveBranchIdCookie)()}),100),window.location.href=o.CONSTANTS.URLS.LOGIN_PAGE_BASE_URL):(setTimeout((()=>{this.loading=!1,this.message="Redirect Page Obtained"}),100),this.redirectPage=t)}redirectToPage(){this.loading=!0,this.message="Redirecting ...",window.location.href=o.CONSTANTS.URLS.PDB_CLIENT+this.redirectPage}verifyToken(){return p(this,void 0,void 0,(function*(){this.loading=!0;const e=yield(0,h.POST_VerifyTokenAlt)(this.token);if(null!==e){console.log({_networkResponse:e});const t=e.response;if(console.log({RESPONSE:t}),t.success&&t.success&&"expiry"in t.data&&"token"in t.data&&"user"in t.data){this.loading=!1,this.message="Logging In";const e=(0,d.userLoginInfo_S)(t.data);(0,a.setUserLoginInfoCookie)(e),(0,l.removeActiveBranchIdCookie)();try{this.loading=!0;const t=yield(0,u.GET_ClientBranches)(e.user.branchId);Array.isArray(t.response.data)||(0,l.setActiveBranchIdCookie)(t.response.data),this.loading=!1}catch(e){console.error({error:e})}return void this.redirectToPage()}}this.loading=!1}))}createRenderRoot(){return this}};m.styles=[i.css`
      :host {
        display: block;
      }
    `],g([(0,r.property)({type:String}),f("design:type",String)],m.prototype,"token",void 0),g([(0,r.property)({type:String}),f("design:type",String)],m.prototype,"redirectPage",void 0),g([(0,r.property)({type:String}),f("design:type",String)],m.prototype,"message",void 0),g([(0,r.property)({type:Boolean}),f("design:type",Boolean)],m.prototype,"loading",void 0),g([(0,r.property)({type:Boolean}),f("design:type",Boolean)],m.prototype,"verifyingToken",void 0),m=g([(0,r.customElement)("pdb-redirection"),f("design:paramtypes",[])],m)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_assets_styles_views_login_main_scss","shared"],(()=>(7389,e(e.s=7389)))),e.O())])));
//# sourceMappingURL=redirect.js.map