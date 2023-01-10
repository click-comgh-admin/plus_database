import { MembershipMixedUserModel } from '@@addons/interfaces/members/user/mixed';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@addons/widgets/alert';
import '@material/mwc-circular-progress';
import { getDate } from '@@addons/functions/date_time/date';


@customElement("pdb-membership-member-view-organization")
export class PdbMembershipMemberViewOrganization extends LitElement {
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
          ${this.leftSide(member)} ${this.rightSide(member)}
        </div>
        ${this.contactPerson(member)}
        ${this.businessRegistered(member)}
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
                    <p>${member.organizationName}</p>
                  </div>
                </td>
              </tr>
              <tr class="mdc-data-table__row">
                <th class="mdc-data-table__cell" scope="row">
                  <div class="flex items-center">
                    <p>Organization ID</p>
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
                    <p>Organization Type</p>
                  </div>
                </th>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                  <div class="">
                    <p>${member.organizationType.type}</p>
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
                    <p><a href="tel:${member.organizationPhone}" type="tel">${member.organizationPhone}</a></p>
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
                    <p><a href="mailto:${member.organizationEmail}" type="email">${member.organizationEmail}</a></p>
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
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  private contactPerson(member: MembershipMixedUserModel) {
    if (member.businessRegistered) {
      return html`
        <div class="p-1 shadow-md border rounded-sm my-4">
          <h4 class="uppercase text-base font-bold flex justify-between pl-3">Contact Person</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 my-1">
            <div class="w-full">
              <div class="p-3 border-b-2">
                <h4 class="uppercase text-base font-bold">
                  ${member.contactPersonName} Photo
                </h4>
              </div>
              <div class="p-3 flex flex-col items-center">
                <user-profile-photo class="w-32 h-32 mr-1" rounded 'click-to-open'="" type="member"
                  url="${member.contactPersonPhoto}" size="32">
                </user-profile-photo>
              </div>
              <div class="p-1 border-t-2 flex justify-end">
              </div>
            </div>
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
                            <p>Name</p>
                          </div>
                        </th>
                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                          <div class="">
                            <p>${member.contactPersonName}</p>
                          </div>
                        </td>
                      </tr>
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <p>Gender</p>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <div class="">
                          <p>${(member.contactPersonGender === 1) ? "Male" : ((member.contactPersonGender === 2) ? "Female" : '-')}</p>
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
                            <p><a href="tel:${member.contactPersonPhone}" type="tel">${member.contactPersonPhone}</a></p>
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
                            <p><a href="mailto:${member.contactPersonEmail}" type="email">${member.contactPersonEmail}</a></p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      return nothing;
    }
  }

  private businessRegistered(member: MembershipMixedUserModel) {
    if (member.businessRegistered) {
      return html`
        <div class="my-1">
          <h4 class="uppercase text-base font-bold flex justify-between">Registered Business</h4>
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
                        <p>Date of Incorporation</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        <p>${getDate(member.dateOfIncorporation)}</p>
                      </div>
                    </td>
                  </tr>
                  <tr class="mdc-data-table__row">
                    <th class="mdc-data-table__cell" scope="row">
                      <div class="flex items-center">
                        <p>Certificates</p>
                      </div>
                    </th>
                    <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                      <div class="">
                        ${member.certificates?.map(certificate => {
                          console.log({"certificate-certificate": certificate});
                          
                          return html`
                            <p>
                              <a href="${certificate.attachment.attachment}" type="download">${certificate.attachment.filename}</a>
                            </p>
                          `;
                        })}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    } else {
      return nothing;
    }
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
