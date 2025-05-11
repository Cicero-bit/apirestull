/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Enterprise extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 100],
              msg: 'ERR: Field name must be beetween 3 and 100 characters',
            },
          },
        },
        cpfCnpj: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            msg: 'CPF/CPNJ allready in use',
          },
          validate: {
            len: {
              args: [11, 18],
              msg: 'Invalid CPF/CPNPJ',
            },
          },
          field: 'cpf_cnpj',
        },
        adminUser: {
          type: Sequelize.INTEGER,
          field: 'admin_user',
          allowNull: false,
        },
        banner: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      },

      {
        sequelize,
        tableName: 'enterprises',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'adminUser', as: 'admin' });
  }
}
