/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';
// gross error here wtf
export default class Security extends Model {
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
        surname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        height: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        weight: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        photo: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'user_id',
        },
        area: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        verified: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            msg: 'Err: cpf allready in use',
          },
        },
      },

      {
        sequelize,
        tableName: 'securitys',
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Files, { foreignKey: 'security_id' });
    this.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user', onDelete: 'CASCADE', onUpdate: 'CASCADE',
    });
    this.belongsTo(models.Options, {
      foreignKey: 'area',
    });
    this.belongsToMany(models.Skill, {
      through: 'security_skills',
      foreignKey: 'security_id',
      as: 'skills',
    });
  }
}
