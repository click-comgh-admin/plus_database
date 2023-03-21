"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_login_main_ts-src_vie-7e8a1b"],{95358:(e,t,n)=>{n.r(t)},69579:(e,t,n)=>{n.r(t)},45501:(e,t,n)=>{n.r(t)},14108:(e,t,n)=>{n.r(t),n.d(t,{tokenLogin:()=>d,verifyToken:()=>a});var o=n(48485),i=n(87270),s=n(67052),r=n(21942),c=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}a((o=o.apply(e,t||[])).next())}))};const a=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const a=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=n,u=(0,r.get_cookie)(d),p=JSON.stringify({token:(0,s.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,r.get_cookie)(d+"_date"))))return u;yield(0,i.http)(a,{method:"POST",body:p},!0).then((o=>c(void 0,void 0,void 0,(function*(){if(o.jsonData.token&o.jsonData.user&o.jsonData.expiry){const e=(0,s.base64Encode)(String(o.jsonData.token));(0,r.set_cookies)(d,e,10),(0,r.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,n)}))))})),l=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const c=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",a=n,l=JSON.stringify({email:e,id:t});yield(0,i.http)(c,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,s.base64Encode)(String(e.jsonData.token));(0,r.set_cookies)(a,t,10),(0,r.set_cookies_minutes)(a+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,n)=>c(void 0,void 0,void 0,(function*(){const o=(0,s.base64Encode)(String(t)),i=n;window.supersecret={unknowable:{ops:{email:e,id:o,cookieName:i}}},""==(0,r.get_cookie)(i)?yield l(e,o,n):yield a(e,o,n)}))},44672:(e,t,n)=>{n.r(t),n.d(t,{urlQueryParams:()=>o,urlQueryParamsGet:()=>i,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>r});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),n=Object.fromEntries(t.entries());let o=null;for(const t in n)t===e&&(o=n[t]);return o},s=e=>new URLSearchParams(window.location.search).getAll(e),r=e=>{let t="",n=0;for(const o in e)n+=1,t+=`${n>1?"&":""}${o}=${e[o]}`;return t}},65360:(e,t,n)=>{n.r(t),n.d(t,{POST_MembershipRegisterExcel:()=>u});var o=n(86455),i=n.n(o),s=n(48485),r=n(87270),c=n(14492),a=n(8967),l=n(33600),d=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}a((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/excel",n=document.querySelector('[make-general-posts="register-excel"]'),o=new FormData(n);return i().fire({title:"Proceed with excel registration?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:s=>d(this,void 0,void 0,(function*(){return yield(0,r.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new c.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{const n=t.errors;if(Array.isArray(n))n.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}));else if("string"==typeof n)e.push(n);else{const t=n;for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){let o={error:n+": "+t[n]};e.push(o)}}}));const t=(0,a.https_swal_error_format)(e);i().showValidationMessage(`${t}`)}return t})).catch((e=>{i().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!i().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&i().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},71854:(e,t,n)=>{n.r(t),n.d(t,{MultipleWidgets:()=>a});var o=n(85862),i=n(59662),s=(n(23283),n(16413),n(40789),n(33830),n(76948),n(63313),function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}a((o=o.apply(e,t||[])).next())}))};let a=class extends o.LitElement{constructor(){super(),this.index=0,this._widget=o.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return c(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return o.html`
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
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return c(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,i.property)({type:Number}),r("design:type",Number)],a.prototype,"index",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"no_delete",void 0),s([(0,i.property)({type:Boolean}),r("design:type",Boolean)],a.prototype,"single",void 0),s([(0,i.property)({type:String}),r("design:type",String)],a.prototype,"_single",void 0),a=s([(0,i.customElement)("multiple-widgets"),r("design:paramtypes",[])],a)},68701:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcelCreate:()=>u}),n(45501);var o,i=n(85862),s=n(59662),r=(n(23283),n(51511),n(43690),n(71854),n(37725),n(44672)),c=n(65360),a=(n(41260),function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}a((o=o.apply(e,t||[])).next())}))};let u=class extends i.LitElement{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,r.urlQueryParams)()}))}disconnectedCallback(){}render(){return i.html`
      <membership-registration-excel-location></membership-registration-excel-location>
      ${this.form}
    `}get form(){return i.html`
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
    `}get attachmentField(){return i.html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Select Attachment</h4>
            <file-input id="excel" name="excel" hasLabel label="Add Attachment" required>
            </file-input>
          </div>
        </div>
      </div>
    `}firstUpdated(){}submitForm(e){return d(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,c.POST_MembershipRegisterExcel)()}))}createRenderRoot(){return this}};u.styles=[i.css`
   :host { display: block; }
  `],a([(0,s.property)({type:Number}),l("design:type",Number)],u.prototype,"CLIENT_ID",void 0),a([(0,s.property)({type:Array}),l("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],u.prototype,"_data",void 0),a([(0,s.property)({type:Object}),l("design:type",Object)],u.prototype,"urlQueryParams",void 0),u=a([(0,s.customElement)("membership-registration-excel-create"),l("design:paramtypes",[])],u)},41260:(e,t,n)=>{n.r(t),n.d(t,{MembershipRegistrationExcelLocation:()=>y}),n(95358);var o=n(85862),i=n(59662),s=(n(33590),n(40789),n(23283),n(63313),n(75866),n(43690),n(37725),n(12761)),r=n(75458),c=n(74564),a=n(24253),l=n(9446),d=n(91729),u=n(46525),p=n(71791),h=function(e,t,n,o){var i,s=arguments.length,r=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(r=(s<3?i(r):s>3?i(t,n,r):i(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{a(o.next(e))}catch(e){s(e)}}function c(e){try{a(o.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}a((o=o.apply(e,t||[])).next())}))};let y=class extends o.LitElement{constructor(){super(),this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._countries=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={}}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return f(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getLocationCountry()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),n=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),i=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return o.html`
      <div class="form-container flex shadow-sm border bg-white p-2 m-2">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label my-1">
                  <h1 class="h1 !text-red-400">Filter Location Details</h1>
                  <h3 class="h3">
                    <span class="!text-red-400">For reference only. </span>
                    <span class="!text-red-400"> Does not affect registration.</span>
                  </h3>
                </label>
              </header>
              <form method="post" action="#" class="form !my-1">
                <div class="row">
                  <div class="col-md-3 col-lg-3">
                    <h4 class="font-semibold my-2">Select Country</h4>
                    <select-input name="country" id="country" label="Select Country" .options="${e}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_state_province>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Region</h4>
                    <select-input name="region" id="region" label="Select Region" .options="${t}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select District</h4>
                    <select-input name="district" id="district" label="Select District" .options="${n}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Constituency</h4>
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${i}"
                      outlined required>
                    </select-input>
                  </div>
                </div>
              
                <div class="flex form-input-container items-center text-center !my-1">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}firstUpdated(){document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e)}}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>f(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),n=this.querySelectorAll("[show_state_province]"),o="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(o)})),n.forEach((e=>{e.classList.add(o)}))):(t.forEach((e=>{e.classList.add(o)})),n.forEach((e=>{e.classList.remove(o)})))}))}))}regionChanged(e){return f(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>f(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>f(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getLocationCountry(){return f(this,void 0,void 0,(function*(){const e=yield(0,l.GET_LocationCountry)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>s.Convert.toCountryModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._countries,...t),this._countries=n}))}getLocationRegion(){return f(this,void 0,void 0,(function*(){const e=yield(0,d.GET_LocationRegion)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const n=e.response.data.map((e=>r.Convert.toLocationRegionModel(JSON.stringify(e))));t=[...t,...n]}const n=[];n.push(...this._regions,...t),this._regions=n}))}getLocationDistrict(e){return f(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),n=this._districtsMemo;if(t in n)setTimeout((()=>{const e=[];e.push(...this._districts,...n[t]),this._districts=e}),100);else{const n=yield(0,u.GET_LocationDistrictFilter)(e);let o=[{id:0,location:"Select District",regionId:null}];if(null===n)o.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===n.response.success&&"length"in n.response.data){const e=n.response.data.map((e=>a.Convert.toLocationDistrictModel(JSON.stringify(e))));o=[...o,...e],this._districtsMemo[t]=o}const i=[];i.push(...this._districts,...o),this._districts=i}}))}getLocationConstituency(e,t){return f(this,void 0,void 0,(function*(){this._constituencies=[];const n=`${e}_${t}`,o=this._constituenciesMemo;if(n in o)setTimeout((()=>{const e=[];e.push(...this._constituencies,...o[n]),this._constituencies=e}),100);else{const o=yield(0,p.GET_LocationConstituencyFilter)(e,t);let i=[{id:0,location:"Select Constituency",regionId:null}];if(null===o)i.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===o.response.success&&"length"in o.response.data){const e=o.response.data.map((e=>c.Convert.toLocationConstituencyModel(JSON.stringify(e))));i=[...i,...e],this._constituenciesMemo[n]=i}const s=[];s.push(...this._constituencies,...i),this._constituencies=s}}))}createRenderRoot(){return this}};y.styles=[o.css`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],h([(0,i.property)({type:Boolean}),m("design:type",Boolean)],y.prototype,"regionCalled",void 0),h([(0,i.property)({type:Number}),m("design:type",Number)],y.prototype,"selectedRegion",void 0),h([(0,i.property)({type:Number}),m("design:type",Number)],y.prototype,"selectedDistrict",void 0),h([(0,i.property)({type:Array}),m("design:type",Array)],y.prototype,"_countries",void 0),h([(0,i.property)({type:Array}),m("design:type",Array)],y.prototype,"_regions",void 0),h([(0,i.property)({type:Array}),m("design:type",Array)],y.prototype,"_districts",void 0),h([(0,i.property)({type:Array}),m("design:type",Array)],y.prototype,"_constituencies",void 0),h([(0,i.property)({type:Object}),m("design:type",Object)],y.prototype,"_constituenciesMemo",void 0),h([(0,i.property)({type:Object}),m("design:type",Object)],y.prototype,"_districtsMemo",void 0),y=h([(0,i.customElement)("membership-registration-excel-location"),m("design:paramtypes",[])],y)},36869:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>o});const o={create:23}}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_addons_functions_login_main_ts-src_vie-7e8a1b.js.map