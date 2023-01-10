// // To parse this data:
// //
// //   import { Convert, ClockingAttendanceAttendeesModel } from "./file";
// //
// //   const clockingAttendanceAttendeesModel = Convert.toClockingAttendanceAttendeesModel(json);
// //
// // These functions will throw an error if the JSON doesn't
// // match the expected interface, even if the JSON is valid.

// export interface ClockingAttendanceAttendeesModel {
//     additionalInfo: AdditionalInfo;
//     attendance:     Attendance;
//     lastSeen:       Date;
//     status:         string;
// }

// export interface AdditionalInfo {
//     id:                  number;
//     memberId:            number;
//     memberInfo:          MemberI;
//     placeOfWork:         string;
//     whatsapp:            string;
//     facebook:            string;
//     twitter:             string;
//     instagram:           string;
//     businessHashtag:     string;
//     businessDescription: string;
//     profession:          string;
//     dateJoined:          null;
//     date:                Date;
// }

// export interface MemberI {
//     id:                    number;
//     clientId:              number;
//     firstname:             string;
//     middlename:            string;
//     surname:               string;
//     gender:                number;
//     profilePicture:        string;
//     phone:                 string;
//     email:                 string;
//     dateOfBirth:           Date;
//     religion:              number;
//     nationality:           string;
//     countryOfResidence:    string;
//     stateProvince:         string;
//     region:                number;
//     district:              number;
//     constituency:          number;
//     electoralArea:         number;
//     community:             string;
//     hometown:              string;
//     houseNoDigitalAddress: string;
//     digitalAddress:        string;
//     level:                 number;
//     status:                number;
//     accountType:           number;
//     memberType:            number;
//     date:                  Date;
//     last_login:            Date;
//     referenceId:           string;
//     branchId:              number;
// }

// export interface Attendance {
//     id:                 number;
//     meetingEventId:     MeetingEventID;
//     memberId:           MemberI;
//     accountType:        number;
//     inOrOut:            boolean;
//     inTime:             Date;
//     outTime:            Date;
//     startBreak:         null;
//     endBreak:           null;
//     clockedBy:          number;
//     clockingMethod:     number;
//     validate:           boolean;
//     date:               Date;
//     clockingMethodName: string;
// }

// export interface MeetingEventID {
//     id:                        number;
//     type:                      number;
//     memberType:                number;
//     name:                      string;
//     clientId:                  ClientID;
//     branchId:                  BranchID;
//     memberCategoryId:          MemberCategoryID;
//     meetingSpan:               number;
//     startTime:                 string;
//     closeTime:                 string;
//     latenessTime:              null;
//     isRecuring:                boolean;
//     hasBreakTime:              boolean;
//     hasDuty:                   boolean;
//     hasOvertime:               boolean;
//     virtualMeetingLink:        string;
//     virtualMeetingType:        number;
//     meetingLocation:           number;
//     expectedMonthlyAttendance: number;
//     activeMonthlyAttendance:   number;
//     agenda:                    string;
//     agendaFile:                string;
//     updatedBy:                 number;
//     updateDate:                Date;
//     date:                      Date;
// }

// export interface BranchID {
//     id:           number;
//     name:         string;
//     accountId:    number;
//     createdBy:    number;
//     creationDate: Date;
//     updatedBy:    number;
//     updateDate:   Date;
// }

// export interface ClientID {
//     id:                       number;
//     name:                     string;
//     accountType:              number;
//     country:                  string;
//     stateProvince:            string;
//     applicantFirstname:       string;
//     applicantSurname:         string;
//     applicantGender:          number;
//     applicantPhone:           string;
//     applicantEmail:           string;
//     applicantDesignationRole: number;
//     region:                   number;
//     district:                 number;
//     constituency:             number;
//     community:                string;
//     subscriptionDuration:     string;
//     subscriptionDate:         Date;
//     subscriptionFee:          string;
//     logo:                     string;
//     status:                   number;
//     archive:                  number;
//     accountCategory:          MemberCategoryID;
//     website:                  null;
//     creationDate:             Date;
//     updatedBy:                number;
//     updateDate:               Date;
//     countryInfo:              CountryInfo[];
// }

// export interface MemberCategoryID {
//     id:         number;
//     clientId:   number;
//     category:   string;
//     createdBy:  number;
//     updatedBy:  number;
//     updateDate: Date | null;
//     date:       Date | null;
// }

// export interface CountryInfo {
//     id:    number;
//     name:  string;
//     short: string;
//     code:  string;
// }

