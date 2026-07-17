import leitor from 'readline-sync'

function lerProduto(){
    const produto = {}
    produto.nome = leitor.question('Entre com o nome de um produto: ')
    produto.preco = Number(leitor.question('Entre com o preco do produto: '))
    produto.quantidade = Number(leitor.question('Entre com a quantidade do produto: '))

    return produto
}

let produto = lerProduto()

console.log(produto)