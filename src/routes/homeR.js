import { Router } from 'express';
import homeController from '../controllers/homeC';

const router = new Router();

router.get('/', homeController.create);

export default router;
