"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_membership_members_select-member-type_index_ts"],{26660:(e,t,i)=>{i.r(t)},90072:(e,t,i)=>{i.r(t),i.d(t,{GET_MemberGroupingsMemberCategories:()=>n});var s=i(48485),l=i(87270),r=i(14492),a=i(33600);function n(e=null){return t=this,i=void 0,o=function*(){const t=(0,a.getUserLoginInfoCookie)(),i=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),n=yield(0,l.http)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.NetWorkCallResponses("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new r.NetWorkCallResponses("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,s){function l(e){try{a(o.next(e))}catch(e){s(e)}}function r(e){try{a(o.throw(e))}catch(e){s(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(l,r)}a((o=o.apply(t,i||[])).next())}));var t,i,n,o}},43629:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipSelectMemberType:()=>p}),i(26660);var s,l,r=i(85862),a=i(59662),n=i(90072),o=(i(75866),function(e,t,i,s){var l,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(a=(r<3?l(a):r>3?l(t,i,a):l(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,i,s){return new(i||(i=Promise))((function(l,r){function a(e){try{o(s.next(e))}catch(e){r(e)}}function n(e){try{o(s.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,n)}o((s=s.apply(e,t||[])).next())}))};let p=class extends r.LitElement{constructor(){super(),this.material="true",this.defaultValue=null,this.defaultValues=[],this.setDefaultValues=null,this.selectedCategory=null,this.multiple=!1,this.required=!1,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),setTimeout((()=>{Array.isArray(this.setDefaultValues)||(this.setDefaultValues=[]),null!==this.defaultValue&&(this.setDefaultValues.includes(this.defaultValue)||this.setDefaultValues.push(this.defaultValue)),this.defaultValues.forEach((e=>{this.setDefaultValues.includes(e)||this.setDefaultValues.push(e)}))}),100),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?r.html`
        ${this.materialSelectField}
      `:r.html`
        ${this.selectInputField}
      `}get materialSelectField(){var e;return(null===(e=this.setDefaultValues)||void 0===e?void 0:e.length)<1?r.html`
        <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
          <mwc-list-item value="0">${this.label}</mwc-list-item>
          ${this._memberCategories.map((e=>r.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
        </mwc-select>
      `:r.html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((i=>{i===e.id&&(t=!0)})),t?r.html`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:r.html`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`}))}
      </mwc-select>
    `}get selectInputField(){let e=[{id:0,name:this.label,isSelected:"false",selected:!1}];this._memberCategories.forEach((t=>{let i=!1;this.setDefaultValues.forEach((e=>{e===t.id&&(i=!0)}));let s=!1,l="false";i&&(s=!0,l="true");const r={id:t.id,name:t.category,isSelected:l,selected:s};e.includes(r)||e.push(r)}));let t=r.html`
      <select-input name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}"
        .options="${e}" outlined ?required="${this.required}" ?multiple="${this.multiple}">
      </select-input>
    `;return r.html`${t}`}get selectField(){let e=r.html``;return e=this.setDefaultValues.length<1?r.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>r.html`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `:r.html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((i=>{i===e.id&&(t=!0)})),t?r.html`<option value="${e.id}" selected>${e.category}</option>`:r.html`<option value="${e.id}">${e.category}</option>`}))}
        </select>
      `,r.html`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${e}
					</div>
				</div>
			</div>
    `}firstUpdated(){}getMemberCategories(){return u(this,void 0,void 0,(function*(){const e=yield(0,n.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberCategories,...t),this._memberCategories=i}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};p.styles=[r.css`
   :host { display: block; }
  `],o([(0,a.property)({type:String}),c("design:type",String)],p.prototype,"material",void 0),o([(0,a.property)({type:Number}),c("design:type",Number)],p.prototype,"defaultValue",void 0),o([(0,a.property)({type:Array}),c("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],p.prototype,"defaultValues",void 0),o([(0,a.property)({type:Array}),c("design:type","function"==typeof(l="undefined"!=typeof Array&&Array)?l:Object)],p.prototype,"setDefaultValues",void 0),o([(0,a.property)({type:Number}),c("design:type",Number)],p.prototype,"selectedCategory",void 0),o([(0,a.property)({type:Boolean}),c("design:type",Boolean)],p.prototype,"multiple",void 0),o([(0,a.property)({type:Boolean}),c("design:type",Boolean)],p.prototype,"required",void 0),o([(0,a.property)({type:String}),c("design:type",String)],p.prototype,"label",void 0),o([(0,a.property)({type:String}),c("design:type",String)],p.prototype,"name",void 0),o([(0,a.property)({type:String}),c("design:type",String)],p.prototype,"id",void 0),o([(0,a.property)({type:String}),c("design:type",String)],p.prototype,"tag_class",void 0),o([(0,a.property)({type:String}),c("design:type",String)],p.prototype,"css_style",void 0),o([(0,a.property)({type:Array}),c("design:type",Array)],p.prototype,"_memberCategories",void 0),p=o([(0,a.customElement)("pdb-membership-select-member-type"),c("design:paramtypes",[])],p)}}]);
//# sourceMappingURL=src_view_membership_members_select-member-type_index_ts.js.map