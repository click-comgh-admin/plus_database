import '@material/mwc-circular-progress';
import '@material/mwc-button';
import '@@addons/widgets/form/new/switch';
import { UserContactPrivacyModel } from '@@addons/interfaces/members/user/contact/privacy';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@addons/widgets/alert';
import { PATCH_UserContactPrivacy } from '@@addons/network/members/contact/privacy/patch';
import { POST_UserContactPrivacy } from '@@addons/network/members/contact/privacy/post';


@customElement("pdb-membership-update-view-contact-privacy")
export class PdbMembershipUpdateViewContactPrivacy extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public memberId?: number;

  @property({ type: Array })
  private memberContactPrivacy: UserContactPrivacyModel[] = null;

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

    if (this.memberContactPrivacy === null) return this.pageLoading;
    if (this.memberContactPrivacy.length < 1) this.memberContactPrivacy.push(null);
    return this.memberContactPrivacy.map(contact => {   
      return html`
      <form method="post" action="#" class="form !my-1" make-general-posts="members-user-contact-info-privacy" enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Phone Number</h4>
              <switch-input name="phone" class="w-full" id="phone" ?selected="${contact?.phone}"
                label="Hide Account Phone Number?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Email Address</h4>
              <switch-input name="email" class="w-full" id="email" ?selected="${contact?.email}"
                label="Hide Account Email Address?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Place of Work</h4>
              <switch-input name="placeOfWork" class="w-full" id="placeOfWork" ?selected="${contact?.placeOfWork}"
                label="Hide Place of Work?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Whatsapp Number</h4>
              <switch-input name="whatsapp" class="w-full" id="whatsapp" ?selected="${contact?.whatsapp}"
                label="Hide Account Whatsapp Number?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Facebook Handle</h4>
              <switch-input name="facebook" class="w-full" id="facebook" ?selected="${contact?.facebook}"
                label="Hide Account Facebook Handle?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Twitter Handle</h4>
              <switch-input name="twitter" class="w-full" id="twitter" ?selected="${contact?.twitter}"
                label="Hide Account Twitter Handle?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Instagram Handle</h4>
              <switch-input name="instagram" class="w-full" id="instagram" ?selected="${contact?.instagram}"
                label="Hide Account Instagram Handle?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Website Address</h4>
              <switch-input name="website" class="w-full" id="website" ?selected="${contact?.website}"
                label="Hide Account Website Address?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Postal Address</h4>
              <switch-input name="postalAddress" class="w-full" id="postalAddress" ?selected="${contact?.postalAddress}"
                label="Hide Account Postal Address?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Digital Address</h4>
              <switch-input name="digitalAddress" class="w-full" id="digitalAddress" ?selected="${contact?.digitalAddress}"
                label="Hide Account Digital Address?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Account Bio</h4>
              <switch-input name="accountBio" class="w-full" id="accountBio" ?selected="${contact?.accountBio}"
                label="Hide Account Bio?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Business Description</h4>
              <switch-input name="businessDescription" class="w-full" id="businessDescription" ?selected="${contact?.businessDescription}"
                label="Hide Business Description?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Hide Business Hashtags</h4>
              <switch-input name="businessHashtag" class="w-full" id="businessHashtag" ?selected="${contact?.businessHashtag}"
                label="Hide Business Hashtags?" outlined>
              </switch-input>
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
    let isNew: boolean, updateId: number;

    if (this.memberContactPrivacy.length < 1) {
      isNew = true;
    } else {
      if (this.memberContactPrivacy[0] === null) {
        isNew = true;
      } else {
        isNew = false;
        updateId = this.memberContactPrivacy[0].id;
      }
    }

    if (isNew) {
      await POST_UserContactPrivacy();
    } else {
      await PATCH_UserContactPrivacy(updateId);
    }
  }

  createRenderRoot() {
    return this;
  }
}
