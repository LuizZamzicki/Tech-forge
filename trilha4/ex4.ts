interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Memórias Póstumas", autor: "Machado de Assis", disponivel: false });

console.log(biblioteca.buscarLivrosDisponiveis());
