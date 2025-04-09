import jwt from 'jsonwebtoken';
import User from '../models/user';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      erros: ['Unauthorized'],
    });
  }

  const [type, token] = authorization.split(' ');

  try {
    const userData = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = userData;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });
    if (!user) {
      return res.status(401).json({
        erros: ['Expired/invalid user, email change?'],
      });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Invalid or expired token'],
    });
  }
};
