import express from 'express';
import homeroutes from './src/routes/homeR';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json);
  }

  routes() {
    this.app.use('/', homeroutes);
  }
}

export default new App().app;
