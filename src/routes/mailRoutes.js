import { Router } from 'express';
import mailController from '../controllers/mailController';

const router = new Router();

router.post('/', mailController.contact);

export default router;
