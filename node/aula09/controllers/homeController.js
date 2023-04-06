exports.paginaInicial = (req, res) => {
    res.send(`
    <form action='/' method="POST">
    Nome: <input type="text" name="nome">
    Sobrenome: <input type="text" name="sobrenome">
    <button>Enviar</button>
    </form>
    `);
}

exports.tratarPost = (req, res) => {
    res.send('Nova rota de post');
}