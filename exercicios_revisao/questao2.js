import leitor from 'readline-sync'

function ehMaiorDeIdade(idade){
    if(idade>=18){
        return true
    }

    return false
}

let idade = leitor.question('Entre com sua idade: ')

if(ehMaiorDeIdade(idade)){
    console.log('Você é maior de idade.')
}
else{
    console.log('Você não é maior de idade.')
}