"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/access_restriction/select_restriction/update"],{5358:(e,t,n)=>{n.r(t)},8034:(e,t,n)=>{n.r(t)},8207:(e,t,n)=>{n.r(t)},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>r,urlQueryParamsGet:()=>s,urlQueryParamsGetAll:()=>o,urlQueryParamsJoin:()=>i});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},o=e=>new URLSearchParams(window.location.search).getAll(e),i=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},2813:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>r,typeMap:()=>l});class r{static toMembershipUserModel(e){return i(JSON.parse(e),a("MembershipUserModel"),s)}static membershipUserModelToJson(e){return JSON.stringify(i(e,a("MembershipUserModel"),o),null,2)}}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function o(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let s=0;s<r;s++){const r=e[s];try{return i(t,r,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],c=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;s[o.key]=i(c,o.typ,n,o.key)})),Object.getOwnPropertyNames(r).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(s[o]=i(r[o],t,n,o))})),s}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function c(...e){return{unionMembers:e}}function a(e){return{ref:e}}const l={MembershipUserModel:(d=[{json:"id",js:"id",typ:c(null,0)},{json:"clientId",js:"clientID",typ:c(null,0)},{json:"firstname",js:"firstname",typ:c(null,"")},{json:"middlename",js:"middlename",typ:c(null,"")},{json:"surname",js:"surname",typ:c(null,"")},{json:"gender",js:"gender",typ:c(null,0)},{json:"profilePicture",js:"profilePicture",typ:c(null,"")},{json:"phone",js:"phone",typ:c(null,"")},{json:"email",js:"email",typ:c(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:c(null,Date)},{json:"religion",js:"religion",typ:c(null,0)},{json:"nationality",js:"nationality",typ:c(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:c(null,"")},{json:"stateProvince",js:"stateProvince",typ:c(null,"")},{json:"region",js:"region",typ:c(null,0)},{json:"district",js:"district",typ:c(null,0)},{json:"constituency",js:"constituency",typ:c(null,0)},{json:"electoralArea",js:"electoralArea",typ:c(null,0)},{json:"community",js:"community",typ:c(null,"")},{json:"hometown",js:"hometown",typ:c(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:c(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:c(null,"")},{json:"level",js:"level",typ:c(null,0)},{json:"status",js:"status",typ:c(null,0)},{json:"accountType",js:"accountType",typ:c(null,0)},{json:"memberType",js:"memberType",typ:c(null,0)},{json:"date",js:"date",typ:c(null,Date)},{json:"last_login",js:"lastLogin",typ:c(null,Date)},{json:"referenceId",js:"referenceID",typ:c(null,"")},{json:"branchId",js:"branchID",typ:c(null,0)},{json:"editable",js:"editable",typ:c(null,!0)},{json:"profileResume",js:"profileResume",typ:c(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:c(null,"")},{json:"archived",js:"archived",typ:c(null,!0)},{json:"identification",js:"identification",typ:c(null,"")}],!1,{props:d,additional:false})};var d},72:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsMemberCategories:()=>c});var r=n(8485),s=n(7270),o=n(4492),i=n(3600);function c(e=null){return t=this,n=void 0,a=function*(){const t=(0,i.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),c=yield(0,s.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new o.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,r){function s(e){try{i(a.next(e))}catch(e){r(e)}}function o(e){try{i(a.throw(e))}catch(e){r(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(s,o)}i((a=a.apply(t,n||[])).next())}));var t,n,c,a}},8368:(e,t,n)=>{n.r(t),n.d(t,{POST_MembershipAccessRestrictions:()=>u});var r=n(6455),s=n.n(r),o=n(8485),i=n(7270),c=n(4492),a=n(8967),l=n(3600),d=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/access/assignment/bulk",n=document.querySelector('[make-general-posts="access-restriction-bulk-assignment"]'),r=new FormData(n);return s().fire({title:"Assign Members to selected current restriction?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,a.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6490:(e,t,n)=>{n.r(t),n.d(t,{GET_MembershipAccessRestrictions:()=>c});var r=n(8485),s=n(7270),o=n(4492),i=n(3600);function c(e=null,t=""){return n=this,c=void 0,l=function*(){const n=(0,i.getUserLoginInfoCookie)(),c=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/access/restriction"+(null===e?"":"/"+e)+t,a=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new o.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function s(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,s)}o((l=l.apply(n,c||[])).next())}));var n,c,a,l}},8763:(e,t,n)=>{n.r(t),n.d(t,{AlertCard:()=>c}),n(8034);var r=n(5862),s=n(9662),o=(n(8207),function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.html`
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
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.html`<mwc-icon>warning</mwc-icon>`:this.danger?r.html`<mwc-icon>error_outline</mwc-icon>`:this.default?r.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.html`<mwc-icon>star_outline</mwc-icon>`:r.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"loading",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"success",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"info",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"warning",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"danger",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"default",void 0),o([(0,s.property)({type:Boolean}),i("design:type",Boolean)],c.prototype,"primary",void 0),o([(0,s.property)({type:String}),i("design:type",String)],c.prototype,"extra_class",void 0),c=o([(0,s.customElement)("alert-card"),i("design:paramtypes",[])],c)},8077:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>r});const r={view:55}},1833:(e,t,n)=>{n.r(t),n.d(t,{MembershipAccessRestrictionUpdate:()=>A}),n(5358);var r=n(5862),s=n(9662),o=(n(3590),n(789),n(3283),n(3313),n(1511),n(5866),n(8763),n(3600)),i=n(7725),c=n(6224),a=n(72),l=n(8485),d=n(2813),u=n(8530),p=n(7052),h=n(4672),m=n(6490),y=n(8368),f=(n(3683),n(4657),n(7712)),g=n(1354),v=n(1302),b=n(8077),_=function(e,t,n,r){var s,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{a(r.next(e))}catch(e){o(e)}}function c(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}a((r=r.apply(e,t||[])).next())}))};let A=class extends r.LitElement{constructor(){super(),this.restrictionId=0,this.restrictionCalled=!1,this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._restriction=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return j(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,f.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getRestrictionId(),yield this.getBranches(),yield this.getRestriction(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,g.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(!(0,v.AppSettingsExtraUserAccess)({pageId:b.PAGE__IDS.view,viewType:"Edit"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}let t=0;if(null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),!1===this.restrictionCalled)return r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(this._restriction.length<1)return r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Access Restriction </span>: not found!</h4>
          </div>
        </div>
      `;const n=r.html`<h4 class="text-dark">Access Restriction</h4>`,s=r.html`<div>
      <h1 class="text-dark mb-2 text-xl">${this._restriction[0].restriction}</h1>
    </div>`;return r.html`
      <div class="mb-2">
        <alert-card info .header="${n}" .content="${s}"></alert-card>
      </div>
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New User Access Restriction Assignment(s)</h1>
                  <h3 class="h3">Assignment User Access Restriction!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="access-restriction-bulk-assignment" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Account Type</h4>
                    <mwc-select class="w-full" label="Select Account Type"
                      name="accountType" id="accountType" @change="${this.accountTypeChange}"
                      outlined required>
                      <mwc-list-item value="0" selected>Select Account Type</mwc-list-item>
                      <mwc-list-item value="1">User Account </mwc-list-item>
                      <mwc-list-item value="2">Organization Account</mwc-list-item>
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                      name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                      ${1===t?r.html`
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>t===e.id?r.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:r.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      `:r.html`
                        ${this._branches.map((e=>{if(e.id===t)return r.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      `}
                    </mwc-select>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    ${this.memberListField}
                    <input type="hidden" name="restrictionId" value="${this.restrictionId}" />
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Assign" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    ...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}branchChange(e){const t=this.accountType;this.accountType=0,this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value),setTimeout((()=>{this.accountType=t}),500)}accountTypeChange(e){this.accountType=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}get memberListField(){return 0===Number(this.accountType)?"...":1===Number(this.accountType)?this.individualMemberList:this.organizationMemberList}get individualMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,r.html`
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${function(e,t){var n;t.page=t.page||0;const r=e.count,s=e.results,o=document.querySelector('[id="memberIds"]');let i=[];if(r>0){var c=s;for(let e=0;e<c.length;e++){const t=c[e],r=d.Convert.toMembershipUserModel(JSON.stringify(t)),s={id:r.id,text:`${r.firstname} ${null!==(n=r.middlename)&&void 0!==n?n:""} ${r.surname}`};i.includes(s)||i.push(s)}}return{results:i,total:r,totalShowing:o.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${l.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
    `}get organizationMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,r.html`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const n=e.count,r=e.results,s=document.querySelector('[id="memberIds"]');let o=[];if(n>0){var i=r;for(let e=0;e<i.length;e++){const t=i[e],n=u.Convert.toMembershipOrganizationUserModel(JSON.stringify(t)),r={id:n.id,text:`${n.organizationName}`};o.includes(r)||o.push(r)}}return{results:o,total:n,totalShowing:s.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${l.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranch)}]}firstUpdated(){}getRestrictionId(){let e=(0,h.urlQueryParamsGet)("view-restriction"),t=null!==e?(0,p.base64Decode)(e):null;this.restrictionId=Number.isNaN(t)?null:Number(t)}getBranches(){return j(this,void 0,void 0,(function*(){const e=yield(0,c.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getRestriction(){return j(this,void 0,void 0,(function*(){const e=yield(0,m.GET_MembershipAccessRestrictions)(this.restrictionId);if(this.restrictionCalled=!0,null===e)this._restriction=[];else if(e.response.success&&"restriction"in e.response.data){const t=e.response.data;this._restriction=[t]}else this._restriction=[]}))}getClientMemberCategories(){return j(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}submitForm(e){return j(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,y.POST_MembershipAccessRestrictions)()}))}createRenderRoot(){return this}};A.styles=[r.css`
   :host { display: block; }
  `],_([(0,s.property)({type:Number}),w("design:type",Number)],A.prototype,"restrictionId",void 0),_([(0,s.property)({type:Boolean}),w("design:type",Boolean)],A.prototype,"restrictionCalled",void 0),_([(0,s.property)({type:Number}),w("design:type",Number)],A.prototype,"startSearchPage",void 0),_([(0,s.property)({type:Number}),w("design:type",Number)],A.prototype,"accountType",void 0),_([(0,s.property)({type:Number}),w("design:type",Number)],A.prototype,"selectedBranch",void 0),_([(0,s.property)({type:Array}),w("design:type",Array)],A.prototype,"_userLoginInfo",void 0),_([(0,s.property)({type:Array}),w("design:type",Array)],A.prototype,"_activeBranchId",void 0),_([(0,s.property)({type:Array}),w("design:type",Array)],A.prototype,"_memberCategories",void 0),_([(0,s.property)({type:Array}),w("design:type",Array)],A.prototype,"_branches",void 0),_([(0,s.property)({type:Array}),w("design:type",Array)],A.prototype,"_restriction",void 0),_([(0,s.property)({type:Boolean}),w("design:type",Boolean)],A.prototype,"_hasSetup",void 0),A=_([(0,s.customElement)("membership-access_restriction-update"),w("design:paramtypes",[])],A)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_admin_register_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_orga-954009","shared"],(()=>(1833,e(e.s=1833)))),e.O())])));
//# sourceMappingURL=update.js.map