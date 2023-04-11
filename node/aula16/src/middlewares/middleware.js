exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Teste de valor da variavel local';
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}