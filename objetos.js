let objeto = {
    nome: 'Lucas',
    idade: 23,
    email: 'teste@exemplo.com',
    telefone: '1111-2222'
}

console.log(objeto)
objeto.nome = 'Carlos' // alterando atributo
console.log(objeto)
objeto.novoAtributo = "novo atributo" // adicionando novo atributo
console.log(objeto)

let objetoNovo = objeto
objetoNovo.nome = 'trocou o nome'
console.log(objeto.nome)
console.log(objetoNovo.nome)

// quando altera a atribuicao, altera o original (copia por referencia)

// clonar o objeto
let clone = {} // inicializando o objeto
clone.nome = objeto.nome
clone.idade = objeto.idade
// ...
console.log('clone1: ')
console.log(clone)

let clone2 = {...objeto} // tecnica do espalhamento
console.log('clone2: ')
console.log(clone2)
let clone3 = structuredClone(objeto)
console.log('clone3: ')
console.log(clone3)

// impressao do objeto no console.log
console.log("objeto: ", objeto)

// outra forma de acessar valor alem de objeto.nome
console.log(objeto['nome'])

// objeto mais complexo
let objetoComplexo = {
    'nome': 'Jezer',
    telefones: ['5142123432', '5124324221', '4132434389'],
    endereco:{
        logradouro: 'rua do exemplo',
        numero: 34,
        bairro: 'exemplo',
        cep: '234234431'
    }
}
console.log(objetoComplexo.endereco.numero)
console.log(objetoComplexo.telefones[2])