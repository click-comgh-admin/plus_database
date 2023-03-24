!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["home/dashboard"],{99493:(e,t,s)=>{"use strict";s.r(t)},26660:(e,t,s)=>{"use strict";s.r(t)},38034:(e,t,s)=>{"use strict";s.r(t)},28207:(e,t,s)=>{"use strict";s.r(t)},30367:()=>{},26656:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GET_MembershipUsers:()=>c});var r=s(48485),a=s(87270),i=s(14492),l=s(33600);function c(e=null,t="",s=!1){return c=this,n=void 0,d=function*(){const c=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,o=(0,l.getUserLoginInfoCookie)(),d=s?n:c,p=yield(0,a.http)(d,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new i.NetWorkCallResponses("get",p)}catch(e){console.error({error:e});let t=p;return t.error=e,new i.NetWorkCallResponses("get",t,!0)}},new((o=void 0)||(o=Promise))((function(e,t){function s(e){try{a(d.next(e))}catch(e){t(e)}}function r(e){try{a(d.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(s,r)}a((d=d.apply(c,n||[])).next())}));var c,n,o,d}},48763:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AlertCard:()=>c}),s(38034);var r=s(85862),a=s(59662),i=(s(28207),function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this.loading=!1,this.success=!1,this.info=!1,this.warning=!1,this.danger=!1,this.default=!1,this.primary=!1,this.extra_class="",this.header=null,this.content=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return this.loading?r.html`
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
      `:r.html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${null!==this.header?r.html`<header class="header">${this.header}</header>`:r.nothing}
              ${null!==this.content?r.html`<main class="main">${this.content}</main>`:r.nothing}
            </div>
          </div>
        </div>
      `}get getClass(){return this.success?"success":this.info?"info":this.warning?"warning":this.danger?"danger":this.default?r.html`<mwc-icon></mwc-icon>`:this.primary?"primary":void 0}get getIcon(){return this.success?r.html`<mwc-icon>check_circle_outline</mwc-icon>`:this.info?r.html`<mwc-icon>notification_important</mwc-icon>`:this.warning?r.html`<mwc-icon>warning</mwc-icon>`:this.danger?r.html`<mwc-icon>error_outline</mwc-icon>`:this.default?r.html`<mwc-icon>priority_high</mwc-icon>`:this.primary?r.html`<mwc-icon>star_outline</mwc-icon>`:r.html`<mwc-icon>emoji_objects</mwc-icon>`}firstUpdated(){}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],i([(0,a.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"loading",void 0),i([(0,a.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"success",void 0),i([(0,a.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"info",void 0),i([(0,a.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"warning",void 0),i([(0,a.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"danger",void 0),i([(0,a.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"default",void 0),i([(0,a.property)({type:Boolean}),l("design:type",Boolean)],c.prototype,"primary",void 0),i([(0,a.property)({type:String}),l("design:type",String)],c.prototype,"extra_class",void 0),c=i([(0,a.customElement)("alert-card"),l("design:paramtypes",[])],c)},16883:(e,t,s)=>{"use strict";s.r(t),s.d(t,{_DATATABLES_:()=>n});var r,a=s(85862),i=s(59662),l=(s(30367),s(99493),function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l}),c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends a.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return a.html`
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
  `}thead(){return a.html`
      ${this.dt_head.map((e=>a.html`<th>${e.title}</th>`))}
    `}tbody(){return a.html`
      ${this.dt_body.map((e=>a.html`<tr>${e.map((e=>a.html`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return a.html`
    ${this.dt_foot.map((e=>a.html`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const s=this.ajaxHeader[e];t[e]=s}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};n.styles=[a.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],l([(0,i.property)({type:Number}),c("design:type",Number)],n.prototype,"randomID1",void 0),l([(0,i.property)({type:Number}),c("design:type",Number)],n.prototype,"randomID2",void 0),l([(0,i.property)({type:String}),c("design:type",String)],n.prototype,"ID",void 0),l([(0,i.property)({type:Object}),c("design:type","function"==typeof(r="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?r:Object)],n.prototype,"datatable",void 0),l([(0,i.property)({type:Array}),c("design:type",Array)],n.prototype,"dt_head",void 0),l([(0,i.property)({type:Array}),c("design:type",Array)],n.prototype,"dt_foot",void 0),l([(0,i.property)({type:Array}),c("design:type",Array)],n.prototype,"dt_body",void 0),l([(0,i.property)(),c("design:type",Object)],n.prototype,"ajaxHeader",void 0),n=l([(0,i.customElement)("datatables-new"),c("design:paramtypes",[])],n)},38281:(e,t,s)=>{"use strict";s.r(t),s.d(t,{UserProfilePhoto:()=>n});var r=s(48485),a=s(85862),i=s(59662),l=function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends a.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return a.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=r.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};n.styles=[a.css`
   :host { display: block; }
  `],l([(0,i.property)({type:String}),c("design:type",String)],n.prototype,"url",void 0),l([(0,i.property)({type:String}),c("design:type",String)],n.prototype,"type",void 0),l([(0,i.property)({type:Boolean}),c("design:type",Boolean)],n.prototype,"rounded",void 0),l([(0,i.property)({type:String}),c("design:type",String)],n.prototype,"click-to-open",void 0),l([(0,i.property)({type:Number}),c("design:type",Number)],n.prototype,"size",void 0),n=l([(0,i.customElement)("user-profile-photo"),c("design:paramtypes",[])],n)},35172:(e,t,s)=>{"use strict";s.r(t),s.d(t,{PdbDashboardBranchUser:()=>c}),s(87255),s(26660);var r=s(85862),a=s(59662),i=(s(23283),s(16883),s(48763),s(30367),s(92715),function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this.dashboardMetrics=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,a=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,i){function l(e){try{n(a.next(e))}catch(e){i(e)}}function c(e){try{n(a.throw(e))}catch(e){i(e)}}function n(t){var s;t.done?e(t.value):(s=t.value,s instanceof r?s:new r((function(e){e(s)}))).then(l,c)}n((a=a.apply(t,s||[])).next())}));var t,s,r,a}disconnectedCallback(){}render(){return console.log({"this.dashboardMetrics":this.dashboardMetrics}),this.dashboardMetrics.map((e=>r.html`
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
      `))}headers(e){const t=r.html`<h4 class="text-gray-600">${e}</h4>`,s=r.nothing;return r.html`<alert-card info .header="${t}" .content="${s}" extra_class="!max-w-full"></alert-card>`}metric(e,t,s,a,i="py-2 px-3"){return r.html`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${i} bg-green-600 ${s}">
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
    `}firstUpdated(e){setTimeout((()=>{countDownCounter({selector:document.querySelector(".countdown"),date:document.querySelector("[getClock__]").getAttribute("getClock__")})}),500)}getDate(e){console.log({date_date_date:e}),null===e&&(e=new Date);let t=e.toLocaleString("default",{year:"numeric"});return e.toLocaleString("default",{month:"2-digit"})+"/"+e.toLocaleString("default",{day:"2-digit"})+"/"+t+" 00:00"}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],i([(0,a.property)({type:Array}),l("design:type",Array)],c.prototype,"dashboardMetrics",void 0),c=i([(0,a.customElement)("pdb-dashboard-branch-user"),l("design:paramtypes",[])],c)},70278:(e,t,s)=>{"use strict";s.r(t),s.d(t,{PdbDashboardIndex:()=>m}),s(87255),s(26660);var r=s(85862),a=s(59662),i=(s(23283),s(51511),s(92715),s(38281),s(10979)),l=s(34805),c=(s(24505),s(93118),s(35172),s(83594),s(48485)),n=s(27712),o=(s(43683),s(91354)),d=(s(74657),s(41302)),p=function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l},h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function l(e){try{n(r.next(e))}catch(e){i(e)}}function c(e){try{n(r.throw(e))}catch(e){i(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,c)}n((r=r.apply(e,t||[])).next())}))};let m=class extends r.LitElement{constructor(){super(),this._dashboardMetricsCalled=!1,this._dashboardMetrics=[],this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield(0,n.AppSetup)(),yield this.getDashboardMetrics()}))}disconnectedCallback(){}render(){var e;return(null===(e=(0,o.getAppSettingsExtraSettings)())||void 0===e?void 0:e.expiration_date.expired)?r.html`<account-expired-component></account-expired-component>`:(0,d.AppSettingsExtraUserAccess)({pageId:0,viewType:"View"},!0)?r.html`
      ${this.metricsSection}
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Recent Users</div>
            <pdb-dashboard-members></pdb-dashboard-members>
            <div class="d-block text-center card-footer">
              <a href="${c.CONSTANTS.URLS.PDB_CLIENT}member/members" class="btn-wide btn btn-success">Members</a>
            </div>
          </div>
        </div>
      </div>
    `:r.html`<no-page-entry-component></no-page-entry-component>`}get metricsSection(){return!1===this._dashboardMetricsCalled?r.html`
        <div class="main-container">
          <!-- <div class="flex justify-center"> -->
          <pdb-dashboard-loading-user></pdb-dashboard-loading-user>
          <!-- </div> -->
        </div>
      `:this._dashboardMetrics.length<1?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Metrics </span>: Error!</h4>
          </div>
        </div>
      `:1===this._dashboardMetrics[0].type.id?r.html`<pdb-dashboard-main-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-main-user>`:r.html`<pdb-dashboard-branch-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-branch-user>`}firstUpdated(){}getDashboardMetrics(){return u(this,void 0,void 0,(function*(){const e=yield(0,i.GET_ClientUserDashboardMetrics)();if(this._dashboardMetricsCalled=!0,null===e)this._dashboardMetrics=[];else if(e.response.success&&"statistics"in e.response.data){const t=l.Convert.toClientUserDashboardMetricModel(JSON.stringify(e.response.data));this._dashboardMetrics=[t]}else this._dashboardMetrics=[]}))}createRenderRoot(){return this}};m.styles=[r.css`
   :host { display: block; }
  `],p([(0,a.property)({type:Boolean}),h("design:type",Boolean)],m.prototype,"_dashboardMetricsCalled",void 0),p([(0,a.property)({type:Array}),h("design:type",Array)],m.prototype,"_dashboardMetrics",void 0),m=p([(0,a.customElement)("pdb-dashboard-index"),h("design:paramtypes",[])],m)},83594:(e,t,s)=>{"use strict";s.r(t),s.d(t,{PdbDashboardLoadingUser:()=>l}),s(38034);var r=s(85862),a=s(59662),i=(s(48763),function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l});let l=class extends r.LitElement{constructor(){super()}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,a=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,i){function l(e){try{n(a.next(e))}catch(e){i(e)}}function c(e){try{n(a.throw(e))}catch(e){i(e)}}function n(t){var s;t.done?e(t.value):(s=t.value,s instanceof r?s:new r((function(e){e(s)}))).then(l,c)}n((a=a.apply(t,s||[])).next())}));var t,s,r,a}disconnectedCallback(){}render(){return r.html`
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
      `}headers(){return r.html`<alert-card loading extra_class="!max-w-full"></alert-card>`}metric(){return r.html`
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
    `}createRenderRoot(){return this}};l.styles=[r.css`
   :host { display: block; }
  `],l=i([(0,a.customElement)("pdb-dashboard-loading-user"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],l)},93118:(e,t,s)=>{"use strict";s.r(t),s.d(t,{PdbDashboardMainUser:()=>c}),s(87255),s(26660);var r=s(85862),a=s(59662),i=(s(23283),s(16883),s(48763),s(30367),s(92715),function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let c=class extends r.LitElement{constructor(){super(),this.dashboardMetrics=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,s=void 0,a=function*(){e.connectedCallback.call(this)},new((r=void 0)||(r=Promise))((function(e,i){function l(e){try{n(a.next(e))}catch(e){i(e)}}function c(e){try{n(a.throw(e))}catch(e){i(e)}}function n(t){var s;t.done?e(t.value):(s=t.value,s instanceof r?s:new r((function(e){e(s)}))).then(l,c)}n((a=a.apply(t,s||[])).next())}));var t,s,r,a}disconnectedCallback(){}render(){return this.dashboardMetrics.map((e=>r.html`
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
      `))}headers(e){const t=r.html`<h4 class="text-gray-600">${e}</h4>`,s=r.nothing;return r.html`<alert-card info .header="${t}" .content="${s}" extra_class="!max-w-full"></alert-card>`}metric(e,t,s,a,i="py-2 px-3"){return r.html`
      <div class="bg-white border border-gray-200 rounded shadow-sm p-0 pr-2">
        <div class="flex flex-row items-center h-full">
          <div class="flex-shrink pr-4 contents">
            <div class="rounded ${i} bg-green-600 ${s}">
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
    `}firstUpdated(e){setTimeout((()=>{countDownCounter({selector:document.querySelector(".countdown"),date:document.querySelector("[getClock__]").getAttribute("getClock__")})}),500)}getDate(e){console.log({date_date_date:e}),null===e&&(e=new Date);let t=e.toLocaleString("default",{year:"numeric"});return e.toLocaleString("default",{month:"2-digit"})+"/"+e.toLocaleString("default",{day:"2-digit"})+"/"+t+" 00:00"}createRenderRoot(){return this}};c.styles=[r.css`
   :host { display: block; }
  `],i([(0,a.property)({type:Array}),l("design:type",Array)],c.prototype,"dashboardMetrics",void 0),c=i([(0,a.customElement)("pdb-dashboard-main-user"),l("design:paramtypes",[])],c)},24505:(e,t,s)=>{"use strict";s.r(t),s.d(t,{PdbDashboardMembers:()=>p}),s(87255),s(26660);var r=s(85862),a=s(59662),i=(s(23283),s(16883),s(30367),s(51511),s(92715),s(17725)),l=s(26656),c=(s(38281),s(67052)),n=function(e,t,s,r){var a,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(l=(i<3?a(l):i>3?a(t,s,l):a(t,s))||l);return i>3&&l&&Object.defineProperty(t,s,l),l},o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(e,t,s,r){return new(s||(s=Promise))((function(a,i){function l(e){try{n(r.next(e))}catch(e){i(e)}}function c(e){try{n(r.throw(e))}catch(e){i(e)}}function n(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,c)}n((r=r.apply(e,t||[])).next())}))};let p=class extends r.LitElement{constructor(){super(),this.memberProfileBaseUrl="/member/member-profile?view=",this._activeBranchId=null,this.__members=null}set _members(e){this.__members=e,this.requestUpdate()}get _members(){return this.__members}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,(function*(){e.connectedCallback.call(this);const t=(0,i.getActiveBranchIdCookie)();this._activeBranchId=null===t?null:[t],yield this.getMembers()}))}disconnectedCallback(){}render(){return null===this._members?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._members?r.html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:r.html`
      ${this.table}
    `}get table(){return r.html`
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
    `}get tableBody(){const e=this._members.results;return Array.isArray(e)?e.map((e=>{const t=(0,c.base64Encode)(String(e.id),!0);return r.html`
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
        `})):r.html``}firstUpdated(){}getMembers(){return d(this,void 0,void 0,(function*(){let e=0;null!==this._activeBranchId&&(e=this._activeBranchId[0].id);const t=yield(0,l.GET_MembershipUsers)(null,"?branchId="+e+"&length=5&memberType=1&order__by=-id");this._members=null===t?void 0:t.paginResponse}))}createRenderRoot(){return this}};p.styles=[r.css`
   :host { display: block; }
  `],n([(0,a.property)({type:String}),o("design:type",String)],p.prototype,"memberProfileBaseUrl",void 0),n([(0,a.property)({type:Array}),o("design:type",Array)],p.prototype,"_activeBranchId",void 0),p=n([(0,a.customElement)("pdb-dashboard-members"),o("design:paramtypes",[])],p)}},e=>(e.O(0,["vendors.lit-html","vendors.lit","vendors.lit-element","vendors.buffer","vendors.material","vendors.tslib","node_modules_base64-js_index_js-node_modules_ieee754_index_js-src_addons_constants_index_ts-s-981a93","src_addons_classes_network_calls_response_ts","src_view_home_branch_button_ts","src_addons_functions_app_settings_extra_settings_user_access_ts-src_addons_functions_app_sett-730152","src_assets_styles_views_home_dashboard_scss","shared"],(()=>(70278,e(e.s=70278)))),e.O())])));
//# sourceMappingURL=dashboard.js.map