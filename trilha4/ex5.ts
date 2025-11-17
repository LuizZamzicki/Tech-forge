interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private livros: LivroBiblioteca[] = [];

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(l => l.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const gestao = new BibliotecaGestao();

gestao.adicionarLivro({ titulo: "O Hobbit", autor: "Tolkien", genero: "Fantasia", disponivel: true });
gestao.adicionarLivro({ titulo: "Harry Potter e a Pedra Filosofal", autor: "J. K. Rowling", genero: "Fantasia", disponivel: false });
gestao.adicionarLivro({ titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true });
gestao.adicionarLivro({ titulo: "O fabricante de lágrimas", autor: "Erin Doom", genero: "Romance", disponivel: true });

console.log("Fantasia:", gestao.filtrarPorGenero("Fantasia"));
console.log("George Orwell:", gestao.buscarPorAutor("George Orwell"));
console.log("Disponíveis ordenados:", gestao.obterLivrosDisponiveisOrdenados());
