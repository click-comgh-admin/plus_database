"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9725],{8561:(e,t,n)=>{n.d(t,{V:()=>s});var r=n(771),i=n(7270),o=n(596),a=n(3600);function s(e=null,t="",n=!1){return s=this,c=void 0,l=function*(){const s=r.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,c=r.t.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,d=(0,a.Ie)(),l=n?c:s,p=yield(0,i.d)(l,{method:"GET",headers:{Authorization:"Token "+d.token}},!0);try{return new o.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new o.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{i(l.next(e))}catch(e){t(e)}}function r(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var i;t.done?e(t.value):(i=t.value,i instanceof d?i:new d((function(e){e(i)}))).then(n,r)}i((l=l.apply(s,c||[])).next())}));var s,c,d,l}},4007:(e,t,n)=>{n.r(t),n.d(t,{PdbMembershipUpdateOrganizationBranchCategoryLocation:()=>N});var r,i,o=n(5862),a=n(8393),s=(n(1877),n(5248)),c=(n(9261),n(2169),n(3313),n(6811),n(7725),n(7052)),d=n(4672),l=n(7684),p=n(9665),h=n(3600),u=n(2004),b=n(771),m=n(2145),y=n(1302),g=n(9981),f=(n(8763),n(4657),n(3683),n(2761)),v=n(9446),w=(n(2342),n(9280),n(6224)),B=n(675),I=n(72),k=n(8527),C=n(8561),_=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},S=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};let N=class extends o.oi{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this.formId=1,this._userLoginInfo=null,this._hasSetup=!1,this._countries=[],this._accountCategories=[],this._branches=[]}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return S(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,p.f)().then((()=>this._hasSetup=!0));const t=(0,u.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,h.Ie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember(),yield this.getClientBranch(),yield this.getGroupingsMemberCategory(),yield this.getLocationCountry())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,m.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(!(0,y.H)({pageId:g.W["edit-organization"],viewType:"Edit"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=o.dy`<h4 class="text-white">Error</h4>`,t=o.dy`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${b.t.URLS.PDB_CLIENT}member/organization/members"
            label="Organizations Page"></link-button>
        </div>
      `;return o.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return o.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return o.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Organization </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=o.dy`<h4 class="text-white">Error</h4>`,t=o.dy`
          <div>
            <p class="text-black mb-2">Organization Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${b.t.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;return o.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=l.e.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return o.dy`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="mainSectionFormBtn"
              label="Branch/ Category" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="locationSectionFormBtn" label="Location" @click="${this.locationSectionSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainLocationSection(t)}
        </div>
      `}}displayMainSectionBtn(e){e.preventDefault(),this.formId=1,this.mainSectionFormBtn.setAttribute("raised","true"),this.locationSectionFormBtn.removeAttribute("raised")}locationSectionSectionBtn(e){e.preventDefault(),this.formId=2,this.locationSectionFormBtn.setAttribute("raised","true"),this.mainSectionFormBtn.removeAttribute("raised")}getMainLocationSection(e){return 1===this.formId?o.dy`
        ${this.mainForm(e)}
      `:o.dy`
        ${this.locationForm(e)}
      `}mainForm(e){return o.dy`
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
      <pdb-membership-update-view-branch-category memberId="${e.id}" 
        .memberInfo="${[e]}" updateType="organization" .categories="${this._accountCategories}" .branches="${this._branches}">
      </pdb-membership-update-view-branch-category>
    `}locationForm(e){return o.dy`
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
                    <h3 class="h3">Update Location Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-location memberId="${e.id}" 
        .memberInfo="${[e]}" updateType="organization" .countries="${this._countries}">
      </pdb-membership-update-view-location>
    `}firstUpdated(){}getUserId(){let e=(0,d.Jx)("member-id"),t=null!==e?(0,c.t)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return S(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,C.V)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getGroupingsMemberCategory(){return S(this,void 0,void 0,(function*(){const e=yield(0,I.L)();let t=[{category:"Select Member Category"}];if(null===e)t.push({id:0,category:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>k.e.toGroupingsMemberCategoryModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._accountCategories,...t),this._accountCategories=n}))}getClientBranch(){return S(this,void 0,void 0,(function*(){const e=yield(0,w.p)();let t=[{name:"Select Branch"}];if(null===e)t.push({id:0,name:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>B.e.toClientBranchModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._branches,...t),this._branches=n}))}getLocationCountry(){return S(this,void 0,void 0,(function*(){const e=yield(0,v.B)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>f.e.toCountryModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._countries,...t),this._countries=n}))}createRenderRoot(){return this}};N.styles=[o.iv`
   :host { display: block; }
  `],_([(0,a.IO)("#mainSectionFormBtn"),x("design:type","function"==typeof(r=void 0!==s.z&&s.z)?r:Object)],N.prototype,"mainSectionFormBtn",void 0),_([(0,a.IO)("#locationSectionFormBtn"),x("design:type","function"==typeof(i=void 0!==s.z&&s.z)?i:Object)],N.prototype,"locationSectionFormBtn",void 0),_([(0,a.Cb)({type:Number}),x("design:type",Number)],N.prototype,"memberId",void 0),_([(0,a.Cb)({type:Array}),x("design:type",Array)],N.prototype,"_activeBranchId",void 0),_([(0,a.Cb)({type:Number}),x("design:type",Number)],N.prototype,"formId",void 0),_([(0,a.Cb)({type:Array}),x("design:type",Array)],N.prototype,"_userLoginInfo",void 0),_([(0,a.Cb)({type:Boolean}),x("design:type",Boolean)],N.prototype,"_hasSetup",void 0),_([(0,a.Cb)({type:Array}),x("design:type",Array)],N.prototype,"_countries",void 0),_([(0,a.Cb)({type:Array}),x("design:type",Array)],N.prototype,"_accountCategories",void 0),_([(0,a.Cb)({type:Array}),x("design:type",Array)],N.prototype,"_branches",void 0),N=_([(0,a.Mo)("pdb-membership-update-organization-branch-category-location"),x("design:paramtypes",[])],N)}},e=>(e.O(0,[2185,5744,9674,7154,1080,5291,6236,6069,4808,7751,2743,9341,3712],(()=>(4007,e(e.s=4007)))),e.O())])));
//# sourceMappingURL=branch-category-status-location.js.map