"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9061],{9595:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsConnections:()=>f});var o=n(9392),c=n(1936),i=(n(9848),n(3683),n(4657),n(9665)),r=n(2145),s=n(1302),a=n(5943),l=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},d=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let f=class extends o.oi{constructor(){super(),this._hasSetup=!1}connectedCallback(){super.connectedCallback(),(0,i.f)().then((()=>this._hasSetup=!0))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,r.H)())||void 0===e?void 0:e.expiration_date.expired)return o.dy`<account-expired-component></account-expired-component>`;if(!(0,s.H)({pageId:a.W.user_connections,viewType:"View"},!1))return o.dy`<no-page-entry-component></no-page-entry-component>`}return o.dy`
      <div class="flex flex-col shadow bg-white my-2 p-2">
        <pdb-connections-connections-view class="my-1"></pdb-connections-connections-view>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};f.styles=[o.iv`
   :host { display: block; }
  `],l([(0,c.Cb)({type:Boolean}),d("design:type",Boolean)],f.prototype,"_hasSetup",void 0),f=l([(0,c.Mo)("pdb-connections-connections"),d("design:paramtypes",[])],f)},9848:(e,t,n)=>{var o,c,i,r=n(9392),s=n(1936),a=(n(1239),n(934),n(8879)),l=n(2368),d=n(771),f=n(3600),p=n(4672),u=n(5248),m=(n(6883),n(9261),n(5866),n(3114)),h=n(6656),b=n(2351),y=function(e,t,n,o){var c,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(r=(i<3?c(r):i>3?c(t,n,r):c(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,n,o){return new(n||(n=Promise))((function(c,i){function r(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}a((o=o.apply(e,t||[])).next())}))};let g=class extends r.oi{constructor(){super(),this._connection_accounts=[],this.startSearchPage1=0,this.datatablePathUrl="members/user-connection-account/connection/"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new l.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},isOpen:!0})}))}disconnectedCallback(){}render(){return null===this._connection_accounts?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_accounts?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
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
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new l.L({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[],isOpen:!0})}get filterForm(){let e=r.dy``;const t=(0,p.O1)(),n="connectionId";let o=0,c={};const i=(0,f.Ie)();c.Authorization="Token "+i.token;for(const e in t){let c=Number(t[e]);c=Number.isNaN(c)?0:c,e===n&&(o=c)}const s=r.dy`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection</h4>
          ${(0,b.x)(o)}
          <select-input class="w-100" id="${n}" name="${n}" label="Select Connection"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${c}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${d.t.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;return e=r.dy`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${s}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`,e}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,o=e.results,c=document.querySelector('[id="connectionId"]');let i=[];if(n>0){var r=o;for(let e=0;e<r.length;e++){const t=r[e],n=(0,m.Z)(t),o={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};i.includes(o)||i.push(o)}}return{results:i,total:n,totalShowing:c.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get getConnectionId(){let e=(0,p.Jx)("connectionId");return Number.isNaN(e)?0:Number(e)}get table(){let e=d.t.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+this.getConnectionId+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const o=(0,f.Ie)();return n.Authorization="Token "+o.token,r.dy`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const o=n.memberId,c=n.connectionId;return`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${c.firstname} ${c.middlename}\n              ${c.surname}</p>\n          </div>\n          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${o.firstname} ${o.middlename} ${o.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,t,n){const o=n.type;return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${o.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${o.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,p.O1)();let t={};for(const n in e){let o=String(e[n]);"connectionId"===n&&(t[n]=o)}let n=(0,p.W3)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,o)=>t.renderMemberInfo(e,n,o),orderable:!0},{data:"inTime",render:(e,n,o)=>t.renderClockInInfo(e,n,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return x(this,void 0,void 0,(function*(){e.aoData,t.deleteConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteConnection(e)}))}))}deleteConnection(e){return x(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,a.y)(t)}))}getMember(e){return x(this,void 0,void 0,(function*(){const t=yield(0,h.E)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,m.Z)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};g.styles=[r.iv`
   :host { display: block; }
  `],y([(0,s.IO)('[filter-section-context="btn"]'),v("design:type","function"==typeof(o=void 0!==u.z&&u.z)?o:Object)],g.prototype,"filterSectionContextBtn",void 0),y([(0,s.IO)('[filter-section-context="container"]'),v("design:type","function"==typeof(c="undefined"!=typeof Element&&Element)?c:Object)],g.prototype,"filterSectionContextContainer",void 0),y([(0,s.IO)('[make-general-posts="submit_filter_form"]'),v("design:type","function"==typeof(i="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?i:Object)],g.prototype,"filterSectionContextForm",void 0),y([(0,s.Cb)({type:Array}),v("design:type",Array)],g.prototype,"_connection_accounts",void 0),y([(0,s.Cb)({type:Number}),v("design:type",Number)],g.prototype,"startSearchPage1",void 0),y([(0,s.Cb)({type:String}),v("design:type",String)],g.prototype,"datatablePathUrl",void 0),g=y([(0,s.Mo)("pdb-connections-connections-view"),v("design:paramtypes",[])],g)}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,6553,1454,7147,3712],(()=>(9595,e(e.s=9595)))),e.O())])));
//# sourceMappingURL=connection.js.map