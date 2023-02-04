"use strict";!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.webpackNumbers=n():e.webpackNumbers=n()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/connections/unassigned"],{12155:(e,n,t)=>{t.r(n),t.d(n,{UserConnectionAccount_S:()=>c});var o=t(96246),r=t(19194);function c(e){return{id:Number(e.id),type:(0,r.UserConnectionType_S)(e.type),memberId:(0,o.MembershipUser_S)(e.memberId),memberAccountType:Number(e.memberAccountType),connectionId:(0,o.MembershipUser_S)(e.connectionId),connectionAccountType:Number(e.connectionAccountType),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate)}}},19194:(e,n,t)=>{function o(e){return{id:Number(e.id),type:String(e.type),clientId:Number(e.clientId),description:String(e.description),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),lastUpdatedBy:Number(e.lastUpdatedBy),lastUpdateDate:new Date(e.lastUpdateDate)}}t.r(n),t.d(n,{UserConnectionType_S:()=>o})},65121:(e,n,t)=>{t.r(n),t.d(n,{APPROVE_UserConnectionAccount:()=>u});var o=t(86455),r=t.n(o),c=t(48485),s=t(87270),i=t(14492),a=t(8967),l=t(33600),d=function(e,n,t,o){return new(t||(t=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}a((o=o.apply(e,n||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),t=c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-account/approve-connection",o={connectionIds:e};return r().fire({title:"Approve Connection?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:JSON.stringify(o),headers:{Authorization:"Token "+n.token}},!0,!1).then((e=>{try{const n=new i.NetWorkCallResponses("post",e,!1),t=n.response;if("nameError"in t&&"unknownError"in t&&t.unknownError.length>0){let e=[];t.unknownError.forEach((n=>{n.errors.forEach((n=>{e.push({error:n})}))}));const n=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${n}`)}return n}catch(n){console.error({error:n});let t=e;t.error=n;const o=new i.NetWorkCallResponses("post",t,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let n="Success",t=!1;const o=e.value;if(o instanceof Object){const e=o.response;n=String(e.message),t=o.response.success}r().fire({title:n,icon:t?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),t&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},13355:(e,n,t)=>{t.r(n),t.d(n,{REJECT_UserConnectionAccount:()=>u});var o=t(86455),r=t.n(o),c=t(48485),s=t(87270),i=t(14492),a=t(8967),l=t(33600),d=function(e,n,t,o){return new(t||(t=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}a((o=o.apply(e,n||[])).next())}))};function u(e){return d(this,void 0,void 0,(function*(){const n=(0,l.getUserLoginInfoCookie)(),t=c.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user-connection-account/reject-connection",o={connectionIds:e};return r().fire({title:"Reject Connection(s)?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,s.http)(t,{method:"POST",body:JSON.stringify(o),headers:{Authorization:"Token "+n.token}},!0,!1).then((e=>{try{const n=new i.NetWorkCallResponses("post",e,!1),t=n.response;if("nameError"in t&&"unknownError"in t&&t.unknownError.length>0){let e=[];t.unknownError.forEach((n=>{n.errors.forEach((n=>{e.push({error:n})}))}));const n=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${n}`)}return n}catch(n){console.error({error:n});let t=e;t.error=n;const o=new i.NetWorkCallResponses("post",t,!0);return o.postForm,o}})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let n="Success",t=!1;const o=e.value;if(o instanceof Object){const e=o.response;n=String(e.message),t=o.response.success}r().fire({title:n,icon:t?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),t&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},81221:(e,n,t)=>{t.r(n),t.d(n,{PdbConnectionsUnassignedConnections:()=>u});var o=t(85862),r=t(59662),c=(t(32351),t(43683),t(74657),t(27712)),s=t(91354),i=t(41302),a=t(75943),l=(t(35227),function(e,n,t,o){var r,c=arguments.length,s=c<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(n,t,s):r(n,t))||s);return c>3&&s&&Object.defineProperty(n,t,s),s}),d=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};let u=class extends o.LitElement{constructor(){super(),this._hasSetup=!1}connectedCallback(){super.connectedCallback(),(0,c.AppSetup)().then((()=>this._hasSetup=!0))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,s.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return o.html`<account-expired-component></account-expired-component>`;if(!(0,i.AppSettingsExtraUserAccess)({pageId:a.PAGE__IDS.user_connections,viewType:"View"},!1))return o.html`<no-page-entry-component></no-page-entry-component>`}return o.html`
      <div class="flex flex-col shadow bg-white my-2 p-2">
        <pdb-connections-unassigned-view class="my-1"></pdb-connections-unassigned-view>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};u.styles=[o.css`
   :host { display: block; }
  `],l([(0,r.property)({type:Boolean}),d("design:type",Boolean)],u.prototype,"_hasSetup",void 0),u=l([(0,r.customElement)("pdb-connections-unassigned-connections"),d("design:paramtypes",[])],u)},35227:(e,n,t)=>{t.r(n),t.d(n,{PdbConnectionsUnassignedView:()=>h});var o=t(85862),r=t(59662),c=(t(33590),t(16413),t(26660),t(28879)),s=t(12155),i=t(48485),a=t(33600),l=t(44672),d=(t(16883),t(30367),t(40789),t(75866),t(65121)),u=t(13355),p=function(e,n,t,o){var r,c=arguments.length,s=c<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(c<3?r(s):c>3?r(n,t,s):r(n,t))||s);return c>3&&s&&Object.defineProperty(n,t,s),s},f=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},m=function(e,n,t,o){return new(t||(t=Promise))((function(r,c){function s(e){try{a(o.next(e))}catch(e){c(e)}}function i(e){try{a(o.throw(e))}catch(e){c(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,i)}a((o=o.apply(e,n||[])).next())}))};let h=class extends o.LitElement{constructor(){super(),this._connection_accounts=[],this.datatablePathUrl="members/user-connection-account/unassigned"}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return m(this,void 0,void 0,(function*(){e.connectedCallback.call(this)}))}disconnectedCallback(){}render(){return null===this._connection_accounts?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_accounts?o.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:o.html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1 overflow-x-scroll">
        <hr class="my-2" />
        ${this.table_header}
        ${this.table}
      </div>
    `}firstUpdated(){}get table_header(){return o.html`
      <div class="flex-col p-2 mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-5">
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <label class="flex justify-between items-center">
            <b>CHECK ALL: </b>
            <input id="unassigned_info_all" name="unassigned_info_all" type="checkbox"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              @change="${this.check_all_unassigned}" />
          </label>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="success" raised @click="${this.approveMultipleConnections}">
            Approve All Selected</mwc-button>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col p-2 border-b-2 mb-2">
          <mwc-button class="warning" raised @click="${this.rejectMultipleConnections}">Reject All Selected</mwc-button>
        </div>
      </div>
    `}get __tableHeaders(){return[{title:"Connection"},{title:"Action"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Connection"},{title:"Action"}]}get table(){let e=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const n=this.__dataTable(e);let t={};const r=(0,a.getUserLoginInfoCookie)();return t.Authorization="Token "+r.token,o.html`
      <datatables-new .datatable="${n}" .ajaxHeader="${t}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}renderMemberInfo(e,n,t){const o=(t=(0,s.UserConnectionAccount_S)(t)).id,r=t.memberId,c=t.connectionId;return`\n      <div class="flex mb-0">\n        <input id="unassigned_info" name="unassigned_info" type="checkbox" value="${o}"\n          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />\n        <div class="flex flex-col">\n          <div class="flex flex-col lg:flex-row m-1 justify-start">\n            <div class="flex">\n              <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${c.firstname} ${c.middlename}\n                ${c.surname}</p>\n            </div>\n            <div class="m-1"><mwc-icon>directions<mwc-icon/></div>\n            <div class="flex">\n              <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>\n              <p class="whitespace-nowrap text-sm ml-1">${r.firstname} ${r.middlename} ${r.surname}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    `}renderClockInInfo(e,n,t){const o=t.type;return`\n      <div class="justify-center content-center">\n        <div class="flex">\n          <mwc-icon-button class="ml-1 success" icon="check" \n            approve-this-item="${t.id}" >\n          </mwc-icon-button>\n          <mwc-icon-button class="ml-1 warning" icon="cancel" \n            reject-this-item="${t.id}" >\n          </mwc-icon-button>\n          <mwc-icon-button class="ml-1 danger" icon="delete_forever" \n            delete-this-item="${t.id}" >\n          </mwc-icon-button>\n        </div>\n        <div class="flex flex-col">\n          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>\n          <div class="flex flex-col">\n            <p class="whitespace-nowrap text-sm ml-1">${o.type}</p>\n            <p class="text-xs ml-1 whitespace-pre-wrap">${o.description}</p>\n          </div>\n        </div>\n      </div>\n    `}get urlQueryString(){const e=(0,l.urlQueryParams)();let n={};for(const t in e){let o=String(e[t]);"memberId"===t&&(n[t]=o)}let t=(0,l.urlQueryParamsJoin)(n);return 0===t.length?t:"&"+t}__dataTable(e){const n=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,t,o)=>n.renderMemberInfo(e,t,o),orderable:!0},{data:"inTime",render:(e,t,o)=>n.renderClockInInfo(e,t,o),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return m(this,void 0,void 0,(function*(){e.aoData,n.deleteConnectionAction(),n.approveConnectionAction(),n.rejectConnectionAction()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells","pdf","excel","copy","csv"],select:!0}}check_all_unassigned(e){return m(this,void 0,void 0,(function*(){e.preventDefault(),document.querySelectorAll('[id="unassigned_info_all"][name="unassigned_info_all"]').forEach((e=>{e.checked?document.querySelectorAll('[id="unassigned_info"][name="unassigned_info"]').forEach((e=>{e.checked=!0})):document.querySelectorAll('[id="unassigned_info"][name="unassigned_info"]').forEach((e=>{e.checked=!1}))}))}))}deleteConnectionAction(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteConnection(e)}))}))}deleteConnection(e){return m(this,void 0,void 0,(function*(){e.preventDefault();const n=Number(e.currentTarget.getAttribute("delete-this-item"));yield(0,c.DELETE_UserConnectionAccount)(n)}))}approveConnectionAction(){document.querySelectorAll("[approve-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.approveConnection(e)}))}))}approveConnection(e){return m(this,void 0,void 0,(function*(){e.preventDefault();const n=Number(e.currentTarget.getAttribute("approve-this-item"));yield(0,d.APPROVE_UserConnectionAccount)([n])}))}rejectConnectionAction(){document.querySelectorAll("[reject-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.rejectConnection(e)}))}))}rejectConnection(e){return m(this,void 0,void 0,(function*(){e.preventDefault();const n=Number(e.currentTarget.getAttribute("reject-this-item"));yield(0,u.REJECT_UserConnectionAccount)([n])}))}approveMultipleConnections(e){return m(this,void 0,void 0,(function*(){e.preventDefault();let n=[];document.querySelectorAll('[id="unassigned_info"][name="unassigned_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const t=Number(e.value);n.includes(t)||n.push(t)}})),yield(0,d.APPROVE_UserConnectionAccount)(n)}))}rejectMultipleConnections(e){return m(this,void 0,void 0,(function*(){e.preventDefault();let n=[];document.querySelectorAll('[id="unassigned_info"][name="unassigned_info"]').forEach((e=>{if(e.checked&&!Number.isNaN(e.value)){const t=Number(e.value);n.includes(t)||n.push(t)}})),yield(0,u.REJECT_UserConnectionAccount)(n)}))}createRenderRoot(){return this}};h.styles=[o.css`
   :host { display: block; }
  `],p([(0,r.property)({type:Array}),f("design:type",Array)],h.prototype,"_connection_accounts",void 0),p([(0,r.property)({type:String}),f("design:type",String)],h.prototype,"datatablePathUrl",void 0),h=p([(0,r.customElement)("pdb-connections-unassigned-view"),f("design:paramtypes",[])],h)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_view_membership_connections_members_and_connections_view_members_ts-src_view_membership_c-ed4f66","shared"],(()=>(81221,e(e.s=81221)))),e.O())])));
//# sourceMappingURL=unassigned.js.map