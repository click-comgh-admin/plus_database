import '@material/mwc-circular-progress';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-textarea';
import { UserContactModel } from '@@addons/interfaces/members/user/contact';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@addons/widgets/alert';
import { PATCH_UserContactData } from '@@addons/network/members/contact/data/patch';
import { POST_UserContactData } from '@@addons/network/members/contact/data/post';


@customElement("pdb-membership-update-view-contact-data")
export class PdbMembershipUpdateViewContactData extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public memberId?: number;

  @property({ type: Array })
  private memberContactInfo: UserContactModel[] = null;

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

    if (this.memberContactInfo === null) return this.pageLoading;
    if (this.memberContactInfo.length < 1) this.memberContactInfo.push(null);
    return this.memberContactInfo.map(contact => {   
      let dateJoined = "";
      const _dateJoined = new Date(contact?.dateJoined),
        __TO_DATE = _dateJoined.toLocaleDateString('en-US', {
          day: '2-digit', month: '2-digit', year: 'numeric', formatMatcher: 'best fit',
          // @ts-ignore
        }).split("/");
        dateJoined = [__TO_DATE[2], __TO_DATE[0], __TO_DATE[1]].join('-');
      return html`
      <form method="post" action="#" class="form !my-1" make-general-posts="members-user-contact-info" enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Phone Number</h4>
              <mwc-textfield name="phone" id="phone" label="Enter Phone Number" outlined type="tel" maxLength="13" value="${contact?.phone}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Email Address</h4>
              <mwc-textfield name="email" id="email" label="Enter Email Address" outlined type="email" value="${contact?.email}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Place of Work</h4>
              <mwc-textfield name="placeOfWork" id="placeOfWork" label="Enter Place of Work" outlined type="text" value="${contact?.placeOfWork}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Whatsapp Number</h4>
              <mwc-textfield name="whatsapp" id="whatsapp" label="Enter Whatsapp Number" outlined type="tel" maxLength="13" value="${contact?.whatsapp}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Facebook Handle</h4>
              <mwc-textfield name="facebook" id="facebook" label="Enter Facebook Handle" outlined type="text" value="${contact?.facebook}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Twitter Handle</h4>
              <mwc-textfield name="twitter" id="twitter" label="Enter Twitter Handle" outlined type="text" value="${contact?.twitter}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Instagram Handle</h4>
              <mwc-textfield name="instagram" id="instagram" label="Enter Instagram Handle" outlined type="text" value="${contact?.instagram}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Website Address</h4>
              <mwc-textfield name="website" id="website" label="Enter Website Address" outlined type="url" value="${contact?.website}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Postal Address</h4>
              <mwc-textfield name="postalAddress" id="postalAddress" label="Enter Postal Address" outlined type="text" value="${contact?.postalAddress}">
              </mwc-textfield>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Digital Address</h4>
              <mwc-textfield name="digitalAddress" id="digitalAddress" label="Enter Digital Address" outlined type="text" value="${contact?.digitalAddress}">
              </mwc-textfield>
            </div>
            <div></div>
            <div></div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Account Bio</h4>
              <mwc-textarea class="h-48" outlined name="accountBio" id="accountBio" label="Enter Account Bio"
                placeholder="Enter Account Bio" value="${contact?.accountBio}">
              </mwc-textarea>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Business Description</h4>
              <mwc-textarea class="h-48" outlined name="businessDescription" id="businessDescription" label="Enter Business Description"
                placeholder="Enter Business Description" value="${contact?.businessDescription}">
              </mwc-textarea>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Enter Business Hashtags <span class="text-yellow-400">Seperate with comma[xyx,abc] or with new lines.</span></h4>
              <mwc-textarea class="h-48" outlined name="businessHashtag" id="businessHashtag" label="Enter Business Hashtags"
                placeholder="Enter Business Hashtags" value="${contact?.businessHashtag}">
              </mwc-textarea>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Date Joined</h4>
              <mwc-textfield name="dateJoined" type="date" class="w-full" id="dateJoined"
                label="Select Date Date Joined" value="${dateJoined}" outlined required>
              </mwc-textfield>
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

    if (this.memberContactInfo.length < 1) {
      isNew = true;
    } else {
      if (this.memberContactInfo[0] === null) {
        isNew = true;
      } else {
        isNew = false;
        updateId = this.memberContactInfo[0].id;
      }
    }

    if (isNew) {
      await POST_UserContactData();
    } else {
      await PATCH_UserContactData(updateId);
    }
  }

  createRenderRoot() {
    return this;
  }
}
