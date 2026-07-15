import leitor from 'readline-sync'
import './funcoes.js'
import { calculadora, lerNumero } from './funcoes.js'

// let v1 = leitor.question("Digite o primeiro valor: ")
// let v2 = leitor.question("Digite o segundo valor: ")
// let operacao = leitor.question("Entre com a operacao desejada (+, -, *, /): ")

// v1 = Number(v1)
// v2 = Number(v2)

// let resultado

// switch(operacao){
//     case '+': resultado = v1+v2
//             break
//     case '-': resultado = v1-v2
//             break
//     case '*': resultado = v1*v2
//             break
//     case '/': resultado = v1/v2
//             break
//     default:
//         console.log("Operacao invalida")
// }

// console.log("Resultado de " + v1 + operacao + v2 + " = " + resultado)

let valor1 = lerNumero('Digite o valor 1: ')
let valor2 = lerNumero('Digite o valor 2: ')
let op = leitor.question('Digite a operacao desejada (+, -, *, /): ')
let resultado = calculadora(op,valor1,valor2)
console.log("Resultado de " + valor1 + op + valor2 + " = " + resultado)