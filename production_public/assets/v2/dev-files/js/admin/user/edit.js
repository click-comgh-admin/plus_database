"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["admin/user/edit"],{8034:(e,t,s)=>{s.r(t)},8207:(e,t,s)=>{s.r(t)},4672:(e,t,s)=>{s.r(t),s.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>r,urlQueryParamsGetAll:()=>i,urlQueryParamsJoin:()=>o});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),s=Object.fromEntries(t.entries());let n=null;for(const t in s)t===e&&(n=s[t]);return n},i=e=>new URLSearchParams(window.location.search).getAll(e),o=e=>{let t="",s=0;for(const n in e)s+=1,t+=`${s>1?"&":""}${n}=${e[n]}`;return t}},3464:(e,t,s)=>{function n(e){return{id:Number(e.id),page:e.page}}s.r(t),s.d(t,{ClientPageAccess_S:()=>n})},2583:(e,t,s)=>{s.r(t),s.d(t,{ClientUserAccess_S:()=>r});var n=s(3464);function r(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,n.ClientPageAccess_S)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},6262:(e,t,s)=>{s.r(t),s.d(t,{GET_ClientUsers:()=>c});var n=s(8485),r=s(7270),i=s(4492),o=s(3600);function c(e=null,t=""){return s=this,c=void 0,l=function*(){const s=(0,o.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,a=yield(0,r.http)(c,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new i.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{i(l.next(e))}catch(e){t(e)}}function r(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var s;t.done?e(t.value):(s=t.value,s instanceof a?s:new a((function(e){e(s)}))).then(n,r)}i((l=l.apply(s,c||[])).next())}));var s,c,a,l}},8763:(e,t,s)=>{s.r(t),s.d(t,{AlertCard:()=>c}),s(8034);var n=s(5862),r=s(9662),i=(s(8207),function(e,t,s,n){var r,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(o=(i<3?r(o):i>3?r(t,s,o):r(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o}),o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends n.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?n.html`
        <div class="bg-white alert-box p-0 pr-2 mb-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4 placeholder--load-wrapper">
              <div class="p-3 placeholder--activity">
                <i class="p-2"></i>
              </div>
            </div>
            <div class="ml-2 flex-1 placeholder--load-wrapper">
              <div class="placeholder--activity p-2"></div>
            </div>
          </div>
        </div>
      `:n.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?n.html`<header class="header">${this.header}</header>`:n.nothing}
              ${null!==this.content?n.html`<main class="main">${this.content}</main>`:n.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?n.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?n.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?n.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?n.html`<mwc-icon>warning</mwc-icon>`:this.danger?n.html`<mwc-icon>error_outline</mwc-icon>`:this.default?n.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?n.html`<mwc-icon>star_outline</mwc-icon>`:n.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[n.css`
   :host { display: block; }
  `],i([(0,r.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"loading",void 0),i([(0,r.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"success",void 0),i([(0,r.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"info",void 0),i([(0,r.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"warning",void 0),i([(0,r.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"danger",void 0),i([(0,r.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"default",void 0),i([(0,r.property)({type:Boolean}),o("design:type",Boolean)],c.prototype,"primary",void 0),i([(0,r.property)({type:String}),o("design:type",String)],c.prototype,"extra_class",void 0),c=i([(0,r.customElement)("alert-card"),o("design:paramtypes",[])],c)},5884:(e,t,s)=>{s.r(t),s.d(t,{PdbAdminUserEditForm:()=>b});var n=s(5862),r=s(9662),i=s(7725),o=s(7052),c=s(4672),a=s(6262),l=(s(1511),s(2715),s(8763),s(8153),s(2583)),d=s(2506),p=s(2229),u=s(3600),h=(s(3683),s(4657),s(7712)),_=s(1354),g=s(1302),m=s(1710),y=function(e,t,s,n){var r,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(o=(i<3?r(o):i>3?r(t,s,o):r(t,s))||o);return i>3&&o&&Object.defineProperty(t,s,o),o},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,s,n){return new(s||(s=Promise))((function(r,i){function o(e){try{a(n.next(e))}catch(e){i(e)}}function c(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,c)}a((n=n.apply(e,t||[])).next())}))};let b=class extends n.LitElement{constructor(){super(),this.userId=0,this.loggedUserId=0,this.editAccess=!1,this.page_type="mine",this._activeBranchId=null,this._userLoginInfo=null,this.__clientUser=null,this.__clientUserAccess=null,this._hasSetup=!1}set _clientUser(e){this.__clientUser=e,this.requestUpdate()}get _clientUser(){return this.__clientUser}set _clientUserAccess(e){this.__clientUserAccess=e,this.requestUpdate()}get _clientUserAccess(){return this.__clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,h.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,u.getUserLoginInfoCookie)()],"mine"===this.page_type&&(yield this.getLoggedUserAccess()),this.getUserId(),0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this._clientUser.success&&("not-mine"===this.page_type&&(yield this.getLoggedUserAccess()),yield this.getClientUserAccess(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,_.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(!(0,g.AppSettingsExtraUserAccess)({pageId:m.PAGE__IDS.update,viewType:"Both"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=n.html`<h4 class="text-white">Error</h4>`,t=n.html`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;return n.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}return null===this._clientUser?n.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `:void 0===this._clientUser?n.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Schedule </span>: undefined error</h4>
            </div>
          </div>
        `:n.html`
        <pdb-admin-user-form edit="true" page_type="${this.page_type}" ?editaccess="${this.editAccess}" .clientUser="${this._clientUser}"
          .clientUserAccess="${this._clientUserAccess}">
        </pdb-admin-user-form>
      `}firstUpdated(){}getUserId(){if("mine"===this.page_type)this.userId=this.loggedUserId;else{let e=(0,c.urlQueryParamsGet)("user-id"),t=null!==e?(0,o.base64Decode)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}}getClientUser(){return v(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,a.GET_ClientUsers)(this.userId,"?branchId="+e);this._clientUser=null===t?void 0:t.response}))}getClientUserAccess(){return v(this,void 0,void 0,(function*(){const e=yield(0,d.GET_ClientUserAccess)(null,"?userId="+this.userId);if(null===e)this._clientUserAccess=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>p.Convert.toClientUserPageAccessModel(JSON.stringify(e)))):e.response.data=[p.Convert.toClientUserPageAccessModel(JSON.stringify(t))],this._clientUserAccess=e.response}}))}getLoggedUserAccess(){return v(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,d.GET_ClientUserAccess)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,l.ClientUserAccess_S)(e)).page.id&&(this.editAccess=!0)}))}}))}createRenderRoot(){return this}};b.styles=[n.css`
   :host { display: block; }
  `],y([(0,r.property)({type:Number}),f("design:type",Number)],b.prototype,"userId",void 0),y([(0,r.property)({type:Number}),f("design:type",Number)],b.prototype,"loggedUserId",void 0),y([(0,r.property)({type:Boolean}),f("design:type",Boolean)],b.prototype,"editAccess",void 0),y([(0,r.property)({type:String}),f("design:type",String)],b.prototype,"page_type",void 0),y([(0,r.property)({type:Array}),f("design:type",Array)],b.prototype,"_activeBranchId",void 0),y([(0,r.property)({type:Array}),f("design:type",Array)],b.prototype,"_userLoginInfo",void 0),y([(0,r.property)({type:Boolean}),f("design:type",Boolean)],b.prototype,"_hasSetup",void 0),b=y([(0,r.customElement)("pdb-admin-user-edit-form"),f("design:paramtypes",[])],b)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_admin_user_form_scss-src_assets_styles_views_tailwind-output_unaccess-c60780","src_addons_functions_https_https_swal_error_format_ts-src_addons_network_clients_users_page_a-554995","src_view_admin_user_form_index_ts","shared"],(()=>(5884,e(e.s=5884)))),e.O())])));
//# sourceMappingURL=edit.js.map