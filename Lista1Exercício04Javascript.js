// Função para formatar o nome para o padrão desejado
function formatarEmail(nomeCompleto) {
    // Dividir o nome completo em partes (primeiro nome e sobrenome)
    let partesNome = nomeCompleto.split(" ");
    let primeiroNome = partesNome[0].toLowerCase();
    let ultimoNome = partesNome[partesNome.length - 1].toLowerCase();
    
    // Construir o endereço de e-mail
    let email = primeiroNome + "." + ultimoNome + "@facens.br";

    // Retornar o endereço de e-mail formatado
    return email;
}

// Variável nome
let nome = "Diego Lopes Crisp";

// Mostrar o primeiro e último nome no formato desejado
console.log(formatarEmail(nome));
