/* eslint-disable no-param-reassign */
import Sequelize, { Model } from 'sequelize';

export default class Events extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        enterpriseId: {
          type: Sequelize.INTEGER,
          field: 'enterprise_id',
          allowNull: false,
          references: {
            model: 'enterprises',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        bannerId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'files',
            key: 'id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        startAt: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'start_at',
        },
        endAt: {
          type: Sequelize.DATE,
          allowNull: false,
          field: 'end_at',
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        street: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        number: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },

      {
        sequelize,
        tableName: 'events',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Files, {
      foreignKey: 'bannerId',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
    this.belongsTo(models.Enterprise, {
      foreignKey: 'enterpriseId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}
