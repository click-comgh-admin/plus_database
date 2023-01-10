import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import '@material/mwc-icon'


@customElement("client-user-access-card-section-tooltip")
export class ClientUserAccessCardSectionTooltip extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public content: string = "-";

  @property({ type: String })
  private toolTipShowingClass: string = "invisible opacity-0";

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
      <div class="mx-2 relative">
        <div class="w-[fit-content]">
          <button type="button" @mouseenter="${this.hoverInTooltip}" @mouseleave="${this.hoverOutTooltip}">
            <mwc-icon>info</mwc-icon>
          </button>
        </div>
        <div tabindex="-1"
          class="absolute bottom-9 left-[-7rem] w-[19rem] z-10 inline-block rounded-lg py-2 px-3 text-sm font-medium shadow-sm transition-opacity duration-300 ${this.toolTipShowingClass} flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
          role="tooltip">
          <div class="relative z-20 w-full whitespace-pre-wrap">${this.content}</div>
          <div class="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700" style="bottom: -4px; left: 120px;">&nbsp;
          </div>
        </div>
      </div>
    `;
  }

  private hoverInTooltip(e: Event) {
    // console.log({"hoverInTooltip-e": e});
    this.toolTipShowingClass = "";
  }

  private hoverOutTooltip(e: Event) {
    // console.log({"hoverOutTooltip-e": e});
    this.toolTipShowingClass = "invisible opacity-0";
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
