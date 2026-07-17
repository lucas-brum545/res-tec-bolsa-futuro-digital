import leitor from 'readline-sync'

function criarProduto(nome, preco, quantidade){
    const produto = {};
    produto.nome = nome;
    produto.preco = preco;
    produto.quantidade = quantidade;

    return produto;
}

let nome = leitor.question('Entre com um nome para o produto: ')
let preco = leitor.question('Entre com o preco do produto: ')
let quantidade = leitor.question('Entre com a quantidade do produto: ')

console.log(criarProduto(nome,preco,quantidade),)