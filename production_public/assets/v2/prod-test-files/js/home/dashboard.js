"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4633],{6656:(e,t,s)=>{s.d(t,{E:()=>l});var i=s(771),a=s(7270),r=s(596),c=s(3600);function l(e=null,t="",s=!1){return l=this,n=void 0,d=function*(){const l=i.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,n=i.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,o=(0,c.Ie)(),d=s?n:l,p=yield(0,a.d)(d,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new r.H("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new r.H("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function s(e){try{a(d.next(e))}catch(e){t(e)}}function i(e){try{a(d.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(s,i)}a((d=d.apply(l,n||[])).next())}));var l,n,o,d}},8763:(e,t,s)=>{var i=s(5862),a=s(8393),r=function(e,t,s,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends i.oi{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?i.dy`
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
      `:i.dy`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?i.dy`<header class="header">${this.header}</header>`:i.Ld}
              ${null!==this.content?i.dy`<main class="main">${this.content}</main>`:i.Ld}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?i.dy`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?i.dy`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?i.dy`<mwc-icon>notification_important</mwc-icon>`:this.warning?i.dy`<mwc-icon>warning</mwc-icon>`:this.danger?i.dy`<mwc-icon>error_outline</mwc-icon>`:this.default?i.dy`<mwc-icon>priority_high</mwc-icon>`:this.primary?i.dy`<mwc-icon>star_outline</mwc-icon>`:i.dy`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};l.styles=[i.iv`
   :host { display: block; }
  `],r([(0,a.Cb)({type:Boolean}),c("design:type",Boolean)],l.prototype,"loading",void 0),r([(0,a.Cb)({type:Boolean}),c("design:type",Boolean)],l.prototype,"success",void 0),r([(0,a.Cb)({type:Boolean}),c("design:type",Boolean)],l.prototype,"info",void 0),r([(0,a.Cb)({type:Boolean}),c("design:type",Boolean)],l.prototype,"warning",void 0),r([(0,a.Cb)({type:Boolean}),c("design:type",Boolean)],l.prototype,"danger",void 0),r([(0,a.Cb)({type:Boolean}),c("design:type",Boolean)],l.prototype,"default",void 0),r([(0,a.Cb)({type:Boolean}),c("design:type",Boolean)],l.prototype,"primary",void 0),r([(0,a.Cb)({type:String}),c("design:type",String)],l.prototype,"extra_class",void 0),l=r([(0,a.Mo)("alert-card"),c("design:paramtypes",[])],l)},6883:(e,t,s)=>{var i,a=s(5862),r=s(8393),c=function(e,t,s,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends a.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.dy`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return a.dy`
      ${this.dt_head.map((e=>a.dy`<th>${e.title}</th>`))}
    `}tbody(){return a.dy`
      ${this.dt_body.map((e=>a.dy`<tr>${e.map((e=>a.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return a.dy`
    ${this.dt_foot.map((e=>a.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const s=this.ajaxHeader[e];t[e]=s}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};n.styles=[a.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],c([(0,r.Cb)({type:Number}),l("design:type",Number)],n.prototype,"randomID1",void 0),c([(0,r.Cb)({type:Number}),l("design:type",Number)],n.prototype,"randomID2",void 0),c([(0,r.Cb)({type:String}),l("design:type",String)],n.prototype,"ID",void 0),c([(0,r.Cb)({type:Object}),l("design:type","function"==typeof(i="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?i:Object)],n.prototype,"datatable",void 0),c([(0,r.Cb)({type:Array}),l("design:type",Array)],n.prototype,"dt_head",void 0),c([(0,r.Cb)({type:Array}),l("design:type",Array)],n.prototype,"dt_foot",void 0),c([(0,r.Cb)({type:Array}),l("design:type",Array)],n.prototype,"dt_body",void 0),c([(0,r.Cb)(),l("design:type",Object)],n.prototype,"ajaxHeader",void 0),n=c([(0,r.Mo)("datatables-new"),l("design:paramtypes",[])],n)},8281:(e,t,s)=>{var i=s(771),a=s(5862),r=s(8393),c=function(e,t,s,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends a.oi{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.dy`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.t.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=i.t.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};n.styles=[a.iv`
   :host { display: block; }
  `],c([(0,r.Cb)({type:String}),l("design:type",String)],n.prototype,"url",void 0),c([(0,r.Cb)({type:String}),l("design:type",String)],n.prototype,"type",void 0),c([(0,r.Cb)({type:Boolean}),l("design:type",Boolean)],n.prototype,"rounded",void 0),c([(0,r.Cb)({type:String}),l("design:type",String)],n.prototype,"click-to-open",void 0),c([(0,r.Cb)({type:Number}),l("design:type",Number)],n.prototype,"size",void 0),n=c([(0,r.Mo)("user-profile-photo"),l("design:paramtypes",[])],n)},3465:(e,t,s)=>{s.r(t),s.d(t,{PdbDashboardIndex:()=>j});var i=s(5862),a=s(8393),r=(s(5248),s(6811),s(2715),s(8281),s(979)),c=s(4805),l=(s(6883),s(2004)),n=s(6656),o=s(7052),d=function(e,t,s,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(e,t,s,i){return new(s||(s=Promise))((function(a,r){function c(e){try{n(i.next(e))}catch(e){r(e)}}function l(e){try{n(i.throw(e))}catch(e){r(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(c,l)}n((i=i.apply(e,t||[])).next())}))};let u=class extends i.oi{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._activeBranchId=null,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return h(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,l.hk)();this._activeBranchId=null===t?null:[t],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._members?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._members?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:i.dy`
      ${this.table}
    `}get table(){return i.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>#</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Member(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <mwc-icon>tune</mwc-icon>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){const e=this._members.results;return Array.isArray(e)?e.map((e=>{const t=(0,o.h)(String(e.id),!0);return i.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <user-profile-photo class="w-16 h-16 mr-1" rounded 'click-to-open'="" click-to-open="${this.memberProfileBaseUrl}${t}" type="member"
                  url="${e.profilePicture}" size="16"></user-profile-photo>
                <p class="ml-1">${e.firstname} ${e.middlename} ${e.surname}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.memberProfileBaseUrl}${t}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `})):i.dy``}firstUpdated(){}getMembers(){return h(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,n.E)(null,"?branchId="+e+"&length=5&memberType=1&order__by=-id");this._members=null===t?void 0:t.paginResponse}))}createRenderRoot(){return this}};u.styles=[i.iv`
   :host { display: block; }
  `],d([(0,a.Cb)({type:String}),p("design:type",String)],u.prototype,"memberProfileBaseUrl",void 0),d([(0,a.Cb)({type:Array}),p("design:type",Array)],u.prototype,"_activeBranchId",void 0),u=d([(0,a.Mo)("pdb-dashboard-members"),p("design:paramtypes",[])],u),s(8763);var b=function(e,t,s,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends i.oi{constructor(){super(),this.dashboardMetrics=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,a=function*(){e.connectedCallback.call(this)},new((i=void 0)||(i=Promise))((function(e,r){function c(e){try{n(a.next(e))}catch(e){r(e)}}function l(e){try{n(a.throw(e))}catch(e){r(e)}}function n(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(c,l)}n((a=a.apply(t,s||[])).next())}));var t,s,i,a}disconnectedCallback(){}render(){return this.dashboardMetrics.map((e=>i.dy`
        <div class="!max-w-full d-none"></div>
        ${this.headers("Account Metrics")}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("All Members","fa-users","bg-midnight-bloom",e.statistics.allMembers)}
          ${this.metric("All Males","fa-male","bg-midnight-bloom",e.statistics.allMales)}
          ${this.metric("All Females","fa-female","bg-midnight-bloom",e.statistics.allFemales)}
          ${this.metric("All Organizations","fa-building","bg-midnight-bloom",e.statistics.allOrganizations)}
          ${this.metric("All Admins","fa-id-badge","bg-midnight-bloom",e.statistics.allAdmins)}
          ${this.metric("All Archived","fa-archive","bg-midnight-bloom",e.statistics.allArchived)}
        </div>
        ${this.headers(e.statistics.currentBranch.branch.name+" Branch Metrics")}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("All Members","fa-users","bg-night-sky",e.statistics.currentBranch.allMembers)}
          ${this.metric("All Males","fa-male","bg-night-sky",e.statistics.currentBranch.allMales)}
          ${this.metric("All Females","fa-female","bg-night-sky",e.statistics.currentBranch.allFemales)}
          ${this.metric("All Organizations","fa-building","bg-night-sky",e.statistics.currentBranch.allOrganizations)}
          ${this.metric("All Admins","fa-id-badge","bg-night-sky",e.statistics.currentBranch.allAdmins)}
          ${this.metric("All Archived","fa-archive","bg-night-sky",e.statistics.currentBranch.allArchived)}
        </div>
        ${this.headers("Subscription Info")}
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 pb-5">
          ${this.metric("Subscription Amount","pe-7s-cash py-2","bg-vicious-stance",e.statistics.subscriptionAmount,"p-3")}
          <div class="bg-white border border-gray-200 rounded shadow-sm p-0">
            <div class="flex flex-row items-center h-full">
              <div class="flex-shrink pr-2 contents">
                <div class="rounded py-2 px-3 bg-vicious-stance">
                  <i class="fa fa-clock fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="grid grid-cols-1 sm:grid-cols-1 grid-flow-row gap-1 p-1">
                      <div class="text-muted flex justify-end items-center content-center">
                        <input type="hidden" getClock__="${this.getDate(e.expirationDate)}" name="">
                        <h5 class="font-bold uppercase text-gray-400 pr-2">Subscription Ends In</h5>
                      </div>
                      <ul class="countdown px-1 pt-1 flex justify-center items-center content-center">
                        <li> <span style="background-color: #eee" class="days p-1">00</span>
                          <p class="days_ref">days</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="hours p-1">00</span>
                          <p class="hours_ref">hours</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="minutes p-1">00</span>
                          <p class="minutes_ref">minutes</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="seconds p-1">00</span>
                          <p class="seconds_ref">seconds</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->
        </div>
      `))}headers(e){const t=i.dy`<h4 class="text-gray-600">${e}</h4>`,s=i.Ld;return i.dy`<alert-card info .header="${t}" .content="${s}" extra_class="!max-w-full"></alert-card>`}metric(e,t,s,a,r="py-2 px-3"){return i.dy`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${r} bg-green-600 ${s}">
              <i class="fa ${t} fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h6 class="font-bold uppercase text-gray-400">${e}</h6>
            <h4 class="font-bold text-3xl text-gray-600">
              ${a} <span class="text-green-500 text-grow-early">
                <i class="fas fa-caret-right"></i>
              </span>
            </h4>
          </div>
        </div>
      </div>
    `}firstUpdated(e){setTimeout((()=>{countDownCounter({selector:document.querySelector(".countdown"),date:document.querySelector("[getClock__]").getAttribute("getClock__")})}),500)}getDate(e){console.log({date_date_date:e}),null===e&&(e=new Date);let t=e.toLocaleString("default",{year:"numeric"});return e.toLocaleString("default",{month:"2-digit"})+"/"+e.toLocaleString("default",{day:"2-digit"})+"/"+t+" 00:00"}createRenderRoot(){return this}};m.styles=[i.iv`
   :host { display: block; }
  `],b([(0,a.Cb)({type:Array}),f("design:type",Array)],m.prototype,"dashboardMetrics",void 0),m=b([(0,a.Mo)("pdb-dashboard-main-user"),f("design:paramtypes",[])],m);var y=function(e,t,s,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let v=class extends i.oi{constructor(){super(),this.dashboardMetrics=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,a=function*(){e.connectedCallback.call(this)},new((i=void 0)||(i=Promise))((function(e,r){function c(e){try{n(a.next(e))}catch(e){r(e)}}function l(e){try{n(a.throw(e))}catch(e){r(e)}}function n(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(c,l)}n((a=a.apply(t,s||[])).next())}));var t,s,i,a}disconnectedCallback(){}render(){return console.log({"this.dashboardMetrics":this.dashboardMetrics}),this.dashboardMetrics.map((e=>i.dy`
        <div class="!max-w-full d-none"></div>
        ${this.headers(e.statistics.branch.name+" Branch Metrics")}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric("All Members","fa-users","bg-night-sky",e.statistics.allMembers)}
          ${this.metric("All Males","fa-male","bg-night-sky",e.statistics.allMales)}
          ${this.metric("All Females","fa-female","bg-night-sky",e.statistics.allFemales)}
          ${this.metric("All Organizations","fa-building","bg-night-sky",e.statistics.allOrganizations)}
          ${this.metric("All Admins","fa-id-badge","bg-night-sky",e.statistics.allAdmins)}
          ${this.metric("All Archived","fa-archive","bg-night-sky",e.statistics.allArchived)}
        </div>
        ${this.headers("Subscription Info")}
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 pb-5">
          <div class="bg-white border border-gray-200 rounded shadow-sm p-0">
            <div class="flex flex-row items-center h-full">
              <div class="flex-shrink pr-2 contents">
                <div class="rounded py-2 px-3 bg-vicious-stance">
                  <i class="fa fa-clock fa-2x fa-fw fa-inverse"></i>
                </div>
              </div>
              <div class="flex-1 text-right md:text-center">
                <div class="widget-content p-0">
                  <div class="widget-content-outer">
                    <div class="grid grid-cols-1 sm:grid-cols-1 grid-flow-row gap-1 p-1">
                      <div class="text-muted flex justify-end items-center content-center">
                        <input type="hidden" getClock__="${this.getDate(e.expirationDate)}" name="">
                        <h5 class="font-bold uppercase text-gray-400 pr-2">Subscription Ends In</h5>
                      </div>
                      <ul class="countdown px-1 pt-1 flex justify-center items-center content-center">
                        <li> <span style="background-color: #eee" class="days p-1">00</span>
                          <p class="days_ref">days</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="hours p-1">00</span>
                          <p class="hours_ref">hours</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="minutes p-1">00</span>
                          <p class="minutes_ref">minutes</p>
                        </li>
                        <li class="seperator !px-0">|</li>
                        <li> <span style="background-color: #eee" class="seconds p-1">00</span>
                          <p class="seconds_ref">seconds</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->
        </div>
      `))}headers(e){const t=i.dy`<h4 class="text-gray-600">${e}</h4>`,s=i.Ld;return i.dy`<alert-card info .header="${t}" .content="${s}" extra_class="!max-w-full"></alert-card>`}metric(e,t,s,a,r="py-2 px-3"){return i.dy`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${r} bg-green-600 ${s}">
              <i class="fa ${t} fa-2x fa-fw fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h6 class="font-bold uppercase text-gray-400">${e}</h6>
            <h4 class="font-bold text-3xl text-gray-600">
              ${a} <span class="text-green-500 text-grow-early">
                <i class="fas fa-caret-right"></i>
              </span>
            </h4>
          </div>
        </div>
      </div>
    `}firstUpdated(e){setTimeout((()=>{countDownCounter({selector:document.querySelector(".countdown"),date:document.querySelector("[getClock__]").getAttribute("getClock__")})}),500)}getDate(e){console.log({date_date_date:e}),null===e&&(e=new Date);let t=e.toLocaleString("default",{year:"numeric"});return e.toLocaleString("default",{month:"2-digit"})+"/"+e.toLocaleString("default",{day:"2-digit"})+"/"+t+" 00:00"}createRenderRoot(){return this}};v.styles=[i.iv`
   :host { display: block; }
  `],y([(0,a.Cb)({type:Array}),g("design:type",Array)],v.prototype,"dashboardMetrics",void 0),v=y([(0,a.Mo)("pdb-dashboard-branch-user"),g("design:paramtypes",[])],v);let w=class extends i.oi{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,a=function*(){e.connectedCallback.call(this)},new((i=void 0)||(i=Promise))((function(e,r){function c(e){try{n(a.next(e))}catch(e){r(e)}}function l(e){try{n(a.throw(e))}catch(e){r(e)}}function n(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(c,l)}n((a=a.apply(t,s||[])).next())}));var t,s,i,a}disconnectedCallback(){}render(){return i.dy`
        <div class="!max-w-full d-none"></div>
        ${this.headers()}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
        </div>
        ${this.headers()}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 pb-2">
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
          ${this.metric()}
        </div>
        ${this.headers()}
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 pb-5">
          ${this.metric()}
          ${this.metric()}
          <!-- -->
        </div>
      `}headers(){return i.dy`<alert-card loading extra_class="!max-w-full"></alert-card>`}metric(){return i.dy`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4 placeholder--load-wrapper">
            <div class="rounded p-3 placeholder--activity">
              <i class="p-2"></i>
            </div>
          </div>
          <div class="ml-2 flex-1 placeholder--load-wrapper">
            <div class="placeholder--activity p-2"></div>
          </div>
        </div>
      </div>
    `}createRenderRoot(){return this}};w.styles=[i.iv`
   :host { display: block; }
  `],w=function(e,t,s,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c}([(0,a.Mo)("pdb-dashboard-loading-user"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],w);var _=s(771),x=s(5474),k=(s(3683),s(2145)),$=(s(4657),s(1302)),C=function(e,t,s,i){var a,r=arguments.length,c=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},A=function(e,t,s,i){return new(s||(s=Promise))((function(a,r){function c(e){try{n(i.next(e))}catch(e){r(e)}}function l(e){try{n(i.throw(e))}catch(e){r(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(c,l)}n((i=i.apply(e,t||[])).next())}))};let j=class extends i.oi{constructor(){super(),this._dashboardMetricsCalled=!1,this._dashboardMetrics=[],this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return A(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield(0,x.f)(),yield this.getDashboardMetrics()}))}disconnectedCallback(){}render(){var e;return(null===(e=(0,k.H)())||void 0===e?void 0:e.expiration_date.expired)?i.dy`<account-expired-component></account-expired-component>`:(0,$.H)({pageId:0,viewType:"View"},!0)?i.dy`
      ${this.metricsSection}
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Recent Users</div>
            <pdb-dashboard-members></pdb-dashboard-members>
            <div class="d-block text-center card-footer">
              <a href="${_.t.URLS.PDB_CLIENT}member/members" class="btn-wide btn btn-success">Members</a>
            </div>
          </div>
        </div>
      </div>
    `:i.dy`<no-page-entry-component></no-page-entry-component>`}get metricsSection(){return!1===this._dashboardMetricsCalled?i.dy`
        <div class="main-container">
          <!-- <div class="flex justify-center"> -->
          <pdb-dashboard-loading-user></pdb-dashboard-loading-user>
          <!-- </div> -->
        </div>
      `:this._dashboardMetrics.length<1?i.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Metrics </span>: Error!</h4>
          </div>
        </div>
      `:1===this._dashboardMetrics[0].type.id?i.dy`<pdb-dashboard-main-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-main-user>`:i.dy`<pdb-dashboard-branch-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-branch-user>`}firstUpdated(){}getDashboardMetrics(){return A(this,void 0,void 0,(function*(){const e=yield(0,r.E)();if(this._dashboardMetricsCalled=!0,null===e)this._dashboardMetrics=[];else if(e.response.success&&"statistics"in e.response.data){const t=c.e.toClientUserDashboardMetricModel(JSON.stringify(e.response.data));this._dashboardMetrics=[t]}else this._dashboardMetrics=[]}))}createRenderRoot(){return this}};j.styles=[i.iv`
   :host { display: block; }
  `],C([(0,a.Cb)({type:Boolean}),R("design:type",Boolean)],j.prototype,"_dashboardMetricsCalled",void 0),C([(0,a.Cb)({type:Array}),R("design:type",Array)],j.prototype,"_dashboardMetrics",void 0),j=C([(0,a.Mo)("pdb-dashboard-index"),R("design:paramtypes",[])],j)}},e=>(e.O(0,[2185,5744,7154,1080,5291,6236,7583,6553,3712],(()=>(3465,e(e.s=3465)))),e.O())])));
//# sourceMappingURL=dashboard.js.map