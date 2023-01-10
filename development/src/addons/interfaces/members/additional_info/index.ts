// To parse this data:
//
//   import { Convert, MembershipAdditionalInfoModel } from "./file";
//
//   const membershipAdditionalInfoModel = Convert.toMembershipAdditionalInfoModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
import { MembershipMixedUserModel, typeMap as mmumTypeMap } from "@@addons/interfaces/members/user/mixed";

export interface MembershipAdditionalInfoModel {
    id?:                  number;
    memberID?:            number;
    memberInfo?:          MembershipMixedUserModel;
    phone?:               string;
    email?:               string;
    placeOfWork?:         string;
    whatsapp?:            string;
    facebook?:            string;
    twitter?:             string;
    instagram?:           string;
    accountBio?:          string;
    businessHashtag?:     string;
    businessDescription?: string;
    profession?:          string;
    website?:             string;
    postalAddress?:       string;
    digitalAddress?:      string;
    dateJoined?:          Date;
    date?:                Date;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMembershipAdditionalInfoModel(json: string): MembershipAdditionalInfoModel {
        return cast(JSON.parse(json), r("MembershipAdditionalInfoModel"));
    }

    public static membershipAdditionalInfoModelToJson(value: MembershipAdditionalInfoModel): string {
        return JSON.stringify(uncast(value, r("MembershipAdditionalInfoModel")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = '') {
    if (key) {
        // console.error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    // console.error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
    }
    if (typ === false) return;
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    // @ts-ignore
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

export const typeMap: any = {
    "MembershipAdditionalInfoModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "memberInfo", js: "memberInfo", typ: u(null, r("MembershipMixedUserModel")) },
        { json: "phone", js: "phone", typ: u(null, "") },
        { json: "email", js: "email", typ: u(null, "") },
        { json: "placeOfWork", js: "placeOfWork", typ: u(null, "") },
        { json: "whatsapp", js: "whatsapp", typ: u(null, "") },
        { json: "facebook", js: "facebook", typ: u(null, "") },
        { json: "twitter", js: "twitter", typ: u(null, "") },
        { json: "instagram", js: "instagram", typ: u(null, "") },
        { json: "accountBio", js: "accountBio", typ: u(null, "") },
        { json: "businessHashtag", js: "businessHashtag", typ: u(null, "") },
        { json: "businessDescription", js: "businessDescription", typ: u(null, "") },
        { json: "profession", js: "profession", typ: u(null, "") },
        { json: "website", js: "website", typ: u(null, "") },
        { json: "postalAddress", js: "postalAddress", typ: u(null, "") },
        { json: "digitalAddress", js: "digitalAddress", typ: u(null, "") },
        { json: "dateJoined", js: "dateJoined", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "MembershipMixedUserModel": mmumTypeMap['MembershipMixedUserModel'],
    "GroupingsMemberCategoryModel": mmumTypeMap['GroupingsMemberCategoryModel'],
    "BranchInfo": mmumTypeMap['BranchInfo'],
    "GroupingsOrganizationTypeModel": mmumTypeMap['GroupingsOrganizationTypeModel'],
    "Certificate": mmumTypeMap['Certificate'],
    "Attachment": mmumTypeMap['Attachment'],
    "FolderID": mmumTypeMap['FolderID'],
    "RegionInfo": mmumTypeMap['RegionInfo'],
    "CountryInfo": mmumTypeMap['CountryInfo'],
    "DistrictConstituencyElectoralAreaInfo": mmumTypeMap['DistrictConstituencyElectoralAreaInfo'],
};
