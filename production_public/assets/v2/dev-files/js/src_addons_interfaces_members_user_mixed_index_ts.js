"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_members_user_mixed_index_ts"],{88527:(n,t,e)=>{e.r(t),e.d(t,{Convert:()=>o,typeMap:()=>u});class o{static toGroupingsMemberCategoryModel(n){return l(JSON.parse(n),i("GroupingsMemberCategoryModel"),s)}static groupingsMemberCategoryModelToJson(n){return JSON.stringify(l(n,i("GroupingsMemberCategoryModel"),r),null,2)}}function s(n){if(void 0===n.jsonToJS){const t={};n.props.forEach((n=>t[n.json]={key:n.js,typ:n.typ})),n.jsonToJS=t}return n.jsonToJS}function r(n){if(void 0===n.jsToJSON){const t={};n.props.forEach((n=>t[n.js]={key:n.json,typ:n.typ})),n.jsToJSON=t}return n.jsToJSON}function l(n,t,e,o=""){if("any"===t)return n;if(null===t&&null===n)return n;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(n,t){if(-1!==n.indexOf(t))return t}(t,n):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(n,t){const o=n.length;for(let s=0;s<o;s++){const o=n[s];try{return l(t,o,e)}catch(n){}}}(t.unionMembers,n):t.hasOwnProperty("arrayItems")?function(n,t){if(Array.isArray(t))return t.map((t=>l(t,n,e)))}(t.arrayItems,n):t.hasOwnProperty("props")?function(n,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const s={};return Object.getOwnPropertyNames(n).forEach((t=>{const r=n[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[r.key]=l(a,r.typ,e,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(n,r)||(s[r]=l(o[r],t,e,r))})),s}(e(t),t.additional,n):void 0:t===Date&&"number"!=typeof n?function(n){if(null===n)return null;const t=new Date(n);return isNaN(t.valueOf())?void 0:t}(n):function(n,t){if(typeof n==typeof t)return t}(t,n)}}function a(...n){return{unionMembers:n}}function i(n){return{ref:n}}const u={GroupingsMemberCategoryModel:(p=[{json:"id",js:"id",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"category",js:"category",typ:a(null,"")},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1,{props:p,additional:false})};var p},19579:(n,t,e)=>{e.r(t),e.d(t,{Convert:()=>o,typeMap:()=>u});class o{static toGroupingsOrganizationTypeModel(n){return l(JSON.parse(n),i("GroupingsOrganizationTypeModel"),s)}static groupingsOrganizationTypeModelToJson(n){return JSON.stringify(l(n,i("GroupingsOrganizationTypeModel"),r),null,2)}}function s(n){if(void 0===n.jsonToJS){const t={};n.props.forEach((n=>t[n.json]={key:n.js,typ:n.typ})),n.jsonToJS=t}return n.jsonToJS}function r(n){if(void 0===n.jsToJSON){const t={};n.props.forEach((n=>t[n.js]={key:n.json,typ:n.typ})),n.jsToJSON=t}return n.jsToJSON}function l(n,t,e,o=""){if("any"===t)return n;if(null===t&&null===n)return n;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=u[t.ref];return Array.isArray(t)?function(n,t){if(-1!==n.indexOf(t))return t}(t,n):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(n,t){const o=n.length;for(let s=0;s<o;s++){const o=n[s];try{return l(t,o,e)}catch(n){}}}(t.unionMembers,n):t.hasOwnProperty("arrayItems")?function(n,t){if(Array.isArray(t))return t.map((t=>l(t,n,e)))}(t.arrayItems,n):t.hasOwnProperty("props")?function(n,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const s={};return Object.getOwnPropertyNames(n).forEach((t=>{const r=n[t],a=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[r.key]=l(a,r.typ,e,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(n,r)||(s[r]=l(o[r],t,e,r))})),s}(e(t),t.additional,n):void 0:t===Date&&"number"!=typeof n?function(n){if(null===n)return null;const t=new Date(n);return isNaN(t.valueOf())?void 0:t}(n):function(n,t){if(typeof n==typeof t)return t}(t,n)}}function a(...n){return{unionMembers:n}}function i(n){return{ref:n}}const u={GroupingsOrganizationTypeModel:(p=[{json:"id",js:"id",typ:a(null,0)},{json:"memberId",js:"memberID",typ:a(null,0)},{json:"clientId",js:"clientID",typ:a(null,0)},{json:"type",js:"type",typ:a(null,"")},{json:"createdBy",js:"createdBy",typ:a(null,0)},{json:"updatedBy",js:"updatedBy",typ:a(null,0)},{json:"updateDate",js:"updateDate",typ:a(null,Date)},{json:"date",js:"date",typ:a(null,Date)}],!1,{props:p,additional:false})};var p},77684:(n,t,e)=>{e.r(t),e.d(t,{Convert:()=>r,typeMap:()=>c});var o=e(88527),s=e(19579);class r{static toMembershipMixedUserModel(n){return i(JSON.parse(n),j("MembershipMixedUserModel"),l)}static membershipMixedUserModelToJson(n){return JSON.stringify(i(n,j("MembershipMixedUserModel"),a),null,2)}}function l(n){if(void 0===n.jsonToJS){const t={};n.props.forEach((n=>t[n.json]={key:n.js,typ:n.typ})),n.jsonToJS=t}return n.jsonToJS}function a(n){if(void 0===n.jsToJSON){const t={};n.props.forEach((n=>t[n.js]={key:n.json,typ:n.typ})),n.jsToJSON=t}return n.jsToJSON}function i(n,t,e,o=""){if("any"===t)return n;if(null===t&&null===n)return n;if(!1!==t){for(;"object"==typeof t&&void 0!==t.ref;)t=c[t.ref];return Array.isArray(t)?function(n,t){if(-1!==n.indexOf(t))return t}(t,n):"object"==typeof t?t.hasOwnProperty("unionMembers")?function(n,t){const o=n.length;for(let s=0;s<o;s++){const o=n[s];try{return i(t,o,e)}catch(n){}}}(t.unionMembers,n):t.hasOwnProperty("arrayItems")?function(n,t){if(Array.isArray(t))return t.map((t=>i(t,n,e)))}(t.arrayItems,n):t.hasOwnProperty("props")?function(n,t,o){if(null===o||"object"!=typeof o||Array.isArray(o))return;const s={};return Object.getOwnPropertyNames(n).forEach((t=>{const r=n[t],l=Object.prototype.hasOwnProperty.call(o,t)?o[t]:void 0;s[r.key]=i(l,r.typ,e,r.key)})),Object.getOwnPropertyNames(o).forEach((r=>{Object.prototype.hasOwnProperty.call(n,r)||(s[r]=i(o[r],t,e,r))})),s}(e(t),t.additional,n):void 0:t===Date&&"number"!=typeof n?function(n){if(null===n)return null;const t=new Date(n);return isNaN(t.valueOf())?void 0:t}(n):function(n,t){if(typeof n==typeof t)return t}(t,n)}}function u(n){return{arrayItems:n}}function p(...n){return{unionMembers:n}}function y(n,t){return{props:n,additional:t}}function j(n){return{ref:n}}const c={MembershipMixedUserModel:y([{json:"id",js:"id",typ:p(null,0)},{json:"clientId",js:"clientId",typ:p(null,0)},{json:"firstname",js:"firstname",typ:p(null,"")},{json:"middlename",js:"middlename",typ:p(null,"")},{json:"surname",js:"surname",typ:p(null,"")},{json:"gender",js:"gender",typ:p(null,0)},{json:"profilePicture",js:"profilePicture",typ:p(null,"")},{json:"phone",js:"phone",typ:p(null,"")},{json:"email",js:"email",typ:p(null,"")},{json:"dateOfBirth",js:"dateOfBirth",typ:p(null,Date)},{json:"religion",js:"religion",typ:p(null,0)},{json:"nationality",js:"nationality",typ:p(null,"")},{json:"countryOfResidence",js:"countryOfResidence",typ:p(null,"")},{json:"stateProvince",js:"stateProvince",typ:p(null,"")},{json:"region",js:"region",typ:p(null,0)},{json:"district",js:"district",typ:p(null,0)},{json:"constituency",js:"constituency",typ:p(null,0)},{json:"electoralArea",js:"electoralArea",typ:p(null,0)},{json:"community",js:"community",typ:p(null,"")},{json:"hometown",js:"hometown",typ:p(null,"")},{json:"houseNoDigitalAddress",js:"houseNoDigitalAddress",typ:p(null,"")},{json:"digitalAddress",js:"digitalAddress",typ:p(null,"")},{json:"level",js:"level",typ:p(null,0)},{json:"status",js:"status",typ:p(null,0)},{json:"accountType",js:"accountType",typ:p(null,0)},{json:"memberType",js:"memberType",typ:p(null,0)},{json:"date",js:"date",typ:p(null,Date)},{json:"last_login",js:"lastLogin",typ:p(null,Date)},{json:"referenceId",js:"referenceId",typ:p(null,"")},{json:"branchId",js:"branchId",typ:p(null,0)},{json:"editable",js:"editable",typ:p(null,!0)},{json:"profileResume",js:"profileResume",typ:p(null,"")},{json:"profileIdentification",js:"profileIdentification",typ:p(null,"")},{json:"archived",js:"archived",typ:p(null,!0)},{json:"branchInfo",js:"branchInfo",typ:p(null,j("BranchInfo"))},{json:"categoryInfo",js:"categoryInfo",typ:p(null,j("GroupingsMemberCategoryModel"))},{json:"countryInfo",js:"countryInfo",typ:p(null,u(j("CountryInfo")))},{json:"regionInfo",js:"regionInfo",typ:p(null,j("RegionInfo"))},{json:"districtInfo",js:"districtInfo",typ:p(null,j("DistrictConstituencyElectoralAreaInfo"))},{json:"constituencyInfo",js:"constituencyInfo",typ:p(null,j("DistrictConstituencyElectoralAreaInfo"))},{json:"electoralareaInfo",js:"electoralareaInfo",typ:p(null,j("DistrictConstituencyElectoralAreaInfo"))},{json:"organizationName",js:"organizationName",typ:p(null,"")},{json:"contactPersonName",js:"contactPersonName",typ:p(null,"")},{json:"organizationType",js:"organizationType",typ:p(null,j("GroupingsOrganizationTypeModel"))},{json:"businessRegistered",js:"businessRegistered",typ:p(null,!0)},{json:"organizationPhone",js:"organizationPhone",typ:p(null,"")},{json:"organizationEmail",js:"organizationEmail",typ:p(null,"")},{json:"contactPersonGender",js:"contactPersonGender",typ:p(null,0)},{json:"contactPersonPhoto",js:"contactPersonPhoto",typ:p(null,"")},{json:"dateOfIncorporation",js:"dateOfIncorporation",typ:p(null,Date)},{json:"logo",js:"logo",typ:p(null,"")},{json:"contactPersonPhone",js:"contactPersonPhone",typ:p(null,"")},{json:"contactPersonEmail",js:"contactPersonEmail",typ:p(null,"")},{json:"countryOfBusiness",js:"countryOfBusiness",typ:p(null,"")},{json:"certificates",js:"certificates",typ:p(null,u(j("Certificate")))},{json:"identification",js:"identification",typ:p(null,"")}],!1),BranchInfo:y([{json:"id",js:"id",typ:p(null,0)},{json:"name",js:"name",typ:p(null,"")},{json:"accountId",js:"accountId",typ:p(null,0)},{json:"createdBy",js:"createdBy",typ:p(null,0)},{json:"creationDate",js:"creationDate",typ:p(null,Date)},{json:"updatedBy",js:"updatedBy",typ:p(null,0)},{json:"updateDate",js:"updateDate",typ:p(null,Date)}],!1),GroupingsMemberCategoryModel:o.typeMap.GroupingsMemberCategoryModel,GroupingsOrganizationTypeModel:s.typeMap.GroupingsOrganizationTypeModel,Certificate:y([{json:"id",js:"id",typ:p(null,0)},{json:"memberId",js:"memberId",typ:p(null,0)},{json:"attachment",js:"attachment",typ:p(null,j("Attachment"))},{json:"date",js:"date",typ:p(null,Date)}],!1),Attachment:y([{json:"id",js:"id",typ:p(null,0)},{json:"clientId",js:"clientId",typ:p(null,0)},{json:"attachment",js:"attachment",typ:p(null,"")},{json:"filename",js:"filename",typ:p(null,"")},{json:"source",js:"source",typ:p(null,"")},{json:"size",js:"size",typ:p(null,"")},{json:"folderId",js:"folderId",typ:p(null,j("FolderID"))},{json:"fileDescription",js:"fileDescription",typ:p(null,"")},{json:"createdBy",js:"createdBy",typ:p(null,0)},{json:"updatedBy",js:"updatedBy",typ:p(null,0)},{json:"updateDate",js:"updateDate",typ:p(null,Date)},{json:"archived",js:"archived",typ:p(null,!0)},{json:"archivedBy",js:"archivedBy",typ:p(null,0)},{json:"archivedDate",js:"archivedDate",typ:p(null,Date)},{json:"date",js:"date",typ:p(null,Date)}],!1),FolderID:y([{json:"id",js:"id",typ:p(null,0)},{json:"parentFolder",js:"parentFolder",typ:p(null,p(0,null))},{json:"clientId",js:"clientId",typ:p(null,0)},{json:"branchId",js:"branchId",typ:p(null,0)},{json:"folder",js:"folder",typ:p(null,"")},{json:"folderType",js:"folderType",typ:p(null,0)},{json:"createdBy",js:"createdBy",typ:p(null,0)},{json:"updatedBy",js:"updatedBy",typ:p(null,0)},{json:"updateDate",js:"updateDate",typ:p(null,Date)},{json:"date",js:"date",typ:p(null,Date)}],!1),DistrictConstituencyElectoralAreaInfo:y([{json:"id",js:"id",typ:p(null,0)},{json:"regionId",js:"regionId",typ:p(null,j("RegionInfo"))},{json:"districtId",js:"districtId",typ:p(null,p(j("DistrictConstituencyElectoralAreaInfo"),null))},{json:"location",js:"location",typ:p(null,"")}],!1),RegionInfo:y([{json:"id",js:"id",typ:p(null,0)},{json:"location",js:"location",typ:p(null,"")}],!1),CountryInfo:y([{json:"id",js:"id",typ:p(null,0)},{json:"name",js:"name",typ:p(null,"")},{json:"short",js:"short",typ:p(null,"")},{json:"code",js:"code",typ:p(null,"")}],!1)}}}]);
//# sourceMappingURL=src_addons_interfaces_members_user_mixed_index_ts.js.map