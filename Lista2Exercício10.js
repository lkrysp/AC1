// Criando um array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrando apenas os números divisíveis por 3
let numerosDivisiveisPor3 = numeros.filter(numero => numero % 3 === 0);

// Mapeando os números para o quadrado de seus valores
let numerosQuadrado = numerosDivisiveisPor3.map(numero => numero * numero);

console.log("Números divisíveis por 3:", numerosDivisiveisPor3);
console.log("Quadrado dos números divisíveis por 3:", numerosQuadrado);
