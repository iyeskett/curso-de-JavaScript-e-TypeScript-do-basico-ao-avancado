import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokensRoutes from './routes/tokenRoutes';
import alunosRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

// Adicionar url onde pode usar a api, no exemplo está a própria url
const whiteList = [
  'http://localhost:3001', // url liberada para acesso
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
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
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokensRoutes);
    this.app.use('/alunos/', alunosRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
