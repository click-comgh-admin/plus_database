import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@addons/widgets/alert';
import '@material/mwc-circular-progress';
import { GroupMemberModel } from '@@addons/interfaces/members/groupings/group/models/member';


@customElement("pdb-membership-member-groups")
export class PdbMembershipMemberGroups extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  private memberGroups: GroupMemberModel[] = null;

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
    console.log({"this.memberGroups": this.memberGroups});
    
    if (this.memberGroups === null) return this.pageLoading;
    if (this.memberGroups.length < 1) return this.pageError;

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
                ${this.memberGroups.map((groupMember, i) => {
                  return html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <p>${groupMember.groupId.group}</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <input disabled type="checkbox" value="${groupMember.groupId.id}" checked
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
