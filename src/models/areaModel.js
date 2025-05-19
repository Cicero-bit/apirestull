/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Area extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },

      {
        sequelize,
        tableName: 'areas',
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.SecurityAreaPivot, { foreignKey: 'area_id' });
    this.belongsToMany(models.Security, {
      through: 'SecurityAreaPivot',
      foreignKey: 'area_id',
      otherKey: 'security_id ',
    });
  }
}
