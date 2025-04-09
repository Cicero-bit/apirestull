import jwt from 'jsonwebtoken';
import User from '../models/user';

class TokenController {
  async store(req, res) {
    if (!req.body.email) {
      return res.status(401).json({
        errors: ['Email is required'],
      });
    }
    if (!req.body.password) {
      return res.status(401).json({
        errors: ['Password is required'],
      });
    }
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.status(404).json({
        errors: ['User not found'],
      });
    }
    if (!await user.passwordVerify(req.body.password)) {
      return res.status(401).json({
        errors: ['Wrong password'],
      });
    }
    const { id, email } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.status(200).json({ token });
  }
}

export default new TokenController();
