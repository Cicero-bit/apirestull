/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';
// gross error here wtf
export default class Security extends Model {
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

  static associate(models) {
    this.hasMany(models.ProfilePics, { foreignKey: 'security_id' });
  }
}
