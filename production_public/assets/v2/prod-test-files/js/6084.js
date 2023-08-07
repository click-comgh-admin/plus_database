"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[6084],{5102:(e,t,o)=>{o.d(t,{Y:()=>c,e:()=>r});class r{static toClientAccountCategoryModel(e){return n(JSON.parse(e),l("ClientAccountCategoryModel"),i)}static clientAccountCategoryModelToJson(e){return JSON.stringify(n(e,l("ClientAccountCategoryModel"),s),null,2)}}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function n(e,t,o,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let i=0;i<r;i++){const r=e[i];try{return n(t,r,o)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>n(t,e,o)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],a=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;i[s.key]=n(a,s.typ,o,s.key)})),Object.getOwnPropertyNames(r).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(i[s]=n(r[s],t,o,s))})),i}(o(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function l(e){return{ref:e}}const c={ClientAccountCategoryModel:(p=[{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"category",js:"category",typ:a(null,"")},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1,{props:p,additional:false})};var p},5866:(e,t,o)=>{var r=o(9755),i=o(5862),s=o(8393),n=(o(686),function(e,t,o,r){var i,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(n=(s<3?i(n):s>3?i(t,o,n):i(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=r(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let o=!1;return this.value.forEach((e=>{const r=e.id;o=t===r})),e.selected=o,e}))}render(){return this.multiple?this.required?i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:i.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?i.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:i.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:r(this.value.map((t=>{const o=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+o+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const o=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,r(".select2-search__field").on("keyup",(function(e){r(o.selectSelector).empty(),o.startSearchPage=0})),o.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,o=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{r(e).select2({closeOnSelect:!1,placeholder:this.label}),r(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let i={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)i[e]=this.ajaxHeader[e];this.selectSelector.forEach((s=>{r(s).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(i){const s=function(i,s){return o=isNaN(i.page)?0:i.page,o=0===o?o:o*t,r(".select2-search__field").on("keyup",(function(i){r(e.selectSelector).empty(),o=0,t=0})),o}(i),n=function(o,i){let s=isNaN(o.page)?1:o.page+1;return s=0===s?1:s,r(".select2-search__field").on("keyup",(function(o){r(e.selectSelector).empty(),s=0,t=0})),s}(i);let a={search:i.term,start:s,page:n};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:i,processResults:(e,o)=>{const r=null===this.ajaxFetchProcessResponse?this._processResults(e,o):this.ajaxFetchProcessResponse(e,o);return t+=r.results.length,{results:r.results,pagination:{more:t<r.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{o=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const o=e;t.page=t.page||0;let r=[];if(!1===o.error){var i=o.data;for(let e=0;e<i.length;e++){const t=i[e],o={id:t.id,text:t.fullName};r.includes(o)||r.push(o)}}return this.totalShowing+=r.length,{results:r,total:o.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let o=[];for(const e of t){let t=e;const r=Number.isNaN(t.value)?0:Number(t.value);o.includes(r)||o.push(r)}this.currentValue=o,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",o)}createRenderRoot(){return this}};l.styles=[i.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),n([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),n([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),n([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),n([(0,s.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),n([(0,s.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),n([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),n([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),n([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=n([(0,s.Mo)("select-input")],l)}}]);
//# sourceMappingURL=6084.js.map