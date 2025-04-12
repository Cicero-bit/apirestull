"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable max-len */
/* eslint-disable camelcase */
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _profilePic = require('../models/profilePic'); var _profilePic2 = _interopRequireDefault(_profilePic);

const uploadFile = _multer2.default.call(void 0, {
  ..._multerConfig2.default,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      return cb(null, true);
    }
    return cb(new _multer2.default.MulterError('File type not allowed, try png or jpeg'));
  },
}).single('photo');

class PhotoController {
  store(req, res) {
    return uploadFile(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      if (!req.file) {
        return res.status(400).json({
          erros: ['No file sent on the photo field'],
        });
      }
      try {
        const { originalname, filename } = req.file;

        const photo = await _profilePic2.default.create({
          original_name: originalname,
          file_name: filename,
          security_id: req.body.security_id,
        });
        return res.status(200).json(photo);
      } catch (e) {
        return res.status(400).json({
          erros: ['Field security_id leads to no security'],
        });
      }
    });
  }
}

exports. default = new PhotoController();
