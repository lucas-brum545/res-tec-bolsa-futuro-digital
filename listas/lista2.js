// Contagem regressiva
// Peça um número N e faça contagem regressiva até 0 com while, mostrando cada número com alert.

import leitor from 'readline-sync'

// let num = Number(leitor.question('Entre com um numero: '))

// while(num >= 0){
//     console.log(num)
//     num--
// }

// Tabuada personalizada
// Peça um número e mostre sua tabuada de 1 a 10 usando while.

// let valor = Number(leitor.question('Digite um numero para a tabuada: '))

// for(let i = 1; i <= 10; i++){
//     console.log(valor + ' * ' + i + " = " + (i*valor))
// }

// Acumulador até zero
// Peça números repetidamente. Some tudo. Pare quando o usuário digitar 0. Mostre a soma final.

// let acumulador = 0
// let num

// do{
//     num = Number(leitor.question('Digite um numero (0 para sair): '))

//     if(num!=0){
//         acumulador+=num
//     }
// }while(num!=0)

// console.log('Soma dos numeros inseridos: ' + acumulador)

// Senha com 3 tentativas
// Defina uma senha fixa. Permita até 3 tentativas com while. Mostre “Acesso permitido” ou “Acesso bloqueado”

// const senha = '1234@'
// let usuarioAcertou = false
// let senhaUsuario
// let cont = 0

// do{
//     senhaUsuario = leitor.question('Digite a senha: ')

//     if(senhaUsuario!=senha){
//         console.log('Senha inválida, tente novamente.')
//     }
//     else if(senhaUsuario === senha){
//         usuarioAcertou = true
//     }

//     cont++
// }while(cont!=3 && !usuarioAcertou)

// if(usuarioAcertou){
//     console.log('Acesso permitido.')
// }
// else{
//     console.log('Acesso negado.')
// }

// Números pares até N
// Peça um número e mostre todos os pares de 1 até N com while.

// let num = Number(leitor.question('Entre com um numero: '))

// for(let i = 0; i <= num; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// Adivinha até acertar
// Número secreto fixo. Continue perguntando até acertar. Ao final, mostre “Acertou!”.

// const numeroSecreto = 4
// let num

// while(num!=numeroSecreto){
//     num = Number(leitor.question('Digite um numero: '))

//     if(num!=numeroSecreto){
//         console.log('Errado! Tente novamente!')
//     }
// }

// Menu interativo simples
// Menu: 1- “Olá”, 2- “Hoje é...”, 3- Sair. Use while para repetir até escolher sair.

// Soma até limite
// Peça um limite. Vá pedindo números e somando até ultrapassar o limite. Mostre o total.

// let soma = 0

// let limite = Number(leitor.question('Entre com um limiar de soma: '))

// while(soma < limite){
//     let num = Number(leitor.question('Digite um valor: '))
//     soma+=num
// }

// Múltiplos de 3
// Peça um número e liste todos os múltiplos de 3 até ele com while.

// let num = Number(leitor.question('Entre com um valor: '))

// console.log('Multiplos de 3 até ' + num)
// for(let i=0; i <= num; i++){
//     if(i % 3 == 0){
//         console.log(i)
//     }
// }

// Maior número digitado
// Peça números até o usuário digitar 0. Mostre qual foi o maior número digitado.

// let num
// let numeros = []

// while(num!=0){
//     num = leitor.question('Digite um numero: ')
//     if(num!=0){
//         numeros.push(num)
//     }
// }

// let maior = numeros[0]

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
// }

// console.log('Maior numero digitado: ' + maior)


// Contagem crescente
// Peça um número N e conte de 1 até N com while, mostrando cada número.

// let num = Number(leitor.question('Entre com um numero: '))
// let i = 1

// while(i <= num){
//     console.log(i)
//     i++
// }

// Somar apenas positivos
// Vá pedindo números e somando apenas os positivos. Pare quando digitar 0. Mostre a soma dos positivos.

// let somaPositivos = 0
// let num

// while(num != 0){
//     num = Number(leitor.question('Entre com um numero: (0 para sair)'))
//     if(num > 0){
//         somaPositivos+=num
//     }
// }

// console.log('Soma dos numeros positivos digitados: ' + somaPositivos)

// Entrada validada (nota 0 a 10)
// Peça uma nota. Enquanto estiver fora do intervalo [0, 10], continue pedindo. Ao final, mostre a nota válida.

// let nota

// do{
//     nota = Number(leitor.question('Entre com a nota: '))
// }while(nota<0 || nota>10)

// console.log('Nota: ' + nota)

