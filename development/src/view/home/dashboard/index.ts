import '@@assets/styles/views/branch/main.scss';
import "../../../assets/styles/views/home/dashboard.scss";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-circular-progress';
import "@@addons/widgets/buttons/link-buttons/link-button";
import { MembershipUser_I } from '@@addons/interfaces/members/user';
import { NetworkCallPaginResponse_I } from '@@addons/interfaces/network_calls/response';
import '@@addons/widgets/profile_photo';
import { GET_ClientUserDashboardMetrics } from '@@addons/network/clients/users/dashboard/metrics';
import { ClientUserDashboardMetricModel, Convert as cudmmConvert } from '@@addons/interfaces/clients/users/dashboard/metrics';
import './members';
import './main_user';
import './branch_user';
import './loading_user';
import { CONSTANTS } from '@@addons/constants';
import { AppSetup } from '@@addons/functions/app_settings';
import '../../no_access/account_expired';
import { getAppSettingsExtraSettings } from '@@addons/functions/app_settings/extra_settings';
import '../../no_access/no_page_entry';
import { AppSettingsExtraUserAccess } from '@@addons/functions/app_settings/extra_settings/user_access';

@customElement("pdb-dashboard-index")
export class PdbDashboardIndex extends LitElement {
  constructor() { super(); }

  @property({ type: Boolean })
  private _dashboardMetricsCalled?: boolean = false;


  @property({ type: Array })
  private _dashboardMetrics: ClientUserDashboardMetricModel[] = [];

  private __members: NetworkCallPaginResponse_I<MembershipUser_I> = null;

  public set _members(value: NetworkCallPaginResponse_I<MembershipUser_I>) {
    this.__members = value;
    this.requestUpdate();
  }

  public get _members(): NetworkCallPaginResponse_I<MembershipUser_I> {
    return this.__members;
  }

  async connectedCallback() {
    super.connectedCallback();
    await AppSetup();
    await this.getDashboardMetrics();

  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {
    if (getAppSettingsExtraSettings()?.expiration_date.expired) {
      return html`<account-expired-component></account-expired-component>`;
    }
    if (!AppSettingsExtraUserAccess({pageId: 0, viewType: "View"}, true)) {
      return html`<no-page-entry-component></no-page-entry-component>`;
    }
    return html`
      ${this.metricsSection}
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Recent Users</div>
            <pdb-dashboard-members></pdb-dashboard-members>
            <div class="d-block text-center card-footer">
              <a href="${CONSTANTS.URLS.PDB_CLIENT}member/members" class="btn-wide btn btn-success">Members</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  private get metricsSection() {
    // return html`<pdb-dashboard-loading-user></pdb-dashboard-loading-user>`;
    if (this._dashboardMetricsCalled === false) {

      return html`
        <div class="main-container">
          <!-- <div class="flex justify-center"> -->
          <pdb-dashboard-loading-user></pdb-dashboard-loading-user>
          <!-- </div> -->
        </div>
      `;
    }
    if (this._dashboardMetrics.length < 1) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">User Metrics </span>: Error!</h4>
          </div>
        </div>
      `;
    }
    const dashboardMetrics = this._dashboardMetrics[0];
    if (dashboardMetrics.type.id === 1) {
      return html`<pdb-dashboard-main-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-main-user>`;
    } else {
      return html`<pdb-dashboard-branch-user .dashboardMetrics="${this._dashboardMetrics}"></pdb-dashboard-branch-user>`;
    }
  }

  firstUpdated() { }

  private async getDashboardMetrics() {
    const _networkResponse = await GET_ClientUserDashboardMetrics<any>();
    this._dashboardMetricsCalled = true;
    if (_networkResponse === null) {
      this._dashboardMetrics = [];
    } else {
      if (_networkResponse.response.success && 'statistics' in _networkResponse.response.data) {

        const _dashboardMetrics: ClientUserDashboardMetricModel = cudmmConvert.toClientUserDashboardMetricModel(JSON.stringify(_networkResponse.response.data));
        this._dashboardMetrics = [_dashboardMetrics];
      } else {
        this._dashboardMetrics = [];
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}
