import { Router } from 'express';

//controller
import MealController from '../controller/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.getSingleMeal);
router.delete('/:id', MealController.deleteAMeal);

export default router;