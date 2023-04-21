import { Router } from 'express';
import userController from '../controller/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.post('/', userController.create);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
  index -> lista todos os usuários - GET
  store/create -> cria um novo usuário - POST
  delete -> apaga um usuário - DELETE
  show -> mosyta um usuário - GET
  update -> atualiza um usuário - PATCH OU PUTCH
*/
