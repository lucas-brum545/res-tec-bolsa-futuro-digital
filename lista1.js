import leitor from 'readline-sync'

// questao 1

// let nome_usuario = leitor.question('Entre com seu nome: ')

// console.log('Olá, ' + nome_usuario + '! Seja bem vindo(a)!')

// questao 2

// let v1 = leitor.question('Entre com o primeiro valor: ')
// let v2 = leitor.question('Entre com o segundo valor: ')

// v1 = Number(v1)
// v2 = Number(v2)

// let soma = v1+v2

// console.log('A soma de ' + v1 + ' e ' + v2 + ' eh ' + soma)

// questao 3

// let soma = 0
// let cont = 0
// const notas_tam = 3

// while(cont < notas_tam){
//     let nota = Number(leitor.question('Informe uma nota: '))
//     soma+=nota
//     cont++
// }

// let media = soma / notas_tam

// console.log('Media das notas informadas: ' + media.toFixed(2))

// questao 4

// let num = Number(leitor.question('Digite um numero: '))

// if(num % 2 == 0){
//     console.log('O numero ' + num + ' eh par.')
// }
// else{
//     console.log('O numero ' + num + ' nao eh par.')
// }

// questao 5

// let idade = Number(leitor.question('Entre com sua idade: '))

// if(idade >= 18){
//     console.log('Voce eh maior de idade.')
// }
// else{
//     console.log('Voce eh menor de idade')
// }

// questao 6

// let v1 = Number(leitor.question('Entre com o valor 1: '))
// let v2 = Number(leitor.question('Entre com o valor 2: '))
// let op = leitor.question('Entre com a operacao desejada (+, -, *, /): ')

// if(op == '+'){
//     console.log(v1 + '+' + v2 + ' = ' + (v1+v2))
// }
// else{
//     if(op == '-'){
//         console.log(v1 + '-' + v2 + ' = ' + (v1-v2))
//     }
//     else{
//         if(op == '*'){
//             console.log(v1 + ' * ' + v2 + ' = ' + (v1*v2))
//         }
//         else{
//             if(op == '/'){
//                 console.log(v1 + ' / ' + v2 + ' = ' + (v1/v2))
//             }
//             else{
//                 console.log('Operacao invalida!')
//             }
//         }
//     }
// }

// questao 7

// let v1 = Number(leitor.question('Digite o primeiro valor: '))
// let v2 = Number(leitor.question('Digite o segundo valor: '))

// if(v1>v2){
//     console.log(v1 + ' eh maior que ' + v2)
// }
// else{
//     if(v2>v1){
//         console.log(v2 + ' eh maior que ' + v1)
//     }
//     else{
//         console.log('Os dois numeros sao iguais. ')
//     }
// }

// questao 8

let nota1 = Number(leitor.question('Entre com a primeira nota: '))
let nota2 = Number(leitor.question('Entre com a segunda nota: '))

let media = (nota1+nota2)/2

if(media >= 7){
    console.log('Aprovado')
}
else{
    console.log('Reprovado')
}