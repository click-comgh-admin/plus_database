"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/member-organization"],{64026:(e,t,a)=>{a.r(t),a.d(t,{DELETE_MembershipOrganizationUsers:()=>m});var r=a(86455),s=a.n(r),i=a(48485),o=a(87270),n=a(14492),l=a(8967),d=a(33600),c=function(e,t,a,r){return new(a||(a=Promise))((function(s,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function n(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,n)}l((r=r.apply(e,t||[])).next())}))};function m(e){return c(this,void 0,void 0,(function*(){const t=(0,d.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/"+e,r={};return s().fire({title:"Remove Organization Member?",text:"Organization will be permanently deleted from your member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,o.http)(a,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new n.NetWorkCallResponses("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,l.https_swal_error_format)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const r=new n.NetWorkCallResponses("delete",a,!0);return r.postForm,r}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),a=r.response.success}s().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},98561:(e,t,a)=>{a.r(t),a.d(t,{GET_MembershipOrganizationUsers:()=>n});var r=a(48485),s=a(87270),i=a(14492),o=a(33600);function n(e=null,t="",a=!1){return n=this,l=void 0,c=function*(){const n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization"+(null===e?"":"/"+e)+t,l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-organization/location"+(null===e?"":"/"+e)+t,d=(0,o.getUserLoginInfoCookie)(),c=a?l:n,m=yield(0,s.http)(c,{method:"GET",headers:{Authorization:"Token "+d.token}},!0);try{return new i.NetWorkCallResponses("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function a(e){try{s(c.next(e))}catch(e){t(e)}}function r(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var s;t.done?e(t.value):(s=t.value,s instanceof d?s:new d((function(e){e(s)}))).then(a,r)}s((c=c.apply(n,l||[])).next())}));var n,l,d,c}},55273:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberOrganization:()=>M}),a(53029);var r,s,i,o,n=a(85862),l=a(59662),d=a(17725),c=a(67052),m=a(44672),b=(a(92715),a(48763),a(38281),a(15474),a(66163),a(16413),a(51511),a(33600)),p=a(23283),u=a(77684),h=a(28058),_=a(32413),v=a(57659),g=a(31848),f=a(29356),y=a(4596),w=a(17475),S=a(5707),C=(a(72513),a(31826),a(84846),a(62530),a(30845),a(52205),a(91506),a(74657),a(43683),a(48485)),B=a(27712),I=a(91354),x=a(41302),k=a(19981),$=a(98561),A=a(64026),N=function(e,t,a,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o},U=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e,t,a,r){return new(a||(a=Promise))((function(s,i){function o(e){try{l(r.next(e))}catch(e){i(e)}}function n(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,n)}l((r=r.apply(e,t||[])).next())}))};let M=class extends n.LitElement{constructor(){super(),this.memberId=0,this.loggedUserId=0,this.formId=1,this.tabSection2Id=1,this.page_type="mine",this.editAccess=!1,this.memberPhotoUpdateBaseUrl=`${C.CONSTANTS.URLS.PDB_CLIENT}member/organization/update/photo?member-id=`,this.memberBioDataUpdateBaseUrl=`${C.CONSTANTS.URLS.PDB_CLIENT}member/organization/update/bio-data?member-id=`,this.memberGroupSubgroupUpdateBaseUrl=`${C.CONSTANTS.URLS.PDB_CLIENT}member/organization/update/group-subgroup?member-id=`,this.memberBranchCategoryLocationUpdateBaseUrl=`${C.CONSTANTS.URLS.PDB_CLIENT}member/organization/update/branch-category-location?member-id=`,this.memberContactBaseUrl=`${C.CONSTANTS.URLS.PDB_CLIENT}member/organization/update/contact?member-id=`,this._activeBranchId=null,this._userLoginInfo=null,this._pdbBranchMember=null,this.memberGroups=null,this.memberSubGroups=null,this.memberContactInfo=null,this.memberContactPrivacy=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return P(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,B.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,d.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,b.getUserLoginInfoCookie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember(),this.pdbBranchMember.success&&(yield this.getMemberGroups(),yield this.getMemberSubgroups(),yield this.getMemberContactInfo(),yield this.getMemberContactPrivacy()))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,I.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(!(0,x.AppSettingsExtraUserAccess)({pageId:k.PAGE__IDS["view-organization"],viewType:"View"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=n.html`<h4 class="text-white">Error</h4>`,t=n.html`
        <div>
          <p class="text-black mb-2">Organization Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to organizations page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${C.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
            label="Organizations Page"></link-button>
        </div>
      `;return n.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return n.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return n.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Organization </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=n.html`<h4 class="text-white">Error</h4>`,t=n.html`
          <div>
            <p class="text-black mb-2">Organization Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${C.CONSTANTS.URLS.PDB_CLIENT}member/organization/members"
              label="Organizations Page"></link-button>
          </div>
        `;return n.html`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember,t=e.data,a=u.Convert.toMembershipMixedUserModel(JSON.stringify(Array.isArray(t)?t[0]:t)),r=e.success,s=r?(0,c.base64Encode)(String(a.id),!0):"";return n.html`
        <div class="row justify-content-center">
          <div class="col-md-4 col-lg-4 my-1">
            <div class="shadow bg-white mb-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${r?n.html`${a.organizationName}'s`:n.nothing} Logo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="member"
                  url="${r?a.logo:" profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberPhotoUpdateBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  Group(s)/ Subgroup(s)
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="groupsSectionFormBtn"
                    label="Group" @click="${this.displayGroupsSectionBtn}"></mwc-tab>
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="subGroupsSectionFormBtn" label="Sub-Group" @click="${this.displaySubGroupsSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getGroupSubgroupSection}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberGroupSubgroupUpdateBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white mt-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  Branch & Category/ Location
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="branchCategorySectionBtn"
                    label="Branch/ Category" @click="${this.displayBranchCategorySectionBtn}"></mwc-tab>
                  <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
                    id="locationSectionBtn" label="Location" @click="${this.displayLocationSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getbranchCategoryLocationSection(a)}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberBranchCategoryLocationUpdateBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-8 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${r?n.html`${a.organizationName}'s`:n.nothing} Bio Data 
                  <span>
                    <label class="mx-4">
                      <b> - Editable</b>
                      <input disabled type="checkbox" ?checked="${a.editable}"
                        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </label>
                    ${this.hasEditPermission(a)}
                  </span>
                </h4>
              </div>
              <div class="p-3 ">
                <pdb-membership-member-view-organization .memberInfo="${[a]}"></pdb-membership-member-view-organization>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberBioDataUpdateBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white mt-3">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  Contact Info & Privacy 
                </h4>
              </div>
              <div class="p-3 ">
                <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                  <pdb-membership-member-contact-data .memberContactInfo="${this.memberContactInfo}"></pdb-membership-member-contact-data>
                  <pdb-membership-member-contact-privacy .memberContactPrivacy="${this.memberContactPrivacy}"></pdb-membership-member-contact-privacy>
                </div>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberContactBaseUrl}${s}" label="Update">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `}}hasEditPermission(e){return(0,x.AppSettingsExtraUserAccess)({pageId:k.PAGE__IDS["edit-organization"],viewType:"Edit"},!1)?n.html`
      <div class="flex flex-col items-center pl-2">
        <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${e.id}" @click="${this.deleteMember}"></mwc-icon-button>
        <small class="block">Delete</small>
      </div>
    `:n.nothing}displayGroupsSectionBtn(e){e.preventDefault(),this.formId=1,this.groupsSectionFormBtn.setAttribute("raised","true"),this.subGroupsSectionFormBtn.removeAttribute("raised")}displaySubGroupsSectionBtn(e){e.preventDefault(),this.formId=2,this.subGroupsSectionFormBtn.setAttribute("raised","true"),this.groupsSectionFormBtn.removeAttribute("raised")}get getGroupSubgroupSection(){return 1===this.formId?(this.formId,n.html`
        ${this.groupData}
      `):(this.formId,n.html`
        ${this.subGroupData}
      `)}get groupData(){return n.html`
      <pdb-membership-member-groups .memberGroups="${this.memberGroups}"></pdb-membership-member-groups>
    `}get subGroupData(){return n.html`
      <pdb-membership-member-subgroups .memberSubGroups="${this.memberSubGroups}"></pdb-membership-member-subgroups>
    `}displayBranchCategorySectionBtn(e){e.preventDefault(),this.tabSection2Id=1,this.branchCategorySectionBtn.setAttribute("raised","true"),this.locationSectionBtn.removeAttribute("raised")}displayLocationSectionBtn(e){e.preventDefault(),this.tabSection2Id=3,this.locationSectionBtn.setAttribute("raised","true"),this.branchCategorySectionBtn.removeAttribute("raised")}getbranchCategoryLocationSection(e){return 1===this.tabSection2Id?(this.tabSection2Id,n.html`
        ${this.branchCategoryData(e)}
      `):(this.tabSection2Id,n.html`
        ${this.locationData(e)}
      `)}branchCategoryData(e){return n.html`
      <pdb-membership-member-branch-category .memberInfo="${[e]}"></pdb-membership-member-branch-category>
    `}locationData(e){return n.html`
      <pdb-membership-member-location .memberInfo="${[e]}"></pdb-membership-member-location>
    `}firstUpdated(){}getUserId(){let e=(0,m.urlQueryParamsGet)("view"),t=null!==e?(0,c.base64Decode)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}deleteMember(e){return P(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,A.DELETE_MembershipOrganizationUsers)(t)}))}getMember(){return P(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,$.GET_MembershipOrganizationUsers)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getMemberGroups(){return P(this,void 0,void 0,(function*(){const e=yield(0,h.GET_GroupingsGroupMembers)(null,"?memberId="+this.memberId);if(null===e)this.memberGroups=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberGroups=t.map((e=>v.Convert.toGroupMemberModel(JSON.stringify(e))))}}))}getMemberSubgroups(){return P(this,void 0,void 0,(function*(){const e=yield(0,_.GET_GroupingsSubGroupMembers)(null,"?memberId="+this.memberId);if(null===e)this.memberSubGroups=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberSubGroups=t.map((e=>g.Convert.toSubGroupMemberModel(JSON.stringify(e))))}}))}getMemberContactInfo(){return P(this,void 0,void 0,(function*(){const e=yield(0,w.GET_UserContactData)(null,"?memberId="+this.memberId);if(null===e)this.memberContactInfo=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactInfo=t.map((e=>f.Convert.toUserContactModel(JSON.stringify(e))))}}))}getMemberContactPrivacy(){return P(this,void 0,void 0,(function*(){const e=yield(0,S.GET_UserContactPrivacy)(null,"?memberId="+this.memberId);if(null===e)this.memberContactPrivacy=[];else{const t=Array.isArray(e.paginResponse.results)?e.paginResponse.results:[e.paginResponse.results];this.memberContactPrivacy=t.map((e=>y.Convert.toUserContactPrivacyModel(JSON.stringify(e))))}}))}createRenderRoot(){return this}};M.styles=[n.css`
   :host { display: block; }
  `],N([(0,l.query)("#groupsSectionFormBtn"),U("design:type","function"==typeof(r=void 0!==p.Button&&p.Button)?r:Object)],M.prototype,"groupsSectionFormBtn",void 0),N([(0,l.query)("#subGroupsSectionFormBtn"),U("design:type","function"==typeof(s=void 0!==p.Button&&p.Button)?s:Object)],M.prototype,"subGroupsSectionFormBtn",void 0),N([(0,l.query)("#branchCategorySectionBtn"),U("design:type","function"==typeof(i=void 0!==p.Button&&p.Button)?i:Object)],M.prototype,"branchCategorySectionBtn",void 0),N([(0,l.query)("#locationSectionBtn"),U("design:type","function"==typeof(o=void 0!==p.Button&&p.Button)?o:Object)],M.prototype,"locationSectionBtn",void 0),N([(0,l.property)({type:Number}),U("design:type",Number)],M.prototype,"memberId",void 0),N([(0,l.property)({type:Number}),U("design:type",Number)],M.prototype,"loggedUserId",void 0),N([(0,l.property)({type:Number}),U("design:type",Number)],M.prototype,"formId",void 0),N([(0,l.property)({type:Number}),U("design:type",Number)],M.prototype,"tabSection2Id",void 0),N([(0,l.property)({type:String}),U("design:type",String)],M.prototype,"page_type",void 0),N([(0,l.property)({type:Boolean}),U("design:type",Boolean)],M.prototype,"editAccess",void 0),N([(0,l.property)({type:String}),U("design:type",String)],M.prototype,"memberPhotoUpdateBaseUrl",void 0),N([(0,l.property)({type:String}),U("design:type",String)],M.prototype,"memberBioDataUpdateBaseUrl",void 0),N([(0,l.property)({type:String}),U("design:type",String)],M.prototype,"memberGroupSubgroupUpdateBaseUrl",void 0),N([(0,l.property)({type:String}),U("design:type",String)],M.prototype,"memberBranchCategoryLocationUpdateBaseUrl",void 0),N([(0,l.property)({type:String}),U("design:type",String)],M.prototype,"memberContactBaseUrl",void 0),N([(0,l.property)({type:Array}),U("design:type",Array)],M.prototype,"_activeBranchId",void 0),N([(0,l.property)({type:Array}),U("design:type",Array)],M.prototype,"_userLoginInfo",void 0),N([(0,l.property)({type:Array}),U("design:type",Array)],M.prototype,"memberGroups",void 0),N([(0,l.property)({type:Array}),U("design:type",Array)],M.prototype,"memberSubGroups",void 0),N([(0,l.property)({type:Array}),U("design:type",Array)],M.prototype,"memberContactInfo",void 0),N([(0,l.property)({type:Array}),U("design:type",Array)],M.prototype,"memberContactPrivacy",void 0),N([(0,l.property)({type:Boolean}),U("design:type",Boolean)],M.prototype,"_hasSetup",void 0),M=N([(0,l.customElement)("pdb-membership-member-organization"),U("design:paramtypes",[])],M)},72513:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberViewOrganization:()=>l});var r=a(85862),s=a(59662),i=(a(48763),a(51511),a(24173)),o=function(e,t,a,r){var s,i=arguments.length,o=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(o=(i<3?s(o):i>3?s(t,a,o):s(t,a))||o);return i>3&&o&&Object.defineProperty(t,a,o),o},n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends r.LitElement{constructor(){super(),this.memberInfo=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberInfo?this.pageLoading:this.memberInfo.length<1?this.pageError:this.memberInfo.map((e=>r.html`
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 my-1">
          ${this.leftSide(e)} ${this.rightSide(e)}
        </div>
        ${this.contactPerson(e)}
        ${this.businessRegistered(e)}
      `))}leftSide(e){return r.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Query</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Info</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Name</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${e.organizationName}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Organization ID</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${e.identification}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Organization Type</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${e.organizationType.type}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `}rightSide(e){return r.html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Query</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Info</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Phone</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p><a href="tel:${e.organizationPhone}" type="tel">${e.organizationPhone}</a></p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Email</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p><a href="mailto:${e.organizationEmail}" type="email">${e.organizationEmail}</a></p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Reference ID</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${e.referenceId}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `}contactPerson(e){return e.businessRegistered?r.html`
        <div class="p-1 shadow-md border rounded-sm my-4">
          <h4 class="uppercase text-base font-bold flex justify-between pl-3">Contact Person</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 my-1">
            <div class="w-full">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${e.contactPersonName} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="member"
                  url="${e.contactPersonPhoto}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-1 border-t-2 flex justify-end">
              </div>
            </div>
            <div class="my-1">
              <div class="mdc-data-table w-full" mdc-data-table="data-table">
                <div class="mdc-data-table__table-container">
                  <table class="mdc-data-table__table" aria-label="New Meeting Member">
                    <thead>
                      <tr class="mdc-data-table__header-row">
                        <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                          <div class="mdc-data-table__header-cell-wrapper">
                            <div class="mdc-data-table__header-cell-label">
                              <b>Query</b>
                            </div>
                            <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                          </div>
                        </th>
                        <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                          <div class="mdc-data-table__header-cell-wrapper">
                            <div class="mdc-data-table__header-cell-label">
                              <b>Info</b>
                            </div>
                            <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="mdc-data-table__content">
                      <tr class="mdc-data-table__row">
                        <th class="mdc-data-table__cell" scope="row">
                          <div class="flex items-center">
                            <p>Name</p>
                          </div>
                        </th>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                          <div class="">
                            <p>${e.contactPersonName}</p>
                          </div>
                        </td>
                      </tr>
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <p>Gender</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <p>${1===e.contactPersonGender?"Male":2===e.contactPersonGender?"Female":"-"}</p>
                        </div>
                      </td>
                    </tr>
                      <tr class="mdc-data-table__row">
                        <th class="mdc-data-table__cell" scope="row">
                          <div class="flex items-center">
                            <p>Phone</p>
                          </div>
                        </th>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                          <div class="">
                            <p><a href="tel:${e.contactPersonPhone}" type="tel">${e.contactPersonPhone}</a></p>
                          </div>
                        </td>
                      </tr>
                      <tr class="mdc-data-table__row">
                        <th class="mdc-data-table__cell" scope="row">
                          <div class="flex items-center">
                            <p>Email</p>
                          </div>
                        </th>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                          <div class="">
                            <p><a href="mailto:${e.contactPersonEmail}" type="email">${e.contactPersonEmail}</a></p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      `:r.nothing}businessRegistered(e){var t;return e.businessRegistered?r.html`
        <div class="my-1">
          <h4 class="uppercase text-base font-bold flex justify-between">Registered Business</h4>
          <div class="mdc-data-table w-full" mdc-data-table="data-table">
            <div class="mdc-data-table__table-container">
              <table class="mdc-data-table__table" aria-label="New Meeting Member">
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Query</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                    <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Info</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Date of Incorporation</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${(0,i.getDate)(e.dateOfIncorporation)}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Certificates</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        ${null===(t=e.certificates)||void 0===t?void 0:t.map((e=>(console.log({"certificate-certificate":e}),r.html`
                            <p>
                              <a href="${e.attachment.attachment}" type="download">${e.attachment.filename}</a>
                            </p>
                          `)))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `:r.nothing}get pageLoading(){return r.html`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=r.html`<h4 class="text-gray-600">No Data Found!</h4>`,t=r.nothing;return r.html`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};l.styles=[r.css`
   :host { display: block; }
  `],o([(0,s.property)({type:Array}),n("design:type",Array)],l.prototype,"memberInfo",void 0),l=o([(0,s.customElement)("pdb-membership-member-view-organization"),n("design:paramtypes",[])],l)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_interfaces_members_user_mixed_index_ts","src_addons_interfaces_members_groupings_subgroup_models_index_ts","src_assets_styles_views_admin_user_main_scss-src_assets_styles_views_tailwind-output_unaccess-123ac5","src_addons_functions_https_https_swal_error_format_ts-src_addons_functions_url_query_params_i-209432","src_addons_interfaces_members_user_contact_index_ts-src_addons_interfaces_members_user_contac-515a92","src_assets_styles_views_admin_user_main_scss-src_addons_widgets_profile_photo_index_ts-src_vi-e43096","shared"],(()=>(55273,e(e.s=55273)))),e.O())])));
//# sourceMappingURL=member-organization.js.map