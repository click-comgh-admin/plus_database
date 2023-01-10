import { MembershipMixedUserModel } from '@@addons/interfaces/members/user/mixed';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@addons/widgets/alert';
import '@material/mwc-circular-progress';


@customElement("pdb-membership-member-branch-category")
export class PdbMembershipMemberBranchCategory extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  private memberInfo: MembershipMixedUserModel[] = null;

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
    // console.log({"this.memberInfo": this.memberInfo});
    
    if (this.memberInfo === null) return this.pageLoading;
    if (this.memberInfo.length < 1) return this.pageError;
    return this.memberInfo.map(member => {
      // console.log({"member.member": member});
      return html`
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
                        <p>${member.branchInfo.name}</p>
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
                        <p>${member.categoryInfo.category}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

  private get pageError() {
    const header = html`<h4 class="text-gray-600">No Data Found!</h4>`,
      content = nothing;
    return html`
      <div class="col-md-12">
        <alert-card info .header="${header}" .content="${content}" extra_class="!max-w-full"></alert-card>
      </div>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
