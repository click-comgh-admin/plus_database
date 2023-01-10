"use strict";!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.webpackNumbers=e():t.webpackNumbers=e()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[3825],{6490:(t,e,a)=>{a.d(e,{G:()=>o});var r=a(771),i=a(7270),s=a(596),n=a(3600);function o(t=null,e=""){return a=this,o=void 0,d=function*(){const a=(0,n.Ie)(),o=r.t.URLS.AKWAABA_API_BASE_URL+"members/access/restriction"+(null===t?"":"/"+t)+e,c=yield(0,i.d)(o,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new s.H("get",c)}catch(t){console.error({error:t});let e=c;return e.error=t,new s.H("get",e,!0)}},new((c=void 0)||(c=Promise))((function(t,e){function r(t){try{s(d.next(t))}catch(t){e(t)}}function i(t){try{s(d.throw(t))}catch(t){e(t)}}function s(e){var a;e.done?t(e.value):(a=e.value,a instanceof c?a:new c((function(t){t(a)}))).then(r,i)}s((d=d.apply(a,o||[])).next())}));var a,o,c,d}},6883:(t,e,a)=>{var r,i=a(9392),s=a(1936),n=function(t,e,a,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(s<3?i(n):s>3?i(e,a,n):i(e,a))||n);return s>3&&n&&Object.defineProperty(e,a,n),n},o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let c=class extends i.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(t){let e=this._init;this._init=t,console.log("public set init",{oldVal:e,value:t}),this.requestUpdate("init",e)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return i.dy`
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
  `}thead(){return i.dy`
      ${this.dt_head.map((t=>i.dy`<th>${t.title}</th>`))}
    `}tbody(){return i.dy`
      ${this.dt_body.map((t=>i.dy`<tr>${t.map((t=>i.dy`<td>${t.title}</td>`))}</tr>`))}
    `}tfoot(){return i.dy`
    ${this.dt_foot.map((t=>i.dy`<th>${t.title}</th>`))}
    `}firstUpdated(){const t=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let t=this.datatable.ajax;t.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let e=t.headers;for(const t in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,t)){const a=this.ajaxHeader[t];e[t]=a}t.headers=e,this.datatable.ajax=t}$(t).DataTable(this.datatable)}createRenderRoot(){return this}};c.styles=[i.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],n([(0,s.Cb)({type:Number}),o("design:type",Number)],c.prototype,"randomID1",void 0),n([(0,s.Cb)({type:Number}),o("design:type",Number)],c.prototype,"randomID2",void 0),n([(0,s.Cb)({type:String}),o("design:type",String)],c.prototype,"ID",void 0),n([(0,s.Cb)({type:Object}),o("design:type","function"==typeof(r="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?r:Object)],c.prototype,"datatable",void 0),n([(0,s.Cb)({type:Array}),o("design:type",Array)],c.prototype,"dt_head",void 0),n([(0,s.Cb)({type:Array}),o("design:type",Array)],c.prototype,"dt_foot",void 0),n([(0,s.Cb)({type:Array}),o("design:type",Array)],c.prototype,"dt_body",void 0),n([(0,s.Cb)(),o("design:type",Object)],c.prototype,"ajaxHeader",void 0),c=n([(0,s.Mo)("datatables-new"),o("design:paramtypes",[])],c)},8077:(t,e,a)=>{a.d(e,{W:()=>r});const r={view:55}},8885:(t,e,a)=>{a.r(e),a.d(e,{MembershipAccessRestrictionSelectRestriction:()=>y});var r=a(9392),i=a(1936),s=(a(5248),a(6883),a(6811),a(2715),a(2004)),n=a(7052),o=a(6490),c=(a(3683),a(4657),a(9665)),d=a(2145),l=a(1302),p=a(8077),b=function(t,e,a,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(s<3?i(n):s>3?i(e,a,n):i(e,a))||n);return s>3&&n&&Object.defineProperty(e,a,n),n},h=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(t,e,a,r){return new(a||(a=Promise))((function(i,s){function n(t){try{c(r.next(t))}catch(t){s(t)}}function o(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,o)}c((r=r.apply(t,e||[])).next())}))};let y=class extends r.oi{constructor(){super(),this.restrictionUsersBaseUrl="/member/access-restriction/user-restriction?view-restriction=",this.restrictionUpdateBaseUrl="/member/access-restriction/update-user-restriction?view-restriction=",this._activeBranchId=null,this.__restrictions=null,this._hasSetup=!1}set _restrictions(t){this.__restrictions=t,this.requestUpdate()}get _restrictions(){return this.__restrictions}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return u(this,void 0,void 0,(function*(){t.connectedCallback.call(this),(0,c.f)().then((()=>this._hasSetup=!0));const e=(0,s.hk)();this._activeBranchId=null===e?null:[e],yield this.getMembers()}))}disconnectedCallback(){}render(){var t;if(this._hasSetup){if(null===(t=(0,d.H)())||void 0===t?void 0:t.expiration_date.expired)return r.dy`<account-expired-component></account-expired-component>`;if(!(0,l.H)({pageId:p.W.view,viewType:"Both"},!1))return r.dy`<no-page-entry-component></no-page-entry-component>`}return null===this._restrictions?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._restrictions?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
      ${this.table}
    `}get table(){return r.dy`
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
    `}get tableBody(){const t=this._restrictions.data;return Array.isArray(t)?t.map((t=>{const e=(0,n.h)(String(t.id),!0);return r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex items-center whitespace-normal">
                <p class="ml-1">${t.restriction}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="" raised bClass="button mr-2"
                  href="${this.restrictionUpdateBaseUrl}${e}" label="Update"></link-button>
              </div>
              <div class="whitespace-normal">
                <link-button isblockcontent="false" aClass="success" raised bClass="button success mr-2"
                  href="${this.restrictionUsersBaseUrl}${e}" label="Open"></link-button>
              </div>
            </td>
          </tr>
        `})):r.dy``}firstUpdated(){}getMembers(){return u(this,void 0,void 0,(function*(){const t=yield(0,o.G)(null);this._restrictions=null===t?void 0:t.response}))}createRenderRoot(){return this}};y.styles=[r.iv`
   :host { display: block; }
  `],b([(0,i.Cb)({type:String}),h("design:type",String)],y.prototype,"restrictionUsersBaseUrl",void 0),b([(0,i.Cb)({type:String}),h("design:type",String)],y.prototype,"restrictionUpdateBaseUrl",void 0),b([(0,i.Cb)({type:Array}),h("design:type",Array)],y.prototype,"_activeBranchId",void 0),b([(0,i.Cb)({type:Boolean}),h("design:type",Boolean)],y.prototype,"_hasSetup",void 0),y=b([(0,i.Mo)("membership-access_restriction-select_restriction"),h("design:paramtypes",[])],y)}},t=>(t.O(0,[2185,5744,316,836,5291,6236,6069,6553,3712],(()=>(8885,t(t.s=8885)))),t.O())])));
//# sourceMappingURL=select_restriction.js.map