
// questao 1

// function somaArray(arr) {
//     let soma = 0
//     arr.forEach(element => {
//         soma+=element
//     });

//     return soma
// }

// let array = [1, 2, 3, 4, 5]

// console.log('Array de entrada: ' + array)
// console.log('Soma dos elementos do array: ' + somaArray(array))

// questao 2

// function dobraArray(arr) {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i]*2)
//     }
// }

// let array2 = [1,2,3,4]

// console.log('Array de entrada: ' + array2)
// console.log('Numeros dobrados do array: ')
// dobraArray(array2)

// questao 3

// function celsiusParaFarenheit(arr) {
//     let arrFarenheit = []

//     for (let i = 0; i < arr.length; i++){
//         let farenheit = (arr[i] * 1.8) + 32
//         arrFarenheit.push(farenheit)
//     }

//     return arrFarenheit
// }

// let arrayCelsius = [0, 20, 30]

// console.log('Array original em C°: ' + arrayCelsius)
// console.log('Array convertido em F°: ' + celsiusParaFarenheit(arrayCelsius))

// questao 4

// function saudacao(arr) {
//     for (let i = 0; i < arr.length; i++){
//         console.log('Olá, ' + arr[i] + '!')
//     }
// }

// let array3 = ['João', 'Maria', 'José']

// saudacao(array3)

// questao 5

// function filtraPares(arr) {
//     let arrayPares = []

//     arr.forEach(element => {
//         if (element % 2 == 0) {
//             arrayPares.push(element)
//         }
//     });

//     return arrayPares
// }

// let array4 = [1, 2, 3, 4, 5, 6]

// console.log('Array original: ' + array4)
// console.log('Array contendo apenas os pares: ' + filtraPares(array4))

// questao 6


// function filtraPalavrasLongas(arr) {
//     let palavrasLongas = []

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].length > 5) {
//             palavrasLongas.push(arr[i])
//         }
//     }

//     return palavrasLongas
// }

// let palavras = ["maçã", "banana", "abacaxi", "uva"]

// console.log('Array original de palavras: ' + palavras)
// console.log('Array contendo apenas as palavras com mais de 5 letras: ' + filtraPalavrasLongas(palavras))

// questao 7

// let numeros = [1, 2, 3, 4, 5]
// let soma = numeros.reduce((acc, n) => acc + n, 0)

// console.log('Array de entrada: ' + numeros)
// console.log('Soma dos valores do array: ' + soma)

// questao 8

// let numeros2 = [1, 2, 3, 4]
// let produto = numeros2.reduce((prod, n) => prod * n, 1)

// console.log('Array de entrada: ' + numeros2)
// console.log('Soma dos valores do array: ' + produto)

// questao 9

// function contarOcorrencias(arr, n) {
//     let contOcorrencias = 0
//     arr.forEach(element => {
//         if (element == n) {
//            contOcorrencias++
//         }
//     });

//     return contOcorrencias
// }

// let numeros3 = [1, 2, 2, 3, 2, 4]
// let n = 2
// console.log('Array de entrada: ' + numeros3)
// console.log('Nº de ocorrencias de ' + n + ' no array: ' + contarOcorrencias(numeros3,n))

// questao 10

// function filtrarPalavrasTamanho5(arr) {
//     let palavrasTamanho5 = []

//     arr.forEach(element => {
//         if (element.length == 5) {
//             palavrasTamanho5.push(element)
//         }
//     })

//     return palavrasTamanho5
// }

// let palavras2 = ["lucas", "sapos", "gato", "gatos", "pinto", "pintos"]
// let palavrasTamanho5 = filtrarPalavrasTamanho5(palavras2)
// // use map para transformar essas palavras em letras maiúsculas

// let palavrasUppercase = palavrasTamanho5.map(element => element.toUpperCase())

// console.log('Array de palavras de entrada: ' + palavras2)
// console.log('Array com palavras de tamanho 5 em maiúsculas: ' + palavrasUppercase)

// questao 11

// function filtraPareseSoma(arr) {
//     let arrayPares = arr.filter(element => element % 2 == 0)
//     let soma = arrayPares.reduce((acc, n) => acc + n, 0)

//     return soma
// }

// let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log('Array de entrada: ' + numeros4)
// console.log('Soma dos valores pares contidos no array: ' + filtraPareseSoma(numeros4))

// questao 12

// const produtos = [
//   { nome: "Notebook", valor: 2500, quantidadeEmEstoque: 10 },
//   { nome: "Celular",  valor: 1500, quantidadeEmEstoque: 0 },
//   { nome: "Monitor",  valor: 800,  quantidadeEmEstoque: 5 },
//   { nome: "Teclado",  valor: 100,  quantidadeEmEstoque: 0 },
//   { nome: "Mouse",    valor: 50,   quantidadeEmEstoque: 20 }
// ];

// function filtrarProdutosEmEstoque(produtos) {
//     let produtosDisponiveis = []
    
//     for (let i = 0; i < produtos.length; i++){
//         if (produtos[i].quantidadeEmEstoque > 0) {
//             produtosDisponiveis.push(produtos[i])
//         }
//     }

//     return produtosDisponiveis
// }

// console.log('Produtos: ', produtos)
// console.log('Produtos disponiveis em estoque: ', filtrarProdutosEmEstoque(produtos))

// questao 13

// function somaValoresProdutos(produtos) {
//     let soma = 0
//     for (let i = 0; i < produtos.length; i++) {
//         soma += produtos[i].valor * produtos[i].quantidadeEmEstoque
//     }
//     return soma
// }

// console.log('Soma dos valores dos produtos em estoque: ', somaValoresProdutos(filtrarProdutosEmEstoque(produtos)))

// questao 14

// function primeiroNumeroMaiorQue10(arr) {
//     const primeiroMaiorQue10 = arr.find(num => num > 10)
//     return primeiroMaiorQue10
// }

// let numeros5 = [3, 8, 12, 5, 20]

// console.log('Array de entrada: ' + numeros5)
// console.log('Primeiro numero maior que 10 encontrado no array: ' + primeiroNumeroMaiorQue10(numeros5))

// questao 15

const alunos = [
  { nome: "João",  nota: 5.5 },
  { nome: "Maria", nota: 6.8 },
  { nome: "Pedro", nota: 7.2 },
  { nome: "Ana",   nota: 9.0 }
];

const alunoNotaMaiorQue7 = alunos.find(aluno => aluno.nota >= 7)

console.log('Alunos', alunos)
console.log('Primeiro aluno que tirou nota maior ou igual a 7: ', alunoNotaMaiorQue7)

// questao 16

function ordenaPalavras(arr) {
    arr.sort()
}

let palavras3 = ["Maria", "Ana", "João", "Bruna"]

console.log('Palavras de entrada: ' + palavras3)
ordenaPalavras(palavras3)
console.log('Palavras em ordem alfabetica: ' + palavras3)

// questao 17

const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse",   preco: 50 },
  { nome: "Monitor", preco: 800 },
  { nome: "Notebook",preco: 2500 }
];

console.log('Produtos: ', produtos)
// Dado um array de produtos com propriedades nome e preco, use sort para ordenar os produtos do mais barato para o mais caro
console.log('Produtos ordenados do mais barato ao mais caro: ', (produtos.sort((a, b) => a.preco - b.preco)))