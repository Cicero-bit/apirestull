import { Router } from 'express';
import userController from '../controllers/userController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // let it off

router.post('/', userController.create);
router.get('/:id', loginRequired, userController.show); // alterar para JWTtoken info, apenas o proprio user pode ver info user
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
