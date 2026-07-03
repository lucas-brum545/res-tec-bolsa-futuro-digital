import leitor from 'readline-sync'
let itensNota = leitor.question('Quantos itens tem a nota: ')
itensNota = Number(itensNota)
let somaTotalNota = 0
let itemAtual = 1

while(itemAtual <= itensNota){
    let valor = leitor.question('Entre com o valor do item ' + itemAtual + ': ')
    valor = Number(valor)
    somaTotalNota+=valor
    itemAtual++
}

console.log('O total das compras foi: R$' + somaTotalNota)