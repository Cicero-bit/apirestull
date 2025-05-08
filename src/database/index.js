import { Sequelize } from 'sequelize';
import databaseconfig from '../config/database';
import User from '../models/user';
import Security from '../models/security';
import Files from '../models/files';
import Enterprise from '../models/enterprise';
import Options from '../models/optionsModel';
import Skill from '../models/skillModel';
import SecuritySkills from '../models/securitysSkill';

const models = [User, Security, Files, Enterprise, Options, SecuritySkills, Skill];

const connection = new Sequelize(databaseconfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
