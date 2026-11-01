import{a as Fx,r as S,b as Lx,j as n,c as ri}from"./charts-nivo-DYQ47lf6.js";import{C as Cd,a as Dx,L as Ux,P as Bx,b as zx,B as Wx,p as Hx,c as qx,d as Yx,i as Gx,A as Vx,e as Mx,f as Kx,D as ai}from"./charts-others-D3x3PcxJ.js";import{C as Ed,b as Ad,a as Rd,D as Td,c as Od,P as Pd,R as $d,T as kd,d as Id,L as Fd}from"./utils-D7KHK4u5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=r(l);fetch(l.href,c)}})();var ii={},Wc;function Jx(){if(Wc)return ii;Wc=1;var a=Fx();return ii.createRoot=a.createRoot,ii.hydrateRoot=a.hydrateRoot,ii}var Xx=Jx();function Ld(a,i){return function(){return a.apply(i,arguments)}}const{toString:Zx}=Object.prototype,{getPrototypeOf:Dn}=Object,{iterator:fa,toStringTag:Dd}=Symbol,Un=(({hasOwnProperty:a})=>(i,r)=>a.call(i,r))(Object.prototype),Ud=a=>typeof a=="string"&&(a==="__proto__"||a==="constructor"||a==="prototype"),yi=(a,i,r)=>a===Object.prototype||!r&&i===null,Qx=a=>{if(!Object.isExtensible(a))return!1;const i=Object.getOwnPropertyNames(a);return Object.getOwnPropertySymbols&&i.push(...Object.getOwnPropertySymbols(a)),i.every(r=>{if(Ud(r))return!1;const o=Object.getOwnPropertyDescriptor(a,r);return!!o&&o.configurable&&o.writable===!0})},ro=(a,i)=>{let r=a;const o=[];for(;r!=null;){if(o.indexOf(r)!==-1)return!1;o.push(r);const l=Dn(r);if(yi(r,l,r===a))return!1;if(Un(r,i))return!0;r=l}return!1},eb=(a,i)=>a!=null&&ro(a,i)?a[i]:void 0,tb=a=>{if(a==null||typeof a!="object"&&typeof a!="function")return a;const i=Dn(a);if(i===null&&Qx(a))return a;const r=Object.create(null),o=Object.create(null),l=[];let c=a;for(;c!=null&&l.indexOf(c)===-1;){l.push(c);const u=c===a?i:Dn(c);if(yi(c,u,c===a))break;const h=Object.getOwnPropertyNames(c);Object.getOwnPropertySymbols&&h.push(...Object.getOwnPropertySymbols(c));for(const p of h)Ud(p)||Un(o,p)||(r[p]=a[p],o[p]=!0);c=u}return r},ao=(a=>i=>{const r=Zx.call(i);return a[r]||(a[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),dn=a=>(a=a.toLowerCase(),i=>ao(i)===a),vi=a=>i=>typeof i===a,{isArray:vr}=Array,wr=vi("undefined");function Br(a){return a!==null&&!wr(a)&&a.constructor!==null&&!wr(a.constructor)&&Wt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Bd=dn("ArrayBuffer");function nb(a){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(a):i=a&&a.buffer&&Bd(a.buffer),i}const rb=vi("string"),Wt=vi("function"),ab=vi("number"),zr=a=>a!==null&&typeof a=="object",ib=a=>a===!0||a===!1,li=a=>{if(!zr(a))return!1;const i=Dn(a);return(i===null||i===Object.prototype||Dn(i)===null)&&(yi(a,i,!0)||!Un(a,Dd)&&!Un(a,fa))},sb=a=>{if(!zr(a)||Br(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},ob=dn("Date"),lb=dn("File"),cb=a=>!!(a&&typeof a.uri<"u"),db=a=>a&&typeof a.getParts<"u",ub=dn("Blob"),fb=dn("FileList"),pb=dn("Set"),hb=a=>zr(a)&&Wt(a.pipe);function gb(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Hc=gb(),qc=typeof Hc.FormData<"u"?Hc.FormData:void 0,mb=a=>{if(!a)return!1;if(qc&&a instanceof qc)return!0;const i=Dn(a);if(!i||i===Object.prototype||!Wt(a.append))return!1;const r=ao(a);return r==="formdata"||r==="object"&&Wt(a.toString)&&a.toString()==="[object FormData]"},xb=dn("URLSearchParams"),[bb,yb,vb,wb]=["ReadableStream","Request","Response","Headers"].map(dn),jb=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function pa(a,i,{allOwnKeys:r=!1}={}){if(a===null||typeof a>"u")return;let o,l;if(typeof a!="object"&&(a=[a]),vr(a))for(o=0,l=a.length;o<l;o++)i.call(null,a[o],o,a);else{if(Br(a))return;const c=r?Object.getOwnPropertyNames(a):Object.keys(a),u=c.length;let h;for(o=0;o<u;o++)h=c[o],i.call(null,a[h],h,a)}}function Sb(a,i){if(Br(a))return null;i=i.toLowerCase();const r=Object.keys(a);let o=r.length,l;for(;o-- >0;)if(l=r[o],i===l.toLowerCase())return l;return null}const xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,zd=a=>!wr(a)&&a!==xr;function Ms(...a){const{caseless:i,skipUndefined:r}=zd(this)&&this||{},o={},l=i?Object.create(null):null,c=(u,h)=>{if(h==="__proto__"||h==="constructor"||h==="prototype")return;let p=h;if(l&&typeof h=="string"){const v=h.toLowerCase(),b=l[v];b!==void 0&&Un(o,b)?p=b:l[v]=h}const x=Un(o,p)?o[p]:void 0;li(x)&&li(u)?o[p]=Ms(x,u):li(u)?o[p]=Ms({},u):vr(u)?o[p]=u.slice():(!r||!wr(u))&&(o[p]=u)};for(let u=0,h=a.length;u<h;u++){const p=a[u];if(!p||Br(p)||(pa(p,c),typeof p!="object"||vr(p)||!Object.getOwnPropertySymbols))continue;const x=Object.getOwnPropertySymbols(p);for(let v=0;v<x.length;v++){const b=x[v];Ib.call(p,b)&&c(p[b],b)}}return o}const _b=(a,i,r,{allOwnKeys:o}={})=>(pa(i,(l,c)=>{r&&Wt(l)?Object.defineProperty(a,c,{__proto__:null,value:Ld(l,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,c,{__proto__:null,value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),a),Nb=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),Cb=(a,i,r,o)=>{a.prototype=Object.create(i.prototype,o),Object.defineProperty(a.prototype,"constructor",{__proto__:null,value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{__proto__:null,value:i.prototype}),r&&Object.assign(a.prototype,r)},Eb=(a,i,r,o)=>{let l,c,u;const h={};if(i=i||{},a==null)return i;do{for(l=Object.getOwnPropertyNames(a),c=l.length;c-- >0;)u=l[c],(!o||o(u,a,i))&&!h[u]&&(i[u]=a[u],h[u]=!0);a=r!==!1&&Dn(a)}while(a&&(!r||r(a,i))&&a!==Object.prototype);return i},Ab=(a,i,r)=>{a=String(a),(r===void 0||r>a.length)&&(r=a.length),r-=i.length;const o=a.indexOf(i,r);return o!==-1&&o===r},Rb=a=>{if(!a)return null;if(vr(a))return a;let i=a.length;if(!Number.isSafeInteger(i)||i<0||i>4294967295)return null;const r=new Set,o=new Set;let l=a;for(;l!=null&&r.size<i;){if(o.has(l))return null;o.add(l);const u=Dn(l);if(yi(l,u,l===a))break;Object.getOwnPropertyNames(l).forEach(h=>{const p=+h;Number.isInteger(p)&&p>=0&&p<i&&String(p)===h&&Un(l,h)&&r.add(p)}),l=u}if(r.size!==i)return null;const c=new Array(i);for(;i-- >0;)c[i]=a[i];return c},Tb=(a=>i=>a&&i instanceof a)(typeof Uint8Array<"u"&&Dn(Uint8Array)),Ob=(a,i)=>{const o=(a&&a[fa]).call(a);let l;for(;(l=o.next())&&!l.done;){const c=l.value;i.call(a,c[0],c[1])}},Pb=(a,i)=>{let r;const o=[];for(;(r=a.exec(i))!==null;)o.push(r);return o},$b=dn("HTMLFormElement"),kb=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,l){return o.toUpperCase()+l}),{propertyIsEnumerable:Ib}=Object.prototype,Fb=dn("RegExp"),Wd=(a,i)=>{const r=Object.getOwnPropertyDescriptors(a),o={};pa(r,(l,c)=>{let u;(u=i(l,c,a))!==!1&&(o[c]=u||l)}),Object.defineProperties(a,o)},Lb=a=>{Wd(a,(i,r)=>{if(Wt(a)&&["arguments","caller","callee"].includes(r))return!1;const o=a[r];if(Wt(o)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Db=(a,i)=>{const r={},o=l=>{l.forEach(c=>{r[c]=!0})};return vr(a)?o(a):o(String(a).split(i)),r},Ub=()=>{},Bb=(a,i)=>a!=null&&Number.isFinite(a=+a)?a:i;function zb(a){return!!(a&&Wt(a.append)&&a[Dd]==="FormData"&&a[fa])}const Wb=a=>{const i=new WeakSet,r=o=>{if(zr(o)){if(i.has(o))return;if(Br(o))return o;if(!("toJSON"in o)){i.add(o);let l;if(pb(o)){l=[];for(const c of o){const u=r(c);!wr(u)&&l.push(u)}}else l=vr(o)?[]:{},pa(o,(c,u)=>{const h=r(c);!wr(h)&&(l[u]=h)});return i.delete(o),l}}return o};return r(a)},Hb=dn("AsyncFunction"),qb=a=>a&&(zr(a)||Wt(a))&&Wt(a.then)&&Wt(a.catch),Hd=((a,i)=>a?setImmediate:i?((r,o)=>(xr.addEventListener("message",({source:l,data:c})=>{l===xr&&c===r&&o.length&&o.shift()()},!1),l=>{o.push(l),xr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Wt(xr.postMessage)),Yb=typeof queueMicrotask<"u"?queueMicrotask.bind(xr):typeof process<"u"&&process.nextTick||Hd,qd=a=>a!=null&&Wt(a[fa]),Gb=a=>a!=null&&ro(a,fa)&&qd(a),y={isArray:vr,isArrayBuffer:Bd,isBuffer:Br,isFormData:mb,isArrayBufferView:nb,isString:rb,isNumber:ab,isBoolean:ib,isObject:zr,isPlainObject:li,isEmptyObject:sb,isReadableStream:bb,isRequest:yb,isResponse:vb,isHeaders:wb,isUndefined:wr,isDate:ob,isFile:lb,isReactNativeBlob:cb,isReactNative:db,isBlob:ub,isRegExp:Fb,isFunction:Wt,isStream:hb,isURLSearchParams:xb,isTypedArray:Tb,isFileList:fb,forEach:pa,merge:Ms,extend:_b,trim:jb,stripBOM:Nb,inherits:Cb,toFlatObject:Eb,kindOf:ao,kindOfTest:dn,endsWith:Ab,toArray:Rb,forEachEntry:Ob,matchAll:Pb,isHTMLForm:$b,hasOwnProperty:Un,hasOwnProp:Un,hasOwnInPrototypeChain:ro,getSafeProp:eb,toSafeFlatObject:tb,reduceDescriptors:Wd,freezeMethods:Lb,toObjectSet:Db,toCamelCase:kb,noop:Ub,toFiniteNumber:Bb,findKey:Sb,global:xr,isContextDefined:zd,isSpecCompliantForm:zb,toJSONObject:Wb,isAsyncFn:Hb,isThenable:qb,setImmediate:Hd,asap:Yb,isIterable:qd,isSafeIterable:Gb},Vb=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mb=a=>{const i=Object.create(null);let r,o,l;return a&&a.split(`
`).forEach(function(u){l=u.indexOf(":"),r=u.substring(0,l).trim().toLowerCase(),o=u.substring(l+1).trim();const h=y.hasOwnProp(i,r);!r||h&&y.hasOwnProp(Vb,r)||(r==="set-cookie"?h?i[r].push(o):i[r]=[o]:i[r]=h?i[r]+", "+o:o)}),i};function Kb(a){let i=0,r=a.length;for(;i<r;){const o=a.charCodeAt(i);if(o!==9&&o!==32)break;i+=1}for(;r>i;){const o=a.charCodeAt(r-1);if(o!==9&&o!==32)break;r-=1}return i===0&&r===a.length?a:a.slice(i,r)}const Jb=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Xb=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function io(a,i){return y.isArray(a)?a.map(r=>io(r,i)):Kb(String(a).replace(i,""))}const Zb=a=>io(a,Jb),Qb=a=>io(a,Xb);function Yd(a){const i=Object.create(null);return y.forEach(a.toJSON(),(r,o)=>{i[o]=Qb(r)}),i}const Yc=Symbol("internals");function aa(a){return a&&String(a).trim().toLowerCase()}function ci(a){return a===!1||a==null?a:y.isArray(a)?a.map(ci):Zb(String(a))}function e1(a){const i=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(a);)i[o[1]]=o[2];return i}const t1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Ds(a){let i=0,r=a.length;for(;i<r;){const o=a.charCodeAt(i);if(o!==9&&o!==32)break;i+=1}for(;r>i;){const o=a.charCodeAt(r-1);if(o!==9&&o!==32)break;r-=1}return i===0&&r===a.length?a:a.slice(i,r)}function n1(a){const i=a.length-1;if(i<1||a.charCodeAt(0)!==34||a.charCodeAt(i)!==34)return a;let r="";for(let o=1;o<i;o++){const l=a.charCodeAt(o);if(l===34||l===92&&(o+=1,o>=i))return a;r+=a[o]}return r}function r1(a){const i=Object.create(null),r=String(a);let o=0,l=!1,c=!1;function u(h){const p=Ds(r.slice(o,h)),x=p.indexOf("=");if(x<1)return;const v=Ds(p.slice(0,x));if(!t1.test(v))return;const b=v.toLowerCase();if(b==="__proto__"||b==="constructor"||b==="prototype")return;const O=Ds(p.slice(x+1));i[b]=n1(O)}for(let h=0;h<r.length;h++){const p=r.charCodeAt(h);l?c?c=!1:p===92?c=!0:p===34&&(l=!1):p===34?l=!0:(p===44||p===59)&&(u(h),o=h+1)}return u(r.length),i}const a1=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim()),i1="__Proto__",Gc=a=>a==="__proto__"?i1:a;function Us(a,i,r,o,l){if(y.isFunction(o))return o.call(a,i,r);if(l&&(i=r),!!y.isString(i)){if(y.isString(o))return i.indexOf(o)!==-1;if(y.isRegExp(o))return o.test(i)}}function s1(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,r,o)=>r.toUpperCase()+o)}function o1(a,i){const r=y.toCamelCase(" "+i);["get","set","has"].forEach(o=>{Object.defineProperty(a,o+r,{__proto__:null,value:function(l,c,u){return this[o].call(this,i,l,c,u)},configurable:!0})})}class Ct{constructor(i){i&&this.set(i)}set(i,r,o){const l=this;function c(h,p,x){const v=aa(p);if(!v)return;const b=y.findKey(l,v);(!b||l[b]===void 0||x===!0||x===void 0&&l[b]!==!1)&&(l[Gc(b||p)]=ci(h))}const u=(h,p)=>y.forEach(h,(x,v)=>c(x,v,p));if(y.isPlainObject(i)||i instanceof this.constructor)u(i,r);else if(y.isString(i)&&(i=i.trim())&&!a1(i))u(Mb(i),r);else if(y.isObject(i)&&y.isSafeIterable(i)){let h=Object.create(null),p,x;for(const v of i){if(!y.isArray(v))throw new TypeError("Object iterator must return a key-value pair");x=v[0],y.hasOwnProp(h,x)?(p=h[x],h[x]=y.isArray(p)?[...p,v[1]]:[p,v[1]]):h[x]=v[1]}u(h,r)}else i!=null&&c(r,i,o);return this}get(i,r){if(i=aa(i),i){const o=y.findKey(this,i);if(o){const l=this[o];if(!r)return l;if(r===!0)return e1(l);if(y.isFunction(r))return r.call(this,l,o);if(y.isRegExp(r))return r.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,r){if(i=aa(i),i){const o=y.findKey(this,i);return!!(o&&this[o]!==void 0&&(!r||Us(this,this[o],o,r)))}return!1}delete(i,r){const o=this;let l=!1;function c(u){if(u=aa(u),u){const h=y.findKey(o,u);h&&(!r||Us(o,o[h],h,r))&&(delete o[h],l=!0)}}return y.isArray(i)?i.forEach(c):c(i),l}clear(i){const r=Object.keys(this);let o=r.length,l=!1;for(;o--;){const c=r[o];(!i||Us(this,this[c],c,i,!0))&&(delete this[c],l=!0)}return l}normalize(i){const r=this,o=Object.create(null);return y.forEach(this,(l,c)=>{const u=y.findKey(o,c);if(u){r[u]=ci(l),delete r[c];return}const h=Gc(i?s1(c):String(c).trim());h!==c&&delete r[c],r[h]=ci(l),o[h]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const r=Object.create(null);return y.forEach(this,(o,l)=>{o!=null&&o!==!1&&(r[l]=i&&y.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,r])=>i+": "+r).join(`
`)}getSetCookie(){const i=this.get("set-cookie");return y.isArray(i)?i:i==null||i===!1?[]:[i]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static parseParameters(i){return r1(i)}static concat(i,...r){const o=new this(i);return r.forEach(l=>o.set(l)),o}static accessor(i){const o=(this[Yc]=this[Yc]={accessors:{}}).accessors,l=this.prototype;function c(u){const h=aa(u);o[h]||(o1(l,u),o[h]=!0)}return y.isArray(i)?i.forEach(c):c(i),this}}Ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(Ct.prototype,({value:a},i)=>{let r=i[0].toUpperCase()+i.slice(1);return{get:()=>a,set(o){this[r]=o}}});y.freezeMethods(Ct);const pi="[REDACTED ****]";function l1(a){if(y.hasOwnProp(a,"toJSON"))return!0;let i=Object.getPrototypeOf(a);for(;i&&i!==Object.prototype;){if(y.hasOwnProp(i,"toJSON"))return!0;i=Object.getPrototypeOf(i)}return!1}function c1(a,i){const r=new Set(i.map(c=>String(c).toLowerCase())),o=[],l=c=>{if(c===null||typeof c!="object"||y.isBuffer(c))return c;if(o.indexOf(c)!==-1)return;c instanceof Ct&&(c=c.toJSON()),o.push(c);let u;if(y.isArray(c))u=[],c.forEach((h,p)=>{const x=l(h);y.isUndefined(x)||(u[p]=x)});else{if(!y.isPlainObject(c)&&l1(c))return o.pop(),c;u=Object.create(null);for(const[h,p]of Object.entries(c)){const x=r.has(h.toLowerCase())?pi:l(p);y.isUndefined(x)||(u[h]=x)}}return o.pop(),u};return l(a)}function Vc(a){try{return String(a)}catch{return""}}function d1(a){return a.errors.map(r=>{try{return r&&r.message?Vc(r.message):Vc(r)}catch{return""}}).filter(Boolean).join("; ")||a.name||"AggregateError"}const u1=`
Caused by: `,Ks=Symbol("causeStack");function f1(a,i){const r=y.hasOwnProp(a,Ks)&&a[Ks];return r&&i.endsWith(r)?i.length-r.length:-1}function p1(a,i){try{const r=i&&i.stack;if(typeof r!="string"||!r)return;const o=a.stack;if(typeof o!="string"||!o)return;const l=u1+r;a.stack=o+l,Object.defineProperty(a,Ks,{__proto__:null,value:l})}catch{}}class ee extends Error{static from(i,r,o,l,c,u){let h=i.message;!h&&y.isArray(i.errors)&&i.errors.length&&(h=d1(i));const p=new ee(h,r||i.code,o,l,c);return Object.defineProperty(p,"cause",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),p.name=i.name,p1(p,i),i.status!=null&&p.status==null&&(p.status=i.status),u&&Object.assign(p,u),p}constructor(i,r,o,l,c){super(i),Object.defineProperty(this,"message",{__proto__:null,value:i,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),o&&(this.config=o),l&&(this.request=l),c&&(this.response=c,this.status=c.status)}toJSON(){const i=this.config,r=i&&y.hasOwnProp(i,"redact")?i.redact:void 0,o=y.isArray(r)&&r.length>0?c1(i,r):y.toJSONObject(i);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:o,code:this.code,status:this.status}}}ee.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ee.ERR_BAD_OPTION="ERR_BAD_OPTION";ee.ECONNABORTED="ECONNABORTED";ee.ETIMEDOUT="ETIMEDOUT";ee.ECONNREFUSED="ECONNREFUSED";ee.ERR_NETWORK="ERR_NETWORK";ee.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ee.ERR_DEPRECATED="ERR_DEPRECATED";ee.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ee.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ee.ERR_CANCELED="ERR_CANCELED";ee.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ee.ERR_INVALID_URL="ERR_INVALID_URL";ee.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const h1=null,Gd=100;function Js(a){return y.isPlainObject(a)||y.isArray(a)}function Vd(a){return y.endsWith(a,"[]")?a.slice(0,-2):a}function Bs(a,i,r){return a?a.concat(i).map(function(l,c){return l=Vd(l),!r&&c?"["+l+"]":l}).join(r?".":""):i}function g1(a){return y.isArray(a)&&!a.some(Js)}const m1=y.toFlatObject(y,{},null,function(i){return/^is[A-Z]/.test(i)});function wi(a,i,r){if(!y.isObject(a))throw new TypeError("target must be an object");i=i||new FormData;const o=(D,N)=>{const C=y.getSafeProp(r,D);return y.isUndefined(C)?N:C},l=o("metaTokens",!0),c=o("visitor")||$,u=o("dots",!1),h=o("indexes",!1),p=o("Blob")||typeof Blob<"u"&&Blob,x=o("maxDepth",Gd),v=p&&y.isSpecCompliantForm(i),b=[];if(!y.isFunction(c))throw new TypeError("visitor must be a function");function O(D){if(D===null)return"";if(y.isDate(D))return D.toISOString();if(y.isBoolean(D))return D.toString();if(!v&&y.isBlob(D))throw new ee("Blob is not supported. Use a Buffer instead.");if(y.isArrayBuffer(D)||y.isTypedArray(D)){if(v&&typeof p=="function")return new p([D]);throw new ee("Blob is not supported. Use a Buffer instead.",ee.ERR_NOT_SUPPORT)}return D}function W(D){if(D>x)throw new ee("Object is too deeply nested ("+D+" levels). Max depth: "+x,ee.ERR_FORM_DATA_DEPTH_EXCEEDED)}function F(D,N){if(x===1/0)return JSON.stringify(D);const C=[];return JSON.stringify(D,function(re,be){if(!y.isObject(be))return be;for(;C.length&&C[C.length-1]!==this;)C.pop();return C.push(be),W(N+C.length-1),be})}function $(D,N,C){let ne=D;if(y.isReactNative(i)&&y.isReactNativeBlob(D))return i.append(Bs(C,N,u),O(D)),!1;if(D&&!C&&typeof D=="object"){if(y.endsWith(N,"{}"))N=l?N:N.slice(0,-2),D=F(D,1);else if(y.isArray(D)&&g1(D)||(y.isFileList(D)||y.endsWith(N,"[]"))&&(ne=y.toArray(D)))return N=Vd(N),ne.forEach(function(be,ae){!(y.isUndefined(be)||be===null)&&i.append(h===!0?Bs([N],ae,u):h===null?N:N+"[]",O(be))}),!1}return Js(D)?!0:(i.append(Bs(C,N,u),O(D)),!1)}const L=Object.assign(m1,{defaultVisitor:$,convertValue:O,isVisitable:Js});function V(D,N,C=0){if(!y.isUndefined(D)){if(W(C),b.indexOf(D)!==-1)throw new Error("Circular reference detected in "+N.join("."));b.push(D),y.forEach(D,function(re,be){(!(y.isUndefined(re)||re===null)&&c.call(i,re,y.isString(be)?be.trim():be,N,L))===!0&&V(re,N?N.concat(be):[be],C+1)}),b.pop()}}if(!y.isObject(a))throw new TypeError("data must be an object");return V(a),i}function Mc(a){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(a).replace(/[!'()~]|%20/g,function(o){return i[o]})}function so(a,i){this._pairs=[],a&&wi(a,this,i)}const Md=so.prototype;Md.append=function(i,r){this._pairs.push([i,r])};Md.toString=function(i){const r=i?o=>i.call(this,o,Mc):Mc;return this._pairs.map(function(l){return r(l[0])+"="+r(l[1])},"").join("&")};function x1(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Kd(a,i,r){if(!i)return a;a=a||"";const o=y.isFunction(r)?{serialize:r}:r,l=y.getSafeProp(o,"encode")||x1,c=y.getSafeProp(o,"serialize");let u;if(c?u=c(i,o):u=y.isURLSearchParams(i)?i.toString():new so(i,o).toString(l),u){const h=a.indexOf("#");h!==-1&&(a=a.slice(0,h)),a+=(a.indexOf("?")===-1?"?":"&")+u}return a}const ia=Symbol("internals");function Jd(a){return a?a.length:0}function Kc(a){if(a)for(;a.length&&a[a.length-1]===null;)a.pop()}function b1(a){return typeof a=="string"&&a!==""&&String(Number(a))===a?Number(a):a}function sa(a,i){const r=a.handlers,o=Jd(r);r!==i.handlersRef?(i.handlersRef=r,i.handlerEntries.clear()):o!==i.handlersLength&&(o?i.handlerEntries.forEach(function(c,u){r[c.index]!==c.handler&&i.handlerEntries.delete(u)}):i.handlerEntries.clear()),i.handlersLength=o}class Jc{constructor(){this.handlers=[],this[ia]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(i,r,o){const l={fulfilled:i,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null},c=this[ia];this.handlers==null&&(this.handlers=[]),sa(this,c);const u=c.nextId++;return this.handlers.push(l),c.handlerEntries.set(u,{handler:l,index:this.handlers.length-1}),c.handlersLength=this.handlers.length,u}eject(i){const r=this[ia];sa(this,r);const o=b1(i),l=r.handlerEntries.get(o);if(l){if(r.handlerEntries.delete(o),this.handlers[l.index]!==l.handler)return;this.handlers[l.index]=null,r.iterationDepth||(Kc(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],sa(this,this[ia]))}forEach(i){const r=this[ia];sa(this,r),r.iterationDepth++;try{y.forEach(this.handlers,function(l){l!==null&&i(l)})}finally{--r.iterationDepth||(sa(this,r),Kc(this.handlers),r.handlersLength=Jd(this.handlers))}}}const oo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},y1=typeof URLSearchParams<"u"?URLSearchParams:so,v1=typeof FormData<"u"?FormData:null,w1=typeof Blob<"u"?Blob:null,j1={isBrowser:!0,classes:{URLSearchParams:y1,FormData:v1,Blob:w1},protocols:["http","https","file","blob","url","data"]},lo=typeof window<"u"&&typeof document<"u",Xs=typeof navigator=="object"&&navigator||void 0,S1=lo&&(!Xs||["ReactNative","NativeScript","NS"].indexOf(Xs.product)<0),_1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",N1=lo&&window.location.href||"http://localhost",C1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lo,hasStandardBrowserEnv:S1,hasStandardBrowserWebWorkerEnv:_1,navigator:Xs,origin:N1},Symbol.toStringTag,{value:"Module"})),jt={...C1,...j1};function E1(a,i){return wi(a,new jt.classes.URLSearchParams,{visitor:function(r,o,l,c){return jt.isNode&&y.isBuffer(r)?(this.append(o,r.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...i})}const Xc=Gd;function Xd(a){if(a>Xc)throw new ee("FormData field is too deeply nested ("+a+" levels). Max depth: "+Xc,ee.ERR_FORM_DATA_DEPTH_EXCEEDED)}function A1(a){const i=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let o;for(;(o=r.exec(a))!==null;)Xd(i.length),i.push(o[0]==="[]"?"":o[1]||o[0]);return i}function Zd(a){const i={},r=Object.keys(a);let o;const l=r.length;let c;for(o=0;o<l;o++)c=r[o],i[c]=a[c];return i}function Qd(a){if(!y.isArray(a))return a;const i=Object.keys(a);return i.length!==a.length||i.some((r,o)=>r!==String(o))?Zd(a):a}function R1(a){const i=[a];for(;i.length;){const r=i.pop();Object.keys(r).forEach(o=>{const l=r[o]=Qd(r[o]);(y.isArray(l)||y.isPlainObject(l))&&i.push(l)})}return a}function eu(a){function i(r,o,l,c){Xd(c);let u=r[c++];if(u==="__proto__")return!0;const h=Number.isFinite(+u),p=c>=r.length;return u=!u&&y.isArray(l)?l.length:u,p?(y.hasOwnProp(l,u)?(l[u]=Qd(l[u]),l[u]=y.isArray(l[u])?l[u].concat(o):[l[u],o]):l[u]=o,!h):((!y.hasOwnProp(l,u)||!y.isObject(l[u]))&&(l[u]=[]),i(r,o,l[u],c)&&y.isArray(l[u])&&(l[u]=Zd(l[u])),!h)}if(y.isFormData(a)&&y.isFunction(a.entries)){const r={};return y.forEachEntry(a,(o,l)=>{i(A1(o),l,r,0)}),R1(r)}return null}const tu=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Dr=(a,i)=>a!=null&&y.hasOwnProp(a,i)?a[i]:void 0;function T1(a,i,r){if(y.isString(a))try{return(i||JSON.parse)(a),y.trim(a)}catch(o){if(o.name!=="SyntaxError")throw o}return(0,JSON.stringify)(a)}const ha={transitional:oo,adapter:["xhr","http","fetch"],transformRequest:[function(i,r){const o=r.getContentType()||"",l=o.indexOf("application/json")>-1,c=y.isObject(i);if(c&&y.isHTMLForm(i)&&(i=new FormData(i)),y.isFormData(i))return l?JSON.stringify(eu(i)):i;if(y.isArrayBuffer(i)||y.isBuffer(i)||y.isStream(i)||y.isFile(i)||y.isBlob(i)||y.isReadableStream(i))return i;if(y.isArrayBufferView(i))return i.buffer;if(y.isURLSearchParams(i))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let h;if(c){const p=Dr(this,"formSerializer");if(o.indexOf("application/x-www-form-urlencoded")>-1)return E1(i,p).toString();if((h=y.isFileList(i))||o.indexOf("multipart/form-data")>-1){const x=Dr(this,"env"),v=x&&x.FormData;return wi(h?{"files[]":i}:i,v&&new v,p)}}return c||l?(r.setContentType("application/json",!1),T1(i)):i}],transformResponse:[function(i){const r=Dr(this,"transitional")||ha.transitional,o=r&&r.forcedJSONParsing,l=Dr(this,"responseType"),c=l==="json";if(y.isResponse(i)||y.isReadableStream(i))return i;if(i&&y.isString(i)&&(o&&!l||c)){const h=!(r&&r.silentJSONParsing)&&c;try{return JSON.parse(i,Dr(this,"parseReviver"))}catch(p){if(h)throw p.name==="SyntaxError"?ee.from(p,ee.ERR_BAD_RESPONSE,this,null,Dr(this,"response")):p}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(tu,a=>{ha.headers[a]={}});function zs(a,i){const r=this||ha,o=i||r,l=Ct.from(o.headers);let c=o.data;return y.forEach(a,function(h){c=h.call(r,c,l.normalize(),i?i.status:void 0)}),l.normalize(),c}function nu(a){return!!(a&&a.__CANCEL__)}class ga extends ee{constructor(i,r,o){super(i??"canceled",ee.ERR_CANCELED,r,o),this.name="CanceledError",this.__CANCEL__=!0}}function ru(a,i,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?a(r):i(new ee("Request failed with status code "+r.status,r.status>=400&&r.status<500?ee.ERR_BAD_REQUEST:ee.ERR_BAD_RESPONSE,r.config,r.request,r))}const O1=/[\t\n\r]/g;function au(a){if(typeof a!="string")return a;let i=0;for(;i<a.length&&a.charCodeAt(i)<=32;)i++;return a.slice(i).replace(O1,"")}function Ws(a){const i=/^([-+\w]{1,25}):(?:\/\/)?/.exec(a);return i&&i[1].toLowerCase()||""}const Zc=a=>{try{return decodeURIComponent(a)}catch{return a}},iu=jt.hasStandardBrowserEnv?{write(a,i,r,o,l,c,u){if(typeof document>"u")return;const h=[`${a}=${encodeURIComponent(i)}`];y.isNumber(r)&&h.push(`expires=${new Date(r).toUTCString()}`),y.isString(o)&&h.push(`path=${o}`),y.isString(l)&&h.push(`domain=${l}`),c===!0&&h.push("secure"),y.isString(u)&&h.push(`SameSite=${u}`),document.cookie=h.join("; ")},read(a){if(typeof document>"u")return null;const i=document.cookie;if(!i)return null;const r=i.split(";");for(let o=0;o<r.length;o++){const l=r[o].replace(/^\s+/,""),c=l.indexOf("=");if(c!==-1&&l.slice(0,c)===a)return Zc(l.slice(c+1))}return null},async readAsync(a){try{const i=typeof window<"u"&&window.cookieStore;if(i&&y.isFunction(i.get)){const r=await i.get(a);return r?Zc(r.value):null}}catch{}return this.read(a)},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function P1(a,i){a=a||10;const r=new Array(a),o=new Array(a);let l=0,c=0,u;return i=i!==void 0?i:1e3,function(p){const x=Date.now(),v=o[c];u||(u=x),r[l]=p,o[l]=x;let b=c,O=0;for(;b!==l;)O+=r[b++],b=b%a;if(l=(l+1)%a,l===c&&(c=(c+1)%a),x-u<i)return;const W=v&&x-v;return W?Math.round(O*1e3/W):void 0}}function $1(a,i){let r=0,o=1e3/i,l,c;const u=(v,b=Date.now())=>{r=b,l=null,c&&(clearTimeout(c),c=null),a(...v)};return[(...v)=>{const b=Date.now(),O=b-r;O>=o?u(v,b):(l=v,c||(c=setTimeout(()=>{c=null,u(l)},o-O)))},()=>l&&u(l),(...v)=>u(v)]}const hi=(a,i,r=3)=>{let o=0;const l=P1(50,250);return $1(c=>{if(!c||!y.isNumber(c.loaded))return;const u=c.loaded,h=c.lengthComputable?c.total:void 0,p=Math.max(0,h!=null?Math.min(u,h):u),x=Math.max(0,p-o),v=l(x);o=Math.max(o,p);const b={loaded:p,total:h,progress:h?p/h:void 0,bytes:x,rate:v||void 0,estimated:v&&h?(h-p)/v:void 0,event:c,lengthComputable:h!=null,[i?"download":"upload"]:!0};a(b)},r)},Qc=(a,i)=>{const r=a!=null;return[o=>i[0]({lengthComputable:r,total:a,loaded:o}),i[1]]},ed=(a,i=y.asap)=>(...r)=>i(()=>a(...r)),k1=jt.hasStandardBrowserEnv?(a=>i=>(i=new URL(i,document.baseURI||jt.origin),a.protocol===i.protocol&&a.host===i.host&&a.port===i.port))(new URL(jt.origin)):()=>!0;function I1(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function F1(a,i){if(!i)return a;let r=a.length;for(;r>0&&a.charCodeAt(r-1)===47;)r--;return a.slice(0,r)+"/"+i.replace(/^\/+/,"")}const L1=/^https?:(?!\/\/)/i;function D1(a){return a&&a.replace(/(^|&)([^=&]*=)?[^&]+/g,(i,r,o="")=>`${r}${o}${pi}`)}function U1(a){const i=a.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${pi}@`),r=i.indexOf("#"),l=(r===-1?i:i.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${pi}`);return r===-1?l:`${l}#${D1(i.slice(r+1))}`}function td(a,i){if(typeof a=="string"){const r=au(a);if(L1.test(r))throw new ee(`Invalid URL ${JSON.stringify(U1(r))}: missing "//" after protocol`,ee.ERR_INVALID_URL,i)}}function su(a,i,r,o){td(i,o);let l=!I1(i);return a&&(l||r===!1)?(td(a,o),F1(a,i)):i}function B1(a){const i=[{value:a}],r=new WeakSet,o=new WeakSet;for(;i.length;){const{value:l,done:c}=i.pop();if(!y.isPlainObject(l)&&!y.isArray(l))continue;if(c){r.delete(l);continue}if(r.has(l))throw new ee("Circular reference detected in params",ee.ERR_BAD_OPTION_VALUE);if(o.has(l))continue;o.add(l),r.add(l),i.push({value:l,done:!0});const u=Object.keys(l);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(l).forEach(h=>{const p=Object.getOwnPropertyDescriptor(l,h);p&&p.enumerable&&u.push(h)}),u.forEach(h=>{if(h==="__proto__"||h==="constructor"||h==="prototype"){const p=Object.getOwnPropertyDescriptor(l,h);p&&y.hasOwnProp(p,"value")&&i.push({value:p.value})}else i.push({value:l[h]})})}}const nd=a=>a instanceof Ct?{...a}:a,Zs=a=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(a).concat(Object.getOwnPropertySymbols(a).filter(i=>{const r=Object.getOwnPropertyDescriptor(a,i);return r&&r.enumerable})):Object.keys(a);function z1(a,i){const r=[],o=new WeakMap,l={};function c(h,p){if(!y.isPlainObject(p))return y.isArray(p)?p.slice():p;const x=y.isPlainObject(h)?h:l;let v=o.get(p);if(v||(v=new WeakMap,o.set(p,v)),v.has(x))return v.get(x);const b={};return v.set(x,b),r.push({base:x,source:p,result:b}),b}const u=y.isUndefined(i)?c(void 0,a):c(a,i);for(;r.length;){const{base:h,source:p,result:x}=r.pop(),v=new Set(Zs(h)),b=new Set(Zs(p));new Set([...v,...b]).forEach(W=>{if(W==="__proto__"||W==="constructor"||W==="prototype")return;const F=b.has(W),$=F?p[W]:void 0,L=(!F||y.isPlainObject($))&&v.has(W)?h[W]:void 0;x[W]=F?c(L,$):c(void 0,L)})}return B1(u),u}function er(a,i,r,o){return y.isPlainObject(a)&&y.isPlainObject(i)?y.merge.call({caseless:o},a,i):y.isPlainObject(i)?y.merge({},i):y.isArray(i)?i.slice():i}function ou(a,i,r,o){if(y.isUndefined(i)){if(!y.isUndefined(a))return er(void 0,a,r,o)}else return er(a,i,r,o)}function Hs(a,i){if(!y.isUndefined(i))return er(void 0,i)}function ot(a,i){if(y.isUndefined(i)){if(!y.isUndefined(a))return er(void 0,a)}else return er(void 0,i)}function W1(a,i,r){const o=y.hasOwnProp(i,"transitional")?i.transitional:void 0;if(!y.isUndefined(o))if(y.isPlainObject(o)){if(y.hasOwnProp(o,r))return o[r]}else return;const l=y.hasOwnProp(a,"transitional")?a.transitional:void 0;if(y.isPlainObject(l)&&y.hasOwnProp(l,r))return l[r]}function Qs(a,i,r,o,l){if(y.hasOwnProp(l,r))return er(a,i);if(y.hasOwnProp(o,r))return er(void 0,a)}function H1(a,i,r){return ou(nd(a),nd(i),r,!0)}const q1=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),rd={url:Hs,method:Hs,data:Hs,baseURL:ot,transformRequest:ot,transformResponse:ot,params:z1,paramsSerializer:ot,timeout:ot,timeoutErrorMessage:ot,withCredentials:ot,withXSRFToken:ot,adapter:ot,responseType:ot,xsrfCookieName:ot,xsrfHeaderName:ot,onUploadProgress:ot,onDownloadProgress:ot,decompress:ot,maxContentLength:ot,maxBodyLength:ot,beforeRedirect:ot,transport:ot,httpAgent:ot,httpsAgent:ot,cancelToken:ot,socketPath:ot,allowedSocketPaths:ot,responseEncoding:ot,validateStatus:Qs,headers:H1};function jr(a,i){a=a||{},i=i||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",q1);const o=Zs({...a,...i});for(let l=0,c=o.length;l<c;l++){const u=o[l];if(u==="__proto__"||u==="constructor"||u==="prototype")continue;const h=y.hasOwnProp(rd,u)?rd[u]:ou,p=y.hasOwnProp(a,u)?a[u]:void 0,x=y.hasOwnProp(i,u)?i[u]:void 0,v=h===Qs?h(p,x,u,a,i):h(p,x,u);y.isUndefined(v)&&h!==Qs||(r[u]=v)}return y.hasOwnProp(i,"validateStatus")&&y.isUndefined(i.validateStatus)&&W1(a,i,"validateStatusUndefinedResolves")===!1&&(y.hasOwnProp(a,"validateStatus")?r.validateStatus=er(void 0,a.validateStatus):delete r.validateStatus),r}const Y1=["content-type","content-length"];function G1(a,i,r){if(r!=="content-only"){a.set(i);return}Object.entries(i||{}).forEach(([o,l])=>{Y1.includes(o.toLowerCase())&&a.set(o,l)})}const ad=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(i,r)=>String.fromCharCode(parseInt(r,16))),V1=a=>iu.read(a);function lu(a,i=V1){const r=jr({},a),o=W=>y.hasOwnProp(r,W)?r[W]:void 0,l=o("data");let c=o("withXSRFToken");const u=o("xsrfHeaderName"),h=o("xsrfCookieName");let p=o("headers");const x=o("auth"),v=o("baseURL"),b=o("allowAbsoluteUrls"),O=o("url");if(r.headers=p=Ct.from(p),r.url=Kd(su(v,O,b,r),o("params"),o("paramsSerializer")),x){const W=y.getSafeProp(x,"username")||"",F=y.getSafeProp(x,"password")||"",$=o("transitional"),L=$&&y.hasOwnProp($,"encodeBasicAuthUsername")&&$.encodeBasicAuthUsername===!0;try{p.set("Authorization","Basic "+btoa((L?ad(W):W)+":"+(F?ad(F):"")))}catch(V){throw ee.from(V,ee.ERR_BAD_OPTION_VALUE,a)}}if(y.isFormData(l)){const W=y.getSafeProp(l,"getHeaders");jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv||y.isReactNative(l)?p.setContentType(void 0):y.isFunction(W)&&G1(p,W.call(l),o("formDataHeaderPolicy"))}if(jt.hasStandardBrowserEnv&&(y.isFunction(c)&&(c=c(r)),c===!0||c==null&&k1(r.url))){const F=u&&h&&i(h);F&&p.set(u,F)}return r}const M1=typeof XMLHttpRequest<"u",K1=M1&&function(a){return new Promise(function(r,o){let l;try{const ae=jt.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;l=ae&&y.isFunction(ae.get)}catch{}let c;const u=lu(a,l?ae=>(c=ae,null):void 0);let h=u.data;const p=Ct.from(u.headers).normalize();let{responseType:x,onUploadProgress:v,onDownloadProgress:b}=u,O,W,F,$,L,V,D;function N(){clearTimeout(W);try{L&&L()}catch(ae){setTimeout(()=>{throw ae})}try{V&&V()}catch(ae){setTimeout(()=>{throw ae})}C&&($&&C.removeEventListener("progress",$),C.upload&&(F&&C.upload.removeEventListener("progress",F),L&&C.upload.removeEventListener("loadend",L))),u.cancelToken&&u.cancelToken.unsubscribe(O),u.signal&&u.signal.removeEventListener("abort",O)}let C=new XMLHttpRequest;C.open(u.method.toUpperCase(),u.url,!0),C.timeout=u.timeout;function ne(ae){if(!C)return;if(C.status===0&&(Ws(au(u.url))||Ws(jt.origin))!=="file"&&!(C.responseURL&&C.responseURL.startsWith("file:"))){o(new ee("Request aborted",ee.ECONNABORTED,a,C)),N(),C=null;return}try{ae?D&&D(ae):V&&V()}catch(J){setTimeout(()=>{throw J})}if(!C)return;const fe=Ct.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),A={data:!x||x==="text"||x==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:fe,config:a,request:C};ru(function(se){r(se),N()},function(se){o(se),N()},A),C=null}if("onloadend"in C?C.onloadend=ne:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.startsWith("file:"))||setTimeout(ne)},C.onabort=function(){C&&(o(new ee("Request aborted",ee.ECONNABORTED,a,C)),N(),C=null)},C.onerror=function(fe){const ye=fe&&fe.message?fe.message:"Network Error",A=new ee(ye,ee.ERR_NETWORK,a,C);A.event=fe||null,o(A),N(),C=null},C.ontimeout=function(){if(!C)return;let fe=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const ye=u.transitional||oo;u.timeoutErrorMessage&&(fe=u.timeoutErrorMessage),o(new ee(fe,ye.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,a,C)),N(),C=null},h===void 0&&p.setContentType(null),y.isUndefined(u.withCredentials)||(C.withCredentials=!!u.withCredentials),x&&x!=="json"&&(C.responseType=u.responseType),b&&([$,V,D]=hi(b,!0),C.addEventListener("progress",$)),v&&C.upload&&([F,L]=hi(v),C.upload.addEventListener("progress",F),C.upload.addEventListener("loadend",L)),u.cancelToken||u.signal){if(O=ae=>{if(!C)return;o(!ae||ae.type?new ga(null,a,C):ae);const fe=C;N(),C=null,fe.abort()},u.cancelToken&&u.cancelToken.subscribe(O),!C)return;u.signal&&(u.signal.aborted?O():u.signal.addEventListener("abort",O))}if(!C)return;const re=Ws(u.url);if(re&&!jt.protocols.includes(re)){o(new ee("Unsupported protocol "+re+":",ee.ERR_BAD_REQUEST,a)),N();return}const be=()=>{C&&("setRequestHeader"in C&&y.forEach(Yd(p),function(fe,ye){C.setRequestHeader(ye,fe)}),C.send(h||null))};if(c){const ae=typeof performance<"u"&&y.isFunction(performance.now)?()=>performance.now():Date.now,fe=C.timeout>0?ae()+Number(C.timeout):void 0,ye=()=>{if(!C)return;const A=C;A.ontimeout(),A.abort()};if(fe!==void 0){const A=()=>{const J=fe-ae();J>0?W=setTimeout(A,Math.min(J,2147483647)):ye()};A()}iu.readAsync(c).then(A=>{if(C){if(fe!==void 0&&ae()>=fe){ye();return}if(A){const J=y.hasOwnProp(u,"xsrfHeaderName")&&u.xsrfHeaderName;p.set(J,A)}be()}}).catch(A=>{C&&(o(ee.from(A,null,a,C)),N(),C=null)})}else be()})},J1=(a,i)=>{if(a=a?a.filter(Boolean):[],!i&&!a.length)return;const r=new AbortController;let o=!1;const l=function(p){if(!o){o=!0,u();const x=p instanceof Error?p:this.reason;r.abort(x instanceof ee?x:new ga(x instanceof Error?x.message:x))}};let c=i&&setTimeout(()=>{c=null,l(new ee(`timeout of ${i}ms exceeded`,ee.ETIMEDOUT))},i);const u=()=>{a&&(c&&clearTimeout(c),c=null,a.forEach(p=>{const x=y.getSafeProp(p,"unsubscribe");y.isFunction(x)?x.call(p,l):p.removeEventListener("abort",l)}),a=null)};a.forEach(p=>{if(!o){if(p.aborted){l.call(p);return}p.addEventListener("abort",l,{once:!0})}});const{signal:h}=r;return h.unsubscribe=()=>y.asap(u),h},X1=function*(a,i){let r=a.byteLength;if(r<i){yield a;return}let o=0,l;for(;o<r;)l=o+i,yield a.slice(o,l),o=l},Z1=async function*(a,i){for await(const r of Q1(a))yield*X1(r,i)},Q1=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const i=a.getReader();try{for(;;){const{done:r,value:o}=await i.read();if(r)break;yield o}}finally{await i.cancel()}},id=(a,i,r,o)=>{const l=Z1(a,i);let c=0,u,h=p=>{u||(u=!0,o&&o(p))};return new ReadableStream({async pull(p){try{const{done:x,value:v}=await l.next();if(x){h(),p.close();return}let b=v.byteLength;if(r){let O=c+=b;r(O)}p.enqueue(new Uint8Array(v))}catch(x){throw h(x),x}},cancel(p){return h(p),l.return()}},{highWaterMark:2})},Xn=`\r
`,sd=a=>String(a).replace(/\r\n|\r|\n/g,Xn),od=a=>String(a).replace(/[\r\n"]/g,i=>i==="\r"?"%0D":i===`
`?"%0A":"%22"),oa=(a,i)=>{let r=0;for(let o=0;o<a.length;o++){const l=a.charCodeAt(o);i&&(l===13||l===10)?(l===13&&a.charCodeAt(o+1)===10&&o++,r+=2):l<128?r++:l<2048?r+=2:l>=55296&&l<=56319&&a.charCodeAt(o+1)>=56320&&a.charCodeAt(o+1)<=57343?(r+=4,o++):r+=3}return r};class di extends TypeError{constructor(i,r){super(i),this.name="FormDataError",this.reason=r}}function ey(a,i,r,o,l){if(!y.isFunction(i))throw new di("Blob is not supported","blob");if(!y.isString(l)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(l)||/ $/.test(l))throw new di("Invalid multipart boundary","boundary");const c="--"+l+"--"+Xn;let u=c.length;const h=[],p=v=>{if(u+v>r)throw o()};p(0);for(const[v,b]of a){const O=y.isString(b),W=O?oa(b,!0):b.size;if(!Number.isFinite(W)||W<0)throw new di("Unsupported FormData part size","part");p(W+oa(v,!0)+(!O&&b.name?oa(b.name,!1):0)+(!O&&b.type?oa(b.type,!1):0));let F="--"+l+Xn+'Content-Disposition: form-data; name="'+od(sd(v))+'"';O||(F+='; filename="'+od(y.isString(b.name)?b.name:"blob")+'"'+Xn+"Content-Type: "+String(b.type||"application/octet-stream").replace(/[\r\n]/g,"")),F+=Xn+Xn;const $=oa(F,!1)+W+Xn.length;p($),u+=$,h.push({header:F,value:b,isString:O})}const x=[];for(const v of h)x.push(v.header,v.isString?sd(v.value):v.value,Xn);return x.push(c),new i(x,{type:"multipart/form-data; boundary="+l})}function ty(a,i,r,o,l){if(!y.isFunction(i))throw new ee("Blob is not supported",ee.ERR_NOT_SUPPORT);if(l===void 0)if(y.isFunction(jt.generateString))l="axios-"+jt.generateString(36,"0123456789abcdef");else{const c=y.global.crypto;if(!c||!y.isFunction(c.getRandomValues))throw new ee("Random byte generation is not supported",ee.ERR_NOT_SUPPORT);const u=new Uint8Array(18);c.getRandomValues(u),l="axios-"+Array.from(u,h=>("0"+h.toString(16)).slice(-2)).join("")}try{return ey(a,i,r,o,l)}catch(c){if(c instanceof di){const u=c.reason==="boundary"?ee.ERR_BAD_OPTION_VALUE:ee.ERR_BAD_REQUEST;throw new ee(c.message,u)}throw c}}const ld=a=>a>=48&&a<=57||a>=65&&a<=70||a>=97&&a<=102,cu=(a,i,r)=>i+2<r&&ld(a.charCodeAt(i+1))&&ld(a.charCodeAt(i+2)),cd=a=>a<=57?a-48:(a&223)-55,ny=a=>a>=65&&a<=90||a>=97&&a<=122||a>=48&&a<=57||a===43||a===47||a===45||a===95,ry=a=>a===9||a===10||a===12||a===13||a===32,ay=a=>{const i=Math.floor(a/4),r=a%4;return i*3+(r===2?1:r===3?2:0)},iy=a=>{const i=a.length;let r=0;return i>0&&a.charCodeAt(i-1)===61&&(r++,i>1&&a.charCodeAt(i-2)===61&&r++),Math.floor((i-r)*3/4)},sy=a=>{const i=a.length;let r=0,o=0,l=!1;for(let c=0;c<i;c++){let u=a.charCodeAt(c);if(u===37&&cu(a,c,i)&&(u=cd(a.charCodeAt(c+1))*16+cd(a.charCodeAt(c+2)),c+=2),!ry(u)){if(u===61){o++;continue}if(!ny(u)||o>0){l=!0;continue}r++}}return l||o>2||o>0&&(r+o)%4!==0||r%4===1?iy(a):ay(r)},oy=(a,i,r)=>{if(!a||typeof a!="string"||!/^data:/i.test(a))return 0;const o=a.indexOf(",");if(o<0)return 0;const l=a.slice(5,o),c=a.slice(o+1);if(r.test(l))return i(c);let h=0;for(let p=0,x=c.length;p<x;p++){const v=c.charCodeAt(p);if(v===37&&cu(c,p,x))h+=1,p+=2;else if(v<128)h+=1;else if(v<2048)h+=2;else if(v>=55296&&v<=56319&&p+1<x){const b=c.charCodeAt(p+1);b>=56320&&b<=57343?(h+=4,p++):h+=3}else h+=3}return h};function ly(a){const i=typeof a=="string"?a.indexOf("#"):-1;return oy(i===-1?a:a.slice(0,i),sy,/; *base64[\t\n\f\r ]*$/i)}const co="1.21.0",dd=64*1024,ud={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:si}=y,cy=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(i,r)=>String.fromCharCode(parseInt(r,16))),fd=a=>{if(!y.isString(a))return a;try{return decodeURIComponent(a)}catch{return a}},oi=(a,...i)=>{try{return!!a(...i)}catch{return!1}},dy=a=>{const i=a.indexOf("://");let r=a;return i!==-1&&(r=r.slice(i+3)),r.includes("@")||r.includes(":")},uy=a=>{const i=y.global!==void 0&&y.global!==null?y.global:globalThis,{ReadableStream:r,TextEncoder:o}=i;a=y.merge.call({skipUndefined:!0},{Request:i.Request,Response:i.Response,Blob:i.Blob},a);const l=y.hasOwnProp(a,"fetch")?a.fetch:void 0,{Request:c,Response:u,Blob:h}=a,p=l?si(l):typeof fetch=="function",x=si(c),v=si(u);if(!p)return!1;const b=p&&si(r),O=p&&(typeof o=="function"?(N=>C=>N.encode(C))(new o):async N=>new Uint8Array(await new c(N).arrayBuffer())),W=x&&b&&oi(()=>{let N=!1;const C=new c(jt.origin,{body:new r,method:"POST",get duplex(){return N=!0,"half"}}),ne=C.headers.has("Content-Type");return C.body!=null&&C.body.cancel(),N&&!ne}),F=v&&b&&oi(()=>y.isReadableStream(new u("").body)),$=Object.assign(Object.create(null),ud);x&&!oi(()=>new c(jt.origin,$))&&(delete $.cache,oi(()=>new c(jt.origin,$))||($.cache=ud.cache));const L={stream:F&&(N=>N.body)};p&&["text","arrayBuffer","blob","formData","stream"].forEach(N=>{!L[N]&&(L[N]=(C,ne)=>{let re=C&&C[N];if(re)return re.call(C);throw new ee(`Response type '${N}' is not supported`,ee.ERR_NOT_SUPPORT,ne)})});const V=async N=>{if(N==null)return 0;if(y.isBlob(N))return N.size;if(y.isArrayBufferView(N)||y.isArrayBuffer(N))return N.byteLength;if(y.isURLSearchParams(N)&&(N=N+""),y.isString(N))return(await O(N)).byteLength},D=async(N,C)=>{const ne=y.toFiniteNumber(N.getContentLength());return ne??V(C)};return async N=>{let{url:C,method:ne,data:re,signal:be,cancelToken:ae,timeout:fe,onDownloadProgress:ye,onUploadProgress:A,responseType:J,headers:se,withCredentials:T="same-origin",fetchOptions:X,maxContentLength:oe,maxBodyLength:Oe,maxRedirects:ke}=lu(N);const me=y.isNumber(oe)&&oe>-1,U=y.isNumber(Oe)&&Oe>-1,xe=q=>y.hasOwnProp(N,q)?N[q]:void 0;let de=l||fetch;J=J?(J+"").toLowerCase():"text";let H=J1([be,ae&&ae.toAbortSignal()],fe),Q=null;const le=H&&H.unsubscribe&&(()=>{H.unsubscribe()});let ue,Ce=null,Ve=null;const ie=()=>new ee("Request body larger than maxBodyLength limit",ee.ERR_BAD_REQUEST,N,Q);try{let q;const ve=xe("auth");if(ve){const je=y.getSafeProp(ve,"username")||"",at=y.getSafeProp(ve,"password")||"";q={username:je,password:at}}let Ee;if(dy(C)){if(Ee=new URL(C,jt.origin),!q&&(Ee.username||Ee.password)){const je=fd(Ee.username),at=fd(Ee.password);q={username:je,password:at}}(Ee.username||Ee.password)&&(Ee.username="",Ee.password="",C=Ee.href)}if(q&&(se.delete("authorization"),se.set("Authorization","Basic "+btoa(cy((q.username||"")+":"+(q.password||""))))),me&&Ee&&Ee.protocol==="data:"&&ly(Ee.href)>oe)throw new ee("maxContentLength size of "+oe+" exceeded",ee.ERR_BAD_RESPONSE,N,Q);const yt=y.isSpecCompliantForm(re)&&Ct.from(xe("headers")).getContentType();let We;if(y.isString(yt)&&/^multipart\/form-data(?:\s*;|$)/i.test(yt.trim())){const je=Ct.parseParameters(yt);y.hasOwnProp(je,"boundary")&&(We=je.boundary)}if(y.isSpecCompliantForm(re)&&ne!=="get"&&ne!=="head"&&(U||A&&W||We!==void 0)&&(re=ty(re,h,U?Oe:1/0,ie,We),se.setContentType(We===void 0?re.type:yt),ue=re.size),U&&ne!=="get"&&ne!=="head"){const je=await V(re);if(typeof je=="number"&&isFinite(je)&&(ue=je,je>Oe))throw ie()}const Ze=U&&(y.isReadableStream(re)||y.isStream(re)),qe=(je,at,vt)=>id(je,dd,ct=>{if(U&&ct>Oe)throw Ce=ie();at&&at(ct)},vt);if(W&&ne!=="get"&&ne!=="head"&&(A||Ze)){if(ue=ue??await D(se,re),ue!==0||Ze){let je=new c(C,{method:"POST",body:re,duplex:"half"}),at;if(y.isFormData(re)&&(at=je.headers.get("content-type"))&&se.setContentType(at),je.body){const[vt,ct]=A&&Qc(ue,hi(ed(A)))||[];re=qe(je.body,vt,ct)}}}else if(Ze&&!x&&b&&ne!=="get"&&ne!=="head")re=qe(re);else if(Ze&&x&&!W&&ne!=="get"&&ne!=="head")throw new ee("Stream request bodies are not supported by the current fetch implementation",ee.ERR_NOT_SUPPORT,N,Q);y.isString(T)||(T=T?"include":"omit");const Ht=x&&"credentials"in c.prototype;if(y.isFormData(re)){const je=se.getContentType();je&&/^multipart\/form-data/i.test(je)&&!/boundary=/i.test(je)&&se.delete("content-type")}se.set("User-Agent","axios/"+co,!1);const Ie=X==null?X:Object.assign(Object.create(null),X);Ie&&(delete Ie.body,delete Ie.headers,delete Ie.method,delete Ie.signal,delete Ie.duplex,delete Ie.credentials);const St=Object.assign(Object.create(null),Ie,{signal:H,method:ne.toUpperCase(),headers:Yd(se.normalize()),body:re,duplex:"half",credentials:Ht?T:void 0});x&&(y.forEach($,(je,at)=>{St[at]===void 0&&(St[at]=je)}),St.signal===void 0&&(St.signal=null),St.body===void 0&&(St.body=null)),ke===0&&(St.redirect="manual",Ie&&(Ie.redirect="manual")),Q=x&&new c(C,St);let Me=await(x?de(Q,Ie):de(C,St));const lt=Ct.from(Me.headers);if(me){const je=y.toFiniteNumber(lt.getContentLength());if(je!=null&&je>oe)throw new ee("maxContentLength size of "+oe+" exceeded",ee.ERR_BAD_RESPONSE,N,Q)}const tt=F&&(J==="stream"||J==="response");if(F&&Me.body&&(ye||me||tt&&le)){const je={};["status","statusText","headers"].forEach(wt=>{je[wt]=Me[wt]});const at=y.toFiniteNumber(lt.getContentLength()),[vt,ct]=ye&&Qc(at,hi(ed(ye),!0))||[];let ht=0;const Ot=wt=>{if(me&&(ht=wt,ht>oe))throw Ve=new ee("maxContentLength size of "+oe+" exceeded",ee.ERR_BAD_RESPONSE,N,Q);vt&&vt(wt)};Me=new u(id(Me.body,dd,Ot,()=>{ct&&ct(),le&&le()}),je)}J=J||"text";let nt=await L[y.findKey(L,J)||"text"](Me,N);if(me&&!F&&!tt){let je;if(nt!=null&&(typeof nt.byteLength=="number"?je=nt.byteLength:typeof nt.size=="number"?je=nt.size:typeof nt=="string"&&(je=typeof o=="function"?new o().encode(nt).byteLength:nt.length)),typeof je=="number"&&je>oe)throw new ee("maxContentLength size of "+oe+" exceeded",ee.ERR_BAD_RESPONSE,N,Q)}return!tt&&le&&le(),await new Promise((je,at)=>{ru(je,at,{data:nt,headers:Ct.from(Me.headers),status:Me.status,statusText:Me.statusText,config:N,request:Q})})}catch(q){if(le&&le(),H&&H.aborted&&H.reason instanceof ee){const ve=H.reason;throw ve.config=N,Q&&(ve.request=Q),q!==ve&&Object.defineProperty(ve,"cause",{__proto__:null,value:q,writable:!0,enumerable:!1,configurable:!0}),ve}if(Ce)throw Q&&!Ce.request&&(Ce.request=Q),Ce;if(Ve)throw Ve;if(q instanceof ee)throw Q&&!q.request&&(q.request=Q),q;if(q&&q.name==="TypeError"&&/Load failed|fetch/i.test(q.message)){const ve=new ee("Network Error",ee.ERR_NETWORK,N,Q,q&&q.response);throw Object.defineProperty(ve,"cause",{__proto__:null,value:q.cause||q,writable:!0,enumerable:!1,configurable:!0}),ve}throw ee.from(q,q&&q.code,N,Q,q&&q.response)}}},fy=new Map,du=a=>{const i=Object.create(null),r=a&&y.hasOwnProp(a,"env")&&a.env;["fetch","Request","Response","Blob"].forEach(W=>{r&&y.hasOwnProp(r,W)&&(i[W]=r[W])});const{fetch:o,Request:l,Response:c,Blob:u}=i,h=[l,c,o,u];let p=h.length,x=p,v,b,O=fy;for(;x--;)v=h[x],b=O.get(v),b===void 0&&O.set(v,b=x?new Map:uy(i)),O=b;return b};du();const uo={http:h1,xhr:K1,fetch:{get:du}};y.forEach(uo,(a,i)=>{if(a){try{Object.defineProperty(a,"name",{__proto__:null,value:i})}catch{}Object.defineProperty(a,"adapterName",{__proto__:null,value:i})}});const pd=a=>`- ${a}`,py=a=>y.isFunction(a)||a===null||a===!1;function hy(a,i){a=y.isArray(a)?a:[a];const{length:r}=a;let o,l;const c={};for(let u=0;u<r;u++){o=a[u];let h;if(l=o,!py(o)&&(l=uo[(h=String(o)).toLowerCase()],l===void 0))throw new ee(`Unknown adapter '${h}'`);if(l&&(y.isFunction(l)||(l=l.get(i))))break;c[h||"#"+u]=l}if(!l){const u=Object.entries(c).map(([p,x])=>`adapter ${p} `+(x===!1?"is not supported by the environment":"is not available in the build"));let h=r?u.length>1?`since :
`+u.map(pd).join(`
`):" "+pd(u[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+h,ee.ERR_NOT_SUPPORT)}return l}const uu={getAdapter:hy,adapters:uo};function qs(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new ga(null,a)}function hd(a){return Math.max(0,Date.now()-a)}function Ys(a){const i=y.toSafeFlatObject(a);qs(i),i.headers=Ct.from(y.getSafeProp(i,"headers")),i.data=zs.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1);const r=uu.getAdapter(i.adapter||ha.adapter,i),o=Date.now();return r(i).then(function(c){qs(i),c.duration=hd(o),i.response=c;try{c.data=zs.call(i,i.transformResponse,c)}finally{delete i.response}return c.headers=Ct.from(c.headers),c},function(c){if(!nu(c)&&(qs(i),c&&c.response)){c.response.duration=hd(o),i.response=c.response;try{c.response.data=zs.call(i,i.transformResponse,c.response)}finally{delete i.response}c.response.headers=Ct.from(c.response.headers)}return Promise.reject(c)})}const ji={};["object","boolean","number","function","string","symbol"].forEach((a,i)=>{ji[a]=function(o){return typeof o===a||"a"+(i<1?"n ":" ")+a}});const gd={};ji.transitional=function(i,r,o){function l(c,u){return"[Axios v"+co+"] Transitional option '"+c+"'"+u+(o?". "+o:"")}return(c,u,h)=>{if(i===!1)throw new ee(l(u," has been removed"+(r?" in "+r:"")),ee.ERR_DEPRECATED);return r&&!gd[u]&&(gd[u]=!0,console.warn(l(u," has been deprecated since v"+r+" and will be removed in the near future"))),i?i(c,u,h):!0}};ji.spelling=function(i){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${i}`),!0)};function gy(a,i,r){if(typeof a!="object"||a===null)throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const o=Object.keys(a);let l=o.length;for(;l-- >0;){const c=o[l],u=Object.prototype.hasOwnProperty.call(i,c)?i[c]:void 0;if(u){const h=a[c],p=h===void 0||u(h,c,a);if(p!==!0)throw new ee("option "+c+" must be "+p,ee.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ee("Unknown option "+c,ee.ERR_BAD_OPTION)}}const ui={assertOptions:gy,validators:ji},At=ui.validators,Gs=a=>{if(a==null||y.isPlainObject(a)||a instanceof Ct)return!0;try{return y.isObject(a)&&y.getSafeProp(a,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(i=>y.isFunction(y.getSafeProp(a,i)))}catch{return!1}};class yr{constructor(i){this.defaults=i||{},this.interceptors={request:new Jc,response:new Jc}}async request(i,r){try{return await this._request(i,r)}catch(o){if(o instanceof Error)try{let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const c=l.stack;let u="";if(typeof c=="string"){const h=c.indexOf(`
`);u=h===-1?"":c.slice(h+1)}if(!o.stack)o.stack=u;else if(u){const h=u.indexOf(`
`),p=h===-1?-1:u.indexOf(`
`,h+1),x=p===-1?u:u.slice(p+1),v=String(o.stack),b=f1(o,v),O=b===-1?v:v.slice(0,b),W=b===-1?"":v.slice(b);O.endsWith(x)||(o.stack=O+`
`+u+W)}}catch{}throw o}}_request(i,r){typeof i=="string"?(r=r||{},r.url=i):r=i||{},r=jr(this.defaults,r);const{transitional:o,paramsSerializer:l,headers:c}=r;o!==void 0&&ui.assertOptions(o,{silentJSONParsing:At.transitional(At.boolean),forcedJSONParsing:At.transitional(At.boolean),clarifyTimeoutError:At.transitional(At.boolean),legacyInterceptorReqResOrdering:At.transitional(At.boolean),advertiseZstdAcceptEncoding:At.transitional(At.boolean),validateStatusUndefinedResolves:At.transitional(At.boolean),encodeBasicAuthUsername:At.transitional(At.boolean)},!1),l!=null&&(y.isFunction(l)?r.paramsSerializer={serialize:l}:ui.assertOptions(l,{encode:At.function,serialize:At.function},!0)),r.allowAbsoluteUrls!==void 0||(y.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ui.assertOptions(r,{baseUrl:At.spelling("baseURL"),withXsrfToken:At.spelling("withXSRFToken")},!0),r.method=(y.getSafeProp(r,"method")||y.getSafeProp(this.defaults,"method")||"get").toLowerCase();const u=y.getSafeProp(c,"common"),h=y.getSafeProp(c,r.method),p=c&&y.merge(Gs(u)?u:void 0,Gs(h)?h:void 0);c&&y.forEach(tu.concat("common"),L=>{Gs(y.getSafeProp(c,L))&&delete c[L]}),r.headers=Ct.concat(p,c);const x=[];let v=!0;this.interceptors.request.forEach(function(V){if(typeof V.runWhen=="function"&&V.runWhen(r)===!1)return;v=v&&V.synchronous;const D=r.transitional||oo;D&&D.legacyInterceptorReqResOrdering?x.unshift(V.fulfilled,V.rejected):x.push(V.fulfilled,V.rejected)});const b=[];this.interceptors.response.forEach(function(V){b.push(V.fulfilled,V.rejected)});let O,W=0,F;if(!v){const L=[Ys.bind(this),void 0];for(L.unshift(...x),L.push(...b),F=L.length,O=Promise.resolve(r);W<F;)O=O.then(L[W++],L[W++]);return O}F=x.length;let $=r;for(;W<F;){const L=x[W++],V=x[W++];try{$=L?L($):$}catch(D){if(!V){O=Promise.reject(D);break}try{const N=V.call(this,D);y.isThenable(N)&&(O=Promise.resolve(N).then(()=>Ys.call(this,$)))}catch(N){O=Promise.reject(N)}break}}if(!O)try{O=Ys.call(this,$)}catch(L){O=Promise.reject(L)}for(W=0,F=b.length;W<F;)O=O.then(b[W++],b[W++]);return O}getUri(i){i=jr(this.defaults,i);const r=su(i.baseURL,i.url,i.allowAbsoluteUrls,i);return Kd(r,i.params,i.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(i){yr.prototype[i]=async function(r,o){return this.request(jr(o||{},{method:i,url:r,data:o&&y.hasOwnProp(o,"data")?o.data:void 0}))}});y.forEach(["post","put","patch","query"],function(i){function r(o){return async function(c,u,h){return this.request(jr(h||{},{method:i,headers:o?{"Content-Type":"multipart/form-data"}:{},url:c,data:u}))}}yr.prototype[i]=r(),i!=="query"&&(yr.prototype[i+"Form"]=r(!0))});class fo{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(c){r=c});const o=this;this.promise.then(l=>{if(!o._listeners)return;let c=o._listeners.length;for(;c-- >0;)o._listeners[c](l);o._listeners=null}),this.promise.then=l=>{let c;const u=new Promise(h=>{o.subscribe(h),c=h}).then(l);return u.cancel=function(){o.unsubscribe(c)},u},i(function(c,u,h){o.reason||(o.reason=new ga(c,u,h),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const r=this._listeners.indexOf(i);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const i=new AbortController,r=o=>{i.abort(o)};return this.subscribe(r),i.signal.unsubscribe=()=>this.unsubscribe(r),i.signal}static source(){let i;return{token:new fo(function(l){i=l}),cancel:i}}}function my(a){return function(r){return a.apply(null,r)}}function xy(a){return y.isObject(a)&&a.isAxiosError===!0}const fi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(fi).forEach(([a,i])=>{fi[i]===void 0&&(fi[i]=a)});function fu(a){const i=new yr(a),r=Ld(yr.prototype.request,i);return y.extend(r,yr.prototype,i,{allOwnKeys:!0}),y.extend(r,i,null,{allOwnKeys:!0}),r.create=function(l){return fu(jr(a,l))},r}const Xe=fu(ha);Xe.Axios=yr;Xe.CanceledError=ga;Xe.CancelToken=fo;Xe.isCancel=nu;Xe.VERSION=co;Xe.toFormData=wi;Xe.AxiosError=ee;Xe.Cancel=Xe.CanceledError;Xe.all=function(i){return Promise.all(i)};Xe.spread=my;Xe.isAxiosError=xy;Xe.mergeConfig=jr;Xe.AxiosHeaders=Ct;Xe.formToJSON=a=>eu(y.isHTMLForm(a)?new FormData(a):a);Xe.getAdapter=uu.getAdapter;Xe.HttpStatusCode=fi;Xe.default=Xe;const mr="https://x-pense-app-production.up.railway.app",bt=Xe.create({baseURL:mr}),md={balance:`${mr}/balance`,transactions:`${mr}/transactions`,goals:`${mr}/goals`,budget:`${mr}/budgets`,investments:`${mr}/investments`},Ln=a=>`${mr}${a}`;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)({}).hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},da.apply(null,arguments)}var Zn;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Zn||(Zn={}));const xd="popstate";function by(a){a===void 0&&(a={});function i(l,c){let{pathname:u="/",search:h="",hash:p=""}=Sr(l.location.hash.substr(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),eo("",{pathname:u,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(l,c){let u=l.document.querySelector("base"),h="";if(u&&u.getAttribute("href")){let p=l.location.href,x=p.indexOf("#");h=x===-1?p:p.slice(0,x)}return h+"#"+(typeof c=="string"?c:gi(c))}function o(l,c){po(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return vy(i,r,o,a)}function pt(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function po(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function yy(){return Math.random().toString(36).substr(2,8)}function bd(a,i){return{usr:a.state,key:a.key,idx:i}}function eo(a,i,r,o){return r===void 0&&(r=null),da({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof i=="string"?Sr(i):i,{state:r,key:i&&i.key||o||yy()})}function gi(a){let{pathname:i="/",search:r="",hash:o=""}=a;return r&&r!=="?"&&(i+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function Sr(a){let i={};if(a){let r=a.indexOf("#");r>=0&&(i.hash=a.substr(r),a=a.substr(0,r));let o=a.indexOf("?");o>=0&&(i.search=a.substr(o),a=a.substr(0,o)),a&&(i.pathname=a)}return i}function vy(a,i,r,o){o===void 0&&(o={});let{window:l=document.defaultView,v5Compat:c=!1}=o,u=l.history,h=Zn.Pop,p=null,x=v();x==null&&(x=0,u.replaceState(da({},u.state,{idx:x}),""));function v(){return(u.state||{idx:null}).idx}function b(){h=Zn.Pop;let L=v(),V=L==null?null:L-x;x=L,p&&p({action:h,location:$.location,delta:V})}function O(L,V){h=Zn.Push;let D=eo($.location,L,V);r&&r(D,L),x=v()+1;let N=bd(D,x),C=$.createHref(D);try{u.pushState(N,"",C)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;l.location.assign(C)}c&&p&&p({action:h,location:$.location,delta:1})}function W(L,V){h=Zn.Replace;let D=eo($.location,L,V);r&&r(D,L),x=v();let N=bd(D,x),C=$.createHref(D);u.replaceState(N,"",C),c&&p&&p({action:h,location:$.location,delta:0})}function F(L){let V=l.location.origin!=="null"?l.location.origin:l.location.href,D=typeof L=="string"?L:gi(L);return D=D.replace(/ $/,"%20"),pt(V,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,V)}let $={get action(){return h},get location(){return a(l,u)},listen(L){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(xd,b),p=L,()=>{l.removeEventListener(xd,b),p=null}},createHref(L){return i(l,L)},createURL:F,encodeLocation(L){let V=F(L);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:O,replace:W,go(L){return u.go(L)}};return $}var yd;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(yd||(yd={}));function wy(a,i,r){return r===void 0&&(r="/"),jy(a,i,r,!1)}function jy(a,i,r,o){let l=typeof i=="string"?Sr(i):i,c=Ur(l.pathname||"/",r);if(c==null)return null;let u=pu(a);Sy(u);let h=null,p=ky(c);for(let x=0;h==null&&x<u.length;++x)h=Py(u[x],p,o);return h}function pu(a,i,r,o){i===void 0&&(i=[]),r===void 0&&(r=[]),o===void 0&&(o="");let l=(c,u,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:u,route:c};p.relativePath.startsWith("/")&&(pt(p.relativePath.startsWith(o),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(o.length));let x=Qn([o,p.relativePath]),v=r.concat(p);c.children&&c.children.length>0&&(pt(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),pu(c.children,i,v,x)),!(c.path==null&&!c.index)&&i.push({path:x,score:Ty(x,c.index),routesMeta:v})};return a.forEach((c,u)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,u);else for(let p of hu(c.path))l(c,u,p)}),i}function hu(a){let i=a.split("/");if(i.length===0)return[];let[r,...o]=i,l=r.endsWith("?"),c=r.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let u=hu(o.join("/")),h=[];return h.push(...u.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...u),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function Sy(a){a.sort((i,r)=>i.score!==r.score?r.score-i.score:Oy(i.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const _y=/^:[\w-]+$/,Ny=3,Cy=2,Ey=1,Ay=10,Ry=-2,vd=a=>a==="*";function Ty(a,i){let r=a.split("/"),o=r.length;return r.some(vd)&&(o+=Ry),i&&(o+=Cy),r.filter(l=>!vd(l)).reduce((l,c)=>l+(_y.test(c)?Ny:c===""?Ey:Ay),o)}function Oy(a,i){return a.length===i.length&&a.slice(0,-1).every((o,l)=>o===i[l])?a[a.length-1]-i[i.length-1]:0}function Py(a,i,r){let{routesMeta:o}=a,l={},c="/",u=[];for(let h=0;h<o.length;++h){let p=o[h],x=h===o.length-1,v=c==="/"?i:i.slice(c.length)||"/",b=mi({path:p.relativePath,caseSensitive:p.caseSensitive,end:x},v),O=p.route;if(!b&&x&&r&&!o[o.length-1].route.index&&(b=mi({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!b)return null;Object.assign(l,b.params),u.push({params:l,pathname:Qn([c,b.pathname]),pathnameBase:Ly(Qn([c,b.pathnameBase])),route:O}),b.pathnameBase!=="/"&&(c=Qn([c,b.pathnameBase]))}return u}function mi(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=$y(a.path,a.caseSensitive,a.end),l=i.match(r);if(!l)return null;let c=l[0],u=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:o.reduce((x,v,b)=>{let{paramName:O,isOptional:W}=v;if(O==="*"){let $=h[b]||"";u=c.slice(0,c.length-$.length).replace(/(.)\/+$/,"$1")}const F=h[b];return W&&!F?x[O]=void 0:x[O]=(F||"").replace(/%2F/g,"/"),x},{}),pathname:c,pathnameBase:u,pattern:a}}function $y(a,i,r){i===void 0&&(i=!1),r===void 0&&(r=!0),po(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let o=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,p)=>(o.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(o.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),o]}function ky(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return po(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),a}}function Ur(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}function Iy(a,i){i===void 0&&(i="/");let{pathname:r,search:o="",hash:l=""}=typeof a=="string"?Sr(a):a,c;return r?(r=gu(r),r.startsWith("/")?c=wd(r.substring(1),"/"):c=wd(r,i)):c=i,{pathname:c,search:Dy(o),hash:Uy(l)}}function wd(a,i){let r=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Vs(a,i,r,o){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fy(a){return a.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function ho(a,i){let r=Fy(a);return i?r.map((o,l)=>l===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function go(a,i,r,o){o===void 0&&(o=!1);let l;typeof a=="string"?l=Sr(a):(l=da({},a),pt(!l.pathname||!l.pathname.includes("?"),Vs("?","pathname","search",l)),pt(!l.pathname||!l.pathname.includes("#"),Vs("#","pathname","hash",l)),pt(!l.search||!l.search.includes("#"),Vs("#","search","hash",l)));let c=a===""||l.pathname==="",u=c?"/":l.pathname,h;if(u==null)h=r;else{let b=i.length-1;if(!o&&u.startsWith("..")){let O=u.split("/");for(;O[0]==="..";)O.shift(),b-=1;l.pathname=O.join("/")}h=b>=0?i[b]:"/"}let p=Iy(l,h),x=u&&u!=="/"&&u.endsWith("/"),v=(c||u===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(x||v)&&(p.pathname+="/"),p}const gu=a=>a.replace(/\/\/+/g,"/"),Qn=a=>gu(a.join("/")),Ly=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Dy=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Uy=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function By(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const mu=["post","put","patch","delete"];new Set(mu);const zy=["get",...mu];new Set(zy);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)({}).hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},ua.apply(null,arguments)}const Si=S.createContext(null),xu=S.createContext(null),Bn=S.createContext(null),_i=S.createContext(null),tr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),bu=S.createContext(null);function Wy(a,i){let{relative:r}=i===void 0?{}:i;Wr()||pt(!1);let{basename:o,navigator:l}=S.useContext(Bn),{hash:c,pathname:u,search:h}=Ni(a,{relative:r}),p=u;return o!=="/"&&(p=u==="/"?o:Qn([o,u])),l.createHref({pathname:p,search:h,hash:c})}function Wr(){return S.useContext(_i)!=null}function nr(){return Wr()||pt(!1),S.useContext(_i).location}function yu(a){S.useContext(Bn).static||S.useLayoutEffect(a)}function rr(){let{isDataRoute:a}=S.useContext(tr);return a?tv():Hy()}function Hy(){Wr()||pt(!1);let a=S.useContext(Si),{basename:i,future:r,navigator:o}=S.useContext(Bn),{matches:l}=S.useContext(tr),{pathname:c}=nr(),u=JSON.stringify(ho(l,r.v7_relativeSplatPath)),h=S.useRef(!1);return yu(()=>{h.current=!0}),S.useCallback(function(x,v){if(v===void 0&&(v={}),!h.current)return;if(typeof x=="number"){o.go(x);return}let b=go(x,JSON.parse(u),c,v.relative==="path");a==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:Qn([i,b.pathname])),(v.replace?o.replace:o.push)(b,v.state,v)},[i,o,u,c,a])}function Ni(a,i){let{relative:r}=i===void 0?{}:i,{future:o}=S.useContext(Bn),{matches:l}=S.useContext(tr),{pathname:c}=nr(),u=JSON.stringify(ho(l,o.v7_relativeSplatPath));return S.useMemo(()=>go(a,JSON.parse(u),c,r==="path"),[a,u,c,r])}function qy(a,i){return Yy(a,i)}function Yy(a,i,r,o){Wr()||pt(!1);let{navigator:l}=S.useContext(Bn),{matches:c}=S.useContext(tr),u=c[c.length-1],h=u?u.params:{};u&&u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let x=nr(),v;if(i){var b;let L=typeof i=="string"?Sr(i):i;p==="/"||(b=L.pathname)!=null&&b.startsWith(p)||pt(!1),v=L}else v=x;let O=v.pathname||"/",W=O;if(p!=="/"){let L=p.replace(/^\//,"").split("/");W="/"+O.replace(/^\//,"").split("/").slice(L.length).join("/")}let F=wy(a,{pathname:W}),$=Jy(F&&F.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:Qn([p,l.encodeLocation?l.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:Qn([p,l.encodeLocation?l.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),c,r,o);return i&&$?S.createElement(_i.Provider,{value:{location:ua({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Zn.Pop}},$):$}function Gy(){let a=ev(),i=By(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},i),r?S.createElement("pre",{style:l},r):null,null)}const Vy=S.createElement(Gy,null);class My extends S.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,r){return r.location!==i.location||r.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:r.error,location:r.location,revalidation:i.revalidation||r.revalidation}}componentDidCatch(i,r){console.error("React Router caught the following error during render",i,r)}render(){return this.state.error!==void 0?S.createElement(tr.Provider,{value:this.props.routeContext},S.createElement(bu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ky(a){let{routeContext:i,match:r,children:o}=a,l=S.useContext(Si);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(tr.Provider,{value:i},o)}function Jy(a,i,r,o){var l;if(i===void 0&&(i=[]),r===void 0&&(r=null),o===void 0&&(o=null),a==null){var c;if(!r)return null;if(r.errors)a=r.matches;else if((c=o)!=null&&c.v7_partialHydration&&i.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let u=a,h=(l=r)==null?void 0:l.errors;if(h!=null){let v=u.findIndex(b=>b.route.id&&(h==null?void 0:h[b.route.id])!==void 0);v>=0||pt(!1),u=u.slice(0,Math.min(u.length,v+1))}let p=!1,x=-1;if(r&&o&&o.v7_partialHydration)for(let v=0;v<u.length;v++){let b=u[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(x=v),b.route.id){let{loaderData:O,errors:W}=r,F=b.route.loader&&O[b.route.id]===void 0&&(!W||W[b.route.id]===void 0);if(b.route.lazy||F){p=!0,x>=0?u=u.slice(0,x+1):u=[u[0]];break}}}return u.reduceRight((v,b,O)=>{let W,F=!1,$=null,L=null;r&&(W=h&&b.route.id?h[b.route.id]:void 0,$=b.route.errorElement||Vy,p&&(x<0&&O===0?(F=!0,L=null):x===O&&(F=!0,L=b.route.hydrateFallbackElement||null)));let V=i.concat(u.slice(0,O+1)),D=()=>{let N;return W?N=$:F?N=L:b.route.Component?N=S.createElement(b.route.Component,null):b.route.element?N=b.route.element:N=v,S.createElement(Ky,{match:b,routeContext:{outlet:v,matches:V,isDataRoute:r!=null},children:N})};return r&&(b.route.ErrorBoundary||b.route.errorElement||O===0)?S.createElement(My,{location:r.location,revalidation:r.revalidation,component:$,error:W,children:D(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):D()},null)}var vu=function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a}(vu||{}),xi=function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a}(xi||{});function Xy(a){let i=S.useContext(Si);return i||pt(!1),i}function Zy(a){let i=S.useContext(xu);return i||pt(!1),i}function Qy(a){let i=S.useContext(tr);return i||pt(!1),i}function wu(a){let i=Qy(),r=i.matches[i.matches.length-1];return r.route.id||pt(!1),r.route.id}function ev(){var a;let i=S.useContext(bu),r=Zy(xi.UseRouteError),o=wu(xi.UseRouteError);return i!==void 0?i:(a=r.errors)==null?void 0:a[o]}function tv(){let{router:a}=Xy(vu.UseNavigateStable),i=wu(xi.UseNavigateStable),r=S.useRef(!1);return yu(()=>{r.current=!0}),S.useCallback(function(l,c){c===void 0&&(c={}),r.current&&(typeof l=="number"?a.navigate(l):a.navigate(l,ua({fromRouteId:i},c)))},[a,i])}function nv(a,i){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function rv(a){let{to:i,replace:r,state:o,relative:l}=a;Wr()||pt(!1);let{future:c,static:u}=S.useContext(Bn),{matches:h}=S.useContext(tr),{pathname:p}=nr(),x=rr(),v=go(i,ho(h,c.v7_relativeSplatPath),p,l==="path"),b=JSON.stringify(v);return S.useEffect(()=>x(JSON.parse(b),{replace:r,state:o,relative:l}),[x,b,l,r,o]),null}function mn(a){pt(!1)}function av(a){let{basename:i="/",children:r=null,location:o,navigationType:l=Zn.Pop,navigator:c,static:u=!1,future:h}=a;Wr()&&pt(!1);let p=i.replace(/^\/*/,"/"),x=S.useMemo(()=>({basename:p,navigator:c,static:u,future:ua({v7_relativeSplatPath:!1},h)}),[p,h,c,u]);typeof o=="string"&&(o=Sr(o));let{pathname:v="/",search:b="",hash:O="",state:W=null,key:F="default"}=o,$=S.useMemo(()=>{let L=Ur(v,p);return L==null?null:{location:{pathname:L,search:b,hash:O,state:W,key:F},navigationType:l}},[p,v,b,O,W,F,l]);return $==null?null:S.createElement(Bn.Provider,{value:x},S.createElement(_i.Provider,{children:r,value:$}))}function jd(a){let{children:i,location:r}=a;return qy(to(i),r)}new Promise(()=>{});function to(a,i){i===void 0&&(i=[]);let r=[];return S.Children.forEach(a,(o,l)=>{if(!S.isValidElement(o))return;let c=[...i,l];if(o.type===S.Fragment){r.push.apply(r,to(o.props.children,c));return}o.type!==mn&&pt(!1),!o.props.index||!o.props.children||pt(!1);let u={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=to(o.props.children,c)),r.push(u)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)({}).hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},bi.apply(null,arguments)}function ju(a,i){if(a==null)return{};var r={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)!==-1)continue;r[o]=a[o]}return r}function iv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function sv(a,i){return a.button===0&&(!i||i==="_self")&&!iv(a)}const ov=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],cv="6";try{window.__reactRouterVersion=cv}catch{}const dv=S.createContext({isTransitioning:!1}),uv="startTransition",Sd=Lx[uv];function fv(a){let{basename:i,children:r,future:o,window:l}=a,c=S.useRef();c.current==null&&(c.current=by({window:l,v5Compat:!0}));let u=c.current,[h,p]=S.useState({action:u.action,location:u.location}),{v7_startTransition:x}=o||{},v=S.useCallback(b=>{x&&Sd?Sd(()=>p(b)):p(b)},[p,x]);return S.useLayoutEffect(()=>u.listen(v),[u,v]),S.useEffect(()=>nv(o),[o]),S.createElement(av,{basename:i,children:r,location:h.location,navigationType:h.action,navigator:u,future:o})}const pv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gv=S.forwardRef(function(i,r){let{onClick:o,relative:l,reloadDocument:c,replace:u,state:h,target:p,to:x,preventScrollReset:v,viewTransition:b}=i,O=ju(i,ov),{basename:W}=S.useContext(Bn),F,$=!1;if(typeof x=="string"&&hv.test(x)&&(F=x,pv))try{let N=new URL(window.location.href),C=x.startsWith("//")?new URL(N.protocol+x):new URL(x),ne=Ur(C.pathname,W);C.origin===N.origin&&ne!=null?x=ne+C.search+C.hash:$=!0}catch{}let L=Wy(x,{relative:l}),V=xv(x,{replace:u,state:h,target:p,preventScrollReset:v,relative:l,viewTransition:b});function D(N){o&&o(N),N.defaultPrevented||V(N)}return S.createElement("a",bi({},O,{href:F||L,onClick:$||c?o:D,ref:r,target:p}))}),Fn=S.forwardRef(function(i,r){let{"aria-current":o="page",caseSensitive:l=!1,className:c="",end:u=!1,style:h,to:p,viewTransition:x,children:v}=i,b=ju(i,lv),O=Ni(p,{relative:b.relative}),W=nr(),F=S.useContext(xu),{navigator:$,basename:L}=S.useContext(Bn),V=F!=null&&bv(O)&&x===!0,D=$.encodeLocation?$.encodeLocation(O).pathname:O.pathname,N=W.pathname,C=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;l||(N=N.toLowerCase(),C=C?C.toLowerCase():null,D=D.toLowerCase()),C&&L&&(C=Ur(C,L)||C);const ne=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let re=N===D||!u&&N.startsWith(D)&&N.charAt(ne)==="/",be=C!=null&&(C===D||!u&&C.startsWith(D)&&C.charAt(D.length)==="/"),ae={isActive:re,isPending:be,isTransitioning:V},fe=re?o:void 0,ye;typeof c=="function"?ye=c(ae):ye=[c,re?"active":null,be?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let A=typeof h=="function"?h(ae):h;return S.createElement(gv,bi({},b,{"aria-current":fe,className:ye,ref:r,style:A,to:p,viewTransition:x}),typeof v=="function"?v(ae):v)});var no;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(no||(no={}));var _d;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(_d||(_d={}));function mv(a){let i=S.useContext(Si);return i||pt(!1),i}function xv(a,i){let{target:r,replace:o,state:l,preventScrollReset:c,relative:u,viewTransition:h}=i===void 0?{}:i,p=rr(),x=nr(),v=Ni(a,{relative:u});return S.useCallback(b=>{if(sv(b,r)){b.preventDefault();let O=o!==void 0?o:gi(x)===gi(v);p(a,{replace:O,state:l,preventScrollReset:c,relative:u,viewTransition:h})}},[x,p,v,o,l,r,a,c,u,h])}function bv(a,i){i===void 0&&(i={});let r=S.useContext(dv);r==null&&pt(!1);let{basename:o}=mv(no.useViewTransitionState),l=Ni(a,{relative:i.relative});if(!r.isTransitioning)return!1;let c=Ur(r.currentLocation.pathname,o)||r.currentLocation.pathname,u=Ur(r.nextLocation.pathname,o)||r.nextLocation.pathname;return mi(l.pathname,u)!=null||mi(l.pathname,c)!=null}class yv{constructor(){this.categoryPatterns={"Food & Dining":["starbucks","mcdonalds","burger king","subway","chipotle","kfc","pizza hut","dominos","taco bell","wendys","restaurant","cafe","diner","bistro","grill","bar","pub","bakery","doordash","uber eats","grubhub","postmates","food","dining"],Transportation:["shell","exxon","chevron","bp","mobil","gas","fuel","station","uber","lyft","taxi","metro","bus","train","parking","toll","automotive","repair","mechanic","oil change"],Shopping:["amazon","walmart","target","costco","best buy","home depot","lowes","macys","nordstrom","tj maxx","marshall","store","shopping","retail","mall","outlet"],Groceries:["kroger","safeway","whole foods","trader joe","publix","aldi","wegmans","harris teeter","food lion","giant","stop shop","grocery","supermarket","market"],Entertainment:["netflix","spotify","apple music","disney","hulu","amazon prime","youtube","cinema","theater","movie","concert","game","steam","playstation","xbox","entertainment"],Utilities:["electric","power","water","gas company","internet","cable","phone","cell","verizon","att","tmobile","comcast","utility"],Healthcare:["pharmacy","cvs","walgreens","rite aid","hospital","clinic","doctor","dentist","medical","health","insurance"],Finance:["bank","atm","fee","interest","loan","credit","investment","transfer","payment","financial"],"Phone Service":["phone","cell","cellular","mobile","verizon","att","at&t","tmobile","t-mobile","sprint","boost","cricket","mint mobile","visible","metro pcs","tracfone","straight talk","ting","spectrum"]},this.userCorrections=this.loadUserCorrections()}categorizeTransaction(i,r=null){if(!i)return{category:"Other",confidence:0};const o=i.toLowerCase().trim(),l=this.checkUserCorrections(o);if(l)return{category:l,confidence:95};const c=this.findPatternMatch(o);return c||this.advancedCategorization(o,r)}checkUserCorrections(i){for(const r of this.userCorrections)if(i.includes(r.merchant.toLowerCase()))return r.category;return null}findPatternMatch(i){const r={};for(const[l,c]of Object.entries(this.categoryPatterns)){let u=0,h=0;for(const p of c)i.includes(p)&&(u+=p.length,h++);h>0&&(r[l]=u/c.length*100)}if(Object.keys(r).length===0)return null;const o=Object.keys(r).reduce((l,c)=>r[l]>r[c]?l:c);return{category:o,confidence:Math.min(Math.round(r[o]*2),90)}}advancedCategorization(i,r){if(r){const o=parseFloat(r);if(o<10&&this.containsWords(i,["coffee","snack","drink"]))return{category:"Food & Dining",confidence:70};if(o>500&&this.containsWords(i,["rent","mortgage","property"]))return{category:"Housing",confidence:75}}return this.containsWords(i,["purchase","buy","shop"])?{category:"Shopping",confidence:60}:this.containsWords(i,["payment","bill","invoice"])?{category:"Bills & Utilities",confidence:65}:{category:"Other",confidence:30}}containsWords(i,r){return r.some(o=>i.includes(o))}learnFromCorrection(i,r,o){const l=this.extractMerchantName(i),c={merchant:l,originalCategory:r,correctedCategory:o,timestamp:new Date().toISOString()};this.userCorrections.push(c),this.saveUserCorrections(),this.categoryPatterns[o].some(u=>l.toLowerCase().includes(u))||this.categoryPatterns[o].push(l.toLowerCase())}extractMerchantName(i){let r=i.replace(/^(purchase|payment|transfer)\s+/i,"").replace(/\s+(#\d+|store|inc|llc|corp).*$/i,"").trim();return r=r.split(/\s+#|\s+\d{3,}/)[0],r}loadUserCorrections(){try{const i=localStorage.getItem("ai_transaction_corrections");return i?JSON.parse(i):[]}catch(i){return console.error("Error loading user corrections:",i),[]}}saveUserCorrections(){try{localStorage.setItem("ai_transaction_corrections",JSON.stringify(this.userCorrections))}catch(i){console.error("Error saving user corrections:",i)}}getStats(){const i=this.userCorrections.length,r={};return this.userCorrections.forEach(o=>{r[o.correctedCategory]=(r[o.correctedCategory]||0)+1}),{totalCorrections:i,categoryDistribution:r,learningAccuracy:i>0?Math.min(85+i*2,95):65}}}const br=new yv,vv=["Food & Dining","Transportation","Shopping","Groceries","Entertainment","Utilities","Healthcare","Finance","Housing","Bills & Utilities","Education","Travel","Personal Care","Gifts & Donations","Other"];function wv({amount:a,setAmount:i,category:r,setCategory:o,date:l,setDate:c,description:u,setDescription:h,darkMode:p}){const x=rr(),[v,b]=S.useState(!1),[O,W]=S.useState(!1),[F,$]=S.useState({}),[L,V]=S.useState(!1),[D,N]=S.useState(null),[C,ne]=S.useState(!1),[re,be]=S.useState(!1);S.useEffect(()=>{if(u.trim().length>2){be(!0);const T=setTimeout(()=>{const X=br.categorizeTransaction(u,a);N(X),ne(X.confidence>60&&X.category!==r),be(!1)},500);return()=>clearTimeout(T)}else ne(!1),N(null),be(!1)},[u,a,r]);const ae=()=>{D&&(o(D.category),ne(!1),br.learnFromCorrection(u,a,D.category))},fe=()=>{ne(!1)},ye=T=>{const X=parseFloat(T.target.value);i(isNaN(X)?0:X),F.amount&&$(oe=>({...oe,amount:""}))},A=T=>{c(T.target.value),F.date&&$(X=>({...X,date:""}))},J=()=>{const T={};return r||(T.category="Please select a category"),u.trim()||(T.description="Description is required"),(!a||a<=0)&&(T.amount="Please enter a valid amount"),l||(T.date="Please select a date"),$(T),Object.keys(T).length===0},se=async T=>{if(T.preventDefault(),!J()){V(!0),setTimeout(()=>V(!1),500);return}b(!0),$({});const X={category:r,date:new Date(l).toISOString().split("T")[0],description:u,amount:a};try{const oe=await bt.post("/transactions",X);console.log("Transaction added:",oe.data),D&&D.category!==r&&D.confidence>50&&(br.learnFromCorrection(u,D.category,r),console.log(`AI learned: "${u}" should be categorized as "${r}" not "${D.category}"`)),W(!0),o(""),c(""),h(""),i(0),N(null),ne(!1),setTimeout(()=>{W(!1),x("/transactions")},2e3)}catch(oe){console.error("Error adding transaction:",oe),$({submit:"Failed to add transaction. Please try again."})}finally{b(!1)}};return n.jsxs("div",{className:"add-transactions-container",children:[n.jsx("style",{jsx:!0,children:`
                .add-transactions-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .form-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 20px;
                    border-radius: 15px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                }

                .form-header h5 {
                    font-size: 1.8rem;
                    margin: 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .form-container {
                    background: ${p?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: ${p?"2px solid #4a5568":"2px solid #e2e8f0"};
                    transition: all 0.3s ease;
                    ${L?"animation: shake 0.5s;":""}
                }

                .form-container:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }

                .form-group {
                    margin-bottom: 25px;
                    position: relative;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    color: ${p?"#e2e8f0":"#2d3748"};
                    transition: color 0.3s ease;
                }

                .form-control {
                    width: 100%;
                    padding: 15px;
                    border: 2px solid ${p?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${p?"#2d3748":"#ffffff"};
                    color: ${p?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                select.form-control {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    text-align: left;
                    text-align-last: left;
                    line-height: 1.5;
                    vertical-align: middle;
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${p?"%23ffffff":"%23000000"}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-position: right 15px center;
                    background-size: 18px;
                    padding-right: 50px !important;
                    padding-left: 15px !important;
                    padding-top: 0 !important;
                    padding-bottom: 0 !important;
                    height: 54px !important;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                }

                select.form-control option {
                    color: ${p?"#ffffff":"#000000"} !important;
                    background: ${p?"#2d3748":"#ffffff"} !important;
                    padding: 12px;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.5;
                }

                /* Style for placeholder option */
                select.form-control option[value=""] {
                    color: ${p?"#a0aec0":"#718096"} !important;
                    font-style: italic;
                }

                select.form-control::-ms-expand {
                    display: none;
                }

                .form-control:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: translateY(-2px);
                }

                /* Date input styling for dark mode */
                input[type="date"].form-control {
                    color-scheme: ${p?"dark":"light"};
                    position: relative;
                    cursor: pointer;
                }

                input[type="date"].form-control::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    ${p?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* For Firefox */
                input[type="date"].form-control::-moz-calendar-picker-indicator {
                    cursor: pointer;
                    ${p?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* Additional styling for better visibility in dark mode */
                ${p?`
                input[type="date"].form-control::-webkit-inner-spin-button,
                input[type="date"].form-control::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                
                input[type="date"].form-control::-webkit-datetime-edit {
                    color: #e2e8f0 !important;
                }
                
                input[type="date"].form-control::-webkit-datetime-edit-fields-wrapper {
                    background: transparent !important;
                }
                
                input[type="date"].form-control::-webkit-datetime-edit-text {
                    color: #e2e8f0 !important;
                }
                
                input[type="date"].form-control::-webkit-datetime-edit-year-field,
                input[type="date"].form-control::-webkit-datetime-edit-month-field,
                input[type="date"].form-control::-webkit-datetime-edit-day-field {
                    color: #e2e8f0 !important;
                }
                `:""}

                .form-control.error {
                    border-color: #e53e3e;
                    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
                }

                .error-message {
                    color: #e53e3e;
                    font-size: 0.875rem;
                    margin-top: 5px;
                    display: flex;
                    align-items: center;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .submit-button {
                    width: 100%;
                    padding: 18px;
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    position: relative;
                    overflow: hidden;
                }

                .submit-button:hover:not(:disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(56, 161, 105, 0.6);
                }

                .submit-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #ffffff;
                    border-radius: 50%;
                    border-top-color: transparent;
                    animation: spin 1s ease-in-out infinite;
                    margin-right: 10px;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .success-message {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 20px;
                    border-radius: 12px;
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    animation: slideDown 0.5s ease;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                }

                @keyframes slideDown {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .category-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 10px;
                    margin-top: 10px;
                }

                .amount-input-container {
                    position: relative;
                }

                .currency-symbol {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-weight: bold;
                    color: #667eea;
                    font-size: 1.2rem;
                }

                .amount-input {
                    padding-left: 40px !important;
                }

                /* AI Suggestion Styles */
                .ai-suggestion-banner {
                    margin-top: 10px;
                    border: 2px solid #4299e1;
                    border-radius: 12px;
                    background: ${p?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)"};
                    padding: 15px;
                    animation: slideIn 0.3s ease;
                    box-shadow: 0 4px 15px rgba(66, 153, 225, 0.3);
                }

                .ai-suggestion-content {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }

                .ai-icon {
                    font-size: 1.5rem;
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    flex-shrink: 0;
                }

                .ai-text {
                    flex-grow: 1;
                }

                .ai-main-text {
                    font-weight: 600;
                    color: ${p?"#e2e8f0":"#2d3748"};
                    margin-bottom: 4px;
                }

                .ai-confidence {
                    font-size: 0.85rem;
                    color: ${p?"#a0aec0":"#718096"};
                }

                .ai-actions {
                    display: flex;
                    gap: 8px;
                    flex-shrink: 0;
                }

                .btn-ai-accept,
                .btn-ai-dismiss {
                    padding: 6px 12px;
                    border: none;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .btn-ai-accept {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                }

                .btn-ai-accept:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.4);
                }

                .btn-ai-dismiss {
                    background: ${p?"#4a5568":"#e2e8f0"};
                    color: ${p?"#e2e8f0":"#4a5568"};
                }

                .btn-ai-dismiss:hover {
                    background: ${p?"#718096":"#cbd5e0"};
                }

                .ai-analyzing {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 8px;
                    padding: 8px 12px;
                    background: ${p?"#4a5568":"#f7fafc"};
                    border-radius: 8px;
                    font-size: 0.9rem;
                    color: ${p?"#a0aec0":"#718096"};
                }

                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid ${p?"#718096":"#cbd5e0"};
                    border-top: 2px solid #4299e1;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes slideIn {
                    from { transform: translateY(-10px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}),n.jsx("div",{className:"form-header",children:n.jsx("h5",{children:"💰 Set X-Penses"})}),O&&n.jsx("div",{className:"success-message",children:"✅ Transaction added successfully! Redirecting..."}),F.submit&&n.jsxs("div",{className:"error-message",style:{marginBottom:"20px",justifyContent:"center"},children:["❌ ",F.submit]}),n.jsx("div",{className:"form-container",children:n.jsxs("form",{onSubmit:se,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"category",children:"📂 Category"}),n.jsxs("select",{id:"category",name:"category",className:`form-control ${F.category?"error":""}`,value:r,style:{color:r===""?p?"#a0aec0":"#718096":p?"#ffffff":"#000000",backgroundColor:p?"#2d3748":"#ffffff",fontSize:"1rem",fontWeight:r===""?"400":"600",fontStyle:r===""?"italic":"normal"},onChange:T=>{const X=T.target.value;o(X),D&&X&&X!==D.category&&(br.learnFromCorrection(u,a,X),ne(!1)),F.category&&$(oe=>({...oe,category:""}))},children:[n.jsx("option",{value:"",children:"🎯 Select A Category"}),vv.map(T=>n.jsxs("option",{value:T,children:[T==="Food & Dining"&&"🍕",T==="Transportation"&&"🚗",T==="Shopping"&&"🛍️",T==="Groceries"&&"🛒",T==="Entertainment"&&"🎬",T==="Utilities"&&"⚡",T==="Healthcare"&&"�",T==="Finance"&&"💳",T==="Housing"&&"🏠",T==="Bills & Utilities"&&"📄",T==="Education"&&"📚",T==="Travel"&&"✈️",T==="Personal Care"&&"💄",T==="Gifts & Donations"&&"�",T==="Other"&&"❓"," "+T]},T))]}),F.category&&n.jsxs("div",{className:"error-message",children:["❌ ",F.category]}),C&&D&&n.jsx("div",{className:"ai-suggestion-banner",children:n.jsxs("div",{className:"ai-suggestion-content",children:[n.jsx("div",{className:"ai-icon",children:"🤖"}),n.jsxs("div",{className:"ai-text",children:[n.jsxs("div",{className:"ai-main-text",children:["AI suggests: ",n.jsx("strong",{children:D.category})]}),n.jsxs("div",{className:"ai-confidence",children:["Confidence: ",D.confidence,"%"]})]}),n.jsxs("div",{className:"ai-actions",children:[n.jsx("button",{type:"button",className:"btn-ai-accept",onClick:ae,children:"✅ Use This"}),n.jsx("button",{type:"button",className:"btn-ai-dismiss",onClick:fe,children:"❌ Dismiss"})]})]})}),re&&n.jsxs("div",{className:"ai-analyzing",children:[n.jsx("div",{className:"spinner"}),n.jsx("span",{children:"🤖 AI is analyzing..."})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"text",children:"📝 Description"}),n.jsx("input",{type:"text",className:`form-control ${F.description?"error":""}`,id:"text",name:"text",value:u,placeholder:"💭 Enter transaction description...",onChange:T=>{h(T.target.value),F.description&&$(X=>({...X,description:""}))}}),F.description&&n.jsxs("div",{className:"error-message",children:["❌ ",F.description]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"amount",children:"💵 Amount"}),n.jsxs("div",{className:"amount-input-container",children:[n.jsx("span",{className:"currency-symbol",children:"$"}),n.jsx("input",{type:"number",id:"amount",name:"amount",className:`form-control amount-input ${F.amount?"error":""}`,value:a,placeholder:"0.00",min:"0",step:"0.01",onChange:ye})]}),F.amount&&n.jsxs("div",{className:"error-message",children:["❌ ",F.amount]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"date",children:"📅 Date"}),n.jsx("input",{type:"date",id:"date",name:"date",className:`form-control ${F.date?"error":""}`,value:l?new Date(l).toISOString().split("T")[0]:"",onChange:A}),F.date&&n.jsxs("div",{className:"error-message",children:["❌ ",F.date]})]}),n.jsx("div",{children:n.jsx("button",{type:"submit",className:"submit-button",disabled:v,children:v?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"loading-spinner"}),"Adding Transaction..."]}):"✨ Add Transaction"})})]})})]})}class jv{constructor(){this.EMERGENCY_FUND_MONTHS=6,this.SAVINGS_RATE_TARGET=.2,this.LIQUID_ASSETS_MIN=.15}calculateFinancialMetrics(i,r=0,o=0){const l=this.getTotalCash(i),c=this.getTotalBankBalance(i),u=this.getTotalSavings(i),h=l+c+u;return{totalCash:l,totalBankBalance:c,totalSavings:u,totalAssets:h,liquidityRatio:this.calculateLiquidityRatio(l,c,h),liquidAssets:l+c,emergencyFundStatus:this.analyzeEmergencyFund(u,o),emergencyFundTarget:o*this.EMERGENCY_FUND_MONTHS,savingsRate:r>0?u/r:0,savingsRateTarget:this.SAVINGS_RATE_TARGET,financialHealthScore:this.calculateFinancialHealthScore(h,r,o,u),accountDistribution:this.calculateAccountDistribution(i),projectedGrowth:this.calculateGrowthProjections(h,r,o)}}getTotalCash(i){return i.reduce((r,o)=>r+(o.cash_on_hand||0),0)}getTotalBankBalance(i){return i.reduce((r,o)=>r+(o.bank_account_balance||0),0)}getTotalSavings(i){return i.reduce((r,o)=>r+(o.savings||0),0)}calculateLiquidityRatio(i,r,o){return o===0?0:(i+r)/o*100}analyzeEmergencyFund(i,r){if(r===0)return{status:"unknown",months:0,recommendation:"Set monthly expenses to analyze emergency fund"};const o=i/r;return o>=this.EMERGENCY_FUND_MONTHS?{status:"excellent",months:o,recommendation:"Great! Consider investing excess emergency funds"}:o>=3?{status:"good",months:o,recommendation:`Add $${((this.EMERGENCY_FUND_MONTHS-o)*r).toFixed(2)} more`}:o>=1?{status:"needs_improvement",months:o,recommendation:"Focus on building emergency fund to 3-6 months"}:{status:"critical",months:o,recommendation:"Emergency fund needed! Start with $1000 minimum"}}calculateFinancialHealthScore(i,r,o,l){let c=0;if(i>0&&(c+=Math.min(30,i/1e4*30)),o>0){const u=l/o;c+=Math.min(25,u/this.EMERGENCY_FUND_MONTHS*25)}if(r>0){const u=l/r;c+=Math.min(25,u/this.SAVINGS_RATE_TARGET*25)}if(r>0&&o>0){const u=o/r;u<=.5?c+=20:u<=.7?c+=15:u<=.8?c+=10:u<=.9&&(c+=5)}return Math.min(100,Math.round(c))}calculateAccountDistribution(i){const r=this.getTotalCash(i),o=this.getTotalBankBalance(i),l=this.getTotalSavings(i),c=r+o+l;return c===0?{cash:0,bank:0,savings:0}:{cash:r/c*100,bank:o/c*100,savings:l/c*100}}calculateGrowthProjections(i,r,o){const l=r-o;return{oneMonth:i+l,threeMonth:i+l*3,sixMonth:i+l*6,oneYear:i+l*12,monthlyNetFlow:l}}validateBalanceInputs(i,r,o){const l={};i<0&&(l.cashOnHand="Cash amount cannot be negative"),i>5e4&&(l.cashOnHand="Consider depositing large cash amounts in bank for security"),r<0&&(l.bankBalance="Bank balance cannot be negative"),o<0&&(l.savings="Savings cannot be negative"),i===0&&r===0&&o===0&&(l.general="Please enter at least one balance amount");const c=i+r+o;if(c>0){const u=i/c*100;u>30&&(l.warning=`${u.toFixed(0)}% in cash - consider banking for safety`)}return l}suggestOptimalAllocation(i){const r={cash:0,bank:0,savings:0,reasoning:[]};return i<=1e3?(r.cash=i*.2,r.bank=i*.8,r.savings=0,r.reasoning.push("Keep small amounts liquid and accessible")):i<=1e4?(r.cash=Math.min(500,i*.1),r.bank=i*.4,r.savings=i*.5,r.reasoning.push("Build emergency fund in savings"),r.reasoning.push("Keep some funds liquid for daily expenses")):(r.cash=Math.min(1e3,i*.05),r.bank=i*.35,r.savings=i*.6,r.reasoning.push("Maximize savings for emergency fund and goals"),r.reasoning.push("Maintain liquidity for unexpected expenses")),r}analyzeAccountConsolidation(i){if(i.length<=1)return null;const r=[];i.forEach((l,c)=>{const u=l.cash_on_hand+l.bank_account_balance+l.savings;u<100&&r.push({index:c,total:u,account:l})});const o=[];if(r.length>1){const l=r.reduce((c,u)=>c+u.total,0);o.push({type:"consolidate_low_balance",message:`Consider consolidating ${r.length} low-balance accounts (${l.toFixed(2)})`,accounts:r,potentialSavings:r.length*5})}return o.length>0?o:null}generateFinancialInsights(i,r){const o=[];i.liquidityRatio<15?o.push({type:"warning",category:"liquidity",title:"Low Liquidity Warning",message:`Only ${i.liquidityRatio.toFixed(1)}% of assets are liquid. Consider keeping more in cash/checking.`,priority:"high"}):i.liquidityRatio>80&&o.push({type:"opportunity",category:"liquidity",title:"Excess Liquidity",message:`${i.liquidityRatio.toFixed(1)}% of assets are liquid. Consider moving some to higher-yield savings.`,priority:"medium"});const l=i.emergencyFundStatus;l.status==="critical"?o.push({type:"critical",category:"emergency_fund",title:"Emergency Fund Critical",message:l.recommendation,priority:"high"}):l.status==="excellent"&&o.push({type:"success",category:"emergency_fund",title:"Emergency Fund Complete",message:`Great! You have ${l.months.toFixed(1)} months of expenses saved.`,priority:"low"}),i.financialHealthScore>=80?o.push({type:"success",category:"health",title:"Excellent Financial Health",message:`Your financial health score is ${i.financialHealthScore}/100. Keep it up!`,priority:"low"}):i.financialHealthScore<40&&o.push({type:"warning",category:"health",title:"Financial Health Needs Attention",message:`Your financial health score is ${i.financialHealthScore}/100. Focus on building emergency fund and reducing expenses.`,priority:"high"});const c=this.analyzeAccountConsolidation(r);return c&&o.push({type:"opportunity",category:"consolidation",title:"Account Consolidation Opportunity",message:c[0].message,priority:"medium"}),o}}class Su{constructor(){try{this.updateHistory=this.loadUpdateHistory(),this.updatePatterns=this.loadUpdatePatterns(),this.validationRules=this.initializeValidationRules()}catch(i){console.warn("SmartUpdateService initialization warning:",i),this.updateHistory=[],this.updatePatterns={},this.validationRules=this.getDefaultValidationRules()}}getDefaultValidationRules(){return{balance:{minimums:{cash:0,bank:0,savings:0},maximums:{cash:5e4,bank:1e6,savings:1e6},ratios:{cashToTotal:{min:.05,max:.3},savingsToTotal:{min:.1,max:.6}},warningThresholds:{lowCash:100,lowSavings:1e3,highCash:1e4}}}}initializeValidationRules(){return{balance:{minimums:{cash:0,bank:0,savings:0},maximums:{cash:5e4,bank:1e6,savings:1e6},ratios:{cashToTotal:{min:.05,max:.3},savingsToTotal:{min:.1,max:.6}},warningThresholds:{lowCash:100,lowSavings:1e3,highCash:1e4}},budget:{categories:{"Food & Dining":{minPercent:10,maxPercent:30},Transportation:{minPercent:5,maxPercent:20},Utilities:{minPercent:5,maxPercent:15},Entertainment:{minPercent:2,maxPercent:15},Healthcare:{minPercent:3,maxPercent:20}},totalBudgetLimits:{min:100,max:5e4}},investments:{diversification:{maxSingleAsset:.4,minAssets:3,riskLevels:{conservative:{crypto:.1,stocks:.4},moderate:{crypto:.2,stocks:.6},aggressive:{crypto:.4,stocks:.8}}}}}}validateUpdate(i,r,o=null){const l={isValid:!0,errors:[],warnings:[],suggestions:[],aiRecommendations:[]};switch(i){case"balance":return this.validateBalanceUpdate(r,l,o);case"budget":return this.validateBudgetUpdate(r,l,o);case"investment":return this.validateInvestmentUpdate(r,l,o);case"transaction":return this.validateTransactionUpdate(r,l,o);default:return l.errors.push("Unknown update type"),l.isValid=!1,l}}validateBalanceUpdate(i,r,o){const{cash_on_hand:l,bank_account_balance:c,savings:u}=i,h=l+c+u,p=this.validationRules.balance;if(l<p.minimums.cash&&(r.errors.push("Cash amount cannot be negative"),r.isValid=!1),c<p.minimums.bank&&(r.errors.push("Bank balance cannot be negative"),r.isValid=!1),u<p.minimums.savings&&(r.errors.push("Savings cannot be negative"),r.isValid=!1),h>0){const x=l/h,v=u/h;x>p.ratios.cashToTotal.max&&(r.warnings.push(`High cash percentage (${(x*100).toFixed(1)}%). Consider moving some to savings or investments.`),r.aiRecommendations.push({type:"reallocation",message:`Move $${(l-h*p.ratios.cashToTotal.max).toFixed(2)} from cash to savings`,suggestedAllocation:{cash:Math.round(h*p.ratios.cashToTotal.max),bank:c,savings:u+(l-Math.round(h*p.ratios.cashToTotal.max))}})),v<p.ratios.savingsToTotal.min&&(r.warnings.push(`Low savings percentage (${(v*100).toFixed(1)}%). Consider increasing your emergency fund.`),r.suggestions.push("Aim for at least 3-6 months of expenses in savings"))}return this.addPatternBasedSuggestions(r,"balance",i,o),r}validateBudgetUpdate(i,r,o){const{item_name:l,amount:c,date:u}=i;this.validationRules.budget,(!l||l.trim().length===0)&&(r.errors.push("Budget item name is required"),r.isValid=!1),(!c||c<=0)&&(r.errors.push("Budget amount must be positive"),r.isValid=!1),u||(r.errors.push("Budget date is required"),r.isValid=!1);const h=this.suggestBudgetCategory(l);h&&h!==l&&r.suggestions.push(`Consider categorizing as "${h}" for better tracking`);const p=this.suggestBudgetOptimization(l,c,o);return p&&r.aiRecommendations.push(p),r}validateInvestmentUpdate(i,r,o){const{name:l,amount:c,pricePerUnit:u,total_price:h}=i,p=this.validationRules.investments;if((!l||l.trim().length===0)&&(r.errors.push("Investment name is required"),r.isValid=!1),(!c||c<=0)&&(r.errors.push("Investment amount must be positive"),r.isValid=!1),o&&o.portfolio){const v=this.analyzePortfolioDiversification(i,o.portfolio);v.riskLevel==="high"&&(r.warnings.push(`High risk detected: ${v.reason}`),r.aiRecommendations.push({type:"diversification",message:"Consider diversifying your portfolio to reduce risk",suggestions:v.suggestions})),v.concentration>p.diversification.maxSingleAsset&&r.warnings.push(`High concentration in ${l} (${(v.concentration*100).toFixed(1)}%)`)}const x=this.getMarketTimingSuggestion(l,c);return x&&r.suggestions.push(x),r}validateBulkUpdate(i,r){const o={isValid:!0,validUpdates:[],invalidUpdates:[],warnings:[],suggestions:[],aiRecommendations:[]};return r.forEach((l,c)=>{const u=this.validateUpdate(i,l.data,l.currentData);u.isValid?o.validUpdates.push({...l,index:c,validation:u}):(o.invalidUpdates.push({...l,index:c,validation:u}),o.isValid=!1),o.warnings.push(...u.warnings),o.suggestions.push(...u.suggestions),o.aiRecommendations.push(...u.aiRecommendations)}),this.addBulkRecommendations(o,i,r),o}generateUpdateSuggestions(i,r,o=null){const l={priority:[],optimization:[],maintenance:[]};switch(i){case"balance":return this.generateBalanceSuggestions(r,l,o);case"budget":return this.generateBudgetSuggestions(r,l,o);case"investment":return this.generateInvestmentSuggestions(r,l,o);default:return l}}generateBalanceSuggestions(i,r,o){if(!i||i.length===0)return r;const l=i.reduce((h,p)=>h+p.cash_on_hand+p.bank_account_balance+p.savings,0),c=l/i.length;l<1e3&&r.priority.push({type:"emergency_fund",message:"Build emergency fund to at least $1,000",action:"Increase savings gradually",priority:"high"});const u=i.filter(h=>h.cash_on_hand+h.bank_account_balance+h.savings<c*.5);return u.length>1&&r.optimization.push({type:"consolidation",message:`Consider consolidating ${u.length} low-balance accounts`,action:"Merge accounts to reduce maintenance overhead",priority:"medium"}),r}trackUpdate(i,r,o){try{const l={timestamp:new Date().toISOString(),type:i,data:r,result:o,success:o.success||!1};this.updateHistory.push(l),this.saveUpdateHistory(),this.analyzeUpdatePatterns()}catch(l){console.warn("Error tracking update:",l)}}analyzeUpdatePatterns(){if(this.updateHistory.length<5)return;const i=this.updateHistory.slice(-20),r={frequency:{},timing:{},amounts:{},success_rate:0};i.forEach(l=>{r.frequency[l.type]=(r.frequency[l.type]||0)+1});const o=i.filter(l=>l.success).length;r.success_rate=o/i.length*100,this.updatePatterns=r,this.saveUpdatePatterns()}addPatternBasedSuggestions(i,r,o,l){const c=this.getUserUpdatePatterns(r);c.frequency>5&&r==="balance"&&c.averageAmount&&o.cash_on_hand>c.averageAmount*1.5&&i.suggestions.push("This is higher than your usual cash amount. Consider if this allocation is intentional.")}suggestBudgetCategory(i){const r={"Food & Dining":["food","restaurant","dining","grocery","coffee","lunch","dinner"],Transportation:["gas","fuel","car","transport","uber","taxi","bus"],Utilities:["electric","water","gas","internet","phone","utility"],Entertainment:["movie","game","concert","streaming","netflix","entertainment"],Healthcare:["medical","doctor","pharmacy","health","insurance"]},o=i.toLowerCase();for(const[l,c]of Object.entries(r))if(c.some(u=>o.includes(u)))return l;return null}analyzePortfolioDiversification(i,r){const o=r.reduce((c,u)=>c+u.total_price,0)+i.total_price,l=i.total_price/o;return{concentration:l,riskLevel:l>.4?"high":l>.2?"medium":"low",reason:l>.4?`${i.name} would represent ${(l*100).toFixed(1)}% of portfolio`:"",suggestions:l>.4?["Consider reducing position size","Add other assets for diversification"]:[]}}getMarketTimingSuggestion(i,r){return["bitcoin","ethereum","crypto"].some(l=>i.toLowerCase().includes(l))?"Consider dollar-cost averaging for volatile assets rather than lump sum investment":null}loadUpdateHistory(){try{const i=localStorage.getItem("smart_update_history");return i?JSON.parse(i):[]}catch(i){return console.warn("Error loading update history:",i),[]}}saveUpdateHistory(){try{const i=this.updateHistory.slice(-100);localStorage.setItem("smart_update_history",JSON.stringify(i))}catch(i){console.warn("Error saving update history:",i)}}loadUpdatePatterns(){try{const i=localStorage.getItem("smart_update_patterns");return i?JSON.parse(i):{}}catch(i){return console.warn("Error loading update patterns:",i),{}}}saveUpdatePatterns(){try{localStorage.setItem("smart_update_patterns",JSON.stringify(this.updatePatterns))}catch(i){console.warn("Error saving update patterns:",i)}}getUserUpdatePatterns(i){var l;const r=this.updateHistory.filter(c=>c.type===i);if(r.length===0)return{frequency:0};const o=r.filter(c=>c.data&&typeof c.data.amount=="number").map(c=>c.data.amount);return{frequency:r.length,averageAmount:o.length>0?o.reduce((c,u)=>c+u,0)/o.length:null,lastUpdate:(l=r[r.length-1])==null?void 0:l.timestamp}}addBulkRecommendations(i,r,o){r==="balance"&&o.length>3&&i.aiRecommendations.push({type:"bulk_optimization",message:"Multiple balance updates detected. Consider using account consolidation feature.",action:"Review account structure for optimization opportunities"}),r==="budget"&&o.length>5&&i.suggestions.push("Large budget update detected. Consider using budget templates for consistency.")}generateOptimizationReport(i,r){const o={summary:"",recommendations:[],metrics:{},nextSteps:[]};return o.summary=`Analysis complete for ${i} updates. Found ${r.length} items for review.`,o}}function Sv({darkMode:a,updateType:i,items:r,onBulkUpdate:o,onClose:l}){const[c]=S.useState(()=>{try{return new Su}catch(A){return console.warn("Failed to initialize SmartUpdateService:",A),null}}),[u,h]=S.useState([]),[p,x]=S.useState({}),[v,b]=S.useState(null),[O,W]=S.useState(!1),[F,$]=S.useState(!1),[L,V]=S.useState({priority:[],optimization:[],maintenance:[]});S.useEffect(()=>{if(c)try{const A=c.generateUpdateSuggestions(i,r);V(A)}catch(A){console.warn("Failed to generate AI suggestions:",A),V({priority:[],optimization:[],maintenance:[]})}},[r,i,c]);const D=(A,J)=>{h(J?[...u,A]:u.filter(se=>se!==A))},N=()=>{u.length===r.length?h([]):h(r.map(A=>A.id))},C=(A,J)=>{x({...p,[A]:J})},ne=()=>{const A=u.map(J=>{const se=r.find(X=>X.id===J);if(!se)return null;const T={...se};if(i==="balance"){if(p.cashOperation&&p.cashAmount)switch(p.cashOperation){case"add":T.cash_on_hand=(se.cash_on_hand||0)+p.cashAmount;break;case"subtract":T.cash_on_hand=Math.max(0,(se.cash_on_hand||0)-p.cashAmount);break;case"set":T.cash_on_hand=p.cashAmount;break;case"percentage":T.cash_on_hand=(se.cash_on_hand||0)*(1+p.cashAmount/100);break}if(p.bankOperation&&p.bankAmount)switch(p.bankOperation){case"add":T.bank_account_balance=(se.bank_account_balance||0)+p.bankAmount;break;case"subtract":T.bank_account_balance=Math.max(0,(se.bank_account_balance||0)-p.bankAmount);break;case"set":T.bank_account_balance=p.bankAmount;break;case"percentage":T.bank_account_balance=(se.bank_account_balance||0)*(1+p.bankAmount/100);break}if(p.savingsOperation&&p.savingsAmount)switch(p.savingsOperation){case"add":T.savings=(se.savings||0)+p.savingsAmount;break;case"subtract":T.savings=Math.max(0,(se.savings||0)-p.savingsAmount);break;case"set":T.savings=p.savingsAmount;break;case"percentage":T.savings=(se.savings||0)*(1+p.savingsAmount/100);break}T.total=(T.cash_on_hand||0)+(T.bank_account_balance||0)+(T.savings||0)}return{id:J,data:T,currentData:se}}).filter(Boolean);if(!c){const J={isValid:A.length>0,validUpdates:A,invalidUpdates:[],warnings:[],suggestions:[],aiRecommendations:[]};return b(J),J}try{const J=c.validateBulkUpdate(i,A);return b(J),J}catch(J){console.warn("Bulk validation failed:",J);const se={isValid:A.length>0,validUpdates:A,invalidUpdates:[],warnings:["Smart validation unavailable - using basic validation"],suggestions:[],aiRecommendations:[]};return b(se),se}},re=()=>{const A=ne();(A.isValid||A.validUpdates.length>0)&&$(!0)},be=async()=>{W(!0);try{const A=ne();if(A.validUpdates.length>0&&(await o(A.validUpdates.map(J=>({id:J.id,data:J.data}))),c))try{c.trackUpdate("bulk_"+i,{count:A.validUpdates.length,updateData:p},{success:!0})}catch(J){console.warn("Failed to track bulk update:",J)}}catch(A){if(console.error("Bulk update failed:",A),c)try{c.trackUpdate("bulk_"+i,p,{success:!1,error:A.message})}catch(J){console.warn("Failed to track bulk update error:",J)}}finally{W(!1)}},ae=()=>{switch(i){case"balance":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"💰 Bulk Balance Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"💵 Cash Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("cashOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:A=>C("cashAmount",parseFloat(A.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"🏦 Bank Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("bankOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:A=>C("bankAmount",parseFloat(A.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"🐷 Savings Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("savingsOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:A=>C("savingsAmount",parseFloat(A.target.value)||0)})]})]})]})]});case"budget":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"📊 Bulk Budget Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"💰 Amount Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("amountOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Increase by Amount"}),n.jsx("option",{value:"subtract",children:"Decrease by Amount"}),n.jsx("option",{value:"multiply",children:"Multiply by Factor"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Value",step:"0.01",onChange:A=>C("amountValue",parseFloat(A.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"📅 Date Update"}),n.jsx("input",{type:"date",className:"form-control",onChange:A=>C("newDate",A.target.value)})]})]})]});case"investment":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"📈 Bulk Investment Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"📊 Amount Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("amountOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add to Position"}),n.jsx("option",{value:"subtract",children:"Reduce Position"}),n.jsx("option",{value:"rebalance",children:"Rebalance Portfolio"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",step:"0.01",onChange:A=>C("amountValue",parseFloat(A.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"💡 Rebalancing Strategy"}),n.jsxs("select",{className:"form-select",onChange:A=>C("rebalanceStrategy",A.target.value),children:[n.jsx("option",{value:"",children:"Manual Updates"}),n.jsx("option",{value:"equal_weight",children:"Equal Weight"}),n.jsx("option",{value:"market_cap",children:"Market Cap Weighted"}),n.jsx("option",{value:"risk_parity",children:"Risk Parity"})]})]})]})]});default:return n.jsx("div",{children:"Update form not available for this type"})}},fe=()=>!L||L.priority.length===0&&L.optimization.length===0?null:n.jsxs("div",{className:"ai-suggestions-panel mb-4",children:[n.jsx("h6",{children:"🤖 AI Recommendations"}),L.priority.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{className:"text-danger",children:"🔥 Priority Actions"}),L.priority.map((A,J)=>n.jsxs("div",{className:"alert alert-warning",children:[n.jsx("strong",{children:A.message}),n.jsx("br",{}),n.jsx("small",{children:A.action})]},J))]}),L.optimization.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{className:"text-info",children:"⚡ Optimization Opportunities"}),L.optimization.map((A,J)=>n.jsxs("div",{className:"alert alert-info",children:[n.jsx("strong",{children:A.message}),n.jsx("br",{}),n.jsx("small",{children:A.action})]},J))]})]}),ye=()=>v?n.jsxs("div",{className:"validation-results mb-4",children:[n.jsx("h6",{children:"✅ Validation Results"}),v.validUpdates.length>0&&n.jsx("div",{className:"alert alert-success",children:n.jsxs("strong",{children:["✅ ",v.validUpdates.length," items ready for update"]})}),v.invalidUpdates.length>0&&n.jsxs("div",{className:"alert alert-danger",children:[n.jsxs("strong",{children:["❌ ",v.invalidUpdates.length," items have validation errors"]}),n.jsx("ul",{className:"mt-2 mb-0",children:v.invalidUpdates.slice(0,3).map((A,J)=>n.jsxs("li",{children:["Item ",A.index+1,": ",A.validation.errors.join(", ")]},J))})]}),v.warnings.length>0&&n.jsxs("div",{className:"alert alert-warning",children:[n.jsx("strong",{children:"⚠️ Warnings:"}),n.jsx("ul",{className:"mt-2 mb-0",children:v.warnings.slice(0,3).map((A,J)=>n.jsx("li",{children:A},J))})]}),v.aiRecommendations.length>0&&n.jsxs("div",{className:"alert alert-info",children:[n.jsx("strong",{children:"🤖 AI Recommendations:"}),n.jsx("ul",{className:"mt-2 mb-0",children:v.aiRecommendations.slice(0,3).map((A,J)=>n.jsx("li",{children:A.message},J))})]})]}):null;return n.jsxs("div",{className:"bulk-update-panel",children:[n.jsx("style",{children:`
        .bulk-update-panel {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }

        .bulk-update-content {
          background: ${a?"#2d3748":"#ffffff"};
          border-radius: 15px;
          max-width: 90%;
          max-height: 90%;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          color: ${a?"#e2e8f0":"#2d3748"};
        }

        .bulk-update-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          border-radius: 15px 15px 0 0;
        }

        .bulk-update-body {
          padding: 20px;
        }

        .bulk-update-form {
          background: ${a?"#4a5568":"#f8f9fa"};
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .item-selection-list {
          max-height: 300px;
          overflow-y: auto;
          border: 1px solid ${a?"#4a5568":"#e2e8f0"};
          border-radius: 8px;
          padding: 10px;
        }

        .item-selection-item {
          display: flex;
          align-items: center;
          padding: 8px;
          border-radius: 6px;
          margin-bottom: 5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .item-selection-item:hover {
          background: ${a?"#4a5568":"#f1f5f9"};
        }

        .item-selection-item.selected {
          background: ${a?"#667eea30":"#667eea20"};
          border: 1px solid #667eea;
        }

        .ai-suggestions-panel {
          background: ${a?"#4a5568":"#f8f9fa"};
          border-radius: 10px;
          padding: 15px;
          border-left: 4px solid #667eea;
        }

        .bulk-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .btn-bulk {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary-bulk {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-success-bulk {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
        }

        .btn-secondary-bulk {
          background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
          color: white;
        }

        .btn-bulk:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-bulk:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
      `}),n.jsxs("div",{className:"bulk-update-content",style:{width:"800px"},children:[n.jsx("div",{className:"bulk-update-header",children:n.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[n.jsxs("h4",{children:["🔄 Bulk Update - ",i.charAt(0).toUpperCase()+i.slice(1)]}),n.jsx("button",{className:"btn btn-link text-white p-0",onClick:l,style:{fontSize:"1.5rem",textDecoration:"none"},children:"✕"})]})}),n.jsxs("div",{className:"bulk-update-body",children:[fe(),n.jsxs("div",{className:"mb-4",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[n.jsxs("h6",{children:["📋 Select Items to Update (",u.length,"/",r.length,")"]}),n.jsx("button",{className:"btn btn-sm btn-outline-primary",onClick:N,children:u.length===r.length?"Deselect All":"Select All"})]}),n.jsx("div",{className:"item-selection-list",children:r.map(A=>n.jsxs("div",{className:`item-selection-item ${u.includes(A.id)?"selected":""}`,onClick:()=>D(A.id,!u.includes(A.id)),children:[n.jsx("input",{type:"checkbox",checked:u.includes(A.id),onChange:()=>{},className:"form-check-input me-2"}),n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("strong",{children:[i==="balance"&&`Account #${r.indexOf(A)+1}`,i==="budget"&&A.item_name,i==="investment"&&A.name]}),n.jsx("br",{}),n.jsxs("small",{className:"text-muted",children:[i==="balance"&&`Total: $${(A.cash_on_hand+A.bank_account_balance+A.savings).toFixed(2)}`,i==="budget"&&`Amount: $${A.amount.toFixed(2)}`,i==="investment"&&`Value: $${A.total_price.toFixed(2)}`]})]})]},A.id))})]}),u.length>0&&ae(),ye(),n.jsxs("div",{className:"bulk-actions",children:[n.jsx("div",{children:n.jsxs("small",{className:"text-muted",children:[u.length," items selected for bulk update"]})}),n.jsxs("div",{className:"d-flex gap-2",children:[n.jsx("button",{className:"btn-bulk btn-secondary-bulk",onClick:l,children:"❌ Cancel"}),n.jsx("button",{className:"btn-bulk btn-primary-bulk",onClick:re,disabled:u.length===0,children:"👁️ Preview Changes"}),n.jsx("button",{className:"btn-bulk btn-success-bulk",onClick:be,disabled:u.length===0||O,children:O?"⏳ Processing...":"✅ Apply Updates"})]})]})]})]})]})}function _v({darkMode:a,cashOnHand:i,setCashOnHand:r,bankAccountBalance:o,setBankAccountBalance:l,savings:c,setSavings:u,setTotal:h,formatCurrency:p,balanceId:x,setBalanceId:v,balances:b,setBalances:O,editIndex:W,setEditIndex:F,editBalance:$,setEditBalance:L,balanceError:V,setBalanceError:D}){const[N,C]=S.useState(!1),[ne,re]=S.useState(""),[be,ae]=S.useState(null),[fe,ye]=S.useState({}),[A,J]=S.useState(null),[se,T]=S.useState(!1),[X,oe]=S.useState(0),[Oe,ke]=S.useState(0);S.useState(!1);const[me,U]=S.useState(null),[xe,de]=S.useState(!1),[H,Q]=S.useState(null),[le,ue]=S.useState([]),[Ce,Ve]=S.useState(0),[ie,q]=S.useState(0),[ve,Ee]=S.useState(0),[yt,We]=S.useState(0),Ze=new jv,[qe,Ht]=S.useState(null),[Ie,St]=S.useState(!1);S.useEffect(()=>{let K=null;try{K=new Su,Ht(K),console.log("SmartUpdateService initialized successfully")}catch(te){console.warn("SmartUpdateService failed to initialize:",te),Ht(null)}finally{St(!0)}},[]),S.useEffect(()=>{var K;Ve(0),q(0),Ee(0),We(0),ye({}),Q(null),U(null),window.innerWidth<=768&&(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,(K=document.activeElement)==null||K.blur()),console.log("Balance component mounted - fields reset")},[]),S.useEffect(()=>{We(Ce+ie+ve)},[Ce,ie,ve]);const Me=K=>{re(K),D("")},lt=K=>{D(K),re("")},tt=()=>{const K=Ze.validateBalanceInputs(Ce,ie,ve);return ye(K),Object.keys(K).filter(te=>te!=="warning").length===0};S.useEffect(()=>{if(b.length>0&&qe&&Ie)try{const K=qe.generateUpdateSuggestions("balance",b);ue(K)}catch(K){console.warn("Failed to generate update suggestions:",K),ue([])}},[b,qe,Ie]),S.useEffect(()=>{if(b.length>0){const K=Ze.calculateFinancialMetrics(b,X,Oe);J(K)}},[b,X,Oe]),S.useEffect(()=>{const K=i+o+c;if(K>0){const te=Ze.suggestOptimalAllocation(K);U(te)}else U(null)},[i,o,c]),S.useEffect(()=>{console.log("BALANCE COMPONENT");const K=()=>{console.log("Fetching balances..."),C(!0),Xe.get(md.balance).then(te=>{if(console.log("Response received:",te.data),Array.isArray(te.data)){const he=te.data.map(Te=>({...Te,total:Te.cash_on_hand+Te.bank_account_balance+Te.savings,id:Te.id}));if(console.log("Fetched balances:",he),O(he),he.length>0){const Te=he.reduce((Be,Ye)=>Be+Ye.cash_on_hand,0),He=he.reduce((Be,Ye)=>Be+Ye.bank_account_balance,0),dt=he.reduce((Be,Ye)=>Be+Ye.savings,0);r(Te),l(He),u(dt)}}else if(te.data&&typeof te.data=="object"){const he={...te.data,total:te.data.cash_on_hand+te.data.bank_account_balance+te.data.savings};console.log("Fetched single balance:",he),O([he]),r(he.cash_on_hand),l(he.bank_account_balance),u(he.savings)}else console.error("Fetched data is not an array or object:",te.data),r(0),l(0),u(0);D(null)}).catch(te=>{console.error("There was an error fetching the balances!",te),lt("Failed to load balance data. Please try again."),r(0),l(0),u(0)}).finally(()=>{C(!1)})};window.innerWidth<=768?setTimeout(K,100):K()},[O,r,l,u,D]),S.useEffect(()=>{if(ne){const K=setTimeout(()=>re(""),3e3);return()=>clearTimeout(K)}},[ne]),S.useEffect(()=>{if(V){const K=setTimeout(()=>D(""),5e3);return()=>clearTimeout(K)}},[V]),S.useEffect(()=>{h(i+o+c)},[i,o,c,h]);const nt=K=>{const{name:te,value:he}=K.target,Te=Number(he);if(Te<0){lt("Values cannot be negative");return}if(L({...$,[te]:Te}),qe)try{const He=qe.validateUpdate("balance",{...$,[te]:Te},$);Q(He)}catch(He){console.warn("Smart validation failed:",He),Q(null)}},je=async K=>{if(qe)try{const he=qe.validateUpdate("balance",$,b[K]);if(!he.isValid){lt(`Validation failed: ${he.errors.join(", ")}`);return}if(he.warnings.length>0&&!window.confirm(`Warning: ${he.warnings.join(" ")} Do you want to continue?`))return}catch(he){console.warn("Smart validation failed:",he)}if($.cash_on_hand<0||$.bank_account_balance<0||$.savings<0){lt("All values must be non-negative");return}const te={...$,total:$.cash_on_hand+$.bank_account_balance+$.savings};try{C(!0),await Xe.put(Ln(`/balance/${te.id}`),te);const he=b.map((Be,Ye)=>Ye===K?te:Be);O(he),F(null);const Te=he.reduce((Be,Ye)=>Be+Ye.cash_on_hand,0),He=he.reduce((Be,Ye)=>Be+Ye.bank_account_balance,0),dt=he.reduce((Be,Ye)=>Be+Ye.savings,0);if(r(Te),l(He),u(dt),qe)try{qe.trackUpdate("balance",te,{success:!0})}catch(Be){console.warn("Failed to track update:",Be)}Me(`Successfully updated account #${K+1}!`),console.log("Balance updated:",te)}catch(he){if(console.error("There was an error updating the balance!",he),qe)try{qe.trackUpdate("balance",te,{success:!1,error:he.message})}catch(Te){console.warn("Failed to track update error:",Te)}lt("Failed to update balance. Please try again.")}finally{C(!1)}},at=async K=>{if(be===K){const te=b[K];if(!te||!te.id){console.error("Balance or balance.id is undefined"),lt("Unable to delete: Invalid balance data");return}try{C(!0),await Xe.delete(Ln(`/balance/${te.id}`));const he=b.filter((Te,He)=>He!==K);if(O(he),he.length>0){const Te=he.reduce((Be,Ye)=>Be+Ye.cash_on_hand,0),He=he.reduce((Be,Ye)=>Be+Ye.bank_account_balance,0),dt=he.reduce((Be,Ye)=>Be+Ye.savings,0);r(Te),l(He),u(dt)}else r(0),l(0),u(0);Me(`Successfully deleted account #${K+1}!`),ae(null)}catch(he){console.error("Error deleting balance:",he),lt("Failed to delete balance. Please try again.")}finally{C(!1)}}else ae(K),setTimeout(()=>ae(null),3e3)},vt=async K=>{try{C(!0);const te=K.map(Te=>Xe.put(Ln(`/balance/${Te.id}`),Te.data));await Promise.all(te);const he=b.map(Te=>{const He=K.find(dt=>dt.id===Te.id);return He?{...Te,...He.data}:Te});if(O(he),de(!1),qe)try{qe.trackUpdate("bulk_balance",{count:K.length},{success:!0})}catch(Te){console.warn("Failed to track bulk update:",Te)}Me(`Successfully updated ${K.length} accounts!`)}catch(te){if(console.error("Bulk update failed:",te),qe)try{qe.trackUpdate("bulk_balance",{count:K.length},{success:!1,error:te.message})}catch(he){console.warn("Failed to track bulk update error:",he)}lt("Bulk update failed. Please try again.")}finally{C(!1)}},ct=()=>{Ve(0),q(0),Ee(0),We(0),ye({}),Q(null),U(null),Me("Fields have been reset!")},ht=async()=>{if(!tt())return;const K=Ce+ie+ve;We(K);const te={cash_on_hand:Ce,bank_account_balance:ie,savings:ve,total:K,created_at:new Date().toISOString()};try{C(!0);const he=await Xe.post(md.balance,te);console.log("Balance saved:",he.data);const Te=[...b,{...he.data,total:K}];O(Te);const He=Te.reduce((Ye,qt)=>Ye+qt.cash_on_hand,0),dt=Te.reduce((Ye,qt)=>Ye+qt.bank_account_balance,0),Be=Te.reduce((Ye,qt)=>Ye+qt.savings,0);r(He),l(dt),u(Be),Ve(0),q(0),Ee(0),We(0),ye({}),Q(null),U(null),Me(`Successfully added new balance account! Total: ${p(K)}`)}catch(he){console.error("There was an error saving your balance!",he),lt("Failed to save balance. Please try again.")}finally{C(!1)}},Ot=()=>{me&&(Ve(Math.round(me.cash)),q(Math.round(me.bank)),Ee(Math.round(me.savings)),Me("Applied optimal allocation suggestion!"))},wt=K=>{switch(K){case"emergency":Ve(500),q(1500),Ee(3e3),Me("Applied emergency fund preset!");break;case"student":Ve(200),q(800),Ee(500),Me("Applied student budget preset!");break;case"family":Ve(1e3),q(5e3),Ee(1e4),Me("Applied family budget preset!");break}},Qt=()=>{const K=b.filter(te=>te.cash_on_hand+te.bank_account_balance+te.savings<100);if(K.length>1){const te=K.reduce((He,dt)=>He+dt.cash_on_hand,0),he=K.reduce((He,dt)=>He+dt.bank_account_balance,0),Te=K.reduce((He,dt)=>He+dt.savings,0);r(te),l(he),u(Te),Me(`Consolidated ${K.length} accounts. Review and save the combined account.`)}};return n.jsxs("div",{className:"balance-container",children:[n.jsx("style",{children:`
        .balance-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .balance-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 30px;
          border-radius: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .balance-header h5 {
          font-size: 1.8rem;
          margin: 0 0 10px 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .balance-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          margin: 0;
        }

        .balance-section {
          background: ${a?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
          transition: all 0.3s ease;
        }

        .balance-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .balance-title {
          color: ${a?"#e2e8f0":"#2d3748"};
          font-size: 1.2em;
          font-weight: 700;
          margin-bottom: 30px;
          text-align: center;
        }

        .input-row {
          margin-bottom: 25px;
        }

        .input-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          color: ${a?"#e2e8f0":"#2d3748"};
          transition: color 0.3s ease;
        }

        .balance-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid ${a?"#4a5568":"#e2e8f0"};
          border-radius: 12px;
          font-size: 1rem;
          background: ${a?"#2d3748":"#ffffff"};
          color: ${a?"#e2e8f0":"#2d3748"};
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .balance-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
          transform: translateY(-2px);
        }

        .balance-input.error {
          border-color: #e53e3e;
          box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
        }

        .validation-error {
          color: #e53e3e;
          font-size: 0.875rem;
          margin-top: 5px;
          display: flex;
          align-items: center;
          animation: fadeIn 0.3s ease;
        }

        .btn-balance {
          padding: 12px 20px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .btn-set-balance {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
        }

        .btn-set-balance:hover:not(.btn-disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(56, 161, 105, 0.6);
        }

        .btn-reset-balance {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
        }

        .btn-reset-balance:hover:not(.btn-disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6);
        }

        .btn-disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .alert-success-balance {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          padding: 15px 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          font-weight: 600;
          text-align: center;
          box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
          animation: slideIn 0.5s ease;
        }

        .alert-error-balance {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          color: white;
          padding: 15px 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          font-weight: 600;
          text-align: center;
          box-shadow: 0 4px 15px rgba(245, 101, 101, 0.4);
          animation: slideIn 0.5s ease;
        }

        .overview-section {
          background: ${a?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
          transition: all 0.3s ease;
        }

        .overview-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .overview-title {
          color: ${a?"#e2e8f0":"#2d3748"};
          font-size: 1.2em;
          font-weight: 700;
          margin-bottom: 25px;
          text-align: center;
        }

        .balance-table {
          background: ${a?"#2d3748":"#ffffff"};
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .balance-table thead th {
          background: ${a?"#4a5568":"#667eea"};
          color: white;
          font-weight: 700;
          padding: 18px 15px;
          border: none;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-size: 0.9rem;
          border-bottom: 3px solid ${a?"#2d3748":"#5a67d8"};
        }

        .balance-table tbody tr {
          transition: all 0.3s ease;
          border-bottom: 1px solid ${a?"#4a5568":"#e2e8f0"};
        }

        .balance-table tbody tr:hover {
          background: ${a?"#4a5568":"#f7fafc"};
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .balance-table tbody td {
          padding: 18px 15px;
          vertical-align: middle;
          border: none;
          color: ${a?"#e2e8f0":"#2d3748"};
          transition: all 0.3s ease;
        }

        .account-number {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-weight: 700;
          display: inline-block;
          min-width: 50px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
        }

        .currency-amount {
          font-weight: 700;
          font-size: 1.1em;
          color: ${a?"#68d391":"#38a169"};
        }

        .total-amount {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          padding: 8px 15px;
          border-radius: 12px;
          font-weight: 700;
          display: inline-block;
          box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
        }

        .btn-table {
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 2px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          min-width: auto;
        }

        .btn-edit {
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(66, 153, 225, 0.4);
        }

        .btn-edit:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(66, 153, 225, 0.6);
        }

        .btn-delete {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(245, 101, 101, 0.4);
        }

        .btn-delete:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(245, 101, 101, 0.6);
        }

        .btn-save {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
        }

        .btn-save:hover:not(.btn-disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(56, 161, 105, 0.6);
        }

        .btn-cancel {
          background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(160, 174, 192, 0.4);
        }

        .btn-cancel:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(160, 174, 192, 0.6);
        }

        .confirm-delete {
          background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
          animation: pulse 1s infinite;
          border: 2px solid #e53e3e;
        }

        .loading-spinner-balance {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }

        .no-balances {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
          border-radius: 15px;
          font-size: 1.2rem;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
        }

        .edit-input-table {
          width: 100%;
          padding: 8px 12px;
          border: 2px solid #667eea;
          border-radius: 6px;
          background: ${a?"#2d3748":"#ffffff"};
          color: ${a?"#e2e8f0":"#2d3748"};
          font-size: 0.9rem;
        }

        .edit-input-table:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
        }

        .loading-container {
          text-align: center;
          padding: 40px;
          color: ${a?"#e2e8f0":"#2d3748"};
        }

        .large-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid ${a?"#4a5568":"#e2e8f0"};
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 15px;
        }

        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .financial-metrics-section {
          background: ${a?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .metric-card {
          background: ${a?"#4a5568":"#ffffff"};
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .metric-value {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .metric-label {
          color: ${a?"#a0aec0":"#718096"};
          font-size: 0.9rem;
          font-weight: 600;
        }

        .health-score {
          color: #38a169;
        }

        .health-score.warning {
          color: #f59e0b;
        }

        .health-score.critical {
          color: #f56565;
        }

        .allocation-section {
          background: ${a?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .allocation-suggestion {
          background: ${a?"#4a5568":"#ffffff"};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          border-left: 4px solid #38a169;
        }

        .preset-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .btn-preset {
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-preset:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(66, 153, 225, 0.4);
        }

        .insights-section {
          background: ${a?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .insight-card {
          background: ${a?"#4a5568":"#ffffff"};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 15px;
          border-left: 5px solid;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .insight-card.critical {
          border-left-color: #f56565;
        }

        .insight-card.warning {
          border-left-color: #f59e0b;
        }

        .insight-card.success {
          border-left-color: #38a169;
        }

        .insight-card.opportunity {
          border-left-color: #4299e1;
        }

        .monthly-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .btn-balance {
            padding: 10px 16px;
            font-size: 0.9rem;
            margin: 5px 4px;
          }
          
          .balance-section, .overview-section {
            padding: 20px;
          }
          
          .btn-table {
            padding: 4px 8px;
            font-size: 0.7rem;
            gap: 2px;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .monthly-inputs {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .preset-buttons {
            flex-direction: column;
          }
        }
      `}),n.jsxs("div",{className:"balance-header",children:[n.jsx("h5",{children:"💰 Balance Management"}),n.jsx("p",{className:"balance-subtitle",children:"Track your financial accounts in one place"})]}),le&&le.priority&&le.optimization&&(le.priority.length>0||le.optimization.length>0)&&n.jsxs("div",{className:"insights-section",children:[n.jsx("h5",{className:"balance-title",children:"🤖 Smart Update Recommendations"}),le.priority.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{style:{color:"#f56565",fontWeight:"700"},children:"🔥 High Priority"}),le.priority.map((K,te)=>n.jsxs("div",{className:"insight-card critical",children:[n.jsx("strong",{children:K.message}),n.jsx("br",{}),n.jsx("small",{children:K.action})]},te))]}),le.optimization.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{style:{color:"#4299e1",fontWeight:"700"},children:"⚡ Optimization Opportunities"}),le.optimization.map((K,te)=>n.jsxs("div",{className:"insight-card opportunity",children:[n.jsx("strong",{children:K.message}),n.jsx("br",{}),n.jsx("small",{children:K.action})]},te))]})]}),xe&&n.jsx(Sv,{darkMode:a,updateType:"balance",items:b,onBulkUpdate:vt,onClose:()=>de(!1)}),ne&&n.jsxs("div",{className:"alert-success-balance",children:[n.jsx("strong",{children:"✅ Success!"})," ",ne]}),V&&n.jsxs("div",{className:"alert-error-balance",children:[n.jsx("strong",{children:"❌ Error!"})," ",V]}),n.jsxs("div",{className:"balance-section",children:[n.jsx("h5",{className:"balance-title",children:"� Add New Balance Account"}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"cashOnHand",className:"input-label",children:"💵 Cash On Hand"}),n.jsx("input",{type:"number",id:"cashOnHand",name:"cashOnHand",value:Ce||"",onChange:K=>{const te=K.target.value===""?0:Number(K.target.value);Ve(te>=0?te:0),ye({...fe,cashOnHand:""})},placeholder:"Enter cash amount",className:`balance-input ${fe.cashOnHand?"error":""}`,disabled:N}),fe.cashOnHand&&n.jsx("div",{className:"validation-error",children:fe.cashOnHand})]}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"bankAccountBalance",className:"input-label",children:"🏦 Bank Account Balance"}),n.jsx("input",{type:"number",id:"bankAccountBalance",name:"bankAccountBalance",value:ie||"",onChange:K=>{const te=K.target.value===""?0:Number(K.target.value);q(te>=0?te:0),ye({...fe,bankAccountBalance:""})},placeholder:"Enter bank account balance",className:`balance-input ${fe.bankAccountBalance?"error":""}`,disabled:N}),fe.bankAccountBalance&&n.jsx("div",{className:"validation-error",children:fe.bankAccountBalance})]}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"savings",className:"input-label",children:"🐷 Savings"}),n.jsx("input",{type:"number",id:"savings",name:"savings",value:ve||"",onChange:K=>{const te=K.target.value===""?0:Number(K.target.value);Ee(te>=0?te:0),ye({...fe,savings:""})},placeholder:"Enter savings amount",className:`balance-input ${fe.savings?"error":""}`,disabled:N}),fe.savings&&n.jsx("div",{className:"validation-error",children:fe.savings})]}),fe.general&&n.jsx("div",{className:"validation-error",style:{textAlign:"center",fontSize:"16px"},children:fe.general}),n.jsxs("div",{style:{textAlign:"center",marginTop:"25px",display:"flex",justifyContent:"center",gap:"15px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{className:`btn-balance btn-set-balance ${N?"btn-disabled":""}`,onClick:ht,disabled:N,children:[N?n.jsx("span",{className:"loading-spinner-balance"}):"","🎯 Set Balance"]}),n.jsx("button",{className:`btn-balance btn-reset-balance ${N?"btn-disabled":""}`,onClick:ct,disabled:N,children:"🔄 Reset Fields"}),b.length>1&&n.jsx("button",{className:"btn-balance btn-set-balance",onClick:()=>de(!0),disabled:N,title:"Update multiple accounts at once",children:"⚡ Bulk Update"})]})]}),A&&n.jsxs("div",{className:"financial-metrics-section",children:[n.jsx("h5",{className:"balance-title",children:"📈 Financial Health Dashboard"}),n.jsxs("div",{className:"monthly-inputs",children:[n.jsxs("div",{children:[n.jsx("label",{className:"input-label",children:"📊 Monthly Income"}),n.jsx("input",{type:"number",value:X,onChange:K=>oe(Number(K.target.value)),placeholder:"Enter monthly income",className:"balance-input"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"input-label",children:"💸 Monthly Expenses"}),n.jsx("input",{type:"number",value:Oe,onChange:K=>ke(Number(K.target.value)),placeholder:"Enter monthly expenses",className:"balance-input"})]})]}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-card",children:[n.jsx("div",{className:"metric-value",style:{color:"#38a169"},children:p(A.totalAssets)}),n.jsx("div",{className:"metric-label",children:"Total Assets"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:`metric-value health-score ${A.financialHealthScore>=80?"":A.financialHealthScore>=60?"warning":"critical"}`,children:[A.financialHealthScore,"/100"]}),n.jsx("div",{className:"metric-label",children:"Health Score"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-value",style:{color:"#4299e1"},children:[A.liquidityRatio.toFixed(1),"%"]}),n.jsx("div",{className:"metric-label",children:"Liquidity Ratio"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsx("div",{className:"metric-value",style:{color:"#8b5cf6"},children:A.emergencyFundStatus.months.toFixed(1)}),n.jsx("div",{className:"metric-label",children:"Emergency Fund (Months)"})]})]}),n.jsx("div",{style:{textAlign:"center"},children:n.jsxs("button",{className:"btn-balance btn-set-balance",onClick:()=>T(!se),children:[se?"🔼 Hide":"🔽 Show"," Financial Insights"]})})]}),se&&A&&n.jsxs("div",{className:"insights-section",children:[n.jsx("h5",{className:"balance-title",children:"💡 Financial Insights & Recommendations"}),Ze.generateFinancialInsights(A,b).map((K,te)=>n.jsxs("div",{className:`insight-card ${K.type}`,children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"10px"},children:K.title}),n.jsx("p",{style:{margin:0},children:K.message})]},te)),Ze.generateFinancialInsights(A,b).length===0&&n.jsxs("div",{className:"insight-card success",children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"10px"},children:"🎉 Great Financial Health!"}),n.jsx("p",{style:{margin:0},children:"Your financial metrics look healthy. Keep up the good work!"})]})]}),(i>0||o>0||c>0)&&n.jsxs("div",{className:"allocation-section",children:[n.jsx("h5",{className:"balance-title",children:"🎯 Smart Allocation Assistant"}),n.jsxs("div",{className:"preset-buttons",children:[n.jsx("button",{className:"btn-preset",onClick:()=>wt("emergency"),children:"🚨 Emergency Fund Preset"}),n.jsx("button",{className:"btn-preset",onClick:()=>wt("student"),children:"🎓 Student Budget Preset"}),n.jsx("button",{className:"btn-preset",onClick:()=>wt("family"),children:"👨‍👩‍👧‍👦 Family Budget Preset"})]}),me&&n.jsxs("div",{className:"allocation-suggestion",children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"15px"},children:"💡 Optimal Allocation Suggestion"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"15px",marginBottom:"15px"},children:[n.jsx("div",{children:n.jsxs("strong",{children:["💵 Cash: ",p(me.cash)]})}),n.jsx("div",{children:n.jsxs("strong",{children:["🏦 Bank: ",p(me.bank)]})}),n.jsx("div",{children:n.jsxs("strong",{children:["🐷 Savings: ",p(me.savings)]})})]}),n.jsxs("div",{style:{marginBottom:"15px"},children:[n.jsx("strong",{children:"Reasoning:"}),n.jsx("ul",{style:{margin:"5px 0",paddingLeft:"20px"},children:me.reasoning.map((K,te)=>n.jsx("li",{children:K},te))})]}),n.jsx("button",{className:"btn-balance btn-set-balance",onClick:Ot,children:"✨ Apply Suggestion"})]}),b.length>1&&n.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:n.jsx("button",{className:"btn-balance btn-reset-balance",onClick:Qt,children:"🔄 Consolidate Low Balance Accounts"})})]}),n.jsxs("div",{className:"overview-section",children:[n.jsx("h5",{className:"overview-title",children:"📊 Account Overview"}),N&&b.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading your account data..."})]}):n.jsx("div",{className:"balance-table",children:n.jsxs("table",{className:"table table-striped table-hover table-bordered",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"🔢 ACC#"}),n.jsx("th",{children:"💵 Cash on Hand"}),n.jsx("th",{children:"🏦 Bank Balance"}),n.jsx("th",{children:"🐷 Savings"}),n.jsx("th",{children:"💰 Total"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsx("tbody",{children:b.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"6",className:"no-balances",children:n.jsxs("div",{children:[n.jsx("h4",{children:"🎯 Start Your Financial Journey!"}),n.jsx("p",{children:"Create your first balance account above to begin tracking your finances"}),n.jsx("small",{children:"💡 Pro tip: Separate your money into different categories for better organization"})]})})}):b.map((K,te)=>n.jsx("tr",{children:W===te?n.jsxs(n.Fragment,{children:[n.jsx("td",{className:"d-none d-md-table-cell","data-label":"ACC#",children:n.jsx("span",{className:"account-number",children:te+1})}),n.jsxs("td",{"data-label":"Cash on Hand",children:[n.jsx("input",{type:"number",name:"cash_on_hand",value:$.cash_on_hand,onChange:nt,className:"edit-input-table",min:"0"}),H&&H.warnings&&H.warnings.length>0&&n.jsxs("div",{style:{fontSize:"0.8rem",color:"#f59e0b",marginTop:"2px"},children:["⚠️ ",H.warnings[0]]})]}),n.jsxs("td",{"data-label":"Bank Acc Balance",children:[n.jsx("input",{type:"number",name:"bank_account_balance",value:$.bank_account_balance,onChange:nt,className:"edit-input-table",min:"0"}),H&&H.suggestions&&H.suggestions.length>0&&n.jsxs("div",{style:{fontSize:"0.8rem",color:"#4299e1",marginTop:"2px"},children:["💡 ",H.suggestions[0]]})]}),n.jsx("td",{"data-label":"Savings",children:n.jsx("input",{type:"number",name:"savings",value:$.savings,onChange:nt,className:"edit-input-table",min:"0"})}),n.jsx("td",{className:"d-none d-md-table-cell",children:n.jsx("span",{className:"total-amount",children:p($.cash_on_hand+$.bank_account_balance+$.savings)})}),n.jsx("td",{"data-label":"Actions",children:n.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{onClick:()=>je(te),className:`btn-table btn-save ${N?"btn-disabled":""}`,disabled:N,children:[N?n.jsx("span",{className:"loading-spinner-balance"}):"","💾 Save"]}),n.jsx("button",{onClick:()=>{F(null),Me("Edit cancelled")},className:"btn-table btn-cancel",children:"❌ Cancel"})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("td",{className:"d-none d-md-table-cell","data-label":"ACC#",children:n.jsx("span",{className:"account-number",children:te+1})}),n.jsx("td",{"data-label":"Cash on Hand",children:n.jsx("span",{className:"currency-amount",children:p(K.cash_on_hand)})}),n.jsx("td",{"data-label":"Bank Acc Balance",children:n.jsx("span",{className:"currency-amount",children:p(K.bank_account_balance)})}),n.jsx("td",{"data-label":"Savings",children:n.jsx("span",{className:"currency-amount",children:p(K.savings)})}),n.jsx("td",{className:"d-none d-md-table-cell",children:n.jsx("span",{className:"total-amount",children:p(K.total!==void 0?K.total:0)})}),n.jsx("td",{"data-label":"Actions",children:n.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsx("button",{onClick:()=>{F(te),L(K)},className:"btn-table btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>at(te),className:`btn-table ${be===te?"confirm-delete":"btn-delete"}`,children:be===te?"⚠️ Confirm?":"🗑️ Delete"})]})})]})},te))})]})})]})]})}function Nv({darkMode:a,budget:i,setBudget:r,validated:o,setValidated:l,formatCurrency:c,items:u,setItems:h,name:p,setName:x,amount:v,setAmount:b,newBudget:O,setNewBudget:W,error:F,setError:$,editingIndex:L,setEditingIndex:V,editAmount:D,setEditAmount:N,date:C,setDate:ne,totalBudgetAmount:re,parseDate:be}){const ae=ie=>{if(!ie)return"";const q=new Date(ie),ve=String(q.getMonth()+1).padStart(2,"0"),Ee=String(q.getDate()).padStart(2,"0"),yt=q.getFullYear();return`${ve}-${Ee}-${yt}`},[fe,ye]=S.useState(new Date),[A,J]=S.useState("");S.useState("");const[se,T]=S.useState(!1),[X,oe]=S.useState(""),[Oe,ke]=S.useState(null);S.useEffect(()=>{xe()},[]),S.useEffect(()=>{if(X){const ie=setTimeout(()=>oe(""),3e3);return()=>clearTimeout(ie)}},[X]),S.useEffect(()=>{if(F){const ie=setTimeout(()=>$(""),5e3);return()=>clearTimeout(ie)}},[F]);const me=ie=>{oe(ie),$("")},U=ie=>{$(ie),oe("")},xe=async()=>{try{T(!0),console.log("BUDGET COMPONENT"),console.log("Fetching budgets...");const q=(await bt.get("/budgets")).data.map(ve=>({...ve,date:ae(be(ve.date))}));console.log("Adjusted budgets:",q),h(q)}catch(ie){console.error("Error fetching budgets:",ie),U("Failed to load budgets. Please try again.")}finally{T(!1)}},de=async()=>{if(!p||!v||!C){U("Please fill in all fields: name, amount, and date");return}if(isNaN(v)||parseFloat(v)<=0){U("Please enter a valid positive amount");return}const ie={item_name:p.trim(),amount:parseFloat(v),date:C};try{T(!0);const q=await bt.post("/budgets",ie);h([...u,q.data]),x(""),b(""),ne(""),me(`Successfully added "${p}" to budget!`)}catch(q){console.error("Error adding budget:",q),U("Failed to add budget item. Please try again.")}finally{T(!1)}},H=ie=>{V(ie),N(u[ie].amount),ye(u[ie].date)},Q=async ie=>{if(!D||isNaN(D)||parseFloat(D)<=0){U("Please enter a valid positive amount");return}if(!fe){U("Please select a valid date");return}const q={item_name:u[ie].item_name,amount:parseFloat(D),date:new Date(fe).toISOString().split("T")[0]};try{T(!0),await bt.put(`/budgets/${u[ie].id}`,q);const ve=u.map((Ee,yt)=>yt===ie?{...Ee,...q,date:ae(q.date)}:Ee);h(ve),me(`Successfully updated "${u[ie].item_name}"!`),V(null)}catch(ve){console.error("Error saving budget:",ve),U("Failed to save budget changes. Please try again.")}finally{T(!1)}},le=()=>{V(null),N(""),ye(ae(new Date)),me("Edit cancelled")},ue=async()=>{if(!O||!A){U("Please enter both budget amount and date"),l(!1);return}if(isNaN(O)||parseFloat(O)<=0){U("Please enter a valid positive budget amount"),l(!1);return}const ie={item_name:"Set Budget",amount:parseFloat(O),date:A};try{T(!0);const q=await bt.post("/budgets",ie);console.log("Response data:",q.data),h([...u,q.data]),r(O),J(A),l(!0),me(`Main budget of ${c(O)} has been set!`)}catch(q){console.error("Error adding budget:",q),U("Failed to set main budget. Please try again."),l(!1)}finally{T(!1)}},Ce=async()=>{const ie=u.find(q=>q.item_name==="Set Budget");if(ie){const q={...ie,amount:"",date:""};console.log("Updated Item:",q);try{T(!0);const ve=await bt.put(`/budgets/${ie.id}`,q);console.log("Response from server:",ve.data),h(u.map(Ee=>Ee.item_name==="Set Budget"?q:Ee)),W(""),J(""),r(0),l(!1),me("Main budget has been reset!"),console.log("Items after reset:",u)}catch(ve){console.log("Error resetting budget:",ve),U("Failed to reset budget. Please try again.")}finally{T(!1)}}else U("No main budget found to reset"),console.log("Set Budget item not found")},Ve=async ie=>{if(Oe===ie)try{T(!0),await bt.delete(`/budgets/${u[ie].id}`);const q=u.filter((ve,Ee)=>Ee!==ie);h(q),me(`Successfully deleted "${u[ie].item_name}"!`),ke(null)}catch(q){console.log("Error deleting budget:",q),U("Failed to delete budget item. Please try again.")}finally{T(!1)}else ke(ie),setTimeout(()=>ke(null),3e3)};return n.jsxs("div",{className:"budget-container",children:[n.jsx("style",{children:`
                .budget-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                .budget-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .budget-header h5 {
                    font-size: 1.8rem;
                    margin: 0 0 10px 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .budget-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin: 0;
                }

                .budget-section {
                    background: ${a?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 20px;
                    padding: 40px;
                    margin-bottom: 30px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
                    transition: all 0.3s ease;
                }

                .budget-section:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .budget-title {
                    color: ${a?"#e2e8f0":"#2d3748"};
                    font-size: 1.2em;
                    font-weight: 700;
                    margin-bottom: 30px;
                    text-align: center;
                }

                .input-group {
                    display: flex;
                    gap: 15px;
                    align-items: center;
                    flex-wrap: nowrap;
                    justify-content: center;
                }

                .enhanced-input {
                    flex: 1;
                    min-width: 200px;
                    padding: 15px 20px;
                    border: 2px solid ${a?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${a?"#2d3748":"#ffffff"};
                    color: ${a?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .enhanced-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: translateY(-2px);
                }

                .enhanced-input::placeholder {
                    color: ${a?"#a0aec0":"#718096"};
                    font-weight: 500;
                }

                /* Date input styling for dark mode */
                input[type="date"].enhanced-input {
                    color-scheme: ${a?"dark":"light"};
                    position: relative;
                    cursor: pointer;
                }

                input[type="date"].enhanced-input::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    ${a?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* For Firefox */
                input[type="date"].enhanced-input::-moz-calendar-picker-indicator {
                    cursor: pointer;
                    ${a?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* Additional styling for better visibility in dark mode */
                ${a?`
                input[type="date"].enhanced-input::-webkit-inner-spin-button,
                input[type="date"].enhanced-input::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                
                input[type="date"].enhanced-input::-webkit-datetime-edit {
                    color: #e2e8f0 !important;
                }
                
                input[type="date"].enhanced-input::-webkit-datetime-edit-fields-wrapper {
                    background: transparent !important;
                }
                
                input[type="date"].enhanced-input::-webkit-datetime-edit-text {
                    color: #e2e8f0 !important;
                }
                
                input[type="date"].enhanced-input::-webkit-datetime-edit-year-field,
                input[type="date"].enhanced-input::-webkit-datetime-edit-month-field,
                input[type="date"].enhanced-input::-webkit-datetime-edit-day-field {
                    color: #e2e8f0 !important;
                }
                `:""}

                .enhanced-input.is-valid {
                    border-color: #38a169;
                    box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.3);
                }

                .enhanced-input.is-invalid {
                    border-color: #e53e3e;
                    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
                }

                .btn-enhanced {
                    padding: 12px 20px;
                    border: none;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 0 5px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    white-space: nowrap;
                    min-width: auto;
                }

                .btn-primary-enhanced {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                }

                .btn-primary-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(56, 161, 105, 0.6);
                }

                .btn-warning-enhanced {
                    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
                }

                .btn-warning-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6);
                }

                .btn-success-enhanced {
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
                }

                .btn-success-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(66, 153, 225, 0.6);
                }

                .btn-danger-enhanced {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 101, 101, 0.4);
                }

                .btn-danger-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(245, 101, 101, 0.6);
                }

                .btn-secondary-enhanced {
                    background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(160, 174, 192, 0.4);
                }

                .btn-secondary-enhanced:hover:not(.btn-disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(160, 174, 192, 0.6);
                }

                .btn-disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .alert-success {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 12px;  
                    margin-bottom: 20px;
                    font-weight: 600;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    animation: slideIn 0.5s ease;
                }

                .alert-danger {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    font-weight: 600;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(245, 101, 101, 0.4);
                    animation: slideIn 0.5s ease;
                }

                .table-enhanced {
                    background: ${a?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .table-enhanced thead th {
                    background: ${a?"#4a5568":"#667eea"};
                    color: white;
                    font-weight: 700;
                    padding: 18px 15px;
                    border: none;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    font-size: 0.9rem;
                    border-bottom: 3px solid ${a?"#2d3748":"#5a67d8"};
                }

                .table-enhanced tbody tr {
                    transition: all 0.3s ease;
                    border-bottom: 1px solid ${a?"#4a5568":"#e2e8f0"};
                }

                .table-enhanced tbody tr:hover {
                    background: ${a?"#4a5568":"#f7fafc"};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-enhanced tbody td {
                    padding: 18px 15px;
                    vertical-align: middle;
                    border: none;
                    color: ${a?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-right: 8px;
                }

                .confirm-delete {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%) !important;
                    animation: pulse 1s infinite;
                    border: 2px solid #e53e3e;
                }

                .total-row {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    font-weight: 700;
                }

                .total-row td {
                    color: white !important;
                    font-size: 1.1rem;
                }

                .no-items {
                    text-align: center;
                    padding: 60px 20px;
                    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                    color: white;
                    border-radius: 15px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
                }

                .loading-container {
                    text-align: center;
                    padding: 40px;
                    color: ${a?"#e2e8f0":"#2d3748"};
                }

                .large-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid ${a?"#4a5568":"#e2e8f0"};
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 15px;
                }

                .item-name-badge {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-weight: 600;
                    display: inline-block;
                    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
                }

                .main-budget-badge {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-weight: 600;
                    display: inline-block;
                    box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
                }

                .amount-display {
                    font-weight: 700;
                    font-size: 1.1em;
                    color: ${a?"#68d391":"#38a169"};
                }

                .date-display {
                    color: ${a?"#a0aec0":"#718096"};
                    font-weight: 500;
                }

                .btn-table {
                    padding: 8px 12px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 2px;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    white-space: nowrap;
                    min-width: auto;
                }

                .btn-edit-table {
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(66, 153, 225, 0.4);
                }

                .btn-edit-table:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.6);
                }

                .btn-delete-table {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(245, 101, 101, 0.4);
                }

                .btn-delete-table:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(245, 101, 101, 0.6);
                }

                .btn-save-table {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
                }

                .btn-save-table:hover:not(.btn-disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.6);
                }

                .btn-cancel-table {
                    background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(160, 174, 192, 0.4);
                }

                .btn-cancel-table:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(160, 174, 192, 0.6);
                }

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                @media (max-width: 768px) {
                    .input-group {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    
                    .enhanced-input {
                        min-width: unset;
                        margin-bottom: 10px;
                    }
                    
                    .btn-enhanced {
                        width: 100%;
                        margin: 5px 0;
                        padding: 10px 16px;
                        font-size: 0.9rem;
                    }
                    
                    .budget-section {
                        padding: 20px;
                    }
                    
                    .btn-table {
                        padding: 4px 8px;
                        font-size: 0.7rem;
                        gap: 2px;
                    }
                }
            `}),n.jsxs("div",{className:"budget-header",children:[n.jsx("h5",{children:"💰 Budget Management"}),n.jsx("p",{className:"budget-subtitle",children:"Plan and track your financial allocations"})]}),X&&n.jsxs("div",{className:"alert-success",children:[n.jsx("strong",{children:"✅ Success!"})," ",X]}),F&&n.jsxs("div",{className:"alert-danger",children:[n.jsx("strong",{children:"❌ Error!"})," ",F]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"🎯 Set Main Budget"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"Set budget",value:isNaN(O)?"":O,onChange:ie=>{const q=ie.target.value;W(q===""?"":parseFloat(q))},className:`enhanced-input ${o?"is-valid":"is-invalid"}`,placeholder:"💵 Enter Budget Amount",disabled:se}),n.jsx("input",{type:"date",value:A,onChange:ie=>J(ie.target.value),className:"enhanced-input",id:"budget-date",name:"budget-date",disabled:se}),n.jsxs("button",{className:`btn-enhanced btn-primary-enhanced ${se?"btn-disabled":""}`,onClick:ue,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","🎯 Set Budget"]}),n.jsxs("button",{className:`btn-enhanced btn-warning-enhanced ${se?"btn-disabled":""}`,onClick:Ce,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","🔄 Reset"]})]})]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"📝 Add New Budget Item"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",placeholder:"📝 Item Name (e.g., Groceries, Entertainment)",value:p,onChange:ie=>x(ie.target.value),className:"enhanced-input",id:"item-name",name:"item-name",disabled:se}),n.jsx("input",{type:"number",placeholder:"💵 Amount",value:isNaN(v)?"":v,onChange:ie=>{const q=ie.target.value;b(q===""?"":parseFloat(q))},className:"enhanced-input",id:"item-amount",name:"item-amount",disabled:se}),n.jsx("input",{type:"date",value:C,onChange:ie=>ne(ie.target.value),className:"enhanced-input",id:"item-date",name:"item-date",disabled:se}),n.jsxs("button",{className:`btn-enhanced btn-success-enhanced ${se?"btn-disabled":""}`,onClick:de,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","✨ Add Item"]})]})]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"📊 Budget Overview"}),se&&u.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading your budget data..."})]}):n.jsx("div",{className:"table-enhanced",children:n.jsxs("table",{className:"table table-striped table-hover table-bordered responsive-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"📝 Item Name"}),n.jsx("th",{children:"💰 Amount"}),n.jsx("th",{children:"📅 Date"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsxs("tbody",{children:[u.length>0?u.map((ie,q)=>n.jsxs("tr",{children:[n.jsx("td",{"data-label":"Item Name",children:ie.item_name==="Set Budget"?n.jsxs("span",{className:"main-budget-badge",children:["🎯 ",ie.item_name]}):n.jsxs("span",{className:"item-name-badge",children:["📌 ",ie.item_name]})}),n.jsx("td",{"data-label":"Amount",children:L===q?n.jsx("input",{type:"number",value:D,onChange:ve=>N(ve.target.value),className:"enhanced-input",style:{width:"150px",padding:"8px 12px"}}):n.jsx("span",{className:"amount-display",children:c(ie.amount)})}),n.jsx("td",{"data-label":"Date",children:L===q?n.jsx("input",{type:"date",value:fe,onChange:ve=>ye(ve.target.value),className:"enhanced-input",style:{width:"170px",padding:"8px 12px"}}):n.jsxs("span",{className:"date-display",children:["📅 ",ie.date||"No date set"]})}),n.jsx("td",{"data-label":"Actions",children:L===q?n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{className:`btn-table btn-save-table ${se?"btn-disabled":""}`,onClick:()=>Q(q),disabled:se,children:[se?n.jsx("span",{className:"loading-spinner",style:{width:"12px",height:"12px"}}):"","💾 Save"]}),n.jsx("button",{className:"btn-table btn-cancel-table",onClick:le,children:"❌ Cancel"})]}):n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsx("button",{className:"btn-table btn-edit-table",onClick:()=>H(q),children:"✏️ Edit"}),n.jsx("button",{className:`btn-table ${Oe===q?"confirm-delete":"btn-delete-table"}`,onClick:()=>Ve(q),children:Oe===q?"⚠️ Confirm?":"🗑️ Delete"})]})})]},q)):n.jsx("tr",{children:n.jsx("td",{colSpan:"4",className:"no-items",children:n.jsxs("div",{children:[n.jsx("h4",{children:"🎯 Start Your Budget Journey!"}),n.jsx("p",{children:"Set your main budget above, then add specific budget categories!"}),n.jsx("small",{children:"💡 Pro tip: Create categories like groceries, entertainment, utilities, savings"})]})})}),u.length>0&&n.jsxs("tr",{className:"total-row",children:[n.jsx("td",{children:n.jsx("strong",{children:"🏆 TOTAL BUDGET"})}),n.jsx("td",{children:n.jsx("strong",{children:c(re)})}),n.jsx("td",{colSpan:"2",children:n.jsx("small",{children:"💡 This represents your complete budget allocation"})})]})]})]})})]})]})}class Cv{constructor(){this.insights=[],this.alerts=[],this.recommendations=[],this.userPreferences=this.loadUserPreferences(),this.spendingPatterns=this.loadSpendingPatterns()}loadUserPreferences(){try{return JSON.parse(localStorage.getItem("dashboardAI_preferences"))||{riskTolerance:"medium",savingsGoal:20,notificationLevel:"normal",preferredCategories:[]}}catch{return{riskTolerance:"medium",savingsGoal:20,notificationLevel:"normal",preferredCategories:[]}}}loadSpendingPatterns(){try{return JSON.parse(localStorage.getItem("dashboardAI_patterns"))||{}}catch{return{}}}saveUserPreferences(){localStorage.setItem("dashboardAI_preferences",JSON.stringify(this.userPreferences))}saveSpendingPatterns(){localStorage.setItem("dashboardAI_patterns",JSON.stringify(this.spendingPatterns))}generateFinancialInsights(i,r,o,l,c){const u=[];new Date().getMonth(),new Date().getFullYear();const h=this.calculateMonthlySpending(i),p=h.reduce((b,O)=>b+O.amount,0)/h.length;p>o*.8&&u.push({type:"warning",title:"⚠️ High Spending Alert",message:`You're spending ${(p/o*100).toFixed(0)}% of your budget monthly. Consider reviewing your expenses.`,confidence:85,actionable:!0,action:"View Category Details",priority:"high"});const v=this.analyzeCategorySpending(i)[0];if(v&&v.percentage>40&&u.push({type:"info",title:"📊 Spending Pattern Insight",message:`${v.percentage.toFixed(0)}% of your spending is on ${v.category}. Consider reviewing this category's transactions.`,confidence:92,actionable:!0,action:"View Category Details",priority:"medium"}),c.length>0){const b=c.reduce((W,F)=>W+F.total_price,0),O=b/(r+b)*100;O<20&&u.push({type:"opportunity",title:"🚀 Investment Opportunity",message:`Only ${O.toFixed(0)}% of your portfolio is invested. Consider increasing investments for better returns.`,confidence:78,actionable:!0,action:"Explore Investments",priority:"low"})}if(l.length>0){const b=l.filter(O=>O.saved/O.target<.3);b.length>0&&u.push({type:"motivation",title:"🎯 Goal Achievement Tip",message:`You have ${b.length} goals with low progress. Consider reviewing your goals and adjusting target amounts.`,confidence:88,actionable:!0,action:"Review Goal Strategy",priority:"medium"})}return this.insights=u,u}generatePredictions(i,r,o){const l={},u=i.filter(h=>{const p=new Date(h.date),x=new Date;return x.setMonth(x.getMonth()-3),p>=x}).reduce((h,p)=>h+p.amount,0)/12;return l.nextMonthSpending=u*4.33,l.nextMonthSpending>0&&(l.budgetRunway=Math.floor(r/l.nextMonthSpending)),l.categoryTrends=this.predictCategoryTrends(i),l.goalCompletionDates=this.predictGoalCompletion(i),l}generateSmartAlerts(i,r,o,l){const c=[],u=new Date,p=this.getCurrentMonthSpending(i)/o*100;p>90?c.push({type:"critical",title:"🚨 Budget Almost Exceeded",message:`You've used ${p.toFixed(0)}% of your monthly budget!`,timestamp:u,urgent:!0}):p>75&&c.push({type:"warning",title:"⚠️ Budget Alert",message:`You've used ${p.toFixed(0)}% of your monthly budget. Consider slowing down spending.`,timestamp:u,urgent:!1});const x=this.detectUnusualSpending(i);return x.length>0&&c.push({type:"info",title:"🔍 Unusual Spending Detected",message:`Detected ${x.length} transactions that seem unusual for your spending pattern.`,timestamp:u,urgent:!1,details:x}),l.forEach(v=>{if(v.deadline){const b=Math.ceil((new Date(v.deadline)-u)/864e5),O=v.saved/v.target*100;b<=30&&O<80&&c.push({type:"warning",title:"⏰ Goal Deadline Approaching",message:`"${v.name}" has ${b} days left but only ${O.toFixed(0)}% complete.`,timestamp:u,urgent:b<=7})}}),this.alerts=c,c}generateRecommendations(i,r,o,l,c){const u=[],p=this.analyzeCategorySpending(i).filter(v=>v.percentage>25);p.length>0&&u.push({type:"optimization",title:"💡 Budget Optimization",description:`Consider reducing spending in ${p[0].category} by 10% to free up $${(p[0].amount*.1).toFixed(2)} monthly.`,impact:"medium",effort:"low",category:"budgeting"}),c.length>0&&[...new Set(c.map(b=>b.name))].length<3&&u.push({type:"diversification",title:"🚀 Diversify Your Portfolio",description:"Consider adding different crypto assets to reduce risk and increase potential returns.",impact:"high",effort:"medium",category:"investing"});const x=this.calculateSavingsRate(i,r);return x<20&&u.push({type:"savings",title:"💰 Increase Savings Rate",description:`Current savings rate is ${x.toFixed(0)}%. Try to save at least 20% for better financial health.`,impact:"high",effort:"medium",category:"savings"}),this.recommendations=u,u}processNaturalLanguageQuery(i,r,o,l,c,u){var p,x;const h=i.toLowerCase().trim();if(h.includes("spent")||h.includes("spending")){if(h.includes("month")||h.includes("monthly")){const v=this.getCurrentMonthSpending(r);return{type:"spending",answer:`You've spent $${v.toFixed(2)} this month.`,data:{amount:v,period:"month"}}}if(h.includes("category")){const v=this.analyzeCategorySpending(r);return{type:"category_spending",answer:`Your top spending category is ${(p=v[0])==null?void 0:p.category} with $${(x=v[0])==null?void 0:x.amount.toFixed(2)}.`,data:v}}}if(h.includes("balance")||h.includes("money left"))return{type:"balance",answer:`Your current balance is $${o.toFixed(2)}.`,data:{balance:o}};if(h.includes("goal")||h.includes("target")){if(c.length===0)return{type:"goals",answer:"You haven't set any financial goals yet. Consider adding some!",data:{goalsCount:0}};const v=c.reduce((b,O)=>b+O.saved/O.target,0)/c.length*100;return{type:"goals",answer:`You have ${c.length} goals with an average progress of ${v.toFixed(0)}%.`,data:{goalsCount:c.length,avgProgress:v}}}if(h.includes("investment")||h.includes("crypto")||h.includes("portfolio")){if(u.length===0)return{type:"investments",answer:"You don't have any investments yet. Consider starting your crypto journey!",data:{investmentCount:0}};const v=u.reduce((b,O)=>b+O.total_price,0);return{type:"investments",answer:`Your crypto portfolio is worth $${v.toFixed(2)} across ${u.length} assets.`,data:{totalValue:v,assetCount:u.length}}}return{type:"unknown",answer:"I'm not sure about that. Try asking about your spending, balance, goals, or investments!",data:null}}calculateMonthlySpending(i){const r={};return i.forEach(o=>{const l=new Date(o.date),c=`${l.getFullYear()}-${l.getMonth()}`;r[c]||(r[c]=0),r[c]+=o.amount}),Object.entries(r).map(([o,l])=>({month:o,amount:l}))}getCurrentMonthSpending(i){const r=new Date,o=r.getMonth(),l=r.getFullYear();return i.filter(c=>{const u=new Date(c.date);return u.getMonth()===o&&u.getFullYear()===l}).reduce((c,u)=>c+u.amount,0)}analyzeCategorySpending(i){const r={},o=i.reduce((l,c)=>l+c.amount,0);return i.forEach(l=>{r[l.category]||(r[l.category]=0),r[l.category]+=l.amount}),Object.entries(r).map(([l,c])=>({category:l,amount:c,percentage:c/o*100})).sort((l,c)=>c.amount-l.amount)}detectUnusualSpending(i){const r=i.slice(-30),l=r.reduce((c,u)=>c+u.amount,0)/r.length*2;return i.filter(c=>c.amount>l).slice(-5)}calculateSavingsRate(i,r){const l=i.reduce((c,u)=>c+u.amount,0)+r;return l===0?0:r/l*100}predictCategoryTrends(i){const r={},o=new Date;return o.setMonth(o.getMonth()-3),i.forEach(l=>{const u=new Date(l.date)>=o;r[l.category]||(r[l.category]={recent:0,old:0}),u?r[l.category].recent+=l.amount:r[l.category].old+=l.amount}),Object.entries(r).map(([l,c])=>({category:l,trend:c.recent>c.old?"increasing":"decreasing",change:c.old>0?(c.recent-c.old)/c.old*100:0}))}predictGoalCompletion(i){const r=this.calculateMonthlySpending(i).reduce((o,l)=>o+l.amount,0)/12*.2;return{avgMonthlySavings:r,estimatedMonthsToGoal:o=>Math.ceil(o/r)}}}const la=new Cv,Ev=a=>a.sort((i,r)=>{const o={critical:3,warning:2,info:1};return(o[r.type]||0)-(o[i.type]||0)}),Av=({transactions:a,balance:i,budget:r,goals:o,investments:l,darkMode:c})=>{var ye;console.log("🔍 AIInsightsPanel rendering...",{transactions:a,balance:i,budget:r,darkMode:c});const u=rr(),[h,p]=S.useState([]),[x,v]=S.useState([]),[b,O]=S.useState([]),[W,F]=S.useState({}),[$,L]=S.useState(""),[V,D]=S.useState(null),[N,C]=S.useState("insights"),[ne,re]=S.useState(!1),be=A=>{switch(A){case"Set Category Budget":case"Review Budget":case"Monitor Spending":u("/budget");break;case"View Category Details":case"Review Expenses":case"Review Categories":u("/transactions");break;case"Explore Investments":case"Invest Surplus":case"Explore Diversification":u("/investments");break;case"Set New Goal":case"Boost Savings":case"Optimize Savings":case"Review Goal Strategy":u("/goals");break;case"Analyze Trend":u("/transactions");break;default:console.log("Action not implemented:",A),A.toLowerCase().includes("budget")?u("/budget"):A.toLowerCase().includes("investment")?u("/investments"):A.toLowerCase().includes("goal")?u("/goals"):u("/transactions")}};S.useEffect(()=>{const A=async()=>{re(!0);try{const J=la.generateFinancialInsights(a,i,r,o,l);p(J);const se=Ev(la.generateSmartAlerts(a,i,r,o));v(se);const T=la.generateRecommendations(a,i,r,o,l);O(T);const X=la.generatePredictions(a,i,r);F(X)}catch(J){console.error("Error generating AI insights:",J)}finally{re(!1)}};a.length>0&&A()},[a,i,r,o,l]);const ae=()=>{if($.trim()){const A=la.processNaturalLanguageQuery($,a,i,r,o,l);D(A),L("")}},fe=A=>{A.key==="Enter"&&ae()};return n.jsxs("div",{className:`ai-insights-panel ${c?"ai-dark":"ai-light"}`,children:[n.jsx("style",{children:`
        /* CRITICAL OVERRIDE - FORCE MOBILE LAYOUT IMMEDIATELY */
        .ai-insights-panel .ai-tabs {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
          align-items: stretch !important;
          gap: 10px !important;
        }
        
        .ai-insights-panel .ai-tabs .ai-tab {
          width: 100% !important;
          display: flex !important;
          flex-direction: row !important;
          justify-content: flex-start !important;
          text-align: left !important;
          align-items: center !important;
          padding: 18px 20px !important;
        }

        .ai-insights-panel {
          margin-bottom: 25px;
          padding: 0;
          width: 100%;
          box-sizing: border-box;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Force mobile layout on all devices except very large screens */
        @media (max-width: 1399px) {
          .ai-insights-panel .ai-tabs {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          .ai-insights-panel .ai-tab {
            width: 100% !important;
            text-align: left !important;
            justify-content: flex-start !important;
          }
        }

        .ai-header {
          text-align: center !important;
          margin-bottom: 20px !important;
          padding: 20px !important;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          border-radius: 15px !important;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
          position: relative !important;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          z-index: 10 !important;
        }

        .ai-header h4 {
          margin: 0 !important;
          font-size: 1.4rem !important;
          font-weight: 700 !important;
          opacity: 1 !important;
          filter: none !important;
          text-shadow: none !important;
          color: white !important;
          display: block !important;
          visibility: visible !important;
          z-index: 100 !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .header-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .welcome-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .theme-toggle {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .ai-tabs {
          display: flex !important;
          flex-direction: column !important;
          gap: 10px;
          margin-bottom: 20px;
          background: ${c?"#4a5568":"#e2e8f0"};
          border-radius: 15px;
          padding: 15px;
          width: 100% !important;
          align-items: stretch !important;
        }

        /* FORCE MOBILE LAYOUT - THIS WILL OVERRIDE EVERYTHING */
        .ai-insights-panel .ai-tabs {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
          align-items: stretch !important;
        }

        .ai-insights-panel .ai-tabs .ai-tab {
          width: 100% !important;
          display: flex !important;
          flex-direction: row !important;
          justify-content: flex-start !important;
          text-align: left !important;
          align-items: center !important;
        }

        .ai-tab {
          padding: 18px 20px;
          text-align: left;
          border: none;
          background: ${c?"#2d3748":"#ffffff"};
          color: ${c?"#e2e8f0":"#2d3748"};
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 1rem;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
          border: 2px solid transparent;
        }

        .ai-tab.active {
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
          transform: translateY(-2px);
        }

        .ai-tab:hover:not(.active) {
          background: ${c?"#4a5568":"#f7fafc"};
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .tab-icon {
          font-size: 1.4rem;
          min-width: 28px;
          flex-shrink: 0;
        }

        .tab-content {
          flex: 1;
          text-align: left;
        }

        .tab-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 3px;
          color: inherit;
        }

        .tab-count {
          font-size: 0.9rem;
          opacity: 0.85;
          color: inherit;
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .ai-tab, .nl-query-btn, .action-btn {
            min-height: 44px;
          }
          
          .ai-tab:hover:not(.active) {
            background: none;
          }
          
          .nl-query-btn:hover, .action-btn:hover {
            transform: none;
            box-shadow: none;
          }
        }

        .nl-query-section {
          margin-bottom: 25px;
          padding: 20px;
          background: ${c?"#4a5568":"#ffffff"};
          border-radius: 12px;
          border: 2px solid ${c?"#718096":"#e2e8f0"};
        }

        .nl-query-container {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
        }

        .nl-query-input {
          flex: 1;
          min-width: 200px;
          padding: 15px;
          border: 2px solid ${c?"#718096":"#e2e8f0"};
          border-radius: 10px;
          font-size: 1rem;
          background: ${c?"#2d3748":"#ffffff"};
          color: ${c?"#e2e8f0":"#2d3748"};
          box-sizing: border-box;
        }

        .nl-query-input:focus {
          outline: none;
          border-color: #4299e1;
          box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3);
        }

        .nl-query-btn {
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .nl-query-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(66, 153, 225, 0.6);
        }

        .nl-response {
          margin-top: 15px;
          padding: 15px;
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          border-radius: 10px;
          font-weight: 600;
        }

        .insight-card, .alert-card, .recommendation-card {
          background: ${c?"#4a5568":"#ffffff"};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 15px;
          border-left: 5px solid;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .insight-card:hover, .alert-card:hover, .recommendation-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .insight-card.warning {
          border-left-color: #f59e0b;
        }

        .insight-card.info {
          border-left-color: #3b82f6;
        }

        .insight-card.opportunity {
          border-left-color: #10b981;
        }

        .insight-card.motivation {
          border-left-color: #8b5cf6;
        }

        .alert-card.critical {
          border-left-color: #ef4444;
          background: ${c?"linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)":"linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)"};
        }

        .alert-card.warning {
          border-left-color: #f59e0b;
          background: ${c?"linear-gradient(135deg, #78350f 0%, #92400e 100%)":"linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)"};
        }

        .alert-card.info {
          border-left-color: #3b82f6;
          background: ${c?"linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)":"linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"};
        }

        .recommendation-card {
          border-left-color: #6366f1;
          background: ${c?"linear-gradient(135deg, #312e81 0%, #3730a3 100%)":"linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"};
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .card-title {
          font-weight: 700;
          font-size: 1.1rem;
          color: ${c?"#e2e8f0":"#2d3748"};
          margin: 0;
          flex: 1;
          min-width: 0;
        }

        .confidence-badge {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .priority-badge {
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .priority-high {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
        }

        .priority-medium {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
        }

        .priority-low {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
        }

        .card-content {
          color: ${c?"#cbd5e0":"#4a5568"};
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .action-btn {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .predictions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .prediction-card {
          background: ${c?"#4a5568":"#ffffff"};
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .prediction-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .prediction-value {
          font-size: 2rem;
          font-weight: 700;
          color: #4299e1;
          margin: 10px 0;
        }

        .prediction-label {
          color: ${c?"#a0aec0":"#718096"};
          font-weight: 600;
        }

        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid ${c?"#4a5568":"#e2e8f0"};
          border-top: 4px solid #4299e1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .empty-state {
          text-align: center;
          padding: 40px;
          color: ${c?"#a0aec0":"#718096"};
        }

        .empty-state-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .ai-insights-panel {
            padding: 15px;
          }
          
          .predictions-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
          }
          
          .insight-card, .alert-card, .recommendation-card {
            padding: 15px;
          }
        }

        /* All Mobile and Tablet Styles */
        @media (max-width: 1399px) {
          .ai-insights-panel {
            padding: 12px;
            margin-bottom: 15px;
          }

          .ai-header {
            padding: 16px;
            margin-bottom: 16px;
          }

          .ai-header h4 {
            font-size: 1.1rem;
          }

          .ai-header p {
            font-size: 0.85rem !important;
          }

          .header-controls {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }

          .welcome-text {
            text-align: center;
            font-size: 0.9rem;
          }
          
          .ai-tabs {
            display: flex !important;
            flex-direction: column !important;
            gap: 10px;
            padding: 15px;
            margin-bottom: 16px;
          }
          
          .ai-tab {
            padding: 18px 20px !important;
            font-size: 1rem;
            text-align: left !important;
            justify-content: flex-start !important;
          }

          .tab-content {
            text-align: left !important;
          }

          .tab-title {
            font-size: 1rem;
          }

          .tab-count {
            font-size: 0.85rem;
          }
        
          .nl-query-section {
            padding: 15px;
            margin-bottom: 20px;
          }

          .nl-query-container {
            flex-direction: column;
            align-items: stretch;
          }

          .nl-query-input {
            margin-bottom: 10px;
            padding: 12px;
            font-size: 0.9rem;
          }

          .nl-query-btn {
            padding: 12px 20px;
            font-size: 0.9rem;
            align-self: stretch;
          }
          
          .predictions-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .prediction-card {
            padding: 15px;
          }

          .prediction-value {
            font-size: 1.5rem;
          }

          .insight-card, .alert-card, .recommendation-card {
            padding: 15px;
            margin-bottom: 12px;
          }

          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .card-title {
            font-size: 1rem;
          }

          .confidence-badge, .priority-badge {
            font-size: 0.75rem;
            padding: 3px 6px;
          }

          .action-btn {
            font-size: 0.85rem;
            padding: 8px 14px;
            width: 100%;
            margin-top: 10px;
          }

          .card-content {
            font-size: 0.9rem;
            margin-bottom: 12px;
          }

          .empty-state {
            padding: 30px 15px;
          }

          .empty-state-icon {
            font-size: 2.5rem;
          }

          .empty-state h5 {
            font-size: 1.1rem;
          }

          .empty-state p {
            font-size: 0.9rem;
          }
        }
        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .ai-insights-panel {
            padding: 10px;
          }

          .ai-header {
            padding: 12px;
          }

          .ai-header h4 {
            font-size: 1rem;
          }

          .nl-query-section {
            padding: 12px;
          }

          .ai-tabs {
            flex-direction: column !important;
            gap: 8px;
            padding: 12px;
          }

          .ai-tab {
            padding: 16px 18px !important;
            font-size: 0.95rem;
          }

          .tab-icon {
            font-size: 1.1rem;
          }

          .tab-title {
            font-size: 0.95rem;
          }

          .tab-count {
            font-size: 0.8rem;
          }
        }



        /* Large Desktop Styles Only */
        @media (min-width: 1400px) {
          .ai-tabs {
            flex-direction: row;
            align-items: center;
            gap: 12px;
            padding: 8px;
          }

          .ai-tab {
            flex: 1;
            text-align: center;
            padding: 14px 18px;
            justify-content: center;
          }

          .tab-content {
            text-align: center;
          }

          .header-controls {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 1200px) {
          .ai-insights-panel {
            max-width: 1200px;
            margin: 0 auto 25px;
          }

          .predictions-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
          }

          .ai-tabs {
            max-width: 800px;
            margin: 0 auto 25px;
          }
        }
      `}),n.jsxs("div",{className:"ai-header",children:[n.jsx("div",{style:{color:"white",fontSize:"1.4rem",fontWeight:"700",margin:"0 0 8px 0",display:"block",width:"100%",textAlign:"center",textShadow:"none",opacity:1},children:"AI Financial Assistant"}),n.jsx("div",{style:{margin:"0",fontSize:"15px",color:"rgba(255, 255, 255, 0.95)",display:"block",width:"100%",textAlign:"center",opacity:1},children:"Powered by intelligent insights and predictive analytics"})]}),n.jsxs("div",{className:"nl-query-section",children:[n.jsx("h5",{style:{color:c?"#e2e8f0":"#2d3748",marginBottom:"15px",fontWeight:"700"},children:"💬 Ask Your AI Assistant"}),n.jsxs("div",{className:"nl-query-container",children:[n.jsx("input",{type:"text",className:"nl-query-input",placeholder:"Ask me anything... 'How much did I spend this month?' or 'What's my investment performance?'",value:$,onChange:A=>L(A.target.value),onKeyPress:fe}),n.jsx("button",{className:"nl-query-btn",onClick:ae,children:"🔍 Ask AI"})]}),V&&n.jsxs("div",{className:"nl-response",children:[n.jsx("strong",{children:"🤖 AI Assistant:"})," ",V.answer]})]}),n.jsxs("div",{className:"ai-tabs",children:[n.jsxs("button",{className:`ai-tab ${N==="insights"?"active":""}`,onClick:()=>C("insights"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"💡"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Insights"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[h.length," available"]})]})]}),n.jsxs("button",{className:`ai-tab ${N==="alerts"?"active":""}`,onClick:()=>C("alerts"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"🚨"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Alerts"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[x.length," notifications"]})]})]}),n.jsxs("button",{className:`ai-tab ${N==="recommendations"?"active":""}`,onClick:()=>C("recommendations"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"💡"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Tips"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[b.length," suggestions"]})]})]}),n.jsxs("button",{className:`ai-tab ${N==="predictions"?"active":""}`,onClick:()=>C("predictions"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"🔮"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Predictions"}),n.jsx("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:"AI forecasts"})]})]})]}),ne&&n.jsx("div",{className:"loading-spinner",children:n.jsx("div",{className:"spinner"})}),!ne&&n.jsxs(n.Fragment,{children:[N==="insights"&&n.jsx("div",{children:h.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"💡"}),n.jsx("h5",{children:"No insights yet"}),n.jsx("p",{children:"Add more transactions to get personalized insights!"})]}):h.map((A,J)=>n.jsxs("div",{className:`insight-card ${A.type}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:A.title}),n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.jsxs("span",{className:"confidence-badge",children:[A.confidence,"% confident"]}),A.priority&&n.jsx("span",{className:`priority-badge priority-${A.priority}`,children:A.priority})]})]}),n.jsx("div",{className:"card-content",children:A.message}),A.actionable&&n.jsx("button",{className:"action-btn",onClick:()=>be(A.action),children:A.action})]},J))}),N==="alerts"&&n.jsx("div",{children:x.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"🚨"}),n.jsx("h5",{children:"No alerts"}),n.jsx("p",{children:"You're doing great! No urgent alerts at the moment."})]}):x.map((A,J)=>n.jsxs("div",{className:`alert-card ${A.type}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:A.title}),n.jsx("small",{style:{color:c?"#a0aec0":"#718096"},children:A.timestamp.toLocaleDateString()})]}),n.jsx("div",{className:"card-content",children:A.message})]},J))}),N==="recommendations"&&n.jsx("div",{children:b.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"💡"}),n.jsx("h5",{children:"No recommendations yet"}),n.jsx("p",{children:"Keep using the app to get personalized recommendations!"})]}):b.map((A,J)=>n.jsxs("div",{className:"recommendation-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:A.title}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("span",{className:`priority-badge priority-${A.impact==="high"?"high":A.impact==="medium"?"medium":"low"}`,children:[A.impact," impact"]}),n.jsxs("span",{className:`priority-badge priority-${A.effort==="high"?"high":A.effort==="medium"?"medium":"low"}`,children:[A.effort," effort"]})]})]}),n.jsx("div",{className:"card-content",children:A.description}),n.jsxs("small",{style:{color:c?"#a0aec0":"#718096"},children:["Category: ",A.category]})]},J))}),N==="predictions"&&n.jsxs("div",{className:"predictions-grid",children:[n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Next Month Spending"}),n.jsxs("div",{className:"prediction-value",children:["$",((ye=W.nextMonthSpending)==null?void 0:ye.toFixed(2))||"0.00"]}),n.jsx("small",{style:{color:c?"#a0aec0":"#718096"},children:"Based on your recent patterns"})]}),n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Budget Runway"}),n.jsxs("div",{className:"prediction-value",children:[W.budgetRunway||0," months"]}),n.jsx("small",{style:{color:c?"#a0aec0":"#718096"},children:"At current spending rate"})]}),n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Savings Trend"}),n.jsx("div",{className:"prediction-value",style:{color:W.nextMonthSpending<r*.8?"#10b981":"#ef4444"},children:W.nextMonthSpending<r*.8?"📈 Good":"📉 Review"}),n.jsx("small",{style:{color:c?"#a0aec0":"#718096"},children:"Based on budget vs spending"})]})]})]})]})};Cd.register(Dx,Ux,Bx,zx,Wx,Hx,qx,Yx,Gx,Vx);function Rv({transactions:a=[],balance:i=0,totalAmount:r,darkMode:o,formatCurrency:l,goals:c,setGoals:u,formatDate:h,goalsProgress:p,setGoalsProgress:x,totalBudgetAmount:v,parseDate:b,setItems:O,setBalances:W,setCashOnHand:F,setBankAccountBalance:$,setSavings:L,setTransactions:V,setAmounts:D,addedInvestments:N,setAddedInvestments:C}){var jn;const ne=rr();S.useState([]);const[re,be]=S.useState(0),[ae,fe]=S.useState(null),[ye,A]=S.useState(""),[J,se]=S.useState("line"),[T,X]=S.useState("all"),[oe,Oe]=S.useState(!0),[ke,me]=S.useState("all"),[U,xe]=S.useState(null),[de,H]=S.useState(!1),[Q,le]=S.useState(!0),[ue,Ce]=S.useState(null),[Ve,ie]=S.useState("cards"),[q,ve]=S.useState(!0),[Ee,yt]=S.useState(!1),[We,Ze]=S.useState(null),[qe,Ht]=S.useState("cards"),[Ie,St]=S.useState(!0),[Me,lt]=S.useState(!1);N.reduce((j,B)=>j+parseFloat(B.total_price),0).toFixed(2);const tt=p.reduce((j,B)=>j+parseFloat(B.saved||0),0),nt=v+parseFloat(re)+i+tt-r,je=(j,B)=>{const I=new Date;return j.filter(Ne=>{const Ae=new Date(Ne.date);switch(B){case"week":return I-Ae<=7*24*60*60*1e3;case"month":return I-Ae<=30*24*60*60*1e3;case"3months":return I-Ae<=90*24*60*60*1e3;default:return!0}})},at=(j,B)=>B==="all"?j:j.filter(I=>I.category&&I.category.toLowerCase()===B.toLowerCase()),vt=a.sort((j,B)=>new Date(j.date)-new Date(B.date)),ct=at(je(vt,T),ke),ht=ct.map(j=>({...j,date:h(b(j.date))})),Ot=["all",...new Set(a.map(j=>j.category).filter(Boolean))];S.useEffect(()=>{console.log("Loaded from Goal.jsx component"),bt.get("/goals").then(j=>{const B=j.data.map(I=>({...I,progress:I.saved/I.target*100}));x(B)}).catch(j=>{console.error("Error fetching goals:",j)})},[]),S.useEffect(()=>{console.log("Loaded from Budget.jsx component"),bt.get("/budgets").then(j=>{const B=j.data.map(I=>({...I,date:b(I.date)}));O(B)}).catch(j=>{console.error("Error fetching budgets:",j)})},[]),S.useEffect(()=>{console.log("Loaded from Balance.jsx component"),bt.get("/balance").then(j=>{if(Array.isArray(j.data)){const B=j.data.map(I=>({...I,total:I.cash_on_hand+I.bank_account_balance+I.savings,id:I.id}));if(W(B),B.length>0){const I=B[0];F(I.cash_on_hand),$(I.bank_account_balance),L(I.savings)}}else if(j.data&&typeof j.data=="object"){const B={...j.data,total:j.data.cash_on_hand+j.data.bank_account_balance+j.data.savings};W([B]),F(B.cash_on_hand),$(B.bank_account_balance),L(B.savings)}else console.error("Fetched data is not an array or object:",j.data)}).catch(j=>{console.error("Error fetching balances:",j)})},[]),S.useEffect(()=>{console.log("TRANSACTIONS COMPONENT"),console.log("Fetching transactions..."),bt.get("/transactions").then(j=>{console.log("Fetched transactions:",j.data),V(j.data)}).catch(j=>console.log("Error fetching transactions",j))},[]),S.useEffect(()=>{bt.get("/investments").then(j=>{console.log("Fetched from Investments:",j.data),C(j.data),wt(j.data)}).catch(j=>console.log("Error fetching investments",j))},[]);const wt=j=>{const B=j.reduce((I,Z)=>I+Z.total_price,0);be(B)};S.useEffect(()=>{wt(N)},[N]);const Qt=j=>{if(!N||!N[j]){console.error("Investment not found");return}const B=N[j].id;bt.delete(`/investments/${B}`).then(I=>{if(I.status===204){const Z=N.filter((Ne,Ae)=>Ae!==j);C(Z)}else console.error("Failed to delete the investment")}).catch(I=>{console.error("Error:",I)})},K=j=>{fe(j),A(N[j].amount)},te=j=>{const B=[...N],I=B[j],Z=parseFloat(ye);isNaN(Z)?console.error("Invalid amount:",ye):(I.amount=Z,I.pricePerUnit?I.total_price=Z*I.pricePerUnit:console.error("pricePerUnit is not defined for investment:",I),bt.put(`/investments/${I.id}`,{amount:I.amount,totalPrice:I.total_price}).then(Ne=>{C(B),fe(null),A("")}).catch(Ne=>{console.error("Error updating investment:",Ne)}))},he=()=>{fe(null),A("")},He=(()=>{const j=ht.map(Z=>Z.date),B=ht.map(Z=>parseFloat(Z.amount)),I={labels:j,datasets:[{label:"Transaction Amount ($)",data:B,borderColor:o?"rgba(255, 193, 7, 1)":"rgba(54, 162, 235, 1)",backgroundColor:o?"rgba(255, 193, 7, 0.2)":"rgba(54, 162, 235, 0.2)",borderWidth:3,pointRadius:6,pointHoverRadius:8,pointBackgroundColor:o?"rgba(255, 193, 7, 1)":"rgba(54, 162, 235, 1)",pointBorderColor:"#fff",pointBorderWidth:2,tension:.4,fill:J==="line"}]};if(J==="bar")I.datasets[0].backgroundColor=B.map((Z,Ne)=>`hsla(${Ne*137.5%360}, 70%, 60%, 0.8)`),I.datasets[0].borderColor=B.map((Z,Ne)=>`hsla(${Ne*137.5%360}, 70%, 50%, 1)`);else if(J==="doughnut"){const Z={};return ht.forEach(Ne=>{const Ae=Ne.category||"Uncategorized";Z[Ae]=(Z[Ae]||0)+parseFloat(Ne.amount)}),{labels:Object.keys(Z),datasets:[{label:"Amount by Category ($)",data:Object.values(Z),backgroundColor:Object.keys(Z).map((Ne,Ae)=>`hsla(${Ae*137.5%360}, 70%, 60%, 0.8)`),borderColor:Object.keys(Z).map((Ne,Ae)=>`hsla(${Ae*137.5%360}, 70%, 50%, 1)`),borderWidth:2,hoverOffset:4}]}}return I})(),Be=(()=>{const j={responsive:!0,maintainAspectRatio:!1,animation:{duration:oe?1e3:0,easing:"easeInOutQuart"},interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!0,position:"top",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:20,font:{size:12,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:1,cornerRadius:8,displayColors:!0,callbacks:{title:function(B){return J==="doughnut"?"Category Breakdown":`Date: ${B[0].label}`},label:function(B){if(J==="doughnut"){const I=B.dataset.data.reduce((Ne,Ae)=>Ne+Ae,0),Z=(B.raw/I*100).toFixed(1);return`${B.label}: $${B.raw.toFixed(2)} (${Z}%)`}else{const I=ht[B.dataIndex];return[`Amount: $${B.raw}`,`Description: ${(I==null?void 0:I.description)||"No Description"}`,`Category: ${(I==null?void 0:I.category)||"Uncategorized"}`]}}}}},onClick:(B,I)=>{if(I.length>0){const Z=I[0].index;if(J!=="doughnut"){const Ne=ht[Z];console.log("Clicked transaction:",Ne)}}}};return J!=="doughnut"&&(j.scales={x:{title:{display:!0,text:"Date",color:o?"#fff":"#000",font:{size:14,weight:"bold"}},ticks:{color:o?"#fff":"#000",maxTicksLimit:10},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},y:{title:{display:!0,text:"Amount ($)",color:o?"#fff":"#000",font:{size:14,weight:"bold"}},ticks:{color:o?"#fff":"#000",callback:function(B){return"$"+B.toFixed(2)}},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}}),j})(),Ye={labels:["Budget","Balance","Goals Saved","Investments","X-penses"],datasets:[{label:"Financial Overview ($)",data:[v,i,tt,re,r],backgroundColor:["rgba(40, 167, 69, 0.8)","rgba(23, 162, 184, 0.8)","rgba(255, 193, 7, 0.8)","rgba(108, 117, 125, 0.8)","rgba(220, 53, 69, 0.8)"],borderColor:["rgba(40, 167, 69, 1)","rgba(23, 162, 184, 1)","rgba(255, 193, 7, 1)","rgba(108, 117, 125, 1)","rgba(220, 53, 69, 1)"],borderWidth:2,hoverOffset:10}]},qt={responsive:!0,maintainAspectRatio:!1,animation:{duration:Q?1200:0,easing:"easeInOutBounce"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:15,font:{size:11,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:8,callbacks:{label:function(j){const B=nt,I=B!==0?(j.raw/Math.abs(B)*100).toFixed(1):"0.0";return`${j.label}: $${j.raw.toFixed(2)} (${I}%)`}}}},onClick:(j,B)=>{if(B.length>0){const I=B[0].index;xe(["Budget","Balance","Goals Saved","Investments","X-penses"][I])}}},Lt=j=>({Budget:"#28a745",Balance:"#17a2b8","X-penses":"#dc3545","Goals (saved)":"#ffc107",Investments:"#6c757d","Overview Total":o?"#ffffff":"#000000"})[j]||(o?"#ffffff":"#000000"),xn=j=>({Budget:"💰",Balance:"💳","X-penses":"💸","Goals (saved)":"🎯",Investments:"📈","Overview Total":"📊"})[j]||"📋",Yt=(j,B)=>j>=100?"#28a745":j>=75?"#17a2b8":j>=50?"#ffc107":j>=25?"#fd7e14":"#dc3545",bn=(j,B)=>j>=100?"🎉":j>=75?"🔥":j>=50?"⭐":j>=25?"📈":"🚀",ar=j=>j>=100?"Completed! 🎉":j>=75?"Almost there! 🔥":j>=50?"Halfway! ⭐":j>=25?"Good start! 📈":"Just started 🚀",zn={labels:p.map(j=>j.name),datasets:[{label:"Goals Progress (%)",data:p.map(j=>j.saved/j.target*100),backgroundColor:p.map((j,B)=>{const I=j.saved/j.target*100;return Yt(I)+"80"}),borderColor:p.map((j,B)=>{const I=j.saved/j.target*100;return Yt(I)}),borderWidth:2,hoverOffset:8}]},ir={responsive:!0,maintainAspectRatio:!1,animation:{duration:q?1500:0,easing:"easeInOutElastic"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:12,font:{size:10,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:8,callbacks:{label:function(j){const B=p[j.dataIndex];return[`Progress: ${j.raw.toFixed(1)}%`,`Saved: $${B.saved.toFixed(2)}`,`Target: $${B.target.toFixed(2)}`,`Remaining: $${(B.target-B.saved).toFixed(2)}`]}}}},onClick:(j,B)=>{if(B.length>0){const I=B[0].index,Z=p[I];Ce((ue==null?void 0:ue.id)===Z.id?null:Z)}}},en=(j,B)=>{const I={bitcoin:"#f7931a",btc:"#f7931a",ethereum:"#627eea",eth:"#627eea",usdc:"#2775ca",xrp:"#23292f",ripple:"#23292f",cardano:"#0033ad",ada:"#0033ad",solana:"#9945ff",sol:"#9945ff"},Z=j.name.toLowerCase();for(const Ae in I)if(Z.includes(Ae))return I[Ae];const Ne=["#28a745","#17a2b8","#ffc107","#fd7e14","#dc3545","#6f42c1","#e83e8c","#20c997"];return Ne[B%Ne.length]},tn=j=>{const B=j.name.toLowerCase(),I={bitcoin:"₿",btc:"₿",ethereum:"Ξ",eth:"Ξ",usdc:"💵",xrp:"🌊",ripple:"🌊",cardano:"🎴",ada:"🎴",solana:"☀️",sol:"☀️"};for(const Z in I)if(B.includes(Z))return I[Z];return"🪙"},yn=j=>Math.random()*20-10,vn=j=>j>5?{label:"Strong Gain! 🚀",class:"success"}:j>0?{label:"Gaining 📈",class:"success"}:j>-5?{label:"Stable 📊",class:"warning"}:{label:"Down 📉",class:"danger"},wn={labels:N.map(j=>j.name),datasets:[{label:"Investment Value ($)",data:N.map(j=>j.total_price),backgroundColor:N.map((j,B)=>en(j,B)+"80"),borderColor:N.map((j,B)=>en(j,B)),borderWidth:3,hoverOffset:12,hoverBorderWidth:4}]},sr={responsive:!0,maintainAspectRatio:!1,animation:{duration:Ie?1800:0,easing:"easeInOutBack"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:15,font:{size:11,weight:"bold"},generateLabels:function(j){return Cd.defaults.plugins.legend.labels.generateLabels.call(this,j).map((Z,Ne)=>{const Ae=N[Ne];return Z.text=`${tn(Ae)} ${Z.text}`,Z})}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:10,callbacks:{title:function(j){const B=N[j[0].dataIndex];return`${tn(B)} ${B.name}`},label:function(j){var Z;const B=N[j.dataIndex],I=yn();return[`Value: $${j.raw.toFixed(2)}`,`Amount: ${B.amount}`,`Price per unit: $${((Z=B.pricePerUnit)==null?void 0:Z.toFixed(2))||"N/A"}`,`Performance: ${I.toFixed(2)}%`,`Status: ${vn(I).label}`]}}}},onClick:(j,B)=>{if(B.length>0){const I=B[0].index,Z=N[I];Ze((We==null?void 0:We.id)===Z.id?null:Z)}}};return n.jsxs("div",{className:`container-fluid ${o?"dark-mode":"light-mode"}`,children:[n.jsx("style",{children:`
        .dashboard-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 30px;
          border-radius: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .dashboard-header h1 {
          font-size: 2.5rem;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          font-weight: bold;
        }
      `}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"col-12",children:[n.jsx("div",{className:"dashboard-header",children:n.jsx("h1",{children:"Main Dashboard"})}),n.jsx(Av,{transactions:a,balance:i,budget:v,goals:p,investments:N,darkMode:o}),n.jsxs("div",{className:"summary",children:[n.jsx("h5",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"Recent Transactions"}),n.jsx("br",{}),n.jsx("button",{onClick:()=>ne("/transactions"),className:`btn ${o?"btn-light":"btn-dark"} responsive`,children:" View All Transactions"})]}),n.jsx("br",{}),n.jsxs("div",{className:`charts border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"Spending Over Time Graph"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"X-PENSE Transactions"})})]}),n.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${J==="line"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("line"),title:"Line Chart",children:"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${J==="bar"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("bar"),title:"Bar Chart",children:"📊"}),n.jsx("button",{type:"button",className:`btn btn-sm ${J==="doughnut"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("doughnut"),title:"Doughnut Chart",children:"🍩"})]}),n.jsxs("select",{className:`form-select form-select-sm ${o?"bg-dark text-light":""}`,value:T,onChange:j=>X(j.target.value),style:{width:"auto"},children:[n.jsx("option",{value:"all",children:"All Time"}),n.jsx("option",{value:"week",children:"Last Week"}),n.jsx("option",{value:"month",children:"Last Month"}),n.jsx("option",{value:"3months",children:"Last 3 Months"})]}),n.jsx("select",{className:`form-select form-select-sm ${o?"bg-dark text-light":""}`,value:ke,onChange:j=>me(j.target.value),style:{width:"auto"},children:Ot.map(j=>n.jsx("option",{value:j,children:j==="all"?"All Categories":j},j))}),n.jsx("button",{type:"button",className:`btn btn-sm ${oe?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Oe(!oe),title:oe?"Disable Animations":"Enable Animations",children:oe?"🎬":"⏸️"})]})]}),n.jsx("div",{style:{height:"400px",position:"relative"},children:ht.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"📊"}),n.jsx("h5",{className:"text-muted",children:"No Transactions Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start tracking your expenses to see spending patterns"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/transactions"),children:"➕ Add Your First Transaction"})]}):n.jsxs(n.Fragment,{children:[J==="line"&&n.jsx(Mx,{data:He,options:Be}),J==="bar"&&n.jsx(Kx,{data:He,options:Be}),J==="doughnut"&&n.jsx(ai,{data:He,options:Be})]})}),n.jsxs("div",{className:"mt-3 row",children:[n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Total Transactions: ",n.jsx("strong",{children:ct.length})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Total Amount: ",n.jsxs("strong",{children:["$",ct.reduce((j,B)=>j+parseFloat(B.amount),0).toFixed(2)]})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Average: ",n.jsxs("strong",{children:["$",ct.length>0?(ct.reduce((j,B)=>j+parseFloat(B.amount),0)/ct.length).toFixed(2):"0.00"]})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Time Range: ",n.jsx("strong",{children:T==="all"?"All Time":T.charAt(0).toUpperCase()+T.slice(1)})]})})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"🚀 Crypto Investments"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Portfolio Tracking Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${qe==="cards"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Ht("cards"),title:"Card View",children:"🎴"}),n.jsx("button",{type:"button",className:`btn btn-sm ${qe==="table"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Ht("table"),title:"Table View",children:"📋"})]}),n.jsx("button",{type:"button",className:`btn btn-sm ${Me?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>lt(!Me),title:Me?"Hide Portfolio Chart":"Show Portfolio Chart",children:Me?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ie?"btn-warning":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>St(!Ie),title:Ie?"Disable Animations":"Enable Animations",children:Ie?"🎬":"⏸️"})]})]}),Me&&N.length>0&&n.jsxs("div",{className:"mb-4",style:{height:"350px",position:"relative"},children:[n.jsx(ai,{data:wn,options:sr}),We&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${en(We,0)}`},children:[n.jsxs("strong",{children:[tn(We)," Selected: ",We.name]}),n.jsx("br",{}),n.jsxs("small",{children:["Value: $",We.total_price.toFixed(2)," • Amount: ",We.amount," • Price: $",((jn=We.pricePerUnit)==null?void 0:jn.toFixed(2))||"N/A"]})]})]}),N.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"🚀"}),n.jsx("h5",{className:"text-muted",children:"No Investments Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start building your crypto portfolio today"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/investments"),children:"➕ Add Your First Investment"})]}):n.jsxs(n.Fragment,{children:[qe==="cards"&&n.jsx("div",{className:"row",children:N.map((j,B)=>{var Ke;const I=en(j,B),Z=yn(),Ne=vn(Z),Ae=(We==null?void 0:We.id)===j.id;return n.jsx("div",{className:"col-md-6 col-lg-4 mb-4",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:Ie?"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)":"none",borderLeft:`5px solid ${I}`,transform:Ae?"scale(1.08) rotate(-1deg)":"scale(1)",boxShadow:Ae?`0 15px 40px ${I}50`:"0 5px 20px rgba(0,0,0,0.1)",background:Ae?o?`linear-gradient(135deg, #2d3748 0%, ${I}25 100%)`:`linear-gradient(135deg, #f8f9fa 0%, ${I}20 100%)`:void 0},onClick:()=>Ze(Ae?null:j),onMouseEnter:Ge=>{Ie&&!Ae&&(Ge.currentTarget.style.transform="translateY(-10px) scale(1.03)",Ge.currentTarget.style.boxShadow=`0 10px 30px ${I}40`)},onMouseLeave:Ge=>{Ie&&(Ge.currentTarget.style.transform=Ae?"scale(1.08) rotate(-1deg)":"scale(1)",Ge.currentTarget.style.boxShadow=Ae?`0 15px 40px ${I}50`:"0 5px 20px rgba(0,0,0,0.1)")},children:n.jsxs("div",{className:"card-body p-4",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[n.jsx("div",{className:"flex-grow-1",children:n.jsxs("h6",{className:"card-title mb-2 d-flex align-items-center",style:{color:I},children:[n.jsx("span",{className:"me-2",style:{fontSize:"2rem"},children:tn(j)}),n.jsxs("div",{children:[n.jsx("div",{children:j.name}),n.jsx("small",{className:`badge bg-${Ne.class} mt-1`,children:Ne.label})]})]})}),n.jsx("div",{className:"text-end",children:n.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center",style:{width:"50px",height:"50px",backgroundColor:`${I}20`,border:`3px solid ${I}40`},children:n.jsx("span",{style:{fontSize:"24px"},children:tn(j)})})})]}),n.jsxs("div",{className:"text-center mb-3",children:[n.jsx("h3",{className:"mb-1",style:{color:I},children:l(j.total_price)}),n.jsx("small",{className:"text-muted",children:"Portfolio Value"})]}),n.jsxs("div",{className:"row text-center mb-3",children:[n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Amount"}),n.jsx("div",{style:{color:I,fontWeight:"bold"},children:ae===B?n.jsx("input",{type:"number",value:ye,onChange:Ge=>A(Ge.target.value),className:`form-control form-control-sm ${o?"bg-dark text-light":""}`,style:{borderColor:I}}):j.amount})]}),n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Price/Unit"}),n.jsxs("div",{style:{color:I,fontWeight:"bold"},children:["$",((Ke=j.pricePerUnit)==null?void 0:Ke.toFixed(2))||"N/A"]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[n.jsx("small",{className:"text-muted",children:"Performance"}),n.jsxs("small",{style:{color:Z>0?"#28a745":"#dc3545"},children:[Z>0?"+":"",Z.toFixed(2),"%"]})]}),n.jsx("div",{className:"progress",style:{height:"6px",borderRadius:"10px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.abs(Z)*5}%`,backgroundColor:Z>0?"#28a745":"#dc3545",borderRadius:"10px",transition:Ie?"width 1.5s ease-out":"none"}})})]}),n.jsx("div",{className:"d-flex gap-2",children:ae===B?n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>te(B),className:"btn btn-sm btn-success flex-fill",style:{borderRadius:"8px"},children:"💾 Save"}),n.jsx("button",{onClick:he,className:"btn btn-sm btn-secondary flex-fill",style:{borderRadius:"8px"},children:"❌ Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>K(B),className:"btn btn-sm flex-fill",style:{backgroundColor:`${I}20`,color:I,border:`1px solid ${I}40`,borderRadius:"8px"},children:"✏️ Edit"}),n.jsx("button",{onClick:()=>Qt(B),className:"btn btn-sm btn-outline-danger flex-fill",style:{borderRadius:"8px"},children:"🗑️ Remove"})]})}),Ae&&n.jsxs("div",{className:"mt-3 p-3 rounded",style:{backgroundColor:`${I}15`,border:`1px solid ${I}40`,animation:Ie?"fadeIn 0.3s ease-in":"none"},children:[n.jsx("h6",{style:{color:I},children:"📊 Investment Analytics"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Total Return"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:Z>0?"#28a745":"#dc3545"},children:["$",(j.total_price*Z/100).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Portfolio %"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:I},children:[(j.total_price/re*100).toFixed(1),"%"]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Risk Level"}),n.jsx("br",{}),n.jsx("strong",{style:{color:I},children:Math.abs(Z)>5?"High 🔥":Math.abs(Z)>2?"Medium ⚡":"Low 🛡️"})]})]})]})]})})},B)})}),qe==="table"&&n.jsx("div",{className:"table-responsive",children:n.jsxs("table",{className:`table table-hover ${o?"table-dark":"table-light"}`,style:{borderRadius:"10px",overflow:"hidden"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{background:o?"#495057":"#f8f9fa"},children:[n.jsx("th",{children:"Asset"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Price/Unit"}),n.jsx("th",{children:"Total Value"}),n.jsx("th",{children:"Performance"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:N.map((j,B)=>{var Ke;const I=en(j,B),Z=yn(),Ne=vn(Z),Ae=(We==null?void 0:We.id)===j.id;return n.jsxs("tr",{className:Ae?"table-active":"",style:{borderLeft:`4px solid ${I}`,cursor:"pointer",transition:Ie?"all 0.3s ease":"none",backgroundColor:Ae?`${I}10`:void 0},onClick:()=>Ze(Ae?null:j),children:[n.jsx("td",{children:n.jsxs("div",{className:"d-flex align-items-center",children:[n.jsx("span",{style:{fontSize:"1.5rem",marginRight:"10px"},children:tn(j)}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:I},children:j.name}),n.jsx("br",{}),n.jsx("small",{className:`badge bg-${Ne.class}`,children:Ne.label})]})]})}),n.jsx("td",{children:ae===B?n.jsx("input",{type:"number",value:ye,onChange:Ge=>A(Ge.target.value),className:`form-control form-control-sm ${o?"bg-dark text-light":""}`,style:{borderColor:I,maxWidth:"100px"}}):n.jsx("strong",{style:{color:I},children:j.amount})}),n.jsxs("td",{style:{color:I},children:["$",((Ke=j.pricePerUnit)==null?void 0:Ke.toFixed(2))||"N/A"]}),n.jsx("td",{children:n.jsx("strong",{style:{color:I},children:l(j.total_price)})}),n.jsx("td",{children:n.jsx("div",{className:"d-flex align-items-center",children:n.jsxs("span",{style:{color:Z>0?"#28a745":"#dc3545",marginRight:"8px"},children:[Z>0?"📈":"📉",Z.toFixed(2),"%"]})})}),n.jsx("td",{children:ae===B?n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:Ge=>{Ge.stopPropagation(),te(B)},className:"btn btn-sm btn-success",children:"💾"}),n.jsx("button",{onClick:Ge=>{Ge.stopPropagation(),he()},className:"btn btn-sm btn-secondary",children:"❌"})]}):n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:Ge=>{Ge.stopPropagation(),K(B)},className:"btn btn-sm",style:{backgroundColor:`${I}20`,color:I,border:`1px solid ${I}40`},children:"✏️"}),n.jsx("button",{onClick:Ge=>{Ge.stopPropagation(),Qt(B)},className:"btn btn-sm btn-outline-danger",children:"🗑️"})]})})]},B)})})]})}),n.jsxs("div",{className:`mt-4 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:[n.jsx("h6",{className:"mb-3",style:{fontSize:"1.2rem",fontWeight:"700",color:o?"#e2e8f0":"#2d3748"},children:"💼 Portfolio Summary"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"🚀 Total Assets"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745",fontSize:"1.5rem"},children:N.length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"💰 Portfolio Value"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#17a2b8",fontSize:"1.2rem"},children:l(re)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"📊 Avg. Performance"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#ffc107",fontSize:"1.2rem"},children:N.length>0?(N.reduce((j,B)=>j+yn(),0)/N.length).toFixed(2)+"%":"0.0%"})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"🎯 Diversity Score"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#dc3545",fontSize:"1.2rem"},children:[N.length>0?Math.min(N.length*20,100):0,"%"]})]})]})]})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"🎯 Goals Progress"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Goal Tracking Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${Ve==="cards"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ie("cards"),title:"Card View",children:"🎴"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ve==="list"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ie("list"),title:"List View",children:"📋"})]}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ee?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>yt(!Ee),title:Ee?"Hide Goals Chart":"Show Goals Chart",children:Ee?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${q?"btn-warning":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ve(!q),title:q?"Disable Animations":"Enable Animations",children:q?"🎬":"⏸️"})]})]}),Ee&&p.length>0&&n.jsxs("div",{className:"mb-4",style:{height:"300px",position:"relative"},children:[n.jsx(ai,{data:zn,options:ir}),ue&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${Yt(ue.saved/ue.target*100)}`},children:[n.jsxs("strong",{children:[bn(ue.saved/ue.target*100)," Selected: ",ue.name]}),n.jsx("br",{}),n.jsxs("small",{children:["Progress: ",(ue.saved/ue.target*100).toFixed(1),"% • Saved: $",ue.saved.toFixed(2)," • Target: $",ue.target.toFixed(2)]})]})]}),p.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"🎯"}),n.jsx("h5",{className:"text-muted",children:"No Goals Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start setting financial goals to track your progress"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/goals"),children:"➕ Add Your First Goal"})]}):n.jsxs(n.Fragment,{children:[Ve==="cards"&&n.jsx("div",{className:"row",children:p.map((j,B)=>{const I=j.saved/j.target*100,Z=Yt(I),Ne=(ue==null?void 0:ue.id)===j.id;return n.jsx("div",{className:"col-md-6 col-lg-4 mb-4",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:q?"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)":"none",borderLeft:`5px solid ${Z}`,transform:Ne?"scale(1.08) rotate(1deg)":"scale(1)",boxShadow:Ne?`0 12px 35px ${Z}40`:"0 4px 15px rgba(0,0,0,0.1)",background:Ne?o?`linear-gradient(135deg, #2d3748 0%, ${Z}20 100%)`:`linear-gradient(135deg, #f8f9fa 0%, ${Z}15 100%)`:void 0},onClick:()=>Ce(Ne?null:j),onMouseEnter:Ae=>{q&&!Ne&&(Ae.currentTarget.style.transform="translateY(-8px) scale(1.02)",Ae.currentTarget.style.boxShadow=`0 8px 25px ${Z}30`)},onMouseLeave:Ae=>{q&&(Ae.currentTarget.style.transform=Ne?"scale(1.08) rotate(1deg)":"scale(1)",Ae.currentTarget.style.boxShadow=Ne?`0 12px 35px ${Z}40`:"0 4px 15px rgba(0,0,0,0.1)")},children:n.jsxs("div",{className:"card-body p-4",children:[n.jsx("div",{className:"d-flex justify-content-between align-items-start mb-3",children:n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("h6",{className:"card-title mb-1 d-flex align-items-center",style:{color:Z},children:[n.jsx("span",{className:"me-2",style:{fontSize:"1.5rem"},children:bn(I,j.category)}),j.name]}),n.jsx("small",{className:`badge ${I>=100?"bg-success":I>=50?"bg-warning":"bg-danger"}`,children:ar(I)})]})}),n.jsx("div",{className:"d-flex justify-content-center mb-3",children:n.jsxs("div",{style:{width:100,height:100,position:"relative"},children:[n.jsx(Ed,{value:I,strokeWidth:8,styles:Ad({textColor:o?"white":"black",pathColor:Z,trailColor:o?"#4a5568":"#e2e8f0",pathTransitionDuration:q?1.5:0,pathTransition:q?"stroke-dashoffset 1.5s ease-in-out":"none"})}),n.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"14px",fontWeight:"bold",color:Z},children:[I.toFixed(1),"%"]})]})}),n.jsx("div",{className:"text-center",children:n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Saved"}),n.jsxs("div",{style:{color:Z,fontWeight:"bold"},children:["$",j.saved.toFixed(2)]})]}),n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Target"}),n.jsxs("div",{style:{color:Z,fontWeight:"bold"},children:["$",j.target.toFixed(2)]})]})]})}),n.jsxs("div",{className:"mt-3",children:[n.jsx("div",{className:"progress",style:{height:"8px",borderRadius:"10px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(I,100)}%`,backgroundColor:Z,borderRadius:"10px",transition:q?"width 2s ease-out":"none",background:`linear-gradient(90deg, ${Z} 0%, ${Z}80 100%)`}})}),n.jsxs("div",{className:"d-flex justify-content-between mt-1",children:[n.jsxs("small",{style:{color:Z},children:["$",(j.target-j.saved).toFixed(2)," remaining"]}),n.jsx("small",{style:{color:Z},children:I>=100?"🎉 Complete!":`${(100-I).toFixed(1)}% to go`})]})]}),Ne&&n.jsxs("div",{className:"mt-3 p-3 rounded",style:{backgroundColor:`${Z}15`,border:`1px solid ${Z}40`,animation:q?"fadeIn 0.3s ease-in":"none"},children:[n.jsx("h6",{style:{color:Z},children:"📊 Goal Analytics"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Monthly Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:Z},children:["$",((j.target-j.saved)/12).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Weekly Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:Z},children:["$",((j.target-j.saved)/52).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Daily Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:Z},children:["$",((j.target-j.saved)/365).toFixed(2)]})]})]})]})]})})},B)})}),Ve==="list"&&n.jsx("div",{className:"space-y-3",children:p.map((j,B)=>{const I=j.saved/j.target*100,Z=Yt(I),Ne=(ue==null?void 0:ue.id)===j.id;return n.jsx("div",{className:`p-4 rounded-lg border ${o?"border-secondary":"border-light"} mb-3`,style:{backgroundColor:Ne?`${Z}10`:"transparent",borderLeft:`5px solid ${Z}`,cursor:"pointer",transition:q?"all 0.3s ease":"none"},onClick:()=>Ce(Ne?null:j),children:n.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[n.jsxs("div",{className:"d-flex align-items-center flex-grow-1",children:[n.jsx("span",{style:{fontSize:"2rem",marginRight:"1rem"},children:bn(I,j.category)}),n.jsxs("div",{className:"flex-grow-1",children:[n.jsx("h6",{className:"mb-1",style:{color:Z},children:j.name}),n.jsxs("div",{className:"d-flex align-items-center",children:[n.jsx("div",{className:"progress flex-grow-1 me-3",style:{height:"8px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(I,100)}%`,backgroundColor:Z,transition:q?"width 1.5s ease-out":"none"}})}),n.jsxs("small",{style:{color:Z,minWidth:"60px"},children:[I.toFixed(1),"%"]})]})]})]}),n.jsxs("div",{className:"text-end ms-3",children:[n.jsxs("div",{style:{color:Z,fontWeight:"bold"},children:["$",j.saved.toFixed(2)," / $",j.target.toFixed(2)]}),n.jsxs("small",{className:"text-muted",children:["$",(j.target-j.saved).toFixed(2)," remaining"]})]})]})},B)})}),n.jsxs("div",{className:`mt-4 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:[n.jsx("h6",{className:"mb-3",style:{fontSize:"1.2rem",fontWeight:"700",color:o?"#e2e8f0":"#2d3748"},children:"📈 Goals Summary"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"🎯 Total Goals"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745",fontSize:"1.5rem"},children:p.length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"✅ Completed"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#17a2b8",fontSize:"1.5rem"},children:p.filter(j=>j.saved/j.target*100>=100).length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"💰 Total Saved"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#ffc107",fontSize:"1.2rem"},children:["$",tt.toFixed(2)]})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"🎪 Total Target"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#dc3545",fontSize:"1.2rem"},children:["$",p.reduce((j,B)=>j+B.target,0).toFixed(2)]})]})]})]})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"💼 Financial Overview"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Summary Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${de?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>H(!de),title:de?"Hide Chart":"Show Chart",children:de?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Q?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>le(!Q),title:Q?"Disable Animations":"Enable Animations",children:Q?"🎬":"⏸️"})]})]}),de&&n.jsxs("div",{className:"mb-4",style:{height:"300px",position:"relative"},children:[n.jsx(ai,{data:Ye,options:qt}),U&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${Lt(U)}`},children:[n.jsxs("strong",{children:[xn(U)," Selected: ",U]}),n.jsx("br",{}),n.jsx("small",{children:"Click on different segments to explore each category!"})]})]}),n.jsx("div",{className:"row",children:[{name:"Budget",value:v,trend:"up"},{name:"Balance",value:i,trend:"stable"},{name:"X-penses",value:r,trend:"down"},{name:"Goals (saved)",value:tt,trend:"up"},{name:"Investments",value:re,trend:"up"},{name:"Overview Total",value:nt,trend:nt>0?"up":"down"}].map((j,B)=>n.jsx("div",{className:"col-md-6 col-lg-4 mb-3",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:Q?"all 0.3s ease":"none",borderLeft:`4px solid ${Lt(j.name)}`,transform:U===j.name?"scale(1.05)":"scale(1)",boxShadow:U===j.name?"0 8px 25px rgba(0,123,255,0.3)":"0 2px 10px rgba(0,0,0,0.1)"},onClick:()=>xe(U===j.name?null:j.name),onMouseEnter:I=>{Q&&(I.currentTarget.style.transform="translateY(-2px)")},onMouseLeave:I=>{Q&&(I.currentTarget.style.transform=U===j.name?"scale(1.05)":"scale(1)")},children:n.jsxs("div",{className:"card-body p-3",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("h6",{className:"card-title mb-1",style:{color:Lt(j.name)},children:[xn(j.name)," ",j.name]}),n.jsx("h4",{className:"mb-1",style:{color:Lt(j.name)},children:l(j.value)}),n.jsx("small",{className:`text-${j.trend==="up"?"success":j.trend==="down"?"danger":"muted"}`,children:j.trend==="up"?"📈 Positive":j.trend==="down"?"📉 Negative":"➡️ Stable"})]}),n.jsx("div",{className:"text-end",children:n.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",backgroundColor:`${Lt(j.name)}20`,border:`2px solid ${Lt(j.name)}30`},children:n.jsx("span",{style:{fontSize:"20px"},children:xn(j.name)})})})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"progress",style:{height:"4px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(Math.abs(j.value)/Math.max(v,i,r,re,tt)*100,100)}%`,backgroundColor:Lt(j.name),transition:Q?"width 1s ease":"none"}})})}),U===j.name&&n.jsx("div",{className:"mt-2 p-2 rounded",style:{backgroundColor:`${Lt(j.name)}10`},children:n.jsxs("small",{children:[n.jsx("strong",{children:"Details:"}),n.jsx("br",{}),j.name==="Budget"&&"Total budget allocated across all categories",j.name==="Balance"&&"Current available balance in accounts",j.name==="X-penses"&&"Total expenses recorded in transactions",j.name==="Goals (saved)"&&"Amount saved towards financial goals",j.name==="Investments"&&"Total value of crypto investments",j.name==="Overview Total"&&"Net financial position calculation"]})})]})})},B))}),n.jsx("div",{className:`mt-3 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"💰 Total Assets"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745"},children:l(v+i+tt+re)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"💸 Total Spent"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#dc3545"},children:l(r)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"📊 Net Worth"}),n.jsx("br",{}),n.jsx("span",{style:{color:nt>=0?"#28a745":"#dc3545"},children:l(nt)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"🎯 Savings Rate"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#ffc107"},children:[v>0?(tt/v*100).toFixed(1):"0.0","%"]})]})]})})]})]})})]})}const Tv=({darkMode:a,transactions:i,setTransactions:r,totalAmount:o,setTotalAmount:l,editIndex:c,setEditIndex:u,editTransaction:h,setEditTransaction:p,formatCurrency:x,reminderDate:v,setSuccessMessage:b,successMessage:O,parseDate:W})=>{const[F,$]=S.useState(!1),[L,V]=S.useState(null),[D,N]=S.useState(""),[C,ne]=S.useState("date"),[re,be]=S.useState("desc"),[ae,fe]=S.useState(""),[ye,A]=S.useState(null);S.useEffect(()=>{console.log("TRANSACTIONS COMPONENT"),console.log("Fetching transactions..."),$(!0),bt.get("/transactions").then(H=>{console.log("Fetched transactions:",H.data),r(H.data)}).catch(H=>console.log("Error fetching transactions",H)).finally(()=>$(!1))},[]),S.useEffect(()=>{const H=i.reduce((Q,le)=>Q+parseFloat(le.amount),0);l(H)},[i]);const J=H=>new Date(H).toISOString().split("T")[0],se=H=>{if(!H)return"";const Q=new Date(H),le=String(Q.getMonth()+1).padStart(2,"0"),ue=String(Q.getDate()).padStart(2,"0"),Ce=Q.getFullYear();return`${le}-${ue}-${Ce}`},T=H=>{const Q=i[H];$(!0),bt.delete(`/transactions/${Q.id}`).then(()=>{const le=i.filter((ue,Ce)=>Ce!==H);r(le),A(H),setTimeout(()=>A(null),500),b("🗑️ Transaction deleted successfully!"),setTimeout(()=>b(""),3e3)}).catch(le=>console.error("Error deleting transaction:",le)).finally(()=>{$(!1),V(null)})},X=H=>{V(H)},oe=H=>{const{name:Q,value:le}=H.target;p({...h,[Q]:le||""})},Oe=async H=>{let Q;try{Q=J(h.date)}catch{console.error("Invalid date format:",h.date);return}const le={...h,date:Q};$(!0);try{await bt.put(`/transactions/${i[H].id}`,le);const ue=i.map((Ce,Ve)=>Ve===H?{...Ce,...le}:Ce);r(ue),u(null),p({category:"",date:"",description:"",amount:""}),b("✅ Transaction updated successfully!"),setTimeout(()=>b(""),3e3)}catch(ue){console.error("Error updating transaction:",ue),b("❌ Failed to update transaction. Please try again."),setTimeout(()=>b(""),3e3)}finally{$(!1)}},ke=(H,Q,le)=>{const ue=new Date,Ce=new Date(Q)-ue;Ce>0?(setTimeout(()=>{alert(`🔔 Reminder: You need to make a payment of ${le} for ${H.description} on ${H.date}`)},Ce),b(`⏰ Payment Reminder set for ${H.description} on ${Q}`),setTimeout(()=>b(""),5e3)):alert("⚠️ Reminder date must be in the future.")},me=H=>{const Q=prompt("📅 Enter the reminder date (MM-DD-YYYY):"),le=prompt("💰 Enter the amount that needs to be paid:");Q&&le&&ke(H,Q,le)},U=()=>{let H=i.filter(Q=>{const le=Q.description.toLowerCase().includes(D.toLowerCase())||Q.category.toLowerCase().includes(D.toLowerCase()),ue=ae===""||Q.category===ae;return le&&ue});return H.sort((Q,le)=>{let ue=Q[C],Ce=le[C];return C==="amount"?(ue=parseFloat(ue),Ce=parseFloat(Ce)):C==="date"&&(ue=new Date(ue),Ce=new Date(Ce)),re==="asc"?ue>Ce?1:-1:ue<Ce?1:-1}),H},xe=()=>[...new Set(i.map(H=>H.category))],de=H=>({Cable:"📺","Child Support":"👶",Clothes:"👔",Debt:"💳",Entertainment:"🎬",Food:"🍕",Housing:"🏠",Insurance:"🛡️","Medical & Healthcare":"🏥",Mortgage:"🏘️","Personal Care":"💄",Pets:"🐕",Restaurants:"🍽️","Savings & Investments":"💰",Shopping:"🛍️",Transportation:"🚗",Utilities:"⚡"})[H]||"📄";return n.jsxs("div",{className:"transactions-container",children:[n.jsx("style",{jsx:!0,children:`
                .transactions-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .transactions-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .transactions-header h5 {
                    font-size: 1.8rem;
                    margin: 0 0 10px 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .transactions-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin: 0;
                }

                .controls-section {
                    background: ${a?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 15px;
                    padding: 25px;
                    margin-bottom: 25px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: 15px;
                    align-items: end;
                }

                .control-group {
                    display: flex;
                    flex-direction: column;
                }

                .control-label {
                    font-weight: 600;
                    margin-bottom: 8px;
                    color: ${a?"#e2e8f0":"#2d3748"};
                    font-size: 0.9rem;
                }

                .control-input {
                    padding: 12px;
                    border: 2px solid ${a?"#4a5568":"#e2e8f0"};
                    border-radius: 8px;
                    background: ${a?"#2d3748":"#ffffff"};
                    color: ${a?"#e2e8f0":"#2d3748"};
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                }

                .control-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                }

                .success-alert {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    font-weight: 600;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    animation: slideIn 0.5s ease;
                }

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .table-container {
                    background: ${a?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .no-transactions {
                    text-align: center;
                    padding: 60px 20px;
                    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                    color: white;
                    border-radius: 15px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
                }

                .loading-container {
                    text-align: center;
                    padding: 40px;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 15px;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .enhanced-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: ${a?"#2d3748":"#ffffff"};
                }

                .enhanced-table th {
                    background: ${a?"#4a5568":"#667eea"};
                    color: white;
                    padding: 18px 15px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 1rem;
                    border-bottom: 3px solid ${a?"#2d3748":"#5a67d8"};
                }

                .enhanced-table td {
                    padding: 15px;
                    border-bottom: 1px solid ${a?"#4a5568":"#e2e8f0"};
                    color: ${a?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                }

                .table-row {
                    transition: all 0.3s ease;
                }

                .table-row:hover {
                    background: ${a?"#4a5568":"#f7fafc"};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-row.animate-delete {
                    animation: fadeOut 0.5s ease;
                    background: #ff6b6b !important;
                }

                @keyframes fadeOut {
                    to { opacity: 0; transform: translateX(-100%); }
                }

                .category-cell {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .amount-cell {
                    font-weight: 700;
                    font-size: 1.1rem;
                    color: ${a?"#68d391":"#38a169"};
                }

                .total-row {
                    background: ${a?"#4a5568":"#667eea"};
                    color: white;
                    font-weight: 700;
                    font-size: 1.1rem;
                }

                .action-buttons {
                    display: flex;
                    gap: 8px;
                    flex-wrap: nowrap;
                    justify-content: flex-start;
                    align-items: center;
                }

                .btn-modern {
                    padding: 6px 12px;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    white-space: nowrap;
                    min-width: auto;
                }

                .btn-edit {
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(66, 153, 225, 0.4);
                }

                .btn-edit:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.6);
                }

                .btn-delete {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(245, 101, 101, 0.4);
                }

                .btn-delete:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(245, 101, 101, 0.6);
                }

                .btn-reminder {
                    background: linear-gradient(135deg, #38b2ac 0%, #319795 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(56, 178, 172, 0.4);
                }

                .btn-reminder:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 178, 172, 0.6);
                }

                .btn-save {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
                }

                .btn-cancel {
                    background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(160, 174, 192, 0.4);
                }

                .edit-input {
                    width: 100%;
                    padding: 8px 12px;
                    border: 2px solid #667eea;
                    border-radius: 6px;
                    background: ${a?"#2d3748":"#ffffff"};
                    color: ${a?"#e2e8f0":"#2d3748"};
                    font-size: 0.9rem;
                }

                .delete-confirm {
                    background: rgba(245, 101, 101, 0.1);
                    border: 2px solid #f56565;
                    border-radius: 8px;
                    padding: 10px;
                    margin: 5px 0;
                }

                .confirm-text {
                    color: #e53e3e;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                @media (max-width: 768px) {
                    .transactions-container {
                        padding: 10px;
                    }

                    .transactions-header {
                        padding: 20px 15px;
                        margin-bottom: 20px;
                    }

                    .transactions-header h5 {
                        font-size: 1.4rem;
                    }

                    .transactions-subtitle {
                        font-size: 0.9rem;
                    }

                    .controls-section {
                        grid-template-columns: 1fr;
                        gap: 15px;
                        padding: 15px;
                    }

                    .control-input {
                        padding: 10px;
                        font-size: 0.9rem;
                    }

                    /* Hide table and show card layout on mobile */
                    .table-container {
                        display: none;
                    }

                    .mobile-cards {
                        display: block;
                        gap: 15px;
                    }

                    .transaction-card {
                        background: ${a?"#2d3748":"#ffffff"};
                        border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
                        border-radius: 15px;
                        padding: 20px;
                        margin-bottom: 15px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                        transition: all 0.3s ease;
                    }

                    .transaction-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                    }

                    .card-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom: 15px;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .card-title {
                        font-size: 1.1rem;
                        font-weight: 600;
                        color: ${a?"#e2e8f0":"#2d3748"};
                        margin: 0;
                        flex: 1;
                        min-width: 200px;
                    }

                    .card-amount {
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: ${a?"#68d391":"#38a169"};
                        white-space: nowrap;
                    }

                    .card-details {
                        display: grid;
                        grid-template-columns: auto 1fr;
                        gap: 10px 15px;
                        margin-bottom: 20px;
                        align-items: center;
                    }

                    .card-label {
                        font-weight: 600;
                        color: ${a?"#a0aec0":"#4a5568"};
                        font-size: 0.9rem;
                    }

                    .card-value {
                        color: ${a?"#e2e8f0":"#2d3748"};
                        font-size: 0.95rem;
                    }

                    .card-category {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .card-actions {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        justify-content: flex-start;
                    }

                    .action-buttons {
                        flex-wrap: wrap;
                        gap: 8px;
                        width: 100%;
                    }
                    
                    .btn-modern {
                        padding: 8px 12px;
                        font-size: 0.8rem;
                        gap: 4px;
                        flex: 1;
                        min-width: calc(50% - 4px);
                        justify-content: center;
                    }

                    .edit-form {
                        display: grid;
                        gap: 15px;
                        margin: 15px 0;
                    }

                    .edit-input {
                        padding: 12px;
                        font-size: 1rem;
                        border-radius: 8px;
                    }

                    .edit-actions {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                        margin-top: 15px;
                    }

                    .total-card {
                        background: ${a?"#4a5568":"#667eea"};
                        color: white;
                        border-radius: 15px;
                        padding: 25px;
                        text-align: center;
                        margin-top: 20px;
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                    }

                    .total-label {
                        font-size: 1.1rem;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }

                    .total-amount {
                        font-size: 1.8rem;
                        font-weight: 700;
                    }

                    .delete-confirm-card {
                        background: rgba(245, 101, 101, 0.1);
                        border: 2px solid #f56565;
                        border-radius: 12px;
                        padding: 20px;
                        margin: 15px 0;
                        text-align: center;
                    }

                    .confirm-text {
                        color: #e53e3e;
                        font-weight: 600;
                        margin-bottom: 15px;
                        font-size: 1rem;
                    }
                }

                @media (min-width: 769px) {
                    .mobile-cards {
                        display: none;
                    }
                    
                    .table-container {
                        display: block;
                    }
                }
            `}),n.jsxs("div",{className:"transactions-header",children:[n.jsx("h5",{children:"💼 Transaction History"}),n.jsx("p",{className:"transactions-subtitle",children:"Track your financial journey with style"})]}),O&&n.jsx("div",{className:"success-alert",children:O}),n.jsxs("div",{className:"controls-section",children:[n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"🔍 Search Transactions"}),n.jsx("input",{type:"text",className:"control-input",placeholder:"Search by description or category...",value:D,onChange:H=>N(H.target.value)})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"📂 Filter by Category"}),n.jsxs("select",{className:"control-input",value:ae,onChange:H=>fe(H.target.value),children:[n.jsx("option",{value:"",children:"All Categories"}),xe().map(H=>n.jsxs("option",{value:H,children:[de(H)," ",H]},H))]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"🔄 Sort By"}),n.jsxs("select",{className:"control-input",value:C,onChange:H=>ne(H.target.value),children:[n.jsx("option",{value:"date",children:"📅 Date"}),n.jsx("option",{value:"amount",children:"💰 Amount"}),n.jsx("option",{value:"category",children:"📂 Category"}),n.jsx("option",{value:"description",children:"📝 Description"})]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"⬆️⬇️ Order"}),n.jsxs("select",{className:"control-input",value:re,onChange:H=>be(H.target.value),children:[n.jsx("option",{value:"desc",children:"Descending"}),n.jsx("option",{value:"asc",children:"Ascending"})]})]})]}),n.jsx("div",{className:"table-container",children:F?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading transactions..."})]}):i.length===0?n.jsxs("div",{className:"no-transactions",children:["📊 No Transactions Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start tracking your expenses by adding your first transaction."})]}):n.jsx("div",{className:"table-responsive",children:n.jsxs("table",{className:"enhanced-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"📝 Description"}),n.jsx("th",{children:"📂 Category"}),n.jsx("th",{children:"📅 Date"}),n.jsx("th",{children:"💰 Amount"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsxs("tbody",{children:[U().map((H,Q)=>{const le=i.findIndex(ue=>ue.id===H.id);return n.jsx("tr",{className:`table-row ${ye===le?"animate-delete":""}`,children:c===le?n.jsxs(n.Fragment,{children:[n.jsx("td",{children:n.jsx("input",{type:"text",name:"description",value:h.description,onChange:oe,className:"edit-input",placeholder:"Enter description..."})}),n.jsx("td",{children:n.jsx("input",{type:"text",name:"category",value:h.category,onChange:oe,className:"edit-input",placeholder:"Enter category..."})}),n.jsx("td",{children:n.jsx("input",{type:"date",name:"date",value:h.date,onChange:oe,className:"edit-input"})}),n.jsx("td",{children:n.jsx("input",{type:"number",name:"amount",value:h.amount,onChange:oe,className:"edit-input",step:"0.01",min:"0",placeholder:"0.00"})}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>Oe(le),className:"btn-modern btn-save",disabled:F,children:"✅ Save"}),n.jsx("button",{onClick:()=>u(null),className:"btn-modern btn-cancel",children:"❌ Cancel"})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("td",{"data-label":"Description",children:H.description||"No Description"}),n.jsx("td",{"data-label":"Category",children:n.jsxs("div",{className:"category-cell",children:[n.jsx("span",{children:de(H.category)}),n.jsx("span",{children:H.category})]})}),n.jsx("td",{"data-label":"Date",children:se(W(H.date))}),n.jsx("td",{"data-label":"Amount",className:"amount-cell",children:x(H.amount)}),n.jsx("td",{"data-label":"Actions",children:L===le?n.jsxs("div",{className:"delete-confirm",children:[n.jsx("div",{className:"confirm-text",children:"⚠️ Confirm deletion?"}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>T(le),className:"btn-modern btn-delete",disabled:F,children:"🗑️ Yes, Delete"}),n.jsx("button",{onClick:()=>V(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>{u(le),p({...H,date:J(H.date)})},className:"btn-modern btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>X(le),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>me(H),className:"btn-modern btn-reminder",children:"⏰ Remind"})]})})]})},H.id||Q)}),n.jsxs("tr",{className:"total-row",children:[n.jsx("td",{colSpan:"4",children:n.jsx("strong",{children:"💰 Total Expenses:"})}),n.jsx("td",{className:"amount-cell",children:n.jsx("strong",{children:x(o)})})]})]})]})})}),n.jsx("div",{className:"mobile-cards",children:F?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading transactions..."})]}):i.length===0?n.jsxs("div",{className:"no-transactions",children:["📊 No Transactions Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start tracking your expenses by adding your first transaction."})]}):n.jsxs(n.Fragment,{children:[U().map((H,Q)=>{const le=i.findIndex(ue=>ue.id===H.id);return n.jsx("div",{className:`transaction-card ${ye===le?"animate-delete":""}`,children:c===le?n.jsxs("div",{className:"edit-form",children:[n.jsx("input",{type:"text",name:"description",value:h.description,onChange:oe,className:"edit-input",placeholder:"Enter description..."}),n.jsx("input",{type:"text",name:"category",value:h.category,onChange:oe,className:"edit-input",placeholder:"Enter category..."}),n.jsx("input",{type:"date",name:"date",value:h.date,onChange:oe,className:"edit-input"}),n.jsx("input",{type:"number",name:"amount",value:h.amount,onChange:oe,className:"edit-input",step:"0.01",min:"0",placeholder:"0.00"}),n.jsxs("div",{className:"edit-actions",children:[n.jsx("button",{onClick:()=>Oe(le),className:"btn-modern btn-save",disabled:F,children:"✅ Save"}),n.jsx("button",{onClick:()=>u(null),className:"btn-modern btn-cancel",children:"❌ Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:H.description||"No Description"}),n.jsx("div",{className:"card-amount",children:x(H.amount)})]}),n.jsxs("div",{className:"card-details",children:[n.jsx("span",{className:"card-label",children:"📂 Category:"}),n.jsxs("div",{className:"card-value card-category",children:[n.jsx("span",{children:de(H.category)}),n.jsx("span",{children:H.category})]}),n.jsx("span",{className:"card-label",children:"📅 Date:"}),n.jsx("span",{className:"card-value",children:se(W(H.date))})]}),n.jsx("div",{className:"card-actions",children:L===le?n.jsxs("div",{className:"delete-confirm-card",children:[n.jsx("div",{className:"confirm-text",children:"⚠️ Confirm deletion?"}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>T(le),className:"btn-modern btn-delete",disabled:F,children:"🗑️ Yes, Delete"}),n.jsx("button",{onClick:()=>V(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>{u(le),p({...H,date:J(H.date)})},className:"btn-modern btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>X(le),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>me(H),className:"btn-modern btn-reminder",children:"⏰ Remind"})]})})]})},H.id||Q)}),n.jsxs("div",{className:"total-card",children:[n.jsx("div",{className:"total-label",children:"💰 Total Expenses:"}),n.jsx("div",{className:"total-amount",children:x(o)})]})]})})]})},Ov=({newGoalName:a,setNewGoalName:i,newGoalAmount:r,setNewGoalAmount:o,goals:l,setGoals:c,inputAmounts:u,setInputAmounts:h,validated:p,setValidated:x,editingGoalId:v,setEditingGoalId:b,editedGoalName:O,setEditedGoalName:W,formatCurrency:F,darkMode:$})=>{const[L,V]=S.useState(!1),[D,N]=S.useState(""),[C,ne]=S.useState(null),[re,be]=S.useState(null),[ae,fe]=S.useState({});S.useEffect(()=>{console.log("GOALS COMPONENT"),console.log("Fetching goals from backend"),V(!0),fetch(Ln("/goals")).then(U=>U.json()).then(U=>{console.log("Retrieved goals from backend:",U),c(U)}).catch(U=>console.error("Error fetching goals:",U)).finally(()=>V(!1))},[]);const ye=U=>{if(U.preventDefault(),x(!0),a&&r){V(!0);const xe={name:a,target:Number(r),saved:0};console.log("Adding new goal:",xe),fetch(Ln("/goals"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(xe)}).then(de=>de.json()).then(de=>{c([...l,de]),i(""),o(""),x(!1),N("🎯 Goal added successfully!"),setTimeout(()=>N(""),3e3)}).catch(de=>{console.error("Error adding goal:",de),N("❌ Failed to add goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>V(!1))}},A=U=>{const xe=Number(u[U]||0);if(xe<=0){N("⚠️ Please enter a valid amount greater than 0"),setTimeout(()=>N(""),3e3);return}h({...u,[U]:""}),V(!0);const de=l.map(Q=>{if(Q.id===U){const le=Q.saved+xe,ue=Q.saved>=Q.target,Ce=le>=Q.target;return!ue&&Ce&&(be(U),setTimeout(()=>be(null),3e3),N("🎉 Congratulations! Goal completed!"),setTimeout(()=>N(""),5e3)),{...Q,saved:le}}return Q});c(de),fe({...ae,[U]:!0}),setTimeout(()=>{fe({...ae,[U]:!1})},1e3);const H=de.find(Q=>Q.id===U);fetch(Ln(`/goals/${U}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)}).then(()=>{N("💰 Amount added successfully!"),setTimeout(()=>N(""),3e3)}).catch(Q=>{console.error("Error updating goal:",Q),N("❌ Failed to update goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>V(!1))},J=U=>{h({...u,[U]:""}),V(!0);const xe=l.map(H=>H.id===U?{...H,saved:0}:H);c(xe);const de=xe.find(H=>H.id===U);fetch(Ln(`/goals/${U}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(de)}).then(()=>{N("🔄 Goal progress reset successfully!"),setTimeout(()=>N(""),3e3)}).catch(H=>{console.error("Error resetting goal amount:",H),N("❌ Failed to reset goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>V(!1))},se=U=>{V(!0);const xe=l.filter(de=>de.id!==U);c(xe),fetch(Ln(`/goals/${U}`),{method:"DELETE"}).then(()=>{N("🗑️ Goal deleted successfully!"),setTimeout(()=>N(""),3e3)}).catch(de=>{console.error("Error deleting goal:",de),N("❌ Failed to delete goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>{V(!1),ne(null)})},T=U=>{ne(U)},X=(U,xe)=>{b(U),W(xe)},oe=U=>{if(!O.trim()){N("⚠️ Goal name cannot be empty"),setTimeout(()=>N(""),3e3);return}V(!0);const xe=l.map(de=>de.id===U?{...de,name:O}:de);c(xe),fetch(Ln(`/goals/${U}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:O})}).then(de=>{if(!de.ok)throw new Error("Network response was not ok");return de.json()}).then(de=>{console.log("Updated goal:",de),b(null),W(""),N("✅ Goal updated successfully!"),setTimeout(()=>N(""),3e3)}).catch(de=>{console.error("Error updating goal:",de),N("❌ Failed to update goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>V(!1))},Oe=()=>{b(null),W("")},ke=U=>U>=100?"#10b981":U>=75?"#f59e0b":U>=50?"#3b82f6":U>=25?"#8b5cf6":"#ef4444",me=U=>{const xe=U.saved/U.target*100;return xe>=100?"🎉 Goal Completed!":xe>=75?"🔥 Almost there!":xe>=50?"💪 Halfway there!":xe>=25?"🚀 Great start!":"🎯 Let's begin!"};return n.jsxs("div",{className:"goals-container",children:[n.jsx("style",{jsx:!0,children:`
                .goals-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .goals-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .goals-header h5 {
                    font-size: 1.8rem;
                    margin: 0 0 10px 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .goals-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin: 0;
                }

                .form-container {
                    background: ${$?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 20px;
                    padding: 30px;
                    margin-bottom: 30px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${$?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .form-subtitle {
                    color: ${$?"#a0aec0":"#718096"};
                    font-size: 0.9rem;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 25px;
                }

                .form-group {
                    position: relative;
                }

                .form-input {
                    width: 100%;
                    padding: 15px 20px;
                    border: 2px solid ${$?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${$?"#2d3748":"#ffffff"};
                    color: ${$?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .form-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: translateY(-2px);
                }

                .form-input.is-invalid {
                    border-color: #e53e3e;
                    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
                }

                .invalid-feedback {
                    color: #e53e3e;
                    font-size: 0.875rem;
                    margin-top: 5px;
                    display: block;
                }

                .submit-button {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    display: block;
                    margin: 0 auto;
                }

                .submit-button:hover:not(:disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(56, 161, 105, 0.6);
                }

                .submit-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .success-message {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    font-weight: 600;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    animation: slideIn 0.5s ease;
                }

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .goals-list-header {
                    text-align: center;
                    margin: 40px 0 20px 0;
                    color: ${$?"#a0aec0":"#718096"};
                    font-size: 1.1rem;
                    font-weight: 600;
                }

                .no-goals {
                    text-align: center;
                    padding: 60px 20px;
                    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
                    color: white;
                    border-radius: 15px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
                }

                .goal-card {
                    background: ${$?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)"};
                    border-radius: 20px;
                    padding: 30px;
                    margin-bottom: 25px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${$?"2px solid #4a5568":"2px solid #e2e8f0"};
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .goal-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
                }

                .goal-card.celebrate {
                    animation: celebrate 2s ease-in-out;
                    border-color: #10b981;
                    box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
                }

                @keyframes celebrate {
                    0%, 100% { transform: scale(1); }
                    25% { transform: scale(1.05) rotate(1deg); }
                    75% { transform: scale(1.05) rotate(-1deg); }
                }

                .goal-header {
                    text-align: center;
                    margin-bottom: 25px;
                }

                .goal-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: ${$?"#e2e8f0":"#2d3748"};
                    margin-bottom: 10px;
                }

                .goal-target {
                    font-size: 1.2rem;
                    color: #667eea;
                    font-weight: 600;
                }

                .progress-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 30px 0;
                    position: relative;
                }

                .progress-circle {
                    width: 280px;
                    height: 280px;
                    transition: transform 0.5s ease;
                }

                .progress-circle.animate {
                    transform: scale(1.1);
                }

                .progress-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                }

                .progress-percentage {
                    font-size: 2rem;
                    font-weight: 700;
                    color: ${$?"#e2e8f0":"#2d3748"};
                    margin-bottom: 5px;
                }

                .progress-message {
                    font-size: 0.9rem;
                    font-weight: 600;
                    opacity: 0.8;
                }

                .goal-stats {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 25px;
                    text-align: center;
                }

                .stat-item {
                    background: ${$?"#4a5568":"#f7fafc"};
                    padding: 15px;
                    border-radius: 12px;
                    border: ${$?"1px solid #6b7280":"1px solid #e2e8f0"};
                }

                .stat-label {
                    font-size: 0.9rem;
                    color: ${$?"#a0aec0":"#718096"};
                    margin-bottom: 5px;
                    font-weight: 600;
                }

                .stat-value {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: ${$?"#e2e8f0":"#2d3748"};
                }

                .amount-input {
                    width: 100%;
                    padding: 15px 20px;
                    border: 2px solid ${$?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${$?"#2d3748":"#ffffff"};
                    color: ${$?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .amount-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                }

                .action-buttons {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 15px;
                }

                .btn-modern {
                    padding: 12px 20px;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .btn-add {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                }

                .btn-add:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(56, 161, 105, 0.6);
                }

                .btn-reset {
                    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
                }

                .btn-reset:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
                }

                .btn-delete {
                    background: linear-gradient(135deg, #f56565 0%, #e53e3e 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(245, 101, 101, 0.4);
                }

                .btn-delete:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(245, 101, 101, 0.6);
                }

                .btn-edit {
                    background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(66, 153, 225, 0.4);
                }

                .btn-edit:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(66, 153, 225, 0.6);
                }

                .btn-save {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                }

                .btn-cancel {
                    background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(160, 174, 192, 0.4);
                }

                .btn-modern:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none !important;
                }

                .edit-input {
                    width: 100%;
                    padding: 15px 20px;
                    border: 2px solid #667eea;
                    border-radius: 12px;
                    font-size: 1.2rem;
                    background: ${$?"#2d3748":"#ffffff"};
                    color: ${$?"#e2e8f0":"#2d3748"};
                    text-align: center;
                    margin-bottom: 20px;
                    font-weight: 600;
                }

                .edit-actions {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                }

                .delete-confirm {
                    background: rgba(245, 101, 101, 0.1);
                    border: 2px solid #f56565;
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .confirm-text {
                    color: #e53e3e;
                    font-weight: 600;
                    margin-bottom: 15px;
                    font-size: 1.1rem;
                }

                .confirm-actions {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-right: 8px;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                    
                    .goal-stats {
                        grid-template-columns: 1fr;
                    }
                    
                    .action-buttons {
                        grid-template-columns: 1fr;
                    }
                    
                    .progress-circle {
                        width: 240px;
                        height: 240px;
                    }
                }
            `}),n.jsxs("div",{className:"goals-header",children:[n.jsx("h5",{children:"🎯 Financial Goals"}),n.jsx("p",{className:"goals-subtitle",children:"Turn your dreams into achievable targets"})]}),D&&n.jsx("div",{className:"success-message",children:D}),n.jsxs("div",{className:"form-container",children:[n.jsx("div",{className:"form-subtitle",children:"✨ Create a new financial goal to track your progress"}),n.jsxs("form",{noValidate:!0,onSubmit:ye,className:`needs-validation ${p?"was-validated":""}`,children:[n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",id:"newGoalName",value:a,onChange:U=>i(U.target.value),className:`form-input ${p&&!a?"is-invalid":""}`,placeholder:"🎯 Goal Name (e.g., New Car, Vacation)",required:!0}),n.jsx("div",{className:"invalid-feedback",children:"Please provide a goal name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"number",id:"newGoalAmount",value:r,onChange:U=>o(U.target.value),className:`form-input ${p&&!r?"is-invalid":""}`,placeholder:"💰 Target Amount ($)",min:"0",step:"0.01",required:!0}),n.jsx("div",{className:"invalid-feedback",children:"Please provide a goal amount"})]})]}),n.jsxs("button",{type:"submit",className:"submit-button",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"",L?"Adding Goal...":"🚀 Create Goal"]})]})]}),n.jsx("div",{className:"goals-list-header",children:"💎 YOUR FINANCIAL JOURNEY"}),L&&l.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[n.jsx("div",{className:"loading-spinner",style:{width:"40px",height:"40px",border:"4px solid #f3f3f3",borderTop:"4px solid #667eea"}}),n.jsx("p",{children:"Loading your goals..."})]}):l.length===0?n.jsxs("div",{className:"no-goals",children:["🎯 No Goals Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start your financial journey by creating your first goal above."})]}):l.map(U=>{const xe=U.saved/U.target*100,de=ke(xe);return n.jsx("div",{className:`goal-card ${re===U.id?"celebrate":""}`,children:v===U.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",value:O,onChange:H=>W(H.target.value),className:"edit-input",placeholder:"Enter new goal name..."}),n.jsxs("div",{className:"edit-actions",children:[n.jsxs("button",{onClick:()=>oe(U.id),className:"btn-modern btn-save",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"","✅ Save"]}),n.jsx("button",{onClick:Oe,className:"btn-modern btn-cancel",children:"❌ Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"goal-header",children:[n.jsx("div",{className:"goal-title",children:U.name}),n.jsxs("div",{className:"goal-target",children:["Target: ",F(U.target)]})]}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:`progress-circle ${ae[U.id]?"animate":""}`,children:n.jsx(Ed,{value:Math.min(xe,100),strokeWidth:8,styles:Ad({textColor:$?"white":"black",pathColor:de,trailColor:$?"#4a5568":"#e2e8f0",pathTransitionDuration:1.5})})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("div",{className:"progress-percentage",style:{color:de},children:[xe.toFixed(1),"%"]}),n.jsx("div",{className:"progress-message",style:{color:de},children:me(U)})]})]}),n.jsxs("div",{className:"goal-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-label",children:"💰 Saved"}),n.jsx("div",{className:"stat-value",style:{color:"#38a169"},children:F(U.saved)})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-label",children:"🎯 Remaining"}),n.jsx("div",{className:"stat-value",style:{color:"#f59e0b"},children:F(Math.max(0,U.target-U.saved))})]})]}),n.jsx("input",{type:"number",id:`inputAmount-${U.id}`,name:`inputAmount-${U.id}`,value:u[U.id]||"",onChange:H=>h({...u,[U.id]:H.target.value}),className:"amount-input",placeholder:"💵 Enter amount to add...",min:"0",step:"0.01"}),C===U.id?n.jsxs("div",{className:"delete-confirm",children:[n.jsxs("div",{className:"confirm-text",children:['⚠️ Are you sure you want to delete "',U.name,'"?']}),n.jsxs("div",{className:"confirm-actions",children:[n.jsxs("button",{onClick:()=>se(U.id),className:"btn-modern btn-delete",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"","🗑️ Yes, Delete"]}),n.jsx("button",{onClick:()=>ne(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>A(U.id),className:"btn-modern btn-add",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"","💰 Add Amount"]}),n.jsxs("button",{onClick:()=>J(U.id),className:"btn-modern btn-reset",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"","🔄 Reset"]}),n.jsx("button",{onClick:()=>T(U.id),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>X(U.id,U.name),className:"btn-modern btn-edit",children:"✏️ Edit"})]})]})},U.id)})]})};var ca={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Pv=ca.exports,Nd;function $v(){return Nd||(Nd=1,function(a,i){(function(){var r,o="4.18.1",l=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",h="Invalid `variable` option passed into `_.template`",p="Invalid `imports` option passed into `_.template`",x="__lodash_hash_undefined__",v=500,b="__lodash_placeholder__",O=1,W=2,F=4,$=1,L=2,V=1,D=2,N=4,C=8,ne=16,re=32,be=64,ae=128,fe=256,ye=512,A=30,J="...",se=800,T=16,X=1,oe=2,Oe=3,ke=1/0,me=9007199254740991,U=17976931348623157e292,xe=NaN,de=4294967295,H=de-1,Q=de>>>1,le=[["ary",ae],["bind",V],["bindKey",D],["curry",C],["curryRight",ne],["flip",ye],["partial",re],["partialRight",be],["rearg",fe]],ue="[object Arguments]",Ce="[object Array]",Ve="[object AsyncFunction]",ie="[object Boolean]",q="[object Date]",ve="[object DOMException]",Ee="[object Error]",yt="[object Function]",We="[object GeneratorFunction]",Ze="[object Map]",qe="[object Number]",Ht="[object Null]",Ie="[object Object]",St="[object Promise]",Me="[object Proxy]",lt="[object RegExp]",tt="[object Set]",nt="[object String]",je="[object Symbol]",at="[object Undefined]",vt="[object WeakMap]",ct="[object WeakSet]",ht="[object ArrayBuffer]",Ot="[object DataView]",wt="[object Float32Array]",Qt="[object Float64Array]",K="[object Int8Array]",te="[object Int16Array]",he="[object Int32Array]",Te="[object Uint8Array]",He="[object Uint8ClampedArray]",dt="[object Uint16Array]",Be="[object Uint32Array]",Ye=/\b__p \+= '';/g,qt=/\b(__p \+=) '' \+/g,Lt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,xn=/&(?:amp|lt|gt|quot|#39);/g,Yt=/[&<>"']/g,bn=RegExp(xn.source),ar=RegExp(Yt.source),zn=/<%-([\s\S]+?)%>/g,ir=/<%([\s\S]+?)%>/g,en=/<%=([\s\S]+?)%>/g,tn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yn=/^\w*$/,vn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wn=/[\\^$.*+?()[\]{}|]/g,sr=RegExp(wn.source),jn=/^\s+/,j=/\s/,B=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,I=/\{\n\/\* \[wrapped with (.+)\] \*/,Z=/,? & /,Ne=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ae=/[()=,{}\[\]\/\s]/,Ke=/\\(\\)?/g,Ge=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,P=/\w*$/,En=/^[-+]0x[0-9a-f]+$/i,Sn=/^0b[01]+$/i,Ci=/^\[object .+?Constructor\]$/,Nu=/^0o[0-7]+$/i,Cu=/^(?:0|[1-9]\d*)$/,Eu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ma=/($^)/,Au=/['\n\r\u2028\u2029\\]/g,xa="\\ud800-\\udfff",Ru="\\u0300-\\u036f",Tu="\\ufe20-\\ufe2f",Ou="\\u20d0-\\u20ff",mo=Ru+Tu+Ou,xo="\\u2700-\\u27bf",bo="a-z\\xdf-\\xf6\\xf8-\\xff",Pu="\\xac\\xb1\\xd7\\xf7",$u="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ku="\\u2000-\\u206f",Iu=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yo="A-Z\\xc0-\\xd6\\xd8-\\xde",vo="\\ufe0e\\ufe0f",wo=Pu+$u+ku+Iu,Ei="['’]",Fu="["+xa+"]",jo="["+wo+"]",ba="["+mo+"]",So="\\d+",Lu="["+xo+"]",_o="["+bo+"]",No="[^"+xa+wo+So+xo+bo+yo+"]",Ai="\\ud83c[\\udffb-\\udfff]",Du="(?:"+ba+"|"+Ai+")",Co="[^"+xa+"]",Ri="(?:\\ud83c[\\udde6-\\uddff]){2}",Ti="[\\ud800-\\udbff][\\udc00-\\udfff]",_r="["+yo+"]",Eo="\\u200d",Ao="(?:"+_o+"|"+No+")",Uu="(?:"+_r+"|"+No+")",Ro="(?:"+Ei+"(?:d|ll|m|re|s|t|ve))?",To="(?:"+Ei+"(?:D|LL|M|RE|S|T|VE))?",Oo=Du+"?",Po="["+vo+"]?",Bu="(?:"+Eo+"(?:"+[Co,Ri,Ti].join("|")+")"+Po+Oo+")*",zu="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Wu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",$o=Po+Oo+Bu,Hu="(?:"+[Lu,Ri,Ti].join("|")+")"+$o,qu="(?:"+[Co+ba+"?",ba,Ri,Ti,Fu].join("|")+")",Yu=RegExp(Ei,"g"),Gu=RegExp(ba,"g"),Oi=RegExp(Ai+"(?="+Ai+")|"+qu+$o,"g"),Vu=RegExp([_r+"?"+_o+"+"+Ro+"(?="+[jo,_r,"$"].join("|")+")",Uu+"+"+To+"(?="+[jo,_r+Ao,"$"].join("|")+")",_r+"?"+Ao+"+"+Ro,_r+"+"+To,Wu,zu,So,Hu].join("|"),"g"),Mu=RegExp("["+Eo+xa+mo+vo+"]"),Ku=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ju=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Xu=-1,st={};st[wt]=st[Qt]=st[K]=st[te]=st[he]=st[Te]=st[He]=st[dt]=st[Be]=!0,st[ue]=st[Ce]=st[ht]=st[ie]=st[Ot]=st[q]=st[Ee]=st[yt]=st[Ze]=st[qe]=st[Ie]=st[lt]=st[tt]=st[nt]=st[vt]=!1;var it={};it[ue]=it[Ce]=it[ht]=it[Ot]=it[ie]=it[q]=it[wt]=it[Qt]=it[K]=it[te]=it[he]=it[Ze]=it[qe]=it[Ie]=it[lt]=it[tt]=it[nt]=it[je]=it[Te]=it[He]=it[dt]=it[Be]=!0,it[Ee]=it[yt]=it[vt]=!1;var Zu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Qu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ef={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},tf={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nf=parseFloat,rf=parseInt,ko=typeof ri=="object"&&ri&&ri.Object===Object&&ri,af=typeof self=="object"&&self&&self.Object===Object&&self,Rt=ko||af||Function("return this")(),Pi=i&&!i.nodeType&&i,or=Pi&&!0&&a&&!a.nodeType&&a,Io=or&&or.exports===Pi,$i=Io&&ko.process,nn=function(){try{var E=or&&or.require&&or.require("util").types;return E||$i&&$i.binding&&$i.binding("util")}catch{}}(),Fo=nn&&nn.isArrayBuffer,Lo=nn&&nn.isDate,Do=nn&&nn.isMap,Uo=nn&&nn.isRegExp,Bo=nn&&nn.isSet,zo=nn&&nn.isTypedArray;function Gt(E,z,k){switch(k.length){case 0:return E.call(z);case 1:return E.call(z,k[0]);case 2:return E.call(z,k[0],k[1]);case 3:return E.call(z,k[0],k[1],k[2])}return E.apply(z,k)}function sf(E,z,k,pe){for(var Re=-1,Je=E==null?0:E.length;++Re<Je;){var _t=E[Re];z(pe,_t,k(_t),E)}return pe}function Vt(E,z){for(var k=-1,pe=E==null?0:E.length;++k<pe&&z(E[k],k,E)!==!1;);return E}function of(E,z){for(var k=E==null?0:E.length;k--&&z(E[k],k,E)!==!1;);return E}function Wo(E,z){for(var k=-1,pe=E==null?0:E.length;++k<pe;)if(!z(E[k],k,E))return!1;return!0}function Wn(E,z){for(var k=-1,pe=E==null?0:E.length,Re=0,Je=[];++k<pe;){var _t=E[k];z(_t,k,E)&&(Je[Re++]=_t)}return Je}function ya(E,z){var k=E==null?0:E.length;return!!k&&Nr(E,z,0)>-1}function ki(E,z,k){for(var pe=-1,Re=E==null?0:E.length;++pe<Re;)if(k(z,E[pe]))return!0;return!1}function ut(E,z){for(var k=-1,pe=E==null?0:E.length,Re=Array(pe);++k<pe;)Re[k]=z(E[k],k,E);return Re}function Hn(E,z){for(var k=-1,pe=z.length,Re=E.length;++k<pe;)E[Re+k]=z[k];return E}function Ii(E,z,k,pe){var Re=-1,Je=E==null?0:E.length;for(pe&&Je&&(k=E[++Re]);++Re<Je;)k=z(k,E[Re],Re,E);return k}function lf(E,z,k,pe){var Re=E==null?0:E.length;for(pe&&Re&&(k=E[--Re]);Re--;)k=z(k,E[Re],Re,E);return k}function Fi(E,z){for(var k=-1,pe=E==null?0:E.length;++k<pe;)if(z(E[k],k,E))return!0;return!1}var cf=Li("length");function df(E){return E.split("")}function uf(E){return E.match(Ne)||[]}function Ho(E,z,k){var pe;return k(E,function(Re,Je,_t){if(z(Re,Je,_t))return pe=Je,!1}),pe}function va(E,z,k,pe){for(var Re=E.length,Je=k+(pe?1:-1);pe?Je--:++Je<Re;)if(z(E[Je],Je,E))return Je;return-1}function Nr(E,z,k){return z===z?Sf(E,z,k):va(E,qo,k)}function ff(E,z,k,pe){for(var Re=k-1,Je=E.length;++Re<Je;)if(pe(E[Re],z))return Re;return-1}function qo(E){return E!==E}function Yo(E,z){var k=E==null?0:E.length;return k?Ui(E,z)/k:xe}function Li(E){return function(z){return z==null?r:z[E]}}function Di(E){return function(z){return E==null?r:E[z]}}function Go(E,z,k,pe,Re){return Re(E,function(Je,_t,rt){k=pe?(pe=!1,Je):z(k,Je,_t,rt)}),k}function pf(E,z){var k=E.length;for(E.sort(z);k--;)E[k]=E[k].value;return E}function Ui(E,z){for(var k,pe=-1,Re=E.length;++pe<Re;){var Je=z(E[pe]);Je!==r&&(k=k===r?Je:k+Je)}return k}function Bi(E,z){for(var k=-1,pe=Array(E);++k<E;)pe[k]=z(k);return pe}function hf(E,z){return ut(z,function(k){return[k,E[k]]})}function Vo(E){return E&&E.slice(0,Xo(E)+1).replace(jn,"")}function Mt(E){return function(z){return E(z)}}function zi(E,z){return ut(z,function(k){return E[k]})}function Hr(E,z){return E.has(z)}function Mo(E,z){for(var k=-1,pe=E.length;++k<pe&&Nr(z,E[k],0)>-1;);return k}function Ko(E,z){for(var k=E.length;k--&&Nr(z,E[k],0)>-1;);return k}function gf(E,z){for(var k=E.length,pe=0;k--;)E[k]===z&&++pe;return pe}var mf=Di(Zu),xf=Di(Qu);function bf(E){return"\\"+tf[E]}function yf(E,z){return E==null?r:E[z]}function Cr(E){return Mu.test(E)}function vf(E){return Ku.test(E)}function wf(E){for(var z,k=[];!(z=E.next()).done;)k.push(z.value);return k}function Wi(E){var z=-1,k=Array(E.size);return E.forEach(function(pe,Re){k[++z]=[Re,pe]}),k}function Jo(E,z){return function(k){return E(z(k))}}function qn(E,z){for(var k=-1,pe=E.length,Re=0,Je=[];++k<pe;){var _t=E[k];(_t===z||_t===b)&&(E[k]=b,Je[Re++]=k)}return Je}function wa(E){var z=-1,k=Array(E.size);return E.forEach(function(pe){k[++z]=pe}),k}function jf(E){var z=-1,k=Array(E.size);return E.forEach(function(pe){k[++z]=[pe,pe]}),k}function Sf(E,z,k){for(var pe=k-1,Re=E.length;++pe<Re;)if(E[pe]===z)return pe;return-1}function _f(E,z,k){for(var pe=k+1;pe--;)if(E[pe]===z)return pe;return pe}function Er(E){return Cr(E)?Cf(E):cf(E)}function un(E){return Cr(E)?Ef(E):df(E)}function Xo(E){for(var z=E.length;z--&&j.test(E.charAt(z)););return z}var Nf=Di(ef);function Cf(E){for(var z=Oi.lastIndex=0;Oi.test(E);)++z;return z}function Ef(E){return E.match(Oi)||[]}function Af(E){return E.match(Vu)||[]}var Rf=function E(z){z=z==null?Rt:Ar.defaults(Rt.Object(),z,Ar.pick(Rt,Ju));var k=z.Array,pe=z.Date,Re=z.Error,Je=z.Function,_t=z.Math,rt=z.Object,Hi=z.RegExp,Tf=z.String,rn=z.TypeError,ja=k.prototype,Of=Je.prototype,Rr=rt.prototype,Sa=z["__core-js_shared__"],_a=Of.toString,Qe=Rr.hasOwnProperty,Pf=0,Zo=function(){var e=/[^.]+$/.exec(Sa&&Sa.keys&&Sa.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Na=Rr.toString,$f=_a.call(rt),kf=Rt._,If=Hi("^"+_a.call(Qe).replace(wn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ca=Io?z.Buffer:r,Yn=z.Symbol,Ea=z.Uint8Array,Qo=Ca?Ca.allocUnsafe:r,Aa=Jo(rt.getPrototypeOf,rt),el=rt.create,tl=Rr.propertyIsEnumerable,Ra=ja.splice,nl=Yn?Yn.isConcatSpreadable:r,qr=Yn?Yn.iterator:r,lr=Yn?Yn.toStringTag:r,Ta=function(){try{var e=pr(rt,"defineProperty");return e({},"",{}),e}catch{}}(),Ff=z.clearTimeout!==Rt.clearTimeout&&z.clearTimeout,Lf=pe&&pe.now!==Rt.Date.now&&pe.now,Df=z.setTimeout!==Rt.setTimeout&&z.setTimeout,Oa=_t.ceil,Pa=_t.floor,qi=rt.getOwnPropertySymbols,Uf=Ca?Ca.isBuffer:r,rl=z.isFinite,Bf=ja.join,zf=Jo(rt.keys,rt),Nt=_t.max,Pt=_t.min,Wf=pe.now,Hf=z.parseInt,al=_t.random,qf=ja.reverse,Yi=pr(z,"DataView"),Yr=pr(z,"Map"),Gi=pr(z,"Promise"),Tr=pr(z,"Set"),Gr=pr(z,"WeakMap"),Vr=pr(rt,"create"),$a=Gr&&new Gr,Or={},Yf=hr(Yi),Gf=hr(Yr),Vf=hr(Gi),Mf=hr(Tr),Kf=hr(Gr),ka=Yn?Yn.prototype:r,Mr=ka?ka.valueOf:r,il=ka?ka.toString:r;function g(e){if(gt(e)&&!Pe(e)&&!(e instanceof Ue)){if(e instanceof an)return e;if(Qe.call(e,"__wrapped__"))return sc(e)}return new an(e)}var Pr=function(){function e(){}return function(t){if(!ft(t))return{};if(el)return el(t);e.prototype=t;var s=new e;return e.prototype=r,s}}();function Ia(){}function an(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}g.templateSettings={escape:zn,evaluate:ir,interpolate:en,variable:"",imports:{_:g}},g.prototype=Ia.prototype,g.prototype.constructor=g,an.prototype=Pr(Ia.prototype),an.prototype.constructor=an;function Ue(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function Jf(){var e=new Ue(this.__wrapped__);return e.__actions__=Dt(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Dt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Dt(this.__views__),e}function Xf(){if(this.__filtered__){var e=new Ue(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Zf(){var e=this.__wrapped__.value(),t=this.__dir__,s=Pe(e),d=t<0,f=s?e.length:0,m=dh(0,f,this.__views__),w=m.start,_=m.end,R=_-w,Y=d?_:w-1,G=this.__iteratees__,M=G.length,ce=0,ge=Pt(R,this.__takeCount__);if(!s||!d&&f==R&&ge==R)return Rl(e,this.__actions__);var _e=[];e:for(;R--&&ce<ge;){Y+=t;for(var Fe=-1,we=e[Y];++Fe<M;){var De=G[Fe],ze=De.iteratee,Xt=De.type,Ft=ze(we);if(Xt==oe)we=Ft;else if(!Ft){if(Xt==X)continue e;break e}}_e[ce++]=we}return _e}Ue.prototype=Pr(Ia.prototype),Ue.prototype.constructor=Ue;function cr(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var d=e[t];this.set(d[0],d[1])}}function Qf(){this.__data__=Vr?Vr(null):{},this.size=0}function ep(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function tp(e){var t=this.__data__;if(Vr){var s=t[e];return s===x?r:s}return Qe.call(t,e)?t[e]:r}function np(e){var t=this.__data__;return Vr?t[e]!==r:Qe.call(t,e)}function rp(e,t){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=Vr&&t===r?x:t,this}cr.prototype.clear=Qf,cr.prototype.delete=ep,cr.prototype.get=tp,cr.prototype.has=np,cr.prototype.set=rp;function An(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var d=e[t];this.set(d[0],d[1])}}function ap(){this.__data__=[],this.size=0}function ip(e){var t=this.__data__,s=Fa(t,e);if(s<0)return!1;var d=t.length-1;return s==d?t.pop():Ra.call(t,s,1),--this.size,!0}function sp(e){var t=this.__data__,s=Fa(t,e);return s<0?r:t[s][1]}function op(e){return Fa(this.__data__,e)>-1}function lp(e,t){var s=this.__data__,d=Fa(s,e);return d<0?(++this.size,s.push([e,t])):s[d][1]=t,this}An.prototype.clear=ap,An.prototype.delete=ip,An.prototype.get=sp,An.prototype.has=op,An.prototype.set=lp;function Rn(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var d=e[t];this.set(d[0],d[1])}}function cp(){this.size=0,this.__data__={hash:new cr,map:new(Yr||An),string:new cr}}function dp(e){var t=Ma(this,e).delete(e);return this.size-=t?1:0,t}function up(e){return Ma(this,e).get(e)}function fp(e){return Ma(this,e).has(e)}function pp(e,t){var s=Ma(this,e),d=s.size;return s.set(e,t),this.size+=s.size==d?0:1,this}Rn.prototype.clear=cp,Rn.prototype.delete=dp,Rn.prototype.get=up,Rn.prototype.has=fp,Rn.prototype.set=pp;function dr(e){var t=-1,s=e==null?0:e.length;for(this.__data__=new Rn;++t<s;)this.add(e[t])}function hp(e){return this.__data__.set(e,x),this}function gp(e){return this.__data__.has(e)}dr.prototype.add=dr.prototype.push=hp,dr.prototype.has=gp;function fn(e){var t=this.__data__=new An(e);this.size=t.size}function mp(){this.__data__=new An,this.size=0}function xp(e){var t=this.__data__,s=t.delete(e);return this.size=t.size,s}function bp(e){return this.__data__.get(e)}function yp(e){return this.__data__.has(e)}function vp(e,t){var s=this.__data__;if(s instanceof An){var d=s.__data__;if(!Yr||d.length<l-1)return d.push([e,t]),this.size=++s.size,this;s=this.__data__=new Rn(d)}return s.set(e,t),this.size=s.size,this}fn.prototype.clear=mp,fn.prototype.delete=xp,fn.prototype.get=bp,fn.prototype.has=yp,fn.prototype.set=vp;function sl(e,t){var s=Pe(e),d=!s&&gr(e),f=!s&&!d&&Jn(e),m=!s&&!d&&!f&&Fr(e),w=s||d||f||m,_=w?Bi(e.length,Tf):[],R=_.length;for(var Y in e)(t||Qe.call(e,Y))&&!(w&&(Y=="length"||f&&(Y=="offset"||Y=="parent")||m&&(Y=="buffer"||Y=="byteLength"||Y=="byteOffset")||Pn(Y,R)))&&_.push(Y);return _}function ol(e){var t=e.length;return t?e[rs(0,t-1)]:r}function wp(e,t){return Ka(Dt(e),ur(t,0,e.length))}function jp(e){return Ka(Dt(e))}function Vi(e,t,s){(s!==r&&!hn(e[t],s)||s===r&&!(t in e))&&_n(e,t,s)}function Kr(e,t,s){var d=e[t];(!(Qe.call(e,t)&&hn(d,s))||s===r&&!(t in e))&&_n(e,t,s)}function Fa(e,t){for(var s=e.length;s--;)if(hn(e[s][0],t))return s;return-1}function Sp(e,t,s,d){return Gn(e,function(f,m,w){t(d,f,s(f),w)}),d}function ll(e,t){return e&&Cn(t,Et(t),e)}function _p(e,t){return e&&Cn(t,Bt(t),e)}function _n(e,t,s){t=="__proto__"&&Ta?Ta(e,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[t]=s}function Mi(e,t){for(var s=-1,d=t.length,f=k(d),m=e==null;++s<d;)f[s]=m?r:Rs(e,t[s]);return f}function ur(e,t,s){return e===e&&(s!==r&&(e=e<=s?e:s),t!==r&&(e=e>=t?e:t)),e}function sn(e,t,s,d,f,m){var w,_=t&O,R=t&W,Y=t&F;if(s&&(w=f?s(e,d,f,m):s(e)),w!==r)return w;if(!ft(e))return e;var G=Pe(e);if(G){if(w=fh(e),!_)return Dt(e,w)}else{var M=$t(e),ce=M==yt||M==We;if(Jn(e))return Pl(e,_);if(M==Ie||M==ue||ce&&!f){if(w=R||ce?{}:Xl(e),!_)return R?th(e,_p(w,e)):eh(e,ll(w,e))}else{if(!it[M])return f?e:{};w=ph(e,M,_)}}m||(m=new fn);var ge=m.get(e);if(ge)return ge;m.set(e,w),Cc(e)?e.forEach(function(we){w.add(sn(we,t,s,we,e,m))}):_c(e)&&e.forEach(function(we,De){w.set(De,sn(we,t,s,De,e,m))});var _e=Y?R?hs:ps:R?Bt:Et,Fe=G?r:_e(e);return Vt(Fe||e,function(we,De){Fe&&(De=we,we=e[De]),Kr(w,De,sn(we,t,s,De,e,m))}),w}function Np(e){var t=Et(e);return function(s){return cl(s,e,t)}}function cl(e,t,s){var d=s.length;if(e==null)return!d;for(e=rt(e);d--;){var f=s[d],m=t[f],w=e[f];if(w===r&&!(f in e)||!m(w))return!1}return!0}function dl(e,t,s){if(typeof e!="function")throw new rn(u);return na(function(){e.apply(r,s)},t)}function Jr(e,t,s,d){var f=-1,m=ya,w=!0,_=e.length,R=[],Y=t.length;if(!_)return R;s&&(t=ut(t,Mt(s))),d?(m=ki,w=!1):t.length>=l&&(m=Hr,w=!1,t=new dr(t));e:for(;++f<_;){var G=e[f],M=s==null?G:s(G);if(G=d||G!==0?G:0,w&&M===M){for(var ce=Y;ce--;)if(t[ce]===M)continue e;R.push(G)}else m(t,M,d)||R.push(G)}return R}var Gn=Ll(Nn),ul=Ll(Ji,!0);function Cp(e,t){var s=!0;return Gn(e,function(d,f,m){return s=!!t(d,f,m),s}),s}function La(e,t,s){for(var d=-1,f=e.length;++d<f;){var m=e[d],w=t(m);if(w!=null&&(_===r?w===w&&!Jt(w):s(w,_)))var _=w,R=m}return R}function Ep(e,t,s,d){var f=e.length;for(s=$e(s),s<0&&(s=-s>f?0:f+s),d=d===r||d>f?f:$e(d),d<0&&(d+=f),d=s>d?0:Ac(d);s<d;)e[s++]=t;return e}function fl(e,t){var s=[];return Gn(e,function(d,f,m){t(d,f,m)&&s.push(d)}),s}function Tt(e,t,s,d,f){var m=-1,w=e.length;for(s||(s=gh),f||(f=[]);++m<w;){var _=e[m];t>0&&s(_)?t>1?Tt(_,t-1,s,d,f):Hn(f,_):d||(f[f.length]=_)}return f}var Ki=Dl(),pl=Dl(!0);function Nn(e,t){return e&&Ki(e,t,Et)}function Ji(e,t){return e&&pl(e,t,Et)}function Da(e,t){return Wn(t,function(s){return $n(e[s])})}function fr(e,t){t=Mn(t,e);for(var s=0,d=t.length;e!=null&&s<d;)e=e[pn(t[s++])];return s&&s==d?e:r}function hl(e,t,s){var d=t(e);return Pe(e)?d:Hn(d,s(e))}function kt(e){return e==null?e===r?at:Ht:lr&&lr in rt(e)?ch(e):jh(e)}function Xi(e,t){return e>t}function Ap(e,t){return e!=null&&Qe.call(e,t)}function Rp(e,t){return e!=null&&t in rt(e)}function Tp(e,t,s){return e>=Pt(t,s)&&e<Nt(t,s)}function Zi(e,t,s){for(var d=s?ki:ya,f=e[0].length,m=e.length,w=m,_=k(m),R=1/0,Y=[];w--;){var G=e[w];w&&t&&(G=ut(G,Mt(t))),R=Pt(G.length,R),_[w]=!s&&(t||f>=120&&G.length>=120)?new dr(w&&G):r}G=e[0];var M=-1,ce=_[0];e:for(;++M<f&&Y.length<R;){var ge=G[M],_e=t?t(ge):ge;if(ge=s||ge!==0?ge:0,!(ce?Hr(ce,_e):d(Y,_e,s))){for(w=m;--w;){var Fe=_[w];if(!(Fe?Hr(Fe,_e):d(e[w],_e,s)))continue e}ce&&ce.push(_e),Y.push(ge)}}return Y}function Op(e,t,s,d){return Nn(e,function(f,m,w){t(d,s(f),m,w)}),d}function Xr(e,t,s){t=Mn(t,e),e=tc(e,t);var d=e==null?e:e[pn(ln(t))];return d==null?r:Gt(d,e,s)}function gl(e){return gt(e)&&kt(e)==ue}function Pp(e){return gt(e)&&kt(e)==ht}function $p(e){return gt(e)&&kt(e)==q}function Zr(e,t,s,d,f){return e===t?!0:e==null||t==null||!gt(e)&&!gt(t)?e!==e&&t!==t:kp(e,t,s,d,Zr,f)}function kp(e,t,s,d,f,m){var w=Pe(e),_=Pe(t),R=w?Ce:$t(e),Y=_?Ce:$t(t);R=R==ue?Ie:R,Y=Y==ue?Ie:Y;var G=R==Ie,M=Y==Ie,ce=R==Y;if(ce&&Jn(e)){if(!Jn(t))return!1;w=!0,G=!1}if(ce&&!G)return m||(m=new fn),w||Fr(e)?Ml(e,t,s,d,f,m):oh(e,t,R,s,d,f,m);if(!(s&$)){var ge=G&&Qe.call(e,"__wrapped__"),_e=M&&Qe.call(t,"__wrapped__");if(ge||_e){var Fe=ge?e.value():e,we=_e?t.value():t;return m||(m=new fn),f(Fe,we,s,d,m)}}return ce?(m||(m=new fn),lh(e,t,s,d,f,m)):!1}function Ip(e){return gt(e)&&$t(e)==Ze}function Qi(e,t,s,d){var f=s.length,m=f,w=!d;if(e==null)return!m;for(e=rt(e);f--;){var _=s[f];if(w&&_[2]?_[1]!==e[_[0]]:!(_[0]in e))return!1}for(;++f<m;){_=s[f];var R=_[0],Y=e[R],G=_[1];if(w&&_[2]){if(Y===r&&!(R in e))return!1}else{var M=new fn;if(d)var ce=d(Y,G,R,e,t,M);if(!(ce===r?Zr(G,Y,$|L,d,M):ce))return!1}}return!0}function ml(e){if(!ft(e)||xh(e))return!1;var t=$n(e)?If:Ci;return t.test(hr(e))}function Fp(e){return gt(e)&&kt(e)==lt}function Lp(e){return gt(e)&&$t(e)==tt}function Dp(e){return gt(e)&&ti(e.length)&&!!st[kt(e)]}function xl(e){return typeof e=="function"?e:e==null?zt:typeof e=="object"?Pe(e)?vl(e[0],e[1]):yl(e):Bc(e)}function es(e){if(!ta(e))return zf(e);var t=[];for(var s in rt(e))Qe.call(e,s)&&s!="constructor"&&t.push(s);return t}function Up(e){if(!ft(e))return wh(e);var t=ta(e),s=[];for(var d in e)d=="constructor"&&(t||!Qe.call(e,d))||s.push(d);return s}function ts(e,t){return e<t}function bl(e,t){var s=-1,d=Ut(e)?k(e.length):[];return Gn(e,function(f,m,w){d[++s]=t(f,m,w)}),d}function yl(e){var t=ms(e);return t.length==1&&t[0][2]?Ql(t[0][0],t[0][1]):function(s){return s===e||Qi(s,e,t)}}function vl(e,t){return bs(e)&&Zl(t)?Ql(pn(e),t):function(s){var d=Rs(s,e);return d===r&&d===t?Ts(s,e):Zr(t,d,$|L)}}function Ua(e,t,s,d,f){e!==t&&Ki(t,function(m,w){if(f||(f=new fn),ft(m))Bp(e,t,w,s,Ua,d,f);else{var _=d?d(vs(e,w),m,w+"",e,t,f):r;_===r&&(_=m),Vi(e,w,_)}},Bt)}function Bp(e,t,s,d,f,m,w){var _=vs(e,s),R=vs(t,s),Y=w.get(R);if(Y){Vi(e,s,Y);return}var G=m?m(_,R,s+"",e,t,w):r,M=G===r;if(M){var ce=Pe(R),ge=!ce&&Jn(R),_e=!ce&&!ge&&Fr(R);G=R,ce||ge||_e?Pe(_)?G=_:mt(_)?G=Dt(_):ge?(M=!1,G=Pl(R,!0)):_e?(M=!1,G=$l(R,!0)):G=[]:ra(R)||gr(R)?(G=_,gr(_)?G=Rc(_):(!ft(_)||$n(_))&&(G=Xl(R))):M=!1}M&&(w.set(R,G),f(G,R,d,m,w),w.delete(R)),Vi(e,s,G)}function wl(e,t){var s=e.length;if(s)return t+=t<0?s:0,Pn(t,s)?e[t]:r}function jl(e,t,s){t.length?t=ut(t,function(m){return Pe(m)?function(w){return fr(w,m.length===1?m[0]:m)}:m}):t=[zt];var d=-1;t=ut(t,Mt(Se()));var f=bl(e,function(m,w,_){var R=ut(t,function(Y){return Y(m)});return{criteria:R,index:++d,value:m}});return pf(f,function(m,w){return Qp(m,w,s)})}function zp(e,t){return Sl(e,t,function(s,d){return Ts(e,d)})}function Sl(e,t,s){for(var d=-1,f=t.length,m={};++d<f;){var w=t[d],_=fr(e,w);s(_,w)&&Qr(m,Mn(w,e),_)}return m}function Wp(e){return function(t){return fr(t,e)}}function ns(e,t,s,d){var f=d?ff:Nr,m=-1,w=t.length,_=e;for(e===t&&(t=Dt(t)),s&&(_=ut(e,Mt(s)));++m<w;)for(var R=0,Y=t[m],G=s?s(Y):Y;(R=f(_,G,R,d))>-1;)_!==e&&Ra.call(_,R,1),Ra.call(e,R,1);return e}function _l(e,t){for(var s=e?t.length:0,d=s-1;s--;){var f=t[s];if(s==d||f!==m){var m=f;Pn(f)?Ra.call(e,f,1):ss(e,f)}}return e}function rs(e,t){return e+Pa(al()*(t-e+1))}function Hp(e,t,s,d){for(var f=-1,m=Nt(Oa((t-e)/(s||1)),0),w=k(m);m--;)w[d?m:++f]=e,e+=s;return w}function as(e,t){var s="";if(!e||t<1||t>me)return s;do t%2&&(s+=e),t=Pa(t/2),t&&(e+=e);while(t);return s}function Le(e,t){return ws(ec(e,t,zt),e+"")}function qp(e){return ol(Lr(e))}function Yp(e,t){var s=Lr(e);return Ka(s,ur(t,0,s.length))}function Qr(e,t,s,d){if(!ft(e))return e;t=Mn(t,e);for(var f=-1,m=t.length,w=m-1,_=e;_!=null&&++f<m;){var R=pn(t[f]),Y=s;if(R==="__proto__"||R==="constructor"||R==="prototype")return e;if(f!=w){var G=_[R];Y=d?d(G,R,_):r,Y===r&&(Y=ft(G)?G:Pn(t[f+1])?[]:{})}Kr(_,R,Y),_=_[R]}return e}var Nl=$a?function(e,t){return $a.set(e,t),e}:zt,Gp=Ta?function(e,t){return Ta(e,"toString",{configurable:!0,enumerable:!1,value:Ps(t),writable:!0})}:zt;function Vp(e){return Ka(Lr(e))}function on(e,t,s){var d=-1,f=e.length;t<0&&(t=-t>f?0:f+t),s=s>f?f:s,s<0&&(s+=f),f=t>s?0:s-t>>>0,t>>>=0;for(var m=k(f);++d<f;)m[d]=e[d+t];return m}function Mp(e,t){var s;return Gn(e,function(d,f,m){return s=t(d,f,m),!s}),!!s}function Ba(e,t,s){var d=0,f=e==null?d:e.length;if(typeof t=="number"&&t===t&&f<=Q){for(;d<f;){var m=d+f>>>1,w=e[m];w!==null&&!Jt(w)&&(s?w<=t:w<t)?d=m+1:f=m}return f}return is(e,t,zt,s)}function is(e,t,s,d){var f=0,m=e==null?0:e.length;if(m===0)return 0;t=s(t);for(var w=t!==t,_=t===null,R=Jt(t),Y=t===r;f<m;){var G=Pa((f+m)/2),M=s(e[G]),ce=M!==r,ge=M===null,_e=M===M,Fe=Jt(M);if(w)var we=d||_e;else Y?we=_e&&(d||ce):_?we=_e&&ce&&(d||!ge):R?we=_e&&ce&&!ge&&(d||!Fe):ge||Fe?we=!1:we=d?M<=t:M<t;we?f=G+1:m=G}return Pt(m,H)}function Cl(e,t){for(var s=-1,d=e.length,f=0,m=[];++s<d;){var w=e[s],_=t?t(w):w;if(!s||!hn(_,R)){var R=_;m[f++]=w===0?0:w}}return m}function El(e){return typeof e=="number"?e:Jt(e)?xe:+e}function Kt(e){if(typeof e=="string")return e;if(Pe(e))return ut(e,Kt)+"";if(Jt(e))return il?il.call(e):"";var t=e+"";return t=="0"&&1/e==-ke?"-0":t}function Vn(e,t,s){var d=-1,f=ya,m=e.length,w=!0,_=[],R=_;if(s)w=!1,f=ki;else if(m>=l){var Y=t?null:ih(e);if(Y)return wa(Y);w=!1,f=Hr,R=new dr}else R=t?[]:_;e:for(;++d<m;){var G=e[d],M=t?t(G):G;if(G=s||G!==0?G:0,w&&M===M){for(var ce=R.length;ce--;)if(R[ce]===M)continue e;t&&R.push(M),_.push(G)}else f(R,M,s)||(R!==_&&R.push(M),_.push(G))}return _}function ss(e,t){t=Mn(t,e);var s=-1,d=t.length;if(!d)return!0;for(;++s<d;){var f=pn(t[s]);if(f==="__proto__"&&!Qe.call(e,"__proto__")||(f==="constructor"||f==="prototype")&&s<d-1)return!1}var m=tc(e,t);return m==null||delete m[pn(ln(t))]}function Al(e,t,s,d){return Qr(e,t,s(fr(e,t)),d)}function za(e,t,s,d){for(var f=e.length,m=d?f:-1;(d?m--:++m<f)&&t(e[m],m,e););return s?on(e,d?0:m,d?m+1:f):on(e,d?m+1:0,d?f:m)}function Rl(e,t){var s=e;return s instanceof Ue&&(s=s.value()),Ii(t,function(d,f){return f.func.apply(f.thisArg,Hn([d],f.args))},s)}function os(e,t,s){var d=e.length;if(d<2)return d?Vn(e[0]):[];for(var f=-1,m=k(d);++f<d;)for(var w=e[f],_=-1;++_<d;)_!=f&&(m[f]=Jr(m[f]||w,e[_],t,s));return Vn(Tt(m,1),t,s)}function Tl(e,t,s){for(var d=-1,f=e.length,m=t.length,w={};++d<f;){var _=d<m?t[d]:r;s(w,e[d],_)}return w}function ls(e){return mt(e)?e:[]}function cs(e){return typeof e=="function"?e:zt}function Mn(e,t){return Pe(e)?e:bs(e,t)?[e]:ic(et(e))}var Kp=Le;function Kn(e,t,s){var d=e.length;return s=s===r?d:s,!t&&s>=d?e:on(e,t,s)}var Ol=Ff||function(e){return Rt.clearTimeout(e)};function Pl(e,t){if(t)return e.slice();var s=e.length,d=Qo?Qo(s):new e.constructor(s);return e.copy(d),d}function ds(e){var t=new e.constructor(e.byteLength);return new Ea(t).set(new Ea(e)),t}function Jp(e,t){var s=t?ds(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.byteLength)}function Xp(e){var t=new e.constructor(e.source,P.exec(e));return t.lastIndex=e.lastIndex,t}function Zp(e){return Mr?rt(Mr.call(e)):{}}function $l(e,t){var s=t?ds(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}function kl(e,t){if(e!==t){var s=e!==r,d=e===null,f=e===e,m=Jt(e),w=t!==r,_=t===null,R=t===t,Y=Jt(t);if(!_&&!Y&&!m&&e>t||m&&w&&R&&!_&&!Y||d&&w&&R||!s&&R||!f)return 1;if(!d&&!m&&!Y&&e<t||Y&&s&&f&&!d&&!m||_&&s&&f||!w&&f||!R)return-1}return 0}function Qp(e,t,s){for(var d=-1,f=e.criteria,m=t.criteria,w=f.length,_=s.length;++d<w;){var R=kl(f[d],m[d]);if(R){if(d>=_)return R;var Y=s[d];return R*(Y=="desc"?-1:1)}}return e.index-t.index}function Il(e,t,s,d){for(var f=-1,m=e.length,w=s.length,_=-1,R=t.length,Y=Nt(m-w,0),G=k(R+Y),M=!d;++_<R;)G[_]=t[_];for(;++f<w;)(M||f<m)&&(G[s[f]]=e[f]);for(;Y--;)G[_++]=e[f++];return G}function Fl(e,t,s,d){for(var f=-1,m=e.length,w=-1,_=s.length,R=-1,Y=t.length,G=Nt(m-_,0),M=k(G+Y),ce=!d;++f<G;)M[f]=e[f];for(var ge=f;++R<Y;)M[ge+R]=t[R];for(;++w<_;)(ce||f<m)&&(M[ge+s[w]]=e[f++]);return M}function Dt(e,t){var s=-1,d=e.length;for(t||(t=k(d));++s<d;)t[s]=e[s];return t}function Cn(e,t,s,d){var f=!s;s||(s={});for(var m=-1,w=t.length;++m<w;){var _=t[m],R=d?d(s[_],e[_],_,s,e):r;R===r&&(R=e[_]),f?_n(s,_,R):Kr(s,_,R)}return s}function eh(e,t){return Cn(e,xs(e),t)}function th(e,t){return Cn(e,Kl(e),t)}function Wa(e,t){return function(s,d){var f=Pe(s)?sf:Sp,m=t?t():{};return f(s,e,Se(d,2),m)}}function $r(e){return Le(function(t,s){var d=-1,f=s.length,m=f>1?s[f-1]:r,w=f>2?s[2]:r;for(m=e.length>3&&typeof m=="function"?(f--,m):r,w&&It(s[0],s[1],w)&&(m=f<3?r:m,f=1),t=rt(t);++d<f;){var _=s[d];_&&e(t,_,d,m)}return t})}function Ll(e,t){return function(s,d){if(s==null)return s;if(!Ut(s))return e(s,d);for(var f=s.length,m=t?f:-1,w=rt(s);(t?m--:++m<f)&&d(w[m],m,w)!==!1;);return s}}function Dl(e){return function(t,s,d){for(var f=-1,m=rt(t),w=d(t),_=w.length;_--;){var R=w[e?_:++f];if(s(m[R],R,m)===!1)break}return t}}function nh(e,t,s){var d=t&V,f=ea(e);function m(){var w=this&&this!==Rt&&this instanceof m?f:e;return w.apply(d?s:this,arguments)}return m}function Ul(e){return function(t){t=et(t);var s=Cr(t)?un(t):r,d=s?s[0]:t.charAt(0),f=s?Kn(s,1).join(""):t.slice(1);return d[e]()+f}}function kr(e){return function(t){return Ii(Dc(Lc(t).replace(Yu,"")),e,"")}}function ea(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=Pr(e.prototype),d=e.apply(s,t);return ft(d)?d:s}}function rh(e,t,s){var d=ea(e);function f(){for(var m=arguments.length,w=k(m),_=m,R=Ir(f);_--;)w[_]=arguments[_];var Y=m<3&&w[0]!==R&&w[m-1]!==R?[]:qn(w,R);if(m-=Y.length,m<s)return ql(e,t,Ha,f.placeholder,r,w,Y,r,r,s-m);var G=this&&this!==Rt&&this instanceof f?d:e;return Gt(G,this,w)}return f}function Bl(e){return function(t,s,d){var f=rt(t);if(!Ut(t)){var m=Se(s,3);t=Et(t),s=function(_){return m(f[_],_,f)}}var w=e(t,s,d);return w>-1?f[m?t[w]:w]:r}}function zl(e){return On(function(t){var s=t.length,d=s,f=an.prototype.thru;for(e&&t.reverse();d--;){var m=t[d];if(typeof m!="function")throw new rn(u);if(f&&!w&&Va(m)=="wrapper")var w=new an([],!0)}for(d=w?d:s;++d<s;){m=t[d];var _=Va(m),R=_=="wrapper"?gs(m):r;R&&ys(R[0])&&R[1]==(ae|C|re|fe)&&!R[4].length&&R[9]==1?w=w[Va(R[0])].apply(w,R[3]):w=m.length==1&&ys(m)?w[_]():w.thru(m)}return function(){var Y=arguments,G=Y[0];if(w&&Y.length==1&&Pe(G))return w.plant(G).value();for(var M=0,ce=s?t[M].apply(this,Y):G;++M<s;)ce=t[M].call(this,ce);return ce}})}function Ha(e,t,s,d,f,m,w,_,R,Y){var G=t&ae,M=t&V,ce=t&D,ge=t&(C|ne),_e=t&ye,Fe=ce?r:ea(e);function we(){for(var De=arguments.length,ze=k(De),Xt=De;Xt--;)ze[Xt]=arguments[Xt];if(ge)var Ft=Ir(we),Zt=gf(ze,Ft);if(d&&(ze=Il(ze,d,f,ge)),m&&(ze=Fl(ze,m,w,ge)),De-=Zt,ge&&De<Y){var xt=qn(ze,Ft);return ql(e,t,Ha,we.placeholder,s,ze,xt,_,R,Y-De)}var gn=M?s:this,In=ce?gn[e]:e;return De=ze.length,_?ze=Sh(ze,_):_e&&De>1&&ze.reverse(),G&&R<De&&(ze.length=R),this&&this!==Rt&&this instanceof we&&(In=Fe||ea(In)),In.apply(gn,ze)}return we}function Wl(e,t){return function(s,d){return Op(s,e,t(d),{})}}function qa(e,t){return function(s,d){var f;if(s===r&&d===r)return t;if(s!==r&&(f=s),d!==r){if(f===r)return d;typeof s=="string"||typeof d=="string"?(s=Kt(s),d=Kt(d)):(s=El(s),d=El(d)),f=e(s,d)}return f}}function us(e){return On(function(t){return t=ut(t,Mt(Se())),Le(function(s){var d=this;return e(t,function(f){return Gt(f,d,s)})})})}function Ya(e,t){t=t===r?" ":Kt(t);var s=t.length;if(s<2)return s?as(t,e):t;var d=as(t,Oa(e/Er(t)));return Cr(t)?Kn(un(d),0,e).join(""):d.slice(0,e)}function ah(e,t,s,d){var f=t&V,m=ea(e);function w(){for(var _=-1,R=arguments.length,Y=-1,G=d.length,M=k(G+R),ce=this&&this!==Rt&&this instanceof w?m:e;++Y<G;)M[Y]=d[Y];for(;R--;)M[Y++]=arguments[++_];return Gt(ce,f?s:this,M)}return w}function Hl(e){return function(t,s,d){return d&&typeof d!="number"&&It(t,s,d)&&(s=d=r),t=kn(t),s===r?(s=t,t=0):s=kn(s),d=d===r?t<s?1:-1:kn(d),Hp(t,s,d,e)}}function Ga(e){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=cn(t),s=cn(s)),e(t,s)}}function ql(e,t,s,d,f,m,w,_,R,Y){var G=t&C,M=G?w:r,ce=G?r:w,ge=G?m:r,_e=G?r:m;t|=G?re:be,t&=~(G?be:re),t&N||(t&=~(V|D));var Fe=[e,t,f,ge,M,_e,ce,_,R,Y],we=s.apply(r,Fe);return ys(e)&&nc(we,Fe),we.placeholder=d,rc(we,e,t)}function fs(e){var t=_t[e];return function(s,d){if(s=cn(s),d=d==null?0:Pt($e(d),292),d&&rl(s)){var f=(et(s)+"e").split("e"),m=t(f[0]+"e"+(+f[1]+d));return f=(et(m)+"e").split("e"),+(f[0]+"e"+(+f[1]-d))}return t(s)}}var ih=Tr&&1/wa(new Tr([,-0]))[1]==ke?function(e){return new Tr(e)}:Is;function Yl(e){return function(t){var s=$t(t);return s==Ze?Wi(t):s==tt?jf(t):hf(t,e(t))}}function Tn(e,t,s,d,f,m,w,_){var R=t&D;if(!R&&typeof e!="function")throw new rn(u);var Y=d?d.length:0;if(Y||(t&=~(re|be),d=f=r),w=w===r?w:Nt($e(w),0),_=_===r?_:$e(_),Y-=f?f.length:0,t&be){var G=d,M=f;d=f=r}var ce=R?r:gs(e),ge=[e,t,s,d,f,G,M,m,w,_];if(ce&&vh(ge,ce),e=ge[0],t=ge[1],s=ge[2],d=ge[3],f=ge[4],_=ge[9]=ge[9]===r?R?0:e.length:Nt(ge[9]-Y,0),!_&&t&(C|ne)&&(t&=~(C|ne)),!t||t==V)var _e=nh(e,t,s);else t==C||t==ne?_e=rh(e,t,_):(t==re||t==(V|re))&&!f.length?_e=ah(e,t,s,d):_e=Ha.apply(r,ge);var Fe=ce?Nl:nc;return rc(Fe(_e,ge),e,t)}function Gl(e,t,s,d){return e===r||hn(e,Rr[s])&&!Qe.call(d,s)?t:e}function Vl(e,t,s,d,f,m){return ft(e)&&ft(t)&&(m.set(t,e),Ua(e,t,r,Vl,m),m.delete(t)),e}function sh(e){return ra(e)?r:e}function Ml(e,t,s,d,f,m){var w=s&$,_=e.length,R=t.length;if(_!=R&&!(w&&R>_))return!1;var Y=m.get(e),G=m.get(t);if(Y&&G)return Y==t&&G==e;var M=-1,ce=!0,ge=s&L?new dr:r;for(m.set(e,t),m.set(t,e);++M<_;){var _e=e[M],Fe=t[M];if(d)var we=w?d(Fe,_e,M,t,e,m):d(_e,Fe,M,e,t,m);if(we!==r){if(we)continue;ce=!1;break}if(ge){if(!Fi(t,function(De,ze){if(!Hr(ge,ze)&&(_e===De||f(_e,De,s,d,m)))return ge.push(ze)})){ce=!1;break}}else if(!(_e===Fe||f(_e,Fe,s,d,m))){ce=!1;break}}return m.delete(e),m.delete(t),ce}function oh(e,t,s,d,f,m,w){switch(s){case Ot:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ht:return!(e.byteLength!=t.byteLength||!m(new Ea(e),new Ea(t)));case ie:case q:case qe:return hn(+e,+t);case Ee:return e.name==t.name&&e.message==t.message;case lt:case nt:return e==t+"";case Ze:var _=Wi;case tt:var R=d&$;if(_||(_=wa),e.size!=t.size&&!R)return!1;var Y=w.get(e);if(Y)return Y==t;d|=L,w.set(e,t);var G=Ml(_(e),_(t),d,f,m,w);return w.delete(e),G;case je:if(Mr)return Mr.call(e)==Mr.call(t)}return!1}function lh(e,t,s,d,f,m){var w=s&$,_=ps(e),R=_.length,Y=ps(t),G=Y.length;if(R!=G&&!w)return!1;for(var M=R;M--;){var ce=_[M];if(!(w?ce in t:Qe.call(t,ce)))return!1}var ge=m.get(e),_e=m.get(t);if(ge&&_e)return ge==t&&_e==e;var Fe=!0;m.set(e,t),m.set(t,e);for(var we=w;++M<R;){ce=_[M];var De=e[ce],ze=t[ce];if(d)var Xt=w?d(ze,De,ce,t,e,m):d(De,ze,ce,e,t,m);if(!(Xt===r?De===ze||f(De,ze,s,d,m):Xt)){Fe=!1;break}we||(we=ce=="constructor")}if(Fe&&!we){var Ft=e.constructor,Zt=t.constructor;Ft!=Zt&&"constructor"in e&&"constructor"in t&&!(typeof Ft=="function"&&Ft instanceof Ft&&typeof Zt=="function"&&Zt instanceof Zt)&&(Fe=!1)}return m.delete(e),m.delete(t),Fe}function On(e){return ws(ec(e,r,cc),e+"")}function ps(e){return hl(e,Et,xs)}function hs(e){return hl(e,Bt,Kl)}var gs=$a?function(e){return $a.get(e)}:Is;function Va(e){for(var t=e.name+"",s=Or[t],d=Qe.call(Or,t)?s.length:0;d--;){var f=s[d],m=f.func;if(m==null||m==e)return f.name}return t}function Ir(e){var t=Qe.call(g,"placeholder")?g:e;return t.placeholder}function Se(){var e=g.iteratee||$s;return e=e===$s?xl:e,arguments.length?e(arguments[0],arguments[1]):e}function Ma(e,t){var s=e.__data__;return mh(t)?s[typeof t=="string"?"string":"hash"]:s.map}function ms(e){for(var t=Et(e),s=t.length;s--;){var d=t[s],f=e[d];t[s]=[d,f,Zl(f)]}return t}function pr(e,t){var s=yf(e,t);return ml(s)?s:r}function ch(e){var t=Qe.call(e,lr),s=e[lr];try{e[lr]=r;var d=!0}catch{}var f=Na.call(e);return d&&(t?e[lr]=s:delete e[lr]),f}var xs=qi?function(e){return e==null?[]:(e=rt(e),Wn(qi(e),function(t){return tl.call(e,t)}))}:Fs,Kl=qi?function(e){for(var t=[];e;)Hn(t,xs(e)),e=Aa(e);return t}:Fs,$t=kt;(Yi&&$t(new Yi(new ArrayBuffer(1)))!=Ot||Yr&&$t(new Yr)!=Ze||Gi&&$t(Gi.resolve())!=St||Tr&&$t(new Tr)!=tt||Gr&&$t(new Gr)!=vt)&&($t=function(e){var t=kt(e),s=t==Ie?e.constructor:r,d=s?hr(s):"";if(d)switch(d){case Yf:return Ot;case Gf:return Ze;case Vf:return St;case Mf:return tt;case Kf:return vt}return t});function dh(e,t,s){for(var d=-1,f=s.length;++d<f;){var m=s[d],w=m.size;switch(m.type){case"drop":e+=w;break;case"dropRight":t-=w;break;case"take":t=Pt(t,e+w);break;case"takeRight":e=Nt(e,t-w);break}}return{start:e,end:t}}function uh(e){var t=e.match(I);return t?t[1].split(Z):[]}function Jl(e,t,s){t=Mn(t,e);for(var d=-1,f=t.length,m=!1;++d<f;){var w=pn(t[d]);if(!(m=e!=null&&s(e,w)))break;e=e[w]}return m||++d!=f?m:(f=e==null?0:e.length,!!f&&ti(f)&&Pn(w,f)&&(Pe(e)||gr(e)))}function fh(e){var t=e.length,s=new e.constructor(t);return t&&typeof e[0]=="string"&&Qe.call(e,"index")&&(s.index=e.index,s.input=e.input),s}function Xl(e){return typeof e.constructor=="function"&&!ta(e)?Pr(Aa(e)):{}}function ph(e,t,s){var d=e.constructor;switch(t){case ht:return ds(e);case ie:case q:return new d(+e);case Ot:return Jp(e,s);case wt:case Qt:case K:case te:case he:case Te:case He:case dt:case Be:return $l(e,s);case Ze:return new d;case qe:case nt:return new d(e);case lt:return Xp(e);case tt:return new d;case je:return Zp(e)}}function hh(e,t){var s=t.length;if(!s)return e;var d=s-1;return t[d]=(s>1?"& ":"")+t[d],t=t.join(s>2?", ":" "),e.replace(B,`{
/* [wrapped with `+t+`] */
`)}function gh(e){return Pe(e)||gr(e)||!!(nl&&e&&e[nl])}function Pn(e,t){var s=typeof e;return t=t??me,!!t&&(s=="number"||s!="symbol"&&Cu.test(e))&&e>-1&&e%1==0&&e<t}function It(e,t,s){if(!ft(s))return!1;var d=typeof t;return(d=="number"?Ut(s)&&Pn(t,s.length):d=="string"&&t in s)?hn(s[t],e):!1}function bs(e,t){if(Pe(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||Jt(e)?!0:yn.test(e)||!tn.test(e)||t!=null&&e in rt(t)}function mh(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ys(e){var t=Va(e),s=g[t];if(typeof s!="function"||!(t in Ue.prototype))return!1;if(e===s)return!0;var d=gs(s);return!!d&&e===d[0]}function xh(e){return!!Zo&&Zo in e}var bh=Sa?$n:Ls;function ta(e){var t=e&&e.constructor,s=typeof t=="function"&&t.prototype||Rr;return e===s}function Zl(e){return e===e&&!ft(e)}function Ql(e,t){return function(s){return s==null?!1:s[e]===t&&(t!==r||e in rt(s))}}function yh(e){var t=Qa(e,function(d){return s.size===v&&s.clear(),d}),s=t.cache;return t}function vh(e,t){var s=e[1],d=t[1],f=s|d,m=f<(V|D|ae),w=d==ae&&s==C||d==ae&&s==fe&&e[7].length<=t[8]||d==(ae|fe)&&t[7].length<=t[8]&&s==C;if(!(m||w))return e;d&V&&(e[2]=t[2],f|=s&V?0:N);var _=t[3];if(_){var R=e[3];e[3]=R?Il(R,_,t[4]):_,e[4]=R?qn(e[3],b):t[4]}return _=t[5],_&&(R=e[5],e[5]=R?Fl(R,_,t[6]):_,e[6]=R?qn(e[5],b):t[6]),_=t[7],_&&(e[7]=_),d&ae&&(e[8]=e[8]==null?t[8]:Pt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=f,e}function wh(e){var t=[];if(e!=null)for(var s in rt(e))t.push(s);return t}function jh(e){return Na.call(e)}function ec(e,t,s){return t=Nt(t===r?e.length-1:t,0),function(){for(var d=arguments,f=-1,m=Nt(d.length-t,0),w=k(m);++f<m;)w[f]=d[t+f];f=-1;for(var _=k(t+1);++f<t;)_[f]=d[f];return _[t]=s(w),Gt(e,this,_)}}function tc(e,t){return t.length<2?e:fr(e,on(t,0,-1))}function Sh(e,t){for(var s=e.length,d=Pt(t.length,s),f=Dt(e);d--;){var m=t[d];e[d]=Pn(m,s)?f[m]:r}return e}function vs(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var nc=ac(Nl),na=Df||function(e,t){return Rt.setTimeout(e,t)},ws=ac(Gp);function rc(e,t,s){var d=t+"";return ws(e,hh(d,_h(uh(d),s)))}function ac(e){var t=0,s=0;return function(){var d=Wf(),f=T-(d-s);if(s=d,f>0){if(++t>=se)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Ka(e,t){var s=-1,d=e.length,f=d-1;for(t=t===r?d:t;++s<t;){var m=rs(s,f),w=e[m];e[m]=e[s],e[s]=w}return e.length=t,e}var ic=yh(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(vn,function(s,d,f,m){t.push(f?m.replace(Ke,"$1"):d||s)}),t});function pn(e){if(typeof e=="string"||Jt(e))return e;var t=e+"";return t=="0"&&1/e==-ke?"-0":t}function hr(e){if(e!=null){try{return _a.call(e)}catch{}try{return e+""}catch{}}return""}function _h(e,t){return Vt(le,function(s){var d="_."+s[0];t&s[1]&&!ya(e,d)&&e.push(d)}),e.sort()}function sc(e){if(e instanceof Ue)return e.clone();var t=new an(e.__wrapped__,e.__chain__);return t.__actions__=Dt(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Nh(e,t,s){(s?It(e,t,s):t===r)?t=1:t=Nt($e(t),0);var d=e==null?0:e.length;if(!d||t<1)return[];for(var f=0,m=0,w=k(Oa(d/t));f<d;)w[m++]=on(e,f,f+=t);return w}function Ch(e){for(var t=-1,s=e==null?0:e.length,d=0,f=[];++t<s;){var m=e[t];m&&(f[d++]=m)}return f}function Eh(){var e=arguments.length;if(!e)return[];for(var t=k(e-1),s=arguments[0],d=e;d--;)t[d-1]=arguments[d];return Hn(Pe(s)?Dt(s):[s],Tt(t,1))}var Ah=Le(function(e,t){return mt(e)?Jr(e,Tt(t,1,mt,!0)):[]}),Rh=Le(function(e,t){var s=ln(t);return mt(s)&&(s=r),mt(e)?Jr(e,Tt(t,1,mt,!0),Se(s,2)):[]}),Th=Le(function(e,t){var s=ln(t);return mt(s)&&(s=r),mt(e)?Jr(e,Tt(t,1,mt,!0),r,s):[]});function Oh(e,t,s){var d=e==null?0:e.length;return d?(t=s||t===r?1:$e(t),on(e,t<0?0:t,d)):[]}function Ph(e,t,s){var d=e==null?0:e.length;return d?(t=s||t===r?1:$e(t),t=d-t,on(e,0,t<0?0:t)):[]}function $h(e,t){return e&&e.length?za(e,Se(t,3),!0,!0):[]}function kh(e,t){return e&&e.length?za(e,Se(t,3),!0):[]}function Ih(e,t,s,d){var f=e==null?0:e.length;return f?(s&&typeof s!="number"&&It(e,t,s)&&(s=0,d=f),Ep(e,t,s,d)):[]}function oc(e,t,s){var d=e==null?0:e.length;if(!d)return-1;var f=s==null?0:$e(s);return f<0&&(f=Nt(d+f,0)),va(e,Se(t,3),f)}function lc(e,t,s){var d=e==null?0:e.length;if(!d)return-1;var f=d-1;return s!==r&&(f=$e(s),f=s<0?Nt(d+f,0):Pt(f,d-1)),va(e,Se(t,3),f,!0)}function cc(e){var t=e==null?0:e.length;return t?Tt(e,1):[]}function Fh(e){var t=e==null?0:e.length;return t?Tt(e,ke):[]}function Lh(e,t){var s=e==null?0:e.length;return s?(t=t===r?1:$e(t),Tt(e,t)):[]}function Dh(e){for(var t=-1,s=e==null?0:e.length,d={};++t<s;){var f=e[t];_n(d,f[0],f[1])}return d}function dc(e){return e&&e.length?e[0]:r}function Uh(e,t,s){var d=e==null?0:e.length;if(!d)return-1;var f=s==null?0:$e(s);return f<0&&(f=Nt(d+f,0)),Nr(e,t,f)}function Bh(e){var t=e==null?0:e.length;return t?on(e,0,-1):[]}var zh=Le(function(e){var t=ut(e,ls);return t.length&&t[0]===e[0]?Zi(t):[]}),Wh=Le(function(e){var t=ln(e),s=ut(e,ls);return t===ln(s)?t=r:s.pop(),s.length&&s[0]===e[0]?Zi(s,Se(t,2)):[]}),Hh=Le(function(e){var t=ln(e),s=ut(e,ls);return t=typeof t=="function"?t:r,t&&s.pop(),s.length&&s[0]===e[0]?Zi(s,r,t):[]});function qh(e,t){return e==null?"":Bf.call(e,t)}function ln(e){var t=e==null?0:e.length;return t?e[t-1]:r}function Yh(e,t,s){var d=e==null?0:e.length;if(!d)return-1;var f=d;return s!==r&&(f=$e(s),f=f<0?Nt(d+f,0):Pt(f,d-1)),t===t?_f(e,t,f):va(e,qo,f,!0)}function Gh(e,t){return e&&e.length?wl(e,$e(t)):r}var Vh=Le(uc);function uc(e,t){return e&&e.length&&t&&t.length?ns(e,t):e}function Mh(e,t,s){return e&&e.length&&t&&t.length?ns(e,t,Se(s,2)):e}function Kh(e,t,s){return e&&e.length&&t&&t.length?ns(e,t,r,s):e}var Jh=On(function(e,t){var s=e==null?0:e.length,d=Mi(e,t);return _l(e,ut(t,function(f){return Pn(f,s)?+f:f}).sort(kl)),d});function Xh(e,t){var s=[];if(!(e&&e.length))return s;var d=-1,f=[],m=e.length;for(t=Se(t,3);++d<m;){var w=e[d];t(w,d,e)&&(s.push(w),f.push(d))}return _l(e,f),s}function js(e){return e==null?e:qf.call(e)}function Zh(e,t,s){var d=e==null?0:e.length;return d?(s&&typeof s!="number"&&It(e,t,s)?(t=0,s=d):(t=t==null?0:$e(t),s=s===r?d:$e(s)),on(e,t,s)):[]}function Qh(e,t){return Ba(e,t)}function eg(e,t,s){return is(e,t,Se(s,2))}function tg(e,t){var s=e==null?0:e.length;if(s){var d=Ba(e,t);if(d<s&&hn(e[d],t))return d}return-1}function ng(e,t){return Ba(e,t,!0)}function rg(e,t,s){return is(e,t,Se(s,2),!0)}function ag(e,t){var s=e==null?0:e.length;if(s){var d=Ba(e,t,!0)-1;if(hn(e[d],t))return d}return-1}function ig(e){return e&&e.length?Cl(e):[]}function sg(e,t){return e&&e.length?Cl(e,Se(t,2)):[]}function og(e){var t=e==null?0:e.length;return t?on(e,1,t):[]}function lg(e,t,s){return e&&e.length?(t=s||t===r?1:$e(t),on(e,0,t<0?0:t)):[]}function cg(e,t,s){var d=e==null?0:e.length;return d?(t=s||t===r?1:$e(t),t=d-t,on(e,t<0?0:t,d)):[]}function dg(e,t){return e&&e.length?za(e,Se(t,3),!1,!0):[]}function ug(e,t){return e&&e.length?za(e,Se(t,3)):[]}var fg=Le(function(e){return Vn(Tt(e,1,mt,!0))}),pg=Le(function(e){var t=ln(e);return mt(t)&&(t=r),Vn(Tt(e,1,mt,!0),Se(t,2))}),hg=Le(function(e){var t=ln(e);return t=typeof t=="function"?t:r,Vn(Tt(e,1,mt,!0),r,t)});function gg(e){return e&&e.length?Vn(e):[]}function mg(e,t){return e&&e.length?Vn(e,Se(t,2)):[]}function xg(e,t){return t=typeof t=="function"?t:r,e&&e.length?Vn(e,r,t):[]}function Ss(e){if(!(e&&e.length))return[];var t=0;return e=Wn(e,function(s){if(mt(s))return t=Nt(s.length,t),!0}),Bi(t,function(s){return ut(e,Li(s))})}function fc(e,t){if(!(e&&e.length))return[];var s=Ss(e);return t==null?s:ut(s,function(d){return Gt(t,r,d)})}var bg=Le(function(e,t){return mt(e)?Jr(e,t):[]}),yg=Le(function(e){return os(Wn(e,mt))}),vg=Le(function(e){var t=ln(e);return mt(t)&&(t=r),os(Wn(e,mt),Se(t,2))}),wg=Le(function(e){var t=ln(e);return t=typeof t=="function"?t:r,os(Wn(e,mt),r,t)}),jg=Le(Ss);function Sg(e,t){return Tl(e||[],t||[],Kr)}function _g(e,t){return Tl(e||[],t||[],Qr)}var Ng=Le(function(e){var t=e.length,s=t>1?e[t-1]:r;return s=typeof s=="function"?(e.pop(),s):r,fc(e,s)});function pc(e){var t=g(e);return t.__chain__=!0,t}function Cg(e,t){return t(e),e}function Ja(e,t){return t(e)}var Eg=On(function(e){var t=e.length,s=t?e[0]:0,d=this.__wrapped__,f=function(m){return Mi(m,e)};return t>1||this.__actions__.length||!(d instanceof Ue)||!Pn(s)?this.thru(f):(d=d.slice(s,+s+(t?1:0)),d.__actions__.push({func:Ja,args:[f],thisArg:r}),new an(d,this.__chain__).thru(function(m){return t&&!m.length&&m.push(r),m}))});function Ag(){return pc(this)}function Rg(){return new an(this.value(),this.__chain__)}function Tg(){this.__values__===r&&(this.__values__=Ec(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}}function Og(){return this}function Pg(e){for(var t,s=this;s instanceof Ia;){var d=sc(s);d.__index__=0,d.__values__=r,t?f.__wrapped__=d:t=d;var f=d;s=s.__wrapped__}return f.__wrapped__=e,t}function $g(){var e=this.__wrapped__;if(e instanceof Ue){var t=e;return this.__actions__.length&&(t=new Ue(this)),t=t.reverse(),t.__actions__.push({func:Ja,args:[js],thisArg:r}),new an(t,this.__chain__)}return this.thru(js)}function kg(){return Rl(this.__wrapped__,this.__actions__)}var Ig=Wa(function(e,t,s){Qe.call(e,s)?++e[s]:_n(e,s,1)});function Fg(e,t,s){var d=Pe(e)?Wo:Cp;return s&&It(e,t,s)&&(t=r),d(e,Se(t,3))}function Lg(e,t){var s=Pe(e)?Wn:fl;return s(e,Se(t,3))}var Dg=Bl(oc),Ug=Bl(lc);function Bg(e,t){return Tt(Xa(e,t),1)}function zg(e,t){return Tt(Xa(e,t),ke)}function Wg(e,t,s){return s=s===r?1:$e(s),Tt(Xa(e,t),s)}function hc(e,t){var s=Pe(e)?Vt:Gn;return s(e,Se(t,3))}function gc(e,t){var s=Pe(e)?of:ul;return s(e,Se(t,3))}var Hg=Wa(function(e,t,s){Qe.call(e,s)?e[s].push(t):_n(e,s,[t])});function qg(e,t,s,d){e=Ut(e)?e:Lr(e),s=s&&!d?$e(s):0;var f=e.length;return s<0&&(s=Nt(f+s,0)),ni(e)?s<=f&&e.indexOf(t,s)>-1:!!f&&Nr(e,t,s)>-1}var Yg=Le(function(e,t,s){var d=-1,f=typeof t=="function",m=Ut(e)?k(e.length):[];return Gn(e,function(w){m[++d]=f?Gt(t,w,s):Xr(w,t,s)}),m}),Gg=Wa(function(e,t,s){_n(e,s,t)});function Xa(e,t){var s=Pe(e)?ut:bl;return s(e,Se(t,3))}function Vg(e,t,s,d){return e==null?[]:(Pe(t)||(t=t==null?[]:[t]),s=d?r:s,Pe(s)||(s=s==null?[]:[s]),jl(e,t,s))}var Mg=Wa(function(e,t,s){e[s?0:1].push(t)},function(){return[[],[]]});function Kg(e,t,s){var d=Pe(e)?Ii:Go,f=arguments.length<3;return d(e,Se(t,4),s,f,Gn)}function Jg(e,t,s){var d=Pe(e)?lf:Go,f=arguments.length<3;return d(e,Se(t,4),s,f,ul)}function Xg(e,t){var s=Pe(e)?Wn:fl;return s(e,ei(Se(t,3)))}function Zg(e){var t=Pe(e)?ol:qp;return t(e)}function Qg(e,t,s){(s?It(e,t,s):t===r)?t=1:t=$e(t);var d=Pe(e)?wp:Yp;return d(e,t)}function em(e){var t=Pe(e)?jp:Vp;return t(e)}function tm(e){if(e==null)return 0;if(Ut(e))return ni(e)?Er(e):e.length;var t=$t(e);return t==Ze||t==tt?e.size:es(e).length}function nm(e,t,s){var d=Pe(e)?Fi:Mp;return s&&It(e,t,s)&&(t=r),d(e,Se(t,3))}var rm=Le(function(e,t){if(e==null)return[];var s=t.length;return s>1&&It(e,t[0],t[1])?t=[]:s>2&&It(t[0],t[1],t[2])&&(t=[t[0]]),jl(e,Tt(t,1),[])}),Za=Lf||function(){return Rt.Date.now()};function am(e,t){if(typeof t!="function")throw new rn(u);return e=$e(e),function(){if(--e<1)return t.apply(this,arguments)}}function mc(e,t,s){return t=s?r:t,t=e&&t==null?e.length:t,Tn(e,ae,r,r,r,r,t)}function xc(e,t){var s;if(typeof t!="function")throw new rn(u);return e=$e(e),function(){return--e>0&&(s=t.apply(this,arguments)),e<=1&&(t=r),s}}var _s=Le(function(e,t,s){var d=V;if(s.length){var f=qn(s,Ir(_s));d|=re}return Tn(e,d,t,s,f)}),bc=Le(function(e,t,s){var d=V|D;if(s.length){var f=qn(s,Ir(bc));d|=re}return Tn(t,d,e,s,f)});function yc(e,t,s){t=s?r:t;var d=Tn(e,C,r,r,r,r,r,t);return d.placeholder=yc.placeholder,d}function vc(e,t,s){t=s?r:t;var d=Tn(e,ne,r,r,r,r,r,t);return d.placeholder=vc.placeholder,d}function wc(e,t,s){var d,f,m,w,_,R,Y=0,G=!1,M=!1,ce=!0;if(typeof e!="function")throw new rn(u);t=cn(t)||0,ft(s)&&(G=!!s.leading,M="maxWait"in s,m=M?Nt(cn(s.maxWait)||0,t):m,ce="trailing"in s?!!s.trailing:ce);function ge(xt){var gn=d,In=f;return d=f=r,Y=xt,w=e.apply(In,gn),w}function _e(xt){return Y=xt,_=na(De,t),G?ge(xt):w}function Fe(xt){var gn=xt-R,In=xt-Y,zc=t-gn;return M?Pt(zc,m-In):zc}function we(xt){var gn=xt-R,In=xt-Y;return R===r||gn>=t||gn<0||M&&In>=m}function De(){var xt=Za();if(we(xt))return ze(xt);_=na(De,Fe(xt))}function ze(xt){return _=r,ce&&d?ge(xt):(d=f=r,w)}function Xt(){_!==r&&Ol(_),Y=0,d=R=f=_=r}function Ft(){return _===r?w:ze(Za())}function Zt(){var xt=Za(),gn=we(xt);if(d=arguments,f=this,R=xt,gn){if(_===r)return _e(R);if(M)return Ol(_),_=na(De,t),ge(R)}return _===r&&(_=na(De,t)),w}return Zt.cancel=Xt,Zt.flush=Ft,Zt}var im=Le(function(e,t){return dl(e,1,t)}),sm=Le(function(e,t,s){return dl(e,cn(t)||0,s)});function om(e){return Tn(e,ye)}function Qa(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new rn(u);var s=function(){var d=arguments,f=t?t.apply(this,d):d[0],m=s.cache;if(m.has(f))return m.get(f);var w=e.apply(this,d);return s.cache=m.set(f,w)||m,w};return s.cache=new(Qa.Cache||Rn),s}Qa.Cache=Rn;function ei(e){if(typeof e!="function")throw new rn(u);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function lm(e){return xc(2,e)}var cm=Kp(function(e,t){t=t.length==1&&Pe(t[0])?ut(t[0],Mt(Se())):ut(Tt(t,1),Mt(Se()));var s=t.length;return Le(function(d){for(var f=-1,m=Pt(d.length,s);++f<m;)d[f]=t[f].call(this,d[f]);return Gt(e,this,d)})}),Ns=Le(function(e,t){var s=qn(t,Ir(Ns));return Tn(e,re,r,t,s)}),jc=Le(function(e,t){var s=qn(t,Ir(jc));return Tn(e,be,r,t,s)}),dm=On(function(e,t){return Tn(e,fe,r,r,r,t)});function um(e,t){if(typeof e!="function")throw new rn(u);return t=t===r?t:$e(t),Le(e,t)}function fm(e,t){if(typeof e!="function")throw new rn(u);return t=t==null?0:Nt($e(t),0),Le(function(s){var d=s[t],f=Kn(s,0,t);return d&&Hn(f,d),Gt(e,this,f)})}function pm(e,t,s){var d=!0,f=!0;if(typeof e!="function")throw new rn(u);return ft(s)&&(d="leading"in s?!!s.leading:d,f="trailing"in s?!!s.trailing:f),wc(e,t,{leading:d,maxWait:t,trailing:f})}function hm(e){return mc(e,1)}function gm(e,t){return Ns(cs(t),e)}function mm(){if(!arguments.length)return[];var e=arguments[0];return Pe(e)?e:[e]}function xm(e){return sn(e,F)}function bm(e,t){return t=typeof t=="function"?t:r,sn(e,F,t)}function ym(e){return sn(e,O|F)}function vm(e,t){return t=typeof t=="function"?t:r,sn(e,O|F,t)}function wm(e,t){return t==null||cl(e,t,Et(t))}function hn(e,t){return e===t||e!==e&&t!==t}var jm=Ga(Xi),Sm=Ga(function(e,t){return e>=t}),gr=gl(function(){return arguments}())?gl:function(e){return gt(e)&&Qe.call(e,"callee")&&!tl.call(e,"callee")},Pe=k.isArray,_m=Fo?Mt(Fo):Pp;function Ut(e){return e!=null&&ti(e.length)&&!$n(e)}function mt(e){return gt(e)&&Ut(e)}function Nm(e){return e===!0||e===!1||gt(e)&&kt(e)==ie}var Jn=Uf||Ls,Cm=Lo?Mt(Lo):$p;function Em(e){return gt(e)&&e.nodeType===1&&!ra(e)}function Am(e){if(e==null)return!0;if(Ut(e)&&(Pe(e)||typeof e=="string"||typeof e.splice=="function"||Jn(e)||Fr(e)||gr(e)))return!e.length;var t=$t(e);if(t==Ze||t==tt)return!e.size;if(ta(e))return!es(e).length;for(var s in e)if(Qe.call(e,s))return!1;return!0}function Rm(e,t){return Zr(e,t)}function Tm(e,t,s){s=typeof s=="function"?s:r;var d=s?s(e,t):r;return d===r?Zr(e,t,r,s):!!d}function Cs(e){if(!gt(e))return!1;var t=kt(e);return t==Ee||t==ve||typeof e.message=="string"&&typeof e.name=="string"&&!ra(e)}function Om(e){return typeof e=="number"&&rl(e)}function $n(e){if(!ft(e))return!1;var t=kt(e);return t==yt||t==We||t==Ve||t==Me}function Sc(e){return typeof e=="number"&&e==$e(e)}function ti(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=me}function ft(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function gt(e){return e!=null&&typeof e=="object"}var _c=Do?Mt(Do):Ip;function Pm(e,t){return e===t||Qi(e,t,ms(t))}function $m(e,t,s){return s=typeof s=="function"?s:r,Qi(e,t,ms(t),s)}function km(e){return Nc(e)&&e!=+e}function Im(e){if(bh(e))throw new Re(c);return ml(e)}function Fm(e){return e===null}function Lm(e){return e==null}function Nc(e){return typeof e=="number"||gt(e)&&kt(e)==qe}function ra(e){if(!gt(e)||kt(e)!=Ie)return!1;var t=Aa(e);if(t===null)return!0;var s=Qe.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&_a.call(s)==$f}var Es=Uo?Mt(Uo):Fp;function Dm(e){return Sc(e)&&e>=-me&&e<=me}var Cc=Bo?Mt(Bo):Lp;function ni(e){return typeof e=="string"||!Pe(e)&&gt(e)&&kt(e)==nt}function Jt(e){return typeof e=="symbol"||gt(e)&&kt(e)==je}var Fr=zo?Mt(zo):Dp;function Um(e){return e===r}function Bm(e){return gt(e)&&$t(e)==vt}function zm(e){return gt(e)&&kt(e)==ct}var Wm=Ga(ts),Hm=Ga(function(e,t){return e<=t});function Ec(e){if(!e)return[];if(Ut(e))return ni(e)?un(e):Dt(e);if(qr&&e[qr])return wf(e[qr]());var t=$t(e),s=t==Ze?Wi:t==tt?wa:Lr;return s(e)}function kn(e){if(!e)return e===0?e:0;if(e=cn(e),e===ke||e===-ke){var t=e<0?-1:1;return t*U}return e===e?e:0}function $e(e){var t=kn(e),s=t%1;return t===t?s?t-s:t:0}function Ac(e){return e?ur($e(e),0,de):0}function cn(e){if(typeof e=="number")return e;if(Jt(e))return xe;if(ft(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ft(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Vo(e);var s=Sn.test(e);return s||Nu.test(e)?rf(e.slice(2),s?2:8):En.test(e)?xe:+e}function Rc(e){return Cn(e,Bt(e))}function qm(e){return e?ur($e(e),-me,me):e===0?e:0}function et(e){return e==null?"":Kt(e)}var Ym=$r(function(e,t){if(ta(t)||Ut(t)){Cn(t,Et(t),e);return}for(var s in t)Qe.call(t,s)&&Kr(e,s,t[s])}),Tc=$r(function(e,t){Cn(t,Bt(t),e)}),Oc=$r(function(e,t,s,d){Cn(t,Bt(t),e,d)}),As=$r(function(e,t,s,d){Cn(t,Et(t),e,d)}),Gm=On(Mi);function Vm(e,t){var s=Pr(e);return t==null?s:ll(s,t)}var Mm=Le(function(e,t){e=rt(e);var s=-1,d=t.length,f=d>2?t[2]:r;for(f&&It(t[0],t[1],f)&&(d=1);++s<d;)for(var m=t[s],w=Bt(m),_=-1,R=w.length;++_<R;){var Y=w[_],G=e[Y];(G===r||hn(G,Rr[Y])&&!Qe.call(e,Y))&&(e[Y]=m[Y])}return e}),Km=Le(function(e){return e.push(r,Vl),Gt(Pc,r,e)});function Jm(e,t){return Ho(e,Se(t,3),Nn)}function Xm(e,t){return Ho(e,Se(t,3),Ji)}function Zm(e,t){return e==null?e:Ki(e,Se(t,3),Bt)}function Qm(e,t){return e==null?e:pl(e,Se(t,3),Bt)}function e0(e,t){return e&&Nn(e,Se(t,3))}function t0(e,t){return e&&Ji(e,Se(t,3))}function n0(e){return e==null?[]:Da(e,Et(e))}function r0(e){return e==null?[]:Da(e,Bt(e))}function Rs(e,t,s){var d=e==null?r:fr(e,t);return d===r?s:d}function a0(e,t){return e!=null&&Jl(e,t,Ap)}function Ts(e,t){return e!=null&&Jl(e,t,Rp)}var i0=Wl(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=Na.call(t)),e[t]=s},Ps(zt)),s0=Wl(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=Na.call(t)),Qe.call(e,t)?e[t].push(s):e[t]=[s]},Se),o0=Le(Xr);function Et(e){return Ut(e)?sl(e):es(e)}function Bt(e){return Ut(e)?sl(e,!0):Up(e)}function l0(e,t){var s={};return t=Se(t,3),Nn(e,function(d,f,m){_n(s,t(d,f,m),d)}),s}function c0(e,t){var s={};return t=Se(t,3),Nn(e,function(d,f,m){_n(s,f,t(d,f,m))}),s}var d0=$r(function(e,t,s){Ua(e,t,s)}),Pc=$r(function(e,t,s,d){Ua(e,t,s,d)}),u0=On(function(e,t){var s={};if(e==null)return s;var d=!1;t=ut(t,function(m){return m=Mn(m,e),d||(d=m.length>1),m}),Cn(e,hs(e),s),d&&(s=sn(s,O|W|F,sh));for(var f=t.length;f--;)ss(s,t[f]);return s});function f0(e,t){return $c(e,ei(Se(t)))}var p0=On(function(e,t){return e==null?{}:zp(e,t)});function $c(e,t){if(e==null)return{};var s=ut(hs(e),function(d){return[d]});return t=Se(t),Sl(e,s,function(d,f){return t(d,f[0])})}function h0(e,t,s){t=Mn(t,e);var d=-1,f=t.length;for(f||(f=1,e=r);++d<f;){var m=e==null?r:e[pn(t[d])];m===r&&(d=f,m=s),e=$n(m)?m.call(e):m}return e}function g0(e,t,s){return e==null?e:Qr(e,t,s)}function m0(e,t,s,d){return d=typeof d=="function"?d:r,e==null?e:Qr(e,t,s,d)}var kc=Yl(Et),Ic=Yl(Bt);function x0(e,t,s){var d=Pe(e),f=d||Jn(e)||Fr(e);if(t=Se(t,4),s==null){var m=e&&e.constructor;f?s=d?new m:[]:ft(e)?s=$n(m)?Pr(Aa(e)):{}:s={}}return(f?Vt:Nn)(e,function(w,_,R){return t(s,w,_,R)}),s}function b0(e,t){return e==null?!0:ss(e,t)}function y0(e,t,s){return e==null?e:Al(e,t,cs(s))}function v0(e,t,s,d){return d=typeof d=="function"?d:r,e==null?e:Al(e,t,cs(s),d)}function Lr(e){return e==null?[]:zi(e,Et(e))}function w0(e){return e==null?[]:zi(e,Bt(e))}function j0(e,t,s){return s===r&&(s=t,t=r),s!==r&&(s=cn(s),s=s===s?s:0),t!==r&&(t=cn(t),t=t===t?t:0),ur(cn(e),t,s)}function S0(e,t,s){return t=kn(t),s===r?(s=t,t=0):s=kn(s),e=cn(e),Tp(e,t,s)}function _0(e,t,s){if(s&&typeof s!="boolean"&&It(e,t,s)&&(t=s=r),s===r&&(typeof t=="boolean"?(s=t,t=r):typeof e=="boolean"&&(s=e,e=r)),e===r&&t===r?(e=0,t=1):(e=kn(e),t===r?(t=e,e=0):t=kn(t)),e>t){var d=e;e=t,t=d}if(s||e%1||t%1){var f=al();return Pt(e+f*(t-e+nf("1e-"+((f+"").length-1))),t)}return rs(e,t)}var N0=kr(function(e,t,s){return t=t.toLowerCase(),e+(s?Fc(t):t)});function Fc(e){return Os(et(e).toLowerCase())}function Lc(e){return e=et(e),e&&e.replace(Eu,mf).replace(Gu,"")}function C0(e,t,s){e=et(e),t=Kt(t);var d=e.length;s=s===r?d:ur($e(s),0,d);var f=s;return s-=t.length,s>=0&&e.slice(s,f)==t}function E0(e){return e=et(e),e&&ar.test(e)?e.replace(Yt,xf):e}function A0(e){return e=et(e),e&&sr.test(e)?e.replace(wn,"\\$&"):e}var R0=kr(function(e,t,s){return e+(s?"-":"")+t.toLowerCase()}),T0=kr(function(e,t,s){return e+(s?" ":"")+t.toLowerCase()}),O0=Ul("toLowerCase");function P0(e,t,s){e=et(e),t=$e(t);var d=t?Er(e):0;if(!t||d>=t)return e;var f=(t-d)/2;return Ya(Pa(f),s)+e+Ya(Oa(f),s)}function $0(e,t,s){e=et(e),t=$e(t);var d=t?Er(e):0;return t&&d<t?e+Ya(t-d,s):e}function k0(e,t,s){e=et(e),t=$e(t);var d=t?Er(e):0;return t&&d<t?Ya(t-d,s)+e:e}function I0(e,t,s){return s||t==null?t=0:t&&(t=+t),Hf(et(e).replace(jn,""),t||0)}function F0(e,t,s){return(s?It(e,t,s):t===r)?t=1:t=$e(t),as(et(e),t)}function L0(){var e=arguments,t=et(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var D0=kr(function(e,t,s){return e+(s?"_":"")+t.toLowerCase()});function U0(e,t,s){return s&&typeof s!="number"&&It(e,t,s)&&(t=s=r),s=s===r?de:s>>>0,s?(e=et(e),e&&(typeof t=="string"||t!=null&&!Es(t))&&(t=Kt(t),!t&&Cr(e))?Kn(un(e),0,s):e.split(t,s)):[]}var B0=kr(function(e,t,s){return e+(s?" ":"")+Os(t)});function z0(e,t,s){return e=et(e),s=s==null?0:ur($e(s),0,e.length),t=Kt(t),e.slice(s,s+t.length)==t}function W0(e,t,s){var d=g.templateSettings;s&&It(e,t,s)&&(t=r),e=et(e),t=As({},t,d,Gl);var f=As({},t.imports,d.imports,Gl),m=Et(f),w=zi(f,m);Vt(m,function(we){if(Ae.test(we))throw new Re(p)});var _,R,Y=0,G=t.interpolate||ma,M="__p += '",ce=Hi((t.escape||ma).source+"|"+G.source+"|"+(G===en?Ge:ma).source+"|"+(t.evaluate||ma).source+"|$","g"),ge="//# sourceURL="+(Qe.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Xu+"]")+`
`;e.replace(ce,function(we,De,ze,Xt,Ft,Zt){return ze||(ze=Xt),M+=e.slice(Y,Zt).replace(Au,bf),De&&(_=!0,M+=`' +
__e(`+De+`) +
'`),Ft&&(R=!0,M+=`';
`+Ft+`;
__p += '`),ze&&(M+=`' +
((__t = (`+ze+`)) == null ? '' : __t) +
'`),Y=Zt+we.length,we}),M+=`';
`;var _e=Qe.call(t,"variable")&&t.variable;if(!_e)M=`with (obj) {
`+M+`
}
`;else if(Ae.test(_e))throw new Re(h);M=(R?M.replace(Ye,""):M).replace(qt,"$1").replace(Lt,"$1;"),M="function("+(_e||"obj")+`) {
`+(_e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(_?", __e = _.escape":"")+(R?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+M+`return __p
}`;var Fe=Uc(function(){return Je(m,ge+"return "+M).apply(r,w)});if(Fe.source=M,Cs(Fe))throw Fe;return Fe}function H0(e){return et(e).toLowerCase()}function q0(e){return et(e).toUpperCase()}function Y0(e,t,s){if(e=et(e),e&&(s||t===r))return Vo(e);if(!e||!(t=Kt(t)))return e;var d=un(e),f=un(t),m=Mo(d,f),w=Ko(d,f)+1;return Kn(d,m,w).join("")}function G0(e,t,s){if(e=et(e),e&&(s||t===r))return e.slice(0,Xo(e)+1);if(!e||!(t=Kt(t)))return e;var d=un(e),f=Ko(d,un(t))+1;return Kn(d,0,f).join("")}function V0(e,t,s){if(e=et(e),e&&(s||t===r))return e.replace(jn,"");if(!e||!(t=Kt(t)))return e;var d=un(e),f=Mo(d,un(t));return Kn(d,f).join("")}function M0(e,t){var s=A,d=J;if(ft(t)){var f="separator"in t?t.separator:f;s="length"in t?$e(t.length):s,d="omission"in t?Kt(t.omission):d}e=et(e);var m=e.length;if(Cr(e)){var w=un(e);m=w.length}if(s>=m)return e;var _=s-Er(d);if(_<1)return d;var R=w?Kn(w,0,_).join(""):e.slice(0,_);if(f===r)return R+d;if(w&&(_+=R.length-_),Es(f)){if(e.slice(_).search(f)){var Y,G=R;for(f.global||(f=Hi(f.source,et(P.exec(f))+"g")),f.lastIndex=0;Y=f.exec(G);)var M=Y.index;R=R.slice(0,M===r?_:M)}}else if(e.indexOf(Kt(f),_)!=_){var ce=R.lastIndexOf(f);ce>-1&&(R=R.slice(0,ce))}return R+d}function K0(e){return e=et(e),e&&bn.test(e)?e.replace(xn,Nf):e}var J0=kr(function(e,t,s){return e+(s?" ":"")+t.toUpperCase()}),Os=Ul("toUpperCase");function Dc(e,t,s){return e=et(e),t=s?r:t,t===r?vf(e)?Af(e):uf(e):e.match(t)||[]}var Uc=Le(function(e,t){try{return Gt(e,r,t)}catch(s){return Cs(s)?s:new Re(s)}}),X0=On(function(e,t){return Vt(t,function(s){s=pn(s),_n(e,s,_s(e[s],e))}),e});function Z0(e){var t=e==null?0:e.length,s=Se();return e=t?ut(e,function(d){if(typeof d[1]!="function")throw new rn(u);return[s(d[0]),d[1]]}):[],Le(function(d){for(var f=-1;++f<t;){var m=e[f];if(Gt(m[0],this,d))return Gt(m[1],this,d)}})}function Q0(e){return Np(sn(e,O))}function Ps(e){return function(){return e}}function ex(e,t){return e==null||e!==e?t:e}var tx=zl(),nx=zl(!0);function zt(e){return e}function $s(e){return xl(typeof e=="function"?e:sn(e,O))}function rx(e){return yl(sn(e,O))}function ax(e,t){return vl(e,sn(t,O))}var ix=Le(function(e,t){return function(s){return Xr(s,e,t)}}),sx=Le(function(e,t){return function(s){return Xr(e,s,t)}});function ks(e,t,s){var d=Et(t),f=Da(t,d);s==null&&!(ft(t)&&(f.length||!d.length))&&(s=t,t=e,e=this,f=Da(t,Et(t)));var m=!(ft(s)&&"chain"in s)||!!s.chain,w=$n(e);return Vt(f,function(_){var R=t[_];e[_]=R,w&&(e.prototype[_]=function(){var Y=this.__chain__;if(m||Y){var G=e(this.__wrapped__),M=G.__actions__=Dt(this.__actions__);return M.push({func:R,args:arguments,thisArg:e}),G.__chain__=Y,G}return R.apply(e,Hn([this.value()],arguments))})}),e}function ox(){return Rt._===this&&(Rt._=kf),this}function Is(){}function lx(e){return e=$e(e),Le(function(t){return wl(t,e)})}var cx=us(ut),dx=us(Wo),ux=us(Fi);function Bc(e){return bs(e)?Li(pn(e)):Wp(e)}function fx(e){return function(t){return e==null?r:fr(e,t)}}var px=Hl(),hx=Hl(!0);function Fs(){return[]}function Ls(){return!1}function gx(){return{}}function mx(){return""}function xx(){return!0}function bx(e,t){if(e=$e(e),e<1||e>me)return[];var s=de,d=Pt(e,de);t=Se(t),e-=de;for(var f=Bi(d,t);++s<e;)t(s);return f}function yx(e){return Pe(e)?ut(e,pn):Jt(e)?[e]:Dt(ic(et(e)))}function vx(e){var t=++Pf;return et(e)+t}var wx=qa(function(e,t){return e+t},0),jx=fs("ceil"),Sx=qa(function(e,t){return e/t},1),_x=fs("floor");function Nx(e){return e&&e.length?La(e,zt,Xi):r}function Cx(e,t){return e&&e.length?La(e,Se(t,2),Xi):r}function Ex(e){return Yo(e,zt)}function Ax(e,t){return Yo(e,Se(t,2))}function Rx(e){return e&&e.length?La(e,zt,ts):r}function Tx(e,t){return e&&e.length?La(e,Se(t,2),ts):r}var Ox=qa(function(e,t){return e*t},1),Px=fs("round"),$x=qa(function(e,t){return e-t},0);function kx(e){return e&&e.length?Ui(e,zt):0}function Ix(e,t){return e&&e.length?Ui(e,Se(t,2)):0}return g.after=am,g.ary=mc,g.assign=Ym,g.assignIn=Tc,g.assignInWith=Oc,g.assignWith=As,g.at=Gm,g.before=xc,g.bind=_s,g.bindAll=X0,g.bindKey=bc,g.castArray=mm,g.chain=pc,g.chunk=Nh,g.compact=Ch,g.concat=Eh,g.cond=Z0,g.conforms=Q0,g.constant=Ps,g.countBy=Ig,g.create=Vm,g.curry=yc,g.curryRight=vc,g.debounce=wc,g.defaults=Mm,g.defaultsDeep=Km,g.defer=im,g.delay=sm,g.difference=Ah,g.differenceBy=Rh,g.differenceWith=Th,g.drop=Oh,g.dropRight=Ph,g.dropRightWhile=$h,g.dropWhile=kh,g.fill=Ih,g.filter=Lg,g.flatMap=Bg,g.flatMapDeep=zg,g.flatMapDepth=Wg,g.flatten=cc,g.flattenDeep=Fh,g.flattenDepth=Lh,g.flip=om,g.flow=tx,g.flowRight=nx,g.fromPairs=Dh,g.functions=n0,g.functionsIn=r0,g.groupBy=Hg,g.initial=Bh,g.intersection=zh,g.intersectionBy=Wh,g.intersectionWith=Hh,g.invert=i0,g.invertBy=s0,g.invokeMap=Yg,g.iteratee=$s,g.keyBy=Gg,g.keys=Et,g.keysIn=Bt,g.map=Xa,g.mapKeys=l0,g.mapValues=c0,g.matches=rx,g.matchesProperty=ax,g.memoize=Qa,g.merge=d0,g.mergeWith=Pc,g.method=ix,g.methodOf=sx,g.mixin=ks,g.negate=ei,g.nthArg=lx,g.omit=u0,g.omitBy=f0,g.once=lm,g.orderBy=Vg,g.over=cx,g.overArgs=cm,g.overEvery=dx,g.overSome=ux,g.partial=Ns,g.partialRight=jc,g.partition=Mg,g.pick=p0,g.pickBy=$c,g.property=Bc,g.propertyOf=fx,g.pull=Vh,g.pullAll=uc,g.pullAllBy=Mh,g.pullAllWith=Kh,g.pullAt=Jh,g.range=px,g.rangeRight=hx,g.rearg=dm,g.reject=Xg,g.remove=Xh,g.rest=um,g.reverse=js,g.sampleSize=Qg,g.set=g0,g.setWith=m0,g.shuffle=em,g.slice=Zh,g.sortBy=rm,g.sortedUniq=ig,g.sortedUniqBy=sg,g.split=U0,g.spread=fm,g.tail=og,g.take=lg,g.takeRight=cg,g.takeRightWhile=dg,g.takeWhile=ug,g.tap=Cg,g.throttle=pm,g.thru=Ja,g.toArray=Ec,g.toPairs=kc,g.toPairsIn=Ic,g.toPath=yx,g.toPlainObject=Rc,g.transform=x0,g.unary=hm,g.union=fg,g.unionBy=pg,g.unionWith=hg,g.uniq=gg,g.uniqBy=mg,g.uniqWith=xg,g.unset=b0,g.unzip=Ss,g.unzipWith=fc,g.update=y0,g.updateWith=v0,g.values=Lr,g.valuesIn=w0,g.without=bg,g.words=Dc,g.wrap=gm,g.xor=yg,g.xorBy=vg,g.xorWith=wg,g.zip=jg,g.zipObject=Sg,g.zipObjectDeep=_g,g.zipWith=Ng,g.entries=kc,g.entriesIn=Ic,g.extend=Tc,g.extendWith=Oc,ks(g,g),g.add=wx,g.attempt=Uc,g.camelCase=N0,g.capitalize=Fc,g.ceil=jx,g.clamp=j0,g.clone=xm,g.cloneDeep=ym,g.cloneDeepWith=vm,g.cloneWith=bm,g.conformsTo=wm,g.deburr=Lc,g.defaultTo=ex,g.divide=Sx,g.endsWith=C0,g.eq=hn,g.escape=E0,g.escapeRegExp=A0,g.every=Fg,g.find=Dg,g.findIndex=oc,g.findKey=Jm,g.findLast=Ug,g.findLastIndex=lc,g.findLastKey=Xm,g.floor=_x,g.forEach=hc,g.forEachRight=gc,g.forIn=Zm,g.forInRight=Qm,g.forOwn=e0,g.forOwnRight=t0,g.get=Rs,g.gt=jm,g.gte=Sm,g.has=a0,g.hasIn=Ts,g.head=dc,g.identity=zt,g.includes=qg,g.indexOf=Uh,g.inRange=S0,g.invoke=o0,g.isArguments=gr,g.isArray=Pe,g.isArrayBuffer=_m,g.isArrayLike=Ut,g.isArrayLikeObject=mt,g.isBoolean=Nm,g.isBuffer=Jn,g.isDate=Cm,g.isElement=Em,g.isEmpty=Am,g.isEqual=Rm,g.isEqualWith=Tm,g.isError=Cs,g.isFinite=Om,g.isFunction=$n,g.isInteger=Sc,g.isLength=ti,g.isMap=_c,g.isMatch=Pm,g.isMatchWith=$m,g.isNaN=km,g.isNative=Im,g.isNil=Lm,g.isNull=Fm,g.isNumber=Nc,g.isObject=ft,g.isObjectLike=gt,g.isPlainObject=ra,g.isRegExp=Es,g.isSafeInteger=Dm,g.isSet=Cc,g.isString=ni,g.isSymbol=Jt,g.isTypedArray=Fr,g.isUndefined=Um,g.isWeakMap=Bm,g.isWeakSet=zm,g.join=qh,g.kebabCase=R0,g.last=ln,g.lastIndexOf=Yh,g.lowerCase=T0,g.lowerFirst=O0,g.lt=Wm,g.lte=Hm,g.max=Nx,g.maxBy=Cx,g.mean=Ex,g.meanBy=Ax,g.min=Rx,g.minBy=Tx,g.stubArray=Fs,g.stubFalse=Ls,g.stubObject=gx,g.stubString=mx,g.stubTrue=xx,g.multiply=Ox,g.nth=Gh,g.noConflict=ox,g.noop=Is,g.now=Za,g.pad=P0,g.padEnd=$0,g.padStart=k0,g.parseInt=I0,g.random=_0,g.reduce=Kg,g.reduceRight=Jg,g.repeat=F0,g.replace=L0,g.result=h0,g.round=Px,g.runInContext=E,g.sample=Zg,g.size=tm,g.snakeCase=D0,g.some=nm,g.sortedIndex=Qh,g.sortedIndexBy=eg,g.sortedIndexOf=tg,g.sortedLastIndex=ng,g.sortedLastIndexBy=rg,g.sortedLastIndexOf=ag,g.startCase=B0,g.startsWith=z0,g.subtract=$x,g.sum=kx,g.sumBy=Ix,g.template=W0,g.times=bx,g.toFinite=kn,g.toInteger=$e,g.toLength=Ac,g.toLower=H0,g.toNumber=cn,g.toSafeInteger=qm,g.toString=et,g.toUpper=q0,g.trim=Y0,g.trimEnd=G0,g.trimStart=V0,g.truncate=M0,g.unescape=K0,g.uniqueId=vx,g.upperCase=J0,g.upperFirst=Os,g.each=hc,g.eachRight=gc,g.first=dc,ks(g,function(){var e={};return Nn(g,function(t,s){Qe.call(g.prototype,s)||(e[s]=t)}),e}(),{chain:!1}),g.VERSION=o,Vt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){g[e].placeholder=g}),Vt(["drop","take"],function(e,t){Ue.prototype[e]=function(s){s=s===r?1:Nt($e(s),0);var d=this.__filtered__&&!t?new Ue(this):this.clone();return d.__filtered__?d.__takeCount__=Pt(s,d.__takeCount__):d.__views__.push({size:Pt(s,de),type:e+(d.__dir__<0?"Right":"")}),d},Ue.prototype[e+"Right"]=function(s){return this.reverse()[e](s).reverse()}}),Vt(["filter","map","takeWhile"],function(e,t){var s=t+1,d=s==X||s==Oe;Ue.prototype[e]=function(f){var m=this.clone();return m.__iteratees__.push({iteratee:Se(f,3),type:s}),m.__filtered__=m.__filtered__||d,m}}),Vt(["head","last"],function(e,t){var s="take"+(t?"Right":"");Ue.prototype[e]=function(){return this[s](1).value()[0]}}),Vt(["initial","tail"],function(e,t){var s="drop"+(t?"":"Right");Ue.prototype[e]=function(){return this.__filtered__?new Ue(this):this[s](1)}}),Ue.prototype.compact=function(){return this.filter(zt)},Ue.prototype.find=function(e){return this.filter(e).head()},Ue.prototype.findLast=function(e){return this.reverse().find(e)},Ue.prototype.invokeMap=Le(function(e,t){return typeof e=="function"?new Ue(this):this.map(function(s){return Xr(s,e,t)})}),Ue.prototype.reject=function(e){return this.filter(ei(Se(e)))},Ue.prototype.slice=function(e,t){e=$e(e);var s=this;return s.__filtered__&&(e>0||t<0)?new Ue(s):(e<0?s=s.takeRight(-e):e&&(s=s.drop(e)),t!==r&&(t=$e(t),s=t<0?s.dropRight(-t):s.take(t-e)),s)},Ue.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Ue.prototype.toArray=function(){return this.take(de)},Nn(Ue.prototype,function(e,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),d=/^(?:head|last)$/.test(t),f=g[d?"take"+(t=="last"?"Right":""):t],m=d||/^find/.test(t);f&&(g.prototype[t]=function(){var w=this.__wrapped__,_=d?[1]:arguments,R=w instanceof Ue,Y=_[0],G=R||Pe(w),M=function(De){var ze=f.apply(g,Hn([De],_));return d&&ce?ze[0]:ze};G&&s&&typeof Y=="function"&&Y.length!=1&&(R=G=!1);var ce=this.__chain__,ge=!!this.__actions__.length,_e=m&&!ce,Fe=R&&!ge;if(!m&&G){w=Fe?w:new Ue(this);var we=e.apply(w,_);return we.__actions__.push({func:Ja,args:[M],thisArg:r}),new an(we,ce)}return _e&&Fe?e.apply(this,_):(we=this.thru(M),_e?d?we.value()[0]:we.value():we)})}),Vt(["pop","push","shift","sort","splice","unshift"],function(e){var t=ja[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",d=/^(?:pop|shift)$/.test(e);g.prototype[e]=function(){var f=arguments;if(d&&!this.__chain__){var m=this.value();return t.apply(Pe(m)?m:[],f)}return this[s](function(w){return t.apply(Pe(w)?w:[],f)})}}),Nn(Ue.prototype,function(e,t){var s=g[t];if(s){var d=s.name+"";Qe.call(Or,d)||(Or[d]=[]),Or[d].push({name:t,func:s})}}),Or[Ha(r,D).name]=[{name:"wrapper",func:r}],Ue.prototype.clone=Jf,Ue.prototype.reverse=Xf,Ue.prototype.value=Zf,g.prototype.at=Eg,g.prototype.chain=Ag,g.prototype.commit=Rg,g.prototype.next=Tg,g.prototype.plant=Pg,g.prototype.reverse=$g,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=kg,g.prototype.first=g.prototype.head,qr&&(g.prototype[qr]=Og),g},Ar=Rf();or?((or.exports=Ar)._=Ar,Pi._=Ar):Rt._=Ar}).call(Pv)}(ca,ca.exports)),ca.exports}var kv=$v();const Iv="/x-pense-app/assets/bitcoin-DEGqceNT.png",Fv="/x-pense-app/assets/ethereum-CuEFbPJh.png",Lv="/x-pense-app/assets/usdc-LEAjTsRZ.png",Dv=({darkMode:a,investments:i,setInvestments:r,amounts:o,setAmounts:l,marketCaps:c,setMarketCaps:u,formatCurrency:h,addedInvestments:p,setAddedInvestments:x})=>{const v=rr(),[b,O]=S.useState(!1),[W,F]=S.useState(""),[$,L]=S.useState({}),[V,D]=S.useState({}),[N,C]=S.useState(!1);S.useEffect(()=>{(async()=>{var X,oe,Oe,ke,me,U;try{O(!0);const xe=await Xe.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),de=await Xe.get("https://api.coinbase.com/v2/prices/ETH-USD/spot"),H=await Xe.get("https://api.coinbase.com/v2/prices/USDC-USD/spot"),Q=((oe=(X=xe.data)==null?void 0:X.bitcoin)==null?void 0:oe.usd)||0,le=parseFloat((ke=(Oe=de.data)==null?void 0:Oe.data)==null?void 0:ke.amount)||0,ue=parseFloat((U=(me=H.data)==null?void 0:me.data)==null?void 0:U.amount)||1,Ce=i.reduce((q,ve)=>(q[ve.id]=ve.pricePerUnit,q),{}),Ve=[{id:"bitcoin",name:"Bitcoin",type:"Cryptocurrency",pricePerUnit:Q},{id:"ethereum",name:"Ethereum",type:"Cryptocurrency",pricePerUnit:le},{id:"usd-coin",name:"USDC",type:"Stablecoin",pricePerUnit:ue}],ie={};Ve.forEach(q=>{const ve=Ce[q.id];ve&&ve!==q.pricePerUnit&&(ie[q.id]=q.pricePerUnit>ve?"up":"down")}),L(ie),r(Ve),l(Ve.map(()=>0)),setTimeout(()=>L({}),3e3)}catch(xe){console.error("Error fetching investments",xe),F("❌ Failed to fetch live prices. Please try again."),setTimeout(()=>F(""),3e3)}finally{O(!1)}})()},[r,l]),S.useEffect(()=>{const T=async()=>{try{const X=i.map(Oe=>Oe.id).join(","),oe=await bt.get("/api/coins/markets",{params:{ids:X}});if(console.log("INVESTMENTS COMPONENTS"),console.log("Market cap response:",oe.data),Array.isArray(oe.data)){const Oe=oe.data.reduce((ke,me)=>(ke[me.id]=me.market_cap,ke),{});console.log("Market cap data:",Oe),u(Oe)}else console.error("Expected an array but got:",oe.data)}catch(X){console.error("Error fetching market cap data:",X)}};i.length>0&&T()},[i]);const ne=kv.debounce((T,X)=>{const oe=[...o],Oe=parseFloat(X);isNaN(Oe)||(oe[T]=Oe,l(oe))},300),re=(T,X)=>(T*X).toFixed(2),be=async T=>{const X=i[T],oe=o[T];if(!oe||oe<=0){F("⚠️ Please enter a valid amount greater than 0"),setTimeout(()=>F(""),3e3);return}O(!0);const Oe=re(oe,X.pricePerUnit),ke={...X,amount:oe,totalPrice:Oe};try{const me=p.findIndex(xe=>xe.name===ke.name);if(me!==-1){const xe=p[me],de=xe.amount+oe,H=re(de,X.pricePerUnit),Q=await bt.put(`/investments/${xe.id}`,{amount:de,totalPrice:H},{headers:{"Content-Type":"application/json"}}),le=[...p];le[me]={...xe,amount:de,totalPrice:H},x(le),F(`💰 Updated ${X.name} investment successfully!`)}else{const xe=await bt.post("/investments",ke,{headers:{"Content-Type":"application/json"}});x([...p,ke]),F(`🚀 Added ${X.name} investment successfully!`)}D({...V,[T]:!0}),setTimeout(()=>{D({...V,[T]:!1})},1e3);const U=[...o];U[T]=0,l(U),setTimeout(()=>F(""),3e3),setTimeout(()=>v("/dashboard"),2e3)}catch(me){console.error("Error adding/updating investment:",me),F("❌ Failed to add investment. Please try again."),setTimeout(()=>F(""),3e3)}finally{O(!1)}},ae=T=>{var oe;const X=[...o];X[T]=0,l(X),F(`🔄 Reset ${(oe=i[T])==null?void 0:oe.name} amount`),setTimeout(()=>F(""),2e3)},fe=async()=>{var T,X,oe,Oe,ke,me;C(!0);try{const U=await Xe.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),xe=await Xe.get("https://api.coinbase.com/v2/prices/ETH-USD/spot"),de=await Xe.get("https://api.coinbase.com/v2/prices/USDC-USD/spot"),H=((X=(T=U.data)==null?void 0:T.bitcoin)==null?void 0:X.usd)||0,Q=parseFloat((Oe=(oe=xe.data)==null?void 0:oe.data)==null?void 0:Oe.amount)||0,le=parseFloat((me=(ke=de.data)==null?void 0:ke.data)==null?void 0:me.amount)||1;r([{id:"bitcoin",name:"Bitcoin",type:"Cryptocurrency",pricePerUnit:H},{id:"ethereum",name:"Ethereum",type:"Cryptocurrency",pricePerUnit:Q},{id:"usd-coin",name:"USDC",type:"Stablecoin",pricePerUnit:le}]),F("🔄 Prices refreshed successfully!"),setTimeout(()=>F(""),3e3)}catch(U){console.error("Error refreshing prices:",U),F("❌ Failed to refresh prices. Please try again."),setTimeout(()=>F(""),3e3)}finally{C(!1)}},ye=T=>{if(!T)return null;switch(T.toLowerCase()){case"bitcoin":return n.jsx("img",{src:Iv,alt:"Bitcoin",className:"crypto-icon",style:{width:"24px",height:"24px"}});case"ethereum":return n.jsx("img",{src:Fv,alt:"Ethereum",className:"crypto-icon",style:{width:"24px",height:"24px"}});case"usdc":return n.jsx("img",{src:Lv,alt:"USDC",className:"crypto-icon",style:{width:"24px",height:"24px"}});default:return n.jsx("div",{className:"crypto-placeholder",children:"💰"})}},A=T=>T>=1e12?`${(T/1e12).toFixed(2)} Trillion`:T>=1e9?`${(T/1e9).toFixed(2)} Billion`:T.toLocaleString(),J=T=>{const X=$[T];return X==="up"?"📈":X==="down"?"📉":""},se=T=>{const X=$[T];return X==="up"?"price-up":X==="down"?"price-down":""};return n.jsxs("div",{className:"investments-container",children:[n.jsx("style",{jsx:!0,children:`
                .investments-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .investments-header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    position: relative;
                    overflow: hidden;
                }

                .investments-header::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
                }

                .investments-header h5 {
                    font-size: 1.8rem;
                    margin: 0 0 10px 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                    position: relative;
                    z-index: 1;
                }

                .investments-subtitle {
                    font-size: 1.1rem;
                    opacity: 0.9;
                    margin: 0;
                    position: relative;
                    z-index: 1;
                }

                .control-section {
                    background: ${a?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 15px;
                    padding: 25px;
                    margin-bottom: 25px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 15px;
                }

                .live-indicator {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 600;
                    color: ${a?"#e2e8f0":"#2d3748"};
                }

                .live-badge {
                    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
                    color: white;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    box-shadow: 0 2px 8px rgba(229, 62, 62, 0.4);
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                .refresh-button {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    border: none;
                    padding: 12px 20px;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .refresh-button:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(56, 161, 105, 0.6);
                }

                .refresh-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .loading-spinner {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .success-message {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    font-weight: 600;
                    text-align: center;
                    box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    animation: slideIn 0.5s ease;
                }

                @keyframes slideIn {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .table-container {
                    background: ${a?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .enhanced-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: ${a?"#2d3748":"#ffffff"};
                    table-layout: fixed;
                }

                .enhanced-table th {
                    background: ${a?"#4a5568":"#667eea"};
                    color: white;
                    padding: 18px 15px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 1rem;
                    border-bottom: 3px solid ${a?"#2d3748":"#5a67d8"};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .enhanced-table th:nth-child(1) { width: 22%; } /* Name */
                .enhanced-table th:nth-child(2) { width: 10%; } /* Symbol */
                .enhanced-table th:nth-child(3) { width: 12%; } /* Type */
                .enhanced-table th:nth-child(4) { width: 15%; } /* Price */
                .enhanced-table th:nth-child(5) { width: 17%; } /* Market Cap */
                .enhanced-table th:nth-child(6) { width: 10%; } /* Amount */
                .enhanced-table th:nth-child(7) { width: 14%; } /* Actions */

                .enhanced-table td {
                    padding: 15px;
                    border-bottom: 1px solid ${a?"#4a5568":"#e2e8f0"};
                    color: ${a?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .table-row {
                    transition: all 0.3s ease;
                    position: relative;
                }

                .table-row:hover {
                    background: ${a?"#4a5568":"#f7fafc"};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-row.animate {
                    animation: rowSuccess 1s ease;
                }

                @keyframes rowSuccess {
                    0%, 100% { background: ${a?"#2d3748":"#ffffff"}; }
                    50% { background: rgba(56, 161, 105, 0.2); }
                }

                .crypto-name-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 600;
                    font-size: 1.1rem;
                }

                .crypto-icon {
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .crypto-icon:hover {
                    transform: scale(1.1);
                }

                .crypto-placeholder {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
                    border-radius: 50%;
                    font-size: 12px;
                }

                .type-badge {
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    display: inline-block;
                    white-space: nowrap;
                }

                .type-crypto {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }

                .type-stablecoin {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                }

                .price-cell {
                    font-weight: 700;
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    transition: all 0.3s ease;
                }

                .price-up {
                    color: #38a169;
                    animation: priceFlash 0.5s ease;
                }

                .price-down {
                    color: #e53e3e;
                    animation: priceFlash 0.5s ease;
                }

                @keyframes priceFlash {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }

                .market-cap-cell {
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: ${a?"#68d391":"#38a169"};
                }

                .amount-input {
                    width: 100%;
                    max-width: 80px;
                    padding: 8px 10px;
                    border: 2px solid ${a?"#4a5568":"#e2e8f0"};
                    border-radius: 8px;
                    background: ${a?"#2d3748":"#ffffff"};
                    color: ${a?"#e2e8f0":"#2d3748"};
                    font-size: 0.85rem;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .amount-input:focus {
                    outline: none;
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                    transform: scale(1.05);
                }

                .action-buttons {
                    display: flex;
                    gap: 6px;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                }

                .btn-modern {
                    padding: 6px 10px;
                    border: none;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.7rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    min-width: 55px;
                    justify-content: center;
                    white-space: nowrap;
                }

                .btn-add {
                    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(56, 161, 105, 0.4);
                }

                .btn-add:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.6);
                }

                .btn-reset {
                    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                    color: white;
                    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
                }

                .btn-reset:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.6);
                }

                .btn-modern:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none !important;
                }

                .loading-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                }

                .loading-container {
                    text-align: center;
                    padding: 40px;
                    color: ${a?"#e2e8f0":"#2d3748"};
                }

                .large-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid ${a?"#4a5568":"#e2e8f0"};
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 15px;
                }

                @media (max-width: 768px) {
                    .investments-container {
                        padding: 10px;
                    }

                    .investments-header {
                        padding: 20px 15px;
                        margin-bottom: 20px;
                    }

                    .investments-header h5 {
                        font-size: 1.4rem;
                    }

                    .investments-subtitle {
                        font-size: 0.9rem;
                    }

                    .control-section {
                        flex-direction: column;
                        text-align: center;
                        padding: 15px;
                    }

                    .refresh-button {
                        width: 100%;
                        justify-content: center;
                    }

                    /* Hide table and show card layout on mobile */
                    .table-container {
                        display: none;
                    }

                    .mobile-cards {
                        display: block;
                        gap: 15px;
                    }

                    .investment-card {
                        background: ${a?"#2d3748":"#ffffff"};
                        border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
                        border-radius: 15px;
                        padding: 20px;
                        margin-bottom: 15px;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                    }

                    .investment-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                    }

                    .investment-card.animate {
                        animation: cardSuccess 1s ease;
                    }

                    @keyframes cardSuccess {
                        0%, 100% { background: ${a?"#2d3748":"#ffffff"}; }
                        50% { background: rgba(56, 161, 105, 0.2); }
                    }

                    .card-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom: 15px;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .card-crypto-info {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        flex: 1;
                        min-width: 200px;
                    }

                    .card-crypto-name {
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: ${a?"#e2e8f0":"#2d3748"};
                        margin: 0;
                    }

                    .card-crypto-symbol {
                        font-size: 0.9rem;
                        font-weight: 600;
                        color: ${a?"#a0aec0":"#4a5568"};
                        text-transform: uppercase;
                    }

                    .card-price {
                        font-size: 1.3rem;
                        font-weight: 700;
                        color: ${a?"#68d391":"#38a169"};
                        white-space: nowrap;
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }

                    .card-details {
                        display: grid;
                        grid-template-columns: auto 1fr;
                        gap: 10px 15px;
                        margin-bottom: 20px;
                        align-items: center;
                    }

                    .card-label {
                        font-weight: 600;
                        color: ${a?"#a0aec0":"#4a5568"};
                        font-size: 0.9rem;
                    }

                    .card-value {
                        color: ${a?"#e2e8f0":"#2d3748"};
                        font-size: 0.95rem;
                        font-weight: 500;
                    }

                    .card-market-cap {
                        color: ${a?"#68d391":"#38a169"};
                        font-weight: 600;
                    }

                    .card-input-section {
                        background: ${a?"#4a5568":"#f7fafc"};
                        border-radius: 12px;
                        padding: 20px;
                        margin-bottom: 20px;
                    }

                    .input-label {
                        font-weight: 600;
                        color: ${a?"#e2e8f0":"#2d3748"};
                        margin-bottom: 10px;
                        display: block;
                        font-size: 1rem;
                    }

                    .amount-input-mobile {
                        width: 100%;
                        padding: 15px;
                        border: 2px solid ${a?"#4a5568":"#e2e8f0"};
                        border-radius: 10px;
                        background: ${a?"#2d3748":"#ffffff"};
                        color: ${a?"#e2e8f0":"#2d3748"};
                        font-size: 1.1rem;
                        text-align: center;
                        transition: all 0.3s ease;
                        margin-bottom: 15px;
                    }

                    .amount-input-mobile:focus {
                        outline: none;
                        border-color: #667eea;
                        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
                        transform: scale(1.02);
                    }

                    .card-actions {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                    }

                    .btn-modern-mobile {
                        padding: 15px 20px;
                        border: none;
                        border-radius: 10px;
                        font-weight: 700;
                        font-size: 1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        text-decoration: none;
                    }

                    .btn-add-mobile {
                        background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
                        color: white;
                        box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
                    }

                    .btn-add-mobile:hover:not(:disabled) {
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba(56, 161, 105, 0.6);
                    }

                    .btn-reset-mobile {
                        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
                        color: white;
                        box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
                    }

                    .btn-reset-mobile:hover:not(:disabled) {
                        transform: translateY(-2px);
                        box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
                    }

                    .btn-modern-mobile:disabled {
                        opacity: 0.7;
                        cursor: not-allowed;
                        transform: none !important;
                    }

                    .mobile-loading-card {
                        text-align: center;
                        padding: 40px;
                        background: ${a?"#2d3748":"#ffffff"};
                        border-radius: 15px;
                        border: ${a?"2px solid #4a5568":"2px solid #e2e8f0"};
                    }

                    .price-up-mobile {
                        color: #38a169;
                        animation: priceFlashMobile 0.5s ease;
                    }

                    .price-down-mobile {
                        color: #e53e3e;
                        animation: priceFlashMobile 0.5s ease;
                    }

                    @keyframes priceFlashMobile {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.6; transform: scale(1.05); }
                    }
                }

                @media (min-width: 769px) {
                    .mobile-cards {
                        display: none;
                    }
                    
                    .table-container {
                        display: block;
                    }
                }
            `}),n.jsxs("div",{className:"investments-header",children:[n.jsx("h5",{children:"🚀 Crypto Investments"}),n.jsx("p",{className:"investments-subtitle",children:"Invest in the future with real-time market data"})]}),W&&n.jsx("div",{className:"success-message",children:W}),n.jsxs("div",{className:"control-section",children:[n.jsxs("div",{className:"live-indicator",children:[n.jsx("span",{className:"live-badge",children:"Live"}),n.jsx("span",{children:"📊 Make Informed Decisions With Live Crypto Updates"})]}),n.jsxs("button",{className:"refresh-button",onClick:fe,disabled:N,children:[N?n.jsx("span",{className:"loading-spinner"}):"🔄",N?"Refreshing...":"Refresh Prices"]})]}),n.jsx("div",{className:"table-container",children:b&&i.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading investment data..."})]}):n.jsxs(n.Fragment,{children:[b&&n.jsx("div",{className:"loading-overlay",children:n.jsx("div",{className:"large-spinner"})}),n.jsxs("table",{className:"enhanced-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Symbol"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Market Cap"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:i.map((T,X)=>n.jsxs("tr",{className:`table-row ${V[X]?"animate":""}`,children:[n.jsxs("td",{className:"crypto-name-cell",children:[ye(T.name),n.jsx("span",{children:T.name})]}),n.jsx("td",{children:n.jsx("span",{style:{fontWeight:"600",textTransform:"uppercase",fontSize:"0.9rem"},children:T.id==="bitcoin"?"BTC":T.id==="ethereum"?"ETH":T.id==="usd-coin"?"USDC":T.name.substring(0,3).toUpperCase()})}),n.jsx("td",{children:n.jsx("span",{className:`type-badge ${T.type==="Cryptocurrency"?"type-crypto":"type-stablecoin"}`,children:T.type==="Cryptocurrency"?"Crypto":"Stable"})}),n.jsxs("td",{className:`price-cell ${se(T.id)}`,children:[n.jsx("span",{children:h(T.pricePerUnit)}),n.jsx("span",{children:J(T.id)})]}),n.jsx("td",{className:"market-cap-cell",children:c[T.id]?`$${A(c[T.id])}`:n.jsx("span",{style:{opacity:.7},children:"Loading..."})}),n.jsx("td",{children:n.jsx("input",{type:"number",className:"amount-input",value:o[X]||"",placeholder:"0.00",name:`investment-amount-${X}`,onChange:oe=>ne(X,oe.target.value),step:"0.01",min:"0"})}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{className:"btn-modern btn-add",onClick:()=>be(X),disabled:b||!o[X]||o[X]<=0,children:[b?n.jsx("span",{className:"loading-spinner"}):"💰","Add"]}),n.jsx("button",{className:"btn-modern btn-reset",onClick:()=>ae(X),disabled:b,children:"🔄 Reset"})]})})]},T.id))})]})]})}),n.jsx("div",{className:"mobile-cards",children:b&&i.length===0?n.jsxs("div",{className:"mobile-loading-card",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading investment data..."})]}):n.jsx(n.Fragment,{children:i.map((T,X)=>n.jsxs("div",{className:`investment-card ${V[X]?"animate":""}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"card-crypto-info",children:[ye(T.name),n.jsxs("div",{children:[n.jsx("div",{className:"card-crypto-name",children:T.name}),n.jsx("div",{className:"card-crypto-symbol",children:T.id==="bitcoin"?"BTC":T.id==="ethereum"?"ETH":T.id==="usd-coin"?"USDC":T.name.substring(0,3).toUpperCase()})]})]}),n.jsxs("div",{className:`card-price ${se(T.id)==="price-up"?"price-up-mobile":se(T.id)==="price-down"?"price-down-mobile":""}`,children:[n.jsx("span",{children:h(T.pricePerUnit)}),n.jsx("span",{children:J(T.id)})]})]}),n.jsxs("div",{className:"card-details",children:[n.jsx("span",{className:"card-label",children:"🏷️ Type:"}),n.jsx("span",{className:`card-value type-badge ${T.type==="Cryptocurrency"?"type-crypto":"type-stablecoin"}`,children:T.type==="Cryptocurrency"?"Crypto":"Stable"}),n.jsx("span",{className:"card-label",children:"📊 Market Cap:"}),n.jsx("span",{className:"card-value card-market-cap",children:c[T.id]?`$${A(c[T.id])}`:n.jsx("span",{style:{opacity:.7},children:"Loading..."})})]}),n.jsxs("div",{className:"card-input-section",children:[n.jsx("label",{className:"input-label",children:"💰 Investment Amount"}),n.jsx("input",{type:"number",className:"amount-input-mobile",value:o[X]||"",placeholder:"0.00",name:`investment-amount-${X}`,onChange:oe=>ne(X,oe.target.value),step:"0.01",min:"0"}),n.jsxs("div",{className:"card-actions",children:[n.jsxs("button",{className:"btn-modern-mobile btn-add-mobile",onClick:()=>be(X),disabled:b||!o[X]||o[X]<=0,children:[b?n.jsx("span",{className:"loading-spinner"}):"💰","Add Investment"]}),n.jsx("button",{className:"btn-modern-mobile btn-reset-mobile",onClick:()=>ae(X),disabled:b,children:"🔄 Reset"})]})]})]},T.id))})})]})},Uv="/x-pense-app/assets/intro_01-CLbcXq8c.mp3";function _u(){return n.jsx("footer",{className:"text-center my-5 footer fade-in",children:n.jsxs("p",{children:["©",new Date().getFullYear()," MarlonShade. All rights reserved."]})})}const Bv=()=>{const a=rr(),i=()=>{const r=new Audio(Uv);r.volume=.1,r.play().catch(o=>{console.error("Error playing audio",o)}),a("/dashboard")};return n.jsx("div",{className:"intro-margin",children:n.jsx("div",{className:"start-page-container",children:n.jsxs("div",{className:"start-page-content",children:[n.jsx("h1",{className:"intro metallic-shadow fade-in",children:"X-PENSE".split("").map((r,o)=>n.jsx("span",{className:`char char-${o}`,children:r},o))}),n.jsx("p",{className:"subtitle fade-in ",children:"Your Friendly Budget Tracker"}),n.jsx("button",{onClick:i,className:"btn-enhanced fade-in",children:"Get Started"}),n.jsx(_u,{})]})})})},zv=({darkMode:a})=>{const[i,r]=S.useState(""),[o,l]=S.useState(null),[c,u]=S.useState(br.getStats()),h=()=>{if(i.trim()){const x=br.categorizeTransaction(i);l(x)}},p=["STARBUCKS #1234 NEW YORK","SHELL GAS STATION #567","AMAZON.COM PURCHASE","WALMART SUPERCENTER #890","NETFLIX MONTHLY","ELECTRIC COMPANY BILL","CVS PHARMACY #123"];return n.jsxs("div",{className:"ai-demo-container",children:[n.jsx("style",{jsx:!0,children:`
        .ai-demo-container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background: ${a?"#2d3748":"#f8f9fa"};
          border-radius: 15px;
          border: 2px solid ${a?"#4a5568":"#e2e8f0"};
        }

        .demo-header {
          text-align: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
          color: white;
          border-radius: 12px;
        }

        .demo-section {
          margin-bottom: 30px;
          padding: 20px;
          background: ${a?"#4a5568":"white"};
          border-radius: 12px;
          border: 1px solid ${a?"#718096":"#e2e8f0"};
        }

        .test-input {
          width: 100%;
          padding: 12px;
          border: 2px solid ${a?"#718096":"#e2e8f0"};
          border-radius: 8px;
          background: ${a?"#2d3748":"white"};
          color: ${a?"#e2e8f0":"#2d3748"};
          margin-bottom: 10px;
        }

        .test-button {
          background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .test-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(56, 161, 105, 0.4);
        }

        .result-display {
          margin-top: 15px;
          padding: 15px;
          background: ${a?"#38a169":"#c6f6d5"};
          color: ${a?"white":"#22543d"};
          border-radius: 8px;
          font-weight: 600;
        }

        .sample-transaction {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin: 5px 0;
          background: ${a?"#2d3748":"#f7fafc"};
          border-radius: 6px;
          border: 1px solid ${a?"#4a5568":"#e2e8f0"};
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .stat-card {
          padding: 15px;
          background: ${a?"#4a5568":"white"};
          border-radius: 8px;
          text-align: center;
          border: 1px solid ${a?"#718096":"#e2e8f0"};
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #4299e1;
        }

        .confidence-bar {
          width: 100%;
          height: 8px;
          background: ${a?"#4a5568":"#e2e8f0"};
          border-radius: 4px;
          overflow: hidden;
          margin-top: 5px;
        }

        .confidence-fill {
          height: 100%;
          background: linear-gradient(90deg, #f56565 0%, #ed8936 50%, #38a169 100%);
          transition: width 0.3s ease;
        }
      `}),n.jsxs("div",{className:"demo-header",children:[n.jsx("h3",{children:"🤖 AI Transaction Categorization Demo"}),n.jsx("p",{children:"Test how our AI categorizes different transaction descriptions"})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"Test AI Categorization"}),n.jsx("input",{type:"text",className:"test-input",placeholder:"Enter a transaction description (e.g., 'STARBUCKS #1234')",value:i,onChange:x=>r(x.target.value),onKeyPress:x=>x.key==="Enter"&&h()}),n.jsx("button",{className:"test-button",onClick:h,children:"🤖 Analyze Transaction"}),o&&n.jsxs("div",{className:"result-display",children:[n.jsxs("div",{children:["Category: ",n.jsx("strong",{children:o.category})]}),n.jsxs("div",{children:["Confidence: ",o.confidence,"%"]}),n.jsx("div",{className:"confidence-bar",children:n.jsx("div",{className:"confidence-fill",style:{width:`${o.confidence}%`}})})]})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"Sample Transactions"}),n.jsx("p",{children:"Click any sample to see how AI categorizes it:"}),p.map((x,v)=>{const b=br.categorizeTransaction(x);return n.jsxs("div",{className:"sample-transaction",onClick:()=>{r(x),l(b)},style:{cursor:"pointer"},children:[n.jsx("span",{children:x}),n.jsxs("span",{style:{background:"#4299e1",color:"white",padding:"4px 8px",borderRadius:"4px",fontSize:"0.8rem"},children:[b.category," (",b.confidence,"%)"]})]},v)})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"AI Learning Statistics"}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:c.totalCorrections}),n.jsx("div",{children:"User Corrections"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsxs("div",{className:"stat-number",children:[c.learningAccuracy,"%"]}),n.jsx("div",{children:"Learning Accuracy"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:Object.keys(c.categoryDistribution).length}),n.jsx("div",{children:"Categories Learned"})]})]})]})]})};function Wv(){const a=Ke=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Ke),i=Ke=>new Date(Ke).toLocaleDateString(),r=Ke=>{const Ge=new Date(Ke);return Ge.setMinutes(Ge.getMinutes()+Ge.getTimezoneOffset()),i(Ge)},[o,l]=S.useState([]),[c,u]=S.useState(0),[h,p]=S.useState(0),[x,v]=S.useState(!0),[b,O]=S.useState(!1),[W,F]=S.useState([]),[$,L]=S.useState(0),[V,D]=S.useState([]),[N,C]=S.useState(""),[ne,re]=S.useState(""),[be,ae]=S.useState(""),[fe,ye]=S.useState(""),[A,J]=S.useState(null),[se,T]=S.useState(""),X=V.reduce((Ke,Ge)=>Ke+Ge.amount,0),[oe,Oe]=S.useState(0),[ke,me]=S.useState(0),[U,xe]=S.useState(0),[de,H]=S.useState(0),Q=oe+ke+U,[le,ue]=S.useState(null),[Ce,Ve]=S.useState([]),[ie,q]=S.useState(null),[ve,Ee]=S.useState({cash_on_hand:0,bank_account_balance:0,savings:0,total:0}),[yt,We]=S.useState(null),[Ze,qe]=S.useState(0),[Ht,Ie]=S.useState(0),[St,Me]=S.useState(""),[lt,tt]=S.useState(""),[nt,je]=S.useState(""),[at,vt]=S.useState(0),[ct,ht]=S.useState([]),[Ot,wt]=S.useState(ct.map(Ke=>({...Ke,progress:Ke.saved/Ke.target*100}))),[Qt,K]=S.useState({}),[te,he]=S.useState(null),[Te,He]=S.useState(""),[dt,Be]=S.useState({category:"",date:"",text:"",amount:""}),[Ye,qt]=S.useState(""),[Lt,xn]=S.useState(""),[Yt,bn]=S.useState([]),[ar,zn]=S.useState([]),[ir,en]=S.useState({}),[tn,yn]=S.useState(""),[vn,wn]=S.useState(""),[sr,jn]=S.useState("");S.useEffect(()=>{const Ke=o.reduce((Ge,P)=>Ge+parseFloat(P.amount),0);L(Ke)},[o]),S.useEffect(()=>{x?(document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode"),document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode"),document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"))},[x]);const j=()=>{v(!x)},[B,I]=S.useState(!1),Z=Ke=>{F([...W,Ke]),console.log("Added investment:",Ke)},Ne=Ke=>parseFloat(Ke).toLocaleString(),Ae=Ke=>{if(!W||!W[Ke]){console.error("Investment not found");return}const Ge=W[Ke].id;bt.delete(`/investments/${Ge}`).then(P=>{if(P.status===204){const En=W.filter((Sn,Ci)=>Ci!==Ke);F(En)}else console.error("Failed to delete the investment")}).catch(P=>{console.error("Error:",P)})};return n.jsx(fv,{children:n.jsx(Hv,{darkMode:x,toggleDarkMode:j,sidebarOpen:b,setSidebarOpen:O,transactions:o,setTransactions:l,balance:c,setBalance:u,budget:h,setBudget:p,addedInvestments:W,setAddedInvestments:F,totalAmount:$,setTotalAmount:L,items:V,setItems:D,name:N,setName:C,amount:ne,setAmount:re,newBudget:be,setNewBudget:ae,error:fe,setError:ye,editingIndex:A,setEditingIndex:J,editAmount:se,setEditAmount:T,totalBudgetAmount:X,cashOnHand:oe,setCashOnHand:Oe,bankAccountBalance:ke,setBankAccountBalance:me,savings:U,setSavings:xe,total:de,setTotal:H,totalBalance:Q,balanceId:le,setBalanceId:ue,balances:Ce,setBalances:Ve,editIndex:ie,setEditIndex:q,editBalance:ve,setEditBalance:Ee,balanceError:yt,setBalanceError:We,goalAmount:Ze,setGoalAmount:qe,currentAmount:Ht,setCurrentAmount:Ie,inputAmount:St,setInputAmount:Me,newGoalName:lt,setNewGoalName:tt,newGoalAmount:nt,setNewGoalAmount:je,progPercentage:at,setProgPercentage:vt,goals:ct,setGoals:ht,goalsProgress:Ot,setGoalsProgress:wt,inputAmounts:Qt,setInputAmounts:K,editingGoalId:te,setEditingGoalId:he,editedGoalName:Te,setEditedGoalName:He,editTransaction:dt,setEditTransaction:Be,reminderDate:Ye,setReminderDate:qt,successMessage:Lt,setSuccessMessage:xn,investments:Yt,setInvestments:bn,amounts:ar,setAmounts:zn,marketCaps:ir,setMarketCaps:en,category:tn,setCategory:yn,date:vn,setDate:wn,description:sr,setDescription:jn,validated:B,setValidated:I,formatCurrency:a,formatDate:i,parseDate:r,formatAmount:Ne,handleAddInvestment:Z,handleRemoveInvestment:Ae})})}function Hv(a){const i=nr(),r=rr(),{darkMode:o,toggleDarkMode:l,sidebarOpen:c,setSidebarOpen:u,transactions:h,setTransactions:p,balance:x,setBalance:v,budget:b,setBudget:O,addedInvestments:W,setAddedInvestments:F,totalAmount:$,setTotalAmount:L,items:V,setItems:D,name:N,setName:C,amount:ne,setAmount:re,newBudget:be,setNewBudget:ae,error:fe,setError:ye,editingIndex:A,setEditingIndex:J,editAmount:se,setEditAmount:T,totalBudgetAmount:X,cashOnHand:oe,setCashOnHand:Oe,bankAccountBalance:ke,setBankAccountBalance:me,savings:U,setSavings:xe,total:de,setTotal:H,totalBalance:Q,balanceId:le,setBalanceId:ue,balances:Ce,setBalances:Ve,editIndex:ie,setEditIndex:q,editBalance:ve,setEditBalance:Ee,balanceError:yt,setBalanceError:We,goalAmount:Ze,setGoalAmount:qe,currentAmount:Ht,setCurrentAmount:Ie,inputAmount:St,setInputAmount:Me,newGoalName:lt,setNewGoalName:tt,newGoalAmount:nt,setNewGoalAmount:je,progPercentage:at,setProgPercentage:vt,goals:ct,setGoals:ht,goalsProgress:Ot,setGoalsProgress:wt,inputAmounts:Qt,setInputAmounts:K,editingGoalId:te,setEditingGoalId:he,editedGoalName:Te,setEditedGoalName:He,editTransaction:dt,setEditTransaction:Be,reminderDate:Ye,setReminderDate:qt,successMessage:Lt,setSuccessMessage:xn,investments:Yt,setInvestments:bn,amounts:ar,setAmounts:zn,marketCaps:ir,setMarketCaps:en,category:tn,setCategory:yn,date:vn,setDate:wn,description:sr,setDescription:jn,validated:j,setValidated:B,formatCurrency:I,formatDate:Z,parseDate:Ne,formatAmount:Ae,handleAddInvestment:Ke,handleRemoveInvestment:Ge}=a;return n.jsxs("div",{id:"root",className:`${o?"dark-mode":"light-mode"}`,children:[i.pathname==="/"?n.jsx("div",{style:{height:"100vh",width:"100%"},children:n.jsx(jd,{children:n.jsx(mn,{path:"/",element:n.jsx(Bv,{})})})}):n.jsxs("div",{className:"d-flex",style:{minHeight:"100vh"},children:[n.jsx("div",{className:"d-md-none hamburger-container",children:n.jsx("button",{className:`btn hamburger-btn ${o?"dark-mode":""}`,onClick:()=>u(!c),"aria-label":"Toggle navigation menu",children:n.jsx("span",{style:{fontSize:"1.3rem",fontWeight:"bold"},children:"☰"})})}),c&&n.jsx("div",{className:"d-md-none position-fixed w-100 h-100",style:{top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1040},onClick:()=>u(!1)}),n.jsxs("nav",{className:`d-flex flex-column p-3 ${o?"navbar-dark-mode":"navbar-light-mode"} mobile-sidebar ${c?"show d-block":"d-none d-md-flex"}`,style:{width:"250px",minHeight:"100vh",transition:"all 0.3s ease",borderRight:`2px solid ${o?"#495057":"#dee2e6"}`,boxShadow:"2px 0 10px rgba(0, 0, 0, 0.1)",borderRadius:"10px",...window.innerWidth<768?{position:"fixed",top:0,left:0,zIndex:1045}:{}},onMouseEnter:P=>{P.target.style.boxShadow="2px 0 15px rgba(0, 0, 0, 0.2)"},onMouseLeave:P=>{P.target.style.boxShadow="2px 0 10px rgba(0, 0, 0, 0.1)"},children:[n.jsx("div",{className:"d-md-none d-flex justify-content-end mb-2",children:n.jsx("button",{className:`btn btn-sm ${o?"btn-light":"btn-dark"}`,onClick:()=>u(!1),style:{padding:"4px 8px",borderRadius:"4px"},children:"✕"})}),n.jsxs("div",{className:"text-center mb-4",children:[n.jsxs("div",{className:"d-flex align-items-center justify-content-center mb-2",style:{flexWrap:"nowrap"},children:[n.jsx("h1",{className:"mb-0",style:{whiteSpace:"nowrap",marginRight:".5rem"},children:n.jsx("span",{className:`app-title ${o?"metallic-shadow-dark":"metallic-shadow-light"}`,style:{cursor:"pointer",transition:"all 0.3s ease",fontSize:"2.2rem",fontWeight:"bold",letterSpacing:"1px"},onMouseEnter:P=>{P.target.style.transform="scale(1.1)",P.target.style.textShadow="0 0 10px rgba(0, 123, 255, 0.5)"},onMouseLeave:P=>{P.target.style.transform="scale(1)",P.target.style.textShadow=""},onClick:()=>r("/dashboard"),children:"X-PENSE"})}),n.jsx("span",{className:"badge badge-danger border p-1",style:{transition:"all 0.3s ease",cursor:"default",fontSize:"0.65rem",whiteSpace:"nowrap"},onMouseEnter:P=>{P.target.style.transform="scale(1.05)",P.target.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"},onMouseLeave:P=>{P.target.style.transform="scale(1)",P.target.style.boxShadow=""},children:"Ai-Powered"})]}),n.jsxs("button",{onClick:l,className:"btn btn-sm w-100",style:{background:o?"linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)":"linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",color:o?"#1a1a1a":"#ffffff",border:`2px solid ${o?"#ffd700":"#64748b"}`,fontSize:"12px",padding:"10px 16px",borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:o?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)",transform:"scale(1)",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",backdropFilter:"blur(10px)",maxWidth:"100%"},onMouseEnter:P=>{P.target.style.transform="scale(1.05)",P.target.style.boxShadow=o?"0 6px 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)":"0 6px 20px rgba(30, 41, 59, 0.4), 0 0 30px rgba(30, 41, 59, 0.2)"},onMouseLeave:P=>{P.target.style.transform="scale(1)",P.target.style.boxShadow=o?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)"},onMouseDown:P=>{P.target.style.transform="scale(0.98)"},onMouseUp:P=>{P.target.style.transform="scale(1.05)",setTimeout(()=>{P.target.style.transform="scale(1)"},150)},children:[n.jsx("span",{style:{fontSize:"16px"},children:o?"☀️":"🌙"}),n.jsx("span",{style:{fontSize:"12px",letterSpacing:"0.5px"},children:o?"LIGHT MODE":"DARK MODE"})]})]}),n.jsxs("ul",{className:`nav nav-pills flex-column ${o?"nav-tabs-bg-dark-mode":"nav-tabs-bg-light-mode"}`,style:{display:"flex",flexDirection:"column",width:"100%",listStyle:"none",margin:0,padding:0},children:[n.jsx("li",{className:"nav-item mb-2",style:{width:"100%",display:"block",marginBottom:"8px"},children:n.jsxs(Fn,{className:({isActive:P})=>`nav-link d-flex align-items-center ${o?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${P?"active bg-primary text-white":""}`,to:"/dashboard",style:({isActive:P})=>({backgroundColor:P?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",padding:"12px 16px",boxSizing:"border-box"}),onMouseEnter:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1.05)",P.target.style.backgroundColor=o?"#495057":"#e9ecef")},onMouseLeave:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1)",P.target.style.backgroundColor="")},children:[n.jsx(Rd,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Dashboard"]})}),n.jsx("li",{className:"nav-item mb-2",style:{width:"100%",display:"block",marginBottom:"8px"},children:n.jsxs(Fn,{className:({isActive:P})=>`nav-link d-flex align-items-center ${o?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${P?"active bg-primary text-white":""}`,to:"/budget",style:({isActive:P})=>({backgroundColor:P?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",padding:"12px 16px",boxSizing:"border-box"}),onMouseEnter:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1.05)",P.target.style.backgroundColor=o?"#495057":"#e9ecef")},onMouseLeave:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1)",P.target.style.backgroundColor="")},children:[n.jsx(Td,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Budget"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(Fn,{className:({isActive:P})=>`nav-link d-flex align-items-center ${o?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${P?"active bg-primary text-white":""}`,to:"/balance",style:({isActive:P})=>({backgroundColor:P?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1.05)",P.target.style.backgroundColor=o?"#495057":"#e9ecef")},onMouseLeave:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1)",P.target.style.backgroundColor="")},children:[n.jsx(Od,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Balance"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(Fn,{className:({isActive:P})=>`nav-link d-flex align-items-center ${o?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${P?"active bg-success text-white":""}`,to:"/add",style:({isActive:P})=>({backgroundColor:P?"#28a745":o?"#2d3748":"#ffffff",color:P?"white":o?"#e2e8f0":"#2d3748",transform:"scale(1)",transition:"all 0.3s ease",fontWeight:"bold"}),onMouseEnter:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1.05)",P.target.style.backgroundColor="#28a745",P.target.style.color="white")},onMouseLeave:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1)",P.target.style.backgroundColor=o?"#2d3748":"#ffffff",P.target.style.color=o?"#e2e8f0":"#2d3748")},children:[n.jsx(Pd,{size:18,className:"me-2",style:{marginRight:"12px"}}),n.jsx("strong",{children:"X-PENSE"})]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(Fn,{className:({isActive:P})=>`nav-link d-flex align-items-center ${o?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${P?"active bg-primary text-white":""}`,to:"/transactions",style:({isActive:P})=>({backgroundColor:P?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1.05)",P.target.style.backgroundColor=o?"#495057":"#e9ecef")},onMouseLeave:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1)",P.target.style.backgroundColor="")},children:[n.jsx($d,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Transactions"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(Fn,{className:({isActive:P})=>`nav-link d-flex align-items-center ${o?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${P?"active bg-primary text-white":""}`,to:"/goals",style:({isActive:P})=>({backgroundColor:P?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1.05)",P.target.style.backgroundColor=o?"#495057":"#e9ecef")},onMouseLeave:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1)",P.target.style.backgroundColor="")},children:[n.jsx(kd,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Goals"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(Fn,{className:({isActive:P})=>`nav-link d-flex align-items-center ${o?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${P?"active bg-primary text-white":""}`,to:"/investments",style:({isActive:P})=>({backgroundColor:P?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1.05)",P.target.style.backgroundColor=o?"#495057":"#e9ecef")},onMouseLeave:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1)",P.target.style.backgroundColor="")},children:[n.jsx(Id,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Investments"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(Fn,{className:({isActive:P})=>`nav-link d-flex align-items-center ${o?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${P?"active bg-info text-white":""}`,to:"/ai-demo",style:({isActive:P})=>({backgroundColor:P?"#17a2b8":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1.05)",P.target.style.backgroundColor="#17a2b8",P.target.style.color="white")},onMouseLeave:P=>{P.target.classList.contains("active")||(P.target.style.transform="scale(1)",P.target.style.backgroundColor="",P.target.style.color="")},children:[n.jsx(Fd,{size:18,className:"me-2",style:{marginRight:"12px"}}),n.jsx("strong",{children:"AI Demo"})]})})]}),n.jsx("div",{className:"mt-3 pt-3",style:{borderTop:`1px solid ${o?"#495057":"#dee2e6"}`,marginTop:"auto"},children:n.jsx("div",{className:`text-center p-3 rounded ${o?"bg-secondary":"bg-light"}`,style:{transition:"all 0.3s ease",background:o?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",border:`1px solid ${o?"#4a5568":"#dee2e6"}`,boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)"},children:n.jsxs("small",{className:`${o?"text-light":"text-dark"}`,style:{fontSize:"13px",fontWeight:"500",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[n.jsx("span",{children:"👤"}),n.jsx("span",{children:"Welcome Marlon"}),n.jsx("span",{children:"🟢"}),n.jsx("span",{children:"Online"})]})})})]}),n.jsxs("div",{className:"flex-grow-1 p-4",style:{paddingTop:window.innerWidth<768?"60px":"1rem"},children:[n.jsx("div",{className:"d-md-none mb-3",children:n.jsxs("button",{onClick:l,className:"btn btn-sm w-100",style:{background:o?"linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)":"linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",color:o?"#1a1a1a":"#ffffff",border:`2px solid ${o?"#ffd700":"#64748b"}`,fontSize:"11px",padding:"8px 16px",borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:o?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)",transform:"scale(1)",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",backdropFilter:"blur(10px)",maxWidth:"100%"},onMouseDown:P=>{P.target.style.transform="scale(0.95)"},onMouseUp:P=>{P.target.style.transform="scale(1.05)",setTimeout(()=>{P.target.style.transform="scale(1)"},150)},onTouchStart:P=>{P.target.style.transform="scale(0.95)",P.target.style.boxShadow=o?"0 2px 8px rgba(255, 215, 0, 0.5)":"0 2px 8px rgba(30, 41, 59, 0.5)"},onTouchEnd:P=>{P.target.style.transform="scale(1.05)",setTimeout(()=>{P.target.style.transform="scale(1)",P.target.style.boxShadow=o?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)"},150)},children:[n.jsx("span",{style:{fontSize:"14px"},children:o?"☀️":"🌙"}),n.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.5px"},children:o?"LIGHT":"DARK"})]})}),n.jsxs(jd,{children:[n.jsx(mn,{path:"/",element:n.jsx(rv,{to:"/dashboard",replace:!0})}),n.jsx(mn,{path:"/dashboard",element:n.jsx(Rv,{transactions:h,balance:Q,budget:b,investments:Yt,totalAmount:$,darkMode:o,formatAmount:Ae,addedInvestments:W,goals:ct,setGoals:ht,formatCurrency:I,formatDate:Z,handleRemoveInvestment:Ge,goalsProgress:Ot,setGoalsProgress:wt,totalBudgetAmount:X,parseDate:Ne,setItems:D,setBalances:Ve,setCashOnHand:Oe,setBankAccountBalance:me,setSavings:xe,setTransactions:p,setAddedInvestments:F,setInvestments:bn,setAmounts:zn})}),n.jsx(mn,{path:"/budget",element:n.jsx(Nv,{balance:x,budget:b,setBudget:O,darkMode:o,validated:j,setValidated:B,formatCurrency:I,items:V,setItems:D,name:N,setName:C,amount:ne,setAmount:re,newBudget:be,setNewBudget:ae,error:fe,setError:ye,editingIndex:A,setEditingIndex:J,editAmount:se,setEditAmount:T,date:vn,setDate:wn,totalBudgetAmount:X,parseDate:Ne})}),n.jsx(mn,{path:"/balance",element:n.jsx(_v,{balance:x,setBalance:v,transactions:h,budget:b,darkMode:o,validated:j,setValidated:B,cashOnHand:oe,setCashOnHand:Oe,bankAccountBalance:ke,setBankAccountBalance:me,savings:U,setSavings:xe,total:de,setTotal:H,formatCurrency:I,balanceId:le,setBalanceId:ue,balances:Ce,setBalances:Ve,editIndex:ie,setEditIndex:q,editBalance:ve,setEditBalance:Ee,balanceError:yt,setBalanceError:We})}),n.jsx(mn,{path:"/transactions",element:n.jsx(Tv,{transactions:h,setTransactions:p,darkMode:o,validated:j,setValidated:B,formatCurrency:I,totalAmount:$,setTotalAmount:L,editIndex:ie,setEditIndex:q,editTransaction:dt,setEditTransaction:Be,reminderDate:Ye,setReminderDate:qt,successMessage:Lt,setSuccessMessage:xn,parseDate:Ne})}),n.jsx(mn,{path:"/add",element:n.jsx(wv,{darkMode:o,validated:j,setValidated:B,amount:ne,setAmount:re,category:tn,setCategory:yn,date:vn,setDate:wn,description:sr,setDescription:jn})}),n.jsx(mn,{path:"/goals",element:n.jsx(Ov,{goalAmount:Ze,setGoalAmount:qe,currentAmount:Ht,setCurrentAmount:Ie,newGoalName:lt,setNewGoalName:tt,newGoalAmount:nt,setNewGoalAmount:je,progPercentage:at,setProgPercentage:vt,goals:ct,setGoals:ht,validated:j,setValidated:B,inputAmounts:Qt,setInputAmounts:K,editingGoalId:te,setEditingGoalId:he,editedGoalName:Te,setEditedGoalName:He,formatCurrency:I,darkMode:o})}),n.jsx(mn,{path:"/investments",element:n.jsx(Dv,{formatAmount:Ae,formatCurrency:I,darkMode:o,onAddInvestment:P=>{const En=W.findIndex(Sn=>Sn.id===P.id);if(En!==-1){const Sn=[...W];Sn[En]={...Sn[En],amount:Sn[En].amount+P.amount,totalPrice:Sn[En].totalPrice+P.totalPrice},F(Sn)}else F([...W,P])},validated:j,setValidated:B,investments:Yt,setInvestments:bn,amounts:ar,setAmounts:zn,marketCaps:ir,setMarketCaps:en,addedInvestments:W,setAddedInvestments:F})}),n.jsx(mn,{path:"/ai-demo",element:n.jsx(zv,{darkMode:o})})]}),n.jsx(_u,{})]})]}),i.pathname!=="/"&&n.jsx(qv,{darkMode:o})]})}const qv=({darkMode:a})=>{const i=nr(),r=[{path:"/dashboard",icon:Rd,label:"Dashboard"},{path:"/budget",icon:Td,label:"Budget"},{path:"/balance",icon:Od,label:"Balance"},{path:"/add",icon:Pd,label:"X-PENSE"}],o=[{path:"/transactions",icon:$d,label:"Transactions"},{path:"/goals",icon:kd,label:"Goals"},{path:"/investments",icon:Id,label:"Investments"},{path:"/ai-demo",icon:Fd,label:"AI Demo"}],l=c=>n.jsx("div",{style:{display:"flex",width:"100%",height:"50%"},children:c.map((u,h)=>{const p=u.icon,x=i.pathname===u.path,v=u.path==="/add";return n.jsxs(Fn,{to:u.path,className:"text-decoration-none",onClick:()=>{window.innerWidth<=768&&(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},50))},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:v?"6px 4px":"4px 2px",flex:"1 1 25%",borderRadius:v?"12px":"8px",margin:"0 1px",transition:"all 0.2s ease",color:v?"#ffffff":x?"#4299e1":a?"#a0aec0":"#6c757d",background:v?"linear-gradient(135deg, #28a745 0%, #20c997 100%)":x?"rgba(66, 153, 225, 0.15)":"transparent",boxShadow:v?"0 4px 15px rgba(40, 167, 69, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)":"none",textAlign:"center",transform:v?"scale(1.05)":"scale(1)"},children:[n.jsx(p,{size:v?18:16,style:{marginBottom:"2px",strokeWidth:v?3:x?2.5:2,flexShrink:0}}),n.jsx("span",{style:{fontSize:v?"10px":"9px",fontWeight:v?"700":x?"600":"500",lineHeight:"1.1",display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",letterSpacing:v?"0.5px":"normal"},children:u.label})]},h)})});return n.jsx("nav",{className:"d-md-none",style:{position:"fixed",bottom:"0",left:"0",right:"0",width:"100%",background:a?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",borderTop:`2px solid ${a?"#4a5568":"#dee2e6"}`,padding:"4px",boxShadow:"0 -4px 20px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(10px)",zIndex:9999,height:"100px",boxSizing:"border-box",transform:"translateZ(0)"},children:n.jsxs("div",{className:"mobile-nav-container",style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",padding:"2px"},children:[l(r),l(o)]})})};Xx.createRoot(document.getElementById("root")).render(n.jsx(Wv,{}));
