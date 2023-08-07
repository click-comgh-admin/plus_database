/*! For license information please see branch-prefix.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[7861],{8967:(e,t,r)=>{r.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.d(t,{Jx:()=>o,O1:()=>n,Vc:()=>i,W3:()=>a});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},o=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let n=null;for(const t in r)t===e&&(n=r[t]);return n},i=e=>new URLSearchParams(window.location.search).getAll(e),a=e=>{let t="",r=0;for(const n in e)r+=1,t+=`${r>1?"&":""}${n}=${e[n]}`;return t}},675:(e,t,r)=>{r.d(t,{Y:()=>d,e:()=>n});class n{static toClientBranchModel(e){return s(JSON.parse(e),l("ClientBranchModel"),i)}static clientBranchModelToJson(e){return JSON.stringify(s(e,l("ClientBranchModel"),a),null,2)}}function o(e,t,r=""){if(r)throw Error(`Invalid value for key "${r}". Expected type ${JSON.stringify(e)} but got ${JSON.stringify(t)}`);throw Error(`Invalid value ${JSON.stringify(t)} for type ${JSON.stringify(e)}`)}function i(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function a(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function s(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=d[t.ref];return Array.isArray(t)?function(e,t){return-1!==e.indexOf(t)?t:o(e,t)}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return s(t,n,r)}catch(e){}}return o(e,t)}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){return Array.isArray(t)?t.map((t=>s(t,e,r))):o("array",t)}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return o("object",n);const i={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],a=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;i[o.key]=s(a,o.typ,r,o.key)})),Object.getOwnPropertyNames(n).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(i[o]=s(n[o],t,r,o))})),i}(r(t),t.additional,e):o(t,e):t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?o("Date",e):t}(e):function(e,t){return typeof e==typeof t?t:o(e,t,n)}(t,e)}}function c(...e){return{unionMembers:e}}function l(e){return{ref:e}}const d={ClientBranchModel:(u=[{json:"id",js:"id",typ:c(null,0)},{json:"name",js:"name",typ:c(null,"")},{json:"accountId",js:"accountID",typ:c(null,0)},{json:"createdBy",js:"createdBy",typ:c(null,0)},{json:"creationDate",js:"creationDate",typ:c(null,Date)},{json:"updatedBy",js:"updatedBy",typ:c(null,0)},{json:"updateDate",js:"updateDate",typ:c(null,Date)}],!1,{props:u,additional:false})};var u},6224:(e,t,r)=>{r.d(t,{p:()=>s});var n=r(771),o=r(7270),i=r(596),a=r(3600);function s(e=null){return t=this,r=void 0,c=function*(){const t=(0,a.Ie)(),r=n.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),s=yield(0,o.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new i.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new i.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function o(e){try{a(c.next(e))}catch(e){n(e)}}function i(e){try{a(c.throw(e))}catch(e){n(e)}}function a(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s((function(e){e(r)}))).then(o,i)}a((c=c.apply(t,r||[])).next())}));var t,r,s,c}},5866:(e,t,r)=>{var n=r(9755),o=r(5862),i=r(8393),a=(r(686),function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=n(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let r=!1;return this.value.forEach((e=>{const n=e.id;r=t===n})),e.selected=r,e}))}render(){return this.multiple?this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:n(this.value.map((t=>{const r=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+r+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const r=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,n(".select2-search__field").on("keyup",(function(e){n(r.selectSelector).empty(),r.startSearchPage=0})),r.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,r=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{n(e).select2({closeOnSelect:!1,placeholder:this.label}),n(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let o={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)o[e]=this.ajaxHeader[e];this.selectSelector.forEach((i=>{n(i).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(o){const i=function(o,i){return r=isNaN(o.page)?0:o.page,r=0===r?r:r*t,n(".select2-search__field").on("keyup",(function(o){n(e.selectSelector).empty(),r=0,t=0})),r}(o),a=function(r,o){let i=isNaN(r.page)?1:r.page+1;return i=0===i?1:i,n(".select2-search__field").on("keyup",(function(r){n(e.selectSelector).empty(),i=0,t=0})),i}(o);let s={search:o.term,start:i,page:a};return e.ajaxFetchUrlParams.forEach((e=>{s[e.param]=e.value})),s},headers:o,processResults:(e,r)=>{const n=null===this.ajaxFetchProcessResponse?this._processResults(e,r):this.ajaxFetchProcessResponse(e,r);return t+=n.results.length,{results:n.results,pagination:{more:t<n.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{r=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const r=e;t.page=t.page||0;let n=[];if(!1===r.error){var o=r.data;for(let e=0;e<o.length;e++){const t=o[e],r={id:t.id,text:t.fullName};n.includes(r)||n.push(r)}}return this.totalShowing+=n.length,{results:n,total:r.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let r=[];for(const e of t){let t=e;const n=Number.isNaN(t.value)?0:Number(t.value);r.includes(n)||r.push(n)}this.currentValue=r,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",r)}createRenderRoot(){return this}};c.styles=[o.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],a([(0,i.Cb)({type:String}),s("design:type",String)],c.prototype,"name",void 0),a([(0,i.Cb)({type:String}),s("design:type",String)],c.prototype,"label",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],c.prototype,"value",void 0),a([(0,i.Cb)({type:Number}),s("design:type",Number)],c.prototype,"randomID",void 0),a([(0,i.Cb)({type:String}),s("design:type",String)],c.prototype,"input_id",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],c.prototype,"options",void 0),a([(0,i.Cb)({type:Boolean}),s("design:type",Boolean)],c.prototype,"required",void 0),a([(0,i.Cb)({type:String}),s("design:type",String)],c.prototype,"ajaxFetchToken",void 0),a([(0,i.Cb)({type:String}),s("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),a([(0,i.Cb)({attribute:!1}),s("design:type",Object)],c.prototype,"currentValue",void 0),a([(0,i.Cb)({type:Object}),s("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),a([(0,i.Cb)({type:Array}),s("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),a([(0,i.Cb)({type:Number}),s("design:type",Number)],c.prototype,"startSearchPage",void 0),a([(0,i.Cb)({type:Boolean}),s("design:type",Boolean)],c.prototype,"multiple",void 0),a([(0,i.Cb)({type:Number}),s("design:type",Number)],c.prototype,"startNumber",void 0),a([(0,i.Cb)({type:Number}),s("design:type",Number)],c.prototype,"rowsPerPage",void 0),a([(0,i.Cb)({type:Number}),s("design:type",Number)],c.prototype,"totalShowing",void 0),a([(0,i.Cb)({type:Boolean}),s("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=a([(0,i.Mo)("select-input")],c)},309:(e,t,r)=>{r.r(t),r.d(t,{IdBranchPrefix:()=>q});var n=r(5862),o=r(8393),i=(r(5248),r(934),r(6811),r(4672)),a=(r(9261),r(3313),r(5866),r(3683),r(4657),r(6455)),s=r.n(a),c=r(771),l=r(7270),d=r(596),u=r(8967),p=r(3600),f=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))},h=r(5474),y=r(2145),m=r(1302),b=r(3426),v=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};let x=class extends n.oi{constructor(){super(...arguments),this.CLIENT_ID=0,this.branches=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,h.f)().then((()=>this._hasSetup=!0))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,y.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,m.H)({pageId:b.W.identity_prefix,viewType:"Edit"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}return n.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Prefix</h1>
                  <h3 class="h3">Create New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-branch-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${this.branches.map((e=>n.dy`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return w(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return f(this,void 0,void 0,(function*(){const e=(0,p.Ie)(),t=c.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-branch-prefix",r=document.querySelector('[make-general-posts="member-id-branch-prefix"]'),n=new FormData(r);return s().fire({title:"Add Member Branch Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>f(this,void 0,void 0,(function*(){return yield(0,l.d)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new d.H("post",e,!1,r),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&s().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}createRenderRoot(){return this}};x.styles=[n.iv`
   :host { display: block; }
  `],v([(0,o.Cb)({type:Number}),g("design:type",Number)],x.prototype,"CLIENT_ID",void 0),v([(0,o.Cb)({type:Array}),g("design:type",Array)],x.prototype,"branches",void 0),v([(0,o.Cb)({type:Boolean}),g("design:type",Boolean)],x.prototype,"_hasSetup",void 0),x=v([(0,o.Mo)("id-branch-prefix-add")],x);var j,_=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))},S=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},P=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};let A=class extends n.oi{constructor(){super(...arguments),this.prefixId=0,this.currentBranchId=0,this.prefixEdit=[],this.branches=[],this._data=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,h.f)().then((()=>this._hasSetup=!0))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,y.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,m.H)({pageId:b.W.identity_prefix,viewType:"Edit"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}return n.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Edit Prefix</h1>
                  <h3 class="h3">Update New Prefix!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="member-id-branch-prefix" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Branch</h4>
                    <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" outlined required>
                      ${this.branches.map((e=>0===this.prefixEdit.length?n.dy`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`:e.id===this.prefixEdit[0].branchID.id?(this.currentBranchId!==e.id&&(this.currentBranchId=e.id,this.requestUpdate()),n.dy`<mwc-list-item value="${e.id}"  selected>${e.name}</mwc-list-item>`):void 0))}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Prefix</h4>
                    <mwc-textfield name="prefix" type="text" class="w-full" id="prefix" value="${0===this.prefixEdit.length?"":this.prefixEdit[0].prefix}" label="Enter Prefix" outlined required>
                    </mwc-textfield>
                  </div>
                </div>

                <div class="form-input-container">
                  <mwc-button label="Save" raised class="w-full" @click="${this.submitForm}">
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
    `}firstUpdated(){}submitForm(e){return C(this,void 0,void 0,(function*(){e.preventDefault(),yield function(e){return _(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),r=c.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-branch-prefix/"+e,n=document.querySelector('[make-general-posts="member-id-branch-prefix"]'),o=new FormData(n);return s().fire({title:"Update Member Branch Id Prefix?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>_(this,void 0,void 0,(function*(){return yield(0,l.d)(r,{method:"PUT",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new d.H("post",e,!1,n),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let n={error:t.id+": "+r};"non_field_errors"===t.id&&(n={error:r}),e.push(n)}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}r&&s().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(this.prefixId)}))}createRenderRoot(){return this}};A.styles=[n.iv`
   :host { display: block; }
  `],S([(0,o.Cb)({type:Number}),P("design:type",Number)],A.prototype,"prefixId",void 0),S([(0,o.Cb)({type:Number}),P("design:type",Number)],A.prototype,"currentBranchId",void 0),S([(0,o.Cb)({type:Array}),P("design:type",Array)],A.prototype,"prefixEdit",void 0),S([(0,o.Cb)({type:Array}),P("design:type",Array)],A.prototype,"branches",void 0),S([(0,o.Cb)({type:Array}),P("design:type","function"==typeof(j="undefined"!=typeof Array&&Array)?j:Object)],A.prototype,"_data",void 0),S([(0,o.Cb)({type:Boolean}),P("design:type",Boolean)],A.prototype,"_hasSetup",void 0),A=S([(0,o.Mo)("id-branch-prefix-edit")],A);var O=r(6224),B=r(675);class I{static toMembershipMemberBranchIDPrefixModel(e){return N(JSON.parse(e),R("MembershipMemberBranchIDPrefixModel"),k)}static membershipMemberBranchIDPrefixModelToJson(e){return JSON.stringify(N(e,R("MembershipMemberBranchIDPrefixModel"),$),null,2)}}function k(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function $(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function N(e,t,r,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=T[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let o=0;o<n;o++){const n=e[o];try{return N(t,n,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>N(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const i=e[t],a=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;o[i.key]=N(a,i.typ,r,i.key)})),Object.getOwnPropertyNames(n).forEach((i=>{Object.prototype.hasOwnProperty.call(e,i)||(o[i]=N(n[i],t,r,i))})),o}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function E(...e){return{unionMembers:e}}function R(e){return{ref:e}}const T={MembershipMemberBranchIDPrefixModel:(M=[{json:"id",js:"id",typ:E(null,0)},{json:"prefix",js:"prefix",typ:E(null,"")},{json:"branchId",js:"branchID",typ:E(null,R("ClientBranchModel"))},{json:"createdBy",js:"createdBy",typ:E(null,0)},{json:"creationDate",js:"creationDate",typ:E(null,Date)},{json:"updatedBy",js:"updatedBy",typ:E(null,0)},{json:"updateDate",js:"updateDate",typ:E(null,Date)}],!1,{props:M,additional:false}),ClientBranchModel:B.Y.ClientBranchModel};var M,D,U=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))},L=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},J=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},F=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))};let H=class extends n.oi{constructor(){super(),this.prefixId=0,this.currentPrefixId=0,this.prefixEdit=[],this._data=[],this.urlQueryParams=void 0,this._memberPrefixIds=[],this._branches=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return F(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,h.f)().then((()=>this._hasSetup=!0)),this.urlQueryParams=(0,i.O1)(),(0,h.f)(),yield this.getMemberBranchIdPrefix(),yield this.getClientBranches()}))}disconnectedCallback(){}render(){return null===this._memberPrefixIds?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._memberPrefixIds?n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Prefix Id</span>: undefined error</h4>
          </div>
        </div>
      `:n.dy`
        <div class="shadow bg-white p-2 mb-4">
          ${this.form}
          <hr />
          <div class="flex justify-end my-2">
            <mwc-button raised label="Add Branch Prefix" class="ml-1 success" icon="add" @click="${this.addNew}"></mwc-button> 
          </div>
          ${this.table}
        </div>
      `}get form(){return this._memberPrefixIds.length>0?0===this.prefixId?n.dy`
          <id-branch-prefix-add .branches="${this._branches}"></id-branch-prefix-add>
        `:(n.dy``,n.dy``,n.dy`<id-branch-prefix-edit prefixId="${this.prefixId}" .prefixEdit="${this.prefixEdit}" .branches="${this._branches}"></id-branch-prefix-edit>`):n.dy`
        <id-branch-prefix-add .branches="${this._branches}"></id-branch-prefix-add>
      `}get table(){var e;if(this._hasSetup){if(null===(e=(0,y.H)())||void 0===e?void 0:e.expiration_date.expired)return n.dy`<account-expired-component></account-expired-component>`;if(!(0,m.H)({pageId:b.W.identity_prefix,viewType:"View"},!1))return n.dy`<no-page-entry-component></no-page-entry-component>`}return this._memberPrefixIds.length>0?n.dy`
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Group">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Member ID Prefix</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${this.getMemberPrefixIds}
              </tbody>
            </table>
          </div>
        </div>
      `:n.dy`
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      `}get getMemberPrefixIds(){return n.dy`
      ${this._memberPrefixIds.map(((e,t)=>n.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.branchID.name} -> <b>${e.prefix}</b>
            </th>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <mwc-icon-button class="ml-1 warning" icon="edit" edit-this-item="${e.id}"
                @click="${this.editMemberPrefixId}"></mwc-icon-button>    
              <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}"
                @click="${this.deleteMemberPrefixId}"></mwc-icon-button>         
            </td>
          </tr>
        `))}
    `}firstUpdated(){}addNew(e){return F(this,void 0,void 0,(function*(){e.preventDefault(),this.prefixId=0,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus()}))}editMemberPrefixId(e){return F(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("edit-this-item"));this.prefixId=t,window.scrollTo({top:0}),document.querySelector('mwc-textfield[name="prefix"]').focus();const r=this._branches;for(const e of this._memberPrefixIds)e.id===this.prefixId&&(this.prefixEdit[0]=e,this._branches=[],setTimeout((()=>{this._branches=r}),100))}))}deleteMemberPrefixId(e){return F(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return U(this,void 0,void 0,(function*(){const t=(0,p.Ie)(),r=c.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-branch-prefix/"+e,n={};return s().fire({title:"Remove Member Branch Id Prefix?",text:"You may have members assigned to this prefix. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>U(this,void 0,void 0,(function*(){return yield(0,l.d)(r,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new d.H("delete",e,!1),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,u.T)(e);s().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let r=e;r.error=t;const n=new d.H("delete",r,!0);return n.postForm,n}})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),r=n.response.success}s().fire({title:t,icon:r?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}getMemberBranchIdPrefix(){return F(this,void 0,void 0,(function*(){const e=yield function(e=null){return t=this,r=void 0,o=function*(){const t=(0,p.Ie)(),r=c.t.URLS.AKWAABA_API_BASE_URL+"clients/member-id-branch-prefix"+(null===e?"":"/"+e),n=yield(0,l.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new d.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new d.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,s)}c((o=o.apply(t,r||[])).next())}));var t,r,n,o}();let t=[];null===e?t.push({id:0,prefix:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>I.toMembershipMemberBranchIDPrefixModel(JSON.stringify(e))))]);const r=[];r.push(...this._memberPrefixIds,...t),this._memberPrefixIds=r}))}getClientBranches(){return F(this,void 0,void 0,(function*(){const e=yield(0,O.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=[...e.response.data.map((e=>B.e.toClientBranchModel(JSON.stringify(e))))]);const r=[];r.push(...this._branches,...t),this._branches=r}))}createRenderRoot(){return this}};H.styles=[n.iv`
   :host { display: block; }
  `],L([(0,o.Cb)({type:Number}),J("design:type",Number)],H.prototype,"prefixId",void 0),L([(0,o.Cb)({type:Number}),J("design:type",Number)],H.prototype,"currentPrefixId",void 0),L([(0,o.Cb)({type:Array}),J("design:type",Array)],H.prototype,"prefixEdit",void 0),L([(0,o.Cb)({type:Array}),J("design:type","function"==typeof(D="undefined"!=typeof Array&&Array)?D:Object)],H.prototype,"_data",void 0),L([(0,o.Cb)({type:Object}),J("design:type",Object)],H.prototype,"urlQueryParams",void 0),L([(0,o.Cb)({type:Array}),J("design:type",Array)],H.prototype,"_memberPrefixIds",void 0),L([(0,o.Cb)({type:Array}),J("design:type",Array)],H.prototype,"_branches",void 0),L([(0,o.Cb)({type:Boolean}),J("design:type",Boolean)],H.prototype,"_hasSetup",void 0),H=L([(0,o.Mo)("id-branch-prefix-view"),J("design:paramtypes",[])],H);let q=class extends n.oi{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,r=void 0,o=function*(){e.connectedCallback.call(this)},new((n=void 0)||(n=Promise))((function(e,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,s)}c((o=o.apply(t,r||[])).next())}));var t,r,n,o}disconnectedCallback(){}render(){return n.dy`
      <id-branch-prefix-view></id-branch-prefix-view>
    `}firstUpdated(){}createRenderRoot(){return this}};q=function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}([(0,o.Mo)("id-branch-prefix"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],q)},3426:(e,t,r)=>{r.d(t,{W:()=>n});const n={identity_prefix:32}},4232:(e,t,r)=>{r.d(t,{OR:()=>a,hl:()=>c,pt:()=>i});var n=r(3692);const{I:o}=n.Al,i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,a=e=>void 0===e.strings,s={},c=(e,t=s)=>e._$AH=t},8082:(e,t,r)=>{r.d(t,{XM:()=>n.XM,Xe:()=>n.Xe,pX:()=>n.pX});var n=r(875)},3669:(e,t,r)=>{r.d(t,{a:()=>a});var n=r(3692),o=r(875),i=r(4232);const a=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n.Jb||t===n.Ld)return t;const r=e.element,a=e.name;if(e.type===o.pX.PROPERTY){if(t===r[a])return n.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(a))return n.Jb}else if(e.type===o.pX.ATTRIBUTE&&r.getAttribute(a)===t+"")return n.Jb;return(0,i.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,7154,1080,5291,6236,7583,214,3901,3712],(()=>(309,e(e.s=309)))),e.O())])));
//# sourceMappingURL=branch-prefix.js.map