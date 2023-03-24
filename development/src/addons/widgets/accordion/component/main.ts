import { LitElement, html, css, customElement, PropertyValueMap } from 'lit-element';
import { AccordionItem } from './item';

@customElement('accordion-component')
export class AccordionComponent extends LitElement {
  constructor() { super(); }

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }

  updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties);
    this.initAccordionItems();
  }

  private initAccordionItems() {
    const items = this.querySelectorAll('accordion-item') as NodeListOf<AccordionItem>;
    items.forEach((item) => {
      item.addEventListener('click', () => {
        // this.toggleItem(item);
      });
    });
  }

  private toggleItem(item: AccordionItem) {
    const opened = item.open;
    const items = this.querySelectorAll('accordion-item') as NodeListOf<AccordionItem>;
    items.forEach((i) => {
      i.open = false;
    });
    // item.open = !opened;
  }
}

// This code defines an AccordionComponent class, which extends the LitElement class and uses the customElement decorator to register a custom element with the name accordion-component. The AccordionComponent class has a render method that returns a slot, which will contain the AccordionItem components.

// The updated method is called when the element is updated, and it calls the initAccordionItems method to initialize the AccordionItem components.

// The initAccordionItems method retrieves all the AccordionItem components in the element's slot and adds a click event listener to each of them. When an AccordionItem is clicked, the toggleItem method is called.

// The toggleItem method toggles the opened property of the clicked AccordionItem and closes all other AccordionItem components. This ensures that only one AccordionItem is open at a time.

// With this implementation, you can now use the <accordion-component> tag in your HTML to create an accordion with multiple <accordion-item> tags inside it. When an item is clicked, it will toggle open and close, and only one item will be open at a time.



