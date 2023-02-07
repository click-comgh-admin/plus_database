"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9114],{8932:(e,t,o)=>{o.r(t),o.d(t,{PdbMembershipMemberOrganizations:()=>N});var i,n,r,s=o(9392),l=o(1936),c=o(5248),a=(o(1239),o(9261),o(3313),o(6883),o(6811),o(5866),o(2715),o(2004)),d=(o(8281),o(7052)),u=o(771),p=o(3600),m=o(4672),b=o(2368),f=(o(3629),o(2145)),h=(o(4657),o(3683),o(1302)),y=o(9981),g=o(9665),v=o(7684),_=o(428),w=o(1594),x=o(2892),S=o(9605),k=o(8276),B=o(596),$=function(e,t,o,i){var n,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,l)}c((i=i.apply(e,t||[])).next())}))};let N=class extends s.oi{constructor(){super(),this.memberProfileBaseUrl="/member/organization/member-profile?view=",this._activeBranchId=null,this._groups=[],this._subgroups=[],this.downloadingFile=!1,this._memberType=1,this._hasSetup=!1,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,g.f)().then((()=>this._hasSetup=!0));const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],this.filterBox=new b.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGroups(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,f.H)())||void 0===e?void 0:e.expiration_date.expired)return s.dy`<account-expired-component></account-expired-component>`;if(!(0,h.H)({pageId:y.W.view,viewType:"View"},!1))return s.dy`<no-page-entry-component></no-page-entry-component>`}return s.dy`
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
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new b.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}get downloadBtns(){return s.dy`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadMemberExcel}">
        </mwc-button> 
        ${this.downloadingFile?s.dy`<mwc-circular-progress indeterminate></mwc-circular-progress>`:s.Ld}
      </div>
    `}get filterForm(){let e=s.dy``;const t=(0,m.O1)(),o="filter_name",i="filter_identity",n="memberType";let r=null,l=null,c=null,a=null,d=null;for(const e in t){let s=String(t[e]);s=""===s?null:s,e===o&&(r=s),e===i&&(l=s),e===n&&(c=s),"groupId"===e&&(a=s),"subgroupId"===e&&(d=s)}const u=s.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name</h4>
          <mwc-textfield type="text" name="${o}" id="${o}" label="Search By Name" 
            value="${null===r?"":r}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,p=s.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Organization ID</h4>
          <mwc-textfield name="${i}" id="${i}" label="Search By Organization ID"
            value="${null===l?"":l}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,b=s.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${c}" 
            name="${n}" id="${n}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,f=Number.isNaN(a)?0:Number(a),h=Number.isNaN(d)?0:Number(d),y=this.groupsSubgroups(f,h),g=s.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="groupId" class="w-full" id="groupId" label="Select Group"
            .options="${y.groups}" outlined required>
          </select-input>
        </div>
      </div>`,v=s.dy`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="subgroupId" class="w-full" id="subgroupId" label="Select Sub-Group"
            .options="${y.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`;return e=s.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${u} ${p} ${b}
              <div class="col-md-12 my-2"><hr/></div>
              ${g} ${v}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}groupsSubgroups(e,t){let o=[{id:0,name:"Select Group Status",isSelected:"false",selected:!1}],i=[{id:0,name:"Select Sub-Group Status",isSelected:"false",selected:!1}];return this._groups.forEach((t=>{let i=!1,n="false";e===t.id&&(i=!0,n="true");const r={id:t.id,name:t.group,isSelected:n,selected:i};o.includes(r)||o.push(r)})),this._subgroups.forEach((e=>{let o=!1,n="false";t===e.id&&(o=!0,n="true");const r={id:e.id,name:`${e.groupID.group} => ${e.subgroup}`,isSelected:n,selected:o};i.includes(r)||i.push(r)})),{groups:o,subgroups:i}}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t=u.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization?branchId="+e+"&order__by=firstname&datatable_plugin";t+=this.urlQueryString;const o=this.__dataTable(t);let i={};const n=(0,p.Ie)();return i.Authorization="Token "+n.token,s.dy`
      <datatables-new .datatable="${o}" .ajaxHeader="${i}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,m.O1)(),t="memberType",o="groupId",i="subgroupId";let n={};for(const r in e){let s=String(e[r]);"filter_name"!==r&&"filter_identity"!==r&&r!==t&&r!==o&&r!==i||(n[r]=s,r!==o&&r!==i||"0"===s&&(n[r]=""))}t in n||(n[t]="1");let r=(0,m.W3)(n);return 0===r.length?r:"&"+r}getGroups(){return I(this,void 0,void 0,(function*(){const e=yield(0,x.c)();let t=[];if(null===e)t.push({id:0,group:"**NOT FOUND**",date:new Date});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>_.e.toGroupModel(JSON.stringify(e))));t=o}const o=[];o.push(...this._groups,...t),this._groups=o}))}getSubGroups(){return I(this,void 0,void 0,(function*(){const e=yield(0,S.U)();let t=[];if(null===e)t.push({id:0,subgroup:"**NOT FOUND**",date:new Date});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>w.e.toSubGroupModel(JSON.stringify(e))));t=o}const o=[];o.push(...this._subgroups,...t),this._subgroups=o}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,o,i){i=v.e.toMembershipMixedUserModel(JSON.stringify(i));const n=(0,d.h)(String(i.id),!0);return`<div class="flex items-center whitespace-normal mb-0">\n                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${t.memberProfileBaseUrl}${n}" type="member"\n                  url="${i.logo}" size="16"></user-profile-photo>\n                <p class="ml-1 mb-0">${i.organizationName}</p>\n              </div>\n              <span class="whitespace-normal shadow p-1">\n                <i class="ml-1"><b>ID: </b> ${i.identification}</i>\n              </span>`},orderable:!0},{data:"organizationName",render:function(e,o,i){i=v.e.toMembershipMixedUserModel(JSON.stringify(i));const n=(0,d.h)(String(i.id),!0);return`<div class="flex flex-col md:flex-row items-center whitespace-normal">\n              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"\n                href="${t.memberProfileBaseUrl}${n}" label="Open"></link-button>\n            </div>`},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return I(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}downloadMemberExcel(){return I(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t="?branchId="+e+"&order__by=firstname";t+=this.urlQueryString,this.downloadingFile=!0,yield function(e=""){return t=this,o=void 0,n=function*(){const t=(0,p.Ie)(),o=u.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/download-excel"+e,i=yield(0,k.w)(o,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return i}catch(e){let t=i;return t.error=e,new B.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,r){function s(e){try{c(n.next(e))}catch(e){r(e)}}function l(e){try{c(n.throw(e))}catch(e){r(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(s,l)}c((n=n.apply(t,o||[])).next())}));var t,o,i,n}(t),this.downloadingFile=!1}))}createRenderRoot(){return this}};N.styles=[s.iv`
   :host { display: block; }
  `],$([(0,l.IO)('[filter-section-context="btn"]'),C("design:type","function"==typeof(i=void 0!==c.z&&c.z)?i:Object)],N.prototype,"filterSectionContextBtn",void 0),$([(0,l.IO)('[filter-section-context="container"]'),C("design:type","function"==typeof(n="undefined"!=typeof Element&&Element)?n:Object)],N.prototype,"filterSectionContextContainer",void 0),$([(0,l.IO)('[make-general-posts="submit_filter_form"]'),C("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],N.prototype,"filterSectionContextForm",void 0),$([(0,l.Cb)({type:String}),C("design:type",String)],N.prototype,"memberProfileBaseUrl",void 0),$([(0,l.Cb)({type:Array}),C("design:type",Array)],N.prototype,"_activeBranchId",void 0),$([(0,l.Cb)({type:Array}),C("design:type",Array)],N.prototype,"_groups",void 0),$([(0,l.Cb)({type:Array}),C("design:type",Array)],N.prototype,"_subgroups",void 0),$([(0,l.Cb)({type:Boolean}),C("design:type",Boolean)],N.prototype,"downloadingFile",void 0),$([(0,l.Cb)({type:Number}),C("design:type",Number)],N.prototype,"_memberType",void 0),$([(0,l.Cb)({type:Boolean}),C("design:type",Boolean)],N.prototype,"_hasSetup",void 0),N=$([(0,l.Mo)("pdb-membership-member-organizations"),C("design:paramtypes",[])],N)}},e=>(e.O(0,[2185,5744,8820,1828,316,836,5291,6236,6069,6553,3629,8491,6542,3712],(()=>(8932,e(e.s=8932)))),e.O())])));
//# sourceMappingURL=all-organizations.js.map