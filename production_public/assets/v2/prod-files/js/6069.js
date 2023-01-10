"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6069],{2145:(t,e,n)=>{n.d(e,{H:()=>w,g:()=>S});var o=n(1942);class r{static toEASExpirationDateInterface(t){return a(JSON.parse(t),l("EASExpirationDateInterface"),i)}static eASExpirationDateInterfaceToJson(t){return JSON.stringify(a(t,l("EASExpirationDateInterface"),s),null,2)}}function i(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function s(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function a(t,e,n,o=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=u[e.ref];return Array.isArray(e)?function(t,e){if(-1!==t.indexOf(e))return e}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const o=t.length;for(let r=0;r<o;r++){const o=t[r];try{return a(e,o,n)}catch(t){}}}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){if(Array.isArray(e))return e.map((e=>a(e,t,n)))}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(t).forEach((e=>{const i=t[e],s=Object.prototype.hasOwnProperty.call(o,e)?o[e]:void 0;r[i.key]=a(s,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(t,i)||(r[i]=a(o[i],e,n,i))})),r}(n(e),e.additional,t):void 0:e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?void 0:e}(t):function(t,e){if(typeof t==typeof e)return e}(e,t)}}function c(...t){return{unionMembers:t}}function l(t){return{ref:t}}const u={EASExpirationDateInterface:(d=[{json:"expiration",js:"expiration",typ:c(null,Date)},{json:"expired",js:"expired",typ:c(null,!0)},{json:"entryDate",js:"entryDate",typ:c(null,Date)}],!1,{props:d,additional:false})};var d,p=n(2229),f=n(7052),y=n(979),h=n(4805);const g=(t,e)=>{const n=null==t?new Date:t,o=null==e?new Date:e;return(n.getTime()-o.getTime())/36e5};var m=n(2506),b=n(3600),v=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))};const j="app-settings-extra_settings",O=new class{constructor(){this.get_storage_item=t=>void 0!==typeof Storage?localStorage.getItem(t):(0,o.Hl)(t),this.set_storage_item=(t,e,n,r)=>{void 0!==typeof Storage?localStorage.setItem(t,e):(0,o.Ad)(t,e,n,r)},this.remove_storage_item=t=>{void 0!==typeof Storage?localStorage.removeItem(t):(0,o.Ad)(t,"",-1)}}},S=(t=!1)=>v(void 0,void 0,void 0,(function*(){const e=()=>v(void 0,void 0,void 0,(function*(){const t=yield v(void 0,void 0,void 0,(function*(){const t=yield(0,y.E)();return null!==t&&t.response.success&&"statistics"in t.response.data?h.e.toClientUserDashboardMetricModel(JSON.stringify(t.response.data)):null})),e=yield v(void 0,void 0,void 0,(function*(){const t=(0,b.Ie)().user.id,e=yield(0,m.H)(null,"?userId="+t);return null!==e&&e.response.success&&Array.isArray(e.response.data)?e.response.data.map((t=>p.e.toClientUserPageAccessModel(JSON.stringify(t)))):null})),n=null===t?null:t.expirationDate;(t=>{const e=JSON.stringify(t);O.remove_storage_item(j),O.set_storage_item(j,(0,f.h)(e),3500)})({expiration_date:{entryDate:new Date,expiration:n,expired:g(n,new Date)<24},user_access:e})}));if(t)O.remove_storage_item(j),yield e();else{const t=w();(null===t||((t,e,n=60)=>g(t,e)*n)(new Date,null==t?void 0:t.expiration_date.entryDate)>15)&&(yield e())}})),w=()=>{const t=O.get_storage_item(j);if(""===t||null===t)return null;{const t=(0,f.t)(O.get_storage_item(j)),n=(e=JSON.parse(t),console.log({"ExtraAppSettings_S-data":e}),{user_access:("user_access"in e?e.user_access:[]).map((t=>p.e.toClientUserPageAccessModel(JSON.stringify(t)))),expiration_date:r.toEASExpirationDateInterface(JSON.stringify(e.expiration_date))});return n.expiration_date.expired=g(n.expiration_date.expiration,new Date)<24,n}var e}},1302:(t,e,n)=>{n.d(e,{H:()=>i,n4:()=>o});var o,r=n(2145);!function(t){t[t.Restricted=0]="Restricted",t[t.Unlimited=1]="Unlimited",t[t["Edit Only"]=2]="Edit Only",t[t["View Only"]=3]="View Only"}(o||(o={}));const i=(t,e=!1)=>{const n=(0,r.H)(),i=t.pageId,s=t.viewType;if(e)return!0;let a=!1;return null==n||n.user_access.forEach((t=>{if(t.pageId.id===i&&t.isUnlimited.name in o)switch(t.isUnlimited.name){case o[0]:a=!1;break;case o[1]:a=!0;break;case o[2]:"Edit"!==s&&"Both"!==s||(a=!0);break;case o[3]:"View"!==s&&"Both"!==s||(a=!0)}})),a}},9665:(t,e,n)=>{n.d(e,{f:()=>c}),n(9774);var o=n(3600),r=n(771),i=n(2004),s=n(2145);const a=t=>{var e;null===(e=null==t?void 0:t.user_access)||void 0===e||e.forEach((t=>{if(23===t.pageId.id){const t="[registration_menu_selector]";document.querySelectorAll(t).forEach((t=>{t.innerHTML=`\n          <a href="${r.t.URLS.REGISTRATION_BASE_URL}" target="_blank" mm-active="register-member">\n            <i class="metismenu-icon"></i> Registration Form\n          </a>\n        `}))}}))};const c=()=>{return t=void 0,e=void 0,c=function*(){(()=>{null===(0,o.Ie)()&&(window.location.href=r.t.URLS.LOGIN_PAGE_BASE_URL);const t="[logout_button_selector]";document.querySelectorAll(t).forEach((t=>{t.innerHTML='<a href="#" type="button" tabindex="0" class="dropdown-item ">Logout</a>'})),document.querySelectorAll(t).forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),(0,o.y4)(),(0,i.U8)(),setTimeout((()=>{window.location.href=r.t.URLS.LOGIN_PAGE_BASE_URL}),50)}))}))})(),(()=>{if(1===(0,o.Ie)().user.branchId){const t="[branch_button_selector]";document.querySelectorAll(t).forEach((t=>{t.innerHTML="<pdb-branch-button></pdb-branch-button>"}))}})(),yield(0,s.g)().then((()=>(()=>{(()=>{const t=document.querySelectorAll("[mm-active]"),e=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];t.forEach((t=>{var n=t.getAttribute("mm-active").split("|");for(let o=0;o<n.length;o++){const r=n[o];e===r&&t.setAttribute("class","mm-active")}}))})();const t=(0,s.H)();a(t)})()))},new((n=void 0)||(n=Promise))((function(o,r){function i(t){try{a(c.next(t))}catch(t){r(t)}}function s(t){try{a(c.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,s)}a((c=c.apply(t,e||[])).next())}));var t,e,n,c}},1981:(t,e,n)=>{n.d(e,{R:()=>o});const o=(t,e)=>!0===navigator.onLine?t("online"):e("offline")},2004:(t,e,n)=>{n.d(e,{hk:()=>c,U8:()=>a,eF:()=>s});var o=n(7052),r=n(1942);const i="pdb-active-branch",s=t=>{const e=JSON.stringify(t);(0,r.Ad)(i,"",-1),(0,r.Ad)(i,(0,o.h)(e),3500)};function a(){(0,r.Ad)(i,"",-1)}const c=()=>{if(""===(0,r.Hl)(i))return null;{const e=(0,o.t)((0,r.Hl)(i));return t=JSON.parse(e),{id:Number(t.id),name:String(t.name),accountId:Number(t.accountId)}}var t}},4805:(t,e,n)=>{n.d(e,{e:()=>o});class o{static toClientUserDashboardMetricModel(t){return s(JSON.parse(t),l("ClientUserDashboardMetricModel"),r)}static clientUserDashboardMetricModelToJson(t){return JSON.stringify(s(t,l("ClientUserDashboardMetricModel"),i),null,2)}}function r(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function i(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function s(t,e,n,o=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=u[e.ref];return Array.isArray(e)?function(t,e){if(-1!==t.indexOf(e))return e}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const o=t.length;for(let r=0;r<o;r++){const o=t[r];try{return s(e,o,n)}catch(t){}}}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){if(Array.isArray(e))return e.map((e=>s(e,t,n)))}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(t).forEach((e=>{const i=t[e],a=Object.prototype.hasOwnProperty.call(o,e)?o[e]:void 0;r[i.key]=s(a,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(t,i)||(r[i]=s(o[i],e,n,i))})),r}(n(e),e.additional,t):void 0:e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?void 0:e}(t):function(t,e){if(typeof t==typeof e)return e}(e,t)}}function a(...t){return{unionMembers:t}}function c(t,e){return{props:t,additional:e}}function l(t){return{ref:t}}const u={ClientUserDashboardMetricModel:c([{json:"type",js:"type",typ:a(null,l("Type"))},{json:"statistics",js:"statistics",typ:a(null,l("Statistics"))},{json:"expiration_date",js:"expirationDate",typ:a(null,Date)}],!1),Statistics:c([{json:"all_members",js:"allMembers",typ:a(null,0)},{json:"all_males",js:"allMales",typ:a(null,0)},{json:"all_females",js:"allFemales",typ:a(null,0)},{json:"all_organizations",js:"allOrganizations",typ:a(null,0)},{json:"all_admins",js:"allAdmins",typ:a(null,0)},{json:"all_archived",js:"allArchived",typ:a(null,0)},{json:"current_branch",js:"currentBranch",typ:a(null,l("Statistics"))},{json:"subscription_amount",js:"subscriptionAmount",typ:a(null,3.14)},{json:"branch",js:"branch",typ:a(null,l("Type"))}],!1),Type:c([{json:"id",js:"id",typ:a(null,0)},{json:"name",js:"name",typ:a(null,"")}],!1)}},3248:(t,e,n)=>{n.d(e,{Y:()=>u,e:()=>r});var o=n(5594);class r{static toClientPageAccessModel(t){return a(JSON.parse(t),l("ClientPageAccessModel"),i)}static clientPageAccessModelToJson(t){return JSON.stringify(a(t,l("ClientPageAccessModel"),s),null,2)}}function i(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function s(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function a(t,e,n,o=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=u[e.ref];return Array.isArray(e)?function(t,e){if(-1!==t.indexOf(e))return e}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const o=t.length;for(let r=0;r<o;r++){const o=t[r];try{return a(e,o,n)}catch(t){}}}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){if(Array.isArray(e))return e.map((e=>a(e,t,n)))}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(t).forEach((e=>{const i=t[e],s=Object.prototype.hasOwnProperty.call(o,e)?o[e]:void 0;r[i.key]=a(s,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(t,i)||(r[i]=a(o[i],e,n,i))})),r}(n(e),e.additional,t):void 0:e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?void 0:e}(t):function(t,e){if(typeof t==typeof e)return e}(e,t)}}function c(...t){return{unionMembers:t}}function l(t){return{ref:t}}const u={ClientPageAccessModel:(d=[{json:"id",js:"id",typ:c(null,0)},{json:"page",js:"page",typ:c(null,"")},{json:"moduleId",js:"moduleId",typ:c(null,0)},{json:"moduleInfo",js:"moduleInfo",typ:c(null,l("ClientModulesModel"))}],!1,{props:d,additional:false}),ClientModulesModel:o.Y.ClientModulesModel};var d},5594:(t,e,n)=>{function o(...t){return{unionMembers:t}}n.d(e,{Y:()=>r});const r={ClientModulesModel:(i=[{json:"id",js:"id",typ:o(null,0)},{json:"module",js:"module",typ:o(null,"")},{json:"description",js:"description",typ:o(null,"")},{json:"logo",js:"logo",typ:o(null,"")},{json:"assigned_fee",js:"assignedFee",typ:o(null,0)},{json:"date_created",js:"dateCreated",typ:o(null,Date)},{json:"default",js:"default",typ:o(null,0)}],!1,{props:i,additional:false})};var i},2229:(t,e,n)=>{n.d(e,{e:()=>i});var o=n(3248),r=n(5594);class i{static toClientUserPageAccessModel(t){return c(JSON.parse(t),d("ClientUserPageAccessModel"),s)}static clientUserPageAccessModelToJson(t){return JSON.stringify(c(t,d("ClientUserPageAccessModel"),a),null,2)}}function s(t){if(void 0===t.jsonToJS){const e={};t.props.forEach((t=>e[t.json]={key:t.js,typ:t.typ})),t.jsonToJS=e}return t.jsonToJS}function a(t){if(void 0===t.jsToJSON){const e={};t.props.forEach((t=>e[t.js]={key:t.json,typ:t.typ})),t.jsToJSON=e}return t.jsToJSON}function c(t,e,n,o=""){if("any"===e)return t;if(null===e&&null===t)return t;if(!1!==e){for(;"object"==typeof e&&void 0!==e.ref;)e=p[e.ref];return Array.isArray(e)?function(t,e){if(-1!==t.indexOf(e))return e}(e,t):"object"==typeof e?e.hasOwnProperty("unionMembers")?function(t,e){const o=t.length;for(let r=0;r<o;r++){const o=t[r];try{return c(e,o,n)}catch(t){}}}(e.unionMembers,t):e.hasOwnProperty("arrayItems")?function(t,e){if(Array.isArray(e))return e.map((e=>c(e,t,n)))}(e.arrayItems,t):e.hasOwnProperty("props")?function(t,e,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(t).forEach((e=>{const i=t[e],s=Object.prototype.hasOwnProperty.call(o,e)?o[e]:void 0;r[i.key]=c(s,i.typ,n,i.key)})),Object.getOwnPropertyNames(o).forEach((i=>{Object.prototype.hasOwnProperty.call(t,i)||(r[i]=c(o[i],e,n,i))})),r}(n(e),e.additional,t):void 0:e===Date&&"number"!=typeof t?function(t){if(null===t)return null;const e=new Date(t);return isNaN(e.valueOf())?void 0:e}(t):function(t,e){if(typeof t==typeof e)return e}(e,t)}}function l(...t){return{unionMembers:t}}function u(t,e){return{props:t,additional:e}}function d(t){return{ref:t}}const p={ClientUserPageAccessModel:u([{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientId",typ:l(null,0)},{json:"userId",js:"userId",typ:l(null,0)},{json:"pageId",js:"pageId",typ:l(null,d("ClientPageAccessModel"))},{json:"isUnlimited",js:"isUnlimited",typ:l(null,d("IsUnlimited"))},{json:"date",js:"date",typ:l(null,Date)}],!1),ClientPageAccessModel:o.Y.ClientPageAccessModel,ClientModulesModel:r.Y.ClientModulesModel,IsUnlimited:u([{json:"id",js:"id",typ:l(null,0)},{json:"name",js:"name",typ:l(null,"")}],!1)}},2506:(t,e,n)=>{n.d(e,{H:()=>a});var o=n(771),r=n(7270),i=n(596),s=n(3600);function a(t=null,e=""){return n=this,a=void 0,l=function*(){const n=(0,s.Ie)(),a=o.t.URLS.AKWAABA_API_BASE_URL+"clients/user-access"+(null===t?"":"/"+t)+e,c=yield(0,r.d)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.H("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new i.H("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function o(t){try{i(l.next(t))}catch(t){e(t)}}function r(t){try{i(l.throw(t))}catch(t){e(t)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof c?n:new c((function(t){t(n)}))).then(o,r)}i((l=l.apply(n,a||[])).next())}));var n,a,c,l}},979:(t,e,n)=>{n.d(e,{E:()=>c});var o=n(771),r=n(7270),i=n(596),s=n(3600),a=n(2004);function c(){return t=this,e=void 0,c=function*(){const t=(0,s.Ie)();let e=0;try{e=(0,a.hk)().id}catch(t){console.log({getActiveBranchIdCookie:t})}const n=o.t.URLS.AKWAABA_API_BASE_URL+"clients/dashboard-statistics?currentBranchId="+e,c=yield(0,r.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new i.H("get",e,!0)}},new((n=void 0)||(n=Promise))((function(o,r){function i(t){try{a(c.next(t))}catch(t){r(t)}}function s(t){try{a(c.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,s)}a((c=c.apply(t,e||[])).next())}));var t,e,n,c}},2715:(t,e,n)=>{var o=n(9392),r=n(1936),i=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends o.oi{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?o.dy`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:o.dy`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};i([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"aClass",void 0),i([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"bClass",void 0),i([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"icon",void 0),i([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"href",void 0),i([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"label",void 0),i([(0,r.Cb)({type:String}),s("design:type",String)],a.prototype,"isBlockContent",void 0),i([(0,r.Cb)({type:Boolean}),s("design:type",Boolean)],a.prototype,"raised",void 0),a=i([(0,r.Mo)("link-button")],a)},9774:(t,e,n)=>{n.r(e),n.d(e,{PdbBranchButton:()=>f});var o=n(9392),r=n(1936),i=(n(5248),n(2715),n(2004)),s=n(771),a=n(7270),c=n(1981),l=n(3600),u=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{c(o.next(t))}catch(t){i(t)}}function a(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))},d=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},p=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let f=class extends o.oi{constructor(){super(),this.URL="/account/settings/branch"}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return e=this,n=void 0,r=function*(){t.connectedCallback.call(this);const e=(0,i.hk)();null===e?this.redirect():(0===e.id&&this.redirect(),yield function(t=null){return u(this,void 0,void 0,(function*(){const e=(0,l.Ie)(),n=s.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",o={token:null===t?e.token:t};(0,c.R)((t=>u(this,void 0,void 0,(function*(){return yield(0,a.d)(n,{method:"POST",body:JSON.stringify(o)},!0).then((t=>{const e=t.jsonData;"expiry"in e&&"token"in e&&"user"in e||((0,l.y4)(),window.location.href="/login")}))}))),(t=>{}))}))}())},new((o=void 0)||(o=Promise))((function(t,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(s,a)}c((r=r.apply(e,n||[])).next())}));var e,n,o,r}redirect(){window.location.href.includes(this.URL)||(window.location.href=this.URL)}disconnectedCallback(){}render(){return o.dy`
      <link-button isblockcontent="true" aClass="" raised bClass="button info w-full" href="${this.URL}" icon="call_split"
        label="Change Branch"></link-button>
    `}firstUpdated(){}createRenderRoot(){return this}};f.styles=[o.iv`
   :host { display: block; }
  `],d([(0,r.Cb)({type:String}),p("design:type",Object)],f.prototype,"URL",void 0),f=d([(0,r.Mo)("pdb-branch-button"),p("design:paramtypes",[])],f)},3683:(t,e,n)=>{var o=n(9392),r=n(1936),i=n(771),s=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends o.oi{constructor(){super(),this._url="#!"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.dy`
      <!-- Container for demo purpose -->
    <div class="my-24 mx-auto">

      <!-- Section: Design Block -->
      <section class="mb-32 background-radial-gradient">
        <div class="px-6 py-12 md:px-12 text-center lg:text-left">
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="mt-12 lg:mt-0">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">
                  Sorry, <br />
                  <span style="color: hsl(47deg 87% 70%);">your account has expired</span>
                </h1>
                <a class="btn-wide btn btn-warning text-white inline-block px-7 py-3 mr-2 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yello-400 active:shadow-lg transition duration-150 ease-in-out" href="${this._url}" role="button">Pay Subscription</a>
              </div>
              <div class="mb-12 lg:mb-0 h-52 md:h-96">
                <img src="${i.t.URLS.PDB_CLIENT}/assets/images/not-accessible/pay-bill.jpg" class="w-full rounded-lg shadow-lg object-cover h-52 md:h-96" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.iv`
   :host { display: block; }
  `],s([(0,r.Cb)({type:String}),a("design:type",String)],c.prototype,"_url",void 0),c=s([(0,r.Mo)("account-expired-component"),a("design:paramtypes",[])],c)},4657:(t,e,n)=>{var o=n(9392),r=n(1936),i=n(771),s=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends o.oi{constructor(){super(),this._url="#!"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.dy`
      <!-- Container for demo purpose -->
    <div class="my-24 mx-auto">

      <!-- Section: Design Block -->
      <section class="mb-32 background-radial-gradient">
        <div class="px-6 py-12 md:px-12 text-center lg:text-left">
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="mt-12 lg:mt-0">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">
                  Sorry, <br />
                  <span style="color: hsl(47deg 87% 70%);">You Do Not Have Access To This Page</span>
                </h1>
              </div>
              <div class="mb-12 lg:mb-0 h-52 md:h-96">
                <img src="${i.t.URLS.PDB_CLIENT}/assets/images/not-accessible/no-entry.jpg" class="w-full rounded-lg shadow-lg object-cover h-52 md:h-96" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.iv`
   :host { display: block; }
  `],s([(0,r.Cb)({type:String}),a("design:type",String)],c.prototype,"_url",void 0),c=s([(0,r.Mo)("no-page-entry-component"),a("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=6069.js.map