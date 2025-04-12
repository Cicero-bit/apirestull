import app from './app';

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`servidor aberto na porta ${process.env.APP_URL}:${port}`);
});
