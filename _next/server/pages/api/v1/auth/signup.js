"use strict";
(() => {
var exports = {};
exports.id = 1657;
exports.ids = [1657];
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

/***/ 7355:
/***/ ((module) => {

module.exports = require("validator/lib/isLength");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

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

/***/ 1916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7379);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7355);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8174);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








// Initialize the cors middleware
const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
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
    const confirmToken = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)();
    let { name , email , password , confirmPassword  } = req.body;
    try {
        if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5___default()(name, {
            min: 3
        })) {
            return res.status(422).send("The name should be a minimum of Three characters long");
        } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4___default()(email)) {
            return res.status(422).send("Email should be a valid email address");
        } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5___default()(password, {
            min: 6
        })) {
            return res.status(422).send("Password should be minimum of Six characters long");
        } else if (password != confirmPassword) {
            return res.status(422).send("Password doesn't match");
        }
        // Check if user with that email if already exists
        const user = await _models__WEBPACK_IMPORTED_MODULE_6__.users.findOne({
            where: {
                email: email
            }
        });
        if (user) {
            return res.status(422).send(`User already exist with email ${email}`);
        }
        // Encrypt password with bcrypt
        const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);
        const newUser = await _models__WEBPACK_IMPORTED_MODULE_6__.users.create({
            name,
            email,
            password: passwordHash,
            emailResetToken: confirmToken
        });
        const luan_token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({
            userId: newUser.id
        }, "djhfghbdsgrasklkajsdgf", {
            expiresIn: "7d"
        });
        // confirmEmailAddress(newUser)
        res.status(201).json(luan_token);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error in account signup. Please try again.");
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(1916)));
module.exports = __webpack_exports__;

})();