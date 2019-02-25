"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default); // let should = chai.should();


var expect = _chai.default.expect;
describe('GET /', function () {
  it('should return all meals', function (done) {
    _chai.default.request(_index.default).get('/server/v1/meals').end(function (err, res) {
      var data = res.body.data;
      expect(res).to.have.status(200);
      expect(res).to.be.an('object');
      expect(data).to.be.an('Array');
      expect(data.length).to.equal(4);
      done();
    });
  });
});
describe('GET /:id', function () {
  it('should return specific meal', function (done) {
    _chai.default.request(_index.default).get('/server/v1/meals/2').end(function (err, res) {
      var data = res.body.data;
      expect(data.name).to.equal('Jollof Rice');
      expect(data.size).to.equal('Large');
      expect(data.price).to.equal('700');
      done();
    });
  });
});
describe('POST /', function () {
  it('should add a new meal', function (done) {
    var newPost = {
      id: 5,
      name: 'Yam and Egg',
      size: 'small',
      price: '400'
    };

    _chai.default.request(_index.default).post('/server/v1/meals').send(newPost).end(function (err, res) {
      var data = res.body.data;
      expect(res).to.have.status(200);
      expect(newPost.id).to.equal(data.id);
      expect(newPost.name).to.equal(data.name);
      expect(newPost.size).to.equal(data.size);
      expect(newPost.price).to.equal(data.price);
      done();
    });
  });
});
describe('PUT /:id', function () {
  it('should Update an existing meal', function (done) {
    var newUpdate = {
      id: 1,
      name: 'Bread and Beans',
      size: 'small',
      price: '700'
    };

    _chai.default.request(_index.default).put('/server/v1/meals/1').send(newUpdate).end(function (err, res) {
      var data = res.body.data;
      expect(res).to.have.status(200);
      expect(newUpdate.id).to.equal(data.id);
      expect(newUpdate.name).to.equal(data.name);
      expect(newUpdate.size).to.equal(data.size);
      expect(newUpdate.price).to.equal(data.price);
      done();
    });
  });
});
//# sourceMappingURL=meal.test.js.map