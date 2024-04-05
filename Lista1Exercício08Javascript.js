function contarVogais(str) {
    // Inicializa um contador para armazenar o número de vogais
    let contador = 0;
    
    // Define uma lista de vogais minúsculas
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    
    // Converte a string para minúsculas para garantir que todas as vogais sejam contadas
    str = str.toLowerCase();
    
    // Percorre cada caractere da string
    for (let i = 0; i < str.length; i++) {
        // Verifica se o caractere atual é uma vogal
        if (vogais.includes(str[i])) {
            // Incrementa o contador se for uma vogal
            contador++;
        }
    }
    
    // Retorna o número de vogais encontradas na string
    return contador;
}

// Testando a função com uma string
let stringTeste = "Esta é uma string de teste";
let numeroVogais = contarVogais(stringTeste);
console.log("Número de vogais:", numeroVogais);
