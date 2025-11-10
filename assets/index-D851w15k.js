import{a as Hm,r as y,b as Gm,j as n,c as Ha}from"./charts-nivo-DYQ47lf6.js";import{C as Dc,a as Ym,L as qm,P as Vm,b as Km,B as Jm,p as Mm,c as Xm,d as Zm,i as Qm,A as ex,e as tx,f as nx,D as Ga}from"./charts-others-D3x3PcxJ.js";import{C as Bc,b as zc,a as Wc,D as Hc,c as Gc,P as Yc,R as qc,T as Vc,d as Kc,L as Jc}from"./utils-D7KHK4u5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();var Ya={},gc;function rx(){if(gc)return Ya;gc=1;var i=Hm();return Ya.createRoot=i.createRoot,Ya.hydrateRoot=i.hydrateRoot,Ya}var ax=rx();function Mc(i,s){return function(){return i.apply(s,arguments)}}const{toString:ix}=Object.prototype,{getPrototypeOf:Is}=Object,ti=(i=>s=>{const r=ix.call(s);return i[r]||(i[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),hn=i=>(i=i.toLowerCase(),s=>ti(s)===i),ni=i=>s=>typeof s===i,{isArray:Er}=Array,Mr=ni("undefined");function sx(i){return i!==null&&!Mr(i)&&i.constructor!==null&&!Mr(i.constructor)&&Gt(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Xc=hn("ArrayBuffer");function ox(i){let s;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?s=ArrayBuffer.isView(i):s=i&&i.buffer&&Xc(i.buffer),s}const lx=ni("string"),Gt=ni("function"),Zc=ni("number"),ri=i=>i!==null&&typeof i=="object",cx=i=>i===!0||i===!1,qa=i=>{if(ti(i)!=="object")return!1;const s=Is(i);return(s===null||s===Object.prototype||Object.getPrototypeOf(s)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},dx=hn("Date"),ux=hn("File"),px=hn("Blob"),fx=hn("FileList"),hx=i=>ri(i)&&Gt(i.pipe),gx=i=>{let s;return i&&(typeof FormData=="function"&&i instanceof FormData||Gt(i.append)&&((s=ti(i))==="formdata"||s==="object"&&Gt(i.toString)&&i.toString()==="[object FormData]"))},mx=hn("URLSearchParams"),[xx,bx,vx,yx]=["ReadableStream","Request","Response","Headers"].map(hn),wx=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qr(i,s,{allOwnKeys:r=!1}={}){if(i===null||typeof i>"u")return;let o,c;if(typeof i!="object"&&(i=[i]),Er(i))for(o=0,c=i.length;o<c;o++)s.call(null,i[o],o,i);else{const d=r?Object.getOwnPropertyNames(i):Object.keys(i),u=d.length;let m;for(o=0;o<u;o++)m=d[o],s.call(null,i[m],m,i)}}function Qc(i,s){s=s.toLowerCase();const r=Object.keys(i);let o=r.length,c;for(;o-- >0;)if(c=r[o],s===c.toLowerCase())return c;return null}const or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ed=i=>!Mr(i)&&i!==or;function As(){const{caseless:i}=ed(this)&&this||{},s={},r=(o,c)=>{const d=i&&Qc(s,c)||c;qa(s[d])&&qa(o)?s[d]=As(s[d],o):qa(o)?s[d]=As({},o):Er(o)?s[d]=o.slice():s[d]=o};for(let o=0,c=arguments.length;o<c;o++)arguments[o]&&Qr(arguments[o],r);return s}const jx=(i,s,r,{allOwnKeys:o}={})=>(Qr(s,(c,d)=>{r&&Gt(c)?i[d]=Mc(c,r):i[d]=c},{allOwnKeys:o}),i),Nx=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),Sx=(i,s,r,o)=>{i.prototype=Object.create(s.prototype,o),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:s.prototype}),r&&Object.assign(i.prototype,r)},_x=(i,s,r,o)=>{let c,d,u;const m={};if(s=s||{},i==null)return s;do{for(c=Object.getOwnPropertyNames(i),d=c.length;d-- >0;)u=c[d],(!o||o(u,i,s))&&!m[u]&&(s[u]=i[u],m[u]=!0);i=r!==!1&&Is(i)}while(i&&(!r||r(i,s))&&i!==Object.prototype);return s},Cx=(i,s,r)=>{i=String(i),(r===void 0||r>i.length)&&(r=i.length),r-=s.length;const o=i.indexOf(s,r);return o!==-1&&o===r},Ax=i=>{if(!i)return null;if(Er(i))return i;let s=i.length;if(!Zc(s))return null;const r=new Array(s);for(;s-- >0;)r[s]=i[s];return r},Ex=(i=>s=>i&&s instanceof i)(typeof Uint8Array<"u"&&Is(Uint8Array)),Tx=(i,s)=>{const o=(i&&i[Symbol.iterator]).call(i);let c;for(;(c=o.next())&&!c.done;){const d=c.value;s.call(i,d[0],d[1])}},Rx=(i,s)=>{let r;const o=[];for(;(r=i.exec(s))!==null;)o.push(r);return o},$x=hn("HTMLFormElement"),kx=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,c){return o.toUpperCase()+c}),mc=(({hasOwnProperty:i})=>(s,r)=>i.call(s,r))(Object.prototype),Px=hn("RegExp"),td=(i,s)=>{const r=Object.getOwnPropertyDescriptors(i),o={};Qr(r,(c,d)=>{let u;(u=s(c,d,i))!==!1&&(o[d]=u||c)}),Object.defineProperties(i,o)},Fx=i=>{td(i,(s,r)=>{if(Gt(i)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const o=i[r];if(Gt(o)){if(s.enumerable=!1,"writable"in s){s.writable=!1;return}s.set||(s.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Ox=(i,s)=>{const r={},o=c=>{c.forEach(d=>{r[d]=!0})};return Er(i)?o(i):o(String(i).split(s)),r},Ix=()=>{},Lx=(i,s)=>i!=null&&Number.isFinite(i=+i)?i:s,ws="abcdefghijklmnopqrstuvwxyz",xc="0123456789",nd={DIGIT:xc,ALPHA:ws,ALPHA_DIGIT:ws+ws.toUpperCase()+xc},Ux=(i=16,s=nd.ALPHA_DIGIT)=>{let r="";const{length:o}=s;for(;i--;)r+=s[Math.random()*o|0];return r};function Dx(i){return!!(i&&Gt(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const Bx=i=>{const s=new Array(10),r=(o,c)=>{if(ri(o)){if(s.indexOf(o)>=0)return;if(!("toJSON"in o)){s[c]=o;const d=Er(o)?[]:{};return Qr(o,(u,m)=>{const g=r(u,c+1);!Mr(g)&&(d[m]=g)}),s[c]=void 0,d}}return o};return r(i,0)},zx=hn("AsyncFunction"),Wx=i=>i&&(ri(i)||Gt(i))&&Gt(i.then)&&Gt(i.catch),rd=((i,s)=>i?setImmediate:s?((r,o)=>(or.addEventListener("message",({source:c,data:d})=>{c===or&&d===r&&o.length&&o.shift()()},!1),c=>{o.push(c),or.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Gt(or.postMessage)),Hx=typeof queueMicrotask<"u"?queueMicrotask.bind(or):typeof process<"u"&&process.nextTick||rd,O={isArray:Er,isArrayBuffer:Xc,isBuffer:sx,isFormData:gx,isArrayBufferView:ox,isString:lx,isNumber:Zc,isBoolean:cx,isObject:ri,isPlainObject:qa,isReadableStream:xx,isRequest:bx,isResponse:vx,isHeaders:yx,isUndefined:Mr,isDate:dx,isFile:ux,isBlob:px,isRegExp:Px,isFunction:Gt,isStream:hx,isURLSearchParams:mx,isTypedArray:Ex,isFileList:fx,forEach:Qr,merge:As,extend:jx,trim:wx,stripBOM:Nx,inherits:Sx,toFlatObject:_x,kindOf:ti,kindOfTest:hn,endsWith:Cx,toArray:Ax,forEachEntry:Tx,matchAll:Rx,isHTMLForm:$x,hasOwnProperty:mc,hasOwnProp:mc,reduceDescriptors:td,freezeMethods:Fx,toObjectSet:Ox,toCamelCase:kx,noop:Ix,toFiniteNumber:Lx,findKey:Qc,global:or,isContextDefined:ed,ALPHABET:nd,generateString:Ux,isSpecCompliantForm:Dx,toJSONObject:Bx,isAsyncFn:zx,isThenable:Wx,setImmediate:rd,asap:Hx};function Te(i,s,r,o,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",s&&(this.code=s),r&&(this.config=r),o&&(this.request=o),c&&(this.response=c,this.status=c.status?c.status:null)}O.inherits(Te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const ad=Te.prototype,id={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{id[i]={value:i}});Object.defineProperties(Te,id);Object.defineProperty(ad,"isAxiosError",{value:!0});Te.from=(i,s,r,o,c,d)=>{const u=Object.create(ad);return O.toFlatObject(i,u,function(g){return g!==Error.prototype},m=>m!=="isAxiosError"),Te.call(u,i.message,s,r,o,c),u.cause=i,u.name=i.name,d&&Object.assign(u,d),u};const Gx=null;function Es(i){return O.isPlainObject(i)||O.isArray(i)}function sd(i){return O.endsWith(i,"[]")?i.slice(0,-2):i}function bc(i,s,r){return i?i.concat(s).map(function(c,d){return c=sd(c),!r&&d?"["+c+"]":c}).join(r?".":""):s}function Yx(i){return O.isArray(i)&&!i.some(Es)}const qx=O.toFlatObject(O,{},null,function(s){return/^is[A-Z]/.test(s)});function ai(i,s,r){if(!O.isObject(i))throw new TypeError("target must be an object");s=s||new FormData,r=O.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,A){return!O.isUndefined(A[k])});const o=r.metaTokens,c=r.visitor||v,d=r.dots,u=r.indexes,g=(r.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(s);if(!O.isFunction(c))throw new TypeError("visitor must be a function");function j(T){if(T===null)return"";if(O.isDate(T))return T.toISOString();if(!g&&O.isBlob(T))throw new Te("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(T)||O.isTypedArray(T)?g&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function v(T,k,A){let Y=T;if(T&&!A&&typeof T=="object"){if(O.endsWith(k,"{}"))k=o?k:k.slice(0,-2),T=JSON.stringify(T);else if(O.isArray(T)&&Yx(T)||(O.isFileList(T)||O.endsWith(k,"[]"))&&(Y=O.toArray(T)))return k=sd(k),Y.forEach(function($,K){!(O.isUndefined($)||$===null)&&s.append(u===!0?bc([k],K,d):u===null?k:k+"[]",j($))}),!1}return Es(T)?!0:(s.append(bc(A,k,d),j(T)),!1)}const w=[],I=Object.assign(qx,{defaultVisitor:v,convertValue:j,isVisitable:Es});function J(T,k){if(!O.isUndefined(T)){if(w.indexOf(T)!==-1)throw Error("Circular reference detected in "+k.join("."));w.push(T),O.forEach(T,function(Y,V){(!(O.isUndefined(Y)||Y===null)&&c.call(s,Y,O.isString(V)?V.trim():V,k,I))===!0&&J(Y,k?k.concat(V):[V])}),w.pop()}}if(!O.isObject(i))throw new TypeError("data must be an object");return J(i),s}function vc(i){const s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(o){return s[o]})}function Ls(i,s){this._pairs=[],i&&ai(i,this,s)}const od=Ls.prototype;od.append=function(s,r){this._pairs.push([s,r])};od.toString=function(s){const r=s?function(o){return s.call(this,o,vc)}:vc;return this._pairs.map(function(c){return r(c[0])+"="+r(c[1])},"").join("&")};function Vx(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ld(i,s,r){if(!s)return i;const o=r&&r.encode||Vx;O.isFunction(r)&&(r={serialize:r});const c=r&&r.serialize;let d;if(c?d=c(s,r):d=O.isURLSearchParams(s)?s.toString():new Ls(s,r).toString(o),d){const u=i.indexOf("#");u!==-1&&(i=i.slice(0,u)),i+=(i.indexOf("?")===-1?"?":"&")+d}return i}class yc{constructor(){this.handlers=[]}use(s,r,o){return this.handlers.push({fulfilled:s,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(s){this.handlers[s]&&(this.handlers[s]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(s){O.forEach(this.handlers,function(o){o!==null&&s(o)})}}const cd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Kx=typeof URLSearchParams<"u"?URLSearchParams:Ls,Jx=typeof FormData<"u"?FormData:null,Mx=typeof Blob<"u"?Blob:null,Xx={isBrowser:!0,classes:{URLSearchParams:Kx,FormData:Jx,Blob:Mx},protocols:["http","https","file","blob","url","data"]},Us=typeof window<"u"&&typeof document<"u",Ts=typeof navigator=="object"&&navigator||void 0,Zx=Us&&(!Ts||["ReactNative","NativeScript","NS"].indexOf(Ts.product)<0),Qx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",eb=Us&&window.location.href||"http://localhost",tb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Us,hasStandardBrowserEnv:Zx,hasStandardBrowserWebWorkerEnv:Qx,navigator:Ts,origin:eb},Symbol.toStringTag,{value:"Module"})),jt={...tb,...Xx};function nb(i,s){return ai(i,new jt.classes.URLSearchParams,Object.assign({visitor:function(r,o,c,d){return jt.isNode&&O.isBuffer(r)?(this.append(o,r.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},s))}function rb(i){return O.matchAll(/\w+|\[(\w*)]/g,i).map(s=>s[0]==="[]"?"":s[1]||s[0])}function ab(i){const s={},r=Object.keys(i);let o;const c=r.length;let d;for(o=0;o<c;o++)d=r[o],s[d]=i[d];return s}function dd(i){function s(r,o,c,d){let u=r[d++];if(u==="__proto__")return!0;const m=Number.isFinite(+u),g=d>=r.length;return u=!u&&O.isArray(c)?c.length:u,g?(O.hasOwnProp(c,u)?c[u]=[c[u],o]:c[u]=o,!m):((!c[u]||!O.isObject(c[u]))&&(c[u]=[]),s(r,o,c[u],d)&&O.isArray(c[u])&&(c[u]=ab(c[u])),!m)}if(O.isFormData(i)&&O.isFunction(i.entries)){const r={};return O.forEachEntry(i,(o,c)=>{s(rb(o),c,r,0)}),r}return null}function ib(i,s,r){if(O.isString(i))try{return(s||JSON.parse)(i),O.trim(i)}catch(o){if(o.name!=="SyntaxError")throw o}return(0,JSON.stringify)(i)}const ea={transitional:cd,adapter:["xhr","http","fetch"],transformRequest:[function(s,r){const o=r.getContentType()||"",c=o.indexOf("application/json")>-1,d=O.isObject(s);if(d&&O.isHTMLForm(s)&&(s=new FormData(s)),O.isFormData(s))return c?JSON.stringify(dd(s)):s;if(O.isArrayBuffer(s)||O.isBuffer(s)||O.isStream(s)||O.isFile(s)||O.isBlob(s)||O.isReadableStream(s))return s;if(O.isArrayBufferView(s))return s.buffer;if(O.isURLSearchParams(s))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),s.toString();let m;if(d){if(o.indexOf("application/x-www-form-urlencoded")>-1)return nb(s,this.formSerializer).toString();if((m=O.isFileList(s))||o.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return ai(m?{"files[]":s}:s,g&&new g,this.formSerializer)}}return d||c?(r.setContentType("application/json",!1),ib(s)):s}],transformResponse:[function(s){const r=this.transitional||ea.transitional,o=r&&r.forcedJSONParsing,c=this.responseType==="json";if(O.isResponse(s)||O.isReadableStream(s))return s;if(s&&O.isString(s)&&(o&&!this.responseType||c)){const u=!(r&&r.silentJSONParsing)&&c;try{return JSON.parse(s)}catch(m){if(u)throw m.name==="SyntaxError"?Te.from(m,Te.ERR_BAD_RESPONSE,this,null,this.response):m}}return s}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(s){return s>=200&&s<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],i=>{ea.headers[i]={}});const sb=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ob=i=>{const s={};let r,o,c;return i&&i.split(`
`).forEach(function(u){c=u.indexOf(":"),r=u.substring(0,c).trim().toLowerCase(),o=u.substring(c+1).trim(),!(!r||s[r]&&sb[r])&&(r==="set-cookie"?s[r]?s[r].push(o):s[r]=[o]:s[r]=s[r]?s[r]+", "+o:o)}),s},wc=Symbol("internals");function Vr(i){return i&&String(i).trim().toLowerCase()}function Va(i){return i===!1||i==null?i:O.isArray(i)?i.map(Va):String(i)}function lb(i){const s=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(i);)s[o[1]]=o[2];return s}const cb=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function js(i,s,r,o,c){if(O.isFunction(o))return o.call(this,s,r);if(c&&(s=r),!!O.isString(s)){if(O.isString(o))return s.indexOf(o)!==-1;if(O.isRegExp(o))return o.test(s)}}function db(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(s,r,o)=>r.toUpperCase()+o)}function ub(i,s){const r=O.toCamelCase(" "+s);["get","set","has"].forEach(o=>{Object.defineProperty(i,o+r,{value:function(c,d,u){return this[o].call(this,s,c,d,u)},configurable:!0})})}class kt{constructor(s){s&&this.set(s)}set(s,r,o){const c=this;function d(m,g,j){const v=Vr(g);if(!v)throw new Error("header name must be a non-empty string");const w=O.findKey(c,v);(!w||c[w]===void 0||j===!0||j===void 0&&c[w]!==!1)&&(c[w||g]=Va(m))}const u=(m,g)=>O.forEach(m,(j,v)=>d(j,v,g));if(O.isPlainObject(s)||s instanceof this.constructor)u(s,r);else if(O.isString(s)&&(s=s.trim())&&!cb(s))u(ob(s),r);else if(O.isHeaders(s))for(const[m,g]of s.entries())d(g,m,o);else s!=null&&d(r,s,o);return this}get(s,r){if(s=Vr(s),s){const o=O.findKey(this,s);if(o){const c=this[o];if(!r)return c;if(r===!0)return lb(c);if(O.isFunction(r))return r.call(this,c,o);if(O.isRegExp(r))return r.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(s,r){if(s=Vr(s),s){const o=O.findKey(this,s);return!!(o&&this[o]!==void 0&&(!r||js(this,this[o],o,r)))}return!1}delete(s,r){const o=this;let c=!1;function d(u){if(u=Vr(u),u){const m=O.findKey(o,u);m&&(!r||js(o,o[m],m,r))&&(delete o[m],c=!0)}}return O.isArray(s)?s.forEach(d):d(s),c}clear(s){const r=Object.keys(this);let o=r.length,c=!1;for(;o--;){const d=r[o];(!s||js(this,this[d],d,s,!0))&&(delete this[d],c=!0)}return c}normalize(s){const r=this,o={};return O.forEach(this,(c,d)=>{const u=O.findKey(o,d);if(u){r[u]=Va(c),delete r[d];return}const m=s?db(d):String(d).trim();m!==d&&delete r[d],r[m]=Va(c),o[m]=!0}),this}concat(...s){return this.constructor.concat(this,...s)}toJSON(s){const r=Object.create(null);return O.forEach(this,(o,c)=>{o!=null&&o!==!1&&(r[c]=s&&O.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([s,r])=>s+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(s){return s instanceof this?s:new this(s)}static concat(s,...r){const o=new this(s);return r.forEach(c=>o.set(c)),o}static accessor(s){const o=(this[wc]=this[wc]={accessors:{}}).accessors,c=this.prototype;function d(u){const m=Vr(u);o[m]||(ub(c,u),o[m]=!0)}return O.isArray(s)?s.forEach(d):d(s),this}}kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(kt.prototype,({value:i},s)=>{let r=s[0].toUpperCase()+s.slice(1);return{get:()=>i,set(o){this[r]=o}}});O.freezeMethods(kt);function Ns(i,s){const r=this||ea,o=s||r,c=kt.from(o.headers);let d=o.data;return O.forEach(i,function(m){d=m.call(r,d,c.normalize(),s?s.status:void 0)}),c.normalize(),d}function ud(i){return!!(i&&i.__CANCEL__)}function Tr(i,s,r){Te.call(this,i??"canceled",Te.ERR_CANCELED,s,r),this.name="CanceledError"}O.inherits(Tr,Te,{__CANCEL__:!0});function pd(i,s,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?i(r):s(new Te("Request failed with status code "+r.status,[Te.ERR_BAD_REQUEST,Te.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function pb(i){const s=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return s&&s[1]||""}function fb(i,s){i=i||10;const r=new Array(i),o=new Array(i);let c=0,d=0,u;return s=s!==void 0?s:1e3,function(g){const j=Date.now(),v=o[d];u||(u=j),r[c]=g,o[c]=j;let w=d,I=0;for(;w!==c;)I+=r[w++],w=w%i;if(c=(c+1)%i,c===d&&(d=(d+1)%i),j-u<s)return;const J=v&&j-v;return J?Math.round(I*1e3/J):void 0}}function hb(i,s){let r=0,o=1e3/s,c,d;const u=(j,v=Date.now())=>{r=v,c=null,d&&(clearTimeout(d),d=null),i.apply(null,j)};return[(...j)=>{const v=Date.now(),w=v-r;w>=o?u(j,v):(c=j,d||(d=setTimeout(()=>{d=null,u(c)},o-w)))},()=>c&&u(c)]}const Ja=(i,s,r=3)=>{let o=0;const c=fb(50,250);return hb(d=>{const u=d.loaded,m=d.lengthComputable?d.total:void 0,g=u-o,j=c(g),v=u<=m;o=u;const w={loaded:u,total:m,progress:m?u/m:void 0,bytes:g,rate:j||void 0,estimated:j&&m&&v?(m-u)/j:void 0,event:d,lengthComputable:m!=null,[s?"download":"upload"]:!0};i(w)},r)},jc=(i,s)=>{const r=i!=null;return[o=>s[0]({lengthComputable:r,total:i,loaded:o}),s[1]]},Nc=i=>(...s)=>O.asap(()=>i(...s)),gb=jt.hasStandardBrowserEnv?((i,s)=>r=>(r=new URL(r,jt.origin),i.protocol===r.protocol&&i.host===r.host&&(s||i.port===r.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,mb=jt.hasStandardBrowserEnv?{write(i,s,r,o,c,d){const u=[i+"="+encodeURIComponent(s)];O.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),O.isString(o)&&u.push("path="+o),O.isString(c)&&u.push("domain="+c),d===!0&&u.push("secure"),document.cookie=u.join("; ")},read(i){const s=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function xb(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function bb(i,s){return s?i.replace(/\/?\/$/,"")+"/"+s.replace(/^\/+/,""):i}function fd(i,s){return i&&!xb(s)?bb(i,s):s}const Sc=i=>i instanceof kt?{...i}:i;function dr(i,s){s=s||{};const r={};function o(j,v,w,I){return O.isPlainObject(j)&&O.isPlainObject(v)?O.merge.call({caseless:I},j,v):O.isPlainObject(v)?O.merge({},v):O.isArray(v)?v.slice():v}function c(j,v,w,I){if(O.isUndefined(v)){if(!O.isUndefined(j))return o(void 0,j,w,I)}else return o(j,v,w,I)}function d(j,v){if(!O.isUndefined(v))return o(void 0,v)}function u(j,v){if(O.isUndefined(v)){if(!O.isUndefined(j))return o(void 0,j)}else return o(void 0,v)}function m(j,v,w){if(w in s)return o(j,v);if(w in i)return o(void 0,j)}const g={url:d,method:d,data:d,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:m,headers:(j,v,w)=>c(Sc(j),Sc(v),w,!0)};return O.forEach(Object.keys(Object.assign({},i,s)),function(v){const w=g[v]||c,I=w(i[v],s[v],v);O.isUndefined(I)&&w!==m||(r[v]=I)}),r}const hd=i=>{const s=dr({},i);let{data:r,withXSRFToken:o,xsrfHeaderName:c,xsrfCookieName:d,headers:u,auth:m}=s;s.headers=u=kt.from(u),s.url=ld(fd(s.baseURL,s.url),i.params,i.paramsSerializer),m&&u.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let g;if(O.isFormData(r)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((g=u.getContentType())!==!1){const[j,...v]=g?g.split(";").map(w=>w.trim()).filter(Boolean):[];u.setContentType([j||"multipart/form-data",...v].join("; "))}}if(jt.hasStandardBrowserEnv&&(o&&O.isFunction(o)&&(o=o(s)),o||o!==!1&&gb(s.url))){const j=c&&d&&mb.read(d);j&&u.set(c,j)}return s},vb=typeof XMLHttpRequest<"u",yb=vb&&function(i){return new Promise(function(r,o){const c=hd(i);let d=c.data;const u=kt.from(c.headers).normalize();let{responseType:m,onUploadProgress:g,onDownloadProgress:j}=c,v,w,I,J,T;function k(){J&&J(),T&&T(),c.cancelToken&&c.cancelToken.unsubscribe(v),c.signal&&c.signal.removeEventListener("abort",v)}let A=new XMLHttpRequest;A.open(c.method.toUpperCase(),c.url,!0),A.timeout=c.timeout;function Y(){if(!A)return;const $=kt.from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),ne={data:!m||m==="text"||m==="json"?A.responseText:A.response,status:A.status,statusText:A.statusText,headers:$,config:i,request:A};pd(function(ve){r(ve),k()},function(ve){o(ve),k()},ne),A=null}"onloadend"in A?A.onloadend=Y:A.onreadystatechange=function(){!A||A.readyState!==4||A.status===0&&!(A.responseURL&&A.responseURL.indexOf("file:")===0)||setTimeout(Y)},A.onabort=function(){A&&(o(new Te("Request aborted",Te.ECONNABORTED,i,A)),A=null)},A.onerror=function(){o(new Te("Network Error",Te.ERR_NETWORK,i,A)),A=null},A.ontimeout=function(){let K=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const ne=c.transitional||cd;c.timeoutErrorMessage&&(K=c.timeoutErrorMessage),o(new Te(K,ne.clarifyTimeoutError?Te.ETIMEDOUT:Te.ECONNABORTED,i,A)),A=null},d===void 0&&u.setContentType(null),"setRequestHeader"in A&&O.forEach(u.toJSON(),function(K,ne){A.setRequestHeader(ne,K)}),O.isUndefined(c.withCredentials)||(A.withCredentials=!!c.withCredentials),m&&m!=="json"&&(A.responseType=c.responseType),j&&([I,T]=Ja(j,!0),A.addEventListener("progress",I)),g&&A.upload&&([w,J]=Ja(g),A.upload.addEventListener("progress",w),A.upload.addEventListener("loadend",J)),(c.cancelToken||c.signal)&&(v=$=>{A&&(o(!$||$.type?new Tr(null,i,A):$),A.abort(),A=null)},c.cancelToken&&c.cancelToken.subscribe(v),c.signal&&(c.signal.aborted?v():c.signal.addEventListener("abort",v)));const V=pb(c.url);if(V&&jt.protocols.indexOf(V)===-1){o(new Te("Unsupported protocol "+V+":",Te.ERR_BAD_REQUEST,i));return}A.send(d||null)})},wb=(i,s)=>{const{length:r}=i=i?i.filter(Boolean):[];if(s||r){let o=new AbortController,c;const d=function(j){if(!c){c=!0,m();const v=j instanceof Error?j:this.reason;o.abort(v instanceof Te?v:new Tr(v instanceof Error?v.message:v))}};let u=s&&setTimeout(()=>{u=null,d(new Te(`timeout ${s} of ms exceeded`,Te.ETIMEDOUT))},s);const m=()=>{i&&(u&&clearTimeout(u),u=null,i.forEach(j=>{j.unsubscribe?j.unsubscribe(d):j.removeEventListener("abort",d)}),i=null)};i.forEach(j=>j.addEventListener("abort",d));const{signal:g}=o;return g.unsubscribe=()=>O.asap(m),g}},jb=function*(i,s){let r=i.byteLength;if(r<s){yield i;return}let o=0,c;for(;o<r;)c=o+s,yield i.slice(o,c),o=c},Nb=async function*(i,s){for await(const r of Sb(i))yield*jb(r,s)},Sb=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const s=i.getReader();try{for(;;){const{done:r,value:o}=await s.read();if(r)break;yield o}}finally{await s.cancel()}},_c=(i,s,r,o)=>{const c=Nb(i,s);let d=0,u,m=g=>{u||(u=!0,o&&o(g))};return new ReadableStream({async pull(g){try{const{done:j,value:v}=await c.next();if(j){m(),g.close();return}let w=v.byteLength;if(r){let I=d+=w;r(I)}g.enqueue(new Uint8Array(v))}catch(j){throw m(j),j}},cancel(g){return m(g),c.return()}},{highWaterMark:2})},ii=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",gd=ii&&typeof ReadableStream=="function",_b=ii&&(typeof TextEncoder=="function"?(i=>s=>i.encode(s))(new TextEncoder):async i=>new Uint8Array(await new Response(i).arrayBuffer())),md=(i,...s)=>{try{return!!i(...s)}catch{return!1}},Cb=gd&&md(()=>{let i=!1;const s=new Request(jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return i=!0,"half"}}).headers.has("Content-Type");return i&&!s}),Cc=64*1024,Rs=gd&&md(()=>O.isReadableStream(new Response("").body)),Ma={stream:Rs&&(i=>i.body)};ii&&(i=>{["text","arrayBuffer","blob","formData","stream"].forEach(s=>{!Ma[s]&&(Ma[s]=O.isFunction(i[s])?r=>r[s]():(r,o)=>{throw new Te(`Response type '${s}' is not supported`,Te.ERR_NOT_SUPPORT,o)})})})(new Response);const Ab=async i=>{if(i==null)return 0;if(O.isBlob(i))return i.size;if(O.isSpecCompliantForm(i))return(await new Request(jt.origin,{method:"POST",body:i}).arrayBuffer()).byteLength;if(O.isArrayBufferView(i)||O.isArrayBuffer(i))return i.byteLength;if(O.isURLSearchParams(i)&&(i=i+""),O.isString(i))return(await _b(i)).byteLength},Eb=async(i,s)=>{const r=O.toFiniteNumber(i.getContentLength());return r??Ab(s)},Tb=ii&&(async i=>{let{url:s,method:r,data:o,signal:c,cancelToken:d,timeout:u,onDownloadProgress:m,onUploadProgress:g,responseType:j,headers:v,withCredentials:w="same-origin",fetchOptions:I}=hd(i);j=j?(j+"").toLowerCase():"text";let J=wb([c,d&&d.toAbortSignal()],u),T;const k=J&&J.unsubscribe&&(()=>{J.unsubscribe()});let A;try{if(g&&Cb&&r!=="get"&&r!=="head"&&(A=await Eb(v,o))!==0){let ne=new Request(s,{method:"POST",body:o,duplex:"half"}),fe;if(O.isFormData(o)&&(fe=ne.headers.get("content-type"))&&v.setContentType(fe),ne.body){const[ve,be]=jc(A,Ja(Nc(g)));o=_c(ne.body,Cc,ve,be)}}O.isString(w)||(w=w?"include":"omit");const Y="credentials"in Request.prototype;T=new Request(s,{...I,signal:J,method:r.toUpperCase(),headers:v.normalize().toJSON(),body:o,duplex:"half",credentials:Y?w:void 0});let V=await fetch(T);const $=Rs&&(j==="stream"||j==="response");if(Rs&&(m||$&&k)){const ne={};["status","statusText","headers"].forEach(ye=>{ne[ye]=V[ye]});const fe=O.toFiniteNumber(V.headers.get("content-length")),[ve,be]=m&&jc(fe,Ja(Nc(m),!0))||[];V=new Response(_c(V.body,Cc,ve,()=>{be&&be(),k&&k()}),ne)}j=j||"text";let K=await Ma[O.findKey(Ma,j)||"text"](V,i);return!$&&k&&k(),await new Promise((ne,fe)=>{pd(ne,fe,{data:K,headers:kt.from(V.headers),status:V.status,statusText:V.statusText,config:i,request:T})})}catch(Y){throw k&&k(),Y&&Y.name==="TypeError"&&/fetch/i.test(Y.message)?Object.assign(new Te("Network Error",Te.ERR_NETWORK,i,T),{cause:Y.cause||Y}):Te.from(Y,Y&&Y.code,i,T)}}),$s={http:Gx,xhr:yb,fetch:Tb};O.forEach($s,(i,s)=>{if(i){try{Object.defineProperty(i,"name",{value:s})}catch{}Object.defineProperty(i,"adapterName",{value:s})}});const Ac=i=>`- ${i}`,Rb=i=>O.isFunction(i)||i===null||i===!1,xd={getAdapter:i=>{i=O.isArray(i)?i:[i];const{length:s}=i;let r,o;const c={};for(let d=0;d<s;d++){r=i[d];let u;if(o=r,!Rb(r)&&(o=$s[(u=String(r)).toLowerCase()],o===void 0))throw new Te(`Unknown adapter '${u}'`);if(o)break;c[u||"#"+d]=o}if(!o){const d=Object.entries(c).map(([m,g])=>`adapter ${m} `+(g===!1?"is not supported by the environment":"is not available in the build"));let u=s?d.length>1?`since :
`+d.map(Ac).join(`
`):" "+Ac(d[0]):"as no adapter specified";throw new Te("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o},adapters:$s};function Ss(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Tr(null,i)}function Ec(i){return Ss(i),i.headers=kt.from(i.headers),i.data=Ns.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),xd.getAdapter(i.adapter||ea.adapter)(i).then(function(o){return Ss(i),o.data=Ns.call(i,i.transformResponse,o),o.headers=kt.from(o.headers),o},function(o){return ud(o)||(Ss(i),o&&o.response&&(o.response.data=Ns.call(i,i.transformResponse,o.response),o.response.headers=kt.from(o.response.headers))),Promise.reject(o)})}const bd="1.7.9",si={};["object","boolean","number","function","string","symbol"].forEach((i,s)=>{si[i]=function(o){return typeof o===i||"a"+(s<1?"n ":" ")+i}});const Tc={};si.transitional=function(s,r,o){function c(d,u){return"[Axios v"+bd+"] Transitional option '"+d+"'"+u+(o?". "+o:"")}return(d,u,m)=>{if(s===!1)throw new Te(c(u," has been removed"+(r?" in "+r:"")),Te.ERR_DEPRECATED);return r&&!Tc[u]&&(Tc[u]=!0,console.warn(c(u," has been deprecated since v"+r+" and will be removed in the near future"))),s?s(d,u,m):!0}};si.spelling=function(s){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${s}`),!0)};function $b(i,s,r){if(typeof i!="object")throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);const o=Object.keys(i);let c=o.length;for(;c-- >0;){const d=o[c],u=s[d];if(u){const m=i[d],g=m===void 0||u(m,d,i);if(g!==!0)throw new Te("option "+d+" must be "+g,Te.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Te("Unknown option "+d,Te.ERR_BAD_OPTION)}}const Ka={assertOptions:$b,validators:si},vn=Ka.validators;class cr{constructor(s){this.defaults=s,this.interceptors={request:new yc,response:new yc}}async request(s,r){try{return await this._request(s,r)}catch(o){if(o instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{o.stack?d&&!String(o.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+d):o.stack=d}catch{}}throw o}}_request(s,r){typeof s=="string"?(r=r||{},r.url=s):r=s||{},r=dr(this.defaults,r);const{transitional:o,paramsSerializer:c,headers:d}=r;o!==void 0&&Ka.assertOptions(o,{silentJSONParsing:vn.transitional(vn.boolean),forcedJSONParsing:vn.transitional(vn.boolean),clarifyTimeoutError:vn.transitional(vn.boolean)},!1),c!=null&&(O.isFunction(c)?r.paramsSerializer={serialize:c}:Ka.assertOptions(c,{encode:vn.function,serialize:vn.function},!0)),Ka.assertOptions(r,{baseUrl:vn.spelling("baseURL"),withXsrfToken:vn.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let u=d&&O.merge(d.common,d[r.method]);d&&O.forEach(["delete","get","head","post","put","patch","common"],T=>{delete d[T]}),r.headers=kt.concat(u,d);const m=[];let g=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(r)===!1||(g=g&&k.synchronous,m.unshift(k.fulfilled,k.rejected))});const j=[];this.interceptors.response.forEach(function(k){j.push(k.fulfilled,k.rejected)});let v,w=0,I;if(!g){const T=[Ec.bind(this),void 0];for(T.unshift.apply(T,m),T.push.apply(T,j),I=T.length,v=Promise.resolve(r);w<I;)v=v.then(T[w++],T[w++]);return v}I=m.length;let J=r;for(w=0;w<I;){const T=m[w++],k=m[w++];try{J=T(J)}catch(A){k.call(this,A);break}}try{v=Ec.call(this,J)}catch(T){return Promise.reject(T)}for(w=0,I=j.length;w<I;)v=v.then(j[w++],j[w++]);return v}getUri(s){s=dr(this.defaults,s);const r=fd(s.baseURL,s.url);return ld(r,s.params,s.paramsSerializer)}}O.forEach(["delete","get","head","options"],function(s){cr.prototype[s]=function(r,o){return this.request(dr(o||{},{method:s,url:r,data:(o||{}).data}))}});O.forEach(["post","put","patch"],function(s){function r(o){return function(d,u,m){return this.request(dr(m||{},{method:s,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:u}))}}cr.prototype[s]=r(),cr.prototype[s+"Form"]=r(!0)});class Ds{constructor(s){if(typeof s!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(d){r=d});const o=this;this.promise.then(c=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](c);o._listeners=null}),this.promise.then=c=>{let d;const u=new Promise(m=>{o.subscribe(m),d=m}).then(c);return u.cancel=function(){o.unsubscribe(d)},u},s(function(d,u,m){o.reason||(o.reason=new Tr(d,u,m),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]}unsubscribe(s){if(!this._listeners)return;const r=this._listeners.indexOf(s);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const s=new AbortController,r=o=>{s.abort(o)};return this.subscribe(r),s.signal.unsubscribe=()=>this.unsubscribe(r),s.signal}static source(){let s;return{token:new Ds(function(c){s=c}),cancel:s}}}function kb(i){return function(r){return i.apply(null,r)}}function Pb(i){return O.isObject(i)&&i.isAxiosError===!0}const ks={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ks).forEach(([i,s])=>{ks[s]=i});function vd(i){const s=new cr(i),r=Mc(cr.prototype.request,s);return O.extend(r,cr.prototype,s,{allOwnKeys:!0}),O.extend(r,s,null,{allOwnKeys:!0}),r.create=function(c){return vd(dr(i,c))},r}const ge=vd(ea);ge.Axios=cr;ge.CanceledError=Tr;ge.CancelToken=Ds;ge.isCancel=ud;ge.VERSION=bd;ge.toFormData=ai;ge.AxiosError=Te;ge.Cancel=ge.CanceledError;ge.all=function(s){return Promise.all(s)};ge.spread=kb;ge.isAxiosError=Pb;ge.mergeConfig=dr;ge.AxiosHeaders=kt;ge.formToJSON=i=>dd(O.isHTMLForm(i)?new FormData(i):i);ge.getAdapter=xd.getAdapter;ge.HttpStatusCode=ks;ge.default=ge;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])}return i},Xr.apply(this,arguments)}var qn;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(qn||(qn={}));const Rc="popstate";function Fb(i){i===void 0&&(i={});function s(o,c){let{pathname:d,search:u,hash:m}=o.location;return Ps("",{pathname:d,search:u,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(o,c){return typeof c=="string"?c:Xa(c)}return Ib(s,r,null,i)}function at(i,s){if(i===!1||i===null||typeof i>"u")throw new Error(s)}function yd(i,s){if(!i){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Ob(){return Math.random().toString(36).substr(2,8)}function $c(i,s){return{usr:i.state,key:i.key,idx:s}}function Ps(i,s,r,o){return r===void 0&&(r=null),Xr({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof s=="string"?Rr(s):s,{state:r,key:s&&s.key||o||Ob()})}function Xa(i){let{pathname:s="/",search:r="",hash:o=""}=i;return r&&r!=="?"&&(s+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(s+=o.charAt(0)==="#"?o:"#"+o),s}function Rr(i){let s={};if(i){let r=i.indexOf("#");r>=0&&(s.hash=i.substr(r),i=i.substr(0,r));let o=i.indexOf("?");o>=0&&(s.search=i.substr(o),i=i.substr(0,o)),i&&(s.pathname=i)}return s}function Ib(i,s,r,o){o===void 0&&(o={});let{window:c=document.defaultView,v5Compat:d=!1}=o,u=c.history,m=qn.Pop,g=null,j=v();j==null&&(j=0,u.replaceState(Xr({},u.state,{idx:j}),""));function v(){return(u.state||{idx:null}).idx}function w(){m=qn.Pop;let A=v(),Y=A==null?null:A-j;j=A,g&&g({action:m,location:k.location,delta:Y})}function I(A,Y){m=qn.Push;let V=Ps(k.location,A,Y);j=v()+1;let $=$c(V,j),K=k.createHref(V);try{u.pushState($,"",K)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;c.location.assign(K)}d&&g&&g({action:m,location:k.location,delta:1})}function J(A,Y){m=qn.Replace;let V=Ps(k.location,A,Y);j=v();let $=$c(V,j),K=k.createHref(V);u.replaceState($,"",K),d&&g&&g({action:m,location:k.location,delta:0})}function T(A){let Y=c.location.origin!=="null"?c.location.origin:c.location.href,V=typeof A=="string"?A:Xa(A);return V=V.replace(/ $/,"%20"),at(Y,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,Y)}let k={get action(){return m},get location(){return i(c,u)},listen(A){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Rc,w),g=A,()=>{c.removeEventListener(Rc,w),g=null}},createHref(A){return s(c,A)},createURL:T,encodeLocation(A){let Y=T(A);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:I,replace:J,go(A){return u.go(A)}};return k}var kc;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(kc||(kc={}));function Lb(i,s,r){return r===void 0&&(r="/"),Ub(i,s,r,!1)}function Ub(i,s,r,o){let c=typeof s=="string"?Rr(s):s,d=Ar(c.pathname||"/",r);if(d==null)return null;let u=wd(i);Db(u);let m=null;for(let g=0;m==null&&g<u.length;++g){let j=Mb(d);m=Kb(u[g],j,o)}return m}function wd(i,s,r,o){s===void 0&&(s=[]),r===void 0&&(r=[]),o===void 0&&(o="");let c=(d,u,m)=>{let g={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:u,route:d};g.relativePath.startsWith("/")&&(at(g.relativePath.startsWith(o),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(o.length));let j=Vn([o,g.relativePath]),v=r.concat(g);d.children&&d.children.length>0&&(at(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+j+'".')),wd(d.children,s,v,j)),!(d.path==null&&!d.index)&&s.push({path:j,score:qb(j,d.index),routesMeta:v})};return i.forEach((d,u)=>{var m;if(d.path===""||!((m=d.path)!=null&&m.includes("?")))c(d,u);else for(let g of jd(d.path))c(d,u,g)}),s}function jd(i){let s=i.split("/");if(s.length===0)return[];let[r,...o]=s,c=r.endsWith("?"),d=r.replace(/\?$/,"");if(o.length===0)return c?[d,""]:[d];let u=jd(o.join("/")),m=[];return m.push(...u.map(g=>g===""?d:[d,g].join("/"))),c&&m.push(...u),m.map(g=>i.startsWith("/")&&g===""?"/":g)}function Db(i){i.sort((s,r)=>s.score!==r.score?r.score-s.score:Vb(s.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const Bb=/^:[\w-]+$/,zb=3,Wb=2,Hb=1,Gb=10,Yb=-2,Pc=i=>i==="*";function qb(i,s){let r=i.split("/"),o=r.length;return r.some(Pc)&&(o+=Yb),s&&(o+=Wb),r.filter(c=>!Pc(c)).reduce((c,d)=>c+(Bb.test(d)?zb:d===""?Hb:Gb),o)}function Vb(i,s){return i.length===s.length&&i.slice(0,-1).every((o,c)=>o===s[c])?i[i.length-1]-s[s.length-1]:0}function Kb(i,s,r){let{routesMeta:o}=i,c={},d="/",u=[];for(let m=0;m<o.length;++m){let g=o[m],j=m===o.length-1,v=d==="/"?s:s.slice(d.length)||"/",w=Za({path:g.relativePath,caseSensitive:g.caseSensitive,end:j},v),I=g.route;if(!w&&j&&r&&!o[o.length-1].route.index&&(w=Za({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},v)),!w)return null;Object.assign(c,w.params),u.push({params:c,pathname:Vn([d,w.pathname]),pathnameBase:e1(Vn([d,w.pathnameBase])),route:I}),w.pathnameBase!=="/"&&(d=Vn([d,w.pathnameBase]))}return u}function Za(i,s){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[r,o]=Jb(i.path,i.caseSensitive,i.end),c=s.match(r);if(!c)return null;let d=c[0],u=d.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:o.reduce((j,v,w)=>{let{paramName:I,isOptional:J}=v;if(I==="*"){let k=m[w]||"";u=d.slice(0,d.length-k.length).replace(/(.)\/+$/,"$1")}const T=m[w];return J&&!T?j[I]=void 0:j[I]=(T||"").replace(/%2F/g,"/"),j},{}),pathname:d,pathnameBase:u,pattern:i}}function Jb(i,s,r){s===void 0&&(s=!1),r===void 0&&(r=!0),yd(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let o=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,m,g)=>(o.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(o.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,s?void 0:"i"),o]}function Mb(i){try{return i.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return yd(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),i}}function Ar(i,s){if(s==="/")return i;if(!i.toLowerCase().startsWith(s.toLowerCase()))return null;let r=s.endsWith("/")?s.length-1:s.length,o=i.charAt(r);return o&&o!=="/"?null:i.slice(r)||"/"}function Xb(i,s){s===void 0&&(s="/");let{pathname:r,search:o="",hash:c=""}=typeof i=="string"?Rr(i):i;return{pathname:r?r.startsWith("/")?r:Zb(r,s):s,search:t1(o),hash:n1(c)}}function Zb(i,s){let r=s.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function _s(i,s,r,o){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qb(i){return i.filter((s,r)=>r===0||s.route.path&&s.route.path.length>0)}function Bs(i,s){let r=Qb(i);return s?r.map((o,c)=>c===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function zs(i,s,r,o){o===void 0&&(o=!1);let c;typeof i=="string"?c=Rr(i):(c=Xr({},i),at(!c.pathname||!c.pathname.includes("?"),_s("?","pathname","search",c)),at(!c.pathname||!c.pathname.includes("#"),_s("#","pathname","hash",c)),at(!c.search||!c.search.includes("#"),_s("#","search","hash",c)));let d=i===""||c.pathname==="",u=d?"/":c.pathname,m;if(u==null)m=r;else{let w=s.length-1;if(!o&&u.startsWith("..")){let I=u.split("/");for(;I[0]==="..";)I.shift(),w-=1;c.pathname=I.join("/")}m=w>=0?s[w]:"/"}let g=Xb(c,m),j=u&&u!=="/"&&u.endsWith("/"),v=(d||u===".")&&r.endsWith("/");return!g.pathname.endsWith("/")&&(j||v)&&(g.pathname+="/"),g}const Vn=i=>i.join("/").replace(/\/\/+/g,"/"),e1=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,n1=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function r1(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Nd=["post","put","patch","delete"];new Set(Nd);const a1=["get",...Nd];new Set(a1);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])}return i},Zr.apply(this,arguments)}const oi=y.createContext(null),Sd=y.createContext(null),Pn=y.createContext(null),li=y.createContext(null),Kn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),_d=y.createContext(null);function i1(i,s){let{relative:r}=s===void 0?{}:s;$r()||at(!1);let{basename:o,navigator:c}=y.useContext(Pn),{hash:d,pathname:u,search:m}=ci(i,{relative:r}),g=u;return o!=="/"&&(g=u==="/"?o:Vn([o,u])),c.createHref({pathname:g,search:m,hash:d})}function $r(){return y.useContext(li)!=null}function Jn(){return $r()||at(!1),y.useContext(li).location}function Cd(i){y.useContext(Pn).static||y.useLayoutEffect(i)}function ur(){let{isDataRoute:i}=y.useContext(Kn);return i?b1():s1()}function s1(){$r()||at(!1);let i=y.useContext(oi),{basename:s,future:r,navigator:o}=y.useContext(Pn),{matches:c}=y.useContext(Kn),{pathname:d}=Jn(),u=JSON.stringify(Bs(c,r.v7_relativeSplatPath)),m=y.useRef(!1);return Cd(()=>{m.current=!0}),y.useCallback(function(j,v){if(v===void 0&&(v={}),!m.current)return;if(typeof j=="number"){o.go(j);return}let w=zs(j,JSON.parse(u),d,v.relative==="path");i==null&&s!=="/"&&(w.pathname=w.pathname==="/"?s:Vn([s,w.pathname])),(v.replace?o.replace:o.push)(w,v.state,v)},[s,o,u,d,i])}function ci(i,s){let{relative:r}=s===void 0?{}:s,{future:o}=y.useContext(Pn),{matches:c}=y.useContext(Kn),{pathname:d}=Jn(),u=JSON.stringify(Bs(c,o.v7_relativeSplatPath));return y.useMemo(()=>zs(i,JSON.parse(u),d,r==="path"),[i,u,d,r])}function o1(i,s){return l1(i,s)}function l1(i,s,r,o){$r()||at(!1);let{navigator:c}=y.useContext(Pn),{matches:d}=y.useContext(Kn),u=d[d.length-1],m=u?u.params:{};u&&u.pathname;let g=u?u.pathnameBase:"/";u&&u.route;let j=Jn(),v;if(s){var w;let A=typeof s=="string"?Rr(s):s;g==="/"||(w=A.pathname)!=null&&w.startsWith(g)||at(!1),v=A}else v=j;let I=v.pathname||"/",J=I;if(g!=="/"){let A=g.replace(/^\//,"").split("/");J="/"+I.replace(/^\//,"").split("/").slice(A.length).join("/")}let T=Lb(i,{pathname:J}),k=f1(T&&T.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:Vn([g,c.encodeLocation?c.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:Vn([g,c.encodeLocation?c.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,r,o);return s&&k?y.createElement(li.Provider,{value:{location:Zr({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:qn.Pop}},k):k}function c1(){let i=x1(),s=r1(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),r=i instanceof Error?i.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},s),r?y.createElement("pre",{style:c},r):null,null)}const d1=y.createElement(c1,null);class u1 extends y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,r){return r.location!==s.location||r.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:r.error,location:r.location,revalidation:s.revalidation||r.revalidation}}componentDidCatch(s,r){console.error("React Router caught the following error during render",s,r)}render(){return this.state.error!==void 0?y.createElement(Kn.Provider,{value:this.props.routeContext},y.createElement(_d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p1(i){let{routeContext:s,match:r,children:o}=i,c=y.useContext(oi);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(Kn.Provider,{value:s},o)}function f1(i,s,r,o){var c;if(s===void 0&&(s=[]),r===void 0&&(r=null),o===void 0&&(o=null),i==null){var d;if(!r)return null;if(r.errors)i=r.matches;else if((d=o)!=null&&d.v7_partialHydration&&s.length===0&&!r.initialized&&r.matches.length>0)i=r.matches;else return null}let u=i,m=(c=r)==null?void 0:c.errors;if(m!=null){let v=u.findIndex(w=>w.route.id&&(m==null?void 0:m[w.route.id])!==void 0);v>=0||at(!1),u=u.slice(0,Math.min(u.length,v+1))}let g=!1,j=-1;if(r&&o&&o.v7_partialHydration)for(let v=0;v<u.length;v++){let w=u[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(j=v),w.route.id){let{loaderData:I,errors:J}=r,T=w.route.loader&&I[w.route.id]===void 0&&(!J||J[w.route.id]===void 0);if(w.route.lazy||T){g=!0,j>=0?u=u.slice(0,j+1):u=[u[0]];break}}}return u.reduceRight((v,w,I)=>{let J,T=!1,k=null,A=null;r&&(J=m&&w.route.id?m[w.route.id]:void 0,k=w.route.errorElement||d1,g&&(j<0&&I===0?(T=!0,A=null):j===I&&(T=!0,A=w.route.hydrateFallbackElement||null)));let Y=s.concat(u.slice(0,I+1)),V=()=>{let $;return J?$=k:T?$=A:w.route.Component?$=y.createElement(w.route.Component,null):w.route.element?$=w.route.element:$=v,y.createElement(p1,{match:w,routeContext:{outlet:v,matches:Y,isDataRoute:r!=null},children:$})};return r&&(w.route.ErrorBoundary||w.route.errorElement||I===0)?y.createElement(u1,{location:r.location,revalidation:r.revalidation,component:k,error:J,children:V(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):V()},null)}var Ad=function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i}(Ad||{}),Qa=function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i}(Qa||{});function h1(i){let s=y.useContext(oi);return s||at(!1),s}function g1(i){let s=y.useContext(Sd);return s||at(!1),s}function m1(i){let s=y.useContext(Kn);return s||at(!1),s}function Ed(i){let s=m1(),r=s.matches[s.matches.length-1];return r.route.id||at(!1),r.route.id}function x1(){var i;let s=y.useContext(_d),r=g1(Qa.UseRouteError),o=Ed(Qa.UseRouteError);return s!==void 0?s:(i=r.errors)==null?void 0:i[o]}function b1(){let{router:i}=h1(Ad.UseNavigateStable),s=Ed(Qa.UseNavigateStable),r=y.useRef(!1);return Cd(()=>{r.current=!0}),y.useCallback(function(c,d){d===void 0&&(d={}),r.current&&(typeof c=="number"?i.navigate(c):i.navigate(c,Zr({fromRouteId:s},d)))},[i,s])}function v1(i){let{to:s,replace:r,state:o,relative:c}=i;$r()||at(!1);let{future:d,static:u}=y.useContext(Pn),{matches:m}=y.useContext(Kn),{pathname:g}=Jn(),j=ur(),v=zs(s,Bs(m,d.v7_relativeSplatPath),g,c==="path"),w=JSON.stringify(v);return y.useEffect(()=>j(JSON.parse(w),{replace:r,state:o,relative:c}),[j,w,c,r,o]),null}function fn(i){at(!1)}function y1(i){let{basename:s="/",children:r=null,location:o,navigationType:c=qn.Pop,navigator:d,static:u=!1,future:m}=i;$r()&&at(!1);let g=s.replace(/^\/*/,"/"),j=y.useMemo(()=>({basename:g,navigator:d,static:u,future:Zr({v7_relativeSplatPath:!1},m)}),[g,m,d,u]);typeof o=="string"&&(o=Rr(o));let{pathname:v="/",search:w="",hash:I="",state:J=null,key:T="default"}=o,k=y.useMemo(()=>{let A=Ar(v,g);return A==null?null:{location:{pathname:A,search:w,hash:I,state:J,key:T},navigationType:c}},[g,v,w,I,J,T,c]);return k==null?null:y.createElement(Pn.Provider,{value:j},y.createElement(li.Provider,{children:r,value:k}))}function Fc(i){let{children:s,location:r}=i;return o1(Fs(s),r)}new Promise(()=>{});function Fs(i,s){s===void 0&&(s=[]);let r=[];return y.Children.forEach(i,(o,c)=>{if(!y.isValidElement(o))return;let d=[...s,c];if(o.type===y.Fragment){r.push.apply(r,Fs(o.props.children,d));return}o.type!==fn&&at(!1),!o.props.index||!o.props.children||at(!1);let u={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=Fs(o.props.children,d)),r.push(u)}),r}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])}return i},ei.apply(this,arguments)}function Td(i,s){if(i==null)return{};var r={},o=Object.keys(i),c,d;for(d=0;d<o.length;d++)c=o[d],!(s.indexOf(c)>=0)&&(r[c]=i[c]);return r}function w1(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function j1(i,s){return i.button===0&&(!s||s==="_self")&&!w1(i)}const N1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],S1=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],_1="6";try{window.__reactRouterVersion=_1}catch{}const C1=y.createContext({isTransitioning:!1}),A1="startTransition",Oc=Gm[A1];function E1(i){let{basename:s,children:r,future:o,window:c}=i,d=y.useRef();d.current==null&&(d.current=Fb({window:c,v5Compat:!0}));let u=d.current,[m,g]=y.useState({action:u.action,location:u.location}),{v7_startTransition:j}=o||{},v=y.useCallback(w=>{j&&Oc?Oc(()=>g(w)):g(w)},[g,j]);return y.useLayoutEffect(()=>u.listen(v),[u,v]),y.createElement(y1,{basename:s,children:r,location:m.location,navigationType:m.action,navigator:u,future:o})}const T1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$1=y.forwardRef(function(s,r){let{onClick:o,relative:c,reloadDocument:d,replace:u,state:m,target:g,to:j,preventScrollReset:v,unstable_viewTransition:w}=s,I=Td(s,N1),{basename:J}=y.useContext(Pn),T,k=!1;if(typeof j=="string"&&R1.test(j)&&(T=j,T1))try{let $=new URL(window.location.href),K=j.startsWith("//")?new URL($.protocol+j):new URL(j),ne=Ar(K.pathname,J);K.origin===$.origin&&ne!=null?j=ne+K.search+K.hash:k=!0}catch{}let A=i1(j,{relative:c}),Y=P1(j,{replace:u,state:m,target:g,preventScrollReset:v,relative:c,unstable_viewTransition:w});function V($){o&&o($),$.defaultPrevented||Y($)}return y.createElement("a",ei({},I,{href:T||A,onClick:k||d?o:V,ref:r,target:g}))}),kn=y.forwardRef(function(s,r){let{"aria-current":o="page",caseSensitive:c=!1,className:d="",end:u=!1,style:m,to:g,unstable_viewTransition:j,children:v}=s,w=Td(s,S1),I=ci(g,{relative:w.relative}),J=Jn(),T=y.useContext(Sd),{navigator:k,basename:A}=y.useContext(Pn),Y=T!=null&&F1(I)&&j===!0,V=k.encodeLocation?k.encodeLocation(I).pathname:I.pathname,$=J.pathname,K=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;c||($=$.toLowerCase(),K=K?K.toLowerCase():null,V=V.toLowerCase()),K&&A&&(K=Ar(K,A)||K);const ne=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let fe=$===V||!u&&$.startsWith(V)&&$.charAt(ne)==="/",ve=K!=null&&(K===V||!u&&K.startsWith(V)&&K.charAt(V.length)==="/"),be={isActive:fe,isPending:ve,isTransitioning:Y},ye=fe?o:void 0,Re;typeof d=="function"?Re=d(be):Re=[d,fe?"active":null,ve?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let E=typeof m=="function"?m(be):m;return y.createElement($1,ei({},w,{"aria-current":ye,className:Re,ref:r,style:E,to:g,unstable_viewTransition:j}),typeof v=="function"?v(be):v)});var Os;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Os||(Os={}));var Ic;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Ic||(Ic={}));function k1(i){let s=y.useContext(oi);return s||at(!1),s}function P1(i,s){let{target:r,replace:o,state:c,preventScrollReset:d,relative:u,unstable_viewTransition:m}=s===void 0?{}:s,g=ur(),j=Jn(),v=ci(i,{relative:u});return y.useCallback(w=>{if(j1(w,r)){w.preventDefault();let I=o!==void 0?o:Xa(j)===Xa(v);g(i,{replace:I,state:c,preventScrollReset:d,relative:u,unstable_viewTransition:m})}},[j,g,v,o,c,r,i,d,u,m])}function F1(i,s){s===void 0&&(s={});let r=y.useContext(C1);r==null&&at(!1);let{basename:o}=k1(Os.useViewTransitionState),c=ci(i,{relative:s.relative});if(!r.isTransitioning)return!1;let d=Ar(r.currentLocation.pathname,o)||r.currentLocation.pathname,u=Ar(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Za(c.pathname,u)!=null||Za(c.pathname,d)!=null}class O1{constructor(){this.categoryPatterns={"Food & Dining":["starbucks","mcdonalds","burger king","subway","chipotle","kfc","pizza hut","dominos","taco bell","wendys","restaurant","cafe","diner","bistro","grill","bar","pub","bakery","doordash","uber eats","grubhub","postmates","food","dining"],Transportation:["shell","exxon","chevron","bp","mobil","gas","fuel","station","uber","lyft","taxi","metro","bus","train","parking","toll","automotive","repair","mechanic","oil change"],Shopping:["amazon","walmart","target","costco","best buy","home depot","lowes","macys","nordstrom","tj maxx","marshall","store","shopping","retail","mall","outlet"],Groceries:["kroger","safeway","whole foods","trader joe","publix","aldi","wegmans","harris teeter","food lion","giant","stop shop","grocery","supermarket","market"],Entertainment:["netflix","spotify","apple music","disney","hulu","amazon prime","youtube","cinema","theater","movie","concert","game","steam","playstation","xbox","entertainment"],Utilities:["electric","power","water","gas company","internet","cable","phone","cell","verizon","att","tmobile","comcast","utility"],Healthcare:["pharmacy","cvs","walgreens","rite aid","hospital","clinic","doctor","dentist","medical","health","insurance"],Finance:["bank","atm","fee","interest","loan","credit","investment","transfer","payment","financial"],"Phone Service":["phone","cell","cellular","mobile","verizon","att","at&t","tmobile","t-mobile","sprint","boost","cricket","mint mobile","visible","metro pcs","tracfone","straight talk","ting","spectrum"]},this.userCorrections=this.loadUserCorrections()}categorizeTransaction(s,r=null){if(!s)return{category:"Other",confidence:0};const o=s.toLowerCase().trim(),c=this.checkUserCorrections(o);if(c)return{category:c,confidence:95};const d=this.findPatternMatch(o);return d||this.advancedCategorization(o,r)}checkUserCorrections(s){for(const r of this.userCorrections)if(s.includes(r.merchant.toLowerCase()))return r.category;return null}findPatternMatch(s){const r={};for(const[c,d]of Object.entries(this.categoryPatterns)){let u=0,m=0;for(const g of d)s.includes(g)&&(u+=g.length,m++);m>0&&(r[c]=u/d.length*100)}if(Object.keys(r).length===0)return null;const o=Object.keys(r).reduce((c,d)=>r[c]>r[d]?c:d);return{category:o,confidence:Math.min(Math.round(r[o]*2),90)}}advancedCategorization(s,r){if(r){const o=parseFloat(r);if(o<10&&this.containsWords(s,["coffee","snack","drink"]))return{category:"Food & Dining",confidence:70};if(o>500&&this.containsWords(s,["rent","mortgage","property"]))return{category:"Housing",confidence:75}}return this.containsWords(s,["purchase","buy","shop"])?{category:"Shopping",confidence:60}:this.containsWords(s,["payment","bill","invoice"])?{category:"Bills & Utilities",confidence:65}:{category:"Other",confidence:30}}containsWords(s,r){return r.some(o=>s.includes(o))}learnFromCorrection(s,r,o){const c=this.extractMerchantName(s),d={merchant:c,originalCategory:r,correctedCategory:o,timestamp:new Date().toISOString()};this.userCorrections.push(d),this.saveUserCorrections(),this.categoryPatterns[o].some(u=>c.toLowerCase().includes(u))||this.categoryPatterns[o].push(c.toLowerCase())}extractMerchantName(s){let r=s.replace(/^(purchase|payment|transfer)\s+/i,"").replace(/\s+(#\d+|store|inc|llc|corp).*$/i,"").trim();return r=r.split(/\s+#|\s+\d{3,}/)[0],r}loadUserCorrections(){try{const s=localStorage.getItem("ai_transaction_corrections");return s?JSON.parse(s):[]}catch(s){return console.error("Error loading user corrections:",s),[]}}saveUserCorrections(){try{localStorage.setItem("ai_transaction_corrections",JSON.stringify(this.userCorrections))}catch(s){console.error("Error saving user corrections:",s)}}getStats(){const s=this.userCorrections.length,r={};return this.userCorrections.forEach(o=>{r[o.correctedCategory]=(r[o.correctedCategory]||0)+1}),{totalCorrections:s,categoryDistribution:r,learningAccuracy:s>0?Math.min(85+s*2,95):65}}}const lr=new O1,I1=["Food & Dining","Transportation","Shopping","Groceries","Entertainment","Utilities","Healthcare","Finance","Housing","Bills & Utilities","Education","Travel","Personal Care","Gifts & Donations","Other"];function L1({amount:i,setAmount:s,category:r,setCategory:o,date:c,setDate:d,description:u,setDescription:m,darkMode:g}){const j=ur(),[v,w]=y.useState(!1),[I,J]=y.useState(!1),[T,k]=y.useState({}),[A,Y]=y.useState(!1),[V,$]=y.useState(null),[K,ne]=y.useState(!1),[fe,ve]=y.useState(!1);y.useEffect(()=>{if(u.trim().length>2){ve(!0);const R=setTimeout(()=>{const M=lr.categorizeTransaction(u,i);$(M),ne(M.confidence>60&&M.category!==r),ve(!1)},500);return()=>clearTimeout(R)}else ne(!1),$(null),ve(!1)},[u,i,r]);const be=()=>{V&&(o(V.category),ne(!1),lr.learnFromCorrection(u,i,V.category))},ye=()=>{ne(!1)},Re=R=>{const M=parseFloat(R.target.value);s(isNaN(M)?0:M),T.amount&&k(se=>({...se,amount:""}))},E=R=>{d(R.target.value),T.date&&k(M=>({...M,date:""}))},Q=()=>{const R={};return r||(R.category="Please select a category"),u.trim()||(R.description="Description is required"),(!i||i<=0)&&(R.amount="Please enter a valid amount"),c||(R.date="Please select a date"),k(R),Object.keys(R).length===0},oe=async R=>{if(R.preventDefault(),!Q()){Y(!0),setTimeout(()=>Y(!1),500);return}w(!0),k({});const M={category:r,date:new Date(c).toISOString().split("T")[0],description:u,amount:i};try{const se=await ge.post("http://127.0.0.1:5001/transactions",M);console.log("Transaction added:",se.data),V&&V.category!==r&&V.confidence>50&&(lr.learnFromCorrection(u,V.category,r),console.log(`AI learned: "${u}" should be categorized as "${r}" not "${V.category}"`)),J(!0),o(""),d(""),m(""),s(0),$(null),ne(!1),setTimeout(()=>{J(!1),j("/transactions")},2e3)}catch(se){console.error("Error adding transaction:",se),k({submit:"Failed to add transaction. Please try again."})}finally{w(!1)}};return n.jsxs("div",{className:"add-transactions-container",children:[n.jsx("style",{jsx:!0,children:`
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
                    background: ${g?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: ${g?"2px solid #4a5568":"2px solid #e2e8f0"};
                    transition: all 0.3s ease;
                    ${A?"animation: shake 0.5s;":""}
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
                    color: ${g?"#e2e8f0":"#2d3748"};
                    transition: color 0.3s ease;
                }

                .form-control {
                    width: 100%;
                    padding: 15px;
                    border: 2px solid ${g?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${g?"#2d3748":"#ffffff"};
                    color: ${g?"#e2e8f0":"#2d3748"};
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
                    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${g?"%23ffffff":"%23000000"}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
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
                    color: ${g?"#ffffff":"#000000"} !important;
                    background: ${g?"#2d3748":"#ffffff"} !important;
                    padding: 12px;
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.5;
                }

                /* Style for placeholder option */
                select.form-control option[value=""] {
                    color: ${g?"#a0aec0":"#718096"} !important;
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
                    color-scheme: ${g?"dark":"light"};
                    position: relative;
                    cursor: pointer;
                }

                input[type="date"].form-control::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    ${g?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* For Firefox */
                input[type="date"].form-control::-moz-calendar-picker-indicator {
                    cursor: pointer;
                    ${g?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* Additional styling for better visibility in dark mode */
                ${g?`
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
                    background: ${g?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)"};
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
                    color: ${g?"#e2e8f0":"#2d3748"};
                    margin-bottom: 4px;
                }

                .ai-confidence {
                    font-size: 0.85rem;
                    color: ${g?"#a0aec0":"#718096"};
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
                    background: ${g?"#4a5568":"#e2e8f0"};
                    color: ${g?"#e2e8f0":"#4a5568"};
                }

                .btn-ai-dismiss:hover {
                    background: ${g?"#718096":"#cbd5e0"};
                }

                .ai-analyzing {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 8px;
                    padding: 8px 12px;
                    background: ${g?"#4a5568":"#f7fafc"};
                    border-radius: 8px;
                    font-size: 0.9rem;
                    color: ${g?"#a0aec0":"#718096"};
                }

                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid ${g?"#718096":"#cbd5e0"};
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
            `}),n.jsx("div",{className:"form-header",children:n.jsx("h5",{children:"💰 Set X-Penses"})}),I&&n.jsx("div",{className:"success-message",children:"✅ Transaction added successfully! Redirecting..."}),T.submit&&n.jsxs("div",{className:"error-message",style:{marginBottom:"20px",justifyContent:"center"},children:["❌ ",T.submit]}),n.jsx("div",{className:"form-container",children:n.jsxs("form",{onSubmit:oe,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"category",children:"📂 Category"}),n.jsxs("select",{id:"category",name:"category",className:`form-control ${T.category?"error":""}`,value:r,style:{color:r===""?g?"#a0aec0":"#718096":g?"#ffffff":"#000000",backgroundColor:g?"#2d3748":"#ffffff",fontSize:"1rem",fontWeight:r===""?"400":"600",fontStyle:r===""?"italic":"normal"},onChange:R=>{const M=R.target.value;o(M),V&&M&&M!==V.category&&(lr.learnFromCorrection(u,i,M),ne(!1)),T.category&&k(se=>({...se,category:""}))},children:[n.jsx("option",{value:"",children:"🎯 Select A Category"}),I1.map(R=>n.jsxs("option",{value:R,children:[R==="Food & Dining"&&"🍕",R==="Transportation"&&"🚗",R==="Shopping"&&"🛍️",R==="Groceries"&&"🛒",R==="Entertainment"&&"🎬",R==="Utilities"&&"⚡",R==="Healthcare"&&"�",R==="Finance"&&"💳",R==="Housing"&&"🏠",R==="Bills & Utilities"&&"📄",R==="Education"&&"📚",R==="Travel"&&"✈️",R==="Personal Care"&&"💄",R==="Gifts & Donations"&&"�",R==="Other"&&"❓"," "+R]},R))]}),T.category&&n.jsxs("div",{className:"error-message",children:["❌ ",T.category]}),K&&V&&n.jsx("div",{className:"ai-suggestion-banner",children:n.jsxs("div",{className:"ai-suggestion-content",children:[n.jsx("div",{className:"ai-icon",children:"🤖"}),n.jsxs("div",{className:"ai-text",children:[n.jsxs("div",{className:"ai-main-text",children:["AI suggests: ",n.jsx("strong",{children:V.category})]}),n.jsxs("div",{className:"ai-confidence",children:["Confidence: ",V.confidence,"%"]})]}),n.jsxs("div",{className:"ai-actions",children:[n.jsx("button",{type:"button",className:"btn-ai-accept",onClick:be,children:"✅ Use This"}),n.jsx("button",{type:"button",className:"btn-ai-dismiss",onClick:ye,children:"❌ Dismiss"})]})]})}),fe&&n.jsxs("div",{className:"ai-analyzing",children:[n.jsx("div",{className:"spinner"}),n.jsx("span",{children:"🤖 AI is analyzing..."})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"text",children:"📝 Description"}),n.jsx("input",{type:"text",className:`form-control ${T.description?"error":""}`,id:"text",name:"text",value:u,placeholder:"💭 Enter transaction description...",onChange:R=>{m(R.target.value),T.description&&k(M=>({...M,description:""}))}}),T.description&&n.jsxs("div",{className:"error-message",children:["❌ ",T.description]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"amount",children:"💵 Amount"}),n.jsxs("div",{className:"amount-input-container",children:[n.jsx("span",{className:"currency-symbol",children:"$"}),n.jsx("input",{type:"number",id:"amount",name:"amount",className:`form-control amount-input ${T.amount?"error":""}`,value:i,placeholder:"0.00",min:"0",step:"0.01",onChange:Re})]}),T.amount&&n.jsxs("div",{className:"error-message",children:["❌ ",T.amount]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"date",children:"📅 Date"}),n.jsx("input",{type:"date",id:"date",name:"date",className:`form-control ${T.date?"error":""}`,value:c?new Date(c).toISOString().split("T")[0]:"",onChange:E}),T.date&&n.jsxs("div",{className:"error-message",children:["❌ ",T.date]})]}),n.jsx("div",{children:n.jsx("button",{type:"submit",className:"submit-button",disabled:v,children:v?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"loading-spinner"}),"Adding Transaction..."]}):"✨ Add Transaction"})})]})})]})}class U1{constructor(){this.EMERGENCY_FUND_MONTHS=6,this.SAVINGS_RATE_TARGET=.2,this.LIQUID_ASSETS_MIN=.15}calculateFinancialMetrics(s,r=0,o=0){const c=this.getTotalCash(s),d=this.getTotalBankBalance(s),u=this.getTotalSavings(s),m=c+d+u;return{totalCash:c,totalBankBalance:d,totalSavings:u,totalAssets:m,liquidityRatio:this.calculateLiquidityRatio(c,d,m),liquidAssets:c+d,emergencyFundStatus:this.analyzeEmergencyFund(u,o),emergencyFundTarget:o*this.EMERGENCY_FUND_MONTHS,savingsRate:r>0?u/r:0,savingsRateTarget:this.SAVINGS_RATE_TARGET,financialHealthScore:this.calculateFinancialHealthScore(m,r,o,u),accountDistribution:this.calculateAccountDistribution(s),projectedGrowth:this.calculateGrowthProjections(m,r,o)}}getTotalCash(s){return s.reduce((r,o)=>r+(o.cash_on_hand||0),0)}getTotalBankBalance(s){return s.reduce((r,o)=>r+(o.bank_account_balance||0),0)}getTotalSavings(s){return s.reduce((r,o)=>r+(o.savings||0),0)}calculateLiquidityRatio(s,r,o){return o===0?0:(s+r)/o*100}analyzeEmergencyFund(s,r){if(r===0)return{status:"unknown",months:0,recommendation:"Set monthly expenses to analyze emergency fund"};const o=s/r;return o>=this.EMERGENCY_FUND_MONTHS?{status:"excellent",months:o,recommendation:"Great! Consider investing excess emergency funds"}:o>=3?{status:"good",months:o,recommendation:`Add $${((this.EMERGENCY_FUND_MONTHS-o)*r).toFixed(2)} more`}:o>=1?{status:"needs_improvement",months:o,recommendation:"Focus on building emergency fund to 3-6 months"}:{status:"critical",months:o,recommendation:"Emergency fund needed! Start with $1000 minimum"}}calculateFinancialHealthScore(s,r,o,c){let d=0;if(s>0&&(d+=Math.min(30,s/1e4*30)),o>0){const u=c/o;d+=Math.min(25,u/this.EMERGENCY_FUND_MONTHS*25)}if(r>0){const u=c/r;d+=Math.min(25,u/this.SAVINGS_RATE_TARGET*25)}if(r>0&&o>0){const u=o/r;u<=.5?d+=20:u<=.7?d+=15:u<=.8?d+=10:u<=.9&&(d+=5)}return Math.min(100,Math.round(d))}calculateAccountDistribution(s){const r=this.getTotalCash(s),o=this.getTotalBankBalance(s),c=this.getTotalSavings(s),d=r+o+c;return d===0?{cash:0,bank:0,savings:0}:{cash:r/d*100,bank:o/d*100,savings:c/d*100}}calculateGrowthProjections(s,r,o){const c=r-o;return{oneMonth:s+c,threeMonth:s+c*3,sixMonth:s+c*6,oneYear:s+c*12,monthlyNetFlow:c}}validateBalanceInputs(s,r,o){const c={};s<0&&(c.cashOnHand="Cash amount cannot be negative"),s>5e4&&(c.cashOnHand="Consider depositing large cash amounts in bank for security"),r<0&&(c.bankBalance="Bank balance cannot be negative"),o<0&&(c.savings="Savings cannot be negative"),s===0&&r===0&&o===0&&(c.general="Please enter at least one balance amount");const d=s+r+o;if(d>0){const u=s/d*100;u>30&&(c.warning=`${u.toFixed(0)}% in cash - consider banking for safety`)}return c}suggestOptimalAllocation(s){const r={cash:0,bank:0,savings:0,reasoning:[]};return s<=1e3?(r.cash=s*.2,r.bank=s*.8,r.savings=0,r.reasoning.push("Keep small amounts liquid and accessible")):s<=1e4?(r.cash=Math.min(500,s*.1),r.bank=s*.4,r.savings=s*.5,r.reasoning.push("Build emergency fund in savings"),r.reasoning.push("Keep some funds liquid for daily expenses")):(r.cash=Math.min(1e3,s*.05),r.bank=s*.35,r.savings=s*.6,r.reasoning.push("Maximize savings for emergency fund and goals"),r.reasoning.push("Maintain liquidity for unexpected expenses")),r}analyzeAccountConsolidation(s){if(s.length<=1)return null;const r=[];s.forEach((c,d)=>{const u=c.cash_on_hand+c.bank_account_balance+c.savings;u<100&&r.push({index:d,total:u,account:c})});const o=[];if(r.length>1){const c=r.reduce((d,u)=>d+u.total,0);o.push({type:"consolidate_low_balance",message:`Consider consolidating ${r.length} low-balance accounts (${c.toFixed(2)})`,accounts:r,potentialSavings:r.length*5})}return o.length>0?o:null}generateFinancialInsights(s,r){const o=[];s.liquidityRatio<15?o.push({type:"warning",category:"liquidity",title:"Low Liquidity Warning",message:`Only ${s.liquidityRatio.toFixed(1)}% of assets are liquid. Consider keeping more in cash/checking.`,priority:"high"}):s.liquidityRatio>80&&o.push({type:"opportunity",category:"liquidity",title:"Excess Liquidity",message:`${s.liquidityRatio.toFixed(1)}% of assets are liquid. Consider moving some to higher-yield savings.`,priority:"medium"});const c=s.emergencyFundStatus;c.status==="critical"?o.push({type:"critical",category:"emergency_fund",title:"Emergency Fund Critical",message:c.recommendation,priority:"high"}):c.status==="excellent"&&o.push({type:"success",category:"emergency_fund",title:"Emergency Fund Complete",message:`Great! You have ${c.months.toFixed(1)} months of expenses saved.`,priority:"low"}),s.financialHealthScore>=80?o.push({type:"success",category:"health",title:"Excellent Financial Health",message:`Your financial health score is ${s.financialHealthScore}/100. Keep it up!`,priority:"low"}):s.financialHealthScore<40&&o.push({type:"warning",category:"health",title:"Financial Health Needs Attention",message:`Your financial health score is ${s.financialHealthScore}/100. Focus on building emergency fund and reducing expenses.`,priority:"high"});const d=this.analyzeAccountConsolidation(r);return d&&o.push({type:"opportunity",category:"consolidation",title:"Account Consolidation Opportunity",message:d[0].message,priority:"medium"}),o}}class Rd{constructor(){try{this.updateHistory=this.loadUpdateHistory(),this.updatePatterns=this.loadUpdatePatterns(),this.validationRules=this.initializeValidationRules()}catch(s){console.warn("SmartUpdateService initialization warning:",s),this.updateHistory=[],this.updatePatterns={},this.validationRules=this.getDefaultValidationRules()}}getDefaultValidationRules(){return{balance:{minimums:{cash:0,bank:0,savings:0},maximums:{cash:5e4,bank:1e6,savings:1e6},ratios:{cashToTotal:{min:.05,max:.3},savingsToTotal:{min:.1,max:.6}},warningThresholds:{lowCash:100,lowSavings:1e3,highCash:1e4}}}}initializeValidationRules(){return{balance:{minimums:{cash:0,bank:0,savings:0},maximums:{cash:5e4,bank:1e6,savings:1e6},ratios:{cashToTotal:{min:.05,max:.3},savingsToTotal:{min:.1,max:.6}},warningThresholds:{lowCash:100,lowSavings:1e3,highCash:1e4}},budget:{categories:{"Food & Dining":{minPercent:10,maxPercent:30},Transportation:{minPercent:5,maxPercent:20},Utilities:{minPercent:5,maxPercent:15},Entertainment:{minPercent:2,maxPercent:15},Healthcare:{minPercent:3,maxPercent:20}},totalBudgetLimits:{min:100,max:5e4}},investments:{diversification:{maxSingleAsset:.4,minAssets:3,riskLevels:{conservative:{crypto:.1,stocks:.4},moderate:{crypto:.2,stocks:.6},aggressive:{crypto:.4,stocks:.8}}}}}}validateUpdate(s,r,o=null){const c={isValid:!0,errors:[],warnings:[],suggestions:[],aiRecommendations:[]};switch(s){case"balance":return this.validateBalanceUpdate(r,c,o);case"budget":return this.validateBudgetUpdate(r,c,o);case"investment":return this.validateInvestmentUpdate(r,c,o);case"transaction":return this.validateTransactionUpdate(r,c,o);default:return c.errors.push("Unknown update type"),c.isValid=!1,c}}validateBalanceUpdate(s,r,o){const{cash_on_hand:c,bank_account_balance:d,savings:u}=s,m=c+d+u,g=this.validationRules.balance;if(c<g.minimums.cash&&(r.errors.push("Cash amount cannot be negative"),r.isValid=!1),d<g.minimums.bank&&(r.errors.push("Bank balance cannot be negative"),r.isValid=!1),u<g.minimums.savings&&(r.errors.push("Savings cannot be negative"),r.isValid=!1),m>0){const j=c/m,v=u/m;j>g.ratios.cashToTotal.max&&(r.warnings.push(`High cash percentage (${(j*100).toFixed(1)}%). Consider moving some to savings or investments.`),r.aiRecommendations.push({type:"reallocation",message:`Move $${(c-m*g.ratios.cashToTotal.max).toFixed(2)} from cash to savings`,suggestedAllocation:{cash:Math.round(m*g.ratios.cashToTotal.max),bank:d,savings:u+(c-Math.round(m*g.ratios.cashToTotal.max))}})),v<g.ratios.savingsToTotal.min&&(r.warnings.push(`Low savings percentage (${(v*100).toFixed(1)}%). Consider increasing your emergency fund.`),r.suggestions.push("Aim for at least 3-6 months of expenses in savings"))}return this.addPatternBasedSuggestions(r,"balance",s,o),r}validateBudgetUpdate(s,r,o){const{item_name:c,amount:d,date:u}=s;this.validationRules.budget,(!c||c.trim().length===0)&&(r.errors.push("Budget item name is required"),r.isValid=!1),(!d||d<=0)&&(r.errors.push("Budget amount must be positive"),r.isValid=!1),u||(r.errors.push("Budget date is required"),r.isValid=!1);const m=this.suggestBudgetCategory(c);m&&m!==c&&r.suggestions.push(`Consider categorizing as "${m}" for better tracking`);const g=this.suggestBudgetOptimization(c,d,o);return g&&r.aiRecommendations.push(g),r}validateInvestmentUpdate(s,r,o){const{name:c,amount:d,pricePerUnit:u,total_price:m}=s,g=this.validationRules.investments;if((!c||c.trim().length===0)&&(r.errors.push("Investment name is required"),r.isValid=!1),(!d||d<=0)&&(r.errors.push("Investment amount must be positive"),r.isValid=!1),o&&o.portfolio){const v=this.analyzePortfolioDiversification(s,o.portfolio);v.riskLevel==="high"&&(r.warnings.push(`High risk detected: ${v.reason}`),r.aiRecommendations.push({type:"diversification",message:"Consider diversifying your portfolio to reduce risk",suggestions:v.suggestions})),v.concentration>g.diversification.maxSingleAsset&&r.warnings.push(`High concentration in ${c} (${(v.concentration*100).toFixed(1)}%)`)}const j=this.getMarketTimingSuggestion(c,d);return j&&r.suggestions.push(j),r}validateBulkUpdate(s,r){const o={isValid:!0,validUpdates:[],invalidUpdates:[],warnings:[],suggestions:[],aiRecommendations:[]};return r.forEach((c,d)=>{const u=this.validateUpdate(s,c.data,c.currentData);u.isValid?o.validUpdates.push({...c,index:d,validation:u}):(o.invalidUpdates.push({...c,index:d,validation:u}),o.isValid=!1),o.warnings.push(...u.warnings),o.suggestions.push(...u.suggestions),o.aiRecommendations.push(...u.aiRecommendations)}),this.addBulkRecommendations(o,s,r),o}generateUpdateSuggestions(s,r,o=null){const c={priority:[],optimization:[],maintenance:[]};switch(s){case"balance":return this.generateBalanceSuggestions(r,c,o);case"budget":return this.generateBudgetSuggestions(r,c,o);case"investment":return this.generateInvestmentSuggestions(r,c,o);default:return c}}generateBalanceSuggestions(s,r,o){if(!s||s.length===0)return r;const c=s.reduce((m,g)=>m+g.cash_on_hand+g.bank_account_balance+g.savings,0),d=c/s.length;c<1e3&&r.priority.push({type:"emergency_fund",message:"Build emergency fund to at least $1,000",action:"Increase savings gradually",priority:"high"});const u=s.filter(m=>m.cash_on_hand+m.bank_account_balance+m.savings<d*.5);return u.length>1&&r.optimization.push({type:"consolidation",message:`Consider consolidating ${u.length} low-balance accounts`,action:"Merge accounts to reduce maintenance overhead",priority:"medium"}),r}trackUpdate(s,r,o){try{const c={timestamp:new Date().toISOString(),type:s,data:r,result:o,success:o.success||!1};this.updateHistory.push(c),this.saveUpdateHistory(),this.analyzeUpdatePatterns()}catch(c){console.warn("Error tracking update:",c)}}analyzeUpdatePatterns(){if(this.updateHistory.length<5)return;const s=this.updateHistory.slice(-20),r={frequency:{},timing:{},amounts:{},success_rate:0};s.forEach(c=>{r.frequency[c.type]=(r.frequency[c.type]||0)+1});const o=s.filter(c=>c.success).length;r.success_rate=o/s.length*100,this.updatePatterns=r,this.saveUpdatePatterns()}addPatternBasedSuggestions(s,r,o,c){const d=this.getUserUpdatePatterns(r);d.frequency>5&&r==="balance"&&d.averageAmount&&o.cash_on_hand>d.averageAmount*1.5&&s.suggestions.push("This is higher than your usual cash amount. Consider if this allocation is intentional.")}suggestBudgetCategory(s){const r={"Food & Dining":["food","restaurant","dining","grocery","coffee","lunch","dinner"],Transportation:["gas","fuel","car","transport","uber","taxi","bus"],Utilities:["electric","water","gas","internet","phone","utility"],Entertainment:["movie","game","concert","streaming","netflix","entertainment"],Healthcare:["medical","doctor","pharmacy","health","insurance"]},o=s.toLowerCase();for(const[c,d]of Object.entries(r))if(d.some(u=>o.includes(u)))return c;return null}analyzePortfolioDiversification(s,r){const o=r.reduce((d,u)=>d+u.total_price,0)+s.total_price,c=s.total_price/o;return{concentration:c,riskLevel:c>.4?"high":c>.2?"medium":"low",reason:c>.4?`${s.name} would represent ${(c*100).toFixed(1)}% of portfolio`:"",suggestions:c>.4?["Consider reducing position size","Add other assets for diversification"]:[]}}getMarketTimingSuggestion(s,r){return["bitcoin","ethereum","crypto"].some(c=>s.toLowerCase().includes(c))?"Consider dollar-cost averaging for volatile assets rather than lump sum investment":null}loadUpdateHistory(){try{const s=localStorage.getItem("smart_update_history");return s?JSON.parse(s):[]}catch(s){return console.warn("Error loading update history:",s),[]}}saveUpdateHistory(){try{const s=this.updateHistory.slice(-100);localStorage.setItem("smart_update_history",JSON.stringify(s))}catch(s){console.warn("Error saving update history:",s)}}loadUpdatePatterns(){try{const s=localStorage.getItem("smart_update_patterns");return s?JSON.parse(s):{}}catch(s){return console.warn("Error loading update patterns:",s),{}}}saveUpdatePatterns(){try{localStorage.setItem("smart_update_patterns",JSON.stringify(this.updatePatterns))}catch(s){console.warn("Error saving update patterns:",s)}}getUserUpdatePatterns(s){var c;const r=this.updateHistory.filter(d=>d.type===s);if(r.length===0)return{frequency:0};const o=r.filter(d=>d.data&&typeof d.data.amount=="number").map(d=>d.data.amount);return{frequency:r.length,averageAmount:o.length>0?o.reduce((d,u)=>d+u,0)/o.length:null,lastUpdate:(c=r[r.length-1])==null?void 0:c.timestamp}}addBulkRecommendations(s,r,o){r==="balance"&&o.length>3&&s.aiRecommendations.push({type:"bulk_optimization",message:"Multiple balance updates detected. Consider using account consolidation feature.",action:"Review account structure for optimization opportunities"}),r==="budget"&&o.length>5&&s.suggestions.push("Large budget update detected. Consider using budget templates for consistency.")}generateOptimizationReport(s,r){const o={summary:"",recommendations:[],metrics:{},nextSteps:[]};return o.summary=`Analysis complete for ${s} updates. Found ${r.length} items for review.`,o}}function D1({darkMode:i,updateType:s,items:r,onBulkUpdate:o,onClose:c}){const[d]=y.useState(()=>{try{return new Rd}catch(E){return console.warn("Failed to initialize SmartUpdateService:",E),null}}),[u,m]=y.useState([]),[g,j]=y.useState({}),[v,w]=y.useState(null),[I,J]=y.useState(!1),[T,k]=y.useState(!1),[A,Y]=y.useState({priority:[],optimization:[],maintenance:[]});y.useEffect(()=>{if(d)try{const E=d.generateUpdateSuggestions(s,r);Y(E)}catch(E){console.warn("Failed to generate AI suggestions:",E),Y({priority:[],optimization:[],maintenance:[]})}},[r,s,d]);const V=(E,Q)=>{m(Q?[...u,E]:u.filter(oe=>oe!==E))},$=()=>{u.length===r.length?m([]):m(r.map(E=>E.id))},K=(E,Q)=>{j({...g,[E]:Q})},ne=()=>{const E=u.map(Q=>{const oe=r.find(M=>M.id===Q);if(!oe)return null;const R={...oe};if(s==="balance"){if(g.cashOperation&&g.cashAmount)switch(g.cashOperation){case"add":R.cash_on_hand=(oe.cash_on_hand||0)+g.cashAmount;break;case"subtract":R.cash_on_hand=Math.max(0,(oe.cash_on_hand||0)-g.cashAmount);break;case"set":R.cash_on_hand=g.cashAmount;break;case"percentage":R.cash_on_hand=(oe.cash_on_hand||0)*(1+g.cashAmount/100);break}if(g.bankOperation&&g.bankAmount)switch(g.bankOperation){case"add":R.bank_account_balance=(oe.bank_account_balance||0)+g.bankAmount;break;case"subtract":R.bank_account_balance=Math.max(0,(oe.bank_account_balance||0)-g.bankAmount);break;case"set":R.bank_account_balance=g.bankAmount;break;case"percentage":R.bank_account_balance=(oe.bank_account_balance||0)*(1+g.bankAmount/100);break}if(g.savingsOperation&&g.savingsAmount)switch(g.savingsOperation){case"add":R.savings=(oe.savings||0)+g.savingsAmount;break;case"subtract":R.savings=Math.max(0,(oe.savings||0)-g.savingsAmount);break;case"set":R.savings=g.savingsAmount;break;case"percentage":R.savings=(oe.savings||0)*(1+g.savingsAmount/100);break}R.total=(R.cash_on_hand||0)+(R.bank_account_balance||0)+(R.savings||0)}return{id:Q,data:R,currentData:oe}}).filter(Boolean);if(!d){const Q={isValid:E.length>0,validUpdates:E,invalidUpdates:[],warnings:[],suggestions:[],aiRecommendations:[]};return w(Q),Q}try{const Q=d.validateBulkUpdate(s,E);return w(Q),Q}catch(Q){console.warn("Bulk validation failed:",Q);const oe={isValid:E.length>0,validUpdates:E,invalidUpdates:[],warnings:["Smart validation unavailable - using basic validation"],suggestions:[],aiRecommendations:[]};return w(oe),oe}},fe=()=>{const E=ne();(E.isValid||E.validUpdates.length>0)&&k(!0)},ve=async()=>{J(!0);try{const E=ne();if(E.validUpdates.length>0&&(await o(E.validUpdates.map(Q=>({id:Q.id,data:Q.data}))),d))try{d.trackUpdate("bulk_"+s,{count:E.validUpdates.length,updateData:g},{success:!0})}catch(Q){console.warn("Failed to track bulk update:",Q)}}catch(E){if(console.error("Bulk update failed:",E),d)try{d.trackUpdate("bulk_"+s,g,{success:!1,error:E.message})}catch(Q){console.warn("Failed to track bulk update error:",Q)}}finally{J(!1)}},be=()=>{switch(s){case"balance":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"💰 Bulk Balance Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"💵 Cash Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>K("cashOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:E=>K("cashAmount",parseFloat(E.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"🏦 Bank Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>K("bankOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:E=>K("bankAmount",parseFloat(E.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"🐷 Savings Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>K("savingsOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:E=>K("savingsAmount",parseFloat(E.target.value)||0)})]})]})]})]});case"budget":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"📊 Bulk Budget Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"💰 Amount Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>K("amountOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Increase by Amount"}),n.jsx("option",{value:"subtract",children:"Decrease by Amount"}),n.jsx("option",{value:"multiply",children:"Multiply by Factor"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Value",step:"0.01",onChange:E=>K("amountValue",parseFloat(E.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"📅 Date Update"}),n.jsx("input",{type:"date",className:"form-control",onChange:E=>K("newDate",E.target.value)})]})]})]});case"investment":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"📈 Bulk Investment Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"📊 Amount Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>K("amountOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add to Position"}),n.jsx("option",{value:"subtract",children:"Reduce Position"}),n.jsx("option",{value:"rebalance",children:"Rebalance Portfolio"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",step:"0.01",onChange:E=>K("amountValue",parseFloat(E.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"💡 Rebalancing Strategy"}),n.jsxs("select",{className:"form-select",onChange:E=>K("rebalanceStrategy",E.target.value),children:[n.jsx("option",{value:"",children:"Manual Updates"}),n.jsx("option",{value:"equal_weight",children:"Equal Weight"}),n.jsx("option",{value:"market_cap",children:"Market Cap Weighted"}),n.jsx("option",{value:"risk_parity",children:"Risk Parity"})]})]})]})]});default:return n.jsx("div",{children:"Update form not available for this type"})}},ye=()=>!A||A.priority.length===0&&A.optimization.length===0?null:n.jsxs("div",{className:"ai-suggestions-panel mb-4",children:[n.jsx("h6",{children:"🤖 AI Recommendations"}),A.priority.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{className:"text-danger",children:"🔥 Priority Actions"}),A.priority.map((E,Q)=>n.jsxs("div",{className:"alert alert-warning",children:[n.jsx("strong",{children:E.message}),n.jsx("br",{}),n.jsx("small",{children:E.action})]},Q))]}),A.optimization.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{className:"text-info",children:"⚡ Optimization Opportunities"}),A.optimization.map((E,Q)=>n.jsxs("div",{className:"alert alert-info",children:[n.jsx("strong",{children:E.message}),n.jsx("br",{}),n.jsx("small",{children:E.action})]},Q))]})]}),Re=()=>v?n.jsxs("div",{className:"validation-results mb-4",children:[n.jsx("h6",{children:"✅ Validation Results"}),v.validUpdates.length>0&&n.jsx("div",{className:"alert alert-success",children:n.jsxs("strong",{children:["✅ ",v.validUpdates.length," items ready for update"]})}),v.invalidUpdates.length>0&&n.jsxs("div",{className:"alert alert-danger",children:[n.jsxs("strong",{children:["❌ ",v.invalidUpdates.length," items have validation errors"]}),n.jsx("ul",{className:"mt-2 mb-0",children:v.invalidUpdates.slice(0,3).map((E,Q)=>n.jsxs("li",{children:["Item ",E.index+1,": ",E.validation.errors.join(", ")]},Q))})]}),v.warnings.length>0&&n.jsxs("div",{className:"alert alert-warning",children:[n.jsx("strong",{children:"⚠️ Warnings:"}),n.jsx("ul",{className:"mt-2 mb-0",children:v.warnings.slice(0,3).map((E,Q)=>n.jsx("li",{children:E},Q))})]}),v.aiRecommendations.length>0&&n.jsxs("div",{className:"alert alert-info",children:[n.jsx("strong",{children:"🤖 AI Recommendations:"}),n.jsx("ul",{className:"mt-2 mb-0",children:v.aiRecommendations.slice(0,3).map((E,Q)=>n.jsx("li",{children:E.message},Q))})]})]}):null;return n.jsxs("div",{className:"bulk-update-panel",children:[n.jsx("style",{children:`
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
          background: ${i?"#2d3748":"#ffffff"};
          border-radius: 15px;
          max-width: 90%;
          max-height: 90%;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          color: ${i?"#e2e8f0":"#2d3748"};
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
          background: ${i?"#4a5568":"#f8f9fa"};
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .item-selection-list {
          max-height: 300px;
          overflow-y: auto;
          border: 1px solid ${i?"#4a5568":"#e2e8f0"};
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
          background: ${i?"#4a5568":"#f1f5f9"};
        }

        .item-selection-item.selected {
          background: ${i?"#667eea30":"#667eea20"};
          border: 1px solid #667eea;
        }

        .ai-suggestions-panel {
          background: ${i?"#4a5568":"#f8f9fa"};
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
      `}),n.jsxs("div",{className:"bulk-update-content",style:{width:"800px"},children:[n.jsx("div",{className:"bulk-update-header",children:n.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[n.jsxs("h4",{children:["🔄 Bulk Update - ",s.charAt(0).toUpperCase()+s.slice(1)]}),n.jsx("button",{className:"btn btn-link text-white p-0",onClick:c,style:{fontSize:"1.5rem",textDecoration:"none"},children:"✕"})]})}),n.jsxs("div",{className:"bulk-update-body",children:[ye(),n.jsxs("div",{className:"mb-4",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[n.jsxs("h6",{children:["📋 Select Items to Update (",u.length,"/",r.length,")"]}),n.jsx("button",{className:"btn btn-sm btn-outline-primary",onClick:$,children:u.length===r.length?"Deselect All":"Select All"})]}),n.jsx("div",{className:"item-selection-list",children:r.map(E=>n.jsxs("div",{className:`item-selection-item ${u.includes(E.id)?"selected":""}`,onClick:()=>V(E.id,!u.includes(E.id)),children:[n.jsx("input",{type:"checkbox",checked:u.includes(E.id),onChange:()=>{},className:"form-check-input me-2"}),n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("strong",{children:[s==="balance"&&`Account #${r.indexOf(E)+1}`,s==="budget"&&E.item_name,s==="investment"&&E.name]}),n.jsx("br",{}),n.jsxs("small",{className:"text-muted",children:[s==="balance"&&`Total: $${(E.cash_on_hand+E.bank_account_balance+E.savings).toFixed(2)}`,s==="budget"&&`Amount: $${E.amount.toFixed(2)}`,s==="investment"&&`Value: $${E.total_price.toFixed(2)}`]})]})]},E.id))})]}),u.length>0&&be(),Re(),n.jsxs("div",{className:"bulk-actions",children:[n.jsx("div",{children:n.jsxs("small",{className:"text-muted",children:[u.length," items selected for bulk update"]})}),n.jsxs("div",{className:"d-flex gap-2",children:[n.jsx("button",{className:"btn-bulk btn-secondary-bulk",onClick:c,children:"❌ Cancel"}),n.jsx("button",{className:"btn-bulk btn-primary-bulk",onClick:fe,disabled:u.length===0,children:"👁️ Preview Changes"}),n.jsx("button",{className:"btn-bulk btn-success-bulk",onClick:ve,disabled:u.length===0||I,children:I?"⏳ Processing...":"✅ Apply Updates"})]})]})]})]})]})}const Cr="https://x-pense-app-production.up.railway.app",Lc={balance:`${Cr}/balance`,transactions:`${Cr}/transactions`,goals:`${Cr}/goals`,budget:`${Cr}/budget`,investments:`${Cr}/investments`},Cs=i=>`${Cr}${i}`;function B1({darkMode:i,cashOnHand:s,setCashOnHand:r,bankAccountBalance:o,setBankAccountBalance:c,savings:d,setSavings:u,setTotal:m,formatCurrency:g,balanceId:j,setBalanceId:v,balances:w,setBalances:I,editIndex:J,setEditIndex:T,editBalance:k,setEditBalance:A,balanceError:Y,setBalanceError:V}){const[$,K]=y.useState(!1),[ne,fe]=y.useState(""),[ve,be]=y.useState(null),[ye,Re]=y.useState({}),[E,Q]=y.useState(null),[oe,R]=y.useState(!1),[M,se]=y.useState(0),[Ae,ke]=y.useState(0);y.useState(!1);const[je,U]=y.useState(null),[ce,pe]=y.useState(!1),[W,ae]=y.useState(null),[re,le]=y.useState([]),[Pe,Ge]=y.useState(0),[ee,X]=y.useState(0),[Ee,ze]=y.useState(0),[Pt,Ie]=y.useState(0),dt=new U1,[Ze,ut]=y.useState(null),[lt,Fn]=y.useState(!1);y.useEffect(()=>{let G=null;try{G=new Rd,ut(G),console.log("SmartUpdateService initialized successfully")}catch(Z){console.warn("SmartUpdateService failed to initialize:",Z),ut(null)}finally{Fn(!0)}},[]),y.useEffect(()=>{var G;Ge(0),X(0),ze(0),Ie(0),Re({}),ae(null),U(null),window.innerWidth<=768&&(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,(G=document.activeElement)==null||G.blur()),console.log("Balance component mounted - fields reset")},[]),y.useEffect(()=>{Ie(Pe+ee+Ee)},[Pe,ee,Ee]);const Je=G=>{fe(G),V("")},Me=G=>{V(G),fe("")},pt=()=>{const G=dt.validateBalanceInputs(Pe,ee,Ee);return Re(G),Object.keys(G).filter(Z=>Z!=="warning").length===0};y.useEffect(()=>{if(w.length>0&&Ze&&lt)try{const G=Ze.generateUpdateSuggestions("balance",w);le(G)}catch(G){console.warn("Failed to generate update suggestions:",G),le([])}},[w,Ze,lt]),y.useEffect(()=>{if(w.length>0){const G=dt.calculateFinancialMetrics(w,M,Ae);Q(G)}},[w,M,Ae]),y.useEffect(()=>{const G=s+o+d;if(G>0){const Z=dt.suggestOptimalAllocation(G);U(Z)}else U(null)},[s,o,d]),y.useEffect(()=>{console.log("BALANCE COMPONENT");const G=()=>{console.log("Fetching balances..."),K(!0),ge.get(Lc.balance).then(Z=>{if(console.log("Response received:",Z.data),Array.isArray(Z.data)){const de=Z.data.map(Ne=>({...Ne,total:Ne.cash_on_hand+Ne.bank_account_balance+Ne.savings,id:Ne.id}));if(console.log("Fetched balances:",de),I(de),de.length>0){const Ne=de.reduce((We,He)=>We+He.cash_on_hand,0),Be=de.reduce((We,He)=>We+He.bank_account_balance,0),tt=de.reduce((We,He)=>We+He.savings,0);r(Ne),c(Be),u(tt)}}else if(Z.data&&typeof Z.data=="object"){const de={...Z.data,total:Z.data.cash_on_hand+Z.data.bank_account_balance+Z.data.savings};console.log("Fetched single balance:",de),I([de]),r(de.cash_on_hand),c(de.bank_account_balance),u(de.savings)}else console.error("Fetched data is not an array or object:",Z.data),r(0),c(0),u(0);V(null)}).catch(Z=>{console.error("There was an error fetching the balances!",Z),Me("Failed to load balance data. Please try again."),r(0),c(0),u(0)}).finally(()=>{K(!1)})};window.innerWidth<=768?setTimeout(G,100):G()},[I,r,c,u,V]),y.useEffect(()=>{if(ne){const G=setTimeout(()=>fe(""),3e3);return()=>clearTimeout(G)}},[ne]),y.useEffect(()=>{if(Y){const G=setTimeout(()=>V(""),5e3);return()=>clearTimeout(G)}},[Y]),y.useEffect(()=>{m(s+o+d)},[s,o,d,m]);const mt=G=>{const{name:Z,value:de}=G.target,Ne=Number(de);if(Ne<0){Me("Values cannot be negative");return}if(A({...k,[Z]:Ne}),Ze)try{const Be=Ze.validateUpdate("balance",{...k,[Z]:Ne},k);ae(Be)}catch(Be){console.warn("Smart validation failed:",Be),ae(null)}},yn=async G=>{if(Ze)try{const de=Ze.validateUpdate("balance",k,w[G]);if(!de.isValid){Me(`Validation failed: ${de.errors.join(", ")}`);return}if(de.warnings.length>0&&!window.confirm(`Warning: ${de.warnings.join(" ")} Do you want to continue?`))return}catch(de){console.warn("Smart validation failed:",de)}if(k.cash_on_hand<0||k.bank_account_balance<0||k.savings<0){Me("All values must be non-negative");return}const Z={...k,total:k.cash_on_hand+k.bank_account_balance+k.savings};try{K(!0),await ge.put(Cs(`/balance/${Z.id}`),Z);const de=w.map((We,He)=>He===G?Z:We);I(de),T(null);const Ne=de.reduce((We,He)=>We+He.cash_on_hand,0),Be=de.reduce((We,He)=>We+He.bank_account_balance,0),tt=de.reduce((We,He)=>We+He.savings,0);if(r(Ne),c(Be),u(tt),Ze)try{Ze.trackUpdate("balance",Z,{success:!0})}catch(We){console.warn("Failed to track update:",We)}Je(`Successfully updated account #${G+1}!`),console.log("Balance updated:",Z)}catch(de){if(console.error("There was an error updating the balance!",de),Ze)try{Ze.trackUpdate("balance",Z,{success:!1,error:de.message})}catch(Ne){console.warn("Failed to track update error:",Ne)}Me("Failed to update balance. Please try again.")}finally{K(!1)}},Ft=async G=>{if(ve===G){const Z=w[G];if(!Z||!Z.id){console.error("Balance or balance.id is undefined"),Me("Unable to delete: Invalid balance data");return}try{K(!0),await ge.delete(Cs(`/balance/${Z.id}`));const de=w.filter((Ne,Be)=>Be!==G);if(I(de),de.length>0){const Ne=de.reduce((We,He)=>We+He.cash_on_hand,0),Be=de.reduce((We,He)=>We+He.bank_account_balance,0),tt=de.reduce((We,He)=>We+He.savings,0);r(Ne),c(Be),u(tt)}else r(0),c(0),u(0);Je(`Successfully deleted account #${G+1}!`),be(null)}catch(de){console.error("Error deleting balance:",de),Me("Failed to delete balance. Please try again.")}finally{K(!1)}}else be(G),setTimeout(()=>be(null),3e3)},gn=async G=>{try{K(!0);const Z=G.map(Ne=>ge.put(Cs(`/balance/${Ne.id}`),Ne.data));await Promise.all(Z);const de=w.map(Ne=>{const Be=G.find(tt=>tt.id===Ne.id);return Be?{...Ne,...Be.data}:Ne});if(I(de),pe(!1),Ze)try{Ze.trackUpdate("bulk_balance",{count:G.length},{success:!0})}catch(Ne){console.warn("Failed to track bulk update:",Ne)}Je(`Successfully updated ${G.length} accounts!`)}catch(Z){if(console.error("Bulk update failed:",Z),Ze)try{Ze.trackUpdate("bulk_balance",{count:G.length},{success:!1,error:Z.message})}catch(de){console.warn("Failed to track bulk update error:",de)}Me("Bulk update failed. Please try again.")}finally{K(!1)}},ct=()=>{Ge(0),X(0),ze(0),Ie(0),Re({}),ae(null),U(null),Je("Fields have been reset!")},ft=async()=>{if(!pt())return;const G=Pe+ee+Ee;Ie(G);const Z={cash_on_hand:Pe,bank_account_balance:ee,savings:Ee,total:G,created_at:new Date().toISOString()};try{K(!0);const de=await ge.post(Lc.balance,Z);console.log("Balance saved:",de.data);const Ne=[...w,{...de.data,total:G}];I(Ne);const Be=Ne.reduce((He,Ot)=>He+Ot.cash_on_hand,0),tt=Ne.reduce((He,Ot)=>He+Ot.bank_account_balance,0),We=Ne.reduce((He,Ot)=>He+Ot.savings,0);r(Be),c(tt),u(We),Ge(0),X(0),ze(0),Ie(0),Re({}),ae(null),U(null),Je(`Successfully added new balance account! Total: ${g(G)}`)}catch(de){console.error("There was an error saving your balance!",de),Me("Failed to save balance. Please try again.")}finally{K(!1)}},rn=()=>{je&&(Ge(Math.round(je.cash)),X(Math.round(je.bank)),ze(Math.round(je.savings)),Je("Applied optimal allocation suggestion!"))},At=G=>{switch(G){case"emergency":Ge(500),X(1500),ze(3e3),Je("Applied emergency fund preset!");break;case"student":Ge(200),X(800),ze(500),Je("Applied student budget preset!");break;case"family":Ge(1e3),X(5e3),ze(1e4),Je("Applied family budget preset!");break}},Yt=()=>{const G=w.filter(Z=>Z.cash_on_hand+Z.bank_account_balance+Z.savings<100);if(G.length>1){const Z=G.reduce((Be,tt)=>Be+tt.cash_on_hand,0),de=G.reduce((Be,tt)=>Be+tt.bank_account_balance,0),Ne=G.reduce((Be,tt)=>Be+tt.savings,0);r(Z),c(de),u(Ne),Je(`Consolidated ${G.length} accounts. Review and save the combined account.`)}};return n.jsxs("div",{className:"balance-container",children:[n.jsx("style",{children:`
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
          background: ${i?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
          transition: all 0.3s ease;
        }

        .balance-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .balance-title {
          color: ${i?"#e2e8f0":"#2d3748"};
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
          color: ${i?"#e2e8f0":"#2d3748"};
          transition: color 0.3s ease;
        }

        .balance-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid ${i?"#4a5568":"#e2e8f0"};
          border-radius: 12px;
          font-size: 1rem;
          background: ${i?"#2d3748":"#ffffff"};
          color: ${i?"#e2e8f0":"#2d3748"};
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
          background: ${i?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
          transition: all 0.3s ease;
        }

        .overview-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .overview-title {
          color: ${i?"#e2e8f0":"#2d3748"};
          font-size: 1.2em;
          font-weight: 700;
          margin-bottom: 25px;
          text-align: center;
        }

        .balance-table {
          background: ${i?"#2d3748":"#ffffff"};
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .balance-table thead th {
          background: ${i?"#4a5568":"#667eea"};
          color: white;
          font-weight: 700;
          padding: 18px 15px;
          border: none;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-size: 0.9rem;
          border-bottom: 3px solid ${i?"#2d3748":"#5a67d8"};
        }

        .balance-table tbody tr {
          transition: all 0.3s ease;
          border-bottom: 1px solid ${i?"#4a5568":"#e2e8f0"};
        }

        .balance-table tbody tr:hover {
          background: ${i?"#4a5568":"#f7fafc"};
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .balance-table tbody td {
          padding: 18px 15px;
          vertical-align: middle;
          border: none;
          color: ${i?"#e2e8f0":"#2d3748"};
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
          color: ${i?"#68d391":"#38a169"};
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
          background: ${i?"#2d3748":"#ffffff"};
          color: ${i?"#e2e8f0":"#2d3748"};
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
          color: ${i?"#e2e8f0":"#2d3748"};
        }

        .large-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid ${i?"#4a5568":"#e2e8f0"};
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
          background: ${i?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .metric-card {
          background: ${i?"#4a5568":"#ffffff"};
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
          color: ${i?"#a0aec0":"#718096"};
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
          background: ${i?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .allocation-suggestion {
          background: ${i?"#4a5568":"#ffffff"};
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
          background: ${i?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .insight-card {
          background: ${i?"#4a5568":"#ffffff"};
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
      `}),n.jsxs("div",{className:"balance-header",children:[n.jsx("h5",{children:"💰 Balance Management"}),n.jsx("p",{className:"balance-subtitle",children:"Track your financial accounts in one place"})]}),re&&re.priority&&re.optimization&&(re.priority.length>0||re.optimization.length>0)&&n.jsxs("div",{className:"insights-section",children:[n.jsx("h5",{className:"balance-title",children:"🤖 Smart Update Recommendations"}),re.priority.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{style:{color:"#f56565",fontWeight:"700"},children:"🔥 High Priority"}),re.priority.map((G,Z)=>n.jsxs("div",{className:"insight-card critical",children:[n.jsx("strong",{children:G.message}),n.jsx("br",{}),n.jsx("small",{children:G.action})]},Z))]}),re.optimization.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{style:{color:"#4299e1",fontWeight:"700"},children:"⚡ Optimization Opportunities"}),re.optimization.map((G,Z)=>n.jsxs("div",{className:"insight-card opportunity",children:[n.jsx("strong",{children:G.message}),n.jsx("br",{}),n.jsx("small",{children:G.action})]},Z))]})]}),ce&&n.jsx(D1,{darkMode:i,updateType:"balance",items:w,onBulkUpdate:gn,onClose:()=>pe(!1)}),ne&&n.jsxs("div",{className:"alert-success-balance",children:[n.jsx("strong",{children:"✅ Success!"})," ",ne]}),Y&&n.jsxs("div",{className:"alert-error-balance",children:[n.jsx("strong",{children:"❌ Error!"})," ",Y]}),n.jsxs("div",{className:"balance-section",children:[n.jsx("h5",{className:"balance-title",children:"� Add New Balance Account"}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"cashOnHand",className:"input-label",children:"💵 Cash On Hand"}),n.jsx("input",{type:"number",id:"cashOnHand",name:"cashOnHand",value:Pe||"",onChange:G=>{const Z=G.target.value===""?0:Number(G.target.value);Ge(Z>=0?Z:0),Re({...ye,cashOnHand:""})},placeholder:"Enter cash amount",className:`balance-input ${ye.cashOnHand?"error":""}`,disabled:$}),ye.cashOnHand&&n.jsx("div",{className:"validation-error",children:ye.cashOnHand})]}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"bankAccountBalance",className:"input-label",children:"🏦 Bank Account Balance"}),n.jsx("input",{type:"number",id:"bankAccountBalance",name:"bankAccountBalance",value:ee||"",onChange:G=>{const Z=G.target.value===""?0:Number(G.target.value);X(Z>=0?Z:0),Re({...ye,bankAccountBalance:""})},placeholder:"Enter bank account balance",className:`balance-input ${ye.bankAccountBalance?"error":""}`,disabled:$}),ye.bankAccountBalance&&n.jsx("div",{className:"validation-error",children:ye.bankAccountBalance})]}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"savings",className:"input-label",children:"🐷 Savings"}),n.jsx("input",{type:"number",id:"savings",name:"savings",value:Ee||"",onChange:G=>{const Z=G.target.value===""?0:Number(G.target.value);ze(Z>=0?Z:0),Re({...ye,savings:""})},placeholder:"Enter savings amount",className:`balance-input ${ye.savings?"error":""}`,disabled:$}),ye.savings&&n.jsx("div",{className:"validation-error",children:ye.savings})]}),ye.general&&n.jsx("div",{className:"validation-error",style:{textAlign:"center",fontSize:"16px"},children:ye.general}),n.jsxs("div",{style:{textAlign:"center",marginTop:"25px",display:"flex",justifyContent:"center",gap:"15px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{className:`btn-balance btn-set-balance ${$?"btn-disabled":""}`,onClick:ft,disabled:$,children:[$?n.jsx("span",{className:"loading-spinner-balance"}):"","🎯 Set Balance"]}),n.jsx("button",{className:`btn-balance btn-reset-balance ${$?"btn-disabled":""}`,onClick:ct,disabled:$,children:"🔄 Reset Fields"}),w.length>1&&n.jsx("button",{className:"btn-balance btn-set-balance",onClick:()=>pe(!0),disabled:$,title:"Update multiple accounts at once",children:"⚡ Bulk Update"})]})]}),E&&n.jsxs("div",{className:"financial-metrics-section",children:[n.jsx("h5",{className:"balance-title",children:"📈 Financial Health Dashboard"}),n.jsxs("div",{className:"monthly-inputs",children:[n.jsxs("div",{children:[n.jsx("label",{className:"input-label",children:"📊 Monthly Income"}),n.jsx("input",{type:"number",value:M,onChange:G=>se(Number(G.target.value)),placeholder:"Enter monthly income",className:"balance-input"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"input-label",children:"💸 Monthly Expenses"}),n.jsx("input",{type:"number",value:Ae,onChange:G=>ke(Number(G.target.value)),placeholder:"Enter monthly expenses",className:"balance-input"})]})]}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-card",children:[n.jsx("div",{className:"metric-value",style:{color:"#38a169"},children:g(E.totalAssets)}),n.jsx("div",{className:"metric-label",children:"Total Assets"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:`metric-value health-score ${E.financialHealthScore>=80?"":E.financialHealthScore>=60?"warning":"critical"}`,children:[E.financialHealthScore,"/100"]}),n.jsx("div",{className:"metric-label",children:"Health Score"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-value",style:{color:"#4299e1"},children:[E.liquidityRatio.toFixed(1),"%"]}),n.jsx("div",{className:"metric-label",children:"Liquidity Ratio"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsx("div",{className:"metric-value",style:{color:"#8b5cf6"},children:E.emergencyFundStatus.months.toFixed(1)}),n.jsx("div",{className:"metric-label",children:"Emergency Fund (Months)"})]})]}),n.jsx("div",{style:{textAlign:"center"},children:n.jsxs("button",{className:"btn-balance btn-set-balance",onClick:()=>R(!oe),children:[oe?"🔼 Hide":"🔽 Show"," Financial Insights"]})})]}),oe&&E&&n.jsxs("div",{className:"insights-section",children:[n.jsx("h5",{className:"balance-title",children:"💡 Financial Insights & Recommendations"}),dt.generateFinancialInsights(E,w).map((G,Z)=>n.jsxs("div",{className:`insight-card ${G.type}`,children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"10px"},children:G.title}),n.jsx("p",{style:{margin:0},children:G.message})]},Z)),dt.generateFinancialInsights(E,w).length===0&&n.jsxs("div",{className:"insight-card success",children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"10px"},children:"🎉 Great Financial Health!"}),n.jsx("p",{style:{margin:0},children:"Your financial metrics look healthy. Keep up the good work!"})]})]}),(s>0||o>0||d>0)&&n.jsxs("div",{className:"allocation-section",children:[n.jsx("h5",{className:"balance-title",children:"🎯 Smart Allocation Assistant"}),n.jsxs("div",{className:"preset-buttons",children:[n.jsx("button",{className:"btn-preset",onClick:()=>At("emergency"),children:"🚨 Emergency Fund Preset"}),n.jsx("button",{className:"btn-preset",onClick:()=>At("student"),children:"🎓 Student Budget Preset"}),n.jsx("button",{className:"btn-preset",onClick:()=>At("family"),children:"👨‍👩‍👧‍👦 Family Budget Preset"})]}),je&&n.jsxs("div",{className:"allocation-suggestion",children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"15px"},children:"💡 Optimal Allocation Suggestion"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"15px",marginBottom:"15px"},children:[n.jsx("div",{children:n.jsxs("strong",{children:["💵 Cash: ",g(je.cash)]})}),n.jsx("div",{children:n.jsxs("strong",{children:["🏦 Bank: ",g(je.bank)]})}),n.jsx("div",{children:n.jsxs("strong",{children:["🐷 Savings: ",g(je.savings)]})})]}),n.jsxs("div",{style:{marginBottom:"15px"},children:[n.jsx("strong",{children:"Reasoning:"}),n.jsx("ul",{style:{margin:"5px 0",paddingLeft:"20px"},children:je.reasoning.map((G,Z)=>n.jsx("li",{children:G},Z))})]}),n.jsx("button",{className:"btn-balance btn-set-balance",onClick:rn,children:"✨ Apply Suggestion"})]}),w.length>1&&n.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:n.jsx("button",{className:"btn-balance btn-reset-balance",onClick:Yt,children:"🔄 Consolidate Low Balance Accounts"})})]}),n.jsxs("div",{className:"overview-section",children:[n.jsx("h5",{className:"overview-title",children:"📊 Account Overview"}),$&&w.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading your account data..."})]}):n.jsx("div",{className:"balance-table",children:n.jsxs("table",{className:"table table-striped table-hover table-bordered",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"🔢 ACC#"}),n.jsx("th",{children:"💵 Cash on Hand"}),n.jsx("th",{children:"🏦 Bank Balance"}),n.jsx("th",{children:"🐷 Savings"}),n.jsx("th",{children:"💰 Total"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsx("tbody",{children:w.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"6",className:"no-balances",children:n.jsxs("div",{children:[n.jsx("h4",{children:"🎯 Start Your Financial Journey!"}),n.jsx("p",{children:"Create your first balance account above to begin tracking your finances"}),n.jsx("small",{children:"💡 Pro tip: Separate your money into different categories for better organization"})]})})}):w.map((G,Z)=>n.jsx("tr",{children:J===Z?n.jsxs(n.Fragment,{children:[n.jsx("td",{className:"d-none d-md-table-cell","data-label":"ACC#",children:n.jsx("span",{className:"account-number",children:Z+1})}),n.jsxs("td",{"data-label":"Cash on Hand",children:[n.jsx("input",{type:"number",name:"cash_on_hand",value:k.cash_on_hand,onChange:mt,className:"edit-input-table",min:"0"}),W&&W.warnings&&W.warnings.length>0&&n.jsxs("div",{style:{fontSize:"0.8rem",color:"#f59e0b",marginTop:"2px"},children:["⚠️ ",W.warnings[0]]})]}),n.jsxs("td",{"data-label":"Bank Acc Balance",children:[n.jsx("input",{type:"number",name:"bank_account_balance",value:k.bank_account_balance,onChange:mt,className:"edit-input-table",min:"0"}),W&&W.suggestions&&W.suggestions.length>0&&n.jsxs("div",{style:{fontSize:"0.8rem",color:"#4299e1",marginTop:"2px"},children:["💡 ",W.suggestions[0]]})]}),n.jsx("td",{"data-label":"Savings",children:n.jsx("input",{type:"number",name:"savings",value:k.savings,onChange:mt,className:"edit-input-table",min:"0"})}),n.jsx("td",{className:"d-none d-md-table-cell",children:n.jsx("span",{className:"total-amount",children:g(k.cash_on_hand+k.bank_account_balance+k.savings)})}),n.jsx("td",{"data-label":"Actions",children:n.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{onClick:()=>yn(Z),className:`btn-table btn-save ${$?"btn-disabled":""}`,disabled:$,children:[$?n.jsx("span",{className:"loading-spinner-balance"}):"","💾 Save"]}),n.jsx("button",{onClick:()=>{T(null),Je("Edit cancelled")},className:"btn-table btn-cancel",children:"❌ Cancel"})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("td",{className:"d-none d-md-table-cell","data-label":"ACC#",children:n.jsx("span",{className:"account-number",children:Z+1})}),n.jsx("td",{"data-label":"Cash on Hand",children:n.jsx("span",{className:"currency-amount",children:g(G.cash_on_hand)})}),n.jsx("td",{"data-label":"Bank Acc Balance",children:n.jsx("span",{className:"currency-amount",children:g(G.bank_account_balance)})}),n.jsx("td",{"data-label":"Savings",children:n.jsx("span",{className:"currency-amount",children:g(G.savings)})}),n.jsx("td",{className:"d-none d-md-table-cell",children:n.jsx("span",{className:"total-amount",children:g(G.total!==void 0?G.total:0)})}),n.jsx("td",{"data-label":"Actions",children:n.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsx("button",{onClick:()=>{T(Z),A(G)},className:"btn-table btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>Ft(Z),className:`btn-table ${ve===Z?"confirm-delete":"btn-delete"}`,children:ve===Z?"⚠️ Confirm?":"🗑️ Delete"})]})})]})},Z))})]})})]})]})}function z1({darkMode:i,budget:s,setBudget:r,validated:o,setValidated:c,formatCurrency:d,items:u,setItems:m,name:g,setName:j,amount:v,setAmount:w,newBudget:I,setNewBudget:J,error:T,setError:k,editingIndex:A,setEditingIndex:Y,editAmount:V,setEditAmount:$,date:K,setDate:ne,totalBudgetAmount:fe,parseDate:ve}){const be=ee=>{if(!ee)return"";const X=new Date(ee),Ee=String(X.getMonth()+1).padStart(2,"0"),ze=String(X.getDate()).padStart(2,"0"),Pt=X.getFullYear();return`${Ee}-${ze}-${Pt}`},[ye,Re]=y.useState(new Date),[E,Q]=y.useState("");y.useState("");const[oe,R]=y.useState(!1),[M,se]=y.useState(""),[Ae,ke]=y.useState(null);y.useEffect(()=>{ce()},[]),y.useEffect(()=>{if(M){const ee=setTimeout(()=>se(""),3e3);return()=>clearTimeout(ee)}},[M]),y.useEffect(()=>{if(T){const ee=setTimeout(()=>k(""),5e3);return()=>clearTimeout(ee)}},[T]);const je=ee=>{se(ee),k("")},U=ee=>{k(ee),se("")},ce=async()=>{try{R(!0),console.log("BUDGET COMPONENT"),console.log("Fetching budgets...");const X=(await ge.get("http://localhost:5001/budgets")).data.map(Ee=>({...Ee,date:be(ve(Ee.date))}));console.log("Adjusted budgets:",X),m(X)}catch(ee){console.error("Error fetching budgets:",ee),U("Failed to load budgets. Please try again.")}finally{R(!1)}},pe=async()=>{if(!g||!v||!K){U("Please fill in all fields: name, amount, and date");return}if(isNaN(v)||parseFloat(v)<=0){U("Please enter a valid positive amount");return}const ee={item_name:g.trim(),amount:parseFloat(v),date:K};try{R(!0);const X=await ge.post("http://localhost:5001/budgets",ee);m([...u,X.data]),j(""),w(""),ne(""),je(`Successfully added "${g}" to budget!`)}catch(X){console.error("Error adding budget:",X),U("Failed to add budget item. Please try again.")}finally{R(!1)}},W=ee=>{Y(ee),$(u[ee].amount),Re(u[ee].date)},ae=async ee=>{if(!V||isNaN(V)||parseFloat(V)<=0){U("Please enter a valid positive amount");return}if(!ye){U("Please select a valid date");return}const X={item_name:u[ee].item_name,amount:parseFloat(V),date:new Date(ye).toISOString().split("T")[0]};try{R(!0),await ge.put(`http://localhost:5001/budgets/${u[ee].id}`,X);const Ee=u.map((ze,Pt)=>Pt===ee?{...ze,...X,date:be(X.date)}:ze);m(Ee),je(`Successfully updated "${u[ee].item_name}"!`),Y(null)}catch(Ee){console.error("Error saving budget:",Ee),U("Failed to save budget changes. Please try again.")}finally{R(!1)}},re=()=>{Y(null),$(""),Re(be(new Date)),je("Edit cancelled")},le=async()=>{if(!I||!E){U("Please enter both budget amount and date"),c(!1);return}if(isNaN(I)||parseFloat(I)<=0){U("Please enter a valid positive budget amount"),c(!1);return}const ee={item_name:"Set Budget",amount:parseFloat(I),date:E};try{R(!0);const X=await ge.post("http://localhost:5001/budgets",ee);console.log("Response data:",X.data),m([...u,X.data]),r(I),Q(E),c(!0),je(`Main budget of ${d(I)} has been set!`)}catch(X){console.error("Error adding budget:",X),U("Failed to set main budget. Please try again."),c(!1)}finally{R(!1)}},Pe=async()=>{const ee=u.find(X=>X.item_name==="Set Budget");if(ee){const X={...ee,amount:"",date:""};console.log("Updated Item:",X);try{R(!0);const Ee=await ge.put(`http://localhost:5001/budgets/${ee.id}`,X);console.log("Response from server:",Ee.data),m(u.map(ze=>ze.item_name==="Set Budget"?X:ze)),J(""),Q(""),r(0),c(!1),je("Main budget has been reset!"),console.log("Items after reset:",u)}catch(Ee){console.log("Error resetting budget:",Ee),U("Failed to reset budget. Please try again.")}finally{R(!1)}}else U("No main budget found to reset"),console.log("Set Budget item not found")},Ge=async ee=>{if(Ae===ee)try{R(!0),await ge.delete(`http://localhost:5001/budgets/${u[ee].id}`);const X=u.filter((Ee,ze)=>ze!==ee);m(X),je(`Successfully deleted "${u[ee].item_name}"!`),ke(null)}catch(X){console.log("Error deleting budget:",X),U("Failed to delete budget item. Please try again.")}finally{R(!1)}else ke(ee),setTimeout(()=>ke(null),3e3)};return n.jsxs("div",{className:"budget-container",children:[n.jsx("style",{children:`
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
                    background: ${i?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 20px;
                    padding: 40px;
                    margin-bottom: 30px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
                    transition: all 0.3s ease;
                }

                .budget-section:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .budget-title {
                    color: ${i?"#e2e8f0":"#2d3748"};
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
                    border: 2px solid ${i?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${i?"#2d3748":"#ffffff"};
                    color: ${i?"#e2e8f0":"#2d3748"};
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
                    color: ${i?"#a0aec0":"#718096"};
                    font-weight: 500;
                }

                /* Date input styling for dark mode */
                input[type="date"].enhanced-input {
                    color-scheme: ${i?"dark":"light"};
                    position: relative;
                    cursor: pointer;
                }

                input[type="date"].enhanced-input::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    ${i?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* For Firefox */
                input[type="date"].enhanced-input::-moz-calendar-picker-indicator {
                    cursor: pointer;
                    ${i?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* Additional styling for better visibility in dark mode */
                ${i?`
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
                    background: ${i?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .table-enhanced thead th {
                    background: ${i?"#4a5568":"#667eea"};
                    color: white;
                    font-weight: 700;
                    padding: 18px 15px;
                    border: none;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    font-size: 0.9rem;
                    border-bottom: 3px solid ${i?"#2d3748":"#5a67d8"};
                }

                .table-enhanced tbody tr {
                    transition: all 0.3s ease;
                    border-bottom: 1px solid ${i?"#4a5568":"#e2e8f0"};
                }

                .table-enhanced tbody tr:hover {
                    background: ${i?"#4a5568":"#f7fafc"};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-enhanced tbody td {
                    padding: 18px 15px;
                    vertical-align: middle;
                    border: none;
                    color: ${i?"#e2e8f0":"#2d3748"};
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
                    color: ${i?"#e2e8f0":"#2d3748"};
                }

                .large-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid ${i?"#4a5568":"#e2e8f0"};
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
                    color: ${i?"#68d391":"#38a169"};
                }

                .date-display {
                    color: ${i?"#a0aec0":"#718096"};
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
            `}),n.jsxs("div",{className:"budget-header",children:[n.jsx("h5",{children:"💰 Budget Management"}),n.jsx("p",{className:"budget-subtitle",children:"Plan and track your financial allocations"})]}),M&&n.jsxs("div",{className:"alert-success",children:[n.jsx("strong",{children:"✅ Success!"})," ",M]}),T&&n.jsxs("div",{className:"alert-danger",children:[n.jsx("strong",{children:"❌ Error!"})," ",T]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"🎯 Set Main Budget"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"Set budget",value:isNaN(I)?"":I,onChange:ee=>{const X=ee.target.value;J(X===""?"":parseFloat(X))},className:`enhanced-input ${o?"is-valid":"is-invalid"}`,placeholder:"💵 Enter Budget Amount",disabled:oe}),n.jsx("input",{type:"date",value:E,onChange:ee=>Q(ee.target.value),className:"enhanced-input",id:"budget-date",name:"budget-date",disabled:oe}),n.jsxs("button",{className:`btn-enhanced btn-primary-enhanced ${oe?"btn-disabled":""}`,onClick:le,disabled:oe,children:[oe?n.jsx("span",{className:"loading-spinner"}):"","🎯 Set Budget"]}),n.jsxs("button",{className:`btn-enhanced btn-warning-enhanced ${oe?"btn-disabled":""}`,onClick:Pe,disabled:oe,children:[oe?n.jsx("span",{className:"loading-spinner"}):"","🔄 Reset"]})]})]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"📝 Add New Budget Item"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",placeholder:"📝 Item Name (e.g., Groceries, Entertainment)",value:g,onChange:ee=>j(ee.target.value),className:"enhanced-input",id:"item-name",name:"item-name",disabled:oe}),n.jsx("input",{type:"number",placeholder:"💵 Amount",value:isNaN(v)?"":v,onChange:ee=>{const X=ee.target.value;w(X===""?"":parseFloat(X))},className:"enhanced-input",id:"item-amount",name:"item-amount",disabled:oe}),n.jsx("input",{type:"date",value:K,onChange:ee=>ne(ee.target.value),className:"enhanced-input",id:"item-date",name:"item-date",disabled:oe}),n.jsxs("button",{className:`btn-enhanced btn-success-enhanced ${oe?"btn-disabled":""}`,onClick:pe,disabled:oe,children:[oe?n.jsx("span",{className:"loading-spinner"}):"","✨ Add Item"]})]})]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"📊 Budget Overview"}),oe&&u.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading your budget data..."})]}):n.jsx("div",{className:"table-enhanced",children:n.jsxs("table",{className:"table table-striped table-hover table-bordered responsive-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"📝 Item Name"}),n.jsx("th",{children:"💰 Amount"}),n.jsx("th",{children:"📅 Date"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsxs("tbody",{children:[u.length>0?u.map((ee,X)=>n.jsxs("tr",{children:[n.jsx("td",{"data-label":"Item Name",children:ee.item_name==="Set Budget"?n.jsxs("span",{className:"main-budget-badge",children:["🎯 ",ee.item_name]}):n.jsxs("span",{className:"item-name-badge",children:["📌 ",ee.item_name]})}),n.jsx("td",{"data-label":"Amount",children:A===X?n.jsx("input",{type:"number",value:V,onChange:Ee=>$(Ee.target.value),className:"enhanced-input",style:{width:"150px",padding:"8px 12px"}}):n.jsx("span",{className:"amount-display",children:d(ee.amount)})}),n.jsx("td",{"data-label":"Date",children:A===X?n.jsx("input",{type:"date",value:ye,onChange:Ee=>Re(Ee.target.value),className:"enhanced-input",style:{width:"170px",padding:"8px 12px"}}):n.jsxs("span",{className:"date-display",children:["📅 ",ee.date||"No date set"]})}),n.jsx("td",{"data-label":"Actions",children:A===X?n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{className:`btn-table btn-save-table ${oe?"btn-disabled":""}`,onClick:()=>ae(X),disabled:oe,children:[oe?n.jsx("span",{className:"loading-spinner",style:{width:"12px",height:"12px"}}):"","💾 Save"]}),n.jsx("button",{className:"btn-table btn-cancel-table",onClick:re,children:"❌ Cancel"})]}):n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsx("button",{className:"btn-table btn-edit-table",onClick:()=>W(X),children:"✏️ Edit"}),n.jsx("button",{className:`btn-table ${Ae===X?"confirm-delete":"btn-delete-table"}`,onClick:()=>Ge(X),children:Ae===X?"⚠️ Confirm?":"🗑️ Delete"})]})})]},X)):n.jsx("tr",{children:n.jsx("td",{colSpan:"4",className:"no-items",children:n.jsxs("div",{children:[n.jsx("h4",{children:"🎯 Start Your Budget Journey!"}),n.jsx("p",{children:"Set your main budget above, then add specific budget categories!"}),n.jsx("small",{children:"💡 Pro tip: Create categories like groceries, entertainment, utilities, savings"})]})})}),u.length>0&&n.jsxs("tr",{className:"total-row",children:[n.jsx("td",{children:n.jsx("strong",{children:"🏆 TOTAL BUDGET"})}),n.jsx("td",{children:n.jsx("strong",{children:d(fe)})}),n.jsx("td",{colSpan:"2",children:n.jsx("small",{children:"💡 This represents your complete budget allocation"})})]})]})]})})]})]})}class W1{constructor(){this.insights=[],this.alerts=[],this.recommendations=[],this.userPreferences=this.loadUserPreferences(),this.spendingPatterns=this.loadSpendingPatterns()}loadUserPreferences(){try{return JSON.parse(localStorage.getItem("dashboardAI_preferences"))||{riskTolerance:"medium",savingsGoal:20,notificationLevel:"normal",preferredCategories:[]}}catch{return{riskTolerance:"medium",savingsGoal:20,notificationLevel:"normal",preferredCategories:[]}}}loadSpendingPatterns(){try{return JSON.parse(localStorage.getItem("dashboardAI_patterns"))||{}}catch{return{}}}saveUserPreferences(){localStorage.setItem("dashboardAI_preferences",JSON.stringify(this.userPreferences))}saveSpendingPatterns(){localStorage.setItem("dashboardAI_patterns",JSON.stringify(this.spendingPatterns))}generateFinancialInsights(s,r,o,c,d){const u=[];new Date().getMonth(),new Date().getFullYear();const m=this.calculateMonthlySpending(s),g=m.reduce((w,I)=>w+I.amount,0)/m.length;g>o*.8&&u.push({type:"warning",title:"⚠️ High Spending Alert",message:`You're spending ${(g/o*100).toFixed(0)}% of your budget monthly. Consider reviewing your expenses.`,confidence:85,actionable:!0,action:"View Category Details",priority:"high"});const v=this.analyzeCategorySpending(s)[0];if(v&&v.percentage>40&&u.push({type:"info",title:"📊 Spending Pattern Insight",message:`${v.percentage.toFixed(0)}% of your spending is on ${v.category}. Consider reviewing this category's transactions.`,confidence:92,actionable:!0,action:"View Category Details",priority:"medium"}),d.length>0){const w=d.reduce((J,T)=>J+T.total_price,0),I=w/(r+w)*100;I<20&&u.push({type:"opportunity",title:"🚀 Investment Opportunity",message:`Only ${I.toFixed(0)}% of your portfolio is invested. Consider increasing investments for better returns.`,confidence:78,actionable:!0,action:"Explore Investments",priority:"low"})}if(c.length>0){const w=c.filter(I=>I.saved/I.target<.3);w.length>0&&u.push({type:"motivation",title:"🎯 Goal Achievement Tip",message:`You have ${w.length} goals with low progress. Consider reviewing your goals and adjusting target amounts.`,confidence:88,actionable:!0,action:"Review Goal Strategy",priority:"medium"})}return this.insights=u,u}generatePredictions(s,r,o){const c={},u=s.filter(m=>{const g=new Date(m.date),j=new Date;return j.setMonth(j.getMonth()-3),g>=j}).reduce((m,g)=>m+g.amount,0)/12;return c.nextMonthSpending=u*4.33,c.nextMonthSpending>0&&(c.budgetRunway=Math.floor(r/c.nextMonthSpending)),c.categoryTrends=this.predictCategoryTrends(s),c.goalCompletionDates=this.predictGoalCompletion(s),c}generateSmartAlerts(s,r,o,c){const d=[],u=new Date,g=this.getCurrentMonthSpending(s)/o*100;g>90?d.push({type:"critical",title:"🚨 Budget Almost Exceeded",message:`You've used ${g.toFixed(0)}% of your monthly budget!`,timestamp:u,urgent:!0}):g>75&&d.push({type:"warning",title:"⚠️ Budget Alert",message:`You've used ${g.toFixed(0)}% of your monthly budget. Consider slowing down spending.`,timestamp:u,urgent:!1});const j=this.detectUnusualSpending(s);return j.length>0&&d.push({type:"info",title:"🔍 Unusual Spending Detected",message:`Detected ${j.length} transactions that seem unusual for your spending pattern.`,timestamp:u,urgent:!1,details:j}),c.forEach(v=>{if(v.deadline){const w=Math.ceil((new Date(v.deadline)-u)/864e5),I=v.saved/v.target*100;w<=30&&I<80&&d.push({type:"warning",title:"⏰ Goal Deadline Approaching",message:`"${v.name}" has ${w} days left but only ${I.toFixed(0)}% complete.`,timestamp:u,urgent:w<=7})}}),this.alerts=d,d}generateRecommendations(s,r,o,c,d){const u=[],g=this.analyzeCategorySpending(s).filter(v=>v.percentage>25);g.length>0&&u.push({type:"optimization",title:"💡 Budget Optimization",description:`Consider reducing spending in ${g[0].category} by 10% to free up $${(g[0].amount*.1).toFixed(2)} monthly.`,impact:"medium",effort:"low",category:"budgeting"}),d.length>0&&[...new Set(d.map(w=>w.name))].length<3&&u.push({type:"diversification",title:"🚀 Diversify Your Portfolio",description:"Consider adding different crypto assets to reduce risk and increase potential returns.",impact:"high",effort:"medium",category:"investing"});const j=this.calculateSavingsRate(s,r);return j<20&&u.push({type:"savings",title:"💰 Increase Savings Rate",description:`Current savings rate is ${j.toFixed(0)}%. Try to save at least 20% for better financial health.`,impact:"high",effort:"medium",category:"savings"}),this.recommendations=u,u}processNaturalLanguageQuery(s,r,o,c,d,u){var g,j;const m=s.toLowerCase().trim();if(m.includes("spent")||m.includes("spending")){if(m.includes("month")||m.includes("monthly")){const v=this.getCurrentMonthSpending(r);return{type:"spending",answer:`You've spent $${v.toFixed(2)} this month.`,data:{amount:v,period:"month"}}}if(m.includes("category")){const v=this.analyzeCategorySpending(r);return{type:"category_spending",answer:`Your top spending category is ${(g=v[0])==null?void 0:g.category} with $${(j=v[0])==null?void 0:j.amount.toFixed(2)}.`,data:v}}}if(m.includes("balance")||m.includes("money left"))return{type:"balance",answer:`Your current balance is $${o.toFixed(2)}.`,data:{balance:o}};if(m.includes("goal")||m.includes("target")){if(d.length===0)return{type:"goals",answer:"You haven't set any financial goals yet. Consider adding some!",data:{goalsCount:0}};const v=d.reduce((w,I)=>w+I.saved/I.target,0)/d.length*100;return{type:"goals",answer:`You have ${d.length} goals with an average progress of ${v.toFixed(0)}%.`,data:{goalsCount:d.length,avgProgress:v}}}if(m.includes("investment")||m.includes("crypto")||m.includes("portfolio")){if(u.length===0)return{type:"investments",answer:"You don't have any investments yet. Consider starting your crypto journey!",data:{investmentCount:0}};const v=u.reduce((w,I)=>w+I.total_price,0);return{type:"investments",answer:`Your crypto portfolio is worth $${v.toFixed(2)} across ${u.length} assets.`,data:{totalValue:v,assetCount:u.length}}}return{type:"unknown",answer:"I'm not sure about that. Try asking about your spending, balance, goals, or investments!",data:null}}calculateMonthlySpending(s){const r={};return s.forEach(o=>{const c=new Date(o.date),d=`${c.getFullYear()}-${c.getMonth()}`;r[d]||(r[d]=0),r[d]+=o.amount}),Object.entries(r).map(([o,c])=>({month:o,amount:c}))}getCurrentMonthSpending(s){const r=new Date,o=r.getMonth(),c=r.getFullYear();return s.filter(d=>{const u=new Date(d.date);return u.getMonth()===o&&u.getFullYear()===c}).reduce((d,u)=>d+u.amount,0)}analyzeCategorySpending(s){const r={},o=s.reduce((c,d)=>c+d.amount,0);return s.forEach(c=>{r[c.category]||(r[c.category]=0),r[c.category]+=c.amount}),Object.entries(r).map(([c,d])=>({category:c,amount:d,percentage:d/o*100})).sort((c,d)=>d.amount-c.amount)}detectUnusualSpending(s){const r=s.slice(-30),c=r.reduce((d,u)=>d+u.amount,0)/r.length*2;return s.filter(d=>d.amount>c).slice(-5)}calculateSavingsRate(s,r){const c=s.reduce((d,u)=>d+u.amount,0)+r;return c===0?0:r/c*100}predictCategoryTrends(s){const r={},o=new Date;return o.setMonth(o.getMonth()-3),s.forEach(c=>{const u=new Date(c.date)>=o;r[c.category]||(r[c.category]={recent:0,old:0}),u?r[c.category].recent+=c.amount:r[c.category].old+=c.amount}),Object.entries(r).map(([c,d])=>({category:c,trend:d.recent>d.old?"increasing":"decreasing",change:d.old>0?(d.recent-d.old)/d.old*100:0}))}predictGoalCompletion(s){const r=this.calculateMonthlySpending(s).reduce((o,c)=>o+c.amount,0)/12*.2;return{avgMonthlySavings:r,estimatedMonthsToGoal:o=>Math.ceil(o/r)}}}const Kr=new W1,H1=i=>i.sort((s,r)=>{const o={critical:3,warning:2,info:1};return(o[r.type]||0)-(o[s.type]||0)}),G1=({transactions:i,balance:s,budget:r,goals:o,investments:c,darkMode:d})=>{var Re;console.log("🔍 AIInsightsPanel rendering...",{transactions:i,balance:s,budget:r,darkMode:d});const u=ur(),[m,g]=y.useState([]),[j,v]=y.useState([]),[w,I]=y.useState([]),[J,T]=y.useState({}),[k,A]=y.useState(""),[Y,V]=y.useState(null),[$,K]=y.useState("insights"),[ne,fe]=y.useState(!1),ve=E=>{switch(E){case"Set Category Budget":case"Review Budget":case"Monitor Spending":u("/budget");break;case"View Category Details":case"Review Expenses":case"Review Categories":u("/transactions");break;case"Explore Investments":case"Invest Surplus":case"Explore Diversification":u("/investments");break;case"Set New Goal":case"Boost Savings":case"Optimize Savings":case"Review Goal Strategy":u("/goals");break;case"Analyze Trend":u("/transactions");break;default:console.log("Action not implemented:",E),E.toLowerCase().includes("budget")?u("/budget"):E.toLowerCase().includes("investment")?u("/investments"):E.toLowerCase().includes("goal")?u("/goals"):u("/transactions")}};y.useEffect(()=>{const E=async()=>{fe(!0);try{const Q=Kr.generateFinancialInsights(i,s,r,o,c);g(Q);const oe=H1(Kr.generateSmartAlerts(i,s,r,o));v(oe);const R=Kr.generateRecommendations(i,s,r,o,c);I(R);const M=Kr.generatePredictions(i,s,r);T(M)}catch(Q){console.error("Error generating AI insights:",Q)}finally{fe(!1)}};i.length>0&&E()},[i,s,r,o,c]);const be=()=>{if(k.trim()){const E=Kr.processNaturalLanguageQuery(k,i,s,r,o,c);V(E),A("")}},ye=E=>{E.key==="Enter"&&be()};return n.jsxs("div",{className:`ai-insights-panel ${d?"ai-dark":"ai-light"}`,children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"ai-header",children:[n.jsx("div",{style:{color:"white",fontSize:"1.4rem",fontWeight:"700",margin:"0 0 8px 0",display:"block",width:"100%",textAlign:"center",textShadow:"none",opacity:1},children:"AI Financial Assistant"}),n.jsx("div",{style:{margin:"0",fontSize:"15px",color:"rgba(255, 255, 255, 0.95)",display:"block",width:"100%",textAlign:"center",opacity:1},children:"Powered by intelligent insights and predictive analytics"})]}),n.jsxs("div",{className:"nl-query-section",children:[n.jsx("h5",{style:{color:d?"#e2e8f0":"#2d3748",marginBottom:"15px",fontWeight:"700"},children:"💬 Ask Your AI Assistant"}),n.jsxs("div",{className:"nl-query-container",children:[n.jsx("input",{type:"text",className:"nl-query-input",placeholder:"Ask me anything... 'How much did I spend this month?' or 'What's my investment performance?'",value:k,onChange:E=>A(E.target.value),onKeyPress:ye}),n.jsx("button",{className:"nl-query-btn",onClick:be,children:"🔍 Ask AI"})]}),Y&&n.jsxs("div",{className:"nl-response",children:[n.jsx("strong",{children:"🤖 AI Assistant:"})," ",Y.answer]})]}),n.jsxs("div",{className:"ai-tabs",children:[n.jsxs("button",{className:`ai-tab ${$==="insights"?"active":""}`,onClick:()=>K("insights"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"💡"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Insights"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[m.length," available"]})]})]}),n.jsxs("button",{className:`ai-tab ${$==="alerts"?"active":""}`,onClick:()=>K("alerts"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"🚨"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Alerts"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[j.length," notifications"]})]})]}),n.jsxs("button",{className:`ai-tab ${$==="recommendations"?"active":""}`,onClick:()=>K("recommendations"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"💡"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Tips"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[w.length," suggestions"]})]})]}),n.jsxs("button",{className:`ai-tab ${$==="predictions"?"active":""}`,onClick:()=>K("predictions"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"🔮"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Predictions"}),n.jsx("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:"AI forecasts"})]})]})]}),ne&&n.jsx("div",{className:"loading-spinner",children:n.jsx("div",{className:"spinner"})}),!ne&&n.jsxs(n.Fragment,{children:[$==="insights"&&n.jsx("div",{children:m.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"💡"}),n.jsx("h5",{children:"No insights yet"}),n.jsx("p",{children:"Add more transactions to get personalized insights!"})]}):m.map((E,Q)=>n.jsxs("div",{className:`insight-card ${E.type}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:E.title}),n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.jsxs("span",{className:"confidence-badge",children:[E.confidence,"% confident"]}),E.priority&&n.jsx("span",{className:`priority-badge priority-${E.priority}`,children:E.priority})]})]}),n.jsx("div",{className:"card-content",children:E.message}),E.actionable&&n.jsx("button",{className:"action-btn",onClick:()=>ve(E.action),children:E.action})]},Q))}),$==="alerts"&&n.jsx("div",{children:j.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"🚨"}),n.jsx("h5",{children:"No alerts"}),n.jsx("p",{children:"You're doing great! No urgent alerts at the moment."})]}):j.map((E,Q)=>n.jsxs("div",{className:`alert-card ${E.type}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:E.title}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:E.timestamp.toLocaleDateString()})]}),n.jsx("div",{className:"card-content",children:E.message})]},Q))}),$==="recommendations"&&n.jsx("div",{children:w.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"💡"}),n.jsx("h5",{children:"No recommendations yet"}),n.jsx("p",{children:"Keep using the app to get personalized recommendations!"})]}):w.map((E,Q)=>n.jsxs("div",{className:"recommendation-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:E.title}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("span",{className:`priority-badge priority-${E.impact==="high"?"high":E.impact==="medium"?"medium":"low"}`,children:[E.impact," impact"]}),n.jsxs("span",{className:`priority-badge priority-${E.effort==="high"?"high":E.effort==="medium"?"medium":"low"}`,children:[E.effort," effort"]})]})]}),n.jsx("div",{className:"card-content",children:E.description}),n.jsxs("small",{style:{color:d?"#a0aec0":"#718096"},children:["Category: ",E.category]})]},Q))}),$==="predictions"&&n.jsxs("div",{className:"predictions-grid",children:[n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Next Month Spending"}),n.jsxs("div",{className:"prediction-value",children:["$",((Re=J.nextMonthSpending)==null?void 0:Re.toFixed(2))||"0.00"]}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"Based on your recent patterns"})]}),n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Budget Runway"}),n.jsxs("div",{className:"prediction-value",children:[J.budgetRunway||0," months"]}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"At current spending rate"})]}),n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Savings Trend"}),n.jsx("div",{className:"prediction-value",style:{color:J.nextMonthSpending<r*.8?"#10b981":"#ef4444"},children:J.nextMonthSpending<r*.8?"📈 Good":"📉 Review"}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"Based on budget vs spending"})]})]})]})]})};Dc.register(Ym,qm,Vm,Km,Jm,Mm,Xm,Zm,Qm,ex);function Y1({transactions:i=[],balance:s=0,totalAmount:r,darkMode:o,formatCurrency:c,goals:d,setGoals:u,formatDate:m,goalsProgress:g,setGoalsProgress:j,totalBudgetAmount:v,parseDate:w,setItems:I,setBalances:J,setCashOnHand:T,setBankAccountBalance:k,setSavings:A,setTransactions:Y,setAmounts:V,addedInvestments:$,setAddedInvestments:K}){var It;const ne=ur();y.useState([]);const[fe,ve]=y.useState(0),[be,ye]=y.useState(null),[Re,E]=y.useState(""),[Q,oe]=y.useState("line"),[R,M]=y.useState("all"),[se,Ae]=y.useState(!0),[ke,je]=y.useState("all"),[U,ce]=y.useState(null),[pe,W]=y.useState(!1),[ae,re]=y.useState(!0),[le,Pe]=y.useState(null),[Ge,ee]=y.useState("cards"),[X,Ee]=y.useState(!0),[ze,Pt]=y.useState(!1),[Ie,dt]=y.useState(null),[Ze,ut]=y.useState("cards"),[lt,Fn]=y.useState(!0),[Je,Me]=y.useState(!1);$.reduce((b,L)=>b+parseFloat(L.total_price),0).toFixed(2);const pt=g.reduce((b,L)=>b+parseFloat(L.saved||0),0),mt=v+parseFloat(fe)+s+pt-r,yn=(b,L)=>{const F=new Date;return b.filter(we=>{const _e=new Date(we.date);switch(L){case"week":return F-_e<=7*24*60*60*1e3;case"month":return F-_e<=30*24*60*60*1e3;case"3months":return F-_e<=90*24*60*60*1e3;default:return!0}})},Ft=(b,L)=>L==="all"?b:b.filter(F=>F.category&&F.category.toLowerCase()===L.toLowerCase()),gn=i.sort((b,L)=>new Date(b.date)-new Date(L.date)),ct=Ft(yn(gn,R),ke),ft=ct.map(b=>({...b,date:m(w(b.date))})),rn=["all",...new Set(i.map(b=>b.category).filter(Boolean))];y.useEffect(()=>{console.log("Loaded from Goal.jsx component"),ge.get("http://localhost:5001/goals").then(b=>{const L=b.data.map(F=>({...F,progress:F.saved/F.target*100}));j(L)}).catch(b=>{console.error("Error fetching goals:",b)})},[]),y.useEffect(()=>{console.log("Loaded from Budget.jsx component"),ge.get("http://localhost:5001/budgets").then(b=>{const L=b.data.map(F=>({...F,date:w(F.date)}));I(L)}).catch(b=>{console.error("Error fetching budgets:",b)})},[]),y.useEffect(()=>{console.log("Loaded from Balance.jsx component"),ge.get("http://localhost:5001/balance").then(b=>{if(Array.isArray(b.data)){const L=b.data.map(F=>({...F,total:F.cash_on_hand+F.bank_account_balance+F.savings,id:F.id}));if(J(L),L.length>0){const F=L[0];T(F.cash_on_hand),k(F.bank_account_balance),A(F.savings)}}else if(b.data&&typeof b.data=="object"){const L={...b.data,total:b.data.cash_on_hand+b.data.bank_account_balance+b.data.savings};J([L]),T(L.cash_on_hand),k(L.bank_account_balance),A(L.savings)}else console.error("Fetched data is not an array or object:",b.data)}).catch(b=>{console.error("Error fetching balances:",b)})},[]),y.useEffect(()=>{console.log("TRANSACTIONS COMPONENT"),console.log("Fetching transactions..."),ge.get("http://127.0.0.1:5001/transactions").then(b=>{console.log("Fetched transactions:",b.data),Y(b.data)}).catch(b=>console.log("Error fetching transactions",b))},[]),y.useEffect(()=>{ge.get("http://localhost:5001/investments").then(b=>{console.log("Fetched from Investments:",b.data),K(b.data),At(b.data)}).catch(b=>console.log("Error fetching investments",b))},[]);const At=b=>{const L=b.reduce((F,q)=>F+q.total_price,0);ve(L)};y.useEffect(()=>{At($)},[$]);const Yt=b=>{if(!$||!$[b]){console.error("Investment not found");return}const L=$[b].id;ge.delete(`http://localhost:5001/investments/${L}`).then(F=>{if(F.status===204){const q=$.filter((we,_e)=>_e!==b);K(q)}else console.error("Failed to delete the investment")}).catch(F=>{console.error("Error:",F)})},G=b=>{ye(b),E($[b].amount)},Z=b=>{const L=[...$],F=L[b],q=parseFloat(Re);isNaN(q)?console.error("Invalid amount:",Re):(F.amount=q,F.pricePerUnit?F.total_price=q*F.pricePerUnit:console.error("pricePerUnit is not defined for investment:",F),ge.put(`http://localhost:5001/investments/${F.id}`,{amount:F.amount,totalPrice:F.total_price}).then(we=>{K(L),ye(null),E("")}).catch(we=>{console.error("Error updating investment:",we)}))},de=()=>{ye(null),E("")},Be=(()=>{const b=ft.map(q=>q.date),L=ft.map(q=>parseFloat(q.amount)),F={labels:b,datasets:[{label:"Transaction Amount ($)",data:L,borderColor:o?"rgba(255, 193, 7, 1)":"rgba(54, 162, 235, 1)",backgroundColor:o?"rgba(255, 193, 7, 0.2)":"rgba(54, 162, 235, 0.2)",borderWidth:3,pointRadius:6,pointHoverRadius:8,pointBackgroundColor:o?"rgba(255, 193, 7, 1)":"rgba(54, 162, 235, 1)",pointBorderColor:"#fff",pointBorderWidth:2,tension:.4,fill:Q==="line"}]};if(Q==="bar")F.datasets[0].backgroundColor=L.map((q,we)=>`hsla(${we*137.5%360}, 70%, 60%, 0.8)`),F.datasets[0].borderColor=L.map((q,we)=>`hsla(${we*137.5%360}, 70%, 50%, 1)`);else if(Q==="doughnut"){const q={};return ft.forEach(we=>{const _e=we.category||"Uncategorized";q[_e]=(q[_e]||0)+parseFloat(we.amount)}),{labels:Object.keys(q),datasets:[{label:"Amount by Category ($)",data:Object.values(q),backgroundColor:Object.keys(q).map((we,_e)=>`hsla(${_e*137.5%360}, 70%, 60%, 0.8)`),borderColor:Object.keys(q).map((we,_e)=>`hsla(${_e*137.5%360}, 70%, 50%, 1)`),borderWidth:2,hoverOffset:4}]}}return F})(),We=(()=>{const b={responsive:!0,maintainAspectRatio:!1,animation:{duration:se?1e3:0,easing:"easeInOutQuart"},interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!0,position:"top",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:20,font:{size:12,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:1,cornerRadius:8,displayColors:!0,callbacks:{title:function(L){return Q==="doughnut"?"Category Breakdown":`Date: ${L[0].label}`},label:function(L){if(Q==="doughnut"){const F=L.dataset.data.reduce((we,_e)=>we+_e,0),q=(L.raw/F*100).toFixed(1);return`${L.label}: $${L.raw.toFixed(2)} (${q}%)`}else{const F=ft[L.dataIndex];return[`Amount: $${L.raw}`,`Description: ${(F==null?void 0:F.description)||"No Description"}`,`Category: ${(F==null?void 0:F.category)||"Uncategorized"}`]}}}}},onClick:(L,F)=>{if(F.length>0){const q=F[0].index;if(Q!=="doughnut"){const we=ft[q];console.log("Clicked transaction:",we)}}}};return Q!=="doughnut"&&(b.scales={x:{title:{display:!0,text:"Date",color:o?"#fff":"#000",font:{size:14,weight:"bold"}},ticks:{color:o?"#fff":"#000",maxTicksLimit:10},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},y:{title:{display:!0,text:"Amount ($)",color:o?"#fff":"#000",font:{size:14,weight:"bold"}},ticks:{color:o?"#fff":"#000",callback:function(L){return"$"+L.toFixed(2)}},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}}),b})(),He={labels:["Budget","Balance","Goals Saved","Investments","X-penses"],datasets:[{label:"Financial Overview ($)",data:[v,s,pt,fe,r],backgroundColor:["rgba(40, 167, 69, 0.8)","rgba(23, 162, 184, 0.8)","rgba(255, 193, 7, 0.8)","rgba(108, 117, 125, 0.8)","rgba(220, 53, 69, 0.8)"],borderColor:["rgba(40, 167, 69, 1)","rgba(23, 162, 184, 1)","rgba(255, 193, 7, 1)","rgba(108, 117, 125, 1)","rgba(220, 53, 69, 1)"],borderWidth:2,hoverOffset:10}]},Ot={responsive:!0,maintainAspectRatio:!1,animation:{duration:ae?1200:0,easing:"easeInOutBounce"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:15,font:{size:11,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:8,callbacks:{label:function(b){const L=mt,F=L!==0?(b.raw/Math.abs(L)*100).toFixed(1):"0.0";return`${b.label}: $${b.raw.toFixed(2)} (${F}%)`}}}},onClick:(b,L)=>{if(L.length>0){const F=L[0].index;ce(["Budget","Balance","Goals Saved","Investments","X-penses"][F])}}},Nt=b=>({Budget:"#28a745",Balance:"#17a2b8","X-penses":"#dc3545","Goals (saved)":"#ffc107",Investments:"#6c757d","Overview Total":o?"#ffffff":"#000000"})[b]||(o?"#ffffff":"#000000"),an=b=>({Budget:"💰",Balance:"💳","X-penses":"💸","Goals (saved)":"🎯",Investments:"📈","Overview Total":"📊"})[b]||"📋",qt=(b,L)=>b>=100?"#28a745":b>=75?"#17a2b8":b>=50?"#ffc107":b>=25?"#fd7e14":"#dc3545",wn=(b,L)=>b>=100?"🎉":b>=75?"🔥":b>=50?"⭐":b>=25?"📈":"🚀",On=b=>b>=100?"Completed! 🎉":b>=75?"Almost there! 🔥":b>=50?"Halfway! ⭐":b>=25?"Good start! 📈":"Just started 🚀",Mn={labels:g.map(b=>b.name),datasets:[{label:"Goals Progress (%)",data:g.map(b=>b.saved/b.target*100),backgroundColor:g.map((b,L)=>{const F=b.saved/b.target*100;return qt(F)+"80"}),borderColor:g.map((b,L)=>{const F=b.saved/b.target*100;return qt(F)}),borderWidth:2,hoverOffset:8}]},In={responsive:!0,maintainAspectRatio:!1,animation:{duration:X?1500:0,easing:"easeInOutElastic"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:12,font:{size:10,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:8,callbacks:{label:function(b){const L=g[b.dataIndex];return[`Progress: ${b.raw.toFixed(1)}%`,`Saved: $${L.saved.toFixed(2)}`,`Target: $${L.target.toFixed(2)}`,`Remaining: $${(L.target-L.saved).toFixed(2)}`]}}}},onClick:(b,L)=>{if(L.length>0){const F=L[0].index,q=g[F];Pe((le==null?void 0:le.id)===q.id?null:q)}}},sn=(b,L)=>{const F={bitcoin:"#f7931a",btc:"#f7931a",ethereum:"#627eea",eth:"#627eea",usdc:"#2775ca",xrp:"#23292f",ripple:"#23292f",cardano:"#0033ad",ada:"#0033ad",solana:"#9945ff",sol:"#9945ff"},q=b.name.toLowerCase();for(const _e in F)if(q.includes(_e))return F[_e];const we=["#28a745","#17a2b8","#ffc107","#fd7e14","#dc3545","#6f42c1","#e83e8c","#20c997"];return we[L%we.length]},Vt=b=>{const L=b.name.toLowerCase(),F={bitcoin:"₿",btc:"₿",ethereum:"Ξ",eth:"Ξ",usdc:"💵",xrp:"🌊",ripple:"🌊",cardano:"🎴",ada:"🎴",solana:"☀️",sol:"☀️"};for(const q in F)if(L.includes(q))return F[q];return"🪙"},on=b=>Math.random()*20-10,Kt=b=>b>5?{label:"Strong Gain! 🚀",class:"success"}:b>0?{label:"Gaining 📈",class:"success"}:b>-5?{label:"Stable 📊",class:"warning"}:{label:"Down 📉",class:"danger"},Xn={labels:$.map(b=>b.name),datasets:[{label:"Investment Value ($)",data:$.map(b=>b.total_price),backgroundColor:$.map((b,L)=>sn(b,L)+"80"),borderColor:$.map((b,L)=>sn(b,L)),borderWidth:3,hoverOffset:12,hoverBorderWidth:4}]},jn={responsive:!0,maintainAspectRatio:!1,animation:{duration:lt?1800:0,easing:"easeInOutBack"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:15,font:{size:11,weight:"bold"},generateLabels:function(b){return Dc.defaults.plugins.legend.labels.generateLabels.call(this,b).map((q,we)=>{const _e=$[we];return q.text=`${Vt(_e)} ${q.text}`,q})}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:10,callbacks:{title:function(b){const L=$[b[0].dataIndex];return`${Vt(L)} ${L.name}`},label:function(b){var q;const L=$[b.dataIndex],F=on();return[`Value: $${b.raw.toFixed(2)}`,`Amount: ${L.amount}`,`Price per unit: $${((q=L.pricePerUnit)==null?void 0:q.toFixed(2))||"N/A"}`,`Performance: ${F.toFixed(2)}%`,`Status: ${Kt(F).label}`]}}}},onClick:(b,L)=>{if(L.length>0){const F=L[0].index,q=$[F];dt((Ie==null?void 0:Ie.id)===q.id?null:q)}}};return n.jsxs("div",{className:`container-fluid ${o?"dark-mode":"light-mode"}`,children:[n.jsx("style",{children:`
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
      `}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"col-12",children:[n.jsx("div",{className:"dashboard-header",children:n.jsx("h1",{children:"Main Dashboard"})}),n.jsx(G1,{transactions:i,balance:s,budget:v,goals:g,investments:$,darkMode:o}),n.jsxs("div",{className:"summary",children:[n.jsx("h5",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"Recent Transactions"}),n.jsx("br",{}),n.jsx("button",{onClick:()=>ne("/transactions"),className:`btn ${o?"btn-light":"btn-dark"} responsive`,children:" View All Transactions"})]}),n.jsx("br",{}),n.jsxs("div",{className:`charts border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"Spending Over Time Graph"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"X-PENSE Transactions"})})]}),n.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${Q==="line"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>oe("line"),title:"Line Chart",children:"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Q==="bar"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>oe("bar"),title:"Bar Chart",children:"📊"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Q==="doughnut"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>oe("doughnut"),title:"Doughnut Chart",children:"🍩"})]}),n.jsxs("select",{className:`form-select form-select-sm ${o?"bg-dark text-light":""}`,value:R,onChange:b=>M(b.target.value),style:{width:"auto"},children:[n.jsx("option",{value:"all",children:"All Time"}),n.jsx("option",{value:"week",children:"Last Week"}),n.jsx("option",{value:"month",children:"Last Month"}),n.jsx("option",{value:"3months",children:"Last 3 Months"})]}),n.jsx("select",{className:`form-select form-select-sm ${o?"bg-dark text-light":""}`,value:ke,onChange:b=>je(b.target.value),style:{width:"auto"},children:rn.map(b=>n.jsx("option",{value:b,children:b==="all"?"All Categories":b},b))}),n.jsx("button",{type:"button",className:`btn btn-sm ${se?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Ae(!se),title:se?"Disable Animations":"Enable Animations",children:se?"🎬":"⏸️"})]})]}),n.jsx("div",{style:{height:"400px",position:"relative"},children:ft.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"📊"}),n.jsx("h5",{className:"text-muted",children:"No Transactions Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start tracking your expenses to see spending patterns"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/transactions"),children:"➕ Add Your First Transaction"})]}):n.jsxs(n.Fragment,{children:[Q==="line"&&n.jsx(tx,{data:Be,options:We}),Q==="bar"&&n.jsx(nx,{data:Be,options:We}),Q==="doughnut"&&n.jsx(Ga,{data:Be,options:We})]})}),n.jsxs("div",{className:"mt-3 row",children:[n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Total Transactions: ",n.jsx("strong",{children:ct.length})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Total Amount: ",n.jsxs("strong",{children:["$",ct.reduce((b,L)=>b+parseFloat(L.amount),0).toFixed(2)]})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Average: ",n.jsxs("strong",{children:["$",ct.length>0?(ct.reduce((b,L)=>b+parseFloat(L.amount),0)/ct.length).toFixed(2):"0.00"]})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Time Range: ",n.jsx("strong",{children:R==="all"?"All Time":R.charAt(0).toUpperCase()+R.slice(1)})]})})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"🚀 Crypto Investments"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Portfolio Tracking Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${Ze==="cards"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ut("cards"),title:"Card View",children:"🎴"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ze==="table"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ut("table"),title:"Table View",children:"📋"})]}),n.jsx("button",{type:"button",className:`btn btn-sm ${Je?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Me(!Je),title:Je?"Hide Portfolio Chart":"Show Portfolio Chart",children:Je?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${lt?"btn-warning":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Fn(!lt),title:lt?"Disable Animations":"Enable Animations",children:lt?"🎬":"⏸️"})]})]}),Je&&$.length>0&&n.jsxs("div",{className:"mb-4",style:{height:"350px",position:"relative"},children:[n.jsx(Ga,{data:Xn,options:jn}),Ie&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${sn(Ie,0)}`},children:[n.jsxs("strong",{children:[Vt(Ie)," Selected: ",Ie.name]}),n.jsx("br",{}),n.jsxs("small",{children:["Value: $",Ie.total_price.toFixed(2)," • Amount: ",Ie.amount," • Price: $",((It=Ie.pricePerUnit)==null?void 0:It.toFixed(2))||"N/A"]})]})]}),$.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"🚀"}),n.jsx("h5",{className:"text-muted",children:"No Investments Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start building your crypto portfolio today"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/investments"),children:"➕ Add Your First Investment"})]}):n.jsxs(n.Fragment,{children:[Ze==="cards"&&n.jsx("div",{className:"row",children:$.map((b,L)=>{var Ye;const F=sn(b,L),q=on(),we=Kt(q),_e=(Ie==null?void 0:Ie.id)===b.id;return n.jsx("div",{className:"col-md-6 col-lg-4 mb-4",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:lt?"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)":"none",borderLeft:`5px solid ${F}`,transform:_e?"scale(1.08) rotate(-1deg)":"scale(1)",boxShadow:_e?`0 15px 40px ${F}50`:"0 5px 20px rgba(0,0,0,0.1)",background:_e?o?`linear-gradient(135deg, #2d3748 0%, ${F}25 100%)`:`linear-gradient(135deg, #f8f9fa 0%, ${F}20 100%)`:void 0},onClick:()=>dt(_e?null:b),onMouseEnter:_=>{lt&&!_e&&(_.currentTarget.style.transform="translateY(-10px) scale(1.03)",_.currentTarget.style.boxShadow=`0 10px 30px ${F}40`)},onMouseLeave:_=>{lt&&(_.currentTarget.style.transform=_e?"scale(1.08) rotate(-1deg)":"scale(1)",_.currentTarget.style.boxShadow=_e?`0 15px 40px ${F}50`:"0 5px 20px rgba(0,0,0,0.1)")},children:n.jsxs("div",{className:"card-body p-4",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[n.jsx("div",{className:"flex-grow-1",children:n.jsxs("h6",{className:"card-title mb-2 d-flex align-items-center",style:{color:F},children:[n.jsx("span",{className:"me-2",style:{fontSize:"2rem"},children:Vt(b)}),n.jsxs("div",{children:[n.jsx("div",{children:b.name}),n.jsx("small",{className:`badge bg-${we.class} mt-1`,children:we.label})]})]})}),n.jsx("div",{className:"text-end",children:n.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center",style:{width:"50px",height:"50px",backgroundColor:`${F}20`,border:`3px solid ${F}40`},children:n.jsx("span",{style:{fontSize:"24px"},children:Vt(b)})})})]}),n.jsxs("div",{className:"text-center mb-3",children:[n.jsx("h3",{className:"mb-1",style:{color:F},children:c(b.total_price)}),n.jsx("small",{className:"text-muted",children:"Portfolio Value"})]}),n.jsxs("div",{className:"row text-center mb-3",children:[n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Amount"}),n.jsx("div",{style:{color:F,fontWeight:"bold"},children:be===L?n.jsx("input",{type:"number",value:Re,onChange:_=>E(_.target.value),className:`form-control form-control-sm ${o?"bg-dark text-light":""}`,style:{borderColor:F}}):b.amount})]}),n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Price/Unit"}),n.jsxs("div",{style:{color:F,fontWeight:"bold"},children:["$",((Ye=b.pricePerUnit)==null?void 0:Ye.toFixed(2))||"N/A"]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[n.jsx("small",{className:"text-muted",children:"Performance"}),n.jsxs("small",{style:{color:q>0?"#28a745":"#dc3545"},children:[q>0?"+":"",q.toFixed(2),"%"]})]}),n.jsx("div",{className:"progress",style:{height:"6px",borderRadius:"10px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.abs(q)*5}%`,backgroundColor:q>0?"#28a745":"#dc3545",borderRadius:"10px",transition:lt?"width 1.5s ease-out":"none"}})})]}),n.jsx("div",{className:"d-flex gap-2",children:be===L?n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>Z(L),className:"btn btn-sm btn-success flex-fill",style:{borderRadius:"8px"},children:"💾 Save"}),n.jsx("button",{onClick:de,className:"btn btn-sm btn-secondary flex-fill",style:{borderRadius:"8px"},children:"❌ Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>G(L),className:"btn btn-sm flex-fill",style:{backgroundColor:`${F}20`,color:F,border:`1px solid ${F}40`,borderRadius:"8px"},children:"✏️ Edit"}),n.jsx("button",{onClick:()=>Yt(L),className:"btn btn-sm btn-outline-danger flex-fill",style:{borderRadius:"8px"},children:"🗑️ Remove"})]})}),_e&&n.jsxs("div",{className:"mt-3 p-3 rounded",style:{backgroundColor:`${F}15`,border:`1px solid ${F}40`,animation:lt?"fadeIn 0.3s ease-in":"none"},children:[n.jsx("h6",{style:{color:F},children:"📊 Investment Analytics"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Total Return"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:q>0?"#28a745":"#dc3545"},children:["$",(b.total_price*q/100).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Portfolio %"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:F},children:[(b.total_price/fe*100).toFixed(1),"%"]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Risk Level"}),n.jsx("br",{}),n.jsx("strong",{style:{color:F},children:Math.abs(q)>5?"High 🔥":Math.abs(q)>2?"Medium ⚡":"Low 🛡️"})]})]})]})]})})},L)})}),Ze==="table"&&n.jsx("div",{className:"table-responsive",children:n.jsxs("table",{className:`table table-hover ${o?"table-dark":"table-light"}`,style:{borderRadius:"10px",overflow:"hidden"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{background:o?"#495057":"#f8f9fa"},children:[n.jsx("th",{children:"Asset"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Price/Unit"}),n.jsx("th",{children:"Total Value"}),n.jsx("th",{children:"Performance"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:$.map((b,L)=>{var Ye;const F=sn(b,L),q=on(),we=Kt(q),_e=(Ie==null?void 0:Ie.id)===b.id;return n.jsxs("tr",{className:_e?"table-active":"",style:{borderLeft:`4px solid ${F}`,cursor:"pointer",transition:lt?"all 0.3s ease":"none",backgroundColor:_e?`${F}10`:void 0},onClick:()=>dt(_e?null:b),children:[n.jsx("td",{children:n.jsxs("div",{className:"d-flex align-items-center",children:[n.jsx("span",{style:{fontSize:"1.5rem",marginRight:"10px"},children:Vt(b)}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:F},children:b.name}),n.jsx("br",{}),n.jsx("small",{className:`badge bg-${we.class}`,children:we.label})]})]})}),n.jsx("td",{children:be===L?n.jsx("input",{type:"number",value:Re,onChange:_=>E(_.target.value),className:`form-control form-control-sm ${o?"bg-dark text-light":""}`,style:{borderColor:F,maxWidth:"100px"}}):n.jsx("strong",{style:{color:F},children:b.amount})}),n.jsxs("td",{style:{color:F},children:["$",((Ye=b.pricePerUnit)==null?void 0:Ye.toFixed(2))||"N/A"]}),n.jsx("td",{children:n.jsx("strong",{style:{color:F},children:c(b.total_price)})}),n.jsx("td",{children:n.jsx("div",{className:"d-flex align-items-center",children:n.jsxs("span",{style:{color:q>0?"#28a745":"#dc3545",marginRight:"8px"},children:[q>0?"📈":"📉",q.toFixed(2),"%"]})})}),n.jsx("td",{children:be===L?n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:_=>{_.stopPropagation(),Z(L)},className:"btn btn-sm btn-success",children:"💾"}),n.jsx("button",{onClick:_=>{_.stopPropagation(),de()},className:"btn btn-sm btn-secondary",children:"❌"})]}):n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:_=>{_.stopPropagation(),G(L)},className:"btn btn-sm",style:{backgroundColor:`${F}20`,color:F,border:`1px solid ${F}40`},children:"✏️"}),n.jsx("button",{onClick:_=>{_.stopPropagation(),Yt(L)},className:"btn btn-sm btn-outline-danger",children:"🗑️"})]})})]},L)})})]})}),n.jsxs("div",{className:`mt-4 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:[n.jsx("h6",{className:"mb-3",style:{fontSize:"1.2rem",fontWeight:"700",color:o?"#e2e8f0":"#2d3748"},children:"💼 Portfolio Summary"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"🚀 Total Assets"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745",fontSize:"1.5rem"},children:$.length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"💰 Portfolio Value"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#17a2b8",fontSize:"1.2rem"},children:c(fe)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"📊 Avg. Performance"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#ffc107",fontSize:"1.2rem"},children:$.length>0?($.reduce((b,L)=>b+on(),0)/$.length).toFixed(2)+"%":"0.0%"})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"🎯 Diversity Score"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#dc3545",fontSize:"1.2rem"},children:[$.length>0?Math.min($.length*20,100):0,"%"]})]})]})]})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"🎯 Goals Progress"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Goal Tracking Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${Ge==="cards"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ee("cards"),title:"Card View",children:"🎴"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ge==="list"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ee("list"),title:"List View",children:"📋"})]}),n.jsx("button",{type:"button",className:`btn btn-sm ${ze?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Pt(!ze),title:ze?"Hide Goals Chart":"Show Goals Chart",children:ze?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${X?"btn-warning":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Ee(!X),title:X?"Disable Animations":"Enable Animations",children:X?"🎬":"⏸️"})]})]}),ze&&g.length>0&&n.jsxs("div",{className:"mb-4",style:{height:"300px",position:"relative"},children:[n.jsx(Ga,{data:Mn,options:In}),le&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${qt(le.saved/le.target*100)}`},children:[n.jsxs("strong",{children:[wn(le.saved/le.target*100)," Selected: ",le.name]}),n.jsx("br",{}),n.jsxs("small",{children:["Progress: ",(le.saved/le.target*100).toFixed(1),"% • Saved: $",le.saved.toFixed(2)," • Target: $",le.target.toFixed(2)]})]})]}),g.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"🎯"}),n.jsx("h5",{className:"text-muted",children:"No Goals Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start setting financial goals to track your progress"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/goals"),children:"➕ Add Your First Goal"})]}):n.jsxs(n.Fragment,{children:[Ge==="cards"&&n.jsx("div",{className:"row",children:g.map((b,L)=>{const F=b.saved/b.target*100,q=qt(F),we=(le==null?void 0:le.id)===b.id;return n.jsx("div",{className:"col-md-6 col-lg-4 mb-4",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:X?"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)":"none",borderLeft:`5px solid ${q}`,transform:we?"scale(1.08) rotate(1deg)":"scale(1)",boxShadow:we?`0 12px 35px ${q}40`:"0 4px 15px rgba(0,0,0,0.1)",background:we?o?`linear-gradient(135deg, #2d3748 0%, ${q}20 100%)`:`linear-gradient(135deg, #f8f9fa 0%, ${q}15 100%)`:void 0},onClick:()=>Pe(we?null:b),onMouseEnter:_e=>{X&&!we&&(_e.currentTarget.style.transform="translateY(-8px) scale(1.02)",_e.currentTarget.style.boxShadow=`0 8px 25px ${q}30`)},onMouseLeave:_e=>{X&&(_e.currentTarget.style.transform=we?"scale(1.08) rotate(1deg)":"scale(1)",_e.currentTarget.style.boxShadow=we?`0 12px 35px ${q}40`:"0 4px 15px rgba(0,0,0,0.1)")},children:n.jsxs("div",{className:"card-body p-4",children:[n.jsx("div",{className:"d-flex justify-content-between align-items-start mb-3",children:n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("h6",{className:"card-title mb-1 d-flex align-items-center",style:{color:q},children:[n.jsx("span",{className:"me-2",style:{fontSize:"1.5rem"},children:wn(F,b.category)}),b.name]}),n.jsx("small",{className:`badge ${F>=100?"bg-success":F>=50?"bg-warning":"bg-danger"}`,children:On(F)})]})}),n.jsx("div",{className:"d-flex justify-content-center mb-3",children:n.jsxs("div",{style:{width:100,height:100,position:"relative"},children:[n.jsx(Bc,{value:F,strokeWidth:8,styles:zc({textColor:o?"white":"black",pathColor:q,trailColor:o?"#4a5568":"#e2e8f0",pathTransitionDuration:X?1.5:0,pathTransition:X?"stroke-dashoffset 1.5s ease-in-out":"none"})}),n.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"14px",fontWeight:"bold",color:q},children:[F.toFixed(1),"%"]})]})}),n.jsx("div",{className:"text-center",children:n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Saved"}),n.jsxs("div",{style:{color:q,fontWeight:"bold"},children:["$",b.saved.toFixed(2)]})]}),n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Target"}),n.jsxs("div",{style:{color:q,fontWeight:"bold"},children:["$",b.target.toFixed(2)]})]})]})}),n.jsxs("div",{className:"mt-3",children:[n.jsx("div",{className:"progress",style:{height:"8px",borderRadius:"10px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(F,100)}%`,backgroundColor:q,borderRadius:"10px",transition:X?"width 2s ease-out":"none",background:`linear-gradient(90deg, ${q} 0%, ${q}80 100%)`}})}),n.jsxs("div",{className:"d-flex justify-content-between mt-1",children:[n.jsxs("small",{style:{color:q},children:["$",(b.target-b.saved).toFixed(2)," remaining"]}),n.jsx("small",{style:{color:q},children:F>=100?"🎉 Complete!":`${(100-F).toFixed(1)}% to go`})]})]}),we&&n.jsxs("div",{className:"mt-3 p-3 rounded",style:{backgroundColor:`${q}15`,border:`1px solid ${q}40`,animation:X?"fadeIn 0.3s ease-in":"none"},children:[n.jsx("h6",{style:{color:q},children:"📊 Goal Analytics"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Monthly Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:q},children:["$",((b.target-b.saved)/12).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Weekly Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:q},children:["$",((b.target-b.saved)/52).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Daily Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:q},children:["$",((b.target-b.saved)/365).toFixed(2)]})]})]})]})]})})},L)})}),Ge==="list"&&n.jsx("div",{className:"space-y-3",children:g.map((b,L)=>{const F=b.saved/b.target*100,q=qt(F),we=(le==null?void 0:le.id)===b.id;return n.jsx("div",{className:`p-4 rounded-lg border ${o?"border-secondary":"border-light"} mb-3`,style:{backgroundColor:we?`${q}10`:"transparent",borderLeft:`5px solid ${q}`,cursor:"pointer",transition:X?"all 0.3s ease":"none"},onClick:()=>Pe(we?null:b),children:n.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[n.jsxs("div",{className:"d-flex align-items-center flex-grow-1",children:[n.jsx("span",{style:{fontSize:"2rem",marginRight:"1rem"},children:wn(F,b.category)}),n.jsxs("div",{className:"flex-grow-1",children:[n.jsx("h6",{className:"mb-1",style:{color:q},children:b.name}),n.jsxs("div",{className:"d-flex align-items-center",children:[n.jsx("div",{className:"progress flex-grow-1 me-3",style:{height:"8px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(F,100)}%`,backgroundColor:q,transition:X?"width 1.5s ease-out":"none"}})}),n.jsxs("small",{style:{color:q,minWidth:"60px"},children:[F.toFixed(1),"%"]})]})]})]}),n.jsxs("div",{className:"text-end ms-3",children:[n.jsxs("div",{style:{color:q,fontWeight:"bold"},children:["$",b.saved.toFixed(2)," / $",b.target.toFixed(2)]}),n.jsxs("small",{className:"text-muted",children:["$",(b.target-b.saved).toFixed(2)," remaining"]})]})]})},L)})}),n.jsxs("div",{className:`mt-4 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:[n.jsx("h6",{className:"mb-3",style:{fontSize:"1.2rem",fontWeight:"700",color:o?"#e2e8f0":"#2d3748"},children:"📈 Goals Summary"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"🎯 Total Goals"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745",fontSize:"1.5rem"},children:g.length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"✅ Completed"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#17a2b8",fontSize:"1.5rem"},children:g.filter(b=>b.saved/b.target*100>=100).length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"💰 Total Saved"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#ffc107",fontSize:"1.2rem"},children:["$",pt.toFixed(2)]})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"🎪 Total Target"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#dc3545",fontSize:"1.2rem"},children:["$",g.reduce((b,L)=>b+L.target,0).toFixed(2)]})]})]})]})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"💼 Financial Overview"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Summary Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${pe?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>W(!pe),title:pe?"Hide Chart":"Show Chart",children:pe?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${ae?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>re(!ae),title:ae?"Disable Animations":"Enable Animations",children:ae?"🎬":"⏸️"})]})]}),pe&&n.jsxs("div",{className:"mb-4",style:{height:"300px",position:"relative"},children:[n.jsx(Ga,{data:He,options:Ot}),U&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${Nt(U)}`},children:[n.jsxs("strong",{children:[an(U)," Selected: ",U]}),n.jsx("br",{}),n.jsx("small",{children:"Click on different segments to explore each category!"})]})]}),n.jsx("div",{className:"row",children:[{name:"Budget",value:v,trend:"up"},{name:"Balance",value:s,trend:"stable"},{name:"X-penses",value:r,trend:"down"},{name:"Goals (saved)",value:pt,trend:"up"},{name:"Investments",value:fe,trend:"up"},{name:"Overview Total",value:mt,trend:mt>0?"up":"down"}].map((b,L)=>n.jsx("div",{className:"col-md-6 col-lg-4 mb-3",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:ae?"all 0.3s ease":"none",borderLeft:`4px solid ${Nt(b.name)}`,transform:U===b.name?"scale(1.05)":"scale(1)",boxShadow:U===b.name?"0 8px 25px rgba(0,123,255,0.3)":"0 2px 10px rgba(0,0,0,0.1)"},onClick:()=>ce(U===b.name?null:b.name),onMouseEnter:F=>{ae&&(F.currentTarget.style.transform="translateY(-2px)")},onMouseLeave:F=>{ae&&(F.currentTarget.style.transform=U===b.name?"scale(1.05)":"scale(1)")},children:n.jsxs("div",{className:"card-body p-3",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("h6",{className:"card-title mb-1",style:{color:Nt(b.name)},children:[an(b.name)," ",b.name]}),n.jsx("h4",{className:"mb-1",style:{color:Nt(b.name)},children:c(b.value)}),n.jsx("small",{className:`text-${b.trend==="up"?"success":b.trend==="down"?"danger":"muted"}`,children:b.trend==="up"?"📈 Positive":b.trend==="down"?"📉 Negative":"➡️ Stable"})]}),n.jsx("div",{className:"text-end",children:n.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",backgroundColor:`${Nt(b.name)}20`,border:`2px solid ${Nt(b.name)}30`},children:n.jsx("span",{style:{fontSize:"20px"},children:an(b.name)})})})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"progress",style:{height:"4px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(Math.abs(b.value)/Math.max(v,s,r,fe,pt)*100,100)}%`,backgroundColor:Nt(b.name),transition:ae?"width 1s ease":"none"}})})}),U===b.name&&n.jsx("div",{className:"mt-2 p-2 rounded",style:{backgroundColor:`${Nt(b.name)}10`},children:n.jsxs("small",{children:[n.jsx("strong",{children:"Details:"}),n.jsx("br",{}),b.name==="Budget"&&"Total budget allocated across all categories",b.name==="Balance"&&"Current available balance in accounts",b.name==="X-penses"&&"Total expenses recorded in transactions",b.name==="Goals (saved)"&&"Amount saved towards financial goals",b.name==="Investments"&&"Total value of crypto investments",b.name==="Overview Total"&&"Net financial position calculation"]})})]})})},L))}),n.jsx("div",{className:`mt-3 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"💰 Total Assets"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745"},children:c(v+s+pt+fe)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"💸 Total Spent"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#dc3545"},children:c(r)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"📊 Net Worth"}),n.jsx("br",{}),n.jsx("span",{style:{color:mt>=0?"#28a745":"#dc3545"},children:c(mt)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"🎯 Savings Rate"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#ffc107"},children:[v>0?(pt/v*100).toFixed(1):"0.0","%"]})]})]})})]})]})})]})}const q1=({darkMode:i,transactions:s,setTransactions:r,totalAmount:o,setTotalAmount:c,editIndex:d,setEditIndex:u,editTransaction:m,setEditTransaction:g,formatCurrency:j,reminderDate:v,setSuccessMessage:w,successMessage:I,parseDate:J})=>{const[T,k]=y.useState(!1),[A,Y]=y.useState(null),[V,$]=y.useState(""),[K,ne]=y.useState("date"),[fe,ve]=y.useState("desc"),[be,ye]=y.useState(""),[Re,E]=y.useState(null);y.useEffect(()=>{console.log("TRANSACTIONS COMPONENT"),console.log("Fetching transactions..."),k(!0),ge.get("http://127.0.0.1:5001/transactions").then(W=>{console.log("Fetched transactions:",W.data),r(W.data)}).catch(W=>console.log("Error fetching transactions",W)).finally(()=>k(!1))},[]),y.useEffect(()=>{const W=s.reduce((ae,re)=>ae+parseFloat(re.amount),0);c(W)},[s]);const Q=W=>new Date(W).toISOString().split("T")[0],oe=W=>{if(!W)return"";const ae=new Date(W),re=String(ae.getMonth()+1).padStart(2,"0"),le=String(ae.getDate()).padStart(2,"0"),Pe=ae.getFullYear();return`${re}-${le}-${Pe}`},R=W=>{const ae=s[W];k(!0),ge.delete(`http://127.0.0.1:5001/transactions/${ae.id}`).then(()=>{const re=s.filter((le,Pe)=>Pe!==W);r(re),E(W),setTimeout(()=>E(null),500),w("🗑️ Transaction deleted successfully!"),setTimeout(()=>w(""),3e3)}).catch(re=>console.error("Error deleting transaction:",re)).finally(()=>{k(!1),Y(null)})},M=W=>{Y(W)},se=W=>{const{name:ae,value:re}=W.target;g({...m,[ae]:re||""})},Ae=async W=>{let ae;try{ae=Q(m.date)}catch{console.error("Invalid date format:",m.date);return}const re={...m,date:ae};k(!0);try{await ge.put(`http://127.0.0.1:5001/transactions/${s[W].id}`,re);const le=s.map((Pe,Ge)=>Ge===W?{...Pe,...re}:Pe);r(le),u(null),g({category:"",date:"",description:"",amount:""}),w("✅ Transaction updated successfully!"),setTimeout(()=>w(""),3e3)}catch(le){console.error("Error updating transaction:",le),w("❌ Failed to update transaction. Please try again."),setTimeout(()=>w(""),3e3)}finally{k(!1)}},ke=(W,ae,re)=>{const le=new Date,Pe=new Date(ae)-le;Pe>0?(setTimeout(()=>{alert(`🔔 Reminder: You need to make a payment of ${re} for ${W.description} on ${W.date}`)},Pe),w(`⏰ Payment Reminder set for ${W.description} on ${ae}`),setTimeout(()=>w(""),5e3)):alert("⚠️ Reminder date must be in the future.")},je=W=>{const ae=prompt("📅 Enter the reminder date (MM-DD-YYYY):"),re=prompt("💰 Enter the amount that needs to be paid:");ae&&re&&ke(W,ae,re)},U=()=>{let W=s.filter(ae=>{const re=ae.description.toLowerCase().includes(V.toLowerCase())||ae.category.toLowerCase().includes(V.toLowerCase()),le=be===""||ae.category===be;return re&&le});return W.sort((ae,re)=>{let le=ae[K],Pe=re[K];return K==="amount"?(le=parseFloat(le),Pe=parseFloat(Pe)):K==="date"&&(le=new Date(le),Pe=new Date(Pe)),fe==="asc"?le>Pe?1:-1:le<Pe?1:-1}),W},ce=()=>[...new Set(s.map(W=>W.category))],pe=W=>({Cable:"📺","Child Support":"👶",Clothes:"👔",Debt:"💳",Entertainment:"🎬",Food:"🍕",Housing:"🏠",Insurance:"🛡️","Medical & Healthcare":"🏥",Mortgage:"🏘️","Personal Care":"💄",Pets:"🐕",Restaurants:"🍽️","Savings & Investments":"💰",Shopping:"🛍️",Transportation:"🚗",Utilities:"⚡"})[W]||"📄";return n.jsxs("div",{className:"transactions-container",children:[n.jsx("style",{jsx:!0,children:`
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
                    background: ${i?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
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
                    color: ${i?"#e2e8f0":"#2d3748"};
                    font-size: 0.9rem;
                }

                .control-input {
                    padding: 12px;
                    border: 2px solid ${i?"#4a5568":"#e2e8f0"};
                    border-radius: 8px;
                    background: ${i?"#2d3748":"#ffffff"};
                    color: ${i?"#e2e8f0":"#2d3748"};
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
                    background: ${i?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
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
                    background: ${i?"#2d3748":"#ffffff"};
                }

                .enhanced-table th {
                    background: ${i?"#4a5568":"#667eea"};
                    color: white;
                    padding: 18px 15px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 1rem;
                    border-bottom: 3px solid ${i?"#2d3748":"#5a67d8"};
                }

                .enhanced-table td {
                    padding: 15px;
                    border-bottom: 1px solid ${i?"#4a5568":"#e2e8f0"};
                    color: ${i?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                }

                .table-row {
                    transition: all 0.3s ease;
                }

                .table-row:hover {
                    background: ${i?"#4a5568":"#f7fafc"};
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
                    color: ${i?"#68d391":"#38a169"};
                }

                .total-row {
                    background: ${i?"#4a5568":"#667eea"};
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
                    background: ${i?"#2d3748":"#ffffff"};
                    color: ${i?"#e2e8f0":"#2d3748"};
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
                        background: ${i?"#2d3748":"#ffffff"};
                        border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
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
                        color: ${i?"#e2e8f0":"#2d3748"};
                        margin: 0;
                        flex: 1;
                        min-width: 200px;
                    }

                    .card-amount {
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: ${i?"#68d391":"#38a169"};
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
                        color: ${i?"#a0aec0":"#4a5568"};
                        font-size: 0.9rem;
                    }

                    .card-value {
                        color: ${i?"#e2e8f0":"#2d3748"};
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
                        background: ${i?"#4a5568":"#667eea"};
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
            `}),n.jsxs("div",{className:"transactions-header",children:[n.jsx("h5",{children:"💼 Transaction History"}),n.jsx("p",{className:"transactions-subtitle",children:"Track your financial journey with style"})]}),I&&n.jsx("div",{className:"success-alert",children:I}),n.jsxs("div",{className:"controls-section",children:[n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"🔍 Search Transactions"}),n.jsx("input",{type:"text",className:"control-input",placeholder:"Search by description or category...",value:V,onChange:W=>$(W.target.value)})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"📂 Filter by Category"}),n.jsxs("select",{className:"control-input",value:be,onChange:W=>ye(W.target.value),children:[n.jsx("option",{value:"",children:"All Categories"}),ce().map(W=>n.jsxs("option",{value:W,children:[pe(W)," ",W]},W))]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"🔄 Sort By"}),n.jsxs("select",{className:"control-input",value:K,onChange:W=>ne(W.target.value),children:[n.jsx("option",{value:"date",children:"📅 Date"}),n.jsx("option",{value:"amount",children:"💰 Amount"}),n.jsx("option",{value:"category",children:"📂 Category"}),n.jsx("option",{value:"description",children:"📝 Description"})]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"⬆️⬇️ Order"}),n.jsxs("select",{className:"control-input",value:fe,onChange:W=>ve(W.target.value),children:[n.jsx("option",{value:"desc",children:"Descending"}),n.jsx("option",{value:"asc",children:"Ascending"})]})]})]}),n.jsx("div",{className:"table-container",children:T?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading transactions..."})]}):s.length===0?n.jsxs("div",{className:"no-transactions",children:["📊 No Transactions Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start tracking your expenses by adding your first transaction."})]}):n.jsx("div",{className:"table-responsive",children:n.jsxs("table",{className:"enhanced-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"📝 Description"}),n.jsx("th",{children:"📂 Category"}),n.jsx("th",{children:"📅 Date"}),n.jsx("th",{children:"💰 Amount"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsxs("tbody",{children:[U().map((W,ae)=>{const re=s.findIndex(le=>le.id===W.id);return n.jsx("tr",{className:`table-row ${Re===re?"animate-delete":""}`,children:d===re?n.jsxs(n.Fragment,{children:[n.jsx("td",{children:n.jsx("input",{type:"text",name:"description",value:m.description,onChange:se,className:"edit-input",placeholder:"Enter description..."})}),n.jsx("td",{children:n.jsx("input",{type:"text",name:"category",value:m.category,onChange:se,className:"edit-input",placeholder:"Enter category..."})}),n.jsx("td",{children:n.jsx("input",{type:"date",name:"date",value:m.date,onChange:se,className:"edit-input"})}),n.jsx("td",{children:n.jsx("input",{type:"number",name:"amount",value:m.amount,onChange:se,className:"edit-input",step:"0.01",min:"0",placeholder:"0.00"})}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>Ae(re),className:"btn-modern btn-save",disabled:T,children:"✅ Save"}),n.jsx("button",{onClick:()=>u(null),className:"btn-modern btn-cancel",children:"❌ Cancel"})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("td",{"data-label":"Description",children:W.description||"No Description"}),n.jsx("td",{"data-label":"Category",children:n.jsxs("div",{className:"category-cell",children:[n.jsx("span",{children:pe(W.category)}),n.jsx("span",{children:W.category})]})}),n.jsx("td",{"data-label":"Date",children:oe(J(W.date))}),n.jsx("td",{"data-label":"Amount",className:"amount-cell",children:j(W.amount)}),n.jsx("td",{"data-label":"Actions",children:A===re?n.jsxs("div",{className:"delete-confirm",children:[n.jsx("div",{className:"confirm-text",children:"⚠️ Confirm deletion?"}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>R(re),className:"btn-modern btn-delete",disabled:T,children:"🗑️ Yes, Delete"}),n.jsx("button",{onClick:()=>Y(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>{u(re),g({...W,date:Q(W.date)})},className:"btn-modern btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>M(re),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>je(W),className:"btn-modern btn-reminder",children:"⏰ Remind"})]})})]})},W.id||ae)}),n.jsxs("tr",{className:"total-row",children:[n.jsx("td",{colSpan:"4",children:n.jsx("strong",{children:"💰 Total Expenses:"})}),n.jsx("td",{className:"amount-cell",children:n.jsx("strong",{children:j(o)})})]})]})]})})}),n.jsx("div",{className:"mobile-cards",children:T?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading transactions..."})]}):s.length===0?n.jsxs("div",{className:"no-transactions",children:["📊 No Transactions Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start tracking your expenses by adding your first transaction."})]}):n.jsxs(n.Fragment,{children:[U().map((W,ae)=>{const re=s.findIndex(le=>le.id===W.id);return n.jsx("div",{className:`transaction-card ${Re===re?"animate-delete":""}`,children:d===re?n.jsxs("div",{className:"edit-form",children:[n.jsx("input",{type:"text",name:"description",value:m.description,onChange:se,className:"edit-input",placeholder:"Enter description..."}),n.jsx("input",{type:"text",name:"category",value:m.category,onChange:se,className:"edit-input",placeholder:"Enter category..."}),n.jsx("input",{type:"date",name:"date",value:m.date,onChange:se,className:"edit-input"}),n.jsx("input",{type:"number",name:"amount",value:m.amount,onChange:se,className:"edit-input",step:"0.01",min:"0",placeholder:"0.00"}),n.jsxs("div",{className:"edit-actions",children:[n.jsx("button",{onClick:()=>Ae(re),className:"btn-modern btn-save",disabled:T,children:"✅ Save"}),n.jsx("button",{onClick:()=>u(null),className:"btn-modern btn-cancel",children:"❌ Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:W.description||"No Description"}),n.jsx("div",{className:"card-amount",children:j(W.amount)})]}),n.jsxs("div",{className:"card-details",children:[n.jsx("span",{className:"card-label",children:"📂 Category:"}),n.jsxs("div",{className:"card-value card-category",children:[n.jsx("span",{children:pe(W.category)}),n.jsx("span",{children:W.category})]}),n.jsx("span",{className:"card-label",children:"📅 Date:"}),n.jsx("span",{className:"card-value",children:oe(J(W.date))})]}),n.jsx("div",{className:"card-actions",children:A===re?n.jsxs("div",{className:"delete-confirm-card",children:[n.jsx("div",{className:"confirm-text",children:"⚠️ Confirm deletion?"}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>R(re),className:"btn-modern btn-delete",disabled:T,children:"🗑️ Yes, Delete"}),n.jsx("button",{onClick:()=>Y(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>{u(re),g({...W,date:Q(W.date)})},className:"btn-modern btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>M(re),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>je(W),className:"btn-modern btn-reminder",children:"⏰ Remind"})]})})]})},W.id||ae)}),n.jsxs("div",{className:"total-card",children:[n.jsx("div",{className:"total-label",children:"💰 Total Expenses:"}),n.jsx("div",{className:"total-amount",children:j(o)})]})]})})]})},V1=({newGoalName:i,setNewGoalName:s,newGoalAmount:r,setNewGoalAmount:o,goals:c,setGoals:d,inputAmounts:u,setInputAmounts:m,validated:g,setValidated:j,editingGoalId:v,setEditingGoalId:w,editedGoalName:I,setEditedGoalName:J,formatCurrency:T,darkMode:k})=>{const[A,Y]=y.useState(!1),[V,$]=y.useState(""),[K,ne]=y.useState(null),[fe,ve]=y.useState(null),[be,ye]=y.useState({});y.useEffect(()=>{console.log("GOALS COMPONENT"),console.log("Fetching goals from backend"),Y(!0),fetch("http://localhost:5001/goals").then(U=>U.json()).then(U=>{console.log("Retrieved goals from backend:",U),d(U)}).catch(U=>console.error("Error fetching goals:",U)).finally(()=>Y(!1))},[]);const Re=U=>{if(U.preventDefault(),j(!0),i&&r){Y(!0);const ce={name:i,target:Number(r),saved:0};console.log("Adding new goal:",ce),fetch("http://localhost:5001/goals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ce)}).then(pe=>pe.json()).then(pe=>{d([...c,pe]),s(""),o(""),j(!1),$("🎯 Goal added successfully!"),setTimeout(()=>$(""),3e3)}).catch(pe=>{console.error("Error adding goal:",pe),$("❌ Failed to add goal. Please try again."),setTimeout(()=>$(""),3e3)}).finally(()=>Y(!1))}},E=U=>{const ce=Number(u[U]||0);if(ce<=0){$("⚠️ Please enter a valid amount greater than 0"),setTimeout(()=>$(""),3e3);return}m({...u,[U]:""}),Y(!0);const pe=c.map(ae=>{if(ae.id===U){const re=ae.saved+ce,le=ae.saved>=ae.target,Pe=re>=ae.target;return!le&&Pe&&(ve(U),setTimeout(()=>ve(null),3e3),$("🎉 Congratulations! Goal completed!"),setTimeout(()=>$(""),5e3)),{...ae,saved:re}}return ae});d(pe),ye({...be,[U]:!0}),setTimeout(()=>{ye({...be,[U]:!1})},1e3);const W=pe.find(ae=>ae.id===U);fetch(`http://localhost:5001/goals/${U}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}).then(()=>{$("💰 Amount added successfully!"),setTimeout(()=>$(""),3e3)}).catch(ae=>{console.error("Error updating goal:",ae),$("❌ Failed to update goal. Please try again."),setTimeout(()=>$(""),3e3)}).finally(()=>Y(!1))},Q=U=>{m({...u,[U]:""}),Y(!0);const ce=c.map(W=>W.id===U?{...W,saved:0}:W);d(ce);const pe=ce.find(W=>W.id===U);fetch(`http://localhost:5001/goals/${U}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(pe)}).then(()=>{$("🔄 Goal progress reset successfully!"),setTimeout(()=>$(""),3e3)}).catch(W=>{console.error("Error resetting goal amount:",W),$("❌ Failed to reset goal. Please try again."),setTimeout(()=>$(""),3e3)}).finally(()=>Y(!1))},oe=U=>{Y(!0);const ce=c.filter(pe=>pe.id!==U);d(ce),fetch(`http://localhost:5001/goals/${U}`,{method:"DELETE"}).then(()=>{$("🗑️ Goal deleted successfully!"),setTimeout(()=>$(""),3e3)}).catch(pe=>{console.error("Error deleting goal:",pe),$("❌ Failed to delete goal. Please try again."),setTimeout(()=>$(""),3e3)}).finally(()=>{Y(!1),ne(null)})},R=U=>{ne(U)},M=(U,ce)=>{w(U),J(ce)},se=U=>{if(!I.trim()){$("⚠️ Goal name cannot be empty"),setTimeout(()=>$(""),3e3);return}Y(!0);const ce=c.map(pe=>pe.id===U?{...pe,name:I}:pe);d(ce),fetch(`http://localhost:5001/goals/${U}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I})}).then(pe=>{if(!pe.ok)throw new Error("Network response was not ok");return pe.json()}).then(pe=>{console.log("Updated goal:",pe),w(null),J(""),$("✅ Goal updated successfully!"),setTimeout(()=>$(""),3e3)}).catch(pe=>{console.error("Error updating goal:",pe),$("❌ Failed to update goal. Please try again."),setTimeout(()=>$(""),3e3)}).finally(()=>Y(!1))},Ae=()=>{w(null),J("")},ke=U=>U>=100?"#10b981":U>=75?"#f59e0b":U>=50?"#3b82f6":U>=25?"#8b5cf6":"#ef4444",je=U=>{const ce=U.saved/U.target*100;return ce>=100?"🎉 Goal Completed!":ce>=75?"🔥 Almost there!":ce>=50?"💪 Halfway there!":ce>=25?"🚀 Great start!":"🎯 Let's begin!"};return n.jsxs("div",{className:"goals-container",children:[n.jsx("style",{jsx:!0,children:`
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
            `}),n.jsxs("div",{className:"goals-header",children:[n.jsx("h5",{children:"🎯 Financial Goals"}),n.jsx("p",{className:"goals-subtitle",children:"Turn your dreams into achievable targets"})]}),V&&n.jsx("div",{className:"success-message",children:V}),n.jsxs("div",{className:"form-container",children:[n.jsx("div",{className:"form-subtitle",children:"✨ Create a new financial goal to track your progress"}),n.jsxs("form",{noValidate:!0,onSubmit:Re,className:`needs-validation ${g?"was-validated":""}`,children:[n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",id:"newGoalName",value:i,onChange:U=>s(U.target.value),className:`form-input ${g&&!i?"is-invalid":""}`,placeholder:"🎯 Goal Name (e.g., New Car, Vacation)",required:!0}),n.jsx("div",{className:"invalid-feedback",children:"Please provide a goal name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"number",id:"newGoalAmount",value:r,onChange:U=>o(U.target.value),className:`form-input ${g&&!r?"is-invalid":""}`,placeholder:"💰 Target Amount ($)",min:"0",step:"0.01",required:!0}),n.jsx("div",{className:"invalid-feedback",children:"Please provide a goal amount"})]})]}),n.jsxs("button",{type:"submit",className:"submit-button",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"",A?"Adding Goal...":"🚀 Create Goal"]})]})]}),n.jsx("div",{className:"goals-list-header",children:"💎 YOUR FINANCIAL JOURNEY"}),A&&c.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[n.jsx("div",{className:"loading-spinner",style:{width:"40px",height:"40px",border:"4px solid #f3f3f3",borderTop:"4px solid #667eea"}}),n.jsx("p",{children:"Loading your goals..."})]}):c.length===0?n.jsxs("div",{className:"no-goals",children:["🎯 No Goals Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start your financial journey by creating your first goal above."})]}):c.map(U=>{const ce=U.saved/U.target*100,pe=ke(ce);return n.jsx("div",{className:`goal-card ${fe===U.id?"celebrate":""}`,children:v===U.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",value:I,onChange:W=>J(W.target.value),className:"edit-input",placeholder:"Enter new goal name..."}),n.jsxs("div",{className:"edit-actions",children:[n.jsxs("button",{onClick:()=>se(U.id),className:"btn-modern btn-save",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"","✅ Save"]}),n.jsx("button",{onClick:Ae,className:"btn-modern btn-cancel",children:"❌ Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"goal-header",children:[n.jsx("div",{className:"goal-title",children:U.name}),n.jsxs("div",{className:"goal-target",children:["Target: ",T(U.target)]})]}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:`progress-circle ${be[U.id]?"animate":""}`,children:n.jsx(Bc,{value:Math.min(ce,100),strokeWidth:8,styles:zc({textColor:k?"white":"black",pathColor:pe,trailColor:k?"#4a5568":"#e2e8f0",pathTransitionDuration:1.5})})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("div",{className:"progress-percentage",style:{color:pe},children:[ce.toFixed(1),"%"]}),n.jsx("div",{className:"progress-message",style:{color:pe},children:je(U)})]})]}),n.jsxs("div",{className:"goal-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-label",children:"💰 Saved"}),n.jsx("div",{className:"stat-value",style:{color:"#38a169"},children:T(U.saved)})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-label",children:"🎯 Remaining"}),n.jsx("div",{className:"stat-value",style:{color:"#f59e0b"},children:T(Math.max(0,U.target-U.saved))})]})]}),n.jsx("input",{type:"number",id:`inputAmount-${U.id}`,name:`inputAmount-${U.id}`,value:u[U.id]||"",onChange:W=>m({...u,[U.id]:W.target.value}),className:"amount-input",placeholder:"💵 Enter amount to add...",min:"0",step:"0.01"}),K===U.id?n.jsxs("div",{className:"delete-confirm",children:[n.jsxs("div",{className:"confirm-text",children:['⚠️ Are you sure you want to delete "',U.name,'"?']}),n.jsxs("div",{className:"confirm-actions",children:[n.jsxs("button",{onClick:()=>oe(U.id),className:"btn-modern btn-delete",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"","🗑️ Yes, Delete"]}),n.jsx("button",{onClick:()=>ne(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>E(U.id),className:"btn-modern btn-add",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"","💰 Add Amount"]}),n.jsxs("button",{onClick:()=>Q(U.id),className:"btn-modern btn-reset",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"","🔄 Reset"]}),n.jsx("button",{onClick:()=>R(U.id),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>M(U.id,U.name),className:"btn-modern btn-edit",children:"✏️ Edit"})]})]})},U.id)})]})};var Jr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var K1=Jr.exports,Uc;function J1(){return Uc||(Uc=1,function(i,s){(function(){var r,o="4.17.21",c=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",m="Invalid `variable` option passed into `_.template`",g="__lodash_hash_undefined__",j=500,v="__lodash_placeholder__",w=1,I=2,J=4,T=1,k=2,A=1,Y=2,V=4,$=8,K=16,ne=32,fe=64,ve=128,be=256,ye=512,Re=30,E="...",Q=800,oe=16,R=1,M=2,se=3,Ae=1/0,ke=9007199254740991,je=17976931348623157e292,U=NaN,ce=4294967295,pe=ce-1,W=ce>>>1,ae=[["ary",ve],["bind",A],["bindKey",Y],["curry",$],["curryRight",K],["flip",ye],["partial",ne],["partialRight",fe],["rearg",be]],re="[object Arguments]",le="[object Array]",Pe="[object AsyncFunction]",Ge="[object Boolean]",ee="[object Date]",X="[object DOMException]",Ee="[object Error]",ze="[object Function]",Pt="[object GeneratorFunction]",Ie="[object Map]",dt="[object Number]",Ze="[object Null]",ut="[object Object]",lt="[object Promise]",Fn="[object Proxy]",Je="[object RegExp]",Me="[object Set]",pt="[object String]",mt="[object Symbol]",yn="[object Undefined]",Ft="[object WeakMap]",gn="[object WeakSet]",ct="[object ArrayBuffer]",ft="[object DataView]",rn="[object Float32Array]",At="[object Float64Array]",Yt="[object Int8Array]",G="[object Int16Array]",Z="[object Int32Array]",de="[object Uint8Array]",Ne="[object Uint8ClampedArray]",Be="[object Uint16Array]",tt="[object Uint32Array]",We=/\b__p \+= '';/g,He=/\b(__p \+=) '' \+/g,Ot=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Nt=/&(?:amp|lt|gt|quot|#39);/g,an=/[&<>"']/g,qt=RegExp(Nt.source),wn=RegExp(an.source),On=/<%-([\s\S]+?)%>/g,Mn=/<%([\s\S]+?)%>/g,In=/<%=([\s\S]+?)%>/g,sn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Vt=/^\w*$/,on=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/[\\^$.*+?()[\]{}|]/g,Xn=RegExp(Kt.source),jn=/^\s+/,It=/\s/,b=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,L=/\{\n\/\* \[wrapped with (.+)\] \*/,F=/,? & /,q=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,we=/[()=,{}\[\]\/\s]/,_e=/\\(\\)?/g,Ye=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_=/\w*$/,Lt=/^[-+]0x[0-9a-f]+$/i,ln=/^0b[01]+$/i,Ws=/^\[object .+?Constructor\]$/,di=/^0o[0-7]+$/i,kd=/^(?:0|[1-9]\d*)$/,Pd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ta=/($^)/,Fd=/['\n\r\u2028\u2029\\]/g,na="\\ud800-\\udfff",Od="\\u0300-\\u036f",Id="\\ufe20-\\ufe2f",Ld="\\u20d0-\\u20ff",Hs=Od+Id+Ld,Gs="\\u2700-\\u27bf",Ys="a-z\\xdf-\\xf6\\xf8-\\xff",Ud="\\xac\\xb1\\xd7\\xf7",Dd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Bd="\\u2000-\\u206f",zd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qs="A-Z\\xc0-\\xd6\\xd8-\\xde",Vs="\\ufe0e\\ufe0f",Ks=Ud+Dd+Bd+zd,ui="['’]",Wd="["+na+"]",Js="["+Ks+"]",ra="["+Hs+"]",Ms="\\d+",Hd="["+Gs+"]",Xs="["+Ys+"]",Zs="[^"+na+Ks+Ms+Gs+Ys+qs+"]",pi="\\ud83c[\\udffb-\\udfff]",Gd="(?:"+ra+"|"+pi+")",Qs="[^"+na+"]",fi="(?:\\ud83c[\\udde6-\\uddff]){2}",hi="[\\ud800-\\udbff][\\udc00-\\udfff]",pr="["+qs+"]",eo="\\u200d",to="(?:"+Xs+"|"+Zs+")",Yd="(?:"+pr+"|"+Zs+")",no="(?:"+ui+"(?:d|ll|m|re|s|t|ve))?",ro="(?:"+ui+"(?:D|LL|M|RE|S|T|VE))?",ao=Gd+"?",io="["+Vs+"]?",qd="(?:"+eo+"(?:"+[Qs,fi,hi].join("|")+")"+io+ao+")*",Vd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Kd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",so=io+ao+qd,Jd="(?:"+[Hd,fi,hi].join("|")+")"+so,Md="(?:"+[Qs+ra+"?",ra,fi,hi,Wd].join("|")+")",Xd=RegExp(ui,"g"),Zd=RegExp(ra,"g"),gi=RegExp(pi+"(?="+pi+")|"+Md+so,"g"),Qd=RegExp([pr+"?"+Xs+"+"+no+"(?="+[Js,pr,"$"].join("|")+")",Yd+"+"+ro+"(?="+[Js,pr+to,"$"].join("|")+")",pr+"?"+to+"+"+no,pr+"+"+ro,Kd,Vd,Ms,Jd].join("|"),"g"),eu=RegExp("["+eo+na+Hs+Vs+"]"),tu=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ru=-1,et={};et[rn]=et[At]=et[Yt]=et[G]=et[Z]=et[de]=et[Ne]=et[Be]=et[tt]=!0,et[re]=et[le]=et[ct]=et[Ge]=et[ft]=et[ee]=et[Ee]=et[ze]=et[Ie]=et[dt]=et[ut]=et[Je]=et[Me]=et[pt]=et[Ft]=!1;var Qe={};Qe[re]=Qe[le]=Qe[ct]=Qe[ft]=Qe[Ge]=Qe[ee]=Qe[rn]=Qe[At]=Qe[Yt]=Qe[G]=Qe[Z]=Qe[Ie]=Qe[dt]=Qe[ut]=Qe[Je]=Qe[Me]=Qe[pt]=Qe[mt]=Qe[de]=Qe[Ne]=Qe[Be]=Qe[tt]=!0,Qe[Ee]=Qe[ze]=Qe[Ft]=!1;var au={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},iu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},su={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ou={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lu=parseFloat,cu=parseInt,oo=typeof Ha=="object"&&Ha&&Ha.Object===Object&&Ha,du=typeof self=="object"&&self&&self.Object===Object&&self,bt=oo||du||Function("return this")(),mi=s&&!s.nodeType&&s,Zn=mi&&!0&&i&&!i.nodeType&&i,lo=Zn&&Zn.exports===mi,xi=lo&&oo.process,Jt=function(){try{var S=Zn&&Zn.require&&Zn.require("util").types;return S||xi&&xi.binding&&xi.binding("util")}catch{}}(),co=Jt&&Jt.isArrayBuffer,uo=Jt&&Jt.isDate,po=Jt&&Jt.isMap,fo=Jt&&Jt.isRegExp,ho=Jt&&Jt.isSet,go=Jt&&Jt.isTypedArray;function Ut(S,D,P){switch(P.length){case 0:return S.call(D);case 1:return S.call(D,P[0]);case 2:return S.call(D,P[0],P[1]);case 3:return S.call(D,P[0],P[1],P[2])}return S.apply(D,P)}function uu(S,D,P,ie){for(var Se=-1,qe=S==null?0:S.length;++Se<qe;){var ht=S[Se];D(ie,ht,P(ht),S)}return ie}function Mt(S,D){for(var P=-1,ie=S==null?0:S.length;++P<ie&&D(S[P],P,S)!==!1;);return S}function pu(S,D){for(var P=S==null?0:S.length;P--&&D(S[P],P,S)!==!1;);return S}function mo(S,D){for(var P=-1,ie=S==null?0:S.length;++P<ie;)if(!D(S[P],P,S))return!1;return!0}function Ln(S,D){for(var P=-1,ie=S==null?0:S.length,Se=0,qe=[];++P<ie;){var ht=S[P];D(ht,P,S)&&(qe[Se++]=ht)}return qe}function aa(S,D){var P=S==null?0:S.length;return!!P&&fr(S,D,0)>-1}function bi(S,D,P){for(var ie=-1,Se=S==null?0:S.length;++ie<Se;)if(P(D,S[ie]))return!0;return!1}function nt(S,D){for(var P=-1,ie=S==null?0:S.length,Se=Array(ie);++P<ie;)Se[P]=D(S[P],P,S);return Se}function Un(S,D){for(var P=-1,ie=D.length,Se=S.length;++P<ie;)S[Se+P]=D[P];return S}function vi(S,D,P,ie){var Se=-1,qe=S==null?0:S.length;for(ie&&qe&&(P=S[++Se]);++Se<qe;)P=D(P,S[Se],Se,S);return P}function fu(S,D,P,ie){var Se=S==null?0:S.length;for(ie&&Se&&(P=S[--Se]);Se--;)P=D(P,S[Se],Se,S);return P}function yi(S,D){for(var P=-1,ie=S==null?0:S.length;++P<ie;)if(D(S[P],P,S))return!0;return!1}var hu=wi("length");function gu(S){return S.split("")}function mu(S){return S.match(q)||[]}function xo(S,D,P){var ie;return P(S,function(Se,qe,ht){if(D(Se,qe,ht))return ie=qe,!1}),ie}function ia(S,D,P,ie){for(var Se=S.length,qe=P+(ie?1:-1);ie?qe--:++qe<Se;)if(D(S[qe],qe,S))return qe;return-1}function fr(S,D,P){return D===D?Eu(S,D,P):ia(S,bo,P)}function xu(S,D,P,ie){for(var Se=P-1,qe=S.length;++Se<qe;)if(ie(S[Se],D))return Se;return-1}function bo(S){return S!==S}function vo(S,D){var P=S==null?0:S.length;return P?Ni(S,D)/P:U}function wi(S){return function(D){return D==null?r:D[S]}}function ji(S){return function(D){return S==null?r:S[D]}}function yo(S,D,P,ie,Se){return Se(S,function(qe,ht,Xe){P=ie?(ie=!1,qe):D(P,qe,ht,Xe)}),P}function bu(S,D){var P=S.length;for(S.sort(D);P--;)S[P]=S[P].value;return S}function Ni(S,D){for(var P,ie=-1,Se=S.length;++ie<Se;){var qe=D(S[ie]);qe!==r&&(P=P===r?qe:P+qe)}return P}function Si(S,D){for(var P=-1,ie=Array(S);++P<S;)ie[P]=D(P);return ie}function vu(S,D){return nt(D,function(P){return[P,S[P]]})}function wo(S){return S&&S.slice(0,_o(S)+1).replace(jn,"")}function Dt(S){return function(D){return S(D)}}function _i(S,D){return nt(D,function(P){return S[P]})}function kr(S,D){return S.has(D)}function jo(S,D){for(var P=-1,ie=S.length;++P<ie&&fr(D,S[P],0)>-1;);return P}function No(S,D){for(var P=S.length;P--&&fr(D,S[P],0)>-1;);return P}function yu(S,D){for(var P=S.length,ie=0;P--;)S[P]===D&&++ie;return ie}var wu=ji(au),ju=ji(iu);function Nu(S){return"\\"+ou[S]}function Su(S,D){return S==null?r:S[D]}function hr(S){return eu.test(S)}function _u(S){return tu.test(S)}function Cu(S){for(var D,P=[];!(D=S.next()).done;)P.push(D.value);return P}function Ci(S){var D=-1,P=Array(S.size);return S.forEach(function(ie,Se){P[++D]=[Se,ie]}),P}function So(S,D){return function(P){return S(D(P))}}function Dn(S,D){for(var P=-1,ie=S.length,Se=0,qe=[];++P<ie;){var ht=S[P];(ht===D||ht===v)&&(S[P]=v,qe[Se++]=P)}return qe}function sa(S){var D=-1,P=Array(S.size);return S.forEach(function(ie){P[++D]=ie}),P}function Au(S){var D=-1,P=Array(S.size);return S.forEach(function(ie){P[++D]=[ie,ie]}),P}function Eu(S,D,P){for(var ie=P-1,Se=S.length;++ie<Se;)if(S[ie]===D)return ie;return-1}function Tu(S,D,P){for(var ie=P+1;ie--;)if(S[ie]===D)return ie;return ie}function gr(S){return hr(S)?$u(S):hu(S)}function cn(S){return hr(S)?ku(S):gu(S)}function _o(S){for(var D=S.length;D--&&It.test(S.charAt(D)););return D}var Ru=ji(su);function $u(S){for(var D=gi.lastIndex=0;gi.test(S);)++D;return D}function ku(S){return S.match(gi)||[]}function Pu(S){return S.match(Qd)||[]}var Fu=function S(D){D=D==null?bt:mr.defaults(bt.Object(),D,mr.pick(bt,nu));var P=D.Array,ie=D.Date,Se=D.Error,qe=D.Function,ht=D.Math,Xe=D.Object,Ai=D.RegExp,Ou=D.String,Xt=D.TypeError,oa=P.prototype,Iu=qe.prototype,xr=Xe.prototype,la=D["__core-js_shared__"],ca=Iu.toString,Ke=xr.hasOwnProperty,Lu=0,Co=function(){var e=/[^.]+$/.exec(la&&la.keys&&la.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),da=xr.toString,Uu=ca.call(Xe),Du=bt._,Bu=Ai("^"+ca.call(Ke).replace(Kt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ua=lo?D.Buffer:r,Bn=D.Symbol,pa=D.Uint8Array,Ao=ua?ua.allocUnsafe:r,fa=So(Xe.getPrototypeOf,Xe),Eo=Xe.create,To=xr.propertyIsEnumerable,ha=oa.splice,Ro=Bn?Bn.isConcatSpreadable:r,Pr=Bn?Bn.iterator:r,Qn=Bn?Bn.toStringTag:r,ga=function(){try{var e=ar(Xe,"defineProperty");return e({},"",{}),e}catch{}}(),zu=D.clearTimeout!==bt.clearTimeout&&D.clearTimeout,Wu=ie&&ie.now!==bt.Date.now&&ie.now,Hu=D.setTimeout!==bt.setTimeout&&D.setTimeout,ma=ht.ceil,xa=ht.floor,Ei=Xe.getOwnPropertySymbols,Gu=ua?ua.isBuffer:r,$o=D.isFinite,Yu=oa.join,qu=So(Xe.keys,Xe),gt=ht.max,yt=ht.min,Vu=ie.now,Ku=D.parseInt,ko=ht.random,Ju=oa.reverse,Ti=ar(D,"DataView"),Fr=ar(D,"Map"),Ri=ar(D,"Promise"),br=ar(D,"Set"),Or=ar(D,"WeakMap"),Ir=ar(Xe,"create"),ba=Or&&new Or,vr={},Mu=ir(Ti),Xu=ir(Fr),Zu=ir(Ri),Qu=ir(br),ep=ir(Or),va=Bn?Bn.prototype:r,Lr=va?va.valueOf:r,Po=va?va.toString:r;function f(e){if(it(e)&&!Ce(e)&&!(e instanceof Ue)){if(e instanceof Zt)return e;if(Ke.call(e,"__wrapped__"))return Fl(e)}return new Zt(e)}var yr=function(){function e(){}return function(t){if(!rt(t))return{};if(Eo)return Eo(t);e.prototype=t;var a=new e;return e.prototype=r,a}}();function ya(){}function Zt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}f.templateSettings={escape:On,evaluate:Mn,interpolate:In,variable:"",imports:{_:f}},f.prototype=ya.prototype,f.prototype.constructor=f,Zt.prototype=yr(ya.prototype),Zt.prototype.constructor=Zt;function Ue(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ce,this.__views__=[]}function tp(){var e=new Ue(this.__wrapped__);return e.__actions__=Et(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Et(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Et(this.__views__),e}function np(){if(this.__filtered__){var e=new Ue(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function rp(){var e=this.__wrapped__.value(),t=this.__dir__,a=Ce(e),l=t<0,p=a?e.length:0,h=mf(0,p,this.__views__),x=h.start,N=h.end,C=N-x,B=l?N:x-1,z=this.__iteratees__,H=z.length,te=0,ue=yt(C,this.__takeCount__);if(!a||!l&&p==C&&ue==C)return rl(e,this.__actions__);var me=[];e:for(;C--&&te<ue;){B+=t;for(var Fe=-1,xe=e[B];++Fe<H;){var Le=z[Fe],De=Le.iteratee,Wt=Le.type,Ct=De(xe);if(Wt==M)xe=Ct;else if(!Ct){if(Wt==R)continue e;break e}}me[te++]=xe}return me}Ue.prototype=yr(ya.prototype),Ue.prototype.constructor=Ue;function er(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}function ap(){this.__data__=Ir?Ir(null):{},this.size=0}function ip(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function sp(e){var t=this.__data__;if(Ir){var a=t[e];return a===g?r:a}return Ke.call(t,e)?t[e]:r}function op(e){var t=this.__data__;return Ir?t[e]!==r:Ke.call(t,e)}function lp(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=Ir&&t===r?g:t,this}er.prototype.clear=ap,er.prototype.delete=ip,er.prototype.get=sp,er.prototype.has=op,er.prototype.set=lp;function Nn(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}function cp(){this.__data__=[],this.size=0}function dp(e){var t=this.__data__,a=wa(t,e);if(a<0)return!1;var l=t.length-1;return a==l?t.pop():ha.call(t,a,1),--this.size,!0}function up(e){var t=this.__data__,a=wa(t,e);return a<0?r:t[a][1]}function pp(e){return wa(this.__data__,e)>-1}function fp(e,t){var a=this.__data__,l=wa(a,e);return l<0?(++this.size,a.push([e,t])):a[l][1]=t,this}Nn.prototype.clear=cp,Nn.prototype.delete=dp,Nn.prototype.get=up,Nn.prototype.has=pp,Nn.prototype.set=fp;function Sn(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}function hp(){this.size=0,this.__data__={hash:new er,map:new(Fr||Nn),string:new er}}function gp(e){var t=Pa(this,e).delete(e);return this.size-=t?1:0,t}function mp(e){return Pa(this,e).get(e)}function xp(e){return Pa(this,e).has(e)}function bp(e,t){var a=Pa(this,e),l=a.size;return a.set(e,t),this.size+=a.size==l?0:1,this}Sn.prototype.clear=hp,Sn.prototype.delete=gp,Sn.prototype.get=mp,Sn.prototype.has=xp,Sn.prototype.set=bp;function tr(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new Sn;++t<a;)this.add(e[t])}function vp(e){return this.__data__.set(e,g),this}function yp(e){return this.__data__.has(e)}tr.prototype.add=tr.prototype.push=vp,tr.prototype.has=yp;function dn(e){var t=this.__data__=new Nn(e);this.size=t.size}function wp(){this.__data__=new Nn,this.size=0}function jp(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function Np(e){return this.__data__.get(e)}function Sp(e){return this.__data__.has(e)}function _p(e,t){var a=this.__data__;if(a instanceof Nn){var l=a.__data__;if(!Fr||l.length<c-1)return l.push([e,t]),this.size=++a.size,this;a=this.__data__=new Sn(l)}return a.set(e,t),this.size=a.size,this}dn.prototype.clear=wp,dn.prototype.delete=jp,dn.prototype.get=Np,dn.prototype.has=Sp,dn.prototype.set=_p;function Fo(e,t){var a=Ce(e),l=!a&&sr(e),p=!a&&!l&&Yn(e),h=!a&&!l&&!p&&Sr(e),x=a||l||p||h,N=x?Si(e.length,Ou):[],C=N.length;for(var B in e)(t||Ke.call(e,B))&&!(x&&(B=="length"||p&&(B=="offset"||B=="parent")||h&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||En(B,C)))&&N.push(B);return N}function Oo(e){var t=e.length;return t?e[zi(0,t-1)]:r}function Cp(e,t){return Fa(Et(e),nr(t,0,e.length))}function Ap(e){return Fa(Et(e))}function $i(e,t,a){(a!==r&&!un(e[t],a)||a===r&&!(t in e))&&_n(e,t,a)}function Ur(e,t,a){var l=e[t];(!(Ke.call(e,t)&&un(l,a))||a===r&&!(t in e))&&_n(e,t,a)}function wa(e,t){for(var a=e.length;a--;)if(un(e[a][0],t))return a;return-1}function Ep(e,t,a,l){return zn(e,function(p,h,x){t(l,p,a(p),x)}),l}function Io(e,t){return e&&xn(t,xt(t),e)}function Tp(e,t){return e&&xn(t,Rt(t),e)}function _n(e,t,a){t=="__proto__"&&ga?ga(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}function ki(e,t){for(var a=-1,l=t.length,p=P(l),h=e==null;++a<l;)p[a]=h?r:ps(e,t[a]);return p}function nr(e,t,a){return e===e&&(a!==r&&(e=e<=a?e:a),t!==r&&(e=e>=t?e:t)),e}function Qt(e,t,a,l,p,h){var x,N=t&w,C=t&I,B=t&J;if(a&&(x=p?a(e,l,p,h):a(e)),x!==r)return x;if(!rt(e))return e;var z=Ce(e);if(z){if(x=bf(e),!N)return Et(e,x)}else{var H=wt(e),te=H==ze||H==Pt;if(Yn(e))return sl(e,N);if(H==ut||H==re||te&&!p){if(x=C||te?{}:_l(e),!N)return C?of(e,Tp(x,e)):sf(e,Io(x,e))}else{if(!Qe[H])return p?e:{};x=vf(e,H,N)}}h||(h=new dn);var ue=h.get(e);if(ue)return ue;h.set(e,x),ec(e)?e.forEach(function(xe){x.add(Qt(xe,t,a,xe,e,h))}):Zl(e)&&e.forEach(function(xe,Le){x.set(Le,Qt(xe,t,a,Le,e,h))});var me=B?C?Zi:Xi:C?Rt:xt,Fe=z?r:me(e);return Mt(Fe||e,function(xe,Le){Fe&&(Le=xe,xe=e[Le]),Ur(x,Le,Qt(xe,t,a,Le,e,h))}),x}function Rp(e){var t=xt(e);return function(a){return Lo(a,e,t)}}function Lo(e,t,a){var l=a.length;if(e==null)return!l;for(e=Xe(e);l--;){var p=a[l],h=t[p],x=e[p];if(x===r&&!(p in e)||!h(x))return!1}return!0}function Uo(e,t,a){if(typeof e!="function")throw new Xt(u);return Yr(function(){e.apply(r,a)},t)}function Dr(e,t,a,l){var p=-1,h=aa,x=!0,N=e.length,C=[],B=t.length;if(!N)return C;a&&(t=nt(t,Dt(a))),l?(h=bi,x=!1):t.length>=c&&(h=kr,x=!1,t=new tr(t));e:for(;++p<N;){var z=e[p],H=a==null?z:a(z);if(z=l||z!==0?z:0,x&&H===H){for(var te=B;te--;)if(t[te]===H)continue e;C.push(z)}else h(t,H,l)||C.push(z)}return C}var zn=ul(mn),Do=ul(Fi,!0);function $p(e,t){var a=!0;return zn(e,function(l,p,h){return a=!!t(l,p,h),a}),a}function ja(e,t,a){for(var l=-1,p=e.length;++l<p;){var h=e[l],x=t(h);if(x!=null&&(N===r?x===x&&!zt(x):a(x,N)))var N=x,C=h}return C}function kp(e,t,a,l){var p=e.length;for(a=$e(a),a<0&&(a=-a>p?0:p+a),l=l===r||l>p?p:$e(l),l<0&&(l+=p),l=a>l?0:nc(l);a<l;)e[a++]=t;return e}function Bo(e,t){var a=[];return zn(e,function(l,p,h){t(l,p,h)&&a.push(l)}),a}function vt(e,t,a,l,p){var h=-1,x=e.length;for(a||(a=wf),p||(p=[]);++h<x;){var N=e[h];t>0&&a(N)?t>1?vt(N,t-1,a,l,p):Un(p,N):l||(p[p.length]=N)}return p}var Pi=pl(),zo=pl(!0);function mn(e,t){return e&&Pi(e,t,xt)}function Fi(e,t){return e&&zo(e,t,xt)}function Na(e,t){return Ln(t,function(a){return Tn(e[a])})}function rr(e,t){t=Hn(t,e);for(var a=0,l=t.length;e!=null&&a<l;)e=e[bn(t[a++])];return a&&a==l?e:r}function Wo(e,t,a){var l=t(e);return Ce(e)?l:Un(l,a(e))}function St(e){return e==null?e===r?yn:Ze:Qn&&Qn in Xe(e)?gf(e):Ef(e)}function Oi(e,t){return e>t}function Pp(e,t){return e!=null&&Ke.call(e,t)}function Fp(e,t){return e!=null&&t in Xe(e)}function Op(e,t,a){return e>=yt(t,a)&&e<gt(t,a)}function Ii(e,t,a){for(var l=a?bi:aa,p=e[0].length,h=e.length,x=h,N=P(h),C=1/0,B=[];x--;){var z=e[x];x&&t&&(z=nt(z,Dt(t))),C=yt(z.length,C),N[x]=!a&&(t||p>=120&&z.length>=120)?new tr(x&&z):r}z=e[0];var H=-1,te=N[0];e:for(;++H<p&&B.length<C;){var ue=z[H],me=t?t(ue):ue;if(ue=a||ue!==0?ue:0,!(te?kr(te,me):l(B,me,a))){for(x=h;--x;){var Fe=N[x];if(!(Fe?kr(Fe,me):l(e[x],me,a)))continue e}te&&te.push(me),B.push(ue)}}return B}function Ip(e,t,a,l){return mn(e,function(p,h,x){t(l,a(p),h,x)}),l}function Br(e,t,a){t=Hn(t,e),e=Tl(e,t);var l=e==null?e:e[bn(tn(t))];return l==null?r:Ut(l,e,a)}function Ho(e){return it(e)&&St(e)==re}function Lp(e){return it(e)&&St(e)==ct}function Up(e){return it(e)&&St(e)==ee}function zr(e,t,a,l,p){return e===t?!0:e==null||t==null||!it(e)&&!it(t)?e!==e&&t!==t:Dp(e,t,a,l,zr,p)}function Dp(e,t,a,l,p,h){var x=Ce(e),N=Ce(t),C=x?le:wt(e),B=N?le:wt(t);C=C==re?ut:C,B=B==re?ut:B;var z=C==ut,H=B==ut,te=C==B;if(te&&Yn(e)){if(!Yn(t))return!1;x=!0,z=!1}if(te&&!z)return h||(h=new dn),x||Sr(e)?jl(e,t,a,l,p,h):ff(e,t,C,a,l,p,h);if(!(a&T)){var ue=z&&Ke.call(e,"__wrapped__"),me=H&&Ke.call(t,"__wrapped__");if(ue||me){var Fe=ue?e.value():e,xe=me?t.value():t;return h||(h=new dn),p(Fe,xe,a,l,h)}}return te?(h||(h=new dn),hf(e,t,a,l,p,h)):!1}function Bp(e){return it(e)&&wt(e)==Ie}function Li(e,t,a,l){var p=a.length,h=p,x=!l;if(e==null)return!h;for(e=Xe(e);p--;){var N=a[p];if(x&&N[2]?N[1]!==e[N[0]]:!(N[0]in e))return!1}for(;++p<h;){N=a[p];var C=N[0],B=e[C],z=N[1];if(x&&N[2]){if(B===r&&!(C in e))return!1}else{var H=new dn;if(l)var te=l(B,z,C,e,t,H);if(!(te===r?zr(z,B,T|k,l,H):te))return!1}}return!0}function Go(e){if(!rt(e)||Nf(e))return!1;var t=Tn(e)?Bu:Ws;return t.test(ir(e))}function zp(e){return it(e)&&St(e)==Je}function Wp(e){return it(e)&&wt(e)==Me}function Hp(e){return it(e)&&Ba(e.length)&&!!et[St(e)]}function Yo(e){return typeof e=="function"?e:e==null?$t:typeof e=="object"?Ce(e)?Ko(e[0],e[1]):Vo(e):fc(e)}function Ui(e){if(!Gr(e))return qu(e);var t=[];for(var a in Xe(e))Ke.call(e,a)&&a!="constructor"&&t.push(a);return t}function Gp(e){if(!rt(e))return Af(e);var t=Gr(e),a=[];for(var l in e)l=="constructor"&&(t||!Ke.call(e,l))||a.push(l);return a}function Di(e,t){return e<t}function qo(e,t){var a=-1,l=Tt(e)?P(e.length):[];return zn(e,function(p,h,x){l[++a]=t(p,h,x)}),l}function Vo(e){var t=es(e);return t.length==1&&t[0][2]?Al(t[0][0],t[0][1]):function(a){return a===e||Li(a,e,t)}}function Ko(e,t){return ns(e)&&Cl(t)?Al(bn(e),t):function(a){var l=ps(a,e);return l===r&&l===t?fs(a,e):zr(t,l,T|k)}}function Sa(e,t,a,l,p){e!==t&&Pi(t,function(h,x){if(p||(p=new dn),rt(h))Yp(e,t,x,a,Sa,l,p);else{var N=l?l(as(e,x),h,x+"",e,t,p):r;N===r&&(N=h),$i(e,x,N)}},Rt)}function Yp(e,t,a,l,p,h,x){var N=as(e,a),C=as(t,a),B=x.get(C);if(B){$i(e,a,B);return}var z=h?h(N,C,a+"",e,t,x):r,H=z===r;if(H){var te=Ce(C),ue=!te&&Yn(C),me=!te&&!ue&&Sr(C);z=C,te||ue||me?Ce(N)?z=N:st(N)?z=Et(N):ue?(H=!1,z=sl(C,!0)):me?(H=!1,z=ol(C,!0)):z=[]:qr(C)||sr(C)?(z=N,sr(N)?z=rc(N):(!rt(N)||Tn(N))&&(z=_l(C))):H=!1}H&&(x.set(C,z),p(z,C,l,h,x),x.delete(C)),$i(e,a,z)}function Jo(e,t){var a=e.length;if(a)return t+=t<0?a:0,En(t,a)?e[t]:r}function Mo(e,t,a){t.length?t=nt(t,function(h){return Ce(h)?function(x){return rr(x,h.length===1?h[0]:h)}:h}):t=[$t];var l=-1;t=nt(t,Dt(he()));var p=qo(e,function(h,x,N){var C=nt(t,function(B){return B(h)});return{criteria:C,index:++l,value:h}});return bu(p,function(h,x){return af(h,x,a)})}function qp(e,t){return Xo(e,t,function(a,l){return fs(e,l)})}function Xo(e,t,a){for(var l=-1,p=t.length,h={};++l<p;){var x=t[l],N=rr(e,x);a(N,x)&&Wr(h,Hn(x,e),N)}return h}function Vp(e){return function(t){return rr(t,e)}}function Bi(e,t,a,l){var p=l?xu:fr,h=-1,x=t.length,N=e;for(e===t&&(t=Et(t)),a&&(N=nt(e,Dt(a)));++h<x;)for(var C=0,B=t[h],z=a?a(B):B;(C=p(N,z,C,l))>-1;)N!==e&&ha.call(N,C,1),ha.call(e,C,1);return e}function Zo(e,t){for(var a=e?t.length:0,l=a-1;a--;){var p=t[a];if(a==l||p!==h){var h=p;En(p)?ha.call(e,p,1):Gi(e,p)}}return e}function zi(e,t){return e+xa(ko()*(t-e+1))}function Kp(e,t,a,l){for(var p=-1,h=gt(ma((t-e)/(a||1)),0),x=P(h);h--;)x[l?h:++p]=e,e+=a;return x}function Wi(e,t){var a="";if(!e||t<1||t>ke)return a;do t%2&&(a+=e),t=xa(t/2),t&&(e+=e);while(t);return a}function Oe(e,t){return is(El(e,t,$t),e+"")}function Jp(e){return Oo(_r(e))}function Mp(e,t){var a=_r(e);return Fa(a,nr(t,0,a.length))}function Wr(e,t,a,l){if(!rt(e))return e;t=Hn(t,e);for(var p=-1,h=t.length,x=h-1,N=e;N!=null&&++p<h;){var C=bn(t[p]),B=a;if(C==="__proto__"||C==="constructor"||C==="prototype")return e;if(p!=x){var z=N[C];B=l?l(z,C,N):r,B===r&&(B=rt(z)?z:En(t[p+1])?[]:{})}Ur(N,C,B),N=N[C]}return e}var Qo=ba?function(e,t){return ba.set(e,t),e}:$t,Xp=ga?function(e,t){return ga(e,"toString",{configurable:!0,enumerable:!1,value:gs(t),writable:!0})}:$t;function Zp(e){return Fa(_r(e))}function en(e,t,a){var l=-1,p=e.length;t<0&&(t=-t>p?0:p+t),a=a>p?p:a,a<0&&(a+=p),p=t>a?0:a-t>>>0,t>>>=0;for(var h=P(p);++l<p;)h[l]=e[l+t];return h}function Qp(e,t){var a;return zn(e,function(l,p,h){return a=t(l,p,h),!a}),!!a}function _a(e,t,a){var l=0,p=e==null?l:e.length;if(typeof t=="number"&&t===t&&p<=W){for(;l<p;){var h=l+p>>>1,x=e[h];x!==null&&!zt(x)&&(a?x<=t:x<t)?l=h+1:p=h}return p}return Hi(e,t,$t,a)}function Hi(e,t,a,l){var p=0,h=e==null?0:e.length;if(h===0)return 0;t=a(t);for(var x=t!==t,N=t===null,C=zt(t),B=t===r;p<h;){var z=xa((p+h)/2),H=a(e[z]),te=H!==r,ue=H===null,me=H===H,Fe=zt(H);if(x)var xe=l||me;else B?xe=me&&(l||te):N?xe=me&&te&&(l||!ue):C?xe=me&&te&&!ue&&(l||!Fe):ue||Fe?xe=!1:xe=l?H<=t:H<t;xe?p=z+1:h=z}return yt(h,pe)}function el(e,t){for(var a=-1,l=e.length,p=0,h=[];++a<l;){var x=e[a],N=t?t(x):x;if(!a||!un(N,C)){var C=N;h[p++]=x===0?0:x}}return h}function tl(e){return typeof e=="number"?e:zt(e)?U:+e}function Bt(e){if(typeof e=="string")return e;if(Ce(e))return nt(e,Bt)+"";if(zt(e))return Po?Po.call(e):"";var t=e+"";return t=="0"&&1/e==-Ae?"-0":t}function Wn(e,t,a){var l=-1,p=aa,h=e.length,x=!0,N=[],C=N;if(a)x=!1,p=bi;else if(h>=c){var B=t?null:uf(e);if(B)return sa(B);x=!1,p=kr,C=new tr}else C=t?[]:N;e:for(;++l<h;){var z=e[l],H=t?t(z):z;if(z=a||z!==0?z:0,x&&H===H){for(var te=C.length;te--;)if(C[te]===H)continue e;t&&C.push(H),N.push(z)}else p(C,H,a)||(C!==N&&C.push(H),N.push(z))}return N}function Gi(e,t){return t=Hn(t,e),e=Tl(e,t),e==null||delete e[bn(tn(t))]}function nl(e,t,a,l){return Wr(e,t,a(rr(e,t)),l)}function Ca(e,t,a,l){for(var p=e.length,h=l?p:-1;(l?h--:++h<p)&&t(e[h],h,e););return a?en(e,l?0:h,l?h+1:p):en(e,l?h+1:0,l?p:h)}function rl(e,t){var a=e;return a instanceof Ue&&(a=a.value()),vi(t,function(l,p){return p.func.apply(p.thisArg,Un([l],p.args))},a)}function Yi(e,t,a){var l=e.length;if(l<2)return l?Wn(e[0]):[];for(var p=-1,h=P(l);++p<l;)for(var x=e[p],N=-1;++N<l;)N!=p&&(h[p]=Dr(h[p]||x,e[N],t,a));return Wn(vt(h,1),t,a)}function al(e,t,a){for(var l=-1,p=e.length,h=t.length,x={};++l<p;){var N=l<h?t[l]:r;a(x,e[l],N)}return x}function qi(e){return st(e)?e:[]}function Vi(e){return typeof e=="function"?e:$t}function Hn(e,t){return Ce(e)?e:ns(e,t)?[e]:Pl(Ve(e))}var ef=Oe;function Gn(e,t,a){var l=e.length;return a=a===r?l:a,!t&&a>=l?e:en(e,t,a)}var il=zu||function(e){return bt.clearTimeout(e)};function sl(e,t){if(t)return e.slice();var a=e.length,l=Ao?Ao(a):new e.constructor(a);return e.copy(l),l}function Ki(e){var t=new e.constructor(e.byteLength);return new pa(t).set(new pa(e)),t}function tf(e,t){var a=t?Ki(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function nf(e){var t=new e.constructor(e.source,_.exec(e));return t.lastIndex=e.lastIndex,t}function rf(e){return Lr?Xe(Lr.call(e)):{}}function ol(e,t){var a=t?Ki(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function ll(e,t){if(e!==t){var a=e!==r,l=e===null,p=e===e,h=zt(e),x=t!==r,N=t===null,C=t===t,B=zt(t);if(!N&&!B&&!h&&e>t||h&&x&&C&&!N&&!B||l&&x&&C||!a&&C||!p)return 1;if(!l&&!h&&!B&&e<t||B&&a&&p&&!l&&!h||N&&a&&p||!x&&p||!C)return-1}return 0}function af(e,t,a){for(var l=-1,p=e.criteria,h=t.criteria,x=p.length,N=a.length;++l<x;){var C=ll(p[l],h[l]);if(C){if(l>=N)return C;var B=a[l];return C*(B=="desc"?-1:1)}}return e.index-t.index}function cl(e,t,a,l){for(var p=-1,h=e.length,x=a.length,N=-1,C=t.length,B=gt(h-x,0),z=P(C+B),H=!l;++N<C;)z[N]=t[N];for(;++p<x;)(H||p<h)&&(z[a[p]]=e[p]);for(;B--;)z[N++]=e[p++];return z}function dl(e,t,a,l){for(var p=-1,h=e.length,x=-1,N=a.length,C=-1,B=t.length,z=gt(h-N,0),H=P(z+B),te=!l;++p<z;)H[p]=e[p];for(var ue=p;++C<B;)H[ue+C]=t[C];for(;++x<N;)(te||p<h)&&(H[ue+a[x]]=e[p++]);return H}function Et(e,t){var a=-1,l=e.length;for(t||(t=P(l));++a<l;)t[a]=e[a];return t}function xn(e,t,a,l){var p=!a;a||(a={});for(var h=-1,x=t.length;++h<x;){var N=t[h],C=l?l(a[N],e[N],N,a,e):r;C===r&&(C=e[N]),p?_n(a,N,C):Ur(a,N,C)}return a}function sf(e,t){return xn(e,ts(e),t)}function of(e,t){return xn(e,Nl(e),t)}function Aa(e,t){return function(a,l){var p=Ce(a)?uu:Ep,h=t?t():{};return p(a,e,he(l,2),h)}}function wr(e){return Oe(function(t,a){var l=-1,p=a.length,h=p>1?a[p-1]:r,x=p>2?a[2]:r;for(h=e.length>3&&typeof h=="function"?(p--,h):r,x&&_t(a[0],a[1],x)&&(h=p<3?r:h,p=1),t=Xe(t);++l<p;){var N=a[l];N&&e(t,N,l,h)}return t})}function ul(e,t){return function(a,l){if(a==null)return a;if(!Tt(a))return e(a,l);for(var p=a.length,h=t?p:-1,x=Xe(a);(t?h--:++h<p)&&l(x[h],h,x)!==!1;);return a}}function pl(e){return function(t,a,l){for(var p=-1,h=Xe(t),x=l(t),N=x.length;N--;){var C=x[e?N:++p];if(a(h[C],C,h)===!1)break}return t}}function lf(e,t,a){var l=t&A,p=Hr(e);function h(){var x=this&&this!==bt&&this instanceof h?p:e;return x.apply(l?a:this,arguments)}return h}function fl(e){return function(t){t=Ve(t);var a=hr(t)?cn(t):r,l=a?a[0]:t.charAt(0),p=a?Gn(a,1).join(""):t.slice(1);return l[e]()+p}}function jr(e){return function(t){return vi(uc(dc(t).replace(Xd,"")),e,"")}}function Hr(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var a=yr(e.prototype),l=e.apply(a,t);return rt(l)?l:a}}function cf(e,t,a){var l=Hr(e);function p(){for(var h=arguments.length,x=P(h),N=h,C=Nr(p);N--;)x[N]=arguments[N];var B=h<3&&x[0]!==C&&x[h-1]!==C?[]:Dn(x,C);if(h-=B.length,h<a)return bl(e,t,Ea,p.placeholder,r,x,B,r,r,a-h);var z=this&&this!==bt&&this instanceof p?l:e;return Ut(z,this,x)}return p}function hl(e){return function(t,a,l){var p=Xe(t);if(!Tt(t)){var h=he(a,3);t=xt(t),a=function(N){return h(p[N],N,p)}}var x=e(t,a,l);return x>-1?p[h?t[x]:x]:r}}function gl(e){return An(function(t){var a=t.length,l=a,p=Zt.prototype.thru;for(e&&t.reverse();l--;){var h=t[l];if(typeof h!="function")throw new Xt(u);if(p&&!x&&ka(h)=="wrapper")var x=new Zt([],!0)}for(l=x?l:a;++l<a;){h=t[l];var N=ka(h),C=N=="wrapper"?Qi(h):r;C&&rs(C[0])&&C[1]==(ve|$|ne|be)&&!C[4].length&&C[9]==1?x=x[ka(C[0])].apply(x,C[3]):x=h.length==1&&rs(h)?x[N]():x.thru(h)}return function(){var B=arguments,z=B[0];if(x&&B.length==1&&Ce(z))return x.plant(z).value();for(var H=0,te=a?t[H].apply(this,B):z;++H<a;)te=t[H].call(this,te);return te}})}function Ea(e,t,a,l,p,h,x,N,C,B){var z=t&ve,H=t&A,te=t&Y,ue=t&($|K),me=t&ye,Fe=te?r:Hr(e);function xe(){for(var Le=arguments.length,De=P(Le),Wt=Le;Wt--;)De[Wt]=arguments[Wt];if(ue)var Ct=Nr(xe),Ht=yu(De,Ct);if(l&&(De=cl(De,l,p,ue)),h&&(De=dl(De,h,x,ue)),Le-=Ht,ue&&Le<B){var ot=Dn(De,Ct);return bl(e,t,Ea,xe.placeholder,a,De,ot,N,C,B-Le)}var pn=H?a:this,$n=te?pn[e]:e;return Le=De.length,N?De=Tf(De,N):me&&Le>1&&De.reverse(),z&&C<Le&&(De.length=C),this&&this!==bt&&this instanceof xe&&($n=Fe||Hr($n)),$n.apply(pn,De)}return xe}function ml(e,t){return function(a,l){return Ip(a,e,t(l),{})}}function Ta(e,t){return function(a,l){var p;if(a===r&&l===r)return t;if(a!==r&&(p=a),l!==r){if(p===r)return l;typeof a=="string"||typeof l=="string"?(a=Bt(a),l=Bt(l)):(a=tl(a),l=tl(l)),p=e(a,l)}return p}}function Ji(e){return An(function(t){return t=nt(t,Dt(he())),Oe(function(a){var l=this;return e(t,function(p){return Ut(p,l,a)})})})}function Ra(e,t){t=t===r?" ":Bt(t);var a=t.length;if(a<2)return a?Wi(t,e):t;var l=Wi(t,ma(e/gr(t)));return hr(t)?Gn(cn(l),0,e).join(""):l.slice(0,e)}function df(e,t,a,l){var p=t&A,h=Hr(e);function x(){for(var N=-1,C=arguments.length,B=-1,z=l.length,H=P(z+C),te=this&&this!==bt&&this instanceof x?h:e;++B<z;)H[B]=l[B];for(;C--;)H[B++]=arguments[++N];return Ut(te,p?a:this,H)}return x}function xl(e){return function(t,a,l){return l&&typeof l!="number"&&_t(t,a,l)&&(a=l=r),t=Rn(t),a===r?(a=t,t=0):a=Rn(a),l=l===r?t<a?1:-1:Rn(l),Kp(t,a,l,e)}}function $a(e){return function(t,a){return typeof t=="string"&&typeof a=="string"||(t=nn(t),a=nn(a)),e(t,a)}}function bl(e,t,a,l,p,h,x,N,C,B){var z=t&$,H=z?x:r,te=z?r:x,ue=z?h:r,me=z?r:h;t|=z?ne:fe,t&=~(z?fe:ne),t&V||(t&=~(A|Y));var Fe=[e,t,p,ue,H,me,te,N,C,B],xe=a.apply(r,Fe);return rs(e)&&Rl(xe,Fe),xe.placeholder=l,$l(xe,e,t)}function Mi(e){var t=ht[e];return function(a,l){if(a=nn(a),l=l==null?0:yt($e(l),292),l&&$o(a)){var p=(Ve(a)+"e").split("e"),h=t(p[0]+"e"+(+p[1]+l));return p=(Ve(h)+"e").split("e"),+(p[0]+"e"+(+p[1]-l))}return t(a)}}var uf=br&&1/sa(new br([,-0]))[1]==Ae?function(e){return new br(e)}:bs;function vl(e){return function(t){var a=wt(t);return a==Ie?Ci(t):a==Me?Au(t):vu(t,e(t))}}function Cn(e,t,a,l,p,h,x,N){var C=t&Y;if(!C&&typeof e!="function")throw new Xt(u);var B=l?l.length:0;if(B||(t&=~(ne|fe),l=p=r),x=x===r?x:gt($e(x),0),N=N===r?N:$e(N),B-=p?p.length:0,t&fe){var z=l,H=p;l=p=r}var te=C?r:Qi(e),ue=[e,t,a,l,p,z,H,h,x,N];if(te&&Cf(ue,te),e=ue[0],t=ue[1],a=ue[2],l=ue[3],p=ue[4],N=ue[9]=ue[9]===r?C?0:e.length:gt(ue[9]-B,0),!N&&t&($|K)&&(t&=~($|K)),!t||t==A)var me=lf(e,t,a);else t==$||t==K?me=cf(e,t,N):(t==ne||t==(A|ne))&&!p.length?me=df(e,t,a,l):me=Ea.apply(r,ue);var Fe=te?Qo:Rl;return $l(Fe(me,ue),e,t)}function yl(e,t,a,l){return e===r||un(e,xr[a])&&!Ke.call(l,a)?t:e}function wl(e,t,a,l,p,h){return rt(e)&&rt(t)&&(h.set(t,e),Sa(e,t,r,wl,h),h.delete(t)),e}function pf(e){return qr(e)?r:e}function jl(e,t,a,l,p,h){var x=a&T,N=e.length,C=t.length;if(N!=C&&!(x&&C>N))return!1;var B=h.get(e),z=h.get(t);if(B&&z)return B==t&&z==e;var H=-1,te=!0,ue=a&k?new tr:r;for(h.set(e,t),h.set(t,e);++H<N;){var me=e[H],Fe=t[H];if(l)var xe=x?l(Fe,me,H,t,e,h):l(me,Fe,H,e,t,h);if(xe!==r){if(xe)continue;te=!1;break}if(ue){if(!yi(t,function(Le,De){if(!kr(ue,De)&&(me===Le||p(me,Le,a,l,h)))return ue.push(De)})){te=!1;break}}else if(!(me===Fe||p(me,Fe,a,l,h))){te=!1;break}}return h.delete(e),h.delete(t),te}function ff(e,t,a,l,p,h,x){switch(a){case ft:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ct:return!(e.byteLength!=t.byteLength||!h(new pa(e),new pa(t)));case Ge:case ee:case dt:return un(+e,+t);case Ee:return e.name==t.name&&e.message==t.message;case Je:case pt:return e==t+"";case Ie:var N=Ci;case Me:var C=l&T;if(N||(N=sa),e.size!=t.size&&!C)return!1;var B=x.get(e);if(B)return B==t;l|=k,x.set(e,t);var z=jl(N(e),N(t),l,p,h,x);return x.delete(e),z;case mt:if(Lr)return Lr.call(e)==Lr.call(t)}return!1}function hf(e,t,a,l,p,h){var x=a&T,N=Xi(e),C=N.length,B=Xi(t),z=B.length;if(C!=z&&!x)return!1;for(var H=C;H--;){var te=N[H];if(!(x?te in t:Ke.call(t,te)))return!1}var ue=h.get(e),me=h.get(t);if(ue&&me)return ue==t&&me==e;var Fe=!0;h.set(e,t),h.set(t,e);for(var xe=x;++H<C;){te=N[H];var Le=e[te],De=t[te];if(l)var Wt=x?l(De,Le,te,t,e,h):l(Le,De,te,e,t,h);if(!(Wt===r?Le===De||p(Le,De,a,l,h):Wt)){Fe=!1;break}xe||(xe=te=="constructor")}if(Fe&&!xe){var Ct=e.constructor,Ht=t.constructor;Ct!=Ht&&"constructor"in e&&"constructor"in t&&!(typeof Ct=="function"&&Ct instanceof Ct&&typeof Ht=="function"&&Ht instanceof Ht)&&(Fe=!1)}return h.delete(e),h.delete(t),Fe}function An(e){return is(El(e,r,Ll),e+"")}function Xi(e){return Wo(e,xt,ts)}function Zi(e){return Wo(e,Rt,Nl)}var Qi=ba?function(e){return ba.get(e)}:bs;function ka(e){for(var t=e.name+"",a=vr[t],l=Ke.call(vr,t)?a.length:0;l--;){var p=a[l],h=p.func;if(h==null||h==e)return p.name}return t}function Nr(e){var t=Ke.call(f,"placeholder")?f:e;return t.placeholder}function he(){var e=f.iteratee||ms;return e=e===ms?Yo:e,arguments.length?e(arguments[0],arguments[1]):e}function Pa(e,t){var a=e.__data__;return jf(t)?a[typeof t=="string"?"string":"hash"]:a.map}function es(e){for(var t=xt(e),a=t.length;a--;){var l=t[a],p=e[l];t[a]=[l,p,Cl(p)]}return t}function ar(e,t){var a=Su(e,t);return Go(a)?a:r}function gf(e){var t=Ke.call(e,Qn),a=e[Qn];try{e[Qn]=r;var l=!0}catch{}var p=da.call(e);return l&&(t?e[Qn]=a:delete e[Qn]),p}var ts=Ei?function(e){return e==null?[]:(e=Xe(e),Ln(Ei(e),function(t){return To.call(e,t)}))}:vs,Nl=Ei?function(e){for(var t=[];e;)Un(t,ts(e)),e=fa(e);return t}:vs,wt=St;(Ti&&wt(new Ti(new ArrayBuffer(1)))!=ft||Fr&&wt(new Fr)!=Ie||Ri&&wt(Ri.resolve())!=lt||br&&wt(new br)!=Me||Or&&wt(new Or)!=Ft)&&(wt=function(e){var t=St(e),a=t==ut?e.constructor:r,l=a?ir(a):"";if(l)switch(l){case Mu:return ft;case Xu:return Ie;case Zu:return lt;case Qu:return Me;case ep:return Ft}return t});function mf(e,t,a){for(var l=-1,p=a.length;++l<p;){var h=a[l],x=h.size;switch(h.type){case"drop":e+=x;break;case"dropRight":t-=x;break;case"take":t=yt(t,e+x);break;case"takeRight":e=gt(e,t-x);break}}return{start:e,end:t}}function xf(e){var t=e.match(L);return t?t[1].split(F):[]}function Sl(e,t,a){t=Hn(t,e);for(var l=-1,p=t.length,h=!1;++l<p;){var x=bn(t[l]);if(!(h=e!=null&&a(e,x)))break;e=e[x]}return h||++l!=p?h:(p=e==null?0:e.length,!!p&&Ba(p)&&En(x,p)&&(Ce(e)||sr(e)))}function bf(e){var t=e.length,a=new e.constructor(t);return t&&typeof e[0]=="string"&&Ke.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function _l(e){return typeof e.constructor=="function"&&!Gr(e)?yr(fa(e)):{}}function vf(e,t,a){var l=e.constructor;switch(t){case ct:return Ki(e);case Ge:case ee:return new l(+e);case ft:return tf(e,a);case rn:case At:case Yt:case G:case Z:case de:case Ne:case Be:case tt:return ol(e,a);case Ie:return new l;case dt:case pt:return new l(e);case Je:return nf(e);case Me:return new l;case mt:return rf(e)}}function yf(e,t){var a=t.length;if(!a)return e;var l=a-1;return t[l]=(a>1?"& ":"")+t[l],t=t.join(a>2?", ":" "),e.replace(b,`{
/* [wrapped with `+t+`] */
`)}function wf(e){return Ce(e)||sr(e)||!!(Ro&&e&&e[Ro])}function En(e,t){var a=typeof e;return t=t??ke,!!t&&(a=="number"||a!="symbol"&&kd.test(e))&&e>-1&&e%1==0&&e<t}function _t(e,t,a){if(!rt(a))return!1;var l=typeof t;return(l=="number"?Tt(a)&&En(t,a.length):l=="string"&&t in a)?un(a[t],e):!1}function ns(e,t){if(Ce(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||zt(e)?!0:Vt.test(e)||!sn.test(e)||t!=null&&e in Xe(t)}function jf(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function rs(e){var t=ka(e),a=f[t];if(typeof a!="function"||!(t in Ue.prototype))return!1;if(e===a)return!0;var l=Qi(a);return!!l&&e===l[0]}function Nf(e){return!!Co&&Co in e}var Sf=la?Tn:ys;function Gr(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||xr;return e===a}function Cl(e){return e===e&&!rt(e)}function Al(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==r||e in Xe(a))}}function _f(e){var t=Ua(e,function(l){return a.size===j&&a.clear(),l}),a=t.cache;return t}function Cf(e,t){var a=e[1],l=t[1],p=a|l,h=p<(A|Y|ve),x=l==ve&&a==$||l==ve&&a==be&&e[7].length<=t[8]||l==(ve|be)&&t[7].length<=t[8]&&a==$;if(!(h||x))return e;l&A&&(e[2]=t[2],p|=a&A?0:V);var N=t[3];if(N){var C=e[3];e[3]=C?cl(C,N,t[4]):N,e[4]=C?Dn(e[3],v):t[4]}return N=t[5],N&&(C=e[5],e[5]=C?dl(C,N,t[6]):N,e[6]=C?Dn(e[5],v):t[6]),N=t[7],N&&(e[7]=N),l&ve&&(e[8]=e[8]==null?t[8]:yt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=p,e}function Af(e){var t=[];if(e!=null)for(var a in Xe(e))t.push(a);return t}function Ef(e){return da.call(e)}function El(e,t,a){return t=gt(t===r?e.length-1:t,0),function(){for(var l=arguments,p=-1,h=gt(l.length-t,0),x=P(h);++p<h;)x[p]=l[t+p];p=-1;for(var N=P(t+1);++p<t;)N[p]=l[p];return N[t]=a(x),Ut(e,this,N)}}function Tl(e,t){return t.length<2?e:rr(e,en(t,0,-1))}function Tf(e,t){for(var a=e.length,l=yt(t.length,a),p=Et(e);l--;){var h=t[l];e[l]=En(h,a)?p[h]:r}return e}function as(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var Rl=kl(Qo),Yr=Hu||function(e,t){return bt.setTimeout(e,t)},is=kl(Xp);function $l(e,t,a){var l=t+"";return is(e,yf(l,Rf(xf(l),a)))}function kl(e){var t=0,a=0;return function(){var l=Vu(),p=oe-(l-a);if(a=l,p>0){if(++t>=Q)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Fa(e,t){var a=-1,l=e.length,p=l-1;for(t=t===r?l:t;++a<t;){var h=zi(a,p),x=e[h];e[h]=e[a],e[a]=x}return e.length=t,e}var Pl=_f(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(on,function(a,l,p,h){t.push(p?h.replace(_e,"$1"):l||a)}),t});function bn(e){if(typeof e=="string"||zt(e))return e;var t=e+"";return t=="0"&&1/e==-Ae?"-0":t}function ir(e){if(e!=null){try{return ca.call(e)}catch{}try{return e+""}catch{}}return""}function Rf(e,t){return Mt(ae,function(a){var l="_."+a[0];t&a[1]&&!aa(e,l)&&e.push(l)}),e.sort()}function Fl(e){if(e instanceof Ue)return e.clone();var t=new Zt(e.__wrapped__,e.__chain__);return t.__actions__=Et(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function $f(e,t,a){(a?_t(e,t,a):t===r)?t=1:t=gt($e(t),0);var l=e==null?0:e.length;if(!l||t<1)return[];for(var p=0,h=0,x=P(ma(l/t));p<l;)x[h++]=en(e,p,p+=t);return x}function kf(e){for(var t=-1,a=e==null?0:e.length,l=0,p=[];++t<a;){var h=e[t];h&&(p[l++]=h)}return p}function Pf(){var e=arguments.length;if(!e)return[];for(var t=P(e-1),a=arguments[0],l=e;l--;)t[l-1]=arguments[l];return Un(Ce(a)?Et(a):[a],vt(t,1))}var Ff=Oe(function(e,t){return st(e)?Dr(e,vt(t,1,st,!0)):[]}),Of=Oe(function(e,t){var a=tn(t);return st(a)&&(a=r),st(e)?Dr(e,vt(t,1,st,!0),he(a,2)):[]}),If=Oe(function(e,t){var a=tn(t);return st(a)&&(a=r),st(e)?Dr(e,vt(t,1,st,!0),r,a):[]});function Lf(e,t,a){var l=e==null?0:e.length;return l?(t=a||t===r?1:$e(t),en(e,t<0?0:t,l)):[]}function Uf(e,t,a){var l=e==null?0:e.length;return l?(t=a||t===r?1:$e(t),t=l-t,en(e,0,t<0?0:t)):[]}function Df(e,t){return e&&e.length?Ca(e,he(t,3),!0,!0):[]}function Bf(e,t){return e&&e.length?Ca(e,he(t,3),!0):[]}function zf(e,t,a,l){var p=e==null?0:e.length;return p?(a&&typeof a!="number"&&_t(e,t,a)&&(a=0,l=p),kp(e,t,a,l)):[]}function Ol(e,t,a){var l=e==null?0:e.length;if(!l)return-1;var p=a==null?0:$e(a);return p<0&&(p=gt(l+p,0)),ia(e,he(t,3),p)}function Il(e,t,a){var l=e==null?0:e.length;if(!l)return-1;var p=l-1;return a!==r&&(p=$e(a),p=a<0?gt(l+p,0):yt(p,l-1)),ia(e,he(t,3),p,!0)}function Ll(e){var t=e==null?0:e.length;return t?vt(e,1):[]}function Wf(e){var t=e==null?0:e.length;return t?vt(e,Ae):[]}function Hf(e,t){var a=e==null?0:e.length;return a?(t=t===r?1:$e(t),vt(e,t)):[]}function Gf(e){for(var t=-1,a=e==null?0:e.length,l={};++t<a;){var p=e[t];l[p[0]]=p[1]}return l}function Ul(e){return e&&e.length?e[0]:r}function Yf(e,t,a){var l=e==null?0:e.length;if(!l)return-1;var p=a==null?0:$e(a);return p<0&&(p=gt(l+p,0)),fr(e,t,p)}function qf(e){var t=e==null?0:e.length;return t?en(e,0,-1):[]}var Vf=Oe(function(e){var t=nt(e,qi);return t.length&&t[0]===e[0]?Ii(t):[]}),Kf=Oe(function(e){var t=tn(e),a=nt(e,qi);return t===tn(a)?t=r:a.pop(),a.length&&a[0]===e[0]?Ii(a,he(t,2)):[]}),Jf=Oe(function(e){var t=tn(e),a=nt(e,qi);return t=typeof t=="function"?t:r,t&&a.pop(),a.length&&a[0]===e[0]?Ii(a,r,t):[]});function Mf(e,t){return e==null?"":Yu.call(e,t)}function tn(e){var t=e==null?0:e.length;return t?e[t-1]:r}function Xf(e,t,a){var l=e==null?0:e.length;if(!l)return-1;var p=l;return a!==r&&(p=$e(a),p=p<0?gt(l+p,0):yt(p,l-1)),t===t?Tu(e,t,p):ia(e,bo,p,!0)}function Zf(e,t){return e&&e.length?Jo(e,$e(t)):r}var Qf=Oe(Dl);function Dl(e,t){return e&&e.length&&t&&t.length?Bi(e,t):e}function eh(e,t,a){return e&&e.length&&t&&t.length?Bi(e,t,he(a,2)):e}function th(e,t,a){return e&&e.length&&t&&t.length?Bi(e,t,r,a):e}var nh=An(function(e,t){var a=e==null?0:e.length,l=ki(e,t);return Zo(e,nt(t,function(p){return En(p,a)?+p:p}).sort(ll)),l});function rh(e,t){var a=[];if(!(e&&e.length))return a;var l=-1,p=[],h=e.length;for(t=he(t,3);++l<h;){var x=e[l];t(x,l,e)&&(a.push(x),p.push(l))}return Zo(e,p),a}function ss(e){return e==null?e:Ju.call(e)}function ah(e,t,a){var l=e==null?0:e.length;return l?(a&&typeof a!="number"&&_t(e,t,a)?(t=0,a=l):(t=t==null?0:$e(t),a=a===r?l:$e(a)),en(e,t,a)):[]}function ih(e,t){return _a(e,t)}function sh(e,t,a){return Hi(e,t,he(a,2))}function oh(e,t){var a=e==null?0:e.length;if(a){var l=_a(e,t);if(l<a&&un(e[l],t))return l}return-1}function lh(e,t){return _a(e,t,!0)}function ch(e,t,a){return Hi(e,t,he(a,2),!0)}function dh(e,t){var a=e==null?0:e.length;if(a){var l=_a(e,t,!0)-1;if(un(e[l],t))return l}return-1}function uh(e){return e&&e.length?el(e):[]}function ph(e,t){return e&&e.length?el(e,he(t,2)):[]}function fh(e){var t=e==null?0:e.length;return t?en(e,1,t):[]}function hh(e,t,a){return e&&e.length?(t=a||t===r?1:$e(t),en(e,0,t<0?0:t)):[]}function gh(e,t,a){var l=e==null?0:e.length;return l?(t=a||t===r?1:$e(t),t=l-t,en(e,t<0?0:t,l)):[]}function mh(e,t){return e&&e.length?Ca(e,he(t,3),!1,!0):[]}function xh(e,t){return e&&e.length?Ca(e,he(t,3)):[]}var bh=Oe(function(e){return Wn(vt(e,1,st,!0))}),vh=Oe(function(e){var t=tn(e);return st(t)&&(t=r),Wn(vt(e,1,st,!0),he(t,2))}),yh=Oe(function(e){var t=tn(e);return t=typeof t=="function"?t:r,Wn(vt(e,1,st,!0),r,t)});function wh(e){return e&&e.length?Wn(e):[]}function jh(e,t){return e&&e.length?Wn(e,he(t,2)):[]}function Nh(e,t){return t=typeof t=="function"?t:r,e&&e.length?Wn(e,r,t):[]}function os(e){if(!(e&&e.length))return[];var t=0;return e=Ln(e,function(a){if(st(a))return t=gt(a.length,t),!0}),Si(t,function(a){return nt(e,wi(a))})}function Bl(e,t){if(!(e&&e.length))return[];var a=os(e);return t==null?a:nt(a,function(l){return Ut(t,r,l)})}var Sh=Oe(function(e,t){return st(e)?Dr(e,t):[]}),_h=Oe(function(e){return Yi(Ln(e,st))}),Ch=Oe(function(e){var t=tn(e);return st(t)&&(t=r),Yi(Ln(e,st),he(t,2))}),Ah=Oe(function(e){var t=tn(e);return t=typeof t=="function"?t:r,Yi(Ln(e,st),r,t)}),Eh=Oe(os);function Th(e,t){return al(e||[],t||[],Ur)}function Rh(e,t){return al(e||[],t||[],Wr)}var $h=Oe(function(e){var t=e.length,a=t>1?e[t-1]:r;return a=typeof a=="function"?(e.pop(),a):r,Bl(e,a)});function zl(e){var t=f(e);return t.__chain__=!0,t}function kh(e,t){return t(e),e}function Oa(e,t){return t(e)}var Ph=An(function(e){var t=e.length,a=t?e[0]:0,l=this.__wrapped__,p=function(h){return ki(h,e)};return t>1||this.__actions__.length||!(l instanceof Ue)||!En(a)?this.thru(p):(l=l.slice(a,+a+(t?1:0)),l.__actions__.push({func:Oa,args:[p],thisArg:r}),new Zt(l,this.__chain__).thru(function(h){return t&&!h.length&&h.push(r),h}))});function Fh(){return zl(this)}function Oh(){return new Zt(this.value(),this.__chain__)}function Ih(){this.__values__===r&&(this.__values__=tc(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}}function Lh(){return this}function Uh(e){for(var t,a=this;a instanceof ya;){var l=Fl(a);l.__index__=0,l.__values__=r,t?p.__wrapped__=l:t=l;var p=l;a=a.__wrapped__}return p.__wrapped__=e,t}function Dh(){var e=this.__wrapped__;if(e instanceof Ue){var t=e;return this.__actions__.length&&(t=new Ue(this)),t=t.reverse(),t.__actions__.push({func:Oa,args:[ss],thisArg:r}),new Zt(t,this.__chain__)}return this.thru(ss)}function Bh(){return rl(this.__wrapped__,this.__actions__)}var zh=Aa(function(e,t,a){Ke.call(e,a)?++e[a]:_n(e,a,1)});function Wh(e,t,a){var l=Ce(e)?mo:$p;return a&&_t(e,t,a)&&(t=r),l(e,he(t,3))}function Hh(e,t){var a=Ce(e)?Ln:Bo;return a(e,he(t,3))}var Gh=hl(Ol),Yh=hl(Il);function qh(e,t){return vt(Ia(e,t),1)}function Vh(e,t){return vt(Ia(e,t),Ae)}function Kh(e,t,a){return a=a===r?1:$e(a),vt(Ia(e,t),a)}function Wl(e,t){var a=Ce(e)?Mt:zn;return a(e,he(t,3))}function Hl(e,t){var a=Ce(e)?pu:Do;return a(e,he(t,3))}var Jh=Aa(function(e,t,a){Ke.call(e,a)?e[a].push(t):_n(e,a,[t])});function Mh(e,t,a,l){e=Tt(e)?e:_r(e),a=a&&!l?$e(a):0;var p=e.length;return a<0&&(a=gt(p+a,0)),za(e)?a<=p&&e.indexOf(t,a)>-1:!!p&&fr(e,t,a)>-1}var Xh=Oe(function(e,t,a){var l=-1,p=typeof t=="function",h=Tt(e)?P(e.length):[];return zn(e,function(x){h[++l]=p?Ut(t,x,a):Br(x,t,a)}),h}),Zh=Aa(function(e,t,a){_n(e,a,t)});function Ia(e,t){var a=Ce(e)?nt:qo;return a(e,he(t,3))}function Qh(e,t,a,l){return e==null?[]:(Ce(t)||(t=t==null?[]:[t]),a=l?r:a,Ce(a)||(a=a==null?[]:[a]),Mo(e,t,a))}var eg=Aa(function(e,t,a){e[a?0:1].push(t)},function(){return[[],[]]});function tg(e,t,a){var l=Ce(e)?vi:yo,p=arguments.length<3;return l(e,he(t,4),a,p,zn)}function ng(e,t,a){var l=Ce(e)?fu:yo,p=arguments.length<3;return l(e,he(t,4),a,p,Do)}function rg(e,t){var a=Ce(e)?Ln:Bo;return a(e,Da(he(t,3)))}function ag(e){var t=Ce(e)?Oo:Jp;return t(e)}function ig(e,t,a){(a?_t(e,t,a):t===r)?t=1:t=$e(t);var l=Ce(e)?Cp:Mp;return l(e,t)}function sg(e){var t=Ce(e)?Ap:Zp;return t(e)}function og(e){if(e==null)return 0;if(Tt(e))return za(e)?gr(e):e.length;var t=wt(e);return t==Ie||t==Me?e.size:Ui(e).length}function lg(e,t,a){var l=Ce(e)?yi:Qp;return a&&_t(e,t,a)&&(t=r),l(e,he(t,3))}var cg=Oe(function(e,t){if(e==null)return[];var a=t.length;return a>1&&_t(e,t[0],t[1])?t=[]:a>2&&_t(t[0],t[1],t[2])&&(t=[t[0]]),Mo(e,vt(t,1),[])}),La=Wu||function(){return bt.Date.now()};function dg(e,t){if(typeof t!="function")throw new Xt(u);return e=$e(e),function(){if(--e<1)return t.apply(this,arguments)}}function Gl(e,t,a){return t=a?r:t,t=e&&t==null?e.length:t,Cn(e,ve,r,r,r,r,t)}function Yl(e,t){var a;if(typeof t!="function")throw new Xt(u);return e=$e(e),function(){return--e>0&&(a=t.apply(this,arguments)),e<=1&&(t=r),a}}var ls=Oe(function(e,t,a){var l=A;if(a.length){var p=Dn(a,Nr(ls));l|=ne}return Cn(e,l,t,a,p)}),ql=Oe(function(e,t,a){var l=A|Y;if(a.length){var p=Dn(a,Nr(ql));l|=ne}return Cn(t,l,e,a,p)});function Vl(e,t,a){t=a?r:t;var l=Cn(e,$,r,r,r,r,r,t);return l.placeholder=Vl.placeholder,l}function Kl(e,t,a){t=a?r:t;var l=Cn(e,K,r,r,r,r,r,t);return l.placeholder=Kl.placeholder,l}function Jl(e,t,a){var l,p,h,x,N,C,B=0,z=!1,H=!1,te=!0;if(typeof e!="function")throw new Xt(u);t=nn(t)||0,rt(a)&&(z=!!a.leading,H="maxWait"in a,h=H?gt(nn(a.maxWait)||0,t):h,te="trailing"in a?!!a.trailing:te);function ue(ot){var pn=l,$n=p;return l=p=r,B=ot,x=e.apply($n,pn),x}function me(ot){return B=ot,N=Yr(Le,t),z?ue(ot):x}function Fe(ot){var pn=ot-C,$n=ot-B,hc=t-pn;return H?yt(hc,h-$n):hc}function xe(ot){var pn=ot-C,$n=ot-B;return C===r||pn>=t||pn<0||H&&$n>=h}function Le(){var ot=La();if(xe(ot))return De(ot);N=Yr(Le,Fe(ot))}function De(ot){return N=r,te&&l?ue(ot):(l=p=r,x)}function Wt(){N!==r&&il(N),B=0,l=C=p=N=r}function Ct(){return N===r?x:De(La())}function Ht(){var ot=La(),pn=xe(ot);if(l=arguments,p=this,C=ot,pn){if(N===r)return me(C);if(H)return il(N),N=Yr(Le,t),ue(C)}return N===r&&(N=Yr(Le,t)),x}return Ht.cancel=Wt,Ht.flush=Ct,Ht}var ug=Oe(function(e,t){return Uo(e,1,t)}),pg=Oe(function(e,t,a){return Uo(e,nn(t)||0,a)});function fg(e){return Cn(e,ye)}function Ua(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Xt(u);var a=function(){var l=arguments,p=t?t.apply(this,l):l[0],h=a.cache;if(h.has(p))return h.get(p);var x=e.apply(this,l);return a.cache=h.set(p,x)||h,x};return a.cache=new(Ua.Cache||Sn),a}Ua.Cache=Sn;function Da(e){if(typeof e!="function")throw new Xt(u);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function hg(e){return Yl(2,e)}var gg=ef(function(e,t){t=t.length==1&&Ce(t[0])?nt(t[0],Dt(he())):nt(vt(t,1),Dt(he()));var a=t.length;return Oe(function(l){for(var p=-1,h=yt(l.length,a);++p<h;)l[p]=t[p].call(this,l[p]);return Ut(e,this,l)})}),cs=Oe(function(e,t){var a=Dn(t,Nr(cs));return Cn(e,ne,r,t,a)}),Ml=Oe(function(e,t){var a=Dn(t,Nr(Ml));return Cn(e,fe,r,t,a)}),mg=An(function(e,t){return Cn(e,be,r,r,r,t)});function xg(e,t){if(typeof e!="function")throw new Xt(u);return t=t===r?t:$e(t),Oe(e,t)}function bg(e,t){if(typeof e!="function")throw new Xt(u);return t=t==null?0:gt($e(t),0),Oe(function(a){var l=a[t],p=Gn(a,0,t);return l&&Un(p,l),Ut(e,this,p)})}function vg(e,t,a){var l=!0,p=!0;if(typeof e!="function")throw new Xt(u);return rt(a)&&(l="leading"in a?!!a.leading:l,p="trailing"in a?!!a.trailing:p),Jl(e,t,{leading:l,maxWait:t,trailing:p})}function yg(e){return Gl(e,1)}function wg(e,t){return cs(Vi(t),e)}function jg(){if(!arguments.length)return[];var e=arguments[0];return Ce(e)?e:[e]}function Ng(e){return Qt(e,J)}function Sg(e,t){return t=typeof t=="function"?t:r,Qt(e,J,t)}function _g(e){return Qt(e,w|J)}function Cg(e,t){return t=typeof t=="function"?t:r,Qt(e,w|J,t)}function Ag(e,t){return t==null||Lo(e,t,xt(t))}function un(e,t){return e===t||e!==e&&t!==t}var Eg=$a(Oi),Tg=$a(function(e,t){return e>=t}),sr=Ho(function(){return arguments}())?Ho:function(e){return it(e)&&Ke.call(e,"callee")&&!To.call(e,"callee")},Ce=P.isArray,Rg=co?Dt(co):Lp;function Tt(e){return e!=null&&Ba(e.length)&&!Tn(e)}function st(e){return it(e)&&Tt(e)}function $g(e){return e===!0||e===!1||it(e)&&St(e)==Ge}var Yn=Gu||ys,kg=uo?Dt(uo):Up;function Pg(e){return it(e)&&e.nodeType===1&&!qr(e)}function Fg(e){if(e==null)return!0;if(Tt(e)&&(Ce(e)||typeof e=="string"||typeof e.splice=="function"||Yn(e)||Sr(e)||sr(e)))return!e.length;var t=wt(e);if(t==Ie||t==Me)return!e.size;if(Gr(e))return!Ui(e).length;for(var a in e)if(Ke.call(e,a))return!1;return!0}function Og(e,t){return zr(e,t)}function Ig(e,t,a){a=typeof a=="function"?a:r;var l=a?a(e,t):r;return l===r?zr(e,t,r,a):!!l}function ds(e){if(!it(e))return!1;var t=St(e);return t==Ee||t==X||typeof e.message=="string"&&typeof e.name=="string"&&!qr(e)}function Lg(e){return typeof e=="number"&&$o(e)}function Tn(e){if(!rt(e))return!1;var t=St(e);return t==ze||t==Pt||t==Pe||t==Fn}function Xl(e){return typeof e=="number"&&e==$e(e)}function Ba(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ke}function rt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function it(e){return e!=null&&typeof e=="object"}var Zl=po?Dt(po):Bp;function Ug(e,t){return e===t||Li(e,t,es(t))}function Dg(e,t,a){return a=typeof a=="function"?a:r,Li(e,t,es(t),a)}function Bg(e){return Ql(e)&&e!=+e}function zg(e){if(Sf(e))throw new Se(d);return Go(e)}function Wg(e){return e===null}function Hg(e){return e==null}function Ql(e){return typeof e=="number"||it(e)&&St(e)==dt}function qr(e){if(!it(e)||St(e)!=ut)return!1;var t=fa(e);if(t===null)return!0;var a=Ke.call(t,"constructor")&&t.constructor;return typeof a=="function"&&a instanceof a&&ca.call(a)==Uu}var us=fo?Dt(fo):zp;function Gg(e){return Xl(e)&&e>=-ke&&e<=ke}var ec=ho?Dt(ho):Wp;function za(e){return typeof e=="string"||!Ce(e)&&it(e)&&St(e)==pt}function zt(e){return typeof e=="symbol"||it(e)&&St(e)==mt}var Sr=go?Dt(go):Hp;function Yg(e){return e===r}function qg(e){return it(e)&&wt(e)==Ft}function Vg(e){return it(e)&&St(e)==gn}var Kg=$a(Di),Jg=$a(function(e,t){return e<=t});function tc(e){if(!e)return[];if(Tt(e))return za(e)?cn(e):Et(e);if(Pr&&e[Pr])return Cu(e[Pr]());var t=wt(e),a=t==Ie?Ci:t==Me?sa:_r;return a(e)}function Rn(e){if(!e)return e===0?e:0;if(e=nn(e),e===Ae||e===-Ae){var t=e<0?-1:1;return t*je}return e===e?e:0}function $e(e){var t=Rn(e),a=t%1;return t===t?a?t-a:t:0}function nc(e){return e?nr($e(e),0,ce):0}function nn(e){if(typeof e=="number")return e;if(zt(e))return U;if(rt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=rt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=wo(e);var a=ln.test(e);return a||di.test(e)?cu(e.slice(2),a?2:8):Lt.test(e)?U:+e}function rc(e){return xn(e,Rt(e))}function Mg(e){return e?nr($e(e),-ke,ke):e===0?e:0}function Ve(e){return e==null?"":Bt(e)}var Xg=wr(function(e,t){if(Gr(t)||Tt(t)){xn(t,xt(t),e);return}for(var a in t)Ke.call(t,a)&&Ur(e,a,t[a])}),ac=wr(function(e,t){xn(t,Rt(t),e)}),Wa=wr(function(e,t,a,l){xn(t,Rt(t),e,l)}),Zg=wr(function(e,t,a,l){xn(t,xt(t),e,l)}),Qg=An(ki);function e0(e,t){var a=yr(e);return t==null?a:Io(a,t)}var t0=Oe(function(e,t){e=Xe(e);var a=-1,l=t.length,p=l>2?t[2]:r;for(p&&_t(t[0],t[1],p)&&(l=1);++a<l;)for(var h=t[a],x=Rt(h),N=-1,C=x.length;++N<C;){var B=x[N],z=e[B];(z===r||un(z,xr[B])&&!Ke.call(e,B))&&(e[B]=h[B])}return e}),n0=Oe(function(e){return e.push(r,wl),Ut(ic,r,e)});function r0(e,t){return xo(e,he(t,3),mn)}function a0(e,t){return xo(e,he(t,3),Fi)}function i0(e,t){return e==null?e:Pi(e,he(t,3),Rt)}function s0(e,t){return e==null?e:zo(e,he(t,3),Rt)}function o0(e,t){return e&&mn(e,he(t,3))}function l0(e,t){return e&&Fi(e,he(t,3))}function c0(e){return e==null?[]:Na(e,xt(e))}function d0(e){return e==null?[]:Na(e,Rt(e))}function ps(e,t,a){var l=e==null?r:rr(e,t);return l===r?a:l}function u0(e,t){return e!=null&&Sl(e,t,Pp)}function fs(e,t){return e!=null&&Sl(e,t,Fp)}var p0=ml(function(e,t,a){t!=null&&typeof t.toString!="function"&&(t=da.call(t)),e[t]=a},gs($t)),f0=ml(function(e,t,a){t!=null&&typeof t.toString!="function"&&(t=da.call(t)),Ke.call(e,t)?e[t].push(a):e[t]=[a]},he),h0=Oe(Br);function xt(e){return Tt(e)?Fo(e):Ui(e)}function Rt(e){return Tt(e)?Fo(e,!0):Gp(e)}function g0(e,t){var a={};return t=he(t,3),mn(e,function(l,p,h){_n(a,t(l,p,h),l)}),a}function m0(e,t){var a={};return t=he(t,3),mn(e,function(l,p,h){_n(a,p,t(l,p,h))}),a}var x0=wr(function(e,t,a){Sa(e,t,a)}),ic=wr(function(e,t,a,l){Sa(e,t,a,l)}),b0=An(function(e,t){var a={};if(e==null)return a;var l=!1;t=nt(t,function(h){return h=Hn(h,e),l||(l=h.length>1),h}),xn(e,Zi(e),a),l&&(a=Qt(a,w|I|J,pf));for(var p=t.length;p--;)Gi(a,t[p]);return a});function v0(e,t){return sc(e,Da(he(t)))}var y0=An(function(e,t){return e==null?{}:qp(e,t)});function sc(e,t){if(e==null)return{};var a=nt(Zi(e),function(l){return[l]});return t=he(t),Xo(e,a,function(l,p){return t(l,p[0])})}function w0(e,t,a){t=Hn(t,e);var l=-1,p=t.length;for(p||(p=1,e=r);++l<p;){var h=e==null?r:e[bn(t[l])];h===r&&(l=p,h=a),e=Tn(h)?h.call(e):h}return e}function j0(e,t,a){return e==null?e:Wr(e,t,a)}function N0(e,t,a,l){return l=typeof l=="function"?l:r,e==null?e:Wr(e,t,a,l)}var oc=vl(xt),lc=vl(Rt);function S0(e,t,a){var l=Ce(e),p=l||Yn(e)||Sr(e);if(t=he(t,4),a==null){var h=e&&e.constructor;p?a=l?new h:[]:rt(e)?a=Tn(h)?yr(fa(e)):{}:a={}}return(p?Mt:mn)(e,function(x,N,C){return t(a,x,N,C)}),a}function _0(e,t){return e==null?!0:Gi(e,t)}function C0(e,t,a){return e==null?e:nl(e,t,Vi(a))}function A0(e,t,a,l){return l=typeof l=="function"?l:r,e==null?e:nl(e,t,Vi(a),l)}function _r(e){return e==null?[]:_i(e,xt(e))}function E0(e){return e==null?[]:_i(e,Rt(e))}function T0(e,t,a){return a===r&&(a=t,t=r),a!==r&&(a=nn(a),a=a===a?a:0),t!==r&&(t=nn(t),t=t===t?t:0),nr(nn(e),t,a)}function R0(e,t,a){return t=Rn(t),a===r?(a=t,t=0):a=Rn(a),e=nn(e),Op(e,t,a)}function $0(e,t,a){if(a&&typeof a!="boolean"&&_t(e,t,a)&&(t=a=r),a===r&&(typeof t=="boolean"?(a=t,t=r):typeof e=="boolean"&&(a=e,e=r)),e===r&&t===r?(e=0,t=1):(e=Rn(e),t===r?(t=e,e=0):t=Rn(t)),e>t){var l=e;e=t,t=l}if(a||e%1||t%1){var p=ko();return yt(e+p*(t-e+lu("1e-"+((p+"").length-1))),t)}return zi(e,t)}var k0=jr(function(e,t,a){return t=t.toLowerCase(),e+(a?cc(t):t)});function cc(e){return hs(Ve(e).toLowerCase())}function dc(e){return e=Ve(e),e&&e.replace(Pd,wu).replace(Zd,"")}function P0(e,t,a){e=Ve(e),t=Bt(t);var l=e.length;a=a===r?l:nr($e(a),0,l);var p=a;return a-=t.length,a>=0&&e.slice(a,p)==t}function F0(e){return e=Ve(e),e&&wn.test(e)?e.replace(an,ju):e}function O0(e){return e=Ve(e),e&&Xn.test(e)?e.replace(Kt,"\\$&"):e}var I0=jr(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}),L0=jr(function(e,t,a){return e+(a?" ":"")+t.toLowerCase()}),U0=fl("toLowerCase");function D0(e,t,a){e=Ve(e),t=$e(t);var l=t?gr(e):0;if(!t||l>=t)return e;var p=(t-l)/2;return Ra(xa(p),a)+e+Ra(ma(p),a)}function B0(e,t,a){e=Ve(e),t=$e(t);var l=t?gr(e):0;return t&&l<t?e+Ra(t-l,a):e}function z0(e,t,a){e=Ve(e),t=$e(t);var l=t?gr(e):0;return t&&l<t?Ra(t-l,a)+e:e}function W0(e,t,a){return a||t==null?t=0:t&&(t=+t),Ku(Ve(e).replace(jn,""),t||0)}function H0(e,t,a){return(a?_t(e,t,a):t===r)?t=1:t=$e(t),Wi(Ve(e),t)}function G0(){var e=arguments,t=Ve(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Y0=jr(function(e,t,a){return e+(a?"_":"")+t.toLowerCase()});function q0(e,t,a){return a&&typeof a!="number"&&_t(e,t,a)&&(t=a=r),a=a===r?ce:a>>>0,a?(e=Ve(e),e&&(typeof t=="string"||t!=null&&!us(t))&&(t=Bt(t),!t&&hr(e))?Gn(cn(e),0,a):e.split(t,a)):[]}var V0=jr(function(e,t,a){return e+(a?" ":"")+hs(t)});function K0(e,t,a){return e=Ve(e),a=a==null?0:nr($e(a),0,e.length),t=Bt(t),e.slice(a,a+t.length)==t}function J0(e,t,a){var l=f.templateSettings;a&&_t(e,t,a)&&(t=r),e=Ve(e),t=Wa({},t,l,yl);var p=Wa({},t.imports,l.imports,yl),h=xt(p),x=_i(p,h),N,C,B=0,z=t.interpolate||ta,H="__p += '",te=Ai((t.escape||ta).source+"|"+z.source+"|"+(z===In?Ye:ta).source+"|"+(t.evaluate||ta).source+"|$","g"),ue="//# sourceURL="+(Ke.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ru+"]")+`
`;e.replace(te,function(xe,Le,De,Wt,Ct,Ht){return De||(De=Wt),H+=e.slice(B,Ht).replace(Fd,Nu),Le&&(N=!0,H+=`' +
__e(`+Le+`) +
'`),Ct&&(C=!0,H+=`';
`+Ct+`;
__p += '`),De&&(H+=`' +
((__t = (`+De+`)) == null ? '' : __t) +
'`),B=Ht+xe.length,xe}),H+=`';
`;var me=Ke.call(t,"variable")&&t.variable;if(!me)H=`with (obj) {
`+H+`
}
`;else if(we.test(me))throw new Se(m);H=(C?H.replace(We,""):H).replace(He,"$1").replace(Ot,"$1;"),H="function("+(me||"obj")+`) {
`+(me?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(N?", __e = _.escape":"")+(C?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+H+`return __p
}`;var Fe=pc(function(){return qe(h,ue+"return "+H).apply(r,x)});if(Fe.source=H,ds(Fe))throw Fe;return Fe}function M0(e){return Ve(e).toLowerCase()}function X0(e){return Ve(e).toUpperCase()}function Z0(e,t,a){if(e=Ve(e),e&&(a||t===r))return wo(e);if(!e||!(t=Bt(t)))return e;var l=cn(e),p=cn(t),h=jo(l,p),x=No(l,p)+1;return Gn(l,h,x).join("")}function Q0(e,t,a){if(e=Ve(e),e&&(a||t===r))return e.slice(0,_o(e)+1);if(!e||!(t=Bt(t)))return e;var l=cn(e),p=No(l,cn(t))+1;return Gn(l,0,p).join("")}function em(e,t,a){if(e=Ve(e),e&&(a||t===r))return e.replace(jn,"");if(!e||!(t=Bt(t)))return e;var l=cn(e),p=jo(l,cn(t));return Gn(l,p).join("")}function tm(e,t){var a=Re,l=E;if(rt(t)){var p="separator"in t?t.separator:p;a="length"in t?$e(t.length):a,l="omission"in t?Bt(t.omission):l}e=Ve(e);var h=e.length;if(hr(e)){var x=cn(e);h=x.length}if(a>=h)return e;var N=a-gr(l);if(N<1)return l;var C=x?Gn(x,0,N).join(""):e.slice(0,N);if(p===r)return C+l;if(x&&(N+=C.length-N),us(p)){if(e.slice(N).search(p)){var B,z=C;for(p.global||(p=Ai(p.source,Ve(_.exec(p))+"g")),p.lastIndex=0;B=p.exec(z);)var H=B.index;C=C.slice(0,H===r?N:H)}}else if(e.indexOf(Bt(p),N)!=N){var te=C.lastIndexOf(p);te>-1&&(C=C.slice(0,te))}return C+l}function nm(e){return e=Ve(e),e&&qt.test(e)?e.replace(Nt,Ru):e}var rm=jr(function(e,t,a){return e+(a?" ":"")+t.toUpperCase()}),hs=fl("toUpperCase");function uc(e,t,a){return e=Ve(e),t=a?r:t,t===r?_u(e)?Pu(e):mu(e):e.match(t)||[]}var pc=Oe(function(e,t){try{return Ut(e,r,t)}catch(a){return ds(a)?a:new Se(a)}}),am=An(function(e,t){return Mt(t,function(a){a=bn(a),_n(e,a,ls(e[a],e))}),e});function im(e){var t=e==null?0:e.length,a=he();return e=t?nt(e,function(l){if(typeof l[1]!="function")throw new Xt(u);return[a(l[0]),l[1]]}):[],Oe(function(l){for(var p=-1;++p<t;){var h=e[p];if(Ut(h[0],this,l))return Ut(h[1],this,l)}})}function sm(e){return Rp(Qt(e,w))}function gs(e){return function(){return e}}function om(e,t){return e==null||e!==e?t:e}var lm=gl(),cm=gl(!0);function $t(e){return e}function ms(e){return Yo(typeof e=="function"?e:Qt(e,w))}function dm(e){return Vo(Qt(e,w))}function um(e,t){return Ko(e,Qt(t,w))}var pm=Oe(function(e,t){return function(a){return Br(a,e,t)}}),fm=Oe(function(e,t){return function(a){return Br(e,a,t)}});function xs(e,t,a){var l=xt(t),p=Na(t,l);a==null&&!(rt(t)&&(p.length||!l.length))&&(a=t,t=e,e=this,p=Na(t,xt(t)));var h=!(rt(a)&&"chain"in a)||!!a.chain,x=Tn(e);return Mt(p,function(N){var C=t[N];e[N]=C,x&&(e.prototype[N]=function(){var B=this.__chain__;if(h||B){var z=e(this.__wrapped__),H=z.__actions__=Et(this.__actions__);return H.push({func:C,args:arguments,thisArg:e}),z.__chain__=B,z}return C.apply(e,Un([this.value()],arguments))})}),e}function hm(){return bt._===this&&(bt._=Du),this}function bs(){}function gm(e){return e=$e(e),Oe(function(t){return Jo(t,e)})}var mm=Ji(nt),xm=Ji(mo),bm=Ji(yi);function fc(e){return ns(e)?wi(bn(e)):Vp(e)}function vm(e){return function(t){return e==null?r:rr(e,t)}}var ym=xl(),wm=xl(!0);function vs(){return[]}function ys(){return!1}function jm(){return{}}function Nm(){return""}function Sm(){return!0}function _m(e,t){if(e=$e(e),e<1||e>ke)return[];var a=ce,l=yt(e,ce);t=he(t),e-=ce;for(var p=Si(l,t);++a<e;)t(a);return p}function Cm(e){return Ce(e)?nt(e,bn):zt(e)?[e]:Et(Pl(Ve(e)))}function Am(e){var t=++Lu;return Ve(e)+t}var Em=Ta(function(e,t){return e+t},0),Tm=Mi("ceil"),Rm=Ta(function(e,t){return e/t},1),$m=Mi("floor");function km(e){return e&&e.length?ja(e,$t,Oi):r}function Pm(e,t){return e&&e.length?ja(e,he(t,2),Oi):r}function Fm(e){return vo(e,$t)}function Om(e,t){return vo(e,he(t,2))}function Im(e){return e&&e.length?ja(e,$t,Di):r}function Lm(e,t){return e&&e.length?ja(e,he(t,2),Di):r}var Um=Ta(function(e,t){return e*t},1),Dm=Mi("round"),Bm=Ta(function(e,t){return e-t},0);function zm(e){return e&&e.length?Ni(e,$t):0}function Wm(e,t){return e&&e.length?Ni(e,he(t,2)):0}return f.after=dg,f.ary=Gl,f.assign=Xg,f.assignIn=ac,f.assignInWith=Wa,f.assignWith=Zg,f.at=Qg,f.before=Yl,f.bind=ls,f.bindAll=am,f.bindKey=ql,f.castArray=jg,f.chain=zl,f.chunk=$f,f.compact=kf,f.concat=Pf,f.cond=im,f.conforms=sm,f.constant=gs,f.countBy=zh,f.create=e0,f.curry=Vl,f.curryRight=Kl,f.debounce=Jl,f.defaults=t0,f.defaultsDeep=n0,f.defer=ug,f.delay=pg,f.difference=Ff,f.differenceBy=Of,f.differenceWith=If,f.drop=Lf,f.dropRight=Uf,f.dropRightWhile=Df,f.dropWhile=Bf,f.fill=zf,f.filter=Hh,f.flatMap=qh,f.flatMapDeep=Vh,f.flatMapDepth=Kh,f.flatten=Ll,f.flattenDeep=Wf,f.flattenDepth=Hf,f.flip=fg,f.flow=lm,f.flowRight=cm,f.fromPairs=Gf,f.functions=c0,f.functionsIn=d0,f.groupBy=Jh,f.initial=qf,f.intersection=Vf,f.intersectionBy=Kf,f.intersectionWith=Jf,f.invert=p0,f.invertBy=f0,f.invokeMap=Xh,f.iteratee=ms,f.keyBy=Zh,f.keys=xt,f.keysIn=Rt,f.map=Ia,f.mapKeys=g0,f.mapValues=m0,f.matches=dm,f.matchesProperty=um,f.memoize=Ua,f.merge=x0,f.mergeWith=ic,f.method=pm,f.methodOf=fm,f.mixin=xs,f.negate=Da,f.nthArg=gm,f.omit=b0,f.omitBy=v0,f.once=hg,f.orderBy=Qh,f.over=mm,f.overArgs=gg,f.overEvery=xm,f.overSome=bm,f.partial=cs,f.partialRight=Ml,f.partition=eg,f.pick=y0,f.pickBy=sc,f.property=fc,f.propertyOf=vm,f.pull=Qf,f.pullAll=Dl,f.pullAllBy=eh,f.pullAllWith=th,f.pullAt=nh,f.range=ym,f.rangeRight=wm,f.rearg=mg,f.reject=rg,f.remove=rh,f.rest=xg,f.reverse=ss,f.sampleSize=ig,f.set=j0,f.setWith=N0,f.shuffle=sg,f.slice=ah,f.sortBy=cg,f.sortedUniq=uh,f.sortedUniqBy=ph,f.split=q0,f.spread=bg,f.tail=fh,f.take=hh,f.takeRight=gh,f.takeRightWhile=mh,f.takeWhile=xh,f.tap=kh,f.throttle=vg,f.thru=Oa,f.toArray=tc,f.toPairs=oc,f.toPairsIn=lc,f.toPath=Cm,f.toPlainObject=rc,f.transform=S0,f.unary=yg,f.union=bh,f.unionBy=vh,f.unionWith=yh,f.uniq=wh,f.uniqBy=jh,f.uniqWith=Nh,f.unset=_0,f.unzip=os,f.unzipWith=Bl,f.update=C0,f.updateWith=A0,f.values=_r,f.valuesIn=E0,f.without=Sh,f.words=uc,f.wrap=wg,f.xor=_h,f.xorBy=Ch,f.xorWith=Ah,f.zip=Eh,f.zipObject=Th,f.zipObjectDeep=Rh,f.zipWith=$h,f.entries=oc,f.entriesIn=lc,f.extend=ac,f.extendWith=Wa,xs(f,f),f.add=Em,f.attempt=pc,f.camelCase=k0,f.capitalize=cc,f.ceil=Tm,f.clamp=T0,f.clone=Ng,f.cloneDeep=_g,f.cloneDeepWith=Cg,f.cloneWith=Sg,f.conformsTo=Ag,f.deburr=dc,f.defaultTo=om,f.divide=Rm,f.endsWith=P0,f.eq=un,f.escape=F0,f.escapeRegExp=O0,f.every=Wh,f.find=Gh,f.findIndex=Ol,f.findKey=r0,f.findLast=Yh,f.findLastIndex=Il,f.findLastKey=a0,f.floor=$m,f.forEach=Wl,f.forEachRight=Hl,f.forIn=i0,f.forInRight=s0,f.forOwn=o0,f.forOwnRight=l0,f.get=ps,f.gt=Eg,f.gte=Tg,f.has=u0,f.hasIn=fs,f.head=Ul,f.identity=$t,f.includes=Mh,f.indexOf=Yf,f.inRange=R0,f.invoke=h0,f.isArguments=sr,f.isArray=Ce,f.isArrayBuffer=Rg,f.isArrayLike=Tt,f.isArrayLikeObject=st,f.isBoolean=$g,f.isBuffer=Yn,f.isDate=kg,f.isElement=Pg,f.isEmpty=Fg,f.isEqual=Og,f.isEqualWith=Ig,f.isError=ds,f.isFinite=Lg,f.isFunction=Tn,f.isInteger=Xl,f.isLength=Ba,f.isMap=Zl,f.isMatch=Ug,f.isMatchWith=Dg,f.isNaN=Bg,f.isNative=zg,f.isNil=Hg,f.isNull=Wg,f.isNumber=Ql,f.isObject=rt,f.isObjectLike=it,f.isPlainObject=qr,f.isRegExp=us,f.isSafeInteger=Gg,f.isSet=ec,f.isString=za,f.isSymbol=zt,f.isTypedArray=Sr,f.isUndefined=Yg,f.isWeakMap=qg,f.isWeakSet=Vg,f.join=Mf,f.kebabCase=I0,f.last=tn,f.lastIndexOf=Xf,f.lowerCase=L0,f.lowerFirst=U0,f.lt=Kg,f.lte=Jg,f.max=km,f.maxBy=Pm,f.mean=Fm,f.meanBy=Om,f.min=Im,f.minBy=Lm,f.stubArray=vs,f.stubFalse=ys,f.stubObject=jm,f.stubString=Nm,f.stubTrue=Sm,f.multiply=Um,f.nth=Zf,f.noConflict=hm,f.noop=bs,f.now=La,f.pad=D0,f.padEnd=B0,f.padStart=z0,f.parseInt=W0,f.random=$0,f.reduce=tg,f.reduceRight=ng,f.repeat=H0,f.replace=G0,f.result=w0,f.round=Dm,f.runInContext=S,f.sample=ag,f.size=og,f.snakeCase=Y0,f.some=lg,f.sortedIndex=ih,f.sortedIndexBy=sh,f.sortedIndexOf=oh,f.sortedLastIndex=lh,f.sortedLastIndexBy=ch,f.sortedLastIndexOf=dh,f.startCase=V0,f.startsWith=K0,f.subtract=Bm,f.sum=zm,f.sumBy=Wm,f.template=J0,f.times=_m,f.toFinite=Rn,f.toInteger=$e,f.toLength=nc,f.toLower=M0,f.toNumber=nn,f.toSafeInteger=Mg,f.toString=Ve,f.toUpper=X0,f.trim=Z0,f.trimEnd=Q0,f.trimStart=em,f.truncate=tm,f.unescape=nm,f.uniqueId=Am,f.upperCase=rm,f.upperFirst=hs,f.each=Wl,f.eachRight=Hl,f.first=Ul,xs(f,function(){var e={};return mn(f,function(t,a){Ke.call(f.prototype,a)||(e[a]=t)}),e}(),{chain:!1}),f.VERSION=o,Mt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){f[e].placeholder=f}),Mt(["drop","take"],function(e,t){Ue.prototype[e]=function(a){a=a===r?1:gt($e(a),0);var l=this.__filtered__&&!t?new Ue(this):this.clone();return l.__filtered__?l.__takeCount__=yt(a,l.__takeCount__):l.__views__.push({size:yt(a,ce),type:e+(l.__dir__<0?"Right":"")}),l},Ue.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),Mt(["filter","map","takeWhile"],function(e,t){var a=t+1,l=a==R||a==se;Ue.prototype[e]=function(p){var h=this.clone();return h.__iteratees__.push({iteratee:he(p,3),type:a}),h.__filtered__=h.__filtered__||l,h}}),Mt(["head","last"],function(e,t){var a="take"+(t?"Right":"");Ue.prototype[e]=function(){return this[a](1).value()[0]}}),Mt(["initial","tail"],function(e,t){var a="drop"+(t?"":"Right");Ue.prototype[e]=function(){return this.__filtered__?new Ue(this):this[a](1)}}),Ue.prototype.compact=function(){return this.filter($t)},Ue.prototype.find=function(e){return this.filter(e).head()},Ue.prototype.findLast=function(e){return this.reverse().find(e)},Ue.prototype.invokeMap=Oe(function(e,t){return typeof e=="function"?new Ue(this):this.map(function(a){return Br(a,e,t)})}),Ue.prototype.reject=function(e){return this.filter(Da(he(e)))},Ue.prototype.slice=function(e,t){e=$e(e);var a=this;return a.__filtered__&&(e>0||t<0)?new Ue(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),t!==r&&(t=$e(t),a=t<0?a.dropRight(-t):a.take(t-e)),a)},Ue.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Ue.prototype.toArray=function(){return this.take(ce)},mn(Ue.prototype,function(e,t){var a=/^(?:filter|find|map|reject)|While$/.test(t),l=/^(?:head|last)$/.test(t),p=f[l?"take"+(t=="last"?"Right":""):t],h=l||/^find/.test(t);p&&(f.prototype[t]=function(){var x=this.__wrapped__,N=l?[1]:arguments,C=x instanceof Ue,B=N[0],z=C||Ce(x),H=function(Le){var De=p.apply(f,Un([Le],N));return l&&te?De[0]:De};z&&a&&typeof B=="function"&&B.length!=1&&(C=z=!1);var te=this.__chain__,ue=!!this.__actions__.length,me=h&&!te,Fe=C&&!ue;if(!h&&z){x=Fe?x:new Ue(this);var xe=e.apply(x,N);return xe.__actions__.push({func:Oa,args:[H],thisArg:r}),new Zt(xe,te)}return me&&Fe?e.apply(this,N):(xe=this.thru(H),me?l?xe.value()[0]:xe.value():xe)})}),Mt(["pop","push","shift","sort","splice","unshift"],function(e){var t=oa[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",l=/^(?:pop|shift)$/.test(e);f.prototype[e]=function(){var p=arguments;if(l&&!this.__chain__){var h=this.value();return t.apply(Ce(h)?h:[],p)}return this[a](function(x){return t.apply(Ce(x)?x:[],p)})}}),mn(Ue.prototype,function(e,t){var a=f[t];if(a){var l=a.name+"";Ke.call(vr,l)||(vr[l]=[]),vr[l].push({name:t,func:a})}}),vr[Ea(r,Y).name]=[{name:"wrapper",func:r}],Ue.prototype.clone=tp,Ue.prototype.reverse=np,Ue.prototype.value=rp,f.prototype.at=Ph,f.prototype.chain=Fh,f.prototype.commit=Oh,f.prototype.next=Ih,f.prototype.plant=Uh,f.prototype.reverse=Dh,f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=Bh,f.prototype.first=f.prototype.head,Pr&&(f.prototype[Pr]=Lh),f},mr=Fu();Zn?((Zn.exports=mr)._=mr,mi._=mr):bt._=mr}).call(K1)}(Jr,Jr.exports)),Jr.exports}var M1=J1();const X1="/x-pense-app/assets/bitcoin-DEGqceNT.png",Z1="/x-pense-app/assets/ethereum-CuEFbPJh.png",Q1="/x-pense-app/assets/usdc-LEAjTsRZ.png",ev=({darkMode:i,investments:s,setInvestments:r,amounts:o,setAmounts:c,marketCaps:d,setMarketCaps:u,formatCurrency:m,addedInvestments:g,setAddedInvestments:j})=>{const v=ur(),[w,I]=y.useState(!1),[J,T]=y.useState(""),[k,A]=y.useState({}),[Y,V]=y.useState({}),[$,K]=y.useState(!1);y.useEffect(()=>{(async()=>{var M,se,Ae,ke,je,U;try{I(!0);const ce=await ge.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),pe=await ge.get("https://api.coinbase.com/v2/prices/ETH-USD/spot"),W=await ge.get("https://api.coinbase.com/v2/prices/USDC-USD/spot"),ae=((se=(M=ce.data)==null?void 0:M.bitcoin)==null?void 0:se.usd)||0,re=parseFloat((ke=(Ae=pe.data)==null?void 0:Ae.data)==null?void 0:ke.amount)||0,le=parseFloat((U=(je=W.data)==null?void 0:je.data)==null?void 0:U.amount)||1,Pe=s.reduce((X,Ee)=>(X[Ee.id]=Ee.pricePerUnit,X),{}),Ge=[{id:"bitcoin",name:"Bitcoin",type:"Cryptocurrency",pricePerUnit:ae},{id:"ethereum",name:"Ethereum",type:"Cryptocurrency",pricePerUnit:re},{id:"usd-coin",name:"USDC",type:"Stablecoin",pricePerUnit:le}],ee={};Ge.forEach(X=>{const Ee=Pe[X.id];Ee&&Ee!==X.pricePerUnit&&(ee[X.id]=X.pricePerUnit>Ee?"up":"down")}),A(ee),r(Ge),c(Ge.map(()=>0)),setTimeout(()=>A({}),3e3)}catch(ce){console.error("Error fetching investments",ce),T("❌ Failed to fetch live prices. Please try again."),setTimeout(()=>T(""),3e3)}finally{I(!1)}})()},[r,c]),y.useEffect(()=>{const R=async()=>{try{const M=s.map(Ae=>Ae.id).join(","),se=await ge.get("http://localhost:5001/api/coins/markets",{params:{ids:M}});if(console.log("INVESTMENTS COMPONENTS"),console.log("Market cap response:",se.data),Array.isArray(se.data)){const Ae=se.data.reduce((ke,je)=>(ke[je.id]=je.market_cap,ke),{});console.log("Market cap data:",Ae),u(Ae)}else console.error("Expected an array but got:",se.data)}catch(M){console.error("Error fetching market cap data:",M)}};s.length>0&&R()},[s]);const ne=M1.debounce((R,M)=>{const se=[...o],Ae=parseFloat(M);isNaN(Ae)||(se[R]=Ae,c(se))},300),fe=(R,M)=>(R*M).toFixed(2),ve=async R=>{const M=s[R],se=o[R];if(!se||se<=0){T("⚠️ Please enter a valid amount greater than 0"),setTimeout(()=>T(""),3e3);return}I(!0);const Ae=fe(se,M.pricePerUnit),ke={...M,amount:se,totalPrice:Ae};try{const je=g.findIndex(ce=>ce.name===ke.name);if(je!==-1){const ce=g[je],pe=ce.amount+se,W=fe(pe,M.pricePerUnit),ae=await ge.put(`http://localhost:5001/investments/${ce.id}`,{amount:pe,totalPrice:W},{headers:{"Content-Type":"application/json"}}),re=[...g];re[je]={...ce,amount:pe,totalPrice:W},j(re),T(`💰 Updated ${M.name} investment successfully!`)}else{const ce=await ge.post("http://localhost:5001/investments",ke,{headers:{"Content-Type":"application/json"}});j([...g,ke]),T(`🚀 Added ${M.name} investment successfully!`)}V({...Y,[R]:!0}),setTimeout(()=>{V({...Y,[R]:!1})},1e3);const U=[...o];U[R]=0,c(U),setTimeout(()=>T(""),3e3),setTimeout(()=>v("/dashboard"),2e3)}catch(je){console.error("Error adding/updating investment:",je),T("❌ Failed to add investment. Please try again."),setTimeout(()=>T(""),3e3)}finally{I(!1)}},be=R=>{var se;const M=[...o];M[R]=0,c(M),T(`🔄 Reset ${(se=s[R])==null?void 0:se.name} amount`),setTimeout(()=>T(""),2e3)},ye=async()=>{var R,M,se,Ae,ke,je;K(!0);try{const U=await ge.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),ce=await ge.get("https://api.coinbase.com/v2/prices/ETH-USD/spot"),pe=await ge.get("https://api.coinbase.com/v2/prices/USDC-USD/spot"),W=((M=(R=U.data)==null?void 0:R.bitcoin)==null?void 0:M.usd)||0,ae=parseFloat((Ae=(se=ce.data)==null?void 0:se.data)==null?void 0:Ae.amount)||0,re=parseFloat((je=(ke=pe.data)==null?void 0:ke.data)==null?void 0:je.amount)||1;r([{id:"bitcoin",name:"Bitcoin",type:"Cryptocurrency",pricePerUnit:W},{id:"ethereum",name:"Ethereum",type:"Cryptocurrency",pricePerUnit:ae},{id:"usd-coin",name:"USDC",type:"Stablecoin",pricePerUnit:re}]),T("🔄 Prices refreshed successfully!"),setTimeout(()=>T(""),3e3)}catch(U){console.error("Error refreshing prices:",U),T("❌ Failed to refresh prices. Please try again."),setTimeout(()=>T(""),3e3)}finally{K(!1)}},Re=R=>{if(!R)return null;switch(R.toLowerCase()){case"bitcoin":return n.jsx("img",{src:X1,alt:"Bitcoin",className:"crypto-icon",style:{width:"24px",height:"24px"}});case"ethereum":return n.jsx("img",{src:Z1,alt:"Ethereum",className:"crypto-icon",style:{width:"24px",height:"24px"}});case"usdc":return n.jsx("img",{src:Q1,alt:"USDC",className:"crypto-icon",style:{width:"24px",height:"24px"}});default:return n.jsx("div",{className:"crypto-placeholder",children:"💰"})}},E=R=>R>=1e12?`${(R/1e12).toFixed(2)} Trillion`:R>=1e9?`${(R/1e9).toFixed(2)} Billion`:R.toLocaleString(),Q=R=>{const M=k[R];return M==="up"?"📈":M==="down"?"📉":""},oe=R=>{const M=k[R];return M==="up"?"price-up":M==="down"?"price-down":""};return n.jsxs("div",{className:"investments-container",children:[n.jsx("style",{jsx:!0,children:`
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
                    background: ${i?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
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
                    color: ${i?"#e2e8f0":"#2d3748"};
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
                    background: ${i?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .enhanced-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: ${i?"#2d3748":"#ffffff"};
                    table-layout: fixed;
                }

                .enhanced-table th {
                    background: ${i?"#4a5568":"#667eea"};
                    color: white;
                    padding: 18px 15px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 1rem;
                    border-bottom: 3px solid ${i?"#2d3748":"#5a67d8"};
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
                    border-bottom: 1px solid ${i?"#4a5568":"#e2e8f0"};
                    color: ${i?"#e2e8f0":"#2d3748"};
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
                    background: ${i?"#4a5568":"#f7fafc"};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-row.animate {
                    animation: rowSuccess 1s ease;
                }

                @keyframes rowSuccess {
                    0%, 100% { background: ${i?"#2d3748":"#ffffff"}; }
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
                    color: ${i?"#68d391":"#38a169"};
                }

                .amount-input {
                    width: 100%;
                    max-width: 80px;
                    padding: 8px 10px;
                    border: 2px solid ${i?"#4a5568":"#e2e8f0"};
                    border-radius: 8px;
                    background: ${i?"#2d3748":"#ffffff"};
                    color: ${i?"#e2e8f0":"#2d3748"};
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
                    color: ${i?"#e2e8f0":"#2d3748"};
                }

                .large-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid ${i?"#4a5568":"#e2e8f0"};
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
                        background: ${i?"#2d3748":"#ffffff"};
                        border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
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
                        0%, 100% { background: ${i?"#2d3748":"#ffffff"}; }
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
                        color: ${i?"#e2e8f0":"#2d3748"};
                        margin: 0;
                    }

                    .card-crypto-symbol {
                        font-size: 0.9rem;
                        font-weight: 600;
                        color: ${i?"#a0aec0":"#4a5568"};
                        text-transform: uppercase;
                    }

                    .card-price {
                        font-size: 1.3rem;
                        font-weight: 700;
                        color: ${i?"#68d391":"#38a169"};
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
                        color: ${i?"#a0aec0":"#4a5568"};
                        font-size: 0.9rem;
                    }

                    .card-value {
                        color: ${i?"#e2e8f0":"#2d3748"};
                        font-size: 0.95rem;
                        font-weight: 500;
                    }

                    .card-market-cap {
                        color: ${i?"#68d391":"#38a169"};
                        font-weight: 600;
                    }

                    .card-input-section {
                        background: ${i?"#4a5568":"#f7fafc"};
                        border-radius: 12px;
                        padding: 20px;
                        margin-bottom: 20px;
                    }

                    .input-label {
                        font-weight: 600;
                        color: ${i?"#e2e8f0":"#2d3748"};
                        margin-bottom: 10px;
                        display: block;
                        font-size: 1rem;
                    }

                    .amount-input-mobile {
                        width: 100%;
                        padding: 15px;
                        border: 2px solid ${i?"#4a5568":"#e2e8f0"};
                        border-radius: 10px;
                        background: ${i?"#2d3748":"#ffffff"};
                        color: ${i?"#e2e8f0":"#2d3748"};
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
                        background: ${i?"#2d3748":"#ffffff"};
                        border-radius: 15px;
                        border: ${i?"2px solid #4a5568":"2px solid #e2e8f0"};
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
            `}),n.jsxs("div",{className:"investments-header",children:[n.jsx("h5",{children:"🚀 Crypto Investments"}),n.jsx("p",{className:"investments-subtitle",children:"Invest in the future with real-time market data"})]}),J&&n.jsx("div",{className:"success-message",children:J}),n.jsxs("div",{className:"control-section",children:[n.jsxs("div",{className:"live-indicator",children:[n.jsx("span",{className:"live-badge",children:"Live"}),n.jsx("span",{children:"📊 Make Informed Decisions With Live Crypto Updates"})]}),n.jsxs("button",{className:"refresh-button",onClick:ye,disabled:$,children:[$?n.jsx("span",{className:"loading-spinner"}):"🔄",$?"Refreshing...":"Refresh Prices"]})]}),n.jsx("div",{className:"table-container",children:w&&s.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading investment data..."})]}):n.jsxs(n.Fragment,{children:[w&&n.jsx("div",{className:"loading-overlay",children:n.jsx("div",{className:"large-spinner"})}),n.jsxs("table",{className:"enhanced-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Symbol"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Market Cap"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:s.map((R,M)=>n.jsxs("tr",{className:`table-row ${Y[M]?"animate":""}`,children:[n.jsxs("td",{className:"crypto-name-cell",children:[Re(R.name),n.jsx("span",{children:R.name})]}),n.jsx("td",{children:n.jsx("span",{style:{fontWeight:"600",textTransform:"uppercase",fontSize:"0.9rem"},children:R.id==="bitcoin"?"BTC":R.id==="ethereum"?"ETH":R.id==="usd-coin"?"USDC":R.name.substring(0,3).toUpperCase()})}),n.jsx("td",{children:n.jsx("span",{className:`type-badge ${R.type==="Cryptocurrency"?"type-crypto":"type-stablecoin"}`,children:R.type==="Cryptocurrency"?"Crypto":"Stable"})}),n.jsxs("td",{className:`price-cell ${oe(R.id)}`,children:[n.jsx("span",{children:m(R.pricePerUnit)}),n.jsx("span",{children:Q(R.id)})]}),n.jsx("td",{className:"market-cap-cell",children:d[R.id]?`$${E(d[R.id])}`:n.jsx("span",{style:{opacity:.7},children:"Loading..."})}),n.jsx("td",{children:n.jsx("input",{type:"number",className:"amount-input",value:o[M]||"",placeholder:"0.00",name:`investment-amount-${M}`,onChange:se=>ne(M,se.target.value),step:"0.01",min:"0"})}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{className:"btn-modern btn-add",onClick:()=>ve(M),disabled:w||!o[M]||o[M]<=0,children:[w?n.jsx("span",{className:"loading-spinner"}):"💰","Add"]}),n.jsx("button",{className:"btn-modern btn-reset",onClick:()=>be(M),disabled:w,children:"🔄 Reset"})]})})]},R.id))})]})]})}),n.jsx("div",{className:"mobile-cards",children:w&&s.length===0?n.jsxs("div",{className:"mobile-loading-card",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading investment data..."})]}):n.jsx(n.Fragment,{children:s.map((R,M)=>n.jsxs("div",{className:`investment-card ${Y[M]?"animate":""}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"card-crypto-info",children:[Re(R.name),n.jsxs("div",{children:[n.jsx("div",{className:"card-crypto-name",children:R.name}),n.jsx("div",{className:"card-crypto-symbol",children:R.id==="bitcoin"?"BTC":R.id==="ethereum"?"ETH":R.id==="usd-coin"?"USDC":R.name.substring(0,3).toUpperCase()})]})]}),n.jsxs("div",{className:`card-price ${oe(R.id)==="price-up"?"price-up-mobile":oe(R.id)==="price-down"?"price-down-mobile":""}`,children:[n.jsx("span",{children:m(R.pricePerUnit)}),n.jsx("span",{children:Q(R.id)})]})]}),n.jsxs("div",{className:"card-details",children:[n.jsx("span",{className:"card-label",children:"🏷️ Type:"}),n.jsx("span",{className:`card-value type-badge ${R.type==="Cryptocurrency"?"type-crypto":"type-stablecoin"}`,children:R.type==="Cryptocurrency"?"Crypto":"Stable"}),n.jsx("span",{className:"card-label",children:"📊 Market Cap:"}),n.jsx("span",{className:"card-value card-market-cap",children:d[R.id]?`$${E(d[R.id])}`:n.jsx("span",{style:{opacity:.7},children:"Loading..."})})]}),n.jsxs("div",{className:"card-input-section",children:[n.jsx("label",{className:"input-label",children:"💰 Investment Amount"}),n.jsx("input",{type:"number",className:"amount-input-mobile",value:o[M]||"",placeholder:"0.00",name:`investment-amount-${M}`,onChange:se=>ne(M,se.target.value),step:"0.01",min:"0"}),n.jsxs("div",{className:"card-actions",children:[n.jsxs("button",{className:"btn-modern-mobile btn-add-mobile",onClick:()=>ve(M),disabled:w||!o[M]||o[M]<=0,children:[w?n.jsx("span",{className:"loading-spinner"}):"💰","Add Investment"]}),n.jsx("button",{className:"btn-modern-mobile btn-reset-mobile",onClick:()=>be(M),disabled:w,children:"🔄 Reset"})]})]})]},R.id))})})]})},tv="/x-pense-app/assets/intro_01-CLbcXq8c.mp3";function $d(){return n.jsx("footer",{className:"text-center my-5 footer fade-in",children:n.jsxs("p",{children:["©",new Date().getFullYear()," MarlonShade. All rights reserved."]})})}const nv=()=>{const i=ur(),s=()=>{const r=new Audio(tv);r.volume=.1,r.play().catch(o=>{console.error("Error playing audio",o)}),i("/dashboard")};return n.jsx("div",{className:"intro-margin",children:n.jsx("div",{className:"start-page-container",children:n.jsxs("div",{className:"start-page-content",children:[n.jsx("h1",{className:"intro metallic-shadow fade-in",children:"X-PENSE".split("").map((r,o)=>n.jsx("span",{className:`char char-${o}`,children:r},o))}),n.jsx("p",{className:"subtitle fade-in ",children:"Your Friendly Budget Tracker"}),n.jsx("button",{onClick:s,className:"btn-enhanced fade-in",children:"Get Started"}),n.jsx($d,{})]})})})},rv=({darkMode:i})=>{const[s,r]=y.useState(""),[o,c]=y.useState(null),[d,u]=y.useState(lr.getStats()),m=()=>{if(s.trim()){const j=lr.categorizeTransaction(s);c(j)}},g=["STARBUCKS #1234 NEW YORK","SHELL GAS STATION #567","AMAZON.COM PURCHASE","WALMART SUPERCENTER #890","NETFLIX MONTHLY","ELECTRIC COMPANY BILL","CVS PHARMACY #123"];return n.jsxs("div",{className:"ai-demo-container",children:[n.jsx("style",{jsx:!0,children:`
        .ai-demo-container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background: ${i?"#2d3748":"#f8f9fa"};
          border-radius: 15px;
          border: 2px solid ${i?"#4a5568":"#e2e8f0"};
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
          background: ${i?"#4a5568":"white"};
          border-radius: 12px;
          border: 1px solid ${i?"#718096":"#e2e8f0"};
        }

        .test-input {
          width: 100%;
          padding: 12px;
          border: 2px solid ${i?"#718096":"#e2e8f0"};
          border-radius: 8px;
          background: ${i?"#2d3748":"white"};
          color: ${i?"#e2e8f0":"#2d3748"};
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
          background: ${i?"#38a169":"#c6f6d5"};
          color: ${i?"white":"#22543d"};
          border-radius: 8px;
          font-weight: 600;
        }

        .sample-transaction {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin: 5px 0;
          background: ${i?"#2d3748":"#f7fafc"};
          border-radius: 6px;
          border: 1px solid ${i?"#4a5568":"#e2e8f0"};
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .stat-card {
          padding: 15px;
          background: ${i?"#4a5568":"white"};
          border-radius: 8px;
          text-align: center;
          border: 1px solid ${i?"#718096":"#e2e8f0"};
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #4299e1;
        }

        .confidence-bar {
          width: 100%;
          height: 8px;
          background: ${i?"#4a5568":"#e2e8f0"};
          border-radius: 4px;
          overflow: hidden;
          margin-top: 5px;
        }

        .confidence-fill {
          height: 100%;
          background: linear-gradient(90deg, #f56565 0%, #ed8936 50%, #38a169 100%);
          transition: width 0.3s ease;
        }
      `}),n.jsxs("div",{className:"demo-header",children:[n.jsx("h3",{children:"🤖 AI Transaction Categorization Demo"}),n.jsx("p",{children:"Test how our AI categorizes different transaction descriptions"})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"Test AI Categorization"}),n.jsx("input",{type:"text",className:"test-input",placeholder:"Enter a transaction description (e.g., 'STARBUCKS #1234')",value:s,onChange:j=>r(j.target.value),onKeyPress:j=>j.key==="Enter"&&m()}),n.jsx("button",{className:"test-button",onClick:m,children:"🤖 Analyze Transaction"}),o&&n.jsxs("div",{className:"result-display",children:[n.jsxs("div",{children:["Category: ",n.jsx("strong",{children:o.category})]}),n.jsxs("div",{children:["Confidence: ",o.confidence,"%"]}),n.jsx("div",{className:"confidence-bar",children:n.jsx("div",{className:"confidence-fill",style:{width:`${o.confidence}%`}})})]})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"Sample Transactions"}),n.jsx("p",{children:"Click any sample to see how AI categorizes it:"}),g.map((j,v)=>{const w=lr.categorizeTransaction(j);return n.jsxs("div",{className:"sample-transaction",onClick:()=>{r(j),c(w)},style:{cursor:"pointer"},children:[n.jsx("span",{children:j}),n.jsxs("span",{style:{background:"#4299e1",color:"white",padding:"4px 8px",borderRadius:"4px",fontSize:"0.8rem"},children:[w.category," (",w.confidence,"%)"]})]},v)})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"AI Learning Statistics"}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:d.totalCorrections}),n.jsx("div",{children:"User Corrections"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsxs("div",{className:"stat-number",children:[d.learningAccuracy,"%"]}),n.jsx("div",{children:"Learning Accuracy"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:Object.keys(d.categoryDistribution).length}),n.jsx("div",{children:"Categories Learned"})]})]})]})]})};function av(){const i=Ye=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Ye),s=Ye=>new Date(Ye).toLocaleDateString(),r=Ye=>{const _=new Date(Ye);return _.setMinutes(_.getMinutes()+_.getTimezoneOffset()),s(_)},[o,c]=y.useState([]),[d,u]=y.useState(0),[m,g]=y.useState(0),[j,v]=y.useState(!0),[w,I]=y.useState(!1),[J,T]=y.useState([]),[k,A]=y.useState(0),[Y,V]=y.useState([]),[$,K]=y.useState(""),[ne,fe]=y.useState(""),[ve,be]=y.useState(""),[ye,Re]=y.useState(""),[E,Q]=y.useState(null),[oe,R]=y.useState(""),M=Y.reduce((Ye,_)=>Ye+_.amount,0),[se,Ae]=y.useState(0),[ke,je]=y.useState(0),[U,ce]=y.useState(0),[pe,W]=y.useState(0),ae=se+ke+U,[re,le]=y.useState(null),[Pe,Ge]=y.useState([]),[ee,X]=y.useState(null),[Ee,ze]=y.useState({cash_on_hand:0,bank_account_balance:0,savings:0,total:0}),[Pt,Ie]=y.useState(null),[dt,Ze]=y.useState(0),[ut,lt]=y.useState(0),[Fn,Je]=y.useState(""),[Me,pt]=y.useState(""),[mt,yn]=y.useState(""),[Ft,gn]=y.useState(0),[ct,ft]=y.useState([]),[rn,At]=y.useState(ct.map(Ye=>({...Ye,progress:Ye.saved/Ye.target*100}))),[Yt,G]=y.useState({}),[Z,de]=y.useState(null),[Ne,Be]=y.useState(""),[tt,We]=y.useState({category:"",date:"",text:"",amount:""}),[He,Ot]=y.useState(""),[Nt,an]=y.useState(""),[qt,wn]=y.useState([]),[On,Mn]=y.useState([]),[In,sn]=y.useState({}),[Vt,on]=y.useState(""),[Kt,Xn]=y.useState(""),[jn,It]=y.useState("");y.useEffect(()=>{const Ye=o.reduce((_,Lt)=>_+parseFloat(Lt.amount),0);A(Ye)},[o]),y.useEffect(()=>{j?(document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode"),document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode"),document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"))},[j]);const b=()=>{v(!j)},[L,F]=y.useState(!1),q=Ye=>{T([...J,Ye]),console.log("Added investment:",Ye)},we=Ye=>parseFloat(Ye).toLocaleString(),_e=Ye=>{if(!J||!J[Ye]){console.error("Investment not found");return}const _=J[Ye].id;ge.delete(`http://localhost:5001/investments/${_}`).then(Lt=>{if(Lt.status===204){const ln=J.filter((Ws,di)=>di!==Ye);T(ln)}else console.error("Failed to delete the investment")}).catch(Lt=>{console.error("Error:",Lt)})};return n.jsx(E1,{basename:"/x-pense-app",children:n.jsx(iv,{darkMode:j,toggleDarkMode:b,sidebarOpen:w,setSidebarOpen:I,transactions:o,setTransactions:c,balance:d,setBalance:u,budget:m,setBudget:g,addedInvestments:J,setAddedInvestments:T,totalAmount:k,setTotalAmount:A,items:Y,setItems:V,name:$,setName:K,amount:ne,setAmount:fe,newBudget:ve,setNewBudget:be,error:ye,setError:Re,editingIndex:E,setEditingIndex:Q,editAmount:oe,setEditAmount:R,totalBudgetAmount:M,cashOnHand:se,setCashOnHand:Ae,bankAccountBalance:ke,setBankAccountBalance:je,savings:U,setSavings:ce,total:pe,setTotal:W,totalBalance:ae,balanceId:re,setBalanceId:le,balances:Pe,setBalances:Ge,editIndex:ee,setEditIndex:X,editBalance:Ee,setEditBalance:ze,balanceError:Pt,setBalanceError:Ie,goalAmount:dt,setGoalAmount:Ze,currentAmount:ut,setCurrentAmount:lt,inputAmount:Fn,setInputAmount:Je,newGoalName:Me,setNewGoalName:pt,newGoalAmount:mt,setNewGoalAmount:yn,progPercentage:Ft,setProgPercentage:gn,goals:ct,setGoals:ft,goalsProgress:rn,setGoalsProgress:At,inputAmounts:Yt,setInputAmounts:G,editingGoalId:Z,setEditingGoalId:de,editedGoalName:Ne,setEditedGoalName:Be,editTransaction:tt,setEditTransaction:We,reminderDate:He,setReminderDate:Ot,successMessage:Nt,setSuccessMessage:an,investments:qt,setInvestments:wn,amounts:On,setAmounts:Mn,marketCaps:In,setMarketCaps:sn,category:Vt,setCategory:on,date:Kt,setDate:Xn,description:jn,setDescription:It,validated:L,setValidated:F,formatCurrency:i,formatDate:s,parseDate:r,formatAmount:we,handleAddInvestment:q,handleRemoveInvestment:_e})})}function iv(i){const s=Jn(),{darkMode:r,toggleDarkMode:o,sidebarOpen:c,setSidebarOpen:d,transactions:u,setTransactions:m,balance:g,setBalance:j,budget:v,setBudget:w,addedInvestments:I,setAddedInvestments:J,totalAmount:T,setTotalAmount:k,items:A,setItems:Y,name:V,setName:$,amount:K,setAmount:ne,newBudget:fe,setNewBudget:ve,error:be,setError:ye,editingIndex:Re,setEditingIndex:E,editAmount:Q,setEditAmount:oe,totalBudgetAmount:R,cashOnHand:M,setCashOnHand:se,bankAccountBalance:Ae,setBankAccountBalance:ke,savings:je,setSavings:U,total:ce,setTotal:pe,totalBalance:W,balanceId:ae,setBalanceId:re,balances:le,setBalances:Pe,editIndex:Ge,setEditIndex:ee,editBalance:X,setEditBalance:Ee,balanceError:ze,setBalanceError:Pt,goalAmount:Ie,setGoalAmount:dt,currentAmount:Ze,setCurrentAmount:ut,inputAmount:lt,setInputAmount:Fn,newGoalName:Je,setNewGoalName:Me,newGoalAmount:pt,setNewGoalAmount:mt,progPercentage:yn,setProgPercentage:Ft,goals:gn,setGoals:ct,goalsProgress:ft,setGoalsProgress:rn,inputAmounts:At,setInputAmounts:Yt,editingGoalId:G,setEditingGoalId:Z,editedGoalName:de,setEditedGoalName:Ne,editTransaction:Be,setEditTransaction:tt,reminderDate:We,setReminderDate:He,successMessage:Ot,setSuccessMessage:Nt,investments:an,setInvestments:qt,amounts:wn,setAmounts:On,marketCaps:Mn,setMarketCaps:In,category:sn,setCategory:Vt,date:on,setDate:Kt,description:Xn,setDescription:jn,validated:It,setValidated:b,formatCurrency:L,formatDate:F,parseDate:q,formatAmount:we,handleAddInvestment:_e,handleRemoveInvestment:Ye}=i;return n.jsxs("div",{id:"root",className:`${r?"dark-mode":"light-mode"}`,children:[s.pathname==="/"?n.jsx("div",{style:{height:"100vh",width:"100%"},children:n.jsx(Fc,{children:n.jsx(fn,{path:"/",element:n.jsx(nv,{})})})}):n.jsxs("div",{className:"d-flex",style:{minHeight:"100vh"},children:[n.jsx("div",{className:"d-md-none hamburger-container",children:n.jsx("button",{className:`btn hamburger-btn ${r?"dark-mode":""}`,onClick:()=>d(!c),"aria-label":"Toggle navigation menu",children:n.jsx("span",{style:{fontSize:"1.3rem",fontWeight:"bold"},children:"☰"})})}),c&&n.jsx("div",{className:"d-md-none position-fixed w-100 h-100",style:{top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1040},onClick:()=>d(!1)}),n.jsxs("nav",{className:`d-flex flex-column p-3 ${r?"navbar-dark-mode":"navbar-light-mode"} mobile-sidebar ${c?"show d-block":"d-none d-md-flex"}`,style:{width:"250px",minHeight:"100vh",transition:"all 0.3s ease",borderRight:`2px solid ${r?"#495057":"#dee2e6"}`,boxShadow:"2px 0 10px rgba(0, 0, 0, 0.1)",borderRadius:"10px",...window.innerWidth<768?{position:"fixed",top:0,left:0,zIndex:1045}:{}},onMouseEnter:_=>{_.target.style.boxShadow="2px 0 15px rgba(0, 0, 0, 0.2)"},onMouseLeave:_=>{_.target.style.boxShadow="2px 0 10px rgba(0, 0, 0, 0.1)"},children:[n.jsx("div",{className:"d-md-none d-flex justify-content-end mb-2",children:n.jsx("button",{className:`btn btn-sm ${r?"btn-light":"btn-dark"}`,onClick:()=>d(!1),style:{padding:"4px 8px",borderRadius:"4px"},children:"✕"})}),n.jsxs("div",{className:"text-center mb-4",children:[n.jsxs("div",{className:"d-flex align-items-center justify-content-center mb-2",style:{flexWrap:"nowrap"},children:[n.jsx("h1",{className:"mb-0",style:{whiteSpace:"nowrap",marginRight:".5rem"},children:n.jsx("span",{className:`app-title ${r?"metallic-shadow-dark":"metallic-shadow-light"}`,style:{cursor:"pointer",transition:"all 0.3s ease",fontSize:"2.2rem",fontWeight:"bold",letterSpacing:"1px"},onMouseEnter:_=>{_.target.style.transform="scale(1.1)",_.target.style.textShadow="0 0 10px rgba(0, 123, 255, 0.5)"},onMouseLeave:_=>{_.target.style.transform="scale(1)",_.target.style.textShadow=""},onClick:()=>window.location.href="/dashboard",children:"X-PENSE"})}),n.jsx("span",{className:"badge badge-danger border p-1",style:{transition:"all 0.3s ease",cursor:"default",fontSize:"0.65rem",whiteSpace:"nowrap"},onMouseEnter:_=>{_.target.style.transform="scale(1.05)",_.target.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"},onMouseLeave:_=>{_.target.style.transform="scale(1)",_.target.style.boxShadow=""},children:"Ai-Powered"})]}),n.jsxs("button",{onClick:o,className:"btn btn-sm w-100",style:{background:r?"linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)":"linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",color:r?"#1a1a1a":"#ffffff",border:`2px solid ${r?"#ffd700":"#64748b"}`,fontSize:"12px",padding:"10px 16px",borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)",transform:"scale(1)",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",backdropFilter:"blur(10px)",maxWidth:"100%"},onMouseEnter:_=>{_.target.style.transform="scale(1.05)",_.target.style.boxShadow=r?"0 6px 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)":"0 6px 20px rgba(30, 41, 59, 0.4), 0 0 30px rgba(30, 41, 59, 0.2)"},onMouseLeave:_=>{_.target.style.transform="scale(1)",_.target.style.boxShadow=r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)"},onMouseDown:_=>{_.target.style.transform="scale(0.98)"},onMouseUp:_=>{_.target.style.transform="scale(1.05)",setTimeout(()=>{_.target.style.transform="scale(1)"},150)},children:[n.jsx("span",{style:{fontSize:"16px"},children:r?"☀️":"🌙"}),n.jsx("span",{style:{fontSize:"12px",letterSpacing:"0.5px"},children:r?"LIGHT MODE":"DARK MODE"})]})]}),n.jsxs("ul",{className:`nav nav-pills flex-column ${r?"nav-tabs-bg-dark-mode":"nav-tabs-bg-light-mode"}`,style:{display:"flex",flexDirection:"column",width:"100%",listStyle:"none",margin:0,padding:0},children:[n.jsx("li",{className:"nav-item mb-2",style:{width:"100%",display:"block",marginBottom:"8px"},children:n.jsxs(kn,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/dashboard",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",padding:"12px 16px",boxSizing:"border-box"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Wc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Dashboard"]})}),n.jsx("li",{className:"nav-item mb-2",style:{width:"100%",display:"block",marginBottom:"8px"},children:n.jsxs(kn,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/budget",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",padding:"12px 16px",boxSizing:"border-box"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Hc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Budget"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(kn,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/balance",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Gc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Balance"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(kn,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-success text-white":""}`,to:"/add",style:({isActive:_})=>({backgroundColor:_?"#28a745":r?"#2d3748":"#ffffff",color:_?"white":r?"#e2e8f0":"#2d3748",transform:"scale(1)",transition:"all 0.3s ease",fontWeight:"bold"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor="#28a745",_.target.style.color="white")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor=r?"#2d3748":"#ffffff",_.target.style.color=r?"#e2e8f0":"#2d3748")},children:[n.jsx(Yc,{size:18,className:"me-2",style:{marginRight:"12px"}}),n.jsx("strong",{children:"X-PENSE"})]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(kn,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/transactions",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(qc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Transactions"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(kn,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/goals",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Vc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Goals"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(kn,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/investments",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Kc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Investments"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs(kn,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-info text-white":""}`,to:"/ai-demo",style:({isActive:_})=>({backgroundColor:_?"#17a2b8":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor="#17a2b8",_.target.style.color="white")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="",_.target.style.color="")},children:[n.jsx(Jc,{size:18,className:"me-2",style:{marginRight:"12px"}}),n.jsx("strong",{children:"AI Demo"})]})})]}),n.jsx("div",{className:"mt-3 pt-3",style:{borderTop:`1px solid ${r?"#495057":"#dee2e6"}`,marginTop:"auto"},children:n.jsx("div",{className:`text-center p-3 rounded ${r?"bg-secondary":"bg-light"}`,style:{transition:"all 0.3s ease",background:r?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",border:`1px solid ${r?"#4a5568":"#dee2e6"}`,boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)"},children:n.jsxs("small",{className:`${r?"text-light":"text-dark"}`,style:{fontSize:"13px",fontWeight:"500",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[n.jsx("span",{children:"👤"}),n.jsx("span",{children:"Welcome Marlon"}),n.jsx("span",{children:"🟢"}),n.jsx("span",{children:"Online"})]})})})]}),n.jsxs("div",{className:"flex-grow-1 p-4",style:{paddingTop:window.innerWidth<768?"60px":"1rem"},children:[n.jsx("div",{className:"d-md-none mb-3",children:n.jsxs("button",{onClick:o,className:"btn btn-sm w-100",style:{background:r?"linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)":"linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",color:r?"#1a1a1a":"#ffffff",border:`2px solid ${r?"#ffd700":"#64748b"}`,fontSize:"11px",padding:"8px 16px",borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)",transform:"scale(1)",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",backdropFilter:"blur(10px)",maxWidth:"100%"},onMouseDown:_=>{_.target.style.transform="scale(0.95)"},onMouseUp:_=>{_.target.style.transform="scale(1.05)",setTimeout(()=>{_.target.style.transform="scale(1)"},150)},onTouchStart:_=>{_.target.style.transform="scale(0.95)",_.target.style.boxShadow=r?"0 2px 8px rgba(255, 215, 0, 0.5)":"0 2px 8px rgba(30, 41, 59, 0.5)"},onTouchEnd:_=>{_.target.style.transform="scale(1.05)",setTimeout(()=>{_.target.style.transform="scale(1)",_.target.style.boxShadow=r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)"},150)},children:[n.jsx("span",{style:{fontSize:"14px"},children:r?"☀️":"🌙"}),n.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.5px"},children:r?"LIGHT":"DARK"})]})}),n.jsxs(Fc,{children:[n.jsx(fn,{path:"/",element:n.jsx(v1,{to:"/dashboard",replace:!0})}),n.jsx(fn,{path:"/dashboard",element:n.jsx(Y1,{transactions:u,balance:W,budget:v,investments:an,totalAmount:T,darkMode:r,formatAmount:we,addedInvestments:I,goals:gn,setGoals:ct,formatCurrency:L,formatDate:F,handleRemoveInvestment:Ye,goalsProgress:ft,setGoalsProgress:rn,totalBudgetAmount:R,parseDate:q,setItems:Y,setBalances:Pe,setCashOnHand:se,setBankAccountBalance:ke,setSavings:U,setTransactions:m,setAddedInvestments:J,setInvestments:qt,setAmounts:On})}),n.jsx(fn,{path:"/budget",element:n.jsx(z1,{balance:g,budget:v,setBudget:w,darkMode:r,validated:It,setValidated:b,formatCurrency:L,items:A,setItems:Y,name:V,setName:$,amount:K,setAmount:ne,newBudget:fe,setNewBudget:ve,error:be,setError:ye,editingIndex:Re,setEditingIndex:E,editAmount:Q,setEditAmount:oe,date:on,setDate:Kt,totalBudgetAmount:R,parseDate:q})}),n.jsx(fn,{path:"/balance",element:n.jsx(B1,{balance:g,setBalance:j,transactions:u,budget:v,darkMode:r,validated:It,setValidated:b,cashOnHand:M,setCashOnHand:se,bankAccountBalance:Ae,setBankAccountBalance:ke,savings:je,setSavings:U,total:ce,setTotal:pe,formatCurrency:L,balanceId:ae,setBalanceId:re,balances:le,setBalances:Pe,editIndex:Ge,setEditIndex:ee,editBalance:X,setEditBalance:Ee,balanceError:ze,setBalanceError:Pt})}),n.jsx(fn,{path:"/transactions",element:n.jsx(q1,{transactions:u,setTransactions:m,darkMode:r,validated:It,setValidated:b,formatCurrency:L,totalAmount:T,setTotalAmount:k,editIndex:Ge,setEditIndex:ee,editTransaction:Be,setEditTransaction:tt,reminderDate:We,setReminderDate:He,successMessage:Ot,setSuccessMessage:Nt,parseDate:q})}),n.jsx(fn,{path:"/add",element:n.jsx(L1,{darkMode:r,validated:It,setValidated:b,amount:K,setAmount:ne,category:sn,setCategory:Vt,date:on,setDate:Kt,description:Xn,setDescription:jn})}),n.jsx(fn,{path:"/goals",element:n.jsx(V1,{goalAmount:Ie,setGoalAmount:dt,currentAmount:Ze,setCurrentAmount:ut,newGoalName:Je,setNewGoalName:Me,newGoalAmount:pt,setNewGoalAmount:mt,progPercentage:yn,setProgPercentage:Ft,goals:gn,setGoals:ct,validated:It,setValidated:b,inputAmounts:At,setInputAmounts:Yt,editingGoalId:G,setEditingGoalId:Z,editedGoalName:de,setEditedGoalName:Ne,formatCurrency:L,darkMode:r})}),n.jsx(fn,{path:"/investments",element:n.jsx(ev,{formatAmount:we,formatCurrency:L,darkMode:r,onAddInvestment:_=>{const Lt=I.findIndex(ln=>ln.id===_.id);if(Lt!==-1){const ln=[...I];ln[Lt]={...ln[Lt],amount:ln[Lt].amount+_.amount,totalPrice:ln[Lt].totalPrice+_.totalPrice},J(ln)}else J([...I,_])},validated:It,setValidated:b,investments:an,setInvestments:qt,amounts:wn,setAmounts:On,marketCaps:Mn,setMarketCaps:In,addedInvestments:I,setAddedInvestments:J})}),n.jsx(fn,{path:"/ai-demo",element:n.jsx(rv,{darkMode:r})})]}),n.jsx($d,{})]})]}),s.pathname!=="/"&&n.jsx(sv,{darkMode:r})]})}const sv=({darkMode:i})=>{const s=Jn(),r=[{path:"/dashboard",icon:Wc,label:"Dashboard"},{path:"/budget",icon:Hc,label:"Budget"},{path:"/balance",icon:Gc,label:"Balance"},{path:"/add",icon:Yc,label:"X-PENSE"}],o=[{path:"/transactions",icon:qc,label:"Transactions"},{path:"/goals",icon:Vc,label:"Goals"},{path:"/investments",icon:Kc,label:"Investments"},{path:"/ai-demo",icon:Jc,label:"AI Demo"}],c=d=>n.jsx("div",{style:{display:"flex",width:"100%",height:"50%"},children:d.map((u,m)=>{const g=u.icon,j=s.pathname===u.path,v=u.path==="/add";return n.jsxs(kn,{to:u.path,className:"text-decoration-none",onClick:()=>{window.innerWidth<=768&&(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},50))},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:v?"6px 4px":"4px 2px",flex:"1 1 25%",borderRadius:v?"12px":"8px",margin:"0 1px",transition:"all 0.2s ease",color:v?"#ffffff":j?"#4299e1":i?"#a0aec0":"#6c757d",background:v?"linear-gradient(135deg, #28a745 0%, #20c997 100%)":j?"rgba(66, 153, 225, 0.15)":"transparent",boxShadow:v?"0 4px 15px rgba(40, 167, 69, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)":"none",textAlign:"center",transform:v?"scale(1.05)":"scale(1)"},children:[n.jsx(g,{size:v?18:16,style:{marginBottom:"2px",strokeWidth:v?3:j?2.5:2,flexShrink:0}}),n.jsx("span",{style:{fontSize:v?"10px":"9px",fontWeight:v?"700":j?"600":"500",lineHeight:"1.1",display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",letterSpacing:v?"0.5px":"normal"},children:u.label})]},m)})});return n.jsx("nav",{className:"d-md-none",style:{position:"fixed",bottom:"0",left:"0",right:"0",width:"100%",background:i?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",borderTop:`2px solid ${i?"#4a5568":"#dee2e6"}`,padding:"4px",boxShadow:"0 -4px 20px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(10px)",zIndex:9999,height:"100px",boxSizing:"border-box",transform:"translateZ(0)"},children:n.jsxs("div",{className:"mobile-nav-container",style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",padding:"2px"},children:[c(r),c(o)]})})};ax.createRoot(document.getElementById("root")).render(n.jsx(av,{}));
