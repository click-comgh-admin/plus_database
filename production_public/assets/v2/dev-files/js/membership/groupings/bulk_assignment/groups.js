"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/bulk_assignment/groups"],{73794:(e,t,n)=>{n.r(t)},42813:(e,t,n)=>{n.r(t),n.d(t,{Convert:()=>r,typeMap:()=>c});class r{static toMembershipUserModel(e){return i(JSON.parse(e),a("MembershipUserModel"),o)}static membershipUserModelToJson(e){return JSON.stringify(i(e,a("MembershipUserModel"),s),null,2)}}function o(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function s(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,n,r=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const r=e.length;for(let o=0;o<r;o++){const r=e[o];try{return i(t,r,n)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,n)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,r){if(null===r||"object"!=typeof r||Array.isArray(r))return;const o={};return Object.getOwnPropertyNames(e).forEach((t=>{const s=e[t],l=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0;o[s.key]=i(l,s.typ,n,s.key)})),Object.getOwnPropertyNames(r).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(o[s]=i(r[s],t,n,s))})),o}(n(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function a(e){return{ref:e}}const c={MembershipUserModel:(d=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"firstname",js:"firstname",typ:l(null,"")},{json:"middlename",js:"middlename",typ:l(null,"")},{json:"surname",js:"surname",typ:l(null,"")},{json:"gender",js:"gender",typ:l(null,0)},{json:"profilePicture",js:"profilePicture",typ:l(null,"")},{json:"phone",js:"phone",typ:l(null,"")},{json:"email",js:"email",typ:l(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:l(null,Date)},{json:"religion",js:"religion",typ:l(null,0)},{json:"nationality",js:"nationality",typ:l(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:l(null,"")},{json:"stateProvince",js:"stateProvince",typ:l(null,"")},{json:"region",js:"region",typ:l(null,0)},{json:"district",js:"district",typ:l(null,0)},{json:"constituency",js:"constituency",typ:l(null,0)},{json:"electoralArea",js:"electoralArea",typ:l(null,0)},{json:"community",js:"community",typ:l(null,"")},{json:"hometown",js:"hometown",typ:l(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:l(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:l(null,"")},{json:"level",js:"level",typ:l(null,0)},{json:"status",js:"status",typ:l(null,0)},{json:"accountType",js:"accountType",typ:l(null,0)},{json:"memberType",js:"memberType",typ:l(null,0)},{json:"date",js:"date",typ:l(null,Date)},{json:"last_login",js:"lastLogin",typ:l(null,Date)},{json:"referenceId",js:"referenceID",typ:l(null,"")},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"editable",js:"editable",typ:l(null,!0)},{json:"profileResume",js:"profileResume",typ:l(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:l(null,"")},{json:"archived",js:"archived",typ:l(null,!0)},{json:"identification",js:"identification",typ:l(null,"")}],!1,{props:d,additional:false})};var d},17126:(e,t,n)=>{n.r(t),n.d(t,{DELETE_MemberGroupingsGroupMember:()=>u});var r=n(86455),o=n.n(r),s=n(48485),i=n(87270),l=n(14492),a=n(8967),c=n(33600),d=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function l(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}a((r=r.apply(e,t||[])).next())}))};function u(e,t){return d(this,void 0,void 0,(function*(){const n=(0,c.getUserLoginInfoCookie)(),r=s.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/bulk-assignment/remove-from-group",u={groupId:e,memberId:t};return o().fire({title:"Remove Member From Group?",text:"Member will be permanently removed from group member list!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,i.http)(r,{method:"DELETE",body:JSON.stringify(u),headers:{Authorization:"Token "+n.token}},!0).then((e=>{try{const t=new l.NetWorkCallResponses("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,a.https_swal_error_format)(e);o().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const r=new l.NetWorkCallResponses("delete",n,!0);return r.postForm,r}})).catch((e=>{o().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),n=r.response.success}o().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2892:(e,t,n)=>{n.r(t),n.d(t,{GET_MemberGroupingsGroups:()=>l});var r=n(48485),o=n(87270),s=n(14492),i=n(33600);function l(e=null,t=""){return n=this,l=void 0,c=function*(){const n=(0,i.getUserLoginInfoCookie)(),l=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,a=yield(0,o.http)(l,{method:"GET",headers:{Authorization:"Token "+n.token}},!0);try{return new s.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new s.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function r(e){try{s(c.next(e))}catch(e){t(e)}}function o(e){try{s(c.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(r,o)}s((c=c.apply(n,l||[])).next())}));var n,l,a,c}},38281:(e,t,n)=>{n.r(t),n.d(t,{UserProfilePhoto:()=>a});var r=n(48485),o=n(85862),s=n(59662),i=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends o.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return o.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};a.styles=[o.css`
   :host { display: block; }
  `],i([(0,s.property)({type:String}),l("design:type",String)],a.prototype,"url",void 0),i([(0,s.property)({type:String}),l("design:type",String)],a.prototype,"type",void 0),i([(0,s.property)({type:Boolean}),l("design:type",Boolean)],a.prototype,"rounded",void 0),i([(0,s.property)({type:String}),l("design:type",String)],a.prototype,"click-to-open",void 0),i([(0,s.property)({type:Number}),l("design:type",Number)],a.prototype,"size",void 0),a=i([(0,s.customElement)("user-profile-photo"),l("design:paramtypes",[])],a)},17951:(e,t,n)=>{n.r(t),n.d(t,{MembershipGroupingsBulkAssignmentMemberGroupsView:()=>N}),n(73794);var r,o,s,i=n(85862),l=n(59662),a=n(67052),c=n(90072),d=n(23283),u=(n(33590),n(40789),n(63313),n(16883),n(30367),n(38281),n(75866),n(48485)),p=n(33600),m=n(17725),f=n(44672),h=n(52368),y=(n(43629),n(26224)),b=n(42813),g=n(18530),_=n(2892),v=n(17126),w=(n(43683),n(74657),n(27712)),j=n(91354),S=n(41302),k=n(97641),x=function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},C=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{a(r.next(e))}catch(e){s(e)}}function l(e){try{a(r.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}a((r=r.apply(e,t||[])).next())}))};let B={},N=class extends i.LitElement{constructor(){super(),this._memberCategories=[],this._activeBranchId=null,this._memberType=1,this._groups=[],this._branches=[],this._userLoginInfo=null,this.memberProfileBaseUrl="/member/member-profile?view=",this.datatablePathUrl="members/groupings/bulk-assignment/get-groups",this.filterBoxStarted=!1,this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,w.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,m.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,p.getUserLoginInfoCookie)()],this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn}}),yield this.getGroups(),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,j.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return i.html`<account-expired-component></account-expired-component>`;if(!(0,S.AppSettingsExtraUserAccess)({pageId:k.PAGE__IDS.assignment,viewType:"View"},!1))return i.html`<no-page-entry-component></no-page-entry-component>`}return i.html`
      <div class="shadow bg-white p-2">
        <span class="flex flex-row md:flex-col w-100"></span>
        <div class="block my-1">
          <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
            filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
          </mwc-button>
        </div>
        <div class="block my-1">
          ${this.filterForm}<br />
        </div>
        <div class="block my-1">
          ${this.table}
        </div>
      </div>
    `}renderMemberInfo(e,t,n){if(1===n.accountType){const e=b.Convert.toMembershipUserModel(JSON.stringify(n)),t=(0,a.base64Encode)(String(e.id),!0);return`\n        <div class="flex flex-col whitespace-normal justify-between content-between">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'=""\n              click-to-open="${this.memberProfileBaseUrl}${t}" type="member"\n              url="${e.profilePicture}" size="32"></user-profile-photo>\n          </div>\n          <div class="block m-1">\n            <span class="shadow p-1 block bg-white rounded text-dark">\n              <b>Name</b>: ${e.firstname} ${e.middlename} ${e.surname}\n            </span>\n          </div>\n        </div>\n      `}{const e=g.Convert.toMembershipOrganizationUserModel(JSON.stringify(n));return`\n        <div class="flex flex-col whitespace-normal justify-between content-between">\n          <div class="flex m-1 justify-evenly">\n            <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="false"\n              click-to-open="false" type="member"\n              url="${e.logo}" size="32"></user-profile-photo>\n          </div>\n          <div class="block m-1">\n            <span class="shadow p-1 block bg-white rounded text-dark">\n              <b>Org. Name</b>: ${e.organizationName}\n            </span>\n          </div>\n        </div>\n      `}}removeFromList(e,t,n){const r=n.id,o=(0,f.urlQueryParams)();return`\n      <div class="flex flex-col whitespace-normal justify-between content-between">\n        <mwc-button class="button warning" outlined delete-this-item="${"groupId"in o?Number(o.groupId):0}"\n        delete-item-member-id="${r}">\n          <mwc-icon class="mr-1">delete_forever</mwc-icon> Remove\n        </mwc-button>\n      </div>\n    `}get urlQueryString(){const e=(0,f.urlQueryParams)(),t="branchId",n="memberType",r="groupId";let o={};for(const s in e){let i=String(e[s]);s!==t&&s!==n&&s!==r||(o[s]=i)}if(!(t in o)){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId),o[t]=e}n in o||(o[n]="1"),r in o||(this._groups.length>0?o[r]=this._groups[0].id:o[r]="0");let s=(0,f.urlQueryParamsJoin)(o);return 0===s.length?s:"&"+s}get filterForm(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.branchId);let t=i.html``;const n=(0,f.urlQueryParams)(),r="branchId",o="memberType",s="groupId";let l=1,a=e,c=null;for(const e in n){let t=String(n[e]);t=""===t?null:t,e===o&&(l=Number(t)),e===r&&(a=Number(t)),e===s&&(c=Number(t))}const d=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Branch</h4>
          <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
            name="${r}" id="${r}"
            outlined required @change="${this.branchChange}">
            ${1===e?i.html`
              <mwc-list-item value="0">Select Branch</mwc-list-item>
              ${this._branches.map((e=>a===e.id?i.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:i.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
            `:i.html`
              ${this._branches.map((t=>{if(t.id===e)return i.html`<mwc-list-item value="${t.id}" selected>${t.name}</mwc-list-item>`}))}
            `}
          </mwc-select>
        </div>
      </div>`,u=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Member Category</h4>
          <pdb-membership-select-member-type defaultValue="${l}" 
            name="${o}" id="${o}"
            label="Select Member Category" outlined required>
          </pdb-membership-select-member-type>
        </div>
      </div>`,p=this._groups.map((e=>({id:e.id,name:e.group,isSelected:e.id===c?"true":"false",selected:e.id===c}))),m=i.html`
      <div class="col-xl-4 col-md-6">
        <div class="form-input-container !block">
          <h4 class="font-semibold my-2">Select Group</h4>
          <select-input name="${s}" class="w-full" id="${s}" label="Select User Group(s)" .options="${p}"
            outlined required >
          </select-input>
        </div>
      </div>`;return t=i.html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
          <div class="container">
            <div class="row">
              ${d} ${u} ${m}
              <div class="col-xl-12 col-md-10">
                <div class="form-input-container mt-1">
                  <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
                  <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>`,t}branchChange(e){return A(this,void 0,void 0,(function*(){const t=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value);yield this.getGroups("?branchId="+t,t)}))}get __tableHeaders(){return[{title:"Member"},{title:"Info"}]}get __tableBody(){return[]}get __tableFoot(){return[{title:"Member"},{title:"Info"}]}get table(){let e=u.CONSTANTS.URLS.AKWAABA_API_BASE_URL+""+this.datatablePathUrl+"?datatable_plugin";e+=this.urlQueryString;const t=this.__dataTable(e);let n={};const r=(0,p.getUserLoginInfoCookie)();return n.Authorization="Token "+r.token,i.html`
      <datatables-new .datatable="${t}" .ajaxHeader="${n}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `}firstUpdated(){setInterval((()=>{null!==this.filterSectionContextContainer&&(this.filterBoxStarted||(this.filterBox=new h.FilterFieldBox({selectors:{container:this.filterSectionContextContainer,form:this.filterSectionContextForm,filterSectionContextBtn:this.filterSectionContextBtn},unmutableInputNames:[]}),this.filterBoxStarted=!0))}))}__dataTable(e){const t=this;return{order:[[0,"desc"]],processing:!0,serverSide:!0,ajax:{url:e,dataSrc:"data",apiType:"akwaabaApp"},columns:[{data:"id",render:(e,n,r)=>t.renderMemberInfo(e,n,r),orderable:!0},{data:"inTime",render:(e,n,r)=>t.removeFromList(e,n,r),orderable:!0}],columnDefs:[{targets:["_all"],className:"mdc-data-table__cell",checkboxes:{selectRow:!0}}],lengthMenu:[10,25,50,100,500,1e3],drawCallback:function(e){return A(this,void 0,void 0,(function*(){e.aoData,t.deleteMemberFx()}))},responsive:!1,dom:"Blfrtip",buttons:["selected","selectedSingle","selectAll","selectNone","selectRows","selectColumns","selectCells"],select:!0}}deleteMemberFx(){document.querySelectorAll("[delete-this-item]").forEach((e=>{e.addEventListener("click",(e=>{this.deleteMemberFromList(e)}))}))}deleteMemberFromList(e){return A(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item")),n=Number(e.currentTarget.getAttribute("delete-item-member-id"));yield(0,v.DELETE_MemberGroupingsGroupMember)(t,n)}))}getBranches(){return A(this,void 0,void 0,(function*(){const e=yield(0,y.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._branches,...t),this._branches=n}))}getClientMemberCategories(){return A(this,void 0,void 0,(function*(){const e=yield(0,c.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const n=[];n.push(...this._memberCategories,...t),this._memberCategories=n}))}getGroups(e="",t=null){return A(this,void 0,void 0,(function*(){const n=null===t||t<1?"__":String(t);if(this._groups=[],n in B)return void setTimeout((()=>{this._groups=B[n]}),500);const r=yield(0,_.GET_MemberGroupingsGroups)(null,e);let o=[];null===r?o.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===r.response.success&&"length"in r.response.data&&(o=r.response.data);const s=[];s.push(...this._groups,...o),this._groups=s,B[n]=this._groups}))}createRenderRoot(){return this}};N.styles=[i.css`
   :host { display: block; }
  `],x([(0,l.query)('[filter-section-context="btn"]'),C("design:type","function"==typeof(r=void 0!==d.Button&&d.Button)?r:Object)],N.prototype,"filterSectionContextBtn",void 0),x([(0,l.query)('[filter-section-context="container"]'),C("design:type","function"==typeof(o="undefined"!=typeof Element&&Element)?o:Object)],N.prototype,"filterSectionContextContainer",void 0),x([(0,l.query)('[make-general-posts="submit_filter_form"]'),C("design:type","function"==typeof(s="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?s:Object)],N.prototype,"filterSectionContextForm",void 0),x([(0,l.property)({type:Array}),C("design:type",Array)],N.prototype,"_memberCategories",void 0),x([(0,l.property)({type:Array}),C("design:type",Array)],N.prototype,"_activeBranchId",void 0),x([(0,l.property)({type:Number}),C("design:type",Number)],N.prototype,"_memberType",void 0),x([(0,l.property)({type:Array}),C("design:type",Array)],N.prototype,"_groups",void 0),x([(0,l.property)({type:Array}),C("design:type",Array)],N.prototype,"_branches",void 0),x([(0,l.property)({type:Array}),C("design:type",Array)],N.prototype,"_userLoginInfo",void 0),x([(0,l.property)({type:String}),C("design:type",String)],N.prototype,"memberProfileBaseUrl",void 0),x([(0,l.property)({type:String}),C("design:type",String)],N.prototype,"datatablePathUrl",void 0),x([(0,l.property)({type:Boolean}),C("design:type",Boolean)],N.prototype,"filterBoxStarted",void 0),x([(0,l.property)({type:Boolean}),C("design:type",Boolean)],N.prototype,"_hasSetup",void 0),N=x([(0,l.customElement)("membership-groupings-bulk_assignment-groups-view"),C("design:paramtypes",[])],N)},97641:(e,t,n)=>{n.r(t),n.d(t,{PAGE__IDS:()=>r});const r={grouping:33,assignment:34}}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_view_membership_members_select-member-type_index_ts","src_addons_classes_filter_field_box_index_ts-src_addons_widgets_datatables_index_ts","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_orga-954009","src_assets_styles_views_attendance_clocking_main_scss-src_assets_styles_views_datatable_main_-bf8818","shared"],(()=>(17951,e(e.s=17951)))),e.O())])));
//# sourceMappingURL=groups.js.map