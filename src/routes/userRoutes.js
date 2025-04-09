import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index); // falha de seguranca

router.post('/', userController.create);
router.get('/:id', userController.show); // alterar para id na req
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
