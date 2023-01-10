/*! For license information please see edit.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[8327],{8967:(e,t,r)=>{r.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.d(t,{Jx:()=>o,O1:()=>n,Vc:()=>i,W3:()=>s});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},i=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},267:(e,t,r)=>{function n(e){return{id:"number"==typeof e?e:Number(e.id),clientId:Number(e.clientId),category:String(e.category),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}r.d(t,{Y:()=>n})},6224:(e,t,r)=>{r.d(t,{p:()=>a});var n=r(771),o=r(7270),i=r(596),s=r(3600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,s.Ie)(),r=n.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,o.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,n){function o(e){try{s(c.next(e))}catch(e){n(e)}}function i(e){try{s(c.throw(e))}catch(e){n(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(o,i)}s((c=c.apply(t,r||[])).next())}));var t,r,a,c}},2892:(e,t,r)=>{r.d(t,{c:()=>a});var n=r(771),o=r(7270),i=r(596),s=r(3600);function a(e=null,t=""){return r=this,a=void 0,l=function*(){const r=(0,s.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,o.d)(a,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new i.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new i.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{i(l.next(e))}catch(e){t(e)}}function o(e){try{i(l.throw(e))}catch(e){t(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(n,o)}i((l=l.apply(r,a||[])).next())}));var r,a,c,l}},6095:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsGroupSubgroupGroupEdit:()=>T});var n=r(9392),o=r(1936),i=(r(1239),r(9261),r(5248),r(3313),r(5866),r(3629),r(3600)),s=r(2004),a=r(6224),c=r(72),l=r(7052),d=r(4672),u=r(267),p=r(2892),h=r(6455),m=r.n(h),f=r(771),g=r(7270),y=r(596),b=r(8967),v=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};r(3683),r(4657);var w=r(9665),_=r(2145),I=r(1302),C=r(7641),A=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};let T=class extends n.oi{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.groupId=0,this.groupIdEnc=null,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._groups=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,w.f)().then((()=>this._hasSetup=!0));const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,i.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getGroupId(),this.getGroup(this.groupId),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,_.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,I.H)({pageId:C.W.grouping,viewType:"Edit"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}if(this._groups.length<1)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(null===this._groups)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Group </span>: Not Found</h4>
          </div>
        </div>
      `;const t=this._groups[0];return n.dy`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Change Group</h1>
                    <h3 class="h3">Update Group!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="members-groupings-group" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="_branchId_" id="_branchId_"  outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>{if(e.id===t.branchId)return n.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Member Category</h4>
                      <pdb-membership-select-member-type defaultValue="${String(t.memberCategoryId.id)}" 
                        name="_memberCategoryId_" id="_memberCategoryId_"
                        label="Select Member Category" outlined required>
                      </pdb-membership-select-member-type>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Group</h4>
                      <mwc-textfield name="group" id="group" label="Enter Group"
                        outlined required value="${t.group}">
                      </mwc-textfield>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Update" raised class="w-full" @click="${this.submitForm}">
                    </mwc-button>
                  </div>
                
                  <div class="flex form-input-container items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                    <label class="block font-medium text-sm text-gray-600 w-full">
                      ...
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){}getGroupId(){let e=(0,d.Jx)("view-group"),t=null!==e?(0,l.t)(e):null;this.groupId=Number.isNaN(t)?null:Number(t),this.groupIdEnc=(0,l.h)(String(this.groupId),!0)}getGroup(e){return x(this,void 0,void 0,(function*(){const t=yield(0,p.c)(e);var r;null!==t&&t.response.success&&"group"in t.response.data?this._groups=[(r=t.response.data,{id:Number(r.id),clientId:Number(r.clientId),group:String(r.group),branchId:Number(r.branchId),memberCategoryId:(0,u.Y)(r.memberCategoryId),createdBy:Number(r.createdBy),updatedBy:Number(r.updatedBy),date:new Date(r.date),updateDate:new Date(r.updateDate)})]:this._groups=null}))}getBranches(){return x(this,void 0,void 0,(function*(){const e=yield(0,a.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const r=[];r.push(...this._branches,...t),this._branches=r}))}getClientMemberCategories(){return x(this,void 0,void 0,(function*(){const e=yield(0,c.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const r=[];r.push(...this._memberCategories,...t),this._memberCategories=r}))}submitForm(e){return x(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,i.Ie)(),r=f.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group/"+e,n=document.querySelector('[make-general-posts="members-groupings-group"]'),o=new FormData(n);return m().fire({title:"Update Group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,g.d)(r,{method:"PATCH",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,b.T)(e);m().showValidationMessage(`${t}`)}return t})).catch((e=>{m().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!m().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&m().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.groupId)}))}createRenderRoot(){return this}};T.styles=[n.iv`
   :host { display: block; }
  `],A([(0,o.Cb)({type:Number}),B("design:type",Number)],T.prototype,"startSearchPage",void 0),A([(0,o.Cb)({type:Number}),B("design:type",Number)],T.prototype,"accountType",void 0),A([(0,o.Cb)({type:Number}),B("design:type",Number)],T.prototype,"selectedBranch",void 0),A([(0,o.Cb)({type:Number}),B("design:type",Number)],T.prototype,"groupId",void 0),A([(0,o.Cb)({type:String}),B("design:type",String)],T.prototype,"groupIdEnc",void 0),A([(0,o.Cb)({type:Array}),B("design:type",Array)],T.prototype,"_userLoginInfo",void 0),A([(0,o.Cb)({type:Array}),B("design:type",Array)],T.prototype,"_activeBranchId",void 0),A([(0,o.Cb)({type:Array}),B("design:type",Array)],T.prototype,"_memberCategories",void 0),A([(0,o.Cb)({type:Array}),B("design:type",Array)],T.prototype,"_branches",void 0),A([(0,o.Cb)({type:Array}),B("design:type",Array)],T.prototype,"_groups",void 0),A([(0,o.Cb)({type:Boolean}),B("design:type",Boolean)],T.prototype,"_hasSetup",void 0),T=A([(0,o.Mo)("membership-groupings-group_subgroup-group-edit"),B("design:paramtypes",[])],T)},7641:(e,t,r)=>{r.d(t,{W:()=>n});const n={grouping:33,assignment:34}},4232:(e,t,r)=>{r.d(t,{OR:()=>s,hl:()=>c,pt:()=>i});var n=r(3692);const{I:o}=n.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s=e=>void 0===e.strings,a={},c=(e,t=a)=>e._$AH=t},8082:(e,t,r)=>{r.d(t,{XM:()=>n.XM,Xe:()=>n.Xe,pX:()=>n.pX});var n=r(875)},3669:(e,t,r)=>{r.d(t,{a:()=>s});var n=r(3692),o=r(875),i=r(4232);const s=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n.Jb||t===n.Ld)return t;const r=e.element,s=e.name;if(e.type===o.pX.PROPERTY){if(t===r[s])return n.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(s))return n.Jb}else if(e.type===o.pX.ATTRIBUTE&&r.getAttribute(s)===t+"")return n.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,6553,3629,6258,3712],(()=>(6095,e(e.s=6095)))),e.O())])));
//# sourceMappingURL=edit.js.map