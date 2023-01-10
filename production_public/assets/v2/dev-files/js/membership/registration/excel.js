"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/registration/excel"],{3076:(e,t,n)=>{n.r(t)},1243:(e,t,n)=>{n.r(t)},5501:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>o,https_swal_error_format:()=>r});const o="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",r=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?o:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,n)=>{n.r(t),n.d(t,{tokenLogin:()=>d,verifyToken:()=>c});var o=n(8485),r=n(7270),i=n(7052),s=n(1942),a=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const c=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,p=(0,s.get_cookie)(d),u=JSON.stringify({token:(0,i.base64Decode)(p)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,s.get_cookie)(d+"_date"))))return p;yield(0,r.http)(c,{method:"POST",body:u},!0).then((o=>a(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,i.base64Encode)(String(o.jsonData.token));(0,s.set_cookies)(d,e,10),(0,s.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})),l=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",c=n,l=JSON.stringify({email:e,id:t});yield(0,r.http)(a,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,i.base64Encode)(String(e.jsonData.token));(0,s.set_cookies)(c,t,10),(0,s.set_cookies_minutes)(c+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>a(void 0,void 0,void 0,(function*(){const o=(0,i.base64Encode)(String(t)),r=n;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:r}}},""==(0,s.get_cookie)(r)?yield l(e,o,n):yield c(e,o,n)}))},4672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>r,urlQueryParamsGetAll:()=>i,urlQueryParamsJoin:()=>s});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},r=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},i=e=>new URLSearchParams(window.location.search).getAll(e),s=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},5360:(e,t,n)=>{n.r(t),n.d(t,{POST_MembershipRegisterExcel:()=>p});var o=n(6455),r=n.n(o),i=n(8485),s=n(7270),a=n(4492),c=n(8967),l=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};function p(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/excel",n=document.querySelector('[make-general-posts="register-excel"]'),o=new FormData(n);return r().fire({title:"Proceed with excel registration?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{const n=t.errors;if(Array.isArray(n))n.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}));else if("string"==typeof n)e.push(n);else{const t=n;for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){let o={error:n+": "+t[n]};e.push(o)}}}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},1854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>c});var o=n(5862),r=n(9662),i=(n(3283),n(6413),n(789),n(3830),n(1985),n(3313),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let c=class extends o.LitElement{constructor(){super(),this.index=0,this._widget=o.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return o.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?o.nothing:o.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return a(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};i([(0,r.property)({type:Number}),s("design:type",Number)],c.prototype,"index",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"no_delete",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],c.prototype,"single",void 0),i([(0,r.property)({type:String}),s("design:type",String)],c.prototype,"_single",void 0),c=i([(0,r.customElement)("multiple-widgets"),s("design:paramtypes",[])],c)},2461:(e,t,n)=>{n.r(t),n.d(t,{FileInput:()=>a});var o=n(5862),r=n(9662),i=(n(9975),n(3283),n(1243),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[o.css`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"name",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"label",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"value",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"accept",void 0),i([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"randomID",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"id",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"required",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"hasLabel",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"multiple",void 0),i([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"startNumber",void 0),i([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"rowsPerPage",void 0),i([(0,r.property)({type:Number}),s("design:type",Number)],a.prototype,"totalShowing",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=i([(0,r.customElement)("file-input")],a)},3690:(e,t,n)=>{n.r(t),n.d(t,{SwitchInput:()=>a});var o=n(5862),r=n(9662),i=(n(9975),n(6788),function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.html`
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
    `],i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"name",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"label",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"selected",void 0),i([(0,r.property)({type:String}),s("design:type",String)],a.prototype,"value",void 0),i([(0,r.property)({type:Boolean}),s("design:type",Boolean)],a.prototype,"isSelected",void 0),a=i([(0,r.customElement)("switch-input")],a)},8701:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcelCreate:()=>p}),n(5501);var o,r=n(5862),i=n(9662),s=(n(3283),n(1511),n(3690),n(1854),n(2461),n(4672)),a=n(5360),c=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};let p=class extends r.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,s.urlQueryParams)()}))}disconnectedCallback(){}render(){return r.html`${this.form}`}get form(){return r.html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Member Registration</h1>
                  <h3 class="h3">Excel Member Registration</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="register-excel" enctype="multipart/form-data">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.attachmentField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">
                      <mwc-button label="Register" raised class="button" @click="${this.submitForm}">
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
    `}get attachmentField(){return r.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="excel" name="excel" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,a.POST_MembershipRegisterExcel)()}))}createRenderRoot(){return this}};p.styles=[r.css`
   :host { display: block; }
  `],c([(0,i.property)({type:Number}),l("design:type",Number)],p.prototype,"CLIENT_ID",void 0),c([(0,i.property)({type:Array}),l("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],p.prototype,"_data",void 0),c([(0,i.property)({type:Object}),l("design:type",Object)],p.prototype,"urlQueryParams",void 0),p=c([(0,i.customElement)("membership-registration-excel-create"),l("design:paramtypes",[])],p)},194:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcel:()=>h}),n(3076);var o=n(4108),r=n(5862),i=n(9662),s=(n(8701),n(8485)),a=(n(3683),n(4657),n(7712)),c=n(1354),l=n(1302),d=n(6869),p=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},u=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends r.LitElement{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,i=function*(){e.connectedCallback.call(this),(0,a.AppSetup)().then((()=>this._hasSetup=!0)),yield(0,o.tokenLogin)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}c((i=i.apply(t,n||[])).next())}));var t,n,r,i}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,c.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return r.html`<account-expired-component></account-expired-component>`;if(!(0,l.AppSettingsExtraUserAccess)({pageId:d.PAGE__IDS.create,viewType:"Edit"},!1))return r.html`<no-page-entry-component></no-page-entry-component>`}return r.html`
      <a href="${s.CONSTANTS.URLS.PDB_CLIENT}assets/v2/samples/new%20Excel%20Registration.xlsx">
        <mwc-button icon="download" label="Download Template" class="success" raised></mwc-button>
      </a>
      <membership-registration-excel-create CLIENT_ID="${this.clientId}"></membership-registration-excel-create>
    `}firstUpdated(){}createRenderRoot(){return this}};p([(0,i.property)({type:String}),u("design:type",String)],h.prototype,"email",void 0),p([(0,i.property)({type:Number}),u("design:type",Number)],h.prototype,"mId",void 0),p([(0,i.property)({type:Number}),u("design:type",Number)],h.prototype,"clientId",void 0),p([(0,i.property)({type:Boolean}),u("design:type",Boolean)],h.prototype,"_hasSetup",void 0),h=p([(0,i.customElement)("membership-registration-excel"),u("design:paramtypes",[])],h)},6869:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>o});const o={create:23}}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.wicg-inert","vendors.blocking-elements","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_attendance_setup_form_scss","src_assets_styles_views_tailwind-output_unaccessible_pages_scss-src_assets_styles_views_widge-c8af88","shared"],(()=>(194,e(e.s=194)))),e.O())])));
//# sourceMappingURL=excel.js.map