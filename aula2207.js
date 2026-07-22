// ex1
function teste(a){
    return "valor de a: " + a
}

let c = teste;

console.log(c)
console.log(c("casa"))

let a = 2

c = teste(a) // funcao de 1a ordem

console.log(c)

let funcao = function(a){
    return "valor de a + 2: " + (a + 2)
}

console.log(funcao(1))

// ex2
let funcao = (a,b) => {
    console.log("valor A: " + a + ", valor B: " + b)
}

funcao("casa", "abacate")

// ex 3

// ex 3
function multiplicar5(num){
    return num*5
}

function divide2(num){
    return num/2
}

function questao(lista, funcao){
    let resultado = []

    for(let i = 0; i < lista.length; i++){
        resultado.push(funcao(lista[i]))
    }

    return resultado
}

console.log(questao([2,5,7], multiplicar5))
console.log(questao([2,5,7], divide2))
console.log(questao([2,5,7], (valor) => valor*valor))

// ex4

let lista = [2,5,6,7,8,9]

function mapear(elemento){
    return elemento*5
}

let listaNova = lista.map(mapear)

console.log(lista)
console.log(listaNova)
console.log(lista.map(valor=>valor*5))

// ex5

let pessoas = [
    {nome: 'Jezer', idade:25},
    {nome: 'Carlos', idade:25},
    {nome: 'Rafael', idade:25}
]

let nomes = pessoas.map(pessoa=>pessoa.nome)

console.log(pessoas)
console.log(nomes)

// ex6

let lista = [-1,-4,5,8,-5,67]
function funcaoFiltro(elemento){
    if (elemento < 0){
        return false
    }
    else{
        return true
    }
}

let novaLista = lista.filter(funcaoFiltro)
console.log(lista)
console.log(novaLista)