import leitor from 'readline-sync'

// questao 1

function somar(a, b) {
    return a + b
}

let numA = Number(leitor.question('Entre com o primeiro valor: '))
let numB = Number(leitor.question('Entre com o segundo valor: '))

console.log('Soma de ' + numA + ' e ' + numB + ' = ' + somar(numA, numB))

// questao 2

function media3(a, b, c) {
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c))
        return null
    
    a = Number(a)
    b = Number(b)
    c = Number(c)

    let media = ((a+b+c)/3)
    return media
}

let valorA = leitor.question('Entre com o primeiro valor: ')
let valorB = leitor.question('Entre com o segundo valor: ')
let valorC = leitor.question('Entre com o terceiro valor: ')

let media = media3(valorA, valorB, valorC)

if (media) {
    console.log('Media de ' + valorA + ', ' + valorB + ' e ' + valorC + ' = ' + media)
}
else {
    throw new EvalError('Valores invalidos!')
}

// questao 3

function saudar(nome) {
    return "Olá, " + nome + "!"
}

let nome = leitor.question('Digite seu nome: ')

console.log(saudar(nome))

// questao 4

function maximo(arr) {
    // testar se o array é vazio
    if (arr.length === 0) {
        return null
    }
    
    let maior = arr[0]

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }

    return maior
    
}

let numElementos = Number(leitor.question('Entre com o numero de elementos que deseja informar para o array: '))
let arr = []

for (let i = 0; i < numElementos; i++){
    let num = Number(leitor.question('Digite um valor: '))
    arr.push(num)
}

console.log('Maior valor de ' + arr + ': ' + maximo(arr))

// questao 5

function contarOcorrencias(arr, alvo) {
    let cont = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == alvo) {
            cont++
        }
    }

    return cont
}

let array = []

for (let i = 0; i < 4; i++){
    let num = Number(leitor.question('Digite um numero: '))
    array.push(num)
}

let alvo = Number(leitor.question("Digite um numero alvo: "))

console.log('Quantidade de ocorrencias de ' + alvo + ' em ' + array + ': ' + contarOcorrencias(array,alvo))

// questao 6

function maioresQueX(arr, x) {
    let arrMaiorQueX = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > x) {
            arrMaiorQueX.push(arr[i])
        }
    }

    return arrMaiorQueX
}

let array2 = [1, 2, 1, 4, 5, 6, 3, 1.5]
let x = 3

console.log('Array de entrada: ' + array2)
console.log('Array com valores maiores que ' + x + ': ' + maioresQueX(array2, x))

// questao 7

function paraNumeros(palavras) {
    let numeros = []
    for (let i = 0; i < palavras.length; i++){
        let convertido = Number(palavras[i])
        if(isNaN(convertido))
            numeros.push(0)
        else {
            numeros.push(convertido)
        }
    }

    return numeros
}



let palavras = ["oi", "tudo", "certo", 8]

console.log('Array de entrada: ' + palavras)
console.log('Array com as strings convertidas em numeros: ' + paraNumeros(palavras))

// questao 8

function lerNumero(mensagem) {
    let valorConvertido
    let valorValido = false
    while (!valorValido) {
        valorConvertido = Number(leitor.question(mensagem))
        if (Number.isNaN(valorConvertido)) {
            console.log('Valor invalido! Informe um numero valido!')
        }
        else {
            valorValido = true
        }
    }
    return valorConvertido
}

let soma = 0

for (let i = 0; i < 3; i++){
    let num = lerNumero('Digite um numero: ')
    soma+=num
}

let media = soma / 3

console.log('Media dos valores validos informados: ' + media.toFixed(2))

// questao 9

function dobro(n){
    return 2*n
}

function incrementar(n){
    return (n + 1)
}

function dobroMaisUm(n) {
    return incrementar(dobro(n))
}

let num = Number(leitor.question('Insira um numero: '))
console.log('Resultado do dobro mais um de ' + num + ': ' + dobroMaisUm(num))

// questao 10

function media(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++){
        soma+=arr[i]
    }
    let media = soma / arr.length
    return media
}

function maior(arr) {
    let maior = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }
    return maior
 }

function menor(arr) {
    let menor = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < menor) {
            menor = arr[i]
        }
    }
    return menor
}

let notas = []
let n = Number(leitor.question('Entre com numero de notas a serem informadas: '))

for (let i = 0; i < n; i++){
    let nota = Number(leitor.question('Digite a nota ' + (i+1) + ': '))
    notas.push(nota)
}

console.log('----------- RELATORIO ----------')
console.log('Media das notas: ' + media(notas).toFixed(2))
console.log('Maior nota informada: ' + maior(notas))
console.log('Menor nota informada: ' + menor(notas))
