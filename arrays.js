import leitor from 'readline-sync'

// let lista = [2,4,7,8]
// console.log(lista)

// let lista2 = ["casa", "tv", "abacate","batedeira"]

// for(let indice=0; indice < lista2.length; indice++){
//     console.log(lista2[indice])
// }

// let valores = [2, 5, 8, 12, 6]

// let soma = 0

// for(let i=0;i<valores.length;i++){
//     soma+=valores[i]
// }

// console.log("Soma dos valores da lista " + valores + " : " + soma)
// console.log("Média dos valores da lista " + valores + " : " + (soma/valores.length).toFixed(2))

// como add valores

let lista = []
lista.push("Casa")
lista.push("TV")
lista.push("Abacate")
console.log(lista)

// ler usando readline-sync textos do usuario ate ele digitar sair

lista = []
let elemento;

while(elemento != 'sair'){
    elemento = leitor.question("Entre com um texto para add a lista ('sair' para encerrar): ")
    if(elemento != 'sair'){
        lista.push(elemento)
    }
}

console.log("Lista gerada: ")
for(let i=0;i<lista.length;i++){
    console.log(lista[i])
}

console.log("Ao contrário")
for(let i=lista.length-1;i>=0;i--){
    console.log(lista[i])
}