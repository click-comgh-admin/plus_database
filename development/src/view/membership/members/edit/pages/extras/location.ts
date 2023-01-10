import '@material/mwc-circular-progress';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-textfield';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@addons/widgets/alert';
import { MembershipMixedUserModel } from '@@addons/interfaces/members/user/mixed';
import { LocationCountryModel } from '@@addons/interfaces/location/country_model';
import { PATCH_MembershipOrganizationUser } from '@@addons/network/members/membership/users/organization/patch';
import { LocationConstituencyModel, Convert as lcymConvert } from '@@addons/interfaces/location/constituency_model';
import { LocationDistrictModel, Convert as ldmConvert } from '@@addons/interfaces/location/district_model';
import { LocationRegionModel, Convert as lrmConvert } from '@@addons/interfaces/location/region_model';
import { GET_LocationConstituencyFilter } from '@@addons/network/location/constituency/filter';
import { GET_LocationDistrictFilter } from '@@addons/network/location/district/filter';
import { GET_LocationRegion } from '@@addons/network/location/region';
import { PATCH_MembershipUser } from '@@addons/network/members/membership/users/patch';


@customElement("pdb-membership-update-view-location")
export class PdbMembershipUpdateViewLocation extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  public memberId?: number;

  @property({ type: String })
  public updateType?: "member" | "organization";

  @property({ type: Number })
  private selectedCountry: number = 0;

  @property({ type: Array })
  public memberInfo: MembershipMixedUserModel[] = null;

  @property({ type: Boolean })
  private regionCalled: boolean = false;

  @property({ type: Number })
  private selectedRegion: number = 0;

  @property({ type: Number })
  private selectedDistrict: number = 0;

  @property({ type: Array })
  public countries: LocationCountryModel[] = [];

  @property({ type: Array })
  private regions: LocationRegionModel[] = [];

  @property({ type: Array })
  private districts: LocationDistrictModel[] = [];

  @property({ type: Array })
  private constituencies: LocationConstituencyModel[] = [];

  @property({ type: Object })
  private constituenciesMemo: {[identity: string]: LocationConstituencyModel[]} = {};

  @property({ type: Object })
  private districtsMemo:{[identity: string]: LocationDistrictModel[]} = {};

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

    if (this.memberInfo === null) return this.pageLoading;
    if (this.memberInfo.length < 1) this.memberInfo.push(null);

    const country_name_id = this.updateType === "member"? "countryOfResidence": "countryOfBusiness";
    return this.memberInfo.map(member => {  
      // this.selectedCountry = Number(member[country_name_id]);
      // console.log({"this.selectedCountry === 76": this.selectedCountry === 76, "this.selectedCountry": this.selectedCountry});
      
      return html`
      <form method="post" action="#" class="form !my-1" make-general-posts="--awaiting-type--" enctype="multipart/form-data">
        <div
          class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col px-2 mt-1 mb-2">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-4">
            <div class="p-2">
              <h4 class="font-semibold my-2">Select Country</h4>
              <mwc-select name="${country_name_id}" id="${country_name_id}" label="Select Country" outlined required @change="${this.countryChanged}">
                ${this.countries.map((item) => {
                  // console.log({item});
                  let countryId = 0;
                  if (member?.countryInfo.length > 0) {
                    countryId = member?.countryInfo[0].id;
                  }
                  if (countryId === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.name}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                })}
              </mwc-select>
            </div>
            ${(this.selectedCountry === 76)? html`<div class="p-2">
              <h4 class="font-semibold my-2">Select Region</h4>
              <mwc-select name="region" id="region" label="Select Region" outlined required @change="${this.regionChanged}">
                ${this.regions.map((item) => {
                  // console.log({item});
                  if (member?.region === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.location}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.location}</mwc-list-item>`;
                })}
              </mwc-select>
            </div>`: nothing}
            ${(this.selectedCountry === 76)? html`<div class="p-2">
              <h4 class="font-semibold my-2">Select District</h4>
              <mwc-select name="district" id="district" label="Select District" outlined required @change="${this.districtChanged}">
                ${this.districts.map((item) => {
                  // console.log({item});
                  if (member?.district === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.location}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.location}</mwc-list-item>`;
                })}
              </mwc-select>
            </div>`: nothing}
            ${(this.selectedCountry === 76)? html`<div class="p-2">
              <h4 class="font-semibold my-2">Select Constituency</h4>
              <mwc-select name="constituency" id="constituency" label="Select Constituency" outlined required>
                ${this.constituencies.map((item) => {
                  // console.log({item});
                  if (member?.constituency === item.id) {
                    return html`<mwc-list-item value="${item.id}" selected>${item.location}</mwc-list-item>`;
                  }
                  return html`<mwc-list-item value="${item.id}">${item.location}</mwc-list-item>`;
                })}
              </mwc-select>
            </div>`: nothing}
            ${(this.selectedCountry !== 76)? html`<div class="p-2">
              <h4 class="font-semibold my-2">Enter State/ Province</h4>
              <mwc-textfield name="stateProvince" id="stateProvince" label="Enter State/ Province" outlined type="text" value="${member?.stateProvince}">
              </mwc-textfield>
            </div>`: nothing}
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

  private async countryChanged(e: Event) {
    // @ts-ignore
    const countryID = e.currentTarget.value;
    this.selectedCountry = Number.isNaN(countryID) ? 0 : Number(countryID);
    // console.log({"this.selectedCountry": this.selectedCountry});
    

    this.countryCheck(false);
  }

  private async countryCheck(init?: boolean) {
    const country_name_id = this.updateType === "member"? "countryOfResidence": "countryOfBusiness";
    if (init) {
      // console.log({"document.querySelector('[name='+country_name_id+']')": document.querySelector('[name="'+country_name_id+'"]')});
      
      // @ts-ignore
      const countryID = document.querySelector('[name="' + country_name_id + '"]').value;
      // console.log({countryID});
      
      this.selectedCountry = Number.isNaN(countryID) ? 0 : Number(countryID);
      // console.log({"this.selectedCountry": this.selectedCountry});
    }
    

    if (this.selectedCountry === 76) {
      // console.log({"this.regionCalled": this.regionCalled});
      if (this.regionCalled === false) await this.getLocationRegion();
      // console.log({"this.regions": this.regions});
      this.regionCalled = true;
    }
  }

  private async regionChanged(e: Event) {
    // @ts-ignore
    const regionID = e.currentTarget.value;
    this.selectedRegion = Number.isNaN(regionID) ? 0 : Number(regionID);
    
    this.getLocationDistrict(this.selectedRegion);
  }

  private districtChanged(e: Event) {
    // @ts-ignore
    const districtID = e.currentTarget.value;
    this.selectedDistrict = Number.isNaN(districtID) ? 0 : Number(districtID);
    
    this.getLocationConstituency(this.selectedRegion, this.selectedDistrict);
  }

  firstUpdated() { 
    setTimeout(() => {
      this.countryCheck(true);
    }, 100);
  }
  
  private async getLocationRegion() {
    const _networkResponse = await GET_LocationRegion<LocationRegionModel>(null, "?client=0");
    // console.log({_networkResponse});
    
    let _regions: LocationRegionModel[] = [
      {id: 0, location: "Select Region"}
    ];

    if (_networkResponse === null) {
      _regions.push({ id: 0, location: "**NOT FOUND**", });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: LocationRegionModel[] = data.map(value => {
          return lrmConvert.toLocationRegionModel(JSON.stringify(value))
        });
        // console.log({DATA});
        _regions = [..._regions, ...DATA];
      }
    }

    const new_data: Array<LocationRegionModel> = [];
    new_data.push(...this.regions, ..._regions);
    this.regions = new_data;
  }

  private async getLocationDistrict(regionID: number) {
    this.districts = [];
    const identity = String(regionID),
      districtsMemo = this.districtsMemo;
    // console.log({identity, districtsMemo,})
    if (identity in districtsMemo) { // implementing memoization
      // console.log({ "districtsMemo[identity]": districtsMemo[identity] })
      
      setTimeout(() => { // allow empty field to be set
        const new_data: Array<LocationDistrictModel> = [];
        new_data.push(...this.districts, ...districtsMemo[identity]);
        this.districts = new_data;
      }, 100);
    } else {
      const _networkResponse = await GET_LocationDistrictFilter<LocationDistrictModel>(regionID);
      // console.log({_networkResponse});
      
      let _districts: LocationDistrictModel[] = [
        {id: 0, location: "Select District", regionId: null}
      ];
  
      if (_networkResponse === null) {
        _districts.push({ id: 0, location: "**NOT FOUND**", regionId: null });
      } else {
        if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
          const data: any[] = _networkResponse.response.data;
  
          const DATA: LocationDistrictModel[] = data.map(value => {
            return ldmConvert.toLocationDistrictModel(JSON.stringify(value))
          });
          // console.log({DATA});
          _districts = [..._districts, ...DATA];
          this.districtsMemo[identity] = _districts;
        }
      }

      const new_data: Array<LocationDistrictModel> = [];
      new_data.push(...this.districts, ..._districts);
      this.districts = new_data;
    }
  }

  private async getLocationConstituency(regionID: number, districtID: number) {
    this.constituencies = [];
    const identity = `${regionID}_${districtID}`,
      constituenciesMemo = this.constituenciesMemo;
    if (identity in constituenciesMemo) { // implementing memoization      
      setTimeout(() => { // allow empty field to be set
        const new_data: Array<LocationConstituencyModel> = [];
        new_data.push(...this.constituencies, ...constituenciesMemo[identity]);
        this.constituencies = new_data;
      }, 100);
    } else {

      const _networkResponse = await GET_LocationConstituencyFilter<LocationConstituencyModel>(regionID, districtID);
      // console.log({_networkResponse});
      
      let _constituencies: LocationConstituencyModel[] = [
        {id: 0, location: "Select Constituency", regionId: null}
      ];
  
      if (_networkResponse === null) {
        _constituencies.push({ id: 0, location: "**NOT FOUND**", regionId: null });
      } else {
        if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
          const data: any[] = _networkResponse.response.data;
  
          const DATA: LocationConstituencyModel[] = data.map(value => {
            return lcymConvert.toLocationConstituencyModel(JSON.stringify(value))
          });
          // console.log({DATA});
          _constituencies = [..._constituencies, ...DATA];
          this.constituenciesMemo[identity] = _constituencies;
        }
      }

      const new_data: Array<LocationConstituencyModel> = [];
      new_data.push(...this.constituencies, ..._constituencies);
      this.constituencies = new_data;
    }
  }

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
