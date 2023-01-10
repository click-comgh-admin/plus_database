import '@@assets/styles/views/admin/user/main.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { base64Decode, base64Encode } from '@@addons/functions/base64';
import { urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { ClientUsers_I, ClientUsers_S } from '@@addons/interfaces/clients/users';
import { GET_ClientUsers } from '@@addons/network/clients/users';
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@@addons/widgets/alert';
import '@@addons/widgets/profile_photo';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@material/mwc-icon-button';
import { ClientUserAccess_I, ClientUserAccess_S } from '@@addons/interfaces/clients/users/access';
import { GET_ClientUserAccess } from '@@addons/network/clients/users/access';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
// import { ClientPageAccess_I, ClientPageAccess_S } from '@@addons/interfaces/clients/page_access';
import { GET_ClientPageAccess } from '@@addons/network/clients/users/page_access';
import { Button } from '@material/mwc-button';
import { GET_ClientUserGroupSubgroup } from '@@addons/network/clients/users/group_subgroup';
import { DELETE_ClientUser } from '@@addons/network/clients/users/delete';
import { ClientPageAccessModel, Convert as cpamConvert } from '@@addons/interfaces/clients/users/page_access';
import { ClientUserPageAccessModel, Convert as cupamConvert } from '@@addons/interfaces/clients/users/page_access/user_access';
import { ClientUserGroupSubgroupModel, Convert as cugsmConvert } from '@@addons/interfaces/clients/users/model/group_subgroup';
import './access_card';
import { AppSetup } from '@@addons/functions/app_settings';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';
import { PAGE__IDS } from './page__id';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';


@customElement("pdb-admin-user-one")
export class PdbAdminUserOne extends LitElement {
  constructor() { super(); }

  @query('#groupsSectionFormBtn')
  private groupsSectionFormBtn: Button;

  @query('#subGroupsSectionFormBtn')
  private subGroupsSectionFormBtn: Button;

  @property({ type: Number })
  private userId?: number = 0;

  @property({ type: Number })
  private loggedUserId?: number = 0;

  @property({ type: Number })
  private formId: 1 | 2 = 1;

  @property({ type: String })
  public page_type: "mine" | "not-mine" = "mine";

  @property({ type: Boolean })
  private editAccess?: boolean = false;

  @property({ type: String })
  private memberProfileEditBaseUrl: string = "/admin/user/update-account?user-id=";

  @property({ type: String })
  private memberGroupSubgroupAddBaseUrl: string = "/admin/user/add-group-subgroup?user-id=";

  @property({ type: String })
  private memberGroupSubgroupEditBaseUrl: string = "/admin/user/update-group-subgroup?user-id=";

  @property({ type: Array })
  private _pageAccesses: ClientPageAccessModel[] = [];


  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  private _clientUser: NetworkCallResponse_I<ClientUsers_I> = null;

  public set clientUser(value: NetworkCallResponse_I<ClientUsers_I>) {
    this._clientUser = value;
    this.requestUpdate();
  }

  public get clientUser(): NetworkCallResponse_I<ClientUsers_I> {
    return this._clientUser;
  }

  private get _clientUserAccessDefault(): NetworkCallResponse_I<ClientUserPageAccessModel>{
    const access: ClientUserPageAccessModel = {};
    return {data: access, message: "", success: false}
  }

  private _clientUserAccess: NetworkCallResponse_I<ClientUserPageAccessModel> = this._clientUserAccessDefault;

  public set clientUserAccess(value: NetworkCallResponse_I<ClientUserPageAccessModel>) {
    this._clientUserAccess = value;
    this.requestUpdate();
  }

  public get clientUserAccess(): NetworkCallResponse_I<ClientUserPageAccessModel> {
    return this._clientUserAccess;
  }

  private get _clientUserGroupSubgroupDefault(): NetworkCallResponse_I<ClientUserGroupSubgroupModel>{
    const groupSubgroup: ClientUserGroupSubgroupModel = {};
    return {data: groupSubgroup, message: "", success: false}
  }

  private _clientUserGroupSubgroup: NetworkCallResponse_I<ClientUserGroupSubgroupModel> = this._clientUserGroupSubgroupDefault;

  public set clientUserGroupSubgroup(value: NetworkCallResponse_I<ClientUserGroupSubgroupModel>) {
    this._clientUserGroupSubgroup = value;
    this.requestUpdate();
  }

  public get clientUserGroupSubgroup(): NetworkCallResponse_I<ClientUserGroupSubgroupModel> {
    return this._clientUserGroupSubgroup;
  }

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    if (this.page_type === "mine") {
      await this.getLoggedUserAccess();
    }
    this.getUserId();

    if ((this.userId === 0) || (this.userId === null) || (Number.isNaN(this.userId))) { } else {
      await this.getClientUser();
      if (this.clientUser.success) {
        await this.getPageAccesses();

        if (this.page_type === "not-mine") {
          await this.getLoggedUserAccess();
        }

        await this.getClientUserAccess();
        await this.getClientUserGroupSubgroup();

        if (this.userId === this.loggedUserId) {
          this.page_type = "mine";
        } else {
          this.page_type = "not-mine";
          // this.editAccess
        }
      }
    }

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this._hasSetup) {
      if (getAppSettingsExtraSettings()?.expiration_date.expired) {
        return html`<account-expired-component></account-expired-component>`;
      }
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.view, viewType: "View"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }

    if ((this.userId === 0) || (this.userId === null) || (Number.isNaN(this.userId))) {
      const header = html`<h4 class="text-white">Error</h4>`;
      const content = html`
        <div>
          <p class="text-black mb-2">User Not Found!</p>
          <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
          <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
            label="Client Users Page"></link-button>
        </div>
      `;
      return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
    } else {

      if (this.clientUser === null) {
        return html`
          <div class="main-container">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </div>
        `;
      }
      if (this.clientUser === undefined) {
        return html`
          <div class="main-container">
            <div class="flex justify-center">
              <h4 class="text-red-600 text-lg">
                <span class="font-bold">Admin User </span>: undefined error</h4>
            </div>
          </div>
        `;
      }

      if (this.clientUser.success === false) {
        const header = html`<h4 class="text-white">Error</h4>`;
        const content = html`
          <div>
            <p class="text-black mb-2">User Not Found!</p>
            <p class="text-black mb-2"><small>Follow the link back to users page.</small></p>
            <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2" href="/admin/user/accounts"
              label="Client Users Page"></link-button>
          </div>
        `;
        return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
      }
      const clientUser = this.clientUser,
        _data = clientUser.data,
        DATA = ClientUsers_S(Array.isArray(_data) ? _data[0] : _data),
        SUCCESS = clientUser.success;
      const ID = SUCCESS ? base64Encode(String(DATA.id), true) : "";

      const clientUserGroupSubgroup = this.clientUserGroupSubgroup,
        _groupSubgroupData = clientUserGroupSubgroup.data,
        // GROUP_SUBGROUP = Array.isArray(_groupSubgroupData)
        //   ? ClientUserGroupSubgroup_S(_groupSubgroupData[0]) : ClientUserGroupSubgroup_S(_groupSubgroupData),
        GROUP_SUBGROUP = Array.isArray(_groupSubgroupData) ? _groupSubgroupData[0] : _groupSubgroupData,
        GROUP_SUBGROUP_SUCCESS = clientUserGroupSubgroup.success;
        // console.log({"GROUP_SUBGROUP.id": GROUP_SUBGROUP.id});
        
      return html`
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${SUCCESS ? html`${DATA.firstname} ${DATA.surname}'s` : nothing} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="client"
                  url="${SUCCESS ? DATA.profilePicture : " profile.png"}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="/account/accounts?edit=photo&user=${ID}" label="Edit">
                </link-button>
              </div>
            </div>
            <div class="shadow bg-white my-2">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${SUCCESS ? html`${DATA.firstname} ${DATA.surname}'s` : nothing} Group(s)/ Subgroup(s)
                </h4>
        
                <mwc-tab-bar activeIndex="0">
                  <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth id="groupsSectionFormBtn"
                    label="Group" @click="${this.displayGroupsSectionBtn}"></mwc-tab>
                  <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth
                    id="subGroupsSectionFormBtn" label="Sub-Group" @click="${this.displaySubGroupsSectionBtn}"></mwc-tab>
                </mwc-tab-bar>
              </div>
              <div class="py-2">
                ${this.getGroupSubgroupSection(GROUP_SUBGROUP, GROUP_SUBGROUP_SUCCESS)}
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                ${Number.isNaN(GROUP_SUBGROUP.id) ? html`
                  <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2"
                    href="${this.memberGroupSubgroupAddBaseUrl}${ID}" label="Add">
                  </link-button>
                `: html`
                  <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                    href="${this.memberGroupSubgroupEditBaseUrl}${ID}" label="Edit">
                  </link-button>
                `}
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-8 my-1">
            <div class="shadow bg-white">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold flex justify-between">
                  ${SUCCESS ? html`${DATA.firstname} ${DATA.surname}'s` : nothing} Bio/ Access 
                  ${this.editAccess? html`
                  <div class="flex flex-col items-center pl-2">
                    <mwc-icon-button class="bg-love-kiss text-white" icon="delete" delete-this-item="${DATA.id}" @click="${this.deleteClientUser}"></mwc-icon-button>
                    <small class="block">Delete</small>
                  </div>
                  `: nothing}
                </h4>
              </div>
              <div class="p-3 ">
                <div class="row justify-content-center">
                  ${this.bioData(DATA, SUCCESS)}
                  ${this.accessData}
                </div>
              </div>
              <div class="p-3 border-t-2 flex justify-end">
                <link-button isblockcontent="false" aClass="" raised bClass="button warning mr-2"
                  href="${this.memberProfileEditBaseUrl}${ID}" label="Edit">
                </link-button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  private displayGroupsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.groupsSectionFormBtn.setAttribute('raised', "true");
    this.subGroupsSectionFormBtn.removeAttribute('raised');
  }

  private displaySubGroupsSectionBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.subGroupsSectionFormBtn.setAttribute('raised', "true");
    this.groupsSectionFormBtn.removeAttribute('raised');
  }

  private bioData(DATA: ClientUsers_I, SUCCESS: boolean) {
    return html`
      <div class="col-md-12 col-lg-6 my-1">
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
                      <p>Name</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${SUCCESS ? html`${DATA.firstname} ${DATA.surname}` : "-"}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Gender</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${SUCCESS ? html`${(DATA.gender === 1) ? "Male" : ((DATA.gender === 2) ? "Female" : '-')} ` : "-"}
                      </p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Date of birth</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${SUCCESS ? html`${DATA.dateOfBirth.toDateString()}` : "-"}</p>
                    </div>
                  </td>
                </tr>
                <tr class="mdc-data-table__row">
                  <th class="mdc-data-table__cell" scope="row">
                    <div class="flex items-center">
                      <p>Phone</p>
                    </div>
                  </th>
                  <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                    <div class="">
                      <p>${SUCCESS ? html`<a href="tel:${DATA.phone}" type="tel">${DATA.phone}</a>` : "-"}</p>
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
                      <p>${SUCCESS ? html`<a href="mailto:${DATA.email}" type="email">${DATA.email}</a>` : "-"}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private get accessData() {

    const clientUserAccess = this.clientUserAccess,
      _accessData = clientUserAccess.data,
      PAGES = Array.isArray(_accessData) ? _accessData : [_accessData],
      ACCESS_SUCCESS = clientUserAccess.success;

      
      let accessIDs: Array<ClientUserPageAccessModel> = [];
      if (ACCESS_SUCCESS) {
        PAGES.forEach((PAGE) => {
          PAGE = cupamConvert.toClientUserPageAccessModel(JSON.stringify(PAGE));
          // console.log({ PAGE });
        
          if (!accessIDs.includes(PAGE)) {
            accessIDs.push(PAGE);
          }
        });
    }
    // console.log({accessIDs});
    
    
    return html`
      <div class="col-md-12 col-lg-6 my-1">
        <client-user-access-card ?isActive="${false}" .available_access="${this._pageAccesses}" .user_access="${accessIDs?.length> 0? accessIDs: null}"></client-user-access-card>
      </div>
    `;
    // return html`
    //   <div class="col-md-12 col-lg-6 my-1">
    //     <div class="mdc-data-table w-full" mdc-data-table="data-table">
    //       <div class="mdc-data-table__table-container">
    //         <table class="mdc-data-table__table" aria-label="New Meeting Member">
    //           <thead>
    //             <tr class="mdc-data-table__header-row">
    //               <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
    //                 <div class="mdc-data-table__header-cell-wrapper">
    //                   <div class="mdc-data-table__header-cell-label">
    //                     <b>Page(s)</b>
    //                   </div>
    //                   <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
    //                 </div>
    //               </th>
    //               <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
    //                 <div class="mdc-data-table__header-cell-wrapper">
    //                   <div class="mdc-data-table__header-cell-label">
    //                     <mwc-icon>tune</mwc-icon>
    //                   </div>
    //                   <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
    //                 </div>
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody class="mdc-data-table__content">
    //             ${pageAccesses.map((pageAccess, i) => {
    //               let access_id: any = "access_" + i; let checked = false;
    //               if (ACCESS_SUCCESS) {
    //                 accessIDs.forEach((accessID) => {
    //                   if (pageAccess.id === accessID) {
    //                     checked = true;
    //                   }
    //                 });
    //               }
    //               return html`
    //                 <tr class="mdc-data-table__row">
    //                   <th class="mdc-data-table__cell" scope="row">
    //                     <div class="flex items-center">
    //                       <label for="${access_id}">${pageAccess.name}</label>
    //                     </div>
    //                   </th>
    //                   <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
    //                     <div class="">
    //                       ${checked ? html`
    //                       <input id="${access_id}" disabled type="checkbox" value="${pageAccess.id}" checked
    //                         class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    //                       `: html`
    //                       <input id="${access_id}" disabled type="checkbox" value="${pageAccess.id}"
    //                         class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
    //                       ` }
    //                     </div>
    //                   </td>
    //                 </tr>
    //               `;
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // `;
  }

  private getGroupSubgroupSection(GROUP_SUBGROUP: ClientUserGroupSubgroupModel, SUCCESS: boolean) {
    if (this.formId === 1) {
      this.formId
      return html`
        ${this.groupData(GROUP_SUBGROUP, SUCCESS)}
      `;
    } else {
      this.formId
      return html`
        ${this.subGroupData(GROUP_SUBGROUP, SUCCESS)}
      `;
    }
  }

  private groupData(GROUP_SUBGROUP: ClientUserGroupSubgroupModel, SUCCESS: boolean) {

    return html`
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
                ${(SUCCESS? GROUP_SUBGROUP.group: [])?.map((group, i) => {
                  return html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <p>${group.group}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${group.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                      </td>
                    </tr>
                  `;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private subGroupData(GROUP_SUBGROUP: ClientUserGroupSubgroupModel, SUCCESS: boolean) {

    return html`
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
                ${(SUCCESS? GROUP_SUBGROUP.subgroup: [])?.map((subgroup, i) => {
                  return html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex flex-col items-start">
                          <small class="text-gray-500">${subgroup.subgroup}</small>
                          <p> <small class="text-gray-500">></small> ${subgroup.subgroup}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${subgroup.id}" checked
                            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>
                      </td>
                    </tr>
                  `;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  private get pageAccesses() {
    type pageAccessType = { id: number; name: string; isSelected: "true" | "false"; selected: boolean; }
    let pageAccesses: pageAccessType[] = [];

    this._pageAccesses.forEach(page => {
      const pageAccess: pageAccessType = {
        id: page.id, name: page.page, isSelected: "false", selected: false,
      };

      if (!pageAccesses.includes(pageAccess)) {
        pageAccesses.push(pageAccess);
      }
    });
    return pageAccesses;
  }

  firstUpdated() { }

  private getUserId() {
    if (this.page_type === "mine") {
      this.userId = this.loggedUserId;
    } else {
      let userId = urlQueryParamsGet('user-id');
      // console.log({ userId });
      let _userId = userId !== null ? base64Decode(userId) : null;
      this.userId = Number.isNaN(_userId) ? null : Number(_userId);
    }
    // console.log({ "this.userId": this.userId });
  }

  async deleteClientUser(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userUserId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_ClientUser(userUserId);
  }

  private async getClientUser() {
    let branchId = 0;
    if (this._activeBranchId !== null) {
      branchId = this._activeBranchId[0].id;
    }
    const _networkResponse = await GET_ClientUsers<ClientUsers_I>(this.userId, "?branchId=" + branchId);
    if (_networkResponse === null) {
      this.clientUser = undefined;
    } else {
      this.clientUser = _networkResponse.response;
      // console.log({"this.clientUser": this.clientUser})
    }
  }

  private async getClientUserAccess() {
    // ClientUserAccess_S
    const _networkResponse = await GET_ClientUserAccess<ClientUserPageAccessModel>(null, "?userId=" + this.userId);
    if (_networkResponse === null) {
      this._clientUserAccess = undefined;
    } else {
      const DATA = _networkResponse.response.data
      if (Array.isArray(DATA)) {
        // @ts-ignore
        _networkResponse.response.data = DATA.map((data: any) => cupamConvert.toClientUserPageAccessModel(JSON.stringify(data)))
      } else {
        _networkResponse.response.data = [cupamConvert.toClientUserPageAccessModel(JSON.stringify(DATA))];
      }
      this._clientUserAccess = _networkResponse.response;
    }
  }

  private async getLoggedUserAccess() {
    let userId = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userId = this._userLoginInfo[0].user.id;
      }
    }
    this.loggedUserId = userId;
    // console.log({"this.loggedUserId": this.loggedUserId});
    // console.log({"this._userLoginInfo": this._userLoginInfo});
    
    const _networkResponse = await GET_ClientUserAccess<ClientUserAccess_I>(null, "?logged_user_this&userId=" + this.loggedUserId);
    if (_networkResponse !== null) {
      if (_networkResponse.response.success) {
        const datas = _networkResponse.response.data;
        if (Array.isArray(datas)) {
          datas.forEach((data: ClientUserAccess_I) => {
            data = ClientUserAccess_S(data);
            if (data.page.id === 14) {
              // "id": 14,
              // "page": "Account Users"
              this.editAccess = true;
            }
          });
        }
      }
    }
  }

  private async getClientUserGroupSubgroup() {
    const _networkResponse = await GET_ClientUserGroupSubgroup<any>(null, "?userId=" + this.userId);
    if (_networkResponse === null) {
      this.clientUserGroupSubgroup = undefined;
    } else {
      const DATA = _networkResponse.response.data;

      if (Array.isArray(DATA)) {
        // @ts-ignore
        _networkResponse.response.data = DATA.map((data: any) => cugsmConvert.toClientUserGroupSubgroupModel(JSON.stringify(data)))
      } else {
        _networkResponse.response.data = [cugsmConvert.toClientUserGroupSubgroupModel(JSON.stringify(DATA))];
      }
      this.clientUserGroupSubgroup = _networkResponse.response;
    }
  }

  private async getPageAccesses() {
    const _networkResponse = await GET_ClientPageAccess<any>();
    // console.log({_networkResponse});
    
    let __pageAccesses: ClientPageAccessModel[] = [];

    if (_networkResponse === null) {
      __pageAccesses.push({ id: 0, page: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: ClientPageAccessModel[] = data.map(value => {
          return cpamConvert.toClientPageAccessModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __pageAccesses = DATA;
      }
    }

    const new_data: Array<ClientPageAccessModel> = [];
    new_data.push(...this._pageAccesses, ...__pageAccesses);
    this._pageAccesses = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
