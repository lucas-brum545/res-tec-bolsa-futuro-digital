function filtrarPositivos(numeros){
    let numerosPositivos = []
    for(let i=0;i<numeros.length;i++){
        if(numeros[i] > 0){
            numerosPositivos.push(numeros[i])
        }
    }

    return numerosPositivos
}

let numeros = [-4,0,3,-2,7]

console.log('Array: ' + numeros)
console.log('Array somente com numeros positivos: ' + filtrarPositivos(numeros))