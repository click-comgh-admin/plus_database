import { MembershipMixedUserModel } from '@@addons/interfaces/members/user/mixed';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@addons/widgets/alert';
import '@material/mwc-circular-progress';
import { getDate } from '@@addons/functions/date_time/date';


@customElement("pdb-membership-member-individual")
export class PdbMembershipMemberIndividual extends LitElement {
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
        <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 my-1">
          ${this.leftSide(member)}${this.rightSide(member)}
        </div>
      `;
    });
  }

  private leftSide(member: MembershipMixedUserModel) {
    return html`
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
                    <p>${member.firstname} ${member.middlename ?? ""} ${member.surname}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Member ID</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${member.identification}</p>
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
                    <p>${(member.gender === 1) ? "Male" : ((member.gender === 2) ? "Female" : '-')}</p>
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
                    <p>${getDate(member.dateOfBirth)}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Community</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${member.community}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  private rightSide(member: MembershipMixedUserModel) {
    return html`
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
                    <p><a href="tel:${member.phone}" type="tel">${member.phone}</a></p>
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
                    <p><a href="mailto:${member.email}" type="email">${member.email}</a></p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Reference ID</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${member.referenceId}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>C.V</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p><a href="${member.profileResume}">VIEW FILE</a></p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>I.D</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p><a href="${member.profileIdentification}">VIEW FILE</a></p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
