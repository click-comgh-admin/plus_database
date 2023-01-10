import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('link-button')
export class LinkButton extends LitElement {

  @property({ type: String })
  public aClass?: string;

  @property({ type: String })
  public bClass?: string;

  @property({ type: String })
  public icon?: string;

  @property({ type: String })
  public href?: string;

  @property({ type: String })
  public label?: string;

  @property({ type: String })
  public isBlockContent?: "true" | "false" = "true";

  @property({ type: Boolean })
  public raised?: boolean = false;
  
  render() {
    const _aClass = this.thisIsBlockContent('mdc-deprecated-list-item');
    const _bClass = this.thisIsBlockContent('mdc-deprecated-list-item__ripple');
    if (this.raised === true) {
      return html`
        <a class="${_aClass} ${this.aClass} no-underline hover:no-underline" href="${this.href}">
          <mwc-button class="${_bClass} mt-1 text-left ${this.bClass}" raised icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `;
    } else {
      return html`
        <a class="${_aClass} ${this.aClass}" href="${this.href}">
          <mwc-button class="${_bClass} mt-1 text-left ${this.bClass}" icon="${this.icon}"
            label="${this.label}">
          </mwc-button>
        </a>
      `;
    }
  }

  thisIsBlockContent(value: string) {
    return this.isBlockContent === "true" ? value : "";
  }

  createRenderRoot() {
    return this;
  }
}