// // Converts JSON strings to/from your types
// // and asserts the results of JSON.parse at runtime
// export class Convert {
//     public static toClockingAttendanceAttendeesModel(json: string): ClockingAttendanceAttendeesModel {
//         return cast(JSON.parse(json), r("ClockingAttendanceAttendeesModel"));
//     }

//     public static clockingAttendanceAttendeesModelToJson(value: ClockingAttendanceAttendeesModel): string {
//         return JSON.stringify(uncast(value, r("ClockingAttendanceAttendeesModel")), null, 2);
//     }
// }

// function invalidValue(typ: any, val: any, key: any = ''): never {
//     if (key) {
//         throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
//     }
//     throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
// }

// function jsonToJSProps(typ: any): any {
//     if (typ.jsonToJS === undefined) {
//         const map: any = {};
//         typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
//         typ.jsonToJS = map;
//     }
//     return typ.jsonToJS;
// }

// function jsToJSONProps(typ: any): any {
//     if (typ.jsToJSON === undefined) {
//         const map: any = {};
//         typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
//         typ.jsToJSON = map;
//     }
//     return typ.jsToJSON;
// }

// function transform(val: any, typ: any, getProps: any, key: any = ''): any {
//     function transformPrimitive(typ: string, val: any): any {
//         if (typeof typ === typeof val) return val;
//         return invalidValue(typ, val, key);
//     }

//     function transformUnion(typs: any[], val: any): any {
//         // val must validate against one typ in typs
//         const l = typs.length;
//         for (let i = 0; i < l; i++) {
//             const typ = typs[i];
//             try {
//                 return transform(val, typ, getProps);
//             } catch (_) {}
//         }
//         return invalidValue(typs, val);
//     }

//     function transformEnum(cases: string[], val: any): any {
//         if (cases.indexOf(val) !== -1) return val;
//         return invalidValue(cases, val);
//     }

//     function transformArray(typ: any, val: any): any {
//         // val must be an array with no invalid elements
//         if (!Array.isArray(val)) return invalidValue("array", val);
//         return val.map(el => transform(el, typ, getProps));
//     }

//     function transformDate(val: any): any {
//         if (val === null) {
//             return null;
//         }
//         const d = new Date(val);
//         if (isNaN(d.valueOf())) {
//             return invalidValue("Date", val);
//         }
//         return d;
//     }

//     function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
//         if (val === null || typeof val !== "object" || Array.isArray(val)) {
//             return invalidValue("object", val);
//         }
//         const result: any = {};
//         Object.getOwnPropertyNames(props).forEach(key => {
//             const prop = props[key];
//             const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
//             result[prop.key] = transform(v, prop.typ, getProps, prop.key);
//         });
//         Object.getOwnPropertyNames(val).forEach(key => {
//             if (!Object.prototype.hasOwnProperty.call(props, key)) {
//                 result[key] = transform(val[key], additional, getProps, key);
//             }
//         });
//         return result;
//     }

//     if (typ === "any") return val;
//     if (typ === null) {
//         if (val === null) return val;
//         return invalidValue(typ, val);
//     }
//     if (typ === false) return invalidValue(typ, val);
//     while (typeof typ === "object" && typ.ref !== undefined) {
//         typ = typeMap[typ.ref];
//     }
//     if (Array.isArray(typ)) return transformEnum(typ, val);
//     if (typeof typ === "object") {
//         return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
//             : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
//             : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
//             : invalidValue(typ, val);
//     }
//     // Numbers can be parsed by Date but shouldn't be.
//     if (typ === Date && typeof val !== "number") return transformDate(val);
//     return transformPrimitive(typ, val);
// }

// function cast<T>(val: any, typ: any): T {
//     return transform(val, typ, jsonToJSProps);
// }

// function uncast<T>(val: T, typ: any): any {
//     return transform(val, typ, jsToJSONProps);
// }

// function a(typ: any) {
//     return { arrayItems: typ };
// }

// function u(...typs: any[]) {
//     return { unionMembers: typs };
// }

// function o(props: any[], additional: any) {
//     return { props, additional };
// }

// function m(additional: any) {
//     return { props: [], additional };
// }

// function r(name: string) {
//     return { ref: name };
// }

