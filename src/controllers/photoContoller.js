/* eslint-disable max-len */
/* eslint-disable camelcase */
import multer from 'multer';

import multerConfig from '../config/multerConfig';
import Photo from '../models/profilePic';

const uploadFile = multer({
  ...multerConfig,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      return cb(null, true);
    }
    return cb(new multer.MulterError('File type not allowed, try png or jpeg'));
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

        const photo = await Photo.create({
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

export default new PhotoController();
