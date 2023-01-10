"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1566],{1607:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsGroupSubgroupGroupView:()=>L});var o=n(9392),r=n(1936),i=n(7052),s=n(72),l=n(5248),c=(n(1239),n(9261),n(3313),n(6883),n(8281),n(771)),a=n(3600),d=n(2004),u=n(4672),p=n(2368),m=(n(3629),n(6224)),f=n(6455),h=n.n(f),b=n(7270),g=n(596),y=n(8967),v=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((o=o.apply(e,t||[])).next())}))};n(2715),n(3683),n(4657);var w,_,C,x=n(9665),S=n(2145),k=n(1302),B=n(7641),I=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},$=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((o=o.apply(e,t||[])).next())}))};let L=class extends o.oi{constructor(){super(),this._memberCategories=[],this._activeBranchId=null,this._memberType=1,this._branches=[],this._userLoginInfo=null,this.datatablePathUrl="members/groupings/group/table",this.filterBoxStarted=!1,this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,x.f)().then((()=>this._hasSetup=!0));const t=(0,d.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,a.Ie)()],this.filterBox=new p.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,S.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(!(0,k.H)({pageId:B.W.grouping,viewType:"View"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
      <div class="shadow bg-white p-2">
        <span class="flex flex-row md:flex-col w-100"></span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}<br />
        </div>
        <div class="block my-1">
          ${this.table}
        </div>
      </div>
    `}renderColOne(e,t,n){return`\n      <div class="flex flex-col whitespace-normal justify-between content-between">\n        <p class="p-2 shadow-sm my-2 w-full">${n.group}</p>\n      </div>\n    `}renderColTwo(e,t,n){const o=n.id,r=(0,i.h)(String(o),!0);return`\n      <div class="flex flex-col whitespace-normal justify-between content-between">\n        <mwc-button class="button danger" outlined delete-this-item="${o}">\n          <mwc-icon class="mr-1">delete_forever</mwc-icon> Delete\n        </mwc-button>\n        <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="${c.t.URLS.PDB_CLIENT}groupings/group/edit-group?view-group=${r}"\n          label="Update">\n        </link-button>\n      </div>\n    `}get urlQueryString(){const e=(0,u.O1)(),t="branchId",n="memberCategoryId";let o={};for(const r in e){let i=String(e[r]);r!==t&&r!==n||(o[r]=i)}if(!(t in o)){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),o[t]=e}n in o||(o[n]="1");let r=(0,u.W3)(o);return 0===r.length?r:"&"+r}get filterForm(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);let t=o.dy``;const n=(0,u.O1)(),r="branchId",i="memberCategoryId";let s=1,l=e;for(const e in n){let t=String(n[e]);t=""===t?null:t,e===i&&(s=Number(t)),e===r&&(l=Number(t))}const c=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
            name="${r}" id="${r}"
            outlined required>
            ${1===e?o.dy`
              <mwc-list-item value="0">Select Branch</mwc-list-item>
              ${this._branches.map((e=>l===e.id?o.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:o.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
            `:o.dy`
              ${this._branches.map((t=>{if(t.id===e)return o.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
            `}
          </mwc-select>
        </div>
      </div>`,a=o.dy`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${s}" 
            name="${i}" id="${i}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`;return t=o.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${c} ${a}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,t}get __tableHeaders(){return[{title:"Group"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Group"},{title:"Action"}]}get table(){let e=c.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const r=(0,a.Ie)();return n.Authorization="Token "+r.token,o.dy`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new p.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0,this.dialog()))}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderColOne(e,n,o),orderable:!0},{data:"group",render:(e,n,o)=>t.renderColTwo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return A(this,void 0,void 0,(function*(){e.aoData,t.deleteMemberFx()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells"],select:!0}}deleteMemberFx(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteItemFromList(e)}))}))}deleteItemFromList(e){return A(this,void 0,void 0,(function*(){e.preventDefault();const t=e.currentTarget.getAttribute("delete-this-item"),n=Number.isNaN(t)?0:Number(t);yield function(e){return v(this,void 0,void 0,(function*(){const t=(0,a.Ie)(),n=c.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group/"+e,o={};return h().fire({title:"Remove Group?",text:"You may have members assigned to this group. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>v(this,void 0,void 0,(function*(){return yield(0,b.d)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new g.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,y.T)(e);h().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new g.H("delete",n,!0);return o.postForm,o}})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}h().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(n)}))}dialog(){document.querySelectorAll("[open-dialog-btn]").forEach((e=>{e.addEventListener("click",(e=>{this.showDialog(e)}))}))}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}getBranches(){return A(this,void 0,void 0,(function*(){const e=yield(0,m.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getClientMemberCategories(){return A(this,void 0,void 0,(function*(){const e=yield(0,s.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}createRenderRoot(){return this}};L.styles=[o.iv`
   :host { display: block; }
  `],I([(0,r.IO)('[filter-section-context="btn"]'),$("design:type","function"==typeof(w=void 0!==l.z&&l.z)?w:Object)],L.prototype,"filterSectionContextBtn",void 0),I([(0,r.IO)('[filter-section-context="container"]'),$("design:type","function"==typeof(_="undefined"!=typeof Element&&Element)?_:Object)],L.prototype,"filterSectionContextContainer",void 0),I([(0,r.IO)('[make-general-posts="submit_filter_form"]'),$("design:type","function"==typeof(C="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?C:Object)],L.prototype,"filterSectionContextForm",void 0),I([(0,r.Cb)({type:Array}),$("design:type",Array)],L.prototype,"_memberCategories",void 0),I([(0,r.Cb)({type:Array}),$("design:type",Array)],L.prototype,"_activeBranchId",void 0),I([(0,r.Cb)({type:Number}),$("design:type",Number)],L.prototype,"_memberType",void 0),I([(0,r.Cb)({type:Array}),$("design:type",Array)],L.prototype,"_branches",void 0),I([(0,r.Cb)({type:Array}),$("design:type",Array)],L.prototype,"_userLoginInfo",void 0),I([(0,r.Cb)({type:String}),$("design:type",String)],L.prototype,"datatablePathUrl",void 0),I([(0,r.Cb)({type:Boolean}),$("design:type",Boolean)],L.prototype,"filterBoxStarted",void 0),I([(0,r.Cb)({type:Boolean}),$("design:type",Boolean)],L.prototype,"_hasSetup",void 0),L=I([(0,r.Mo)("membership-groupings-group_subgroup-group-view"),$("design:paramtypes",[])],L)},7641:(e,t,n)=>{n.d(t,{W:()=>o});const o={grouping:33,assignment:34}}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,6553,3629,8718,3712],(()=>(1607,e(e.s=1607)))),e.O())])));
//# sourceMappingURL=groups.js.map