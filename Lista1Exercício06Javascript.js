// Definindo a função para mostrar o dobro do número
function mostrarDobro(numero) {
    // Verifica se o número é menor ou igual a zero
    if (numero <= 0) {
        return "Só é aceito números positivos maiores que zero";
    } else {
        // Retorna o dobro do número
        return numero * 2;
    }
}

// Testando a função com diferentes valores
console.log(mostrarDobro(5)); // Deve mostrar 10
console.log(mostrarDobro(0)); // Deve mostrar a mensagem de erro
console.log(mostrarDobro(-3)); // Deve mostrar a mensagem de erro
