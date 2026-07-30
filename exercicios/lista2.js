// Contagem regressiva
// Peça um número N e faça contagem regressiva até 0 com while, mostrando cada número com alert.

import leitor from 'readline-sync' // assincrona

let num = Number(leitor.question('Entre com um numero: '))

while(num >= 0){
    console.log(num)
    num--
}