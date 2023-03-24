/*! For license information please see 9162.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9162],{9194:(e,t,n)=>{function o(e){return{id:Number(e.id),type:String(e.type),clientId:Number(e.clientId),description:String(e.description),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),lastUpdatedBy:Number(e.lastUpdatedBy),lastUpdateDate:new Date(e.lastUpdateDate)}}n.d(t,{m:()=>o})},2824:(e,t,n)=>{n.d(t,{d:()=>i});var o=n(771),c=n(7270),r=n(596),s=n(3600);function i(e=null){return t=this,n=void 0,a=function*(){const t=(0,s.Ie)(),n=o.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type"+(null===e?"":"/"+e),i=yield(0,c.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new r.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,o){function c(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(c,r)}s((a=a.apply(t,n||[])).next())}));var t,n,i,a}},9148:(e,t,n)=>{var o=n(5862),c=n(8393),r=(n(5248),n(2935),n(3313),n(9261),n(5866),n(6455)),s=n.n(r),i=n(771),a=n(7270),l=n(596),d=n(8967),u=n(3600),m=function(e,t,n,o){return new(n||(n=Promise))((function(c,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function i(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))},p=n(9194),h=n(2824),f=n(3114),y=function(e,t,n,o){var c,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(s=(r<3?c(s):r>3?c(t,n,s):c(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,n,o){return new(n||(n=Promise))((function(c,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function i(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};let g=class extends o.oi{constructor(){super(),this.showing=!1,this.startSearchPage1=0,this.startSearchPage2=0,this._connection_types=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return o.dy`
      ${this.show_form}
      ${""}
    `}get show_form(){let e={};const t=(0,u.Ie)();return e.Authorization="Token "+t.token,o.dy`
        <div class="">
          <div class="form-container">
            <div class=" !px-0">
              <div class="-row !px-0">
                <div class="-col-md-12">
                  <header class="header warning -col-md-12">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">New Connection Type</h1>
                      <h3 class="h3">Create New Connection Type!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-account">
                    <div class="container my-4">
                      <div class="row justify-center">

                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Member</h4>
                          <select-input class="w-100" id="memberId" name="memberId" label="Select Member"
                            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
                            .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
                            ajaxFetchUrl="${i.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
                        </div>

                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Connection <span class="text-akwaaba-orange-light">Account to be connected</span></h4>
                          <select-input class="w-100" id="connectionId" name="connectionId" label="Select Connection"
                            .ajaxFetchProcessResponse="${this.processClientUserSearch2}" startSearchPage="${this.startSearchPage2}"
                            .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams2}"
                            ajaxFetchUrl="${i.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
                        </div>
                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Connection Type</h4>
                          <mwc-select name="type" class="w-full" id="type" label="Select Connection Type" outlined required>
                            <mwc-list-item value="0">Select Connection Type</mwc-list-item>
                            ${this._connection_types.map((e=>o.dy`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`))}
                          </mwc-select>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Add Connection" raised class="button" @click="${this.submitForm}">
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
        </div>
      `}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,c=document.querySelector('[id="memberId"]');let r=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n=(0,f.Z)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};r.includes(o)||r.push(o)}}return{results:r,total:n,totalShowing:c.totalShowing}}processClientUserSearch2(e,t){t.page=t.page||0;const n=e.count,o=e.results,c=document.querySelector('[id="connectionId"]');let r=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n=(0,f.Z)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};r.includes(o)||r.push(o)}}return{results:r,total:n,totalShowing:c.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get ajaxFetchUrlParams2(){return[{param:"",value:""}]}getConnectionTypes(){return v(this,void 0,void 0,(function*(){const e=yield(0,h.d)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,p.m)(e))));const n=[];n.push(...this._connection_types,...t),this._connection_types=n}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),yield function(){return m(this,void 0,void 0,(function*(){const e=(0,u.Ie)(),t=i.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-account",n=document.querySelector('[make-general-posts="user-connection-account"]'),o=new FormData(n);return s().fire({title:"Add Connection?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:c=>m(this,void 0,void 0,(function*(){return yield(0,a.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,d.T)(e);s().showValidationMessage(`${t}`)}return t})).catch((e=>{s().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!s().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&s().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()}))}firstUpdated(){}createRenderRoot(){return this}};g.styles=[o.iv`
   :host { display: block; }
  `],y([(0,c.Cb)({type:Boolean}),b("design:type",Boolean)],g.prototype,"showing",void 0),y([(0,c.Cb)({type:Number}),b("design:type",Number)],g.prototype,"startSearchPage1",void 0),y([(0,c.Cb)({type:Number}),b("design:type",Number)],g.prototype,"startSearchPage2",void 0),y([(0,c.Cb)({type:Array}),b("design:type",Array)],g.prototype,"_connection_types",void 0),g=y([(0,c.Mo)("pdb-connections-accounts-add"),b("design:paramtypes",[])],g)},9054:(e,t,n)=>{var o,c,r,s=n(5862),i=n(8393),a=(n(1239),n(934),n(8879)),l=n(2368),d=n(771),u=n(3600),m=n(4672),p=n(5248),h=(n(6883),n(9261),n(5866),n(9194)),f=n(2824),y=n(2351),b=n(3114),v=(n(2715),function(e,t,n,o){var c,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(s=(r<3?c(s):r>3?c(t,n,s):c(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s}),g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,n,o){return new(n||(n=Promise))((function(c,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function i(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};let x=class extends s.oi{constructor(){super(),this._connection_accounts=[],this.startSearchPage1=0,this.startSearchPage2=0,this._connection_types=[],this.datatablePathUrl="members/user-connection-account"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new l.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return null===this._connection_accounts?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_accounts?s.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:s.dy`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1 overflow-x-scroll">
        <hr class="my-2" />
        <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2" 
          href="${d.t.URLS.PDB_CLIENT}member/connections/add-connection-account" label="Add Connetion Account">
        </link-button>
        <hr class="my-2" />
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new l.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]})}get filterForm(){let e=s.dy``;const t=(0,m.O1)(),n="memberId",o="connectionId";let c=null,r=null,i=null,a={};const l=(0,u.Ie)();a.Authorization="Token "+l.token;for(const e in t){let s=String(t[e]);s=""===s?null:s,e===n&&(c=s),e===o&&(r=s),"type"===e&&(i=s)}const p=s.dy`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
        ${(0,y.x)(Number(c))}
          <select-input class="w-100" id="${n}" name="${n}" label="Select Member"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${a}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${d.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`,h=s.dy`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection</h4>
        ${(0,y.x)(Number(r))}
          <select-input class="w-100" id="${o}" name="${o}" label="Select Connection"
            .ajaxFetchProcessResponse="${this.processClientUserSearch2}" startSearchPage="${this.startSearchPage2}"
            .ajaxHeader="${a}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams2}"
            ajaxFetchUrl="${d.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`,f=s.dy`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection Type</h4>
        <mwc-select name="type" class="w-full" id="type" label="Select Connection Type" outlined required>
          <mwc-list-item value="0">Select Connection Type</mwc-list-item>
          ${this._connection_types.map((e=>null===i?s.dy`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`:Number(i)===e.id?s.dy`<mwc-list-item value="${e.id}" selected>${e.type}</mwc-list-item>`:s.dy`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`))}
        </mwc-select>
      </div>`;return e=s.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${p} ${h} ${f}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`,e}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,c=document.querySelector('[id="memberId"]');let r=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n=(0,b.Z)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};r.includes(o)||r.push(o)}}return{results:r,total:n,totalShowing:c.totalShowing}}processClientUserSearch2(e,t){t.page=t.page||0;const n=e.count,o=e.results,c=document.querySelector('[id="connectionId"]');let r=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n=(0,b.Z)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};r.includes(o)||r.push(o)}}return{results:r,total:n,totalShowing:c.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get ajaxFetchUrlParams2(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get table(){let e=d.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,u.Ie)();return n.Authorization="Token "+o.token,s.dy`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberId,c=n.connectionId;return`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${c.firstname} ${c.middlename}\n              ${c.surname}</p>\n          </div>\n          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${o.firstname} ${o.middlename} ${o.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,t,n){const o=n.type;return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${o.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${o.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,m.O1)();let t={};for(const n in e){let o=String(e[n]);"memberId"!==n&&"connectionId"!==n||(t[n]=o)}let n=(0,m.W3)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderClockInInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return w(this,void 0,void 0,(function*(){e.aoData,t.deleteConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}getConnectionTypes(){return w(this,void 0,void 0,(function*(){const e=yield(0,f.d)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,h.m)(e))));const n=[];n.push(...this._connection_types,...t),this._connection_types=n}))}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteConnection(e)}))}))}deleteConnection(e){return w(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,a.y)(t)}))}createRenderRoot(){return this}};x.styles=[s.iv`
   :host { display: block; }
  `],v([(0,i.IO)('[filter-section-context="btn"]'),g("design:type","function"==typeof(o=void 0!==p.z&&p.z)?o:Object)],x.prototype,"filterSectionContextBtn",void 0),v([(0,i.IO)('[filter-section-context="container"]'),g("design:type","function"==typeof(c="undefined"!=typeof Element&&Element)?c:Object)],x.prototype,"filterSectionContextContainer",void 0),v([(0,i.IO)('[make-general-posts="submit_filter_form"]'),g("design:type","function"==typeof(r="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?r:Object)],x.prototype,"filterSectionContextForm",void 0),v([(0,i.Cb)({type:Array}),g("design:type",Array)],x.prototype,"_connection_accounts",void 0),v([(0,i.Cb)({type:Number}),g("design:type",Number)],x.prototype,"startSearchPage1",void 0),v([(0,i.Cb)({type:Number}),g("design:type",Number)],x.prototype,"startSearchPage2",void 0),v([(0,i.Cb)({type:Array}),g("design:type",Array)],x.prototype,"_connection_types",void 0),v([(0,i.Cb)({type:String}),g("design:type",String)],x.prototype,"datatablePathUrl",void 0),x=v([(0,i.Mo)("pdb-connections-accounts-view"),g("design:paramtypes",[])],x)},3669:(e,t,n)=>{n.d(t,{a:()=>s});var o=n(3692),c=n(875),r=n(4232);const s=(0,c.XM)(class extends c.Xe{constructor(e){if(super(e),e.type!==c.pX.PROPERTY&&e.type!==c.pX.ATTRIBUTE&&e.type!==c.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===o.Jb||t===o.Ld)return t;const n=e.element,s=e.name;if(e.type===c.pX.PROPERTY){if(t===n[s])return o.Jb}else if(e.type===c.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(s))return o.Jb}else if(e.type===c.pX.ATTRIBUTE&&n.getAttribute(s)===t+"")return o.Jb;return(0,r.hl)(e),t}})}}]);
//# sourceMappingURL=9162.js.map