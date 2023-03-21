"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9114],{4026:(e,t,i)=>{i.d(t,{m:()=>u});var o=i(6455),n=i.n(o),r=i(771),s=i(7270),l=i(596),c=i(8967),d=i(3600),a=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}c((o=o.apply(e,t||[])).next())}))};function u(e){return a(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),i=r.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/"+e,o={};return n().fire({title:"Remove Organization Member?",text:"Organization will be permanently deleted from your member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>a(this,void 0,void 0,(function*(){return yield(0,s.d)(i,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new l.H("delete",e,!1),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.T)(e);n().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let i=e;i.error=t;const o=new l.H("delete",i,!0);return o.postForm,o}})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),i=o.response.success}n().fire({title:t,icon:i?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},1340:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipMemberOrganizations:()=>H});var o=i(9392),n=i(1936),r=i(5248),s=(i(1239),i(9261),i(3313),i(6883),i(6811),i(5866),i(2715),i(2004)),l=(i(8281),i(7052)),c=i(771),d=i(3600),a=i(4672),u=i(2368),m=(i(3629),i(2145)),p=(i(4657),i(3683),i(1302)),h=i(9981),f=i(9665),b=i(7684),g=i(428),y=i(1594),v=i(2892),_=i(9605),w=i(8276),S=i(596);i(9982);var C,x,N,k=i(2761),$=i(8278),A=i(4564),B=i(4253),O=i(9446),M=i(1729),E=i(6525),I=i(1791),D=i(6455),L=i.n(D),T=i(7270),R=i(8967),F=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}c((o=o.apply(e,t||[])).next())}))},U=i(4026),z=function(e,t,i,o){var n,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(r<3?n(s):r>3?n(t,i,s):n(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},q=function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function l(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}c((o=o.apply(e,t||[])).next())}))};let H=class extends o.oi{constructor(){super(),this.memberProfileBaseUrl="/member/organization/member-profile?view=",this._activeBranchId=null,this._groups=[],this._subgroups=[],this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._countries=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={},this.downloadingFile=!1,this._memberType=1,this._hasSetup=!1,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return q(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,f.f)().then((()=>this._hasSetup=!0));const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this.filterBox=new u.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGroups(),yield this.getSubGroups(),yield this.getLocationCountry()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,m.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(!(0,p.H)({pageId:h.W.view,viewType:"View"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
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
    `}get table_header(){return o.dy`
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
    `}firstUpdated(){this.filterBox=new u.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e)}}get downloadBtns(){return o.dy`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadMemberExcel}">
        </mwc-button> 
        ${this.downloadingFile?o.dy`<mwc-circular-progress indeterminate></mwc-circular-progress>`:o.Ld}
      </div>
    `}get filterForm(){let e=o.dy``;const t=(0,a.O1)(),i="filter_name",n="filter_identity",r="memberType",s="filter_country",l="filter_region",c="filter_district",d="filter_constituency";let u=null,m=null,p=null,h=null,f=null,b=null,g=null,y=null,v=null;for(const e in t){let o=String(t[e]);o=""===o?null:o,e===i&&(u=o),e===n&&(m=o),e===r&&(p=o),"groupId"===e&&(h=o),"subgroupId"===e&&(f=o),e===s&&(b=Number(o)),e===l&&(g=Number(o)),e===c&&(y=Number(o)),e===d&&(v=Number(o))}const _=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name</h4>
          <mwc-textfield type="text" name="${i}" id="${i}" label="Search By Name" 
            value="${null===u?"":u}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,w=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Organization ID</h4>
          <mwc-textfield name="${n}" id="${n}" label="Search By Organization ID"
            value="${null===m?"":m}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,S=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${p}" 
            name="${r}" id="${r}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,C=Number.isNaN(h)?0:Number(h),x=Number.isNaN(f)?0:Number(f),N=this.groupsSubgroups(C,x),k=o.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="groupId" class="w-full" id="groupId" label="Select Group"
            .options="${N.groups}" outlined required>
          </select-input>
        </div>
      </div>`,$=o.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="subgroupId" class="w-full" id="subgroupId" label="Select Sub-Group"
            .options="${N.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`,A=this._countries.map((e=>({id:e.id,name:e.name,isSelected:b==e.id?"true":"false",selected:b==e.id}))),B=this._regions.map((e=>({id:e.id,name:e.location,isSelected:g==e.id?"true":"false",selected:g==e.id}))),O=this._districts.map((e=>({id:e.id,name:e.location,isSelected:y==e.id?"true":"false",selected:y==e.id}))),M=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:v==e.id?"true":"false",selected:v==e.id}))),E=[o.dy`<app-accordion-item accordion_class_name="filter-areas" class="w-100"
        .buttonHtml="${o.dy`<b>Location Filter</b>`}"
        .contentHtml="${o.dy`
          <div class="mt-1 mb-2 row">
            <div class="col-xl-6 col-md-6">
              <h4 class="font-semibold my-2">Select Country</h4>
              <select-input name="${s}" id="${s}" label="Select Country" .options="${A}"
                outlined required>
              </select-input>
            </div>
            <div class="col-xl-6 col-md-6" show_ghana_locations>
              <h4 class="font-semibold my-2">Select Region</h4>
              <select-input name="${l}" id="${l}" label="Select Region" .options="${B}"
                outlined required>
              </select-input>
            </div>
            <div class="col-xl-6 col-md-6" show_ghana_locations>
              <h4 class="font-semibold my-2">Select District</h4>
              <select-input name="${c}" id="${c}" label="Select District" .options="${O}"
                outlined required>
              </select-input>
            </div>
            <div class="col-xl-6 col-md-6" show_ghana_locations>
              <h4 class="font-semibold my-2">Select Constituency</h4>
              <select-input name="${d}" id="${d}" label="Select Constituency" .options="${M}"
                outlined required>
              </select-input>
            </div>
          </div>`}">
        </app-accordion-item>
      `,o.dy`<app-accordion-item accordion_class_name="filter-areas" class="w-100"
        .buttonHtml="${o.dy`<b>Group Filter</b>`}"
        .contentHtml="${o.dy`<div class="mt-1 mb-2 row">
            ${k} ${$}
          </div>`}">
        </app-accordion-item>
      `];return e=o.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${_} ${w} ${S}
              <div class="col-xl-12 col-md-10"></div>
            </div>
          </div>
          <div class="container">
            <app-accordion accordionName="filter-areas" .contents=${E} class="w-100"></app-accordion>
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
      </form>`,e}groupsSubgroups(e,t){let i=[{id:0,name:"Select Group Status",isSelected:"false",selected:!1}],o=[{id:0,name:"Select Sub-Group Status",isSelected:"false",selected:!1}];return this._groups.forEach((t=>{let o=!1,n="false";e===t.id&&(o=!0,n="true");const r={id:t.id,name:t.group,isSelected:n,selected:o};i.includes(r)||i.push(r)})),this._subgroups.forEach((e=>{let i=!1,n="false";t===e.id&&(i=!0,n="true");const r={id:e.id,name:`${e.groupID.group} => ${e.subgroup}`,isSelected:n,selected:i};o.includes(r)||o.push(r)})),{groups:i,subgroups:o}}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t=c.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization?branchId="+e+"&order__by=firstname&datatable_plugin";t+=this.urlQueryString;const i=this.__dataTable(t);let n={};const r=(0,d.Ie)();return n.Authorization="Token "+r.token,o.dy`
      <datatables-new .datatable="${i}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,a.O1)(),t="memberType",i="groupId",o="subgroupId",n="filter_country",r="filter_region",s="filter_district",l="filter_constituency";let c={};for(const d in e){let a=String(e[d]);"filter_name"!==d&&"filter_identity"!==d&&d!==t&&d!==i&&d!==o&&d!==n&&d!==r&&d!==s&&d!==l||(c[d]=a,d!==i&&d!==o||"0"===a&&(c[d]=""),d!==n&&d!==r&&d!==s&&d!==l||"0"===a&&(c[d]=""))}t in c||(c[t]="1");let d=(0,a.W3)(c);return 0===d.length?d:"&"+d}getGroups(){return q(this,void 0,void 0,(function*(){const e=yield(0,v.c)();let t=[];if(null===e)t.push({id:0,group:"**NOT FOUND**",date:new Date});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>g.e.toGroupModel(JSON.stringify(e))));t=i}const i=[];i.push(...this._groups,...t),this._groups=i}))}getSubGroups(){return q(this,void 0,void 0,(function*(){const e=yield(0,_.U)();let t=[];if(null===e)t.push({id:0,subgroup:"**NOT FOUND**",date:new Date});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>y.e.toSubGroupModel(JSON.stringify(e))));t=i}const i=[];i.push(...this._subgroups,...t),this._subgroups=i}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,i,o){o=b.e.toMembershipMixedUserModel(JSON.stringify(o));const n=(0,l.h)(String(o.id),!0);return`<div class="flex items-center whitespace-normal mb-0">\n                <input id="member_deletion_info" name="member_deletion_info" type="checkbox" value="${o.id}"\n                class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-3" />\n                <div class="flex items-center whitespace-normal mb-0">\n                  <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${t.memberProfileBaseUrl}${n}" type="member"\n                    url="${o.logo}" size="16"></user-profile-photo>\n                  <p class="ml-1 mb-0">${o.organizationName}</p>\n                </div>\n              </div>\n              <div class="whitespace-normal shadow p-1">\n                <i class="ml-1"><b>ID: </b> ${o.identification}</i>\n              </div>`},orderable:!0},{data:"organizationName",render:function(e,i,o){o=b.e.toMembershipMixedUserModel(JSON.stringify(o));const n=(0,l.h)(String(o.id),!0);return`<div class="flex flex-col md:flex-row items-center whitespace-normal">\n              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"\n                href="${t.memberProfileBaseUrl}${n}" label="Open"></link-button>\n            </div>\n            <div class="flex flex-col md:flex-row whitespace-normal">\n              <p class="ml-1 mb-2">\n                <mwc-button class="danger" raised delete-member="${o.id}">Delete</mwc-button>\n              </p>\n            </div>`},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return q(this,void 0,void 0,(function*(){e.aoData,t.deleteMemberBtns()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}downloadMemberExcel(){return q(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t="?branchId="+e+"&order__by=firstname";t+=this.urlQueryString,this.downloadingFile=!0,yield function(e=""){return t=this,i=void 0,n=function*(){const t=(0,d.Ie)(),i=c.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/download-excel"+e,o=yield(0,w.w)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return o}catch(e){let t=o;return t.error=e,new S.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,r){function s(e){try{c(n.next(e))}catch(e){r(e)}}function l(e){try{c(n.throw(e))}catch(e){r(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(s,l)}c((n=n.apply(t,i||[])).next())}));var t,i,o,n}(t),this.downloadingFile=!1}))}countryChanged(e){const t=document.querySelectorAll('select[name="country"]'),i=(0,a.O1)();let o=null,n=null,r=null,s=null;for(const e in i){let t=String(i[e]);t=""===t?null:t,"filter_country"===e&&(o=Number(t)),"filter_region"===e&&(n=Number(t)),"filter_district"===e&&(r=Number(t)),"filter_constituency"===e&&(s=Number(t))}"76"===String(o)&&(this.getLocationRegion(),null!==n&&(this.getLocationDistrict(n),null!==r&&this.getLocationConstituency(n,r))),t.forEach((e=>{e.onchange=t=>q(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]");"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{}))):(this._regions=[],this._districts=[],this._constituencies=[],this.regionCalled=!1,t.forEach((e=>{})))}))}))}regionChanged(e){return q(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>q(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>q(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getLocationCountry(){return q(this,void 0,void 0,(function*(){const e=yield(0,O.B)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>k.e.toCountryModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._countries,...t),this._countries=i}))}getLocationRegion(){return q(this,void 0,void 0,(function*(){const e=yield(0,M.d)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>$.e.toLocationRegionModel(JSON.stringify(e))));console.log({DATA:i}),t=[...t,...i]}const i=[];i.push(...this._regions,...t),this._regions=i}))}getLocationDistrict(e){return q(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),i=this._districtsMemo;if(t in i)setTimeout((()=>{const e=[];e.push(...this._districts,...i[t]),this._districts=e}),100);else{const i=yield(0,E.o)(e);let o=[{id:0,location:"Select District",regionId:null}];if(null===i)o.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===i.response.success&&"length"in i.response.data){const e=i.response.data.map((e=>B.e.toLocationDistrictModel(JSON.stringify(e))));o=[...o,...e],this._districtsMemo[t]=o}const n=[];n.push(...this._districts,...o),this._districts=n}}))}getLocationConstituency(e,t){return q(this,void 0,void 0,(function*(){this._constituencies=[];const i=`${e}_${t}`,o=this._constituenciesMemo;if(i in o)setTimeout((()=>{const e=[];e.push(...this._constituencies,...o[i]),this._constituencies=e}),100);else{const o=yield(0,I.S)(e,t);let n=[{id:0,location:"Select Constituency",regionId:null}];if(null===o)n.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===o.response.success&&"length"in o.response.data){const e=o.response.data.map((e=>A.e.toLocationConstituencyModel(JSON.stringify(e))));n=[...n,...e],this._constituenciesMemo[i]=n}const r=[];r.push(...this._constituencies,...n),this._constituencies=r}}))}check_all_member_deletion(e){return q(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="member_deletion_info_all"][name="member_deletion_info_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="member_deletion_info"][name="member_deletion_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="member_deletion_info"][name="member_deletion_info"]').forEach((e=>{e.checked=!1}))}))}))}deleteMemberBtns(){const e="delete-member";document.querySelectorAll("["+e+"]").forEach((t=>{t.addEventListener("click",(i=>{i.preventDefault(),this.deleteMemberAction(t,e,i)}))}))}deleteMemberAction(e,t,i){return q(this,void 0,void 0,(function*(){i.preventDefault();const o=e.getAttribute(t);Number.isNaN(o)||0===Number(o)||(yield(0,U.m)(Number(o)))}))}deleteMultipleMemberAction(e){return q(this,void 0,void 0,(function*(){e.preventDefault();let t=[];document.querySelectorAll('[id="member_deletion_info"][name="member_deletion_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const i=Number(e.value);t.includes(i)||t.push(i)}})),yield function(e){return F(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),i=c.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/delete-bulk",o={memberIds:e};return L().fire({title:"Delete Organizations?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>F(this,void 0,void 0,(function*(){return yield(0,T.d)(i,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!0,!1).then((e=>{try{const t=new S.H("delete",e,!1),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,R.T)(e);L().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let i=e;i.error=t;const o=new S.H("delete",i,!0);return o.postForm,o}})).catch((e=>{L().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!L().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),i=o.response.success}L().fire({title:t,icon:i?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}createRenderRoot(){return this}};H.styles=[o.iv`
   :host { display: block; }
  `],z([(0,n.IO)('[filter-section-context="btn"]'),j("design:type","function"==typeof(C=void 0!==r.z&&r.z)?C:Object)],H.prototype,"filterSectionContextBtn",void 0),z([(0,n.IO)('[filter-section-context="container"]'),j("design:type","function"==typeof(x="undefined"!=typeof Element&&Element)?x:Object)],H.prototype,"filterSectionContextContainer",void 0),z([(0,n.IO)('[make-general-posts="submit_filter_form"]'),j("design:type","function"==typeof(N="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?N:Object)],H.prototype,"filterSectionContextForm",void 0),z([(0,n.Cb)({type:String}),j("design:type",String)],H.prototype,"memberProfileBaseUrl",void 0),z([(0,n.Cb)({type:Array}),j("design:type",Array)],H.prototype,"_activeBranchId",void 0),z([(0,n.Cb)({type:Array}),j("design:type",Array)],H.prototype,"_groups",void 0),z([(0,n.Cb)({type:Array}),j("design:type",Array)],H.prototype,"_subgroups",void 0),z([(0,n.Cb)({type:Boolean}),j("design:type",Boolean)],H.prototype,"regionCalled",void 0),z([(0,n.Cb)({type:Number}),j("design:type",Number)],H.prototype,"selectedRegion",void 0),z([(0,n.Cb)({type:Number}),j("design:type",Number)],H.prototype,"selectedDistrict",void 0),z([(0,n.Cb)({type:Array}),j("design:type",Array)],H.prototype,"_countries",void 0),z([(0,n.Cb)({type:Array}),j("design:type",Array)],H.prototype,"_regions",void 0),z([(0,n.Cb)({type:Array}),j("design:type",Array)],H.prototype,"_districts",void 0),z([(0,n.Cb)({type:Array}),j("design:type",Array)],H.prototype,"_constituencies",void 0),z([(0,n.Cb)({type:Object}),j("design:type",Object)],H.prototype,"_constituenciesMemo",void 0),z([(0,n.Cb)({type:Object}),j("design:type",Object)],H.prototype,"_districtsMemo",void 0),z([(0,n.Cb)({type:Boolean}),j("design:type",Boolean)],H.prototype,"downloadingFile",void 0),z([(0,n.Cb)({type:Number}),j("design:type",Number)],H.prototype,"_memberType",void 0),z([(0,n.Cb)({type:Boolean}),j("design:type",Boolean)],H.prototype,"_hasSetup",void 0),H=z([(0,n.Mo)("pdb-membership-member-organizations"),j("design:paramtypes",[])],H)}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,6553,3629,4808,2743,8255,3712],(()=>(1340,e(e.s=1340)))),e.O())])));
//# sourceMappingURL=all-organizations.js.map