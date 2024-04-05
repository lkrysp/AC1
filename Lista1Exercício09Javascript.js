function validarEmail(email) {
    // Verifica se o e-mail contém apenas um símbolo '@'
    let indexArroba = email.indexOf('@');
    if (indexArroba === -1 || email.indexOf('@', indexArroba + 1) !== -1) {
        return false;
    }

    // Verifica se há pelo menos um ponto '.' após o '@'
    let indexPonto = email.indexOf('.', indexArroba);
    if (indexPonto === -1 || indexPonto === email.length - 1) {
        return false;
    }

    return true;
}

// Testando a função com alguns exemplos
console.log(validarEmail("usuario@example.com")); // true
console.log(validarEmail("usuario@exa.mple.com")); // true
console.log(validarEmail("usuario@example")); // false (faltando ponto após o '@')
console.log(validarEmail("usuario@exa.mple.")); // false (ponto no final do endereço)
console.log(validarEmail("usuario@@example.com")); // false (mais de um símbolo '@')
