import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Felipe',
      sobrenome: 'Mello',
      email: 'felipe.mello@email.com',
      idade: 400,
      peso: 600,
      altura: 3.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
