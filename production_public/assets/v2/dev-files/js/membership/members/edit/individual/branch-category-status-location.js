"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.webpackNumbers=e():t.webpackNumbers=e()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/members/edit/individual/branch-category-status-location"],{80414:(t,e,s)=>{s.r(e),s.d(e,{GET_EducationStatus:()=>a});var n=s(48485),o=s(87270),r=s(14492),i=s(33600);function a(t=null,e=""){return s=this,a=void 0,l=function*(){const s=(0,i.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-status/education"+(null===t?"":"/"+t)+e,c=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new r.NetWorkCallResponses("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function n(t){try{r(l.next(t))}catch(t){e(t)}}function o(t){try{r(l.throw(t))}catch(t){e(t)}}function r(e){var s;e.done?t(e.value):(s=e.value,s instanceof c?s:new c((function(t){t(s)}))).then(n,o)}r((l=l.apply(s,a||[])).next())}));var s,a,c,l}},70066:(t,e,s)=>{s.r(e),s.d(e,{GET_MaritalStatus:()=>a});var n=s(48485),o=s(87270),r=s(14492),i=s(33600);function a(t=null,e=""){return s=this,a=void 0,l=function*(){const s=(0,i.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-status/marital"+(null===t?"":"/"+t)+e,c=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new r.NetWorkCallResponses("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function n(t){try{r(l.next(t))}catch(t){e(t)}}function o(t){try{r(l.throw(t))}catch(t){e(t)}}function r(e){var s;e.done?t(e.value):(s=e.value,s instanceof c?s:new c((function(t){t(s)}))).then(n,o)}r((l=l.apply(s,a||[])).next())}));var s,a,c,l}},60745:(t,e,s)=>{s.r(e),s.d(e,{GET_OccupationStatus:()=>a});var n=s(48485),o=s(87270),r=s(14492),i=s(33600);function a(t=null,e=""){return s=this,a=void 0,l=function*(){const s=(0,i.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-status/occupation"+(null===t?"":"/"+t)+e,c=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new r.NetWorkCallResponses("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function n(t){try{r(l.next(t))}catch(t){e(t)}}function o(t){try{r(l.throw(t))}catch(t){e(t)}}function r(e){var s;e.done?t(e.value):(s=e.value,s instanceof c?s:new c((function(t){t(s)}))).then(n,o)}r((l=l.apply(s,a||[])).next())}));var s,a,c,l}},33099:(t,e,s)=>{s.r(e),s.d(e,{PATCH_UserStatusInfo:()=>u});var n=s(86455),o=s.n(n),r=s(48485),i=s(87270),a=s(14492),c=s(8967),l=s(33600),d=function(t,e,s,n){return new(s||(s=Promise))((function(o,r){function i(t){try{c(n.next(t))}catch(t){r(t)}}function a(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(i,a)}c((n=n.apply(t,e||[])).next())}))};function u(t){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),s=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-status/info/"+t,n=document.querySelector('[make-general-posts="members-user-status-info"]'),u=new FormData(n);return o().fire({title:"Update User Status Info?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:t=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(s,{method:"PATCH",body:u,headers:{Authorization:"Token "+e.token}},!1).then((t=>{const e=new a.NetWorkCallResponses("post",t,!1,n),s=e.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let t=[];s.unknownError.forEach((e=>{e.errors.forEach((s=>{let n={error:e.id+": "+s};"non_field_errors"===e.id&&(n={error:s}),t.push(n)}))}));const e=(0,c.https_swal_error_format)(t);o().showValidationMessage(`${e}`)}return e})).catch((t=>{o().showValidationMessage(`${String(t)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((t=>{if(t.isConfirmed){let e="Success",s=!1;const n=t.value;if(n instanceof Object){const t=n.response;e=String(t.message),s=n.response.success}s&&o().fire({title:e,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},31649:(t,e,s)=>{s.r(e),s.d(e,{POST_UserStatusInfo:()=>u});var n=s(86455),o=s.n(n),r=s(48485),i=s(87270),a=s(14492),c=s(8967),l=s(33600),d=function(t,e,s,n){return new(s||(s=Promise))((function(o,r){function i(t){try{c(n.next(t))}catch(t){r(t)}}function a(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(i,a)}c((n=n.apply(t,e||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),e=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-status/info",s=document.querySelector('[make-general-posts="members-user-status-info"]'),n=new FormData(s);return o().fire({title:"Add User Status Info?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(e,{method:"POST",body:n,headers:{Authorization:"Token "+t.token}},!1).then((t=>{const e=new a.NetWorkCallResponses("post",t,!1,s),n=e.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let t=[];n.unknownError.forEach((e=>{e.errors.forEach((s=>{let n={error:e.id+": "+s};"non_field_errors"===e.id&&(n={error:s}),t.push(n)}))}));const e=(0,c.https_swal_error_format)(t);o().showValidationMessage(`${e}`)}return e})).catch((t=>{o().showValidationMessage(`${String(t)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((t=>{if(t.isConfirmed){let e="Success",s=!1;const n=t.value;if(n instanceof Object){const t=n.response;e=String(t.message),s=n.response.success}s&&o().fire({title:e,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},80109:(t,e,s)=>{s.r(e),s.d(e,{GET_ProfessionStatus:()=>a});var n=s(48485),o=s(87270),r=s(14492),i=s(33600);function a(t=null,e=""){return s=this,a=void 0,l=function*(){const s=(0,i.getUserLoginInfoCookie)(),a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-status/profession"+(null===t?"":"/"+t)+e,c=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new r.NetWorkCallResponses("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function n(t){try{r(l.next(t))}catch(t){e(t)}}function o(t){try{r(l.throw(t))}catch(t){e(t)}}function r(e){var s;e.done?t(e.value):(s=e.value,s instanceof c?s:new c((function(t){t(s)}))).then(n,o)}r((l=l.apply(s,a||[])).next())}));var s,a,c,l}},43690:(t,e,s)=>{s.r(e),s.d(e,{SwitchInput:()=>a});var n=s(85862),o=s(59662),r=(s(29975),s(16788),function(t,e,s,n){var o,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(r<3?o(i):r>3?o(e,s,i):o(e,s))||i);return r>3&&i&&Object.defineProperty(e,s,i),i}),i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let a=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(t){this.isSelected=t.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((t=>{t.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};a.styles=[n.css`
      :host {
        display: block;
      }
    `],r([(0,o.property)({type:String}),i("design:type",String)],a.prototype,"name",void 0),r([(0,o.property)({type:String}),i("design:type",String)],a.prototype,"label",void 0),r([(0,o.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"selected",void 0),r([(0,o.property)({type:String}),i("design:type",String)],a.prototype,"value",void 0),r([(0,o.property)({type:Boolean}),i("design:type",Boolean)],a.prototype,"isSelected",void 0),a=r([(0,o.customElement)("switch-input")],a)},3332:(t,e,s)=>{s.r(e),s.d(e,{PdbMembershipUpdateBranchCategoryStatusLocation:()=>F}),s(43753);var n,o,r,i=s(85862),a=s(59662),c=(s(15474),s(23283)),l=(s(40789),s(66163),s(63313),s(51511),s(37725),s(67052)),d=s(44672),u=s(26656),m=s(77684),p=s(27712),h=s(33600),f=s(17725),y=s(48485),b=s(91354),v=s(41302),S=s(19981),g=(s(48763),s(74657),s(43683),s(12761)),_=s(9446),w=(s(82342),s(39280),s(36286),s(26224)),I=s(60675),A=s(82730),C=s(96432),k=s(30102),x=s(46425),B=s(80414),O=s(70066),N=s(60745),$=s(80109),E=s(56445),T=s(22752),M=s(90072),U=s(88527),R=function(t,e,s,n){var o,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(r<3?o(i):r>3?o(e,s,i):o(e,s))||i);return r>3&&i&&Object.defineProperty(e,s,i),i},P=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},L=function(t,e,s,n){return new(s||(s=Promise))((function(o,r){function i(t){try{c(n.next(t))}catch(t){r(t)}}function a(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(i,a)}c((n=n.apply(t,e||[])).next())}))};let F=class extends i.LitElement{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this.formId=1,this._userLoginInfo=null,this._hasSetup=!1,this._countries=[],this._accountCategories=[],this._branches=[],this._maritalStatuses=[],this._occupationStatuses=[],this._professionStatuses=[],this._educationStatuses=[],this.memberStatusInfo=[]}set pdbBranchMember(t){this._pdbBranchMember=t,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return L(this,void 0,void 0,(function*(){t.connectedCallback.call(this),(0,p.AppSetup)().then((()=>this._hasSetup=!0));const e=(0,f.getActiveBranchIdCookie)();this._activeBranchId=null===e?null:[e],this._userLoginInfo=[(0,h.getUserLoginInfoCookie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember(),yield this.getClientBranch(),yield this.getGroupingsMemberCategory(),yield this.getUserStatusInfo(),yield this.getMaritalStatus(),yield this.getOccupationStatus(),yield this.getProfessionStatus(),yield this.getEducationStatus(),yield this.getLocationCountry())}))}disconnectedCallback(){}render(){var t;if(this._hasSetup){if(null===(t=(0,b.getAppSettingsExtraSettings)())||void 0===t?void 0:t.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(!(0,v.AppSettingsExtraUserAccess)({pageId:S.PAGE__IDS.edit,viewType:"Edit"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const t=i.html`<h4 class="text-white">Error</h4>`,e=i.html`
        <div>
          <p class="text-black mb-2">Member Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to members page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
            href="${y.CONSTANTS.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
        </div>
      `;return i.html`<alert-card warning .header="${t}" .content="${e}"></alert-card>`}{if(null===this.pdbBranchMember)return i.html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return i.html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Member </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const t=i.html`<h4 class="text-white">Error</h4>`,e=i.html`
          <div>
            <p class="text-black mb-2">Member Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
              href="${y.CONSTANTS.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
          </div>
        `;return i.html`<alert-card warning .header="${t}" .content="${e}"></alert-card>`}const t=this.pdbBranchMember.data,e=m.Convert.toMembershipMixedUserModel(JSON.stringify(Array.isArray(t)?t[0]:t));return i.html`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="mainSectionFormBtn"
              label="Branch/ Category" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="statusSectionFormBtn" label="Status" @click="${this.statusSectionSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="locationSectionFormBtn" label="Location" @click="${this.locationSectionSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainStatusLocationSection(e)}
        </div>
      `}}displayMainSectionBtn(t){t.preventDefault(),this.formId=1,this.mainSectionFormBtn.setAttribute("raised","true"),this.statusSectionFormBtn.removeAttribute("raised"),this.locationSectionFormBtn.removeAttribute("raised")}statusSectionSectionBtn(t){t.preventDefault(),this.formId=2,this.statusSectionFormBtn.setAttribute("raised","true"),this.mainSectionFormBtn.removeAttribute("raised"),this.locationSectionFormBtn.removeAttribute("raised")}locationSectionSectionBtn(t){t.preventDefault(),this.formId=3,this.locationSectionFormBtn.setAttribute("raised","true"),this.mainSectionFormBtn.removeAttribute("raised"),this.statusSectionFormBtn.removeAttribute("raised")}getMainStatusLocationSection(t){return 1===this.formId?i.html`
        ${this.mainForm(t)}
      `:2===this.formId?i.html`
        ${this.statusForm(t)}
      `:i.html`
        ${this.locationForm(t)}
      `}mainForm(t){return i.html`
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
                    <h3 class="h3">Update Contact Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-branch-category memberId="${t.id}" 
        .memberInfo="${[t]}" updateType="member" .categories="${this._accountCategories}" .branches="${this._branches}">
      </pdb-membership-update-view-branch-category>
    `}statusForm(t){return i.html`
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
                    <h3 class="h3">Update Status Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-status memberId="${t.id}" 
        .memberStatusInfo="${this.memberStatusInfo}" .maritalStatusInfo="${this._maritalStatuses}"
        .occupationStatusInfo="${this._occupationStatuses}" .professionStatusInfo="${this._professionStatuses}"
        .educationStatusInfo="${this._educationStatuses}">
      </pdb-membership-update-view-status>
    `}locationForm(t){return i.html`
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
                    <h3 class="h3">Update Location Data!</h3>
                  </label>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pdb-membership-update-view-location memberId="${t.id}" 
        .memberInfo="${[t]}" updateType="member" .countries="${this._countries}">
      </pdb-membership-update-view-location>
    `}firstUpdated(){}getUserId(){let t=(0,d.urlQueryParamsGet)("member-id"),e=null!==t?(0,l.base64Decode)(t):null;this.memberId=Number.isNaN(e)?null:Number(e)}getMember(){return L(this,void 0,void 0,(function*(){let t=0;null!==this._activeBranchId&&(t=this._activeBranchId[0].id);const e=yield(0,u.GET_MembershipUsers)(this.memberId,"?branchId="+t,!0);this.pdbBranchMember=null===e?void 0:e.response}))}getGroupingsMemberCategory(){return L(this,void 0,void 0,(function*(){const t=yield(0,M.GET_MemberGroupingsMemberCategories)();let e=[{category:"Select Member Category"}];if(null===t)e.push({id:0,category:"**NOT FOUND**"});else if(!0===t.response.success&&"length"in t.response.data){const s=t.response.data.map((t=>U.Convert.toGroupingsMemberCategoryModel(JSON.stringify(t))));e=[...e,...s]}const s=[];s.push(...this._accountCategories,...e),this._accountCategories=s}))}getClientBranch(){return L(this,void 0,void 0,(function*(){const t=yield(0,w.GET_ClientBranches)();let e=[{name:"Select Branch"}];if(null===t)e.push({id:0,name:"**NOT FOUND**"});else if(!0===t.response.success&&"length"in t.response.data){const s=t.response.data.map((t=>I.Convert.toClientBranchModel(JSON.stringify(t))));e=[...e,...s]}const s=[];s.push(...this._branches,...e),this._branches=s}))}getMaritalStatus(){return L(this,void 0,void 0,(function*(){const t=yield(0,O.GET_MaritalStatus)(null,"?memberId="+this.memberId);let e=[{name:"Select Marital Status"}];if(null===t)e.push({id:0,name:"**NOT FOUND**"});else if(!0===t.response.success&&"length"in t.response.data){const s=t.response.data.map((t=>C.Convert.toMaritalStatusModel(JSON.stringify(t))));e=[...e,...s]}const s=[];s.push(...this._maritalStatuses,...e),this._maritalStatuses=s}))}getOccupationStatus(){return L(this,void 0,void 0,(function*(){const t=yield(0,N.GET_OccupationStatus)(null,"?memberId="+this.memberId);let e=[{name:"Select Occupation Status"}];if(null===t)e.push({id:0,name:"**NOT FOUND**"});else if(!0===t.response.success&&"length"in t.response.data){const s=t.response.data.map((t=>k.Convert.toOccupationStatusModel(JSON.stringify(t))));e=[...e,...s]}const s=[];s.push(...this._occupationStatuses,...e),this._occupationStatuses=s}))}getProfessionStatus(){return L(this,void 0,void 0,(function*(){const t=yield(0,$.GET_ProfessionStatus)(null,"?memberId="+this.memberId);let e=[{name:"Select Profession Status"}];if(null===t)e.push({id:0,name:"**NOT FOUND**"});else if(!0===t.response.success&&"length"in t.response.data){const s=t.response.data.map((t=>x.Convert.toProfessionStatusModel(JSON.stringify(t))));e=[...e,...s]}const s=[];s.push(...this._professionStatuses,...e),this._professionStatuses=s}))}getEducationStatus(){return L(this,void 0,void 0,(function*(){const t=yield(0,B.GET_EducationStatus)(null,"?memberId="+this.memberId);let e=[{name:"Select Education Status"}];if(null===t)e.push({id:0,name:"**NOT FOUND**"});else if(!0===t.response.success&&"length"in t.response.data){const s=t.response.data.map((t=>A.Convert.toEducationStatusModel(JSON.stringify(t))));e=[...e,...s]}const s=[];s.push(...this._educationStatuses,...e),this._educationStatuses=s}))}getUserStatusInfo(){return L(this,void 0,void 0,(function*(){const t=yield(0,E.GET_UserStatusInfo)(null,"?memberId="+this.memberId);if(null===t)this.memberStatusInfo=[];else{const e=Array.isArray(t.paginResponse.results)?t.paginResponse.results:[t.paginResponse.results];this.memberStatusInfo=e.map((t=>T.Convert.toUserStatusModel(JSON.stringify(t))))}}))}getLocationCountry(){return L(this,void 0,void 0,(function*(){const t=yield(0,_.GET_LocationCountry)(null,"?client=0");let e=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===t)e.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===t.response.success&&"length"in t.response.data){const s=t.response.data.map((t=>g.Convert.toCountryModel(JSON.stringify(t))));e=[...e,...s]}const s=[];s.push(...this._countries,...e),this._countries=s}))}createRenderRoot(){return this}};F.styles=[i.css`
   :host { display: block; }
  `],R([(0,a.query)("#mainSectionFormBtn"),P("design:type","function"==typeof(n=void 0!==c.Button&&c.Button)?n:Object)],F.prototype,"mainSectionFormBtn",void 0),R([(0,a.query)("#statusSectionFormBtn"),P("design:type","function"==typeof(o=void 0!==c.Button&&c.Button)?o:Object)],F.prototype,"statusSectionFormBtn",void 0),R([(0,a.query)("#locationSectionFormBtn"),P("design:type","function"==typeof(r=void 0!==c.Button&&c.Button)?r:Object)],F.prototype,"locationSectionFormBtn",void 0),R([(0,a.property)({type:Number}),P("design:type",Number)],F.prototype,"memberId",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_activeBranchId",void 0),R([(0,a.property)({type:Number}),P("design:type",Number)],F.prototype,"formId",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_userLoginInfo",void 0),R([(0,a.property)({type:Boolean}),P("design:type",Boolean)],F.prototype,"_hasSetup",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_countries",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_accountCategories",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_branches",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_maritalStatuses",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_occupationStatuses",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_professionStatuses",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"_educationStatuses",void 0),R([(0,a.property)({type:Array}),P("design:type",Array)],F.prototype,"memberStatusInfo",void 0),F=R([(0,a.customElement)("pdb-membership-update-branch-category-status-location"),P("design:paramtypes",[])],F)},36286:(t,e,s)=>{s.r(e),s.d(e,{PdbMembershipUpdateViewStatus:()=>l}),s(51511),s(23283),s(40789),s(63313),s(43690);var n=s(85862),o=s(59662),r=(s(48763),s(33099)),i=s(31649),a=function(t,e,s,n){var o,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(r<3?o(i):r>3?o(e,s,i):o(e,s))||i);return r>3&&i&&Object.defineProperty(e,s,i),i},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends n.LitElement{constructor(){super(),this.memberStatusInfo=null,this.maritalStatusInfo=[],this.selectedMaritalStatus=0,this.occupationStatusInfo=[],this.selectedOccupationStatus=0,this.professionStatusInfo=[],this.selectedProfessionStatus=0,this.educationStatusInfo=[],this.selectedEducationStatus=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberStatusInfo?this.pageLoading:(this.memberStatusInfo.length<1&&this.memberStatusInfo.push(null),this.memberStatusInfo.map((t=>n.html`
      <form method="post" action="#" class="form !my-1" make-general-posts="members-user-status-info" enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Has Disability</h4>
              <switch-input name="disability" class="w-full" id="disability" ?selected="${null==t?void 0:t.disability}"
                label="Has Disability?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Marital Status</h4>
              <mwc-select name="maritalStatus" id="maritalStatus" outlined required @change="${this.maritalStatusChanged}">
                ${this.maritalStatusInfo.map((e=>(null==t?void 0:t.maritalStatus.id)===e.id?n.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:n.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                <mwc-list-item value="other_value">Other Marital Status</mwc-list-item>
              </mwc-select>
            </div>
            ${"other_value"===this.selectedMaritalStatus?n.html`
              <div class="p-2">
                <h4 class="font-semibold my-2">Enter Other Marital Status</h4>
                <mwc-textfield name="other_maritalStatus" id="other_maritalStatus" label="Enter Other Marital Status" outlined type="text">
                </mwc-textfield>
              </div>
            `:n.nothing}
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Occupational Status</h4>
              <mwc-select name="occupationalStatus" id="occupationalStatus" outlined required @change="${this.occupationStatusChanged}">
                ${this.occupationStatusInfo.map((e=>(null==t?void 0:t.occupationalStatus.id)===e.id?n.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:n.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                <mwc-list-item value="other_value">Other Occupational Status</mwc-list-item>
              </mwc-select>
            </div>
            ${"other_value"===this.selectedOccupationStatus?n.html`
              <div class="p-2">
                <h4 class="font-semibold my-2">Enter Other Occupational Status</h4>
                <mwc-textfield name="other_occupationalStatus" id="other_occupationalStatus" label="Enter Other Occupational Status" outlined type="text">
                </mwc-textfield>
              </div>
            `:n.nothing}
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Profession Status</h4>
              <mwc-select name="professionStatus" id="professionStatus" outlined required @change="${this.professionStatusChanged}">
                ${this.professionStatusInfo.map((e=>(null==t?void 0:t.professionStatus.id)===e.id?n.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:n.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                <mwc-list-item value="other_value">Other Profession Status</mwc-list-item>
              </mwc-select>
            </div>
            ${"other_value"===this.selectedProfessionStatus?n.html`
              <div class="p-2">
                <h4 class="font-semibold my-2">Enter Other Profession Status</h4>
                <mwc-textfield name="other_professionStatus" id="other_professionStatus" label="Enter Other Profession Status" outlined type="text">
                </mwc-textfield>
              </div>
            `:n.nothing}
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Educational Status</h4>
              <mwc-select name="educationalStatus" id="educationalStatus" outlined required @change="${this.educationStatusChanged}">
                ${this.educationStatusInfo.map((e=>(null==t?void 0:t.educationalStatus.id)===e.id?n.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:n.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                <mwc-list-item value="other_value">Other Educational Status</mwc-list-item>
              </mwc-select>
            </div>
            ${"other_value"===this.selectedEducationStatus?n.html`
              <div class="p-2">
                <h4 class="font-semibold my-2">Enter Other Educational Status</h4>
                <mwc-textfield name="other_educationalStatus" id="other_educationalStatus" label="Enter Other Educational Status" outlined type="text">
                </mwc-textfield>
              </div>
            `:n.nothing}
            <input type="hidden" name="memberId" id="memberId" value="${this.memberId}" />
          </div>
        </div>
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
          <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
          </mwc-button>
        </div>
      </form>
     `)))}get pageLoading(){return n.html`
    <div class="main-container">
      <div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>
    </div>
   `}maritalStatusChanged(t){this.selectedMaritalStatus=t.currentTarget.value}occupationStatusChanged(t){this.selectedOccupationStatus=t.currentTarget.value}professionStatusChanged(t){this.selectedProfessionStatus=t.currentTarget.value}educationStatusChanged(t){this.selectedEducationStatus=t.currentTarget.value}firstUpdated(){}submitForm(t){return e=this,s=void 0,o=function*(){let t,e;this.memberStatusInfo.length<1||null===this.memberStatusInfo[0]?t=!0:(t=!1,e=this.memberStatusInfo[0].id),t?yield(0,i.POST_UserStatusInfo)():yield(0,r.PATCH_UserStatusInfo)(e)},new((n=void 0)||(n=Promise))((function(t,r){function i(t){try{c(o.next(t))}catch(t){r(t)}}function a(t){try{c(o.throw(t))}catch(t){r(t)}}function c(e){var s;e.done?t(e.value):(s=e.value,s instanceof n?s:new n((function(t){t(s)}))).then(i,a)}c((o=o.apply(e,s||[])).next())}));var e,s,n,o}createRenderRoot(){return this}};l.styles=[n.css`
   :host { display: block; }
  `],a([(0,o.property)({type:Number}),c("design:type",Number)],l.prototype,"memberId",void 0),a([(0,o.property)({type:Array}),c("design:type",Array)],l.prototype,"memberStatusInfo",void 0),a([(0,o.property)({type:Array}),c("design:type",Array)],l.prototype,"maritalStatusInfo",void 0),a([(0,o.property)({type:Number}),c("design:type",Object)],l.prototype,"selectedMaritalStatus",void 0),a([(0,o.property)({type:Array}),c("design:type",Array)],l.prototype,"occupationStatusInfo",void 0),a([(0,o.property)({type:Number}),c("design:type",Object)],l.prototype,"selectedOccupationStatus",void 0),a([(0,o.property)({type:Array}),c("design:type",Array)],l.prototype,"professionStatusInfo",void 0),a([(0,o.property)({type:Number}),c("design:type",Object)],l.prototype,"selectedProfessionStatus",void 0),a([(0,o.property)({type:Array}),c("design:type",Array)],l.prototype,"educationStatusInfo",void 0),a([(0,o.property)({type:Number}),c("design:type",Object)],l.prototype,"selectedEducationStatus",void 0),l=a([(0,o.customElement)("pdb-membership-update-view-status"),c("design:paramtypes",[])],l)}},t=>(t.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_mixe-07bf9a","src_assets_styles_views_admin_user_form_scss-src_assets_styles_views_tailwind-output_unaccess-c60780","src_addons_interfaces_location_constituency_model_index_ts-src_addons_interfaces_location_cou-9ea63f","src_addons_interfaces_members_user_status_education_status_index_ts-src_addons_interfaces_mem-3127aa","src_assets_styles_views_admin_user_form_scss-src_addons_functions_url_query_params_index_ts-s-f7b659","src_addons_interfaces_members_user_status_index_ts-src_addons_network_members_membership_user-d20ba1","shared"],(()=>(3332,t(t.s=3332)))),t.O())])));
//# sourceMappingURL=branch-category-status-location.js.map