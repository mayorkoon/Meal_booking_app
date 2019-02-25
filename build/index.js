"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./routes/meal.routes"));

var _order = _interopRequireDefault(require("./routes/order.routes"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Routes
var app = (0, _express.default)();
var PORT = process.env.PORT || 9001;
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  return res.send('The API is working ');
}); // handler

app.use('/server/v1/meals', _meal.default);
app.use('/server/v1/orders', _order.default);
app.use('/server/v1/menu', _menu.default);
app.listen(PORT, function () {
  console.log("server is running on ".concat(PORT));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map