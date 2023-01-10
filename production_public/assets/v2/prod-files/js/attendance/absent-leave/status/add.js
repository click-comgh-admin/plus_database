/*! For license information please see add.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1052],{8967:(e,t,n)=>{n.d(t,{T:()=>r});const r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},6224:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(771),o=n(7270),s=n(596),i=n(3600);function a(e=null){return t=this,n=void 0,c=function*(){const t=(0,i.Ie)(),n=r.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,o.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,r){function o(e){try{i(c.next(e))}catch(e){r(e)}}function s(e){try{i(c.throw(e))}catch(e){r(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(o,s)}i((c=c.apply(t,n||[])).next())}));var t,n,a,c}},9333:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveStatusAdd:()=>A});var r=n(9392),o=n(1936),s=(n(1239),n(9261),n(5248),n(3313),n(3600)),i=n(6224),a=n(7725),c=n(6455),l=n.n(c),d=n(771),u=n(7270),h=n(596),p=n(8967),f=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};n(3683),n(4657);var m=n(6979),y=n(8092),v=n(1302),b=n(7108),w=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};let A=class extends r.oi{constructor(){super(),this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._branches=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,m.f)().then((()=>this._hasSetup=!0));const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,s.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getBranches()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,y.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,v.H)({pageId:b.W.absent_leave_status,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}let t=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),r.dy`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Status</h1>
                    <h3 class="h3">Create Status!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-status" enctype="multipart/form-data">
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
                      <h4 class="font-semibold my-2">Status</h4>
                      <mwc-textfield name="status" id="status" label="Enter Status"
                        outlined required>
                      </mwc-textfield>
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
    `}branchChange(e){this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}firstUpdated(){}getBranches(){return _(this,void 0,void 0,(function*(){const e=yield(0,i.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}submitForm(e){return _(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return f(this,void 0,void 0,(function*(){const e=(0,s.Ie)(),t=d.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/status",n=document.querySelector('[make-general-posts="attendance-absent-leave-status"]'),r=new FormData(n);return l().fire({title:"Create Status?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>f(this,void 0,void 0,(function*(){return yield(0,u.d)(t,{method:"POST",body:r,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new h.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((n=>{let r={error:t.id+": "+n};"non_field_errors"===t.id&&(r={error:n}),e.push(r)}))}));const t=(0,p.T)(e);l().showValidationMessage(`${t}`)}return t})).catch((e=>{l().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!l().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}n&&l().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};A.styles=[r.iv`
   :host { display: block; }
  `],w([(0,o.Cb)({type:Number}),g("design:type",Number)],A.prototype,"accountType",void 0),w([(0,o.Cb)({type:Number}),g("design:type",Number)],A.prototype,"selectedBranch",void 0),w([(0,o.Cb)({type:Array}),g("design:type",Array)],A.prototype,"_userLoginInfo",void 0),w([(0,o.Cb)({type:Array}),g("design:type",Array)],A.prototype,"_activeBranchId",void 0),w([(0,o.Cb)({type:Array}),g("design:type",Array)],A.prototype,"_branches",void 0),w([(0,o.Cb)({type:Boolean}),g("design:type",Boolean)],A.prototype,"_hasSetup",void 0),A=w([(0,o.Mo)("attendance-absent-leave-status-add"),g("design:paramtypes",[])],A)},7108:(e,t,n)=>{n.d(t,{W:()=>r});const r={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},4232:(e,t,n)=>{n.d(t,{OR:()=>i,hl:()=>c,pt:()=>s});var r=n(3692);const{I:o}=r.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,i=e=>void 0===e.strings,a={},c=(e,t=a)=>e._$AH=t},8082:(e,t,n)=>{n.d(t,{XM:()=>r.XM,Xe:()=>r.Xe,pX:()=>r.pX});var r=n(875)},3669:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(3692),o=n(875),s=n(4232);const i=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const n=e.element,i=e.name;if(e.type===o.pX.PROPERTY){if(t===n[i])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&n.getAttribute(i)===t+"")return r.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[5744,2185,9674,7708,1109,6236,8867,2482,3712],(()=>(9333,e(e.s=9333)))),e.O())])));
//# sourceMappingURL=add.js.map