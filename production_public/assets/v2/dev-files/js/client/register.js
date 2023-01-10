"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["client/register"],{5358:(e,t,n)=>{n.r(t)},1981:(e,t,n)=>{n.r(t),n.d(t,{GetNetworkStatus:()=>o,GetNetworkStatusEvent:()=>i});const o=(e,t)=>!0===navigator.onLine?e("online"):t("offline"),i=e=>{let t=new CustomEvent("get-online-status",{cancelable:!0,detail:{onlineStatus:navigator.onLine}});e.dispatchEvent(t)}},6651:(e,t,n)=>{n.r(t),n.d(t,{togglePswdVisibility:()=>s}),n(6413);let o=[];const i="Show Password",s=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const n=e.parentElement;n.setAttribute("style",n.getAttribute("style")+"; flex-direction: column !important;");const s=document.createElement("label");s.setAttribute("style",s.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const l=document.createElement("span");l.setAttribute("style",l.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),l.innerText=i;const c=document.createElement("span");l.setAttribute("style",l.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const a=document.createElement("input");a.type="checkbox",a.id="pswd-visibility-btn--"+t,a.setAttribute("style",a.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),s.appendChild(c),s.appendChild(a),s.appendChild(l),e.after(s);const d={id:a.id,showing:!1,elem:e,span:l};o.includes(d)||o.push(d),a.addEventListener("change",r)}))},r=e=>{e.preventDefault();const t=e.currentTarget;t.checked,o.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=i,e.showing=!1))}))}},7725:(e,t,n)=>{n.r(t),n.d(t,{getActiveBranchIdCookie:()=>a,removeActiveBranchIdCookie:()=>c,setActiveBranchIdCookie:()=>l});var o=n(7052),i=n(1942),s=n(1489);const r="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,i.set_cookies)(r,"",-1),(0,i.set_cookies)(r,(0,o.base64Encode)(t),3500)};function c(){(0,i.set_cookies)(r,"",-1)}const a=()=>{if(""===(0,i.get_cookie)(r))return null;{const e=(0,o.base64Decode)((0,i.get_cookie)(r)),t=JSON.parse(e);return(0,s.clientBranchInfo_S)(t)}}},5102:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o,typeMap:()=>a});class o{static toClientAccountCategoryModel(e){return r(JSON.parse(e),c("ClientAccountCategoryModel"),i)}static clientAccountCategoryModelToJson(e){return JSON.stringify(r(e,c("ClientAccountCategoryModel"),s),null,2)}}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function r(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=a[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let i=0;i<o;i++){const o=e[i];try{return r(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>r(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],l=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;i[s.key]=r(l,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(i[s]=r(o[s],t,n,s))})),i}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function c(e){return{ref:e}}const a={ClientAccountCategoryModel:(d=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"category",js:"category",typ:l(null,"")},{json:"createdBy",js:"createdBy",typ:l(null,0)},{json:"updatedBy",js:"updatedBy",typ:l(null,0)},{json:"updateDate",js:"updateDate",typ:l(null,Date)},{json:"date",js:"date",typ:l(null,Date)}],!1,{props:d,additional:false})};var d},1489:(e,t,n)=>{function o(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),updatedBy:Number(e.updatedBy),updateDate:new Date(e.updateDate)}}function i(e){return{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}n.r(t),n.d(t,{ClientBranch_S:()=>o,clientBranchInfo_S:()=>i})},9730:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o,typeMap:()=>a});class o{static toClientSubscriptionMembershipSizeModel(e){return r(JSON.parse(e),c("ClientSubscriptionMembershipSizeModel"),i)}static clientSubscriptionMembershipSizeModelToJson(e){return JSON.stringify(r(e,c("ClientSubscriptionMembershipSizeModel"),s),null,2)}}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function r(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=a[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let i=0;i<o;i++){const o=e[i];try{return r(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>r(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],l=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;i[s.key]=r(l,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(i[s]=r(o[s],t,n,s))})),i}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function c(e){return{ref:e}}const a={ClientSubscriptionMembershipSizeModel:(d=[{json:"id",js:"id",typ:l(null,0)},{json:"info",js:"info",typ:l(null,"")},{json:"cost",js:"cost",typ:l(null,"")},{json:"type",js:"type",typ:l(null,0)},{json:"client",js:"client",typ:l(null,0)},{json:"accountType",js:"accountType",typ:l(null,0)}],!1,{props:d,additional:false})};var d},2869:(e,t,n)=>{function o(e){return{id:Number(e.id),name:e.name}}n.r(t),n.d(t,{GenericGenderInfo_S:()=>o})},8952:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientAccountCategory:()=>l});var o=n(8485),i=n(7270),s=n(4492),r=n(3600);function l(e=null,t="",n=!1){return l=this,c=void 0,d=function*(){const l=n?null:(0,r.getUserLoginInfoCookie)(),c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/account-category"+(null===e?"":"/"+e)+t,a=yield(0,i.http)(c,{method:"GET",headers:n?{}:{Authorization:"Token "+l.token}},!0);try{return new s.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{i(d.next(e))}catch(e){t(e)}}function o(e){try{i(d.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(n,o)}i((d=d.apply(l,c||[])).next())}));var l,c,a,d}},7183:(e,t,n)=>{n.r(t),n.d(t,{POST_ClientRegister:()=>h});var o=n(4492),i=n(8485),s=n(7270),r=n(8967),l=n(1981),c=n(3600),a=n(1566),d=n(7725),u=n(6455),m=n.n(u),p=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};function h(){return p(this,void 0,void 0,(function*(){const e=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/register",t=document.querySelector('[make-general-posts="client-register"]'),n=new FormData(t);(0,l.GetNetworkStatus)((l=>m().fire({title:"Create Client Account?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>p(this,void 0,void 0,(function*(){return yield(0,s.http)(e,{method:"POST",body:n},!1).then((e=>{const n=new o.NetWorkCallResponses("post",e,!1,t),i=n.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,r.https_swal_error_format)(e);m().showValidationMessage(`${t}`)}return n})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t,n="Success",o=!1;const s=e.value;if(s instanceof Object){const e=s.response;n="Registration Successful",t=e.data,o=s.response.success}o&&m().fire({title:n,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{const e=(0,a.userLoginInfo_S)(t);(0,c.setUserLoginInfoCookie)(e),(0,d.removeActiveBranchIdCookie)(),window.location.href=i.CONSTANTS.URLS.LOGIN_PAGE_BASE_URL}),500)}}))),(e=>{m().fire({title:"Looks like you're offline",text:"Try again later!",icon:"info",iconColor:"#f97817",confirmButtonColor:"#f97817"})}))}))}},281:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientSubsciptionMembershipSize:()=>r});var o=n(8485),i=n(7270),s=n(4492);function r(e=null,t=""){return n=this,r=void 0,c=function*(){const n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/subscription/membership-size"+(null===e?"":"/"+e)+t,r=yield(0,i.http)(n,{method:"GET",headers:{}},!0);try{return new s.NetWorkCallResponses("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{s(c.next(e))}catch(e){t(e)}}function i(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,i)}s((c=c.apply(n,r||[])).next())}));var n,r,l,c}},7553:(e,t,n)=>{n.r(t),n.d(t,{GET_GenericGender:()=>l});var o=n(8485),i=n(7270),s=n(4492),r=n(3600);function l(e=null){return t=this,n=void 0,c=function*(){const t=(0,r.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),l=yield(0,i.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,o){function i(e){try{r(c.next(e))}catch(e){o(e)}}function s(e){try{r(c.throw(e))}catch(e){o(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,s)}r((c=c.apply(t,n||[])).next())}));var t,n,l,c}},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>l});var o=n(5862),i=n(9662),s=(n(9975),n(6788),function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[o.css`
      :host {
        display: block;
      }
    `],s([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"name",void 0),s([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"label",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"selected",void 0),s([(0,i.property)({type:String}),r("design:type",String)],l.prototype,"value",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],l.prototype,"isSelected",void 0),l=s([(0,i.customElement)("switch-input")],l)},1082:(e,t,n)=>{n.r(t),n.d(t,{PdbRegisterForm:()=>A}),n(5358);var o=n(6651),i=n(7183),s=n(5862),r=n(9662),l=(n(3590),n(789),n(3283),n(3313),n(5866),n(3690),n(2461),n(2869)),c=n(7553),a=n(281),d=n(9730),u=n(2761),m=n(5458),p=n(4564),h=n(4253),y=n(9446),f=n(1729),g=n(6525),v=n(1791),b=n(5102),w=n(8952),_=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{c(o.next(e))}catch(e){s(e)}}function l(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,l)}c((o=o.apply(e,t||[])).next())}))};let A=class extends s.LitElement{constructor(){super(),this.showLeadersForm=!1,this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._genders=[],this._countries=[],this._accountCategories=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={},this._membershipSizes=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getGenders(),yield this.getLocationCountry(),yield this.getClientAccountCategory(),yield this.getClientSubscriptionMembershipSize()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),n=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),o=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return s.html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Client Account</h1>
                  <h3 class="h3">Create New Client Account!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-register" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Organization Name</h4>
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="" label="Enter Organization Name" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Account Category</h4>
                    <mwc-select name="accountCategory" id="accountCategory" label="Select Account Category" outlined required>
                      ${this._accountCategories.map((e=>s.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_other_account_category>
                    <h4 class="font-semibold my-2">Enter Other Account Category</h4>
                    <mwc-textfield name="accountCategoryOther" type="text" class="w-full" id="accountCategoryOther" value="" label="Enter Other Account Category" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Membership Size</h4>
                    <mwc-select name="membership_size" id="membership_size" label="Select Membership Size" outlined required>
                      ${this._membershipSizes.map((e=>s.html`<mwc-list-item value="${e.id}">${e.info}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Add Organization Logo <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="logo" name="logo" label="Add Organization Logo" ></file-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Organization Website <span class="text-yellow-600">(Optional)</span></h4>
                    <mwc-textfield name="website" type="url" class="w-full" id="website" value="" label="Enter Organization Website (Optional)" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Country</h4>
                    <!--<mwc-select name="country" id="country" label="Select Country" outlined required>
                      ${this._countries.map((e=>s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                    </mwc-select> -->
                    <select-input name="country" id="country" label="Select Country" .options="${e}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_state_province>
                    <h4 class="font-semibold my-2">Enter State/ Province</h4>
                    <mwc-textfield name="stateProvince" type="text" class="w-full" id="stateProvince" value="" label="Enter State/ Province" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Region</h4>
                    <select-input name="region" id="region" label="Select Region" .options="${t}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select District</h4>
                    <select-input name="district" id="district" label="Select District" .options="${n}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Constituency</h4>
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${o}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Enter Community</h4>
                    <mwc-textfield name="community" type="text" class="w-full" id="community" value="" label="Enter Community" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Applicant Info")}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Applicant Firstname</h4>
                    <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" value="" label="Enter Applicant Firstname" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Applicant Surname</h4>
                    <mwc-textfield name="surname" type="text" class="w-full" id="surname" value="" label="Enter Applicant Surname" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Gender</h4>
                    <mwc-select name="gender" id="gender" label="Select Gender" outlined required>
                      ${this._genders.map((e=>s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter E-mail Address</h4>
                    <mwc-textfield name="email" type="email" class="w-full" id="email" value="" label="Enter E-mail Address" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Phone Number</h4>
                    <mwc-textfield name="phone" type="tel" class="w-full" id="phone" value="" label="Enter Phone Number" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Leaders")}
                    <h4 class="font-semibold my-2">Add Leaders?</h4> 
                    <switch-input name="addLeaders" class="w-full" id="addLeaders" ?isSelected="${this.showLeadersForm}" label="Add Leaders?" outlined>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 Full Name</h4>
                    <mwc-textfield name="leader_1_name" id="leader_1_name" label="Leader 1 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 Contact</h4>
                    <mwc-textfield name="leader_1_contact" id="leader_1_contact" label="Leader 1 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 E-mail</h4>
                    <mwc-textfield name="leader_1_email" id="leader_1_email" label="Leader 1 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 Full Name</h4>
                    <mwc-textfield name="leader_2_name" id="leader_2_name" label="Leader 2 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 Contact</h4>
                    <mwc-textfield name="leader_2_contact" id="leader_2_contact" label="Leader 2 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 E-mail</h4>
                    <mwc-textfield name="leader_2_email" id="leader_2_email" label="Leader 2 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                    <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 Full Name</h4>
                    <mwc-textfield name="leader_3_name" id="leader_3_name" label="Leader 3 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 Contact</h4>
                    <mwc-textfield name="leader_3_contact" id="leader_3_contact" label="Leader 3 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 E-mail</h4>
                    <mwc-textfield name="leader_3_email" id="leader_3_email" label="Leader 3 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Set Password")}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Password</h4>
                    <mwc-textfield name="password" id="password" label="Enter Password" icon="lock" outlined type="password" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Confirm Password</h4>
                    <mwc-textfield name="confirm_password" id="confirm_password" label="Confirm Password" icon="lock" outlined type="password" required>
                    </mwc-textfield>
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Register" raised class="w-full" @click="${this.submitForm}">
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
    `}sectionSeparater(e){return s.html`
      <div class="col-md-12 col-lg-12 mt-6 mb-0">
        <div class="flex form-input-container items-center text-center">
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
          <label class="block font-bold text-sm text-gray-600 w-full my-0">
            ${e}
          </label>
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
        </div>
      </div>
    `}addLeadersAction(){const e=this;document.querySelectorAll('[name="addLeaders"]').forEach((t=>{t.addEventListener("click",(n=>{e.showLeadersForm=t.isSelected;const o=this.querySelectorAll("[show_leaders]"),i="hidden";e.showLeadersForm?o.forEach((e=>{e.classList.remove(i)})):o.forEach((e=>{e.classList.add(i)}))}))}))}firstUpdated(){(0,o.togglePswdVisibility)(),(0,o.togglePswdVisibility)("mwc-textfield"),document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e),"complete"==document.readyState&&this.accountCategoryChanged(e)},this.addLeadersAction()}accountCategoryChanged(e){document.querySelectorAll('mwc-select[name="accountCategory"]').forEach((e=>{e.onchange=t=>C(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_other_account_category]"),n="hidden";"-1000"===e.value?t.forEach((e=>{e.classList.remove(n)})):t.forEach((e=>{e.classList.add(n)}))}))}))}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>C(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),n=this.querySelectorAll("[show_state_province]"),o="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(o)})),n.forEach((e=>{e.classList.add(o)}))):(t.forEach((e=>{e.classList.add(o)})),n.forEach((e=>{e.classList.remove(o)})))}))}))}regionChanged(e){return C(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>C(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>C(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getGenders(){return C(this,void 0,void 0,(function*(){const e=yield(0,c.GET_GenericGender)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,l.GenericGenderInfo_S)(e))));const n=[];n.push(...this._genders,...t),this._genders=n}))}getClientSubscriptionMembershipSize(){return C(this,void 0,void 0,(function*(){const e=yield(0,a.GET_ClientSubsciptionMembershipSize)(null,"?client=0");let t=[];null===e?t.push({id:0,info:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>d.Convert.toClientSubscriptionMembershipSizeModel(JSON.stringify(e)))));const n=[];n.push(...this._membershipSizes,...t),this._membershipSizes=n}))}getLocationCountry(){return C(this,void 0,void 0,(function*(){const e=yield(0,y.GET_LocationCountry)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>u.Convert.toCountryModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._countries,...t),this._countries=n}))}getClientAccountCategory(){return C(this,void 0,void 0,(function*(){const e=yield(0,w.GET_ClientAccountCategory)();let t=[{category:"Select Account Type"}];if(null===e)t.push({id:0,category:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>b.Convert.toClientAccountCategoryModel(JSON.stringify(e))));n.push({category:"Other",id:-1e3}),t=[...t,...n]}const n=[];n.push(...this._accountCategories,...t),this._accountCategories=n}))}getLocationRegion(){return C(this,void 0,void 0,(function*(){const e=yield(0,f.GET_LocationRegion)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>m.Convert.toLocationRegionModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._regions,...t),this._regions=n}))}getLocationDistrict(e){return C(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),n=this._districtsMemo;if(t in n)setTimeout((()=>{const e=[];e.push(...this._districts,...n[t]),this._districts=e}),100);else{const n=yield(0,g.GET_LocationDistrictFilter)(e);let o=[{id:0,location:"Select District",regionId:null}];if(null===n)o.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===n.response.success&&"length"in n.response.data){const e=n.response.data.map((e=>h.Convert.toLocationDistrictModel(JSON.stringify(e))));o=[...o,...e],this._districtsMemo[t]=o}const i=[];i.push(...this._districts,...o),this._districts=i}}))}getLocationConstituency(e,t){return C(this,void 0,void 0,(function*(){this._constituencies=[];const n=`${e}_${t}`,o=this._constituenciesMemo;if(n in o)setTimeout((()=>{const e=[];e.push(...this._constituencies,...o[n]),this._constituencies=e}),100);else{const o=yield(0,v.GET_LocationConstituencyFilter)(e,t);let i=[{id:0,location:"Select Constituency",regionId:null}];if(null===o)i.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===o.response.success&&"length"in o.response.data){const e=o.response.data.map((e=>p.Convert.toLocationConstituencyModel(JSON.stringify(e))));i=[...i,...e],this._constituenciesMemo[n]=i}const s=[];s.push(...this._constituencies,...i),this._constituencies=s}}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,i.POST_ClientRegister)()}))}createRenderRoot(){return this}};A.styles=[s.css`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],_([(0,r.property)({type:Boolean}),S("design:type",Boolean)],A.prototype,"showLeadersForm",void 0),_([(0,r.property)({type:Boolean}),S("design:type",Boolean)],A.prototype,"regionCalled",void 0),_([(0,r.property)({type:Number}),S("design:type",Number)],A.prototype,"selectedRegion",void 0),_([(0,r.property)({type:Number}),S("design:type",Number)],A.prototype,"selectedDistrict",void 0),_([(0,r.property)({type:Array}),S("design:type",Array)],A.prototype,"_genders",void 0),_([(0,r.property)({type:Array}),S("design:type",Array)],A.prototype,"_countries",void 0),_([(0,r.property)({type:Array}),S("design:type",Array)],A.prototype,"_accountCategories",void 0),_([(0,r.property)({type:Array}),S("design:type",Array)],A.prototype,"_regions",void 0),_([(0,r.property)({type:Array}),S("design:type",Array)],A.prototype,"_districts",void 0),_([(0,r.property)({type:Array}),S("design:type",Array)],A.prototype,"_constituencies",void 0),_([(0,r.property)({type:Object}),S("design:type",Object)],A.prototype,"_constituenciesMemo",void 0),_([(0,r.property)({type:Object}),S("design:type",Object)],A.prototype,"_districtsMemo",void 0),_([(0,r.property)({type:Array}),S("design:type",Array)],A.prototype,"_membershipSizes",void 0),A=_([(0,r.customElement)("pdb-register-form"),S("design:paramtypes",[])],A)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_addons_widgets_form_new_select_ts","src_assets_styles_views_admin_register_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_location_constitu-cd9ab3","shared"],(()=>(1082,e(e.s=1082)))),e.O())])));
//# sourceMappingURL=register.js.map