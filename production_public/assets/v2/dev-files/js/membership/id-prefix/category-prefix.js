"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/id-prefix/category-prefix"],{69579:(e,t,r)=>{r.r(t)},45501:(e,t,r)=>{r.r(t)},8967:(e,t,r)=>{r.r(t),r.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>n});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?o:"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},44672:(e,t,r)=>{r.r(t),r.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>n,urlQueryParamsGetAll:()=>i,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let o=null;for(const t in r)t===e&&(o=r[t]);return o},i=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",r=0;for(const o in e)r+=1,t+=`${r>1?"&":""}${o}=${e[o]}`;return t}},88527:(e,t,r)=>{r.r(t),r.d(t,{Convert:()=>o,typeMap:()=>l});class o{static toGroupingsMemberCategoryModel(e){return s(JSON.parse(e),c("GroupingsMemberCategoryModel"),n)}static groupingsMemberCategoryModelToJson(e){return JSON.stringify(s(e,c("GroupingsMemberCategoryModel"),i),null,2)}}function n(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function s(e,t,r,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let n=0;n<o;n++){const o=e[n];try{return s(t,o,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>s(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const n={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;n[i.key]=s(a,i.typ,r,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(n[i]=s(o[i],t,r,i))})),n}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function c(e){return{ref:e}}const l={GroupingsMemberCategoryModel:(d=[{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"category",js:"category",typ:a(null,"")},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1,{props:d,additional:false})};var d},77095:(e,t,r)=>{r.r(t),r.d(t,{Convert:()=>n,typeMap:()=>d});var o=r(88527);class n{static toMembershipMemberCategoryIDPrefixModel(e){return a(JSON.parse(e),l("MembershipMemberCategoryIDPrefixModel"),i)}static membershipMemberCategoryIDPrefixModelToJson(e){return JSON.stringify(a(e,l("MembershipMemberCategoryIDPrefixModel"),s),null,2)}}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,r,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let n=0;n<o;n++){const o=e[n];try{return a(t,o,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>a(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const n={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],s=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;n[i.key]=a(s,i.typ,r,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(n[i]=a(o[i],t,r,i))})),n}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function c(...e){return{unionMembers:e}}function l(e){return{ref:e}}const d={MembershipMemberCategoryIDPrefixModel:(u=[{json:"id",js:"id",typ:c(null,0)},{json:"prefix",js:"prefix",typ:c(null,"")},{json:"memberCategoryId",js:"memberCategoryID",typ:c(null,l("GroupingsMemberCategoryModel"))},{json:"createdBy",js:"createdBy",typ:c(null,0)},{json:"creationDate",js:"creationDate",typ:c(null,Date)},{json:"updatedBy",js:"updatedBy",typ:c(null,0)},{json:"updateDate",js:"updateDate",typ:c(null,Date)}],!1,{props:u,additional:false}),GroupingsMemberCategoryModel:o.typeMap.GroupingsMemberCategoryModel};var u},90072:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberGroupingsMemberCategories:()=>a});var o=r(48485),n=r(87270),i=r(14492),s=r(33600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),a=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function n(e){try{s(c.next(e))}catch(e){o(e)}}function i(e){try{s(c.throw(e))}catch(e){o(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,i)}s((c=c.apply(t,r||[])).next())}));var t,r,a,c}},97445:(e,t,r)=>{r.r(t),r.d(t,{DELETE_MemberCategoryIdPrefix:()=>u});var o=r(86455),n=r.n(o),i=r(48485),s=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix/"+e,o={};return n().fire({title:"Remove Member Category Id Prefix?",text:"You may have members assigned to this prefix. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(r,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new a.NetWorkCallResponses("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const o=new a.NetWorkCallResponses("delete",r,!0);return o.postForm,o}})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}n().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},65704:(e,t,r)=>{r.r(t),r.d(t,{GET_MemberCategoryIdPrefix:()=>a});var o=r(48485),n=r(87270),i=r(14492),s=r(33600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,s.getUserLoginInfoCookie)(),r=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix"+(null===e?"":"/"+e),a=yield(0,n.http)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function n(e){try{s(c.next(e))}catch(e){o(e)}}function i(e){try{s(c.throw(e))}catch(e){o(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,i)}s((c=c.apply(t,r||[])).next())}));var t,r,a,c}},16101:(e,t,r)=>{r.r(t),r.d(t,{POST_MemberCategoryIdPrefix:()=>u});var o=r(86455),n=r.n(o),i=r(48485),s=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix",r=document.querySelector('[make-general-posts="member-id-category-prefix"]'),o=new FormData(r);return n().fire({title:"Add Member Category Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,r),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},75846:(e,t,r)=>{r.r(t),r.d(t,{PUT_MemberCategoryIdPrefix:()=>u});var o=r(86455),n=r.n(o),i=r(48485),s=r(87270),a=r(14492),c=r(8967),l=r(33600),d=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/member-id-category-prefix/"+e,o=document.querySelector('[make-general-posts="member-id-category-prefix"]'),u=new FormData(o);return n().fire({title:"Update Member Category Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(r,{method:"PUT",body:u,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,o),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},66430:(e,t,r)=>{r.r(t),r.d(t,{IdCategoryPrefixAdd:()=>f}),r(45501);var o=r(85862),n=r(59662),i=(r(23283),r(16413),r(51511),r(40789),r(63313),r(75866),r(43683),r(74657),r(16101)),s=r(27712),a=r(91354),c=r(41302),l=r(33426),d=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let f=class extends o.LitElement{constructor(){super(),this.CLIENT_ID=0,this.memberCategories=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return p(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,s.AppSetup)().then((()=>this._hasSetup=!0))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,a.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return o.html`<account-expired-component></account-expired-component>`;if(!(0,c.AppSettingsExtraUserAccess)({pageId:l.PAGE__IDS.identity_prefix,viewType:"Edit"},!1))return o.html`<no-page-entry-component></no-page-entry-component>`}return o.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Prefix</h1>
                  <h3 class="h3">Create New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-category-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Category</h4>
                    <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" setSelectedMemberCategoryId label="Select Member Category" outlined required>
                      ${this.memberCategories.map((e=>o.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return p(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,i.POST_MemberCategoryIdPrefix)()}))}createRenderRoot(){return this}};f.styles=[o.css`
   :host { display: block; }
  `],d([(0,n.property)({type:Number}),u("design:type",Number)],f.prototype,"CLIENT_ID",void 0),d([(0,n.property)({type:Array}),u("design:type",Array)],f.prototype,"memberCategories",void 0),d([(0,n.property)({type:Boolean}),u("design:type",Boolean)],f.prototype,"_hasSetup",void 0),f=d([(0,n.customElement)("id-category-prefix-add"),u("design:paramtypes",[])],f)},22753:(e,t,r)=>{r.r(t),r.d(t,{IdCategoryPrefix:()=>s}),r(69579);var o=r(85862),n=r(59662),i=(r(60798),function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s});let s=class extends o.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,n=function*(){e.connectedCallback.call(this)},new((o=void 0)||(o=Promise))((function(e,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof o?r:new o((function(e){e(r)}))).then(s,a)}c((n=n.apply(t,r||[])).next())}));var t,r,o,n}disconnectedCallback(){}render(){return o.html`
      <id-category-prefix-view></id-category-prefix-view>
    `}firstUpdated(){}createRenderRoot(){return this}};s=i([(0,n.customElement)("id-category-prefix"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],s)},56697:(e,t,r)=>{r.r(t),r.d(t,{IdCategoryPrefixEdit:()=>m}),r(45501);var o,n=r(85862),i=r(59662),s=(r(23283),r(16413),r(51511),r(40789),r(63313),r(75866),r(43683),r(74657),r(75846)),a=r(27712),c=r(91354),l=r(41302),d=r(33426),u=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let m=class extends n.LitElement{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this.memberCategories=[],this._data=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,a.AppSetup)().then((()=>this._hasSetup=!0))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,c.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(!(0,l.AppSettingsExtraUserAccess)({pageId:d.PAGE__IDS.identity_prefix,viewType:"Edit"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}return n.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Prefix</h1>
                  <h3 class="h3">Update New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-category-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Member Category</h4>
                    <mwc-select name="memberCategoryId" class="w-full" id="memberCategoryId" setSelectedMemberCategoryId label="Select Member Category" outlined required>
                      ${this.memberCategories.map((e=>0===this.prefixEdit.length?n.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`:e.id===this.prefixEdit[0].memberCategoryID.id?n.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:void 0))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="${0===this.prefixEdit.length?"":this.prefixEdit[0].prefix}" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return f(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,s.PUT_MemberCategoryIdPrefix)(this.prefixId)}))}createRenderRoot(){return this}};m.styles=[n.css`
   :host { display: block; }
  `],u([(0,i.property)({type:Number}),p("design:type",Number)],m.prototype,"prefixId",void 0),u([(0,i.property)({type:Array}),p("design:type",Array)],m.prototype,"prefixEdit",void 0),u([(0,i.property)({type:Array}),p("design:type",Array)],m.prototype,"memberCategories",void 0),u([(0,i.property)({type:Array}),p("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],m.prototype,"_data",void 0),u([(0,i.property)({type:Boolean}),p("design:type",Boolean)],m.prototype,"_hasSetup",void 0),m=u([(0,i.customElement)("id-category-prefix-edit"),p("design:paramtypes",[])],m)},33426:(e,t,r)=>{r.r(t),r.d(t,{PAGE__IDS:()=>o});const o={identity_prefix:32}},60798:(e,t,r)=>{r.r(t),r.d(t,{IdCategoryPrefixView:()=>v}),r(45501);var o,n=r(85862),i=r(59662),s=(r(23283),r(16413),r(51511),r(44672)),a=(r(66430),r(56697),r(65704)),c=r(77095),l=r(97445),d=r(90072),u=r(88527),p=r(27712),f=(r(43683),r(74657),r(91354)),m=r(41302),y=r(33426),h=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let v=class extends n.LitElement{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[],this.urlQueryParams=void 0,this._memberPrefixIds=[],this._memberCategories=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,p.AppSetup)().then((()=>this._hasSetup=!0)),this.urlQueryParams=(0,s.urlQueryParams)(),(0,p.AppSetup)(),yield this.getMemberCategoryIdPrefix(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){return null===this._memberPrefixIds?n.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberPrefixIds?n.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Prefix Id</span>: undefined error</h4>
          </div>
        </div>
      `:n.html`
        <div class="shadow bg-white p-2 mb-4">
          ${this.form}
          <hr />
          <div class="flex justify-end my-2">
            <mwc-button raised label="Add Category Prefix" class="ml-1 success" icon="add" @click="${this.addNew}"></mwc-button> 
          </div>
          ${this.table}
        </div>
      `}get form(){return this._memberPrefixIds.length>0?0===this.prefixId?n.html`
          <id-category-prefix-add .memberCategories="${this._memberCategories}"></id-category-prefix-add>
        `:n.html`
          <id-category-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}" .memberCategories="${this._memberCategories}"></id-category-prefix-edit>
        `:n.html`
        <id-category-prefix-add .memberCategories="${this._memberCategories}"></id-category-prefix-add>
      `}get table(){var e;if(this._hasSetup){if(null===(e=(0,f.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(!(0,m.AppSettingsExtraUserAccess)({pageId:y.PAGE__IDS.identity_prefix,viewType:"View"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}return this._memberPrefixIds.length>0?n.html`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member ID Prefix</b>
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
                ${this.getMemberPrefixIds}
              </tbody>
            </table>
          </div>
        </div>
      `:n.html`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberPrefixIds(){return n.html`
      ${this._memberPrefixIds.map(((e,t)=>n.html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.memberCategoryID.category} -> <b>${e.prefix}</b>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${e.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `))}
    `}firstUpdated(){}addNew(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),this.prefixId=0,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus()}))}editMemberPrefixId(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("edit-this-item"));this.prefixId=t,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus();const r=this._memberCategories;for(const e of this._memberPrefixIds)e.id===this.prefixId&&(this.prefixEdit[0]=e,this._memberCategories=[],setTimeout((()=>{this._memberCategories=r}),100))}))}deleteMemberPrefixId(e){return g(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,l.DELETE_MemberCategoryIdPrefix)(t)}))}getMemberCategoryIdPrefix(){return g(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberCategoryIdPrefix)();let t=[];null===e?t.push({id:0,prefix:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>c.Convert.toMembershipMemberCategoryIDPrefixModel(JSON.stringify(e))))]);const r=[];r.push(...this._memberPrefixIds,...t),this._memberPrefixIds=r}))}getClientMemberCategories(){return g(this,void 0,void 0,(function*(){const e=yield(0,d.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>u.Convert.toGroupingsMemberCategoryModel(JSON.stringify(e))))]);const r=[];r.push(...this._memberCategories,...t),this._memberCategories=r}))}createRenderRoot(){return this}};v.styles=[n.css`
   :host { display: block; }
  `],h([(0,i.property)({type:Number}),b("design:type",Number)],v.prototype,"prefixId",void 0),h([(0,i.property)({type:Array}),b("design:type",Array)],v.prototype,"prefixEdit",void 0),h([(0,i.property)({type:Array}),b("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],v.prototype,"_data",void 0),h([(0,i.property)({type:Object}),b("design:type",Object)],v.prototype,"urlQueryParams",void 0),h([(0,i.property)({type:Array}),b("design:type",Array)],v.prototype,"_memberPrefixIds",void 0),h([(0,i.property)({type:Array}),b("design:type",Array)],v.prototype,"_memberCategories",void 0),h([(0,i.property)({type:Boolean}),b("design:type",Boolean)],v.prototype,"_hasSetup",void 0),v=h([(0,i.customElement)("id-category-prefix-view"),b("design:paramtypes",[])],v)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_tailwind-output_unaccessible_pages_scss-src_assets_styles_views_widge-c8af88","shared"],(()=>(22753,e(e.s=22753)))),e.O())])));
//# sourceMappingURL=category-prefix.js.map