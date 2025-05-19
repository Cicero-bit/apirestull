import { Router } from 'express';

const router = new Router();

router.get('/', () => console.log('hi'));

export default router;
