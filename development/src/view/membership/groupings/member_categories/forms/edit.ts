import '@@assets/styles/views/widget/simple-table/main.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-icon-button';
import '@material/mwc-circular-progress';
import { urlQueryParams, urlQueryParamsGet } from '@@addons/functions/url_query_params';
import { NetworkCallResponse_I } from '@@addons/interfaces/network_calls/response';
import { PUT_MemberGroupingsMemberCategory } from '@@addons/network/members/groupings/member_categories/put';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';


@customElement("membership-groupings-member-categories-edit-member-category")
export class MembershipGroupingsMemberCategoriesEditMemberCategory extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public CLIENT_ID: number = 0;

  @property({ type: Array })
  public _data?: Array<string> = [];

  @property({ type: Object })
  private urlQueryParams?: { [k: string]: string; } = undefined;

  private __memberCategory: NetworkCallResponse_I<GroupingsMemberCategories_I> = null;

  public set _memberCategory(value: NetworkCallResponse_I<GroupingsMemberCategories_I>) {
    this.__memberCategory = value;
    this.requestUpdate();
  }

  public get _memberCategory(): NetworkCallResponse_I<GroupingsMemberCategories_I> {
    return this.__memberCategory;
  }

  @property({ type: Number })
  private memberCategoryId?: number = 0;

  async connectedCallback() {
    super.connectedCallback();
    this.urlQueryParams = urlQueryParams();
    this.getMemberCategoryId();
    
    await this.getClientMemberCategory();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this._memberCategory === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    } else if (this._memberCategory === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Member Category</span>: undefined error</h4>
          </div>
        </div>
      `;
    } else {
      return html`
        ${this.form}
      `;
    }
  }

  private get form(): TemplateResult {
    return html`
      <div class="form-container">
        <div class=" !px-0">
          <div class="-row !px-0">
            <div class="-col-md-12">
              <header class="header warning -col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">Groupings: Member Category</h1>
                  <h3 class="h3">Edit Member Category</h3>
                </label>
              </header>
              <form method="post" action="#" class="form mt-0" make-general-posts="groupings-member-category">
                <div class="p-0 m-0" show-attachmentField="all">
                  ${this.memberCategoryField}
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-12">
                    <input type="hidden" name="clientId" id="clientId" value="${this.CLIENT_ID}"/>
                    <div class="form-input-container">

                      ${this.memberCategoryId === 1 ? html`` : html`
                        <mwc-button label="Update" raised class="button" @click="${this.submitForm}">
                        </mwc-button>
                      `}
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

  private get memberCategoryField() {
    let memberCategory: GroupingsMemberCategories_I = null;
    // console.log({"this._memberCategory": this._memberCategory})
    if (this._memberCategory !== null) {
      if (this._memberCategory.data !== undefined) {
        if (Array.isArray(this._memberCategory.data)) {
          memberCategory = this._memberCategory.data.length > 0 ? this._memberCategory.data[0] : {id: undefined, category: ""};
        } else {
          memberCategory = this._memberCategory.data;
        }
      } else {
        memberCategory = {id: undefined, category: ""};
      }
    } else {
      memberCategory = {id: undefined, category: ""};
    }
    return html`
      <div class="container my-4">
        <div class="row justify-center">
          <div class="col-md-6 col-lg-6">
            <h4 class="font-semibold my-2">Enter Member Category</h4>
            <mwc-textfield name="category" type="text" class="w-full" id="category" value="${memberCategory.id === undefined ? "": memberCategory.category}" label="Enter memberCategory Name" outlined required>
            </mwc-textfield>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    
  }

  private getMemberCategoryId() {
    let memberCategoryId = urlQueryParamsGet('member-category-id');
    let _memberCategoryId = memberCategoryId !== null ? Number(memberCategoryId) : null;
    this.memberCategoryId = Number.isNaN(_memberCategoryId) ? null : _memberCategoryId;
    // console.log({ "this.urlQueryParams": this.urlQueryParams, "this.memberCategoryId": this.memberCategoryId });
  }

  private async getClientMemberCategory() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategories_I>(this.memberCategoryId);

    if (_networkResponse === null) {
      this._memberCategory = undefined;
    } else {
      this._memberCategory = _networkResponse.response;
    }
  }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    await PUT_MemberGroupingsMemberCategory(this.memberCategoryId);
  }

  createRenderRoot() {
    return this;
  }
}
