"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6154],{8967:(e,t,r)=>{r.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.d(t,{Jx:()=>o,O1:()=>n,Vc:()=>s,W3:()=>a});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},s=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},428:(e,t,r)=>{r.d(t,{Y:()=>p,e:()=>n});class n{static toGroupModel(e){return a(JSON.parse(e),i("GroupModel"),o)}static groupModelToJson(e){return JSON.stringify(a(e,i("GroupModel"),s),null,2)}}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=p[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return a(t,n,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>a(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],u=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[s.key]=a(u,s.typ,r,s.key)})),Object.getOwnPropertyNames(n).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(o[s]=a(n[s],t,r,s))})),o}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function u(...e){return{unionMembers:e}}function i(e){return{ref:e}}const p={GroupModel:(c=[{json:"id",js:"id",typ:u(null,0)},{json:"clientId",js:"clientID",typ:u(null,0)},{json:"group",js:"group",typ:u(null,"")},{json:"branchId",js:"branchID",typ:u(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:u(null,0)},{json:"createdBy",js:"createdBy",typ:u(null,0)},{json:"updatedBy",js:"updatedBy",typ:u(null,0)},{json:"updateDate",js:"updateDate",typ:u(null,Date)},{json:"date",js:"date",typ:u(null,Date)}],!1,{props:c,additional:false})};var c},1594:(e,t,r)=>{r.d(t,{Y:()=>c,e:()=>o});var n=r(428);class o{static toSubGroupModel(e){return u(JSON.parse(e),p("SubGroupModel"),s)}static subGroupModelToJson(e){return JSON.stringify(u(e,p("SubGroupModel"),a),null,2)}}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function u(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return u(t,n,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>u(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],a=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[s.key]=u(a,s.typ,r,s.key)})),Object.getOwnPropertyNames(n).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(o[s]=u(n[s],t,r,s))})),o}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function i(...e){return{unionMembers:e}}function p(e){return{ref:e}}const c={SubGroupModel:(l=[{json:"id",js:"id",typ:i(null,0)},{json:"clientId",js:"clientID",typ:i(null,0)},{json:"groupId",js:"groupID",typ:i(null,p("GroupModel"))},{json:"branchId",js:"branchID",typ:i(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:i(null,0)},{json:"subgroup",js:"subgroup",typ:i(null,"")},{json:"createdBy",js:"createdBy",typ:i(null,0)},{json:"updatedBy",js:"updatedBy",typ:i(null,0)},{json:"updateDate",js:"updateDate",typ:i(null,Date)},{json:"date",js:"date",typ:i(null,Date)},{json:"group",js:"group",typ:i(null,"")}],!1,{props:l,additional:false}),GroupModel:n.Y.GroupModel};var l},2346:(e,t,r)=>{r.r(t),r.d(t,{PdbAdminUserAddGroupSubgroupForm:()=>f});var n=r(5862),o=r(8393),s=r(2004),a=(r(4494),r(7052)),u=r(4672),i=(r(3683),r(4657),r(9665)),p=r(2145),c=r(1302),l=r(1710),d=function(e,t,r,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let f=class extends n.oi{constructor(){super(),this.userId=0,this._activeBranchId=null,this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this),(0,i.f)().then((()=>this._hasSetup=!0)),this.getUserId();const t=(0,s.hk)();this._activeBranchId=null===t?null:[t]},new((n=void 0)||(n=Promise))((function(e,s){function a(e){try{i(o.next(e))}catch(e){s(e)}}function u(e){try{i(o.throw(e))}catch(e){s(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,u)}i((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,p.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,c.H)({pageId:l.W.create,viewType:"Both"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}return n.dy`
      <div class="shadow bg-white p-2 my-2">
        <pdb-admin-user-group-subgroup-form .userId="${this.userId}"></pdb-admin-user-group-subgroup-form>
      </div>
    `}firstUpdated(){}getUserId(){let e=(0,u.Jx)("user-id"),t=null!==e?(0,a.t)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}createRenderRoot(){return this}};f.styles=[n.iv`
   :host { display: block; }
  `],d([(0,o.Cb)({type:Number}),y("design:type",Number)],f.prototype,"userId",void 0),d([(0,o.Cb)({type:Array}),y("design:type",Array)],f.prototype,"_activeBranchId",void 0),d([(0,o.Cb)({type:Boolean}),y("design:type",Boolean)],f.prototype,"_hasSetup",void 0),f=d([(0,o.Mo)("pdb-admin-user-add-group-subgroup-form"),y("design:paramtypes",[])],f)},1710:(e,t,r)=>{r.d(t,{W:()=>n});const n={view:25,create:26,update:27}}},e=>(e.O(0,[2185,5744,9674,8820,1828,7154,1080,5291,6236,6069,7751,7520,3712],(()=>(2346,e(e.s=2346)))),e.O())])));
//# sourceMappingURL=add_group_subgroup.js.map