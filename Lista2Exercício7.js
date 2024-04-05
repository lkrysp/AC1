// Definindo a classe Carro
class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

// Criando um array de objetos Carro
let carros = [
    new Carro("Toyota", 2015),
    new Carro("Honda", 2012),
    new Carro("Toyota", 2018),
    new Carro("Ford", 2008)
];

// Encontrando o primeiro carro da marca "Toyota"
let primeiroToyota = carros.find(carro => carro.marca === "Toyota");
console.log("Primeiro carro da marca Toyota:", primeiroToyota);

// Filtrando os carros fabricados após 2010
let carrosFabricadosApos2010 = carros.filter(carro => carro.ano > 2010);
console.log("Carros fabricados após 2010:", carrosFabricadosApos2010);
