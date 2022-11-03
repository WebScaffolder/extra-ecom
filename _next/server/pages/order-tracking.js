"use strict";
(() => {
var exports = {};
exports.id = 3384;
exports.ids = [3384];
exports.modules = {

/***/ 4883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ order_tracking)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/_App/TopHeader.js
var TopHeader = __webpack_require__(3923);
// EXTERNAL MODULE: ./components/_App/Navbar.js + 1 modules
var Navbar = __webpack_require__(8871);
// EXTERNAL MODULE: ./components/Common/PageTitle.js
var PageTitle = __webpack_require__(7252);
;// CONCATENATED MODULE: ./components/OrderTracking/OrderTrackingForm.js


const OrderTrackingForm = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "order-tracking-area ptb-100",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "order-tracking-content",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                    children: "Order ID"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                    type: "text",
                                                    className: "form-control",
                                                    placeholder: "Found in your order confirmation email"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                    children: "Billing E-mail"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                    type: "email",
                                                    className: "form-control",
                                                    placeholder: "Email you used during checkout"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                            type: "submit",
                                            className: "default-btn",
                                            children: "TRACK ORDER"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "order-tracking-image",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                    src: "/images/order-tracking.png",
                                    alt: "order-tracking"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const OrderTracking_OrderTrackingForm = (OrderTrackingForm);

// EXTERNAL MODULE: ./components/Common/SubscribeForm.js
var SubscribeForm = __webpack_require__(6317);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
;// CONCATENATED MODULE: ./pages/order-tracking.js








const OrderTracking = ({ user  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(TopHeader/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {
                user: user
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageTitle/* default */.Z, {
                pageTitle: "Order Tracking",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Order Tracking"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(OrderTracking_OrderTrackingForm, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(SubscribeForm/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const order_tracking = (OrderTracking);


/***/ }),

/***/ 6734:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2244,7252,3923,6317], () => (__webpack_exec__(4883)));
module.exports = __webpack_exports__;

})();