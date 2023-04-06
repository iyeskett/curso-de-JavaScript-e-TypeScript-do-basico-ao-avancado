const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

// /profiles/12345?campanha=googleads&nome_campanha=seila

app.get('/', (req, res) => {
    res.send(`
    <form action='/' method="POST">
    Nome: <input type="text" name="nome">
    Sobrenome: <input type="text" name="sobrenome">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Foi enviado: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
