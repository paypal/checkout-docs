_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"2qu3":function(e,t,n){"use strict";var r=n("lSNA"),o=n("lwsE"),i=n("W8MJ");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,d=(s=n("q1tI"))&&s.__esModule?s:{default:s},f=n("8L3h"),p=n("jwwS");var b=[],h=[],j=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function O(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=y(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function m(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function v(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:m,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new x(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!j&&"function"===typeof n.webpack){var i=n.webpack();h.push((function(e){var t,n=u(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}}))}var a=function(e,t){o();var i=d.default.useContext(p.LoadableContext),a=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return a.loading||a.error?d.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?n.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return o()},a.displayName="LoadableComponent",d.default.forwardRef(a)}var x=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return v(y,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}g.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(O,e)},g.preloadAll=function(){return new Promise((function(e,t){_(b).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return j=!0,t()};_(h,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var w=g;t.default=w},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var s=o.props[l],d=r[l]||new Set;d.has(s)?i=!1:(d.add(s),r[l]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}b.rewind=function(){};var h=b;t.default=h},BlQT:function(e,t,n){e.exports={modifier:"style_modifier__2xKJB"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},NxVu:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var r=n("nKUr"),o=n("q1tI"),i=n("xhs1"),a=n.n(i),c=Object(o.createContext)(),u=function(e){var t=e.children,n=Object(o.useState)(),i=n[0],a=n[1];return Object(r.jsx)(c.Provider,{value:[i,a],children:t})},l=function(e){var t=e.to,n=e.children,i=Object(o.useContext)(c),u=(i[0],i[1]);return Object(r.jsx)("a",{className:a.a.link,href:"#",onClick:function(e){e.preventDefault(),u(t)},children:n})},s=function(e){var t=e.name,n=e.default,r=void 0!==n&&n,i=e.children,a=Object(o.useContext)(c),u=a[0],l=a[1];return Object(o.useEffect)((function(){r&&l(t)}),[]),t===u?i:null}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n("nKUr"),o=n("8Kt/"),i=n.n(o),a=n("vRNQ"),c=n.n(a),u=n("fWM3"),l=n("NxVu"),s=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"Introduction"}),Object(r.jsx)("p",{children:"PayPal Checkout with gives your buyers a simplified and secure checkout experience. PayPal intelligently presents the most relevant payment types to your shoppers, automatically, making it easier for them to complete their purchase using methods like Pay with Venmo, PayPal pay later offers, credit card payments, iDEAL, Bancontact, Sofort, and other payment types."}),Object(r.jsx)("h4",{children:"How to use these docs"}),Object(r.jsx)("p",{children:"Select your preferred options over on the right. Whether you're integrating PayPal on Web, iOS, or Android, using the PayPal SDK or APIs, these docs will automatically adjust to your preferences."}),Object(r.jsx)("h4",{children:"Next Steps"}),Object(r.jsxs)("p",{children:[Object(r.jsx)(l.a,{to:"quickstart",children:"Quick Start"})," your integration"]})]})},d=n("rePB"),f=n("a6RD");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var b=n.n(f)()((function(){return n.e(16).then(n.bind(null,"PA40"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["PA40"]},modules:["./editor"]}});function h(e){return Object(r.jsx)(b,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}var j=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"Quick Start"}),Object(r.jsx)("p",{children:"To quick start your web integration, copy and paste the following code into your site"}),Object(r.jsx)("p",{children:Object(r.jsx)(h,{value:"\n<script src=\"https://www.paypal.com/sdk/js?client-id=sb\"><\/script>\n<script>paypal.Buttons().render('body');<\/script>\n",language:"html"})}),Object(r.jsx)("p",{children:"You can now view and click on the PayPal button in your web app, and try logging in."})]})},y=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"Quick Start"}),Object(r.jsx)("p",{children:"To quick start your iOS integration, first install the Native iOS SDK"}),Object(r.jsx)("p",{children:Object(r.jsx)(h,{value:"\ncocoapods install paypal-checkout-sdk-ios\n",language:"sh"})}),Object(r.jsx)("p",{children:"Now copy and paste the following code into your app"}),Object(r.jsx)("p",{children:Object(r.jsx)(h,{value:"\npaypal.Buttons().render();\n",language:"swift"})}),Object(r.jsx)("p",{children:"You can now view and click on the PayPal button in your iOS app, and try clicking and checking out."})]})},O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"Quick Start"}),Object(r.jsx)("p",{children:"To quick start your Android integration, first install the Native Android SDK"}),Object(r.jsx)("p",{children:Object(r.jsx)(h,{value:"\nandroid install paypal-checkout-sdk-android\n",language:"sh"})}),Object(r.jsx)("p",{children:"Now copy and paste the following code into your app"}),Object(r.jsx)("p",{children:Object(r.jsx)(h,{value:"\npaypal.Buttons().render();\n",language:"kotlin"})}),Object(r.jsx)("p",{children:"You can now view and click on the PayPal button in your Android app, and try clicking and checking out."})]})},m=function(){var e=Object(u.d)();return e.web?Object(r.jsx)(j,{}):e.ios?Object(r.jsx)(y,{}):e.android?Object(r.jsx)(O,{}):null};function v(){var e=Object(u.d)();return Object(r.jsxs)("div",{className:c.a.container,children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"PayPal Checkout Docs"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("main",{className:c.a.main,children:[Object(r.jsx)("h1",{className:c.a.title,children:"PayPal Checkout Docs"}),Object(r.jsx)("p",{className:c.a.description,children:"Draft Docs for PayPal Web, iOS and Android integrations"}),Object(r.jsxs)("div",{className:c.a.columns,children:[Object(r.jsxs)("div",{className:c.a.leftColumn,children:[Object(r.jsx)("h4",{children:"About"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.a,{to:"intro",children:"Intro"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.a,{to:"quickstart",children:"Quick Start"})})]}),Object(r.jsx)("h4",{children:"Payment Methods"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"PayPal"}),e.web?Object(r.jsx)("li",{children:"Venmo"}):null,Object(r.jsx)("li",{children:"Pay Later"}),e.web?Object(r.jsx)("li",{children:"Cards"}):null,e.web?Object(r.jsx)("li",{children:"Alternative Payments"}):null,e.web?Object(r.jsx)("li",{children:"SEPA"}):null]}),Object(r.jsx)("h4",{children:"Components"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Buttons"}),Object(r.jsx)("li",{children:"Marks"}),e.ios||e.android?Object(r.jsx)("li",{children:"Checkout"}):null,e.web?Object(r.jsx)("li",{children:"Card Fields"}):null]}),Object(r.jsx)("h4",{children:"Reference"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"SDK"}),Object(r.jsx)("li",{children:"API"})]}),Object(r.jsx)("h4",{children:"Upgrade"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"NVP/SOAP"}),Object(r.jsx)("li",{children:"Billing Agreements"}),e.web?Object(r.jsx)("li",{children:"checkout.js"}):null]})]}),Object(r.jsxs)("div",{className:c.a.middleColumn,children:[Object(r.jsx)(l.b,{name:"intro",default:!0,children:Object(r.jsx)(s,{})}),Object(r.jsx)(l.b,{name:"quickstart",children:Object(r.jsx)(m,{})})]}),Object(r.jsxs)("div",{className:c.a.rightColumn,children:[Object(r.jsx)("h4",{children:"Platform"}),Object(r.jsxs)(u.b,{children:[Object(r.jsx)(u.a,{name:"web",label:"Web",default:!0}),Object(r.jsx)(u.a,{name:"ios",label:"iOS"}),Object(r.jsx)(u.a,{name:"android",label:"Android"})]}),Object(r.jsx)("h4",{children:"Integration"}),Object(r.jsxs)(u.b,{children:[Object(r.jsx)(u.a,{name:"sdk",label:"SDK",default:!0}),Object(r.jsx)(u.a,{name:"api",label:"API"})]}),e.sdk?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"API"}),Object(r.jsxs)(u.b,{children:[Object(r.jsx)(u.a,{name:"client",label:"Client",default:!0}),Object(r.jsx)(u.a,{name:"server",label:"Server"})]})]}):null]})]})]}),Object(r.jsx)("footer",{className:c.a.footer,children:Object(r.jsx)("a",{href:"mailto:insert-feedback-email@paypal.com",children:"Send feedback to insert-feedback-email@paypal.com!"})})]})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=function(e){a(n,e);var t=l(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},a6RD:function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var n=a.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));if(r=i(i({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=a.default.Map;var o={},c=e.modules();Object.keys(c).forEach((function(e){var t=c[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};c(n("q1tI"));var a=c(n("2qu3"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},fWM3:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var r=n("rePB"),o=n("nKUr"),i=n("q1tI"),a=n("BlQT"),c=n.n(a);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(i.createContext)(),d=function(e){var t=e.children,n=Object(i.useState)({}),r=n[0],a=n[1];return Object(o.jsx)(s.Provider,{value:[r,a],children:t})},f=function(){return Object(i.useContext)(s)[0]},p=Object(i.createContext)(),b=function(e){var t=e.children,n=Object(i.useContext)(s),a=n[0],c=n[1],u=Object(i.useState)({}),d=u[0],f=u[1];return Object(o.jsx)(p.Provider,{value:{register:function(e){f((function(t){return l(l({},t),{},Object(r.a)({},e,!0))}))},toggle:function(e){c((function(t){for(var n=l({},t),r=0,o=Object.keys(d);r<o.length;r++){n[o[r]]=!1}return n[e]=!0,n}))},modifierState:a},children:t})},h=function(e){var t=e.name,n=e.label,r=e.default,a=void 0!==r&&r,u=Object(i.useContext)(p),l=u.register,s=u.toggle,d=u.modifierState,f=function(){s(t)};return Object(i.useEffect)((function(){l(t),a&&f()}),[]),Object(o.jsx)("button",{active:d[t]?"active":void 0,className:c.a.modifier,onClick:f,children:n})}},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH",columns:"Home_columns__31il5",leftColumn:"Home_leftColumn__1xtuG",middleColumn:"Home_middleColumn__1MWtF",rightColumn:"Home_rightColumn__2PEti"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xhs1:function(e,t,n){e.exports={link:"style_link__3pA4l"}}},[["vlRD",1,0]]]);