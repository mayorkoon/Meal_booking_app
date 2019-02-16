import dummyData from '../utilities/dummyData';
import Meal from '../models/meal.model';

const MealService = {
    fetchAllMeals() {
        const validMeals= dummyData.meals.map((meal)=>{
            const newMeal = new Meal();
            newMeal.id = Meal.id;
            newMeal.name = Meal.name;
            newMeal.size = Meal.size;
            newMeal.price = Meal.size;   
        });
        return validMeals;
    },
}