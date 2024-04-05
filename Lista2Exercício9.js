// Encontrando o primeiro produto com preço superior a R$ 100,00 e alterando o nome
let produtoCaro = produtos.find(produto => produto.preco > 100);
if (produtoCaro) {
    produtoCaro.nome = "Produto Caro";
}

console.log("Primeiro produto com preço superior a R$ 100,00:", produtoCaro);
