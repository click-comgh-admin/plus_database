"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/edit/organization/contact"],{98561:(e,t,r)=>{r.r(t),r.d(t,{GET_MembershipOrganizationUsers:()=>o});var n=r(48485),i=r(87270),s=r(14492),a=r(33600);function o(e=null,t="",r=!1){return o=this,c=void 0,l=function*(){const o=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,d=(0,a.getUserLoginInfoCookie)(),l=r?c:o,m=yield(0,i.http)(l,{method:"GET",headers:{Authorization:"Token "+d.token}},!0);try{return new s.NetWorkCallResponses("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function n(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof d?i:new d((function(e){e(i)}))).then(r,n)}i((l=l.apply(o,c||[])).next())}));var o,c,d,l}},38527:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipUpdateOrganizationContact:()=>S}),r(43753);var n,i,s=r(85862),a=r(59662),o=(r(15474),r(23283)),c=(r(40789),r(66163),r(63313),r(51511),r(37725),r(67052)),d=r(44672),l=r(77684),m=r(27712),p=r(33600),b=r(17725),h=r(48485),u=r(91354),_=r(41302),y=r(29356),v=r(4596),f=r(19981),g=(r(48763),r(74657),r(43683),r(99876),r(17475)),w=r(5707),I=(r(72395),r(6734),r(98561)),x=function(e,t,r,n){var i,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,r,a):i(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function o(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,o)}c((n=n.apply(e,t||[])).next())}))};let S=class extends s.LitElement{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this.formId=1,this._userLoginInfo=null,this.memberContactInfo=null,this.memberContactPrivacy=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,m.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,b.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,p.getUserLoginInfoCookie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember(),yield this.getMemberContactInfo(),yield this.getMemberContactPrivacy())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,u.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(!(0,_.AppSettingsExtraUserAccess)({pageId:f.PAGE__IDS["edit-organization"],viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=s.html`<h4 class="text-white">Error</h4>`,t=s.html`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${h.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
            label="Organizations Page"></link-button>
        </div>
      `;return s.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return s.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return s.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Organization </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=s.html`<h4 class="text-white">Error</h4>`,t=s.html`
          <div>
            <p class="text-black mb-2">Organization Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${h.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;return s.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=l.Convert.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return s.html`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="displayMainSectionBtn"
              label="Main" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="privacySectionSectionBtn" label="Privacy" @click="${this.privacySectionSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainPrivacySection(t)}
        </div>
      `}}displayMainSectionBtn(e){e.preventDefault(),this.formId=1,this.mainSectionFormBtn.setAttribute("raised","true"),this.privacySectionFormBtn.removeAttribute("raised")}privacySectionSectionBtn(e){e.preventDefault(),this.formId=2,this.privacySectionFormBtn.setAttribute("raised","true"),this.mainSectionFormBtn.removeAttribute("raised")}getMainPrivacySection(e){return 1===this.formId?s.html`
        ${this.mainForm(e)}
      `:s.html`
        ${this.privacyForm(e)}
      `}mainForm(e){return s.html`
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
      <pdb-membership-update-view-contact-data memberId="${e.id}" .memberContactInfo="${this.memberContactInfo}"></pdb-membership-update-view-contact-data>
    `}privacyForm(e){return s.html`
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
                    <h3 class="h3">Update Contact Privacy!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-contact-privacy memberId="${e.id}" .memberContactPrivacy="${this.memberContactPrivacy}"></pdb-membership-update-view-contact-privacy>
    `}firstUpdated(){}getUserId(){let e=(0,d.urlQueryParamsGet)("member-id"),t=null!==e?(0,c.base64Decode)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return k(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,I.GET_MembershipOrganizationUsers)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getMemberContactInfo(){return k(this,void 0,void 0,(function*(){const e=yield(0,g.GET_UserContactData)(null,"?memberId="+this.memberId);if(null===e)this.memberContactInfo=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactInfo=t.map((e=>y.Convert.toUserContactModel(JSON.stringify(e))))}}))}getMemberContactPrivacy(){return k(this,void 0,void 0,(function*(){const e=yield(0,w.GET_UserContactPrivacy)(null,"?memberId="+this.memberId);if(null===e)this.memberContactPrivacy=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactPrivacy=t.map((e=>v.Convert.toUserContactPrivacyModel(JSON.stringify(e))))}}))}createRenderRoot(){return this}};S.styles=[s.css`
   :host { display: block; }
  `],x([(0,a.query)("#mainSectionFormBtn"),C("design:type","function"==typeof(n=void 0!==o.Button&&o.Button)?n:Object)],S.prototype,"mainSectionFormBtn",void 0),x([(0,a.query)("#privacySectionFormBtn"),C("design:type","function"==typeof(i=void 0!==o.Button&&o.Button)?i:Object)],S.prototype,"privacySectionFormBtn",void 0),x([(0,a.property)({type:Number}),C("design:type",Number)],S.prototype,"memberId",void 0),x([(0,a.property)({type:Array}),C("design:type",Array)],S.prototype,"_activeBranchId",void 0),x([(0,a.property)({type:Number}),C("design:type",Number)],S.prototype,"formId",void 0),x([(0,a.property)({type:Array}),C("design:type",Array)],S.prototype,"_userLoginInfo",void 0),x([(0,a.property)({type:Array}),C("design:type",Array)],S.prototype,"memberContactInfo",void 0),x([(0,a.property)({type:Array}),C("design:type",Array)],S.prototype,"memberContactPrivacy",void 0),x([(0,a.property)({type:Boolean}),C("design:type",Boolean)],S.prototype,"_hasSetup",void 0),S=x([(0,a.customElement)("pdb-membership-update-organization-contact"),C("design:paramtypes",[])],S)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_mixe-07bf9a","src_assets_styles_views_admin_user_form_scss-src_assets_styles_views_tailwind-output_unaccess-c60780","src_assets_styles_views_admin_user_form_scss-src_addons_functions_url_query_params_index_ts-s-1b0b55","src_addons_interfaces_members_user_contact_index_ts-src_addons_interfaces_members_user_contac-515a92","src_view_membership_members_edit_pages_contacts_data_ts-src_view_membership_members_edit_page-0c8dba","shared"],(()=>(38527,e(e.s=38527)))),e.O())])));
//# sourceMappingURL=contact.js.map