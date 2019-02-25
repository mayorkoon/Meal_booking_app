"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default); // let should = chai.should();


var expect = _chai.default.expect;
describe('GET /', function () {
  it('should get all the menu', function (done) {
    _chai.default.request(_index.default).get('/server/v1/orders').end(function (err, res) {
      var data = res.body.data;
      expect(res).to.have.status(200);
      expect(res).to.be.an('object');
      expect(data).to.be.an('Array');
      expect(data.length).to.equal(5);
      done();
    });
  });
});
describe('POST /', function () {
  it('should add to the existing menu', function (done) {
    var newMenu = {
      orderId: 15,
      customerName: 'Agboola Olaide',
      mealName: 'Chicken Pizza',
      quantity: '2',
      price: '3000',
      status: 'Completed'
    };

    _chai.default.request(_index.default).post('/server/v1/orders').send(newMenu).end(function (err, res) {
      var data = res.body.data;
      expect(res).to.have.status(200);
      expect(newMenu.orderId).to.equal(data.orderId);
      expect(newMenu.customerName).to.equal(data.customerName);
      expect(newMenu.mealName).to.equal(data.mealName);
      expect(newMenu.price).to.equal(data.price);
      expect(newMenu.quantity).to.equal(data.quantity);
      expect(newMenu.status).to.equal(data.status);
      done();
    });
  });
});
describe('PUT /:id', function () {
  it('should update an existing order', function (done) {
    var updateOrder = {
      orderId: 15,
      customerName: 'Oyawale Deborah',
      mealName: 'Chicken Wings',
      quantity: '1',
      price: '500',
      status: 'Completed'
    };

    _chai.default.request(_index.default).put('/server/v1/orders/15').send(updateOrder).end(function (err, res) {
      var data = res.body.data;
      expect(res).to.have.status(200);
      expect(updateOrder.orderId).to.equal(data.orderId);
      expect(updateOrder.customerName).to.equal(data.customerName);
      expect(updateOrder.mealName).to.equal(data.mealName);
      expect(updateOrder.price).to.equal(data.price);
      expect(updateOrder.quantity).to.equal(data.quantity);
      expect(updateOrder.status).to.equal(data.status);
      done();
    });
  });
});
//# sourceMappingURL=order.test.js.map