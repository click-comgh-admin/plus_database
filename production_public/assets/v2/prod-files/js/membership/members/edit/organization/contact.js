"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4788],{8561:(e,t,r)=>{r.d(t,{V:()=>c});var n=r(771),i=r(7270),a=r(596),o=r(3600);function c(e=null,t="",r=!1){return c=this,s=void 0,l=function*(){const c=n.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,s=n.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,d=(0,o.Ie)(),l=r?s:c,m=yield(0,i.d)(l,{method:"GET",headers:{Authorization:"Token "+d.token}},!0);try{return new a.H("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new a.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function r(e){try{i(l.next(e))}catch(e){t(e)}}function n(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof d?i:new d((function(e){e(i)}))).then(r,n)}i((l=l.apply(c,s||[])).next())}));var c,s,d,l}},5543:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipUpdateOrganizationContact:()=>S});var n,i,a=r(9392),o=r(1936),c=(r(1877),r(5248)),s=(r(9261),r(2169),r(3313),r(6811),r(7725),r(7052)),d=r(4672),l=r(7684),m=r(9665),p=r(3600),b=r(2004),h=r(771),u=r(2145),y=r(1302),v=r(9356),f=r(4596),g=r(9981),I=(r(8763),r(4657),r(3683),r(1604),r(7475)),w=r(5707),k=(r(2473),r(6259),r(8561)),C=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},B=function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}s((n=n.apply(e,t||[])).next())}))};let S=class extends a.oi{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this.formId=1,this._userLoginInfo=null,this.memberContactInfo=null,this.memberContactPrivacy=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return B(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,m.f)().then((()=>this._hasSetup=!0));const t=(0,b.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,p.Ie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember(),yield this.getMemberContactInfo(),yield this.getMemberContactPrivacy())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,u.H)())||void 0===e?void 0:e.expiration_date.expired)return a.dy`<account-expired-component></account-expired-component>`;if(!(0,y.H)({pageId:g.W["edit-organization"],viewType:"Edit"},!1))return a.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=a.dy`<h4 class="text-white">Error</h4>`,t=a.dy`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${h.t.URLS.PDB_CLIENT}member/organization/members"
            label="Organizations Page"></link-button>
        </div>
      `;return a.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return a.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return a.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Organization </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=a.dy`<h4 class="text-white">Error</h4>`,t=a.dy`
          <div>
            <p class="text-black mb-2">Organization Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${h.t.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;return a.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=l.e.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return a.dy`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="displayMainSectionBtn"
              label="Main" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="privacySectionSectionBtn" label="Privacy" @click="${this.privacySectionSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainPrivacySection(t)}
        </div>
      `}}displayMainSectionBtn(e){e.preventDefault(),this.formId=1,this.mainSectionFormBtn.setAttribute("raised","true"),this.privacySectionFormBtn.removeAttribute("raised")}privacySectionSectionBtn(e){e.preventDefault(),this.formId=2,this.privacySectionFormBtn.setAttribute("raised","true"),this.mainSectionFormBtn.removeAttribute("raised")}getMainPrivacySection(e){return 1===this.formId?a.dy`
        ${this.mainForm(e)}
      `:a.dy`
        ${this.privacyForm(e)}
      `}mainForm(e){return a.dy`
      <div
        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Organization</h1>
                    <h3 class="h3">Update Contact Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-contact-data memberId="${e.id}" .memberContactInfo="${this.memberContactInfo}"></pdb-membership-update-view-contact-data>
    `}privacyForm(e){return a.dy`
      <div
        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Organization</h1>
                    <h3 class="h3">Update Contact Privacy!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-contact-privacy memberId="${e.id}" .memberContactPrivacy="${this.memberContactPrivacy}"></pdb-membership-update-view-contact-privacy>
    `}firstUpdated(){}getUserId(){let e=(0,d.Jx)("member-id"),t=null!==e?(0,s.t)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,k.V)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getMemberContactInfo(){return B(this,void 0,void 0,(function*(){const e=yield(0,I.m)(null,"?memberId="+this.memberId);if(null===e)this.memberContactInfo=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactInfo=t.map((e=>v.e.toUserContactModel(JSON.stringify(e))))}}))}getMemberContactPrivacy(){return B(this,void 0,void 0,(function*(){const e=yield(0,w.a)(null,"?memberId="+this.memberId);if(null===e)this.memberContactPrivacy=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactPrivacy=t.map((e=>f.e.toUserContactPrivacyModel(JSON.stringify(e))))}}))}createRenderRoot(){return this}};S.styles=[a.iv`
   :host { display: block; }
  `],C([(0,o.IO)("#mainSectionFormBtn"),x("design:type","function"==typeof(n=void 0!==c.z&&c.z)?n:Object)],S.prototype,"mainSectionFormBtn",void 0),C([(0,o.IO)("#privacySectionFormBtn"),x("design:type","function"==typeof(i=void 0!==c.z&&c.z)?i:Object)],S.prototype,"privacySectionFormBtn",void 0),C([(0,o.Cb)({type:Number}),x("design:type",Number)],S.prototype,"memberId",void 0),C([(0,o.Cb)({type:Array}),x("design:type",Array)],S.prototype,"_activeBranchId",void 0),C([(0,o.Cb)({type:Number}),x("design:type",Number)],S.prototype,"formId",void 0),C([(0,o.Cb)({type:Array}),x("design:type",Array)],S.prototype,"_userLoginInfo",void 0),C([(0,o.Cb)({type:Array}),x("design:type",Array)],S.prototype,"memberContactInfo",void 0),C([(0,o.Cb)({type:Array}),x("design:type",Array)],S.prototype,"memberContactPrivacy",void 0),C([(0,o.Cb)({type:Boolean}),x("design:type",Boolean)],S.prototype,"_hasSetup",void 0),S=C([(0,o.Mo)("pdb-membership-update-organization-contact"),x("design:paramtypes",[])],S)}},e=>(e.O(0,[2185,5744,9674,316,836,5291,6236,6069,4808,7751,4431,4668,3712],(()=>(5543,e(e.s=5543)))),e.O())])));
//# sourceMappingURL=contact.js.map