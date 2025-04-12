"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);
var _security = require('../models/security'); var _security2 = _interopRequireDefault(_security);
var _profilePic = require('../models/profilePic'); var _profilePic2 = _interopRequireDefault(_profilePic);

const models = [_user2.default, _security2.default, _profilePic2.default];

const connection = new (0, _sequelize.Sequelize)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
