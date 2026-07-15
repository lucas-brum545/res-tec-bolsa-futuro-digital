import { lerNumeroGarantido } from "./lerNumero.js"
import { calculadora } from "./funcoes.js"
import leitor from 'readline-sync'

let valor1 = lerNumeroGarantido("Digite o valor 1: ")
let valor2 = lerNumeroGarantido("Digite o valor 2: ")
let operador = leitor.question("Digite a operacao: ")

let resultado = calculadora(operador,valor1,valor2)
console.log('Resultado da operacao: ' + resultado)