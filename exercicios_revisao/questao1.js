import leitor from 'readline-sync'

function calcularIdade(anoNascimento, anoAtual){
    return anoAtual - anoNascimento
}

console.log('CALCULADORA DE IDADE')
let anoNascimento = leitor.question('Entre com o ano do seu nascimento: ')
let anoAtual = leitor.question('Entre com o ano atual: ')

console.log('Sua idade é ' + calcularIdade(anoNascimento,anoAtual) + ' anos.')