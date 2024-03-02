import '@@assets/styles/views/widget/simple-table/main.scss';
import '@@assets/styles/views/attendance/setup/form.scss';
import '@@views/no_access/account_expired';
import '@@views/no_access/no_page_entry';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import '@@addons/widgets/form/new/select';
import './form/multiple';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { POST_AdditionalRegistrationQuestion } from '@@addons/network/additional_registration/assign_multiple';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import { GET_AdditionalRegistrationQuestionType } from '@@addons/network/additional_registration/types';
import { AdditionalRegistrationQuestionTypeModel } from '@@addons/interfaces/additional_registration'; 


@customElement("additional-registration-creator-form")
export class AdditionalRegistrationCreatorForm extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  @property({ type: Number })
  private selectedBranchId: number = 0;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  @property({ type: Number })
  private userBranch?: number;

  @property({ type: Array })
  public _arQuestionType: Array<AdditionalRegistrationQuestionTypeModel> = [];

  async connectedCallback() {
    super.connectedCallback();
    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null) ? null : [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];

    this.urlQueryParams = urlQueryParams();
    await this.getBranches();
    await this.getMemberCategories();
    await this.getAdditionalRegistrationQuestionType();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    this.userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        this.userBranch = this._userLoginInfo[0].user.branchId;
      }
    }
    return html`
      <div class="shadow bg-white p-2 my-2">
        ${this.form}
      </div>
    `;
  }

  private get form() {
    // <mwc-icon-button icon="library_add" class="success -mt-1 mr-2" @click="${this.addDayField}">
    // </mwc-icon-button>
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Additional Registration Question(s)</h1>
                  <h3 class="h3">Create New Additional Registration Question(s)!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="add-schedule-member-day">
                <div class="p-0 m-0" show-dayField="all">
                  <question-multiple-inputs-component .branches="${this._branches}" .memberCategories="${this._memberCategories}" 
                    userBranch="${this.userBranch}" .arQuestionType="${this._arQuestionType}">
                  </question-multiple-inputs-component>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <div class="form-input-container">
                      <mwc-button label="Add Additional Registration Question(s)" raised class="button" @click="${this.submitForm}">
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

  firstUpdated() {

  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    // if (this._memberDays.count > 0) {
    //   await PUT_AttendanceUpdateScheduleDayMultiple(this.meetingMemberId);
    // } else {
    //   await POST_AttendanceAddScheduleDayMultiple();
    // }
    // await POST_AttendanceAddScheduleDayMultiple();
    document.querySelectorAll("question-multiple-inputs-component").forEach(async selector => {
      console.log({ "selector--selector": selector });

      // @ts-ignore
      const multipleQuestionObjects = selector.multipleQuestionObjects[0].items;
      console.log({ "selector--multipleQuestionObjects": multipleQuestionObjects });
      await POST_AdditionalRegistrationQuestion(multipleQuestionObjects);

    });
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

  private async getMemberCategories() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategories_I>();
    let __memberCategories: GroupingsMemberCategories_I[] = [];

    if (_networkResponse === null) {
      __memberCategories.push({ id: 0, category: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsMemberCategories_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __memberCategories = DATA;
      }
    }
    const new_data: Array<GroupingsMemberCategories_I> = [];
    new_data.push(...this._memberCategories, ...__memberCategories);
    this._memberCategories = new_data;
  }

    private async getAdditionalRegistrationQuestionType() {
      const _networkResponse = await GET_AdditionalRegistrationQuestionType<AdditionalRegistrationQuestionTypeModel>();
      let __arQuestionType: AdditionalRegistrationQuestionTypeModel[] = [];
  
      if (_networkResponse === null) {
        __arQuestionType.push({ id: 0, name: "**NOT FOUND**" });
      } else {
        if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
          const DATA: AdditionalRegistrationQuestionTypeModel[] = _networkResponse.response.data;
          // console.log({DATA});
          __arQuestionType = DATA;
        }
      }
      const new_data: Array<AdditionalRegistrationQuestionTypeModel> = [];
      new_data.push(...this._arQuestionType, ...__arQuestionType);
      this._arQuestionType = new_data;
    }

  createRenderRoot() {
    return this;
  }
}
