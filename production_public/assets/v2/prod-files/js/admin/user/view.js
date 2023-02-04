"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3316],{8281:(e,t,s)=>{var r=s(771),a=s(9392),i=s(1936),l=function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends a.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[a.iv`
   :host { display: block; }
  `],l([(0,i.Cb)({type:String}),d("design:type",String)],c.prototype,"url",void 0),l([(0,i.Cb)({type:String}),d("design:type",String)],c.prototype,"type",void 0),l([(0,i.Cb)({type:Boolean}),d("design:type",Boolean)],c.prototype,"rounded",void 0),l([(0,i.Cb)({type:String}),d("design:type",String)],c.prototype,"click-to-open",void 0),l([(0,i.Cb)({type:Number}),d("design:type",Number)],c.prototype,"size",void 0),c=l([(0,i.Mo)("user-profile-photo"),d("design:paramtypes",[])],c)},7136:(e,t,s)=>{s.r(t),s.d(t,{PdbAdminUserOne:()=>P});var r,a,i=s(9392),l=s(1936),d=s(2004),c=s(7052),o=s(4672),n=s(6262),u=(s(2715),s(8763),s(8281),s(1877),s(2169),s(934),s(7775)),p=s(2506),b=s(3600),h=s(4728),m=s(5248),g=s(8474),f=s(6455),v=s.n(f),y=s(771),_=s(7270),w=s(596),U=s(8967),S=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function l(e){try{c(r.next(e))}catch(e){i(e)}}function d(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,d)}c((r=r.apply(e,t||[])).next())}))},A=s(3248),C=s(2229),k=s(6995),I=(s(8954),s(9665)),$=s(2145),x=s(1302),B=s(1710),N=(s(3683),s(4657),function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l}),G=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},E=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function l(e){try{c(r.next(e))}catch(e){i(e)}}function d(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,d)}c((r=r.apply(e,t||[])).next())}))};let P=class extends i.oi{constructor(){super(),this.userId=0,this.loggedUserId=0,this.formId=1,this.page_type="mine",this.editAccess=!1,this.memberProfileEditBaseUrl="/admin/user/update-account?user-id=",this.memberProfilePhotoEditBaseUrl="/admin/user/update-photo?user-id=",this.memberGroupSubgroupAddBaseUrl="/admin/user/add-group-subgroup?user-id=",this.memberGroupSubgroupEditBaseUrl="/admin/user/update-group-subgroup?user-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=null,this._clientUserAccess=this._clientUserAccessDefault,this._clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault,this._hasSetup=!1}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set clientUserGroupSubgroup(e){this._clientUserGroupSubgroup=e,this.requestUpdate()}get clientUserGroupSubgroup(){return this._clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return E(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,I.f)().then((()=>this._hasSetup=!0));const t=(0,d.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,b.Ie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this.clientUser.success&&(yield this.getPageAccesses(),"not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),yield this.getClientUserGroupSubgroup(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){var e,t;if(this._hasSetup){if(null===(e=(0,$.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(!(0,x.H)({pageId:B.W.view,viewType:"View"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}if(0!==this.userId&&null!==this.userId&&!Number.isNaN(this.userId)){if(null===this.clientUser)return i.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.clientUser)return i.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Admin User </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.clientUser.success){const e=i.dy`<h4 class="text-white">Error</h4>`,t=i.dy`
          <div>
            <p class="text-black mb-2">User Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
              label="Client Users Page"></link-button>
          </div>
        `;return i.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.clientUser,s=e.data,r=(t=Array.isArray(s)?s[0]:s,{id:Number(t.id),firstname:String(t.firstname),surname:String(t.surname),gender:Number(t.gender),profilePicture:String(t.profilePicture),dateOfBirth:new Date(t.dateOfBirth),phone:String(t.phone),email:String(t.email),role:Number(t.role),accountId:Number(t.accountId),branchId:Number(t.branchId),level:Number(t.level),status:Number(t.status),lastUpdatedBy:Number(t.lastUpdatedBy),date:new Date(t.date),last_login:new Date(t.last_login)}),a=e.success,l=a?(0,c.h)(String(r.id),!0):"",d=this.clientUserGroupSubgroup,o=d.data,n=Array.isArray(o)?o[0]:o,u=d.success;return i.dy`
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${a?i.dy`${r.firstname} ${r.surname}'s`:i.Ld} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="client"
                  url="${a?r.profilePicture:" profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberProfilePhotoEditBaseUrl}${l}" label="Edit">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${a?i.dy`${r.firstname} ${r.surname}'s`:i.Ld} Group(s)/ Subgroup(s)
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
                ${Number.isNaN(n.id)?i.dy`
                  <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                    href="${this.memberGroupSubgroupAddBaseUrl}${l}" label="Add">
                  </link-button>
                `:i.dy`
                  <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                    href="${this.memberGroupSubgroupEditBaseUrl}${l}" label="Edit">
                  </link-button>
                `}
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-8 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${a?i.dy`${r.firstname} ${r.surname}'s`:i.Ld} Bio/ Access 
                  ${this.editAccess?i.dy`
                  <div class="flex flex-col items-center pl-2">
                    <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${r.id}" @click="${this.deleteClientUser}"></mwc-icon-button>
                    <small class="block">Delete</small>
                  </div>
                  `:i.Ld}
                </h4>
              </div>
              <div class="p-3 ">
                <div class="row justify-content-center">
                  ${this.bioData(r,a)}
                  ${this.accessData}
                </div>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberProfileEditBaseUrl}${l}" label="Edit">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `}if("not-mine"===this.page_type){const e=i.dy`<h4 class="text-white">Error</h4>`,t=i.dy`
          <div>
            <p class="text-black mb-2">User Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
              label="Client Users Page"></link-button>
          </div>
        `;return i.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}}displayGroupsSectionBtn(e){e.preventDefault(),this.formId=1,this.groupsSectionFormBtn.setAttribute("raised","true"),this.subGroupsSectionFormBtn.removeAttribute("raised")}displaySubGroupsSectionBtn(e){e.preventDefault(),this.formId=2,this.subGroupsSectionFormBtn.setAttribute("raised","true"),this.groupsSectionFormBtn.removeAttribute("raised")}bioData(e,t){return i.dy`
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
                      <p>${t?i.dy`${e.firstname} ${e.surname}`:"-"}</p>
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
                      <p>${t?i.dy`${1===e.gender?"Male":2===e.gender?"Female":"-"} `:"-"}
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
                      <p>${t?i.dy`${e.dateOfBirth.toDateString()}`:"-"}</p>
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
                      <p>${t?i.dy`<a href="tel:${e.phone}" type="tel">${e.phone}</a>`:"-"}</p>
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
                      <p>${t?i.dy`<a href="mailto:${e.email}" type="email">${e.email}</a>`:"-"}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get accessData(){const e=this.clientUserAccess,t=e.data,s=Array.isArray(t)?t:[t],r=e.success;let a=[];return r&&s.forEach((e=>{e=C.e.toClientUserPageAccessModel(JSON.stringify(e)),a.includes(e)||a.push(e)})),i.dy`
      <div class="col-md-12 col-lg-6 my-1">
        <client-user-access-card ?isActive="${!1}" .available_access="${this._pageAccesses}" .user_access="${(null==a?void 0:a.length)>0?a:null}"></client-user-access-card>
      </div>
    `}getGroupSubgroupSection(e,t){return 1===this.formId?(this.formId,i.dy`
        ${this.groupData(e,t)}
      `):(this.formId,i.dy`
        ${this.subGroupData(e,t)}
      `)}groupData(e,t){var s;return i.dy`
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
                ${null===(s=t?e.group:[])||void 0===s?void 0:s.map(((e,t)=>i.dy`
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
    `}subGroupData(e,t){var s;return i.dy`
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
                ${null===(s=t?e.subgroup:[])||void 0===s?void 0:s.map(((e,t)=>i.dy`
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
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const s={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(s)||e.push(s)})),e}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,o.Jx)("user-id"),t=null!==e?(0,c.t)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}deleteClientUser(e){return E(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,b.Ie)(),s=y.t.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,r={};return v().fire({title:"Remove User?",text:"User will no longer be able to login. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,_.d)(s,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new w.H("delete",e,!1),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,U.T)(e);v().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let s=e;s.error=t;const r=new w.H("delete",s,!0);return r.postForm,r}})).catch((e=>{v().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!v().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),s=r.response.success}v().fire({title:t,icon:s?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getClientUser(){return E(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,n.a)(this.userId,"?branchId="+e);this.clientUser=null===t?void 0:t.response}))}getClientUserAccess(){return E(this,void 0,void 0,(function*(){const e=yield(0,p.H)(null,"?userId="+this.userId);if(null===e)this._clientUserAccess=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>C.e.toClientUserPageAccessModel(JSON.stringify(e)))):e.response.data=[C.e.toClientUserPageAccessModel(JSON.stringify(t))],this._clientUserAccess=e.response}}))}getLoggedUserAccess(){return E(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,p.H)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,u.z)(e)).page.id&&(this.editAccess=!0)}))}}))}getClientUserGroupSubgroup(){return E(this,void 0,void 0,(function*(){const e=yield(0,g.x)(null,"?userId="+this.userId);if(null===e)this.clientUserGroupSubgroup=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>k.e.toClientUserGroupSubgroupModel(JSON.stringify(e)))):e.response.data=[k.e.toClientUserGroupSubgroupModel(JSON.stringify(t))],this.clientUserGroupSubgroup=e.response}}))}getPageAccesses(){return E(this,void 0,void 0,(function*(){const e=yield(0,h.u)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>A.e.toClientPageAccessModel(JSON.stringify(e)))));const s=[];s.push(...this._pageAccesses,...t),this._pageAccesses=s}))}createRenderRoot(){return this}};P.styles=[i.iv`
   :host { display: block; }
  `],N([(0,l.IO)("#groupsSectionFormBtn"),G("design:type","function"==typeof(r=void 0!==m.z&&m.z)?r:Object)],P.prototype,"groupsSectionFormBtn",void 0),N([(0,l.IO)("#subGroupsSectionFormBtn"),G("design:type","function"==typeof(a=void 0!==m.z&&m.z)?a:Object)],P.prototype,"subGroupsSectionFormBtn",void 0),N([(0,l.Cb)({type:Number}),G("design:type",Number)],P.prototype,"userId",void 0),N([(0,l.Cb)({type:Number}),G("design:type",Number)],P.prototype,"loggedUserId",void 0),N([(0,l.Cb)({type:Number}),G("design:type",Number)],P.prototype,"formId",void 0),N([(0,l.Cb)({type:String}),G("design:type",String)],P.prototype,"page_type",void 0),N([(0,l.Cb)({type:Boolean}),G("design:type",Boolean)],P.prototype,"editAccess",void 0),N([(0,l.Cb)({type:String}),G("design:type",String)],P.prototype,"memberProfileEditBaseUrl",void 0),N([(0,l.Cb)({type:String}),G("design:type",String)],P.prototype,"memberProfilePhotoEditBaseUrl",void 0),N([(0,l.Cb)({type:String}),G("design:type",String)],P.prototype,"memberGroupSubgroupAddBaseUrl",void 0),N([(0,l.Cb)({type:String}),G("design:type",String)],P.prototype,"memberGroupSubgroupEditBaseUrl",void 0),N([(0,l.Cb)({type:Array}),G("design:type",Array)],P.prototype,"_pageAccesses",void 0),N([(0,l.Cb)({type:Array}),G("design:type",Array)],P.prototype,"_activeBranchId",void 0),N([(0,l.Cb)({type:Array}),G("design:type",Array)],P.prototype,"_userLoginInfo",void 0),N([(0,l.Cb)({type:Boolean}),G("design:type",Boolean)],P.prototype,"_hasSetup",void 0),P=N([(0,l.Mo)("pdb-admin-user-one"),G("design:paramtypes",[])],P)}},e=>(e.O(0,[2185,5744,9674,316,836,5291,6236,6069,4816,4710,2091,3712],(()=>(7136,e(e.s=7136)))),e.O())])));
//# sourceMappingURL=view.js.map