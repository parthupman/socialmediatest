(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3194:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Layout/HeadTags.js

var __jsx = (external_react_default()).createElement;


const HeadTags = () => __jsx((external_react_default()).Fragment, null, __jsx((head_default()), null, __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
}), __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  sizes: "16*16",
  type: "image/png"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/listMessages.css"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/styles.css"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/nprogress.css"
}), __jsx("title", null, "Mini Social Media")));

/* harmony default export */ var Layout_HeadTags = (HeadTags);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Layout/Navbar.js
var Navbar_jsx = (external_react_default()).createElement;





function Navbar() {
  const router = (0,router_.useRouter)();

  const isActive = route => router.pathname === route;

  return Navbar_jsx(external_semantic_ui_react_.Menu, {
    fluid: true,
    borderless: true
  }, Navbar_jsx(external_semantic_ui_react_.Container, {
    text: true
  }, Navbar_jsx(next_link.default, {
    href: "/login"
  }, Navbar_jsx(external_semantic_ui_react_.Menu.Item, {
    header: true,
    active: isActive("/login")
  }, Navbar_jsx(external_semantic_ui_react_.Icon, {
    size: "large",
    name: "sign in"
  }), "Login")), Navbar_jsx(next_link.default, {
    href: "/signup"
  }, Navbar_jsx(external_semantic_ui_react_.Menu.Item, {
    header: true,
    active: isActive("/signup")
  }, Navbar_jsx(external_semantic_ui_react_.Icon, {
    size: "large",
    name: "signup"
  }), "Signup"))));
}

/* harmony default export */ var Layout_Navbar = (Navbar);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./components/Layout/Layout.js
var Layout_jsx = (external_react_default()).createElement;







function Layout({
  children
}) {
  (router_default()).onRouteChangeStart = () => external_nprogress_default().start();

  (router_default()).onRouteChangeComplete = () => external_nprogress_default().done();

  (router_default()).onRouteChangeError = () => external_nprogress_default().done();

  return Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(Layout_HeadTags, null), Layout_jsx(Layout_Navbar, null), Layout_jsx(external_semantic_ui_react_.Container, {
    style: {
      paddingTop: "1rem"
    },
    text: true
  }, children));
}

/* harmony default export */ var Layout_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = (external_react_default()).createElement;




class MyApp extends app.default {
  render() {
    const {
      Component
    } = this.props;
    return _app_jsx(Layout_Layout, null, _app_jsx(Component, null));
  }

}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 1347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,544], function() { return __webpack_exec__(3194); });
module.exports = __webpack_exports__;

})();