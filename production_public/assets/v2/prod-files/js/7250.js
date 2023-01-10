/*! For license information please see 7250.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7250],{6651:(e,t,s)=>{s.d(t,{m:()=>n}),s(934);let i=[];const r="Show Password",n=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const s=e.parentElement;s.setAttribute("style",s.getAttribute("style")+"; flex-direction: column !important;");const n=document.createElement("label");n.setAttribute("style",n.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const a=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),a.innerText=r;const c=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const l=document.createElement("input");l.type="checkbox",l.id="pswd-visibility-btn--"+t,l.setAttribute("style",l.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),n.appendChild(c),n.appendChild(l),n.appendChild(a),e.after(n);const d={id:l.id,showing:!1,elem:e,span:a};i.includes(d)||i.push(d),l.addEventListener("change",o)}))},o=e=>{e.preventDefault();const t=e.currentTarget;t.checked,i.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=r,e.showing=!1))}))}},2869:(e,t,s)=>{function i(e){return{id:Number(e.id),name:e.name}}s.d(t,{y:()=>i})},6224:(e,t,s)=>{s.d(t,{p:()=>a});var i=s(771),r=s(7270),n=s(596),o=s(3600);function a(e=null){return t=this,s=void 0,c=function*(){const t=(0,o.Ie)(),s=i.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,r.d)(s,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new n.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new n.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function r(e){try{o(c.next(e))}catch(e){i(e)}}function n(e){try{o(c.throw(e))}catch(e){i(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof a?s:new a((function(e){e(s)}))).then(r,n)}o((c=c.apply(t,s||[])).next())}));var t,s,a,c}},7553:(e,t,s)=>{s.d(t,{q:()=>a});var i=s(771),r=s(7270),n=s(596),o=s(3600);function a(e=null){return t=this,s=void 0,c=function*(){const t=(0,o.Ie)(),s=i.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),a=yield(0,r.d)(s,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new n.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new n.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function r(e){try{o(c.next(e))}catch(e){i(e)}}function n(e){try{o(c.throw(e))}catch(e){i(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof a?s:new a((function(e){e(s)}))).then(r,n)}o((c=c.apply(t,s||[])).next())}));var t,s,a,c}},5866:(e,t,s)=>{var i=s(9755),r=s(9392),n=s(1936),o=(s(686),function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let s=!1;return this.value.forEach((e=>{const i=e.id;s=t===i})),e.selected=s,e}))}render(){return this.multiple?this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:r.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?r.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:r.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const s=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+s+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const s=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(s.selectSelector).empty(),s.startSearchPage=0})),s.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,s=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let r={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)r[e]=this.ajaxHeader[e];this.selectSelector.forEach((n=>{i(n).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(r){const n=function(r,n){return s=isNaN(r.page)?0:r.page,s=0===s?s:s*t,i(".select2-search__field").on("keyup",(function(r){i(e.selectSelector).empty(),s=0,t=0})),s}(r),o=function(s,r){let n=isNaN(s.page)?1:s.page+1;return n=0===n?1:n,i(".select2-search__field").on("keyup",(function(s){i(e.selectSelector).empty(),n=0,t=0})),n}(r);let a={search:r.term,start:n,page:o};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:r,processResults:(e,s)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,s):this.ajaxFetchProcessResponse(e,s);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{s=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const s=e;t.page=t.page||0;let i=[];if(!1===s.error){var r=s.data;for(let e=0;e<r.length;e++){const t=r[e],s={id:t.id,text:t.fullName};i.includes(s)||i.push(s)}}return this.totalShowing+=i.length,{results:i,total:s.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let s=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);s.includes(i)||s.push(i)}this.currentValue=s,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",s)}createRenderRoot(){return this}};c.styles=[r.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"name",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"label",void 0),o([(0,n.Cb)({type:Array}),a("design:type",Array)],c.prototype,"value",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"randomID",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"input_id",void 0),o([(0,n.Cb)({type:Array}),a("design:type",Array)],c.prototype,"options",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"required",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchToken",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),o([(0,n.Cb)({attribute:!1}),a("design:type",Object)],c.prototype,"currentValue",void 0),o([(0,n.Cb)({type:Object}),a("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),o([(0,n.Cb)({type:Array}),a("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"startSearchPage",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"multiple",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"startNumber",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"rowsPerPage",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"totalShowing",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=o([(0,n.Mo)("select-input")],c)},9852:(e,t,s)=>{var i=s(9392),r=s(1936),n=s(5248),o=(s(3313),s(9261),s(1877),s(2169),s(5866),s(2004)),a=s(6224),c=s(2869),l=s(7553),d=s(3600),u=s(4728),h=s(6455),p=s.n(h),m=s(771),f=s(7270),y=s(596),g=s(8967),b=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},v=s(6651),w=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},A=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},S=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};s(8954);var x,_,B,$=s(3248),F=s(2229),P=s(2145),E=function(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,s,i){return new(s||(s=Promise))((function(r,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};let I=class extends i.oi{constructor(){super(),this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this.registrationType="none",this.formId=1,this.startSearchPage=0,this.selectedBranchId=0,this._branches=[],this._genders=[],this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserAccess=this._clientUserAccessDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,o.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,d.Ie)()],yield this.getPageAccesses(),yield this.getBranches(),yield this.getGenders(),"true"==this.edit&&(this.registrationType="new-entry")}))}disconnectedCallback(){}render(){return"true"===this.edit?("mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,i.dy`
        <div class="">
          <div class="shadow bg-white p-2 my-2">
            <div class="md:hidden block">
              <mwc-tab-bar activeIndex="0">
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="person" id="mainAccountFormBtn"
                  label="User" @click="${this.displayMainAccountFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="business_center" id="accessPagesFormBtn"
                  label="Access" @click="${this.displayAccessPagesFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="lock" id="passwordFormBtn"
                  class="!w-28 !px-1" label="Password" @click="${this.displayPasswordForm}"></mwc-tab>
              </mwc-tab-bar>
            </div>
            <div class="md:block hidden">
              <mwc-tab-bar activeIndex="0">
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="person" id="mainAccountFormBtn"
                  label="User Information" @click="${this.displayMainAccountFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="business_center" id="accessPagesFormBtn"
                  label="Access Page(s)" @click="${this.displayAccessPagesFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="lock" id="passwordFormBtn"
                  class="!w-28 !px-1" label="Password" @click="${this.displayPasswordForm}"></mwc-tab>
              </mwc-tab-bar>
            </div>
          </div>
          <div class="shadow bg-white p-2 my-2">
            ${this.getEditForm}
          </div>
          
        </div>
      `):i.dy`
        <div class="shadow bg-white p-2">
          <div class="p-1">
            <mwc-button class="primary" setFormMembersField label="From Member List" @click="${this.setFormMembersField}"></mwc-button>
            <mwc-button class="primary" setNewEntryField label="New Entry" @click="${this.setNewEntryField}"></mwc-button>
          </div>
          ${this.form}
        </div>
      `}get getEditForm(){return 1===this.formId?i.dy`
        ${this.profileForm}
      `:2===this.formId?i.dy`
        ${this.pageAccessForm}
      `:i.dy`
        ${this.passwordForm}
      `}displayMainAccountFormBtn(e){e.preventDefault(),this.formId=1,this.mainAccountFormBtn.setAttribute("raised","true"),this.accessPagesFormBtn.removeAttribute("raised"),this.passwordFormBtn.removeAttribute("raised")}displayAccessPagesFormBtn(e){e.preventDefault(),this.formId=2,this.accessPagesFormBtn.setAttribute("raised","true"),this.mainAccountFormBtn.removeAttribute("raised"),this.passwordFormBtn.removeAttribute("raised")}displayPasswordForm(e){e.preventDefault(),this.formId=3,this.passwordFormBtn.setAttribute("raised","true"),this.accessPagesFormBtn.removeAttribute("raised"),this.mainAccountFormBtn.removeAttribute("raised"),setTimeout((()=>{this.firstUpdated()}),500)}setFormMembersField(e){e.preventDefault(),this.registrationType="from-members",this.querySelectorAll("[setFormMembersField]").forEach((e=>{e.setAttribute("raised",""),e.setAttribute("class","warning")})),this.querySelectorAll("[setNewEntryField]").forEach((e=>{e.removeAttribute("raised"),e.setAttribute("class","primary")}))}setNewEntryField(e){e.preventDefault(),this.registrationType="new-entry",this.querySelectorAll("[setNewEntryField]").forEach((e=>{e.setAttribute("raised",""),e.setAttribute("class","warning")})),this.querySelectorAll("[setFormMembersField]").forEach((e=>{e.removeAttribute("raised"),e.setAttribute("class","primary")}))}setSelectedBranchId(e){e.preventDefault();const t=this.registrationType;this.registrationType="none",this.querySelectorAll("[setSelectedBranchId]").forEach((e=>{this.selectedBranchId=e.value})),this.registrationType=t}get profileForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),i.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Update User Profile!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.branchField}

                  ${this.newEntryFields}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update User Profile" raised class="button" @click="${this.submitForm}">
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
    `}get pageAccessForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),i.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Edit User Page Access!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.accessFieldTickBox}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Edit User Page Access" raised class="button" @click="${this.submitForm}">
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
    `}get passwordForm(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),i.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Password</h1>
                  <h3 class="h3">Set New Password!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.passwordFields}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set New Password" raised class="button" @click="${this.submitForm}">
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
    `}get form(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),i.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Add Admin User!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.branchField}

                  ${"new-entry"===this.registrationType?i.dy`${this.newEntryFields}`:i.Ld}
                  ${"from-members"===this.registrationType?i.dy`${this.fromMembersField}`:i.Ld}
                  
                  <!-- ${this.accessFieldSelectBox} -->
                  
                  <div class="col-md-12 col-lg-12 my-2"><hr/></div>

                  ${this.passwordFields}

                  <div class="col-md-12 col-lg-12 my-2"><hr/></div>
                  ${this.accessFieldTickBox}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${e}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${"new-entry"!==this.registrationType}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Admin User" raised class="button" @click="${this.submitForm}">
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
    `}get branchField(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);const t=this.clientUser,s=t.data,r=Array.isArray(s)?s[0]:s,n=t.success;return i.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Branch</h4>
        <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" @change="${this.setSelectedBranchId}" outlined required>
          ${1===e?i.dy`
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((e=>n&&r.branchId===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
          `:i.dy`
            ${this._branches.map((t=>{if(t.id===e)return i.dy`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
          `}
        </mwc-select>
      </div>
    `}get passwordFields(){return i.dy`
      ${"true"===this.edit?i.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Old Password</h4> 
        <mwc-textfield name="old_password" id="old_password" label="Enter Old Password" outlined type="password" required>
        </mwc-textfield>
      </div>`:i.Ld}
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Password</h4> 
        <mwc-textfield name="password" id="password" label="Enter Password" outlined type="password" required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Password Confirmation</h4> 
        <mwc-textfield name="confirm_password" id="confirm_password" label="Enter Password Confirmation" outlined type="password"
          required>
        </mwc-textfield>
      </div>
    `}get fromMembersField(){let e="";null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].token);let t={};return t.Authorization="Token "+e,i.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Member</h4> 
        <select-input class="w-100" id="member" name="member" label="Select Member"
          .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
          .ajaxHeader="${t}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${m.t.URLS.AKWAABA_API_BASE_URL}members/user/search?"></select-input>
      </div>
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const s={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(s)||e.push(s)})),e}get accessFieldSelectBox(){const e=this.pageAccesses;return i.dy`
      <div class="col-md-6 col-lg-8">
        <h4 class="font-semibold my-2">Select User Access</h4> 
        <select-input name="access" multiple class="w-full" id="access"
          label="Select User Access" .options="${e}" outlined required>
        </select-input>
      </div>
    `}get accessFieldTickBox(){this.pageAccesses;const e=this.clientUserAccess,t=e.data,s=Array.isArray(t)?t:[t],r=e.success;let n=[];return r&&s.forEach((e=>{e=F.e.toClientUserPageAccessModel(JSON.stringify(e)),n.includes(e)||n.push(e)})),i.dy`
      <div class="col-md-12 col-lg-12">
        <client-user-access-card ?isActive="${!0}" .available_access="${this._pageAccesses}" .user_access="${n}"></client-user-access-card>
      </div>
    `}get newEntryFields(){const e=this.clientUser,t=e.data,s=Array.isArray(t)?t[0]:t,r=e.success;let n="";if(r){const e=new Date(s.dateOfBirth).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");n=[e[2],e[0],e[1]].join("-")}return i.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Firstname</h4> 
        <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" 
          value="${r?s.firstname:""}" label="Enter Firstname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Surname</h4> 
        <mwc-textfield name="surname" type="text" class="w-full" id="surname" 
          value="${r?s.surname:""}" label="Enter Surname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Gender</h4>
        <mwc-select name="gender" class="w-full" id="gender" label="Select Gender" outlined required>
          <mwc-list-item value="0">Select Gender</mwc-list-item>
          ${this._genders.map((e=>r&&s.gender===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
        </mwc-select>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Date of Birth</h4> 
        <mwc-textfield name="dateOfBirth" type="date" class="w-full" id="dateOfBirth"
          label="Select Date of Birth" value="${n}" outlined required>
        </mwc-textfield>
      </div>
      <!-- <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Add Profile Picture</h4> 
        <file-input id="profilePicture" name="profilePicture" hasLabel label="Add Profile Picture"></file-input>
      </div> -->
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Phone Number</h4> 
        <mwc-textfield name="phone" multiple type="tel" class="w-full" id="phone"
          label="Enter Phone Number" value="${r?s.phone:""}" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Email Address</h4> 
        <mwc-textfield name="email" multiple type="email" class="w-full" id="email"
          label="Enter Email Address" value="${r?s.email:""}" outlined required>
        </mwc-textfield>
      </div>
    `}firstUpdated(){(0,v.m)(),(0,v.m)("mwc-textfield")}processClientUserSearch(e,t){t.page=t.page||0;const s=e.count,i=e.results,r=document.querySelector('[id="member"]');let n=[];if(s>0){var o=i;for(let e=0;e<o.length;e++){const t=o[e],s={id:t.id,text:t.firstname+" "+t.surname};n.includes(s)||n.push(s)}}return{results:n,total:s,totalShowing:r.totalShowing}}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranchId)}]}getBranches(){return C(this,void 0,void 0,(function*(){const e=yield(0,a.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const s=[];s.push(...this._branches,...t),this._branches=s}))}getGenders(){return C(this,void 0,void 0,(function*(){const e=yield(0,l.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,c.y)(e))));const s=[];s.push(...this._genders,...t),this._genders=s}))}getPageAccesses(){return C(this,void 0,void 0,(function*(){const e=yield(0,u.u)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>$.e.toClientPageAccessModel(JSON.stringify(e)))));const s=[];s.push(...this._pageAccesses,...t),this._pageAccesses=s}))}submitForm(e){return C(this,void 0,void 0,(function*(){if(e.preventDefault(),"true"===this.edit){if(this.isEditable){const e=this.clientUser,t=e.data,s=Array.isArray(t)?t[0]:t;e.success&&(1===this.formId?yield function(e){return A(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),s=m.t.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,i=document.querySelector('[make-general-posts="client-user"]'),r=new FormData(i);return p().fire({title:"Update user profile?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>A(this,void 0,void 0,(function*(){return yield(0,f.d)(s,{method:"PUT",body:r,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,i),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((s=>{let i={error:t.id+": "+s};"non_field_errors"===t.id&&(i={error:s}),e.push(i)}))}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),s=i.response.success}s&&p().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(s.id):2===this.formId?(yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),s=m.t.URLS.AKWAABA_API_BASE_URL+"clients/user-access/setup/"+e,i=document.querySelector('[make-general-posts="client-user"]'),r=new FormData(i);return p().fire({title:"Setup user page access?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,f.d)(s,{method:"PUT",body:r,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,i),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{const s=t.errors,i=t.id;if(Array.isArray(s))s.forEach((s=>{let i={error:t.id+": "+s};"non_field_errors"===t.id&&(i={error:s}),e.push(i)}));else for(const s in t.errors)if(Object.prototype.hasOwnProperty.call(t.errors,s)){const r=t.errors[s];Array.isArray(r)&&r.forEach((t=>{let s={error:i+": "+t};e.push(s)}))}}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),s=i.response.success}s&&p().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(s.id),yield(0,P.g)(!0)):yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),s=m.t.URLS.AKWAABA_API_BASE_URL+"clients/user/change-password/"+e,i=document.querySelector('[make-general-posts="client-user"]'),r=new FormData(i);return p().fire({title:"Update user password?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,f.d)(s,{method:"PATCH",body:r,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,i),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((s=>{let i={error:t.id+": "+s};"non_field_errors"===t.id&&(i={error:s}),e.push(i)}))}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),s=i.response.success}s&&p().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(s.id))}}else yield function(){return b(this,void 0,void 0,(function*(){const e=(0,d.Ie)(),t=m.t.URLS.AKWAABA_API_BASE_URL+"clients/user",s=document.querySelector('[make-general-posts="client-user"]'),i=new FormData(s);return p().fire({title:"Add Admin User?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>b(this,void 0,void 0,(function*(){return yield(0,f.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new y.H("post",e,!1,s),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{const s=t.errors,i=t.id;if(Array.isArray(s))s.forEach((s=>{let i={error:t.id+": "+s};"non_field_errors"===t.id&&(i={error:s}),e.push(i)}));else for(const s in t.errors)if(Object.prototype.hasOwnProperty.call(t.errors,s)){const r=t.errors[s];Array.isArray(r)&&r.forEach((t=>{let s={error:i+": "+t};e.push(s)}))}}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),s=i.response.success}s&&p().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};I.styles=[i.iv`
   :host { display: block; }
  `],E([(0,r.Cb)({type:String}),k("design:type",String)],I.prototype,"edit",void 0),E([(0,r.Cb)({type:Boolean}),k("design:type",Boolean)],I.prototype,"editAccess",void 0),E([(0,r.Cb)({type:Boolean}),k("design:type",Boolean)],I.prototype,"isEditable",void 0),E([(0,r.Cb)({type:String}),k("design:type",String)],I.prototype,"page_type",void 0),E([(0,r.Cb)({type:String}),k("design:type",String)],I.prototype,"registrationType",void 0),E([(0,r.Cb)({type:Number}),k("design:type",Number)],I.prototype,"formId",void 0),E([(0,r.Cb)({type:Number}),k("design:type",Number)],I.prototype,"startSearchPage",void 0),E([(0,r.Cb)({type:Number}),k("design:type",Number)],I.prototype,"selectedBranchId",void 0),E([(0,r.Cb)({type:Array}),k("design:type",Array)],I.prototype,"_branches",void 0),E([(0,r.Cb)({type:Array}),k("design:type",Array)],I.prototype,"_genders",void 0),E([(0,r.Cb)({type:Array}),k("design:type",Array)],I.prototype,"_pageAccesses",void 0),E([(0,r.Cb)({type:Array}),k("design:type",Array)],I.prototype,"_activeBranchId",void 0),E([(0,r.Cb)({type:Array}),k("design:type",Array)],I.prototype,"_userLoginInfo",void 0),E([(0,r.IO)("#mainAccountFormBtn"),k("design:type","function"==typeof(x=void 0!==n.z&&n.z)?x:Object)],I.prototype,"mainAccountFormBtn",void 0),E([(0,r.IO)("#accessPagesFormBtn"),k("design:type","function"==typeof(_=void 0!==n.z&&n.z)?_:Object)],I.prototype,"accessPagesFormBtn",void 0),E([(0,r.IO)("#passwordFormBtn"),k("design:type","function"==typeof(B=void 0!==n.z&&n.z)?B:Object)],I.prototype,"passwordFormBtn",void 0),I=E([(0,r.Mo)("pdb-admin-user-form"),k("design:paramtypes",[])],I)},4232:(e,t,s)=>{s.d(t,{OR:()=>o,hl:()=>c,pt:()=>n});var i=s(3692);const{I:r}=i.Al,n=e=>null===e||"object"!=typeof e&&"function"!=typeof e,o=e=>void 0===e.strings,a={},c=(e,t=a)=>e._$AH=t},8082:(e,t,s)=>{s.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=s(875)},3669:(e,t,s)=>{s.d(t,{a:()=>o});var i=s(3692),r=s(875),n=s(4232);const o=(0,r.XM)(class extends r.Xe{constructor(e){if(super(e),e.type!==r.pX.PROPERTY&&e.type!==r.pX.ATTRIBUTE&&e.type!==r.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,n.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const s=e.element,o=e.name;if(e.type===r.pX.PROPERTY){if(t===s[o])return i.Jb}else if(e.type===r.pX.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(o))return i.Jb}else if(e.type===r.pX.ATTRIBUTE&&s.getAttribute(o)===t+"")return i.Jb;return(0,n.hl)(e),t}})}}]);
//# sourceMappingURL=7250.js.map