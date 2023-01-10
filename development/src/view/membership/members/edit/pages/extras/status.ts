import '@material/mwc-circular-progress';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-textfield';
import '@@addons/widgets/form/new/switch';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@addons/widgets/alert';
import { UserStatusModel } from '@@addons/interfaces/members/user/status';
import { PATCH_UserStatusInfo } from '@@addons/network/members/status/patch';
import { POST_UserStatusInfo } from '@@addons/network/members/status/post';
import { EducationStatusModel } from '@@addons/interfaces/members/user/status/education_status';
import { MaritalStatusModel } from '@@addons/interfaces/members/user/status/marital_status';
import { OccupationStatusModel } from '@@addons/interfaces/members/user/status/occupation_status';
import { ProfessionStatusModel } from '@@addons/interfaces/members/user/status/profession_status';


@customElement("pdb-membership-update-view-status")
export class PdbMembershipUpdateViewStatus extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public memberId?: number;

  @property({ type: Array })
  public memberStatusInfo: UserStatusModel[] = null;

  @property({ type: Array })
  public maritalStatusInfo: MaritalStatusModel[] = [];
  
  @property({ type: Number })
  private selectedMaritalStatus: number | "other_value" = 0;

  @property({ type: Array })
  public occupationStatusInfo: OccupationStatusModel[] = [];
  
  @property({ type: Number })
  private selectedOccupationStatus: number | "other_value" = 0;

  @property({ type: Array })
  public professionStatusInfo: ProfessionStatusModel[] = [];
  
  @property({ type: Number })
  private selectedProfessionStatus: number | "other_value" = 0;

  @property({ type: Array })
  public educationStatusInfo: EducationStatusModel[] = [];
  
  @property({ type: Number })
  private selectedEducationStatus: number | "other_value" = 0;

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

    if (this.memberStatusInfo === null) return this.pageLoading;
    if (this.memberStatusInfo.length < 1) this.memberStatusInfo.push(null);
    return this.memberStatusInfo.map(status => {   
      return html`
      <form method="post" action="#" class="form !my-1" make-general-posts="members-user-status-info" enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Has Disability</h4>
              <switch-input name="disability" class="w-full" id="disability" ?selected="${status?.disability}"
                label="Has Disability?" outlined>
              </switch-input>
            </div>
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Marital Status</h4>
              <mwc-select name="maritalStatus" id="maritalStatus" outlined required @change="${this.maritalStatusChanged}">
                ${this.maritalStatusInfo.map((item) => {
                  // console.log({item});
                  if (status?.maritalStatus.id === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                })}
                <mwc-list-item value="other_value">Other Marital Status</mwc-list-item>
              </mwc-select>
            </div>
            ${this.selectedMaritalStatus === "other_value" ? html`
              <div class="p-2">
                <h4 class="font-semibold my-2">Enter Other Marital Status</h4>
                <mwc-textfield name="other_maritalStatus" id="other_maritalStatus" label="Enter Other Marital Status" outlined type="text">
                </mwc-textfield>
              </div>
            `: nothing}
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Occupational Status</h4>
              <mwc-select name="occupationalStatus" id="occupationalStatus" outlined required @change="${this.occupationStatusChanged}">
                ${this.occupationStatusInfo.map((item) => {
                  // console.log({item});
                  if (status?.occupationalStatus.id === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                })}
                <mwc-list-item value="other_value">Other Occupational Status</mwc-list-item>
              </mwc-select>
            </div>
            ${this.selectedOccupationStatus === "other_value" ? html`
              <div class="p-2">
                <h4 class="font-semibold my-2">Enter Other Occupational Status</h4>
                <mwc-textfield name="other_occupationalStatus" id="other_occupationalStatus" label="Enter Other Occupational Status" outlined type="text">
                </mwc-textfield>
              </div>
            `: nothing}
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Profession Status</h4>
              <mwc-select name="professionStatus" id="professionStatus" outlined required @change="${this.professionStatusChanged}">
                ${this.professionStatusInfo.map((item) => {
                  // console.log({item});
                  if (status?.professionStatus.id === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                })}
                <mwc-list-item value="other_value">Other Profession Status</mwc-list-item>
              </mwc-select>
            </div>
            ${this.selectedProfessionStatus === "other_value" ? html`
              <div class="p-2">
                <h4 class="font-semibold my-2">Enter Other Profession Status</h4>
                <mwc-textfield name="other_professionStatus" id="other_professionStatus" label="Enter Other Profession Status" outlined type="text">
                </mwc-textfield>
              </div>
            `: nothing}
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Educational Status</h4>
              <mwc-select name="educationalStatus" id="educationalStatus" outlined required @change="${this.educationStatusChanged}">
                ${this.educationStatusInfo.map((item) => {
                  // console.log({item});
                  if (status?.educationalStatus.id === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                })}
                <mwc-list-item value="other_value">Other Educational Status</mwc-list-item>
              </mwc-select>
            </div>
            ${this.selectedEducationStatus === "other_value" ? html`
              <div class="p-2">
                <h4 class="font-semibold my-2">Enter Other Educational Status</h4>
                <mwc-textfield name="other_educationalStatus" id="other_educationalStatus" label="Enter Other Educational Status" outlined type="text">
                </mwc-textfield>
              </div>
            `: nothing}
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

  maritalStatusChanged(e: Event) {
    // @ts-ignore
    this.selectedMaritalStatus = e.currentTarget.value;
  }

  occupationStatusChanged(e: Event) {
    // @ts-ignore
    this.selectedOccupationStatus = e.currentTarget.value;
  }

  professionStatusChanged(e: Event) {
    // @ts-ignore
    this.selectedProfessionStatus = e.currentTarget.value;
  }

  educationStatusChanged(e: Event) {
    // @ts-ignore
    this.selectedEducationStatus = e.currentTarget.value;
  }

  firstUpdated() { }

  async submitForm(e: PointerEvent) {
    let isNew: boolean, updateId: number;

    if (this.memberStatusInfo.length < 1) {
      isNew = true;
    } else {
      if (this.memberStatusInfo[0] === null) {
        isNew = true;
      } else {
        isNew = false;
        updateId = this.memberStatusInfo[0].id;
      }
    }

    if (isNew) {
      await POST_UserStatusInfo();
    } else {
      await PATCH_UserStatusInfo(updateId);
    }
  }

  createRenderRoot() {
    return this;
  }
}
