import leitor from 'readline-sync'

// questao 1
// Peça 5 nomes com prompt, guarde em um array com push e mostre todos em um único alert separados por vírgula

// const tam = 5
// let listaNomes = []

// for(let i=0;i<tam;i++){
//     let nome = leitor.question('Insira um nome: ')
//     listaNomes.push(nome)
// }

// alert(`Os nomes inseridos foram: ${listaNomes.join(', ')}`)

// questao 2

// let listaNumeros = []
// let numero

// while(numero != 'fim'){
//     numero = leitor.question('Insira um numero: ')
//     if(numero != 'fim')
//         listaNumeros.push(numero)
// }

// console.log('quantidade de elementos da lista: ' + listaNumeros.length)
// console.log('primeiro valor da lista: ' + listaNumeros[0])
// console.log('ultimo numero da lista: ' + listaNumeros[listaNumeros.length-1])

// questao 4

// const tam = 8
// let somaPares = 0
// let somaTotal = 0

// for(let i=0;i<tam;i++){
//     let numero = Number(leitor.question('Insira um numero: '))
//     if(numero % 2 == 0)
//         somaPares+=numero
//     somaTotal+=numero
// }

// console.log('Soma dos valores pares inseridos: ' + somaPares)
// console.log('Media de todos os valores: ' + somaTotal/tam)

// questao 5

// let listaFrutas = []
// const tamMin = 5
// let cont = 0
// let fruta

// while(cont < tamMin){
//     fruta = leitor.question('Insira uma fruta: ')
//     listaFrutas.push(fruta)
//     cont++
// }

// let procurarFruta = leitor.question('Entre com uma fruta para procurar: ')

// // usando includes, se encontrar, utiliza indexof para mostrar a posição da fruta na lista
// if(listaFrutas.includes(procurarFruta))
//     console.log(`A fruta ${procurarFruta} foi encontrada na posição ${listaFrutas.indexOf(procurarFruta)}`)
// else
//     console.log(`A fruta ${procurarFruta} não foi encontrada na lista`)

// questao 6

// const tam = 10
// let listaNumeros = []

// for(let i=0;i<tam;i++){
//     let numero = leitor.question('Entre com um numero: ')
//     listaNumeros.push(numero)
// }

// let numeroAlvo = leitor.question('Insira um numero para procurar: ')

// if(listaNumeros.includes(numeroAlvo)){
//     console.log('Ultima posicao de ' + numeroAlvo + ' na lista eh ' + listaNumeros.lastIndexOf(numeroAlvo))
// }
// else{
//     console.log('Numero nao encontrado.')
// }

// questao 7

let array = []
let num

for(let i = 0; i < 6; i++){
    num = Number(leitor.question('Entre com um numero: '))
    array.push(num)
}

array.shift()
array.pop()

console.log('Array depois do shift e pop: ' + array)