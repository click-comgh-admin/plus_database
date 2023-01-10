"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7005],{2869:(e,t,r)=>{function i(e){return{id:Number(e.id),name:e.name}}r.d(t,{y:()=>i})},7553:(e,t,r)=>{r.d(t,{q:()=>d});var i=r(771),n=r(7270),a=r(596),o=r(3600);function d(e=null){return t=this,r=void 0,s=function*(){const t=(0,o.Ie)(),r=i.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),d=yield(0,n.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new a.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new a.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,i){function n(e){try{o(s.next(e))}catch(e){i(e)}}function a(e){try{o(s.throw(e))}catch(e){i(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof d?r:new d((function(e){e(r)}))).then(n,a)}o((s=s.apply(t,r||[])).next())}));var t,r,d,s}},6656:(e,t,r)=>{r.d(t,{E:()=>d});var i=r(771),n=r(7270),a=r(596),o=r(3600);function d(e=null,t="",r=!1){return d=this,s=void 0,c=function*(){const d=i.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,s=i.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,l=(0,o.Ie)(),c=r?s:d,m=yield(0,n.d)(c,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new a.H("get",m)}catch(e){console.error({error:e});let t=m;return t.error=e,new a.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{n(c.next(e))}catch(e){t(e)}}function i(e){try{n(c.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,i)}n((c=c.apply(d,s||[])).next())}));var d,s,l,c}},7442:(e,t,r)=>{r.d(t,{l:()=>m});var i=r(6455),n=r.n(i),a=r(771),o=r(7270),d=r(596),s=r(8967),l=r(3600),c=function(e,t,r,i){return new(r||(r=Promise))((function(n,a){function o(e){try{s(i.next(e))}catch(e){a(e)}}function d(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,d)}s((i=i.apply(e,t||[])).next())}))};function m(e,t=null){return c(this,void 0,void 0,(function*(){const r=(0,l.Ie)(),i=a.t.URLS.AKWAABA_API_BASE_URL+"members/user/"+e,m=document.querySelector('[make-general-posts="members-user"]'),u=new FormData(m);return n().fire({title:null!=t?t:"Update Member Data?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>c(this,void 0,void 0,(function*(){return yield(0,o.d)(i,{method:"PATCH",body:u,headers:{Authorization:"Token "+r.token}},!1).then((e=>{const t=new d.H("post",e,!1,m),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let i={error:t.id+": "+r};"non_field_errors"===t.id&&(i={error:r}),e.push(i)}))}));const t=(0,s.T)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),r=i.response.success}r&&n().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},7326:(e,t,r)=>{r.r(t),r.d(t,{PdbMembershipUpdateBioData:()=>_});var i,n,a,o,d=r(9392),s=r(1936),l=(r(1877),r(5248)),c=(r(9261),r(2169),r(3313),r(6811),r(7725),r(7442)),m=r(7052),u=r(4672),b=r(6656),p=r(7684),h=r(9665),f=r(3600),y=r(2004),v=r(771),g=r(2145),w=r(1302),x=r(9981),k=(r(8763),r(4657),r(3683),r(2869)),I=r(7553),B=(r(1604),function(e,t,r,i){var n,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(o=(a<3?n(o):a>3?n(t,r,o):n(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}),S=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,r,i){return new(r||(r=Promise))((function(n,a){function o(e){try{s(i.next(e))}catch(e){a(e)}}function d(e){try{s(i.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,d)}s((i=i.apply(e,t||[])).next())}))};!function(e){e[e.bio=0]="bio",e[e.cv=1]="cv",e[e.id=2]="id"}(o||(o={}));let _=class extends d.oi{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this.formId=1,this._userLoginInfo=null,this._genders=[],this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,h.f)().then((()=>this._hasSetup=!0));const t=(0,y.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,f.Ie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getGenders(),yield this.getMember())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,g.H)())||void 0===e?void 0:e.expiration_date.expired)return d.dy`<account-expired-component></account-expired-component>`;if(!(0,w.H)({pageId:x.W.edit,viewType:"Edit"},!1))return d.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=d.dy`<h4 class="text-white">Error</h4>`,t=d.dy`
        <div>
          <p class="text-black mb-2">Member Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to members page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
            href="${v.t.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
        </div>
      `;return d.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return d.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return d.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Member </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=d.dy`<h4 class="text-white">Error</h4>`,t=d.dy`
          <div>
            <p class="text-black mb-2">Member Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
              href="${v.t.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
          </div>
        `;return d.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=p.e.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return d.dy`
        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth id="displayMainSectionBtn"
              label="Main" @click="${this.displayMainSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="displayEditableSectionBtn" label="Editable" @click="${this.displayEditableSectionBtn}"></mwc-tab>
            <mwc-tab isMinWidthIndicator isFadingIndicator minWidth
              id="displayCvIdsSectionBtn" label="Cv/ I.D" @click="${this.displayCvIdsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="py-0">
          ${this.getMainEditableCvIdsSection(t)}
        </div>
      `}}displayMainSectionBtn(e){e.preventDefault(),this.formId=1,this.mainSectionFormBtn.setAttribute("raised","true"),this.editableSectionFormBtn.removeAttribute("raised"),this.cVIdsSectionFormBtn.removeAttribute("raised")}displayEditableSectionBtn(e){e.preventDefault(),this.formId=2,this.editableSectionFormBtn.setAttribute("raised","true"),this.mainSectionFormBtn.removeAttribute("raised"),this.cVIdsSectionFormBtn.removeAttribute("raised")}displayCvIdsSectionBtn(e){e.preventDefault(),this.formId=3,this.cVIdsSectionFormBtn.setAttribute("raised","true"),this.editableSectionFormBtn.removeAttribute("raised"),this.mainSectionFormBtn.removeAttribute("raised")}getMainEditableCvIdsSection(e){return 1===this.formId?d.dy`
        ${this.mainForm(e)}
      `:2===this.formId?d.dy`
        ${this.editableForm(e)}
      `:d.dy`
        ${this.cvIdsForm(e)}
      `}mainForm(e){let t="";const r=new Date(e.dateOfBirth).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return t=[r[2],r[0],r[1]].join("-"),d.dy`
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
                    <h3 class="h3">Update Profile Bio-Data!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form !my-1" make-general-posts="members-user" submit_type="${o.bio}"
                  enctype="multipart/form-data">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter First Name</h4>
                      <mwc-textfield name="firstname" id="firstname" label="Enter First Name" outlined type="text" value="${e.firstname}"
                        required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Middle Name</h4>
                      <mwc-textfield name="middlename" id="middlename" label="Enter Middle Name" outlined type="text" value="${e.middlename}">
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Surname</h4>
                      <mwc-textfield name="surname" id="surname" label="Enter Surname" outlined type="text" value="${e.surname}"
                        required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Select Gender</h4>
                      <mwc-select name="gender" class="w-full" id="gender" label="Select Gender" outlined required>
                        <mwc-list-item value="0">Select Gender</mwc-list-item>
                        ${this._genders.map((t=>e.gender===t.id?d.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`:d.dy`<mwc-list-item value="${t.id}">${t.name}</mwc-list-item>`))}
                      </mwc-select>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Select Date of Birth</h4> 
                      <mwc-textfield name="dateOfBirth" type="date" class="w-full" id="dateOfBirth"
                        label="Select Date of Birth" value="${t}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Phone Number</h4> 
                      <mwc-textfield name="phone" multiple type="tel" class="w-full" id="phone"
                        label="Enter Phone Number" value="${e.phone}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Email Address</h4> 
                      <mwc-textfield name="email" multiple type="email" class="w-full" id="email"
                        label="Enter Email Address" value="${e.email}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Community</h4> 
                      <mwc-textfield name="community" multiple type="text" class="w-full" id="community"
                        label="Enter Community" value="${e.community}" outlined>
                      </mwc-textfield>
                    </div>
                    <div class="p-2">
                      <h4 class="font-semibold my-2">Enter Reference ID</h4> 
                      <mwc-textfield name="referenceId" multiple type="text" class="w-full" id="referenceId"
                        label="Enter Reference ID" value="${e.referenceId}" outlined>
                      </mwc-textfield>
                    </div>
                    <div class="p-2"></div>
                    <div class="p-2"></div>
                    <div class="p-2">
                      <div class="form-input-container">
                        <mwc-button class="primary" raised type="submit" label="Submit" message="Update Profile Bio-Data" submit_type="${o.bio}" @click="${this.submitForm}">
                        </mwc-button>
                      </div>
                    </div>
                  </div>
                  <div class="p-2">
                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}editableForm(e){return d.dy`
      <pdb-membership-update-view-editabilty memberId="${e.id}" ?currentEditabilty="${e.editable}"></pdb-membership-update-view-editabilty>
    `}cvIdsForm(e){return d.dy`
      <div class="w-full">
        <div class="flex justify-center my-1">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                    <div class="px-1 border border-gray-200">
                      <header
                        class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                        <label for="" class="label">
                          <mwc-icon class="icon">format_strikethrough</mwc-icon>
                          <h1 class="h1 !text-red-400">Member</h1>
                          <h3 class="h3">Update Profile C.V!</h3>
                        </label>
                      </header>
                      <form method="post" action="#" class="form !my-1" make-general-posts="members-user" submit_type="${o.cv}"
                        enctype="multipart/form-data">
                        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 mb-2">
                          <h4 class="font-semibold my-2">C.V File</h4>
                          <file-input id="profileResume" name="profileResume" label="C.V File" accept="*"
                            ?required="${!0}" ?hasLabel="${!0}" fileSelectorInput></file-input>
                        </div>
                        <div
                          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                          <mwc-button class="primary" raised type="submit" label="Submit" message="Update Member C.V" submit_type="${o.cv}" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
                      </form>
                    </div>
                    <div class="block md:hidden">
                      <div class="flex form-input-container items-center text-center">
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                        <label class="block font-medium text-sm text-gray-600 w-full">
                          ...
                        </label>
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                      </div>
                    </div>
                    <div class="px-1 border border-gray-200">
                      <header
                        class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                        <label for="" class="label">
                          <mwc-icon class="icon">format_strikethrough</mwc-icon>
                          <h1 class="h1 !text-red-400">Member</h1>
                          <h3 class="h3">Update Profile I.D!</h3>
                        </label>
                      </header> 
                      <form method="post" action="#" class="form !my-1" make-general-posts="members-user" submit_type="${o.id}"
                        enctype="multipart/form-data">
                        <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 mb-2">
                          <h4 class="font-semibold my-2">Identification File</h4>
                          <file-input id="profileIdentification" name="profileIdentification" label="Identification File" accept="*"
                            ?required="${!0}" ?hasLabel="${!0}" fileSelectorInput></file-input>
                        </div>
                        <div
                          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                          <mwc-button class="primary" raised type="submit" label="Submit" message="Update Member I.D" submit_type="${o.id}" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getUserId(){let e=(0,u.Jx)("member-id"),t=null!==e?(0,m.t)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return A(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,b.E)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}getGenders(){return A(this,void 0,void 0,(function*(){const e=yield(0,I.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,k.y)(e))));const r=[];r.push(...this._genders,...t),this._genders=r}))}submitForm(e){return A(this,void 0,void 0,(function*(){e.preventDefault();const t=e.currentTarget.getAttribute("message"),r=e.currentTarget.getAttribute("submit_type"),i=this.handleMultitpleSubmitFormSelectors();i.handle(r),yield(0,c.l)(this.memberId,t),i.reset()}))}handleMultitpleSubmitFormSelectors(){return{handle:e=>{document.querySelectorAll('[make-general-posts="members-user"]').forEach((t=>{if(t.hasAttribute("make-general-posts")){const r=t.getAttribute("submit_type");e.toString()!==r&&t.setAttribute("make-general-posts","members-user--disabled")}}))},reset:()=>{document.querySelectorAll('[make-general-posts="members-user--disabled"]').forEach((e=>{e.setAttribute("make-general-posts","members-user")}))}}}createRenderRoot(){return this}};_.styles=[d.iv`
   :host { display: block; }
  `],B([(0,s.IO)("#mainSectionFormBtn"),S("design:type","function"==typeof(i=void 0!==l.z&&l.z)?i:Object)],_.prototype,"mainSectionFormBtn",void 0),B([(0,s.IO)("#editableSectionFormBtn"),S("design:type","function"==typeof(n=void 0!==l.z&&l.z)?n:Object)],_.prototype,"editableSectionFormBtn",void 0),B([(0,s.IO)("#cVIdsSectionFormBtn"),S("design:type","function"==typeof(a=void 0!==l.z&&l.z)?a:Object)],_.prototype,"cVIdsSectionFormBtn",void 0),B([(0,s.Cb)({type:Number}),S("design:type",Number)],_.prototype,"memberId",void 0),B([(0,s.Cb)({type:Array}),S("design:type",Array)],_.prototype,"_activeBranchId",void 0),B([(0,s.Cb)({type:Number}),S("design:type",Number)],_.prototype,"formId",void 0),B([(0,s.Cb)({type:Array}),S("design:type",Array)],_.prototype,"_userLoginInfo",void 0),B([(0,s.Cb)({type:Array}),S("design:type",Array)],_.prototype,"_genders",void 0),B([(0,s.Cb)({type:Boolean}),S("design:type",Boolean)],_.prototype,"_hasSetup",void 0),_=B([(0,s.Mo)("pdb-membership-update-bio-data"),S("design:paramtypes",[])],_)}},e=>(e.O(0,[2185,5744,9674,316,836,5291,6236,6069,8491,7751,4431,3712],(()=>(7326,e(e.s=7326)))),e.O())])));
//# sourceMappingURL=bio-data.js.map