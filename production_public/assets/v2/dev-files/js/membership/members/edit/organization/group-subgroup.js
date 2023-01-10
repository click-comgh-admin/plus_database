"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/edit/organization/group-subgroup"],{8561:(e,t,r)=>{r.r(t),r.d(t,{GET_MembershipOrganizationUsers:()=>i});var s=r(8485),n=r(7270),o=r(4492),a=r(3600);function i(e=null,t="",r=!1){return i=this,c=void 0,l=function*(){const i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,c=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,d=(0,a.getUserLoginInfoCookie)(),l=r?c:i,p=yield(0,n.http)(l,{method:"GET",headers:{Authorization:"Token "+d.token}},!0);try{return new o.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{n(l.next(e))}catch(e){t(e)}}function s(e){try{n(l.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof d?n:new d((function(e){e(n)}))).then(r,s)}n((l=l.apply(i,c||[])).next())}));var i,c,d,l}},859:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipUpdateOrganizationGroupSubgroup:()=>v}),r(3753);var s=r(5862),n=r(9662),o=(r(1511),r(7052)),a=r(4672),i=r(7684),c=r(7712),d=r(3600),l=r(7725),p=r(8485),u=r(1354),m=r(1302),_=r(9981),b=(r(8763),r(4657),r(3683),r(9697),r(8561)),h=function(e,t,r,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(a=(o<3?n(a):o>3?n(t,r,a):n(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,r,s){return new(r||(r=Promise))((function(n,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))};let v=class extends s.LitElement{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this._userLoginInfo=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,c.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,l.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,d.getUserLoginInfoCookie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,u.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(!(0,m.AppSettingsExtraUserAccess)({pageId:_.PAGE__IDS["edit-organization"],viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=s.html`<h4 class="text-white">Error</h4>`,t=s.html`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${p.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
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
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${p.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;return s.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=i.Convert.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return s.html`
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
                      <h3 class="h3">Update Group/ Sub-Group!</h3>
                    </label>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
        <pdb-membership-update-view-group-subgroup memberId="${t.id}"></pdb-membership-update-view-group-subgroup>
      `}}firstUpdated(){}getUserId(){let e=(0,a.urlQueryParamsGet)("member-id"),t=null!==e?(0,o.base64Decode)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return g(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.GET_MembershipOrganizationUsers)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}createRenderRoot(){return this}};v.styles=[s.css`
   :host { display: block; }
  `],h([(0,n.property)({type:Number}),f("design:type",Number)],v.prototype,"memberId",void 0),h([(0,n.property)({type:Array}),f("design:type",Array)],v.prototype,"_activeBranchId",void 0),h([(0,n.property)({type:Array}),f("design:type",Array)],v.prototype,"_userLoginInfo",void 0),h([(0,n.property)({type:Boolean}),f("design:type",Boolean)],v.prototype,"_hasSetup",void 0),v=h([(0,n.customElement)("pdb-membership-update-organization-group-subgroup"),f("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_addons_interfaces_members_user_mixed_index_ts","src_assets_styles_views_admin_user_form_scss-src_assets_styles_views_tailwind-output_unaccess-c60780","src_addons_interfaces_members_groupings_subgroup_models_index_ts","src_addons_functions_https_https_swal_error_format_ts-src_addons_functions_url_query_params_i-209432","src_assets_styles_views_admin_user_form_scss-src_view_membership_members_edit_pages_group_sub-a47fc0","shared"],(()=>(859,e(e.s=859)))),e.O())])));
//# sourceMappingURL=group-subgroup.js.map