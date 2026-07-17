function somarArrays(array1, array2){
    if(array1.length != array2.length){
        throw new Error('Operação inválida: arrays de tamanhos diferentes!')
    }

    let arraySoma = []

    for(let i=0;i<array1.length;i++){
        arraySoma.push(array1[i] + array2[i])
    }

    return arraySoma
}

let array1 = [1,2,3]
let array2 = [4,5,6]

console.log('Array 1: ' + array1)
console.log('Array 2: ' + array2)
console.log('Soma dos arrays: ' + somarArrays(array1,array2))