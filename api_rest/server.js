import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
