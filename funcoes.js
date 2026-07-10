import leitor from 'readline-sync'

function lerNumero(){
    let valor = leitor.question('Digite um numero: ')
    valor = Number(valor) // tenta converter em um numero, se conseguir retorna um numero, se nao conseguir retorna NaN - not a number
    while(valor=='' || Number.isNaN(valor)){
        valor = leitor.question('Tente novamente: ')
        valor = Number(valor)
    }

    return valor
}

console.log('Ler valor 1: ')
let v1 = lerNumero()
console.log('Ler valor 2: ')
let v2 = lerNumero()

let soma = v1 + v2

console.log('Soma de v1 e v2 eh: ' + soma)


