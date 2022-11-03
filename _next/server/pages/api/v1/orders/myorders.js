"use strict";
(() => {
var exports = {};
exports.id = 4395;
exports.ids = [4395];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 8068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "GET":
            await getOrdersByUser(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const getOrdersByUser = async (req, res)=>{
    try {
        const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
        const order = await _models__WEBPACK_IMPORTED_MODULE_0__.orders.findAll({
            where: {
                userId: userId
            },
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ],
            include: [
                {
                    model: _models__WEBPACK_IMPORTED_MODULE_0__.orderitems,
                    as: "ordersItem",
                    attributes: [
                        "id",
                        "title",
                        "price",
                        "img_url",
                        "quantity"
                    ]
                }
            ]
        });
        // console.log(order)
        if (!order) return res.status(404).json({
            msg: "order not exist"
        });
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).send("Something wrong");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(8068)));
module.exports = __webpack_exports__;

})();