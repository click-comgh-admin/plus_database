"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-164c5b"],{95358:(e,t,o)=>{o.r(t)},69579:(e,t,o)=>{o.r(t)},45501:(e,t,o)=>{o.r(t)},14108:(e,t,o)=>{o.r(t),o.d(t,{tokenLogin:()=>d,verifyToken:()=>a});var i=o(48485),n=o(87270),s=o(67052),c=o(21942),r=function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function c(e){try{a(i.next(e))}catch(e){s(e)}}function r(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(c,r)}a((i=i.apply(e,t||[])).next())}))};const a=(e,t,o)=>r(void 0,void 0,void 0,(function*(){const a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",d=o,p=(0,c.get_cookie)(d),u=JSON.stringify({token:(0,s.base64Decode)(p)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,c.get_cookie)(d+"_date"))))return p;yield(0,n.http)(a,{method:"POST",body:u},!0).then((i=>r(void 0,void 0,void 0,(function*(){if(i.jsonData.token&i.jsonData.user&i.jsonData.expiry){const e=(0,s.base64Encode)(String(i.jsonData.token));(0,c.set_cookies)(d,e,10),(0,c.set_cookies_minutes)(d+"_date",(new Date).toUTCString(),10)}else yield l(e,t,o)}))))})),l=(e,t,o)=>r(void 0,void 0,void 0,(function*(){const r=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/login-id",a=o,l=JSON.stringify({email:e,id:t});yield(0,n.http)(r,{method:"POST",body:l},!0).then((e=>{if(e.jsonData.token){const t=(0,s.base64Encode)(String(e.jsonData.token));(0,c.set_cookies)(a,t,10),(0,c.set_cookies_minutes)(a+"_date",(new Date).toUTCString(),10)}}))})),d=(e,t,o)=>r(void 0,void 0,void 0,(function*(){const i=(0,s.base64Encode)(String(t)),n=o;window.supersecret={unknowable:{ops:{email:e,id:i,cookieName:n}}},""==(0,c.get_cookie)(n)?yield l(e,i,o):yield a(e,i,o)}))},44672:(e,t,o)=>{o.r(t),o.d(t,{urlQueryParams:()=>i,urlQueryParamsGet:()=>n,urlQueryParamsGetAll:()=>s,urlQueryParamsJoin:()=>c});const i=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),o=Object.fromEntries(t.entries());let i=null;for(const t in o)t===e&&(i=o[t]);return i},s=e=>new URLSearchParams(window.location.search).getAll(e),c=e=>{let t="",o=0;for(const i in e)o+=1,t+=`${o>1?"&":""}${i}=${e[i]}`;return t}},45371:(e,t,o)=>{o.r(t),o.d(t,{AccordionItem:()=>l});var i=o(21811),n=o(59662),s=o(99760),c=o(31661),r=function(e,t,o,i){var n,s=arguments.length,c=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(c=(s<3?n(c):s>3?n(t,o,c):n(t,o))||c);return s>3&&c&&Object.defineProperty(t,o,c),c},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.LitElement{constructor(){super(),this.title="",this.open=!1}connectedCallback(){super.connectedCallback(),setTimeout((()=>{"complete"==document.readyState&&new c.MDCRipple(this.shadowRoot.querySelector(".accordion-item-header"))}),1e3)}render(){return i.html`
      <div class="accordion-item"
        style=${(0,s.styleMap)({borderBottom:this.open?"none":"1px solid #ddd"})}>
        <div class="accordion-item-header" @click=${this.toggleAccordion}>
          <span class="accordion-item-header-title">${this.title}</span>
          <span class="accordion-item-header-icon ${this.open?"open":""}">${this.open?"-":"+"}</span>
        </div>
        ${this.open?i.html`<div class="accordion-item-content">
          <slot></slot>
        </div>`:""}
      </div>
    `}toggleAccordion(){setTimeout((()=>{this.open=!this.open}),100)}};l.styles=i.css`
    .accordion-item {
      border: 2px solid #ddd;
      border-top: none;
      padding: 8px;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      overflow: hidden;
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    }
    .accordion-item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .accordion-item-header-title {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25rem;
    }
    .accordion-item-header-icon {
      margin-right: 8px;
      transition: transform 0.2s ease-in-out;
    }
    .accordion-item-header-icon.open {
      transform: rotate(180deg);
    }
    .accordion-item-content {
      padding: 12px;
      margin-top: 10px;
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      border-width: 1px;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
  `,r([(0,n.property)({type:String}),a("design:type",Object)],l.prototype,"title",void 0),r([(0,n.property)({type:Boolean}),a("design:type",Object)],l.prototype,"open",void 0),l=r([(0,n.customElement)("accordion-item"),a("design:paramtypes",[])],l)},27933:(e,t,o)=>{o.r(t),o.d(t,{AccordionComponent:()=>n});var i=o(21811);let n=class extends i.LitElement{constructor(){super()}render(){return i.html`
      <slot></slot>
    `}updated(e){super.updated(e),this.initAccordionItems()}initAccordionItems(){this.querySelectorAll("accordion-item").forEach((e=>{e.addEventListener("click",(()=>{}))}))}toggleItem(e){e.open,this.querySelectorAll("accordion-item").forEach((e=>{e.open=!1}))}};n.styles=i.css`
    :host {
      display: block;
    }
  `,n=function(e,t,o,i){var n,s=arguments.length,c=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(c=(s<3?n(c):s>3?n(t,o,c):n(t,o))||c);return s>3&&c&&Object.defineProperty(t,o,c),c}([(0,i.customElement)("accordion-component"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],n)},41260:(e,t,o)=>{o.r(t),o.d(t,{MembershipRegistrationExcelLocation:()=>f}),o(95358);var i=o(85862),n=o(59662),s=(o(33590),o(40789),o(23283),o(63313),o(75866),o(43690),o(37725),o(12761)),c=o(75458),r=o(74564),a=o(24253),l=o(9446),d=o(91729),p=o(46525),u=o(71791),h=function(e,t,o,i){var n,s=arguments.length,c=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(c=(s<3?n(c):s>3?n(t,o,c):n(t,o))||c);return s>3&&c&&Object.defineProperty(t,o,c),c},y=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function c(e){try{a(i.next(e))}catch(e){s(e)}}function r(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(c,r)}a((i=i.apply(e,t||[])).next())}))};let f=class extends i.LitElement{constructor(){super(),this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._countries=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={}}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getLocationCountry()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),o=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),n=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return i.html`
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
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${n}"
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
    `}firstUpdated(){document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e)}}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),o=this.querySelectorAll("[show_state_province]"),i="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(i)})),o.forEach((e=>{e.classList.add(i)}))):(t.forEach((e=>{e.classList.add(i)})),o.forEach((e=>{e.classList.remove(i)})))}))}))}regionChanged(e){return m(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>m(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getLocationCountry(){return m(this,void 0,void 0,(function*(){const e=yield(0,l.GET_LocationCountry)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>s.Convert.toCountryModel(JSON.stringify(e))));t=[...t,...o]}const o=[];o.push(...this._countries,...t),this._countries=o}))}getLocationRegion(){return m(this,void 0,void 0,(function*(){const e=yield(0,d.GET_LocationRegion)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const o=e.response.data.map((e=>c.Convert.toLocationRegionModel(JSON.stringify(e))));t=[...t,...o]}const o=[];o.push(...this._regions,...t),this._regions=o}))}getLocationDistrict(e){return m(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),o=this._districtsMemo;if(t in o)setTimeout((()=>{const e=[];e.push(...this._districts,...o[t]),this._districts=e}),100);else{const o=yield(0,p.GET_LocationDistrictFilter)(e);let i=[{id:0,location:"Select District",regionId:null}];if(null===o)i.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===o.response.success&&"length"in o.response.data){const e=o.response.data.map((e=>a.Convert.toLocationDistrictModel(JSON.stringify(e))));i=[...i,...e],this._districtsMemo[t]=i}const n=[];n.push(...this._districts,...i),this._districts=n}}))}getLocationConstituency(e,t){return m(this,void 0,void 0,(function*(){this._constituencies=[];const o=`${e}_${t}`,i=this._constituenciesMemo;if(o in i)setTimeout((()=>{const e=[];e.push(...this._constituencies,...i[o]),this._constituencies=e}),100);else{const i=yield(0,u.GET_LocationConstituencyFilter)(e,t);let n=[{id:0,location:"Select Constituency",regionId:null}];if(null===i)n.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===i.response.success&&"length"in i.response.data){const e=i.response.data.map((e=>r.Convert.toLocationConstituencyModel(JSON.stringify(e))));n=[...n,...e],this._constituenciesMemo[o]=n}const s=[];s.push(...this._constituencies,...n),this._constituencies=s}}))}createRenderRoot(){return this}};f.styles=[i.css`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],h([(0,n.property)({type:Boolean}),y("design:type",Boolean)],f.prototype,"regionCalled",void 0),h([(0,n.property)({type:Number}),y("design:type",Number)],f.prototype,"selectedRegion",void 0),h([(0,n.property)({type:Number}),y("design:type",Number)],f.prototype,"selectedDistrict",void 0),h([(0,n.property)({type:Array}),y("design:type",Array)],f.prototype,"_countries",void 0),h([(0,n.property)({type:Array}),y("design:type",Array)],f.prototype,"_regions",void 0),h([(0,n.property)({type:Array}),y("design:type",Array)],f.prototype,"_districts",void 0),h([(0,n.property)({type:Array}),y("design:type",Array)],f.prototype,"_constituencies",void 0),h([(0,n.property)({type:Object}),y("design:type",Object)],f.prototype,"_constituenciesMemo",void 0),h([(0,n.property)({type:Object}),y("design:type",Object)],f.prototype,"_districtsMemo",void 0),f=h([(0,n.customElement)("membership-registration-excel-location"),y("design:paramtypes",[])],f)},36869:(e,t,o)=>{o.r(t),o.d(t,{PAGE__IDS:()=>i});const i={create:23}}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_setup_form_scss-src_assets_styles_views_widget_simple-tabl-164c5b.js.map