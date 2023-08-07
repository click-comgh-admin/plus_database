"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3629],{72:(e,t,i)=>{i.d(t,{L:()=>r});var s=i(771),a=i(7270),l=i(596),o=i(3600);function r(e=null){return t=this,i=void 0,n=function*(){const t=(0,o.Ie)(),i=s.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),r=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new l.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new l.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,s){function a(e){try{o(n.next(e))}catch(e){s(e)}}function l(e){try{o(n.throw(e))}catch(e){s(e)}}function o(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(a,l)}o((n=n.apply(t,i||[])).next())}));var t,i,r,n}},5866:(e,t,i)=>{var s=i(9755),a=i(5862),l=i(8393),o=(i(686),function(e,t,i,s){var a,l=arguments.length,o=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(l<3?a(o):l>3?a(t,i,o):a(t,i))||o);return l>3&&o&&Object.defineProperty(t,i,o),o}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends a.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=s(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let i=!1;return this.value.forEach((e=>{const s=e.id;i=t===s})),e.selected=i,e}))}render(){return this.multiple?this.required?a.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?a.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:a.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:a.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?a.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:a.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?a.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?a.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:a.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:a.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?a.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:a.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:s(this.value.map((t=>{const i=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+i+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const i=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,s(".select2-search__field").on("keyup",(function(e){s(i.selectSelector).empty(),i.startSearchPage=0})),i.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,i=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{s(e).select2({closeOnSelect:!1,placeholder:this.label}),s(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let a={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)a[e]=this.ajaxHeader[e];this.selectSelector.forEach((l=>{s(l).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(a){const l=function(a,l){return i=isNaN(a.page)?0:a.page,i=0===i?i:i*t,s(".select2-search__field").on("keyup",(function(a){s(e.selectSelector).empty(),i=0,t=0})),i}(a),o=function(i,a){let l=isNaN(i.page)?1:i.page+1;return l=0===l?1:l,s(".select2-search__field").on("keyup",(function(i){s(e.selectSelector).empty(),l=0,t=0})),l}(a);let r={search:a.term,start:l,page:o};return e.ajaxFetchUrlParams.forEach((e=>{r[e.param]=e.value})),r},headers:a,processResults:(e,i)=>{const s=null===this.ajaxFetchProcessResponse?this._processResults(e,i):this.ajaxFetchProcessResponse(e,i);return t+=s.results.length,{results:s.results,pagination:{more:t<s.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{i=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const i=e;t.page=t.page||0;let s=[];if(!1===i.error){var a=i.data;for(let e=0;e<a.length;e++){const t=a[e],i={id:t.id,text:t.fullName};s.includes(i)||s.push(i)}}return this.totalShowing+=s.length,{results:s,total:i.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let i=[];for(const e of t){let t=e;const s=Number.isNaN(t.value)?0:Number(t.value);i.includes(s)||i.push(s)}this.currentValue=i,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",i)}createRenderRoot(){return this}};n.styles=[a.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],o([(0,l.Cb)({type:String}),r("design:type",String)],n.prototype,"name",void 0),o([(0,l.Cb)({type:String}),r("design:type",String)],n.prototype,"label",void 0),o([(0,l.Cb)({type:Array}),r("design:type",Array)],n.prototype,"value",void 0),o([(0,l.Cb)({type:Number}),r("design:type",Number)],n.prototype,"randomID",void 0),o([(0,l.Cb)({type:String}),r("design:type",String)],n.prototype,"input_id",void 0),o([(0,l.Cb)({type:Array}),r("design:type",Array)],n.prototype,"options",void 0),o([(0,l.Cb)({type:Boolean}),r("design:type",Boolean)],n.prototype,"required",void 0),o([(0,l.Cb)({type:String}),r("design:type",String)],n.prototype,"ajaxFetchToken",void 0),o([(0,l.Cb)({type:String}),r("design:type",String)],n.prototype,"ajaxFetchUrl",void 0),o([(0,l.Cb)({attribute:!1}),r("design:type",Object)],n.prototype,"currentValue",void 0),o([(0,l.Cb)({type:Object}),r("design:type",Function)],n.prototype,"ajaxFetchProcessResponse",void 0),o([(0,l.Cb)({type:Array}),r("design:type",Array)],n.prototype,"ajaxFetchUrlParams",void 0),o([(0,l.Cb)({type:Number}),r("design:type",Number)],n.prototype,"startSearchPage",void 0),o([(0,l.Cb)({type:Boolean}),r("design:type",Boolean)],n.prototype,"multiple",void 0),o([(0,l.Cb)({type:Number}),r("design:type",Number)],n.prototype,"startNumber",void 0),o([(0,l.Cb)({type:Number}),r("design:type",Number)],n.prototype,"rowsPerPage",void 0),o([(0,l.Cb)({type:Number}),r("design:type",Number)],n.prototype,"totalShowing",void 0),o([(0,l.Cb)({type:Boolean}),r("design:type",Boolean)],n.prototype,"showSelectorLoaded",void 0),n=o([(0,l.Mo)("select-input")],n)},3629:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipSelectMemberType:()=>p});var s,a,l=i(5862),o=i(8393),r=i(72),n=(i(5866),function(e,t,i,s){var a,l=arguments.length,o=l<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(l<3?a(o):l>3?a(t,i,o):a(t,i))||o);return l>3&&o&&Object.defineProperty(t,i,o),o}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,i,s){return new(i||(i=Promise))((function(a,l){function o(e){try{n(s.next(e))}catch(e){l(e)}}function r(e){try{n(s.throw(e))}catch(e){l(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,r)}n((s=s.apply(e,t||[])).next())}))};let p=class extends l.oi{constructor(){super(),this.material="true",this.defaultValue=null,this.defaultValues=[],this.setDefaultValues=null,this.selectedCategory=null,this.multiple=!1,this.required=!1,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),setTimeout((()=>{Array.isArray(this.setDefaultValues)||(this.setDefaultValues=[]),null!==this.defaultValue&&(this.setDefaultValues.includes(this.defaultValue)||this.setDefaultValues.push(this.defaultValue)),this.defaultValues.forEach((e=>{this.setDefaultValues.includes(e)||this.setDefaultValues.push(e)}))}),100),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?l.dy`
        ${this.materialSelectField}
      `:l.dy`
        ${this.selectInputField}
      `}get materialSelectField(){var e;return(null===(e=this.setDefaultValues)||void 0===e?void 0:e.length)<1?l.dy`
        <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
          <mwc-list-item value="0">${this.label}</mwc-list-item>
          ${this._memberCategories.map((e=>l.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
        </mwc-select>
      `:l.dy`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((i=>{i===e.id&&(t=!0)})),t?l.dy`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:l.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`}))}
      </mwc-select>
    `}get selectInputField(){let e=[{id:0,name:this.label,isSelected:"false",selected:!1}];this._memberCategories.forEach((t=>{let i=!1;this.setDefaultValues.forEach((e=>{e===t.id&&(i=!0)}));let s=!1,a="false";i&&(s=!0,a="true");const l={id:t.id,name:t.category,isSelected:a,selected:s};e.includes(l)||e.push(l)}));let t=l.dy`
      <select-input name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}"
        .options="${e}" outlined ?required="${this.required}" ?multiple="${this.multiple}">
      </select-input>
    `;return l.dy`${t}`}get selectField(){let e=l.dy``;return e=this.setDefaultValues.length<1?l.dy`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>l.dy`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `:l.dy`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((i=>{i===e.id&&(t=!0)})),t?l.dy`<option value="${e.id}" selected>${e.category}</option>`:l.dy`<option value="${e.id}">${e.category}</option>`}))}
        </select>
      `,l.dy`
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
    `}firstUpdated(){}getMemberCategories(){return d(this,void 0,void 0,(function*(){const e=yield(0,r.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberCategories,...t),this._memberCategories=i}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};p.styles=[l.iv`
   :host { display: block; }
  `],n([(0,o.Cb)({type:String}),c("design:type",String)],p.prototype,"material",void 0),n([(0,o.Cb)({type:Number}),c("design:type",Number)],p.prototype,"defaultValue",void 0),n([(0,o.Cb)({type:Array}),c("design:type","function"==typeof(s="undefined"!=typeof Array&&Array)?s:Object)],p.prototype,"defaultValues",void 0),n([(0,o.Cb)({type:Array}),c("design:type","function"==typeof(a="undefined"!=typeof Array&&Array)?a:Object)],p.prototype,"setDefaultValues",void 0),n([(0,o.Cb)({type:Number}),c("design:type",Number)],p.prototype,"selectedCategory",void 0),n([(0,o.Cb)({type:Boolean}),c("design:type",Boolean)],p.prototype,"multiple",void 0),n([(0,o.Cb)({type:Boolean}),c("design:type",Boolean)],p.prototype,"required",void 0),n([(0,o.Cb)({type:String}),c("design:type",String)],p.prototype,"label",void 0),n([(0,o.Cb)({type:String}),c("design:type",String)],p.prototype,"name",void 0),n([(0,o.Cb)({type:String}),c("design:type",String)],p.prototype,"id",void 0),n([(0,o.Cb)({type:String}),c("design:type",String)],p.prototype,"tag_class",void 0),n([(0,o.Cb)({type:String}),c("design:type",String)],p.prototype,"css_style",void 0),n([(0,o.Cb)({type:Array}),c("design:type",Array)],p.prototype,"_memberCategories",void 0),p=n([(0,o.Mo)("pdb-membership-select-member-type"),c("design:paramtypes",[])],p)}}]);
//# sourceMappingURL=3629.js.map