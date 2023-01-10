import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../interfaces/datatables';
import "../../../assets/styles/views/datatable/main.scss";
// import * as $ from 'jquery'
import { CONSTANTS } from '@@addons/constants';

@customElement('datatables-new')
export class _DATATABLES_ extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private randomID1: number = Math.floor(Math.random() * 12345);

  @property({ type: Number })
  private randomID2: number = Math.floor(Math.random() * 678910);

  @property({ type: String })
  private ID: string = "datatable";

  @property({ type: Object })
  public datatable?: DataTables_Settings_I;

  @property({ type: Array })
  public dt_head?: DataTables_ColumnSettings_I[];

  @property({ type: Array })
  public dt_foot?: DataTables_ColumnSettings_I[];

  @property({ type: Array })
  public dt_body?: DataTables_ColumnSettings_I[][];

  private _init?: DataTables_Api_I<any>;

  public set init(value: DataTables_Api_I<any>,) {
    
    let oldVal = this._init;
    this._init = value;
    console.log("public set init", {oldVal, value});
    this.requestUpdate("init", oldVal);
  }

  public get init(): DataTables_Api_I<any> {
    return this._init;
  }

  @property()
  public ajaxHeader?: any;

  // public _ajaxHeader: any = null;

  // public set ajaxHeader(value: any) {
  //   this._ajaxHeader = value;
  //   this.requestUpdate();
  // }

  // public get ajaxHeader(): any {
  //   return this._ajaxHeader;
  // }

  connectedCallback() {
    super.connectedCallback();

    // console.log({"ajaxHeader": this.ajaxHeader})

    this.ID = this.randomID1 + "-" + this.ID + "-" + this.randomID2;
  }

  disconnectedCallback() { }
  static styles = [
    css`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `
  ];

  render() {
    // console.log({"this.ID": this.ID, "datatable": this.datatable});
    return html`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `;
  }

  private thead() {
    return html`
      ${this.dt_head.map(head => {
        // console.log({"headhead": head});
        
        return html`<th>${head.title}</th>`
      })}
    `;
  }

  private tbody() {
    return html`
      ${this.dt_body.map(row => {
        // console.log({"bodybody1": row});
        
        return html`<tr>${row.map(column => {
          // console.log({"bodybody2": column});
          
          return html`<td>${column.title}</td>`
        })}</tr>`
      })}
    `;
  }

  private tfoot() {
    return html`
    ${this.dt_foot.map(foot => {
      return html`<th>${foot.title}</th>`
    })}
    `;
  }

  firstUpdated() {
    const table = this.querySelector('[datatable="'+this.ID+'"]');
    
    if (typeof this.datatable.ajax === "object") {
      let AJAX = this.datatable.ajax;
      // console.log({ "typeof AJAX": typeof AJAX });
      AJAX.headers = {
        "Access-Control-Allow-Origin": "*/*",
        "Accept": "application/json, text/plain, */*"
      };
      let _headers = AJAX.headers;
      // for (const header in this.ajaxHeader) {
      //   // console.log({header})
      //   // @ts-ignore
      //   _headers[header] = this.ajaxHeader[header];
      // }
      // console.log({ "this.ajaxHeader": this.ajaxHeader })
      for (const key in this.ajaxHeader) {
        if (Object.prototype.hasOwnProperty.call(this.ajaxHeader, key)) {
          const element = this.ajaxHeader[key];
          _headers[key] = element;
        }
      }
      // console.log({ "_headers": _headers, $ })
      // for (const iterator of this.ajaxHeader) {
      //   // @ts-ignore
      //   _headers[iterator] = this.ajaxHeader.get(iterator);
      // }
      AJAX.headers = _headers;
      this.datatable.ajax = AJAX;
      // console.log({"this.datatable": this.datatable, "$": $})
    }
    // console.log({$, table, "this.datatable": this.datatable});
    
    // @ts-ignore
    $(table).DataTable(this.datatable);
  }

  createRenderRoot() {
    return this;
  }
}
