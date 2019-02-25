"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

var expect = _chai.default.expect;
describe('GET /', function () {
  it('should get all available menu', function (done) {
    _chai.default.request(_index.default).get('/server/v1/menu').end(function (err, res) {
      var data = res.body.data;
      expect(res).to.have.status(200);
      expect(res).to.be.an('object');
      expect(data).to.be.an('Array');
      done();
    });
  });
});
describe('POST /', function () {
  it('should add to an existing menu', function (done) {
    var newMenu = {
      day: 'Tuesday',
      category: 'Lunch',
      meals: [{
        id: 1,
        name: 'Pizza',
        size: 'Large',
        price: '600'
      }, {
        id: 2,
        name: 'Poundo Yam',
        size: 'Medium',
        price: '700'
      }, {
        id: 3,
        name: 'Small Chops',
        size: 'Large',
        price: '350'
      }]
    };

    _chai.default.request(_index.default).post('/server/v1/menu').send(newMenu).end(function (err, res) {
      var data = res.body.data;
      expect(res).to.have.status(200);
      expect(data).to.be.an('object');
      expect(newMenu.meals).to.be.an('Array');
      expect(newMenu.day).to.equal(data.day);
      expect(newMenu.category).to.equal(data.category);
      done();
    });
  });
});
//# sourceMappingURL=menu.test.js.map