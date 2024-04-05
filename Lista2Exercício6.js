// Definindo a classe Livro
class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

// Criando um array de objetos Livro
let livros = [
    new Livro("Livro 1", 250),
    new Livro("Livro 2", 400),
    new Livro("Livro 3", 150),
    new Livro("Livro 4", 500)
];

// Filtrando os livros com mais de 300 páginas
let livrosComMaisDe300Paginas = livros.filter(livro => livro.paginas > 300);
console.log("Livros com mais de 300 páginas:", livrosComMaisDe300Paginas);
