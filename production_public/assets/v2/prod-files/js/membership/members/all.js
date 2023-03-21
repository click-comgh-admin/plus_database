"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3007],{2869:(e,t,n)=>{function i(e){return{id:Number(e.id),name:e.name}}n.d(t,{y:()=>i})},7553:(e,t,n)=>{n.d(t,{q:()=>l});var i=n(771),o=n(7270),s=n(596),r=n(3600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,r.Ie)(),n=i.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),l=yield(0,o.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,i){function o(e){try{r(c.next(e))}catch(e){i(e)}}function s(e){try{r(c.throw(e))}catch(e){i(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,s)}r((c=c.apply(t,n||[])).next())}));var t,n,l,c}},7449:(e,t,n)=>{n.d(t,{f:()=>u});var i=n(6455),o=n.n(i),s=n(771),r=n(7270),l=n(596),c=n(8967),a=n(3600),d=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,a.Ie)(),n=s.t.URLS.AKWAABA_API_BASE_URL+"members/user/"+e,i={};return o().fire({title:"Remove Member?",text:"Member will be permanently deleted from your member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,r.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.T)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new l.H("delete",n,!0);return i.postForm,i}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},414:(e,t,n)=>{n.d(t,{j:()=>l});var i=n(771),o=n(7270),s=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"members/user-status/education"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},66:(e,t,n)=>{n.d(t,{o:()=>l});var i=n(771),o=n(7270),s=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"members/user-status/marital"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},745:(e,t,n)=>{n.d(t,{d:()=>l});var i=n(771),o=n(7270),s=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"members/user-status/occupation"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},109:(e,t,n)=>{n.d(t,{f:()=>l});var i=n(771),o=n(7270),s=n(596),r=n(3600);function l(e=null,t=""){return n=this,l=void 0,a=function*(){const n=(0,r.Ie)(),l=i.t.URLS.AKWAABA_API_BASE_URL+"members/user-status/profession"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(a.next(e))}catch(e){t(e)}}function o(e){try{s(a.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(i,o)}s((a=a.apply(n,l||[])).next())}));var n,l,c,a}},5527:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipMembers:()=>Z});var i=n(9392),o=n(1936),s=n(5248),r=(n(1239),n(9261),n(3313),n(6883),n(6811),n(5866),n(2715),n(2004)),l=(n(8281),n(7052)),c=n(771),a=n(3600),d=n(4672),u=n(7553),m=n(2869),p=n(2368),f=(n(3629),n(3683),n(2145)),h=(n(4657),n(1302)),b=n(9981),y=n(9665),g=n(7684),v=n(428),S=n(1594),_=n(2892),w=n(9605),A=n(2730),x=n(6432),N=n(102),C=n(6425),$=n(414),k=n(66),B=n(745),O=n(109),I=n(8276),E=n(596);n(9982);var M,T,L,D=n(2761),R=n(8278),U=n(4564),F=n(4253),P=n(9446),H=n(1729),q=n(6525),G=n(1791),j=n(6455),J=n.n(j),z=n(7270),W=n(8967),K=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))},V=n(7449),Q=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},X=function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function r(e){try{c(i.next(e))}catch(e){s(e)}}function l(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};let Z=class extends i.oi{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._genders=[],this._groups=[],this._subgroups=[],this.maritalStatusInfo=[],this.occupationStatusInfo=[],this.professionStatusInfo=[],this.educationStatusInfo=[],this._activeBranchId=null,this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._countries=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={},this.downloadingFile=!1,this._memberType=1,this._hasSetup=!1,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return X(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,y.f)().then((()=>{if(null!==this._hasSetup)return this._hasSetup=!0}));const t=(0,r.hk)();this._activeBranchId=null===t?null:[t],this.filterBox=new p.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders(),yield this.getGroups(),yield this.getSubGroups(),yield this.getMaritalStatus(),yield this.getEducationStatus(),yield this.getOccupationStatus(),yield this.getProfessionStatus(),yield this.getLocationCountry()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,f.H)())||void 0===e?void 0:e.expiration_date.expired)return i.dy`<account-expired-component></account-expired-component>`;if(!(0,h.H)({pageId:b.W.view,viewType:"View"},!1))return i.dy`<no-page-entry-component></no-page-entry-component>`}return i.dy`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1 shadow bg-white p-2">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1 shadow bg-white p-2">
        ${this.filterForm}
      </div>
      <div class="block my-1 shadow bg-white p-2">
        ${this.downloadBtns}
        ${this.table_header}
        ${this.table}
      </div>
    `}get table_header(){return i.dy`
      <div class="flex-col p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-center">
            <b>CHECK ALL: </b>
            <input id="member_deletion_info_all" name="member_deletion_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_member_deletion}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="danger" raised member_deletion_info_all="delete"
            @click="${this.deleteMultipleMemberAction}">Delete All Selected</mwc-button>
        </div>
      </div>
    `}firstUpdated(){this.filterBox=new p.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e)}}get downloadBtns(){return i.dy`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadMemberExcel}">
        </mwc-button> 
        ${this.downloadingFile?i.dy`<mwc-circular-progress indeterminate></mwc-circular-progress>`:i.Ld}
      </div>
    `}get filterForm(){let e=i.dy``;const t=(0,d.O1)(),n="filter_gender",o="filter_name",s="filter_identity",r="memberType",l="fromAge",c="toAge",a="filter_country",u="filter_region",m="filter_district",p="filter_constituency";let f=null,h=null,b=null,y=null,g=null,v=null,S=null,_=null,w=null,A=null,x=null,N=null,C=null,$=null,k=null,B=null;for(const e in t){let i=String(t[e]);i=""===i?null:i,e===n&&(f=i),e===o&&(h=i),e===s&&(b=i),e===r&&(y=i),"groupId"===e&&(g=i),"subgroupId"===e&&(v=i),"maritalStatus"===e&&(S=i),"occupationalStatus"===e&&(_=i),"educationalStatus"===e&&(w=i),"professionStatus"===e&&(A=i),e===l&&(x=Number(i)),e===c&&(N=Number(i)),e===a&&(C=Number(i)),e===u&&($=Number(i)),e===m&&(k=Number(i)),e===p&&(B=Number(i))}const O=i.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name</h4>
          <mwc-textfield type="text" name="${o}" id="${o}" label="Search By Name" 
            value="${null===h?"":h}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,I=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Gender</h4>
          <mwc-select name="${n}" id="${n}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===f?i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(f)===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>`,E=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Filter Age In Years</h4>
          <div class="flex">
            <mwc-textfield type="number" min="0" name="${l}" id="${l}" label="Pick From Age" 
              value="${null===x?"":x}" class="mr-1" outlined required>
            </mwc-textfield>
            <mwc-textfield type="number" min="0" name="${c}" id="${c}" label="Pick To Age" 
              value="${null===N?"":N}" class="ml-1" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>`,M=i.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Member ID</h4>
          <mwc-textfield name="${s}" id="${s}" label="Search By Member ID"
            value="${null===b?"":b}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,T=i.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${y}" 
            name="${r}" id="${r}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,L=Number.isNaN(g)?0:Number(g),D=Number.isNaN(v)?0:Number(v),R=this.groupsSubgroups(L,D),U=i.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="groupId" class="w-full" id="groupId" label="Select Group"
            .options="${R.groups}" outlined required>
          </select-input>
        </div>
      </div>`,F=i.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="subgroupId" class="w-full" id="subgroupId" label="Select Sub-Group"
            .options="${R.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`,P=Number.isNaN(S)?0:Number(S),H=Number.isNaN(_)?0:Number(_),q=Number.isNaN(w)?0:Number(w),G=Number.isNaN(A)?0:Number(A),j=this.maritalOccupationalProfessionEducationalStatus(P,H,q,G),J=i.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Marital Status</h4>
          <select-input name="maritalStatus" class="w-full" id="maritalStatus" label="Select Marital Status"
            .options="${j.maritalStatuses}" outlined required>
          </select-input>
        </div>
      </div>`,z=i.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Occupational Status</h4>
          <select-input name="occupationalStatus" class="w-full" id="occupationalStatus" label="Select Occupational Status"
            .options="${j.occupationalStatuses}" outlined required>
          </select-input>
        </div>
      </div>`,W=i.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Educational Status</h4>
          <select-input name="educationalStatus" class="w-full" id="educationalStatus" label="Select Educational Status"
            .options="${j.educationalStatuses}" outlined required>
          </select-input>
        </div>
      </div>`,K=i.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Profession Status</h4>
          <select-input name="professionStatus" class="w-full" id="professionStatus" label="Select Profession Status"
            .options="${j.professionStatuses}" outlined required>
          </select-input>
        </div>
      </div>`,V=this._countries.map((e=>({id:e.id,name:e.name,isSelected:C==e.id?"true":"false",selected:C==e.id}))),Q=this._regions.map((e=>({id:e.id,name:e.location,isSelected:$==e.id?"true":"false",selected:$==e.id}))),Y=this._districts.map((e=>({id:e.id,name:e.location,isSelected:k==e.id?"true":"false",selected:k==e.id}))),X=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:B==e.id?"true":"false",selected:B==e.id}))),Z=[i.dy`<app-accordion-item accordion_class_name="filter-areas" class="w-100"
        .buttonHtml="${i.dy`<b>Location Filter</b>`}"
        .contentHtml="${i.dy`
          <div class="mt-1 mb-2 row">
            <div class="col-xl-6 col-md-6">
              <h4 class="font-semibold my-2">Select Country</h4>
              <select-input name="${a}" id="${a}" label="Select Country" .options="${V}"
                outlined required>
              </select-input>
            </div>
            <div class="col-xl-6 col-md-6" show_ghana_locations>
              <h4 class="font-semibold my-2">Select Region</h4>
              <select-input name="${u}" id="${u}" label="Select Region" .options="${Q}"
                outlined required>
              </select-input>
            </div>
            <div class="col-xl-6 col-md-6" show_ghana_locations>
              <h4 class="font-semibold my-2">Select District</h4>
              <select-input name="${m}" id="${m}" label="Select District" .options="${Y}"
                outlined required>
              </select-input>
            </div>
            <div class="col-xl-6 col-md-6" show_ghana_locations>
              <h4 class="font-semibold my-2">Select Constituency</h4>
              <select-input name="${p}" id="${p}" label="Select Constituency" .options="${X}"
                outlined required>
              </select-input>
            </div>
          </div>`}">
        </app-accordion-item>
      `,i.dy`<app-accordion-item accordion_class_name="filter-areas" class="w-100"
        .buttonHtml="${i.dy`<b>Group Filter</b>`}"
        .contentHtml="${i.dy`<div class="mt-1 mb-2 row">
            ${U} ${F}
          </div>`}">
        </app-accordion-item>
      `,i.dy`<app-accordion-item accordion_class_name="filter-areas" class="w-100"
        .buttonHtml="${i.dy`<b>Status Filter</b>`}"
        .contentHtml="${i.dy`<div class="mt-1 mb-2 row">
            ${J} ${z} ${W} ${K}
          </div>`}">
        </app-accordion-item>
      `];return e=i.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${O} ${M} ${I} ${E} ${T}
              <div class="col-xl-12 col-md-10"></div>
            </div>
          </div>
          <div class="container">
            <app-accordion accordionName="filter-areas" .contents=${Z} class="w-100"></app-accordion>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
      </form>`,e}groupsSubgroups(e,t){let n=[{id:0,name:"Select Group Status",isSelected:"false",selected:!1}],i=[{id:0,name:"Select Sub-Group Status",isSelected:"false",selected:!1}];return this._groups.forEach((t=>{let i=!1,o="false";e===t.id&&(i=!0,o="true");const s={id:t.id,name:t.group,isSelected:o,selected:i};n.includes(s)||n.push(s)})),this._subgroups.forEach((e=>{let n=!1,o="false";t===e.id&&(n=!0,o="true");const s={id:e.id,name:`${e.groupID.group} => ${e.subgroup}`,isSelected:o,selected:n};i.includes(s)||i.push(s)})),{groups:n,subgroups:i}}maritalOccupationalProfessionEducationalStatus(e,t,n,i){let o=[{id:0,name:"Select Marital Status",isSelected:"false",selected:!1}],s=[{id:0,name:"Select Profession Status",isSelected:"false",selected:!1}],r=[{id:0,name:"Select Education Status",isSelected:"false",selected:!1}],l=[{id:0,name:"Select Occupation Status",isSelected:"false",selected:!1}];return this.maritalStatusInfo.forEach((t=>{let n=!1,i="false";e===t.id&&(n=!0,i="true");const s={id:t.id,name:t.name,isSelected:i,selected:n};o.includes(s)||o.push(s)})),this.professionStatusInfo.forEach((e=>{let t=!1,n="false";i===e.id&&(t=!0,n="true");const o={id:e.id,name:e.name,isSelected:n,selected:t};s.includes(o)||s.push(o)})),this.educationStatusInfo.forEach((e=>{let t=!1,i="false";n===e.id&&(t=!0,i="true");const o={id:e.id,name:e.name,isSelected:i,selected:t};r.includes(o)||r.push(o)})),this.occupationStatusInfo.forEach((e=>{let n=!1,i="false";t===e.id&&(n=!0,i="true");const o={id:e.id,name:e.name,isSelected:i,selected:n};l.includes(o)||l.push(o)})),{maritalStatuses:o,occupationalStatuses:l,educationalStatuses:r,professionStatuses:s}}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t=c.t.URLS.AKWAABA_API_BASE_URL+"members/user?branchId="+e+"&order__by=firstname&datatable_plugin";t+=this.urlQueryString;const n=this.__dataTable(t);let o={};const s=(0,a.Ie)();return o.Authorization="Token "+s.token,i.dy`
      <datatables-new .datatable="${n}" .ajaxHeader="${o}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,d.O1)(),t="memberType",n="groupId",i="subgroupId",o="maritalStatus",s="occupationalStatus",r="educationalStatus",l="professionStatus",c="fromAge",a="toAge",u="filter_country",m="filter_region",p="filter_district",f="filter_constituency";let h={};for(const d in e){let b=String(e[d]);"filter_gender"!==d&&"filter_name"!==d&&"filter_identity"!==d&&d!==t&&d!==n&&d!==i&&d!==o&&d!==s&&d!==r&&d!==l&&d!==c&&d!==a&&d!==u&&d!==m&&d!==p&&d!==f||(h[d]=b,d!==c&&d!==a||b<="0"&&delete h[d],d!==n&&d!==i&&d!==o&&d!==s&&d!==r&&d!==l||"0"===b&&(h[d]=""),d!==u&&d!==m&&d!==p&&d!==f||"0"===b&&(h[d]=""))}t in h||(h[t]="1"),c in h&&a in h||(delete h[c],delete h[a]);let b=(0,d.W3)(h);return 0===b.length?b:"&"+b}getGenders(){return X(this,void 0,void 0,(function*(){const e=yield(0,u.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,m.y)(e))));const n=[];n.push(...this._genders,...t),this._genders=n}))}getGroups(){return X(this,void 0,void 0,(function*(){const e=yield(0,_.c)();let t=[];if(null===e)t.push({id:0,group:"**NOT FOUND**",date:new Date});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>v.e.toGroupModel(JSON.stringify(e))));t=n}const n=[];n.push(...this._groups,...t),this._groups=n}))}getSubGroups(){return X(this,void 0,void 0,(function*(){const e=yield(0,w.U)();let t=[];if(null===e)t.push({id:0,subgroup:"**NOT FOUND**",date:new Date});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>S.e.toSubGroupModel(JSON.stringify(e))));t=n}const n=[];n.push(...this._subgroups,...t),this._subgroups=n}))}getMaritalStatus(){return X(this,void 0,void 0,(function*(){const e=yield(0,k.o)();let t=[{name:"Select Marital Status"}];if(null===e)t.push({id:0,name:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>x.e.toMaritalStatusModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this.maritalStatusInfo,...t),this.maritalStatusInfo=n}))}getOccupationStatus(){return X(this,void 0,void 0,(function*(){const e=yield(0,B.d)();let t=[{name:"Select Occupation Status"}];if(null===e)t.push({id:0,name:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>N.e.toOccupationStatusModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this.occupationStatusInfo,...t),this.occupationStatusInfo=n}))}getProfessionStatus(){return X(this,void 0,void 0,(function*(){const e=yield(0,O.f)();let t=[{name:"Select Profession Status"}];if(null===e)t.push({id:0,name:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>C.e.toProfessionStatusModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this.professionStatusInfo,...t),this.professionStatusInfo=n}))}getEducationStatus(){return X(this,void 0,void 0,(function*(){const e=yield(0,$.j)();let t=[{name:"Select Education Status"}];if(null===e)t.push({id:0,name:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>A.e.toEducationStatusModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this.educationStatusInfo,...t),this.educationStatusInfo=n}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,n,i){i=g.e.toMembershipMixedUserModel(JSON.stringify(i));const o=(0,l.h)(String(i.id),!0);return`<div class="flex items-center whitespace-normal mb-0">\n              <input id="member_deletion_info" name="member_deletion_info" type="checkbox" value="${i.id}"\n              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-3" />\n              <div class="flex items-center whitespace-normal mb-0">\n                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${t.memberProfileBaseUrl}${o}" type="member"\n                  url="${i.profilePicture}" size="16"></user-profile-photo>\n                <p class="ml-1 mb-0">${i.firstname} ${i.middlename} ${i.surname}</p>\n              </div>\n            </div>\n            <div class="whitespace-normal shadow p-1">\n              <i class="ml-1"><b>ID: </b> ${i.identification}</i>\n            </div>`},orderable:!0},{data:"firstname",render:function(e,n,i){i=g.e.toMembershipMixedUserModel(JSON.stringify(i));const o=(0,l.h)(String(i.id),!0);return`<div class="flex flex-col md:flex-row items-center whitespace-normal">\n              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"\n                href="${t.memberProfileBaseUrl}${o}" label="Open"></link-button>\n            </div>\n            <div class="flex flex-col md:flex-row whitespace-normal">\n              <p class="ml-1 mb-2">\n                <mwc-button class="danger" raised delete-member="${i.id}">Delete</mwc-button>\n              </p>\n            </div>`},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return X(this,void 0,void 0,(function*(){e.aoData,t.deleteMemberBtns()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}downloadMemberExcel(){return X(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t="?branchId="+e+"&order__by=firstname";t+=this.urlQueryString,this.downloadingFile=!0,yield function(e=""){return t=this,n=void 0,o=function*(){const t=(0,a.Ie)(),n=c.t.URLS.AKWAABA_API_BASE_URL+"members/user/download-excel"+e,i=yield(0,I.w)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return i}catch(e){let t=i;return t.error=e,new E.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,l)}c((o=o.apply(t,n||[])).next())}));var t,n,i,o}(t),this.downloadingFile=!1}))}countryChanged(e){const t=document.querySelectorAll('select[name="country"]'),n=(0,d.O1)();let i=null,o=null,s=null,r=null;for(const e in n){let t=String(n[e]);t=""===t?null:t,"filter_country"===e&&(i=Number(t)),"filter_region"===e&&(o=Number(t)),"filter_district"===e&&(s=Number(t)),"filter_constituency"===e&&(r=Number(t))}"76"===String(i)&&(this.getLocationRegion(),null!==o&&(this.getLocationDistrict(o),null!==s&&this.getLocationConstituency(o,s))),t.forEach((e=>{e.onchange=t=>X(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]");"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{}))):(this._regions=[],this._districts=[],this._constituencies=[],this.regionCalled=!1,t.forEach((e=>{})))}))}))}regionChanged(e){return X(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>X(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>X(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getLocationCountry(){return X(this,void 0,void 0,(function*(){const e=yield(0,P.B)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>D.e.toCountryModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._countries,...t),this._countries=n}))}getLocationRegion(){return X(this,void 0,void 0,(function*(){const e=yield(0,H.d)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>R.e.toLocationRegionModel(JSON.stringify(e))));console.log({DATA:n}),t=[...t,...n]}const n=[];n.push(...this._regions,...t),this._regions=n}))}getLocationDistrict(e){return X(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),n=this._districtsMemo;if(t in n)setTimeout((()=>{const e=[];e.push(...this._districts,...n[t]),this._districts=e}),100);else{const n=yield(0,q.o)(e);let i=[{id:0,location:"Select District",regionId:null}];if(null===n)i.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===n.response.success&&"length"in n.response.data){const e=n.response.data.map((e=>F.e.toLocationDistrictModel(JSON.stringify(e))));i=[...i,...e],this._districtsMemo[t]=i}const o=[];o.push(...this._districts,...i),this._districts=o}}))}getLocationConstituency(e,t){return X(this,void 0,void 0,(function*(){this._constituencies=[];const n=`${e}_${t}`,i=this._constituenciesMemo;if(n in i)setTimeout((()=>{const e=[];e.push(...this._constituencies,...i[n]),this._constituencies=e}),100);else{const i=yield(0,G.S)(e,t);let o=[{id:0,location:"Select Constituency",regionId:null}];if(null===i)o.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===i.response.success&&"length"in i.response.data){const e=i.response.data.map((e=>U.e.toLocationConstituencyModel(JSON.stringify(e))));o=[...o,...e],this._constituenciesMemo[n]=o}const s=[];s.push(...this._constituencies,...o),this._constituencies=s}}))}check_all_member_deletion(e){return X(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="member_deletion_info_all"][name="member_deletion_info_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="member_deletion_info"][name="member_deletion_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="member_deletion_info"][name="member_deletion_info"]').forEach((e=>{e.checked=!1}))}))}))}deleteMemberBtns(){const e="delete-member";document.querySelectorAll("["+e+"]").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),this.deleteMemberAction(t,e,n)}))}))}deleteMemberAction(e,t,n){return X(this,void 0,void 0,(function*(){n.preventDefault();const i=e.getAttribute(t);Number.isNaN(i)||0===Number(i)||(yield(0,V.f)(Number(i)))}))}deleteMultipleMemberAction(e){return X(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="member_deletion_info"][name="member_deletion_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const n=Number(e.value);t.includes(n)||t.push(n)}})),yield function(e){return K(this,void 0,void 0,(function*(){const t=(0,a.Ie)(),n=c.t.URLS.AKWAABA_API_BASE_URL+"members/user/delete-bulk",i={memberIds:e};return J().fire({title:"Delete Members?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>K(this,void 0,void 0,(function*(){return yield(0,z.d)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+t.token}},!0,!1).then((e=>{try{const t=new E.H("delete",e,!1),n=t.response;if(null!==n&&"nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,W.T)(e);J().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const i=new E.H("delete",n,!0);return i.postForm,i}})).catch((e=>{J().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!J().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),n=i.response.success}J().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}createRenderRoot(){return this}};Z.styles=[i.iv`
   :host { display: block; }
  `],Q([(0,o.IO)('[filter-section-context="btn"]'),Y("design:type","function"==typeof(M=void 0!==s.z&&s.z)?M:Object)],Z.prototype,"filterSectionContextBtn",void 0),Q([(0,o.IO)('[filter-section-context="container"]'),Y("design:type","function"==typeof(T="undefined"!=typeof Element&&Element)?T:Object)],Z.prototype,"filterSectionContextContainer",void 0),Q([(0,o.IO)('[make-general-posts="submit_filter_form"]'),Y("design:type","function"==typeof(L="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?L:Object)],Z.prototype,"filterSectionContextForm",void 0),Q([(0,o.Cb)({type:String}),Y("design:type",String)],Z.prototype,"memberProfileBaseUrl",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"_genders",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"_groups",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"_subgroups",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"maritalStatusInfo",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"occupationStatusInfo",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"professionStatusInfo",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"educationStatusInfo",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"_activeBranchId",void 0),Q([(0,o.Cb)({type:Boolean}),Y("design:type",Boolean)],Z.prototype,"regionCalled",void 0),Q([(0,o.Cb)({type:Number}),Y("design:type",Number)],Z.prototype,"selectedRegion",void 0),Q([(0,o.Cb)({type:Number}),Y("design:type",Number)],Z.prototype,"selectedDistrict",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"_countries",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"_regions",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"_districts",void 0),Q([(0,o.Cb)({type:Array}),Y("design:type",Array)],Z.prototype,"_constituencies",void 0),Q([(0,o.Cb)({type:Object}),Y("design:type",Object)],Z.prototype,"_constituenciesMemo",void 0),Q([(0,o.Cb)({type:Object}),Y("design:type",Object)],Z.prototype,"_districtsMemo",void 0),Q([(0,o.Cb)({type:Boolean}),Y("design:type",Boolean)],Z.prototype,"downloadingFile",void 0),Q([(0,o.Cb)({type:Number}),Y("design:type",Number)],Z.prototype,"_memberType",void 0),Q([(0,o.Cb)({type:Boolean}),Y("design:type",Boolean)],Z.prototype,"_hasSetup",void 0),Z=Q([(0,o.Mo)("pdb-membership-members"),Y("design:paramtypes",[])],Z)}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,6553,3629,4808,2743,9198,8255,3712],(()=>(5527,e(e.s=5527)))),e.O())])));
//# sourceMappingURL=all.js.map