/*! For license information please see member-prefix.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1297],{8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,n)=>{n.d(t,{Jx:()=>o,O1:()=>r,Vc:()=>i,W3:()=>a});const r=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let r=null;for(const t in n)t===e&&(r=n[t]);return r},i=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",n=0;for(const r in e)n+=1,t+=`${n>1?"&":""}${r}=${e[r]}`;return t}},7967:(e,t,n)=>{n.d(t,{Y:()=>c});var r=n(2761),o=n(5102);function i(...e){return{unionMembers:e}}function a(e){return{ref:e}}const c={ClientInfoModel:(s=[{json:"id",js:"id",typ:i(null,0)},{json:"name",js:"name",typ:i(null,"")},{json:"accountType",js:"accountType",typ:i(null,0)},{json:"country",js:"country",typ:i(null,"")},{json:"stateProvince",js:"stateProvince",typ:i(null,"")},{json:"applicantFirstname",js:"applicantFirstname",typ:i(null,"")},{json:"applicantSurname",js:"applicantSurname",typ:i(null,"")},{json:"applicantGender",js:"applicantGender",typ:i(null,0)},{json:"applicantPhone",js:"applicantPhone",typ:i(null,"")},{json:"applicantEmail",js:"applicantEmail",typ:i(null,"")},{json:"applicantDesignationRole",js:"applicantDesignationRole",typ:i(null,0)},{json:"region",js:"region",typ:i(null,0)},{json:"district",js:"district",typ:i(null,0)},{json:"constituency",js:"constituency",typ:i(null,0)},{json:"community",js:"community",typ:i(null,"")},{json:"subscriptionDuration",js:"subscriptionDuration",typ:i(null,"")},{json:"subscriptionDate",js:"subscriptionDate",typ:i(null,Date)},{json:"subscriptionFee",js:"subscriptionFee",typ:i(null,"")},{json:"logo",js:"logo",typ:i(null,"")},{json:"status",js:"status",typ:i(null,0)},{json:"archive",js:"archive",typ:i(null,0)},{json:"accountCategory",js:"accountCategory",typ:i(null,a("ClientAccountCategoryModel"))},{json:"website",js:"website",typ:i(null,"")},{json:"creationDate",js:"creationDate",typ:i(null,Date)},{json:"updatedBy",js:"updatedBy",typ:i(null,0)},{json:"updateDate",js:"updateDate",typ:i(null,Date)},{json:"countryInfo",js:"countryInfo",typ:i(null,(l=a("LocationCountryModel"),{arrayItems:l}))}],!1,{props:s,additional:false}),LocationCountryModel:r.Y.LocationCountryModel,ClientAccountCategoryModel:o.Y.ClientAccountCategoryModel};var s,l},2761:(e,t,n)=>{n.d(t,{Y:()=>l,e:()=>r});class r{static toCountryModel(e){return c(JSON.parse(e),s("LocationCountryModel"),i)}static countryModelToJson(e){return JSON.stringify(c(e,s("LocationCountryModel"),a),null,2)}}function o(e,t,n=""){if(n)throw Error(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`);throw Error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function c(e,t,n,r=""){if("any"===t)return e;if(null===t)return null===e?e:o(t,e);if(!1===t)return o(t,e);for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:o(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return c(t,r,n)}catch(e){}}return o(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>c(t,e,n))):o("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return o("object",r);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],a=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;i[o.key]=c(a,o.typ,n,o.key)})),Object.getOwnPropertyNames(r).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(i[o]=c(r[o],t,n,o))})),i}(n(t),t.additional,e):o(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?o("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:o(e,t,r)}(t,e)}function s(e){return{ref:e}}const l={LocationCountryModel:(d=[{json:"id",js:"id",typ:0},{json:"name",js:"name",typ:""},{json:"short",js:"short",typ:""},{json:"code",js:"code",typ:""}],!1,{props:d,additional:false})};var d},9776:(e,t,n)=>{n.r(t),n.d(t,{IdMemberPrefix:()=>W});var r,o=n(9392),i=n(1936),a=(n(5248),n(934),n(6811),n(4672)),c=(n(9261),n(3313),n(5866),n(3683),n(4657),n(6455)),s=n.n(c),l=n(771),d=n(7270),u=n(596),f=n(8967),p=n(3600),y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},m=n(9665),h=n(2145),b=n(1302),v=n(3426),w=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};let g=class extends o.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return j(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,m.f)().then((()=>this._hasSetup=!0))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,h.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(!(0,b.H)({pageId:v.W.identity_prefix,viewType:"Edit"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
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
              <form method="post" action="#" class="form" make-general-posts="member-id-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
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
    `}firstUpdated(){}submitForm(e){return j(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return y(this,void 0,void 0,(function*(){const e=(0,p.Ie)(),t=l.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix",n=document.querySelector('[make-general-posts="member-id-prefix"]'),r=new FormData(n);return s().fire({title:"Add Member Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>y(this,void 0,void 0,(function*(){return yield(0,d.d)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new u.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};g.styles=[o.iv`
   :host { display: block; }
  `],w([(0,i.Cb)({type:Number}),x("design:type",Number)],g.prototype,"CLIENT_ID",void 0),w([(0,i.Cb)({type:Array}),x("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],g.prototype,"_data",void 0),w([(0,i.Cb)({type:Boolean}),x("design:type",Boolean)],g.prototype,"_hasSetup",void 0),g=w([(0,i.Mo)("id-member-prefix-add"),x("design:paramtypes",[])],g);var C,_=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},O=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};let A=class extends o.oi{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,m.f)().then((()=>this._hasSetup=!0))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,h.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(!(0,b.H)({pageId:v.W.identity_prefix,viewType:"Edit"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
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
              <form method="post" action="#" class="form" make-general-posts="member-id-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
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
    `}firstUpdated(){}submitForm(e){return k(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return _(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix/"+e,r=document.querySelector('[make-general-posts="member-id-prefix"]'),o=new FormData(r);return s().fire({title:"Update Member Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return yield(0,d.d)(n,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new u.H("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.prefixId)}))}createRenderRoot(){return this}};A.styles=[o.iv`
   :host { display: block; }
  `],O([(0,i.Cb)({type:Number}),P("design:type",Number)],A.prototype,"prefixId",void 0),O([(0,i.Cb)({type:Array}),P("design:type",Array)],A.prototype,"prefixEdit",void 0),O([(0,i.Cb)({type:Array}),P("design:type","function"==typeof(C="undefined"!=typeof Array&&Array)?C:Object)],A.prototype,"_data",void 0),O([(0,i.Cb)({type:Boolean}),P("design:type",Boolean)],A.prototype,"_hasSetup",void 0),A=O([(0,i.Mo)("id-member-prefix-edit"),P("design:paramtypes",[])],A);var I=n(7967),E=n(2761),M=n(5102);class S{static toMembershipMemberIDPrefixModel(e){return B(JSON.parse(e),N("MembershipMemberIDPrefixModel"),T)}static membershipMemberIDPrefixModelToJson(e){return JSON.stringify(B(e,N("MembershipMemberIDPrefixModel"),R),null,2)}}function T(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function R(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function B(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=L[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return B(t,r,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>B(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],a=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;o[i.key]=B(a,i.typ,n,i.key)})),Object.getOwnPropertyNames(r).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=B(r[i],t,n,i))})),o}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function D(...e){return{unionMembers:e}}function N(e){return{ref:e}}const L={MembershipMemberIDPrefixModel:($=[{json:"id",js:"id",typ:D(null,0)},{json:"clientId",js:"clientID",typ:D(null,N("ClientInfoModel"))},{json:"prefix",js:"prefix",typ:D(null,"")},{json:"lastId",js:"lastID",typ:D(null,0)},{json:"createdBy",js:"createdBy",typ:D(null,0)},{json:"updatedBy",js:"updatedBy",typ:D(null,0)},{json:"updateDate",js:"updateDate",typ:D(null,Date)},{json:"creationDate",js:"creationDate",typ:D(null,Date)}],!1,{props:$,additional:false}),ClientInfoModel:I.Y.ClientInfoModel,LocationCountryModel:E.Y.LocationCountryModel,ClientAccountCategoryModel:M.Y.ClientAccountCategoryModel};var $,J,U=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},X=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},Y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))};let F=class extends o.oi{constructor(){super(),this.prefixId=0,this.prefixEdit=[],this._data=[],this.urlQueryParams=void 0,this._memberPrefixIds=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return Y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,m.f)().then((()=>this._hasSetup=!0)),this.urlQueryParams=(0,a.O1)(),(0,m.f)(),yield this.getMemberIdPrefix()}))}disconnectedCallback(){}render(){return null===this._memberPrefixIds?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberPrefixIds?o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Prefix Id</span>: undefined error</h4>
          </div>
        </div>
      `:o.dy`
        <div class="shadow bg-white p-2 mb-4">
          ${this.form}
          <hr />
          ${this.table}
        </div>
      `}get form(){return this._memberPrefixIds.length>0?o.dy`
        <id-member-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}"></id-member-prefix-edit>
      `:o.dy`
        <id-member-prefix-add></id-member-prefix-add>
      `}get table(){var e;if(this._hasSetup){if(null===(e=(0,h.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(!(0,b.H)({pageId:v.W.identity_prefix,viewType:"View"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return this._memberPrefixIds.length>0?o.dy`
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
      `:o.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberPrefixIds(){return o.dy`
      ${this._memberPrefixIds.map(((e,t)=>o.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.prefix}
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${e.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `))}
    `}firstUpdated(){}editMemberPrefixId(e){return Y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("edit-this-item"));this.prefixId=t,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus();for(const e of this._memberPrefixIds)e.id===this.prefixId&&(this.prefixEdit[0]=e)}))}deleteMemberPrefixId(e){return Y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return U(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix/"+e,r={};return s().fire({title:"Remove Member Id Prefix?",text:"You may have members assigned to this prefix. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>U(this,void 0,void 0,(function*(){return yield(0,d.d)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new u.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,f.T)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new u.H("delete",n,!0);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}s().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMemberIdPrefix(){return Y(this,void 0,void 0,(function*(){const e=yield function(e=null){return t=this,n=void 0,o=function*(){const t=(0,p.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-prefix"+(null===e?"":"/"+e),r=yield(0,d.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new u.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new u.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}));var t,n,r,o}();let t=[];null===e?t.push({id:0,prefix:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>S.toMembershipMemberIDPrefixModel(JSON.stringify(e))))]);const n=[];n.push(...this._memberPrefixIds,...t),this._memberPrefixIds=n}))}createRenderRoot(){return this}};F.styles=[o.iv`
   :host { display: block; }
  `],X([(0,i.Cb)({type:Number}),H("design:type",Number)],F.prototype,"prefixId",void 0),X([(0,i.Cb)({type:Array}),H("design:type",Array)],F.prototype,"prefixEdit",void 0),X([(0,i.Cb)({type:Array}),H("design:type","function"==typeof(J="undefined"!=typeof Array&&Array)?J:Object)],F.prototype,"_data",void 0),X([(0,i.Cb)({type:Object}),H("design:type",Object)],F.prototype,"urlQueryParams",void 0),X([(0,i.Cb)({type:Array}),H("design:type",Array)],F.prototype,"_memberPrefixIds",void 0),X([(0,i.Cb)({type:Boolean}),H("design:type",Boolean)],F.prototype,"_hasSetup",void 0),F=X([(0,i.Mo)("id-member-prefix-view"),H("design:paramtypes",[])],F);let W=class extends o.oi{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,o=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}));var t,n,r,o}disconnectedCallback(){}render(){return o.dy`
      <id-member-prefix-view></id-member-prefix-view>
    `}firstUpdated(){}createRenderRoot(){return this}};W=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}([(0,i.Mo)("id-member-prefix"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],W)},3426:(e,t,n)=>{n.d(t,{W:()=>r});const r={identity_prefix:32}},4232:(e,t,n)=>{n.d(t,{OR:()=>a,hl:()=>s,pt:()=>i});var r=n(3692);const{I:o}=r.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,a=e=>void 0===e.strings,c={},s=(e,t=c)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{XM:()=>r.XM,Xe:()=>r.Xe,pX:()=>r.pX});var r=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>a});var r=n(3692),o=n(875),i=n(4232);const a=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,a=e.name;if(e.type===o.pX.PROPERTY){if(t===n[a])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(a))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(a)===t+"")return r.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,214,3901,6084,3712],(()=>(9776,e(e.s=9776)))),e.O())])));
//# sourceMappingURL=member-prefix.js.map