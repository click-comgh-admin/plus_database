// To parse this data:
//
//   import { Convert, MembershipUserModel } from "./file";
//
//   const membershipUserModel = Convert.toMembershipUserModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MembershipUserModel {
    id?:                    number;
    clientID?:              number;
    firstname?:             string;
    middlename?:            string;
    surname?:               string;
    gender?:                number;
    profilePicture?:        string;
    phone?:                 string;
    email?:                 string;
    dateOfBirth?:           Date;
    religion?:              number;
    nationality?:           string;
    countryOfResidence?:    string;
    stateProvince?:         string;
    region?:                number;
    district?:              number;
    constituency?:          number;
    electoralArea?:         number;
    community?:             string;
    hometown?:              string;
    houseNoDigitalAddress?: string;
    digitalAddress?:        string;
    level?:                 number;
    status?:                number;
    accountType?:           number;
    memberType?:            number;
    date?:                  Date;
    lastLogin?:             Date;
    referenceID?:           string;
    branchID?:              number;
    editable?:              boolean;
    profileResume?:         string;
    profileIdentification?: string;
    archived?:              boolean;
    identification?:        string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMembershipUserModel(json: string): MembershipUserModel {
        return cast(JSON.parse(json), r("MembershipUserModel"));
    }

    public static membershipUserModelToJson(value: MembershipUserModel): string {
        return JSON.stringify(uncast(value, r("MembershipUserModel")), null, 2);
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
    "MembershipUserModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "firstname", js: "firstname", typ: u(null, "") },
        { json: "middlename", js: "middlename", typ: u(null, "") },
        { json: "surname", js: "surname", typ: u(null, "") },
        { json: "gender", js: "gender", typ: u(null, 0) },
        { json: "profilePicture", js: "profilePicture", typ: u(null, "") },
        { json: "phone", js: "phone", typ: u(null, "") },
        { json: "email", js: "email", typ: u(null, "") },
        { json: "dateOfBirth", js: "dateOfBirth", typ: u(null, Date) },
        { json: "religion", js: "religion", typ: u(null, 0) },
        { json: "nationality", js: "nationality", typ: u(null, "") },
        { json: "countryOfResidence", js: "countryOfResidence", typ: u(null, "") },
        { json: "stateProvince", js: "stateProvince", typ: u(null, "") },
        { json: "region", js: "region", typ: u(null, 0) },
        { json: "district", js: "district", typ: u(null, 0) },
        { json: "constituency", js: "constituency", typ: u(null, 0) },
        { json: "electoralArea", js: "electoralArea", typ: u(null, 0) },
        { json: "community", js: "community", typ: u(null, "") },
        { json: "hometown", js: "hometown", typ: u(null, "") },
        { json: "houseNoDigitalAddress", js: "houseNoDigitalAddress", typ: u(null, "") },
        { json: "digitalAddress", js: "digitalAddress", typ: u(null, "") },
        { json: "level", js: "level", typ: u(null, 0) },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "accountType", js: "accountType", typ: u(null, 0) },
        { json: "memberType", js: "memberType", typ: u(null, 0) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "last_login", js: "lastLogin", typ: u(null, Date) },
        { json: "referenceId", js: "referenceID", typ: u(null, "") },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "editable", js: "editable", typ: u(null, true) },
        { json: "profileResume", js: "profileResume", typ: u(null, "") },
        { json: "profileIdentification", js: "profileIdentification", typ: u(null, "") },
        { json: "archived", js: "archived", typ: u(null, true) },
        { json: "identification", js: "identification", typ: u(null, "") },
    ], false),
};
