"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6163],{8889:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcel:()=>_});var o=n(4108),r=n(9392),c=n(1936),i=(n(5248),n(6811),n(4672)),a=n(6455),s=n.n(a),l=n(771),d=n(7270),u=n(596),p=n(8967),f=n(3600),m=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function i(e){try{s(o.next(e))}catch(e){c(e)}}function a(e){try{s(o.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((o=o.apply(e,t||[])).next())}))};n(1260),n(9982);let h=class extends r.oi{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,r=function*(){e.connectedCallback.call(this)},new((o=void 0)||(o=Promise))((function(e,c){function i(e){try{s(r.next(e))}catch(e){c(e)}}function a(e){try{s(r.throw(e))}catch(e){c(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(i,a)}s((r=r.apply(t,n||[])).next())}));var t,n,o,r}disconnectedCallback(){}render(){const e=[r.dy`<app-accordion-item accordion_class_name="excel-instructions" class="mb-1"
        .buttonHtml="${r.dy`<b>Location Data</b>`}"
        .contentHtml=${r.dy`<membership-registration-excel-location></membership-registration-excel-location>`}>
        </app-accordion-item>
      `];return r.dy`
      <div class="shadow-sm border bg-white p-2 m-2">
        <h1 class="text-[#ca8a04] text-[1.5rem] font-bold">Instructions</h1>
        <app-accordion accordionName="excel-instructions" .contents=${e}></app-accordion>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};h.styles=[r.iv`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],h=function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i}([(0,c.Mo)("membership-registration-excel-instruction"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],h);var b,y=function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function i(e){try{s(o.next(e))}catch(e){c(e)}}function a(e){try{s(o.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((o=o.apply(e,t||[])).next())}))};let w=class extends r.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return g(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,i.O1)()}))}disconnectedCallback(){}render(){return r.dy`
      <membership-registration-excel-instruction></membership-registration-excel-instruction>
      ${this.form}
    `}get form(){return r.dy`
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
    `}get attachmentField(){return r.dy`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="excel" name="excel" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return g(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return m(this,void 0,void 0,(function*(){const e=(0,f.Ie)(),t=l.t.URLS.AKWAABA_API_BASE_URL+"members/user/excel",n=document.querySelector('[make-general-posts="register-excel"]'),o=new FormData(n);return s().fire({title:"Proceed with excel registration?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:r=>m(this,void 0,void 0,(function*(){return yield(0,d.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new u.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{const n=t.errors;if(Array.isArray(n))n.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}));else if("string"==typeof n)e.push(n);else{const t=n;for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){let o={error:n+": "+t[n]};e.push(o)}}}));const t=(0,p.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};w.styles=[r.iv`
   :host { display: block; }
  `],y([(0,c.Cb)({type:Number}),v("design:type",Number)],w.prototype,"CLIENT_ID",void 0),y([(0,c.Cb)({type:Array}),v("design:type","function"==typeof(b="undefined"!=typeof Array&&Array)?b:Object)],w.prototype,"_data",void 0),y([(0,c.Cb)({type:Object}),v("design:type",Object)],w.prototype,"urlQueryParams",void 0),w=y([(0,c.Mo)("membership-registration-excel-create"),v("design:paramtypes",[])],w),n(3683),n(4657);var x=n(9665),C=n(2145),k=n(1302),R=n(6869),j=function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},O=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _=class extends r.oi{constructor(){super(),this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,n=void 0,c=function*(){e.connectedCallback.call(this),(0,x.f)().then((()=>this._hasSetup=!0)),yield(0,o.B)(this.email,this.mId,"client_tokenLogin")},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{s(c.next(e))}catch(e){o(e)}}function a(e){try{s(c.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,a)}s((c=c.apply(t,n||[])).next())}));var t,n,r,c}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,C.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,k.H)({pageId:R.W.create,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return r.dy`
      <a href="${l.t.URLS.PDB_CLIENT}assets/v2/samples/new_excel_registration.xlsx">
        <mwc-button icon="download" label="Download Template" class="success" raised></mwc-button>
      </a>
      <membership-registration-excel-create CLIENT_ID="${this.clientId}"></membership-registration-excel-create>
    `}firstUpdated(){}createRenderRoot(){return this}};j([(0,c.Cb)({type:String}),O("design:type",String)],_.prototype,"email",void 0),j([(0,c.Cb)({type:Number}),O("design:type",Number)],_.prototype,"mId",void 0),j([(0,c.Cb)({type:Number}),O("design:type",Number)],_.prototype,"clientId",void 0),j([(0,c.Cb)({type:Boolean}),O("design:type",Boolean)],_.prototype,"_hasSetup",void 0),_=j([(0,c.Mo)("membership-registration-excel"),O("design:paramtypes",[])],_)}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,214,6258,3901,2743,4291,3712],(()=>(8889,e(e.s=8889)))),e.O())])));
//# sourceMappingURL=excel.js.map