// Calculadora em loop
// Enquanto o usuário não digitar “sair”, peça dois números e uma operação + - * /. Use if para calcular e alert para mostrar.

// let val1, val2, op

// while(op!=='sair'){
//     val1 = Number(leitor.question('Entre com o primeiro valor: '))
//     val2 = Number(leitor.question('Entre com o segundo valor: '))
//     op = leitor.question('Entre com a opcao desejada (+,-,*,/ ou sair: ')

//     if(op == '+'){
//         console.log('Soma de ' + val1 + ' e ' + val2 + ' = ' + val1+val2)
//     }
//     else if(op == '-'){
//         console.log('Subtracao de ' + val1 + ' e ' + val2 + ' = ' + (val1-val2))
//     }
//     else if(op == '*'){
//         console.log('Multiplicacao de ' + val1 + ' e ' + val2 + ' = ' + val1*val2)
//     }
//     else if(op == '/'){
//         console.log('Divisao de ' + val1 + ' e ' + val2 + ' = ' + val1/val2)
//     }
//     else if(op == 'sair'){
//         console.log('Obrigado!')
//     }
//     else{
//         console.log('Operacao invalida! Tente novamente!')
//     }
// }

// Múltiplos de X até um limite
// Peça um número base X e um limite L. Liste todos os múltiplos de X até L com while.

// let x = Number(leitor.question('Entre com um numero base: '))
// let l = Number(leitor.question('Entre com um numero limite: '))

// for(let i = 0; i <= l; i=i+x){
//     console.log(i)
// }

// // Contar pares e ímpares
// // Peça números até digitar 0. No fim, mostre quantos eram pares e quantos ímpares

// let contImpares = 0
// let contPares = 0
// let numeros = []
// let num

// while(num!=0){
//     num = Number(leitor.question('Entre com um numero (0 para sair): '))
//     numeros.push(num)
// }


// Maior e menor
// Peça números até 0. No final, mostre maior e menor valores digitados (desconsidere o 0)

// let num
// let numeros = []

// while(num!=0){
//     num = Number(leitor.question('Entre com um numero (0 para sair): '))
//     if (num != 0) { numeros.push(num) }
// }

// // rotina que encontra os valores maior e o menor no vetor

// let maior = numeros[0]
// let menor = numeros[0]

// for (let i = 0; i < numeros.length; i++){
//     if (numeros[i] > maior) {
//         maior = numeros[i]
//     }
//     if (numeros[i] < menor) {
//         menor = numeros[i]
//     }
// }

// console.log("Maior numero digitado: " + maior)
// console.log("Menor numero digitado: " + menor)

// Adivinha com dica
// Número secreto fixo. Enquanto errar, diga se o palpite é maior ou menor que o segredo. Quando acertar, mostre quantas tentativas foram necessárias.

// const numeroSecreto = 13
// let numTentativas = 0
// let acertou = false

// while (!acertou) {
//     let numeroUsuario = Number(leitor.question('Entre com um numero: '))

//     if (numeroSecreto === numeroUsuario) {
//         acertou = true
//         console.log('Parabéns! Voce acertou! Numero de tentativas: ' + numTentativas)
//     }
//     else if (numeroSecreto > numeroUsuario) {
//         console.log('O numero secreto é MAIOR que ' + numeroUsuario)
//         numTentativas++
//     }
//     else if (numeroSecreto < numeroUsuario) {
//         console.log('O numero secreto é MENOR que ' + numeroUsuario)
//         numTentativas++
//     }
// }

// Somatório de 1 até N
// Peça N e calcule a soma 1 + 2 + ... + N usando while. Mostre o resultado.

// let soma = 0
// let numeroN = leitor.question('Entre com um numero N: ')

// for (let i = 1; i <= numeroN; i++){
//     soma+=i
// }

// console.log('Soma total de 1 até ' + numeroN + ': ' + soma)

// Tabela °C → °F
// Peça um número N. De 1 até N, mostre uma tabelinha com o valor em °C e sua conversão para °F (F = C * 9/5 + 32) usando while.

let numeroN = leitor.question('Entre com um numero N: ')

let temperaturasC = []
let temperaturasF = []
let index = 1

while (index <= numeroN) {
    let tempCelsius = Number(leitor.question('Entre com uma temperatura em grau celsius: '))
    temperaturasC.push(tempCelsius)
    let tempFarenheit = tempCelsius * (9 / 5) + 32
    temperaturasF.push(tempFarenheit)
    index++
}

console.log('| C°  ||  F° |')
for (let i = 0; i < temperaturasC.length; i++){
    console.log('| ' + temperaturasC[i] + '  ||  ' + temperaturasF[i] + ' |')
}
