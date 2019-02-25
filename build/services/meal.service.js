"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utilities/dummyData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    var validMeals = _dummyData.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });

    return validMeals;
  },
  addMeal: function addMeal(meal) {
    var mealLength = _dummyData.default.meals.length;
    var lastId = _dummyData.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;

    _dummyData.default.meals.push(meal);

    return meal;
  },
  getAMeal: function getAMeal(id) {
    var meal = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    return meal || {};
  },
  deleteMeal: function deleteMeal(id) {
    _dummyData.default.meals = _dummyData.default.meals.filter(function (meal) {
      return meal.id != id;
    });
  },
  updateMeal: function updateMeal(meal) {
    var id = meal.id;

    var mealToUpdate = _dummyData.default.meals.find(function (meal) {
      return meal.id == id;
    });

    mealToUpdate.name = meal.name;
    mealToUpdate.price = meal.price;
    mealToUpdate.size = meal.size;
    _dummyData.default.meals[meal.id] = mealToUpdate;
    return mealToUpdate;
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.service.js.map