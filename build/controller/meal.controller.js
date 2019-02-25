"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _meal.default.fetchAllMeals();

    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
  },
  addAMeal: function addAMeal(req, res) {
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(201);
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;

    var foundMeal = _meal.default.getAMeal(id);

    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);
  },
  deleteAMeal: function deleteAMeal(req, res) {
    var id = req.params.id;

    var removedMeal = _meal.default.deleteMeal(id);

    return res.json({
      status: 'success',
      data: removedMeal
    }).status(200);
  },
  UpdateAMeal: function UpdateAMeal(req, res) {
    var mealToUpdate = req.body;

    var updatedMeal = _meal.default.updateMeal(mealToUpdate);

    return res.json({
      status: 'success',
      data: updatedMeal
    }).status(201);
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map