"use strict";
exports.id = 6881;
exports.ids = [6881];
exports.modules = {

/***/ 6328:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 6881:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interopRequireDefault = (__webpack_require__(6328)/* ["default"] */ .Z);
const _user = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(8470));
const _product = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(7083));
const _order = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(5920));
const _orderitems = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(6645));
const Sequelize = __webpack_require__(496);
const env = "production" || 0;
const config = __webpack_require__(4025)[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
db.users = (0, _user.default)(sequelize, Sequelize);
db.products = (0, _product.default)(sequelize, Sequelize);
db.orders = (0, _order.default)(sequelize, Sequelize);
db.orderitems = (0, _orderitems.default)(sequelize, Sequelize);
db.orders.hasMany(db.orderitems, {
    as: "ordersItem",
    foreignKey: "orderId"
});
db.orderitems.belongsTo(db.orders, {
    as: "orders",
    foreignKey: "orderId"
});
db.orders.belongsTo(db.users, {
    as: "users",
    foreignKey: "userId"
});
db.users.hasMany(db.orders, {
    onDelete: "cascade",
    as: "users",
    foreignKey: "userId"
});
db.products.hasMany(db.orderitems, {
    as: "products",
    foreignKey: "productId"
});
db.orderitems.belongsTo(db.products, {
    as: "products",
    foreignKey: "productId"
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;


/***/ }),

/***/ 5920:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class Order extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ static associate(models) {
        // define association here
        }
    }
    ;
    Order.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        country: DataTypes.STRING,
        city: DataTypes.STRING,
        phone: DataTypes.STRING,
        totalPrice: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isPaid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isDelivered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: "Order"
    });
    return Order;
};


/***/ }),

/***/ 6645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class OrderItems extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ static associate(models) {
        // define association here
        }
    }
    OrderItems.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productId: {
            type: DataTypes.UUID,
            allowNull: true
        },
        userId: {
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            allowNull: false
        },
        orderId: {
            type: DataTypes.UUID,
            onDelete: "CASCADE",
            allowNull: false
        }
    }, {
        sequelize,
        modelName: "OrderItems"
    });
    return OrderItems;
};


/***/ }),

/***/ 7083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class Product extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ static associate(models) {
        // define association here
        }
    }
    ;
    Product.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: DataTypes.STRING,
        price: DataTypes.STRING,
        img_url: DataTypes.TEXT,
        short_description: DataTypes.TEXT,
        long_description: DataTypes.TEXT,
        additional_info: DataTypes.TEXT,
        sku: DataTypes.STRING,
        availability: DataTypes.STRING,
        category: DataTypes.STRING,
        tag: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Product"
    });
    return Product;
};


/***/ }),

/***/ 8470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Model  } = __webpack_require__(496);
module.exports = (sequelize, DataTypes)=>{
    class User extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */ static associate(models) {
        // define association here
        }
    }
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        location: DataTypes.STRING,
        profilePhoto: DataTypes.STRING,
        gender: DataTypes.STRING,
        fb_url: DataTypes.STRING,
        tw_url: DataTypes.STRING,
        insta_url: DataTypes.STRING,
        in_url: DataTypes.STRING,
        emailConfirmed: DataTypes.BOOLEAN,
        emailConfirmedAt: DataTypes.DATE,
        role: {
            type: DataTypes.ENUM,
            values: [
                "customer",
                "admin"
            ],
            defaultValue: "customer"
        },
        active: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: "User"
    });
    return User;
};


/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = JSON.parse('{"development":{"username":"tikrexco_jamialh","password":"Moon007!786","database":"tikrexco_luan","host":"127.0.0.1","dialect":"postgres"},"test":{"username":"tikrexco_jamialh","password":"123456","database":"tikrexco_luan","host":"127.0.0.1","dialect":"postgres"},"production":{"username":"tikrexco_jamialh","password":"Moon007!786","database":"tikrexco_luan","host":"127.0.0.1","dialect":"postgres"}}');

/***/ })

};
;