import '@@assets/styles/views/tailwind-output/loading_placeholder.scss';
import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../assets/styles/views/widget/alert/alert.scss';


@customElement('alert-card')
export class AlertCard extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  public loading?: boolean = false;

  @property({ type: Boolean })
  public success?: boolean = false;

  @property({ type: Boolean })
  public info?: boolean = false;

  @property({ type: Boolean })
  public warning?: boolean = false;

  @property({ type: Boolean })
  public danger?: boolean = false;

  @property({ type: Boolean })
  public default?: boolean = false;

  @property({ type: Boolean })
  public primary?: boolean = false;

  @property({ type: String })
  public extra_class?: string = "";

  public header?: TemplateResult<1> = null;

  public content?: TemplateResult<1> = null;

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
    if (this.loading) {
      return html`
        <div class="bg-white alert-box p-0 pr-2 mb-2">
          <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4 placeholder--load-wrapper">
              <div class="p-3 placeholder--activity">
                <i class="p-2"></i>
              </div>
            </div>
            <div class="ml-2 flex-1 placeholder--load-wrapper">
              <div class="placeholder--activity p-2"></div>
            </div>
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="alert-box">
          <div class="alert-container ${this.getClass} ${this.extra_class}">
            <aside class="${this.getClass}">
              <div class="padded">
                ${this.getIcon}
              </div>
            </aside>
            <div class="content">
              ${this.header !== null? html`<header class="header">${this.header}</header>`: nothing}
              ${this.content !== null? html`<main class="main">${this.content}</main>`: nothing}
            </div>
          </div>
        </div>
      `;
    }
  }

  private get getClass() {
    if (this.success) {
      return "success";
    }
    if (this.info) {
      return "info";
    }
    if (this.warning) {
      return "warning";
    }
    if (this.danger) {
      return "danger";
    }
    if (this.default) {
      return html`<mwc-icon></mwc-icon>`;
    }
    if (this.primary) {
      return "primary";
    }
  }

  private get getIcon() {
    if (this.success) {
      return html`<mwc-icon>check_circle_outline</mwc-icon>`;
    }
    if (this.info) {
      return html`<mwc-icon>notification_important</mwc-icon>`;
    }
    if (this.warning) {
      return html`<mwc-icon>warning</mwc-icon>`;
    }
    if (this.danger) {
      return html`<mwc-icon>error_outline</mwc-icon>`;
    }
    if (this.default) {
      return html`<mwc-icon>priority_high</mwc-icon>`;
    }
    if (this.primary) {
      return html`<mwc-icon>star_outline</mwc-icon>`;
    }

    return html`<mwc-icon>emoji_objects</mwc-icon>`;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
