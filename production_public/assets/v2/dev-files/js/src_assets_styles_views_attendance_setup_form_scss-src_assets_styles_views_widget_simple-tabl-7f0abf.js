"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-7f0abf"],{95358:(e,t,i)=>{i.r(t)},69579:(e,t,i)=>{i.r(t)},45501:(e,t,i)=>{i.r(t)},14108:(e,t,i)=>{i.r(t),i.d(t,{tokenLogin:()=>d,verifyToken:()=>a});var n=i(48485),o=i(87270),s=i(67052),c=i(21942),r=function(e,t,i,n){return new(i||(i=Promise))((function(o,s){function c(e){try{a(n.next(e))}catch(e){s(e)}}function r(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,r)}a((n=n.apply(e,t||[])).next())}))};const a=(e,t,i)=>r(void 0,void 0,void 0,(function*(){const a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=i,u=(0,c.get_cookie)(d),p=JSON.stringify({token:(0,s.base64Decode)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,c.get_cookie)(d+"_date"))))return u;yield(0,o.http)(a,{method:"POST",body:p},!0).then((n=>r(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,s.base64Encode)(String(n.jsonData.token));(0,c.set_cookies)(d,e,10),(0,c.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,i)}))))})),l=(e,t,i)=>r(void 0,void 0,void 0,(function*(){const r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",a=i,l=JSON.stringify({email:e,id:t});yield(0,o.http)(r,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,s.base64Encode)(String(e.jsonData.token));(0,c.set_cookies)(a,t,10),(0,c.set_cookies_minutes)(a+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,i)=>r(void 0,void 0,void 0,(function*(){const n=(0,s.base64Encode)(String(t)),o=i;window.supersecret={unknowable:{ops:{email:e,id:n,cookieName:o}}},""==(0,c.get_cookie)(o)?yield l(e,n,i):yield a(e,n,i)}))},44672:(e,t,i)=>{i.r(t),i.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>o,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>c});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),i=Object.fromEntries(t.entries());let n=null;for(const t in i)t===e&&(n=i[t]);return n},s=e=>new URLSearchParams(window.location.search).getAll(e),c=e=>{let t="",i=0;for(const n in e)i+=1,t+=`${i>1?"&":""}${n}=${e[n]}`;return t}},71854:(e,t,i)=>{i.r(t),i.d(t,{MultipleWidgets:()=>a});var n=i(85862),o=i(59662),s=(i(23283),i(16413),i(40789),i(33830),i(76948),i(63313),function(e,t,i,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(s<3?o(c):s>3?o(t,i,c):o(t,i))||c);return s>3&&c&&Object.defineProperty(t,i,c),c}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(e,t,i,n){return new(i||(i=Promise))((function(o,s){function c(e){try{a(n.next(e))}catch(e){s(e)}}function r(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,r)}a((n=n.apply(e,t||[])).next())}))};let a=class extends n.LitElement{constructor(){super(),this.index=0,this._widget=n.html``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return r(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return n.html`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?n.nothing:n.html`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return r(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};s([(0,o.property)({type:Number}),c("design:type",Number)],a.prototype,"index",void 0),s([(0,o.property)({type:Boolean}),c("design:type",Boolean)],a.prototype,"no_delete",void 0),s([(0,o.property)({type:Boolean}),c("design:type",Boolean)],a.prototype,"single",void 0),s([(0,o.property)({type:String}),c("design:type",String)],a.prototype,"_single",void 0),a=s([(0,o.customElement)("multiple-widgets"),c("design:paramtypes",[])],a)},41260:(e,t,i)=>{i.r(t),i.d(t,{MembershipRegistrationExcelLocation:()=>g}),i(95358);var n=i(85862),o=i(59662),s=(i(33590),i(40789),i(23283),i(63313),i(75866),i(43690),i(37725),i(12761)),c=i(75458),r=i(74564),a=i(24253),l=i(9446),d=i(91729),u=i(46525),p=i(71791),h=function(e,t,i,n){var o,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(c=(s<3?o(c):s>3?o(t,i,c):o(t,i))||c);return s>3&&c&&Object.defineProperty(t,i,c),c},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,i,n){return new(i||(i=Promise))((function(o,s){function c(e){try{a(n.next(e))}catch(e){s(e)}}function r(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(c,r)}a((n=n.apply(e,t||[])).next())}))};let g=class extends n.LitElement{constructor(){super(),this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._countries=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={}}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getLocationCountry()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),i=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),o=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return n.html`
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
                    <select-input name="district" id="district" label="Select District" .options="${i}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Constituency</h4>
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${o}"
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
    `}firstUpdated(){document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e)}}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),i=this.querySelectorAll("[show_state_province]"),n="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(n)})),i.forEach((e=>{e.classList.add(n)}))):(t.forEach((e=>{e.classList.add(n)})),i.forEach((e=>{e.classList.remove(n)})))}))}))}regionChanged(e){return m(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getLocationCountry(){return m(this,void 0,void 0,(function*(){const e=yield(0,l.GET_LocationCountry)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>s.Convert.toCountryModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._countries,...t),this._countries=i}))}getLocationRegion(){return m(this,void 0,void 0,(function*(){const e=yield(0,d.GET_LocationRegion)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>c.Convert.toLocationRegionModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._regions,...t),this._regions=i}))}getLocationDistrict(e){return m(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),i=this._districtsMemo;if(t in i)setTimeout((()=>{const e=[];e.push(...this._districts,...i[t]),this._districts=e}),100);else{const i=yield(0,u.GET_LocationDistrictFilter)(e);let n=[{id:0,location:"Select District",regionId:null}];if(null===i)n.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===i.response.success&&"length"in i.response.data){const e=i.response.data.map((e=>a.Convert.toLocationDistrictModel(JSON.stringify(e))));n=[...n,...e],this._districtsMemo[t]=n}const o=[];o.push(...this._districts,...n),this._districts=o}}))}getLocationConstituency(e,t){return m(this,void 0,void 0,(function*(){this._constituencies=[];const i=`${e}_${t}`,n=this._constituenciesMemo;if(i in n)setTimeout((()=>{const e=[];e.push(...this._constituencies,...n[i]),this._constituencies=e}),100);else{const n=yield(0,p.GET_LocationConstituencyFilter)(e,t);let o=[{id:0,location:"Select Constituency",regionId:null}];if(null===n)o.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===n.response.success&&"length"in n.response.data){const e=n.response.data.map((e=>r.Convert.toLocationConstituencyModel(JSON.stringify(e))));o=[...o,...e],this._constituenciesMemo[i]=o}const s=[];s.push(...this._constituencies,...o),this._constituencies=s}}))}createRenderRoot(){return this}};g.styles=[n.css`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],h([(0,o.property)({type:Boolean}),y("design:type",Boolean)],g.prototype,"regionCalled",void 0),h([(0,o.property)({type:Number}),y("design:type",Number)],g.prototype,"selectedRegion",void 0),h([(0,o.property)({type:Number}),y("design:type",Number)],g.prototype,"selectedDistrict",void 0),h([(0,o.property)({type:Array}),y("design:type",Array)],g.prototype,"_countries",void 0),h([(0,o.property)({type:Array}),y("design:type",Array)],g.prototype,"_regions",void 0),h([(0,o.property)({type:Array}),y("design:type",Array)],g.prototype,"_districts",void 0),h([(0,o.property)({type:Array}),y("design:type",Array)],g.prototype,"_constituencies",void 0),h([(0,o.property)({type:Object}),y("design:type",Object)],g.prototype,"_constituenciesMemo",void 0),h([(0,o.property)({type:Object}),y("design:type",Object)],g.prototype,"_districtsMemo",void 0),g=h([(0,o.customElement)("membership-registration-excel-location"),y("design:paramtypes",[])],g)},36869:(e,t,i)=>{i.r(t),i.d(t,{PAGE__IDS:()=>n});const n={create:23}}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-7f0abf.js.map