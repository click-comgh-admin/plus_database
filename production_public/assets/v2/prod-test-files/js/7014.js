/*! For license information please see 7014.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7014],{8967:(e,t,r)=>{r.d(t,{T:()=>i});const i=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},6651:(e,t,r)=>{r.d(t,{m:()=>n}),r(934);let i=[];const s="Show Password",n=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const r=e.parentElement;r.setAttribute("style",r.getAttribute("style")+"; flex-direction: column !important;");const n=document.createElement("label");n.setAttribute("style",n.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const a=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),a.innerText=s;const c=document.createElement("span");a.setAttribute("style",a.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const l=document.createElement("input");l.type="checkbox",l.id="pswd-visibility-btn--"+t,l.setAttribute("style",l.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),n.appendChild(c),n.appendChild(l),n.appendChild(a),e.after(n);const d={id:l.id,showing:!1,elem:e,span:a};i.includes(d)||i.push(d),l.addEventListener("change",o)}))},o=e=>{e.preventDefault();const t=e.currentTarget;t.checked,i.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=s,e.showing=!1))}))}},7775:(e,t,r)=>{function i(e){return{id:Number(e.id),page:e.page}}function s(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:i(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}r.d(t,{z:()=>s})},2869:(e,t,r)=>{function i(e){return{id:Number(e.id),name:e.name}}r.d(t,{y:()=>i})},6224:(e,t,r)=>{r.d(t,{p:()=>a});var i=r(771),s=r(7270),n=r(596),o=r(3600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,o.Ie)(),r=i.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,s.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new n.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new n.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function s(e){try{o(c.next(e))}catch(e){i(e)}}function n(e){try{o(c.throw(e))}catch(e){i(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(s,n)}o((c=c.apply(t,r||[])).next())}));var t,r,a,c}},7553:(e,t,r)=>{r.d(t,{q:()=>a});var i=r(771),s=r(7270),n=r(596),o=r(3600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,o.Ie)(),r=i.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),a=yield(0,s.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new n.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new n.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,i){function s(e){try{o(c.next(e))}catch(e){i(e)}}function n(e){try{o(c.throw(e))}catch(e){i(e)}}function o(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(s,n)}o((c=c.apply(t,r||[])).next())}));var t,r,a,c}},5866:(e,t,r)=>{var i=r(9755),s=r(5862),n=r(8393),o=(r(686),function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends s.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=i(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let r=!1;return this.value.forEach((e=>{const i=e.id;r=t===i})),e.selected=r,e}))}render(){return this.multiple?this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:s.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?s.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:s.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:i(this.value.map((t=>{const r=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+r+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const r=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,i(".select2-search__field").on("keyup",(function(e){i(r.selectSelector).empty(),r.startSearchPage=0})),r.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,r=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{i(e).select2({closeOnSelect:!1,placeholder:this.label}),i(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let s={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)s[e]=this.ajaxHeader[e];this.selectSelector.forEach((n=>{i(n).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(s){const n=function(s,n){return r=isNaN(s.page)?0:s.page,r=0===r?r:r*t,i(".select2-search__field").on("keyup",(function(s){i(e.selectSelector).empty(),r=0,t=0})),r}(s),o=function(r,s){let n=isNaN(r.page)?1:r.page+1;return n=0===n?1:n,i(".select2-search__field").on("keyup",(function(r){i(e.selectSelector).empty(),n=0,t=0})),n}(s);let a={search:s.term,start:n,page:o};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:s,processResults:(e,r)=>{const i=null===this.ajaxFetchProcessResponse?this._processResults(e,r):this.ajaxFetchProcessResponse(e,r);return t+=i.results.length,{results:i.results,pagination:{more:t<i.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{r=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const r=e;t.page=t.page||0;let i=[];if(!1===r.error){var s=r.data;for(let e=0;e<s.length;e++){const t=s[e],r={id:t.id,text:t.fullName};i.includes(r)||i.push(r)}}return this.totalShowing+=i.length,{results:i,total:r.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let r=[];for(const e of t){let t=e;const i=Number.isNaN(t.value)?0:Number(t.value);r.includes(i)||r.push(i)}this.currentValue=r,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",r)}createRenderRoot(){return this}};c.styles=[s.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"name",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"label",void 0),o([(0,n.Cb)({type:Array}),a("design:type",Array)],c.prototype,"value",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"randomID",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"input_id",void 0),o([(0,n.Cb)({type:Array}),a("design:type",Array)],c.prototype,"options",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"required",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchToken",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),o([(0,n.Cb)({attribute:!1}),a("design:type",Object)],c.prototype,"currentValue",void 0),o([(0,n.Cb)({type:Object}),a("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),o([(0,n.Cb)({type:Array}),a("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"startSearchPage",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"multiple",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"startNumber",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"rowsPerPage",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],c.prototype,"totalShowing",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=o([(0,n.Mo)("select-input")],c)},9852:(e,t,r)=>{var i=r(5862),s=r(8393),n=r(5248),o=(r(3313),r(9261),r(1877),r(2169),r(5866),r(2004)),a=r(6224),c=r(2869),l=r(7553),d=r(3600),u=r(4728),h=r(6455),p=r.n(h),m=r(771),f=r(7270),y=r(596),g=r(8967),b=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},v=r(6651),w=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},A=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))},S=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};r(8954);var x,_,B,$=r(3248),F=r(2229),E=r(2145),P=function(e,t,r,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(n<3?s(o):n>3?s(t,r,o):s(t,r))||o);return n>3&&o&&Object.defineProperty(t,r,o),o},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,r,i){return new(r||(r=Promise))((function(s,n){function o(e){try{c(i.next(e))}catch(e){n(e)}}function a(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};let C=class extends i.oi{constructor(){super(),this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this.registrationType="none",this.formId=1,this.startSearchPage=0,this.selectedBranchId=0,this._branches=[],this._genders=[],this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserAccess=this._clientUserAccessDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return k(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,o.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,d.Ie)()],yield this.getPageAccesses(),yield this.getBranches(),yield this.getGenders(),"true"==this.edit&&(this.registrationType="new-entry")}))}disconnectedCallback(){}render(){return"true"===this.edit?("mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,i.dy`
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
    `}get branchField(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);const t=this.clientUser,r=t.data,s=Array.isArray(r)?r[0]:r,n=t.success;return i.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Branch</h4>
        <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" @change="${this.setSelectedBranchId}" outlined required>
          ${1===e?i.dy`
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((e=>n&&s.branchId===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
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
    `}get pageAccesses(){let e=[];return this._pageAccesses.forEach((t=>{const r={id:t.id,name:t.page,isSelected:"false",selected:!1};e.includes(r)||e.push(r)})),e}get accessFieldSelectBox(){const e=this.pageAccesses;return i.dy`
      <div class="col-md-6 col-lg-8">
        <h4 class="font-semibold my-2">Select User Access</h4> 
        <select-input name="access" multiple class="w-full" id="access"
          label="Select User Access" .options="${e}" outlined required>
        </select-input>
      </div>
    `}get accessFieldTickBox(){this.pageAccesses;const e=this.clientUserAccess,t=e.data,r=Array.isArray(t)?t:[t],s=e.success;let n=[];return s&&r.forEach((e=>{e=F.e.toClientUserPageAccessModel(JSON.stringify(e)),n.includes(e)||n.push(e)})),i.dy`
      <div class="col-md-12 col-lg-12">
        <client-user-access-card ?isActive="${!0}" .available_access="${this._pageAccesses}" .user_access="${n}"></client-user-access-card>
      </div>
    `}get newEntryFields(){const e=this.clientUser,t=e.data,r=Array.isArray(t)?t[0]:t,s=e.success;let n="";if(s){const e=new Date(r.dateOfBirth).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");n=[e[2],e[0],e[1]].join("-")}return i.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Firstname</h4> 
        <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" 
          value="${s?r.firstname:""}" label="Enter Firstname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Surname</h4> 
        <mwc-textfield name="surname" type="text" class="w-full" id="surname" 
          value="${s?r.surname:""}" label="Enter Surname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Gender</h4>
        <mwc-select name="gender" class="w-full" id="gender" label="Select Gender" outlined required>
          <mwc-list-item value="0">Select Gender</mwc-list-item>
          ${this._genders.map((e=>s&&r.gender===e.id?i.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
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
          label="Enter Phone Number" value="${s?r.phone:""}" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Email Address</h4> 
        <mwc-textfield name="email" multiple type="email" class="w-full" id="email"
          label="Enter Email Address" value="${s?r.email:""}" outlined required>
        </mwc-textfield>
      </div>
    `}firstUpdated(){(0,v.m)(),(0,v.m)("mwc-textfield")}processClientUserSearch(e,t){t.page=t.page||0;const r=e.count,i=e.results,s=document.querySelector('[id="member"]');let n=[];if(r>0){var o=i;for(let e=0;e<o.length;e++){const t=o[e],r={id:t.id,text:t.firstname+" "+t.surname};n.includes(r)||n.push(r)}}return{results:n,total:r,totalShowing:s.totalShowing}}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranchId)}]}getBranches(){return k(this,void 0,void 0,(function*(){const e=yield(0,a.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const r=[];r.push(...this._branches,...t),this._branches=r}))}getGenders(){return k(this,void 0,void 0,(function*(){const e=yield(0,l.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,c.y)(e))));const r=[];r.push(...this._genders,...t),this._genders=r}))}getPageAccesses(){return k(this,void 0,void 0,(function*(){const e=yield(0,u.u)();let t=[];null===e?t.push({id:0,page:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>$.e.toClientPageAccessModel(JSON.stringify(e)))));const r=[];r.push(...this._pageAccesses,...t),this._pageAccesses=r}))}submitForm(e){return k(this,void 0,void 0,(function*(){if(e.preventDefault(),"true"===this.edit){if(this.isEditable){const e=this.clientUser,t=e.data,r=Array.isArray(t)?t[0]:t;e.success&&(1===this.formId?yield function(e){return A(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),r=m.t.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,i=document.querySelector('[make-general-posts="client-user"]'),s=new FormData(i);return p().fire({title:"Update user profile?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>A(this,void 0,void 0,(function*(){return yield(0,f.d)(r,{method:"PUT",body:s,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,i),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let i={error:t.id+": "+r};"non_field_errors"===t.id&&(i={error:r}),e.push(i)}))}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),r=i.response.success}r&&p().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(r.id):2===this.formId?(yield function(e){return w(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),r=m.t.URLS.AKWAABA_API_BASE_URL+"clients/user-access/setup/"+e,i=document.querySelector('[make-general-posts="client-user"]'),s=new FormData(i);return p().fire({title:"Setup user page access?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>w(this,void 0,void 0,(function*(){return yield(0,f.d)(r,{method:"PUT",body:s,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,i),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{const r=t.errors,i=t.id;if(Array.isArray(r))r.forEach((r=>{let i={error:t.id+": "+r};"non_field_errors"===t.id&&(i={error:r}),e.push(i)}));else for(const r in t.errors)if(Object.prototype.hasOwnProperty.call(t.errors,r)){const s=t.errors[r];Array.isArray(s)&&s.forEach((t=>{let r={error:i+": "+t};e.push(r)}))}}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),r=i.response.success}r&&p().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(r.id),yield(0,E.g)(!0)):yield function(e){return S(this,void 0,void 0,(function*(){const t=(0,d.Ie)(),r=m.t.URLS.AKWAABA_API_BASE_URL+"clients/user/change-password/"+e,i=document.querySelector('[make-general-posts="client-user"]'),s=new FormData(i);return p().fire({title:"Update user password?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>S(this,void 0,void 0,(function*(){return yield(0,f.d)(r,{method:"PATCH",body:s,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,i),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let i={error:t.id+": "+r};"non_field_errors"===t.id&&(i={error:r}),e.push(i)}))}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),r=i.response.success}r&&p().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(r.id))}}else yield function(){return b(this,void 0,void 0,(function*(){const e=(0,d.Ie)(),t=m.t.URLS.AKWAABA_API_BASE_URL+"clients/user",r=document.querySelector('[make-general-posts="client-user"]'),i=new FormData(r);return p().fire({title:"Add Admin User?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>b(this,void 0,void 0,(function*(){return yield(0,f.d)(t,{method:"POST",body:i,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new y.H("post",e,!1,r),i=t.response;if(console.log({_RESPONSE:i}),"nameError"in i&&"unknownError"in i){if(i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{const r=t.errors,i=t.id;if(Array.isArray(r))r.forEach((r=>{let i={error:t.id+": "+r};"non_field_errors"===t.id&&(i={error:r}),e.push(i)}));else for(const r in t.errors)if(Object.prototype.hasOwnProperty.call(t.errors,r)){const s=t.errors[r];Array.isArray(s)&&s.forEach((t=>{let r={error:i+": "+t};e.push(r)}))}}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}if(i.nameError.length>0){let e=[];i.nameError.forEach((t=>{const r=t.errors,i=t.id;if(["limitations","pageId"].includes(i))if(console.log({_errors_name:i}),Array.isArray(r)){let t={error:"Select Access Levels"};e.push(t)}else for(const r in t.errors)if(Object.prototype.hasOwnProperty.call(t.errors,r)){const s=t.errors[r];Array.isArray(s)&&s.forEach((t=>{let r={error:i+": "+t};e.push(r)}))}}));const t=(0,g.T)(e);p().showValidationMessage(`${t}`)}}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const i=e.value;if(i instanceof Object){const e=i.response;t=String(e.message),r=i.response.success}r&&p().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};C.styles=[i.iv`
   :host { display: block; }
  `],P([(0,s.Cb)({type:String}),I("design:type",String)],C.prototype,"edit",void 0),P([(0,s.Cb)({type:Boolean}),I("design:type",Boolean)],C.prototype,"editAccess",void 0),P([(0,s.Cb)({type:Boolean}),I("design:type",Boolean)],C.prototype,"isEditable",void 0),P([(0,s.Cb)({type:String}),I("design:type",String)],C.prototype,"page_type",void 0),P([(0,s.Cb)({type:String}),I("design:type",String)],C.prototype,"registrationType",void 0),P([(0,s.Cb)({type:Number}),I("design:type",Number)],C.prototype,"formId",void 0),P([(0,s.Cb)({type:Number}),I("design:type",Number)],C.prototype,"startSearchPage",void 0),P([(0,s.Cb)({type:Number}),I("design:type",Number)],C.prototype,"selectedBranchId",void 0),P([(0,s.Cb)({type:Array}),I("design:type",Array)],C.prototype,"_branches",void 0),P([(0,s.Cb)({type:Array}),I("design:type",Array)],C.prototype,"_genders",void 0),P([(0,s.Cb)({type:Array}),I("design:type",Array)],C.prototype,"_pageAccesses",void 0),P([(0,s.Cb)({type:Array}),I("design:type",Array)],C.prototype,"_activeBranchId",void 0),P([(0,s.Cb)({type:Array}),I("design:type",Array)],C.prototype,"_userLoginInfo",void 0),P([(0,s.IO)("#mainAccountFormBtn"),I("design:type","function"==typeof(x=void 0!==n.z&&n.z)?x:Object)],C.prototype,"mainAccountFormBtn",void 0),P([(0,s.IO)("#accessPagesFormBtn"),I("design:type","function"==typeof(_=void 0!==n.z&&n.z)?_:Object)],C.prototype,"accessPagesFormBtn",void 0),P([(0,s.IO)("#passwordFormBtn"),I("design:type","function"==typeof(B=void 0!==n.z&&n.z)?B:Object)],C.prototype,"passwordFormBtn",void 0),C=P([(0,s.Mo)("pdb-admin-user-form"),I("design:paramtypes",[])],C)},1710:(e,t,r)=>{r.d(t,{W:()=>i});const i={view:25,create:26,update:27}},4232:(e,t,r)=>{r.d(t,{OR:()=>o,hl:()=>c,pt:()=>n});var i=r(3692);const{I:s}=i.Al,n=e=>null===e||"object"!=typeof e&&"function"!=typeof e,o=e=>void 0===e.strings,a={},c=(e,t=a)=>e._$AH=t},8082:(e,t,r)=>{r.d(t,{XM:()=>i.XM,Xe:()=>i.Xe,pX:()=>i.pX});var i=r(875)},3669:(e,t,r)=>{r.d(t,{a:()=>o});var i=r(3692),s=r(875),n=r(4232);const o=(0,s.XM)(class extends s.Xe{constructor(e){if(super(e),e.type!==s.pX.PROPERTY&&e.type!==s.pX.ATTRIBUTE&&e.type!==s.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,n.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===i.Jb||t===i.Ld)return t;const r=e.element,o=e.name;if(e.type===s.pX.PROPERTY){if(t===r[o])return i.Jb}else if(e.type===s.pX.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(o))return i.Jb}else if(e.type===s.pX.ATTRIBUTE&&r.getAttribute(o)===t+"")return i.Jb;return(0,n.hl)(e),t}})}}]);
//# sourceMappingURL=7014.js.map