"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyMenu = _interopRequireDefault(require("../utilities/dummyMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  addMenu: function addMenu(menu) {
    var newMenu = menu;

    _dummyMenu.default.menu.push(newMenu);

    return newMenu;
  },
  getMenu: function getMenu() {
    return _dummyMenu.default.menu;
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=menu.service.js.map