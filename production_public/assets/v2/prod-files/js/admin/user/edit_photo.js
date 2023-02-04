/*! For license information please see edit_photo.js.LICENSE.txt */
"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[9055],{7725:(e,t,i)=>{var r=i(9392),o=i(1936),s=(i(5185),i(5248),function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n}),n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[r.iv`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `]}connectedCallback(){super.connectedCallback(),setInterval((()=>{void 0===this.fileSelector?this.fileSelector=this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`):this.showFileSelector()}))}render(){return this.required?this.multiple?r.dy`
          <div class="form-input border">
            ${this.hasLabel?r.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:r.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `:r.dy`
          <div class="form-input border">
            ${this.hasLabel?r.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`:r.Ld}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `:this.multiple?r.dy`
          <div class="form-input border">
            ${this.hasLabel?r.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:r.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `:r.dy`
          <div class="form-input border">
            ${this.hasLabel?r.dy`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`:r.Ld}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"name",void 0),s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"label",void 0),s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"value",void 0),s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"accept",void 0),s([(0,o.Cb)({type:Number}),n("design:type",Number)],a.prototype,"randomID",void 0),s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"id",void 0),s([(0,o.Cb)({type:Boolean}),n("design:type",Boolean)],a.prototype,"required",void 0),s([(0,o.Cb)({type:Boolean}),n("design:type",Boolean)],a.prototype,"hasLabel",void 0),s([(0,o.Cb)({type:Boolean}),n("design:type",Boolean)],a.prototype,"multiple",void 0),s([(0,o.Cb)({type:Number}),n("design:type",Number)],a.prototype,"startNumber",void 0),s([(0,o.Cb)({type:Number}),n("design:type",Number)],a.prototype,"rowsPerPage",void 0),s([(0,o.Cb)({type:Number}),n("design:type",Number)],a.prototype,"totalShowing",void 0),s([(0,o.Cb)({type:Boolean}),n("design:type",Boolean)],a.prototype,"showSelectorLoaded",void 0),a=s([(0,o.Mo)("file-input")],a)},5866:(e,t,i)=>{var r=i(9755),o=i(9392),s=i(1936),n=(i(686),function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends o.oi{constructor(){super(...arguments),this.name="",this.label="",this.value=[],this.randomID=Math.floor(12345*Math.random()),this.input_id=this.id+"_"+this.randomID,this.options=[],this.ajaxFetchToken="",this.ajaxFetchUrl=null,this._ajaxHeader=null,this.ajaxFetchProcessResponse=null,this.ajaxFetchUrlParams=[],this.startSearchPage=0,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}set ajaxHeader(e){this._ajaxHeader=e,this.requestUpdate()}get ajaxHeader(){return this._ajaxHeader}connectedCallback(){super.connectedCallback(),this.value=Array.isArray(this.value)?this.value:[],setInterval((()=>{void 0===this.selectSelector?(this.selectSelector=document.querySelectorAll("select-input>select[input_id="+this.input_id+"]"),this.$selectSelector=r(this.selectSelector)):this.showDropdownAlt()})),this.options=this.options.map((e=>{const t=e.id;let i=!1;return this.value.forEach((e=>{const r=e.id;i=t===r})),e.selected=i,e}))}render(){return this.multiple?this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}[]" placeholder="${this.label}" multiple>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:this.required?o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}" required>
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `:o.dy`
          <select input_id="${this.input_id}" id="${this.id}" name="${this.name}" placeholder="${this.label}">
            ${this.options.map((e=>{const t=void 0===e.isSelected?e.selected:e.isSelected;return!0===t||"true"===t?o.dy`
                  <option value="${e.id}" selected>${e.name}</option>
                `:o.dy`
                  <option value="${e.id}">${e.name}</option>
                `}))}
          </select>
        `}firstUpdated(){}formatRepo(e){return e.loading?e.text:r(this.value.map((t=>{const i=Number(e.id)===t.id?"selected='true'":"";return'<option value="'+e.id+'" '+i+">"+e.text+"</option>"})))}formatRepoSelection(e){return e.full_name||e.text}_start(e,t){const i=this;return this.startSearchPage=isNaN(e.page)?0:e.page,this.startSearchPage=0===this.startSearchPage?this.startSearchPage:this.startSearchPage*t,r(".select2-search__field").on("keyup",(function(e){r(i.selectSelector).empty(),i.startSearchPage=0})),i.startSearchPage}showDropdownAlt(){const e=this;let t=this.totalShowing,i=this.startSearchPage;if(!1===this.showSelectorLoaded){if(this.showSelectorLoaded=!0,null===this.ajaxFetchUrl)this.selectSelector.forEach((e=>{r(e).select2({closeOnSelect:!1,placeholder:this.label}),r(e).on("select2:select",(e=>{this.changeAction(e)}))}));else{let o={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*","Content-Type":"application/json"};for(const e in this.ajaxHeader)o[e]=this.ajaxHeader[e];this.selectSelector.forEach((s=>{r(s).select2({closeOnSelect:!1,ajax:{url:e.ajaxFetchUrl,dataType:"json",delay:250,data:function(o){const s=function(o,s){return i=isNaN(o.page)?0:o.page,i=0===i?i:i*t,r(".select2-search__field").on("keyup",(function(o){r(e.selectSelector).empty(),i=0,t=0})),i}(o),n=function(i,o){let s=isNaN(i.page)?1:i.page+1;return s=0===s?1:s,r(".select2-search__field").on("keyup",(function(i){r(e.selectSelector).empty(),s=0,t=0})),s}(o);let a={search:o.term,start:s,page:n};return e.ajaxFetchUrlParams.forEach((e=>{a[e.param]=e.value})),a},headers:o,processResults:(e,i)=>{const r=null===this.ajaxFetchProcessResponse?this._processResults(e,i):this.ajaxFetchProcessResponse(e,i);return t+=r.results.length,{results:r.results,pagination:{more:t<r.total}}},cache:!0},placeholder:this.label}).on("select2:opening",(e=>{i=0,t=0}))}))}this.querySelectorAll(".select2-container").forEach((e=>{e.setAttribute("style","width: 100% !important; pointer-events: auto !important;")}))}}_processResults(e,t){const i=e;t.page=t.page||0;let r=[];if(!1===i.error){var o=i.data;for(let e=0;e<o.length;e++){const t=o[e],i={id:t.id,text:t.fullName};r.includes(i)||r.push(i)}}return this.totalShowing+=r.length,{results:r,total:i.total,totalShowing:this.totalShowing}}changeAction(e){const t=this.querySelector(`[input_id="${this.input_id}"]`).selectedOptions;let i=[];for(const e of t){let t=e;const r=Number.isNaN(t.value)?0:Number(t.value);i.includes(r)||i.push(r)}this.currentValue=i,this.querySelector(`[input_id="${this.input_id}"]`).setAttribute("currentValue",i)}createRenderRoot(){return this}};l.styles=[o.iv`
      .select2-container {
        pointer-events: auto !important;
      }
    `],n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"name",void 0),n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"label",void 0),n([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"value",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"randomID",void 0),n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"input_id",void 0),n([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"options",void 0),n([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"required",void 0),n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchToken",void 0),n([(0,s.Cb)({type:String}),a("design:type",String)],l.prototype,"ajaxFetchUrl",void 0),n([(0,s.Cb)({attribute:!1}),a("design:type",Object)],l.prototype,"currentValue",void 0),n([(0,s.Cb)({type:Object}),a("design:type",Function)],l.prototype,"ajaxFetchProcessResponse",void 0),n([(0,s.Cb)({type:Array}),a("design:type",Array)],l.prototype,"ajaxFetchUrlParams",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startSearchPage",void 0),n([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"multiple",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"startNumber",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"rowsPerPage",void 0),n([(0,s.Cb)({type:Number}),a("design:type",Number)],l.prototype,"totalShowing",void 0),n([(0,s.Cb)({type:Boolean}),a("design:type",Boolean)],l.prototype,"showSelectorLoaded",void 0),l=n([(0,s.Mo)("select-input")],l)},4495:(e,t,i)=>{i.r(t),i.d(t,{PdbAdminUserEditGroupSubgroupForm:()=>k});var r=i(9392),o=i(1936),s=i(2004),n=i(7052),a=i(4672),l=i(6262),c=(i(6811),i(2715),i(8763),i(5248),i(3313),i(9261),i(1877),i(2169),i(5866),i(3600)),d=(i(1525),i(6455)),p=i.n(d),u=i(771),h=i(7270),y=i(596),f=i(8967),g=function(e,t,i,r){return new(i||(i=Promise))((function(o,s){function n(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}))},b=function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,i,r){return new(i||(i=Promise))((function(o,s){function n(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}))};let S=class extends r.oi{constructor(){super(),this.edit="false",this.editAccess=!1,this.isEditable=!1,this.page_type="mine",this._activeBranchId=null,this._userLoginInfo=null,this._clientUser=this._clientUserDefault,this._clientUserAccess=this._clientUserAccessDefault}get _clientUserDefault(){return{data:{},message:"",success:!1}}set clientUser(e){this._clientUser=e,this.requestUpdate()}get clientUser(){return this._clientUser}get _clientUserAccessDefault(){return{data:{},message:"",success:!1}}set clientUserAccess(e){this._clientUserAccess=e,this.requestUpdate()}get clientUserAccess(){return this._clientUserAccess}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,c.Ie)()]}))}disconnectedCallback(){}render(){return"mine"===this.page_type||this.editAccess?this.isEditable=!0:this.isEditable=!1,r.dy`
      <div class="">
        <div class="my-2">
          ${this.profileForm}
        </div>
      
      </div>
    `}get profileForm(){let e=0;null!==this._activeBranchId&&this._activeBranchId[0].accountId;const t=this.clientUser,i=t.data,o=Array.isArray(i)?i[0]:i;return t.success?r.dy`
        <div class="w-full">
          <div class="flex justify-center my-1">
            <div class="form-container flex justify-center">
              <div class="app-container- !px-0">
                <div class="app-container--row !px-0">
                  <div class="app-container--col-md-12">
                    <header
                      class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mb-2">
                      <label for="" class="label">
                        <mwc-icon class="icon">format_strikethrough</mwc-icon>
                        <h1 class="h1 !text-red-400">Member</h1>
                        <h3 class="h3">Update Profile Picture!</h3>
                      </label>
                    </header>
                    <form method="post" action="#" class="form !my-1" make-general-posts="client-user"
                      enctype="multipart/form-data">
                      <pdb-membership-update-view-photo headTitle="${o.firstname} ${o.surname}'s Photo"
                        inputId="profilePicture" inputName="profilePicture" inputLabel="Update Profile Picture"
                        ?inputRequired="${!0}" currentImage="${o.profilePicture}">
                      </pdb-membership-update-view-photo>
                      <div
                        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                        <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
                        </mwc-button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `:r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User </span>: undefined error</h4>
          </div>
        </div>
      `}firstUpdated(){}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault();const t=this.clientUser,i=t.data,r=Array.isArray(i)?i[0]:i;t.success&&(yield function(e){return g(this,void 0,void 0,(function*(){const t=(0,c.Ie)(),i=u.t.URLS.AKWAABA_API_BASE_URL+"clients/user/"+e,r=document.querySelector('[make-general-posts="client-user"]'),o=new FormData(r);return p().fire({title:"Update user profile?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,h.d)(i,{method:"PATCH",body:o,headers:{Authorization:"Token "+t.token}},!1).then((e=>{const t=new y.H("post",e,!1,r),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((i=>{let r={error:t.id+": "+i};"non_field_errors"===t.id&&(r={error:i}),e.push(r)}))}));const t=(0,f.T)(e);p().showValidationMessage(`${t}`)}return t})).catch((e=>{p().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!p().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),i=r.response.success}i&&p().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(r.id))}))}createRenderRoot(){return this}};S.styles=[r.iv`
   :host { display: block; }
  `],b([(0,o.Cb)({type:String}),m("design:type",String)],S.prototype,"edit",void 0),b([(0,o.Cb)({type:Boolean}),m("design:type",Boolean)],S.prototype,"editAccess",void 0),b([(0,o.Cb)({type:Boolean}),m("design:type",Boolean)],S.prototype,"isEditable",void 0),b([(0,o.Cb)({type:String}),m("design:type",String)],S.prototype,"page_type",void 0),b([(0,o.Cb)({type:Array}),m("design:type",Array)],S.prototype,"_activeBranchId",void 0),b([(0,o.Cb)({type:Array}),m("design:type",Array)],S.prototype,"_userLoginInfo",void 0),S=b([(0,o.Mo)("pdb-admin-user-photo-form"),m("design:paramtypes",[])],S);var _=i(7775),w=i(2506),x=i(8474),C=i(6995),$=(i(3683),i(4657),i(9665)),U=i(2145),A=i(1302),I=i(1710),j=function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},N=function(e,t,i,r){return new(i||(i=Promise))((function(o,s){function n(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}))};let k=class extends r.oi{constructor(){super(),this.userId=0,this.loggedUserId=0,this.editAccess=!1,this.page_type="mine",this._activeBranchId=null,this._userLoginInfo=null,this.__clientUser=null,this.__clientUserGroupSubgroup=this._clientUserGroupSubgroupDefault,this._hasSetup=!1}set _clientUser(e){this.__clientUser=e,this.requestUpdate()}get _clientUser(){return this.__clientUser}get _clientUserGroupSubgroupDefault(){return{data:{},message:"",success:!1}}set _clientUserGroupSubgroup(e){this.__clientUserGroupSubgroup=e,this.requestUpdate()}get _clientUserGroupSubgroup(){return this.__clientUserGroupSubgroup}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return N(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,$.f)().then((()=>this._hasSetup=!0)),this.getUserId();const t=(0,s.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,c.Ie)()],0===this.userId||null===this.userId||Number.isNaN(this.userId)||(yield this.getClientUser(),this._clientUser.success&&(yield this.getLoggedUserAccess(),yield this.getClientUserGroupSubgroup(),this.userId===this.loggedUserId?this.page_type="mine":this.page_type="not-mine"))}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,U.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,A.H)({pageId:I.W.update,viewType:"Both"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.userId||null===this.userId||Number.isNaN(this.userId)){const e=r.dy`<h4 class="text-white">Error</h4>`,t=r.dy`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;return r.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}return null===this._clientUser?r.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `:void 0===this._clientUser?r.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Error </span>: undefined error</h4>
            </div>
          </div>
        `:r.dy`
        <div class="my-2">
          <pdb-admin-user-photo-form edit="true" page_type="${this.page_type}" ?editaccess="${this.editAccess}" .clientUser="${this._clientUser}"
            .clientUserGroupSubgroup="${this._clientUserGroupSubgroup}" .userId="${this.userId}">
          </pdb-admin-user-photo-form>
        </div>
      `}firstUpdated(){}getUserId(){let e=(0,a.Jx)("user-id"),t=null!==e?(0,n.t)(e):null;this.userId=Number.isNaN(t)?null:Number(t)}getClientUser(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,l.a)(this.userId,"?branchId="+e);this._clientUser=null===t?void 0:t.response}))}getClientUserGroupSubgroup(){return N(this,void 0,void 0,(function*(){const e=yield(0,x.x)(null,"?userId="+this.userId);if(null===e)this._clientUserGroupSubgroup=void 0;else{const t=e.response.data;Array.isArray(t)?e.response.data=t.map((e=>C.e.toClientUserGroupSubgroupModel(JSON.stringify(e)))):e.response.data=[C.e.toClientUserGroupSubgroupModel(JSON.stringify(t))],this._clientUserGroupSubgroup=e.response}}))}getLoggedUserAccess(){return N(this,void 0,void 0,(function*(){let e=0;null!==this._userLoginInfo&&this._userLoginInfo.length>0&&(e=this._userLoginInfo[0].user.id),this.loggedUserId=e;const t=yield(0,w.H)(null,"?logged_user_this&userId="+this.loggedUserId);if(null!==t&&t.response.success){const e=t.response.data;Array.isArray(e)&&e.forEach((e=>{14===(e=(0,_.z)(e)).page.id&&(this.editAccess=!0)}))}}))}createRenderRoot(){return this}};k.styles=[r.iv`
   :host { display: block; }
  `],j([(0,o.Cb)({type:Number}),R("design:type",Number)],k.prototype,"userId",void 0),j([(0,o.Cb)({type:Number}),R("design:type",Number)],k.prototype,"loggedUserId",void 0),j([(0,o.Cb)({type:Boolean}),R("design:type",Boolean)],k.prototype,"editAccess",void 0),j([(0,o.Cb)({type:String}),R("design:type",String)],k.prototype,"page_type",void 0),j([(0,o.Cb)({type:Array}),R("design:type",Array)],k.prototype,"_activeBranchId",void 0),j([(0,o.Cb)({type:Array}),R("design:type",Array)],k.prototype,"_userLoginInfo",void 0),j([(0,o.Cb)({type:Boolean}),R("design:type",Boolean)],k.prototype,"_hasSetup",void 0),k=j([(0,o.Mo)("pdb-admin-user-edit-photo-form"),R("design:paramtypes",[])],k)},1525:(e,t,i)=>{i(7725);var r=i(9392),o=i(1936),s=function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n},n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends r.oi{constructor(){super(),this.inputLabel=""}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,i=void 0,o=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,s){function n(e){try{l(o.next(e))}catch(e){s(e)}}function a(e){try{l(o.throw(e))}catch(e){s(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(n,a)}l((o=o.apply(t,i||[])).next())}));var t,i,r,o}disconnectedCallback(){}render(){return r.dy`
      <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
        <div class="flex h-full flex-col justify-center gap-4 p-3">
          <h5 class="text-xl font-medium text-gray-500 dark:text-gray-400">${this.headTitle}</h5>
          <div fileSelectorPreviewer class="h-[400px] flex justify-center">
            <img class="object-contain bg-contain" src="${this.currentImage}">
          </div>
        </div>
        <div class="flex h-full flex-col justify-center gap-4 p-3 border border-gray-200">
          <file-input id="${this.inputId}" name="${this.inputName}" label="${this.inputLabel}" accept="image/jpg,image/jpeg,image/png"
            ?required="${this.inputRequired}" ?hasLabel="${!0}" fileSelectorInput></file-input>
        </div>
      </div>
    `}updateImageAction(){document.querySelectorAll("[fileSelectorInput]").forEach((e=>{e.addEventListener("change",(t=>{console.log({input:e});var i=window.URL.createObjectURL(e.fileSelector.files[0]);document.querySelectorAll("[fileSelectorPreviewer]").forEach((e=>{e.innerHTML=`<img class="object-contain bg-contain h-[400px] flex justify-center" src="${i}">`}))}))}))}firstUpdated(){this.updateImageAction()}createRenderRoot(){return this}};a.styles=[r.iv`
   :host { display: block; }
  `],s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"headTitle",void 0),s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"currentImage",void 0),s([(0,o.Cb)({type:Number}),n("design:type",Number)],a.prototype,"inputId",void 0),s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"inputName",void 0),s([(0,o.Cb)({type:String}),n("design:type",String)],a.prototype,"inputLabel",void 0),s([(0,o.Cb)({type:Boolean}),n("design:type",Boolean)],a.prototype,"inputRequired",void 0),a=s([(0,o.Mo)("pdb-membership-update-view-photo"),n("design:paramtypes",[])],a)},4232:(e,t,i)=>{i.d(t,{OR:()=>n,hl:()=>l,pt:()=>s});var r=i(3692);const{I:o}=r.Al,s=e=>null===e||"object"!=typeof e&&"function"!=typeof e,n=e=>void 0===e.strings,a={},l=(e,t=a)=>e._$AH=t},8082:(e,t,i)=>{i.d(t,{XM:()=>r.XM,Xe:()=>r.Xe,pX:()=>r.pX});var r=i(875)},3669:(e,t,i)=>{i.d(t,{a:()=>n});var r=i(3692),o=i(875),s=i(4232);const n=(0,o.XM)(class extends o.Xe{constructor(e){if(super(e),e.type!==o.pX.PROPERTY&&e.type!==o.pX.ATTRIBUTE&&e.type!==o.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,s.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===r.Jb||t===r.Ld)return t;const i=e.element,n=e.name;if(e.type===o.pX.PROPERTY){if(t===i[n])return r.Jb}else if(e.type===o.pX.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(n))return r.Jb}else if(e.type===o.pX.ATTRIBUTE&&i.getAttribute(n)===t+"")return r.Jb;return(0,s.hl)(e),t}})}},e=>(e.O(0,[2185,5744,9674,8820,1828,316,836,5291,6236,6069,7751,4710,3712],(()=>(4495,e(e.s=4495)))),e.O())])));
//# sourceMappingURL=edit_photo.js.map