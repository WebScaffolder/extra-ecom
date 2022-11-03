"use strict";
(() => {
var exports = {};
exports.id = 4276;
exports.ids = [4276];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 496:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 1730:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 5260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1730);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6881);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);
uuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const stripe = stripe__WEBPACK_IMPORTED_MODULE_0___default()("...");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    switch(req.method){
        case "POST":
            await createOrder(req, res);
            break;
        case "GET":
            await getOrders(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
});
const createOrder = async (req, res)=>{
    try {
        console.log("backend==>>>>>>>>>>>", req.body);
        const { paymentData: { id: customerId , orderItems , name , email , address , country , city , phone , totalPrice , stripeTotal , productId ,  }  } = req.body;
        const { userId  } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(req.headers.authorization, "djhfghbdsgrasklkajsdgf");
        const prevCustomer = await stripe.customers.list({
            email: email,
            limit: 1
        });
        const isExistingCustomer = prevCustomer.data.length > 0;
        let newCustomer;
        if (!isExistingCustomer) {
            newCustomer = await stripe.customers.create({
                email: email,
                source: customerId
            });
        }
        const customer = isExistingCustomer && prevCustomer.data[0].id || newCustomer.id;
        await stripe.charges.create({
            currency: "usd",
            amount: stripeTotal,
            receipt_email: email,
            customer,
            description: `Checkout | ${email} | ${customerId} | ProductID ${productId}`
        }, {
            idempotencyKey: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()
        });
        const newOrder = new _models__WEBPACK_IMPORTED_MODULE_2__.orders({
            userId,
            name,
            email,
            address,
            country,
            city,
            phone,
            totalPrice
        });
        const { id  } = await newOrder.save();
        await createOrderItems(orderItems, userId, id);
        res.json({
            msg: "Order success! We will contact you to confirm the order.",
            newOrder
        });
    } catch (err) {
        console.log("error message =====>", err);
        return res.status(500).json({
            err: err.message
        });
    }
};
const createOrderItems = async (orderItems, userId, id)=>{
    const promiseItems = orderItems.map((order)=>new _models__WEBPACK_IMPORTED_MODULE_2__.orderitems({
            title: order.title,
            quantity: order.quantity,
            img_url: order.img_url,
            price: order.price,
            productId: order.productId,
            userId,
            orderId: id
        }).save());
    await Promise.all(promiseItems);
};
const getOrders = async (req, res)=>{
    try {
        const orders = await _models__WEBPACK_IMPORTED_MODULE_2__.orders.findAll({
            order: [
                [
                    "createdAt",
                    "DESC"
                ]
            ],
            include: [
                {
                    model: _models__WEBPACK_IMPORTED_MODULE_2__.orderitems,
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
        res.send({
            orders
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6881], () => (__webpack_exec__(5260)));
module.exports = __webpack_exports__;

})();