import leitor from 'readline-sync'

let v1 = leitor.question("Digite o primeiro valor: ")
let v2 = leitor.question("Digite o segundo valor: ")
let operacao = leitor.question("Entre com a operacao desejada (+, -, *, /): ")

v1 = Number(v1)
v2 = Number(v2)

let resultado

switch(operacao){
    case '+': resultado = v1+v2
            break
    case '-': resultado = v1-v2
            break
    case '*': resultado = v1*v2
            break
    case '/': resultado = v1/v2
            break
    default:
        console.log("Operacao invalida")
}

console.log("Resultado de " + v1 + operacao + v2 + " = " + resultado)