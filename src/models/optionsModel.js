/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Options extends Model {
  static init(sequelize) {
    super.init(
      {
        category: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain category for options',
            },
          },
        },
        value: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain value for the options',
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
}
