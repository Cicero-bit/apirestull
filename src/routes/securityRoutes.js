import { Router } from 'express';
import securityController from '../controllers/securityController';

const router = new Router();

router.get('/', securityController.index);

export default router;
