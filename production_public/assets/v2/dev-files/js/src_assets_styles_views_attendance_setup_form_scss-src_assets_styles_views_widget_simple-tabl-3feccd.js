"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-3feccd"],{95358:(e,t,o)=>{o.r(t)},69579:(e,t,o)=>{o.r(t)},84003:(e,t,o)=>{o.r(t)},45501:(e,t,o)=>{o.r(t)},14108:(e,t,o)=>{o.r(t),o.d(t,{tokenLogin:()=>d,verifyToken:()=>a});var n=o(48485),i=o(87270),s=o(67052),c=o(21942),r=function(e,t,o,n){return new(o||(o=Promise))((function(i,s){function c(e){try{a(n.next(e))}catch(e){s(e)}}function r(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(c,r)}a((n=n.apply(e,t||[])).next())}))};const a=(e,t,o)=>r(void 0,void 0,void 0,(function*(){const a=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=o,p=(0,c.get_cookie)(d),u=JSON.stringify({token:(0,s.base64Decode)(p)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,c.get_cookie)(d+"_date"))))return p;yield(0,i.http)(a,{method:"POST",body:u},!0).then((n=>r(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,s.base64Encode)(String(n.jsonData.token));(0,c.set_cookies)(d,e,10),(0,c.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,o)}))))})),l=(e,t,o)=>r(void 0,void 0,void 0,(function*(){const r=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",a=o,l=JSON.stringify({email:e,id:t});yield(0,i.http)(r,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,s.base64Encode)(String(e.jsonData.token));(0,c.set_cookies)(a,t,10),(0,c.set_cookies_minutes)(a+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,o)=>r(void 0,void 0,void 0,(function*(){const n=(0,s.base64Encode)(String(t)),i=o;window.supersecret={unknowable:{ops:{email:e,id:n,cookieName:i}}},""==(0,c.get_cookie)(i)?yield l(e,n,o):yield a(e,n,o)}))},44672:(e,t,o)=>{o.r(t),o.d(t,{urlQueryParams:()=>n,urlQueryParamsGet:()=>i,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>c});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},i=e=>{const t=new URLSearchParams(window.location.search),o=Object.fromEntries(t.entries());let n=null;for(const t in o)t===e&&(n=o[t]);return n},s=e=>new URLSearchParams(window.location.search).getAll(e),c=e=>{let t="",o=0;for(const n in e)o+=1,t+=`${o>1?"&":""}${n}=${e[n]}`;return t}},32653:(e,t,o)=>{o.r(t),o.d(t,{AppAccordionItem:()=>r});var n=o(85862),i=o(59662),s=function(e,t,o,n){var i,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(c=(s<3?i(c):s>3?i(t,o,c):i(t,o))||c);return s>3&&c&&Object.defineProperty(t,o,c),c},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends n.LitElement{constructor(){super(),this.accordion_class_name="-",this.buttonHtml=n.html``,this.contentHtml=n.html``}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return n.html`
      <button type="button" class="app-accordion app-accordion-button app-accordion-${this.accordion_class_name}">
        <div class="flex justify-between">${this.buttonHtml} <span style="transform: rotate(180deg);">^</span></div>
      </button>
      <div class="app-accordion-panel">${this.contentHtml}</div>
    `}firstUpdated(){}createRenderRoot(){return this}};r.styles=[n.css`
   :host { display: block; }
  `],s([(0,i.property)({type:String}),c("design:type",String)],r.prototype,"accordion_class_name",void 0),s([(0,i.property)({type:String}),c("design:type",Object)],r.prototype,"buttonHtml",void 0),s([(0,i.property)({type:String}),c("design:type",Object)],r.prototype,"contentHtml",void 0),r=s([(0,i.customElement)("app-accordion-item"),c("design:paramtypes",[])],r)},86330:(e,t,o)=>{o.r(t),o.d(t,{Appaccordion:()=>a}),o(84003);var n,i=o(85862),s=o(59662),c=(o(32653),function(e,t,o,n){var i,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(c=(s<3?i(c):s>3?i(t,o,c):i(t,o))||c);return s>3&&c&&Object.defineProperty(t,o,c),c}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(),this.accordionName="app-accordion",this.contents=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return i.html`<div class="my-2 w-100">
      ${this.contents.map((e=>i.html`${e}`))}
    </div>`}firstUpdated(){setTimeout((()=>{"complete"==document.readyState&&this.toggler()}),1e3)}toggler(){var e,t=document.getElementsByClassName(`app-accordion-${this.accordionName}`);for(console.log({acc:t}),e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("app-accordion-active");var e=this.nextElementSibling;console.log({"this.classList":this.classList,panel:e}),e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}get items(){return i.html``}createRenderRoot(){return this}};a.styles=[i.css`
   :host { display: block; }
  `],c([(0,s.property)({type:String}),r("design:type",String)],a.prototype,"accordionName",void 0),c([(0,s.property)({type:Array}),r("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],a.prototype,"contents",void 0),a=c([(0,s.customElement)("app-accordion"),r("design:paramtypes",[])],a)},41260:(e,t,o)=>{o.r(t),o.d(t,{MembershipRegistrationExcelLocation:()=>f}),o(95358);var n=o(85862),i=o(59662),s=(o(33590),o(40789),o(23283),o(63313),o(75866),o(43690),o(37725),o(12761)),c=o(75458),r=o(74564),a=o(24253),l=o(9446),d=o(91729),p=o(46525),u=o(71791),h=function(e,t,o,n){var i,s=arguments.length,c=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(c=(s<3?i(c):s>3?i(t,o,c):i(t,o))||c);return s>3&&c&&Object.defineProperty(t,o,c),c},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,o,n){return new(o||(o=Promise))((function(i,s){function c(e){try{a(n.next(e))}catch(e){s(e)}}function r(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(c,r)}a((n=n.apply(e,t||[])).next())}))};let f=class extends n.LitElement{constructor(){super(),this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._countries=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={}}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getLocationCountry()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),o=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),i=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return n.html`
      <div class="form-container flex">
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
                    <select-input name="district" id="district" label="Select District" .options="${o}"
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
    `}firstUpdated(){document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e)}}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),o=this.querySelectorAll("[show_state_province]"),n="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(n)})),o.forEach((e=>{e.classList.add(n)}))):(t.forEach((e=>{e.classList.add(n)})),o.forEach((e=>{e.classList.remove(n)})))}))}))}regionChanged(e){return m(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getLocationCountry(){return m(this,void 0,void 0,(function*(){const e=yield(0,l.GET_LocationCountry)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>s.Convert.toCountryModel(JSON.stringify(e))));t=[...t,...o]}const o=[];o.push(...this._countries,...t),this._countries=o}))}getLocationRegion(){return m(this,void 0,void 0,(function*(){const e=yield(0,d.GET_LocationRegion)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>c.Convert.toLocationRegionModel(JSON.stringify(e))));t=[...t,...o]}const o=[];o.push(...this._regions,...t),this._regions=o}))}getLocationDistrict(e){return m(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),o=this._districtsMemo;if(t in o)setTimeout((()=>{const e=[];e.push(...this._districts,...o[t]),this._districts=e}),100);else{const o=yield(0,p.GET_LocationDistrictFilter)(e);let n=[{id:0,location:"Select District",regionId:null}];if(null===o)n.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===o.response.success&&"length"in o.response.data){const e=o.response.data.map((e=>a.Convert.toLocationDistrictModel(JSON.stringify(e))));n=[...n,...e],this._districtsMemo[t]=n}const i=[];i.push(...this._districts,...n),this._districts=i}}))}getLocationConstituency(e,t){return m(this,void 0,void 0,(function*(){this._constituencies=[];const o=`${e}_${t}`,n=this._constituenciesMemo;if(o in n)setTimeout((()=>{const e=[];e.push(...this._constituencies,...n[o]),this._constituencies=e}),100);else{const n=yield(0,u.GET_LocationConstituencyFilter)(e,t);let i=[{id:0,location:"Select Constituency",regionId:null}];if(null===n)i.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===n.response.success&&"length"in n.response.data){const e=n.response.data.map((e=>r.Convert.toLocationConstituencyModel(JSON.stringify(e))));i=[...i,...e],this._constituenciesMemo[o]=i}const s=[];s.push(...this._constituencies,...i),this._constituencies=s}}))}createRenderRoot(){return this}};f.styles=[n.css`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],h([(0,i.property)({type:Boolean}),y("design:type",Boolean)],f.prototype,"regionCalled",void 0),h([(0,i.property)({type:Number}),y("design:type",Number)],f.prototype,"selectedRegion",void 0),h([(0,i.property)({type:Number}),y("design:type",Number)],f.prototype,"selectedDistrict",void 0),h([(0,i.property)({type:Array}),y("design:type",Array)],f.prototype,"_countries",void 0),h([(0,i.property)({type:Array}),y("design:type",Array)],f.prototype,"_regions",void 0),h([(0,i.property)({type:Array}),y("design:type",Array)],f.prototype,"_districts",void 0),h([(0,i.property)({type:Array}),y("design:type",Array)],f.prototype,"_constituencies",void 0),h([(0,i.property)({type:Object}),y("design:type",Object)],f.prototype,"_constituenciesMemo",void 0),h([(0,i.property)({type:Object}),y("design:type",Object)],f.prototype,"_districtsMemo",void 0),f=h([(0,i.customElement)("membership-registration-excel-location"),y("design:paramtypes",[])],f)},36869:(e,t,o)=>{o.r(t),o.d(t,{PAGE__IDS:()=>n});const n={create:23}}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-3feccd.js.map