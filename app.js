/* eslint-disable import/no-extraneous-dependencies */
import dotevn from 'dotenv';
import { resolve } from 'path';

dotevn.config();

import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeR';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import securityRoutes from './src/routes/securityRoutes';
import photoRoutes from './src/routes/photoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
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
