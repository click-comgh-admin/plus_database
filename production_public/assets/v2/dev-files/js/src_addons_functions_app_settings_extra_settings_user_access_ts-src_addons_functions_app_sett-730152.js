"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152"],{6524:(e,t,n)=>{n.r(t)},3750:(e,t,n)=>{n.r(t),n.d(t,{ACTIVE_PAGE__:()=>o});const o=()=>{const e=document.querySelectorAll("[mm-active]"),t=document.URL.substring(document.URL.lastIndexOf("/")).split("/")[1].split("?")[0];e.forEach((e=>{var n=e.getAttribute("mm-active").split("|");for(let o=0;o<n.length;o++){const r=n[o];t===r&&e.setAttribute("class","mm-active")}}))}},5527:(e,t,n)=>{n.r(t),n.d(t,{AddBranchButton:()=>r}),n(4214);var o=n(3600);const r=()=>{if(1===(0,o.getUserLoginInfoCookie)().user.branchId){const e="[branch_button_selector]";document.querySelectorAll(e).forEach((e=>{e.innerHTML="<pdb-branch-button></pdb-branch-button>"}))}}},3800:(e,t,n)=>{n.r(t),n.d(t,{AddLogoutButton:()=>i});var o=n(8485),r=n(7725),s=n(3600);const i=()=>{null===(0,s.getUserLoginInfoCookie)()&&(window.location.href=o.CONSTANTS.URLS.LOGIN_PAGE_BASE_URL);const e="[logout_button_selector]";document.querySelectorAll(e).forEach((e=>{e.innerHTML='<a href="#" type="button" tabindex="0" class="dropdown-item ">Logout</a>'})),document.querySelectorAll(e).forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),(0,s.LogUserOut)(),(0,r.removeActiveBranchIdCookie)(),setTimeout((()=>{window.location.href=o.CONSTANTS.URLS.LOGIN_PAGE_BASE_URL}),50)}))}))}},1354:(e,t,n)=>{n.r(t),n.d(t,{getAppSettingsExtraSettings:()=>m,setAppSettingsExtraSettings:()=>g});var o=n(8167),r=n(9205),s=n(7052),i=n(979),a=n(4805),c=n(2229),l=n(421),u=n(2506),p=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};const f="app-settings-extra_settings",y=new o.AppStorageItem,g=(e=!1)=>d(void 0,void 0,void 0,(function*(){const t=()=>d(void 0,void 0,void 0,(function*(){const e=yield d(void 0,void 0,void 0,(function*(){const e=yield(0,i.GET_ClientUserDashboardMetrics)();return null!==e&&e.response.success&&"statistics"in e.response.data?a.Convert.toClientUserDashboardMetricModel(JSON.stringify(e.response.data)):null})),t=yield d(void 0,void 0,void 0,(function*(){const e=(0,p.getUserLoginInfoCookie)().user.id,t=yield(0,u.GET_ClientUserAccess)(null,"?userId="+e);return null!==t&&t.response.success&&Array.isArray(t.response.data)?t.response.data.map((e=>c.Convert.toClientUserPageAccessModel(JSON.stringify(e)))):null})),n=null===e?null:e.expirationDate;(e=>{const t=JSON.stringify(e);y.remove_storage_item(f),y.set_storage_item(f,(0,s.base64Encode)(t),3500)})({expiration_date:{entryDate:new Date,expiration:n,expired:(0,l.DateDifference)(n,new Date)<24},user_access:t})}));if(e)y.remove_storage_item(f),yield t();else{const e=m();(null===e||(0,l.DateDifferenceMinutes)(new Date,null==e?void 0:e.expiration_date.entryDate)>15)&&(yield t())}})),m=()=>{const e=y.get_storage_item(f);if(""===e||null===e)return null;{const e=(0,s.base64Decode)(y.get_storage_item(f)),t=JSON.parse(e),n=(0,r.ExtraAppSettings_S)(t);return n.expiration_date.expired=(0,l.DateDifference)(n.expiration_date.expiration,new Date)<24,n}}},1302:(e,t,n)=>{n.r(t),n.d(t,{ASES_isUnlimited:()=>o,AppSettingsExtraUserAccess:()=>s,PageButtonUserAccess:()=>i});var o,r=n(1354);!function(e){e[e.Restricted=0]="Restricted",e[e.Unlimited=1]="Unlimited",e[e["Edit Only"]=2]="Edit Only",e[e["View Only"]=3]="View Only"}(o||(o={}));const s=(e,t=!1)=>{const n=(0,r.getAppSettingsExtraSettings)(),s=e.pageId,i=e.viewType;if(t)return!0;let a=!1;return null==n||n.user_access.forEach((e=>{if(e.pageId.id===s&&e.isUnlimited.name in o)switch(e.isUnlimited.name){case o[0]:a=!1;break;case o[1]:a=!0;break;case o[2]:"Edit"!==i&&"Both"!==i||(a=!0);break;case o[3]:"View"!==i&&"Both"!==i||(a=!0)}})),a},i=e=>s({pageId:e,viewType:"Edit"})},7712:(e,t,n)=>{n.r(t),n.d(t,{AppSetup:()=>a});var o=n(5527),r=n(3800),s=n(1354),i=n(2702);const a=()=>{return e=void 0,t=void 0,a=function*(){(0,r.AddLogoutButton)(),(0,o.AddBranchButton)(),yield(0,s.setAppSettingsExtraSettings)().then((()=>(0,i.AddUserMenuItems)()))},new((n=void 0)||(n=Promise))((function(o,r){function s(e){try{c(a.next(e))}catch(e){r(e)}}function i(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((a=a.apply(e,t||[])).next())}));var e,t,n,a}},2702:(e,t,n)=>{n.r(t),n.d(t,{AddUserMenuItems:()=>i});var o=n(8485),r=n(3750),s=n(1354);const i=()=>{(0,r.ACTIVE_PAGE__)();const e=(0,s.getAppSettingsExtraSettings)();a(e)},a=e=>{var t;null===(t=null==e?void 0:e.user_access)||void 0===t||t.forEach((e=>{if(23===e.pageId.id){const e="[registration_menu_selector]";document.querySelectorAll(e).forEach((e=>{e.innerHTML=`\n          <a href="${o.CONSTANTS.URLS.REGISTRATION_BASE_URL}" target="_blank" mm-active="register-member">\n            <i class="metismenu-icon"></i> Registration Form\n          </a>\n        `}))}}))}},8167:(e,t,n)=>{n.r(t),n.d(t,{AppStorageItem:()=>r});var o=n(1942);class r{constructor(){this.get_storage_item=e=>void 0!==typeof Storage?localStorage.getItem(e):(0,o.get_cookie)(e),this.set_storage_item=(e,t,n,r)=>{void 0!==typeof Storage?localStorage.setItem(e,t):(0,o.set_cookies)(e,t,n,r)},this.remove_storage_item=e=>{void 0!==typeof Storage?localStorage.removeItem(e):(0,o.set_cookies)(e,"",-1)}}}},421:(e,t,n)=>{n.r(t),n.d(t,{DateDifference:()=>o,DateDifferenceMinutes:()=>r});const o=(e,t)=>{const n=null==e?new Date:e,o=null==t?new Date:t;return(n.getTime()-o.getTime())/36e5},r=(e,t,n=60)=>o(e,t)*n},4805:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o,typeMap:()=>u});class o{static toClientUserDashboardMetricModel(e){return i(JSON.parse(e),l("ClientUserDashboardMetricModel"),r)}static clientUserDashboardMetricModelToJson(e){return JSON.stringify(i(e,l("ClientUserDashboardMetricModel"),s),null,2)}}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return i(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[s.key]=i(a,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=i(o[s],t,n,s))})),r}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function c(e,t){return{props:e,additional:t}}function l(e){return{ref:e}}const u={ClientUserDashboardMetricModel:c([{json:"type",js:"type",typ:a(null,l("Type"))},{json:"statistics",js:"statistics",typ:a(null,l("Statistics"))},{json:"expiration_date",js:"expirationDate",typ:a(null,Date)}],!1),Statistics:c([{json:"all_members",js:"allMembers",typ:a(null,0)},{json:"all_males",js:"allMales",typ:a(null,0)},{json:"all_females",js:"allFemales",typ:a(null,0)},{json:"all_organizations",js:"allOrganizations",typ:a(null,0)},{json:"all_admins",js:"allAdmins",typ:a(null,0)},{json:"all_archived",js:"allArchived",typ:a(null,0)},{json:"current_branch",js:"currentBranch",typ:a(null,l("Statistics"))},{json:"subscription_amount",js:"subscriptionAmount",typ:a(null,3.14)},{json:"branch",js:"branch",typ:a(null,l("Type"))}],!1),Type:c([{json:"id",js:"id",typ:a(null,0)},{json:"name",js:"name",typ:a(null,"")}],!1)}},3248:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>r,typeMap:()=>u});var o=n(5594);class r{static toClientPageAccessModel(e){return a(JSON.parse(e),l("ClientPageAccessModel"),s)}static clientPageAccessModelToJson(e){return JSON.stringify(a(e,l("ClientPageAccessModel"),i),null,2)}}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return a(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>a(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[s.key]=a(i,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=a(o[s],t,n,s))})),r}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function c(...e){return{unionMembers:e}}function l(e){return{ref:e}}const u={ClientPageAccessModel:(p=[{json:"id",js:"id",typ:c(null,0)},{json:"page",js:"page",typ:c(null,"")},{json:"moduleId",js:"moduleId",typ:c(null,0)},{json:"moduleInfo",js:"moduleInfo",typ:c(null,l("ClientModulesModel"))}],!1,{props:p,additional:false}),ClientModulesModel:o.typeMap.ClientModulesModel};var p},5594:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o,typeMap:()=>l});class o{static toClientModulesModel(e){return i(JSON.parse(e),c("ClientModulesModel"),r)}static clientModulesModelToJson(e){return JSON.stringify(i(e,c("ClientModulesModel"),s),null,2)}}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return i(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[s.key]=i(a,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=i(o[s],t,n,s))})),r}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function c(e){return{ref:e}}const l={ClientModulesModel:(u=[{json:"id",js:"id",typ:a(null,0)},{json:"module",js:"module",typ:a(null,"")},{json:"description",js:"description",typ:a(null,"")},{json:"logo",js:"logo",typ:a(null,"")},{json:"assigned_fee",js:"assignedFee",typ:a(null,0)},{json:"date_created",js:"dateCreated",typ:a(null,Date)},{json:"default",js:"default",typ:a(null,0)}],!1,{props:u,additional:false})};var u},2229:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>d});var o=n(3248),r=n(5594);class s{static toClientUserPageAccessModel(e){return c(JSON.parse(e),p("ClientUserPageAccessModel"),i)}static clientUserPageAccessModelToJson(e){return JSON.stringify(c(e,p("ClientUserPageAccessModel"),a),null,2)}}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function c(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return c(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>c(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[s.key]=c(i,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=c(o[s],t,n,s))})),r}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function u(e,t){return{props:e,additional:t}}function p(e){return{ref:e}}const d={ClientUserPageAccessModel:u([{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientId",typ:l(null,0)},{json:"userId",js:"userId",typ:l(null,0)},{json:"pageId",js:"pageId",typ:l(null,p("ClientPageAccessModel"))},{json:"isUnlimited",js:"isUnlimited",typ:l(null,p("IsUnlimited"))},{json:"date",js:"date",typ:l(null,Date)}],!1),ClientPageAccessModel:o.typeMap.ClientPageAccessModel,ClientModulesModel:r.typeMap.ClientModulesModel,IsUnlimited:u([{json:"id",js:"id",typ:l(null,0)},{json:"name",js:"name",typ:l(null,"")}],!1)}},6965:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>o,typeMap:()=>l});class o{static toEASExpirationDateInterface(e){return i(JSON.parse(e),c("EASExpirationDateInterface"),r)}static eASExpirationDateInterfaceToJson(e){return JSON.stringify(i(e,c("EASExpirationDateInterface"),s),null,2)}}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let r=0;r<o;r++){const o=e[r];try{return i(t,o,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;r[s.key]=i(a,s.typ,n,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(r[s]=i(o[s],t,n,s))})),r}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function c(e){return{ref:e}}const l={EASExpirationDateInterface:(u=[{json:"expiration",js:"expiration",typ:a(null,Date)},{json:"expired",js:"expired",typ:a(null,!0)},{json:"entryDate",js:"entryDate",typ:a(null,Date)}],!1,{props:u,additional:false})};var u},9205:(e,t,n)=>{n.r(t),n.d(t,{ExtraAppSettings_S:()=>s});var o=n(6965),r=n(2229);function s(e){return console.log({"ExtraAppSettings_S-data":e}),{user_access:("user_access"in e?e.user_access:[]).map((e=>r.Convert.toClientUserPageAccessModel(JSON.stringify(e)))),expiration_date:o.Convert.toEASExpirationDateInterface(JSON.stringify(e.expiration_date))}}},2506:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUserAccess:()=>a});var o=n(8485),r=n(7270),s=n(4492),i=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,i.getUserLoginInfoCookie)(),a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access"+(null===e?"":"/"+e)+t,c=yield(0,r.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function o(e){try{s(l.next(e))}catch(e){t(e)}}function r(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(o,r)}s((l=l.apply(n,a||[])).next())}));var n,a,c,l}},979:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUserDashboardMetrics:()=>c});var o=n(8485),r=n(7270),s=n(4492),i=n(3600),a=n(7725);function c(){return e=this,t=void 0,c=function*(){const e=(0,i.getUserLoginInfoCookie)();let t=0;try{t=(0,a.getActiveBranchIdCookie)().id}catch(e){console.log({getActiveBranchIdCookie:e})}const n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/dashboard-statistics?currentBranchId="+t,c=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+e.token}},!0);try{return new s.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((n=void 0)||(n=Promise))((function(o,r){function s(e){try{a(c.next(e))}catch(e){r(e)}}function i(e){try{a(c.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((c=c.apply(e,t||[])).next())}));var e,t,n,c}},3683:(e,t,n)=>{n.r(t),n.d(t,{AccountExpiredComponent:()=>c});var o=n(5862),r=n(9662),s=(n(6524),n(8485)),i=function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),this._url="#!"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
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
                <img src="${s.CONSTANTS.URLS.PDB_CLIENT}/assets/images/not-accessible/pay-bill.jpg" class="w-full rounded-lg shadow-lg object-cover h-52 md:h-96" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],i([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"_url",void 0),c=i([(0,r.customElement)("account-expired-component"),a("design:paramtypes",[])],c)},4657:(e,t,n)=>{n.r(t),n.d(t,{NoPageEntryComponent:()=>c});var o=n(5862),r=n(9662),s=(n(6524),n(8485)),i=function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.LitElement{constructor(){super(),this._url="#!"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.html`
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
                <img src="${s.CONSTANTS.URLS.PDB_CLIENT}/assets/images/not-accessible/no-entry.jpg" class="w-full rounded-lg shadow-lg object-cover h-52 md:h-96" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[o.css`
   :host { display: block; }
  `],i([(0,r.property)({type:String}),a("design:type",String)],c.prototype,"_url",void 0),c=i([(0,r.customElement)("no-page-entry-component"),a("design:paramtypes",[])],c)}}]);
//# sourceMappingURL=src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152.js.map