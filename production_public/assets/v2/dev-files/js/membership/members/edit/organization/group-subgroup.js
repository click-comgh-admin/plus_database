"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/edit/organization/group-subgroup"],{98561:(e,t,r)=>{r.r(t),r.d(t,{GET_MembershipOrganizationUsers:()=>i});var s=r(48485),n=r(87270),a=r(14492),o=r(33600);function i(e=null,t="",r=!1){return i=this,c=void 0,d=function*(){const i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,c=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,l=(0,o.getUserLoginInfoCookie)(),d=r?c:i,p=yield(0,n.http)(d,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new a.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new a.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{n(d.next(e))}catch(e){t(e)}}function s(e){try{n(d.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,s)}n((d=d.apply(i,c||[])).next())}));var i,c,l,d}},90859:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipUpdateOrganizationGroupSubgroup:()=>v}),r(43753);var s=r(85862),n=r(59662),a=(r(51511),r(67052)),o=r(44672),i=r(77684),c=r(27712),l=r(33600),d=r(17725),p=r(48485),u=r(91354),m=r(41302),b=r(19981),_=(r(48763),r(74657),r(43683),r(29697),r(98561)),h=function(e,t,r,s){var n,a=arguments.length,o=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,r,s){return new(r||(r=Promise))((function(n,a){function o(e){try{c(s.next(e))}catch(e){a(e)}}function i(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}c((s=s.apply(e,t||[])).next())}))};let v=class extends s.LitElement{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this._userLoginInfo=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,c.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,l.getUserLoginInfoCookie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,u.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(!(0,m.AppSettingsExtraUserAccess)({pageId:b.PAGE__IDS["edit-organization"],viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=s.html`<h4 class="text-white">Error</h4>`,t=s.html`
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
      `}}firstUpdated(){}getUserId(){let e=(0,o.urlQueryParamsGet)("member-id"),t=null!==e?(0,a.base64Decode)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return g(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,_.GET_MembershipOrganizationUsers)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}createRenderRoot(){return this}};v.styles=[s.css`
   :host { display: block; }
  `],h([(0,n.property)({type:Number}),f("design:type",Number)],v.prototype,"memberId",void 0),h([(0,n.property)({type:Array}),f("design:type",Array)],v.prototype,"_activeBranchId",void 0),h([(0,n.property)({type:Array}),f("design:type",Array)],v.prototype,"_userLoginInfo",void 0),h([(0,n.property)({type:Boolean}),f("design:type",Boolean)],v.prototype,"_hasSetup",void 0),v=h([(0,n.customElement)("pdb-membership-update-organization-group-subgroup"),f("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.lit-element","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-981a93","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_mixe-07bf9a","src_assets_styles_views_admin_user_form_scss-src_assets_styles_views_tailwind-output_unaccess-c60780","src_addons_interfaces_members_groupings_subgroup_models_index_ts","src_addons_functions_url_query_params_index_ts-src_addons_interfaces_members_groupings_group_-008a8f","src_assets_styles_views_admin_user_form_scss-src_view_membership_members_edit_pages_group_sub-a47fc0","shared"],(()=>(90859,e(e.s=90859)))),e.O())])));
//# sourceMappingURL=group-subgroup.js.map