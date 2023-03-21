import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'


@customElement("app-accordion-item")
export class AppAccordionItem extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public accordion_class_name: string = "-";

  @property({ type: String })
  public buttonHtml = html``;
  
  @property({ type: String })
  public contentHtml = html``;

  connectedCallback() {
    super.connectedCallback();

    // console.log({"this.buttonHtml": this.buttonHtml});
    // console.log({"this.contentHtml": this.contentHtml});
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <button type="button" class="app-accordion app-accordion-button app-accordion-${this.accordion_class_name}">
        <div class="flex justify-between">${this.buttonHtml} <span style="transform: rotate(180deg);">^</span></div>
      </button>
      <div class="app-accordion-panel">${this.contentHtml}</div>
    `;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
