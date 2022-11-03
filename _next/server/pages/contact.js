"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 1873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
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
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "sweetalert2"
const external_sweetalert2_namespaceObject = require("sweetalert2");
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_namespaceObject);
;// CONCATENATED MODULE: external "sweetalert2-react-content"
const external_sweetalert2_react_content_namespaceObject = require("sweetalert2-react-content");
var external_sweetalert2_react_content_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_react_content_namespaceObject);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(7105);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Contact/ContactForm.js





const MySwal = external_sweetalert2_react_content_default()((external_sweetalert2_default()));


const alertContent = ()=>{
    MySwal.fire({
        title: "Congratulations!",
        text: "Your message was successfully send and will back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
    });
};
// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};
const ContactForm = ()=>{
    const { 0: contact , 1: setContact  } = (0,external_react_.useState)(INITIAL_STATE);
    const handleChange = (e)=>{
        const { name , value  } = e.target;
        setContact((prevState)=>({
                ...prevState,
                [name]: value
            }));
    // console.log(contact)
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const url = `${baseUrl/* default */.Z}/api/contact`;
            const { name , email , number , subject , text  } = contact;
            const payload = {
                name,
                email,
                number,
                subject,
                text
            };
            const response = await external_axios_default().post(url, payload);
            console.log(response);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "contact-form",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                    children: "Send Us a Message"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                            children: "Your Name"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            placeholder: "Type here...",
                                            className: "form-control",
                                            value: contact.name,
                                            onChange: handleChange,
                                            required: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                            children: "Email Address"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "text",
                                            name: "email",
                                            placeholder: "Type here...",
                                            className: "form-control",
                                            value: contact.email,
                                            onChange: handleChange,
                                            required: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                            children: "Phone Number"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "text",
                                            name: "number",
                                            placeholder: "Type here...",
                                            className: "form-control",
                                            value: contact.number,
                                            onChange: handleChange,
                                            required: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                            children: "Subject"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "text",
                                            name: "subject",
                                            placeholder: "Type here...",
                                            className: "form-control",
                                            value: contact.subject,
                                            onChange: handleChange,
                                            required: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-12 col-md-12 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("label", {
                                            children: "Message..."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("textarea", {
                                            name: "text",
                                            cols: "30",
                                            rows: "6",
                                            placeholder: "Type here...",
                                            className: "form-control",
                                            value: contact.text,
                                            onChange: handleChange,
                                            required: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-12 col-md-12 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "form-check",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("input", {
                                            type: "checkbox",
                                            className: "form-check-input",
                                            id: "checkme"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            className: "form-check-label",
                                            htmlFor: "checkme",
                                            children: [
                                                "Accept ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/terms-conditions",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        children: "Terms of Services"
                                                    })
                                                }),
                                                " and ",
                                                /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
                                                    href: "/privacy-policy",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                        children: "Privacy Policy"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-12 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    type: "submit",
                                    className: "default-btn",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                            className: "far fa-paper-plane"
                                        }),
                                        " Send Message"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Contact_ContactForm = (ContactForm);

;// CONCATENATED MODULE: ./components/Contact/ContactPageContent.js



const ContactPageContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "contact-area ptb-100",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-content",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("h2", {
                                            children: "Howdy! Tell Us About Your Thinking"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("p", {
                                            children: "Contact us with your details & ready to start. Lets provide us a message & contact us!"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "contact-image",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("img", {
                                        src: "/images/contact.png",
                                        alt: "contact-image"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: "contact-form-area",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row m-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "col-lg-8 col-md-12 p-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Contact_ContactForm, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                    className: "col-lg-4 col-md-12 p-0",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "contact-info",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "Contact Information"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "fas fa-map-marker-alt"
                                                            }),
                                                            "Altona Rd, Seaholme VIC 3018, Australia"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "fas fa-mobile-alt"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                href: "tel:+1234567898",
                                                                children: "(+123) 456-7898"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                                                                className: "far fa-envelope"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                                href: "mailto:hello@luan.com",
                                                                children: "hello@luan.com"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("h3", {
                                                children: "Follow Us"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "social-links",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "https://www.facebook.com/",
                                                            target: "_blank",
                                                            children: "Facebook"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "https://www.twitter.com/",
                                                            target: "_blank",
                                                            children: "Twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "https://www.instagram.com/",
                                                            target: "_blank",
                                                            children: "Instagram"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "https://www.pinterest.com/",
                                                            target: "_blank",
                                                            children: "Pinterest"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                                                            href: "https://www.linkedin.com/",
                                                            target: "_blank",
                                                            children: "Linkedin"
                                                        })
                                                    })
                                                ]
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
    });
};
/* harmony default export */ const Contact_ContactPageContent = (ContactPageContent);

// EXTERNAL MODULE: ./components/Common/SubscribeFormStyleTwo.js
var SubscribeFormStyleTwo = __webpack_require__(1491);
// EXTERNAL MODULE: ./components/_App/Footer.js
var Footer = __webpack_require__(5245);
;// CONCATENATED MODULE: ./pages/contact.js








const Contact = ({ user  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(TopHeader/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Navbar/* default */.Z, {
                user: user
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(PageTitle/* default */.Z, {
                pageTitle: "Contact Us",
                homePageUrl: "/",
                homePageText: "Home",
                activePageText: "Contact Us"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Contact_ContactPageContent, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "pb-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(SubscribeFormStyleTwo/* default */.Z, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Footer/* default */.Z, {})
        ]
    });
};
/* harmony default export */ const contact = (Contact);


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,2244,7252,3923,1491], () => (__webpack_exec__(1873)));
module.exports = __webpack_exports__;

})();