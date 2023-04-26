import { Router } from 'express';

import fotoController from '../controller/FotoController';

const router = new Router();

router.post('/', fotoController.create);

export default router;
