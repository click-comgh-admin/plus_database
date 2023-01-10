import "@@assets/styles/views/admin/register/main.scss";
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-textfield';
import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import { getUserLoginInfoCookie } from "@@addons/functions/login";
import { GET_ClientBranches } from "@@addons/network/clients/branches";
import { base64Decode, base64Encode } from "@@addons/functions/base64";
import { urlQueryParamsGet } from "@@addons/functions/url_query_params";
import { UserLoginInfo_I } from "@@addons/interfaces/network_calls/login";
import { getActiveBranchIdCookie } from "@@addons/functions/views/home/branch";
import { ClientBranches_I, ClientBranchShort_I } from "@@addons/interfaces/clients/branches";
import { GET_AttendanceAbsentLeaveStatus } from "@@addons/network/attendance/absent_leave/status/get";
import { PATCH_AttendanceAbsentLeaveStatus } from "@@addons/network/attendance/absent_leave/status/patch";
import { AttendanceAbsentLeaveStatusModel, Convert as aalsmConvert } from "@@addons/interfaces/attendance/absent_leave/status";
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { AppSetup } from "@@addons/functions/app_settings";
import { getAppSettingsExtraSettings } from "@@addons/functions/app_settings/extra_settings";
import { AppSettingsExtraUserAccess } from "@@addons/functions/app_settings/extra_settings/user_access";
import { PAGE__IDS } from "@@views/attendance/page__id";


@customElement("attendance-absent-leave-status-edit")
export class AttendanceAbsentLeaveStatusEdit extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private accountType: number = 0;

  @property({ type: Number })
  private selectedBranch: number = 1;

  @property({ type: Number })
  private statusId?: number = 0;

  @property({ type: String })
  private statusIdEnc?: string = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _statuses: AttendanceAbsentLeaveStatusModel[] = [];

  @property({ type: Boolean })
  private _hasSetup: boolean = false;

  async connectedCallback() {
    super.connectedCallback();
    AppSetup().then(() => this._hasSetup = true);

    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        this.accountType = 1;
        this.selectedBranch = this._userLoginInfo[0].user.branchId;
        // console.log({ "this.selectedBranch": this.selectedBranch });
        setTimeout(() => {
          this.accountType = 0
          // console.log({ "this.accountType-2": this.accountType });
        }, 1000);
        // console.log({ "this.accountType-1": this.accountType });
        
      }
    }

    this.getStatusId();
    this.getStatus(this.statusId);
    await this.getBranches();
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
      if (!AppSettingsExtraUserAccess({pageId: PAGE__IDS.absent_leave_status, viewType: "Edit"}, false)) {
        return html`<no-page-entry-component></no-page-entry-component>`;
      }
    }

    if (this._statuses.length < 1) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._statuses === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Group </span>: Not Found</h4>
          </div>
        </div>
      `;
    }

    const STATUS = this._statuses[0];
    // console.log({STATUS});
    
    
    return html`
      <div class="shadow bg-white p-2">
        <div class="form-container flex justify-center">
          <div class="app-container- !px-0">
            <div class="app-container--row !px-0">
              <div class="app-container--col-md-12">
                <header class="header warning app-container--col-md-12">
                  <label for="" class="label">
                    <mwc-icon class="icon">format_strikethrough</mwc-icon>
                    <h1 class="h1 !text-red-400">Change Status</h1>
                    <h3 class="h3">Update Status!</h3>
                  </label>
                </header>
                <form method="post" action="#" class="form" make-general-posts="attendance-absent-leave-status" enctype="multipart/form-data">
                  <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Select Branch</h4>
                      <mwc-select class="w-full" setSelectedBranchId label="Select Branch"
                        name="_branchId_" id="_branchId_"  outlined required>
                        <mwc-list-item value="0">Select Branch</mwc-list-item>
                        ${this._branches.map((value) => {
                          if (value.id === STATUS.branchID) {
                            return html`<mwc-list-item value="${value.id}" selected>${value.name}</mwc-list-item>`;
                          }
                        })}
                      </mwc-select>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h4 class="font-semibold my-2">Status</h4>
                      <mwc-textfield name="status" id="status" label="Enter Status"
                        outlined required value="${STATUS.status}">
                      </mwc-textfield>
                    </div>
                  </div>
        
                  <div class="form-input-container">
                    <mwc-button label="Update" raised class="w-full" @click="${this.submitForm}">
                    </mwc-button>
                  </div>
                
                  <div class="flex form-input-container items-center text-center">
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                    <label class="block font-medium text-sm text-gray-600 w-full">
                      ...
                    </label>
                    <hr class="border-gray-300 border-1 w-full rounded-md">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() { }

  private getStatusId() {
    let statusId = urlQueryParamsGet('view-status');
    // console.log({ statusId });
    let _statusId = statusId !== null ? base64Decode(statusId) : null;
    this.statusId = Number.isNaN(_statusId) ? null : Number(_statusId);
    // console.log({ "this.statusId": this.statusId });
    this.statusIdEnc = base64Encode(String(this.statusId), true);
  }

  private async getStatus(ID: number) {
    const _networkResponse = await GET_AttendanceAbsentLeaveStatus<AttendanceAbsentLeaveStatusModel>(ID);
    if (_networkResponse !== null) {
      if (_networkResponse.response.success && 'status' in _networkResponse.response.data) {
        const status = aalsmConvert.toAttendanceAbsentLeaveStatusModel(JSON.stringify(_networkResponse.response.data))
        this._statuses = [status];
        return;
      }
    }
    this._statuses = null;
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    await PATCH_AttendanceAbsentLeaveStatus(this.statusId);
  }

  createRenderRoot() {
    return this;
  }
}
