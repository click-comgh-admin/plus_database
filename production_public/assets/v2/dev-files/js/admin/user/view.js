"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["admin/user/view"],{3029:(e,t,s)=>{s.r(t)},4672:(e,t,s)=>{s.r(t),s.d(t,{urlQueryParams:()=>r,urlQueryParamsGet:()=>a,urlQueryParamsGetAll:()=>i,urlQueryParamsJoin:()=>l});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},a=e=>{const t=new URLSearchParams(window.location.search),s=Object.fromEntries(t.entries());let r=null;for(const t in s)t===e&&(r=s[t]);return r},i=e=>new URLSearchParams(window.location.search).getAll(e),l=e=>{let t="",s=0;for(const r in e)s+=1,t+=`${s>1?"&":""}${r}=${e[r]}`;return t}},4360:(e,t,s)=>{function r(e){return{id:Number(e.id),firstname:String(e.firstname),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),role:Number(e.role),accountId:Number(e.accountId),branchId:Number(e.branchId),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login)}}s.r(t),s.d(t,{ClientUsers_S:()=>r})},6948:(e,t,s)=>{s.r(t),s.d(t,{DELETE_ClientUser:()=>u});var r=s(6455),a=s.n(r),i=s(8485),l=s(7270),o=s(4492),c=s(8967),n=s(3600),d=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function l(e){try{c(r.next(e))}catch(e){i(e)}}function o(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,o)}c((r=r.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,n.getUserLoginInfoCookie)(),s=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,r={};return a().fire({title:"Remove User?",text:"User will no longer be able to login. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,l.http)(s,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new o.NetWorkCallResponses("delete",e,!1),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);a().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let s=e;s.error=t;const r=new o.NetWorkCallResponses("delete",s,!0);return r.postForm,r}})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),s=r.response.success}a().fire({title:t,icon:s?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8281:(e,t,s)=>{s.r(t),s.d(t,{UserProfilePhoto:()=>c});var r=s(8485),a=s(5862),i=s(9662),l=function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends a.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[a.css`
   :host { display: block; }
  `],l([(0,i.property)({type:String}),o("design:type",String)],c.prototype,"url",void 0),l([(0,i.property)({type:String}),o("design:type",String)],c.prototype,"type",void 0),l([(0,i.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"rounded",void 0),l([(0,i.property)({type:String}),o("design:type",String)],c.prototype,"click-to-open",void 0),l([(0,i.property)({type:Number}),o("design:type",Number)],c.prototype,"size",void 0),c=l([(0,i.customElement)("user-profile-photo"),o("design:paramtypes",[])],c)},5569:(e,t,s)=>{s.r(t),s.d(t,{PdbAdminUserOne:()=>x}),s(3029);var r,a,i=s(5862),l=s(9662),o=s(7725),c=s(7052),n=s(4672),d=s(4360),u=s(6262),p=(s(2715),s(8763),s(8281),s(5474),s(6163),s(6413),s(2583)),h=s(2506),m=s(3600),b=s(4728),_=s(3283),g=s(8474),f=s(6948),v=s(3248),y=s(2229),w=s(6995),U=(s(7857),s(7712)),S=s(1354),A=s(1302),C=s(1710),k=(s(3683),s(4657),function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l}),I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},$=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function l(e){try{c(r.next(e))}catch(e){i(e)}}function o(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,o)}c((r=r.apply(e,t||[])).next())}))};let x=class extends i.LitElement{constructor(){super(),this.userId=0,this.loggedUserId=0,this.formId=1,this.page_type="mine",this.editAccess=!1,this.memberProfileEditBaseUrl="/admin/user/update-account?user-id=",this.memberGroupSubgroupAddBaseUrl="/admin/user/add-group-subgroup?user-id=",this.memberGroupSubgroupEditBaseUrl="/admin/user/update-group-subgroup?user-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=null,this._clientUserAccess=this._clientUserAccessDefault,this._clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault,this._hasSetup=!1}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set clientUserGroupSubgroup(e){this._clientUserGroupSubgroup=e,this.requestUpdate()}get clientUserGroupSubgroup(){return this._clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return $(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,U.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,o.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,m.getUserLoginInfoCookie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this.clientUser.success&&(yield this.getPageAccesses(),"not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),yield this.getClientUserGroupSubgroup(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,S.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(!(0,A.AppSettingsExtraUserAccess)({pageId:C.PAGE__IDS.view,viewType:"View"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=i.html`<h4 class="text-white">Error</h4>`,t=i.html`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;return i.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.clientUser)return i.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.clientUser)return i.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Admin User </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.clientUser.success){const e=i.html`<h4 class="text-white">Error</h4>`,t=i.html`
          <div>
            <p class="text-black mb-2">User Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
              label="Client Users Page"></link-button>
          </div>
        `;return i.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.clientUser,t=e.data,s=(0,d.ClientUsers_S)(Array.isArray(t)?t[0]:t),r=e.success,a=r?(0,c.base64Encode)(String(s.id),!0):"",l=this.clientUserGroupSubgroup,o=l.data,n=Array.isArray(o)?o[0]:o,u=l.success;return i.html`
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${r?i.html`${s.firstname} ${s.surname}'s`:i.nothing} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="client"
                  url="${r?s.profilePicture:" profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="/account/accounts?edit=photo&user=${a}" label="Edit">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${r?i.html`${s.firstname} ${s.surname}'s`:i.nothing} Group(s)/ Subgroup(s)
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth id="groupsSectionFormBtn"
                    label="Group" @click="${this.displayGroupsSectionBtn}"></mwc-tab>
                  <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth
                    id="subGroupsSectionFormBtn" label="Sub-Group" @click="${this.displaySubGroupsSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getGroupSubgroupSection(n,u)}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                ${Number.isNaN(n.id)?i.html`
                  <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                    href="${this.memberGroupSubgroupAddBaseUrl}${a}" label="Add">
                  </link-button>
                `:i.html`
                  <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                    href="${this.memberGroupSubgroupEditBaseUrl}${a}" label="Edit">
                  </link-button>
                `}
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-8 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${r?i.html`${s.firstname} ${s.surname}'s`:i.nothing} Bio/ Access 
                  ${this.editAccess?i.html`
                  <div class="flex flex-col items-center pl-2">
                    <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${s.id}" @click="${this.deleteClientUser}"></mwc-icon-button>
                    <small class="block">Delete</small>
                  </div>
                  `:i.nothing}
                </h4>
              </div>
              <div class="p-3 ">
                <div class="row justify-content-center">
                  ${this.bioData(s,r)}
                  ${this.accessData}
                </div>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberProfileEditBaseUrl}${a}" label="Edit">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `}}displayGroupsSectionBtn(e){e.preventDefault(),this.formId=1,this.groupsSectionFormBtn.setAttribute("raised","true"),this.subGroupsSectionFormBtn.removeAttribute("raised")}displaySubGroupsSectionBtn(e){e.preventDefault(),this.formId=2,this.subGroupsSectionFormBtn.setAttribute("raised","true"),this.groupsSectionFormBtn.removeAttribute("raised")}bioData(e,t){return i.html`
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
                      <p>${t?i.html`${e.firstname} ${e.surname}`:"-"}</p>
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
                      <p>${t?i.html`${1===e.gender?"Male":2===e.gender?"Female":"-"} `:"-"}
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
                      <p>${t?i.html`${e.dateOfBirth.toDateString()}`:"-"}</p>
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
                      <p>${t?i.html`<a href="tel:${e.phone}" type="tel">${e.phone}</a>`:"-"}</p>
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
                      <p>${t?i.html`<a href="mailto:${e.email}" type="email">${e.email}</a>`:"-"}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get accessData(){const e=this.clientUserAccess,t=e.data,s=Array.isArray(t)?t:[t],r=e.success;let a=[];return r&&s.forEach((e=>{e=y.Convert.toClientUserPageAccessModel(JSON.stringify(e)),a.includes(e)||a.push(e)})),i.html`
      <div class="col-md-12 col-lg-6 my-1">
        <client-user-access-card ?isActive="${!1}" .available_access="${this._pageAccesses}" .user_access="${(null==a?void 0:a.length)>0?a:null}"></client-user-access-card>
      </div>
    `}getGroupSubgroupSection(e,t){return 1===this.formId?(this.formId,i.html`
        ${this.groupData(e,t)}
      `):(this.formId,i.html`
        ${this.subGroupData(e,t)}
      `)}groupData(e,t){var s;return i.html`
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
                ${null===(s=t?e.group:[])||void 0===s?void 0:s.map(((e,t)=>i.html`
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
    `}subGroupData(e,t){var s;return i.html`
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
                ${null===(s=t?e.subgroup:[])||void 0===s?void 0:s.map(((e,t)=>i.html`
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
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const s={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(s)||e.push(s)})),e}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,n.urlQueryParamsGet)("user-id"),t=null!==e?(0,c.base64Decode)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}deleteClientUser(e){return $(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,f.DELETE_ClientUser)(t)}))}getClientUser(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,u.GET_ClientUsers)(this.userId,"?branchId="+e);this.clientUser=null===t?void 0:t.response}))}getClientUserAccess(){return $(this,void 0,void 0,(function*(){const e=yield(0,h.GET_ClientUserAccess)(null,"?userId="+this.userId);if(null===e)this._clientUserAccess=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>y.Convert.toClientUserPageAccessModel(JSON.stringify(e)))):e.response.data=[y.Convert.toClientUserPageAccessModel(JSON.stringify(t))],this._clientUserAccess=e.response}}))}getLoggedUserAccess(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,h.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,p.ClientUserAccess_S)(e)).page.id&&(this.editAccess=!0)}))}}))}getClientUserGroupSubgroup(){return $(this,void 0,void 0,(function*(){const e=yield(0,g.GET_ClientUserGroupSubgroup)(null,"?userId="+this.userId);if(null===e)this.clientUserGroupSubgroup=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>w.Convert.toClientUserGroupSubgroupModel(JSON.stringify(e)))):e.response.data=[w.Convert.toClientUserGroupSubgroupModel(JSON.stringify(t))],this.clientUserGroupSubgroup=e.response}}))}getPageAccesses(){return $(this,void 0,void 0,(function*(){const e=yield(0,b.GET_ClientPageAccess)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>v.Convert.toClientPageAccessModel(JSON.stringify(e)))));const s=[];s.push(...this._pageAccesses,...t),this._pageAccesses=s}))}createRenderRoot(){return this}};x.styles=[i.css`
   :host { display: block; }
  `],k([(0,l.query)("#groupsSectionFormBtn"),I("design:type","function"==typeof(r=void 0!==_.Button&&_.Button)?r:Object)],x.prototype,"groupsSectionFormBtn",void 0),k([(0,l.query)("#subGroupsSectionFormBtn"),I("design:type","function"==typeof(a=void 0!==_.Button&&_.Button)?a:Object)],x.prototype,"subGroupsSectionFormBtn",void 0),k([(0,l.property)({type:Number}),I("design:type",Number)],x.prototype,"userId",void 0),k([(0,l.property)({type:Number}),I("design:type",Number)],x.prototype,"loggedUserId",void 0),k([(0,l.property)({type:Number}),I("design:type",Number)],x.prototype,"formId",void 0),k([(0,l.property)({type:String}),I("design:type",String)],x.prototype,"page_type",void 0),k([(0,l.property)({type:Boolean}),I("design:type",Boolean)],x.prototype,"editAccess",void 0),k([(0,l.property)({type:String}),I("design:type",String)],x.prototype,"memberProfileEditBaseUrl",void 0),k([(0,l.property)({type:String}),I("design:type",String)],x.prototype,"memberGroupSubgroupAddBaseUrl",void 0),k([(0,l.property)({type:String}),I("design:type",String)],x.prototype,"memberGroupSubgroupEditBaseUrl",void 0),k([(0,l.property)({type:Array}),I("design:type",Array)],x.prototype,"_pageAccesses",void 0),k([(0,l.property)({type:Array}),I("design:type",Array)],x.prototype,"_activeBranchId",void 0),k([(0,l.property)({type:Array}),I("design:type",Array)],x.prototype,"_userLoginInfo",void 0),k([(0,l.property)({type:Boolean}),I("design:type",Boolean)],x.prototype,"_hasSetup",void 0),x=k([(0,l.customElement)("pdb-admin-user-one"),I("design:paramtypes",[])],x)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_interfaces_members_groupings_subgroup_models_index_ts","src_assets_styles_views_admin_user_main_scss-src_assets_styles_views_tailwind-output_unaccess-123ac5","src_addons_functions_https_https_swal_error_format_ts-src_addons_network_clients_users_page_a-554995","src_addons_interfaces_clients_users_access_ts-src_addons_interfaces_clients_users_model_group-bdf4ed","shared"],(()=>(5569,e(e.s=5569)))),e.O())])));
//# sourceMappingURL=view.js.map