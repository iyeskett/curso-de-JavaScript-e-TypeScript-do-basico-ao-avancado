import { Router } from 'express';
import userController from '../controller/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

router.post('/', loginRequired, userController.create);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
  index -> lista todos os usuários - GET
  store/create -> cria um novo usuário - POST
  delete -> apaga um usuário - DELETE
  show -> mosyta um usuário - GET
  update -> atualiza um usuário - PATCH OU PUTCH
*/
