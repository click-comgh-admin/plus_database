import "@@assets/styles/views/login/main.scss";
import { CONSTANTS } from '@@addons/constants';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@@assets/styles/views/tailwind-output/unaccessible_pages.scss';
import '@material/mwc-circular-progress';
import { urlQueryParamsGet } from "@@addons/functions/url_query_params";
import { base64Decode } from "@@addons/functions/base64";
import { LogUserOut, setUserLoginInfoCookie } from "@@addons/functions/login";
import { removeActiveBranchIdCookie, setActiveBranchIdCookie } from "@@addons/functions/views/home/branch";
import { userLoginInfo_S } from "@@addons/interfaces/network_calls/login";
import { ClientBranches_I } from "@@addons/interfaces/clients/branches";
import { GET_ClientBranches } from "@@addons/network/clients/branches";
import { POST_VerifyTokenAlt } from "@@addons/network/login/verify_token_alt";

@customElement('pdb-redirection')
export class PdbRedirection extends LitElement {
  constructor() { super(); }

  @property({ type: String })
  private token?: string = null;

  @property({ type: String })
  private redirectPage: string = "";

  @property({ type: String })
  private message: string = "Checking Permission";

  @property({ type: Boolean })
  private loading: boolean = false;

  @property({ type: Boolean })
  private verifyingToken: boolean = false;

  async connectedCallback() {
    super.connectedCallback();

    this.getToken();
    this.getRedirectPage();

    setInterval(async () => {
      console.log({"this.token": this.token, "this.verifyingToken": this.verifyingToken})
      if ((this.token !== null) && (this.verifyingToken === false)) {
        this.verifyingToken = true;
        await this.verifyToken();
      }
    }, 100);
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <div class="mx-12 my-24 md:mx-12 md:my-24 xl:m-24 shadow p-2">
        <section class="background-radial-gradient">
          <div class="px-6 py-12 md:px-12 text-center lg:text-left">
            <div class="container mx-auto xl:px-32">
              <div class="flex justify-center items-center">
                <div class="mt-12 lg:mt-0">
                  <h5 class="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-12" style="color: hsl(218, 81%, 95%);">
                    ${this.message}
                  </h5>
                  <div class="flex justify-center items-center">
                    ${this.loading? html`
                      <div class="flex justify-center">
                        <mwc-circular-progress indeterminate></mwc-circular-progress>
                      </div>`: nothing}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  firstUpdated() { }

  private getToken() {
    this.loading = true;
    setTimeout(() => {
      this.message = "Getting Token";
    }, 100);
    let permissionKey = urlQueryParamsGet('permission-key');
    console.log({ permissionKey });
    let _permissionKey = permissionKey !== null ? base64Decode(permissionKey) : null;

    if (_permissionKey === null) {
      setTimeout(() => {
        this.loading = false;
        this.message = "No Token Found.";
        LogUserOut();
        removeActiveBranchIdCookie();
      }, 100);
      window.location.href = CONSTANTS.URLS.LOGIN_PAGE_BASE_URL;
    } else {
      setTimeout(() => {
        this.loading = false;
        this.message = "Token Obtained";
      }, 100);

      this.token = _permissionKey;
    }
  }

  private getRedirectPage() {
    this.loading = true;
    setTimeout(() => {
      this.message = "Getting Redirect Page";
    }, 100);
    let accessPageKey = urlQueryParamsGet('access-page-key');
    console.log({ accessPageKey });
    let _accessPageKey = accessPageKey !== null ? base64Decode(accessPageKey) : null;

    if (_accessPageKey === null) {
      setTimeout(() => {
        this.loading = false;
        this.message = "No Redirect Page Found.";
        LogUserOut();
        removeActiveBranchIdCookie();
      }, 100);
      window.location.href = CONSTANTS.URLS.LOGIN_PAGE_BASE_URL;
    } else {
      setTimeout(() => {
        this.loading = false;
        this.message = "Redirect Page Obtained";
      }, 100);

      this.redirectPage = _accessPageKey;
    }
  }

  private redirectToPage() {
    this.loading = true;
    this.message = "Redirecting ...";

    window.location.href = CONSTANTS.URLS.PDB_CLIENT + this.redirectPage;
  }

  private async verifyToken() {
    this.loading = true;
    const _networkResponse = await POST_VerifyTokenAlt(this.token);
    
    if (_networkResponse !== null) {
      console.log({_networkResponse});
      const RESPONSE = _networkResponse.response;
      console.log({RESPONSE});
      
      if (RESPONSE.success) {
        if (RESPONSE.success && 'expiry' in RESPONSE.data && 'token' in RESPONSE.data && 'user' in RESPONSE.data) {
          this.loading = false;
          this.message = "Logging In";
          const userLoginInfo = userLoginInfo_S(RESPONSE.data);
          setUserLoginInfoCookie(userLoginInfo);
          removeActiveBranchIdCookie();
  
          try {
            this.loading = true;
            const _branches = await GET_ClientBranches<ClientBranches_I>(userLoginInfo.user.branchId);
            if (!Array.isArray(_branches.response.data)) {
              setActiveBranchIdCookie(_branches.response.data);
            }
            this.loading = false;
          } catch (error) {
            console.error({ error });
          }
          this.redirectToPage();
          return;
        }
      }
    }
    this.loading = false;
  }

  createRenderRoot() {
    return this;
  }
}

