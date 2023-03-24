/*! For license information please see add-bulk.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[5610],{8967:(e,t,r)=>{r.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},6224:(e,t,r)=>{r.d(t,{p:()=>c});var n=r(771),o=r(7270),s=r(596),i=r(3600);function c(e=null){return t=this,r=void 0,a=function*(){const t=(0,i.Ie)(),r=n.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),c=yield(0,o.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function o(e){try{i(a.next(e))}catch(e){n(e)}}function s(e){try{i(a.throw(e))}catch(e){n(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(o,s)}i((a=a.apply(t,r||[])).next())}));var t,r,c,a}},2892:(e,t,r)=>{r.d(t,{c:()=>c});var n=r(771),o=r(7270),s=r(596),i=r(3600);function c(e=null,t=""){return r=this,c=void 0,l=function*(){const r=(0,i.Ie)(),c=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,a=yield(0,o.d)(c,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new s.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{s(l.next(e))}catch(e){t(e)}}function o(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,o)}s((l=l.apply(r,c||[])).next())}));var r,c,a,l}},5238:(e,t,r)=>{r.r(t),r.d(t,{MembershipGroupingsGroupSubgroupSubgroupGroupAddBulk:()=>B});var n=r(5862),o=r(8393),s=(r(1239),r(9261),r(5248),r(2935),r(5866),r(3629),r(3600)),i=r(2004),c=r(6224),a=r(72),l=r(2892),u=r(6455),d=r.n(u),p=r(771),h=r(7270),m=r(596),g=r(8967),f=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{a(n.next(e))}catch(e){s(e)}}function c(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}a((n=n.apply(e,t||[])).next())}))};r(3683),r(4657);var y=r(9665),b=r(2145),v=r(1302),w=r(7641),_=function(e,t,r,n){var o,s=arguments.length,i=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(s<3?o(i):s>3?o(t,r,i):o(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function i(e){try{a(n.next(e))}catch(e){s(e)}}function c(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}a((n=n.apply(e,t||[])).next())}))};let T={},B=class extends n.oi{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.selectedCategory=1,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._groups=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,y.f)().then((()=>this._hasSetup=!0));const t=(0,i.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,s.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getGroups(),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,b.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,v.H)({pageId:w.W.grouping,viewType:"Edit"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}let t=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId);const r=this._groups.map((e=>({id:e.id,name:e.group,isSelected:"false",selected:!1})));return n.dy`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Sub-Group</h1>
                    <h3 class="h3">Create Sub-Group!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="members-groupings-subgroup" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                        ${1===t?n.dy`
                          <mwc-list-item value="0">Select Branch</mwc-list-item>
                          ${this._branches.map((e=>t===e.id?n.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:n.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                        `:n.dy`
                          ${this._branches.map((e=>{if(e.id===t)return n.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
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
                      <h4 class="font-semibold my-2">Select Group</h4>
                      <select-input name="groupId" class="w-full" id="groupId" label="Select Group" .options="${r}"
                        outlined required >
                      </select-input>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Sub-Group(s) - <span class="text-red-600">Separated by commas</span></h4>
                      <mwc-textarea name="_subgroups_" id="_subgroups_" label="Enter Sub-Group(s) - Separated by commas"
                        outlined required @keyup="${this.subgroups_to_select_options}" @change="${this.subgroups_to_select_options}">
                      </mwc-textarea>
                      <select name="subgroups[]" id="subgroups" hidden multiple></select>
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
    `}categoryValueChanged(){const e=this;document.querySelectorAll('[name="memberCategoryId"]').forEach((t=>{t.addEventListener("change",(r=>A(this,void 0,void 0,(function*(){e.selectedCategory=t.selectedCategory,Number.isNaN(this.selectedCategory)||(yield this.getGroups(`?branchId=${this.selectedBranch}&memberCategoryId=${this.selectedCategory}`,this.selectedBranch,this.selectedCategory))}))))}))}branchChange(e){return A(this,void 0,void 0,(function*(){this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value),Number.isNaN(this.selectedCategory)||(yield this.getGroups(`?branchId=${this.selectedBranch}&memberCategoryId=${this.selectedCategory}`,this.selectedBranch,this.selectedCategory))}))}subgroups_to_select_options(e){const t=String(e.currentTarget.value);document.querySelectorAll('[name="subgroups[]"][id="subgroups"]').forEach((e=>{let r=[];t.split(",").forEach((e=>{const t=e.trim().split(",").join("");t.length>0&&""!==t&&" "!==t&&(console.log({"_subgroup-_subgroup":e,"group-group":t}),r.includes(t)||r.push(t))})),e.innerHTML=r.map((e=>"<option selected>"+e+"</option>"))}))}firstUpdated(){this.categoryValueChanged()}getGroups(e="",t=null,r=null){return A(this,void 0,void 0,(function*(){const n=`${null===t||t<1?"__":String(t)}-${null===r||r<1?"__":String(r)}`;if(this._groups=[],n in T)return void setTimeout((()=>{this._groups=T[n]}),500);const o=yield(0,l.c)(null,e);let s=[];null===o?s.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===o.response.success&&"length"in o.response.data&&(s=o.response.data);const i=[];i.push(...this._groups,...s),this._groups=i,T[n]=this._groups}))}getBranches(){return A(this,void 0,void 0,(function*(){const e=yield(0,c.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const r=[];r.push(...this._branches,...t),this._branches=r}))}getClientMemberCategories(){return A(this,void 0,void 0,(function*(){const e=yield(0,a.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const r=[];r.push(...this._memberCategories,...t),this._memberCategories=r}))}submitForm(e){return A(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return f(this,void 0,void 0,(function*(){const e=(0,s.Ie)(),t=p.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group/bulk",r=document.querySelector('[make-general-posts="members-groupings-subgroup"]'),n=new FormData(r);return d().fire({title:"Create Multiple Sub-Group(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>f(this,void 0,void 0,(function*(){return yield(0,h.d)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new m.H("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,g.T)(e);d().showValidationMessage(`${t}`)}return t})).catch((e=>{d().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!d().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&d().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};B.styles=[n.iv`
   :host { display: block; }
  `],_([(0,o.Cb)({type:Number}),C("design:type",Number)],B.prototype,"startSearchPage",void 0),_([(0,o.Cb)({type:Number}),C("design:type",Number)],B.prototype,"accountType",void 0),_([(0,o.Cb)({type:Number}),C("design:type",Number)],B.prototype,"selectedBranch",void 0),_([(0,o.Cb)({type:Number}),C("design:type",Number)],B.prototype,"selectedCategory",void 0),_([(0,o.Cb)({type:Array}),C("design:type",Array)],B.prototype,"_userLoginInfo",void 0),_([(0,o.Cb)({type:Array}),C("design:type",Array)],B.prototype,"_activeBranchId",void 0),_([(0,o.Cb)({type:Array}),C("design:type",Array)],B.prototype,"_memberCategories",void 0),_([(0,o.Cb)({type:Array}),C("design:type",Array)],B.prototype,"_branches",void 0),_([(0,o.Cb)({type:Array}),C("design:type",Array)],B.prototype,"_groups",void 0),_([(0,o.Cb)({type:Boolean}),C("design:type",Boolean)],B.prototype,"_hasSetup",void 0),B=_([(0,o.Mo)("membership-groupings-group_subgroup-subgroup-add-bulk"),C("design:paramtypes",[])],B)},7641:(e,t,r)=>{r.d(t,{W:()=>n});const n={grouping:33,assignment:34}},4232:(e,t,r)=>{r.d(t,{OR:()=>i,hl:()=>a,pt:()=>s});var n=r(3692);const{I:o}=n.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,i=e=>void 0===e.strings,c={},a=(e,t=c)=>e._$AH=t},8082:(e,t,r)=>{r.d(t,{XM:()=>n.XM,Xe:()=>n.Xe,pX:()=>n.pX});var n=r(875)},3669:(e,t,r)=>{r.d(t,{a:()=>i});var n=r(3692),o=r(875),s=r(4232);const i=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n.Jb||t===n.Ld)return t;const r=e.element,i=e.name;if(e.type===o.pX.PROPERTY){if(t===r[i])return n.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return n.Jb}else if(e.type===o.pX.ATTRIBUTE&&r.getAttribute(i)===t+"")return n.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,7154,1080,5291,6236,6069,6553,3629,6258,3712],(()=>(5238,e(e.s=5238)))),e.O())])));
//# sourceMappingURL=add-bulk.js.map