"use strict";
(() => {
var exports = {};
exports.id = 3410;
exports.ids = [3410];
exports.modules = {

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ my_orders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Common/PageTitle.js
var PageTitle = __webpack_require__(7252);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__(1793);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/Orders/MyOrderArea.js






const MyOrderArea = ()=>{
    const { luan_token  } = (0,external_nookies_.parseCookies)();
    const { 0: orders , 1: setOrders  } = (0,external_react_.useState)([]);
    const payload = {
        headers: {
            Authorization: luan_token
        }
    };
    const url = `${baseUrl/* default */.Z}/api/v1/orders/myorders`;
    (0,external_react_.useEffect)(()=>{
        let isSubscribed = true;
        const fetchOrder = async ()=>{
            const response = await external_axios_default().get(url, payload);
            // console.log(response.data);
            setOrders(response.data);
        };
        fetchOrder();
        // cancel subscription to useEffect
        return ()=>isSubscribed = false;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "table-responsive",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "table table-striped table-p15 fs-15 align-middle",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        children: "User"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        children: "Phone"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        children: "Total"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        children: "Status"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("tbody", {
                            children: orders && orders.length > 0 ? orders.map((order, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    children: order.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    children: order.address
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    children: order.email
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    children: order.phone
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    children: (0,formatDate/* default */.Z)(order.createdAt)
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                    children: [
                                                        "$",
                                                        order.totalPrice
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                        className: order.isDelivered === false ? "badge bg-warning text-dark fw-normal" : "badge bg-success fw-normal",
                                                        type: "button",
                                                        children: order.isDelivered === false ? "Pending" : "Confirmed"
                                                    })
                                                })
                                            ]
                                        }, i),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("tr", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                colSpan: "7",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                                    className: "table table-hover table-p15 fs-15 align-middle",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("thead", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                                        children: "Image"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                                        children: "Product"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                                        children: "Price"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("tbody", {
                                                            children: order.ordersItem.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                                src: item.img_url,
                                                                                alt: "Product Image",
                                                                                width: "40"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                            children: [
                                                                                item.title,
                                                                                " : ",
                                                                                item.quantity
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                                            children: [
                                                                                item.price,
                                                                                " x ",
                                                                                item.quantity
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, item.id))
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })) : /*#__PURE__*/ (0,jsx_runtime_.jsx)("tr", {
                                className: "empty-tr",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                    colSpan: "7",
                                    children: "No Order"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Orders_MyOrderArea = (MyOrderArea);

// EXTERNAL MODULE: ./components/_App/Navbar.js + 1 modules
var Navbar = __webpack_require__(8871);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
;// CONCATENATED MODULE: ./pages/admin/orders/my-orders.js






const MyOrder = ({ user  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {
                user: user
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageTitle/* default */.Z, {
                pageTitle: "My Orders",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "My Orders"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Orders_MyOrderArea, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const my_orders = (MyOrder);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2244,7252], () => (__webpack_exec__(5988)));
module.exports = __webpack_exports__;

})();