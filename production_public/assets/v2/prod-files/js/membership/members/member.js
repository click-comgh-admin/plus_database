"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9182],{2752:(e,t,a)=>{a.d(t,{e:()=>l});var r=a(7684),s=a(2730),i=a(6432),o=a(102),n=a(6425);class l{static toUserStatusModel(e){return m(JSON.parse(e),p("UserStatusModel"),d)}static userStatusModelToJson(e){return JSON.stringify(m(e,p("UserStatusModel"),c),null,2)}}function d(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function c(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function m(e,t,a,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let s=0;s<r;s++){const r=e[s];try{return m(t,r,a)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>m(t,e,a)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],o=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;s[i.key]=m(o,i.typ,a,i.key)})),Object.getOwnPropertyNames(r).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(s[i]=m(r[i],t,a,i))})),s}(a(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function b(...e){return{unionMembers:e}}function p(e){return{ref:e}}const u={UserStatusModel:(h=[{json:"id",js:"id",typ:b(null,0)},{json:"disability",js:"disability",typ:b(null,!0)},{json:"maritalStatus",js:"maritalStatus",typ:b(null,p("MaritalStatusModel"))},{json:"occupationalStatus",js:"occupationalStatus",typ:b(null,p("OccupationStatusModel"))},{json:"professionStatus",js:"professionStatus",typ:b(null,p("ProfessionStatusModel"))},{json:"educationalStatus",js:"educationalStatus",typ:b(null,p("EducationStatusModel"))},{json:"religion",js:"religion",typ:b(null,"")},{json:"languages",js:"languages",typ:b(null,"")},{json:"memberId",js:"memberId",typ:b(null,p("MembershipMixedUserModel"))},{json:"date",js:"date",typ:b(null,Date)}],!1,{props:h,additional:false}),MaritalStatusModel:i.Y.MaritalStatusModel,OccupationStatusModel:o.Y.OccupationStatusModel,ProfessionStatusModel:n.Y.ProfessionStatusModel,EducationStatusModel:s.Y.EducationStatusModel,MembershipMixedUserModel:r.Y.MembershipMixedUserModel,GroupingsMemberCategoryModel:r.Y.GroupingsMemberCategoryModel,BranchInfo:r.Y.BranchInfo,GroupingsOrganizationTypeModel:r.Y.GroupingsOrganizationTypeModel,Certificate:r.Y.Certificate,Attachment:r.Y.Attachment,FolderID:r.Y.FolderID,RegionInfo:r.Y.RegionInfo,CountryInfo:r.Y.CountryInfo,DistrictConstituencyElectoralAreaInfo:r.Y.DistrictConstituencyElectoralAreaInfo};var h},7449:(e,t,a)=>{a.d(t,{f:()=>m});var r=a(6455),s=a.n(r),i=a(771),o=a(7270),n=a(596),l=a(8967),d=a(3600),c=function(e,t,a,r){return new(a||(a=Promise))((function(s,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function n(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,n)}l((r=r.apply(e,t||[])).next())}))};function m(e){return c(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),a=i.t.URLS.AKWAABA_API_BASE_URL+"members/user/"+e,r={};return s().fire({title:"Remove Member?",text:"Member will be permanently deleted from your member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,o.d)(a,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new n.H("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.T)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const r=new n.H("delete",a,!0);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),a=r.response.success}s().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},6656:(e,t,a)=>{a.d(t,{E:()=>n});var r=a(771),s=a(7270),i=a(596),o=a(3600);function n(e=null,t="",a=!1){return n=this,l=void 0,c=function*(){const n=r.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,l=r.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,d=(0,o.Ie)(),c=a?l:n,m=yield(0,s.d)(c,{method:"GET",headers:{Authorization:"Token "+d.token}},!0);try{return new i.H("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new i.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function a(e){try{s(c.next(e))}catch(e){t(e)}}function r(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof d?s:new d((function(e){e(s)}))).then(a,r)}s((c=c.apply(n,l||[])).next())}));var n,l,d,c}},6445:(e,t,a)=>{a.d(t,{h:()=>n});var r=a(771),s=a(7270),i=a(596),o=a(3600);function n(e=null,t=""){return a=this,n=void 0,d=function*(){const a=(0,o.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"members/user-status/info"+(null===e?"":"/"+e)+t,l=yield(0,s.d)(n,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new i.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{i(d.next(e))}catch(e){t(e)}}function s(e){try{i(d.throw(e))}catch(e){t(e)}}function i(t){var a;t.done?e(t.value):(a=t.value,a instanceof l?a:new l((function(e){e(a)}))).then(r,s)}i((d=d.apply(a,n||[])).next())}));var a,n,l,d}},9504:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMember:()=>W});var r=a(9392),s=a(1936),i=a(2004),o=a(7052),n=a(4672),l=(a(2715),a(8763),a(8281),a(1877),a(2169),a(934),a(6811),a(3600)),d=a(5248),c=a(6656),m=a(7684),b=a(8058),p=a(2413),u=a(7659),h=a(1848),y=a(6445),f=a(2752),v=a(9356),g=a(4596),_=a(7475),S=a(5707),w=a(4173),I=function(e,t,a,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let B=class extends r.oi{constructor(){super(),this.memberInfo=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberInfo?this.pageLoading:this.memberInfo.length<1?this.pageError:this.memberInfo.map((e=>r.dy`
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 my-1">
          ${this.leftSide(e)}${this.rightSide(e)}
        </div>
      `))}leftSide(e){var t;return r.dy`
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
                    <p>${e.firstname} ${null!==(t=e.middlename)&&void 0!==t?t:""} ${e.surname}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Member ID</p>
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
                    <p>Gender</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${1===e.gender?"Male":2===e.gender?"Female":"-"}</p>
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
                    <p>${(0,w._)(e.dateOfBirth)}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Community</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${e.community}</p>
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
                    <p><a href="tel:${e.phone}" type="tel">${e.phone}</a></p>
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
                    <p><a href="mailto:${e.email}" type="email">${e.email}</a></p>
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
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>C.V</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p><a href="${e.profileResume}">VIEW FILE</a></p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>I.D</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p><a href="${e.profileIdentification}">VIEW FILE</a></p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `}get pageLoading(){return r.dy`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=r.dy`<h4 class="text-gray-600">No Data Found!</h4>`,t=r.Ld;return r.dy`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};B.styles=[r.iv`
   :host { display: block; }
  `],I([(0,s.Cb)({type:Array}),C("design:type",Array)],B.prototype,"memberInfo",void 0),B=I([(0,s.Mo)("pdb-membership-member-individual"),C("design:paramtypes",[])],B),a(1826),a(4846),a(2530),a(845),a(5142);var M=function(e,t,a,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let A=class extends r.oi{constructor(){super(),this.memberStatusInfo=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return console.log({"this.memberStatusInfo":this.memberStatusInfo}),null===this.memberStatusInfo?this.pageLoading:this.memberStatusInfo.length<1?this.pageError:this.memberStatusInfo.map((e=>(console.log({"status.status":e}),r.dy`
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
                        <p>Disability</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p><mwc-switch ?selected="${e.disability}" disabled></mwc-switch></p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Marital Status</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.maritalStatus.name}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Occupational Status</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.occupationalStatus.name}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Profession Status</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.professionStatus.name}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Education Status</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.educationalStatus.name}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `)))}get pageLoading(){return r.dy`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=r.dy`<h4 class="text-gray-600">No Data Found!</h4>`,t=r.Ld;return r.dy`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};A.styles=[r.iv`
   :host { display: block; }
  `],M([(0,s.Cb)({type:Array}),x("design:type",Array)],A.prototype,"memberStatusInfo",void 0),A=M([(0,s.Mo)("pdb-membership-member-status"),x("design:paramtypes",[])],A),a(2205),a(1506),a(3683),a(4657);var $,k,j,U,R,O=a(771),N=a(9665),P=a(2145),E=a(1302),L=a(9981),D=a(7449),G=function(e,t,a,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o},T=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},F=function(e,t,a,r){return new(a||(a=Promise))((function(s,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function n(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,n)}l((r=r.apply(e,t||[])).next())}))};let W=class extends r.oi{constructor(){super(),this.memberId=0,this.loggedUserId=0,this.formId=1,this.tabSection2Id=1,this.page_type="mine",this.editAccess=!1,this.memberPhotoUpdateBaseUrl=`${O.t.URLS.PDB_CLIENT}member/update/photo?member-id=`,this.memberBioDataUpdateBaseUrl=`${O.t.URLS.PDB_CLIENT}member/update/bio-data?member-id=`,this.memberGroupSubgroupUpdateBaseUrl=`${O.t.URLS.PDB_CLIENT}member/update/group-subgroup?member-id=`,this.memberBranchCategoryStatusLocationUpdateBaseUrl=`${O.t.URLS.PDB_CLIENT}member/update/branch-category-status-location?member-id=`,this.memberContactBaseUrl=`${O.t.URLS.PDB_CLIENT}member/update/contact?member-id=`,this._activeBranchId=null,this._userLoginInfo=null,this._pdbBranchMember=null,this.memberGroups=null,this.memberSubGroups=null,this.memberStatusInfo=null,this.memberContactInfo=null,this.memberContactPrivacy=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return F(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,N.f)().then((()=>this._hasSetup=!0));const t=(0,i.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,l.Ie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember(),this.pdbBranchMember.success&&(yield this.getMemberGroups(),yield this.getMemberSubgroups(),yield this.getMemberStatusInfo(),yield this.getMemberContactInfo(),yield this.getMemberContactPrivacy()))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,P.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,E.H)({pageId:L.W.view,viewType:"View"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=r.dy`<h4 class="text-white">Error</h4>`,t=r.dy`
        <div>
          <p class="text-black mb-2">Member Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to members page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${O.t.URLS.PDB_CLIENT}member/members"
            label="Members Page"></link-button>
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
                <span class="font-bold">Member </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=r.dy`<h4 class="text-white">Error</h4>`,t=r.dy`
          <div>
            <p class="text-black mb-2">Member Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${O.t.URLS.PDB_CLIENT}member/members"
              label="Members Page"></link-button>
          </div>
        `;return r.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember,t=e.data,a=m.e.toMembershipMixedUserModel(JSON.stringify(Array.isArray(t)?t[0]:t)),s=e.success,i=s?(0,o.h)(String(a.id),!0):"";return r.dy`
        <div class="row justify-content-center">
          <div class="col-md-4 col-lg-4 my-1">
            <div class="shadow bg-white mb-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${s?r.dy`${a.firstname} ${a.surname}'s`:r.Ld} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="member"
                  url="${s?a.profilePicture:" profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberPhotoUpdateBaseUrl}${i}" label="Update">
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
                  href="${this.memberGroupSubgroupUpdateBaseUrl}${i}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white mt-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  Branch & Category/ Status/ Location
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="branchCategorySectionBtn"
                    label="Branch/ Category" @click="${this.displayBranchCategorySectionBtn}"></mwc-tab>
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="locationSectionBtn" label="Status" @click="${this.displayStatusSectionBtn}"></mwc-tab>
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="statusSectionBtn" label="Location" @click="${this.displayLocationSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getbranchCategoryLocationStatusSection(a)}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberBranchCategoryStatusLocationUpdateBaseUrl}${i}" label="Update">
                </link-button>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-8 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${s?r.dy`${a.firstname} ${a.surname}'s`:r.Ld} Bio Data 
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
                <pdb-membership-member-individual .memberInfo="${[a]}"></pdb-membership-member-individual>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberBioDataUpdateBaseUrl}${i}" label="Update">
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
                  href="${this.memberContactBaseUrl}${i}" label="Update">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `}}hasEditPermission(e){return(0,E.H)({pageId:L.W.edit,viewType:"Edit"},!1)?r.dy`
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
    `}displayBranchCategorySectionBtn(e){e.preventDefault(),this.tabSection2Id=1,this.branchCategorySectionBtn.setAttribute("raised","true"),this.locationSectionBtn.removeAttribute("raised"),this.statusSectionBtn.removeAttribute("raised")}displayStatusSectionBtn(e){e.preventDefault(),this.tabSection2Id=2,this.statusSectionBtn.setAttribute("raised","true"),this.locationSectionBtn.removeAttribute("raised"),this.branchCategorySectionBtn.removeAttribute("raised")}displayLocationSectionBtn(e){e.preventDefault(),this.tabSection2Id=3,this.locationSectionBtn.setAttribute("raised","true"),this.branchCategorySectionBtn.removeAttribute("raised"),this.statusSectionBtn.removeAttribute("raised")}getbranchCategoryLocationStatusSection(e){return 1===this.tabSection2Id?(this.tabSection2Id,r.dy`
        ${this.branchCategoryData(e)}
      `):2===this.tabSection2Id?(this.tabSection2Id,r.dy`
        ${this.statusData}
      `):(this.tabSection2Id,r.dy`
        ${this.locationData(e)}
      `)}branchCategoryData(e){return r.dy`
      <pdb-membership-member-branch-category .memberInfo="${[e]}"></pdb-membership-member-branch-category>
    `}get statusData(){return r.dy`
      <pdb-membership-member-status .memberStatusInfo="${this.memberStatusInfo}"></pdb-membership-member-status>
    `}locationData(e){return r.dy`
      <pdb-membership-member-location .memberInfo="${[e]}"></pdb-membership-member-location>
    `}firstUpdated(){}getUserId(){let e=(0,n.Jx)("view"),t=null!==e?(0,o.t)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}deleteMember(e){return F(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,D.f)(t)}))}getMember(){return F(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,c.E)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getMemberGroups(){return F(this,void 0,void 0,(function*(){const e=yield(0,b.t)(null,"?memberId="+this.memberId);if(null===e)this.memberGroups=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberGroups=t.map((e=>u.e.toGroupMemberModel(JSON.stringify(e))))}}))}getMemberSubgroups(){return F(this,void 0,void 0,(function*(){const e=yield(0,p.A)(null,"?memberId="+this.memberId);if(null===e)this.memberSubGroups=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberSubGroups=t.map((e=>h.e.toSubGroupMemberModel(JSON.stringify(e))))}}))}getMemberStatusInfo(){return F(this,void 0,void 0,(function*(){const e=yield(0,y.h)(null,"?memberId="+this.memberId);if(null===e)this.memberStatusInfo=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberStatusInfo=t.map((e=>f.e.toUserStatusModel(JSON.stringify(e))))}}))}getMemberContactInfo(){return F(this,void 0,void 0,(function*(){const e=yield(0,_.m)(null,"?memberId="+this.memberId);if(null===e)this.memberContactInfo=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactInfo=t.map((e=>v.e.toUserContactModel(JSON.stringify(e))))}}))}getMemberContactPrivacy(){return F(this,void 0,void 0,(function*(){const e=yield(0,S.a)(null,"?memberId="+this.memberId);if(null===e)this.memberContactPrivacy=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactPrivacy=t.map((e=>g.e.toUserContactPrivacyModel(JSON.stringify(e))))}}))}createRenderRoot(){return this}};W.styles=[r.iv`
   :host { display: block; }
  `],G([(0,s.IO)("#groupsSectionFormBtn"),T("design:type","function"==typeof($=void 0!==d.z&&d.z)?$:Object)],W.prototype,"groupsSectionFormBtn",void 0),G([(0,s.IO)("#subGroupsSectionFormBtn"),T("design:type","function"==typeof(k=void 0!==d.z&&d.z)?k:Object)],W.prototype,"subGroupsSectionFormBtn",void 0),G([(0,s.IO)("#branchCategorySectionBtn"),T("design:type","function"==typeof(j=void 0!==d.z&&d.z)?j:Object)],W.prototype,"branchCategorySectionBtn",void 0),G([(0,s.IO)("#locationSectionBtn"),T("design:type","function"==typeof(U=void 0!==d.z&&d.z)?U:Object)],W.prototype,"locationSectionBtn",void 0),G([(0,s.IO)("#statusSectionBtn"),T("design:type","function"==typeof(R=void 0!==d.z&&d.z)?R:Object)],W.prototype,"statusSectionBtn",void 0),G([(0,s.Cb)({type:Number}),T("design:type",Number)],W.prototype,"memberId",void 0),G([(0,s.Cb)({type:Number}),T("design:type",Number)],W.prototype,"loggedUserId",void 0),G([(0,s.Cb)({type:Number}),T("design:type",Number)],W.prototype,"formId",void 0),G([(0,s.Cb)({type:Number}),T("design:type",Number)],W.prototype,"tabSection2Id",void 0),G([(0,s.Cb)({type:String}),T("design:type",String)],W.prototype,"page_type",void 0),G([(0,s.Cb)({type:Boolean}),T("design:type",Boolean)],W.prototype,"editAccess",void 0),G([(0,s.Cb)({type:String}),T("design:type",String)],W.prototype,"memberPhotoUpdateBaseUrl",void 0),G([(0,s.Cb)({type:String}),T("design:type",String)],W.prototype,"memberBioDataUpdateBaseUrl",void 0),G([(0,s.Cb)({type:String}),T("design:type",String)],W.prototype,"memberGroupSubgroupUpdateBaseUrl",void 0),G([(0,s.Cb)({type:String}),T("design:type",String)],W.prototype,"memberBranchCategoryStatusLocationUpdateBaseUrl",void 0),G([(0,s.Cb)({type:String}),T("design:type",String)],W.prototype,"memberContactBaseUrl",void 0),G([(0,s.Cb)({type:Array}),T("design:type",Array)],W.prototype,"_activeBranchId",void 0),G([(0,s.Cb)({type:Array}),T("design:type",Array)],W.prototype,"_userLoginInfo",void 0),G([(0,s.Cb)({type:Array}),T("design:type",Array)],W.prototype,"memberGroups",void 0),G([(0,s.Cb)({type:Array}),T("design:type",Array)],W.prototype,"memberSubGroups",void 0),G([(0,s.Cb)({type:Array}),T("design:type",Array)],W.prototype,"memberStatusInfo",void 0),G([(0,s.Cb)({type:Array}),T("design:type",Array)],W.prototype,"memberContactInfo",void 0),G([(0,s.Cb)({type:Array}),T("design:type",Array)],W.prototype,"memberContactPrivacy",void 0),G([(0,s.Cb)({type:Boolean}),T("design:type",Boolean)],W.prototype,"_hasSetup",void 0),W=G([(0,s.Mo)("pdb-membership-member"),T("design:paramtypes",[])],W)}},e=>(e.O(0,[2185,5744,9674,316,836,5291,6236,6069,8491,4816,1038,9198,5536,3712],(()=>(9504,e(e.s=9504)))),e.O())])));
//# sourceMappingURL=member.js.map