"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/connections/type-add"],{8562:(e,t,s)=>{s.r(t),s.d(t,{PdbConnectionsTypeAdd:()=>i});var n=s(5862),o=s(9662),c=(s(3587),s(8626),s(3683),s(4657),s(7712)),r=s(1354),d=s(1302),p=s(5943),_=function(e,t,s,n){var o,c=arguments.length,r=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,n);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(r=(c<3?o(r):c>3?o(t,s,r):o(t,s))||r);return c>3&&r&&Object.defineProperty(t,s,r),r},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let i=class extends n.LitElement{constructor(){super(),this._hasSetup=!1}connectedCallback(){super.connectedCallback(),(0,c.AppSetup)().then((()=>this._hasSetup=!0))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,r.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(!(0,d.AppSettingsExtraUserAccess)({pageId:p.PAGE__IDS.connection_types,viewType:"Edit"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}return n.html`
      <div class="flex flex-col shadow bg-white my-2 p-2">
        <pdb-connections-types-add class="my-1"></pdb-connections-types-add>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};i.styles=[n.css`
   :host { display: block; }
  `],_([(0,o.property)({type:Object}),a("design:type",Object)],i.prototype,"_property",void 0),_([(0,o.property)({type:Boolean}),a("design:type",Boolean)],i.prototype,"_hasSetup",void 0),i=_([(0,o.customElement)("pdb-connections-type-add"),a("design:paramtypes",[])],i)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_home_dashboard_scss","src_assets_styles_views_attendance_setup_form_scss","src_view_membership_connections_page__id_ts-src_view_membership_connections_types_add_ts-src_-506c4e","shared"],(()=>(8562,e(e.s=8562)))),e.O())])));
//# sourceMappingURL=type-add.js.map