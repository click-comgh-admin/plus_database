"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/access_restriction/select_restriction/view"],{73794:(e,t,n)=>{n.r(t)},38034:(e,t,n)=>{n.r(t)},28207:(e,t,n)=>{n.r(t)},4573:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>r,typeMap:()=>a});class r{static toMembershipAccessRestrictionModel(e){return s(JSON.parse(e),c("MembershipAccessRestrictionModel"),o)}static membershipAccessRestrictionModelToJson(e){return JSON.stringify(s(e,c("MembershipAccessRestrictionModel"),i),null,2)}}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function s(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=a[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return s(t,r,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>s(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],l=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;o[i.key]=s(l,i.typ,n,i.key)})),Object.getOwnPropertyNames(r).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=s(r[i],t,n,i))})),o}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function c(e){return{ref:e}}const a={MembershipAccessRestrictionModel:(d=[{json:"id",js:"id",typ:l(null,0)},{json:"restriction",js:"restriction",typ:l(null,"")},{json:"date",js:"date",typ:l(null,Date)}],!1,{props:d,additional:false})};var d},2212:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>u});var r=n(7967),o=n(4573),i=n(15216);class s{static toMembershipUserAccessRestrictionModel(e){return a(JSON.parse(e),p("MembershipUserAccessRestrictionModel"),l)}static membershipUserAccessRestrictionModelToJson(e){return JSON.stringify(a(e,p("MembershipUserAccessRestrictionModel"),c),null,2)}}function l(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function c(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return a(t,r,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>a(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],s=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;o[i.key]=a(s,i.typ,n,i.key)})),Object.getOwnPropertyNames(r).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=a(r[i],t,n,i))})),o}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function d(...e){return{unionMembers:e}}function p(e){return{ref:e}}const u={MembershipUserAccessRestrictionModel:(f=[{json:"id",js:"id",typ:d(null,0)},{json:"clientId",js:"clientID",typ:d(null,0)},{json:"clientInfo",js:"clientInfo",typ:d(null,p("ClientInfo"))},{json:"memberId",js:"memberID",typ:d(null,0)},{json:"memberInfo",js:"memberInfo",typ:d(null,p("MemberInfo"))},{json:"restrictionId",js:"restrictionID",typ:d(null,p("RestrictionID"))},{json:"date",js:"date",typ:d(null,Date)}],!1,{props:f,additional:false}),ClientInfo:r.typeMap.ClientInfoModel,MemberInfo:i.typeMap.MembershipUserModel,RestrictionID:o.typeMap.MembershipAccessRestrictionModel,LocationCountryModel:r.typeMap.LocationCountryModel,ClientAccountCategoryModel:r.typeMap.ClientAccountCategoryModel};var f},15216:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>r,typeMap:()=>a});class r{static toMembershipUserModel(e){return s(JSON.parse(e),c("MembershipUserModel"),o)}static membershipUserModelToJson(e){return JSON.stringify(s(e,c("MembershipUserModel"),i),null,2)}}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function s(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=a[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return s(t,r,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>s(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],l=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;o[i.key]=s(l,i.typ,n,i.key)})),Object.getOwnPropertyNames(r).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=s(r[i],t,n,i))})),o}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function c(e){return{ref:e}}const a={MembershipUserModel:(d=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"firstname",js:"firstname",typ:l(null,"")},{json:"middlename",js:"middlename",typ:l(null,"")},{json:"surname",js:"surname",typ:l(null,"")},{json:"gender",js:"gender",typ:l(null,0)},{json:"profilePicture",js:"profilePicture",typ:l(null,"")},{json:"phone",js:"phone",typ:l(null,"")},{json:"email",js:"email",typ:l(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:l(null,Date)},{json:"religion",js:"religion",typ:l(null,0)},{json:"nationality",js:"nationality",typ:l(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:l(null,"")},{json:"stateProvince",js:"stateProvince",typ:l(null,"")},{json:"region",js:"region",typ:l(null,0)},{json:"district",js:"district",typ:l(null,0)},{json:"constituency",js:"constituency",typ:l(null,0)},{json:"electoralArea",js:"electoralArea",typ:l(null,0)},{json:"community",js:"community",typ:l(null,"")},{json:"hometown",js:"hometown",typ:l(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:l(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:l(null,"")},{json:"level",js:"level",typ:l(null,0)},{json:"status",js:"status",typ:l(null,0)},{json:"accountType",js:"accountType",typ:l(null,0)},{json:"memberType",js:"memberType",typ:l(null,0)},{json:"date",js:"date",typ:l(null,Date)},{json:"last_login",js:"lastLogin",typ:l(null,Date)},{json:"referenceId",js:"referenceID",typ:l(null,"")},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"editable",js:"editable",typ:l(null,!0)},{json:"profileResume",js:"profileResume",typ:l(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:l(null,"")},{json:"archived",js:"archived",typ:l(null,!0)},{json:"identification",js:"identification",typ:l(null,"")}],!1,{props:d,additional:false})};var d},99628:(e,t,n)=>{n.r(t),n.d(t,{DELETE_MembershipAccessRestrictionAssignment:()=>p});var r=n(86455),o=n.n(r),i=n(48485),s=n(87270),l=n(14492),c=n(8967),a=n(33600),d=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((r=r.apply(e,t||[])).next())}))};function p(e){return d(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/access/assignment/"+e,r={};return o().fire({title:"Remove Member?",text:"Member will no longer be subscribed to this restriction!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new l.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},96490:(e,t,n)=>{n.r(t),n.d(t,{GET_MembershipAccessRestrictions:()=>l});var r=n(48485),o=n(87270),i=n(14492),s=n(33600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,s.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/access/restriction"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{i(a.next(e))}catch(e){t(e)}}function o(e){try{i(a.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}i((a=a.apply(n,l||[])).next())}));var n,l,c,a}},48763:(e,t,n)=>{n.r(t),n.d(t,{AlertCard:()=>l}),n(38034);var r=n(85862),o=n(59662),i=(n(28207),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.html`
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
      `:r.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?r.html`<header class="header">${this.header}</header>`:r.nothing}
              ${null!==this.content?r.html`<main class="main">${this.content}</main>`:r.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.html`<mwc-icon>warning</mwc-icon>`:this.danger?r.html`<mwc-icon>error_outline</mwc-icon>`:this.default?r.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.html`<mwc-icon>star_outline</mwc-icon>`:r.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};l.styles=[r.css`
   :host { display: block; }
  `],i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"loading",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"success",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"info",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"warning",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"danger",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"default",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"primary",void 0),i([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"extra_class",void 0),l=i([(0,o.customElement)("alert-card"),s("design:paramtypes",[])],l)},38281:(e,t,n)=>{n.r(t),n.d(t,{UserProfilePhoto:()=>c});var r=n(48485),o=n(85862),i=n(59662),s=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return o.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],s([(0,i.property)({type:String}),l("design:type",String)],c.prototype,"url",void 0),s([(0,i.property)({type:String}),l("design:type",String)],c.prototype,"type",void 0),s([(0,i.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),s([(0,i.property)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),s([(0,i.property)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=s([(0,i.customElement)("user-profile-photo"),l("design:paramtypes",[])],c)},88077:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>r});const r={view:55}},60641:(e,t,n)=>{n.r(t),n.d(t,{MembershipAccessRestrictionView:()=>k}),n(73794);var r,o,i,s=n(85862),l=n(59662),c=n(67052),a=n(23283),d=(n(33590),n(40789),n(63313),n(16883),n(30367),n(38281),n(75866),n(48763),n(51511),n(48485)),p=n(33600),u=n(17725),f=n(44672),h=n(52368),m=n(26224),y=n(18530),b=n(96490),v=n(2212),g=n(99628),_=(n(43683),n(74657),n(27712)),j=n(91354),w=n(41302),S=n(88077),x=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},A=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((r=r.apply(e,t||[])).next())}))};let k=class extends s.LitElement{constructor(){super(),this._activeBranchId=null,this.restrictionId=0,this.restrictionIdEnc=null,this.restrictionCalled=!1,this._branches=[],this._restriction=[],this._userLoginInfo=null,this.memberProfileBaseUrl="/member/member-profile?view=",this.datatablePathUrl="members/access/assignment",this.filterBoxStarted=!1,this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,_.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,u.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,p.getUserLoginInfoCookie)()],this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[{name:"view-restriction",value:this.restrictionIdEnc}]}),this.getRestrictionId(),yield this.getBranches(),yield this.getRestriction()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,j.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(!(0,w.AppSettingsExtraUserAccess)({pageId:S.PAGE__IDS.view,viewType:"View"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}let t=0;if(null!==this._userLoginInfo&&this._userLoginInfo.length>0&&this._userLoginInfo[0].user.branchId,!1===this.restrictionCalled)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(this._restriction.length<1)return s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Access Restriction </span>: not found!</h4>
          </div>
        </div>
      `;const n=s.html`<h4 class="text-dark">Access Restriction</h4>`,r=s.html`<div>
      <h1 class="text-dark mb-2 text-xl">${this._restriction[0].restriction}</h1>
    </div>`;return s.html`
      <div class="mb-2">
        <alert-card info .header="${n}" .content="${r}"></alert-card>
      </div>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}<br />
      </div>
      <div class="block my-1">
        ${this.table}
      </div>
    `}renderMemberInfo(e,t,n){if(1===n.memberInfo.accountType){const e=v.Convert.toMembershipUserAccessRestrictionModel(JSON.stringify(n)).memberInfo,t=(0,c.base64Encode)(String(e.id),!0);return`\n        <div class="flex flex-col whitespace-normal justify-between content-between">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""\n              click-to-open="${this.memberProfileBaseUrl}${t}" type="member"\n              url="${e.profilePicture}" size="32"></user-profile-photo>\n          </div>\n          <div class="block m-1">\n            <span class="shadow p-1 block bg-white rounded text-dark">\n              <b>Name</b>: ${e.firstname} ${e.middlename} ${e.surname}\n            </span>\n          </div>\n        </div>\n      `}{const e=y.Convert.toMembershipOrganizationUserModel(JSON.stringify(n.memberInfo));return`\n        <div class="flex flex-col whitespace-normal justify-between content-between">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="false"\n              click-to-open="false" type="member"\n              url="${e.logo}" size="32"></user-profile-photo>\n          </div>\n          <div class="block m-1">\n            <span class="shadow p-1 block bg-white rounded text-dark">\n              <b>Org. Name</b>: ${e.organizationName}\n            </span>\n          </div>\n        </div>\n      `}}removeFromList(e,t,n){return`\n      <div class="flex flex-col whitespace-normal justify-between content-between">\n        <mwc-button class="button warning" outlined delete-this-item="${n.id}" >\n          <mwc-icon class="mr-1">delete_forever</mwc-icon> Remove\n        </mwc-button>\n      </div>\n    `}get urlQueryString(){const e=(0,f.urlQueryParams)(),t="branchId";let n={};for(const r in e){let o=String(e[r]);r===t&&(n[r]=o)}if(!(t in n)){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),n[t]=e}let r=(0,f.urlQueryParamsJoin)(n);return 0===r.length?r:"&"+r}get filterForm(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);let t=s.html``;const n=(0,f.urlQueryParams)(),r="branchId";let o=e;for(const e in n){let t=String(n[e]);t=""===t?null:t,e===r&&(o=Number(t))}const i=s.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
            name="${r}" id="${r}"
            outlined required @change="${this.branchChange}">
            ${1===e?s.html`
              <mwc-list-item value="0">Select Branch</mwc-list-item>
              ${this._branches.map((e=>o===e.id?s.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
            `:s.html`
              ${this._branches.map((t=>{if(t.id===e)return s.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
            `}
          </mwc-select>
        </div>
      </div>`;return t=s.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${i}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <input type="hidden" name="view-restriction" value="${this.restrictionIdEnc}" />
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,t}branchChange(e){return I(this,void 0,void 0,(function*(){Number.isNaN(e.currentTarget.value)||Number(e.currentTarget.value)}))}get __tableHeaders(){return[{title:"Member"},{title:"Info"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Info"}]}get table(){let e=d.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin&restrictionId="+this.restrictionId;e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const r=(0,p.getUserLoginInfoCookie)();return n.Authorization="Token "+r.token,s.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0))}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,r)=>t.renderMemberInfo(e,n,r),orderable:!0},{data:"inTime",render:(e,n,r)=>t.removeFromList(e,n,r),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return I(this,void 0,void 0,(function*(){e.aoData,t.deleteMemberFx()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells"],select:!0}}getRestrictionId(){let e=(0,f.urlQueryParamsGet)("view-restriction"),t=null!==e?(0,c.base64Decode)(e):null;this.restrictionId=Number.isNaN(t)?null:Number(t),this.restrictionIdEnc=(0,c.base64Encode)(String(this.restrictionId),!0)}getRestriction(){return I(this,void 0,void 0,(function*(){const e=yield(0,b.GET_MembershipAccessRestrictions)(this.restrictionId);if(this.restrictionCalled=!0,null===e)this._restriction=[];else if(e.response.success&&"restriction"in e.response.data){const t=e.response.data;this._restriction=[t]}else this._restriction=[]}))}deleteMemberFx(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteMemberFromList(e)}))}))}deleteMemberFromList(e){return I(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,g.DELETE_MembershipAccessRestrictionAssignment)(t)}))}getBranches(){return I(this,void 0,void 0,(function*(){const e=yield(0,m.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}createRenderRoot(){return this}};k.styles=[s.css`
   :host { display: block; }
  `],x([(0,l.query)('[filter-section-context="btn"]'),A("design:type","function"==typeof(r=void 0!==a.Button&&a.Button)?r:Object)],k.prototype,"filterSectionContextBtn",void 0),x([(0,l.query)('[filter-section-context="container"]'),A("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],k.prototype,"filterSectionContextContainer",void 0),x([(0,l.query)('[make-general-posts="submit_filter_form"]'),A("design:type","function"==typeof(i="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?i:Object)],k.prototype,"filterSectionContextForm",void 0),x([(0,l.property)({type:Array}),A("design:type",Array)],k.prototype,"_activeBranchId",void 0),x([(0,l.property)({type:Number}),A("design:type",Number)],k.prototype,"restrictionId",void 0),x([(0,l.property)({type:String}),A("design:type",String)],k.prototype,"restrictionIdEnc",void 0),x([(0,l.property)({type:Boolean}),A("design:type",Boolean)],k.prototype,"restrictionCalled",void 0),x([(0,l.property)({type:Array}),A("design:type",Array)],k.prototype,"_branches",void 0),x([(0,l.property)({type:Array}),A("design:type",Array)],k.prototype,"_restriction",void 0),x([(0,l.property)({type:Array}),A("design:type",Array)],k.prototype,"_userLoginInfo",void 0),x([(0,l.property)({type:String}),A("design:type",String)],k.prototype,"memberProfileBaseUrl",void 0),x([(0,l.property)({type:String}),A("design:type",String)],k.prototype,"datatablePathUrl",void 0),x([(0,l.property)({type:Boolean}),A("design:type",Boolean)],k.prototype,"filterBoxStarted",void 0),x([(0,l.property)({type:Boolean}),A("design:type",Boolean)],k.prototype,"_hasSetup",void 0),k=x([(0,l.customElement)("membership-access_restriction-view"),A("design:paramtypes",[])],k)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.lit-element","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-981a93","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_addons_interfaces_members_user_organization_model_index_ts-src_addons_network_clients_bra-e79d45","src_assets_styles_views_attendance_clocking_main_scss-src_assets_styles_views_datatable_main_-bf8818","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_clients_client_index_ts","shared"],(()=>(60641,e(e.s=60641)))),e.O())])));
//# sourceMappingURL=view.js.map