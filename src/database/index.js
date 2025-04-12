import { Sequelize } from 'sequelize';
import databaseconfig from '../config/database';
import User from '../models/user';
import Security from '../models/security';
import ProfilePics from '../models/profilePic';

const models = [User, Security, ProfilePics];

const connection = new Sequelize(databaseconfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
