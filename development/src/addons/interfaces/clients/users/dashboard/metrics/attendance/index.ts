// To parse this data:
//
//   import { Convert, ClientUserDashboardAttendanceMetricModel } from "./file";
//
//   const clientUserDashboardAttendanceMetricModel = Convert.toClientUserDashboardAttendanceMetricModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ClientUserDashboardAttendanceMetricModel {
    scheduledMeetings?:  number;
    scheduledEvents?:    number;
    subscriptionAmount?: number;
    branch?:             Branch;
    onGoing?:            OnGoing;
    previous?:           OnGoing;
    expirationDate?:     Date;
}

export interface Branch {
    id?:   number;
    name?: string;
}

export interface OnGoing {
    meetingID?:   number;
    meetingName?: string;
    attendees?:   number;
    absentees?:   number;
    males?:       number;
    females?:     number;
    late?:        number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toClientUserDashboardAttendanceMetricModel(json: string): ClientUserDashboardAttendanceMetricModel {
        return cast(JSON.parse(json), r("ClientUserDashboardAttendanceMetricModel"));
    }

    public static clientUserDashboardAttendanceMetricModelToJson(value: ClientUserDashboardAttendanceMetricModel): string {
        return JSON.stringify(uncast(value, r("ClientUserDashboardAttendanceMetricModel")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = '') {
    if (key) {
        console.error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    console.error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
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
    "ClientUserDashboardAttendanceMetricModel": o([
        { json: "scheduledMeetings", js: "scheduledMeetings", typ: u(null, 0) },
        { json: "scheduledEvents", js: "scheduledEvents", typ: u(null, 0) },
        { json: "subscription_amount", js: "subscriptionAmount", typ: u(null, 3.14) },
        { json: "branch", js: "branch", typ: u(null, r("Branch")) },
        { json: "on_going", js: "onGoing", typ: u(null, r("OnGoing")) },
        { json: "previous", js: "previous", typ: u(null, r("OnGoing")) },
        { json: "expiration_date", js: "expirationDate", typ: u(null, Date) },
    ], false),
    "Branch": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
    ], false),
    "OnGoing": o([
        { json: "meeting_id", js: "meetingID", typ: u(null, 0) },
        { json: "meeting_name", js: "meetingName", typ: u(null, "") },
        { json: "attendees", js: "attendees", typ: u(null, 0) },
        { json: "absentees", js: "absentees", typ: u(null, 0) },
        { json: "males", js: "males", typ: u(null, 0) },
        { json: "females", js: "females", typ: u(null, 0) },
        { json: "late", js: "late", typ: u(null, 0) },
    ], false),
};
