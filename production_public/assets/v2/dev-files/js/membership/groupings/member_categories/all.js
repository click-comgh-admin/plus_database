"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/member_categories/all"],{69579:(e,t,r)=>{r.r(t)},45501:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>n,https_swal_error_format:()=>o});const n="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?n:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},14108:(e,t,r)=>{r.r(t),r.d(t,{tokenLogin:()=>d,verifyToken:()=>c});var n=r(48485),o=r(87270),s=r(67052),a=r(21942),i=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))};const c=(e,t,r)=>i(void 0,void 0,void 0,(function*(){const c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=r,u=(0,a.get_cookie)(d),m=JSON.stringify({token:(0,s.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,a.get_cookie)(d+"_date"))))return u;yield(0,o.http)(c,{method:"POST",body:m},!0).then((n=>i(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,s.base64Encode)(String(n.jsonData.token));(0,a.set_cookies)(d,e,10),(0,a.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,r)}))))})),l=(e,t,r)=>i(void 0,void 0,void 0,(function*(){const i=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=r,l=JSON.stringify({email:e,id:t});yield(0,o.http)(i,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,s.base64Encode)(String(e.jsonData.token));(0,a.set_cookies)(c,t,10),(0,a.set_cookies_minutes)(c+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,r)=>i(void 0,void 0,void 0,(function*(){const n=(0,s.base64Encode)(String(t)),o=r;window.supersecret={unknowable:{ops:{email:e,id:n,cookieName:o}}},""==(0,a.get_cookie)(o)?yield l(e,n,r):yield c(e,n,r)}))},44672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>o,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>a});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},s=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},5482:(e,t,r)=>{r.r(t),r.d(t,{DELETE_MemberGroupingsMemberCategory:()=>u});var n=r(86455),o=r.n(n),s=r(48485),a=r(87270),i=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,n={};return o().fire({title:"Remove Member Category?",text:"You may have members assigned to this category. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.http)(r,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new i.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new i.NetWorkCallResponses("delete",r,!0);return n.postForm,n}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}o().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},90072:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsMemberCategories:()=>i});var n=r(48485),o=r(87270),s=r(14492),a=r(33600);function i(e=null){return t=this,r=void 0,c=function*(){const t=(0,a.getUserLoginInfoCookie)(),r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),i=yield(0,o.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,n){function o(e){try{a(c.next(e))}catch(e){n(e)}}function s(e){try{a(c.throw(e))}catch(e){n(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(o,s)}a((c=c.apply(t,r||[])).next())}));var t,r,i,c}},54396:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategories:()=>m}),r(69579);var n=r(14108),o=r(85862),s=r(59662),a=(r(68024),r(43683),r(74657),r(27712)),i=r(91354),c=r(41302),l=r(97641),d=function(e,t,r,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends o.LitElement{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,s=function*(){e.connectedCallback.call(this),(0,a.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,n.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((o=void 0)||(o=Promise))((function(e,n){function a(e){try{c(s.next(e))}catch(e){n(e)}}function i(e){try{c(s.throw(e))}catch(e){n(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(a,i)}c((s=s.apply(t,r||[])).next())}));var t,r,o,s}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,i.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return o.html`<account-expired-component></account-expired-component>`;if(!(0,c.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.grouping,viewType:"View"},!1))return o.html`<no-page-entry-component></no-page-entry-component>`}return o.html`
      <div class="shadow bg-white p-2">
        <membership-groupings-member-categories-all CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-all>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,s.property)({type:String}),u("design:type",String)],m.prototype,"email",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"mId",void 0),d([(0,s.property)({type:Number}),u("design:type",Number)],m.prototype,"clientId",void 0),d([(0,s.property)({type:Boolean}),u("design:type",Boolean)],m.prototype,"_hasSetup",void 0),m=d([(0,s.customElement)("membership-groupings-member-categories"),u("design:paramtypes",[])],m)},68024:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesAll:()=>p}),r(45501);var n,o=r(85862),s=r(59662),a=(r(23283),r(16413),r(51511),r(44672)),i=r(48485),c=r(90072),l=r(5482),d=function(e,t,r,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function a(e){try{c(n.next(e))}catch(e){s(e)}}function i(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}c((n=n.apply(e,t||[])).next())}))};let p=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.urlQueryParams)(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){return null===this._memberCategories?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberCategories?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">MemberCategories</span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
        ${this.table}
      `}get table(){return this._memberCategories.length>0?o.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member Category</b>
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
                ${this.getMemberCategories}
              </tbody>
            </table>
          </div>
        </div>
      `:o.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberCategories(){return o.html`
      ${this._memberCategories.map(((e,t)=>o.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a class="text-blue-700" href="${i.CONSTANTS.URLS.PDB_CLIENT}groupings/member-category/edit-member-category?member-category-id=${e.id}">${e.category}</a>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              ${1===e.id||2===e.id||3===e.id?o.html``:o.html`
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                  @click="${this.deleteMemberCategory}"></mwc-icon-button>
              `}
              
            </td>
          </tr>
        `))}
    `}firstUpdated(){}deleteMemberCategory(e){return m(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));1!==t&&(yield(0,l.DELETE_MemberGroupingsMemberCategory)(t))}))}getClientMemberCategories(){return m(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const r=[];r.push(...this._memberCategories,...t),this._memberCategories=r}))}createRenderRoot(){return this}};p.styles=[o.css`
   :host { display: block; }
  `],d([(0,s.property)({type:Number}),u("design:type",Number)],p.prototype,"CLIENT_ID",void 0),d([(0,s.property)({type:Array}),u("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],p.prototype,"_data",void 0),d([(0,s.property)({type:Object}),u("design:type",Object)],p.prototype,"urlQueryParams",void 0),d([(0,s.property)({type:Array}),u("design:type",Array)],p.prototype,"_memberCategories",void 0),p=d([(0,s.customElement)("membership-groupings-member-categories-all"),u("design:paramtypes",[])],p)},97641:(e,t,r)=>{r.r(t),r.d(t,{PAGE__IDS:()=>n});const n={grouping:33,assignment:34}}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_tailwind-output_unaccessible_pages_scss-src_assets_styles_views_widge-c8af88","shared"],(()=>(54396,e(e.s=54396)))),e.O())])));
//# sourceMappingURL=all.js.map