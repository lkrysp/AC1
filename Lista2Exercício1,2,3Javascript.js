// Definindo a classe Usuario
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Criando um array de objetos Usuario
let usuarios = [
    new Usuario("João", 25),
    new Usuario("Maria", 30),
    new Usuario("Carlos", 40)
];

// Criando um novo array apenas com os nomes dos usuários em letras maiúsculas
let nomesMaiusculos = usuarios.map(usuario => usuario.nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

// Mostrando números ímpares de 0 a 100
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Filtrando os usuários com idade superior a 18 anos
let usuariosMaioresDeIdade = usuarios.filter(usuario => usuario.idade > 18);

// Extraindo apenas os nomes dos usuários
let nomesUsuariosMaioresDeIdade = usuariosMaioresDeIdade.map(usuario => usuario.nome);

console.log("Nomes dos usuários com idade superior a 18 anos:", nomesUsuariosMaioresDeIdade);

// Encontrando o primeiro usuário com idade entre 25 e 30 anos
let usuario25a30 = usuarios.find(usuario => usuario.idade >= 25 && usuario.idade <= 30);
console.log("Primeiro usuário com idade entre 25 e 30 anos:", usuario25a30);

