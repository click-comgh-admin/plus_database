"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["src_addons_interfaces_members_groupings_group_models_member_index_ts-src_addons_interfaces_me-323f1e"],{57659:(e,r,o)=>{o.r(r),o.d(r,{Convert:()=>s,typeMap:()=>c});var t=o(77684),n=o(10428);class s{static toGroupMemberModel(e){return u(JSON.parse(e),l("GroupMemberModel"),p)}static groupMemberModelToJson(e){return JSON.stringify(u(e,l("GroupMemberModel"),i),null,2)}}function p(e){if(void 0===e.jsonToJS){const r={};e.props.forEach((e=>r[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=r}return e.jsonToJS}function i(e){if(void 0===e.jsToJSON){const r={};e.props.forEach((e=>r[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=r}return e.jsToJSON}function u(e,r,o,t=""){if("any"===r)return e;if(null===r&&null===e)return e;if(!1!==r){for(;"object"==typeof r&&void 0!==r.ref;)r=c[r.ref];return Array.isArray(r)?function(e,r){if(-1!==e.indexOf(r))return r}(r,e):"object"==typeof r?r.hasOwnProperty("unionMembers")?function(e,r){const t=e.length;for(let n=0;n<t;n++){const t=e[n];try{return u(r,t,o)}catch(e){}}}(r.unionMembers,e):r.hasOwnProperty("arrayItems")?function(e,r){if(Array.isArray(r))return r.map((r=>u(r,e,o)))}(r.arrayItems,e):r.hasOwnProperty("props")?function(e,r,t){if(null===t||"object"!=typeof t||Array.isArray(t))return;const n={};return Object.getOwnPropertyNames(e).forEach((r=>{const s=e[r],p=Object.prototype.hasOwnProperty.call(t,r)?t[r]:void 0;n[s.key]=u(p,s.typ,o,s.key)})),Object.getOwnPropertyNames(t).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(n[s]=u(t[s],r,o,s))})),n}(o(r),r.additional,e):void 0:r===Date&&"number"!=typeof e?function(e){if(null===e)return null;const r=new Date(e);return isNaN(r.valueOf())?void 0:r}(e):function(e,r){if(typeof e==typeof r)return r}(r,e)}}function a(...e){return{unionMembers:e}}function l(e){return{ref:e}}const c={GroupMemberModel:(y=[{json:"id",js:"id",typ:a(null,0)},{json:"groupId",js:"groupId",typ:a(null,l("GroupModel"))},{json:"memberId",js:"memberId",typ:a(null,0)},{json:"date",js:"date",typ:a(null,Date)},{json:"memberInfo",js:"memberInfo",typ:a(null,l("MembershipMixedUserModel"))}],!1,{props:y,additional:false}),GroupModel:n.typeMap.GroupModel,MembershipMixedUserModel:t.typeMap.MembershipMixedUserModel,GroupingsMemberCategoryModel:t.typeMap.GroupingsMemberCategoryModel,BranchInfo:t.typeMap.BranchInfo,GroupingsOrganizationTypeModel:t.typeMap.GroupingsOrganizationTypeModel,Certificate:t.typeMap.Certificate,Attachment:t.typeMap.Attachment,FolderID:t.typeMap.FolderID,RegionInfo:t.typeMap.RegionInfo,CountryInfo:t.typeMap.CountryInfo,DistrictConstituencyElectoralAreaInfo:t.typeMap.DistrictConstituencyElectoralAreaInfo};var y},31848:(e,r,o)=>{o.r(r),o.d(r,{Convert:()=>p,typeMap:()=>y});var t=o(51594),n=o(10428),s=o(77684);class p{static toSubGroupMemberModel(e){return a(JSON.parse(e),c("SubGroupMemberModel"),i)}static subGroupMemberModelToJson(e){return JSON.stringify(a(e,c("SubGroupMemberModel"),u),null,2)}}function i(e){if(void 0===e.jsonToJS){const r={};e.props.forEach((e=>r[e.json]={key:e.js,typ:e.typ})),e.jsonToJS=r}return e.jsonToJS}function u(e){if(void 0===e.jsToJSON){const r={};e.props.forEach((e=>r[e.js]={key:e.json,typ:e.typ})),e.jsToJSON=r}return e.jsToJSON}function a(e,r,o,t=""){if("any"===r)return e;if(null===r&&null===e)return e;if(!1!==r){for(;"object"==typeof r&&void 0!==r.ref;)r=y[r.ref];return Array.isArray(r)?function(e,r){if(-1!==e.indexOf(r))return r}(r,e):"object"==typeof r?r.hasOwnProperty("unionMembers")?function(e,r){const t=e.length;for(let n=0;n<t;n++){const t=e[n];try{return a(r,t,o)}catch(e){}}}(r.unionMembers,e):r.hasOwnProperty("arrayItems")?function(e,r){if(Array.isArray(r))return r.map((r=>a(r,e,o)))}(r.arrayItems,e):r.hasOwnProperty("props")?function(e,r,t){if(null===t||"object"!=typeof t||Array.isArray(t))return;const n={};return Object.getOwnPropertyNames(e).forEach((r=>{const s=e[r],p=Object.prototype.hasOwnProperty.call(t,r)?t[r]:void 0;n[s.key]=a(p,s.typ,o,s.key)})),Object.getOwnPropertyNames(t).forEach((s=>{Object.prototype.hasOwnProperty.call(e,s)||(n[s]=a(t[s],r,o,s))})),n}(o(r),r.additional,e):void 0:r===Date&&"number"!=typeof e?function(e){if(null===e)return null;const r=new Date(e);return isNaN(r.valueOf())?void 0:r}(e):function(e,r){if(typeof e==typeof r)return r}(r,e)}}function l(...e){return{unionMembers:e}}function c(e){return{ref:e}}const y={SubGroupMemberModel:(f=[{json:"id",js:"id",typ:l(null,0)},{json:"subgroupId",js:"subgroupId",typ:l(null,c("SubGroupModel"))},{json:"memberId",js:"memberId",typ:l(null,0)},{json:"date",js:"date",typ:l(null,Date)},{json:"memberInfo",js:"memberInfo",typ:l(null,c("MembershipMixedUserModel"))}],!1,{props:f,additional:false}),GroupModel:n.typeMap.GroupModel,SubGroupModel:t.typeMap.SubGroupModel,MembershipMixedUserModel:s.typeMap.MembershipMixedUserModel,GroupingsMemberCategoryModel:s.typeMap.GroupingsMemberCategoryModel,BranchInfo:s.typeMap.BranchInfo,GroupingsOrganizationTypeModel:s.typeMap.GroupingsOrganizationTypeModel,Certificate:s.typeMap.Certificate,Attachment:s.typeMap.Attachment,FolderID:s.typeMap.FolderID,RegionInfo:s.typeMap.RegionInfo,CountryInfo:s.typeMap.CountryInfo,DistrictConstituencyElectoralAreaInfo:s.typeMap.DistrictConstituencyElectoralAreaInfo};var f},28058:(e,r,o)=>{o.r(r),o.d(r,{GET_GroupingsGroupMembers:()=>i});var t=o(48485),n=o(87270),s=o(14492),p=o(33600);function i(e=null,r=""){return o=this,i=void 0,a=function*(){const o=(0,p.getUserLoginInfoCookie)(),i=t.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/group-member"+(null===e?"":"/"+e)+r,u=yield(0,n.http)(i,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new s.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let r=u;return r.error=e,new s.NetWorkCallResponses("get",r,!0)}},new((u=void 0)||(u=Promise))((function(e,r){function t(e){try{s(a.next(e))}catch(e){r(e)}}function n(e){try{s(a.throw(e))}catch(e){r(e)}}function s(r){var o;r.done?e(r.value):(o=r.value,o instanceof u?o:new u((function(e){e(o)}))).then(t,n)}s((a=a.apply(o,i||[])).next())}));var o,i,u,a}},32413:(e,r,o)=>{o.r(r),o.d(r,{GET_GroupingsSubGroupMembers:()=>i});var t=o(48485),n=o(87270),s=o(14492),p=o(33600);function i(e=null,r=""){return o=this,i=void 0,a=function*(){const o=(0,p.getUserLoginInfoCookie)(),i=t.CONSTANTS.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group-member"+(null===e?"":"/"+e)+r,u=yield(0,n.http)(i,{method:"GET",headers:{Authorization:"Token "+o.token}},!0);try{return new s.NetWorkCallResponses("get",u)}catch(e){console.error({error:e});let r=u;return r.error=e,new s.NetWorkCallResponses("get",r,!0)}},new((u=void 0)||(u=Promise))((function(e,r){function t(e){try{s(a.next(e))}catch(e){r(e)}}function n(e){try{s(a.throw(e))}catch(e){r(e)}}function s(r){var o;r.done?e(r.value):(o=r.value,o instanceof u?o:new u((function(e){e(o)}))).then(t,n)}s((a=a.apply(o,i||[])).next())}));var o,i,u,a}}}]);
//# sourceMappingURL=src_addons_interfaces_members_groupings_group_models_member_index_ts-src_addons_interfaces_me-323f1e.js.map