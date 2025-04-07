import { Sequelize } from 'sequelize';
import databaseconfig from '../config/database';
import User from '../models/user';
import Security from '../models/security';

const models = [User, Security];

const connection = new Sequelize(databaseconfig);

models.forEach((models) => models.init(connection));
