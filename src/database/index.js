import { Sequelize } from 'sequelize';
import databaseconfig from '../config/database';
import User from '../models/user';
import Security from '../models/security';
import Files from '../models/files';
import Enterprise from '../models/enterprise';
import Skill from '../models/skillModel';
import SecuritySkills from '../models/securitysSkill';
import Area from '../models/areaModel';
import SecurityAreaPivot from '../models/securityAreaPivot';
import Events from '../models/eventsModel';

const models = [
  User,
  Security,
  Files,
  Enterprise,
  Area,
  SecuritySkills,
  Events,
  SecurityAreaPivot,
  Skill,
];

const connection = new Sequelize(databaseconfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

export default connection;
