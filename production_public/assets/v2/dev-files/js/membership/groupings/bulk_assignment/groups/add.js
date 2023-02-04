"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["membership/groupings/bulk_assignment/groups/add"],{95358:(e,t,s)=>{s.r(t)},91243:(e,t,s)=>{s.r(t)},42813:(e,t,s)=>{s.r(t),s.d(t,{Convert:()=>n,typeMap:()=>c});class n{static toMembershipUserModel(e){return i(JSON.parse(e),a("MembershipUserModel"),r)}static membershipUserModelToJson(e){return JSON.stringify(i(e,a("MembershipUserModel"),o),null,2)}}function r(e){if(void 0===e.jsonToJS){const t={};e.props.forEach((e=>t[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=t}return e.jsonToJS}function o(e){if(void 0===e.jsToJSON){const t={};e.props.forEach((e=>t[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=t}return e.jsToJSON}function i(e,t,s,n=""){if("any"===t)return e;if(null===t&&null===e)return e;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(e,t){if(-1!==e.indexOf(t))return t}(t,e):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(e,t){const n=e.length;for(let r=0;r<n;r++){const n=e[r];try{return i(t,n,s)}catch(e){}}}(t.unionMembers,e):t.hasOwnProperty("arrayItems")?function(e,t){if(Array.isArray(t))return t.map((t=>i(t,e,s)))}(t.arrayItems,e):t.hasOwnProperty("props")?function(e,t,n){if(null===n||"object"!=typeof n||Array.isArray(n))return;const r={};return Object.getOwnPropertyNames(e).forEach((t=>{const o=e[t],l=Object.prototype.hasOwnProperty.call(n,t)?n[t]:void 0;r[o.key]=i(l,o.typ,s,o.key)})),Object.getOwnPropertyNames(n).forEach((o=>{Object.prototype.hasOwnProperty.call(e,o)||(r[o]=i(n[o],t,s,o))})),r}(s(t),t.additional,e):void 0:t===Date&&"number"!=typeof e?function(e){if(null===e)return null;const t=new Date(e);return isNaN(t.valueOf())?void 0:t}(e):function(e,t){if(typeof e==typeof t)return t}(t,e)}}function l(...e){return{unionMembers:e}}function a(e){return{ref:e}}const c={MembershipUserModel:(p=[{json:"id",js:"id",typ:l(null,0)},{json:"clientId",js:"clientID",typ:l(null,0)},{json:"firstname",js:"firstname",typ:l(null,"")},{json:"middlename",js:"middlename",typ:l(null,"")},{json:"surname",js:"surname",typ:l(null,"")},{json:"gender",js:"gender",typ:l(null,0)},{json:"profilePicture",js:"profilePicture",typ:l(null,"")},{json:"phone",js:"phone",typ:l(null,"")},{json:"email",js:"email",typ:l(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:l(null,Date)},{json:"religion",js:"religion",typ:l(null,0)},{json:"nationality",js:"nationality",typ:l(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:l(null,"")},{json:"stateProvince",js:"stateProvince",typ:l(null,"")},{json:"region",js:"region",typ:l(null,0)},{json:"district",js:"district",typ:l(null,0)},{json:"constituency",js:"constituency",typ:l(null,0)},{json:"electoralArea",js:"electoralArea",typ:l(null,0)},{json:"community",js:"community",typ:l(null,"")},{json:"hometown",js:"hometown",typ:l(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:l(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:l(null,"")},{json:"level",js:"level",typ:l(null,0)},{json:"status",js:"status",typ:l(null,0)},{json:"accountType",js:"accountType",typ:l(null,0)},{json:"memberType",js:"memberType",typ:l(null,0)},{json:"date",js:"date",typ:l(null,Date)},{json:"last_login",js:"lastLogin",typ:l(null,Date)},{json:"referenceId",js:"referenceID",typ:l(null,"")},{json:"branchId",js:"branchID",typ:l(null,0)},{json:"editable",js:"editable",typ:l(null,!0)},{json:"profileResume",js:"profileResume",typ:l(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:l(null,"")},{json:"archived",js:"archived",typ:l(null,!0)},{json:"identification",js:"identification",typ:l(null,"")}],!1,{props:p,additional:false})};var p},34086:(e,t,s)=>{s.r(t),s.d(t,{POST_MemberGroupingsBulkAssignGroup:()=>u});var n=s(86455),r=s.n(n),o=s(48485),i=s(87270),l=s(14492),a=s(8967),c=s(33600),p=function(e,t,s,n){return new(s||(s=Promise))((function(r,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,l)}a((n=n.apply(e,t||[])).next())}))};function u(){return p(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),t=o.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/bulk-assignment/groups",s=document.querySelector('[make-general-posts="bulk-assignment_group"]'),n=new FormData(s);return r().fire({title:"Assign Members to selected group?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:o=>p(this,void 0,void 0,(function*(){return yield(0,i.http)(t,{method:"POST",body:n,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.NetWorkCallResponses("post",e,!1,s),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((s=>{let n={error:t.id+": "+s};"non_field_errors"===t.id&&(n={error:s}),e.push(n)}))}));const t=(0,a.https_swal_error_format)(e);r().showValidationMessage(`${t}`)}return t})).catch((e=>{r().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!r().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",s=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),s=n.response.success}s&&r().fire({title:t,icon:s?"success":"error",iconColor:s?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),s&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2892:(e,t,s)=>{s.r(t),s.d(t,{GET_MemberGroupingsGroups:()=>l});var n=s(48485),r=s(87270),o=s(14492),i=s(33600);function l(e=null,t=""){return s=this,l=void 0,c=function*(){const s=(0,i.getUserLoginInfoCookie)(),l=n.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,a=yield(0,r.http)(l,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new o.NetWorkCallResponses("get",a)}catch(e){console.error({error:e});let t=a;return t.error=e,new o.NetWorkCallResponses("get",t,!0)}},new((a=void 0)||(a=Promise))((function(e,t){function n(e){try{o(c.next(e))}catch(e){t(e)}}function r(e){try{o(c.throw(e))}catch(e){t(e)}}function o(t){var s;t.done?e(t.value):(s=t.value,s instanceof a?s:new a((function(e){e(s)}))).then(n,r)}o((c=c.apply(s,l||[])).next())}));var s,l,a,c}},37725:(e,t,s)=>{s.r(t),s.d(t,{FileInput:()=>l});var n=s(85862),r=s(59662),o=(s(29975),s(23283),s(91243),function(e,t,s,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,s,i):r(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[n.css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:n.nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:n.html`
          <div class="form-input border">
            ${this.hasLabel?n.html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:n.nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"accept",void 0),o([(0,r.property)({type:Number}),i("design:type",Number)],l.prototype,"randomID",void 0),o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"id",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"required",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"hasLabel",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"multiple",void 0),o([(0,r.property)({type:Number}),i("design:type",Number)],l.prototype,"startNumber",void 0),o([(0,r.property)({type:Number}),i("design:type",Number)],l.prototype,"rowsPerPage",void 0),o([(0,r.property)({type:Number}),i("design:type",Number)],l.prototype,"totalShowing",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=o([(0,r.customElement)("file-input")],l)},43690:(e,t,s)=>{s.r(t),s.d(t,{SwitchInput:()=>l});var n=s(85862),r=s(59662),o=(s(29975),s(16788),function(e,t,s,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,s,i):r(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i}),i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends n.LitElement{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.html`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.html`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.html`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};l.styles=[n.css`
      :host {
        display: block;
      }
    `],o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"name",void 0),o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"label",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"selected",void 0),o([(0,r.property)({type:String}),i("design:type",String)],l.prototype,"value",void 0),o([(0,r.property)({type:Boolean}),i("design:type",Boolean)],l.prototype,"isSelected",void 0),l=o([(0,r.customElement)("switch-input")],l)},64514:(e,t,s)=>{s.r(t),s.d(t,{MembershipGroupingsBulkAssignmentMemberGroupsAdd:()=>j}),s(95358);var n=s(85862),r=s(59662),o=(s(33590),s(40789),s(23283),s(63313),s(75866),s(43690),s(37725),s(43629),s(33600)),i=s(17725),l=s(26224),a=s(90072),c=s(48485),p=s(42813),u=s(18530),d=s(2892),h=s(34086),m=(s(43683),s(74657),s(27712)),y=s(91354),f=s(41302),g=s(97641),b=function(e,t,s,n){var r,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(o<3?r(i):o>3?r(t,s,i):r(t,s))||i);return o>3&&i&&Object.defineProperty(t,s,i),i},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,s,n){return new(s||(s=Promise))((function(r,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function l(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,l)}a((n=n.apply(e,t||[])).next())}))};let w={},j=class extends n.LitElement{constructor(){super(),this.startSearchPage=0,this.accountType=0,this.selectedBranch=1,this._userLoginInfo=null,this._activeBranchId=null,this._memberCategories=[],this._groups=[],this._branches=[],this._hasSetup=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,m.AppSetup)().then((()=>this._hasSetup=!0));const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,o.getUserLoginInfoCookie)()],null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(this.accountType=1,this.selectedBranch=this._userLoginInfo[0].user.branchId,setTimeout((()=>{this.accountType=0}),1e3)),yield this.getGroups(),yield this.getBranches(),yield this.getClientMemberCategories()}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,y.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)return n.html`<account-expired-component></account-expired-component>`;if(!(0,f.AppSettingsExtraUserAccess)({pageId:g.PAGE__IDS.assignment,viewType:"Edit"},!1))return n.html`<no-page-entry-component></no-page-entry-component>`}let t=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(t=this._userLoginInfo[0].user.branchId);const s=this._groups.map((e=>({id:e.id,name:e.group,isSelected:"false",selected:!1})));return n.html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">New Group Assignment(s)</h1>
                    <h3 class="h3">Assignment Group!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="bulk-assignment_group" enctype="multipart/form-data">
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
                        ${1===t?n.html`
                          <mwc-list-item value="0">Select Branch</mwc-list-item>
                          ${this._branches.map((e=>t===e.id?n.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`:n.html`<mwc-list-item value="${e.id}">${e.name}</mwc-list-item>`))}
                        `:n.html`
                          ${this._branches.map((e=>{if(e.id===t)return n.html`<mwc-list-item value="${e.id}" selected>${e.name}</mwc-list-item>`}))}
                        `}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Member Category</h4>
                      <pdb-membership-select-member-type defaultValue="1" 
                        name="memberType" id="memberType"
                        label="Select Member Category" outlined required>
                      </pdb-membership-select-member-type>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Group</h4>
                      <select-input name="groups[]" class="w-full" id="groups" label="Select User Group" .options="${s}"
                        outlined required >
                      </select-input>
                    </div>
                    <div class="col-md-12 col-lg-12">
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
    `}branchChange(e){return _(this,void 0,void 0,(function*(){const t=this.accountType;this.accountType=0,this.selectedBranch=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value),setTimeout((()=>{this.accountType=t}),500),yield this.getGroups("?branchId="+this.selectedBranch,this.selectedBranch)}))}accountTypeChange(e){this.accountType=Number.isNaN(e.currentTarget.value)?0:Number(e.currentTarget.value)}get memberListField(){return 0===Number(this.accountType)?"...":1===Number(this.accountType)?this.individualMemberList:this.organizationMemberList}get individualMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,n.html`
      <h4 class="font-semibold my-2">Select User</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select User" multiple
        .ajaxFetchProcessResponse="${function(e,t){var s;t.page=t.page||0;const n=e.count,r=e.results,o=document.querySelector('[id="memberIds"]');let i=[];if(n>0){var l=r;for(let e=0;e<l.length;e++){const t=l[e],n=p.Convert.toMembershipUserModel(JSON.stringify(t)),r={id:n.id,text:`${n.firstname} ${null!==(s=n.middlename)&&void 0!==s?s:""} ${n.surname}`};i.includes(r)||i.push(r)}}return{results:i,total:n,totalShowing:o.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${c.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
    `}get organizationMemberList(){this.startSearchPage=0;let e={};const t=(0,o.getUserLoginInfoCookie)();return e.Authorization="Token "+t.token,n.html`
      <h4 class="font-semibold my-2">Select Organization</h4>
      <select-input class="w-100" id="memberIds" name="memberIds" label="Select Organization" multiple
        .ajaxFetchProcessResponse="${function(e,t){t.page=t.page||0;const s=e.count,n=e.results,r=document.querySelector('[id="memberIds"]');let o=[];if(s>0){var i=n;for(let e=0;e<i.length;e++){const t=i[e],s=u.Convert.toMembershipOrganizationUserModel(JSON.stringify(t)),n={id:s.id,text:`${s.organizationName}`};o.includes(n)||o.push(n)}}return{results:o,total:s,totalShowing:r.totalShowing}}}" startSearchPage="${this.startSearchPage}"
        .ajaxHeader="${e}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
        ajaxFetchUrl="${c.CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user-organization/search"></select-input>
    `}get ajaxFetchUrlParams(){return[{param:"branchId",value:String(this.selectedBranch)}]}firstUpdated(){}getBranches(){return _(this,void 0,void 0,(function*(){const e=yield(0,l.GET_ClientBranches)();let t=[];null===e?t.push({id:0,name:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const s=[];s.push(...this._branches,...t),this._branches=s}))}getClientMemberCategories(){return _(this,void 0,void 0,(function*(){const e=yield(0,a.GET_MemberGroupingsMemberCategories)();let t=[];null===e?t.push({id:0,category:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data);const s=[];s.push(...this._memberCategories,...t),this._memberCategories=s}))}getGroups(e="",t=null){return _(this,void 0,void 0,(function*(){const s=null===t||t<1?"__":String(t);if(this._groups=[],s in w)return void setTimeout((()=>{this._groups=w[s]}),500);const n=yield(0,d.GET_MemberGroupingsGroups)(null,e);let r=[];null===n?r.push({id:0,group:"**NOT FOUND**",date:new Date}):!0===n.response.success&&"length"in n.response.data&&(r=n.response.data);const o=[];o.push(...this._groups,...r),this._groups=o,w[s]=this._groups}))}submitForm(e){return _(this,void 0,void 0,(function*(){e.preventDefault(),yield(0,h.POST_MemberGroupingsBulkAssignGroup)()}))}createRenderRoot(){return this}};j.styles=[n.css`
   :host { display: block; }
  `],b([(0,r.property)({type:Number}),v("design:type",Number)],j.prototype,"startSearchPage",void 0),b([(0,r.property)({type:Number}),v("design:type",Number)],j.prototype,"accountType",void 0),b([(0,r.property)({type:Number}),v("design:type",Number)],j.prototype,"selectedBranch",void 0),b([(0,r.property)({type:Array}),v("design:type",Array)],j.prototype,"_userLoginInfo",void 0),b([(0,r.property)({type:Array}),v("design:type",Array)],j.prototype,"_activeBranchId",void 0),b([(0,r.property)({type:Array}),v("design:type",Array)],j.prototype,"_memberCategories",void 0),b([(0,r.property)({type:Array}),v("design:type",Array)],j.prototype,"_groups",void 0),b([(0,r.property)({type:Array}),v("design:type",Array)],j.prototype,"_branches",void 0),b([(0,r.property)({type:Boolean}),v("design:type",Boolean)],j.prototype,"_hasSetup",void 0),j=b([(0,r.customElement)("membership-groupings-bulk_assignment-groups-add"),v("design:paramtypes",[])],j)},97641:(e,t,s)=>{s.r(t),s.d(t,{PAGE__IDS:()=>n});const n={grouping:33,assignment:34}}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.buffer","vendors.material","vendors.tslib","vendors.sweetalert2","vendors.jquery","vendors.select2","vendors-node_modules_base64-js_index_js-node_modules_ieee754_index_js-node_modules_lit-elemen-70ae82","src_addons_constants_index_ts-src_addons_functions_https_http_ts-src_addons_functions_login_i-9b586a","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_addons_widgets_form_new_select_ts","src_assets_styles_views_home_dashboard_scss","src_view_membership_members_select-member-type_index_ts","src_assets_styles_views_admin_register_main_scss","src_addons_functions_https_https_swal_error_format_ts-src_addons_interfaces_members_user_orga-954009","shared"],(()=>(64514,e(e.s=64514)))),e.O())])));
//# sourceMappingURL=add.js.map