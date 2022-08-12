function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 ={
    nome: "Luis",
    idade: 18,
}

const pessoa2 ={
    nome: "Laura",
    idade: 20,
}

const animal ={
    nome: "Mira",
    idade: 2,
}

console.log(calculaIdade.call(animal, 4));