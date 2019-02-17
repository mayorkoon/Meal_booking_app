import { Router } from 'express';

import OrderController from '../controller/order.controller';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.addOrder);

export default router;