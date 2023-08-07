"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4591],{6656:(e,t,r)=>{r.d(t,{E:()=>s});var n=r(771),a=r(7270),i=r(596),o=r(3600);function s(e=null,t="",r=!1){return s=this,c=void 0,l=function*(){const s=n.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,c=n.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,d=(0,o.Ie)(),l=r?c:s,u=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+d.token}},!0);try{return new i.H("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new i.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{a(l.next(e))}catch(e){t(e)}}function n(e){try{a(l.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(r,n)}a((l=l.apply(s,c||[])).next())}));var s,c,d,l}},9282:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipUpdateGroupSubgroup:()=>g});var n=r(5862),a=r(8393),i=(r(6811),r(7052)),o=r(4672),s=r(6656),c=r(7684),d=r(5474),l=r(3600),u=r(2004),b=r(771),p=r(2145),m=r(1302),h=r(9981),f=(r(8763),r(4657),r(3683),r(9283),function(e,t,r,n){var a,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(i<3?a(o):i>3?a(t,r,o):a(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}),y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}c((n=n.apply(e,t||[])).next())}))};let g=class extends n.oi{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this._userLoginInfo=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,d.f)().then((()=>this._hasSetup=!0));const t=(0,u.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,l.Ie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,p.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,m.H)({pageId:h.W.edit,viewType:"Edit"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=n.dy`<h4 class="text-white">Error</h4>`,t=n.dy`
        <div>
          <p class="text-black mb-2">Member Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to members page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
            href="${b.t.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
        </div>
      `;return n.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return n.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return n.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Member </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=n.dy`<h4 class="text-white">Error</h4>`,t=n.dy`
          <div>
            <p class="text-black mb-2">Member Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
              href="${b.t.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
          </div>
        `;return n.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=c.e.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return n.dy`
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <header class="header warning app-container--col-md-12">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">Member</h1>
                      <h3 class="h3">Update Group/ Sub-Group!</h3>
                    </label>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
        <pdb-membership-update-view-group-subgroup memberId="${t.id}"></pdb-membership-update-view-group-subgroup>
      `}}firstUpdated(){}getUserId(){let e=(0,o.Jx)("member-id"),t=null!==e?(0,i.t)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return v(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,s.E)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}createRenderRoot(){return this}};g.styles=[n.iv`
   :host { display: block; }
  `],f([(0,a.Cb)({type:Number}),y("design:type",Number)],g.prototype,"memberId",void 0),f([(0,a.Cb)({type:Array}),y("design:type",Array)],g.prototype,"_activeBranchId",void 0),f([(0,a.Cb)({type:Array}),y("design:type",Array)],g.prototype,"_userLoginInfo",void 0),f([(0,a.Cb)({type:Boolean}),y("design:type",Boolean)],g.prototype,"_hasSetup",void 0),g=f([(0,a.Mo)("pdb-membership-update-group-subgroup"),y("design:paramtypes",[])],g)}},e=>(e.O(0,[2185,5744,9674,8820,1828,7154,1080,5291,6236,7583,4808,7751,5665,380,3712],(()=>(9282,e(e.s=9282)))),e.O())])));
//# sourceMappingURL=group-subgroup.js.map