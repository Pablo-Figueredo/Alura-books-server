import express from 'express';
import livroController from '../controladores/livro.js';

const router = express.Router();
const controller = new livroController();

router
 .get('/livros', controller.getLivros);

router.post('/livros', (req, res) => {
  res.send('Você está criando um novo livro!');
});

router.patch('/livros', (req, res) => {
  res.send('Você está atualizando um livro!');
});

router.delete('/livros', (req, res) => {
  res.send('Você está deletando um livro!');
}); 

export default router;