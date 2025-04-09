import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(400).json({
      erros: ['Unauthorized'],
    });
  }

  res.json(authorization);
};
