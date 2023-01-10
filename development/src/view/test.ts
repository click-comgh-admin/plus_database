import '@material/mwc-checkbox'


import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('test-sd')
export class TestSs extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <mwc-checkbox></mwc-checkbox>
    `;
  }
}
