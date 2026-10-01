import express from 'express';
import livroController from '../controladores/livro.js';

const router = express.Router();
const controller = new livroController();

router
 .get('/livros', controller.getLivros)
 .get('/livros/:id', controller.getLivroById) 
 .post('/livros', controller.postLivro)
 .patch('/livros/:id', controller.patchLivro)
 .delete('/livros/:id', controller.deleteLivro); 

export default router;