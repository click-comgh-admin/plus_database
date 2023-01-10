"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7552],{5866:(e,t,n)=>{var s=n(9755),i=n(9392),o=n(1936),a=(n(686),function(e,t,n,s){var i,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=s(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let n=!1;return this.value.forEach((e=>{const s=e.id;n=t===s})),e.selected=n,e}))}render(){return this.multiple?this.required?i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:s(this.value.map((t=>{const n=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+n+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const n=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,s(".select2-search__field").on("keyup",(function(e){s(n.selectSelector).empty(),n.startSearchPage=0})),n.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,n=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{s(e).select2({closeOnSelect:!1,placeholder:this.label}),s(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let i={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)i[e]=this.ajaxHeader[e];this.selectSelector.forEach((o=>{s(o).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(i){const o=function(i,o){return n=isNaN(i.page)?0:i.page,n=0===n?n:n*t,s(".select2-search__field").on("keyup",(function(i){s(e.selectSelector).empty(),n=0,t=0})),n}(i),a=function(n,i){let o=isNaN(n.page)?1:n.page+1;return o=0===o?1:o,s(".select2-search__field").on("keyup",(function(n){s(e.selectSelector).empty(),o=0,t=0})),o}(i);let r={search:i.term,start:o,page:a};return e.ajaxFetchUrlParams.forEach((e=>{r[e.param]=e.value})),r},headers:i,processResults:(e,n)=>{const s=null===this.ajaxFetchProcessResponse?this._processResults(e,n):this.ajaxFetchProcessResponse(e,n);return t+=s.results.length,{results:s.results,pagination:{more:t<s.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{n=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const n=e;t.page=t.page||0;let s=[];if(!1===n.error){var i=n.data;for(let e=0;e<i.length;e++){const t=i[e],n={id:t.id,text:t.fullName};s.includes(n)||s.push(n)}}return this.totalShowing+=s.length,{results:s,total:n.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let n=[];for(const e of t){let t=e;const s=Number.isNaN(t.value)?0:Number(t.value);n.includes(s)||n.push(s)}this.currentValue=n,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",n)}createRenderRoot(){return this}};l.styles=[i.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"name",void 0),a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"label",void 0),a([(0,o.Cb)({type:Array}),r("design:type",Array)],l.prototype,"value",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"randomID",void 0),a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"input_id",void 0),a([(0,o.Cb)({type:Array}),r("design:type",Array)],l.prototype,"options",void 0),a([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"required",void 0),a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"ajaxFetchToken",void 0),a([(0,o.Cb)({type:String}),r("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),a([(0,o.Cb)({attribute:!1}),r("design:type",Object)],l.prototype,"currentValue",void 0),a([(0,o.Cb)({type:Object}),r("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),a([(0,o.Cb)({type:Array}),r("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"startSearchPage",void 0),a([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"multiple",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"startNumber",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"rowsPerPage",void 0),a([(0,o.Cb)({type:Number}),r("design:type",Number)],l.prototype,"totalShowing",void 0),a([(0,o.Cb)({type:Boolean}),r("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=a([(0,o.Mo)("select-input")],l)},6182:(e,t,n)=>{n.r(t),n.d(t,{AttendanceAbsentLeaveAssignmentEdit:()=>$});var s=n(9392),i=n(1936),o=(n(1239),n(9261),n(5248),n(3313),n(2935),n(5866),n(3600)),a=n(7725),r=n(6224),l=n(7052),c=n(4672),d=n(7178),u=n(771),p=n(7270),h=n(596),m=n(6455),y=n.n(m),f=n(8967),g=function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function r(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((s=s.apply(e,t||[])).next())}))};n(3683),n(4657);var b=n(6979),v=n(8092),w=n(1302),S=n(7108),_=function(e,t,n,s){var i,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,s);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function r(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((s=s.apply(e,t||[])).next())}))};let $=class extends s.oi{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this.assignmentId=0,this.assignmentIdEnc=null,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._statuses=[],this._assignments=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,b.f)().then((()=>this._hasSetup=!0));const t=(0,a.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.Ie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),this.getAssignmentId(),this.getAssignment(this.assignmentId),yield this.getBranches()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,v.H)())||void 0===e?void 0:e.expiration_date.expired)return s.dy`<account-expired-component></account-expired-component>`;if(!(0,w.H)({pageId:S.W.absent_leave_assignment,viewType:"Edit"},!1))return s.dy`<no-page-entry-component></no-page-entry-component>`}if(this._assignments.length<1)return s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(null===this._assignments)return s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Group </span>: Not Found</h4>
          </div>
        </div>
      `;const t=this._assignments[0];let n=" - ";return n=1===t.memberInfo.accountType?t.memberInfo.middlename.length<1?`${t.memberInfo.firstname} ${t.memberInfo.surname}`:`${t.memberInfo.firstname} ${t.memberInfo.middlename} ${t.memberInfo.surname}`:`${t.memberInfo.organizationName}`,s.dy`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Change Assignment</h1>
                    <h3 class="h3">Update Assignment!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-assignment"
                  enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch" name="_branchId_" id="_branchId_"
                        outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((e=>{if(e.id===t.statusID.branchID)return s.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Status</h4>
                      <mwc-select class="w-full" setSelectedStatusId label="Select Status" name="statusId" id="statusId"
                        outlined required>
                        <mwc-list-item value="${t.statusID.id}" selected>
                          ${t.statusID.status}
                        </mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">From - Date</h4>
                      <mwc-textfield name="fromDate" type="date" class="w-full" id="fromDate" label="Select From - Date"
                        value="${this.getDate(t.fromDate)}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">To - Date</h4>
                      <mwc-textfield name="toDate" type="date" class="w-full" id="toDate" label="Select To - Date"
                        value="${this.getDate(t.toDate)}" outlined required>
                      </mwc-textfield>
                    </div>
                    <div class="col-md-12 col-lg-12">
                      <h4 class="font-semibold my-2">Member</h4>
                      <mwc-select class="w-full" setSelectedStatusId label="Select Member" name="__memberId__" id="__memberId__"
                        outlined required>
                        <mwc-list-item value="${t.memberID}" selected>
                          ${n}
                        </mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-12 col-lg-12">
                      <h4 class="font-semibold my-2">
                        Reason <span class="text-yellow-400">[optional]</span>
                      </h4>
                      <mwc-textarea class="h-96" outlined name="reason" id="reason" label="Enter Reason [optional]"
                        placeholder="Enter Reason [optional]" value="${t.reason}">
                      </mwc-textarea>
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
    `}getDate(e){return e.toLocaleString("default",{year:"numeric"})+"-"+e.toLocaleString("default",{month:"2-digit"})+"-"+e.toLocaleString("default",{day:"2-digit"})}firstUpdated(){}getAssignmentId(){let e=(0,c.Jx)("view-assignment"),t=null!==e?(0,l.t)(e):null;this.assignmentId=Number.isNaN(t)?null:Number(t),this.assignmentIdEnc=(0,l.h)(String(this.assignmentId),!0)}getAssignment(e){return A(this,void 0,void 0,(function*(){const t=yield function(e=null,t=""){return n=this,s=void 0,a=function*(){const n=(0,o.Ie)(),s=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment"+(null===e?"":"/"+e)+t,i=yield(0,p.d)(s,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new h.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new h.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function o(e){try{l(a.next(e))}catch(e){t(e)}}function r(e){try{l(a.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,r)}l((a=a.apply(n,s||[])).next())}));var n,s,i,a}(e);null!==t&&t.response.success&&"statusId"in t.response.data?this._assignments=[d.e.toAttendanceAbsentLeaveAssignmentModel(JSON.stringify(t.response.data))]:this._assignments=null}))}getBranches(){return A(this,void 0,void 0,(function*(){const e=yield(0,r.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}submitForm(e){return A(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return g(this,void 0,void 0,(function*(){const t=(0,o.Ie)(),n=u.t.URLS.AKWAABA_API_BASE_URL+"attendance/absent-leave/assignment/"+e,s=document.querySelector('[make-general-posts="attendance-absent-leave-assignment"]'),i=new FormData(s);return y().fire({title:"Update Assignment?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,p.d)(n,{method:"PATCH",body:i,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new h.H("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,f.T)(e);y().showValidationMessage(`${t}`)}return t})).catch((e=>{y().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!y().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&y().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.assignmentId)}))}createRenderRoot(){return this}};$.styles=[s.iv`
   :host { display: block; }
  `],_([(0,i.Cb)({type:Number}),x("design:type",Number)],$.prototype,"startSearchPage",void 0),_([(0,i.Cb)({type:Number}),x("design:type",Number)],$.prototype,"accountType",void 0),_([(0,i.Cb)({type:Number}),x("design:type",Number)],$.prototype,"selectedBranch",void 0),_([(0,i.Cb)({type:Number}),x("design:type",Number)],$.prototype,"assignmentId",void 0),_([(0,i.Cb)({type:String}),x("design:type",String)],$.prototype,"assignmentIdEnc",void 0),_([(0,i.Cb)({type:Array}),x("design:type",Array)],$.prototype,"_userLoginInfo",void 0),_([(0,i.Cb)({type:Array}),x("design:type",Array)],$.prototype,"_activeBranchId",void 0),_([(0,i.Cb)({type:Array}),x("design:type",Array)],$.prototype,"_memberCategories",void 0),_([(0,i.Cb)({type:Array}),x("design:type",Array)],$.prototype,"_branches",void 0),_([(0,i.Cb)({type:Array}),x("design:type",Array)],$.prototype,"_statuses",void 0),_([(0,i.Cb)({type:Array}),x("design:type",Array)],$.prototype,"_assignments",void 0),_([(0,i.Cb)({type:Boolean}),x("design:type",Boolean)],$.prototype,"_hasSetup",void 0),$=_([(0,i.Mo)("attendance-absent-leave-assignment-edit"),x("design:paramtypes",[])],$)}},e=>(e.O(0,[5744,2185,9674,8820,1828,7708,1109,6236,8867,2482,5265,3712],(()=>(6182,e(e.s=6182)))),e.O())])));
//# sourceMappingURL=edit.js.map