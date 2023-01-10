/*! For license information please see 1868.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1868],{8967:(e,t,r)=>{r.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let r=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{r+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),r+="</ul>"}throw new Error("Unknown error response format")}},4672:(e,t,r)=>{r.d(t,{Jx:()=>n,O1:()=>o,Vc:()=>s,W3:()=>i});const o=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},n=e=>{const t=new URLSearchParams(window.location.search),r=Object.fromEntries(t.entries());let o=null;for(const t in r)t===e&&(o=r[t]);return o},s=e=>new URLSearchParams(window.location.search).getAll(e),i=e=>{let t="",r=0;for(const o in e)r+=1,t+=`${r>1?"&":""}${o}=${e[o]}`;return t}},428:(e,t,r)=>{r.d(t,{Y:()=>l,e:()=>o});class o{static toGroupModel(e){return i(JSON.parse(e),c("GroupModel"),n)}static groupModelToJson(e){return JSON.stringify(i(e,c("GroupModel"),s),null,2)}}function n(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,r,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let n=0;n<o;n++){const o=e[n];try{return i(t,o,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const n={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;n[s.key]=i(a,s.typ,r,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(n[s]=i(o[s],t,r,s))})),n}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function c(e){return{ref:e}}const l={GroupModel:(u=[{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"group",js:"group",typ:a(null,"")},{json:"branchId",js:"branchID",typ:a(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:a(null,0)},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1,{props:u,additional:false})};var u},1594:(e,t,r)=>{r.d(t,{Y:()=>u,e:()=>n});var o=r(428);class n{static toSubGroupModel(e){return a(JSON.parse(e),l("SubGroupModel"),s)}static subGroupModelToJson(e){return JSON.stringify(a(e,l("SubGroupModel"),i),null,2)}}function s(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function a(e,t,r,o=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const o=e.length;for(let n=0;n<o;n++){const o=e[n];try{return a(t,o,r)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>a(t,e,r)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const n={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],i=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;n[s.key]=a(i,s.typ,r,s.key)})),Object.getOwnPropertyNames(o).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(n[s]=a(o[s],t,r,s))})),n}(r(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function c(...e){return{unionMembers:e}}function l(e){return{ref:e}}const u={SubGroupModel:(p=[{json:"id",js:"id",typ:c(null,0)},{json:"clientId",js:"clientID",typ:c(null,0)},{json:"groupId",js:"groupID",typ:c(null,l("GroupModel"))},{json:"branchId",js:"branchID",typ:c(null,0)},{json:"memberCategoryId",js:"memberCategoryID",typ:c(null,0)},{json:"subgroup",js:"subgroup",typ:c(null,"")},{json:"createdBy",js:"createdBy",typ:c(null,0)},{json:"updatedBy",js:"updatedBy",typ:c(null,0)},{json:"updateDate",js:"updateDate",typ:c(null,Date)},{json:"date",js:"date",typ:c(null,Date)},{json:"group",js:"group",typ:c(null,"")}],!1,{props:p,additional:false}),GroupModel:o.Y.GroupModel};var p},6224:(e,t,r)=>{r.d(t,{p:()=>a});var o=r(771),n=r(7270),s=r(596),i=r(3600);function a(e=null){return t=this,r=void 0,c=function*(){const t=(0,i.Ie)(),r=o.t.URLS.AKWAABA_API_BASE_URL+"clients/branch"+(null===e?"":"/"+e),a=yield(0,n.d)(r,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new s.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,o){function n(e){try{i(c.next(e))}catch(e){o(e)}}function s(e){try{i(c.throw(e))}catch(e){o(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof a?r:new a((function(e){e(r)}))).then(n,s)}i((c=c.apply(t,r||[])).next())}));var t,r,a,c}},2892:(e,t,r)=>{r.d(t,{c:()=>a});var o=r(771),n=r(7270),s=r(596),i=r(3600);function a(e=null,t=""){return r=this,a=void 0,l=function*(){const r=(0,i.Ie)(),a=o.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,c=yield(0,n.d)(a,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function o(e){try{s(l.next(e))}catch(e){t(e)}}function n(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(o,n)}s((l=l.apply(r,a||[])).next())}));var r,a,c,l}},9605:(e,t,r)=>{r.d(t,{U:()=>a});var o=r(771),n=r(7270),s=r(596),i=r(3600);function a(e=null,t=""){return r=this,a=void 0,l=function*(){const r=(0,i.Ie)(),a=o.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,c=yield(0,n.d)(a,{method:"GET",headers:{Authorization:"Token "+r.token}},!0);try{return new s.H("get",c)}catch(e){console.error({error:e});let t=c;return t.error=e,new s.H("get",t,!0)}},new((c=void 0)||(c=Promise))((function(e,t){function o(e){try{s(l.next(e))}catch(e){t(e)}}function n(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof c?r:new c((function(e){e(r)}))).then(o,n)}s((l=l.apply(r,a||[])).next())}));var r,a,c,l}},5866:(e,t,r)=>{var o=r(9755),n=r(9392),s=r(1936),i=(r(686),function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=o(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let r=!1;return this.value.forEach((e=>{const o=e.id;r=t===o})),e.selected=r,e}))}render(){return this.multiple?this.required?n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:n.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?n.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:n.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:o(this.value.map((t=>{const r=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+r+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const r=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,o(".select2-search__field").on("keyup",(function(e){o(r.selectSelector).empty(),r.startSearchPage=0})),r.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,r=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{o(e).select2({closeOnSelect:!1,placeholder:this.label}),o(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let n={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)n[e]=this.ajaxHeader[e];this.selectSelector.forEach((s=>{o(s).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(n){const s=function(n,s){return r=isNaN(n.page)?0:n.page,r=0===r?r:r*t,o(".select2-search__field").on("keyup",(function(n){o(e.selectSelector).empty(),r=0,t=0})),r}(n),i=function(r,n){let s=isNaN(r.page)?1:r.page+1;return s=0===s?1:s,o(".select2-search__field").on("keyup",(function(r){o(e.selectSelector).empty(),s=0,t=0})),s}(n);let a={search:n.term,start:s,page:i};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:n,processResults:(e,r)=>{const o=null===this.ajaxFetchProcessResponse?this._processResults(e,r):this.ajaxFetchProcessResponse(e,r);return t+=o.results.length,{results:o.results,pagination:{more:t<o.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{r=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const r=e;t.page=t.page||0;let o=[];if(!1===r.error){var n=r.data;for(let e=0;e<n.length;e++){const t=n[e],r={id:t.id,text:t.fullName};o.includes(r)||o.push(r)}}return this.totalShowing+=o.length,{results:o,total:r.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let r=[];for(const e of t){let t=e;const o=Number.isNaN(t.value)?0:Number(t.value);r.includes(o)||r.push(o)}this.currentValue=r,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",r)}createRenderRoot(){return this}};c.styles=[n.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],i([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"name",void 0),i([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"label",void 0),i([(0,s.Cb)({type:Array}),a("design:type",Array)],c.prototype,"value",void 0),i([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"randomID",void 0),i([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"input_id",void 0),i([(0,s.Cb)({type:Array}),a("design:type",Array)],c.prototype,"options",void 0),i([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"required",void 0),i([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchToken",void 0),i([(0,s.Cb)({type:String}),a("design:type",String)],c.prototype,"ajaxFetchUrl",void 0),i([(0,s.Cb)({attribute:!1}),a("design:type",Object)],c.prototype,"currentValue",void 0),i([(0,s.Cb)({type:Object}),a("design:type",Function)],c.prototype,"ajaxFetchProcessResponse",void 0),i([(0,s.Cb)({type:Array}),a("design:type",Array)],c.prototype,"ajaxFetchUrlParams",void 0),i([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"startSearchPage",void 0),i([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"multiple",void 0),i([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"startNumber",void 0),i([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"rowsPerPage",void 0),i([(0,s.Cb)({type:Number}),a("design:type",Number)],c.prototype,"totalShowing",void 0),i([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],c.prototype,"showSelectorLoaded",void 0),c=i([(0,s.Mo)("select-input")],c)},4494:(e,t,r)=>{var o=r(9392),n=r(1936),s=(r(5248),r(3313),r(9261),r(1877),r(2169),r(5866),r(2004)),i=r(6224),a=r(3600),c=r(2892),l=r(9605),u=r(6455),p=r.n(u),d=r(771),h=r(7270),y=r(596),f=r(8967),g=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))},m=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))},b=r(428),v=r(1594),S=function(e,t,r,o){var n,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,r,i):n(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},w=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(e,t,r,o){return new(r||(r=Promise))((function(n,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}c((o=o.apply(e,t||[])).next())}))};let A=class extends o.oi{constructor(){super(),this.userId=0,this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this._branches=[],this._groups=[],this._subgroups=[],this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set clientUserGroupSubgroup(e){this._clientUserGroupSubgroup=e,this.requestUpdate()}get clientUserGroupSubgroup(){return this._clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return j(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,a.Ie)()],yield this.getBranches(),yield this.getGroups(),yield this.getSubGroups()}))}disconnectedCallback(){}render(){return"true"===this.edit?("mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,o.dy`
        ${this.groupSubgroup}
      `):o.dy`
        ${this.form}
      `}get groupSubgroup(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Group(s)/ Sub-Group(s)</h1>
                  <h3 class="h3">Update Admin User Group(s)/ Sub-Group(s)!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user-group-subgroup" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.accessFieldSelectBox}
                  <div class="col-md-12 col-lg-8">
                    <input type="hidden" name="clientId" id="clientId" value="${e}" />
                    <input type="hidden" name="userId" id="userId" value="${this.userId}" />
                    <div class="form-input-container">
                      <mwc-button label="Update Group(s)/ Subgroup(s)" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>
      
                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get form(){let e=0;return null!==this._activeBranchId&&(e=this._activeBranchId[0].accountId),o.dy`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Group(s)/ Sub-Group(s)</h1>
                  <h3 class="h3">Add Admin User Group(s)/ Sub-Group(s)!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user-group-subgroup"
                enctype="multipart/form-data">
                <div class="row justify-content-center">
      
                  ${this.accessFieldSelectBox}
                  <div class="col-md-12 col-lg-8">
                    <input type="hidden" name="clientId" id="clientId" value="${e}" />
                    <input type="hidden" name="userId" id="userId" value="${this.userId}" />
                    <div class="form-input-container">
                      <mwc-button label="Add Group(s)/ Sub-Group(s)" raised class="button" @click="${this.submitForm}">
                      </mwc-button>
                    </div>
      
                    <div class="flex form-input-container items-center text-center">
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                      <label class="block font-medium text-sm text-gray-600 w-full">
                        Lets go digital...
                      </label>
                      <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `}get groupsSubgroups(){let e=[],t=[];const r=this.clientUserGroupSubgroup,o=r.data,n=Array.isArray(o)?o[0]:o,s=r.success;return this._groups.forEach((t=>{let r=!1,o="false";s&&(null==n||n.group.forEach((e=>{e.id===t.id&&(r=!0,o="true")})));const i={id:t.id,name:t.group,isSelected:o,selected:r};e.includes(i)||e.push(i)})),this._subgroups.forEach((e=>{let r=!1,o="false";s&&(null==n||n.subgroup.forEach((t=>{t.id===e.id&&(r=!0,o="true")})));const i={id:e.id,name:`${e.groupID.group} => ${e.subgroup}`,isSelected:o,selected:r};t.includes(i)||t.push(i)})),{groups:e,subgroups:t}}get accessFieldSelectBox(){const e=this.groupsSubgroups,t=e.groups,r=e.subgroups;return o.dy`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select User Group(s)</h4>
        <select-input name="group" multiple class="w-full" id="group" label="Select User Group(s)" .options="${t}"
          outlined required>
        </select-input>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select User Sub-Group(s)</h4>
        <select-input name="subgroup" multiple class="w-full" id="subgroup" label="Select User Sub-Group(s)"
          .options="${r}" outlined required>
        </select-input>
      </div>
    `}firstUpdated(){}getBranches(){return j(this,void 0,void 0,(function*(){const e=yield(0,i.p)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const r=[];r.push(...this._branches,...t),this._branches=r}))}getGroups(){return j(this,void 0,void 0,(function*(){const e=yield(0,c.c)();let t=[];if(null===e)t.push({id:0,group:"**NOT FOUND**",date:new Date});else if(!0===e.response.success&&"length"in e.response.data){const r=e.response.data.map((e=>b.e.toGroupModel(JSON.stringify(e))));t=r}const r=[];r.push(...this._groups,...t),this._groups=r}))}getSubGroups(){return j(this,void 0,void 0,(function*(){const e=yield(0,l.U)();let t=[];if(null===e)t.push({id:0,subgroup:"**NOT FOUND**",date:new Date});else if(!0===e.response.success&&"length"in e.response.data){const r=e.response.data.map((e=>v.e.toSubGroupModel(JSON.stringify(e))));t=r}const r=[];r.push(...this._subgroups,...t),this._subgroups=r}))}submitForm(e){return j(this,void 0,void 0,(function*(){if(e.preventDefault(),"true"===this.edit&&this.isEditable){const e=this.clientUserGroupSubgroup,t=e.data,r=Array.isArray(t)?t[0]:t;if(e.success)try{yield function(e){return m(this,void 0,void 0,(function*(){const t=(0,a.Ie)(),r=d.t.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup/"+e,o=document.querySelector('[make-general-posts="client-user-group-subgroup"]'),n=new FormData(o);return p().fire({title:"Update user group(s)/ subgroup(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,h.d)(r,{method:"PUT",body:n,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,o),r=t.response;if("nameError"in r&&"unknownError"in r&&r.unknownError.length>0){let e=[];r.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,f.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&p().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(r.id)}catch(e){yield function(){return g(this,void 0,void 0,(function*(){const e=(0,a.Ie)(),t=d.t.URLS.AKWAABA_API_BASE_URL+"clients/user-group-subgroup",r=document.querySelector('[make-general-posts="client-user-group-subgroup"]'),o=new FormData(r);return p().fire({title:"Add group(s)/ subgroup(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:n=>g(this,void 0,void 0,(function*(){return yield(0,h.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new y.H("post",e,!1,r),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((r=>{let o={error:t.id+": "+r};"non_field_errors"===t.id&&(o={error:r}),e.push(o)}))}));const t=(0,f.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",r=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),r=o.response.success}r&&p().fire({title:t,icon:r?"success":"error",iconColor:r?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),r&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}}}))}createRenderRoot(){return this}};A.styles=[o.iv`
   :host { display: block; }
  `],S([(0,n.Cb)({type:Number}),w("design:type",Number)],A.prototype,"userId",void 0),S([(0,n.Cb)({type:String}),w("design:type",String)],A.prototype,"edit",void 0),S([(0,n.Cb)({type:Boolean}),w("design:type",Boolean)],A.prototype,"editAccess",void 0),S([(0,n.Cb)({type:Boolean}),w("design:type",Boolean)],A.prototype,"isEditable",void 0),S([(0,n.Cb)({type:String}),w("design:type",String)],A.prototype,"page_type",void 0),S([(0,n.Cb)({type:Array}),w("design:type",Array)],A.prototype,"_branches",void 0),S([(0,n.Cb)({type:Array}),w("design:type",Array)],A.prototype,"_groups",void 0),S([(0,n.Cb)({type:Array}),w("design:type",Array)],A.prototype,"_subgroups",void 0),S([(0,n.Cb)({type:Array}),w("design:type",Array)],A.prototype,"_activeBranchId",void 0),S([(0,n.Cb)({type:Array}),w("design:type",Array)],A.prototype,"_userLoginInfo",void 0),A=S([(0,n.Mo)("pdb-admin-user-group-subgroup-form"),w("design:paramtypes",[])],A)},1710:(e,t,r)=>{r.d(t,{W:()=>o});const o={view:25,create:26,update:27}},4232:(e,t,r)=>{r.d(t,{OR:()=>i,hl:()=>c,pt:()=>s});var o=r(3692);const{I:n}=o.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,i=e=>void 0===e.strings,a={},c=(e,t=a)=>e._$AH=t},8082:(e,t,r)=>{r.d(t,{XM:()=>o.XM,Xe:()=>o.Xe,pX:()=>o.pX});var o=r(875)},3669:(e,t,r)=>{r.d(t,{a:()=>i});var o=r(3692),n=r(875),s=r(4232);const i=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.PROPERTY&&e.type!==n.pX.ATTRIBUTE&&e.type!==n.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===o.Jb||t===o.Ld)return t;const r=e.element,i=e.name;if(e.type===n.pX.PROPERTY){if(t===r[i])return o.Jb}else if(e.type===n.pX.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return o.Jb}else if(e.type===n.pX.ATTRIBUTE&&r.getAttribute(i)===t+"")return o.Jb;return(0,s.hl)(e),t}})}}]);
//# sourceMappingURL=1868.js.map