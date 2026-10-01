import fs from 'fs';

class livrosServico {
     getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'));
}

    insereLivro(livroNovo) {
        const livros = JSON.parse(fs.readFileSync('livros.json'));

        const novalistaDeLivros = [...livros, livroNovo];
        fs.writeFileSync('livros.json', JSON.stringify(novalistaDeLivros));
}

    atualizaLivro(id, dadosAtualizados) {
        const livros = JSON.parse(fs.readFileSync('livros.json'));
        const index = livros.findIndex(livro => livro.id === id);
        if (index === -1) return null;

        livros[index] = { ...livros[index], ...dadosAtualizados, id };
        fs.writeFileSync('livros.json', JSON.stringify(livros));
        return livros[index];
    }

    excluiLivro(id) {
        const livros = JSON.parse(fs.readFileSync('livros.json'));
        const index = livros.findIndex(livro => livro.id === id);
        if (index === -1) return null;

        const [livroExcluido] = livros.splice(index, 1);
        fs.writeFileSync('livros.json', JSON.stringify(livros));
        return livroExcluido;
}

}
export default livrosServico;
