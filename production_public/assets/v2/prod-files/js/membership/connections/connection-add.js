"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7491],{81:(e,t,o)=>{o.r(t),o.d(t,{PdbConnectionsAccountAdd:()=>u});var n=o(5862),c=o(8393),a=(o(9148),o(9054),o(3683),o(4657),o(9665)),r=o(2145),s=o(1302),p=o(5943),d=function(e,t,o,n){var c,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(a<3?c(r):a>3?c(t,o,r):c(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let u=class extends n.oi{constructor(){super(),this._hasSetup=!1}connectedCallback(){super.connectedCallback(),(0,a.f)().then((()=>this._hasSetup=!0))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,r.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,s.H)({pageId:p.W.user_connections,viewType:"Edit"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}return n.dy`
      <div class="flex flex-col shadow bg-white my-2 p-2">
        <pdb-connections-accounts-add class="my-1"></pdb-connections-accounts-add>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};u.styles=[n.iv`
   :host { display: block; }
  `],d([(0,c.Cb)({type:Boolean}),i("design:type",Boolean)],u.prototype,"_hasSetup",void 0),u=d([(0,c.Mo)("pdb-connections-account-add"),i("design:paramtypes",[])],u)}},e=>(e.O(0,[2185,5744,9674,8820,1828,7154,1080,5291,6236,6069,6553,214,1454,7147,9162,3712],(()=>(81,e(e.s=81)))),e.O())])));
//# sourceMappingURL=connection-add.js.map