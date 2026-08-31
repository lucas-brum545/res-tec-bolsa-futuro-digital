// questao 1

function somaArray(arr) {
    let soma = 0
    arr.forEach(element => {
        soma+=element
    });

    return soma
}

let array = [1, 2, 3, 4, 5]

console.log('Array de entrada: ' + array)
console.log('Soma dos elementos do array: ' + somaArray(array))

// questao 2

function dobraArray(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]*2)
    }
}

let array2 = [1,2,3,4]

console.log('Array de entrada: ' + array2)
console.log('Numeros dobrados do array: ')
dobraArray(array2)

// questao 3

function celsiusParaFarenheit(arr) {
    let arrFarenheit = []

    for (let i = 0; i < arr.length; i++){
        let farenheit = (arr[i] * 1.8) + 32
        arrFarenheit.push(farenheit)
    }

    return arrFarenheit
}

let arrayCelsius = [0, 20, 30]

console.log('Array original em C°: ' + arrayCelsius)
console.log('Array convertido em F°: ' + celsiusParaFarenheit(arrayCelsius))

// questao 4

function saudacao(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log('Olá, ' + arr[i] + '!')
    }
}

let array3 = ['João', 'Maria', 'José']

saudacao(array3)

// questao 5

function filtraPares(arr) {
    let arrayPares = []

    arr.forEach(element => {
        if (element % 2 == 0) {
            arrayPares.push(element)
        }
    });

    return arrayPares
}

let array4 = [1, 2, 3, 4, 5, 6]

console.log('Array original: ' + array4)
console.log('Array contendo apenas os pares: ' + filtraPares(array4))

// questao 6


function filtraPalavrasLongas(arr) {
    let palavrasLongas = []

    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > 5) {
            palavrasLongas.push(arr[i])
        }
    }

    return palavrasLongas
}

let palavras = ["maçã", "banana", "abacaxi", "uva"]

console.log('Array original de palavras: ' + palavras)
console.log('Array contendo apenas as palavras com mais de 5 letras: ' + filtraPalavrasLongas(palavras))

// questao 7

let numeros = [1, 2, 3, 4, 5]
let soma = numeros.reduce((acc, n) => acc + n, 0)

console.log('Array de entrada: ' + numeros)
console.log('Soma dos valores do array: ' + soma)

// questao 8

let numeros2 = [1, 2, 3, 4]
let produto = numeros2.reduce((prod, n) => prod * n, 1)

console.log('Array de entrada: ' + numeros2)
console.log('Soma dos valores do array: ' + produto)

// questao 9

function contarOcorrencias(arr, n) {
    let contOcorrencias = 0
    arr.forEach(element => {
        if (element == n) {
           contOcorrencias++
        }
    });

    return contOcorrencias
}

let numeros3 = [1, 2, 2, 3, 2, 4]
let n = 2
console.log('Array de entrada: ' + numeros3)
console.log('Nº de ocorrencias de ' + n + ' no array: ' + contarOcorrencias(numeros3,n))

// questao 10

function filtrarPalavrasTamanho5(arr) {
    let palavrasTamanho5 = []

    arr.forEach(element => {
        if (element.length == 5) {
            palavrasTamanho5.push(element)
        }
    })

    return palavrasTamanho5
}

let palavras2 = ["lucas", "sapos", "gato", "gatos", "pinto", "pintos"]
let palavrasTamanho5 = filtrarPalavrasTamanho5(palavras2)
// use map para transformar essas palavras em letras maiúsculas

let palavrasUppercase = palavrasTamanho5.map(element => element.toUpperCase())

console.log('Array de palavras de entrada: ' + palavras2)
console.log('Array com palavras de tamanho 5 em maiúsculas: ' + palavrasUppercase)

// questao 11

function filtraPareseSoma(arr) {
    let arrayPares = arr.filter(element => element % 2 == 0)
    let soma = arrayPares.reduce((acc, n) => acc + n, 0)

    return soma
}

let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Array de entrada: ' + numeros4)
console.log('Soma dos valores pares contidos no array: ' + filtraPareseSoma(numeros4))

// questao 12

produtos = [
  { nome: "Notebook", valor: 2500, quantidadeEmEstoque: 10 },
  { nome: "Celular",  valor: 1500, quantidadeEmEstoque: 0 },
  { nome: "Monitor",  valor: 800,  quantidadeEmEstoque: 5 },
  { nome: "Teclado",  valor: 100,  quantidadeEmEstoque: 0 },
  { nome: "Mouse",    valor: 50,   quantidadeEmEstoque: 20 }
];

function filtrarProdutosEmEstoque(produtos) {
    let produtosDisponiveis = []
    
    for (let i = 0; i < produtos.length; i++){
        if (produtos[i].quantidadeEmEstoque > 0) {
            produtosDisponiveis.push(produtos[i])
        }
    }

    return produtosDisponiveis
}

console.log('Produtos: ', produtos)
console.log('Produtos disponiveis em estoque: ', filtrarProdutosEmEstoque(produtos))

// questao 13

function somaValoresProdutos(produtos) {
    let soma = 0
    for (let i = 0; i < produtos.length; i++) {
        soma += produtos[i].valor * produtos[i].quantidadeEmEstoque
    }
    return soma
}

console.log('Soma dos valores dos produtos em estoque: ', somaValoresProdutos(filtrarProdutosEmEstoque(produtos)))

// questao 14

function primeiroNumeroMaiorQue10(arr) {
    const primeiroMaiorQue10 = arr.find(num => num > 10)
    return primeiroMaiorQue10
}

