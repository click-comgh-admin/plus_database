import "@@assets/styles/views/admin/register/main.scss";
import { togglePswdVisibility } from '@@addons/functions/toggle_pswd_visibility';
import { POST_ClientRegister } from '@@addons/network/clients/register';
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-icon';
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@@addons/widgets/form/new/select';
import '@@addons/widgets/form/new/switch';
import '@@addons/widgets/form/new/file-select';
import { GenericGenderInfo_I, GenericGenderInfo_S } from "@@addons/interfaces/generic/gender";
import { GET_GenericGender } from "@@addons/network/generic/gender";
import { GET_ClientSubsciptionMembershipSize } from "@@addons/network/clients/subscription/membership_size";
import { ClientSubscriptionMembershipSizeModel, Convert as csmsmConvert } from "@@addons/interfaces/clients/subscription/membership_size";
import { LocationCountryModel, Convert as lcmConvert } from "@@addons/interfaces/location/country_model";
import { LocationRegionModel, Convert as lrmConvert } from "@@addons/interfaces/location/region_model";
import { LocationConstituencyModel, Convert as lcymConvert } from "@@addons/interfaces/location/constituency_model";
import { LocationDistrictModel, Convert as ldmConvert } from "@@addons/interfaces/location/district_model";
import { GET_LocationCountry } from "@@addons/network/location/country";
import { GET_LocationRegion } from "@@addons/network/location/region";
import { GET_LocationDistrictFilter } from "@@addons/network/location/district/filter";
import { GET_LocationConstituencyFilter } from "@@addons/network/location/constituency/filter";
import { ClientAccountCategoryModel, Convert as cacmConvert } from "@@addons/interfaces/clients/account_category";
import { GET_ClientAccountCategory } from "@@addons/network/clients/account_category";

