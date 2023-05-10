import app from './app';

const port = process.env.APP_PORT;
const url = process.env.APP_URL;
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
  console.log(`CTRL + Clique em ${url}:${port}`);
});
