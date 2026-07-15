import leitor from 'readline-sync'

// tratamento de erros e import/export
function lerNumero(texto){
    let valor = leitor.question(texto)
    if(valor==""){
        throw new Error("Valor não pode ser vazio")
    }
    let valorNumero = Number(valor)
    if(Number.isNaN(valorNumero)){
        throw new TypeError("Entrada invalida: " + valor + " não é um número.")
    }

    return valorNumero;
}

function lerNumeroGarantido(texto){
    let naoEhNumero = true
    while (naoEhNumero) {
        try {
            let numero = lerNumero(texto)
            naoEhNumero = false
            return numero
        } catch (erro) {
            console.log("Erro! " + erro.message)
        }
    }
}

export {lerNumero, lerNumeroGarantido}