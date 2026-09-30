import fs from 'fs';

class livrosServico {
     getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'));
}
}

export default livrosServico;
