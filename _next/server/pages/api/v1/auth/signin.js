"use strict";
(() => {
var exports = {};
exports.id = 1375;
exports.ids = [1375];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 7379:
/***/ ((module) => {

module.exports = require("validator/lib/isEmail");

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

/***/ 5139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8174);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_4__);






// Initialize the cors middleware
const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
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
    const { email , password  } = req.body;
    try {
        if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default()(email)) {
            return res.status(422).send("Email should be a valid email address");
        }
        const user = await _models__WEBPACK_IMPORTED_MODULE_4__.users.findOne({
            where: {
                email: email
            }
        });
        if (!user) {
            return res.status(404).send("User account does not exist");
        }
        if (!user.active) {
            return res.status(404).send("This account is temporarily disabled, please contact the support email");
        }
        const passwordsMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);
        if (passwordsMatch) {
            const luan_token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
                userId: user.id
            }, "djhfghbdsgrasklkajsdgf", {
                expiresIn: "7d"
            });
            res.status(200).send(luan_token);
        } else {
            res.status(401).send("Password is not correct");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error logging in user");
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(5139)));
module.exports = __webpack_exports__;

})();