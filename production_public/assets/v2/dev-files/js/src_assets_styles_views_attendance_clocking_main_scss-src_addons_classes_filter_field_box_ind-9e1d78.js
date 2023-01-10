"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_attendance_clocking_main_scss-src_addons_classes_filter_field_box_ind-9e1d78"],{3794:(t,e,n)=>{n.r(e)},2368:(t,e,n)=>{n.r(e),n.d(e,{FilterFieldBox:()=>o});var i=n(4672);class o{constructor(t){this.filtering="--filtering--",this.__filtering__="",this.__filtering__open_default=!1,this.__allowed=!1,this.clear_filter=t=>{var e,n;t.preventDefault();const i=window.FilterFieldBox.form,o=new FormData(i),r=null===(e=this.unmutableInputNames)||void 0===e?void 0:e.map((t=>t.name));null==o||o.forEach(((t,e)=>{var n;(null==r?void 0:r.includes(e))||null===(n=document.querySelectorAll('[name="'+e+'"]'))||void 0===n||n.forEach((t=>{t.value=""}))})),null===(n=this.unmutableInputNames)||void 0===n||n.map((t=>{var e;const n=t.name,i=t.value;void 0!==i&&(null===(e=document.querySelectorAll('[name="'+n+'"]'))||void 0===e||e.forEach((t=>{t.value=i})))})),i.submit()},this.constructorInit=t;const e=t.selectors;this.form=e.form,this.container=e.container,this.filterSectionContextBtn=e.filterSectionContextBtn,this.unmutableInputNames=t.unmutableInputNames,this.__filtering__open_default=t.isOpen,this.__filtering__=(0,i.urlQueryParamsGet)(this.filtering),null!==this.form&&null!==this.container&&null!==this.filterSectionContextBtn&&this.init()}init(){this.__allowed=!0,"FilterFieldBox"in window||(window.FilterFieldBox=this),setTimeout((()=>{this.addfilterCheckInput(),this.toggleFilterFieldsDefault()}),1e3)}toggleFilterFields(t){t.preventDefault();const e=window.FilterFieldBox;if(e.__allowed){const t=e.filterSectionContextBtn,n=e.container;n.hasAttribute("hidden")?(n.removeAttribute("hidden"),t.setAttribute("class","warning mt-1"),t.setAttribute("icon","close_fullscreen")):(n.setAttribute("hidden",""),t.setAttribute("class","primary mt-1"),t.setAttribute("icon","open_with"))}}addfilterCheckInput(){const t=window.FilterFieldBox.form,e=document.createElement("input");e.type="hidden",e.value="true",e.name=this.filtering,t.appendChild(e)}toggleFilterFieldsDefault(){const t=this;function e(){t.container.hasAttribute("hidden")&&t.filterSectionContextBtn.click()}"true"===this.__filtering__&&e(),this.__filtering__open_default&&e()}submit(t){t.preventDefault(),window.FilterFieldBox.form.submit()}}},602:(t,e,n)=>{n.r(e),n.d(e,{DELETE_GroupingsGroup:()=>d});var i=n(6455),o=n.n(i),r=n(8485),s=n(7270),l=n(4492),a=n(8967),c=n(3600),u=function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function s(t){try{a(i.next(t))}catch(t){r(t)}}function l(t){try{a(i.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,l)}a((i=i.apply(t,e||[])).next())}))};function d(t){return u(this,void 0,void 0,(function*(){const e=(0,c.getUserLoginInfoCookie)(),n=r.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group/"+t,i={};return o().fire({title:"Remove Group?",text:"You may have members assigned to this group. Proceed with care!",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:t=>u(this,void 0,void 0,(function*(){return yield(0,s.http)(n,{method:"DELETE",body:JSON.stringify(i),headers:{Authorization:"Token "+e.token}},!1).then((t=>{try{const e=new l.NetWorkCallResponses("delete",t,!1),n=e.response;if("nameError"in n&&"unknownError"in n&&n.unknownError.length>0){let t=[];n.unknownError.forEach((e=>{e.errors.forEach((e=>{t.push({error:e})}))}));const e=(0,a.https_swal_error_format)(t);o().showValidationMessage(`${e}`)}return e}catch(e){console.error({error:e});let n=t;n.error=e;const i=new l.NetWorkCallResponses("delete",n,!0);return i.postForm,i}})).catch((t=>{o().showValidationMessage(`${String(t)}`)}))})),allowOutsideClick:()=>!o().isLoading()}).then((t=>{if(t.isConfirmed){let e="Success",n=!1;const i=t.value;if(i instanceof Object){const t=i.response;e=String(t.message),n=i.response.success}o().fire({title:e,icon:n?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),n&&setTimeout((()=>{window.location.reload()}),500)}}))}))}},2715:(t,e,n)=>{n.r(e),n.d(e,{LinkButton:()=>l});var i=n(5862),o=n(9662),r=function(t,e,n,i){var o,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends i.LitElement{constructor(){super(...arguments),this.isBlockContent="true",this.raised=!1}render(){const t=this.thisIsBlockContent("mdc-deprecated-list-item"),e=this.thisIsBlockContent("mdc-deprecated-list-item__ripple");return!0===this.raised?i.html`
        <a class="${t} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `:i.html`
        <a class="${t} ${this.aClass}" href="${this.href}">
          <mwc-button class="${e} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `}thisIsBlockContent(t){return"true"===this.isBlockContent?t:""}createRenderRoot(){return this}};r([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"aClass",void 0),r([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"bClass",void 0),r([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"icon",void 0),r([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"href",void 0),r([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"label",void 0),r([(0,o.property)({type:String}),s("design:type",String)],l.prototype,"isBlockContent",void 0),r([(0,o.property)({type:Boolean}),s("design:type",Boolean)],l.prototype,"raised",void 0),l=r([(0,o.customElement)("link-button")],l)},7108:(t,e,n)=>{n.r(e),n.d(e,{PAGE__IDS:()=>i});const i={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}}}]);
//# sourceMappingURL=src_assets_styles_views_attendance_clocking_main_scss-src_addons_classes_filter_field_box_ind-9e1d78.js.map