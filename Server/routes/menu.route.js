import { Router } from 'express';

import MenuController from '../controller/menu.controller';

const router = Router();

router.get('/', MenuController.getMenu);

export default router;