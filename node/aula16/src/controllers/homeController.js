exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Titulo da <span style="color: red;">page</span>',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
}

exports.tratarPost = (req, res) => {
    res.send(req.body);
}