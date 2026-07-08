// import leitor from 'readline-sync'

// let numero
// let ehNumero 

// while(!ehNumero){
//     numero = leitor.question("Digite um numero: ")
//     ehNumero = !Number.isNaN(numero)

//     if(!ehNumero){
//         console.log('Nao eh um numero, tente novamente')
//     }
// }

// console.log('Numero digitado eh ' + numero)

import leitor, { question } from 'readline-sync'

let numero

numero = leitor.question('Digite um numero: ')

while(numero <= 50){
    console.log(numero++)
}
