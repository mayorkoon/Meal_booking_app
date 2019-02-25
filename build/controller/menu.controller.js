"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  getMenu: function getMenu(req, res) {
    var DailyMenu = _menu.default.getMenu();

    return res.json({
      status: "success",
      data: DailyMenu
    }).status(200);
  },
  addMenu: function addMenu(req, res) {
    /* 
        Expect JSON of the following format:
          {
            day: "day of the week",
            category: "say breakfast,lunch,dinner",
            meals: [
                collection of meals for each category ;
            ]
        }
    
    */
    var newMenu = req.body;

    var AddedMenu = _menu.default.addMenu(newMenu);

    return res.json({
      status: "success",
      data: AddedMenu
    }).status(201);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map