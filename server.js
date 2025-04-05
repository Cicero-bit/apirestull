import app from './app';

const port = 3002;

app.listen(port, () => {
  console.log(`servidor aberto na porta http://localhost:${port}`);
});
