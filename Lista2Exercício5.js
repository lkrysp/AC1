// Definindo a classe Animal
class Animal {
    emitirSom() {
        console.log("Som genérico de animal");
    }

    correr() {
        console.log("Animal correndo");
    }
}

// Subclasse Cachorro
class Cachorro extends Animal {
    emitirSom() {
        console.log("Au au!");
    }
}

// Subclasse Gato
class Gato extends Animal {
    emitirSom() {
        console.log("Miau!");
    }
}

// Testando as classes
let cachorro = new Cachorro();
let gato = new Gato();

cachorro.emitirSom(); // Deve imprimir "Au au!"
gato.emitirSom(); // Deve imprimir "Miau!"
