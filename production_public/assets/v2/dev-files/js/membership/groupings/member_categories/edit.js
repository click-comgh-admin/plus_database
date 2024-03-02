"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/member_categories/edit"],{69579:(e,t,r)=>{r.r(t)},45501:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>n});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?o:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},14108:(e,t,r)=>{r.r(t),r.d(t,{tokenLogin:()=>d,verifyToken:()=>c});var o=r(48485),n=r(87270),i=r(67052),s=r(21942),a=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const c=(e,t,r)=>a(void 0,void 0,void 0,(function*(){const c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=r,m=(0,s.get_cookie)(d),u=JSON.stringify({token:(0,i.base64Decode)(m)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.get_cookie)(d+"_date"))))return m;yield(0,n.http)(c,{method:"POST",body:u},!0).then((o=>a(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,i.base64Encode)(String(o.jsonData.token));(0,s.set_cookies)(d,e,10),(0,s.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,r)}))))})),l=(e,t,r)=>a(void 0,void 0,void 0,(function*(){const a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=r,l=JSON.stringify({email:e,id:t});yield(0,n.http)(a,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,i.base64Encode)(String(e.jsonData.token));(0,s.set_cookies)(c,t,10),(0,s.set_cookies_minutes)(c+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,r)=>a(void 0,void 0,void 0,(function*(){const o=(0,i.base64Encode)(String(t)),n=r;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:n}}},""==(0,s.get_cookie)(n)?yield l(e,o,r):yield c(e,o,r)}))},44672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>n,urlQueryParamsGetAll:()=>i,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let o=null;for(const t in r)t===e&&(o=r[t]);return o},i=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",r=0;for(const o in e)r+=1,t+=`${r>1?"&":""}${o}=${e[o]}`;return t}},90072:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsMemberCategories:()=>a});var o=r(48485),n=r(87270),i=r(14492),s=r(33600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),a=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function n(e){try{s(c.next(e))}catch(e){o(e)}}function i(e){try{s(c.throw(e))}catch(e){o(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,i)}s((c=c.apply(t,r||[])).next())}));var t,r,a,c}},36175:(e,t,r)=>{r.r(t),r.d(t,{PUT_MemberGroupingsMemberCategory:()=>m});var o=r(86455),n=r.n(o),i=r(48485),s=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function m(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category/"+e,o=document.querySelector('[make-general-posts="groupings-member-category"]'),m=new FormData(o);return n().fire({title:"Update Member Category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(r,{method:"PUT",body:m,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,o),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},17319:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesEdit:()=>u}),r(69579);var o=r(14108),n=r(85862),i=r(59662),s=(r(24695),r(43683),r(74657),r(27712)),a=r(91354),c=r(41302),l=r(97641),d=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends n.LitElement{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,i=function*(){e.connectedCallback.call(this),(0,s.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((n=void 0)||(n=Promise))((function(e,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}c((i=i.apply(t,r||[])).next())}));var t,r,n,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(!(0,c.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.grouping,viewType:"Edit"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}return n.html`
      <div class="shadow bg-white p-2">
        <membership-groupings-member-categories-edit-member-category CLIENT_ID="${this.clientId}"></membership-groupings-member-categories-edit-member-category>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};d([(0,i.property)({type:String}),m("design:type",String)],u.prototype,"email",void 0),d([(0,i.property)({type:Number}),m("design:type",Number)],u.prototype,"mId",void 0),d([(0,i.property)({type:Number}),m("design:type",Number)],u.prototype,"clientId",void 0),d([(0,i.property)({type:Boolean}),m("design:type",Boolean)],u.prototype,"_hasSetup",void 0),u=d([(0,i.customElement)("membership-groupings-member-categories-edit"),m("design:paramtypes",[])],u)},24695:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsMemberCategoriesEditMemberCategory:()=>u}),r(45501);var o,n=r(85862),i=r(59662),s=(r(23283),r(63313),r(16413),r(51511),r(44672)),a=r(36175),c=r(90072),l=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let u=class extends n.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.__memberCategory=null,this.memberCategoryId=0}set _memberCategory(e){this.__memberCategory=e,this.requestUpdate()}get _memberCategory(){return this.__memberCategory}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.urlQueryParams)(),this.getMemberCategoryId(),yield this.getClientMemberCategory()}))}disconnectedCallback(){}render(){return null===this._memberCategory?n.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberCategory?n.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Category</span>: undefined error</h4>
          </div>
        </div>
      `:n.html`
        ${this.form}
      `}get form(){return n.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Member Category</h1>
                  <h3 class="h3">Edit Member Category</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="groupings-member-category">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.memberCategoryField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">

                      ${1===this.memberCategoryId?n.html``:n.html`
                        <mwc-button label="Update" raised class="button" @click="${this.submitForm}">
                        </mwc-button>
                      `}
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get memberCategoryField(){let e=null;return e=null!==this._memberCategory&&void 0!==this._memberCategory.data?Array.isArray(this._memberCategory.data)?this._memberCategory.data.length>0?this._memberCategory.data[0]:{id:void 0,category:""}:this._memberCategory.data:{id:void 0,category:""},n.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Member Category</h4>
            <mwc-textfield name="category" type="text" class="w-full" id="category" value="${void 0===e.id?"":e.category}" label="Enter memberCategory Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getMemberCategoryId(){let e=(0,s.urlQueryParamsGet)("member-category-id"),t=null!==e?Number(e):null;this.memberCategoryId=Number.isNaN(t)?null:t}getClientMemberCategory(){return m(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)(this.memberCategoryId);this._memberCategory=null===e?void 0:e.response}))}submitForm(e){return m(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,a.PUT_MemberGroupingsMemberCategory)(this.memberCategoryId)}))}createRenderRoot(){return this}};u.styles=[n.css`
   :host { display: block; }
  `],l([(0,i.property)({type:Number}),d("design:type",Number)],u.prototype,"CLIENT_ID",void 0),l([(0,i.property)({type:Array}),d("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],u.prototype,"_data",void 0),l([(0,i.property)({type:Object}),d("design:type",Object)],u.prototype,"urlQueryParams",void 0),l([(0,i.property)({type:Number}),d("design:type",Number)],u.prototype,"memberCategoryId",void 0),u=l([(0,i.customElement)("membership-groupings-member-categories-edit-member-category"),d("design:paramtypes",[])],u)},97641:(e,t,r)=>{r.r(t),r.d(t,{PAGE__IDS:()=>o});const o={grouping:33,assignment:34}}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.lit-element","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-981a93","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_tailwind-output_unaccessible_pages_scss-src_assets_styles_views_widge-c8af88","shared"],(()=>(17319,e(e.s=17319)))),e.O())])));
//# sourceMappingURL=edit.js.map