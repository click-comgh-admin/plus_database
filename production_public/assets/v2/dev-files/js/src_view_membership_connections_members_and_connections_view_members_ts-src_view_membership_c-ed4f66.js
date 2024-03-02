"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_view_membership_connections_members_and_connections_view_members_ts-src_view_membership_c-ed4f66"],{26660:(e,t,n)=>{n.r(t)},8967:(e,t,n)=>{n.r(t),n.d(t,{__swalStyle:()=>r,https_swal_error_format:()=>o});const r="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?r:"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},82486:(e,t,n)=>{n.r(t),n.d(t,{Boolean_I:()=>r});const r=e=>{const t=String(e).toLowerCase();return"1"===t||"true"===t||!0===e}},71801:(e,t,n)=>{n.r(t),n.d(t,{Constituency_S:()=>i,_Constituency_D:()=>s});var r=n(86909),o=n(77202);function i(e){return{id:Number(e.id),regionId:"regionId"in e?(0,o.Region_S)(e.regionId):(0,o._Region_D)(),districtId:"districtId"in e?(0,r.District_S)(e.districtId):(0,r._District_D)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,o._Region_D)(),districtId:(0,r._District_D)(),location:"-"}}},29492:(e,t,n)=>{function r(e){const t=Array.isArray(e)?e[0]:e;return{id:t.id,name:String(t.name),short:String(t.short),code:String(t.code)}}function o(){return{id:0,name:"-",short:"-",code:"-"}}n.r(t),n.d(t,{Country_S:()=>r,_Country_D:()=>o})},86909:(e,t,n)=>{n.r(t),n.d(t,{District_S:()=>o,_District_D:()=>i});var r=n(77202);function o(e){return{id:Number(e.id),regionId:"regionId"in e?(0,r.Region_S)(e.regionId):(0,r._Region_D)(),location:String(e.location)}}function i(){return{id:0,regionId:(0,r._Region_D)(),location:"-"}}},58769:(e,t,n)=>{n.r(t),n.d(t,{ElectoralArea_S:()=>i,_ElectoralArea_D:()=>s});var r=n(86909),o=n(77202);function i(e){return{id:Number(e.id),regionId:"regionId"in e?(0,o.Region_S)(e.regionId):(0,o._Region_D)(),districtId:"districtId"in e?(0,r.District_S)(e.districtId):(0,r._District_D)(),location:String(e.location)}}function s(){return{id:0,regionId:(0,o._Region_D)(),districtId:(0,r._District_D)(),location:"-"}}},77202:(e,t,n)=>{function r(e){return{id:Number(e.id),location:String(e.location)}}function o(){return{id:0,location:"-"}}n.r(t),n.d(t,{Region_S:()=>r,_Region_D:()=>o})},96246:(e,t,n)=>{n.r(t),n.d(t,{MembershipUser_S:()=>d});var r=n(82486),o=n(71801),i=n(29492),s=n(86909),c=n(58769),a=n(77202);function l(e,t=""){return String(null===e?t:e)}function d(e){return{id:Number(e.id),clientId:Number(e.clientId),firstname:String(e.firstname),middlename:l(e.middlename),surname:String(e.surname),gender:Number(e.gender),profilePicture:String(e.profilePicture),dateOfBirth:new Date(e.dateOfBirth),phone:String(e.phone),email:String(e.email),religion:Number(e.religion),nationality:String(e.nationality),countryOfResidence:String(e.countryOfResidence),stateProvince:String(e.stateProvince),region:Number(e.region),district:Number(e.district),constituency:Number(e.constituency),electoralArea:Number(e.electoralArea),community:String(e.community),hometown:String(e.hometown),houseNoDigitalAddress:String(e.houseNoDigitalAddress),digitalAddress:String(e.digitalAddress),referenceId:l(e.referenceId,"-"),accountType:Number(e.accountType),memberType:Number(e.memberType),branchId:Number(e.branchId),editable:(0,r.Boolean_I)(e.editable),profileResume:String(e.profileResume),profileIdentification:String(e.profileIdentification),archived:(0,r.Boolean_I)(e.archived),identification:String(e.identification),level:Number(e.level),status:Number(e.status),lastUpdatedBy:Number(e.lastUpdatedBy),date:new Date(e.date),last_login:new Date(e.last_login),countryInfo:"countryInfo"in e?(0,i.Country_S)(e.countryInfo):(0,i._Country_D)(),regionInfo:"regionInfo"in e?(0,a.Region_S)(e.regionInfo):(0,a._Region_D)(),districtInfo:"districtInfo"in e?(0,s.District_S)(e.districtInfo):(0,s._District_D)(),constituencyInfo:"constituencyInfo"in e?(0,o.Constituency_S)(e.constituencyInfo):(0,o._Constituency_D)(),electoralareaInfo:"electoralareaInfo"in e?(0,c.ElectoralArea_S)(e.electoralareaInfo):(0,c._ElectoralArea_D)()}}},28879:(e,t,n)=>{n.r(t),n.d(t,{DELETE_UserConnectionAccount:()=>u});var r=n(86455),o=n.n(r),i=n(48485),s=n(87270),c=n(14492),a=n(8967),l=n(33600),d=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const t=(0,l.getUserLoginInfoCookie)(),n=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-account/"+e,r={};return o().fire({title:"Remove Connection?",text:"Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(r),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new c.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new c.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},26656:(e,t,n)=>{n.r(t),n.d(t,{GET_MembershipUsers:()=>c});var r=n(48485),o=n(87270),i=n(14492),s=n(33600);function c(e=null,t="",n=!1){return c=this,a=void 0,d=function*(){const c=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,a=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,l=(0,s.getUserLoginInfoCookie)(),d=n?a:c,u=yield(0,o.http)(d,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new i.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function n(e){try{o(d.next(e))}catch(e){t(e)}}function r(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof l?o:new l((function(e){e(o)}))).then(n,r)}o((d=d.apply(c,a||[])).next())}));var c,a,l,d}},32351:(e,t,n)=>{n.r(t),n.d(t,{PdbConnectionsMembersView:()=>S,show_selection_member_id_filter:()=>v});var r,o,i,s=n(85862),c=n(59662),a=(n(33590),n(16413),n(26660),n(28879)),l=n(52368),d=n(48485),u=n(33600),m=n(44672),f=n(23283),h=(n(16883),n(30367),n(40789),n(75866),n(96246)),p=n(26656),_=n(58881),g=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))};function v(e){if(0===e)return s.nothing;{const t=new S;return s.html`
      <h4 class="font-semibold my-2">
        Current Selection: ${(0,_.until)(t.getMember(e),s.html`<span>Loading...</span>`)}
      </h4>
    `}}let S=class extends s.LitElement{constructor(){super(),this._connection_accounts=[],this.startSearchPage1=0,this.datatablePathUrl="members/user-connection-account/member/"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.filterBox=new l.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},isOpen:!0})}))}disconnectedCallback(){}render(){return null===this._connection_accounts?s.html`
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
        ${this.table}
      </div>
    `}firstUpdated(){this.filterBox=new l.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[],isOpen:!0})}get filterForm(){let e=s.html``;const t=(0,m.urlQueryParams)(),n="memberId";let r=0,o={};const i=(0,u.getUserLoginInfoCookie)();o.Authorization="Token "+i.token;for(const e in t){let o=Number(t[e]);o=Number.isNaN(o)?0:o,e===n&&(r=o)}const c=s.html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
          ${v(r)}
          <select-input class="w-100" id="${n}" name="${n}" label="Select Member"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${o}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${d.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;return e=s.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${c}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`,e}processClientUserSearch1(e,t){t.page=t.page||0;const n=e.count,r=e.results,o=document.querySelector('[id="memberId"]');let i=[];if(n>0){var s=r;for(let e=0;e<s.length;e++){const t=s[e],n=(0,h.MembershipUser_S)(t),r={id:n.id,text:`${n.firstname} ${n.middlename} ${n.surname}`};i.includes(r)||i.push(r)}}return{results:i,total:n,totalShowing:o.totalShowing}}get ajaxFetchUrlParams1(){return[{param:"",value:""}]}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get getMemberId(){let e=(0,m.urlQueryParamsGet)("memberId");return Number.isNaN(e)?0:Number(e)}get table(){let e=d.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+this.getMemberId+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const r=(0,u.getUserLoginInfoCookie)();return n.Authorization="Token "+r.token,s.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,t,n){const r=n.memberId,o=n.connectionId;return`\n      <div class="flex flex-col">\n        <div class="flex flex-col lg:flex-row m-1 justify-start">\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${o.firstname} ${o.middlename}\n              ${o.surname}</p>\n          </div>\n          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n          <div class="flex">\n            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n            <p class="whitespace-nowrap text-sm ml-1">${r.firstname} ${r.middlename} ${r.surname}</p>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,t,n){const r=n.type;return`\n      <div class="justify-center content-center">\n        <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n          delete-this-item="${n.id}" >\n        </mwc-icon-button>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${r.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${r.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,m.urlQueryParams)();let t={};for(const n in e){let r=String(e[n]);"memberId"===n&&(t[n]=r)}let n=(0,m.urlQueryParamsJoin)(t);return 0===n.length?n:"&"+n}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,r)=>t.renderMemberInfo(e,n,r),orderable:!0},{data:"inTime",render:(e,n,r)=>t.renderClockInInfo(e,n,r),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return y(this,void 0,void 0,(function*(){e.aoData,t.deleteConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteConnection(e)}))}))}deleteConnection(e){return y(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,a.DELETE_UserConnectionAccount)(t)}))}getMember(e){return y(this,void 0,void 0,(function*(){const t=yield(0,p.GET_MembershipUsers)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=(0,h.MembershipUser_S)(t.response.data);return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};S.styles=[s.css`
   :host { display: block; }
  `],g([(0,c.query)('[filter-section-context="btn"]'),b("design:type","function"==typeof(r=void 0!==f.Button&&f.Button)?r:Object)],S.prototype,"filterSectionContextBtn",void 0),g([(0,c.query)('[filter-section-context="container"]'),b("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],S.prototype,"filterSectionContextContainer",void 0),g([(0,c.query)('[make-general-posts="submit_filter_form"]'),b("design:type","function"==typeof(i="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?i:Object)],S.prototype,"filterSectionContextForm",void 0),g([(0,c.property)({type:Array}),b("design:type",Array)],S.prototype,"_connection_accounts",void 0),g([(0,c.property)({type:Number}),b("design:type",Number)],S.prototype,"startSearchPage1",void 0),g([(0,c.property)({type:String}),b("design:type",String)],S.prototype,"datatablePathUrl",void 0),S=g([(0,c.customElement)("pdb-connections-members-view"),b("design:paramtypes",[])],S)},75943:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>r});const r={user_connections:56,connection_types:57}}}]);
//# sourceMappingURL=src_view_membership_connections_members_and_connections_view_members_ts-src_view_membership_c-ed4f66.js.map