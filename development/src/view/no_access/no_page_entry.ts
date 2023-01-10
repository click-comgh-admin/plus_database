import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import '@@assets/styles/views/tailwind-output/unaccessible_pages.scss';
import { CONSTANTS } from '@@addons/constants';


@customElement("no-page-entry-component")
export class NoPageEntryComponent extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private _url?: string = "#!";

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
      <!-- Container for demo purpose -->
    <div class="my-24 mx-auto">

      <!-- Section: Design Block -->
      <section class="mb-32 background-radial-gradient">
        <div class="px-6 py-12 md:px-12 text-center lg:text-left">
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="mt-12 lg:mt-0">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">
                  Sorry, <br />
                  <span style="color: hsl(47deg 87% 70%);">You Do Not Have Access To This Page</span>
                </h1>
              </div>
              <div class="mb-12 lg:mb-0 h-52 md:h-96">
                <img src="${CONSTANTS.URLS.PDB_CLIENT}/assets/images/not-accessible/no-entry.jpg" class="w-full rounded-lg shadow-lg object-cover h-52 md:h-96" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->`;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
