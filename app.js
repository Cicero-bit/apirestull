/* eslint-disable import/no-extraneous-dependencies */
import dotevn from 'dotenv';

dotevn.config();

import './src/database';
import express from 'express';
import homeRoutes from './src/routes/homeR';
import userRoutes from './src/routes/userRotues';
import tokenRoutes from './src/routes/tokenRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/login/', tokenRoutes);
  }
}

export default new App().app;
