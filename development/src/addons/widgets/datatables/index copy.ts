// import { LitElement, html, css, TemplateResult } from 'lit';
// import { customElement, property } from 'lit/decorators.js'


// @customElement('datatables-new')
// export class _DATATABLES_ extends LitElement {
//   constructor() { super(); }

//   @property({ type: Object })
//   private _property?: any;

//   connectedCallback() {
//     super.connectedCallback();
//   }

//   disconnectedCallback() { }
//   static styles = [
//     css`
//    :host { display: block; }
//   `
//   ];

//   render() {
//     // console.log({"theadSlot()": this.theadSlot()});
//     // console.log({"tbodySlot()": this.tbodySlot()});
    
//     return html`
//     <table datatable="myStaticDatatable">
//       <thead>
//       </thead>
//       <tbody>
//       </tbody>
//     </table>
//   `;
//   }

//   private theadSlot(): TemplateResult {
//     // console.log({'this': this, 'this.renderRoot':this.renderRoot});
    
//     const slots:NodeListOf<HTMLSlotElement> = this.renderRoot.querySelectorAll('thead');
//     // console.log({ slots });
//     let _slot: HTMLSlotElement;
//     slots.forEach(slot => {
//       if (slot.name === "thead") {
//         _slot = slot;
//       }
//     });
//     return html`${_slot}`;
//   }

//   private tbodySlot(): TemplateResult {
//     // console.log({'this': this, 'this.renderRoot':this.renderRoot});
    
//     const slots:NodeListOf<HTMLSlotElement> = this.renderRoot.querySelectorAll('tbody');
//     // console.log({ slots });
//     let _slot: HTMLSlotElement;
//     slots.forEach(slot => {
//       if (slot.name === "tbody") {
//         _slot = slot;
//       }
//     });
//     return html`${_slot}`;
//   }

//   private thead(): TemplateResult {
//     const thead = this.querySelector('thead');
//     // console.log({ thead });

//     return html`${thead.innerHTML}`;
//   }

//   private tbody(): TemplateResult {
//     const tbody = this.querySelector('tbody');
//     // console.log({ tbody });

//     return html`${tbody.innerHTML}`;
//   }

//   firstUpdated() {
//     const table = this.querySelector('[datatable="myStaticDatatable"]');
//     $(table).DataTable({
//       'order': [[1, 'desc']],
//       'processing': false,
//       'serverSide': true,
//       'ajax': {
//         url: "data_url",
//         dataSrc: 'data'
//       },
//       columns: [
//         {
//           data: 'id',
//           orderable: true
//         },
//         {
//           data: null,
//           render: function (data, type, row) {
//             return `${row.name}<br>${row.address} ${row.state} ${row.zip_code}`;
//           },
//           orderable: true
//         },
//         {
//           data: null,
//           render: function (data, type, row) {
//             return `${row.client_name}<br/>${row.client_phone}<br/>${row.client_email}`
//           },
//           orderable: false
//         },
//         {
//           data: 'amount',
//           orderable: false
//         },
//         {
//           data: 'status',
//           orderable: false
//         }

//       ]
//     });
//   }

//   createRenderRoot() {
//     return this;
//   }
// }
