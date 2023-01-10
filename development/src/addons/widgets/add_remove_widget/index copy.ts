// import { LitElement, html, nothing, TemplateResult, } from 'lit';
// import { customElement, property, } from 'lit/decorators.js';
// import '@material/mwc-button';
// import '@material/mwc-icon-button';
// import '@material/mwc-select';
// import '@material/mwc-list';
// import '@material/mwc-dialog';
// import '@material/mwc-textfield';
// import { stringToHTML } from '@@addons/functions/stringToHTML';


// @customElement("multiple-widgets")
// export class MultipleWidgets extends LitElement {
//   constructor() { super(); }

//   @property({ type: Number })
//   public index?: number = 0;

//   // @property({ type: String })
//   // public widget?: string = '';

//   @property({ type: Object })
//   public widget?: TemplateResult<1> = html``;

//   @property({ type: Boolean })
//   public no_delete?: boolean = false;

//   @property({ type: Boolean })
//   public single?: boolean = false;

//   @property({ type: String })
//   public _single?: string = '[]';

//   async connectedCallback() {
//     super.connectedCallback();

//     // console.log({ "fetchTypes": this.fetchTypes });
//     if (this.single) {
//       this._single = '';
//     } else {
//       this._single = '[]';
//     }
//   }

//   disconnectedCallback() { }

//   render() {
//     return html`
//       <div class="container">
//         <header class="form-input-container">
//           ${this.no_delete ? nothing : html`
//             <mwc-icon-button icon="delete_forever" class="danger"
//               @click="${this.deleteQuestion}"></mwc-icon-button>`
//           }
//         </header>
//         <main>
//           ${this.widget}
//         </main>
//       </div>
//     `;
//   }

//   private deleteQuestion(e: { preventDefault: () => void; }) {
//     e.preventDefault();

//     this.remove();
//   }

//   async firstUpdated() {}

//   createRenderRoot() {
//     return this;
//   }
// }
