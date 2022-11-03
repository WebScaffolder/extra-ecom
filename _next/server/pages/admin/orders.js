"use strict";
(() => {
var exports = {};
exports.id = 1426;
exports.ids = [1426];
exports.modules = {

/***/ 9813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ orders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Common/PageTitle.js
var PageTitle = __webpack_require__(7252);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__(1793);
;// CONCATENATED MODULE: ./components/Orders/OrderArea.js





const OrderArea = ()=>{
    const url = `${baseUrl/* default */.Z}/api/v1/orders`;
    const { 0: orders , 1: setOrders  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        let isSubscribed = true;
        const fetchOrder = async ()=>{
            const response = await external_axios_default().get(url);
            setOrders(response.data.orders);
        };
        fetchOrder();
        // cancel subscription to useEffect
        return ()=>isSubscribed = false;
    }, []);
    const deliverHandler = async (e)=>{
        let id = e.target.id;
        let response = await external_axios_default().put(`${baseUrl/* default */.Z}/api/v1/orders/delivered/${id}`);
        setOrders(response.data);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "table-responsive",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "table table-striped align-middle table-p15 fs-15",
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
                                        children: "Paid"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        children: "Status"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                        className: "text-center",
                                        children: "Action"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("tbody", {
                            children: orders.length > 0 ? orders.map((order, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: order.isDelivered === false ? "badge bg-warning text-dark fw-normal order-pending" : "badge bg-success fw-normal order-button",
                                                        children: order.isDelivered === false ? "Not Paid" : "Paid"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                        className: order.isDelivered === false ? "badge bg-warning text-dark fw-normal order-pending" : "badge bg-success fw-normal order-button",
                                                        children: order.isDelivered === false ? "Pending" : "Delivered"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    className: "text-center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                        className: "switch",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                type: "checkbox",
                                                                id: order.id,
                                                                checked: order.isDelivered,
                                                                onChange: deliverHandler
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                className: "slider round"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, i),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("tr", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                colSpan: "9",
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
                                    colSpan: "9",
                                    children: "No Order!"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Orders_OrderArea = (OrderArea);

// EXTERNAL MODULE: ./components/_App/Navbar.js + 1 modules
var Navbar = __webpack_require__(8871);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
;// CONCATENATED MODULE: ./pages/admin/orders/index.js






const Index = ({ user  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {
                user: user
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageTitle/* default */.Z, {
                pageTitle: "Orders",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Orders"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Orders_OrderArea, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const orders = (Index);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2244,7252], () => (__webpack_exec__(9813)));
module.exports = __webpack_exports__;

})();