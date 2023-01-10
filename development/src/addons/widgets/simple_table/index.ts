import { TableBody_dt } from '@@addons/interfaces/data-table/body';
import { TableHeader_dt } from '@@addons/interfaces/data-table/header';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MDCDataTable } from '@material/data-table';
import '../../../assets/styles/views/widget/simple-table/main.scss';


@customElement('simple-table')
export class SimpleTable extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private randomID1: number = Math.floor(Math.random() * 12345);

  @property({ type: Number })
  private randomID2: number = Math.floor(Math.random() * 678910);

  @property({ type: String })
  private ID: string = "datatable";

  @property({ type: String })
  public hasPreLine: 'true'|'false' = 'true';

  @property({ type: Array })
  public table_head?: TableHeader_dt[];

  // @property({ type: Array })
  // public table_foot?: TableHeader_dt[];

  @property({ type: Array })
  public table_body?: TableBody_dt[];

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
    // <tfoot>
    //           <tr>
    //             ${this.tfoot}
    //           </tr>
    //         </tfoot>
    return html`
      <div class="mdc-data-table w-full mb-4" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Option">
            <thead>
              <tr class="mdc-data-table__header-row">
                ${this.thead}
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tbody}
            </tbody>
            
          </table>
        </div>
      </div>
    `;
  }

  private get thead() {
    return html`
      ${this.table_head.map(head => {
        // console.log({"headhead": head});
        
        return html`
          <th class="mdc-data-table__header-cell ${head.class} ${head.centered? '!text-center': ''} ${head.right? '!text-right': ''}" role="columnheader" scope="col" aria-sort="${head.sort}">
            <div class="mdc-data-table__header-cell-wrapper">
              <div class="mdc-data-table__header-cell-label ${head.bold? " font-semibold": ''}">
                <span class="whitespace-pre-line">${head.title}</span>
              </div>
              <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
            </div>
          </th>
        `;
      })}
    `;
  }

  private get tbody() {
    return html`
      ${this.table_body.map(row => {
        // console.log({"bodybody1": row});
        
        return html`
          <tr class="mdc-data-table__row">
            ${row.row.map((col, i) => {
              const _class = col.class;
              const _hasPreLine = this.hasPreLine === 'true' ? "whitespace-pre-line": "";
              let __numeric = col.numeric === null ? false : col.numeric;
              let _numeric = __numeric === false ? "" : "mdc-data-table__cell--numeric";
              if (i === 0) {
                return html`
                  <th class="mdc-data-table__cell !py-1 ${_numeric} ${_class}" scope="row">
                    <span class="${_hasPreLine}">${col.content}</span>
                  </th>
                `;
              } else {
                return html`
                  <td class="mdc-data-table__cell ${_hasPreLine} !py-1 ${_numeric} ${_class}" scope="row">
                    <span class="${_hasPreLine}">${col.content}</span>
                  </td>
                `;
              }
            })}
          </tr>
        `;
      })}
    `;
  }

  // private get tfoot() {
  //   return html`
  //     ${this.table_foot.map(foot => {
  //       // console.log({"footfoot": foot});
        
  //       return html`
  //         <th class="mdc-data-table__footer-cell ${foot.class} ${foot.centered? '!text-center': ''} ${foot.right? '!text-right': ''}" role="columnheader" scope="col" aria-sort="${foot.sort}">
  //           <div class="mdc-data-table__footer-cell-wrapper">
  //             <div class="mdc-data-table__footer-cell-label ${foot.bold? " font-semibold": ''}">
  //               ${foot.title}
  //             </div>
  //             <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
  //           </div>
  //         </th>
  //       `;
  //     })}
  //   `;
  // }

  firstUpdated() { 
    this.querySelectorAll('[mdc-data-table="data-table"]').forEach((selector) => {
      const dataTable = new MDCDataTable(selector);

      // console.log({ dataTable: dataTable })
    });
  }

  createRenderRoot() {
    return this;
  }
}
