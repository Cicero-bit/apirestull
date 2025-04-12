"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

class UserController {
  async create(req, res) {
    try {
      const newUser = await _user2.default.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        erros: _optionalChain([e, 'access', _ => _.errors, 'optionalAccess', _2 => _2.map, 'call', _3 => _3((err) => err.message)]) || [e.message],
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _user2.default.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json({
        erros: _optionalChain([e, 'access', _4 => _4.errors, 'optionalAccess', _5 => _5.map, 'call', _6 => _6((err) => err.message)]) || [e.message],
      });
    }
  }

  async show(req, res) {
    try {
      return res.status(200).json(await _user2.default.findByPk(req.params.id));
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await _user2.default.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['User not found'],
        });
      }

      const newuser = await user.update(req.body);
      return res.status(200).json(newuser);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await _user2.default.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['User not found'],
        });
      }

      await user.destroy();
      return res.status(200).json({
        delete: user,
      });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
