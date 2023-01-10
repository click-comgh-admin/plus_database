"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[822],{2368:(e,t,i)=>{i.d(t,{L:()=>a});var n=i(4672);class a{constructor(e){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=e=>{var t,i;e.preventDefault();const n=window.FilterFieldBox.form,a=new FormData(n),r=null===(t=this.unmutableInputNames)||void 0===t?void 0:t.map((e=>e.name));null==a||a.forEach(((e,t)=>{var i;(null==r?void 0:r.includes(t))||null===(i=document.querySelectorAll('[name="'+t+'"]'))||void 0===i||i.forEach((e=>{e.value=""}))})),null===(i=this.unmutableInputNames)||void 0===i||i.map((e=>{var t;const i=e.name,n=e.value;void 0!==n&&(null===(t=document.querySelectorAll('[name="'+i+'"]'))||void 0===t||t.forEach((e=>{e.value=n})))})),n.submit()},this.constructorInit=e;const t=e.selectors;this.form=t.form,this.container=t.container,this.filterSectionContextBtn=t.filterSectionContextBtn,this.unmutableInputNames=e.unmutableInputNames,this.__filtering__open_default=e.isOpen,this.__filtering__=(0,n.Jx)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(e){e.preventDefault();const t=window.FilterFieldBox;if(t.__allowed){const e=t.filterSectionContextBtn,i=t.container;i.hasAttribute("hidden")?(i.removeAttribute("hidden"),e.setAttribute("class","warning mt-1"),e.setAttribute("icon","close_fullscreen")):(i.setAttribute("hidden",""),e.setAttribute("class","primary mt-1"),e.setAttribute("icon","open_with"))}}addfilterCheckInput(){const e=window.FilterFieldBox.form,t=document.createElement("input");t.type="hidden",t.value="true",t.name=this.filtering,e.appendChild(t)}toggleFilterFieldsDefault(){const e=this;function t(){e.container.hasAttribute("hidden")&&e.filterSectionContextBtn.click()}"true"===this.__filtering__&&t(),this.__filtering__open_default&&t()}submit(e){e.preventDefault(),window.FilterFieldBox.form.submit()}}},2869:(e,t,i)=>{function n(e){return{id:Number(e.id),name:e.name}}i.d(t,{y:()=>n})},5069:(e,t,i)=>{function n(e){return{id:Number(e.id),name:e.name}}i.d(t,{w:()=>n})},3437:(e,t,i)=>{i.d(t,{C:()=>a});var n=i(267);function a(e){return{id:Number(e.id),clientId:Number(e.clientId),group:String(e.group),branchId:Number(e.branchId),memberCategoryId:(0,n.Y)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},660:(e,t,i)=>{i.d(t,{P:()=>a}),i(2892);var n=i(267);function a(e){const t=e.groupId;return{id:Number(e.id),clientId:Number(e.clientId),groupId:Number(t.id),groupName:String(t.group),subgroup:String(e.subgroup),branchId:Number(e.branchId),memberCategoryId:(0,n.Y)(e.memberCategoryId),createdBy:Number(e.createdBy),updatedBy:Number(e.updatedBy),date:new Date(e.date),updateDate:new Date(e.updateDate)}}},1148:(e,t,i)=>{i.d(t,{e:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null){return t=this,i=void 0,o=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),l=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function a(e){try{s(o.next(e))}catch(e){n(e)}}function r(e){try{s(o.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(a,r)}s((o=o.apply(t,i||[])).next())}));var t,i,l,o}},8698:(e,t,i)=>{i.d(t,{R:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null,t=""){return i=this,l=void 0,c=function*(){const i=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,o=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}r((c=c.apply(i,l||[])).next())}));var i,l,o,c}},7824:(e,t,i)=>{i.d(t,{E:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null,t=""){return i=this,l=void 0,c=function*(){const i=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,o=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}r((c=c.apply(i,l||[])).next())}));var i,l,o,c}},4843:(e,t,i)=>{i.d(t,{S:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null,t=""){return i=this,l=void 0,c=function*(){const i=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,o=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}r((c=c.apply(i,l||[])).next())}));var i,l,o,c}},2218:(e,t,i)=>{i.d(t,{u:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null,t=""){return i=this,l=void 0,c=function*(){const i=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,o=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}r((c=c.apply(i,l||[])).next())}));var i,l,o,c}},8786:(e,t,i)=>{i.d(t,{s:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null,t=""){return i=this,l=void 0,c=function*(){const i=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,o=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}r((c=c.apply(i,l||[])).next())}));var i,l,o,c}},7553:(e,t,i)=>{i.d(t,{q:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null){return t=this,i=void 0,o=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"generic/gender"+(null===e?"":"/"+e),l=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function a(e){try{s(o.next(e))}catch(e){n(e)}}function r(e){try{s(o.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(a,r)}s((o=o.apply(t,i||[])).next())}));var t,i,l,o}},4115:(e,t,i)=>{i.d(t,{d:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null){return t=this,i=void 0,o=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"generic/meeting-event/clocking-type"+(null===e?"":"/"+e),l=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function a(e){try{s(o.next(e))}catch(e){n(e)}}function r(e){try{s(o.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(a,r)}s((o=o.apply(t,i||[])).next())}));var t,i,l,o}},2892:(e,t,i)=>{i.d(t,{c:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null,t=""){return i=this,l=void 0,c=function*(){const i=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,o=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}r((c=c.apply(i,l||[])).next())}));var i,l,o,c}},72:(e,t,i)=>{i.d(t,{L:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null){return t=this,i=void 0,o=function*(){const t=(0,s.Ie)(),i=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/member-category"+(null===e?"":"/"+e),l=yield(0,a.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",l)}catch(e){console.error({error:e});let t=l;return t.error=e,new r.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,n){function a(e){try{s(o.next(e))}catch(e){n(e)}}function r(e){try{s(o.throw(e))}catch(e){n(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof l?i:new l((function(e){e(i)}))).then(a,r)}s((o=o.apply(t,i||[])).next())}));var t,i,l,o}},9605:(e,t,i)=>{i.d(t,{U:()=>l});var n=i(771),a=i(7270),r=i(596),s=i(3600);function l(e=null,t=""){return i=this,l=void 0,c=function*(){const i=(0,s.Ie)(),l=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,o=yield(0,a.d)(l,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",o)}catch(e){console.error({error:e});let t=o;return t.error=e,new r.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{r(c.next(e))}catch(e){t(e)}}function a(e){try{r(c.throw(e))}catch(e){t(e)}}function r(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}r((c=c.apply(i,l||[])).next())}));var i,l,o,c}},6883:(e,t,i)=>{var n,a=i(9392),r=i(1936),s=function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.dy`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return a.dy`
      ${this.dt_head.map((e=>a.dy`<th>${e.title}</th>`))}
    `}tbody(){return a.dy`
      ${this.dt_body.map((e=>a.dy`<tr>${e.map((e=>a.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return a.dy`
    ${this.dt_foot.map((e=>a.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const i=this.ajaxHeader[e];t[e]=i}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};o.styles=[a.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],s([(0,r.Cb)({type:Number}),l("design:type",Number)],o.prototype,"randomID1",void 0),s([(0,r.Cb)({type:Number}),l("design:type",Number)],o.prototype,"randomID2",void 0),s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"ID",void 0),s([(0,r.Cb)({type:Object}),l("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],o.prototype,"datatable",void 0),s([(0,r.Cb)({type:Array}),l("design:type",Array)],o.prototype,"dt_head",void 0),s([(0,r.Cb)({type:Array}),l("design:type",Array)],o.prototype,"dt_foot",void 0),s([(0,r.Cb)({type:Array}),l("design:type",Array)],o.prototype,"dt_body",void 0),s([(0,r.Cb)(),l("design:type",Object)],o.prototype,"ajaxHeader",void 0),o=s([(0,r.Mo)("datatables-new"),l("design:paramtypes",[])],o)},5866:(e,t,i)=>{var n=i(9755),a=i(9392),r=i(1936),s=(i(686),function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=n(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let i=!1;return this.value.forEach((e=>{const n=e.id;i=t===n})),e.selected=i,e}))}render(){return this.multiple?this.required?a.dy`
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
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:n(this.value.map((t=>{const i=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+i+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const i=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,n(".select2-search__field").on("keyup",(function(e){n(i.selectSelector).empty(),i.startSearchPage=0})),i.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,i=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{n(e).select2({closeOnSelect:!1,placeholder:this.label}),n(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let a={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)a[e]=this.ajaxHeader[e];this.selectSelector.forEach((r=>{n(r).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(a){const r=function(a,r){return i=isNaN(a.page)?0:a.page,i=0===i?i:i*t,n(".select2-search__field").on("keyup",(function(a){n(e.selectSelector).empty(),i=0,t=0})),i}(a),s=function(i,a){let r=isNaN(i.page)?1:i.page+1;return r=0===r?1:r,n(".select2-search__field").on("keyup",(function(i){n(e.selectSelector).empty(),r=0,t=0})),r}(a);let l={search:a.term,start:r,page:s};return e.ajaxFetchUrlParams.forEach((e=>{l[e.param]=e.value})),l},headers:a,processResults:(e,i)=>{const n=null===this.ajaxFetchProcessResponse?this._processResults(e,i):this.ajaxFetchProcessResponse(e,i);return t+=n.results.length,{results:n.results,pagination:{more:t<n.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{i=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const i=e;t.page=t.page||0;let n=[];if(!1===i.error){var a=i.data;for(let e=0;e<a.length;e++){const t=a[e],i={id:t.id,text:t.fullName};n.includes(i)||n.push(i)}}return this.totalShowing+=n.length,{results:n,total:i.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let i=[];for(const e of t){let t=e;const n=Number.isNaN(t.value)?0:Number(t.value);i.includes(n)||i.push(n)}this.currentValue=i,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",i)}createRenderRoot(){return this}};o.styles=[a.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"name",void 0),s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"label",void 0),s([(0,r.Cb)({type:Array}),l("design:type",Array)],o.prototype,"value",void 0),s([(0,r.Cb)({type:Number}),l("design:type",Number)],o.prototype,"randomID",void 0),s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"input_id",void 0),s([(0,r.Cb)({type:Array}),l("design:type",Array)],o.prototype,"options",void 0),s([(0,r.Cb)({type:Boolean}),l("design:type",Boolean)],o.prototype,"required",void 0),s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"ajaxFetchToken",void 0),s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"ajaxFetchUrl",void 0),s([(0,r.Cb)({attribute:!1}),l("design:type",Object)],o.prototype,"currentValue",void 0),s([(0,r.Cb)({type:Object}),l("design:type",Function)],o.prototype,"ajaxFetchProcessResponse",void 0),s([(0,r.Cb)({type:Array}),l("design:type",Array)],o.prototype,"ajaxFetchUrlParams",void 0),s([(0,r.Cb)({type:Number}),l("design:type",Number)],o.prototype,"startSearchPage",void 0),s([(0,r.Cb)({type:Boolean}),l("design:type",Boolean)],o.prototype,"multiple",void 0),s([(0,r.Cb)({type:Number}),l("design:type",Number)],o.prototype,"startNumber",void 0),s([(0,r.Cb)({type:Number}),l("design:type",Number)],o.prototype,"rowsPerPage",void 0),s([(0,r.Cb)({type:Number}),l("design:type",Number)],o.prototype,"totalShowing",void 0),s([(0,r.Cb)({type:Boolean}),l("design:type",Boolean)],o.prototype,"showSelectorLoaded",void 0),o=s([(0,r.Mo)("select-input")],o)},3690:(e,t,i)=>{var n=i(9392),a=i(1936),r=(i(5185),i(5142),function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.dy`
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
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[n.iv`
      :host {
        display: block;
      }
    `],r([(0,a.Cb)({type:String}),s("design:type",String)],l.prototype,"name",void 0),r([(0,a.Cb)({type:String}),s("design:type",String)],l.prototype,"label",void 0),r([(0,a.Cb)({type:Boolean}),s("design:type",Boolean)],l.prototype,"selected",void 0),r([(0,a.Cb)({type:String}),s("design:type",String)],l.prototype,"value",void 0),r([(0,a.Cb)({type:Boolean}),s("design:type",Boolean)],l.prototype,"isSelected",void 0),l=r([(0,a.Mo)("switch-input")],l)},8281:(e,t,i)=>{var n=i(771),a=i(9392),r=i(1936),s=function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let o=class extends a.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=n.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};o.styles=[a.iv`
   :host { display: block; }
  `],s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"url",void 0),s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"type",void 0),s([(0,r.Cb)({type:Boolean}),l("design:type",Boolean)],o.prototype,"rounded",void 0),s([(0,r.Cb)({type:String}),l("design:type",String)],o.prototype,"click-to-open",void 0),s([(0,r.Cb)({type:Number}),l("design:type",Number)],o.prototype,"size",void 0),o=s([(0,r.Mo)("user-profile-photo"),l("design:paramtypes",[])],o)},5517:(e,t,i)=>{var n=i(9392),a=i(1936),r=i(7725),s=i(7052),l=i(4672);function o(e){return{id:Number(e.id),page:e.page}}i(6811),i(2715),i(8763),i(1877),i(2169);var c=i(2506),d=i(3600),u=i(5248),h=i(771),p=i(7270),m=i(596);i(3690);var g,y,v,f,b,_=i(1148),w=i(8698),S=i(7824),A=i(5458),$=i(2218),I=function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s},x=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},B=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function s(e){try{o(n.next(e))}catch(e){r(e)}}function l(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}o((n=n.apply(e,t||[])).next())}))};let C=class extends n.oi{constructor(){super(),this.todayDate=this._todayDate(),this.meetingEventId=0,this.loggedUserId=0,this.formId=1,this.allowFetch=!0,this.recurring=!1,this.openContentBaseUrl="/attendance/v2/clocking/clocker?meeting-event-id=",this.openMeetingEventBaseUrl="/attendance/v2/settings/schedule?meeting-event-id=",this._pageAccesses=[],this._activeBranchId=null,this._userLoginInfo=null,this.__meetingEventSchedules=null,this.__scheduleDays=null,this.__scheduleDates=null}_todayDate(e=null){const t=(null===e?new Date:new Date(e)).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric",formatMatcher:"best fit"}).split("/");return[t[2],t[0],t[1]].join("-")}get _meetingEventSchedulesDefault(){return{count:0,next:"",previous:"",results:[]}}set _meetingEventSchedules(e){this.__meetingEventSchedules=e,this.requestUpdate()}get _meetingEventSchedules(){return this.__meetingEventSchedules}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return B(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.getMeetingEventId();const t=(0,r.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,d.Ie)()],yield this.getLoggedUserAccess()}))}disconnectedCallback(){}render(){return n.dy`
      <div class="p-1">
        <div class="my-2 flex flex-col items-end">
          <div class="col-md-6 col-lg-4 flex flex-col items-end">
            <h4 class="font-semibold my-2 capitalize">SHOW RECURRING</h4>
            <switch-input class="capitalize" ?isselected="${this.recurring}" name="recurringSwitchAction"
              label="SHOW RECURRING"></switch-input>
          </div>
          <hr />
        </div>
        <div class="md:hidden block">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today" @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming" @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list"
              id="getAllMeetingsBtn" label="All Meetings" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="md:block hidden">
          <mwc-tab-bar activeIndex="0">
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="notification_important"
              id="getNowMeetingsBtn" label="Now" @click="${this.displayNowMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="calendar_today" id="getTodayMeetingsBtn"
              label="Today's ..." @click="${this.displayTodayMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="timeline" id="getUpcomingMeetingsBtn"
              label="Upcoming ..." @click="${this.displayUpcomingMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="date_range" id="getDateMeetingsBtn"
              label="From Date" @click="${this.displayDateMeetingsSectionBtn}"></mwc-tab>
            <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="filter_list" id="getAllMeetingsBtn"
              label="All" @click="${this.displayAllMeetingsSectionBtn}"></mwc-tab>
          </mwc-tab-bar>
        </div>
      </div>
      ${this.getMeetingSection}
    `}displayNowMeetingsSectionBtn(e){e.preventDefault(),this.formId=1,this.allowFetch=!0,this._meetingEventSchedules=null}displayTodayMeetingsSectionBtn(e){e.preventDefault(),this.formId=2,this.allowFetch=!0,this._meetingEventSchedules=null}displayUpcomingMeetingsSectionBtn(e){e.preventDefault(),this.formId=3,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsSectionBtn(e){e.preventDefault(),this.formId=4,this.allowFetch=!0,this._meetingEventSchedules=null}displayAllMeetingsSectionBtn(e){e.preventDefault(),this.formId=5,this.allowFetch=!0,this._meetingEventSchedules=null}displayDateMeetingsFilterBtn(e){e.preventDefault(),document.querySelectorAll('[id="filter_date"]').forEach((e=>{this.todayDate=this._todayDate(e.value)})),this.allowFetch=!0,this._meetingEventSchedules=null}recurringSwitchAction(){const e=this;document.querySelectorAll('[name="recurringSwitchAction"]').forEach((t=>{t.addEventListener("click",(i=>{e.recurring=t.isSelected,1===e.formId?e.getNowMeetingsBtn.click():2===e.formId?e.getTodayMeetingsBtn.click():3===e.formId?e.getUpcomingMeetingsBtn.click():4===e.formId?e.getDateMeetingsBtn.click():e.getAllMeetingsBtn.click()}))}))}get getMeetingSection(){return 1===this.formId?n.dy`
        ${this.nowSectionData}
      `:2===this.formId?n.dy`
        ${this.todaySectionData}
      `:3===this.formId?n.dy`
        ${this.upcomingSectionData}
      `:4===this.formId?n.dy`
        ${this.dateSectionData}
      `:n.dy`
        ${this.allMeetingsSectionData}
      `}get notFound(){const e=n.dy`<h4 class="text-white">Empty</h4>`,t=n.dy`
      <div>
        <p class="text-black mb-2">No Scheduled Meeting(s)/ Event(s) Found!</p>
        <p class="text-black mb-2"><small>Try again later.</small></p>
      </div>
    `;return n.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}get nowSectionData(){if(this.allowFetch&&this.getAttendanceScheduleNow(),null===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get upcomingSectionData(){if(this.allowFetch&&this.getAttendanceScheduleUpcoming(),null===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get todaySectionData(){if(this.allowFetch&&this.getAttendanceScheduleToday(),null===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return!Array.isArray(e)||e.length<1?this.notFound:n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get dateSectionData(){this.allowFetch&&this.getAttendanceScheduleFromDate();const e=n.dy`
      <div class="my-1 flex flex-col items-end">
        <div class="col-md-6 col-lg-4 flex flex-col items-end">
          <h4 class="font-semibold my-2">Select Date</h4>
          <mwc-textfield name="filter_date" type="date" class="w-full" id="filter_date" label="Select Date"
            value="${this.todayDate}" outlined required>
          </mwc-textfield><br>
          <mwc-button raised label="Filter" @click="${this.displayDateMeetingsFilterBtn}"></mwc-button>
        </div>
      </div>
    `;if(null===this._meetingEventSchedules)return n.dy`
        ${e}
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const t=this._meetingEventSchedules.results;return!Array.isArray(t)||t.length<1?n.dy`${e}${this.notFound}`:n.dy`
      ${e}
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(t)?t.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get allMeetingsSectionData(){if(this.allowFetch&&this.getAttendanceAllSchedules(),null===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;if(void 0===this._meetingEventSchedules)return n.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;const e=this._meetingEventSchedules.results;return n.dy`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Scheduled Meeting(s)/ Event(s)</b>
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
                ${Array.isArray(e)?e.map((e=>this.processSectionRow(e))):n.Ld}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}getTime(e){let t=new Date;const i=e.split(":");return void 0!==i[0]&&t.setHours(Number(i[0])),void 0!==i[1]&&t.setMinutes(Number(i[1])),void 0!==i[2]&&t.setSeconds(Number(i[2])),t.toLocaleTimeString()}processSectionRow(e){const t=e.id,i=(0,s.h)(String(t),!0),a=this.getTime(String(e.startTime)),r=this.getTime(String(e.closeTime));return n.dy`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-start flex-col">
            <a href="${this.openContentBaseUrl}${i}" class="capitalize text-blue-700">Open "${e.name}" Meeting/ Event</a>
            <hr class="my-1"/>
            <p>From: ${a} - To: ${r} </p>
            <hr class="my-1"/>
            <small>${e.isRecuring?(0,A.C)(this.getAttendanceScheduleDay(t),n.dy`<span>Loading...</span>`):(0,A.C)(this.getAttendanceScheduleDate(t),n.dy`<span>Loading...</span>`)}</small>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="flex items-end flex-col">
            <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
              href="${this.openMeetingEventBaseUrl}${t}" label="Open"></link-button>
          </div>
        </td>
      </tr>
    `}firstUpdated(){this.recurringSwitchAction()}getMeetingEventId(){let e=(0,l.Jx)("meeting-event-id"),t=null!==e?(0,s.t)(e):null;this.meetingEventId=Number.isNaN(t)?null:Number(t)}getLoggedUserAccess(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,c.H)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{(e=function(e){return{id:Number(e.id),clientId:e.clientId,userId:e.userId,page:o(e.pageId),isUnlimited:e.isUnlimited,date:new Date(e.date)}}(e)).page.id}))}}))}getAttendanceAllSchedules(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,$.u)(null,"?branchId="+e+"&length=1000000&order__by=-id&isRecuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleNow(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,i=void 0,a=function*(){const t=(0,d.Ie)(),i=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/now"+e,n=yield(0,p.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new m.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new m.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{o(a.next(e))}catch(e){r(e)}}function l(e){try{o(a.throw(e))}catch(e){r(e)}}function o(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,l)}o((a=a.apply(t,i||[])).next())}));var t,i,n,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleUpcoming(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,i=void 0,a=function*(){const t=(0,d.Ie)(),i=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/upcoming"+e,n=yield(0,p.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new m.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new m.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{o(a.next(e))}catch(e){r(e)}}function l(e){try{o(a.throw(e))}catch(e){r(e)}}function o(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,l)}o((a=a.apply(t,i||[])).next())}));var t,i,n,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleToday(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e=""){return t=this,i=void 0,a=function*(){const t=(0,d.Ie)(),i=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/today"+e,n=yield(0,p.d)(i,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new m.H("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new m.H("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,r){function s(e){try{o(a.next(e))}catch(e){r(e)}}function l(e){try{o(a.throw(e))}catch(e){r(e)}}function o(t){var i;t.done?e(t.value):(i=t.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,l)}o((a=a.apply(t,i||[])).next())}));var t,i,n,a}("?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleFromDate(){return B(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield function(e,t=""){return i=this,n=void 0,r=function*(){const i=(0,d.Ie)(),n=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/date/"+e+t,a=yield(0,p.d)(n,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new m.H("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new m.H("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function s(e){try{o(r.next(e))}catch(e){t(e)}}function l(e){try{o(r.throw(e))}catch(e){t(e)}}function o(t){var i;t.done?e(t.value):(i=t.value,i instanceof a?i:new a((function(e){e(i)}))).then(s,l)}o((r=r.apply(i,n||[])).next())}));var i,n,a,r}(this.todayDate,"?branchId="+e+"&length=1000000&order__by=-id&filter_recuring="+String(this.recurring));null===t?this._meetingEventSchedules=void 0:(this._meetingEventSchedules=t.paginResponse,this.allowFetch=!1)}))}getAttendanceScheduleDay(e){return B(this,void 0,void 0,(function*(){const t=yield(0,S.E)(null,"?meetingEventId="+e);if(null!==t){const e=t.response.data;if(Array.isArray(e)){let t=e.map((e=>{const t=Number(e.dayId),i=new Date(e.endDate).toLocaleDateString();return n.dy`<li class="border p-1">Every ${(0,A.C)(this.getDayOfWeek(t),n.dy`<i><small>Getting day of week</small>...</i>`)}, until ${i}</li>`}));return n.dy`
          <h4>Day(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}getDayOfWeek(e){return B(this,void 0,void 0,(function*(){const t=yield(0,_.e)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}getAttendanceScheduleDate(e){return B(this,void 0,void 0,(function*(){const t=yield(0,w.R)(null,"?meetingEventId="+e+"&length=1000");if(null!==t){const e=t.paginResponse.results;if(Array.isArray(e)){let t=e.map((e=>{const t=new Date(e.date).toLocaleDateString();return n.dy`<li class="border p-1">On ${t}</li>`}));return n.dy`
          <h4>Date(s):</h4>
          <ul class="list-disc text-sm">${t}</ul>
        `}}return"???"}))}createRenderRoot(){return this}};C.styles=[n.iv`
   :host { display: block; }
  `],I([(0,a.IO)("#getNowMeetingsBtn"),x("design:type","function"==typeof(g=void 0!==u.z&&u.z)?g:Object)],C.prototype,"getNowMeetingsBtn",void 0),I([(0,a.IO)("#getAllMeetingsBtn"),x("design:type","function"==typeof(y=void 0!==u.z&&u.z)?y:Object)],C.prototype,"getAllMeetingsBtn",void 0),I([(0,a.IO)("#getTodayMeetingsBtn"),x("design:type","function"==typeof(v=void 0!==u.z&&u.z)?v:Object)],C.prototype,"getTodayMeetingsBtn",void 0),I([(0,a.IO)("#getUpcomingMeetingsBtn"),x("design:type","function"==typeof(f=void 0!==u.z&&u.z)?f:Object)],C.prototype,"getUpcomingMeetingsBtn",void 0),I([(0,a.IO)("#getDateMeetingsBtn"),x("design:type","function"==typeof(b=void 0!==u.z&&u.z)?b:Object)],C.prototype,"getDateMeetingsBtn",void 0),I([(0,a.Cb)({type:String}),x("design:type",String)],C.prototype,"todayDate",void 0),I([(0,a.Cb)({type:Number}),x("design:type",Number)],C.prototype,"meetingEventId",void 0),I([(0,a.Cb)({type:Number}),x("design:type",Number)],C.prototype,"loggedUserId",void 0),I([(0,a.Cb)({type:Number}),x("design:type",Number)],C.prototype,"formId",void 0),I([(0,a.Cb)({type:Boolean}),x("design:type",Boolean)],C.prototype,"allowFetch",void 0),I([(0,a.Cb)({type:Boolean}),x("design:type",Boolean)],C.prototype,"recurring",void 0),I([(0,a.Cb)({type:String}),x("design:type",String)],C.prototype,"openContentBaseUrl",void 0),I([(0,a.Cb)({type:String}),x("design:type",String)],C.prototype,"openMeetingEventBaseUrl",void 0),I([(0,a.Cb)({type:Array}),x("design:type",Array)],C.prototype,"_pageAccesses",void 0),I([(0,a.Cb)({type:Array}),x("design:type",Array)],C.prototype,"_activeBranchId",void 0),I([(0,a.Cb)({type:Array}),x("design:type",Array)],C.prototype,"_userLoginInfo",void 0),C=I([(0,a.Mo)("pdb-attendance-clocking-meeting-picker"),x("design:paramtypes",[])],C)},7108:(e,t,i)=>{i.d(t,{W:()=>n});const n={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},3629:(e,t,i)=>{var n,a,r=i(9392),s=i(1936),l=i(72),o=(i(5866),function(e,t,i,n){var a,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,i,n){return new(i||(i=Promise))((function(a,r){function s(e){try{o(n.next(e))}catch(e){r(e)}}function l(e){try{o(n.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}o((n=n.apply(e,t||[])).next())}))};let u=class extends r.oi{constructor(){super(),this.material="true",this.defaultValue=null,this.defaultValues=[],this.setDefaultValues=null,this.selectedCategory=null,this.multiple=!1,this.required=!1,this.label="",this.name="",this.id="",this.tag_class="",this.css_style="",this._memberCategories=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this),setTimeout((()=>{Array.isArray(this.setDefaultValues)||(this.setDefaultValues=[]),null!==this.defaultValue&&(this.setDefaultValues.includes(this.defaultValue)||this.setDefaultValues.push(this.defaultValue)),this.defaultValues.forEach((e=>{this.setDefaultValues.includes(e)||this.setDefaultValues.push(e)}))}),100),yield this.getMemberCategories()}))}disconnectedCallback(){}render(){return"true"===this.material?r.dy`
        ${this.materialSelectField}
      `:r.dy`
        ${this.selectInputField}
      `}get materialSelectField(){var e;return(null===(e=this.setDefaultValues)||void 0===e?void 0:e.length)<1?r.dy`
        <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
          <mwc-list-item value="0">${this.label}</mwc-list-item>
          ${this._memberCategories.map((e=>r.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`))}
        </mwc-select>
      `:r.dy`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((i=>{i===e.id&&(t=!0)})),t?r.dy`<mwc-list-item value="${e.id}" selected>${e.category}</mwc-list-item>`:r.dy`<mwc-list-item value="${e.id}">${e.category}</mwc-list-item>`}))}
      </mwc-select>
    `}get selectInputField(){let e=[{id:0,name:this.label,isSelected:"false",selected:!1}];this._memberCategories.forEach((t=>{let i=!1;this.setDefaultValues.forEach((e=>{e===t.id&&(i=!0)}));let n=!1,a="false";i&&(n=!0,a="true");const r={id:t.id,name:t.category,isSelected:a,selected:n};e.includes(r)||e.push(r)}));let t=r.dy`
      <select-input name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}"
        .options="${e}" outlined ?required="${this.required}" ?multiple="${this.multiple}">
      </select-input>
    `;return r.dy`${t}`}get selectField(){let e=r.dy``;return e=this.setDefaultValues.length<1?r.dy`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>r.dy`<option value="${e.id}">${e.category}</option>`))}
        </select>
      `:r.dy`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((e=>{let t=!1;return this.setDefaultValues.forEach((i=>{i===e.id&&(t=!0)})),t?r.dy`<option value="${e.id}" selected>${e.category}</option>`:r.dy`<option value="${e.id}">${e.category}</option>`}))}
        </select>
      `,r.dy`
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
    `}firstUpdated(){}getMemberCategories(){return d(this,void 0,void 0,(function*(){const e=yield(0,l.L)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const i=[];i.push(...this._memberCategories,...t),this._memberCategories=i}))}changeAction(e){this.selectedCategory=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}createRenderRoot(){return this}};u.styles=[r.iv`
   :host { display: block; }
  `],o([(0,s.Cb)({type:String}),c("design:type",String)],u.prototype,"material",void 0),o([(0,s.Cb)({type:Number}),c("design:type",Number)],u.prototype,"defaultValue",void 0),o([(0,s.Cb)({type:Array}),c("design:type","function"==typeof(n="undefined"!=typeof Array&&Array)?n:Object)],u.prototype,"defaultValues",void 0),o([(0,s.Cb)({type:Array}),c("design:type","function"==typeof(a="undefined"!=typeof Array&&Array)?a:Object)],u.prototype,"setDefaultValues",void 0),o([(0,s.Cb)({type:Number}),c("design:type",Number)],u.prototype,"selectedCategory",void 0),o([(0,s.Cb)({type:Boolean}),c("design:type",Boolean)],u.prototype,"multiple",void 0),o([(0,s.Cb)({type:Boolean}),c("design:type",Boolean)],u.prototype,"required",void 0),o([(0,s.Cb)({type:String}),c("design:type",String)],u.prototype,"label",void 0),o([(0,s.Cb)({type:String}),c("design:type",String)],u.prototype,"name",void 0),o([(0,s.Cb)({type:String}),c("design:type",String)],u.prototype,"id",void 0),o([(0,s.Cb)({type:String}),c("design:type",String)],u.prototype,"tag_class",void 0),o([(0,s.Cb)({type:String}),c("design:type",String)],u.prototype,"css_style",void 0),o([(0,s.Cb)({type:Array}),c("design:type",Array)],u.prototype,"_memberCategories",void 0),u=o([(0,s.Mo)("pdb-membership-select-member-type"),c("design:paramtypes",[])],u)}}]);
//# sourceMappingURL=822.js.map