import { Router } from 'express';
import securityController from '../controllers/securityController';

const router = new Router();

router.post('/', securityController.create);
router.get('/', securityController.show);
router.get('/:id', securityController.index);
router.put('/:id', securityController.update);
router.delete('/:id', securityController.delete);

export default router;
