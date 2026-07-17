import leitor from 'readline-sync'

function aplicarDesconto(produto, percentual){
    const novoProduto = {}
    percentual = percentual/100
    novoProduto.nome = produto.nome
    novoProduto.preco = produto.preco - (percentual * produto.preco)
    return novoProduto
}

const produto = {}

produto.nome = leitor.question('Entre com o nome de um produto: ')
produto.preco = leitor.question('Entre com o preco do produto: ')
let desconto = leitor.question('Entre com o desconto obtido: ')

console.log('Produto sem desconto: ',produto)
console.log('Produto com desconto: ',aplicarDesconto(produto,desconto))
