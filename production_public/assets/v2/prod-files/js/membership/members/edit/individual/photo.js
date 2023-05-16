"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[5546],{6656:(e,t,i)=>{i.d(t,{E:()=>s});var r=i(771),n=i(7270),o=i(596),a=i(3600);function s(e=null,t="",i=!1){return s=this,c=void 0,d=function*(){const s=r.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,c=r.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,l=(0,a.Ie)(),d=i?c:s,p=yield(0,n.d)(d,{method:"GET",headers:{Authorization:"Token "+l.token}},!0);try{return new o.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new o.H("get",t,!0)}},new((l=void 0)||(l=Promise))((function(e,t){function i(e){try{n(d.next(e))}catch(e){t(e)}}function r(e){try{n(d.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(i,r)}n((d=d.apply(s,c||[])).next())}));var s,c,l,d}},7442:(e,t,i)=>{i.d(t,{l:()=>p});var r=i(6455),n=i.n(r),o=i(771),a=i(7270),s=i(596),c=i(8967),l=i(3600),d=function(e,t,i,r){return new(i||(i=Promise))((function(n,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};function p(e,t=null){return d(this,void 0,void 0,(function*(){const i=(0,l.Ie)(),r=o.t.URLS.AKWAABA_API_BASE_URL+"members/user/"+e,p=document.querySelector('[make-general-posts="members-user"]'),u=new FormData(p);return n().fire({title:null!=t?t:"Update Member Data?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>d(this,void 0,void 0,(function*(){return yield(0,a.d)(r,{method:"PATCH",body:u,headers:{Authorization:"Token "+i.token}},!1).then((e=>{const t=new s.H("post",e,!1,p),i=t.response;if("nameError"in i&&"unknownError"in i&&i.unknownError.length>0){let e=[];i.unknownError.forEach((t=>{t.errors.forEach((i=>{let r={error:t.id+": "+i};"non_field_errors"===t.id&&(r={error:i}),e.push(r)}))}));const t=(0,c.T)(e);n().showValidationMessage(`${t}`)}return t})).catch((e=>{n().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!n().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",i=!1;const r=e.value;if(r instanceof Object){const e=r.response;t=String(e.message),i=r.response.success}i&&n().fire({title:t,icon:i?"success":"error",iconColor:i?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),i&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},8763:(e,t,i)=>{var r=i(5862),n=i(8393),o=function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends r.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.dy`
        <div class="bg-white alert-box p-0 pr-2 mb-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4 placeholder--load-wrapper">
              <div class="p-3 placeholder--activity">
                <i class="p-2"></i>
              </div>
            </div>
            <div class="ml-2 flex-1 placeholder--load-wrapper">
              <div class="placeholder--activity p-2"></div>
            </div>
          </div>
        </div>
      `:r.dy`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?r.dy`<header class="header">${this.header}</header>`:r.Ld}
              ${null!==this.content?r.dy`<main class="main">${this.content}</main>`:r.Ld}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.dy`<mwc-icon>warning</mwc-icon>`:this.danger?r.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?r.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.dy`<mwc-icon>star_outline</mwc-icon>`:r.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};s.styles=[r.iv`
   :host { display: block; }
  `],o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"loading",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"success",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"info",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"warning",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"danger",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"default",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"primary",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"extra_class",void 0),s=o([(0,n.Mo)("alert-card"),a("design:paramtypes",[])],s)},7725:(e,t,i)=>{var r=i(5862),n=i(8393),o=(i(5185),i(5248),function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends r.oi{constructor(){super(...arguments),this.name="",this.label="",this.value="1",this.accept="*",this.randomID=Math.floor(12345*Math.random()),this.id=this.id+"_"+this.randomID,this.startNumber=10,this.rowsPerPage=10,this.totalShowing=10,this.showSelectorLoaded=!1}styles(){return[r.iv`
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
        `}firstUpdated(){}showFileSelector(){!1===this.showSelectorLoaded&&(this.showSelectorLoaded=!0)}createRenderRoot(){return this}};o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"name",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"label",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"value",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"accept",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],s.prototype,"randomID",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"id",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"required",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"hasLabel",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"multiple",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],s.prototype,"startNumber",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],s.prototype,"rowsPerPage",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],s.prototype,"totalShowing",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"showSelectorLoaded",void 0),s=o([(0,n.Mo)("file-input")],s)},2215:(e,t,i)=>{i.r(t),i.d(t,{PdbMembershipUpdatePhoto:()=>w});var r=i(5862),n=i(8393),o=(i(1525),i(5248),i(6811),i(7442)),a=i(7052),s=i(4672),c=i(6656),l=i(7684),d=i(5474),p=i(3600),u=i(2004),h=i(771),b=i(2145),m=i(1302),f=i(9981),y=(i(8763),i(4657),i(3683),function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}),g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},v=function(e,t,i,r){return new(i||(i=Promise))((function(n,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};let w=class extends r.oi{constructor(){super(),this.memberId=0,this._activeBranchId=null,this._pdbBranchMember=null,this._userLoginInfo=null,this._hasSetup=!1}set pdbBranchMember(e){this._pdbBranchMember=e,this.requestUpdate()}get pdbBranchMember(){return this._pdbBranchMember}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return v(this,void 0,void 0,(function*(){e.connectedCallback.call(this),(0,d.f)().then((()=>this._hasSetup=!0));const t=(0,u.hk)();this._activeBranchId=null===t?null:[t],this._userLoginInfo=[(0,p.Ie)()],this.getUserId(),0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)||(yield this.getMember())}))}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,b.H)())||void 0===e?void 0:e.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,m.H)({pageId:f.W.edit,viewType:"Edit"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}if(0===this.memberId||null===this.memberId||Number.isNaN(this.memberId)){const e=r.dy`<h4 class="text-white">Error</h4>`,t=r.dy`
        <div>
          <p class="text-black mb-2">Member Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to members page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
            href="${h.t.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
        </div>
      `;return r.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}{if(null===this.pdbBranchMember)return r.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;if(void 0===this.pdbBranchMember)return r.dy`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Member </span>: undefined error</h4>
            </div>
          </div>
        `;if(!1===this.pdbBranchMember.success){const e=r.dy`<h4 class="text-white">Error</h4>`,t=r.dy`
          <div>
            <p class="text-black mb-2">Member Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
              href="${h.t.URLS.PDB_CLIENT}member/members" label="Members Page"></link-button>
          </div>
        `;return r.dy`<alert-card warning .header="${e}" .content="${t}"></alert-card>`}const e=this.pdbBranchMember.data,t=l.e.toMembershipMixedUserModel(JSON.stringify(Array.isArray(e)?e[0]:e));return r.dy`
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
                  <form method="post" action="#" class="form !my-1" make-general-posts="members-user"
                    enctype="multipart/form-data">
                    <pdb-membership-update-view-photo headTitle="${t.firstname} ${t.surname}'s Photo"
                      inputId="profilePicture" inputName="profilePicture" inputLabel="Update Profile Picture"
                      ?inputRequired="${!0}" currentImage="${t.profilePicture}">
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
    `}}firstUpdated(){}getUserId(){let e=(0,s.Jx)("member-id"),t=null!==e?(0,a.t)(e):null;this.memberId=Number.isNaN(t)?null:Number(t)}getMember(){return v(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,c.E)(this.memberId,"?branchId="+e,!0);this.pdbBranchMember=null===t?void 0:t.response}))}submitForm(e){return v(this,void 0,void 0,(function*(){e.preventDefault(),console.log({e}),yield(0,o.l)(this.memberId,"Update Profile Image")}))}createRenderRoot(){return this}};w.styles=[r.iv`
   :host { display: block; }
  `],y([(0,n.Cb)({type:Number}),g("design:type",Number)],w.prototype,"memberId",void 0),y([(0,n.Cb)({type:Array}),g("design:type",Array)],w.prototype,"_activeBranchId",void 0),y([(0,n.Cb)({type:Array}),g("design:type",Array)],w.prototype,"_userLoginInfo",void 0),y([(0,n.Cb)({type:Boolean}),g("design:type",Boolean)],w.prototype,"_hasSetup",void 0),w=y([(0,n.Mo)("pdb-membership-update-photo"),g("design:paramtypes",[])],w)},1525:(e,t,i)=>{i(7725);var r=i(5862),n=i(8393),o=function(e,t,i,r){var n,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends r.oi{constructor(){super(),this.inputLabel=""}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,i=void 0,n=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(a,s)}c((n=n.apply(t,i||[])).next())}));var t,i,r,n}disconnectedCallback(){}render(){return r.dy`
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
    `}updateImageAction(){document.querySelectorAll("[fileSelectorInput]").forEach((e=>{e.addEventListener("change",(t=>{console.log({input:e});var i=window.URL.createObjectURL(e.fileSelector.files[0]);document.querySelectorAll("[fileSelectorPreviewer]").forEach((e=>{e.innerHTML=`<img class="object-contain bg-contain h-[400px] flex justify-center" src="${i}">`}))}))}))}firstUpdated(){this.updateImageAction()}createRenderRoot(){return this}};s.styles=[r.iv`
   :host { display: block; }
  `],o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"headTitle",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"currentImage",void 0),o([(0,n.Cb)({type:Number}),a("design:type",Number)],s.prototype,"inputId",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"inputName",void 0),o([(0,n.Cb)({type:String}),a("design:type",String)],s.prototype,"inputLabel",void 0),o([(0,n.Cb)({type:Boolean}),a("design:type",Boolean)],s.prototype,"inputRequired",void 0),s=o([(0,n.Mo)("pdb-membership-update-view-photo"),a("design:paramtypes",[])],s)},9981:(e,t,i)=>{i.d(t,{W:()=>r});const r={view:21,edit:22,create:23,"view-organization":53,"edit-organization":54}}},e=>(e.O(0,[2185,5744,9674,7154,1080,5291,6236,7583,4808,7751,3712],(()=>(2215,e(e.s=2215)))),e.O())])));
//# sourceMappingURL=photo.js.map