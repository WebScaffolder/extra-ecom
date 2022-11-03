"use strict";
(() => {
var exports = {};
exports.id = 4814;
exports.ids = [4814];
exports.modules = {

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 2375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "PUT":
            await updateOrderToDelivered(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const updateOrderToDelivered = async (req, res)=>{
    try {
        const order = await _models__WEBPACK_IMPORTED_MODULE_0__.orders.findByPk(req.query.id);
        if (order.isDelivered === false) {
            order.isDelivered = true;
            await order.save();
            const updatedOrder = await _models__WEBPACK_IMPORTED_MODULE_0__.orders.findAll({
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
                    }, 
                ]
            });
            res.json(updatedOrder);
        } else if (order.isDelivered === true) {
            order.isDelivered = false;
            await order.save();
            const updatedOrder1 = await _models__WEBPACK_IMPORTED_MODULE_0__.orders.findAll({
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
                    }, 
                ]
            });
            res.json(updatedOrder1);
        } else {
            res.status(404);
            throw new Error("Order not found");
        }
    } catch (error) {
        res.status(500).send("Error");
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(2375)));
module.exports = __webpack_exports__;

})();