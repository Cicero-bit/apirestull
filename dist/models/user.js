"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-param-reassign */
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 100],
              msg: 'ERR: Field name must be beetween 3 and 100 characters',
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          unique: {
            msg: 'Email allready in use',
          },
          defaultValue: '',
          isEmail: {
            msg: 'ERR: Invalid email',
          },
        },
        password_hash: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
        },
        password: {
          type: _sequelize2.default.VIRTUAL,
          len: {
            args: [3, 50],
            msg: 'ERR: Field password must have beetween 3 and 50 characters',
          },
        },
        isAdmin: {
          type: _sequelize2.default.BOOLEAN,
          defaultValue: false,
          field: 'is_admin',
        },
        isActive: {
          type: _sequelize2.default.BOOLEAN,
          defaultValue: true,
          field: 'is_active',
        },
      },

      {
        sequelize,
        tableName: 'users',
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordVerify(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
