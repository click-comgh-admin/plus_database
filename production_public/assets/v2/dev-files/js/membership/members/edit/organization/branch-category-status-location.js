"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/edit/organization/branch-category-status-location"],{8561:(e,t,n)=>{n.r(t),n.d(t,{GET_MembershipOrganizationUsers:()=>a});var r=n(8485),o=n(7270),i=n(4492),s=n(3600);function a(e=null,t="",n=!1){return a=this,c=void 0,l=function*(){const a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,c=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,d=(0,s.getUserLoginInfoCookie)(),l=n?c:a,p=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+d.token}},!0);try{return new i.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof d?o:new d((function(e){e(o)}))).then(n,r)}o((l=l.apply(a,c||[])).next())}));var a,c,d,l}},4007:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipUpdateOrganizationBranchCategoryLocation:()=>N}),n(3753);var r,o,i=n(5862),s=n(9662),a=(n(5474),n(3283)),c=(n(789),n(6163),n(3313),n(1511),n(2461),n(7052)),d=n(4672),l=n(7684),p=n(7712),h=n(3600),m=n(7725),u=n(8485),b=n(1354),_=n(1302),g=n(9981),y=(n(8763),n(4657),n(3683),n(2761)),f=n(9446),v=(n(2342),n(9280),n(6224)),w=n(675),B=n(72),C=n(8527),S=n(8561),x=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},I=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};let N=class extends i.LitElement{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this.formId=1,this._userLoginInfo=null,this._hasSetup=!1,this._countries=[],this._accountCategories=[],this._branches=[]}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return I(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,p.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,m.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,h.getUserLoginInfoCookie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember(),yield this.getClientBranch(),yield this.getGroupingsMemberCategory(),yield this.getLocationCountry())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,b.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(!(0,_.AppSettingsExtraUserAccess)({pageId:g.PAGE__IDS["edit-organization"],viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=i.html`<h4 class="text-white">Error</h4>`,t=i.html`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${u.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
            label="Organizations Page"></link-button>
        </div>
      `;return i.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return i.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return i.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Organization </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=i.html`<h4 class="text-white">Error</h4>`,t=i.html`
          <div>
            <p class="text-black mb-2">Organization Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${u.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;return i.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=l.Convert.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return i.html`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="mainSectionFormBtn"
              label="Branch/ Category" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="locationSectionFormBtn" label="Location" @click="${this.locationSectionSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainLocationSection(t)}
        </div>
      `}}displayMainSectionBtn(e){e.preventDefault(),this.formId=1,this.mainSectionFormBtn.setAttribute("raised","true"),this.locationSectionFormBtn.removeAttribute("raised")}locationSectionSectionBtn(e){e.preventDefault(),this.formId=2,this.locationSectionFormBtn.setAttribute("raised","true"),this.mainSectionFormBtn.removeAttribute("raised")}getMainLocationSection(e){return 1===this.formId?i.html`
        ${this.mainForm(e)}
      `:i.html`
        ${this.locationForm(e)}
      `}mainForm(e){return i.html`
      <div
        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Organization</h1>
                    <h3 class="h3">Update Contact Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-branch-category memberId="${e.id}" 
        .memberInfo="${[e]}" updateType="organization" .categories="${this._accountCategories}" .branches="${this._branches}">
      </pdb-membership-update-view-branch-category>
    `}locationForm(e){return i.html`
      <div
        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Organization</h1>
                    <h3 class="h3">Update Location Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-location memberId="${e.id}" 
        .memberInfo="${[e]}" updateType="organization" .countries="${this._countries}">
      </pdb-membership-update-view-location>
    `}firstUpdated(){}getUserId(){let e=(0,d.urlQueryParamsGet)("member-id"),t=null!==e?(0,c.base64Decode)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return I(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,S.GET_MembershipOrganizationUsers)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getGroupingsMemberCategory(){return I(this,void 0,void 0,(function*(){const e=yield(0,B.GET_MemberGroupingsMemberCategories)();let t=[{category:"Select Member Category"}];if(null===e)t.push({id:0,category:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>C.Convert.toGroupingsMemberCategoryModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._accountCategories,...t),this._accountCategories=n}))}getClientBranch(){return I(this,void 0,void 0,(function*(){const e=yield(0,v.GET_ClientBranches)();let t=[{name:"Select Branch"}];if(null===e)t.push({id:0,name:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>w.Convert.toClientBranchModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._branches,...t),this._branches=n}))}getLocationCountry(){return I(this,void 0,void 0,(function*(){const e=yield(0,f.GET_LocationCountry)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>y.Convert.toCountryModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._countries,...t),this._countries=n}))}createRenderRoot(){return this}};N.styles=[i.css`
   :host { display: block; }
  `],x([(0,s.query)("#mainSectionFormBtn"),k("design:type","function"==typeof(r=void 0!==a.Button&&a.Button)?r:Object)],N.prototype,"mainSectionFormBtn",void 0),x([(0,s.query)("#locationSectionFormBtn"),k("design:type","function"==typeof(o=void 0!==a.Button&&a.Button)?o:Object)],N.prototype,"locationSectionFormBtn",void 0),x([(0,s.property)({type:Number}),k("design:type",Number)],N.prototype,"memberId",void 0),x([(0,s.property)({type:Array}),k("design:type",Array)],N.prototype,"_activeBranchId",void 0),x([(0,s.property)({type:Number}),k("design:type",Number)],N.prototype,"formId",void 0),x([(0,s.property)({type:Array}),k("design:type",Array)],N.prototype,"_userLoginInfo",void 0),x([(0,s.property)({type:Boolean}),k("design:type",Boolean)],N.prototype,"_hasSetup",void 0),x([(0,s.property)({type:Array}),k("design:type",Array)],N.prototype,"_countries",void 0),x([(0,s.property)({type:Array}),k("design:type",Array)],N.prototype,"_accountCategories",void 0),x([(0,s.property)({type:Array}),k("design:type",Array)],N.prototype,"_branches",void 0),N=x([(0,s.customElement)("pdb-membership-update-organization-branch-category-location"),k("design:paramtypes",[])],N)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_interfaces_members_user_mixed_index_ts","src_assets_styles_views_admin_user_form_scss-src_assets_styles_views_tailwind-output_unaccess-c60780","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_location_constitu-cd9ab3","src_assets_styles_views_admin_user_form_scss-src_addons_functions_url_query_params_index_ts-s-c4090d","shared"],(()=>(4007,e(e.s=4007)))),e.O())])));
//# sourceMappingURL=branch-category-status-location.js.map