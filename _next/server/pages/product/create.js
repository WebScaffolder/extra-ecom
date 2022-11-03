"use strict";
(() => {
var exports = {};
exports.id = 6533;
exports.ids = [6533];
exports.modules = {

/***/ 5895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(279);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7105);
/* harmony import */ var _utils_RTEControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7994);
/* harmony import */ var _utils_RTEControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_RTEControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const RichTextEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\Product\\ProductForm.js -> " + "@mantine/rte"
        ]
    },
    ssr: false,
    loading: ()=>null
});
const INITIAL_PRODUCT = {
    title: "",
    price: "",
    img_url: "",
    short_description: "",
    long_description: "",
    additional_info: "",
    sku: "",
    availability: "",
    category: "",
    tag: ""
};
const ProductForm = ()=>{
    const { luan_token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();
    const [product, setProduct] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(INITIAL_PRODUCT);
    const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [mediaPreview, setMediaPreview] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const onDismiss = ()=>setError(false);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const isProduct = Object.values(product).every((el)=>Boolean(el));
        isProduct ? setDisabled(false) : setDisabled(true);
    }, [
        product
    ]);
    const handleChange = (e)=>{
        // console.log(d.value)
        const { name , value , files  } = e.target;
        if (name === "media") {
            let fileSize = files[0].size / 860 / 1090;
            if (fileSize > 2) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.error("The file size greater than 2 MB. Make sure less than 2 MB.");
                e.target.value = null;
                return;
            }
            setProduct((prevState)=>({
                    ...prevState,
                    img_url: files[0]
                }));
            setMediaPreview(window.URL.createObjectURL(files[0]));
        } else {
            setProduct((prevState)=>({
                    ...prevState,
                    [name]: value
                }));
        }
    // console.log(post);
    };
    const handleImageUpload = async ()=>{
        // console.log(post.file_url)
        const data = new FormData();
        data.append("file", product.img_url);
        data.append("upload_preset", "...");
        data.append("cloudinary_name", "...");
        const response = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("...", data);
        const mediaUrl = response.data.url;
        return mediaUrl;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            let mediaUrl = "";
            if (product.img_url) {
                const imageUrl = await handleImageUpload();
                mediaUrl = imageUrl.replace(/^http:\/\//i, "https://");
            }
            const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z}/api/v1/products/create`;
            const { title , price , short_description , long_description , additional_info , sku , availability , category , tag ,  } = product;
            const payload = {
                title,
                price,
                short_description,
                long_description,
                additional_info,
                sku,
                mediaUrl,
                availability,
                category,
                tag
            };
            await axios__WEBPACK_IMPORTED_MODULE_4___default().post(url, payload, {
                headers: {
                    Authorization: luan_token
                }
            });
            // console.log(response.data)
            setLoading(false);
            // router.push(`/product/create`)
            setProduct(INITIAL_PRODUCT);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.toast.success("Product created successfully.");
            setSuccess(true);
        } catch (error) {
            (0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(error, setError);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "register-form",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Alert, {
                    variant: "danger",
                    show: error ? true : false,
                    onClose: onDismiss,
                    dismissible: true,
                    children: error
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "col text-end",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                            href: "/admin/dashboard/",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                className: "btn btn-dark btn-sm",
                                children: "See All Products"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Product Name ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "red",
                                            title: "Must fillup the field",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Product Name",
                                    name: "title",
                                    value: product.title,
                                    onChange: handleChange
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Product Short Description ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "red",
                                            title: "Must fillup the field",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Type here...",
                                    name: "short_description",
                                    value: product.short_description,
                                    onChange: handleChange,
                                    rows: "4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Price ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "red",
                                            title: "Must fillup the field",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                    className: "form-control",
                                    placeholder: "100.00",
                                    name: "price",
                                    type: "number",
                                    value: product.price,
                                    onChange: handleChange
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    "Status ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "red",
                                                        title: "Must fillup the field",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                className: "form-control",
                                                placeholder: "In Stock",
                                                name: "availability",
                                                type: "text",
                                                value: product.availability,
                                                onChange: handleChange
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    "SKU ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "red",
                                                        title: "Must fillup the field",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                className: "form-control",
                                                placeholder: "SKU",
                                                name: "sku",
                                                type: "text",
                                                value: product.sku,
                                                onChange: handleChange
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    "Product Category ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "red",
                                                        title: "Must fillup the field",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "text",
                                                className: "form-control",
                                                placeholder: "Category",
                                                name: "category",
                                                value: product.category,
                                                onChange: handleChange
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    "Product Tag ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "red",
                                                        title: "Must fillup the field",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                                type: "text",
                                                className: "form-control",
                                                placeholder: "Product Tag",
                                                name: "tag",
                                                value: product.tag,
                                                onChange: handleChange
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    "Full Details of The Product ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "red",
                                                        title: "Must fillup the field",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichTextEditor, {
                                                controls: (_utils_RTEControl__WEBPACK_IMPORTED_MODULE_7___default()),
                                                value: product.long_description,
                                                onChange: (e)=>setProduct((prevState)=>({
                                                            ...prevState,
                                                            long_description: e
                                                        }))
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                children: [
                                                    "Additional Information ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "red",
                                                        title: "Must fillup the field",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RichTextEditor, {
                                                controls: (_utils_RTEControl__WEBPACK_IMPORTED_MODULE_7___default()),
                                                value: product.additional_info,
                                                onChange: (e)=>setProduct((prevState)=>({
                                                            ...prevState,
                                                            additional_info: e
                                                        }))
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    children: [
                                        "Product Image ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "red",
                                            title: "Must fillup the field",
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                                    type: "file",
                                    name: "media",
                                    onChange: handleChange
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("small", {
                                    className: "text-muted mt-2 d-block",
                                    children: "Recommend image size 860x1090!"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            type: "submit",
                            className: "default-btn",
                            disabled: disabled,
                            children: [
                                "Create Product ",
                                " ",
                                loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
                                    color: "success"
                                }) : ""
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7869:
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
/* harmony import */ var _components_Product_ProductForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5895);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Product_ProductForm__WEBPACK_IMPORTED_MODULE_5__]);
_components_Product_ProductForm__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Product = ({ user  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                user: user
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Common_PageTitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: "Create Product",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Create Product"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "profile-authentication-area ptb-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "col-lg-12 col-md-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Product_ProductForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_App_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7994:
/***/ ((module) => {


module.exports = [
    [
        "bold",
        "italic",
        "underline"
    ],
    [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5"
    ],
    [
        "unorderedList",
        "orderedList"
    ],
    [
        "link",
        "video"
    ],
    [
        "code",
        "sup",
        "sub"
    ],
    [
        "alignLeft",
        "alignCenter",
        "alignRight"
    ], 
];


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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,2244,7252], () => (__webpack_exec__(7869)));
module.exports = __webpack_exports__;

})();