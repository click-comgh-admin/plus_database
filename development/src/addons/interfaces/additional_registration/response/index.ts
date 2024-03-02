// To parse this data:
//
//   import { Convert, AdditionalRegistrationResponseModel } from "./file";
//
//   const additionalRegistrationResponseModel = Convert.toAdditionalRegistrationResponseModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { AdditionalRegistrationModel, typeMap as armTypeMap } from "@@addons/interfaces/additional_registration";

export interface AdditionalRegistrationResponseOnlyModel {
    responseId?: number;
    question?: number;
    memberId: number;
    response: string;
}

export interface AdditionalRegistrationResponseModel {
    id?:            number;
    question?:      AdditionalRegistrationModel;
    response?:      string;
    memberID?:      number;
    memberInfo?:    MemberInfo;
    updatedBy?:     number;
    updatedByInfo?: null;
    updateDate?:    Date;
    date?:          Date;
}

export interface MemberInfo {
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
    profileResume?:         null;
    profileIdentification?: null;
    archived?:              boolean;
    updatedBy?:             number;
    updateDate?:            Date;
    updatedByInfo?:         UpdatedByInfo;
    branchInfo?:            BranchI;
    categoryInfo?:          CategoryInfo;
}

export interface BranchI {
    id?:           number;
    name?:         string;
    accountID?:    number;
    createdBy?:    number;
    creationDate?: Date;
    updatedBy?:    number;
    updateDate?:   Date;
}

export interface CategoryInfo {
    id?:         number;
    clientID?:   number;
    category?:   string;
    createdBy?:  number;
    updatedBy?:  number;
    updateDate?: Date | null;
    date?:       Date | null;
}

export interface UpdatedByInfo {
    id?:             number;
    firstname?:      string;
    surname?:        string;
    gender?:         number;
    profilePicture?: string;
    dateOfBirth?:    Date;
    phone?:          string;
    email?:          string;
    role?:           number;
    accountID?:      number;
    branchID?:       number;
    level?:          number;
    status?:         number;
    lastUpdatedBy?:  number;
    date?:           Date;
    lastLogin?:      Date;
}

export interface ClientID {
    id?:                       number;
    name?:                     string;
    accountType?:              number;
    country?:                  string;
    stateProvince?:            string;
    applicantFirstname?:       string;
    applicantSurname?:         string;
    applicantGender?:          number;
    applicantPhone?:           string;
    applicantEmail?:           string;
    applicantDesignationRole?: number;
    region?:                   number;
    district?:                 number;
    constituency?:             number;
    community?:                string;
    subscriptionDuration?:     string;
    subscriptionDate?:         Date;
    subscriptionFee?:          string;
    logo?:                     string;
    status?:                   number;
    archive?:                  number;
    accountCategory?:          CategoryInfo;
    website?:                  string;
    creationDate?:             Date;
    updatedBy?:                number;
    updateDate?:               Date;
    subscriptionInfo?:         SubscriptionInfo;
    countryInfo?:              CountryInfo[];
}

export interface CountryInfo {
    id?:    number;
    name?:  string;
    short?: string;
    code?:  string;
}

export interface SubscriptionInfo {
    id?:                   number;
    client?:               string;
    clientID?:             string;
    subscriptionID?:       string;
    subscribedModules?:    SubscribedModules;
    dateCreated?:          Date;
    membershipSize?:       string;
    description?:          string;
    duration?:             number;
    amountPaid?:           number;
    renewingDays?:         number;
    remainingDays?:        number;
    expiredDays?:          number;
    subscriptionFeeGhs?:   number;
    paidBy?:               string;
    subscriptionFeeUsd?:   number;
    expiresOn?:            Date;
    confirmed?:            boolean;
    expired?:              boolean;
    annualMaintenanceFee?: number;
    invoiceCopy?:          string;
    nonExpiry?:            boolean;
    special?:              boolean;
    usercode?:             string;
    newExpiresOn?:         null;
}

export interface SubscribedModules {
    databaseManager?:   Manager;
    attendanceManager?: Manager;
    cashManager?:       Manager;
}

export interface Manager {
    moduleID?:   number;
    moduleName?: string;
    expiresOn?:  string;
    amountPaid?: number;
}

export interface TypeInfo {
    id?:   number;
    name?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toAdditionalRegistrationResponseModel(json: string): AdditionalRegistrationResponseModel {
        return cast(JSON.parse(json), r("AdditionalRegistrationResponseModel"));
    }

