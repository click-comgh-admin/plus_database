import { LitElement, html, css, TemplateResult, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../assets/styles/views/widget/alert/clickable.scss';
import "@@addons/widgets/buttons/link-buttons/link-button";


@customElement('clickable-card')
export class ClickableCard extends LitElement {
  constructor() { super(); }

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
  public url?: string;

  @property({ type: String })
  public icon: string;

  @property({ type: String })
  public title: string;

  @property({ type: String })
  public description: string;

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
    return html`
      <div class="clickable-box">
        <div class="clickable-container ${this.getClass}">
          <aside class="${this.getClass}">
            <div class="padded">
              ${this.getIcon}
            </div>
          </aside>
          <div class="content">
            <header class="header">
              ${this.title}
            </header>
            <main class="main">
              ${this.description}
            </main>
            ${this.url === null ? nothing : html`<footer class="footer">
              <link-button raised isblockcontent="true" aClass="info" bClass="info"
                href="${this.url}" icon="open_in_new" label="Open"></link-button>
            </footer>`}
          </div>
        </div>
      </div>
    `;
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
    return html`<mwc-icon class="icon">${this.icon}</mwc-icon>`;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
