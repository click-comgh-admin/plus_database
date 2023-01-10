import "../../../../assets/styles/views/home/dashboard.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';
import "@@addons/widgets/form/new/select";

type filterSelectType = { id: number|""; name: string; isSelected: "true" | "false"; selected: boolean; };
@customElement("pdb-membership-select-member-type")
export class PdbMembershipSelectMemberType extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public material: "true" | "false" = "true";

  @property({ type: Number })
  public defaultValue: number = null;

  @property({ type: Array })
  public defaultValues: Array<number> = [];

  @property({ type: Array })
  public setDefaultValues: Array<number> = null;

  @property({ type: Number })
  public selectedCategory: number = null;

  @property({ type: Boolean })
  public multiple: boolean = false;

  @property({ type: Boolean })
  public required: boolean = false;

  @property({ type: String })
  public label: string = "";

  @property({ type: String })
  public name: string = "";

  @property({ type: String })
  public id: string = "";

  @property({ type: String })
  public tag_class: string = "";

  @property({ type: String })
  public css_style: string = "";

  @property({ type: Array })
  private _memberCategories: GroupingsMemberCategories_I[] = [];

  async connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      if (!Array.isArray(this.setDefaultValues)) {
        this.setDefaultValues = [];
      }
      if (this.defaultValue !== null) {
        if (!this.setDefaultValues.includes(this.defaultValue)) {
          this.setDefaultValues.push(this.defaultValue);
        }
      }
      
      this.defaultValues.forEach(defaultValue => {
        if (!this.setDefaultValues.includes(defaultValue)) {
          this.setDefaultValues.push(defaultValue);
        }
      });
  
      // console.log({"this.setDefaultValues": this.setDefaultValues});
      // console.log({"this.defaultValue": this.defaultValue});
      // console.log({"this.defaultValues": this.defaultValues});
    }, 100);
    
    
    await this.getMemberCategories();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (this.material === "true") {
      return html`
        ${this.materialSelectField}
      `;
    } else {
      return html`
        ${this.selectInputField}
      `;
      // return html`
      //   ${this.selectField}
      // `;      
    }
  }

  private get materialSelectField() {
    if (this.setDefaultValues?.length < 1) {
      return html`
        <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
          <mwc-list-item value="0">${this.label}</mwc-list-item>
          ${this._memberCategories.map((value) => {
            return html`<mwc-list-item value="${value.id}">${value.category}</mwc-list-item>`;
          })}
        </mwc-select>
      `;
    } else {
      return html`
      <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
        <mwc-list-item value="0">${this.label}</mwc-list-item>
        ${this._memberCategories.map((value) => {
          let thisIsSelected = false;
          this.setDefaultValues.forEach(defaultValue => {
            if (defaultValue === value.id) {
              thisIsSelected = true;
            }
          });
          if (thisIsSelected) {
            return html`<mwc-list-item value="${value.id}" selected>${value.category}</mwc-list-item>`;
          } else {
            return html`<mwc-list-item value="${value.id}">${value.category}</mwc-list-item>`;
          }
        })}
      </mwc-select>
    `;
    }
  }

  private get selectInputField() {
    let options: filterSelectType[] = [{id: 0, name: this.label, isSelected: "false", selected: false}];

    // console.log({"this._memberCategories": this._memberCategories, "this.setDefaultValues": this.setDefaultValues});
    this._memberCategories.forEach(_memberCategory => {
      let thisIsSelected = false;
      this.setDefaultValues.forEach(defaultValue => {
        // console.log({defaultValue, "_memberCategory.id": _memberCategory.id});
        if (defaultValue === _memberCategory.id) {
          thisIsSelected = true;
        }
      });

      // console.log({thisIsSelected});
      
      let isSelected: boolean = false,
      isSelectedAlt: "true" | "false" = "false";
      if (thisIsSelected) {
        isSelected = true;
        isSelectedAlt = "true";
      }
      const option: filterSelectType = {
        id: _memberCategory.id, name: _memberCategory.category, isSelected: isSelectedAlt, selected: isSelected,
      };
    
      if (!options.includes(option)) {
        options.push(option);
      }
    });

    // console.log({options});
    
    
    
    let _html = html`
      <select-input name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}"
        .options="${options}" outlined ?required="${this.required}" ?multiple="${this.multiple}">
      </select-input>
    `;
    return html`${_html}`
  }

  private get selectField() {
    let _html = html``;
    if (this.setDefaultValues!.length < 1) {
      _html = html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((value) => {
            return html`<option value="${value.id}">${value.category}</option>`;
          })}
        </select>
      `;
    } else {
      _html = html`
        <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}" ?multiple="${this.multiple}">
          <option value="0">${this.label}</option>
          ${this._memberCategories.map((value) => {
          let thisIsSelected = false;
          this.setDefaultValues.forEach(defaultValue => {
            if (defaultValue === value.id) {
              thisIsSelected = true;
            }
          });
          if (thisIsSelected) {
              return html`<option value="${value.id}" selected>${value.category}</option>`;
            } else {
              return html`<option value="${value.id}">${value.category}</option>`;
            }
          })}
        </select>
      `;
    }
    return html`
      <div class="main_class">
				<div class="form-group">
					<div class="input-group mb-4">
						<div class="input-group-prepend" icon_id="">
							<span class="input-group-text px-2">
								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
							</span>
						</div>
						${_html}
					</div>
				</div>
			</div>
    `
  }

  firstUpdated() { }

  private async getMemberCategories() {
    const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategories_I>();
    let __memberCategories: GroupingsMemberCategories_I[] = [];

    if (_networkResponse === null) {
      __memberCategories.push({ id: 0, category: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: GroupingsMemberCategories_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __memberCategories = DATA;
      }
    }
    const new_data: Array<GroupingsMemberCategories_I> = [];
    new_data.push(...this._memberCategories, ...__memberCategories);
    this._memberCategories = new_data;
  }

  private changeAction(changeActionEvent: { target: { selected: boolean; value: string; }; currentTarget: { selected: boolean; value: string; }; }) {
    // console.log({changeActionEvent});
    this.selectedCategory = Number.isNaN(changeActionEvent.currentTarget.value)? 0: Number(changeActionEvent.currentTarget.value);
  }

  createRenderRoot() {
    return this;
  }
}
