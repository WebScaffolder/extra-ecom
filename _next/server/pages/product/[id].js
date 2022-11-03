"use strict";
(() => {
var exports = {};
exports.id = 6360;
exports.ids = [6360];
exports.modules = {

/***/ 5264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SimpleProduct_ProductsDetailsTabs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-tabs"
const external_react_tabs_namespaceObject = require("react-tabs");
;// CONCATENATED MODULE: ./components/SimpleProduct/ProductsDetailsTabs.js



const ProductsDetailsTabs = ({ long_description , additional_info  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
        className: "products-details-tabs",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_tabs_namespaceObject.Tabs, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_tabs_namespaceObject.TabList, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_tabs_namespaceObject.Tab, {
                            children: "Description"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_tabs_namespaceObject.Tab, {
                            children: "Additional information"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_tabs_namespaceObject.Tab, {
                            children: "Reviews (4)"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_tabs_namespaceObject.TabPanel, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: long_description
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_tabs_namespaceObject.TabPanel, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "table-responsive",
                        dangerouslySetInnerHTML: {
                            __html: additional_info
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_tabs_namespaceObject.TabPanel, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "products-review-comments",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "user-review",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            src: "/images/user/user1.jpg",
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "review-stars",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "d-inline-block",
                                                    children: "James Anderson"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Excellent"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "user-review",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            src: "/images/user/user2.jpg",
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "review-stars",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "d-inline-block",
                                                    children: "Sarah Taylor"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Video Quality!"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "Was really easy to implement and they quickly answer my additional questions!"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "user-review",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            src: "/images/user/user3.jpg",
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "review-stars",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "d-inline-block",
                                                    children: "David Warner"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Perfect Coding!"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "user-review",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                            src: "/images/user/user4.jpg",
                                            alt: "image"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "review-rating",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "review-stars",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star checked"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "fas fa-star"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                                    className: "d-inline-block",
                                                    children: "King Kong"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            className: "d-block sub-comment",
                                            children: "Perfect Video!"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "review-form-wrapper",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                    children: "Add a review"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "comment-notes",
                                    children: [
                                        "Your email address will not be published. Required fields are marked ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("span", {
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("form", {
                                    onSubmit: (e)=>e.preventDefault(),
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "rating",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "radio",
                                                            id: "star5",
                                                            name: "rating",
                                                            value: "5"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            htmlFor: "star5"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "radio",
                                                            id: "star4",
                                                            name: "rating",
                                                            value: "4"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            htmlFor: "star4"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "radio",
                                                            id: "star3",
                                                            name: "rating",
                                                            value: "3"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            htmlFor: "star3"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "radio",
                                                            id: "star2",
                                                            name: "rating",
                                                            value: "2"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            htmlFor: "star2"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "radio",
                                                            id: "star1",
                                                            name: "rating",
                                                            value: "1"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            htmlFor: "star1"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-lg-6 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                        type: "text",
                                                        className: "form-control",
                                                        placeholder: "Name *"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-lg-6 col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                        type: "email",
                                                        className: "form-control",
                                                        placeholder: "Email *"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                                                        placeholder: "Your review",
                                                        className: "form-control",
                                                        cols: "30",
                                                        rows: "6"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "comment-form-cookies-consent",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "checkbox",
                                                            id: "test1"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            htmlFor: "test1",
                                                            children: "Save my name, email, and website in this browser for the next time I comment."
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                                    type: "submit",
                                                    children: "SUBMIT"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const SimpleProduct_ProductsDetailsTabs = (ProductsDetailsTabs);


/***/ }),

/***/ 9901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8871);
/* harmony import */ var _components_Common_PageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7252);
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5245);
/* harmony import */ var _components_SimpleProduct_ProductsDetailsTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5264);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7105);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6201);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_8__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Product = ({ product , user  })=>{
    const { title , price , short_description , sku , category , tag , availability , additional_info , long_description , img_url  } = product;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { 0: qty , 1: setQty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const addToCart = (product)=>{
        let productObj = {};
        productObj["productId"] = product.id;
        productObj["title"] = product.title;
        productObj["price"] = product.price;
        productObj["img_url"] = product.img_url;
        productObj["quantity"] = qty;
        dispatch({
            type: "ADD_TO_CART",
            data: productObj
        });
        react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.toast.success("Added new item into cart");
    };
    const increment = ()=>{
        if (qty > 9) {
            return;
        }
        setQty(qty + 1);
    };
    const decrement = ()=>{
        if (qty < 2) {
            return;
        }
        setQty(qty - 1);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                user: user
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Common_PageTitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: "Products Details",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Products Details"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "products-details-area ptb-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "col-lg-5 col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "products-details-image",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                        src: img_url,
                                        alt: "Products image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "col-lg-7 col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "products-details-desc",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                            children: title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "price",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "new-price",
                                                children: [
                                                    "$",
                                                    price
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "products-review",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "rating",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                            className: "fas fa-star"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                            className: "fas fa-star-half-alt"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                    href: "#",
                                                    className: "rating-count",
                                                    children: "4 reviews"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            children: short_description
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "products-info",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "SKU: ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "sku",
                                                                children: sku
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "Availability: ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "in-stock",
                                                                children: availability
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "Categories: ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                                    children: category
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            "Tag: ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                                    children: tag
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                        href: "/delivery-returns",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                            target: "_blank",
                                                            children: "Delivery & return"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "products-size",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    children: "Size:"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                            children: "XS"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                            className: "active",
                                                            children: "S"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                            children: "M"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                            children: "XL"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                            children: "XXL"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "products-add-to-cart",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "input-counter",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "minus-btn",
                                                                onClick: decrement,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                                    className: "fas fa-minus"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                                type: "text",
                                                                value: qty,
                                                                onChange: (e)=>e
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "plus-btn",
                                                                onClick: increment,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                                    className: "fas fa-plus"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        className: "default-btn",
                                                        onClick: ()=>addToCart(product),
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                                className: "fas fa-cart-plus"
                                                            }),
                                                            "Add to Cart"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            className: "add-to-wishlist-btn",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                    className: "fas fa-plus"
                                                }),
                                                " Add to Wishlist"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "products-share",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "social",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            children: "Share:"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                            href: "https://www.facebook.com/",
                                                            className: "facebook",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                                className: "fab fa-facebook-f"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                            href: "https://www.linkedin.com/",
                                                            className: "twitter",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                                className: "fab fa-linkedin-in"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                            href: "https://www.linkedin.com/",
                                                            className: "linkedin",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                                className: "fab fa-twitter"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                                            href: "https://www.instagram.com/",
                                                            className: "instagram",
                                                            target: "_blank",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "col-lg-12 col-md-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_SimpleProduct_ProductsDetailsTabs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    long_description: long_description,
                                    additional_info: additional_info
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_App_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
Product.getInitialProps = async (ctx)=>{
    const { id  } = ctx.query;
    // console.log('##########=>', ctx)
    const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z}/api/v1/products/${id}`;
    const response = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(url);
    // console.log(response)
    return response.data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? "https://extra-ecom.vercel.app" : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);


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

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2244,7252], () => (__webpack_exec__(9901)));
module.exports = __webpack_exports__;

})();