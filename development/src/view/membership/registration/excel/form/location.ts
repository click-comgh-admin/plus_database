import "@@assets/styles/views/admin/register/main.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@@addons/widgets/form/new/select';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/form/new/file-select';
import { LocationCountryModel, Convert as lcmConvert } from "@@addons/interfaces/location/country_model";
import { LocationRegionModel, Convert as lrmConvert } from "@@addons/interfaces/location/region_model";
import { LocationConstituencyModel, Convert as lcymConvert } from "@@addons/interfaces/location/constituency_model";
import { LocationDistrictModel, Convert as ldmConvert } from "@@addons/interfaces/location/district_model";
import { GET_LocationCountry } from "@@addons/network/location/country";
import { GET_LocationRegion } from "@@addons/network/location/region";
import { GET_LocationDistrictFilter } from "@@addons/network/location/district/filter";
import { GET_LocationConstituencyFilter } from "@@addons/network/location/constituency/filter";

@customElement('membership-registration-excel-location')
export class MembershipRegistrationExcelLocation extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  private regionCalled: boolean = false;

  @property({ type: Number })
  private selectedRegion: number = 0;

  @property({ type: Number })
  private selectedDistrict: number = 0;

  @property({ type: Array })
  private _countries: LocationCountryModel[] = [];

  @property({ type: Array })
  private _regions: LocationRegionModel[] = [];

  @property({ type: Array })
  private _districts: LocationDistrictModel[] = [];

  @property({ type: Array })
  private _constituencies: LocationConstituencyModel[] = [];

  @property({ type: Object })
  private _constituenciesMemo: {[identity: string]: LocationConstituencyModel[]} = {};

  @property({ type: Object })
  private _districtsMemo:{[identity: string]: LocationDistrictModel[]} = {};

  async connectedCallback() {
    super.connectedCallback();
    await this.getLocationCountry();
  }

  disconnectedCallback() { }
  static styles = [
    css`
    :host { display: block; }
    input[type="text"], input[type="password"], 
    input[type="email"], input[type="phone"], 
    select, span.select2.select2-container, 
    span.select2-selection.select2-selection--single.form-control.p-0, 
    textarea {
      background: none!important;
      padding: unset!important;
    }
  `
  ];

  render() {
    const countries: {
      id: number; name: string; isSelected: "true" | "false";
      selected: boolean;
    }[] = this._countries.map((country) => {
      return {
        id: country.id, name: country.name,
        isSelected: "false", selected: false,
      }
    });
    const regions: {
      id: number; name: string; isSelected: "true" | "false";
      selected: boolean;
    }[] = this._regions.map((region) => {
      return {
        id: region.id, name: region.location,
        isSelected: "false", selected: false,
      }
    });
    const districts: {
      id: number; name: string; isSelected: "true" | "false";
      selected: boolean;
    }[] = this._districts.map((district) => {
      return {
        id: district.id, name: district.location,
        isSelected: "false", selected: false,
      }
    });

    const constituencies: {
      id: number; name: string; isSelected: "true" | "false";
      selected: boolean;
    }[] = this._constituencies.map((constituency) => {
      return {
        id: constituency.id, name: constituency.location,
        isSelected: "false", selected: false,
      }
    });

    return html`
      <div class="form-container flex">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label my-1">
                  <h1 class="h1 !text-red-400">Filter Location Details</h1>
                  <h3 class="h3">
                    <span class="!text-red-400">For reference only. </span>
                    <span class="!text-red-400"> Does not affect registration.</span>
                  </h3>
                </label>
              </header>
              <form method="post" action="#" class="form !my-1">
                <div class="row">
                  <div class="col-md-3 col-lg-3">
                    <h4 class="font-semibold my-2">Select Country</h4>
                    <select-input name="country" id="country" label="Select Country" .options="${countries}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_state_province>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Region</h4>
                    <select-input name="region" id="region" label="Select Region" .options="${regions}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select District</h4>
                    <select-input name="district" id="district" label="Select District" .options="${districts}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-3 col-lg-3 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Constituency</h4>
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${constituencies}"
                      outlined required>
                    </select-input>
                  </div>
                </div>
              
                <div class="flex form-input-container items-center text-center !my-1">
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Lets go digital...
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    document.onreadystatechange = (event)=> {
      // console.log({ "document.readyState": document.readyState })
      if (document.readyState == "complete") this.countryChanged(event);
      if (document.readyState == "complete") this.regionChanged(event);
      if (document.readyState == "complete") this.districtChanged(event);
      if (document.readyState == "complete") this.constituencyChanged(event);
    }  
  }

  private countryChanged(e: any) {
    // console.log(e)
    const countryNodes: NodeListOf<HTMLSelectElement> = document.querySelectorAll('select[name="country"]');
    countryNodes.forEach(countryNode => {
      // console.log({ "countryNode": countryNode })
      // console.log({ "countryNode.currentValue": countryNode.getAttribute("currentValue") })
      countryNode.onchange = async (event) => {
        // console.log({ event, "counrtyValue": countryNode, "counrtyValue.value": countryNode.value, })
        const show_ghana_locations = this.querySelectorAll('[show_ghana_locations]'),
          show_state_province = this.querySelectorAll('[show_state_province]'),
          show_hide_class = "hidden";
        if (countryNode.value === "76") {
          if (this.regionCalled === false) await this.getLocationRegion();
          this.regionCalled = true;
          show_ghana_locations.forEach(node => {
            node.classList.remove(show_hide_class);
          });
          show_state_province.forEach(node => {
            node.classList.add(show_hide_class);
          });
        } else {
          show_ghana_locations.forEach(node => {
            node.classList.add(show_hide_class);
          });
          show_state_province.forEach(node => {
            node.classList.remove(show_hide_class);
          });
        }
      };
    });
  }

  private async regionChanged(e: Event) {
    const regionNodes: NodeListOf<HTMLSelectElement> = document.querySelectorAll('select[name="region"]');
    regionNodes.forEach(regionNode => {
      // console.log({ "regionNode": regionNode })
      // console.log({ "regionNode.currentValue": regionNode.getAttribute("currentValue") })
      regionNode.onchange = async (event) => {
        // console.log({ event, "counrtyValue": regionNode, "counrtyValue.value": regionNode.value, })
        const regionID = regionNode.value;
        this.selectedRegion = Number.isNaN(regionID) ? 0 : Number(regionID);
        // console.log({regionID, "this.selectedRegion": this.selectedRegion})
        this.getLocationDistrict(this.selectedRegion);
      };
    });
  }

  private districtChanged(e: Event) {
    const districtNodes: NodeListOf<HTMLSelectElement> = document.querySelectorAll('select[name="district"]');
    districtNodes.forEach(districtNode => {
      // console.log({ "districtNode": districtNode })
      // console.log({ "districtNode.currentValue": districtNode.getAttribute("currentValue") })
      districtNode.onchange = async (event) => {
        // console.log({ event, "counrtyValue": districtNode, "counrtyValue.value": districtNode.value, })
        const districtID = districtNode.value;
        this.selectedDistrict = Number.isNaN(districtID)? 0: Number(districtID);
        this.getLocationConstituency(this.selectedRegion, this.selectedDistrict);
      };
    });
  }

  private constituencyChanged(e: Event) {
    // this.selectedRegion, this.selectedDistrict
  }

  private async getLocationCountry() {
    const _networkResponse = await GET_LocationCountry<LocationCountryModel>(null, "?client=0");
    // console.log({_networkResponse});
    
    let __countries: LocationCountryModel[] = [
      {code: "-000", id: 0, name: "Select Country", short: "S-C"}
    ];

    if (_networkResponse === null) {
      __countries.push({ id: 0, name: "**NOT FOUND**", code: "??", short: "N/A" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: LocationCountryModel[] = data.map(value => {
          return lcmConvert.toCountryModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __countries = [...__countries, ...DATA];
      }
    }

    const new_data: Array<LocationCountryModel> = [];
    new_data.push(...this._countries, ...__countries);
    this._countries = new_data;
  }
  
  private async getLocationRegion() {
    const _networkResponse = await GET_LocationRegion<LocationRegionModel>(null, "?client=0");
    // console.log({_networkResponse});
    
    let __regions: LocationRegionModel[] = [
      {id: 0, location: "Select Region"}
    ];

    if (_networkResponse === null) {
      __regions.push({ id: 0, location: "**NOT FOUND**", });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: LocationRegionModel[] = data.map(value => {
          return lrmConvert.toLocationRegionModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __regions = [...__regions, ...DATA];
      }
    }
    const new_data: Array<LocationRegionModel> = [];
    new_data.push(...this._regions, ...__regions);
    this._regions = new_data;
  }

  private async getLocationDistrict(regionID: number) {
    this._districts = [];
    const identity = String(regionID),
      _districtsMemo = this._districtsMemo;
    // console.log({identity, _districtsMemo,})
    if (identity in _districtsMemo) { // implementing memoization
      // console.log({ "_districtsMemo[identity]": _districtsMemo[identity] })
      
      setTimeout(() => { // allow empty field to be set
        const new_data: Array<LocationDistrictModel> = [];
        new_data.push(...this._districts, ..._districtsMemo[identity]);
        this._districts = new_data;
      }, 100);
    } else {
      const _networkResponse = await GET_LocationDistrictFilter<LocationDistrictModel>(regionID);
      // console.log({_networkResponse});
      
      let __districts: LocationDistrictModel[] = [
        {id: 0, location: "Select District", regionId: null}
      ];
  
      if (_networkResponse === null) {
        __districts.push({ id: 0, location: "**NOT FOUND**", regionId: null });
      } else {
        if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
          const data: any[] = _networkResponse.response.data;
  
          const DATA: LocationDistrictModel[] = data.map(value => {
            return ldmConvert.toLocationDistrictModel(JSON.stringify(value))
          });
          // console.log({DATA});
          __districts = [...__districts, ...DATA];
          this._districtsMemo[identity] = __districts;
        }
      }

      const new_data: Array<LocationDistrictModel> = [];
      new_data.push(...this._districts, ...__districts);
      this._districts = new_data;
    }
  }

  private async getLocationConstituency(regionID: number, districtID: number) {
    this._constituencies = [];
    const identity = `${regionID}_${districtID}`,
      _constituenciesMemo = this._constituenciesMemo;
    if (identity in _constituenciesMemo) { // implementing memoization      
      setTimeout(() => { // allow empty field to be set
        const new_data: Array<LocationConstituencyModel> = [];
        new_data.push(...this._constituencies, ..._constituenciesMemo[identity]);
        this._constituencies = new_data;
      }, 100);
    } else {

      const _networkResponse = await GET_LocationConstituencyFilter<LocationConstituencyModel>(regionID, districtID);
      // console.log({_networkResponse});
      
      let __constituencies: LocationConstituencyModel[] = [
        {id: 0, location: "Select Constituency", regionId: null}
      ];
  
      if (_networkResponse === null) {
        __constituencies.push({ id: 0, location: "**NOT FOUND**", regionId: null });
      } else {
        if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
          const data: any[] = _networkResponse.response.data;
  
          const DATA: LocationConstituencyModel[] = data.map(value => {
            return lcymConvert.toLocationConstituencyModel(JSON.stringify(value))
          });
          // console.log({DATA});
          __constituencies = [...__constituencies, ...DATA];
          this._constituenciesMemo[identity] = __constituencies;
        }
      }

      const new_data: Array<LocationConstituencyModel> = [];
      new_data.push(...this._constituencies, ...__constituencies);
      this._constituencies = new_data;
    }
  }
  createRenderRoot() {
    return this;
  }
}
