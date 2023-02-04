"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/all-organizations"],{15702:(e,t,o)=>{o.r(t),o.d(t,{GET_MembershipOrganizationUserDownload:()=>l});var s=o(48485),n=o(78276),r=o(14492),i=o(33600);function l(e=""){return t=this,o=void 0,a=function*(){const t=(0,i.getUserLoginInfoCookie)(),o=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/download-excel"+e,l=yield(0,n.http_download)(o,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return l}catch(e){let t=l;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,s){function n(e){try{i(a.next(e))}catch(e){s(e)}}function r(e){try{i(a.throw(e))}catch(e){s(e)}}function i(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(n,r)}i((a=a.apply(t,o||[])).next())}));var t,o,l,a}},44647:(e,t,o)=>{o.r(t),o.d(t,{PdbMembershipMemberOrganizations:()=>N}),o(87255),o(26660);var s,n,r,i=o(85862),l=o(59662),a=o(23283),c=(o(33590),o(40789),o(63313),o(16883),o(30367),o(51511),o(75866),o(92715),o(17725)),d=(o(38281),o(67052)),u=o(48485),p=o(33600),m=o(44672),b=o(52368),_=(o(43629),o(91354)),f=(o(74657),o(43683),o(41302)),h=o(19981),g=o(27712),y=o(77684),v=o(10428),w=o(51594),x=o(2892),S=o(89605),k=o(15702),B=function(e,t,o,s){var n,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},$=function(e,t,o,s){return new(o||(o=Promise))((function(n,r){function i(e){try{a(s.next(e))}catch(e){r(e)}}function l(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,l)}a((s=s.apply(e,t||[])).next())}))};let N=class extends i.LitElement{constructor(){super(),this.memberProfileBaseUrl="/member/organization/member-profile?view=",this._activeBranchId=null,this._groups=[],this._subgroups=[],this.downloadingFile=!1,this._memberType=1,this._hasSetup=!1,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return $(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,g.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,c.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this.filterBox=new b.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGroups(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,_.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(!(0,f.AppSettingsExtraUserAccess)({pageId:h.PAGE__IDS.view,viewType:"View"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1">
        ${this.downloadBtns}
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new b.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}get downloadBtns(){return i.html`
      <div class="flex mb-4">
        <mwc-button icon="download" class="success mr-2" 
          label="Download Excel File" raised @click="${this.downloadMemberExcel}">
        </mwc-button> 
        ${this.downloadingFile?i.html`<mwc-circular-progress indeterminate></mwc-circular-progress>`:i.nothing}
      </div>
    `}get filterForm(){let e=i.html``;const t=(0,m.urlQueryParams)(),o="filter_name",s="filter_identity",n="memberType";let r=null,l=null,a=null,c=null,d=null;for(const e in t){let i=String(t[e]);i=""===i?null:i,e===o&&(r=i),e===s&&(l=i),e===n&&(a=i),"groupId"===e&&(c=i),"subgroupId"===e&&(d=i)}const u=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Name</h4>
          <mwc-textfield type="text" name="${o}" id="${o}" label="Search By Name" 
            value="${null===r?"":r}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,p=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Search By Organization ID</h4>
          <mwc-textfield name="${s}" id="${s}" label="Search By Organization ID"
            value="${null===l?"":l}" outlined required>
          </mwc-textfield>
        </div>
      </div>`,b=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${a}" 
            name="${n}" id="${n}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,_=Number.isNaN(c)?0:Number(c),f=Number.isNaN(d)?0:Number(d),h=this.groupsSubgroups(_,f),g=i.html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="groupId" class="w-full" id="groupId" label="Select Group"
            .options="${h.groups}" outlined required>
          </select-input>
        </div>
      </div>`,y=i.html`
      <div class="col-xl-6 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Sub-Group</h4>
          <select-input name="subgroupId" class="w-full" id="subgroupId" label="Select Sub-Group"
            .options="${h.subgroups}" outlined required>
          </select-input>
        </div>
      </div>`;return e=i.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${u} ${p} ${b}
              <div class="col-md-12 my-2"><hr/></div>
              ${g} ${y}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,e}groupsSubgroups(e,t){let o=[{id:0,name:"Select Group Status",isSelected:"false",selected:!1}],s=[{id:0,name:"Select Sub-Group Status",isSelected:"false",selected:!1}];return this._groups.forEach((t=>{let s=!1,n="false";e===t.id&&(s=!0,n="true");const r={id:t.id,name:t.group,isSelected:n,selected:s};o.includes(r)||o.push(r)})),this._subgroups.forEach((e=>{let o=!1,n="false";t===e.id&&(o=!0,n="true");const r={id:e.id,name:`${e.groupID.group} => ${e.subgroup}`,isSelected:n,selected:o};s.includes(r)||s.push(r)})),{groups:o,subgroups:s}}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t=u.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization?branchId="+e+"&order__by=firstname&datatable_plugin";t+=this.urlQueryString;const o=this.__dataTable(t);let s={};const n=(0,p.getUserLoginInfoCookie)();return s.Authorization="Token "+n.token,i.html`
      <datatables-new .datatable="${o}" .ajaxHeader="${s}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,m.urlQueryParams)(),t="memberType",o="groupId",s="subgroupId";let n={};for(const r in e){let i=String(e[r]);"filter_name"!==r&&"filter_identity"!==r&&r!==t&&r!==o&&r!==s||(n[r]=i,r!==o&&r!==s||"0"===i&&(n[r]=""))}t in n||(n[t]="1");let r=(0,m.urlQueryParamsJoin)(n);return 0===r.length?r:"&"+r}getGroups(){return $(this,void 0,void 0,(function*(){const e=yield(0,x.GET_MemberGroupingsGroups)();let t=[];null===e?t.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>v.Convert.toGroupModel(JSON.stringify(e)))));const o=[];o.push(...this._groups,...t),this._groups=o}))}getSubGroups(){return $(this,void 0,void 0,(function*(){const e=yield(0,S.GET_MemberGroupingsSubGroups)();let t=[];null===e?t.push({id:0,subgroup:"**NOT FOUND**",date:new Date}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>w.Convert.toSubGroupModel(JSON.stringify(e)))));const o=[];o.push(...this._subgroups,...t),this._subgroups=o}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,o,s){s=y.Convert.toMembershipMixedUserModel(JSON.stringify(s));const n=(0,d.base64Encode)(String(s.id),!0);return`<div class="flex items-center whitespace-normal mb-0">\n                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${t.memberProfileBaseUrl}${n}" type="member"\n                  url="${s.logo}" size="16"></user-profile-photo>\n                <p class="ml-1 mb-0">${s.organizationName}</p>\n              </div>\n              <span class="whitespace-normal shadow p-1">\n                <i class="ml-1"><b>ID: </b> ${s.identification}</i>\n              </span>`},orderable:!0},{data:"organizationName",render:function(e,o,s){s=y.Convert.toMembershipMixedUserModel(JSON.stringify(s));const n=(0,d.base64Encode)(String(s.id),!0);return`<div class="flex flex-col md:flex-row items-center whitespace-normal">\n              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"\n                href="${t.memberProfileBaseUrl}${n}" label="Open"></link-button>\n            </div>`},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return $(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}downloadMemberExcel(){return $(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t="?branchId="+e+"&order__by=firstname";t+=this.urlQueryString,this.downloadingFile=!0,yield(0,k.GET_MembershipOrganizationUserDownload)(t),this.downloadingFile=!1}))}createRenderRoot(){return this}};N.styles=[i.css`
   :host { display: block; }
  `],B([(0,l.query)('[filter-section-context="btn"]'),C("design:type","function"==typeof(s=void 0!==a.Button&&a.Button)?s:Object)],N.prototype,"filterSectionContextBtn",void 0),B([(0,l.query)('[filter-section-context="container"]'),C("design:type","function"==typeof(n="undefined"!=typeof Element&&Element)?n:Object)],N.prototype,"filterSectionContextContainer",void 0),B([(0,l.query)('[make-general-posts="submit_filter_form"]'),C("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],N.prototype,"filterSectionContextForm",void 0),B([(0,l.property)({type:String}),C("design:type",String)],N.prototype,"memberProfileBaseUrl",void 0),B([(0,l.property)({type:Array}),C("design:type",Array)],N.prototype,"_activeBranchId",void 0),B([(0,l.property)({type:Array}),C("design:type",Array)],N.prototype,"_groups",void 0),B([(0,l.property)({type:Array}),C("design:type",Array)],N.prototype,"_subgroups",void 0),B([(0,l.property)({type:Boolean}),C("design:type",Boolean)],N.prototype,"downloadingFile",void 0),B([(0,l.property)({type:Number}),C("design:type",Number)],N.prototype,"_memberType",void 0),B([(0,l.property)({type:Boolean}),C("design:type",Boolean)],N.prototype,"_hasSetup",void 0),N=B([(0,l.customElement)("pdb-membership-member-organizations"),C("design:paramtypes",[])],N)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_view_membership_members_select-member-type_index_ts","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_addons_interfaces_members_user_mixed_index_ts","src_addons_interfaces_members_groupings_subgroup_models_index_ts","src_addons_functions_https_download_ts-src_addons_network_members_groupings_group_index_ts-sr-eb610f","shared"],(()=>(44647,e(e.s=44647)))),e.O())])));
//# sourceMappingURL=all-organizations.js.map