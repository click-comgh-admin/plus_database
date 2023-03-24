"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_functions_https_https_swal_error_format_ts-src_addons_network_clients_users_page_a-554995"],{8967:(e,t,s)=>{s.r(t),s.d(t,{__swalStyle:()=>i,https_swal_error_format:()=>o});const i="<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>",o=(e,t=!0)=>{if(Array.isArray(e)){let s=(t?i:"")+"<ul>";return e.forEach((e=>{s+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),s+="</ul>"}throw new Error("Unknown error response format")}},54728:(e,t,s)=>{s.r(t),s.d(t,{GET_ClientPageAccess:()=>a});var i=s(48485),o=s(87270),c=s(14492),r=s(33600);function a(e=null,t=""){return s=this,a=void 0,l=function*(){const s=(0,r.getUserLoginInfoCookie)(),a=i.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"clients/user-access/pages"+(null===e?"":"/"+e)+t,n=yield(0,o.http)(a,{method:"GET",headers:{Authorization:"Token "+s.token}},!0);try{return new c.NetWorkCallResponses("get",n)}catch(e){console.error({error:e});let t=n;return t.error=e,new c.NetWorkCallResponses("get",t,!0)}},new((n=void 0)||(n=Promise))((function(e,t){function i(e){try{c(l.next(e))}catch(e){t(e)}}function o(e){try{c(l.throw(e))}catch(e){t(e)}}function c(t){var s;t.done?e(t.value):(s=t.value,s instanceof n?s:new n((function(e){e(s)}))).then(i,o)}c((l=l.apply(s,a||[])).next())}));var s,a,n,l}},97857:(e,t,s)=>{s.r(t),s.d(t,{ClientUserAccessCard:()=>l});var i,o,c=s(85862),r=s(59662),a=(s(80078),function(e,t,s,i){var o,c=arguments.length,r=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(c<3?o(r):c>3?o(t,s,r):o(t,s))||r);return c>3&&r&&Object.defineProperty(t,s,r),r}),n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends c.LitElement{constructor(){super(),this.isActive=!1,this.available_access=[],this.user_access=null,this.module_access={},this.grouped=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){this.available_access.length>0&&this.group_by_modules();let e=c.html``;for(const t in this.module_access)if(Object.prototype.hasOwnProperty.call(this.module_access,t)){const s=this.module_access[t];e=c.html`${e}
          <client-user-access-card-section ?isActive="${this.isActive}" .module_access="${s}" .user_access="${this.user_access}"></client-user-access-card-section>
        `}return c.html`
      <div class="divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700 rounded-lg">
        ${e}
      </div>
    `}group_by_modules(){this.grouped||(this.available_access.forEach((e=>{const t=String(e.moduleId);t in this.module_access||(this.module_access[t]=[]),this.module_access[t].push(e)})),this.grouped=!0)}firstUpdated(){}createRenderRoot(){return this}};l.styles=[c.css`
   :host { display: block; }
  `],a([(0,r.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"isActive",void 0),a([(0,r.property)({type:Array}),n("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],l.prototype,"available_access",void 0),a([(0,r.property)({type:Array}),n("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],l.prototype,"user_access",void 0),a([(0,r.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"grouped",void 0),l=a([(0,r.customElement)("client-user-access-card"),n("design:paramtypes",[])],l)},16925:(e,t,s)=>{s.r(t),s.d(t,{ClientUserAccessCardSectionInputs:()=>d});var i,o,c=s(85862),r=s(59662),a=(s(33590),s(41302)),n=function(e,t,s,i){var o,c=arguments.length,r=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(c<3?o(r):c>3?o(t,s,r):o(t,s))||r);return c>3&&r&&Object.defineProperty(t,s,r),r},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends c.LitElement{constructor(){super(),this.isActive=!1,this.input_index=0,this.pageAccess=[],this.user_access=null,this.checked=!1,this.initialCheckValueCalled=!1,this.isUnlimited=[],this.checkedLimitation={id:null,name:""}}connectedCallback(){super.connectedCallback(),this.aSES_isUnlimited()}disconnectedCallback(){}render(){return this.pageAccess.map((e=>{let t="access_"+e.moduleId+"_"+this.input_index,s="pageId[]";return!0===this.isActive&&(t="pageId_"+e.moduleId+"_"+this.input_index,s="pageId[]"),this.initialCheckValue(e.id),c.html`
        <div class="mx-2 relative w-full p-1">
          ${this.checked?c.html`
          <div class="block">
            <input id="${t}" name="${s}" type="checkbox" value="${e.id}" checked ?disabled="${!this.isActive}"
              @change="${this.inputChecking}"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div class="block">
            <select class="px-2 border border-gray-200 shadow py-1" id="limitations" name="${"limitations[]"}" ?disabled="${!this.isActive}">
              <option value="null">Select Limitation</option>
              ${this.isUnlimited.map((e=>c.html`<option value="${e.id}"
                .selected="${String(this.checkedLimitation.id)===e.id}">${e.name}</option>`))}
            </select>
          </div>
          `:c.html`
          <input id="${t}" name="${s}" type="checkbox" value="${e.id}" @change="${this.inputChecking}" ?disabled="${!this.isActive}"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          `}
        </div>
      `}))}aSES_isUnlimited(){let e=[];for(const t in a.ASES_isUnlimited)if(Object.prototype.hasOwnProperty.call(a.ASES_isUnlimited,t)&&!isNaN(Number(t))){const s={id:t,name:a.ASES_isUnlimited[t]};e.includes(s)||e.push(s)}this.isUnlimited=e}initialCheckValue(e){!1===this.initialCheckValueCalled&&null!==this.user_access&&(this.user_access.forEach((t=>{t.pageId.id===e&&(this.checked=!0,this.checkedLimitation=t.isUnlimited)})),this.initialCheckValueCalled=!0)}inputChecking(e){const t=e.currentTarget.checked;this.checked=t}firstUpdated(){}createRenderRoot(){return this}};d.styles=[c.css`
   :host { display: block; }
  `],n([(0,r.property)({type:Boolean}),l("design:type",Boolean)],d.prototype,"isActive",void 0),n([(0,r.property)({type:Number}),l("design:type",Number)],d.prototype,"input_index",void 0),n([(0,r.property)({type:Array}),l("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],d.prototype,"pageAccess",void 0),n([(0,r.property)({type:Array}),l("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],d.prototype,"user_access",void 0),n([(0,r.property)({type:Boolean}),l("design:type",Boolean)],d.prototype,"checked",void 0),n([(0,r.property)({type:Boolean}),l("design:type",Boolean)],d.prototype,"initialCheckValueCalled",void 0),d=n([(0,r.customElement)("client-user-access-card-section-inputs"),l("design:paramtypes",[])],d)},80078:(e,t,s)=>{s.r(t),s.d(t,{ClientUserAccessCardSection:()=>l});var i,o,c=s(85862),r=s(59662),a=(s(33590),s(47484),s(16925),function(e,t,s,i){var o,c=arguments.length,r=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(c<3?o(r):c>3?o(t,s,r):o(t,s))||r);return c>3&&r&&Object.defineProperty(t,s,r),r}),n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let l=class extends c.LitElement{constructor(){super(),this.isActive=!1,this.module_access=null,this.user_access=null,this.sectionButtonIcon="arrow_downward"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return c.html`
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
                ${this.module_access.map(((e,t)=>{let s="access_"+e.moduleId+"_"+t;return!0===this.isActive&&(s="pageId_"+e.moduleId+"_"+t),c.html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <label class="whitespace-pre-wrap" for="${s}">${e.page}</label>
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
    `}access_card_section_btn_action(e){e.preventDefault();const t=(e,t)=>{this.moduleId===t&&(e.className=this.viewButtonClass(!0),e.lastElementChild.innerHTML="<mwc-icon>arrow_upward</mwc-icon>")},s=e=>{e.className=this.viewButtonClass(!1),e.lastElementChild.innerHTML="<mwc-icon>arrow_downward</mwc-icon>"},i=e=>{this.moduleId===e&&document.querySelectorAll('div[access_card_section_content="'+e+'"]').forEach((e=>{e.removeAttribute("hidden")}))};document.querySelectorAll("button[access_card_section_btn]").forEach((e=>{const o=e.getAttribute("access_card_section_btn"),c=Number.isNaN(o)?-1:Number(o);s(e),document.querySelectorAll("div[access_card_section_content]").forEach((e=>{e.hasAttribute("hidden")||e.setAttribute("hidden","")})),setTimeout((()=>{t(e,c),i(c)}),100)}))}viewButtonClass(e){return e?(this.sectionButtonIcon="arrow_upward","flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-3 px-3 text-left font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white border-b-2"):(this.sectionButtonIcon="arrow_downward","flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-3 px-3 text-left font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 border-b-2")}get moduleId(){var e;return null!==this.module_access&&(null===(e=this.module_access)||void 0===e?void 0:e.length)>0?this.module_access[0].moduleId:0}get moduleName(){var e,t,s;return null!==this.module_access&&(null===(e=this.module_access)||void 0===e?void 0:e.length)>0?null!==(s=null===(t=this.module_access[0].moduleInfo)||void 0===t?void 0:t.module)&&void 0!==s?s:"Not Found":"Not Found!"}get moduleContent(){var e,t,s;return null!==this.module_access&&(null===(e=this.module_access)||void 0===e?void 0:e.length)>0?null!==(s=null===(t=this.module_access[0].moduleInfo)||void 0===t?void 0:t.description)&&void 0!==s?s:"Not Found":"Not Found!"}firstUpdated(){}createRenderRoot(){return this}};l.styles=[c.css`
   :host { display: block; }
  `],a([(0,r.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"isActive",void 0),a([(0,r.property)({type:Array}),n("design:type","function"==typeof(i="undefined"!=typeof Array&&Array)?i:Object)],l.prototype,"module_access",void 0),a([(0,r.property)({type:Array}),n("design:type","function"==typeof(o="undefined"!=typeof Array&&Array)?o:Object)],l.prototype,"user_access",void 0),a([(0,r.property)({type:String}),n("design:type",String)],l.prototype,"sectionButtonIcon",void 0),l=a([(0,r.customElement)("client-user-access-card-section"),n("design:paramtypes",[])],l)},47484:(e,t,s)=>{s.r(t),s.d(t,{ClientUserAccessCardSectionTooltip:()=>a});var i=s(85862),o=s(59662),c=(s(33590),function(e,t,s,i){var o,c=arguments.length,r=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(c<3?o(r):c>3?o(t,s,r):o(t,s))||r);return c>3&&r&&Object.defineProperty(t,s,r),r}),r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let a=class extends i.LitElement{constructor(){super(),this.content="-",this.toolTipShowingClass="invisible opacity-0"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return i.html`
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
    `}hoverInTooltip(e){this.toolTipShowingClass=""}hoverOutTooltip(e){this.toolTipShowingClass="invisible opacity-0"}firstUpdated(){}createRenderRoot(){return this}};a.styles=[i.css`
   :host { display: block; }
  `],c([(0,o.property)({type:String}),r("design:type",String)],a.prototype,"content",void 0),c([(0,o.property)({type:String}),r("design:type",String)],a.prototype,"toolTipShowingClass",void 0),a=c([(0,o.customElement)("client-user-access-card-section-tooltip"),r("design:paramtypes",[])],a)},81710:(e,t,s)=>{s.r(t),s.d(t,{PAGE__IDS:()=>i});const i={view:25,create:26,update:27}}}]);
//# sourceMappingURL=src_addons_functions_https_https_swal_error_format_ts-src_addons_network_clients_users_page_a-554995.js.map