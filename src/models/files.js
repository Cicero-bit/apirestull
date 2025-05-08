/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        original_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain original file name',
            },
          },
        },
        file_name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain file name',
            },
          },
        },
        type: {
          type: Sequelize.STRING,
          defaultValue: 'profilePic',
          allowNull: false,
        },
        url: {
          type: Sequelize.VIRTUAL,
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
}
