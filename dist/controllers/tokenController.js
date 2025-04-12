"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

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
    const user = await _user2.default.findOne({ where: { email: req.body.email } });
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
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.status(200).json({ token });
  }
}

exports. default = new TokenController();
