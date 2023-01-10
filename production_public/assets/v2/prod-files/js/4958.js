/*! For license information please see 4958.js.LICENSE.txt */
(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[4958],{6173:()=>{(()=>{var e,t,n;const o=Symbol(),i=Symbol(),r=Symbol(),c=Symbol(),s=Symbol(),a=Symbol(),l=Symbol(),d=Symbol(),u=Symbol(),p=Symbol(),h=Symbol(),f=Symbol(),m=Symbol();class y{constructor(){this[e]=[],this[t]=[],this[n]=new Set}destructor(){this[u](this[r]);const e=this;e[o]=null,e[r]=null,e[i]=null}get top(){const e=this[o];return e[e.length-1]||null}push(e){e&&e!==this.top&&(this.remove(e),this[a](e),this[o].push(e))}remove(e){const t=this[o].indexOf(e);return-1!==t&&(this[o].splice(t,1),t===this[o].length&&this[a](this.top),!0)}pop(){const e=this.top;return e&&this.remove(e),e}has(e){return-1!==this[o].indexOf(e)}[(e=o,t=r,n=i,a)](e){const t=this[i],n=this[r];if(!e)return this[u](n),t.clear(),void(this[r]=[]);const o=this[p](e);if(o[o.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[r]=o;const c=this[h](e);if(!n.length)return void this[d](o,c,t);let s=n.length-1,a=o.length-1;for(;s>0&&a>0&&n[s]===o[a];)s--,a--;n[s]!==o[a]&&this[l](n[s],o[a]),s>0&&this[u](n.slice(0,s)),a>0&&this[d](o.slice(0,a),c,null)}[l](e,t){const n=e[c];this[f](e)&&!e.inert&&(e.inert=!0,n.add(e)),n.has(t)&&(t.inert=!1,n.delete(t)),t[s]=e[s],t[c]=n,e[s]=void 0,e[c]=void 0}[u](e){for(const t of e){t[s].disconnect(),t[s]=void 0;const e=t[c];for(const t of e)t.inert=!1;t[c]=void 0}}[d](e,t,n){for(const o of e){const e=o.parentNode,i=e.children,r=new Set;for(let e=0;e<i.length;e++){const c=i[e];c===o||!this[f](c)||t&&t.has(c)||(n&&c.inert?n.add(c):(c.inert=!0,r.add(c)))}o[c]=r;const a=new MutationObserver(this[m].bind(this));o[s]=a;let l=e;const d=l;d.__shady&&d.host&&(l=d.host),a.observe(l,{childList:!0})}}[m](e){const t=this[r],n=this[i];for(const o of e){const e=o.target.host||o.target,i=e===document.body?t.length:t.indexOf(e),r=t[i-1],s=r[c];for(let e=0;e<o.removedNodes.length;e++){const t=o.removedNodes[e];if(t===r)return console.info("Detected removal of the top Blocking Element."),void this.pop();s.has(t)&&(t.inert=!1,s.delete(t))}for(let e=0;e<o.addedNodes.length;e++){const t=o.addedNodes[e];this[f](t)&&(n&&t.inert?n.add(t):(t.inert=!0,s.add(t)))}}}[f](e){return!1===/^(style|template|script)$/.test(e.localName)}[p](e){const t=[];let n=e;for(;n&&n!==document.body;)if(n.nodeType===Node.ELEMENT_NODE&&t.push(n),n.assignedSlot){for(;n=n.assignedSlot;)t.push(n);n=t.pop()}else n=n.parentNode||n.host;return t}[h](e){const t=e.shadowRoot;if(!t)return null;const n=new Set;let o,i,r;const c=t.querySelectorAll("slot");if(c.length&&c[0].assignedNodes)for(o=0;o<c.length;o++)for(r=c[o].assignedNodes({flatten:!0}),i=0;i<r.length;i++)r[i].nodeType===Node.ELEMENT_NODE&&n.add(r[i]);return n}}document.$blockingElements=new y})()},8967:(e,t,n)=>{"use strict";n.d(t,{T:()=>o});const o=(e,t=!0)=>{if(Array.isArray(e)){let n=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{n+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),n+="</ul>"}throw new Error("Unknown error response format")}},9194:(e,t,n)=>{"use strict";function o(e){return{id:Number(e.id),type:String(e.type),clientId:Number(e.clientId),description:String(e.description),createdBy:Number(e.createdBy),creationDate:new Date(e.creationDate),lastUpdatedBy:Number(e.lastUpdatedBy),lastUpdateDate:new Date(e.lastUpdateDate)}}n.d(t,{m:()=>o})},2824:(e,t,n)=>{"use strict";n.d(t,{d:()=>s});var o=n(771),i=n(7270),r=n(596),c=n(3600);function s(e=null){return t=this,n=void 0,a=function*(){const t=(0,c.Ie)(),n=o.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type"+(null===e?"":"/"+e),s=yield(0,i.d)(n,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function r(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof s?n:new s((function(e){e(n)}))).then(i,r)}c((a=a.apply(t,n||[])).next())}));var t,n,s,a}},5943:(e,t,n)=>{"use strict";n.d(t,{W:()=>o});const o={user_connections:56,connection_types:57}},2332:(e,t,n)=>{"use strict";var o=n(9392),i=n(1936),r=(n(5248),n(2935),n(3313),n(6455)),c=n.n(r),s=n(771),a=n(7270),l=n(596),d=n(8967),u=n(3600),p=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))},h=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},f=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let m=class extends o.oi{constructor(){super(),this.showing=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return o.dy`
      ${this.show_form}
      ${""}
    `}get show_form(){return o.dy`
        <div class="z-50">
          <div class="form-container">
            <div class=" !px-0">
              <div class="-row !px-0">
                <div class="-col-md-12">
                  <header class="header warning -col-md-12">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">New Connection Type</h1>
                      <h3 class="h3">Create New Connection Type!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-type">
                    <div class="container my-4">
                      <div class="row justify-center">
                        <div class="col-md-8 col-lg-8">
                          <h4 class="font-semibold my-2">Enter Type</h4>
                          <mwc-textfield name="type" type="text" class="w-full" id="type" value="" label="Enter Type" outlined
                            required>
                          </mwc-textfield>
                        </div>
                        <div class="col-md-8 col-lg-8">
                          <h4 class="font-semibold my-2">Enter Description</h4>
                          <mwc-textarea name="description" type="text" class="w-full h-24" id="description" value=""
                            label="Enter Description" outlined required>
                          </mwc-textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Add Connection Type" raised class="button" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
        
                        <div class="flex form-input-container items-center text-center">
                          <hr class="border-gray-300 border-1 w-full rounded-md">
                          <label class="block font-medium text-sm text-gray-600 w-full">
                            Lets go digital...
                          </label>
                          <hr class="border-gray-300 border-1 w-full rounded-md">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}submitForm(e){return t=this,n=void 0,i=function*(){e.preventDefault(),yield function(){return p(this,void 0,void 0,(function*(){const e=(0,u.Ie)(),t=s.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type",n=document.querySelector('[make-general-posts="user-connection-type"]'),o=new FormData(n);return c().fire({title:"Add Connection Type?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:i=>p(this,void 0,void 0,(function*(){return yield(0,a.d)(t,{method:"POST",body:o,headers:{Authorization:"Token "+e.token}},!1).then((e=>{const t=new l.H("post",e,!1,n),o=t.response;if("nameError"in o&&"unknownError"in o&&o.unknownError.length>0){let e=[];o.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,d.T)(e);c().showValidationMessage(`${t}`)}return t})).catch((e=>{c().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!c().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}n&&c().fire({title:t,icon:n?"success":"error",iconColor:n?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}()},new((o=void 0)||(o=Promise))((function(e,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,s)}a((i=i.apply(t,n||[])).next())}));var t,n,o,i}firstUpdated(){}createRenderRoot(){return this}};m.styles=[o.iv`
   :host { display: block; }
  `],h([(0,i.Cb)({type:Boolean}),f("design:type",Boolean)],m.prototype,"showing",void 0),m=h([(0,i.Mo)("pdb-connections-types-add"),f("design:paramtypes",[])],m)},6915:(e,t,n)=>{"use strict";var o=n(9194),i=n(2824),r=n(9392),c=n(1936),s=(n(934),n(6455)),a=n.n(s),l=n(771),d=n(7270),u=n(596),p=n(8967),h=n(3600),f=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};n(5248),n(2935),n(3313),n(4277);var m=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};var y=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let v=class extends r.oi{constructor(){super(),this.connection_type_id=0,this.connection_type="",this.connection_description=""}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return r.dy`
      <mwc-button class="button warning my-1" outlined open-dialog-btn="connection-type-update-${this.connection_type_id}" @click="${this.showDialog}">
        <mwc-icon>edit</mwc-icon> Edit
      </mwc-button>
      ${this.show_form}
    `}get show_form(){return r.dy`
      <mwc-dialog class="z-0" open-this-dialog="connection-type-update-${this.connection_type_id}" heading="Update Connection Type">
        <div class="flex m-1 justify-evenly whitespace-normal z-10">
          <div class="form-container">
            <div class=" !px-0">
              <div class="-row !px-0">
                <div class="-col-md-12">
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-type-${this.connection_type_id}">
                    <div class="container my-4">
                      <div class="row justify-center">
                        <div class="col-md-12 col-lg-12">
                          <h4 class="font-semibold my-2">Enter Type</h4>
                          <mwc-textfield name="type" type="text" class="w-full" id="type" value="${this.connection_type}"
                            label="Enter Type" outlined required>
                          </mwc-textfield>
                        </div>
                        <div class="col-md-12 col-lg-12">
                          <h4 class="font-semibold my-2">Enter Description</h4>
                          <mwc-textarea name="description" type="text" class="w-full h-24" id="description"
                            value="${this.connection_description}" label="Enter Description" outlined required>
                          </mwc-textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Update Connection Type" raised class="button" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
      
                        <div class="flex form-input-container items-center text-center">
                          <hr class="border-gray-300 border-1 w-full rounded-md">
                          <label class="block font-medium text-sm text-gray-600 w-full">
                            Lets go digital...
                          </label>
                          <hr class="border-gray-300 border-1 w-full rounded-md">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <mwc-button slot="secondaryAction" dialogAction="close">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `}showDialog(e){const t=e.currentTarget.getAttribute("open-dialog-btn");this.querySelector('[open-this-dialog="'+t+'"]').setAttribute("open","true")}submitForm(e){return t=this,n=void 0,i=function*(){e.preventDefault();const t=`connection-type-update-${this.connection_type_id}`,n=this.querySelector('[open-this-dialog="'+t+'"]');n.removeAttribute("open"),yield function(e,t){return m(this,void 0,void 0,(function*(){const n=(0,h.Ie)(),o=l.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type/"+e,i=document.querySelector('[make-general-posts="user-connection-type-'+e+'"]'),r=new FormData(i);return a().fire({title:"Update Connection Type?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>m(this,void 0,void 0,(function*(){return yield(0,d.d)(o,{method:"PUT",body:r,headers:{Authorization:"Token "+n.token}},!1).then((e=>{const t=new u.H("post",e,!1,i),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((n=>{let o={error:t.id+": "+n};"non_field_errors"===t.id&&(o={error:n}),e.push(o)}))}));const t=(0,p.T)(e);a().showValidationMessage(`${t}`)}return t})).catch((e=>(a().showValidationMessage(`${String(e)}`),!1)))})),didClose(){t.setAttribute("open","true")},allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let n="Success",o=!1;const i=e.value;if(i instanceof Object){const e=i.response;n=String(e.message),o=i.response.success}o&&a().fire({title:n,icon:o?"success":"error",iconColor:o?"#f97817":"#dc2626",confirmButtonColor:"#f97817"}),o?setTimeout((()=>{window.location.reload()}),500):t.setAttribute("open","true")}}))}))}(this.connection_type_id,n)},new((o=void 0)||(o=Promise))((function(e,r){function c(e){try{a(i.next(e))}catch(e){r(e)}}function s(e){try{a(i.throw(e))}catch(e){r(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,s)}a((i=i.apply(t,n||[])).next())}));var t,n,o,i}firstUpdated(){}createRenderRoot(){return this}};v.styles=[r.iv`
   :host { display: block; }
  `],y([(0,c.Cb)({type:Number}),b("design:type",Number)],v.prototype,"connection_type_id",void 0),y([(0,c.Cb)({type:String}),b("design:type",String)],v.prototype,"connection_type",void 0),y([(0,c.Cb)({type:String}),b("design:type",String)],v.prototype,"connection_description",void 0),v=y([(0,c.Mo)("pdb-connections-types-edit"),b("design:paramtypes",[])],v),n(2715);var w=function(e,t,n,o){var i,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},g=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},_=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((o=o.apply(e,t||[])).next())}))};let C=class extends r.oi{constructor(){super(),this._connection_types=[]}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return _(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getConnectionTypes()}))}disconnectedCallback(){}render(){return null===this._connection_types?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._connection_types?r.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:r.dy`
      <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2" 
        href="${l.t.URLS.PDB_CLIENT}member/connections/add-connection-type" label="Add Connetion Type">
      </link-button>
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
    `}get tableBody(){const e=this._connection_types;return Array.isArray(e)?e.map((e=>r.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex flex-col whitespace-nowrap">
                <p class="ml-1">${e.type}</p>
                <p class="ml-1">${e.description}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-nowrap">
                <pdb-connections-types-edit class="mx-1" id="edit-con-${e.id}" 
                  connection_type_id="${e.id}" connection_type="${e.type}"
                  connection_description="${e.description}">
                </pdb-connections-types-edit>
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${e.id}" @click="${this.deleteConnectionType}"></mwc-icon-button>
              </div>
            </td>
          </tr>
        `)):r.dy``}firstUpdated(){}getConnectionTypes(){return _(this,void 0,void 0,(function*(){const e=yield(0,i.d)(null);let t=[];null===e?t.push({id:0,type:"**NOT FOUND**"}):!0===e.response.success&&"length"in e.response.data&&(t=e.response.data.map((e=>(0,o.m)(e))));const n=[];n.push(...this._connection_types,...t),this._connection_types=n}))}deleteConnectionType(e){return _(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return f(this,void 0,void 0,(function*(){const t=(0,h.Ie)(),n=l.t.URLS.AKWAABA_API_BASE_URL+"members/user-connection-type/"+e,o={};return a().fire({title:"Remove Connection Type?",text:"You may have members assigned to this connection type. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>f(this,void 0,void 0,(function*(){return yield(0,d.d)(n,{method:"DELETE",body:JSON.stringify(o),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new u.H("delete",e,!1),n=t.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let e=[];n.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,p.T)(e);a().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let n=e;n.error=t;const o=new u.H("delete",n,!0);return o.postForm,o}})).catch((e=>{a().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!a().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",n=!1;const o=e.value;if(o instanceof Object){const e=o.response;t=String(e.message),n=o.response.success}a().fire({title:t,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}createRenderRoot(){return this}};C.styles=[r.iv`
   :host { display: block; }
  `],w([(0,c.Cb)({type:Array}),g("design:type",Array)],C.prototype,"_connection_types",void 0),C=w([(0,c.Mo)("pdb-connections-types-view"),g("design:paramtypes",[])],C)},4232:(e,t,n)=>{"use strict";n.d(t,{OR:()=>c,hl:()=>a,pt:()=>r});var o=n(3692);const{I:i}=o.Al,r=e=>null===e||"object"!=typeof e&&"function"!=typeof e,c=e=>void 0===e.strings,s={},a=(e,t=s)=>e._$AH=t},8082:(e,t,n)=>{"use strict";n.d(t,{XM:()=>o.XM,Xe:()=>o.Xe,pX:()=>o.pX});var o=n(875)},3669:(e,t,n)=>{"use strict";n.d(t,{a:()=>c});var o=n(3692),i=n(875),r=n(4232);const c=(0,i.XM)(class extends i.Xe{constructor(e){if(super(e),e.type!==i.pX.PROPERTY&&e.type!==i.pX.ATTRIBUTE&&e.type!==i.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===o.Jb||t===o.Ld)return t;const n=e.element,c=e.name;if(e.type===i.pX.PROPERTY){if(t===n[c])return o.Jb}else if(e.type===i.pX.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(c))return o.Jb}else if(e.type===i.pX.ATTRIBUTE&&n.getAttribute(c)===t+"")return o.Jb;return(0,r.hl)(e),t}})}}]);
//# sourceMappingURL=4958.js.map