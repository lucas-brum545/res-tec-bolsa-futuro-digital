function dobrarValores(numeros){
    for(let i=0;i<numeros.length;i++){
        numeros[i]=numeros[i]*2
    }

    return numeros
}

let numeros = [2,4,6]

console.log('Array: ' + numeros)
console.log('Array em dobro: ' + dobrarValores(numeros))

