import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send({ name: 'gay' });
});

export default router;
