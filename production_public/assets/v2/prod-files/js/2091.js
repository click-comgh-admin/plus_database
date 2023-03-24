"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[2091],{4728:(e,t,i)=>{i.d(t,{u:()=>n});var s=i(771),c=i(7270),o=i(596),a=i(3600);function n(e=null,t=""){return i=this,n=void 0,d=function*(){const i=(0,a.Ie)(),n=s.t.URLS.AKWAABA_API_BASE_URL+"clients/user-access/pages"+(null===e?"":"/"+e)+t,r=yield(0,c.d)(n,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new o.H("get",r)}catch(e){console.error({error:e});let t=r;return t.error=e,new o.H("get",t,!0)}},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{o(d.next(e))}catch(e){t(e)}}function c(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(s,c)}o((d=d.apply(i,n||[])).next())}));var i,n,r,d}},8954:(e,t,i)=>{var s=i(5862),c=i(8393),o=(i(1239),function(e,t,i,s){var c,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(a=(o<3?c(a):o>3?c(t,i,a):c(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}),a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let n=class extends s.oi{constructor(){super(),this.content="-",this.toolTipShowingClass="invisible opacity-0"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return s.dy`
      <div class="mx-2 relative">
        <div class="w-[fit-content]">
          <button type="button" @mouseenter="${this.hoverInTooltip}" @mouseleave="${this.hoverOutTooltip}">
            <mwc-icon>info</mwc-icon>
          </button>
        </div>
        <div tabindex="-1"
          class="absolute bottom-9 left-[-7rem] w-[19rem] z-10 inline-block rounded-lg py-2 px-3 text-sm font-medium shadow-sm transition-opacity duration-300 ${this.toolTipShowingClass} flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
          role="tooltip">
          <div class="relative z-20 w-full whitespace-pre-wrap">${this.content}</div>
          <div class="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700" style="bottom: -4px; left: 120px;">&nbsp;
          </div>
        </div>
      </div>
    `}hoverInTooltip(e){this.toolTipShowingClass=""}hoverOutTooltip(e){this.toolTipShowingClass="invisible opacity-0"}firstUpdated(){}createRenderRoot(){return this}};n.styles=[s.iv`
   :host { display: block; }
  `],o([(0,c.Cb)({type:String}),a("design:type",String)],n.prototype,"content",void 0),o([(0,c.Cb)({type:String}),a("design:type",String)],n.prototype,"toolTipShowingClass",void 0),n=o([(0,c.Mo)("client-user-access-card-section-tooltip"),a("design:paramtypes",[])],n);var r,d,l=i(1302),u=function(e,t,i,s){var c,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(a=(o<3?c(a):o>3?c(t,i,a):c(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let h=class extends s.oi{constructor(){super(),this.isActive=!1,this.input_index=0,this.pageAccess=[],this.user_access=null,this.checked=!1,this.initialCheckValueCalled=!1,this.isUnlimited=[],this.checkedLimitation={id:null,name:""}}connectedCallback(){super.connectedCallback(),this.aSES_isUnlimited()}disconnectedCallback(){}render(){return this.pageAccess.map((e=>{let t="access_"+e.moduleId+"_"+this.input_index,i="pageId[]";return!0===this.isActive&&(t="pageId_"+e.moduleId+"_"+this.input_index,i="pageId[]"),this.initialCheckValue(e.id),s.dy`
        <div class="mx-2 relative w-full p-1">
          ${this.checked?s.dy`
          <div class="block">
            <input id="${t}" name="${i}" type="checkbox" value="${e.id}" checked ?disabled="${!this.isActive}"
              @change="${this.inputChecking}"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div class="block">
            <select class="px-2 border border-gray-200 shadow py-1" id="limitations" name="${"limitations[]"}" ?disabled="${!this.isActive}">
              <option value="null">Select Limitation</option>
              ${this.isUnlimited.map((e=>s.dy`<option value="${e.id}"
                .selected="${String(this.checkedLimitation.id)===e.id}">${e.name}</option>`))}
            </select>
          </div>
          `:s.dy`
          <input id="${t}" name="${i}" type="checkbox" value="${e.id}" @change="${this.inputChecking}" ?disabled="${!this.isActive}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `}
        </div>
      `}))}aSES_isUnlimited(){let e=[];for(const t in l.n4)if(Object.prototype.hasOwnProperty.call(l.n4,t)&&!isNaN(Number(t))){const i={id:t,name:l.n4[t]};e.includes(i)||e.push(i)}this.isUnlimited=e}initialCheckValue(e){!1===this.initialCheckValueCalled&&null!==this.user_access&&(this.user_access.forEach((t=>{t.pageId.id===e&&(this.checked=!0,this.checkedLimitation=t.isUnlimited)})),this.initialCheckValueCalled=!0)}inputChecking(e){const t=e.currentTarget.checked;this.checked=t}firstUpdated(){}createRenderRoot(){return this}};h.styles=[s.iv`
   :host { display: block; }
  `],u([(0,c.Cb)({type:Boolean}),p("design:type",Boolean)],h.prototype,"isActive",void 0),u([(0,c.Cb)({type:Number}),p("design:type",Number)],h.prototype,"input_index",void 0),u([(0,c.Cb)({type:Array}),p("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],h.prototype,"pageAccess",void 0),u([(0,c.Cb)({type:Array}),p("design:type","function"==typeof(d="undefined"!=typeof Array&&Array)?d:Object)],h.prototype,"user_access",void 0),u([(0,c.Cb)({type:Boolean}),p("design:type",Boolean)],h.prototype,"checked",void 0),u([(0,c.Cb)({type:Boolean}),p("design:type",Boolean)],h.prototype,"initialCheckValueCalled",void 0),h=u([(0,c.Mo)("client-user-access-card-section-inputs"),p("design:paramtypes",[])],h);var y,b,f=function(e,t,i,s){var c,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(a=(o<3?c(a):o>3?c(t,i,a):c(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends s.oi{constructor(){super(),this.isActive=!1,this.module_access=null,this.user_access=null,this.sectionButtonIcon="arrow_downward"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return s.dy`
      <button class="${this.viewButtonClass(!1)}" type="button" @click="${this.access_card_section_btn_action}" access_card_section_btn="${this.moduleId}">
        <h2 class="flex justify-between">
          ${this.moduleName} 
          <client-user-access-card-section-tooltip content="${this.moduleContent}"></client-user-access-card-section-tooltip>
        </h2>
        <div section-button-icon="${this.moduleId}"><mwc-icon>${this.sectionButtonIcon}</mwc-icon></div>
      </button>
      <div class="p-0 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg border-gray-200 dark:border-gray-700 border-b-2 w-full" access_card_section_content="${this.moduleId}" hidden="">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Page(s)</b>
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
                ${this.module_access.map(((e,t)=>{let i="access_"+e.moduleId+"_"+t;return!0===this.isActive&&(i="pageId_"+e.moduleId+"_"+t),s.dy`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <label class="whitespace-pre-wrap" for="${i}">${e.page}</label>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <client-user-access-card-section-inputs ?isActive="${this.isActive}" input_index="${t}" .pageAccess="${[e]}" .user_access="${this.user_access}"></client-user-access-card-section-inputs>
                      </td>
                    </tr>
                  `}))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}access_card_section_btn_action(e){e.preventDefault();const t=(e,t)=>{this.moduleId===t&&(e.className=this.viewButtonClass(!0),e.lastElementChild.innerHTML="<mwc-icon>arrow_upward</mwc-icon>")},i=e=>{e.className=this.viewButtonClass(!1),e.lastElementChild.innerHTML="<mwc-icon>arrow_downward</mwc-icon>"},s=e=>{this.moduleId===e&&document.querySelectorAll('div[access_card_section_content="'+e+'"]').forEach((e=>{e.removeAttribute("hidden")}))};document.querySelectorAll("button[access_card_section_btn]").forEach((e=>{const c=e.getAttribute("access_card_section_btn"),o=Number.isNaN(c)?-1:Number(c);i(e),document.querySelectorAll("div[access_card_section_content]").forEach((e=>{e.hasAttribute("hidden")||e.setAttribute("hidden","")})),setTimeout((()=>{t(e,o),s(o)}),100)}))}viewButtonClass(e){return e?(this.sectionButtonIcon="arrow_upward","flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-3 px-3 text-left font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white border-b-2"):(this.sectionButtonIcon="arrow_downward","flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-3 px-3 text-left font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 border-b-2")}get moduleId(){var e;return null!==this.module_access&&(null===(e=this.module_access)||void 0===e?void 0:e.length)>0?this.module_access[0].moduleId:0}get moduleName(){var e,t,i;return null!==this.module_access&&(null===(e=this.module_access)||void 0===e?void 0:e.length)>0?null!==(i=null===(t=this.module_access[0].moduleInfo)||void 0===t?void 0:t.module)&&void 0!==i?i:"Not Found":"Not Found!"}get moduleContent(){var e,t,i;return null!==this.module_access&&(null===(e=this.module_access)||void 0===e?void 0:e.length)>0?null!==(i=null===(t=this.module_access[0].moduleInfo)||void 0===t?void 0:t.description)&&void 0!==i?i:"Not Found":"Not Found!"}firstUpdated(){}createRenderRoot(){return this}};m.styles=[s.iv`
   :host { display: block; }
  `],f([(0,c.Cb)({type:Boolean}),g("design:type",Boolean)],m.prototype,"isActive",void 0),f([(0,c.Cb)({type:Array}),g("design:type","function"==typeof(y="undefined"!=typeof Array&&Array)?y:Object)],m.prototype,"module_access",void 0),f([(0,c.Cb)({type:Array}),g("design:type","function"==typeof(b="undefined"!=typeof Array&&Array)?b:Object)],m.prototype,"user_access",void 0),f([(0,c.Cb)({type:String}),g("design:type",String)],m.prototype,"sectionButtonIcon",void 0),m=f([(0,c.Mo)("client-user-access-card-section"),g("design:paramtypes",[])],m);var v,_,w=function(e,t,i,s){var c,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(a=(o<3?c(a):o>3?c(t,i,a):c(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},k=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let C=class extends s.oi{constructor(){super(),this.isActive=!1,this.available_access=[],this.user_access=null,this.module_access={},this.grouped=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){this.available_access.length>0&&this.group_by_modules();let e=s.dy``;for(const t in this.module_access)if(Object.prototype.hasOwnProperty.call(this.module_access,t)){const i=this.module_access[t];e=s.dy`${e}
          <client-user-access-card-section ?isActive="${this.isActive}" .module_access="${i}" .user_access="${this.user_access}"></client-user-access-card-section>
        `}return s.dy`
      <div class="divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg">
        ${e}
      </div>
    `}group_by_modules(){this.grouped||(this.available_access.forEach((e=>{const t=String(e.moduleId);t in this.module_access||(this.module_access[t]=[]),this.module_access[t].push(e)})),this.grouped=!0)}firstUpdated(){}createRenderRoot(){return this}};C.styles=[s.iv`
   :host { display: block; }
  `],w([(0,c.Cb)({type:Boolean}),k("design:type",Boolean)],C.prototype,"isActive",void 0),w([(0,c.Cb)({type:Array}),k("design:type","function"==typeof(v="undefined"!=typeof Array&&Array)?v:Object)],C.prototype,"available_access",void 0),w([(0,c.Cb)({type:Array}),k("design:type","function"==typeof(_="undefined"!=typeof Array&&Array)?_:Object)],C.prototype,"user_access",void 0),w([(0,c.Cb)({type:Boolean}),k("design:type",Boolean)],C.prototype,"grouped",void 0),C=w([(0,c.Mo)("client-user-access-card"),k("design:paramtypes",[])],C)}}]);
//# sourceMappingURL=2091.js.map