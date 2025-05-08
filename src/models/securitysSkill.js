/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class SecuritySkills extends Model {
  static init(sequelize) {
    super.init(
      {
        securityId: {
          type: Sequelize.STRING,
          field: 'security_id',
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain original file name',
            },
          },
        },
        skillId: {
          type: Sequelize.STRING,
          field: 'skill_id',
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
        tableName: 'security_skills',
      },
    );

    return this;
  }
}
