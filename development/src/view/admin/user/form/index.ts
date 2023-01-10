import '@@assets/styles/views/admin/user/form.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-select';
import '@material/mwc-tab';
import '@material/mwc-tab-bar';
import '@@addons/widgets/form/new/select';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { GenericGenderInfo_I, GenericGenderInfo_S } from '@@addons/interfaces/generic/gender';
import { GET_GenericGender } from '@@addons/network/generic/gender';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { GET_ClientPageAccess } from '@@addons/network/clients/users/page_access';
import { POST_ClientUser } from '@@addons/network/clients/users/post';
import { togglePswdVisibility } from '@@addons/functions/toggle_pswd_visibility';
import { CONSTANTS } from '@@addons/constants';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { QueryOptions } from 'select2';
import { ClientUsers_I } from '@@addons/interfaces/clients/users';
import { Button } from '@material/mwc-button';
import { PUT_ClientUserAccess } from '@@addons/network/clients/users/access_update';
import { PUT_ClientUser } from '@@addons/network/clients/users/put';
import { PUT_ClientUserPassword } from '@@addons/network/clients/users/put_password';
import '../access_card';
import { ClientPageAccessModel, Convert as cpamConvert } from '@@addons/interfaces/clients/users/page_access';
// import { ClientUserAccess_S } from '@@addons/interfaces/clients/users/access';
import { ClientUserPageAccessModel, Convert as cupamConvert } from '@@addons/interfaces/clients/users/page_access/user_access';
import { setAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';


@customElement("pdb-admin-user-form")
export class PdbAdminUserForm extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public edit: "true" | "false" = "false";

  @property({ type: Boolean })
  public editAccess?: boolean = false;

  @property({ type: Boolean })
  public isEditable?: boolean = false;

  @property({ type: String })
  public page_type: "mine" | "not-mine" = "mine";

  @property({ type: String })
  private registrationType: "from-members" | "new-entry" | "none" = "none";

  @property({ type: Number })
  private formId: 1 | 2 | 3 = 1;

  @property({ type: Number })
  private startSearchPage: number = 0;

  @property({ type: Number })
  private selectedBranchId: number = 0;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _genders: GenericGenderInfo_I[] = [];

  @property({ type: Array })
  private _pageAccesses: ClientPageAccessModel[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  private get _clientUserDefault(): NetworkCallResponse_I<ClientUsers_I>{
    const user: ClientUsers_I = {};
    return {data: user, message: "", success: false}
  }

  private _clientUser: NetworkCallResponse_I<ClientUsers_I> = this._clientUserDefault;

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

  @query('#mainAccountFormBtn')
  private mainAccountFormBtn: Button;

  @query('#accessPagesFormBtn')
  private accessPagesFormBtn: Button;

  @query('#passwordFormBtn')
  private passwordFormBtn: Button;

  async connectedCallback() {
    super.connectedCallback();
    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    await this.getPageAccesses();
    await this.getBranches();
    await this.getGenders();
    // await this.getMembers();

    if (this.edit == "true") {
      this.registrationType = "new-entry";
    }

    // console.log({"clientUser": this.clientUser});
    // console.log({"clientUserAccess": this.clientUserAccess});
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this.edit === "true") {
      if (this.page_type === "mine") {
        this.isEditable = true;
      } else {
        if (this.editAccess) {
          this.isEditable = true;
        } else {
          this.isEditable = false;
        }
      }
      return html`
        <div class="">
          <div class="shadow bg-white p-2 my-2">
            <div class="md:hidden block">
              <mwc-tab-bar activeIndex="0">
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="person" id="mainAccountFormBtn"
                  label="User" @click="${this.displayMainAccountFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="business_center" id="accessPagesFormBtn"
                  label="Access" @click="${this.displayAccessPagesFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="lock" id="passwordFormBtn"
                  class="!w-28 !px-1" label="Password" @click="${this.displayPasswordForm}"></mwc-tab>
              </mwc-tab-bar>
            </div>
            <div class="md:block hidden">
              <mwc-tab-bar activeIndex="0">
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="person" id="mainAccountFormBtn"
                  label="User Information" @click="${this.displayMainAccountFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="business_center" id="accessPagesFormBtn"
                  label="Access Page(s)" @click="${this.displayAccessPagesFormBtn}"></mwc-tab>
                <mwc-tab stacked isMinWidthIndicator isFadingIndicator minWidth icon="lock" id="passwordFormBtn"
                  class="!w-28 !px-1" label="Password" @click="${this.displayPasswordForm}"></mwc-tab>
              </mwc-tab-bar>
            </div>
          </div>
          <div class="shadow bg-white p-2 my-2">
            ${this.getEditForm}
          </div>
          
        </div>
      `;
    } else {
      return html`
        <div class="shadow bg-white p-2">
          <div class="p-1">
            <mwc-button class="primary" setFormMembersField label="From Member List" @click="${this.setFormMembersField}"></mwc-button>
            <mwc-button class="primary" setNewEntryField label="New Entry" @click="${this.setNewEntryField}"></mwc-button>
          </div>
          ${this.form}
        </div>
      `;
    }
  }

  private get getEditForm() {
    if (this.formId === 1) {
      return html`
        ${this.profileForm}
      `;
    } else if (this.formId === 2) {
      return html`
        ${this.pageAccessForm}
      `;
    } else {
      return html`
        ${this.passwordForm}
      `;
    }
  }

  private displayMainAccountFormBtn(e: any) {
    e.preventDefault();
    this.formId = 1;
    this.mainAccountFormBtn.setAttribute('raised', "true");
    this.accessPagesFormBtn.removeAttribute('raised');
    this.passwordFormBtn.removeAttribute('raised');
  }

  private displayAccessPagesFormBtn(e: any) {
    e.preventDefault();
    this.formId = 2;
    this.accessPagesFormBtn.setAttribute('raised', "true");
    this.mainAccountFormBtn.removeAttribute('raised');
    this.passwordFormBtn.removeAttribute('raised');
  }

  private displayPasswordForm(e: any) {
    e.preventDefault();
    this.formId = 3;
    this.passwordFormBtn.setAttribute('raised', "true");
    this.accessPagesFormBtn.removeAttribute('raised');
    this.mainAccountFormBtn.removeAttribute('raised');
    
    setTimeout(() => {
      this.firstUpdated();
    }, 500);
  }

  private setFormMembersField(e: any) {
    e.preventDefault();
    this.registrationType = "from-members";
    this.querySelectorAll('[setFormMembersField]').forEach((btn) => {
      btn.setAttribute('raised', '');
      btn.setAttribute('class', 'warning');
    });
    this.querySelectorAll('[setNewEntryField]').forEach((btn) => {
      btn.removeAttribute('raised');
      btn.setAttribute('class', 'primary');
    });
  }

  private setNewEntryField(e: any) {
    e.preventDefault();
    this.registrationType = "new-entry";
    this.querySelectorAll('[setNewEntryField]').forEach((btn) => {
      btn.setAttribute('raised', '');
      btn.setAttribute('class', 'warning');
    });
    this.querySelectorAll('[setFormMembersField]').forEach((btn) => {
      btn.removeAttribute('raised');
      btn.setAttribute('class', 'primary');
    });
  }
  
  private setSelectedBranchId(e: any) {
    e.preventDefault();
    const registrationType = this.registrationType;
    this.registrationType = "none";
    this.querySelectorAll('[setSelectedBranchId]').forEach((selectField) => {
      // @ts-ignore
      this.selectedBranchId = selectField.value;
      // console.log({"this.selectedBranchId": this.selectedBranchId});
    });
    this.registrationType = registrationType;
  }

  private get profileForm() {
    
    let clientId = 0;
    if (this._activeBranchId !== null) {
      clientId = this._activeBranchId[0].accountId;
    }

    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Update User Profile!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.branchField}

                  ${this.newEntryFields}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${clientId}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${this.registrationType === "new-entry"? false: true}"/>
                    <div class="form-input-container">
                      <mwc-button label="Update User Profile" raised class="button" @click="${this.submitForm}">
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
    `;
  }

  private get pageAccessForm() {    
    let clientId = 0;
    if (this._activeBranchId !== null) {
      clientId = this._activeBranchId[0].accountId;
    }

    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Edit User Page Access!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.accessFieldTickBox}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${clientId}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${this.registrationType === "new-entry"? false: true}"/>
                    <div class="form-input-container">
                      <mwc-button label="Edit User Page Access" raised class="button" @click="${this.submitForm}">
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
    `;
  }

  private get passwordForm() {
    
    let clientId = 0;
    if (this._activeBranchId !== null) {
      clientId = this._activeBranchId[0].accountId;
    }

    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User Password</h1>
                  <h3 class="h3">Set New Password!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.passwordFields}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${clientId}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${this.registrationType === "new-entry"? false: true}"/>
                    <div class="form-input-container">
                      <mwc-button label="Set New Password" raised class="button" @click="${this.submitForm}">
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
    `;
  }

  private get form() {
    
    let clientId = 0;
    if (this._activeBranchId !== null) {
      clientId = this._activeBranchId[0].accountId;
    }

    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Admin User</h1>
                  <h3 class="h3">Add Admin User!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-user" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  ${this.branchField}

                  ${this.registrationType === "new-entry"? html`${this.newEntryFields}`: nothing}
                  ${this.registrationType === "from-members"? html`${this.fromMembersField}`: nothing}
                  
                  <!-- ${this.accessFieldSelectBox} -->
                  
                  <div class="col-md-12 col-lg-12 my-2"><hr/></div>

                  ${this.passwordFields}

                  <div class="col-md-12 col-lg-12 my-2"><hr/></div>
                  ${this.accessFieldTickBox}
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${clientId}"/>
                    <input type="hidden" name="fromMember" id="fromMember" value="${this.registrationType === "new-entry"? false: true}"/>
                    <div class="form-input-container">
                      <mwc-button label="Add Admin User" raised class="button" @click="${this.submitForm}">
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
    `;
  }

  private get branchField() {
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }
    const clientUser = this.clientUser,
      _data = clientUser.data,
      DATA = Array.isArray(_data)? _data[0]: _data,
      SUCCESS = clientUser.success;
    return html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Branch</h4>
        <mwc-select name="branchId" class="w-full" id="branchId" setSelectedBranchId label="Select Branch" @change="${this.setSelectedBranchId}" outlined required>
          ${userBranch === 1 ? html`
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((value) => {
              if (SUCCESS) {
                if (DATA.branchId === value.id) {
                  return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                } else {
                  return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
                }
              } else {
                return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
              }
            })}
          `: html`
            ${this._branches.map((value) => {
              if (value.id === userBranch) {
                return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
              }
            })}
          `}
        </mwc-select>
      </div>
    `;
  }

  private get passwordFields() {
    return html`
      ${this.edit === "true" ? html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Old Password</h4> 
        <mwc-textfield name="old_password" id="old_password" label="Enter Old Password" outlined type="password" required>
        </mwc-textfield>
      </div>`: nothing}
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Password</h4> 
        <mwc-textfield name="password" id="password" label="Enter Password" outlined type="password" required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Password Confirmation</h4> 
        <mwc-textfield name="confirm_password" id="confirm_password" label="Enter Password Confirmation" outlined type="password"
          required>
        </mwc-textfield>
      </div>
    `;
  }

  private get fromMembersField() {
    let token = "";
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        token = this._userLoginInfo[0].token;
      }
    }
    let ajaxHeader: {Authorization?: string} = {};
    ajaxHeader.Authorization = "Token " + token;
    
    return html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Member</h4> 
        <select-input class="w-100" id="member" name="member" label="Select Member"
          .ajaxFetchProcessResponse="${this.processClientUserSearch}" startSearchPage="${this.startSearchPage}"
          .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams}"
          ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search?"></select-input>
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

  private get accessFieldSelectBox() {
    const pageAccesses = this.pageAccesses;
    return html`
      <div class="col-md-6 col-lg-8">
        <h4 class="font-semibold my-2">Select User Access</h4> 
        <select-input name="access" multiple class="w-full" id="access"
          label="Select User Access" .options="${pageAccesses}" outlined required>
        </select-input>
      </div>
    `;    
  }

  private get accessFieldTickBox() {
    const pageAccesses = this.pageAccesses;
    // console.log({pageAccesses});
    // console.log({"this.clientUserAccess": this.clientUserAccess});
    const clientUserAccess = this.clientUserAccess,
      _data = clientUserAccess.data,
      PAGES = Array.isArray(_data)? _data: [_data],
      SUCCESS = clientUserAccess.success;
      
    let accessIDs: Array<ClientUserPageAccessModel> = [];
    if (SUCCESS) {
      PAGES.forEach((PAGE) => {
        PAGE = cupamConvert.toClientUserPageAccessModel(JSON.stringify(PAGE));
        // console.log({ PAGE });
      
        if (!accessIDs.includes(PAGE)) {
          accessIDs.push(PAGE);
        }
      });
    }
    // console.log({accessIDs});

    // console.log({"this._pageAccesses": this._pageAccesses});
    
    return html`
      <div class="col-md-12 col-lg-12">
        <client-user-access-card ?isActive="${true}" .available_access="${this._pageAccesses}" .user_access="${accessIDs}"></client-user-access-card>
      </div>
    `;
    
    // return html`
    //   <div class="col-md-6 col-lg-8">
    //     <h4 class="font-semibold my-2">Select User Access</h4> 
    //     <input type="hidden" id="${this.edit === "true"? 'pageId': 'access'}" />
        
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
    //               let access_id: string = "access_" + i,
    //                 access_name = "access[]";
    //               if (this.edit === "true") {
    //                 access_id = "pageId_" + i,
    //                 access_name = "pageId[]";
    //               }
    //               let checked = false;
    //               if (SUCCESS) {
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
    //                       ${checked? html`
    //                         <input id="${access_id}" name="${access_name}" type="checkbox" value="${pageAccess.id}" checked
    //                           class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
    //                       `:html`
    //                         <input id="${access_id}" name="${access_name}" type="checkbox" value="${pageAccess.id}"
    //                           class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
    //                       `
    //                       }
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

  private get newEntryFields() {
    const clientUser = this.clientUser,
      _data = clientUser.data,
      DATA = Array.isArray(_data)? _data[0]: _data,
      SUCCESS = clientUser.success;
    
    let birthDate = "";
    if (SUCCESS) {
      const _birthDate = new Date(DATA.dateOfBirth),
        __TO_DATE = _birthDate.toLocaleDateString('en-US', {
          day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
          // @ts-ignore
        }).split('/');
      birthDate = [__TO_DATE[2], __TO_DATE[0], __TO_DATE[1]].join('-');
    }
    return html`
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Firstname</h4> 
        <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" 
          value="${SUCCESS? DATA.firstname: ''}" label="Enter Firstname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Surname</h4> 
        <mwc-textfield name="surname" type="text" class="w-full" id="surname" 
          value="${SUCCESS? DATA.surname: ''}" label="Enter Surname" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Gender</h4>
        <mwc-select name="gender" class="w-full" id="gender" label="Select Gender" outlined required>
          <mwc-list-item value="0">Select Gender</mwc-list-item>
          ${this._genders.map((value) => {
            if (SUCCESS) {
              if (DATA.gender === value.id) {
                return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
              } else {
                return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
              }
            } else {
              return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
            }
          })}
        </mwc-select>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Select Date of Birth</h4> 
        <mwc-textfield name="dateOfBirth" type="date" class="w-full" id="dateOfBirth"
          label="Select Date of Birth" value="${birthDate}" outlined required>
        </mwc-textfield>
      </div>
      <!-- <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Add Profile Picture</h4> 
        <file-input id="profilePicture" name="profilePicture" hasLabel label="Add Profile Picture"></file-input>
      </div> -->
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Phone Number</h4> 
        <mwc-textfield name="phone" multiple type="tel" class="w-full" id="phone"
          label="Enter Phone Number" value="${SUCCESS? DATA.phone: ''}" outlined required>
        </mwc-textfield>
      </div>
      <div class="col-md-6 col-lg-4">
        <h4 class="font-semibold my-2">Enter Email Address</h4> 
        <mwc-textfield name="email" multiple type="email" class="w-full" id="email"
          label="Enter Email Address" value="${SUCCESS? DATA.email: ''}" outlined required>
        </mwc-textfield>
      </div>
    `;
  }
  // ('id', '-- firstname --', '-- surname --', '-- gender --', '-- profilePicture --',
  //   '-- dateOfBirth --', '-- phone --', '-- email --', 'role', 'accountId', '-- branchId --',
  //   'access'
  // )
  firstUpdated() {
    togglePswdVisibility();
    togglePswdVisibility("mwc-textfield");
  }

  private processClientUserSearch(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="member"]');
    // console.log({ data, params, RESULTS, SELECTOR });

    let processedData: { id: number; text: string; }[] = [];
    if (TOTAL > 0) {
      var _data = RESULTS;
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const id = item['id'];
        const fullName = item['firstname'] + " " + item['surname'];
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({processedData});
    


    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private get ajaxFetchUrlParams(): SelectInputProcessedAjaxUrlParam_I[] {

    // console.log({"this.selectedBranchId--": this.selectedBranchId});
    return [
      { param: "branchId", value: String(this.selectedBranchId) }
    ]
  }

  private async getBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranches_I>();
    let __branches: ClientBranches_I[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: ClientBranches_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __branches = DATA;
      }
    }
    const new_data: Array<ClientBranches_I> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  private async getGenders() {
    const _networkResponse = await GET_GenericGender<GenericGenderInfo_I>();
    // console.log({_networkResponse});
    
    let __genders: GenericGenderInfo_I[] = [];

    if (_networkResponse === null) {
      __genders.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GenericGenderInfo_I[] = data.map(value => {
          return GenericGenderInfo_S(value)
        });
        // console.log({DATA});
        __genders = DATA;
      }
    }
    const new_data: Array<GenericGenderInfo_I> = [];
    new_data.push(...this._genders, ...__genders);
    this._genders = new_data;
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();

    if (this.edit === "true") {
      if (this.isEditable) {
        const clientUser = this.clientUser,
          _data = clientUser.data,
          DATA = Array.isArray(_data) ? _data[0] : _data,
          SUCCESS = clientUser.success;
        if (SUCCESS) {
          if (this.formId === 1) {
            await PUT_ClientUser(DATA.id)
          } else if (this.formId === 2) {
            await PUT_ClientUserAccess(DATA.id);
            await setAppSettingsExtraSettings(true)
          } else {
            await PUT_ClientUserPassword(DATA.id);
          }
        }
      }
    } else {
      await POST_ClientUser();
    }
  }

  createRenderRoot() {
    return this;
  }
}
