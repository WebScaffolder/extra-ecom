"use strict";
(() => {
var exports = {};
exports.id = 1250;
exports.ids = [1250];
exports.modules = {

/***/ 6021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ my_profile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/_App/Navbar.js + 1 modules
var Navbar = __webpack_require__(8871);
// EXTERNAL MODULE: ./components/Common/PageTitle.js
var PageTitle = __webpack_require__(7252);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__(1793);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/Profile/ProfileArea.js






const ProfileArea = ()=>{
    const { luan_token  } = (0,external_nookies_.parseCookies)();
    const { 0: user , 1: setUser  } = (0,external_react_.useState)([]);
    const payload = {
        headers: {
            Authorization: luan_token
        }
    };
    const url = `${baseUrl/* default */.Z}/api/v1/auth/account`;
    (0,external_react_.useEffect)(()=>{
        let isSubscribed = true;
        const fetchOrder = async ()=>{
            const response = await external_axios_default().get(url, payload);
            setUser(response.data);
        };
        fetchOrder();
        // cancel subscription to useEffect
        return ()=>isSubscribed = false;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "user-area-wrap ptb-100 container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h4", {
                    className: "mb-3",
                    children: "User Profile"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "table-responsive",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("table", {
                        className: "table table-bordered table-p15",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                            scope: "row",
                                            children: "Username:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                            children: user.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                            scope: "row",
                                            children: "Email:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                            children: user.email
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                            scope: "row",
                                            children: "Role:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                            children: user.role
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                            scope: "row",
                                            children: "Joining Date:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                            children: (0,formatDate/* default */.Z)(user.createdAt)
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Profile_ProfileArea = (ProfileArea);

;// CONCATENATED MODULE: ./pages/my-profile.js





const MyProfile = ({ user  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {
                user: user
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageTitle/* default */.Z, {
                pageTitle: "My Profile",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "My Profile"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Profile_ProfileArea, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const my_profile = (MyProfile);


/***/ }),

/***/ 7105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? "https://extra-ecom.vercel.app" : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


/***/ }),

/***/ 1793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatDate = (date)=>{
    return new Date(date).toLocaleDateString("en-US");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2244,7252], () => (__webpack_exec__(6021)));
module.exports = __webpack_exports__;

})();