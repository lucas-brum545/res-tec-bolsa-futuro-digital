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

let num
let numeros = []

while(num!=0){
    num = leitor.question('Digite um numero: ')
    if(num!=0){
        numeros.push(num)
    }
}

let maior = numeros[0]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    }
}

console.log('Maior numero digitado: ' + maior)