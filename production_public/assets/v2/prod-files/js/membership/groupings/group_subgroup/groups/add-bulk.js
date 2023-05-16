/*! For license information please see add-bulk.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3883],{8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},6224:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(771),o=n(7270),i=n(596),s=n(3600);function a(e=null){return t=this,n=void 0,c=function*(){const t=(0,s.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,o.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new i.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,r){function o(e){try{s(c.next(e))}catch(e){r(e)}}function i(e){try{s(c.throw(e))}catch(e){r(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,i)}s((c=c.apply(t,n||[])).next())}));var t,n,a,c}},4013:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsGroupSubgroupGroupAddBulk:()=>A});var r=n(5862),o=n(8393),i=(n(1239),n(9261),n(5248),n(2935),n(5866),n(3629),n(3600)),s=n(2004),a=n(6224),c=n(72),l=n(6455),u=n.n(l),d=n(771),p=n(7270),h=n(596),m=n(8967),f=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};n(3683),n(4657);var y=n(5474),g=n(2145),b=n(1302),v=n(7641),w=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};let A=class extends r.oi{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,y.f)().then((()=>this._hasSetup=!0));const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,i.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,g.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,b.H)({pageId:v.W.grouping,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}let t=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),r.dy`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Group</h1>
                    <h3 class="h3">Create Group!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="members-groupings-group" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                        ${1===t?r.dy`
                          <mwc-list-item value="0">Select Branch</mwc-list-item>
                          ${this._branches.map((e=>t===e.id?r.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:r.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                        `:r.dy`
                          ${this._branches.map((e=>{if(e.id===t)return r.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                        `}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Member Category</h4>
                      <pdb-membership-select-member-type defaultValue="1" 
                        name="memberCategoryId" id="memberCategoryId"
                        label="Select Member Category" outlined required>
                      </pdb-membership-select-member-type>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Group(s) - <span class="text-red-600">Separated by commas</span></h4>
                      <mwc-textarea name="_groups_" id="_groups_" label="Enter Group(s) - Separated by commas"
                        outlined required @keyup="${this.groups_to_select_options}" @change="${this.groups_to_select_options}">
                      </mwc-textarea>
                      <select name="groups[]" id="groups" hidden multiple></select>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Create" raised class="w-full" @click="${this.submitForm}">
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
    `}branchChange(e){this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}groups_to_select_options(e){const t=String(e.currentTarget.value);document.querySelectorAll('[name="groups[]"][id="groups"]').forEach((e=>{let n=[];t.split(",").forEach((e=>{const t=e.trim().split(",").join("");t.length>0&&""!==t&&" "!==t&&(n.includes(t)||n.push(t))})),e.innerHTML=n.map((e=>"<option selected>"+e+"</option>"))}))}firstUpdated(){}getBranches(){return C(this,void 0,void 0,(function*(){const e=yield(0,a.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getClientMemberCategories(){return C(this,void 0,void 0,(function*(){const e=yield(0,c.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return f(this,void 0,void 0,(function*(){const e=(0,i.Ie)(),t=d.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group/bulk",n=document.querySelector('[make-general-posts="members-groupings-group"]'),r=new FormData(n);return u().fire({title:"Create Multiple Group(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>f(this,void 0,void 0,(function*(){return yield(0,p.d)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new h.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,m.T)(e);u().showValidationMessage(`${t}`)}return t})).catch((e=>{u().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!u().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&u().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};A.styles=[r.iv`
   :host { display: block; }
  `],w([(0,o.Cb)({type:Number}),_("design:type",Number)],A.prototype,"startSearchPage",void 0),w([(0,o.Cb)({type:Number}),_("design:type",Number)],A.prototype,"accountType",void 0),w([(0,o.Cb)({type:Number}),_("design:type",Number)],A.prototype,"selectedBranch",void 0),w([(0,o.Cb)({type:Array}),_("design:type",Array)],A.prototype,"_userLoginInfo",void 0),w([(0,o.Cb)({type:Array}),_("design:type",Array)],A.prototype,"_activeBranchId",void 0),w([(0,o.Cb)({type:Array}),_("design:type",Array)],A.prototype,"_memberCategories",void 0),w([(0,o.Cb)({type:Array}),_("design:type",Array)],A.prototype,"_branches",void 0),w([(0,o.Cb)({type:Boolean}),_("design:type",Boolean)],A.prototype,"_hasSetup",void 0),A=w([(0,o.Mo)("membership-groupings-group_subgroup-group-add-bulk"),_("design:paramtypes",[])],A)},7641:(e,t,n)=>{n.d(t,{W:()=>r});const r={grouping:33,assignment:34}},4232:(e,t,n)=>{n.d(t,{OR:()=>s,hl:()=>c,pt:()=>i});var r=n(3692);const{I:o}=r.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,s=e=>void 0===e.strings,a={},c=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{XM:()=>r.XM,Xe:()=>r.Xe,pX:()=>r.pX});var r=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>s});var r=n(3692),o=n(875),i=n(4232);const s=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,s=e.name;if(e.type===o.pX.PROPERTY){if(t===n[s])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(s))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(s)===t+"")return r.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,7154,1080,5291,6236,7583,6553,3629,6258,3712],(()=>(4013,e(e.s=4013)))),e.O())])));
//# sourceMappingURL=add-bulk.js.map