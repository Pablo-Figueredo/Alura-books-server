import express from 'express';
import router from './rotas/livro.js';

const app = express();

const port = 8000;

app.use(express.json());
app.use('/livro', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});