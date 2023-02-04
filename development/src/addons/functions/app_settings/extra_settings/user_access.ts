import { getAppSettingsExtraSettings } from "."

export enum ASES_isUnlimited {
  'Restricted',
  'Unlimited',
  'Edit Only',
  'View Only',
}
export type ASES_PageInfo = {
  pageId: number;
  viewType: "Edit" | "View" | "Both";
}
export const AppSettingsExtraUserAccess = (pageInfo: ASES_PageInfo, isHome: boolean = false,) => {
  const ASES = getAppSettingsExtraSettings(),
    pageId = pageInfo.pageId,
    viewType = pageInfo.viewType;

  // if (pageId) {
  //   console.log({ pageId, viewType, "ASES?.user_access": ASES?.user_access });
  // }
  

  if (isHome) {
    return true;
  }
  let hasAccess = false;
  ASES?.user_access.forEach(ua => {
    // if (pageId) {
    //   console.log({"ua.pageId.id": ua.pageId.id, "pageId": pageId});
    // }
    if (ua.pageId.id === pageId) {
      if (ua.isUnlimited.name in ASES_isUnlimited) {
        switch (ua.isUnlimited.name) {
          case ASES_isUnlimited[0]:
            hasAccess = false;
            break;
        
          case ASES_isUnlimited[1]:
            hasAccess = true;
            break;
        
          case ASES_isUnlimited[2]:
            if (viewType === "Edit" || viewType === "Both") {
              hasAccess = true;
            }
            break;
        
          case ASES_isUnlimited[3]:
            if (viewType === "View" || viewType === "Both") {
              hasAccess = true;
            }
            break;
        
          default:
            break;
        }
      }
    }
  });

  return hasAccess;
}

export const PageButtonUserAccess = (pageId: number,) => {
  return AppSettingsExtraUserAccess({ pageId: pageId, viewType: "Edit" });
}