import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-formfield';
import '@material/mwc-button';
import '../../../../assets/styles/views/widget/file_input/file_input.scss';


@customElement('file-input')
export class FileInput extends LitElement {

  @property({ type: String })
  public name: string = "";

  @property({ type: String })
  public label: string = "";

  @property({ type: String })
  public value: string = "1";

  @property({ type: String })
  public accept: string = "*";

  @property({ type: Number })
  private randomID: number = Math.floor(Math.random() * 12345);

  @property({ type: String })
  public id: string = this.id + "_" + this.randomID;

  @property({ type: Boolean })
  public required?: boolean;

  @property({ type: Boolean })
  public hasLabel?: boolean;

  @property({ type: Boolean })
  /** For multiple image selection */
  public multiple?: boolean;

  private fileSelector: HTMLInputElement;

  @property({ type: Number })
  public startNumber: number = 10;

  @property({ type: Number })
  public rowsPerPage: number = 10;

  @property({ type: Number })
  public totalShowing: number = 10;

  @property({ type: Boolean })
  private showSelectorLoaded?: boolean = false;

  styles() {
    return [
      css`
      #${Number(this.id)} {
        width: 1px !important;
        height: 1px !important;
        position: absolute !important;
      }
      `
    ];
  }
  connectedCallback() {
    super.connectedCallback();

    setInterval(() => {
      if (this.fileSelector === undefined) {
        // console.log({ "this.fileSelector": this.fileSelector });
        this.fileSelector = this.querySelector(`[type="file"][name="${this.name}"][id="${this.id}"]`);
      } else {
        this.showFileSelector();
      }
    });
  }

  render() {
    if (this.required) {
      if (this.multiple) {
        return html`
          <div class="form-input border">
            ${this.hasLabel? html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`: nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}[]" id="${this.id}" multiple required />
          </div>
        `;
      } else {
        return html`
          <div class="form-input border">
            ${this.hasLabel? html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}*</label>`: nothing}
            <input accept="${this.accept}" class="form-input" type="file" name="${this.name}" id="${this.id}" required />
          </div>
        `;
      }
    } else {
      if (this.multiple) {
        return html`
          <div class="form-input border">
            ${this.hasLabel? html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`: nothing}
            <input accept="${this.accept}" type="file" name="${this.name}[]" id="${this.id}" multiple />
          </div>
        `;
      } else {
        return html`
          <div class="form-input border">
            ${this.hasLabel? html`<label for="${this.id}" class="w-full text-sm pb-2 text-gray-500">${this.label}</label>`: nothing}
            <input accept="${this.accept}" type="file" name="${this.name}" id="${this.id}" />
          </div>
        `;
      }
    }
  }

  firstUpdated() {
  }

  private showFileSelector() {
    if (this.showSelectorLoaded === false) {
      this.showSelectorLoaded = true;

    }
  }

  createRenderRoot() {
    return this;
  }
}