// const typeMap: any = {
//     "ClockingAttendanceAttendeesModel": o([
//         { json: "additionalInfo", js: "additionalInfo", typ: r("AdditionalInfo") },
//         { json: "attendance", js: "attendance", typ: r("Attendance") },
//         { json: "lastSeen", js: "lastSeen", typ: Date },
//         { json: "status", js: "status", typ: "" },
//     ], false),
//     "AdditionalInfo": o([
//         { json: "id", js: "id", typ: 0 },
//         { json: "memberId", js: "memberId", typ: 0 },
//         { json: "memberInfo", js: "memberInfo", typ: r("MemberI") },
//         { json: "placeOfWork", js: "placeOfWork", typ: "" },
//         { json: "whatsapp", js: "whatsapp", typ: "" },
//         { json: "facebook", js: "facebook", typ: "" },
//         { json: "twitter", js: "twitter", typ: "" },
//         { json: "instagram", js: "instagram", typ: "" },
//         { json: "businessHashtag", js: "businessHashtag", typ: "" },
//         { json: "businessDescription", js: "businessDescription", typ: "" },
//         { json: "profession", js: "profession", typ: "" },
//         { json: "dateJoined", js: "dateJoined", typ: null },
//         { json: "date", js: "date", typ: Date },
//     ], false),
//     "MemberI": o([
//         { json: "id", js: "id", typ: 0 },
//         { json: "clientId", js: "clientId", typ: 0 },
//         { json: "firstname", js: "firstname", typ: "" },
//         { json: "middlename", js: "middlename", typ: "" },
//         { json: "surname", js: "surname", typ: "" },
//         { json: "gender", js: "gender", typ: 0 },
//         { json: "profilePicture", js: "profilePicture", typ: "" },
//         { json: "phone", js: "phone", typ: "" },
//         { json: "email", js: "email", typ: "" },
//         { json: "dateOfBirth", js: "dateOfBirth", typ: Date },
//         { json: "religion", js: "religion", typ: 0 },
//         { json: "nationality", js: "nationality", typ: "" },
//         { json: "countryOfResidence", js: "countryOfResidence", typ: "" },
//         { json: "stateProvince", js: "stateProvince", typ: "" },
//         { json: "region", js: "region", typ: 0 },
//         { json: "district", js: "district", typ: 0 },
//         { json: "constituency", js: "constituency", typ: 0 },
//         { json: "electoralArea", js: "electoralArea", typ: 0 },
//         { json: "community", js: "community", typ: "" },
//         { json: "hometown", js: "hometown", typ: "" },
//         { json: "houseNoDigitalAddress", js: "houseNoDigitalAddress", typ: "" },
//         { json: "digitalAddress", js: "digitalAddress", typ: "" },
//         { json: "level", js: "level", typ: 0 },
//         { json: "status", js: "status", typ: 0 },
//         { json: "accountType", js: "accountType", typ: 0 },
//         { json: "memberType", js: "memberType", typ: 0 },
//         { json: "date", js: "date", typ: Date },
//         { json: "last_login", js: "last_login", typ: Date },
//         { json: "referenceId", js: "referenceId", typ: "" },
//         { json: "branchId", js: "branchId", typ: 0 },
//     ], false),
//     "Attendance": o([
//         { json: "id", js: "id", typ: 0 },
//         { json: "meetingEventId", js: "meetingEventId", typ: r("MeetingEventID") },
//         { json: "memberId", js: "memberId", typ: r("MemberI") },
//         { json: "accountType", js: "accountType", typ: 0 },
//         { json: "inOrOut", js: "inOrOut", typ: true },
//         { json: "inTime", js: "inTime", typ: Date },
//         { json: "outTime", js: "outTime", typ: Date },
//         { json: "startBreak", js: "startBreak", typ: null },
//         { json: "endBreak", js: "endBreak", typ: null },
//         { json: "clockedBy", js: "clockedBy", typ: 0 },
//         { json: "clockingMethod", js: "clockingMethod", typ: 0 },
//         { json: "validate", js: "validate", typ: true },
//         { json: "date", js: "date", typ: Date },
//         { json: "clockingMethodName", js: "clockingMethodName", typ: "" },
//     ], false),
//     "MeetingEventID": o([
//         { json: "id", js: "id", typ: 0 },
//         { json: "type", js: "type", typ: 0 },
//         { json: "memberType", js: "memberType", typ: 0 },
//         { json: "name", js: "name", typ: "" },
//         { json: "clientId", js: "clientId", typ: r("ClientID") },
//         { json: "branchId", js: "branchId", typ: r("BranchID") },
//         { json: "memberCategoryId", js: "memberCategoryId", typ: r("MemberCategoryID") },
//         { json: "meetingSpan", js: "meetingSpan", typ: 0 },
//         { json: "startTime", js: "startTime", typ: "" },
//         { json: "closeTime", js: "closeTime", typ: "" },
//         { json: "latenessTime", js: "latenessTime", typ: null },
//         { json: "isRecuring", js: "isRecuring", typ: true },
//         { json: "hasBreakTime", js: "hasBreakTime", typ: true },
//         { json: "hasDuty", js: "hasDuty", typ: true },
//         { json: "hasOvertime", js: "hasOvertime", typ: true },
//         { json: "virtualMeetingLink", js: "virtualMeetingLink", typ: "" },
//         { json: "virtualMeetingType", js: "virtualMeetingType", typ: 0 },
//         { json: "meetingLocation", js: "meetingLocation", typ: 0 },
//         { json: "expectedMonthlyAttendance", js: "expectedMonthlyAttendance", typ: 0 },
//         { json: "activeMonthlyAttendance", js: "activeMonthlyAttendance", typ: 0 },
//         { json: "agenda", js: "agenda", typ: "" },
//         { json: "agendaFile", js: "agendaFile", typ: "" },
//         { json: "updatedBy", js: "updatedBy", typ: 0 },
//         { json: "updateDate", js: "updateDate", typ: Date },
//         { json: "date", js: "date", typ: Date },
//     ], false),
//     "BranchID": o([
//         { json: "id", js: "id", typ: 0 },
//         { json: "name", js: "name", typ: "" },
//         { json: "accountId", js: "accountId", typ: 0 },
//         { json: "createdBy", js: "createdBy", typ: 0 },
//         { json: "creationDate", js: "creationDate", typ: Date },
//         { json: "updatedBy", js: "updatedBy", typ: 0 },
//         { json: "updateDate", js: "updateDate", typ: Date },
//     ], false),
//     "ClientID": o([
//         { json: "id", js: "id", typ: 0 },
//         { json: "name", js: "name", typ: "" },
//         { json: "accountType", js: "accountType", typ: 0 },
//         { json: "country", js: "country", typ: "" },
//         { json: "stateProvince", js: "stateProvince", typ: "" },
//         { json: "applicantFirstname", js: "applicantFirstname", typ: "" },
//         { json: "applicantSurname", js: "applicantSurname", typ: "" },
//         { json: "applicantGender", js: "applicantGender", typ: 0 },
//         { json: "applicantPhone", js: "applicantPhone", typ: "" },
//         { json: "applicantEmail", js: "applicantEmail", typ: "" },
//         { json: "applicantDesignationRole", js: "applicantDesignationRole", typ: 0 },
//         { json: "region", js: "region", typ: 0 },
//         { json: "district", js: "district", typ: 0 },
//         { json: "constituency", js: "constituency", typ: 0 },
//         { json: "community", js: "community", typ: "" },
//         { json: "subscriptionDuration", js: "subscriptionDuration", typ: "" },
//         { json: "subscriptionDate", js: "subscriptionDate", typ: Date },
//         { json: "subscriptionFee", js: "subscriptionFee", typ: "" },
//         { json: "logo", js: "logo", typ: "" },
//         { json: "status", js: "status", typ: 0 },
//         { json: "archive", js: "archive", typ: 0 },
//         { json: "accountCategory", js: "accountCategory", typ: r("MemberCategoryID") },
//         { json: "website", js: "website", typ: null },
//         { json: "creationDate", js: "creationDate", typ: Date },
//         { json: "updatedBy", js: "updatedBy", typ: 0 },
//         { json: "updateDate", js: "updateDate", typ: Date },
//         { json: "countryInfo", js: "countryInfo", typ: a(r("CountryInfo")) },
//     ], false),
//     "MemberCategoryID": o([
//         { json: "id", js: "id", typ: 0 },
//         { json: "clientId", js: "clientId", typ: 0 },
//         { json: "category", js: "category", typ: "" },
//         { json: "createdBy", js: "createdBy", typ: 0 },
//         { json: "updatedBy", js: "updatedBy", typ: 0 },
//         { json: "updateDate", js: "updateDate", typ: u(Date, null) },
//         { json: "date", js: "date", typ: u(Date, null) },
//     ], false),
//     "CountryInfo": o([
//         { json: "id", js: "id", typ: 0 },
//         { json: "name", js: "name", typ: "" },
//         { json: "short", js: "short", typ: "" },
//         { json: "code", js: "code", typ: "" },
//     ], false),
// };
