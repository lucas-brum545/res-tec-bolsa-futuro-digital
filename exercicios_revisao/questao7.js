function contarValor(elementos, valor){
    let cont = 0
    for(let i=0;i<elementos.length;i++){
        if(valor === elementos[i]){
            cont++
        }
    }

    return cont
}

// ex 1
let elementos = [1,2,3,2,4,2]
let valor = 2

console.log('Array: ' + elementos)
console.log('Quantidades de vezes que o valor ' + valor + ' aparece no array: ' + contarValor(elementos,valor))

// ex 2

elementos = ["a", "b", "a", "c"]
valor = "a"

console.log('Array: ' + elementos)
console.log('Quantidades de vezes que o valor ' + valor + ' aparece no array: ' + contarValor(elementos,valor))