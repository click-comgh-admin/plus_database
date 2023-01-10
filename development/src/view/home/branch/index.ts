import '@@assets/styles/views/attendance/setup/form.scss';
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import '@material/mwc-button';
import "@@addons/widgets/buttons/link-buttons/link-button";
import '@material/mwc-select';
import { ClientBranches_I, ClientBranchShort_I } from '@@addons/interfaces/clients/branches';
import { GET_ClientBranches } from '@@addons/network/clients/branches';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { getActiveBranchIdCookie, setActiveBranchIdCookie } from '@@addons/functions/views/home/branch';
import { UserLoginInfo_I } from '@@addons/interfaces/network_calls/login';
import '@@addons/widgets/alert';

@customElement("pdb-branch-element")
export class PdbBranchElement extends LitElement {
  constructor() { super(); }

  @property({ type: Number })
  private _myBranchId: number = 0;

  @property({ type: Array })
  private _branches: ClientBranches_I[] = [];

  @property({ type: Array })
  private _activeBranchId?: ClientBranchShort_I[] = null;

  @property({ type: Array })
  private _userLoginInfo?: UserLoginInfo_I[] = null;

  async connectedCallback() {
    super.connectedCallback();
    
    await this.getBranches();
    const activeBranchId = getActiveBranchIdCookie();
    this._activeBranchId = (activeBranchId === null)? null: [activeBranchId];
    this._userLoginInfo = [getUserLoginInfoCookie()];
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    return html`
      <div class="mb-4">
        <div class="col-md-12 col-lg-12 my-2">
          ${this.activeBranch}
        </div>
        <div class="col-md-12 col-lg-12 my-2">
          ${this.myBranch}
        </div>
        ${this.branchSelector}
      </div>
    `;
  }

  private get activeBranch() {
    let activeBranch = 0;
    // console.log({"this._activeBranchId": this._activeBranchId});
    
    if (this._activeBranchId !== null) {
      if (this._activeBranchId.length > 0) {
        activeBranch = this._activeBranchId[0].id;
      }
    }

    let _branch: ClientBranches_I = null;  
    this._branches.forEach((branch) => {
      // console.log({"activeBranch": activeBranch});
      // console.log({"branch.id": branch.id});
      if (branch.id === activeBranch) {
        _branch = branch;
      }
    });
    if (_branch !== null) {
      const header = html`<h4 class="text-white">Active Branch</h4>`;
      const content = html`<div>
        <h1 class="text-white mb-2 text-xl">${_branch.name}</h1>
      </div>`;
      return html`<alert-card success .header="${header}" .content="${content}"></alert-card>`;
    }
    return html``;
  }

  private get myBranch() {
    let userBranch = 0;
    if (this._userLoginInfo !== null) {
      if (this._userLoginInfo.length > 0) {
        userBranch = this._userLoginInfo[0].user.branchId;
      }
    }

    let _branch: ClientBranches_I = null;  
    this._branches.forEach((branch) => {
      // console.log({"userBranch": userBranch});
      // console.log({"branch.id": branch.id});
      
      if (branch.id === userBranch) {
        _branch = branch;
        this._myBranchId = branch.id;
      }
    });

    if (_branch === null) {
      const header = html`<h4 class="text-white">No Branch Found</h4>`;
      const content = html`<div>
        <p class="text-white">User Branch Not Found!</p>
      </div>`;
      return html`<alert-card warning .header="${header}" .content="${content}"></alert-card>`;
    } else {
      const header = html`<h4 class="text-primary">${_branch.name}</h4>`;
      const content = html`<div>
        <p class="text-black mb-2">Click on the button below to set as active branch</p>
        <mwc-button label="Set Active" id="${_branch.id}" name="${_branch.name}"
          accountId="${_branch.accountId}" raised class="primary"
          setMyBranchAsActive @click="${this.setMyBranchAsActive}"></mwc-button>
      </div>`;
      return html`<alert-card info .header="${header}" .content="${content}"></alert-card>`;
    }
  }

  private get branchSelector() {
    if (this._myBranchId === 1) {
      return html`
        <div class="col-md-8 col-lg-6 my-2">
          <h3 class="font-semibold my-2">Select Branch</h3>
          <mwc-select name="branchId" setSelectedBranchAsActiveList class="w-full" id="branchId" label="Select Branch" outlined required>
            <mwc-list-item value="0">Select Branch</mwc-list-item>
            ${this._branches.map((value) => {
              // console.log({ "schedule.type": schedule.type, "value.id": value.id });
              return html`<mwc-list-item value="${value.id}">${value.name}</mwc-list-item>`;
            })}
          </mwc-select>
          <mwc-button label="Set Active" raised class="flex mt-2"
            setSelectedBranchAsActive @click="${this.setSelectedBranchAsActive}"></mwc-button>
        </div>
      `;
    }
    return nothing;
  }

  firstUpdated() { }

  private setMyBranchAsActive(event: any) {
    event.preventDefault();
    this.querySelectorAll('mwc-button[setMyBranchAsActive]').forEach(btn => {
      const _ID_ = btn.getAttribute('id');
      const ID = Number(_ID_);
      const _NAME_ = btn.getAttribute('name');
      // @ts-ignore
      const NAME = String(_NAME_);
      const _ACCOUNT_ID_ = btn.getAttribute('accountId');
      // @ts-ignore
      const ACCOUNT_ID = Number(_ACCOUNT_ID_);
      // console.log({_ID_, _NAME_, _ACCOUNT_ID_});
      // console.log({btn, ID, NAME, ACCOUNT_ID});
      
      setActiveBranchIdCookie({id: ID, name: NAME, accountId: ACCOUNT_ID});
      window.location.reload();
    });
  }

  private setSelectedBranchAsActive(event: any) {
    event.preventDefault();
    this.querySelectorAll('mwc-select[setSelectedBranchAsActiveList]').forEach(item => {
      // @ts-ignore
      const ID = Number(item.value);

      let _branch: ClientBranches_I = null;  
      this._branches.forEach((branch) => {
        // console.log({"ID": ID});
        // console.log({"branch.id": branch.id});
        if (branch.id === ID) {
          _branch = branch;
        }
      });
      
      if (_branch !== null) {
        setActiveBranchIdCookie(_branch);
        window.location.reload();
      }
    });
  }

  private async getBranches() {
    const _networkResponse = await GET_ClientBranches<ClientBranches_I>();
    let __branches: ClientBranches_I[] = [];

    if (_networkResponse === null) {
      __branches.push({ id: 0, name: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const DATA: ClientBranches_I[] = _networkResponse.response.data;
        // console.log({DATA});
        __branches = DATA;
      }
    }
    const new_data: Array<ClientBranches_I> = [];
    new_data.push(...this._branches, ...__branches);
    this._branches = new_data;
  }

  createRenderRoot() {
    return this;
  }
}
