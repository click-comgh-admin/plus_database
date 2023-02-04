"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_https_download_ts-src_addons_network_members_groupings_group_index_ts-sr-eb610f"],{78276:(e,t,o)=>{o.r(t),o.d(t,{http_download:()=>i});var n=o(67153),r=function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function l(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,l)}c((n=n.apply(e,t||[])).next())}))};function i(e,t,o=!0){return r(this,void 0,void 0,(function*(){let i=null;t=null==t?{method:"GET"}:t;var s=new Headers;if(s.append("Access-Control-Allow-Origin","*/*"),s.append("Accept","application/json, text/plain, */*"),o&&s.append("Content-Type","application/json"),void 0===t.headers)t.headers=s;else for(const e of s.keys())t.headers[e]=s.get(e);return t.mode="cors",t.redirect="follow",yield(0,n.default)(e,t,3e5).then((e=>(i=e,e.status>=200&&e.status,Promise.resolve(e)))).then((e=>r(this,void 0,void 0,(function*(){return{blobData:204===e.status?null:yield e.blob(),response:e,error:""}})))).then((e=>r(this,void 0,void 0,(function*(){if(null!==e.blobData){const t=document.createElement("a");t.href=window.URL.createObjectURL(e.blobData),t.download=e.response.headers.get("Content-Disposition").split(";")[1].split("=")[1],t.click()}return e})))).catch((function(e){throw console.error("Request failed",e),e}))}))}},2892:(e,t,o)=>{o.r(t),o.d(t,{GET_MemberGroupingsGroups:()=>l});var n=o(48485),r=o(87270),i=o(14492),s=o(33600);function l(e=null,t=""){return o=this,l=void 0,u=function*(){const o=(0,s.getUserLoginInfoCookie)(),l=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(l,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{i(u.next(e))}catch(e){t(e)}}function r(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){var o;t.done?e(t.value):(o=t.value,o instanceof c?o:new c((function(e){e(o)}))).then(n,r)}i((u=u.apply(o,l||[])).next())}));var o,l,c,u}},89605:(e,t,o)=>{o.r(t),o.d(t,{GET_MemberGroupingsSubGroups:()=>l});var n=o(48485),r=o(87270),i=o(14492),s=o(33600);function l(e=null,t=""){return o=this,l=void 0,u=function*(){const o=(0,s.getUserLoginInfoCookie)(),l=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(l,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{i(u.next(e))}catch(e){t(e)}}function r(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){var o;t.done?e(t.value):(o=t.value,o instanceof c?o:new c((function(e){e(o)}))).then(n,r)}i((u=u.apply(o,l||[])).next())}));var o,l,c,u}},38281:(e,t,o)=>{o.r(t),o.d(t,{UserProfilePhoto:()=>c});var n=o(48485),r=o(85862),i=o(59662),s=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return r.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],s([(0,i.property)({type:String}),l("design:type",String)],c.prototype,"url",void 0),s([(0,i.property)({type:String}),l("design:type",String)],c.prototype,"type",void 0),s([(0,i.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"rounded",void 0),s([(0,i.property)({type:String}),l("design:type",String)],c.prototype,"click-to-open",void 0),s([(0,i.property)({type:Number}),l("design:type",Number)],c.prototype,"size",void 0),c=s([(0,i.customElement)("user-profile-photo"),l("design:paramtypes",[])],c)},19981:(e,t,o)=>{o.r(t),o.d(t,{PAGE__IDS:()=>n});const n={view:21,edit:22,create:23,"view-organization":53,"edit-organization":54}}}]);
//# sourceMappingURL=src_addons_functions_https_download_ts-src_addons_network_members_groupings_group_index_ts-sr-eb610f.js.map