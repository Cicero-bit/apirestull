/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class SecurityAreaPivot extends Model {
  static init(sequelize) {
    super.init(
      {
        securityId: {
          type: Sequelize.STRING,
          field: 'security_id',
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain the security id',
            },
          },
        },
        areaId: {
          type: Sequelize.STRING,
          field: 'area_id',
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'ERR: must contain the area id',
            },
          },
        },
      },
      {
        sequelize,
        tableName: 'security_areas',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Security, { foreignKey: 'security_id' });
    this.belongsTo(models.Area, { foreignKey: 'area_id' });
  }
}
