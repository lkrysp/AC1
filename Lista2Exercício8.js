// Definindo a classe Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

// Criando um array de objetos Produto
let produtos = [
    new Produto("Produto 1", 50),
    new Produto("Produto 2", 100),
    new Produto("Produto 3", 200)
];

// Mapeando os produtos para um novo array com os preços aumentados em 10%
let produtosAumentoPreco = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: produto.preco * 1.1
    };
});

console.log("Produtos com preços aumentados em 10%:", produtosAumentoPreco);
