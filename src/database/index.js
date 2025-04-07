import { Sequelize } from 'sequelize';
import databaseconfig from '../config/database';
import User from '../models/user';

const models = [User];

const connection = new Sequelize(databaseconfig);

models.forEach((models) => models.init(connection));
