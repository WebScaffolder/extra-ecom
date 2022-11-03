"use strict";
(() => {
var exports = {};
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

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

/***/ 2933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8174);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7355);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_2__);




// Initialize the cors middleware
const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
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
    switch(req.method){
        case "GET":
            await getSingleProduct(req, res);
            break;
        case "PUT":
            await updateProduct(req, res);
            break;
        case "DELETE":
            await deleteProduct(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const getSingleProduct = async (req, res)=>{
    const { id  } = req.query;
    try {
        const product = await _models__WEBPACK_IMPORTED_MODULE_2__.products.findOne({
            where: {
                id: id
            }
        });
        res.status(200).send({
            product: product
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
};
const updateProduct = async (req, res)=>{
    if (!("authorization" in req.headers)) {
        return res.status(401).json({
            message: "No autorization token"
        });
    }
    const { title , price , img_url , short_description , long_description , additional_info , sku , availability , category , tag ,  } = req.body;
    try {
        if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_1___default()(title, {
            min: 3
        })) {
            return res.status(422).send("The title should be a minimum of Three characters long");
        } else if (!price) {
            return res.status(422).send("Price required");
        } else if (!img_url) {
            return res.status(422).send("Product image required");
        } else if (!short_description) {
            return res.status(422).send("Short description required");
        } else if (!long_description) {
            return res.status(422).send("Long description required");
        } else if (!additional_info) {
            return res.status(422).send("Additional information required");
        } else if (!sku) {
            return res.status(422).send("SKU required");
        } else if (!availability) {
            return res.status(422).send("Availability info required");
        } else if (!category) {
            return res.status(422).send("Category required");
        } else if (!tag) {
            return res.status(422).send("Tag required");
        }
        let product = await _models__WEBPACK_IMPORTED_MODULE_2__.products.findByPk(req.query.id);
        await product.update({
            title,
            price,
            img_url,
            short_description,
            long_description,
            additional_info,
            sku,
            availability,
            category,
            tag
        });
        const products = await _models__WEBPACK_IMPORTED_MODULE_2__.products.findAll({
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ]
        });
        return res.status(200).json({
            message: "Successfully Deleted",
            products
        });
    } catch (error) {
        console.log("update=>>>>>>>>>>>>", error);
        res.status(500).send("Error in creating product, please try again!");
    }
};
const deleteProduct = async (req, res)=>{
    try {
        await _models__WEBPACK_IMPORTED_MODULE_2__.products.destroy({
            where: {
                id: req.query.id
            }
        });
        const products = await _models__WEBPACK_IMPORTED_MODULE_2__.products.findAll({
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ]
        });
        return res.status(200).json({
            message: "Successfully Deleted",
            products
        });
    } catch (error) {
        res.status(500).send("Error in deleting product, please try again!");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(2933)));
module.exports = __webpack_exports__;

})();