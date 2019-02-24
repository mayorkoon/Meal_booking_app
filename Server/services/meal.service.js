import dummyData from '../utilities/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return validMeals;
  },
  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },
  getAMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id == id);
    return meal || {};
  },
  deleteMeal(id) {
    dummyData.meals = dummyData.meals.filter(meal => meal.id != id);
  },
  updateMeal(meal) {
    const { id } = meal;
    const mealToUpdate = dummyData.meals.find(meal => meal.id == id);
    mealToUpdate.name = meal.name;
    mealToUpdate.price = meal.price;
    mealToUpdate.size = meal.size;
    dummyData.meals[meal.id] = mealToUpdate;
    return mealToUpdate;
  }
};

export default MealService;
