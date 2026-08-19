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

// let array = []
// let num

// for(let i = 0; i < 6; i++){
//     num = Number(leitor.question('Entre com um numero: '))
//     array.push(num)
// }

// array.shift()
// array.pop()

// console.log('Array depois do shift e pop: ' + array)

// questao 8

// Leia 8 palavras e armazene - as em um array. Depois, peça uma palavra alvo.
// Percorra o array utilizando for e conte quantas vezes a palavra aparece.Mostre a quantidade com console.log

// let palavras = []

// for (let i = 0; i < 6; i++){
//     let palavra = leitor.question("Entre com uma palavra: ")
//     palavras.push(palavra)
// }

// let palavraAlvo = leitor.question("Entre com uma palavra alvo: ")
// let cont = 0

// for (let i = 0; i < palavras.length; i++){
//     if (palavras[i] == palavraAlvo) {
//         cont++
//     }
// }

// console.log('Contagem de ocorrencias da palavra ' + palavraAlvo + ': ' + cont)

// questao 9

// Juntar duas listas sem usar concat
// Peça 3 nomes da turma A e 3 nomes da turma B, armazenando - os em dois arrays.
// Crie um terceiro array e copie os nomes das duas turmas utilizando for e push.Mostre o array combinado

// const TAM = 3
// let turmaA = []
// let turmaB = []

// for (let i = 0; i < TAM; i++){
//     let nome = leitor.question('Entre com um nome de aluno para a turma A: ')
//     turmaA.push(nome)
//     let nome = leitor.question('Entre com um nome de aluno para a turma B: ')
//     turmaB.push(nome)
// }

// let


// questao 10

// const TAM = 5
// let array = []

// for (let i = 0; i < TAM; i++){
//     let num = leitor.question('Entre com um numero: ')
//     array.push(num)
// }

// let arrayInvertido = []

// for (let i = array.length-1; i >= 0; i--){
//     let aux = array[i]
//     arrayInvertido.push(aux)
// }

// console.log('Array invertido: ' + arrayInvertido)

// questao 11

// let arraySemRepetidos = []
// let repetiu = false

// while (!repetiu) {
//     let palavra = leitor.question('Entre com uma palavra (repita uma palavra para sair): ')

//     if (arraySemRepetidos.includes(palavra)) {
//         repetiu = true
//     }
//     else {
//         arraySemRepetidos.push(palavra)
//     }
// }

// console.log('Array sem repeticoes: ' + arraySemRepetidos)

// questao 12

// const TAM = 8
// let array = []


// for (let i = 0; i < TAM; i++){
//     let num = Number(leitor.question('Entre com um numero: '))
//     array.push(num)
// }

// let X = Number(leitor.question('Entre com um valor X: '))

// let arrayMaiorQueX = []

// for (let i = 0; i < array.length; i++){
//     if (array[i] > X) {
//         arrayMaiorQueX.push(array[i])
//     }
// }

// console.log('Array com valores informados maiores que ' + X + ': ' + arrayMaiorQueX)

// questao 13

// const TAM = 8
// let arrayPositivos = []
// let arrayNegativos = []

// for (let i = 0; i < TAM; i++){
//     let num = Number(leitor.question('Entre com um numero: '))
//     if (num >= 0) {
//         arrayPositivos.push(num)
//     }
//     else {
//         arrayNegativos.push(num)
//     }
// }

// console.log('Array com numeros positivos: ' + arrayPositivos)
// console.log('Array com numeros negativos: ' + arrayNegativos)

// questao 14

// const TAM = 8
// let palavras = []

// for (let i = 0; i < TAM; i++){
//     let palavra = leitor.question('Entre com uma palavra: ')
//     palavras.push(palavra)
// }

// let x = leitor.question('Entre com a palavra x: ')
// let y = leitor.question('Entre com a palavra y: ')

// let palavrasAposSubs = []

// for (let i = 0; i < palavras.length; i++){
//     if (palavras[i] === x) {
//         palavrasAposSubs.push(y)
//     }
//     else {
//         palavrasAposSubs.push(palavras[i])
//     }
// }

// console.log('Array antes das substituicoes: ' + palavras)
// console.log('Array apos substituicoes: ' + palavrasAposSubs)

// questao 15

const listaNumeros = [5, 6, 9, 4, 3]
let numerosAcertados = []
let contAcertosUnicos = 0

while (contAcertosUnicos != listaNumeros.length) {
    let num = Number(leitor.question('Entre com um palpite: '))
    if (listaNumeros.includes(num) && !numerosAcertados.includes(num)) {
        console.log('Parabens! Acertou o numero ' + num)
        numerosAcertados.push(num)
        contAcertosUnicos++
    }
    else {
        console.log('Palpite errado! Tente novamente!')
    }
}

console.log('Sucesso! Numeros acertados: ' + numerosAcertados)