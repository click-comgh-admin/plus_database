import '@@addons/widgets/form/new/file-select';
import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';


@customElement("pdb-membership-update-view-photo")
export class PdbMembershipUpdateViewPhoto extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  public headTitle: string;

  @property({ type: String })
  public currentImage: string;

  @property({ type: Number })
  public inputId: number;

  @property({ type: String })
  public inputName: string;

  @property({ type: String })
  public inputLabel: string = "";

  @property({ type: Boolean })
  public inputRequired?: boolean;

  async connectedCallback() {
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
      <div class="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
        <div class="flex h-full flex-col justify-center gap-4 p-3">
          <h5 class="text-xl font-medium text-gray-500 dark:text-gray-400">${this.headTitle}</h5>
          <div fileSelectorPreviewer class="h-[400px] flex justify-center">
            <img class="object-contain bg-contain" src="${this.currentImage}">
          </div>
        </div>
        <div class="flex h-full flex-col justify-center gap-4 p-3 border border-gray-200">
          <file-input id="${this.inputId}" name="${this.inputName}" label="${this.inputLabel}" accept="image/jpg,image/jpeg,image/png"
            ?required="${this.inputRequired}" ?hasLabel="${true}" fileSelectorInput></file-input>
        </div>
      </div>
    `;
  }

  updateImageAction() {
    const _this = this; 
    document.querySelectorAll('[fileSelectorInput]').forEach((input) => {
      input.addEventListener("change", (evt) => {
        console.log({input});
        
        // @ts-ignore
        var fileUrl = window.URL.createObjectURL(input.fileSelector['files'][0]);

        document.querySelectorAll('[fileSelectorPreviewer]').forEach((previewer) => {
          previewer.innerHTML = `<img class="object-contain bg-contain h-[400px] flex justify-center" src="${fileUrl}">`;
        });
      });
    });
  }

  firstUpdated() {
    this.updateImageAction();
  }

  createRenderRoot() {
    return this;
  }
}
