// To parse this data:
//
//   import { Convert, ClockingDeviceRequestFullModel } from "./file";
//
//   const clockingDeviceRequestFullModel = Convert.toClockingDeviceRequestFullModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ClientInfoModel, typeMap as cimTypeMap } from "@@addons/interfaces/clients/client";
import { MembershipUserModel, typeMap as mumTypeMap } from "@@addons/interfaces/members/user/model";

export interface ClockingDeviceRequestFullModel {
    id?:                number;
    clientID?:          ClientInfoModel;
    memberID?:          number;
    memberInfo?:        MembershipUserModel;
    memberAccountType?: number;
    systemDevice?:      number;
    deviceType?:        string;
    deviceID?:          string;
    approved?:          boolean;
    approvedBy?:        number;
    creationDate?:      Date;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toClockingDeviceRequestFullModel(json: string): ClockingDeviceRequestFullModel {
        return cast(JSON.parse(json), r("ClockingDeviceRequestFullModel"));
    }

    public static clockingDeviceRequestFullModelToJson(value: ClockingDeviceRequestFullModel): string {
        return JSON.stringify(uncast(value, r("ClockingDeviceRequestFullModel")), null, 2);
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
    "ClockingDeviceRequestFullModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, r("ClientInfoModel")) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "memberInfo", js: "memberInfo", typ: u(null, r("MembershipUserModel")) },
        { json: "memberAccountType", js: "memberAccountType", typ: u(null, 0) },
        { json: "systemDevice", js: "systemDevice", typ: u(null, 0) },
        { json: "deviceType", js: "deviceType", typ: u(null, "") },
        { json: "deviceId", js: "deviceID", typ: u(null, "") },
        { json: "approved", js: "approved", typ: u(null, true) },
        { json: "approvedBy", js: "approvedBy", typ: u(null, 0) },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
    ], false),
    "ClientInfoModel": cimTypeMap['ClientInfoModel'],
    "MembershipUserModel": mumTypeMap['MembershipUserModel'],
};
