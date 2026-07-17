import leitor from 'readline-sync'

function classificarTemperatura(temperatura){
    if(temperatura < 15){
        return 'Frio'
    }
    else if(temperatura >= 15 && temperatura <= 25){
        return 'Agradável'
    }
    else{
        if(temperatura > 25){
            return 'Quente'
        }
    }
}

let temp = leitor.question('Entre com a temperatura atual: ')

console.log('O clima está ' + classificarTemperatura(temp))