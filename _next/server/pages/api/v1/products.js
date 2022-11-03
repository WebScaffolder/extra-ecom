"use strict";
(() => {
var exports = {};
exports.id = 1501;
exports.ids = [1501];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 8174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ initMiddleware)
/* harmony export */ });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
    return (req, res)=>new Promise((resolve, reject)=>{
            middleware(req, res, (result)=>{
                if (result instanceof Error) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
};


/***/ }),

/***/ 4306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8174);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_1__);



// Initialize the cors middleware
const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
    // Only allow requests with GET, POST and OPTIONS
    methods: [
        "GET",
        "POST",
        "OPTIONS",
        "DELETE",
        "PUT"
    ]
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    await cors(req, res);
    switch(req.method){
        case "GET":
            await handleGetRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const handleGetRequest = async (req, res)=>{
    const { page , limit  } = req.query;
    const { priority  } = req.body;
    const pageNumber = parseInt(page);
    const pageLimit = parseInt(limit);
    const getRealNumber = isNaN(pageNumber) ? 0 : pageNumber;
    const postsOffset = pageLimit * (getRealNumber - 1);
    try {
        // conditional query generator
        const totalCount = await _models__WEBPACK_IMPORTED_MODULE_1__.products.count({});
        const products = await _models__WEBPACK_IMPORTED_MODULE_1__.products.findAll({
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ],
            offset: postsOffset,
            pageLimit
        });
        const totalPages = Math.ceil(totalCount / pageLimit);
        res.send({
            products,
            totalPages
        });
    } catch (error) {
        console.log("product==>>>>>>>>", error);
        res.status(500).send("Error");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(4306)));
module.exports = __webpack_exports__;

})();