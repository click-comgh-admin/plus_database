"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_https_download_ts-src_addons_network_members_groupings_group_index_ts-sr-88a95f"],{84003:(e,t,o)=>{o.r(t)},78276:(e,t,o)=>{o.r(t),o.d(t,{http_download:()=>i});var n=o(67153),r=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function c(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))};function i(e,t,o=!0){return r(this,void 0,void 0,(function*(){let i=null;t=null==t?{method:"GET"}:t;var s=new Headers;if(s.append("Access-Control-Allow-Origin","*/*"),s.append("Accept","application/json, text/plain, */*"),o&&s.append("Content-Type","application/json"),void 0===t.headers)t.headers=s;else for(const e of s.keys())t.headers[e]=s.get(e);return t.mode="cors",t.redirect="follow",yield(0,n.default)(e,t,3e5).then((e=>(i=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>r(this,void 0,void 0,(function*(){return{blobData:204===e.status?null:yield e.blob(),response:e,error:""}})))).then((e=>r(this,void 0,void 0,(function*(){if(null!==e.blobData){const t=document.createElement("a");t.href=window.URL.createObjectURL(e.blobData),t.download=e.response.headers.get("Content-Disposition").split(";")[1].split("=")[1],t.click()}return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},2892:(e,t,o)=>{o.r(t),o.d(t,{GET_MemberGroupingsGroups:()=>c});var n=o(48485),r=o(87270),i=o(14492),s=o(33600);function c(e=null,t=""){return o=this,c=void 0,a=function*(){const o=(0,s.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(c,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{i(a.next(e))}catch(e){t(e)}}function r(e){try{i(a.throw(e))}catch(e){t(e)}}function i(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(n,r)}i((a=a.apply(o,c||[])).next())}));var o,c,l,a}},89605:(e,t,o)=>{o.r(t),o.d(t,{GET_MemberGroupingsSubGroups:()=>c});var n=o(48485),r=o(87270),i=o(14492),s=o(33600);function c(e=null,t=""){return o=this,c=void 0,a=function*(){const o=(0,s.getUserLoginInfoCookie)(),c=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,l=yield(0,r.http)(c,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new i.NetWorkCallResponses("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{i(a.next(e))}catch(e){t(e)}}function r(e){try{i(a.throw(e))}catch(e){t(e)}}function i(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(n,r)}i((a=a.apply(o,c||[])).next())}));var o,c,l,a}},7449:(e,t,o)=>{o.r(t),o.d(t,{DELETE_MembershipUsers:()=>d});var n=o(86455),r=o.n(n),i=o(48485),s=o(87270),c=o(14492),l=o(8967),a=o(33600),u=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function c(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))};function d(e){return u(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),o=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/"+e,n={};return r().fire({title:"Remove Member?",text:"Member will be permanently deleted from your member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,s.http)(o,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let o=e;o.error=t;const n=new c.NetWorkCallResponses("delete",o,!0);return n.postForm,n}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),o=n.response.success}r().fire({title:t,icon:o?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},72729:(e,t,o)=>{o.r(t),o.d(t,{DELETE_MembershipUsersBulk:()=>d});var n=o(86455),r=o.n(n),i=o(48485),s=o(87270),c=o(14492),l=o(8967),a=o(33600),u=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(e){i(e)}}function c(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,c)}l((n=n.apply(e,t||[])).next())}))};function d(e){return u(this,void 0,void 0,(function*(){const t=(0,a.getUserLoginInfoCookie)(),o=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/delete-bulk",n={memberIds:e};return r().fire({title:"Delete Members?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,s.http)(o,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!0,!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),o=t.response;if(null!==o&&"nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let o=e;o.error=t;const n=new c.NetWorkCallResponses("delete",o,!0);return n.postForm,n}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",o=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),o=n.response.success}r().fire({title:t,icon:o?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},32653:(e,t,o)=>{o.r(t),o.d(t,{AppAccordionItem:()=>c});var n=o(85862),r=o(59662),i=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends n.LitElement{constructor(){super(),this.accordion_class_name="-",this.buttonHtml=n.html``,this.contentHtml=n.html``}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return n.html`
      <button type="button" class="app-accordion app-accordion-button app-accordion-${this.accordion_class_name}">
        <div class="flex justify-between">${this.buttonHtml} <span style="transform: rotate(180deg);">^</span></div>
      </button>
      <div class="app-accordion-panel">${this.contentHtml}</div>
    `}firstUpdated(){}createRenderRoot(){return this}};c.styles=[n.css`
   :host { display: block; }
  `],i([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"accordion_class_name",void 0),i([(0,r.property)({type:String}),s("design:type",Object)],c.prototype,"buttonHtml",void 0),i([(0,r.property)({type:String}),s("design:type",Object)],c.prototype,"contentHtml",void 0),c=i([(0,r.customElement)("app-accordion-item"),s("design:paramtypes",[])],c)},86330:(e,t,o)=>{o.r(t),o.d(t,{Appaccordion:()=>l}),o(84003);var n,r=o(85862),i=o(59662),s=(o(32653),function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),this.accordionName="app-accordion",this.contents=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return r.html`<div class="my-2 w-100">
      ${this.contents.map((e=>r.html`${e}`))}
    </div>`}firstUpdated(){setTimeout((()=>{"complete"==document.readyState&&this.toggler()}),1e3)}toggler(){var e,t=document.getElementsByClassName(`app-accordion-${this.accordionName}`);for(console.log({acc:t}),e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("app-accordion-active");var e=this.nextElementSibling;console.log({"this.classList":this.classList,panel:e}),e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}get items(){return r.html``}createRenderRoot(){return this}};l.styles=[r.css`
   :host { display: block; }
  `],s([(0,i.property)({type:String}),c("design:type",String)],l.prototype,"accordionName",void 0),s([(0,i.property)({type:Array}),c("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],l.prototype,"contents",void 0),l=s([(0,i.customElement)("app-accordion"),c("design:paramtypes",[])],l)},38281:(e,t,o)=>{o.r(t),o.d(t,{UserProfilePhoto:()=>l});var n=o(48485),r=o(85862),i=o(59662),s=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return r.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};l.styles=[r.css`
   :host { display: block; }
  `],s([(0,i.property)({type:String}),c("design:type",String)],l.prototype,"url",void 0),s([(0,i.property)({type:String}),c("design:type",String)],l.prototype,"type",void 0),s([(0,i.property)({type:Boolean}),c("design:type",Boolean)],l.prototype,"rounded",void 0),s([(0,i.property)({type:String}),c("design:type",String)],l.prototype,"click-to-open",void 0),s([(0,i.property)({type:Number}),c("design:type",Number)],l.prototype,"size",void 0),l=s([(0,i.customElement)("user-profile-photo"),c("design:paramtypes",[])],l)},19981:(e,t,o)=>{o.r(t),o.d(t,{PAGE__IDS:()=>n});const n={view:21,edit:22,create:23,"view-organization":53,"edit-organization":54}}}]);
//# sourceMappingURL=src_addons_functions_https_download_ts-src_addons_network_members_groupings_group_index_ts-sr-88a95f.js.map