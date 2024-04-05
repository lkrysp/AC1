function inverterString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

// Testando a função com uma string
let stringOriginal = "Olá, mundo!";
let stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida); // Deve imprimir "!odnum ,álO"
