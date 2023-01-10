// To parse this data:
//
//   import { Convert, MembershipOrganizationUserModel } from "./file";
//
//   const membershipOrganizationUserModel = Convert.toMembershipOrganizationUserModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MembershipOrganizationUserModel {
    id?:                  number;
    clientID?:            number;
    organizationName?:    string;
    contactPersonName?:   string;
    organizationType?:    OrganizationType;
    businessRegistered?:  boolean;
    organizationPhone?:   string;
    organizationEmail?:   string;
    contactPersonGender?: number;
    contactPersonPhoto?:  string;
    dateOfIncorporation?: Date;
    logo?:                string;
    contactPersonPhone?:  string;
    contactPersonEmail?:  string;
    countryOfBusiness?:   string;
    stateProvince?:       string;
    region?:              number;
    district?:            number;
    constituency?:        number;
    electoralArea?:       number;
    community?:           string;
    digitalAddress?:      string;
    level?:               number;
    status?:              number;
    accountType?:         number;
    memberType?:          number;
    date?:                Date;
    lastLogin?:           Date;
    referenceID?:         string;
    branchID?:            number;
    certificates?:        null | Certificate[];
}

export interface Certificate {
    id?:         number;
    memberID?:   number;
    attachment?: Attachment;
    date?:       Date;
}

export interface Attachment {
    id?:              number;
    clientID?:        number;
    attachment?:      string;
    filename?:        string;
    source?:          string;
    size?:            string;
    folderID?:        FolderID;
    fileDescription?: string;
    createdBy?:       number;
    updatedBy?:       number;
    updateDate?:      Date;
    archived?:        boolean;
    archivedBy?:      number;
    archivedDate?:    Date;
    date?:            Date;
}

export interface FolderID {
    id?:           number;
    parentFolder?: number;
    clientID?:     number;
    branchID?:     number;
    folder?:       string;
    folderType?:   number;
    createdBy?:    number;
    updatedBy?:    number;
    updateDate?:   Date;
    date?:         Date;
}

export interface OrganizationType {
    id?:         number;
    memberID?:   number;
    clientID?:   number;
    type?:       string;
    createdBy?:  number;
    updatedBy?:  number;
    updateDate?: Date;
    date?:       Date;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMembershipOrganizationUserModel(json: string): MembershipOrganizationUserModel {
        // console.log({"json": json})
        return cast(JSON.parse(json), r("MembershipOrganizationUserModel"));
    }

    public static membershipOrganizationUserModelToJson(value: MembershipOrganizationUserModel): string {
        return JSON.stringify(uncast(value, r("MembershipOrganizationUserModel")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = '') {
    if (key) {
        m("")
        console.log(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    console.log(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    // console.log({"jsonToJSProps(typ": typ})
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
    // console.log({"val": val, "typ": typ, "getProps": getProps, "key": key})
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
    // console.log({"val": val, "typ": typ})
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
    "MembershipOrganizationUserModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "organizationName", js: "organizationName", typ: u(null, "") },
        { json: "contactPersonName", js: "contactPersonName", typ: u(null, "") },
        { json: "organizationType", js: "organizationType", typ: u(null, r("OrganizationType")) },
        { json: "businessRegistered", js: "businessRegistered", typ: u(null, true) },
        { json: "organizationPhone", js: "organizationPhone", typ: u(null, "") },
        { json: "organizationEmail", js: "organizationEmail", typ: u(null, "") },
        { json: "contactPersonGender", js: "contactPersonGender", typ: u(null, 0) },
        { json: "contactPersonPhoto", js: "contactPersonPhoto", typ: u(null, "") },
        { json: "dateOfIncorporation", js: "dateOfIncorporation", typ: u(null, Date) },
        { json: "logo", js: "logo", typ: u(null, "") },
        { json: "contactPersonPhone", js: "contactPersonPhone", typ: u(null, "") },
        { json: "contactPersonEmail", js: "contactPersonEmail", typ: u(null, "") },
        { json: "countryOfBusiness", js: "countryOfBusiness", typ: u(null, "") },
        { json: "stateProvince", js: "stateProvince", typ: u(null, "") },
        { json: "region", js: "region", typ: u(null, 0) },
        { json: "district", js: "district", typ: u(null, 0) },
        { json: "constituency", js: "constituency", typ: u(null, 0) },
        { json: "electoralArea", js: "electoralArea", typ: u(null, 0) },
        { json: "community", js: "community", typ: u(null, "") },
        { json: "digitalAddress", js: "digitalAddress", typ: u(null, "") },
        { json: "level", js: "level", typ: u(null, 0) },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "accountType", js: "accountType", typ: u(null, 0) },
        { json: "memberType", js: "memberType", typ: u(null, 0) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "last_login", js: "lastLogin", typ: u(null, Date) },
        { json: "referenceId", js: "referenceID", typ: u(null, "") },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "certificates", js: "certificates", typ: u(null, a(r("Certificate"))) },
    ], false),
    "Certificate": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "attachment", js: "attachment", typ: u(null, r("Attachment")) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "Attachment": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "attachment", js: "attachment", typ: u(null, "") },
        { json: "filename", js: "filename", typ: u(null, "") },
        { json: "source", js: "source", typ: u(null, "") },
        { json: "size", js: "size", typ: u(null, "") },
        { json: "folderId", js: "folderID", typ: u(null, r("FolderID")) },
        { json: "fileDescription", js: "fileDescription", typ: u(null, "") },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "archived", js: "archived", typ: u(null, true) },
        { json: "archivedBy", js: "archivedBy", typ: u(null, 0) },
        { json: "archivedDate", js: "archivedDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "FolderID": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "parentFolder", js: "parentFolder", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "folder", js: "folder", typ: u(null, "") },
        { json: "folderType", js: "folderType", typ: u(null, 0) },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "OrganizationType": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "type", js: "type", typ: u(null, "") },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
};
