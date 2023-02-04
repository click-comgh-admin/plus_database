"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3175],{4672:(e,t,s)=>{s.d(t,{Jx:()=>n,O1:()=>i,Vc:()=>r,W3:()=>o});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),s=Object.fromEntries(t.entries());let i=null;for(const t in s)t===e&&(i=s[t]);return i},r=e=>new URLSearchParams(window.location.search).getAll(e),o=e=>{let t="",s=0;for(const i in e)s+=1,t+=`${s>1?"&":""}${i}=${e[i]}`;return t}},7775:(e,t,s)=>{function i(e){return{id:Number(e.id),page:e.page}}function n(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:i(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}s.d(t,{z:()=>n})},6262:(e,t,s)=>{s.d(t,{a:()=>c});var i=s(771),n=s(7270),r=s(596),o=s(3600);function c(e=null,t=""){return s=this,c=void 0,d=function*(){const s=(0,o.Ie)(),c=i.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,a=yield(0,n.d)(c,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new r.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{r(d.next(e))}catch(e){t(e)}}function n(e){try{r(d.throw(e))}catch(e){t(e)}}function r(t){var s;t.done?e(t.value):(s=t.value,s instanceof a?s:new a((function(e){e(s)}))).then(i,n)}r((d=d.apply(s,c||[])).next())}));var s,c,a,d}},8763:(e,t,s)=>{var i=s(9392),n=s(1936),r=function(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?i.dy`
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
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?i.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?i.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?i.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?i.dy`<mwc-icon>warning</mwc-icon>`:this.danger?i.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?i.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?i.dy`<mwc-icon>star_outline</mwc-icon>`:i.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[i.iv`
   :host { display: block; }
  `],r([(0,n.Cb)({type:Boolean}),o("design:type",Boolean)],c.prototype,"loading",void 0),r([(0,n.Cb)({type:Boolean}),o("design:type",Boolean)],c.prototype,"success",void 0),r([(0,n.Cb)({type:Boolean}),o("design:type",Boolean)],c.prototype,"info",void 0),r([(0,n.Cb)({type:Boolean}),o("design:type",Boolean)],c.prototype,"warning",void 0),r([(0,n.Cb)({type:Boolean}),o("design:type",Boolean)],c.prototype,"danger",void 0),r([(0,n.Cb)({type:Boolean}),o("design:type",Boolean)],c.prototype,"default",void 0),r([(0,n.Cb)({type:Boolean}),o("design:type",Boolean)],c.prototype,"primary",void 0),r([(0,n.Cb)({type:String}),o("design:type",String)],c.prototype,"extra_class",void 0),c=r([(0,n.Mo)("alert-card"),o("design:paramtypes",[])],c)},5884:(e,t,s)=>{s.r(t),s.d(t,{PdbAdminUserEditForm:()=>_});var i=s(9392),n=s(1936),r=s(2004),o=s(7052),c=s(4672),a=s(6262),d=(s(6811),s(2715),s(8763),s(9852),s(7775)),l=s(2506),p=s(2229),u=s(3600),h=(s(3683),s(4657),s(9665)),y=s(2145),g=s(1302),f=s(1710),m=function(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function o(e){try{a(i.next(e))}catch(e){r(e)}}function c(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,c)}a((i=i.apply(e,t||[])).next())}))};let _=class extends i.oi{constructor(){super(),this.userId=0,this.loggedUserId=0,this.editAccess=!1,this.page_type="mine",this._activeBranchId=null,this._userLoginInfo=null,this.__clientUser=null,this.__clientUserAccess=null,this._hasSetup=!1}set _clientUser(e){this.__clientUser=e,this.requestUpdate()}get _clientUser(){return this.__clientUser}set _clientUserAccess(e){this.__clientUserAccess=e,this.requestUpdate()}get _clientUserAccess(){return this.__clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,h.f)().then((()=>this._hasSetup=!0));const t=(0,r.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,u.Ie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this._clientUser.success&&("not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,y.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(!(0,g.H)({pageId:f.W.update,viewType:"Both"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=i.dy`<h4 class="text-white">Error</h4>`,t=i.dy`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;return i.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}return null===this._clientUser?i.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `:void 0===this._clientUser?i.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Error </span>: undefined error</h4>
            </div>
          </div>
        `:i.dy`
        <pdb-admin-user-form edit="true" page_type="${this.page_type}" ?editaccess="${this.editAccess}" .clientUser="${this._clientUser}"
          .clientUserAccess="${this._clientUserAccess}">
        </pdb-admin-user-form>
      `}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,c.Jx)("user-id"),t=null!==e?(0,o.t)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}getClientUser(){return b(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,a.a)(this.userId,"?branchId="+e);this._clientUser=null===t?void 0:t.response}))}getClientUserAccess(){return b(this,void 0,void 0,(function*(){const e=yield(0,l.H)(null,"?userId="+this.userId);if(null===e)this._clientUserAccess=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>p.e.toClientUserPageAccessModel(JSON.stringify(e)))):e.response.data=[p.e.toClientUserPageAccessModel(JSON.stringify(t))],this._clientUserAccess=e.response}}))}getLoggedUserAccess(){return b(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,l.H)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,d.z)(e)).page.id&&(this.editAccess=!0)}))}}))}createRenderRoot(){return this}};_.styles=[i.iv`
   :host { display: block; }
  `],m([(0,n.Cb)({type:Number}),v("design:type",Number)],_.prototype,"userId",void 0),m([(0,n.Cb)({type:Number}),v("design:type",Number)],_.prototype,"loggedUserId",void 0),m([(0,n.Cb)({type:Boolean}),v("design:type",Boolean)],_.prototype,"editAccess",void 0),m([(0,n.Cb)({type:String}),v("design:type",String)],_.prototype,"page_type",void 0),m([(0,n.Cb)({type:Array}),v("design:type",Array)],_.prototype,"_activeBranchId",void 0),m([(0,n.Cb)({type:Array}),v("design:type",Array)],_.prototype,"_userLoginInfo",void 0),m([(0,n.Cb)({type:Boolean}),v("design:type",Boolean)],_.prototype,"_hasSetup",void 0),_=m([(0,n.Mo)("pdb-admin-user-edit-form"),v("design:paramtypes",[])],_)}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,7751,2091,8544,3712],(()=>(5884,e(e.s=5884)))),e.O())])));
//# sourceMappingURL=edit.js.map