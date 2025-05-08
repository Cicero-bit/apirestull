/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Skill extends Model {
  static init(sequelize) {
    super.init(
      {
        category: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain original file name',
            },
          },
        },
        value: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain file name',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'options',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Security, {
      through: 'security_skills',
      foreignKey: 'skill_id',
      as: 'securities',
    });
  }
}
