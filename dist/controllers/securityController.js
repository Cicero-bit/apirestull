"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-underscore-dangle */
var _security = require('../models/security'); var _security2 = _interopRequireDefault(_security);
var _profilePic = require('../models/profilePic'); var _profilePic2 = _interopRequireDefault(_profilePic);

class SecurityController {
  async create(req, res) {
    try {
      const newSecurity = await _security2.default.create(req.body);
      res.status(200).json(newSecurity);
    } catch (e) {
      res.status(400).json({
        erros: e.errors,
      });
    }
  }

  async index(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        erros: ['Id must not be empty'],
      });
    }
    const security_ = await _security2.default.findByPk(req.params.id, {
      attributes: ['id', 'name', 'surname', 'phone', 'weight', 'height'],
      order: [['id', 'ASC']],
      include: {
        model: _profilePic2.default,
        attributes: ['id', 'file_name', 'original_name', 'type', 'url'],
      },
    });
    if (!security_) {
      return res.status(404).json({
        erros: ['Security not found'],
      });
    }
    return res.json(security_);
  }

  async show(req, res) {
    const securitys = await _security2.default.findAll({
      attributes: ['id', 'name', 'surname', 'phone', 'weight', 'height'],
      order: [['id', 'ASC']],
      include: {
        model: _profilePic2.default,
        attributes: ['id', 'file_name', 'original_name', 'type', 'url'],
      },
    });
    res.status(200).json(securitys);
  }

  async update(req, res) {
    return res.status(200).json('inside security');
  }

  async delete(req, res) {
    try {
      const deleted = await _security2.default.destroy();
      return res.status(200).json(deleted);
    } catch (e) {
      return res.status(400).json({
        erros: [e.erros],
      });
    }
  }
}

exports. default = new SecurityController();
