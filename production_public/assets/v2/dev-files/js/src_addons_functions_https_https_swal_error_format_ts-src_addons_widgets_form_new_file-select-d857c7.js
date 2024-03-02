"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_https_https_swal_error_format_ts-src_addons_widgets_form_new_file-select-d857c7"],{91243:(e,t,i)=>{i.r(t)},8967:(e,t,i)=>{i.r(t),i.d(t,{__swalStyle:()=>r,https_swal_error_format:()=>o});const r="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let i=(t?r:"")+"<ul>";return e.forEach((e=>{i+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),i+="</ul>"}throw new Error("Unknown error response format")}},37725:(e,t,i)=>{i.r(t),i.d(t,{FileInput:()=>n});var r=i(85862),o=i(59662),s=(i(29975),i(23283),i(91243),function(e,t,i,r){var o,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(l=(s<3?o(l):s>3?o(t,i,l):o(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[r.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:r.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:r.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:r.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:r.html`
          <div class="form-input border">
            ${this.hasLabel?r.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:r.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.property)({type:String}),l("design:type",String)],n.prototype,"name",void 0),s([(0,o.property)({type:String}),l("design:type",String)],n.prototype,"label",void 0),s([(0,o.property)({type:String}),l("design:type",String)],n.prototype,"value",void 0),s([(0,o.property)({type:String}),l("design:type",String)],n.prototype,"accept",void 0),s([(0,o.property)({type:Number}),l("design:type",Number)],n.prototype,"randomID",void 0),s([(0,o.property)({type:String}),l("design:type",String)],n.prototype,"id",void 0),s([(0,o.property)({type:Boolean}),l("design:type",Boolean)],n.prototype,"required",void 0),s([(0,o.property)({type:Boolean}),l("design:type",Boolean)],n.prototype,"hasLabel",void 0),s([(0,o.property)({type:Boolean}),l("design:type",Boolean)],n.prototype,"multiple",void 0),s([(0,o.property)({type:Number}),l("design:type",Number)],n.prototype,"startNumber",void 0),s([(0,o.property)({type:Number}),l("design:type",Number)],n.prototype,"rowsPerPage",void 0),s([(0,o.property)({type:Number}),l("design:type",Number)],n.prototype,"totalShowing",void 0),s([(0,o.property)({type:Boolean}),l("design:type",Boolean)],n.prototype,"showSelectorLoaded",void 0),n=s([(0,o.customElement)("file-input")],n)},43690:(e,t,i)=>{i.r(t),i.d(t,{SwitchInput:()=>n});var r=i(85862),o=i(59662),s=(i(29975),i(16788),function(e,t,i,r){var o,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(l=(s<3?o(l):s>3?o(t,i,l):o(t,i))||l);return s>3&&l&&Object.defineProperty(t,i,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends r.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return r.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?r.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:r.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};n.styles=[r.css`
      :host {
        display: block;
      }
    `],s([(0,o.property)({type:String}),l("design:type",String)],n.prototype,"name",void 0),s([(0,o.property)({type:String}),l("design:type",String)],n.prototype,"label",void 0),s([(0,o.property)({type:Boolean}),l("design:type",Boolean)],n.prototype,"selected",void 0),s([(0,o.property)({type:String}),l("design:type",String)],n.prototype,"value",void 0),s([(0,o.property)({type:Boolean}),l("design:type",Boolean)],n.prototype,"isSelected",void 0),n=s([(0,o.customElement)("switch-input")],n)}}]);
//# sourceMappingURL=src_addons_functions_https_https_swal_error_format_ts-src_addons_widgets_form_new_file-select-d857c7.js.map