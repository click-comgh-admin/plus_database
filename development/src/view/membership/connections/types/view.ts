import { UserConnectionType_I, UserConnectionType_S } from '@@addons/interfaces/members/connections/types';
import { GET_UserConnectionType } from '@@addons/network/members/connections/types';
import { LitElement, html, css } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import "@material/mwc-icon-button";
import "../../../../assets/styles/views/home/dashboard.scss";
import { DELETE_UserConnectionType } from '@@addons/network/members/connections/types/delete';
import './edit';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { CONSTANTS } from '@@addons/constants';


@customElement("pdb-connections-types-view")
export class PdbConnectionsTypesView extends LitElement {
  constructor() { super(); }

  @property({ type: Array })
  private _connection_types: UserConnectionType_I[] = [];

  async connectedCallback() {
    super.connectedCallback();
    await this.getConnectionTypes();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    if (this._connection_types === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._connection_types === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;
    }

    return html`
      <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2" 
        href="${CONSTANTS.URLS.PDB_CLIENT}member/connections/add-connection-type" label="Add Connetion Type">
      </link-button>
      ${this.table}
    `;
  }

  private get table() {
    return html`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>#</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Member(s)</b>
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
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  private get tableBody() {

    const DATA = this._connection_types;
    // console.log({ "this._connection_types": this._connection_types });

    if (Array.isArray(DATA)) {
      return DATA.map(connection_type => {
        return html`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              #
            </th>
            <td class="mdc-data-table__cell" scope="row">
              <div class="flex flex-col whitespace-nowrap">
                <p class="ml-1">${connection_type.type}</p>
                <p class="ml-1">${connection_type.description}</p>
              </div>
            </td>
            <td class="mdc-data-table__cell mdc-data-table__cell--numeric !py-1" scope="row">
              <div class="whitespace-nowrap">
                <pdb-connections-types-edit class="mx-1" id="edit-con-${connection_type.id}" 
                  connection_type_id="${connection_type.id}" connection_type="${connection_type.type}"
                  connection_description="${connection_type.description}">
                </pdb-connections-types-edit>
                <mwc-icon-button class="ml-1 danger" icon="delete_forever" delete-this-item="${connection_type.id}" @click="${this.deleteConnectionType}"></mwc-icon-button>
              </div>
            </td>
          </tr>
        `;
      });
    }
    return html``;
  }

  firstUpdated() {}

  private async getConnectionTypes() {
    const _networkResponse = await GET_UserConnectionType<UserConnectionType_I>(null);

    let __connection_types: UserConnectionType_I[] = [];

    if (_networkResponse === null) {
      __connection_types.push({ id: 0, type: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: UserConnectionType_I[] = data.map(value => {
          return UserConnectionType_S(value)
        });
        // console.log({DATA});
        __connection_types = DATA;
      }
    }

    const new_data: Array<UserConnectionType_I> = [];
    new_data.push(...this._connection_types, ...__connection_types);
    this._connection_types = new_data;
  }

  async deleteConnectionType(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    
    // @ts-ignore
    const userConnectionId = Number(e.currentTarget.getAttribute('delete-this-item'));
    
    await DELETE_UserConnectionType(userConnectionId);
  }

  createRenderRoot() {
    return this;
  }
}
