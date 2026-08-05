import * as readline from "node:readline/promises";
import { stdin, stdout} from "node:process";

let leitor = readline.createInterface({
    input:stdin,
    output: stdout
})

let promise = leitor.question('Digite seu nome: ')

function quandoRetornar(retorno){
    console.log('O usuário digitou o nome ' + retorno)
    function retornoEmail(email){
        console.log('Email: ' + email)
        leitor.close()
    }
    let promessaEmail = leitor.question('Digite seu e-mail: ')
    promessaEmail.then(retornoEmail)
}

promise.then(quandoRetornar)
