/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable import/no-extraneous-dependencies */
import dotevn from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';

dotevn.config();

import './database';
import express from 'express';
import homeRoutes from './routes/homeR';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import securityRoutes from './routes/securityRoutes';
import photoRoutes from './routes/photoRoutes';

const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin: function (origin, cb) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error(`Cors not allowed for this domain ${origin}`), false);
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/login/', tokenRoutes);
    this.app.use('/security/', securityRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
