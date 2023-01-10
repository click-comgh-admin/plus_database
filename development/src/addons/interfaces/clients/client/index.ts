// To parse this data:
//
//   import { Convert, ClientInfoModel } from "./file";
//
//   const clientInfoModel = Convert.toClientInfoModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { LocationCountryModel, typeMap as cmTypeMap } from "@@addons/interfaces/location/country_model";
import { ClientAccountCategoryModel, typeMap as cacmTypeMap } from "@@addons/interfaces/clients/account_category";

export interface ClientInfoModel {
    id?: number;
    name?: string;
    accountType?: number;
    country?: string;
    stateProvince?: string;
    applicantFirstname?: string;
    applicantSurname?: string;
    applicantGender?: number;
    applicantPhone?: string;
    applicantEmail?: string;
    applicantDesignationRole?: number;
    region?: number;
    district?: number;
    constituency?: number;
    community?: string;
    subscriptionDuration?: string;
    subscriptionDate?: Date;
    subscriptionFee?: string;
    logo?: string;
    status?: number;
    archive?: number;
    accountCategory?: ClientAccountCategoryModel;
    website?: string;
    creationDate?: Date;
    updatedBy?: number;
    updateDate?: Date;
    countryInfo?: LocationCountryModel[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toClientInfoModel(json: string): ClientInfoModel {
        return cast(JSON.parse(json), r("ClientInfoModel"));
    }

    public static clientInfoModelToJson(value: ClientInfoModel): string {
        return JSON.stringify(uncast(value, r("ClientInfoModel")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = '') {
    if (key) {
        // console.error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    // console.error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`,);
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
            } catch (_) { }
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
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
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
    "ClientInfoModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "accountType", js: "accountType", typ: u(null, 0) },
        { json: "country", js: "country", typ: u(null, "") },
        { json: "stateProvince", js: "stateProvince", typ: u(null, "") },
        { json: "applicantFirstname", js: "applicantFirstname", typ: u(null, "") },
        { json: "applicantSurname", js: "applicantSurname", typ: u(null, "") },
        { json: "applicantGender", js: "applicantGender", typ: u(null, 0) },
        { json: "applicantPhone", js: "applicantPhone", typ: u(null, "") },
        { json: "applicantEmail", js: "applicantEmail", typ: u(null, "") },
        { json: "applicantDesignationRole", js: "applicantDesignationRole", typ: u(null, 0) },
        { json: "region", js: "region", typ: u(null, 0) },
        { json: "district", js: "district", typ: u(null, 0) },
        { json: "constituency", js: "constituency", typ: u(null, 0) },
        { json: "community", js: "community", typ: u(null, "") },
        { json: "subscriptionDuration", js: "subscriptionDuration", typ: u(null, "") },
        { json: "subscriptionDate", js: "subscriptionDate", typ: u(null, Date) },
        { json: "subscriptionFee", js: "subscriptionFee", typ: u(null, "") },
        { json: "logo", js: "logo", typ: u(null, "") },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "archive", js: "archive", typ: u(null, 0) },
        { json: "accountCategory", js: "accountCategory", typ: u(null, r("ClientAccountCategoryModel")) },
        { json: "website", js: "website", typ: u(null, "") },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "countryInfo", js: "countryInfo", typ: u(null, a(r("LocationCountryModel"))) },
    ], false),
    "LocationCountryModel": cmTypeMap['LocationCountryModel'],
    "ClientAccountCategoryModel": cacmTypeMap['ClientAccountCategoryModel'],
};
