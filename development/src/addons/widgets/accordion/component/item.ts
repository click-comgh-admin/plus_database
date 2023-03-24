import { LitElement, html, css } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { MDCRipple } from '@material/ripple';

@customElement('accordion-item')
export class AccordionItem extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public title = ``;

  @property({ type: Boolean })
  public open = false;

  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      if (document.readyState == "complete") new MDCRipple(this.shadowRoot.querySelector('.accordion-item-header'));
    }, 1000);
  }

  static styles = css`
    .accordion-item {
      border: 2px solid #ddd;
      border-top: none;
      padding: 8px;
      box-sizing: border-box;
      cursor: pointer;
      user-select: none;
      overflow: hidden;
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251 / var(--tw-bg-opacity));
    }
    .accordion-item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .accordion-item-header-title {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25rem;
    }
    .accordion-item-header-icon {
      margin-right: 8px;
      transition: transform 0.2s ease-in-out;
    }
    .accordion-item-header-icon.open {
      transform: rotate(180deg);
    }
    .accordion-item-content {
      padding: 12px;
      margin-top: 10px;
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      border-width: 1px;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    }
  `;

  render() {
    return html`
      <div class="accordion-item"
        style=${styleMap({ borderBottom: this.open ? 'none' : '1px solid #ddd' })}>
        <div class="accordion-item-header" @click=${this.toggleAccordion}>
          <span class="accordion-item-header-title">${this.title}</span>
          <span class="accordion-item-header-icon ${this.open ? 'open' : ''}">${this.open ? '-' : '+'}</span>
        </div>
        ${this.open ? html`<div class="accordion-item-content">
          <slot></slot>
        </div>` : ''}
      </div>
    `;
  }

  toggleAccordion() {
    // console.log({ "toggling-start": this.open });

    setTimeout(() => {
      this.open = !this.open;
    }, 100);
    // console.log({ "toggling-end": this.open });
  }
}

// Explanation:

// We import LitElement, html, css, styleMap from lit-element, and MDCRipple from @material/ripple.
// We define the AccordionItem class that extends LitElement.
// We define the styles static property to define the CSS styles for the accordion item.
// We define the properties static method to define the title and open properties of the accordion item.
// We define the title and open properties with default values.
// We override the connectedCallback method to initialize the Material Web Components ripple effect on the accordion header.
// We define the render method to render the accordion item using LitHTML template literals.
// We define the toggleAccordion method to toggle the open property when the accordion header is clicked.
// This component creates an accordion item that can be opened and closed by clicking on the header. The title property sets the title of the accordion item, and the content of the item is defined within the slot element. When the accordion is opened, the content is displayed, and when it is closed, the content is hidden. The Material Web Components ripple effect is applied to the accordion header to provide visual feedback when it is clicked.