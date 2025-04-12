"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _homeC = require('../controllers/homeC'); var _homeC2 = _interopRequireDefault(_homeC);

const router = new (0, _express.Router)();

router.get('/', _homeC2.default.create);

exports. default = router;
