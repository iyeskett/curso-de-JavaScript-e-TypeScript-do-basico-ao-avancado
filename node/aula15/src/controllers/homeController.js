exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Felipe', logado: true };
    // console.log(req.session.usuario);
    // req.flash('info', 'Olá mundo!');
    // req.flash('error', 'Olá teste!');
    // req.flash('success', 'Olá testando!');
    console.log(req.flash('error'));
    console.log(req.flash('success'));
    console.log(req.flash('info'));
    res.render('index');
    return;
}

exports.tratarPost = (req, res) => {
    res.send(req.body);
}