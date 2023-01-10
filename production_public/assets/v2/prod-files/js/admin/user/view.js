"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3316],{4672:(e,t,r)=>{r.d(t,{Jx:()=>o,O1:()=>s,Vc:()=>n,W3:()=>i});const s=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let s=null;for(const t in r)t===e&&(s=r[t]);return s},n=e=>new URLSearchParams(window.location.search).getAll(e),i=e=>{let t="",r=0;for(const s in e)r+=1,t+=`${r>1?"&":""}${s}=${e[s]}`;return t}},7775:(e,t,r)=>{function s(e){return{id:Number(e.id),page:e.page}}function o(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:s(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}r.d(t,{z:()=>o})},6995:(e,t,r)=>{r.d(t,{e:()=>n});var s=r(428),o=r(1594);class n{static toClientUserGroupSubgroupModel(e){return l(JSON.parse(e),u("ClientUserGroupSubgroupModel"),i)}static clientUserGroupSubgroupModelToJson(e){return JSON.stringify(l(e,u("ClientUserGroupSubgroupModel"),a),null,2)}}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function l(e,t,r,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=p[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let o=0;o<s;o++){const s=e[o];try{return l(t,s,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>l(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const n=e[t],i=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;o[n.key]=l(i,n.typ,r,n.key)})),Object.getOwnPropertyNames(s).forEach((n=>{Object.prototype.hasOwnProperty.call(e,n)||(o[n]=l(s[n],t,r,n))})),o}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function c(e){return{arrayItems:e}}function d(...e){return{unionMembers:e}}function u(e){return{ref:e}}const p={ClientUserGroupSubgroupModel:(h=[{json:"id",js:"id",typ:d(null,0)},{json:"clientId",js:"clientID",typ:d(null,0)},{json:"userId",js:"userID",typ:d(null,0)},{json:"group",js:"group",typ:d(null,c(u("GroupModel")))},{json:"subgroup",js:"subgroup",typ:d(null,c(u("SubGroupModel")))},{json:"date",js:"date",typ:d(null,Date)}],!1,{props:h,additional:false}),GroupModel:s.Y.GroupModel,SubGroupModel:o.Y.SubGroupModel};var h},428:(e,t,r)=>{r.d(t,{Y:()=>c,e:()=>s});class s{static toGroupModel(e){return i(JSON.parse(e),l("GroupModel"),o)}static groupModelToJson(e){return JSON.stringify(i(e,l("GroupModel"),n),null,2)}}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function n(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,r,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let o=0;o<s;o++){const s=e[o];try{return i(t,s,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const n=e[t],a=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;o[n.key]=i(a,n.typ,r,n.key)})),Object.getOwnPropertyNames(s).forEach((n=>{Object.prototype.hasOwnProperty.call(e,n)||(o[n]=i(s[n],t,r,n))})),o}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function l(e){return{ref:e}}const c={GroupModel:(d=[{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"group",js:"group",typ:a(null,"")},{json:"branchId",js:"branchID",typ:a(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:a(null,0)},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1,{props:d,additional:false})};var d},1594:(e,t,r)=>{r.d(t,{Y:()=>d,e:()=>o});var s=r(428);class o{static toSubGroupModel(e){return a(JSON.parse(e),c("SubGroupModel"),n)}static subGroupModelToJson(e){return JSON.stringify(a(e,c("SubGroupModel"),i),null,2)}}function n(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,r,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let o=0;o<s;o++){const s=e[o];try{return a(t,s,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>a(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const n=e[t],i=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;o[n.key]=a(i,n.typ,r,n.key)})),Object.getOwnPropertyNames(s).forEach((n=>{Object.prototype.hasOwnProperty.call(e,n)||(o[n]=a(s[n],t,r,n))})),o}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function c(e){return{ref:e}}const d={SubGroupModel:(u=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"groupId",js:"groupID",typ:l(null,c("GroupModel"))},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:l(null,0)},{json:"subgroup",js:"subgroup",typ:l(null,"")},{json:"createdBy",js:"createdBy",typ:l(null,0)},{json:"updatedBy",js:"updatedBy",typ:l(null,0)},{json:"updateDate",js:"updateDate",typ:l(null,Date)},{json:"date",js:"date",typ:l(null,Date)},{json:"group",js:"group",typ:l(null,"")}],!1,{props:u,additional:false}),GroupModel:s.Y.GroupModel};var u},8474:(e,t,r)=>{r.d(t,{x:()=>a});var s=r(771),o=r(7270),n=r(596),i=r(3600);function a(e=null,t=""){return r=this,a=void 0,c=function*(){const r=(0,i.Ie)(),a=s.t.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new n.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new n.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{n(c.next(e))}catch(e){t(e)}}function o(e){try{n(c.throw(e))}catch(e){t(e)}}function n(t){var r;t.done?e(t.value):(r=t.value,r instanceof l?r:new l((function(e){e(r)}))).then(s,o)}n((c=c.apply(r,a||[])).next())}));var r,a,l,c}},6262:(e,t,r)=>{r.d(t,{a:()=>a});var s=r(771),o=r(7270),n=r(596),i=r(3600);function a(e=null,t=""){return r=this,a=void 0,c=function*(){const r=(0,i.Ie)(),a=s.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,l=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new n.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new n.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function s(e){try{n(c.next(e))}catch(e){t(e)}}function o(e){try{n(c.throw(e))}catch(e){t(e)}}function n(t){var r;t.done?e(t.value):(r=t.value,r instanceof l?r:new l((function(e){e(r)}))).then(s,o)}n((c=c.apply(r,a||[])).next())}));var r,a,l,c}},8763:(e,t,r)=>{var s=r(9392),o=r(1936),n=function(e,t,r,s){var o,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,r,i):o(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends s.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?s.dy`
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
      `:s.dy`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?s.dy`<header class="header">${this.header}</header>`:s.Ld}
              ${null!==this.content?s.dy`<main class="main">${this.content}</main>`:s.Ld}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?s.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?s.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?s.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?s.dy`<mwc-icon>warning</mwc-icon>`:this.danger?s.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?s.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?s.dy`<mwc-icon>star_outline</mwc-icon>`:s.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};a.styles=[s.iv`
   :host { display: block; }
  `],n([(0,o.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"loading",void 0),n([(0,o.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"success",void 0),n([(0,o.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"info",void 0),n([(0,o.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"warning",void 0),n([(0,o.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"danger",void 0),n([(0,o.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"default",void 0),n([(0,o.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"primary",void 0),n([(0,o.Cb)({type:String}),i("design:type",String)],a.prototype,"extra_class",void 0),a=n([(0,o.Mo)("alert-card"),i("design:paramtypes",[])],a)},8281:(e,t,r)=>{var s=r(771),o=r(9392),n=r(1936),i=function(e,t,r,s){var o,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,r,i):o(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return o.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=s.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=s.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};l.styles=[o.iv`
   :host { display: block; }
  `],i([(0,n.Cb)({type:String}),a("design:type",String)],l.prototype,"url",void 0),i([(0,n.Cb)({type:String}),a("design:type",String)],l.prototype,"type",void 0),i([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"rounded",void 0),i([(0,n.Cb)({type:String}),a("design:type",String)],l.prototype,"click-to-open",void 0),i([(0,n.Cb)({type:Number}),a("design:type",Number)],l.prototype,"size",void 0),l=i([(0,n.Mo)("user-profile-photo"),a("design:paramtypes",[])],l)},7136:(e,t,r)=>{r.r(t),r.d(t,{PdbAdminUserOne:()=>G});var s,o,n=r(9392),i=r(1936),a=r(2004),l=r(7052),c=r(4672),d=r(6262),u=(r(2715),r(8763),r(8281),r(1877),r(2169),r(934),r(7775)),p=r(2506),h=r(3600),b=r(4728),y=r(5248),f=r(8474),m=r(6455),g=r.n(m),v=r(771),_=r(7270),w=r(596),j=r(8967),S=function(e,t,r,s){return new(r||(r=Promise))((function(o,n){function i(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}l((s=s.apply(e,t||[])).next())}))},U=r(3248),A=r(2229),I=r(6995),k=(r(8954),r(9665)),C=r(2145),O=r(1302),B=r(1710),x=(r(3683),r(4657),function(e,t,r,s){var o,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n<3?o(i):n>3?o(t,r,i):o(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i}),N=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},$=function(e,t,r,s){return new(r||(r=Promise))((function(o,n){function i(e){try{l(s.next(e))}catch(e){n(e)}}function a(e){try{l(s.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}l((s=s.apply(e,t||[])).next())}))};let G=class extends n.oi{constructor(){super(),this.userId=0,this.loggedUserId=0,this.formId=1,this.page_type="mine",this.editAccess=!1,this.memberProfileEditBaseUrl="/admin/user/update-account?user-id=",this.memberGroupSubgroupAddBaseUrl="/admin/user/add-group-subgroup?user-id=",this.memberGroupSubgroupEditBaseUrl="/admin/user/update-group-subgroup?user-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=null,this._clientUserAccess=this._clientUserAccessDefault,this._clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault,this._hasSetup=!1}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set clientUserGroupSubgroup(e){this._clientUserGroupSubgroup=e,this.requestUpdate()}get clientUserGroupSubgroup(){return this._clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return $(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,k.f)().then((()=>this._hasSetup=!0));const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,h.Ie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this.clientUser.success&&(yield this.getPageAccesses(),"not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),yield this.getClientUserGroupSubgroup(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){var e,t;if(this._hasSetup){if(null===(e=(0,C.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,O.H)({pageId:B.W.view,viewType:"View"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=n.dy`<h4 class="text-white">Error</h4>`,t=n.dy`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;return n.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.clientUser)return n.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.clientUser)return n.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Admin User </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.clientUser.success){const e=n.dy`<h4 class="text-white">Error</h4>`,t=n.dy`
          <div>
            <p class="text-black mb-2">User Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
              label="Client Users Page"></link-button>
          </div>
        `;return n.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.clientUser,r=e.data,s=(t=Array.isArray(r)?r[0]:r,{id:Number(t.id),firstname:String(t.firstname),surname:String(t.surname),gender:Number(t.gender),profilePicture:String(t.profilePicture),dateOfBirth:new Date(t.dateOfBirth),phone:String(t.phone),email:String(t.email),role:Number(t.role),accountId:Number(t.accountId),branchId:Number(t.branchId),level:Number(t.level),status:Number(t.status),lastUpdatedBy:Number(t.lastUpdatedBy),date:new Date(t.date),last_login:new Date(t.last_login)}),o=e.success,i=o?(0,l.h)(String(s.id),!0):"",a=this.clientUserGroupSubgroup,c=a.data,d=Array.isArray(c)?c[0]:c,u=a.success;return n.dy`
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${o?n.dy`${s.firstname} ${s.surname}'s`:n.Ld} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="client"
                  url="${o?s.profilePicture:" profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="/account/accounts?edit=photo&user=${i}" label="Edit">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${o?n.dy`${s.firstname} ${s.surname}'s`:n.Ld} Group(s)/ Subgroup(s)
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth id="groupsSectionFormBtn"
                    label="Group" @click="${this.displayGroupsSectionBtn}"></mwc-tab>
                  <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth
                    id="subGroupsSectionFormBtn" label="Sub-Group" @click="${this.displaySubGroupsSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getGroupSubgroupSection(d,u)}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                ${Number.isNaN(d.id)?n.dy`
                  <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                    href="${this.memberGroupSubgroupAddBaseUrl}${i}" label="Add">
                  </link-button>
                `:n.dy`
                  <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                    href="${this.memberGroupSubgroupEditBaseUrl}${i}" label="Edit">
                  </link-button>
                `}
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-8 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${o?n.dy`${s.firstname} ${s.surname}'s`:n.Ld} Bio/ Access 
                  ${this.editAccess?n.dy`
                  <div class="flex flex-col items-center pl-2">
                    <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${s.id}" @click="${this.deleteClientUser}"></mwc-icon-button>
                    <small class="block">Delete</small>
                  </div>
                  `:n.Ld}
                </h4>
              </div>
              <div class="p-3 ">
                <div class="row justify-content-center">
                  ${this.bioData(s,o)}
                  ${this.accessData}
                </div>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberProfileEditBaseUrl}${i}" label="Edit">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `}}displayGroupsSectionBtn(e){e.preventDefault(),this.formId=1,this.groupsSectionFormBtn.setAttribute("raised","true"),this.subGroupsSectionFormBtn.removeAttribute("raised")}displaySubGroupsSectionBtn(e){e.preventDefault(),this.formId=2,this.subGroupsSectionFormBtn.setAttribute("raised","true"),this.groupsSectionFormBtn.removeAttribute("raised")}bioData(e,t){return n.dy`
      <div class="col-md-12 col-lg-6 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Query</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Info</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Name</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?n.dy`${e.firstname} ${e.surname}`:"-"}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Gender</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?n.dy`${1===e.gender?"Male":2===e.gender?"Female":"-"} `:"-"}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Date of birth</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?n.dy`${e.dateOfBirth.toDateString()}`:"-"}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Phone</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?n.dy`<a href="tel:${e.phone}" type="tel">${e.phone}</a>`:"-"}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Email</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${t?n.dy`<a href="mailto:${e.email}" type="email">${e.email}</a>`:"-"}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get accessData(){const e=this.clientUserAccess,t=e.data,r=Array.isArray(t)?t:[t],s=e.success;let o=[];return s&&r.forEach((e=>{e=A.e.toClientUserPageAccessModel(JSON.stringify(e)),o.includes(e)||o.push(e)})),n.dy`
      <div class="col-md-12 col-lg-6 my-1">
        <client-user-access-card ?isActive="${!1}" .available_access="${this._pageAccesses}" .user_access="${(null==o?void 0:o.length)>0?o:null}"></client-user-access-card>
      </div>
    `}getGroupSubgroupSection(e,t){return 1===this.formId?(this.formId,n.dy`
        ${this.groupData(e,t)}
      `):(this.formId,n.dy`
        ${this.subGroupData(e,t)}
      `)}groupData(e,t){var r;return n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Group(s)</b>
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
                ${null===(r=t?e.group:[])||void 0===r?void 0:r.map(((e,t)=>n.dy`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <p>${e.group}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${e.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                      </td>
                    </tr>
                  `))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}subGroupData(e,t){var r;return n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Sub-Group(s)</b>
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
                ${null===(r=t?e.subgroup:[])||void 0===r?void 0:r.map(((e,t)=>n.dy`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex flex-col items-start">
                          <small class="text-gray-500">${e.subgroup}</small>
                          <p> <small class="text-gray-500">></small> ${e.subgroup}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${e.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                      </td>
                    </tr>
                  `))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const r={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(r)||e.push(r)})),e}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,c.Jx)("user-id"),t=null!==e?(0,l.t)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}deleteClientUser(e){return $(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,h.Ie)(),r=v.t.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,s={};return g().fire({title:"Remove User?",text:"User will no longer be able to login. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,_.d)(r,{method:"DELETE",body:JSON.stringify(s),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new w.H("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,j.T)(e);g().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const s=new w.H("delete",r,!0);return s.postForm,s}})).catch((e=>{g().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!g().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),r=s.response.success}g().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getClientUser(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,d.a)(this.userId,"?branchId="+e);this.clientUser=null===t?void 0:t.response}))}getClientUserAccess(){return $(this,void 0,void 0,(function*(){const e=yield(0,p.H)(null,"?userId="+this.userId);if(null===e)this._clientUserAccess=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>A.e.toClientUserPageAccessModel(JSON.stringify(e)))):e.response.data=[A.e.toClientUserPageAccessModel(JSON.stringify(t))],this._clientUserAccess=e.response}}))}getLoggedUserAccess(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,p.H)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,u.z)(e)).page.id&&(this.editAccess=!0)}))}}))}getClientUserGroupSubgroup(){return $(this,void 0,void 0,(function*(){const e=yield(0,f.x)(null,"?userId="+this.userId);if(null===e)this.clientUserGroupSubgroup=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>I.e.toClientUserGroupSubgroupModel(JSON.stringify(e)))):e.response.data=[I.e.toClientUserGroupSubgroupModel(JSON.stringify(t))],this.clientUserGroupSubgroup=e.response}}))}getPageAccesses(){return $(this,void 0,void 0,(function*(){const e=yield(0,b.u)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>U.e.toClientPageAccessModel(JSON.stringify(e)))));const r=[];r.push(...this._pageAccesses,...t),this._pageAccesses=r}))}createRenderRoot(){return this}};G.styles=[n.iv`
   :host { display: block; }
  `],x([(0,i.IO)("#groupsSectionFormBtn"),N("design:type","function"==typeof(s=void 0!==y.z&&y.z)?s:Object)],G.prototype,"groupsSectionFormBtn",void 0),x([(0,i.IO)("#subGroupsSectionFormBtn"),N("design:type","function"==typeof(o=void 0!==y.z&&y.z)?o:Object)],G.prototype,"subGroupsSectionFormBtn",void 0),x([(0,i.Cb)({type:Number}),N("design:type",Number)],G.prototype,"userId",void 0),x([(0,i.Cb)({type:Number}),N("design:type",Number)],G.prototype,"loggedUserId",void 0),x([(0,i.Cb)({type:Number}),N("design:type",Number)],G.prototype,"formId",void 0),x([(0,i.Cb)({type:String}),N("design:type",String)],G.prototype,"page_type",void 0),x([(0,i.Cb)({type:Boolean}),N("design:type",Boolean)],G.prototype,"editAccess",void 0),x([(0,i.Cb)({type:String}),N("design:type",String)],G.prototype,"memberProfileEditBaseUrl",void 0),x([(0,i.Cb)({type:String}),N("design:type",String)],G.prototype,"memberGroupSubgroupAddBaseUrl",void 0),x([(0,i.Cb)({type:String}),N("design:type",String)],G.prototype,"memberGroupSubgroupEditBaseUrl",void 0),x([(0,i.Cb)({type:Array}),N("design:type",Array)],G.prototype,"_pageAccesses",void 0),x([(0,i.Cb)({type:Array}),N("design:type",Array)],G.prototype,"_activeBranchId",void 0),x([(0,i.Cb)({type:Array}),N("design:type",Array)],G.prototype,"_userLoginInfo",void 0),x([(0,i.Cb)({type:Boolean}),N("design:type",Boolean)],G.prototype,"_hasSetup",void 0),G=x([(0,i.Mo)("pdb-admin-user-one"),N("design:paramtypes",[])],G)}},e=>(e.O(0,[2185,5744,9674,316,836,5291,6236,6069,4816,3806,3712],(()=>(7136,e(e.s=7136)))),e.O())])));
//# sourceMappingURL=view.js.map