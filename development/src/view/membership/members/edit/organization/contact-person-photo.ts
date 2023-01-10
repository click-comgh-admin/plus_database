import '@@assets/styles/views/admin/user/form.scss';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import '../pages/photo';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import { MembershipMixedUserModel, } from '@@addons/interfaces/members/user/mixed';
import '@@addons/widgets/alert';
import '../../../../no_access/no_page_entry';
import '../../../../no_access/account_expired';
import { PATCH_MembershipOrganizationUser } from '@@addons/network/members/membership/users/organization/patch';


@customElement("pdb-membership-member-organization-update-photo")
export class PdbMembershipMemberOrganizationUpdatePhoto extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public memberId?: number = 0;

  @property({ type: Array })
  public memberInfo: MembershipMixedUserModel[] = null;

  async connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return this.memberInfo.map(member => {
      return html`
        <div class="w-full">
          <div class="flex justify-center my-1">
            <div class="form-container flex justify-center">
              <div class="app-container- !px-0">
                <div class="app-container--row !px-0">
                  <div class="app-container--col-md-12">
                    <header
                      class="header warning app-container--col-md-12 flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mb-2">
                      <label for="" class="label">
                        <mwc-icon class="icon">format_strikethrough</mwc-icon>
                        <h1 class="h1 !text-red-400">Organization</h1>
                        <h3 class="h3">Update Contact Person Photo!</h3>
                      </label>
                    </header>
                    <form method="post" action="#" class="form !my-1" make-general-posts="members-user-organization"
                      enctype="multipart/form-data">
                      <pdb-membership-update-view-photo headTitle="${member.contactPersonName}'s Photo"
                        inputId="contactPersonPhoto" inputName="contactPersonPhoto" inputLabel="Update Contact Person Photo"
                        ?inputRequired="${true}" currentImage="${member.contactPersonPhoto}">
                      </pdb-membership-update-view-photo>
                      <div
                        class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col my-2 p-1">
                        <mwc-button class="primary" raised type="submit" label="Submit" @click="${this.submitForm}">
                        </mwc-button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }

  firstUpdated() { }

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    console.log({ e });
    await PATCH_MembershipOrganizationUser(this.memberId, "Update Contact Person Photo")
  }

  createRenderRoot() {
    return this;
  }
}
