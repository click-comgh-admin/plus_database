"use strict";!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webpackNumbers=t():e.webpackNumbers=t()}(self,(()=>(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([[1104],{4173:(e,t,a)=>{a.d(t,{_:()=>n});const n=(e,t)=>(new Date,new Date(`${e}`).toLocaleDateString("en-US",t))},2831:(e,t,a)=>{a.d(t,{h:()=>n});const n=e=>{const t=new Date,a=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()} ${e}`;return new Date(a)}},8967:(e,t,a)=>{a.d(t,{T:()=>n});const n=(e,t=!0)=>{if(Array.isArray(e)){let a=(t?"<style>#swal2-validation-message{\n  display: flex !important;\n  justify-content: flex-start !important;\n  font-weight: 600 !important;\n}#swal2-validation-message>ul{list-style: inside !important; margin: 0 !important;}</style>":"")+"<ul>";return e.forEach((e=>{a+="string"==typeof e?`<li>${e}</li>\n`:`<li>${e.error}</li>\n`})),a+="</ul>"}throw new Error("Unknown error response format")}},4108:(e,t,a)=>{a.d(t,{B:()=>i});var n=a(771),c=a(7270),r=a(7052),l=a(1942),s=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};const d=(e,t,a)=>s(void 0,void 0,void 0,(function*(){const s=n.t.URLS.AKWAABA_API_BASE_URL+"clients/login-id",d=a,i=JSON.stringify({email:e,id:t});yield(0,c.d)(s,{method:"POST",body:i},!0).then((e=>{if(e.jsonData.token){const t=(0,r.h)(String(e.jsonData.token));(0,l.Ad)(d,t,10),(0,l.vh)(d+"_date",(new Date).toUTCString(),10)}}))})),i=(e,t,a)=>s(void 0,void 0,void 0,(function*(){const i=(0,r.h)(String(t)),o=a;window.supersecret={unknowable:{ops:{email:e,id:i,cookieName:o}}},""==(0,l.Hl)(o)?yield d(e,i,a):yield((e,t,a)=>s(void 0,void 0,void 0,(function*(){const i=n.t.URLS.AKWAABA_API_BASE_URL+"clients/verify-token",o=a,u=(0,l.Hl)(o),h=JSON.stringify({token:(0,r.t)(u)});if((e=>{const t=new Date;return Math.abs(e.getTime()-t.getTime())/36e5<24})(new Date((0,l.Hl)(o+"_date"))))return u;yield(0,c.d)(i,{method:"POST",body:h},!0).then((n=>s(void 0,void 0,void 0,(function*(){if(n.jsonData.token&n.jsonData.user&n.jsonData.expiry){const e=(0,r.h)(String(n.jsonData.token));(0,l.Ad)(o,e,10),(0,l.vh)(o+"_date",(new Date).toUTCString(),10)}else yield d(e,t,a)}))))})))(e,i,a)}))},4672:(e,t,a)=>{a.d(t,{Jx:()=>c,O1:()=>n,W3:()=>r});const n=()=>{const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries())},c=e=>{const t=new URLSearchParams(window.location.search),a=Object.fromEntries(t.entries());let n=null;for(const t in a)t===e&&(n=a[t]);return n},r=e=>{let t="",a=0;for(const n in e)a+=1,t+=`${a>1?"&":""}${n}=${e[n]}`;return t}},1148:(e,t,a)=>{a.d(t,{e:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null){return t=this,a=void 0,d=function*(){const t=(0,l.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day-of-week"+(null===e?"":"/"+e),s=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function c(e){try{l(d.next(e))}catch(e){n(e)}}function r(e){try{l(d.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(c,r)}l((d=d.apply(t,a||[])).next())}));var t,a,s,d}},5663:(e,t,a)=>{a.d(t,{p:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null){return t=this,a=void 0,d=function*(){const t=(0,l.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/link-types"+(null===e?"":"/"+e),s=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function c(e){try{l(d.next(e))}catch(e){n(e)}}function r(e){try{l(d.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(c,r)}l((d=d.apply(t,a||[])).next())}));var t,a,s,d}},6404:(e,t,a)=>{a.d(t,{E:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null){return t=this,a=void 0,d=function*(){const t=(0,l.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/locations"+(null===e?"":"/"+e),s=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function c(e){try{l(d.next(e))}catch(e){n(e)}}function r(e){try{l(d.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(c,r)}l((d=d.apply(t,a||[])).next())}));var t,a,s,d}},7790:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null){return t=this,a=void 0,d=function*(){const t=(0,l.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/member-types"+(null===e?"":"/"+e),s=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function c(e){try{l(d.next(e))}catch(e){n(e)}}function r(e){try{l(d.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(c,r)}l((d=d.apply(t,a||[])).next())}));var t,a,s,d}},28:(e,t,a)=>{a.d(t,{B:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null){return t=this,a=void 0,d=function*(){const t=(0,l.Ie)(),a=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/types"+(null===e?"":"/"+e),s=yield(0,c.d)(a,{method:"GET",headers:{Authorization:"Token "+t.token}},!0);try{return new r.H("get",s)}catch(e){console.error({error:e});let t=s;return t.error=e,new r.H("get",t,!0)}},new((s=void 0)||(s=Promise))((function(e,n){function c(e){try{l(d.next(e))}catch(e){n(e)}}function r(e){try{l(d.throw(e))}catch(e){n(e)}}function l(t){var a;t.done?e(t.value):(a=t.value,a instanceof s?a:new s((function(e){e(a)}))).then(c,r)}l((d=d.apply(t,a||[])).next())}));var t,a,s,d}},4331:(e,t,a)=>{a.d(t,{v:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/admin"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},2404:(e,t,a)=>{a.d(t,{f:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/attachment"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},706:(e,t,a)=>{a.d(t,{h:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/break"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},8698:(e,t,a)=>{a.d(t,{R:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/date"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},7824:(e,t,a)=>{a.d(t,{E:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/day"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},4843:(e,t,a)=>{a.d(t,{S:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/group"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},606:(e,t,a)=>{a.d(t,{I:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/location"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},6637:(e,t,a)=>{a.d(t,{n:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/member"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},2218:(e,t,a)=>{a.d(t,{u:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},2482:(e,t,a)=>{a.d(t,{p:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/sms"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},8786:(e,t,a)=>{a.d(t,{s:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/subgroup"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},6262:(e,t,a)=>{a.d(t,{a:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"clients/user"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},2892:(e,t,a)=>{a.d(t,{c:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/group"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},9605:(e,t,a)=>{a.d(t,{U:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t=""){return a=this,s=void 0,i=function*(){const a=(0,l.Ie)(),s=n.t.URLS.AKWAABA_API_BASE_URL+"members/groupings/sub-group"+(null===e?"":"/"+e)+t,d=yield(0,c.d)(s,{method:"GET",headers:{Authorization:"Token "+a.token}},!0);try{return new r.H("get",d)}catch(e){console.error({error:e});let t=d;return t.error=e,new r.H("get",t,!0)}},new((d=void 0)||(d=Promise))((function(e,t){function n(e){try{r(i.next(e))}catch(e){t(e)}}function c(e){try{r(i.throw(e))}catch(e){t(e)}}function r(t){var a;t.done?e(t.value):(a=t.value,a instanceof d?a:new d((function(e){e(a)}))).then(n,c)}r((i=i.apply(a,s||[])).next())}));var a,s,d,i}},6656:(e,t,a)=>{a.d(t,{E:()=>s});var n=a(771),c=a(7270),r=a(596),l=a(3600);function s(e=null,t="",a=!1){return s=this,d=void 0,o=function*(){const s=n.t.URLS.AKWAABA_API_BASE_URL+"members/user"+(null===e?"":"/"+e)+t,d=n.t.URLS.AKWAABA_API_BASE_URL+"members/user/location"+(null===e?"":"/"+e)+t,i=(0,l.Ie)(),o=a?d:s,u=yield(0,c.d)(o,{method:"GET",headers:{Authorization:"Token "+i.token}},!0);try{return new r.H("get",u)}catch(e){console.error({error:e});let t=u;return t.error=e,new r.H("get",t,!0)}},new((i=void 0)||(i=Promise))((function(e,t){function a(e){try{c(o.next(e))}catch(e){t(e)}}function n(e){try{c(o.throw(e))}catch(e){t(e)}}function c(t){var c;t.done?e(t.value):(c=t.value,c instanceof i?c:new i((function(e){e(c)}))).then(a,n)}c((o=o.apply(s,d||[])).next())}));var s,d,i,o}},1854:(e,t,a)=>{var n=a(9392),c=a(1936),r=(a(5248),a(934),a(9261),a(3504),a(4277),a(3313),function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let d=class extends n.oi{constructor(){super(),this.index=0,this._widget=n.dy``,this.no_delete=!1,this.single=!1,this._single="[]"}set widget(e){this._widget=e,this.requestUpdate()}get widget(){return this._widget}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return s(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.single?this._single="":this._single="[]"}))}disconnectedCallback(){}render(){return n.dy`
      <div class="container">
        <header class="form-input-container">
          ${this.no_delete?n.Ld:n.dy`
            <mwc-icon-button icon="delete_forever" class="danger"
              @click="${this.deleteQuestion}"></mwc-icon-button>`}
        </header>
        <main>
          ${this.widget}
        </main>
      </div>
    `}deleteQuestion(e){e.preventDefault(),this.remove()}firstUpdated(){return s(this,void 0,void 0,(function*(){}))}createRenderRoot(){return this}};r([(0,c.Cb)({type:Number}),l("design:type",Number)],d.prototype,"index",void 0),r([(0,c.Cb)({type:Boolean}),l("design:type",Boolean)],d.prototype,"no_delete",void 0),r([(0,c.Cb)({type:Boolean}),l("design:type",Boolean)],d.prototype,"single",void 0),r([(0,c.Cb)({type:String}),l("design:type",String)],d.prototype,"_single",void 0),d=r([(0,c.Mo)("multiple-widgets"),l("design:paramtypes",[])],d)},6883:(e,t,a)=>{var n,c=a(9392),r=a(1936),l=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let d=class extends c.oi{constructor(){super(),this.randomID1=Math.floor(12345*Math.random()),this.randomID2=Math.floor(678910*Math.random()),this.ID="datatable"}set init(e){let t=this._init;this._init=e,console.log("public set init",{oldVal:t,value:e}),this.requestUpdate("init",t)}get init(){return this._init}connectedCallback(){super.connectedCallback(),this.ID=this.randomID1+"-"+this.ID+"-"+this.randomID2}disconnectedCallback(){}render(){return c.dy`
    <table  class="align-middle mb-0 table table-borderless table-striped table-hover" style="width:100%" datatable="${this.ID}">
      <thead>
        <tr>
          ${this.thead()}
        </tr>
      </thead>
      <tbody>
          ${this.tbody()}
      </tbody>
      <tfoot>
        <tr>
          ${this.tfoot()}
        </tr>
      </tfoot>
    </table>
  `}thead(){return c.dy`
      ${this.dt_head.map((e=>c.dy`<th>${e.title}</th>`))}
    `}tbody(){return c.dy`
      ${this.dt_body.map((e=>c.dy`<tr>${e.map((e=>c.dy`<td>${e.title}</td>`))}</tr>`))}
    `}tfoot(){return c.dy`
    ${this.dt_foot.map((e=>c.dy`<th>${e.title}</th>`))}
    `}firstUpdated(){const e=this.querySelector('[datatable="'+this.ID+'"]');if("object"==typeof this.datatable.ajax){let e=this.datatable.ajax;e.headers={"Access-Control-Allow-Origin":"*/*",Accept:"application/json, text/plain, */*"};let t=e.headers;for(const e in this.ajaxHeader)if(Object.prototype.hasOwnProperty.call(this.ajaxHeader,e)){const a=this.ajaxHeader[e];t[e]=a}e.headers=t,this.datatable.ajax=e}$(e).DataTable(this.datatable)}createRenderRoot(){return this}};d.styles=[c.iv`
      :host { display: block; }
      input, select {
        box-shadow: 0 0 0 1px !important;
        padding: 2.5px !important;
        margin: 2.5px !important;
      }
    `],l([(0,r.Cb)({type:Number}),s("design:type",Number)],d.prototype,"randomID1",void 0),l([(0,r.Cb)({type:Number}),s("design:type",Number)],d.prototype,"randomID2",void 0),l([(0,r.Cb)({type:String}),s("design:type",String)],d.prototype,"ID",void 0),l([(0,r.Cb)({type:Object}),s("design:type","function"==typeof(n="undefined"!=typeof DataTables_Settings_I&&DataTables_Settings_I)?n:Object)],d.prototype,"datatable",void 0),l([(0,r.Cb)({type:Array}),s("design:type",Array)],d.prototype,"dt_head",void 0),l([(0,r.Cb)({type:Array}),s("design:type",Array)],d.prototype,"dt_foot",void 0),l([(0,r.Cb)({type:Array}),s("design:type",Array)],d.prototype,"dt_body",void 0),l([(0,r.Cb)(),s("design:type",Object)],d.prototype,"ajaxHeader",void 0),d=l([(0,r.Mo)("datatables-new"),s("design:paramtypes",[])],d)},3690:(e,t,a)=>{var n=a(9392),c=a(1936),r=(a(5185),a(5142),function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l}),l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let s=class extends n.oi{constructor(){super(...arguments),this.name="",this.label="",this.selected=!1,this.value="1",this.isSelected=this.selected}render(){return n.dy`
      <div class="w-full !py-4 px-2 !flex !justify-between border border-gray-400 rounded-md">
        <mwc-formfield class="w-full text-gray-400" label="${this.label}" alignEnd spaceBetween>
          ${this.switch}
          <input type="hidden" name="${this.name}" id="${this.name}" value="${this.selected?"on":"off"}" />
        </mwc-formfield>
      </div>
    `}get switch(){return this.selected?n.dy`
        <mwc-switch selected name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `:n.dy`
        <mwc-switch name="${this.name}-switch" id="${this.name}-switch"  ariaLabel="${this.label}" @click="${this.switchAction}"></mwc-switch>
      `}switchAction(e){this.isSelected=e.target.selected,this.querySelectorAll('[name="'+this.name+'"]').forEach((e=>{e.value=this.isSelected?"on":"off"}))}createRenderRoot(){return this}};s.styles=[n.iv`
      :host {
        display: block;
      }
    `],r([(0,c.Cb)({type:String}),l("design:type",String)],s.prototype,"name",void 0),r([(0,c.Cb)({type:String}),l("design:type",String)],s.prototype,"label",void 0),r([(0,c.Cb)({type:Boolean}),l("design:type",Boolean)],s.prototype,"selected",void 0),r([(0,c.Cb)({type:String}),l("design:type",String)],s.prototype,"value",void 0),r([(0,c.Cb)({type:Boolean}),l("design:type",Boolean)],s.prototype,"isSelected",void 0),s=r([(0,c.Mo)("switch-input")],s)},7108:(e,t,a)=>{a.d(t,{W:()=>n});const n={schedule_meeting_event:40,clocking:41,attendance_history:42,attendees:43,absentees:44,device_request_approval:45,absent_leave_status:58,absent_leave_assignment:59}},684:(e,t,a)=>{a.r(t),a.d(t,{AttendanceSetupViewSchedule:()=>Me}),a(3683),a(4657);var n=a(4108),c=a(9392),r=a(1936),l=(a(5248),a(6811),a(3690),a(1854),a(6883),a(2715),a(2218)),s=a(5663),d=a(6404),i=a(28),o=a(5458),u=a(2831),h=a(771),p=a(6455),b=a.n(p),m=a(7270),v=a(596),_=a(8967),f=a(3600),y=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))},g=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))},w=a(2482),A=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},I=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},C=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let E=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleSMSs=null}set _scheduleSMSs(e){this.__scheduleSMSs=e,this.requestUpdate()}get _scheduleSMSs(){return this.__scheduleSMSs}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return C(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleSMS()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sms?meeting-event-id=${this.meetingEventId}"
        label="Edit SMS"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting SMS">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Event Message</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Alert Date
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Notify Parent
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Notify Member
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Attendee Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Absentee Alert Time
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Absentee Alert Message
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Date
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleSMSs?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleSMSs?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule SMS </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleSMSs.results.map((e=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.eventMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,u.h)(e.alertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.alertDate}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.notifyParent}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.notifyMember}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,u.h)(e.attendeeAlertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,u.h)(e.absenteeAlertTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.absenteeAlertMessage}
            </th>
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleSMS(){return C(this,void 0,void 0,(function*(){const e=yield(0,w.p)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleSMSs=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};E.styles=[c.iv`
   :host { display: block; }
  `],A([(0,r.Cb)({type:Array}),I("design:type",Array)],E.prototype,"DATA",void 0),A([(0,r.Cb)({type:Number}),I("design:type",Number)],E.prototype,"CLIENT_ID",void 0),A([(0,r.Cb)({type:Number}),I("design:type",Number)],E.prototype,"meetingEventId",void 0),E=A([(0,r.Mo)("attendance-setup-view-one-sms"),I("design:paramtypes",[])],E);var k=a(7824),S=a(4173),R=a(1148),$=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},T=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let L=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleDays=null}set _scheduleDays(e){this.__scheduleDays=e,this.requestUpdate()}get _scheduleDays(){return this.__scheduleDays}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return x(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleDay()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button danger mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/day?meeting-event-id=${this.meetingEventId}"
        label="Edit Day(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Day</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      End Date
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleDays?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleDays?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Day </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleDays.map(((e,t,a)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,o.C)(this.getDayOfWeek(e.dayId),c.dy`<span>Loading...</span>`)}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,S._)(e.endDate,{dateStyle:"medium"})}
              ${t+1==a.length?"...":""}
            </td>
          </tr>
        `))}
    `}firstUpdayd(){}getAttendanceScheduleDay(){return x(this,void 0,void 0,(function*(){const e=yield(0,k.E)(null,"?meetingEventId="+this.meetingEventId+"&length=5");null===e?this._scheduleDays=void 0:Array.isArray(e.response.data)&&(this._scheduleDays=e.response.data)}))}getDayOfWeek(e){return x(this,void 0,void 0,(function*(){const t=yield(0,R.e)(e);return null===t?"???":t.response.success&&"day"in t.response.data?t.response.data.day:t.response.message}))}createRenderRoot(){return this}};L.styles=[c.iv`
   :host { display: block; }
  `],$([(0,r.Cb)({type:Array}),T("design:type",Array)],L.prototype,"DATA",void 0),$([(0,r.Cb)({type:Number}),T("design:type",Number)],L.prototype,"CLIENT_ID",void 0),$([(0,r.Cb)({type:Number}),T("design:type",Number)],L.prototype,"meetingEventId",void 0),L=$([(0,r.Mo)("attendance-setup-view-one-day"),T("design:paramtypes",[])],L);var D=a(8698),N=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},B=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},j=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let U=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleDates=null}set _scheduleDates(e){this.__scheduleDates=e,this.requestUpdate()}get _scheduleDates(){return this.__scheduleDates}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return j(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleDate()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/date?meeting-event-id=${this.meetingEventId}"
        label="Edit Date(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Date</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleDates?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleDates?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Date </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleDates.results.map(((e,t,a)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.date}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleDate(){return j(this,void 0,void 0,(function*(){const e=yield(0,D.R)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleDates=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};U.styles=[c.iv`
   :host { display: block; }
  `],N([(0,r.Cb)({type:Array}),B("design:type",Array)],U.prototype,"DATA",void 0),N([(0,r.Cb)({type:Number}),B("design:type",Number)],U.prototype,"CLIENT_ID",void 0),N([(0,r.Cb)({type:Number}),B("design:type",Number)],U.prototype,"meetingEventId",void 0),U=N([(0,r.Mo)("attendance-setup-view-one-date"),B("design:paramtypes",[])],U);var P=a(4843),M=a(2892),O=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},H=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},G=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let W=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleGroups=null}set _scheduleGroups(e){this.__scheduleGroups=e,this.requestUpdate()}get _scheduleGroups(){return this.__scheduleGroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return G(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleGroup()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/group?meeting-event-id=${this.meetingEventId}"
        label="Edit Group(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Group</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleGroups?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleGroups?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Group </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleGroups.results.map(((e,t,a)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,o.C)(this.getGroup(e.groupId),c.dy`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpgroupd(){}getAttendanceScheduleGroup(){return G(this,void 0,void 0,(function*(){const e=yield(0,P.S)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleGroups=null===e?void 0:e.paginResponse}))}getGroup(e){return G(this,void 0,void 0,(function*(){const t=yield(0,M.c)(e);return null===t?"???":t.response.success&&"group"in t.response.data?t.response.data.group:t.response.message}))}createRenderRoot(){return this}};W.styles=[c.iv`
   :host { display: block; }
  `],O([(0,r.Cb)({type:Array}),H("design:type",Array)],W.prototype,"DATA",void 0),O([(0,r.Cb)({type:Number}),H("design:type",Number)],W.prototype,"CLIENT_ID",void 0),O([(0,r.Cb)({type:Number}),H("design:type",Number)],W.prototype,"meetingEventId",void 0),W=O([(0,r.Mo)("attendance-setup-view-one-group"),H("design:paramtypes",[])],W);var K=a(4331),z=a(6262),F=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},q=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},V=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let J=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAdmins=null}set _scheduleAdmins(e){this.__scheduleAdmins=e,this.requestUpdate()}get _scheduleAdmins(){return this.__scheduleAdmins}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return V(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAdmin()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/admin?meeting-event-id=${this.meetingEventId}"
        label="Edit Admin(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Admin Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Meeting Editor
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Agenda Editor
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      Clocking Admin
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleAdmins?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleAdmins?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Admin </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleAdmins.results.map(((e,t,a)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,o.C)(this.getAdminUser(e.adminId),c.dy`<span>Loading...</span>`)}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.meetingEditor?c.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:c.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.agendaEditor?c.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:c.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${e.clockingAdmin?c.dy`<mwc-icon class="text-green-600">check</mwc-icon>`:c.dy`<mwc-icon class="text-red-600">close</mwc-icon>`}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleAdmin(){return V(this,void 0,void 0,(function*(){const e=yield(0,K.v)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAdmins=null===e?void 0:e.paginResponse}))}getAdminUser(e){return V(this,void 0,void 0,(function*(){const t=yield(0,z.a)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return e.firstname+" "+e.surname}return t.response.message}))}createRenderRoot(){return this}};J.styles=[c.iv`
   :host { display: block; }
  `],F([(0,r.Cb)({type:Array}),q("design:type",Array)],J.prototype,"DATA",void 0),F([(0,r.Cb)({type:Number}),q("design:type",Number)],J.prototype,"CLIENT_ID",void 0),F([(0,r.Cb)({type:Number}),q("design:type",Number)],J.prototype,"meetingEventId",void 0),J=F([(0,r.Mo)("attendance-setup-view-one-admin"),q("design:paramtypes",[])],J);var Q=a(706),Y=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},Z=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},X=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let ee=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleBreaks=null}set _scheduleBreaks(e){this.__scheduleBreaks=e,this.requestUpdate()}get _scheduleBreaks(){return this.__scheduleBreaks}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return X(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleBreak()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/break?meeting-event-id=${this.meetingEventId}"
        label="Edit Break"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Break Start Time</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        End Time
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleBreaks?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleBreaks?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Break </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleBreaks.results.map(((e,t,a)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell" scope="row">
              ${(0,u.h)(e.startBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
            </th>
            <th class="mdc-data-table__cell" scope="row">
              ${(0,u.h)(e.endBreak).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleBreak(){return X(this,void 0,void 0,(function*(){const e=yield(0,Q.h)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleBreaks=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};ee.styles=[c.iv`
   :host { display: block; }
  `],Y([(0,r.Cb)({type:Array}),Z("design:type",Array)],ee.prototype,"DATA",void 0),Y([(0,r.Cb)({type:Number}),Z("design:type",Number)],ee.prototype,"CLIENT_ID",void 0),Y([(0,r.Cb)({type:Number}),Z("design:type",Number)],ee.prototype,"meetingEventId",void 0),ee=Y([(0,r.Mo)("attendance-setup-view-one-break"),Z("design:paramtypes",[])],ee);var te=a(6637),ae=a(6656),ne=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},ce=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},re=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let le=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleMembers=null}set _scheduleMembers(e){this.__scheduleMembers=e,this.requestUpdate()}get _scheduleMembers(){return this.__scheduleMembers}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return re(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleMember()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button warning mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/member?meeting-event-id=${this.meetingEventId}"
        label="Edit Member(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Member</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleMembers?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleMembers?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="5" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Member </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleMembers.results.map(((e,t,a)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,o.C)(this.getMember(e.memberId),c.dy`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleMember(){return re(this,void 0,void 0,(function*(){const e=yield(0,te.n)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleMembers=null===e?void 0:e.paginResponse}))}getMember(e){return re(this,void 0,void 0,(function*(){const t=yield(0,ae.E)(e);if(null===t)return"???";if(t.response.success&&"dateOfBirth"in t.response.data){const e=t.response.data;return`${e.firstname} ${e.middlename} ${e.surname}`}return t.response.message}))}createRenderRoot(){return this}};le.styles=[c.iv`
   :host { display: block; }
  `],ne([(0,r.Cb)({type:Array}),ce("design:type",Array)],le.prototype,"DATA",void 0),ne([(0,r.Cb)({type:Number}),ce("design:type",Number)],le.prototype,"CLIENT_ID",void 0),ne([(0,r.Cb)({type:Number}),ce("design:type",Number)],le.prototype,"meetingEventId",void 0),le=ne([(0,r.Mo)("attendance-setup-view-one-member"),ce("design:paramtypes",[])],le);var se=a(8786),de=a(9605),ie=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},oe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ue=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let he=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleSubgroups=null}set _scheduleSubgroups(e){this.__scheduleSubgroups=e,this.requestUpdate()}get _scheduleSubgroups(){return this.__scheduleSubgroups}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return ue(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleSubGroup()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/sub-group?meeting-event-id=${this.meetingEventId}"
        label="Edit Sub-Group(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule SubGroup</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleSubgroups?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleSubgroups?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule SubGroup </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleSubgroups.results.map(((e,t,a)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${(0,o.C)(this.getSubGroup(e.subGroupId),c.dy`<span>Loading...</span>`)}
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpsubgroupd(){}getAttendanceScheduleSubGroup(){return ue(this,void 0,void 0,(function*(){const e=yield(0,se.s)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleSubgroups=null===e?void 0:e.paginResponse}))}getSubGroup(e){return ue(this,void 0,void 0,(function*(){const t=yield(0,de.U)(e);return null===t?"???":t.response.success&&"subgroup"in t.response.data?t.response.data.subgroup:t.response.message}))}createRenderRoot(){return this}};he.styles=[c.iv`
   :host { display: block; }
  `],ie([(0,r.Cb)({type:Array}),oe("design:type",Array)],he.prototype,"DATA",void 0),ie([(0,r.Cb)({type:Number}),oe("design:type",Number)],he.prototype,"CLIENT_ID",void 0),ie([(0,r.Cb)({type:Number}),oe("design:type",Number)],he.prototype,"meetingEventId",void 0),he=ie([(0,r.Mo)("attendance-setup-view-one-subgroup"),oe("design:paramtypes",[])],he);var pe=a(606),be=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},me=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ve=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let _e=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleLocations=null}set _scheduleLocations(e){this.__scheduleLocations=e,this.requestUpdate()}get _scheduleLocations(){return this.__scheduleLocations}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return ve(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleLocation()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button info mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/location?meeting-event-id=${this.meetingEventId}"
        label="Edit Location"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        <b>Schedule Location Latitude</b>
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Longitude
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
                  <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                    <div class="mdc-data-table__header-cell-wrapper">
                      <div class="mdc-data-table__header-cell-label">
                        Radius
                      </div>
                      <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                    </div>
                  </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleLocations?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleLocations?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Location </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleLocations.results.map(((e,t)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.latitude}
            </th>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.longitude}
            </td>
            <td class="mdc-data-table__cell whitespace-pre-line" scope="row">
              ${e.radius}
            </td>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleLocation(){return ve(this,void 0,void 0,(function*(){const e=yield(0,pe.I)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleLocations=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};_e.styles=[c.iv`
   :host { display: block; }
  `],be([(0,r.Cb)({type:Array}),me("design:type",Array)],_e.prototype,"DATA",void 0),be([(0,r.Cb)({type:Number}),me("design:type",Number)],_e.prototype,"CLIENT_ID",void 0),be([(0,r.Cb)({type:Number}),me("design:type",Number)],_e.prototype,"meetingEventId",void 0),_e=be([(0,r.Mo)("attendance-setup-view-one-location"),me("design:paramtypes",[])],_e);var fe=a(2404),ye=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},ge=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},we=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let Ae=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__scheduleAttachments=null}set _scheduleAttachments(e){this.__scheduleAttachments=e,this.requestUpdate()}get _scheduleAttachments(){return this.__scheduleAttachments}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return we(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceScheduleAttachment()}))}disconnectedCallback(){}render(){return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button success mr-2"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/attachments?meeting-event-id=${this.meetingEventId}"
        label="Edit Attachment(s)"></link-button>
      ${this.schedule}
    `}get schedule(){return c.dy`${this.table}`}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Attachment Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){return null===this._scheduleAttachments?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="flex justify-center">
              <mwc-circular-progress indeterminate></mwc-circular-progress>
            </div>
          </th>
        </tr>
      `:void 0===this._scheduleAttachments?c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" rowspan="1" scope="row">
            <div class="main-container">
              <div class="flex justify-center">
                <h4 class="text-red-600 text-lg">
                  <span class="font-bold">Schedule Attachment </span>: undefined error</h4>
              </div>
            </div>
          </th>
        </tr>
      `:c.dy`
      ${this._scheduleAttachments.results.map(((e,t,a)=>c.dy`
          <tr class="mdc-data-table__row">
            <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
              <a href="${h.t.URLS.FILE_BUCKET_BASE_URL}files${e.attachment}" target="_blank">Open File ${t+1}</a>
              ${t+1==a.length?"...":""}
            </th>
          </tr>
        `))}
    `}firstUpdated(){}getAttendanceScheduleAttachment(){return we(this,void 0,void 0,(function*(){const e=yield(0,fe.f)(null,"?meetingEventId="+this.meetingEventId+"&length=5");this._scheduleAttachments=null===e?void 0:e.paginResponse}))}createRenderRoot(){return this}};Ae.styles=[c.iv`
   :host { display: block; }
  `],ye([(0,r.Cb)({type:Array}),ge("design:type",Array)],Ae.prototype,"DATA",void 0),ye([(0,r.Cb)({type:Number}),ge("design:type",Number)],Ae.prototype,"CLIENT_ID",void 0),ye([(0,r.Cb)({type:Number}),ge("design:type",Number)],Ae.prototype,"meetingEventId",void 0),Ae=ye([(0,r.Mo)("attendance-setup-view-one-attachment"),ge("design:paramtypes",[])],Ae);var Ie=a(7790),Ce=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},Ee=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ke=function(e,t,a,n){return new(a||(a=Promise))((function(c,r){function l(e){try{d(n.next(e))}catch(e){r(e)}}function s(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?c(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,s)}d((n=n.apply(e,t||[])).next())}))};let Se=class extends c.oi{constructor(){super(),this.DATA=[],this.CLIENT_ID=0,this.meetingEventId=0,this.__schedule=null}set _schedule(e){this.__schedule=e,this.requestUpdate()}get _schedule(){return this.__schedule}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return ke(this,void 0,void 0,(function*(){e.connectedCallback.call(this),yield this.getAttendanceSchedule()}))}disconnectedCallback(){}render(){return null===this._schedule?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `:void 0===this._schedule?c.dy`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `:c.dy`${this.schedule}`}get schedule(){const e=this._schedule.data;return c.dy`
      <link-button isblockcontent="false" aClass="" bClass="button primary mr-4"
        href="${h.t.URLS.PDB_CLIENT}attendance/v2/settings/edit/schedule?meeting-event-id=${this.meetingEventId}"
        label="Edit Schedule"></link-button>
      <mwc-icon-button class="ml-4 danger -mt-2 mb-2" icon="delete_forever" delete-this-item="${this.meetingEventId}"
        @click="${this.deleteMeetingEvent}"></mwc-icon-button>
      ${this.table}
      <div class="row">
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-admin CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-admin>
        </div>
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-attachment CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-attachment>
        </div>
        ${e.hasBreakTime?c.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-break CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-break>
          </div>`:c.dy``}
        ${e.isRecuring?c.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-day CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-day>
          </div>`:c.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-date CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-date>
          </div>`}
        ${1===e.memberType?c.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-member CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-member>
          </div>`:c.dy``}
        ${2===e.memberType?c.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-group CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-group>
          </div>`:c.dy``}
        ${3===e.memberType?c.dy`
          <div class="col-md-6 my-2">
            <attendance-setup-view-one-subgroup CLIENT_ID="${this.CLIENT_ID}" 
              meetingEventId="${this.meetingEventId}">
            </attendance-setup-view-one-subgroup>
          </div>`:c.dy``}
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-location CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-location>
        </div>
        <div class="col-md-6 my-2">
          <attendance-setup-view-one-sms CLIENT_ID="${this.CLIENT_ID}" 
            meetingEventId="${this.meetingEventId}">
          </attendance-setup-view-one-sms>
        </div>
      </div>
    `}get table(){return c.dy`
      <div class="mdc-data-table w-full" mdc-data-table="data-table">
        <div class="mdc-data-table__table-container">
          <table class="mdc-data-table__table" aria-label="New Meeting Member">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <b>Schedule Field(s)</b>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell !text-right" role="columnheader" scope="col" aria-sort="ascending">
                  <div class="mdc-data-table__header-cell-wrapper">
                    <div class="mdc-data-table__header-cell-label">
                      <mwc-icon>tune</mwc-icon>
                    </div>
                    <div class="mdc-data-table__sort-status-label" aria-hidden="true"></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              ${this.tableBody}
            </tbody>
          </table>
        </div>
      </div>
    `}get tableBody(){const e=this._schedule.data;if(!Array.isArray(e))return c.dy`
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Name
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.name}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,o.C)(this.getType(e.type),c.dy`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Member Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,o.C)(this.getMemberType(e.memberType),c.dy`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Branch
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.branchId.name}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Member Category
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.memberCategoryId.category}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Span <span class="text-xs text-gray-700">How long the meeting/ event will last (default is 1 day)</span>
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.meetingSpan} day${e.meetingSpan>1?"s":""} 
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Start Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,u.h)(e.startTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Close Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,u.h)(e.closeTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Lateness Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,u.h)(e.latenessTime).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Is Recuring
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.isRecuring}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Has Break Time
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.hasBreakTime}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Virtual Meeting Link
          </th>
          <td class="mdc-data-table__cell" scope="row">
            <a href="${e.virtualMeetingLink}">${e.virtualMeetingLink}</a>
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Virtual Meeting Type
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,o.C)(this.getMeetingEventLinkType(e.virtualMeetingType),c.dy`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Meeting Location
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${(0,o.C)(this.getMeetingEventLocation(e.meetingLocation),c.dy`<i>Loading</i>`)}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Expected Monthly Attendance
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.expectedMonthlyAttendance}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Active Monthly Attendance
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.activeMonthlyAttendance}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Agenda
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${e.agenda}
          </td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell whitespace-pre-line" scope="row">
            Agenda File
          </th>
          <td class="mdc-data-table__cell" scope="row">
            ${0===e.agendaFile.length?"-":c.dy`<a href="${h.t.URLS.FILE_BUCKET_BASE_URL}files/${e.agendaFile}" target="_blank">Open File</a>
              <mwc-icon-button class="ml-4 danger" icon="delete_forever" delete-this-item="${this.meetingEventId}"
                @click="${this.deleteMeetingEventAgendaFile}"></mwc-icon-button>`}
          </td>
        </tr>
      `}firstUpdated(){}getAttendanceSchedule(){return ke(this,void 0,void 0,(function*(){const e=yield(0,l.u)(this.meetingEventId);this._schedule=null===e?void 0:e.response}))}getType(e){return ke(this,void 0,void 0,(function*(){const t=yield(0,i.B)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMemberType(e){return ke(this,void 0,void 0,(function*(){const t=yield(0,Ie.Z)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMeetingEventLinkType(e){return ke(this,void 0,void 0,(function*(){const t=yield(0,s.p)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}getMeetingEventLocation(e){return ke(this,void 0,void 0,(function*(){const t=yield(0,d.E)(e);return null===t?"**NOT FOUND**":t.response.success&&"name"in t.response.data?`${t.response.data.name}`:t.response.message}))}deleteMeetingEvent(e){return ke(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return y(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),a=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/"+e,n={};return b().fire({title:"Remove Meeting/ Event?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>y(this,void 0,void 0,(function*(){return yield(0,m.d)(a,{method:"DELETE",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!1).then((e=>{try{const t=new v.H("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,_.T)(e);b().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const n=new v.H("delete",a,!0);return n.postForm,n}})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),a=n.response.success}b().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}deleteMeetingEventAgendaFile(e){return ke(this,void 0,void 0,(function*(){e.preventDefault();const t=Number(e.currentTarget.getAttribute("delete-this-item"));yield function(e){return g(this,void 0,void 0,(function*(){const t=(0,f.Ie)(),a=h.t.URLS.AKWAABA_API_BASE_URL+"attendance/meeting-event/schedule/delete_agenda_file/"+e,n={delete:"this"};return b().fire({title:"Remove Agenda File?",icon:"info",iconColor:"#f97817",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"Cancel",confirmButtonColor:"#f97817",cancelButtonColor:"#ddd",reverseButtons:!0,showLoaderOnConfirm:!0,backdrop:!0,preConfirm:e=>g(this,void 0,void 0,(function*(){return yield(0,m.d)(a,{method:"PATCH",body:JSON.stringify(n),headers:{Authorization:"Token "+t.token}},!0).then((e=>{try{const t=new v.H("delete",e,!1),a=t.response;if("nameError"in a&&"unknownError"in a&&a.unknownError.length>0){let e=[];a.unknownError.forEach((t=>{t.errors.forEach((t=>{e.push({error:t})}))}));const t=(0,_.T)(e);b().showValidationMessage(`${t}`)}return t}catch(t){console.error({error:t});let a=e;a.error=t;const n=new v.H("delete",a,!0);return n.postForm,n}})).catch((e=>{b().showValidationMessage(`${String(e)}`)}))})),allowOutsideClick:()=>!b().isLoading()}).then((e=>{if(e.isConfirmed){let t="Success",a=!1;const n=e.value;if(n instanceof Object){const e=n.response;t=String(e.message),a=n.response.success}b().fire({title:t,icon:a?"success":"error",iconColor:"#f97817",confirmButtonColor:"#f97817"}),a&&setTimeout((()=>{window.location.reload()}),500)}}))}))}(t)}))}createRenderRoot(){return this}};Se.styles=[c.iv`
   :host { display: block; }
  `],Ce([(0,r.Cb)({type:Array}),Ee("design:type",Array)],Se.prototype,"DATA",void 0),Ce([(0,r.Cb)({type:Number}),Ee("design:type",Number)],Se.prototype,"CLIENT_ID",void 0),Ce([(0,r.Cb)({type:Number}),Ee("design:type",Number)],Se.prototype,"meetingEventId",void 0),Se=Ce([(0,r.Mo)("attendance-setup-view-one-schedule"),Ee("design:paramtypes",[])],Se);var Re,$e=a(4672),Te=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},xe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Le=class extends c.oi{constructor(){super(),this.CLIENT_ID=0,this._data=[],this.urlQueryParams=void 0,this.meetingEventId=0}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,a=void 0,c=function*(){e.connectedCallback.call(this),this.urlQueryParams=(0,$e.O1)(),this.getMeetingEventId()},new((n=void 0)||(n=Promise))((function(e,r){function l(e){try{d(c.next(e))}catch(e){r(e)}}function s(e){try{d(c.throw(e))}catch(e){r(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof n?a:new n((function(e){e(a)}))).then(l,s)}d((c=c.apply(t,a||[])).next())}));var t,a,n,c}disconnectedCallback(){}render(){return c.dy`${this.schedule}`}get schedule(){return c.dy`<div class="row">
      <div class="col-md-12 my-2">
        <attendance-setup-view-one-schedule CLIENT_ID="${this.CLIENT_ID}" 
          meetingEventId="${this.meetingEventId}">
        </attendance-setup-view-one-schedule>
      </div>
    </div>`}firstUpdated(){}getMeetingEventId(){let e=(0,$e.Jx)("meeting-event-id"),t=null!==e?Number(e):null;this.meetingEventId=Number.isNaN(t)?null:t}createRenderRoot(){return this}};Le.styles=[c.iv`
   :host { display: block; }
  `],Te([(0,r.Cb)({type:Number}),xe("design:type",Number)],Le.prototype,"CLIENT_ID",void 0),Te([(0,r.Cb)({type:Array}),xe("design:type","function"==typeof(Re="undefined"!=typeof Array&&Array)?Re:Object)],Le.prototype,"_data",void 0),Te([(0,r.Cb)({type:Object}),xe("design:type",Object)],Le.prototype,"urlQueryParams",void 0),Te([(0,r.Cb)({type:Number}),xe("design:type",Number)],Le.prototype,"meetingEventId",void 0),Le=Te([(0,r.Mo)("attendance-setup-view-one"),xe("design:paramtypes",[])],Le);var De=a(6979),Ne=a(8092),Be=a(1302),je=a(7108),Ue=function(e,t,a,n){var c,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(l=(r<3?c(l):r>3?c(t,a,l):c(t,a))||l);return r>3&&l&&Object.defineProperty(t,a,l),l},Pe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Me=class extends c.oi{constructor(){super(),this._hasSetup=!1,this._pageButtonAccess=!1}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return t=this,a=void 0,r=function*(){e.connectedCallback.call(this),(0,De.f)().then((()=>this._hasSetup=!0)),yield(0,n.B)(this.email,this.mId,"client_tokenLogin")},new((c=void 0)||(c=Promise))((function(e,n){function l(e){try{d(r.next(e))}catch(e){n(e)}}function s(e){try{d(r.throw(e))}catch(e){n(e)}}function d(t){var a;t.done?e(t.value):(a=t.value,a instanceof c?a:new c((function(e){e(a)}))).then(l,s)}d((r=r.apply(t,a||[])).next())}));var t,a,c,r}disconnectedCallback(){}render(){var e;if(this._hasSetup){if(null===(e=(0,Ne.H)())||void 0===e?void 0:e.expiration_date.expired)return c.dy`<account-expired-component></account-expired-component>`;if(this._pageButtonAccess=(0,Be.OR)(je.W.schedule_meeting_event),!(0,Be.H)({pageId:je.W.schedule_meeting_event,viewType:"View"},!1))return c.dy`<no-page-entry-component></no-page-entry-component>`}return c.dy`
      <div class="shadow bg-white p-2 my-2">
        <attendance-setup-view-one CLIENT_ID="${this.clientId}"></attendance-setup-view-one>
      </div>
    `}firstUpdated(){}createRenderRoot(){return this}};Ue([(0,r.Cb)({type:String}),Pe("design:type",String)],Me.prototype,"email",void 0),Ue([(0,r.Cb)({type:Number}),Pe("design:type",Number)],Me.prototype,"mId",void 0),Ue([(0,r.Cb)({type:Number}),Pe("design:type",Number)],Me.prototype,"clientId",void 0),Ue([(0,r.Cb)({type:Boolean}),Pe("design:type",Boolean)],Me.prototype,"_hasSetup",void 0),Ue([(0,r.Cb)({type:Boolean}),Pe("design:type",Boolean)],Me.prototype,"_pageButtonAccess",void 0),Me=Ue([(0,r.Mo)("attendance-setup-view-schedule"),Pe("design:paramtypes",[])],Me)}},e=>(e.O(0,[5744,2185,9674,9564,7708,712,1109,6236,8867,214,3901,3712],(()=>(684,e(e.s=684)))),e.O())])));
//# sourceMappingURL=schedule.js.map