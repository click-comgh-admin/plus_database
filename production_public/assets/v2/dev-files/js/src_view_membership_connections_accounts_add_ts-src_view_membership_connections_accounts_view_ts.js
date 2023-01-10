"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_membership_connections_accounts_add_ts-src_view_membership_connections_accounts_view_ts"],{3076:(e,t,n)=>{n.r(t)},9194:(e,t,n)=>{function o(e){return{id:Number(e.id),type:String(e.type),clientId:Number(e.clientId),description:String(e.description),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),lastUpdatedBy:Number(e.lastUpdatedBy),lastUpdateDate:new Date(e.lastUpdateDate)}}n.r(t),n.d(t,{UserConnectionType_S:()=>o})},312:(e,t,n)=>{n.r(t),n.d(t,{POST_UserConnectionAccount:()=>u});var o=n(6455),r=n.n(o),c=n(8485),s=n(7270),i=n(4492),a=n(8967),l=n(3600),d=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};function u(){return d(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-account",n=document.querySelector('[make-general-posts="user-connection-account"]'),o=new FormData(n);return r().fire({title:"Add Connection?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:c=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new i.NetWorkCallResponses("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2824:(e,t,n)=>{n.r(t),n.d(t,{GET_UserConnectionType:()=>i});var o=n(8485),r=n(7270),c=n(4492),s=n(3600);function i(e=null){return t=this,n=void 0,a=function*(){const t=(0,s.getUserLoginInfoCookie)(),n=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type"+(null===e?"":"/"+e),i=yield(0,r.http)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new c.NetWorkCallResponses("get",i)}catch(e){console.error({error:e});let t=i;return t.error=e,new c.NetWorkCallResponses("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,o){function r(e){try{s(a.next(e))}catch(e){o(e)}}function c(e){try{s(a.throw(e))}catch(e){o(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(r,c)}s((a=a.apply(t,n||[])).next())}));var t,n,i,a}},176:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsAccountsAdd:()=>h}),n(3076);var o=n(5862),r=n(9662),c=(n(3283),n(6034),n(3313),n(789),n(5866),n(312)),s=n(8485),i=n(3600),a=n(9194),l=n(2824),d=n(6246),u=function(e,t,n,o){var r,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,n,s):r(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};let h=class extends o.LitElement{constructor(){super(),this.showing=!1,this.startSearchPage1=0,this.startSearchPage2=0,this._connection_types=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return p(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return o.html`
      ${this.show_form}
      ${""}
    `}get show_form(){let e={};const t=(0,i.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,o.html`
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
                            ajaxFetchUrl="${s.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
                        </div>

                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Connection <span class="text-akwaaba-orange-light">Account to be connected</span></h4>
                          <select-input class="w-100" id="connectionId" name="connectionId" label="Select Connection"
                            .ajaxFetchProcessResponse="${this.processClientUserSearch2}" startSearchPage="${this.startSearchPage2}"
                            .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams2}"
                            ajaxFetchUrl="${s.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
                        </div>
                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Connection Type</h4>
                          <mwc-select name="type" class="w-full" id="type" label="Select Connection Type" outlined required>
                            <mwc-list-item value="0">Select Connection Type</mwc-list-item>
                            ${this._connection_types.map((e=>o.html`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`))}
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
      `}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="memberId"]');let c=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n=(0,d.MembershipUser_S)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};c.includes(o)||c.push(o)}}return{results:c,total:n,totalShowing:r.totalShowing}}processClientUserSearch2(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="connectionId"]');let c=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n=(0,d.MembershipUser_S)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};c.includes(o)||c.push(o)}}return{results:c,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get ajaxFetchUrlParams2(){return[{param:"",value:""}]}getConnectionTypes(){return p(this,void 0,void 0,(function*(){const e=yield(0,l.GET_UserConnectionType)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,a.UserConnectionType_S)(e))));const n=[];n.push(...this._connection_types,...t),this._connection_types=n}))}submitForm(e){return p(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,c.POST_UserConnectionAccount)()}))}firstUpdated(){}createRenderRoot(){return this}};h.styles=[o.css`
   :host { display: block; }
  `],u([(0,r.property)({type:Boolean}),m("design:type",Boolean)],h.prototype,"showing",void 0),u([(0,r.property)({type:Number}),m("design:type",Number)],h.prototype,"startSearchPage1",void 0),u([(0,r.property)({type:Number}),m("design:type",Number)],h.prototype,"startSearchPage2",void 0),u([(0,r.property)({type:Array}),m("design:type",Array)],h.prototype,"_connection_types",void 0),h=u([(0,r.customElement)("pdb-connections-accounts-add"),m("design:paramtypes",[])],h)},9054:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsAccountsView:()=>_});var o,r,c,s=n(5862),i=n(9662),a=(n(3590),n(6413),n(6660),n(8879)),l=n(2368),d=n(8485),u=n(3600),m=n(4672),p=n(3283),h=(n(6883),n(367),n(789),n(5866),n(9194)),f=n(2824),y=n(2351),b=n(6246),v=(n(2715),function(e,t,n,o){var r,c=arguments.length,s=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(t,n,s):r(t,n))||s);return c>3&&s&&Object.defineProperty(t,n,s),s}),g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},w=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}a((o=o.apply(e,t||[])).next())}))};let _=class extends s.LitElement{constructor(){super(),this._connection_accounts=[],this.startSearchPage1=0,this.startSearchPage2=0,this._connection_types=[],this.datatablePathUrl="members/user-connection-account"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return w(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new l.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return null===this._connection_accounts?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_accounts?s.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:s.html`
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
          href="${d.CONSTANTS.URLS.PDB_CLIENT}member/connections/add-connection-account" label="Add Connetion Account">
        </link-button>
        <hr class="my-2" />
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new l.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]})}get filterForm(){let e=s.html``;const t=(0,m.urlQueryParams)(),n="memberId",o="connectionId";let r=null,c=null,i=null,a={};const l=(0,u.getUserLoginInfoCookie)();a.Authorization="Token "+l.token;for(const e in t){let s=String(t[e]);s=""===s?null:s,e===n&&(r=s),e===o&&(c=s),"type"===e&&(i=s)}const p=s.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
        ${(0,y.show_selection_member_id_filter)(Number(r))}
          <select-input class="w-100" id="${n}" name="${n}" label="Select Member"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${a}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${d.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`,h=s.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection</h4>
        ${(0,y.show_selection_member_id_filter)(Number(c))}
          <select-input class="w-100" id="${o}" name="${o}" label="Select Connection"
            .ajaxFetchProcessResponse="${this.processClientUserSearch2}" startSearchPage="${this.startSearchPage2}"
            .ajaxHeader="${a}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams2}"
            ajaxFetchUrl="${d.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`,f=s.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection Type</h4>
        <mwc-select name="type" class="w-full" id="type" label="Select Connection Type" outlined required>
          <mwc-list-item value="0">Select Connection Type</mwc-list-item>
          ${this._connection_types.map((e=>null===i?s.html`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`:Number(i)===e.id?s.html`<mwc-list-item value="${e.id}" selected>${e.type}</mwc-list-item>`:s.html`<mwc-list-item value="${e.id}">${e.type}</mwc-list-item>`))}
        </mwc-select>
      </div>`;return e=s.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
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
    </form>`,e}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="memberId"]');let c=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n=(0,b.MembershipUser_S)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};c.includes(o)||c.push(o)}}return{results:c,total:n,totalShowing:r.totalShowing}}processClientUserSearch2(e,t){t.page=t.page||0;const n=e.count,o=e.results,r=document.querySelector('[id="connectionId"]');let c=[];if(n>0){var s=o;for(let e=0;e<s.length;e++){const t=s[e],n=(0,b.MembershipUser_S)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};c.includes(o)||c.push(o)}}return{results:c,total:n,totalShowing:r.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get ajaxFetchUrlParams2(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get table(){let e=d.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,u.getUserLoginInfoCookie)();return n.Authorization="Token "+o.token,s.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberId,r=n.connectionId;return`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${r.firstname} ${r.middlename}\n              ${r.surname}</p>\n          </div>\n          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${o.firstname} ${o.middlename} ${o.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,t,n){const o=n.type;return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${o.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${o.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,m.urlQueryParams)();let t={};for(const n in e){let o=String(e[n]);"memberId"!==n&&"connectionId"!==n||(t[n]=o)}let n=(0,m.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderClockInInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return w(this,void 0,void 0,(function*(){e.aoData,t.deleteConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}getConnectionTypes(){return w(this,void 0,void 0,(function*(){const e=yield(0,f.GET_UserConnectionType)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,h.UserConnectionType_S)(e))));const n=[];n.push(...this._connection_types,...t),this._connection_types=n}))}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteConnection(e)}))}))}deleteConnection(e){return w(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,a.DELETE_UserConnectionAccount)(t)}))}createRenderRoot(){return this}};_.styles=[s.css`
   :host { display: block; }
  `],v([(0,i.query)('[filter-section-context="btn"]'),g("design:type","function"==typeof(o=void 0!==p.Button&&p.Button)?o:Object)],_.prototype,"filterSectionContextBtn",void 0),v([(0,i.query)('[filter-section-context="container"]'),g("design:type","function"==typeof(r="undefined"!=typeof Element&&Element)?r:Object)],_.prototype,"filterSectionContextContainer",void 0),v([(0,i.query)('[make-general-posts="submit_filter_form"]'),g("design:type","function"==typeof(c="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?c:Object)],_.prototype,"filterSectionContextForm",void 0),v([(0,i.property)({type:Array}),g("design:type",Array)],_.prototype,"_connection_accounts",void 0),v([(0,i.property)({type:Number}),g("design:type",Number)],_.prototype,"startSearchPage1",void 0),v([(0,i.property)({type:Number}),g("design:type",Number)],_.prototype,"startSearchPage2",void 0),v([(0,i.property)({type:Array}),g("design:type",Array)],_.prototype,"_connection_types",void 0),v([(0,i.property)({type:String}),g("design:type",String)],_.prototype,"datatablePathUrl",void 0),_=v([(0,i.customElement)("pdb-connections-accounts-view"),g("design:paramtypes",[])],_)}}]);
//# sourceMappingURL=src_view_membership_connections_accounts_add_ts-src_view_membership_connections_accounts_view_ts.js.map