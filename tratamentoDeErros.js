function divisao(dividendo, divisor){
    if(divisor!=0)
        return dividendo/divisor
    else
        throw new Error("Divisão por zero!") // tratamento de erros
}

console.log(divisao(20,10))
