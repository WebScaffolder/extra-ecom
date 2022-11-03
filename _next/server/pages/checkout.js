"use strict";
(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222];
exports.modules = {

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ checkout),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6734);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/_App/Navbar.js + 1 modules
var Navbar = __webpack_require__(8871);
// EXTERNAL MODULE: ./components/Common/PageTitle.js
var PageTitle = __webpack_require__(7252);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__(279);
;// CONCATENATED MODULE: external "react-stripe-checkout"
const external_react_stripe_checkout_namespaceObject = require("react-stripe-checkout");
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/CheckoutButton/CheckoutBtn.js




const CheckoutBtn = ({ handleCheckout , name , price , disabled  })=>{
    const router = (0,router_.useRouter)();
    const stripeTotal = Number((price * 100).toFixed(2));
    // console.log(stripeTotal)
    const paySuccess = ()=>{
        router.push("/success");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((external_react_stripe_checkout_default()), {
            name: name,
            amount: stripeTotal,
            currency: "USD",
            stripeKey: "...",
            token: handleCheckout,
            triggerEvent: "onClick",
            closed: paySuccess,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                className: "default-btn",
                disabled: disabled,
                children: "Place Order"
            })
        })
    });
};
/* harmony default export */ const CheckoutButton_CheckoutBtn = (CheckoutBtn);

;// CONCATENATED MODULE: ./pages/checkout.js













const INITIAL_USERDETAILS = {
    name: "",
    address: "",
    email: "",
    phone: ""
};
const Checkout = ({ user , price  })=>{
    const { 0: userDetails , 1: setuserDetails  } = (0,external_react_.useState)(INITIAL_USERDETAILS);
    const productBucket = (0,external_react_redux_.useSelector)((state)=>state.productBucket);
    const { 0: countryName , 1: setcountryName  } = (0,external_react_.useState)("Browse Category");
    const { luan_token  } = (0,external_nookies_.parseCookies)();
    const { 0: error , 1: setError  } = (0,external_react_.useState)("");
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const [disabled, setDisabled] = external_react_default().useState(true);
    external_react_default().useEffect(()=>{
        const isuserDetails = Object.values(userDetails).every((el)=>Boolean(el));
        isuserDetails ? setDisabled(false) : setDisabled(true);
    }, [
        userDetails
    ]);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setuserDetails((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const totalPrice = productBucket.length > 0 && productBucket.reduce((acc, item)=>acc + item.price * item.quantity, 0);
    const handleCheckout = async (paymentData)=>{
        try {
            const luan_token = external_js_cookie_default().get("luan_token");
            const { country , name , email , address , city , phone  } = userDetails;
            paymentData["orderItems"] = productBucket;
            paymentData["country"] = countryName;
            paymentData["name"] = name;
            paymentData["email"] = email;
            paymentData["address"] = address;
            paymentData["city"] = city;
            paymentData["phone"] = phone;
            paymentData["totalPrice"] = totalPrice;
            paymentData["stripeTotal"] = Number((totalPrice * 100).toFixed(2)), paymentData["productId"] = productBucket[0].productId;
            const payload = {
                paymentData
            };
            const url = `${baseUrl/* default */.Z}/api/v1/orders`;
            const headers = {
                headers: {
                    Authorization: luan_token
                }
            };
            const response = await external_axios_default().post(url, payload, headers);
            toast.success(response.data);
        } catch (error) {
            (0,catchErrors/* default */.Z)(error, window.alert);
            console.log(error.message);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {
                user: user
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageTitle/* default */.Z, {
                pageTitle: "Checkout",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Checkout"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "checkout-area ptb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        !user && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "user-actions",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                    className: "fas fa-sign-in-alt"
                                }),
                                " ",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "Returning customer?",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                            href: "/authentication",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                children: "Click here to login"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-6 col-md-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "billing-details",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    className: "title",
                                                    children: "Billing Details"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "col-lg-12 col-md-12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                        children: [
                                                                            "Name ",
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                        type: "text",
                                                                        className: "form-control",
                                                                        placeholder: "Type here...",
                                                                        name: "name",
                                                                        value: userDetails.name,
                                                                        onChange: handleChange,
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "col-lg-12 col-md-12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                        children: [
                                                                            "Email Address ",
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                        type: "email",
                                                                        className: "form-control",
                                                                        placeholder: "Type here...",
                                                                        name: "email",
                                                                        value: userDetails.email,
                                                                        onChange: handleChange,
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "col-lg-12 col-md-12",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                        children: [
                                                                            "Phone ",
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                        type: "number",
                                                                        className: "form-control",
                                                                        placeholder: "Type here...",
                                                                        name: "phone",
                                                                        value: userDetails.phone,
                                                                        onChange: handleChange,
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                            className: "col-lg-12 col-md-6",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "form-group",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                                        children: [
                                                                            "Address ",
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                className: "required",
                                                                                children: "*"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                                        type: "text",
                                                                        className: "form-control",
                                                                        placeholder: "Type here...",
                                                                        name: "address",
                                                                        value: userDetails.address,
                                                                        onChange: handleChange,
                                                                        required: true
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                        className: "col-lg-6 col-md-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "order-details",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                    className: "title",
                                                    children: "Your Order"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "order-table table-responsive",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                                        className: "table table-bordered",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("thead", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                                            scope: "col",
                                                                            children: "Product Name"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                                            scope: "col",
                                                                            children: "Total"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                                                children: [
                                                                    productBucket.length > 0 && productBucket.map((product, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                                    className: "product-name",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                                        href: `/product/${product.productId}`,
                                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                                            children: [
                                                                                                product.title,
                                                                                                " : ",
                                                                                                product.quantity
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                                    className: "product-total",
                                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "subtotal-amount",
                                                                                        children: [
                                                                                            "$",
                                                                                            product.price,
                                                                                            " x ",
                                                                                            product.quantity
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }, i)),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                                children: "Shipping"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                                children: "Free"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                                className: "total-price",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                    children: "Order Total"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                                                className: "product-subtotal",
                                                                                children: totalPrice > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                    className: "subtotal-amount",
                                                                                    children: [
                                                                                        "$",
                                                                                        totalPrice
                                                                                    ]
                                                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                                                    className: "subtotal-amount",
                                                                                    children: "$0"
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "payment-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "payment-method",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)(CheckoutButton_CheckoutBtn, {
                                                                handleCheckout: handleCheckout,
                                                                name: "Place Order",
                                                                price: totalPrice,
                                                                disabled: disabled
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer/* default */.Z, {})
        ]
    });
};
async function getServerSideProps(context) {
    const { luan_token  } = (0,external_nookies_.parseCookies)(context);
    // console.log(luan_token)
    if (!luan_token) {
        return {
            redirect: {
                permanent: false,
                destination: "/authentication"
            }
        };
    }
    return {
        props: {}
    };
}
/* harmony default export */ const checkout = (Checkout);


/***/ }),

/***/ 7105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? "https://extra-ecom.vercel.app" : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


/***/ }),

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const catchErrors = (error, displayError)=>{
    let errorMsg;
    if (error.response) {
        errorMsg = error.response.data;
        // console.error("Error response", errorMsg.description);
        // for image upload
        if (error.response.data.error) {
            errorMsg = error.response.data.error.message;
        }
    } else if (error.request) {
        // Request made but no response recieved
        errorMsg = error.request;
    // console.error("Error request", errorMsg);
    } else {
    // console.error("Error message", errorMsg);
    }
    displayError(errorMsg);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catchErrors);


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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2244,7252], () => (__webpack_exec__(173)));
module.exports = __webpack_exports__;

})();