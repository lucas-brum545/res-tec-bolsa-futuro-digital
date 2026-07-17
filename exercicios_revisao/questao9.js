import leitor from 'readline-sync'

function calcularTotal(produto){
    return produto.quantidade * produto.preco
}

const produto = {}

let nome = leitor.question('Entre com um nome para o produto: ')
let preco = leitor.question('Entre com o preco do produto: ')
let quantidade = leitor.question('Entre com a quantidade do produto: ')

produto.nome = nome
produto.preco = preco
produto.quantidade = quantidade

console.log('Total de custo do produto ' + produto.nome + ': R$' + calcularTotal(produto))
