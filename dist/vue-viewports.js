!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VueViewports=n():t.VueViewports=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=34)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(25),o=e(26);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(28)("wks"),o=e(8),u=e(0).Symbol,i="function"==typeof u,c=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};c.store=r},function(t,n,e){e(33),t.exports=e(2).Array.find},function(t,n,e){!function(n,e){t.exports=e()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,n,e){Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={install:function(t){t.prototype.$throttle=e._throttle},_throttle:function(t,n,e){e=e||this.$el;var r=!1,o=function(){r||(r=!0,window.requestAnimationFrame(function(){e.dispatchEvent(new window.CustomEvent(n)),r=!1}))};return e.addEventListener(t,o),o}};n.default=e,"undefined"!=typeof window&&window.Vue&&window.Vue.use(e)}])})},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(9)("unscopables"),o=Array.prototype;void 0==o[r]&&e(4)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(6),o=e(23),u=e(31),i=e(30),c=e(17);t.exports=function(t,n){var e=1==t,f=2==t,a=3==t,p=4==t,s=6==t,l=5==t||s,d=n||c;return function(n,c,v){for(var y,w,x=u(n),h=o(x),b=r(c,v,3),_=i(h.length),m=0,j=e?d(n,_):f?d(n,0):void 0;_>m;m++)if((l||m in h)&&(y=h[m],w=b(y,m,x),t))if(e)j[m]=w;else if(w)switch(t){case 3:return!0;case 5:return y;case 6:return m;case 2:j.push(y)}else if(p)return!1;return s?-1:a||p?p:j}}},function(t,n,e){var r=e(1),o=e(24),u=e(9)("species");t.exports=function(t){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&(n=n[u],null===n&&(n=void 0))),void 0===n?Array:n}},function(t,n,e){var r=e(16);t.exports=function(t,n){return new(r(t))(n)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(1),o=e(0).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(2),u=e(4),i=e(27),c=e(6),f="prototype",a=function(t,n,e){var p,s,l,d,v=t&a.F,y=t&a.G,w=t&a.S,x=t&a.P,h=t&a.B,b=y?r:w?r[n]||(r[n]={}):(r[n]||{})[f],_=y?o:o[n]||(o[n]={}),m=_[f]||(_[f]={});y&&(e=n);for(p in e)s=!v&&b&&void 0!==b[p],l=(s?b:e)[p],d=h&&s?c(l,r):x&&"function"==typeof l?c(Function.call,l):l,b&&i(b,p,l,t&a.U),_[p]!=l&&u(_,p,d),x&&m[p]!=l&&(m[p]=l)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){t.exports=!e(3)&&!e(7)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(5);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(5);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(14),o=e(22),u=e(32),i=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=u(n,!0),r(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=e(4),u=e(21),i=e(8)("src"),c="toString",f=Function[c],a=(""+f).split(c);e(2).inspectSource=function(t){return f.call(t)},(t.exports=function(t,n,e,c){var f="function"==typeof e;f&&(u(e,"name")||o(e,"name",n)),t[n]!==e&&(f&&(u(e,i)||o(e,i,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,c,function(){return"function"==typeof this&&this[i]||f.call(this)})},function(t,n,e){var r=e(0),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(18);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){"use strict";var r=e(20),o=e(15)(5),u="find",i=!0;u in[]&&Array(1)[u](function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(13)(u)},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),e(10);var o=e(11),u=r(o),i={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{0:"sub-mobile",320:"mobile",768:"tablet",1024:"desktop",1920:"hd-desktop",2560:"qhd-desktop",3840:"uhd-desktop"},e="VueViewports$updateCurrentViewport";t.prototype.$viewportsUpdateEventName=e,i._updateCurrentViewport.call(void 0,t,n),u.default._throttle("resize",e,window),window.addEventListener(e,i._updateCurrentViewport.bind(void 0,t,n))},_updateCurrentViewport:function(t,n){t.prototype.$currentViewport=i._getCurrentViewport(n)},_getCurrentViewport:function(t){var n=i._sortOptions(t),e=window.innerWidth,r=n.reverse().find(function(t){return e>=t});return{label:t[r],value:r,_windowWidth:e}},_sortOptions:function(t){return Object.keys(t).map(Number).sort(function(t,n){return t-n})}};n.default=i,"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)}])});