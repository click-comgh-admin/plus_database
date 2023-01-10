import '@@assets/styles/views/attendance/setup/form.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, } from 'lit/decorators.js';
import "@material/mwc-button";
import "@material/mwc-textarea";
import "@material/mwc-textfield";
import "@material/mwc-select";
import '@@addons/widgets/form/new/select';
import { POST_UserConnectionAccount } from '@@addons/network/members/connections/accounts/post';
import { CONSTANTS } from '@@addons/constants';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { QueryOptions } from 'select2';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { UserConnectionType_I, UserConnectionType_S } from '@@addons/interfaces/members/connections/types';
import { GET_UserConnectionType } from '@@addons/network/members/connections/types';
import { MembershipUser_I, MembershipUser_S } from '@@addons/interfaces/members/user';


@customElement("pdb-connections-accounts-add")
export class PdbConnectionsAccountsAdd extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  private showing?: boolean = false;

  @property({ type: Number })
  private startSearchPage1: number = 0;

  @property({ type: Number })
  private startSearchPage2: number = 0;

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
    return html`
      ${this.show_form}
      ${/** this.toggle_showing_button */ "" }
    `;
  }

  private get show_form() {
    let ajaxHeader: {Authorization?: string} = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    // if (this.showing) {
      return html`
        <div class="">
          <div class="form-container">
            <div class=" !px-0">
              <div class="-row !px-0">
                <div class="-col-md-12">
                  <header class="header warning -col-md-12">
                    <label for="" class="label">
                      <mwc-icon class="icon">format_strikethrough</mwc-icon>
                      <h1 class="h1 !text-red-400">New Connection Type</h1>
                      <h3 class="h3">Create New Connection Type!</h3>
                    </label>
                  </header>
                  <form method="post" action="#" class="form mt-0" make-general-posts="user-connection-account">
                    <div class="container my-4">
                      <div class="row justify-center">

                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Member</h4>
                          <select-input class="w-100" id="memberId" name="memberId" label="Select Member"
                            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
                            .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
                            ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
                        </div>

                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Connection <span class="text-akwaaba-orange-light">Account to be connected</span></h4>
                          <select-input class="w-100" id="connectionId" name="connectionId" label="Select Connection"
                            .ajaxFetchProcessResponse="${this.processClientUserSearch2}" startSearchPage="${this.startSearchPage2}"
                            .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams2}"
                            ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
                        </div>
                        <div class="col-md-6 col-lg-6">
                          <h4 class="font-semibold my-2">Select Connection Type</h4>
                          <mwc-select name="type" class="w-full" id="type" label="Select Connection Type" outlined required>
                            <mwc-list-item value="0">Select Connection Type</mwc-list-item>
                            ${this._connection_types.map((value) => {
                              // console.log({ "schedule.type": schedule.type, "value.id": value.id });
                              return html`<mwc-list-item value="${value.id}">${value.type}</mwc-list-item>`;
                            })}
                          </mwc-select>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-md-12 col-lg-12">
                        <div class="form-input-container">
                          <mwc-button label="Add Connection" raised class="button" @click="${this.submitForm}">
                          </mwc-button>
                        </div>
        
                        <div class="flex form-input-container items-center text-center">
                          <hr class="border-gray-300 border-1 w-full rounded-md">
                          <label class="block font-medium text-sm text-gray-600 w-full">
                            Lets go digital...
                          </label>
                          <hr class="border-gray-300 border-1 w-full rounded-md">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    // } else {
    //   return nothing;
    // }
  }

  // private get toggle_showing_button() {
  //   if (this.showing) {
  //     return html`
  //       <mwc-button @click="${this.toggle_showing_button_action_hide}" class="button warning" raised label="Hide Add Form">
  //       </mwc-button>
  //     `;
  //   } else {
  //     return html`
  //       <mwc-button @click="${this.toggle_showing_button_action_show}" class="button success" raised label="Show Add Form">
  //       </mwc-button>
  //     `;
  //   }
  // }

  // private toggle_showing_button_action_show(e: any) {
  //   e.preventDefault();
  //   this.showing = true;
  // }

  // private toggle_showing_button_action_hide(e: any) {
  //   e.preventDefault();
  //   this.showing = false;
  // }

  private processClientUserSearch1(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="memberId"]');
    // console.log({ data, params, RESULTS, SELECTOR });

    let processedData: { id: number; text: string; }[] = [];
    if (TOTAL > 0) {
      var _data = RESULTS;
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const member: MembershipUser_I = MembershipUser_S(item);
        
        const id = member.id;
        const fullName = `${member.firstname} ${member.middlename} ${member.surname}`;
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({processedData});
    


    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private processClientUserSearch2(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="connectionId"]');
    // console.log({ data, params, RESULTS, SELECTOR });

    let processedData: { id: number; text: string; }[] = [];
    if (TOTAL > 0) {
      var _data = RESULTS;
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const member: MembershipUser_I = MembershipUser_S(item);
        
        const id = member.id;
        const fullName = `${member.firstname} ${member.middlename} ${member.surname}`;
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({processedData});

    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private get ajaxFetchUrlParams1(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "", value: "" }
    ]
  }

  private get ajaxFetchUrlParams2(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "", value: "" }
    ]
  }

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

  async submitForm(e: PointerEvent) {
    e.preventDefault();
    // console.log({ e });
    await POST_UserConnectionAccount();
  }

  firstUpdated() { }

  createRenderRoot() {
    return this;
  }
}
