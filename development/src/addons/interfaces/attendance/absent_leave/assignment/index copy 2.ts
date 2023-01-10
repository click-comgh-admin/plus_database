// To parse this data:
//
//   import { Convert, AttendanceAbsentLeaveAssignmentModel } from "./file";
//
//   const attendanceAbsentLeaveAssignmentModel = Convert.toAttendanceAbsentLeaveAssignmentModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ClientInfoModel, typeMap as cimTypeMap } from "@@addons/interfaces/clients/client";
import { ClientUserModel, typeMap as cumTypeMap } from "@@addons/interfaces/clients/users/model";
import { MembershipAdditionalInfoModel } from "@@addons/interfaces/members/additional_info";
import { MembershipMixedUserModel, typeMap as mmumTypeMap } from "@@addons/interfaces/members/user/mixed";
import { AttendanceAbsentLeaveStatusModel, typeMap as aalsmTypeMap } from "../status";

export interface AttendanceAbsentLeaveAssignmentModel {
    id?:            number;
    clientID?:      number;
    clientInfo?:    ClientInfoModel;
    memberID?:      number;
    memberInfo?:    MembershipMixedUserModel;
    memberAdditionalInfo?:    MembershipAdditionalInfoModel;
    statusID?:      AttendanceAbsentLeaveStatusModel;
    createdBy?:     number;
    createdByInfo?: ClientUserModel;
    updatedBy?:     number;
    updatedByInfo?: ClientUserModel;
    state?:         StateTerm;
    term?:          StateTerm;
    fromDate?:      Date;
    toDate?:        Date;
    reason?:        string;
    totalDays?:     number;
    totalDaysLeft?: number;
    date?:          Date;
    updateDate?:    Date;
}

export interface StateTerm {
    id?:   number;
    name?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toAttendanceAbsentLeaveAssignmentModel(json: string): AttendanceAbsentLeaveAssignmentModel {
        return cast(JSON.parse(json), r("AttendanceAbsentLeaveAssignmentModel"));
    }

    public static attendanceAbsentLeaveAssignmentModelToJson(value: AttendanceAbsentLeaveAssignmentModel): string {
        return JSON.stringify(uncast(value, r("AttendanceAbsentLeaveAssignmentModel")), null, 2);
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
    "AttendanceAbsentLeaveAssignmentModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "clientInfo", js: "clientInfo", typ: u(null, r("ClientInfoModel")) },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "memberInfo", js: "memberInfo", typ: u(null, r("MembershipMixedUserModel")) },
        { json: "statusId", js: "statusID", typ: u(null, r("AttendanceAbsentLeaveStatusModel")) },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "createdByInfo", js: "createdByInfo", typ: u(null, r("ClientUserModel")) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updatedByInfo", js: "updatedByInfo", typ: u(null, r("ClientUserModel")) },
        { json: "state", js: "state", typ: u(null, r("StateTerm")) },
        { json: "term", js: "term", typ: u(null, r("StateTerm")) },
        { json: "fromDate", js: "fromDate", typ: u(null, Date) },
        { json: "toDate", js: "toDate", typ: u(null, Date) },
        { json: "reason", js: "reason", typ: u(null, "") },
        { json: "totalDays", js: "totalDays", typ: u(null, 0) },
        { json: "totalDaysLeft", js: "totalDaysLeft", typ: u(null, 0) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
    ], false),
    "ClientInfoModel": cimTypeMap['ClientInfoModel'],
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
    "AttendanceAbsentLeaveStatusModel": aalsmTypeMap['AttendanceAbsentLeaveStatusModel'],
    "ClientUserModel": cumTypeMap['ClientUserModel'],
    "StateTerm": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
    ], false),
};
