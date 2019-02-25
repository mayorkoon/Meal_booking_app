"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  getAllOrders: function getAllOrders(req, res) {
    var allOrders = _order.default.getAllOrders();

    return res.json({
      status: 'success',
      data: allOrders
    }).status(200);
  },
  addOrder: function addOrder(req, res) {
    var newOrder = req.body;

    var createdOrder = _order.default.addOrder(newOrder);

    return res.json({
      status: 'success',
      data: createdOrder
    }).status(201);
  },
  updateAnOrder: function updateAnOrder(req, res) {
    var orderToUpdate = req.body;

    var updatedOrder = _order.default.updateOrder(orderToUpdate);

    return res.json({
      status: 'success',
      data: updatedOrder
    }).status(201);
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map