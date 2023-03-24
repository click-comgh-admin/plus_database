"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7167],{4026:(e,t,a)=>{a.d(t,{m:()=>b});var r=a(6455),i=a.n(r),s=a(771),o=a(7270),d=a(596),n=a(8967),l=a(3600),c=function(e,t,a,r){return new(a||(a=Promise))((function(i,s){function o(e){try{n(r.next(e))}catch(e){s(e)}}function d(e){try{n(r.throw(e))}catch(e){s(e)}}function n(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,d)}n((r=r.apply(e,t||[])).next())}))};function b(e){return c(this,void 0,void 0,(function*(){const t=(0,l.Ie)(),a=s.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/"+e,r={};return i().fire({title:"Remove Organization Member?",text:"Organization will be permanently deleted from your member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,o.d)(a,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new d.H("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,n.T)(e);i().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const r=new d.H("delete",a,!0);return r.postForm,r}})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),a=r.response.success}i().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8561:(e,t,a)=>{a.d(t,{V:()=>d});var r=a(771),i=a(7270),s=a(596),o=a(3600);function d(e=null,t="",a=!1){return d=this,n=void 0,c=function*(){const d=r.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,n=r.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,l=(0,o.Ie)(),c=a?n:d,b=yield(0,i.d)(c,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new s.H("get",b)}catch(e){console.error({error:e});let t=b;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function a(e){try{i(c.next(e))}catch(e){t(e)}}function r(e){try{i(c.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(a,r)}i((c=c.apply(d,n||[])).next())}));var d,n,l,c}},8822:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberOrganization:()=>G});var r=a(5862),i=a(8393),s=a(2004),o=a(7052),d=a(4672),n=(a(2715),a(8763),a(8281),a(1877),a(2169),a(934),a(6811),a(3600)),l=a(5248),c=a(7684),b=a(8058),m=a(2413),p=a(7659),u=a(1848),h=a(9356),v=a(4596),y=a(7475),g=a(5707),f=a(4173),_=function(e,t,a,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let C=class extends r.oi{constructor(){super(),this.memberInfo=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberInfo?this.pageLoading:this.memberInfo.length<1?this.pageError:this.memberInfo.map((e=>r.dy`
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 my-1">
          ${this.leftSide(e)} ${this.rightSide(e)}
        </div>
        ${this.contactPerson(e)}
        ${this.businessRegistered(e)}
      `))}leftSide(e){return r.dy`
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
                    <p>${e.organizationName}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Organization ID</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${e.identification}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Organization Type</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${e.organizationType.type}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `}rightSide(e){return r.dy`
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
                    <p>Phone</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p><a href="tel:${e.organizationPhone}" type="tel">${e.organizationPhone}</a></p>
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
                    <p><a href="mailto:${e.organizationEmail}" type="email">${e.organizationEmail}</a></p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Reference ID</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${e.referenceId}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `}contactPerson(e){return e.businessRegistered?r.dy`
        <div class="p-1 shadow-md border rounded-sm my-4">
          <h4 class="uppercase text-base font-bold flex justify-between pl-3">Contact Person</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 my-1">
            <div class="w-full">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${e.contactPersonName} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="member"
                  url="${e.contactPersonPhoto}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-1 border-t-2 flex justify-end">
              </div>
            </div>
            <div class="my-1">
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
                            <p>${e.contactPersonName}</p>
                          </div>
                        </td>
                      </tr>
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <p>Gender</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <p>${1===e.contactPersonGender?"Male":2===e.contactPersonGender?"Female":"-"}</p>
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
                            <p><a href="tel:${e.contactPersonPhone}" type="tel">${e.contactPersonPhone}</a></p>
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
                            <p><a href="mailto:${e.contactPersonEmail}" type="email">${e.contactPersonEmail}</a></p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      `:r.Ld}businessRegistered(e){var t;return e.businessRegistered?r.dy`
        <div class="my-1">
          <h4 class="uppercase text-base font-bold flex justify-between">Registered Business</h4>
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
                        <p>Date of Incorporation</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${(0,f._)(e.dateOfIncorporation)}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Certificates</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        ${null===(t=e.certificates)||void 0===t?void 0:t.map((e=>(console.log({"certificate-certificate":e}),r.dy`
                            <p>
                              <a href="${e.attachment.attachment}" type="download">${e.attachment.filename}</a>
                            </p>
                          `)))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `:r.Ld}get pageLoading(){return r.dy`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=r.dy`<h4 class="text-gray-600">No Data Found!</h4>`,t=r.Ld;return r.dy`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};C.styles=[r.iv`
   :host { display: block; }
  `],_([(0,i.Cb)({type:Array}),w("design:type",Array)],C.prototype,"memberInfo",void 0),C=_([(0,i.Mo)("pdb-membership-member-view-organization"),w("design:paramtypes",[])],C),a(1826),a(4846),a(2530),a(845),a(2205),a(1506),a(4657),a(3683);var I,S,B,x,$=a(771),k=a(9665),A=a(2145),P=a(1302),U=a(9981),M=a(8561),N=a(4026),R=function(e,t,a,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(o=(s<3?i(o):s>3?i(t,a,o):i(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o},z=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},L=function(e,t,a,r){return new(a||(a=Promise))((function(i,s){function o(e){try{n(r.next(e))}catch(e){s(e)}}function d(e){try{n(r.throw(e))}catch(e){s(e)}}function n(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,d)}n((r=r.apply(e,t||[])).next())}))};let G=class extends r.oi{constructor(){super(),this.memberId=0,this.loggedUserId=0,this.formId=1,this.tabSection2Id=1,this.page_type="mine",this.editAccess=!1,this.memberPhotoUpdateBaseUrl=`${$.t.URLS.PDB_CLIENT}member/organization/update/photo?member-id=`,this.memberBioDataUpdateBaseUrl=`${$.t.URLS.PDB_CLIENT}member/organization/update/bio-data?member-id=`,this.memberGroupSubgroupUpdateBaseUrl=`${$.t.URLS.PDB_CLIENT}member/organization/update/group-subgroup?member-id=`,this.memberBranchCategoryLocationUpdateBaseUrl=`${$.t.URLS.PDB_CLIENT}member/organization/update/branch-category-location?member-id=`,this.memberContactBaseUrl=`${$.t.URLS.PDB_CLIENT}member/organization/update/contact?member-id=`,this._activeBranchId=null,this._userLoginInfo=null,this._pdbBranchMember=null,this.memberGroups=null,this.memberSubGroups=null,this.memberContactInfo=null,this.memberContactPrivacy=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return L(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,k.f)().then((()=>this._hasSetup=!0));const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,n.Ie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember(),this.pdbBranchMember.success&&(yield this.getMemberGroups(),yield this.getMemberSubgroups(),yield this.getMemberContactInfo(),yield this.getMemberContactPrivacy()))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,A.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,P.H)({pageId:U.W["view-organization"],viewType:"View"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=r.dy`<h4 class="text-white">Error</h4>`,t=r.dy`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${$.t.URLS.PDB_CLIENT}member/organization/members"
            label="Organizations Page"></link-button>
        </div>
      `;return r.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return r.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return r.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Organization </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=r.dy`<h4 class="text-white">Error</h4>`,t=r.dy`
          <div>
            <p class="text-black mb-2">Organization Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${$.t.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;return r.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember,t=e.data,a=c.e.toMembershipMixedUserModel(JSON.stringify(Array.isArray(t)?t[0]:t)),i=e.success,s=i?(0,o.h)(String(a.id),!0):"";return r.dy`
        <div class="row justify-content-center">
          <div class="col-md-4 col-lg-4 my-1">
            <div class="shadow bg-white mb-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${i?r.dy`${a.organizationName}'s`:r.Ld} Logo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="member"
                  url="${i?a.logo:" profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberPhotoUpdateBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  Group(s)/ Subgroup(s)
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="groupsSectionFormBtn"
                    label="Group" @click="${this.displayGroupsSectionBtn}"></mwc-tab>
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="subGroupsSectionFormBtn" label="Sub-Group" @click="${this.displaySubGroupsSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getGroupSubgroupSection}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberGroupSubgroupUpdateBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white mt-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  Branch & Category/ Location
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="branchCategorySectionBtn"
                    label="Branch/ Category" @click="${this.displayBranchCategorySectionBtn}"></mwc-tab>
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="locationSectionBtn" label="Location" @click="${this.displayLocationSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getbranchCategoryLocationSection(a)}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberBranchCategoryLocationUpdateBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-8 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${i?r.dy`${a.organizationName}'s`:r.Ld} Bio Data 
                  <span>
                    <label class="mx-4">
                      <b> - Editable</b>
                      <input disabled type="checkbox" ?checked="${a.editable}"
                        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    ${this.hasEditPermission(a)}
                  </span>
                </h4>
              </div>
              <div class="p-3 ">
                <pdb-membership-member-view-organization .memberInfo="${[a]}"></pdb-membership-member-view-organization>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberBioDataUpdateBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white mt-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  Contact Info & Privacy 
                </h4>
              </div>
              <div class="p-3 ">
                <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                  <pdb-membership-member-contact-data .memberContactInfo="${this.memberContactInfo}"></pdb-membership-member-contact-data>
                  <pdb-membership-member-contact-privacy .memberContactPrivacy="${this.memberContactPrivacy}"></pdb-membership-member-contact-privacy>
                </div>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberContactBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `}}hasEditPermission(e){return(0,P.H)({pageId:U.W["edit-organization"],viewType:"Edit"},!1)?r.dy`
      <div class="flex flex-col items-center pl-2">
        <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${e.id}" @click="${this.deleteMember}"></mwc-icon-button>
        <small class="block">Delete</small>
      </div>
    `:r.Ld}displayGroupsSectionBtn(e){e.preventDefault(),this.formId=1,this.groupsSectionFormBtn.setAttribute("raised","true"),this.subGroupsSectionFormBtn.removeAttribute("raised")}displaySubGroupsSectionBtn(e){e.preventDefault(),this.formId=2,this.subGroupsSectionFormBtn.setAttribute("raised","true"),this.groupsSectionFormBtn.removeAttribute("raised")}get getGroupSubgroupSection(){return 1===this.formId?(this.formId,r.dy`
        ${this.groupData}
      `):(this.formId,r.dy`
        ${this.subGroupData}
      `)}get groupData(){return r.dy`
      <pdb-membership-member-groups .memberGroups="${this.memberGroups}"></pdb-membership-member-groups>
    `}get subGroupData(){return r.dy`
      <pdb-membership-member-subgroups .memberSubGroups="${this.memberSubGroups}"></pdb-membership-member-subgroups>
    `}displayBranchCategorySectionBtn(e){e.preventDefault(),this.tabSection2Id=1,this.branchCategorySectionBtn.setAttribute("raised","true"),this.locationSectionBtn.removeAttribute("raised")}displayLocationSectionBtn(e){e.preventDefault(),this.tabSection2Id=3,this.locationSectionBtn.setAttribute("raised","true"),this.branchCategorySectionBtn.removeAttribute("raised")}getbranchCategoryLocationSection(e){return 1===this.tabSection2Id?(this.tabSection2Id,r.dy`
        ${this.branchCategoryData(e)}
      `):(this.tabSection2Id,r.dy`
        ${this.locationData(e)}
      `)}branchCategoryData(e){return r.dy`
      <pdb-membership-member-branch-category .memberInfo="${[e]}"></pdb-membership-member-branch-category>
    `}locationData(e){return r.dy`
      <pdb-membership-member-location .memberInfo="${[e]}"></pdb-membership-member-location>
    `}firstUpdated(){}getUserId(){let e=(0,d.Jx)("view"),t=null!==e?(0,o.t)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}deleteMember(e){return L(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,N.m)(t)}))}getMember(){return L(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,M.V)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getMemberGroups(){return L(this,void 0,void 0,(function*(){const e=yield(0,b.t)(null,"?memberId="+this.memberId);if(null===e)this.memberGroups=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberGroups=t.map((e=>p.e.toGroupMemberModel(JSON.stringify(e))))}}))}getMemberSubgroups(){return L(this,void 0,void 0,(function*(){const e=yield(0,m.A)(null,"?memberId="+this.memberId);if(null===e)this.memberSubGroups=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberSubGroups=t.map((e=>u.e.toSubGroupMemberModel(JSON.stringify(e))))}}))}getMemberContactInfo(){return L(this,void 0,void 0,(function*(){const e=yield(0,y.m)(null,"?memberId="+this.memberId);if(null===e)this.memberContactInfo=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactInfo=t.map((e=>h.e.toUserContactModel(JSON.stringify(e))))}}))}getMemberContactPrivacy(){return L(this,void 0,void 0,(function*(){const e=yield(0,g.a)(null,"?memberId="+this.memberId);if(null===e)this.memberContactPrivacy=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactPrivacy=t.map((e=>v.e.toUserContactPrivacyModel(JSON.stringify(e))))}}))}createRenderRoot(){return this}};G.styles=[r.iv`
   :host { display: block; }
  `],R([(0,i.IO)("#groupsSectionFormBtn"),z("design:type","function"==typeof(I=void 0!==l.z&&l.z)?I:Object)],G.prototype,"groupsSectionFormBtn",void 0),R([(0,i.IO)("#subGroupsSectionFormBtn"),z("design:type","function"==typeof(S=void 0!==l.z&&l.z)?S:Object)],G.prototype,"subGroupsSectionFormBtn",void 0),R([(0,i.IO)("#branchCategorySectionBtn"),z("design:type","function"==typeof(B=void 0!==l.z&&l.z)?B:Object)],G.prototype,"branchCategorySectionBtn",void 0),R([(0,i.IO)("#locationSectionBtn"),z("design:type","function"==typeof(x=void 0!==l.z&&l.z)?x:Object)],G.prototype,"locationSectionBtn",void 0),R([(0,i.Cb)({type:Number}),z("design:type",Number)],G.prototype,"memberId",void 0),R([(0,i.Cb)({type:Number}),z("design:type",Number)],G.prototype,"loggedUserId",void 0),R([(0,i.Cb)({type:Number}),z("design:type",Number)],G.prototype,"formId",void 0),R([(0,i.Cb)({type:Number}),z("design:type",Number)],G.prototype,"tabSection2Id",void 0),R([(0,i.Cb)({type:String}),z("design:type",String)],G.prototype,"page_type",void 0),R([(0,i.Cb)({type:Boolean}),z("design:type",Boolean)],G.prototype,"editAccess",void 0),R([(0,i.Cb)({type:String}),z("design:type",String)],G.prototype,"memberPhotoUpdateBaseUrl",void 0),R([(0,i.Cb)({type:String}),z("design:type",String)],G.prototype,"memberBioDataUpdateBaseUrl",void 0),R([(0,i.Cb)({type:String}),z("design:type",String)],G.prototype,"memberGroupSubgroupUpdateBaseUrl",void 0),R([(0,i.Cb)({type:String}),z("design:type",String)],G.prototype,"memberBranchCategoryLocationUpdateBaseUrl",void 0),R([(0,i.Cb)({type:String}),z("design:type",String)],G.prototype,"memberContactBaseUrl",void 0),R([(0,i.Cb)({type:Array}),z("design:type",Array)],G.prototype,"_activeBranchId",void 0),R([(0,i.Cb)({type:Array}),z("design:type",Array)],G.prototype,"_userLoginInfo",void 0),R([(0,i.Cb)({type:Array}),z("design:type",Array)],G.prototype,"memberGroups",void 0),R([(0,i.Cb)({type:Array}),z("design:type",Array)],G.prototype,"memberSubGroups",void 0),R([(0,i.Cb)({type:Array}),z("design:type",Array)],G.prototype,"memberContactInfo",void 0),R([(0,i.Cb)({type:Array}),z("design:type",Array)],G.prototype,"memberContactPrivacy",void 0),R([(0,i.Cb)({type:Boolean}),z("design:type",Boolean)],G.prototype,"_hasSetup",void 0),G=R([(0,i.Mo)("pdb-membership-member-organization"),z("design:paramtypes",[])],G)}},e=>(e.O(0,[2185,5744,9674,7154,1080,5291,6236,6069,4808,4816,5665,5536,3712],(()=>(8822,e(e.s=8822)))),e.O())])));
//# sourceMappingURL=member-organization.js.map