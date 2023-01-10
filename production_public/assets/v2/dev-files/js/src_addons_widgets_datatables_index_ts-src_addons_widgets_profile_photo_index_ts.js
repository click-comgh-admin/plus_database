(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts"],{9493:(t,e,r)=>{"use strict";r.r(e)},367:()=>{},6883:(t,e,r)=>{"use strict";r.r(e),r.d(e,{_DATATABLES_:()=>n});var o,i=r(5862),s=r(9662),a=(r(367),r(9493),function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a);return s>3&&a&&Object.defineProperty(e,r,a),a}),l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let n=class extends i.LitElement{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return i.html`
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
  `}thead(){return i.html`
      ${this.dt_head.map((t=>i.html`<th>${t.title}</th>`))}
    `}tbody(){return i.html`
      ${this.dt_body.map((t=>i.html`<tr>${t.map((t=>i.html`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return i.html`
    ${this.dt_foot.map((t=>i.html`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const r=this.ajaxHeader[t];e[t]=r}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};n.styles=[i.css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],a([(0,s.property)({type:Number}),l("design:type",Number)],n.prototype,"randomID1",void 0),a([(0,s.property)({type:Number}),l("design:type",Number)],n.prototype,"randomID2",void 0),a([(0,s.property)({type:String}),l("design:type",String)],n.prototype,"ID",void 0),a([(0,s.property)({type:Object}),l("design:type","function"==typeof(o="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?o:Object)],n.prototype,"datatable",void 0),a([(0,s.property)({type:Array}),l("design:type",Array)],n.prototype,"dt_head",void 0),a([(0,s.property)({type:Array}),l("design:type",Array)],n.prototype,"dt_foot",void 0),a([(0,s.property)({type:Array}),l("design:type",Array)],n.prototype,"dt_body",void 0),a([(0,s.property)(),l("design:type",Object)],n.prototype,"ajaxHeader",void 0),n=a([(0,s.customElement)("datatables-new"),l("design:paramtypes",[])],n)},8281:(t,e,r)=>{"use strict";r.r(e),r.d(e,{UserProfilePhoto:()=>n});var o=r(8485),i=r(5862),s=r(9662),a=function(t,e,r,o){var i,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(s<3?i(a):s>3?i(e,r,a):i(e,r))||a);return s>3&&a&&Object.defineProperty(e,r,a),a},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let n=class extends i.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return i.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(t){t.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+e}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const t=this.url.split("/"),e=t[t.length-1];this.url=o.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+e}}createRenderRoot(){return this}};n.styles=[i.css`
   :host { display: block; }
  `],a([(0,s.property)({type:String}),l("design:type",String)],n.prototype,"url",void 0),a([(0,s.property)({type:String}),l("design:type",String)],n.prototype,"type",void 0),a([(0,s.property)({type:Boolean}),l("design:type",Boolean)],n.prototype,"rounded",void 0),a([(0,s.property)({type:String}),l("design:type",String)],n.prototype,"click-to-open",void 0),a([(0,s.property)({type:Number}),l("design:type",Number)],n.prototype,"size",void 0),n=a([(0,s.customElement)("user-profile-photo"),l("design:paramtypes",[])],n)}}]);
//# sourceMappingURL=src_addons_widgets_datatables_index_ts-src_addons_widgets_profile_photo_index_ts.js.map