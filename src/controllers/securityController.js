/* eslint-disable no-underscore-dangle */
import Security from '../models/security';

class SecurityController {
  async create(req, res) {
    try {
      const newSecurity = await Security.create(req.body);
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
    const security_ = await Security.findByPk(req.params.id);
    if (!security_) {
      return res.status(404).json({
        erros: ['Security not found'],
      });
    }
    return res.json(security_);
  }

  async show(req, res) {
    const securitys = await Security.findAll();
    res.status(200).json(securitys);
  }

  async update(req, res) {
    return res.status(200).json('inside security');
  }

  async delete(req, res) {
    return res.status(200).json('inside security');
  }
}

export default new SecurityController();
