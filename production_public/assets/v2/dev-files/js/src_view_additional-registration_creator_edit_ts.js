"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_additional-registration_creator_edit_ts"],{34419:(e,t,n)=>{n.r(t),n.d(t,{GET_AdditionalRegistrationQuestion:()=>a});var o=n(48485),i=n(87270),r=n(14492),s=n(33600);function a(e=null,t=""){return n=this,a=void 0,d=function*(){const n=(0,s.getUserLoginInfoCookie)(),a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/additonal-registration/questions"+(null===e?"/":"/"+e)+t,c=yield(0,i.http)(a,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new r.NetWorkCallResponses("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function o(e){try{r(d.next(e))}catch(e){t(e)}}function i(e){try{r(d.throw(e))}catch(e){t(e)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(o,i)}r((d=d.apply(n,a||[])).next())}));var n,a,c,d}},81544:(e,t,n)=>{n.r(t),n.d(t,{PATCH_AdditionalRegistrationQuestion:()=>l});var o=n(86455),i=n.n(o),r=n(48485),s=n(87270),a=n(14492),c=n(8967),d=n(33600),u=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function l(e,t){return u(this,void 0,void 0,(function*(){const n=(0,d.getUserLoginInfoCookie)(),o=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/additonal-registration/questions/"+e,l={branchId:t.branchId,memberCategoryId:t.memberCategoryId,question:t.question,type:t.type,placeholderInstruction:t.placeholderInstruction};return i().fire({title:"Update Question?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>u(this,void 0,void 0,(function*(){return yield(0,s.http)(o,{method:"PATCH",body:JSON.stringify(l),headers:{Authorization:"Token "+n.token}},!0,!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,c.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},81933:(e,t,n)=>{n.r(t),n.d(t,{AdditionalRegistrationCreatorEdit:()=>b}),n(45501),n(69579),n(43683),n(74657);var o,i,r=n(85862),s=n(59662),a=(n(23283),n(16413),n(51511),n(16883),n(30367),n(76948),n(44672)),c=(n(75866),n(81544)),d=(n(43171),n(33600)),u=n(67052),l=n(26224),p=n(90072),h=n(71714),y=n(34419),m=n(60424),f=function(e,t,n,o){var i,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,n,s):i(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let b=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this.questionData=void 0,this._data=[],this.urlQueryParams=void 0,this._userLoginInfo=null,this.selectedBranchId=0,this._branches=[],this._activeBranchId=null,this._memberCategories=[],this._arQuestionType=[],this.questionID=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,a.urlQueryParams)(),this._userLoginInfo=[(0,d.getUserLoginInfoCookie)()],this.getQuestionId(),yield this.getAdditionalRegistrationQuestion(),yield this.getBranches(),yield this.getMemberCategories(),yield this.getAdditionalRegistrationQuestionType()}))}disconnectedCallback(){}render(){return this.userBranch=0,null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.userBranch=this._userLoginInfo[0].user.branchId),console.log({"this.questionData--this.questionData":this.questionData}),void 0===this.questionData?r.html`
        <div class="shadow bg-white p-2 my-2">
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        </div>
      `:null===this.questionData?r.html`
        <div class="shadow bg-white p-2 my-2">
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Error </span>: Question Not Found!</h4>
            </div>
          </div>
        </div>
      `:r.html`
      <div class="shadow bg-white p-2 my-2">
        <div class="main-container">
          ${this.form}
        </div>
      </div>
    `}get form(){return r.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Update Additional Registration Question</h1>
                  <h3 class="h3">Edit Additional Registration Question!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="edit-schedule-question">
                <question-inputs-component id="${this.questionID}" question-inputs-component--object="1" .questionData="${[this.questionData]}"
                  .branches="${this._branches}" .memberCategories="${this._memberCategories}" userBranch="${this.userBranch}" 
                  .arQuestionType="${this._arQuestionType}"></question-inputs-component>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <div class="form-input-container">
                      <mwc-button label="Submit Question" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>

                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    `}firstUpdated(){}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=document.querySelector(`question-inputs-component[id="${this.questionID}"]`),n={branchId:t.branchIdValue,memberCategoryId:t.memberCategoryIdValue,question:t.questionValue,type:t.typeValue,placeholderInstruction:t.placeholderInstructionValue};console.log({questionInputsComponent:t,question:n}),yield(0,c.PATCH_AdditionalRegistrationQuestion)(this.questionID,n)}))}getQuestionId(){let e=(0,a.urlQueryParamsGet)("question"),t=(0,u.base64Decode)(null!==e?String(e):"");this.questionID=Number.isNaN(t)?null:Number(t)}getBranches(){return v(this,void 0,void 0,(function*(){const e=yield(0,l.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getMemberCategories(){return v(this,void 0,void 0,(function*(){const e=yield(0,p.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}getAdditionalRegistrationQuestion(){return v(this,void 0,void 0,(function*(){const e=yield(0,y.GET_AdditionalRegistrationQuestion)(this.questionID);let t=null;if(null===e)t=null;else if(!0===e.response.success&&"question"in e.response.data){const n=m.Convert.toAdditionalRegistrationModel(JSON.stringify(e.response.data));console.log({question:n}),t=n}setTimeout((()=>{this.questionData=t}),100)}))}getAdditionalRegistrationQuestionType(){return v(this,void 0,void 0,(function*(){const e=yield(0,h.GET_AdditionalRegistrationQuestionType)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._arQuestionType,...t),this._arQuestionType=n}))}createRenderRoot(){return this}};b.styles=[r.css`
   :host { display: block; }
  `],f([(0,s.property)({type:Number}),g("design:type",Number)],b.prototype,"CLIENT_ID",void 0),f([(0,s.property)({type:Array}),g("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],b.prototype,"_data",void 0),f([(0,s.property)({type:Object}),g("design:type",Object)],b.prototype,"urlQueryParams",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_userLoginInfo",void 0),f([(0,s.property)({type:Number}),g("design:type",Number)],b.prototype,"selectedBranchId",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_branches",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_activeBranchId",void 0),f([(0,s.property)({type:Array}),g("design:type",Array)],b.prototype,"_memberCategories",void 0),f([(0,s.property)({type:Number}),g("design:type",Number)],b.prototype,"userBranch",void 0),f([(0,s.property)({type:Array}),g("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],b.prototype,"_arQuestionType",void 0),f([(0,s.property)({type:Number}),g("design:type",Number)],b.prototype,"questionID",void 0),b=f([(0,s.customElement)("additional-registration-creator-edit"),g("design:paramtypes",[])],b)}}]);
//# sourceMappingURL=src_view_additional-registration_creator_edit_ts.js.map