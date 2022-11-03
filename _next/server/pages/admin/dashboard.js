"use strict";
(() => {
var exports = {};
exports.id = 9189;
exports.ids = [9189];
exports.modules = {

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/_App/Navbar.js + 1 modules
var Navbar = __webpack_require__(8871);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
// EXTERNAL MODULE: ./components/Common/PageTitle.js
var PageTitle = __webpack_require__(7252);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: ./utils/formatDate.js
var formatDate = __webpack_require__(1793);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(3053);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: external "react-bootstrap/Spinner"
const Spinner_namespaceObject = require("react-bootstrap/Spinner");
var Spinner_default = /*#__PURE__*/__webpack_require__.n(Spinner_namespaceObject);
// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__(279);
;// CONCATENATED MODULE: ./components/Product/ProductModal.js








const QuickView = ({ show , handleClose , product , eProduct  })=>{
    function refreshPage() {
        window.setTimeout(function() {
            location.reload();
        }, 3000);
    }
    // console.log(product);
    const { luan_token  } = (0,external_nookies_.parseCookies)();
    const { 0: error , 1: setError  } = (0,external_react_.useState)("");
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: updateProduct , 1: setupdateProduct  } = (0,external_react_.useState)({
        id: "",
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
    });
    (0,external_react_.useEffect)(()=>{
        setupdateProduct({
            id: product.id,
            title: product.title,
            price: product.price,
            img_url: product.img_url,
            short_description: product.short_description,
            long_description: product.long_description,
            additional_info: product.additional_info,
            sku: product.sku,
            availability: product.availability,
            category: product.category,
            tag: product.tag
        });
    }, [
        product
    ]);
    const handleChange = (e)=>{
        // console.log(d.value)
        const { name , value , files  } = e.target;
        if (name === "media") {
            let fileSize = files[0].size / 860 / 1090;
            if (fileSize > 2) {
                e.target.value = null;
                return;
            }
            setupdateProduct((prevState)=>({
                    ...prevState,
                    img_url: files[0]
                }));
        } else {
            setupdateProduct((prevState)=>({
                    ...prevState,
                    [name]: value
                }));
        }
    };
    const handleImageUpload = async ()=>{
        const data = new FormData();
        data.append("file", updateProduct.img_url);
        data.append("upload_preset", "...");
        data.append("cloudinary_name", "...");
        const response = await external_axios_default().post("...", data);
        const mediaUrl = response.data.url;
        return mediaUrl;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            let mediaUrl = "";
            if (updateProduct.img_url) {
                const imageUrl = await handleImageUpload();
                mediaUrl = imageUrl.replace(/^http:\/\//i, "https://");
            }
            const { id , title , price , short_description , long_description , additional_info , sku , availability , category , tag , img_url  } = updateProduct;
            const url = `${baseUrl/* default */.Z}/api/v1/products/${id}`;
            const payload = {
                title,
                price,
                short_description,
                long_description,
                additional_info,
                sku,
                availability,
                category,
                tag,
                img_url: mediaUrl ? mediaUrl : img_url
            };
            const response = await external_axios_default().put(url, payload, {
                headers: {
                    Authorization: luan_token
                }
            });
            eProduct(response.data.products);
            setLoading(false);
            router.replace(`/admin/dashboard`);
        // setProduct(INITIAL_PRODUCT);
        } catch (error) {
            console.log(error);
            (0,catchErrors/* default */.Z)(error, setError);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Modal, {
            size: "lg",
            "aria-labelledby": "contained-modal-title-vcenter",
            centered: true,
            show: show,
            onHide: handleClose,
            className: "product-update-modal",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_bootstrap_.Modal.Header, {
                    closeButton: true,
                    className: "close-button",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_bootstrap_.Modal.Title, {
                        children: "Update Product"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_bootstrap_.Modal.Body, {
                    className: "p-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_bootstrap_.Container, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_bootstrap_.Row, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "product-update-form",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("form", {
                                    onSubmit: handleSubmit,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Product Name"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            className: "form-control",
                                                            type: "text",
                                                            name: "title",
                                                            placeholder: "title",
                                                            value: updateProduct.title || "",
                                                            onChange: handleChange
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-12 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Product Short Description"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                                                            type: "text",
                                                            className: "form-control",
                                                            name: "short_description",
                                                            value: updateProduct.short_description || "",
                                                            onChange: handleChange,
                                                            rows: "4"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-12 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Price"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            className: "form-control",
                                                            type: "text",
                                                            name: "price",
                                                            placeholder: "Price",
                                                            value: updateProduct.price || "",
                                                            onChange: handleChange
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Status"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            className: "form-control",
                                                            placeholder: "In Stock",
                                                            name: "availability",
                                                            type: "text",
                                                            value: updateProduct.availability || "",
                                                            onChange: handleChange
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "SKU"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            className: "form-control",
                                                            placeholder: "SKU",
                                                            name: "sku",
                                                            type: "text",
                                                            value: updateProduct.sku || "",
                                                            onChange: handleChange
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Product Category"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            placeholder: "Category",
                                                            name: "category",
                                                            value: updateProduct.category || "",
                                                            onChange: handleChange
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Product Tag"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "text",
                                                            className: "form-control",
                                                            placeholder: "Product Tag",
                                                            name: "tag",
                                                            value: updateProduct.tag || "",
                                                            onChange: handleChange
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-12 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Full Details of The Product"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                                                            type: "text",
                                                            className: "form-control",
                                                            name: "long_description",
                                                            value: updateProduct.long_description || "",
                                                            onChange: handleChange,
                                                            rows: "6"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-12 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Additional Information"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                                                            type: "text",
                                                            className: "form-control",
                                                            name: "additional_info",
                                                            value: updateProduct.additional_info || "",
                                                            onChange: handleChange,
                                                            rows: "6"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-12 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                                            children: "Product Image"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                                            type: "file",
                                                            name: "media",
                                                            className: "form-control height-auto",
                                                            onChange: handleChange
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("small", {
                                                            className: "text-muted mt-2 d-block",
                                                            children: "Recommend image size 860x1090!"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                                className: "col-md-12 col-sm-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    className: "default-btn product-submit-button",
                                                    type: "submit",
                                                    onClick: refreshPage,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                            className: "far fa-edit"
                                                        }),
                                                        " Update Product",
                                                        loading ? /*#__PURE__*/ (0,jsx_runtime_.jsx)((Spinner_default()), {
                                                            color: "success",
                                                            className: "ms-2",
                                                            animation: "border",
                                                            size: "sm"
                                                        }) : ""
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_bootstrap_.Modal.Footer, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_bootstrap_.Button, {
                        variant: "secondary",
                        size: "sm",
                        onClick: handleClose,
                        children: "Close"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const ProductModal = (QuickView);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Admin/DashboardArea.js








const DashboardArea = ({ products , totalPages  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    //set products after delete or edit
    const { 0: newProducts , 1: setNewProducts  } = (0,external_react_.useState)("");
    //sending selected products to modal
    const { 0: editProduct , 1: setEditProduct  } = (0,external_react_.useState)("");
    let page = parseInt(router.query.page) ? parseInt(router.query.page) : 1;
    (0,external_react_.useEffect)(()=>{
        setNewProducts(products);
    }, [
        page
    ]);
    const eProduct = (product)=>{
        setNewProducts(product);
    };
    const handleDelete = (productId)=>{
        const url = `${baseUrl/* default */.Z}/api/v1/products/${productId}`;
        const deleteProduct = async ()=>{
            const response = await external_axios_default()["delete"](url);
            setNewProducts(response.data.products);
        };
        deleteProduct();
    };
    const handleShow = (prod)=>{
        setEditProduct(prod);
        setShow(true);
    };
    const handleClose = ()=>setShow(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "dashboard-area ptb-100",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "dashboard-table",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "title",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "col-6",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "All Products"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                            className: "col-6 text-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                href: "/product/create/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                    className: "btn btn-dark btn-sm mb-2",
                                                    children: "Create Product"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "table-responsive",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "table table-striped align-middle table-hover fs-15",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("thead", {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        children: "Image"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        children: "Date"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        children: "Price"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        children: "Category"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        children: "In Stock"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("th", {
                                                        children: "Action"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("tbody", {
                                            children: newProducts.length > 0 ? newProducts.map((product)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                            className: "table-img",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                href: `/product/${product.id}`,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                    className: "d-block",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                                                        src: product.img_url,
                                                                        alt: "image",
                                                                        width: "40"
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                href: `/product/${product.id}`,
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                    children: product.title
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                            children: (0,formatDate/* default */.Z)(product.createdAt)
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            children: [
                                                                "$",
                                                                product.price
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                            children: product.category
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                            children: product.availability
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                                                    className: "btn btn-danger btn-sm fs-12",
                                                                    onClick: ()=>handleDelete(product.id),
                                                                    children: "Delete"
                                                                }),
                                                                " ",
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                                                                    className: "btn btn-primary btn-sm fs-12",
                                                                    onClick: ()=>handleShow(product),
                                                                    children: "Edit"
                                                                }),
                                                                " ",
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                                    href: `/product/${product.id}`,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                        className: "btn btn-secondary btn-sm fs-12",
                                                                        target: "_blank",
                                                                        children: "View"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, product.id)) : /*#__PURE__*/ (0,jsx_runtime_.jsx)("tr", {
                                                className: "empty-tr",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("td", {
                                                    colSpan: "7",
                                                    children: "No Product!"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(ProductModal, {
                    show: show,
                    handleClose: handleClose,
                    product: editProduct,
                    eProduct: eProduct
                })
            ]
        })
    });
};
/* harmony default export */ const Admin_DashboardArea = (DashboardArea);

;// CONCATENATED MODULE: ./pages/admin/dashboard.js







const Dashboard = ({ products , totalPages , user  })=>{
    console.log("dash", products);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {
                user: user
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageTitle/* default */.Z, {
                pageTitle: "Dashboard",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Dashboard"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Admin_DashboardArea, {
                products: products,
                totalPages: totalPages
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer/* default */.Z, {})
        ]
    });
};
Dashboard.getInitialProps = async (ctx)=>{
    const page = ctx.query.page ? ctx.query.page : "1";
    const payload = {
        params: {
            page,
            limit: 100
        }
    };
    const url = `${baseUrl/* default */.Z}/api/v1/products`;
    const response = await external_axios_default().get(url, payload);
    return response.data;
};
/* harmony default export */ const dashboard = (Dashboard);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2244,7252], () => (__webpack_exec__(4499)));
module.exports = __webpack_exports__;

})();