/*! For license information please see vendors.lit-html.js.LICENSE.txt */
"use strict";(self.webpackChunkwebpackNumbers=self.webpackChunkwebpackNumbers||[]).push([["vendors.lit-html"],{7381:(e,t,i)=>{i.r(t),i.d(t,{AsyncDirective:()=>h,Directive:()=>s.Directive,PartType:()=>s.PartType,directive:()=>s.directive});var n=i(1933),s=i(683);const o=(e,t)=>{var i,n;const s=e._$disconnectableChildren;if(void 0===s)return!1;for(const e of s)null===(n=(i=e)._$notifyDirectiveConnectionChanged)||void 0===n||n.call(i,t,!1),o(e,t);return!0},r=e=>{let t,i;do{if(void 0===(t=e._$parent))break;i=t._$disconnectableChildren,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},l=e=>{for(let t;t=e._$parent;e=t){let i=t._$disconnectableChildren;if(void 0===i)t._$disconnectableChildren=i=new Set;else if(i.has(e))break;i.add(e),c(t)}};function a(e){void 0!==this._$disconnectableChildren?(r(this),this._$parent=e,l(this)):this._$parent=e}function d(e,t=!1,i=0){const n=this._$committedValue,s=this._$disconnectableChildren;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(n))for(let e=i;e<n.length;e++)o(n[e],!1),r(n[e]);else null!=n&&(o(n,!1),r(n));else o(this,e)}const c=e=>{var t,i,n,o;e.type==s.PartType.CHILD&&(null!==(t=(n=e)._$notifyConnectionChanged)&&void 0!==t||(n._$notifyConnectionChanged=d),null!==(i=(o=e)._$reparentDisconnectables)&&void 0!==i||(o._$reparentDisconnectables=a))};class h extends s.Directive{constructor(){super(...arguments),this._$disconnectableChildren=void 0}_$initialize(e,t,i){super._$initialize(e,t,i),l(this),this.isConnected=e._$isConnected}_$notifyDirectiveConnectionChanged(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(o(this,e),r(this))}setValue(e){if((0,n.isSingleExpression)(this.__part))this.__part._$setValue(e,this);else{if(void 0===this.__attributeIndex)throw new Error("Expected this.__attributeIndex to be a number");const t=[...this.__part._$committedValue];t[this.__attributeIndex]=e,this.__part._$setValue(t,this,0)}}disconnected(){}reconnected(){}}},1933:(e,t,i)=>{i.r(t),i.d(t,{TemplateResultType:()=>d,clearPart:()=>b,getCommittedValue:()=>g,getDirectiveClass:()=>u,insertPart:()=>_,isDirectiveResult:()=>h,isPrimitive:()=>a,isSingleExpression:()=>p,isTemplateResult:()=>c,removePart:()=>y,setChildPartValue:()=>v,setCommittedValue:()=>f});var n,s,o=i(4633);const{_ChildPart:r}=o._$LH,l=(null===(n=window.ShadyDOM)||void 0===n?void 0:n.inUse)&&!0===(null===(s=window.ShadyDOM)||void 0===s?void 0:s.noPatch)?window.ShadyDOM.wrap:e=>e,a=e=>null===e||"object"!=typeof e&&"function"!=typeof e,d={HTML:1,SVG:2},c=(e,t)=>void 0===t?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===t,h=e=>void 0!==(null==e?void 0:e._$litDirective$),u=e=>null==e?void 0:e._$litDirective$,p=e=>void 0===e.strings,m=()=>document.createComment(""),_=(e,t,i)=>{var n;const s=l(e._$startNode).parentNode,o=void 0===t?e._$endNode:t._$startNode;if(void 0===i){const t=l(s).insertBefore(m(),o),n=l(s).insertBefore(m(),o);i=new r(t,n,e,e.options)}else{const t=l(i._$endNode).nextSibling,r=i._$parent,a=r!==e;if(a){let t;null===(n=i._$reparentDisconnectables)||void 0===n||n.call(i,e),i._$parent=e,void 0!==i._$notifyConnectionChanged&&(t=e._$isConnected)!==r._$isConnected&&i._$notifyConnectionChanged(t)}if(t!==o||a){let e=i._$startNode;for(;e!==t;){const t=l(e).nextSibling;l(s).insertBefore(e,o),e=t}}}return i},v=(e,t,i=e)=>(e._$setValue(t,i),e),$={},f=(e,t=$)=>e._$committedValue=t,g=e=>e._$committedValue,y=e=>{var t;null===(t=e._$notifyConnectionChanged)||void 0===t||t.call(e,!1,!0);let i=e._$startNode;const n=l(e._$endNode).nextSibling;for(;i!==n;){const e=l(i).nextSibling;l(i).remove(),i=e}},b=e=>{e._$clear()}},683:(e,t,i)=>{i.r(t),i.d(t,{Directive:()=>o,PartType:()=>n,directive:()=>s});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(e,t,i){this.__part=e,this._$parent=t,this.__attributeIndex=i}_$resolve(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8831:(e,t,i)=>{i.r(t),i.d(t,{classMap:()=>r});var n=i(4633),s=i(683);class o extends s.Directive{constructor(e){var t;if(super(e),e.type!==s.PartType.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,s;if(void 0===this._previousClasses){this._previousClasses=new Set,void 0!==e.strings&&(this._staticClasses=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this._staticClasses)||void 0===i?void 0:i.has(e))&&this._previousClasses.add(e);return this.render(t)}const o=e.element.classList;this._previousClasses.forEach((e=>{e in t||(o.remove(e),this._previousClasses.delete(e))}));for(const e in t){const i=!!t[e];i===this._previousClasses.has(e)||(null===(s=this._staticClasses)||void 0===s?void 0:s.has(e))||(i?(o.add(e),this._previousClasses.add(e)):(o.remove(e),this._previousClasses.delete(e)))}return n.noChange}}const r=(0,s.directive)(o)},1957:(e,t,i)=>{i.r(t),i.d(t,{ifDefined:()=>s});var n=i(4633);const s=e=>null!=e?e:n.nothing},7158:(e,t,i)=>{i.r(t),i.d(t,{live:()=>l});var n=i(4633),s=i(683),o=i(1933);class r extends s.Directive{constructor(e){if(super(e),e.type!==s.PartType.PROPERTY&&e.type!==s.PartType.ATTRIBUTE&&e.type!==s.PartType.BOOLEAN_ATTRIBUTE)throw new Error("The `live` directive is not allowed on child or event bindings");if(!(0,o.isSingleExpression)(e))throw new Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===n.noChange||t===n.nothing)return t;const i=e.element,r=e.name;if(e.type===s.PartType.PROPERTY){if(t===i[r])return n.noChange}else if(e.type===s.PartType.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return n.noChange}else if(e.type===s.PartType.ATTRIBUTE&&i.getAttribute(r)===String(t))return n.noChange;return(0,o.setCommittedValue)(e),t}}const l=(0,s.directive)(r)},7536:(e,t,i)=>{i.r(t),i.d(t,{Pauser:()=>o,PseudoWeakRef:()=>s,forAwaitOf:()=>n});const n=async(e,t)=>{for await(const i of e)if(!1===await t(i))return};class s{constructor(e){this._ref=e}disconnect(){this._ref=void 0}reconnect(e){this._ref=e}deref(){return this._ref}}class o{constructor(){this._promise=void 0,this._resolve=void 0}get(){return this._promise}pause(){var e;null!==(e=this._promise)&&void 0!==e||(this._promise=new Promise((e=>this._resolve=e)))}resume(){var e;null===(e=this._resolve)||void 0===e||e.call(this),this._promise=this._resolve=void 0}}},9760:(e,t,i)=>{i.r(t),i.d(t,{styleMap:()=>r});var n=i(4633),s=i(683);class o extends s.Directive{constructor(e){var t;if(super(e),e.type!==s.PartType.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const n=e[i];return null==n?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this._previousStyleProperties){this._previousStyleProperties=new Set;for(const e in t)this._previousStyleProperties.add(e);return this.render(t)}this._previousStyleProperties.forEach((e=>{null==t[e]&&(this._previousStyleProperties.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const n=t[e];null!=n&&(this._previousStyleProperties.add(e),e.includes("-")?i.setProperty(e,n):i[e]=n)}return n.noChange}}const r=(0,s.directive)(o)},6848:(e,t,i)=>{i.r(t),i.d(t,{UntilDirective:()=>d,until:()=>c});var n=i(4633),s=i(1933),o=i(7381),r=i(7536);const l=e=>!(0,s.isPrimitive)(e)&&"function"==typeof e.then,a=1073741823;class d extends o.AsyncDirective{constructor(){super(...arguments),this.__lastRenderedIndex=a,this.__values=[],this.__weakThis=new r.PseudoWeakRef(this),this.__pauser=new r.Pauser}render(...e){var t;return null!==(t=e.find((e=>!l(e))))&&void 0!==t?t:n.noChange}update(e,t){const i=this.__values;let s=i.length;this.__values=t;const o=this.__weakThis,r=this.__pauser;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this.__lastRenderedIndex);e++){const n=t[e];if(!l(n))return this.__lastRenderedIndex=e,n;e<s&&n===i[e]||(this.__lastRenderedIndex=a,s=0,Promise.resolve(n).then((async e=>{for(;r.get();)await r.get();const t=o.deref();if(void 0!==t){const i=t.__values.indexOf(n);i>-1&&i<t.__lastRenderedIndex&&(t.__lastRenderedIndex=i,t.setValue(e))}})))}return n.noChange}disconnected(){this.__weakThis.disconnect(),this.__pauser.pause()}reconnected(){this.__weakThis.reconnect(this),this.__pauser.resume()}}const c=(0,o.directive)(d)},6377:(e,t,i)=>{i.r(t),i.d(t,{isServer:()=>n});const n=!1},4633:(e,t,i)=>{var n,s,o,r;i.r(t),i.d(t,{_$LH:()=>Q,html:()=>L,noChange:()=>z,nothing:()=>M,render:()=>te,svg:()=>R});const l=window,a=e=>{l.emitLitDebugLogEvents&&l.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))};let d,c=0;null!==(n=l.litIssuedWarnings)&&void 0!==n||(l.litIssuedWarnings=new Set),d=(e,t)=>{t+=e?` See https://lit.dev/msg/${e} for more information.`:"",l.litIssuedWarnings.has(t)||(console.warn(t),l.litIssuedWarnings.add(t))},d("dev-mode","Lit is in dev mode. Not recommended for production!");const h=(null===(s=l.ShadyDOM)||void 0===s?void 0:s.inUse)&&!0===(null===(o=l.ShadyDOM)||void 0===o?void 0:o.noPatch)?l.ShadyDOM.wrap:e=>e,u=l.trustedTypes,p=u?u.createPolicy("lit-html",{createHTML:e=>e}):void 0,m=e=>e,_=(e,t,i)=>m,v=(e,t,i)=>H(e,t,i),$="$lit$",f=`lit$${String(Math.random()).slice(9)}$`,g="?"+f,y=`<${g}>`,b=document,w=(e="")=>b.createComment(e),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,x=e=>T(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),N="[ \t\n\f\r]",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,V=/>/g,P=new RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),k=/'/g,A=/"/g,D=/^(?:script|style|textarea|title)$/i,I=e=>(t,...i)=>(t.some((e=>void 0===e))&&console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences."),{_$litType$:e,strings:t,values:i}),L=I(1),R=I(2),z=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),O=new WeakMap,B=b.createTreeWalker(b,129,null,!1);let H=_;const U=(e,t)=>{const i=e.length-1,n=[];let s,o=2===t?"<svg>":"",r=S;for(let t=0;t<i;t++){const i=e[t];let l,a,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)if(c=r.lastIndex,r===S){if("!--"===a[1])r=E;else if(void 0!==a[1])r=V;else if(void 0!==a[2])D.test(a[2])&&(s=new RegExp(`</${a[2]}`,"g")),r=P;else if(void 0!==a[3])throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else r===P?">"===a[0]?(r=null!=s?s:S,d=-1):void 0===a[1]?d=-2:(d=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?P:'"'===a[3]?A:k):r===A||r===k?r=P:r===E||r===V?r=S:(r=P,s=void 0);console.assert(-1===d||r===P||r===k||r===A,"unexpected parse state B");const h=r===P&&e[t+1].startsWith("/>")?" ":"";o+=r===S?i+y:d>=0?(n.push(l),i.slice(0,d)+$+i.slice(d)+f+h):i+f+(-2===d?(n.push(void 0),t):h)}const l=o+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw")){let e="invalid template strings array";throw e="\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n\n          If you're using the html or svg tagged template functions normally\n          and and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g,"\n"),new Error(e)}return[void 0!==p?p.createHTML(l):l,n]};class W{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,o=0;const r=e.length-1,l=this.parts,[c,h]=U(e,t);if(this.el=W.createElement(c,i),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=B.nextNode())&&l.length<r;){if(1===n.nodeType){{const e=n.localName;if(/^(?:textarea|template)$/i.test(e)&&n.innerHTML.includes(f)){const t=`Expressions are not supported inside \`${e}\` elements. See https://lit.dev/msg/expression-in-${e} for more information.`;if("template"===e)throw new Error(t);d("",t)}}if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith($)||t.startsWith(f)){const i=h[o++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+$).split(f),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?q:"?"===t[1]?X:"@"===t[1]?J:Z})}else l.push({type:6,index:s})}for(const t of e)n.removeAttribute(t)}if(D.test(n.tagName)){const e=n.textContent.split(f),t=e.length-1;if(t>0){n.textContent=u?u.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],w()),B.nextNode(),l.push({type:2,index:++s});n.append(e[t],w())}}}else if(8===n.nodeType)if(n.data===g)l.push({type:2,index:s});else{let e=-1;for(;-1!==(e=n.data.indexOf(f,e+1));)l.push({type:7,index:s}),e+=f.length-1}s++}null==a||a({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const i=b.createElement("template");return i.innerHTML=e,i}}function j(e,t,i=e,n){var s,o,r,l;if(t===z)return t;let a=void 0!==n?null===(s=i.__directives)||void 0===s?void 0:s[n]:i.__directive;const d=C(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(o=null==a?void 0:a._$notifyDirectiveConnectionChanged)||void 0===o||o.call(a,!1),void 0===d?a=void 0:(a=new d(e),a._$initialize(e,i,n)),void 0!==n?(null!==(r=(l=i).__directives)&&void 0!==r?r:l.__directives=[])[n]=a:i.__directive=a),void 0!==a&&(t=j(e,a._$resolve(e,t.values),a,n)),t}class F{constructor(e,t){this._parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){var t;const{el:{content:i},parts:n}=this._$template,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:b).importNode(i,!0);B.currentNode=s;let o=B.nextNode(),r=0,l=0,a=n[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new Y(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new K(o,this,e)),this._parts.push(t),a=n[++l]}r!==(null==a?void 0:a.index)&&(o=B.nextNode(),r++)}return s}_update(e){let t=0;for(const i of this._parts)void 0!==i&&(null==a||a({kind:"set part",part:i,value:e[t],valueIndex:t,values:e,templateInstance:this}),void 0!==i.strings?(i._$setValue(e,i,t),t+=i.strings.length-2):i._$setValue(e[t])),t++}}class Y{constructor(e,t,i,n){var s;this.type=2,this._$committedValue=M,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=i,this.options=n,this.__isConnected=null===(s=null==n?void 0:n.isConnected)||void 0===s||s,this._textSanitizer=void 0}get _$isConnected(){var e,t;return null!==(t=null===(e=this._$parent)||void 0===e?void 0:e._$isConnected)&&void 0!==t?t:this.__isConnected}get parentNode(){let e=h(this._$startNode).parentNode;const t=this._$parent;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){var i;if(null===this.parentNode)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=j(this,e,t),C(e))e===M||null==e||""===e?(this._$committedValue!==M&&(null==a||a({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=M):e!==this._$committedValue&&e!==z&&this._commitText(e);else if(void 0!==e._$litType$)this._commitTemplateResult(e);else if(void 0!==e.nodeType){if((null===(i=this.options)||void 0===i?void 0:i.host)===e)return this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),void console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");this._commitNode(e)}else x(e)?this._commitIterable(e):this._commitText(e)}_insert(e,t=this._$endNode){return h(h(this._$startNode).parentNode).insertBefore(e,t)}_commitNode(e){var t;if(this._$committedValue!==e){if(this._$clear(),H!==_){const e=null===(t=this._$startNode.parentNode)||void 0===t?void 0:t.nodeName;if("STYLE"===e||"SCRIPT"===e){let t="Forbidden";throw t="STYLE"===e?"Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":"Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(t)}}null==a||a({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==M&&C(this._$committedValue)){const t=h(this._$startNode).nextSibling;void 0===this._textSanitizer&&(this._textSanitizer=v(t,"data","property")),e=this._textSanitizer(e),null==a||a({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=document.createTextNode("");this._commitNode(t),void 0===this._textSanitizer&&(this._textSanitizer=v(t,"data","property")),e=this._textSanitizer(e),null==a||a({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){var t;const{values:i,_$litType$:n}=e,s="number"==typeof n?this._$getTemplate(e):(void 0===n.el&&(n.el=W.createElement(n.h,this.options)),n);if((null===(t=this._$committedValue)||void 0===t?void 0:t._$template)===s)null==a||a({kind:"template updating",template:s,instance:this._$committedValue,parts:this._$committedValue._parts,options:this.options,values:i}),this._$committedValue._update(i);else{const e=new F(s,this),t=e._clone(this.options);null==a||a({kind:"template instantiated",template:s,instance:e,parts:e._parts,options:this.options,fragment:t,values:i}),e._update(i),null==a||a({kind:"template instantiated and updated",template:s,instance:e,parts:e._parts,options:this.options,fragment:t,values:i}),this._commitNode(t),this._$committedValue=e}}_$getTemplate(e){let t=O.get(e.strings);return void 0===t&&O.set(e.strings,t=new W(e)),t}_commitIterable(e){T(this._$committedValue)||(this._$committedValue=[],this._$clear());const t=this._$committedValue;let i,n=0;for(const s of e)n===t.length?t.push(i=new Y(this._insert(w()),this._insert(w()),this,this.options)):i=t[n],i._$setValue(s),n++;n<t.length&&(this._$clear(i&&h(i._$endNode).nextSibling,n),t.length=n)}_$clear(e=h(this._$startNode).nextSibling,t){var i;for(null===(i=this._$notifyConnectionChanged)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$endNode;){const t=h(e).nextSibling;h(e).remove(),e=t}}setConnected(e){var t;if(void 0!==this._$parent)throw new Error("part.setConnected() may only be called on a RootPart returned from render().");this.__isConnected=e,null===(t=this._$notifyConnectionChanged)||void 0===t||t.call(this,e)}}class Z{constructor(e,t,i,n,s){this.type=1,this._$committedValue=M,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$committedValue=new Array(i.length-1).fill(new String),this.strings=i):this._$committedValue=M,this._sanitizer=void 0}get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e,t=this,i,n){const s=this.strings;let o=!1;if(void 0===s)e=j(this,e,t,0),o=!C(e)||e!==this._$committedValue&&e!==z,o&&(this._$committedValue=e);else{const n=e;let r,l;for(e=s[0],r=0;r<s.length-1;r++)l=j(this,n[i+r],t,r),l===z&&(l=this._$committedValue[r]),o||(o=!C(l)||l!==this._$committedValue[r]),l===M?e=M:e!==M&&(e+=(null!=l?l:"")+s[r+1]),this._$committedValue[r]=l}o&&!n&&this._commitValue(e)}_commitValue(e){e===M?h(this.element).removeAttribute(this.name):(void 0===this._sanitizer&&(this._sanitizer=H(this.element,this.name,"attribute")),e=this._sanitizer(null!=e?e:""),null==a||a({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),h(this.element).setAttribute(this.name,null!=e?e:""))}}class q extends Z{constructor(){super(...arguments),this.type=3}_commitValue(e){void 0===this._sanitizer&&(this._sanitizer=H(this.element,this.name,"property")),e=this._sanitizer(e),null==a||a({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===M?void 0:e}}const G=u?u.emptyScript:"";class X extends Z{constructor(){super(...arguments),this.type=4}_commitValue(e){null==a||a({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!e||e===M),options:this.options}),e&&e!==M?h(this.element).setAttribute(this.name,G):h(this.element).removeAttribute(this.name)}}class J extends Z{constructor(e,t,i,n,s){if(super(e,t,i,n,s),this.type=5,void 0!==this.strings)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){var i;if((e=null!==(i=j(this,e,t,0))&&void 0!==i?i:M)===z)return;const n=this._$committedValue,s=e===M&&n!==M||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==M&&(n===M||s);null==a||a({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:s,addListener:o,oldListener:n}),s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var t,i;"function"==typeof this._$committedValue?this._$committedValue.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$committedValue.handleEvent(e)}}class K{constructor(e,t,i){this.element=e,this.type=6,this._$disconnectableChildren=void 0,this._$parent=t,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){null==a||a({kind:"commit to element binding",element:this.element,value:e,options:this.options}),j(this,e)}}const Q={_boundAttributeSuffix:$,_marker:f,_markerMatch:g,_HTML_RESULT:1,_getTemplateHtml:U,_TemplateInstance:F,_isIterable:x,_resolveDirective:j,_ChildPart:Y,_AttributePart:Z,_BooleanAttributePart:X,_EventPart:J,_PropertyPart:q,_ElementPart:K},ee=l.litHtmlPolyfillSupportDevMode;null==ee||ee(W,Y),(null!==(r=l.litHtmlVersions)&&void 0!==r?r:l.litHtmlVersions=[]).push("2.5.0"),l.litHtmlVersions.length>1&&d("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const te=(e,t,i)=>{var n,s;if(null==t)throw new TypeError(`The container to render into may not be ${t}`);const o=c++,r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let l=r._$litPart$;if(null==a||a({kind:"begin render",id:o,value:e,container:t,options:i,part:l}),void 0===l){const e=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;r._$litPart$=l=new Y(t.insertBefore(w(),e),e,void 0,null!=i?i:{})}return l._$setValue(e),null==a||a({kind:"end render",id:o,value:e,container:t,options:i,part:l}),l};te.setSanitizer=e=>{if(H!==_)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");H=e},te.createSanitizer=v,te._testOnlyClearSanitizerFactoryDoNotCallOrElse=()=>{H=_}}}]);
//# sourceMappingURL=vendors.lit-html.js.map