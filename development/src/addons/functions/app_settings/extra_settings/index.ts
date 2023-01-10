import { AppStorageItem } from "@@addons/functions/cookies/local_storage";
import { ExtraAppSettings_I, ExtraAppSettings_S } from "@@addons/interfaces/extra_app_settings";
import { base64Decode, base64Encode } from "../../base64";
import { GET_ClientUserDashboardMetrics } from '@@addons/network/clients/users/dashboard/metrics';
import { Convert as cudmmConvert } from '@@addons/interfaces/clients/users/dashboard/metrics';
import { Convert as cupamConvert } from '@@addons/interfaces/clients/users/page_access/user_access';
import { DateDifference, DateDifferenceMinutes } from "@@addons/functions/date_time/date_diffs";
import { GET_ClientUserAccess } from "@@addons/network/clients/users/access";
import { getUserLoginInfoCookie } from "@@addons/functions/login";

const AppSettingsExtraSettings = 'app-settings-extra_settings',
  ASI = new AppStorageItem();

export const setAppSettingsExtraSettings = async (force = false) => {
  const setter = (data: ExtraAppSettings_I) => {
    const stringData = JSON.stringify(data);

    ASI.remove_storage_item(AppSettingsExtraSettings);
    ASI.set_storage_item(AppSettingsExtraSettings, base64Encode(stringData), 3500);
  },
    getDashboardMetrics = async () => {
      const _networkResponse = await GET_ClientUserDashboardMetrics<any>();

      if (_networkResponse !== null) {
        if (_networkResponse.response.success && 'statistics' in _networkResponse.response.data) {
          return cudmmConvert.toClientUserDashboardMetricModel(
            JSON.stringify(_networkResponse.response.data)
          );
        }
      }

      return null
    },
    getUserAccess = async () => {
      const userID = getUserLoginInfoCookie().user.id;
      const _networkResponse = await GET_ClientUserAccess<any>(null, "?userId=" + userID);

      if (_networkResponse !== null) {
        if (_networkResponse.response.success && Array.isArray(_networkResponse.response.data)) {
          return _networkResponse.response.data.map((access) => {
            // console.log({
            //   access, "JSON.stringify(access)": JSON.stringify(access)
            // });
            
            return cupamConvert.toClientUserPageAccessModel(
              JSON.stringify(access)
            );
          });
        }
      }

      return null
    },
    network_setter = async () => {
      // console.log({ "calling network_setter": true });

      const dashboardMetrics = await getDashboardMetrics(), userAccess = await getUserAccess(),
        expirationDate = dashboardMetrics === null ? null : dashboardMetrics.expirationDate;

      const settings: ExtraAppSettings_I = {
        expiration_date: {
          entryDate: new Date(),
          expiration: expirationDate,
          expired: DateDifference(expirationDate, new Date()) < 24
        },
        user_access: userAccess,
      }

      setter(settings);
    };


  if (force) { // force network setter call
    ASI.remove_storage_item(AppSettingsExtraSettings);
    await network_setter();
  } else {
    const settings = getAppSettingsExtraSettings();
    // console.log({"rawSettings-settings": settings});
    if (settings === null) {
      await network_setter();
    } else {
      // DateDifference(new Date(), settings?.expiration_date.entryDate) > 24
      // DateDifferenceMinutes(expirationDate, new Date()) < 15
      if (DateDifferenceMinutes(new Date(), settings?.expiration_date.entryDate) > 15) { // if 15 minutes passed call network setter
        await network_setter();
      }
    }
  }


}

export const getAppSettingsExtraSettings = (): ExtraAppSettings_I => {
  const rawSettings = ASI.get_storage_item(AppSettingsExtraSettings);
  // console.log({ rawSettings });

  if (rawSettings === "" || rawSettings === null) {
    return null;
  } else {
    const _settings = base64Decode(ASI.get_storage_item(AppSettingsExtraSettings)),
      settings = JSON.parse(_settings),
      xtraAppSettings = ExtraAppSettings_S(settings);

    xtraAppSettings.expiration_date.expired = DateDifference(xtraAppSettings.expiration_date.expiration, new Date()) < 24;
    // console.log({ xtraAppSettings });

    return xtraAppSettings;
  }
}
