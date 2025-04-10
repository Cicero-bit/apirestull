/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
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
          allowNull: false,
        },
        height: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        weight: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
      },

      {
        sequelize,
        tableName: 'securitys',
      },
    );

    return this;
  }
}
