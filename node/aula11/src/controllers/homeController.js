exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.tratarPost = (req, res) => {
    res.send('Nova rota de post');
}