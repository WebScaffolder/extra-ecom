"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const App = ()=>{
    // The back-to-top button is hidden at the beginning
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 150) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);
    // This function will scroll the window to the top 
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth" // for smoothly scrolling
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            onClick: scrollToTop,
            className: "go-top",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                className: "fas fa-chevron-up"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ 1663:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2391);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Layout = ({ children  })=>{
    // console.log(user)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                        children: "Luan - React Next Dynamic eCommerce Template"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        name: "description",
                        content: "Luan - React Next Dynamic eCommerce Template"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        name: "og:title",
                        property: "og:title",
                        content: "Luan - React Next Dynamic eCommerce Template"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                        name: "twitter:card",
                        content: "Luan - React Next Dynamic eCommerce Template"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
                        rel: "canonical",
                        href: "https://luan-react.hibotheme.com/"
                    })
                ]
            }),
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {
                position: "bottom-center"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GoTop__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1663);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5564);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7105);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1761);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_App_Layout__WEBPACK_IMPORTED_MODULE_2__]);
_components_App_Layout__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










// Global Style









const MyApp = ({ Component , pageProps  })=>{
    const store = (0,_store__WEBPACK_IMPORTED_MODULE_6__/* .useStore */ .o)(pageProps.initialReduxState);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: store,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...pageProps
            })
        })
    });
};
MyApp.getInitialProps = async ({ Component , ctx  })=>{
    const { luan_token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(ctx);
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    if (!luan_token) {
        // if a user not logged in then user can't access those pages
        const isProtectedRoute = ctx.pathname === "/profile" || ctx.pathname === "/product/create" || ctx.pathname === "/admin/dashboard" || ctx.pathname === "/admin/orders/my-orders" || ctx.pathname === "/admin/orders";
        if (isProtectedRoute) {
            (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* .redirectUser */ .a0)(ctx, "/authentication");
        }
    } else {
        // if a user logged in then user can't access those pages
        const ifLoggedIn = ctx.pathname === "/authentication";
        if (ifLoggedIn) {
            (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* .redirectUser */ .a0)(ctx, "/");
        }
        try {
            const payload = {
                headers: {
                    Authorization: luan_token
                }
            };
            const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z}/api/v1/auth/account`;
            const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(url, payload);
            const user = response.data;
            const isAdmin = user.role === "admin";
            const isNotPermitted = !isAdmin && (ctx.pathname === "/product/create" || ctx.pathname === "/admin/orders" || ctx.pathname === "/admin/dashboard");
            if (isNotPermitted) {
                (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* .redirectUser */ .a0)(ctx, "/");
            }
            // console.log(user)
            // If user status disabled then user autometically logged out
            if (!user || !user.active) {
                (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(ctx, "luan_token");
            }
            pageProps.user = user;
        } catch (error) {
            // invalid luan_token
            // console.log(error)
            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(ctx, "luan_token");
        }
    }
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        pageProps
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ useStore)
});

// UNUSED EXPORTS: initializeStore

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./store.js



let store;
const initialState = {
    productBucket: []
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            let existingItem = state.productBucket.find((product)=>action.data.productId === product.productId);
            if (existingItem) {
                existingItem.quantity += 1;
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    productBucket: [
                        ...state.productBucket,
                        action.data
                    ]
                };
            }
        case "DECREASE_PRODUCT_QUANTITY":
            let existItem = state.productBucket.find((product)=>action.data.productId === product.productId);
            if (existItem) {
                existItem.quantity > 1 ? existItem.quantity -= 1 : 1;
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    productBucket: [
                        ...state.productBucket,
                        action.data
                    ]
                };
            }
        case "REMOVE_CART_ITEM":
            return {
                ...state,
                productBucket: state.productBucket.filter((product)=>product.productId !== action.data)
            };
        default:
            return state;
    }
};
function initStore(preloadedState = initialState) {
    return (0,external_redux_namespaceObject.createStore)(reducer, preloadedState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)()));
}
const initializeStore = (preloadedState)=>{
    let _store = store ?? initStore(preloadedState);
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        });
        // Reset the current store
        store = undefined;
    }
    // For SSG and SSR always create a new store
    if (true) return _store;
    // Create the store once in the client
    if (!store) store = _store;
    return _store;
};
function useStore(initialState) {
    const store = (0,external_react_.useMemo)(()=>initializeStore(initialState), [
        initialState
    ]);
    return store;
}


/***/ }),

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a0": () => (/* binding */ redirectUser),
/* harmony export */   "hY": () => (/* binding */ handleLogout),
/* harmony export */   "jc": () => (/* binding */ handleLogin)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const handleLogin = (token)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set("luan_token", token);
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/");
};
const redirectUser = (ctx, location)=>{
    if (ctx.req) {
        ctx.res.writeHead(302, {
            Location: location
        });
        ctx.res.end();
    } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(location);
    }
};
const handleLogout = ()=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove("luan_token");
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push("/");
};


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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8510));
module.exports = __webpack_exports__;

})();