"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/bulk_assignment/member_categories/add"],{5358:(e,t,n)=>{n.r(t)},2813:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>s,typeMap:()=>l});class s{static toMembershipUserModel(e){return i(JSON.parse(e),c("MembershipUserModel"),r)}static membershipUserModelToJson(e){return JSON.stringify(i(e,c("MembershipUserModel"),o),null,2)}}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function o(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,s=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=l[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const s=e.length;for(let r=0;r<s;r++){const s=e[r];try{return i(t,s,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,s){if(null===s||"object"!=typeof s||Array.isArray(s))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],a=Object.prototype.hasOwnProperty.call(s,t)?s[t]:void 0;r[o.key]=i(a,o.typ,n,o.key)})),Object.getOwnPropertyNames(s).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(r[o]=i(s[o],t,n,o))})),r}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function a(...e){return{unionMembers:e}}function c(e){return{ref:e}}const l={MembershipUserModel:(u=[{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"firstname",js:"firstname",typ:a(null,"")},{json:"middlename",js:"middlename",typ:a(null,"")},{json:"surname",js:"surname",typ:a(null,"")},{json:"gender",js:"gender",typ:a(null,0)},{json:"profilePicture",js:"profilePicture",typ:a(null,"")},{json:"phone",js:"phone",typ:a(null,"")},{json:"email",js:"email",typ:a(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:a(null,Date)},{json:"religion",js:"religion",typ:a(null,0)},{json:"nationality",js:"nationality",typ:a(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:a(null,"")},{json:"stateProvince",js:"stateProvince",typ:a(null,"")},{json:"region",js:"region",typ:a(null,0)},{json:"district",js:"district",typ:a(null,0)},{json:"constituency",js:"constituency",typ:a(null,0)},{json:"electoralArea",js:"electoralArea",typ:a(null,0)},{json:"community",js:"community",typ:a(null,"")},{json:"hometown",js:"hometown",typ:a(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:a(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:a(null,"")},{json:"level",js:"level",typ:a(null,0)},{json:"status",js:"status",typ:a(null,0)},{json:"accountType",js:"accountType",typ:a(null,0)},{json:"memberType",js:"memberType",typ:a(null,0)},{json:"date",js:"date",typ:a(null,Date)},{json:"last_login",js:"lastLogin",typ:a(null,Date)},{json:"referenceId",js:"referenceID",typ:a(null,"")},{json:"branchId",js:"branchID",typ:a(null,0)},{json:"editable",js:"editable",typ:a(null,!0)},{json:"profileResume",js:"profileResume",typ:a(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:a(null,"")},{json:"archived",js:"archived",typ:a(null,!0)},{json:"identification",js:"identification",typ:a(null,"")}],!1,{props:u,additional:false})};var u},2737:(e,t,n)=>{n.r(t),n.d(t,{POST_MemberGroupingsBulkAssignMemberCategory:()=>d});var s=n(6455),r=n.n(s),o=n(8485),i=n(7270),a=n(4492),c=n(8967),l=n(3600),u=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))};function d(){return u(this,void 0,void 0,(function*(){const e=(0,l.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/bulk-assignment/member-category",n=document.querySelector('[make-general-posts="bulk-assignment_member-category"]'),s=new FormData(n);return r().fire({title:"Assign Members to selected category?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>u(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:s,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new a.NetWorkCallResponses("post",e,!1,n),s=t.response;if("nameError"in s&&"unknownError"in s&&s.unknownError.length>0){let e=[];s.unknownError.forEach((t=>{t.errors.forEach((n=>{let s={error:t.id+": "+n};"non_field_errors"===t.id&&(s={error:n}),e.push(s)}))}));const t=(0,c.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const s=e.value;if(s instanceof Object){const e=s.response;t=String(e.message),n=s.response.success}n&&r().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8455:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBulkAssignmentMemberCategoriesAdd:()=>j}),n(5358);var s=n(5862),r=n(9662),o=(n(3590),n(789),n(3283),n(3313),n(5866),n(3629),n(3600)),i=n(7725),a=n(6224),c=n(72),l=n(8485),u=n(2813),d=n(8530),m=n(2737),p=(n(3683),n(4657),n(7712)),h=n(1354),y=n(1302),f=n(7641),g=function(e,t,n,s){var r,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(o<3?r(i):o>3?r(t,n,i):r(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))};let j=class extends s.LitElement{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._branches=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,p.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,h.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return s.html`<account-expired-component></account-expired-component>`;if(!(0,y.AppSettingsExtraUserAccess)({pageId:f.PAGE__IDS.assignment,viewType:"Edit"},!1))return s.html`<no-page-entry-component></no-page-entry-component>`}let t=0;return null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId),s.html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Member Category Assignment(s)</h1>
                    <h3 class="h3">Assignment Member Category!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="bulk-assignment_member-category" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Account Type</h4>
                      <mwc-select class="w-full" label="Select Account Type"
                        name="accountType" id="accountType" @change="${this.accountTypeChange}"
                        outlined required>
                        <mwc-list-item value="0" selected>Select Account Type</mwc-list-item>
                        <mwc-list-item value="1">User Account </mwc-list-item>
                        <mwc-list-item value="2">Organization Account</mwc-list-item>
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="branchId" id="branchId" @change="${this.branchChange}" outlined required>
                        ${1===t?s.html`
                          <mwc-list-item value="0">Select Branch</mwc-list-item>
                          ${this._branches.map((e=>t===e.id?s.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:s.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                        `:s.html`
                          ${this._branches.map((e=>{if(e.id===t)return s.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                        `}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-4">
                      <h4 class="font-semibold my-2">Member Category</h4>
                      <pdb-membership-select-member-type defaultValue="1" 
                        name="memberType" id="memberType"
                        label="Select Member Category" outlined required>
                      </pdb-membership-select-member-type>
                    </div>
                    <div class="col-md-6 col-lg-8">
                      ${this.memberListField}
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Assign" raised class="w-full" @click="${this.submitForm}">
                    </mwc-button>
                  </div>
                
                  <div class="flex form-input-container items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                    <label class="block font-medium text-sm text-gray-600 w-full">
                      ...
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}branchChange(e){const t=this.accountType;this.accountType=0,this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value),setTimeout((()=>{this.accountType=t}),500)}accountTypeChange(e){this.accountType=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}get memberListField(){return 0===Number(this.accountType)?"...":1===Number(this.accountType)?this.individualMemberList:this.organizationMemberList}get individualMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${function(e,t){var n;t.page=t.page||0;const s=e.count,r=e.results,o=document.querySelector('[id="memberIds"]');let i=[];if(s>0){var a=r;for(let e=0;e<a.length;e++){const t=a[e],s=u.Convert.toMembershipUserModel(JSON.stringify(t)),r={id:s.id,text:`${s.firstname} ${null!==(n=s.middlename)&&void 0!==n?n:""} ${s.surname}`};i.includes(r)||i.push(r)}}return{results:i,total:s,totalShowing:o.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${l.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
    `}get organizationMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,s.html`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const n=e.count,s=e.results,r=document.querySelector('[id="memberIds"]');let o=[];if(n>0){var i=s;for(let e=0;e<i.length;e++){const t=i[e],n=d.Convert.toMembershipOrganizationUserModel(JSON.stringify(t)),s={id:n.id,text:`${n.organizationName}`};o.includes(s)||o.push(s)}}return{results:o,total:n,totalShowing:r.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${l.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranch)}]}firstUpdated(){}getBranches(){return _(this,void 0,void 0,(function*(){const e=yield(0,a.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getClientMemberCategories(){return _(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}submitForm(e){return _(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,m.POST_MemberGroupingsBulkAssignMemberCategory)()}))}createRenderRoot(){return this}};j.styles=[s.css`
   :host { display: block; }
  `],g([(0,r.property)({type:Number}),b("design:type",Number)],j.prototype,"startSearchPage",void 0),g([(0,r.property)({type:Number}),b("design:type",Number)],j.prototype,"accountType",void 0),g([(0,r.property)({type:Number}),b("design:type",Number)],j.prototype,"selectedBranch",void 0),g([(0,r.property)({type:Array}),b("design:type",Array)],j.prototype,"_userLoginInfo",void 0),g([(0,r.property)({type:Array}),b("design:type",Array)],j.prototype,"_activeBranchId",void 0),g([(0,r.property)({type:Array}),b("design:type",Array)],j.prototype,"_memberCategories",void 0),g([(0,r.property)({type:Array}),b("design:type",Array)],j.prototype,"_branches",void 0),g([(0,r.property)({type:Boolean}),b("design:type",Boolean)],j.prototype,"_hasSetup",void 0),j=g([(0,r.customElement)("membership-groupings-bulk_assignment-member_categories-add"),b("design:paramtypes",[])],j)},7641:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>s});const s={grouping:33,assignment:34}}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_view_membership_members_select-member-type_index_ts","src_assets_styles_views_admin_register_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_orga-954009","shared"],(()=>(8455,e(e.s=8455)))),e.O())])));
//# sourceMappingURL=add.js.map