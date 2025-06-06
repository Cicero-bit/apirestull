import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import photoController from '../controllers/photoContoller';

const router = new Router();

router.post('/', loginRequired, photoController.store);

export default router;
