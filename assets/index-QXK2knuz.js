import{a as Fx,r as S,b as Lx,j as n,c as ni}from"./charts-nivo-DYQ47lf6.js";import{C as Nd,a as Dx,L as Ux,P as Bx,b as zx,B as Wx,p as Hx,c as qx,d as Yx,i as Gx,A as Vx,e as Mx,f as Kx,D as ri}from"./charts-others-D3x3PcxJ.js";import{C as Cd,b as Ed,a as Ad,D as Rd,c as Td,P as Od,R as Pd,T as $d,d as kd,L as Id}from"./utils-D7KHK4u5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(l){if(l.ep)return;l.ep=!0;const d=r(l);fetch(l.href,d)}})();var ai={},zc;function Jx(){if(zc)return ai;zc=1;var a=Fx();return ai.createRoot=a.createRoot,ai.hydrateRoot=a.hydrateRoot,ai}var Xx=Jx();function Fd(a,i){return function(){return a.apply(i,arguments)}}const{toString:Zx}=Object.prototype,{getPrototypeOf:Ln}=Object,{iterator:ua,toStringTag:Ld}=Symbol,Dn=(({hasOwnProperty:a})=>(i,r)=>a.call(i,r))(Object.prototype),Dd=a=>typeof a=="string"&&(a==="__proto__"||a==="constructor"||a==="prototype"),bi=(a,i,r)=>a===Object.prototype||!r&&i===null,Qx=a=>{if(!Object.isExtensible(a))return!1;const i=Object.getOwnPropertyNames(a);return Object.getOwnPropertySymbols&&i.push(...Object.getOwnPropertySymbols(a)),i.every(r=>{if(Dd(r))return!1;const o=Object.getOwnPropertyDescriptor(a,r);return!!o&&o.configurable&&o.writable===!0})},no=(a,i)=>{let r=a;const o=[];for(;r!=null;){if(o.indexOf(r)!==-1)return!1;o.push(r);const l=Ln(r);if(bi(r,l,r===a))return!1;if(Dn(r,i))return!0;r=l}return!1},eb=(a,i)=>a!=null&&no(a,i)?a[i]:void 0,tb=a=>{if(a==null||typeof a!="object"&&typeof a!="function")return a;const i=Ln(a);if(i===null&&Qx(a))return a;const r=Object.create(null),o=Object.create(null),l=[];let d=a;for(;d!=null&&l.indexOf(d)===-1;){l.push(d);const u=d===a?i:Ln(d);if(bi(d,u,d===a))break;const h=Object.getOwnPropertyNames(d);Object.getOwnPropertySymbols&&h.push(...Object.getOwnPropertySymbols(d));for(const p of h)Dd(p)||Dn(o,p)||(r[p]=a[p],o[p]=!0);d=u}return r},ro=(a=>i=>{const r=Zx.call(i);return a[r]||(a[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),un=a=>(a=a.toLowerCase(),i=>ro(i)===a),yi=a=>i=>typeof i===a,{isArray:br}=Array,yr=yi("undefined");function Dr(a){return a!==null&&!yr(a)&&a.constructor!==null&&!yr(a.constructor)&&Ht(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const Ud=un("ArrayBuffer");function nb(a){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(a):i=a&&a.buffer&&Ud(a.buffer),i}const rb=yi("string"),Ht=yi("function"),ab=yi("number"),Ur=a=>a!==null&&typeof a=="object",ib=a=>a===!0||a===!1,oi=a=>{if(!Ur(a))return!1;const i=Ln(a);return(i===null||i===Object.prototype||Ln(i)===null)&&(bi(a,i,!0)||!Dn(a,Ld)&&!Dn(a,ua))},sb=a=>{if(!Ur(a)||Dr(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},ob=un("Date"),lb=un("File"),cb=a=>!!(a&&typeof a.uri<"u"),db=a=>a&&typeof a.getParts<"u",ub=un("Blob"),fb=un("FileList"),pb=un("Set"),hb=a=>Ur(a)&&Ht(a.pipe);function gb(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Wc=gb(),Hc=typeof Wc.FormData<"u"?Wc.FormData:void 0,mb=a=>{if(!a)return!1;if(Hc&&a instanceof Hc)return!0;const i=Ln(a);if(!i||i===Object.prototype||!Ht(a.append))return!1;const r=ro(a);return r==="formdata"||r==="object"&&Ht(a.toString)&&a.toString()==="[object FormData]"},xb=un("URLSearchParams"),[bb,yb,vb,wb]=["ReadableStream","Request","Response","Headers"].map(un),jb=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fa(a,i,{allOwnKeys:r=!1}={}){if(a===null||typeof a>"u")return;let o,l;if(typeof a!="object"&&(a=[a]),br(a))for(o=0,l=a.length;o<l;o++)i.call(null,a[o],o,a);else{if(Dr(a))return;const d=r?Object.getOwnPropertyNames(a):Object.keys(a),u=d.length;let h;for(o=0;o<u;o++)h=d[o],i.call(null,a[h],h,a)}}function Sb(a,i){if(Dr(a))return null;i=i.toLowerCase();const r=Object.keys(a);let o=r.length,l;for(;o-- >0;)if(l=r[o],i===l.toLowerCase())return l;return null}const gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Bd=a=>!yr(a)&&a!==gr;function Vs(...a){const{caseless:i,skipUndefined:r}=Bd(this)&&this||{},o={},l=i?Object.create(null):null,d=(u,h)=>{if(h==="__proto__"||h==="constructor"||h==="prototype")return;let p=h;if(l&&typeof h=="string"){const b=h.toLowerCase(),y=l[b];y!==void 0&&Dn(o,y)?p=y:l[b]=h}const x=Dn(o,p)?o[p]:void 0;oi(x)&&oi(u)?o[p]=Vs(x,u):oi(u)?o[p]=Vs({},u):br(u)?o[p]=u.slice():(!r||!yr(u))&&(o[p]=u)};for(let u=0,h=a.length;u<h;u++){const p=a[u];if(!p||Dr(p)||(fa(p,d),typeof p!="object"||br(p)||!Object.getOwnPropertySymbols))continue;const x=Object.getOwnPropertySymbols(p);for(let b=0;b<x.length;b++){const y=x[b];Ib.call(p,y)&&d(p[y],y)}}return o}const _b=(a,i,r,{allOwnKeys:o}={})=>(fa(i,(l,d)=>{r&&Ht(l)?Object.defineProperty(a,d,{__proto__:null,value:Fd(l,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(a,d,{__proto__:null,value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),a),Nb=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),Cb=(a,i,r,o)=>{a.prototype=Object.create(i.prototype,o),Object.defineProperty(a.prototype,"constructor",{__proto__:null,value:a,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(a,"super",{__proto__:null,value:i.prototype}),r&&Object.assign(a.prototype,r)},Eb=(a,i,r,o)=>{let l,d,u;const h={};if(i=i||{},a==null)return i;do{for(l=Object.getOwnPropertyNames(a),d=l.length;d-- >0;)u=l[d],(!o||o(u,a,i))&&!h[u]&&(i[u]=a[u],h[u]=!0);a=r!==!1&&Ln(a)}while(a&&(!r||r(a,i))&&a!==Object.prototype);return i},Ab=(a,i,r)=>{a=String(a),(r===void 0||r>a.length)&&(r=a.length),r-=i.length;const o=a.indexOf(i,r);return o!==-1&&o===r},Rb=a=>{if(!a)return null;if(br(a))return a;let i=a.length;if(!Number.isSafeInteger(i)||i<0||i>4294967295)return null;const r=new Set,o=new Set;let l=a;for(;l!=null&&r.size<i;){if(o.has(l))return null;o.add(l);const u=Ln(l);if(bi(l,u,l===a))break;Object.getOwnPropertyNames(l).forEach(h=>{const p=+h;Number.isInteger(p)&&p>=0&&p<i&&String(p)===h&&Dn(l,h)&&r.add(p)}),l=u}if(r.size!==i)return null;const d=new Array(i);for(;i-- >0;)d[i]=a[i];return d},Tb=(a=>i=>a&&i instanceof a)(typeof Uint8Array<"u"&&Ln(Uint8Array)),Ob=(a,i)=>{const o=(a&&a[ua]).call(a);let l;for(;(l=o.next())&&!l.done;){const d=l.value;i.call(a,d[0],d[1])}},Pb=(a,i)=>{let r;const o=[];for(;(r=a.exec(i))!==null;)o.push(r);return o},$b=un("HTMLFormElement"),kb=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,l){return o.toUpperCase()+l}),{propertyIsEnumerable:Ib}=Object.prototype,Fb=un("RegExp"),zd=(a,i)=>{const r=Object.getOwnPropertyDescriptors(a),o={};fa(r,(l,d)=>{let u;(u=i(l,d,a))!==!1&&(o[d]=u||l)}),Object.defineProperties(a,o)},Lb=a=>{zd(a,(i,r)=>{if(Ht(a)&&["arguments","caller","callee"].includes(r))return!1;const o=a[r];if(Ht(o)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Db=(a,i)=>{const r={},o=l=>{l.forEach(d=>{r[d]=!0})};return br(a)?o(a):o(String(a).split(i)),r},Ub=()=>{},Bb=(a,i)=>a!=null&&Number.isFinite(a=+a)?a:i;function zb(a){return!!(a&&Ht(a.append)&&a[Ld]==="FormData"&&a[ua])}const Wb=a=>{const i=new WeakSet,r=o=>{if(Ur(o)){if(i.has(o))return;if(Dr(o))return o;if(!("toJSON"in o)){i.add(o);let l;if(pb(o)){l=[];for(const d of o){const u=r(d);!yr(u)&&l.push(u)}}else l=br(o)?[]:{},fa(o,(d,u)=>{const h=r(d);!yr(h)&&(l[u]=h)});return i.delete(o),l}}return o};return r(a)},Hb=un("AsyncFunction"),qb=a=>a&&(Ur(a)||Ht(a))&&Ht(a.then)&&Ht(a.catch),Wd=((a,i)=>a?setImmediate:i?((r,o)=>(gr.addEventListener("message",({source:l,data:d})=>{l===gr&&d===r&&o.length&&o.shift()()},!1),l=>{o.push(l),gr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Ht(gr.postMessage)),Yb=typeof queueMicrotask<"u"?queueMicrotask.bind(gr):typeof process<"u"&&process.nextTick||Wd,Hd=a=>a!=null&&Ht(a[ua]),Gb=a=>a!=null&&no(a,ua)&&Hd(a),v={isArray:br,isArrayBuffer:Ud,isBuffer:Dr,isFormData:mb,isArrayBufferView:nb,isString:rb,isNumber:ab,isBoolean:ib,isObject:Ur,isPlainObject:oi,isEmptyObject:sb,isReadableStream:bb,isRequest:yb,isResponse:vb,isHeaders:wb,isUndefined:yr,isDate:ob,isFile:lb,isReactNativeBlob:cb,isReactNative:db,isBlob:ub,isRegExp:Fb,isFunction:Ht,isStream:hb,isURLSearchParams:xb,isTypedArray:Tb,isFileList:fb,forEach:fa,merge:Vs,extend:_b,trim:jb,stripBOM:Nb,inherits:Cb,toFlatObject:Eb,kindOf:ro,kindOfTest:un,endsWith:Ab,toArray:Rb,forEachEntry:Ob,matchAll:Pb,isHTMLForm:$b,hasOwnProperty:Dn,hasOwnProp:Dn,hasOwnInPrototypeChain:no,getSafeProp:eb,toSafeFlatObject:tb,reduceDescriptors:zd,freezeMethods:Lb,toObjectSet:Db,toCamelCase:kb,noop:Ub,toFiniteNumber:Bb,findKey:Sb,global:gr,isContextDefined:Bd,isSpecCompliantForm:zb,toJSONObject:Wb,isAsyncFn:Hb,isThenable:qb,setImmediate:Wd,asap:Yb,isIterable:Hd,isSafeIterable:Gb},Vb=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mb=a=>{const i=Object.create(null);let r,o,l;return a&&a.split(`
`).forEach(function(u){l=u.indexOf(":"),r=u.substring(0,l).trim().toLowerCase(),o=u.substring(l+1).trim();const h=v.hasOwnProp(i,r);!r||h&&v.hasOwnProp(Vb,r)||(r==="set-cookie"?h?i[r].push(o):i[r]=[o]:i[r]=h?i[r]+", "+o:o)}),i};function Kb(a){let i=0,r=a.length;for(;i<r;){const o=a.charCodeAt(i);if(o!==9&&o!==32)break;i+=1}for(;r>i;){const o=a.charCodeAt(r-1);if(o!==9&&o!==32)break;r-=1}return i===0&&r===a.length?a:a.slice(i,r)}const Jb=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Xb=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function ao(a,i){return v.isArray(a)?a.map(r=>ao(r,i)):Kb(String(a).replace(i,""))}const Zb=a=>ao(a,Jb),Qb=a=>ao(a,Xb);function qd(a){const i=Object.create(null);return v.forEach(a.toJSON(),(r,o)=>{i[o]=Qb(r)}),i}const qc=Symbol("internals");function ra(a){return a&&String(a).trim().toLowerCase()}function li(a){return a===!1||a==null?a:v.isArray(a)?a.map(li):Zb(String(a))}function e1(a){const i=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(a);)i[o[1]]=o[2];return i}const t1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Ls(a){let i=0,r=a.length;for(;i<r;){const o=a.charCodeAt(i);if(o!==9&&o!==32)break;i+=1}for(;r>i;){const o=a.charCodeAt(r-1);if(o!==9&&o!==32)break;r-=1}return i===0&&r===a.length?a:a.slice(i,r)}function n1(a){const i=a.length-1;if(i<1||a.charCodeAt(0)!==34||a.charCodeAt(i)!==34)return a;let r="";for(let o=1;o<i;o++){const l=a.charCodeAt(o);if(l===34||l===92&&(o+=1,o>=i))return a;r+=a[o]}return r}function r1(a){const i=Object.create(null),r=String(a);let o=0,l=!1,d=!1;function u(h){const p=Ls(r.slice(o,h)),x=p.indexOf("=");if(x<1)return;const b=Ls(p.slice(0,x));if(!t1.test(b))return;const y=b.toLowerCase();if(y==="__proto__"||y==="constructor"||y==="prototype")return;const O=Ls(p.slice(x+1));i[y]=n1(O)}for(let h=0;h<r.length;h++){const p=r.charCodeAt(h);l?d?d=!1:p===92?d=!0:p===34&&(l=!1):p===34?l=!0:(p===44||p===59)&&(u(h),o=h+1)}return u(r.length),i}const a1=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim()),i1="__Proto__",Yc=a=>a==="__proto__"?i1:a;function Ds(a,i,r,o,l){if(v.isFunction(o))return o.call(a,i,r);if(l&&(i=r),!!v.isString(i)){if(v.isString(o))return i.indexOf(o)!==-1;if(v.isRegExp(o))return o.test(i)}}function s1(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,r,o)=>r.toUpperCase()+o)}function o1(a,i){const r=v.toCamelCase(" "+i);["get","set","has"].forEach(o=>{Object.defineProperty(a,o+r,{__proto__:null,value:function(l,d,u){return this[o].call(this,i,l,d,u)},configurable:!0})})}class Nt{constructor(i){i&&this.set(i)}set(i,r,o){const l=this;function d(h,p,x){const b=ra(p);if(!b)return;const y=v.findKey(l,b);(!y||l[y]===void 0||x===!0||x===void 0&&l[y]!==!1)&&(l[Yc(y||p)]=li(h))}const u=(h,p)=>v.forEach(h,(x,b)=>d(x,b,p));if(v.isPlainObject(i)||i instanceof this.constructor)u(i,r);else if(v.isString(i)&&(i=i.trim())&&!a1(i))u(Mb(i),r);else if(v.isObject(i)&&v.isSafeIterable(i)){let h=Object.create(null),p,x;for(const b of i){if(!v.isArray(b))throw new TypeError("Object iterator must return a key-value pair");x=b[0],v.hasOwnProp(h,x)?(p=h[x],h[x]=v.isArray(p)?[...p,b[1]]:[p,b[1]]):h[x]=b[1]}u(h,r)}else i!=null&&d(r,i,o);return this}get(i,r){if(i=ra(i),i){const o=v.findKey(this,i);if(o){const l=this[o];if(!r)return l;if(r===!0)return e1(l);if(v.isFunction(r))return r.call(this,l,o);if(v.isRegExp(r))return r.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,r){if(i=ra(i),i){const o=v.findKey(this,i);return!!(o&&this[o]!==void 0&&(!r||Ds(this,this[o],o,r)))}return!1}delete(i,r){const o=this;let l=!1;function d(u){if(u=ra(u),u){const h=v.findKey(o,u);h&&(!r||Ds(o,o[h],h,r))&&(delete o[h],l=!0)}}return v.isArray(i)?i.forEach(d):d(i),l}clear(i){const r=Object.keys(this);let o=r.length,l=!1;for(;o--;){const d=r[o];(!i||Ds(this,this[d],d,i,!0))&&(delete this[d],l=!0)}return l}normalize(i){const r=this,o=Object.create(null);return v.forEach(this,(l,d)=>{const u=v.findKey(o,d);if(u){r[u]=li(l),delete r[d];return}const h=Yc(i?s1(d):String(d).trim());h!==d&&delete r[d],r[h]=li(l),o[h]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const r=Object.create(null);return v.forEach(this,(o,l)=>{o!=null&&o!==!1&&(r[l]=i&&v.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,r])=>i+": "+r).join(`
`)}getSetCookie(){const i=this.get("set-cookie");return v.isArray(i)?i:i==null||i===!1?[]:[i]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static parseParameters(i){return r1(i)}static concat(i,...r){const o=new this(i);return r.forEach(l=>o.set(l)),o}static accessor(i){const o=(this[qc]=this[qc]={accessors:{}}).accessors,l=this.prototype;function d(u){const h=ra(u);o[h]||(o1(l,u),o[h]=!0)}return v.isArray(i)?i.forEach(d):d(i),this}}Nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(Nt.prototype,({value:a},i)=>{let r=i[0].toUpperCase()+i.slice(1);return{get:()=>a,set(o){this[r]=o}}});v.freezeMethods(Nt);const fi="[REDACTED ****]";function l1(a){if(v.hasOwnProp(a,"toJSON"))return!0;let i=Object.getPrototypeOf(a);for(;i&&i!==Object.prototype;){if(v.hasOwnProp(i,"toJSON"))return!0;i=Object.getPrototypeOf(i)}return!1}function c1(a,i){const r=new Set(i.map(d=>String(d).toLowerCase())),o=[],l=d=>{if(d===null||typeof d!="object"||v.isBuffer(d))return d;if(o.indexOf(d)!==-1)return;d instanceof Nt&&(d=d.toJSON()),o.push(d);let u;if(v.isArray(d))u=[],d.forEach((h,p)=>{const x=l(h);v.isUndefined(x)||(u[p]=x)});else{if(!v.isPlainObject(d)&&l1(d))return o.pop(),d;u=Object.create(null);for(const[h,p]of Object.entries(d)){const x=r.has(h.toLowerCase())?fi:l(p);v.isUndefined(x)||(u[h]=x)}}return o.pop(),u};return l(a)}function Gc(a){try{return String(a)}catch{return""}}function d1(a){return a.errors.map(r=>{try{return r&&r.message?Gc(r.message):Gc(r)}catch{return""}}).filter(Boolean).join("; ")||a.name||"AggregateError"}const u1=`
Caused by: `,Ms=Symbol("causeStack");function f1(a,i){const r=v.hasOwnProp(a,Ms)&&a[Ms];return r&&i.endsWith(r)?i.length-r.length:-1}function p1(a,i){try{const r=i&&i.stack;if(typeof r!="string"||!r)return;const o=a.stack;if(typeof o!="string"||!o)return;const l=u1+r;a.stack=o+l,Object.defineProperty(a,Ms,{__proto__:null,value:l})}catch{}}class ee extends Error{static from(i,r,o,l,d,u){let h=i.message;!h&&v.isArray(i.errors)&&i.errors.length&&(h=d1(i));const p=new ee(h,r||i.code,o,l,d);return Object.defineProperty(p,"cause",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),p.name=i.name,p1(p,i),i.status!=null&&p.status==null&&(p.status=i.status),u&&Object.assign(p,u),p}constructor(i,r,o,l,d){super(i),Object.defineProperty(this,"message",{__proto__:null,value:i,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),o&&(this.config=o),l&&(this.request=l),d&&(this.response=d,this.status=d.status)}toJSON(){const i=this.config,r=i&&v.hasOwnProp(i,"redact")?i.redact:void 0,o=v.isArray(r)&&r.length>0?c1(i,r):v.toJSONObject(i);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:o,code:this.code,status:this.status}}}ee.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ee.ERR_BAD_OPTION="ERR_BAD_OPTION";ee.ECONNABORTED="ECONNABORTED";ee.ETIMEDOUT="ETIMEDOUT";ee.ECONNREFUSED="ECONNREFUSED";ee.ERR_NETWORK="ERR_NETWORK";ee.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ee.ERR_DEPRECATED="ERR_DEPRECATED";ee.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ee.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ee.ERR_CANCELED="ERR_CANCELED";ee.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ee.ERR_INVALID_URL="ERR_INVALID_URL";ee.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const h1=null,Yd=100;function Ks(a){return v.isPlainObject(a)||v.isArray(a)}function Gd(a){return v.endsWith(a,"[]")?a.slice(0,-2):a}function Us(a,i,r){return a?a.concat(i).map(function(l,d){return l=Gd(l),!r&&d?"["+l+"]":l}).join(r?".":""):i}function g1(a){return v.isArray(a)&&!a.some(Ks)}const m1=v.toFlatObject(v,{},null,function(i){return/^is[A-Z]/.test(i)});function vi(a,i,r){if(!v.isObject(a))throw new TypeError("target must be an object");i=i||new FormData;const o=(D,N)=>{const C=v.getSafeProp(r,D);return v.isUndefined(C)?N:C},l=o("metaTokens",!0),d=o("visitor")||k,u=o("dots",!1),h=o("indexes",!1),p=o("Blob")||typeof Blob<"u"&&Blob,x=o("maxDepth",Yd),b=p&&v.isSpecCompliantForm(i),y=[];if(!v.isFunction(d))throw new TypeError("visitor must be a function");function O(D){if(D===null)return"";if(v.isDate(D))return D.toISOString();if(v.isBoolean(D))return D.toString();if(!b&&v.isBlob(D))throw new ee("Blob is not supported. Use a Buffer instead.");if(v.isArrayBuffer(D)||v.isTypedArray(D)){if(b&&typeof p=="function")return new p([D]);throw new ee("Blob is not supported. Use a Buffer instead.",ee.ERR_NOT_SUPPORT)}return D}function W(D){if(D>x)throw new ee("Object is too deeply nested ("+D+" levels). Max depth: "+x,ee.ERR_FORM_DATA_DEPTH_EXCEEDED)}function I(D,N){if(x===1/0)return JSON.stringify(D);const C=[];return JSON.stringify(D,function(ie,me){if(!v.isObject(me))return me;for(;C.length&&C[C.length-1]!==this;)C.pop();return C.push(me),W(N+C.length-1),me})}function k(D,N,C){let ne=D;if(v.isReactNative(i)&&v.isReactNativeBlob(D))return i.append(Us(C,N,u),O(D)),!1;if(D&&!C&&typeof D=="object"){if(v.endsWith(N,"{}"))N=l?N:N.slice(0,-2),D=I(D,1);else if(v.isArray(D)&&g1(D)||(v.isFileList(D)||v.endsWith(N,"[]"))&&(ne=v.toArray(D)))return N=Gd(N),ne.forEach(function(me,re){!(v.isUndefined(me)||me===null)&&i.append(h===!0?Us([N],re,u):h===null?N:N+"[]",O(me))}),!1}return Ks(D)?!0:(i.append(Us(C,N,u),O(D)),!1)}const L=Object.assign(m1,{defaultVisitor:k,convertValue:O,isVisitable:Ks});function V(D,N,C=0){if(!v.isUndefined(D)){if(W(C),y.indexOf(D)!==-1)throw new Error("Circular reference detected in "+N.join("."));y.push(D),v.forEach(D,function(ie,me){(!(v.isUndefined(ie)||ie===null)&&d.call(i,ie,v.isString(me)?me.trim():me,N,L))===!0&&V(ie,N?N.concat(me):[me],C+1)}),y.pop()}}if(!v.isObject(a))throw new TypeError("data must be an object");return V(a),i}function Vc(a){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(a).replace(/[!'()~]|%20/g,function(o){return i[o]})}function io(a,i){this._pairs=[],a&&vi(a,this,i)}const Vd=io.prototype;Vd.append=function(i,r){this._pairs.push([i,r])};Vd.toString=function(i){const r=i?o=>i.call(this,o,Vc):Vc;return this._pairs.map(function(l){return r(l[0])+"="+r(l[1])},"").join("&")};function x1(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Md(a,i,r){if(!i)return a;a=a||"";const o=v.isFunction(r)?{serialize:r}:r,l=v.getSafeProp(o,"encode")||x1,d=v.getSafeProp(o,"serialize");let u;if(d?u=d(i,o):u=v.isURLSearchParams(i)?i.toString():new io(i,o).toString(l),u){const h=a.indexOf("#");h!==-1&&(a=a.slice(0,h)),a+=(a.indexOf("?")===-1?"?":"&")+u}return a}const aa=Symbol("internals");function Kd(a){return a?a.length:0}function Mc(a){if(a)for(;a.length&&a[a.length-1]===null;)a.pop()}function b1(a){return typeof a=="string"&&a!==""&&String(Number(a))===a?Number(a):a}function ia(a,i){const r=a.handlers,o=Kd(r);r!==i.handlersRef?(i.handlersRef=r,i.handlerEntries.clear()):o!==i.handlersLength&&(o?i.handlerEntries.forEach(function(d,u){r[d.index]!==d.handler&&i.handlerEntries.delete(u)}):i.handlerEntries.clear()),i.handlersLength=o}class Kc{constructor(){this.handlers=[],this[aa]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(i,r,o){const l={fulfilled:i,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null},d=this[aa];this.handlers==null&&(this.handlers=[]),ia(this,d);const u=d.nextId++;return this.handlers.push(l),d.handlerEntries.set(u,{handler:l,index:this.handlers.length-1}),d.handlersLength=this.handlers.length,u}eject(i){const r=this[aa];ia(this,r);const o=b1(i),l=r.handlerEntries.get(o);if(l){if(r.handlerEntries.delete(o),this.handlers[l.index]!==l.handler)return;this.handlers[l.index]=null,r.iterationDepth||(Mc(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],ia(this,this[aa]))}forEach(i){const r=this[aa];ia(this,r),r.iterationDepth++;try{v.forEach(this.handlers,function(l){l!==null&&i(l)})}finally{--r.iterationDepth||(ia(this,r),Mc(this.handlers),r.handlersLength=Kd(this.handlers))}}}const so={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},y1=typeof URLSearchParams<"u"?URLSearchParams:io,v1=typeof FormData<"u"?FormData:null,w1=typeof Blob<"u"?Blob:null,j1={isBrowser:!0,classes:{URLSearchParams:y1,FormData:v1,Blob:w1},protocols:["http","https","file","blob","url","data"]},oo=typeof window<"u"&&typeof document<"u",Js=typeof navigator=="object"&&navigator||void 0,S1=oo&&(!Js||["ReactNative","NativeScript","NS"].indexOf(Js.product)<0),_1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",N1=oo&&window.location.href||"http://localhost",C1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:oo,hasStandardBrowserEnv:S1,hasStandardBrowserWebWorkerEnv:_1,navigator:Js,origin:N1},Symbol.toStringTag,{value:"Module"})),wt={...C1,...j1};function E1(a,i){return vi(a,new wt.classes.URLSearchParams,{visitor:function(r,o,l,d){return wt.isNode&&v.isBuffer(r)?(this.append(o,r.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...i})}const Jc=Yd;function Jd(a){if(a>Jc)throw new ee("FormData field is too deeply nested ("+a+" levels). Max depth: "+Jc,ee.ERR_FORM_DATA_DEPTH_EXCEEDED)}function A1(a){const i=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let o;for(;(o=r.exec(a))!==null;)Jd(i.length),i.push(o[0]==="[]"?"":o[1]||o[0]);return i}function Xd(a){const i={},r=Object.keys(a);let o;const l=r.length;let d;for(o=0;o<l;o++)d=r[o],i[d]=a[d];return i}function Zd(a){if(!v.isArray(a))return a;const i=Object.keys(a);return i.length!==a.length||i.some((r,o)=>r!==String(o))?Xd(a):a}function R1(a){const i=[a];for(;i.length;){const r=i.pop();Object.keys(r).forEach(o=>{const l=r[o]=Zd(r[o]);(v.isArray(l)||v.isPlainObject(l))&&i.push(l)})}return a}function Qd(a){function i(r,o,l,d){Jd(d);let u=r[d++];if(u==="__proto__")return!0;const h=Number.isFinite(+u),p=d>=r.length;return u=!u&&v.isArray(l)?l.length:u,p?(v.hasOwnProp(l,u)?(l[u]=Zd(l[u]),l[u]=v.isArray(l[u])?l[u].concat(o):[l[u],o]):l[u]=o,!h):((!v.hasOwnProp(l,u)||!v.isObject(l[u]))&&(l[u]=[]),i(r,o,l[u],d)&&v.isArray(l[u])&&(l[u]=Xd(l[u])),!h)}if(v.isFormData(a)&&v.isFunction(a.entries)){const r={};return v.forEachEntry(a,(o,l)=>{i(A1(o),l,r,0)}),R1(r)}return null}const eu=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Fr=(a,i)=>a!=null&&v.hasOwnProp(a,i)?a[i]:void 0;function T1(a,i,r){if(v.isString(a))try{return(i||JSON.parse)(a),v.trim(a)}catch(o){if(o.name!=="SyntaxError")throw o}return(0,JSON.stringify)(a)}const pa={transitional:so,adapter:["xhr","http","fetch"],transformRequest:[function(i,r){const o=r.getContentType()||"",l=o.indexOf("application/json")>-1,d=v.isObject(i);if(d&&v.isHTMLForm(i)&&(i=new FormData(i)),v.isFormData(i))return l?JSON.stringify(Qd(i)):i;if(v.isArrayBuffer(i)||v.isBuffer(i)||v.isStream(i)||v.isFile(i)||v.isBlob(i)||v.isReadableStream(i))return i;if(v.isArrayBufferView(i))return i.buffer;if(v.isURLSearchParams(i))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let h;if(d){const p=Fr(this,"formSerializer");if(o.indexOf("application/x-www-form-urlencoded")>-1)return E1(i,p).toString();if((h=v.isFileList(i))||o.indexOf("multipart/form-data")>-1){const x=Fr(this,"env"),b=x&&x.FormData;return vi(h?{"files[]":i}:i,b&&new b,p)}}return d||l?(r.setContentType("application/json",!1),T1(i)):i}],transformResponse:[function(i){const r=Fr(this,"transitional")||pa.transitional,o=r&&r.forcedJSONParsing,l=Fr(this,"responseType"),d=l==="json";if(v.isResponse(i)||v.isReadableStream(i))return i;if(i&&v.isString(i)&&(o&&!l||d)){const h=!(r&&r.silentJSONParsing)&&d;try{return JSON.parse(i,Fr(this,"parseReviver"))}catch(p){if(h)throw p.name==="SyntaxError"?ee.from(p,ee.ERR_BAD_RESPONSE,this,null,Fr(this,"response")):p}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wt.classes.FormData,Blob:wt.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(eu,a=>{pa.headers[a]={}});function Bs(a,i){const r=this||pa,o=i||r,l=Nt.from(o.headers);let d=o.data;return v.forEach(a,function(h){d=h.call(r,d,l.normalize(),i?i.status:void 0)}),l.normalize(),d}function tu(a){return!!(a&&a.__CANCEL__)}class ha extends ee{constructor(i,r,o){super(i??"canceled",ee.ERR_CANCELED,r,o),this.name="CanceledError",this.__CANCEL__=!0}}function nu(a,i,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?a(r):i(new ee("Request failed with status code "+r.status,r.status>=400&&r.status<500?ee.ERR_BAD_REQUEST:ee.ERR_BAD_RESPONSE,r.config,r.request,r))}const O1=/[\t\n\r]/g;function ru(a){if(typeof a!="string")return a;let i=0;for(;i<a.length&&a.charCodeAt(i)<=32;)i++;return a.slice(i).replace(O1,"")}function zs(a){const i=/^([-+\w]{1,25}):(?:\/\/)?/.exec(a);return i&&i[1].toLowerCase()||""}const Xc=a=>{try{return decodeURIComponent(a)}catch{return a}},au=wt.hasStandardBrowserEnv?{write(a,i,r,o,l,d,u){if(typeof document>"u")return;const h=[`${a}=${encodeURIComponent(i)}`];v.isNumber(r)&&h.push(`expires=${new Date(r).toUTCString()}`),v.isString(o)&&h.push(`path=${o}`),v.isString(l)&&h.push(`domain=${l}`),d===!0&&h.push("secure"),v.isString(u)&&h.push(`SameSite=${u}`),document.cookie=h.join("; ")},read(a){if(typeof document>"u")return null;const i=document.cookie;if(!i)return null;const r=i.split(";");for(let o=0;o<r.length;o++){const l=r[o].replace(/^\s+/,""),d=l.indexOf("=");if(d!==-1&&l.slice(0,d)===a)return Xc(l.slice(d+1))}return null},async readAsync(a){try{const i=typeof window<"u"&&window.cookieStore;if(i&&v.isFunction(i.get)){const r=await i.get(a);return r?Xc(r.value):null}}catch{}return this.read(a)},remove(a){this.write(a,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function P1(a,i){a=a||10;const r=new Array(a),o=new Array(a);let l=0,d=0,u;return i=i!==void 0?i:1e3,function(p){const x=Date.now(),b=o[d];u||(u=x),r[l]=p,o[l]=x;let y=d,O=0;for(;y!==l;)O+=r[y++],y=y%a;if(l=(l+1)%a,l===d&&(d=(d+1)%a),x-u<i)return;const W=b&&x-b;return W?Math.round(O*1e3/W):void 0}}function $1(a,i){let r=0,o=1e3/i,l,d;const u=(b,y=Date.now())=>{r=y,l=null,d&&(clearTimeout(d),d=null),a(...b)};return[(...b)=>{const y=Date.now(),O=y-r;O>=o?u(b,y):(l=b,d||(d=setTimeout(()=>{d=null,u(l)},o-O)))},()=>l&&u(l),(...b)=>u(b)]}const pi=(a,i,r=3)=>{let o=0;const l=P1(50,250);return $1(d=>{if(!d||!v.isNumber(d.loaded))return;const u=d.loaded,h=d.lengthComputable?d.total:void 0,p=Math.max(0,h!=null?Math.min(u,h):u),x=Math.max(0,p-o),b=l(x);o=Math.max(o,p);const y={loaded:p,total:h,progress:h?p/h:void 0,bytes:x,rate:b||void 0,estimated:b&&h?(h-p)/b:void 0,event:d,lengthComputable:h!=null,[i?"download":"upload"]:!0};a(y)},r)},Zc=(a,i)=>{const r=a!=null;return[o=>i[0]({lengthComputable:r,total:a,loaded:o}),i[1]]},Qc=(a,i=v.asap)=>(...r)=>i(()=>a(...r)),k1=wt.hasStandardBrowserEnv?(a=>i=>(i=new URL(i,document.baseURI||wt.origin),a.protocol===i.protocol&&a.host===i.host&&a.port===i.port))(new URL(wt.origin)):()=>!0;function I1(a){return typeof a!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function F1(a,i){if(!i)return a;let r=a.length;for(;r>0&&a.charCodeAt(r-1)===47;)r--;return a.slice(0,r)+"/"+i.replace(/^\/+/,"")}const L1=/^https?:(?!\/\/)/i;function D1(a){return a&&a.replace(/(^|&)([^=&]*=)?[^&]+/g,(i,r,o="")=>`${r}${o}${fi}`)}function U1(a){const i=a.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${fi}@`),r=i.indexOf("#"),l=(r===-1?i:i.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${fi}`);return r===-1?l:`${l}#${D1(i.slice(r+1))}`}function ed(a,i){if(typeof a=="string"){const r=ru(a);if(L1.test(r))throw new ee(`Invalid URL ${JSON.stringify(U1(r))}: missing "//" after protocol`,ee.ERR_INVALID_URL,i)}}function iu(a,i,r,o){ed(i,o);let l=!I1(i);return a&&(l||r===!1)?(ed(a,o),F1(a,i)):i}function B1(a){const i=[{value:a}],r=new WeakSet,o=new WeakSet;for(;i.length;){const{value:l,done:d}=i.pop();if(!v.isPlainObject(l)&&!v.isArray(l))continue;if(d){r.delete(l);continue}if(r.has(l))throw new ee("Circular reference detected in params",ee.ERR_BAD_OPTION_VALUE);if(o.has(l))continue;o.add(l),r.add(l),i.push({value:l,done:!0});const u=Object.keys(l);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(l).forEach(h=>{const p=Object.getOwnPropertyDescriptor(l,h);p&&p.enumerable&&u.push(h)}),u.forEach(h=>{if(h==="__proto__"||h==="constructor"||h==="prototype"){const p=Object.getOwnPropertyDescriptor(l,h);p&&v.hasOwnProp(p,"value")&&i.push({value:p.value})}else i.push({value:l[h]})})}}const td=a=>a instanceof Nt?{...a}:a,Xs=a=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(a).concat(Object.getOwnPropertySymbols(a).filter(i=>{const r=Object.getOwnPropertyDescriptor(a,i);return r&&r.enumerable})):Object.keys(a);function z1(a,i){const r=[],o=new WeakMap,l={};function d(h,p){if(!v.isPlainObject(p))return v.isArray(p)?p.slice():p;const x=v.isPlainObject(h)?h:l;let b=o.get(p);if(b||(b=new WeakMap,o.set(p,b)),b.has(x))return b.get(x);const y={};return b.set(x,y),r.push({base:x,source:p,result:y}),y}const u=v.isUndefined(i)?d(void 0,a):d(a,i);for(;r.length;){const{base:h,source:p,result:x}=r.pop(),b=new Set(Xs(h)),y=new Set(Xs(p));new Set([...b,...y]).forEach(W=>{if(W==="__proto__"||W==="constructor"||W==="prototype")return;const I=y.has(W),k=I?p[W]:void 0,L=(!I||v.isPlainObject(k))&&b.has(W)?h[W]:void 0;x[W]=I?d(L,k):d(void 0,L)})}return B1(u),u}function Qn(a,i,r,o){return v.isPlainObject(a)&&v.isPlainObject(i)?v.merge.call({caseless:o},a,i):v.isPlainObject(i)?v.merge({},i):v.isArray(i)?i.slice():i}function su(a,i,r,o){if(v.isUndefined(i)){if(!v.isUndefined(a))return Qn(void 0,a,r,o)}else return Qn(a,i,r,o)}function Ws(a,i){if(!v.isUndefined(i))return Qn(void 0,i)}function st(a,i){if(v.isUndefined(i)){if(!v.isUndefined(a))return Qn(void 0,a)}else return Qn(void 0,i)}function W1(a,i,r){const o=v.hasOwnProp(i,"transitional")?i.transitional:void 0;if(!v.isUndefined(o))if(v.isPlainObject(o)){if(v.hasOwnProp(o,r))return o[r]}else return;const l=v.hasOwnProp(a,"transitional")?a.transitional:void 0;if(v.isPlainObject(l)&&v.hasOwnProp(l,r))return l[r]}function Zs(a,i,r,o,l){if(v.hasOwnProp(l,r))return Qn(a,i);if(v.hasOwnProp(o,r))return Qn(void 0,a)}function H1(a,i,r){return su(td(a),td(i),r,!0)}const q1=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),nd={url:Ws,method:Ws,data:Ws,baseURL:st,transformRequest:st,transformResponse:st,params:z1,paramsSerializer:st,timeout:st,timeoutErrorMessage:st,withCredentials:st,withXSRFToken:st,adapter:st,responseType:st,xsrfCookieName:st,xsrfHeaderName:st,onUploadProgress:st,onDownloadProgress:st,decompress:st,maxContentLength:st,maxBodyLength:st,beforeRedirect:st,transport:st,httpAgent:st,httpsAgent:st,cancelToken:st,socketPath:st,allowedSocketPaths:st,responseEncoding:st,validateStatus:Zs,headers:H1};function vr(a,i){a=a||{},i=i||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",q1);const o=Xs({...a,...i});for(let l=0,d=o.length;l<d;l++){const u=o[l];if(u==="__proto__"||u==="constructor"||u==="prototype")continue;const h=v.hasOwnProp(nd,u)?nd[u]:su,p=v.hasOwnProp(a,u)?a[u]:void 0,x=v.hasOwnProp(i,u)?i[u]:void 0,b=h===Zs?h(p,x,u,a,i):h(p,x,u);v.isUndefined(b)&&h!==Zs||(r[u]=b)}return v.hasOwnProp(i,"validateStatus")&&v.isUndefined(i.validateStatus)&&W1(a,i,"validateStatusUndefinedResolves")===!1&&(v.hasOwnProp(a,"validateStatus")?r.validateStatus=Qn(void 0,a.validateStatus):delete r.validateStatus),r}const Y1=["content-type","content-length"];function G1(a,i,r){if(r!=="content-only"){a.set(i);return}Object.entries(i||{}).forEach(([o,l])=>{Y1.includes(o.toLowerCase())&&a.set(o,l)})}const rd=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(i,r)=>String.fromCharCode(parseInt(r,16))),V1=a=>au.read(a);function ou(a,i=V1){const r=vr({},a),o=W=>v.hasOwnProp(r,W)?r[W]:void 0,l=o("data");let d=o("withXSRFToken");const u=o("xsrfHeaderName"),h=o("xsrfCookieName");let p=o("headers");const x=o("auth"),b=o("baseURL"),y=o("allowAbsoluteUrls"),O=o("url");if(r.headers=p=Nt.from(p),r.url=Md(iu(b,O,y,r),o("params"),o("paramsSerializer")),x){const W=v.getSafeProp(x,"username")||"",I=v.getSafeProp(x,"password")||"",k=o("transitional"),L=k&&v.hasOwnProp(k,"encodeBasicAuthUsername")&&k.encodeBasicAuthUsername===!0;try{p.set("Authorization","Basic "+btoa((L?rd(W):W)+":"+(I?rd(I):"")))}catch(V){throw ee.from(V,ee.ERR_BAD_OPTION_VALUE,a)}}if(v.isFormData(l)){const W=v.getSafeProp(l,"getHeaders");wt.hasStandardBrowserEnv||wt.hasStandardBrowserWebWorkerEnv||v.isReactNative(l)?p.setContentType(void 0):v.isFunction(W)&&G1(p,W.call(l),o("formDataHeaderPolicy"))}if(wt.hasStandardBrowserEnv&&(v.isFunction(d)&&(d=d(r)),d===!0||d==null&&k1(r.url))){const I=u&&h&&i(h);I&&p.set(u,I)}return r}const M1=typeof XMLHttpRequest<"u",K1=M1&&function(a){return new Promise(function(r,o){let l;try{const re=wt.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;l=re&&v.isFunction(re.get)}catch{}let d;const u=ou(a,l?re=>(d=re,null):void 0);let h=u.data;const p=Nt.from(u.headers).normalize();let{responseType:x,onUploadProgress:b,onDownloadProgress:y}=u,O,W,I,k,L,V,D;function N(){clearTimeout(W);try{L&&L()}catch(re){setTimeout(()=>{throw re})}try{V&&V()}catch(re){setTimeout(()=>{throw re})}C&&(k&&C.removeEventListener("progress",k),C.upload&&(I&&C.upload.removeEventListener("progress",I),L&&C.upload.removeEventListener("loadend",L))),u.cancelToken&&u.cancelToken.unsubscribe(O),u.signal&&u.signal.removeEventListener("abort",O)}let C=new XMLHttpRequest;C.open(u.method.toUpperCase(),u.url,!0),C.timeout=u.timeout;function ne(re){if(!C)return;if(C.status===0&&(zs(ru(u.url))||zs(wt.origin))!=="file"&&!(C.responseURL&&C.responseURL.startsWith("file:"))){o(new ee("Request aborted",ee.ECONNABORTED,a,C)),N(),C=null;return}try{re?D&&D(re):V&&V()}catch(X){setTimeout(()=>{throw X})}if(!C)return;const fe=Nt.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),A={data:!x||x==="text"||x==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:fe,config:a,request:C};nu(function(se){r(se),N()},function(se){o(se),N()},A),C=null}if("onloadend"in C?C.onloadend=ne:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.startsWith("file:"))||setTimeout(ne)},C.onabort=function(){C&&(o(new ee("Request aborted",ee.ECONNABORTED,a,C)),N(),C=null)},C.onerror=function(fe){const xe=fe&&fe.message?fe.message:"Network Error",A=new ee(xe,ee.ERR_NETWORK,a,C);A.event=fe||null,o(A),N(),C=null},C.ontimeout=function(){if(!C)return;let fe=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const xe=u.transitional||so;u.timeoutErrorMessage&&(fe=u.timeoutErrorMessage),o(new ee(fe,xe.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,a,C)),N(),C=null},h===void 0&&p.setContentType(null),v.isUndefined(u.withCredentials)||(C.withCredentials=!!u.withCredentials),x&&x!=="json"&&(C.responseType=u.responseType),y&&([k,V,D]=pi(y,!0),C.addEventListener("progress",k)),b&&C.upload&&([I,L]=pi(b),C.upload.addEventListener("progress",I),C.upload.addEventListener("loadend",L)),u.cancelToken||u.signal){if(O=re=>{if(!C)return;o(!re||re.type?new ha(null,a,C):re);const fe=C;N(),C=null,fe.abort()},u.cancelToken&&u.cancelToken.subscribe(O),!C)return;u.signal&&(u.signal.aborted?O():u.signal.addEventListener("abort",O))}if(!C)return;const ie=zs(u.url);if(ie&&!wt.protocols.includes(ie)){o(new ee("Unsupported protocol "+ie+":",ee.ERR_BAD_REQUEST,a)),N();return}const me=()=>{C&&("setRequestHeader"in C&&v.forEach(qd(p),function(fe,xe){C.setRequestHeader(xe,fe)}),C.send(h||null))};if(d){const re=typeof performance<"u"&&v.isFunction(performance.now)?()=>performance.now():Date.now,fe=C.timeout>0?re()+Number(C.timeout):void 0,xe=()=>{if(!C)return;const A=C;A.ontimeout(),A.abort()};if(fe!==void 0){const A=()=>{const X=fe-re();X>0?W=setTimeout(A,Math.min(X,2147483647)):xe()};A()}au.readAsync(d).then(A=>{if(C){if(fe!==void 0&&re()>=fe){xe();return}if(A){const X=v.hasOwnProp(u,"xsrfHeaderName")&&u.xsrfHeaderName;p.set(X,A)}me()}}).catch(A=>{C&&(o(ee.from(A,null,a,C)),N(),C=null)})}else me()})},J1=(a,i)=>{if(a=a?a.filter(Boolean):[],!i&&!a.length)return;const r=new AbortController;let o=!1;const l=function(p){if(!o){o=!0,u();const x=p instanceof Error?p:this.reason;r.abort(x instanceof ee?x:new ha(x instanceof Error?x.message:x))}};let d=i&&setTimeout(()=>{d=null,l(new ee(`timeout of ${i}ms exceeded`,ee.ETIMEDOUT))},i);const u=()=>{a&&(d&&clearTimeout(d),d=null,a.forEach(p=>{const x=v.getSafeProp(p,"unsubscribe");v.isFunction(x)?x.call(p,l):p.removeEventListener("abort",l)}),a=null)};a.forEach(p=>{if(!o){if(p.aborted){l.call(p);return}p.addEventListener("abort",l,{once:!0})}});const{signal:h}=r;return h.unsubscribe=()=>v.asap(u),h},X1=function*(a,i){let r=a.byteLength;if(r<i){yield a;return}let o=0,l;for(;o<r;)l=o+i,yield a.slice(o,l),o=l},Z1=async function*(a,i){for await(const r of Q1(a))yield*X1(r,i)},Q1=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const i=a.getReader();try{for(;;){const{done:r,value:o}=await i.read();if(r)break;yield o}}finally{await i.cancel()}},ad=(a,i,r,o)=>{const l=Z1(a,i);let d=0,u,h=p=>{u||(u=!0,o&&o(p))};return new ReadableStream({async pull(p){try{const{done:x,value:b}=await l.next();if(x){h(),p.close();return}let y=b.byteLength;if(r){let O=d+=y;r(O)}p.enqueue(new Uint8Array(b))}catch(x){throw h(x),x}},cancel(p){return h(p),l.return()}},{highWaterMark:2})},Jn=`\r
`,id=a=>String(a).replace(/\r\n|\r|\n/g,Jn),sd=a=>String(a).replace(/[\r\n"]/g,i=>i==="\r"?"%0D":i===`
`?"%0A":"%22"),sa=(a,i)=>{let r=0;for(let o=0;o<a.length;o++){const l=a.charCodeAt(o);i&&(l===13||l===10)?(l===13&&a.charCodeAt(o+1)===10&&o++,r+=2):l<128?r++:l<2048?r+=2:l>=55296&&l<=56319&&a.charCodeAt(o+1)>=56320&&a.charCodeAt(o+1)<=57343?(r+=4,o++):r+=3}return r};class ci extends TypeError{constructor(i,r){super(i),this.name="FormDataError",this.reason=r}}function ey(a,i,r,o,l){if(!v.isFunction(i))throw new ci("Blob is not supported","blob");if(!v.isString(l)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(l)||/ $/.test(l))throw new ci("Invalid multipart boundary","boundary");const d="--"+l+"--"+Jn;let u=d.length;const h=[],p=b=>{if(u+b>r)throw o()};p(0);for(const[b,y]of a){const O=v.isString(y),W=O?sa(y,!0):y.size;if(!Number.isFinite(W)||W<0)throw new ci("Unsupported FormData part size","part");p(W+sa(b,!0)+(!O&&y.name?sa(y.name,!1):0)+(!O&&y.type?sa(y.type,!1):0));let I="--"+l+Jn+'Content-Disposition: form-data; name="'+sd(id(b))+'"';O||(I+='; filename="'+sd(v.isString(y.name)?y.name:"blob")+'"'+Jn+"Content-Type: "+String(y.type||"application/octet-stream").replace(/[\r\n]/g,"")),I+=Jn+Jn;const k=sa(I,!1)+W+Jn.length;p(k),u+=k,h.push({header:I,value:y,isString:O})}const x=[];for(const b of h)x.push(b.header,b.isString?id(b.value):b.value,Jn);return x.push(d),new i(x,{type:"multipart/form-data; boundary="+l})}function ty(a,i,r,o,l){if(!v.isFunction(i))throw new ee("Blob is not supported",ee.ERR_NOT_SUPPORT);if(l===void 0)if(v.isFunction(wt.generateString))l="axios-"+wt.generateString(36,"0123456789abcdef");else{const d=v.global.crypto;if(!d||!v.isFunction(d.getRandomValues))throw new ee("Random byte generation is not supported",ee.ERR_NOT_SUPPORT);const u=new Uint8Array(18);d.getRandomValues(u),l="axios-"+Array.from(u,h=>("0"+h.toString(16)).slice(-2)).join("")}try{return ey(a,i,r,o,l)}catch(d){if(d instanceof ci){const u=d.reason==="boundary"?ee.ERR_BAD_OPTION_VALUE:ee.ERR_BAD_REQUEST;throw new ee(d.message,u)}throw d}}const od=a=>a>=48&&a<=57||a>=65&&a<=70||a>=97&&a<=102,lu=(a,i,r)=>i+2<r&&od(a.charCodeAt(i+1))&&od(a.charCodeAt(i+2)),ld=a=>a<=57?a-48:(a&223)-55,ny=a=>a>=65&&a<=90||a>=97&&a<=122||a>=48&&a<=57||a===43||a===47||a===45||a===95,ry=a=>a===9||a===10||a===12||a===13||a===32,ay=a=>{const i=Math.floor(a/4),r=a%4;return i*3+(r===2?1:r===3?2:0)},iy=a=>{const i=a.length;let r=0;return i>0&&a.charCodeAt(i-1)===61&&(r++,i>1&&a.charCodeAt(i-2)===61&&r++),Math.floor((i-r)*3/4)},sy=a=>{const i=a.length;let r=0,o=0,l=!1;for(let d=0;d<i;d++){let u=a.charCodeAt(d);if(u===37&&lu(a,d,i)&&(u=ld(a.charCodeAt(d+1))*16+ld(a.charCodeAt(d+2)),d+=2),!ry(u)){if(u===61){o++;continue}if(!ny(u)||o>0){l=!0;continue}r++}}return l||o>2||o>0&&(r+o)%4!==0||r%4===1?iy(a):ay(r)},oy=(a,i,r)=>{if(!a||typeof a!="string"||!/^data:/i.test(a))return 0;const o=a.indexOf(",");if(o<0)return 0;const l=a.slice(5,o),d=a.slice(o+1);if(r.test(l))return i(d);let h=0;for(let p=0,x=d.length;p<x;p++){const b=d.charCodeAt(p);if(b===37&&lu(d,p,x))h+=1,p+=2;else if(b<128)h+=1;else if(b<2048)h+=2;else if(b>=55296&&b<=56319&&p+1<x){const y=d.charCodeAt(p+1);y>=56320&&y<=57343?(h+=4,p++):h+=3}else h+=3}return h};function ly(a){const i=typeof a=="string"?a.indexOf("#"):-1;return oy(i===-1?a:a.slice(0,i),sy,/; *base64[\t\n\f\r ]*$/i)}const lo="1.21.0",cd=64*1024,dd={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:ii}=v,cy=a=>encodeURIComponent(a).replace(/%([0-9A-F]{2})/gi,(i,r)=>String.fromCharCode(parseInt(r,16))),ud=a=>{if(!v.isString(a))return a;try{return decodeURIComponent(a)}catch{return a}},si=(a,...i)=>{try{return!!a(...i)}catch{return!1}},dy=a=>{const i=a.indexOf("://");let r=a;return i!==-1&&(r=r.slice(i+3)),r.includes("@")||r.includes(":")},uy=a=>{const i=v.global!==void 0&&v.global!==null?v.global:globalThis,{ReadableStream:r,TextEncoder:o}=i;a=v.merge.call({skipUndefined:!0},{Request:i.Request,Response:i.Response,Blob:i.Blob},a);const l=v.hasOwnProp(a,"fetch")?a.fetch:void 0,{Request:d,Response:u,Blob:h}=a,p=l?ii(l):typeof fetch=="function",x=ii(d),b=ii(u);if(!p)return!1;const y=p&&ii(r),O=p&&(typeof o=="function"?(N=>C=>N.encode(C))(new o):async N=>new Uint8Array(await new d(N).arrayBuffer())),W=x&&y&&si(()=>{let N=!1;const C=new d(wt.origin,{body:new r,method:"POST",get duplex(){return N=!0,"half"}}),ne=C.headers.has("Content-Type");return C.body!=null&&C.body.cancel(),N&&!ne}),I=b&&y&&si(()=>v.isReadableStream(new u("").body)),k=Object.assign(Object.create(null),dd);x&&!si(()=>new d(wt.origin,k))&&(delete k.cache,si(()=>new d(wt.origin,k))||(k.cache=dd.cache));const L={stream:I&&(N=>N.body)};p&&["text","arrayBuffer","blob","formData","stream"].forEach(N=>{!L[N]&&(L[N]=(C,ne)=>{let ie=C&&C[N];if(ie)return ie.call(C);throw new ee(`Response type '${N}' is not supported`,ee.ERR_NOT_SUPPORT,ne)})});const V=async N=>{if(N==null)return 0;if(v.isBlob(N))return N.size;if(v.isArrayBufferView(N)||v.isArrayBuffer(N))return N.byteLength;if(v.isURLSearchParams(N)&&(N=N+""),v.isString(N))return(await O(N)).byteLength},D=async(N,C)=>{const ne=v.toFiniteNumber(N.getContentLength());return ne??V(C)};return async N=>{let{url:C,method:ne,data:ie,signal:me,cancelToken:re,timeout:fe,onDownloadProgress:xe,onUploadProgress:A,responseType:X,headers:se,withCredentials:P="same-origin",fetchOptions:Z,maxContentLength:oe,maxBodyLength:Pe,maxRedirects:$e}=ou(N);const be=v.isNumber(oe)&&oe>-1,U=v.isNumber(Pe)&&Pe>-1,ye=q=>v.hasOwnProp(N,q)?N[q]:void 0;let de=l||fetch;X=X?(X+"").toLowerCase():"text";let H=J1([me,re&&re.toAbortSignal()],fe),Q=null;const le=H&&H.unsubscribe&&(()=>{H.unsubscribe()});let ue,Ne=null,Ve=null;const ae=()=>new ee("Request body larger than maxBodyLength limit",ee.ERR_BAD_REQUEST,N,Q);try{let q;const ve=ye("auth");if(ve){const je=v.getSafeProp(ve,"username")||"",rt=v.getSafeProp(ve,"password")||"";q={username:je,password:rt}}let Ee;if(dy(C)){if(Ee=new URL(C,wt.origin),!q&&(Ee.username||Ee.password)){const je=ud(Ee.username),rt=ud(Ee.password);q={username:je,password:rt}}(Ee.username||Ee.password)&&(Ee.username="",Ee.password="",C=Ee.href)}if(q&&(se.delete("authorization"),se.set("Authorization","Basic "+btoa(cy((q.username||"")+":"+(q.password||""))))),be&&Ee&&Ee.protocol==="data:"&&ly(Ee.href)>oe)throw new ee("maxContentLength size of "+oe+" exceeded",ee.ERR_BAD_RESPONSE,N,Q);const yt=v.isSpecCompliantForm(ie)&&Nt.from(ye("headers")).getContentType();let We;if(v.isString(yt)&&/^multipart\/form-data(?:\s*;|$)/i.test(yt.trim())){const je=Nt.parseParameters(yt);v.hasOwnProp(je,"boundary")&&(We=je.boundary)}if(v.isSpecCompliantForm(ie)&&ne!=="get"&&ne!=="head"&&(U||A&&W||We!==void 0)&&(ie=ty(ie,h,U?Pe:1/0,ae,We),se.setContentType(We===void 0?ie.type:yt),ue=ie.size),U&&ne!=="get"&&ne!=="head"){const je=await V(ie);if(typeof je=="number"&&isFinite(je)&&(ue=je,je>Pe))throw ae()}const Xe=U&&(v.isReadableStream(ie)||v.isStream(ie)),qe=(je,rt,ht)=>ad(je,cd,lt=>{if(U&&lt>Pe)throw Ne=ae();rt&&rt(lt)},ht);if(W&&ne!=="get"&&ne!=="head"&&(A||Xe)){if(ue=ue??await D(se,ie),ue!==0||Xe){let je=new d(C,{method:"POST",body:ie,duplex:"half"}),rt;if(v.isFormData(ie)&&(rt=je.headers.get("content-type"))&&se.setContentType(rt),je.body){const[ht,lt]=A&&Zc(ue,pi(Qc(A)))||[];ie=qe(je.body,ht,lt)}}}else if(Xe&&!x&&y&&ne!=="get"&&ne!=="head")ie=qe(ie);else if(Xe&&x&&!W&&ne!=="get"&&ne!=="head")throw new ee("Stream request bodies are not supported by the current fetch implementation",ee.ERR_NOT_SUPPORT,N,Q);v.isString(P)||(P=P?"include":"omit");const qt=x&&"credentials"in d.prototype;if(v.isFormData(ie)){const je=se.getContentType();je&&/^multipart\/form-data/i.test(je)&&!/boundary=/i.test(je)&&se.delete("content-type")}se.set("User-Agent","axios/"+lo,!1);const Fe=Z==null?Z:Object.assign(Object.create(null),Z);Fe&&(delete Fe.body,delete Fe.headers,delete Fe.method,delete Fe.signal,delete Fe.duplex,delete Fe.credentials);const jt=Object.assign(Object.create(null),Fe,{signal:H,method:ne.toUpperCase(),headers:qd(se.normalize()),body:ie,duplex:"half",credentials:qt?P:void 0});x&&(v.forEach(k,(je,rt)=>{jt[rt]===void 0&&(jt[rt]=je)}),jt.signal===void 0&&(jt.signal=null),jt.body===void 0&&(jt.body=null)),$e===0&&(jt.redirect="manual",Fe&&(Fe.redirect="manual")),Q=x&&new d(C,jt);let Ye=await(x?de(Q,Fe):de(C,jt));const ot=Nt.from(Ye.headers);if(be){const je=v.toFiniteNumber(ot.getContentLength());if(je!=null&&je>oe)throw new ee("maxContentLength size of "+oe+" exceeded",ee.ERR_BAD_RESPONSE,N,Q)}const et=I&&(X==="stream"||X==="response");if(I&&Ye.body&&(xe||be||et&&le)){const je={};["status","statusText","headers"].forEach(vt=>{je[vt]=Ye[vt]});const rt=v.toFiniteNumber(ot.getContentLength()),[ht,lt]=xe&&Zc(rt,pi(Qc(xe),!0))||[];let gt=0;const Tt=vt=>{if(be&&(gt=vt,gt>oe))throw Ve=new ee("maxContentLength size of "+oe+" exceeded",ee.ERR_BAD_RESPONSE,N,Q);ht&&ht(vt)};Ye=new u(ad(Ye.body,cd,Tt,()=>{lt&&lt(),le&&le()}),je)}X=X||"text";let tt=await L[v.findKey(L,X)||"text"](Ye,N);if(be&&!I&&!et){let je;if(tt!=null&&(typeof tt.byteLength=="number"?je=tt.byteLength:typeof tt.size=="number"?je=tt.size:typeof tt=="string"&&(je=typeof o=="function"?new o().encode(tt).byteLength:tt.length)),typeof je=="number"&&je>oe)throw new ee("maxContentLength size of "+oe+" exceeded",ee.ERR_BAD_RESPONSE,N,Q)}return!et&&le&&le(),await new Promise((je,rt)=>{nu(je,rt,{data:tt,headers:Nt.from(Ye.headers),status:Ye.status,statusText:Ye.statusText,config:N,request:Q})})}catch(q){if(le&&le(),H&&H.aborted&&H.reason instanceof ee){const ve=H.reason;throw ve.config=N,Q&&(ve.request=Q),q!==ve&&Object.defineProperty(ve,"cause",{__proto__:null,value:q,writable:!0,enumerable:!1,configurable:!0}),ve}if(Ne)throw Q&&!Ne.request&&(Ne.request=Q),Ne;if(Ve)throw Ve;if(q instanceof ee)throw Q&&!q.request&&(q.request=Q),q;if(q&&q.name==="TypeError"&&/Load failed|fetch/i.test(q.message)){const ve=new ee("Network Error",ee.ERR_NETWORK,N,Q,q&&q.response);throw Object.defineProperty(ve,"cause",{__proto__:null,value:q.cause||q,writable:!0,enumerable:!1,configurable:!0}),ve}throw ee.from(q,q&&q.code,N,Q,q&&q.response)}}},fy=new Map,cu=a=>{const i=Object.create(null),r=a&&v.hasOwnProp(a,"env")&&a.env;["fetch","Request","Response","Blob"].forEach(W=>{r&&v.hasOwnProp(r,W)&&(i[W]=r[W])});const{fetch:o,Request:l,Response:d,Blob:u}=i,h=[l,d,o,u];let p=h.length,x=p,b,y,O=fy;for(;x--;)b=h[x],y=O.get(b),y===void 0&&O.set(b,y=x?new Map:uy(i)),O=y;return y};cu();const co={http:h1,xhr:K1,fetch:{get:cu}};v.forEach(co,(a,i)=>{if(a){try{Object.defineProperty(a,"name",{__proto__:null,value:i})}catch{}Object.defineProperty(a,"adapterName",{__proto__:null,value:i})}});const fd=a=>`- ${a}`,py=a=>v.isFunction(a)||a===null||a===!1;function hy(a,i){a=v.isArray(a)?a:[a];const{length:r}=a;let o,l;const d={};for(let u=0;u<r;u++){o=a[u];let h;if(l=o,!py(o)&&(l=co[(h=String(o)).toLowerCase()],l===void 0))throw new ee(`Unknown adapter '${h}'`);if(l&&(v.isFunction(l)||(l=l.get(i))))break;d[h||"#"+u]=l}if(!l){const u=Object.entries(d).map(([p,x])=>`adapter ${p} `+(x===!1?"is not supported by the environment":"is not available in the build"));let h=r?u.length>1?`since :
`+u.map(fd).join(`
`):" "+fd(u[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+h,ee.ERR_NOT_SUPPORT)}return l}const du={getAdapter:hy,adapters:co};function Hs(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new ha(null,a)}function pd(a){return Math.max(0,Date.now()-a)}function qs(a){const i=v.toSafeFlatObject(a);Hs(i),i.headers=Nt.from(v.getSafeProp(i,"headers")),i.data=Bs.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1);const r=du.getAdapter(i.adapter||pa.adapter,i),o=Date.now();return r(i).then(function(d){Hs(i),d.duration=pd(o),i.response=d;try{d.data=Bs.call(i,i.transformResponse,d)}finally{delete i.response}return d.headers=Nt.from(d.headers),d},function(d){if(!tu(d)&&(Hs(i),d&&d.response)){d.response.duration=pd(o),i.response=d.response;try{d.response.data=Bs.call(i,i.transformResponse,d.response)}finally{delete i.response}d.response.headers=Nt.from(d.response.headers)}return Promise.reject(d)})}const wi={};["object","boolean","number","function","string","symbol"].forEach((a,i)=>{wi[a]=function(o){return typeof o===a||"a"+(i<1?"n ":" ")+a}});const hd={};wi.transitional=function(i,r,o){function l(d,u){return"[Axios v"+lo+"] Transitional option '"+d+"'"+u+(o?". "+o:"")}return(d,u,h)=>{if(i===!1)throw new ee(l(u," has been removed"+(r?" in "+r:"")),ee.ERR_DEPRECATED);return r&&!hd[u]&&(hd[u]=!0,console.warn(l(u," has been deprecated since v"+r+" and will be removed in the near future"))),i?i(d,u,h):!0}};wi.spelling=function(i){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${i}`),!0)};function gy(a,i,r){if(typeof a!="object"||a===null)throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const o=Object.keys(a);let l=o.length;for(;l-- >0;){const d=o[l],u=Object.prototype.hasOwnProperty.call(i,d)?i[d]:void 0;if(u){const h=a[d],p=h===void 0||u(h,d,a);if(p!==!0)throw new ee("option "+d+" must be "+p,ee.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new ee("Unknown option "+d,ee.ERR_BAD_OPTION)}}const di={assertOptions:gy,validators:wi},Et=di.validators,Ys=a=>{if(a==null||v.isPlainObject(a)||a instanceof Nt)return!0;try{return v.isObject(a)&&v.getSafeProp(a,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(i=>v.isFunction(v.getSafeProp(a,i)))}catch{return!1}};class xr{constructor(i){this.defaults=i||{},this.interceptors={request:new Kc,response:new Kc}}async request(i,r){try{return await this._request(i,r)}catch(o){if(o instanceof Error)try{let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const d=l.stack;let u="";if(typeof d=="string"){const h=d.indexOf(`
`);u=h===-1?"":d.slice(h+1)}if(!o.stack)o.stack=u;else if(u){const h=u.indexOf(`
`),p=h===-1?-1:u.indexOf(`
`,h+1),x=p===-1?u:u.slice(p+1),b=String(o.stack),y=f1(o,b),O=y===-1?b:b.slice(0,y),W=y===-1?"":b.slice(y);O.endsWith(x)||(o.stack=O+`
`+u+W)}}catch{}throw o}}_request(i,r){typeof i=="string"?(r=r||{},r.url=i):r=i||{},r=vr(this.defaults,r);const{transitional:o,paramsSerializer:l,headers:d}=r;o!==void 0&&di.assertOptions(o,{silentJSONParsing:Et.transitional(Et.boolean),forcedJSONParsing:Et.transitional(Et.boolean),clarifyTimeoutError:Et.transitional(Et.boolean),legacyInterceptorReqResOrdering:Et.transitional(Et.boolean),advertiseZstdAcceptEncoding:Et.transitional(Et.boolean),validateStatusUndefinedResolves:Et.transitional(Et.boolean),encodeBasicAuthUsername:Et.transitional(Et.boolean)},!1),l!=null&&(v.isFunction(l)?r.paramsSerializer={serialize:l}:di.assertOptions(l,{encode:Et.function,serialize:Et.function},!0)),r.allowAbsoluteUrls!==void 0||(v.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),di.assertOptions(r,{baseUrl:Et.spelling("baseURL"),withXsrfToken:Et.spelling("withXSRFToken")},!0),r.method=(v.getSafeProp(r,"method")||v.getSafeProp(this.defaults,"method")||"get").toLowerCase();const u=v.getSafeProp(d,"common"),h=v.getSafeProp(d,r.method),p=d&&v.merge(Ys(u)?u:void 0,Ys(h)?h:void 0);d&&v.forEach(eu.concat("common"),L=>{Ys(v.getSafeProp(d,L))&&delete d[L]}),r.headers=Nt.concat(p,d);const x=[];let b=!0;this.interceptors.request.forEach(function(V){if(typeof V.runWhen=="function"&&V.runWhen(r)===!1)return;b=b&&V.synchronous;const D=r.transitional||so;D&&D.legacyInterceptorReqResOrdering?x.unshift(V.fulfilled,V.rejected):x.push(V.fulfilled,V.rejected)});const y=[];this.interceptors.response.forEach(function(V){y.push(V.fulfilled,V.rejected)});let O,W=0,I;if(!b){const L=[qs.bind(this),void 0];for(L.unshift(...x),L.push(...y),I=L.length,O=Promise.resolve(r);W<I;)O=O.then(L[W++],L[W++]);return O}I=x.length;let k=r;for(;W<I;){const L=x[W++],V=x[W++];try{k=L?L(k):k}catch(D){if(!V){O=Promise.reject(D);break}try{const N=V.call(this,D);v.isThenable(N)&&(O=Promise.resolve(N).then(()=>qs.call(this,k)))}catch(N){O=Promise.reject(N)}break}}if(!O)try{O=qs.call(this,k)}catch(L){O=Promise.reject(L)}for(W=0,I=y.length;W<I;)O=O.then(y[W++],y[W++]);return O}getUri(i){i=vr(this.defaults,i);const r=iu(i.baseURL,i.url,i.allowAbsoluteUrls,i);return Md(r,i.params,i.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(i){xr.prototype[i]=async function(r,o){return this.request(vr(o||{},{method:i,url:r,data:o&&v.hasOwnProp(o,"data")?o.data:void 0}))}});v.forEach(["post","put","patch","query"],function(i){function r(o){return async function(d,u,h){return this.request(vr(h||{},{method:i,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:u}))}}xr.prototype[i]=r(),i!=="query"&&(xr.prototype[i+"Form"]=r(!0))});class uo{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(d){r=d});const o=this;this.promise.then(l=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](l);o._listeners=null}),this.promise.then=l=>{let d;const u=new Promise(h=>{o.subscribe(h),d=h}).then(l);return u.cancel=function(){o.unsubscribe(d)},u},i(function(d,u,h){o.reason||(o.reason=new ha(d,u,h),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const r=this._listeners.indexOf(i);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const i=new AbortController,r=o=>{i.abort(o)};return this.subscribe(r),i.signal.unsubscribe=()=>this.unsubscribe(r),i.signal}static source(){let i;return{token:new uo(function(l){i=l}),cancel:i}}}function my(a){return function(r){return a.apply(null,r)}}function xy(a){return v.isObject(a)&&a.isAxiosError===!0}const ui={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ui).forEach(([a,i])=>{ui[i]===void 0&&(ui[i]=a)});function uu(a){const i=new xr(a),r=Fd(xr.prototype.request,i);return v.extend(r,xr.prototype,i,{allOwnKeys:!0}),v.extend(r,i,null,{allOwnKeys:!0}),r.create=function(l){return uu(vr(a,l))},r}const Je=uu(pa);Je.Axios=xr;Je.CanceledError=ha;Je.CancelToken=uo;Je.isCancel=tu;Je.VERSION=lo;Je.toFormData=vi;Je.AxiosError=ee;Je.Cancel=Je.CanceledError;Je.all=function(i){return Promise.all(i)};Je.spread=my;Je.isAxiosError=xy;Je.mergeConfig=vr;Je.AxiosHeaders=Nt;Je.formToJSON=a=>Qd(v.isHTMLForm(a)?new FormData(a):a);Je.getAdapter=du.getAdapter;Je.HttpStatusCode=ui;Je.default=Je;const hr="https://x-pense-app-production.up.railway.app",bt=Je.create({baseURL:hr}),gd={balance:`${hr}/balance`,transactions:`${hr}/transactions`,goals:`${hr}/goals`,budget:`${hr}/budgets`,investments:`${hr}/investments`},Fn=a=>`${hr}${a}`;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)({}).hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},ca.apply(null,arguments)}var Xn;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(Xn||(Xn={}));const md="popstate";function by(a){a===void 0&&(a={});function i(o,l){let{pathname:d,search:u,hash:h}=o.location;return Qs("",{pathname:d,search:u,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(o,l){return typeof l=="string"?l:hi(l)}return vy(i,r,null,a)}function ft(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function fu(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function yy(){return Math.random().toString(36).substr(2,8)}function xd(a,i){return{usr:a.state,key:a.key,idx:i}}function Qs(a,i,r,o){return r===void 0&&(r=null),ca({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof i=="string"?Br(i):i,{state:r,key:i&&i.key||o||yy()})}function hi(a){let{pathname:i="/",search:r="",hash:o=""}=a;return r&&r!=="?"&&(i+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function Br(a){let i={};if(a){let r=a.indexOf("#");r>=0&&(i.hash=a.substr(r),a=a.substr(0,r));let o=a.indexOf("?");o>=0&&(i.search=a.substr(o),a=a.substr(0,o)),a&&(i.pathname=a)}return i}function vy(a,i,r,o){o===void 0&&(o={});let{window:l=document.defaultView,v5Compat:d=!1}=o,u=l.history,h=Xn.Pop,p=null,x=b();x==null&&(x=0,u.replaceState(ca({},u.state,{idx:x}),""));function b(){return(u.state||{idx:null}).idx}function y(){h=Xn.Pop;let L=b(),V=L==null?null:L-x;x=L,p&&p({action:h,location:k.location,delta:V})}function O(L,V){h=Xn.Push;let D=Qs(k.location,L,V);x=b()+1;let N=xd(D,x),C=k.createHref(D);try{u.pushState(N,"",C)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;l.location.assign(C)}d&&p&&p({action:h,location:k.location,delta:1})}function W(L,V){h=Xn.Replace;let D=Qs(k.location,L,V);x=b();let N=xd(D,x),C=k.createHref(D);u.replaceState(N,"",C),d&&p&&p({action:h,location:k.location,delta:0})}function I(L){let V=l.location.origin!=="null"?l.location.origin:l.location.href,D=typeof L=="string"?L:hi(L);return D=D.replace(/ $/,"%20"),ft(V,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,V)}let k={get action(){return h},get location(){return a(l,u)},listen(L){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(md,y),p=L,()=>{l.removeEventListener(md,y),p=null}},createHref(L){return i(l,L)},createURL:I,encodeLocation(L){let V=I(L);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:O,replace:W,go(L){return u.go(L)}};return k}var bd;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(bd||(bd={}));function wy(a,i,r){return r===void 0&&(r="/"),jy(a,i,r,!1)}function jy(a,i,r,o){let l=typeof i=="string"?Br(i):i,d=Lr(l.pathname||"/",r);if(d==null)return null;let u=pu(a);Sy(u);let h=null,p=ky(d);for(let x=0;h==null&&x<u.length;++x)h=Py(u[x],p,o);return h}function pu(a,i,r,o){i===void 0&&(i=[]),r===void 0&&(r=[]),o===void 0&&(o="");let l=(d,u,h)=>{let p={relativePath:h===void 0?d.path||"":h,caseSensitive:d.caseSensitive===!0,childrenIndex:u,route:d};p.relativePath.startsWith("/")&&(ft(p.relativePath.startsWith(o),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(o.length));let x=Zn([o,p.relativePath]),b=r.concat(p);d.children&&d.children.length>0&&(ft(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),pu(d.children,i,b,x)),!(d.path==null&&!d.index)&&i.push({path:x,score:Ty(x,d.index),routesMeta:b})};return a.forEach((d,u)=>{var h;if(d.path===""||!((h=d.path)!=null&&h.includes("?")))l(d,u);else for(let p of hu(d.path))l(d,u,p)}),i}function hu(a){let i=a.split("/");if(i.length===0)return[];let[r,...o]=i,l=r.endsWith("?"),d=r.replace(/\?$/,"");if(o.length===0)return l?[d,""]:[d];let u=hu(o.join("/")),h=[];return h.push(...u.map(p=>p===""?d:[d,p].join("/"))),l&&h.push(...u),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function Sy(a){a.sort((i,r)=>i.score!==r.score?r.score-i.score:Oy(i.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const _y=/^:[\w-]+$/,Ny=3,Cy=2,Ey=1,Ay=10,Ry=-2,yd=a=>a==="*";function Ty(a,i){let r=a.split("/"),o=r.length;return r.some(yd)&&(o+=Ry),i&&(o+=Cy),r.filter(l=>!yd(l)).reduce((l,d)=>l+(_y.test(d)?Ny:d===""?Ey:Ay),o)}function Oy(a,i){return a.length===i.length&&a.slice(0,-1).every((o,l)=>o===i[l])?a[a.length-1]-i[i.length-1]:0}function Py(a,i,r){let{routesMeta:o}=a,l={},d="/",u=[];for(let h=0;h<o.length;++h){let p=o[h],x=h===o.length-1,b=d==="/"?i:i.slice(d.length)||"/",y=gi({path:p.relativePath,caseSensitive:p.caseSensitive,end:x},b),O=p.route;if(!y&&x&&r&&!o[o.length-1].route.index&&(y=gi({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},b)),!y)return null;Object.assign(l,y.params),u.push({params:l,pathname:Zn([d,y.pathname]),pathnameBase:Ly(Zn([d,y.pathnameBase])),route:O}),y.pathnameBase!=="/"&&(d=Zn([d,y.pathnameBase]))}return u}function gi(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=$y(a.path,a.caseSensitive,a.end),l=i.match(r);if(!l)return null;let d=l[0],u=d.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:o.reduce((x,b,y)=>{let{paramName:O,isOptional:W}=b;if(O==="*"){let k=h[y]||"";u=d.slice(0,d.length-k.length).replace(/(.)\/+$/,"$1")}const I=h[y];return W&&!I?x[O]=void 0:x[O]=(I||"").replace(/%2F/g,"/"),x},{}),pathname:d,pathnameBase:u,pattern:a}}function $y(a,i,r){i===void 0&&(i=!1),r===void 0&&(r=!0),fu(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let o=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,p)=>(o.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(o.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),o]}function ky(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return fu(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),a}}function Lr(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}function Iy(a,i){i===void 0&&(i="/");let{pathname:r,search:o="",hash:l=""}=typeof a=="string"?Br(a):a,d;return r?(r=gu(r),r.startsWith("/")?d=vd(r.substring(1),"/"):d=vd(r,i)):d=i,{pathname:d,search:Dy(o),hash:Uy(l)}}function vd(a,i){let r=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Gs(a,i,r,o){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fy(a){return a.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function fo(a,i){let r=Fy(a);return i?r.map((o,l)=>l===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function po(a,i,r,o){o===void 0&&(o=!1);let l;typeof a=="string"?l=Br(a):(l=ca({},a),ft(!l.pathname||!l.pathname.includes("?"),Gs("?","pathname","search",l)),ft(!l.pathname||!l.pathname.includes("#"),Gs("#","pathname","hash",l)),ft(!l.search||!l.search.includes("#"),Gs("#","search","hash",l)));let d=a===""||l.pathname==="",u=d?"/":l.pathname,h;if(u==null)h=r;else{let y=i.length-1;if(!o&&u.startsWith("..")){let O=u.split("/");for(;O[0]==="..";)O.shift(),y-=1;l.pathname=O.join("/")}h=y>=0?i[y]:"/"}let p=Iy(l,h),x=u&&u!=="/"&&u.endsWith("/"),b=(d||u===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(x||b)&&(p.pathname+="/"),p}const gu=a=>a.replace(/\/\/+/g,"/"),Zn=a=>gu(a.join("/")),Ly=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Dy=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Uy=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function By(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const mu=["post","put","patch","delete"];new Set(mu);const zy=["get",...mu];new Set(zy);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)({}).hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},da.apply(null,arguments)}const ji=S.createContext(null),xu=S.createContext(null),Un=S.createContext(null),Si=S.createContext(null),er=S.createContext({outlet:null,matches:[],isDataRoute:!1}),bu=S.createContext(null);function Wy(a,i){let{relative:r}=i===void 0?{}:i;zr()||ft(!1);let{basename:o,navigator:l}=S.useContext(Un),{hash:d,pathname:u,search:h}=_i(a,{relative:r}),p=u;return o!=="/"&&(p=u==="/"?o:Zn([o,u])),l.createHref({pathname:p,search:h,hash:d})}function zr(){return S.useContext(Si)!=null}function tr(){return zr()||ft(!1),S.useContext(Si).location}function yu(a){S.useContext(Un).static||S.useLayoutEffect(a)}function wr(){let{isDataRoute:a}=S.useContext(er);return a?tv():Hy()}function Hy(){zr()||ft(!1);let a=S.useContext(ji),{basename:i,future:r,navigator:o}=S.useContext(Un),{matches:l}=S.useContext(er),{pathname:d}=tr(),u=JSON.stringify(fo(l,r.v7_relativeSplatPath)),h=S.useRef(!1);return yu(()=>{h.current=!0}),S.useCallback(function(x,b){if(b===void 0&&(b={}),!h.current)return;if(typeof x=="number"){o.go(x);return}let y=po(x,JSON.parse(u),d,b.relative==="path");a==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Zn([i,y.pathname])),(b.replace?o.replace:o.push)(y,b.state,b)},[i,o,u,d,a])}function _i(a,i){let{relative:r}=i===void 0?{}:i,{future:o}=S.useContext(Un),{matches:l}=S.useContext(er),{pathname:d}=tr(),u=JSON.stringify(fo(l,o.v7_relativeSplatPath));return S.useMemo(()=>po(a,JSON.parse(u),d,r==="path"),[a,u,d,r])}function qy(a,i){return Yy(a,i)}function Yy(a,i,r,o){zr()||ft(!1);let{navigator:l}=S.useContext(Un),{matches:d}=S.useContext(er),u=d[d.length-1],h=u?u.params:{};u&&u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let x=tr(),b;if(i){var y;let L=typeof i=="string"?Br(i):i;p==="/"||(y=L.pathname)!=null&&y.startsWith(p)||ft(!1),b=L}else b=x;let O=b.pathname||"/",W=O;if(p!=="/"){let L=p.replace(/^\//,"").split("/");W="/"+O.replace(/^\//,"").split("/").slice(L.length).join("/")}let I=wy(a,{pathname:W}),k=Jy(I&&I.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:Zn([p,l.encodeLocation?l.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:Zn([p,l.encodeLocation?l.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),d,r,o);return i&&k?S.createElement(Si.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:Xn.Pop}},k):k}function Gy(){let a=ev(),i=By(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},i),r?S.createElement("pre",{style:l},r):null,null)}const Vy=S.createElement(Gy,null);class My extends S.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,r){return r.location!==i.location||r.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:r.error,location:r.location,revalidation:i.revalidation||r.revalidation}}componentDidCatch(i,r){console.error("React Router caught the following error during render",i,r)}render(){return this.state.error!==void 0?S.createElement(er.Provider,{value:this.props.routeContext},S.createElement(bu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ky(a){let{routeContext:i,match:r,children:o}=a,l=S.useContext(ji);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),S.createElement(er.Provider,{value:i},o)}function Jy(a,i,r,o){var l;if(i===void 0&&(i=[]),r===void 0&&(r=null),o===void 0&&(o=null),a==null){var d;if(!r)return null;if(r.errors)a=r.matches;else if((d=o)!=null&&d.v7_partialHydration&&i.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let u=a,h=(l=r)==null?void 0:l.errors;if(h!=null){let b=u.findIndex(y=>y.route.id&&(h==null?void 0:h[y.route.id])!==void 0);b>=0||ft(!1),u=u.slice(0,Math.min(u.length,b+1))}let p=!1,x=-1;if(r&&o&&o.v7_partialHydration)for(let b=0;b<u.length;b++){let y=u[b];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(x=b),y.route.id){let{loaderData:O,errors:W}=r,I=y.route.loader&&O[y.route.id]===void 0&&(!W||W[y.route.id]===void 0);if(y.route.lazy||I){p=!0,x>=0?u=u.slice(0,x+1):u=[u[0]];break}}}return u.reduceRight((b,y,O)=>{let W,I=!1,k=null,L=null;r&&(W=h&&y.route.id?h[y.route.id]:void 0,k=y.route.errorElement||Vy,p&&(x<0&&O===0?(I=!0,L=null):x===O&&(I=!0,L=y.route.hydrateFallbackElement||null)));let V=i.concat(u.slice(0,O+1)),D=()=>{let N;return W?N=k:I?N=L:y.route.Component?N=S.createElement(y.route.Component,null):y.route.element?N=y.route.element:N=b,S.createElement(Ky,{match:y,routeContext:{outlet:b,matches:V,isDataRoute:r!=null},children:N})};return r&&(y.route.ErrorBoundary||y.route.errorElement||O===0)?S.createElement(My,{location:r.location,revalidation:r.revalidation,component:k,error:W,children:D(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):D()},null)}var vu=function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a}(vu||{}),mi=function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a}(mi||{});function Xy(a){let i=S.useContext(ji);return i||ft(!1),i}function Zy(a){let i=S.useContext(xu);return i||ft(!1),i}function Qy(a){let i=S.useContext(er);return i||ft(!1),i}function wu(a){let i=Qy(),r=i.matches[i.matches.length-1];return r.route.id||ft(!1),r.route.id}function ev(){var a;let i=S.useContext(bu),r=Zy(mi.UseRouteError),o=wu(mi.UseRouteError);return i!==void 0?i:(a=r.errors)==null?void 0:a[o]}function tv(){let{router:a}=Xy(vu.UseNavigateStable),i=wu(mi.UseNavigateStable),r=S.useRef(!1);return yu(()=>{r.current=!0}),S.useCallback(function(l,d){d===void 0&&(d={}),r.current&&(typeof l=="number"?a.navigate(l):a.navigate(l,da({fromRouteId:i},d)))},[a,i])}function nv(a,i){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function rv(a){let{to:i,replace:r,state:o,relative:l}=a;zr()||ft(!1);let{future:d,static:u}=S.useContext(Un),{matches:h}=S.useContext(er),{pathname:p}=tr(),x=wr(),b=po(i,fo(h,d.v7_relativeSplatPath),p,l==="path"),y=JSON.stringify(b);return S.useEffect(()=>x(JSON.parse(y),{replace:r,state:o,relative:l}),[x,y,l,r,o]),null}function vn(a){ft(!1)}function av(a){let{basename:i="/",children:r=null,location:o,navigationType:l=Xn.Pop,navigator:d,static:u=!1,future:h}=a;zr()&&ft(!1);let p=i.replace(/^\/*/,"/"),x=S.useMemo(()=>({basename:p,navigator:d,static:u,future:da({v7_relativeSplatPath:!1},h)}),[p,h,d,u]);typeof o=="string"&&(o=Br(o));let{pathname:b="/",search:y="",hash:O="",state:W=null,key:I="default"}=o,k=S.useMemo(()=>{let L=Lr(b,p);return L==null?null:{location:{pathname:L,search:y,hash:O,state:W,key:I},navigationType:l}},[p,b,y,O,W,I,l]);return k==null?null:S.createElement(Un.Provider,{value:x},S.createElement(Si.Provider,{children:r,value:k}))}function wd(a){let{children:i,location:r}=a;return qy(eo(i),r)}new Promise(()=>{});function eo(a,i){i===void 0&&(i=[]);let r=[];return S.Children.forEach(a,(o,l)=>{if(!S.isValidElement(o))return;let d=[...i,l];if(o.type===S.Fragment){r.push.apply(r,eo(o.props.children,d));return}o.type!==vn&&ft(!1),!o.props.index||!o.props.children||ft(!1);let u={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=eo(o.props.children,d)),r.push(u)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)({}).hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},xi.apply(null,arguments)}function ju(a,i){if(a==null)return{};var r={};for(var o in a)if({}.hasOwnProperty.call(a,o)){if(i.indexOf(o)!==-1)continue;r[o]=a[o]}return r}function iv(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function sv(a,i){return a.button===0&&(!i||i==="_self")&&!iv(a)}const ov=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lv=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],cv="6";try{window.__reactRouterVersion=cv}catch{}const dv=S.createContext({isTransitioning:!1}),uv="startTransition",jd=Lx[uv];function fv(a){let{basename:i,children:r,future:o,window:l}=a,d=S.useRef();d.current==null&&(d.current=by({window:l,v5Compat:!0}));let u=d.current,[h,p]=S.useState({action:u.action,location:u.location}),{v7_startTransition:x}=o||{},b=S.useCallback(y=>{x&&jd?jd(()=>p(y)):p(y)},[p,x]);return S.useLayoutEffect(()=>u.listen(b),[u,b]),S.useEffect(()=>nv(o),[o]),S.createElement(av,{basename:i,children:r,location:h.location,navigationType:h.action,navigator:u,future:o})}const pv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gv=S.forwardRef(function(i,r){let{onClick:o,relative:l,reloadDocument:d,replace:u,state:h,target:p,to:x,preventScrollReset:b,viewTransition:y}=i,O=ju(i,ov),{basename:W}=S.useContext(Un),I,k=!1;if(typeof x=="string"&&hv.test(x)&&(I=x,pv))try{let N=new URL(window.location.href),C=x.startsWith("//")?new URL(N.protocol+x):new URL(x),ne=Lr(C.pathname,W);C.origin===N.origin&&ne!=null?x=ne+C.search+C.hash:k=!0}catch{}let L=Wy(x,{relative:l}),V=xv(x,{replace:u,state:h,target:p,preventScrollReset:b,relative:l,viewTransition:y});function D(N){o&&o(N),N.defaultPrevented||V(N)}return S.createElement("a",xi({},O,{href:I||L,onClick:k||d?o:D,ref:r,target:p}))}),In=S.forwardRef(function(i,r){let{"aria-current":o="page",caseSensitive:l=!1,className:d="",end:u=!1,style:h,to:p,viewTransition:x,children:b}=i,y=ju(i,lv),O=_i(p,{relative:y.relative}),W=tr(),I=S.useContext(xu),{navigator:k,basename:L}=S.useContext(Un),V=I!=null&&bv(O)&&x===!0,D=k.encodeLocation?k.encodeLocation(O).pathname:O.pathname,N=W.pathname,C=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;l||(N=N.toLowerCase(),C=C?C.toLowerCase():null,D=D.toLowerCase()),C&&L&&(C=Lr(C,L)||C);const ne=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let ie=N===D||!u&&N.startsWith(D)&&N.charAt(ne)==="/",me=C!=null&&(C===D||!u&&C.startsWith(D)&&C.charAt(D.length)==="/"),re={isActive:ie,isPending:me,isTransitioning:V},fe=ie?o:void 0,xe;typeof d=="function"?xe=d(re):xe=[d,ie?"active":null,me?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let A=typeof h=="function"?h(re):h;return S.createElement(gv,xi({},y,{"aria-current":fe,className:xe,ref:r,style:A,to:p,viewTransition:x}),typeof b=="function"?b(re):b)});var to;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(to||(to={}));var Sd;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Sd||(Sd={}));function mv(a){let i=S.useContext(ji);return i||ft(!1),i}function xv(a,i){let{target:r,replace:o,state:l,preventScrollReset:d,relative:u,viewTransition:h}=i===void 0?{}:i,p=wr(),x=tr(),b=_i(a,{relative:u});return S.useCallback(y=>{if(sv(y,r)){y.preventDefault();let O=o!==void 0?o:hi(x)===hi(b);p(a,{replace:O,state:l,preventScrollReset:d,relative:u,viewTransition:h})}},[x,p,b,o,l,r,a,d,u,h])}function bv(a,i){i===void 0&&(i={});let r=S.useContext(dv);r==null&&ft(!1);let{basename:o}=mv(to.useViewTransitionState),l=_i(a,{relative:i.relative});if(!r.isTransitioning)return!1;let d=Lr(r.currentLocation.pathname,o)||r.currentLocation.pathname,u=Lr(r.nextLocation.pathname,o)||r.nextLocation.pathname;return gi(l.pathname,u)!=null||gi(l.pathname,d)!=null}class yv{constructor(){this.categoryPatterns={"Food & Dining":["starbucks","mcdonalds","burger king","subway","chipotle","kfc","pizza hut","dominos","taco bell","wendys","restaurant","cafe","diner","bistro","grill","bar","pub","bakery","doordash","uber eats","grubhub","postmates","food","dining"],Transportation:["shell","exxon","chevron","bp","mobil","gas","fuel","station","uber","lyft","taxi","metro","bus","train","parking","toll","automotive","repair","mechanic","oil change"],Shopping:["amazon","walmart","target","costco","best buy","home depot","lowes","macys","nordstrom","tj maxx","marshall","store","shopping","retail","mall","outlet"],Groceries:["kroger","safeway","whole foods","trader joe","publix","aldi","wegmans","harris teeter","food lion","giant","stop shop","grocery","supermarket","market"],Entertainment:["netflix","spotify","apple music","disney","hulu","amazon prime","youtube","cinema","theater","movie","concert","game","steam","playstation","xbox","entertainment"],Utilities:["electric","power","water","gas company","internet","cable","phone","cell","verizon","att","tmobile","comcast","utility"],Healthcare:["pharmacy","cvs","walgreens","rite aid","hospital","clinic","doctor","dentist","medical","health","insurance"],Finance:["bank","atm","fee","interest","loan","credit","investment","transfer","payment","financial"],"Phone Service":["phone","cell","cellular","mobile","verizon","att","at&t","tmobile","t-mobile","sprint","boost","cricket","mint mobile","visible","metro pcs","tracfone","straight talk","ting","spectrum"]},this.userCorrections=this.loadUserCorrections()}categorizeTransaction(i,r=null){if(!i)return{category:"Other",confidence:0};const o=i.toLowerCase().trim(),l=this.checkUserCorrections(o);if(l)return{category:l,confidence:95};const d=this.findPatternMatch(o);return d||this.advancedCategorization(o,r)}checkUserCorrections(i){for(const r of this.userCorrections)if(i.includes(r.merchant.toLowerCase()))return r.category;return null}findPatternMatch(i){const r={};for(const[l,d]of Object.entries(this.categoryPatterns)){let u=0,h=0;for(const p of d)i.includes(p)&&(u+=p.length,h++);h>0&&(r[l]=u/d.length*100)}if(Object.keys(r).length===0)return null;const o=Object.keys(r).reduce((l,d)=>r[l]>r[d]?l:d);return{category:o,confidence:Math.min(Math.round(r[o]*2),90)}}advancedCategorization(i,r){if(r){const o=parseFloat(r);if(o<10&&this.containsWords(i,["coffee","snack","drink"]))return{category:"Food & Dining",confidence:70};if(o>500&&this.containsWords(i,["rent","mortgage","property"]))return{category:"Housing",confidence:75}}return this.containsWords(i,["purchase","buy","shop"])?{category:"Shopping",confidence:60}:this.containsWords(i,["payment","bill","invoice"])?{category:"Bills & Utilities",confidence:65}:{category:"Other",confidence:30}}containsWords(i,r){return r.some(o=>i.includes(o))}learnFromCorrection(i,r,o){const l=this.extractMerchantName(i),d={merchant:l,originalCategory:r,correctedCategory:o,timestamp:new Date().toISOString()};this.userCorrections.push(d),this.saveUserCorrections(),this.categoryPatterns[o].some(u=>l.toLowerCase().includes(u))||this.categoryPatterns[o].push(l.toLowerCase())}extractMerchantName(i){let r=i.replace(/^(purchase|payment|transfer)\s+/i,"").replace(/\s+(#\d+|store|inc|llc|corp).*$/i,"").trim();return r=r.split(/\s+#|\s+\d{3,}/)[0],r}loadUserCorrections(){try{const i=localStorage.getItem("ai_transaction_corrections");return i?JSON.parse(i):[]}catch(i){return console.error("Error loading user corrections:",i),[]}}saveUserCorrections(){try{localStorage.setItem("ai_transaction_corrections",JSON.stringify(this.userCorrections))}catch(i){console.error("Error saving user corrections:",i)}}getStats(){const i=this.userCorrections.length,r={};return this.userCorrections.forEach(o=>{r[o.correctedCategory]=(r[o.correctedCategory]||0)+1}),{totalCorrections:i,categoryDistribution:r,learningAccuracy:i>0?Math.min(85+i*2,95):65}}}const mr=new yv,vv=["Food & Dining","Transportation","Shopping","Groceries","Entertainment","Utilities","Healthcare","Finance","Housing","Bills & Utilities","Education","Travel","Personal Care","Gifts & Donations","Other"];function wv({amount:a,setAmount:i,category:r,setCategory:o,date:l,setDate:d,description:u,setDescription:h,darkMode:p}){const x=wr(),[b,y]=S.useState(!1),[O,W]=S.useState(!1),[I,k]=S.useState({}),[L,V]=S.useState(!1),[D,N]=S.useState(null),[C,ne]=S.useState(!1),[ie,me]=S.useState(!1);S.useEffect(()=>{if(u.trim().length>2){me(!0);const P=setTimeout(()=>{const Z=mr.categorizeTransaction(u,a);N(Z),ne(Z.confidence>60&&Z.category!==r),me(!1)},500);return()=>clearTimeout(P)}else ne(!1),N(null),me(!1)},[u,a,r]);const re=()=>{D&&(o(D.category),ne(!1),mr.learnFromCorrection(u,a,D.category))},fe=()=>{ne(!1)},xe=P=>{const Z=parseFloat(P.target.value);i(isNaN(Z)?0:Z),I.amount&&k(oe=>({...oe,amount:""}))},A=P=>{d(P.target.value),I.date&&k(Z=>({...Z,date:""}))},X=()=>{const P={};return r||(P.category="Please select a category"),u.trim()||(P.description="Description is required"),(!a||a<=0)&&(P.amount="Please enter a valid amount"),l||(P.date="Please select a date"),k(P),Object.keys(P).length===0},se=async P=>{if(P.preventDefault(),!X()){V(!0),setTimeout(()=>V(!1),500);return}y(!0),k({});const Z={category:r,date:new Date(l).toISOString().split("T")[0],description:u,amount:a};try{const oe=await bt.post("/transactions",Z);console.log("Transaction added:",oe.data),D&&D.category!==r&&D.confidence>50&&(mr.learnFromCorrection(u,D.category,r),console.log(`AI learned: "${u}" should be categorized as "${r}" not "${D.category}"`)),W(!0),o(""),d(""),h(""),i(0),N(null),ne(!1),setTimeout(()=>{W(!1),x("/transactions")},2e3)}catch(oe){console.error("Error adding transaction:",oe),k({submit:"Failed to add transaction. Please try again."})}finally{y(!1)}};return n.jsxs("div",{className:"add-transactions-container",children:[n.jsx("style",{jsx:!0,children:`
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
            `}),n.jsx("div",{className:"form-header",children:n.jsx("h5",{children:"💰 Set X-Penses"})}),O&&n.jsx("div",{className:"success-message",children:"✅ Transaction added successfully! Redirecting..."}),I.submit&&n.jsxs("div",{className:"error-message",style:{marginBottom:"20px",justifyContent:"center"},children:["❌ ",I.submit]}),n.jsx("div",{className:"form-container",children:n.jsxs("form",{onSubmit:se,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"category",children:"📂 Category"}),n.jsxs("select",{id:"category",name:"category",className:`form-control ${I.category?"error":""}`,value:r,style:{color:r===""?p?"#a0aec0":"#718096":p?"#ffffff":"#000000",backgroundColor:p?"#2d3748":"#ffffff",fontSize:"1rem",fontWeight:r===""?"400":"600",fontStyle:r===""?"italic":"normal"},onChange:P=>{const Z=P.target.value;o(Z),D&&Z&&Z!==D.category&&(mr.learnFromCorrection(u,a,Z),ne(!1)),I.category&&k(oe=>({...oe,category:""}))},children:[n.jsx("option",{value:"",children:"🎯 Select A Category"}),vv.map(P=>n.jsxs("option",{value:P,children:[P==="Food & Dining"&&"🍕",P==="Transportation"&&"🚗",P==="Shopping"&&"🛍️",P==="Groceries"&&"🛒",P==="Entertainment"&&"🎬",P==="Utilities"&&"⚡",P==="Healthcare"&&"�",P==="Finance"&&"💳",P==="Housing"&&"🏠",P==="Bills & Utilities"&&"📄",P==="Education"&&"📚",P==="Travel"&&"✈️",P==="Personal Care"&&"💄",P==="Gifts & Donations"&&"�",P==="Other"&&"❓"," "+P]},P))]}),I.category&&n.jsxs("div",{className:"error-message",children:["❌ ",I.category]}),C&&D&&n.jsx("div",{className:"ai-suggestion-banner",children:n.jsxs("div",{className:"ai-suggestion-content",children:[n.jsx("div",{className:"ai-icon",children:"🤖"}),n.jsxs("div",{className:"ai-text",children:[n.jsxs("div",{className:"ai-main-text",children:["AI suggests: ",n.jsx("strong",{children:D.category})]}),n.jsxs("div",{className:"ai-confidence",children:["Confidence: ",D.confidence,"%"]})]}),n.jsxs("div",{className:"ai-actions",children:[n.jsx("button",{type:"button",className:"btn-ai-accept",onClick:re,children:"✅ Use This"}),n.jsx("button",{type:"button",className:"btn-ai-dismiss",onClick:fe,children:"❌ Dismiss"})]})]})}),ie&&n.jsxs("div",{className:"ai-analyzing",children:[n.jsx("div",{className:"spinner"}),n.jsx("span",{children:"🤖 AI is analyzing..."})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"text",children:"📝 Description"}),n.jsx("input",{type:"text",className:`form-control ${I.description?"error":""}`,id:"text",name:"text",value:u,placeholder:"💭 Enter transaction description...",onChange:P=>{h(P.target.value),I.description&&k(Z=>({...Z,description:""}))}}),I.description&&n.jsxs("div",{className:"error-message",children:["❌ ",I.description]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"amount",children:"💵 Amount"}),n.jsxs("div",{className:"amount-input-container",children:[n.jsx("span",{className:"currency-symbol",children:"$"}),n.jsx("input",{type:"number",id:"amount",name:"amount",className:`form-control amount-input ${I.amount?"error":""}`,value:a,placeholder:"0.00",min:"0",step:"0.01",onChange:xe})]}),I.amount&&n.jsxs("div",{className:"error-message",children:["❌ ",I.amount]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"date",children:"📅 Date"}),n.jsx("input",{type:"date",id:"date",name:"date",className:`form-control ${I.date?"error":""}`,value:l?new Date(l).toISOString().split("T")[0]:"",onChange:A}),I.date&&n.jsxs("div",{className:"error-message",children:["❌ ",I.date]})]}),n.jsx("div",{children:n.jsx("button",{type:"submit",className:"submit-button",disabled:b,children:b?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"loading-spinner"}),"Adding Transaction..."]}):"✨ Add Transaction"})})]})})]})}class jv{constructor(){this.EMERGENCY_FUND_MONTHS=6,this.SAVINGS_RATE_TARGET=.2,this.LIQUID_ASSETS_MIN=.15}calculateFinancialMetrics(i,r=0,o=0){const l=this.getTotalCash(i),d=this.getTotalBankBalance(i),u=this.getTotalSavings(i),h=l+d+u;return{totalCash:l,totalBankBalance:d,totalSavings:u,totalAssets:h,liquidityRatio:this.calculateLiquidityRatio(l,d,h),liquidAssets:l+d,emergencyFundStatus:this.analyzeEmergencyFund(u,o),emergencyFundTarget:o*this.EMERGENCY_FUND_MONTHS,savingsRate:r>0?u/r:0,savingsRateTarget:this.SAVINGS_RATE_TARGET,financialHealthScore:this.calculateFinancialHealthScore(h,r,o,u),accountDistribution:this.calculateAccountDistribution(i),projectedGrowth:this.calculateGrowthProjections(h,r,o)}}getTotalCash(i){return i.reduce((r,o)=>r+(o.cash_on_hand||0),0)}getTotalBankBalance(i){return i.reduce((r,o)=>r+(o.bank_account_balance||0),0)}getTotalSavings(i){return i.reduce((r,o)=>r+(o.savings||0),0)}calculateLiquidityRatio(i,r,o){return o===0?0:(i+r)/o*100}analyzeEmergencyFund(i,r){if(r===0)return{status:"unknown",months:0,recommendation:"Set monthly expenses to analyze emergency fund"};const o=i/r;return o>=this.EMERGENCY_FUND_MONTHS?{status:"excellent",months:o,recommendation:"Great! Consider investing excess emergency funds"}:o>=3?{status:"good",months:o,recommendation:`Add $${((this.EMERGENCY_FUND_MONTHS-o)*r).toFixed(2)} more`}:o>=1?{status:"needs_improvement",months:o,recommendation:"Focus on building emergency fund to 3-6 months"}:{status:"critical",months:o,recommendation:"Emergency fund needed! Start with $1000 minimum"}}calculateFinancialHealthScore(i,r,o,l){let d=0;if(i>0&&(d+=Math.min(30,i/1e4*30)),o>0){const u=l/o;d+=Math.min(25,u/this.EMERGENCY_FUND_MONTHS*25)}if(r>0){const u=l/r;d+=Math.min(25,u/this.SAVINGS_RATE_TARGET*25)}if(r>0&&o>0){const u=o/r;u<=.5?d+=20:u<=.7?d+=15:u<=.8?d+=10:u<=.9&&(d+=5)}return Math.min(100,Math.round(d))}calculateAccountDistribution(i){const r=this.getTotalCash(i),o=this.getTotalBankBalance(i),l=this.getTotalSavings(i),d=r+o+l;return d===0?{cash:0,bank:0,savings:0}:{cash:r/d*100,bank:o/d*100,savings:l/d*100}}calculateGrowthProjections(i,r,o){const l=r-o;return{oneMonth:i+l,threeMonth:i+l*3,sixMonth:i+l*6,oneYear:i+l*12,monthlyNetFlow:l}}validateBalanceInputs(i,r,o){const l={};i<0&&(l.cashOnHand="Cash amount cannot be negative"),i>5e4&&(l.cashOnHand="Consider depositing large cash amounts in bank for security"),r<0&&(l.bankBalance="Bank balance cannot be negative"),o<0&&(l.savings="Savings cannot be negative"),i===0&&r===0&&o===0&&(l.general="Please enter at least one balance amount");const d=i+r+o;if(d>0){const u=i/d*100;u>30&&(l.warning=`${u.toFixed(0)}% in cash - consider banking for safety`)}return l}suggestOptimalAllocation(i){const r={cash:0,bank:0,savings:0,reasoning:[]};return i<=1e3?(r.cash=i*.2,r.bank=i*.8,r.savings=0,r.reasoning.push("Keep small amounts liquid and accessible")):i<=1e4?(r.cash=Math.min(500,i*.1),r.bank=i*.4,r.savings=i*.5,r.reasoning.push("Build emergency fund in savings"),r.reasoning.push("Keep some funds liquid for daily expenses")):(r.cash=Math.min(1e3,i*.05),r.bank=i*.35,r.savings=i*.6,r.reasoning.push("Maximize savings for emergency fund and goals"),r.reasoning.push("Maintain liquidity for unexpected expenses")),r}analyzeAccountConsolidation(i){if(i.length<=1)return null;const r=[];i.forEach((l,d)=>{const u=l.cash_on_hand+l.bank_account_balance+l.savings;u<100&&r.push({index:d,total:u,account:l})});const o=[];if(r.length>1){const l=r.reduce((d,u)=>d+u.total,0);o.push({type:"consolidate_low_balance",message:`Consider consolidating ${r.length} low-balance accounts (${l.toFixed(2)})`,accounts:r,potentialSavings:r.length*5})}return o.length>0?o:null}generateFinancialInsights(i,r){const o=[];i.liquidityRatio<15?o.push({type:"warning",category:"liquidity",title:"Low Liquidity Warning",message:`Only ${i.liquidityRatio.toFixed(1)}% of assets are liquid. Consider keeping more in cash/checking.`,priority:"high"}):i.liquidityRatio>80&&o.push({type:"opportunity",category:"liquidity",title:"Excess Liquidity",message:`${i.liquidityRatio.toFixed(1)}% of assets are liquid. Consider moving some to higher-yield savings.`,priority:"medium"});const l=i.emergencyFundStatus;l.status==="critical"?o.push({type:"critical",category:"emergency_fund",title:"Emergency Fund Critical",message:l.recommendation,priority:"high"}):l.status==="excellent"&&o.push({type:"success",category:"emergency_fund",title:"Emergency Fund Complete",message:`Great! You have ${l.months.toFixed(1)} months of expenses saved.`,priority:"low"}),i.financialHealthScore>=80?o.push({type:"success",category:"health",title:"Excellent Financial Health",message:`Your financial health score is ${i.financialHealthScore}/100. Keep it up!`,priority:"low"}):i.financialHealthScore<40&&o.push({type:"warning",category:"health",title:"Financial Health Needs Attention",message:`Your financial health score is ${i.financialHealthScore}/100. Focus on building emergency fund and reducing expenses.`,priority:"high"});const d=this.analyzeAccountConsolidation(r);return d&&o.push({type:"opportunity",category:"consolidation",title:"Account Consolidation Opportunity",message:d[0].message,priority:"medium"}),o}}class Su{constructor(){try{this.updateHistory=this.loadUpdateHistory(),this.updatePatterns=this.loadUpdatePatterns(),this.validationRules=this.initializeValidationRules()}catch(i){console.warn("SmartUpdateService initialization warning:",i),this.updateHistory=[],this.updatePatterns={},this.validationRules=this.getDefaultValidationRules()}}getDefaultValidationRules(){return{balance:{minimums:{cash:0,bank:0,savings:0},maximums:{cash:5e4,bank:1e6,savings:1e6},ratios:{cashToTotal:{min:.05,max:.3},savingsToTotal:{min:.1,max:.6}},warningThresholds:{lowCash:100,lowSavings:1e3,highCash:1e4}}}}initializeValidationRules(){return{balance:{minimums:{cash:0,bank:0,savings:0},maximums:{cash:5e4,bank:1e6,savings:1e6},ratios:{cashToTotal:{min:.05,max:.3},savingsToTotal:{min:.1,max:.6}},warningThresholds:{lowCash:100,lowSavings:1e3,highCash:1e4}},budget:{categories:{"Food & Dining":{minPercent:10,maxPercent:30},Transportation:{minPercent:5,maxPercent:20},Utilities:{minPercent:5,maxPercent:15},Entertainment:{minPercent:2,maxPercent:15},Healthcare:{minPercent:3,maxPercent:20}},totalBudgetLimits:{min:100,max:5e4}},investments:{diversification:{maxSingleAsset:.4,minAssets:3,riskLevels:{conservative:{crypto:.1,stocks:.4},moderate:{crypto:.2,stocks:.6},aggressive:{crypto:.4,stocks:.8}}}}}}validateUpdate(i,r,o=null){const l={isValid:!0,errors:[],warnings:[],suggestions:[],aiRecommendations:[]};switch(i){case"balance":return this.validateBalanceUpdate(r,l,o);case"budget":return this.validateBudgetUpdate(r,l,o);case"investment":return this.validateInvestmentUpdate(r,l,o);case"transaction":return this.validateTransactionUpdate(r,l,o);default:return l.errors.push("Unknown update type"),l.isValid=!1,l}}validateBalanceUpdate(i,r,o){const{cash_on_hand:l,bank_account_balance:d,savings:u}=i,h=l+d+u,p=this.validationRules.balance;if(l<p.minimums.cash&&(r.errors.push("Cash amount cannot be negative"),r.isValid=!1),d<p.minimums.bank&&(r.errors.push("Bank balance cannot be negative"),r.isValid=!1),u<p.minimums.savings&&(r.errors.push("Savings cannot be negative"),r.isValid=!1),h>0){const x=l/h,b=u/h;x>p.ratios.cashToTotal.max&&(r.warnings.push(`High cash percentage (${(x*100).toFixed(1)}%). Consider moving some to savings or investments.`),r.aiRecommendations.push({type:"reallocation",message:`Move $${(l-h*p.ratios.cashToTotal.max).toFixed(2)} from cash to savings`,suggestedAllocation:{cash:Math.round(h*p.ratios.cashToTotal.max),bank:d,savings:u+(l-Math.round(h*p.ratios.cashToTotal.max))}})),b<p.ratios.savingsToTotal.min&&(r.warnings.push(`Low savings percentage (${(b*100).toFixed(1)}%). Consider increasing your emergency fund.`),r.suggestions.push("Aim for at least 3-6 months of expenses in savings"))}return this.addPatternBasedSuggestions(r,"balance",i,o),r}validateBudgetUpdate(i,r,o){const{item_name:l,amount:d,date:u}=i;this.validationRules.budget,(!l||l.trim().length===0)&&(r.errors.push("Budget item name is required"),r.isValid=!1),(!d||d<=0)&&(r.errors.push("Budget amount must be positive"),r.isValid=!1),u||(r.errors.push("Budget date is required"),r.isValid=!1);const h=this.suggestBudgetCategory(l);h&&h!==l&&r.suggestions.push(`Consider categorizing as "${h}" for better tracking`);const p=this.suggestBudgetOptimization(l,d,o);return p&&r.aiRecommendations.push(p),r}validateInvestmentUpdate(i,r,o){const{name:l,amount:d,pricePerUnit:u,total_price:h}=i,p=this.validationRules.investments;if((!l||l.trim().length===0)&&(r.errors.push("Investment name is required"),r.isValid=!1),(!d||d<=0)&&(r.errors.push("Investment amount must be positive"),r.isValid=!1),o&&o.portfolio){const b=this.analyzePortfolioDiversification(i,o.portfolio);b.riskLevel==="high"&&(r.warnings.push(`High risk detected: ${b.reason}`),r.aiRecommendations.push({type:"diversification",message:"Consider diversifying your portfolio to reduce risk",suggestions:b.suggestions})),b.concentration>p.diversification.maxSingleAsset&&r.warnings.push(`High concentration in ${l} (${(b.concentration*100).toFixed(1)}%)`)}const x=this.getMarketTimingSuggestion(l,d);return x&&r.suggestions.push(x),r}validateBulkUpdate(i,r){const o={isValid:!0,validUpdates:[],invalidUpdates:[],warnings:[],suggestions:[],aiRecommendations:[]};return r.forEach((l,d)=>{const u=this.validateUpdate(i,l.data,l.currentData);u.isValid?o.validUpdates.push({...l,index:d,validation:u}):(o.invalidUpdates.push({...l,index:d,validation:u}),o.isValid=!1),o.warnings.push(...u.warnings),o.suggestions.push(...u.suggestions),o.aiRecommendations.push(...u.aiRecommendations)}),this.addBulkRecommendations(o,i,r),o}generateUpdateSuggestions(i,r,o=null){const l={priority:[],optimization:[],maintenance:[]};switch(i){case"balance":return this.generateBalanceSuggestions(r,l,o);case"budget":return this.generateBudgetSuggestions(r,l,o);case"investment":return this.generateInvestmentSuggestions(r,l,o);default:return l}}generateBalanceSuggestions(i,r,o){if(!i||i.length===0)return r;const l=i.reduce((h,p)=>h+p.cash_on_hand+p.bank_account_balance+p.savings,0),d=l/i.length;l<1e3&&r.priority.push({type:"emergency_fund",message:"Build emergency fund to at least $1,000",action:"Increase savings gradually",priority:"high"});const u=i.filter(h=>h.cash_on_hand+h.bank_account_balance+h.savings<d*.5);return u.length>1&&r.optimization.push({type:"consolidation",message:`Consider consolidating ${u.length} low-balance accounts`,action:"Merge accounts to reduce maintenance overhead",priority:"medium"}),r}trackUpdate(i,r,o){try{const l={timestamp:new Date().toISOString(),type:i,data:r,result:o,success:o.success||!1};this.updateHistory.push(l),this.saveUpdateHistory(),this.analyzeUpdatePatterns()}catch(l){console.warn("Error tracking update:",l)}}analyzeUpdatePatterns(){if(this.updateHistory.length<5)return;const i=this.updateHistory.slice(-20),r={frequency:{},timing:{},amounts:{},success_rate:0};i.forEach(l=>{r.frequency[l.type]=(r.frequency[l.type]||0)+1});const o=i.filter(l=>l.success).length;r.success_rate=o/i.length*100,this.updatePatterns=r,this.saveUpdatePatterns()}addPatternBasedSuggestions(i,r,o,l){const d=this.getUserUpdatePatterns(r);d.frequency>5&&r==="balance"&&d.averageAmount&&o.cash_on_hand>d.averageAmount*1.5&&i.suggestions.push("This is higher than your usual cash amount. Consider if this allocation is intentional.")}suggestBudgetCategory(i){const r={"Food & Dining":["food","restaurant","dining","grocery","coffee","lunch","dinner"],Transportation:["gas","fuel","car","transport","uber","taxi","bus"],Utilities:["electric","water","gas","internet","phone","utility"],Entertainment:["movie","game","concert","streaming","netflix","entertainment"],Healthcare:["medical","doctor","pharmacy","health","insurance"]},o=i.toLowerCase();for(const[l,d]of Object.entries(r))if(d.some(u=>o.includes(u)))return l;return null}analyzePortfolioDiversification(i,r){const o=r.reduce((d,u)=>d+u.total_price,0)+i.total_price,l=i.total_price/o;return{concentration:l,riskLevel:l>.4?"high":l>.2?"medium":"low",reason:l>.4?`${i.name} would represent ${(l*100).toFixed(1)}% of portfolio`:"",suggestions:l>.4?["Consider reducing position size","Add other assets for diversification"]:[]}}getMarketTimingSuggestion(i,r){return["bitcoin","ethereum","crypto"].some(l=>i.toLowerCase().includes(l))?"Consider dollar-cost averaging for volatile assets rather than lump sum investment":null}loadUpdateHistory(){try{const i=localStorage.getItem("smart_update_history");return i?JSON.parse(i):[]}catch(i){return console.warn("Error loading update history:",i),[]}}saveUpdateHistory(){try{const i=this.updateHistory.slice(-100);localStorage.setItem("smart_update_history",JSON.stringify(i))}catch(i){console.warn("Error saving update history:",i)}}loadUpdatePatterns(){try{const i=localStorage.getItem("smart_update_patterns");return i?JSON.parse(i):{}}catch(i){return console.warn("Error loading update patterns:",i),{}}}saveUpdatePatterns(){try{localStorage.setItem("smart_update_patterns",JSON.stringify(this.updatePatterns))}catch(i){console.warn("Error saving update patterns:",i)}}getUserUpdatePatterns(i){var l;const r=this.updateHistory.filter(d=>d.type===i);if(r.length===0)return{frequency:0};const o=r.filter(d=>d.data&&typeof d.data.amount=="number").map(d=>d.data.amount);return{frequency:r.length,averageAmount:o.length>0?o.reduce((d,u)=>d+u,0)/o.length:null,lastUpdate:(l=r[r.length-1])==null?void 0:l.timestamp}}addBulkRecommendations(i,r,o){r==="balance"&&o.length>3&&i.aiRecommendations.push({type:"bulk_optimization",message:"Multiple balance updates detected. Consider using account consolidation feature.",action:"Review account structure for optimization opportunities"}),r==="budget"&&o.length>5&&i.suggestions.push("Large budget update detected. Consider using budget templates for consistency.")}generateOptimizationReport(i,r){const o={summary:"",recommendations:[],metrics:{},nextSteps:[]};return o.summary=`Analysis complete for ${i} updates. Found ${r.length} items for review.`,o}}function Sv({darkMode:a,updateType:i,items:r,onBulkUpdate:o,onClose:l}){const[d]=S.useState(()=>{try{return new Su}catch(A){return console.warn("Failed to initialize SmartUpdateService:",A),null}}),[u,h]=S.useState([]),[p,x]=S.useState({}),[b,y]=S.useState(null),[O,W]=S.useState(!1),[I,k]=S.useState(!1),[L,V]=S.useState({priority:[],optimization:[],maintenance:[]});S.useEffect(()=>{if(d)try{const A=d.generateUpdateSuggestions(i,r);V(A)}catch(A){console.warn("Failed to generate AI suggestions:",A),V({priority:[],optimization:[],maintenance:[]})}},[r,i,d]);const D=(A,X)=>{h(X?[...u,A]:u.filter(se=>se!==A))},N=()=>{u.length===r.length?h([]):h(r.map(A=>A.id))},C=(A,X)=>{x({...p,[A]:X})},ne=()=>{const A=u.map(X=>{const se=r.find(Z=>Z.id===X);if(!se)return null;const P={...se};if(i==="balance"){if(p.cashOperation&&p.cashAmount)switch(p.cashOperation){case"add":P.cash_on_hand=(se.cash_on_hand||0)+p.cashAmount;break;case"subtract":P.cash_on_hand=Math.max(0,(se.cash_on_hand||0)-p.cashAmount);break;case"set":P.cash_on_hand=p.cashAmount;break;case"percentage":P.cash_on_hand=(se.cash_on_hand||0)*(1+p.cashAmount/100);break}if(p.bankOperation&&p.bankAmount)switch(p.bankOperation){case"add":P.bank_account_balance=(se.bank_account_balance||0)+p.bankAmount;break;case"subtract":P.bank_account_balance=Math.max(0,(se.bank_account_balance||0)-p.bankAmount);break;case"set":P.bank_account_balance=p.bankAmount;break;case"percentage":P.bank_account_balance=(se.bank_account_balance||0)*(1+p.bankAmount/100);break}if(p.savingsOperation&&p.savingsAmount)switch(p.savingsOperation){case"add":P.savings=(se.savings||0)+p.savingsAmount;break;case"subtract":P.savings=Math.max(0,(se.savings||0)-p.savingsAmount);break;case"set":P.savings=p.savingsAmount;break;case"percentage":P.savings=(se.savings||0)*(1+p.savingsAmount/100);break}P.total=(P.cash_on_hand||0)+(P.bank_account_balance||0)+(P.savings||0)}return{id:X,data:P,currentData:se}}).filter(Boolean);if(!d){const X={isValid:A.length>0,validUpdates:A,invalidUpdates:[],warnings:[],suggestions:[],aiRecommendations:[]};return y(X),X}try{const X=d.validateBulkUpdate(i,A);return y(X),X}catch(X){console.warn("Bulk validation failed:",X);const se={isValid:A.length>0,validUpdates:A,invalidUpdates:[],warnings:["Smart validation unavailable - using basic validation"],suggestions:[],aiRecommendations:[]};return y(se),se}},ie=()=>{const A=ne();(A.isValid||A.validUpdates.length>0)&&k(!0)},me=async()=>{W(!0);try{const A=ne();if(A.validUpdates.length>0&&(await o(A.validUpdates.map(X=>({id:X.id,data:X.data}))),d))try{d.trackUpdate("bulk_"+i,{count:A.validUpdates.length,updateData:p},{success:!0})}catch(X){console.warn("Failed to track bulk update:",X)}}catch(A){if(console.error("Bulk update failed:",A),d)try{d.trackUpdate("bulk_"+i,p,{success:!1,error:A.message})}catch(X){console.warn("Failed to track bulk update error:",X)}}finally{W(!1)}},re=()=>{switch(i){case"balance":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"💰 Bulk Balance Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"💵 Cash Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("cashOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:A=>C("cashAmount",parseFloat(A.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"🏦 Bank Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("bankOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:A=>C("bankAmount",parseFloat(A.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"🐷 Savings Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("savingsOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:A=>C("savingsAmount",parseFloat(A.target.value)||0)})]})]})]})]});case"budget":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"📊 Bulk Budget Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"💰 Amount Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("amountOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Increase by Amount"}),n.jsx("option",{value:"subtract",children:"Decrease by Amount"}),n.jsx("option",{value:"multiply",children:"Multiply by Factor"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Value",step:"0.01",onChange:A=>C("amountValue",parseFloat(A.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"📅 Date Update"}),n.jsx("input",{type:"date",className:"form-control",onChange:A=>C("newDate",A.target.value)})]})]})]});case"investment":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"📈 Bulk Investment Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"📊 Amount Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:A=>C("amountOperation",A.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add to Position"}),n.jsx("option",{value:"subtract",children:"Reduce Position"}),n.jsx("option",{value:"rebalance",children:"Rebalance Portfolio"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",step:"0.01",onChange:A=>C("amountValue",parseFloat(A.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"💡 Rebalancing Strategy"}),n.jsxs("select",{className:"form-select",onChange:A=>C("rebalanceStrategy",A.target.value),children:[n.jsx("option",{value:"",children:"Manual Updates"}),n.jsx("option",{value:"equal_weight",children:"Equal Weight"}),n.jsx("option",{value:"market_cap",children:"Market Cap Weighted"}),n.jsx("option",{value:"risk_parity",children:"Risk Parity"})]})]})]})]});default:return n.jsx("div",{children:"Update form not available for this type"})}},fe=()=>!L||L.priority.length===0&&L.optimization.length===0?null:n.jsxs("div",{className:"ai-suggestions-panel mb-4",children:[n.jsx("h6",{children:"🤖 AI Recommendations"}),L.priority.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{className:"text-danger",children:"🔥 Priority Actions"}),L.priority.map((A,X)=>n.jsxs("div",{className:"alert alert-warning",children:[n.jsx("strong",{children:A.message}),n.jsx("br",{}),n.jsx("small",{children:A.action})]},X))]}),L.optimization.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{className:"text-info",children:"⚡ Optimization Opportunities"}),L.optimization.map((A,X)=>n.jsxs("div",{className:"alert alert-info",children:[n.jsx("strong",{children:A.message}),n.jsx("br",{}),n.jsx("small",{children:A.action})]},X))]})]}),xe=()=>b?n.jsxs("div",{className:"validation-results mb-4",children:[n.jsx("h6",{children:"✅ Validation Results"}),b.validUpdates.length>0&&n.jsx("div",{className:"alert alert-success",children:n.jsxs("strong",{children:["✅ ",b.validUpdates.length," items ready for update"]})}),b.invalidUpdates.length>0&&n.jsxs("div",{className:"alert alert-danger",children:[n.jsxs("strong",{children:["❌ ",b.invalidUpdates.length," items have validation errors"]}),n.jsx("ul",{className:"mt-2 mb-0",children:b.invalidUpdates.slice(0,3).map((A,X)=>n.jsxs("li",{children:["Item ",A.index+1,": ",A.validation.errors.join(", ")]},X))})]}),b.warnings.length>0&&n.jsxs("div",{className:"alert alert-warning",children:[n.jsx("strong",{children:"⚠️ Warnings:"}),n.jsx("ul",{className:"mt-2 mb-0",children:b.warnings.slice(0,3).map((A,X)=>n.jsx("li",{children:A},X))})]}),b.aiRecommendations.length>0&&n.jsxs("div",{className:"alert alert-info",children:[n.jsx("strong",{children:"🤖 AI Recommendations:"}),n.jsx("ul",{className:"mt-2 mb-0",children:b.aiRecommendations.slice(0,3).map((A,X)=>n.jsx("li",{children:A.message},X))})]})]}):null;return n.jsxs("div",{className:"bulk-update-panel",children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"bulk-update-content",style:{width:"800px"},children:[n.jsx("div",{className:"bulk-update-header",children:n.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[n.jsxs("h4",{children:["🔄 Bulk Update - ",i.charAt(0).toUpperCase()+i.slice(1)]}),n.jsx("button",{className:"btn btn-link text-white p-0",onClick:l,style:{fontSize:"1.5rem",textDecoration:"none"},children:"✕"})]})}),n.jsxs("div",{className:"bulk-update-body",children:[fe(),n.jsxs("div",{className:"mb-4",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[n.jsxs("h6",{children:["📋 Select Items to Update (",u.length,"/",r.length,")"]}),n.jsx("button",{className:"btn btn-sm btn-outline-primary",onClick:N,children:u.length===r.length?"Deselect All":"Select All"})]}),n.jsx("div",{className:"item-selection-list",children:r.map(A=>n.jsxs("div",{className:`item-selection-item ${u.includes(A.id)?"selected":""}`,onClick:()=>D(A.id,!u.includes(A.id)),children:[n.jsx("input",{type:"checkbox",checked:u.includes(A.id),onChange:()=>{},className:"form-check-input me-2"}),n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("strong",{children:[i==="balance"&&`Account #${r.indexOf(A)+1}`,i==="budget"&&A.item_name,i==="investment"&&A.name]}),n.jsx("br",{}),n.jsxs("small",{className:"text-muted",children:[i==="balance"&&`Total: $${(A.cash_on_hand+A.bank_account_balance+A.savings).toFixed(2)}`,i==="budget"&&`Amount: $${A.amount.toFixed(2)}`,i==="investment"&&`Value: $${A.total_price.toFixed(2)}`]})]})]},A.id))})]}),u.length>0&&re(),xe(),n.jsxs("div",{className:"bulk-actions",children:[n.jsx("div",{children:n.jsxs("small",{className:"text-muted",children:[u.length," items selected for bulk update"]})}),n.jsxs("div",{className:"d-flex gap-2",children:[n.jsx("button",{className:"btn-bulk btn-secondary-bulk",onClick:l,children:"❌ Cancel"}),n.jsx("button",{className:"btn-bulk btn-primary-bulk",onClick:ie,disabled:u.length===0,children:"👁️ Preview Changes"}),n.jsx("button",{className:"btn-bulk btn-success-bulk",onClick:me,disabled:u.length===0||O,children:O?"⏳ Processing...":"✅ Apply Updates"})]})]})]})]})]})}function _v({darkMode:a,cashOnHand:i,setCashOnHand:r,bankAccountBalance:o,setBankAccountBalance:l,savings:d,setSavings:u,setTotal:h,formatCurrency:p,balanceId:x,setBalanceId:b,balances:y,setBalances:O,editIndex:W,setEditIndex:I,editBalance:k,setEditBalance:L,balanceError:V,setBalanceError:D}){const[N,C]=S.useState(!1),[ne,ie]=S.useState(""),[me,re]=S.useState(null),[fe,xe]=S.useState({}),[A,X]=S.useState(null),[se,P]=S.useState(!1),[Z,oe]=S.useState(0),[Pe,$e]=S.useState(0);S.useState(!1);const[be,U]=S.useState(null),[ye,de]=S.useState(!1),[H,Q]=S.useState(null),[le,ue]=S.useState([]),[Ne,Ve]=S.useState(0),[ae,q]=S.useState(0),[ve,Ee]=S.useState(0),[yt,We]=S.useState(0),Xe=new jv,[qe,qt]=S.useState(null),[Fe,jt]=S.useState(!1);S.useEffect(()=>{let K=null;try{K=new Su,qt(K),console.log("SmartUpdateService initialized successfully")}catch(te){console.warn("SmartUpdateService failed to initialize:",te),qt(null)}finally{jt(!0)}},[]),S.useEffect(()=>{var K;Ve(0),q(0),Ee(0),We(0),xe({}),Q(null),U(null),window.innerWidth<=768&&(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,(K=document.activeElement)==null||K.blur()),console.log("Balance component mounted - fields reset")},[]),S.useEffect(()=>{We(Ne+ae+ve)},[Ne,ae,ve]);const Ye=K=>{ie(K),D("")},ot=K=>{D(K),ie("")},et=()=>{const K=Xe.validateBalanceInputs(Ne,ae,ve);return xe(K),Object.keys(K).filter(te=>te!=="warning").length===0};S.useEffect(()=>{if(y.length>0&&qe&&Fe)try{const K=qe.generateUpdateSuggestions("balance",y);ue(K)}catch(K){console.warn("Failed to generate update suggestions:",K),ue([])}},[y,qe,Fe]),S.useEffect(()=>{if(y.length>0){const K=Xe.calculateFinancialMetrics(y,Z,Pe);X(K)}},[y,Z,Pe]),S.useEffect(()=>{const K=i+o+d;if(K>0){const te=Xe.suggestOptimalAllocation(K);U(te)}else U(null)},[i,o,d]),S.useEffect(()=>{console.log("BALANCE COMPONENT");const K=()=>{console.log("Fetching balances..."),C(!0),Je.get(gd.balance).then(te=>{if(console.log("Response received:",te.data),Array.isArray(te.data)){const he=te.data.map(Re=>({...Re,total:Re.cash_on_hand+Re.bank_account_balance+Re.savings,id:Re.id}));if(console.log("Fetched balances:",he),O(he),he.length>0){const Re=he.reduce((Be,Ge)=>Be+Ge.cash_on_hand,0),He=he.reduce((Be,Ge)=>Be+Ge.bank_account_balance,0),ct=he.reduce((Be,Ge)=>Be+Ge.savings,0);r(Re),l(He),u(ct)}}else if(te.data&&typeof te.data=="object"){const he={...te.data,total:te.data.cash_on_hand+te.data.bank_account_balance+te.data.savings};console.log("Fetched single balance:",he),O([he]),r(he.cash_on_hand),l(he.bank_account_balance),u(he.savings)}else console.error("Fetched data is not an array or object:",te.data),r(0),l(0),u(0);D(null)}).catch(te=>{console.error("There was an error fetching the balances!",te),ot("Failed to load balance data. Please try again."),r(0),l(0),u(0)}).finally(()=>{C(!1)})};window.innerWidth<=768?setTimeout(K,100):K()},[O,r,l,u,D]),S.useEffect(()=>{if(ne){const K=setTimeout(()=>ie(""),3e3);return()=>clearTimeout(K)}},[ne]),S.useEffect(()=>{if(V){const K=setTimeout(()=>D(""),5e3);return()=>clearTimeout(K)}},[V]),S.useEffect(()=>{h(i+o+d)},[i,o,d,h]);const tt=K=>{const{name:te,value:he}=K.target,Re=Number(he);if(Re<0){ot("Values cannot be negative");return}if(L({...k,[te]:Re}),qe)try{const He=qe.validateUpdate("balance",{...k,[te]:Re},k);Q(He)}catch(He){console.warn("Smart validation failed:",He),Q(null)}},je=async K=>{if(qe)try{const he=qe.validateUpdate("balance",k,y[K]);if(!he.isValid){ot(`Validation failed: ${he.errors.join(", ")}`);return}if(he.warnings.length>0&&!window.confirm(`Warning: ${he.warnings.join(" ")} Do you want to continue?`))return}catch(he){console.warn("Smart validation failed:",he)}if(k.cash_on_hand<0||k.bank_account_balance<0||k.savings<0){ot("All values must be non-negative");return}const te={...k,total:k.cash_on_hand+k.bank_account_balance+k.savings};try{C(!0),await Je.put(Fn(`/balance/${te.id}`),te);const he=y.map((Be,Ge)=>Ge===K?te:Be);O(he),I(null);const Re=he.reduce((Be,Ge)=>Be+Ge.cash_on_hand,0),He=he.reduce((Be,Ge)=>Be+Ge.bank_account_balance,0),ct=he.reduce((Be,Ge)=>Be+Ge.savings,0);if(r(Re),l(He),u(ct),qe)try{qe.trackUpdate("balance",te,{success:!0})}catch(Be){console.warn("Failed to track update:",Be)}Ye(`Successfully updated account #${K+1}!`),console.log("Balance updated:",te)}catch(he){if(console.error("There was an error updating the balance!",he),qe)try{qe.trackUpdate("balance",te,{success:!1,error:he.message})}catch(Re){console.warn("Failed to track update error:",Re)}ot("Failed to update balance. Please try again.")}finally{C(!1)}},rt=async K=>{if(me===K){const te=y[K];if(!te||!te.id){console.error("Balance or balance.id is undefined"),ot("Unable to delete: Invalid balance data");return}try{C(!0),await Je.delete(Fn(`/balance/${te.id}`));const he=y.filter((Re,He)=>He!==K);if(O(he),he.length>0){const Re=he.reduce((Be,Ge)=>Be+Ge.cash_on_hand,0),He=he.reduce((Be,Ge)=>Be+Ge.bank_account_balance,0),ct=he.reduce((Be,Ge)=>Be+Ge.savings,0);r(Re),l(He),u(ct)}else r(0),l(0),u(0);Ye(`Successfully deleted account #${K+1}!`),re(null)}catch(he){console.error("Error deleting balance:",he),ot("Failed to delete balance. Please try again.")}finally{C(!1)}}else re(K),setTimeout(()=>re(null),3e3)},ht=async K=>{try{C(!0);const te=K.map(Re=>Je.put(Fn(`/balance/${Re.id}`),Re.data));await Promise.all(te);const he=y.map(Re=>{const He=K.find(ct=>ct.id===Re.id);return He?{...Re,...He.data}:Re});if(O(he),de(!1),qe)try{qe.trackUpdate("bulk_balance",{count:K.length},{success:!0})}catch(Re){console.warn("Failed to track bulk update:",Re)}Ye(`Successfully updated ${K.length} accounts!`)}catch(te){if(console.error("Bulk update failed:",te),qe)try{qe.trackUpdate("bulk_balance",{count:K.length},{success:!1,error:te.message})}catch(he){console.warn("Failed to track bulk update error:",he)}ot("Bulk update failed. Please try again.")}finally{C(!1)}},lt=()=>{Ve(0),q(0),Ee(0),We(0),xe({}),Q(null),U(null),Ye("Fields have been reset!")},gt=async()=>{if(!et())return;const K=Ne+ae+ve;We(K);const te={cash_on_hand:Ne,bank_account_balance:ae,savings:ve,total:K,created_at:new Date().toISOString()};try{C(!0);const he=await Je.post(gd.balance,te);console.log("Balance saved:",he.data);const Re=[...y,{...he.data,total:K}];O(Re);const He=Re.reduce((Ge,Yt)=>Ge+Yt.cash_on_hand,0),ct=Re.reduce((Ge,Yt)=>Ge+Yt.bank_account_balance,0),Be=Re.reduce((Ge,Yt)=>Ge+Yt.savings,0);r(He),l(ct),u(Be),Ve(0),q(0),Ee(0),We(0),xe({}),Q(null),U(null),Ye(`Successfully added new balance account! Total: ${p(K)}`)}catch(he){console.error("There was an error saving your balance!",he),ot("Failed to save balance. Please try again.")}finally{C(!1)}},Tt=()=>{be&&(Ve(Math.round(be.cash)),q(Math.round(be.bank)),Ee(Math.round(be.savings)),Ye("Applied optimal allocation suggestion!"))},vt=K=>{switch(K){case"emergency":Ve(500),q(1500),Ee(3e3),Ye("Applied emergency fund preset!");break;case"student":Ve(200),q(800),Ee(500),Ye("Applied student budget preset!");break;case"family":Ve(1e3),q(5e3),Ee(1e4),Ye("Applied family budget preset!");break}},en=()=>{const K=y.filter(te=>te.cash_on_hand+te.bank_account_balance+te.savings<100);if(K.length>1){const te=K.reduce((He,ct)=>He+ct.cash_on_hand,0),he=K.reduce((He,ct)=>He+ct.bank_account_balance,0),Re=K.reduce((He,ct)=>He+ct.savings,0);r(te),l(he),u(Re),Ye(`Consolidated ${K.length} accounts. Review and save the combined account.`)}};return n.jsxs("div",{className:"balance-container",children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"balance-header",children:[n.jsx("h5",{children:"💰 Balance Management"}),n.jsx("p",{className:"balance-subtitle",children:"Track your financial accounts in one place"})]}),le&&le.priority&&le.optimization&&(le.priority.length>0||le.optimization.length>0)&&n.jsxs("div",{className:"insights-section",children:[n.jsx("h5",{className:"balance-title",children:"🤖 Smart Update Recommendations"}),le.priority.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{style:{color:"#f56565",fontWeight:"700"},children:"🔥 High Priority"}),le.priority.map((K,te)=>n.jsxs("div",{className:"insight-card critical",children:[n.jsx("strong",{children:K.message}),n.jsx("br",{}),n.jsx("small",{children:K.action})]},te))]}),le.optimization.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{style:{color:"#4299e1",fontWeight:"700"},children:"⚡ Optimization Opportunities"}),le.optimization.map((K,te)=>n.jsxs("div",{className:"insight-card opportunity",children:[n.jsx("strong",{children:K.message}),n.jsx("br",{}),n.jsx("small",{children:K.action})]},te))]})]}),ye&&n.jsx(Sv,{darkMode:a,updateType:"balance",items:y,onBulkUpdate:ht,onClose:()=>de(!1)}),ne&&n.jsxs("div",{className:"alert-success-balance",children:[n.jsx("strong",{children:"✅ Success!"})," ",ne]}),V&&n.jsxs("div",{className:"alert-error-balance",children:[n.jsx("strong",{children:"❌ Error!"})," ",V]}),n.jsxs("div",{className:"balance-section",children:[n.jsx("h5",{className:"balance-title",children:"� Add New Balance Account"}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"cashOnHand",className:"input-label",children:"💵 Cash On Hand"}),n.jsx("input",{type:"number",id:"cashOnHand",name:"cashOnHand",value:Ne||"",onChange:K=>{const te=K.target.value===""?0:Number(K.target.value);Ve(te>=0?te:0),xe({...fe,cashOnHand:""})},placeholder:"Enter cash amount",className:`balance-input ${fe.cashOnHand?"error":""}`,disabled:N}),fe.cashOnHand&&n.jsx("div",{className:"validation-error",children:fe.cashOnHand})]}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"bankAccountBalance",className:"input-label",children:"🏦 Bank Account Balance"}),n.jsx("input",{type:"number",id:"bankAccountBalance",name:"bankAccountBalance",value:ae||"",onChange:K=>{const te=K.target.value===""?0:Number(K.target.value);q(te>=0?te:0),xe({...fe,bankAccountBalance:""})},placeholder:"Enter bank account balance",className:`balance-input ${fe.bankAccountBalance?"error":""}`,disabled:N}),fe.bankAccountBalance&&n.jsx("div",{className:"validation-error",children:fe.bankAccountBalance})]}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"savings",className:"input-label",children:"🐷 Savings"}),n.jsx("input",{type:"number",id:"savings",name:"savings",value:ve||"",onChange:K=>{const te=K.target.value===""?0:Number(K.target.value);Ee(te>=0?te:0),xe({...fe,savings:""})},placeholder:"Enter savings amount",className:`balance-input ${fe.savings?"error":""}`,disabled:N}),fe.savings&&n.jsx("div",{className:"validation-error",children:fe.savings})]}),fe.general&&n.jsx("div",{className:"validation-error",style:{textAlign:"center",fontSize:"16px"},children:fe.general}),n.jsxs("div",{style:{textAlign:"center",marginTop:"25px",display:"flex",justifyContent:"center",gap:"15px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{className:`btn-balance btn-set-balance ${N?"btn-disabled":""}`,onClick:gt,disabled:N,children:[N?n.jsx("span",{className:"loading-spinner-balance"}):"","🎯 Set Balance"]}),n.jsx("button",{className:`btn-balance btn-reset-balance ${N?"btn-disabled":""}`,onClick:lt,disabled:N,children:"🔄 Reset Fields"}),y.length>1&&n.jsx("button",{className:"btn-balance btn-set-balance",onClick:()=>de(!0),disabled:N,title:"Update multiple accounts at once",children:"⚡ Bulk Update"})]})]}),A&&n.jsxs("div",{className:"financial-metrics-section",children:[n.jsx("h5",{className:"balance-title",children:"📈 Financial Health Dashboard"}),n.jsxs("div",{className:"monthly-inputs",children:[n.jsxs("div",{children:[n.jsx("label",{className:"input-label",children:"📊 Monthly Income"}),n.jsx("input",{type:"number",value:Z,onChange:K=>oe(Number(K.target.value)),placeholder:"Enter monthly income",className:"balance-input"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"input-label",children:"💸 Monthly Expenses"}),n.jsx("input",{type:"number",value:Pe,onChange:K=>$e(Number(K.target.value)),placeholder:"Enter monthly expenses",className:"balance-input"})]})]}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-card",children:[n.jsx("div",{className:"metric-value",style:{color:"#38a169"},children:p(A.totalAssets)}),n.jsx("div",{className:"metric-label",children:"Total Assets"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:`metric-value health-score ${A.financialHealthScore>=80?"":A.financialHealthScore>=60?"warning":"critical"}`,children:[A.financialHealthScore,"/100"]}),n.jsx("div",{className:"metric-label",children:"Health Score"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-value",style:{color:"#4299e1"},children:[A.liquidityRatio.toFixed(1),"%"]}),n.jsx("div",{className:"metric-label",children:"Liquidity Ratio"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsx("div",{className:"metric-value",style:{color:"#8b5cf6"},children:A.emergencyFundStatus.months.toFixed(1)}),n.jsx("div",{className:"metric-label",children:"Emergency Fund (Months)"})]})]}),n.jsx("div",{style:{textAlign:"center"},children:n.jsxs("button",{className:"btn-balance btn-set-balance",onClick:()=>P(!se),children:[se?"🔼 Hide":"🔽 Show"," Financial Insights"]})})]}),se&&A&&n.jsxs("div",{className:"insights-section",children:[n.jsx("h5",{className:"balance-title",children:"💡 Financial Insights & Recommendations"}),Xe.generateFinancialInsights(A,y).map((K,te)=>n.jsxs("div",{className:`insight-card ${K.type}`,children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"10px"},children:K.title}),n.jsx("p",{style:{margin:0},children:K.message})]},te)),Xe.generateFinancialInsights(A,y).length===0&&n.jsxs("div",{className:"insight-card success",children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"10px"},children:"🎉 Great Financial Health!"}),n.jsx("p",{style:{margin:0},children:"Your financial metrics look healthy. Keep up the good work!"})]})]}),(i>0||o>0||d>0)&&n.jsxs("div",{className:"allocation-section",children:[n.jsx("h5",{className:"balance-title",children:"🎯 Smart Allocation Assistant"}),n.jsxs("div",{className:"preset-buttons",children:[n.jsx("button",{className:"btn-preset",onClick:()=>vt("emergency"),children:"🚨 Emergency Fund Preset"}),n.jsx("button",{className:"btn-preset",onClick:()=>vt("student"),children:"🎓 Student Budget Preset"}),n.jsx("button",{className:"btn-preset",onClick:()=>vt("family"),children:"👨‍👩‍👧‍👦 Family Budget Preset"})]}),be&&n.jsxs("div",{className:"allocation-suggestion",children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"15px"},children:"💡 Optimal Allocation Suggestion"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"15px",marginBottom:"15px"},children:[n.jsx("div",{children:n.jsxs("strong",{children:["💵 Cash: ",p(be.cash)]})}),n.jsx("div",{children:n.jsxs("strong",{children:["🏦 Bank: ",p(be.bank)]})}),n.jsx("div",{children:n.jsxs("strong",{children:["🐷 Savings: ",p(be.savings)]})})]}),n.jsxs("div",{style:{marginBottom:"15px"},children:[n.jsx("strong",{children:"Reasoning:"}),n.jsx("ul",{style:{margin:"5px 0",paddingLeft:"20px"},children:be.reasoning.map((K,te)=>n.jsx("li",{children:K},te))})]}),n.jsx("button",{className:"btn-balance btn-set-balance",onClick:Tt,children:"✨ Apply Suggestion"})]}),y.length>1&&n.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:n.jsx("button",{className:"btn-balance btn-reset-balance",onClick:en,children:"🔄 Consolidate Low Balance Accounts"})})]}),n.jsxs("div",{className:"overview-section",children:[n.jsx("h5",{className:"overview-title",children:"📊 Account Overview"}),N&&y.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading your account data..."})]}):n.jsx("div",{className:"balance-table",children:n.jsxs("table",{className:"table table-striped table-hover table-bordered",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"🔢 ACC#"}),n.jsx("th",{children:"💵 Cash on Hand"}),n.jsx("th",{children:"🏦 Bank Balance"}),n.jsx("th",{children:"🐷 Savings"}),n.jsx("th",{children:"💰 Total"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsx("tbody",{children:y.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"6",className:"no-balances",children:n.jsxs("div",{children:[n.jsx("h4",{children:"🎯 Start Your Financial Journey!"}),n.jsx("p",{children:"Create your first balance account above to begin tracking your finances"}),n.jsx("small",{children:"💡 Pro tip: Separate your money into different categories for better organization"})]})})}):y.map((K,te)=>n.jsx("tr",{children:W===te?n.jsxs(n.Fragment,{children:[n.jsx("td",{className:"d-none d-md-table-cell","data-label":"ACC#",children:n.jsx("span",{className:"account-number",children:te+1})}),n.jsxs("td",{"data-label":"Cash on Hand",children:[n.jsx("input",{type:"number",name:"cash_on_hand",value:k.cash_on_hand,onChange:tt,className:"edit-input-table",min:"0"}),H&&H.warnings&&H.warnings.length>0&&n.jsxs("div",{style:{fontSize:"0.8rem",color:"#f59e0b",marginTop:"2px"},children:["⚠️ ",H.warnings[0]]})]}),n.jsxs("td",{"data-label":"Bank Acc Balance",children:[n.jsx("input",{type:"number",name:"bank_account_balance",value:k.bank_account_balance,onChange:tt,className:"edit-input-table",min:"0"}),H&&H.suggestions&&H.suggestions.length>0&&n.jsxs("div",{style:{fontSize:"0.8rem",color:"#4299e1",marginTop:"2px"},children:["💡 ",H.suggestions[0]]})]}),n.jsx("td",{"data-label":"Savings",children:n.jsx("input",{type:"number",name:"savings",value:k.savings,onChange:tt,className:"edit-input-table",min:"0"})}),n.jsx("td",{className:"d-none d-md-table-cell",children:n.jsx("span",{className:"total-amount",children:p(k.cash_on_hand+k.bank_account_balance+k.savings)})}),n.jsx("td",{"data-label":"Actions",children:n.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{onClick:()=>je(te),className:`btn-table btn-save ${N?"btn-disabled":""}`,disabled:N,children:[N?n.jsx("span",{className:"loading-spinner-balance"}):"","💾 Save"]}),n.jsx("button",{onClick:()=>{I(null),Ye("Edit cancelled")},className:"btn-table btn-cancel",children:"❌ Cancel"})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("td",{className:"d-none d-md-table-cell","data-label":"ACC#",children:n.jsx("span",{className:"account-number",children:te+1})}),n.jsx("td",{"data-label":"Cash on Hand",children:n.jsx("span",{className:"currency-amount",children:p(K.cash_on_hand)})}),n.jsx("td",{"data-label":"Bank Acc Balance",children:n.jsx("span",{className:"currency-amount",children:p(K.bank_account_balance)})}),n.jsx("td",{"data-label":"Savings",children:n.jsx("span",{className:"currency-amount",children:p(K.savings)})}),n.jsx("td",{className:"d-none d-md-table-cell",children:n.jsx("span",{className:"total-amount",children:p(K.total!==void 0?K.total:0)})}),n.jsx("td",{"data-label":"Actions",children:n.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsx("button",{onClick:()=>{I(te),L(K)},className:"btn-table btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>rt(te),className:`btn-table ${me===te?"confirm-delete":"btn-delete"}`,children:me===te?"⚠️ Confirm?":"🗑️ Delete"})]})})]})},te))})]})})]})]})}function Nv({darkMode:a,budget:i,setBudget:r,validated:o,setValidated:l,formatCurrency:d,items:u,setItems:h,name:p,setName:x,amount:b,setAmount:y,newBudget:O,setNewBudget:W,error:I,setError:k,editingIndex:L,setEditingIndex:V,editAmount:D,setEditAmount:N,date:C,setDate:ne,totalBudgetAmount:ie,parseDate:me}){const re=ae=>{if(!ae)return"";const q=new Date(ae),ve=String(q.getMonth()+1).padStart(2,"0"),Ee=String(q.getDate()).padStart(2,"0"),yt=q.getFullYear();return`${ve}-${Ee}-${yt}`},[fe,xe]=S.useState(new Date),[A,X]=S.useState("");S.useState("");const[se,P]=S.useState(!1),[Z,oe]=S.useState(""),[Pe,$e]=S.useState(null);S.useEffect(()=>{ye()},[]),S.useEffect(()=>{if(Z){const ae=setTimeout(()=>oe(""),3e3);return()=>clearTimeout(ae)}},[Z]),S.useEffect(()=>{if(I){const ae=setTimeout(()=>k(""),5e3);return()=>clearTimeout(ae)}},[I]);const be=ae=>{oe(ae),k("")},U=ae=>{k(ae),oe("")},ye=async()=>{try{P(!0),console.log("BUDGET COMPONENT"),console.log("Fetching budgets...");const q=(await bt.get("/budgets")).data.map(ve=>({...ve,date:re(me(ve.date))}));console.log("Adjusted budgets:",q),h(q)}catch(ae){console.error("Error fetching budgets:",ae),U("Failed to load budgets. Please try again.")}finally{P(!1)}},de=async()=>{if(!p||!b||!C){U("Please fill in all fields: name, amount, and date");return}if(isNaN(b)||parseFloat(b)<=0){U("Please enter a valid positive amount");return}const ae={item_name:p.trim(),amount:parseFloat(b),date:C};try{P(!0);const q=await bt.post("/budgets",ae);h([...u,q.data]),x(""),y(""),ne(""),be(`Successfully added "${p}" to budget!`)}catch(q){console.error("Error adding budget:",q),U("Failed to add budget item. Please try again.")}finally{P(!1)}},H=ae=>{V(ae),N(u[ae].amount),xe(u[ae].date)},Q=async ae=>{if(!D||isNaN(D)||parseFloat(D)<=0){U("Please enter a valid positive amount");return}if(!fe){U("Please select a valid date");return}const q={item_name:u[ae].item_name,amount:parseFloat(D),date:new Date(fe).toISOString().split("T")[0]};try{P(!0),await bt.put(`/budgets/${u[ae].id}`,q);const ve=u.map((Ee,yt)=>yt===ae?{...Ee,...q,date:re(q.date)}:Ee);h(ve),be(`Successfully updated "${u[ae].item_name}"!`),V(null)}catch(ve){console.error("Error saving budget:",ve),U("Failed to save budget changes. Please try again.")}finally{P(!1)}},le=()=>{V(null),N(""),xe(re(new Date)),be("Edit cancelled")},ue=async()=>{if(!O||!A){U("Please enter both budget amount and date"),l(!1);return}if(isNaN(O)||parseFloat(O)<=0){U("Please enter a valid positive budget amount"),l(!1);return}const ae={item_name:"Set Budget",amount:parseFloat(O),date:A};try{P(!0);const q=await bt.post("/budgets",ae);console.log("Response data:",q.data),h([...u,q.data]),r(O),X(A),l(!0),be(`Main budget of ${d(O)} has been set!`)}catch(q){console.error("Error adding budget:",q),U("Failed to set main budget. Please try again."),l(!1)}finally{P(!1)}},Ne=async()=>{const ae=u.find(q=>q.item_name==="Set Budget");if(ae){const q={...ae,amount:"",date:""};console.log("Updated Item:",q);try{P(!0);const ve=await bt.put(`/budgets/${ae.id}`,q);console.log("Response from server:",ve.data),h(u.map(Ee=>Ee.item_name==="Set Budget"?q:Ee)),W(""),X(""),r(0),l(!1),be("Main budget has been reset!"),console.log("Items after reset:",u)}catch(ve){console.log("Error resetting budget:",ve),U("Failed to reset budget. Please try again.")}finally{P(!1)}}else U("No main budget found to reset"),console.log("Set Budget item not found")},Ve=async ae=>{if(Pe===ae)try{P(!0),await bt.delete(`/budgets/${u[ae].id}`);const q=u.filter((ve,Ee)=>Ee!==ae);h(q),be(`Successfully deleted "${u[ae].item_name}"!`),$e(null)}catch(q){console.log("Error deleting budget:",q),U("Failed to delete budget item. Please try again.")}finally{P(!1)}else $e(ae),setTimeout(()=>$e(null),3e3)};return n.jsxs("div",{className:"budget-container",children:[n.jsx("style",{children:`
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
            `}),n.jsxs("div",{className:"budget-header",children:[n.jsx("h5",{children:"💰 Budget Management"}),n.jsx("p",{className:"budget-subtitle",children:"Plan and track your financial allocations"})]}),Z&&n.jsxs("div",{className:"alert-success",children:[n.jsx("strong",{children:"✅ Success!"})," ",Z]}),I&&n.jsxs("div",{className:"alert-danger",children:[n.jsx("strong",{children:"❌ Error!"})," ",I]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"🎯 Set Main Budget"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"Set budget",value:isNaN(O)?"":O,onChange:ae=>{const q=ae.target.value;W(q===""?"":parseFloat(q))},className:`enhanced-input ${o?"is-valid":"is-invalid"}`,placeholder:"💵 Enter Budget Amount",disabled:se}),n.jsx("input",{type:"date",value:A,onChange:ae=>X(ae.target.value),className:"enhanced-input",id:"budget-date",name:"budget-date",disabled:se}),n.jsxs("button",{className:`btn-enhanced btn-primary-enhanced ${se?"btn-disabled":""}`,onClick:ue,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","🎯 Set Budget"]}),n.jsxs("button",{className:`btn-enhanced btn-warning-enhanced ${se?"btn-disabled":""}`,onClick:Ne,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","🔄 Reset"]})]})]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"📝 Add New Budget Item"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",placeholder:"📝 Item Name (e.g., Groceries, Entertainment)",value:p,onChange:ae=>x(ae.target.value),className:"enhanced-input",id:"item-name",name:"item-name",disabled:se}),n.jsx("input",{type:"number",placeholder:"💵 Amount",value:isNaN(b)?"":b,onChange:ae=>{const q=ae.target.value;y(q===""?"":parseFloat(q))},className:"enhanced-input",id:"item-amount",name:"item-amount",disabled:se}),n.jsx("input",{type:"date",value:C,onChange:ae=>ne(ae.target.value),className:"enhanced-input",id:"item-date",name:"item-date",disabled:se}),n.jsxs("button",{className:`btn-enhanced btn-success-enhanced ${se?"btn-disabled":""}`,onClick:de,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","✨ Add Item"]})]})]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"📊 Budget Overview"}),se&&u.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading your budget data..."})]}):n.jsx("div",{className:"table-enhanced",children:n.jsxs("table",{className:"table table-striped table-hover table-bordered responsive-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"📝 Item Name"}),n.jsx("th",{children:"💰 Amount"}),n.jsx("th",{children:"📅 Date"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsxs("tbody",{children:[u.length>0?u.map((ae,q)=>n.jsxs("tr",{children:[n.jsx("td",{"data-label":"Item Name",children:ae.item_name==="Set Budget"?n.jsxs("span",{className:"main-budget-badge",children:["🎯 ",ae.item_name]}):n.jsxs("span",{className:"item-name-badge",children:["📌 ",ae.item_name]})}),n.jsx("td",{"data-label":"Amount",children:L===q?n.jsx("input",{type:"number",value:D,onChange:ve=>N(ve.target.value),className:"enhanced-input",style:{width:"150px",padding:"8px 12px"}}):n.jsx("span",{className:"amount-display",children:d(ae.amount)})}),n.jsx("td",{"data-label":"Date",children:L===q?n.jsx("input",{type:"date",value:fe,onChange:ve=>xe(ve.target.value),className:"enhanced-input",style:{width:"170px",padding:"8px 12px"}}):n.jsxs("span",{className:"date-display",children:["📅 ",ae.date||"No date set"]})}),n.jsx("td",{"data-label":"Actions",children:L===q?n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{className:`btn-table btn-save-table ${se?"btn-disabled":""}`,onClick:()=>Q(q),disabled:se,children:[se?n.jsx("span",{className:"loading-spinner",style:{width:"12px",height:"12px"}}):"","💾 Save"]}),n.jsx("button",{className:"btn-table btn-cancel-table",onClick:le,children:"❌ Cancel"})]}):n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsx("button",{className:"btn-table btn-edit-table",onClick:()=>H(q),children:"✏️ Edit"}),n.jsx("button",{className:`btn-table ${Pe===q?"confirm-delete":"btn-delete-table"}`,onClick:()=>Ve(q),children:Pe===q?"⚠️ Confirm?":"🗑️ Delete"})]})})]},q)):n.jsx("tr",{children:n.jsx("td",{colSpan:"4",className:"no-items",children:n.jsxs("div",{children:[n.jsx("h4",{children:"🎯 Start Your Budget Journey!"}),n.jsx("p",{children:"Set your main budget above, then add specific budget categories!"}),n.jsx("small",{children:"💡 Pro tip: Create categories like groceries, entertainment, utilities, savings"})]})})}),u.length>0&&n.jsxs("tr",{className:"total-row",children:[n.jsx("td",{children:n.jsx("strong",{children:"🏆 TOTAL BUDGET"})}),n.jsx("td",{children:n.jsx("strong",{children:d(ie)})}),n.jsx("td",{colSpan:"2",children:n.jsx("small",{children:"💡 This represents your complete budget allocation"})})]})]})]})})]})]})}class Cv{constructor(){this.insights=[],this.alerts=[],this.recommendations=[],this.userPreferences=this.loadUserPreferences(),this.spendingPatterns=this.loadSpendingPatterns()}loadUserPreferences(){try{return JSON.parse(localStorage.getItem("dashboardAI_preferences"))||{riskTolerance:"medium",savingsGoal:20,notificationLevel:"normal",preferredCategories:[]}}catch{return{riskTolerance:"medium",savingsGoal:20,notificationLevel:"normal",preferredCategories:[]}}}loadSpendingPatterns(){try{return JSON.parse(localStorage.getItem("dashboardAI_patterns"))||{}}catch{return{}}}saveUserPreferences(){localStorage.setItem("dashboardAI_preferences",JSON.stringify(this.userPreferences))}saveSpendingPatterns(){localStorage.setItem("dashboardAI_patterns",JSON.stringify(this.spendingPatterns))}generateFinancialInsights(i,r,o,l,d){const u=[];new Date().getMonth(),new Date().getFullYear();const h=this.calculateMonthlySpending(i),p=h.reduce((y,O)=>y+O.amount,0)/h.length;p>o*.8&&u.push({type:"warning",title:"⚠️ High Spending Alert",message:`You're spending ${(p/o*100).toFixed(0)}% of your budget monthly. Consider reviewing your expenses.`,confidence:85,actionable:!0,action:"View Category Details",priority:"high"});const b=this.analyzeCategorySpending(i)[0];if(b&&b.percentage>40&&u.push({type:"info",title:"📊 Spending Pattern Insight",message:`${b.percentage.toFixed(0)}% of your spending is on ${b.category}. Consider reviewing this category's transactions.`,confidence:92,actionable:!0,action:"View Category Details",priority:"medium"}),d.length>0){const y=d.reduce((W,I)=>W+I.total_price,0),O=y/(r+y)*100;O<20&&u.push({type:"opportunity",title:"🚀 Investment Opportunity",message:`Only ${O.toFixed(0)}% of your portfolio is invested. Consider increasing investments for better returns.`,confidence:78,actionable:!0,action:"Explore Investments",priority:"low"})}if(l.length>0){const y=l.filter(O=>O.saved/O.target<.3);y.length>0&&u.push({type:"motivation",title:"🎯 Goal Achievement Tip",message:`You have ${y.length} goals with low progress. Consider reviewing your goals and adjusting target amounts.`,confidence:88,actionable:!0,action:"Review Goal Strategy",priority:"medium"})}return this.insights=u,u}generatePredictions(i,r,o){const l={},u=i.filter(h=>{const p=new Date(h.date),x=new Date;return x.setMonth(x.getMonth()-3),p>=x}).reduce((h,p)=>h+p.amount,0)/12;return l.nextMonthSpending=u*4.33,l.nextMonthSpending>0&&(l.budgetRunway=Math.floor(r/l.nextMonthSpending)),l.categoryTrends=this.predictCategoryTrends(i),l.goalCompletionDates=this.predictGoalCompletion(i),l}generateSmartAlerts(i,r,o,l){const d=[],u=new Date,p=this.getCurrentMonthSpending(i)/o*100;p>90?d.push({type:"critical",title:"🚨 Budget Almost Exceeded",message:`You've used ${p.toFixed(0)}% of your monthly budget!`,timestamp:u,urgent:!0}):p>75&&d.push({type:"warning",title:"⚠️ Budget Alert",message:`You've used ${p.toFixed(0)}% of your monthly budget. Consider slowing down spending.`,timestamp:u,urgent:!1});const x=this.detectUnusualSpending(i);return x.length>0&&d.push({type:"info",title:"🔍 Unusual Spending Detected",message:`Detected ${x.length} transactions that seem unusual for your spending pattern.`,timestamp:u,urgent:!1,details:x}),l.forEach(b=>{if(b.deadline){const y=Math.ceil((new Date(b.deadline)-u)/864e5),O=b.saved/b.target*100;y<=30&&O<80&&d.push({type:"warning",title:"⏰ Goal Deadline Approaching",message:`"${b.name}" has ${y} days left but only ${O.toFixed(0)}% complete.`,timestamp:u,urgent:y<=7})}}),this.alerts=d,d}generateRecommendations(i,r,o,l,d){const u=[],p=this.analyzeCategorySpending(i).filter(b=>b.percentage>25);p.length>0&&u.push({type:"optimization",title:"💡 Budget Optimization",description:`Consider reducing spending in ${p[0].category} by 10% to free up $${(p[0].amount*.1).toFixed(2)} monthly.`,impact:"medium",effort:"low",category:"budgeting"}),d.length>0&&[...new Set(d.map(y=>y.name))].length<3&&u.push({type:"diversification",title:"🚀 Diversify Your Portfolio",description:"Consider adding different crypto assets to reduce risk and increase potential returns.",impact:"high",effort:"medium",category:"investing"});const x=this.calculateSavingsRate(i,r);return x<20&&u.push({type:"savings",title:"💰 Increase Savings Rate",description:`Current savings rate is ${x.toFixed(0)}%. Try to save at least 20% for better financial health.`,impact:"high",effort:"medium",category:"savings"}),this.recommendations=u,u}processNaturalLanguageQuery(i,r,o,l,d,u){var p,x;const h=i.toLowerCase().trim();if(h.includes("spent")||h.includes("spending")){if(h.includes("month")||h.includes("monthly")){const b=this.getCurrentMonthSpending(r);return{type:"spending",answer:`You've spent $${b.toFixed(2)} this month.`,data:{amount:b,period:"month"}}}if(h.includes("category")){const b=this.analyzeCategorySpending(r);return{type:"category_spending",answer:`Your top spending category is ${(p=b[0])==null?void 0:p.category} with $${(x=b[0])==null?void 0:x.amount.toFixed(2)}.`,data:b}}}if(h.includes("balance")||h.includes("money left"))return{type:"balance",answer:`Your current balance is $${o.toFixed(2)}.`,data:{balance:o}};if(h.includes("goal")||h.includes("target")){if(d.length===0)return{type:"goals",answer:"You haven't set any financial goals yet. Consider adding some!",data:{goalsCount:0}};const b=d.reduce((y,O)=>y+O.saved/O.target,0)/d.length*100;return{type:"goals",answer:`You have ${d.length} goals with an average progress of ${b.toFixed(0)}%.`,data:{goalsCount:d.length,avgProgress:b}}}if(h.includes("investment")||h.includes("crypto")||h.includes("portfolio")){if(u.length===0)return{type:"investments",answer:"You don't have any investments yet. Consider starting your crypto journey!",data:{investmentCount:0}};const b=u.reduce((y,O)=>y+O.total_price,0);return{type:"investments",answer:`Your crypto portfolio is worth $${b.toFixed(2)} across ${u.length} assets.`,data:{totalValue:b,assetCount:u.length}}}return{type:"unknown",answer:"I'm not sure about that. Try asking about your spending, balance, goals, or investments!",data:null}}calculateMonthlySpending(i){const r={};return i.forEach(o=>{const l=new Date(o.date),d=`${l.getFullYear()}-${l.getMonth()}`;r[d]||(r[d]=0),r[d]+=o.amount}),Object.entries(r).map(([o,l])=>({month:o,amount:l}))}getCurrentMonthSpending(i){const r=new Date,o=r.getMonth(),l=r.getFullYear();return i.filter(d=>{const u=new Date(d.date);return u.getMonth()===o&&u.getFullYear()===l}).reduce((d,u)=>d+u.amount,0)}analyzeCategorySpending(i){const r={},o=i.reduce((l,d)=>l+d.amount,0);return i.forEach(l=>{r[l.category]||(r[l.category]=0),r[l.category]+=l.amount}),Object.entries(r).map(([l,d])=>({category:l,amount:d,percentage:d/o*100})).sort((l,d)=>d.amount-l.amount)}detectUnusualSpending(i){const r=i.slice(-30),l=r.reduce((d,u)=>d+u.amount,0)/r.length*2;return i.filter(d=>d.amount>l).slice(-5)}calculateSavingsRate(i,r){const l=i.reduce((d,u)=>d+u.amount,0)+r;return l===0?0:r/l*100}predictCategoryTrends(i){const r={},o=new Date;return o.setMonth(o.getMonth()-3),i.forEach(l=>{const u=new Date(l.date)>=o;r[l.category]||(r[l.category]={recent:0,old:0}),u?r[l.category].recent+=l.amount:r[l.category].old+=l.amount}),Object.entries(r).map(([l,d])=>({category:l,trend:d.recent>d.old?"increasing":"decreasing",change:d.old>0?(d.recent-d.old)/d.old*100:0}))}predictGoalCompletion(i){const r=this.calculateMonthlySpending(i).reduce((o,l)=>o+l.amount,0)/12*.2;return{avgMonthlySavings:r,estimatedMonthsToGoal:o=>Math.ceil(o/r)}}}const oa=new Cv,Ev=a=>a.sort((i,r)=>{const o={critical:3,warning:2,info:1};return(o[r.type]||0)-(o[i.type]||0)}),Av=({transactions:a,balance:i,budget:r,goals:o,investments:l,darkMode:d})=>{var xe;console.log("🔍 AIInsightsPanel rendering...",{transactions:a,balance:i,budget:r,darkMode:d});const u=wr(),[h,p]=S.useState([]),[x,b]=S.useState([]),[y,O]=S.useState([]),[W,I]=S.useState({}),[k,L]=S.useState(""),[V,D]=S.useState(null),[N,C]=S.useState("insights"),[ne,ie]=S.useState(!1),me=A=>{switch(A){case"Set Category Budget":case"Review Budget":case"Monitor Spending":u("/budget");break;case"View Category Details":case"Review Expenses":case"Review Categories":u("/transactions");break;case"Explore Investments":case"Invest Surplus":case"Explore Diversification":u("/investments");break;case"Set New Goal":case"Boost Savings":case"Optimize Savings":case"Review Goal Strategy":u("/goals");break;case"Analyze Trend":u("/transactions");break;default:console.log("Action not implemented:",A),A.toLowerCase().includes("budget")?u("/budget"):A.toLowerCase().includes("investment")?u("/investments"):A.toLowerCase().includes("goal")?u("/goals"):u("/transactions")}};S.useEffect(()=>{const A=async()=>{ie(!0);try{const X=oa.generateFinancialInsights(a,i,r,o,l);p(X);const se=Ev(oa.generateSmartAlerts(a,i,r,o));b(se);const P=oa.generateRecommendations(a,i,r,o,l);O(P);const Z=oa.generatePredictions(a,i,r);I(Z)}catch(X){console.error("Error generating AI insights:",X)}finally{ie(!1)}};a.length>0&&A()},[a,i,r,o,l]);const re=()=>{if(k.trim()){const A=oa.processNaturalLanguageQuery(k,a,i,r,o,l);D(A),L("")}},fe=A=>{A.key==="Enter"&&re()};return n.jsxs("div",{className:`ai-insights-panel ${d?"ai-dark":"ai-light"}`,children:[n.jsx("style",{children:`
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
          background: ${d?"#4a5568":"#e2e8f0"};
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
          background: ${d?"#2d3748":"#ffffff"};
          color: ${d?"#e2e8f0":"#2d3748"};
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
          background: ${d?"#4a5568":"#f7fafc"};
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
          background: ${d?"#4a5568":"#ffffff"};
          border-radius: 12px;
          border: 2px solid ${d?"#718096":"#e2e8f0"};
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
          border: 2px solid ${d?"#718096":"#e2e8f0"};
          border-radius: 10px;
          font-size: 1rem;
          background: ${d?"#2d3748":"#ffffff"};
          color: ${d?"#e2e8f0":"#2d3748"};
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
          background: ${d?"#4a5568":"#ffffff"};
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
          background: ${d?"linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)":"linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)"};
        }

        .alert-card.warning {
          border-left-color: #f59e0b;
          background: ${d?"linear-gradient(135deg, #78350f 0%, #92400e 100%)":"linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)"};
        }

        .alert-card.info {
          border-left-color: #3b82f6;
          background: ${d?"linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)":"linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"};
        }

        .recommendation-card {
          border-left-color: #6366f1;
          background: ${d?"linear-gradient(135deg, #312e81 0%, #3730a3 100%)":"linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"};
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
          color: ${d?"#e2e8f0":"#2d3748"};
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
          color: ${d?"#cbd5e0":"#4a5568"};
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
          background: ${d?"#4a5568":"#ffffff"};
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
          color: ${d?"#a0aec0":"#718096"};
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
          border: 4px solid ${d?"#4a5568":"#e2e8f0"};
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
          color: ${d?"#a0aec0":"#718096"};
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
      `}),n.jsxs("div",{className:"ai-header",children:[n.jsx("div",{style:{color:"white",fontSize:"1.4rem",fontWeight:"700",margin:"0 0 8px 0",display:"block",width:"100%",textAlign:"center",textShadow:"none",opacity:1},children:"AI Financial Assistant"}),n.jsx("div",{style:{margin:"0",fontSize:"15px",color:"rgba(255, 255, 255, 0.95)",display:"block",width:"100%",textAlign:"center",opacity:1},children:"Powered by intelligent insights and predictive analytics"})]}),n.jsxs("div",{className:"nl-query-section",children:[n.jsx("h5",{style:{color:d?"#e2e8f0":"#2d3748",marginBottom:"15px",fontWeight:"700"},children:"💬 Ask Your AI Assistant"}),n.jsxs("div",{className:"nl-query-container",children:[n.jsx("input",{type:"text",className:"nl-query-input",placeholder:"Ask me anything... 'How much did I spend this month?' or 'What's my investment performance?'",value:k,onChange:A=>L(A.target.value),onKeyPress:fe}),n.jsx("button",{className:"nl-query-btn",onClick:re,children:"🔍 Ask AI"})]}),V&&n.jsxs("div",{className:"nl-response",children:[n.jsx("strong",{children:"🤖 AI Assistant:"})," ",V.answer]})]}),n.jsxs("div",{className:"ai-tabs",children:[n.jsxs("button",{className:`ai-tab ${N==="insights"?"active":""}`,onClick:()=>C("insights"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"💡"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Insights"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[h.length," available"]})]})]}),n.jsxs("button",{className:`ai-tab ${N==="alerts"?"active":""}`,onClick:()=>C("alerts"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"🚨"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Alerts"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[x.length," notifications"]})]})]}),n.jsxs("button",{className:`ai-tab ${N==="recommendations"?"active":""}`,onClick:()=>C("recommendations"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"💡"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Tips"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[y.length," suggestions"]})]})]}),n.jsxs("button",{className:`ai-tab ${N==="predictions"?"active":""}`,onClick:()=>C("predictions"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"🔮"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Predictions"}),n.jsx("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:"AI forecasts"})]})]})]}),ne&&n.jsx("div",{className:"loading-spinner",children:n.jsx("div",{className:"spinner"})}),!ne&&n.jsxs(n.Fragment,{children:[N==="insights"&&n.jsx("div",{children:h.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"💡"}),n.jsx("h5",{children:"No insights yet"}),n.jsx("p",{children:"Add more transactions to get personalized insights!"})]}):h.map((A,X)=>n.jsxs("div",{className:`insight-card ${A.type}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:A.title}),n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.jsxs("span",{className:"confidence-badge",children:[A.confidence,"% confident"]}),A.priority&&n.jsx("span",{className:`priority-badge priority-${A.priority}`,children:A.priority})]})]}),n.jsx("div",{className:"card-content",children:A.message}),A.actionable&&n.jsx("button",{className:"action-btn",onClick:()=>me(A.action),children:A.action})]},X))}),N==="alerts"&&n.jsx("div",{children:x.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"🚨"}),n.jsx("h5",{children:"No alerts"}),n.jsx("p",{children:"You're doing great! No urgent alerts at the moment."})]}):x.map((A,X)=>n.jsxs("div",{className:`alert-card ${A.type}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:A.title}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:A.timestamp.toLocaleDateString()})]}),n.jsx("div",{className:"card-content",children:A.message})]},X))}),N==="recommendations"&&n.jsx("div",{children:y.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"💡"}),n.jsx("h5",{children:"No recommendations yet"}),n.jsx("p",{children:"Keep using the app to get personalized recommendations!"})]}):y.map((A,X)=>n.jsxs("div",{className:"recommendation-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:A.title}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("span",{className:`priority-badge priority-${A.impact==="high"?"high":A.impact==="medium"?"medium":"low"}`,children:[A.impact," impact"]}),n.jsxs("span",{className:`priority-badge priority-${A.effort==="high"?"high":A.effort==="medium"?"medium":"low"}`,children:[A.effort," effort"]})]})]}),n.jsx("div",{className:"card-content",children:A.description}),n.jsxs("small",{style:{color:d?"#a0aec0":"#718096"},children:["Category: ",A.category]})]},X))}),N==="predictions"&&n.jsxs("div",{className:"predictions-grid",children:[n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Next Month Spending"}),n.jsxs("div",{className:"prediction-value",children:["$",((xe=W.nextMonthSpending)==null?void 0:xe.toFixed(2))||"0.00"]}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"Based on your recent patterns"})]}),n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Budget Runway"}),n.jsxs("div",{className:"prediction-value",children:[W.budgetRunway||0," months"]}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"At current spending rate"})]}),n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Savings Trend"}),n.jsx("div",{className:"prediction-value",style:{color:W.nextMonthSpending<r*.8?"#10b981":"#ef4444"},children:W.nextMonthSpending<r*.8?"📈 Good":"📉 Review"}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"Based on budget vs spending"})]})]})]})]})};Nd.register(Dx,Ux,Bx,zx,Wx,Hx,qx,Yx,Gx,Vx);function Rv({transactions:a=[],balance:i=0,totalAmount:r,darkMode:o,formatCurrency:l,goals:d,setGoals:u,formatDate:h,goalsProgress:p,setGoalsProgress:x,totalBudgetAmount:b,parseDate:y,setItems:O,setBalances:W,setCashOnHand:I,setBankAccountBalance:k,setSavings:L,setTransactions:V,setAmounts:D,addedInvestments:N,setAddedInvestments:C}){var $t;const ne=wr();S.useState([]);const[ie,me]=S.useState(0),[re,fe]=S.useState(null),[xe,A]=S.useState(""),[X,se]=S.useState("line"),[P,Z]=S.useState("all"),[oe,Pe]=S.useState(!0),[$e,be]=S.useState("all"),[U,ye]=S.useState(null),[de,H]=S.useState(!1),[Q,le]=S.useState(!0),[ue,Ne]=S.useState(null),[Ve,ae]=S.useState("cards"),[q,ve]=S.useState(!0),[Ee,yt]=S.useState(!1),[We,Xe]=S.useState(null),[qe,qt]=S.useState("cards"),[Fe,jt]=S.useState(!0),[Ye,ot]=S.useState(!1);N.reduce((j,B)=>j+parseFloat(B.total_price),0).toFixed(2);const et=p.reduce((j,B)=>j+parseFloat(B.saved||0),0),tt=b+parseFloat(ie)+i+et-r,je=(j,B)=>{const F=new Date;return j.filter(Ce=>{const Te=new Date(Ce.date);switch(B){case"week":return F-Te<=7*24*60*60*1e3;case"month":return F-Te<=30*24*60*60*1e3;case"3months":return F-Te<=90*24*60*60*1e3;default:return!0}})},rt=(j,B)=>B==="all"?j:j.filter(F=>F.category&&F.category.toLowerCase()===B.toLowerCase()),ht=a.sort((j,B)=>new Date(j.date)-new Date(B.date)),lt=rt(je(ht,P),$e),gt=lt.map(j=>({...j,date:h(y(j.date))})),Tt=["all",...new Set(a.map(j=>j.category).filter(Boolean))];S.useEffect(()=>{console.log("Loaded from Goal.jsx component"),bt.get("/goals").then(j=>{const B=j.data.map(F=>({...F,progress:F.saved/F.target*100}));x(B)}).catch(j=>{console.error("Error fetching goals:",j)})},[]),S.useEffect(()=>{console.log("Loaded from Budget.jsx component"),bt.get("/budgets").then(j=>{const B=j.data.map(F=>({...F,date:y(F.date)}));O(B)}).catch(j=>{console.error("Error fetching budgets:",j)})},[]),S.useEffect(()=>{console.log("Loaded from Balance.jsx component"),bt.get("/balance").then(j=>{if(Array.isArray(j.data)){const B=j.data.map(F=>({...F,total:F.cash_on_hand+F.bank_account_balance+F.savings,id:F.id}));if(W(B),B.length>0){const F=B[0];I(F.cash_on_hand),k(F.bank_account_balance),L(F.savings)}}else if(j.data&&typeof j.data=="object"){const B={...j.data,total:j.data.cash_on_hand+j.data.bank_account_balance+j.data.savings};W([B]),I(B.cash_on_hand),k(B.bank_account_balance),L(B.savings)}else console.error("Fetched data is not an array or object:",j.data)}).catch(j=>{console.error("Error fetching balances:",j)})},[]),S.useEffect(()=>{console.log("TRANSACTIONS COMPONENT"),console.log("Fetching transactions..."),bt.get("/transactions").then(j=>{console.log("Fetched transactions:",j.data),V(j.data)}).catch(j=>console.log("Error fetching transactions",j))},[]),S.useEffect(()=>{bt.get("/investments").then(j=>{console.log("Fetched from Investments:",j.data),C(j.data),vt(j.data)}).catch(j=>console.log("Error fetching investments",j))},[]);const vt=j=>{const B=j.reduce((F,J)=>F+J.total_price,0);me(B)};S.useEffect(()=>{vt(N)},[N]);const en=j=>{if(!N||!N[j]){console.error("Investment not found");return}const B=N[j].id;bt.delete(`/investments/${B}`).then(F=>{if(F.status===204){const J=N.filter((Ce,Te)=>Te!==j);C(J)}else console.error("Failed to delete the investment")}).catch(F=>{console.error("Error:",F)})},K=j=>{fe(j),A(N[j].amount)},te=j=>{const B=[...N],F=B[j],J=parseFloat(xe);isNaN(J)?console.error("Invalid amount:",xe):(F.amount=J,F.pricePerUnit?F.total_price=J*F.pricePerUnit:console.error("pricePerUnit is not defined for investment:",F),bt.put(`/investments/${F.id}`,{amount:F.amount,totalPrice:F.total_price}).then(Ce=>{C(B),fe(null),A("")}).catch(Ce=>{console.error("Error updating investment:",Ce)}))},he=()=>{fe(null),A("")},He=(()=>{const j=gt.map(J=>J.date),B=gt.map(J=>parseFloat(J.amount)),F={labels:j,datasets:[{label:"Transaction Amount ($)",data:B,borderColor:o?"rgba(255, 193, 7, 1)":"rgba(54, 162, 235, 1)",backgroundColor:o?"rgba(255, 193, 7, 0.2)":"rgba(54, 162, 235, 0.2)",borderWidth:3,pointRadius:6,pointHoverRadius:8,pointBackgroundColor:o?"rgba(255, 193, 7, 1)":"rgba(54, 162, 235, 1)",pointBorderColor:"#fff",pointBorderWidth:2,tension:.4,fill:X==="line"}]};if(X==="bar")F.datasets[0].backgroundColor=B.map((J,Ce)=>`hsla(${Ce*137.5%360}, 70%, 60%, 0.8)`),F.datasets[0].borderColor=B.map((J,Ce)=>`hsla(${Ce*137.5%360}, 70%, 50%, 1)`);else if(X==="doughnut"){const J={};return gt.forEach(Ce=>{const Te=Ce.category||"Uncategorized";J[Te]=(J[Te]||0)+parseFloat(Ce.amount)}),{labels:Object.keys(J),datasets:[{label:"Amount by Category ($)",data:Object.values(J),backgroundColor:Object.keys(J).map((Ce,Te)=>`hsla(${Te*137.5%360}, 70%, 60%, 0.8)`),borderColor:Object.keys(J).map((Ce,Te)=>`hsla(${Te*137.5%360}, 70%, 50%, 1)`),borderWidth:2,hoverOffset:4}]}}return F})(),Be=(()=>{const j={responsive:!0,maintainAspectRatio:!1,animation:{duration:oe?1e3:0,easing:"easeInOutQuart"},interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!0,position:"top",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:20,font:{size:12,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:1,cornerRadius:8,displayColors:!0,callbacks:{title:function(B){return X==="doughnut"?"Category Breakdown":`Date: ${B[0].label}`},label:function(B){if(X==="doughnut"){const F=B.dataset.data.reduce((Ce,Te)=>Ce+Te,0),J=(B.raw/F*100).toFixed(1);return`${B.label}: $${B.raw.toFixed(2)} (${J}%)`}else{const F=gt[B.dataIndex];return[`Amount: $${B.raw}`,`Description: ${(F==null?void 0:F.description)||"No Description"}`,`Category: ${(F==null?void 0:F.category)||"Uncategorized"}`]}}}}},onClick:(B,F)=>{if(F.length>0){const J=F[0].index;if(X!=="doughnut"){const Ce=gt[J];console.log("Clicked transaction:",Ce)}}}};return X!=="doughnut"&&(j.scales={x:{title:{display:!0,text:"Date",color:o?"#fff":"#000",font:{size:14,weight:"bold"}},ticks:{color:o?"#fff":"#000",maxTicksLimit:10},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},y:{title:{display:!0,text:"Amount ($)",color:o?"#fff":"#000",font:{size:14,weight:"bold"}},ticks:{color:o?"#fff":"#000",callback:function(B){return"$"+B.toFixed(2)}},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}}),j})(),Ge={labels:["Budget","Balance","Goals Saved","Investments","X-penses"],datasets:[{label:"Financial Overview ($)",data:[b,i,et,ie,r],backgroundColor:["rgba(40, 167, 69, 0.8)","rgba(23, 162, 184, 0.8)","rgba(255, 193, 7, 0.8)","rgba(108, 117, 125, 0.8)","rgba(220, 53, 69, 0.8)"],borderColor:["rgba(40, 167, 69, 1)","rgba(23, 162, 184, 1)","rgba(255, 193, 7, 1)","rgba(108, 117, 125, 1)","rgba(220, 53, 69, 1)"],borderWidth:2,hoverOffset:10}]},Yt={responsive:!0,maintainAspectRatio:!1,animation:{duration:Q?1200:0,easing:"easeInOutBounce"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:15,font:{size:11,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:8,callbacks:{label:function(j){const B=tt,F=B!==0?(j.raw/Math.abs(B)*100).toFixed(1):"0.0";return`${j.label}: $${j.raw.toFixed(2)} (${F}%)`}}}},onClick:(j,B)=>{if(B.length>0){const F=B[0].index;ye(["Budget","Balance","Goals Saved","Investments","X-penses"][F])}}},Lt=j=>({Budget:"#28a745",Balance:"#17a2b8","X-penses":"#dc3545","Goals (saved)":"#ffc107",Investments:"#6c757d","Overview Total":o?"#ffffff":"#000000"})[j]||(o?"#ffffff":"#000000"),fn=j=>({Budget:"💰",Balance:"💳","X-penses":"💸","Goals (saved)":"🎯",Investments:"📈","Overview Total":"📊"})[j]||"📋",Gt=(j,B)=>j>=100?"#28a745":j>=75?"#17a2b8":j>=50?"#ffc107":j>=25?"#fd7e14":"#dc3545",Nn=(j,B)=>j>=100?"🎉":j>=75?"🔥":j>=50?"⭐":j>=25?"📈":"🚀",Bn=j=>j>=100?"Completed! 🎉":j>=75?"Almost there! 🔥":j>=50?"Halfway! ⭐":j>=25?"Good start! 📈":"Just started 🚀",nr={labels:p.map(j=>j.name),datasets:[{label:"Goals Progress (%)",data:p.map(j=>j.saved/j.target*100),backgroundColor:p.map((j,B)=>{const F=j.saved/j.target*100;return Gt(F)+"80"}),borderColor:p.map((j,B)=>{const F=j.saved/j.target*100;return Gt(F)}),borderWidth:2,hoverOffset:8}]},rr={responsive:!0,maintainAspectRatio:!1,animation:{duration:q?1500:0,easing:"easeInOutElastic"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:12,font:{size:10,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:8,callbacks:{label:function(j){const B=p[j.dataIndex];return[`Progress: ${j.raw.toFixed(1)}%`,`Saved: $${B.saved.toFixed(2)}`,`Target: $${B.target.toFixed(2)}`,`Remaining: $${(B.target-B.saved).toFixed(2)}`]}}}},onClick:(j,B)=>{if(B.length>0){const F=B[0].index,J=p[F];Ne((ue==null?void 0:ue.id)===J.id?null:J)}}},tn=(j,B)=>{const F={bitcoin:"#f7931a",btc:"#f7931a",ethereum:"#627eea",eth:"#627eea",usdc:"#2775ca",xrp:"#23292f",ripple:"#23292f",cardano:"#0033ad",ada:"#0033ad",solana:"#9945ff",sol:"#9945ff"},J=j.name.toLowerCase();for(const Te in F)if(J.includes(Te))return F[Te];const Ce=["#28a745","#17a2b8","#ffc107","#fd7e14","#dc3545","#6f42c1","#e83e8c","#20c997"];return Ce[B%Ce.length]},nn=j=>{const B=j.name.toLowerCase(),F={bitcoin:"₿",btc:"₿",ethereum:"Ξ",eth:"Ξ",usdc:"💵",xrp:"🌊",ripple:"🌊",cardano:"🎴",ada:"🎴",solana:"☀️",sol:"☀️"};for(const J in F)if(B.includes(J))return F[J];return"🪙"},pn=j=>Math.random()*20-10,wn=j=>j>5?{label:"Strong Gain! 🚀",class:"success"}:j>0?{label:"Gaining 📈",class:"success"}:j>-5?{label:"Stable 📊",class:"warning"}:{label:"Down 📉",class:"danger"},Cn={labels:N.map(j=>j.name),datasets:[{label:"Investment Value ($)",data:N.map(j=>j.total_price),backgroundColor:N.map((j,B)=>tn(j,B)+"80"),borderColor:N.map((j,B)=>tn(j,B)),borderWidth:3,hoverOffset:12,hoverBorderWidth:4}]},ar={responsive:!0,maintainAspectRatio:!1,animation:{duration:Fe?1800:0,easing:"easeInOutBack"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:15,font:{size:11,weight:"bold"},generateLabels:function(j){return Nd.defaults.plugins.legend.labels.generateLabels.call(this,j).map((J,Ce)=>{const Te=N[Ce];return J.text=`${nn(Te)} ${J.text}`,J})}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:10,callbacks:{title:function(j){const B=N[j[0].dataIndex];return`${nn(B)} ${B.name}`},label:function(j){var J;const B=N[j.dataIndex],F=pn();return[`Value: $${j.raw.toFixed(2)}`,`Amount: ${B.amount}`,`Price per unit: $${((J=B.pricePerUnit)==null?void 0:J.toFixed(2))||"N/A"}`,`Performance: ${F.toFixed(2)}%`,`Status: ${wn(F).label}`]}}}},onClick:(j,B)=>{if(B.length>0){const F=B[0].index,J=N[F];Xe((We==null?void 0:We.id)===J.id?null:J)}}};return n.jsxs("div",{className:`container-fluid ${o?"dark-mode":"light-mode"}`,children:[n.jsx("style",{children:`
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
      `}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"col-12",children:[n.jsx("div",{className:"dashboard-header",children:n.jsx("h1",{children:"Main Dashboard"})}),n.jsx(Av,{transactions:a,balance:i,budget:b,goals:p,investments:N,darkMode:o}),n.jsxs("div",{className:"summary",children:[n.jsx("h5",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"Recent Transactions"}),n.jsx("br",{}),n.jsx("button",{onClick:()=>ne("/transactions"),className:`btn ${o?"btn-light":"btn-dark"} responsive`,children:" View All Transactions"})]}),n.jsx("br",{}),n.jsxs("div",{className:`charts border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"Spending Over Time Graph"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"X-PENSE Transactions"})})]}),n.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${X==="line"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("line"),title:"Line Chart",children:"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${X==="bar"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("bar"),title:"Bar Chart",children:"📊"}),n.jsx("button",{type:"button",className:`btn btn-sm ${X==="doughnut"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("doughnut"),title:"Doughnut Chart",children:"🍩"})]}),n.jsxs("select",{className:`form-select form-select-sm ${o?"bg-dark text-light":""}`,value:P,onChange:j=>Z(j.target.value),style:{width:"auto"},children:[n.jsx("option",{value:"all",children:"All Time"}),n.jsx("option",{value:"week",children:"Last Week"}),n.jsx("option",{value:"month",children:"Last Month"}),n.jsx("option",{value:"3months",children:"Last 3 Months"})]}),n.jsx("select",{className:`form-select form-select-sm ${o?"bg-dark text-light":""}`,value:$e,onChange:j=>be(j.target.value),style:{width:"auto"},children:Tt.map(j=>n.jsx("option",{value:j,children:j==="all"?"All Categories":j},j))}),n.jsx("button",{type:"button",className:`btn btn-sm ${oe?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Pe(!oe),title:oe?"Disable Animations":"Enable Animations",children:oe?"🎬":"⏸️"})]})]}),n.jsx("div",{style:{height:"400px",position:"relative"},children:gt.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"📊"}),n.jsx("h5",{className:"text-muted",children:"No Transactions Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start tracking your expenses to see spending patterns"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/transactions"),children:"➕ Add Your First Transaction"})]}):n.jsxs(n.Fragment,{children:[X==="line"&&n.jsx(Mx,{data:He,options:Be}),X==="bar"&&n.jsx(Kx,{data:He,options:Be}),X==="doughnut"&&n.jsx(ri,{data:He,options:Be})]})}),n.jsxs("div",{className:"mt-3 row",children:[n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Total Transactions: ",n.jsx("strong",{children:lt.length})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Total Amount: ",n.jsxs("strong",{children:["$",lt.reduce((j,B)=>j+parseFloat(B.amount),0).toFixed(2)]})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Average: ",n.jsxs("strong",{children:["$",lt.length>0?(lt.reduce((j,B)=>j+parseFloat(B.amount),0)/lt.length).toFixed(2):"0.00"]})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Time Range: ",n.jsx("strong",{children:P==="all"?"All Time":P.charAt(0).toUpperCase()+P.slice(1)})]})})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"🚀 Crypto Investments"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Portfolio Tracking Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${qe==="cards"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>qt("cards"),title:"Card View",children:"🎴"}),n.jsx("button",{type:"button",className:`btn btn-sm ${qe==="table"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>qt("table"),title:"Table View",children:"📋"})]}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ye?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ot(!Ye),title:Ye?"Hide Portfolio Chart":"Show Portfolio Chart",children:Ye?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Fe?"btn-warning":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>jt(!Fe),title:Fe?"Disable Animations":"Enable Animations",children:Fe?"🎬":"⏸️"})]})]}),Ye&&N.length>0&&n.jsxs("div",{className:"mb-4",style:{height:"350px",position:"relative"},children:[n.jsx(ri,{data:Cn,options:ar}),We&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${tn(We,0)}`},children:[n.jsxs("strong",{children:[nn(We)," Selected: ",We.name]}),n.jsx("br",{}),n.jsxs("small",{children:["Value: $",We.total_price.toFixed(2)," • Amount: ",We.amount," • Price: $",(($t=We.pricePerUnit)==null?void 0:$t.toFixed(2))||"N/A"]})]})]}),N.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"🚀"}),n.jsx("h5",{className:"text-muted",children:"No Investments Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start building your crypto portfolio today"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/investments"),children:"➕ Add Your First Investment"})]}):n.jsxs(n.Fragment,{children:[qe==="cards"&&n.jsx("div",{className:"row",children:N.map((j,B)=>{var Me;const F=tn(j,B),J=pn(),Ce=wn(J),Te=(We==null?void 0:We.id)===j.id;return n.jsx("div",{className:"col-md-6 col-lg-4 mb-4",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:Fe?"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)":"none",borderLeft:`5px solid ${F}`,transform:Te?"scale(1.08) rotate(-1deg)":"scale(1)",boxShadow:Te?`0 15px 40px ${F}50`:"0 5px 20px rgba(0,0,0,0.1)",background:Te?o?`linear-gradient(135deg, #2d3748 0%, ${F}25 100%)`:`linear-gradient(135deg, #f8f9fa 0%, ${F}20 100%)`:void 0},onClick:()=>Xe(Te?null:j),onMouseEnter:R=>{Fe&&!Te&&(R.currentTarget.style.transform="translateY(-10px) scale(1.03)",R.currentTarget.style.boxShadow=`0 10px 30px ${F}40`)},onMouseLeave:R=>{Fe&&(R.currentTarget.style.transform=Te?"scale(1.08) rotate(-1deg)":"scale(1)",R.currentTarget.style.boxShadow=Te?`0 15px 40px ${F}50`:"0 5px 20px rgba(0,0,0,0.1)")},children:n.jsxs("div",{className:"card-body p-4",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[n.jsx("div",{className:"flex-grow-1",children:n.jsxs("h6",{className:"card-title mb-2 d-flex align-items-center",style:{color:F},children:[n.jsx("span",{className:"me-2",style:{fontSize:"2rem"},children:nn(j)}),n.jsxs("div",{children:[n.jsx("div",{children:j.name}),n.jsx("small",{className:`badge bg-${Ce.class} mt-1`,children:Ce.label})]})]})}),n.jsx("div",{className:"text-end",children:n.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center",style:{width:"50px",height:"50px",backgroundColor:`${F}20`,border:`3px solid ${F}40`},children:n.jsx("span",{style:{fontSize:"24px"},children:nn(j)})})})]}),n.jsxs("div",{className:"text-center mb-3",children:[n.jsx("h3",{className:"mb-1",style:{color:F},children:l(j.total_price)}),n.jsx("small",{className:"text-muted",children:"Portfolio Value"})]}),n.jsxs("div",{className:"row text-center mb-3",children:[n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Amount"}),n.jsx("div",{style:{color:F,fontWeight:"bold"},children:re===B?n.jsx("input",{type:"number",value:xe,onChange:R=>A(R.target.value),className:`form-control form-control-sm ${o?"bg-dark text-light":""}`,style:{borderColor:F}}):j.amount})]}),n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Price/Unit"}),n.jsxs("div",{style:{color:F,fontWeight:"bold"},children:["$",((Me=j.pricePerUnit)==null?void 0:Me.toFixed(2))||"N/A"]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[n.jsx("small",{className:"text-muted",children:"Performance"}),n.jsxs("small",{style:{color:J>0?"#28a745":"#dc3545"},children:[J>0?"+":"",J.toFixed(2),"%"]})]}),n.jsx("div",{className:"progress",style:{height:"6px",borderRadius:"10px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.abs(J)*5}%`,backgroundColor:J>0?"#28a745":"#dc3545",borderRadius:"10px",transition:Fe?"width 1.5s ease-out":"none"}})})]}),n.jsx("div",{className:"d-flex gap-2",children:re===B?n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>te(B),className:"btn btn-sm btn-success flex-fill",style:{borderRadius:"8px"},children:"💾 Save"}),n.jsx("button",{onClick:he,className:"btn btn-sm btn-secondary flex-fill",style:{borderRadius:"8px"},children:"❌ Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>K(B),className:"btn btn-sm flex-fill",style:{backgroundColor:`${F}20`,color:F,border:`1px solid ${F}40`,borderRadius:"8px"},children:"✏️ Edit"}),n.jsx("button",{onClick:()=>en(B),className:"btn btn-sm btn-outline-danger flex-fill",style:{borderRadius:"8px"},children:"🗑️ Remove"})]})}),Te&&n.jsxs("div",{className:"mt-3 p-3 rounded",style:{backgroundColor:`${F}15`,border:`1px solid ${F}40`,animation:Fe?"fadeIn 0.3s ease-in":"none"},children:[n.jsx("h6",{style:{color:F},children:"📊 Investment Analytics"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Total Return"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:J>0?"#28a745":"#dc3545"},children:["$",(j.total_price*J/100).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Portfolio %"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:F},children:[(j.total_price/ie*100).toFixed(1),"%"]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Risk Level"}),n.jsx("br",{}),n.jsx("strong",{style:{color:F},children:Math.abs(J)>5?"High 🔥":Math.abs(J)>2?"Medium ⚡":"Low 🛡️"})]})]})]})]})})},B)})}),qe==="table"&&n.jsx("div",{className:"table-responsive",children:n.jsxs("table",{className:`table table-hover ${o?"table-dark":"table-light"}`,style:{borderRadius:"10px",overflow:"hidden"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{background:o?"#495057":"#f8f9fa"},children:[n.jsx("th",{children:"Asset"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Price/Unit"}),n.jsx("th",{children:"Total Value"}),n.jsx("th",{children:"Performance"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:N.map((j,B)=>{var Me;const F=tn(j,B),J=pn(),Ce=wn(J),Te=(We==null?void 0:We.id)===j.id;return n.jsxs("tr",{className:Te?"table-active":"",style:{borderLeft:`4px solid ${F}`,cursor:"pointer",transition:Fe?"all 0.3s ease":"none",backgroundColor:Te?`${F}10`:void 0},onClick:()=>Xe(Te?null:j),children:[n.jsx("td",{children:n.jsxs("div",{className:"d-flex align-items-center",children:[n.jsx("span",{style:{fontSize:"1.5rem",marginRight:"10px"},children:nn(j)}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:F},children:j.name}),n.jsx("br",{}),n.jsx("small",{className:`badge bg-${Ce.class}`,children:Ce.label})]})]})}),n.jsx("td",{children:re===B?n.jsx("input",{type:"number",value:xe,onChange:R=>A(R.target.value),className:`form-control form-control-sm ${o?"bg-dark text-light":""}`,style:{borderColor:F,maxWidth:"100px"}}):n.jsx("strong",{style:{color:F},children:j.amount})}),n.jsxs("td",{style:{color:F},children:["$",((Me=j.pricePerUnit)==null?void 0:Me.toFixed(2))||"N/A"]}),n.jsx("td",{children:n.jsx("strong",{style:{color:F},children:l(j.total_price)})}),n.jsx("td",{children:n.jsx("div",{className:"d-flex align-items-center",children:n.jsxs("span",{style:{color:J>0?"#28a745":"#dc3545",marginRight:"8px"},children:[J>0?"📈":"📉",J.toFixed(2),"%"]})})}),n.jsx("td",{children:re===B?n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:R=>{R.stopPropagation(),te(B)},className:"btn btn-sm btn-success",children:"💾"}),n.jsx("button",{onClick:R=>{R.stopPropagation(),he()},className:"btn btn-sm btn-secondary",children:"❌"})]}):n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:R=>{R.stopPropagation(),K(B)},className:"btn btn-sm",style:{backgroundColor:`${F}20`,color:F,border:`1px solid ${F}40`},children:"✏️"}),n.jsx("button",{onClick:R=>{R.stopPropagation(),en(B)},className:"btn btn-sm btn-outline-danger",children:"🗑️"})]})})]},B)})})]})}),n.jsxs("div",{className:`mt-4 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:[n.jsx("h6",{className:"mb-3",style:{fontSize:"1.2rem",fontWeight:"700",color:o?"#e2e8f0":"#2d3748"},children:"💼 Portfolio Summary"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"🚀 Total Assets"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745",fontSize:"1.5rem"},children:N.length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"💰 Portfolio Value"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#17a2b8",fontSize:"1.2rem"},children:l(ie)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"📊 Avg. Performance"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#ffc107",fontSize:"1.2rem"},children:N.length>0?(N.reduce((j,B)=>j+pn(),0)/N.length).toFixed(2)+"%":"0.0%"})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"🎯 Diversity Score"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#dc3545",fontSize:"1.2rem"},children:[N.length>0?Math.min(N.length*20,100):0,"%"]})]})]})]})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"🎯 Goals Progress"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Goal Tracking Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${Ve==="cards"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ae("cards"),title:"Card View",children:"🎴"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ve==="list"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ae("list"),title:"List View",children:"📋"})]}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ee?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>yt(!Ee),title:Ee?"Hide Goals Chart":"Show Goals Chart",children:Ee?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${q?"btn-warning":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ve(!q),title:q?"Disable Animations":"Enable Animations",children:q?"🎬":"⏸️"})]})]}),Ee&&p.length>0&&n.jsxs("div",{className:"mb-4",style:{height:"300px",position:"relative"},children:[n.jsx(ri,{data:nr,options:rr}),ue&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${Gt(ue.saved/ue.target*100)}`},children:[n.jsxs("strong",{children:[Nn(ue.saved/ue.target*100)," Selected: ",ue.name]}),n.jsx("br",{}),n.jsxs("small",{children:["Progress: ",(ue.saved/ue.target*100).toFixed(1),"% • Saved: $",ue.saved.toFixed(2)," • Target: $",ue.target.toFixed(2)]})]})]}),p.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"🎯"}),n.jsx("h5",{className:"text-muted",children:"No Goals Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start setting financial goals to track your progress"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/goals"),children:"➕ Add Your First Goal"})]}):n.jsxs(n.Fragment,{children:[Ve==="cards"&&n.jsx("div",{className:"row",children:p.map((j,B)=>{const F=j.saved/j.target*100,J=Gt(F),Ce=(ue==null?void 0:ue.id)===j.id;return n.jsx("div",{className:"col-md-6 col-lg-4 mb-4",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:q?"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)":"none",borderLeft:`5px solid ${J}`,transform:Ce?"scale(1.08) rotate(1deg)":"scale(1)",boxShadow:Ce?`0 12px 35px ${J}40`:"0 4px 15px rgba(0,0,0,0.1)",background:Ce?o?`linear-gradient(135deg, #2d3748 0%, ${J}20 100%)`:`linear-gradient(135deg, #f8f9fa 0%, ${J}15 100%)`:void 0},onClick:()=>Ne(Ce?null:j),onMouseEnter:Te=>{q&&!Ce&&(Te.currentTarget.style.transform="translateY(-8px) scale(1.02)",Te.currentTarget.style.boxShadow=`0 8px 25px ${J}30`)},onMouseLeave:Te=>{q&&(Te.currentTarget.style.transform=Ce?"scale(1.08) rotate(1deg)":"scale(1)",Te.currentTarget.style.boxShadow=Ce?`0 12px 35px ${J}40`:"0 4px 15px rgba(0,0,0,0.1)")},children:n.jsxs("div",{className:"card-body p-4",children:[n.jsx("div",{className:"d-flex justify-content-between align-items-start mb-3",children:n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("h6",{className:"card-title mb-1 d-flex align-items-center",style:{color:J},children:[n.jsx("span",{className:"me-2",style:{fontSize:"1.5rem"},children:Nn(F,j.category)}),j.name]}),n.jsx("small",{className:`badge ${F>=100?"bg-success":F>=50?"bg-warning":"bg-danger"}`,children:Bn(F)})]})}),n.jsx("div",{className:"d-flex justify-content-center mb-3",children:n.jsxs("div",{style:{width:100,height:100,position:"relative"},children:[n.jsx(Cd,{value:F,strokeWidth:8,styles:Ed({textColor:o?"white":"black",pathColor:J,trailColor:o?"#4a5568":"#e2e8f0",pathTransitionDuration:q?1.5:0,pathTransition:q?"stroke-dashoffset 1.5s ease-in-out":"none"})}),n.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"14px",fontWeight:"bold",color:J},children:[F.toFixed(1),"%"]})]})}),n.jsx("div",{className:"text-center",children:n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Saved"}),n.jsxs("div",{style:{color:J,fontWeight:"bold"},children:["$",j.saved.toFixed(2)]})]}),n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Target"}),n.jsxs("div",{style:{color:J,fontWeight:"bold"},children:["$",j.target.toFixed(2)]})]})]})}),n.jsxs("div",{className:"mt-3",children:[n.jsx("div",{className:"progress",style:{height:"8px",borderRadius:"10px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(F,100)}%`,backgroundColor:J,borderRadius:"10px",transition:q?"width 2s ease-out":"none",background:`linear-gradient(90deg, ${J} 0%, ${J}80 100%)`}})}),n.jsxs("div",{className:"d-flex justify-content-between mt-1",children:[n.jsxs("small",{style:{color:J},children:["$",(j.target-j.saved).toFixed(2)," remaining"]}),n.jsx("small",{style:{color:J},children:F>=100?"🎉 Complete!":`${(100-F).toFixed(1)}% to go`})]})]}),Ce&&n.jsxs("div",{className:"mt-3 p-3 rounded",style:{backgroundColor:`${J}15`,border:`1px solid ${J}40`,animation:q?"fadeIn 0.3s ease-in":"none"},children:[n.jsx("h6",{style:{color:J},children:"📊 Goal Analytics"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Monthly Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:J},children:["$",((j.target-j.saved)/12).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Weekly Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:J},children:["$",((j.target-j.saved)/52).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Daily Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:J},children:["$",((j.target-j.saved)/365).toFixed(2)]})]})]})]})]})})},B)})}),Ve==="list"&&n.jsx("div",{className:"space-y-3",children:p.map((j,B)=>{const F=j.saved/j.target*100,J=Gt(F),Ce=(ue==null?void 0:ue.id)===j.id;return n.jsx("div",{className:`p-4 rounded-lg border ${o?"border-secondary":"border-light"} mb-3`,style:{backgroundColor:Ce?`${J}10`:"transparent",borderLeft:`5px solid ${J}`,cursor:"pointer",transition:q?"all 0.3s ease":"none"},onClick:()=>Ne(Ce?null:j),children:n.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[n.jsxs("div",{className:"d-flex align-items-center flex-grow-1",children:[n.jsx("span",{style:{fontSize:"2rem",marginRight:"1rem"},children:Nn(F,j.category)}),n.jsxs("div",{className:"flex-grow-1",children:[n.jsx("h6",{className:"mb-1",style:{color:J},children:j.name}),n.jsxs("div",{className:"d-flex align-items-center",children:[n.jsx("div",{className:"progress flex-grow-1 me-3",style:{height:"8px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(F,100)}%`,backgroundColor:J,transition:q?"width 1.5s ease-out":"none"}})}),n.jsxs("small",{style:{color:J,minWidth:"60px"},children:[F.toFixed(1),"%"]})]})]})]}),n.jsxs("div",{className:"text-end ms-3",children:[n.jsxs("div",{style:{color:J,fontWeight:"bold"},children:["$",j.saved.toFixed(2)," / $",j.target.toFixed(2)]}),n.jsxs("small",{className:"text-muted",children:["$",(j.target-j.saved).toFixed(2)," remaining"]})]})]})},B)})}),n.jsxs("div",{className:`mt-4 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:[n.jsx("h6",{className:"mb-3",style:{fontSize:"1.2rem",fontWeight:"700",color:o?"#e2e8f0":"#2d3748"},children:"📈 Goals Summary"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"🎯 Total Goals"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745",fontSize:"1.5rem"},children:p.length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"✅ Completed"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#17a2b8",fontSize:"1.5rem"},children:p.filter(j=>j.saved/j.target*100>=100).length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"💰 Total Saved"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#ffc107",fontSize:"1.2rem"},children:["$",et.toFixed(2)]})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"🎪 Total Target"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#dc3545",fontSize:"1.2rem"},children:["$",p.reduce((j,B)=>j+B.target,0).toFixed(2)]})]})]})]})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"💼 Financial Overview"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Summary Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${de?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>H(!de),title:de?"Hide Chart":"Show Chart",children:de?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Q?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>le(!Q),title:Q?"Disable Animations":"Enable Animations",children:Q?"🎬":"⏸️"})]})]}),de&&n.jsxs("div",{className:"mb-4",style:{height:"300px",position:"relative"},children:[n.jsx(ri,{data:Ge,options:Yt}),U&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${Lt(U)}`},children:[n.jsxs("strong",{children:[fn(U)," Selected: ",U]}),n.jsx("br",{}),n.jsx("small",{children:"Click on different segments to explore each category!"})]})]}),n.jsx("div",{className:"row",children:[{name:"Budget",value:b,trend:"up"},{name:"Balance",value:i,trend:"stable"},{name:"X-penses",value:r,trend:"down"},{name:"Goals (saved)",value:et,trend:"up"},{name:"Investments",value:ie,trend:"up"},{name:"Overview Total",value:tt,trend:tt>0?"up":"down"}].map((j,B)=>n.jsx("div",{className:"col-md-6 col-lg-4 mb-3",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:Q?"all 0.3s ease":"none",borderLeft:`4px solid ${Lt(j.name)}`,transform:U===j.name?"scale(1.05)":"scale(1)",boxShadow:U===j.name?"0 8px 25px rgba(0,123,255,0.3)":"0 2px 10px rgba(0,0,0,0.1)"},onClick:()=>ye(U===j.name?null:j.name),onMouseEnter:F=>{Q&&(F.currentTarget.style.transform="translateY(-2px)")},onMouseLeave:F=>{Q&&(F.currentTarget.style.transform=U===j.name?"scale(1.05)":"scale(1)")},children:n.jsxs("div",{className:"card-body p-3",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("h6",{className:"card-title mb-1",style:{color:Lt(j.name)},children:[fn(j.name)," ",j.name]}),n.jsx("h4",{className:"mb-1",style:{color:Lt(j.name)},children:l(j.value)}),n.jsx("small",{className:`text-${j.trend==="up"?"success":j.trend==="down"?"danger":"muted"}`,children:j.trend==="up"?"📈 Positive":j.trend==="down"?"📉 Negative":"➡️ Stable"})]}),n.jsx("div",{className:"text-end",children:n.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",backgroundColor:`${Lt(j.name)}20`,border:`2px solid ${Lt(j.name)}30`},children:n.jsx("span",{style:{fontSize:"20px"},children:fn(j.name)})})})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"progress",style:{height:"4px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(Math.abs(j.value)/Math.max(b,i,r,ie,et)*100,100)}%`,backgroundColor:Lt(j.name),transition:Q?"width 1s ease":"none"}})})}),U===j.name&&n.jsx("div",{className:"mt-2 p-2 rounded",style:{backgroundColor:`${Lt(j.name)}10`},children:n.jsxs("small",{children:[n.jsx("strong",{children:"Details:"}),n.jsx("br",{}),j.name==="Budget"&&"Total budget allocated across all categories",j.name==="Balance"&&"Current available balance in accounts",j.name==="X-penses"&&"Total expenses recorded in transactions",j.name==="Goals (saved)"&&"Amount saved towards financial goals",j.name==="Investments"&&"Total value of crypto investments",j.name==="Overview Total"&&"Net financial position calculation"]})})]})})},B))}),n.jsx("div",{className:`mt-3 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"💰 Total Assets"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745"},children:l(b+i+et+ie)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"💸 Total Spent"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#dc3545"},children:l(r)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"📊 Net Worth"}),n.jsx("br",{}),n.jsx("span",{style:{color:tt>=0?"#28a745":"#dc3545"},children:l(tt)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"🎯 Savings Rate"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#ffc107"},children:[b>0?(et/b*100).toFixed(1):"0.0","%"]})]})]})})]})]})})]})}const Tv=({darkMode:a,transactions:i,setTransactions:r,totalAmount:o,setTotalAmount:l,editIndex:d,setEditIndex:u,editTransaction:h,setEditTransaction:p,formatCurrency:x,reminderDate:b,setSuccessMessage:y,successMessage:O,parseDate:W})=>{const[I,k]=S.useState(!1),[L,V]=S.useState(null),[D,N]=S.useState(""),[C,ne]=S.useState("date"),[ie,me]=S.useState("desc"),[re,fe]=S.useState(""),[xe,A]=S.useState(null);S.useEffect(()=>{console.log("TRANSACTIONS COMPONENT"),console.log("Fetching transactions..."),k(!0),bt.get("/transactions").then(H=>{console.log("Fetched transactions:",H.data),r(H.data)}).catch(H=>console.log("Error fetching transactions",H)).finally(()=>k(!1))},[]),S.useEffect(()=>{const H=i.reduce((Q,le)=>Q+parseFloat(le.amount),0);l(H)},[i]);const X=H=>new Date(H).toISOString().split("T")[0],se=H=>{if(!H)return"";const Q=new Date(H),le=String(Q.getMonth()+1).padStart(2,"0"),ue=String(Q.getDate()).padStart(2,"0"),Ne=Q.getFullYear();return`${le}-${ue}-${Ne}`},P=H=>{const Q=i[H];k(!0),bt.delete(`/transactions/${Q.id}`).then(()=>{const le=i.filter((ue,Ne)=>Ne!==H);r(le),A(H),setTimeout(()=>A(null),500),y("🗑️ Transaction deleted successfully!"),setTimeout(()=>y(""),3e3)}).catch(le=>console.error("Error deleting transaction:",le)).finally(()=>{k(!1),V(null)})},Z=H=>{V(H)},oe=H=>{const{name:Q,value:le}=H.target;p({...h,[Q]:le||""})},Pe=async H=>{let Q;try{Q=X(h.date)}catch{console.error("Invalid date format:",h.date);return}const le={...h,date:Q};k(!0);try{await bt.put(`/transactions/${i[H].id}`,le);const ue=i.map((Ne,Ve)=>Ve===H?{...Ne,...le}:Ne);r(ue),u(null),p({category:"",date:"",description:"",amount:""}),y("✅ Transaction updated successfully!"),setTimeout(()=>y(""),3e3)}catch(ue){console.error("Error updating transaction:",ue),y("❌ Failed to update transaction. Please try again."),setTimeout(()=>y(""),3e3)}finally{k(!1)}},$e=(H,Q,le)=>{const ue=new Date,Ne=new Date(Q)-ue;Ne>0?(setTimeout(()=>{alert(`🔔 Reminder: You need to make a payment of ${le} for ${H.description} on ${H.date}`)},Ne),y(`⏰ Payment Reminder set for ${H.description} on ${Q}`),setTimeout(()=>y(""),5e3)):alert("⚠️ Reminder date must be in the future.")},be=H=>{const Q=prompt("📅 Enter the reminder date (MM-DD-YYYY):"),le=prompt("💰 Enter the amount that needs to be paid:");Q&&le&&$e(H,Q,le)},U=()=>{let H=i.filter(Q=>{const le=Q.description.toLowerCase().includes(D.toLowerCase())||Q.category.toLowerCase().includes(D.toLowerCase()),ue=re===""||Q.category===re;return le&&ue});return H.sort((Q,le)=>{let ue=Q[C],Ne=le[C];return C==="amount"?(ue=parseFloat(ue),Ne=parseFloat(Ne)):C==="date"&&(ue=new Date(ue),Ne=new Date(Ne)),ie==="asc"?ue>Ne?1:-1:ue<Ne?1:-1}),H},ye=()=>[...new Set(i.map(H=>H.category))],de=H=>({Cable:"📺","Child Support":"👶",Clothes:"👔",Debt:"💳",Entertainment:"🎬",Food:"🍕",Housing:"🏠",Insurance:"🛡️","Medical & Healthcare":"🏥",Mortgage:"🏘️","Personal Care":"💄",Pets:"🐕",Restaurants:"🍽️","Savings & Investments":"💰",Shopping:"🛍️",Transportation:"🚗",Utilities:"⚡"})[H]||"📄";return n.jsxs("div",{className:"transactions-container",children:[n.jsx("style",{jsx:!0,children:`
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
            `}),n.jsxs("div",{className:"transactions-header",children:[n.jsx("h5",{children:"💼 Transaction History"}),n.jsx("p",{className:"transactions-subtitle",children:"Track your financial journey with style"})]}),O&&n.jsx("div",{className:"success-alert",children:O}),n.jsxs("div",{className:"controls-section",children:[n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"🔍 Search Transactions"}),n.jsx("input",{type:"text",className:"control-input",placeholder:"Search by description or category...",value:D,onChange:H=>N(H.target.value)})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"📂 Filter by Category"}),n.jsxs("select",{className:"control-input",value:re,onChange:H=>fe(H.target.value),children:[n.jsx("option",{value:"",children:"All Categories"}),ye().map(H=>n.jsxs("option",{value:H,children:[de(H)," ",H]},H))]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"🔄 Sort By"}),n.jsxs("select",{className:"control-input",value:C,onChange:H=>ne(H.target.value),children:[n.jsx("option",{value:"date",children:"📅 Date"}),n.jsx("option",{value:"amount",children:"💰 Amount"}),n.jsx("option",{value:"category",children:"📂 Category"}),n.jsx("option",{value:"description",children:"📝 Description"})]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"⬆️⬇️ Order"}),n.jsxs("select",{className:"control-input",value:ie,onChange:H=>me(H.target.value),children:[n.jsx("option",{value:"desc",children:"Descending"}),n.jsx("option",{value:"asc",children:"Ascending"})]})]})]}),n.jsx("div",{className:"table-container",children:I?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading transactions..."})]}):i.length===0?n.jsxs("div",{className:"no-transactions",children:["📊 No Transactions Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start tracking your expenses by adding your first transaction."})]}):n.jsx("div",{className:"table-responsive",children:n.jsxs("table",{className:"enhanced-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"📝 Description"}),n.jsx("th",{children:"📂 Category"}),n.jsx("th",{children:"📅 Date"}),n.jsx("th",{children:"💰 Amount"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsxs("tbody",{children:[U().map((H,Q)=>{const le=i.findIndex(ue=>ue.id===H.id);return n.jsx("tr",{className:`table-row ${xe===le?"animate-delete":""}`,children:d===le?n.jsxs(n.Fragment,{children:[n.jsx("td",{children:n.jsx("input",{type:"text",name:"description",value:h.description,onChange:oe,className:"edit-input",placeholder:"Enter description..."})}),n.jsx("td",{children:n.jsx("input",{type:"text",name:"category",value:h.category,onChange:oe,className:"edit-input",placeholder:"Enter category..."})}),n.jsx("td",{children:n.jsx("input",{type:"date",name:"date",value:h.date,onChange:oe,className:"edit-input"})}),n.jsx("td",{children:n.jsx("input",{type:"number",name:"amount",value:h.amount,onChange:oe,className:"edit-input",step:"0.01",min:"0",placeholder:"0.00"})}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>Pe(le),className:"btn-modern btn-save",disabled:I,children:"✅ Save"}),n.jsx("button",{onClick:()=>u(null),className:"btn-modern btn-cancel",children:"❌ Cancel"})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("td",{"data-label":"Description",children:H.description||"No Description"}),n.jsx("td",{"data-label":"Category",children:n.jsxs("div",{className:"category-cell",children:[n.jsx("span",{children:de(H.category)}),n.jsx("span",{children:H.category})]})}),n.jsx("td",{"data-label":"Date",children:se(W(H.date))}),n.jsx("td",{"data-label":"Amount",className:"amount-cell",children:x(H.amount)}),n.jsx("td",{"data-label":"Actions",children:L===le?n.jsxs("div",{className:"delete-confirm",children:[n.jsx("div",{className:"confirm-text",children:"⚠️ Confirm deletion?"}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>P(le),className:"btn-modern btn-delete",disabled:I,children:"🗑️ Yes, Delete"}),n.jsx("button",{onClick:()=>V(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>{u(le),p({...H,date:X(H.date)})},className:"btn-modern btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>Z(le),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>be(H),className:"btn-modern btn-reminder",children:"⏰ Remind"})]})})]})},H.id||Q)}),n.jsxs("tr",{className:"total-row",children:[n.jsx("td",{colSpan:"4",children:n.jsx("strong",{children:"💰 Total Expenses:"})}),n.jsx("td",{className:"amount-cell",children:n.jsx("strong",{children:x(o)})})]})]})]})})}),n.jsx("div",{className:"mobile-cards",children:I?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading transactions..."})]}):i.length===0?n.jsxs("div",{className:"no-transactions",children:["📊 No Transactions Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start tracking your expenses by adding your first transaction."})]}):n.jsxs(n.Fragment,{children:[U().map((H,Q)=>{const le=i.findIndex(ue=>ue.id===H.id);return n.jsx("div",{className:`transaction-card ${xe===le?"animate-delete":""}`,children:d===le?n.jsxs("div",{className:"edit-form",children:[n.jsx("input",{type:"text",name:"description",value:h.description,onChange:oe,className:"edit-input",placeholder:"Enter description..."}),n.jsx("input",{type:"text",name:"category",value:h.category,onChange:oe,className:"edit-input",placeholder:"Enter category..."}),n.jsx("input",{type:"date",name:"date",value:h.date,onChange:oe,className:"edit-input"}),n.jsx("input",{type:"number",name:"amount",value:h.amount,onChange:oe,className:"edit-input",step:"0.01",min:"0",placeholder:"0.00"}),n.jsxs("div",{className:"edit-actions",children:[n.jsx("button",{onClick:()=>Pe(le),className:"btn-modern btn-save",disabled:I,children:"✅ Save"}),n.jsx("button",{onClick:()=>u(null),className:"btn-modern btn-cancel",children:"❌ Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:H.description||"No Description"}),n.jsx("div",{className:"card-amount",children:x(H.amount)})]}),n.jsxs("div",{className:"card-details",children:[n.jsx("span",{className:"card-label",children:"📂 Category:"}),n.jsxs("div",{className:"card-value card-category",children:[n.jsx("span",{children:de(H.category)}),n.jsx("span",{children:H.category})]}),n.jsx("span",{className:"card-label",children:"📅 Date:"}),n.jsx("span",{className:"card-value",children:se(W(H.date))})]}),n.jsx("div",{className:"card-actions",children:L===le?n.jsxs("div",{className:"delete-confirm-card",children:[n.jsx("div",{className:"confirm-text",children:"⚠️ Confirm deletion?"}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>P(le),className:"btn-modern btn-delete",disabled:I,children:"🗑️ Yes, Delete"}),n.jsx("button",{onClick:()=>V(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>{u(le),p({...H,date:X(H.date)})},className:"btn-modern btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>Z(le),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>be(H),className:"btn-modern btn-reminder",children:"⏰ Remind"})]})})]})},H.id||Q)}),n.jsxs("div",{className:"total-card",children:[n.jsx("div",{className:"total-label",children:"💰 Total Expenses:"}),n.jsx("div",{className:"total-amount",children:x(o)})]})]})})]})},Ov=({newGoalName:a,setNewGoalName:i,newGoalAmount:r,setNewGoalAmount:o,goals:l,setGoals:d,inputAmounts:u,setInputAmounts:h,validated:p,setValidated:x,editingGoalId:b,setEditingGoalId:y,editedGoalName:O,setEditedGoalName:W,formatCurrency:I,darkMode:k})=>{const[L,V]=S.useState(!1),[D,N]=S.useState(""),[C,ne]=S.useState(null),[ie,me]=S.useState(null),[re,fe]=S.useState({});S.useEffect(()=>{console.log("GOALS COMPONENT"),console.log("Fetching goals from backend"),V(!0),fetch(Fn("/goals")).then(U=>U.json()).then(U=>{console.log("Retrieved goals from backend:",U),d(U)}).catch(U=>console.error("Error fetching goals:",U)).finally(()=>V(!1))},[]);const xe=U=>{if(U.preventDefault(),x(!0),a&&r){V(!0);const ye={name:a,target:Number(r),saved:0};console.log("Adding new goal:",ye),fetch(Fn("/goals"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ye)}).then(de=>de.json()).then(de=>{d([...l,de]),i(""),o(""),x(!1),N("🎯 Goal added successfully!"),setTimeout(()=>N(""),3e3)}).catch(de=>{console.error("Error adding goal:",de),N("❌ Failed to add goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>V(!1))}},A=U=>{const ye=Number(u[U]||0);if(ye<=0){N("⚠️ Please enter a valid amount greater than 0"),setTimeout(()=>N(""),3e3);return}h({...u,[U]:""}),V(!0);const de=l.map(Q=>{if(Q.id===U){const le=Q.saved+ye,ue=Q.saved>=Q.target,Ne=le>=Q.target;return!ue&&Ne&&(me(U),setTimeout(()=>me(null),3e3),N("🎉 Congratulations! Goal completed!"),setTimeout(()=>N(""),5e3)),{...Q,saved:le}}return Q});d(de),fe({...re,[U]:!0}),setTimeout(()=>{fe({...re,[U]:!1})},1e3);const H=de.find(Q=>Q.id===U);fetch(Fn(`/goals/${U}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)}).then(()=>{N("💰 Amount added successfully!"),setTimeout(()=>N(""),3e3)}).catch(Q=>{console.error("Error updating goal:",Q),N("❌ Failed to update goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>V(!1))},X=U=>{h({...u,[U]:""}),V(!0);const ye=l.map(H=>H.id===U?{...H,saved:0}:H);d(ye);const de=ye.find(H=>H.id===U);fetch(Fn(`/goals/${U}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(de)}).then(()=>{N("🔄 Goal progress reset successfully!"),setTimeout(()=>N(""),3e3)}).catch(H=>{console.error("Error resetting goal amount:",H),N("❌ Failed to reset goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>V(!1))},se=U=>{V(!0);const ye=l.filter(de=>de.id!==U);d(ye),fetch(Fn(`/goals/${U}`),{method:"DELETE"}).then(()=>{N("🗑️ Goal deleted successfully!"),setTimeout(()=>N(""),3e3)}).catch(de=>{console.error("Error deleting goal:",de),N("❌ Failed to delete goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>{V(!1),ne(null)})},P=U=>{ne(U)},Z=(U,ye)=>{y(U),W(ye)},oe=U=>{if(!O.trim()){N("⚠️ Goal name cannot be empty"),setTimeout(()=>N(""),3e3);return}V(!0);const ye=l.map(de=>de.id===U?{...de,name:O}:de);d(ye),fetch(Fn(`/goals/${U}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:O})}).then(de=>{if(!de.ok)throw new Error("Network response was not ok");return de.json()}).then(de=>{console.log("Updated goal:",de),y(null),W(""),N("✅ Goal updated successfully!"),setTimeout(()=>N(""),3e3)}).catch(de=>{console.error("Error updating goal:",de),N("❌ Failed to update goal. Please try again."),setTimeout(()=>N(""),3e3)}).finally(()=>V(!1))},Pe=()=>{y(null),W("")},$e=U=>U>=100?"#10b981":U>=75?"#f59e0b":U>=50?"#3b82f6":U>=25?"#8b5cf6":"#ef4444",be=U=>{const ye=U.saved/U.target*100;return ye>=100?"🎉 Goal Completed!":ye>=75?"🔥 Almost there!":ye>=50?"💪 Halfway there!":ye>=25?"🚀 Great start!":"🎯 Let's begin!"};return n.jsxs("div",{className:"goals-container",children:[n.jsx("style",{jsx:!0,children:`
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
                    background: ${k?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 20px;
                    padding: 30px;
                    margin-bottom: 30px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${k?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .form-subtitle {
                    color: ${k?"#a0aec0":"#718096"};
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
                    border: 2px solid ${k?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${k?"#2d3748":"#ffffff"};
                    color: ${k?"#e2e8f0":"#2d3748"};
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
                    color: ${k?"#a0aec0":"#718096"};
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
                    background: ${k?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)"};
                    border-radius: 20px;
                    padding: 30px;
                    margin-bottom: 25px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${k?"2px solid #4a5568":"2px solid #e2e8f0"};
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
                    color: ${k?"#e2e8f0":"#2d3748"};
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
                    color: ${k?"#e2e8f0":"#2d3748"};
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
                    background: ${k?"#4a5568":"#f7fafc"};
                    padding: 15px;
                    border-radius: 12px;
                    border: ${k?"1px solid #6b7280":"1px solid #e2e8f0"};
                }

                .stat-label {
                    font-size: 0.9rem;
                    color: ${k?"#a0aec0":"#718096"};
                    margin-bottom: 5px;
                    font-weight: 600;
                }

                .stat-value {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: ${k?"#e2e8f0":"#2d3748"};
                }

                .amount-input {
                    width: 100%;
                    padding: 15px 20px;
                    border: 2px solid ${k?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${k?"#2d3748":"#ffffff"};
                    color: ${k?"#e2e8f0":"#2d3748"};
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
                    background: ${k?"#2d3748":"#ffffff"};
                    color: ${k?"#e2e8f0":"#2d3748"};
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
            `}),n.jsxs("div",{className:"goals-header",children:[n.jsx("h5",{children:"🎯 Financial Goals"}),n.jsx("p",{className:"goals-subtitle",children:"Turn your dreams into achievable targets"})]}),D&&n.jsx("div",{className:"success-message",children:D}),n.jsxs("div",{className:"form-container",children:[n.jsx("div",{className:"form-subtitle",children:"✨ Create a new financial goal to track your progress"}),n.jsxs("form",{noValidate:!0,onSubmit:xe,className:`needs-validation ${p?"was-validated":""}`,children:[n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",id:"newGoalName",value:a,onChange:U=>i(U.target.value),className:`form-input ${p&&!a?"is-invalid":""}`,placeholder:"🎯 Goal Name (e.g., New Car, Vacation)",required:!0}),n.jsx("div",{className:"invalid-feedback",children:"Please provide a goal name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"number",id:"newGoalAmount",value:r,onChange:U=>o(U.target.value),className:`form-input ${p&&!r?"is-invalid":""}`,placeholder:"💰 Target Amount ($)",min:"0",step:"0.01",required:!0}),n.jsx("div",{className:"invalid-feedback",children:"Please provide a goal amount"})]})]}),n.jsxs("button",{type:"submit",className:"submit-button",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"",L?"Adding Goal...":"🚀 Create Goal"]})]})]}),n.jsx("div",{className:"goals-list-header",children:"💎 YOUR FINANCIAL JOURNEY"}),L&&l.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[n.jsx("div",{className:"loading-spinner",style:{width:"40px",height:"40px",border:"4px solid #f3f3f3",borderTop:"4px solid #667eea"}}),n.jsx("p",{children:"Loading your goals..."})]}):l.length===0?n.jsxs("div",{className:"no-goals",children:["🎯 No Goals Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start your financial journey by creating your first goal above."})]}):l.map(U=>{const ye=U.saved/U.target*100,de=$e(ye);return n.jsx("div",{className:`goal-card ${ie===U.id?"celebrate":""}`,children:b===U.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",value:O,onChange:H=>W(H.target.value),className:"edit-input",placeholder:"Enter new goal name..."}),n.jsxs("div",{className:"edit-actions",children:[n.jsxs("button",{onClick:()=>oe(U.id),className:"btn-modern btn-save",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"","✅ Save"]}),n.jsx("button",{onClick:Pe,className:"btn-modern btn-cancel",children:"❌ Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"goal-header",children:[n.jsx("div",{className:"goal-title",children:U.name}),n.jsxs("div",{className:"goal-target",children:["Target: ",I(U.target)]})]}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:`progress-circle ${re[U.id]?"animate":""}`,children:n.jsx(Cd,{value:Math.min(ye,100),strokeWidth:8,styles:Ed({textColor:k?"white":"black",pathColor:de,trailColor:k?"#4a5568":"#e2e8f0",pathTransitionDuration:1.5})})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("div",{className:"progress-percentage",style:{color:de},children:[ye.toFixed(1),"%"]}),n.jsx("div",{className:"progress-message",style:{color:de},children:be(U)})]})]}),n.jsxs("div",{className:"goal-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-label",children:"💰 Saved"}),n.jsx("div",{className:"stat-value",style:{color:"#38a169"},children:I(U.saved)})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-label",children:"🎯 Remaining"}),n.jsx("div",{className:"stat-value",style:{color:"#f59e0b"},children:I(Math.max(0,U.target-U.saved))})]})]}),n.jsx("input",{type:"number",id:`inputAmount-${U.id}`,name:`inputAmount-${U.id}`,value:u[U.id]||"",onChange:H=>h({...u,[U.id]:H.target.value}),className:"amount-input",placeholder:"💵 Enter amount to add...",min:"0",step:"0.01"}),C===U.id?n.jsxs("div",{className:"delete-confirm",children:[n.jsxs("div",{className:"confirm-text",children:['⚠️ Are you sure you want to delete "',U.name,'"?']}),n.jsxs("div",{className:"confirm-actions",children:[n.jsxs("button",{onClick:()=>se(U.id),className:"btn-modern btn-delete",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"","🗑️ Yes, Delete"]}),n.jsx("button",{onClick:()=>ne(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>A(U.id),className:"btn-modern btn-add",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"","💰 Add Amount"]}),n.jsxs("button",{onClick:()=>X(U.id),className:"btn-modern btn-reset",disabled:L,children:[L?n.jsx("span",{className:"loading-spinner"}):"","🔄 Reset"]}),n.jsx("button",{onClick:()=>P(U.id),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>Z(U.id,U.name),className:"btn-modern btn-edit",children:"✏️ Edit"})]})]})},U.id)})]})};var la={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Pv=la.exports,_d;function $v(){return _d||(_d=1,function(a,i){(function(){var r,o="4.18.1",l=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",h="Invalid `variable` option passed into `_.template`",p="Invalid `imports` option passed into `_.template`",x="__lodash_hash_undefined__",b=500,y="__lodash_placeholder__",O=1,W=2,I=4,k=1,L=2,V=1,D=2,N=4,C=8,ne=16,ie=32,me=64,re=128,fe=256,xe=512,A=30,X="...",se=800,P=16,Z=1,oe=2,Pe=3,$e=1/0,be=9007199254740991,U=17976931348623157e292,ye=NaN,de=4294967295,H=de-1,Q=de>>>1,le=[["ary",re],["bind",V],["bindKey",D],["curry",C],["curryRight",ne],["flip",xe],["partial",ie],["partialRight",me],["rearg",fe]],ue="[object Arguments]",Ne="[object Array]",Ve="[object AsyncFunction]",ae="[object Boolean]",q="[object Date]",ve="[object DOMException]",Ee="[object Error]",yt="[object Function]",We="[object GeneratorFunction]",Xe="[object Map]",qe="[object Number]",qt="[object Null]",Fe="[object Object]",jt="[object Promise]",Ye="[object Proxy]",ot="[object RegExp]",et="[object Set]",tt="[object String]",je="[object Symbol]",rt="[object Undefined]",ht="[object WeakMap]",lt="[object WeakSet]",gt="[object ArrayBuffer]",Tt="[object DataView]",vt="[object Float32Array]",en="[object Float64Array]",K="[object Int8Array]",te="[object Int16Array]",he="[object Int32Array]",Re="[object Uint8Array]",He="[object Uint8ClampedArray]",ct="[object Uint16Array]",Be="[object Uint32Array]",Ge=/\b__p \+= '';/g,Yt=/\b(__p \+=) '' \+/g,Lt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,fn=/&(?:amp|lt|gt|quot|#39);/g,Gt=/[&<>"']/g,Nn=RegExp(fn.source),Bn=RegExp(Gt.source),nr=/<%-([\s\S]+?)%>/g,rr=/<%([\s\S]+?)%>/g,tn=/<%=([\s\S]+?)%>/g,nn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pn=/^\w*$/,wn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Cn=/[\\^$.*+?()[\]{}|]/g,ar=RegExp(Cn.source),$t=/^\s+/,j=/\s/,B=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,F=/\{\n\/\* \[wrapped with (.+)\] \*/,J=/,? & /,Ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Te=/[()=,{}\[\]\/\s]/,Me=/\\(\\)?/g,R=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Dt=/\w*$/,hn=/^[-+]0x[0-9a-f]+$/i,ho=/^0b[01]+$/i,Ni=/^\[object .+?Constructor\]$/,Nu=/^0o[0-7]+$/i,Cu=/^(?:0|[1-9]\d*)$/,Eu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ga=/($^)/,Au=/['\n\r\u2028\u2029\\]/g,ma="\\ud800-\\udfff",Ru="\\u0300-\\u036f",Tu="\\ufe20-\\ufe2f",Ou="\\u20d0-\\u20ff",go=Ru+Tu+Ou,mo="\\u2700-\\u27bf",xo="a-z\\xdf-\\xf6\\xf8-\\xff",Pu="\\xac\\xb1\\xd7\\xf7",$u="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ku="\\u2000-\\u206f",Iu=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",bo="A-Z\\xc0-\\xd6\\xd8-\\xde",yo="\\ufe0e\\ufe0f",vo=Pu+$u+ku+Iu,Ci="['’]",Fu="["+ma+"]",wo="["+vo+"]",xa="["+go+"]",jo="\\d+",Lu="["+mo+"]",So="["+xo+"]",_o="[^"+ma+vo+jo+mo+xo+bo+"]",Ei="\\ud83c[\\udffb-\\udfff]",Du="(?:"+xa+"|"+Ei+")",No="[^"+ma+"]",Ai="(?:\\ud83c[\\udde6-\\uddff]){2}",Ri="[\\ud800-\\udbff][\\udc00-\\udfff]",jr="["+bo+"]",Co="\\u200d",Eo="(?:"+So+"|"+_o+")",Uu="(?:"+jr+"|"+_o+")",Ao="(?:"+Ci+"(?:d|ll|m|re|s|t|ve))?",Ro="(?:"+Ci+"(?:D|LL|M|RE|S|T|VE))?",To=Du+"?",Oo="["+yo+"]?",Bu="(?:"+Co+"(?:"+[No,Ai,Ri].join("|")+")"+Oo+To+")*",zu="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Wu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Po=Oo+To+Bu,Hu="(?:"+[Lu,Ai,Ri].join("|")+")"+Po,qu="(?:"+[No+xa+"?",xa,Ai,Ri,Fu].join("|")+")",Yu=RegExp(Ci,"g"),Gu=RegExp(xa,"g"),Ti=RegExp(Ei+"(?="+Ei+")|"+qu+Po,"g"),Vu=RegExp([jr+"?"+So+"+"+Ao+"(?="+[wo,jr,"$"].join("|")+")",Uu+"+"+Ro+"(?="+[wo,jr+Eo,"$"].join("|")+")",jr+"?"+Eo+"+"+Ao,jr+"+"+Ro,Wu,zu,jo,Hu].join("|"),"g"),Mu=RegExp("["+Co+ma+go+yo+"]"),Ku=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ju=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Xu=-1,it={};it[vt]=it[en]=it[K]=it[te]=it[he]=it[Re]=it[He]=it[ct]=it[Be]=!0,it[ue]=it[Ne]=it[gt]=it[ae]=it[Tt]=it[q]=it[Ee]=it[yt]=it[Xe]=it[qe]=it[Fe]=it[ot]=it[et]=it[tt]=it[ht]=!1;var at={};at[ue]=at[Ne]=at[gt]=at[Tt]=at[ae]=at[q]=at[vt]=at[en]=at[K]=at[te]=at[he]=at[Xe]=at[qe]=at[Fe]=at[ot]=at[et]=at[tt]=at[je]=at[Re]=at[He]=at[ct]=at[Be]=!0,at[Ee]=at[yt]=at[ht]=!1;var Zu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Qu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ef={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},tf={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nf=parseFloat,rf=parseInt,$o=typeof ni=="object"&&ni&&ni.Object===Object&&ni,af=typeof self=="object"&&self&&self.Object===Object&&self,At=$o||af||Function("return this")(),Oi=i&&!i.nodeType&&i,ir=Oi&&!0&&a&&!a.nodeType&&a,ko=ir&&ir.exports===Oi,Pi=ko&&$o.process,rn=function(){try{var E=ir&&ir.require&&ir.require("util").types;return E||Pi&&Pi.binding&&Pi.binding("util")}catch{}}(),Io=rn&&rn.isArrayBuffer,Fo=rn&&rn.isDate,Lo=rn&&rn.isMap,Do=rn&&rn.isRegExp,Uo=rn&&rn.isSet,Bo=rn&&rn.isTypedArray;function Vt(E,z,$){switch($.length){case 0:return E.call(z);case 1:return E.call(z,$[0]);case 2:return E.call(z,$[0],$[1]);case 3:return E.call(z,$[0],$[1],$[2])}return E.apply(z,$)}function sf(E,z,$,pe){for(var Ae=-1,Ke=E==null?0:E.length;++Ae<Ke;){var St=E[Ae];z(pe,St,$(St),E)}return pe}function Mt(E,z){for(var $=-1,pe=E==null?0:E.length;++$<pe&&z(E[$],$,E)!==!1;);return E}function of(E,z){for(var $=E==null?0:E.length;$--&&z(E[$],$,E)!==!1;);return E}function zo(E,z){for(var $=-1,pe=E==null?0:E.length;++$<pe;)if(!z(E[$],$,E))return!1;return!0}function zn(E,z){for(var $=-1,pe=E==null?0:E.length,Ae=0,Ke=[];++$<pe;){var St=E[$];z(St,$,E)&&(Ke[Ae++]=St)}return Ke}function ba(E,z){var $=E==null?0:E.length;return!!$&&Sr(E,z,0)>-1}function $i(E,z,$){for(var pe=-1,Ae=E==null?0:E.length;++pe<Ae;)if($(z,E[pe]))return!0;return!1}function dt(E,z){for(var $=-1,pe=E==null?0:E.length,Ae=Array(pe);++$<pe;)Ae[$]=z(E[$],$,E);return Ae}function Wn(E,z){for(var $=-1,pe=z.length,Ae=E.length;++$<pe;)E[Ae+$]=z[$];return E}function ki(E,z,$,pe){var Ae=-1,Ke=E==null?0:E.length;for(pe&&Ke&&($=E[++Ae]);++Ae<Ke;)$=z($,E[Ae],Ae,E);return $}function lf(E,z,$,pe){var Ae=E==null?0:E.length;for(pe&&Ae&&($=E[--Ae]);Ae--;)$=z($,E[Ae],Ae,E);return $}function Ii(E,z){for(var $=-1,pe=E==null?0:E.length;++$<pe;)if(z(E[$],$,E))return!0;return!1}var cf=Fi("length");function df(E){return E.split("")}function uf(E){return E.match(Ce)||[]}function Wo(E,z,$){var pe;return $(E,function(Ae,Ke,St){if(z(Ae,Ke,St))return pe=Ke,!1}),pe}function ya(E,z,$,pe){for(var Ae=E.length,Ke=$+(pe?1:-1);pe?Ke--:++Ke<Ae;)if(z(E[Ke],Ke,E))return Ke;return-1}function Sr(E,z,$){return z===z?Sf(E,z,$):ya(E,Ho,$)}function ff(E,z,$,pe){for(var Ae=$-1,Ke=E.length;++Ae<Ke;)if(pe(E[Ae],z))return Ae;return-1}function Ho(E){return E!==E}function qo(E,z){var $=E==null?0:E.length;return $?Di(E,z)/$:ye}function Fi(E){return function(z){return z==null?r:z[E]}}function Li(E){return function(z){return E==null?r:E[z]}}function Yo(E,z,$,pe,Ae){return Ae(E,function(Ke,St,nt){$=pe?(pe=!1,Ke):z($,Ke,St,nt)}),$}function pf(E,z){var $=E.length;for(E.sort(z);$--;)E[$]=E[$].value;return E}function Di(E,z){for(var $,pe=-1,Ae=E.length;++pe<Ae;){var Ke=z(E[pe]);Ke!==r&&($=$===r?Ke:$+Ke)}return $}function Ui(E,z){for(var $=-1,pe=Array(E);++$<E;)pe[$]=z($);return pe}function hf(E,z){return dt(z,function($){return[$,E[$]]})}function Go(E){return E&&E.slice(0,Jo(E)+1).replace($t,"")}function Kt(E){return function(z){return E(z)}}function Bi(E,z){return dt(z,function($){return E[$]})}function Wr(E,z){return E.has(z)}function Vo(E,z){for(var $=-1,pe=E.length;++$<pe&&Sr(z,E[$],0)>-1;);return $}function Mo(E,z){for(var $=E.length;$--&&Sr(z,E[$],0)>-1;);return $}function gf(E,z){for(var $=E.length,pe=0;$--;)E[$]===z&&++pe;return pe}var mf=Li(Zu),xf=Li(Qu);function bf(E){return"\\"+tf[E]}function yf(E,z){return E==null?r:E[z]}function _r(E){return Mu.test(E)}function vf(E){return Ku.test(E)}function wf(E){for(var z,$=[];!(z=E.next()).done;)$.push(z.value);return $}function zi(E){var z=-1,$=Array(E.size);return E.forEach(function(pe,Ae){$[++z]=[Ae,pe]}),$}function Ko(E,z){return function($){return E(z($))}}function Hn(E,z){for(var $=-1,pe=E.length,Ae=0,Ke=[];++$<pe;){var St=E[$];(St===z||St===y)&&(E[$]=y,Ke[Ae++]=$)}return Ke}function va(E){var z=-1,$=Array(E.size);return E.forEach(function(pe){$[++z]=pe}),$}function jf(E){var z=-1,$=Array(E.size);return E.forEach(function(pe){$[++z]=[pe,pe]}),$}function Sf(E,z,$){for(var pe=$-1,Ae=E.length;++pe<Ae;)if(E[pe]===z)return pe;return-1}function _f(E,z,$){for(var pe=$+1;pe--;)if(E[pe]===z)return pe;return pe}function Nr(E){return _r(E)?Cf(E):cf(E)}function gn(E){return _r(E)?Ef(E):df(E)}function Jo(E){for(var z=E.length;z--&&j.test(E.charAt(z)););return z}var Nf=Li(ef);function Cf(E){for(var z=Ti.lastIndex=0;Ti.test(E);)++z;return z}function Ef(E){return E.match(Ti)||[]}function Af(E){return E.match(Vu)||[]}var Rf=function E(z){z=z==null?At:Cr.defaults(At.Object(),z,Cr.pick(At,Ju));var $=z.Array,pe=z.Date,Ae=z.Error,Ke=z.Function,St=z.Math,nt=z.Object,Wi=z.RegExp,Tf=z.String,an=z.TypeError,wa=$.prototype,Of=Ke.prototype,Er=nt.prototype,ja=z["__core-js_shared__"],Sa=Of.toString,Ze=Er.hasOwnProperty,Pf=0,Xo=function(){var e=/[^.]+$/.exec(ja&&ja.keys&&ja.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),_a=Er.toString,$f=Sa.call(nt),kf=At._,If=Wi("^"+Sa.call(Ze).replace(Cn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Na=ko?z.Buffer:r,qn=z.Symbol,Ca=z.Uint8Array,Zo=Na?Na.allocUnsafe:r,Ea=Ko(nt.getPrototypeOf,nt),Qo=nt.create,el=Er.propertyIsEnumerable,Aa=wa.splice,tl=qn?qn.isConcatSpreadable:r,Hr=qn?qn.iterator:r,sr=qn?qn.toStringTag:r,Ra=function(){try{var e=ur(nt,"defineProperty");return e({},"",{}),e}catch{}}(),Ff=z.clearTimeout!==At.clearTimeout&&z.clearTimeout,Lf=pe&&pe.now!==At.Date.now&&pe.now,Df=z.setTimeout!==At.setTimeout&&z.setTimeout,Ta=St.ceil,Oa=St.floor,Hi=nt.getOwnPropertySymbols,Uf=Na?Na.isBuffer:r,nl=z.isFinite,Bf=wa.join,zf=Ko(nt.keys,nt),_t=St.max,Ot=St.min,Wf=pe.now,Hf=z.parseInt,rl=St.random,qf=wa.reverse,qi=ur(z,"DataView"),qr=ur(z,"Map"),Yi=ur(z,"Promise"),Ar=ur(z,"Set"),Yr=ur(z,"WeakMap"),Gr=ur(nt,"create"),Pa=Yr&&new Yr,Rr={},Yf=fr(qi),Gf=fr(qr),Vf=fr(Yi),Mf=fr(Ar),Kf=fr(Yr),$a=qn?qn.prototype:r,Vr=$a?$a.valueOf:r,al=$a?$a.toString:r;function g(e){if(pt(e)&&!Oe(e)&&!(e instanceof Ue)){if(e instanceof sn)return e;if(Ze.call(e,"__wrapped__"))return ic(e)}return new sn(e)}var Tr=function(){function e(){}return function(t){if(!ut(t))return{};if(Qo)return Qo(t);e.prototype=t;var s=new e;return e.prototype=r,s}}();function ka(){}function sn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}g.templateSettings={escape:nr,evaluate:rr,interpolate:tn,variable:"",imports:{_:g}},g.prototype=ka.prototype,g.prototype.constructor=g,sn.prototype=Tr(ka.prototype),sn.prototype.constructor=sn;function Ue(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function Jf(){var e=new Ue(this.__wrapped__);return e.__actions__=Ut(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ut(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ut(this.__views__),e}function Xf(){if(this.__filtered__){var e=new Ue(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Zf(){var e=this.__wrapped__.value(),t=this.__dir__,s=Oe(e),c=t<0,f=s?e.length:0,m=dh(0,f,this.__views__),w=m.start,_=m.end,T=_-w,Y=c?_:w-1,G=this.__iteratees__,M=G.length,ce=0,ge=Ot(T,this.__takeCount__);if(!s||!c&&f==T&&ge==T)return Al(e,this.__actions__);var _e=[];e:for(;T--&&ce<ge;){Y+=t;for(var Ie=-1,we=e[Y];++Ie<M;){var De=G[Ie],ze=De.iteratee,Zt=De.type,Ft=ze(we);if(Zt==oe)we=Ft;else if(!Ft){if(Zt==Z)continue e;break e}}_e[ce++]=we}return _e}Ue.prototype=Tr(ka.prototype),Ue.prototype.constructor=Ue;function or(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var c=e[t];this.set(c[0],c[1])}}function Qf(){this.__data__=Gr?Gr(null):{},this.size=0}function ep(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function tp(e){var t=this.__data__;if(Gr){var s=t[e];return s===x?r:s}return Ze.call(t,e)?t[e]:r}function np(e){var t=this.__data__;return Gr?t[e]!==r:Ze.call(t,e)}function rp(e,t){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=Gr&&t===r?x:t,this}or.prototype.clear=Qf,or.prototype.delete=ep,or.prototype.get=tp,or.prototype.has=np,or.prototype.set=rp;function En(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var c=e[t];this.set(c[0],c[1])}}function ap(){this.__data__=[],this.size=0}function ip(e){var t=this.__data__,s=Ia(t,e);if(s<0)return!1;var c=t.length-1;return s==c?t.pop():Aa.call(t,s,1),--this.size,!0}function sp(e){var t=this.__data__,s=Ia(t,e);return s<0?r:t[s][1]}function op(e){return Ia(this.__data__,e)>-1}function lp(e,t){var s=this.__data__,c=Ia(s,e);return c<0?(++this.size,s.push([e,t])):s[c][1]=t,this}En.prototype.clear=ap,En.prototype.delete=ip,En.prototype.get=sp,En.prototype.has=op,En.prototype.set=lp;function An(e){var t=-1,s=e==null?0:e.length;for(this.clear();++t<s;){var c=e[t];this.set(c[0],c[1])}}function cp(){this.size=0,this.__data__={hash:new or,map:new(qr||En),string:new or}}function dp(e){var t=Va(this,e).delete(e);return this.size-=t?1:0,t}function up(e){return Va(this,e).get(e)}function fp(e){return Va(this,e).has(e)}function pp(e,t){var s=Va(this,e),c=s.size;return s.set(e,t),this.size+=s.size==c?0:1,this}An.prototype.clear=cp,An.prototype.delete=dp,An.prototype.get=up,An.prototype.has=fp,An.prototype.set=pp;function lr(e){var t=-1,s=e==null?0:e.length;for(this.__data__=new An;++t<s;)this.add(e[t])}function hp(e){return this.__data__.set(e,x),this}function gp(e){return this.__data__.has(e)}lr.prototype.add=lr.prototype.push=hp,lr.prototype.has=gp;function mn(e){var t=this.__data__=new En(e);this.size=t.size}function mp(){this.__data__=new En,this.size=0}function xp(e){var t=this.__data__,s=t.delete(e);return this.size=t.size,s}function bp(e){return this.__data__.get(e)}function yp(e){return this.__data__.has(e)}function vp(e,t){var s=this.__data__;if(s instanceof En){var c=s.__data__;if(!qr||c.length<l-1)return c.push([e,t]),this.size=++s.size,this;s=this.__data__=new An(c)}return s.set(e,t),this.size=s.size,this}mn.prototype.clear=mp,mn.prototype.delete=xp,mn.prototype.get=bp,mn.prototype.has=yp,mn.prototype.set=vp;function il(e,t){var s=Oe(e),c=!s&&pr(e),f=!s&&!c&&Kn(e),m=!s&&!c&&!f&&kr(e),w=s||c||f||m,_=w?Ui(e.length,Tf):[],T=_.length;for(var Y in e)(t||Ze.call(e,Y))&&!(w&&(Y=="length"||f&&(Y=="offset"||Y=="parent")||m&&(Y=="buffer"||Y=="byteLength"||Y=="byteOffset")||On(Y,T)))&&_.push(Y);return _}function sl(e){var t=e.length;return t?e[ns(0,t-1)]:r}function wp(e,t){return Ma(Ut(e),cr(t,0,e.length))}function jp(e){return Ma(Ut(e))}function Gi(e,t,s){(s!==r&&!bn(e[t],s)||s===r&&!(t in e))&&jn(e,t,s)}function Mr(e,t,s){var c=e[t];(!(Ze.call(e,t)&&bn(c,s))||s===r&&!(t in e))&&jn(e,t,s)}function Ia(e,t){for(var s=e.length;s--;)if(bn(e[s][0],t))return s;return-1}function Sp(e,t,s,c){return Yn(e,function(f,m,w){t(c,f,s(f),w)}),c}function ol(e,t){return e&&_n(t,Ct(t),e)}function _p(e,t){return e&&_n(t,zt(t),e)}function jn(e,t,s){t=="__proto__"&&Ra?Ra(e,t,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[t]=s}function Vi(e,t){for(var s=-1,c=t.length,f=$(c),m=e==null;++s<c;)f[s]=m?r:As(e,t[s]);return f}function cr(e,t,s){return e===e&&(s!==r&&(e=e<=s?e:s),t!==r&&(e=e>=t?e:t)),e}function on(e,t,s,c,f,m){var w,_=t&O,T=t&W,Y=t&I;if(s&&(w=f?s(e,c,f,m):s(e)),w!==r)return w;if(!ut(e))return e;var G=Oe(e);if(G){if(w=fh(e),!_)return Ut(e,w)}else{var M=Pt(e),ce=M==yt||M==We;if(Kn(e))return Ol(e,_);if(M==Fe||M==ue||ce&&!f){if(w=T||ce?{}:Jl(e),!_)return T?th(e,_p(w,e)):eh(e,ol(w,e))}else{if(!at[M])return f?e:{};w=ph(e,M,_)}}m||(m=new mn);var ge=m.get(e);if(ge)return ge;m.set(e,w),Nc(e)?e.forEach(function(we){w.add(on(we,t,s,we,e,m))}):Sc(e)&&e.forEach(function(we,De){w.set(De,on(we,t,s,De,e,m))});var _e=Y?T?ps:fs:T?zt:Ct,Ie=G?r:_e(e);return Mt(Ie||e,function(we,De){Ie&&(De=we,we=e[De]),Mr(w,De,on(we,t,s,De,e,m))}),w}function Np(e){var t=Ct(e);return function(s){return ll(s,e,t)}}function ll(e,t,s){var c=s.length;if(e==null)return!c;for(e=nt(e);c--;){var f=s[c],m=t[f],w=e[f];if(w===r&&!(f in e)||!m(w))return!1}return!0}function cl(e,t,s){if(typeof e!="function")throw new an(u);return ta(function(){e.apply(r,s)},t)}function Kr(e,t,s,c){var f=-1,m=ba,w=!0,_=e.length,T=[],Y=t.length;if(!_)return T;s&&(t=dt(t,Kt(s))),c?(m=$i,w=!1):t.length>=l&&(m=Wr,w=!1,t=new lr(t));e:for(;++f<_;){var G=e[f],M=s==null?G:s(G);if(G=c||G!==0?G:0,w&&M===M){for(var ce=Y;ce--;)if(t[ce]===M)continue e;T.push(G)}else m(t,M,c)||T.push(G)}return T}var Yn=Fl(Sn),dl=Fl(Ki,!0);function Cp(e,t){var s=!0;return Yn(e,function(c,f,m){return s=!!t(c,f,m),s}),s}function Fa(e,t,s){for(var c=-1,f=e.length;++c<f;){var m=e[c],w=t(m);if(w!=null&&(_===r?w===w&&!Xt(w):s(w,_)))var _=w,T=m}return T}function Ep(e,t,s,c){var f=e.length;for(s=ke(s),s<0&&(s=-s>f?0:f+s),c=c===r||c>f?f:ke(c),c<0&&(c+=f),c=s>c?0:Ec(c);s<c;)e[s++]=t;return e}function ul(e,t){var s=[];return Yn(e,function(c,f,m){t(c,f,m)&&s.push(c)}),s}function Rt(e,t,s,c,f){var m=-1,w=e.length;for(s||(s=gh),f||(f=[]);++m<w;){var _=e[m];t>0&&s(_)?t>1?Rt(_,t-1,s,c,f):Wn(f,_):c||(f[f.length]=_)}return f}var Mi=Ll(),fl=Ll(!0);function Sn(e,t){return e&&Mi(e,t,Ct)}function Ki(e,t){return e&&fl(e,t,Ct)}function La(e,t){return zn(t,function(s){return Pn(e[s])})}function dr(e,t){t=Vn(t,e);for(var s=0,c=t.length;e!=null&&s<c;)e=e[xn(t[s++])];return s&&s==c?e:r}function pl(e,t,s){var c=t(e);return Oe(e)?c:Wn(c,s(e))}function kt(e){return e==null?e===r?rt:qt:sr&&sr in nt(e)?ch(e):jh(e)}function Ji(e,t){return e>t}function Ap(e,t){return e!=null&&Ze.call(e,t)}function Rp(e,t){return e!=null&&t in nt(e)}function Tp(e,t,s){return e>=Ot(t,s)&&e<_t(t,s)}function Xi(e,t,s){for(var c=s?$i:ba,f=e[0].length,m=e.length,w=m,_=$(m),T=1/0,Y=[];w--;){var G=e[w];w&&t&&(G=dt(G,Kt(t))),T=Ot(G.length,T),_[w]=!s&&(t||f>=120&&G.length>=120)?new lr(w&&G):r}G=e[0];var M=-1,ce=_[0];e:for(;++M<f&&Y.length<T;){var ge=G[M],_e=t?t(ge):ge;if(ge=s||ge!==0?ge:0,!(ce?Wr(ce,_e):c(Y,_e,s))){for(w=m;--w;){var Ie=_[w];if(!(Ie?Wr(Ie,_e):c(e[w],_e,s)))continue e}ce&&ce.push(_e),Y.push(ge)}}return Y}function Op(e,t,s,c){return Sn(e,function(f,m,w){t(c,s(f),m,w)}),c}function Jr(e,t,s){t=Vn(t,e),e=ec(e,t);var c=e==null?e:e[xn(cn(t))];return c==null?r:Vt(c,e,s)}function hl(e){return pt(e)&&kt(e)==ue}function Pp(e){return pt(e)&&kt(e)==gt}function $p(e){return pt(e)&&kt(e)==q}function Xr(e,t,s,c,f){return e===t?!0:e==null||t==null||!pt(e)&&!pt(t)?e!==e&&t!==t:kp(e,t,s,c,Xr,f)}function kp(e,t,s,c,f,m){var w=Oe(e),_=Oe(t),T=w?Ne:Pt(e),Y=_?Ne:Pt(t);T=T==ue?Fe:T,Y=Y==ue?Fe:Y;var G=T==Fe,M=Y==Fe,ce=T==Y;if(ce&&Kn(e)){if(!Kn(t))return!1;w=!0,G=!1}if(ce&&!G)return m||(m=new mn),w||kr(e)?Vl(e,t,s,c,f,m):oh(e,t,T,s,c,f,m);if(!(s&k)){var ge=G&&Ze.call(e,"__wrapped__"),_e=M&&Ze.call(t,"__wrapped__");if(ge||_e){var Ie=ge?e.value():e,we=_e?t.value():t;return m||(m=new mn),f(Ie,we,s,c,m)}}return ce?(m||(m=new mn),lh(e,t,s,c,f,m)):!1}function Ip(e){return pt(e)&&Pt(e)==Xe}function Zi(e,t,s,c){var f=s.length,m=f,w=!c;if(e==null)return!m;for(e=nt(e);f--;){var _=s[f];if(w&&_[2]?_[1]!==e[_[0]]:!(_[0]in e))return!1}for(;++f<m;){_=s[f];var T=_[0],Y=e[T],G=_[1];if(w&&_[2]){if(Y===r&&!(T in e))return!1}else{var M=new mn;if(c)var ce=c(Y,G,T,e,t,M);if(!(ce===r?Xr(G,Y,k|L,c,M):ce))return!1}}return!0}function gl(e){if(!ut(e)||xh(e))return!1;var t=Pn(e)?If:Ni;return t.test(fr(e))}function Fp(e){return pt(e)&&kt(e)==ot}function Lp(e){return pt(e)&&Pt(e)==et}function Dp(e){return pt(e)&&ei(e.length)&&!!it[kt(e)]}function ml(e){return typeof e=="function"?e:e==null?Wt:typeof e=="object"?Oe(e)?yl(e[0],e[1]):bl(e):Uc(e)}function Qi(e){if(!ea(e))return zf(e);var t=[];for(var s in nt(e))Ze.call(e,s)&&s!="constructor"&&t.push(s);return t}function Up(e){if(!ut(e))return wh(e);var t=ea(e),s=[];for(var c in e)c=="constructor"&&(t||!Ze.call(e,c))||s.push(c);return s}function es(e,t){return e<t}function xl(e,t){var s=-1,c=Bt(e)?$(e.length):[];return Yn(e,function(f,m,w){c[++s]=t(f,m,w)}),c}function bl(e){var t=gs(e);return t.length==1&&t[0][2]?Zl(t[0][0],t[0][1]):function(s){return s===e||Zi(s,e,t)}}function yl(e,t){return xs(e)&&Xl(t)?Zl(xn(e),t):function(s){var c=As(s,e);return c===r&&c===t?Rs(s,e):Xr(t,c,k|L)}}function Da(e,t,s,c,f){e!==t&&Mi(t,function(m,w){if(f||(f=new mn),ut(m))Bp(e,t,w,s,Da,c,f);else{var _=c?c(ys(e,w),m,w+"",e,t,f):r;_===r&&(_=m),Gi(e,w,_)}},zt)}function Bp(e,t,s,c,f,m,w){var _=ys(e,s),T=ys(t,s),Y=w.get(T);if(Y){Gi(e,s,Y);return}var G=m?m(_,T,s+"",e,t,w):r,M=G===r;if(M){var ce=Oe(T),ge=!ce&&Kn(T),_e=!ce&&!ge&&kr(T);G=T,ce||ge||_e?Oe(_)?G=_:mt(_)?G=Ut(_):ge?(M=!1,G=Ol(T,!0)):_e?(M=!1,G=Pl(T,!0)):G=[]:na(T)||pr(T)?(G=_,pr(_)?G=Ac(_):(!ut(_)||Pn(_))&&(G=Jl(T))):M=!1}M&&(w.set(T,G),f(G,T,c,m,w),w.delete(T)),Gi(e,s,G)}function vl(e,t){var s=e.length;if(s)return t+=t<0?s:0,On(t,s)?e[t]:r}function wl(e,t,s){t.length?t=dt(t,function(m){return Oe(m)?function(w){return dr(w,m.length===1?m[0]:m)}:m}):t=[Wt];var c=-1;t=dt(t,Kt(Se()));var f=xl(e,function(m,w,_){var T=dt(t,function(Y){return Y(m)});return{criteria:T,index:++c,value:m}});return pf(f,function(m,w){return Qp(m,w,s)})}function zp(e,t){return jl(e,t,function(s,c){return Rs(e,c)})}function jl(e,t,s){for(var c=-1,f=t.length,m={};++c<f;){var w=t[c],_=dr(e,w);s(_,w)&&Zr(m,Vn(w,e),_)}return m}function Wp(e){return function(t){return dr(t,e)}}function ts(e,t,s,c){var f=c?ff:Sr,m=-1,w=t.length,_=e;for(e===t&&(t=Ut(t)),s&&(_=dt(e,Kt(s)));++m<w;)for(var T=0,Y=t[m],G=s?s(Y):Y;(T=f(_,G,T,c))>-1;)_!==e&&Aa.call(_,T,1),Aa.call(e,T,1);return e}function Sl(e,t){for(var s=e?t.length:0,c=s-1;s--;){var f=t[s];if(s==c||f!==m){var m=f;On(f)?Aa.call(e,f,1):is(e,f)}}return e}function ns(e,t){return e+Oa(rl()*(t-e+1))}function Hp(e,t,s,c){for(var f=-1,m=_t(Ta((t-e)/(s||1)),0),w=$(m);m--;)w[c?m:++f]=e,e+=s;return w}function rs(e,t){var s="";if(!e||t<1||t>be)return s;do t%2&&(s+=e),t=Oa(t/2),t&&(e+=e);while(t);return s}function Le(e,t){return vs(Ql(e,t,Wt),e+"")}function qp(e){return sl(Ir(e))}function Yp(e,t){var s=Ir(e);return Ma(s,cr(t,0,s.length))}function Zr(e,t,s,c){if(!ut(e))return e;t=Vn(t,e);for(var f=-1,m=t.length,w=m-1,_=e;_!=null&&++f<m;){var T=xn(t[f]),Y=s;if(T==="__proto__"||T==="constructor"||T==="prototype")return e;if(f!=w){var G=_[T];Y=c?c(G,T,_):r,Y===r&&(Y=ut(G)?G:On(t[f+1])?[]:{})}Mr(_,T,Y),_=_[T]}return e}var _l=Pa?function(e,t){return Pa.set(e,t),e}:Wt,Gp=Ra?function(e,t){return Ra(e,"toString",{configurable:!0,enumerable:!1,value:Os(t),writable:!0})}:Wt;function Vp(e){return Ma(Ir(e))}function ln(e,t,s){var c=-1,f=e.length;t<0&&(t=-t>f?0:f+t),s=s>f?f:s,s<0&&(s+=f),f=t>s?0:s-t>>>0,t>>>=0;for(var m=$(f);++c<f;)m[c]=e[c+t];return m}function Mp(e,t){var s;return Yn(e,function(c,f,m){return s=t(c,f,m),!s}),!!s}function Ua(e,t,s){var c=0,f=e==null?c:e.length;if(typeof t=="number"&&t===t&&f<=Q){for(;c<f;){var m=c+f>>>1,w=e[m];w!==null&&!Xt(w)&&(s?w<=t:w<t)?c=m+1:f=m}return f}return as(e,t,Wt,s)}function as(e,t,s,c){var f=0,m=e==null?0:e.length;if(m===0)return 0;t=s(t);for(var w=t!==t,_=t===null,T=Xt(t),Y=t===r;f<m;){var G=Oa((f+m)/2),M=s(e[G]),ce=M!==r,ge=M===null,_e=M===M,Ie=Xt(M);if(w)var we=c||_e;else Y?we=_e&&(c||ce):_?we=_e&&ce&&(c||!ge):T?we=_e&&ce&&!ge&&(c||!Ie):ge||Ie?we=!1:we=c?M<=t:M<t;we?f=G+1:m=G}return Ot(m,H)}function Nl(e,t){for(var s=-1,c=e.length,f=0,m=[];++s<c;){var w=e[s],_=t?t(w):w;if(!s||!bn(_,T)){var T=_;m[f++]=w===0?0:w}}return m}function Cl(e){return typeof e=="number"?e:Xt(e)?ye:+e}function Jt(e){if(typeof e=="string")return e;if(Oe(e))return dt(e,Jt)+"";if(Xt(e))return al?al.call(e):"";var t=e+"";return t=="0"&&1/e==-$e?"-0":t}function Gn(e,t,s){var c=-1,f=ba,m=e.length,w=!0,_=[],T=_;if(s)w=!1,f=$i;else if(m>=l){var Y=t?null:ih(e);if(Y)return va(Y);w=!1,f=Wr,T=new lr}else T=t?[]:_;e:for(;++c<m;){var G=e[c],M=t?t(G):G;if(G=s||G!==0?G:0,w&&M===M){for(var ce=T.length;ce--;)if(T[ce]===M)continue e;t&&T.push(M),_.push(G)}else f(T,M,s)||(T!==_&&T.push(M),_.push(G))}return _}function is(e,t){t=Vn(t,e);var s=-1,c=t.length;if(!c)return!0;for(;++s<c;){var f=xn(t[s]);if(f==="__proto__"&&!Ze.call(e,"__proto__")||(f==="constructor"||f==="prototype")&&s<c-1)return!1}var m=ec(e,t);return m==null||delete m[xn(cn(t))]}function El(e,t,s,c){return Zr(e,t,s(dr(e,t)),c)}function Ba(e,t,s,c){for(var f=e.length,m=c?f:-1;(c?m--:++m<f)&&t(e[m],m,e););return s?ln(e,c?0:m,c?m+1:f):ln(e,c?m+1:0,c?f:m)}function Al(e,t){var s=e;return s instanceof Ue&&(s=s.value()),ki(t,function(c,f){return f.func.apply(f.thisArg,Wn([c],f.args))},s)}function ss(e,t,s){var c=e.length;if(c<2)return c?Gn(e[0]):[];for(var f=-1,m=$(c);++f<c;)for(var w=e[f],_=-1;++_<c;)_!=f&&(m[f]=Kr(m[f]||w,e[_],t,s));return Gn(Rt(m,1),t,s)}function Rl(e,t,s){for(var c=-1,f=e.length,m=t.length,w={};++c<f;){var _=c<m?t[c]:r;s(w,e[c],_)}return w}function os(e){return mt(e)?e:[]}function ls(e){return typeof e=="function"?e:Wt}function Vn(e,t){return Oe(e)?e:xs(e,t)?[e]:ac(Qe(e))}var Kp=Le;function Mn(e,t,s){var c=e.length;return s=s===r?c:s,!t&&s>=c?e:ln(e,t,s)}var Tl=Ff||function(e){return At.clearTimeout(e)};function Ol(e,t){if(t)return e.slice();var s=e.length,c=Zo?Zo(s):new e.constructor(s);return e.copy(c),c}function cs(e){var t=new e.constructor(e.byteLength);return new Ca(t).set(new Ca(e)),t}function Jp(e,t){var s=t?cs(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.byteLength)}function Xp(e){var t=new e.constructor(e.source,Dt.exec(e));return t.lastIndex=e.lastIndex,t}function Zp(e){return Vr?nt(Vr.call(e)):{}}function Pl(e,t){var s=t?cs(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}function $l(e,t){if(e!==t){var s=e!==r,c=e===null,f=e===e,m=Xt(e),w=t!==r,_=t===null,T=t===t,Y=Xt(t);if(!_&&!Y&&!m&&e>t||m&&w&&T&&!_&&!Y||c&&w&&T||!s&&T||!f)return 1;if(!c&&!m&&!Y&&e<t||Y&&s&&f&&!c&&!m||_&&s&&f||!w&&f||!T)return-1}return 0}function Qp(e,t,s){for(var c=-1,f=e.criteria,m=t.criteria,w=f.length,_=s.length;++c<w;){var T=$l(f[c],m[c]);if(T){if(c>=_)return T;var Y=s[c];return T*(Y=="desc"?-1:1)}}return e.index-t.index}function kl(e,t,s,c){for(var f=-1,m=e.length,w=s.length,_=-1,T=t.length,Y=_t(m-w,0),G=$(T+Y),M=!c;++_<T;)G[_]=t[_];for(;++f<w;)(M||f<m)&&(G[s[f]]=e[f]);for(;Y--;)G[_++]=e[f++];return G}function Il(e,t,s,c){for(var f=-1,m=e.length,w=-1,_=s.length,T=-1,Y=t.length,G=_t(m-_,0),M=$(G+Y),ce=!c;++f<G;)M[f]=e[f];for(var ge=f;++T<Y;)M[ge+T]=t[T];for(;++w<_;)(ce||f<m)&&(M[ge+s[w]]=e[f++]);return M}function Ut(e,t){var s=-1,c=e.length;for(t||(t=$(c));++s<c;)t[s]=e[s];return t}function _n(e,t,s,c){var f=!s;s||(s={});for(var m=-1,w=t.length;++m<w;){var _=t[m],T=c?c(s[_],e[_],_,s,e):r;T===r&&(T=e[_]),f?jn(s,_,T):Mr(s,_,T)}return s}function eh(e,t){return _n(e,ms(e),t)}function th(e,t){return _n(e,Ml(e),t)}function za(e,t){return function(s,c){var f=Oe(s)?sf:Sp,m=t?t():{};return f(s,e,Se(c,2),m)}}function Or(e){return Le(function(t,s){var c=-1,f=s.length,m=f>1?s[f-1]:r,w=f>2?s[2]:r;for(m=e.length>3&&typeof m=="function"?(f--,m):r,w&&It(s[0],s[1],w)&&(m=f<3?r:m,f=1),t=nt(t);++c<f;){var _=s[c];_&&e(t,_,c,m)}return t})}function Fl(e,t){return function(s,c){if(s==null)return s;if(!Bt(s))return e(s,c);for(var f=s.length,m=t?f:-1,w=nt(s);(t?m--:++m<f)&&c(w[m],m,w)!==!1;);return s}}function Ll(e){return function(t,s,c){for(var f=-1,m=nt(t),w=c(t),_=w.length;_--;){var T=w[e?_:++f];if(s(m[T],T,m)===!1)break}return t}}function nh(e,t,s){var c=t&V,f=Qr(e);function m(){var w=this&&this!==At&&this instanceof m?f:e;return w.apply(c?s:this,arguments)}return m}function Dl(e){return function(t){t=Qe(t);var s=_r(t)?gn(t):r,c=s?s[0]:t.charAt(0),f=s?Mn(s,1).join(""):t.slice(1);return c[e]()+f}}function Pr(e){return function(t){return ki(Lc(Fc(t).replace(Yu,"")),e,"")}}function Qr(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=Tr(e.prototype),c=e.apply(s,t);return ut(c)?c:s}}function rh(e,t,s){var c=Qr(e);function f(){for(var m=arguments.length,w=$(m),_=m,T=$r(f);_--;)w[_]=arguments[_];var Y=m<3&&w[0]!==T&&w[m-1]!==T?[]:Hn(w,T);if(m-=Y.length,m<s)return Hl(e,t,Wa,f.placeholder,r,w,Y,r,r,s-m);var G=this&&this!==At&&this instanceof f?c:e;return Vt(G,this,w)}return f}function Ul(e){return function(t,s,c){var f=nt(t);if(!Bt(t)){var m=Se(s,3);t=Ct(t),s=function(_){return m(f[_],_,f)}}var w=e(t,s,c);return w>-1?f[m?t[w]:w]:r}}function Bl(e){return Tn(function(t){var s=t.length,c=s,f=sn.prototype.thru;for(e&&t.reverse();c--;){var m=t[c];if(typeof m!="function")throw new an(u);if(f&&!w&&Ga(m)=="wrapper")var w=new sn([],!0)}for(c=w?c:s;++c<s;){m=t[c];var _=Ga(m),T=_=="wrapper"?hs(m):r;T&&bs(T[0])&&T[1]==(re|C|ie|fe)&&!T[4].length&&T[9]==1?w=w[Ga(T[0])].apply(w,T[3]):w=m.length==1&&bs(m)?w[_]():w.thru(m)}return function(){var Y=arguments,G=Y[0];if(w&&Y.length==1&&Oe(G))return w.plant(G).value();for(var M=0,ce=s?t[M].apply(this,Y):G;++M<s;)ce=t[M].call(this,ce);return ce}})}function Wa(e,t,s,c,f,m,w,_,T,Y){var G=t&re,M=t&V,ce=t&D,ge=t&(C|ne),_e=t&xe,Ie=ce?r:Qr(e);function we(){for(var De=arguments.length,ze=$(De),Zt=De;Zt--;)ze[Zt]=arguments[Zt];if(ge)var Ft=$r(we),Qt=gf(ze,Ft);if(c&&(ze=kl(ze,c,f,ge)),m&&(ze=Il(ze,m,w,ge)),De-=Qt,ge&&De<Y){var xt=Hn(ze,Ft);return Hl(e,t,Wa,we.placeholder,s,ze,xt,_,T,Y-De)}var yn=M?s:this,kn=ce?yn[e]:e;return De=ze.length,_?ze=Sh(ze,_):_e&&De>1&&ze.reverse(),G&&T<De&&(ze.length=T),this&&this!==At&&this instanceof we&&(kn=Ie||Qr(kn)),kn.apply(yn,ze)}return we}function zl(e,t){return function(s,c){return Op(s,e,t(c),{})}}function Ha(e,t){return function(s,c){var f;if(s===r&&c===r)return t;if(s!==r&&(f=s),c!==r){if(f===r)return c;typeof s=="string"||typeof c=="string"?(s=Jt(s),c=Jt(c)):(s=Cl(s),c=Cl(c)),f=e(s,c)}return f}}function ds(e){return Tn(function(t){return t=dt(t,Kt(Se())),Le(function(s){var c=this;return e(t,function(f){return Vt(f,c,s)})})})}function qa(e,t){t=t===r?" ":Jt(t);var s=t.length;if(s<2)return s?rs(t,e):t;var c=rs(t,Ta(e/Nr(t)));return _r(t)?Mn(gn(c),0,e).join(""):c.slice(0,e)}function ah(e,t,s,c){var f=t&V,m=Qr(e);function w(){for(var _=-1,T=arguments.length,Y=-1,G=c.length,M=$(G+T),ce=this&&this!==At&&this instanceof w?m:e;++Y<G;)M[Y]=c[Y];for(;T--;)M[Y++]=arguments[++_];return Vt(ce,f?s:this,M)}return w}function Wl(e){return function(t,s,c){return c&&typeof c!="number"&&It(t,s,c)&&(s=c=r),t=$n(t),s===r?(s=t,t=0):s=$n(s),c=c===r?t<s?1:-1:$n(c),Hp(t,s,c,e)}}function Ya(e){return function(t,s){return typeof t=="string"&&typeof s=="string"||(t=dn(t),s=dn(s)),e(t,s)}}function Hl(e,t,s,c,f,m,w,_,T,Y){var G=t&C,M=G?w:r,ce=G?r:w,ge=G?m:r,_e=G?r:m;t|=G?ie:me,t&=~(G?me:ie),t&N||(t&=~(V|D));var Ie=[e,t,f,ge,M,_e,ce,_,T,Y],we=s.apply(r,Ie);return bs(e)&&tc(we,Ie),we.placeholder=c,nc(we,e,t)}function us(e){var t=St[e];return function(s,c){if(s=dn(s),c=c==null?0:Ot(ke(c),292),c&&nl(s)){var f=(Qe(s)+"e").split("e"),m=t(f[0]+"e"+(+f[1]+c));return f=(Qe(m)+"e").split("e"),+(f[0]+"e"+(+f[1]-c))}return t(s)}}var ih=Ar&&1/va(new Ar([,-0]))[1]==$e?function(e){return new Ar(e)}:ks;function ql(e){return function(t){var s=Pt(t);return s==Xe?zi(t):s==et?jf(t):hf(t,e(t))}}function Rn(e,t,s,c,f,m,w,_){var T=t&D;if(!T&&typeof e!="function")throw new an(u);var Y=c?c.length:0;if(Y||(t&=~(ie|me),c=f=r),w=w===r?w:_t(ke(w),0),_=_===r?_:ke(_),Y-=f?f.length:0,t&me){var G=c,M=f;c=f=r}var ce=T?r:hs(e),ge=[e,t,s,c,f,G,M,m,w,_];if(ce&&vh(ge,ce),e=ge[0],t=ge[1],s=ge[2],c=ge[3],f=ge[4],_=ge[9]=ge[9]===r?T?0:e.length:_t(ge[9]-Y,0),!_&&t&(C|ne)&&(t&=~(C|ne)),!t||t==V)var _e=nh(e,t,s);else t==C||t==ne?_e=rh(e,t,_):(t==ie||t==(V|ie))&&!f.length?_e=ah(e,t,s,c):_e=Wa.apply(r,ge);var Ie=ce?_l:tc;return nc(Ie(_e,ge),e,t)}function Yl(e,t,s,c){return e===r||bn(e,Er[s])&&!Ze.call(c,s)?t:e}function Gl(e,t,s,c,f,m){return ut(e)&&ut(t)&&(m.set(t,e),Da(e,t,r,Gl,m),m.delete(t)),e}function sh(e){return na(e)?r:e}function Vl(e,t,s,c,f,m){var w=s&k,_=e.length,T=t.length;if(_!=T&&!(w&&T>_))return!1;var Y=m.get(e),G=m.get(t);if(Y&&G)return Y==t&&G==e;var M=-1,ce=!0,ge=s&L?new lr:r;for(m.set(e,t),m.set(t,e);++M<_;){var _e=e[M],Ie=t[M];if(c)var we=w?c(Ie,_e,M,t,e,m):c(_e,Ie,M,e,t,m);if(we!==r){if(we)continue;ce=!1;break}if(ge){if(!Ii(t,function(De,ze){if(!Wr(ge,ze)&&(_e===De||f(_e,De,s,c,m)))return ge.push(ze)})){ce=!1;break}}else if(!(_e===Ie||f(_e,Ie,s,c,m))){ce=!1;break}}return m.delete(e),m.delete(t),ce}function oh(e,t,s,c,f,m,w){switch(s){case Tt:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case gt:return!(e.byteLength!=t.byteLength||!m(new Ca(e),new Ca(t)));case ae:case q:case qe:return bn(+e,+t);case Ee:return e.name==t.name&&e.message==t.message;case ot:case tt:return e==t+"";case Xe:var _=zi;case et:var T=c&k;if(_||(_=va),e.size!=t.size&&!T)return!1;var Y=w.get(e);if(Y)return Y==t;c|=L,w.set(e,t);var G=Vl(_(e),_(t),c,f,m,w);return w.delete(e),G;case je:if(Vr)return Vr.call(e)==Vr.call(t)}return!1}function lh(e,t,s,c,f,m){var w=s&k,_=fs(e),T=_.length,Y=fs(t),G=Y.length;if(T!=G&&!w)return!1;for(var M=T;M--;){var ce=_[M];if(!(w?ce in t:Ze.call(t,ce)))return!1}var ge=m.get(e),_e=m.get(t);if(ge&&_e)return ge==t&&_e==e;var Ie=!0;m.set(e,t),m.set(t,e);for(var we=w;++M<T;){ce=_[M];var De=e[ce],ze=t[ce];if(c)var Zt=w?c(ze,De,ce,t,e,m):c(De,ze,ce,e,t,m);if(!(Zt===r?De===ze||f(De,ze,s,c,m):Zt)){Ie=!1;break}we||(we=ce=="constructor")}if(Ie&&!we){var Ft=e.constructor,Qt=t.constructor;Ft!=Qt&&"constructor"in e&&"constructor"in t&&!(typeof Ft=="function"&&Ft instanceof Ft&&typeof Qt=="function"&&Qt instanceof Qt)&&(Ie=!1)}return m.delete(e),m.delete(t),Ie}function Tn(e){return vs(Ql(e,r,lc),e+"")}function fs(e){return pl(e,Ct,ms)}function ps(e){return pl(e,zt,Ml)}var hs=Pa?function(e){return Pa.get(e)}:ks;function Ga(e){for(var t=e.name+"",s=Rr[t],c=Ze.call(Rr,t)?s.length:0;c--;){var f=s[c],m=f.func;if(m==null||m==e)return f.name}return t}function $r(e){var t=Ze.call(g,"placeholder")?g:e;return t.placeholder}function Se(){var e=g.iteratee||Ps;return e=e===Ps?ml:e,arguments.length?e(arguments[0],arguments[1]):e}function Va(e,t){var s=e.__data__;return mh(t)?s[typeof t=="string"?"string":"hash"]:s.map}function gs(e){for(var t=Ct(e),s=t.length;s--;){var c=t[s],f=e[c];t[s]=[c,f,Xl(f)]}return t}function ur(e,t){var s=yf(e,t);return gl(s)?s:r}function ch(e){var t=Ze.call(e,sr),s=e[sr];try{e[sr]=r;var c=!0}catch{}var f=_a.call(e);return c&&(t?e[sr]=s:delete e[sr]),f}var ms=Hi?function(e){return e==null?[]:(e=nt(e),zn(Hi(e),function(t){return el.call(e,t)}))}:Is,Ml=Hi?function(e){for(var t=[];e;)Wn(t,ms(e)),e=Ea(e);return t}:Is,Pt=kt;(qi&&Pt(new qi(new ArrayBuffer(1)))!=Tt||qr&&Pt(new qr)!=Xe||Yi&&Pt(Yi.resolve())!=jt||Ar&&Pt(new Ar)!=et||Yr&&Pt(new Yr)!=ht)&&(Pt=function(e){var t=kt(e),s=t==Fe?e.constructor:r,c=s?fr(s):"";if(c)switch(c){case Yf:return Tt;case Gf:return Xe;case Vf:return jt;case Mf:return et;case Kf:return ht}return t});function dh(e,t,s){for(var c=-1,f=s.length;++c<f;){var m=s[c],w=m.size;switch(m.type){case"drop":e+=w;break;case"dropRight":t-=w;break;case"take":t=Ot(t,e+w);break;case"takeRight":e=_t(e,t-w);break}}return{start:e,end:t}}function uh(e){var t=e.match(F);return t?t[1].split(J):[]}function Kl(e,t,s){t=Vn(t,e);for(var c=-1,f=t.length,m=!1;++c<f;){var w=xn(t[c]);if(!(m=e!=null&&s(e,w)))break;e=e[w]}return m||++c!=f?m:(f=e==null?0:e.length,!!f&&ei(f)&&On(w,f)&&(Oe(e)||pr(e)))}function fh(e){var t=e.length,s=new e.constructor(t);return t&&typeof e[0]=="string"&&Ze.call(e,"index")&&(s.index=e.index,s.input=e.input),s}function Jl(e){return typeof e.constructor=="function"&&!ea(e)?Tr(Ea(e)):{}}function ph(e,t,s){var c=e.constructor;switch(t){case gt:return cs(e);case ae:case q:return new c(+e);case Tt:return Jp(e,s);case vt:case en:case K:case te:case he:case Re:case He:case ct:case Be:return Pl(e,s);case Xe:return new c;case qe:case tt:return new c(e);case ot:return Xp(e);case et:return new c;case je:return Zp(e)}}function hh(e,t){var s=t.length;if(!s)return e;var c=s-1;return t[c]=(s>1?"& ":"")+t[c],t=t.join(s>2?", ":" "),e.replace(B,`{
/* [wrapped with `+t+`] */
`)}function gh(e){return Oe(e)||pr(e)||!!(tl&&e&&e[tl])}function On(e,t){var s=typeof e;return t=t??be,!!t&&(s=="number"||s!="symbol"&&Cu.test(e))&&e>-1&&e%1==0&&e<t}function It(e,t,s){if(!ut(s))return!1;var c=typeof t;return(c=="number"?Bt(s)&&On(t,s.length):c=="string"&&t in s)?bn(s[t],e):!1}function xs(e,t){if(Oe(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||Xt(e)?!0:pn.test(e)||!nn.test(e)||t!=null&&e in nt(t)}function mh(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function bs(e){var t=Ga(e),s=g[t];if(typeof s!="function"||!(t in Ue.prototype))return!1;if(e===s)return!0;var c=hs(s);return!!c&&e===c[0]}function xh(e){return!!Xo&&Xo in e}var bh=ja?Pn:Fs;function ea(e){var t=e&&e.constructor,s=typeof t=="function"&&t.prototype||Er;return e===s}function Xl(e){return e===e&&!ut(e)}function Zl(e,t){return function(s){return s==null?!1:s[e]===t&&(t!==r||e in nt(s))}}function yh(e){var t=Za(e,function(c){return s.size===b&&s.clear(),c}),s=t.cache;return t}function vh(e,t){var s=e[1],c=t[1],f=s|c,m=f<(V|D|re),w=c==re&&s==C||c==re&&s==fe&&e[7].length<=t[8]||c==(re|fe)&&t[7].length<=t[8]&&s==C;if(!(m||w))return e;c&V&&(e[2]=t[2],f|=s&V?0:N);var _=t[3];if(_){var T=e[3];e[3]=T?kl(T,_,t[4]):_,e[4]=T?Hn(e[3],y):t[4]}return _=t[5],_&&(T=e[5],e[5]=T?Il(T,_,t[6]):_,e[6]=T?Hn(e[5],y):t[6]),_=t[7],_&&(e[7]=_),c&re&&(e[8]=e[8]==null?t[8]:Ot(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=f,e}function wh(e){var t=[];if(e!=null)for(var s in nt(e))t.push(s);return t}function jh(e){return _a.call(e)}function Ql(e,t,s){return t=_t(t===r?e.length-1:t,0),function(){for(var c=arguments,f=-1,m=_t(c.length-t,0),w=$(m);++f<m;)w[f]=c[t+f];f=-1;for(var _=$(t+1);++f<t;)_[f]=c[f];return _[t]=s(w),Vt(e,this,_)}}function ec(e,t){return t.length<2?e:dr(e,ln(t,0,-1))}function Sh(e,t){for(var s=e.length,c=Ot(t.length,s),f=Ut(e);c--;){var m=t[c];e[c]=On(m,s)?f[m]:r}return e}function ys(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var tc=rc(_l),ta=Df||function(e,t){return At.setTimeout(e,t)},vs=rc(Gp);function nc(e,t,s){var c=t+"";return vs(e,hh(c,_h(uh(c),s)))}function rc(e){var t=0,s=0;return function(){var c=Wf(),f=P-(c-s);if(s=c,f>0){if(++t>=se)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Ma(e,t){var s=-1,c=e.length,f=c-1;for(t=t===r?c:t;++s<t;){var m=ns(s,f),w=e[m];e[m]=e[s],e[s]=w}return e.length=t,e}var ac=yh(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(wn,function(s,c,f,m){t.push(f?m.replace(Me,"$1"):c||s)}),t});function xn(e){if(typeof e=="string"||Xt(e))return e;var t=e+"";return t=="0"&&1/e==-$e?"-0":t}function fr(e){if(e!=null){try{return Sa.call(e)}catch{}try{return e+""}catch{}}return""}function _h(e,t){return Mt(le,function(s){var c="_."+s[0];t&s[1]&&!ba(e,c)&&e.push(c)}),e.sort()}function ic(e){if(e instanceof Ue)return e.clone();var t=new sn(e.__wrapped__,e.__chain__);return t.__actions__=Ut(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Nh(e,t,s){(s?It(e,t,s):t===r)?t=1:t=_t(ke(t),0);var c=e==null?0:e.length;if(!c||t<1)return[];for(var f=0,m=0,w=$(Ta(c/t));f<c;)w[m++]=ln(e,f,f+=t);return w}function Ch(e){for(var t=-1,s=e==null?0:e.length,c=0,f=[];++t<s;){var m=e[t];m&&(f[c++]=m)}return f}function Eh(){var e=arguments.length;if(!e)return[];for(var t=$(e-1),s=arguments[0],c=e;c--;)t[c-1]=arguments[c];return Wn(Oe(s)?Ut(s):[s],Rt(t,1))}var Ah=Le(function(e,t){return mt(e)?Kr(e,Rt(t,1,mt,!0)):[]}),Rh=Le(function(e,t){var s=cn(t);return mt(s)&&(s=r),mt(e)?Kr(e,Rt(t,1,mt,!0),Se(s,2)):[]}),Th=Le(function(e,t){var s=cn(t);return mt(s)&&(s=r),mt(e)?Kr(e,Rt(t,1,mt,!0),r,s):[]});function Oh(e,t,s){var c=e==null?0:e.length;return c?(t=s||t===r?1:ke(t),ln(e,t<0?0:t,c)):[]}function Ph(e,t,s){var c=e==null?0:e.length;return c?(t=s||t===r?1:ke(t),t=c-t,ln(e,0,t<0?0:t)):[]}function $h(e,t){return e&&e.length?Ba(e,Se(t,3),!0,!0):[]}function kh(e,t){return e&&e.length?Ba(e,Se(t,3),!0):[]}function Ih(e,t,s,c){var f=e==null?0:e.length;return f?(s&&typeof s!="number"&&It(e,t,s)&&(s=0,c=f),Ep(e,t,s,c)):[]}function sc(e,t,s){var c=e==null?0:e.length;if(!c)return-1;var f=s==null?0:ke(s);return f<0&&(f=_t(c+f,0)),ya(e,Se(t,3),f)}function oc(e,t,s){var c=e==null?0:e.length;if(!c)return-1;var f=c-1;return s!==r&&(f=ke(s),f=s<0?_t(c+f,0):Ot(f,c-1)),ya(e,Se(t,3),f,!0)}function lc(e){var t=e==null?0:e.length;return t?Rt(e,1):[]}function Fh(e){var t=e==null?0:e.length;return t?Rt(e,$e):[]}function Lh(e,t){var s=e==null?0:e.length;return s?(t=t===r?1:ke(t),Rt(e,t)):[]}function Dh(e){for(var t=-1,s=e==null?0:e.length,c={};++t<s;){var f=e[t];jn(c,f[0],f[1])}return c}function cc(e){return e&&e.length?e[0]:r}function Uh(e,t,s){var c=e==null?0:e.length;if(!c)return-1;var f=s==null?0:ke(s);return f<0&&(f=_t(c+f,0)),Sr(e,t,f)}function Bh(e){var t=e==null?0:e.length;return t?ln(e,0,-1):[]}var zh=Le(function(e){var t=dt(e,os);return t.length&&t[0]===e[0]?Xi(t):[]}),Wh=Le(function(e){var t=cn(e),s=dt(e,os);return t===cn(s)?t=r:s.pop(),s.length&&s[0]===e[0]?Xi(s,Se(t,2)):[]}),Hh=Le(function(e){var t=cn(e),s=dt(e,os);return t=typeof t=="function"?t:r,t&&s.pop(),s.length&&s[0]===e[0]?Xi(s,r,t):[]});function qh(e,t){return e==null?"":Bf.call(e,t)}function cn(e){var t=e==null?0:e.length;return t?e[t-1]:r}function Yh(e,t,s){var c=e==null?0:e.length;if(!c)return-1;var f=c;return s!==r&&(f=ke(s),f=f<0?_t(c+f,0):Ot(f,c-1)),t===t?_f(e,t,f):ya(e,Ho,f,!0)}function Gh(e,t){return e&&e.length?vl(e,ke(t)):r}var Vh=Le(dc);function dc(e,t){return e&&e.length&&t&&t.length?ts(e,t):e}function Mh(e,t,s){return e&&e.length&&t&&t.length?ts(e,t,Se(s,2)):e}function Kh(e,t,s){return e&&e.length&&t&&t.length?ts(e,t,r,s):e}var Jh=Tn(function(e,t){var s=e==null?0:e.length,c=Vi(e,t);return Sl(e,dt(t,function(f){return On(f,s)?+f:f}).sort($l)),c});function Xh(e,t){var s=[];if(!(e&&e.length))return s;var c=-1,f=[],m=e.length;for(t=Se(t,3);++c<m;){var w=e[c];t(w,c,e)&&(s.push(w),f.push(c))}return Sl(e,f),s}function ws(e){return e==null?e:qf.call(e)}function Zh(e,t,s){var c=e==null?0:e.length;return c?(s&&typeof s!="number"&&It(e,t,s)?(t=0,s=c):(t=t==null?0:ke(t),s=s===r?c:ke(s)),ln(e,t,s)):[]}function Qh(e,t){return Ua(e,t)}function eg(e,t,s){return as(e,t,Se(s,2))}function tg(e,t){var s=e==null?0:e.length;if(s){var c=Ua(e,t);if(c<s&&bn(e[c],t))return c}return-1}function ng(e,t){return Ua(e,t,!0)}function rg(e,t,s){return as(e,t,Se(s,2),!0)}function ag(e,t){var s=e==null?0:e.length;if(s){var c=Ua(e,t,!0)-1;if(bn(e[c],t))return c}return-1}function ig(e){return e&&e.length?Nl(e):[]}function sg(e,t){return e&&e.length?Nl(e,Se(t,2)):[]}function og(e){var t=e==null?0:e.length;return t?ln(e,1,t):[]}function lg(e,t,s){return e&&e.length?(t=s||t===r?1:ke(t),ln(e,0,t<0?0:t)):[]}function cg(e,t,s){var c=e==null?0:e.length;return c?(t=s||t===r?1:ke(t),t=c-t,ln(e,t<0?0:t,c)):[]}function dg(e,t){return e&&e.length?Ba(e,Se(t,3),!1,!0):[]}function ug(e,t){return e&&e.length?Ba(e,Se(t,3)):[]}var fg=Le(function(e){return Gn(Rt(e,1,mt,!0))}),pg=Le(function(e){var t=cn(e);return mt(t)&&(t=r),Gn(Rt(e,1,mt,!0),Se(t,2))}),hg=Le(function(e){var t=cn(e);return t=typeof t=="function"?t:r,Gn(Rt(e,1,mt,!0),r,t)});function gg(e){return e&&e.length?Gn(e):[]}function mg(e,t){return e&&e.length?Gn(e,Se(t,2)):[]}function xg(e,t){return t=typeof t=="function"?t:r,e&&e.length?Gn(e,r,t):[]}function js(e){if(!(e&&e.length))return[];var t=0;return e=zn(e,function(s){if(mt(s))return t=_t(s.length,t),!0}),Ui(t,function(s){return dt(e,Fi(s))})}function uc(e,t){if(!(e&&e.length))return[];var s=js(e);return t==null?s:dt(s,function(c){return Vt(t,r,c)})}var bg=Le(function(e,t){return mt(e)?Kr(e,t):[]}),yg=Le(function(e){return ss(zn(e,mt))}),vg=Le(function(e){var t=cn(e);return mt(t)&&(t=r),ss(zn(e,mt),Se(t,2))}),wg=Le(function(e){var t=cn(e);return t=typeof t=="function"?t:r,ss(zn(e,mt),r,t)}),jg=Le(js);function Sg(e,t){return Rl(e||[],t||[],Mr)}function _g(e,t){return Rl(e||[],t||[],Zr)}var Ng=Le(function(e){var t=e.length,s=t>1?e[t-1]:r;return s=typeof s=="function"?(e.pop(),s):r,uc(e,s)});function fc(e){var t=g(e);return t.__chain__=!0,t}function Cg(e,t){return t(e),e}function Ka(e,t){return t(e)}var Eg=Tn(function(e){var t=e.length,s=t?e[0]:0,c=this.__wrapped__,f=function(m){return Vi(m,e)};return t>1||this.__actions__.length||!(c instanceof Ue)||!On(s)?this.thru(f):(c=c.slice(s,+s+(t?1:0)),c.__actions__.push({func:Ka,args:[f],thisArg:r}),new sn(c,this.__chain__).thru(function(m){return t&&!m.length&&m.push(r),m}))});function Ag(){return fc(this)}function Rg(){return new sn(this.value(),this.__chain__)}function Tg(){this.__values__===r&&(this.__values__=Cc(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}}function Og(){return this}function Pg(e){for(var t,s=this;s instanceof ka;){var c=ic(s);c.__index__=0,c.__values__=r,t?f.__wrapped__=c:t=c;var f=c;s=s.__wrapped__}return f.__wrapped__=e,t}function $g(){var e=this.__wrapped__;if(e instanceof Ue){var t=e;return this.__actions__.length&&(t=new Ue(this)),t=t.reverse(),t.__actions__.push({func:Ka,args:[ws],thisArg:r}),new sn(t,this.__chain__)}return this.thru(ws)}function kg(){return Al(this.__wrapped__,this.__actions__)}var Ig=za(function(e,t,s){Ze.call(e,s)?++e[s]:jn(e,s,1)});function Fg(e,t,s){var c=Oe(e)?zo:Cp;return s&&It(e,t,s)&&(t=r),c(e,Se(t,3))}function Lg(e,t){var s=Oe(e)?zn:ul;return s(e,Se(t,3))}var Dg=Ul(sc),Ug=Ul(oc);function Bg(e,t){return Rt(Ja(e,t),1)}function zg(e,t){return Rt(Ja(e,t),$e)}function Wg(e,t,s){return s=s===r?1:ke(s),Rt(Ja(e,t),s)}function pc(e,t){var s=Oe(e)?Mt:Yn;return s(e,Se(t,3))}function hc(e,t){var s=Oe(e)?of:dl;return s(e,Se(t,3))}var Hg=za(function(e,t,s){Ze.call(e,s)?e[s].push(t):jn(e,s,[t])});function qg(e,t,s,c){e=Bt(e)?e:Ir(e),s=s&&!c?ke(s):0;var f=e.length;return s<0&&(s=_t(f+s,0)),ti(e)?s<=f&&e.indexOf(t,s)>-1:!!f&&Sr(e,t,s)>-1}var Yg=Le(function(e,t,s){var c=-1,f=typeof t=="function",m=Bt(e)?$(e.length):[];return Yn(e,function(w){m[++c]=f?Vt(t,w,s):Jr(w,t,s)}),m}),Gg=za(function(e,t,s){jn(e,s,t)});function Ja(e,t){var s=Oe(e)?dt:xl;return s(e,Se(t,3))}function Vg(e,t,s,c){return e==null?[]:(Oe(t)||(t=t==null?[]:[t]),s=c?r:s,Oe(s)||(s=s==null?[]:[s]),wl(e,t,s))}var Mg=za(function(e,t,s){e[s?0:1].push(t)},function(){return[[],[]]});function Kg(e,t,s){var c=Oe(e)?ki:Yo,f=arguments.length<3;return c(e,Se(t,4),s,f,Yn)}function Jg(e,t,s){var c=Oe(e)?lf:Yo,f=arguments.length<3;return c(e,Se(t,4),s,f,dl)}function Xg(e,t){var s=Oe(e)?zn:ul;return s(e,Qa(Se(t,3)))}function Zg(e){var t=Oe(e)?sl:qp;return t(e)}function Qg(e,t,s){(s?It(e,t,s):t===r)?t=1:t=ke(t);var c=Oe(e)?wp:Yp;return c(e,t)}function em(e){var t=Oe(e)?jp:Vp;return t(e)}function tm(e){if(e==null)return 0;if(Bt(e))return ti(e)?Nr(e):e.length;var t=Pt(e);return t==Xe||t==et?e.size:Qi(e).length}function nm(e,t,s){var c=Oe(e)?Ii:Mp;return s&&It(e,t,s)&&(t=r),c(e,Se(t,3))}var rm=Le(function(e,t){if(e==null)return[];var s=t.length;return s>1&&It(e,t[0],t[1])?t=[]:s>2&&It(t[0],t[1],t[2])&&(t=[t[0]]),wl(e,Rt(t,1),[])}),Xa=Lf||function(){return At.Date.now()};function am(e,t){if(typeof t!="function")throw new an(u);return e=ke(e),function(){if(--e<1)return t.apply(this,arguments)}}function gc(e,t,s){return t=s?r:t,t=e&&t==null?e.length:t,Rn(e,re,r,r,r,r,t)}function mc(e,t){var s;if(typeof t!="function")throw new an(u);return e=ke(e),function(){return--e>0&&(s=t.apply(this,arguments)),e<=1&&(t=r),s}}var Ss=Le(function(e,t,s){var c=V;if(s.length){var f=Hn(s,$r(Ss));c|=ie}return Rn(e,c,t,s,f)}),xc=Le(function(e,t,s){var c=V|D;if(s.length){var f=Hn(s,$r(xc));c|=ie}return Rn(t,c,e,s,f)});function bc(e,t,s){t=s?r:t;var c=Rn(e,C,r,r,r,r,r,t);return c.placeholder=bc.placeholder,c}function yc(e,t,s){t=s?r:t;var c=Rn(e,ne,r,r,r,r,r,t);return c.placeholder=yc.placeholder,c}function vc(e,t,s){var c,f,m,w,_,T,Y=0,G=!1,M=!1,ce=!0;if(typeof e!="function")throw new an(u);t=dn(t)||0,ut(s)&&(G=!!s.leading,M="maxWait"in s,m=M?_t(dn(s.maxWait)||0,t):m,ce="trailing"in s?!!s.trailing:ce);function ge(xt){var yn=c,kn=f;return c=f=r,Y=xt,w=e.apply(kn,yn),w}function _e(xt){return Y=xt,_=ta(De,t),G?ge(xt):w}function Ie(xt){var yn=xt-T,kn=xt-Y,Bc=t-yn;return M?Ot(Bc,m-kn):Bc}function we(xt){var yn=xt-T,kn=xt-Y;return T===r||yn>=t||yn<0||M&&kn>=m}function De(){var xt=Xa();if(we(xt))return ze(xt);_=ta(De,Ie(xt))}function ze(xt){return _=r,ce&&c?ge(xt):(c=f=r,w)}function Zt(){_!==r&&Tl(_),Y=0,c=T=f=_=r}function Ft(){return _===r?w:ze(Xa())}function Qt(){var xt=Xa(),yn=we(xt);if(c=arguments,f=this,T=xt,yn){if(_===r)return _e(T);if(M)return Tl(_),_=ta(De,t),ge(T)}return _===r&&(_=ta(De,t)),w}return Qt.cancel=Zt,Qt.flush=Ft,Qt}var im=Le(function(e,t){return cl(e,1,t)}),sm=Le(function(e,t,s){return cl(e,dn(t)||0,s)});function om(e){return Rn(e,xe)}function Za(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new an(u);var s=function(){var c=arguments,f=t?t.apply(this,c):c[0],m=s.cache;if(m.has(f))return m.get(f);var w=e.apply(this,c);return s.cache=m.set(f,w)||m,w};return s.cache=new(Za.Cache||An),s}Za.Cache=An;function Qa(e){if(typeof e!="function")throw new an(u);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function lm(e){return mc(2,e)}var cm=Kp(function(e,t){t=t.length==1&&Oe(t[0])?dt(t[0],Kt(Se())):dt(Rt(t,1),Kt(Se()));var s=t.length;return Le(function(c){for(var f=-1,m=Ot(c.length,s);++f<m;)c[f]=t[f].call(this,c[f]);return Vt(e,this,c)})}),_s=Le(function(e,t){var s=Hn(t,$r(_s));return Rn(e,ie,r,t,s)}),wc=Le(function(e,t){var s=Hn(t,$r(wc));return Rn(e,me,r,t,s)}),dm=Tn(function(e,t){return Rn(e,fe,r,r,r,t)});function um(e,t){if(typeof e!="function")throw new an(u);return t=t===r?t:ke(t),Le(e,t)}function fm(e,t){if(typeof e!="function")throw new an(u);return t=t==null?0:_t(ke(t),0),Le(function(s){var c=s[t],f=Mn(s,0,t);return c&&Wn(f,c),Vt(e,this,f)})}function pm(e,t,s){var c=!0,f=!0;if(typeof e!="function")throw new an(u);return ut(s)&&(c="leading"in s?!!s.leading:c,f="trailing"in s?!!s.trailing:f),vc(e,t,{leading:c,maxWait:t,trailing:f})}function hm(e){return gc(e,1)}function gm(e,t){return _s(ls(t),e)}function mm(){if(!arguments.length)return[];var e=arguments[0];return Oe(e)?e:[e]}function xm(e){return on(e,I)}function bm(e,t){return t=typeof t=="function"?t:r,on(e,I,t)}function ym(e){return on(e,O|I)}function vm(e,t){return t=typeof t=="function"?t:r,on(e,O|I,t)}function wm(e,t){return t==null||ll(e,t,Ct(t))}function bn(e,t){return e===t||e!==e&&t!==t}var jm=Ya(Ji),Sm=Ya(function(e,t){return e>=t}),pr=hl(function(){return arguments}())?hl:function(e){return pt(e)&&Ze.call(e,"callee")&&!el.call(e,"callee")},Oe=$.isArray,_m=Io?Kt(Io):Pp;function Bt(e){return e!=null&&ei(e.length)&&!Pn(e)}function mt(e){return pt(e)&&Bt(e)}function Nm(e){return e===!0||e===!1||pt(e)&&kt(e)==ae}var Kn=Uf||Fs,Cm=Fo?Kt(Fo):$p;function Em(e){return pt(e)&&e.nodeType===1&&!na(e)}function Am(e){if(e==null)return!0;if(Bt(e)&&(Oe(e)||typeof e=="string"||typeof e.splice=="function"||Kn(e)||kr(e)||pr(e)))return!e.length;var t=Pt(e);if(t==Xe||t==et)return!e.size;if(ea(e))return!Qi(e).length;for(var s in e)if(Ze.call(e,s))return!1;return!0}function Rm(e,t){return Xr(e,t)}function Tm(e,t,s){s=typeof s=="function"?s:r;var c=s?s(e,t):r;return c===r?Xr(e,t,r,s):!!c}function Ns(e){if(!pt(e))return!1;var t=kt(e);return t==Ee||t==ve||typeof e.message=="string"&&typeof e.name=="string"&&!na(e)}function Om(e){return typeof e=="number"&&nl(e)}function Pn(e){if(!ut(e))return!1;var t=kt(e);return t==yt||t==We||t==Ve||t==Ye}function jc(e){return typeof e=="number"&&e==ke(e)}function ei(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=be}function ut(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function pt(e){return e!=null&&typeof e=="object"}var Sc=Lo?Kt(Lo):Ip;function Pm(e,t){return e===t||Zi(e,t,gs(t))}function $m(e,t,s){return s=typeof s=="function"?s:r,Zi(e,t,gs(t),s)}function km(e){return _c(e)&&e!=+e}function Im(e){if(bh(e))throw new Ae(d);return gl(e)}function Fm(e){return e===null}function Lm(e){return e==null}function _c(e){return typeof e=="number"||pt(e)&&kt(e)==qe}function na(e){if(!pt(e)||kt(e)!=Fe)return!1;var t=Ea(e);if(t===null)return!0;var s=Ze.call(t,"constructor")&&t.constructor;return typeof s=="function"&&s instanceof s&&Sa.call(s)==$f}var Cs=Do?Kt(Do):Fp;function Dm(e){return jc(e)&&e>=-be&&e<=be}var Nc=Uo?Kt(Uo):Lp;function ti(e){return typeof e=="string"||!Oe(e)&&pt(e)&&kt(e)==tt}function Xt(e){return typeof e=="symbol"||pt(e)&&kt(e)==je}var kr=Bo?Kt(Bo):Dp;function Um(e){return e===r}function Bm(e){return pt(e)&&Pt(e)==ht}function zm(e){return pt(e)&&kt(e)==lt}var Wm=Ya(es),Hm=Ya(function(e,t){return e<=t});function Cc(e){if(!e)return[];if(Bt(e))return ti(e)?gn(e):Ut(e);if(Hr&&e[Hr])return wf(e[Hr]());var t=Pt(e),s=t==Xe?zi:t==et?va:Ir;return s(e)}function $n(e){if(!e)return e===0?e:0;if(e=dn(e),e===$e||e===-$e){var t=e<0?-1:1;return t*U}return e===e?e:0}function ke(e){var t=$n(e),s=t%1;return t===t?s?t-s:t:0}function Ec(e){return e?cr(ke(e),0,de):0}function dn(e){if(typeof e=="number")return e;if(Xt(e))return ye;if(ut(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ut(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Go(e);var s=ho.test(e);return s||Nu.test(e)?rf(e.slice(2),s?2:8):hn.test(e)?ye:+e}function Ac(e){return _n(e,zt(e))}function qm(e){return e?cr(ke(e),-be,be):e===0?e:0}function Qe(e){return e==null?"":Jt(e)}var Ym=Or(function(e,t){if(ea(t)||Bt(t)){_n(t,Ct(t),e);return}for(var s in t)Ze.call(t,s)&&Mr(e,s,t[s])}),Rc=Or(function(e,t){_n(t,zt(t),e)}),Tc=Or(function(e,t,s,c){_n(t,zt(t),e,c)}),Es=Or(function(e,t,s,c){_n(t,Ct(t),e,c)}),Gm=Tn(Vi);function Vm(e,t){var s=Tr(e);return t==null?s:ol(s,t)}var Mm=Le(function(e,t){e=nt(e);var s=-1,c=t.length,f=c>2?t[2]:r;for(f&&It(t[0],t[1],f)&&(c=1);++s<c;)for(var m=t[s],w=zt(m),_=-1,T=w.length;++_<T;){var Y=w[_],G=e[Y];(G===r||bn(G,Er[Y])&&!Ze.call(e,Y))&&(e[Y]=m[Y])}return e}),Km=Le(function(e){return e.push(r,Gl),Vt(Oc,r,e)});function Jm(e,t){return Wo(e,Se(t,3),Sn)}function Xm(e,t){return Wo(e,Se(t,3),Ki)}function Zm(e,t){return e==null?e:Mi(e,Se(t,3),zt)}function Qm(e,t){return e==null?e:fl(e,Se(t,3),zt)}function e0(e,t){return e&&Sn(e,Se(t,3))}function t0(e,t){return e&&Ki(e,Se(t,3))}function n0(e){return e==null?[]:La(e,Ct(e))}function r0(e){return e==null?[]:La(e,zt(e))}function As(e,t,s){var c=e==null?r:dr(e,t);return c===r?s:c}function a0(e,t){return e!=null&&Kl(e,t,Ap)}function Rs(e,t){return e!=null&&Kl(e,t,Rp)}var i0=zl(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=_a.call(t)),e[t]=s},Os(Wt)),s0=zl(function(e,t,s){t!=null&&typeof t.toString!="function"&&(t=_a.call(t)),Ze.call(e,t)?e[t].push(s):e[t]=[s]},Se),o0=Le(Jr);function Ct(e){return Bt(e)?il(e):Qi(e)}function zt(e){return Bt(e)?il(e,!0):Up(e)}function l0(e,t){var s={};return t=Se(t,3),Sn(e,function(c,f,m){jn(s,t(c,f,m),c)}),s}function c0(e,t){var s={};return t=Se(t,3),Sn(e,function(c,f,m){jn(s,f,t(c,f,m))}),s}var d0=Or(function(e,t,s){Da(e,t,s)}),Oc=Or(function(e,t,s,c){Da(e,t,s,c)}),u0=Tn(function(e,t){var s={};if(e==null)return s;var c=!1;t=dt(t,function(m){return m=Vn(m,e),c||(c=m.length>1),m}),_n(e,ps(e),s),c&&(s=on(s,O|W|I,sh));for(var f=t.length;f--;)is(s,t[f]);return s});function f0(e,t){return Pc(e,Qa(Se(t)))}var p0=Tn(function(e,t){return e==null?{}:zp(e,t)});function Pc(e,t){if(e==null)return{};var s=dt(ps(e),function(c){return[c]});return t=Se(t),jl(e,s,function(c,f){return t(c,f[0])})}function h0(e,t,s){t=Vn(t,e);var c=-1,f=t.length;for(f||(f=1,e=r);++c<f;){var m=e==null?r:e[xn(t[c])];m===r&&(c=f,m=s),e=Pn(m)?m.call(e):m}return e}function g0(e,t,s){return e==null?e:Zr(e,t,s)}function m0(e,t,s,c){return c=typeof c=="function"?c:r,e==null?e:Zr(e,t,s,c)}var $c=ql(Ct),kc=ql(zt);function x0(e,t,s){var c=Oe(e),f=c||Kn(e)||kr(e);if(t=Se(t,4),s==null){var m=e&&e.constructor;f?s=c?new m:[]:ut(e)?s=Pn(m)?Tr(Ea(e)):{}:s={}}return(f?Mt:Sn)(e,function(w,_,T){return t(s,w,_,T)}),s}function b0(e,t){return e==null?!0:is(e,t)}function y0(e,t,s){return e==null?e:El(e,t,ls(s))}function v0(e,t,s,c){return c=typeof c=="function"?c:r,e==null?e:El(e,t,ls(s),c)}function Ir(e){return e==null?[]:Bi(e,Ct(e))}function w0(e){return e==null?[]:Bi(e,zt(e))}function j0(e,t,s){return s===r&&(s=t,t=r),s!==r&&(s=dn(s),s=s===s?s:0),t!==r&&(t=dn(t),t=t===t?t:0),cr(dn(e),t,s)}function S0(e,t,s){return t=$n(t),s===r?(s=t,t=0):s=$n(s),e=dn(e),Tp(e,t,s)}function _0(e,t,s){if(s&&typeof s!="boolean"&&It(e,t,s)&&(t=s=r),s===r&&(typeof t=="boolean"?(s=t,t=r):typeof e=="boolean"&&(s=e,e=r)),e===r&&t===r?(e=0,t=1):(e=$n(e),t===r?(t=e,e=0):t=$n(t)),e>t){var c=e;e=t,t=c}if(s||e%1||t%1){var f=rl();return Ot(e+f*(t-e+nf("1e-"+((f+"").length-1))),t)}return ns(e,t)}var N0=Pr(function(e,t,s){return t=t.toLowerCase(),e+(s?Ic(t):t)});function Ic(e){return Ts(Qe(e).toLowerCase())}function Fc(e){return e=Qe(e),e&&e.replace(Eu,mf).replace(Gu,"")}function C0(e,t,s){e=Qe(e),t=Jt(t);var c=e.length;s=s===r?c:cr(ke(s),0,c);var f=s;return s-=t.length,s>=0&&e.slice(s,f)==t}function E0(e){return e=Qe(e),e&&Bn.test(e)?e.replace(Gt,xf):e}function A0(e){return e=Qe(e),e&&ar.test(e)?e.replace(Cn,"\\$&"):e}var R0=Pr(function(e,t,s){return e+(s?"-":"")+t.toLowerCase()}),T0=Pr(function(e,t,s){return e+(s?" ":"")+t.toLowerCase()}),O0=Dl("toLowerCase");function P0(e,t,s){e=Qe(e),t=ke(t);var c=t?Nr(e):0;if(!t||c>=t)return e;var f=(t-c)/2;return qa(Oa(f),s)+e+qa(Ta(f),s)}function $0(e,t,s){e=Qe(e),t=ke(t);var c=t?Nr(e):0;return t&&c<t?e+qa(t-c,s):e}function k0(e,t,s){e=Qe(e),t=ke(t);var c=t?Nr(e):0;return t&&c<t?qa(t-c,s)+e:e}function I0(e,t,s){return s||t==null?t=0:t&&(t=+t),Hf(Qe(e).replace($t,""),t||0)}function F0(e,t,s){return(s?It(e,t,s):t===r)?t=1:t=ke(t),rs(Qe(e),t)}function L0(){var e=arguments,t=Qe(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var D0=Pr(function(e,t,s){return e+(s?"_":"")+t.toLowerCase()});function U0(e,t,s){return s&&typeof s!="number"&&It(e,t,s)&&(t=s=r),s=s===r?de:s>>>0,s?(e=Qe(e),e&&(typeof t=="string"||t!=null&&!Cs(t))&&(t=Jt(t),!t&&_r(e))?Mn(gn(e),0,s):e.split(t,s)):[]}var B0=Pr(function(e,t,s){return e+(s?" ":"")+Ts(t)});function z0(e,t,s){return e=Qe(e),s=s==null?0:cr(ke(s),0,e.length),t=Jt(t),e.slice(s,s+t.length)==t}function W0(e,t,s){var c=g.templateSettings;s&&It(e,t,s)&&(t=r),e=Qe(e),t=Es({},t,c,Yl);var f=Es({},t.imports,c.imports,Yl),m=Ct(f),w=Bi(f,m);Mt(m,function(we){if(Te.test(we))throw new Ae(p)});var _,T,Y=0,G=t.interpolate||ga,M="__p += '",ce=Wi((t.escape||ga).source+"|"+G.source+"|"+(G===tn?R:ga).source+"|"+(t.evaluate||ga).source+"|$","g"),ge="//# sourceURL="+(Ze.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Xu+"]")+`
`;e.replace(ce,function(we,De,ze,Zt,Ft,Qt){return ze||(ze=Zt),M+=e.slice(Y,Qt).replace(Au,bf),De&&(_=!0,M+=`' +
__e(`+De+`) +
'`),Ft&&(T=!0,M+=`';
`+Ft+`;
__p += '`),ze&&(M+=`' +
((__t = (`+ze+`)) == null ? '' : __t) +
'`),Y=Qt+we.length,we}),M+=`';
`;var _e=Ze.call(t,"variable")&&t.variable;if(!_e)M=`with (obj) {
`+M+`
}
`;else if(Te.test(_e))throw new Ae(h);M=(T?M.replace(Ge,""):M).replace(Yt,"$1").replace(Lt,"$1;"),M="function("+(_e||"obj")+`) {
`+(_e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(_?", __e = _.escape":"")+(T?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+M+`return __p
}`;var Ie=Dc(function(){return Ke(m,ge+"return "+M).apply(r,w)});if(Ie.source=M,Ns(Ie))throw Ie;return Ie}function H0(e){return Qe(e).toLowerCase()}function q0(e){return Qe(e).toUpperCase()}function Y0(e,t,s){if(e=Qe(e),e&&(s||t===r))return Go(e);if(!e||!(t=Jt(t)))return e;var c=gn(e),f=gn(t),m=Vo(c,f),w=Mo(c,f)+1;return Mn(c,m,w).join("")}function G0(e,t,s){if(e=Qe(e),e&&(s||t===r))return e.slice(0,Jo(e)+1);if(!e||!(t=Jt(t)))return e;var c=gn(e),f=Mo(c,gn(t))+1;return Mn(c,0,f).join("")}function V0(e,t,s){if(e=Qe(e),e&&(s||t===r))return e.replace($t,"");if(!e||!(t=Jt(t)))return e;var c=gn(e),f=Vo(c,gn(t));return Mn(c,f).join("")}function M0(e,t){var s=A,c=X;if(ut(t)){var f="separator"in t?t.separator:f;s="length"in t?ke(t.length):s,c="omission"in t?Jt(t.omission):c}e=Qe(e);var m=e.length;if(_r(e)){var w=gn(e);m=w.length}if(s>=m)return e;var _=s-Nr(c);if(_<1)return c;var T=w?Mn(w,0,_).join(""):e.slice(0,_);if(f===r)return T+c;if(w&&(_+=T.length-_),Cs(f)){if(e.slice(_).search(f)){var Y,G=T;for(f.global||(f=Wi(f.source,Qe(Dt.exec(f))+"g")),f.lastIndex=0;Y=f.exec(G);)var M=Y.index;T=T.slice(0,M===r?_:M)}}else if(e.indexOf(Jt(f),_)!=_){var ce=T.lastIndexOf(f);ce>-1&&(T=T.slice(0,ce))}return T+c}function K0(e){return e=Qe(e),e&&Nn.test(e)?e.replace(fn,Nf):e}var J0=Pr(function(e,t,s){return e+(s?" ":"")+t.toUpperCase()}),Ts=Dl("toUpperCase");function Lc(e,t,s){return e=Qe(e),t=s?r:t,t===r?vf(e)?Af(e):uf(e):e.match(t)||[]}var Dc=Le(function(e,t){try{return Vt(e,r,t)}catch(s){return Ns(s)?s:new Ae(s)}}),X0=Tn(function(e,t){return Mt(t,function(s){s=xn(s),jn(e,s,Ss(e[s],e))}),e});function Z0(e){var t=e==null?0:e.length,s=Se();return e=t?dt(e,function(c){if(typeof c[1]!="function")throw new an(u);return[s(c[0]),c[1]]}):[],Le(function(c){for(var f=-1;++f<t;){var m=e[f];if(Vt(m[0],this,c))return Vt(m[1],this,c)}})}function Q0(e){return Np(on(e,O))}function Os(e){return function(){return e}}function ex(e,t){return e==null||e!==e?t:e}var tx=Bl(),nx=Bl(!0);function Wt(e){return e}function Ps(e){return ml(typeof e=="function"?e:on(e,O))}function rx(e){return bl(on(e,O))}function ax(e,t){return yl(e,on(t,O))}var ix=Le(function(e,t){return function(s){return Jr(s,e,t)}}),sx=Le(function(e,t){return function(s){return Jr(e,s,t)}});function $s(e,t,s){var c=Ct(t),f=La(t,c);s==null&&!(ut(t)&&(f.length||!c.length))&&(s=t,t=e,e=this,f=La(t,Ct(t)));var m=!(ut(s)&&"chain"in s)||!!s.chain,w=Pn(e);return Mt(f,function(_){var T=t[_];e[_]=T,w&&(e.prototype[_]=function(){var Y=this.__chain__;if(m||Y){var G=e(this.__wrapped__),M=G.__actions__=Ut(this.__actions__);return M.push({func:T,args:arguments,thisArg:e}),G.__chain__=Y,G}return T.apply(e,Wn([this.value()],arguments))})}),e}function ox(){return At._===this&&(At._=kf),this}function ks(){}function lx(e){return e=ke(e),Le(function(t){return vl(t,e)})}var cx=ds(dt),dx=ds(zo),ux=ds(Ii);function Uc(e){return xs(e)?Fi(xn(e)):Wp(e)}function fx(e){return function(t){return e==null?r:dr(e,t)}}var px=Wl(),hx=Wl(!0);function Is(){return[]}function Fs(){return!1}function gx(){return{}}function mx(){return""}function xx(){return!0}function bx(e,t){if(e=ke(e),e<1||e>be)return[];var s=de,c=Ot(e,de);t=Se(t),e-=de;for(var f=Ui(c,t);++s<e;)t(s);return f}function yx(e){return Oe(e)?dt(e,xn):Xt(e)?[e]:Ut(ac(Qe(e)))}function vx(e){var t=++Pf;return Qe(e)+t}var wx=Ha(function(e,t){return e+t},0),jx=us("ceil"),Sx=Ha(function(e,t){return e/t},1),_x=us("floor");function Nx(e){return e&&e.length?Fa(e,Wt,Ji):r}function Cx(e,t){return e&&e.length?Fa(e,Se(t,2),Ji):r}function Ex(e){return qo(e,Wt)}function Ax(e,t){return qo(e,Se(t,2))}function Rx(e){return e&&e.length?Fa(e,Wt,es):r}function Tx(e,t){return e&&e.length?Fa(e,Se(t,2),es):r}var Ox=Ha(function(e,t){return e*t},1),Px=us("round"),$x=Ha(function(e,t){return e-t},0);function kx(e){return e&&e.length?Di(e,Wt):0}function Ix(e,t){return e&&e.length?Di(e,Se(t,2)):0}return g.after=am,g.ary=gc,g.assign=Ym,g.assignIn=Rc,g.assignInWith=Tc,g.assignWith=Es,g.at=Gm,g.before=mc,g.bind=Ss,g.bindAll=X0,g.bindKey=xc,g.castArray=mm,g.chain=fc,g.chunk=Nh,g.compact=Ch,g.concat=Eh,g.cond=Z0,g.conforms=Q0,g.constant=Os,g.countBy=Ig,g.create=Vm,g.curry=bc,g.curryRight=yc,g.debounce=vc,g.defaults=Mm,g.defaultsDeep=Km,g.defer=im,g.delay=sm,g.difference=Ah,g.differenceBy=Rh,g.differenceWith=Th,g.drop=Oh,g.dropRight=Ph,g.dropRightWhile=$h,g.dropWhile=kh,g.fill=Ih,g.filter=Lg,g.flatMap=Bg,g.flatMapDeep=zg,g.flatMapDepth=Wg,g.flatten=lc,g.flattenDeep=Fh,g.flattenDepth=Lh,g.flip=om,g.flow=tx,g.flowRight=nx,g.fromPairs=Dh,g.functions=n0,g.functionsIn=r0,g.groupBy=Hg,g.initial=Bh,g.intersection=zh,g.intersectionBy=Wh,g.intersectionWith=Hh,g.invert=i0,g.invertBy=s0,g.invokeMap=Yg,g.iteratee=Ps,g.keyBy=Gg,g.keys=Ct,g.keysIn=zt,g.map=Ja,g.mapKeys=l0,g.mapValues=c0,g.matches=rx,g.matchesProperty=ax,g.memoize=Za,g.merge=d0,g.mergeWith=Oc,g.method=ix,g.methodOf=sx,g.mixin=$s,g.negate=Qa,g.nthArg=lx,g.omit=u0,g.omitBy=f0,g.once=lm,g.orderBy=Vg,g.over=cx,g.overArgs=cm,g.overEvery=dx,g.overSome=ux,g.partial=_s,g.partialRight=wc,g.partition=Mg,g.pick=p0,g.pickBy=Pc,g.property=Uc,g.propertyOf=fx,g.pull=Vh,g.pullAll=dc,g.pullAllBy=Mh,g.pullAllWith=Kh,g.pullAt=Jh,g.range=px,g.rangeRight=hx,g.rearg=dm,g.reject=Xg,g.remove=Xh,g.rest=um,g.reverse=ws,g.sampleSize=Qg,g.set=g0,g.setWith=m0,g.shuffle=em,g.slice=Zh,g.sortBy=rm,g.sortedUniq=ig,g.sortedUniqBy=sg,g.split=U0,g.spread=fm,g.tail=og,g.take=lg,g.takeRight=cg,g.takeRightWhile=dg,g.takeWhile=ug,g.tap=Cg,g.throttle=pm,g.thru=Ka,g.toArray=Cc,g.toPairs=$c,g.toPairsIn=kc,g.toPath=yx,g.toPlainObject=Ac,g.transform=x0,g.unary=hm,g.union=fg,g.unionBy=pg,g.unionWith=hg,g.uniq=gg,g.uniqBy=mg,g.uniqWith=xg,g.unset=b0,g.unzip=js,g.unzipWith=uc,g.update=y0,g.updateWith=v0,g.values=Ir,g.valuesIn=w0,g.without=bg,g.words=Lc,g.wrap=gm,g.xor=yg,g.xorBy=vg,g.xorWith=wg,g.zip=jg,g.zipObject=Sg,g.zipObjectDeep=_g,g.zipWith=Ng,g.entries=$c,g.entriesIn=kc,g.extend=Rc,g.extendWith=Tc,$s(g,g),g.add=wx,g.attempt=Dc,g.camelCase=N0,g.capitalize=Ic,g.ceil=jx,g.clamp=j0,g.clone=xm,g.cloneDeep=ym,g.cloneDeepWith=vm,g.cloneWith=bm,g.conformsTo=wm,g.deburr=Fc,g.defaultTo=ex,g.divide=Sx,g.endsWith=C0,g.eq=bn,g.escape=E0,g.escapeRegExp=A0,g.every=Fg,g.find=Dg,g.findIndex=sc,g.findKey=Jm,g.findLast=Ug,g.findLastIndex=oc,g.findLastKey=Xm,g.floor=_x,g.forEach=pc,g.forEachRight=hc,g.forIn=Zm,g.forInRight=Qm,g.forOwn=e0,g.forOwnRight=t0,g.get=As,g.gt=jm,g.gte=Sm,g.has=a0,g.hasIn=Rs,g.head=cc,g.identity=Wt,g.includes=qg,g.indexOf=Uh,g.inRange=S0,g.invoke=o0,g.isArguments=pr,g.isArray=Oe,g.isArrayBuffer=_m,g.isArrayLike=Bt,g.isArrayLikeObject=mt,g.isBoolean=Nm,g.isBuffer=Kn,g.isDate=Cm,g.isElement=Em,g.isEmpty=Am,g.isEqual=Rm,g.isEqualWith=Tm,g.isError=Ns,g.isFinite=Om,g.isFunction=Pn,g.isInteger=jc,g.isLength=ei,g.isMap=Sc,g.isMatch=Pm,g.isMatchWith=$m,g.isNaN=km,g.isNative=Im,g.isNil=Lm,g.isNull=Fm,g.isNumber=_c,g.isObject=ut,g.isObjectLike=pt,g.isPlainObject=na,g.isRegExp=Cs,g.isSafeInteger=Dm,g.isSet=Nc,g.isString=ti,g.isSymbol=Xt,g.isTypedArray=kr,g.isUndefined=Um,g.isWeakMap=Bm,g.isWeakSet=zm,g.join=qh,g.kebabCase=R0,g.last=cn,g.lastIndexOf=Yh,g.lowerCase=T0,g.lowerFirst=O0,g.lt=Wm,g.lte=Hm,g.max=Nx,g.maxBy=Cx,g.mean=Ex,g.meanBy=Ax,g.min=Rx,g.minBy=Tx,g.stubArray=Is,g.stubFalse=Fs,g.stubObject=gx,g.stubString=mx,g.stubTrue=xx,g.multiply=Ox,g.nth=Gh,g.noConflict=ox,g.noop=ks,g.now=Xa,g.pad=P0,g.padEnd=$0,g.padStart=k0,g.parseInt=I0,g.random=_0,g.reduce=Kg,g.reduceRight=Jg,g.repeat=F0,g.replace=L0,g.result=h0,g.round=Px,g.runInContext=E,g.sample=Zg,g.size=tm,g.snakeCase=D0,g.some=nm,g.sortedIndex=Qh,g.sortedIndexBy=eg,g.sortedIndexOf=tg,g.sortedLastIndex=ng,g.sortedLastIndexBy=rg,g.sortedLastIndexOf=ag,g.startCase=B0,g.startsWith=z0,g.subtract=$x,g.sum=kx,g.sumBy=Ix,g.template=W0,g.times=bx,g.toFinite=$n,g.toInteger=ke,g.toLength=Ec,g.toLower=H0,g.toNumber=dn,g.toSafeInteger=qm,g.toString=Qe,g.toUpper=q0,g.trim=Y0,g.trimEnd=G0,g.trimStart=V0,g.truncate=M0,g.unescape=K0,g.uniqueId=vx,g.upperCase=J0,g.upperFirst=Ts,g.each=pc,g.eachRight=hc,g.first=cc,$s(g,function(){var e={};return Sn(g,function(t,s){Ze.call(g.prototype,s)||(e[s]=t)}),e}(),{chain:!1}),g.VERSION=o,Mt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){g[e].placeholder=g}),Mt(["drop","take"],function(e,t){Ue.prototype[e]=function(s){s=s===r?1:_t(ke(s),0);var c=this.__filtered__&&!t?new Ue(this):this.clone();return c.__filtered__?c.__takeCount__=Ot(s,c.__takeCount__):c.__views__.push({size:Ot(s,de),type:e+(c.__dir__<0?"Right":"")}),c},Ue.prototype[e+"Right"]=function(s){return this.reverse()[e](s).reverse()}}),Mt(["filter","map","takeWhile"],function(e,t){var s=t+1,c=s==Z||s==Pe;Ue.prototype[e]=function(f){var m=this.clone();return m.__iteratees__.push({iteratee:Se(f,3),type:s}),m.__filtered__=m.__filtered__||c,m}}),Mt(["head","last"],function(e,t){var s="take"+(t?"Right":"");Ue.prototype[e]=function(){return this[s](1).value()[0]}}),Mt(["initial","tail"],function(e,t){var s="drop"+(t?"":"Right");Ue.prototype[e]=function(){return this.__filtered__?new Ue(this):this[s](1)}}),Ue.prototype.compact=function(){return this.filter(Wt)},Ue.prototype.find=function(e){return this.filter(e).head()},Ue.prototype.findLast=function(e){return this.reverse().find(e)},Ue.prototype.invokeMap=Le(function(e,t){return typeof e=="function"?new Ue(this):this.map(function(s){return Jr(s,e,t)})}),Ue.prototype.reject=function(e){return this.filter(Qa(Se(e)))},Ue.prototype.slice=function(e,t){e=ke(e);var s=this;return s.__filtered__&&(e>0||t<0)?new Ue(s):(e<0?s=s.takeRight(-e):e&&(s=s.drop(e)),t!==r&&(t=ke(t),s=t<0?s.dropRight(-t):s.take(t-e)),s)},Ue.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Ue.prototype.toArray=function(){return this.take(de)},Sn(Ue.prototype,function(e,t){var s=/^(?:filter|find|map|reject)|While$/.test(t),c=/^(?:head|last)$/.test(t),f=g[c?"take"+(t=="last"?"Right":""):t],m=c||/^find/.test(t);f&&(g.prototype[t]=function(){var w=this.__wrapped__,_=c?[1]:arguments,T=w instanceof Ue,Y=_[0],G=T||Oe(w),M=function(De){var ze=f.apply(g,Wn([De],_));return c&&ce?ze[0]:ze};G&&s&&typeof Y=="function"&&Y.length!=1&&(T=G=!1);var ce=this.__chain__,ge=!!this.__actions__.length,_e=m&&!ce,Ie=T&&!ge;if(!m&&G){w=Ie?w:new Ue(this);var we=e.apply(w,_);return we.__actions__.push({func:Ka,args:[M],thisArg:r}),new sn(we,ce)}return _e&&Ie?e.apply(this,_):(we=this.thru(M),_e?c?we.value()[0]:we.value():we)})}),Mt(["pop","push","shift","sort","splice","unshift"],function(e){var t=wa[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);g.prototype[e]=function(){var f=arguments;if(c&&!this.__chain__){var m=this.value();return t.apply(Oe(m)?m:[],f)}return this[s](function(w){return t.apply(Oe(w)?w:[],f)})}}),Sn(Ue.prototype,function(e,t){var s=g[t];if(s){var c=s.name+"";Ze.call(Rr,c)||(Rr[c]=[]),Rr[c].push({name:t,func:s})}}),Rr[Wa(r,D).name]=[{name:"wrapper",func:r}],Ue.prototype.clone=Jf,Ue.prototype.reverse=Xf,Ue.prototype.value=Zf,g.prototype.at=Eg,g.prototype.chain=Ag,g.prototype.commit=Rg,g.prototype.next=Tg,g.prototype.plant=Pg,g.prototype.reverse=$g,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=kg,g.prototype.first=g.prototype.head,Hr&&(g.prototype[Hr]=Og),g},Cr=Rf();ir?((ir.exports=Cr)._=Cr,Oi._=Cr):At._=Cr}).call(Pv)}(la,la.exports)),la.exports}var kv=$v();const Iv="/x-pense-app/assets/bitcoin-DEGqceNT.png",Fv="/x-pense-app/assets/ethereum-CuEFbPJh.png",Lv="/x-pense-app/assets/usdc-LEAjTsRZ.png",Dv=({darkMode:a,investments:i,setInvestments:r,amounts:o,setAmounts:l,marketCaps:d,setMarketCaps:u,formatCurrency:h,addedInvestments:p,setAddedInvestments:x})=>{const b=wr(),[y,O]=S.useState(!1),[W,I]=S.useState(""),[k,L]=S.useState({}),[V,D]=S.useState({}),[N,C]=S.useState(!1);S.useEffect(()=>{(async()=>{var Z,oe,Pe,$e,be,U;try{O(!0);const ye=await Je.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),de=await Je.get("https://api.coinbase.com/v2/prices/ETH-USD/spot"),H=await Je.get("https://api.coinbase.com/v2/prices/USDC-USD/spot"),Q=((oe=(Z=ye.data)==null?void 0:Z.bitcoin)==null?void 0:oe.usd)||0,le=parseFloat(($e=(Pe=de.data)==null?void 0:Pe.data)==null?void 0:$e.amount)||0,ue=parseFloat((U=(be=H.data)==null?void 0:be.data)==null?void 0:U.amount)||1,Ne=i.reduce((q,ve)=>(q[ve.id]=ve.pricePerUnit,q),{}),Ve=[{id:"bitcoin",name:"Bitcoin",type:"Cryptocurrency",pricePerUnit:Q},{id:"ethereum",name:"Ethereum",type:"Cryptocurrency",pricePerUnit:le},{id:"usd-coin",name:"USDC",type:"Stablecoin",pricePerUnit:ue}],ae={};Ve.forEach(q=>{const ve=Ne[q.id];ve&&ve!==q.pricePerUnit&&(ae[q.id]=q.pricePerUnit>ve?"up":"down")}),L(ae),r(Ve),l(Ve.map(()=>0)),setTimeout(()=>L({}),3e3)}catch(ye){console.error("Error fetching investments",ye),I("❌ Failed to fetch live prices. Please try again."),setTimeout(()=>I(""),3e3)}finally{O(!1)}})()},[r,l]),S.useEffect(()=>{const P=async()=>{try{const Z=i.map(Pe=>Pe.id).join(","),oe=await bt.get("/api/coins/markets",{params:{ids:Z}});if(console.log("INVESTMENTS COMPONENTS"),console.log("Market cap response:",oe.data),Array.isArray(oe.data)){const Pe=oe.data.reduce(($e,be)=>($e[be.id]=be.market_cap,$e),{});console.log("Market cap data:",Pe),u(Pe)}else console.error("Expected an array but got:",oe.data)}catch(Z){console.error("Error fetching market cap data:",Z)}};i.length>0&&P()},[i]);const ne=kv.debounce((P,Z)=>{const oe=[...o],Pe=parseFloat(Z);isNaN(Pe)||(oe[P]=Pe,l(oe))},300),ie=(P,Z)=>(P*Z).toFixed(2),me=async P=>{const Z=i[P],oe=o[P];if(!oe||oe<=0){I("⚠️ Please enter a valid amount greater than 0"),setTimeout(()=>I(""),3e3);return}O(!0);const Pe=ie(oe,Z.pricePerUnit),$e={...Z,amount:oe,totalPrice:Pe};try{const be=p.findIndex(ye=>ye.name===$e.name);if(be!==-1){const ye=p[be],de=ye.amount+oe,H=ie(de,Z.pricePerUnit),Q=await bt.put(`/investments/${ye.id}`,{amount:de,totalPrice:H},{headers:{"Content-Type":"application/json"}}),le=[...p];le[be]={...ye,amount:de,totalPrice:H},x(le),I(`💰 Updated ${Z.name} investment successfully!`)}else{const ye=await bt.post("/investments",$e,{headers:{"Content-Type":"application/json"}});x([...p,$e]),I(`🚀 Added ${Z.name} investment successfully!`)}D({...V,[P]:!0}),setTimeout(()=>{D({...V,[P]:!1})},1e3);const U=[...o];U[P]=0,l(U),setTimeout(()=>I(""),3e3),setTimeout(()=>b("/dashboard"),2e3)}catch(be){console.error("Error adding/updating investment:",be),I("❌ Failed to add investment. Please try again."),setTimeout(()=>I(""),3e3)}finally{O(!1)}},re=P=>{var oe;const Z=[...o];Z[P]=0,l(Z),I(`🔄 Reset ${(oe=i[P])==null?void 0:oe.name} amount`),setTimeout(()=>I(""),2e3)},fe=async()=>{var P,Z,oe,Pe,$e,be;C(!0);try{const U=await Je.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),ye=await Je.get("https://api.coinbase.com/v2/prices/ETH-USD/spot"),de=await Je.get("https://api.coinbase.com/v2/prices/USDC-USD/spot"),H=((Z=(P=U.data)==null?void 0:P.bitcoin)==null?void 0:Z.usd)||0,Q=parseFloat((Pe=(oe=ye.data)==null?void 0:oe.data)==null?void 0:Pe.amount)||0,le=parseFloat((be=($e=de.data)==null?void 0:$e.data)==null?void 0:be.amount)||1;r([{id:"bitcoin",name:"Bitcoin",type:"Cryptocurrency",pricePerUnit:H},{id:"ethereum",name:"Ethereum",type:"Cryptocurrency",pricePerUnit:Q},{id:"usd-coin",name:"USDC",type:"Stablecoin",pricePerUnit:le}]),I("🔄 Prices refreshed successfully!"),setTimeout(()=>I(""),3e3)}catch(U){console.error("Error refreshing prices:",U),I("❌ Failed to refresh prices. Please try again."),setTimeout(()=>I(""),3e3)}finally{C(!1)}},xe=P=>{if(!P)return null;switch(P.toLowerCase()){case"bitcoin":return n.jsx("img",{src:Iv,alt:"Bitcoin",className:"crypto-icon",style:{width:"24px",height:"24px"}});case"ethereum":return n.jsx("img",{src:Fv,alt:"Ethereum",className:"crypto-icon",style:{width:"24px",height:"24px"}});case"usdc":return n.jsx("img",{src:Lv,alt:"USDC",className:"crypto-icon",style:{width:"24px",height:"24px"}});default:return n.jsx("div",{className:"crypto-placeholder",children:"💰"})}},A=P=>P>=1e12?`${(P/1e12).toFixed(2)} Trillion`:P>=1e9?`${(P/1e9).toFixed(2)} Billion`:P.toLocaleString(),X=P=>{const Z=k[P];return Z==="up"?"📈":Z==="down"?"📉":""},se=P=>{const Z=k[P];return Z==="up"?"price-up":Z==="down"?"price-down":""};return n.jsxs("div",{className:"investments-container",children:[n.jsx("style",{jsx:!0,children:`
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
            `}),n.jsxs("div",{className:"investments-header",children:[n.jsx("h5",{children:"🚀 Crypto Investments"}),n.jsx("p",{className:"investments-subtitle",children:"Invest in the future with real-time market data"})]}),W&&n.jsx("div",{className:"success-message",children:W}),n.jsxs("div",{className:"control-section",children:[n.jsxs("div",{className:"live-indicator",children:[n.jsx("span",{className:"live-badge",children:"Live"}),n.jsx("span",{children:"📊 Make Informed Decisions With Live Crypto Updates"})]}),n.jsxs("button",{className:"refresh-button",onClick:fe,disabled:N,children:[N?n.jsx("span",{className:"loading-spinner"}):"🔄",N?"Refreshing...":"Refresh Prices"]})]}),n.jsx("div",{className:"table-container",children:y&&i.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading investment data..."})]}):n.jsxs(n.Fragment,{children:[y&&n.jsx("div",{className:"loading-overlay",children:n.jsx("div",{className:"large-spinner"})}),n.jsxs("table",{className:"enhanced-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Symbol"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Market Cap"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:i.map((P,Z)=>n.jsxs("tr",{className:`table-row ${V[Z]?"animate":""}`,children:[n.jsxs("td",{className:"crypto-name-cell",children:[xe(P.name),n.jsx("span",{children:P.name})]}),n.jsx("td",{children:n.jsx("span",{style:{fontWeight:"600",textTransform:"uppercase",fontSize:"0.9rem"},children:P.id==="bitcoin"?"BTC":P.id==="ethereum"?"ETH":P.id==="usd-coin"?"USDC":P.name.substring(0,3).toUpperCase()})}),n.jsx("td",{children:n.jsx("span",{className:`type-badge ${P.type==="Cryptocurrency"?"type-crypto":"type-stablecoin"}`,children:P.type==="Cryptocurrency"?"Crypto":"Stable"})}),n.jsxs("td",{className:`price-cell ${se(P.id)}`,children:[n.jsx("span",{children:h(P.pricePerUnit)}),n.jsx("span",{children:X(P.id)})]}),n.jsx("td",{className:"market-cap-cell",children:d[P.id]?`$${A(d[P.id])}`:n.jsx("span",{style:{opacity:.7},children:"Loading..."})}),n.jsx("td",{children:n.jsx("input",{type:"number",className:"amount-input",value:o[Z]||"",placeholder:"0.00",name:`investment-amount-${Z}`,onChange:oe=>ne(Z,oe.target.value),step:"0.01",min:"0"})}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{className:"btn-modern btn-add",onClick:()=>me(Z),disabled:y||!o[Z]||o[Z]<=0,children:[y?n.jsx("span",{className:"loading-spinner"}):"💰","Add"]}),n.jsx("button",{className:"btn-modern btn-reset",onClick:()=>re(Z),disabled:y,children:"🔄 Reset"})]})})]},P.id))})]})]})}),n.jsx("div",{className:"mobile-cards",children:y&&i.length===0?n.jsxs("div",{className:"mobile-loading-card",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading investment data..."})]}):n.jsx(n.Fragment,{children:i.map((P,Z)=>n.jsxs("div",{className:`investment-card ${V[Z]?"animate":""}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"card-crypto-info",children:[xe(P.name),n.jsxs("div",{children:[n.jsx("div",{className:"card-crypto-name",children:P.name}),n.jsx("div",{className:"card-crypto-symbol",children:P.id==="bitcoin"?"BTC":P.id==="ethereum"?"ETH":P.id==="usd-coin"?"USDC":P.name.substring(0,3).toUpperCase()})]})]}),n.jsxs("div",{className:`card-price ${se(P.id)==="price-up"?"price-up-mobile":se(P.id)==="price-down"?"price-down-mobile":""}`,children:[n.jsx("span",{children:h(P.pricePerUnit)}),n.jsx("span",{children:X(P.id)})]})]}),n.jsxs("div",{className:"card-details",children:[n.jsx("span",{className:"card-label",children:"🏷️ Type:"}),n.jsx("span",{className:`card-value type-badge ${P.type==="Cryptocurrency"?"type-crypto":"type-stablecoin"}`,children:P.type==="Cryptocurrency"?"Crypto":"Stable"}),n.jsx("span",{className:"card-label",children:"📊 Market Cap:"}),n.jsx("span",{className:"card-value card-market-cap",children:d[P.id]?`$${A(d[P.id])}`:n.jsx("span",{style:{opacity:.7},children:"Loading..."})})]}),n.jsxs("div",{className:"card-input-section",children:[n.jsx("label",{className:"input-label",children:"💰 Investment Amount"}),n.jsx("input",{type:"number",className:"amount-input-mobile",value:o[Z]||"",placeholder:"0.00",name:`investment-amount-${Z}`,onChange:oe=>ne(Z,oe.target.value),step:"0.01",min:"0"}),n.jsxs("div",{className:"card-actions",children:[n.jsxs("button",{className:"btn-modern-mobile btn-add-mobile",onClick:()=>me(Z),disabled:y||!o[Z]||o[Z]<=0,children:[y?n.jsx("span",{className:"loading-spinner"}):"💰","Add Investment"]}),n.jsx("button",{className:"btn-modern-mobile btn-reset-mobile",onClick:()=>re(Z),disabled:y,children:"🔄 Reset"})]})]})]},P.id))})})]})},Uv="/x-pense-app/assets/intro_01-CLbcXq8c.mp3";function _u(){return n.jsx("footer",{className:"text-center my-5 footer fade-in",children:n.jsxs("p",{children:["©",new Date().getFullYear()," MarlonShade. All rights reserved."]})})}const Bv=()=>{const a=wr(),i=()=>{const r=new Audio(Uv);r.volume=.1,r.play().catch(o=>{console.error("Error playing audio",o)}),a("/dashboard")};return n.jsx("div",{className:"intro-margin",children:n.jsx("div",{className:"start-page-container",children:n.jsxs("div",{className:"start-page-content",children:[n.jsx("h1",{className:"intro metallic-shadow fade-in",children:"X-PENSE".split("").map((r,o)=>n.jsx("span",{className:`char char-${o}`,children:r},o))}),n.jsx("p",{className:"subtitle fade-in ",children:"Your Friendly Budget Tracker"}),n.jsx("button",{onClick:i,className:"btn-enhanced fade-in",children:"Get Started"}),n.jsx(_u,{})]})})})},zv=({darkMode:a})=>{const[i,r]=S.useState(""),[o,l]=S.useState(null),[d,u]=S.useState(mr.getStats()),h=()=>{if(i.trim()){const x=mr.categorizeTransaction(i);l(x)}},p=["STARBUCKS #1234 NEW YORK","SHELL GAS STATION #567","AMAZON.COM PURCHASE","WALMART SUPERCENTER #890","NETFLIX MONTHLY","ELECTRIC COMPANY BILL","CVS PHARMACY #123"];return n.jsxs("div",{className:"ai-demo-container",children:[n.jsx("style",{jsx:!0,children:`
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
      `}),n.jsxs("div",{className:"demo-header",children:[n.jsx("h3",{children:"🤖 AI Transaction Categorization Demo"}),n.jsx("p",{children:"Test how our AI categorizes different transaction descriptions"})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"Test AI Categorization"}),n.jsx("input",{type:"text",className:"test-input",placeholder:"Enter a transaction description (e.g., 'STARBUCKS #1234')",value:i,onChange:x=>r(x.target.value),onKeyPress:x=>x.key==="Enter"&&h()}),n.jsx("button",{className:"test-button",onClick:h,children:"🤖 Analyze Transaction"}),o&&n.jsxs("div",{className:"result-display",children:[n.jsxs("div",{children:["Category: ",n.jsx("strong",{children:o.category})]}),n.jsxs("div",{children:["Confidence: ",o.confidence,"%"]}),n.jsx("div",{className:"confidence-bar",children:n.jsx("div",{className:"confidence-fill",style:{width:`${o.confidence}%`}})})]})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"Sample Transactions"}),n.jsx("p",{children:"Click any sample to see how AI categorizes it:"}),p.map((x,b)=>{const y=mr.categorizeTransaction(x);return n.jsxs("div",{className:"sample-transaction",onClick:()=>{r(x),l(y)},style:{cursor:"pointer"},children:[n.jsx("span",{children:x}),n.jsxs("span",{style:{background:"#4299e1",color:"white",padding:"4px 8px",borderRadius:"4px",fontSize:"0.8rem"},children:[y.category," (",y.confidence,"%)"]})]},b)})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"AI Learning Statistics"}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:d.totalCorrections}),n.jsx("div",{children:"User Corrections"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsxs("div",{className:"stat-number",children:[d.learningAccuracy,"%"]}),n.jsx("div",{children:"Learning Accuracy"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:Object.keys(d.categoryDistribution).length}),n.jsx("div",{children:"Categories Learned"})]})]})]})]})};function Wv(){const a=Me=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Me),i=Me=>new Date(Me).toLocaleDateString(),r=Me=>{const R=new Date(Me);return R.setMinutes(R.getMinutes()+R.getTimezoneOffset()),i(R)},[o,l]=S.useState([]),[d,u]=S.useState(0),[h,p]=S.useState(0),[x,b]=S.useState(!0),[y,O]=S.useState(!1),[W,I]=S.useState([]),[k,L]=S.useState(0),[V,D]=S.useState([]),[N,C]=S.useState(""),[ne,ie]=S.useState(""),[me,re]=S.useState(""),[fe,xe]=S.useState(""),[A,X]=S.useState(null),[se,P]=S.useState(""),Z=V.reduce((Me,R)=>Me+R.amount,0),[oe,Pe]=S.useState(0),[$e,be]=S.useState(0),[U,ye]=S.useState(0),[de,H]=S.useState(0),Q=oe+$e+U,[le,ue]=S.useState(null),[Ne,Ve]=S.useState([]),[ae,q]=S.useState(null),[ve,Ee]=S.useState({cash_on_hand:0,bank_account_balance:0,savings:0,total:0}),[yt,We]=S.useState(null),[Xe,qe]=S.useState(0),[qt,Fe]=S.useState(0),[jt,Ye]=S.useState(""),[ot,et]=S.useState(""),[tt,je]=S.useState(""),[rt,ht]=S.useState(0),[lt,gt]=S.useState([]),[Tt,vt]=S.useState(lt.map(Me=>({...Me,progress:Me.saved/Me.target*100}))),[en,K]=S.useState({}),[te,he]=S.useState(null),[Re,He]=S.useState(""),[ct,Be]=S.useState({category:"",date:"",text:"",amount:""}),[Ge,Yt]=S.useState(""),[Lt,fn]=S.useState(""),[Gt,Nn]=S.useState([]),[Bn,nr]=S.useState([]),[rr,tn]=S.useState({}),[nn,pn]=S.useState(""),[wn,Cn]=S.useState(""),[ar,$t]=S.useState("");S.useEffect(()=>{const Me=o.reduce((R,Dt)=>R+parseFloat(Dt.amount),0);L(Me)},[o]),S.useEffect(()=>{x?(document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode"),document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode"),document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"))},[x]);const j=()=>{b(!x)},[B,F]=S.useState(!1),J=Me=>{I([...W,Me]),console.log("Added investment:",Me)},Ce=Me=>parseFloat(Me).toLocaleString(),Te=Me=>{if(!W||!W[Me]){console.error("Investment not found");return}const R=W[Me].id;bt.delete(`/investments/${R}`).then(Dt=>{if(Dt.status===204){const hn=W.filter((ho,Ni)=>Ni!==Me);I(hn)}else console.error("Failed to delete the investment")}).catch(Dt=>{console.error("Error:",Dt)})};return n.jsx(fv,{basename:"/x-pense-app",children:n.jsx(Hv,{darkMode:x,toggleDarkMode:j,sidebarOpen:y,setSidebarOpen:O,transactions:o,setTransactions:l,balance:d,setBalance:u,budget:h,setBudget:p,addedInvestments:W,setAddedInvestments:I,totalAmount:k,setTotalAmount:L,items:V,setItems:D,name:N,setName:C,amount:ne,setAmount:ie,newBudget:me,setNewBudget:re,error:fe,setError:xe,editingIndex:A,setEditingIndex:X,editAmount:se,setEditAmount:P,totalBudgetAmount:Z,cashOnHand:oe,setCashOnHand:Pe,bankAccountBalance:$e,setBankAccountBalance:be,savings:U,setSavings:ye,total:de,setTotal:H,totalBalance:Q,balanceId:le,setBalanceId:ue,balances:Ne,setBalances:Ve,editIndex:ae,setEditIndex:q,editBalance:ve,setEditBalance:Ee,balanceError:yt,setBalanceError:We,goalAmount:Xe,setGoalAmount:qe,currentAmount:qt,setCurrentAmount:Fe,inputAmount:jt,setInputAmount:Ye,newGoalName:ot,setNewGoalName:et,newGoalAmount:tt,setNewGoalAmount:je,progPercentage:rt,setProgPercentage:ht,goals:lt,setGoals:gt,goalsProgress:Tt,setGoalsProgress:vt,inputAmounts:en,setInputAmounts:K,editingGoalId:te,setEditingGoalId:he,editedGoalName:Re,setEditedGoalName:He,editTransaction:ct,setEditTransaction:Be,reminderDate:Ge,setReminderDate:Yt,successMessage:Lt,setSuccessMessage:fn,investments:Gt,setInvestments:Nn,amounts:Bn,setAmounts:nr,marketCaps:rr,setMarketCaps:tn,category:nn,setCategory:pn,date:wn,setDate:Cn,description:ar,setDescription:$t,validated:B,setValidated:F,formatCurrency:a,formatDate:i,parseDate:r,formatAmount:Ce,handleAddInvestment:J,handleRemoveInvestment:Te})})}function Hv(a){const i=tr(),{darkMode:r,toggleDarkMode:o,sidebarOpen:l,setSidebarOpen:d,transactions:u,setTransactions:h,balance:p,setBalance:x,budget:b,setBudget:y,addedInvestments:O,setAddedInvestments:W,totalAmount:I,setTotalAmount:k,items:L,setItems:V,name:D,setName:N,amount:C,setAmount:ne,newBudget:ie,setNewBudget:me,error:re,setError:fe,editingIndex:xe,setEditingIndex:A,editAmount:X,setEditAmount:se,totalBudgetAmount:P,cashOnHand:Z,setCashOnHand:oe,bankAccountBalance:Pe,setBankAccountBalance:$e,savings:be,setSavings:U,total:ye,setTotal:de,totalBalance:H,balanceId:Q,setBalanceId:le,balances:ue,setBalances:Ne,editIndex:Ve,setEditIndex:ae,editBalance:q,setEditBalance:ve,balanceError:Ee,setBalanceError:yt,goalAmount:We,setGoalAmount:Xe,currentAmount:qe,setCurrentAmount:qt,inputAmount:Fe,setInputAmount:jt,newGoalName:Ye,setNewGoalName:ot,newGoalAmount:et,setNewGoalAmount:tt,progPercentage:je,setProgPercentage:rt,goals:ht,setGoals:lt,goalsProgress:gt,setGoalsProgress:Tt,inputAmounts:vt,setInputAmounts:en,editingGoalId:K,setEditingGoalId:te,editedGoalName:he,setEditedGoalName:Re,editTransaction:He,setEditTransaction:ct,reminderDate:Be,setReminderDate:Ge,successMessage:Yt,setSuccessMessage:Lt,investments:fn,setInvestments:Gt,amounts:Nn,setAmounts:Bn,marketCaps:nr,setMarketCaps:rr,category:tn,setCategory:nn,date:pn,setDate:wn,description:Cn,setDescription:ar,validated:$t,setValidated:j,formatCurrency:B,formatDate:F,parseDate:J,formatAmount:Ce,handleAddInvestment:Te,handleRemoveInvestment:Me}=a;return n.jsxs("div",{id:"root",className:`${r?"dark-mode":"light-mode"}`,children:[i.pathname==="/"?n.jsx("div",{style:{height:"100vh",width:"100%"},children:n.jsx(wd,{children:n.jsx(vn,{path:"/",element:n.jsx(Bv,{})})})}):n.jsxs("div",{className:"d-flex",style:{minHeight:"100vh"},children:[n.jsx("div",{className:"d-md-none hamburger-container",children:n.jsx("button",{className:`btn hamburger-btn ${r?"dark-mode":""}`,onClick:()=>d(!l),"aria-label":"Toggle navigation menu",children:n.jsx("span",{style:{fontSize:"1.3rem",fontWeight:"bold"},children:"☰"})})}),l&&n.jsx("div",{className:"d-md-none position-fixed w-100 h-100",style:{top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1040},onClick:()=>d(!1)}),n.jsxs("nav",{className:`d-flex flex-column p-3 ${r?"navbar-dark-mode":"navbar-light-mode"} mobile-sidebar ${l?"show d-block":"d-none d-md-flex"}`,style:{width:"250px",minHeight:"100vh",transition:"all 0.3s ease",borderRight:`2px solid ${r?"#495057":"#dee2e6"}`,boxShadow:"2px 0 10px rgba(0, 0, 0, 0.1)",borderRadius:"10px",...window.innerWidth<768?{position:"fixed",top:0,left:0,zIndex:1045}:{}},onMouseEnter:R=>{R.target.style.boxShadow="2px 0 15px rgba(0, 0, 0, 0.2)"},onMouseLeave:R=>{R.target.style.boxShadow="2px 0 10px rgba(0, 0, 0, 0.1)"},children:[n.jsx("div",{className:"d-md-none d-flex justify-content-end mb-2",children:n.jsx("button",{className:`btn btn-sm ${r?"btn-light":"btn-dark"}`,onClick:()=>d(!1),style:{padding:"4px 8px",borderRadius:"4px"},children:"✕"})}),n.jsxs("div",{className:"text-center mb-4",children:[n.jsxs("div",{className:"d-flex align-items-center justify-content-center mb-2",style:{flexWrap:"nowrap"},children:[n.jsx("h1",{className:"mb-0",style:{whiteSpace:"nowrap",marginRight:".5rem"},children:n.jsx("span",{className:`app-title ${r?"metallic-shadow-dark":"metallic-shadow-light"}`,style:{cursor:"pointer",transition:"all 0.3s ease",fontSize:"2.2rem",fontWeight:"bold",letterSpacing:"1px"},onMouseEnter:R=>{R.target.style.transform="scale(1.1)",R.target.style.textShadow="0 0 10px rgba(0, 123, 255, 0.5)"},onMouseLeave:R=>{R.target.style.transform="scale(1)",R.target.style.textShadow=""},onClick:()=>window.location.href="/dashboard",children:"X-PENSE"})}),n.jsx("span",{className:"badge badge-danger border p-1",style:{transition:"all 0.3s ease",cursor:"default",fontSize:"0.65rem",whiteSpace:"nowrap"},onMouseEnter:R=>{R.target.style.transform="scale(1.05)",R.target.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"},onMouseLeave:R=>{R.target.style.transform="scale(1)",R.target.style.boxShadow=""},children:"Ai-Powered"})]}),n.jsxs("button",{onClick:o,className:"btn btn-sm w-100",style:{background:r?"linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)":"linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",color:r?"#1a1a1a":"#ffffff",border:`2px solid ${r?"#ffd700":"#64748b"}`,fontSize:"12px",padding:"10px 16px",borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)",transform:"scale(1)",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",backdropFilter:"blur(10px)",maxWidth:"100%"},onMouseEnter:R=>{R.target.style.transform="scale(1.05)",R.target.style.boxShadow=r?"0 6px 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)":"0 6px 20px rgba(30, 41, 59, 0.4), 0 0 30px rgba(30, 41, 59, 0.2)"},onMouseLeave:R=>{R.target.style.transform="scale(1)",R.target.style.boxShadow=r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)"},onMouseDown:R=>{R.target.style.transform="scale(0.98)"},onMouseUp:R=>{R.target.style.transform="scale(1.05)",setTimeout(()=>{R.target.style.transform="scale(1)"},150)},children:[n.jsx("span",{style:{fontSize:"16px"},children:r?"☀️":"🌙"}),n.jsx("span",{style:{fontSize:"12px",letterSpacing:"0.5px"},children:r?"LIGHT MODE":"DARK MODE"})]})]}),n.jsxs("ul",{className:`nav nav-pills flex-column ${r?"nav-tabs-bg-dark-mode":"nav-tabs-bg-light-mode"}`,style:{display:"flex",flexDirection:"column",width:"100%",listStyle:"none",margin:0,padding:0},children:[n.jsx("li",{className:"nav-item mb-2",style:{width:"100%",display:"block",marginBottom:"8px"},children:n.jsxs(In,{className:({isActive:R})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${R?"active bg-primary text-white":""}`,to:"/dashboard",style:({isActive:R})=>({backgroundColor:R?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",padding:"12px 16px",boxSizing:"border-box"}),onMouseEnter:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1.05)",R.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1)",R.target.style.backgroundColor="")},children:[n.jsx(Ad,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Dashboard"]})}),n.jsx("li",{className:"nav-item mb-2",style:{width:"100%",display:"block",marginBottom:"8px"},children:n.jsxs(In,{className:({isActive:R})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${R?"active bg-primary text-white":""}`,to:"/budget",style:({isActive:R})=>({backgroundColor:R?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",padding:"12px 16px",boxSizing:"border-box"}),onMouseEnter:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1.05)",R.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1)",R.target.style.backgroundColor="")},children:[n.jsx(Rd,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Budget"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(In,{className:({isActive:R})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${R?"active bg-primary text-white":""}`,to:"/balance",style:({isActive:R})=>({backgroundColor:R?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1.05)",R.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1)",R.target.style.backgroundColor="")},children:[n.jsx(Td,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Balance"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(In,{className:({isActive:R})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${R?"active bg-success text-white":""}`,to:"/add",style:({isActive:R})=>({backgroundColor:R?"#28a745":r?"#2d3748":"#ffffff",color:R?"white":r?"#e2e8f0":"#2d3748",transform:"scale(1)",transition:"all 0.3s ease",fontWeight:"bold"}),onMouseEnter:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1.05)",R.target.style.backgroundColor="#28a745",R.target.style.color="white")},onMouseLeave:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1)",R.target.style.backgroundColor=r?"#2d3748":"#ffffff",R.target.style.color=r?"#e2e8f0":"#2d3748")},children:[n.jsx(Od,{size:18,className:"me-2",style:{marginRight:"12px"}}),n.jsx("strong",{children:"X-PENSE"})]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(In,{className:({isActive:R})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${R?"active bg-primary text-white":""}`,to:"/transactions",style:({isActive:R})=>({backgroundColor:R?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1.05)",R.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1)",R.target.style.backgroundColor="")},children:[n.jsx(Pd,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Transactions"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(In,{className:({isActive:R})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${R?"active bg-primary text-white":""}`,to:"/goals",style:({isActive:R})=>({backgroundColor:R?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1.05)",R.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1)",R.target.style.backgroundColor="")},children:[n.jsx($d,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Goals"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(In,{className:({isActive:R})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${R?"active bg-primary text-white":""}`,to:"/investments",style:({isActive:R})=>({backgroundColor:R?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1.05)",R.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1)",R.target.style.backgroundColor="")},children:[n.jsx(kd,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Investments"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(In,{className:({isActive:R})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${R?"active bg-info text-white":""}`,to:"/ai-demo",style:({isActive:R})=>({backgroundColor:R?"#17a2b8":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1.05)",R.target.style.backgroundColor="#17a2b8",R.target.style.color="white")},onMouseLeave:R=>{R.target.classList.contains("active")||(R.target.style.transform="scale(1)",R.target.style.backgroundColor="",R.target.style.color="")},children:[n.jsx(Id,{size:18,className:"me-2",style:{marginRight:"12px"}}),n.jsx("strong",{children:"AI Demo"})]})})]}),n.jsx("div",{className:"mt-3 pt-3",style:{borderTop:`1px solid ${r?"#495057":"#dee2e6"}`,marginTop:"auto"},children:n.jsx("div",{className:`text-center p-3 rounded ${r?"bg-secondary":"bg-light"}`,style:{transition:"all 0.3s ease",background:r?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",border:`1px solid ${r?"#4a5568":"#dee2e6"}`,boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)"},children:n.jsxs("small",{className:`${r?"text-light":"text-dark"}`,style:{fontSize:"13px",fontWeight:"500",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[n.jsx("span",{children:"👤"}),n.jsx("span",{children:"Welcome Marlon"}),n.jsx("span",{children:"🟢"}),n.jsx("span",{children:"Online"})]})})})]}),n.jsxs("div",{className:"flex-grow-1 p-4",style:{paddingTop:window.innerWidth<768?"60px":"1rem"},children:[n.jsx("div",{className:"d-md-none mb-3",children:n.jsxs("button",{onClick:o,className:"btn btn-sm w-100",style:{background:r?"linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)":"linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",color:r?"#1a1a1a":"#ffffff",border:`2px solid ${r?"#ffd700":"#64748b"}`,fontSize:"11px",padding:"8px 16px",borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)",transform:"scale(1)",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",backdropFilter:"blur(10px)",maxWidth:"100%"},onMouseDown:R=>{R.target.style.transform="scale(0.95)"},onMouseUp:R=>{R.target.style.transform="scale(1.05)",setTimeout(()=>{R.target.style.transform="scale(1)"},150)},onTouchStart:R=>{R.target.style.transform="scale(0.95)",R.target.style.boxShadow=r?"0 2px 8px rgba(255, 215, 0, 0.5)":"0 2px 8px rgba(30, 41, 59, 0.5)"},onTouchEnd:R=>{R.target.style.transform="scale(1.05)",setTimeout(()=>{R.target.style.transform="scale(1)",R.target.style.boxShadow=r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)"},150)},children:[n.jsx("span",{style:{fontSize:"14px"},children:r?"☀️":"🌙"}),n.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.5px"},children:r?"LIGHT":"DARK"})]})}),n.jsxs(wd,{children:[n.jsx(vn,{path:"/",element:n.jsx(rv,{to:"/dashboard",replace:!0})}),n.jsx(vn,{path:"/dashboard",element:n.jsx(Rv,{transactions:u,balance:H,budget:b,investments:fn,totalAmount:I,darkMode:r,formatAmount:Ce,addedInvestments:O,goals:ht,setGoals:lt,formatCurrency:B,formatDate:F,handleRemoveInvestment:Me,goalsProgress:gt,setGoalsProgress:Tt,totalBudgetAmount:P,parseDate:J,setItems:V,setBalances:Ne,setCashOnHand:oe,setBankAccountBalance:$e,setSavings:U,setTransactions:h,setAddedInvestments:W,setInvestments:Gt,setAmounts:Bn})}),n.jsx(vn,{path:"/budget",element:n.jsx(Nv,{balance:p,budget:b,setBudget:y,darkMode:r,validated:$t,setValidated:j,formatCurrency:B,items:L,setItems:V,name:D,setName:N,amount:C,setAmount:ne,newBudget:ie,setNewBudget:me,error:re,setError:fe,editingIndex:xe,setEditingIndex:A,editAmount:X,setEditAmount:se,date:pn,setDate:wn,totalBudgetAmount:P,parseDate:J})}),n.jsx(vn,{path:"/balance",element:n.jsx(_v,{balance:p,setBalance:x,transactions:u,budget:b,darkMode:r,validated:$t,setValidated:j,cashOnHand:Z,setCashOnHand:oe,bankAccountBalance:Pe,setBankAccountBalance:$e,savings:be,setSavings:U,total:ye,setTotal:de,formatCurrency:B,balanceId:Q,setBalanceId:le,balances:ue,setBalances:Ne,editIndex:Ve,setEditIndex:ae,editBalance:q,setEditBalance:ve,balanceError:Ee,setBalanceError:yt})}),n.jsx(vn,{path:"/transactions",element:n.jsx(Tv,{transactions:u,setTransactions:h,darkMode:r,validated:$t,setValidated:j,formatCurrency:B,totalAmount:I,setTotalAmount:k,editIndex:Ve,setEditIndex:ae,editTransaction:He,setEditTransaction:ct,reminderDate:Be,setReminderDate:Ge,successMessage:Yt,setSuccessMessage:Lt,parseDate:J})}),n.jsx(vn,{path:"/add",element:n.jsx(wv,{darkMode:r,validated:$t,setValidated:j,amount:C,setAmount:ne,category:tn,setCategory:nn,date:pn,setDate:wn,description:Cn,setDescription:ar})}),n.jsx(vn,{path:"/goals",element:n.jsx(Ov,{goalAmount:We,setGoalAmount:Xe,currentAmount:qe,setCurrentAmount:qt,newGoalName:Ye,setNewGoalName:ot,newGoalAmount:et,setNewGoalAmount:tt,progPercentage:je,setProgPercentage:rt,goals:ht,setGoals:lt,validated:$t,setValidated:j,inputAmounts:vt,setInputAmounts:en,editingGoalId:K,setEditingGoalId:te,editedGoalName:he,setEditedGoalName:Re,formatCurrency:B,darkMode:r})}),n.jsx(vn,{path:"/investments",element:n.jsx(Dv,{formatAmount:Ce,formatCurrency:B,darkMode:r,onAddInvestment:R=>{const Dt=O.findIndex(hn=>hn.id===R.id);if(Dt!==-1){const hn=[...O];hn[Dt]={...hn[Dt],amount:hn[Dt].amount+R.amount,totalPrice:hn[Dt].totalPrice+R.totalPrice},W(hn)}else W([...O,R])},validated:$t,setValidated:j,investments:fn,setInvestments:Gt,amounts:Nn,setAmounts:Bn,marketCaps:nr,setMarketCaps:rr,addedInvestments:O,setAddedInvestments:W})}),n.jsx(vn,{path:"/ai-demo",element:n.jsx(zv,{darkMode:r})})]}),n.jsx(_u,{})]})]}),i.pathname!=="/"&&n.jsx(qv,{darkMode:r})]})}const qv=({darkMode:a})=>{const i=tr(),r=[{path:"/dashboard",icon:Ad,label:"Dashboard"},{path:"/budget",icon:Rd,label:"Budget"},{path:"/balance",icon:Td,label:"Balance"},{path:"/add",icon:Od,label:"X-PENSE"}],o=[{path:"/transactions",icon:Pd,label:"Transactions"},{path:"/goals",icon:$d,label:"Goals"},{path:"/investments",icon:kd,label:"Investments"},{path:"/ai-demo",icon:Id,label:"AI Demo"}],l=d=>n.jsx("div",{style:{display:"flex",width:"100%",height:"50%"},children:d.map((u,h)=>{const p=u.icon,x=i.pathname===u.path,b=u.path==="/add";return n.jsxs(In,{to:u.path,className:"text-decoration-none",onClick:()=>{window.innerWidth<=768&&(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},50))},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:b?"6px 4px":"4px 2px",flex:"1 1 25%",borderRadius:b?"12px":"8px",margin:"0 1px",transition:"all 0.2s ease",color:b?"#ffffff":x?"#4299e1":a?"#a0aec0":"#6c757d",background:b?"linear-gradient(135deg, #28a745 0%, #20c997 100%)":x?"rgba(66, 153, 225, 0.15)":"transparent",boxShadow:b?"0 4px 15px rgba(40, 167, 69, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)":"none",textAlign:"center",transform:b?"scale(1.05)":"scale(1)"},children:[n.jsx(p,{size:b?18:16,style:{marginBottom:"2px",strokeWidth:b?3:x?2.5:2,flexShrink:0}}),n.jsx("span",{style:{fontSize:b?"10px":"9px",fontWeight:b?"700":x?"600":"500",lineHeight:"1.1",display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",letterSpacing:b?"0.5px":"normal"},children:u.label})]},h)})});return n.jsx("nav",{className:"d-md-none",style:{position:"fixed",bottom:"0",left:"0",right:"0",width:"100%",background:a?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",borderTop:`2px solid ${a?"#4a5568":"#dee2e6"}`,padding:"4px",boxShadow:"0 -4px 20px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(10px)",zIndex:9999,height:"100px",boxSizing:"border-box",transform:"translateZ(0)"},children:n.jsxs("div",{className:"mobile-nav-container",style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",padding:"2px"},children:[l(r),l(o)]})})};Xx.createRoot(document.getElementById("root")).render(n.jsx(Wv,{}));
