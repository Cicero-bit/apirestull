/* eslint-disable no-underscore-dangle */
import Security from '../models/security';
import Photo from '../models/files';

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
    const security_ = await Security.findByPk(req.params.id, {
      attributes: ['id', 'name', 'surname', 'phone', 'weight', 'height'],
      order: [['id', 'ASC']],
      include: {
        model: Photo,
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
    const securitys = await Security.findAll({
      attributes: ['id', 'name', 'surname', 'phone', 'weight', 'height'],
      order: [['id', 'ASC']],
      include: {
        model: Photo,
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
      const deleted = await Security.destroy();
      return res.status(200).json(deleted);
    } catch (e) {
      return res.status(400).json({
        erros: [e.erros],
      });
    }
  }
}

export default new SecurityController();
