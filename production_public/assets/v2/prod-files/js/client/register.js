"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[61],{1981:(e,t,i)=>{i.d(t,{R:()=>n});const n=(e,t)=>!0===navigator.onLine?e("online"):t("offline")},6651:(e,t,i)=>{i.d(t,{m:()=>s}),i(934);let n=[];const o="Show Password",s=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const i=e.parentElement;i.setAttribute("style",i.getAttribute("style")+"; flex-direction: column !important;");const s=document.createElement("label");s.setAttribute("style",s.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const c=document.createElement("span");c.setAttribute("style",c.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),c.innerText=o;const r=document.createElement("span");c.setAttribute("style",c.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const a=document.createElement("input");a.type="checkbox",a.id="pswd-visibility-btn--"+t,a.setAttribute("style",a.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),s.appendChild(r),s.appendChild(a),s.appendChild(c),e.after(s);const d={id:a.id,showing:!1,elem:e,span:c};n.includes(d)||n.push(d),a.addEventListener("change",l)}))},l=e=>{e.preventDefault();const t=e.currentTarget;t.checked,n.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=o,e.showing=!1))}))}},2004:(e,t,i)=>{i.d(t,{hk:()=>r,U8:()=>c,eF:()=>l});var n=i(7052),o=i(1942);const s="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,o.Ad)(s,"",-1),(0,o.Ad)(s,(0,n.h)(t),3500)};function c(){(0,o.Ad)(s,"",-1)}const r=()=>{if(""===(0,o.Hl)(s))return null;{const t=(0,n.t)((0,o.Hl)(s));return e=JSON.parse(t),{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}var e}},2869:(e,t,i)=>{function n(e){return{id:Number(e.id),name:e.name}}i.d(t,{y:()=>n})},7553:(e,t,i)=>{i.d(t,{q:()=>c});var n=i(771),o=i(7270),s=i(596),l=i(3600);function c(e=null){return t=this,i=void 0,r=function*(){const t=(0,l.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),c=yield(0,o.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,n){function o(e){try{l(r.next(e))}catch(e){n(e)}}function s(e){try{l(r.throw(e))}catch(e){n(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(o,s)}l((r=r.apply(t,i||[])).next())}));var t,i,c,r}},3690:(e,t,i)=>{var n=i(9392),o=i(1936),s=(i(5185),i(5142),function(e,t,i,n){var o,s=arguments.length,l=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(l=(s<3?o(l):s>3?o(t,i,l):o(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};c.styles=[n.iv`
      :host {
        display: block;
      }
    `],s([(0,o.Cb)({type:String}),l("design:type",String)],c.prototype,"name",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],c.prototype,"label",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],c.prototype,"selected",void 0),s([(0,o.Cb)({type:String}),l("design:type",String)],c.prototype,"value",void 0),s([(0,o.Cb)({type:Boolean}),l("design:type",Boolean)],c.prototype,"isSelected",void 0),c=s([(0,o.Mo)("switch-input")],c)},4037:(e,t,i)=>{i.r(t),i.d(t,{PdbRegisterForm:()=>B});var n=i(6651),o=i(596),s=i(771),l=i(7270),c=i(8967),r=i(1981),a=i(3600),d=i(1566),u=i(2004),m=i(6455),h=i.n(m),p=function(e,t,i,n){return new(i||(i=Promise))((function(o,s){function l(e){try{r(n.next(e))}catch(e){s(e)}}function c(e){try{r(n.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,c)}r((n=n.apply(e,t||[])).next())}))},f=i(9392),y=i(1936),g=(i(1239),i(9261),i(5248),i(3313),i(5866),i(3690),i(7725),i(2869)),b=i(7553);class v{static toClientSubscriptionMembershipSizeModel(e){return S(JSON.parse(e),A("ClientSubscriptionMembershipSizeModel"),w)}static clientSubscriptionMembershipSizeModelToJson(e){return JSON.stringify(S(e,A("ClientSubscriptionMembershipSizeModel"),_),null,2)}}function w(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function _(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function S(e,t,i,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=x[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return S(t,n,i)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>S(t,e,i)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],l=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[s.key]=S(l,s.typ,i,s.key)})),Object.getOwnPropertyNames(n).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(o[s]=S(n[s],t,i,s))})),o}(i(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function C(...e){return{unionMembers:e}}function A(e){return{ref:e}}const x={ClientSubscriptionMembershipSizeModel:(L=[{json:"id",js:"id",typ:C(null,0)},{json:"info",js:"info",typ:C(null,"")},{json:"cost",js:"cost",typ:C(null,"")},{json:"type",js:"type",typ:C(null,0)},{json:"client",js:"client",typ:C(null,0)},{json:"accountType",js:"accountType",typ:C(null,0)}],!1,{props:L,additional:false})};var L,E=i(2761),O=i(8278),N=i(4564),j=i(4253),k=i(9446),R=i(1729),q=i(6525),$=i(1791),M=i(5102),P=function(e,t,i,n){var o,s=arguments.length,l=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(l=(s<3?o(l):s>3?o(t,i,l):o(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l},T=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},z=function(e,t,i,n){return new(i||(i=Promise))((function(o,s){function l(e){try{r(n.next(e))}catch(e){s(e)}}function c(e){try{r(n.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,c)}r((n=n.apply(e,t||[])).next())}))};let B=class extends f.oi{constructor(){super(),this.showLeadersForm=!1,this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._genders=[],this._countries=[],this._accountCategories=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={},this._membershipSizes=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return z(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getGenders(),yield this.getLocationCountry(),yield this.getClientAccountCategory(),yield this.getClientSubscriptionMembershipSize()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),i=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),n=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return f.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Client Account</h1>
                  <h3 class="h3">Create New Client Account!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-register" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Organization Name</h4>
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="" label="Enter Organization Name" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Account Category</h4>
                    <mwc-select name="accountCategory" id="accountCategory" label="Select Account Category" outlined required>
                      ${this._accountCategories.map((e=>f.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_other_account_category>
                    <h4 class="font-semibold my-2">Enter Other Account Category</h4>
                    <mwc-textfield name="accountCategoryOther" type="text" class="w-full" id="accountCategoryOther" value="" label="Enter Other Account Category" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Membership Size</h4>
                    <mwc-select name="membership_size" id="membership_size" label="Select Membership Size" outlined required>
                      ${this._membershipSizes.map((e=>f.dy`<mwc-list-item value="${e.id}">${e.info}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Add Organization Logo <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="logo" name="logo" label="Add Organization Logo" ></file-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Organization Website <span class="text-yellow-600">(Optional)</span></h4>
                    <mwc-textfield name="website" type="url" class="w-full" id="website" value="" label="Enter Organization Website (Optional)" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Country</h4>
                    <!--<mwc-select name="country" id="country" label="Select Country" outlined required>
                      ${this._countries.map((e=>f.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                    </mwc-select> -->
                    <select-input name="country" id="country" label="Select Country" .options="${e}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_state_province>
                    <h4 class="font-semibold my-2">Enter State/ Province</h4>
                    <mwc-textfield name="stateProvince" type="text" class="w-full" id="stateProvince" value="" label="Enter State/ Province" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Region</h4>
                    <select-input name="region" id="region" label="Select Region" .options="${t}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select District</h4>
                    <select-input name="district" id="district" label="Select District" .options="${i}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Constituency</h4>
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${n}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Enter Community</h4>
                    <mwc-textfield name="community" type="text" class="w-full" id="community" value="" label="Enter Community" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Applicant Info")}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Applicant Firstname</h4>
                    <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" value="" label="Enter Applicant Firstname" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Applicant Surname</h4>
                    <mwc-textfield name="surname" type="text" class="w-full" id="surname" value="" label="Enter Applicant Surname" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Gender</h4>
                    <mwc-select name="gender" id="gender" label="Select Gender" outlined required>
                      ${this._genders.map((e=>f.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter E-mail Address</h4>
                    <mwc-textfield name="email" type="email" class="w-full" id="email" value="" label="Enter E-mail Address" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Phone Number</h4>
                    <mwc-textfield name="phone" type="tel" class="w-full" id="phone" value="" label="Enter Phone Number" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Leaders")}
                    <h4 class="font-semibold my-2">Add Leaders?</h4> 
                    <switch-input name="addLeaders" class="w-full" id="addLeaders" ?isSelected="${this.showLeadersForm}" label="Add Leaders?" outlined>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 Full Name</h4>
                    <mwc-textfield name="leader_1_name" id="leader_1_name" label="Leader 1 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 Contact</h4>
                    <mwc-textfield name="leader_1_contact" id="leader_1_contact" label="Leader 1 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 E-mail</h4>
                    <mwc-textfield name="leader_1_email" id="leader_1_email" label="Leader 1 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 Full Name</h4>
                    <mwc-textfield name="leader_2_name" id="leader_2_name" label="Leader 2 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 Contact</h4>
                    <mwc-textfield name="leader_2_contact" id="leader_2_contact" label="Leader 2 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 E-mail</h4>
                    <mwc-textfield name="leader_2_email" id="leader_2_email" label="Leader 2 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                    <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 Full Name</h4>
                    <mwc-textfield name="leader_3_name" id="leader_3_name" label="Leader 3 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 Contact</h4>
                    <mwc-textfield name="leader_3_contact" id="leader_3_contact" label="Leader 3 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 E-mail</h4>
                    <mwc-textfield name="leader_3_email" id="leader_3_email" label="Leader 3 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Set Password")}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Password</h4>
                    <mwc-textfield name="password" id="password" label="Enter Password" icon="lock" outlined type="password" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Confirm Password</h4>
                    <mwc-textfield name="confirm_password" id="confirm_password" label="Confirm Password" icon="lock" outlined type="password" required>
                    </mwc-textfield>
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Register" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
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
    `}sectionSeparater(e){return f.dy`
      <div class="col-md-12 col-lg-12 mt-6 mb-0">
        <div class="flex form-input-container items-center text-center">
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
          <label class="block font-bold text-sm text-gray-600 w-full my-0">
            ${e}
          </label>
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
        </div>
      </div>
    `}addLeadersAction(){const e=this;document.querySelectorAll('[name="addLeaders"]').forEach((t=>{t.addEventListener("click",(i=>{e.showLeadersForm=t.isSelected;const n=this.querySelectorAll("[show_leaders]"),o="hidden";e.showLeadersForm?n.forEach((e=>{e.classList.remove(o)})):n.forEach((e=>{e.classList.add(o)}))}))}))}firstUpdated(){(0,n.m)(),(0,n.m)("mwc-textfield"),document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e),"complete"==document.readyState&&this.accountCategoryChanged(e)},this.addLeadersAction()}accountCategoryChanged(e){document.querySelectorAll('mwc-select[name="accountCategory"]').forEach((e=>{e.onchange=t=>z(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_other_account_category]"),i="hidden";"-1000"===e.value?t.forEach((e=>{e.classList.remove(i)})):t.forEach((e=>{e.classList.add(i)}))}))}))}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>z(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),i=this.querySelectorAll("[show_state_province]"),n="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(n)})),i.forEach((e=>{e.classList.add(n)}))):(t.forEach((e=>{e.classList.add(n)})),i.forEach((e=>{e.classList.remove(n)})))}))}))}regionChanged(e){return z(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>z(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>z(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getGenders(){return z(this,void 0,void 0,(function*(){const e=yield(0,b.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,g.y)(e))));const i=[];i.push(...this._genders,...t),this._genders=i}))}getClientSubscriptionMembershipSize(){return z(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return i=this,n=void 0,r=function*(){const i=s.t.URLS.AKWAABA_API_BASE_URL+"clients/subscription/membership-size"+(null===e?"":"/"+e)+t,n=yield(0,l.d)(i,{method:"GET",headers:{}},!0);try{return new o.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new o.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function o(e){try{l(r.next(e))}catch(e){t(e)}}function s(e){try{l(r.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof c?i:new c((function(e){e(i)}))).then(o,s)}l((r=r.apply(i,n||[])).next())}));var i,n,c,r}(null,"?client=0");let t=[];null===e?t.push({id:0,info:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>v.toClientSubscriptionMembershipSizeModel(JSON.stringify(e)))));const i=[];i.push(...this._membershipSizes,...t),this._membershipSizes=i}))}getLocationCountry(){return z(this,void 0,void 0,(function*(){const e=yield(0,k.B)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>E.e.toCountryModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._countries,...t),this._countries=i}))}getClientAccountCategory(){return z(this,void 0,void 0,(function*(){const e=yield function(e=null,t="",i=!1){return n=this,c=void 0,d=function*(){const n=i?null:(0,a.Ie)(),c=s.t.URLS.AKWAABA_API_BASE_URL+"clients/account-category"+(null===e?"":"/"+e)+t,r=yield(0,l.d)(c,{method:"GET",headers:i?{}:{Authorization:"Token "+n.token}},!0);try{return new o.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{s(d.next(e))}catch(e){t(e)}}function o(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,o)}s((d=d.apply(n,c||[])).next())}));var n,c,r,d}();let t=[{category:"Select Account Type"}];if(null===e)t.push({id:0,category:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>M.e.toClientAccountCategoryModel(JSON.stringify(e))));i.push({category:"Other",id:-1e3}),t=[...t,...i]}const i=[];i.push(...this._accountCategories,...t),this._accountCategories=i}))}getLocationRegion(){return z(this,void 0,void 0,(function*(){const e=yield(0,R.d)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>O.e.toLocationRegionModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._regions,...t),this._regions=i}))}getLocationDistrict(e){return z(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),i=this._districtsMemo;if(t in i)setTimeout((()=>{const e=[];e.push(...this._districts,...i[t]),this._districts=e}),100);else{const i=yield(0,q.o)(e);let n=[{id:0,location:"Select District",regionId:null}];if(null===i)n.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===i.response.success&&"length"in i.response.data){const e=i.response.data.map((e=>j.e.toLocationDistrictModel(JSON.stringify(e))));n=[...n,...e],this._districtsMemo[t]=n}const o=[];o.push(...this._districts,...n),this._districts=o}}))}getLocationConstituency(e,t){return z(this,void 0,void 0,(function*(){this._constituencies=[];const i=`${e}_${t}`,n=this._constituenciesMemo;if(i in n)setTimeout((()=>{const e=[];e.push(...this._constituencies,...n[i]),this._constituencies=e}),100);else{const n=yield(0,$.S)(e,t);let o=[{id:0,location:"Select Constituency",regionId:null}];if(null===n)o.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===n.response.success&&"length"in n.response.data){const e=n.response.data.map((e=>N.e.toLocationConstituencyModel(JSON.stringify(e))));o=[...o,...e],this._constituenciesMemo[i]=o}const s=[];s.push(...this._constituencies,...o),this._constituencies=s}}))}submitForm(e){return z(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return p(this,void 0,void 0,(function*(){const e=s.t.URLS.AKWAABA_API_BASE_URL+"clients/register",t=document.querySelector('[make-general-posts="client-register"]'),i=new FormData(t);(0,r.R)((n=>h().fire({title:"Create Client Account?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>p(this,void 0,void 0,(function*(){return yield(0,l.d)(e,{method:"POST",body:i},!1).then((e=>{const i=new o.H("post",e,!1,t),n=i.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((i=>{let n={error:t.id+": "+i};"non_field_errors"===t.id&&(n={error:i}),e.push(n)}))}));const t=(0,c.T)(e);h().showValidationMessage(`${t}`)}return i})).catch((e=>{h().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!h().isLoading()}).then((e=>{if(e.isConfirmed){let t,i="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;i="Registration Successful",t=e.data,n=o.response.success}n&&h().fire({title:i,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{const e=(0,d.Y)(t);(0,a.bK)(e),(0,u.U8)(),window.location.href=s.t.URLS.LOGIN_PAGE_BASE_URL}),500)}}))),(e=>{h().fire({title:"Looks like you're offline",text:"Try again later!",icon:"info",iconColor:"#f97817",confirmButtonColor:"#f97817"})}))}))}()}))}createRenderRoot(){return this}};B.styles=[f.iv`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],P([(0,y.Cb)({type:Boolean}),T("design:type",Boolean)],B.prototype,"showLeadersForm",void 0),P([(0,y.Cb)({type:Boolean}),T("design:type",Boolean)],B.prototype,"regionCalled",void 0),P([(0,y.Cb)({type:Number}),T("design:type",Number)],B.prototype,"selectedRegion",void 0),P([(0,y.Cb)({type:Number}),T("design:type",Number)],B.prototype,"selectedDistrict",void 0),P([(0,y.Cb)({type:Array}),T("design:type",Array)],B.prototype,"_genders",void 0),P([(0,y.Cb)({type:Array}),T("design:type",Array)],B.prototype,"_countries",void 0),P([(0,y.Cb)({type:Array}),T("design:type",Array)],B.prototype,"_accountCategories",void 0),P([(0,y.Cb)({type:Array}),T("design:type",Array)],B.prototype,"_regions",void 0),P([(0,y.Cb)({type:Array}),T("design:type",Array)],B.prototype,"_districts",void 0),P([(0,y.Cb)({type:Array}),T("design:type",Array)],B.prototype,"_constituencies",void 0),P([(0,y.Cb)({type:Object}),T("design:type",Object)],B.prototype,"_constituenciesMemo",void 0),P([(0,y.Cb)({type:Object}),T("design:type",Object)],B.prototype,"_districtsMemo",void 0),P([(0,y.Cb)({type:Array}),T("design:type",Array)],B.prototype,"_membershipSizes",void 0),B=P([(0,y.Mo)("pdb-register-form"),T("design:paramtypes",[])],B)}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6258,2924,6084,3712],(()=>(4037,e(e.s=4037)))),e.O())])));
//# sourceMappingURL=register.js.map