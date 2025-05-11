import User from '../models/user';
import Securitys from '../models/security'
import Enterprise from '../models/enterprise'
import sequelize from '../database/index'

class UserController {
  async create(req, res) {
    try {
      const { name, surname, password, role, email, cpf_cnpj, enterpriseName } = req.body;

      if (!['security', 'enterprise'].includes(role)) {
        return res.status(400).json({ err: 'Invalid role provided' });
      }

      const result = await sequelize.transaction(async (t) => {
        const newUser = await User.create({
          name,
          password,
          email,
          role,
        }, { transaction: t });

        let additionalData = {};

        if (role === 'security') {
          const newSecurity = await Securitys.create({
            name,
            surname,
            userId: newUser.id,
            cpf: cpf_cnpj,
          }, { transaction: t });

          additionalData.security = newSecurity;

        } else if (role === 'enterprise') {
          const newEnterprise = await Enterprise.create({
            name: enterpriseName,
            cpfCnpj: cpf_cnpj,
            adminUser: newUser.id,
          }, { transaction: t });

          additionalData.enterprise = newEnterprise;
        }

        return {
          user: newUser,
          ...additionalData,
        };
      });

      return res.status(201).json(result);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors?.map((err) => err.message) || [e.message],
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json({
        erros: e.errors?.map((err) => err.message) || [e.message],
      });
    }
  }

  async show(req, res) {
    try {
      return res.status(200).json(await User.findByPk(req.params.id));
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

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
      const user = await User.findByPk(req.userId);

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

export default new UserController();
