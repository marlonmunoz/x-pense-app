import{a as Wm,r as v,b as Hm,j as n,c as Ha}from"./charts-nivo-DYQ47lf6.js";import{C as Dc,a as Gm,L as Ym,P as qm,b as Vm,B as Mm,p as Km,c as Jm,d as Xm,i as Zm,A as Qm,e as ex,f as tx,D as Ga}from"./charts-others-D3x3PcxJ.js";import{C as Bc,b as zc,a as Wc,D as Hc,c as Gc,P as nx,R as Yc,T as qc,d as Vc,L as Mc}from"./utils-D7KHK4u5.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(c){if(c.ep)return;c.ep=!0;const d=r(c);fetch(c.href,d)}})();var Ya={},gc;function rx(){if(gc)return Ya;gc=1;var s=Wm();return Ya.createRoot=s.createRoot,Ya.hydrateRoot=s.hydrateRoot,Ya}var ax=rx();function Kc(s,i){return function(){return s.apply(i,arguments)}}const{toString:ix}=Object.prototype,{getPrototypeOf:Is}=Object,ti=(s=>i=>{const r=ix.call(i);return s[r]||(s[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),hn=s=>(s=s.toLowerCase(),i=>ti(i)===s),ni=s=>i=>typeof i===s,{isArray:Er}=Array,Jr=ni("undefined");function sx(s){return s!==null&&!Jr(s)&&s.constructor!==null&&!Jr(s.constructor)&&Gt(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const Jc=hn("ArrayBuffer");function ox(s){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(s):i=s&&s.buffer&&Jc(s.buffer),i}const lx=ni("string"),Gt=ni("function"),Xc=ni("number"),ri=s=>s!==null&&typeof s=="object",cx=s=>s===!0||s===!1,qa=s=>{if(ti(s)!=="object")return!1;const i=Is(s);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},dx=hn("Date"),ux=hn("File"),fx=hn("Blob"),px=hn("FileList"),hx=s=>ri(s)&&Gt(s.pipe),gx=s=>{let i;return s&&(typeof FormData=="function"&&s instanceof FormData||Gt(s.append)&&((i=ti(s))==="formdata"||i==="object"&&Gt(s.toString)&&s.toString()==="[object FormData]"))},mx=hn("URLSearchParams"),[xx,bx,vx,yx]=["ReadableStream","Request","Response","Headers"].map(hn),wx=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qr(s,i,{allOwnKeys:r=!1}={}){if(s===null||typeof s>"u")return;let o,c;if(typeof s!="object"&&(s=[s]),Er(s))for(o=0,c=s.length;o<c;o++)i.call(null,s[o],o,s);else{const d=r?Object.getOwnPropertyNames(s):Object.keys(s),u=d.length;let m;for(o=0;o<u;o++)m=d[o],i.call(null,s[m],m,s)}}function Zc(s,i){i=i.toLowerCase();const r=Object.keys(s);let o=r.length,c;for(;o-- >0;)if(c=r[o],i===c.toLowerCase())return c;return null}const or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Qc=s=>!Jr(s)&&s!==or;function As(){const{caseless:s}=Qc(this)&&this||{},i={},r=(o,c)=>{const d=s&&Zc(i,c)||c;qa(i[d])&&qa(o)?i[d]=As(i[d],o):qa(o)?i[d]=As({},o):Er(o)?i[d]=o.slice():i[d]=o};for(let o=0,c=arguments.length;o<c;o++)arguments[o]&&Qr(arguments[o],r);return i}const jx=(s,i,r,{allOwnKeys:o}={})=>(Qr(i,(c,d)=>{r&&Gt(c)?s[d]=Kc(c,r):s[d]=c},{allOwnKeys:o}),s),Sx=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),Nx=(s,i,r,o)=>{s.prototype=Object.create(i.prototype,o),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:i.prototype}),r&&Object.assign(s.prototype,r)},_x=(s,i,r,o)=>{let c,d,u;const m={};if(i=i||{},s==null)return i;do{for(c=Object.getOwnPropertyNames(s),d=c.length;d-- >0;)u=c[d],(!o||o(u,s,i))&&!m[u]&&(i[u]=s[u],m[u]=!0);s=r!==!1&&Is(s)}while(s&&(!r||r(s,i))&&s!==Object.prototype);return i},Cx=(s,i,r)=>{s=String(s),(r===void 0||r>s.length)&&(r=s.length),r-=i.length;const o=s.indexOf(i,r);return o!==-1&&o===r},Ax=s=>{if(!s)return null;if(Er(s))return s;let i=s.length;if(!Xc(i))return null;const r=new Array(i);for(;i-- >0;)r[i]=s[i];return r},Ex=(s=>i=>s&&i instanceof s)(typeof Uint8Array<"u"&&Is(Uint8Array)),Tx=(s,i)=>{const o=(s&&s[Symbol.iterator]).call(s);let c;for(;(c=o.next())&&!c.done;){const d=c.value;i.call(s,d[0],d[1])}},Rx=(s,i)=>{let r;const o=[];for(;(r=s.exec(i))!==null;)o.push(r);return o},kx=hn("HTMLFormElement"),$x=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,c){return o.toUpperCase()+c}),mc=(({hasOwnProperty:s})=>(i,r)=>s.call(i,r))(Object.prototype),Px=hn("RegExp"),ed=(s,i)=>{const r=Object.getOwnPropertyDescriptors(s),o={};Qr(r,(c,d)=>{let u;(u=i(c,d,s))!==!1&&(o[d]=u||c)}),Object.defineProperties(s,o)},Ox=s=>{ed(s,(i,r)=>{if(Gt(s)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const o=s[r];if(Gt(o)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Fx=(s,i)=>{const r={},o=c=>{c.forEach(d=>{r[d]=!0})};return Er(s)?o(s):o(String(s).split(i)),r},Ix=()=>{},Lx=(s,i)=>s!=null&&Number.isFinite(s=+s)?s:i,ws="abcdefghijklmnopqrstuvwxyz",xc="0123456789",td={DIGIT:xc,ALPHA:ws,ALPHA_DIGIT:ws+ws.toUpperCase()+xc},Ux=(s=16,i=td.ALPHA_DIGIT)=>{let r="";const{length:o}=i;for(;s--;)r+=i[Math.random()*o|0];return r};function Dx(s){return!!(s&&Gt(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const Bx=s=>{const i=new Array(10),r=(o,c)=>{if(ri(o)){if(i.indexOf(o)>=0)return;if(!("toJSON"in o)){i[c]=o;const d=Er(o)?[]:{};return Qr(o,(u,m)=>{const g=r(u,c+1);!Jr(g)&&(d[m]=g)}),i[c]=void 0,d}}return o};return r(s,0)},zx=hn("AsyncFunction"),Wx=s=>s&&(ri(s)||Gt(s))&&Gt(s.then)&&Gt(s.catch),nd=((s,i)=>s?setImmediate:i?((r,o)=>(or.addEventListener("message",({source:c,data:d})=>{c===or&&d===r&&o.length&&o.shift()()},!1),c=>{o.push(c),or.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Gt(or.postMessage)),Hx=typeof queueMicrotask<"u"?queueMicrotask.bind(or):typeof process<"u"&&process.nextTick||nd,F={isArray:Er,isArrayBuffer:Jc,isBuffer:sx,isFormData:gx,isArrayBufferView:ox,isString:lx,isNumber:Xc,isBoolean:cx,isObject:ri,isPlainObject:qa,isReadableStream:xx,isRequest:bx,isResponse:vx,isHeaders:yx,isUndefined:Jr,isDate:dx,isFile:ux,isBlob:fx,isRegExp:Px,isFunction:Gt,isStream:hx,isURLSearchParams:mx,isTypedArray:Ex,isFileList:px,forEach:Qr,merge:As,extend:jx,trim:wx,stripBOM:Sx,inherits:Nx,toFlatObject:_x,kindOf:ti,kindOfTest:hn,endsWith:Cx,toArray:Ax,forEachEntry:Tx,matchAll:Rx,isHTMLForm:kx,hasOwnProperty:mc,hasOwnProp:mc,reduceDescriptors:ed,freezeMethods:Ox,toObjectSet:Fx,toCamelCase:$x,noop:Ix,toFiniteNumber:Lx,findKey:Zc,global:or,isContextDefined:Qc,ALPHABET:td,generateString:Ux,isSpecCompliantForm:Dx,toJSONObject:Bx,isAsyncFn:zx,isThenable:Wx,setImmediate:nd,asap:Hx};function Ee(s,i,r,o,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",i&&(this.code=i),r&&(this.config=r),o&&(this.request=o),c&&(this.response=c,this.status=c.status?c.status:null)}F.inherits(Ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.status}}});const rd=Ee.prototype,ad={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{ad[s]={value:s}});Object.defineProperties(Ee,ad);Object.defineProperty(rd,"isAxiosError",{value:!0});Ee.from=(s,i,r,o,c,d)=>{const u=Object.create(rd);return F.toFlatObject(s,u,function(g){return g!==Error.prototype},m=>m!=="isAxiosError"),Ee.call(u,s.message,i,r,o,c),u.cause=s,u.name=s.name,d&&Object.assign(u,d),u};const Gx=null;function Es(s){return F.isPlainObject(s)||F.isArray(s)}function id(s){return F.endsWith(s,"[]")?s.slice(0,-2):s}function bc(s,i,r){return s?s.concat(i).map(function(c,d){return c=id(c),!r&&d?"["+c+"]":c}).join(r?".":""):i}function Yx(s){return F.isArray(s)&&!s.some(Es)}const qx=F.toFlatObject(F,{},null,function(i){return/^is[A-Z]/.test(i)});function ai(s,i,r){if(!F.isObject(s))throw new TypeError("target must be an object");i=i||new FormData,r=F.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,A){return!F.isUndefined(A[k])});const o=r.metaTokens,c=r.visitor||y,d=r.dots,u=r.indexes,g=(r.Blob||typeof Blob<"u"&&Blob)&&F.isSpecCompliantForm(i);if(!F.isFunction(c))throw new TypeError("visitor must be a function");function S(T){if(T===null)return"";if(F.isDate(T))return T.toISOString();if(!g&&F.isBlob(T))throw new Ee("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(T)||F.isTypedArray(T)?g&&typeof Blob=="function"?new Blob([T]):Buffer.from(T):T}function y(T,k,A){let Y=T;if(T&&!A&&typeof T=="object"){if(F.endsWith(k,"{}"))k=o?k:k.slice(0,-2),T=JSON.stringify(T);else if(F.isArray(T)&&Yx(T)||(F.isFileList(T)||F.endsWith(k,"[]"))&&(Y=F.toArray(T)))return k=id(k),Y.forEach(function(R,M){!(F.isUndefined(R)||R===null)&&i.append(u===!0?bc([k],M,d):u===null?k:k+"[]",S(R))}),!1}return Es(T)?!0:(i.append(bc(A,k,d),S(T)),!1)}const w=[],I=Object.assign(qx,{defaultVisitor:y,convertValue:S,isVisitable:Es});function K(T,k){if(!F.isUndefined(T)){if(w.indexOf(T)!==-1)throw Error("Circular reference detected in "+k.join("."));w.push(T),F.forEach(T,function(Y,V){(!(F.isUndefined(Y)||Y===null)&&c.call(i,Y,F.isString(V)?V.trim():V,k,I))===!0&&K(Y,k?k.concat(V):[V])}),w.pop()}}if(!F.isObject(s))throw new TypeError("data must be an object");return K(s),i}function vc(s){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(o){return i[o]})}function Ls(s,i){this._pairs=[],s&&ai(s,this,i)}const sd=Ls.prototype;sd.append=function(i,r){this._pairs.push([i,r])};sd.toString=function(i){const r=i?function(o){return i.call(this,o,vc)}:vc;return this._pairs.map(function(c){return r(c[0])+"="+r(c[1])},"").join("&")};function Vx(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function od(s,i,r){if(!i)return s;const o=r&&r.encode||Vx;F.isFunction(r)&&(r={serialize:r});const c=r&&r.serialize;let d;if(c?d=c(i,r):d=F.isURLSearchParams(i)?i.toString():new Ls(i,r).toString(o),d){const u=s.indexOf("#");u!==-1&&(s=s.slice(0,u)),s+=(s.indexOf("?")===-1?"?":"&")+d}return s}class yc{constructor(){this.handlers=[]}use(i,r,o){return this.handlers.push({fulfilled:i,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){F.forEach(this.handlers,function(o){o!==null&&i(o)})}}const ld={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mx=typeof URLSearchParams<"u"?URLSearchParams:Ls,Kx=typeof FormData<"u"?FormData:null,Jx=typeof Blob<"u"?Blob:null,Xx={isBrowser:!0,classes:{URLSearchParams:Mx,FormData:Kx,Blob:Jx},protocols:["http","https","file","blob","url","data"]},Us=typeof window<"u"&&typeof document<"u",Ts=typeof navigator=="object"&&navigator||void 0,Zx=Us&&(!Ts||["ReactNative","NativeScript","NS"].indexOf(Ts.product)<0),Qx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",eb=Us&&window.location.href||"http://localhost",tb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Us,hasStandardBrowserEnv:Zx,hasStandardBrowserWebWorkerEnv:Qx,navigator:Ts,origin:eb},Symbol.toStringTag,{value:"Module"})),jt={...tb,...Xx};function nb(s,i){return ai(s,new jt.classes.URLSearchParams,Object.assign({visitor:function(r,o,c,d){return jt.isNode&&F.isBuffer(r)?(this.append(o,r.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},i))}function rb(s){return F.matchAll(/\w+|\[(\w*)]/g,s).map(i=>i[0]==="[]"?"":i[1]||i[0])}function ab(s){const i={},r=Object.keys(s);let o;const c=r.length;let d;for(o=0;o<c;o++)d=r[o],i[d]=s[d];return i}function cd(s){function i(r,o,c,d){let u=r[d++];if(u==="__proto__")return!0;const m=Number.isFinite(+u),g=d>=r.length;return u=!u&&F.isArray(c)?c.length:u,g?(F.hasOwnProp(c,u)?c[u]=[c[u],o]:c[u]=o,!m):((!c[u]||!F.isObject(c[u]))&&(c[u]=[]),i(r,o,c[u],d)&&F.isArray(c[u])&&(c[u]=ab(c[u])),!m)}if(F.isFormData(s)&&F.isFunction(s.entries)){const r={};return F.forEachEntry(s,(o,c)=>{i(rb(o),c,r,0)}),r}return null}function ib(s,i,r){if(F.isString(s))try{return(i||JSON.parse)(s),F.trim(s)}catch(o){if(o.name!=="SyntaxError")throw o}return(0,JSON.stringify)(s)}const ea={transitional:ld,adapter:["xhr","http","fetch"],transformRequest:[function(i,r){const o=r.getContentType()||"",c=o.indexOf("application/json")>-1,d=F.isObject(i);if(d&&F.isHTMLForm(i)&&(i=new FormData(i)),F.isFormData(i))return c?JSON.stringify(cd(i)):i;if(F.isArrayBuffer(i)||F.isBuffer(i)||F.isStream(i)||F.isFile(i)||F.isBlob(i)||F.isReadableStream(i))return i;if(F.isArrayBufferView(i))return i.buffer;if(F.isURLSearchParams(i))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let m;if(d){if(o.indexOf("application/x-www-form-urlencoded")>-1)return nb(i,this.formSerializer).toString();if((m=F.isFileList(i))||o.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return ai(m?{"files[]":i}:i,g&&new g,this.formSerializer)}}return d||c?(r.setContentType("application/json",!1),ib(i)):i}],transformResponse:[function(i){const r=this.transitional||ea.transitional,o=r&&r.forcedJSONParsing,c=this.responseType==="json";if(F.isResponse(i)||F.isReadableStream(i))return i;if(i&&F.isString(i)&&(o&&!this.responseType||c)){const u=!(r&&r.silentJSONParsing)&&c;try{return JSON.parse(i)}catch(m){if(u)throw m.name==="SyntaxError"?Ee.from(m,Ee.ERR_BAD_RESPONSE,this,null,this.response):m}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],s=>{ea.headers[s]={}});const sb=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ob=s=>{const i={};let r,o,c;return s&&s.split(`
`).forEach(function(u){c=u.indexOf(":"),r=u.substring(0,c).trim().toLowerCase(),o=u.substring(c+1).trim(),!(!r||i[r]&&sb[r])&&(r==="set-cookie"?i[r]?i[r].push(o):i[r]=[o]:i[r]=i[r]?i[r]+", "+o:o)}),i},wc=Symbol("internals");function Vr(s){return s&&String(s).trim().toLowerCase()}function Va(s){return s===!1||s==null?s:F.isArray(s)?s.map(Va):String(s)}function lb(s){const i=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(s);)i[o[1]]=o[2];return i}const cb=s=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(s.trim());function js(s,i,r,o,c){if(F.isFunction(o))return o.call(this,i,r);if(c&&(i=r),!!F.isString(i)){if(F.isString(o))return i.indexOf(o)!==-1;if(F.isRegExp(o))return o.test(i)}}function db(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,r,o)=>r.toUpperCase()+o)}function ub(s,i){const r=F.toCamelCase(" "+i);["get","set","has"].forEach(o=>{Object.defineProperty(s,o+r,{value:function(c,d,u){return this[o].call(this,i,c,d,u)},configurable:!0})})}class $t{constructor(i){i&&this.set(i)}set(i,r,o){const c=this;function d(m,g,S){const y=Vr(g);if(!y)throw new Error("header name must be a non-empty string");const w=F.findKey(c,y);(!w||c[w]===void 0||S===!0||S===void 0&&c[w]!==!1)&&(c[w||g]=Va(m))}const u=(m,g)=>F.forEach(m,(S,y)=>d(S,y,g));if(F.isPlainObject(i)||i instanceof this.constructor)u(i,r);else if(F.isString(i)&&(i=i.trim())&&!cb(i))u(ob(i),r);else if(F.isHeaders(i))for(const[m,g]of i.entries())d(g,m,o);else i!=null&&d(r,i,o);return this}get(i,r){if(i=Vr(i),i){const o=F.findKey(this,i);if(o){const c=this[o];if(!r)return c;if(r===!0)return lb(c);if(F.isFunction(r))return r.call(this,c,o);if(F.isRegExp(r))return r.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,r){if(i=Vr(i),i){const o=F.findKey(this,i);return!!(o&&this[o]!==void 0&&(!r||js(this,this[o],o,r)))}return!1}delete(i,r){const o=this;let c=!1;function d(u){if(u=Vr(u),u){const m=F.findKey(o,u);m&&(!r||js(o,o[m],m,r))&&(delete o[m],c=!0)}}return F.isArray(i)?i.forEach(d):d(i),c}clear(i){const r=Object.keys(this);let o=r.length,c=!1;for(;o--;){const d=r[o];(!i||js(this,this[d],d,i,!0))&&(delete this[d],c=!0)}return c}normalize(i){const r=this,o={};return F.forEach(this,(c,d)=>{const u=F.findKey(o,d);if(u){r[u]=Va(c),delete r[d];return}const m=i?db(d):String(d).trim();m!==d&&delete r[d],r[m]=Va(c),o[m]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const r=Object.create(null);return F.forEach(this,(o,c)=>{o!=null&&o!==!1&&(r[c]=i&&F.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,r])=>i+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...r){const o=new this(i);return r.forEach(c=>o.set(c)),o}static accessor(i){const o=(this[wc]=this[wc]={accessors:{}}).accessors,c=this.prototype;function d(u){const m=Vr(u);o[m]||(ub(c,u),o[m]=!0)}return F.isArray(i)?i.forEach(d):d(i),this}}$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);F.reduceDescriptors($t.prototype,({value:s},i)=>{let r=i[0].toUpperCase()+i.slice(1);return{get:()=>s,set(o){this[r]=o}}});F.freezeMethods($t);function Ss(s,i){const r=this||ea,o=i||r,c=$t.from(o.headers);let d=o.data;return F.forEach(s,function(m){d=m.call(r,d,c.normalize(),i?i.status:void 0)}),c.normalize(),d}function dd(s){return!!(s&&s.__CANCEL__)}function Tr(s,i,r){Ee.call(this,s??"canceled",Ee.ERR_CANCELED,i,r),this.name="CanceledError"}F.inherits(Tr,Ee,{__CANCEL__:!0});function ud(s,i,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?s(r):i(new Ee("Request failed with status code "+r.status,[Ee.ERR_BAD_REQUEST,Ee.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function fb(s){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return i&&i[1]||""}function pb(s,i){s=s||10;const r=new Array(s),o=new Array(s);let c=0,d=0,u;return i=i!==void 0?i:1e3,function(g){const S=Date.now(),y=o[d];u||(u=S),r[c]=g,o[c]=S;let w=d,I=0;for(;w!==c;)I+=r[w++],w=w%s;if(c=(c+1)%s,c===d&&(d=(d+1)%s),S-u<i)return;const K=y&&S-y;return K?Math.round(I*1e3/K):void 0}}function hb(s,i){let r=0,o=1e3/i,c,d;const u=(S,y=Date.now())=>{r=y,c=null,d&&(clearTimeout(d),d=null),s.apply(null,S)};return[(...S)=>{const y=Date.now(),w=y-r;w>=o?u(S,y):(c=S,d||(d=setTimeout(()=>{d=null,u(c)},o-w)))},()=>c&&u(c)]}const Ka=(s,i,r=3)=>{let o=0;const c=pb(50,250);return hb(d=>{const u=d.loaded,m=d.lengthComputable?d.total:void 0,g=u-o,S=c(g),y=u<=m;o=u;const w={loaded:u,total:m,progress:m?u/m:void 0,bytes:g,rate:S||void 0,estimated:S&&m&&y?(m-u)/S:void 0,event:d,lengthComputable:m!=null,[i?"download":"upload"]:!0};s(w)},r)},jc=(s,i)=>{const r=s!=null;return[o=>i[0]({lengthComputable:r,total:s,loaded:o}),i[1]]},Sc=s=>(...i)=>F.asap(()=>s(...i)),gb=jt.hasStandardBrowserEnv?((s,i)=>r=>(r=new URL(r,jt.origin),s.protocol===r.protocol&&s.host===r.host&&(i||s.port===r.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,mb=jt.hasStandardBrowserEnv?{write(s,i,r,o,c,d){const u=[s+"="+encodeURIComponent(i)];F.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),F.isString(o)&&u.push("path="+o),F.isString(c)&&u.push("domain="+c),d===!0&&u.push("secure"),document.cookie=u.join("; ")},read(s){const i=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(s){this.write(s,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function xb(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function bb(s,i){return i?s.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):s}function fd(s,i){return s&&!xb(i)?bb(s,i):i}const Nc=s=>s instanceof $t?{...s}:s;function dr(s,i){i=i||{};const r={};function o(S,y,w,I){return F.isPlainObject(S)&&F.isPlainObject(y)?F.merge.call({caseless:I},S,y):F.isPlainObject(y)?F.merge({},y):F.isArray(y)?y.slice():y}function c(S,y,w,I){if(F.isUndefined(y)){if(!F.isUndefined(S))return o(void 0,S,w,I)}else return o(S,y,w,I)}function d(S,y){if(!F.isUndefined(y))return o(void 0,y)}function u(S,y){if(F.isUndefined(y)){if(!F.isUndefined(S))return o(void 0,S)}else return o(void 0,y)}function m(S,y,w){if(w in i)return o(S,y);if(w in s)return o(void 0,S)}const g={url:d,method:d,data:d,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:m,headers:(S,y,w)=>c(Nc(S),Nc(y),w,!0)};return F.forEach(Object.keys(Object.assign({},s,i)),function(y){const w=g[y]||c,I=w(s[y],i[y],y);F.isUndefined(I)&&w!==m||(r[y]=I)}),r}const pd=s=>{const i=dr({},s);let{data:r,withXSRFToken:o,xsrfHeaderName:c,xsrfCookieName:d,headers:u,auth:m}=i;i.headers=u=$t.from(u),i.url=od(fd(i.baseURL,i.url),s.params,s.paramsSerializer),m&&u.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let g;if(F.isFormData(r)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((g=u.getContentType())!==!1){const[S,...y]=g?g.split(";").map(w=>w.trim()).filter(Boolean):[];u.setContentType([S||"multipart/form-data",...y].join("; "))}}if(jt.hasStandardBrowserEnv&&(o&&F.isFunction(o)&&(o=o(i)),o||o!==!1&&gb(i.url))){const S=c&&d&&mb.read(d);S&&u.set(c,S)}return i},vb=typeof XMLHttpRequest<"u",yb=vb&&function(s){return new Promise(function(r,o){const c=pd(s);let d=c.data;const u=$t.from(c.headers).normalize();let{responseType:m,onUploadProgress:g,onDownloadProgress:S}=c,y,w,I,K,T;function k(){K&&K(),T&&T(),c.cancelToken&&c.cancelToken.unsubscribe(y),c.signal&&c.signal.removeEventListener("abort",y)}let A=new XMLHttpRequest;A.open(c.method.toUpperCase(),c.url,!0),A.timeout=c.timeout;function Y(){if(!A)return;const R=$t.from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),ne={data:!m||m==="text"||m==="json"?A.responseText:A.response,status:A.status,statusText:A.statusText,headers:R,config:s,request:A};ud(function(we){r(we),k()},function(we){o(we),k()},ne),A=null}"onloadend"in A?A.onloadend=Y:A.onreadystatechange=function(){!A||A.readyState!==4||A.status===0&&!(A.responseURL&&A.responseURL.indexOf("file:")===0)||setTimeout(Y)},A.onabort=function(){A&&(o(new Ee("Request aborted",Ee.ECONNABORTED,s,A)),A=null)},A.onerror=function(){o(new Ee("Network Error",Ee.ERR_NETWORK,s,A)),A=null},A.ontimeout=function(){let M=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const ne=c.transitional||ld;c.timeoutErrorMessage&&(M=c.timeoutErrorMessage),o(new Ee(M,ne.clarifyTimeoutError?Ee.ETIMEDOUT:Ee.ECONNABORTED,s,A)),A=null},d===void 0&&u.setContentType(null),"setRequestHeader"in A&&F.forEach(u.toJSON(),function(M,ne){A.setRequestHeader(ne,M)}),F.isUndefined(c.withCredentials)||(A.withCredentials=!!c.withCredentials),m&&m!=="json"&&(A.responseType=c.responseType),S&&([I,T]=Ka(S,!0),A.addEventListener("progress",I)),g&&A.upload&&([w,K]=Ka(g),A.upload.addEventListener("progress",w),A.upload.addEventListener("loadend",K)),(c.cancelToken||c.signal)&&(y=R=>{A&&(o(!R||R.type?new Tr(null,s,A):R),A.abort(),A=null)},c.cancelToken&&c.cancelToken.subscribe(y),c.signal&&(c.signal.aborted?y():c.signal.addEventListener("abort",y)));const V=fb(c.url);if(V&&jt.protocols.indexOf(V)===-1){o(new Ee("Unsupported protocol "+V+":",Ee.ERR_BAD_REQUEST,s));return}A.send(d||null)})},wb=(s,i)=>{const{length:r}=s=s?s.filter(Boolean):[];if(i||r){let o=new AbortController,c;const d=function(S){if(!c){c=!0,m();const y=S instanceof Error?S:this.reason;o.abort(y instanceof Ee?y:new Tr(y instanceof Error?y.message:y))}};let u=i&&setTimeout(()=>{u=null,d(new Ee(`timeout ${i} of ms exceeded`,Ee.ETIMEDOUT))},i);const m=()=>{s&&(u&&clearTimeout(u),u=null,s.forEach(S=>{S.unsubscribe?S.unsubscribe(d):S.removeEventListener("abort",d)}),s=null)};s.forEach(S=>S.addEventListener("abort",d));const{signal:g}=o;return g.unsubscribe=()=>F.asap(m),g}},jb=function*(s,i){let r=s.byteLength;if(r<i){yield s;return}let o=0,c;for(;o<r;)c=o+i,yield s.slice(o,c),o=c},Sb=async function*(s,i){for await(const r of Nb(s))yield*jb(r,i)},Nb=async function*(s){if(s[Symbol.asyncIterator]){yield*s;return}const i=s.getReader();try{for(;;){const{done:r,value:o}=await i.read();if(r)break;yield o}}finally{await i.cancel()}},_c=(s,i,r,o)=>{const c=Sb(s,i);let d=0,u,m=g=>{u||(u=!0,o&&o(g))};return new ReadableStream({async pull(g){try{const{done:S,value:y}=await c.next();if(S){m(),g.close();return}let w=y.byteLength;if(r){let I=d+=w;r(I)}g.enqueue(new Uint8Array(y))}catch(S){throw m(S),S}},cancel(g){return m(g),c.return()}},{highWaterMark:2})},ii=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",hd=ii&&typeof ReadableStream=="function",_b=ii&&(typeof TextEncoder=="function"?(s=>i=>s.encode(i))(new TextEncoder):async s=>new Uint8Array(await new Response(s).arrayBuffer())),gd=(s,...i)=>{try{return!!s(...i)}catch{return!1}},Cb=hd&&gd(()=>{let s=!1;const i=new Request(jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return s=!0,"half"}}).headers.has("Content-Type");return s&&!i}),Cc=64*1024,Rs=hd&&gd(()=>F.isReadableStream(new Response("").body)),Ja={stream:Rs&&(s=>s.body)};ii&&(s=>{["text","arrayBuffer","blob","formData","stream"].forEach(i=>{!Ja[i]&&(Ja[i]=F.isFunction(s[i])?r=>r[i]():(r,o)=>{throw new Ee(`Response type '${i}' is not supported`,Ee.ERR_NOT_SUPPORT,o)})})})(new Response);const Ab=async s=>{if(s==null)return 0;if(F.isBlob(s))return s.size;if(F.isSpecCompliantForm(s))return(await new Request(jt.origin,{method:"POST",body:s}).arrayBuffer()).byteLength;if(F.isArrayBufferView(s)||F.isArrayBuffer(s))return s.byteLength;if(F.isURLSearchParams(s)&&(s=s+""),F.isString(s))return(await _b(s)).byteLength},Eb=async(s,i)=>{const r=F.toFiniteNumber(s.getContentLength());return r??Ab(i)},Tb=ii&&(async s=>{let{url:i,method:r,data:o,signal:c,cancelToken:d,timeout:u,onDownloadProgress:m,onUploadProgress:g,responseType:S,headers:y,withCredentials:w="same-origin",fetchOptions:I}=pd(s);S=S?(S+"").toLowerCase():"text";let K=wb([c,d&&d.toAbortSignal()],u),T;const k=K&&K.unsubscribe&&(()=>{K.unsubscribe()});let A;try{if(g&&Cb&&r!=="get"&&r!=="head"&&(A=await Eb(y,o))!==0){let ne=new Request(i,{method:"POST",body:o,duplex:"half"}),pe;if(F.isFormData(o)&&(pe=ne.headers.get("content-type"))&&y.setContentType(pe),ne.body){const[we,be]=jc(A,Ka(Sc(g)));o=_c(ne.body,Cc,we,be)}}F.isString(w)||(w=w?"include":"omit");const Y="credentials"in Request.prototype;T=new Request(i,{...I,signal:K,method:r.toUpperCase(),headers:y.normalize().toJSON(),body:o,duplex:"half",credentials:Y?w:void 0});let V=await fetch(T);const R=Rs&&(S==="stream"||S==="response");if(Rs&&(m||R&&k)){const ne={};["status","statusText","headers"].forEach(ve=>{ne[ve]=V[ve]});const pe=F.toFiniteNumber(V.headers.get("content-length")),[we,be]=m&&jc(pe,Ka(Sc(m),!0))||[];V=new Response(_c(V.body,Cc,we,()=>{be&&be(),k&&k()}),ne)}S=S||"text";let M=await Ja[F.findKey(Ja,S)||"text"](V,s);return!R&&k&&k(),await new Promise((ne,pe)=>{ud(ne,pe,{data:M,headers:$t.from(V.headers),status:V.status,statusText:V.statusText,config:s,request:T})})}catch(Y){throw k&&k(),Y&&Y.name==="TypeError"&&/fetch/i.test(Y.message)?Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,s,T),{cause:Y.cause||Y}):Ee.from(Y,Y&&Y.code,s,T)}}),ks={http:Gx,xhr:yb,fetch:Tb};F.forEach(ks,(s,i)=>{if(s){try{Object.defineProperty(s,"name",{value:i})}catch{}Object.defineProperty(s,"adapterName",{value:i})}});const Ac=s=>`- ${s}`,Rb=s=>F.isFunction(s)||s===null||s===!1,md={getAdapter:s=>{s=F.isArray(s)?s:[s];const{length:i}=s;let r,o;const c={};for(let d=0;d<i;d++){r=s[d];let u;if(o=r,!Rb(r)&&(o=ks[(u=String(r)).toLowerCase()],o===void 0))throw new Ee(`Unknown adapter '${u}'`);if(o)break;c[u||"#"+d]=o}if(!o){const d=Object.entries(c).map(([m,g])=>`adapter ${m} `+(g===!1?"is not supported by the environment":"is not available in the build"));let u=i?d.length>1?`since :
`+d.map(Ac).join(`
`):" "+Ac(d[0]):"as no adapter specified";throw new Ee("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o},adapters:ks};function Ns(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Tr(null,s)}function Ec(s){return Ns(s),s.headers=$t.from(s.headers),s.data=Ss.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),md.getAdapter(s.adapter||ea.adapter)(s).then(function(o){return Ns(s),o.data=Ss.call(s,s.transformResponse,o),o.headers=$t.from(o.headers),o},function(o){return dd(o)||(Ns(s),o&&o.response&&(o.response.data=Ss.call(s,s.transformResponse,o.response),o.response.headers=$t.from(o.response.headers))),Promise.reject(o)})}const xd="1.7.9",si={};["object","boolean","number","function","string","symbol"].forEach((s,i)=>{si[s]=function(o){return typeof o===s||"a"+(i<1?"n ":" ")+s}});const Tc={};si.transitional=function(i,r,o){function c(d,u){return"[Axios v"+xd+"] Transitional option '"+d+"'"+u+(o?". "+o:"")}return(d,u,m)=>{if(i===!1)throw new Ee(c(u," has been removed"+(r?" in "+r:"")),Ee.ERR_DEPRECATED);return r&&!Tc[u]&&(Tc[u]=!0,console.warn(c(u," has been deprecated since v"+r+" and will be removed in the near future"))),i?i(d,u,m):!0}};si.spelling=function(i){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${i}`),!0)};function kb(s,i,r){if(typeof s!="object")throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);const o=Object.keys(s);let c=o.length;for(;c-- >0;){const d=o[c],u=i[d];if(u){const m=s[d],g=m===void 0||u(m,d,s);if(g!==!0)throw new Ee("option "+d+" must be "+g,Ee.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Ee("Unknown option "+d,Ee.ERR_BAD_OPTION)}}const Ma={assertOptions:kb,validators:si},vn=Ma.validators;class cr{constructor(i){this.defaults=i,this.interceptors={request:new yc,response:new yc}}async request(i,r){try{return await this._request(i,r)}catch(o){if(o instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const d=c.stack?c.stack.replace(/^.+\n/,""):"";try{o.stack?d&&!String(o.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+d):o.stack=d}catch{}}throw o}}_request(i,r){typeof i=="string"?(r=r||{},r.url=i):r=i||{},r=dr(this.defaults,r);const{transitional:o,paramsSerializer:c,headers:d}=r;o!==void 0&&Ma.assertOptions(o,{silentJSONParsing:vn.transitional(vn.boolean),forcedJSONParsing:vn.transitional(vn.boolean),clarifyTimeoutError:vn.transitional(vn.boolean)},!1),c!=null&&(F.isFunction(c)?r.paramsSerializer={serialize:c}:Ma.assertOptions(c,{encode:vn.function,serialize:vn.function},!0)),Ma.assertOptions(r,{baseUrl:vn.spelling("baseURL"),withXsrfToken:vn.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let u=d&&F.merge(d.common,d[r.method]);d&&F.forEach(["delete","get","head","post","put","patch","common"],T=>{delete d[T]}),r.headers=$t.concat(u,d);const m=[];let g=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(r)===!1||(g=g&&k.synchronous,m.unshift(k.fulfilled,k.rejected))});const S=[];this.interceptors.response.forEach(function(k){S.push(k.fulfilled,k.rejected)});let y,w=0,I;if(!g){const T=[Ec.bind(this),void 0];for(T.unshift.apply(T,m),T.push.apply(T,S),I=T.length,y=Promise.resolve(r);w<I;)y=y.then(T[w++],T[w++]);return y}I=m.length;let K=r;for(w=0;w<I;){const T=m[w++],k=m[w++];try{K=T(K)}catch(A){k.call(this,A);break}}try{y=Ec.call(this,K)}catch(T){return Promise.reject(T)}for(w=0,I=S.length;w<I;)y=y.then(S[w++],S[w++]);return y}getUri(i){i=dr(this.defaults,i);const r=fd(i.baseURL,i.url);return od(r,i.params,i.paramsSerializer)}}F.forEach(["delete","get","head","options"],function(i){cr.prototype[i]=function(r,o){return this.request(dr(o||{},{method:i,url:r,data:(o||{}).data}))}});F.forEach(["post","put","patch"],function(i){function r(o){return function(d,u,m){return this.request(dr(m||{},{method:i,headers:o?{"Content-Type":"multipart/form-data"}:{},url:d,data:u}))}}cr.prototype[i]=r(),cr.prototype[i+"Form"]=r(!0)});class Ds{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(d){r=d});const o=this;this.promise.then(c=>{if(!o._listeners)return;let d=o._listeners.length;for(;d-- >0;)o._listeners[d](c);o._listeners=null}),this.promise.then=c=>{let d;const u=new Promise(m=>{o.subscribe(m),d=m}).then(c);return u.cancel=function(){o.unsubscribe(d)},u},i(function(d,u,m){o.reason||(o.reason=new Tr(d,u,m),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const r=this._listeners.indexOf(i);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const i=new AbortController,r=o=>{i.abort(o)};return this.subscribe(r),i.signal.unsubscribe=()=>this.unsubscribe(r),i.signal}static source(){let i;return{token:new Ds(function(c){i=c}),cancel:i}}}function $b(s){return function(r){return s.apply(null,r)}}function Pb(s){return F.isObject(s)&&s.isAxiosError===!0}const $s={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($s).forEach(([s,i])=>{$s[i]=s});function bd(s){const i=new cr(s),r=Kc(cr.prototype.request,i);return F.extend(r,cr.prototype,i,{allOwnKeys:!0}),F.extend(r,i,null,{allOwnKeys:!0}),r.create=function(c){return bd(dr(s,c))},r}const ge=bd(ea);ge.Axios=cr;ge.CanceledError=Tr;ge.CancelToken=Ds;ge.isCancel=dd;ge.VERSION=xd;ge.toFormData=ai;ge.AxiosError=Ee;ge.Cancel=ge.CanceledError;ge.all=function(i){return Promise.all(i)};ge.spread=$b;ge.isAxiosError=Pb;ge.mergeConfig=dr;ge.AxiosHeaders=$t;ge.formToJSON=s=>cd(F.isHTMLForm(s)?new FormData(s):s);ge.getAdapter=md.getAdapter;ge.HttpStatusCode=$s;ge.default=ge;/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(s[o]=r[o])}return s},Xr.apply(this,arguments)}var qn;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(qn||(qn={}));const Rc="popstate";function Ob(s){s===void 0&&(s={});function i(o,c){let{pathname:d,search:u,hash:m}=o.location;return Ps("",{pathname:d,search:u,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(o,c){return typeof c=="string"?c:Xa(c)}return Ib(i,r,null,s)}function at(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function vd(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Fb(){return Math.random().toString(36).substr(2,8)}function kc(s,i){return{usr:s.state,key:s.key,idx:i}}function Ps(s,i,r,o){return r===void 0&&(r=null),Xr({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?Rr(i):i,{state:r,key:i&&i.key||o||Fb()})}function Xa(s){let{pathname:i="/",search:r="",hash:o=""}=s;return r&&r!=="?"&&(i+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function Rr(s){let i={};if(s){let r=s.indexOf("#");r>=0&&(i.hash=s.substr(r),s=s.substr(0,r));let o=s.indexOf("?");o>=0&&(i.search=s.substr(o),s=s.substr(0,o)),s&&(i.pathname=s)}return i}function Ib(s,i,r,o){o===void 0&&(o={});let{window:c=document.defaultView,v5Compat:d=!1}=o,u=c.history,m=qn.Pop,g=null,S=y();S==null&&(S=0,u.replaceState(Xr({},u.state,{idx:S}),""));function y(){return(u.state||{idx:null}).idx}function w(){m=qn.Pop;let A=y(),Y=A==null?null:A-S;S=A,g&&g({action:m,location:k.location,delta:Y})}function I(A,Y){m=qn.Push;let V=Ps(k.location,A,Y);S=y()+1;let R=kc(V,S),M=k.createHref(V);try{u.pushState(R,"",M)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;c.location.assign(M)}d&&g&&g({action:m,location:k.location,delta:1})}function K(A,Y){m=qn.Replace;let V=Ps(k.location,A,Y);S=y();let R=kc(V,S),M=k.createHref(V);u.replaceState(R,"",M),d&&g&&g({action:m,location:k.location,delta:0})}function T(A){let Y=c.location.origin!=="null"?c.location.origin:c.location.href,V=typeof A=="string"?A:Xa(A);return V=V.replace(/ $/,"%20"),at(Y,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,Y)}let k={get action(){return m},get location(){return s(c,u)},listen(A){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Rc,w),g=A,()=>{c.removeEventListener(Rc,w),g=null}},createHref(A){return i(c,A)},createURL:T,encodeLocation(A){let Y=T(A);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:I,replace:K,go(A){return u.go(A)}};return k}var $c;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})($c||($c={}));function Lb(s,i,r){return r===void 0&&(r="/"),Ub(s,i,r,!1)}function Ub(s,i,r,o){let c=typeof i=="string"?Rr(i):i,d=Ar(c.pathname||"/",r);if(d==null)return null;let u=yd(s);Db(u);let m=null;for(let g=0;m==null&&g<u.length;++g){let S=Jb(d);m=Mb(u[g],S,o)}return m}function yd(s,i,r,o){i===void 0&&(i=[]),r===void 0&&(r=[]),o===void 0&&(o="");let c=(d,u,m)=>{let g={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:u,route:d};g.relativePath.startsWith("/")&&(at(g.relativePath.startsWith(o),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(o.length));let S=Vn([o,g.relativePath]),y=r.concat(g);d.children&&d.children.length>0&&(at(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+S+'".')),yd(d.children,i,y,S)),!(d.path==null&&!d.index)&&i.push({path:S,score:qb(S,d.index),routesMeta:y})};return s.forEach((d,u)=>{var m;if(d.path===""||!((m=d.path)!=null&&m.includes("?")))c(d,u);else for(let g of wd(d.path))c(d,u,g)}),i}function wd(s){let i=s.split("/");if(i.length===0)return[];let[r,...o]=i,c=r.endsWith("?"),d=r.replace(/\?$/,"");if(o.length===0)return c?[d,""]:[d];let u=wd(o.join("/")),m=[];return m.push(...u.map(g=>g===""?d:[d,g].join("/"))),c&&m.push(...u),m.map(g=>s.startsWith("/")&&g===""?"/":g)}function Db(s){s.sort((i,r)=>i.score!==r.score?r.score-i.score:Vb(i.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const Bb=/^:[\w-]+$/,zb=3,Wb=2,Hb=1,Gb=10,Yb=-2,Pc=s=>s==="*";function qb(s,i){let r=s.split("/"),o=r.length;return r.some(Pc)&&(o+=Yb),i&&(o+=Wb),r.filter(c=>!Pc(c)).reduce((c,d)=>c+(Bb.test(d)?zb:d===""?Hb:Gb),o)}function Vb(s,i){return s.length===i.length&&s.slice(0,-1).every((o,c)=>o===i[c])?s[s.length-1]-i[i.length-1]:0}function Mb(s,i,r){let{routesMeta:o}=s,c={},d="/",u=[];for(let m=0;m<o.length;++m){let g=o[m],S=m===o.length-1,y=d==="/"?i:i.slice(d.length)||"/",w=Za({path:g.relativePath,caseSensitive:g.caseSensitive,end:S},y),I=g.route;if(!w&&S&&r&&!o[o.length-1].route.index&&(w=Za({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},y)),!w)return null;Object.assign(c,w.params),u.push({params:c,pathname:Vn([d,w.pathname]),pathnameBase:e1(Vn([d,w.pathnameBase])),route:I}),w.pathnameBase!=="/"&&(d=Vn([d,w.pathnameBase]))}return u}function Za(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[r,o]=Kb(s.path,s.caseSensitive,s.end),c=i.match(r);if(!c)return null;let d=c[0],u=d.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:o.reduce((S,y,w)=>{let{paramName:I,isOptional:K}=y;if(I==="*"){let k=m[w]||"";u=d.slice(0,d.length-k.length).replace(/(.)\/+$/,"$1")}const T=m[w];return K&&!T?S[I]=void 0:S[I]=(T||"").replace(/%2F/g,"/"),S},{}),pathname:d,pathnameBase:u,pattern:s}}function Kb(s,i,r){i===void 0&&(i=!1),r===void 0&&(r=!0),vd(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let o=[],c="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,m,g)=>(o.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(o.push({paramName:"*"}),c+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":s!==""&&s!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),o]}function Jb(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return vd(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Ar(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,o=s.charAt(r);return o&&o!=="/"?null:s.slice(r)||"/"}function Xb(s,i){i===void 0&&(i="/");let{pathname:r,search:o="",hash:c=""}=typeof s=="string"?Rr(s):s;return{pathname:r?r.startsWith("/")?r:Zb(r,i):i,search:t1(o),hash:n1(c)}}function Zb(s,i){let r=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function _s(s,i,r,o){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qb(s){return s.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function Bs(s,i){let r=Qb(s);return i?r.map((o,c)=>c===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function zs(s,i,r,o){o===void 0&&(o=!1);let c;typeof s=="string"?c=Rr(s):(c=Xr({},s),at(!c.pathname||!c.pathname.includes("?"),_s("?","pathname","search",c)),at(!c.pathname||!c.pathname.includes("#"),_s("#","pathname","hash",c)),at(!c.search||!c.search.includes("#"),_s("#","search","hash",c)));let d=s===""||c.pathname==="",u=d?"/":c.pathname,m;if(u==null)m=r;else{let w=i.length-1;if(!o&&u.startsWith("..")){let I=u.split("/");for(;I[0]==="..";)I.shift(),w-=1;c.pathname=I.join("/")}m=w>=0?i[w]:"/"}let g=Xb(c,m),S=u&&u!=="/"&&u.endsWith("/"),y=(d||u===".")&&r.endsWith("/");return!g.pathname.endsWith("/")&&(S||y)&&(g.pathname+="/"),g}const Vn=s=>s.join("/").replace(/\/\/+/g,"/"),e1=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),t1=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,n1=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function r1(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const jd=["post","put","patch","delete"];new Set(jd);const a1=["get",...jd];new Set(a1);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(s[o]=r[o])}return s},Zr.apply(this,arguments)}const oi=v.createContext(null),Sd=v.createContext(null),Pn=v.createContext(null),li=v.createContext(null),Mn=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Nd=v.createContext(null);function i1(s,i){let{relative:r}=i===void 0?{}:i;kr()||at(!1);let{basename:o,navigator:c}=v.useContext(Pn),{hash:d,pathname:u,search:m}=ci(s,{relative:r}),g=u;return o!=="/"&&(g=u==="/"?o:Vn([o,u])),c.createHref({pathname:g,search:m,hash:d})}function kr(){return v.useContext(li)!=null}function Kn(){return kr()||at(!1),v.useContext(li).location}function _d(s){v.useContext(Pn).static||v.useLayoutEffect(s)}function ur(){let{isDataRoute:s}=v.useContext(Mn);return s?b1():s1()}function s1(){kr()||at(!1);let s=v.useContext(oi),{basename:i,future:r,navigator:o}=v.useContext(Pn),{matches:c}=v.useContext(Mn),{pathname:d}=Kn(),u=JSON.stringify(Bs(c,r.v7_relativeSplatPath)),m=v.useRef(!1);return _d(()=>{m.current=!0}),v.useCallback(function(S,y){if(y===void 0&&(y={}),!m.current)return;if(typeof S=="number"){o.go(S);return}let w=zs(S,JSON.parse(u),d,y.relative==="path");s==null&&i!=="/"&&(w.pathname=w.pathname==="/"?i:Vn([i,w.pathname])),(y.replace?o.replace:o.push)(w,y.state,y)},[i,o,u,d,s])}function ci(s,i){let{relative:r}=i===void 0?{}:i,{future:o}=v.useContext(Pn),{matches:c}=v.useContext(Mn),{pathname:d}=Kn(),u=JSON.stringify(Bs(c,o.v7_relativeSplatPath));return v.useMemo(()=>zs(s,JSON.parse(u),d,r==="path"),[s,u,d,r])}function o1(s,i){return l1(s,i)}function l1(s,i,r,o){kr()||at(!1);let{navigator:c}=v.useContext(Pn),{matches:d}=v.useContext(Mn),u=d[d.length-1],m=u?u.params:{};u&&u.pathname;let g=u?u.pathnameBase:"/";u&&u.route;let S=Kn(),y;if(i){var w;let A=typeof i=="string"?Rr(i):i;g==="/"||(w=A.pathname)!=null&&w.startsWith(g)||at(!1),y=A}else y=S;let I=y.pathname||"/",K=I;if(g!=="/"){let A=g.replace(/^\//,"").split("/");K="/"+I.replace(/^\//,"").split("/").slice(A.length).join("/")}let T=Lb(s,{pathname:K}),k=p1(T&&T.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:Vn([g,c.encodeLocation?c.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:Vn([g,c.encodeLocation?c.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,r,o);return i&&k?v.createElement(li.Provider,{value:{location:Zr({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:qn.Pop}},k):k}function c1(){let s=x1(),i=r1(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),r=s instanceof Error?s.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},i),r?v.createElement("pre",{style:c},r):null,null)}const d1=v.createElement(c1,null);class u1 extends v.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,r){return r.location!==i.location||r.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:r.error,location:r.location,revalidation:i.revalidation||r.revalidation}}componentDidCatch(i,r){console.error("React Router caught the following error during render",i,r)}render(){return this.state.error!==void 0?v.createElement(Mn.Provider,{value:this.props.routeContext},v.createElement(Nd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function f1(s){let{routeContext:i,match:r,children:o}=s,c=v.useContext(oi);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Mn.Provider,{value:i},o)}function p1(s,i,r,o){var c;if(i===void 0&&(i=[]),r===void 0&&(r=null),o===void 0&&(o=null),s==null){var d;if(!r)return null;if(r.errors)s=r.matches;else if((d=o)!=null&&d.v7_partialHydration&&i.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let u=s,m=(c=r)==null?void 0:c.errors;if(m!=null){let y=u.findIndex(w=>w.route.id&&(m==null?void 0:m[w.route.id])!==void 0);y>=0||at(!1),u=u.slice(0,Math.min(u.length,y+1))}let g=!1,S=-1;if(r&&o&&o.v7_partialHydration)for(let y=0;y<u.length;y++){let w=u[y];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(S=y),w.route.id){let{loaderData:I,errors:K}=r,T=w.route.loader&&I[w.route.id]===void 0&&(!K||K[w.route.id]===void 0);if(w.route.lazy||T){g=!0,S>=0?u=u.slice(0,S+1):u=[u[0]];break}}}return u.reduceRight((y,w,I)=>{let K,T=!1,k=null,A=null;r&&(K=m&&w.route.id?m[w.route.id]:void 0,k=w.route.errorElement||d1,g&&(S<0&&I===0?(T=!0,A=null):S===I&&(T=!0,A=w.route.hydrateFallbackElement||null)));let Y=i.concat(u.slice(0,I+1)),V=()=>{let R;return K?R=k:T?R=A:w.route.Component?R=v.createElement(w.route.Component,null):w.route.element?R=w.route.element:R=y,v.createElement(f1,{match:w,routeContext:{outlet:y,matches:Y,isDataRoute:r!=null},children:R})};return r&&(w.route.ErrorBoundary||w.route.errorElement||I===0)?v.createElement(u1,{location:r.location,revalidation:r.revalidation,component:k,error:K,children:V(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):V()},null)}var Cd=function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s}(Cd||{}),Qa=function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s}(Qa||{});function h1(s){let i=v.useContext(oi);return i||at(!1),i}function g1(s){let i=v.useContext(Sd);return i||at(!1),i}function m1(s){let i=v.useContext(Mn);return i||at(!1),i}function Ad(s){let i=m1(),r=i.matches[i.matches.length-1];return r.route.id||at(!1),r.route.id}function x1(){var s;let i=v.useContext(Nd),r=g1(Qa.UseRouteError),o=Ad(Qa.UseRouteError);return i!==void 0?i:(s=r.errors)==null?void 0:s[o]}function b1(){let{router:s}=h1(Cd.UseNavigateStable),i=Ad(Qa.UseNavigateStable),r=v.useRef(!1);return _d(()=>{r.current=!0}),v.useCallback(function(c,d){d===void 0&&(d={}),r.current&&(typeof c=="number"?s.navigate(c):s.navigate(c,Zr({fromRouteId:i},d)))},[s,i])}function v1(s){let{to:i,replace:r,state:o,relative:c}=s;kr()||at(!1);let{future:d,static:u}=v.useContext(Pn),{matches:m}=v.useContext(Mn),{pathname:g}=Kn(),S=ur(),y=zs(i,Bs(m,d.v7_relativeSplatPath),g,c==="path"),w=JSON.stringify(y);return v.useEffect(()=>S(JSON.parse(w),{replace:r,state:o,relative:c}),[S,w,c,r,o]),null}function pn(s){at(!1)}function y1(s){let{basename:i="/",children:r=null,location:o,navigationType:c=qn.Pop,navigator:d,static:u=!1,future:m}=s;kr()&&at(!1);let g=i.replace(/^\/*/,"/"),S=v.useMemo(()=>({basename:g,navigator:d,static:u,future:Zr({v7_relativeSplatPath:!1},m)}),[g,m,d,u]);typeof o=="string"&&(o=Rr(o));let{pathname:y="/",search:w="",hash:I="",state:K=null,key:T="default"}=o,k=v.useMemo(()=>{let A=Ar(y,g);return A==null?null:{location:{pathname:A,search:w,hash:I,state:K,key:T},navigationType:c}},[g,y,w,I,K,T,c]);return k==null?null:v.createElement(Pn.Provider,{value:S},v.createElement(li.Provider,{children:r,value:k}))}function Oc(s){let{children:i,location:r}=s;return o1(Os(i),r)}new Promise(()=>{});function Os(s,i){i===void 0&&(i=[]);let r=[];return v.Children.forEach(s,(o,c)=>{if(!v.isValidElement(o))return;let d=[...i,c];if(o.type===v.Fragment){r.push.apply(r,Os(o.props.children,d));return}o.type!==pn&&at(!1),!o.props.index||!o.props.children||at(!1);let u={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=Os(o.props.children,d)),r.push(u)}),r}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(s[o]=r[o])}return s},ei.apply(this,arguments)}function Ed(s,i){if(s==null)return{};var r={},o=Object.keys(s),c,d;for(d=0;d<o.length;d++)c=o[d],!(i.indexOf(c)>=0)&&(r[c]=s[c]);return r}function w1(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function j1(s,i){return s.button===0&&(!i||i==="_self")&&!w1(s)}const S1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],N1=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],_1="6";try{window.__reactRouterVersion=_1}catch{}const C1=v.createContext({isTransitioning:!1}),A1="startTransition",Fc=Hm[A1];function E1(s){let{basename:i,children:r,future:o,window:c}=s,d=v.useRef();d.current==null&&(d.current=Ob({window:c,v5Compat:!0}));let u=d.current,[m,g]=v.useState({action:u.action,location:u.location}),{v7_startTransition:S}=o||{},y=v.useCallback(w=>{S&&Fc?Fc(()=>g(w)):g(w)},[g,S]);return v.useLayoutEffect(()=>u.listen(y),[u,y]),v.createElement(y1,{basename:i,children:r,location:m.location,navigationType:m.action,navigator:u,future:o})}const T1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k1=v.forwardRef(function(i,r){let{onClick:o,relative:c,reloadDocument:d,replace:u,state:m,target:g,to:S,preventScrollReset:y,unstable_viewTransition:w}=i,I=Ed(i,S1),{basename:K}=v.useContext(Pn),T,k=!1;if(typeof S=="string"&&R1.test(S)&&(T=S,T1))try{let R=new URL(window.location.href),M=S.startsWith("//")?new URL(R.protocol+S):new URL(S),ne=Ar(M.pathname,K);M.origin===R.origin&&ne!=null?S=ne+M.search+M.hash:k=!0}catch{}let A=i1(S,{relative:c}),Y=P1(S,{replace:u,state:m,target:g,preventScrollReset:y,relative:c,unstable_viewTransition:w});function V(R){o&&o(R),R.defaultPrevented||Y(R)}return v.createElement("a",ei({},I,{href:T||A,onClick:k||d?o:V,ref:r,target:g}))}),$n=v.forwardRef(function(i,r){let{"aria-current":o="page",caseSensitive:c=!1,className:d="",end:u=!1,style:m,to:g,unstable_viewTransition:S,children:y}=i,w=Ed(i,N1),I=ci(g,{relative:w.relative}),K=Kn(),T=v.useContext(Sd),{navigator:k,basename:A}=v.useContext(Pn),Y=T!=null&&O1(I)&&S===!0,V=k.encodeLocation?k.encodeLocation(I).pathname:I.pathname,R=K.pathname,M=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;c||(R=R.toLowerCase(),M=M?M.toLowerCase():null,V=V.toLowerCase()),M&&A&&(M=Ar(M,A)||M);const ne=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let pe=R===V||!u&&R.startsWith(V)&&R.charAt(ne)==="/",we=M!=null&&(M===V||!u&&M.startsWith(V)&&M.charAt(V.length)==="/"),be={isActive:pe,isPending:we,isTransitioning:Y},ve=pe?o:void 0,Oe;typeof d=="function"?Oe=d(be):Oe=[d,pe?"active":null,we?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let E=typeof m=="function"?m(be):m;return v.createElement(k1,ei({},w,{"aria-current":ve,className:Oe,ref:r,style:E,to:g,unstable_viewTransition:S}),typeof y=="function"?y(be):y)});var Fs;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Fs||(Fs={}));var Ic;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Ic||(Ic={}));function $1(s){let i=v.useContext(oi);return i||at(!1),i}function P1(s,i){let{target:r,replace:o,state:c,preventScrollReset:d,relative:u,unstable_viewTransition:m}=i===void 0?{}:i,g=ur(),S=Kn(),y=ci(s,{relative:u});return v.useCallback(w=>{if(j1(w,r)){w.preventDefault();let I=o!==void 0?o:Xa(S)===Xa(y);g(s,{replace:I,state:c,preventScrollReset:d,relative:u,unstable_viewTransition:m})}},[S,g,y,o,c,r,s,d,u,m])}function O1(s,i){i===void 0&&(i={});let r=v.useContext(C1);r==null&&at(!1);let{basename:o}=$1(Fs.useViewTransitionState),c=ci(s,{relative:i.relative});if(!r.isTransitioning)return!1;let d=Ar(r.currentLocation.pathname,o)||r.currentLocation.pathname,u=Ar(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Za(c.pathname,u)!=null||Za(c.pathname,d)!=null}class F1{constructor(){this.categoryPatterns={"Food & Dining":["starbucks","mcdonalds","burger king","subway","chipotle","kfc","pizza hut","dominos","taco bell","wendys","restaurant","cafe","diner","bistro","grill","bar","pub","bakery","doordash","uber eats","grubhub","postmates","food","dining"],Transportation:["shell","exxon","chevron","bp","mobil","gas","fuel","station","uber","lyft","taxi","metro","bus","train","parking","toll","automotive","repair","mechanic","oil change"],Shopping:["amazon","walmart","target","costco","best buy","home depot","lowes","macys","nordstrom","tj maxx","marshall","store","shopping","retail","mall","outlet"],Groceries:["kroger","safeway","whole foods","trader joe","publix","aldi","wegmans","harris teeter","food lion","giant","stop shop","grocery","supermarket","market"],Entertainment:["netflix","spotify","apple music","disney","hulu","amazon prime","youtube","cinema","theater","movie","concert","game","steam","playstation","xbox","entertainment"],Utilities:["electric","power","water","gas company","internet","cable","phone","cell","verizon","att","tmobile","comcast","utility"],Healthcare:["pharmacy","cvs","walgreens","rite aid","hospital","clinic","doctor","dentist","medical","health","insurance"],Finance:["bank","atm","fee","interest","loan","credit","investment","transfer","payment","financial"],"Phone Service":["phone","cell","cellular","mobile","verizon","att","at&t","tmobile","t-mobile","sprint","boost","cricket","mint mobile","visible","metro pcs","tracfone","straight talk","ting","spectrum"]},this.userCorrections=this.loadUserCorrections()}categorizeTransaction(i,r=null){if(!i)return{category:"Other",confidence:0};const o=i.toLowerCase().trim(),c=this.checkUserCorrections(o);if(c)return{category:c,confidence:95};const d=this.findPatternMatch(o);return d||this.advancedCategorization(o,r)}checkUserCorrections(i){for(const r of this.userCorrections)if(i.includes(r.merchant.toLowerCase()))return r.category;return null}findPatternMatch(i){const r={};for(const[c,d]of Object.entries(this.categoryPatterns)){let u=0,m=0;for(const g of d)i.includes(g)&&(u+=g.length,m++);m>0&&(r[c]=u/d.length*100)}if(Object.keys(r).length===0)return null;const o=Object.keys(r).reduce((c,d)=>r[c]>r[d]?c:d);return{category:o,confidence:Math.min(Math.round(r[o]*2),90)}}advancedCategorization(i,r){if(r){const o=parseFloat(r);if(o<10&&this.containsWords(i,["coffee","snack","drink"]))return{category:"Food & Dining",confidence:70};if(o>500&&this.containsWords(i,["rent","mortgage","property"]))return{category:"Housing",confidence:75}}return this.containsWords(i,["purchase","buy","shop"])?{category:"Shopping",confidence:60}:this.containsWords(i,["payment","bill","invoice"])?{category:"Bills & Utilities",confidence:65}:{category:"Other",confidence:30}}containsWords(i,r){return r.some(o=>i.includes(o))}learnFromCorrection(i,r,o){const c=this.extractMerchantName(i),d={merchant:c,originalCategory:r,correctedCategory:o,timestamp:new Date().toISOString()};this.userCorrections.push(d),this.saveUserCorrections(),this.categoryPatterns[o].some(u=>c.toLowerCase().includes(u))||this.categoryPatterns[o].push(c.toLowerCase())}extractMerchantName(i){let r=i.replace(/^(purchase|payment|transfer)\s+/i,"").replace(/\s+(#\d+|store|inc|llc|corp).*$/i,"").trim();return r=r.split(/\s+#|\s+\d{3,}/)[0],r}loadUserCorrections(){try{const i=localStorage.getItem("ai_transaction_corrections");return i?JSON.parse(i):[]}catch(i){return console.error("Error loading user corrections:",i),[]}}saveUserCorrections(){try{localStorage.setItem("ai_transaction_corrections",JSON.stringify(this.userCorrections))}catch(i){console.error("Error saving user corrections:",i)}}getStats(){const i=this.userCorrections.length,r={};return this.userCorrections.forEach(o=>{r[o.correctedCategory]=(r[o.correctedCategory]||0)+1}),{totalCorrections:i,categoryDistribution:r,learningAccuracy:i>0?Math.min(85+i*2,95):65}}}const lr=new F1,I1=["Food & Dining","Transportation","Shopping","Groceries","Entertainment","Utilities","Healthcare","Finance","Housing","Bills & Utilities","Education","Travel","Personal Care","Gifts & Donations","Other"];function L1({amount:s,setAmount:i,category:r,setCategory:o,date:c,setDate:d,description:u,setDescription:m,darkMode:g}){const S=ur(),[y,w]=v.useState(!1),[I,K]=v.useState(!1),[T,k]=v.useState({}),[A,Y]=v.useState(!1),[V,R]=v.useState(null),[M,ne]=v.useState(!1),[pe,we]=v.useState(!1);v.useEffect(()=>{if(u.trim().length>2){we(!0);const P=setTimeout(()=>{const Z=lr.categorizeTransaction(u,s);R(Z),ne(Z.confidence>60&&Z.category!==r),we(!1)},500);return()=>clearTimeout(P)}else ne(!1),R(null),we(!1)},[u,s,r]);const be=()=>{V&&(o(V.category),ne(!1),lr.learnFromCorrection(u,s,V.category))},ve=()=>{ne(!1)},Oe=P=>{const Z=parseFloat(P.target.value);i(isNaN(Z)?0:Z),T.amount&&k(oe=>({...oe,amount:""}))},E=P=>{d(P.target.value),T.date&&k(Z=>({...Z,date:""}))},Q=()=>{const P={};return r||(P.category="Please select a category"),u.trim()||(P.description="Description is required"),(!s||s<=0)&&(P.amount="Please enter a valid amount"),c||(P.date="Please select a date"),k(P),Object.keys(P).length===0},se=async P=>{if(P.preventDefault(),!Q()){Y(!0),setTimeout(()=>Y(!1),500);return}w(!0),k({});const Z={category:r,date:new Date(c).toISOString().split("T")[0],description:u,amount:s};try{const oe=await ge.post("http://127.0.0.1:5001/transactions",Z);console.log("Transaction added:",oe.data),V&&V.category!==r&&V.confidence>50&&(lr.learnFromCorrection(u,V.category,r),console.log(`AI learned: "${u}" should be categorized as "${r}" not "${V.category}"`)),K(!0),o(""),d(""),m(""),i(0),R(null),ne(!1),setTimeout(()=>{K(!1),S("/transactions")},2e3)}catch(oe){console.error("Error adding transaction:",oe),k({submit:"Failed to add transaction. Please try again."})}finally{w(!1)}};return n.jsxs("div",{className:"add-transactions-container",children:[n.jsx("style",{jsx:!0,children:`
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
            `}),n.jsx("div",{className:"form-header",children:n.jsx("h5",{children:"💰 Set X-Penses"})}),I&&n.jsx("div",{className:"success-message",children:"✅ Transaction added successfully! Redirecting..."}),T.submit&&n.jsxs("div",{className:"error-message",style:{marginBottom:"20px",justifyContent:"center"},children:["❌ ",T.submit]}),n.jsx("div",{className:"form-container",children:n.jsxs("form",{onSubmit:se,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"category",children:"📂 Category"}),n.jsxs("select",{id:"category",name:"category",className:`form-control ${T.category?"error":""}`,value:r,style:{color:r===""?g?"#a0aec0":"#718096":g?"#ffffff":"#000000",backgroundColor:g?"#2d3748":"#ffffff",fontSize:"1rem",fontWeight:r===""?"400":"600",fontStyle:r===""?"italic":"normal"},onChange:P=>{const Z=P.target.value;o(Z),V&&Z&&Z!==V.category&&(lr.learnFromCorrection(u,s,Z),ne(!1)),T.category&&k(oe=>({...oe,category:""}))},children:[n.jsx("option",{value:"",children:"🎯 Select A Category"}),I1.map(P=>n.jsxs("option",{value:P,children:[P==="Food & Dining"&&"🍕",P==="Transportation"&&"🚗",P==="Shopping"&&"🛍️",P==="Groceries"&&"🛒",P==="Entertainment"&&"🎬",P==="Utilities"&&"⚡",P==="Healthcare"&&"�",P==="Finance"&&"💳",P==="Housing"&&"🏠",P==="Bills & Utilities"&&"📄",P==="Education"&&"📚",P==="Travel"&&"✈️",P==="Personal Care"&&"💄",P==="Gifts & Donations"&&"�",P==="Other"&&"❓"," "+P]},P))]}),T.category&&n.jsxs("div",{className:"error-message",children:["❌ ",T.category]}),M&&V&&n.jsx("div",{className:"ai-suggestion-banner",children:n.jsxs("div",{className:"ai-suggestion-content",children:[n.jsx("div",{className:"ai-icon",children:"🤖"}),n.jsxs("div",{className:"ai-text",children:[n.jsxs("div",{className:"ai-main-text",children:["AI suggests: ",n.jsx("strong",{children:V.category})]}),n.jsxs("div",{className:"ai-confidence",children:["Confidence: ",V.confidence,"%"]})]}),n.jsxs("div",{className:"ai-actions",children:[n.jsx("button",{type:"button",className:"btn-ai-accept",onClick:be,children:"✅ Use This"}),n.jsx("button",{type:"button",className:"btn-ai-dismiss",onClick:ve,children:"❌ Dismiss"})]})]})}),pe&&n.jsxs("div",{className:"ai-analyzing",children:[n.jsx("div",{className:"spinner"}),n.jsx("span",{children:"🤖 AI is analyzing..."})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"text",children:"📝 Description"}),n.jsx("input",{type:"text",className:`form-control ${T.description?"error":""}`,id:"text",name:"text",value:u,placeholder:"💭 Enter transaction description...",onChange:P=>{m(P.target.value),T.description&&k(Z=>({...Z,description:""}))}}),T.description&&n.jsxs("div",{className:"error-message",children:["❌ ",T.description]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"amount",children:"💵 Amount"}),n.jsxs("div",{className:"amount-input-container",children:[n.jsx("span",{className:"currency-symbol",children:"$"}),n.jsx("input",{type:"number",id:"amount",name:"amount",className:`form-control amount-input ${T.amount?"error":""}`,value:s,placeholder:"0.00",min:"0",step:"0.01",onChange:Oe})]}),T.amount&&n.jsxs("div",{className:"error-message",children:["❌ ",T.amount]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"date",children:"📅 Date"}),n.jsx("input",{type:"date",id:"date",name:"date",className:`form-control ${T.date?"error":""}`,value:c?new Date(c).toISOString().split("T")[0]:"",onChange:E}),T.date&&n.jsxs("div",{className:"error-message",children:["❌ ",T.date]})]}),n.jsx("div",{children:n.jsx("button",{type:"submit",className:"submit-button",disabled:y,children:y?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"loading-spinner"}),"Adding Transaction..."]}):"✨ Add Transaction"})})]})})]})}class U1{constructor(){this.EMERGENCY_FUND_MONTHS=6,this.SAVINGS_RATE_TARGET=.2,this.LIQUID_ASSETS_MIN=.15}calculateFinancialMetrics(i,r=0,o=0){const c=this.getTotalCash(i),d=this.getTotalBankBalance(i),u=this.getTotalSavings(i),m=c+d+u;return{totalCash:c,totalBankBalance:d,totalSavings:u,totalAssets:m,liquidityRatio:this.calculateLiquidityRatio(c,d,m),liquidAssets:c+d,emergencyFundStatus:this.analyzeEmergencyFund(u,o),emergencyFundTarget:o*this.EMERGENCY_FUND_MONTHS,savingsRate:r>0?u/r:0,savingsRateTarget:this.SAVINGS_RATE_TARGET,financialHealthScore:this.calculateFinancialHealthScore(m,r,o,u),accountDistribution:this.calculateAccountDistribution(i),projectedGrowth:this.calculateGrowthProjections(m,r,o)}}getTotalCash(i){return i.reduce((r,o)=>r+(o.cash_on_hand||0),0)}getTotalBankBalance(i){return i.reduce((r,o)=>r+(o.bank_account_balance||0),0)}getTotalSavings(i){return i.reduce((r,o)=>r+(o.savings||0),0)}calculateLiquidityRatio(i,r,o){return o===0?0:(i+r)/o*100}analyzeEmergencyFund(i,r){if(r===0)return{status:"unknown",months:0,recommendation:"Set monthly expenses to analyze emergency fund"};const o=i/r;return o>=this.EMERGENCY_FUND_MONTHS?{status:"excellent",months:o,recommendation:"Great! Consider investing excess emergency funds"}:o>=3?{status:"good",months:o,recommendation:`Add $${((this.EMERGENCY_FUND_MONTHS-o)*r).toFixed(2)} more`}:o>=1?{status:"needs_improvement",months:o,recommendation:"Focus on building emergency fund to 3-6 months"}:{status:"critical",months:o,recommendation:"Emergency fund needed! Start with $1000 minimum"}}calculateFinancialHealthScore(i,r,o,c){let d=0;if(i>0&&(d+=Math.min(30,i/1e4*30)),o>0){const u=c/o;d+=Math.min(25,u/this.EMERGENCY_FUND_MONTHS*25)}if(r>0){const u=c/r;d+=Math.min(25,u/this.SAVINGS_RATE_TARGET*25)}if(r>0&&o>0){const u=o/r;u<=.5?d+=20:u<=.7?d+=15:u<=.8?d+=10:u<=.9&&(d+=5)}return Math.min(100,Math.round(d))}calculateAccountDistribution(i){const r=this.getTotalCash(i),o=this.getTotalBankBalance(i),c=this.getTotalSavings(i),d=r+o+c;return d===0?{cash:0,bank:0,savings:0}:{cash:r/d*100,bank:o/d*100,savings:c/d*100}}calculateGrowthProjections(i,r,o){const c=r-o;return{oneMonth:i+c,threeMonth:i+c*3,sixMonth:i+c*6,oneYear:i+c*12,monthlyNetFlow:c}}validateBalanceInputs(i,r,o){const c={};i<0&&(c.cashOnHand="Cash amount cannot be negative"),i>5e4&&(c.cashOnHand="Consider depositing large cash amounts in bank for security"),r<0&&(c.bankBalance="Bank balance cannot be negative"),o<0&&(c.savings="Savings cannot be negative"),i===0&&r===0&&o===0&&(c.general="Please enter at least one balance amount");const d=i+r+o;if(d>0){const u=i/d*100;u>30&&(c.warning=`${u.toFixed(0)}% in cash - consider banking for safety`)}return c}suggestOptimalAllocation(i){const r={cash:0,bank:0,savings:0,reasoning:[]};return i<=1e3?(r.cash=i*.2,r.bank=i*.8,r.savings=0,r.reasoning.push("Keep small amounts liquid and accessible")):i<=1e4?(r.cash=Math.min(500,i*.1),r.bank=i*.4,r.savings=i*.5,r.reasoning.push("Build emergency fund in savings"),r.reasoning.push("Keep some funds liquid for daily expenses")):(r.cash=Math.min(1e3,i*.05),r.bank=i*.35,r.savings=i*.6,r.reasoning.push("Maximize savings for emergency fund and goals"),r.reasoning.push("Maintain liquidity for unexpected expenses")),r}analyzeAccountConsolidation(i){if(i.length<=1)return null;const r=[];i.forEach((c,d)=>{const u=c.cash_on_hand+c.bank_account_balance+c.savings;u<100&&r.push({index:d,total:u,account:c})});const o=[];if(r.length>1){const c=r.reduce((d,u)=>d+u.total,0);o.push({type:"consolidate_low_balance",message:`Consider consolidating ${r.length} low-balance accounts (${c.toFixed(2)})`,accounts:r,potentialSavings:r.length*5})}return o.length>0?o:null}generateFinancialInsights(i,r){const o=[];i.liquidityRatio<15?o.push({type:"warning",category:"liquidity",title:"Low Liquidity Warning",message:`Only ${i.liquidityRatio.toFixed(1)}% of assets are liquid. Consider keeping more in cash/checking.`,priority:"high"}):i.liquidityRatio>80&&o.push({type:"opportunity",category:"liquidity",title:"Excess Liquidity",message:`${i.liquidityRatio.toFixed(1)}% of assets are liquid. Consider moving some to higher-yield savings.`,priority:"medium"});const c=i.emergencyFundStatus;c.status==="critical"?o.push({type:"critical",category:"emergency_fund",title:"Emergency Fund Critical",message:c.recommendation,priority:"high"}):c.status==="excellent"&&o.push({type:"success",category:"emergency_fund",title:"Emergency Fund Complete",message:`Great! You have ${c.months.toFixed(1)} months of expenses saved.`,priority:"low"}),i.financialHealthScore>=80?o.push({type:"success",category:"health",title:"Excellent Financial Health",message:`Your financial health score is ${i.financialHealthScore}/100. Keep it up!`,priority:"low"}):i.financialHealthScore<40&&o.push({type:"warning",category:"health",title:"Financial Health Needs Attention",message:`Your financial health score is ${i.financialHealthScore}/100. Focus on building emergency fund and reducing expenses.`,priority:"high"});const d=this.analyzeAccountConsolidation(r);return d&&o.push({type:"opportunity",category:"consolidation",title:"Account Consolidation Opportunity",message:d[0].message,priority:"medium"}),o}}class Td{constructor(){try{this.updateHistory=this.loadUpdateHistory(),this.updatePatterns=this.loadUpdatePatterns(),this.validationRules=this.initializeValidationRules()}catch(i){console.warn("SmartUpdateService initialization warning:",i),this.updateHistory=[],this.updatePatterns={},this.validationRules=this.getDefaultValidationRules()}}getDefaultValidationRules(){return{balance:{minimums:{cash:0,bank:0,savings:0},maximums:{cash:5e4,bank:1e6,savings:1e6},ratios:{cashToTotal:{min:.05,max:.3},savingsToTotal:{min:.1,max:.6}},warningThresholds:{lowCash:100,lowSavings:1e3,highCash:1e4}}}}initializeValidationRules(){return{balance:{minimums:{cash:0,bank:0,savings:0},maximums:{cash:5e4,bank:1e6,savings:1e6},ratios:{cashToTotal:{min:.05,max:.3},savingsToTotal:{min:.1,max:.6}},warningThresholds:{lowCash:100,lowSavings:1e3,highCash:1e4}},budget:{categories:{"Food & Dining":{minPercent:10,maxPercent:30},Transportation:{minPercent:5,maxPercent:20},Utilities:{minPercent:5,maxPercent:15},Entertainment:{minPercent:2,maxPercent:15},Healthcare:{minPercent:3,maxPercent:20}},totalBudgetLimits:{min:100,max:5e4}},investments:{diversification:{maxSingleAsset:.4,minAssets:3,riskLevels:{conservative:{crypto:.1,stocks:.4},moderate:{crypto:.2,stocks:.6},aggressive:{crypto:.4,stocks:.8}}}}}}validateUpdate(i,r,o=null){const c={isValid:!0,errors:[],warnings:[],suggestions:[],aiRecommendations:[]};switch(i){case"balance":return this.validateBalanceUpdate(r,c,o);case"budget":return this.validateBudgetUpdate(r,c,o);case"investment":return this.validateInvestmentUpdate(r,c,o);case"transaction":return this.validateTransactionUpdate(r,c,o);default:return c.errors.push("Unknown update type"),c.isValid=!1,c}}validateBalanceUpdate(i,r,o){const{cash_on_hand:c,bank_account_balance:d,savings:u}=i,m=c+d+u,g=this.validationRules.balance;if(c<g.minimums.cash&&(r.errors.push("Cash amount cannot be negative"),r.isValid=!1),d<g.minimums.bank&&(r.errors.push("Bank balance cannot be negative"),r.isValid=!1),u<g.minimums.savings&&(r.errors.push("Savings cannot be negative"),r.isValid=!1),m>0){const S=c/m,y=u/m;S>g.ratios.cashToTotal.max&&(r.warnings.push(`High cash percentage (${(S*100).toFixed(1)}%). Consider moving some to savings or investments.`),r.aiRecommendations.push({type:"reallocation",message:`Move $${(c-m*g.ratios.cashToTotal.max).toFixed(2)} from cash to savings`,suggestedAllocation:{cash:Math.round(m*g.ratios.cashToTotal.max),bank:d,savings:u+(c-Math.round(m*g.ratios.cashToTotal.max))}})),y<g.ratios.savingsToTotal.min&&(r.warnings.push(`Low savings percentage (${(y*100).toFixed(1)}%). Consider increasing your emergency fund.`),r.suggestions.push("Aim for at least 3-6 months of expenses in savings"))}return this.addPatternBasedSuggestions(r,"balance",i,o),r}validateBudgetUpdate(i,r,o){const{item_name:c,amount:d,date:u}=i;this.validationRules.budget,(!c||c.trim().length===0)&&(r.errors.push("Budget item name is required"),r.isValid=!1),(!d||d<=0)&&(r.errors.push("Budget amount must be positive"),r.isValid=!1),u||(r.errors.push("Budget date is required"),r.isValid=!1);const m=this.suggestBudgetCategory(c);m&&m!==c&&r.suggestions.push(`Consider categorizing as "${m}" for better tracking`);const g=this.suggestBudgetOptimization(c,d,o);return g&&r.aiRecommendations.push(g),r}validateInvestmentUpdate(i,r,o){const{name:c,amount:d,pricePerUnit:u,total_price:m}=i,g=this.validationRules.investments;if((!c||c.trim().length===0)&&(r.errors.push("Investment name is required"),r.isValid=!1),(!d||d<=0)&&(r.errors.push("Investment amount must be positive"),r.isValid=!1),o&&o.portfolio){const y=this.analyzePortfolioDiversification(i,o.portfolio);y.riskLevel==="high"&&(r.warnings.push(`High risk detected: ${y.reason}`),r.aiRecommendations.push({type:"diversification",message:"Consider diversifying your portfolio to reduce risk",suggestions:y.suggestions})),y.concentration>g.diversification.maxSingleAsset&&r.warnings.push(`High concentration in ${c} (${(y.concentration*100).toFixed(1)}%)`)}const S=this.getMarketTimingSuggestion(c,d);return S&&r.suggestions.push(S),r}validateBulkUpdate(i,r){const o={isValid:!0,validUpdates:[],invalidUpdates:[],warnings:[],suggestions:[],aiRecommendations:[]};return r.forEach((c,d)=>{const u=this.validateUpdate(i,c.data,c.currentData);u.isValid?o.validUpdates.push({...c,index:d,validation:u}):(o.invalidUpdates.push({...c,index:d,validation:u}),o.isValid=!1),o.warnings.push(...u.warnings),o.suggestions.push(...u.suggestions),o.aiRecommendations.push(...u.aiRecommendations)}),this.addBulkRecommendations(o,i,r),o}generateUpdateSuggestions(i,r,o=null){const c={priority:[],optimization:[],maintenance:[]};switch(i){case"balance":return this.generateBalanceSuggestions(r,c,o);case"budget":return this.generateBudgetSuggestions(r,c,o);case"investment":return this.generateInvestmentSuggestions(r,c,o);default:return c}}generateBalanceSuggestions(i,r,o){if(!i||i.length===0)return r;const c=i.reduce((m,g)=>m+g.cash_on_hand+g.bank_account_balance+g.savings,0),d=c/i.length;c<1e3&&r.priority.push({type:"emergency_fund",message:"Build emergency fund to at least $1,000",action:"Increase savings gradually",priority:"high"});const u=i.filter(m=>m.cash_on_hand+m.bank_account_balance+m.savings<d*.5);return u.length>1&&r.optimization.push({type:"consolidation",message:`Consider consolidating ${u.length} low-balance accounts`,action:"Merge accounts to reduce maintenance overhead",priority:"medium"}),r}trackUpdate(i,r,o){try{const c={timestamp:new Date().toISOString(),type:i,data:r,result:o,success:o.success||!1};this.updateHistory.push(c),this.saveUpdateHistory(),this.analyzeUpdatePatterns()}catch(c){console.warn("Error tracking update:",c)}}analyzeUpdatePatterns(){if(this.updateHistory.length<5)return;const i=this.updateHistory.slice(-20),r={frequency:{},timing:{},amounts:{},success_rate:0};i.forEach(c=>{r.frequency[c.type]=(r.frequency[c.type]||0)+1});const o=i.filter(c=>c.success).length;r.success_rate=o/i.length*100,this.updatePatterns=r,this.saveUpdatePatterns()}addPatternBasedSuggestions(i,r,o,c){const d=this.getUserUpdatePatterns(r);d.frequency>5&&r==="balance"&&d.averageAmount&&o.cash_on_hand>d.averageAmount*1.5&&i.suggestions.push("This is higher than your usual cash amount. Consider if this allocation is intentional.")}suggestBudgetCategory(i){const r={"Food & Dining":["food","restaurant","dining","grocery","coffee","lunch","dinner"],Transportation:["gas","fuel","car","transport","uber","taxi","bus"],Utilities:["electric","water","gas","internet","phone","utility"],Entertainment:["movie","game","concert","streaming","netflix","entertainment"],Healthcare:["medical","doctor","pharmacy","health","insurance"]},o=i.toLowerCase();for(const[c,d]of Object.entries(r))if(d.some(u=>o.includes(u)))return c;return null}analyzePortfolioDiversification(i,r){const o=r.reduce((d,u)=>d+u.total_price,0)+i.total_price,c=i.total_price/o;return{concentration:c,riskLevel:c>.4?"high":c>.2?"medium":"low",reason:c>.4?`${i.name} would represent ${(c*100).toFixed(1)}% of portfolio`:"",suggestions:c>.4?["Consider reducing position size","Add other assets for diversification"]:[]}}getMarketTimingSuggestion(i,r){return["bitcoin","ethereum","crypto"].some(c=>i.toLowerCase().includes(c))?"Consider dollar-cost averaging for volatile assets rather than lump sum investment":null}loadUpdateHistory(){try{const i=localStorage.getItem("smart_update_history");return i?JSON.parse(i):[]}catch(i){return console.warn("Error loading update history:",i),[]}}saveUpdateHistory(){try{const i=this.updateHistory.slice(-100);localStorage.setItem("smart_update_history",JSON.stringify(i))}catch(i){console.warn("Error saving update history:",i)}}loadUpdatePatterns(){try{const i=localStorage.getItem("smart_update_patterns");return i?JSON.parse(i):{}}catch(i){return console.warn("Error loading update patterns:",i),{}}}saveUpdatePatterns(){try{localStorage.setItem("smart_update_patterns",JSON.stringify(this.updatePatterns))}catch(i){console.warn("Error saving update patterns:",i)}}getUserUpdatePatterns(i){var c;const r=this.updateHistory.filter(d=>d.type===i);if(r.length===0)return{frequency:0};const o=r.filter(d=>d.data&&typeof d.data.amount=="number").map(d=>d.data.amount);return{frequency:r.length,averageAmount:o.length>0?o.reduce((d,u)=>d+u,0)/o.length:null,lastUpdate:(c=r[r.length-1])==null?void 0:c.timestamp}}addBulkRecommendations(i,r,o){r==="balance"&&o.length>3&&i.aiRecommendations.push({type:"bulk_optimization",message:"Multiple balance updates detected. Consider using account consolidation feature.",action:"Review account structure for optimization opportunities"}),r==="budget"&&o.length>5&&i.suggestions.push("Large budget update detected. Consider using budget templates for consistency.")}generateOptimizationReport(i,r){const o={summary:"",recommendations:[],metrics:{},nextSteps:[]};return o.summary=`Analysis complete for ${i} updates. Found ${r.length} items for review.`,o}}function D1({darkMode:s,updateType:i,items:r,onBulkUpdate:o,onClose:c}){const[d]=v.useState(()=>{try{return new Td}catch(E){return console.warn("Failed to initialize SmartUpdateService:",E),null}}),[u,m]=v.useState([]),[g,S]=v.useState({}),[y,w]=v.useState(null),[I,K]=v.useState(!1),[T,k]=v.useState(!1),[A,Y]=v.useState({priority:[],optimization:[],maintenance:[]});v.useEffect(()=>{if(d)try{const E=d.generateUpdateSuggestions(i,r);Y(E)}catch(E){console.warn("Failed to generate AI suggestions:",E),Y({priority:[],optimization:[],maintenance:[]})}},[r,i,d]);const V=(E,Q)=>{m(Q?[...u,E]:u.filter(se=>se!==E))},R=()=>{u.length===r.length?m([]):m(r.map(E=>E.id))},M=(E,Q)=>{S({...g,[E]:Q})},ne=()=>{const E=u.map(Q=>{const se=r.find(Z=>Z.id===Q);if(!se)return null;const P={...se};if(i==="balance"){if(g.cashOperation&&g.cashAmount)switch(g.cashOperation){case"add":P.cash_on_hand=(se.cash_on_hand||0)+g.cashAmount;break;case"subtract":P.cash_on_hand=Math.max(0,(se.cash_on_hand||0)-g.cashAmount);break;case"set":P.cash_on_hand=g.cashAmount;break;case"percentage":P.cash_on_hand=(se.cash_on_hand||0)*(1+g.cashAmount/100);break}if(g.bankOperation&&g.bankAmount)switch(g.bankOperation){case"add":P.bank_account_balance=(se.bank_account_balance||0)+g.bankAmount;break;case"subtract":P.bank_account_balance=Math.max(0,(se.bank_account_balance||0)-g.bankAmount);break;case"set":P.bank_account_balance=g.bankAmount;break;case"percentage":P.bank_account_balance=(se.bank_account_balance||0)*(1+g.bankAmount/100);break}if(g.savingsOperation&&g.savingsAmount)switch(g.savingsOperation){case"add":P.savings=(se.savings||0)+g.savingsAmount;break;case"subtract":P.savings=Math.max(0,(se.savings||0)-g.savingsAmount);break;case"set":P.savings=g.savingsAmount;break;case"percentage":P.savings=(se.savings||0)*(1+g.savingsAmount/100);break}P.total=(P.cash_on_hand||0)+(P.bank_account_balance||0)+(P.savings||0)}return{id:Q,data:P,currentData:se}}).filter(Boolean);if(!d){const Q={isValid:E.length>0,validUpdates:E,invalidUpdates:[],warnings:[],suggestions:[],aiRecommendations:[]};return w(Q),Q}try{const Q=d.validateBulkUpdate(i,E);return w(Q),Q}catch(Q){console.warn("Bulk validation failed:",Q);const se={isValid:E.length>0,validUpdates:E,invalidUpdates:[],warnings:["Smart validation unavailable - using basic validation"],suggestions:[],aiRecommendations:[]};return w(se),se}},pe=()=>{const E=ne();(E.isValid||E.validUpdates.length>0)&&k(!0)},we=async()=>{K(!0);try{const E=ne();if(E.validUpdates.length>0&&(await o(E.validUpdates.map(Q=>({id:Q.id,data:Q.data}))),d))try{d.trackUpdate("bulk_"+i,{count:E.validUpdates.length,updateData:g},{success:!0})}catch(Q){console.warn("Failed to track bulk update:",Q)}}catch(E){if(console.error("Bulk update failed:",E),d)try{d.trackUpdate("bulk_"+i,g,{success:!1,error:E.message})}catch(Q){console.warn("Failed to track bulk update error:",Q)}}finally{K(!1)}},be=()=>{switch(i){case"balance":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"💰 Bulk Balance Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"💵 Cash Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>M("cashOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:E=>M("cashAmount",parseFloat(E.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"🏦 Bank Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>M("bankOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:E=>M("bankAmount",parseFloat(E.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-4",children:[n.jsx("label",{className:"form-label",children:"🐷 Savings Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>M("savingsOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add Amount"}),n.jsx("option",{value:"subtract",children:"Subtract Amount"}),n.jsx("option",{value:"set",children:"Set Amount"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",onChange:E=>M("savingsAmount",parseFloat(E.target.value)||0)})]})]})]})]});case"budget":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"📊 Bulk Budget Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"💰 Amount Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>M("amountOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Increase by Amount"}),n.jsx("option",{value:"subtract",children:"Decrease by Amount"}),n.jsx("option",{value:"multiply",children:"Multiply by Factor"}),n.jsx("option",{value:"percentage",children:"Percentage Change"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Value",step:"0.01",onChange:E=>M("amountValue",parseFloat(E.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"📅 Date Update"}),n.jsx("input",{type:"date",className:"form-control",onChange:E=>M("newDate",E.target.value)})]})]})]});case"investment":return n.jsxs("div",{className:"bulk-update-form",children:[n.jsx("h6",{children:"📈 Bulk Investment Update"}),n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"📊 Amount Adjustment"}),n.jsxs("div",{className:"input-group",children:[n.jsxs("select",{className:"form-select",onChange:E=>M("amountOperation",E.target.value),children:[n.jsx("option",{value:"",children:"No Change"}),n.jsx("option",{value:"add",children:"Add to Position"}),n.jsx("option",{value:"subtract",children:"Reduce Position"}),n.jsx("option",{value:"rebalance",children:"Rebalance Portfolio"})]}),n.jsx("input",{type:"number",className:"form-control",placeholder:"Amount",step:"0.01",onChange:E=>M("amountValue",parseFloat(E.target.value)||0)})]})]}),n.jsxs("div",{className:"col-md-6",children:[n.jsx("label",{className:"form-label",children:"💡 Rebalancing Strategy"}),n.jsxs("select",{className:"form-select",onChange:E=>M("rebalanceStrategy",E.target.value),children:[n.jsx("option",{value:"",children:"Manual Updates"}),n.jsx("option",{value:"equal_weight",children:"Equal Weight"}),n.jsx("option",{value:"market_cap",children:"Market Cap Weighted"}),n.jsx("option",{value:"risk_parity",children:"Risk Parity"})]})]})]})]});default:return n.jsx("div",{children:"Update form not available for this type"})}},ve=()=>!A||A.priority.length===0&&A.optimization.length===0?null:n.jsxs("div",{className:"ai-suggestions-panel mb-4",children:[n.jsx("h6",{children:"🤖 AI Recommendations"}),A.priority.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{className:"text-danger",children:"🔥 Priority Actions"}),A.priority.map((E,Q)=>n.jsxs("div",{className:"alert alert-warning",children:[n.jsx("strong",{children:E.message}),n.jsx("br",{}),n.jsx("small",{children:E.action})]},Q))]}),A.optimization.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{className:"text-info",children:"⚡ Optimization Opportunities"}),A.optimization.map((E,Q)=>n.jsxs("div",{className:"alert alert-info",children:[n.jsx("strong",{children:E.message}),n.jsx("br",{}),n.jsx("small",{children:E.action})]},Q))]})]}),Oe=()=>y?n.jsxs("div",{className:"validation-results mb-4",children:[n.jsx("h6",{children:"✅ Validation Results"}),y.validUpdates.length>0&&n.jsx("div",{className:"alert alert-success",children:n.jsxs("strong",{children:["✅ ",y.validUpdates.length," items ready for update"]})}),y.invalidUpdates.length>0&&n.jsxs("div",{className:"alert alert-danger",children:[n.jsxs("strong",{children:["❌ ",y.invalidUpdates.length," items have validation errors"]}),n.jsx("ul",{className:"mt-2 mb-0",children:y.invalidUpdates.slice(0,3).map((E,Q)=>n.jsxs("li",{children:["Item ",E.index+1,": ",E.validation.errors.join(", ")]},Q))})]}),y.warnings.length>0&&n.jsxs("div",{className:"alert alert-warning",children:[n.jsx("strong",{children:"⚠️ Warnings:"}),n.jsx("ul",{className:"mt-2 mb-0",children:y.warnings.slice(0,3).map((E,Q)=>n.jsx("li",{children:E},Q))})]}),y.aiRecommendations.length>0&&n.jsxs("div",{className:"alert alert-info",children:[n.jsx("strong",{children:"🤖 AI Recommendations:"}),n.jsx("ul",{className:"mt-2 mb-0",children:y.aiRecommendations.slice(0,3).map((E,Q)=>n.jsx("li",{children:E.message},Q))})]})]}):null;return n.jsxs("div",{className:"bulk-update-panel",children:[n.jsx("style",{children:`
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
          background: ${s?"#2d3748":"#ffffff"};
          border-radius: 15px;
          max-width: 90%;
          max-height: 90%;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          color: ${s?"#e2e8f0":"#2d3748"};
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
          background: ${s?"#4a5568":"#f8f9fa"};
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .item-selection-list {
          max-height: 300px;
          overflow-y: auto;
          border: 1px solid ${s?"#4a5568":"#e2e8f0"};
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
          background: ${s?"#4a5568":"#f1f5f9"};
        }

        .item-selection-item.selected {
          background: ${s?"#667eea30":"#667eea20"};
          border: 1px solid #667eea;
        }

        .ai-suggestions-panel {
          background: ${s?"#4a5568":"#f8f9fa"};
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
      `}),n.jsxs("div",{className:"bulk-update-content",style:{width:"800px"},children:[n.jsx("div",{className:"bulk-update-header",children:n.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[n.jsxs("h4",{children:["🔄 Bulk Update - ",i.charAt(0).toUpperCase()+i.slice(1)]}),n.jsx("button",{className:"btn btn-link text-white p-0",onClick:c,style:{fontSize:"1.5rem",textDecoration:"none"},children:"✕"})]})}),n.jsxs("div",{className:"bulk-update-body",children:[ve(),n.jsxs("div",{className:"mb-4",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[n.jsxs("h6",{children:["📋 Select Items to Update (",u.length,"/",r.length,")"]}),n.jsx("button",{className:"btn btn-sm btn-outline-primary",onClick:R,children:u.length===r.length?"Deselect All":"Select All"})]}),n.jsx("div",{className:"item-selection-list",children:r.map(E=>n.jsxs("div",{className:`item-selection-item ${u.includes(E.id)?"selected":""}`,onClick:()=>V(E.id,!u.includes(E.id)),children:[n.jsx("input",{type:"checkbox",checked:u.includes(E.id),onChange:()=>{},className:"form-check-input me-2"}),n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("strong",{children:[i==="balance"&&`Account #${r.indexOf(E)+1}`,i==="budget"&&E.item_name,i==="investment"&&E.name]}),n.jsx("br",{}),n.jsxs("small",{className:"text-muted",children:[i==="balance"&&`Total: $${(E.cash_on_hand+E.bank_account_balance+E.savings).toFixed(2)}`,i==="budget"&&`Amount: $${E.amount.toFixed(2)}`,i==="investment"&&`Value: $${E.total_price.toFixed(2)}`]})]})]},E.id))})]}),u.length>0&&be(),Oe(),n.jsxs("div",{className:"bulk-actions",children:[n.jsx("div",{children:n.jsxs("small",{className:"text-muted",children:[u.length," items selected for bulk update"]})}),n.jsxs("div",{className:"d-flex gap-2",children:[n.jsx("button",{className:"btn-bulk btn-secondary-bulk",onClick:c,children:"❌ Cancel"}),n.jsx("button",{className:"btn-bulk btn-primary-bulk",onClick:pe,disabled:u.length===0,children:"👁️ Preview Changes"}),n.jsx("button",{className:"btn-bulk btn-success-bulk",onClick:we,disabled:u.length===0||I,children:I?"⏳ Processing...":"✅ Apply Updates"})]})]})]})]})]})}const Cr="https://x-pense-app-production.up.railway.app",Lc={balance:`${Cr}/balance`,transactions:`${Cr}/transactions`,goals:`${Cr}/goals`,budget:`${Cr}/budget`,investments:`${Cr}/investments`},Cs=s=>`${Cr}${s}`;function B1({darkMode:s,cashOnHand:i,setCashOnHand:r,bankAccountBalance:o,setBankAccountBalance:c,savings:d,setSavings:u,setTotal:m,formatCurrency:g,balanceId:S,setBalanceId:y,balances:w,setBalances:I,editIndex:K,setEditIndex:T,editBalance:k,setEditBalance:A,balanceError:Y,setBalanceError:V}){const[R,M]=v.useState(!1),[ne,pe]=v.useState(""),[we,be]=v.useState(null),[ve,Oe]=v.useState({}),[E,Q]=v.useState(null),[se,P]=v.useState(!1),[Z,oe]=v.useState(0),[Te,ke]=v.useState(0);v.useState(!1);const[Ne,D]=v.useState(null),[le,fe]=v.useState(!1),[G,re]=v.useState(null),[ie,ue]=v.useState([]),[$e,Ge]=v.useState(0),[ee,J]=v.useState(0),[Ae,ze]=v.useState(0),[Pt,Ie]=v.useState(0),dt=new U1,[Ze,ut]=v.useState(null),[lt,On]=v.useState(!1);v.useEffect(()=>{let H=null;try{H=new Td,ut(H),console.log("SmartUpdateService initialized successfully")}catch(X){console.warn("SmartUpdateService failed to initialize:",X),ut(null)}finally{On(!0)}},[]),v.useEffect(()=>{var H;Ge(0),J(0),ze(0),Ie(0),Oe({}),re(null),D(null),window.innerWidth<=768&&(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,(H=document.activeElement)==null||H.blur()),console.log("Balance component mounted - fields reset")},[]),v.useEffect(()=>{Ie($e+ee+Ae)},[$e,ee,Ae]);const Ke=H=>{pe(H),V("")},Je=H=>{V(H),pe("")},ft=()=>{const H=dt.validateBalanceInputs($e,ee,Ae);return Oe(H),Object.keys(H).filter(X=>X!=="warning").length===0};v.useEffect(()=>{if(w.length>0&&Ze&&lt)try{const H=Ze.generateUpdateSuggestions("balance",w);ue(H)}catch(H){console.warn("Failed to generate update suggestions:",H),ue([])}},[w,Ze,lt]),v.useEffect(()=>{if(w.length>0){const H=dt.calculateFinancialMetrics(w,Z,Te);Q(H)}},[w,Z,Te]),v.useEffect(()=>{const H=i+o+d;if(H>0){const X=dt.suggestOptimalAllocation(H);D(X)}else D(null)},[i,o,d]),v.useEffect(()=>{console.log("BALANCE COMPONENT");const H=()=>{console.log("Fetching balances..."),M(!0),ge.get(Lc.balance).then(X=>{if(console.log("Response received:",X.data),Array.isArray(X.data)){const ce=X.data.map(je=>({...je,total:je.cash_on_hand+je.bank_account_balance+je.savings,id:je.id}));if(console.log("Fetched balances:",ce),I(ce),ce.length>0){const je=ce.reduce((We,He)=>We+He.cash_on_hand,0),Be=ce.reduce((We,He)=>We+He.bank_account_balance,0),tt=ce.reduce((We,He)=>We+He.savings,0);r(je),c(Be),u(tt)}}else if(X.data&&typeof X.data=="object"){const ce={...X.data,total:X.data.cash_on_hand+X.data.bank_account_balance+X.data.savings};console.log("Fetched single balance:",ce),I([ce]),r(ce.cash_on_hand),c(ce.bank_account_balance),u(ce.savings)}else console.error("Fetched data is not an array or object:",X.data),r(0),c(0),u(0);V(null)}).catch(X=>{console.error("There was an error fetching the balances!",X),Je("Failed to load balance data. Please try again."),r(0),c(0),u(0)}).finally(()=>{M(!1)})};window.innerWidth<=768?setTimeout(H,100):H()},[I,r,c,u,V]),v.useEffect(()=>{if(ne){const H=setTimeout(()=>pe(""),3e3);return()=>clearTimeout(H)}},[ne]),v.useEffect(()=>{if(Y){const H=setTimeout(()=>V(""),5e3);return()=>clearTimeout(H)}},[Y]),v.useEffect(()=>{m(i+o+d)},[i,o,d,m]);const mt=H=>{const{name:X,value:ce}=H.target,je=Number(ce);if(je<0){Je("Values cannot be negative");return}if(A({...k,[X]:je}),Ze)try{const Be=Ze.validateUpdate("balance",{...k,[X]:je},k);re(Be)}catch(Be){console.warn("Smart validation failed:",Be),re(null)}},yn=async H=>{if(Ze)try{const ce=Ze.validateUpdate("balance",k,w[H]);if(!ce.isValid){Je(`Validation failed: ${ce.errors.join(", ")}`);return}if(ce.warnings.length>0&&!window.confirm(`Warning: ${ce.warnings.join(" ")} Do you want to continue?`))return}catch(ce){console.warn("Smart validation failed:",ce)}if(k.cash_on_hand<0||k.bank_account_balance<0||k.savings<0){Je("All values must be non-negative");return}const X={...k,total:k.cash_on_hand+k.bank_account_balance+k.savings};try{M(!0),await ge.put(Cs(`/balance/${X.id}`),X);const ce=w.map((We,He)=>He===H?X:We);I(ce),T(null);const je=ce.reduce((We,He)=>We+He.cash_on_hand,0),Be=ce.reduce((We,He)=>We+He.bank_account_balance,0),tt=ce.reduce((We,He)=>We+He.savings,0);if(r(je),c(Be),u(tt),Ze)try{Ze.trackUpdate("balance",X,{success:!0})}catch(We){console.warn("Failed to track update:",We)}Ke(`Successfully updated account #${H+1}!`),console.log("Balance updated:",X)}catch(ce){if(console.error("There was an error updating the balance!",ce),Ze)try{Ze.trackUpdate("balance",X,{success:!1,error:ce.message})}catch(je){console.warn("Failed to track update error:",je)}Je("Failed to update balance. Please try again.")}finally{M(!1)}},Ot=async H=>{if(we===H){const X=w[H];if(!X||!X.id){console.error("Balance or balance.id is undefined"),Je("Unable to delete: Invalid balance data");return}try{M(!0),await ge.delete(Cs(`/balance/${X.id}`));const ce=w.filter((je,Be)=>Be!==H);if(I(ce),ce.length>0){const je=ce.reduce((We,He)=>We+He.cash_on_hand,0),Be=ce.reduce((We,He)=>We+He.bank_account_balance,0),tt=ce.reduce((We,He)=>We+He.savings,0);r(je),c(Be),u(tt)}else r(0),c(0),u(0);Ke(`Successfully deleted account #${H+1}!`),be(null)}catch(ce){console.error("Error deleting balance:",ce),Je("Failed to delete balance. Please try again.")}finally{M(!1)}}else be(H),setTimeout(()=>be(null),3e3)},gn=async H=>{try{M(!0);const X=H.map(je=>ge.put(Cs(`/balance/${je.id}`),je.data));await Promise.all(X);const ce=w.map(je=>{const Be=H.find(tt=>tt.id===je.id);return Be?{...je,...Be.data}:je});if(I(ce),fe(!1),Ze)try{Ze.trackUpdate("bulk_balance",{count:H.length},{success:!0})}catch(je){console.warn("Failed to track bulk update:",je)}Ke(`Successfully updated ${H.length} accounts!`)}catch(X){if(console.error("Bulk update failed:",X),Ze)try{Ze.trackUpdate("bulk_balance",{count:H.length},{success:!1,error:X.message})}catch(ce){console.warn("Failed to track bulk update error:",ce)}Je("Bulk update failed. Please try again.")}finally{M(!1)}},ct=()=>{Ge(0),J(0),ze(0),Ie(0),Oe({}),re(null),D(null),Ke("Fields have been reset!")},pt=async()=>{if(!ft())return;const H=$e+ee+Ae;Ie(H);const X={cash_on_hand:$e,bank_account_balance:ee,savings:Ae,total:H,created_at:new Date().toISOString()};try{M(!0);const ce=await ge.post(Lc.balance,X);console.log("Balance saved:",ce.data);const je=[...w,{...ce.data,total:H}];I(je);const Be=je.reduce((He,Ft)=>He+Ft.cash_on_hand,0),tt=je.reduce((He,Ft)=>He+Ft.bank_account_balance,0),We=je.reduce((He,Ft)=>He+Ft.savings,0);r(Be),c(tt),u(We),Ge(0),J(0),ze(0),Ie(0),Oe({}),re(null),D(null),Ke(`Successfully added new balance account! Total: ${g(H)}`)}catch(ce){console.error("There was an error saving your balance!",ce),Je("Failed to save balance. Please try again.")}finally{M(!1)}},rn=()=>{Ne&&(Ge(Math.round(Ne.cash)),J(Math.round(Ne.bank)),ze(Math.round(Ne.savings)),Ke("Applied optimal allocation suggestion!"))},At=H=>{switch(H){case"emergency":Ge(500),J(1500),ze(3e3),Ke("Applied emergency fund preset!");break;case"student":Ge(200),J(800),ze(500),Ke("Applied student budget preset!");break;case"family":Ge(1e3),J(5e3),ze(1e4),Ke("Applied family budget preset!");break}},Yt=()=>{const H=w.filter(X=>X.cash_on_hand+X.bank_account_balance+X.savings<100);if(H.length>1){const X=H.reduce((Be,tt)=>Be+tt.cash_on_hand,0),ce=H.reduce((Be,tt)=>Be+tt.bank_account_balance,0),je=H.reduce((Be,tt)=>Be+tt.savings,0);r(X),c(ce),u(je),Ke(`Consolidated ${H.length} accounts. Review and save the combined account.`)}};return n.jsxs("div",{className:"balance-container",children:[n.jsx("style",{children:`
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
          background: ${s?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
          transition: all 0.3s ease;
        }

        .balance-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .balance-title {
          color: ${s?"#e2e8f0":"#2d3748"};
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
          color: ${s?"#e2e8f0":"#2d3748"};
          transition: color 0.3s ease;
        }

        .balance-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid ${s?"#4a5568":"#e2e8f0"};
          border-radius: 12px;
          font-size: 1rem;
          background: ${s?"#2d3748":"#ffffff"};
          color: ${s?"#e2e8f0":"#2d3748"};
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
          background: ${s?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
          transition: all 0.3s ease;
        }

        .overview-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .overview-title {
          color: ${s?"#e2e8f0":"#2d3748"};
          font-size: 1.2em;
          font-weight: 700;
          margin-bottom: 25px;
          text-align: center;
        }

        .balance-table {
          background: ${s?"#2d3748":"#ffffff"};
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .balance-table thead th {
          background: ${s?"#4a5568":"#667eea"};
          color: white;
          font-weight: 700;
          padding: 18px 15px;
          border: none;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-size: 0.9rem;
          border-bottom: 3px solid ${s?"#2d3748":"#5a67d8"};
        }

        .balance-table tbody tr {
          transition: all 0.3s ease;
          border-bottom: 1px solid ${s?"#4a5568":"#e2e8f0"};
        }

        .balance-table tbody tr:hover {
          background: ${s?"#4a5568":"#f7fafc"};
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .balance-table tbody td {
          padding: 18px 15px;
          vertical-align: middle;
          border: none;
          color: ${s?"#e2e8f0":"#2d3748"};
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
          color: ${s?"#68d391":"#38a169"};
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
          background: ${s?"#2d3748":"#ffffff"};
          color: ${s?"#e2e8f0":"#2d3748"};
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
          color: ${s?"#e2e8f0":"#2d3748"};
        }

        .large-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid ${s?"#4a5568":"#e2e8f0"};
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
          background: ${s?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .metric-card {
          background: ${s?"#4a5568":"#ffffff"};
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
          color: ${s?"#a0aec0":"#718096"};
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
          background: ${s?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .allocation-suggestion {
          background: ${s?"#4a5568":"#ffffff"};
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
          background: ${s?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
        }

        .insight-card {
          background: ${s?"#4a5568":"#ffffff"};
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
      `}),n.jsxs("div",{className:"balance-header",children:[n.jsx("h5",{children:"💰 Balance Management"}),n.jsx("p",{className:"balance-subtitle",children:"Track your financial accounts in one place"})]}),ie&&ie.priority&&ie.optimization&&(ie.priority.length>0||ie.optimization.length>0)&&n.jsxs("div",{className:"insights-section",children:[n.jsx("h5",{className:"balance-title",children:"🤖 Smart Update Recommendations"}),ie.priority.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{style:{color:"#f56565",fontWeight:"700"},children:"🔥 High Priority"}),ie.priority.map((H,X)=>n.jsxs("div",{className:"insight-card critical",children:[n.jsx("strong",{children:H.message}),n.jsx("br",{}),n.jsx("small",{children:H.action})]},X))]}),ie.optimization.length>0&&n.jsxs("div",{className:"mb-3",children:[n.jsx("h6",{style:{color:"#4299e1",fontWeight:"700"},children:"⚡ Optimization Opportunities"}),ie.optimization.map((H,X)=>n.jsxs("div",{className:"insight-card opportunity",children:[n.jsx("strong",{children:H.message}),n.jsx("br",{}),n.jsx("small",{children:H.action})]},X))]})]}),le&&n.jsx(D1,{darkMode:s,updateType:"balance",items:w,onBulkUpdate:gn,onClose:()=>fe(!1)}),ne&&n.jsxs("div",{className:"alert-success-balance",children:[n.jsx("strong",{children:"✅ Success!"})," ",ne]}),Y&&n.jsxs("div",{className:"alert-error-balance",children:[n.jsx("strong",{children:"❌ Error!"})," ",Y]}),n.jsxs("div",{className:"balance-section",children:[n.jsx("h5",{className:"balance-title",children:"� Add New Balance Account"}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"cashOnHand",className:"input-label",children:"💵 Cash On Hand"}),n.jsx("input",{type:"number",id:"cashOnHand",name:"cashOnHand",value:$e||"",onChange:H=>{const X=H.target.value===""?0:Number(H.target.value);Ge(X>=0?X:0),Oe({...ve,cashOnHand:""})},placeholder:"Enter cash amount",className:`balance-input ${ve.cashOnHand?"error":""}`,disabled:R}),ve.cashOnHand&&n.jsx("div",{className:"validation-error",children:ve.cashOnHand})]}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"bankAccountBalance",className:"input-label",children:"🏦 Bank Account Balance"}),n.jsx("input",{type:"number",id:"bankAccountBalance",name:"bankAccountBalance",value:ee||"",onChange:H=>{const X=H.target.value===""?0:Number(H.target.value);J(X>=0?X:0),Oe({...ve,bankAccountBalance:""})},placeholder:"Enter bank account balance",className:`balance-input ${ve.bankAccountBalance?"error":""}`,disabled:R}),ve.bankAccountBalance&&n.jsx("div",{className:"validation-error",children:ve.bankAccountBalance})]}),n.jsxs("div",{className:"input-row",children:[n.jsx("label",{htmlFor:"savings",className:"input-label",children:"🐷 Savings"}),n.jsx("input",{type:"number",id:"savings",name:"savings",value:Ae||"",onChange:H=>{const X=H.target.value===""?0:Number(H.target.value);ze(X>=0?X:0),Oe({...ve,savings:""})},placeholder:"Enter savings amount",className:`balance-input ${ve.savings?"error":""}`,disabled:R}),ve.savings&&n.jsx("div",{className:"validation-error",children:ve.savings})]}),ve.general&&n.jsx("div",{className:"validation-error",style:{textAlign:"center",fontSize:"16px"},children:ve.general}),n.jsxs("div",{style:{textAlign:"center",marginTop:"25px",display:"flex",justifyContent:"center",gap:"15px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{className:`btn-balance btn-set-balance ${R?"btn-disabled":""}`,onClick:pt,disabled:R,children:[R?n.jsx("span",{className:"loading-spinner-balance"}):"","🎯 Set Balance"]}),n.jsx("button",{className:`btn-balance btn-reset-balance ${R?"btn-disabled":""}`,onClick:ct,disabled:R,children:"🔄 Reset Fields"}),w.length>1&&n.jsx("button",{className:"btn-balance btn-set-balance",onClick:()=>fe(!0),disabled:R,title:"Update multiple accounts at once",children:"⚡ Bulk Update"})]})]}),E&&n.jsxs("div",{className:"financial-metrics-section",children:[n.jsx("h5",{className:"balance-title",children:"📈 Financial Health Dashboard"}),n.jsxs("div",{className:"monthly-inputs",children:[n.jsxs("div",{children:[n.jsx("label",{className:"input-label",children:"📊 Monthly Income"}),n.jsx("input",{type:"number",value:Z,onChange:H=>oe(Number(H.target.value)),placeholder:"Enter monthly income",className:"balance-input"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"input-label",children:"💸 Monthly Expenses"}),n.jsx("input",{type:"number",value:Te,onChange:H=>ke(Number(H.target.value)),placeholder:"Enter monthly expenses",className:"balance-input"})]})]}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-card",children:[n.jsx("div",{className:"metric-value",style:{color:"#38a169"},children:g(E.totalAssets)}),n.jsx("div",{className:"metric-label",children:"Total Assets"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:`metric-value health-score ${E.financialHealthScore>=80?"":E.financialHealthScore>=60?"warning":"critical"}`,children:[E.financialHealthScore,"/100"]}),n.jsx("div",{className:"metric-label",children:"Health Score"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-value",style:{color:"#4299e1"},children:[E.liquidityRatio.toFixed(1),"%"]}),n.jsx("div",{className:"metric-label",children:"Liquidity Ratio"})]}),n.jsxs("div",{className:"metric-card",children:[n.jsx("div",{className:"metric-value",style:{color:"#8b5cf6"},children:E.emergencyFundStatus.months.toFixed(1)}),n.jsx("div",{className:"metric-label",children:"Emergency Fund (Months)"})]})]}),n.jsx("div",{style:{textAlign:"center"},children:n.jsxs("button",{className:"btn-balance btn-set-balance",onClick:()=>P(!se),children:[se?"🔼 Hide":"🔽 Show"," Financial Insights"]})})]}),se&&E&&n.jsxs("div",{className:"insights-section",children:[n.jsx("h5",{className:"balance-title",children:"💡 Financial Insights & Recommendations"}),dt.generateFinancialInsights(E,w).map((H,X)=>n.jsxs("div",{className:`insight-card ${H.type}`,children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"10px"},children:H.title}),n.jsx("p",{style:{margin:0},children:H.message})]},X)),dt.generateFinancialInsights(E,w).length===0&&n.jsxs("div",{className:"insight-card success",children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"10px"},children:"🎉 Great Financial Health!"}),n.jsx("p",{style:{margin:0},children:"Your financial metrics look healthy. Keep up the good work!"})]})]}),(i>0||o>0||d>0)&&n.jsxs("div",{className:"allocation-section",children:[n.jsx("h5",{className:"balance-title",children:"🎯 Smart Allocation Assistant"}),n.jsxs("div",{className:"preset-buttons",children:[n.jsx("button",{className:"btn-preset",onClick:()=>At("emergency"),children:"🚨 Emergency Fund Preset"}),n.jsx("button",{className:"btn-preset",onClick:()=>At("student"),children:"🎓 Student Budget Preset"}),n.jsx("button",{className:"btn-preset",onClick:()=>At("family"),children:"👨‍👩‍👧‍👦 Family Budget Preset"})]}),Ne&&n.jsxs("div",{className:"allocation-suggestion",children:[n.jsx("h6",{style:{fontWeight:"700",marginBottom:"15px"},children:"💡 Optimal Allocation Suggestion"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"15px",marginBottom:"15px"},children:[n.jsx("div",{children:n.jsxs("strong",{children:["💵 Cash: ",g(Ne.cash)]})}),n.jsx("div",{children:n.jsxs("strong",{children:["🏦 Bank: ",g(Ne.bank)]})}),n.jsx("div",{children:n.jsxs("strong",{children:["🐷 Savings: ",g(Ne.savings)]})})]}),n.jsxs("div",{style:{marginBottom:"15px"},children:[n.jsx("strong",{children:"Reasoning:"}),n.jsx("ul",{style:{margin:"5px 0",paddingLeft:"20px"},children:Ne.reasoning.map((H,X)=>n.jsx("li",{children:H},X))})]}),n.jsx("button",{className:"btn-balance btn-set-balance",onClick:rn,children:"✨ Apply Suggestion"})]}),w.length>1&&n.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:n.jsx("button",{className:"btn-balance btn-reset-balance",onClick:Yt,children:"🔄 Consolidate Low Balance Accounts"})})]}),n.jsxs("div",{className:"overview-section",children:[n.jsx("h5",{className:"overview-title",children:"📊 Account Overview"}),R&&w.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading your account data..."})]}):n.jsx("div",{className:"balance-table",children:n.jsxs("table",{className:"table table-striped table-hover table-bordered",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"🔢 ACC#"}),n.jsx("th",{children:"💵 Cash on Hand"}),n.jsx("th",{children:"🏦 Bank Balance"}),n.jsx("th",{children:"🐷 Savings"}),n.jsx("th",{children:"💰 Total"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsx("tbody",{children:w.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:"6",className:"no-balances",children:n.jsxs("div",{children:[n.jsx("h4",{children:"🎯 Start Your Financial Journey!"}),n.jsx("p",{children:"Create your first balance account above to begin tracking your finances"}),n.jsx("small",{children:"💡 Pro tip: Separate your money into different categories for better organization"})]})})}):w.map((H,X)=>n.jsx("tr",{children:K===X?n.jsxs(n.Fragment,{children:[n.jsx("td",{className:"d-none d-md-table-cell","data-label":"ACC#",children:n.jsx("span",{className:"account-number",children:X+1})}),n.jsxs("td",{"data-label":"Cash on Hand",children:[n.jsx("input",{type:"number",name:"cash_on_hand",value:k.cash_on_hand,onChange:mt,className:"edit-input-table",min:"0"}),G&&G.warnings&&G.warnings.length>0&&n.jsxs("div",{style:{fontSize:"0.8rem",color:"#f59e0b",marginTop:"2px"},children:["⚠️ ",G.warnings[0]]})]}),n.jsxs("td",{"data-label":"Bank Acc Balance",children:[n.jsx("input",{type:"number",name:"bank_account_balance",value:k.bank_account_balance,onChange:mt,className:"edit-input-table",min:"0"}),G&&G.suggestions&&G.suggestions.length>0&&n.jsxs("div",{style:{fontSize:"0.8rem",color:"#4299e1",marginTop:"2px"},children:["💡 ",G.suggestions[0]]})]}),n.jsx("td",{"data-label":"Savings",children:n.jsx("input",{type:"number",name:"savings",value:k.savings,onChange:mt,className:"edit-input-table",min:"0"})}),n.jsx("td",{className:"d-none d-md-table-cell",children:n.jsx("span",{className:"total-amount",children:g(k.cash_on_hand+k.bank_account_balance+k.savings)})}),n.jsx("td",{"data-label":"Actions",children:n.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{onClick:()=>yn(X),className:`btn-table btn-save ${R?"btn-disabled":""}`,disabled:R,children:[R?n.jsx("span",{className:"loading-spinner-balance"}):"","💾 Save"]}),n.jsx("button",{onClick:()=>{T(null),Ke("Edit cancelled")},className:"btn-table btn-cancel",children:"❌ Cancel"})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("td",{className:"d-none d-md-table-cell","data-label":"ACC#",children:n.jsx("span",{className:"account-number",children:X+1})}),n.jsx("td",{"data-label":"Cash on Hand",children:n.jsx("span",{className:"currency-amount",children:g(H.cash_on_hand)})}),n.jsx("td",{"data-label":"Bank Acc Balance",children:n.jsx("span",{className:"currency-amount",children:g(H.bank_account_balance)})}),n.jsx("td",{"data-label":"Savings",children:n.jsx("span",{className:"currency-amount",children:g(H.savings)})}),n.jsx("td",{className:"d-none d-md-table-cell",children:n.jsx("span",{className:"total-amount",children:g(H.total!==void 0?H.total:0)})}),n.jsx("td",{"data-label":"Actions",children:n.jsxs("div",{style:{display:"flex",gap:"6px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsx("button",{onClick:()=>{T(X),A(H)},className:"btn-table btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>Ot(X),className:`btn-table ${we===X?"confirm-delete":"btn-delete"}`,children:we===X?"⚠️ Confirm?":"🗑️ Delete"})]})})]})},X))})]})})]})]})}function z1({darkMode:s,budget:i,setBudget:r,validated:o,setValidated:c,formatCurrency:d,items:u,setItems:m,name:g,setName:S,amount:y,setAmount:w,newBudget:I,setNewBudget:K,error:T,setError:k,editingIndex:A,setEditingIndex:Y,editAmount:V,setEditAmount:R,date:M,setDate:ne,totalBudgetAmount:pe,parseDate:we}){const be=ee=>{if(!ee)return"";const J=new Date(ee),Ae=String(J.getMonth()+1).padStart(2,"0"),ze=String(J.getDate()).padStart(2,"0"),Pt=J.getFullYear();return`${Ae}-${ze}-${Pt}`},[ve,Oe]=v.useState(new Date),[E,Q]=v.useState("");v.useState("");const[se,P]=v.useState(!1),[Z,oe]=v.useState(""),[Te,ke]=v.useState(null);v.useEffect(()=>{le()},[]),v.useEffect(()=>{if(Z){const ee=setTimeout(()=>oe(""),3e3);return()=>clearTimeout(ee)}},[Z]),v.useEffect(()=>{if(T){const ee=setTimeout(()=>k(""),5e3);return()=>clearTimeout(ee)}},[T]);const Ne=ee=>{oe(ee),k("")},D=ee=>{k(ee),oe("")},le=async()=>{try{P(!0),console.log("BUDGET COMPONENT"),console.log("Fetching budgets...");const J=(await ge.get("http://localhost:5001/budgets")).data.map(Ae=>({...Ae,date:be(we(Ae.date))}));console.log("Adjusted budgets:",J),m(J)}catch(ee){console.error("Error fetching budgets:",ee),D("Failed to load budgets. Please try again.")}finally{P(!1)}},fe=async()=>{if(!g||!y||!M){D("Please fill in all fields: name, amount, and date");return}if(isNaN(y)||parseFloat(y)<=0){D("Please enter a valid positive amount");return}const ee={item_name:g.trim(),amount:parseFloat(y),date:M};try{P(!0);const J=await ge.post("http://localhost:5001/budgets",ee);m([...u,J.data]),S(""),w(""),ne(""),Ne(`Successfully added "${g}" to budget!`)}catch(J){console.error("Error adding budget:",J),D("Failed to add budget item. Please try again.")}finally{P(!1)}},G=ee=>{Y(ee),R(u[ee].amount),Oe(u[ee].date)},re=async ee=>{if(!V||isNaN(V)||parseFloat(V)<=0){D("Please enter a valid positive amount");return}if(!ve){D("Please select a valid date");return}const J={item_name:u[ee].item_name,amount:parseFloat(V),date:new Date(ve).toISOString().split("T")[0]};try{P(!0),await ge.put(`http://localhost:5001/budgets/${u[ee].id}`,J);const Ae=u.map((ze,Pt)=>Pt===ee?{...ze,...J,date:be(J.date)}:ze);m(Ae),Ne(`Successfully updated "${u[ee].item_name}"!`),Y(null)}catch(Ae){console.error("Error saving budget:",Ae),D("Failed to save budget changes. Please try again.")}finally{P(!1)}},ie=()=>{Y(null),R(""),Oe(be(new Date)),Ne("Edit cancelled")},ue=async()=>{if(!I||!E){D("Please enter both budget amount and date"),c(!1);return}if(isNaN(I)||parseFloat(I)<=0){D("Please enter a valid positive budget amount"),c(!1);return}const ee={item_name:"Set Budget",amount:parseFloat(I),date:E};try{P(!0);const J=await ge.post("http://localhost:5001/budgets",ee);console.log("Response data:",J.data),m([...u,J.data]),r(I),Q(E),c(!0),Ne(`Main budget of ${d(I)} has been set!`)}catch(J){console.error("Error adding budget:",J),D("Failed to set main budget. Please try again."),c(!1)}finally{P(!1)}},$e=async()=>{const ee=u.find(J=>J.item_name==="Set Budget");if(ee){const J={...ee,amount:"",date:""};console.log("Updated Item:",J);try{P(!0);const Ae=await ge.put(`http://localhost:5001/budgets/${ee.id}`,J);console.log("Response from server:",Ae.data),m(u.map(ze=>ze.item_name==="Set Budget"?J:ze)),K(""),Q(""),r(0),c(!1),Ne("Main budget has been reset!"),console.log("Items after reset:",u)}catch(Ae){console.log("Error resetting budget:",Ae),D("Failed to reset budget. Please try again.")}finally{P(!1)}}else D("No main budget found to reset"),console.log("Set Budget item not found")},Ge=async ee=>{if(Te===ee)try{P(!0),await ge.delete(`http://localhost:5001/budgets/${u[ee].id}`);const J=u.filter((Ae,ze)=>ze!==ee);m(J),Ne(`Successfully deleted "${u[ee].item_name}"!`),ke(null)}catch(J){console.log("Error deleting budget:",J),D("Failed to delete budget item. Please try again.")}finally{P(!1)}else ke(ee),setTimeout(()=>ke(null),3e3)};return n.jsxs("div",{className:"budget-container",children:[n.jsx("style",{children:`
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
                    background: ${s?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
                    border-radius: 20px;
                    padding: 40px;
                    margin-bottom: 30px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                    border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
                    transition: all 0.3s ease;
                }

                .budget-section:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }

                .budget-title {
                    color: ${s?"#e2e8f0":"#2d3748"};
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
                    border: 2px solid ${s?"#4a5568":"#e2e8f0"};
                    border-radius: 12px;
                    font-size: 1rem;
                    background: ${s?"#2d3748":"#ffffff"};
                    color: ${s?"#e2e8f0":"#2d3748"};
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
                    color: ${s?"#a0aec0":"#718096"};
                    font-weight: 500;
                }

                /* Date input styling for dark mode */
                input[type="date"].enhanced-input {
                    color-scheme: ${s?"dark":"light"};
                    position: relative;
                    cursor: pointer;
                }

                input[type="date"].enhanced-input::-webkit-calendar-picker-indicator {
                    cursor: pointer;
                    ${s?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* For Firefox */
                input[type="date"].enhanced-input::-moz-calendar-picker-indicator {
                    cursor: pointer;
                    ${s?`
                        filter: invert(1);
                        opacity: 0.8;
                    `:""}
                }

                /* Additional styling for better visibility in dark mode */
                ${s?`
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
                    background: ${s?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .table-enhanced thead th {
                    background: ${s?"#4a5568":"#667eea"};
                    color: white;
                    font-weight: 700;
                    padding: 18px 15px;
                    border: none;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    font-size: 0.9rem;
                    border-bottom: 3px solid ${s?"#2d3748":"#5a67d8"};
                }

                .table-enhanced tbody tr {
                    transition: all 0.3s ease;
                    border-bottom: 1px solid ${s?"#4a5568":"#e2e8f0"};
                }

                .table-enhanced tbody tr:hover {
                    background: ${s?"#4a5568":"#f7fafc"};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-enhanced tbody td {
                    padding: 18px 15px;
                    vertical-align: middle;
                    border: none;
                    color: ${s?"#e2e8f0":"#2d3748"};
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
                    color: ${s?"#e2e8f0":"#2d3748"};
                }

                .large-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid ${s?"#4a5568":"#e2e8f0"};
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
                    color: ${s?"#68d391":"#38a169"};
                }

                .date-display {
                    color: ${s?"#a0aec0":"#718096"};
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
            `}),n.jsxs("div",{className:"budget-header",children:[n.jsx("h5",{children:"💰 Budget Management"}),n.jsx("p",{className:"budget-subtitle",children:"Plan and track your financial allocations"})]}),Z&&n.jsxs("div",{className:"alert-success",children:[n.jsx("strong",{children:"✅ Success!"})," ",Z]}),T&&n.jsxs("div",{className:"alert-danger",children:[n.jsx("strong",{children:"❌ Error!"})," ",T]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"🎯 Set Main Budget"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"number",id:"Set budget",value:isNaN(I)?"":I,onChange:ee=>{const J=ee.target.value;K(J===""?"":parseFloat(J))},className:`enhanced-input ${o?"is-valid":"is-invalid"}`,placeholder:"💵 Enter Budget Amount",disabled:se}),n.jsx("input",{type:"date",value:E,onChange:ee=>Q(ee.target.value),className:"enhanced-input",id:"budget-date",name:"budget-date",disabled:se}),n.jsxs("button",{className:`btn-enhanced btn-primary-enhanced ${se?"btn-disabled":""}`,onClick:ue,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","🎯 Set Budget"]}),n.jsxs("button",{className:`btn-enhanced btn-warning-enhanced ${se?"btn-disabled":""}`,onClick:$e,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","🔄 Reset"]})]})]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"📝 Add New Budget Item"}),n.jsxs("div",{className:"input-group",children:[n.jsx("input",{type:"text",placeholder:"📝 Item Name (e.g., Groceries, Entertainment)",value:g,onChange:ee=>S(ee.target.value),className:"enhanced-input",id:"item-name",name:"item-name",disabled:se}),n.jsx("input",{type:"number",placeholder:"💵 Amount",value:isNaN(y)?"":y,onChange:ee=>{const J=ee.target.value;w(J===""?"":parseFloat(J))},className:"enhanced-input",id:"item-amount",name:"item-amount",disabled:se}),n.jsx("input",{type:"date",value:M,onChange:ee=>ne(ee.target.value),className:"enhanced-input",id:"item-date",name:"item-date",disabled:se}),n.jsxs("button",{className:`btn-enhanced btn-success-enhanced ${se?"btn-disabled":""}`,onClick:fe,disabled:se,children:[se?n.jsx("span",{className:"loading-spinner"}):"","✨ Add Item"]})]})]}),n.jsxs("div",{className:"budget-section",children:[n.jsx("h5",{className:"budget-title",children:"📊 Budget Overview"}),se&&u.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading your budget data..."})]}):n.jsx("div",{className:"table-enhanced",children:n.jsxs("table",{className:"table table-striped table-hover table-bordered responsive-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"📝 Item Name"}),n.jsx("th",{children:"💰 Amount"}),n.jsx("th",{children:"📅 Date"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsxs("tbody",{children:[u.length>0?u.map((ee,J)=>n.jsxs("tr",{children:[n.jsx("td",{"data-label":"Item Name",children:ee.item_name==="Set Budget"?n.jsxs("span",{className:"main-budget-badge",children:["🎯 ",ee.item_name]}):n.jsxs("span",{className:"item-name-badge",children:["📌 ",ee.item_name]})}),n.jsx("td",{"data-label":"Amount",children:A===J?n.jsx("input",{type:"number",value:V,onChange:Ae=>R(Ae.target.value),className:"enhanced-input",style:{width:"150px",padding:"8px 12px"}}):n.jsx("span",{className:"amount-display",children:d(ee.amount)})}),n.jsx("td",{"data-label":"Date",children:A===J?n.jsx("input",{type:"date",value:ve,onChange:Ae=>Oe(Ae.target.value),className:"enhanced-input",style:{width:"170px",padding:"8px 12px"}}):n.jsxs("span",{className:"date-display",children:["📅 ",ee.date||"No date set"]})}),n.jsx("td",{"data-label":"Actions",children:A===J?n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsxs("button",{className:`btn-table btn-save-table ${se?"btn-disabled":""}`,onClick:()=>re(J),disabled:se,children:[se?n.jsx("span",{className:"loading-spinner",style:{width:"12px",height:"12px"}}):"","💾 Save"]}),n.jsx("button",{className:"btn-table btn-cancel-table",onClick:ie,children:"❌ Cancel"})]}):n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"nowrap",alignItems:"center"},children:[n.jsx("button",{className:"btn-table btn-edit-table",onClick:()=>G(J),children:"✏️ Edit"}),n.jsx("button",{className:`btn-table ${Te===J?"confirm-delete":"btn-delete-table"}`,onClick:()=>Ge(J),children:Te===J?"⚠️ Confirm?":"🗑️ Delete"})]})})]},J)):n.jsx("tr",{children:n.jsx("td",{colSpan:"4",className:"no-items",children:n.jsxs("div",{children:[n.jsx("h4",{children:"🎯 Start Your Budget Journey!"}),n.jsx("p",{children:"Set your main budget above, then add specific budget categories!"}),n.jsx("small",{children:"💡 Pro tip: Create categories like groceries, entertainment, utilities, savings"})]})})}),u.length>0&&n.jsxs("tr",{className:"total-row",children:[n.jsx("td",{children:n.jsx("strong",{children:"🏆 TOTAL BUDGET"})}),n.jsx("td",{children:n.jsx("strong",{children:d(pe)})}),n.jsx("td",{colSpan:"2",children:n.jsx("small",{children:"💡 This represents your complete budget allocation"})})]})]})]})})]})]})}class W1{constructor(){this.insights=[],this.alerts=[],this.recommendations=[],this.userPreferences=this.loadUserPreferences(),this.spendingPatterns=this.loadSpendingPatterns()}loadUserPreferences(){try{return JSON.parse(localStorage.getItem("dashboardAI_preferences"))||{riskTolerance:"medium",savingsGoal:20,notificationLevel:"normal",preferredCategories:[]}}catch{return{riskTolerance:"medium",savingsGoal:20,notificationLevel:"normal",preferredCategories:[]}}}loadSpendingPatterns(){try{return JSON.parse(localStorage.getItem("dashboardAI_patterns"))||{}}catch{return{}}}saveUserPreferences(){localStorage.setItem("dashboardAI_preferences",JSON.stringify(this.userPreferences))}saveSpendingPatterns(){localStorage.setItem("dashboardAI_patterns",JSON.stringify(this.spendingPatterns))}generateFinancialInsights(i,r,o,c,d){const u=[];new Date().getMonth(),new Date().getFullYear();const m=this.calculateMonthlySpending(i),g=m.reduce((w,I)=>w+I.amount,0)/m.length;g>o*.8&&u.push({type:"warning",title:"⚠️ High Spending Alert",message:`You're spending ${(g/o*100).toFixed(0)}% of your budget monthly. Consider reviewing your expenses.`,confidence:85,actionable:!0,action:"View Category Details",priority:"high"});const y=this.analyzeCategorySpending(i)[0];if(y&&y.percentage>40&&u.push({type:"info",title:"📊 Spending Pattern Insight",message:`${y.percentage.toFixed(0)}% of your spending is on ${y.category}. Consider reviewing this category's transactions.`,confidence:92,actionable:!0,action:"View Category Details",priority:"medium"}),d.length>0){const w=d.reduce((K,T)=>K+T.total_price,0),I=w/(r+w)*100;I<20&&u.push({type:"opportunity",title:"🚀 Investment Opportunity",message:`Only ${I.toFixed(0)}% of your portfolio is invested. Consider increasing investments for better returns.`,confidence:78,actionable:!0,action:"Explore Investments",priority:"low"})}if(c.length>0){const w=c.filter(I=>I.saved/I.target<.3);w.length>0&&u.push({type:"motivation",title:"🎯 Goal Achievement Tip",message:`You have ${w.length} goals with low progress. Consider reviewing your goals and adjusting target amounts.`,confidence:88,actionable:!0,action:"Review Goal Strategy",priority:"medium"})}return this.insights=u,u}generatePredictions(i,r,o){const c={},u=i.filter(m=>{const g=new Date(m.date),S=new Date;return S.setMonth(S.getMonth()-3),g>=S}).reduce((m,g)=>m+g.amount,0)/12;return c.nextMonthSpending=u*4.33,c.nextMonthSpending>0&&(c.budgetRunway=Math.floor(r/c.nextMonthSpending)),c.categoryTrends=this.predictCategoryTrends(i),c.goalCompletionDates=this.predictGoalCompletion(i),c}generateSmartAlerts(i,r,o,c){const d=[],u=new Date,g=this.getCurrentMonthSpending(i)/o*100;g>90?d.push({type:"critical",title:"🚨 Budget Almost Exceeded",message:`You've used ${g.toFixed(0)}% of your monthly budget!`,timestamp:u,urgent:!0}):g>75&&d.push({type:"warning",title:"⚠️ Budget Alert",message:`You've used ${g.toFixed(0)}% of your monthly budget. Consider slowing down spending.`,timestamp:u,urgent:!1});const S=this.detectUnusualSpending(i);return S.length>0&&d.push({type:"info",title:"🔍 Unusual Spending Detected",message:`Detected ${S.length} transactions that seem unusual for your spending pattern.`,timestamp:u,urgent:!1,details:S}),c.forEach(y=>{if(y.deadline){const w=Math.ceil((new Date(y.deadline)-u)/864e5),I=y.saved/y.target*100;w<=30&&I<80&&d.push({type:"warning",title:"⏰ Goal Deadline Approaching",message:`"${y.name}" has ${w} days left but only ${I.toFixed(0)}% complete.`,timestamp:u,urgent:w<=7})}}),this.alerts=d,d}generateRecommendations(i,r,o,c,d){const u=[],g=this.analyzeCategorySpending(i).filter(y=>y.percentage>25);g.length>0&&u.push({type:"optimization",title:"💡 Budget Optimization",description:`Consider reducing spending in ${g[0].category} by 10% to free up $${(g[0].amount*.1).toFixed(2)} monthly.`,impact:"medium",effort:"low",category:"budgeting"}),d.length>0&&[...new Set(d.map(w=>w.name))].length<3&&u.push({type:"diversification",title:"🚀 Diversify Your Portfolio",description:"Consider adding different crypto assets to reduce risk and increase potential returns.",impact:"high",effort:"medium",category:"investing"});const S=this.calculateSavingsRate(i,r);return S<20&&u.push({type:"savings",title:"💰 Increase Savings Rate",description:`Current savings rate is ${S.toFixed(0)}%. Try to save at least 20% for better financial health.`,impact:"high",effort:"medium",category:"savings"}),this.recommendations=u,u}processNaturalLanguageQuery(i,r,o,c,d,u){var g,S;const m=i.toLowerCase().trim();if(m.includes("spent")||m.includes("spending")){if(m.includes("month")||m.includes("monthly")){const y=this.getCurrentMonthSpending(r);return{type:"spending",answer:`You've spent $${y.toFixed(2)} this month.`,data:{amount:y,period:"month"}}}if(m.includes("category")){const y=this.analyzeCategorySpending(r);return{type:"category_spending",answer:`Your top spending category is ${(g=y[0])==null?void 0:g.category} with $${(S=y[0])==null?void 0:S.amount.toFixed(2)}.`,data:y}}}if(m.includes("balance")||m.includes("money left"))return{type:"balance",answer:`Your current balance is $${o.toFixed(2)}.`,data:{balance:o}};if(m.includes("goal")||m.includes("target")){if(d.length===0)return{type:"goals",answer:"You haven't set any financial goals yet. Consider adding some!",data:{goalsCount:0}};const y=d.reduce((w,I)=>w+I.saved/I.target,0)/d.length*100;return{type:"goals",answer:`You have ${d.length} goals with an average progress of ${y.toFixed(0)}%.`,data:{goalsCount:d.length,avgProgress:y}}}if(m.includes("investment")||m.includes("crypto")||m.includes("portfolio")){if(u.length===0)return{type:"investments",answer:"You don't have any investments yet. Consider starting your crypto journey!",data:{investmentCount:0}};const y=u.reduce((w,I)=>w+I.total_price,0);return{type:"investments",answer:`Your crypto portfolio is worth $${y.toFixed(2)} across ${u.length} assets.`,data:{totalValue:y,assetCount:u.length}}}return{type:"unknown",answer:"I'm not sure about that. Try asking about your spending, balance, goals, or investments!",data:null}}calculateMonthlySpending(i){const r={};return i.forEach(o=>{const c=new Date(o.date),d=`${c.getFullYear()}-${c.getMonth()}`;r[d]||(r[d]=0),r[d]+=o.amount}),Object.entries(r).map(([o,c])=>({month:o,amount:c}))}getCurrentMonthSpending(i){const r=new Date,o=r.getMonth(),c=r.getFullYear();return i.filter(d=>{const u=new Date(d.date);return u.getMonth()===o&&u.getFullYear()===c}).reduce((d,u)=>d+u.amount,0)}analyzeCategorySpending(i){const r={},o=i.reduce((c,d)=>c+d.amount,0);return i.forEach(c=>{r[c.category]||(r[c.category]=0),r[c.category]+=c.amount}),Object.entries(r).map(([c,d])=>({category:c,amount:d,percentage:d/o*100})).sort((c,d)=>d.amount-c.amount)}detectUnusualSpending(i){const r=i.slice(-30),c=r.reduce((d,u)=>d+u.amount,0)/r.length*2;return i.filter(d=>d.amount>c).slice(-5)}calculateSavingsRate(i,r){const c=i.reduce((d,u)=>d+u.amount,0)+r;return c===0?0:r/c*100}predictCategoryTrends(i){const r={},o=new Date;return o.setMonth(o.getMonth()-3),i.forEach(c=>{const u=new Date(c.date)>=o;r[c.category]||(r[c.category]={recent:0,old:0}),u?r[c.category].recent+=c.amount:r[c.category].old+=c.amount}),Object.entries(r).map(([c,d])=>({category:c,trend:d.recent>d.old?"increasing":"decreasing",change:d.old>0?(d.recent-d.old)/d.old*100:0}))}predictGoalCompletion(i){const r=this.calculateMonthlySpending(i).reduce((o,c)=>o+c.amount,0)/12*.2;return{avgMonthlySavings:r,estimatedMonthsToGoal:o=>Math.ceil(o/r)}}}const Mr=new W1,H1=s=>s.sort((i,r)=>{const o={critical:3,warning:2,info:1};return(o[r.type]||0)-(o[i.type]||0)}),G1=({transactions:s,balance:i,budget:r,goals:o,investments:c,darkMode:d})=>{var Oe;console.log("🔍 AIInsightsPanel rendering...",{transactions:s,balance:i,budget:r,darkMode:d});const u=ur(),[m,g]=v.useState([]),[S,y]=v.useState([]),[w,I]=v.useState([]),[K,T]=v.useState({}),[k,A]=v.useState(""),[Y,V]=v.useState(null),[R,M]=v.useState("insights"),[ne,pe]=v.useState(!1),we=E=>{switch(E){case"Set Category Budget":case"Review Budget":case"Monitor Spending":u("/budget");break;case"View Category Details":case"Review Expenses":case"Review Categories":u("/transactions");break;case"Explore Investments":case"Invest Surplus":case"Explore Diversification":u("/investments");break;case"Set New Goal":case"Boost Savings":case"Optimize Savings":case"Review Goal Strategy":u("/goals");break;case"Analyze Trend":u("/transactions");break;default:console.log("Action not implemented:",E),E.toLowerCase().includes("budget")?u("/budget"):E.toLowerCase().includes("investment")?u("/investments"):E.toLowerCase().includes("goal")?u("/goals"):u("/transactions")}};v.useEffect(()=>{const E=async()=>{pe(!0);try{const Q=Mr.generateFinancialInsights(s,i,r,o,c);g(Q);const se=H1(Mr.generateSmartAlerts(s,i,r,o));y(se);const P=Mr.generateRecommendations(s,i,r,o,c);I(P);const Z=Mr.generatePredictions(s,i,r);T(Z)}catch(Q){console.error("Error generating AI insights:",Q)}finally{pe(!1)}};s.length>0&&E()},[s,i,r,o,c]);const be=()=>{if(k.trim()){const E=Mr.processNaturalLanguageQuery(k,s,i,r,o,c);V(E),A("")}},ve=E=>{E.key==="Enter"&&be()};return n.jsxs("div",{className:`ai-insights-panel ${d?"ai-dark":"ai-light"}`,children:[n.jsx("style",{children:`
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
      `}),n.jsxs("div",{className:"ai-header",children:[n.jsx("div",{style:{color:"white",fontSize:"1.4rem",fontWeight:"700",margin:"0 0 8px 0",display:"block",width:"100%",textAlign:"center",textShadow:"none",opacity:1},children:"AI Financial Assistant"}),n.jsx("div",{style:{margin:"0",fontSize:"15px",color:"rgba(255, 255, 255, 0.95)",display:"block",width:"100%",textAlign:"center",opacity:1},children:"Powered by intelligent insights and predictive analytics"})]}),n.jsxs("div",{className:"nl-query-section",children:[n.jsx("h5",{style:{color:d?"#e2e8f0":"#2d3748",marginBottom:"15px",fontWeight:"700"},children:"💬 Ask Your AI Assistant"}),n.jsxs("div",{className:"nl-query-container",children:[n.jsx("input",{type:"text",className:"nl-query-input",placeholder:"Ask me anything... 'How much did I spend this month?' or 'What's my investment performance?'",value:k,onChange:E=>A(E.target.value),onKeyPress:ve}),n.jsx("button",{className:"nl-query-btn",onClick:be,children:"🔍 Ask AI"})]}),Y&&n.jsxs("div",{className:"nl-response",children:[n.jsx("strong",{children:"🤖 AI Assistant:"})," ",Y.answer]})]}),n.jsxs("div",{className:"ai-tabs",children:[n.jsxs("button",{className:`ai-tab ${R==="insights"?"active":""}`,onClick:()=>M("insights"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"💡"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Insights"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[m.length," available"]})]})]}),n.jsxs("button",{className:`ai-tab ${R==="alerts"?"active":""}`,onClick:()=>M("alerts"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"🚨"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Alerts"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[S.length," notifications"]})]})]}),n.jsxs("button",{className:`ai-tab ${R==="recommendations"?"active":""}`,onClick:()=>M("recommendations"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"💡"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Tips"}),n.jsxs("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:[w.length," suggestions"]})]})]}),n.jsxs("button",{className:`ai-tab ${R==="predictions"?"active":""}`,onClick:()=>M("predictions"),children:[n.jsx("div",{style:{fontSize:"1.4rem",minWidth:"28px",flexShrink:"0"},children:"🔮"}),n.jsxs("div",{style:{flex:"1",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"700",marginBottom:"3px"},children:"Predictions"}),n.jsx("div",{style:{fontSize:"0.9rem",opacity:"0.85"},children:"AI forecasts"})]})]})]}),ne&&n.jsx("div",{className:"loading-spinner",children:n.jsx("div",{className:"spinner"})}),!ne&&n.jsxs(n.Fragment,{children:[R==="insights"&&n.jsx("div",{children:m.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"💡"}),n.jsx("h5",{children:"No insights yet"}),n.jsx("p",{children:"Add more transactions to get personalized insights!"})]}):m.map((E,Q)=>n.jsxs("div",{className:`insight-card ${E.type}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:E.title}),n.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[n.jsxs("span",{className:"confidence-badge",children:[E.confidence,"% confident"]}),E.priority&&n.jsx("span",{className:`priority-badge priority-${E.priority}`,children:E.priority})]})]}),n.jsx("div",{className:"card-content",children:E.message}),E.actionable&&n.jsx("button",{className:"action-btn",onClick:()=>we(E.action),children:E.action})]},Q))}),R==="alerts"&&n.jsx("div",{children:S.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"🚨"}),n.jsx("h5",{children:"No alerts"}),n.jsx("p",{children:"You're doing great! No urgent alerts at the moment."})]}):S.map((E,Q)=>n.jsxs("div",{className:`alert-card ${E.type}`,children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:E.title}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:E.timestamp.toLocaleDateString()})]}),n.jsx("div",{className:"card-content",children:E.message})]},Q))}),R==="recommendations"&&n.jsx("div",{children:w.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"💡"}),n.jsx("h5",{children:"No recommendations yet"}),n.jsx("p",{children:"Keep using the app to get personalized recommendations!"})]}):w.map((E,Q)=>n.jsxs("div",{className:"recommendation-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("h6",{className:"card-title",children:E.title}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("span",{className:`priority-badge priority-${E.impact==="high"?"high":E.impact==="medium"?"medium":"low"}`,children:[E.impact," impact"]}),n.jsxs("span",{className:`priority-badge priority-${E.effort==="high"?"high":E.effort==="medium"?"medium":"low"}`,children:[E.effort," effort"]})]})]}),n.jsx("div",{className:"card-content",children:E.description}),n.jsxs("small",{style:{color:d?"#a0aec0":"#718096"},children:["Category: ",E.category]})]},Q))}),R==="predictions"&&n.jsxs("div",{className:"predictions-grid",children:[n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Next Month Spending"}),n.jsxs("div",{className:"prediction-value",children:["$",((Oe=K.nextMonthSpending)==null?void 0:Oe.toFixed(2))||"0.00"]}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"Based on your recent patterns"})]}),n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Budget Runway"}),n.jsxs("div",{className:"prediction-value",children:[K.budgetRunway||0," months"]}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"At current spending rate"})]}),n.jsxs("div",{className:"prediction-card",children:[n.jsx("div",{className:"prediction-label",children:"Savings Trend"}),n.jsx("div",{className:"prediction-value",style:{color:K.nextMonthSpending<r*.8?"#10b981":"#ef4444"},children:K.nextMonthSpending<r*.8?"📈 Good":"📉 Review"}),n.jsx("small",{style:{color:d?"#a0aec0":"#718096"},children:"Based on budget vs spending"})]})]})]})]})};Dc.register(Gm,Ym,qm,Vm,Mm,Km,Jm,Xm,Zm,Qm);function Y1({transactions:s=[],balance:i=0,totalAmount:r,darkMode:o,formatCurrency:c,goals:d,setGoals:u,formatDate:m,goalsProgress:g,setGoalsProgress:S,totalBudgetAmount:y,parseDate:w,setItems:I,setBalances:K,setCashOnHand:T,setBankAccountBalance:k,setSavings:A,setTransactions:Y,setAmounts:V,addedInvestments:R,setAddedInvestments:M}){var It;const ne=ur();v.useState([]);const[pe,we]=v.useState(0),[be,ve]=v.useState(null),[Oe,E]=v.useState(""),[Q,se]=v.useState("line"),[P,Z]=v.useState("all"),[oe,Te]=v.useState(!0),[ke,Ne]=v.useState("all"),[D,le]=v.useState(null),[fe,G]=v.useState(!1),[re,ie]=v.useState(!0),[ue,$e]=v.useState(null),[Ge,ee]=v.useState("cards"),[J,Ae]=v.useState(!0),[ze,Pt]=v.useState(!1),[Ie,dt]=v.useState(null),[Ze,ut]=v.useState("cards"),[lt,On]=v.useState(!0),[Ke,Je]=v.useState(!1);R.reduce((b,L)=>b+parseFloat(L.total_price),0).toFixed(2);const ft=g.reduce((b,L)=>b+parseFloat(L.saved||0),0),mt=y+parseFloat(pe)+i+ft-r,yn=(b,L)=>{const O=new Date;return b.filter(ye=>{const _e=new Date(ye.date);switch(L){case"week":return O-_e<=7*24*60*60*1e3;case"month":return O-_e<=30*24*60*60*1e3;case"3months":return O-_e<=90*24*60*60*1e3;default:return!0}})},Ot=(b,L)=>L==="all"?b:b.filter(O=>O.category&&O.category.toLowerCase()===L.toLowerCase()),gn=s.sort((b,L)=>new Date(b.date)-new Date(L.date)),ct=Ot(yn(gn,P),ke),pt=ct.map(b=>({...b,date:m(w(b.date))})),rn=["all",...new Set(s.map(b=>b.category).filter(Boolean))];v.useEffect(()=>{console.log("Loaded from Goal.jsx component"),ge.get("http://localhost:5001/goals").then(b=>{const L=b.data.map(O=>({...O,progress:O.saved/O.target*100}));S(L)}).catch(b=>{console.error("Error fetching goals:",b)})},[]),v.useEffect(()=>{console.log("Loaded from Budget.jsx component"),ge.get("http://localhost:5001/budgets").then(b=>{const L=b.data.map(O=>({...O,date:w(O.date)}));I(L)}).catch(b=>{console.error("Error fetching budgets:",b)})},[]),v.useEffect(()=>{console.log("Loaded from Balance.jsx component"),ge.get("http://localhost:5001/balance").then(b=>{if(Array.isArray(b.data)){const L=b.data.map(O=>({...O,total:O.cash_on_hand+O.bank_account_balance+O.savings,id:O.id}));if(K(L),L.length>0){const O=L[0];T(O.cash_on_hand),k(O.bank_account_balance),A(O.savings)}}else if(b.data&&typeof b.data=="object"){const L={...b.data,total:b.data.cash_on_hand+b.data.bank_account_balance+b.data.savings};K([L]),T(L.cash_on_hand),k(L.bank_account_balance),A(L.savings)}else console.error("Fetched data is not an array or object:",b.data)}).catch(b=>{console.error("Error fetching balances:",b)})},[]),v.useEffect(()=>{console.log("TRANSACTIONS COMPONENT"),console.log("Fetching transactions..."),ge.get("http://127.0.0.1:5001/transactions").then(b=>{console.log("Fetched transactions:",b.data),Y(b.data)}).catch(b=>console.log("Error fetching transactions",b))},[]),v.useEffect(()=>{ge.get("http://localhost:5001/investments").then(b=>{console.log("Fetched from Investments:",b.data),M(b.data),At(b.data)}).catch(b=>console.log("Error fetching investments",b))},[]);const At=b=>{const L=b.reduce((O,q)=>O+q.total_price,0);we(L)};v.useEffect(()=>{At(R)},[R]);const Yt=b=>{if(!R||!R[b]){console.error("Investment not found");return}const L=R[b].id;ge.delete(`http://localhost:5001/investments/${L}`).then(O=>{if(O.status===204){const q=R.filter((ye,_e)=>_e!==b);M(q)}else console.error("Failed to delete the investment")}).catch(O=>{console.error("Error:",O)})},H=b=>{ve(b),E(R[b].amount)},X=b=>{const L=[...R],O=L[b],q=parseFloat(Oe);isNaN(q)?console.error("Invalid amount:",Oe):(O.amount=q,O.pricePerUnit?O.total_price=q*O.pricePerUnit:console.error("pricePerUnit is not defined for investment:",O),ge.put(`http://localhost:5001/investments/${O.id}`,{amount:O.amount,totalPrice:O.total_price}).then(ye=>{M(L),ve(null),E("")}).catch(ye=>{console.error("Error updating investment:",ye)}))},ce=()=>{ve(null),E("")},Be=(()=>{const b=pt.map(q=>q.date),L=pt.map(q=>parseFloat(q.amount)),O={labels:b,datasets:[{label:"Transaction Amount ($)",data:L,borderColor:o?"rgba(255, 193, 7, 1)":"rgba(54, 162, 235, 1)",backgroundColor:o?"rgba(255, 193, 7, 0.2)":"rgba(54, 162, 235, 0.2)",borderWidth:3,pointRadius:6,pointHoverRadius:8,pointBackgroundColor:o?"rgba(255, 193, 7, 1)":"rgba(54, 162, 235, 1)",pointBorderColor:"#fff",pointBorderWidth:2,tension:.4,fill:Q==="line"}]};if(Q==="bar")O.datasets[0].backgroundColor=L.map((q,ye)=>`hsla(${ye*137.5%360}, 70%, 60%, 0.8)`),O.datasets[0].borderColor=L.map((q,ye)=>`hsla(${ye*137.5%360}, 70%, 50%, 1)`);else if(Q==="doughnut"){const q={};return pt.forEach(ye=>{const _e=ye.category||"Uncategorized";q[_e]=(q[_e]||0)+parseFloat(ye.amount)}),{labels:Object.keys(q),datasets:[{label:"Amount by Category ($)",data:Object.values(q),backgroundColor:Object.keys(q).map((ye,_e)=>`hsla(${_e*137.5%360}, 70%, 60%, 0.8)`),borderColor:Object.keys(q).map((ye,_e)=>`hsla(${_e*137.5%360}, 70%, 50%, 1)`),borderWidth:2,hoverOffset:4}]}}return O})(),We=(()=>{const b={responsive:!0,maintainAspectRatio:!1,animation:{duration:oe?1e3:0,easing:"easeInOutQuart"},interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!0,position:"top",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:20,font:{size:12,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:1,cornerRadius:8,displayColors:!0,callbacks:{title:function(L){return Q==="doughnut"?"Category Breakdown":`Date: ${L[0].label}`},label:function(L){if(Q==="doughnut"){const O=L.dataset.data.reduce((ye,_e)=>ye+_e,0),q=(L.raw/O*100).toFixed(1);return`${L.label}: $${L.raw.toFixed(2)} (${q}%)`}else{const O=pt[L.dataIndex];return[`Amount: $${L.raw}`,`Description: ${(O==null?void 0:O.description)||"No Description"}`,`Category: ${(O==null?void 0:O.category)||"Uncategorized"}`]}}}}},onClick:(L,O)=>{if(O.length>0){const q=O[0].index;if(Q!=="doughnut"){const ye=pt[q];console.log("Clicked transaction:",ye)}}}};return Q!=="doughnut"&&(b.scales={x:{title:{display:!0,text:"Date",color:o?"#fff":"#000",font:{size:14,weight:"bold"}},ticks:{color:o?"#fff":"#000",maxTicksLimit:10},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}},y:{title:{display:!0,text:"Amount ($)",color:o?"#fff":"#000",font:{size:14,weight:"bold"}},ticks:{color:o?"#fff":"#000",callback:function(L){return"$"+L.toFixed(2)}},grid:{color:o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}}}),b})(),He={labels:["Budget","Balance","Goals Saved","Investments","X-penses"],datasets:[{label:"Financial Overview ($)",data:[y,i,ft,pe,r],backgroundColor:["rgba(40, 167, 69, 0.8)","rgba(23, 162, 184, 0.8)","rgba(255, 193, 7, 0.8)","rgba(108, 117, 125, 0.8)","rgba(220, 53, 69, 0.8)"],borderColor:["rgba(40, 167, 69, 1)","rgba(23, 162, 184, 1)","rgba(255, 193, 7, 1)","rgba(108, 117, 125, 1)","rgba(220, 53, 69, 1)"],borderWidth:2,hoverOffset:10}]},Ft={responsive:!0,maintainAspectRatio:!1,animation:{duration:re?1200:0,easing:"easeInOutBounce"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:15,font:{size:11,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:8,callbacks:{label:function(b){const L=mt,O=L!==0?(b.raw/Math.abs(L)*100).toFixed(1):"0.0";return`${b.label}: $${b.raw.toFixed(2)} (${O}%)`}}}},onClick:(b,L)=>{if(L.length>0){const O=L[0].index;le(["Budget","Balance","Goals Saved","Investments","X-penses"][O])}}},St=b=>({Budget:"#28a745",Balance:"#17a2b8","X-penses":"#dc3545","Goals (saved)":"#ffc107",Investments:"#6c757d","Overview Total":o?"#ffffff":"#000000"})[b]||(o?"#ffffff":"#000000"),an=b=>({Budget:"💰",Balance:"💳","X-penses":"💸","Goals (saved)":"🎯",Investments:"📈","Overview Total":"📊"})[b]||"📋",qt=(b,L)=>b>=100?"#28a745":b>=75?"#17a2b8":b>=50?"#ffc107":b>=25?"#fd7e14":"#dc3545",wn=(b,L)=>b>=100?"🎉":b>=75?"🔥":b>=50?"⭐":b>=25?"📈":"🚀",Fn=b=>b>=100?"Completed! 🎉":b>=75?"Almost there! 🔥":b>=50?"Halfway! ⭐":b>=25?"Good start! 📈":"Just started 🚀",Jn={labels:g.map(b=>b.name),datasets:[{label:"Goals Progress (%)",data:g.map(b=>b.saved/b.target*100),backgroundColor:g.map((b,L)=>{const O=b.saved/b.target*100;return qt(O)+"80"}),borderColor:g.map((b,L)=>{const O=b.saved/b.target*100;return qt(O)}),borderWidth:2,hoverOffset:8}]},In={responsive:!0,maintainAspectRatio:!1,animation:{duration:J?1500:0,easing:"easeInOutElastic"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:12,font:{size:10,weight:"bold"}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:8,callbacks:{label:function(b){const L=g[b.dataIndex];return[`Progress: ${b.raw.toFixed(1)}%`,`Saved: $${L.saved.toFixed(2)}`,`Target: $${L.target.toFixed(2)}`,`Remaining: $${(L.target-L.saved).toFixed(2)}`]}}}},onClick:(b,L)=>{if(L.length>0){const O=L[0].index,q=g[O];$e((ue==null?void 0:ue.id)===q.id?null:q)}}},sn=(b,L)=>{const O={bitcoin:"#f7931a",btc:"#f7931a",ethereum:"#627eea",eth:"#627eea",usdc:"#2775ca",xrp:"#23292f",ripple:"#23292f",cardano:"#0033ad",ada:"#0033ad",solana:"#9945ff",sol:"#9945ff"},q=b.name.toLowerCase();for(const _e in O)if(q.includes(_e))return O[_e];const ye=["#28a745","#17a2b8","#ffc107","#fd7e14","#dc3545","#6f42c1","#e83e8c","#20c997"];return ye[L%ye.length]},Vt=b=>{const L=b.name.toLowerCase(),O={bitcoin:"₿",btc:"₿",ethereum:"Ξ",eth:"Ξ",usdc:"💵",xrp:"🌊",ripple:"🌊",cardano:"🎴",ada:"🎴",solana:"☀️",sol:"☀️"};for(const q in O)if(L.includes(q))return O[q];return"🪙"},on=b=>Math.random()*20-10,Mt=b=>b>5?{label:"Strong Gain! 🚀",class:"success"}:b>0?{label:"Gaining 📈",class:"success"}:b>-5?{label:"Stable 📊",class:"warning"}:{label:"Down 📉",class:"danger"},Xn={labels:R.map(b=>b.name),datasets:[{label:"Investment Value ($)",data:R.map(b=>b.total_price),backgroundColor:R.map((b,L)=>sn(b,L)+"80"),borderColor:R.map((b,L)=>sn(b,L)),borderWidth:3,hoverOffset:12,hoverBorderWidth:4}]},jn={responsive:!0,maintainAspectRatio:!1,animation:{duration:lt?1800:0,easing:"easeInOutBack"},plugins:{legend:{display:!0,position:"bottom",labels:{color:o?"#fff":"#000",usePointStyle:!0,padding:15,font:{size:11,weight:"bold"},generateLabels:function(b){return Dc.defaults.plugins.legend.labels.generateLabels.call(this,b).map((q,ye)=>{const _e=R[ye];return q.text=`${Vt(_e)} ${q.text}`,q})}}},tooltip:{backgroundColor:o?"rgba(51, 51, 51, 0.9)":"rgba(255, 255, 255, 0.9)",titleColor:o?"#fff":"#000",bodyColor:o?"#fff":"#000",borderColor:o?"#ffc107":"#007bff",borderWidth:2,cornerRadius:10,callbacks:{title:function(b){const L=R[b[0].dataIndex];return`${Vt(L)} ${L.name}`},label:function(b){var q;const L=R[b.dataIndex],O=on();return[`Value: $${b.raw.toFixed(2)}`,`Amount: ${L.amount}`,`Price per unit: $${((q=L.pricePerUnit)==null?void 0:q.toFixed(2))||"N/A"}`,`Performance: ${O.toFixed(2)}%`,`Status: ${Mt(O).label}`]}}}},onClick:(b,L)=>{if(L.length>0){const O=L[0].index,q=R[O];dt((Ie==null?void 0:Ie.id)===q.id?null:q)}}};return n.jsxs("div",{className:`container-fluid ${o?"dark-mode":"light-mode"}`,children:[n.jsx("style",{children:`
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
      `}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"col-12",children:[n.jsx("div",{className:"dashboard-header",children:n.jsx("h1",{children:"Main Dashboard"})}),n.jsx(G1,{transactions:s,balance:i,budget:y,goals:g,investments:R,darkMode:o}),n.jsxs("div",{className:"summary",children:[n.jsx("h5",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"Recent Transactions"}),n.jsx("br",{}),n.jsx("button",{onClick:()=>ne("/transactions"),className:`btn ${o?"btn-light":"btn-dark"} responsive`,children:" View All Transactions"})]}),n.jsx("br",{}),n.jsxs("div",{className:`charts border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"Spending Over Time Graph"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"X-PENSE Transactions"})})]}),n.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${Q==="line"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("line"),title:"Line Chart",children:"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Q==="bar"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("bar"),title:"Bar Chart",children:"📊"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Q==="doughnut"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>se("doughnut"),title:"Doughnut Chart",children:"🍩"})]}),n.jsxs("select",{className:`form-select form-select-sm ${o?"bg-dark text-light":""}`,value:P,onChange:b=>Z(b.target.value),style:{width:"auto"},children:[n.jsx("option",{value:"all",children:"All Time"}),n.jsx("option",{value:"week",children:"Last Week"}),n.jsx("option",{value:"month",children:"Last Month"}),n.jsx("option",{value:"3months",children:"Last 3 Months"})]}),n.jsx("select",{className:`form-select form-select-sm ${o?"bg-dark text-light":""}`,value:ke,onChange:b=>Ne(b.target.value),style:{width:"auto"},children:rn.map(b=>n.jsx("option",{value:b,children:b==="all"?"All Categories":b},b))}),n.jsx("button",{type:"button",className:`btn btn-sm ${oe?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Te(!oe),title:oe?"Disable Animations":"Enable Animations",children:oe?"🎬":"⏸️"})]})]}),n.jsx("div",{style:{height:"400px",position:"relative"},children:pt.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"📊"}),n.jsx("h5",{className:"text-muted",children:"No Transactions Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start tracking your expenses to see spending patterns"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/transactions"),children:"➕ Add Your First Transaction"})]}):n.jsxs(n.Fragment,{children:[Q==="line"&&n.jsx(ex,{data:Be,options:We}),Q==="bar"&&n.jsx(tx,{data:Be,options:We}),Q==="doughnut"&&n.jsx(Ga,{data:Be,options:We})]})}),n.jsxs("div",{className:"mt-3 row",children:[n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Total Transactions: ",n.jsx("strong",{children:ct.length})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Total Amount: ",n.jsxs("strong",{children:["$",ct.reduce((b,L)=>b+parseFloat(L.amount),0).toFixed(2)]})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Average: ",n.jsxs("strong",{children:["$",ct.length>0?(ct.reduce((b,L)=>b+parseFloat(L.amount),0)/ct.length).toFixed(2):"0.00"]})]})}),n.jsx("div",{className:"col-md-3",children:n.jsxs("small",{className:`text-${o?"light":"muted"}`,children:["Time Range: ",n.jsx("strong",{children:P==="all"?"All Time":P.charAt(0).toUpperCase()+P.slice(1)})]})})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"🚀 Crypto Investments"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Portfolio Tracking Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${Ze==="cards"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ut("cards"),title:"Card View",children:"🎴"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ze==="table"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ut("table"),title:"Table View",children:"📋"})]}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ke?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Je(!Ke),title:Ke?"Hide Portfolio Chart":"Show Portfolio Chart",children:Ke?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${lt?"btn-warning":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>On(!lt),title:lt?"Disable Animations":"Enable Animations",children:lt?"🎬":"⏸️"})]})]}),Ke&&R.length>0&&n.jsxs("div",{className:"mb-4",style:{height:"350px",position:"relative"},children:[n.jsx(Ga,{data:Xn,options:jn}),Ie&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${sn(Ie,0)}`},children:[n.jsxs("strong",{children:[Vt(Ie)," Selected: ",Ie.name]}),n.jsx("br",{}),n.jsxs("small",{children:["Value: $",Ie.total_price.toFixed(2)," • Amount: ",Ie.amount," • Price: $",((It=Ie.pricePerUnit)==null?void 0:It.toFixed(2))||"N/A"]})]})]}),R.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"🚀"}),n.jsx("h5",{className:"text-muted",children:"No Investments Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start building your crypto portfolio today"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/investments"),children:"➕ Add Your First Investment"})]}):n.jsxs(n.Fragment,{children:[Ze==="cards"&&n.jsx("div",{className:"row",children:R.map((b,L)=>{var Ye;const O=sn(b,L),q=on(),ye=Mt(q),_e=(Ie==null?void 0:Ie.id)===b.id;return n.jsx("div",{className:"col-md-6 col-lg-4 mb-4",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:lt?"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)":"none",borderLeft:`5px solid ${O}`,transform:_e?"scale(1.08) rotate(-1deg)":"scale(1)",boxShadow:_e?`0 15px 40px ${O}50`:"0 5px 20px rgba(0,0,0,0.1)",background:_e?o?`linear-gradient(135deg, #2d3748 0%, ${O}25 100%)`:`linear-gradient(135deg, #f8f9fa 0%, ${O}20 100%)`:void 0},onClick:()=>dt(_e?null:b),onMouseEnter:_=>{lt&&!_e&&(_.currentTarget.style.transform="translateY(-10px) scale(1.03)",_.currentTarget.style.boxShadow=`0 10px 30px ${O}40`)},onMouseLeave:_=>{lt&&(_.currentTarget.style.transform=_e?"scale(1.08) rotate(-1deg)":"scale(1)",_.currentTarget.style.boxShadow=_e?`0 15px 40px ${O}50`:"0 5px 20px rgba(0,0,0,0.1)")},children:n.jsxs("div",{className:"card-body p-4",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[n.jsx("div",{className:"flex-grow-1",children:n.jsxs("h6",{className:"card-title mb-2 d-flex align-items-center",style:{color:O},children:[n.jsx("span",{className:"me-2",style:{fontSize:"2rem"},children:Vt(b)}),n.jsxs("div",{children:[n.jsx("div",{children:b.name}),n.jsx("small",{className:`badge bg-${ye.class} mt-1`,children:ye.label})]})]})}),n.jsx("div",{className:"text-end",children:n.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center",style:{width:"50px",height:"50px",backgroundColor:`${O}20`,border:`3px solid ${O}40`},children:n.jsx("span",{style:{fontSize:"24px"},children:Vt(b)})})})]}),n.jsxs("div",{className:"text-center mb-3",children:[n.jsx("h3",{className:"mb-1",style:{color:O},children:c(b.total_price)}),n.jsx("small",{className:"text-muted",children:"Portfolio Value"})]}),n.jsxs("div",{className:"row text-center mb-3",children:[n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Amount"}),n.jsx("div",{style:{color:O,fontWeight:"bold"},children:be===L?n.jsx("input",{type:"number",value:Oe,onChange:_=>E(_.target.value),className:`form-control form-control-sm ${o?"bg-dark text-light":""}`,style:{borderColor:O}}):b.amount})]}),n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Price/Unit"}),n.jsxs("div",{style:{color:O,fontWeight:"bold"},children:["$",((Ye=b.pricePerUnit)==null?void 0:Ye.toFixed(2))||"N/A"]})]})]}),n.jsxs("div",{className:"mb-3",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[n.jsx("small",{className:"text-muted",children:"Performance"}),n.jsxs("small",{style:{color:q>0?"#28a745":"#dc3545"},children:[q>0?"+":"",q.toFixed(2),"%"]})]}),n.jsx("div",{className:"progress",style:{height:"6px",borderRadius:"10px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.abs(q)*5}%`,backgroundColor:q>0?"#28a745":"#dc3545",borderRadius:"10px",transition:lt?"width 1.5s ease-out":"none"}})})]}),n.jsx("div",{className:"d-flex gap-2",children:be===L?n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>X(L),className:"btn btn-sm btn-success flex-fill",style:{borderRadius:"8px"},children:"💾 Save"}),n.jsx("button",{onClick:ce,className:"btn btn-sm btn-secondary flex-fill",style:{borderRadius:"8px"},children:"❌ Cancel"})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>H(L),className:"btn btn-sm flex-fill",style:{backgroundColor:`${O}20`,color:O,border:`1px solid ${O}40`,borderRadius:"8px"},children:"✏️ Edit"}),n.jsx("button",{onClick:()=>Yt(L),className:"btn btn-sm btn-outline-danger flex-fill",style:{borderRadius:"8px"},children:"🗑️ Remove"})]})}),_e&&n.jsxs("div",{className:"mt-3 p-3 rounded",style:{backgroundColor:`${O}15`,border:`1px solid ${O}40`,animation:lt?"fadeIn 0.3s ease-in":"none"},children:[n.jsx("h6",{style:{color:O},children:"📊 Investment Analytics"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Total Return"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:q>0?"#28a745":"#dc3545"},children:["$",(b.total_price*q/100).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Portfolio %"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:O},children:[(b.total_price/pe*100).toFixed(1),"%"]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Risk Level"}),n.jsx("br",{}),n.jsx("strong",{style:{color:O},children:Math.abs(q)>5?"High 🔥":Math.abs(q)>2?"Medium ⚡":"Low 🛡️"})]})]})]})]})})},L)})}),Ze==="table"&&n.jsx("div",{className:"table-responsive",children:n.jsxs("table",{className:`table table-hover ${o?"table-dark":"table-light"}`,style:{borderRadius:"10px",overflow:"hidden"},children:[n.jsx("thead",{children:n.jsxs("tr",{style:{background:o?"#495057":"#f8f9fa"},children:[n.jsx("th",{children:"Asset"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Price/Unit"}),n.jsx("th",{children:"Total Value"}),n.jsx("th",{children:"Performance"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:R.map((b,L)=>{var Ye;const O=sn(b,L),q=on(),ye=Mt(q),_e=(Ie==null?void 0:Ie.id)===b.id;return n.jsxs("tr",{className:_e?"table-active":"",style:{borderLeft:`4px solid ${O}`,cursor:"pointer",transition:lt?"all 0.3s ease":"none",backgroundColor:_e?`${O}10`:void 0},onClick:()=>dt(_e?null:b),children:[n.jsx("td",{children:n.jsxs("div",{className:"d-flex align-items-center",children:[n.jsx("span",{style:{fontSize:"1.5rem",marginRight:"10px"},children:Vt(b)}),n.jsxs("div",{children:[n.jsx("strong",{style:{color:O},children:b.name}),n.jsx("br",{}),n.jsx("small",{className:`badge bg-${ye.class}`,children:ye.label})]})]})}),n.jsx("td",{children:be===L?n.jsx("input",{type:"number",value:Oe,onChange:_=>E(_.target.value),className:`form-control form-control-sm ${o?"bg-dark text-light":""}`,style:{borderColor:O,maxWidth:"100px"}}):n.jsx("strong",{style:{color:O},children:b.amount})}),n.jsxs("td",{style:{color:O},children:["$",((Ye=b.pricePerUnit)==null?void 0:Ye.toFixed(2))||"N/A"]}),n.jsx("td",{children:n.jsx("strong",{style:{color:O},children:c(b.total_price)})}),n.jsx("td",{children:n.jsx("div",{className:"d-flex align-items-center",children:n.jsxs("span",{style:{color:q>0?"#28a745":"#dc3545",marginRight:"8px"},children:[q>0?"📈":"📉",q.toFixed(2),"%"]})})}),n.jsx("td",{children:be===L?n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:_=>{_.stopPropagation(),X(L)},className:"btn btn-sm btn-success",children:"💾"}),n.jsx("button",{onClick:_=>{_.stopPropagation(),ce()},className:"btn btn-sm btn-secondary",children:"❌"})]}):n.jsxs("div",{className:"btn-group",children:[n.jsx("button",{onClick:_=>{_.stopPropagation(),H(L)},className:"btn btn-sm",style:{backgroundColor:`${O}20`,color:O,border:`1px solid ${O}40`},children:"✏️"}),n.jsx("button",{onClick:_=>{_.stopPropagation(),Yt(L)},className:"btn btn-sm btn-outline-danger",children:"🗑️"})]})})]},L)})})]})}),n.jsxs("div",{className:`mt-4 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:[n.jsx("h6",{className:"mb-3",style:{fontSize:"1.2rem",fontWeight:"700",color:o?"#e2e8f0":"#2d3748"},children:"💼 Portfolio Summary"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"🚀 Total Assets"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745",fontSize:"1.5rem"},children:R.length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"💰 Portfolio Value"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#17a2b8",fontSize:"1.2rem"},children:c(pe)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"📊 Avg. Performance"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#ffc107",fontSize:"1.2rem"},children:R.length>0?(R.reduce((b,L)=>b+on(),0)/R.length).toFixed(2)+"%":"0.0%"})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"🎯 Diversity Score"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#dc3545",fontSize:"1.2rem"},children:[R.length>0?Math.min(R.length*20,100):0,"%"]})]})]})]})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"🎯 Goals Progress"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Goal Tracking Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[n.jsxs("div",{className:"btn-group",role:"group",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${Ge==="cards"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ee("cards"),title:"Card View",children:"🎴"}),n.jsx("button",{type:"button",className:`btn btn-sm ${Ge==="list"?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ee("list"),title:"List View",children:"📋"})]}),n.jsx("button",{type:"button",className:`btn btn-sm ${ze?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Pt(!ze),title:ze?"Hide Goals Chart":"Show Goals Chart",children:ze?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${J?"btn-warning":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>Ae(!J),title:J?"Disable Animations":"Enable Animations",children:J?"🎬":"⏸️"})]})]}),ze&&g.length>0&&n.jsxs("div",{className:"mb-4",style:{height:"300px",position:"relative"},children:[n.jsx(Ga,{data:Jn,options:In}),ue&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${qt(ue.saved/ue.target*100)}`},children:[n.jsxs("strong",{children:[wn(ue.saved/ue.target*100)," Selected: ",ue.name]}),n.jsx("br",{}),n.jsxs("small",{children:["Progress: ",(ue.saved/ue.target*100).toFixed(1),"% • Saved: $",ue.saved.toFixed(2)," • Target: $",ue.target.toFixed(2)]})]})]}),g.length===0?n.jsxs("div",{className:"text-center p-5",children:[n.jsx("div",{className:"mb-3",style:{fontSize:"4rem"},children:"🎯"}),n.jsx("h5",{className:"text-muted",children:"No Goals Have Been Added!"}),n.jsx("p",{className:"text-muted",children:"Start setting financial goals to track your progress"}),n.jsx("button",{className:`btn ${o?"btn-outline-light":"btn-outline-primary"}`,onClick:()=>ne("/goals"),children:"➕ Add Your First Goal"})]}):n.jsxs(n.Fragment,{children:[Ge==="cards"&&n.jsx("div",{className:"row",children:g.map((b,L)=>{const O=b.saved/b.target*100,q=qt(O),ye=(ue==null?void 0:ue.id)===b.id;return n.jsx("div",{className:"col-md-6 col-lg-4 mb-4",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:J?"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)":"none",borderLeft:`5px solid ${q}`,transform:ye?"scale(1.08) rotate(1deg)":"scale(1)",boxShadow:ye?`0 12px 35px ${q}40`:"0 4px 15px rgba(0,0,0,0.1)",background:ye?o?`linear-gradient(135deg, #2d3748 0%, ${q}20 100%)`:`linear-gradient(135deg, #f8f9fa 0%, ${q}15 100%)`:void 0},onClick:()=>$e(ye?null:b),onMouseEnter:_e=>{J&&!ye&&(_e.currentTarget.style.transform="translateY(-8px) scale(1.02)",_e.currentTarget.style.boxShadow=`0 8px 25px ${q}30`)},onMouseLeave:_e=>{J&&(_e.currentTarget.style.transform=ye?"scale(1.08) rotate(1deg)":"scale(1)",_e.currentTarget.style.boxShadow=ye?`0 12px 35px ${q}40`:"0 4px 15px rgba(0,0,0,0.1)")},children:n.jsxs("div",{className:"card-body p-4",children:[n.jsx("div",{className:"d-flex justify-content-between align-items-start mb-3",children:n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("h6",{className:"card-title mb-1 d-flex align-items-center",style:{color:q},children:[n.jsx("span",{className:"me-2",style:{fontSize:"1.5rem"},children:wn(O,b.category)}),b.name]}),n.jsx("small",{className:`badge ${O>=100?"bg-success":O>=50?"bg-warning":"bg-danger"}`,children:Fn(O)})]})}),n.jsx("div",{className:"d-flex justify-content-center mb-3",children:n.jsxs("div",{style:{width:100,height:100,position:"relative"},children:[n.jsx(Bc,{value:O,strokeWidth:8,styles:zc({textColor:o?"white":"black",pathColor:q,trailColor:o?"#4a5568":"#e2e8f0",pathTransitionDuration:J?1.5:0,pathTransition:J?"stroke-dashoffset 1.5s ease-in-out":"none"})}),n.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"14px",fontWeight:"bold",color:q},children:[O.toFixed(1),"%"]})]})}),n.jsx("div",{className:"text-center",children:n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Saved"}),n.jsxs("div",{style:{color:q,fontWeight:"bold"},children:["$",b.saved.toFixed(2)]})]}),n.jsxs("div",{className:"col-6",children:[n.jsx("small",{className:"text-muted",children:"Target"}),n.jsxs("div",{style:{color:q,fontWeight:"bold"},children:["$",b.target.toFixed(2)]})]})]})}),n.jsxs("div",{className:"mt-3",children:[n.jsx("div",{className:"progress",style:{height:"8px",borderRadius:"10px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(O,100)}%`,backgroundColor:q,borderRadius:"10px",transition:J?"width 2s ease-out":"none",background:`linear-gradient(90deg, ${q} 0%, ${q}80 100%)`}})}),n.jsxs("div",{className:"d-flex justify-content-between mt-1",children:[n.jsxs("small",{style:{color:q},children:["$",(b.target-b.saved).toFixed(2)," remaining"]}),n.jsx("small",{style:{color:q},children:O>=100?"🎉 Complete!":`${(100-O).toFixed(1)}% to go`})]})]}),ye&&n.jsxs("div",{className:"mt-3 p-3 rounded",style:{backgroundColor:`${q}15`,border:`1px solid ${q}40`,animation:J?"fadeIn 0.3s ease-in":"none"},children:[n.jsx("h6",{style:{color:q},children:"📊 Goal Analytics"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Monthly Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:q},children:["$",((b.target-b.saved)/12).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Weekly Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:q},children:["$",((b.target-b.saved)/52).toFixed(2)]})]}),n.jsxs("div",{className:"col-4",children:[n.jsx("small",{children:"Daily Need"}),n.jsx("br",{}),n.jsxs("strong",{style:{color:q},children:["$",((b.target-b.saved)/365).toFixed(2)]})]})]})]})]})})},L)})}),Ge==="list"&&n.jsx("div",{className:"space-y-3",children:g.map((b,L)=>{const O=b.saved/b.target*100,q=qt(O),ye=(ue==null?void 0:ue.id)===b.id;return n.jsx("div",{className:`p-4 rounded-lg border ${o?"border-secondary":"border-light"} mb-3`,style:{backgroundColor:ye?`${q}10`:"transparent",borderLeft:`5px solid ${q}`,cursor:"pointer",transition:J?"all 0.3s ease":"none"},onClick:()=>$e(ye?null:b),children:n.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[n.jsxs("div",{className:"d-flex align-items-center flex-grow-1",children:[n.jsx("span",{style:{fontSize:"2rem",marginRight:"1rem"},children:wn(O,b.category)}),n.jsxs("div",{className:"flex-grow-1",children:[n.jsx("h6",{className:"mb-1",style:{color:q},children:b.name}),n.jsxs("div",{className:"d-flex align-items-center",children:[n.jsx("div",{className:"progress flex-grow-1 me-3",style:{height:"8px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(O,100)}%`,backgroundColor:q,transition:J?"width 1.5s ease-out":"none"}})}),n.jsxs("small",{style:{color:q,minWidth:"60px"},children:[O.toFixed(1),"%"]})]})]})]}),n.jsxs("div",{className:"text-end ms-3",children:[n.jsxs("div",{style:{color:q,fontWeight:"bold"},children:["$",b.saved.toFixed(2)," / $",b.target.toFixed(2)]}),n.jsxs("small",{className:"text-muted",children:["$",(b.target-b.saved).toFixed(2)," remaining"]})]})]})},L)})}),n.jsxs("div",{className:`mt-4 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:[n.jsx("h6",{className:"mb-3",style:{fontSize:"1.2rem",fontWeight:"700",color:o?"#e2e8f0":"#2d3748"},children:"📈 Goals Summary"}),n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"🎯 Total Goals"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745",fontSize:"1.5rem"},children:g.length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"✅ Completed"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#17a2b8",fontSize:"1.5rem"},children:g.filter(b=>b.saved/b.target*100>=100).length})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"💰 Total Saved"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#ffc107",fontSize:"1.2rem"},children:["$",ft.toFixed(2)]})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"🎪 Total Target"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#dc3545",fontSize:"1.2rem"},children:["$",g.reduce((b,L)=>b+L.target,0).toFixed(2)]})]})]})]})]})]}),n.jsx("br",{}),n.jsxs("div",{className:`table-responsive border border-info rounded p-3 ml-7 ${o?"bg-dark":"bg-light"}`,children:[n.jsxs("div",{className:"d-flex flex-wrap justify-content-between align-items-center mb-3",children:[n.jsxs("div",{children:[n.jsx("h6",{style:{fontSize:"1.8rem",margin:"0 0 10px 0",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3)",color:o?"#e2e8f0":"#2d3748"},children:"💼 Financial Overview"}),n.jsx("p",{style:{color:"gray"},children:n.jsx("sup",{children:"Interactive Summary Dashboard"})})]}),n.jsxs("div",{className:"d-flex gap-2",children:[n.jsx("button",{type:"button",className:`btn btn-sm ${fe?"btn-primary":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>G(!fe),title:fe?"Hide Chart":"Show Chart",children:fe?"📊":"📈"}),n.jsx("button",{type:"button",className:`btn btn-sm ${re?"btn-success":o?"btn-outline-light":"btn-outline-dark"}`,onClick:()=>ie(!re),title:re?"Disable Animations":"Enable Animations",children:re?"🎬":"⏸️"})]})]}),fe&&n.jsxs("div",{className:"mb-4",style:{height:"300px",position:"relative"},children:[n.jsx(Ga,{data:He,options:Ft}),D&&n.jsxs("div",{className:`alert ${o?"alert-dark":"alert-light"} mt-2`,style:{border:`2px solid ${St(D)}`},children:[n.jsxs("strong",{children:[an(D)," Selected: ",D]}),n.jsx("br",{}),n.jsx("small",{children:"Click on different segments to explore each category!"})]})]}),n.jsx("div",{className:"row",children:[{name:"Budget",value:y,trend:"up"},{name:"Balance",value:i,trend:"stable"},{name:"X-penses",value:r,trend:"down"},{name:"Goals (saved)",value:ft,trend:"up"},{name:"Investments",value:pe,trend:"up"},{name:"Overview Total",value:mt,trend:mt>0?"up":"down"}].map((b,L)=>n.jsx("div",{className:"col-md-6 col-lg-4 mb-3",children:n.jsx("div",{className:`card h-100 ${o?"bg-dark text-light":"bg-light"} border-0 shadow-sm`,style:{cursor:"pointer",transition:re?"all 0.3s ease":"none",borderLeft:`4px solid ${St(b.name)}`,transform:D===b.name?"scale(1.05)":"scale(1)",boxShadow:D===b.name?"0 8px 25px rgba(0,123,255,0.3)":"0 2px 10px rgba(0,0,0,0.1)"},onClick:()=>le(D===b.name?null:b.name),onMouseEnter:O=>{re&&(O.currentTarget.style.transform="translateY(-2px)")},onMouseLeave:O=>{re&&(O.currentTarget.style.transform=D===b.name?"scale(1.05)":"scale(1)")},children:n.jsxs("div",{className:"card-body p-3",children:[n.jsxs("div",{className:"d-flex justify-content-between align-items-start",children:[n.jsxs("div",{className:"flex-grow-1",children:[n.jsxs("h6",{className:"card-title mb-1",style:{color:St(b.name)},children:[an(b.name)," ",b.name]}),n.jsx("h4",{className:"mb-1",style:{color:St(b.name)},children:c(b.value)}),n.jsx("small",{className:`text-${b.trend==="up"?"success":b.trend==="down"?"danger":"muted"}`,children:b.trend==="up"?"📈 Positive":b.trend==="down"?"📉 Negative":"➡️ Stable"})]}),n.jsx("div",{className:"text-end",children:n.jsx("div",{className:"rounded-circle d-flex align-items-center justify-content-center",style:{width:"40px",height:"40px",backgroundColor:`${St(b.name)}20`,border:`2px solid ${St(b.name)}30`},children:n.jsx("span",{style:{fontSize:"20px"},children:an(b.name)})})})]}),n.jsx("div",{className:"mt-2",children:n.jsx("div",{className:"progress",style:{height:"4px"},children:n.jsx("div",{className:"progress-bar",style:{width:`${Math.min(Math.abs(b.value)/Math.max(y,i,r,pe,ft)*100,100)}%`,backgroundColor:St(b.name),transition:re?"width 1s ease":"none"}})})}),D===b.name&&n.jsx("div",{className:"mt-2 p-2 rounded",style:{backgroundColor:`${St(b.name)}10`},children:n.jsxs("small",{children:[n.jsx("strong",{children:"Details:"}),n.jsx("br",{}),b.name==="Budget"&&"Total budget allocated across all categories",b.name==="Balance"&&"Current available balance in accounts",b.name==="X-penses"&&"Total expenses recorded in transactions",b.name==="Goals (saved)"&&"Amount saved towards financial goals",b.name==="Investments"&&"Total value of crypto investments",b.name==="Overview Total"&&"Net financial position calculation"]})})]})})},L))}),n.jsx("div",{className:`mt-3 p-3 rounded ${o?"bg-secondary":"bg-light"}`,children:n.jsxs("div",{className:"row text-center",children:[n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#28a745"},children:"💰 Total Assets"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#28a745"},children:c(y+i+ft+pe)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#dc3545"},children:"💸 Total Spent"}),n.jsx("br",{}),n.jsx("span",{style:{color:"#dc3545"},children:c(r)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#17a2b8"},children:"📊 Net Worth"}),n.jsx("br",{}),n.jsx("span",{style:{color:mt>=0?"#28a745":"#dc3545"},children:c(mt)})]}),n.jsxs("div",{className:"col-md-3",children:[n.jsx("strong",{style:{color:"#ffc107"},children:"🎯 Savings Rate"}),n.jsx("br",{}),n.jsxs("span",{style:{color:"#ffc107"},children:[y>0?(ft/y*100).toFixed(1):"0.0","%"]})]})]})})]})]})})]})}const q1=({darkMode:s,transactions:i,setTransactions:r,totalAmount:o,setTotalAmount:c,editIndex:d,setEditIndex:u,editTransaction:m,setEditTransaction:g,formatCurrency:S,reminderDate:y,setSuccessMessage:w,successMessage:I,parseDate:K})=>{const[T,k]=v.useState(!1),[A,Y]=v.useState(null),[V,R]=v.useState(""),[M,ne]=v.useState("date"),[pe,we]=v.useState("desc"),[be,ve]=v.useState(""),[Oe,E]=v.useState(null);v.useEffect(()=>{console.log("TRANSACTIONS COMPONENT"),console.log("Fetching transactions..."),k(!0),ge.get("http://127.0.0.1:5001/transactions").then(G=>{console.log("Fetched transactions:",G.data),r(G.data)}).catch(G=>console.log("Error fetching transactions",G)).finally(()=>k(!1))},[]),v.useEffect(()=>{const G=i.reduce((re,ie)=>re+parseFloat(ie.amount),0);c(G)},[i]);const Q=G=>new Date(G).toISOString().split("T")[0],se=G=>{if(!G)return"";const re=new Date(G),ie=String(re.getMonth()+1).padStart(2,"0"),ue=String(re.getDate()).padStart(2,"0"),$e=re.getFullYear();return`${ie}-${ue}-${$e}`},P=G=>{const re=i[G];k(!0),ge.delete(`http://127.0.0.1:5001/transactions/${re.id}`).then(()=>{const ie=i.filter((ue,$e)=>$e!==G);r(ie),E(G),setTimeout(()=>E(null),500),w("🗑️ Transaction deleted successfully!"),setTimeout(()=>w(""),3e3)}).catch(ie=>console.error("Error deleting transaction:",ie)).finally(()=>{k(!1),Y(null)})},Z=G=>{Y(G)},oe=G=>{const{name:re,value:ie}=G.target;g({...m,[re]:ie||""})},Te=async G=>{let re;try{re=Q(m.date)}catch{console.error("Invalid date format:",m.date);return}const ie={...m,date:re};k(!0);try{await ge.put(`http://127.0.0.1:5001/transactions/${i[G].id}`,ie);const ue=i.map(($e,Ge)=>Ge===G?{...$e,...ie}:$e);r(ue),u(null),g({category:"",date:"",description:"",amount:""}),w("✅ Transaction updated successfully!"),setTimeout(()=>w(""),3e3)}catch(ue){console.error("Error updating transaction:",ue),w("❌ Failed to update transaction. Please try again."),setTimeout(()=>w(""),3e3)}finally{k(!1)}},ke=(G,re,ie)=>{const ue=new Date,$e=new Date(re)-ue;$e>0?(setTimeout(()=>{alert(`🔔 Reminder: You need to make a payment of ${ie} for ${G.description} on ${G.date}`)},$e),w(`⏰ Payment Reminder set for ${G.description} on ${re}`),setTimeout(()=>w(""),5e3)):alert("⚠️ Reminder date must be in the future.")},Ne=G=>{const re=prompt("📅 Enter the reminder date (MM-DD-YYYY):"),ie=prompt("💰 Enter the amount that needs to be paid:");re&&ie&&ke(G,re,ie)},D=()=>{let G=i.filter(re=>{const ie=re.description.toLowerCase().includes(V.toLowerCase())||re.category.toLowerCase().includes(V.toLowerCase()),ue=be===""||re.category===be;return ie&&ue});return G.sort((re,ie)=>{let ue=re[M],$e=ie[M];return M==="amount"?(ue=parseFloat(ue),$e=parseFloat($e)):M==="date"&&(ue=new Date(ue),$e=new Date($e)),pe==="asc"?ue>$e?1:-1:ue<$e?1:-1}),G},le=()=>[...new Set(i.map(G=>G.category))],fe=G=>({Cable:"📺","Child Support":"👶",Clothes:"👔",Debt:"💳",Entertainment:"🎬",Food:"🍕",Housing:"🏠",Insurance:"🛡️","Medical & Healthcare":"🏥",Mortgage:"🏘️","Personal Care":"💄",Pets:"🐕",Restaurants:"🍽️","Savings & Investments":"💰",Shopping:"🛍️",Transportation:"🚗",Utilities:"⚡"})[G]||"📄";return n.jsxs("div",{className:"transactions-container",children:[n.jsx("style",{jsx:!0,children:`
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
                    background: ${s?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
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
                    color: ${s?"#e2e8f0":"#2d3748"};
                    font-size: 0.9rem;
                }

                .control-input {
                    padding: 12px;
                    border: 2px solid ${s?"#4a5568":"#e2e8f0"};
                    border-radius: 8px;
                    background: ${s?"#2d3748":"#ffffff"};
                    color: ${s?"#e2e8f0":"#2d3748"};
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
                    background: ${s?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
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
                    background: ${s?"#2d3748":"#ffffff"};
                }

                .enhanced-table th {
                    background: ${s?"#4a5568":"#667eea"};
                    color: white;
                    padding: 18px 15px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 1rem;
                    border-bottom: 3px solid ${s?"#2d3748":"#5a67d8"};
                }

                .enhanced-table td {
                    padding: 15px;
                    border-bottom: 1px solid ${s?"#4a5568":"#e2e8f0"};
                    color: ${s?"#e2e8f0":"#2d3748"};
                    transition: all 0.3s ease;
                }

                .table-row {
                    transition: all 0.3s ease;
                }

                .table-row:hover {
                    background: ${s?"#4a5568":"#f7fafc"};
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
                    color: ${s?"#68d391":"#38a169"};
                }

                .total-row {
                    background: ${s?"#4a5568":"#667eea"};
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
                    background: ${s?"#2d3748":"#ffffff"};
                    color: ${s?"#e2e8f0":"#2d3748"};
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
                    .controls-section {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }
                    
                    .action-buttons {
                        flex-wrap: nowrap;
                        gap: 4px;
                    }
                    
                    .btn-modern {
                        padding: 4px 8px;
                        font-size: 0.7rem;
                        gap: 2px;
                    }
                }
            `}),n.jsxs("div",{className:"transactions-header",children:[n.jsx("h5",{children:"💼 Transaction History"}),n.jsx("p",{className:"transactions-subtitle",children:"Track your financial journey with style"})]}),I&&n.jsx("div",{className:"success-alert",children:I}),n.jsxs("div",{className:"controls-section",children:[n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"🔍 Search Transactions"}),n.jsx("input",{type:"text",className:"control-input",placeholder:"Search by description or category...",value:V,onChange:G=>R(G.target.value)})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"📂 Filter by Category"}),n.jsxs("select",{className:"control-input",value:be,onChange:G=>ve(G.target.value),children:[n.jsx("option",{value:"",children:"All Categories"}),le().map(G=>n.jsxs("option",{value:G,children:[fe(G)," ",G]},G))]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"🔄 Sort By"}),n.jsxs("select",{className:"control-input",value:M,onChange:G=>ne(G.target.value),children:[n.jsx("option",{value:"date",children:"📅 Date"}),n.jsx("option",{value:"amount",children:"💰 Amount"}),n.jsx("option",{value:"category",children:"📂 Category"}),n.jsx("option",{value:"description",children:"📝 Description"})]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{className:"control-label",children:"⬆️⬇️ Order"}),n.jsxs("select",{className:"control-input",value:pe,onChange:G=>we(G.target.value),children:[n.jsx("option",{value:"desc",children:"Descending"}),n.jsx("option",{value:"asc",children:"Ascending"})]})]})]}),n.jsx("div",{className:"table-container",children:T?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading transactions..."})]}):i.length===0?n.jsxs("div",{className:"no-transactions",children:["📊 No Transactions Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start tracking your expenses by adding your first transaction."})]}):n.jsx("div",{className:"table-responsive",children:n.jsxs("table",{className:"enhanced-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"📝 Description"}),n.jsx("th",{children:"📂 Category"}),n.jsx("th",{children:"📅 Date"}),n.jsx("th",{children:"💰 Amount"}),n.jsx("th",{children:"⚙️ Actions"})]})}),n.jsxs("tbody",{children:[D().map((G,re)=>{const ie=i.findIndex(ue=>ue.id===G.id);return n.jsx("tr",{className:`table-row ${Oe===ie?"animate-delete":""}`,children:d===ie?n.jsxs(n.Fragment,{children:[n.jsx("td",{children:n.jsx("input",{type:"text",name:"description",value:m.description,onChange:oe,className:"edit-input",placeholder:"Enter description..."})}),n.jsx("td",{children:n.jsx("input",{type:"text",name:"category",value:m.category,onChange:oe,className:"edit-input",placeholder:"Enter category..."})}),n.jsx("td",{children:n.jsx("input",{type:"date",name:"date",value:m.date,onChange:oe,className:"edit-input"})}),n.jsx("td",{children:n.jsx("input",{type:"number",name:"amount",value:m.amount,onChange:oe,className:"edit-input",step:"0.01",min:"0",placeholder:"0.00"})}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>Te(ie),className:"btn-modern btn-save",disabled:T,children:"✅ Save"}),n.jsx("button",{onClick:()=>u(null),className:"btn-modern btn-cancel",children:"❌ Cancel"})]})})]}):n.jsxs(n.Fragment,{children:[n.jsx("td",{"data-label":"Description",children:G.description||"No Description"}),n.jsx("td",{"data-label":"Category",children:n.jsxs("div",{className:"category-cell",children:[n.jsx("span",{children:fe(G.category)}),n.jsx("span",{children:G.category})]})}),n.jsx("td",{"data-label":"Date",children:se(K(G.date))}),n.jsx("td",{"data-label":"Amount",className:"amount-cell",children:S(G.amount)}),n.jsx("td",{"data-label":"Actions",children:A===ie?n.jsxs("div",{className:"delete-confirm",children:[n.jsx("div",{className:"confirm-text",children:"⚠️ Confirm deletion?"}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>P(ie),className:"btn-modern btn-delete",disabled:T,children:"🗑️ Yes, Delete"}),n.jsx("button",{onClick:()=>Y(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:()=>{u(ie),g({...G,date:Q(G.date)})},className:"btn-modern btn-edit",children:"✏️ Edit"}),n.jsx("button",{onClick:()=>Z(ie),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>Ne(G),className:"btn-modern btn-reminder",children:"⏰ Remind"})]})})]})},G.id||re)}),n.jsxs("tr",{className:"total-row",children:[n.jsx("td",{colSpan:"4",children:n.jsx("strong",{children:"💰 Total Expenses:"})}),n.jsx("td",{className:"amount-cell",children:n.jsx("strong",{children:S(o)})})]})]})]})})})]})},V1=({newGoalName:s,setNewGoalName:i,newGoalAmount:r,setNewGoalAmount:o,goals:c,setGoals:d,inputAmounts:u,setInputAmounts:m,validated:g,setValidated:S,editingGoalId:y,setEditingGoalId:w,editedGoalName:I,setEditedGoalName:K,formatCurrency:T,darkMode:k})=>{const[A,Y]=v.useState(!1),[V,R]=v.useState(""),[M,ne]=v.useState(null),[pe,we]=v.useState(null),[be,ve]=v.useState({});v.useEffect(()=>{console.log("GOALS COMPONENT"),console.log("Fetching goals from backend"),Y(!0),fetch("http://localhost:5001/goals").then(D=>D.json()).then(D=>{console.log("Retrieved goals from backend:",D),d(D)}).catch(D=>console.error("Error fetching goals:",D)).finally(()=>Y(!1))},[]);const Oe=D=>{if(D.preventDefault(),S(!0),s&&r){Y(!0);const le={name:s,target:Number(r),saved:0};console.log("Adding new goal:",le),fetch("http://localhost:5001/goals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(le)}).then(fe=>fe.json()).then(fe=>{d([...c,fe]),i(""),o(""),S(!1),R("🎯 Goal added successfully!"),setTimeout(()=>R(""),3e3)}).catch(fe=>{console.error("Error adding goal:",fe),R("❌ Failed to add goal. Please try again."),setTimeout(()=>R(""),3e3)}).finally(()=>Y(!1))}},E=D=>{const le=Number(u[D]||0);if(le<=0){R("⚠️ Please enter a valid amount greater than 0"),setTimeout(()=>R(""),3e3);return}m({...u,[D]:""}),Y(!0);const fe=c.map(re=>{if(re.id===D){const ie=re.saved+le,ue=re.saved>=re.target,$e=ie>=re.target;return!ue&&$e&&(we(D),setTimeout(()=>we(null),3e3),R("🎉 Congratulations! Goal completed!"),setTimeout(()=>R(""),5e3)),{...re,saved:ie}}return re});d(fe),ve({...be,[D]:!0}),setTimeout(()=>{ve({...be,[D]:!1})},1e3);const G=fe.find(re=>re.id===D);fetch(`http://localhost:5001/goals/${D}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(G)}).then(()=>{R("💰 Amount added successfully!"),setTimeout(()=>R(""),3e3)}).catch(re=>{console.error("Error updating goal:",re),R("❌ Failed to update goal. Please try again."),setTimeout(()=>R(""),3e3)}).finally(()=>Y(!1))},Q=D=>{m({...u,[D]:""}),Y(!0);const le=c.map(G=>G.id===D?{...G,saved:0}:G);d(le);const fe=le.find(G=>G.id===D);fetch(`http://localhost:5001/goals/${D}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(fe)}).then(()=>{R("🔄 Goal progress reset successfully!"),setTimeout(()=>R(""),3e3)}).catch(G=>{console.error("Error resetting goal amount:",G),R("❌ Failed to reset goal. Please try again."),setTimeout(()=>R(""),3e3)}).finally(()=>Y(!1))},se=D=>{Y(!0);const le=c.filter(fe=>fe.id!==D);d(le),fetch(`http://localhost:5001/goals/${D}`,{method:"DELETE"}).then(()=>{R("🗑️ Goal deleted successfully!"),setTimeout(()=>R(""),3e3)}).catch(fe=>{console.error("Error deleting goal:",fe),R("❌ Failed to delete goal. Please try again."),setTimeout(()=>R(""),3e3)}).finally(()=>{Y(!1),ne(null)})},P=D=>{ne(D)},Z=(D,le)=>{w(D),K(le)},oe=D=>{if(!I.trim()){R("⚠️ Goal name cannot be empty"),setTimeout(()=>R(""),3e3);return}Y(!0);const le=c.map(fe=>fe.id===D?{...fe,name:I}:fe);d(le),fetch(`http://localhost:5001/goals/${D}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:I})}).then(fe=>{if(!fe.ok)throw new Error("Network response was not ok");return fe.json()}).then(fe=>{console.log("Updated goal:",fe),w(null),K(""),R("✅ Goal updated successfully!"),setTimeout(()=>R(""),3e3)}).catch(fe=>{console.error("Error updating goal:",fe),R("❌ Failed to update goal. Please try again."),setTimeout(()=>R(""),3e3)}).finally(()=>Y(!1))},Te=()=>{w(null),K("")},ke=D=>D>=100?"#10b981":D>=75?"#f59e0b":D>=50?"#3b82f6":D>=25?"#8b5cf6":"#ef4444",Ne=D=>{const le=D.saved/D.target*100;return le>=100?"🎉 Goal Completed!":le>=75?"🔥 Almost there!":le>=50?"💪 Halfway there!":le>=25?"🚀 Great start!":"🎯 Let's begin!"};return n.jsxs("div",{className:"goals-container",children:[n.jsx("style",{jsx:!0,children:`
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
            `}),n.jsxs("div",{className:"goals-header",children:[n.jsx("h5",{children:"🎯 Financial Goals"}),n.jsx("p",{className:"goals-subtitle",children:"Turn your dreams into achievable targets"})]}),V&&n.jsx("div",{className:"success-message",children:V}),n.jsxs("div",{className:"form-container",children:[n.jsx("div",{className:"form-subtitle",children:"✨ Create a new financial goal to track your progress"}),n.jsxs("form",{noValidate:!0,onSubmit:Oe,className:`needs-validation ${g?"was-validated":""}`,children:[n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",id:"newGoalName",value:s,onChange:D=>i(D.target.value),className:`form-input ${g&&!s?"is-invalid":""}`,placeholder:"🎯 Goal Name (e.g., New Car, Vacation)",required:!0}),n.jsx("div",{className:"invalid-feedback",children:"Please provide a goal name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"number",id:"newGoalAmount",value:r,onChange:D=>o(D.target.value),className:`form-input ${g&&!r?"is-invalid":""}`,placeholder:"💰 Target Amount ($)",min:"0",step:"0.01",required:!0}),n.jsx("div",{className:"invalid-feedback",children:"Please provide a goal amount"})]})]}),n.jsxs("button",{type:"submit",className:"submit-button",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"",A?"Adding Goal...":"🚀 Create Goal"]})]})]}),n.jsx("div",{className:"goals-list-header",children:"💎 YOUR FINANCIAL JOURNEY"}),A&&c.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"40px"},children:[n.jsx("div",{className:"loading-spinner",style:{width:"40px",height:"40px",border:"4px solid #f3f3f3",borderTop:"4px solid #667eea"}}),n.jsx("p",{children:"Loading your goals..."})]}):c.length===0?n.jsxs("div",{className:"no-goals",children:["🎯 No Goals Have Been Added Yet!",n.jsx("br",{}),n.jsx("small",{children:"Start your financial journey by creating your first goal above."})]}):c.map(D=>{const le=D.saved/D.target*100,fe=ke(le);return n.jsx("div",{className:`goal-card ${pe===D.id?"celebrate":""}`,children:y===D.id?n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"text",value:I,onChange:G=>K(G.target.value),className:"edit-input",placeholder:"Enter new goal name..."}),n.jsxs("div",{className:"edit-actions",children:[n.jsxs("button",{onClick:()=>oe(D.id),className:"btn-modern btn-save",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"","✅ Save"]}),n.jsx("button",{onClick:Te,className:"btn-modern btn-cancel",children:"❌ Cancel"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"goal-header",children:[n.jsx("div",{className:"goal-title",children:D.name}),n.jsxs("div",{className:"goal-target",children:["Target: ",T(D.target)]})]}),n.jsxs("div",{className:"progress-container",children:[n.jsx("div",{className:`progress-circle ${be[D.id]?"animate":""}`,children:n.jsx(Bc,{value:Math.min(le,100),strokeWidth:8,styles:zc({textColor:k?"white":"black",pathColor:fe,trailColor:k?"#4a5568":"#e2e8f0",pathTransitionDuration:1.5})})}),n.jsxs("div",{className:"progress-text",children:[n.jsxs("div",{className:"progress-percentage",style:{color:fe},children:[le.toFixed(1),"%"]}),n.jsx("div",{className:"progress-message",style:{color:fe},children:Ne(D)})]})]}),n.jsxs("div",{className:"goal-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-label",children:"💰 Saved"}),n.jsx("div",{className:"stat-value",style:{color:"#38a169"},children:T(D.saved)})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-label",children:"🎯 Remaining"}),n.jsx("div",{className:"stat-value",style:{color:"#f59e0b"},children:T(Math.max(0,D.target-D.saved))})]})]}),n.jsx("input",{type:"number",id:`inputAmount-${D.id}`,name:`inputAmount-${D.id}`,value:u[D.id]||"",onChange:G=>m({...u,[D.id]:G.target.value}),className:"amount-input",placeholder:"💵 Enter amount to add...",min:"0",step:"0.01"}),M===D.id?n.jsxs("div",{className:"delete-confirm",children:[n.jsxs("div",{className:"confirm-text",children:['⚠️ Are you sure you want to delete "',D.name,'"?']}),n.jsxs("div",{className:"confirm-actions",children:[n.jsxs("button",{onClick:()=>se(D.id),className:"btn-modern btn-delete",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"","🗑️ Yes, Delete"]}),n.jsx("button",{onClick:()=>ne(null),className:"btn-modern btn-cancel",children:"↩️ Cancel"})]})]}):n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>E(D.id),className:"btn-modern btn-add",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"","💰 Add Amount"]}),n.jsxs("button",{onClick:()=>Q(D.id),className:"btn-modern btn-reset",disabled:A,children:[A?n.jsx("span",{className:"loading-spinner"}):"","🔄 Reset"]}),n.jsx("button",{onClick:()=>P(D.id),className:"btn-modern btn-delete",children:"🗑️ Delete"}),n.jsx("button",{onClick:()=>Z(D.id,D.name),className:"btn-modern btn-edit",children:"✏️ Edit"})]})]})},D.id)})]})};var Kr={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var M1=Kr.exports,Uc;function K1(){return Uc||(Uc=1,function(s,i){(function(){var r,o="4.17.21",c=200,d="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",m="Invalid `variable` option passed into `_.template`",g="__lodash_hash_undefined__",S=500,y="__lodash_placeholder__",w=1,I=2,K=4,T=1,k=2,A=1,Y=2,V=4,R=8,M=16,ne=32,pe=64,we=128,be=256,ve=512,Oe=30,E="...",Q=800,se=16,P=1,Z=2,oe=3,Te=1/0,ke=9007199254740991,Ne=17976931348623157e292,D=NaN,le=4294967295,fe=le-1,G=le>>>1,re=[["ary",we],["bind",A],["bindKey",Y],["curry",R],["curryRight",M],["flip",ve],["partial",ne],["partialRight",pe],["rearg",be]],ie="[object Arguments]",ue="[object Array]",$e="[object AsyncFunction]",Ge="[object Boolean]",ee="[object Date]",J="[object DOMException]",Ae="[object Error]",ze="[object Function]",Pt="[object GeneratorFunction]",Ie="[object Map]",dt="[object Number]",Ze="[object Null]",ut="[object Object]",lt="[object Promise]",On="[object Proxy]",Ke="[object RegExp]",Je="[object Set]",ft="[object String]",mt="[object Symbol]",yn="[object Undefined]",Ot="[object WeakMap]",gn="[object WeakSet]",ct="[object ArrayBuffer]",pt="[object DataView]",rn="[object Float32Array]",At="[object Float64Array]",Yt="[object Int8Array]",H="[object Int16Array]",X="[object Int32Array]",ce="[object Uint8Array]",je="[object Uint8ClampedArray]",Be="[object Uint16Array]",tt="[object Uint32Array]",We=/\b__p \+= '';/g,He=/\b(__p \+=) '' \+/g,Ft=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,an=/[&<>"']/g,qt=RegExp(St.source),wn=RegExp(an.source),Fn=/<%-([\s\S]+?)%>/g,Jn=/<%([\s\S]+?)%>/g,In=/<%=([\s\S]+?)%>/g,sn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Vt=/^\w*$/,on=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mt=/[\\^$.*+?()[\]{}|]/g,Xn=RegExp(Mt.source),jn=/^\s+/,It=/\s/,b=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,L=/\{\n\/\* \[wrapped with (.+)\] \*/,O=/,? & /,q=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ye=/[()=,{}\[\]\/\s]/,_e=/\\(\\)?/g,Ye=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_=/\w*$/,Lt=/^[-+]0x[0-9a-f]+$/i,ln=/^0b[01]+$/i,Ws=/^\[object .+?Constructor\]$/,di=/^0o[0-7]+$/i,kd=/^(?:0|[1-9]\d*)$/,$d=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ta=/($^)/,Pd=/['\n\r\u2028\u2029\\]/g,na="\\ud800-\\udfff",Od="\\u0300-\\u036f",Fd="\\ufe20-\\ufe2f",Id="\\u20d0-\\u20ff",Hs=Od+Fd+Id,Gs="\\u2700-\\u27bf",Ys="a-z\\xdf-\\xf6\\xf8-\\xff",Ld="\\xac\\xb1\\xd7\\xf7",Ud="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Dd="\\u2000-\\u206f",Bd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qs="A-Z\\xc0-\\xd6\\xd8-\\xde",Vs="\\ufe0e\\ufe0f",Ms=Ld+Ud+Dd+Bd,ui="['’]",zd="["+na+"]",Ks="["+Ms+"]",ra="["+Hs+"]",Js="\\d+",Wd="["+Gs+"]",Xs="["+Ys+"]",Zs="[^"+na+Ms+Js+Gs+Ys+qs+"]",fi="\\ud83c[\\udffb-\\udfff]",Hd="(?:"+ra+"|"+fi+")",Qs="[^"+na+"]",pi="(?:\\ud83c[\\udde6-\\uddff]){2}",hi="[\\ud800-\\udbff][\\udc00-\\udfff]",fr="["+qs+"]",eo="\\u200d",to="(?:"+Xs+"|"+Zs+")",Gd="(?:"+fr+"|"+Zs+")",no="(?:"+ui+"(?:d|ll|m|re|s|t|ve))?",ro="(?:"+ui+"(?:D|LL|M|RE|S|T|VE))?",ao=Hd+"?",io="["+Vs+"]?",Yd="(?:"+eo+"(?:"+[Qs,pi,hi].join("|")+")"+io+ao+")*",qd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Vd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",so=io+ao+Yd,Md="(?:"+[Wd,pi,hi].join("|")+")"+so,Kd="(?:"+[Qs+ra+"?",ra,pi,hi,zd].join("|")+")",Jd=RegExp(ui,"g"),Xd=RegExp(ra,"g"),gi=RegExp(fi+"(?="+fi+")|"+Kd+so,"g"),Zd=RegExp([fr+"?"+Xs+"+"+no+"(?="+[Ks,fr,"$"].join("|")+")",Gd+"+"+ro+"(?="+[Ks,fr+to,"$"].join("|")+")",fr+"?"+to+"+"+no,fr+"+"+ro,Vd,qd,Js,Md].join("|"),"g"),Qd=RegExp("["+eo+na+Hs+Vs+"]"),eu=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,tu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],nu=-1,et={};et[rn]=et[At]=et[Yt]=et[H]=et[X]=et[ce]=et[je]=et[Be]=et[tt]=!0,et[ie]=et[ue]=et[ct]=et[Ge]=et[pt]=et[ee]=et[Ae]=et[ze]=et[Ie]=et[dt]=et[ut]=et[Ke]=et[Je]=et[ft]=et[Ot]=!1;var Qe={};Qe[ie]=Qe[ue]=Qe[ct]=Qe[pt]=Qe[Ge]=Qe[ee]=Qe[rn]=Qe[At]=Qe[Yt]=Qe[H]=Qe[X]=Qe[Ie]=Qe[dt]=Qe[ut]=Qe[Ke]=Qe[Je]=Qe[ft]=Qe[mt]=Qe[ce]=Qe[je]=Qe[Be]=Qe[tt]=!0,Qe[Ae]=Qe[ze]=Qe[Ot]=!1;var ru={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},au={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},iu={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},su={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ou=parseFloat,lu=parseInt,oo=typeof Ha=="object"&&Ha&&Ha.Object===Object&&Ha,cu=typeof self=="object"&&self&&self.Object===Object&&self,bt=oo||cu||Function("return this")(),mi=i&&!i.nodeType&&i,Zn=mi&&!0&&s&&!s.nodeType&&s,lo=Zn&&Zn.exports===mi,xi=lo&&oo.process,Kt=function(){try{var N=Zn&&Zn.require&&Zn.require("util").types;return N||xi&&xi.binding&&xi.binding("util")}catch{}}(),co=Kt&&Kt.isArrayBuffer,uo=Kt&&Kt.isDate,fo=Kt&&Kt.isMap,po=Kt&&Kt.isRegExp,ho=Kt&&Kt.isSet,go=Kt&&Kt.isTypedArray;function Ut(N,U,$){switch($.length){case 0:return N.call(U);case 1:return N.call(U,$[0]);case 2:return N.call(U,$[0],$[1]);case 3:return N.call(U,$[0],$[1],$[2])}return N.apply(U,$)}function du(N,U,$,ae){for(var Se=-1,qe=N==null?0:N.length;++Se<qe;){var ht=N[Se];U(ae,ht,$(ht),N)}return ae}function Jt(N,U){for(var $=-1,ae=N==null?0:N.length;++$<ae&&U(N[$],$,N)!==!1;);return N}function uu(N,U){for(var $=N==null?0:N.length;$--&&U(N[$],$,N)!==!1;);return N}function mo(N,U){for(var $=-1,ae=N==null?0:N.length;++$<ae;)if(!U(N[$],$,N))return!1;return!0}function Ln(N,U){for(var $=-1,ae=N==null?0:N.length,Se=0,qe=[];++$<ae;){var ht=N[$];U(ht,$,N)&&(qe[Se++]=ht)}return qe}function aa(N,U){var $=N==null?0:N.length;return!!$&&pr(N,U,0)>-1}function bi(N,U,$){for(var ae=-1,Se=N==null?0:N.length;++ae<Se;)if($(U,N[ae]))return!0;return!1}function nt(N,U){for(var $=-1,ae=N==null?0:N.length,Se=Array(ae);++$<ae;)Se[$]=U(N[$],$,N);return Se}function Un(N,U){for(var $=-1,ae=U.length,Se=N.length;++$<ae;)N[Se+$]=U[$];return N}function vi(N,U,$,ae){var Se=-1,qe=N==null?0:N.length;for(ae&&qe&&($=N[++Se]);++Se<qe;)$=U($,N[Se],Se,N);return $}function fu(N,U,$,ae){var Se=N==null?0:N.length;for(ae&&Se&&($=N[--Se]);Se--;)$=U($,N[Se],Se,N);return $}function yi(N,U){for(var $=-1,ae=N==null?0:N.length;++$<ae;)if(U(N[$],$,N))return!0;return!1}var pu=wi("length");function hu(N){return N.split("")}function gu(N){return N.match(q)||[]}function xo(N,U,$){var ae;return $(N,function(Se,qe,ht){if(U(Se,qe,ht))return ae=qe,!1}),ae}function ia(N,U,$,ae){for(var Se=N.length,qe=$+(ae?1:-1);ae?qe--:++qe<Se;)if(U(N[qe],qe,N))return qe;return-1}function pr(N,U,$){return U===U?Au(N,U,$):ia(N,bo,$)}function mu(N,U,$,ae){for(var Se=$-1,qe=N.length;++Se<qe;)if(ae(N[Se],U))return Se;return-1}function bo(N){return N!==N}function vo(N,U){var $=N==null?0:N.length;return $?Si(N,U)/$:D}function wi(N){return function(U){return U==null?r:U[N]}}function ji(N){return function(U){return N==null?r:N[U]}}function yo(N,U,$,ae,Se){return Se(N,function(qe,ht,Xe){$=ae?(ae=!1,qe):U($,qe,ht,Xe)}),$}function xu(N,U){var $=N.length;for(N.sort(U);$--;)N[$]=N[$].value;return N}function Si(N,U){for(var $,ae=-1,Se=N.length;++ae<Se;){var qe=U(N[ae]);qe!==r&&($=$===r?qe:$+qe)}return $}function Ni(N,U){for(var $=-1,ae=Array(N);++$<N;)ae[$]=U($);return ae}function bu(N,U){return nt(U,function($){return[$,N[$]]})}function wo(N){return N&&N.slice(0,_o(N)+1).replace(jn,"")}function Dt(N){return function(U){return N(U)}}function _i(N,U){return nt(U,function($){return N[$]})}function $r(N,U){return N.has(U)}function jo(N,U){for(var $=-1,ae=N.length;++$<ae&&pr(U,N[$],0)>-1;);return $}function So(N,U){for(var $=N.length;$--&&pr(U,N[$],0)>-1;);return $}function vu(N,U){for(var $=N.length,ae=0;$--;)N[$]===U&&++ae;return ae}var yu=ji(ru),wu=ji(au);function ju(N){return"\\"+su[N]}function Su(N,U){return N==null?r:N[U]}function hr(N){return Qd.test(N)}function Nu(N){return eu.test(N)}function _u(N){for(var U,$=[];!(U=N.next()).done;)$.push(U.value);return $}function Ci(N){var U=-1,$=Array(N.size);return N.forEach(function(ae,Se){$[++U]=[Se,ae]}),$}function No(N,U){return function($){return N(U($))}}function Dn(N,U){for(var $=-1,ae=N.length,Se=0,qe=[];++$<ae;){var ht=N[$];(ht===U||ht===y)&&(N[$]=y,qe[Se++]=$)}return qe}function sa(N){var U=-1,$=Array(N.size);return N.forEach(function(ae){$[++U]=ae}),$}function Cu(N){var U=-1,$=Array(N.size);return N.forEach(function(ae){$[++U]=[ae,ae]}),$}function Au(N,U,$){for(var ae=$-1,Se=N.length;++ae<Se;)if(N[ae]===U)return ae;return-1}function Eu(N,U,$){for(var ae=$+1;ae--;)if(N[ae]===U)return ae;return ae}function gr(N){return hr(N)?Ru(N):pu(N)}function cn(N){return hr(N)?ku(N):hu(N)}function _o(N){for(var U=N.length;U--&&It.test(N.charAt(U)););return U}var Tu=ji(iu);function Ru(N){for(var U=gi.lastIndex=0;gi.test(N);)++U;return U}function ku(N){return N.match(gi)||[]}function $u(N){return N.match(Zd)||[]}var Pu=function N(U){U=U==null?bt:mr.defaults(bt.Object(),U,mr.pick(bt,tu));var $=U.Array,ae=U.Date,Se=U.Error,qe=U.Function,ht=U.Math,Xe=U.Object,Ai=U.RegExp,Ou=U.String,Xt=U.TypeError,oa=$.prototype,Fu=qe.prototype,xr=Xe.prototype,la=U["__core-js_shared__"],ca=Fu.toString,Me=xr.hasOwnProperty,Iu=0,Co=function(){var e=/[^.]+$/.exec(la&&la.keys&&la.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),da=xr.toString,Lu=ca.call(Xe),Uu=bt._,Du=Ai("^"+ca.call(Me).replace(Mt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ua=lo?U.Buffer:r,Bn=U.Symbol,fa=U.Uint8Array,Ao=ua?ua.allocUnsafe:r,pa=No(Xe.getPrototypeOf,Xe),Eo=Xe.create,To=xr.propertyIsEnumerable,ha=oa.splice,Ro=Bn?Bn.isConcatSpreadable:r,Pr=Bn?Bn.iterator:r,Qn=Bn?Bn.toStringTag:r,ga=function(){try{var e=ar(Xe,"defineProperty");return e({},"",{}),e}catch{}}(),Bu=U.clearTimeout!==bt.clearTimeout&&U.clearTimeout,zu=ae&&ae.now!==bt.Date.now&&ae.now,Wu=U.setTimeout!==bt.setTimeout&&U.setTimeout,ma=ht.ceil,xa=ht.floor,Ei=Xe.getOwnPropertySymbols,Hu=ua?ua.isBuffer:r,ko=U.isFinite,Gu=oa.join,Yu=No(Xe.keys,Xe),gt=ht.max,yt=ht.min,qu=ae.now,Vu=U.parseInt,$o=ht.random,Mu=oa.reverse,Ti=ar(U,"DataView"),Or=ar(U,"Map"),Ri=ar(U,"Promise"),br=ar(U,"Set"),Fr=ar(U,"WeakMap"),Ir=ar(Xe,"create"),ba=Fr&&new Fr,vr={},Ku=ir(Ti),Ju=ir(Or),Xu=ir(Ri),Zu=ir(br),Qu=ir(Fr),va=Bn?Bn.prototype:r,Lr=va?va.valueOf:r,Po=va?va.toString:r;function p(e){if(it(e)&&!Ce(e)&&!(e instanceof Ue)){if(e instanceof Zt)return e;if(Me.call(e,"__wrapped__"))return Ol(e)}return new Zt(e)}var yr=function(){function e(){}return function(t){if(!rt(t))return{};if(Eo)return Eo(t);e.prototype=t;var a=new e;return e.prototype=r,a}}();function ya(){}function Zt(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}p.templateSettings={escape:Fn,evaluate:Jn,interpolate:In,variable:"",imports:{_:p}},p.prototype=ya.prototype,p.prototype.constructor=p,Zt.prototype=yr(ya.prototype),Zt.prototype.constructor=Zt;function Ue(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=le,this.__views__=[]}function ef(){var e=new Ue(this.__wrapped__);return e.__actions__=Et(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Et(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Et(this.__views__),e}function tf(){if(this.__filtered__){var e=new Ue(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function nf(){var e=this.__wrapped__.value(),t=this.__dir__,a=Ce(e),l=t<0,f=a?e.length:0,h=gp(0,f,this.__views__),x=h.start,j=h.end,C=j-x,B=l?j:x-1,z=this.__iteratees__,W=z.length,te=0,de=yt(C,this.__takeCount__);if(!a||!l&&f==C&&de==C)return rl(e,this.__actions__);var me=[];e:for(;C--&&te<de;){B+=t;for(var Pe=-1,xe=e[B];++Pe<W;){var Le=z[Pe],De=Le.iteratee,Wt=Le.type,Ct=De(xe);if(Wt==Z)xe=Ct;else if(!Ct){if(Wt==P)continue e;break e}}me[te++]=xe}return me}Ue.prototype=yr(ya.prototype),Ue.prototype.constructor=Ue;function er(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}function rf(){this.__data__=Ir?Ir(null):{},this.size=0}function af(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function sf(e){var t=this.__data__;if(Ir){var a=t[e];return a===g?r:a}return Me.call(t,e)?t[e]:r}function of(e){var t=this.__data__;return Ir?t[e]!==r:Me.call(t,e)}function lf(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=Ir&&t===r?g:t,this}er.prototype.clear=rf,er.prototype.delete=af,er.prototype.get=sf,er.prototype.has=of,er.prototype.set=lf;function Sn(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}function cf(){this.__data__=[],this.size=0}function df(e){var t=this.__data__,a=wa(t,e);if(a<0)return!1;var l=t.length-1;return a==l?t.pop():ha.call(t,a,1),--this.size,!0}function uf(e){var t=this.__data__,a=wa(t,e);return a<0?r:t[a][1]}function ff(e){return wa(this.__data__,e)>-1}function pf(e,t){var a=this.__data__,l=wa(a,e);return l<0?(++this.size,a.push([e,t])):a[l][1]=t,this}Sn.prototype.clear=cf,Sn.prototype.delete=df,Sn.prototype.get=uf,Sn.prototype.has=ff,Sn.prototype.set=pf;function Nn(e){var t=-1,a=e==null?0:e.length;for(this.clear();++t<a;){var l=e[t];this.set(l[0],l[1])}}function hf(){this.size=0,this.__data__={hash:new er,map:new(Or||Sn),string:new er}}function gf(e){var t=Pa(this,e).delete(e);return this.size-=t?1:0,t}function mf(e){return Pa(this,e).get(e)}function xf(e){return Pa(this,e).has(e)}function bf(e,t){var a=Pa(this,e),l=a.size;return a.set(e,t),this.size+=a.size==l?0:1,this}Nn.prototype.clear=hf,Nn.prototype.delete=gf,Nn.prototype.get=mf,Nn.prototype.has=xf,Nn.prototype.set=bf;function tr(e){var t=-1,a=e==null?0:e.length;for(this.__data__=new Nn;++t<a;)this.add(e[t])}function vf(e){return this.__data__.set(e,g),this}function yf(e){return this.__data__.has(e)}tr.prototype.add=tr.prototype.push=vf,tr.prototype.has=yf;function dn(e){var t=this.__data__=new Sn(e);this.size=t.size}function wf(){this.__data__=new Sn,this.size=0}function jf(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}function Sf(e){return this.__data__.get(e)}function Nf(e){return this.__data__.has(e)}function _f(e,t){var a=this.__data__;if(a instanceof Sn){var l=a.__data__;if(!Or||l.length<c-1)return l.push([e,t]),this.size=++a.size,this;a=this.__data__=new Nn(l)}return a.set(e,t),this.size=a.size,this}dn.prototype.clear=wf,dn.prototype.delete=jf,dn.prototype.get=Sf,dn.prototype.has=Nf,dn.prototype.set=_f;function Oo(e,t){var a=Ce(e),l=!a&&sr(e),f=!a&&!l&&Yn(e),h=!a&&!l&&!f&&Nr(e),x=a||l||f||h,j=x?Ni(e.length,Ou):[],C=j.length;for(var B in e)(t||Me.call(e,B))&&!(x&&(B=="length"||f&&(B=="offset"||B=="parent")||h&&(B=="buffer"||B=="byteLength"||B=="byteOffset")||En(B,C)))&&j.push(B);return j}function Fo(e){var t=e.length;return t?e[zi(0,t-1)]:r}function Cf(e,t){return Oa(Et(e),nr(t,0,e.length))}function Af(e){return Oa(Et(e))}function ki(e,t,a){(a!==r&&!un(e[t],a)||a===r&&!(t in e))&&_n(e,t,a)}function Ur(e,t,a){var l=e[t];(!(Me.call(e,t)&&un(l,a))||a===r&&!(t in e))&&_n(e,t,a)}function wa(e,t){for(var a=e.length;a--;)if(un(e[a][0],t))return a;return-1}function Ef(e,t,a,l){return zn(e,function(f,h,x){t(l,f,a(f),x)}),l}function Io(e,t){return e&&xn(t,xt(t),e)}function Tf(e,t){return e&&xn(t,Rt(t),e)}function _n(e,t,a){t=="__proto__"&&ga?ga(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}function $i(e,t){for(var a=-1,l=t.length,f=$(l),h=e==null;++a<l;)f[a]=h?r:fs(e,t[a]);return f}function nr(e,t,a){return e===e&&(a!==r&&(e=e<=a?e:a),t!==r&&(e=e>=t?e:t)),e}function Qt(e,t,a,l,f,h){var x,j=t&w,C=t&I,B=t&K;if(a&&(x=f?a(e,l,f,h):a(e)),x!==r)return x;if(!rt(e))return e;var z=Ce(e);if(z){if(x=xp(e),!j)return Et(e,x)}else{var W=wt(e),te=W==ze||W==Pt;if(Yn(e))return sl(e,j);if(W==ut||W==ie||te&&!f){if(x=C||te?{}:_l(e),!j)return C?sp(e,Tf(x,e)):ip(e,Io(x,e))}else{if(!Qe[W])return f?e:{};x=bp(e,W,j)}}h||(h=new dn);var de=h.get(e);if(de)return de;h.set(e,x),ec(e)?e.forEach(function(xe){x.add(Qt(xe,t,a,xe,e,h))}):Zl(e)&&e.forEach(function(xe,Le){x.set(Le,Qt(xe,t,a,Le,e,h))});var me=B?C?Zi:Xi:C?Rt:xt,Pe=z?r:me(e);return Jt(Pe||e,function(xe,Le){Pe&&(Le=xe,xe=e[Le]),Ur(x,Le,Qt(xe,t,a,Le,e,h))}),x}function Rf(e){var t=xt(e);return function(a){return Lo(a,e,t)}}function Lo(e,t,a){var l=a.length;if(e==null)return!l;for(e=Xe(e);l--;){var f=a[l],h=t[f],x=e[f];if(x===r&&!(f in e)||!h(x))return!1}return!0}function Uo(e,t,a){if(typeof e!="function")throw new Xt(u);return Yr(function(){e.apply(r,a)},t)}function Dr(e,t,a,l){var f=-1,h=aa,x=!0,j=e.length,C=[],B=t.length;if(!j)return C;a&&(t=nt(t,Dt(a))),l?(h=bi,x=!1):t.length>=c&&(h=$r,x=!1,t=new tr(t));e:for(;++f<j;){var z=e[f],W=a==null?z:a(z);if(z=l||z!==0?z:0,x&&W===W){for(var te=B;te--;)if(t[te]===W)continue e;C.push(z)}else h(t,W,l)||C.push(z)}return C}var zn=ul(mn),Do=ul(Oi,!0);function kf(e,t){var a=!0;return zn(e,function(l,f,h){return a=!!t(l,f,h),a}),a}function ja(e,t,a){for(var l=-1,f=e.length;++l<f;){var h=e[l],x=t(h);if(x!=null&&(j===r?x===x&&!zt(x):a(x,j)))var j=x,C=h}return C}function $f(e,t,a,l){var f=e.length;for(a=Re(a),a<0&&(a=-a>f?0:f+a),l=l===r||l>f?f:Re(l),l<0&&(l+=f),l=a>l?0:nc(l);a<l;)e[a++]=t;return e}function Bo(e,t){var a=[];return zn(e,function(l,f,h){t(l,f,h)&&a.push(l)}),a}function vt(e,t,a,l,f){var h=-1,x=e.length;for(a||(a=yp),f||(f=[]);++h<x;){var j=e[h];t>0&&a(j)?t>1?vt(j,t-1,a,l,f):Un(f,j):l||(f[f.length]=j)}return f}var Pi=fl(),zo=fl(!0);function mn(e,t){return e&&Pi(e,t,xt)}function Oi(e,t){return e&&zo(e,t,xt)}function Sa(e,t){return Ln(t,function(a){return Tn(e[a])})}function rr(e,t){t=Hn(t,e);for(var a=0,l=t.length;e!=null&&a<l;)e=e[bn(t[a++])];return a&&a==l?e:r}function Wo(e,t,a){var l=t(e);return Ce(e)?l:Un(l,a(e))}function Nt(e){return e==null?e===r?yn:Ze:Qn&&Qn in Xe(e)?hp(e):Ap(e)}function Fi(e,t){return e>t}function Pf(e,t){return e!=null&&Me.call(e,t)}function Of(e,t){return e!=null&&t in Xe(e)}function Ff(e,t,a){return e>=yt(t,a)&&e<gt(t,a)}function Ii(e,t,a){for(var l=a?bi:aa,f=e[0].length,h=e.length,x=h,j=$(h),C=1/0,B=[];x--;){var z=e[x];x&&t&&(z=nt(z,Dt(t))),C=yt(z.length,C),j[x]=!a&&(t||f>=120&&z.length>=120)?new tr(x&&z):r}z=e[0];var W=-1,te=j[0];e:for(;++W<f&&B.length<C;){var de=z[W],me=t?t(de):de;if(de=a||de!==0?de:0,!(te?$r(te,me):l(B,me,a))){for(x=h;--x;){var Pe=j[x];if(!(Pe?$r(Pe,me):l(e[x],me,a)))continue e}te&&te.push(me),B.push(de)}}return B}function If(e,t,a,l){return mn(e,function(f,h,x){t(l,a(f),h,x)}),l}function Br(e,t,a){t=Hn(t,e),e=Tl(e,t);var l=e==null?e:e[bn(tn(t))];return l==null?r:Ut(l,e,a)}function Ho(e){return it(e)&&Nt(e)==ie}function Lf(e){return it(e)&&Nt(e)==ct}function Uf(e){return it(e)&&Nt(e)==ee}function zr(e,t,a,l,f){return e===t?!0:e==null||t==null||!it(e)&&!it(t)?e!==e&&t!==t:Df(e,t,a,l,zr,f)}function Df(e,t,a,l,f,h){var x=Ce(e),j=Ce(t),C=x?ue:wt(e),B=j?ue:wt(t);C=C==ie?ut:C,B=B==ie?ut:B;var z=C==ut,W=B==ut,te=C==B;if(te&&Yn(e)){if(!Yn(t))return!1;x=!0,z=!1}if(te&&!z)return h||(h=new dn),x||Nr(e)?jl(e,t,a,l,f,h):fp(e,t,C,a,l,f,h);if(!(a&T)){var de=z&&Me.call(e,"__wrapped__"),me=W&&Me.call(t,"__wrapped__");if(de||me){var Pe=de?e.value():e,xe=me?t.value():t;return h||(h=new dn),f(Pe,xe,a,l,h)}}return te?(h||(h=new dn),pp(e,t,a,l,f,h)):!1}function Bf(e){return it(e)&&wt(e)==Ie}function Li(e,t,a,l){var f=a.length,h=f,x=!l;if(e==null)return!h;for(e=Xe(e);f--;){var j=a[f];if(x&&j[2]?j[1]!==e[j[0]]:!(j[0]in e))return!1}for(;++f<h;){j=a[f];var C=j[0],B=e[C],z=j[1];if(x&&j[2]){if(B===r&&!(C in e))return!1}else{var W=new dn;if(l)var te=l(B,z,C,e,t,W);if(!(te===r?zr(z,B,T|k,l,W):te))return!1}}return!0}function Go(e){if(!rt(e)||jp(e))return!1;var t=Tn(e)?Du:Ws;return t.test(ir(e))}function zf(e){return it(e)&&Nt(e)==Ke}function Wf(e){return it(e)&&wt(e)==Je}function Hf(e){return it(e)&&Ba(e.length)&&!!et[Nt(e)]}function Yo(e){return typeof e=="function"?e:e==null?kt:typeof e=="object"?Ce(e)?Mo(e[0],e[1]):Vo(e):pc(e)}function Ui(e){if(!Gr(e))return Yu(e);var t=[];for(var a in Xe(e))Me.call(e,a)&&a!="constructor"&&t.push(a);return t}function Gf(e){if(!rt(e))return Cp(e);var t=Gr(e),a=[];for(var l in e)l=="constructor"&&(t||!Me.call(e,l))||a.push(l);return a}function Di(e,t){return e<t}function qo(e,t){var a=-1,l=Tt(e)?$(e.length):[];return zn(e,function(f,h,x){l[++a]=t(f,h,x)}),l}function Vo(e){var t=es(e);return t.length==1&&t[0][2]?Al(t[0][0],t[0][1]):function(a){return a===e||Li(a,e,t)}}function Mo(e,t){return ns(e)&&Cl(t)?Al(bn(e),t):function(a){var l=fs(a,e);return l===r&&l===t?ps(a,e):zr(t,l,T|k)}}function Na(e,t,a,l,f){e!==t&&Pi(t,function(h,x){if(f||(f=new dn),rt(h))Yf(e,t,x,a,Na,l,f);else{var j=l?l(as(e,x),h,x+"",e,t,f):r;j===r&&(j=h),ki(e,x,j)}},Rt)}function Yf(e,t,a,l,f,h,x){var j=as(e,a),C=as(t,a),B=x.get(C);if(B){ki(e,a,B);return}var z=h?h(j,C,a+"",e,t,x):r,W=z===r;if(W){var te=Ce(C),de=!te&&Yn(C),me=!te&&!de&&Nr(C);z=C,te||de||me?Ce(j)?z=j:st(j)?z=Et(j):de?(W=!1,z=sl(C,!0)):me?(W=!1,z=ol(C,!0)):z=[]:qr(C)||sr(C)?(z=j,sr(j)?z=rc(j):(!rt(j)||Tn(j))&&(z=_l(C))):W=!1}W&&(x.set(C,z),f(z,C,l,h,x),x.delete(C)),ki(e,a,z)}function Ko(e,t){var a=e.length;if(a)return t+=t<0?a:0,En(t,a)?e[t]:r}function Jo(e,t,a){t.length?t=nt(t,function(h){return Ce(h)?function(x){return rr(x,h.length===1?h[0]:h)}:h}):t=[kt];var l=-1;t=nt(t,Dt(he()));var f=qo(e,function(h,x,j){var C=nt(t,function(B){return B(h)});return{criteria:C,index:++l,value:h}});return xu(f,function(h,x){return ap(h,x,a)})}function qf(e,t){return Xo(e,t,function(a,l){return ps(e,l)})}function Xo(e,t,a){for(var l=-1,f=t.length,h={};++l<f;){var x=t[l],j=rr(e,x);a(j,x)&&Wr(h,Hn(x,e),j)}return h}function Vf(e){return function(t){return rr(t,e)}}function Bi(e,t,a,l){var f=l?mu:pr,h=-1,x=t.length,j=e;for(e===t&&(t=Et(t)),a&&(j=nt(e,Dt(a)));++h<x;)for(var C=0,B=t[h],z=a?a(B):B;(C=f(j,z,C,l))>-1;)j!==e&&ha.call(j,C,1),ha.call(e,C,1);return e}function Zo(e,t){for(var a=e?t.length:0,l=a-1;a--;){var f=t[a];if(a==l||f!==h){var h=f;En(f)?ha.call(e,f,1):Gi(e,f)}}return e}function zi(e,t){return e+xa($o()*(t-e+1))}function Mf(e,t,a,l){for(var f=-1,h=gt(ma((t-e)/(a||1)),0),x=$(h);h--;)x[l?h:++f]=e,e+=a;return x}function Wi(e,t){var a="";if(!e||t<1||t>ke)return a;do t%2&&(a+=e),t=xa(t/2),t&&(e+=e);while(t);return a}function Fe(e,t){return is(El(e,t,kt),e+"")}function Kf(e){return Fo(_r(e))}function Jf(e,t){var a=_r(e);return Oa(a,nr(t,0,a.length))}function Wr(e,t,a,l){if(!rt(e))return e;t=Hn(t,e);for(var f=-1,h=t.length,x=h-1,j=e;j!=null&&++f<h;){var C=bn(t[f]),B=a;if(C==="__proto__"||C==="constructor"||C==="prototype")return e;if(f!=x){var z=j[C];B=l?l(z,C,j):r,B===r&&(B=rt(z)?z:En(t[f+1])?[]:{})}Ur(j,C,B),j=j[C]}return e}var Qo=ba?function(e,t){return ba.set(e,t),e}:kt,Xf=ga?function(e,t){return ga(e,"toString",{configurable:!0,enumerable:!1,value:gs(t),writable:!0})}:kt;function Zf(e){return Oa(_r(e))}function en(e,t,a){var l=-1,f=e.length;t<0&&(t=-t>f?0:f+t),a=a>f?f:a,a<0&&(a+=f),f=t>a?0:a-t>>>0,t>>>=0;for(var h=$(f);++l<f;)h[l]=e[l+t];return h}function Qf(e,t){var a;return zn(e,function(l,f,h){return a=t(l,f,h),!a}),!!a}function _a(e,t,a){var l=0,f=e==null?l:e.length;if(typeof t=="number"&&t===t&&f<=G){for(;l<f;){var h=l+f>>>1,x=e[h];x!==null&&!zt(x)&&(a?x<=t:x<t)?l=h+1:f=h}return f}return Hi(e,t,kt,a)}function Hi(e,t,a,l){var f=0,h=e==null?0:e.length;if(h===0)return 0;t=a(t);for(var x=t!==t,j=t===null,C=zt(t),B=t===r;f<h;){var z=xa((f+h)/2),W=a(e[z]),te=W!==r,de=W===null,me=W===W,Pe=zt(W);if(x)var xe=l||me;else B?xe=me&&(l||te):j?xe=me&&te&&(l||!de):C?xe=me&&te&&!de&&(l||!Pe):de||Pe?xe=!1:xe=l?W<=t:W<t;xe?f=z+1:h=z}return yt(h,fe)}function el(e,t){for(var a=-1,l=e.length,f=0,h=[];++a<l;){var x=e[a],j=t?t(x):x;if(!a||!un(j,C)){var C=j;h[f++]=x===0?0:x}}return h}function tl(e){return typeof e=="number"?e:zt(e)?D:+e}function Bt(e){if(typeof e=="string")return e;if(Ce(e))return nt(e,Bt)+"";if(zt(e))return Po?Po.call(e):"";var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function Wn(e,t,a){var l=-1,f=aa,h=e.length,x=!0,j=[],C=j;if(a)x=!1,f=bi;else if(h>=c){var B=t?null:dp(e);if(B)return sa(B);x=!1,f=$r,C=new tr}else C=t?[]:j;e:for(;++l<h;){var z=e[l],W=t?t(z):z;if(z=a||z!==0?z:0,x&&W===W){for(var te=C.length;te--;)if(C[te]===W)continue e;t&&C.push(W),j.push(z)}else f(C,W,a)||(C!==j&&C.push(W),j.push(z))}return j}function Gi(e,t){return t=Hn(t,e),e=Tl(e,t),e==null||delete e[bn(tn(t))]}function nl(e,t,a,l){return Wr(e,t,a(rr(e,t)),l)}function Ca(e,t,a,l){for(var f=e.length,h=l?f:-1;(l?h--:++h<f)&&t(e[h],h,e););return a?en(e,l?0:h,l?h+1:f):en(e,l?h+1:0,l?f:h)}function rl(e,t){var a=e;return a instanceof Ue&&(a=a.value()),vi(t,function(l,f){return f.func.apply(f.thisArg,Un([l],f.args))},a)}function Yi(e,t,a){var l=e.length;if(l<2)return l?Wn(e[0]):[];for(var f=-1,h=$(l);++f<l;)for(var x=e[f],j=-1;++j<l;)j!=f&&(h[f]=Dr(h[f]||x,e[j],t,a));return Wn(vt(h,1),t,a)}function al(e,t,a){for(var l=-1,f=e.length,h=t.length,x={};++l<f;){var j=l<h?t[l]:r;a(x,e[l],j)}return x}function qi(e){return st(e)?e:[]}function Vi(e){return typeof e=="function"?e:kt}function Hn(e,t){return Ce(e)?e:ns(e,t)?[e]:Pl(Ve(e))}var ep=Fe;function Gn(e,t,a){var l=e.length;return a=a===r?l:a,!t&&a>=l?e:en(e,t,a)}var il=Bu||function(e){return bt.clearTimeout(e)};function sl(e,t){if(t)return e.slice();var a=e.length,l=Ao?Ao(a):new e.constructor(a);return e.copy(l),l}function Mi(e){var t=new e.constructor(e.byteLength);return new fa(t).set(new fa(e)),t}function tp(e,t){var a=t?Mi(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function np(e){var t=new e.constructor(e.source,_.exec(e));return t.lastIndex=e.lastIndex,t}function rp(e){return Lr?Xe(Lr.call(e)):{}}function ol(e,t){var a=t?Mi(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function ll(e,t){if(e!==t){var a=e!==r,l=e===null,f=e===e,h=zt(e),x=t!==r,j=t===null,C=t===t,B=zt(t);if(!j&&!B&&!h&&e>t||h&&x&&C&&!j&&!B||l&&x&&C||!a&&C||!f)return 1;if(!l&&!h&&!B&&e<t||B&&a&&f&&!l&&!h||j&&a&&f||!x&&f||!C)return-1}return 0}function ap(e,t,a){for(var l=-1,f=e.criteria,h=t.criteria,x=f.length,j=a.length;++l<x;){var C=ll(f[l],h[l]);if(C){if(l>=j)return C;var B=a[l];return C*(B=="desc"?-1:1)}}return e.index-t.index}function cl(e,t,a,l){for(var f=-1,h=e.length,x=a.length,j=-1,C=t.length,B=gt(h-x,0),z=$(C+B),W=!l;++j<C;)z[j]=t[j];for(;++f<x;)(W||f<h)&&(z[a[f]]=e[f]);for(;B--;)z[j++]=e[f++];return z}function dl(e,t,a,l){for(var f=-1,h=e.length,x=-1,j=a.length,C=-1,B=t.length,z=gt(h-j,0),W=$(z+B),te=!l;++f<z;)W[f]=e[f];for(var de=f;++C<B;)W[de+C]=t[C];for(;++x<j;)(te||f<h)&&(W[de+a[x]]=e[f++]);return W}function Et(e,t){var a=-1,l=e.length;for(t||(t=$(l));++a<l;)t[a]=e[a];return t}function xn(e,t,a,l){var f=!a;a||(a={});for(var h=-1,x=t.length;++h<x;){var j=t[h],C=l?l(a[j],e[j],j,a,e):r;C===r&&(C=e[j]),f?_n(a,j,C):Ur(a,j,C)}return a}function ip(e,t){return xn(e,ts(e),t)}function sp(e,t){return xn(e,Sl(e),t)}function Aa(e,t){return function(a,l){var f=Ce(a)?du:Ef,h=t?t():{};return f(a,e,he(l,2),h)}}function wr(e){return Fe(function(t,a){var l=-1,f=a.length,h=f>1?a[f-1]:r,x=f>2?a[2]:r;for(h=e.length>3&&typeof h=="function"?(f--,h):r,x&&_t(a[0],a[1],x)&&(h=f<3?r:h,f=1),t=Xe(t);++l<f;){var j=a[l];j&&e(t,j,l,h)}return t})}function ul(e,t){return function(a,l){if(a==null)return a;if(!Tt(a))return e(a,l);for(var f=a.length,h=t?f:-1,x=Xe(a);(t?h--:++h<f)&&l(x[h],h,x)!==!1;);return a}}function fl(e){return function(t,a,l){for(var f=-1,h=Xe(t),x=l(t),j=x.length;j--;){var C=x[e?j:++f];if(a(h[C],C,h)===!1)break}return t}}function op(e,t,a){var l=t&A,f=Hr(e);function h(){var x=this&&this!==bt&&this instanceof h?f:e;return x.apply(l?a:this,arguments)}return h}function pl(e){return function(t){t=Ve(t);var a=hr(t)?cn(t):r,l=a?a[0]:t.charAt(0),f=a?Gn(a,1).join(""):t.slice(1);return l[e]()+f}}function jr(e){return function(t){return vi(uc(dc(t).replace(Jd,"")),e,"")}}function Hr(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var a=yr(e.prototype),l=e.apply(a,t);return rt(l)?l:a}}function lp(e,t,a){var l=Hr(e);function f(){for(var h=arguments.length,x=$(h),j=h,C=Sr(f);j--;)x[j]=arguments[j];var B=h<3&&x[0]!==C&&x[h-1]!==C?[]:Dn(x,C);if(h-=B.length,h<a)return bl(e,t,Ea,f.placeholder,r,x,B,r,r,a-h);var z=this&&this!==bt&&this instanceof f?l:e;return Ut(z,this,x)}return f}function hl(e){return function(t,a,l){var f=Xe(t);if(!Tt(t)){var h=he(a,3);t=xt(t),a=function(j){return h(f[j],j,f)}}var x=e(t,a,l);return x>-1?f[h?t[x]:x]:r}}function gl(e){return An(function(t){var a=t.length,l=a,f=Zt.prototype.thru;for(e&&t.reverse();l--;){var h=t[l];if(typeof h!="function")throw new Xt(u);if(f&&!x&&$a(h)=="wrapper")var x=new Zt([],!0)}for(l=x?l:a;++l<a;){h=t[l];var j=$a(h),C=j=="wrapper"?Qi(h):r;C&&rs(C[0])&&C[1]==(we|R|ne|be)&&!C[4].length&&C[9]==1?x=x[$a(C[0])].apply(x,C[3]):x=h.length==1&&rs(h)?x[j]():x.thru(h)}return function(){var B=arguments,z=B[0];if(x&&B.length==1&&Ce(z))return x.plant(z).value();for(var W=0,te=a?t[W].apply(this,B):z;++W<a;)te=t[W].call(this,te);return te}})}function Ea(e,t,a,l,f,h,x,j,C,B){var z=t&we,W=t&A,te=t&Y,de=t&(R|M),me=t&ve,Pe=te?r:Hr(e);function xe(){for(var Le=arguments.length,De=$(Le),Wt=Le;Wt--;)De[Wt]=arguments[Wt];if(de)var Ct=Sr(xe),Ht=vu(De,Ct);if(l&&(De=cl(De,l,f,de)),h&&(De=dl(De,h,x,de)),Le-=Ht,de&&Le<B){var ot=Dn(De,Ct);return bl(e,t,Ea,xe.placeholder,a,De,ot,j,C,B-Le)}var fn=W?a:this,kn=te?fn[e]:e;return Le=De.length,j?De=Ep(De,j):me&&Le>1&&De.reverse(),z&&C<Le&&(De.length=C),this&&this!==bt&&this instanceof xe&&(kn=Pe||Hr(kn)),kn.apply(fn,De)}return xe}function ml(e,t){return function(a,l){return If(a,e,t(l),{})}}function Ta(e,t){return function(a,l){var f;if(a===r&&l===r)return t;if(a!==r&&(f=a),l!==r){if(f===r)return l;typeof a=="string"||typeof l=="string"?(a=Bt(a),l=Bt(l)):(a=tl(a),l=tl(l)),f=e(a,l)}return f}}function Ki(e){return An(function(t){return t=nt(t,Dt(he())),Fe(function(a){var l=this;return e(t,function(f){return Ut(f,l,a)})})})}function Ra(e,t){t=t===r?" ":Bt(t);var a=t.length;if(a<2)return a?Wi(t,e):t;var l=Wi(t,ma(e/gr(t)));return hr(t)?Gn(cn(l),0,e).join(""):l.slice(0,e)}function cp(e,t,a,l){var f=t&A,h=Hr(e);function x(){for(var j=-1,C=arguments.length,B=-1,z=l.length,W=$(z+C),te=this&&this!==bt&&this instanceof x?h:e;++B<z;)W[B]=l[B];for(;C--;)W[B++]=arguments[++j];return Ut(te,f?a:this,W)}return x}function xl(e){return function(t,a,l){return l&&typeof l!="number"&&_t(t,a,l)&&(a=l=r),t=Rn(t),a===r?(a=t,t=0):a=Rn(a),l=l===r?t<a?1:-1:Rn(l),Mf(t,a,l,e)}}function ka(e){return function(t,a){return typeof t=="string"&&typeof a=="string"||(t=nn(t),a=nn(a)),e(t,a)}}function bl(e,t,a,l,f,h,x,j,C,B){var z=t&R,W=z?x:r,te=z?r:x,de=z?h:r,me=z?r:h;t|=z?ne:pe,t&=~(z?pe:ne),t&V||(t&=~(A|Y));var Pe=[e,t,f,de,W,me,te,j,C,B],xe=a.apply(r,Pe);return rs(e)&&Rl(xe,Pe),xe.placeholder=l,kl(xe,e,t)}function Ji(e){var t=ht[e];return function(a,l){if(a=nn(a),l=l==null?0:yt(Re(l),292),l&&ko(a)){var f=(Ve(a)+"e").split("e"),h=t(f[0]+"e"+(+f[1]+l));return f=(Ve(h)+"e").split("e"),+(f[0]+"e"+(+f[1]-l))}return t(a)}}var dp=br&&1/sa(new br([,-0]))[1]==Te?function(e){return new br(e)}:bs;function vl(e){return function(t){var a=wt(t);return a==Ie?Ci(t):a==Je?Cu(t):bu(t,e(t))}}function Cn(e,t,a,l,f,h,x,j){var C=t&Y;if(!C&&typeof e!="function")throw new Xt(u);var B=l?l.length:0;if(B||(t&=~(ne|pe),l=f=r),x=x===r?x:gt(Re(x),0),j=j===r?j:Re(j),B-=f?f.length:0,t&pe){var z=l,W=f;l=f=r}var te=C?r:Qi(e),de=[e,t,a,l,f,z,W,h,x,j];if(te&&_p(de,te),e=de[0],t=de[1],a=de[2],l=de[3],f=de[4],j=de[9]=de[9]===r?C?0:e.length:gt(de[9]-B,0),!j&&t&(R|M)&&(t&=~(R|M)),!t||t==A)var me=op(e,t,a);else t==R||t==M?me=lp(e,t,j):(t==ne||t==(A|ne))&&!f.length?me=cp(e,t,a,l):me=Ea.apply(r,de);var Pe=te?Qo:Rl;return kl(Pe(me,de),e,t)}function yl(e,t,a,l){return e===r||un(e,xr[a])&&!Me.call(l,a)?t:e}function wl(e,t,a,l,f,h){return rt(e)&&rt(t)&&(h.set(t,e),Na(e,t,r,wl,h),h.delete(t)),e}function up(e){return qr(e)?r:e}function jl(e,t,a,l,f,h){var x=a&T,j=e.length,C=t.length;if(j!=C&&!(x&&C>j))return!1;var B=h.get(e),z=h.get(t);if(B&&z)return B==t&&z==e;var W=-1,te=!0,de=a&k?new tr:r;for(h.set(e,t),h.set(t,e);++W<j;){var me=e[W],Pe=t[W];if(l)var xe=x?l(Pe,me,W,t,e,h):l(me,Pe,W,e,t,h);if(xe!==r){if(xe)continue;te=!1;break}if(de){if(!yi(t,function(Le,De){if(!$r(de,De)&&(me===Le||f(me,Le,a,l,h)))return de.push(De)})){te=!1;break}}else if(!(me===Pe||f(me,Pe,a,l,h))){te=!1;break}}return h.delete(e),h.delete(t),te}function fp(e,t,a,l,f,h,x){switch(a){case pt:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ct:return!(e.byteLength!=t.byteLength||!h(new fa(e),new fa(t)));case Ge:case ee:case dt:return un(+e,+t);case Ae:return e.name==t.name&&e.message==t.message;case Ke:case ft:return e==t+"";case Ie:var j=Ci;case Je:var C=l&T;if(j||(j=sa),e.size!=t.size&&!C)return!1;var B=x.get(e);if(B)return B==t;l|=k,x.set(e,t);var z=jl(j(e),j(t),l,f,h,x);return x.delete(e),z;case mt:if(Lr)return Lr.call(e)==Lr.call(t)}return!1}function pp(e,t,a,l,f,h){var x=a&T,j=Xi(e),C=j.length,B=Xi(t),z=B.length;if(C!=z&&!x)return!1;for(var W=C;W--;){var te=j[W];if(!(x?te in t:Me.call(t,te)))return!1}var de=h.get(e),me=h.get(t);if(de&&me)return de==t&&me==e;var Pe=!0;h.set(e,t),h.set(t,e);for(var xe=x;++W<C;){te=j[W];var Le=e[te],De=t[te];if(l)var Wt=x?l(De,Le,te,t,e,h):l(Le,De,te,e,t,h);if(!(Wt===r?Le===De||f(Le,De,a,l,h):Wt)){Pe=!1;break}xe||(xe=te=="constructor")}if(Pe&&!xe){var Ct=e.constructor,Ht=t.constructor;Ct!=Ht&&"constructor"in e&&"constructor"in t&&!(typeof Ct=="function"&&Ct instanceof Ct&&typeof Ht=="function"&&Ht instanceof Ht)&&(Pe=!1)}return h.delete(e),h.delete(t),Pe}function An(e){return is(El(e,r,Ll),e+"")}function Xi(e){return Wo(e,xt,ts)}function Zi(e){return Wo(e,Rt,Sl)}var Qi=ba?function(e){return ba.get(e)}:bs;function $a(e){for(var t=e.name+"",a=vr[t],l=Me.call(vr,t)?a.length:0;l--;){var f=a[l],h=f.func;if(h==null||h==e)return f.name}return t}function Sr(e){var t=Me.call(p,"placeholder")?p:e;return t.placeholder}function he(){var e=p.iteratee||ms;return e=e===ms?Yo:e,arguments.length?e(arguments[0],arguments[1]):e}function Pa(e,t){var a=e.__data__;return wp(t)?a[typeof t=="string"?"string":"hash"]:a.map}function es(e){for(var t=xt(e),a=t.length;a--;){var l=t[a],f=e[l];t[a]=[l,f,Cl(f)]}return t}function ar(e,t){var a=Su(e,t);return Go(a)?a:r}function hp(e){var t=Me.call(e,Qn),a=e[Qn];try{e[Qn]=r;var l=!0}catch{}var f=da.call(e);return l&&(t?e[Qn]=a:delete e[Qn]),f}var ts=Ei?function(e){return e==null?[]:(e=Xe(e),Ln(Ei(e),function(t){return To.call(e,t)}))}:vs,Sl=Ei?function(e){for(var t=[];e;)Un(t,ts(e)),e=pa(e);return t}:vs,wt=Nt;(Ti&&wt(new Ti(new ArrayBuffer(1)))!=pt||Or&&wt(new Or)!=Ie||Ri&&wt(Ri.resolve())!=lt||br&&wt(new br)!=Je||Fr&&wt(new Fr)!=Ot)&&(wt=function(e){var t=Nt(e),a=t==ut?e.constructor:r,l=a?ir(a):"";if(l)switch(l){case Ku:return pt;case Ju:return Ie;case Xu:return lt;case Zu:return Je;case Qu:return Ot}return t});function gp(e,t,a){for(var l=-1,f=a.length;++l<f;){var h=a[l],x=h.size;switch(h.type){case"drop":e+=x;break;case"dropRight":t-=x;break;case"take":t=yt(t,e+x);break;case"takeRight":e=gt(e,t-x);break}}return{start:e,end:t}}function mp(e){var t=e.match(L);return t?t[1].split(O):[]}function Nl(e,t,a){t=Hn(t,e);for(var l=-1,f=t.length,h=!1;++l<f;){var x=bn(t[l]);if(!(h=e!=null&&a(e,x)))break;e=e[x]}return h||++l!=f?h:(f=e==null?0:e.length,!!f&&Ba(f)&&En(x,f)&&(Ce(e)||sr(e)))}function xp(e){var t=e.length,a=new e.constructor(t);return t&&typeof e[0]=="string"&&Me.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function _l(e){return typeof e.constructor=="function"&&!Gr(e)?yr(pa(e)):{}}function bp(e,t,a){var l=e.constructor;switch(t){case ct:return Mi(e);case Ge:case ee:return new l(+e);case pt:return tp(e,a);case rn:case At:case Yt:case H:case X:case ce:case je:case Be:case tt:return ol(e,a);case Ie:return new l;case dt:case ft:return new l(e);case Ke:return np(e);case Je:return new l;case mt:return rp(e)}}function vp(e,t){var a=t.length;if(!a)return e;var l=a-1;return t[l]=(a>1?"& ":"")+t[l],t=t.join(a>2?", ":" "),e.replace(b,`{
/* [wrapped with `+t+`] */
`)}function yp(e){return Ce(e)||sr(e)||!!(Ro&&e&&e[Ro])}function En(e,t){var a=typeof e;return t=t??ke,!!t&&(a=="number"||a!="symbol"&&kd.test(e))&&e>-1&&e%1==0&&e<t}function _t(e,t,a){if(!rt(a))return!1;var l=typeof t;return(l=="number"?Tt(a)&&En(t,a.length):l=="string"&&t in a)?un(a[t],e):!1}function ns(e,t){if(Ce(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||zt(e)?!0:Vt.test(e)||!sn.test(e)||t!=null&&e in Xe(t)}function wp(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function rs(e){var t=$a(e),a=p[t];if(typeof a!="function"||!(t in Ue.prototype))return!1;if(e===a)return!0;var l=Qi(a);return!!l&&e===l[0]}function jp(e){return!!Co&&Co in e}var Sp=la?Tn:ys;function Gr(e){var t=e&&e.constructor,a=typeof t=="function"&&t.prototype||xr;return e===a}function Cl(e){return e===e&&!rt(e)}function Al(e,t){return function(a){return a==null?!1:a[e]===t&&(t!==r||e in Xe(a))}}function Np(e){var t=Ua(e,function(l){return a.size===S&&a.clear(),l}),a=t.cache;return t}function _p(e,t){var a=e[1],l=t[1],f=a|l,h=f<(A|Y|we),x=l==we&&a==R||l==we&&a==be&&e[7].length<=t[8]||l==(we|be)&&t[7].length<=t[8]&&a==R;if(!(h||x))return e;l&A&&(e[2]=t[2],f|=a&A?0:V);var j=t[3];if(j){var C=e[3];e[3]=C?cl(C,j,t[4]):j,e[4]=C?Dn(e[3],y):t[4]}return j=t[5],j&&(C=e[5],e[5]=C?dl(C,j,t[6]):j,e[6]=C?Dn(e[5],y):t[6]),j=t[7],j&&(e[7]=j),l&we&&(e[8]=e[8]==null?t[8]:yt(e[8],t[8])),e[9]==null&&(e[9]=t[9]),e[0]=t[0],e[1]=f,e}function Cp(e){var t=[];if(e!=null)for(var a in Xe(e))t.push(a);return t}function Ap(e){return da.call(e)}function El(e,t,a){return t=gt(t===r?e.length-1:t,0),function(){for(var l=arguments,f=-1,h=gt(l.length-t,0),x=$(h);++f<h;)x[f]=l[t+f];f=-1;for(var j=$(t+1);++f<t;)j[f]=l[f];return j[t]=a(x),Ut(e,this,j)}}function Tl(e,t){return t.length<2?e:rr(e,en(t,0,-1))}function Ep(e,t){for(var a=e.length,l=yt(t.length,a),f=Et(e);l--;){var h=t[l];e[l]=En(h,a)?f[h]:r}return e}function as(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var Rl=$l(Qo),Yr=Wu||function(e,t){return bt.setTimeout(e,t)},is=$l(Xf);function kl(e,t,a){var l=t+"";return is(e,vp(l,Tp(mp(l),a)))}function $l(e){var t=0,a=0;return function(){var l=qu(),f=se-(l-a);if(a=l,f>0){if(++t>=Q)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Oa(e,t){var a=-1,l=e.length,f=l-1;for(t=t===r?l:t;++a<t;){var h=zi(a,f),x=e[h];e[h]=e[a],e[a]=x}return e.length=t,e}var Pl=Np(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(on,function(a,l,f,h){t.push(f?h.replace(_e,"$1"):l||a)}),t});function bn(e){if(typeof e=="string"||zt(e))return e;var t=e+"";return t=="0"&&1/e==-Te?"-0":t}function ir(e){if(e!=null){try{return ca.call(e)}catch{}try{return e+""}catch{}}return""}function Tp(e,t){return Jt(re,function(a){var l="_."+a[0];t&a[1]&&!aa(e,l)&&e.push(l)}),e.sort()}function Ol(e){if(e instanceof Ue)return e.clone();var t=new Zt(e.__wrapped__,e.__chain__);return t.__actions__=Et(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Rp(e,t,a){(a?_t(e,t,a):t===r)?t=1:t=gt(Re(t),0);var l=e==null?0:e.length;if(!l||t<1)return[];for(var f=0,h=0,x=$(ma(l/t));f<l;)x[h++]=en(e,f,f+=t);return x}function kp(e){for(var t=-1,a=e==null?0:e.length,l=0,f=[];++t<a;){var h=e[t];h&&(f[l++]=h)}return f}function $p(){var e=arguments.length;if(!e)return[];for(var t=$(e-1),a=arguments[0],l=e;l--;)t[l-1]=arguments[l];return Un(Ce(a)?Et(a):[a],vt(t,1))}var Pp=Fe(function(e,t){return st(e)?Dr(e,vt(t,1,st,!0)):[]}),Op=Fe(function(e,t){var a=tn(t);return st(a)&&(a=r),st(e)?Dr(e,vt(t,1,st,!0),he(a,2)):[]}),Fp=Fe(function(e,t){var a=tn(t);return st(a)&&(a=r),st(e)?Dr(e,vt(t,1,st,!0),r,a):[]});function Ip(e,t,a){var l=e==null?0:e.length;return l?(t=a||t===r?1:Re(t),en(e,t<0?0:t,l)):[]}function Lp(e,t,a){var l=e==null?0:e.length;return l?(t=a||t===r?1:Re(t),t=l-t,en(e,0,t<0?0:t)):[]}function Up(e,t){return e&&e.length?Ca(e,he(t,3),!0,!0):[]}function Dp(e,t){return e&&e.length?Ca(e,he(t,3),!0):[]}function Bp(e,t,a,l){var f=e==null?0:e.length;return f?(a&&typeof a!="number"&&_t(e,t,a)&&(a=0,l=f),$f(e,t,a,l)):[]}function Fl(e,t,a){var l=e==null?0:e.length;if(!l)return-1;var f=a==null?0:Re(a);return f<0&&(f=gt(l+f,0)),ia(e,he(t,3),f)}function Il(e,t,a){var l=e==null?0:e.length;if(!l)return-1;var f=l-1;return a!==r&&(f=Re(a),f=a<0?gt(l+f,0):yt(f,l-1)),ia(e,he(t,3),f,!0)}function Ll(e){var t=e==null?0:e.length;return t?vt(e,1):[]}function zp(e){var t=e==null?0:e.length;return t?vt(e,Te):[]}function Wp(e,t){var a=e==null?0:e.length;return a?(t=t===r?1:Re(t),vt(e,t)):[]}function Hp(e){for(var t=-1,a=e==null?0:e.length,l={};++t<a;){var f=e[t];l[f[0]]=f[1]}return l}function Ul(e){return e&&e.length?e[0]:r}function Gp(e,t,a){var l=e==null?0:e.length;if(!l)return-1;var f=a==null?0:Re(a);return f<0&&(f=gt(l+f,0)),pr(e,t,f)}function Yp(e){var t=e==null?0:e.length;return t?en(e,0,-1):[]}var qp=Fe(function(e){var t=nt(e,qi);return t.length&&t[0]===e[0]?Ii(t):[]}),Vp=Fe(function(e){var t=tn(e),a=nt(e,qi);return t===tn(a)?t=r:a.pop(),a.length&&a[0]===e[0]?Ii(a,he(t,2)):[]}),Mp=Fe(function(e){var t=tn(e),a=nt(e,qi);return t=typeof t=="function"?t:r,t&&a.pop(),a.length&&a[0]===e[0]?Ii(a,r,t):[]});function Kp(e,t){return e==null?"":Gu.call(e,t)}function tn(e){var t=e==null?0:e.length;return t?e[t-1]:r}function Jp(e,t,a){var l=e==null?0:e.length;if(!l)return-1;var f=l;return a!==r&&(f=Re(a),f=f<0?gt(l+f,0):yt(f,l-1)),t===t?Eu(e,t,f):ia(e,bo,f,!0)}function Xp(e,t){return e&&e.length?Ko(e,Re(t)):r}var Zp=Fe(Dl);function Dl(e,t){return e&&e.length&&t&&t.length?Bi(e,t):e}function Qp(e,t,a){return e&&e.length&&t&&t.length?Bi(e,t,he(a,2)):e}function eh(e,t,a){return e&&e.length&&t&&t.length?Bi(e,t,r,a):e}var th=An(function(e,t){var a=e==null?0:e.length,l=$i(e,t);return Zo(e,nt(t,function(f){return En(f,a)?+f:f}).sort(ll)),l});function nh(e,t){var a=[];if(!(e&&e.length))return a;var l=-1,f=[],h=e.length;for(t=he(t,3);++l<h;){var x=e[l];t(x,l,e)&&(a.push(x),f.push(l))}return Zo(e,f),a}function ss(e){return e==null?e:Mu.call(e)}function rh(e,t,a){var l=e==null?0:e.length;return l?(a&&typeof a!="number"&&_t(e,t,a)?(t=0,a=l):(t=t==null?0:Re(t),a=a===r?l:Re(a)),en(e,t,a)):[]}function ah(e,t){return _a(e,t)}function ih(e,t,a){return Hi(e,t,he(a,2))}function sh(e,t){var a=e==null?0:e.length;if(a){var l=_a(e,t);if(l<a&&un(e[l],t))return l}return-1}function oh(e,t){return _a(e,t,!0)}function lh(e,t,a){return Hi(e,t,he(a,2),!0)}function ch(e,t){var a=e==null?0:e.length;if(a){var l=_a(e,t,!0)-1;if(un(e[l],t))return l}return-1}function dh(e){return e&&e.length?el(e):[]}function uh(e,t){return e&&e.length?el(e,he(t,2)):[]}function fh(e){var t=e==null?0:e.length;return t?en(e,1,t):[]}function ph(e,t,a){return e&&e.length?(t=a||t===r?1:Re(t),en(e,0,t<0?0:t)):[]}function hh(e,t,a){var l=e==null?0:e.length;return l?(t=a||t===r?1:Re(t),t=l-t,en(e,t<0?0:t,l)):[]}function gh(e,t){return e&&e.length?Ca(e,he(t,3),!1,!0):[]}function mh(e,t){return e&&e.length?Ca(e,he(t,3)):[]}var xh=Fe(function(e){return Wn(vt(e,1,st,!0))}),bh=Fe(function(e){var t=tn(e);return st(t)&&(t=r),Wn(vt(e,1,st,!0),he(t,2))}),vh=Fe(function(e){var t=tn(e);return t=typeof t=="function"?t:r,Wn(vt(e,1,st,!0),r,t)});function yh(e){return e&&e.length?Wn(e):[]}function wh(e,t){return e&&e.length?Wn(e,he(t,2)):[]}function jh(e,t){return t=typeof t=="function"?t:r,e&&e.length?Wn(e,r,t):[]}function os(e){if(!(e&&e.length))return[];var t=0;return e=Ln(e,function(a){if(st(a))return t=gt(a.length,t),!0}),Ni(t,function(a){return nt(e,wi(a))})}function Bl(e,t){if(!(e&&e.length))return[];var a=os(e);return t==null?a:nt(a,function(l){return Ut(t,r,l)})}var Sh=Fe(function(e,t){return st(e)?Dr(e,t):[]}),Nh=Fe(function(e){return Yi(Ln(e,st))}),_h=Fe(function(e){var t=tn(e);return st(t)&&(t=r),Yi(Ln(e,st),he(t,2))}),Ch=Fe(function(e){var t=tn(e);return t=typeof t=="function"?t:r,Yi(Ln(e,st),r,t)}),Ah=Fe(os);function Eh(e,t){return al(e||[],t||[],Ur)}function Th(e,t){return al(e||[],t||[],Wr)}var Rh=Fe(function(e){var t=e.length,a=t>1?e[t-1]:r;return a=typeof a=="function"?(e.pop(),a):r,Bl(e,a)});function zl(e){var t=p(e);return t.__chain__=!0,t}function kh(e,t){return t(e),e}function Fa(e,t){return t(e)}var $h=An(function(e){var t=e.length,a=t?e[0]:0,l=this.__wrapped__,f=function(h){return $i(h,e)};return t>1||this.__actions__.length||!(l instanceof Ue)||!En(a)?this.thru(f):(l=l.slice(a,+a+(t?1:0)),l.__actions__.push({func:Fa,args:[f],thisArg:r}),new Zt(l,this.__chain__).thru(function(h){return t&&!h.length&&h.push(r),h}))});function Ph(){return zl(this)}function Oh(){return new Zt(this.value(),this.__chain__)}function Fh(){this.__values__===r&&(this.__values__=tc(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}}function Ih(){return this}function Lh(e){for(var t,a=this;a instanceof ya;){var l=Ol(a);l.__index__=0,l.__values__=r,t?f.__wrapped__=l:t=l;var f=l;a=a.__wrapped__}return f.__wrapped__=e,t}function Uh(){var e=this.__wrapped__;if(e instanceof Ue){var t=e;return this.__actions__.length&&(t=new Ue(this)),t=t.reverse(),t.__actions__.push({func:Fa,args:[ss],thisArg:r}),new Zt(t,this.__chain__)}return this.thru(ss)}function Dh(){return rl(this.__wrapped__,this.__actions__)}var Bh=Aa(function(e,t,a){Me.call(e,a)?++e[a]:_n(e,a,1)});function zh(e,t,a){var l=Ce(e)?mo:kf;return a&&_t(e,t,a)&&(t=r),l(e,he(t,3))}function Wh(e,t){var a=Ce(e)?Ln:Bo;return a(e,he(t,3))}var Hh=hl(Fl),Gh=hl(Il);function Yh(e,t){return vt(Ia(e,t),1)}function qh(e,t){return vt(Ia(e,t),Te)}function Vh(e,t,a){return a=a===r?1:Re(a),vt(Ia(e,t),a)}function Wl(e,t){var a=Ce(e)?Jt:zn;return a(e,he(t,3))}function Hl(e,t){var a=Ce(e)?uu:Do;return a(e,he(t,3))}var Mh=Aa(function(e,t,a){Me.call(e,a)?e[a].push(t):_n(e,a,[t])});function Kh(e,t,a,l){e=Tt(e)?e:_r(e),a=a&&!l?Re(a):0;var f=e.length;return a<0&&(a=gt(f+a,0)),za(e)?a<=f&&e.indexOf(t,a)>-1:!!f&&pr(e,t,a)>-1}var Jh=Fe(function(e,t,a){var l=-1,f=typeof t=="function",h=Tt(e)?$(e.length):[];return zn(e,function(x){h[++l]=f?Ut(t,x,a):Br(x,t,a)}),h}),Xh=Aa(function(e,t,a){_n(e,a,t)});function Ia(e,t){var a=Ce(e)?nt:qo;return a(e,he(t,3))}function Zh(e,t,a,l){return e==null?[]:(Ce(t)||(t=t==null?[]:[t]),a=l?r:a,Ce(a)||(a=a==null?[]:[a]),Jo(e,t,a))}var Qh=Aa(function(e,t,a){e[a?0:1].push(t)},function(){return[[],[]]});function eg(e,t,a){var l=Ce(e)?vi:yo,f=arguments.length<3;return l(e,he(t,4),a,f,zn)}function tg(e,t,a){var l=Ce(e)?fu:yo,f=arguments.length<3;return l(e,he(t,4),a,f,Do)}function ng(e,t){var a=Ce(e)?Ln:Bo;return a(e,Da(he(t,3)))}function rg(e){var t=Ce(e)?Fo:Kf;return t(e)}function ag(e,t,a){(a?_t(e,t,a):t===r)?t=1:t=Re(t);var l=Ce(e)?Cf:Jf;return l(e,t)}function ig(e){var t=Ce(e)?Af:Zf;return t(e)}function sg(e){if(e==null)return 0;if(Tt(e))return za(e)?gr(e):e.length;var t=wt(e);return t==Ie||t==Je?e.size:Ui(e).length}function og(e,t,a){var l=Ce(e)?yi:Qf;return a&&_t(e,t,a)&&(t=r),l(e,he(t,3))}var lg=Fe(function(e,t){if(e==null)return[];var a=t.length;return a>1&&_t(e,t[0],t[1])?t=[]:a>2&&_t(t[0],t[1],t[2])&&(t=[t[0]]),Jo(e,vt(t,1),[])}),La=zu||function(){return bt.Date.now()};function cg(e,t){if(typeof t!="function")throw new Xt(u);return e=Re(e),function(){if(--e<1)return t.apply(this,arguments)}}function Gl(e,t,a){return t=a?r:t,t=e&&t==null?e.length:t,Cn(e,we,r,r,r,r,t)}function Yl(e,t){var a;if(typeof t!="function")throw new Xt(u);return e=Re(e),function(){return--e>0&&(a=t.apply(this,arguments)),e<=1&&(t=r),a}}var ls=Fe(function(e,t,a){var l=A;if(a.length){var f=Dn(a,Sr(ls));l|=ne}return Cn(e,l,t,a,f)}),ql=Fe(function(e,t,a){var l=A|Y;if(a.length){var f=Dn(a,Sr(ql));l|=ne}return Cn(t,l,e,a,f)});function Vl(e,t,a){t=a?r:t;var l=Cn(e,R,r,r,r,r,r,t);return l.placeholder=Vl.placeholder,l}function Ml(e,t,a){t=a?r:t;var l=Cn(e,M,r,r,r,r,r,t);return l.placeholder=Ml.placeholder,l}function Kl(e,t,a){var l,f,h,x,j,C,B=0,z=!1,W=!1,te=!0;if(typeof e!="function")throw new Xt(u);t=nn(t)||0,rt(a)&&(z=!!a.leading,W="maxWait"in a,h=W?gt(nn(a.maxWait)||0,t):h,te="trailing"in a?!!a.trailing:te);function de(ot){var fn=l,kn=f;return l=f=r,B=ot,x=e.apply(kn,fn),x}function me(ot){return B=ot,j=Yr(Le,t),z?de(ot):x}function Pe(ot){var fn=ot-C,kn=ot-B,hc=t-fn;return W?yt(hc,h-kn):hc}function xe(ot){var fn=ot-C,kn=ot-B;return C===r||fn>=t||fn<0||W&&kn>=h}function Le(){var ot=La();if(xe(ot))return De(ot);j=Yr(Le,Pe(ot))}function De(ot){return j=r,te&&l?de(ot):(l=f=r,x)}function Wt(){j!==r&&il(j),B=0,l=C=f=j=r}function Ct(){return j===r?x:De(La())}function Ht(){var ot=La(),fn=xe(ot);if(l=arguments,f=this,C=ot,fn){if(j===r)return me(C);if(W)return il(j),j=Yr(Le,t),de(C)}return j===r&&(j=Yr(Le,t)),x}return Ht.cancel=Wt,Ht.flush=Ct,Ht}var dg=Fe(function(e,t){return Uo(e,1,t)}),ug=Fe(function(e,t,a){return Uo(e,nn(t)||0,a)});function fg(e){return Cn(e,ve)}function Ua(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new Xt(u);var a=function(){var l=arguments,f=t?t.apply(this,l):l[0],h=a.cache;if(h.has(f))return h.get(f);var x=e.apply(this,l);return a.cache=h.set(f,x)||h,x};return a.cache=new(Ua.Cache||Nn),a}Ua.Cache=Nn;function Da(e){if(typeof e!="function")throw new Xt(u);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function pg(e){return Yl(2,e)}var hg=ep(function(e,t){t=t.length==1&&Ce(t[0])?nt(t[0],Dt(he())):nt(vt(t,1),Dt(he()));var a=t.length;return Fe(function(l){for(var f=-1,h=yt(l.length,a);++f<h;)l[f]=t[f].call(this,l[f]);return Ut(e,this,l)})}),cs=Fe(function(e,t){var a=Dn(t,Sr(cs));return Cn(e,ne,r,t,a)}),Jl=Fe(function(e,t){var a=Dn(t,Sr(Jl));return Cn(e,pe,r,t,a)}),gg=An(function(e,t){return Cn(e,be,r,r,r,t)});function mg(e,t){if(typeof e!="function")throw new Xt(u);return t=t===r?t:Re(t),Fe(e,t)}function xg(e,t){if(typeof e!="function")throw new Xt(u);return t=t==null?0:gt(Re(t),0),Fe(function(a){var l=a[t],f=Gn(a,0,t);return l&&Un(f,l),Ut(e,this,f)})}function bg(e,t,a){var l=!0,f=!0;if(typeof e!="function")throw new Xt(u);return rt(a)&&(l="leading"in a?!!a.leading:l,f="trailing"in a?!!a.trailing:f),Kl(e,t,{leading:l,maxWait:t,trailing:f})}function vg(e){return Gl(e,1)}function yg(e,t){return cs(Vi(t),e)}function wg(){if(!arguments.length)return[];var e=arguments[0];return Ce(e)?e:[e]}function jg(e){return Qt(e,K)}function Sg(e,t){return t=typeof t=="function"?t:r,Qt(e,K,t)}function Ng(e){return Qt(e,w|K)}function _g(e,t){return t=typeof t=="function"?t:r,Qt(e,w|K,t)}function Cg(e,t){return t==null||Lo(e,t,xt(t))}function un(e,t){return e===t||e!==e&&t!==t}var Ag=ka(Fi),Eg=ka(function(e,t){return e>=t}),sr=Ho(function(){return arguments}())?Ho:function(e){return it(e)&&Me.call(e,"callee")&&!To.call(e,"callee")},Ce=$.isArray,Tg=co?Dt(co):Lf;function Tt(e){return e!=null&&Ba(e.length)&&!Tn(e)}function st(e){return it(e)&&Tt(e)}function Rg(e){return e===!0||e===!1||it(e)&&Nt(e)==Ge}var Yn=Hu||ys,kg=uo?Dt(uo):Uf;function $g(e){return it(e)&&e.nodeType===1&&!qr(e)}function Pg(e){if(e==null)return!0;if(Tt(e)&&(Ce(e)||typeof e=="string"||typeof e.splice=="function"||Yn(e)||Nr(e)||sr(e)))return!e.length;var t=wt(e);if(t==Ie||t==Je)return!e.size;if(Gr(e))return!Ui(e).length;for(var a in e)if(Me.call(e,a))return!1;return!0}function Og(e,t){return zr(e,t)}function Fg(e,t,a){a=typeof a=="function"?a:r;var l=a?a(e,t):r;return l===r?zr(e,t,r,a):!!l}function ds(e){if(!it(e))return!1;var t=Nt(e);return t==Ae||t==J||typeof e.message=="string"&&typeof e.name=="string"&&!qr(e)}function Ig(e){return typeof e=="number"&&ko(e)}function Tn(e){if(!rt(e))return!1;var t=Nt(e);return t==ze||t==Pt||t==$e||t==On}function Xl(e){return typeof e=="number"&&e==Re(e)}function Ba(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ke}function rt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function it(e){return e!=null&&typeof e=="object"}var Zl=fo?Dt(fo):Bf;function Lg(e,t){return e===t||Li(e,t,es(t))}function Ug(e,t,a){return a=typeof a=="function"?a:r,Li(e,t,es(t),a)}function Dg(e){return Ql(e)&&e!=+e}function Bg(e){if(Sp(e))throw new Se(d);return Go(e)}function zg(e){return e===null}function Wg(e){return e==null}function Ql(e){return typeof e=="number"||it(e)&&Nt(e)==dt}function qr(e){if(!it(e)||Nt(e)!=ut)return!1;var t=pa(e);if(t===null)return!0;var a=Me.call(t,"constructor")&&t.constructor;return typeof a=="function"&&a instanceof a&&ca.call(a)==Lu}var us=po?Dt(po):zf;function Hg(e){return Xl(e)&&e>=-ke&&e<=ke}var ec=ho?Dt(ho):Wf;function za(e){return typeof e=="string"||!Ce(e)&&it(e)&&Nt(e)==ft}function zt(e){return typeof e=="symbol"||it(e)&&Nt(e)==mt}var Nr=go?Dt(go):Hf;function Gg(e){return e===r}function Yg(e){return it(e)&&wt(e)==Ot}function qg(e){return it(e)&&Nt(e)==gn}var Vg=ka(Di),Mg=ka(function(e,t){return e<=t});function tc(e){if(!e)return[];if(Tt(e))return za(e)?cn(e):Et(e);if(Pr&&e[Pr])return _u(e[Pr]());var t=wt(e),a=t==Ie?Ci:t==Je?sa:_r;return a(e)}function Rn(e){if(!e)return e===0?e:0;if(e=nn(e),e===Te||e===-Te){var t=e<0?-1:1;return t*Ne}return e===e?e:0}function Re(e){var t=Rn(e),a=t%1;return t===t?a?t-a:t:0}function nc(e){return e?nr(Re(e),0,le):0}function nn(e){if(typeof e=="number")return e;if(zt(e))return D;if(rt(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=rt(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=wo(e);var a=ln.test(e);return a||di.test(e)?lu(e.slice(2),a?2:8):Lt.test(e)?D:+e}function rc(e){return xn(e,Rt(e))}function Kg(e){return e?nr(Re(e),-ke,ke):e===0?e:0}function Ve(e){return e==null?"":Bt(e)}var Jg=wr(function(e,t){if(Gr(t)||Tt(t)){xn(t,xt(t),e);return}for(var a in t)Me.call(t,a)&&Ur(e,a,t[a])}),ac=wr(function(e,t){xn(t,Rt(t),e)}),Wa=wr(function(e,t,a,l){xn(t,Rt(t),e,l)}),Xg=wr(function(e,t,a,l){xn(t,xt(t),e,l)}),Zg=An($i);function Qg(e,t){var a=yr(e);return t==null?a:Io(a,t)}var e0=Fe(function(e,t){e=Xe(e);var a=-1,l=t.length,f=l>2?t[2]:r;for(f&&_t(t[0],t[1],f)&&(l=1);++a<l;)for(var h=t[a],x=Rt(h),j=-1,C=x.length;++j<C;){var B=x[j],z=e[B];(z===r||un(z,xr[B])&&!Me.call(e,B))&&(e[B]=h[B])}return e}),t0=Fe(function(e){return e.push(r,wl),Ut(ic,r,e)});function n0(e,t){return xo(e,he(t,3),mn)}function r0(e,t){return xo(e,he(t,3),Oi)}function a0(e,t){return e==null?e:Pi(e,he(t,3),Rt)}function i0(e,t){return e==null?e:zo(e,he(t,3),Rt)}function s0(e,t){return e&&mn(e,he(t,3))}function o0(e,t){return e&&Oi(e,he(t,3))}function l0(e){return e==null?[]:Sa(e,xt(e))}function c0(e){return e==null?[]:Sa(e,Rt(e))}function fs(e,t,a){var l=e==null?r:rr(e,t);return l===r?a:l}function d0(e,t){return e!=null&&Nl(e,t,Pf)}function ps(e,t){return e!=null&&Nl(e,t,Of)}var u0=ml(function(e,t,a){t!=null&&typeof t.toString!="function"&&(t=da.call(t)),e[t]=a},gs(kt)),f0=ml(function(e,t,a){t!=null&&typeof t.toString!="function"&&(t=da.call(t)),Me.call(e,t)?e[t].push(a):e[t]=[a]},he),p0=Fe(Br);function xt(e){return Tt(e)?Oo(e):Ui(e)}function Rt(e){return Tt(e)?Oo(e,!0):Gf(e)}function h0(e,t){var a={};return t=he(t,3),mn(e,function(l,f,h){_n(a,t(l,f,h),l)}),a}function g0(e,t){var a={};return t=he(t,3),mn(e,function(l,f,h){_n(a,f,t(l,f,h))}),a}var m0=wr(function(e,t,a){Na(e,t,a)}),ic=wr(function(e,t,a,l){Na(e,t,a,l)}),x0=An(function(e,t){var a={};if(e==null)return a;var l=!1;t=nt(t,function(h){return h=Hn(h,e),l||(l=h.length>1),h}),xn(e,Zi(e),a),l&&(a=Qt(a,w|I|K,up));for(var f=t.length;f--;)Gi(a,t[f]);return a});function b0(e,t){return sc(e,Da(he(t)))}var v0=An(function(e,t){return e==null?{}:qf(e,t)});function sc(e,t){if(e==null)return{};var a=nt(Zi(e),function(l){return[l]});return t=he(t),Xo(e,a,function(l,f){return t(l,f[0])})}function y0(e,t,a){t=Hn(t,e);var l=-1,f=t.length;for(f||(f=1,e=r);++l<f;){var h=e==null?r:e[bn(t[l])];h===r&&(l=f,h=a),e=Tn(h)?h.call(e):h}return e}function w0(e,t,a){return e==null?e:Wr(e,t,a)}function j0(e,t,a,l){return l=typeof l=="function"?l:r,e==null?e:Wr(e,t,a,l)}var oc=vl(xt),lc=vl(Rt);function S0(e,t,a){var l=Ce(e),f=l||Yn(e)||Nr(e);if(t=he(t,4),a==null){var h=e&&e.constructor;f?a=l?new h:[]:rt(e)?a=Tn(h)?yr(pa(e)):{}:a={}}return(f?Jt:mn)(e,function(x,j,C){return t(a,x,j,C)}),a}function N0(e,t){return e==null?!0:Gi(e,t)}function _0(e,t,a){return e==null?e:nl(e,t,Vi(a))}function C0(e,t,a,l){return l=typeof l=="function"?l:r,e==null?e:nl(e,t,Vi(a),l)}function _r(e){return e==null?[]:_i(e,xt(e))}function A0(e){return e==null?[]:_i(e,Rt(e))}function E0(e,t,a){return a===r&&(a=t,t=r),a!==r&&(a=nn(a),a=a===a?a:0),t!==r&&(t=nn(t),t=t===t?t:0),nr(nn(e),t,a)}function T0(e,t,a){return t=Rn(t),a===r?(a=t,t=0):a=Rn(a),e=nn(e),Ff(e,t,a)}function R0(e,t,a){if(a&&typeof a!="boolean"&&_t(e,t,a)&&(t=a=r),a===r&&(typeof t=="boolean"?(a=t,t=r):typeof e=="boolean"&&(a=e,e=r)),e===r&&t===r?(e=0,t=1):(e=Rn(e),t===r?(t=e,e=0):t=Rn(t)),e>t){var l=e;e=t,t=l}if(a||e%1||t%1){var f=$o();return yt(e+f*(t-e+ou("1e-"+((f+"").length-1))),t)}return zi(e,t)}var k0=jr(function(e,t,a){return t=t.toLowerCase(),e+(a?cc(t):t)});function cc(e){return hs(Ve(e).toLowerCase())}function dc(e){return e=Ve(e),e&&e.replace($d,yu).replace(Xd,"")}function $0(e,t,a){e=Ve(e),t=Bt(t);var l=e.length;a=a===r?l:nr(Re(a),0,l);var f=a;return a-=t.length,a>=0&&e.slice(a,f)==t}function P0(e){return e=Ve(e),e&&wn.test(e)?e.replace(an,wu):e}function O0(e){return e=Ve(e),e&&Xn.test(e)?e.replace(Mt,"\\$&"):e}var F0=jr(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}),I0=jr(function(e,t,a){return e+(a?" ":"")+t.toLowerCase()}),L0=pl("toLowerCase");function U0(e,t,a){e=Ve(e),t=Re(t);var l=t?gr(e):0;if(!t||l>=t)return e;var f=(t-l)/2;return Ra(xa(f),a)+e+Ra(ma(f),a)}function D0(e,t,a){e=Ve(e),t=Re(t);var l=t?gr(e):0;return t&&l<t?e+Ra(t-l,a):e}function B0(e,t,a){e=Ve(e),t=Re(t);var l=t?gr(e):0;return t&&l<t?Ra(t-l,a)+e:e}function z0(e,t,a){return a||t==null?t=0:t&&(t=+t),Vu(Ve(e).replace(jn,""),t||0)}function W0(e,t,a){return(a?_t(e,t,a):t===r)?t=1:t=Re(t),Wi(Ve(e),t)}function H0(){var e=arguments,t=Ve(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var G0=jr(function(e,t,a){return e+(a?"_":"")+t.toLowerCase()});function Y0(e,t,a){return a&&typeof a!="number"&&_t(e,t,a)&&(t=a=r),a=a===r?le:a>>>0,a?(e=Ve(e),e&&(typeof t=="string"||t!=null&&!us(t))&&(t=Bt(t),!t&&hr(e))?Gn(cn(e),0,a):e.split(t,a)):[]}var q0=jr(function(e,t,a){return e+(a?" ":"")+hs(t)});function V0(e,t,a){return e=Ve(e),a=a==null?0:nr(Re(a),0,e.length),t=Bt(t),e.slice(a,a+t.length)==t}function M0(e,t,a){var l=p.templateSettings;a&&_t(e,t,a)&&(t=r),e=Ve(e),t=Wa({},t,l,yl);var f=Wa({},t.imports,l.imports,yl),h=xt(f),x=_i(f,h),j,C,B=0,z=t.interpolate||ta,W="__p += '",te=Ai((t.escape||ta).source+"|"+z.source+"|"+(z===In?Ye:ta).source+"|"+(t.evaluate||ta).source+"|$","g"),de="//# sourceURL="+(Me.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++nu+"]")+`
`;e.replace(te,function(xe,Le,De,Wt,Ct,Ht){return De||(De=Wt),W+=e.slice(B,Ht).replace(Pd,ju),Le&&(j=!0,W+=`' +
__e(`+Le+`) +
'`),Ct&&(C=!0,W+=`';
`+Ct+`;
__p += '`),De&&(W+=`' +
((__t = (`+De+`)) == null ? '' : __t) +
'`),B=Ht+xe.length,xe}),W+=`';
`;var me=Me.call(t,"variable")&&t.variable;if(!me)W=`with (obj) {
`+W+`
}
`;else if(ye.test(me))throw new Se(m);W=(C?W.replace(We,""):W).replace(He,"$1").replace(Ft,"$1;"),W="function("+(me||"obj")+`) {
`+(me?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(j?", __e = _.escape":"")+(C?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+W+`return __p
}`;var Pe=fc(function(){return qe(h,de+"return "+W).apply(r,x)});if(Pe.source=W,ds(Pe))throw Pe;return Pe}function K0(e){return Ve(e).toLowerCase()}function J0(e){return Ve(e).toUpperCase()}function X0(e,t,a){if(e=Ve(e),e&&(a||t===r))return wo(e);if(!e||!(t=Bt(t)))return e;var l=cn(e),f=cn(t),h=jo(l,f),x=So(l,f)+1;return Gn(l,h,x).join("")}function Z0(e,t,a){if(e=Ve(e),e&&(a||t===r))return e.slice(0,_o(e)+1);if(!e||!(t=Bt(t)))return e;var l=cn(e),f=So(l,cn(t))+1;return Gn(l,0,f).join("")}function Q0(e,t,a){if(e=Ve(e),e&&(a||t===r))return e.replace(jn,"");if(!e||!(t=Bt(t)))return e;var l=cn(e),f=jo(l,cn(t));return Gn(l,f).join("")}function em(e,t){var a=Oe,l=E;if(rt(t)){var f="separator"in t?t.separator:f;a="length"in t?Re(t.length):a,l="omission"in t?Bt(t.omission):l}e=Ve(e);var h=e.length;if(hr(e)){var x=cn(e);h=x.length}if(a>=h)return e;var j=a-gr(l);if(j<1)return l;var C=x?Gn(x,0,j).join(""):e.slice(0,j);if(f===r)return C+l;if(x&&(j+=C.length-j),us(f)){if(e.slice(j).search(f)){var B,z=C;for(f.global||(f=Ai(f.source,Ve(_.exec(f))+"g")),f.lastIndex=0;B=f.exec(z);)var W=B.index;C=C.slice(0,W===r?j:W)}}else if(e.indexOf(Bt(f),j)!=j){var te=C.lastIndexOf(f);te>-1&&(C=C.slice(0,te))}return C+l}function tm(e){return e=Ve(e),e&&qt.test(e)?e.replace(St,Tu):e}var nm=jr(function(e,t,a){return e+(a?" ":"")+t.toUpperCase()}),hs=pl("toUpperCase");function uc(e,t,a){return e=Ve(e),t=a?r:t,t===r?Nu(e)?$u(e):gu(e):e.match(t)||[]}var fc=Fe(function(e,t){try{return Ut(e,r,t)}catch(a){return ds(a)?a:new Se(a)}}),rm=An(function(e,t){return Jt(t,function(a){a=bn(a),_n(e,a,ls(e[a],e))}),e});function am(e){var t=e==null?0:e.length,a=he();return e=t?nt(e,function(l){if(typeof l[1]!="function")throw new Xt(u);return[a(l[0]),l[1]]}):[],Fe(function(l){for(var f=-1;++f<t;){var h=e[f];if(Ut(h[0],this,l))return Ut(h[1],this,l)}})}function im(e){return Rf(Qt(e,w))}function gs(e){return function(){return e}}function sm(e,t){return e==null||e!==e?t:e}var om=gl(),lm=gl(!0);function kt(e){return e}function ms(e){return Yo(typeof e=="function"?e:Qt(e,w))}function cm(e){return Vo(Qt(e,w))}function dm(e,t){return Mo(e,Qt(t,w))}var um=Fe(function(e,t){return function(a){return Br(a,e,t)}}),fm=Fe(function(e,t){return function(a){return Br(e,a,t)}});function xs(e,t,a){var l=xt(t),f=Sa(t,l);a==null&&!(rt(t)&&(f.length||!l.length))&&(a=t,t=e,e=this,f=Sa(t,xt(t)));var h=!(rt(a)&&"chain"in a)||!!a.chain,x=Tn(e);return Jt(f,function(j){var C=t[j];e[j]=C,x&&(e.prototype[j]=function(){var B=this.__chain__;if(h||B){var z=e(this.__wrapped__),W=z.__actions__=Et(this.__actions__);return W.push({func:C,args:arguments,thisArg:e}),z.__chain__=B,z}return C.apply(e,Un([this.value()],arguments))})}),e}function pm(){return bt._===this&&(bt._=Uu),this}function bs(){}function hm(e){return e=Re(e),Fe(function(t){return Ko(t,e)})}var gm=Ki(nt),mm=Ki(mo),xm=Ki(yi);function pc(e){return ns(e)?wi(bn(e)):Vf(e)}function bm(e){return function(t){return e==null?r:rr(e,t)}}var vm=xl(),ym=xl(!0);function vs(){return[]}function ys(){return!1}function wm(){return{}}function jm(){return""}function Sm(){return!0}function Nm(e,t){if(e=Re(e),e<1||e>ke)return[];var a=le,l=yt(e,le);t=he(t),e-=le;for(var f=Ni(l,t);++a<e;)t(a);return f}function _m(e){return Ce(e)?nt(e,bn):zt(e)?[e]:Et(Pl(Ve(e)))}function Cm(e){var t=++Iu;return Ve(e)+t}var Am=Ta(function(e,t){return e+t},0),Em=Ji("ceil"),Tm=Ta(function(e,t){return e/t},1),Rm=Ji("floor");function km(e){return e&&e.length?ja(e,kt,Fi):r}function $m(e,t){return e&&e.length?ja(e,he(t,2),Fi):r}function Pm(e){return vo(e,kt)}function Om(e,t){return vo(e,he(t,2))}function Fm(e){return e&&e.length?ja(e,kt,Di):r}function Im(e,t){return e&&e.length?ja(e,he(t,2),Di):r}var Lm=Ta(function(e,t){return e*t},1),Um=Ji("round"),Dm=Ta(function(e,t){return e-t},0);function Bm(e){return e&&e.length?Si(e,kt):0}function zm(e,t){return e&&e.length?Si(e,he(t,2)):0}return p.after=cg,p.ary=Gl,p.assign=Jg,p.assignIn=ac,p.assignInWith=Wa,p.assignWith=Xg,p.at=Zg,p.before=Yl,p.bind=ls,p.bindAll=rm,p.bindKey=ql,p.castArray=wg,p.chain=zl,p.chunk=Rp,p.compact=kp,p.concat=$p,p.cond=am,p.conforms=im,p.constant=gs,p.countBy=Bh,p.create=Qg,p.curry=Vl,p.curryRight=Ml,p.debounce=Kl,p.defaults=e0,p.defaultsDeep=t0,p.defer=dg,p.delay=ug,p.difference=Pp,p.differenceBy=Op,p.differenceWith=Fp,p.drop=Ip,p.dropRight=Lp,p.dropRightWhile=Up,p.dropWhile=Dp,p.fill=Bp,p.filter=Wh,p.flatMap=Yh,p.flatMapDeep=qh,p.flatMapDepth=Vh,p.flatten=Ll,p.flattenDeep=zp,p.flattenDepth=Wp,p.flip=fg,p.flow=om,p.flowRight=lm,p.fromPairs=Hp,p.functions=l0,p.functionsIn=c0,p.groupBy=Mh,p.initial=Yp,p.intersection=qp,p.intersectionBy=Vp,p.intersectionWith=Mp,p.invert=u0,p.invertBy=f0,p.invokeMap=Jh,p.iteratee=ms,p.keyBy=Xh,p.keys=xt,p.keysIn=Rt,p.map=Ia,p.mapKeys=h0,p.mapValues=g0,p.matches=cm,p.matchesProperty=dm,p.memoize=Ua,p.merge=m0,p.mergeWith=ic,p.method=um,p.methodOf=fm,p.mixin=xs,p.negate=Da,p.nthArg=hm,p.omit=x0,p.omitBy=b0,p.once=pg,p.orderBy=Zh,p.over=gm,p.overArgs=hg,p.overEvery=mm,p.overSome=xm,p.partial=cs,p.partialRight=Jl,p.partition=Qh,p.pick=v0,p.pickBy=sc,p.property=pc,p.propertyOf=bm,p.pull=Zp,p.pullAll=Dl,p.pullAllBy=Qp,p.pullAllWith=eh,p.pullAt=th,p.range=vm,p.rangeRight=ym,p.rearg=gg,p.reject=ng,p.remove=nh,p.rest=mg,p.reverse=ss,p.sampleSize=ag,p.set=w0,p.setWith=j0,p.shuffle=ig,p.slice=rh,p.sortBy=lg,p.sortedUniq=dh,p.sortedUniqBy=uh,p.split=Y0,p.spread=xg,p.tail=fh,p.take=ph,p.takeRight=hh,p.takeRightWhile=gh,p.takeWhile=mh,p.tap=kh,p.throttle=bg,p.thru=Fa,p.toArray=tc,p.toPairs=oc,p.toPairsIn=lc,p.toPath=_m,p.toPlainObject=rc,p.transform=S0,p.unary=vg,p.union=xh,p.unionBy=bh,p.unionWith=vh,p.uniq=yh,p.uniqBy=wh,p.uniqWith=jh,p.unset=N0,p.unzip=os,p.unzipWith=Bl,p.update=_0,p.updateWith=C0,p.values=_r,p.valuesIn=A0,p.without=Sh,p.words=uc,p.wrap=yg,p.xor=Nh,p.xorBy=_h,p.xorWith=Ch,p.zip=Ah,p.zipObject=Eh,p.zipObjectDeep=Th,p.zipWith=Rh,p.entries=oc,p.entriesIn=lc,p.extend=ac,p.extendWith=Wa,xs(p,p),p.add=Am,p.attempt=fc,p.camelCase=k0,p.capitalize=cc,p.ceil=Em,p.clamp=E0,p.clone=jg,p.cloneDeep=Ng,p.cloneDeepWith=_g,p.cloneWith=Sg,p.conformsTo=Cg,p.deburr=dc,p.defaultTo=sm,p.divide=Tm,p.endsWith=$0,p.eq=un,p.escape=P0,p.escapeRegExp=O0,p.every=zh,p.find=Hh,p.findIndex=Fl,p.findKey=n0,p.findLast=Gh,p.findLastIndex=Il,p.findLastKey=r0,p.floor=Rm,p.forEach=Wl,p.forEachRight=Hl,p.forIn=a0,p.forInRight=i0,p.forOwn=s0,p.forOwnRight=o0,p.get=fs,p.gt=Ag,p.gte=Eg,p.has=d0,p.hasIn=ps,p.head=Ul,p.identity=kt,p.includes=Kh,p.indexOf=Gp,p.inRange=T0,p.invoke=p0,p.isArguments=sr,p.isArray=Ce,p.isArrayBuffer=Tg,p.isArrayLike=Tt,p.isArrayLikeObject=st,p.isBoolean=Rg,p.isBuffer=Yn,p.isDate=kg,p.isElement=$g,p.isEmpty=Pg,p.isEqual=Og,p.isEqualWith=Fg,p.isError=ds,p.isFinite=Ig,p.isFunction=Tn,p.isInteger=Xl,p.isLength=Ba,p.isMap=Zl,p.isMatch=Lg,p.isMatchWith=Ug,p.isNaN=Dg,p.isNative=Bg,p.isNil=Wg,p.isNull=zg,p.isNumber=Ql,p.isObject=rt,p.isObjectLike=it,p.isPlainObject=qr,p.isRegExp=us,p.isSafeInteger=Hg,p.isSet=ec,p.isString=za,p.isSymbol=zt,p.isTypedArray=Nr,p.isUndefined=Gg,p.isWeakMap=Yg,p.isWeakSet=qg,p.join=Kp,p.kebabCase=F0,p.last=tn,p.lastIndexOf=Jp,p.lowerCase=I0,p.lowerFirst=L0,p.lt=Vg,p.lte=Mg,p.max=km,p.maxBy=$m,p.mean=Pm,p.meanBy=Om,p.min=Fm,p.minBy=Im,p.stubArray=vs,p.stubFalse=ys,p.stubObject=wm,p.stubString=jm,p.stubTrue=Sm,p.multiply=Lm,p.nth=Xp,p.noConflict=pm,p.noop=bs,p.now=La,p.pad=U0,p.padEnd=D0,p.padStart=B0,p.parseInt=z0,p.random=R0,p.reduce=eg,p.reduceRight=tg,p.repeat=W0,p.replace=H0,p.result=y0,p.round=Um,p.runInContext=N,p.sample=rg,p.size=sg,p.snakeCase=G0,p.some=og,p.sortedIndex=ah,p.sortedIndexBy=ih,p.sortedIndexOf=sh,p.sortedLastIndex=oh,p.sortedLastIndexBy=lh,p.sortedLastIndexOf=ch,p.startCase=q0,p.startsWith=V0,p.subtract=Dm,p.sum=Bm,p.sumBy=zm,p.template=M0,p.times=Nm,p.toFinite=Rn,p.toInteger=Re,p.toLength=nc,p.toLower=K0,p.toNumber=nn,p.toSafeInteger=Kg,p.toString=Ve,p.toUpper=J0,p.trim=X0,p.trimEnd=Z0,p.trimStart=Q0,p.truncate=em,p.unescape=tm,p.uniqueId=Cm,p.upperCase=nm,p.upperFirst=hs,p.each=Wl,p.eachRight=Hl,p.first=Ul,xs(p,function(){var e={};return mn(p,function(t,a){Me.call(p.prototype,a)||(e[a]=t)}),e}(),{chain:!1}),p.VERSION=o,Jt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){p[e].placeholder=p}),Jt(["drop","take"],function(e,t){Ue.prototype[e]=function(a){a=a===r?1:gt(Re(a),0);var l=this.__filtered__&&!t?new Ue(this):this.clone();return l.__filtered__?l.__takeCount__=yt(a,l.__takeCount__):l.__views__.push({size:yt(a,le),type:e+(l.__dir__<0?"Right":"")}),l},Ue.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),Jt(["filter","map","takeWhile"],function(e,t){var a=t+1,l=a==P||a==oe;Ue.prototype[e]=function(f){var h=this.clone();return h.__iteratees__.push({iteratee:he(f,3),type:a}),h.__filtered__=h.__filtered__||l,h}}),Jt(["head","last"],function(e,t){var a="take"+(t?"Right":"");Ue.prototype[e]=function(){return this[a](1).value()[0]}}),Jt(["initial","tail"],function(e,t){var a="drop"+(t?"":"Right");Ue.prototype[e]=function(){return this.__filtered__?new Ue(this):this[a](1)}}),Ue.prototype.compact=function(){return this.filter(kt)},Ue.prototype.find=function(e){return this.filter(e).head()},Ue.prototype.findLast=function(e){return this.reverse().find(e)},Ue.prototype.invokeMap=Fe(function(e,t){return typeof e=="function"?new Ue(this):this.map(function(a){return Br(a,e,t)})}),Ue.prototype.reject=function(e){return this.filter(Da(he(e)))},Ue.prototype.slice=function(e,t){e=Re(e);var a=this;return a.__filtered__&&(e>0||t<0)?new Ue(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),t!==r&&(t=Re(t),a=t<0?a.dropRight(-t):a.take(t-e)),a)},Ue.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Ue.prototype.toArray=function(){return this.take(le)},mn(Ue.prototype,function(e,t){var a=/^(?:filter|find|map|reject)|While$/.test(t),l=/^(?:head|last)$/.test(t),f=p[l?"take"+(t=="last"?"Right":""):t],h=l||/^find/.test(t);f&&(p.prototype[t]=function(){var x=this.__wrapped__,j=l?[1]:arguments,C=x instanceof Ue,B=j[0],z=C||Ce(x),W=function(Le){var De=f.apply(p,Un([Le],j));return l&&te?De[0]:De};z&&a&&typeof B=="function"&&B.length!=1&&(C=z=!1);var te=this.__chain__,de=!!this.__actions__.length,me=h&&!te,Pe=C&&!de;if(!h&&z){x=Pe?x:new Ue(this);var xe=e.apply(x,j);return xe.__actions__.push({func:Fa,args:[W],thisArg:r}),new Zt(xe,te)}return me&&Pe?e.apply(this,j):(xe=this.thru(W),me?l?xe.value()[0]:xe.value():xe)})}),Jt(["pop","push","shift","sort","splice","unshift"],function(e){var t=oa[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",l=/^(?:pop|shift)$/.test(e);p.prototype[e]=function(){var f=arguments;if(l&&!this.__chain__){var h=this.value();return t.apply(Ce(h)?h:[],f)}return this[a](function(x){return t.apply(Ce(x)?x:[],f)})}}),mn(Ue.prototype,function(e,t){var a=p[t];if(a){var l=a.name+"";Me.call(vr,l)||(vr[l]=[]),vr[l].push({name:t,func:a})}}),vr[Ea(r,Y).name]=[{name:"wrapper",func:r}],Ue.prototype.clone=ef,Ue.prototype.reverse=tf,Ue.prototype.value=nf,p.prototype.at=$h,p.prototype.chain=Ph,p.prototype.commit=Oh,p.prototype.next=Fh,p.prototype.plant=Lh,p.prototype.reverse=Uh,p.prototype.toJSON=p.prototype.valueOf=p.prototype.value=Dh,p.prototype.first=p.prototype.head,Pr&&(p.prototype[Pr]=Ih),p},mr=Pu();Zn?((Zn.exports=mr)._=mr,mi._=mr):bt._=mr}).call(M1)}(Kr,Kr.exports)),Kr.exports}var J1=K1();const X1="/x-pense-app/assets/bitcoin-DEGqceNT.png",Z1="/x-pense-app/assets/ethereum-CuEFbPJh.png",Q1="/x-pense-app/assets/usdc-LEAjTsRZ.png",ev=({darkMode:s,investments:i,setInvestments:r,amounts:o,setAmounts:c,marketCaps:d,setMarketCaps:u,formatCurrency:m,addedInvestments:g,setAddedInvestments:S})=>{const y=ur(),[w,I]=v.useState(!1),[K,T]=v.useState(""),[k,A]=v.useState({}),[Y,V]=v.useState({}),[R,M]=v.useState(!1);v.useEffect(()=>{(async()=>{var Z,oe,Te,ke,Ne,D;try{I(!0);const le=await ge.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),fe=await ge.get("https://api.coinbase.com/v2/prices/ETH-USD/spot"),G=await ge.get("https://api.coinbase.com/v2/prices/USDC-USD/spot"),re=((oe=(Z=le.data)==null?void 0:Z.bitcoin)==null?void 0:oe.usd)||0,ie=parseFloat((ke=(Te=fe.data)==null?void 0:Te.data)==null?void 0:ke.amount)||0,ue=parseFloat((D=(Ne=G.data)==null?void 0:Ne.data)==null?void 0:D.amount)||1,$e=i.reduce((J,Ae)=>(J[Ae.id]=Ae.pricePerUnit,J),{}),Ge=[{id:"bitcoin",name:"Bitcoin",type:"Cryptocurrency",pricePerUnit:re},{id:"ethereum",name:"Ethereum",type:"Cryptocurrency",pricePerUnit:ie},{id:"usd-coin",name:"USDC",type:"Stablecoin",pricePerUnit:ue}],ee={};Ge.forEach(J=>{const Ae=$e[J.id];Ae&&Ae!==J.pricePerUnit&&(ee[J.id]=J.pricePerUnit>Ae?"up":"down")}),A(ee),r(Ge),c(Ge.map(()=>0)),setTimeout(()=>A({}),3e3)}catch(le){console.error("Error fetching investments",le),T("❌ Failed to fetch live prices. Please try again."),setTimeout(()=>T(""),3e3)}finally{I(!1)}})()},[r,c]),v.useEffect(()=>{const P=async()=>{try{const Z=i.map(Te=>Te.id).join(","),oe=await ge.get("http://localhost:5001/api/coins/markets",{params:{ids:Z}});if(console.log("INVESTMENTS COMPONENTS"),console.log("Market cap response:",oe.data),Array.isArray(oe.data)){const Te=oe.data.reduce((ke,Ne)=>(ke[Ne.id]=Ne.market_cap,ke),{});console.log("Market cap data:",Te),u(Te)}else console.error("Expected an array but got:",oe.data)}catch(Z){console.error("Error fetching market cap data:",Z)}};i.length>0&&P()},[i]);const ne=J1.debounce((P,Z)=>{const oe=[...o],Te=parseFloat(Z);isNaN(Te)||(oe[P]=Te,c(oe))},300),pe=(P,Z)=>(P*Z).toFixed(2),we=async P=>{const Z=i[P],oe=o[P];if(!oe||oe<=0){T("⚠️ Please enter a valid amount greater than 0"),setTimeout(()=>T(""),3e3);return}I(!0);const Te=pe(oe,Z.pricePerUnit),ke={...Z,amount:oe,totalPrice:Te};try{const Ne=g.findIndex(le=>le.name===ke.name);if(Ne!==-1){const le=g[Ne],fe=le.amount+oe,G=pe(fe,Z.pricePerUnit),re=await ge.put(`http://localhost:5001/investments/${le.id}`,{amount:fe,totalPrice:G},{headers:{"Content-Type":"application/json"}}),ie=[...g];ie[Ne]={...le,amount:fe,totalPrice:G},S(ie),T(`💰 Updated ${Z.name} investment successfully!`)}else{const le=await ge.post("http://localhost:5001/investments",ke,{headers:{"Content-Type":"application/json"}});S([...g,ke]),T(`🚀 Added ${Z.name} investment successfully!`)}V({...Y,[P]:!0}),setTimeout(()=>{V({...Y,[P]:!1})},1e3);const D=[...o];D[P]=0,c(D),setTimeout(()=>T(""),3e3),setTimeout(()=>y("/dashboard"),2e3)}catch(Ne){console.error("Error adding/updating investment:",Ne),T("❌ Failed to add investment. Please try again."),setTimeout(()=>T(""),3e3)}finally{I(!1)}},be=P=>{var oe;const Z=[...o];Z[P]=0,c(Z),T(`🔄 Reset ${(oe=i[P])==null?void 0:oe.name} amount`),setTimeout(()=>T(""),2e3)},ve=async()=>{var P,Z,oe,Te,ke,Ne;M(!0);try{const D=await ge.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"),le=await ge.get("https://api.coinbase.com/v2/prices/ETH-USD/spot"),fe=await ge.get("https://api.coinbase.com/v2/prices/USDC-USD/spot"),G=((Z=(P=D.data)==null?void 0:P.bitcoin)==null?void 0:Z.usd)||0,re=parseFloat((Te=(oe=le.data)==null?void 0:oe.data)==null?void 0:Te.amount)||0,ie=parseFloat((Ne=(ke=fe.data)==null?void 0:ke.data)==null?void 0:Ne.amount)||1;r([{id:"bitcoin",name:"Bitcoin",type:"Cryptocurrency",pricePerUnit:G},{id:"ethereum",name:"Ethereum",type:"Cryptocurrency",pricePerUnit:re},{id:"usd-coin",name:"USDC",type:"Stablecoin",pricePerUnit:ie}]),T("🔄 Prices refreshed successfully!"),setTimeout(()=>T(""),3e3)}catch(D){console.error("Error refreshing prices:",D),T("❌ Failed to refresh prices. Please try again."),setTimeout(()=>T(""),3e3)}finally{M(!1)}},Oe=P=>{if(!P)return null;switch(P.toLowerCase()){case"bitcoin":return n.jsx("img",{src:X1,alt:"Bitcoin",className:"crypto-icon",style:{width:"24px",height:"24px"}});case"ethereum":return n.jsx("img",{src:Z1,alt:"Ethereum",className:"crypto-icon",style:{width:"24px",height:"24px"}});case"usdc":return n.jsx("img",{src:Q1,alt:"USDC",className:"crypto-icon",style:{width:"24px",height:"24px"}});default:return n.jsx("div",{className:"crypto-placeholder",children:"💰"})}},E=P=>P>=1e12?`${(P/1e12).toFixed(2)} Trillion`:P>=1e9?`${(P/1e9).toFixed(2)} Billion`:P.toLocaleString(),Q=P=>{const Z=k[P];return Z==="up"?"📈":Z==="down"?"📉":""},se=P=>{const Z=k[P];return Z==="up"?"price-up":Z==="down"?"price-down":""};return n.jsxs("div",{className:"investments-container",children:[n.jsx("style",{jsx:!0,children:`
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
                    background: ${s?"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)":"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"};
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
                    color: ${s?"#e2e8f0":"#2d3748"};
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
                    background: ${s?"#2d3748":"#ffffff"};
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    border: ${s?"2px solid #4a5568":"2px solid #e2e8f0"};
                }

                .enhanced-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: ${s?"#2d3748":"#ffffff"};
                    table-layout: fixed;
                }

                .enhanced-table th {
                    background: ${s?"#4a5568":"#667eea"};
                    color: white;
                    padding: 18px 15px;
                    text-align: left;
                    font-weight: 600;
                    font-size: 1rem;
                    border-bottom: 3px solid ${s?"#2d3748":"#5a67d8"};
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
                    border-bottom: 1px solid ${s?"#4a5568":"#e2e8f0"};
                    color: ${s?"#e2e8f0":"#2d3748"};
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
                    background: ${s?"#4a5568":"#f7fafc"};
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .table-row.animate {
                    animation: rowSuccess 1s ease;
                }

                @keyframes rowSuccess {
                    0%, 100% { background: ${s?"#2d3748":"#ffffff"}; }
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
                    color: ${s?"#68d391":"#38a169"};
                }

                .amount-input {
                    width: 100%;
                    max-width: 80px;
                    padding: 8px 10px;
                    border: 2px solid ${s?"#4a5568":"#e2e8f0"};
                    border-radius: 8px;
                    background: ${s?"#2d3748":"#ffffff"};
                    color: ${s?"#e2e8f0":"#2d3748"};
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
                    color: ${s?"#e2e8f0":"#2d3748"};
                }

                .large-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid ${s?"#4a5568":"#e2e8f0"};
                    border-top: 4px solid #667eea;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 15px;
                }

                @media (max-width: 768px) {
                    .control-section {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .action-buttons {
                        flex-wrap: nowrap;
                        gap: 4px;
                    }
                    
                    .btn-modern {
                        font-size: 0.65rem;
                        padding: 8px 10px;
                        min-width: 50px;
                    }
                    
                    .amount-input {
                        width: 100%;
                        max-width: none;
                    }

                    .enhanced-table th,
                    .enhanced-table td {
                        padding: 10px 6px;
                        font-size: 0.85rem;
                    }

                    .crypto-name-cell {
                        font-size: 1rem;
                    }

                    .price-cell {
                        font-size: 0.9rem;
                    }

                    .type-badge {
                        font-size: 0.65rem;
                        padding: 3px 6px;
                    }
                }
            `}),n.jsxs("div",{className:"investments-header",children:[n.jsx("h5",{children:"🚀 Crypto Investments"}),n.jsx("p",{className:"investments-subtitle",children:"Invest in the future with real-time market data"})]}),K&&n.jsx("div",{className:"success-message",children:K}),n.jsxs("div",{className:"control-section",children:[n.jsxs("div",{className:"live-indicator",children:[n.jsx("span",{className:"live-badge",children:"Live"}),n.jsx("span",{children:"📊 Make Informed Decisions With Live Crypto Updates"})]}),n.jsxs("button",{className:"refresh-button",onClick:ve,disabled:R,children:[R?n.jsx("span",{className:"loading-spinner"}):"🔄",R?"Refreshing...":"Refresh Prices"]})]}),n.jsx("div",{className:"table-container",children:w&&i.length===0?n.jsxs("div",{className:"loading-container",children:[n.jsx("div",{className:"large-spinner"}),n.jsx("p",{children:"Loading investment data..."})]}):n.jsxs(n.Fragment,{children:[w&&n.jsx("div",{className:"loading-overlay",children:n.jsx("div",{className:"large-spinner"})}),n.jsxs("table",{className:"enhanced-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Symbol"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Price"}),n.jsx("th",{children:"Market Cap"}),n.jsx("th",{children:"Amount"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:i.map((P,Z)=>n.jsxs("tr",{className:`table-row ${Y[Z]?"animate":""}`,children:[n.jsxs("td",{className:"crypto-name-cell",children:[Oe(P.name),n.jsx("span",{children:P.name})]}),n.jsx("td",{children:n.jsx("span",{style:{fontWeight:"600",textTransform:"uppercase",fontSize:"0.9rem"},children:P.id==="bitcoin"?"BTC":P.id==="ethereum"?"ETH":P.id==="usd-coin"?"USDC":P.name.substring(0,3).toUpperCase()})}),n.jsx("td",{children:n.jsx("span",{className:`type-badge ${P.type==="Cryptocurrency"?"type-crypto":"type-stablecoin"}`,children:P.type==="Cryptocurrency"?"Crypto":"Stable"})}),n.jsxs("td",{className:`price-cell ${se(P.id)}`,children:[n.jsx("span",{children:m(P.pricePerUnit)}),n.jsx("span",{children:Q(P.id)})]}),n.jsx("td",{className:"market-cap-cell",children:d[P.id]?`$${E(d[P.id])}`:n.jsx("span",{style:{opacity:.7},children:"Loading..."})}),n.jsx("td",{children:n.jsx("input",{type:"number",className:"amount-input",value:o[Z]||"",placeholder:"0.00",name:`investment-amount-${Z}`,onChange:oe=>ne(Z,oe.target.value),step:"0.01",min:"0"})}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{className:"btn-modern btn-add",onClick:()=>we(Z),disabled:w||!o[Z]||o[Z]<=0,children:[w?n.jsx("span",{className:"loading-spinner"}):"💰","Add"]}),n.jsx("button",{className:"btn-modern btn-reset",onClick:()=>be(Z),disabled:w,children:"🔄 Reset"})]})})]},P.id))})]})]})})]})},tv="/x-pense-app/assets/intro_01-CLbcXq8c.mp3";function Rd(){return n.jsx("footer",{className:"text-center my-5 footer fade-in",children:n.jsxs("p",{children:["©",new Date().getFullYear()," MarlonShade. All rights reserved."]})})}const nv=()=>{const s=ur(),i=()=>{const r=new Audio(tv);r.volume=.1,r.play().catch(o=>{console.error("Error playing audio",o)}),s("/dashboard")};return n.jsx("div",{className:"intro-margin",children:n.jsx("div",{className:"start-page-container",children:n.jsxs("div",{className:"start-page-content",children:[n.jsx("h1",{className:"intro metallic-shadow fade-in",children:"X-PENSE".split("").map((r,o)=>n.jsx("span",{className:`char char-${o}`,children:r},o))}),n.jsx("p",{className:"subtitle fade-in ",children:"Your Friendly Budget Tracker"}),n.jsx("button",{onClick:i,className:"btn-enhanced fade-in",children:"Get Started"}),n.jsx(Rd,{})]})})})},rv=({darkMode:s})=>{const[i,r]=v.useState(""),[o,c]=v.useState(null),[d,u]=v.useState(lr.getStats()),m=()=>{if(i.trim()){const S=lr.categorizeTransaction(i);c(S)}},g=["STARBUCKS #1234 NEW YORK","SHELL GAS STATION #567","AMAZON.COM PURCHASE","WALMART SUPERCENTER #890","NETFLIX MONTHLY","ELECTRIC COMPANY BILL","CVS PHARMACY #123"];return n.jsxs("div",{className:"ai-demo-container",children:[n.jsx("style",{jsx:!0,children:`
        .ai-demo-container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background: ${s?"#2d3748":"#f8f9fa"};
          border-radius: 15px;
          border: 2px solid ${s?"#4a5568":"#e2e8f0"};
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
          background: ${s?"#4a5568":"white"};
          border-radius: 12px;
          border: 1px solid ${s?"#718096":"#e2e8f0"};
        }

        .test-input {
          width: 100%;
          padding: 12px;
          border: 2px solid ${s?"#718096":"#e2e8f0"};
          border-radius: 8px;
          background: ${s?"#2d3748":"white"};
          color: ${s?"#e2e8f0":"#2d3748"};
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
          background: ${s?"#38a169":"#c6f6d5"};
          color: ${s?"white":"#22543d"};
          border-radius: 8px;
          font-weight: 600;
        }

        .sample-transaction {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin: 5px 0;
          background: ${s?"#2d3748":"#f7fafc"};
          border-radius: 6px;
          border: 1px solid ${s?"#4a5568":"#e2e8f0"};
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .stat-card {
          padding: 15px;
          background: ${s?"#4a5568":"white"};
          border-radius: 8px;
          text-align: center;
          border: 1px solid ${s?"#718096":"#e2e8f0"};
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #4299e1;
        }

        .confidence-bar {
          width: 100%;
          height: 8px;
          background: ${s?"#4a5568":"#e2e8f0"};
          border-radius: 4px;
          overflow: hidden;
          margin-top: 5px;
        }

        .confidence-fill {
          height: 100%;
          background: linear-gradient(90deg, #f56565 0%, #ed8936 50%, #38a169 100%);
          transition: width 0.3s ease;
        }
      `}),n.jsxs("div",{className:"demo-header",children:[n.jsx("h3",{children:"🤖 AI Transaction Categorization Demo"}),n.jsx("p",{children:"Test how our AI categorizes different transaction descriptions"})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"Test AI Categorization"}),n.jsx("input",{type:"text",className:"test-input",placeholder:"Enter a transaction description (e.g., 'STARBUCKS #1234')",value:i,onChange:S=>r(S.target.value),onKeyPress:S=>S.key==="Enter"&&m()}),n.jsx("button",{className:"test-button",onClick:m,children:"🤖 Analyze Transaction"}),o&&n.jsxs("div",{className:"result-display",children:[n.jsxs("div",{children:["Category: ",n.jsx("strong",{children:o.category})]}),n.jsxs("div",{children:["Confidence: ",o.confidence,"%"]}),n.jsx("div",{className:"confidence-bar",children:n.jsx("div",{className:"confidence-fill",style:{width:`${o.confidence}%`}})})]})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"Sample Transactions"}),n.jsx("p",{children:"Click any sample to see how AI categorizes it:"}),g.map((S,y)=>{const w=lr.categorizeTransaction(S);return n.jsxs("div",{className:"sample-transaction",onClick:()=>{r(S),c(w)},style:{cursor:"pointer"},children:[n.jsx("span",{children:S}),n.jsxs("span",{style:{background:"#4299e1",color:"white",padding:"4px 8px",borderRadius:"4px",fontSize:"0.8rem"},children:[w.category," (",w.confidence,"%)"]})]},y)})]}),n.jsxs("div",{className:"demo-section",children:[n.jsx("h4",{children:"AI Learning Statistics"}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:d.totalCorrections}),n.jsx("div",{children:"User Corrections"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsxs("div",{className:"stat-number",children:[d.learningAccuracy,"%"]}),n.jsx("div",{children:"Learning Accuracy"})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:Object.keys(d.categoryDistribution).length}),n.jsx("div",{children:"Categories Learned"})]})]})]})]})};function av(){const s=Ye=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Ye),i=Ye=>new Date(Ye).toLocaleDateString(),r=Ye=>{const _=new Date(Ye);return _.setMinutes(_.getMinutes()+_.getTimezoneOffset()),i(_)},[o,c]=v.useState([]),[d,u]=v.useState(0),[m,g]=v.useState(0),[S,y]=v.useState(!0),[w,I]=v.useState(!1),[K,T]=v.useState([]),[k,A]=v.useState(0),[Y,V]=v.useState([]),[R,M]=v.useState(""),[ne,pe]=v.useState(""),[we,be]=v.useState(""),[ve,Oe]=v.useState(""),[E,Q]=v.useState(null),[se,P]=v.useState(""),Z=Y.reduce((Ye,_)=>Ye+_.amount,0),[oe,Te]=v.useState(0),[ke,Ne]=v.useState(0),[D,le]=v.useState(0),[fe,G]=v.useState(0),re=oe+ke+D,[ie,ue]=v.useState(null),[$e,Ge]=v.useState([]),[ee,J]=v.useState(null),[Ae,ze]=v.useState({cash_on_hand:0,bank_account_balance:0,savings:0,total:0}),[Pt,Ie]=v.useState(null),[dt,Ze]=v.useState(0),[ut,lt]=v.useState(0),[On,Ke]=v.useState(""),[Je,ft]=v.useState(""),[mt,yn]=v.useState(""),[Ot,gn]=v.useState(0),[ct,pt]=v.useState([]),[rn,At]=v.useState(ct.map(Ye=>({...Ye,progress:Ye.saved/Ye.target*100}))),[Yt,H]=v.useState({}),[X,ce]=v.useState(null),[je,Be]=v.useState(""),[tt,We]=v.useState({category:"",date:"",text:"",amount:""}),[He,Ft]=v.useState(""),[St,an]=v.useState(""),[qt,wn]=v.useState([]),[Fn,Jn]=v.useState([]),[In,sn]=v.useState({}),[Vt,on]=v.useState(""),[Mt,Xn]=v.useState(""),[jn,It]=v.useState("");v.useEffect(()=>{const Ye=o.reduce((_,Lt)=>_+parseFloat(Lt.amount),0);A(Ye)},[o]),v.useEffect(()=>{S?(document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode"),document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode"),document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark"))},[S]);const b=()=>{y(!S)},[L,O]=v.useState(!1),q=Ye=>{T([...K,Ye]),console.log("Added investment:",Ye)},ye=Ye=>parseFloat(Ye).toLocaleString(),_e=Ye=>{if(!K||!K[Ye]){console.error("Investment not found");return}const _=K[Ye].id;ge.delete(`http://localhost:5001/investments/${_}`).then(Lt=>{if(Lt.status===204){const ln=K.filter((Ws,di)=>di!==Ye);T(ln)}else console.error("Failed to delete the investment")}).catch(Lt=>{console.error("Error:",Lt)})};return n.jsx(E1,{basename:"/x-pense-app",children:n.jsx(iv,{darkMode:S,toggleDarkMode:b,sidebarOpen:w,setSidebarOpen:I,transactions:o,setTransactions:c,balance:d,setBalance:u,budget:m,setBudget:g,addedInvestments:K,setAddedInvestments:T,totalAmount:k,setTotalAmount:A,items:Y,setItems:V,name:R,setName:M,amount:ne,setAmount:pe,newBudget:we,setNewBudget:be,error:ve,setError:Oe,editingIndex:E,setEditingIndex:Q,editAmount:se,setEditAmount:P,totalBudgetAmount:Z,cashOnHand:oe,setCashOnHand:Te,bankAccountBalance:ke,setBankAccountBalance:Ne,savings:D,setSavings:le,total:fe,setTotal:G,totalBalance:re,balanceId:ie,setBalanceId:ue,balances:$e,setBalances:Ge,editIndex:ee,setEditIndex:J,editBalance:Ae,setEditBalance:ze,balanceError:Pt,setBalanceError:Ie,goalAmount:dt,setGoalAmount:Ze,currentAmount:ut,setCurrentAmount:lt,inputAmount:On,setInputAmount:Ke,newGoalName:Je,setNewGoalName:ft,newGoalAmount:mt,setNewGoalAmount:yn,progPercentage:Ot,setProgPercentage:gn,goals:ct,setGoals:pt,goalsProgress:rn,setGoalsProgress:At,inputAmounts:Yt,setInputAmounts:H,editingGoalId:X,setEditingGoalId:ce,editedGoalName:je,setEditedGoalName:Be,editTransaction:tt,setEditTransaction:We,reminderDate:He,setReminderDate:Ft,successMessage:St,setSuccessMessage:an,investments:qt,setInvestments:wn,amounts:Fn,setAmounts:Jn,marketCaps:In,setMarketCaps:sn,category:Vt,setCategory:on,date:Mt,setDate:Xn,description:jn,setDescription:It,validated:L,setValidated:O,formatCurrency:s,formatDate:i,parseDate:r,formatAmount:ye,handleAddInvestment:q,handleRemoveInvestment:_e})})}function iv(s){const i=Kn(),{darkMode:r,toggleDarkMode:o,sidebarOpen:c,setSidebarOpen:d,transactions:u,setTransactions:m,balance:g,setBalance:S,budget:y,setBudget:w,addedInvestments:I,setAddedInvestments:K,totalAmount:T,setTotalAmount:k,items:A,setItems:Y,name:V,setName:R,amount:M,setAmount:ne,newBudget:pe,setNewBudget:we,error:be,setError:ve,editingIndex:Oe,setEditingIndex:E,editAmount:Q,setEditAmount:se,totalBudgetAmount:P,cashOnHand:Z,setCashOnHand:oe,bankAccountBalance:Te,setBankAccountBalance:ke,savings:Ne,setSavings:D,total:le,setTotal:fe,totalBalance:G,balanceId:re,setBalanceId:ie,balances:ue,setBalances:$e,editIndex:Ge,setEditIndex:ee,editBalance:J,setEditBalance:Ae,balanceError:ze,setBalanceError:Pt,goalAmount:Ie,setGoalAmount:dt,currentAmount:Ze,setCurrentAmount:ut,inputAmount:lt,setInputAmount:On,newGoalName:Ke,setNewGoalName:Je,newGoalAmount:ft,setNewGoalAmount:mt,progPercentage:yn,setProgPercentage:Ot,goals:gn,setGoals:ct,goalsProgress:pt,setGoalsProgress:rn,inputAmounts:At,setInputAmounts:Yt,editingGoalId:H,setEditingGoalId:X,editedGoalName:ce,setEditedGoalName:je,editTransaction:Be,setEditTransaction:tt,reminderDate:We,setReminderDate:He,successMessage:Ft,setSuccessMessage:St,investments:an,setInvestments:qt,amounts:wn,setAmounts:Fn,marketCaps:Jn,setMarketCaps:In,category:sn,setCategory:Vt,date:on,setDate:Mt,description:Xn,setDescription:jn,validated:It,setValidated:b,formatCurrency:L,formatDate:O,parseDate:q,formatAmount:ye,handleAddInvestment:_e,handleRemoveInvestment:Ye}=s;return n.jsxs("div",{id:"root",className:`${r?"dark-mode":"light-mode"}`,children:[i.pathname==="/"?n.jsx("div",{style:{height:"100vh",width:"100%"},children:n.jsx(Oc,{children:n.jsx(pn,{path:"/",element:n.jsx(nv,{})})})}):n.jsxs("div",{className:"d-flex",style:{minHeight:"100vh"},children:[n.jsx("div",{className:"d-md-none hamburger-container",children:n.jsx("button",{className:`btn hamburger-btn ${r?"dark-mode":""}`,onClick:()=>d(!c),"aria-label":"Toggle navigation menu",children:n.jsx("span",{style:{fontSize:"1.3rem",fontWeight:"bold"},children:"☰"})})}),c&&n.jsx("div",{className:"d-md-none position-fixed w-100 h-100",style:{top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:1040},onClick:()=>d(!1)}),n.jsxs("nav",{className:`d-flex flex-column p-3 ${r?"navbar-dark-mode":"navbar-light-mode"} mobile-sidebar ${c?"show d-block":"d-none d-md-flex"}`,style:{width:"250px",minHeight:"100vh",transition:"all 0.3s ease",borderRight:`2px solid ${r?"#495057":"#dee2e6"}`,boxShadow:"2px 0 10px rgba(0, 0, 0, 0.1)",borderRadius:"10px",...window.innerWidth<768?{position:"fixed",top:0,left:0,zIndex:1045}:{}},onMouseEnter:_=>{_.target.style.boxShadow="2px 0 15px rgba(0, 0, 0, 0.2)"},onMouseLeave:_=>{_.target.style.boxShadow="2px 0 10px rgba(0, 0, 0, 0.1)"},children:[n.jsx("div",{className:"d-md-none d-flex justify-content-end mb-2",children:n.jsx("button",{className:`btn btn-sm ${r?"btn-light":"btn-dark"}`,onClick:()=>d(!1),style:{padding:"4px 8px",borderRadius:"4px"},children:"✕"})}),n.jsxs("div",{className:"text-center mb-4",children:[n.jsxs("div",{className:"d-flex align-items-center justify-content-center mb-2",style:{flexWrap:"nowrap"},children:[n.jsx("h1",{className:"mb-0",style:{whiteSpace:"nowrap",marginRight:".5rem"},children:n.jsx("span",{className:`app-title ${r?"metallic-shadow-dark":"metallic-shadow-light"}`,style:{cursor:"pointer",transition:"all 0.3s ease",fontSize:"2.2rem",fontWeight:"bold",letterSpacing:"1px"},onMouseEnter:_=>{_.target.style.transform="scale(1.1)",_.target.style.textShadow="0 0 10px rgba(0, 123, 255, 0.5)"},onMouseLeave:_=>{_.target.style.transform="scale(1)",_.target.style.textShadow=""},onClick:()=>window.location.href="/dashboard",children:"X-PENSE"})}),n.jsx("span",{className:"badge badge-danger border p-1",style:{transition:"all 0.3s ease",cursor:"default",fontSize:"0.65rem",whiteSpace:"nowrap"},onMouseEnter:_=>{_.target.style.transform="scale(1.05)",_.target.style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"},onMouseLeave:_=>{_.target.style.transform="scale(1)",_.target.style.boxShadow=""},children:"Ai-Powered"})]}),n.jsxs("button",{onClick:o,className:"btn btn-sm w-100",style:{background:r?"linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)":"linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",color:r?"#1a1a1a":"#ffffff",border:`2px solid ${r?"#ffd700":"#64748b"}`,fontSize:"12px",padding:"10px 16px",borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)",transform:"scale(1)",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",backdropFilter:"blur(10px)",maxWidth:"100%"},onMouseEnter:_=>{_.target.style.transform="scale(1.05)",_.target.style.boxShadow=r?"0 6px 20px rgba(255, 215, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)":"0 6px 20px rgba(30, 41, 59, 0.4), 0 0 30px rgba(30, 41, 59, 0.2)"},onMouseLeave:_=>{_.target.style.transform="scale(1)",_.target.style.boxShadow=r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)"},onMouseDown:_=>{_.target.style.transform="scale(0.98)"},onMouseUp:_=>{_.target.style.transform="scale(1.05)",setTimeout(()=>{_.target.style.transform="scale(1)"},150)},children:[n.jsx("span",{style:{fontSize:"16px"},children:r?"☀️":"🌙"}),n.jsx("span",{style:{fontSize:"12px",letterSpacing:"0.5px"},children:r?"LIGHT MODE":"DARK MODE"})]})]}),n.jsxs("ul",{className:`nav nav-pills flex-column ${r?"nav-tabs-bg-dark-mode":"nav-tabs-bg-light-mode"}`,style:{display:"flex",flexDirection:"column",width:"100%",listStyle:"none",margin:0,padding:0},children:[n.jsx("li",{className:"nav-item mb-2",style:{width:"100%",display:"block",marginBottom:"8px"},children:n.jsxs($n,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/dashboard",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",padding:"12px 16px",boxSizing:"border-box"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Wc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Dashboard"]})}),n.jsx("li",{className:"nav-item mb-2",style:{width:"100%",display:"block",marginBottom:"8px"},children:n.jsxs($n,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/budget",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease",width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start",textAlign:"left",padding:"12px 16px",boxSizing:"border-box"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Hc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Budget"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs($n,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/balance",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Gc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Balance"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs($n,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-success text-white":""}`,to:"/add",style:({isActive:_})=>({backgroundColor:_?"#28a745":"",transform:"scale(1)",transition:"all 0.3s ease",fontWeight:"bold"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor="#28a745",_.target.style.color="white")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="",_.target.style.color="")},children:[n.jsx(nx,{size:18,className:"me-2",style:{marginRight:"12px"}}),n.jsx("strong",{children:"X-PENSE"})]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs($n,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/transactions",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Yc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Transactions"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs($n,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/goals",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(qc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Goals"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs($n,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-primary text-white":""}`,to:"/investments",style:({isActive:_})=>({backgroundColor:_?"#007bff":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor=r?"#495057":"#e9ecef")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="")},children:[n.jsx(Vc,{size:18,className:"me-2",style:{marginRight:"12px"}}),"Investments"]})}),n.jsx("li",{className:"nav-item mb-2",children:n.jsxs($n,{className:({isActive:_})=>`nav-link d-flex align-items-center ${r?"nav-link-dark-mode":"nav-link-light-mode"} border transition-all ${_?"active bg-info text-white":""}`,to:"/ai-demo",style:({isActive:_})=>({backgroundColor:_?"#17a2b8":"",transform:"scale(1)",transition:"all 0.3s ease"}),onMouseEnter:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1.05)",_.target.style.backgroundColor="#17a2b8",_.target.style.color="white")},onMouseLeave:_=>{_.target.classList.contains("active")||(_.target.style.transform="scale(1)",_.target.style.backgroundColor="",_.target.style.color="")},children:[n.jsx(Mc,{size:18,className:"me-2",style:{marginRight:"12px"}}),n.jsx("strong",{children:"AI Demo"})]})})]}),n.jsx("div",{className:"mt-3 pt-3",style:{borderTop:`1px solid ${r?"#495057":"#dee2e6"}`,marginTop:"auto"},children:n.jsx("div",{className:`text-center p-3 rounded ${r?"bg-secondary":"bg-light"}`,style:{transition:"all 0.3s ease",background:r?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",border:`1px solid ${r?"#4a5568":"#dee2e6"}`,boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)"},children:n.jsxs("small",{className:`${r?"text-light":"text-dark"}`,style:{fontSize:"13px",fontWeight:"500",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[n.jsx("span",{children:"👤"}),n.jsx("span",{children:"Welcome Marlon"}),n.jsx("span",{children:"🟢"}),n.jsx("span",{children:"Online"})]})})})]}),n.jsxs("div",{className:"flex-grow-1 p-4",style:{paddingTop:window.innerWidth<768?"60px":"1rem"},children:[n.jsx("div",{className:"d-md-none mb-3",children:n.jsxs("button",{onClick:o,className:"btn btn-sm w-100",style:{background:r?"linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff59d 100%)":"linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",color:r?"#1a1a1a":"#ffffff",border:`2px solid ${r?"#ffd700":"#64748b"}`,fontSize:"11px",padding:"8px 16px",borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)",transform:"scale(1)",fontWeight:"600",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",backdropFilter:"blur(10px)",maxWidth:"100%"},onMouseDown:_=>{_.target.style.transform="scale(0.95)"},onMouseUp:_=>{_.target.style.transform="scale(1.05)",setTimeout(()=>{_.target.style.transform="scale(1)"},150)},onTouchStart:_=>{_.target.style.transform="scale(0.95)",_.target.style.boxShadow=r?"0 2px 8px rgba(255, 215, 0, 0.5)":"0 2px 8px rgba(30, 41, 59, 0.5)"},onTouchEnd:_=>{_.target.style.transform="scale(1.05)",setTimeout(()=>{_.target.style.transform="scale(1)",_.target.style.boxShadow=r?"0 4px 15px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.1)":"0 4px 15px rgba(30, 41, 59, 0.3), 0 0 20px rgba(30, 41, 59, 0.1)"},150)},children:[n.jsx("span",{style:{fontSize:"14px"},children:r?"☀️":"🌙"}),n.jsx("span",{style:{fontSize:"10px",letterSpacing:"0.5px"},children:r?"LIGHT":"DARK"})]})}),n.jsxs(Oc,{children:[n.jsx(pn,{path:"/",element:n.jsx(v1,{to:"/dashboard",replace:!0})}),n.jsx(pn,{path:"/dashboard",element:n.jsx(Y1,{transactions:u,balance:G,budget:y,investments:an,totalAmount:T,darkMode:r,formatAmount:ye,addedInvestments:I,goals:gn,setGoals:ct,formatCurrency:L,formatDate:O,handleRemoveInvestment:Ye,goalsProgress:pt,setGoalsProgress:rn,totalBudgetAmount:P,parseDate:q,setItems:Y,setBalances:$e,setCashOnHand:oe,setBankAccountBalance:ke,setSavings:D,setTransactions:m,setAddedInvestments:K,setInvestments:qt,setAmounts:Fn})}),n.jsx(pn,{path:"/budget",element:n.jsx(z1,{balance:g,budget:y,setBudget:w,darkMode:r,validated:It,setValidated:b,formatCurrency:L,items:A,setItems:Y,name:V,setName:R,amount:M,setAmount:ne,newBudget:pe,setNewBudget:we,error:be,setError:ve,editingIndex:Oe,setEditingIndex:E,editAmount:Q,setEditAmount:se,date:on,setDate:Mt,totalBudgetAmount:P,parseDate:q})}),n.jsx(pn,{path:"/balance",element:n.jsx(B1,{balance:g,setBalance:S,transactions:u,budget:y,darkMode:r,validated:It,setValidated:b,cashOnHand:Z,setCashOnHand:oe,bankAccountBalance:Te,setBankAccountBalance:ke,savings:Ne,setSavings:D,total:le,setTotal:fe,formatCurrency:L,balanceId:re,setBalanceId:ie,balances:ue,setBalances:$e,editIndex:Ge,setEditIndex:ee,editBalance:J,setEditBalance:Ae,balanceError:ze,setBalanceError:Pt})}),n.jsx(pn,{path:"/transactions",element:n.jsx(q1,{transactions:u,setTransactions:m,darkMode:r,validated:It,setValidated:b,formatCurrency:L,totalAmount:T,setTotalAmount:k,editIndex:Ge,setEditIndex:ee,editTransaction:Be,setEditTransaction:tt,reminderDate:We,setReminderDate:He,successMessage:Ft,setSuccessMessage:St,parseDate:q})}),n.jsx(pn,{path:"/add",element:n.jsx(L1,{darkMode:r,validated:It,setValidated:b,amount:M,setAmount:ne,category:sn,setCategory:Vt,date:on,setDate:Mt,description:Xn,setDescription:jn})}),n.jsx(pn,{path:"/goals",element:n.jsx(V1,{goalAmount:Ie,setGoalAmount:dt,currentAmount:Ze,setCurrentAmount:ut,newGoalName:Ke,setNewGoalName:Je,newGoalAmount:ft,setNewGoalAmount:mt,progPercentage:yn,setProgPercentage:Ot,goals:gn,setGoals:ct,validated:It,setValidated:b,inputAmounts:At,setInputAmounts:Yt,editingGoalId:H,setEditingGoalId:X,editedGoalName:ce,setEditedGoalName:je,formatCurrency:L,darkMode:r})}),n.jsx(pn,{path:"/investments",element:n.jsx(ev,{formatAmount:ye,formatCurrency:L,darkMode:r,onAddInvestment:_=>{const Lt=I.findIndex(ln=>ln.id===_.id);if(Lt!==-1){const ln=[...I];ln[Lt]={...ln[Lt],amount:ln[Lt].amount+_.amount,totalPrice:ln[Lt].totalPrice+_.totalPrice},K(ln)}else K([...I,_])},validated:It,setValidated:b,investments:an,setInvestments:qt,amounts:wn,setAmounts:Fn,marketCaps:Jn,setMarketCaps:In,addedInvestments:I,setAddedInvestments:K})}),n.jsx(pn,{path:"/ai-demo",element:n.jsx(rv,{darkMode:r})})]}),n.jsx(Rd,{})]})]}),i.pathname!=="/"&&n.jsx(sv,{darkMode:r})]})}const sv=({darkMode:s})=>{const i=Kn(),r=[{path:"/dashboard",icon:Wc,label:"Dashboard"},{path:"/budget",icon:Hc,label:"Budget"},{path:"/balance",icon:Gc,label:"Balance"},{path:"/transactions",icon:Yc,label:"Transactions"},{path:"/goals",icon:qc,label:"Goals"},{path:"/investments",icon:Vc,label:"Investments"},{path:"/ai-demo",icon:Mc,label:"AI Demo"}];return n.jsx("nav",{className:"d-md-none",style:{position:"fixed",bottom:"0",left:"0",right:"0",width:"100%",background:s?"linear-gradient(135deg, #2d3748 0%, #4a5568 100%)":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",borderTop:`2px solid ${s?"#4a5568":"#dee2e6"}`,padding:"6px 4px",boxShadow:"0 -4px 20px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(10px)",zIndex:9999,height:"60px",boxSizing:"border-box",transform:"translateZ(0)"},children:n.jsx("div",{className:"mobile-nav-container",style:{display:"flex",alignItems:"center",width:"100%",height:"100%",overflowX:"auto",overflowY:"hidden",padding:"0 2px"},children:r.map((o,c)=>{const d=o.icon,u=i.pathname===o.path;return n.jsxs($n,{to:o.path,className:"text-decoration-none",onClick:()=>{window.innerWidth<=768&&(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,setTimeout(()=>{window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0},50))},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"4px 2px",minWidth:"50px",maxWidth:"80px",flex:"1 1 auto",borderRadius:"12px",margin:"0 1px",transition:"all 0.2s ease",color:u?"#4299e1":s?"#a0aec0":"#6c757d",background:u?"rgba(66, 153, 225, 0.15)":"transparent",textAlign:"center"},children:[n.jsx(d,{size:16,style:{marginBottom:"2px",strokeWidth:u?2.5:2,flexShrink:0}}),n.jsx("span",{style:{fontSize:"9px",fontWeight:u?"600":"500",lineHeight:"1.1",display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},children:o.label})]},c)})})})};ax.createRoot(document.getElementById("root")).render(n.jsx(av,{}));
