function verificarPalindromo(str) {
    // Remove espaços em branco e converte a string para minúsculas
    str = str.toLowerCase().replace(/\s/g, '');
    
    // Inicializa os índices para verificar os caracteres
    let inicio = 0;
    let fim = str.length - 1;
    
    // Loop enquanto os índices não se cruzarem
    while (inicio < fim) {
        // Verifica se os caracteres correspondentes são iguais
        if (str[inicio] !== str[fim]) {
            // Se não forem iguais, a string não é um palíndromo
            return false;
        }
        // Move para o próximo par de caracteres
        inicio++;
        fim--;
    }
    // Se o loop terminar sem retornar false, a string é um palíndromo
    return true;
}

// Testando a função com alguns exemplos
console.log(verificarPalindromo("arara")); // true
console.log(verificarPalindromo("ana")); // true
console.log(verificarPalindromo("Ame a ema")); // true
console.log(verificarPalindromo("banana")); // false
