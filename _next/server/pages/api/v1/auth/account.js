"use strict";
(() => {
var exports = {};
exports.id = 2658;
exports.ids = [2658];
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

/***/ 7355:
/***/ ((module) => {

module.exports = require("validator/lib/isLength");

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

/***/ 8111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8174);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7355);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_4__);






// Initialize the cors middlewares
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
    if (!("authorization" in req.headers)) {
        return res.status(401).json({
            message: "No autorization token"
        });
    }
    switch(req.method){
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "PUT":
            await handlePutRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
    }
});
const handlePostRequest = async (req, res)=>{
    const { currentPassword , newPassword , newConfirmPassword  } = req.body;
    try {
        const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
        // check email, name, password format
        if (!currentPassword) {
            return res.status(422).send({
                message: "Must be provide current Password!"
            });
        } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3___default()(newPassword, {
            min: 6,
            max: 12
        })) {
            return res.status(422).send({
                message: "New Password must be 6-12 characters long!"
            });
        } else if (newPassword != newConfirmPassword) {
            return res.status(422).json({
                message: "Confirm password doesn't matched!"
            });
        }
        const newPasswordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(newPassword, 10);
        const user = await _models__WEBPACK_IMPORTED_MODULE_4__.users.findOne({
            attributes: [
                "password"
            ],
            where: {
                id: userId
            }
        });
        const match = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(currentPassword, user.password);
        if (!match) {
            return res.status(422).send({
                message: "Current Password doesn't match!"
            });
        }
        await _models__WEBPACK_IMPORTED_MODULE_4__.users.update({
            password: newPasswordHash
        }, {
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "Successfully updated the password!"
        });
    } catch (error) {
        console.log(error);
        res.status(403).json({
            message: "Invalid token"
        });
    }
};
const handlePutRequest = async (req, res)=>{
    const { name , designation , location , description  } = req.body;
    try {
        const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
        await _models__WEBPACK_IMPORTED_MODULE_4__.users.update({
            name: name,
            designation: designation,
            description: description,
            location: location
        }, {
            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "Successfully updated the profile!"
        });
    } catch (error) {
        console.log(error);
        res.status(403).json({
            message: "Invalid token"
        });
    }
};
const handleGetRequest = async (req, res)=>{
    try {
        const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
        const user = await _models__WEBPACK_IMPORTED_MODULE_4__.users.findOne({
            attributes: {
                exclude: [
                    "password"
                ]
            },
            where: {
                id: userId
            }
        });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.log(error);
        res.status(403).send("Invalid token");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(8111)));
module.exports = __webpack_exports__;

})();