"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_assets_styles_views_admin_user_main_scss-src_addons_widgets_profile_photo_index_ts-src_vi-7916a9"],{53029:(e,t,a)=>{a.r(t)},24173:(e,t,a)=>{a.r(t),a.d(t,{getDate:()=>c});const c=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},38281:(e,t,a)=>{a.r(t),a.d(t,{UserProfilePhoto:()=>i});var c=a(48485),l=a(85862),d=a(59662),s=function(e,t,a,c){var l,d=arguments.length,s=d<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,c);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(d<3?l(s):d>3?l(t,a,s):l(t,a))||s);return d>3&&s&&Object.defineProperty(t,a,s),s},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let i=class extends l.LitElement{constructor(){super(),this["click-to-open"]="false"}connectedCallback(){super.connectedCallback(),"client"===this.type?this.setUpClientImage():this.setUpMemberImage()}disconnectedCallback(){}render(){return l.html`
      <div @click="${this.openProfile}"
        class="h-${this.size} w-${this.size} items-center justify-center border-2 border-yellow-500 ${this.rounded?"rounded-full":""}">
        <img class="object-cover h-full w-full border-2 border-akwaaba-orange-light ${this.rounded?"rounded-full":""}"
          src="${this.url}">
      </div>
      <div class="w-8 h-8 w-16 h-16 w-32 h-32 hidden"></div>
    `}openProfile(e){e.preventDefault(),"false"!==this["click-to-open"]&&(window.location.href=this["click-to-open"])}firstUpdated(){}setUpMemberImage(){if(this.url.includes("member/logo/")||this.url.includes("member/profile/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=c.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/members/profile-picture/"+t}}setUpClientImage(){if(this.url.includes("clients/profile-picture/"))this.url=this.url;else{const e=this.url.split("/"),t=e[e.length-1];this.url=c.CONSTANTS.URLS.FILE_BUCKET_BASE_URL+"/files/clients/profile-picture/"+t}}createRenderRoot(){return this}};i.styles=[l.css`
   :host { display: block; }
  `],s([(0,d.property)({type:String}),r("design:type",String)],i.prototype,"url",void 0),s([(0,d.property)({type:String}),r("design:type",String)],i.prototype,"type",void 0),s([(0,d.property)({type:Boolean}),r("design:type",Boolean)],i.prototype,"rounded",void 0),s([(0,d.property)({type:String}),r("design:type",String)],i.prototype,"click-to-open",void 0),s([(0,d.property)({type:Number}),r("design:type",Number)],i.prototype,"size",void 0),i=s([(0,d.customElement)("user-profile-photo"),r("design:paramtypes",[])],i)},19981:(e,t,a)=>{a.r(t),a.d(t,{PAGE__IDS:()=>c});const c={view:21,edit:22,create:23,"view-organization":53,"edit-organization":54}},52205:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberContactData:()=>i});var c=a(85862),l=a(59662),d=(a(48763),a(16788),a(51511),a(24173)),s=function(e,t,a,c){var l,d=arguments.length,s=d<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,c);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(d<3?l(s):d>3?l(t,a,s):l(t,a))||s);return d>3&&s&&Object.defineProperty(t,a,s),s},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let i=class extends c.LitElement{constructor(){super(),this.memberContactInfo=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberContactInfo?this.pageLoading:this.memberContactInfo.length<1?this.pageError:this.memberContactInfo.map((e=>{var t,a,l,s;return c.html`
        <div class="my-1">
          <h4 class="uppercase text-base font-bold flex justify-between">Contact Info</h4>
          <div class="mdc-data-table w-full my-1" mdc-data-table="data-table">
            <div class="mdc-data-table__table-container">
              <table class="mdc-data-table__table" aria-label="New Meeting Member">
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Query</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                    <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Info</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Phone</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p><a href="tel:${e.phone}" type="tel">${e.phone}</a></p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Email</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p><a href="mailto:${e.email}" type="email">${e.email}</a></p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Place of Work</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.placeOfWork}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Whatsapp</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                      ${""}
                        <p><a class="text-green-600" href="https://api.whatsapp.com/send?phone=+${e.whatsapp}&amp;text=">${e.whatsapp}</a></p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Facebook</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>
                          ${(null===(t=e.facebook)||void 0===t?void 0:t.length)>0?c.html`<a class="text-blue-700" href="https://web.facebook.com/${e.facebook}">${e.facebook}</a>`:"-"}
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Twitter</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>
                          ${(null===(a=e.twitter)||void 0===a?void 0:a.length)>0?c.html`<a class="text-blue-500" href="https://twitter.com/${e.twitter}">${e.twitter}</a>`:"-"}
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Instagram</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>
                          ${(null===(l=e.instagram)||void 0===l?void 0:l.length)>0?c.html`<a class="text-purple-600" href="https://www.instagram.com/${e.instagram}">${e.instagram}</a>`:"-"}
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Website</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>
                          ${(null===(s=e.website)||void 0===s?void 0:s.length)>0?c.html`<a class="text-yellow-600" href="${e.website}">${e.website}</a>`:"-"}
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Business Hashtags</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="flex flex-wrap gap-2">
                        ${this.getHashtags(e.businessHashtag).map((e=>this.tagTag(e)))}
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Postal Address</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.postalAddress}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Digital Address</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.digitalAddress}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Date Joined</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${null===e.dateJoined?"-":(0,d.getDate)(e.dateJoined)}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mdc-data-table w-full my-1" mdc-data-table="data-table">
            <div class="mdc-data-table__table-container">
              <table class="mdc-data-table__table" aria-label="New Meeting Member">
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Account Bio</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p class="whitespace-pre-line">${e.accountBio}</p>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="mdc-data-table w-full my-1" mdc-data-table="data-table">  
            <div class="mdc-data-table__table-container">
              <table class="mdc-data-table__table" aria-label="New Meeting Member">
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Business Description</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p class="whitespace-pre-line">${e.businessDescription}</p>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `}))}tagTag(e){return c.html`
      <span class="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 rounded-full p-1.5 text-xs" >
        <span>${e}</span>
      </span>
    `}getHashtags(e){const t=e.split("\n");let a=[];return t.forEach((e=>{e.split(",").forEach((e=>{const t=e.trim();a.includes(t)||a.push(t)}))})),a}get pageLoading(){return c.html`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=c.html`<h4 class="text-gray-600">No Data Found!</h4>`,t=c.nothing;return c.html`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};i.styles=[c.css`
   :host { display: block; }
  `],s([(0,l.property)({type:Array}),r("design:type",Array)],i.prototype,"memberContactInfo",void 0),i=s([(0,l.customElement)("pdb-membership-member-contact-data"),r("design:paramtypes",[])],i)},91506:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberContactPrivacy:()=>r});var c=a(85862),l=a(59662),d=(a(48763),a(16788),a(51511),function(e,t,a,c){var l,d=arguments.length,s=d<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,c);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(d<3?l(s):d>3?l(t,a,s):l(t,a))||s);return d>3&&s&&Object.defineProperty(t,a,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends c.LitElement{constructor(){super(),this.memberContactPrivacy=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberContactPrivacy?this.pageLoading:this.memberContactPrivacy.length<1?this.pageError:this.memberContactPrivacy.map((e=>c.html`
        <div class="my-1">
          <h4 class="uppercase text-base font-bold flex justify-between">Contact Privacy</h4>
          <div class="mdc-data-table w-full" mdc-data-table="data-table">
            <div class="mdc-data-table__table-container">
              <table class="mdc-data-table__table" aria-label="New Meeting Member">
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Query</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                    <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Info</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Phone</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.phone}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Email</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.email}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Place of Work</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.placeOfWork}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Whatsapp</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.whatsapp}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Facebook</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.facebook}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Twitter</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.twitter}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Instagram</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.instagram}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Website</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.website}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Business Hashtags</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.businessHashtag}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Postal Address</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.postalAddress}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Digital Address</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.digitalAddress}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Account Bio</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.accountBio}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Business Description</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <input disabled type="checkbox" ?checked="${e.businessDescription}"
                          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `))}get pageLoading(){return c.html`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=c.html`<h4 class="text-gray-600">No Data Found!</h4>`,t=c.nothing;return c.html`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};r.styles=[c.css`
   :host { display: block; }
  `],d([(0,l.property)({type:Array}),s("design:type",Array)],r.prototype,"memberContactPrivacy",void 0),r=d([(0,l.customElement)("pdb-membership-member-contact-privacy"),s("design:paramtypes",[])],r)},62530:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberBranchCategory:()=>r});var c=a(85862),l=a(59662),d=(a(48763),a(51511),function(e,t,a,c){var l,d=arguments.length,s=d<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,c);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(d<3?l(s):d>3?l(t,a,s):l(t,a))||s);return d>3&&s&&Object.defineProperty(t,a,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends c.LitElement{constructor(){super(),this.memberInfo=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return null===this.memberInfo?this.pageLoading:this.memberInfo.length<1?this.pageError:this.memberInfo.map((e=>c.html`
        <div class="my-1">
          <div class="mdc-data-table w-full" mdc-data-table="data-table">
            <div class="mdc-data-table__table-container">
              <table class="mdc-data-table__table" aria-label="New Meeting Member">
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Query</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                    <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Info</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Branch</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.branchInfo.name}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Category</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${e.categoryInfo.category}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `))}get pageLoading(){return c.html`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=c.html`<h4 class="text-gray-600">No Data Found!</h4>`,t=c.nothing;return c.html`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};r.styles=[c.css`
   :host { display: block; }
  `],d([(0,l.property)({type:Array}),s("design:type",Array)],r.prototype,"memberInfo",void 0),r=d([(0,l.customElement)("pdb-membership-member-branch-category"),s("design:paramtypes",[])],r)},30845:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberLocation:()=>r});var c=a(85862),l=a(59662),d=(a(48763),a(51511),function(e,t,a,c){var l,d=arguments.length,s=d<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,c);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(d<3?l(s):d>3?l(t,a,s):l(t,a))||s);return d>3&&s&&Object.defineProperty(t,a,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends c.LitElement{constructor(){super(),this.memberInfo=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return console.log({"this.memberInfo-location":this.memberInfo}),null===this.memberInfo?this.pageLoading:this.memberInfo.length<1?this.pageError:this.memberInfo.map((e=>c.html`
        <div class="my-1">
          <div class="mdc-data-table w-full" mdc-data-table="data-table">
            <div class="mdc-data-table__table-container">
              <table class="mdc-data-table__table" aria-label="New Meeting Member">
                <thead>
                  <tr class="mdc-data-table__header-row">
                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Query</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                    <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                      <div class="mdc-data-table__header-cell-wrapper">
                        <div class="mdc-data-table__header-cell-label">
                          <b>Info</b>
                        </div>
                        <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="mdc-data-table__content">
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Country</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${Array.isArray(e.countryInfo)?e.countryInfo[0].name:"-"}</p>
                      </div>
                    </td>
                  </tr>
                  ${Array.isArray(e.countryInfo)&&76===e.countryInfo[0].id?this.ghanaLocations(e):this.nonGhanaLocations(e)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `))}ghanaLocations(e){return c.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-center">
            <p>Region</p>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="">
            <p>${e.regionInfo.location}</p>
          </div>
        </td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-center">
            <p>District</p>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="">
            <p>${e.districtInfo.location}</p>
          </div>
        </td>
      </tr>
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-center">
            <p>Constituency</p>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="">
            <p>${e.constituencyInfo.location}</p>
          </div>
        </td>
      </tr>
    `}nonGhanaLocations(e){return c.html`
      <tr class="mdc-data-table__row">
        <th class="mdc-data-table__cell" scope="row">
          <div class="flex items-center">
            <p>State/ Province</p>
          </div>
        </th>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
          <div class="">
            <p>${e.stateProvince}</p>
          </div>
        </td>
      </tr>
    `}get pageLoading(){return c.html`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=c.html`<h4 class="text-gray-600">No Data Found!</h4>`,t=c.nothing;return c.html`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};r.styles=[c.css`
   :host { display: block; }
  `],d([(0,l.property)({type:Array}),s("design:type",Array)],r.prototype,"memberInfo",void 0),r=d([(0,l.customElement)("pdb-membership-member-location"),s("design:paramtypes",[])],r)},31826:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberGroups:()=>r});var c=a(85862),l=a(59662),d=(a(48763),a(51511),function(e,t,a,c){var l,d=arguments.length,s=d<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,c);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(d<3?l(s):d>3?l(t,a,s):l(t,a))||s);return d>3&&s&&Object.defineProperty(t,a,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends c.LitElement{constructor(){super(),this.memberGroups=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return console.log({"this.memberGroups":this.memberGroups}),null===this.memberGroups?this.pageLoading:this.memberGroups.length<1?this.pageError:c.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Group(s)</b>
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
                ${this.memberGroups.map(((e,t)=>c.html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <p>${e.groupId.group}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${e.groupId.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                      </td>
                    </tr>
                  `))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get pageLoading(){return c.html`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=c.html`<h4 class="text-gray-600">No Data Found!</h4>`,t=c.nothing;return c.html`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};r.styles=[c.css`
   :host { display: block; }
  `],d([(0,l.property)({type:Array}),s("design:type",Array)],r.prototype,"memberGroups",void 0),r=d([(0,l.customElement)("pdb-membership-member-groups"),s("design:paramtypes",[])],r)},84846:(e,t,a)=>{a.r(t),a.d(t,{PdbMembershipMemberSubGroups:()=>r});var c=a(85862),l=a(59662),d=(a(48763),a(51511),function(e,t,a,c){var l,d=arguments.length,s=d<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,a):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,c);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(d<3?l(s):d>3?l(t,a,s):l(t,a))||s);return d>3&&s&&Object.defineProperty(t,a,s),s}),s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let r=class extends c.LitElement{constructor(){super(),this.memberSubGroups=null}connectedCallback(){super.connectedCallback()}disconnectedCallback(){}render(){return console.log({"this.memberSubGroups":this.memberSubGroups}),null===this.memberSubGroups?this.pageLoading:this.memberSubGroups.length<1?this.pageError:c.html`
      <div class="col-md-12 col-lg-12 my-1">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Sub-Group(s)</b>
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
                ${this.memberSubGroups.map(((e,t)=>c.html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <small class="text-gray-500">${e.subgroupId.groupID.group}</small>
                          <p> <small class="text-gray-500">></small> ${e.subgroupId.subgroup}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${e.subgroupId.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                      </td>
                    </tr>
                  `))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}get pageLoading(){return c.html`
      <div class="main-container">
        <div class="flex justify-center">
          <mwc-circular-progress indeterminate></mwc-circular-progress>
        </div>
      </div>
    `}get pageError(){const e=c.html`<h4 class="text-gray-600">No Data Found!</h4>`,t=c.nothing;return c.html`
      <div class="col-md-12">
        <alert-card info .header="${e}" .content="${t}" extra_class="!max-w-full"></alert-card>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};r.styles=[c.css`
   :host { display: block; }
  `],d([(0,l.property)({type:Array}),s("design:type",Array)],r.prototype,"memberSubGroups",void 0),r=d([(0,l.customElement)("pdb-membership-member-subgroups"),s("design:paramtypes",[])],r)}}]);
//# sourceMappingURL=src_assets_styles_views_admin_user_main_scss-src_addons_widgets_profile_photo_index_ts-src_vi-7916a9.js.map