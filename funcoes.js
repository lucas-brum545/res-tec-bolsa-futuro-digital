import leitor from 'readline-sync'

// function lerNumero(pergunta){
//     let valor = leitor.question(pergunta)
//     valor = Number(valor) // tenta converter em um numero, se conseguir retorna um numero, se nao conseguir retorna NaN - not a number
//     while(valor=='' || Number.isNaN(valor)){
//         valor = leitor.question('Tente novamente: ')
//         valor = Number(valor)
//     }

//     return valor
// }

// // console.log('Ler valor 1: ')
// // let v1 = lerNumero()
// // console.log('Ler valor 2: ')
// // let v2 = lerNumero()

// // let soma = v1 + v2

// // console.log('Soma de v1 e v2 eh: ' + soma)


// function calculadora(operacao, v1, v2){
//     let resultado
//     switch (operacao) {
//         case '+': resultado = v1 + v2
//             break
//         case '-': resultado = v1 - v2
//             break
//         case '*': resultado = v1 * v2
//             break
//         case '/': resultado = v1 / v2
//             break
//         default:
//             console.log("Operacao invalida")
//     }

//     return resultado
// }

// console.log(calculadora('+',2,3))
// console.log(calculadora('-',2,3))
// console.log(calculadora('*',2,3))
// console.log(calculadora('/',2,3))
// console.log(calculadora(')',2,3))
// calculadora('?',2,3)

// export{lerNumero}
// export{calculadora}


function somaLista(lista){
    let soma = 0

    for(let i=0;i<lista.length;i++){
        soma += lista[i]
    }

    return soma
}

let l = [1,2,3,4,5]
console.log(somaLista(l))