let numeros5 = [3, 8, 12, 5, 20]

console.log('Array de entrada: ' + numeros5)
console.log('Primeiro numero maior que 10 encontrado no array: ' + primeiroNumeroMaiorQue10(numeros5))

// questao 15

alunos = [
  { nome: "João",  nota: 5.5 },
  { nome: "Maria", nota: 6.8 },
  { nome: "Pedro", nota: 7.2 },
  { nome: "Ana",   nota: 9.0 }
];

const alunoNotaMaiorQue7 = alunos.find(aluno => aluno.nota >= 7)

console.log('Alunos', alunos)
console.log('Primeiro aluno que tirou nota maior ou igual a 7: ', alunoNotaMaiorQue7)

// // questao 16

function ordenaPalavras(arr) {
    arr.sort()
}

let palavras3 = ["Maria", "Ana", "João", "Bruna"]

console.log('Palavras de entrada: ' + palavras3)
ordenaPalavras(palavras3)
console.log('Palavras em ordem alfabetica: ' + palavras3)

// // questao 17

produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Mouse",   preco: 50 },
  { nome: "Monitor", preco: 800 },
  { nome: "Notebook",preco: 2500 }
];

console.log('Produtos: ', produtos)
// Dado um array de produtos com propriedades nome e preco, use sort para ordenar os produtos do mais barato para o mais caro
console.log('Produtos ordenados do mais barato ao mais caro: ', (produtos.sort((a, b) => a.preco - b.preco)))

// questao 18

let array5 = [10, 25, 60, 40, 80]

indice = array5.findIndex(n => n > 50)

console.log('Array de entrada: ' + array5)
console.log('Indice no array do primeiro valor maior que 50: ' + indice)

// questao 19

produtos = [
  { nome: "Caderno", estoque: 5 },
  { nome: "Caneta",  estoque: 0 },
  { nome: "Borracha",estoque: 2 }
];

let indice = produtos.findIndex(p => p.estoque == 0)

console.log('Produtos: ', produtos)
console.log('Indice do primeiro produto com estoque igual a 0: ' + indice)

// questao 20

function montaFrase(arr) {
  let frase = arr.join(' ')
  return frase
}

let palavras4 = ["Eu", "gosto", "de", "JavaScript"]

console.log('Array de palavras: ' + palavras4)
console.log('Frase formada a partir do array de palavras: ' + montaFrase(palavras4))

// questao 21

function montaCodigo(arr) {
  let codigo = arr.join('-')
  return codigo
}

let partesCodigo = ["PROD", "2025", "XYZ"]

console.log('Partes do codigo: ' + partesCodigo)
console.log('Codigo montado: ' + montaCodigo(partesCodigo))

// questao 22

produtos = [
  { nome: "Notebook", valor: 2500, quantidadeEmEstoque: 10 },
  { nome: "Celular",  valor: 1500, quantidadeEmEstoque: 0 },
  { nome: "Monitor",  valor: 800,  quantidadeEmEstoque: 5 },
  { nome: "Mouse",    valor: 50,   quantidadeEmEstoque: 20 }
];

function produtoMaisCaro(arr) {
  let produtosDisponiveis = arr.filter(p => p.quantidadeEmEstoque > 0)
  produtosDisponiveis.sort((a, b) => a.valor - b.valor)
  return produtosDisponiveis[produtosDisponiveis.length-1]
}

console.log('Produtos: ', produtos)
console.log('Produto mais caro: ', produtoMaisCaro(produtos))


// questao 23

const alunos = [
  { nome: "João",  nota: 6.5 },
  { nome: "Maria", nota: 8.0 },
  { nome: "Ana",   nota: 9.5 },
  { nome: "Pedro", nota: 5.0 }
];

function alunosAprovados(arr) {
  let alunosAprovados = arr.filter(a => a.nota >= 7)
  alunosAprovados.sort()
  let nomesAlunosAprovados = alunosAprovados.map(a => a.nome)
  let nomes = nomesAlunosAprovados.join(', ')
  return nomes
}

console.log('Alunos: ', alunos)
console.log('Alunos aprovados em ordem alfabetica: ' + alunosAprovados(alunos))

// questao 24

let produtos = [
  { nome: "Teclado",  valor: 100 },
  { nome: "Mouse",    valor: 80 },
  { nome: "Monitor",  valor: 900 },
  { nome: "Notebook", valor: 3500 }
];

//  encontre o índice do primeiro produto com valor > 1000
let indiceMaiorQue1000 = produtos.findIndex(p => p.valor > 1000)

console.log('Produto caro encontrado no indice ' + indiceMaiorQue1000 + ': ' + produtos[indiceMaiorQue1000].nome)

// questao 25

produtos = [
  { nome: "Notebook", valor: 2500, quantidadeEmEstoque: 10 },
  { nome: "Celular",  valor: 1500, quantidadeEmEstoque: 0 },
  { nome: "Monitor",  valor: 800,  quantidadeEmEstoque: 5 },
  { nome: "Teclado",  valor: 100,  quantidadeEmEstoque: 0 },
  { nome: "Mouse",    valor: 50,   quantidadeEmEstoque: 20 }
];

function totalEmEstoqueReais(arr) {
  let produtosEmEstoque = arr.filter(p => p.valor > 0)
  let qtdEmEstoqueReais = produtosEmEstoque.map(p => p.valor * p.quantidadeEmEstoque)
  const soma = qtdEmEstoqueReais.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
  return soma
}

console.log('Estoque disponivel: ', produtos)
console.log('Total em estoque (R$): ' + totalEmEstoqueReais(produtos))