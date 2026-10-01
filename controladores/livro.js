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
            return res.status(422).send('Id inválido');
        }

        const livro = servico.getTodosLivros().find(livro => livro.id === id);
        if (!livro) {
            return res.status(404).send('Livro não encontrado');
        }

        return res.status(200).send(livro);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
    
    postLivro(req, res) {
    try {
        const livroNovo = req.body;
        if (!livroNovo?.titulo) {
            return res.status(422).send('O campo titulo é obrigatório');
        }

        servico.insereLivro(livroNovo);
        return res.status(201).send(livroNovo);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

    patchLivro(req, res) {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(422).send('Id inválido');
        }

        const livro = servico.atualizaLivro(id, req.body);
        if (!livro) {
            return res.status(404).send('Livro não encontrado');
        }
        return res.status(200).send(livro);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

deleteLivro(req, res) {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(422).send('Id inválido');
        }

        const livro = servico.excluiLivro(id);
        if (!livro) {
            return res.status(404).send('Livro não encontrado');
        }
        return res.status(200).send(livro);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

}

export default livroController;
