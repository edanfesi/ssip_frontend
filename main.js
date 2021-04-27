(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),o=n(26),s=n(372),i=n(327),a=n(97),c=n(109),u=n(985),l=n(61);e.exports=function(e){return new Promise((function(t,n){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var g=a(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f};o(t,n,s),f=null}},f.onabort=function(){f&&(n(l("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){n(l("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var y=(e.withCredentials||u(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in f&&r.forEach(p,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:f.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),n(e),f=null)})),d||(d=null),f.send(d)}))}},609:(e,t,n)=>{"use strict";var r=n(867),o=n(849),s=n(321),i=n(185);function a(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=a(n(655));c.Axios=s,c.create=function(e){return a(i(c.defaults,e))},c.Cancel=n(263),c.CancelToken=n(972),c.isCancel=n(502),c.all=function(e){return Promise.all(e)},c.spread=n(713),c.isAxiosError=n(268),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),o=n(327),s=n(782),i=n(572),a=n(185);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=c},782:(e,t,n)=>{"use strict";var r=n(867);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,n)=>{"use strict";var r=n(793),o=n(303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},572:(e,t,n)=>{"use strict";var r=n(867),o=n(527),s=n(502),i=n(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(a,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=o.concat(s).concat(i).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(d,u),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},655:(e,t,n)=>{"use strict";var r=n(867),o=n(16),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=n(448)),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,n)=>{"use strict";var r=n(849),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},412:(e,t,n)=>{const r=e.exports,o=n(669),s="https://ssip-backend.herokuapp.com/api/ssip";r.getAllUsers=async()=>{const e=`${s}/user`;try{return await o.get(e)}catch(e){console.log("fetch error",e)}},r.getUserById=async e=>{const t=`${s}/user/${e}`;try{return await o.get(t)}catch(e){console.log("fetch error",e)}},r.createUser=async e=>{const t=`${s}/user`;try{return await o.put(t,e)}catch(e){console.log("fetch error",e)}},r.updateUser=async(e,t)=>{const n=`${s}/user/${e}`;try{return await o.put(n,t)}catch(e){console.log("fetch error",e)}},r.deleteUserById=async e=>{const t=`${s}/user/${e}`;try{return await o.delete(t)}catch(e){console.log("fetch error",e)}},r.loginUser=async e=>{const t=`${s}/user/auth`;try{return await o.post(t,e)}catch(e){console.log("fetch error",e)}},r.twoFactor=async(e,t)=>{const n=`${s}/user/2fa`;try{return await o.post(n,e,{headers:t})}catch(e){console.log("fetch error",e)}},r.logoutUser=async()=>{const e=`${s}/user/logout`;try{return await o.post(e)}catch(e){console.log("fetch error",e)}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(()=>{"use strict";const e=(n(412),()=>'\n    <div class="main-login">\n      <section class="login">\n        <h1 class="login--title">Welcome</h1>\n        <p class="login--text">It\'s good to see you here again</p>\n        <form action="" class="login-form">\n          <label for="username" class="login__card">\n            <p>Username</p>\n            <input type="text" id="username" placeholder="Username" required>\n          </label>\n          <label for="password" class="login__card">\n            <p>Password</p>\n            <input type="password" id="password" placeholder="Password" required>\n          </label>\n        </form>\n        <button class="login--submit" id="submit">Log in</button>\n      </section>\n    </div>\n  '),t=()=>'\n        <div class="Error404">\n            <h2>Error 404: Not Found</h2>\n        </div>\n    ',r=n(412),o=n(412),s={"/":e,"/:id":async()=>{const e=location.hash.slice(1).toLocaleLowerCase().split("/")[1];if(console.log(e),!e)return'\n        <div class="Error404">\n            <h2>Error 404: Not Found</h2>\n        </div>\n    ';const t=(await o.getUserById(parseInt(e))).data;if(!t)return'\n        <div class="Error404">\n            <h2>Error 404: Not Found</h2>\n        </div>\n    ';const n=t[0];let s="";return console.log(n),s=1===n.role_id?(async(e={})=>{console.log("Soy admin",JSON.stringify(e));const t=(await r.getAllUsers()).data.filter((t=>t.id!=e.id));return console.log(t),`\n  <div class="main-admin">\n    <div class="header__user">\n      <figure>\n        <img src="https://i.ibb.co/mC1fY21/user-icon.png" alt="Employee picture">\n      </figure>\n      <div class="header__user__body">\n        <h2>${e.name} ${e.last_name}</h2>\n        <p>${e.work_position}</p>\n      </div>\n      <div class="header__user--icons">\n        <figure id="add-employee">\n          <img src="https://i.ibb.co/vwyz2dZ/add-employee-icon.png" alt="add employee icon">\n        </figure>\n      </div>\n    </div>\n    <section class="search">\n      <p class="search--title">Users</p>\n      <form action="">\n        <input type="search" placeholder="Search..." id="inputSearch" class="inputSearch">\n      </form>\n    </section>\n    <section class="employees" id="employee_list">\n      ${t.map((e=>`\n        <div class="employee__left">\n          <figure>\n            <img src="https://i.ibb.co/mC1fY21/user-icon.png" alt="Employee picture">\n            <div class="is-active"></div>\n          </figure>\n          <div class="employee__info">\n            <p class="employee__info--name">${e.name} ${e.last_name}</p>\n            <p class="employee__info--position">${e.work_position}</p>\n          </div>\n        </div>\n        <a href="/ssip_frontend/#/${e.id}" class="view" id="view-information">View</a>\n      `)).join("")}\n    </section>\n    <section class="add__container" id="add__container">\n      <div class="add add-close" id="add">\n        <p class="close" id="close-add">X</p>\n        <h2>Add new employee</h2>\n        <form class="add_form" id="add_form">\n          <div>\n            <label for="name">Name</label>\n            <input type="text" class="name_input" id="name" placeholder="Name..." name="name">\n          </div>\n    \n          <div>\n            <label for="last_name">Last name</label>\n            <input type="text" class="name_input" id="last_name" placeholder="Last name..." name="last_name">\n          </div>\n    \n          <div>\n            <label for="department">Department</label>\n            <input type="text" class="name_input" id="department" placeholder="Department..." name="department">\n          </div>\n    \n          <div>\n            <label for="position">Position</label>\n            <input type="text" class="name_input" id="position" placeholder="Position..." name="work_position">\n          </div>\n    \n          <div>\n            <label for="password">Password</label>\n            <input type="text" class="name_input" id="password" placeholder="Password..." name="pass">\n          </div>\n    \n          <div>\n            <label for="entry_date">Entry date</label>\n            <input type="date" class="name_input" id="Entry_date" name="created_at">\n          </div>\n          <button type="submit" class="btn-add" id="btn-add">Add</button>\n        </form>\n      </div>\n    </section>\n  </div>\n  `})(n):((e={})=>(console.log("Soy un employee",JSON.stringify(e)),`\n  <div class="main-employee">\n    <section class="header__user">\n      <figure>\n        <img src="https://i.ibb.co/mC1fY21/user-icon.png" class="header__user--profile" alt="Employee picture">\n      </figure>\n      <div class="header__user__body">\n        <h2>Name: ${e.name} ${e.last_name}</h2>\n        <p>Work position: ${e.work_position}</p>\n        <p>Country: ${e.country}</p>\n        <p>Department: ${e.department}</p>\n        <p>Created at: ${e.created_at}</p>\n      </div>\n    </section>\n    <section class="logged-in">\n      <img src="https://i.ibb.co/7pnXZyn/success.png" alt="success">\n      <p class="logged-in--title">You are logged in</p>\n      <p class="logged-in--text">time remaining: </p>\n      <p class="logged-in--time" id="temporizador">40</p>\n    </section>\n  </div>`))(n),s},"/2fa":()=>'\n  <div class="main-two">\n    <div class="two-factor">\n      <p class="two-factor--title">Verify your account</p>\n      <div class="two-factor__input">\n        <p>You\'ve received a email with your code.</p>\n        <img src="https://i.ibb.co/JCwRxsF/two-Factor-Draw.png" alt="Two factor image" class="two-factor__input--image">\n        <form action="" class="phone-form" id="phone_form">\n          <input type="text" maxlength="1" title="Agrega el codigo" required id="input-token-1">\n          <input type="text" maxlength="1" title="Agrega el codigo" required id="input-token-2">\n          <input type="text" maxlength="1" title="Agrega el codigo" required id="input-token-3">\n          <input type="text" maxlength="1" title="Agrega el codigo" required id="input-token-4">\n        </form>\n      </div>\n      <button form="phone_form" id="two-factor-submit">Verify</button>\n    </div>\n  </div>\n  '};const i=n(412);async function a(){const e=document.getElementById("username")||null,t=document.getElementById("password")||null;if(e&&t){const n={username:e.value,password:t.value},r=await i.loginUser(n);console.log(JSON.stringify(r)),204==r.status&&(window.localStorage.setItem("username",e.value),location.href=`${window.location.origin}/ssip_frontend/#/2fa`)}}async function c(){const e=document.getElementById("input-token-1")||null,t=document.getElementById("input-token-2")||null,n=document.getElementById("input-token-3")||null,r=document.getElementById("input-token-4")||null;if(e&&t&&n&&r){console.log("localstorage",localStorage.getItem("username"));const o=e.value+t.value+n.value+r.value,s=await i.twoFactor({token:o},{"AUTH-USER":localStorage.getItem("username")});console.log(JSON.stringify(s)),200==s.status&&(console.log(s.data[0]),location.href=`${window.location.origin}/ssip_frontend/#/${s.data[0].id}`)}}const u=async()=>{const e=document.getElementById("header"),n=document.getElementById("content"),r=document.getElementById("footer");e.innerHTML=await'\n        <img src="https://i.ibb.co/KyLvN5X/Logo-ssip.png" alt="Logo ssip" class="logo">\n    ',n.innerHTML=await async function(){const e=(n=location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",console.log(n),n.length<=3?"/"===n?n:"2fa"===n?"/2fa":"/:id":`/${n}`);var n;return(s[e]||t)()}(),r.innerHTML=await'\n    <footer>\n      <p>Designed by:</p>\n      <ul class="footer-nav">\n        <li><p href="#">Sebas rivera</p></li>\n        <li><p href="#">Edward Antonio</p></li>\n      </ul>\n    </footer>\n  ',await async function(){(document.getElementById("submit")||{}).onclick=a,(document.getElementById("two-factor-submit")||{}).onclick=c}()};window.addEventListener("load",u),window.addEventListener("hashchange",u)})()})();