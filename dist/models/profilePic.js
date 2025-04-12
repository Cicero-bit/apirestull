"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-param-reassign */
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class ProfilePics extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        original_name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain original file name',
            },
          },
        },
        file_name: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain file name',
            },
          },
        },
        type: {
          type: _sequelize2.default.STRING,
          defaultValue: 'profilePic',
          allowNull: false,
        },
        url: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/imgs/${this.getDataValue('file_name')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'files',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Security, { foreignKey: 'security_id' });
  }
} exports.default = ProfilePics;
