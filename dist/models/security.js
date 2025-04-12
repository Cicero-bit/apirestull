"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-param-reassign */
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
// gross error here wtf
 class Security extends _sequelize.Model {
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
        surname: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        phone: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        height: {
          type: _sequelize2.default.INTEGER,
          allowNull: false,
        },
        weight: {
          type: _sequelize2.default.FLOAT,
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

  static associate(models) {
    this.hasMany(models.ProfilePics, { foreignKey: 'security_id' });
  }
} exports.default = Security;
