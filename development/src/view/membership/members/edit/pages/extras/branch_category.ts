import '@material/mwc-circular-progress';
import '@material/mwc-button';
import '@material/mwc-select';
import '@@addons/widgets/alert';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MembershipMixedUserModel } from '@@addons/interfaces/members/user/mixed';
import { PATCH_MembershipOrganizationUser } from '@@addons/network/members/membership/users/organization/patch';
import { GroupingsMemberCategoryModel } from '@@addons/interfaces/members/groupings/member_categories/model';
import { ClientBranchModel } from '@@addons/interfaces/clients/branches/model';
import { PATCH_MembershipUser } from '@@addons/network/members/membership/users/patch';


@customElement("pdb-membership-update-view-branch-category")
export class PdbMembershipUpdateViewBranchCategory extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public memberId?: number;

  @property({ type: String })
  public updateType?: "member" | "organization";

  @property({ type: Array })
  public memberInfo: MembershipMixedUserModel[] = null;

  @property({ type: Array })
  public categories: GroupingsMemberCategoryModel[] = [];

  @property({ type: Array })
  public branches: ClientBranchModel[] = [];

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    console.log({"this.branches": this.branches});
    console.log({"this.categories": this.categories});
    

    if (this.memberInfo === null) return this.pageLoading;
    if (this.memberInfo.length < 1) this.memberInfo.push(null);
    return this.memberInfo.map(member => {
      return html`
      <form method="post" action="#" class="form !my-1" make-general-posts="--awaiting-type--" enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Account Branch</h4>
              <mwc-select name="branchId" id="branchId" label="Select Account Branch" outlined required>
                ${this.branches.map((item) => {
                  // console.log({item});
                  if (member.branchId === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                })}
              </mwc-select>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Account Category</h4>
              <mwc-select name="memberType" id="memberType" label="Select Account Category" outlined required>
                ${this.categories.map((item) => {
                  // console.log({item});
                  if (member.memberType === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.category}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.category}</mwc-list-item>`;
                })}
              </mwc-select>
            </div>
            <input type="hidden" name="memberId" id="memberId" value="${this.memberId}" />
          </div>
        </div>
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
          <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
          </mwc-button>
        </div>
      </form>
     `;
    });
  }

  private get pageLoading() {
    return html`
    <div class="main-container">
      <div class="flex justify-center">
        <mwc-circular-progress indeterminate></mwc-circular-progress>
      </div>
    </div>
   `;
  }

  // private get pageError() {
  //   const header = html`<h4 class="text-gray-600">No Data Found!</h4>`,
  //     content = nothing;
  //   return html`
  //   <div class="col-md-12">
  //     <alert-card info .header="${header}" .content="${content}" extra_class="!max-w-full"></alert-card>
  //   </div>
  //  `;
  // }

  firstUpdated() { }

  async submitForm(e: PointerEvent) {
    if (this.updateType === "member") {
      const _handleMultitpleSubmitFormSelectors = this.handleMultitpleSubmitFormSelectors();
      _handleMultitpleSubmitFormSelectors.handle("members-user");

      await PATCH_MembershipUser(this.memberId);
      _handleMultitpleSubmitFormSelectors.reset("members-user");
    } else {
      const _handleMultitpleSubmitFormSelectors = this.handleMultitpleSubmitFormSelectors();
      _handleMultitpleSubmitFormSelectors.handle("members-user-organization");

      await PATCH_MembershipOrganizationUser(this.memberId);
      _handleMultitpleSubmitFormSelectors.reset("members-user-organization");
    }
  }

  handleMultitpleSubmitFormSelectors() {
    type submit_type = "members-user" | "members-user-organization";
    return {
      handle: (submitType: submit_type) => {
        // console.log({submitType});

        document.querySelectorAll('[make-general-posts="--awaiting-type--"]').forEach(form => {
          if (form.hasAttribute("make-general-posts")) {
            // console.log({formSubmitType});
            form.setAttribute("make-general-posts", submitType)
          }
        });
      },
      reset: (submitType: submit_type) => {
        document.querySelectorAll(`[make-general-posts="${submitType}"]`).forEach(form => {
          form.setAttribute("make-general-posts", "--awaiting-type--")
        });
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
