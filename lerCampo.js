import leitor from 'readline-sync'

let objeto={
    nome: 'Lucas',
    idade: 23,
    email: 'teste@exemplo.com',
}

let campo = leitor.question('Qual campo quer ver? ')

if(objeto[campo]!==undefined)
    console.log(objeto[campo])
else
    console.log('Campo nao existe!')

