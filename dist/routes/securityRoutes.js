"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _securityController = require('../controllers/securityController'); var _securityController2 = _interopRequireDefault(_securityController);

const router = new (0, _express.Router)();

router.post('/', _securityController2.default.create);
router.get('/', _securityController2.default.show);
router.get('/:id', _securityController2.default.index);
router.put('/:id', _securityController2.default.update);
router.delete('/:id', _securityController2.default.delete);

exports. default = router;
