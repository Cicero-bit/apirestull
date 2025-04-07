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
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          len: {
            args: [3, 50],
            msg: 'ERR: Field password must have beetween 3 and 50 characters',
          },
        },
      },
      {
        sequelize,
        tableName: 'users',
      },
    );

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcrypt.hash(user.password, 8);
    });

    return this;
  }
}