@customElement('pdb-register-form')
export class PdbRegisterForm extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  private showLeadersForm: boolean = false;

  @property({ type: Boolean })
  private regionCalled: boolean = false;

  @property({ type: Number })
  private selectedRegion: number = 0;

  @property({ type: Number })
  private selectedDistrict: number = 0;

  @property({ type: Array })
  private _genders: GenericGenderInfo_I[] = [];

  @property({ type: Array })
  private _countries: LocationCountryModel[] = [];

  @property({ type: Array })
  private _accountCategories: ClientAccountCategoryModel[] = [];

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


  @property({ type: Array })
  private _membershipSizes: ClientSubscriptionMembershipSizeModel[] = [];

  async connectedCallback() {
    super.connectedCallback();
    await this.getGenders();
    await this.getLocationCountry();
    await this.getClientAccountCategory();
    await this.getClientSubscriptionMembershipSize();
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

    // console.log({"this._accountCategories": this._accountCategories});

    return html`
      <div class="form-container flex justify-center">
        <div class="app-container- !px-0">
          <div class="app-container--row !px-0">
            <div class="app-container--col-md-12">
              <header class="header warning app-container--col-md-12">
                <label for="" class="label">
                  <mwc-icon class="icon">format_strikethrough</mwc-icon>
                  <h1 class="h1 !text-red-400">New Client Account</h1>
                  <h3 class="h3">Create New Client Account!</h3>
                </label>
              </header>
              <form method="post" action="#" class="form" make-general-posts="client-register" enctype="multipart/form-data">
                <div class="row justify-content-center">
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Organization Name</h4>
                    <mwc-textfield name="name" type="text" class="w-full" id="name" value="" label="Enter Organization Name" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Account Category</h4>
                    <mwc-select name="accountCategory" id="accountCategory" label="Select Account Category" outlined required>
                      ${this._accountCategories.map((item) => {
                        // console.log({item});
                        return html`<mwc-list-item value="${item.id}">${item.category}</mwc-list-item>`;
                      })}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_other_account_category>
                    <h4 class="font-semibold my-2">Enter Other Account Category</h4>
                    <mwc-textfield name="accountCategoryOther" type="text" class="w-full" id="accountCategoryOther" value="" label="Enter Other Account Category" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Membership Size</h4>
                    <mwc-select name="membership_size" id="membership_size" label="Select Membership Size" outlined required>
                      ${this._membershipSizes.map((item) => {
                        // console.log({item});
                        return html`<mwc-list-item value="${item.id}">${item.info}</mwc-list-item>`;
                      })}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Add Organization Logo <span class="text-yellow-600">(optional)</span></h4>
                    <file-input id="logo" name="logo" label="Add Organization Logo" ></file-input>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Organization Website <span class="text-yellow-600">(Optional)</span></h4>
                    <mwc-textfield name="website" type="url" class="w-full" id="website" value="" label="Enter Organization Website (Optional)" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Country</h4>
                    <!--<mwc-select name="country" id="country" label="Select Country" outlined required>
                      ${this._countries.map((item) => {
                        // console.log({item});
                        return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                      })}
                    </mwc-select> -->
                    <select-input name="country" id="country" label="Select Country" .options="${countries}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_state_province>
                    <h4 class="font-semibold my-2">Enter State/ Province</h4>
                    <mwc-textfield name="stateProvince" type="text" class="w-full" id="stateProvince" value="" label="Enter State/ Province" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Region</h4>
                    <select-input name="region" id="region" label="Select Region" .options="${regions}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select District</h4>
                    <select-input name="district" id="district" label="Select District" .options="${districts}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Select Constituency</h4>
                    <select-input name="constituency" id="constituency" label="Select Constituency" .options="${constituencies}"
                      outlined required>
                    </select-input>
                  </div>
                  <div class="col-md-6 col-lg-6 hidden" show_ghana_locations>
                    <h4 class="font-semibold my-2">Enter Community</h4>
                    <mwc-textfield name="community" type="text" class="w-full" id="community" value="" label="Enter Community" outlined>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Applicant Info")}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Applicant Firstname</h4>
                    <mwc-textfield name="firstname" type="text" class="w-full" id="firstname" value="" label="Enter Applicant Firstname" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Applicant Surname</h4>
                    <mwc-textfield name="surname" type="text" class="w-full" id="surname" value="" label="Enter Applicant Surname" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Select Gender</h4>
                    <mwc-select name="gender" id="gender" label="Select Gender" outlined required>
                      ${this._genders.map((item) => {
                        // console.log({item});
                        return html`<mwc-list-item value="${item.id}">${item.name}</mwc-list-item>`;
                      })}
                    </mwc-select>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter E-mail Address</h4>
                    <mwc-textfield name="email" type="email" class="w-full" id="email" value="" label="Enter E-mail Address" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Phone Number</h4>
                    <mwc-textfield name="phone" type="tel" class="w-full" id="phone" value="" label="Enter Phone Number" outlined required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Leaders")}
                    <h4 class="font-semibold my-2">Add Leaders?</h4> 
                    <switch-input name="addLeaders" class="w-full" id="addLeaders" ?isSelected="${this.showLeadersForm}" label="Add Leaders?" outlined>
                    </switch-input>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 Full Name</h4>
                    <mwc-textfield name="leader_1_name" id="leader_1_name" label="Leader 1 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 Contact</h4>
                    <mwc-textfield name="leader_1_contact" id="leader_1_contact" label="Leader 1 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 1 E-mail</h4>
                    <mwc-textfield name="leader_1_email" id="leader_1_email" label="Leader 1 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 Full Name</h4>
                    <mwc-textfield name="leader_2_name" id="leader_2_name" label="Leader 2 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 Contact</h4>
                    <mwc-textfield name="leader_2_contact" id="leader_2_contact" label="Leader 2 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 2 E-mail</h4>
                    <mwc-textfield name="leader_2_email" id="leader_2_email" label="Leader 2 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                    <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 Full Name</h4>
                    <mwc-textfield name="leader_3_name" id="leader_3_name" label="Leader 3 Name" outlined type="text" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 Contact</h4>
                    <mwc-textfield name="leader_3_contact" id="leader_3_contact" label="Leader 3 Contact" outlined type="tel" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-4 hidden" show_leaders>
                    <h4 class="font-semibold my-2">Leader 3 E-mail</h4>
                    <mwc-textfield name="leader_3_email" id="leader_3_email" label="Leader 3 E-mail" outlined type="email" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-12 col-lg-12 mt-6 mb-0">
                    ${this.sectionSeparater("Set Password")}
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Enter Password</h4>
                    <mwc-textfield name="password" id="password" label="Enter Password" icon="lock" outlined type="password" required>
                    </mwc-textfield>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <h4 class="font-semibold my-2">Confirm Password</h4>
                    <mwc-textfield name="confirm_password" id="confirm_password" label="Confirm Password" icon="lock" outlined type="password" required>
                    </mwc-textfield>
                  </div>
                </div>
      
                <div class="form-input-container">
                  <mwc-button label="Register" raised class="w-full" @click="${this.submitForm}">
                  </mwc-button>
                </div>
              
                <div class="flex form-input-container items-center text-center">
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

  private sectionSeparater(text: string) {
    return html`
      <div class="col-md-12 col-lg-12 mt-6 mb-0">
        <div class="flex form-input-container items-center text-center">
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
          <label class="block font-bold text-sm text-gray-600 w-full my-0">
            ${text}
          </label>
          <hr class="border-gray-300 border-1 w-full rounded-md my-0">
        </div>
      </div>
    `;
  }

  private addLeadersAction() {
    const _this = this; 
    document.querySelectorAll('[name="addLeaders"]').forEach((_switch) => {
      _switch.addEventListener("click", (evt) => {
        // @ts-ignore 
        _this.showLeadersForm = _switch.isSelected;
        const show_leaders = this.querySelectorAll('[show_leaders]'),
          show_hide_class = "hidden";
        if (_this.showLeadersForm) {
          show_leaders.forEach(node => {
            node.classList.remove(show_hide_class);
          });
        } else {
          show_leaders.forEach(node => {
            node.classList.add(show_hide_class);
          });
        }
      });
    });
  }

  firstUpdated() {
    togglePswdVisibility();
    togglePswdVisibility("mwc-textfield");
    document.onreadystatechange = (event)=> {
      // console.log({ "document.readyState": document.readyState })
      if (document.readyState == "complete") this.countryChanged(event);
      if (document.readyState == "complete") this.regionChanged(event);
      if (document.readyState == "complete") this.districtChanged(event);
      if (document.readyState == "complete") this.constituencyChanged(event);
      if (document.readyState == "complete") this.accountCategoryChanged(event);
    }  
    this.addLeadersAction();  
  }

  private accountCategoryChanged(e: any) {
    // console.log(e)
    const accountCategoryNodes: NodeListOf<HTMLSelectElement> = document.querySelectorAll('mwc-select[name="accountCategory"]');
    // console.log({ "accountCategoryNodes": accountCategoryNodes })
    accountCategoryNodes.forEach(accountCategoryNode => {
      // console.log({ "accountCategoryNode": accountCategoryNode })
      // console.log({ "accountCategoryNodes.currentValue": accountCategoryNodes.getAttribute("currentValue") })
      accountCategoryNode.onchange = async (event) => {
        // console.log({ event, })
        const show_other_account_category = this.querySelectorAll('[show_other_account_category]'),
          show_hide_class = "hidden";
        if (accountCategoryNode.value === "-1000") {
          show_other_account_category.forEach(node => {
            node.classList.remove(show_hide_class);
          });
        } else {
          show_other_account_category.forEach(node => {
            node.classList.add(show_hide_class);
          });
        }
      };
    });
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

  private async getGenders() {
    const _networkResponse = await GET_GenericGender<GenericGenderInfo_I>();
    // console.log({_networkResponse});
    
    let __genders: GenericGenderInfo_I[] = [];

    if (_networkResponse === null) {
      __genders.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: GenericGenderInfo_I[] = data.map(value => {
          return GenericGenderInfo_S(value)
        });
        // console.log({DATA});
        __genders = DATA;
      }
    }

    const new_data: Array<GenericGenderInfo_I> = [];
    new_data.push(...this._genders, ...__genders);
    this._genders = new_data;
  }

  private async getClientSubscriptionMembershipSize() {
    const _networkResponse = await GET_ClientSubsciptionMembershipSize<ClientSubscriptionMembershipSizeModel>(null, "?client=0");
    // console.log({_networkResponse});
    
    let __membershipSizes: ClientSubscriptionMembershipSizeModel[] = [];

    if (_networkResponse === null) {
      __membershipSizes.push({ id: 0, info: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: ClientSubscriptionMembershipSizeModel[] = data.map(value => {
          return csmsmConvert.toClientSubscriptionMembershipSizeModel(JSON.stringify(value))
        });
        // console.log({DATA});
        __membershipSizes = DATA;
      }
    }

    const new_data: Array<ClientSubscriptionMembershipSizeModel> = [];
    new_data.push(...this._membershipSizes, ...__membershipSizes);
    this._membershipSizes = new_data;
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

  private async getClientAccountCategory() {
    const _networkResponse = await GET_ClientAccountCategory<ClientAccountCategoryModel>();
    // console.log({_networkResponse});
    
    let __accountCategories: ClientAccountCategoryModel[] = [
      {category: "Select Account Type"}
    ];

    if (_networkResponse === null) {
      __accountCategories.push({ id: 0, category: "**NOT FOUND**",});
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: ClientAccountCategoryModel[] = data.map(value => {
          return cacmConvert.toClientAccountCategoryModel(JSON.stringify(value))
        });
        DATA.push({ category: "Other", id: -1000 });
        // console.log({DATA});
        __accountCategories = [...__accountCategories, ...DATA];
        // console.log({DATA, __accountCategories});
      }
    }
    const new_data: Array<ClientAccountCategoryModel> = [];
    new_data.push(...this._accountCategories, ...__accountCategories);
    this._accountCategories = new_data;
    // console.log({ "this._accountCategories": this._accountCategories });
    // this._accountCategories = __accountCategories
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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    await POST_ClientRegister();
  }

  createRenderRoot() {
    return this;
  }
}
