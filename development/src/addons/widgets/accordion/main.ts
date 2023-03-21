import '@@assets/styles/views/tailwind-output/accordion.scss';
import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import './item';
import { AppAccordionItem } from './item';


@customElement("app-accordion")
export class Appaccordion extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public accordionName: string = "app-accordion";

  @property({ type: Array })
  public contents: Array<TemplateResult> = [];

  connectedCallback() {
    super.connectedCallback();
    
    // console.log({"this.contents": this.contents});
    
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`<div class="my-2 w-100">
      ${this.contents.map((content) => {
        // console.log({"content.content": content})
        return html`${content}`;
      })}
    </div>`;
  }

  firstUpdated() {
    setTimeout(() => {
      if (document.readyState == "complete") this.toggler();
    }, 1000);
  }

  toggler() {
    // console.log({"`app-accordion-${this.accordionName}`": `app-accordion-${this.accordionName}`});
    
    var acc = document.getElementsByClassName(`app-accordion-${this.accordionName}`);
    console.log({acc});
    
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {        
        this.classList.toggle("app-accordion-active");
        var panel = this.nextElementSibling;
        console.log({"this.classList": this.classList, panel});
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          // panel.style.maxHeight = "100%";
        }
        // if (panel.style.display === "block") {
        //   panel.style.display = "none";
        // } else {
        //   panel.style.display = "block";
        // }
      });
    }
  }

  get items() {
    
    return html``;
  }

  createRenderRoot() {
    return this;
  }
}
