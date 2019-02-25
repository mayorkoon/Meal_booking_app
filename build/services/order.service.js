"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyOrder = _interopRequireDefault(require("../utilities/dummyOrder"));

var _order = _interopRequireDefault(require("../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderService = {
  getAllOrders: function getAllOrders() {
    var allOrders = _dummyOrder.default.orders.map(function (order) {
      var newOrder = new _order.default();
      newOrder.orderId = order.orderId;
      newOrder.customerName = order.customerName;
      newOrder.mealName = order.mealName;
      newOrder.quantity = order.quantity;
      newOrder.price = order.price;
      newOrder.status = order.status;
      return newOrder;
    });

    return allOrders;
  },
  addOrder: function addOrder(order) {
    var orderLength = _dummyOrder.default.orders.length;
    var lastOrderId = _dummyOrder.default.orders[orderLength - 1].orderId;
    var newOrderId = lastOrderId + 1;
    order.orderId = newOrderId;

    _dummyOrder.default.orders.push(order);

    return order;
  },
  updateOrder: function updateOrder(order) {
    var id = order.id;

    var orderToUpdate = _dummyOrder.default.orders.find(function (order) {
      return order.id == id;
    });

    orderToUpdate.orderId = order.orderId;
    orderToUpdate.customerName = order.customerName;
    orderToUpdate.price = order.price;
    orderToUpdate.quantity = order.quantity;
    orderToUpdate.mealName = order.mealName;
    orderToUpdate.status = order.status;
    _dummyOrder.default.orders[order.id] = orderToUpdate;
    return orderToUpdate;
  }
};
var _default = OrderService;
exports.default = _default;
//# sourceMappingURL=order.service.js.map