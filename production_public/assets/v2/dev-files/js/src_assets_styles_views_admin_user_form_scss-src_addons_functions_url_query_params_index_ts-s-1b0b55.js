"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_admin_user_form_scss-src_addons_functions_url_query_params_index_ts-s-1b0b55"],{3753:(e,t,i)=>{i.r(t)},8034:(e,t,i)=>{i.r(t)},8207:(e,t,i)=>{i.r(t)},1243:(e,t,i)=>{i.r(t)},8967:(e,t,i)=>{i.r(t),i.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let i=(t?o:"")+"<ul>";return e.forEach((e=>{i+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,i)=>{i.r(t),i.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>r,urlQueryParamsGetAll:()=>n,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),i=Object.fromEntries(t.entries());let o=null;for(const t in i)t===e&&(o=i[t]);return o},n=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",i=0;for(const o in e)i+=1,t+=`${i>1?"&":""}${o}=${e[o]}`;return t}},6175:(e,t,i)=>{i.r(t),i.d(t,{POST_UserEditabilityDisdable:()=>p});var o=i(6455),r=i.n(o),n=i(8485),s=i(7270),a=i(4492),l=i(8967),c=i(3600),d=function(e,t,i,o){return new(i||(i=Promise))((function(r,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};function p(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/disable-editable",i=document.querySelector('[make-general-posts="members-user-editability"]'),o=new FormData(i);return r().fire({title:"Diable Account Editability?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,i),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((i=>{let o={error:t.id+": "+i};"non_field_errors"===t.id&&(o={error:i}),e.push(o)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),i=o.response.success}i&&r().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},4865:(e,t,i)=>{i.r(t),i.d(t,{POST_UserEditabilityEndable:()=>p});var o=i(6455),r=i.n(o),n=i(8485),s=i(7270),a=i(4492),l=i(8967),c=i(3600),d=function(e,t,i,o){return new(i||(i=Promise))((function(r,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};function p(){return d(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/enable-editable",i=document.querySelector('[make-general-posts="members-user-editability"]'),o=new FormData(i);return r().fire({title:"Enable Account Editability?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,i),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((i=>{let o={error:t.id+": "+i};"non_field_errors"===t.id&&(o={error:i}),e.push(o)}))}));const t=(0,l.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),i=o.response.success}i&&r().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8763:(e,t,i)=>{i.r(t),i.d(t,{AlertCard:()=>a}),i(8034);var o=i(5862),r=i(9662),n=(i(8207),function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?o.html`
        <div class="bg-white alert-box p-0 pr-2 mb-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4 placeholder--load-wrapper">
              <div class="p-3 placeholder--activity">
                <i class="p-2"></i>
              </div>
            </div>
            <div class="ml-2 flex-1 placeholder--load-wrapper">
              <div class="placeholder--activity p-2"></div>
            </div>
          </div>
        </div>
      `:o.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?o.html`<header class="header">${this.header}</header>`:o.nothing}
              ${null!==this.content?o.html`<main class="main">${this.content}</main>`:o.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?o.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?o.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?o.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?o.html`<mwc-icon>warning</mwc-icon>`:this.danger?o.html`<mwc-icon>error_outline</mwc-icon>`:this.default?o.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?o.html`<mwc-icon>star_outline</mwc-icon>`:o.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};a.styles=[o.css`
   :host { display: block; }
  `],n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"loading",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"success",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"info",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"warning",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"danger",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"default",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"primary",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"extra_class",void 0),a=n([(0,r.customElement)("alert-card"),s("design:paramtypes",[])],a)},2461:(e,t,i)=>{i.r(t),i.d(t,{FileInput:()=>a});var o=i(5862),r=i(9662),n=(i(9975),i(3283),i(1243),function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[o.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:o.html`
          <div class="form-input border">
            ${this.hasLabel?o.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"name",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"label",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"value",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),n([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"id",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),n([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),n([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),n([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=n([(0,r.customElement)("file-input")],a)},3690:(e,t,i)=>{i.r(t),i.d(t,{SwitchInput:()=>a});var o=i(5862),r=i(9662),n=(i(9975),i(6788),function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};a.styles=[o.css`
      :host {
        display: block;
      }
    `],n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"name",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"label",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"selected",void 0),n([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"value",void 0),n([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"isSelected",void 0),a=n([(0,r.customElement)("switch-input")],a)},9876:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipUpdateViewEditabilty:()=>d});var o=i(6175),r=i(4865),n=(i(3690),i(5862)),s=i(9662),a=function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,i,o){return new(i||(i=Promise))((function(r,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((o=o.apply(e,t||[])).next())}))};let d=class extends n.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return c(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return n.html`
      <div class="w-full">
        <div class="flex justify-center my-1">
          <div class="form-container flex justify-center">
            <div class="app-container- !px-0">
              <div class="app-container--row !px-0">
                <div class="app-container--col-md-12">
                  <header
                    class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">Member</h1>
                      <h3 class="h3">Update Profile Editability!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form !my-1" make-general-posts="members-user-editability"
                    enctype="multipart/form-data">
                    <div
                      class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 mb-2">
                      <h4 class="font-semibold my-2">Account Editable</h4>
                      <switch-input name="editable" class="w-full" id="editable" ?selected="${this.currentEditabilty}"
                        label="Account Editable?" outlined>
                      </switch-input>
                      <input type="hidden" name="memberId" id="memberId" value="${this.memberId}" />
                    </div>
                    <div
                      class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                      <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
                      </mwc-button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}editablitySwitchAction(){const e=this;document.querySelectorAll('[name="editable"]').forEach((t=>{t.addEventListener("click",(i=>{e.selectedEditabilty=t.isSelected,console.log({"_this.selectedEditabilty":e.selectedEditabilty}),console.log({"_switch.isSelected":t.isSelected})}))}))}firstUpdated(){this.editablitySwitchAction()}submitForm(e){return c(this,void 0,void 0,(function*(){this.selectedEditabilty?yield(0,r.POST_UserEditabilityEndable)():yield(0,o.POST_UserEditabilityDisdable)()}))}createRenderRoot(){return this}};d.styles=[n.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],d.prototype,"memberId",void 0),a([(0,s.property)({type:Boolean}),l("design:type",Boolean)],d.prototype,"currentEditabilty",void 0),a([(0,s.property)({type:Boolean}),l("design:type",Boolean)],d.prototype,"selectedEditabilty",void 0),d=a([(0,s.customElement)("pdb-membership-update-view-editabilty"),l("design:paramtypes",[])],d)},9981:(e,t,i)=>{i.r(t),i.d(t,{PAGE__IDS:()=>o});const o={view:21,edit:22,create:23,"view-organization":53,"edit-organization":54}}}]);
//# sourceMappingURL=src_assets_styles_views_admin_user_form_scss-src_addons_functions_url_query_params_index_ts-s-1b0b55.js.map