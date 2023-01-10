"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["admin/user/all"],{3029:(e,t,n)=>{n.r(t)},2869:(e,t,n)=>{function r(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericGenderInfo_S:()=>r})},7553:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericGender:()=>l});var r=n(8485),i=n(7270),s=n(4492),o=n(3600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,o.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),l=yield(0,i.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,r){function i(e){try{o(c.next(e))}catch(e){r(e)}}function s(e){try{o(c.throw(e))}catch(e){r(e)}}function o(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}o((c=c.apply(t,n||[])).next())}));var t,n,l,c}},8281:(e,t,n)=>{n.r(t),n.d(t,{UserProfilePhoto:()=>c});var r=n(8485),i=n(5862),s=n(9662),o=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends i.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return i.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[i.css`
   :host { display: block; }
  `],o([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"url",void 0),o([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"type",void 0),o([(0,s.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),o([(0,s.property)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),o([(0,s.property)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=o([(0,s.customElement)("user-profile-photo"),l("design:paramtypes",[])],c)},5210:(e,t,n)=>{n.r(t),n.d(t,{PdbAdminUserAll:()=>k}),n(3029);var r,i,s,o=n(5862),l=n(9662),c=n(3283),a=(n(3590),n(789),n(3313),n(6883),n(367),n(2715),n(7725)),d=(n(8281),n(7052)),u=n(8485),p=n(3600),f=n(4672),m=n(7553),h=n(2869),_=n(2368),b=n(7712),y=n(1354),v=n(1302),g=n(1710),w=(n(3683),n(4657),function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o}),x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((r=r.apply(e,t||[])).next())}))};let k=class extends o.LitElement{constructor(){super(),this.memberProfileBaseUrl="/admin/user/view-account?user-id=",this.memberProfileAddBaseUrl="/admin/user/add-account",this.memberProfileEditBaseUrl="/admin/user/update-account?user-id=",this._genders=[],this._activeBranchId=null,this.__clientUsers=null,this._hasSetup=!1}set _clientUsers(e){this.__clientUsers=e,this.requestUpdate()}get _clientUsers(){return this.__clientUsers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return S(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,b.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,a.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this.filterBox=new _.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGenders()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,y.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return o.html`<account-expired-component></account-expired-component>`;if(!(0,v.AppSettingsExtraUserAccess)({pageId:g.PAGE__IDS.view,viewType:"View"},!1))return o.html`<no-page-entry-component></no-page-entry-component>`}return o.html`
      <div class="shadow bg-white p-2 my-1">
        <span class="flex flex-row md:flex-col w-100"></span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}
        </div>
      </div>
      <div class="shadow bg-white p-2 block mt-2 mb-3">
        <div class="row my-1">
          <div class="col-xl-4 col-md-6"></div>
          <div class="col-xl-4 col-md-6">
            <div class="flex flex-col items-end">
              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                href="${this.memberProfileAddBaseUrl}" label="Add Client User"></link-button>
            </div>
          </div>
        </div>
        <hr/>
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new _.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}})}get filterForm(){let e=o.html``;const t=(0,f.urlQueryParams)(),n="filter_gender",r="filter_name";let i=null,s=null;for(const e in t){let o=String(t[e]);o=""===o?null:o,e===n&&(i=o),e===r&&(s=o)}const l=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Search By Name
          <mwc-textfield type="text" name="${r}" id="${r}" label="Search By Name" 
            value="${null===s?"":s}" outlined required>
          </mwc-textfield>
        </div>
      </div>
    `,c=o.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">Gender
          <mwc-select name="${n}" id="${n}" label="Select Gender" outlined required>
            ${this._genders.map((e=>null===i?o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:Number(i)===e.id?o.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          </mwc-select>
        </div>
      </div>
    `;return e=o.html`
      <form method="get" class="form " make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${l} ${c}
              <div class="col-xl-8 col-md-12">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    `,e}get __tableHeaders(){return[{title:"Member(s)"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member(s)"},{title:"Action"}]}get table(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);let t="";t=u.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user?branchId="+e+"&order__by=firstname&datatable_plugin",t+=this.urlQueryString;const n=this.__dataTable(t);let r={};const i=(0,p.getUserLoginInfoCookie)();return r.Authorization="Token "+i.token,o.html`
      <datatables-new .datatable="${n}" .ajaxHeader="${r}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}get urlQueryString(){const e=(0,f.urlQueryParams)();let t={};for(const n in e){let r=String(e[n]);"filter_gender"!==n&&"filter_name"!==n||(t[n]=r)}let n=(0,f.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}getGenders(){return S(this,void 0,void 0,(function*(){const e=yield(0,m.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,h.GenericGenderInfo_S)(e))));const n=[];n.push(...this._genders,...t),this._genders=n}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:function(e,n,r){const i=(0,d.base64Encode)(String(r.id),!0);return`<div class="flex items-center whitespace-normal">\n                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${t.memberProfileBaseUrl}${i}" type="client"\n                  url="${r.profilePicture}" size="16"></user-profile-photo>\n                <p class="ml-1">${r.firstname} ${r.surname}</p>\n              </div>`},orderable:!0},{data:"firstname",render:function(e,n,r){const i=(0,d.base64Encode)(String(r.id),!0);return`<div class="flex flex-col md:flex-row items-center whitespace-normal">\n              <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"\n                href="${t.memberProfileBaseUrl}${i}" label="Open"></link-button>\n              <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"\n                href="${t.memberProfileEditBaseUrl}${i}" label="Edit"></link-button>\n            </div>`},orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return S(this,void 0,void 0,(function*(){e.aoData}))},responsive:!0,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}createRenderRoot(){return this}};k.styles=[o.css`
   :host { display: block; }
  `],w([(0,l.query)('[filter-section-context="btn"]'),x("design:type","function"==typeof(r=void 0!==c.Button&&c.Button)?r:Object)],k.prototype,"filterSectionContextBtn",void 0),w([(0,l.query)('[filter-section-context="container"]'),x("design:type","function"==typeof(i="undefined"!=typeof Element&&Element)?i:Object)],k.prototype,"filterSectionContextContainer",void 0),w([(0,l.query)('[make-general-posts="submit_filter_form"]'),x("design:type","function"==typeof(s="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?s:Object)],k.prototype,"filterSectionContextForm",void 0),w([(0,l.property)({type:String}),x("design:type",String)],k.prototype,"memberProfileBaseUrl",void 0),w([(0,l.property)({type:String}),x("design:type",String)],k.prototype,"memberProfileAddBaseUrl",void 0),w([(0,l.property)({type:String}),x("design:type",String)],k.prototype,"memberProfileEditBaseUrl",void 0),w([(0,l.property)({type:Array}),x("design:type",Array)],k.prototype,"_genders",void 0),w([(0,l.property)({type:Array}),x("design:type",Array)],k.prototype,"_activeBranchId",void 0),w([(0,l.property)({type:Boolean}),x("design:type",Boolean)],k.prototype,"_hasSetup",void 0),k=w([(0,l.customElement)("pdb-admin-user-all"),x("design:paramtypes",[])],k)},1710:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>r});const r={view:25,create:26,update:27}}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_assets_styles_views_admin_user_main_scss-src_assets_styles_views_tailwind-output_unaccess-123ac5","shared"],(()=>(5210,e(e.s=5210)))),e.O())])));
//# sourceMappingURL=all.js.map