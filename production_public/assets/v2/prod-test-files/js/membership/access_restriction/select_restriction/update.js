/*! For license information please see update.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1615],{8967:(e,t,n)=>{n.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,n)=>{n.d(t,{Jx:()=>s,O1:()=>o,Vc:()=>r,W3:()=>i});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},s=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},r=e=>new URLSearchParams(window.location.search).getAll(e),i=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},2813:(e,t,n)=>{n.d(t,{e:()=>o});class o{static toMembershipUserModel(e){return i(JSON.parse(e),l("MembershipUserModel"),s)}static membershipUserModelToJson(e){return JSON.stringify(i(e,l("MembershipUserModel"),r),null,2)}}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function r(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return i(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const s={};return Object.getOwnPropertyNames(e).forEach((t=>{const r=e[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[r.key]=i(a,r.typ,n,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)||(s[r]=i(o[r],t,n,r))})),s}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function l(e){return{ref:e}}const c={MembershipUserModel:(d=[{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"firstname",js:"firstname",typ:a(null,"")},{json:"middlename",js:"middlename",typ:a(null,"")},{json:"surname",js:"surname",typ:a(null,"")},{json:"gender",js:"gender",typ:a(null,0)},{json:"profilePicture",js:"profilePicture",typ:a(null,"")},{json:"phone",js:"phone",typ:a(null,"")},{json:"email",js:"email",typ:a(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:a(null,Date)},{json:"religion",js:"religion",typ:a(null,0)},{json:"nationality",js:"nationality",typ:a(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:a(null,"")},{json:"stateProvince",js:"stateProvince",typ:a(null,"")},{json:"region",js:"region",typ:a(null,0)},{json:"district",js:"district",typ:a(null,0)},{json:"constituency",js:"constituency",typ:a(null,0)},{json:"electoralArea",js:"electoralArea",typ:a(null,0)},{json:"community",js:"community",typ:a(null,"")},{json:"hometown",js:"hometown",typ:a(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:a(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:a(null,"")},{json:"level",js:"level",typ:a(null,0)},{json:"status",js:"status",typ:a(null,0)},{json:"accountType",js:"accountType",typ:a(null,0)},{json:"memberType",js:"memberType",typ:a(null,0)},{json:"date",js:"date",typ:a(null,Date)},{json:"last_login",js:"lastLogin",typ:a(null,Date)},{json:"referenceId",js:"referenceID",typ:a(null,"")},{json:"branchId",js:"branchID",typ:a(null,0)},{json:"editable",js:"editable",typ:a(null,!0)},{json:"profileResume",js:"profileResume",typ:a(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:a(null,"")},{json:"archived",js:"archived",typ:a(null,!0)},{json:"identification",js:"identification",typ:a(null,"")}],!1,{props:d,additional:false})};var d},8530:(e,t,n)=>{n.d(t,{e:()=>o});class o{static toMembershipOrganizationUserModel(e){return a(JSON.parse(e),d("MembershipOrganizationUserModel"),r)}static membershipOrganizationUserModelToJson(e){return JSON.stringify(a(e,d("MembershipOrganizationUserModel"),i),null,2)}}function s(e,t,n=""){n&&console.log(`Invalid value for key "${n}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`),console.log(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:s(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let s=0;s<o;s++){const o=e[s];try{return a(t,o,n)}catch(e){}}return s(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>a(t,e,n))):s("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return s("object",o);const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[s.key]=a(i,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=a(o[s],t,n,s))})),r}(n(t),t.additional,e):s(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?s("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:s(e,t,o)}(t,e)}}function l(...e){return{unionMembers:e}}function c(e,t){return{props:e,additional:t}}function d(e){return{ref:e}}const u={MembershipOrganizationUserModel:c([{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"organizationName",js:"organizationName",typ:l(null,"")},{json:"contactPersonName",js:"contactPersonName",typ:l(null,"")},{json:"organizationType",js:"organizationType",typ:l(null,d("OrganizationType"))},{json:"businessRegistered",js:"businessRegistered",typ:l(null,!0)},{json:"organizationPhone",js:"organizationPhone",typ:l(null,"")},{json:"organizationEmail",js:"organizationEmail",typ:l(null,"")},{json:"contactPersonGender",js:"contactPersonGender",typ:l(null,0)},{json:"contactPersonPhoto",js:"contactPersonPhoto",typ:l(null,"")},{json:"dateOfIncorporation",js:"dateOfIncorporation",typ:l(null,Date)},{json:"logo",js:"logo",typ:l(null,"")},{json:"contactPersonPhone",js:"contactPersonPhone",typ:l(null,"")},{json:"contactPersonEmail",js:"contactPersonEmail",typ:l(null,"")},{json:"countryOfBusiness",js:"countryOfBusiness",typ:l(null,"")},{json:"stateProvince",js:"stateProvince",typ:l(null,"")},{json:"region",js:"region",typ:l(null,0)},{json:"district",js:"district",typ:l(null,0)},{json:"constituency",js:"constituency",typ:l(null,0)},{json:"electoralArea",js:"electoralArea",typ:l(null,0)},{json:"community",js:"community",typ:l(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:l(null,"")},{json:"level",js:"level",typ:l(null,0)},{json:"status",js:"status",typ:l(null,0)},{json:"accountType",js:"accountType",typ:l(null,0)},{json:"memberType",js:"memberType",typ:l(null,0)},{json:"date",js:"date",typ:l(null,Date)},{json:"last_login",js:"lastLogin",typ:l(null,Date)},{json:"referenceId",js:"referenceID",typ:l(null,"")},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"certificates",js:"certificates",typ:l(null,(p=d("Certificate"),{arrayItems:p}))}],!1),Certificate:c([{json:"id",js:"id",typ:l(null,0)},{json:"memberId",js:"memberID",typ:l(null,0)},{json:"attachment",js:"attachment",typ:l(null,d("Attachment"))},{json:"date",js:"date",typ:l(null,Date)}],!1),Attachment:c([{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"attachment",js:"attachment",typ:l(null,"")},{json:"filename",js:"filename",typ:l(null,"")},{json:"source",js:"source",typ:l(null,"")},{json:"size",js:"size",typ:l(null,"")},{json:"folderId",js:"folderID",typ:l(null,d("FolderID"))},{json:"fileDescription",js:"fileDescription",typ:l(null,"")},{json:"createdBy",js:"createdBy",typ:l(null,0)},{json:"updatedBy",js:"updatedBy",typ:l(null,0)},{json:"updateDate",js:"updateDate",typ:l(null,Date)},{json:"archived",js:"archived",typ:l(null,!0)},{json:"archivedBy",js:"archivedBy",typ:l(null,0)},{json:"archivedDate",js:"archivedDate",typ:l(null,Date)},{json:"date",js:"date",typ:l(null,Date)}],!1),FolderID:c([{json:"id",js:"id",typ:l(null,0)},{json:"parentFolder",js:"parentFolder",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"folder",js:"folder",typ:l(null,"")},{json:"folderType",js:"folderType",typ:l(null,0)},{json:"createdBy",js:"createdBy",typ:l(null,0)},{json:"updatedBy",js:"updatedBy",typ:l(null,0)},{json:"updateDate",js:"updateDate",typ:l(null,Date)},{json:"date",js:"date",typ:l(null,Date)}],!1),OrganizationType:c([{json:"id",js:"id",typ:l(null,0)},{json:"memberId",js:"memberID",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"type",js:"type",typ:l(null,"")},{json:"createdBy",js:"createdBy",typ:l(null,0)},{json:"updatedBy",js:"updatedBy",typ:l(null,0)},{json:"updateDate",js:"updateDate",typ:l(null,Date)},{json:"date",js:"date",typ:l(null,Date)}],!1)};var p},6224:(e,t,n)=>{n.d(t,{p:()=>a});var o=n(771),s=n(7270),r=n(596),i=n(3600);function a(e=null){return t=this,n=void 0,l=function*(){const t=(0,i.Ie)(),n=o.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,s.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function s(e){try{i(l.next(e))}catch(e){o(e)}}function r(e){try{i(l.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(s,r)}i((l=l.apply(t,n||[])).next())}));var t,n,a,l}},72:(e,t,n)=>{n.d(t,{L:()=>a});var o=n(771),s=n(7270),r=n(596),i=n(3600);function a(e=null){return t=this,n=void 0,l=function*(){const t=(0,i.Ie)(),n=o.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),a=yield(0,s.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new r.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function s(e){try{i(l.next(e))}catch(e){o(e)}}function r(e){try{i(l.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(s,r)}i((l=l.apply(t,n||[])).next())}));var t,n,a,l}},6490:(e,t,n)=>{n.d(t,{G:()=>a});var o=n(771),s=n(7270),r=n(596),i=n(3600);function a(e=null,t=""){return n=this,a=void 0,c=function*(){const n=(0,i.Ie)(),a=o.t.URLS.AKWAABA_API_BASE_URL+"members/access/restriction"+(null===e?"":"/"+e)+t,l=yield(0,s.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function o(e){try{r(c.next(e))}catch(e){t(e)}}function s(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(o,s)}r((c=c.apply(n,a||[])).next())}));var n,a,l,c}},8763:(e,t,n)=>{var o=n(5862),s=n(8393),r=function(e,t,n,o){var s,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?o.dy`
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
      `:o.dy`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?o.dy`<header class="header">${this.header}</header>`:o.Ld}
              ${null!==this.content?o.dy`<main class="main">${this.content}</main>`:o.Ld}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?o.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?o.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?o.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?o.dy`<mwc-icon>warning</mwc-icon>`:this.danger?o.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?o.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?o.dy`<mwc-icon>star_outline</mwc-icon>`:o.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};a.styles=[o.iv`
   :host { display: block; }
  `],r([(0,s.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"loading",void 0),r([(0,s.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"success",void 0),r([(0,s.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"info",void 0),r([(0,s.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"warning",void 0),r([(0,s.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"danger",void 0),r([(0,s.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"default",void 0),r([(0,s.Cb)({type:Boolean}),i("design:type",Boolean)],a.prototype,"primary",void 0),r([(0,s.Cb)({type:String}),i("design:type",String)],a.prototype,"extra_class",void 0),a=r([(0,s.Mo)("alert-card"),i("design:paramtypes",[])],a)},5866:(e,t,n)=>{var o=n(9755),s=n(5862),r=n(8393),i=(n(686),function(e,t,n,o){var s,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends s.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=o(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const o=e.id;n=t===o})),e.selected=n,e}))}render(){return this.multiple?this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:o(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,o(".select2-search__field").on("keyup",(function(e){o(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{o(e).select2({closeOnSelect:!1,placeholder:this.label}),o(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let s={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)s[e]=this.ajaxHeader[e];this.selectSelector.forEach((r=>{o(r).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(s){const r=function(s,r){return n=isNaN(s.page)?0:s.page,n=0===n?n:n*t,o(".select2-search__field").on("keyup",(function(s){o(e.selectSelector).empty(),n=0,t=0})),n}(s),i=function(n,s){let r=isNaN(n.page)?1:n.page+1;return r=0===r?1:r,o(".select2-search__field").on("keyup",(function(n){o(e.selectSelector).empty(),r=0,t=0})),r}(s);let a={search:s.term,start:r,page:i};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:s,processResults:(e,n)=>{const o=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=o.results.length,{results:o.results,pagination:{more:t<o.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let o=[];if(!1===n.error){var s=n.data;for(let e=0;e<s.length;e++){const t=s[e],n={id:t.id,text:t.fullName};o.includes(n)||o.push(n)}}return this.totalShowing+=o.length,{results:o,total:n.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let n=[];for(const e of t){let t=e;const o=Number.isNaN(t.value)?0:Number(t.value);n.includes(o)||n.push(o)}this.currentValue=n,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",n)}createRenderRoot(){return this}};l.styles=[s.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],i([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),i([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),i([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),i([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),i([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),i([(0,r.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),i([(0,r.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),i([(0,r.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),i([(0,r.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),i([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),i([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),i([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),i([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),i([(0,r.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),i([(0,r.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=i([(0,r.Mo)("select-input")],l)},8077:(e,t,n)=>{n.d(t,{W:()=>o});const o={view:55}},2597:(e,t,n)=>{n.r(t),n.d(t,{MembershipAccessRestrictionUpdate:()=>I});var o=n(5862),s=n(8393),r=(n(1239),n(9261),n(5248),n(3313),n(6811),n(5866),n(8763),n(3600)),i=n(2004),a=n(6224),l=n(72),c=n(771),d=n(2813),u=n(8530),p=n(7052),y=n(4672),h=n(6490),m=n(6455),f=n.n(m),j=n(7270),g=n(596),b=n(8967),v=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((o=o.apply(e,t||[])).next())}))};n(3683),n(4657);var w=n(5474),S=n(2145),A=n(1302),_=n(8077),O=function(e,t,n,o){var s,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,n,o){return new(n||(n=Promise))((function(s,r){function i(e){try{l(o.next(e))}catch(e){r(e)}}function a(e){try{l(o.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((o=o.apply(e,t||[])).next())}))};let I=class extends o.oi{constructor(){super(),this.restrictionId=0,this.restrictionCalled=!1,this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._restriction=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,w.f)().then((()=>this._hasSetup=!0));const t=(0,i.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,r.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getRestrictionId(),yield this.getBranches(),yield this.getRestriction(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,S.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(!(0,A.H)({pageId:_.W.view,viewType:"Edit"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}let t=0;if(null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),!1===this.restrictionCalled)return o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(this._restriction.length<1)return o.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Access Restriction </span>: not found!</h4>
          </div>
        </div>
      `;const n=o.dy`<h4 class="text-dark">Access Restriction</h4>`,s=o.dy`<div>
      <h1 class="text-dark mb-2 text-xl">${this._restriction[0].restriction}</h1>
    </div>`;return o.dy`
      <div class="mb-2">
        <alert-card info .header="${n}" .content="${s}"></alert-card>
      </div>
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New User Access Restriction Assignment(s)</h1>
                  <h3 class="h3">Assignment User Access Restriction!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="access-restriction-bulk-assignment" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Account Type</h4>
                    <mwc-select class="w-full" label="Select Account Type"
                      name="accountType" id="accountType" @change="${this.accountTypeChange}"
                      outlined required>
                      <mwc-list-item value="0" selected>Select Account Type</mwc-list-item>
                      <mwc-list-item value="1">User Account </mwc-list-item>
                      <mwc-list-item value="2">Organization Account</mwc-list-item>
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                      name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                      ${1===t?o.dy`
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>t===e.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                      `:o.dy`
                        ${this._branches.map((e=>{if(e.id===t)return o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      `}
                    </mwc-select>
                  </div>
                  <div class="col-md-12 col-lg-12">
                    ${this.memberListField}
                    <input type="hidden" name="restrictionId" value="${this.restrictionId}" />
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Assign" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    ...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}branchChange(e){const t=this.accountType;this.accountType=0,this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value),setTimeout((()=>{this.accountType=t}),500)}accountTypeChange(e){this.accountType=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}get memberListField(){return 0===Number(this.accountType)?"...":1===Number(this.accountType)?this.individualMemberList:this.organizationMemberList}get individualMemberList(){this.startSearchPage=0;let e={};const t=(0,r.Ie)();return e.Authorization="Token "+t.token,o.dy`
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${function(e,t){var n;t.page=t.page||0;const o=e.count,s=e.results,r=document.querySelector('[id="memberIds"]');let i=[];if(o>0){var a=s;for(let e=0;e<a.length;e++){const t=a[e],o=d.e.toMembershipUserModel(JSON.stringify(t)),s={id:o.id,text:`${o.firstname} ${null!==(n=o.middlename)&&void 0!==n?n:""} ${o.surname}`};i.includes(s)||i.push(s)}}return{results:i,total:o,totalShowing:r.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${c.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
    `}get organizationMemberList(){this.startSearchPage=0;let e={};const t=(0,r.Ie)();return e.Authorization="Token "+t.token,o.dy`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const n=e.count,o=e.results,s=document.querySelector('[id="memberIds"]');let r=[];if(n>0){var i=o;for(let e=0;e<i.length;e++){const t=i[e],n=u.e.toMembershipOrganizationUserModel(JSON.stringify(t)),o={id:n.id,text:`${n.organizationName}`};r.includes(o)||r.push(o)}}return{results:r,total:n,totalShowing:s.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${c.t.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranch)}]}firstUpdated(){}getRestrictionId(){let e=(0,y.Jx)("view-restriction"),t=null!==e?(0,p.t)(e):null;this.restrictionId=Number.isNaN(t)?null:Number(t)}getBranches(){return x(this,void 0,void 0,(function*(){const e=yield(0,a.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getRestriction(){return x(this,void 0,void 0,(function*(){const e=yield(0,h.G)(this.restrictionId);if(this.restrictionCalled=!0,null===e)this._restriction=[];else if(e.response.success&&"restriction"in e.response.data){const t=e.response.data;this._restriction=[t]}else this._restriction=[]}))}getClientMemberCategories(){return x(this,void 0,void 0,(function*(){const e=yield(0,l.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}submitForm(e){return x(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return v(this,void 0,void 0,(function*(){const e=(0,r.Ie)(),t=c.t.URLS.AKWAABA_API_BASE_URL+"members/access/assignment/bulk",n=document.querySelector('[make-general-posts="access-restriction-bulk-assignment"]'),o=new FormData(n);return f().fire({title:"Assign Members to selected current restriction?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>v(this,void 0,void 0,(function*(){return yield(0,j.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new g.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,b.T)(e);f().showValidationMessage(`${t}`)}return t})).catch((e=>{f().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!f().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&f().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};I.styles=[o.iv`
   :host { display: block; }
  `],O([(0,s.Cb)({type:Number}),P("design:type",Number)],I.prototype,"restrictionId",void 0),O([(0,s.Cb)({type:Boolean}),P("design:type",Boolean)],I.prototype,"restrictionCalled",void 0),O([(0,s.Cb)({type:Number}),P("design:type",Number)],I.prototype,"startSearchPage",void 0),O([(0,s.Cb)({type:Number}),P("design:type",Number)],I.prototype,"accountType",void 0),O([(0,s.Cb)({type:Number}),P("design:type",Number)],I.prototype,"selectedBranch",void 0),O([(0,s.Cb)({type:Array}),P("design:type",Array)],I.prototype,"_userLoginInfo",void 0),O([(0,s.Cb)({type:Array}),P("design:type",Array)],I.prototype,"_activeBranchId",void 0),O([(0,s.Cb)({type:Array}),P("design:type",Array)],I.prototype,"_memberCategories",void 0),O([(0,s.Cb)({type:Array}),P("design:type",Array)],I.prototype,"_branches",void 0),O([(0,s.Cb)({type:Array}),P("design:type",Array)],I.prototype,"_restriction",void 0),O([(0,s.Cb)({type:Boolean}),P("design:type",Boolean)],I.prototype,"_hasSetup",void 0),I=O([(0,s.Mo)("membership-access_restriction-update"),P("design:paramtypes",[])],I)},4232:(e,t,n)=>{n.d(t,{OR:()=>i,hl:()=>l,pt:()=>r});var o=n(3692);const{I:s}=o.Al,r=e=>null===e||"object"!=typeof e&&"function"!=typeof e,i=e=>void 0===e.strings,a={},l=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{XM:()=>o.XM,Xe:()=>o.Xe,pX:()=>o.pX});var o=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>i});var o=n(3692),s=n(875),r=n(4232);const i=(0,s.XM)(class extends s.Xe{constructor(e){if(super(e),e.type!==s.pX.PROPERTY&&e.type!==s.pX.ATTRIBUTE&&e.type!==s.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===o.Jb||t===o.Ld)return t;const n=e.element,i=e.name;if(e.type===s.pX.PROPERTY){if(t===n[i])return o.Jb}else if(e.type===s.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return o.Jb}else if(e.type===s.pX.ATTRIBUTE&&n.getAttribute(i)===t+"")return o.Jb;return(0,r.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,7154,1080,5291,6236,7583,6258,3712],(()=>(2597,e(e.s=2597)))),e.O())])));
//# sourceMappingURL=update.js.map