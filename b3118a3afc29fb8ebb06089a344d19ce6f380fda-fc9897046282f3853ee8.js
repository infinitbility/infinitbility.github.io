(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4WqL":function(e,t,r){var n=r("k1El")("jsonp");e.exports=function(e,t,r){"function"==typeof t&&(r=t,t={});t||(t={});var c,i,s=t.prefix||"__jp",u=t.name||s+o++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,p=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;f&&(i=setTimeout((function(){h(),r&&r(new Error("Timeout"))}),f));function h(){c.parentNode&&c.parentNode.removeChild(c),window[u]=a,i&&clearTimeout(i)}return window[u]=function(e){n("jsonp got",e),h(),r&&r(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+p(u)).replace("?&","?"),n('jsonp req "%s"',e),(c=document.createElement("script")).src=e,d.parentNode.insertBefore(c,d),function(){window[u]&&h()}};var o=0;function a(){}},"5IsQ":function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var s,u=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=i(p);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||l||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},ADQ3:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n,o,a,c,i=r("Bt0p"),s=r("5Md4"),u=(r("mXGw"),r("FQY5")),l=r("5++h"),f=r("aD51"),p=function(e){e.slot;return Object(f.jsx)(u.a,{narrow:!0},Object(f.jsx)(d,null,Object(f.jsx)(h,null,Object(f.jsx)("div",{dangerouslySetInnerHTML:{__html:"<div className='gcse-search'></div>"}}))))},d=Object(s.a)("div",{target:"e1vfrykh0"})("position:relative;display:flex;flex-direction:column;margin:50px auto 100px;z-index:1;",l.a.tablet(n||(n=Object(i.a)(["\n    padding: 50px 0 0;\n    text-align: center;\n  "])))," ",l.a.phablet(o||(o=Object(i.a)(["\n    margin: 20px auto 80px;\n  "])))),h=Object(s.a)("div",{target:"e1vfrykh1"})("margin:0 auto;width:100%;",l.a.tablet(a||(a=Object(i.a)(["\n    h3 {\n      padding: 0 50px;\n    }\n  "])))," ",l.a.phone(c||(c=Object(i.a)(["\n    h3 {\n      padding: 0 24px;\n    }\n  "]))))},C0LV:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r("4WqL"))&&n.__esModule?n:{default:n},a=r("IqDU");var c=function(e){var t=e.url,r=e.timeout;return new Promise((function(e,n){return(0,o.default)(t,{param:"c",timeout:r},(function(t,r){t&&n(t),r&&e(r)}))}))},i=function(e){var t="";for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n="group["===r.substring(0,6)?r:r.toUpperCase();t=t.concat("&".concat(n,"=").concat(e[r]))}return t},s=function(e,t,r){var n=(0,a.validate)(e),o=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var s="https://infinitbility.us17.list-manage.com/subscribe/post?u=5c790185f6d2335947b7dc7fe&amp;id=923dcbc321",u=3500;arguments.length<3&&"string"==typeof t?s=t:"string"==typeof r&&(s=r),s=s.replace(/\/post/g,"/post-json");var l="&EMAIL=".concat(o).concat(i(t)),f="".concat(s).concat(l);return c({url:f,timeout:u})};t.default=s},IqDU:function(e,t,r){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},LUg8:function(e,t,r){var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var c=new Array(arguments.length),i=0;i<c.length;i++)c[i]=arguments[i];c[0]=t.coerce(c[0]),"string"!=typeof c[0]&&c.unshift("%O");var s=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;s++;var o=t.formatters[n];if("function"==typeof o){var a=c[s];r=o.call(e,a),c.splice(s,1),s--}return r})),t.formatArgs.call(e,c);var u=r.log||t.log||console.log.bind(console);u.apply(e,c)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r("Qb+q"),t.names=[],t.skips=[],t.formatters={}},"Qb+q":function(e,t){var r=1e3,n=6e4,o=60*n,a=24*o;function c(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,t){t=t||{};var i,s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*c;case"days":case"day":case"d":return c*a;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===s&&!1===isNaN(e))return t.long?c(i=e,a,"day")||c(i,o,"hour")||c(i,n,"minute")||c(i,r,"second")||i+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},WIMD:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n,o=r("Bt0p"),a=r("5Md4"),c=(r("mXGw"),r("FQY5")),i=r("D3RC"),s=r("5++h"),u=r("aD51"),l=Object(a.a)((function(e){return Object(u.jsx)("a",e)}),{target:"erj6n9n0"})({name:"g9t4ld",styles:"cursor:pointer;color:#6166dc;padding:10px;margin-left:10px;margin-top:10px;background-color:#f1f1f1;text-align:center;"}),f=function(){return Object(u.jsx)(c.a,{narrow:!0},Object(u.jsx)(d,null,"Guide book"),Object(u.jsx)(p,null,Object(u.jsx)(l,{href:"/guidebook-the-javascript-monorepo"}," Guidebook: The Javascript Monorepo"),Object(u.jsx)(l,{href:"https://aguidehub.com/tags/photoshop",target:"_BLANK"}," Photoshop Guide")),Object(u.jsx)(d,null,"Tutorials"),Object(u.jsx)(p,null,Object(u.jsx)(h,{href:"https://infinitbility.com/react-native"},"React Native")),Object(u.jsx)(d,null,"Categories"),Object(u.jsx)(p,null,Object(u.jsx)(l,{href:"/category/laravel"}," Laravel"),Object(u.jsx)(l,{href:"/category/guidebook"}," Guidebook"),Object(u.jsx)(l,{href:"/category/typescript"}," TypeScript"),Object(u.jsx)(l,{href:"/category/react-native"}," React Native"),Object(u.jsx)(l,{href:"/category/node"}," Node"),Object(u.jsx)(l,{href:"/category/apache"}," Apache"),Object(u.jsx)(l,{href:"/category/ubuntu"}," Ubuntu"),Object(u.jsx)(l,{href:"/category/css"}," CSS"),Object(u.jsx)(l,{href:"/category/security"}," Security"),Object(u.jsx)(l,{href:"/category/react-navigation"}," React Navigation"),Object(u.jsx)(l,{href:"/category/cron"}," CRON"),Object(u.jsx)(l,{href:"/category/yajra"}," Yajra"),Object(u.jsx)(l,{href:"/category/firebase"}," Firebase"),Object(u.jsx)(l,{href:"/category/python"}," Python"),Object(u.jsx)(l,{href:"/category/javascript"}," Javascript"),Object(u.jsx)(l,{href:"/category/php"}," PHP"),Object(u.jsx)(l,{href:"/category/cakephp"}," Cakephp"),Object(u.jsx)(l,{href:"/category/cloudflare"}," Cloudflare"),Object(u.jsx)(l,{href:"/category/react"}," React"),Object(u.jsx)(l,{href:"/category/svn"}," SVN"),Object(u.jsx)(l,{href:"/category/xcode"}," Xcode"),Object(u.jsx)(l,{href:"/category/aws-s3"}," AWS S3"),Object(u.jsx)(l,{href:"/category/mustache"}," Mustache"),Object(u.jsx)(l,{href:"/category/windows"}," Windows"),Object(u.jsx)(l,{href:"/category/microsoft-office"}," Microsoft Office"),Object(u.jsx)(l,{href:"/category/gatsby"}," Gatsby"),Object(u.jsx)(l,{href:"/category/ssl"}," SSL"),Object(u.jsx)(l,{href:"/category/infinitbility"}," Infinitbility")))},p=Object(a.a)("div",{target:"erj6n9n1"})("position:relative;display:flex;flex-direction:row;flex-wrap:wrap;padding-bottom:10px;background:",(function(e){return e.theme.colors.card}),";box-shadow:0px 4px 50px rgba(0,0,0,0.05);z-index:1;overflow-x:auto;"),d=Object(a.a)(i.a.h3,{target:"erj6n9n2"})("margin-bottom:20px;margin-top:20px;color:",(function(e){return e.theme.colors.grey}),";",s.a.tablet(n||(n=Object(o.a)(["\n    margin-bottom: 15px;\n  "])))),h=Object(a.a)("a",{target:"erj6n9n3"})({name:"g9t4ld",styles:"cursor:pointer;color:#6166dc;padding:10px;margin-left:10px;margin-top:10px;background-color:#f1f1f1;text-align:center;"})},k1El:function(e,t,r){(function(n){function o(){var e;try{e=t.storage.debug}catch(r){}return!e&&void 0!==n&&"env"in n&&(e={}.DEBUG),e}(t=e.exports=r("LUg8")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())}).call(this,r("5IsQ"))},kiUK:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n,o,a,c,i,s,u,l,f,p,d,h=r("Bt0p"),b=r("5Md4"),g=r("C0LV"),m=r.n(g),j=r("mXGw"),x=r("FQY5"),y=r("D3RC"),v=r("5++h"),O=r("aD51"),w=function(){var e=["/guidebook-the-javascript-monorepo"],t=Object(j.useState)(""),r=t[0],n=t[1],o=Object(j.useState)(""),a=o[0],c=o[1],i=Object(j.useState)(!1),s=i[0],u=i[1],l=Object(j.useState)(!1),f=l[0],p=l[1];return Object(j.useEffect)((function(){p(e.includes(window.location.pathname))}),[]),Object(O.jsx)(x.a,{narrow:!0},Object(O.jsx)(L,null,"Follow me on ",Object(O.jsx)("a",{href:"https://twitter.com/infinitbility",target:"_BLANK"},"Twitter")),Object(O.jsx)(k,null,Object(O.jsx)(E,null,Object(O.jsx)(T,null,f?"Download Guidebook":"Join our email list and get notified about new content"),!f&&Object(O.jsx)(A,null,"No worries, I respect your privacy and I will never abuse your email."),!f&&Object(O.jsx)(A,null,"Every week, on Tuesday, you will receive a list of free tutorials I made during the week (I write one every day) and news on other training products I create."),Object(O.jsx)(S,{onSubmit:function(e){e.preventDefault(),m()(r).then((function(e){if("error"===e.result)throw e;u(!0),n(""),f&&window.open("https://cutt.ly/cRVnMsI","_blank").focus(),setTimeout((function(){u(!1)}),6e3)})).catch((function(e){c(e.msg)}))},hasError:a},Object(O.jsx)(C,{placeholder:"your@email.com",name:"email",type:"email",value:r,onChange:function(e){n(e.currentTarget.value),c("")},hasError:a}),Object(O.jsx)(M,{type:"submit",hasError:a,subscribed:s,disabled:s},s?Object(O.jsx)(N,null):"Subscribe"),a&&Object(O.jsx)(I,{dangerouslySetInnerHTML:{__html:a}})))))},k=Object(b.a)("div",{target:"e9rlixp0"})("position:relative;display:flex;flex-direction:column;padding:64px 0 55px;margin:10px auto 100px;border:2px solid ",(function(e){return e.theme.colors.accent}),";z-index:1;",v.a.tablet(n||(n=Object(h.a)(["\n    padding: 50px 0 0;\n    text-align: center;\n  "])))," ",v.a.phablet(o||(o=Object(h.a)(["\n    margin: -20px auto 80px;\n  "])))),E=Object(b.a)("div",{target:"e9rlixp1"})("margin:0 auto;width:100%;max-width:640px;",v.a.tablet(a||(a=Object(h.a)(["\n    h3 {\n      padding: 0 50px;\n    }\n  "])))," ",v.a.phone(c||(c=Object(h.a)(["\n    h3 {\n      padding: 0 24px;\n    }\n  "])))),T=Object(b.a)(y.a.h3,{target:"e9rlixp2"})("margin-bottom:20px;",v.a.tablet(i||(i=Object(h.a)(["\n    margin-bottom: 15px;\n  "])))),L=Object(b.a)(y.a.h3,{target:"e9rlixp3"})("margin-bottom:20px;text-align:center;",v.a.tablet(s||(s=Object(h.a)(["\n    margin-bottom: 15px;\n  "])))),A=Object(b.a)("p",{target:"e9rlixp4"})("margin:0 auto 30px;color:",(function(e){return e.theme.colors.grey}),";line-height:1.75;",v.a.tablet(u||(u=Object(h.a)(["\n    padding: 0 26px;\n    margin: 0 auto 25px;\n  "])))),S=Object(b.a)("form",{target:"e9rlixp5"})('position:relative;&::after{content:">";position:absolute;left:21px;top:10px;color:',(function(e){return e.hasError?e.theme.colors.error:e.theme.colors.accent}),";",v.a.tablet(l||(l=Object(h.a)(["\n    left: 34px;\n    top: 11px;\n  "]))),"}"),C=Object(b.a)("input",{target:"e9rlixp6"})("position:relative;background:",(function(e){return e.hasError?e.theme.colors.errorBackground:e.theme.colors.inputBackground}),";border-radius:35px;border:none;padding:13px 21px 13px 35px;width:471px;color:",(function(e){return e.theme.colors.primary}),";::placeholder{color:",(function(e){return e.theme.colors.track}),";opacity:1;}:-ms-input-placeholder{color:",(function(e){return e.theme.colors.track}),";}::-ms-input-placeholder{color:",(function(e){return e.theme.colors.track}),";}",v.a.tablet(f||(f=Object(h.a)(["\n    width: calc(100% - 36px);\n    margin: 0 18px;\n    padding: 14px 14px 14px 30px;\n    margin-bottom: 30px;\n  "])))),M=Object(b.a)("button",{target:"e9rlixp8"})("position:absolute;left:306px;top:3px;display:flex;align-items:center;justify-content:center;width:161px;height:38px;border:1px solid ",(function(e){return e.hasError?e.theme.colors.error:e.theme.colors.accent}),";color:",(function(e){return e.hasError?e.theme.colors.error:e.theme.colors.accent}),";background:",(function(e){return e.subscribed?e.theme.colors.accent:"transparent"}),";font-weight:600;border-radius:35px;letter-spacing:0.42px;transition:border-color 0.2s var(--ease-in-out-quad),background 0.2s var(--ease-in-out-quad),color 0.2s var(--ease-in-out-quad);&:hover{background:",(function(e){return e.hasError?e.theme.colors.error:e.theme.colors.accent}),";color:",(function(e){return e.theme.colors.background}),";}&[disabled]{cursor:not-allowed;}svg *{fill:",(function(e){return e.theme.colors.background}),";}",(function(e){return v.a.tablet(p||(p=Object(h.a)(["\n    position: relative;\n    height: 60px;\n    width: 100%;\n    top: 0;\n    left: 0;\n    border: none;\n    border-radius: 0;\n    border-top: 1px solid ",";\n\n    &:hover {\n      color: initial;\n      background: initial;\n    }\n  "])),e.theme.colors.horizontalRule)})),I=Object(b.a)("div",{target:"e9rlixp9"})("position:absolute;left:35px;bottom:-20px;color:",(function(e){return e.theme.colors.error}),";font-size:12px;a{color:",(function(e){return e.theme.colors.error}),";text-decoration:underline;}",v.a.tablet(d||(d=Object(h.a)(["\n    left: 50px;\n    top: 50px;\n  "])))),N=function(){return Object(O.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(O.jsx)("path",{d:"M9.00016 16.1698L4.83016 11.9998L3.41016 13.4098L9.00016 18.9998L21.0002 6.99984L19.5902 5.58984L9.00016 16.1698Z",fill:"#08080B"}))}},sFbg:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("+I+c"),o=r("mXGw"),a=r("aD51"),c=["children"];var i=function(e){var t=e.children,r=Object(n.a)(e,c),i=Object(o.useState)(!1),s=i[0],u=i[1];return Object(o.useEffect)((function(){u(!0)}),[]),s?Object(a.jsx)("div",r,t):null}}}]);