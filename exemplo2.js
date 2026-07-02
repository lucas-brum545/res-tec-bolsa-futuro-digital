import leitor from 'readline-sync'

let v1 = leitor.question("Entre com um valor: ")
let v1EmNumero = Number(v1)

if(!Number.isNaN(v1EmNumero)){
    console.log("é um numero")
    if(v1EmNumero>10 && v1EmNumero<100){
        console.log("o numero esta entre 10 e 100")
    }
    else{
        if(v1EmNumero>0 || v1EmNumero>200){
            console.log("o numero eh maior que 0 ou maior que 200")
        }
    }
}
else{
    console.log("nao é um numero")
}