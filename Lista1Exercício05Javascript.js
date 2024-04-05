// Inicialização da variável de saída
let output = "";

// Loop de 1 a 10
for (let i = 1; i <= 10; i++) {
    // Adiciona o número atual à saída
    output += i;
    
    // Adiciona um traço, exceto após o número 10
    if (i !== 10) {
        output += " - ";
    }
}

// Imprime a saída no console
console.log(output);
