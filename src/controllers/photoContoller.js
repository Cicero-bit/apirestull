import multer from 'multer';

import multerConfig from '../config/multerConfig';

const uploadFile = multer({
  ...multerConfig,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['imgage/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      return cb(null, true);
    }
    return cb(new multer.MulterError('File type not allowed, try png or jpeg'));
  },
}).single('photo');

class PhotoController {
  async store(req, res) {
    return uploadFile(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      return res.status(200).json(req.file);
    });
  }
}

export default new PhotoController();
