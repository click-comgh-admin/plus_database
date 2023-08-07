"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[61],{8967:(e,t,i)=>{i.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let i=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{i+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},1981:(e,t,i)=>{i.d(t,{R:()=>o});const o=(e,t)=>!0===navigator.onLine?e("online"):t("offline")},6651:(e,t,i)=>{i.d(t,{m:()=>s}),i(934);let o=[];const n="Show Password",s=(e="input")=>{document.querySelectorAll(e+'[type="password"]').forEach(((e,t)=>{const i=e.parentElement;i.setAttribute("style",i.getAttribute("style")+"; flex-direction: column !important;");const s=document.createElement("label");s.setAttribute("style",s.getAttribute("style")+"; display: inline-flex;width: 100%; cursor: pointer; align-items: center; margin-top: 10px; margin-bottom: 0;");const r=document.createElement("span");r.setAttribute("style",r.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);"),r.innerText=n;const c=document.createElement("span");r.setAttribute("style",r.getAttribute("style")+"; margin-left: 0.5rem;font-size: 0.875rem; line-height: 1.25rem; color: rgb(75 85 99);");const a=document.createElement("input");a.type="checkbox",a.id="pswd-visibility-btn--"+t,a.setAttribute("style",a.getAttribute("style")+"; -moz-appearance: auto !important;-webkit-appearance: auto !important; -ms-appearance: auto !important; appearance: auto !important;opacity: 1; margin-right: 0; z-index: 10;"),s.appendChild(c),s.appendChild(a),s.appendChild(r),e.after(s);const d={id:a.id,showing:!1,elem:e,span:r};o.includes(d)||o.push(d),a.addEventListener("change",l)}))},l=e=>{e.preventDefault();const t=e.currentTarget;t.checked,o.forEach((e=>{t.id===e.id&&(!1===e.showing?(e.elem.type="text",e.span.innerText="Hide Password",e.showing=!0):(e.elem.type="password",e.span.innerText=n,e.showing=!1))}))}},2004:(e,t,i)=>{i.d(t,{hk:()=>c,U8:()=>r,eF:()=>l});var o=i(7052),n=i(1942);const s="pdb-active-branch",l=e=>{const t=JSON.stringify(e);(0,n.Ad)(s,"",-1),(0,n.Ad)(s,(0,o.h)(t),3500)};function r(){(0,n.Ad)(s,"",-1)}const c=()=>{if(""===(0,n.Hl)(s))return null;{const t=(0,o.t)((0,n.Hl)(s));return e=JSON.parse(t),{id:Number(e.id),name:String(e.name),accountId:Number(e.accountId)}}var e}},2869:(e,t,i)=>{function o(e){return{id:Number(e.id),name:e.name}}i.d(t,{y:()=>o})},7553:(e,t,i)=>{i.d(t,{q:()=>r});var o=i(771),n=i(7270),s=i(596),l=i(3600);function r(e=null){return t=this,i=void 0,c=function*(){const t=(0,l.Ie)(),i=o.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),r=yield(0,n.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new s.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,o){function n(e){try{l(c.next(e))}catch(e){o(e)}}function s(e){try{l(c.throw(e))}catch(e){o(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(n,s)}l((c=c.apply(t,i||[])).next())}));var t,i,r,c}},7725:(e,t,i)=>{var o=i(5862),n=i(8393),s=(i(5185),i(5248),function(e,t,i,o){var n,s=arguments.length,l=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(s<3?n(l):s>3?n(t,i,l):n(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[o.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?o.dy`
          <div class="form-input border">
            ${this.hasLabel?o.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:o.dy`
          <div class="form-input border">
            ${this.hasLabel?o.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:o.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?o.dy`
          <div class="form-input border">
            ${this.hasLabel?o.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:o.dy`
          <div class="form-input border">
            ${this.hasLabel?o.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:o.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,n.Cb)({type:String}),l("design:type",String)],r.prototype,"name",void 0),s([(0,n.Cb)({type:String}),l("design:type",String)],r.prototype,"label",void 0),s([(0,n.Cb)({type:String}),l("design:type",String)],r.prototype,"value",void 0),s([(0,n.Cb)({type:String}),l("design:type",String)],r.prototype,"accept",void 0),s([(0,n.Cb)({type:Number}),l("design:type",Number)],r.prototype,"randomID",void 0),s([(0,n.Cb)({type:String}),l("design:type",String)],r.prototype,"id",void 0),s([(0,n.Cb)({type:Boolean}),l("design:type",Boolean)],r.prototype,"required",void 0),s([(0,n.Cb)({type:Boolean}),l("design:type",Boolean)],r.prototype,"hasLabel",void 0),s([(0,n.Cb)({type:Boolean}),l("design:type",Boolean)],r.prototype,"multiple",void 0),s([(0,n.Cb)({type:Number}),l("design:type",Number)],r.prototype,"startNumber",void 0),s([(0,n.Cb)({type:Number}),l("design:type",Number)],r.prototype,"rowsPerPage",void 0),s([(0,n.Cb)({type:Number}),l("design:type",Number)],r.prototype,"totalShowing",void 0),s([(0,n.Cb)({type:Boolean}),l("design:type",Boolean)],r.prototype,"showSelectorLoaded",void 0),r=s([(0,n.Mo)("file-input")],r)},3690:(e,t,i)=>{var o=i(5862),n=i(8393),s=(i(5185),i(5142),function(e,t,i,o){var n,s=arguments.length,l=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(s<3?n(l):s>3?n(t,i,l):n(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return o.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?o.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:o.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};r.styles=[o.iv`
      :host {
        display: block;
      }
    `],s([(0,n.Cb)({type:String}),l("design:type",String)],r.prototype,"name",void 0),s([(0,n.Cb)({type:String}),l("design:type",String)],r.prototype,"label",void 0),s([(0,n.Cb)({type:Boolean}),l("design:type",Boolean)],r.prototype,"selected",void 0),s([(0,n.Cb)({type:String}),l("design:type",String)],r.prototype,"value",void 0),s([(0,n.Cb)({type:Boolean}),l("design:type",Boolean)],r.prototype,"isSelected",void 0),r=s([(0,n.Mo)("switch-input")],r)},4037:(e,t,i)=>{i.r(t),i.d(t,{PdbRegisterForm:()=>z});var o=i(6651),n=i(596),s=i(771),l=i(7270),r=i(8967),c=i(1981),a=i(3600),d=i(1566),u=i(2004),m=i(6455),p=i.n(m),h=function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function l(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,r)}c((o=o.apply(e,t||[])).next())}))},y=i(5862),f=i(8393),g=(i(1239),i(9261),i(5248),i(3313),i(5866),i(3690),i(7725),i(2869)),b=i(7553);class v{static toClientSubscriptionMembershipSizeModel(e){return _(JSON.parse(e),x("ClientSubscriptionMembershipSizeModel"),w)}static clientSubscriptionMembershipSizeModelToJson(e){return JSON.stringify(_(e,x("ClientSubscriptionMembershipSizeModel"),S),null,2)}}function w(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function S(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function _(e,t,i,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=A[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let n=0;n<o;n++){const o=e[n];try{return _(t,o,i)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>_(t,e,i)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const n={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],l=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;n[s.key]=_(l,s.typ,i,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(n[s]=_(o[s],t,i,s))})),n}(i(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function C(...e){return{unionMembers:e}}function x(e){return{ref:e}}const A={ClientSubscriptionMembershipSizeModel:(L=[{json:"id",js:"id",typ:C(null,0)},{json:"info",js:"info",typ:C(null,"")},{json:"cost",js:"cost",typ:C(null,"")},{json:"type",js:"type",typ:C(null,0)},{json:"client",js:"client",typ:C(null,0)},{json:"accountType",js:"accountType",typ:C(null,0)}],!1,{props:L,additional:false})};var L,N=i(2761),O=i(8278),E=i(4564),$=i(4253),j=i(9446),R=i(1729),k=i(6525),q=i(1791),P=i(5102),M=function(e,t,i,o){var n,s=arguments.length,l=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(s<3?n(l):s>3?n(t,i,l):n(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e,t,i,o){return new(i||(i=Promise))((function(n,s){function l(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,r)}c((o=o.apply(e,t||[])).next())}))};let z=class extends y.oi{constructor(){super(),this.showLeadersForm=!1,this.regionCalled=!1,this.selectedRegion=0,this.selectedDistrict=0,this._genders=[],this._countries=[],this._accountCategories=[],this._regions=[],this._districts=[],this._constituencies=[],this._constituenciesMemo={},this._districtsMemo={},this._membershipSizes=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return T(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getGenders(),yield this.getLocationCountry(),yield this.getClientAccountCategory(),yield this.getClientSubscriptionMembershipSize()}))}disconnectedCallback(){}render(){const e=this._countries.map((e=>({id:e.id,name:e.name,isSelected:"false",selected:!1}))),t=this._regions.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),i=this._districts.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1}))),o=this._constituencies.map((e=>({id:e.id,name:e.location,isSelected:"false",selected:!1})));return y.dy`
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
                      ${this._accountCategories.map((e=>y.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
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
                      ${this._membershipSizes.map((e=>y.dy`<mwc-list-item value="${e.id}">${e.info}</mwc-list-item>`))}
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
                      ${this._countries.map((e=>y.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
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
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${o}"
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
                      ${this._genders.map((e=>y.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
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
    `}sectionSeparater(e){return y.dy`
      <div class="col-md-12 col-lg-12 mt-6 mb-0">
        <div class="flex form-input-container items-center text-center">
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
          <label class="block font-bold text-sm text-gray-600 w-full my-0">
            ${e}
          </label>
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
        </div>
      </div>
    `}addLeadersAction(){const e=this;document.querySelectorAll('[name="addLeaders"]').forEach((t=>{t.addEventListener("click",(i=>{e.showLeadersForm=t.isSelected;const o=this.querySelectorAll("[show_leaders]"),n="hidden";e.showLeadersForm?o.forEach((e=>{e.classList.remove(n)})):o.forEach((e=>{e.classList.add(n)}))}))}))}firstUpdated(){(0,o.m)(),(0,o.m)("mwc-textfield"),document.onreadystatechange=e=>{"complete"==document.readyState&&this.countryChanged(e),"complete"==document.readyState&&this.regionChanged(e),"complete"==document.readyState&&this.districtChanged(e),"complete"==document.readyState&&this.constituencyChanged(e),"complete"==document.readyState&&this.accountCategoryChanged(e)},this.addLeadersAction()}accountCategoryChanged(e){document.querySelectorAll('mwc-select[name="accountCategory"]').forEach((e=>{e.onchange=t=>T(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_other_account_category]"),i="hidden";"-1000"===e.value?t.forEach((e=>{e.classList.remove(i)})):t.forEach((e=>{e.classList.add(i)}))}))}))}countryChanged(e){document.querySelectorAll('select[name="country"]').forEach((e=>{e.onchange=t=>T(this,void 0,void 0,(function*(){const t=this.querySelectorAll("[show_ghana_locations]"),i=this.querySelectorAll("[show_state_province]"),o="hidden";"76"===e.value?(!1===this.regionCalled&&(yield this.getLocationRegion()),this.regionCalled=!0,t.forEach((e=>{e.classList.remove(o)})),i.forEach((e=>{e.classList.add(o)}))):(t.forEach((e=>{e.classList.add(o)})),i.forEach((e=>{e.classList.remove(o)})))}))}))}regionChanged(e){return T(this,void 0,void 0,(function*(){document.querySelectorAll('select[name="region"]').forEach((e=>{e.onchange=t=>T(this,void 0,void 0,(function*(){const t=e.value;this.selectedRegion=Number.isNaN(t)?0:Number(t),this.getLocationDistrict(this.selectedRegion)}))}))}))}districtChanged(e){document.querySelectorAll('select[name="district"]').forEach((e=>{e.onchange=t=>T(this,void 0,void 0,(function*(){const t=e.value;this.selectedDistrict=Number.isNaN(t)?0:Number(t),this.getLocationConstituency(this.selectedRegion,this.selectedDistrict)}))}))}constituencyChanged(e){}getGenders(){return T(this,void 0,void 0,(function*(){const e=yield(0,b.q)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,g.y)(e))));const i=[];i.push(...this._genders,...t),this._genders=i}))}getClientSubscriptionMembershipSize(){return T(this,void 0,void 0,(function*(){const e=yield function(e=null,t=""){return i=this,o=void 0,c=function*(){const i=s.t.URLS.AKWAABA_API_BASE_URL+"clients/subscription/membership-size"+(null===e?"":"/"+e)+t,o=yield(0,l.d)(i,{method:"GET",headers:{}},!0);try{return new n.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new n.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function n(e){try{l(c.next(e))}catch(e){t(e)}}function s(e){try{l(c.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(n,s)}l((c=c.apply(i,o||[])).next())}));var i,o,r,c}(null,"?client=0");let t=[];null===e?t.push({id:0,info:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>v.toClientSubscriptionMembershipSizeModel(JSON.stringify(e)))));const i=[];i.push(...this._membershipSizes,...t),this._membershipSizes=i}))}getLocationCountry(){return T(this,void 0,void 0,(function*(){const e=yield(0,j.B)(null,"?client=0");let t=[{code:"-000",id:0,name:"Select Country",short:"S-C"}];if(null===e)t.push({id:0,name:"**NOT FOUND**",code:"??",short:"N/A"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>N.e.toCountryModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._countries,...t),this._countries=i}))}getClientAccountCategory(){return T(this,void 0,void 0,(function*(){const e=yield function(e=null,t="",i=!1){return o=this,r=void 0,d=function*(){const o=i?null:(0,a.Ie)(),r=s.t.URLS.AKWAABA_API_BASE_URL+"clients/account-category"+(null===e?"":"/"+e)+t,c=yield(0,l.d)(r,{method:"GET",headers:i?{}:{Authorization:"Token "+o.token}},!0);try{return new n.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new n.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function i(e){try{s(d.next(e))}catch(e){t(e)}}function n(e){try{s(d.throw(e))}catch(e){t(e)}}function s(t){var o;t.done?e(t.value):(o=t.value,o instanceof c?o:new c((function(e){e(o)}))).then(i,n)}s((d=d.apply(o,r||[])).next())}));var o,r,c,d}();let t=[{category:"Select Account Type"}];if(null===e)t.push({id:0,category:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>P.e.toClientAccountCategoryModel(JSON.stringify(e))));i.push({category:"Other",id:-1e3}),t=[...t,...i]}const i=[];i.push(...this._accountCategories,...t),this._accountCategories=i}))}getLocationRegion(){return T(this,void 0,void 0,(function*(){const e=yield(0,R.d)(null,"?client=0");let t=[{id:0,location:"Select Region"}];if(null===e)t.push({id:0,location:"**NOT FOUND**"});else if(!0===e.response.success&&"length"in e.response.data){const i=e.response.data.map((e=>O.e.toLocationRegionModel(JSON.stringify(e))));t=[...t,...i]}const i=[];i.push(...this._regions,...t),this._regions=i}))}getLocationDistrict(e){return T(this,void 0,void 0,(function*(){this._districts=[];const t=String(e),i=this._districtsMemo;if(t in i)setTimeout((()=>{const e=[];e.push(...this._districts,...i[t]),this._districts=e}),100);else{const i=yield(0,k.o)(e);let o=[{id:0,location:"Select District",regionId:null}];if(null===i)o.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===i.response.success&&"length"in i.response.data){const e=i.response.data.map((e=>$.e.toLocationDistrictModel(JSON.stringify(e))));o=[...o,...e],this._districtsMemo[t]=o}const n=[];n.push(...this._districts,...o),this._districts=n}}))}getLocationConstituency(e,t){return T(this,void 0,void 0,(function*(){this._constituencies=[];const i=`${e}_${t}`,o=this._constituenciesMemo;if(i in o)setTimeout((()=>{const e=[];e.push(...this._constituencies,...o[i]),this._constituencies=e}),100);else{const o=yield(0,q.S)(e,t);let n=[{id:0,location:"Select Constituency",regionId:null}];if(null===o)n.push({id:0,location:"**NOT FOUND**",regionId:null});else if(!0===o.response.success&&"length"in o.response.data){const e=o.response.data.map((e=>E.e.toLocationConstituencyModel(JSON.stringify(e))));n=[...n,...e],this._constituenciesMemo[i]=n}const s=[];s.push(...this._constituencies,...n),this._constituencies=s}}))}submitForm(e){return T(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return h(this,void 0,void 0,(function*(){const e=s.t.URLS.AKWAABA_API_BASE_URL+"clients/register",t=document.querySelector('[make-general-posts="client-register"]'),i=new FormData(t);(0,c.R)((o=>p().fire({title:"Create Client Account?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>h(this,void 0,void 0,(function*(){return yield(0,l.d)(e,{method:"POST",body:i},!1).then((e=>{const i=new n.H("post",e,!1,t),o=i.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((i=>{let o={error:t.id+": "+i};"non_field_errors"===t.id&&(o={error:i}),e.push(o)}))}));const t=(0,r.T)(e);p().showValidationMessage(`${t}`)}return i})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t,i="Success",o=!1;const n=e.value;if(n instanceof Object){const e=n.response;i="Registration Successful",t=e.data,o=n.response.success}o&&p().fire({title:i,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o&&setTimeout((()=>{const e=(0,d.Y)(t);(0,a.bK)(e),(0,u.U8)(),window.location.href=s.t.URLS.LOGIN_PAGE_BASE_URL}),500)}}))),(e=>{p().fire({title:"Looks like you're offline",text:"Try again later!",icon:"info",iconColor:"#f97817",confirmButtonColor:"#f97817"})}))}))}()}))}createRenderRoot(){return this}};z.styles=[y.iv`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `],M([(0,f.Cb)({type:Boolean}),B("design:type",Boolean)],z.prototype,"showLeadersForm",void 0),M([(0,f.Cb)({type:Boolean}),B("design:type",Boolean)],z.prototype,"regionCalled",void 0),M([(0,f.Cb)({type:Number}),B("design:type",Number)],z.prototype,"selectedRegion",void 0),M([(0,f.Cb)({type:Number}),B("design:type",Number)],z.prototype,"selectedDistrict",void 0),M([(0,f.Cb)({type:Array}),B("design:type",Array)],z.prototype,"_genders",void 0),M([(0,f.Cb)({type:Array}),B("design:type",Array)],z.prototype,"_countries",void 0),M([(0,f.Cb)({type:Array}),B("design:type",Array)],z.prototype,"_accountCategories",void 0),M([(0,f.Cb)({type:Array}),B("design:type",Array)],z.prototype,"_regions",void 0),M([(0,f.Cb)({type:Array}),B("design:type",Array)],z.prototype,"_districts",void 0),M([(0,f.Cb)({type:Array}),B("design:type",Array)],z.prototype,"_constituencies",void 0),M([(0,f.Cb)({type:Object}),B("design:type",Object)],z.prototype,"_constituenciesMemo",void 0),M([(0,f.Cb)({type:Object}),B("design:type",Object)],z.prototype,"_districtsMemo",void 0),M([(0,f.Cb)({type:Array}),B("design:type",Array)],z.prototype,"_membershipSizes",void 0),z=M([(0,f.Mo)("pdb-register-form"),B("design:paramtypes",[])],z)}},e=>(e.O(0,[2185,5744,9674,8820,1828,7154,1080,5291,6258,2743,6084,3712],(()=>(4037,e(e.s=4037)))),e.O())])));
//# sourceMappingURL=register.js.map