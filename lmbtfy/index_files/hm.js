(function(){var h={},mt={},c={id:"caacd328930dc318e533d0e39ee3203e",dm:["lmbtfy.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:["%5b%22http%3a%5c%2f%5c%2flmbtfy.cn%22%5d"],vdur:1800000,age:31536000000,qiao:0,pt:0,spa:0,aet:'',hca:'4306FBFBAC83BE30',ab:0,apps:''};var t=void 0,v=!0,w=null,y=!1;mt.cookie={};mt.cookie.set=function(a,e,b){var d;b.P&&(d=new Date,d.setTime(d.getTime()+b.P));document.cookie=a+"="+e+(b.domain?"; domain="+b.domain:"")+(b.path?"; path="+b.path:"")+(d?"; expires="+d.toGMTString():"")+(b.Gc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:w};
mt.cookie.hc=function(a,e){try{var b="Hm_ck_"+ +new Date;mt.cookie.set(b,"42",{domain:a,path:e,P:t});var d="42"===mt.cookie.get(b)?"1":"0";mt.cookie.set(b,"",{domain:a,path:e,P:-1});return d}catch(g){return"0"}};mt.lang={};mt.lang.o=function(a,e){return"[object "+e+"]"==={}.toString.call(a)};mt.lang.n=function(a){return mt.lang.o(a,"Function")};mt.lang.h=function(a){return mt.lang.o(a,"Object")};mt.lang.Ua=function(a){return mt.lang.o(a,"Number")&&isFinite(a)};
mt.lang.I=function(a){return mt.lang.o(a,"String")};mt.lang.isArray=function(a){return mt.lang.o(a,"Array")};mt.lang.g=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.find=function(a,e,b){if(mt.lang.isArray(a)&&mt.lang.n(e))for(var d=a.length,g=0;g<d;g++)if(g in a&&e.call(b||a,a[g],g))return a[g];return w};mt.lang.H=function(a,e){return mt.lang.find(a,function(b){return b===e})!=w};
mt.lang.filter=function(a,e){var b=-1,d=0,g=a==w?0:a.length,q=[];if(mt.lang.n(e))for(;++b<g;){var f=a[b];e(f,b,a)&&(q[d++]=f)}return q};mt.lang.unique=function(a,e){var b=a.length,d=a.slice(0),g,q;for(mt.lang.n(e)||(e=function(d,b){return d===b});0<--b;){q=d[b];for(g=b;g--;)if(e(q,d[g])){d.splice(b,1);break}}return d};
mt.lang.Fc=function(a,e){function b(b){b=(d+d+Number(b).toString(2)).slice(-64);return[parseInt(b.slice(0,32),2),parseInt(b.slice(-32),2)]}var d="00000000000000000000000000000000",g=b(a),q=b(e);return parseInt((d+((g[0]|q[0])>>>0).toString(2)).slice(-32)+(d+((g[1]|q[1])>>>0).toString(2)).slice(-32),2)};mt.url={};mt.url.i=function(a,e){var b=a.match(RegExp("(^|&|\\?|#)("+e+")=([^&#]*)(&|$|#)",""));return b?b[3]:w};
mt.url.Mb=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):w};mt.url.ya=function(a){return(a=mt.url.Mb(a))?a.replace(/:\d+$/,""):a};mt.url.ec=function(a){var e=document.location.href,e=e.replace(/^https?:\/\//,"");return 0===e.indexOf(a)};mt.url.fc=function(a,e){a="."+a.replace(/:\d+/,"");e="."+e.replace(/:\d+/,"");var b=a.indexOf(e);return-1<b&&b+e.length===a.length};
(function(){var a=mt.lang,e=mt.url;mt.e={};mt.e.Eb=function(b){return document.getElementById(b)};mt.e.wa=function(b){if(!b)return w;try{b=String(b);if(0===b.indexOf("!HMCQ!"))return b;if(0===b.indexOf("!HMCC!"))return document.querySelector(b.substring(6,b.length));for(var d=b.split(">"),a=document.body,e=d.length-1;0<=e;e--)if(-1<d[e].indexOf("#")){var f=d[e].split("#")[1];(a=document.getElementById(f))||(a=document.getElementById(decodeURIComponent(f)));d=d.splice(e+1,d.length-(e+1));break}for(b=
0;a&&b<d.length;){var k=String(d[b]).toLowerCase();if(!("html"===k||"body"===k)){var e=0,r=d[b].match(/\[(\d+)\]/i),f=[];if(r)e=r[1]-1,k=k.split("[")[0];else if(1!==a.childNodes.length){for(var p=0,u=0,n=a.childNodes.length;u<n;u++){var l=a.childNodes[u];1===l.nodeType&&l.nodeName.toLowerCase()===k&&p++;if(1<p)return w}if(1!==p)return w}for(p=0;p<a.childNodes.length;p++)1===a.childNodes[p].nodeType&&a.childNodes[p].nodeName.toLowerCase()===k&&f.push(a.childNodes[p]);if(!f[e])return w;a=f[e]}b++}return a}catch(s){return w}};
mt.e.Pa=function(b,d){var a=[],e=[];if(!b)return e;for(;b.parentNode!=w;){for(var f=0,k=0,r=b.parentNode.childNodes.length,p=0;p<r;p++){var u=b.parentNode.childNodes[p];if(u.nodeName===b.nodeName&&(f++,u===b&&(k=f),0<k&&1<f))break}if((r=""!==b.id)&&d){a.unshift("#"+encodeURIComponent(b.id));break}else r&&(r="#"+encodeURIComponent(b.id),r=0<a.length?r+">"+a.join(">"):r,e.push(r)),a.unshift(encodeURIComponent(String(b.nodeName).toLowerCase())+(1<f?"["+k+"]":""));b=b.parentNode}e.push(a.join(">"));return e};
mt.e.ia=function(b){return(b=mt.e.Pa(b,v))&&b.length?String(b[0]):""};mt.e.Pb=function(b){return mt.e.Pa(b,y)};mt.e.Ma=function(b){var d;for(d="A";(b=b.parentNode)&&1==b.nodeType;)if(b.tagName==d)return b;return w};mt.e.Ib=function(b){return 9===b.nodeType?b:b.ownerDocument||b.document};mt.e.Na=function(b){var d={top:0,left:0};if(!b)return d;var a=mt.e.Ib(b).documentElement;"undefined"!==typeof b.getBoundingClientRect&&(d=b.getBoundingClientRect());return{top:d.top+(window.pageYOffset||a.scrollTop)-
(a.clientTop||0),left:d.left+(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}};mt.e.getAttribute=function(b,d){var a=b.getAttribute&&b.getAttribute(d)||w;if(!a&&b.attributes&&b.attributes.length)for(var e=b.attributes,f=e.length,k=0;k<f;k++)e[k].nodeName===d&&(a=e[k].nodeValue);return a};mt.e.S=function(a){var d="document";a.tagName!==t&&(d=a.tagName);return d.toLowerCase()};mt.e.Sb=function(b){var d="";b.textContent?d=a.trim(b.textContent):b.innerText&&(d=a.trim(b.innerText));d&&(d=d.replace(/\s+/g,
" ").substring(0,255));return d};mt.e.R=function(b,d){var g;a.I(b)&&0===String(b).indexOf("!HMCQ!")?(g=String(b),g=e.i(document.location.href,g.substring(6,g.length))):a.I(b)||(g=mt.e.S(b),"input"===g&&d&&("button"===b.type||"submit"===b.type)?g=a.trim(b.value)||"":"input"===g&&!d&&"password"!==b.type?g=a.trim(b.value)||"":"img"===g?(g=mt.e.getAttribute,g=g(b,"alt")||g(b,"title")||g(b,"src")):g="body"===g||"html"===g?["(hm-default-content-for-",g,")"].join(""):mt.e.Sb(b));return String(g||"").substring(0,
255)};(function(){(mt.e.mc=function(){function a(){if(!a.ka){a.ka=v;for(var d=0,e=q.length;d<e;d++)q[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(d,1);return}a()}var e=y,q=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,y);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!e)if(e=v,"complete"===document.readyState)a.ka=v;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,y),window.addEventListener("load",a,y);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var k=y;try{k=window.frameElement==w}catch(r){}document.documentElement.doScroll&&k&&d()}})();return function(d){a.ka?d():q.push(d)}}()).ka=y})();return mt.e})();mt.event={};
mt.event.d=function(a,e,b){a.attachEvent?a.attachEvent("on"+e,function(d){b.call(a,d)}):a.addEventListener&&a.addEventListener(e,b,y)};
(function(){var a=mt.event;mt.f={};mt.f.Ba=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.f.cookieEnabled=navigator.cookieEnabled;mt.f.javaEnabled=navigator.javaEnabled();mt.f.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.f.oc=(window.screen.width||0)+"x"+(window.screen.height||0);mt.f.colorDepth=window.screen.colorDepth||0;mt.f.Rb=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&
a.body.scrollTop||0,10)};mt.f.Ra=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.f.G=function(){return mt.f.Rb()+mt.f.Ra()};mt.f.ib=0;mt.f.Tb=function(){var a=document;return parseInt(window.innerWidth||a.documentElement.clientWidth||a.body.offsetWidth||0,10)};mt.f.orientation=0;(function(){function e(){var a=0;window.orientation!==t&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==
t)&&(a=screen.orientation.angle);mt.f.orientation=a;mt.f.ib=mt.f.Tb()}e();a.d(window,"orientationchange",e)})();return mt.f})();mt.B={};mt.B.parse=function(a){return(new Function("return ("+a+")"))()};
mt.B.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=b[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function e(a){return 10>a?"0"+a:a}var b={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===w)return"null";if(d instanceof Array){var b=["["],q=d.length,f,k,r;for(k=0;k<q;k++)switch(r=d[k],typeof r){case "undefined":case "function":case "unknown":break;default:f&&b.push(","),b.push(mt.B.stringify(r)),f=1}b.push("]");return b.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+e(d.getMonth()+1)+"-"+e(d.getDate())+"T"+e(d.getHours())+":"+e(d.getMinutes())+":"+e(d.getSeconds())+'"';f=["{"];k=mt.B.stringify;for(q in d)if(Object.prototype.hasOwnProperty.call(d,q))switch(r=
d[q],typeof r){case "undefined":case "unknown":case "function":break;default:b&&f.push(","),b=1,f.push(k(q)+":"+k(r))}f.push("}");return f.join("")}}}();mt.localStorage={};mt.localStorage.ra=function(){if(!mt.localStorage.j)try{mt.localStorage.j=document.createElement("input"),mt.localStorage.j.type="hidden",mt.localStorage.j.style.display="none",mt.localStorage.j.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)}catch(a){return y}return v};
mt.localStorage.set=function(a,e,b){var d=new Date;d.setTime(d.getTime()+(b||31536E6));try{window.localStorage?(e=d.getTime()+"|"+e,window.localStorage.setItem(a,e)):mt.localStorage.ra()&&(mt.localStorage.j.expires=d.toUTCString(),mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.setAttribute(a,e),mt.localStorage.j.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var e=a.indexOf("|"),b=a.substring(0,e)-0;if(b&&b>(new Date).getTime())return a.substring(e+1)}}else if(mt.localStorage.ra())try{return mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.getAttribute(a)}catch(d){}return w};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.ra())try{mt.localStorage.j.load(document.location.hostname),mt.localStorage.j.removeAttribute(a),mt.localStorage.j.save(document.location.hostname)}catch(e){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,e){try{window.sessionStorage&&window.sessionStorage.setItem(a,e)}catch(b){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):w}catch(e){return w}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(e){}};
(function(){var a=mt.B;mt.N={};mt.N.log=function(a,b){var d=new Image,g="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[g]=d;d.onload=function(){d.onload=w;d=window[g]=w;b&&b(a)};d.src=a};mt.N.get=function(a,b){return mt.N.ob({url:a,method:"GET",data:b.data,timeout:b.timeout,noCache:v,success:b.success,fail:b.fail})};mt.N.ob=function(e){function b(m){var d=e[m];if(d)if(u&&clearTimeout(u),"success"!==m)d&&d(p);else{var b;try{b=a.parse(p.responseText)}catch(l){d&&d(p);return}d&&
d(p,b)}}e=e||{};var d=function(m){var a=[],d;for(d in m)m.hasOwnProperty(d)&&a.push(encodeURIComponent(d)+"="+encodeURIComponent(m[d]));return a.join("&")}(e.data||{}),g=e.url,q=(e.method||"GET").toUpperCase(),f=e.headers||{},k=e.timeout||0,r=e.noCache||y,p,u;try{a:if(window.XMLHttpRequest)p=new XMLHttpRequest;else{try{p=new ActiveXObject("Microsoft.XMLHTTP");break a}catch(n){}p=t}"GET"===q&&(d&&(g+=(0<=g.indexOf("?")?"&":"?")+d,d=w),r&&(g+=(0<=g.indexOf("?")?"&":"?")+"b"+ +new Date+"=1"));p.open(q,
g,v);p.onreadystatechange=function(){if(4===p.readyState){var m=0;try{m=p.status}catch(a){b("fail");return}200<=m&&300>m||304===m||1223===m?b("success"):b("fail")}};for(var l in f)f.hasOwnProperty(l)&&p.setRequestHeader(l,f[l]);k&&(u=setTimeout(function(){p.onreadystatechange=function(){};p.abort();b("fail")},k));p.send(d)}catch(s){b("fail")}return p};return mt.N})();
h.A={Ec:"http://tongji.baidu.com/hm-web/welcome/ico",Fa:"hm.baidu.com/hm.gif",pb:/^(tongji|hmcdn).baidu.com$/,xc:"tongji.baidu.com",Xb:"hmmd",Yb:"hmpl",Ac:"utm_medium",Wb:"hmkw",Cc:"utm_term",Ub:"hmci",zc:"utm_content",Zb:"hmsr",Bc:"utm_source",Vb:"hmcu",yc:"utm_campaign",Va:0,O:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",la:"https:",vb:6E5,pc:5E3,wb:5,da:1024,Y:2147483647,hb:"hca cc cf ci ck cl cm cp cu cw ds vl ep et ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
U:v,Ia:{id:"data-hm-id",ca:"data-hm-class",ba:"data-hm-xpath",content:"data-hm-content",oa:"data-hm-tag",link:"data-hm-link"},Ka:"data-hm-enabled",Ja:"data-hm-disabled",kc:"https://hmcdn.baidu.com/static/tongji/plugins/",bb:["UrlChangeTracker"]};(function(){var a={F:{},d:function(a,b){this.F[a]=this.F[a]||[];this.F[a].push(b)},L:function(a,b){this.F[a]=this.F[a]||[];for(var d=this.F[a].length,g=0;g<d;g++)this.F[a][g](b)}};return h.w=a})();
(function(){var a=mt.lang,e=/^https?:\/\//,b={Hb:function(a){var b;try{b=JSON.parse(decodeURIComponent(a[0]))}catch(e){}return b},Wa:function(a,e){return b.Xa(h.c&&h.c.b&&h.c.b.u,a,e)||b.Xa(document.location.href,a,e)},Xa:function(a,b,q){if(a===t)return y;e.test(b)||(a=a.replace(e,""));b=b.replace(/\/$/,"");a=a.replace(/\/$/,"");q&&(a=a.replace(/^(https?:\/\/)?www\./,"$1"));return RegExp("^"+b.replace(/[?.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*")+"$").test(a)},Q:function(d,e){var q=b.Hb(d);if(!a.o(q,
"Undefined")){if(a.isArray(q)){for(var f=0;f<q.length;f++)if(b.Wa(q[f],e))return v;return y}if(a.h(q)){var f=[],k;for(k in q)q.hasOwnProperty(k)&&b.Wa(k,e)&&(f=f.concat(q[k]));return f}}}};return h.fa=b})();
(function(){function a(a,d){var g=document.createElement("script");g.charset="utf-8";e.n(d)&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=w,d()}:g.onload=function(){d()});g.src=a;var q=document.getElementsByTagName("script")[0];q.parentNode.insertBefore(g,q)}var e=mt.lang;return h.load=a})();
(function(){var a=mt.url,e=mt.cookie,b=mt.localStorage,d=mt.sessionStorage,g={getData:function(a){try{return e.get(a)||d.get(a)||b.get(a)}catch(g){}},setData:function(a,f,k){try{e.set(a,f,{domain:g.ha(),path:g.va(),P:k}),k?b.set(a,f,k):d.set(a,f)}catch(r){}},removeData:function(a){try{e.set(a,"",{domain:g.ha(),path:g.va(),P:-1}),d.remove(a),b.remove(a)}catch(f){}},ha:function(){for(var d=document.location.hostname,b=0,e=c.dm.length;b<e;b++)if(a.fc(d,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,
"");return d},va:function(){for(var d=0,b=c.dm.length;d<b;d++){var e=c.dm[d];if(-1<e.indexOf("/")&&a.ec(e))return e.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.ea=g})();
(function(){var a=mt.lang,e=mt.B,b=h.ea,d={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},g={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},q=["session","user"],f="Hm_up_"+c.id,k={init:function(){k.bc()},bc:function(){try{var r=e.parse(decodeURIComponent(b.getData(f)));a.h(r)&&(d.user=r)}catch(p){}},z:function(a){var b={};d[a]!==t&&(b=d[a]);a=this.za();for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},za:function(){for(var a={},b,e=q.length-1;0<=
e;e--){b=d[q[e]];for(var n in b)b.hasOwnProperty(n)&&(a[n]=b[n])}return a},setProperty:function(b,p,g){var n=d[b];if(a.h(n)&&a.h(p)){for(var l in p)if(p.hasOwnProperty(l)){var f=a.g(String(l));if(g||!/^_/.test(f)&&!/_$/.test(f)||/^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(f)){var m=p[l];if(m==w)delete n[f];else{if(a.h(m)||a.isArray(m))m=e.stringify(m);m=a.g(String(m));k.gc(b,f,m)&&(n[f]={value:m,scope:k.Qa(b)})}}}"user"===b&&k.Da()}},s:function(b){b!==t&&("userId"===b&&a.h(d.user)?(delete d.user.uid_,
k.Da()):"user"===b&&a.h(d.user)?(b=d.user.uid_,d.user=b===t?{}:{uid_:b},k.Da()):d[b]!==t&&(d[b]={}))},Da:function(){try{b.setData(f,encodeURIComponent(e.stringify(d.user)),c.age)}catch(a){}},gc:function(a,b,e){var n=v,l=d[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(e)).length)n=y;else{var g=l[b];l[b]={value:e,scope:k.Qa(a)};a=k.K(k.z(a));2048<encodeURIComponent(a).length&&(g!==t?l[b]=g:delete l[b],n=y)}return n},K:function(a){var b=[],d,e;for(e in a)a.hasOwnProperty(e)&&
(d=[e,a[e].value],(1===a[e].scope||2===a[e].scope)&&d.push(a[e].scope),b.push(d.join("*")));return b.join("!")},Qa:function(a){a=g[a];return a!==t?a:g.others}};return h.M=k})();
(function(){var a=mt.e,e=mt.lang,b=h.w,d=h.fa,g=h.M,q=g.K;if(e.isArray(c.cptrk)&&0<c.cptrk.length){var f={$a:{},pa:{},init:function(){for(var a,b=d.Q(c.cptrk)||[],p=0;p<b.length;p++)if(a=b[p],a.a!==t&&e.h(a.a)){a=a.a;for(var g in a)a.hasOwnProperty(g)&&(f.pa[g]=String(a[g]))}},Za:function(){var b,d,e;for(e in f.pa)if(f.pa.hasOwnProperty(e)&&f.$a[e]===t&&(b=f.pa[e],b=a.wa(b)))d=d===t?{}:d,d[e]=a.R(b,y),f.$a[e]=v;return d},Aa:function(){var a=f.Za();a&&f.rc(a)},ac:function(){"MutationObserver"in window&&
document.body?(new MutationObserver(f.Aa)).observe(document.body,{childList:v,subtree:v}):window.setInterval(f.Aa,15E3)},rc:function(a){if(e.h(a)){g.setProperty("pageview",a);a=h.c.b.p;var b=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=q(g.z("pageview"));h.c.m();h.c.b.p=a;h.c.b.ep=b;g.s("pageview")}}};f.init();b.d("pv-b",function(){var a=f.Za();a&&g.setProperty("pageview",a)});f.ac();a.mc(f.Aa)}})();
(function(){var a=mt.lang,e=mt.e,b=h.fa,d={ga:function(a,q){return function(f){var k=f.target||f.srcElement;if(k){var r=b.Q(q)||[],p=k.getAttribute(a.qa);f=f.clientX+":"+f.clientY;if(p&&p===f)k.removeAttribute(a.qa);else if(0<r.length&&(k=e.Pb(k))&&k.length)if(r=k.length,p=k[k.length-1],1E4>r*p.split(">").length)for(p=0;p<r;p++)d.gb(a,k[p]);else d.gb(a,p)}}},gb:function(b,d){for(var e={},k=String(d).split(">").length,r=0;r<k;r++)e[d]="",d=d.substring(0,d.lastIndexOf(">"));b&&(a.h(b)&&b.La)&&b.La(e)},
nc:function(a,b){return function(d){(d.target||d.srcElement).setAttribute(a.qa,d.clientX+":"+d.clientY);a&&a.t&&(b?a.t(b):a.t("#"+encodeURIComponent(this.id),d.type))}}};return h.Ab=d})();
(function(){var a=mt.e,e=mt.event,b=mt.lang,d=h.A,g=h.fa,q=h.Ab,f=h.M,k=f.K,r={qa:"HM_ce",kb:function(){if(c.cetrk&&0<c.cetrk.length){e.d(document,"click",q.ga(r,c.cetrk));for(var b=g.Q(c.cetrk)||[],d=0,n=b.length;d<n;d++){var l=b[d],f=l.p||"";-1===f.indexOf(">")&&(0===f.indexOf("#")&&(f=f.substring(1)),(f=a.Eb(f))&&e.d(f,"click",q.nc(r,l)))}}},La:function(a){for(var b=g.Q(c.cetrk)||[],d=0;d<b.length;d++){var e=b[d],f=r.Kb(e.p,a);f&&r.t(e,f)}},Kb:function(a,b){a=String(a);if(0<a.indexOf("*")){var d=
RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),e;for(e in b)if(b.hasOwnProperty(e)&&d.test(e))return e;return w}return b.hasOwnProperty(a)?a:w},t:function(d,e){h.c.b.et=7;var n=d&&d.k||"",n=b.g(n),l={};if(d&&d.a&&b.h(d.a)){var g=d.a,m;for(m in g)if(g.hasOwnProperty(m)){var x=r.Qb(g[m]||"",e),x=x?a.R(x,y):"";l[m]=x}}l=r.Fb(l,e||d&&d.p);l._iden=n;f.setProperty("customEvent",l);h.c.b.ep="";h.c.b.p=k(f.z("customEvent"));h.c.m();h.c.b.p="";f.s("customEvent")},Fb:function(b,
e){var n=a.wa(e),l=d.Ia;n&&(c.aet&&c.aet.length?(b.ei_=a.getAttribute(n,l.id)||a.getAttribute(n,"id")||"",b.ec_=a.getAttribute(n,l.ca)||a.getAttribute(n,"class")||"",b.ex_=a.getAttribute(n,l.ba)||a.ia(n),b.en_=a.getAttribute(n,l.content)||a.R(n,v),b.et_=a.getAttribute(n,l.oa)||a.S(n),b.el_=a.getAttribute(n,l.link)||a.getAttribute(n,"href")||""):(b.ex_=a.getAttribute(n,l.ba)||a.ia(n),b.en_=a.getAttribute(n,l.content)||a.R(n,v)));return b},Qb:function(b,d){b=String(b);d=String(d);if(0<b.indexOf("*")){var e=
/.*\[(\d+)\]$/.exec(d);b=b.replace("*",e?e[1]:"1")}return a.wa(b)}};h.w.d("pv-b",r.kb);return r})();
(function(){var a=mt.e,e=mt.lang,b=mt.event,d=mt.f,g=h.A,q=h.fa,f=[],k={jb:function(){c.ctrk&&0<c.ctrk.length&&(b.d(document,"mouseup",k.ub()),b.d(window,"unload",function(){k.ma()}),setInterval(function(){k.ma()},g.vb))},ub:function(){return function(a){if(q.Q(c.ctrk,v)&&(a=k.Gb(a),""!==a)){var b=(g.la+"//"+g.Fa+"?"+h.c.fb().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(g.Y+"").length>g.da||(b+encodeURIComponent(f.join("!")+(f.length?"!":"")).length+(g.Y+"").length>g.da&&k.ma(),f.push(a),
(f.length>=g.wb||/\*a\*/.test(a))&&k.ma())}}},Gb:function(b){var f=b.target||b.srcElement,g,n;d.Ba?(n=Math.max(document.documentElement.scrollTop,document.body.scrollTop),g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),g=b.clientX+g,n=b.clientY+n):(g=b.pageX,n=b.pageY);b=k.Nb(b,f,g,n);var l=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:g-=l/2;break;case 2:g-=l}l=[];l.push(g);l.push(n);l.push(b.X);l.push(b.Z);l.push(b.lc);
l.push(e.g(b.jc));l.push(b.aa);l.push(b.T);(f="a"===(f.tagName||"").toLowerCase()?f:a.Ma(f))?(l.push("a"),l.push(e.g(encodeURIComponent(f.href)))):l.push("b");return l.join("*")},Nb:function(b,g,f,n){b=a.ia(g);var l=0,k=0,m=0,x=0;if(g&&(l=g.offsetWidth||g.clientWidth,k=g.offsetHeight||g.clientHeight,x=a.Na(g),m=x.left,x=x.top,e.n(g.getBBox)&&(k=g.getBBox(),l=k.width,k=k.height),"html"===(g.tagName||"").toLowerCase()))l=Math.max(l,g.clientWidth),k=Math.max(k,g.clientHeight);return{X:Math.round(100*
((f-m)/l)),Z:Math.round(100*((n-x)/k)),lc:d.orientation,jc:b,aa:l,T:k}},ma:function(){0!==f.length&&(h.c.b.et=2,h.c.b.ep=f.join("!"),h.c.m(),f=[])}};h.w.d("pv-b",k.jb);return k})();
(function(){var a=mt.lang,e=mt.e,b=mt.event,d=mt.f,g=h.A,q=h.w,f=h.M,k=f.K,r=+new Date,p=[],u={ga:function(){return function(b){if(h.c&&h.c.U&&c.aet&&c.aet.length){var d=b.target||b.srcElement;if(d){var f=h.c.rb,m=e.getAttribute(d,g.Ka)!=w?v:y;if(e.getAttribute(d,g.Ja)==w)if(m)u.sa(u.xa(d,b));else{var x=e.S(d);if(a.H(f,"*")||a.H(f,x))u.sa(u.xa(d,b));else for(;d.parentNode!=w;){var m=d.parentNode,x=e.S(m),z="a"===x&&a.H(f,"a")?v:y,x="button"===x&&a.H(f,"button")?v:y,k=e.getAttribute(m,g.Ka)!=w?v:y;
if(e.getAttribute(m,g.Ja)==w&&(z||x||k)){u.sa(u.xa(m,b));break}d=d.parentNode}}}}}},xa:function(b,l){var f={},m=g.Ia;f.id=e.getAttribute(b,m.id)||e.getAttribute(b,"id")||"";f.ca=e.getAttribute(b,m.ca)||e.getAttribute(b,"class")||"";f.ba=e.getAttribute(b,m.ba)||e.ia(b);f.content=e.getAttribute(b,m.content)||e.R(b,v);f.oa=e.getAttribute(b,m.oa)||e.S(b);f.link=e.getAttribute(b,m.link)||e.getAttribute(b,"href")||"";f.type=l.type||"click";m=a.Ua(b.offsetTop)?b.offsetTop:0;"click"===l.type?m=d.Ba?l.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):l.pageY:"touchend"===l.type&&(l.Ya&&l.Ya.changedTouches)&&(m=l.Ya.changedTouches[0].pageY);f.wc=m;m=this.Jb(l);f.X=m.X||0;f.Z=m.Z||0;f.aa=m.aa||0;f.T=m.T||0;f.Ga=m.Ga||"b";return f},Jb:function(b){var f=b.target||b.srcElement,g;if(d.Ba){var m=Math.max(document.documentElement.scrollTop,document.body.scrollTop);g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);g=b.clientX+g;b=b.clientY+m}else g=b.pageX,b=b.pageY;
var x=m=0,z=0,k=0;if(f&&(m=f.offsetWidth||f.clientWidth,x=f.offsetHeight||f.clientHeight,k=e.Na(f),z=k.left,k=k.top,a.n(f.getBBox)&&(x=f.getBBox(),m=x.width,x=x.height),"html"===(f.tagName||"").toLowerCase()))m=Math.max(m,f.clientWidth),x=Math.max(x,f.clientHeight);return{X:Math.round(100*((g-z)/m)),Z:Math.round(100*((b-k)/x)),aa:m,T:x,Ga:("a"===(f.tagName||"").toLowerCase()?f:e.Ma(f))?"a":"b"}},sa:function(b){var d=a.g;b=[+new Date-(h.c.V!==t?h.c.V:r),d(b.id),d(b.ca),d(b.oa),d(b.ba),d(b.link),d(b.content),
b.type,b.wc,b.X,b.Z,b.aa,b.T,b.Ga].join("*");u.ta(b);a.n(this.$())&&this.$()()},ta:function(a){var b=g.da;a.length>b||(encodeURIComponent(p.join("!")+a).length>b&&0<p.length&&(u.t(p.join("!")),p=[]),p.push(a))},t:function(a){h.c.b.et=5;h.c.b.ep=a;f.setProperty("autoEventTracking",{view_h_:d.G()},v);h.c.b.p=k(f.z("autoEventTracking"));h.c.m();h.c.b.p="";f.setProperty("autoEventTracking",{view_h_:w},v)},$:function(){return function(){p&&p.length&&(u.t(p.join("!")),p=[])}}};a.I(c.aet)&&""!==c.aet&&q.d("pv-b",
function(){b.d(document,"click",u.ga());"ontouchend"in document&&b.d(window,"touchend",u.ga());b.d(window,"unload",u.$())});return u})();
(function(){var a=mt.lang,e=mt.event,b=mt.f,d=h.A,g=h.w,q=h.M,f=q.K,k=+new Date,r=[],p=w,u={mb:function(){a.I(c.aet)&&""!==c.aet&&setInterval(u.eb,d.pc)},eb:function(){var a=b.G();0<a-h.c.b.vl&&(h.c.b.vl=a)}},n={zb:function(){return function(){h.c&&(h.c.U&&c.aet&&c.aet.length)&&(window.clearTimeout(p),p=window.setTimeout(function(){n.lb(b.G())},150))}},lb:function(a){n.ta([+new Date-(h.c.V!==t?h.c.V:k),a].join("*"))},ta:function(a){if(encodeURIComponent(r.join("!")+a).length>d.da||3<r.length)n.t(r.join("!")),
r=[];r.push(a)},t:function(a){u.eb();h.c.b.et=6;h.c.b.vh=b.Ra();h.c.b.ep=a;q.setProperty("autoEventTracking",{view_h_:b.G()},v);h.c.b.p=f(q.z("autoEventTracking"));h.c.m();h.c.b.p="";q.setProperty("autoEventTracking",{view_h_:w},v)},$:function(){return function(){r&&r.length&&(n.t(r.join("!")),r=[])}}};a.I(c.aet)&&""!==c.aet&&g.d("pv-b",function(){e.d(window,"scroll",n.zb());e.d(window,"unload",n.$());u.mb()});return n})();
(function(){function a(){return function(){h.c.b.et=3;h.c.b.ep=h.ua.Ob()+","+h.ua.Lb();h.c.b.hca=c.hca;h.c.m()}}function e(){clearTimeout(z);var a;m&&(a="visible"==document[m]);x&&(a=!document[x]);k="undefined"==typeof a?v:a;if((!f||!r)&&k&&p)s=v,n=+new Date;else if(f&&r&&(!k||!p))s=y,l+=+new Date-n;f=k;r=p;z=setTimeout(e,100)}function b(a){var b=document,d="";if(a in b)d=a;else for(var m=["webkit","ms","moz","o"],e=0;e<m.length;e++){var f=m[e]+a.charAt(0).toUpperCase()+a.slice(1);if(f in b){d=f;
break}}return d}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))p="focus"==a.type||"focusin"==a.type?v:y,e()}var g=mt.event,q=h.w,f=v,k=v,r=v,p=v,u=+new Date,n=u,l=0,s=v,m=b("visibilityState"),x=b("hidden"),z;e();(function(){var a=m.replace(/[vV]isibilityState/,"visibilitychange");g.d(document,a,e);g.d(window,"pageshow",e);g.d(window,"pagehide",e);"object"==typeof document.onfocusin?(g.d(document,"focusin",d),g.d(document,"focusout",d)):(g.d(window,"focus",d),g.d(window,
"blur",d))})();h.ua={Ob:function(){return+new Date-u},Lb:function(){return s?+new Date-n+l:l}};q.d("pv-b",function(){g.d(window,"unload",a())});q.d("duration-send",a());q.d("duration-done",function(){n=u=+new Date;l=0});return h.ua})();
(function(){var a=mt.lang,e=h.A,b=h.load,d=h.ea,g={$b:function(g){if((window._dxt===t||a.o(window._dxt,"Array"))&&"undefined"!==typeof h.c){var f=d.ha();b([e.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(f)].join(""),g)}},vc:function(b){if(a.o(b,"String")||a.o(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.xb=g})();
(function(){function a(a,b,d,e){if(!(a===t||b===t||e===t)){if(""===a)return[b,d,e].join("*");a=String(a).split("!");for(var f,g=y,k=0;k<a.length;k++)if(f=a[k].split("*"),String(b)===f[0]){f[1]=d;f[2]=e;a[k]=f.join("*");g=v;break}g||a.push([b,d,e].join("*"));return a.join("!")}}function e(a){for(var b in a)if({}.hasOwnProperty.call(a,b)){var f=a[b];d.h(f)||d.isArray(f)?e(f):a[b]=String(f)}}var b=mt.url,d=mt.lang,g=mt.B,q=mt.f,f=h.A,k=h.w,r=h.xb,p=h.load,u=h.ea,n=h.M,l=n.K,s={W:[],na:0,Ca:y,D:{Ha:"",
page:""},init:function(){s.l=0;n.init();k.d("pv-b",function(){s.yb();s.Bb()});k.d("pv-d",function(){s.Cb();s.D.page=""});k.d("stag-b",function(){h.c.b.api=s.l||s.na?s.l+"_"+s.na:"";h.c.b.ct=[decodeURIComponent(u.getData("Hm_ct_"+c.id)||""),s.D.Ha,s.D.page].join("!")});k.d("stag-d",function(){h.c.b.api=0;s.l=0;s.na=0})},yb:function(){var a=window._hmt||[];if(!a||d.o(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var m=arguments[b];d.o(m,"Array")&&
(a.cmd[a.id].push(m),"_setAccount"===m[0]&&(1<m.length&&/^[0-9a-f]{31,32}$/.test(m[1]))&&(m=m[1],a.id=m,a.cmd[m]=a.cmd[m]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Bb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order)$/,e=0,f=b.length;e<f;e++){var g=b[e];d.test(g[0])?s.W.push(g):s.Ea(g)}a.cmd[c.id]={push:s.Ea}},Cb:function(){if(0<s.W.length)for(var a=0,b=s.W.length;a<b;a++)s.Ea(s.W[a]);s.W=w},Ea:function(a){var b=
a[0];if(s.hasOwnProperty(b)&&d.n(s[b]))s[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{31,32}$/.test(a[1])&&(s.l|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],y===a||v===a))s.l|=2,h.c.Sa=a},_trackPageview:function(a){1<a.length&&(a[1].charAt&&"/"===a[1].charAt(0))&&(s.l|=4,h.c.b.sn=h.c.Oa(),h.c.b.et=0,h.c.b.ep="",h.c.b.vl=q.G(),s.Ca||(h.c.b.su=h.c.b.u||document.location.href),h.c.b.u=f.protocol+"//"+document.location.host+a[1],h.c.b.p=l(n.z("pageview")),h.c.m(),h.c.b.p="",h.c.V=
+new Date,n.s("pageview"))},_trackEvent:function(a){2<a.length&&(s.l|=8,h.c.b.et=4,h.c.b.ep=d.g(a[1])+"*"+d.g(a[2])+(a[3]?"*"+d.g(a[3]):"")+(a[4]?"*"+d.g(a[4]):""),h.c.b.p=l(n.za()),h.c.m(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){s.na++;for(var f=(h.c.b.cv||"*").split("!"),g=f.length;g<b-1;g++)f.push("*");f[b-1]=e+"*"+d.g(a[2])+"*"+d.g(a[3]);h.c.b.cv=f.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==
a?u.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):u.removeData("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var e=d.g(b[1]);b=d.g(b[2]);if(e!==t&&b!==t){var f=decodeURIComponent(u.getData("Hm_ct_"+c.id)||""),f=a(f,e,1,b);u.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var e=d.g(b[1]);b=d.g(b[2]);if(e!==t&&b!==t){var f=s.D.Ha,f=a(f,e,2,b);s.D.Ha=f}}},_setPageTag:function(b){if(!(3>b.length)){var e=d.g(b[1]);b=d.g(b[2]);if(e!==t&&
b!==t){var f=s.D.page,f=a(f,e,3,b);s.D.page=f}}},_setReferrerOverride:function(a){1<a.length&&(a=a[1],d.o(a,"String")?(h.c.b.su="/"===a.charAt(0)?f.protocol+"//"+window.location.host+a:a,s.Ca=v):s.Ca=y)},_trackOrder:function(a){a=a[1];d.h(a)&&(e(a),s.l|=16,h.c.b.et=94,h.c.b.ep=g.stringify(a),h.c.b.p=l(n.za()),h.c.m(),h.c.b.p="")},_setDataxId:function(a){a=a[1];r.$b();r.vc(a)},_setUserId:function(a){a=a[1];if(d.I(a)||d.Ua(a)){var b=n.z("user").uid_;if(!(b&&b.value===d.g(String(a)))){var b=h.c.b.p,
e=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+d.g(String(a));h.c.m();var f={};f.uid_=a;n.setProperty("user",f,v);h.c.b.p=b;h.c.b.ep=e}}},_clearUserId:function(a){1<a.length&&v===a[1]&&n.s("userId")},_getClientId:function(a){a=a[1];d.n(a)&&c.hca!==t&&a(c.hca)},_setUserProperty:function(a){a=a[1];d.h(a)&&n.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&v===a[1]&&n.s("user")},_setSessionProperty:function(a){a=a[1];d.h(a)&&n.setProperty("session",a)},_clearSessionProperty:function(a){1<
a.length&&v===a[1]&&n.s("session")},_setPageviewProperty:function(a){a=a[1];d.h(a)&&n.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&v===a[1]&&n.s("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];d.h(a)&&n.setProperty("autoEventTracking",a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&v===a[1]&&n.s("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],y===a||v===a))h.c.Ta=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=
a[1],y===a||v===a))h.c.U=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.m())):k.L("duration-send");k.L("duration-done")},_require:function(a){1<a.length&&(a=a[1],f.pb.test(b.ya(a))&&p(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1];a=a[2];if(d.H(f.bb,e)&&d.n(a)&&(b.plugins=b.plugins||{},b.J=b.J||{},b.plugins[e]=a,b.C=b.C||[],a=b.C.slice(),e&&a.length&&a[0][1]===e))for(var g=0,k=a.length;g<k;g++){var l=a[g][2]||
{};if(b.plugins[e]&&!b.J[e])b.J[e]=new b.plugins[e](l),b.C.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],g=a[2]||{};if(d.H(f.bb,e))if(b.plugins=b.plugins||{},b.J=b.J||{},b.plugins[e]&&!b.J[e])b.J[e]=new b.plugins[e](g);else{b.C=b.C||[];for(var g=0,k=b.C.length;g<k;g++)if(b.C[g][1]===e)return;b.C.push(a);s._require([w,f.kc+e+".js"])}}},_fetchABTest:function(a){if(1<a.length&&(a=a[1],d.h(a))){var b=a.paramName,e=a.defaultValue,f=a.callback;h.ab&&(b&&e!==t&&
d.n(f))&&h.ab.Dc(b,function(a){f(a===w?e:a)})}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];d.h(a)||(a={});a._iden=b;n.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=l(n.z("customEvent"));h.c.m();h.c.b.p="";n.s("customEvent")}}};s.init();h.qb=s;return h.qb})();(function(){var a=h.w;c.spa!==t&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.d("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=v,this.b={},this.Ta=this.Sa=v,this.U=l.U,this.rb=d.I(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.init())}var e=mt.url,b=mt.N,d=mt.lang,g=mt.cookie,q=mt.f,f=mt.sessionStorage,k=mt.B,r=mt.event,p=h.ea,u=h.M,n=u.K,l=h.A,s=h.load,m=h.w;a.prototype={tc:function(){var a,b,d,e;l.Va=p.getData("Hm_lpvt_"+c.id)||0;if(e=p.getData("Hm_lvt_"+c.id)){for(b=e.split(",");2592E3<l.O-b[0];)b.shift();d=4>b.length?
2:3;for(l.O-l.Va>c.vdur&&b.push(l.O);4<b.length;)b.shift();e=b.join(",");b=b[b.length-1]}else e=l.O,b="",d=1;this.dc()?(p.setData("Hm_lvt_"+c.id,e,c.age),p.setData("Hm_lpvt_"+c.id,l.O),a=g.hc(p.ha(),p.va())):this.Db();this.b.cc=a;this.b.lt=b;this.b.lv=d},dc:function(){var a=e.ya(document.location.href);return!d.H("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),a)},Db:function(){for(var a=document.cookie.split(";"),
b=0;b<a.length;b++){var d=a[b].split("=");d.length&&/Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0]))&&p.removeData(d[0]);d.length&&/Hm_ck_[0-9]{13}/.test(String(d[0]))&&p.removeData(d[0])}},fb:function(){for(var a=[],b=this.b.et,d=0,e=l.hb.length;d<e;d++){var f=l.hb[d],g=this.b[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}return a.join("&")},uc:function(){this.tc();this.b.si=c.id;this.b.sn=this.Oa();this.b.su=
document.referrer;this.b.ds=q.oc;this.b.cl=q.colorDepth+"-bit";this.b.ln=String(q.language).toLowerCase();this.b.ja=q.javaEnabled?1:0;this.b.ck=q.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.v="1.2.91";this.b.cv=decodeURIComponent(p.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=q.G();var a=document.location.href;this.b.cm=e.i(a,l.Xb)||"";this.b.cp=e.i(a,l.Yb)||e.i(a,l.Ac)||"";this.b.cw=e.i(a,l.Wb)||e.i(a,l.Cc)||"";this.b.ci=e.i(a,l.Ub)||e.i(a,l.zc)||"";this.b.cf=
e.i(a,l.Zb)||e.i(a,l.Bc)||"";this.b.cu=e.i(a,l.Vb)||e.i(a,l.yc)||"";/https?:/.test(document.location.protocol)&&(this.b.u=a)},init:function(){try{this.uc(),this.sc(),h.c=this,this.sb(),this.ic(),m.L("pv-b"),this.qc()}catch(a){var d=[];d.push("si="+c.id);d.push("n="+encodeURIComponent(a.name));d.push("m="+encodeURIComponent(a.message));d.push("r="+encodeURIComponent(document.referrer));b.log(l.la+"//"+l.Fa+"?"+d.join("&"))}},qc:function(){function a(){m.L("pv-d")}this.Sa?(this.b.et=0,this.b.ep="",
this.b.p=n(u.z("pageview")),this.b.vl=q.G(),this.m(a),this.b.p=""):a();this.V=+new Date;u.s("pageview")},m:function(a){if(this.Ta){var e=this;e.b.rnd=Math.round(Math.random()*l.Y);e.b.r=q.orientation;e.b.ww=q.ib;m.L("stag-b");var f=l.la+"//"+l.Fa+"?"+e.fb();m.L("stag-d");e.nb(f);b.log(f,function(b){e.cb(b);d.n(a)&&a.call(e)})}},sb:function(){try{if(window.postMessage&&window.self!==window.parent){var a=this;r.d(window,"message",function(b){if(e.ya(b.origin)===l.xc){b=b.data||{};var d=b.jn||"",f=/^customevent$|^heatmap$|^pageclick$|^select$/.test(d);
if(RegExp(c.id).test(b.sd||"")&&f)a.b.rnd=Math.round(Math.random()*l.Y),s(l.protocol+"//"+c.js+d+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}}catch(b){}},ic:function(){try{if(window.self===window.parent){var a=document.location.href,b=e.i(a,"baidu-analytics-token"),d=e.i(a,"baidu-analytics-jn");/^[a-f0-9]{32}\/?$/.test(b)&&/^overlay\/?$/.test(d)&&s(l.protocol+"//"+c.js+d+".js?"+Math.round(Math.random()*l.Y))}}catch(f){}},nb:function(a){var b;
try{b=k.parse(f.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);f.set("Hm_unsent_"+c.id,k.stringify(b))},cb:function(a){var b;try{b=k.parse(f.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?f.set("Hm_unsent_"+c.id,k.stringify(b)):this.tb()}},tb:function(){f.remove("Hm_unsent_"+
c.id)},sc:function(){var a=this,d;try{d=k.parse(f.get("Hm_unsent_"+c.id)||"[]")}catch(e){d=[]}if(d.length)for(var g=function(d){b.log(l.la+"//"+d,function(b){a.cb(b)})},m=0;m<d.length;m++)g(d[m])},Oa:function(){return Math.round(+new Date/1E3)%65535}};return new a})();var A=h.A,B=h.load;c.pt&&B([A.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));})();