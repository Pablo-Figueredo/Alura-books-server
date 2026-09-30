import livrosServico from '../servicos/livros.js';

const servico = new livrosServico();

class livroController {

    getLivros(req, res) {
    try {
        const livros = servico.getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500).send(error);
    }
 
}

}

export default livroController;