    public static additionalRegistrationResponseModelToJson(value: AdditionalRegistrationResponseModel): string {
        return JSON.stringify(uncast(value, r("AdditionalRegistrationResponseModel")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = '') {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    console.error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object") {
        return "";
    } else {
        return typeof typ;
    }
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

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        
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
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        
    }
    if (typ === false) return;
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
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

function l(typ: any) {
    return { literal: typ };
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
    //@ts-ignore
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

export const typeMap: any = {
    "AdditionalRegistrationResponseModel": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "question", js: "question", typ: u(null, r("AdditionalRegistrationModel")) },
        { json: "response", js: "response", typ: u(null, "") },
        { json: "memberId", js: "memberID", typ: u(null, 0) },
        { json: "memberInfo", js: "memberInfo", typ: u(null, r("MemberInfo")) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updatedByInfo", js: "updatedByInfo", typ: u(null, null) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "date", js: "date", typ: u(null, Date) },
    ], false),
    "MemberInfo": o([
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
        { json: "profileResume", js: "profileResume", typ: u(null, null) },
        { json: "profileIdentification", js: "profileIdentification", typ: u(null, null) },
        { json: "archived", js: "archived", typ: u(null, true) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "updatedByInfo", js: "updatedByInfo", typ: u(null, r("UpdatedByInfo")) },
        { json: "branchInfo", js: "branchInfo", typ: u(null, r("BranchI")) },
        { json: "categoryInfo", js: "categoryInfo", typ: u(null, r("CategoryInfo")) },
    ], false),
    "BranchI": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "accountId", js: "accountID", typ: u(null, 0) },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
    ], false),
    "CategoryInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "clientId", js: "clientID", typ: u(null, 0) },
        { json: "category", js: "category", typ: u(null, "") },
        { json: "createdBy", js: "createdBy", typ: u(null, 0) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, u(Date, null)) },
        { json: "date", js: "date", typ: u(null, u(Date, null)) },
    ], false),
    "UpdatedByInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "firstname", js: "firstname", typ: u(null, "") },
        { json: "surname", js: "surname", typ: u(null, "") },
        { json: "gender", js: "gender", typ: u(null, 0) },
        { json: "profilePicture", js: "profilePicture", typ: u(null, "") },
        { json: "dateOfBirth", js: "dateOfBirth", typ: u(null, Date) },
        { json: "phone", js: "phone", typ: u(null, "") },
        { json: "email", js: "email", typ: u(null, "") },
        { json: "role", js: "role", typ: u(null, 0) },
        { json: "accountId", js: "accountID", typ: u(null, 0) },
        { json: "branchId", js: "branchID", typ: u(null, 0) },
        { json: "level", js: "level", typ: u(null, 0) },
        { json: "status", js: "status", typ: u(null, 0) },
        { json: "lastUpdatedBy", js: "lastUpdatedBy", typ: u(null, 0) },
        { json: "date", js: "date", typ: u(null, Date) },
        { json: "last_login", js: "lastLogin", typ: u(null, Date) },
    ], false),
    "AdditionalRegistrationModel": armTypeMap['AdditionalRegistrationModel'],
    "ClientID": o([
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
        { json: "accountCategory", js: "accountCategory", typ: u(null, r("CategoryInfo")) },
        { json: "website", js: "website", typ: u(null, "") },
        { json: "creationDate", js: "creationDate", typ: u(null, Date) },
        { json: "updatedBy", js: "updatedBy", typ: u(null, 0) },
        { json: "updateDate", js: "updateDate", typ: u(null, Date) },
        { json: "subscriptionInfo", js: "subscriptionInfo", typ: u(null, r("SubscriptionInfo")) },
        { json: "countryInfo", js: "countryInfo", typ: u(null, a(r("CountryInfo"))) },
    ], false),
    "CountryInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
        { json: "short", js: "short", typ: u(null, "") },
        { json: "code", js: "code", typ: u(null, "") },
    ], false),
    "SubscriptionInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "client", js: "client", typ: u(null, "") },
        { json: "client_id", js: "clientID", typ: u(null, "") },
        { json: "subscription_id", js: "subscriptionID", typ: u(null, "") },
        { json: "subscribed_modules", js: "subscribedModules", typ: u(null, r("SubscribedModules")) },
        { json: "date_created", js: "dateCreated", typ: u(null, Date) },
        { json: "membership_size", js: "membershipSize", typ: u(null, "") },
        { json: "description", js: "description", typ: u(null, "") },
        { json: "duration", js: "duration", typ: u(null, 0) },
        { json: "amount_paid", js: "amountPaid", typ: u(null, 0) },
        { json: "renewing_days", js: "renewingDays", typ: u(null, 0) },
        { json: "remaining_days", js: "remainingDays", typ: u(null, 0) },
        { json: "expired_days", js: "expiredDays", typ: u(null, 0) },
        { json: "subscription_fee_ghs", js: "subscriptionFeeGhs", typ: u(null, 3.14) },
        { json: "paid_by", js: "paidBy", typ: u(null, "") },
        { json: "subscription_fee_usd", js: "subscriptionFeeUsd", typ: u(null, 3.14) },
        { json: "expires_on", js: "expiresOn", typ: u(null, Date) },
        { json: "confirmed", js: "confirmed", typ: u(null, true) },
        { json: "expired", js: "expired", typ: u(null, true) },
        { json: "annual_maintenance_fee", js: "annualMaintenanceFee", typ: u(null, 3.14) },
        { json: "invoice_copy", js: "invoiceCopy", typ: u(null, "") },
        { json: "non_expiry", js: "nonExpiry", typ: u(null, true) },
        { json: "special", js: "special", typ: u(null, true) },
        { json: "usercode", js: "usercode", typ: u(null, "") },
        { json: "new_expires_on", js: "newExpiresOn", typ: u(null, null) },
    ], false),
    "SubscribedModules": o([
        { json: "Database Manager", js: "databaseManager", typ: u(null, r("Manager")) },
        { json: "Attendance Manager", js: "attendanceManager", typ: u(null, r("Manager")) },
        { json: "Cash Manager", js: "cashManager", typ: u(null, r("Manager")) },
    ], false),
    "Manager": o([
        { json: "module_id", js: "moduleID", typ: u(null, 0) },
        { json: "module_name", js: "moduleName", typ: u(null, "") },
        { json: "expires_on", js: "expiresOn", typ: u(null, "") },
        { json: "amount_paid", js: "amountPaid", typ: u(null, 3.14) },
    ], false),
    "TypeInfo": o([
        { json: "id", js: "id", typ: u(null, 0) },
        { json: "name", js: "name", typ: u(null, "") },
    ], false),
};
