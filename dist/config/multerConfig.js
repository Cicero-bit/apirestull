"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

const random = () => Math.floor(Math.random() * 100000 + 100000);

exports. default = {
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path2.default.resolve(__dirname, '..', '..', 'uploads', 'imgs'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${_path2.default.extname(file.originalname)}`);
    },
  }),
};
