import leitor from 'readline-sync'
let soma = 0
let numero = Number(leitor.question('Entre com um numero: '))

while(numero >= 1){
    soma+=numero
    numero--
}

console.log("Soma: " + soma)