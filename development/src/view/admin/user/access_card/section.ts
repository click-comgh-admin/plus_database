import { ClientPageAccessModel } from '@@addons/interfaces/clients/users/page_access';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import '@material/mwc-icon'
import './tooltip';
import './inputs';
import { ClientUserPageAccessModel } from '@@addons/interfaces/clients/users/page_access/user_access';


@customElement("client-user-access-card-section")
export class ClientUserAccessCardSection extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  public isActive: boolean = false;

  @property({ type: Array })
  public module_access?: Array<ClientPageAccessModel> = null;

  @property({ type: Array })
  public user_access?: Array<ClientUserPageAccessModel> = null;

  @property({ type: String })
  private sectionButtonIcon: string = "arrow_downward";

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
    // console.log({"this.module_access": this.module_access});
    // console.log({"this.sectionButtonIcon": this.sectionButtonIcon});
    
    
    return html`
      <button class="${this.viewButtonClass(false)}" type="button" @click="${this.access_card_section_btn_action}" access_card_section_btn="${this.moduleId}">
        <h2 class="flex justify-between">
          ${this.moduleName} 
          <client-user-access-card-section-tooltip content="${this.moduleContent}"></client-user-access-card-section-tooltip>
        </h2>
        <div section-button-icon="${this.moduleId}"><mwc-icon>${this.sectionButtonIcon}</mwc-icon></div>
      </button>
      <div class="p-0 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg border-gray-200 dark:border-gray-700 border-b-2 w-full" access_card_section_content="${this.moduleId}" hidden="">
        <div class="mdc-data-table w-full" mdc-data-table="data-table">
          <div class="mdc-data-table__table-container">
            <table class="mdc-data-table__table" aria-label="New Meeting Member">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Page(s)</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <mwc-icon>tune</mwc-icon>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                ${this.module_access.map((pageAccess, i) => {
                  let access_id: string = "access_" + pageAccess.moduleId + "_" + i;
                  if (this.isActive === true) {
                    access_id = "pageId_" + pageAccess.moduleId + "_" + i;
                  }

                  return html`
                    <tr class="mdc-data-table__row">
                      <th class="mdc-data-table__cell" scope="row">
                        <div class="flex items-center">
                          <label class="whitespace-pre-wrap" for="${access_id}">${pageAccess.page}</label>
                        </div>
                      </th>
                      <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
                        <client-user-access-card-section-inputs ?isActive="${this.isActive}" input_index="${i}" .pageAccess="${[pageAccess]}" .user_access="${this.user_access}"></client-user-access-card-section-inputs>
                      </td>
                    </tr>
                  `;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }
  
  private access_card_section_btn_action(e: Event) {
    e.preventDefault();
    // console.log({e});
    

    const toggler = {
      activeButton: (button: HTMLButtonElement, moduleID: number) => {
        if (this.moduleId === moduleID) {
          button.className = this.viewButtonClass(true);
          
          button.lastElementChild.innerHTML = `<mwc-icon>arrow_upward</mwc-icon>`;
          // section-button-icon
        }
      },
      inactiveButtons: (button: HTMLButtonElement) => {
        button.className = this.viewButtonClass(false);
        button.lastElementChild.innerHTML = `<mwc-icon>arrow_downward</mwc-icon>`;
      },
      showContent: (moduleID: number) => {
        if (this.moduleId === moduleID) {
          document.querySelectorAll('div[access_card_section_content="'+moduleID+'"]').forEach((div: HTMLDivElement) => {
            div.removeAttribute("hidden");
          });
        }
      },
      hideAllContents: () => {
        document.querySelectorAll('div[access_card_section_content]').forEach((div: HTMLDivElement) => {
          if (!div.hasAttribute('hidden')) {
            div.setAttribute("hidden", "");
          }
        });
      }
    }
    
    document.querySelectorAll('button[access_card_section_btn]').forEach((button: HTMLButtonElement) => {
      // console.log({button});
      
      const _module_id = button.getAttribute('access_card_section_btn'),
        module_id = Number.isNaN(_module_id) ? -1 : Number(_module_id); // used '-1' instead of '0' for fallback because this.moduleId also fallsback to '0', this way in an unexpected senario they never match...
      
      toggler.inactiveButtons(button);
      toggler.hideAllContents();

      setTimeout(() => {
        toggler.activeButton(button, module_id);
        toggler.showContent(module_id);
      }, 100);
      
    });

  }

  private viewButtonClass(selected: boolean) {
    if (selected) {
      this.sectionButtonIcon = "arrow_upward";
      return 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-3 px-3 text-left font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white border-b-2';
    } else {
      this.sectionButtonIcon = "arrow_downward";
      return 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-3 px-3 text-left font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800 border-b-2';
    }
  }
  
  private get moduleId() { 
    if (this.module_access?.length > 0) {
      return this.module_access[0].moduleId;
    }
    return 0;
  }
  
  private get moduleName() { 
    if (this.module_access?.length > 0) {
      return this.module_access[0].moduleInfo.module;
    }
    return `Not Found!`;
  }
  
  private get moduleContent() { 
    if (this.module_access?.length > 0) {
      return this.module_access[0].moduleInfo.description;
    }
    return `Not Found!`;
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
