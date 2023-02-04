!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.webpackNumbers=e():t.webpackNumbers=e()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/access_restriction/select_restriction"],{99493:(t,e,s)=>{"use strict";s.r(e)},26660:(t,e,s)=>{"use strict";s.r(e)},30367:()=>{},96490:(t,e,s)=>{"use strict";s.r(e),s.d(e,{GET_MembershipAccessRestrictions:()=>o});var r=s(48485),a=s(87270),i=s(14492),n=s(33600);function o(t=null,e=""){return s=this,o=void 0,l=function*(){const s=(0,n.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/access/restriction"+(null===t?"":"/"+t)+e,c=yield(0,a.http)(o,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new i.NetWorkCallResponses("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function r(t){try{i(l.next(t))}catch(t){e(t)}}function a(t){try{i(l.throw(t))}catch(t){e(t)}}function i(e){var s;e.done?t(e.value):(s=e.value,s instanceof c?s:new c((function(t){t(s)}))).then(r,a)}i((l=l.apply(s,o||[])).next())}));var s,o,c,l}},16883:(t,e,s)=>{"use strict";s.r(e),s.d(e,{_DATATABLES_:()=>c});var r,a=s(85862),i=s(59662),n=(s(30367),s(99493),function(t,e,s,r){var a,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(i<3?a(n):i>3?a(e,s,n):a(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n}),o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends a.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.html`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return a.html`
      ${this.dt_head.map((t=>a.html`<th>${t.title}</th>`))}
    `}tbody(){return a.html`
      ${this.dt_body.map((t=>a.html`<tr>${t.map((t=>a.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return a.html`
    ${this.dt_foot.map((t=>a.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const s=this.ajaxHeader[t];e[t]=s}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[a.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],n([(0,i.property)({type:Number}),o("design:type",Number)],c.prototype,"randomID1",void 0),n([(0,i.property)({type:Number}),o("design:type",Number)],c.prototype,"randomID2",void 0),n([(0,i.property)({type:String}),o("design:type",String)],c.prototype,"ID",void 0),n([(0,i.property)({type:Object}),o("design:type","function"==typeof(r="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?r:Object)],c.prototype,"datatable",void 0),n([(0,i.property)({type:Array}),o("design:type",Array)],c.prototype,"dt_head",void 0),n([(0,i.property)({type:Array}),o("design:type",Array)],c.prototype,"dt_foot",void 0),n([(0,i.property)({type:Array}),o("design:type",Array)],c.prototype,"dt_body",void 0),n([(0,i.property)(),o("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=n([(0,i.customElement)("datatables-new"),o("design:paramtypes",[])],c)},88077:(t,e,s)=>{"use strict";s.r(e),s.d(e,{PAGE__IDS:()=>r});const r={view:55}},78885:(t,e,s)=>{"use strict";s.r(e),s.d(e,{MembershipAccessRestrictionSelectRestriction:()=>_}),s(87255),s(26660);var r=s(85862),a=s(59662),i=(s(23283),s(16883),s(30367),s(51511),s(92715),s(17725)),n=s(67052),o=s(96490),c=(s(43683),s(74657),s(27712)),l=s(91354),d=s(41302),p=s(88077),h=function(t,e,s,r){var a,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(i<3?a(n):i>3?a(e,s,n):a(e,s))||n);return i>3&&n&&Object.defineProperty(e,s,n),n},u=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},b=function(t,e,s,r){return new(s||(s=Promise))((function(a,i){function n(t){try{c(r.next(t))}catch(t){i(t)}}function o(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,o)}c((r=r.apply(t,e||[])).next())}))};let _=class extends r.LitElement{constructor(){super(),this.restrictionUsersBaseUrl="/member/access-restriction/user-restriction?view-restriction=",this.restrictionUpdateBaseUrl="/member/access-restriction/update-user-restriction?view-restriction=",this._activeBranchId=null,this.__restrictions=null,this._hasSetup=!1}set _restrictions(t){this.__restrictions=t,this.requestUpdate()}get _restrictions(){return this.__restrictions}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return b(this,void 0,void 0,(function*(){t.connectedCallback.call(this),(0,c.AppSetup)().then((()=>this._hasSetup=!0));const e=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===e?null:[e],yield this.getMembers()}))}disconnectedCallback(){}render(){var t;if(this._hasSetup){if(null===(t=(0,l.getAppSettingsExtraSettings)())||void 0===t?void 0:t.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(!(0,d.AppSettingsExtraUserAccess)({pageId:p.PAGE__IDS.view,viewType:"Both"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}return null===this._restrictions?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._restrictions?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:r.html`
      ${this.table}
    `}get table(){return r.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>#</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Member(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <mwc-icon>tune</mwc-icon>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){const t=this._restrictions.data;return Array.isArray(t)?t.map((t=>{const e=(0,n.base64Encode)(String(t.id),!0);return r.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <p class="ml-1">${t.restriction}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.restrictionUpdateBaseUrl}${e}" label="Update"></link-button>
              </div>
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="success" raised bClass="button success mr-2"
                  href="${this.restrictionUsersBaseUrl}${e}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `})):r.html``}firstUpdated(){}getMembers(){return b(this,void 0,void 0,(function*(){const t=yield(0,o.GET_MembershipAccessRestrictions)(null);this._restrictions=null===t?void 0:t.response}))}createRenderRoot(){return this}};_.styles=[r.css`
   :host { display: block; }
  `],h([(0,a.property)({type:String}),u("design:type",String)],_.prototype,"restrictionUsersBaseUrl",void 0),h([(0,a.property)({type:String}),u("design:type",String)],_.prototype,"restrictionUpdateBaseUrl",void 0),h([(0,a.property)({type:Array}),u("design:type",Array)],_.prototype,"_activeBranchId",void 0),h([(0,a.property)({type:Boolean}),u("design:type",Boolean)],_.prototype,"_hasSetup",void 0),_=h([(0,a.customElement)("membership-access_restriction-select_restriction"),u("design:paramtypes",[])],_)}},t=>(t.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_home_dashboard_scss","shared"],(()=>(78885,t(t.s=78885)))),t.O())])));
//# sourceMappingURL=select_restriction.js.map