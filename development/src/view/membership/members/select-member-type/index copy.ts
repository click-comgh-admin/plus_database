// import "../../../../assets/styles/views/home/dashboard.scss";
// import { LitElement, html, css } from 'lit';
// import { customElement, property, query, queryAll } from 'lit/decorators.js';
// import { GroupingsMemberCategories_I } from '@@addons/interfaces/members/groupings/member_categories';
// import { GET_MemberGroupingsMemberCategories } from '@@addons/network/members/groupings/member_categories';

// @customElement("pdb-membership-select-member-type")
// export class PdbMembershipSelectMemberType extends LitElement {
//   constructor() { super(); }

//   @property({ type: String })
//   public material: "true" | "false" = "true";

//   @property({ type: Number })
//   public defaultValue: number = null;

//   @property({ type: Number })
//   public selectedCategory: number = null;

//   @property({ type: Boolean })
//   public multiple: boolean = false;

//   @property({ type: String })
//   public label: string = "";

//   @property({ type: String })
//   public name: string = "";

//   @property({ type: String })
//   public id: string = "";

//   @property({ type: String })
//   public tag_class: string = "";

//   @property({ type: String })
//   public css_style: string = "";

//   @property({ type: Array })
//   private _memberCategories: GroupingsMemberCategories_I[] = [];

//   async connectedCallback() {
//     super.connectedCallback();

//     await this.getMemberCategories();
//   }

//   disconnectedCallback() { }
//   static styles = [
//     css`
//    :host { display: block; }
//   `
//   ];

//   render() {
//     if (this.material === "true") {
//       return html`
//         ${this.materialSelectField}
//       `;
//     } else {
//       return html`
//         ${this.selectField}
//       `;      
//     }
//   }

//   private get materialSelectField() {
//     if (this.defaultValue === null) {
//     return html`
//       <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
//         <mwc-list-item value="0">${this.label}</mwc-list-item>
//         ${this._memberCategories.map((value) => {
//           return html`<mwc-list-item value="${value.id}">${value.category}</mwc-list-item>`;
//         })}
//       </mwc-select>
//     `;
//     } else {
//       return html`
//       <mwc-select name="${this.name}" class="w-full ${this.tag_class}" id="${this.id}" label="${this.label}" outlined required @change="${this.changeAction}" ?multiple="${this.multiple}">
//         <mwc-list-item value="0">${this.label}</mwc-list-item>
//         ${this._memberCategories.map((value) => {
//           if (this.defaultValue === value.id) {
//             return html`<mwc-list-item value="${value.id}" selected>${value.category}</mwc-list-item>`;
//           } else {
//             return html`<mwc-list-item value="${value.id}">${value.category}</mwc-list-item>`;
//           }
//         })}
//       </mwc-select>
//     `;
//     }
//   }

//   private get selectField() {
//     let _html = html``;
//     if (this.defaultValue === null) {
//     _html = html`
//       <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}">
// 				<option value="0">${this.label}</option>
//         ${this._memberCategories.map((value) => {
//           return html`<option value="${value.id}">${value.category}</option>`;
//         })}
// 			</select>
//     `;
//     } else {
//       _html = html`
//         <select class="${this.tag_class}" name="${this.name}" id="${this.id}" style="${this.css_style}" @change="${this.changeAction}">
//           <option value="0">${this.label}</option>
//           ${this._memberCategories.map((value) => {
//             if (this.defaultValue === value.id) {
//               return html`<option value="${value.id}" selected>${value.category}</option>`;
//             } else {
//               return html`<option value="${value.id}">${value.category}</option>`;
//             }
//           })}
//         </select>
//       `;
//     }
//     return html`
//       <div class="main_class">
// 				<div class="form-group">
// 					<div class="input-group mb-4">
// 						<div class="input-group-prepend" icon_id="">
// 							<span class="input-group-text px-2">
// 								<i class="pe-7s-leaf icon-gradient bg-warm-flame text-success font-weight-bolder "></i>
// 							</span>
// 						</div>
// 						${_html}
// 					</div>
// 				</div>
// 			</div>
//     `
//   }

//   firstUpdated() { }

//   private async getMemberCategories() {
//     const _networkResponse = await GET_MemberGroupingsMemberCategories<GroupingsMemberCategories_I>();
//     let __memberCategories: GroupingsMemberCategories_I[] = [];

//     if (_networkResponse === null) {
//       __memberCategories.push({ id: 0, category: "**NOT FOUND**" });
//     } else {
//       if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
//         const DATA: GroupingsMemberCategories_I[] = _networkResponse.response.data;
//         // console.log({DATA});
//         __memberCategories = DATA;
//       }
//     }
//     this._memberCategories = [...this._memberCategories, ...__memberCategories];
//   }

//   private changeAction(changeActionEvent: { target: { selected: boolean; value: string; }; currentTarget: { selected: boolean; value: string; }; }) {
//     // console.log({changeActionEvent});
//     this.selectedCategory = Number.isNaN(changeActionEvent.currentTarget.value)? 0: Number(changeActionEvent.currentTarget.value);
//   }

//   createRenderRoot() {
//     return this;
//   }
// }
