"use strict";!function(e,s){"object"==typeof exports&&"object"==typeof module?module.exports=s():"function"==typeof define&&define.amd?define([],s):"object"==typeof exports?exports.webpackNumbers=s():e.webpackNumbers=s()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/connections/member"],{5141:(e,s,t)=>{t.r(s),t.d(s,{PdbConnectionsMembers:()=>p});var n=t(5862),o=t(9662),r=(t(2351),t(3683),t(4657),t(7712)),c=t(1354),_=t(1302),d=t(5943),i=function(e,s,t,n){var o,r=arguments.length,c=r<3?s:null===n?n=Object.getOwnPropertyDescriptor(s,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,s,t,n);else for(var _=e.length-1;_>=0;_--)(o=e[_])&&(c=(r<3?o(c):r>3?o(s,t,c):o(s,t))||c);return r>3&&c&&Object.defineProperty(s,t,c),c},a=function(e,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,s)};let p=class extends n.LitElement{constructor(){super(),this._hasSetup=!1}connectedCallback(){super.connectedCallback(),(0,r.AppSetup)().then((()=>this._hasSetup=!0))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,c.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(!(0,_.AppSettingsExtraUserAccess)({pageId:d.PAGE__IDS.user_connections,viewType:"View"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}return n.html`
      <div class="flex flex-col shadow bg-white my-2 p-2">
        <pdb-connections-members-view class="my-1"></pdb-connections-members-view>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};p.styles=[n.css`
   :host { display: block; }
  `],i([(0,o.property)({type:Boolean}),a("design:type",Boolean)],p.prototype,"_hasSetup",void 0),p=i([(0,o.customElement)("pdb-connections-members"),a("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_connections_members_and_connections_view_members_ts-src_view_membership_c-ed4f66","shared"],(()=>(5141,e(e.s=5141)))),e.O())])));
//# sourceMappingURL=member.js.map