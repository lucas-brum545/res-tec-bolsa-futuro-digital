import leitorTeclado from 'readline-sync'

let valorA = Number(leitorTeclado.question('Digite o primeiro valor: '))
let valorB = Number(leitorTeclado.question('Digite o segundo valor: '))
let soma = valorA + valorB
console.log('A soma dos dois valores digitados é: ' + soma)