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

    getLivroById(req, res) {
    try {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            res.status(400).send('Id inválido');
            return;
        }

        const livro = servico.getTodosLivros().find(livro => livro.id === id);

        if (!livro) {
            res.status(404).send('Livro não encontrado');
            return;
        }

        return res.status(200).send(livro);

    } catch (error) {
        res.status(500).send(error);
    }
}
    
    postLivro(req, res) {
    try {
        const livroNovo = req.body;
        servico.insereLivro(livroNovo);
        res.status(201).send(livroNovo);
    } catch (error) {
        res.status(500).send(error);
    }
}

    patchLivro(req, res) {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).send('Id inválido');
        }

        const livro = servico.atualizaLivro(id, req.body);
        if (!livro) {
            return res.status(404).send('Livro não encontrado');
        }
        return res.status(200).send(livro);
    }
   catch (error) {
        res.status(500).send(error);
    }
}

deleteLivro(req, res) {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).send('Id inválido');
        }

        const livro = servico.excluiLivro(id);
        if (!livro) {
            return res.status(404).send('Livro não encontrado');
        }
        return res.status(200).send(livro);
    } catch (error) {
        res.status(500).send(error);
    }
}

}

export default livroController;
