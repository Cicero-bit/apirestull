/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

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
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          isEmail: {
            msg: 'ERR: Invalid email',
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
}
