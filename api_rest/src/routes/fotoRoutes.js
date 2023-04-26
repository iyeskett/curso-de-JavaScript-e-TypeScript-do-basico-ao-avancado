import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controller/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.create);

export default router;
