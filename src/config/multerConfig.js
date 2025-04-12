import multer from 'multer';
import path from 'path';

const random = () => Math.floor(Math.random() * 100000 + 100000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${path.extname(file.originalname)}`);
    },
  }),
};
