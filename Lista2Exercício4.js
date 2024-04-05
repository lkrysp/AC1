// Criando um array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrando apenas os números pares
let numerosPares = numeros.filter(numero => numero % 2 === 0);

// Mapeando os números para o dobro de seus valores
let numerosDobro = numerosPares.map(numero => numero * 2);

console.log("Números pares:", numerosPares);
console.log("Dobro dos números pares:", numerosDobro);
