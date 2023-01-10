"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_clients_users_access_ts-src_addons_interfaces_clients_users_model_group-bdf4ed"],{8034:(e,t,n)=>{n.r(t)},8207:(e,t,n)=>{n.r(t)},3464:(e,t,n)=>{function r(e){return{id:Number(e.id),page:e.page}}n.r(t),n.d(t,{ClientPageAccess_S:()=>r})},2583:(e,t,n)=>{n.r(t),n.d(t,{ClientUserAccess_S:()=>o});var r=n(3464);function o(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:(0,r.ClientPageAccess_S)(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}},6995:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>i,typeMap:()=>d});var r=n(428),o=n(1594);class i{static toClientUserGroupSubgroupModel(e){return c(JSON.parse(e),u("ClientUserGroupSubgroupModel"),s)}static clientUserGroupSubgroupModelToJson(e){return JSON.stringify(c(e,u("ClientUserGroupSubgroupModel"),a),null,2)}}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function c(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return c(t,r,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>c(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],s=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;o[i.key]=c(s,i.typ,n,i.key)})),Object.getOwnPropertyNames(r).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=c(r[i],t,n,i))})),o}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(e){return{arrayItems:e}}function p(...e){return{unionMembers:e}}function u(e){return{ref:e}}const d={ClientUserGroupSubgroupModel:(y=[{json:"id",js:"id",typ:p(null,0)},{json:"clientId",js:"clientID",typ:p(null,0)},{json:"userId",js:"userID",typ:p(null,0)},{json:"group",js:"group",typ:p(null,l(u("GroupModel")))},{json:"subgroup",js:"subgroup",typ:p(null,l(u("SubGroupModel")))},{json:"date",js:"date",typ:p(null,Date)}],!1,{props:y,additional:false}),GroupModel:r.typeMap.GroupModel,SubGroupModel:o.typeMap.SubGroupModel};var y},8474:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUserGroupSubgroup:()=>a});var r=n(8485),o=n(7270),i=n(4492),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function o(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}i((l=l.apply(n,a||[])).next())}));var n,a,c,l}},6262:(e,t,n)=>{n.r(t),n.d(t,{GET_ClientUsers:()=>a});var r=n(8485),o=n(7270),i=n(4492),s=n(3600);function a(e=null,t=""){return n=this,a=void 0,l=function*(){const n=(0,s.getUserLoginInfoCookie)(),a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,c=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new i.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function o(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,o)}i((l=l.apply(n,a||[])).next())}));var n,a,c,l}},8763:(e,t,n)=>{n.r(t),n.d(t,{AlertCard:()=>a}),n(8034);var r=n(5862),o=n(9662),i=(n(8207),function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends r.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.html`
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
      `:r.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?r.html`<header class="header">${this.header}</header>`:r.nothing}
              ${null!==this.content?r.html`<main class="main">${this.content}</main>`:r.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.html`<mwc-icon>warning</mwc-icon>`:this.danger?r.html`<mwc-icon>error_outline</mwc-icon>`:this.default?r.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.html`<mwc-icon>star_outline</mwc-icon>`:r.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};a.styles=[r.css`
   :host { display: block; }
  `],i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"loading",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"success",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"info",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"warning",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"danger",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"default",void 0),i([(0,o.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"primary",void 0),i([(0,o.property)({type:String}),s("design:type",String)],a.prototype,"extra_class",void 0),a=i([(0,o.customElement)("alert-card"),s("design:paramtypes",[])],a)}}]);
//# sourceMappingURL=src_addons_interfaces_clients_users_access_ts-src_addons_interfaces_clients_users_model_group-bdf4ed.js.map